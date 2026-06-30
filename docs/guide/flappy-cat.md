# Build Flappy Cat

This guide builds a small Flappy-style game with Spottedcat. By the end, you will have a playable loop with movement, input, obstacles, collision, score, restart, and the built-in splash.

You can also [play the finished WASM demo](/play/flappy-cat).

## 1. Create the project

```bash
cargo new flappy-cat
cd flappy-cat
cargo add spottedcat@1.0.1
```

Replace `src/main.rs` as you go through the guide.

## 2. Start with state

Spottedcat games are `Spot` types. Put the game state in a struct:

```rust
use spottedcat::{Context, DrawOption, Image, Key, MouseButton, OneShotSplash, Pt, Spot, Text, TouchPhase, WindowConfig, run};

const BIRD_X: f32 = 92.0;
const BIRD_SIZE: f32 = 28.0;
const GRAVITY: f32 = 920.0;
const JUMP_VELOCITY: f32 = -330.0;
const PIPE_WIDTH: f32 = 58.0;
const PIPE_GAP: f32 = 150.0;
const PIPE_SPEED: f32 = 150.0;

#[derive(Clone, Copy)]
struct Pipe {
    x: f32,
    gap_y: f32,
    scored: bool,
}

struct FlappyCat {
    bird: Image,
    pipe: Image,
    ground: Image,
    font_id: u32,
    bird_y: f32,
    bird_vy: f32,
    pipes: [Pipe; 3],
    score: u32,
    game_over: bool,
    time: f32,
}
```

The important pattern is simple: keep positions and velocities in your struct, update them in `update`, and draw them in `draw`.

## 3. Generate tiny art in code

For a first game, generated pixel art is enough. You do not need an asset pipeline yet.

```rust
fn solid_image(ctx: &mut Context, width: usize, height: usize, color: [u8; 4]) -> Image {
    let mut pixels = vec![0; width * height * 4];
    for pixel in pixels.chunks_exact_mut(4) {
        pixel.copy_from_slice(&color);
    }
    Image::new(ctx, Pt::from(width as f32), Pt::from(height as f32), &pixels).unwrap()
}
```

Use one square-ish image for the cat, one 1-pixel-high image scaled into pipes, and one small ground strip.

## 4. Initialize the game

```rust
impl Spot for FlappyCat {
    fn initialize(ctx: &mut Context) -> Self {
        const FONT: &[u8] = include_bytes!("../assets/DejaVuSans.ttf");
        let font_id = spottedcat::register_font(ctx, FONT.to_vec());

        let bird = solid_image(ctx, 28, 28, [241, 126, 72, 255]);
        let pipe = solid_image(ctx, PIPE_WIDTH as usize, 1, [79, 241, 217, 255]);
        let ground = solid_image(ctx, 1, 24, [41, 28, 24, 255]);

        Self {
            bird,
            pipe,
            ground,
            font_id,
            bird_y: 220.0,
            bird_vy: 0.0,
            pipes: [
                Pipe { x: 420.0, gap_y: 180.0, scored: false },
                Pipe { x: 630.0, gap_y: 245.0, scored: false },
                Pipe { x: 840.0, gap_y: 150.0, scored: false },
            ],
            score: 0,
            game_over: false,
            time: 0.0,
        }
    }

    // update, draw, and remove come next.
}
```

If you do not want text yet, skip the font and add score later.

## 5. Add flap input and gravity

Read input in `update`. Use `dt` so movement stays stable across frame rates.

```rust
fn update(&mut self, ctx: &mut Context, dt: std::time::Duration) {
    let dt = dt.as_secs_f32().min(1.0 / 20.0);

    let flap = spottedcat::key_pressed(ctx, Key::Space)
        || spottedcat::key_pressed(ctx, Key::Up)
        || spottedcat::mouse_button_pressed(ctx, MouseButton::Left)
        || spottedcat::touches(ctx)
            .iter()
            .any(|touch| touch.phase == TouchPhase::Started);

    if flap {
        self.bird_vy = JUMP_VELOCITY;
    }

    self.bird_vy += GRAVITY * dt;
    self.bird_y += self.bird_vy * dt;
}
```

That is already the heart of the game: input changes velocity, gravity pulls the cat down, and the draw step shows the result.

## 6. Move pipes and score

Each pipe moves left. When it leaves the screen, recycle it to the right.

```rust
for i in 0..self.pipes.len() {
    self.pipes[i].x -= PIPE_SPEED * dt;

    if !self.pipes[i].scored && self.pipes[i].x + PIPE_WIDTH < BIRD_X {
        self.pipes[i].scored = true;
        self.score += 1;
    }

    if self.pipes[i].x + PIPE_WIDTH < -20.0 {
        let farthest = self.pipes.iter().map(|pipe| pipe.x).fold(0.0_f32, f32::max);
        self.pipes[i] = Pipe {
            x: farthest + 210.0,
            gap_y: 130.0 + ((self.time * 1.7 + i as f32 * 2.1).sin() + 1.0) * 75.0,
            scored: false,
        };
    }
}
```

This is a common arcade pattern: a small fixed pool of obstacles, recycled forever.

## 7. Draw the frame

Draw the pipes by scaling a tiny image. Draw the cat at its current position.

```rust
fn draw(&mut self, ctx: &mut Context, screen: Image) {
    let (_w, h) = spottedcat::window_size(ctx);
    let ground_y = h.as_f32() - 36.0;

    for pipe in self.pipes {
        let top_h = (pipe.gap_y - PIPE_GAP * 0.5).max(0.0);
        let bottom_y = pipe.gap_y + PIPE_GAP * 0.5;
        let bottom_h = (ground_y - bottom_y).max(0.0);

        screen.draw(
            ctx,
            &self.pipe,
            DrawOption::default()
                .with_position([Pt::from(pipe.x), Pt::from(0.0)])
                .with_scale([1.0, top_h]),
        );

        screen.draw(
            ctx,
            &self.pipe,
            DrawOption::default()
                .with_position([Pt::from(pipe.x), Pt::from(bottom_y)])
                .with_scale([1.0, bottom_h]),
        );
    }

    screen.draw(
        ctx,
        &self.bird,
        DrawOption::default().with_position([Pt::from(BIRD_X), Pt::from(self.bird_y)]),
    );
}
```

## 8. Add collisions

Use rectangle overlap checks. For this game, simple axis-aligned collision is perfect.

```rust
fn overlaps(ax: f32, ay: f32, aw: f32, ah: f32, bx: f32, by: f32, bw: f32, bh: f32) -> bool {
    ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by
}
```

Check the bird against the ground and the two pipe rectangles. On collision, set `game_over = true`.

## 9. Add restart and splash

When the game is over, use the same flap input to reset positions and score. Then wrap the game with the built-in splash:

```rust
fn main() {
    run::<OneShotSplash<FlappyCat>>(WindowConfig {
        title: "Flappy Cat".to_string(),
        width: Pt::from(640.0),
        height: Pt::from(480.0),
        ..Default::default()
    });
}
```

The splash gives the tutorial a complete “from startup to game loop” shape.

## Finished version

The embedded demo is built from:

[`examples/wasm/flappy_cat`](https://github.com/Arion-Dsh/spottedcat/tree/main/examples/wasm/flappy_cat)

Build it with:

```bash
wasm-pack build examples/wasm/flappy_cat --release --target web --out-dir pkg
```

Then copy the generated `pkg` folder into the docs demo folder.
