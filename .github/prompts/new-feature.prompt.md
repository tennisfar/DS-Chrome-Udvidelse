---
description: "Scaffold a new content script feature: creates the module file, wires it into Content.js, and optionally adds a popup toggle to Popup.js."
name: "New Feature"
argument-hint: "Feature name, domain (DS/Github/Jira/Klasselotteriet/MitIdSimulator), URL guard..."
agent: "agent"
tools: [read, edit, search]
---
Scaffold a new content script feature for the DS Chrome extension.

Ask the user for the following if not already provided:
1. **Feature name** — used as the export name, e.g. `MyFeature` → `setupMyFeature()`
2. **Domain folder** — one of: `DS`, `Github`, `Jira`, `Klasselotteriet`, `MitIdSimulator` (or a new one)
3. **URL guard** — which `location.host` / `location.pathname` condition should gate the feature
4. **Popup toggle?** — yes/no: should a `toggle<Feature>()` function be wired into `Popup.js`?

## What to create / edit

### 1. New module file
Create `src/ContentScripts/<Domain>/<FeatureName>.js` with this shape:

```js
export const setup<FeatureName> = () => {
  if (<url guard>) return;

  // TODO: implement
};
```

If a popup toggle is needed, also export:

```js
export const toggle<FeatureName> = () => {
  // TODO: wire up popup UI element
};
```

### 2. Wire into Content.js
Add an import and a call at the bottom of the existing calls in `src/Content.js`:

```js
import { setup<FeatureName> } from './ContentScripts/<Domain>/<FeatureName>';
// ...
setup<FeatureName>();
```

### 3. Wire into Popup.js (if requested)
Add an import and a call in `src/Popup/Popup.js`:

```js
import { toggle<FeatureName> } from '../ContentScripts/<Domain>/<FeatureName>';
// ...
toggle<FeatureName>();
```

## Conventions
- URL gating is **mandatory** inside the module — `Content.js` runs on every page.
- Export names: `setup<FeatureName>` for content init, `toggle<FeatureName>` for popup toggle.
- No manifest changes needed — `Content.js` already matches `<all_urls>`.
- Read the existing files before editing them to preserve formatting and import order.
