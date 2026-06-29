# Input and Audio

## Keyboard, mouse, and touch

Input is queried through the current `Context`:

```rust
fn update(&mut self, ctx: &mut Context, _dt: Duration) {
    if spottedcat::key_down(ctx, Key::Space) {
        // Runs while Space is held.
    }

    let pointer = spottedcat::mouse_pos(ctx);
    let pressed = spottedcat::mouse_down(ctx, MouseButton::Left);
}
```

Read input in `update` so behavior remains independent of rendering frame rate. Touch follows the same principle, with mobile applications reading the current touch-point state.

## Gamepads

Desktop builds include gamepad support. Map keyboard, controller, and touch input to common application actions such as `Jump` or `Pause`, keeping game rules independent of specific devices.

## Audio

The Context manages audio playback, volume, and fades:

```rust
let handle = spottedcat::play_sound(ctx, sound);
```

Browsers generally require a click, key press, or another user gesture before starting an audio context. That is a browser policy rather than an engine error.
