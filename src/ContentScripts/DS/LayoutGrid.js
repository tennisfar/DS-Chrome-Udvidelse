import { getCurrentTab } from "../../ChromeTools";

const hostIsSitecore = location.host.includes('sitecore');

export const setupLayoutGrid = async () => {
  window.addEventListener('load', function () {

    const hasGridOnPage = !!window.getComputedStyle(document.documentElement, null).getPropertyValue('--grid-margin');

    if (hasGridOnPage && !hostIsSitecore) {

      function createGridDesktopElement() {
        const gridDesktop = document.createElement('table');
        gridDesktop.id = 'gridDesktop';
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const td7 = document.createElement('td');
        const td8 = document.createElement('td');
        const td9 = document.createElement('td');
        const td10 = document.createElement('td');
        const td11 = document.createElement('td');
        const td12 = document.createElement('td');
        const td13 = document.createElement('td');
        const td14 = document.createElement('td');

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);
        tr.appendChild(td10);
        tr.appendChild(td11);
        tr.appendChild(td12);
        tr.appendChild(td13);
        tr.appendChild(td14);

        gridDesktop.appendChild(tr);
        document.body.appendChild(gridDesktop);
      }

      function createGridMobileElement() {
        const gridMobile = document.createElement('table');
        gridMobile.id = 'gridMobile';
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        gridMobile.appendChild(tr);
        document.body.appendChild(gridMobile);
      }

      function createGridStyleElement() {
        const gridStyle = document.createElement('style');
        gridStyle.id = 'gridStyle';
        gridStyle.innerHTML = `
@media (max-width: 1023px) {
  #gridMobile {
    display: none;
    pointer-events: none;
    position: fixed;
    z-index: 1000;
    inset: 0;
    opacity: 0.5;
    width: 100%;
  }

  body.show-grid #gridMobile {
    display: table;
  }

  #gridMobile td:first-child {
    width: var(--grid-margin, 2rem);
    background: rgba(255,0,0,0.5);
    height: 100vh;
  }

  #gridMobile td:last-child {
    width: var(--grid-margin, 2rem);
    background: rgba(255,0,0,0.5);
    height: 100vh;
  }
}

@media (min-width: 1024px) {
  #gridDesktop {
    display: none;
    pointer-events: none;
    position: fixed;
    z-index: 1000;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: max(var(--grid-min-width, calc(1024px - 2*var(--grid-margin, 2rem))), min(calc(100vw - 2*var(--grid-margin, 2rem)), var(--grid-max-width, 112rem)));
    height: 105vh;
    opacity: 0.5;
    box-shadow: inset 0 0 0 1px rgba(255,0,0,0.5);
  }

  body.show-grid #gridDesktop {
    display: table;
  }

  #gridDesktop td {
    width: calc(100% / 14);
    box-shadow: inset 0 0 0 0.5px rgba(255,0,0,0.5);
    background: rgba(255,0,0,0.05);
  }

  #gridDesktop td:nth-child(odd) {
    background: rgba(255,0,0,0.15);
  }
}
    `;
        document.body.appendChild(gridStyle);
      }

      let gridDesktop = document.getElementById('gridDesktop');
      let gridMobile = document.getElementById('gridMobile');
      let gridStyle = document.getElementById('gridStyle');

      if (!gridDesktop) createGridDesktopElement();
      if (!gridMobile) createGridMobileElement();
      if (!gridStyle) createGridStyleElement();

      chrome.storage.sync.get('showGrid', ({ showGrid }) => {
        document.body.classList.toggle('show-grid', showGrid);
      });
    }
  });
}

const handleShowGrid = (showGrid) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: (showGrid) => {
        document.body.classList.toggle('show-grid', showGrid);
      },
    });
  });
};

const handleEnableCta = async (cta) => {
  const tab = await getCurrentTab();

  if ((tab?.url?.includes('danskespil.dk') || tab?.url?.includes('localhost') || tab?.url?.includes('netlify.app')) && !tab?.url?.includes('/sitecore/')) {
    cta.removeAttribute('disabled');
  }
};

const toggleLabel = (cta, showGrid) => {
  const span = cta.querySelector('span');
  span.innerText = showGrid ? 'Skjul' : 'Vis';
};

export async function setupShowGrid() {
  const showGridCta = document.querySelector('#showGrid');
  void handleEnableCta(showGridCta);

  chrome.storage.sync.get('showGrid', ({ showGrid }) => {
    toggleLabel(showGridCta, showGrid);

    showGridCta.addEventListener('click', async () => {
      showGrid = !showGrid;
      chrome.storage.sync.set({ showGrid });
      toggleLabel(showGridCta, showGrid);

      handleShowGrid(showGrid);
    });
  });

  // document.addEventListener('keydown', (event) => {
  //   if (event.code === 'KeyG' && event.ctrlKey === true) {
  //     event.preventDefault();
  //     showGrid = !showGrid;
  //     toggleGrid(showGrid);
  //   }
  // });
}