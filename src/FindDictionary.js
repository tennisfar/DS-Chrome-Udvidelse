(() => {
  const getDictionaryUrl = (isDlo) => {
    const hostParts = location.host.split('.');
    const protocol = location.protocol + '//';
    const isTownEnv = hostParts[0].includes('town');
    const isDevEnv = hostParts[0].includes('web');
    const envPart = isTownEnv ? hostParts[0] : isDevEnv ? `web.${hostParts[1]}` : `edit${isDlo ? 'dlo' : 'dli'}`;

    return `${protocol}${envPart}.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/Site%20settings/Dictionary/`;
  };

  const findDictionary = () => {
    const txt = window.getSelection().toString().toLowerCase();

    if (!txt || txt.length <= 4) {
      clearFillDictionary();
      return;
    }

    let results = {};

    const output = (keys, res, dictionaryKey) => {
      const path = keys.map((k) => (k ? k + '/' : '')).join('');
      const isDlo = dictionaryKey.includes('-DLO-');
      const region = dictionaryKey.split('path=/')[1].split('&')[0] + '/';

      results[region + path] = { isDlo, res };
    };

    const searchKeys = (obj, currentKeys = [], dictionaryKey) => {
      if (typeof obj !== 'object' || obj === null) return;

      Object.entries(obj).forEach(([key, value]) => {
        const newKeys = [...currentKeys, key];
        if (typeof value === 'string' && value.toLowerCase().includes(txt)) {
          output(newKeys, value, dictionaryKey);
        } else {
          searchKeys(value, newKeys, dictionaryKey);
        }
      });
    };

    const dictionaryKeys = Array.from({ length: localStorage.length })
      .map((_, i) => localStorage.key(i))
      .filter((key) => key.includes('/dlo/scapi/common/dictionary/dictionary'));

    dictionaryKeys.forEach((dictionaryKey) => {
      const s = JSON.parse(localStorage.getItem(dictionaryKey));
      searchKeys(s, [], dictionaryKey);
    });

    if (Object.keys(results).length > 150) return;

    const content = Object.entries(results).map(([key, { res, isDlo }]) => {
      const url = getDictionaryUrl(isDlo) + key;
      return { txt: res, url, key };
    });

    fillDictionary(content);
  };

  const clearFillDictionary = () => {
    const removeElementById = (id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };

    removeElementById('findTextInDictionaries');
    removeElementById('findTextInDictionariesStyle');
  };

  const ensureElement = (id, createElement) => {
    let el = document.getElementById(id);
    if (!el) {
      el = createElement();
      document.body.appendChild(el);
    }
    return el;
  };

  const setStyle = (style, css) => {
    style.innerText = css;
  };

  const fillDictionary = (content) => {
    const el = ensureElement('findTextInDictionaries', () => {
      const div = document.createElement('div');
      div.id = 'findTextInDictionaries';
      return div;
    });
    el.innerText = '';

    const style = ensureElement('findTextInDictionariesStyle', () => {
      const styleEl = document.createElement('style');
      styleEl.id = 'findTextInDictionariesStyle';
      return styleEl;
    });

    setStyle(
      style,
      `
        #findTextInDictionaries {
          position: fixed;
          z-index: 1000000001;
          left: 0;
          top: 100vh;
          font-size: 12px;
          line-height: 1.2;
          background: #ededed;
          padding: 15px 20px;
          box-shadow: 0 1px 13px 1px #ccc;
          max-height: 95vh;
          max-width: 95vw;
        }
        
        #findTextInDictionaries::after {
          position: absolute;
          z-index: 1000000000;
          content: "${content.length}";
          top: -35px;
          left: 10px;
          width: 40px;
          height: 40px;
          background: #bdffe5;
          color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50% 50% 0 0;
        }
        
        #findTextInDictionaries:hover {
          top: auto;
          bottom: 0;
          overflow: auto;
        }
        
        #findTextInDictionaries a {
          text-decoration: none;
        }
        
        #findTextInDictionaries a:hover {
          text-decoration: underline;
        }
        
        #findTextInDictionaries p {
          background: white;
          padding: 10px;
          margin-bottom: 5px;
        }
        
        #findTextInDictionaries a {
          margin: 0 0 5px 10px;
          display: inline-block;
        }
        `
    );

    content.forEach(({ txt, url, key }) => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      const a = document.createElement('a');
      p.innerText = txt;
      a.href = url;
      a.target = '_blank';
      a.text = key;
      div.appendChild(p);
      div.appendChild(a);
      el.appendChild(div);
    });
  };

  if (location.host.endsWith('danskespil.dk') && !location.pathname.startsWith('/sitecore/')) {
    document.addEventListener('selectionchange', findDictionary);
  }
})();
