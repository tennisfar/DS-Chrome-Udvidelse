;(() => {
  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true }
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions)
    return tab
  }

  const handleMakeJiraBranch = async () => {
    const tab = await getCurrentTab()

    if (tab?.url?.includes('jira.danskespil.dk') && tab?.url?.includes('selectedIssue=')) {
    }
  }

  const makeJira = document.getElementById('makeJira')
  makeJira.addEventListener('click', () => handleMakeJiraBranch())
})()
