const NEMLOGIN_HOST = 'test-nemlog-in.pp.mitid.dk';
const NEMLOGIN_PATH = '/login/mitid';
const NEMLOGIN_SIM_PATH = '/login/mitidsim';

const clickTestLogin = () => {
    const link = document.querySelector('#LoginMenuItem_2');
    if (link) link.click();
};

const fillSimUsername = () => {
    const usernameInput = document.querySelector('#MitIDSimulator_InputUsername');
    const passwordInput = document.querySelector('#MitIDSimulator_InputPassword');
    const passwordLabel = document.querySelector('#LabelPassword');
    if (!usernameInput || !passwordInput) return;

    chrome.storage.sync.get(['lastUsername', 'lastPassword'], ({ lastUsername, lastPassword }) => {
        if (lastUsername) {
            usernameInput.value = lastUsername;
            usernameInput.dispatchEvent(new Event('input', { bubbles: true }));
            usernameInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (lastPassword) {
            passwordInput.value = lastPassword;
            passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
            passwordInput.dispatchEvent(new Event('change', { bubbles: true }));
            if (passwordLabel) passwordLabel.textContent = `Password - ${lastPassword}`;
        }
    });
};

export const setupNemLogIn = () => {
    if (location.host !== NEMLOGIN_HOST) return;

    chrome.storage.sync.get('nyBruger', ({ nyBruger }) => {
        if (!nyBruger) return;

        if (location.pathname === NEMLOGIN_PATH) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', clickTestLogin);
            } else {
                clickTestLogin();
            }
        } else if (location.pathname === NEMLOGIN_SIM_PATH) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', fillSimUsername);
            } else {
                fillSimUsername();
            }
        }
    });
};
