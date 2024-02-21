import makeBranchName from '../../MakeBranchName';

const isPageAJiraTaskIUPage = () =>
  location.host.includes('jira.danskespil.dk') && location.pathname.startsWith('/browse/IU-');

const createCTA = () => {
  const branchName = makeBranchName();
  if (!branchName) return;

  const toolBar = document.querySelector('.aui-toolbar2-primary');
  const newCtaContainer = document.createElement('div');
  newCtaContainer.classList.add('aui-buttons');
  const cta = document.createElement('a');
  cta.classList.add('aui-button');
  cta.innerText = 'Create Branch';
  cta.addEventListener('click', () => {
    window.open('https://github.com/ds-itu-frontend-service/danskespil-website/branches?newBranch=' + branchName);
  });
  newCtaContainer.appendChild(cta);
  toolBar.appendChild(newCtaContainer);
};

export function showCreateBranchLink() {
  if (isPageAJiraTaskIUPage()) {
    createCTA();
  }
}
