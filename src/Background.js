import { setupJossoCookieMirror } from './Background/JossoCookieMirror';

let favorites = [];
let showGrid = false;
let fastLogin = false;
let dsConfig = null;
let klasselotterietCustomerNumbers = ['151561', '201261', '201262', '814814'];

chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.storage.sync.set({ favorites });
    chrome.storage.sync.set({ klasselotterietCustomerNumbers });
  }

  if (reason === chrome.runtime.OnInstalledReason.UPDATE) {}

  chrome.storage.sync.set({ showGrid });
  chrome.storage.sync.set({ fastLogin });
  chrome.storage.sync.set({ dsConfig });
  chrome.storage.sync.set({ nyBruger: true });
  chrome.storage.sync.set({ savedUsername: null });
  chrome.storage.sync.set({ lastCpr: null });
  chrome.storage.sync.set({ lastUsername: null });
  chrome.storage.sync.set({ lastPassword: null });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'callMyFunction') {
    sendResponse({ result: 'Function executed' });
  }

  if (request.action === 'saveCpr') {
    chrome.storage.sync.set({ lastCpr: request.cpr });
    if (request.username) chrome.storage.sync.set({ lastUsername: request.username });
    if (request.password) chrome.storage.sync.set({ lastPassword: request.password });
  }
});

setupJossoCookieMirror();

