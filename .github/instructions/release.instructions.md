---
description: "Use when releasing, bumping the version, tagging a release, or preparing a new version of the extension."
---
# Release Process

Use the **Release Agent** (`.github/agents/release.agent.md`) for all release work — it has the full step-by-step process, version format rules, and README conventions built in.

If the Release Agent is not available, the key rules are:
- Bump `.version` in `package.json` only — never edit `manifest.json` directly.
- Version format: use `X.Y` (not `X.Y.0`); only add a patch digit for actual fixes (e.g. `1.15.1`).
- README entry under `## Opdateringer`: Danish prose, `"quoted"` feature names, no trailing period on single-sentence entries.
- Run `npm run build` after bumping.
- Do **not** run Git commands — only suggest them to the user.
