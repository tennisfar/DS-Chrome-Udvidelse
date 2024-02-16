const showButtons = {
  showSitecoreComponents: true,
  openInSitecore: true,
  openMyJira: true,
  openInExperienceEditor: true,
  openJiraBoardDli: true,
  openJiraBoardDlo: true,
  openJiraBoardFOR: true,
  makeJiraDli: true,
  makeJiraDlo: true,
  makeJiraFOR: true,
  makeJira: true,
  openSitecoreProdDli: true,
  openSitecoreProdDlo: true,
  openSitecoreTown21Dli: true,
  openSitecoreTown21Dlo: true,
  openSitecoreDev: true,
  openSitecoreTrunk: true,
};

let showSettings = false;

let favorites = [];

chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.storage.sync.set({ favorites });
    chrome.storage.sync.set({ showButtons });
    chrome.storage.sync.set({ showSettings });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'callMyFunction') {
    sendResponse({ result: 'Function executed' });
  }
});
