(() => {
  const handleOpenMyJira = () => {
    chrome.tabs.create(
      { url: `https://jira.danskespil.dk/secure/RapidBoard.jspa?rapidView=552&projectKey=IU&quickFilter=2328` },
      function (tab) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: () => {},
        });
      }
    );
  };

  const cta = document.getElementById('openMyJira');
  cta.addEventListener('click', () => handleOpenMyJira());
})();
