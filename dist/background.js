/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
  var showButtons = {
    showSitecoreComponents: true,
    openInSitecore: true,
    openMyJira: true,
    openInExperienceEditor: true,
    openJiraBoardDli: true,
    openJiraBoardDlo: true,
    openJiraBoardFOR: true,
    makeJiraDli: true,
    makeJiraDlo: true,
    makeJiraFOR: true,
    makeJira: true,
    openSitecoreProdDli: true,
    openSitecoreProdDlo: true,
    openSitecoreTown21Dli: true,
    openSitecoreTown21Dlo: true,
    openSitecoreDev: true,
    openSitecoreTrunk: true,
  };
  var showSettings = false;
  var favorites = [];
  chrome.runtime.onInstalled.addListener(function (reason) {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
      chrome.storage.sync.set({
        favorites: favorites,
      });
      chrome.storage.sync.set({
        showButtons: showButtons,
      });
      chrome.storage.sync.set({
        showSettings: showSettings,
      });
    }
  });
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'callMyFunction') {
      sendResponse({
        result: 'Function executed',
      });
    }
  });
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFdBQVcsR0FBRztFQUNsQkMsc0JBQXNCLEVBQUUsSUFBSTtFQUM1QkMsY0FBYyxFQUFFLElBQUk7RUFDcEJDLFVBQVUsRUFBRSxJQUFJO0VBQ2hCQyxzQkFBc0IsRUFBRSxJQUFJO0VBQzVCQyxnQkFBZ0IsRUFBRSxJQUFJO0VBQ3RCQyxnQkFBZ0IsRUFBRSxJQUFJO0VBQ3RCQyxnQkFBZ0IsRUFBRSxJQUFJO0VBQ3RCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFLElBQUk7RUFDakJDLFdBQVcsRUFBRSxJQUFJO0VBQ2pCQyxRQUFRLEVBQUUsSUFBSTtFQUNkQyxtQkFBbUIsRUFBRSxJQUFJO0VBQ3pCQyxtQkFBbUIsRUFBRSxJQUFJO0VBQ3pCQyxxQkFBcUIsRUFBRSxJQUFJO0VBQzNCQyxxQkFBcUIsRUFBRSxJQUFJO0VBQzNCQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMsaUJBQWlCLEVBQUU7QUFDckIsQ0FBQztBQUVELElBQUlDLFlBQVksR0FBRyxLQUFLO0FBRXhCLElBQUlDLFNBQVMsR0FBRyxFQUFFO0FBRWxCQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDQyxXQUFXLENBQUMsVUFBQ0MsTUFBTSxFQUFLO0VBQ2pELElBQUlBLE1BQU0sS0FBS0osTUFBTSxDQUFDQyxPQUFPLENBQUNJLGlCQUFpQixDQUFDQyxPQUFPLEVBQUU7SUFDdkROLE1BQU0sQ0FBQ08sT0FBTyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQztNQUFFVixTQUFTLEVBQVRBO0lBQVUsQ0FBQyxDQUFDO0lBQ3RDQyxNQUFNLENBQUNPLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUM7TUFBRTdCLFdBQVcsRUFBWEE7SUFBWSxDQUFDLENBQUM7SUFDeENvQixNQUFNLENBQUNPLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUM7TUFBRVgsWUFBWSxFQUFaQTtJQUFhLENBQUMsQ0FBQztFQUMzQztBQUNGLENBQUMsQ0FBQztBQUVGRSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1MsU0FBUyxDQUFDUCxXQUFXLENBQUMsVUFBVVEsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRTtFQUM1RSxJQUFJRixPQUFPLENBQUNHLE1BQU0sS0FBSyxnQkFBZ0IsRUFBRTtJQUN2Q0QsWUFBWSxDQUFDO01BQUVFLE1BQU0sRUFBRTtJQUFvQixDQUFDLENBQUM7RUFDL0M7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaG93QnV0dG9ucyA9IHtcbiAgc2hvd1NpdGVjb3JlQ29tcG9uZW50czogdHJ1ZSxcbiAgb3BlbkluU2l0ZWNvcmU6IHRydWUsXG4gIG9wZW5NeUppcmE6IHRydWUsXG4gIG9wZW5JbkV4cGVyaWVuY2VFZGl0b3I6IHRydWUsXG4gIG9wZW5KaXJhQm9hcmREbGk6IHRydWUsXG4gIG9wZW5KaXJhQm9hcmREbG86IHRydWUsXG4gIG9wZW5KaXJhQm9hcmRGT1I6IHRydWUsXG4gIG1ha2VKaXJhRGxpOiB0cnVlLFxuICBtYWtlSmlyYURsbzogdHJ1ZSxcbiAgbWFrZUppcmFGT1I6IHRydWUsXG4gIG1ha2VKaXJhOiB0cnVlLFxuICBvcGVuU2l0ZWNvcmVQcm9kRGxpOiB0cnVlLFxuICBvcGVuU2l0ZWNvcmVQcm9kRGxvOiB0cnVlLFxuICBvcGVuU2l0ZWNvcmVUb3duMjFEbGk6IHRydWUsXG4gIG9wZW5TaXRlY29yZVRvd24yMURsbzogdHJ1ZSxcbiAgb3BlblNpdGVjb3JlRGV2OiB0cnVlLFxuICBvcGVuU2l0ZWNvcmVUcnVuazogdHJ1ZSxcbn07XG5cbmxldCBzaG93U2V0dGluZ3MgPSBmYWxzZTtcblxubGV0IGZhdm9yaXRlcyA9IFtdO1xuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigocmVhc29uKSA9PiB7XG4gIGlmIChyZWFzb24gPT09IGNocm9tZS5ydW50aW1lLk9uSW5zdGFsbGVkUmVhc29uLklOU1RBTEwpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGZhdm9yaXRlcyB9KTtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IHNob3dCdXR0b25zIH0pO1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgc2hvd1NldHRpbmdzIH0pO1xuICB9XG59KTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICBpZiAocmVxdWVzdC5hY3Rpb24gPT09ICdjYWxsTXlGdW5jdGlvbicpIHtcbiAgICBzZW5kUmVzcG9uc2UoeyByZXN1bHQ6ICdGdW5jdGlvbiBleGVjdXRlZCcgfSk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInNob3dCdXR0b25zIiwic2hvd1NpdGVjb3JlQ29tcG9uZW50cyIsIm9wZW5JblNpdGVjb3JlIiwib3Blbk15SmlyYSIsIm9wZW5JbkV4cGVyaWVuY2VFZGl0b3IiLCJvcGVuSmlyYUJvYXJkRGxpIiwib3BlbkppcmFCb2FyZERsbyIsIm9wZW5KaXJhQm9hcmRGT1IiLCJtYWtlSmlyYURsaSIsIm1ha2VKaXJhRGxvIiwibWFrZUppcmFGT1IiLCJtYWtlSmlyYSIsIm9wZW5TaXRlY29yZVByb2REbGkiLCJvcGVuU2l0ZWNvcmVQcm9kRGxvIiwib3BlblNpdGVjb3JlVG93bjIxRGxpIiwib3BlblNpdGVjb3JlVG93bjIxRGxvIiwib3BlblNpdGVjb3JlRGV2Iiwib3BlblNpdGVjb3JlVHJ1bmsiLCJzaG93U2V0dGluZ3MiLCJmYXZvcml0ZXMiLCJjaHJvbWUiLCJydW50aW1lIiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsInJlYXNvbiIsIk9uSW5zdGFsbGVkUmVhc29uIiwiSU5TVEFMTCIsInN0b3JhZ2UiLCJzeW5jIiwic2V0Iiwib25NZXNzYWdlIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImFjdGlvbiIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=
