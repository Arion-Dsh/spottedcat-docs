# Move with Keyboard

Read input during `update` and apply movement using `dt`.

```rust
use spottedcat::{Context, Key, Spot};

struct Player {
    x: f32,
    y: f32,
    speed: f32,
}

impl Spot for Player {
    fn initialize(_ctx: &mut Context) -> Self {
        Self {
            x: 200.0,
            y: 200.0,
            speed: 240.0,
        }
    }

    fn update(&mut self, ctx: &mut Context, dt: std::time::Duration) {
        let dt = dt.as_secs_f32();

        if spottedcat::key_down(ctx, Key::W) || spottedcat::key_down(ctx, Key::Up) {
            self.y -= self.speed * dt;
        }
        if spottedcat::key_down(ctx, Key::S) || spottedcat::key_down(ctx, Key::Down) {
            self.y += self.speed * dt;
        }
        if spottedcat::key_down(ctx, Key::A) || spottedcat::key_down(ctx, Key::Left) {
            self.x -= self.speed * dt;
        }
        if spottedcat::key_down(ctx, Key::D) || spottedcat::key_down(ctx, Key::Right) {
            self.x += self.speed * dt;
        }
    }

    fn draw(&mut self, _ctx: &mut Context, _screen: spottedcat::Image) {}

    fn remove(&mut self, _ctx: &mut Context) {}
}
```

Use `key_down` for continuous movement and `key_pressed` for one-frame actions such as reset, pause, or menu confirm.

Full example: [`examples/input_example.rs`](https://github.com/Arion-Dsh/spottedcat/blob/main/examples/input_example.rs).

