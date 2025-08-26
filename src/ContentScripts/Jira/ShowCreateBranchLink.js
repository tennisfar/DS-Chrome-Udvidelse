import makeBranchName from '../../MakeBranchName';
import { isPageAJiraTask, isJiraIU, isJiraFOR, createCTAInToolbar, isJiraCW, isJiraDLOA, isJiraDLIA } from './Jira';

const createCTA = (repo) => {
  const branchName = makeBranchName();
  if (!branchName) return;

  void createCTAInToolbar('Create Branch', () => {
    window.open(`https://github.com/ds-itu-frontend-service/${repo}/branches?newBranch=${branchName}`);
  });

  void createCTAInToolbar('Create Branch name', () => {
    alert(`${branchName}`);
  });
};

export function showCreateBranchLink() {
  if (isPageAJiraTask() && (isJiraIU() || isJiraFOR() || isJiraCW() || isJiraDLOA() || isJiraDLIA())) {
    const isTivoli = document.getElementById('customfield_13101-val')?.innerText.toLowerCase() === 'tivoli' || false;

    const isDDK = document.getElementById('wrap-labels')?.innerText.includes('DDK') || false;
    
    if (isDDK) {
      createCTA('klasselotteriet-website');
      return;
    }

    let repo = isTivoli ? 'tivolicasino-website' : 'danskespil-website';

    createCTA(repo);
  }
}
