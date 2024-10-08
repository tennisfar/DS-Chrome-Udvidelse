/******/ (() => { // webpackBootstrap
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
  openSitecoreTrunk: true
};

// let showSettings = false;

var favorites = [];
chrome.runtime.onInstalled.addListener(function (reason) {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.storage.sync.set({
      favorites: favorites
    });
    // chrome.storage.sync.set({ showButtons });
    // chrome.storage.sync.set({ showSettings });
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'callMyFunction') {
    sendResponse({
      result: 'Function executed'
    });
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFdBQVcsR0FBRztFQUNsQkMsc0JBQXNCLEVBQUUsSUFBSTtFQUM1QkMsY0FBYyxFQUFFLElBQUk7RUFDcEJDLFVBQVUsRUFBRSxJQUFJO0VBQ2hCQyxzQkFBc0IsRUFBRSxJQUFJO0VBQzVCQyxnQkFBZ0IsRUFBRSxJQUFJO0VBQ3RCQyxnQkFBZ0IsRUFBRSxJQUFJO0VBQ3RCQyxnQkFBZ0IsRUFBRSxJQUFJO0VBQ3RCQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsV0FBVyxFQUFFLElBQUk7RUFDakJDLFdBQVcsRUFBRSxJQUFJO0VBQ2pCQyxRQUFRLEVBQUUsSUFBSTtFQUNkQyxtQkFBbUIsRUFBRSxJQUFJO0VBQ3pCQyxtQkFBbUIsRUFBRSxJQUFJO0VBQ3pCQyxxQkFBcUIsRUFBRSxJQUFJO0VBQzNCQyxxQkFBcUIsRUFBRSxJQUFJO0VBQzNCQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMsaUJBQWlCLEVBQUU7QUFDckIsQ0FBQzs7QUFFRDs7QUFFQSxJQUFJQyxTQUFTLEdBQUcsRUFBRTtBQUVsQkMsTUFBTSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsQ0FBQ0MsV0FBVyxDQUFDLFVBQUNDLE1BQU0sRUFBSztFQUNqRCxJQUFJQSxNQUFNLEtBQUtKLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSSxpQkFBaUIsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3ZETixNQUFNLENBQUNPLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUM7TUFBRVYsU0FBUyxFQUFUQTtJQUFVLENBQUMsQ0FBQztJQUN0QztJQUNBO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRkMsTUFBTSxDQUFDQyxPQUFPLENBQUNTLFNBQVMsQ0FBQ1AsV0FBVyxDQUFDLFVBQVVRLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUU7RUFDNUUsSUFBSUYsT0FBTyxDQUFDRyxNQUFNLEtBQUssZ0JBQWdCLEVBQUU7SUFDdkNELFlBQVksQ0FBQztNQUFFRSxNQUFNLEVBQUU7SUFBb0IsQ0FBQyxDQUFDO0VBQy9DO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hvd0J1dHRvbnMgPSB7XG4gIHNob3dTaXRlY29yZUNvbXBvbmVudHM6IHRydWUsXG4gIG9wZW5JblNpdGVjb3JlOiB0cnVlLFxuICBvcGVuTXlKaXJhOiB0cnVlLFxuICBvcGVuSW5FeHBlcmllbmNlRWRpdG9yOiB0cnVlLFxuICBvcGVuSmlyYUJvYXJkRGxpOiB0cnVlLFxuICBvcGVuSmlyYUJvYXJkRGxvOiB0cnVlLFxuICBvcGVuSmlyYUJvYXJkRk9SOiB0cnVlLFxuICBtYWtlSmlyYURsaTogdHJ1ZSxcbiAgbWFrZUppcmFEbG86IHRydWUsXG4gIG1ha2VKaXJhRk9SOiB0cnVlLFxuICBtYWtlSmlyYTogdHJ1ZSxcbiAgb3BlblNpdGVjb3JlUHJvZERsaTogdHJ1ZSxcbiAgb3BlblNpdGVjb3JlUHJvZERsbzogdHJ1ZSxcbiAgb3BlblNpdGVjb3JlVG93bjIxRGxpOiB0cnVlLFxuICBvcGVuU2l0ZWNvcmVUb3duMjFEbG86IHRydWUsXG4gIG9wZW5TaXRlY29yZURldjogdHJ1ZSxcbiAgb3BlblNpdGVjb3JlVHJ1bms6IHRydWUsXG59O1xuXG4vLyBsZXQgc2hvd1NldHRpbmdzID0gZmFsc2U7XG5cbmxldCBmYXZvcml0ZXMgPSBbXTtcblxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKHJlYXNvbikgPT4ge1xuICBpZiAocmVhc29uID09PSBjaHJvbWUucnVudGltZS5Pbkluc3RhbGxlZFJlYXNvbi5JTlNUQUxMKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBmYXZvcml0ZXMgfSk7XG4gICAgLy8gY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBzaG93QnV0dG9ucyB9KTtcbiAgICAvLyBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IHNob3dTZXR0aW5ncyB9KTtcbiAgfVxufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSAnY2FsbE15RnVuY3Rpb24nKSB7XG4gICAgc2VuZFJlc3BvbnNlKHsgcmVzdWx0OiAnRnVuY3Rpb24gZXhlY3V0ZWQnIH0pO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJzaG93QnV0dG9ucyIsInNob3dTaXRlY29yZUNvbXBvbmVudHMiLCJvcGVuSW5TaXRlY29yZSIsIm9wZW5NeUppcmEiLCJvcGVuSW5FeHBlcmllbmNlRWRpdG9yIiwib3BlbkppcmFCb2FyZERsaSIsIm9wZW5KaXJhQm9hcmREbG8iLCJvcGVuSmlyYUJvYXJkRk9SIiwibWFrZUppcmFEbGkiLCJtYWtlSmlyYURsbyIsIm1ha2VKaXJhRk9SIiwibWFrZUppcmEiLCJvcGVuU2l0ZWNvcmVQcm9kRGxpIiwib3BlblNpdGVjb3JlUHJvZERsbyIsIm9wZW5TaXRlY29yZVRvd24yMURsaSIsIm9wZW5TaXRlY29yZVRvd24yMURsbyIsIm9wZW5TaXRlY29yZURldiIsIm9wZW5TaXRlY29yZVRydW5rIiwiZmF2b3JpdGVzIiwiY2hyb21lIiwicnVudGltZSIsIm9uSW5zdGFsbGVkIiwiYWRkTGlzdGVuZXIiLCJyZWFzb24iLCJPbkluc3RhbGxlZFJlYXNvbiIsIklOU1RBTEwiLCJzdG9yYWdlIiwic3luYyIsInNldCIsIm9uTWVzc2FnZSIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJhY3Rpb24iLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9