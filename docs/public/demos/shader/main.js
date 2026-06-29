import init, { run_shader_demo } from "../showcase/pkg/showcase_demos.js";

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
    status.textContent = "Custom image shader with noise texture and feedback history.";
    window.setTimeout(() => status.classList.add("is-hidden"), 3200);
    run_shader_demo();
  } catch (error) {
    if (isExpectedWasmStartSignal(error)) {
      return;
    }

    console.error(error);
    status.textContent = "Could not start the WASM demo. Open the console for details.";
  }
}

boot();
