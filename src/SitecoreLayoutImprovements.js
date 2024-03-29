let previousSelectedSitecoreId = '';
let showFavoritesPopup = false;
let defaultTextAreaHeight = '500px;';

const addUrlToTreeListIds = () => {
  const treeLists = document.querySelectorAll('.scContentControlSelectedList');

  treeLists.forEach((treeList) => {
    if (treeList.classList.contains('ChromeExtensionAddUrlToTreeListIds')) return;

    const options = treeList.querySelectorAll('select option');
    const help = treeList.parentElement.querySelector('.scContentControlTreeListHelp');

    if (!help || options.length === 0) return;

    treeList.classList.add('ChromeExtensionAddUrlToTreeListIds');

    options.forEach((option) => {
      const id = option.value?.split('|')?.[1];
      if (!id) return;

      option.addEventListener('click', () => {
        const url = new URL(location.href);
        url.searchParams.set('fo', id);
        if (help.innerHTML.includes(id)) return;

        help.innerHTML = `${help.innerHTML} <a href="${url.href}" target="_blank" style="margin-left: 10px;">${id}</a>`;
      });
    });
  });
};

const stretchColumn = () => {
  const columnWidth = 400;
  document.cookie = `scContentEditorFoldersWidth=${columnWidth}; expires=Thu, 31 Dec 2100 12:00:00 UTC; path=/`;
  document.querySelector('#ContentTreePanel').style.width = `${columnWidth}px`;
  document.querySelector('.splitter-bar-vertical').style.left = `${columnWidth}px`;
  const editor = document.querySelector('#ContentEditor');
  editor.style.width = parseInt(editor.style.width) - columnWidth + parseInt(editor.style.left) + 'px';
  editor.style.left = `${columnWidth}px`;
};

const scrollToItem = () => {
  const selectedItem = document.querySelectorAll('.scContentTreeNodeActive')[0];
  const toggleArrow = selectedItem.parentElement.querySelector('img');
  toggleArrow && toggleArrow.click();
  selectedItem && selectedItem.parentElement && selectedItem.parentElement.scrollIntoView();
};

const getActiveTreeNodeText = () => {
  return document.querySelector('.scContentTreeNodeActive span').innerText;
};

const getActiveTreeNodePath = () => {
  return document.querySelector('.scEditorQuickInfo tr:nth-child(3) .scEditorHeaderQuickInfoInput').value;
};

const addBookmark = () => {
  const sitecoreText = getActiveTreeNodeText();
  if (sitecoreText === previousSelectedSitecoreId) return;
  previousSelectedSitecoreId = sitecoreText;

  let bookmarkLink = document.querySelector('#bookmarkLink');
  let bookmarkStyle = document.querySelector('#bookmarkStyle');

  if (!bookmarkLink) {
    bookmarkLink = document.createElement('a');
    bookmarkLink.id = 'bookmarkLink';
    document.querySelector('body').appendChild(bookmarkLink);
    bookmarkStyle = document.createElement('style');
    bookmarkStyle.id = 'bookmarkStyle';
    document.querySelector('body').appendChild(bookmarkStyle);
  }

  bookmarkLink.href = `javascript:window.location.href=window.location.origin+'/sitecore/shell/Applications/Content Editor.aspx?sc_bw=1&fo=${getActiveTreeNodePath()}'`;
  bookmarkLink.innerHTML = sitecoreText;

  bookmarkStyle.innerHTML = `
      #bookmarkLink {
          position: fixed;
          z-index: 1000000;
          top: 11px;
          left: 60px;
          cursor: pointer;
          height: 30px;
          display: flex;
          align-items: center;
          font-size: 10px;
          font-weight: 500;
          font-family: 'Montserrat', 'Open Sans', Helvetica, Arial, sans-serif;
          background: black;
          color: white;
          padding: 0 8px 0 7px;
          box-shadow: 0 0 0px 1px #585858;
          border-radius: 3px;
          text-decoration: none;
          line-height: 15px;
      }
    `;
};

const increaseHeightOnTreeLists = () => {
  document
    .querySelectorAll('.scEditorSectionPanelCell .scContentControl.scContentControlTreelist')
    .forEach((element) => {
      if (element.clientHeight === 220) {
        element.style.height = '400px';
      }
    });
};

