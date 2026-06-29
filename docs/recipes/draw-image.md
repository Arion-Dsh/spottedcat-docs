# Draw an Image

Use `Image::new` when you already have RGBA pixels in memory.

```rust
use spottedcat::{Context, DrawOption, Image, Pt, Spot, WindowConfig, run};

struct Game {
    image: Image,
}

impl Spot for Game {
    fn initialize(ctx: &mut Context) -> Self {
        let width = 96usize;
        let height = 96usize;
        let mut rgba = vec![0u8; width * height * 4];

        for y in 0..height {
            for x in 0..width {
                let i = (y * width + x) * 4;
                rgba[i..i + 4].copy_from_slice(&[241, 126, 72, 255]);
            }
        }

        let image = Image::new(ctx, Pt::from(width as f32), Pt::from(height as f32), &rgba)
            .expect("create image");

        Self { image }
    }

    fn update(&mut self, _ctx: &mut Context, _dt: std::time::Duration) {}

    fn draw(&mut self, ctx: &mut Context, screen: Image) {
        let (w, h) = spottedcat::window_size(ctx);
        let x = (w - self.image.width()) / 2.0;
        let y = (h - self.image.height()) / 2.0;

        screen.draw(ctx, &self.image, DrawOption::default().with_position([x, y]));
    }

    fn remove(&mut self, _ctx: &mut Context) {}
}

fn main() {
    run::<Game>(WindowConfig::default());
}
```

For a complete runnable version, see [`examples/rgb_image.rs`](https://github.com/Arion-Dsh/spottedcat/blob/main/examples/rgb_image.rs).

