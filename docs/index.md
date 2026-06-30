---
layout: home

hero:
  name: Spottedcat
  text: Lightweight cross-platform 2D/3D game engine
  tagline: "Small, fast, and a little wild—built in Rust for cross-platform games and AI-assisted creation."
  image:
    src: /logo.svg
    alt: Spottedcat
  actions:
    - theme: brand
      text: Build Flappy Cat
      link: /guide/flappy-cat
    - theme: alt
      text: Play WASM Demo
      link: /play/flappy-cat
    - theme: alt
      text: AI Guide
      link: /ai/

features:
  - title: Build a real mini-game
    details: Follow the Flappy Cat guide to add movement, input, obstacles, collision, score, restart, and polish.
    link: /guide/flappy-cat
    linkText: Build Flappy Cat
  - title: Add 3D when needed
    details: Enable model features for primitives, GLTF loading, animation, instancing, fog, and custom model shaders.
    link: /graphics/3d
    linkText: 3D guide
  - title: Build for every screen
    details: Ship to desktop, web, iOS, and Android from one codebase.
    link: /platforms/
    linkText: Platform guide
  - title: AI-friendly examples
    details: Small, focused examples that are easy to read, remix, and generate with AI tools.
    link: /ai/
    linkText: AI Guide
---

<script setup>
import { withBase } from 'vitepress'
</script>

::: tip Stable 1.0 release
Spottedcat 1.0 is the first stable release. Public API breakage is reserved for future major versions; minor and patch releases focus on compatibility, fixes, and additive improvements.
:::

## Why "Spottedcat"?

The name comes from the **rusty-spotted cat** (*Prionailurus rubiginosus*): tiny, quick, and a little wild. It also nods to Rust, the language behind the engine.

That is the spirit of Spottedcat: a small cross-platform engine that stays light enough to understand, fast enough to prototype with, and clear enough for both humans and AI tools to build on.

## Built for AI-assisted iteration

Spottedcat keeps the core loop small and explicit, so AI tools have fewer hidden conventions to guess. Point them at a runnable example, ask for one playable slice, then grow it into a real game.

<div class="sp-grid">
  <a class="sp-card sp-card-accent" :href="withBase('/ai/')">
    <strong>Use the AI Guide</strong>
    <span>Prompt Codex or another assistant with stable APIs, examples, and a tiny-slice workflow.</span>
  </a>
  <a class="sp-card" :href="withBase('/examples/')">
    <strong>Start from real examples</strong>
    <span>Use runnable 2D, 3D, input, image, shader, and WASM examples as generation anchors.</span>
  </a>
  <a class="sp-card" :href="withBase('/guide/core-concepts')">
    <strong>Stay on the stable path</strong>
    <span>Generate around `Spot`, `Context`, `Image`, `Text`, `Model`, and the 1.0 lifecycle.</span>
  </a>
</div>

## Minimal shape

Spottedcat apps are ordinary Rust types that implement `Spot`:

```rust
use spottedcat::{Context, Image, Spot, WindowConfig, run};
use std::time::Duration;

struct Game;

impl Spot for Game {
    fn initialize(_ctx: &mut Context) -> Self {
        Self
    }

    fn update(&mut self, _ctx: &mut Context, _dt: Duration) {
        // Move your world forward here.
    }

    fn draw(&mut self, _ctx: &mut Context, _screen: Image) {
        // Draw your frame here.
    }

    fn remove(&mut self, _ctx: &mut Context) {}
}

fn main() {
    run::<Game>(WindowConfig::default());
}
```

## Pick your next step

<div class="sp-grid">
  <a class="sp-card" :href="withBase('/guide/getting-started')">
    <strong>New to Spottedcat?</strong>
    <span>Build and run your first window.</span>
  </a>
  <a class="sp-card" :href="withBase('/guide/flappy-cat')">
    <strong>Want the guided path?</strong>
    <span>Build a complete Flappy-style game step by step.</span>
  </a>
  <a class="sp-card" :href="withBase('/play/flappy-cat')">
    <strong>Want to feel it first?</strong>
    <span>Play the finished WebAssembly demo in your browser.</span>
  </a>
  <a class="sp-card" :href="withBase('/play/input')">
    <strong>Want smaller demos?</strong>
    <span>Try input, image, and shader examples as real Rust/WebAssembly builds.</span>
  </a>
  <a class="sp-card" :href="withBase('/ai/')">
    <strong>Using AI to prototype?</strong>
    <span>Give your assistant the stable surfaces, nearby examples, and tiny-slice workflow.</span>
  </a>
  <a class="sp-card" :href="withBase('/recipes/draw-image')">
    <strong>Need a snippet?</strong>
    <span>Start with a focused image recipe, then jump to input, text, or splash.</span>
  </a>
  <a class="sp-card" :href="withBase('/examples/')">
    <strong>Want real code?</strong>
    <span>Browse runnable examples with feature flags and commands.</span>
  </a>
  <a class="sp-card" :href="withBase('/platforms/')">
    <strong>Shipping somewhere?</strong>
    <span>Check desktop, WebAssembly, iOS, and Android notes.</span>
  </a>
</div>
