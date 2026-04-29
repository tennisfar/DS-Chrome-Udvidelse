const DS_NEW_ACCOUNT_HOST = 'town41.danskespil.dk';
const DS_NEW_ACCOUNT_PATH = '/roed-konto/opret-konto';

const EMAIL_DOMAIN = '@spam.danskespil.dk';
const TEST_PASSWORD = 'Abc@1234';
const TEST_USERNAME = 'town41dlo01';

const emailFromUsername = (username) => `${username}${EMAIL_DOMAIN}`;

const fillField = (input, value) => {
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
};

const wireUsernameToEmail = (emailInput, usernameInput) => {
    usernameInput.addEventListener('input', () => {
        fillField(emailInput, emailFromUsername(usernameInput.value));
    });
};

let filledStep = null;

const tryFillCurrentStep = () => {
    const hash = location.hash;

    if (hash.startsWith('#/step1') && filledStep !== 'step1') {
        const emailInput = document.querySelector('#email input[type="email"]');
        const usernameInput = document.querySelector('#username input[type="text"]');
        const passwordInput = document.querySelector('#password input[type="password"]');
        const passwordRepeatInput = document.querySelector('#passwordRepeat input[type="password"]');

        if (emailInput && usernameInput && passwordInput && passwordRepeatInput) {
            fillField(emailInput, emailFromUsername(TEST_USERNAME));
            fillField(usernameInput, TEST_USERNAME);
            fillField(passwordInput, TEST_PASSWORD);
            fillField(passwordRepeatInput, TEST_PASSWORD);
            passwordInput.closest('#password').querySelector('label').textContent = `Adgangskode - ${TEST_PASSWORD}`;
            wireUsernameToEmail(emailInput, usernameInput);
            filledStep = 'step1';
        }
    } else if (hash.startsWith('#/step2') && filledStep !== 'step2') {
        const firstNameInput = document.querySelector('#firstName input[type="text"]');
        const lastNameInput = document.querySelector('#lastName input[type="text"]');
        const streetInput = document.querySelector('#street input[type="text"]');
        const houseNumberInput = document.querySelector('#houseNumber input[type="text"]');
        const zipInput = document.querySelector('#zip input[type="text"]');
        const cityInput = document.querySelector('#city input[type="text"]');
        const phoneInput = document.querySelector('#phone input[type="text"]');
        const checkboxB = document.querySelector('#checkboxB');
        const checkboxC = document.querySelector('#checkboxC');
        const cprInput = document.querySelector('#cprNumber input[type="text"]');

        if (firstNameInput && lastNameInput && streetInput && houseNumberInput && zipInput && cityInput && phoneInput && checkboxB && checkboxC && cprInput) {
            filledStep = 'step2';
            fillField(firstNameInput, 'Niels');
            fillField(lastNameInput, 'Holm');
            streetInput.value = 'Korsdalsvej';
            streetInput.dispatchEvent(new Event('input', { bubbles: true }));
            streetInput.dispatchEvent(new Event('change', { bubbles: true }));
            streetInput.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
            fillField(houseNumberInput, '135');
            fillField(zipInput, '2605');
            fillField(cityInput, 'Brøndby');
            if (!checkboxB.checked) checkboxB.click();
            if (!checkboxC.checked) checkboxC.click();
            setTimeout(() => fillField(phoneInput, '+4512345678'), 1500);
            chrome.storage.sync.get('lastCpr', ({ lastCpr }) => {
                if (lastCpr) fillField(cprInput, lastCpr);
            });
        }
    } else if (hash.startsWith('#/step3') && filledStep !== 'step3') {
        const firstItem = document.querySelector('.dropdown__list__item');
        const securityAnswerInput = document.querySelector('#securityAnswer input[type="text"]');

        if (firstItem && securityAnswerInput) {
            firstItem.click();
            fillField(securityAnswerInput, 'HunErIkkeMin');
            filledStep = 'step3';
        }
    }
};

export const setupFillNewAccountForm = () => {
    if (
        location.host !== DS_NEW_ACCOUNT_HOST ||
        !location.pathname.startsWith(DS_NEW_ACCOUNT_PATH)
    ) return;

    chrome.storage.sync.get('nyBruger', ({ nyBruger }) => {
        if (!nyBruger) return;

        const observer = new MutationObserver(tryFillCurrentStep);
        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener('hashchange', () => { filledStep = null; tryFillCurrentStep(); });

        tryFillCurrentStep();
    });
};

export const toggleNyBruger = () => {
    const button = document.querySelector('#nyBruger');

    chrome.storage.sync.get('nyBruger', ({ nyBruger }) => {
        const span = button.querySelector('span');
        span.innerText = nyBruger ? 'til' : 'fra';

        button.addEventListener('click', () => {
            nyBruger = !nyBruger;
            chrome.storage.sync.set({ nyBruger });
            span.innerText = nyBruger ? 'til' : 'fra';
        });
    });
};
