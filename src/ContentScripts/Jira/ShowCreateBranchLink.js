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
    createCTA('danskespil-website');
  }
}
