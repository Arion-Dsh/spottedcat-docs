# Use OneShotSplash

`OneShotSplash<T>` wraps your root scene and shows the built-in pixel-cat intro first.

```rust
use spottedcat::{Context, Image, OneShotSplash, Spot, WindowConfig, run};

struct Game;

impl Spot for Game {
    fn initialize(_ctx: &mut Context) -> Self {
        Self
    }

    fn update(&mut self, _ctx: &mut Context, _dt: std::time::Duration) {}

    fn draw(&mut self, _ctx: &mut Context, _screen: Image) {}

    fn remove(&mut self, _ctx: &mut Context) {}
}

fn main() {
    run::<OneShotSplash<Game>>(WindowConfig::default());
}
```

The splash advances automatically and can be skipped with Space, Enter, mouse click, or touch.

For the full guide, see [Built-in Splash](/guide/splash).

