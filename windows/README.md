# Windows application: source/preflight stage

The upstream source tree is NOT included as an unlicensed binary and is downloaded in a cloud source-check job at an exact pinned commit.

Windows executable build still needs upstream Flutter/Rust/vcpkg/C++ toolchains and generated bridges, app-owned icon, branded UI/service/installer behavior, license review, actual device/network tests, code-signing and published source compliance.

`windows-cloud-preflight.yml` is a source **verification** workflow only. Its successful run is **not** proof of a usable remote desktop program.
