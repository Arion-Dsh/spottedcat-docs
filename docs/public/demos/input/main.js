import init, { run_input_demo } from "../showcase/pkg/showcase_demos.js";

const status = document.querySelector("#status");

function isExpectedWasmStartSignal(error) {
  return String(error?.message ?? error).includes(
    "Using exceptions for control flow"
  );
}

async function boot() {
  if (!navigator.gpu) {
    status.textContent =
      "This demo needs WebGPU. Try a recent Chrome, Edge, or Safari Technology Preview build.";
    return;
  }

  try {
    await init();
    status.textContent = "Use WASD / arrows to move. Press Space to reset.";
    window.setTimeout(() => status.classList.add("is-hidden"), 3200);
    run_input_demo();
  } catch (error) {
    if (isExpectedWasmStartSignal(error)) {
      return;
    }

    console.error(error);
    status.textContent = "Could not start the WASM demo. Open the console for details.";
  }
}

boot();
