# AI-assisted creation

Spottedcat is designed to be friendly to both humans and AI coding tools: small examples, stable 1.0 surfaces, and a clear `Spot` lifecycle make it easier to generate a playable game slice instead of a pile of disconnected code.

Use this page when you want Codex, an LLM, or another coding assistant to help build with Spottedcat.

## Start with a tiny playable slice

Ask the AI to build the smallest loop that can be played immediately:

- one player action
- one visible response
- one score, timer, obstacle, or goal
- one way to restart or iterate

For example:

```text
Use Spottedcat to build a tiny 2D dodge game.
Start from one Spot scene, draw simple shapes or images, read keyboard input,
show score text, and keep the code close to the existing examples.
```

Once the loop works, add polish: assets, animation, audio, camera movement, 3D models, shaders, or platform packaging.

## Give AI the stable surfaces

For Spottedcat 1.0, AI-generated code should lean on these stable building blocks:

- `Spot` for scene lifecycle
- `Context` for engine state, input, assets, and platform services
- `Image` and `Text` for 2D rendering
- `Model` and `DrawOption3D` for 3D rendering
- `WindowConfig` and `run` for app startup
- the runnable examples as structure, not just snippets

The most useful lifecycle rule is simple: update game state in `update`, draw the frame in `draw`, and keep rendering code from secretly mutating gameplay.

## Use examples as prompts

Good AI prompts should point to a nearby example:

| Goal | Start from |
| --- | --- |
| Player movement and HUD | `examples/input_example.rs` |
| Image loading and drawing | `examples/image_example.rs` |
| Audio feedback | `examples/audio_test.rs` |
| 3D blockout | `examples/fog_world.rs` |
| Many repeated models | `examples/instancing_test.rs` |
| Browser demo | `examples/wasm/` |

This keeps generated code aligned with the engine’s real API.

## Codex skill

The main Spottedcat repository includes a Codex skill for game prototyping:

```text
$spot-game-builder
```

Use it when asking Codex to turn a game idea into a working Spottedcat prototype. The skill is tuned to choose 2D vs 3D, reuse the repository examples, map gameplay into `Spot`, and verify the narrowest build first.

The repository also includes an `AI_GAME_GENERATION_GUIDE.md` file for LLMs. If you are using another coding assistant, attach or reference that guide together with the examples you want it to follow.

## Prompt patterns

```text
Use Spottedcat 1.0 to make a small Flappy-style game.
Use one Spot scene. Implement input, gravity, obstacles, collision,
score text, and restart. Keep the first version simple and runnable.
```

```text
Use Spottedcat to create a 3D foggy exploration demo.
Start from the existing 3D examples, add camera movement,
a few primitive models, fog, and a 2D text overlay.
```

```text
Review this Spottedcat scene for engine misuse.
Check lifecycle usage, input handling, draw/update separation,
feature flags, and whether it follows the stable 1.0 API.
```

## Next steps

- Browse the [Examples Gallery](/examples/) for runnable starting points.
- Build the [Flappy Cat guide](/guide/flappy-cat) to see a complete mini-game evolve step by step.
- Check [Core Concepts](/guide/core-concepts) before generating larger game architecture.
