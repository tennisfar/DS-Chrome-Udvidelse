const isKlasselotterietLoginPage = () => {
  return window.location.host === 'klasselotteriet.local' && window.location.pathname.startsWith('/login');
};

const isKlasselotterietLoginNumberPage = () => {
  return window.location.pathname.endsWith('/login/aftalenummer');
};

const addLinkToConfluencePage = () => {
  const form = document.querySelector('form');
  if (!form) return;

  const link = document.createElement('a');
  link.href = 'https://viden.danskespil.dk/pages/viewpage.action?spaceKey=DLOART&title=Testdata';
  link.textContent = 'Se flere numre på viden.danskespil.dk';
  link.target = '_blank';
  link.style.display = 'block';
  link.style.marginTop = '10px';
  link.style.color = 'black';
  link.style.textDecoration = 'underline';

  setTimeout(() => {
    // Make sure it is added after other elements
    form.appendChild(link);
  }, 20);
};

const addNewNumbersForm = () => {
  chrome.storage.sync.get('klasselotterietCustomerNumbers', ({ klasselotterietCustomerNumbers }) => {
    const form = document.createElement('form');
    form.style.marginTop = '10px';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Indtast kundenumre (komma-separeret)';
    input.style.width = '350px';
    input.style.marginRight = '5px';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Gem numre';

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

    const parent = document.querySelector('form');
    if (parent) {
      parent.appendChild(form);
    }
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

const addNumbers = () => {
  const form = document.querySelector('form');
  if (!form) return;

  chrome.storage.sync.get('klasselotterietCustomerNumbers', ({ klasselotterietCustomerNumbers }) => {
    const container = document.createElement('div');
    container.style.marginTop = '10px';
    container.style.display = 'flex';

    klasselotterietCustomerNumbers.forEach((number) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.style.display = 'flex';
      btn.style.alignItems = 'center';
      btn.style.marginRight = '5px';
      btn.style.position = 'relative';

      // Number text
      const span = document.createElement('span');
      span.textContent = number;
      span.style.flex = '1';

      // Delete "x" button
      const del = document.createElement('span');
      del.textContent = '×';
      del.style.marginLeft = '8px';
      del.style.cursor = 'pointer';
      del.style.color = 'red';
      del.style.fontWeight = 'bold';

      del.addEventListener('click', (e) => {
        e.stopPropagation();
        const updated = klasselotterietCustomerNumbers.filter(n => n !== number);
        chrome.storage.sync.set({ klasselotterietCustomerNumbers: updated }, () => {
          location.reload();
        });
      });

      btn.appendChild(span);
      btn.appendChild(del);

      btn.addEventListener('click', (e) => {
        // Only trigger if not clicking the "x"
        if (e.target === del) return;

        fillOutFormWithNumber(number);

        // Rearrange the buttons to put the clicked one first
        const updated = [number, ...klasselotterietCustomerNumbers.filter(n => n !== number)];
        chrome.storage.sync.set({ klasselotterietCustomerNumbers: updated });
      });

      container.appendChild(btn);
    });

    form.appendChild(container);
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

          addNumbers();
          addNewNumbersForm();
          addLinkToConfluencePage();
        });
      }
    }, 500);

  });
};
