async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

const handleEnableCta = async (cta) => {
  const tab = await getCurrentTab();

  if (tab?.url?.includes('danskespil.dk') && !tab?.url?.includes('/sitecore/')) {
    cta.removeAttribute('disabled');
  }
};

const handleOpenPageInExperienceEditor = async () => {
  const tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      let sitecoreId = sessionStorage.getItem('page_id');
      let lo = window.location.origin;
      let cl = document.body.classList;
      let isDlo = cl.contains('dlo');
      let isDli = cl.contains('dli');
      let reg = isDli ? 'dli' : 'dlo';

      if (lo.includes('town')) lo = lo.replace('.dan', 'edit' + reg + '.dan');
      if (lo.includes('//da')) lo = lo.replace('//dan', '//edit' + reg + '.dan');

      lo += '/?sc_mode=edit';

      window.open(`${lo}&sc_itemid=${sitecoreId}`, '_blank');
    },
  });
};

export function setupOpenPageInExperienceEditor() {
  document.addEventListener('DOMContentLoaded', function () {
    const cta = document.querySelector('#openInExperienceEditor');
    handleEnableCta(cta);

    cta.addEventListener('click', () => {
      handleOpenPageInExperienceEditor();
    });
  });
}
