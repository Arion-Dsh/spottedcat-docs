# Examples Gallery

<script setup>
import { withBase } from 'vitepress'
</script>

Use this page when you want working code faster than API descriptions. Start with a playable WebAssembly demo, then jump to the matching Rust example when you are ready to copy the shape into your own project.

Clone the engine repository first:

```bash
git clone https://github.com/Arion-Dsh/spottedcat.git
cd spottedcat
```

## Start here

<div class="sp-grid">
  <a class="sp-card sp-card-accent" :href="withBase('/play/flappy-cat')">
    <strong>Build a tiny game</strong>
    <span>Play Flappy Cat, then follow the step-by-step guide to build the same loop yourself.</span>
  </a>
  <a class="sp-card" :href="withBase('/play/input')">
    <strong>Test input first</strong>
    <span>Check keyboard movement in the browser before opening the native example.</span>
  </a>
  <a class="sp-card" :href="withBase('/graphics/3d')">
    <strong>Need 3D?</strong>
    <span>Jump to GLTF, fog, instancing, and model shader examples.</span>
  </a>
</div>

## Playable WASM demos

These are compiled from Rust to WebAssembly and embedded in the docs:

<div class="sp-grid">
  <a class="sp-card" :href="withBase('/play/input')">
    <strong>Input Demo</strong>
    <span>Move a marker with WASD / arrow keys and reset with Space.</span>
  </a>
  <a class="sp-card" :href="withBase('/play/image')">
    <strong>Image Demo</strong>
    <span>Generate RGBA pixels in Rust and draw them as a Spottedcat image.</span>
  </a>
  <a class="sp-card" :href="withBase('/play/shader')">
    <strong>Shader Demo</strong>
    <span>Run a custom image shader with an extra texture and history feedback.</span>
  </a>
  <a class="sp-card" :href="withBase('/play/flappy-cat')">
    <strong>Flappy Cat</strong>
    <span>A complete tiny game built step by step in the guide.</span>
  </a>
</div>

## Core examples

<div class="sp-example-list">
  <article>
    <h3><code>one_shot_splash</code></h3>
    <p>Show the built-in pixel-cat startup intro before your scene.</p>
    <pre><code>cargo run --example one_shot_splash</code></pre>
  </article>
  <article>
    <h3><code>input_example</code></h3>
    <p>Move with WASD / arrow keys and render live text feedback.</p>
    <pre><code>cargo run --example input_example</code></pre>
  </article>
  <article>
    <h3><code>rgb_image</code></h3>
    <p>Create raw RGBA image data and draw it as a Spottedcat image.</p>
    <pre><code>cargo run --example rgb_image</code></pre>
  </article>
  <article>
    <h3><code>image_shader_template</code></h3>
    <p>Use 2D shader template hooks, runtime uniforms, extra textures, and history.</p>
    <pre><code>cargo run --example image_shader_template</code></pre>
  </article>
  <article>
    <h3><code>touch_test</code></h3>
    <p>Inspect touch phases for mobile-style interaction.</p>
    <pre><code>cargo run --example touch_test</code></pre>
  </article>
</div>

## 3D examples

<div class="sp-example-list">
  <article>
    <h3><code>gltf_loader</code></h3>
    <p>Load GLTF models and material data.</p>
    <pre><code>cargo run --example gltf_loader --features gltf</code></pre>
  </article>
  <article>
    <h3><code>animated_gltf</code></h3>
    <p>Play animated GLTF content.</p>
    <pre><code>cargo run --example animated_gltf --features gltf</code></pre>
  </article>
  <article>
    <h3><code>fog_world</code></h3>
    <p>Add distance and height fog to a 3D scene.</p>
    <pre><code>cargo run --example fog_world --features "model-3d effects"</code></pre>
  </article>
  <article>
    <h3><code>metal_sphere</code></h3>
    <p>Style a model with a custom shader.</p>
    <pre><code>cargo run --example metal_sphere --features model-3d</code></pre>
  </article>
  <article>
    <h3><code>instancing_test</code></h3>
    <p>Draw many copies of a model efficiently.</p>
    <pre><code>cargo run --example instancing_test --features model-3d</code></pre>
  </article>
</div>

## Platform examples

<div class="sp-grid">
  <a class="sp-card" :href="withBase('/play/flappy-cat')">
    <strong>Playable Flappy Cat</strong>
    <span>Embedded WebAssembly build.</span>
  </a>
  <a class="sp-card" href="https://github.com/Arion-Dsh/spottedcat/tree/main/examples/wasm/flappy_cat">
    <strong>Flappy Cat source</strong>
    <span><code>examples/wasm/flappy_cat</code></span>
  </a>
  <a class="sp-card" href="https://github.com/Arion-Dsh/spottedcat/tree/main/examples/wasm/showcase_demos">
    <strong>Showcase source</strong>
    <span><code>examples/wasm/showcase_demos</code></span>
  </a>
  <a class="sp-card" href="https://github.com/Arion-Dsh/spottedcat/tree/main/examples/wasm/wasm_demo">
    <strong>WebAssembly starter</strong>
    <span><code>examples/wasm/wasm_demo</code></span>
  </a>
  <a class="sp-card" href="https://github.com/Arion-Dsh/spottedcat/tree/main/examples/android">
    <strong>Android</strong>
    <span><code>examples/android</code></span>
  </a>
  <a class="sp-card" href="https://github.com/Arion-Dsh/spottedcat/tree/main/examples/ios">
    <strong>iOS</strong>
    <span><code>examples/ios</code></span>
  </a>
</div>

## Choosing an example

| If you want to... | Start with |
| --- | --- |
| Build a complete mini-game | [Flappy Cat](../guide/flappy-cat) |
| Learn the update / draw loop | `input_example` |
| Draw pixels or sprites | `rgb_image` |
| Add 2D visual effects | `image_shader_template` |
| Load models | `gltf_loader` |
| Add atmosphere | `fog_world` |
| Ship with the built-in cat intro | `one_shot_splash` |
