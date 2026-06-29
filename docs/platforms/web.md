# Web / WASM

The Web example lives in the upstream repository under `examples/wasm`:

- `wasm_demo`: the Rust crate
- `web/index.html`: the page host
- `web/main.js`: the generated WASM package loader

The usual flow is to build `wasm_demo` with `wasm-pack`, then serve the `web` directory over local HTTP. Browsers do not reliably load WASM modules directly from `file://`.

```bash
cd examples/wasm
./build.sh
```

Keep two browser constraints in mind: audio generally requires an initial user gesture, and pages should prevent gameplay keys or touch gestures from triggering default scrolling behavior.
