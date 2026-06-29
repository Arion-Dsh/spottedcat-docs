# Play Input Demo

<script setup>
import { withBase } from 'vitepress'
</script>

This demo shows Spottedcat keyboard input running directly in WebAssembly.

::: tip Browser support
The demo uses Spottedcat's WebGPU backend. Use a recent browser with WebGPU enabled.
:::

<iframe
  class="sp-demo-frame"
  :src="withBase('/demos/input/')"
  title="Input WASM demo"
  loading="lazy"
  scrolling="no"
></iframe>

Controls:

- WASD or arrow keys to move
- Space to reset the marker

See the matching recipe: [Move with Keyboard](/recipes/move-with-keyboard).
