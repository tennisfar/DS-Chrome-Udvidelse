// Helper to apply and remove direct login logic
import { getCurrentTab } from '../../ChromeTools';

function applyDirectLogin(config) {
  const logInButton = document.querySelector('body:not(.is-logged-in) [aria-label="Log ind"]');
  if (!logInButton) return null;

  const localEnvironment = config?.ENV;
  const loginEnvironment = config?.LOGINPAGE_HOST;
  if (!localEnvironment || !loginEnvironment || localEnvironment !== 'dev') return null;

  const match = loginEnvironment?.match(/^https?:\/\/([^.]+)/);
  const subdomain = match ? match[1] : null;
  if (!subdomain) return null;

  const directLoginUrl = `https://${subdomain}.danskespil.dk/roed-konto/login-validation?loginUrl=/roed-konto/login&loginSuccessUrl=https%3a%2f%2flocal.danskespil.dk/${location.pathname.replace(/^\//, '')}`;

  function onClick(e) {
    e.preventDefault();
    window.location.href = directLoginUrl;
  }

  logInButton.addEventListener('click', onClick);
  logInButton.style.backgroundColor = '#ffcc00';
  logInButton.style.color = '#000';
  logInButton.title = `Direct login to ${subdomain}`;

  // Return a cleanup function
  return () => {
    logInButton.removeEventListener('click', onClick);
    logInButton.style.backgroundColor = '';
    logInButton.style.color = '';
    logInButton.title = '';
  };
}

const handleEnableCta = async (cta) => {
  const tab = await getCurrentTab();

  if ((tab?.url?.includes('danskespil.dk') || tab?.url?.includes('localhost') || tab?.url?.includes('netlify.app')) && !tab?.url?.includes('/sitecore/')) {
    cta.removeAttribute('disabled');
  }
};

const toggleLabel = (cta, showFastLogin) => {
  const span = cta.querySelector('span');
  span.innerText = showFastLogin ? 'til' : 'fra';
};

export function setupDsFastLogin() {
  window.addEventListener('load', () => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('dist/inject-ds-config.js');
    (document.head || document.documentElement).appendChild(script);
    script.remove();
  });

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'DS_CONFIG') {
      let config = event.data.config;
      applyDirectLogin(config);
    }
  });
}

function checkAndApply() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: () => {
        if (!document.body.classList.contains('is-logged-in')) {
          console.error('not logged in');
        } else {
          console.error('logged in');
        }
      },
    });
  });
}

export function toggleDsFastLogin() {

  const showFastLogin = document.querySelector('#fastLogin');
  void handleEnableCta(showFastLogin);

  chrome.storage.sync.get('fastLogin', ({ fastLogin }) => {
    toggleLabel(showFastLogin, fastLogin);

    showFastLogin.addEventListener('click', async () => {
      fastLogin = !fastLogin;
      chrome.storage.sync.set({ fastLogin });
      toggleLabel(showFastLogin, fastLogin);

      handleFastLogin(fastLogin);

      checkAndApply()
    });
  });
  
  return;


  // if (location.host.endsWith('danskespil.dk') && !location.pathname.startsWith('/sitecore/')) {
  window.addEventListener('load', () => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('dist/inject-ds-config.js');
    (document.head || document.documentElement).appendChild(script);
    script.remove();

    let cleanup = null;
    let config = null;

    function checkAndApply() {
      if (!document.body.classList.contains('is-logged-in')) {
        if (!cleanup && config) {
          cleanup = applyDirectLogin(config);
        }
      } else {
        if (cleanup) {
          cleanup();
          cleanup = null;
        }
      }
    }

    // Listen for config
    window.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'DS_CONFIG') {
        config = event.data.config;
        checkAndApply();
      }
    });

    // Observe body class changes
    const observer = new MutationObserver(checkAndApply);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    if (location.pathname === '/webflow/login') {
      document.querySelector('a.js-login-custom-events-to-username-password')?.click();
    }
  });
  // }
}

const handleFastLogin = (showFastLogin) => {

  if (showFastLogin) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          console.error('show FastLogin')

          window.addEventListener('load', () => {
            const script = document.createElement('script');
            script.src = chrome.runtime.getURL('dist/inject-ds-config.js');
            (document.head || document.documentElement).appendChild(script);
            script.remove();

            let cleanup = null;
            let config = null;

            function checkAndApply() {
              if (!document.body.classList.contains('is-logged-in')) {
                if (!cleanup && config) {
                  cleanup = applyDirectLogin(config);
                }
              } else {
                if (cleanup) {
                  cleanup();
                  cleanup = null;
                }
              }
            }

            // Listen for config
            window.addEventListener('message', (event) => {
              if (event.data && event.data.type === 'DS_CONFIG') {
                config = event.data.config;
                checkAndApply();
              }
            });

            // Observe body class changes
            const observer = new MutationObserver(checkAndApply);
            observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

            if (location.pathname === '/webflow/login') {
              document.querySelector('a.js-login-custom-events-to-username-password')?.click();
            }
          });
        },
      });
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          console.error('hide FastLogin')
        },
      });
    });
  }
}