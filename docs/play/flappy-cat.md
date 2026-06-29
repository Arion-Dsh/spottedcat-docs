# Play Flappy Cat

<script setup>
import { withBase } from 'vitepress'
</script>

This is the finished WebAssembly build from the Flappy Cat guide.

::: tip Browser support
The demo uses Spottedcat's WebGPU backend. Use a recent browser with WebGPU enabled.
:::

<iframe
  class="sp-demo-frame"
  :src="withBase('/demos/flappy-cat/')"
  title="Flappy Cat WASM demo"
  loading="lazy"
  scrolling="no"
></iframe>

Controls:

- Space, click, or touch to flap
- After a crash, use the same input to restart

Want to build it yourself? Follow the [Build Flappy Cat guide](/guide/flappy-cat).
