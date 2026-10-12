# Cloud-first plan: phone-only operation

The user has no VPS and no Windows computer available right now.

1. GitHub Actions Linux source validation runs on push.
2. Windows-hosted source preflight checks pinned RustDesk 1.4.9 metadata, with no compilation or downloads published.
3. A full Windows cloud build will be added only after source rebranding and build dependencies are reviewed. RustDesk requires Flutter + Rust + VS C++ + LLVM + vcpkg + generated bridge files; it is not simply a one-command npm build.
4. When a VPS becomes available, configure a secure dedicated relay and ID server.
5. Only then test on real devices, sign the executable, and consider public launch.

Github Actions: repository **Actions** tab → **Windows cloud preflight (no EXE)** → **Run workflow**. The workflow can also run once on an initial push. Be aware of hosted-runner quotas and settings.
