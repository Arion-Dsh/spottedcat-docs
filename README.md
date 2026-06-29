# Spottedcat Docs

The documentation website for [spottedcat](https://github.com/Arion-Dsh/spottedcat), built with VitePress and deployed with GitHub Pages.

The name comes from the rusty-spotted cat: tiny, quick, and a little wild. It also nods to Rust, the language behind the engine.

## Local development

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
npm run docs:preview
```

GitHub Actions deploys every push to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The default GitHub Pages URL is expected to be:

https://arion-dsh.github.io/spottedcat-docs/
