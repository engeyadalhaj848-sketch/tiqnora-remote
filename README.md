# Tiqnora Remote

**Status: pre-release development, not a downloadable remote-control application yet.**

Tiqnora Remote is an independent, Arabic/English remote-support product in development, built around a pinned open-source RustDesk codebase.

- [Product preview](https://tiqnora-remote.vercel.app) — a website preview; no executable is available.
- [Windows cloud preflight](.github/workflows/windows-cloud-preflight.yml) — runs source and branding checks on a hosted Windows runner, **not** an EXE build.
- [Upstream lock](upstream.lock.json) — RustDesk 1.4.9 pinned to a verified commit.
- [Release gate](docs/RELEASE_GATE.md) — requirements before public distribution.

**Do not distribute an executable as "Tiqnora Remote" before the actual branded source, security testing, licensing and binary signing are complete.**

This repository is distinct from [Tiqnora AI](https://tiqnora.com). Windows development and the future ID/relay infrastructure are separate from the static website.

## Run local tests

```sh
node tests/brand-patch.mjs
node tests/source-integrity.mjs
```

All remote-support sessions must be authorized by the device owner. Unattended access must be explicitly enabled and revocable. 

## Source licensing

Source modifications to RustDesk are subject to its AGPL-3.0 license, along with applicable attribution and corresponding-source obligations. The original copyright notice is preserved.
