import { getCurrentTab } from './ChromeTools';

const createJiraDli = async () => {
  const waitForElement = async (selector) => {
    while (!document.querySelector(selector)) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return document.querySelector(selector);
  };

  // Check if user is logged in (do nothing if user is not logged in)
  await waitForElement('main#main.aui-page-panel');

  const create = await waitForElement('#create_link');
  create.click();

  // Team WEB BAU
  let select = await waitForElement('#customfield_11400');
  select.value = '11505';

  // Pulje DLI
  select = await waitForElement('#customfield_12229');
  select.value = '11509';

  // Projektnr BAU DLI
  select = await waitForElement('#customfield_13100');
  select.value = '13304';

  const trigger = await waitForElement('#assign-to-me-trigger');
  trigger.click();
};

const createJiraDlo = async () => {
  const waitForElement = async (selector) => {
    while (!document.querySelector(selector)) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return document.querySelector(selector);
  };

  const pageIsReady = await waitForElement('main#main.aui-page-panel');

  let create = await waitForElement('#create_link');
  create.click();

  // Team WEB BAU
  let select = await waitForElement('#customfield_11400');
  select.value = '11505';

  // Pulje DLO
  select = await waitForElement('#customfield_12229');
  select.value = '11508';

  // Projektnr BAU DLO
  select = await waitForElement('#customfield_13100');
  select.value = '13305';

  let trigger = await waitForElement('#assign-to-me-trigger');
  trigger.click();
};

const createJiraFOR = async () => {
  const waitForElement = async (selector) => {
    while (!document.querySelector(selector)) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return document.querySelector(selector);
  };

  const pageIsReady = await waitForElement('main#main.aui-page-panel');

  let create = await waitForElement('#create_link');
  create.click();

  let trigger = await waitForElement('#assign-to-me-trigger');
  trigger.click();
};

const handleMakeJiraDli = async () => {
  const tab = await getCurrentTab();

  if (tab?.url?.includes('jira.danskespil.dk') && tab?.url?.includes('projectKey=IU')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: createJiraDli,
    });
  } else {
    chrome.tabs.create(
      { url: `https://jira.danskespil.dk/secure/RapidBoard.jspa?rapidView=552&projectKey=IU` },
      function (tab) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: createJiraDli,
        });
      }
    );
  }
};

const handleMakeJiraDlo = async () => {
  const tab = await getCurrentTab();

  if (tab?.url?.includes('jira.danskespil.dk') && tab?.url?.includes('projectKey=IU')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: createJiraDlo,
    });
  } else {
    chrome.tabs.create(
      { url: `https://jira.danskespil.dk/secure/RapidBoard.jspa?rapidView=552&projectKey=IU` },
      function (tab) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: createJiraDlo,
        });
      }
    );
  }
};

const handleMakeJiraFOR = async () => {
  const tab = await getCurrentTab();

  if (tab?.url?.includes('jira.danskespil.dk') && tab?.url?.includes('projectKey=FOR')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: createJiraFOR,
    });
  } else {
    chrome.tabs.create(
      { url: `https://jira.danskespil.dk/secure/RapidBoard.jspa?rapidView=632&projectKey=FOR` },
      function (tab) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: createJiraFOR,
        });
      }
    );
  }
};

export function setupMakeJira() {
  const makeJiraDli = document.getElementById('makeJiraDli');
  const makeJiraDlo = document.getElementById('makeJiraDlo');
  const makeJiraFOR = document.getElementById('makeJiraFOR');
  makeJiraDli?.addEventListener('click', () => handleMakeJiraDli());
  makeJiraDlo?.addEventListener('click', () => handleMakeJiraDlo());
  makeJiraFOR?.addEventListener('click', () => handleMakeJiraFOR());
}
