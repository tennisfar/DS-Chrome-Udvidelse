import { getCurrentTab } from '../../ChromeTools';

const waitForElement = async (selector) => {
  while (!document.querySelector(selector)) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector);
};

let filterRunning = false;

const runItemFilter = async () => {
  if (filterRunning) return;
  filterRunning = true;

  try {
    await waitForElement('button:has(svg.octicon-filter)');
    document.querySelector('button:has(svg.octicon-filter)')?.click();

    await waitForElement('li[role="menuitemcheckbox"]');

    const items = [...document.querySelectorAll('li[role="menuitemcheckbox"]')];
    const itemFilter = items.find((li) => li.textContent?.trim().startsWith('.item'));

    if (itemFilter && itemFilter.getAttribute('aria-checked') === 'true') {
      itemFilter.click();
    }

    document.querySelector('button:has(svg.octicon-filter)')?.click();
  } finally {
    filterRunning = false;
  }
};

const isPrFilesPage = () =>
  location.host === 'github.com' &&
  location.pathname.includes('/pull/') &&
  (location.pathname.endsWith('/files') || location.pathname.endsWith('/changes'));

export const setupGithubHideItemFiles = () => {
  if (location.host !== 'github.com') return;

  const maybeRun = () => {
    chrome.storage.sync.get('hideItemFiles', ({ hideItemFiles }) => {
      if (hideItemFiles && isPrFilesPage()) {
        void runItemFilter();
      }
    });
  };

  maybeRun();

  document.addEventListener('turbo:load', maybeRun);
};

const toggleLabel = (cta, enabled) => {
  const span = cta.querySelector('span');
  span.innerText = enabled ? 'til' : 'fra';
};

const handleEnableCta = async (cta) => {
  const tab = await getCurrentTab();
  if (tab?.url?.includes('github.com') && tab?.url?.includes('/pull/')) {
    cta.removeAttribute('disabled');
  }
};

export const toggleGithubHideItemFiles = () => {
  const button = document.querySelector('#hideItemFiles');
  void handleEnableCta(button);

  chrome.storage.sync.get('hideItemFiles', ({ hideItemFiles }) => {
    toggleLabel(button, hideItemFiles);

    button.addEventListener('click', async () => {
      if (button.hasAttribute('disabled')) return;

      hideItemFiles = !hideItemFiles;
      chrome.storage.sync.set({ hideItemFiles });
      toggleLabel(button, hideItemFiles);

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        if (
          hideItemFiles &&
          tab?.url?.includes('github.com') &&
          tab?.url?.includes('/pull/')
        ) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {
              function waitForElement(selector) {
                return new Promise(function (resolve) {
                  function check() {
                    var el = document.querySelector(selector);
                    if (el) { resolve(el); } else { requestAnimationFrame(check); }
                  }
                  check();
                });
              }

              waitForElement('button:has(svg.octicon-filter)').then(function (btn) {
                btn.click();
                return waitForElement('li[role="menuitemcheckbox"]');
              }).then(function () {
                var items = Array.from(document.querySelectorAll('li[role="menuitemcheckbox"]'));
                var itemFilter = items.find(function (li) {
                  return li.textContent && li.textContent.trim().startsWith('.item');
                });
                if (itemFilter && itemFilter.getAttribute('aria-checked') === 'true') {
                  itemFilter.click();
                }
                document.querySelector('button:has(svg.octicon-filter)')?.click();
              });
            },
          });
        }
      });
    });
  });
};
