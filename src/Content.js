import { setupDsFindDictionary } from './ContentScripts/DS/DsFindDictionary';
import { setupDsSitecoreDeveloperError } from './ContentScripts/DS/SitecoreDeveloperError';
import { setupGithubCreateBranch } from './ContentScripts/Github/GitHubCreateBranch';
import { setupGithubHideItemFiles } from './ContentScripts/Github/HideItemFiles';
import { setupSitecoreLayoutImprovements } from './SitecoreLayoutImprovements';
import { showCreateBranchLink } from './ContentScripts/Jira/ShowCreateBranchLink';
import { setupLayoutGrid } from './ContentScripts/DS/LayoutGrid';
import { setupDsFastLogin } from "./ContentScripts/DS/FastLogIn";
import { setupKlFastLogin } from './ContentScripts/Klasselotteriet/FastLogIn';
import { setupCprGenerator } from './ContentScripts/MitIdSimulator/CprGenerator';
import { setupNemLogIn } from './ContentScripts/MitIdSimulator/NemLogIn';
import { setupFillNewAccountForm } from './ContentScripts/DS/FillNewAccountForm';
import { setupFillCprPrompt } from './ContentScripts/DS/FillCprPrompt';

setupDsFastLogin();
setupKlFastLogin();
setupDsFindDictionary();
void setupGithubCreateBranch();
setupGithubHideItemFiles();
setupSitecoreLayoutImprovements();
showCreateBranchLink();
setupDsSitecoreDeveloperError();
void setupLayoutGrid();
setupCprGenerator();
setupNemLogIn();
setupFillNewAccountForm();
setupFillCprPrompt();

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
