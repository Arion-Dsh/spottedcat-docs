# Platform Overview

Spottedcat's Rust core supports four target families:

| Platform | Window / host | Typical output |
| --- | --- | --- |
| Windows, macOS, Linux | winit | Desktop executable |
| Web | WebAssembly | WASM package and web host |
| iOS | UIKit host | Rust static library / XCFramework |
| Android | GameActivity | Rust dynamic library and Gradle app |

The upstream `examples` directory keeps source code and build scripts for every platform. Generated artifacts such as `target`, XCFrameworks, Android `jniLibs`, and WASM `pkg` directories are intentionally excluded.

Desktop is usually the fastest place to iterate on core gameplay. Validate input, lifecycle, permissions, and GPU differences on Web or mobile throughout development.
