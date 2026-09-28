// Mirrors JOSSO session cookies from town environments (e.g. town41.danskespil.dk) onto
// local.danskespil.dk, so a login on a town environment carries over to local.

// Both the DLI and DLO contexts carry a JOSSO session cookie.
const TARGET_COOKIES = ['DLISITECORE_JOSSO_SESSIONID', 'DLOSITECORE_JOSSO_SESSIONID'];
const LOCAL_HOST = 'local.danskespil.dk';

// Mirror a town JOSSO cookie onto local as a host-only cookie (no `domain` field), so it's
// never sent to the town host - avoids the town gateway seeing two cookies of the same name.
function mirrorToLocal(cookie) {
  const params = {
    url: `https://${LOCAL_HOST}/`,
    name: cookie.name,
    value: cookie.value,
    path: cookie.path || '/',
    secure: cookie.secure ?? true,
    httpOnly: cookie.httpOnly ?? true,
    sameSite: cookie.sameSite || 'no_restriction'
  };

  // Preserve expiry if it's a persistent cookie; omit for session cookies.
  if (typeof cookie.expirationDate === 'number') {
    params.expirationDate = cookie.expirationDate;
  }

  chrome.cookies.set(params, () => {
    if (chrome.runtime.lastError) {
      console.warn('[DS] Setting local cookie failed:', chrome.runtime.lastError);
    }
  });
}

function mirrorFromTownCookie(cookie) {
  const domain = cookie.domain.replace(/^\./, '');
  if (domain === LOCAL_HOST) return;
  mirrorToLocal(cookie);
}

export function setupJossoCookieMirror() {
  // Mirror any already-existing town cookies on startup (onChanged won't fire for pre-existing cookies)
  for (const name of TARGET_COOKIES) {
    chrome.cookies.getAll({ name, domain: 'danskespil.dk' }, (cookies) => {
      cookies.forEach(mirrorFromTownCookie);
    });
  }

  chrome.cookies.onChanged.addListener((details) => {
    const cookie = details.cookie;
    if (!TARGET_COOKIES.includes(cookie.name)) return;
    if (details.removed) return;

    const domain = cookie.domain.replace(/^\./, '');
    if (domain === LOCAL_HOST) return;
    mirrorToLocal(cookie);
  });
}
