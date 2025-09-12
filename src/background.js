let favorites = [];
let showGrid = false;
let fastLogin = true;

chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.storage.sync.set({ favorites });
  }
  
  if (reason === chrome.runtime.OnInstalledReason.UPDATE) {}

  chrome.storage.sync.set({ showGrid });
  chrome.storage.sync.set({ fastLogin });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'callMyFunction') {
    sendResponse({ result: 'Function executed' });
  }
});

const TARGET_COOKIE = "DLOSITECORE_JOSSO_SESSIONID";
const LOCAL_HOST = "local.danskespil.dk";

function mirrorToLocal(cookie) {
  const params = {
    url: `https://${LOCAL_HOST}/`,
    name: TARGET_COOKIE,
    value: cookie.value,
    path: cookie.path || "/",
    secure: cookie.secure ?? true,
    httpOnly: cookie.httpOnly ?? true,
    sameSite: cookie.sameSite || "no_restriction"
  };

  // Preserve expiry if it's a persistent cookie; omit for session cookies.
  if (typeof cookie.expirationDate === "number") {
    params.expirationDate = cookie.expirationDate;
  }

  chrome.cookies.set(params, (setCookie) => {
    if (chrome.runtime.lastError) {
      console.warn("Setting local cookie failed:", chrome.runtime.lastError);
    } else {
      console.log("Mirrored cookie to local:", setCookie);
    }
  });
}

// Listen for cookie creation/updates anywhere under *.danskespil.dk
chrome.cookies.onChanged.addListener((details) => {
  if (details.removed) return;
  const cookie = details.cookie;

  // Only react to the specific cookie
  if (cookie.name !== TARGET_COOKIE) return;

  // Ignore our own mirror to local to prevent loops
  if (cookie.domain === LOCAL_HOST) return;

  // Only consider cookies belonging to townXX.danskespil.dk
  if (!(cookie.domain.startsWith("town") && cookie.domain.endsWith(".danskespil.dk"))) return;

  mirrorToLocal(cookie);
});
