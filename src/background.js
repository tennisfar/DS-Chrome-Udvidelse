const showButtons = {
  showSitecoreComponents: true,
  openInSitecore: true,
  openMyJira: true,
  openInExperienceEditor: true,
  openJiraBoardDli: true,
  openJiraBoardDlo: true,
  makeJiraDli: true,
  makeJiraDlo: true,
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
  chrome.storage.sync.set({ showButtons });
  chrome.storage.sync.set({ showSettings });

  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.storage.sync.set({ favorites });
  }
});
