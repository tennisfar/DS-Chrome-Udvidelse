let favorites = [];
let showGrid = false;
let fastLogin = false;
let dsConfig = null;
let klasselotterietCustomerNumbers = ['151561', '201261', '201262', '814814'];

chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.storage.sync.set({ favorites });
    chrome.storage.sync.set({ klasselotterietCustomerNumbers });
  }

  if (reason === chrome.runtime.OnInstalledReason.UPDATE) {}

  chrome.storage.sync.set({ showGrid });
  chrome.storage.sync.set({ fastLogin });
  chrome.storage.sync.set({ dsConfig });
  chrome.storage.sync.set({ nyBruger: true });
  chrome.storage.sync.set({ savedUsername: null });
  chrome.storage.sync.set({ lastCpr: null });
  chrome.storage.sync.set({ lastUsername: null });
  chrome.storage.sync.set({ lastPassword: null });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'callMyFunction') {
    sendResponse({ result: 'Function executed' });
  }

  if (request.action === 'saveCpr') {
    chrome.storage.sync.set({ lastCpr: request.cpr });
    if (request.username) chrome.storage.sync.set({ lastUsername: request.username });
    if (request.password) chrome.storage.sync.set({ lastPassword: request.password });
  }
});

// Both the DLI and DLO contexts carry a JOSSO session cookie.
const TARGET_COOKIES = ['DLISITECORE_JOSSO_SESSIONID', 'DLOSITECORE_JOSSO_SESSIONID'];
const LOCAL_HOST = 'local.danskespil.dk';
const LEGACY_DOMAIN = '.danskespil.dk';

// Mirror any already-existing town cookies on startup (onChanged won't fire for pre-existing cookies)
for (const name of TARGET_COOKIES) {
  chrome.cookies.getAll({ name, domain: 'danskespil.dk' }, (cookies) => {
    cookies.forEach(mirrorFromTownCookie);
  });
}

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

// A leftover domain-wide copy would also be sent to the town host, so it'd see two cookies
// of the same name and pick the wrong one - remove it if one ever shows up.
function removeLegacyDomainCookie(name, path) {
  chrome.cookies.remove({ url: `https://danskespil.dk${path || '/'}`, name });
}

function mirrorFromTownCookie(cookie) {
  if (cookie.domain === LEGACY_DOMAIN) {
    removeLegacyDomainCookie(cookie.name, cookie.path);
    return;
  }
  const domain = cookie.domain.replace(/^\./, '');
  if (domain === LOCAL_HOST) return;
  mirrorToLocal(cookie);
}

chrome.cookies.onChanged.addListener((details) => {
  const cookie = details.cookie;
  if (!TARGET_COOKIES.includes(cookie.name)) return;

  // Clean up a domain-wide copy the moment it appears, even if this event is a removal.
  if (!details.removed && cookie.domain === LEGACY_DOMAIN) {
    removeLegacyDomainCookie(cookie.name, cookie.path);
    return;
  }

  if (details.removed) return;

  const domain = cookie.domain.replace(/^\./, '');
  if (domain === LOCAL_HOST) return;
  mirrorToLocal(cookie);
});

