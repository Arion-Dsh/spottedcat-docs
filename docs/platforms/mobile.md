# iOS and Android

## iOS

The upstream repository includes a Rust wrapper, an XCFramework build script, and an Xcode example project. The usual flow compiles static libraries for the target architectures, assembles a local XCFramework, and starts the engine from a UIKit or SwiftUI host.

The engine calls `suspended` and `resumed` as the application moves between background and foreground. A mobile GPU surface may be rebuilt, so resource restoration must use the Context supplied to lifecycle callbacks.

## Android

The Android example uses GameActivity and includes a Rust wrapper, Gradle project, and shared-library build script. Generated `.so` files are copied into the application's `jniLibs` directory and should not be committed.

Android 10 and newer require the `ACTIVITY_RECOGNITION` runtime permission for step data. The sensor API's “today” count means the current local day—not a historical or lifetime total. Use Health Connect or HealthKit integrations for historical health data.
