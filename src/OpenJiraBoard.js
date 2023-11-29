(() => {
  const handleOpenJiraBoardDli = () => {
    chrome.tabs.create(
      { url: `https://jira.danskespil.dk/secure/RapidBoard.jspa?projectKey=IU&rapidView=552` },
      function (tab) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: () => {},
        });
      }
    );
  };

  const handleOpenJiraBoardDlo = () => {
    chrome.tabs.create(
      { url: `https://jira.danskespil.dk/secure/RapidBoard.jspa?projectKey=IU&rapidView=553` },
      function (tab) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: () => {},
        });
      }
    );
  };

  const openJiraBoardDli = document.getElementById('openJiraBoardDli');
  openJiraBoardDli.addEventListener('click', () => handleOpenJiraBoardDli());

  const openJiraBoardDlo = document.getElementById('openJiraBoardDlo');
  openJiraBoardDlo.addEventListener('click', () => handleOpenJiraBoardDlo());
})();
