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

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ showNotification });
});
