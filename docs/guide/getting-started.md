# Quick Start

Spottedcat is a lightweight cross-platform 2D/3D game engine built with Rust and `wgpu`. This page creates a window and draws a white square at its center.

## Requirements

- The current stable Rust toolchain
- The graphics and audio system dependencies required by your desktop platform

Create a project and add the dependency:

```bash
cargo new my-game
cd my-game
cargo add spottedcat@1.0.1
```

The default configuration contains only the lean 2D core. Enable features as needed for image decoding, GLTF, 3D models, effects, or sensors:

```toml
[dependencies]
spottedcat = { version = "1.0.1", features = ["utils", "gltf", "effects", "sensors"] }
```

## Your first application

Replace `src/main.rs` with:

```rust
use spottedcat::{Context, DrawOption, Image, Pt, Spot, WindowConfig};
use std::time::Duration;

struct Game {
    tile: Image,
}

impl Spot for Game {
    fn initialize(ctx: &mut Context) -> Self {
        let pixels = vec![255; 64 * 64 * 4];
        let tile = Image::new(ctx, Pt(64.0), Pt(64.0), &pixels)
            .expect("create image");
        Self { tile }
    }

    fn update(&mut self, _ctx: &mut Context, _dt: Duration) {}

    fn draw(&mut self, ctx: &mut Context, screen: Image) {
        let (width, height) = spottedcat::window_size(ctx);
        screen.draw(
            ctx,
            &self.tile,
            DrawOption::default().with_position([width / 2.0, height / 2.0]),
        );
    }

    fn remove(&mut self, _ctx: &mut Context) {}
}

fn main() {
    spottedcat::run::<Game>(WindowConfig {
        title: "My Spottedcat Game".into(),
        ..Default::default()
    });
}
```

Run it:

```bash
cargo run
```

## Where to go next

- Learn about [Context, Spot, and fixed-step updates](/guide/core-concepts)
- Add the [built-in branded splash scene](/guide/splash)
- Explore [image and text rendering](/graphics/2d)
- Review the [1.0 stability policy](/guide/stability)
- Pick a complete example from the upstream [`examples`](https://github.com/Arion-Dsh/spottedcat/tree/main/examples) directory
