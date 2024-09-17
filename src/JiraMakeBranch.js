// import { getCurrentTab } from './ChromeTools';
//
// const shouldShowMakeJiraBranchCTA = async () => {
//   const tab = await getCurrentTab();
//   return !!(
//     tab?.url?.includes('jira.danskespil.dk') &&
//     (tab?.url?.includes('selectedIssue=') || tab?.url?.includes('/browse/'))
//   );
// };
//
// const handleMakeJiraBranch = async () => {
//   const tab = await getCurrentTab();
//
//   if (
//     tab?.url?.includes('jira.danskespil.dk') &&
//     (tab?.url?.includes('selectedIssue=') || tab?.url?.includes('/browse/'))
//   ) {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: () => {
//         let branchName = window.makeBranchName();
//         window.open('https://github.com/ds-itu-frontend-service/danskespil-website/branches?newBranch=' + branchName);
//       },
//     });
//   }
// };
//
// export function jiraMakeBranch() {
//   shouldShowMakeJiraBranchCTA().then((shouldShow) => {
//     if (shouldShow) {
//       const makeJira = document.getElementById('makeJira');
//       makeJira.removeAttribute('disabled');
//       makeJira.addEventListener('click', () => handleMakeJiraBranch());
//     }
//   });
// }
