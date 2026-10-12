# Windows cloud development build

The additional workflow [Experimental Windows x64 build (not released)](../.github/workflows/windows-experimental-build.yml) attempts an actual x64 Windows compile from the exact upstream RustDesk 1.4.9 source commit.

It generates Rust/Flutter bridge source files on an Ubuntu GitHub runner, then copies them to a Windows runner. The Windows runner builds a Tiqnora-branded **resource icon and file metadata only**. The broader RustDesk identity, core services, updater, installer and interface are not yet fully customized.

**IMPORTANT:** A passing cloud compilation is **NOT** a secure or functional public Tiqnora Remote release. No VPS, two-device tests or signing are complete. The workflow uploads a short-lived **unsigned, experimental development** artifact labelled NOT FOR USERS. It does not publish a GitHub Release and the production website will not offer it.

Do not share or install the compiled binary for customers. All AGPL obligations and original copyright notices must be honored before any public binary distribution. Exact upstream source commit and modification script are disclosed.

This workflow may fail or hit quota depending on toolchain/runner availability. Run status and logs in the Actions tab are authoritative.

## Getting a production candidate
- Final application and service rebranding; clear user consent and abort;
- Build reproducibility and hash review; source licensing review;
- Dedicated relay/ID server with audited configuration;
- Tests on two devices across different networks;
- Signed installer and security/privacy documentation.
