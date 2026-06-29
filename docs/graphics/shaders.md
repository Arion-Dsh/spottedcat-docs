# Custom Shaders

Spottedcat uses WGSL. Both 2D Image and 3D Model shaders provide template APIs for common material effects, while full WGSL registration remains available when complete control is necessary.

## ImageShaderTemplate

The recommended slot-based template lets you write only the effect body:

```rust
let shader = spottedcat::register_image_shader_template(
    ctx,
    spottedcat::ImageShaderTemplate::new()
        .with_extra_textures(true)
        .with_history_at(0)
        .with_screen_at(1)
        .with_fragment_body(r#"
            let history = textureSample(t_history, extra_samp, in.uv);
            return mix(src, history, 0.25) * opacity;
        "#),
);
```

The template injects the primary texture, samplers, screen dimensions, scale factor, opacity, and 16 `vec4<f32>` user parameters. `history` is a target snapshot from the end of the previous frame; `screen` is a snapshot from before the current batch began.

## ModelShaderTemplate

The model template preserves the engine-defined pipeline, vertex layout, depth state, and bind groups. It exposes shared declarations and the fragment body:

```rust
let shader = spottedcat::register_model_shader_template(
    ctx,
    spottedcat::ModelShaderTemplate::new()
        .with_shared("fn tint(c: vec3<f32>) -> vec3<f32> { return c * 0.8; }")
        .with_fragment_body("return vec4<f32>(tint(src.rgb), src.a);")
);
```

A full model WGSL source must define `vs_main`, `vs_main_instanced`, and `fs_main`. Call `model_shader_template()` to obtain a starting point matching the current engine contract.

## Further reading

- [2D shader template example](https://github.com/Arion-Dsh/spottedcat/blob/main/examples/image_shader_template.rs)
- [Full 2D WGSL example](https://github.com/Arion-Dsh/spottedcat/blob/main/examples/advanced_image_shader_full.rs)
- [3D shader template example](https://github.com/Arion-Dsh/spottedcat/blob/main/examples/metal_sphere.rs)
