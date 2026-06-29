# Recipes

<script setup>
import { withBase } from 'vitepress'
</script>

Recipes are short, copyable answers to common game-building tasks.

If the Guide explains the engine, Recipes help you get unstuck while building.

## Starter recipes

<div class="sp-grid">
  <a class="sp-card" :href="withBase('/recipes/draw-image')">
    <strong>Draw an image</strong>
    <span>Create RGBA pixels and draw them to the screen.</span>
  </a>
  <a class="sp-card" :href="withBase('/recipes/move-with-keyboard')">
    <strong>Move with keyboard</strong>
    <span>Use WASD or arrow keys in fixed-step updates.</span>
  </a>
  <a class="sp-card" :href="withBase('/recipes/render-text')">
    <strong>Render text</strong>
    <span>Register a font, build text, and draw it.</span>
  </a>
  <a class="sp-card" :href="withBase('/recipes/use-splash')">
    <strong>Use OneShotSplash</strong>
    <span>Add the built-in pixel-cat intro scene.</span>
  </a>
</div>

## More examples

For larger examples, see the [Examples Gallery](/examples/).
