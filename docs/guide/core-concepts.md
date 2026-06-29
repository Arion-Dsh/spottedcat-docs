# Core Concepts

## The `Spot` lifecycle

Every application or scene implements `Spot`. The engine drives its lifecycle methods:

1. `initialize` creates state and GPU resources.
2. `update` advances game logic at a fixed rate.
3. `draw` submits rendering as quickly as the display and platform allow.
4. `suspended` and `resumed` respond to mobile foreground and background transitions.
5. `remove` releases application-side resources when a scene is removed.

Always use the `&mut Context` passed into each callback. It is the synchronization boundary between rendering, input, audio, resources, and scene state.

## Fixed updates and variable rendering

`update` runs at a fixed step—60 Hz by default—so movement, collisions, and game rules belong there. `draw` may run faster or slower and should only handle presentation.

Use `Interpolated<T>` when presentation needs to smoothly blend between two logic states:

```rust
fn draw(&mut self, ctx: &mut Context, screen: Image) {
    let position = self.player_position.value(ctx);
    screen.draw(ctx, &self.player, DrawOption::default().with_position(position));
}
```

## Coordinates and layers

The 2D API uses `Pt` for logical dimensions and maps them to physical pixels through the display scale factor. `DrawOption` groups position, rotation, scale, clipping, and layer. Higher layers are drawn on top.

## Scenes and shared resources

Call `switch_scene::<NextScene>()` to transition between scenes. Register state shared across systems with the Context and retrieve it through `get_resource::<T>(ctx)`, avoiding mutable global state.

## Choosing features

| Feature | Capability |
| --- | --- |
| Default | 2D core, input, text, and audio |
| `utils` | Encoded image decoding and asynchronous asset helpers |
| `model-3d` | Models, 3D drawing, and lighting |
| `gltf` | GLTF loading; also enables `model-3d` and `utils` |
| `effects` | 3D effects and fog; also enables `model-3d` |
| `sensors` | Mobile motion and today's step-count APIs |
