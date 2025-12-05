const isKlasselotterietLoginPage = () => {
  return window.location.host.includes('klasselotteriet.') && window.location.pathname.startsWith('/login');
};

const isKlasselotterietLoginNumberPage = () => {
  return window.location.pathname.endsWith('/login/aftalenummer');
};

const makeUserNumbersForm = () => {
  const loginEl = document.querySelector('.username-login');
  if (!loginEl) return;

  const form = document.createElement('form');
  form.className = 'dsce__form';

  addNumbers(form);
  addNewNumbersForm(form);
  addLinkToConfluencePage(form);
  addNumbersStyle(form);
  loginEl.appendChild(form);
};

const addNumbersStyle = (form) => {
  const style = document.createElement('style');
  style.innerHTML = `
      .dsce__form {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .dsce__user-numbers-container {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
      }
      .dsce__user-numbers-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      }
      .dsce__delete-cta {
        display: flex;
        align-items: center;
        position: relative;
        gap: 10px;
        padding: 0 0 0 10px;
        background: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 30px;
        font-size: 14px;
        line-height: 1;
        letter-spacing: 2px;
        overflow: hidden;
      }
      .dsce__delete-cta-text {
        flex: 1;
        cursor: pointer;
      }
      .dsce__delete-btn {
        background: #cbcbcb;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
      }
      .dsce__delete-btn:hover {
        background: #ff282d;
      }
      .dsce__add-numbers-form {
        display: flex;
        gap: 5px;
      }
      .dsce__input-number {
        font-size: 16px;
        line-height: 1;
        letter-spacing: 2px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 34px;
        padding: 0 10px;
        flex: 1;
      }
      .dsce__cta {
        whitespace: nowrap;
        display: flex;
        align-items: center;
        position: relative;
        padding: 0 10px;
        background: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 34px;
        font-size: 16px;
        line-height: 1;
      }
      .dsce__link {
        font-size: 14px;
        display: block;
        color: black;
        text-decoration: underline;
      }
      .dsce__link:hover {
        color: black;
      }
      `;
  form.appendChild(style);
}

const addLinkToConfluencePage = (form) => {
  const link = document.createElement('a');
  link.classList.add('dsce__link');
  link.href = 'https://viden.danskespil.dk/pages/viewpage.action?spaceKey=DLOART&title=Testdata';
  link.textContent = 'Se flere numre på viden.danskespil.dk';
  link.target = '_blank';

  // Make sure it is added after other elements
  setTimeout(() => {
    form.appendChild(link);
  }, 20);
};

const addNewNumbersForm = (parent) => {
  chrome.storage.sync.get('klasselotterietCustomerNumbers', ({ klasselotterietCustomerNumbers }) => {
    const form = document.createElement('form');
    form.className = 'dsce__add-numbers-form';

    const input = document.createElement('input');
    input.className = 'dsce__input-number';
    input.type = 'text';
    input.placeholder = 'fx. 123456';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Tilføj nummer';
    btn.className = 'dsce__cta';

    btn.addEventListener('click', () => {
      const value = input.value;
      if (!value) return;

      const numbers = value.split(',').map(num => num.trim()).filter(num => num);

      chrome.storage.sync.set({ klasselotterietCustomerNumbers: Array.from(new Set([...klasselotterietCustomerNumbers, ...numbers])) }, () => {
        location.reload();
      }
      );
    }
    );

    form.appendChild(input);
    form.appendChild(btn);
    parent.appendChild(form);
  });
}

const fillOutFormWithNumber = (number) => {
  const inputCustomerNumber = document.querySelector('form [formcontrolname="customerNumber"]');
  const inputAgreementNumber = document.querySelector('form [formcontrolname="agreementNumber"]');
  if (inputCustomerNumber && inputAgreementNumber) {
    inputCustomerNumber.value = number;
    inputAgreementNumber.value = '111111111';

    // Simulate user interaction for Angular
    ['focus', 'input', 'blur'].forEach(eventType => {
      inputCustomerNumber.dispatchEvent(new Event(eventType, { bubbles: true }));
      inputAgreementNumber.dispatchEvent(new Event(eventType, { bubbles: true }));
    });
  }
};

const addNumbers = (parent) => {
  chrome.storage.sync.get('klasselotterietCustomerNumbers', ({ klasselotterietCustomerNumbers }) => {
    const container = document.createElement('div');
    container.className = 'dsce__user-numbers-container';
    container.id = 'dsChromeExtensionUserNumbers';

    klasselotterietCustomerNumbers.forEach((number) => {
      const btnEl = document.createElement('div');
      btnEl.className = 'dsce__delete-cta';

      // Number text
      const numberEl = document.createElement('div');
      numberEl.className = 'dsce__delete-cta-text';
      numberEl.textContent = number;

      // Delete "x" button
      const delEl = document.createElement('span');
      delEl.className = 'dsce__delete-btn';
      delEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

      delEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const updated = klasselotterietCustomerNumbers.filter(n => n !== number);
        chrome.storage.sync.set({ klasselotterietCustomerNumbers: updated }, () => {
          location.reload();
        });
      });

      btnEl.appendChild(numberEl);
      btnEl.appendChild(delEl);

      numberEl.addEventListener('click', (e) => {
        fillOutFormWithNumber(number);

        // Rearrange the buttons to put the clicked one first
        const updated = [number, ...klasselotterietCustomerNumbers.filter(n => n !== number)];
        chrome.storage.sync.set({ klasselotterietCustomerNumbers: updated });
      });

      container.appendChild(btnEl);
    });

    parent.appendChild(container);
  });
};


export const setupKlasselotterietLogIn = async () => {
  if (!isKlasselotterietLoginPage()) return;

  window.addEventListener('load', function () {
    const int = setInterval(() => {

      if (isKlasselotterietLoginNumberPage()) {
        clearInterval(int);

        chrome.storage.sync.get('klasselotterietCustomerNumbers', ({ klasselotterietCustomerNumbers }) => {
          const number = klasselotterietCustomerNumbers[0] || '151561';
          fillOutFormWithNumber(number);
          makeUserNumbersForm();
        });
      }
    }, 500);

  });
};
