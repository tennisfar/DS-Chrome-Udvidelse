(() => {
  const findTextInDictionaries = () => {
    const txt = window.getSelection().toString();

    if (txt?.length > 4) {
      let results = {};

      const output = ({ key, key2, key3, key4, key5, key6, key7, key8, res, dictionaryKey }) => {
        key = key ? key + '/' : '';
        key2 = key2 ? key2 + '/' : '';
        key3 = key3 ? key3 + '/' : '';
        key4 = key4 ? key4 + '/' : '';
        key5 = key5 ? key5 + '/' : '';
        key6 = key6 ? key6 + '/' : '';
        key7 = key7 ? key7 + '/' : '';
        key8 = key8 ? key8 + '/' : '';

        const isDlo = dictionaryKey.includes('-DLO-');

        const region = dictionaryKey.split('path=/')[1].split('&')[0] + '/';

        results[region + key2 + key3 + key4 + key5 + key6 + key7 + key8] = {
          isDlo,
          res,
        };
      };

      let indexKey = 0;
      const dictionaryKeys = [];

      while (localStorage.key(indexKey)) {
        const storageKey = localStorage.key(indexKey);

        if (storageKey.includes('/dlo/scapi/common/dictionary/dictionary')) {
          dictionaryKeys.push(storageKey);
        }

        indexKey++;
      }

      dictionaryKeys.forEach((dictionaryKey) => {
        const s = JSON.parse(localStorage.getItem(dictionaryKey));

        if (typeof s !== 'object') return;

        Object.keys(s).forEach((key) => {
          if (!s[key]) return;

          if (typeof s[key] === 'string')
            if (s[key].includes(txt))
              output({
                key,
                res: s[key],
                dictionaryKey,
              });

          Object.keys(s[key]).forEach((key2) => {
            if (typeof s[key][key2] === 'string')
              if (s[key][key2].includes(txt))
                output({
                  key,
                  key2,
                  res: s[key][key2],
                  dictionaryKey,
                });

            Object.keys(s[key][key2]).forEach((key3) => {
              if (typeof s[key][key2][key3] === 'string')
                if (s[key][key2][key3].includes(txt))
                  output({
                    key,
                    key2,
                    key3,
                    res: s[key][key2][key3],
                    dictionaryKey,
                  });

              Object.keys(s[key][key2][key3]).forEach((key4) => {
                if (typeof s[key][key2][key3][key4] === 'string')
                  if (s[key][key2][key3][key4].includes(txt))
                    output({
                      key,
                      key2,
                      key3,
                      key4,
                      res: s[key][key2][key3][key4],
                      dictionaryKey,
                    });

                Object.keys(s[key][key2][key3][key4]).forEach((key5) => {
                  if (typeof s[key][key2][key3][key4][key5] === 'string')
                    if (s[key][key2][key3][key4][key5].includes(txt))
                      output({
                        key,
                        key2,
                        key3,
                        key4,
                        key5,
                        res: s[key][key2][key3][key4][key5],
                        dictionaryKey,
                      });

                  Object.keys(s[key][key2][key3][key4][key5]).forEach((key6) => {
                    if (typeof s[key][key2][key3][key4][key5][key6] === 'string')
                      if (s[key][key2][key3][key4][key5][key6].includes(txt))
                        output({
                          key,
                          key2,
                          key3,
                          key4,
                          key5,
                          key6,
                          res: s[key][key2][key3][key4][key5][key6],
                          dictionaryKey,
                        });

                    Object.keys(s[key][key2][key3][key4][key5][key6]).forEach((key7) => {
                      if (typeof s[key][key2][key3][key4][key5][key6][key7] === 'string')
                        if (s[key][key2][key3][key4][key5][key6][key7].includes(txt))
                          output({
                            key,
                            key2,
                            key3,
                            key4,
                            key5,
                            key6,
                            key7,
                            res: s[key][key2][key3][key4][key5][key6][key7],
                            dictionaryKey,
                          });

                      Object.keys(s[key][key2][key3][key4][key5][key6][key7]).forEach((key8) => {
                        if (typeof s[key][key2][key3][key4][key5][key6][key7][key8] === 'string')
                          if (s[key][key2][key3][key4][key5][key6][key7][key8].includes(txt))
                            output({
                              key,
                              key2,
                              key3,
                              key4,
                              key5,
                              key6,
                              key7,
                              key8,
                              res: s[key][key2][key3][key4][key5][key6][key7][key8],
                              dictionaryKey,
                            });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });

      const content = [];
      if (Object.keys(results).length > 150) return;
      Object.keys(results).forEach((key) => {
        const url = getDictionaryUrl(results[key].isDlo) + key;
        content.push({ txt: results[key].res, url, key });
      });

      fillDictionary(content);
    } else {
      clearFillDictionary();
    }
  };

  const getDictionaryUrl = (isDlo) => {
    const hostParts = location.host.split('.');
    const protocol = location.protocol + '//';
    const isTownEnv = hostParts[0].includes('town');
    const isDevEnv = hostParts[0].includes('web');
    const envPart = isTownEnv ? hostParts[0] : isDevEnv ? `web.${hostParts[1]}` : `edit${isDlo ? 'dlo' : 'dli'}`;

    return `${protocol}${envPart}.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/Site%20settings/Dictionary/`;
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
    document.addEventListener('selectionchange', findTextInDictionaries);
  }
})();
