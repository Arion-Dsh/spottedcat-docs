# Play Shader Demo

<script setup>
import { withBase } from 'vitepress'
</script>

This demo shows a custom image shader with an extra noise texture and frame history feedback.

::: tip Browser support
The demo uses Spottedcat's WebGPU backend. Use a recent browser with WebGPU enabled.
:::

<iframe
  class="sp-demo-frame"
  :src="withBase('/demos/shader/')"
  title="Shader WASM demo"
  loading="lazy"
  scrolling="no"
></iframe>

Related reading: [Custom Shaders](/graphics/shaders).
