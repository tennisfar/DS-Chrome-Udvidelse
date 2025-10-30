import { getCurrentTab } from '../../ChromeTools';

const applyStyles = () => {
  let style = document.getElementById('fast-login-style');

  if (!style) {
    style = document.createElement('style');
    style.id = 'fast-login-style';
    document.body.appendChild(style);

    style.innerHTML = `
      body.chrome-plugin-fast-login [aria-label="Log ind"] {
        background-color: #ffcc00 !important;
        color: #000 !important;
      }
    `;
  }
};

const handleEnableCta = async (cta) => {
  const tab = await getCurrentTab();

  if (tab?.url?.includes('.danskespil.dk') && !tab?.url?.includes('/sitecore/')) {
    cta.removeAttribute('disabled');
  }
};

const toggleLabel = (cta, showFastLogin) => {
  const span = cta.querySelector('span');
  span.innerText = showFastLogin ? 'til' : 'fra';
};

const handleLoginButtonClick = e => {
  e.preventDefault();

  chrome.storage.sync.get('dsConfig', ({ dsConfig }) => {
    let subdomain;
    const localEnvironment = dsConfig?.ENV;

    if (!localEnvironment || localEnvironment === 'Production') {
      return;
    }

    if (localEnvironment.toLowerCase() === 'dev') {
      const loginEnvironment = dsConfig?.LOGINPAGE_HOST;
      const match = loginEnvironment?.match(/^https?:\/\/([^.]+)/);
      subdomain = match ? match[1] : null;
    } else {
      subdomain = localEnvironment.toLowerCase();
    }

    if (!subdomain) return null;

    window.location.href = `https://${subdomain}.danskespil.dk/roed-konto/login-validation?loginUrl=/roed-konto/login&loginSuccessUrl=https%3a%2f%2flocal.danskespil.dk/${location.pathname.replace(/^\//, '')}`;
  });
};

const addLoginButtonEventHandler = () => {
  const logInButton = document.querySelector('body:not(.is-logged-in) [aria-label="Log ind"]');
  logInButton?.addEventListener('click', handleLoginButtonClick);
}

const removeLoginButtonEventHandler = () => {
  const logInButton = document.querySelector('body:not(.is-logged-in) [aria-label="Log ind"]');
  logInButton?.removeEventListener('click', handleLoginButtonClick);
}

export const setupDsFastLogin = () => {
  window.addEventListener('load', () => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('dist/inject-ds-config.js');
    (document.head || document.documentElement).appendChild(script);
    script.remove();
  });

  window.addEventListener('message', (event) => {
    if (event.data?.type === 'DS_CONFIG') {
      chrome.storage.sync.get('dsConfig', ({ dsConfig }) => {
        dsConfig = event.data.config;
        chrome.storage.sync.set({ dsConfig });
      });
    }

    if (event.data === 'ChromePluginFastLoginEnabled') {
      addLoginButtonEventHandler();
    }

    if (event.data === 'ChromePluginFastLoginDisabled') {
      removeLoginButtonEventHandler();
    }
  });

  chrome.storage.sync.get('fastLogin', ({ fastLogin }) => {
    document.body.classList.toggle('chrome-plugin-fast-login', fastLogin);

    if (fastLogin) {
      window.postMessage('ChromePluginFastLoginEnabled', '*');
    } else {
      window.postMessage('ChromePluginFastLoginDisabled', '*');
    }

    if (fastLogin && location.pathname === '/webflow/login') {
      document.querySelector('a.js-login-custom-events-to-username-password')?.click();
    }
  });

  applyStyles();
};

export const toggleDsFastLogin = () => {
  const fastLoginButton = document.querySelector('#fastLogin');
  void handleEnableCta(fastLoginButton);

  chrome.storage.sync.get('fastLogin', ({ fastLogin }) => {
    toggleLabel(fastLoginButton, fastLogin);

    fastLoginButton.addEventListener('click', async () => {
      fastLogin = !fastLogin;
      chrome.storage.sync.set({ fastLogin });
      toggleLabel(fastLoginButton, fastLogin);

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: () => {
            chrome.storage.sync.get('fastLogin', ({ fastLogin }) => {
              document.body.classList.toggle('chrome-plugin-fast-login', fastLogin);

              if (fastLogin) {
                window.postMessage('ChromePluginFastLoginEnabled', '*');
              } else {
                window.postMessage('ChromePluginFastLoginDisabled', '*');
              }
            });
          },
        });
      });
    });
  });
};
