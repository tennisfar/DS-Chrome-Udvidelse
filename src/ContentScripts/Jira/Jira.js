export const waitForElement = async (selector) => {
  while (!document.querySelector(selector)) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector);
};

const getToolbar = async () => {
  const toolBar = await waitForElement('.aui-toolbar2-primary');
  let ctaContainer = toolBar.querySelector('#dsChromeExtensionJiraToolbar');

  if (!ctaContainer) {
    ctaContainer = document.createElement('div');
    ctaContainer.id = 'dsChromeExtensionJiraToolbar';
    ctaContainer.classList.add('aui-buttons');
    toolBar.appendChild(ctaContainer);
  }

  return ctaContainer;
};

export function isPageAJiraTask() {
  return location.host.includes('jira.danskespil.dk') && location.pathname.startsWith('/browse/');
}

export const isJiraIU = () => location.pathname.includes('/IU-');
export const isJiraFOR = () => location.pathname.includes('/FOR-');
export const isJiraCW = () => location.pathname.includes('/CW-');
export const isJiraDLOA = () => location.pathname.includes('/DLOA-');

export const createCTAInToolbar = async (label, fn) => {
  const toolBar = await getToolbar();
  const cta = document.createElement('a');
  cta.classList.add('aui-button');
  cta.innerText = label;
  cta.addEventListener('click', fn);
  toolBar.appendChild(cta);
};
