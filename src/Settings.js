// const handleDelete = (elName, showButtons) => {
//   const el = document.getElementById(elName);
// 
// if (!el) return;
//
// if (!showSettings) {
//   el.style.display = showButtons[elName] ? 'block' : 'none';
//   return;
// }

// if (showSettings) {
//   el.classList.toggle('is-danger', !showButtons[elName]);
//
//   el.querySelector('button.delete').addEventListener('click', (ev) => {
//     ev.stopPropagation();
//     showButtons[elName] = !showButtons[elName];
//     chrome.storage.sync.set({ showButtons });
//     location.reload();
//   });
// }
// };

// const handleHideBlock = (elNames, blockEl, showSettings, showButtons) => {
//   if (showSettings) return;
//   let hideBlock = true;
//
//   elNames.forEach((elName) => {
//     if (showButtons[elName]) hideBlock = false;
//   });
//
//   if (hideBlock) {
//     document.getElementById(blockEl).style.display = 'none';
//   }
//
//   return hideBlock;
// };

// export function setupSettings() {
//   chrome.storage.sync.get('showSettings', ({ showSettings }) => {
    // const content = document.querySelector('.is-ancestor');
    // content.classList.toggle('show-settings', showSettings);

    // if (showSettings) {
    //   const disabledButtons = document.querySelectorAll('.button[disabled]');
    //   disabledButtons.forEach((button) => {
    //     button.removeAttribute('disabled');
    //   });
    // }

    // document.getElementById('settingsCta').addEventListener('click', () => {
    //   showSettings = !showSettings;
    //   chrome.storage.sync.set({ showSettings });
    //   location.reload();
    // });

    // chrome.storage.sync.get('showButtons', ({ showButtons }) => {
      // const danskeSpilButtons = ['showSitecoreComponents', 'openInSitecore', 'openInExperienceEditor'];
      // danskeSpilButtons.forEach((button) => handleDelete(button, showSettings, showButtons));
      // const hideDanskeSpilButtons = handleHideBlock(danskeSpilButtons, 'danskeSpilButtons', showSettings, showButtons);

      // const jiraButtons = [
      //   'openMyJira',
      //   'openJiraBoardDli',
      //   'openJiraBoardDlo',
      //   'openJiraBoardFOR',
      //   'makeJiraDli',
      //   'makeJiraDlo',
      //   'makeJiraFOR',
      //   'makeJira',
      // ];
      // jiraButtons.forEach((button) => handleDelete(button, showSettings, showButtons));
      // const hideJiraButtons = handleHideBlock(jiraButtons, 'jiraButtons', showSettings, showButtons);

      // const sitecoreButtons = [
      //   'openSitecoreProdDli',
      //   'openSitecoreProdDlo',
      //   'openSitecoreTown21Dli',
      //   'openSitecoreTown21Dlo',
      //   'openSitecoreDev',
      //   'openSitecoreTrunk',
      // ];
      // sitecoreButtons.forEach((button) => handleDelete(button, showSettings, showButtons));
      // const hideSitecoreButtons = handleHideBlock(sitecoreButtons, 'sitecoreButtons', showSettings, showButtons);
      //
      // const hiddenBlocks = [hideDanskeSpilButtons, hideJiraButtons, hideSitecoreButtons].filter(
      //   (value) => value === true
      // ).length;
      //
      // const container = document.getElementById('container');
      // if (hiddenBlocks === 0) {
      //   container.style.width = '769px';
      // } else {
      //   container.style.width = '300px';
      // }

      // const debug = document.querySelector('#debug');
      // debug.innerHTML = JSON.stringify(hiddenBlocks, null, 2);
    // });
  // });
// }
