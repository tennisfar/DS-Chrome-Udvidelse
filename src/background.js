const showNotification = {
  danskeSpil: true,
  jiraDli: true,
  jiraDlo: true,
  sitecoreProd: true,
  sitecoreTown21: true,
  sitecoreDevelop: true,
  sitecoreTrunk: true,
  jira: true,
};

let favorites = [];

chrome.runtime.onInstalled.addListener((reason) => {
  chrome.storage.sync.set({ showNotification });

  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.storage.sync.set({ favorites });
  }
});
