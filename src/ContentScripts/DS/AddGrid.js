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

const toggleGrid = (showGrid) => {
  let gridDesktop = document.getElementById('gridDesktop');
  let gridMobile = document.getElementById('gridMobile');
  let gridStyle = document.getElementById('gridStyle');

  if (!gridDesktop) createGridDesktopElement();
  if (!gridMobile) createGridMobileElement();
  if (!gridStyle) createGridStyleElement();

  document.body.classList.toggle('show-grid', showGrid);
};

export function setupAddGrid() {
  if ((location.host.endsWith('danskespil.dk') || location.host.startsWith('localhost')) && !location.pathname.startsWith('/sitecore/')) {
    let showGrid = false;

    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyG' && event.ctrlKey === true) {
        event.preventDefault();
        showGrid = !showGrid;
        toggleGrid(showGrid);
      }
    });
  }
}