const fixInputCellTextArea = () => {
  const txts = document.querySelectorAll('.scEditorFieldMarkerInputCell textarea');
  if (txts.length === 0) return;

  if (!document.getElementById('fixInputCellTextArea')) {
    const style = document.createElement('style');
    style.id = 'fixInputCellTextArea';
    style.innerHTML = `
      .monospace-font {font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;}
    `;
    document.querySelector('body').appendChild(style);
  }

  txts.forEach((txt) => {
    if (txt.classList.contains('monospace-font')) return;

    txt.classList.add('monospace-font');
    txt.setAttribute('spellcheck', false);

    txt.addEventListener('focus', function () {
      this.style.height = '800px';
      this.style.fontSize = '13px';
      this.style.lineHeight = '1.45';
    });

    txt.addEventListener('blur', function () {
      this.style = `height: ${defaultTextAreaHeight}`; // From enlargeTreelist() function below.
    });
  });
};

const enlargeTreelist = () => {
  const dataSection = document.querySelector('[id*="Section_Data"]');
  if (!dataSection) return;
  let dataTreelist = document
    .querySelector('[id*="Section_Data"]')
    .parentElement.querySelector('.scContentControlTreelist');
  if (!dataTreelist) return;
  dataTreelist.style = `height: ${defaultTextAreaHeight}`;
};

const getFavoriteItemLabel = (favorite) => {
  let span = document.createElement('span');
  span.innerText = favorite.label;
  return span;
};

const getFavoriteItemParentText = (favorite) => {
  let path = favorite.path.split('/');
  path.pop();
  path = path.join('/');
  path = `${path}/ `;
  let span = document.createElement('span');
  span.className = 'ChromeExtensionForSitecoreFavoritesPopupItemParent';
  span.innerText = path;
  return span;
};

