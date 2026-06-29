import init, { run_flappy_cat } from "./pkg/flappy_cat.js";

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
    status.textContent = "Space / click / touch to flap. The tiny cat has claws.";
    window.setTimeout(() => status.classList.add("is-hidden"), 2600);
    run_flappy_cat();
  } catch (error) {
    if (isExpectedWasmStartSignal(error)) {
      return;
    }

    console.error(error);
    if (status.textContent.startsWith("Loading")) {
      status.textContent =
        "Could not start the WASM demo. Open the console for details.";
    }
  }
}

boot();
