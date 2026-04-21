---
description: "Use when releasing, bumping the version, tagging a release, or preparing a new version of the extension."
---
# Release Process

## Steps (in order)

1. **Bump version** — edit `.version` in `package.json` only. Never touch `manifest.json` directly; `update-manifest-version.js` syncs it automatically on `dev`/`build`.

2. **Add README entry** — add a new `### Version X.Y.Z` section under `## Opdateringer`. Follow the existing style: plain prose in Danish, button labels in plain quotes (not bold), no trailing period on single-sentence entries.

3. **Build** — run `npm run build` (or confirm `npm run dev` is running so the version sync has fired).

4. The user handles all Git operations themselves. Suggest the following commands but do not run them:
   ```bash
   git add -A
   git commit -m "<short description> (vX.Y.Z)"
   git tag vX.Y.Z
   git push && git push origin vX.Y.Z
   ```

## Version numbering

- **Patch** (X.Y.**Z**): bug fixes only
- **Minor** (X.**Y**.0): new features
- **Major** (**X**.0.0): breaking or architectural changes

## README conventions

- Section header: `### Version X.Y.Z`
- Button/feature names: `"Like this"` (plain quotes, not **bold**)
- Language: Danish
- Keep entries concise — one paragraph per version is enough
