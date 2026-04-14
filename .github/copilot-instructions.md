# DS Chrome Udvidelse — Project Guidelines

Chrome MV3 extension for Danske Spil internal tooling (Sitecore, Jira, Klasselotteriet). No test suite; all validation is manual in Chrome.

## Build & Run

```bash
npm run dev        # webpack watch + version sync (development)
npm run build      # production bundle + version sync
```

Load `dist/` as an **unpacked extension** in `chrome://extensions`. There are no automated tests.

> **Version bump**: change `.version` in `package.json` only — never edit `manifest.json` by hand. `update-manifest-version.js` syncs it automatically on `dev`/`build`.

## Architecture

Three webpack entry points:

| Entry | Output | Context |
|---|---|---|
| `src/Background.js` | `dist/background.js` | Service worker (no DOM) |
| `src/Content.js` | `dist/content.js` | Injected into every page |
| `src/Popup/Popup.js` | `dist/popup.js` | Toolbar popup |

`src/ContentScripts/DS/inject-ds-config.js` is **copied verbatim** (not bundled) via `CopyWebpackPlugin` — it must run in the page's own JS context, not the extension sandbox. It is listed in `web_accessible_resources` in `manifest.json`.

## Adding a Feature

1. Create `src/ContentScripts/<Domain>/<Feature>.js`, export `setup<Feature>()`.
2. Import and call it in `src/Content.js`.
3. If a popup toggle is needed, export `toggle<Feature>()` and wire it in `src/Popup/Popup.js`.
4. **No manifest change needed** — `Content.js` already matches `<all_urls>`.

## Conventions

- **URL gating is mandatory**: `Content.js` runs on every URL. Each feature module must guard with `location.host` / `location.pathname` checks before acting.
- **Naming**: `setup<FeatureName>()` for content init, `toggle<FeatureName>()` for popup toggle controls.
- **Shared Jira utilities** live in `src/ContentScripts/Jira/Jira.js` — import from there, don't duplicate.
- **Shared tab utility**: use `getCurrentTab()` from `src/ChromeTools.js`.
- **Settings** are stored in `chrome.storage.sync`; `src/Settings.js` has shared read/write helpers.

## Pitfalls

- Any new script injected into the page context (like `inject-ds-config.js`) **must** be added to `web_accessible_resources` in `manifest.json`, or it will fail silently.
- Source maps are embedded in dev bundles only (`inline-source-map`). Prod builds (`build`) set `devtool: false` — no source maps, smaller output.
- `chrome.storage.sync` has an 8 KB per-item quota; avoid storing large objects (e.g. `dsConfig`).
