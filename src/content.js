import { setupDsFindDictionary } from './ContentScripts/DS/DsFindDictionary';
import { setupDsSitecoreDeveloperError } from './ContentScripts/DS/SitecoreDeveloperError';
import { setupGithubCreateBranch } from './ContentScripts/Github/GitHubCreateBranch';
import { setupKlasselotterietLogIn } from './ContentScripts/Klasselotteriet/LogIn';
import { setupSitecoreLayoutImprovements } from './SitecoreLayoutImprovements';
import { showCreateBranchLink } from './ContentScripts/Jira/ShowCreateBranchLink';
import { setupLayoutGrid } from './ContentScripts/DS/LayoutGrid';
import { setupDsFastLogin } from "./ContentScripts/DS/FastLogIn";

setupDsFastLogin();
setupDsFindDictionary();
void setupGithubCreateBranch();
setupSitecoreLayoutImprovements();
showCreateBranchLink();
setupDsSitecoreDeveloperError();
void setupLayoutGrid();
void setupKlasselotterietLogIn();

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
