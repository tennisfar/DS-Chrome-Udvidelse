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

const TARGET_COOKIE = 'DLOSITECORE_JOSSO_SESSIONID';
const LOCAL_HOST = 'local.danskespil.dk';

// Mirror any already-existing town cookies on startup (onChanged won't fire for pre-existing cookies)
chrome.cookies.getAll({ name: TARGET_COOKIE }, (cookies) => {
  for (const cookie of cookies) {
    const domain = cookie.domain.replace(/^\./, '');
    if (domain === LOCAL_HOST) continue;
    if (domain.startsWith('town') && domain.endsWith('.danskespil.dk')) {
      mirrorToLocal(cookie);
    }
  }
});

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

function remirrorFromTown() {
  chrome.cookies.getAll({ name: TARGET_COOKIE }, (cookies) => {
    const townCookie = cookies.find(c => {
      const d = c.domain.replace(/^\./, '');
      return d.startsWith('town') && d.endsWith('.danskespil.dk');
    });
    if (townCookie) mirrorToLocal(townCookie);
  });
}

chrome.cookies.onChanged.addListener((details) => {
  const cookie = details.cookie;
  if (cookie.name !== TARGET_COOKIE) return;

  const domain = cookie.domain.replace(/^\./, '');

  // If local's JOSSO cookie was deleted (e.g. by the logout flow), immediately re-mirror
  if (details.removed && domain === LOCAL_HOST) {
    remirrorFromTown();
    return;
  }

  if (details.removed) return;

  // Mirror town cookies to local
  if (domain === LOCAL_HOST) return;
  if (domain.startsWith('town') && domain.endsWith('.danskespil.dk')) {
    mirrorToLocal(cookie);
  }
});
