const MITID_SIMULATOR_HOST = 'mitidsimulator.test-nemlog-in.dk';
const MITID_SIMULATOR_PATH = '/Home/AutoFill';

/**
 * Generates a random valid-format CPR number for a person aged 20–80.
 * The modulus-11 check digit is not applied (abolished in 2007 for new CPR numbers).
 * Day is capped at 28 to avoid invalid dates (e.g. Feb 29/30/31).
 */
const generateCpr = () => {
    const today = new Date();
    const age = 20 + Math.floor(Math.random() * 61); // 20–80
    const birthYear = today.getFullYear() - age;

    const month = 1 + Math.floor(Math.random() * 12); // 1–12
    const day = 1 + Math.floor(Math.random() * 28);   // 1–28

    const dd = String(day).padStart(2, '0');
    const mm = String(month).padStart(2, '0');
    const yy = String(birthYear).slice(-2);

    // Century digit rules (from CPR spec):
    //   0–3 → born 1900–1999
    //   4   → born 1937–2036 (but we only use it for 2000+)
    //   5–8 → born 1858–1999 / 2000–2057 (complex; skip to keep it simple)
    let centuryDigit;
    if (birthYear >= 2000) {
        centuryDigit = 4;
    } else {
        centuryDigit = Math.floor(Math.random() * 4); // 0–3
    }

    const sequence = String(Math.floor(Math.random() * 1000)).padStart(3, '0');

    return `${dd}${mm}${yy}${centuryDigit}${sequence}`;
};

const checkPrivateMitId = () => {
    const checkbox = document.querySelector('#IsPerson');
    if (checkbox && !checkbox.checked) {
        checkbox.checked = true;
        checkbox.dispatchEvent(new Event('change', { bubbles: true }));
    }
};

const setFieldValue = (selector, value) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.value = value;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
};

const fillCpr = (cprInput) => {
    const cpr = generateCpr();
    cprInput.value = cpr;
    cprInput.dispatchEvent(new Event('input', { bubbles: true }));
    cprInput.dispatchEvent(new Event('change', { bubbles: true }));
    setFieldValue('#Username', `NielsHolm${cpr}`);
};

const injectButton = () => {
    checkPrivateMitId();
    setFieldValue('#firstName', 'Niels');
    setFieldValue('#middleName', '');
    setFieldValue('#LastName', 'Holm');
    setFieldValue('#Password', 'Test1234');

    const cprInput = document.querySelector('#cpr');
    if (!cprInput) return;

    fillCpr(cprInput);

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Generer CPR';
    button.classList.add('button');
    button.classList.add('button-primary');
    button.style.marginTop = '4px';

    button.addEventListener('click', () => fillCpr(cprInput));

    cprInput.insertAdjacentElement('afterend', button);
};

export const setupCprGenerator = () => {
    if (location.host !== MITID_SIMULATOR_HOST || location.pathname !== MITID_SIMULATOR_PATH) return;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectButton);
    } else {
        injectButton();
    }
};
