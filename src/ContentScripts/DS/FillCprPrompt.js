const CPR_PROMPT_HOST = 'town41-id-dlo.danskespil.dk';
const CPR_PROMPT_PATH = '/webflow/cpr-prompt';

const fillCprPrompt = () => {
    const cprInput = document.querySelector('#Cpr');
    if (!cprInput) return;

    chrome.storage.sync.get('lastCpr', ({ lastCpr }) => {
        if (lastCpr) {
            cprInput.value = lastCpr;
            cprInput.dispatchEvent(new Event('input', { bubbles: true }));
            cprInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
};

export const setupFillCprPrompt = () => {
    if (location.host !== CPR_PROMPT_HOST || location.pathname !== CPR_PROMPT_PATH) return;

    chrome.storage.sync.get('nyBruger', ({ nyBruger }) => {
        if (!nyBruger) return;

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fillCprPrompt);
        } else {
            fillCprPrompt();
        }
    });
};
