# Render Text

Register a TrueType font once, then build `Text` values when drawing.

```rust
use spottedcat::{Context, DrawOption, Image, Pt, Spot, Text, WindowConfig, run};

struct Game {
    font_id: u32,
}

impl Spot for Game {
    fn initialize(ctx: &mut Context) -> Self {
        const FONT: &[u8] = include_bytes!("../assets/DejaVuSans.ttf");
        let font_id = spottedcat::register_font(ctx, FONT.to_vec());
        Self { font_id }
    }

    fn update(&mut self, _ctx: &mut Context, _dt: std::time::Duration) {}

    fn draw(&mut self, ctx: &mut Context, screen: Image) {
        let label = Text::new("Hello from Spottedcat", self.font_id)
            .with_font_size(Pt::from(28.0))
            .with_color([0.95, 0.97, 1.0, 1.0]);

        screen.draw(
            ctx,
            &label,
            DrawOption::default().with_position([Pt::from(32.0), Pt::from(48.0)]),
        );
    }

    fn remove(&mut self, ctx: &mut Context) {
        spottedcat::unregister_font(ctx, self.font_id);
    }
}

fn main() {
    run::<Game>(WindowConfig::default());
}
```

If you need alignment, measure the text before drawing it:

```rust
let (text_width, text_height, _) = spottedcat::text::measure_with_y_offset(ctx, &label);
```

Full example: [`examples/centered_text_test.rs`](https://github.com/Arion-Dsh/spottedcat/blob/main/examples/centered_text_test.rs).

