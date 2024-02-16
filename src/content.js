import { setupDsFindDictionary } from './DsFindDictionary';
import { setupGithubCreateBranch } from './GitHubCreateBranch';
import { setupSitecoreLayoutImprovements } from './SitecoreLayoutImprovements';

setupDsFindDictionary();
setupGithubCreateBranch();
setupSitecoreLayoutImprovements();

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
