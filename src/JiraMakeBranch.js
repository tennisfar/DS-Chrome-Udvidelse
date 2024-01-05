(() => {
  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  const handleShowMakeJiraBranch = async () => {
    const tab = await getCurrentTab();

    if (
      tab?.url?.includes('jira.danskespil.dk') &&
      (tab?.url?.includes('selectedIssue=') || tab?.url?.includes('/browse/'))
    ) {
      makeJira.removeAttribute('disabled');
    }
  };

  const handleMakeJiraBranch = async () => {
    const tab = await getCurrentTab();

    if (
      tab?.url?.includes('jira.danskespil.dk') &&
      (tab?.url?.includes('selectedIssue=') || tab?.url?.includes('/browse/'))
    ) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          let type = document.querySelector('#issuedetails #type-val');
          let issue = document.querySelector('.issue-link');
          let summary = document.querySelector('#summary-val');

          if (document.querySelector('.ghx-columns .ghx-issue.ghx-selected')) {
            type = document.querySelector('.ghx-issue.ghx-selected .ghx-type');
            issue = document.querySelector('.ghx-issue.ghx-selected .ghx-key');
            summary = document.querySelector('.ghx-issue.ghx-selected .ghx-summary');
          }

          if (!(type && issue && summary)) return;

          type = type.innerText || type.title;
          type = type.trim().toLowerCase();
          type = type.replace(/story/, 'feature');
          
          issue = issue.innerText.trim();

          summary = summary.innerText
            .toLowerCase()
            .replace(/[^a-z ]/g, '-')
            .replace(/ /g, '-')
            .replace(/--+/g, '-');

          const branchName = `${type}/${issue}-${summary}`.slice(0, 50).replace(/-$/, '');

          window.open(
            'https://github.com/ds-itu-frontend-service/danskespil-website/branches?newBranch=' + branchName
          );
        },
      });
    }
  };

  const makeJira = document.getElementById('makeJira');
  makeJira.addEventListener('click', () => handleMakeJiraBranch());
  handleShowMakeJiraBranch();
})();
