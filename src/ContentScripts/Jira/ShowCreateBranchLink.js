import makeBranchName from '../../MakeBranchName';
import { isPageAJiraTask, isJiraIU, isJiraFOR, createCTAInToolbar, isJiraCW } from './Jira';

const createCTA = (repo) => {
  const branchName = makeBranchName();
  if (!branchName) return;

  createCTAInToolbar('Create Branch', () => {
    window.open(`https://github.com/ds-itu-frontend-service/${repo}/branches?newBranch=${branchName}`);
  });
};

export function showCreateBranchLink() {
  if (isPageAJiraTask() && (isJiraIU() || isJiraFOR() || isJiraCW())) {
    const isTivoli = document.getElementById('customfield_13101-val')?.innerText.toLowerCase() === 'tivoli' || false;
    let repo = isTivoli ? 'tivolicasino-website' : 'danskespil-website';

    createCTA(repo);
  }
}
