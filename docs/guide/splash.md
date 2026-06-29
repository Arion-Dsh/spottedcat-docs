# Built-in Splash

Spottedcat includes a small branded intro scene: a pixel-art Rusty-spotted cat lockup generated directly by the engine. It is the same visual identity used by the documentation logo.

Use it when you want a lightweight startup screen before your main scene appears.

## Minimal usage

Wrap your root scene with `OneShotSplash<T>`:

```rust
use spottedcat::{Context, Image, OneShotSplash, Spot, WindowConfig, run};
use std::time::Duration;

struct Game;

impl Spot for Game {
    fn initialize(_ctx: &mut Context) -> Self {
        Self
    }

    fn update(&mut self, _ctx: &mut Context, _dt: Duration) {}

    fn draw(&mut self, _ctx: &mut Context, _screen: Image) {}

    fn remove(&mut self, _ctx: &mut Context) {}
}

fn main() {
    run::<OneShotSplash<Game>>(WindowConfig::default());
}
```

`OneShotSplash<Game>` shows the intro first, then switches to `Game`.

## Behavior

- The splash advances automatically after a short delay.
- Players can skip it with Space, Enter, mouse click, or touch.
- It is shown once per process for a given scene type, so mobile surface restoration can return directly to the game.
- The art is generated in code, so no font or image asset is required.

## Complete example

The repository includes a fuller example that shows the splash and then enters a text-based gameplay scene:

[`examples/one_shot_splash.rs`](https://github.com/Arion-Dsh/spottedcat/blob/main/examples/one_shot_splash.rs)

Run it from the engine repository:

```bash
cargo run --example one_shot_splash
```

