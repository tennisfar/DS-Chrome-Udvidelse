let favorites = [];
let showGrid = false;

chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.storage.sync.set({ favorites });
  }
  
  if (reason === chrome.runtime.OnInstalledReason.UPDATE) {}

  chrome.storage.sync.set({ showGrid });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'callMyFunction') {
    sendResponse({ result: 'Function executed' });
  }
});
