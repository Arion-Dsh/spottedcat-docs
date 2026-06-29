# Play Image Demo

<script setup>
import { withBase } from 'vitepress'
</script>

This demo creates raw RGBA image data in Rust, uploads it as a Spottedcat image, then animates it on the canvas.

::: tip Browser support
The demo uses Spottedcat's WebGPU backend. Use a recent browser with WebGPU enabled.
:::

<iframe
  class="sp-demo-frame"
  :src="withBase('/demos/image/')"
  title="Image WASM demo"
  loading="lazy"
  scrolling="no"
></iframe>

Related reading: [Draw an Image](/recipes/draw-image).
