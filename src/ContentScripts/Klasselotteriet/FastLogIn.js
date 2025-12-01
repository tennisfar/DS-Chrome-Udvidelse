import { getCurrentTab } from '../../ChromeTools';

const handleEnableCta = async (cta) => {
  const tab = await getCurrentTab();

  if ((tab?.url?.includes('klasselotteriet.local') || tab?.url?.includes('.klasselotteriet.dk')) && !tab?.url?.includes('/sitecore/')) {
    cta.removeAttribute('disabled');
  }
};

const toggleLabel = (cta, showFastLogin) => {
  const span = cta.querySelector('span');
  span.innerText = showFastLogin ? 'til' : 'fra';
};

export const setupKlFastLogin = () => {
  chrome.storage.sync.get('fastLogin', ({ fastLogin }) => {
    document.body.classList.toggle('chrome-plugin-fast-login', fastLogin);

    if (fastLogin && location.pathname === '/login') {
      const int = setInterval(() => {
        const cta = document.querySelector('.login__footer a.link-blue');

        if (cta) {
          clearInterval(int);
          cta.click();
        }

      }, 100);
    }
  });
};

export const toggleKlFastLogin = () => {
  const fastLoginButton = document.querySelector('#fastLogin');
  void handleEnableCta(fastLoginButton);

  chrome.storage.sync.get('fastLogin', ({ fastLogin }) => {
    toggleLabel(fastLoginButton, fastLogin);

    fastLoginButton.addEventListener('click', async () => {
      fastLogin = !fastLogin;
      chrome.storage.sync.set({ fastLogin });
      toggleLabel(fastLoginButton, fastLogin);
    });
  });
};
