import { setupDsFindDictionary } from './DsFindDictionary';
import { setupGithubCreateBranch } from './ContentScripts/Github/GitHubCreateBranch';
import { setupSitecoreLayoutImprovements } from './SitecoreLayoutImprovements';
import { showCreateBranchLink } from './ContentScripts/Jira/ShowCreateBranchLink';

setupDsFindDictionary();
setupGithubCreateBranch();
setupSitecoreLayoutImprovements();
showCreateBranchLink();

if (location.host.endsWith('danskespil.dk')) {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'F2') {
      // Do something when F2 is pressed
      alert('F2 was pressed');

      chrome.runtime.sendMessage({ action: 'callMyFunction' }, function (response) {
        console.error('xxx CALLING MY FUNCTION xxx', response);
      });
    }
  });
}