const addFavorites = () => {
  let favoritesStyle = document.querySelector('#ChromeExtensionForSitecoreFavoritesStyle');

  if (!favoritesStyle) {
    favoritesStyle = document.createElement('style');
    favoritesStyle.id = 'ChromeExtensionForSitecoreFavoritesStyle';
    document.querySelector('body').appendChild(favoritesStyle);
    favoritesStyle.innerHTML = `
      .sc-globalHeader {
        z-index: 101;
      }
      
      #ChromeExtensionForSitecoreFavorites {
        position: relative;
        cursor: pointer;
      }
      #ChromeExtensionForSitecoreFavoritesPopup {
        position: absolute;
        z-index: 100000;
        background: #2b2b2b;
        top: 50px;
        right: 10px;
        min-width: 200px;
        text-align: left;
        padding: 0 5px 6px;
      }
      
      .ChromeExtensionForSitecoreFavoritesPopupItem {
        position: relative;
        height: auto;
        padding: 6px 7px;
        line-height: 1.4;
        font-size: 12px;
        cursor: pointer;
        padding-right: 35px;
        white-space: nowrap;
      }
      .ChromeExtensionForSitecoreFavoritesPopupItem:hover {
        background: black;
        text-decoration: underline;
      }
      
      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemRemove {
        position: absolute;
        z-index: 1;
        top: 5px;
        right: 5px;
        background: black;
        width: 18px;
        height: 18px;
        text-align: center;
      }
      
      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemRemove:hover {
        background: red; 
      }
      
      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemParent {
        color: #969696;
      }
    
      #ChromeExtensionForSitecoreFavoritesPopupAddFavorite {
        height: auto;
        padding: 6px 7px;
        line-height: 1.4;
        font-size: 12px;
        cursor: pointer;
        background: red;
        white-space: nowrap;
      }`;
  }

  chrome.storage.sync.get('favorites', ({ favorites }) => {
    favorites = favorites || [];
    if (favorites.length > 1) {
      favorites = favorites.sort((a, b) => (a.path > b.path ? 1 : -1));
    }

    const accInfo = document.querySelector('.sc-accountInformation');
    let fav = document.querySelector('#ChromeExtensionForSitecoreFavorites');
    let popup = document.querySelector('#ChromeExtensionForSitecoreFavoritesPopup');

    if (!fav) {
      fav = document.createElement('li');
      fav.id = 'ChromeExtensionForSitecoreFavorites';
      fav.innerText = 'Favorites';
      accInfo.insertBefore(fav, accInfo.firstChild);
      fav.addEventListener('click', () => {
        showFavoritesPopup = !showFavoritesPopup;
        addFavorites();
      });
    }

    if (!showFavoritesPopup && popup) {
      fav.removeChild(popup);
    }

    if (showFavoritesPopup) {
      if (!popup) {
        popup = document.createElement('div');
        popup.id = 'ChromeExtensionForSitecoreFavoritesPopup';
        fav.appendChild(popup);
      }

      favorites.forEach((favorite) => {
        let f = document.querySelector(`[ChromeExtensionForSitecoreFavoritesPopupItem="${favorite.path}"]`);

        if (!f) {
          f = document.createElement('div');
          f.className = 'ChromeExtensionForSitecoreFavoritesPopupItem';
          f.setAttribute('ChromeExtensionForSitecoreFavoritesPopupItem', favorite.path);

          f.addEventListener('click', () => {
            window.location.href = `${location.origin}${location.pathname}?sc_bw=1&fo=${favorite.path}`;
          });

          f.appendChild(getFavoriteItemParentText(favorite));
          f.appendChild(getFavoriteItemLabel(favorite));

          let remove = document.createElement('span');
          remove.className = 'ChromeExtensionForSitecoreFavoritesPopupItemRemove';
          remove.innerText = 'x';
          remove.addEventListener('click', () => {
            favorites = favorites.filter((f) => f !== favorite);
            chrome.storage.sync.set({ favorites });
            popup.removeChild(f);
            addFavorites();
          });

          f.appendChild(remove);
          popup.appendChild(f);
        }
      });

      let isItemInMenu = document.querySelector(
        `[ChromeExtensionForSitecoreFavoritesPopupItem = "${getActiveTreeNodePath()}"]`
      );
      let addButton = document.getElementById('ChromeExtensionForSitecoreFavoritesPopupAddFavorite');

      if (addButton) popup.removeChild(addButton);

      if (!isItemInMenu) {
        addButton = document.createElement('div');
        addButton.id = 'ChromeExtensionForSitecoreFavoritesPopupAddFavorite';
        addButton.innerText = `Add ${getActiveTreeNodeText()} ? `;
        addButton.addEventListener('click', (ev) => {
          favorites.push({
            label: getActiveTreeNodeText(),
            path: getActiveTreeNodePath(),
          });
          chrome.storage.sync.set({ favorites });
          addFavorites();
        });

        popup.appendChild(addButton);
      }
    }
  });
};

const addImageDirectUrl = () => {
  let item = document.getElementById('EditorFrames')?.querySelector('div');
  let isVisible = item?.style.display !== 'none';
  const table = item?.querySelector('table.scEditorQuickInfo tbody');

  if (item?.id && isVisible && table && !table.querySelector('#scToolMediaPath')) {
    const tr = document.createElement('tr');
    tr.id = 'scToolMediaPath';
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const style = document.createElement('style');
    const input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('onclick', 'javascript:this.select();return false');
    input.value = '-/media/' + item.id.replace('FContent', '') + '.ashx';

    td1.innerText = 'Relativ sti:';
    td2.appendChild(input);
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  }
};

const initialize = () => {
  if (location.host.endsWith('danskespil.dk')) {
    if (!!decodeURIComponent(location.pathname).match(/\/sitecore\/shell\/applications\/content[- ]editor\.aspx/i)) {
      stretchColumn();
      scrollToItem();
      addBookmark();
      setInterval(addUrlToTreeListIds, 500);
      setInterval(increaseHeightOnTreeLists, 500);
      setInterval(fixInputCellTextArea, 500);
      setInterval(addBookmark, 500);

      setInterval(enlargeTreelist, 500);

      addFavorites();
      document.addEventListener('click', () => setTimeout(addFavorites, 500));
    }

    if (
      !!decodeURIComponent(location.pathname).match(
        /\/sitecore\/shell\/applications\/content[- ]manager\/default\.aspx/i
      )
    ) {
      setInterval(addImageDirectUrl, 500);
    }
  }
};

export function setupSitecoreLayoutImprovements() {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // Document is already ready to go, run your code
    initialize();
  } else {
    // Add event listener for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', initialize);
  }
}
