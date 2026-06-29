# Stability Policy

Spottedcat 1.0 is the first stable release of the engine API.

## Versioning

Spottedcat follows semantic versioning for the public API exposed by the crate:

- Patch releases fix bugs and documentation issues.
- Minor releases add compatible APIs and platform improvements.
- Major releases may include breaking API changes.

The intent is simple: projects built against `1.0.x` should continue to work across compatible `1.x` upgrades unless they rely on explicitly experimental internals.

## What is stable

The stable surface includes the core application lifecycle, drawing APIs, feature flags, and documented platform entry points:

- `Spot`, `Context`, `WindowConfig`, fixed-step updates, and the run lifecycle
- 2D image, text, transform, color, and shader drawing APIs
- 3D model creation and drawing APIs behind `model-3d`
- Optional feature gates such as `utils`, `gltf`, `effects`, and `sensors`
- Desktop, WebAssembly, iOS, and Android example integration paths

## Upgrade guidance

For shipped games, prefer a pinned compatible range such as:

```toml
[dependencies]
spottedcat = "1.0"
```

Before upgrading, read the release notes and run your platform examples. Graphics engines sit close to platform APIs, so runtime verification is still valuable even for compatible API updates.

