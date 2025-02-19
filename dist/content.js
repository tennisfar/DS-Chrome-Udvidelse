/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ContentScripts/DS/AddGrid.js":
/*!******************************************!*\
  !*** ./src/ContentScripts/DS/AddGrid.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupAddGrid: () => (/* binding */ setupAddGrid)
/* harmony export */ });
function createGridDesktopElement() {
  var gridDesktop = document.createElement('table');
  gridDesktop.id = 'gridDesktop';
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');
  var td8 = document.createElement('td');
  var td9 = document.createElement('td');
  var td10 = document.createElement('td');
  var td11 = document.createElement('td');
  var td12 = document.createElement('td');
  var td13 = document.createElement('td');
  var td14 = document.createElement('td');
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
  var gridMobile = document.createElement('table');
  gridMobile.id = 'gridMobile';
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  gridMobile.appendChild(tr);
  document.body.appendChild(gridMobile);
}
function createGridStyleElement() {
  var gridStyle = document.createElement('style');
  gridStyle.id = 'gridStyle';
  gridStyle.innerHTML = "\n@media (max-width: 1023px) {\n  #gridMobile {\n    display: none;\n    pointer-events: none;\n    position: fixed;\n    z-index: 1000;\n    inset: 0;\n    opacity: 0.5;\n    width: 100%;\n  }\n  \n  body.show-grid #gridMobile {\n    display: table;\n  }\n  \n  #gridMobile td:first-child {\n    width: var(--grid-margin, 2rem);\n    background: rgba(255,0,0,0.5);\n    height: 100vh;\n  }\n  \n  #gridMobile td:last-child {\n    width: var(--grid-margin, 2rem);\n    background: rgba(255,0,0,0.5);\n    height: 100vh;\n  }\n}\n    \n@media (min-width: 1024px) {\n  #gridDesktop {\n    display: none;\n    pointer-events: none;\n    position: fixed;\n    z-index: 1000;\n    top: -2px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: max(var(--grid-min-width, calc(1024px - 2*var(--grid-margin, 2rem))), min(calc(100vw - 2*var(--grid-margin, 2rem)), var(--grid-max-width, 112rem)));\n    height: 105vh;\n    opacity: 0.5;\n    box-shadow: inset 0 0 0 1px rgba(255,0,0,0.5);\n  }\n  \n  body.show-grid #gridDesktop {\n    display: table;\n  }\n  \n  #gridDesktop td {\n    width: calc(100% / 14);\n    box-shadow: inset 0 0 0 0.5px rgba(255,0,0,0.5);\n    background: rgba(255,0,0,0.05);\n  }\n  \n  #gridDesktop td:nth-child(odd) {\n    background: rgba(255,0,0,0.15);\n  }\n}\n    ";
  document.body.appendChild(gridStyle);
}
var toggleGrid = function toggleGrid(showGrid) {
  var gridDesktop = document.getElementById('gridDesktop');
  var gridMobile = document.getElementById('gridMobile');
  var gridStyle = document.getElementById('gridStyle');
  if (!gridDesktop) createGridDesktopElement();
  if (!gridMobile) createGridMobileElement();
  if (!gridStyle) createGridStyleElement();
  document.body.classList.toggle('show-grid', showGrid);
};
function setupAddGrid() {
  if ((location.host.endsWith('danskespil.dk') || location.host.startsWith('localhost')) && !location.pathname.startsWith('/sitecore/')) {
    var showGrid = false;
    document.addEventListener('keydown', function (event) {
      if (event.code === 'KeyG' && event.ctrlKey === true) {
        event.preventDefault();
        showGrid = !showGrid;
        toggleGrid(showGrid);
      }
    });
  }
}

/***/ }),

/***/ "./src/ContentScripts/DS/DsFindDictionary.js":
/*!***************************************************!*\
  !*** ./src/ContentScripts/DS/DsFindDictionary.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupDsFindDictionary: () => (/* binding */ setupDsFindDictionary)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var findTextInDictionaries = function findTextInDictionaries() {
  var searchString = window.getSelection().toString().toLowerCase();
  if ((searchString === null || searchString === void 0 ? void 0 : searchString.length) > 4) {
    var results = {};
    var output = function output(_ref) {
      var key = _ref.key,
        key2 = _ref.key2,
        key3 = _ref.key3,
        key4 = _ref.key4,
        key5 = _ref.key5,
        key6 = _ref.key6,
        key7 = _ref.key7,
        key8 = _ref.key8,
        res = _ref.res,
        dictionaryKey = _ref.dictionaryKey;
      key = key ? key + '/' : '';
      key2 = key2 ? key2 + '/' : '';
      key3 = key3 ? key3 + '/' : '';
      key4 = key4 ? key4 + '/' : '';
      key5 = key5 ? key5 + '/' : '';
      key6 = key6 ? key6 + '/' : '';
      key7 = key7 ? key7 + '/' : '';
      key8 = key8 ? key8 + '/' : '';
      var isDlo = dictionaryKey.includes('-DLO-');
      var region = dictionaryKey.split('path=/')[1].split('&')[0] + '/';
      results[region + key2 + key3 + key4 + key5 + key6 + key7 + key8] = {
        isDlo: isDlo,
        res: res
      };
    };
    var indexKey = 0;
    var dictionaryKeys = [];
    while (localStorage.key(indexKey)) {
      var storageKey = localStorage.key(indexKey);
      if (storageKey.includes('/dlo/scapi/common/dictionary/dictionary')) {
        dictionaryKeys.push(storageKey);
      }
      indexKey++;
    }
    dictionaryKeys.forEach(function (dictionaryKey) {
      var s = JSON.parse(localStorage.getItem(dictionaryKey));
      if (_typeof(s) !== 'object') return;
      Object.keys(s).forEach(function (key) {
        if (!s[key]) return;
        if (typeof s[key] === 'string') {
          if (s[key].toLowerCase().includes(searchString)) {
            output({
              key: key,
              res: s[key],
              dictionaryKey: dictionaryKey
            });
          }
        }
        Object.keys(s[key]).forEach(function (key2) {
          if (typeof s[key][key2] === 'string') {
            if (s[key][key2].toLowerCase().includes(searchString)) {
              output({
                key: key,
                key2: key2,
                res: s[key][key2],
                dictionaryKey: dictionaryKey
              });
            }
          }
          Object.keys(s[key][key2]).forEach(function (key3) {
            if (typeof s[key][key2][key3] === 'string') {
              if (s[key][key2][key3].toLowerCase().includes(searchString)) {
                output({
                  key: key,
                  key2: key2,
                  key3: key3,
                  res: s[key][key2][key3],
                  dictionaryKey: dictionaryKey
                });
              }
            }
            Object.keys(s[key][key2][key3]).forEach(function (key4) {
              if (typeof s[key][key2][key3][key4] === 'string') {
                if (s[key][key2][key3][key4].toLowerCase().includes(searchString)) {
                  output({
                    key: key,
                    key2: key2,
                    key3: key3,
                    key4: key4,
                    res: s[key][key2][key3][key4],
                    dictionaryKey: dictionaryKey
                  });
                }
              }
              Object.keys(s[key][key2][key3][key4]).forEach(function (key5) {
                if (typeof s[key][key2][key3][key4][key5] === 'string') {
                  if (s[key][key2][key3][key4][key5].toLowerCase().includes(searchString)) {
                    output({
                      key: key,
                      key2: key2,
                      key3: key3,
                      key4: key4,
                      key5: key5,
                      res: s[key][key2][key3][key4][key5],
                      dictionaryKey: dictionaryKey
                    });
                  }
                }
                Object.keys(s[key][key2][key3][key4][key5]).forEach(function (key6) {
                  if (typeof s[key][key2][key3][key4][key5][key6] === 'string') {
                    if (s[key][key2][key3][key4][key5][key6].toLowerCase().includes(searchString)) {
                      output({
                        key: key,
                        key2: key2,
                        key3: key3,
                        key4: key4,
                        key5: key5,
                        key6: key6,
                        res: s[key][key2][key3][key4][key5][key6],
                        dictionaryKey: dictionaryKey
                      });
                    }
                  }
                  Object.keys(s[key][key2][key3][key4][key5][key6]).forEach(function (key7) {
                    if (typeof s[key][key2][key3][key4][key5][key6][key7] === 'string') {
                      if (s[key][key2][key3][key4][key5][key6][key7].toLowerCase().includes(searchString)) {
                        output({
                          key: key,
                          key2: key2,
                          key3: key3,
                          key4: key4,
                          key5: key5,
                          key6: key6,
                          key7: key7,
                          res: s[key][key2][key3][key4][key5][key6][key7],
                          dictionaryKey: dictionaryKey
                        });
                      }
                    }
                    Object.keys(s[key][key2][key3][key4][key5][key6][key7]).forEach(function (key8) {
                      if (typeof s[key][key2][key3][key4][key5][key6][key7][key8] === 'string') {
                        if (s[key][key2][key3][key4][key5][key6][key7][key8].toLowerCase().includes(searchString)) {
                          output({
                            key: key,
                            key2: key2,
                            key3: key3,
                            key4: key4,
                            key5: key5,
                            key6: key6,
                            key7: key7,
                            key8: key8,
                            res: s[key][key2][key3][key4][key5][key6][key7][key8],
                            dictionaryKey: dictionaryKey
                          });
                        }
                      }
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
    var content = [];
    if (Object.keys(results).length > 150) return;
    Object.keys(results).forEach(function (key) {
      var url = getDictionaryUrl(results[key].isDlo) + key;
      content.push({
        txt: results[key].res,
        url: url,
        key: key
      });
    });
    fillDictionary(content);
  } else {
    clearFillDictionary();
  }
};
var getDictionaryUrl = function getDictionaryUrl(isDlo) {
  var hostParts = location.host.split('.');
  var protocol = location.protocol + '//';
  var isTownEnv = hostParts[0].includes('town');
  var isDevEnv = hostParts[0].includes('web');
  var envPart;
  if (isDevEnv) {
    envPart = "web.".concat(hostParts[1]);
  } else if (isTownEnv) {
    envPart = "".concat(hostParts[0], "edit").concat(isDlo ? 'dlo' : 'dli');
  } else {
    envPart = "edit".concat(isDlo ? 'dlo' : 'dli');
  }
  return "".concat(protocol).concat(envPart, ".danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/Site%20settings/Dictionary/");
};
var clearFillDictionary = function clearFillDictionary() {
  var removeElementById = function removeElementById(id) {
    var el = document.getElementById(id);
    if (el) el.remove();
  };
  removeElementById('findTextInDictionaries');
  removeElementById('findTextInDictionariesStyle');
};
var ensureElement = function ensureElement(id, createElement) {
  var el = document.getElementById(id);
  if (!el) {
    el = createElement();
    document.body.appendChild(el);
  }
  return el;
};
var setStyle = function setStyle(style, css) {
  style.innerText = css;
};
var fillDictionary = function fillDictionary(content) {
  var el = ensureElement('findTextInDictionaries', function () {
    var div = document.createElement('div');
    div.id = 'findTextInDictionaries';
    return div;
  });
  el.innerText = '';
  var style = ensureElement('findTextInDictionariesStyle', function () {
    var styleEl = document.createElement('style');
    styleEl.id = 'findTextInDictionariesStyle';
    return styleEl;
  });
  setStyle(style, "\n        #findTextInDictionaries {\n          position: fixed;\n          z-index: 1000000001;\n          left: 0;\n          top: 100vh;\n          font-size: 12px;\n          line-height: 1.2;\n          background: #ededed;\n          padding: 15px 20px;\n          box-shadow: 0 1px 13px 1px #ccc;\n          max-height: 95vh;\n          max-width: 95vw;\n        }\n        \n        #findTextInDictionaries::after {\n          position: absolute;\n          z-index: 1000000000;\n          content: \"".concat(content.length, "\";\n          top: -35px;\n          left: 10px;\n          width: 40px;\n          height: 40px;\n          background: #bdffe5;\n          color: black;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          border-radius: 50% 50% 0 0;\n        }\n        \n        #findTextInDictionaries:hover {\n          top: auto;\n          bottom: 0;\n          overflow: auto;\n        }\n        \n        #findTextInDictionaries a {\n          text-decoration: none;\n        }\n        \n        #findTextInDictionaries a:hover {\n          text-decoration: underline;\n        }\n        \n        #findTextInDictionaries p {\n          background: white;\n          padding: 10px;\n          margin-bottom: 5px;\n        }\n        \n        #findTextInDictionaries a {\n          margin: 0 0 5px 10px;\n          display: inline-block;\n        }\n        "));
  content.forEach(function (_ref2) {
    var txt = _ref2.txt,
      url = _ref2.url,
      key = _ref2.key;
    var div = document.createElement('div');
    var p = document.createElement('p');
    var a = document.createElement('a');
    p.innerText = txt;
    a.href = url;
    a.target = '_blank';
    a.text = key;
    div.appendChild(p);
    div.appendChild(a);
    el.appendChild(div);
  });
};
function setupDsFindDictionary() {
  if (location.host.endsWith('danskespil.dk') && !location.pathname.startsWith('/sitecore/')) {
    document.addEventListener('selectionchange', findTextInDictionaries);
  }
}

/***/ }),

/***/ "./src/ContentScripts/DS/SitecoreDeveloperError.js":
/*!*********************************************************!*\
  !*** ./src/ContentScripts/DS/SitecoreDeveloperError.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupDsSitecoreDeveloperError: () => (/* binding */ setupDsSitecoreDeveloperError)
/* harmony export */ });
function setupDsSitecoreDeveloperError() {
  if (location.host.endsWith('danskespil.dk') && !location.pathname.startsWith('/sitecore/')) {
    var style = document.getElementById('sitecoreDeveloperErrorStyle');
    if (!style) {
      style = document.createElement('style');
      style.id = 'sitecoreDeveloperErrorStyle';
      document.body.appendChild(style);
    }
    style.innerHTML = "\n      .alert.alert-error:has(.developer-alert) {\n        background: #9b59b6;\n        color: white;\n        font-size: 13px;\n        line-height: 1.5;\n        padding: 10px;\n    }";
  }
}

/***/ }),

/***/ "./src/ContentScripts/Github/GitHubCreateBranch.js":
/*!*********************************************************!*\
  !*** ./src/ContentScripts/Github/GitHubCreateBranch.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupGithubCreateBranch: () => (/* binding */ setupGithubCreateBranch)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var waitForElement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(selector) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (document.querySelector(selector)) {
            _context.next = 5;
            break;
          }
          _context.next = 3;
          return new Promise(function (resolve) {
            return requestAnimationFrame(resolve);
          });
        case 3:
          _context.next = 0;
          break;
        case 5:
          return _context.abrupt("return", document.querySelector(selector));
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function waitForElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
function setupGithubCreateBranch() {
  return _setupGithubCreateBranch.apply(this, arguments);
}
function _setupGithubCreateBranch() {
  _setupGithubCreateBranch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var params, newBranch, cta, input, url;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(location.host === 'github.com' && location.search.includes('?newBranch='))) {
            _context2.next = 14;
            break;
          }
          params = new URLSearchParams(location.search);
          newBranch = params.get('newBranch');
          _context2.next = 5;
          return waitForElement('[app-name="repos-branches"] button');
        case 5:
          cta = _context2.sent;
          cta === null || cta === void 0 || cta.click();
          _context2.next = 9;
          return waitForElement('[role=dialog][data-focus-trap="active"] input');
        case 9:
          input = _context2.sent;
          if (input) {
            setTimeout(function () {
              // Set the value attribute directly
              input.setAttribute('value', newBranch);

              // Dispatch events
              var eventsToDispatch = ['input', 'change', 'keyup'];
              eventsToDispatch.forEach(function (eventType) {
                var event = new Event(eventType, {
                  bubbles: true,
                  cancelable: true
                });
                input.dispatchEvent(event);
              });
            }, 500);
          }
          url = new URL(window.location);
          url.searchParams["delete"]('newBranch');
          history.pushState({}, '', url);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _setupGithubCreateBranch.apply(this, arguments);
}

/***/ }),

/***/ "./src/ContentScripts/Jira/Jira.js":
/*!*****************************************!*\
  !*** ./src/ContentScripts/Jira/Jira.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCTAInToolbar: () => (/* binding */ createCTAInToolbar),
/* harmony export */   isJiraCW: () => (/* binding */ isJiraCW),
/* harmony export */   isJiraDLOA: () => (/* binding */ isJiraDLOA),
/* harmony export */   isJiraFOR: () => (/* binding */ isJiraFOR),
/* harmony export */   isJiraIU: () => (/* binding */ isJiraIU),
/* harmony export */   isPageAJiraTask: () => (/* binding */ isPageAJiraTask),
/* harmony export */   waitForElement: () => (/* binding */ waitForElement)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var waitForElement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(selector) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (document.querySelector(selector)) {
            _context.next = 5;
            break;
          }
          _context.next = 3;
          return new Promise(function (resolve) {
            return requestAnimationFrame(resolve);
          });
        case 3:
          _context.next = 0;
          break;
        case 5:
          return _context.abrupt("return", document.querySelector(selector));
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function waitForElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getToolbar = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var toolBar, ctaContainer;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return waitForElement('.aui-toolbar2-primary');
        case 2:
          toolBar = _context2.sent;
          ctaContainer = toolBar.querySelector('#dsChromeExtensionJiraToolbar');
          if (!ctaContainer) {
            ctaContainer = document.createElement('div');
            ctaContainer.id = 'dsChromeExtensionJiraToolbar';
            ctaContainer.classList.add('aui-buttons');
            toolBar.appendChild(ctaContainer);
          }
          return _context2.abrupt("return", ctaContainer);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getToolbar() {
    return _ref2.apply(this, arguments);
  };
}();
function isPageAJiraTask() {
  return location.host.includes('jira.danskespil.dk') && location.pathname.startsWith('/browse/');
}
var isJiraIU = function isJiraIU() {
  return location.pathname.includes('/IU-');
};
var isJiraFOR = function isJiraFOR() {
  return location.pathname.includes('/FOR-');
};
var isJiraCW = function isJiraCW() {
  return location.pathname.includes('/CW-');
};
var isJiraDLOA = function isJiraDLOA() {
  return location.pathname.includes('/DLOA-');
};
var createCTAInToolbar = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(label, fn) {
    var toolBar, cta;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return getToolbar();
        case 2:
          toolBar = _context3.sent;
          cta = document.createElement('a');
          cta.classList.add('aui-button');
          cta.innerText = label;
          cta.addEventListener('click', fn);
          toolBar.appendChild(cta);
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function createCTAInToolbar(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/ContentScripts/Jira/ShowCreateBranchLink.js":
/*!*********************************************************!*\
  !*** ./src/ContentScripts/Jira/ShowCreateBranchLink.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showCreateBranchLink: () => (/* binding */ showCreateBranchLink)
/* harmony export */ });
/* harmony import */ var _MakeBranchName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../MakeBranchName */ "./src/MakeBranchName.js");
/* harmony import */ var _Jira__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Jira */ "./src/ContentScripts/Jira/Jira.js");


var createCTA = function createCTA(repo) {
  var branchName = (0,_MakeBranchName__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (!branchName) return;
  (0,_Jira__WEBPACK_IMPORTED_MODULE_1__.createCTAInToolbar)('Create Branch', function () {
    window.open("https://github.com/ds-itu-frontend-service/".concat(repo, "/branches?newBranch=").concat(branchName));
  });
};
function showCreateBranchLink() {
  if ((0,_Jira__WEBPACK_IMPORTED_MODULE_1__.isPageAJiraTask)() && ((0,_Jira__WEBPACK_IMPORTED_MODULE_1__.isJiraIU)() || (0,_Jira__WEBPACK_IMPORTED_MODULE_1__.isJiraFOR)() || (0,_Jira__WEBPACK_IMPORTED_MODULE_1__.isJiraCW)() || (0,_Jira__WEBPACK_IMPORTED_MODULE_1__.isJiraDLOA)())) {
    var _document$getElementB, _document$getElementB2;
    var isTivoli = ((_document$getElementB = document.getElementById('customfield_13101-val')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.innerText.toLowerCase()) === 'tivoli' || false;
    var isDDK = ((_document$getElementB2 = document.getElementById('labels-162978-value')) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.innerText.includes('DDK')) || false;
    if (isDDK) {
      createCTA('klasselotteriet-website');
      return;
    }
    var repo = isTivoli ? 'tivolicasino-website' : 'danskespil-website';
    createCTA(repo);
  }
}

/***/ }),

/***/ "./src/MakeBranchName.js":
/*!*******************************!*\
  !*** ./src/MakeBranchName.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeBranchName() {
  var type = document.querySelector('#issuedetails #type-val');
  var issue = document.querySelector('.issue-link');
  var summary = document.querySelector('#summary-val');
  if (document.querySelector('.ghx-columns .ghx-issue.ghx-selected')) {
    type = document.querySelector('.ghx-issue.ghx-selected .ghx-type');
    issue = document.querySelector('.ghx-issue.ghx-selected .ghx-key');
    summary = document.querySelector('.ghx-issue.ghx-selected .ghx-summary');
  }
  if (!(type && issue && summary)) return;
  type = type.innerText || type.title;
  type = type.trim().toLowerCase();
  type = type.replace(/story/, 'feature');
  type = type.replace(/epic/, 'feature');
  if (type === 'bug') type = 'bugfix';
  issue = issue.innerText.trim();
  summary = summary.innerText.toLowerCase().replace(/[^a-z ]/g, '-').replace(/ /g, '-').replace(/--+/g, '-');

  // replace leading dash
  summary = summary.replace(/^-/, '');
  return "".concat(type, "/").concat(issue, "-").concat(summary).slice(0, 50).replace(/-$/, '');
}

// Add to window, as it's used in JiraMakeBRanchName.js.
window.makeBranchName = makeBranchName;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeBranchName);

/***/ }),

/***/ "./src/SitecoreLayoutImprovements.js":
/*!*******************************************!*\
  !*** ./src/SitecoreLayoutImprovements.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupSitecoreLayoutImprovements: () => (/* binding */ setupSitecoreLayoutImprovements)
/* harmony export */ });
var previousSelectedSitecoreId = '';
var showFavoritesPopup = false;
var defaultTextAreaHeight = '500px;';
var addUrlToTreeListIds = function addUrlToTreeListIds() {
  var treeLists = document.querySelectorAll('.scContentControlSelectedList');
  treeLists.forEach(function (treeList) {
    if (treeList.classList.contains('ChromeExtensionAddUrlToTreeListIds')) return;
    var options = treeList.querySelectorAll('select option');
    var help = treeList.parentElement.querySelector('.scContentControlTreeListHelp');
    if (!help || options.length === 0) return;
    treeList.classList.add('ChromeExtensionAddUrlToTreeListIds');
    options.forEach(function (option) {
      var _option$value;
      var id = (_option$value = option.value) === null || _option$value === void 0 || (_option$value = _option$value.split('|')) === null || _option$value === void 0 ? void 0 : _option$value[1];
      if (!id) return;
      option.addEventListener('click', function () {
        var url = new URL(location.href);
        url.searchParams.set('fo', id);
        if (help.innerHTML.includes(id)) return;
        help.innerHTML = "".concat(help.innerHTML, " <a href=\"").concat(url.href, "\" target=\"_blank\" style=\"margin-left: 10px;\">").concat(id, "</a>");
      });
    });
  });
};
var stretchColumn = function stretchColumn() {
  var columnWidth = 400;
  document.cookie = "scContentEditorFoldersWidth=".concat(columnWidth, "; expires=Thu, 31 Dec 2100 12:00:00 UTC; path=/");
  document.querySelector('#ContentTreePanel').style.width = "".concat(columnWidth, "px");
  document.querySelector('.splitter-bar-vertical').style.left = "".concat(columnWidth, "px");
  var editor = document.querySelector('#ContentEditor');
  editor.style.width = parseInt(editor.style.width) - columnWidth + parseInt(editor.style.left) + 'px';
  editor.style.left = "".concat(columnWidth, "px");
};
var scrollToItem = function scrollToItem() {
  var selectedItem = document.querySelectorAll('.scContentTreeNodeActive')[0];
  var toggleArrow = selectedItem.parentElement.querySelector('img');
  toggleArrow && toggleArrow.click();
  selectedItem && selectedItem.parentElement && selectedItem.parentElement.scrollIntoView();
};
var getActiveTreeNodeText = function getActiveTreeNodeText() {
  return document.querySelector('.scContentTreeNodeActive span').innerText;
};
var getActiveTreeNodePath = function getActiveTreeNodePath() {
  return document.querySelector('.scEditorQuickInfo tr:nth-child(3) .scEditorHeaderQuickInfoInput').value;
};
var addBookmark = function addBookmark() {
  var sitecoreText = getActiveTreeNodeText();
  if (sitecoreText === previousSelectedSitecoreId) return;
  previousSelectedSitecoreId = sitecoreText;
  var bookmarkLink = document.querySelector('#bookmarkLink');
  var bookmarkStyle = document.querySelector('#bookmarkStyle');
  if (!bookmarkLink) {
    bookmarkLink = document.createElement('a');
    bookmarkLink.id = 'bookmarkLink';
    document.querySelector('body').appendChild(bookmarkLink);
    bookmarkStyle = document.createElement('style');
    bookmarkStyle.id = 'bookmarkStyle';
    document.querySelector('body').appendChild(bookmarkStyle);
  }
  bookmarkLink.href = "javascript:window.location.href=window.location.origin+'/sitecore/shell/Applications/Content Editor.aspx?sc_bw=1&fo=".concat(getActiveTreeNodePath(), "'");
  bookmarkLink.innerHTML = sitecoreText;
  bookmarkStyle.innerHTML = "\n      #bookmarkLink {\n          position: fixed;\n          z-index: 1000000;\n          top: 11px;\n          left: 60px;\n          cursor: pointer;\n          height: 30px;\n          display: flex;\n          align-items: center;\n          font-size: 10px;\n          font-weight: 500;\n          font-family: 'Montserrat', 'Open Sans', Helvetica, Arial, sans-serif;\n          background: black;\n          color: white;\n          padding: 0 8px 0 7px;\n          box-shadow: 0 0 0px 1px #585858;\n          border-radius: 3px;\n          text-decoration: none;\n          line-height: 15px;\n      }\n    ";
};
var increaseHeightOnTreeLists = function increaseHeightOnTreeLists() {
  document.querySelectorAll('.scEditorSectionPanelCell .scContentControl.scContentControlTreelist').forEach(function (element) {
    if (element.clientHeight === 220) {
      element.style.height = '400px';
    }
  });
};
var fixInputCellTextArea = function fixInputCellTextArea() {
  var txts = document.querySelectorAll('.scEditorFieldMarkerInputCell textarea');
  if (txts.length === 0) return;
  if (!document.getElementById('fixInputCellTextArea')) {
    var style = document.createElement('style');
    style.id = 'fixInputCellTextArea';
    style.innerHTML = "\n      .monospace-font {font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;}\n    ";
    document.querySelector('body').appendChild(style);
  }
  txts.forEach(function (txt) {
    if (txt.classList.contains('monospace-font')) return;
    txt.classList.add('monospace-font');
    txt.setAttribute('spellcheck', false);
    txt.addEventListener('focus', function () {
      this.style.height = '800px';
      this.style.fontSize = '13px';
      this.style.lineHeight = '1.45';
    });
    txt.addEventListener('blur', function () {
      this.style = "height: ".concat(defaultTextAreaHeight); // From enlargeTreelist() function below.
    });
  });
};
var enlargeTreelist = function enlargeTreelist() {
  var dataSection = document.querySelector('[id*="Section_Data"]');
  if (!dataSection) return;
  var dataTreelist = document.querySelector('[id*="Section_Data"]').parentElement.querySelector('.scContentControlTreelist');
  if (!dataTreelist) return;
  dataTreelist.style = "height: ".concat(defaultTextAreaHeight);
};
var getFavoriteItemLabel = function getFavoriteItemLabel(favorite) {
  var span = document.createElement('span');
  span.innerText = favorite.label;
  return span;
};
var getFavoriteItemParentText = function getFavoriteItemParentText(favorite) {
  var path = favorite.path.split('/');
  path.pop();
  path = path.join('/');
  path = "".concat(path, "/ ");
  var span = document.createElement('span');
  span.className = 'ChromeExtensionForSitecoreFavoritesPopupItemParent';
  span.innerText = path;
  return span;
};
var addFavorites = function addFavorites() {
  var favoritesStyle = document.querySelector('#ChromeExtensionForSitecoreFavoritesStyle');
  if (!favoritesStyle) {
    favoritesStyle = document.createElement('style');
    favoritesStyle.id = 'ChromeExtensionForSitecoreFavoritesStyle';
    document.querySelector('body').appendChild(favoritesStyle);
    favoritesStyle.innerHTML = "\n      .sc-globalHeader {\n        z-index: 101;\n      }\n      \n      #ChromeExtensionForSitecoreFavorites {\n        position: relative;\n        cursor: pointer;\n      }\n      #ChromeExtensionForSitecoreFavoritesPopup {\n        position: absolute;\n        z-index: 100000;\n        background: #2b2b2b;\n        top: 50px;\n        right: 10px;\n        min-width: 200px;\n        text-align: left;\n        padding: 0 5px 6px;\n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem {\n        position: relative;\n        height: auto;\n        padding: 6px 7px;\n        line-height: 1.4;\n        font-size: 12px;\n        cursor: pointer;\n        padding-right: 35px;\n        white-space: nowrap;\n      }\n      .ChromeExtensionForSitecoreFavoritesPopupItem:hover {\n        background: black;\n        text-decoration: underline;\n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemRemove {\n        position: absolute;\n        z-index: 1;\n        top: 5px;\n        right: 5px;\n        background: black;\n        width: 18px;\n        height: 18px;\n        text-align: center;\n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemRemove:hover {\n        background: red; \n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemParent {\n        color: #969696;\n      }\n    \n      #ChromeExtensionForSitecoreFavoritesPopupAddFavorite {\n        height: auto;\n        padding: 6px 7px;\n        line-height: 1.4;\n        font-size: 12px;\n        cursor: pointer;\n        background: red;\n        white-space: nowrap;\n      }";
  }
  chrome.storage.sync.get('favorites', function (_ref) {
    var favorites = _ref.favorites;
    favorites = favorites || [];
    if (favorites.length > 1) {
      favorites = favorites.sort(function (a, b) {
        return a.path > b.path ? 1 : -1;
      });
    }
    var accInfo = document.querySelector('.sc-accountInformation');
    var fav = document.querySelector('#ChromeExtensionForSitecoreFavorites');
    var popup = document.querySelector('#ChromeExtensionForSitecoreFavoritesPopup');
    if (!fav) {
      fav = document.createElement('li');
      fav.id = 'ChromeExtensionForSitecoreFavorites';
      fav.innerText = 'Favorites';
      accInfo.insertBefore(fav, accInfo.firstChild);
      fav.addEventListener('click', function () {
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
      favorites.forEach(function (favorite) {
        var f = document.querySelector("[ChromeExtensionForSitecoreFavoritesPopupItem=\"".concat(favorite.path, "\"]"));
        if (!f) {
          f = document.createElement('div');
          f.className = 'ChromeExtensionForSitecoreFavoritesPopupItem';
          f.setAttribute('ChromeExtensionForSitecoreFavoritesPopupItem', favorite.path);
          f.addEventListener('click', function () {
            window.location.href = "".concat(location.origin).concat(location.pathname, "?sc_bw=1&fo=").concat(favorite.path);
          });
          f.appendChild(getFavoriteItemParentText(favorite));
          f.appendChild(getFavoriteItemLabel(favorite));
          var remove = document.createElement('span');
          remove.className = 'ChromeExtensionForSitecoreFavoritesPopupItemRemove';
          remove.innerText = 'x';
          remove.addEventListener('click', function () {
            favorites = favorites.filter(function (f) {
              return f !== favorite;
            });
            chrome.storage.sync.set({
              favorites: favorites
            });
            popup.removeChild(f);
            addFavorites();
          });
          f.appendChild(remove);
          popup.appendChild(f);
        }
      });
      var isItemInMenu = document.querySelector("[ChromeExtensionForSitecoreFavoritesPopupItem = \"".concat(getActiveTreeNodePath(), "\"]"));
      var addButton = document.getElementById('ChromeExtensionForSitecoreFavoritesPopupAddFavorite');
      if (addButton) popup.removeChild(addButton);
      if (!isItemInMenu) {
        addButton = document.createElement('div');
        addButton.id = 'ChromeExtensionForSitecoreFavoritesPopupAddFavorite';
        addButton.innerText = "Add ".concat(getActiveTreeNodeText(), " ? ");
        addButton.addEventListener('click', function (ev) {
          favorites.push({
            label: getActiveTreeNodeText(),
            path: getActiveTreeNodePath()
          });
          chrome.storage.sync.set({
            favorites: favorites
          });
          addFavorites();
        });
        popup.appendChild(addButton);
      }
    }
  });
};
var addImageDirectUrl = function addImageDirectUrl() {
  var _document$getElementB;
  var item = (_document$getElementB = document.getElementById('EditorFrames')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.querySelector('div');
  var isVisible = (item === null || item === void 0 ? void 0 : item.style.display) !== 'none';
  var table = item === null || item === void 0 ? void 0 : item.querySelector('table.scEditorQuickInfo tbody');
  if (item !== null && item !== void 0 && item.id && isVisible && table && !table.querySelector('#scToolMediaPath')) {
    var tr = document.createElement('tr');
    tr.id = 'scToolMediaPath';
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var style = document.createElement('style');
    var input = document.createElement('input');
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
var initialize = function initialize() {
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
      document.addEventListener('click', function () {
        return setTimeout(addFavorites, 500);
      });
    }
    if (!!decodeURIComponent(location.pathname).match(/\/sitecore\/shell\/applications\/content[- ]manager\/default\.aspx/i)) {
      setInterval(addImageDirectUrl, 500);
    }
  }
};
function setupSitecoreLayoutImprovements() {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // Document is already ready to go, run your code
    initialize();
  } else {
    // Add event listener for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', initialize);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentScripts_DS_AddGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentScripts/DS/AddGrid */ "./src/ContentScripts/DS/AddGrid.js");
/* harmony import */ var _ContentScripts_DS_DsFindDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentScripts/DS/DsFindDictionary */ "./src/ContentScripts/DS/DsFindDictionary.js");
/* harmony import */ var _ContentScripts_DS_SitecoreDeveloperError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentScripts/DS/SitecoreDeveloperError */ "./src/ContentScripts/DS/SitecoreDeveloperError.js");
/* harmony import */ var _ContentScripts_Github_GitHubCreateBranch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentScripts/Github/GitHubCreateBranch */ "./src/ContentScripts/Github/GitHubCreateBranch.js");
/* harmony import */ var _SitecoreLayoutImprovements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SitecoreLayoutImprovements */ "./src/SitecoreLayoutImprovements.js");
/* harmony import */ var _ContentScripts_Jira_ShowCreateBranchLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContentScripts/Jira/ShowCreateBranchLink */ "./src/ContentScripts/Jira/ShowCreateBranchLink.js");






(0,_ContentScripts_DS_AddGrid__WEBPACK_IMPORTED_MODULE_0__.setupAddGrid)();
(0,_ContentScripts_DS_DsFindDictionary__WEBPACK_IMPORTED_MODULE_1__.setupDsFindDictionary)();
(0,_ContentScripts_Github_GitHubCreateBranch__WEBPACK_IMPORTED_MODULE_3__.setupGithubCreateBranch)();
(0,_SitecoreLayoutImprovements__WEBPACK_IMPORTED_MODULE_4__.setupSitecoreLayoutImprovements)();
(0,_ContentScripts_Jira_ShowCreateBranchLink__WEBPACK_IMPORTED_MODULE_5__.showCreateBranchLink)();
(0,_ContentScripts_DS_SitecoreDeveloperError__WEBPACK_IMPORTED_MODULE_2__.setupDsSitecoreDeveloperError)();
if (location.host.endsWith('danskespil.dk')) {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'F2') {
      // Do something when F2 is pressed
      alert('F2 was pressed');
      chrome.runtime.sendMessage({
        action: 'callMyFunction'
      }, function (response) {
        console.error('xxx CALLING MY FUNCTION xxx', response);
      });
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsRUFBOEU7TUFBQSxJQUF4RUMsR0FBRyxHQUFBRCxJQUFBLENBQUhDLEdBQUc7UUFBRUMsSUFBSSxHQUFBRixJQUFBLENBQUpFLElBQUk7UUFBRUMsSUFBSSxHQUFBSCxJQUFBLENBQUpHLElBQUk7UUFBRUMsSUFBSSxHQUFBSixJQUFBLENBQUpJLElBQUk7UUFBRUMsSUFBSSxHQUFBTCxJQUFBLENBQUpLLElBQUk7UUFBRUMsSUFBSSxHQUFBTixJQUFBLENBQUpNLElBQUk7UUFBRUMsSUFBSSxHQUFBUCxJQUFBLENBQUpPLElBQUk7UUFBRUMsSUFBSSxHQUFBUixJQUFBLENBQUpRLElBQUk7UUFBRUMsR0FBRyxHQUFBVCxJQUFBLENBQUhTLEdBQUc7UUFBRUMsYUFBYSxHQUFBVixJQUFBLENBQWJVLGFBQWE7TUFDakZULEdBQUcsR0FBR0EsR0FBRyxHQUFHQSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUU7TUFDMUJDLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7TUFDN0JDLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7TUFDN0JDLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7TUFDN0JDLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7TUFDN0JDLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7TUFDN0JDLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7TUFDN0JDLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7TUFFN0IsSUFBTUcsS0FBSyxHQUFHRCxhQUFhLENBQUNFLFFBQVEsQ0FBQyxPQUFPLENBQUM7TUFFN0MsSUFBTUMsTUFBTSxHQUFHSCxhQUFhLENBQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMs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Q0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkQ7QUFDa0I7QUFDYztBQUNOO0FBQ047QUFDRztBQUVsRnJVLHdFQUFZLENBQUMsQ0FBQztBQUNkNEUsMEZBQXFCLENBQUMsQ0FBQztBQUN2QnVILGtHQUF1QixDQUFDLENBQUM7QUFDekJzSSw0RkFBK0IsQ0FBQyxDQUFDO0FBQ2pDdkYsK0ZBQW9CLENBQUMsQ0FBQztBQUN0QnJLLHdHQUE2QixDQUFDLENBQUM7QUFFL0IsSUFBSTVFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7RUFDM0NqQyxRQUFRLENBQUNvQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVUMsS0FBSyxFQUFFO0lBQ3BELElBQUlBLEtBQUssQ0FBQ2MsR0FBRyxLQUFLLElBQUksRUFBRTtNQUN0QjtNQUNBc1QsS0FBSyxDQUFDLGdCQUFnQixDQUFDO01BRXZCNUIsTUFBTSxDQUFDNkIsT0FBTyxDQUFDQyxXQUFXLENBQUM7UUFBRUMsTUFBTSxFQUFFO01BQWlCLENBQUMsRUFBRSxVQUFVQyxRQUFRLEVBQUU7UUFDM0VDLE9BQU8sQ0FBQzlKLEtBQUssQ0FBQyw2QkFBNkIsRUFBRTZKLFFBQVEsQ0FBQztNQUN4RCxDQUFDLENBQUM7SUFDSjtFQUNGLENBQUMsQ0FBQztBQUNKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL0NvbnRlbnRTY3JpcHRzL0RTL0FkZEdyaWQuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9Db250ZW50U2NyaXB0cy9EUy9Ec0ZpbmREaWN0aW9uYXJ5LmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvQ29udGVudFNjcmlwdHMvRFMvU2l0ZWNvcmVEZXZlbG9wZXJFcnJvci5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL0NvbnRlbnRTY3JpcHRzL0dpdGh1Yi9HaXRIdWJDcmVhdGVCcmFuY2guanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9Db250ZW50U2NyaXB0cy9KaXJhL0ppcmEuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9Db250ZW50U2NyaXB0cy9KaXJhL1Nob3dDcmVhdGVCcmFuY2hMaW5rLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvTWFrZUJyYW5jaE5hbWUuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9TaXRlY29yZUxheW91dEltcHJvdmVtZW50cy5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUdyaWREZXNrdG9wRWxlbWVudCgpIHtcbiAgY29uc3QgZ3JpZERlc2t0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBncmlkRGVza3RvcC5pZCA9ICdncmlkRGVza3RvcCc7XG4gIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgY29uc3QgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQ3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCB0ZDEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQxMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkMTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gIHRyLmFwcGVuZENoaWxkKHRkMSk7XG4gIHRyLmFwcGVuZENoaWxkKHRkMik7XG4gIHRyLmFwcGVuZENoaWxkKHRkMyk7XG4gIHRyLmFwcGVuZENoaWxkKHRkNCk7XG4gIHRyLmFwcGVuZENoaWxkKHRkNSk7XG4gIHRyLmFwcGVuZENoaWxkKHRkNik7XG4gIHRyLmFwcGVuZENoaWxkKHRkNyk7XG4gIHRyLmFwcGVuZENoaWxkKHRkOCk7XG4gIHRyLmFwcGVuZENoaWxkKHRkOSk7XG4gIHRyLmFwcGVuZENoaWxkKHRkMTApO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDExKTtcbiAgdHIuYXBwZW5kQ2hpbGQodGQxMik7XG4gIHRyLmFwcGVuZENoaWxkKHRkMTMpO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDE0KTtcblxuICBncmlkRGVza3RvcC5hcHBlbmRDaGlsZCh0cik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ3JpZERlc2t0b3ApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkTW9iaWxlRWxlbWVudCgpIHtcbiAgY29uc3QgZ3JpZE1vYmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIGdyaWRNb2JpbGUuaWQgPSAnZ3JpZE1vYmlsZSc7XG4gIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgY29uc3QgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgdHIuYXBwZW5kQ2hpbGQodGQxKTtcbiAgdHIuYXBwZW5kQ2hpbGQodGQyKTtcbiAgdHIuYXBwZW5kQ2hpbGQodGQzKTtcbiAgZ3JpZE1vYmlsZS5hcHBlbmRDaGlsZCh0cik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ3JpZE1vYmlsZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWRTdHlsZUVsZW1lbnQoKSB7XG4gIGNvbnN0IGdyaWRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIGdyaWRTdHlsZS5pZCA9ICdncmlkU3R5bGUnO1xuICBncmlkU3R5bGUuaW5uZXJIVE1MID0gYFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAjZ3JpZE1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBpbnNldDogMDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIGJvZHkuc2hvdy1ncmlkICNncmlkTW9iaWxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuICBcbiAgI2dyaWRNb2JpbGUgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiB2YXIoLS1ncmlkLW1hcmdpbiwgMnJlbSk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMCwwLDAuNSk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgI2dyaWRNb2JpbGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgd2lkdGg6IHZhcigtLWdyaWQtbWFyZ2luLCAycmVtKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsMC41KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG4gICAgXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICNncmlkRGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICB0b3A6IC0ycHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogbWF4KHZhcigtLWdyaWQtbWluLXdpZHRoLCBjYWxjKDEwMjRweCAtIDIqdmFyKC0tZ3JpZC1tYXJnaW4sIDJyZW0pKSksIG1pbihjYWxjKDEwMHZ3IC0gMip2YXIoLS1ncmlkLW1hcmdpbiwgMnJlbSkpLCB2YXIoLS1ncmlkLW1heC13aWR0aCwgMTEycmVtKSkpO1xuICAgIGhlaWdodDogMTA1dmg7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDI1NSwwLDAsMC41KTtcbiAgfVxuICBcbiAgYm9keS5zaG93LWdyaWQgI2dyaWREZXNrdG9wIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuICBcbiAgI2dyaWREZXNrdG9wIHRkIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMTQpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAuNXB4IHJnYmEoMjU1LDAsMCwwLjUpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwwLjA1KTtcbiAgfVxuICBcbiAgI2dyaWREZXNrdG9wIHRkOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsMC4xNSk7XG4gIH1cbn1cbiAgICBgO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdyaWRTdHlsZSk7XG59XG5cbmNvbnN0IHRvZ2dsZUdyaWQgPSAoc2hvd0dyaWQpID0+IHtcbiAgbGV0IGdyaWREZXNrdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWREZXNrdG9wJyk7XG4gIGxldCBncmlkTW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWRNb2JpbGUnKTtcbiAgbGV0IGdyaWRTdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkU3R5bGUnKTtcblxuICBpZiAoIWdyaWREZXNrdG9wKSBjcmVhdGVHcmlkRGVza3RvcEVsZW1lbnQoKTtcbiAgaWYgKCFncmlkTW9iaWxlKSBjcmVhdGVHcmlkTW9iaWxlRWxlbWVudCgpO1xuICBpZiAoIWdyaWRTdHlsZSkgY3JlYXRlR3JpZFN0eWxlRWxlbWVudCgpO1xuXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1ncmlkJywgc2hvd0dyaWQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwQWRkR3JpZCgpIHtcbiAgaWYgKChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykgfHwgbG9jYXRpb24uaG9zdC5zdGFydHNXaXRoKCdsb2NhbGhvc3QnKSkgJiYgIWxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9zaXRlY29yZS8nKSkge1xuICAgIGxldCBzaG93R3JpZCA9IGZhbHNlO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdLZXlHJyAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNob3dHcmlkID0gIXNob3dHcmlkO1xuICAgICAgICB0b2dnbGVHcmlkKHNob3dHcmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3QgZmluZFRleHRJbkRpY3Rpb25hcmllcyA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoU3RyaW5nID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoc2VhcmNoU3RyaW5nPy5sZW5ndGggPiA0KSB7XG4gICAgbGV0IHJlc3VsdHMgPSB7fTtcblxuICAgIGNvbnN0IG91dHB1dCA9ICh7IGtleSwga2V5Miwga2V5Mywga2V5NCwga2V5NSwga2V5Niwga2V5Nywga2V5OCwgcmVzLCBkaWN0aW9uYXJ5S2V5IH0pID0+IHtcbiAgICAgIGtleSA9IGtleSA/IGtleSArICcvJyA6ICcnO1xuICAgICAga2V5MiA9IGtleTIgPyBrZXkyICsgJy8nIDogJyc7XG4gICAgICBrZXkzID0ga2V5MyA/IGtleTMgKyAnLycgOiAnJztcbiAgICAgIGtleTQgPSBrZXk0ID8ga2V5NCArICcvJyA6ICcnO1xuICAgICAga2V5NSA9IGtleTUgPyBrZXk1ICsgJy8nIDogJyc7XG4gICAgICBrZXk2ID0ga2V5NiA/IGtleTYgKyAnLycgOiAnJztcbiAgICAgIGtleTcgPSBrZXk3ID8ga2V5NyArICcvJyA6ICcnO1xuICAgICAga2V5OCA9IGtleTggPyBrZXk4ICsgJy8nIDogJyc7XG5cbiAgICAgIGNvbnN0IGlzRGxvID0gZGljdGlvbmFyeUtleS5pbmNsdWRlcygnLURMTy0nKTtcblxuICAgICAgY29uc3QgcmVnaW9uID0gZGljdGlvbmFyeUtleS5zcGxpdCgncGF0aD0vJylbMV0uc3BsaXQoJyYnKVswXSArICcvJztcblxuICAgICAgcmVzdWx0c1tyZWdpb24gKyBrZXkyICsga2V5MyArIGtleTQgKyBrZXk1ICsga2V5NiArIGtleTcgKyBrZXk4XSA9IHtcbiAgICAgICAgaXNEbG8sXG4gICAgICAgIHJlcyxcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGxldCBpbmRleEtleSA9IDA7XG4gICAgY29uc3QgZGljdGlvbmFyeUtleXMgPSBbXTtcblxuICAgIHdoaWxlIChsb2NhbFN0b3JhZ2Uua2V5KGluZGV4S2V5KSkge1xuICAgICAgY29uc3Qgc3RvcmFnZUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaW5kZXhLZXkpO1xuXG4gICAgICBpZiAoc3RvcmFnZUtleS5pbmNsdWRlcygnL2Rsby9zY2FwaS9jb21tb24vZGljdGlvbmFyeS9kaWN0aW9uYXJ5JykpIHtcbiAgICAgICAgZGljdGlvbmFyeUtleXMucHVzaChzdG9yYWdlS2V5KTtcbiAgICAgIH1cblxuICAgICAgaW5kZXhLZXkrKztcbiAgICB9XG5cbiAgICBkaWN0aW9uYXJ5S2V5cy5mb3JFYWNoKChkaWN0aW9uYXJ5S2V5KSA9PiB7XG4gICAgICBjb25zdCBzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkaWN0aW9uYXJ5S2V5KSk7XG5cbiAgICAgIGlmICh0eXBlb2YgcyAhPT0gJ29iamVjdCcpIHJldHVybjtcblxuICAgICAgT2JqZWN0LmtleXMocykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICghc1trZXldKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHNba2V5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgcmVzOiBzW2tleV0sXG4gICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhzW2tleV0pLmZvckVhY2goKGtleTIpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml0sXG4gICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdKS5mb3JFYWNoKChrZXkzKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXSxcbiAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdKS5mb3JFYWNoKChrZXk0KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdW2tleTRdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgIGtleTQsXG4gICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdLFxuICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdKS5mb3JFYWNoKChrZXk1KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgICBrZXk1LFxuICAgICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdLFxuICAgICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XSkuZm9yRWFjaCgoa2V5NikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XSkuZm9yRWFjaCgoa2V5NykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XSkuZm9yRWFjaCgoa2V5OCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddW2tleThdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XVtrZXk4XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XVtrZXk4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gW107XG4gICAgaWYgKE9iamVjdC5rZXlzKHJlc3VsdHMpLmxlbmd0aCA+IDE1MCkgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdXJsID0gZ2V0RGljdGlvbmFyeVVybChyZXN1bHRzW2tleV0uaXNEbG8pICsga2V5O1xuICAgICAgY29udGVudC5wdXNoKHsgdHh0OiByZXN1bHRzW2tleV0ucmVzLCB1cmwsIGtleSB9KTtcbiAgICB9KTtcblxuICAgIGZpbGxEaWN0aW9uYXJ5KGNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyRmlsbERpY3Rpb25hcnkoKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0RGljdGlvbmFyeVVybCA9IChpc0RsbykgPT4ge1xuICBjb25zdCBob3N0UGFydHMgPSBsb2NhdGlvbi5ob3N0LnNwbGl0KCcuJyk7XG4gIGNvbnN0IHByb3RvY29sID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nO1xuICBjb25zdCBpc1Rvd25FbnYgPSBob3N0UGFydHNbMF0uaW5jbHVkZXMoJ3Rvd24nKTtcbiAgY29uc3QgaXNEZXZFbnYgPSBob3N0UGFydHNbMF0uaW5jbHVkZXMoJ3dlYicpO1xuICBsZXQgZW52UGFydDtcblxuICBpZiAoaXNEZXZFbnYpIHtcbiAgICBlbnZQYXJ0ID0gYHdlYi4ke2hvc3RQYXJ0c1sxXX1gO1xuICB9IGVsc2UgaWYgKGlzVG93bkVudikge1xuICAgIGVudlBhcnQgPSBgJHtob3N0UGFydHNbMF19ZWRpdCR7aXNEbG8gPyAnZGxvJyA6ICdkbGknfWA7XG4gIH0gZWxzZSB7XG4gICAgZW52UGFydCA9IGBlZGl0JHtpc0RsbyA/ICdkbG8nIDogJ2RsaSd9YDtcbiAgfVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2VudlBhcnR9LmRhbnNrZXNwaWwuZGsvc2l0ZWNvcmUvc2hlbGwvQXBwbGljYXRpb25zL0NvbnRlbnQlMjBFZGl0b3IuYXNweD9zY19idz0xJmZvPS9zaXRlY29yZS9jb250ZW50L0RhbnNrZVNwaWwvU2l0ZSUyMHNldHRpbmdzL0RpY3Rpb25hcnkvYDtcbn07XG5cbmNvbnN0IGNsZWFyRmlsbERpY3Rpb25hcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHJlbW92ZUVsZW1lbnRCeUlkID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGVsKSBlbC5yZW1vdmUoKTtcbiAgfTtcblxuICByZW1vdmVFbGVtZW50QnlJZCgnZmluZFRleHRJbkRpY3Rpb25hcmllcycpO1xuICByZW1vdmVFbGVtZW50QnlJZCgnZmluZFRleHRJbkRpY3Rpb25hcmllc1N0eWxlJyk7XG59O1xuXG5jb25zdCBlbnN1cmVFbGVtZW50ID0gKGlkLCBjcmVhdGVFbGVtZW50KSA9PiB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaWYgKCFlbCkge1xuICAgIGVsID0gY3JlYXRlRWxlbWVudCgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG4gIHJldHVybiBlbDtcbn07XG5cbmNvbnN0IHNldFN0eWxlID0gKHN0eWxlLCBjc3MpID0+IHtcbiAgc3R5bGUuaW5uZXJUZXh0ID0gY3NzO1xufTtcblxuY29uc3QgZmlsbERpY3Rpb25hcnkgPSAoY29udGVudCkgPT4ge1xuICBjb25zdCBlbCA9IGVuc3VyZUVsZW1lbnQoJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMnLCAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMnO1xuICAgIHJldHVybiBkaXY7XG4gIH0pO1xuICBlbC5pbm5lclRleHQgPSAnJztcblxuICBjb25zdCBzdHlsZSA9IGVuc3VyZUVsZW1lbnQoJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXNTdHlsZScsICgpID0+IHtcbiAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsLmlkID0gJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXNTdHlsZSc7XG4gICAgcmV0dXJuIHN0eWxlRWw7XG4gIH0pO1xuXG4gIHNldFN0eWxlKFxuICAgIHN0eWxlLFxuICAgIGBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwMDAxO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAxMDB2aDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxM3B4IDFweCAjY2NjO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDk1dmg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5NXZ3O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllczo6YWZ0ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwMDAwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiJHtjb250ZW50Lmxlbmd0aH1cIjtcbiAgICAgICAgICB0b3A6IC0zNXB4O1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNiZGZmZTU7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXM6aG92ZXIge1xuICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMgYTpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzIHAge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllcyBhIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgYFxuICApO1xuXG4gIGNvbnRlbnQuZm9yRWFjaCgoeyB0eHQsIHVybCwga2V5IH0pID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcC5pbm5lclRleHQgPSB0eHQ7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIGEudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgYS50ZXh0ID0ga2V5O1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBEc0ZpbmREaWN0aW9uYXJ5KCkge1xuICBpZiAobG9jYXRpb24uaG9zdC5lbmRzV2l0aCgnZGFuc2tlc3BpbC5kaycpICYmICFsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvc2l0ZWNvcmUvJykpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmaW5kVGV4dEluRGljdGlvbmFyaWVzKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldHVwRHNTaXRlY29yZURldmVsb3BlckVycm9yKCkge1xuICBpZiAobG9jYXRpb24uaG9zdC5lbmRzV2l0aCgnZGFuc2tlc3BpbC5kaycpICYmICFsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvc2l0ZWNvcmUvJykpIHtcbiAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZWNvcmVEZXZlbG9wZXJFcnJvclN0eWxlJyk7XG5cbiAgICBpZiAoIXN0eWxlKSB7XG4gICAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5pZCA9ICdzaXRlY29yZURldmVsb3BlckVycm9yU3R5bGUnO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgLmFsZXJ0LmFsZXJ0LWVycm9yOmhhcyguZGV2ZWxvcGVyLWFsZXJ0KSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5YjU5YjY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1gO1xuICB9XG59XG4iLCJjb25zdCB3YWl0Rm9yRWxlbWVudCA9IGFzeW5jIChzZWxlY3RvcikgPT4ge1xuICB3aGlsZSAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKSk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwR2l0aHViQ3JlYXRlQnJhbmNoKCkge1xuICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2dpdGh1Yi5jb20nICYmIGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnP25ld0JyYW5jaD0nKSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcbiAgICBjb25zdCBuZXdCcmFuY2ggPSBwYXJhbXMuZ2V0KCduZXdCcmFuY2gnKTtcblxuICAgIGNvbnN0IGN0YSA9IGF3YWl0IHdhaXRGb3JFbGVtZW50KCdbYXBwLW5hbWU9XCJyZXBvcy1icmFuY2hlc1wiXSBidXR0b24nKTtcbiAgICBjdGE/LmNsaWNrKCk7XG4gICAgY29uc3QgaW5wdXQgPSBhd2FpdCB3YWl0Rm9yRWxlbWVudCgnW3JvbGU9ZGlhbG9nXVtkYXRhLWZvY3VzLXRyYXA9XCJhY3RpdmVcIl0gaW5wdXQnKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBTZXQgdGhlIHZhbHVlIGF0dHJpYnV0ZSBkaXJlY3RseVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmV3QnJhbmNoKTtcblxuICAgICAgICAvLyBEaXNwYXRjaCBldmVudHNcbiAgICAgICAgY29uc3QgZXZlbnRzVG9EaXNwYXRjaCA9IFsnaW5wdXQnLCAnY2hhbmdlJywgJ2tleXVwJ107XG4gICAgICAgIGV2ZW50c1RvRGlzcGF0Y2guZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnRUeXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ25ld0JyYW5jaCcpO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHdhaXRGb3JFbGVtZW50ID0gYXN5bmMgKHNlbGVjdG9yKSA9PiB7XG4gIHdoaWxlICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpKTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59O1xuXG5jb25zdCBnZXRUb29sYmFyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0b29sQmFyID0gYXdhaXQgd2FpdEZvckVsZW1lbnQoJy5hdWktdG9vbGJhcjItcHJpbWFyeScpO1xuICBsZXQgY3RhQ29udGFpbmVyID0gdG9vbEJhci5xdWVyeVNlbGVjdG9yKCcjZHNDaHJvbWVFeHRlbnNpb25KaXJhVG9vbGJhcicpO1xuXG4gIGlmICghY3RhQ29udGFpbmVyKSB7XG4gICAgY3RhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3RhQ29udGFpbmVyLmlkID0gJ2RzQ2hyb21lRXh0ZW5zaW9uSmlyYVRvb2xiYXInO1xuICAgIGN0YUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhdWktYnV0dG9ucycpO1xuICAgIHRvb2xCYXIuYXBwZW5kQ2hpbGQoY3RhQ29udGFpbmVyKTtcbiAgfVxuXG4gIHJldHVybiBjdGFDb250YWluZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYWdlQUppcmFUYXNrKCkge1xuICByZXR1cm4gbG9jYXRpb24uaG9zdC5pbmNsdWRlcygnamlyYS5kYW5za2VzcGlsLmRrJykgJiYgbG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2Jyb3dzZS8nKTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzSmlyYUlVID0gKCkgPT4gbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9JVS0nKTtcbmV4cG9ydCBjb25zdCBpc0ppcmFGT1IgPSAoKSA9PiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnL0ZPUi0nKTtcbmV4cG9ydCBjb25zdCBpc0ppcmFDVyA9ICgpID0+IGxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCcvQ1ctJyk7XG5leHBvcnQgY29uc3QgaXNKaXJhRExPQSA9ICgpID0+IGxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCcvRExPQS0nKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNUQUluVG9vbGJhciA9IGFzeW5jIChsYWJlbCwgZm4pID0+IHtcbiAgY29uc3QgdG9vbEJhciA9IGF3YWl0IGdldFRvb2xiYXIoKTtcbiAgY29uc3QgY3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjdGEuY2xhc3NMaXN0LmFkZCgnYXVpLWJ1dHRvbicpO1xuICBjdGEuaW5uZXJUZXh0ID0gbGFiZWw7XG4gIGN0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZuKTtcbiAgdG9vbEJhci5hcHBlbmRDaGlsZChjdGEpO1xufTtcbiIsImltcG9ydCBtYWtlQnJhbmNoTmFtZSBmcm9tICcuLi8uLi9NYWtlQnJhbmNoTmFtZSc7XG5pbXBvcnQgeyBpc1BhZ2VBSmlyYVRhc2ssIGlzSmlyYUlVLCBpc0ppcmFGT1IsIGNyZWF0ZUNUQUluVG9vbGJhciwgaXNKaXJhQ1csIGlzSmlyYURMT0EgfSBmcm9tICcuL0ppcmEnO1xuXG5jb25zdCBjcmVhdGVDVEEgPSAocmVwbykgPT4ge1xuICBjb25zdCBicmFuY2hOYW1lID0gbWFrZUJyYW5jaE5hbWUoKTtcbiAgaWYgKCFicmFuY2hOYW1lKSByZXR1cm47XG5cbiAgY3JlYXRlQ1RBSW5Ub29sYmFyKCdDcmVhdGUgQnJhbmNoJywgKCkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKGBodHRwczovL2dpdGh1Yi5jb20vZHMtaXR1LWZyb250ZW5kLXNlcnZpY2UvJHtyZXBvfS9icmFuY2hlcz9uZXdCcmFuY2g9JHticmFuY2hOYW1lfWApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q3JlYXRlQnJhbmNoTGluaygpIHtcbiAgaWYgKGlzUGFnZUFKaXJhVGFzaygpICYmIChpc0ppcmFJVSgpIHx8IGlzSmlyYUZPUigpIHx8IGlzSmlyYUNXKCkgfHwgaXNKaXJhRExPQSgpKSkge1xuICAgIGNvbnN0IGlzVGl2b2xpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWZpZWxkXzEzMTAxLXZhbCcpPy5pbm5lclRleHQudG9Mb3dlckNhc2UoKSA9PT0gJ3Rpdm9saScgfHwgZmFsc2U7XG5cbiAgICBjb25zdCBpc0RESyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYWJlbHMtMTYyOTc4LXZhbHVlJyk/LmlubmVyVGV4dC5pbmNsdWRlcygnRERLJykgfHwgZmFsc2U7XG4gICAgXG4gICAgaWYgKGlzRERLKSB7XG4gICAgICBjcmVhdGVDVEEoJ2tsYXNzZWxvdHRlcmlldC13ZWJzaXRlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlcG8gPSBpc1Rpdm9saSA/ICd0aXZvbGljYXNpbm8td2Vic2l0ZScgOiAnZGFuc2tlc3BpbC13ZWJzaXRlJztcblxuICAgIGNyZWF0ZUNUQShyZXBvKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gbWFrZUJyYW5jaE5hbWUoKSB7XG4gIGxldCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzc3VlZGV0YWlscyAjdHlwZS12YWwnKTtcbiAgbGV0IGlzc3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlzc3VlLWxpbmsnKTtcbiAgbGV0IHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VtbWFyeS12YWwnKTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdoeC1jb2x1bW5zIC5naHgtaXNzdWUuZ2h4LXNlbGVjdGVkJykpIHtcbiAgICB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdoeC1pc3N1ZS5naHgtc2VsZWN0ZWQgLmdoeC10eXBlJyk7XG4gICAgaXNzdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWlzc3VlLmdoeC1zZWxlY3RlZCAuZ2h4LWtleScpO1xuICAgIHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWlzc3VlLmdoeC1zZWxlY3RlZCAuZ2h4LXN1bW1hcnknKTtcbiAgfVxuXG4gIGlmICghKHR5cGUgJiYgaXNzdWUgJiYgc3VtbWFyeSkpIHJldHVybjtcblxuICB0eXBlID0gdHlwZS5pbm5lclRleHQgfHwgdHlwZS50aXRsZTtcbiAgdHlwZSA9IHR5cGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIHR5cGUgPSB0eXBlLnJlcGxhY2UoL3N0b3J5LywgJ2ZlYXR1cmUnKTtcbiAgdHlwZSA9IHR5cGUucmVwbGFjZSgvZXBpYy8sICdmZWF0dXJlJyk7XG5cbiAgaWYgKHR5cGUgPT09ICdidWcnKSB0eXBlID0gJ2J1Z2ZpeCc7XG5cbiAgaXNzdWUgPSBpc3N1ZS5pbm5lclRleHQudHJpbSgpO1xuXG4gIHN1bW1hcnkgPSBzdW1tYXJ5LmlubmVyVGV4dFxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1teYS16IF0vZywgJy0nKVxuICAgIC5yZXBsYWNlKC8gL2csICctJylcbiAgICAucmVwbGFjZSgvLS0rL2csICctJyk7XG4gIFxuICAvLyByZXBsYWNlIGxlYWRpbmcgZGFzaFxuICBzdW1tYXJ5ID0gc3VtbWFyeS5yZXBsYWNlKC9eLS8sICcnKTtcblxuICByZXR1cm4gYCR7dHlwZX0vJHtpc3N1ZX0tJHtzdW1tYXJ5fWAuc2xpY2UoMCwgNTApLnJlcGxhY2UoLy0kLywgJycpO1xufVxuXG4vLyBBZGQgdG8gd2luZG93LCBhcyBpdCdzIHVzZWQgaW4gSmlyYU1ha2VCUmFuY2hOYW1lLmpzLlxud2luZG93Lm1ha2VCcmFuY2hOYW1lID0gbWFrZUJyYW5jaE5hbWU7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VCcmFuY2hOYW1lO1xuIiwibGV0IHByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkID0gJyc7XG5sZXQgc2hvd0Zhdm9yaXRlc1BvcHVwID0gZmFsc2U7XG5sZXQgZGVmYXVsdFRleHRBcmVhSGVpZ2h0ID0gJzUwMHB4Oyc7XG5cbmNvbnN0IGFkZFVybFRvVHJlZUxpc3RJZHMgPSAoKSA9PiB7XG4gIGNvbnN0IHRyZWVMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY0NvbnRlbnRDb250cm9sU2VsZWN0ZWRMaXN0Jyk7XG5cbiAgdHJlZUxpc3RzLmZvckVhY2goKHRyZWVMaXN0KSA9PiB7XG4gICAgaWYgKHRyZWVMaXN0LmNsYXNzTGlzdC5jb250YWlucygnQ2hyb21lRXh0ZW5zaW9uQWRkVXJsVG9UcmVlTGlzdElkcycpKSByZXR1cm47XG5cbiAgICBjb25zdCBvcHRpb25zID0gdHJlZUxpc3QucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0IG9wdGlvbicpO1xuICAgIGNvbnN0IGhlbHAgPSB0cmVlTGlzdC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRDb250cm9sVHJlZUxpc3RIZWxwJyk7XG5cbiAgICBpZiAoIWhlbHAgfHwgb3B0aW9ucy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHRyZWVMaXN0LmNsYXNzTGlzdC5hZGQoJ0Nocm9tZUV4dGVuc2lvbkFkZFVybFRvVHJlZUxpc3RJZHMnKTtcblxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IG9wdGlvbi52YWx1ZT8uc3BsaXQoJ3wnKT8uWzFdO1xuICAgICAgaWYgKCFpZCkgcmV0dXJuO1xuXG4gICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdmbycsIGlkKTtcbiAgICAgICAgaWYgKGhlbHAuaW5uZXJIVE1MLmluY2x1ZGVzKGlkKSkgcmV0dXJuO1xuXG4gICAgICAgIGhlbHAuaW5uZXJIVE1MID0gYCR7aGVscC5pbm5lckhUTUx9IDxhIGhyZWY9XCIke3VybC5ocmVmfVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHg7XCI+JHtpZH08L2E+YDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHN0cmV0Y2hDb2x1bW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbHVtbldpZHRoID0gNDAwO1xuICBkb2N1bWVudC5jb29raWUgPSBgc2NDb250ZW50RWRpdG9yRm9sZGVyc1dpZHRoPSR7Y29sdW1uV2lkdGh9OyBleHBpcmVzPVRodSwgMzEgRGVjIDIxMDAgMTI6MDA6MDAgVVRDOyBwYXRoPS9gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ29udGVudFRyZWVQYW5lbCcpLnN0eWxlLndpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BsaXR0ZXItYmFyLXZlcnRpY2FsJykuc3R5bGUubGVmdCA9IGAke2NvbHVtbldpZHRofXB4YDtcbiAgY29uc3QgZWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0NvbnRlbnRFZGl0b3InKTtcbiAgZWRpdG9yLnN0eWxlLndpZHRoID0gcGFyc2VJbnQoZWRpdG9yLnN0eWxlLndpZHRoKSAtIGNvbHVtbldpZHRoICsgcGFyc2VJbnQoZWRpdG9yLnN0eWxlLmxlZnQpICsgJ3B4JztcbiAgZWRpdG9yLnN0eWxlLmxlZnQgPSBgJHtjb2x1bW5XaWR0aH1weGA7XG59O1xuXG5jb25zdCBzY3JvbGxUb0l0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY0NvbnRlbnRUcmVlTm9kZUFjdGl2ZScpWzBdO1xuICBjb25zdCB0b2dnbGVBcnJvdyA9IHNlbGVjdGVkSXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICB0b2dnbGVBcnJvdyAmJiB0b2dnbGVBcnJvdy5jbGljaygpO1xuICBzZWxlY3RlZEl0ZW0gJiYgc2VsZWN0ZWRJdGVtLnBhcmVudEVsZW1lbnQgJiYgc2VsZWN0ZWRJdGVtLnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbn07XG5cbmNvbnN0IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRUcmVlTm9kZUFjdGl2ZSBzcGFuJykuaW5uZXJUZXh0O1xufTtcblxuY29uc3QgZ2V0QWN0aXZlVHJlZU5vZGVQYXRoID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjRWRpdG9yUXVpY2tJbmZvIHRyOm50aC1jaGlsZCgzKSAuc2NFZGl0b3JIZWFkZXJRdWlja0luZm9JbnB1dCcpLnZhbHVlO1xufTtcblxuY29uc3QgYWRkQm9va21hcmsgPSAoKSA9PiB7XG4gIGNvbnN0IHNpdGVjb3JlVGV4dCA9IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCgpO1xuICBpZiAoc2l0ZWNvcmVUZXh0ID09PSBwcmV2aW91c1NlbGVjdGVkU2l0ZWNvcmVJZCkgcmV0dXJuO1xuICBwcmV2aW91c1NlbGVjdGVkU2l0ZWNvcmVJZCA9IHNpdGVjb3JlVGV4dDtcblxuICBsZXQgYm9va21hcmtMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2ttYXJrTGluaycpO1xuICBsZXQgYm9va21hcmtTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rbWFya1N0eWxlJyk7XG5cbiAgaWYgKCFib29rbWFya0xpbmspIHtcbiAgICBib29rbWFya0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYm9va21hcmtMaW5rLmlkID0gJ2Jvb2ttYXJrTGluayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGJvb2ttYXJrTGluayk7XG4gICAgYm9va21hcmtTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYm9va21hcmtTdHlsZS5pZCA9ICdib29rbWFya1N0eWxlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoYm9va21hcmtTdHlsZSk7XG4gIH1cblxuICBib29rbWFya0xpbmsuaHJlZiA9IGBqYXZhc2NyaXB0OndpbmRvdy5sb2NhdGlvbi5ocmVmPXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4rJy9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCBFZGl0b3IuYXNweD9zY19idz0xJmZvPSR7Z2V0QWN0aXZlVHJlZU5vZGVQYXRoKCl9J2A7XG4gIGJvb2ttYXJrTGluay5pbm5lckhUTUwgPSBzaXRlY29yZVRleHQ7XG5cbiAgYm9va21hcmtTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAjYm9va21hcmtMaW5rIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgei1pbmRleDogMTAwMDAwMDtcbiAgICAgICAgICB0b3A6IDExcHg7XG4gICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnT3BlbiBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHggMCA3cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDBweCAxcHggIzU4NTg1ODtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgfVxuICAgIGA7XG59O1xuXG5jb25zdCBpbmNyZWFzZUhlaWdodE9uVHJlZUxpc3RzID0gKCkgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NFZGl0b3JTZWN0aW9uUGFuZWxDZWxsIC5zY0NvbnRlbnRDb250cm9sLnNjQ29udGVudENvbnRyb2xUcmVlbGlzdCcpXG4gICAgLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA9PT0gMjIwKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzQwMHB4JztcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmNvbnN0IGZpeElucHV0Q2VsbFRleHRBcmVhID0gKCkgPT4ge1xuICBjb25zdCB0eHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjRWRpdG9yRmllbGRNYXJrZXJJbnB1dENlbGwgdGV4dGFyZWEnKTtcbiAgaWYgKHR4dHMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZml4SW5wdXRDZWxsVGV4dEFyZWEnKSkge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pZCA9ICdmaXhJbnB1dENlbGxUZXh0QXJlYSc7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgLm1vbm9zcGFjZS1mb250IHtmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgXCJBbmRhbGUgTW9ub1wiLCBcIlVidW50dSBNb25vXCIsIG1vbm9zcGFjZTt9XG4gICAgYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgdHh0cy5mb3JFYWNoKCh0eHQpID0+IHtcbiAgICBpZiAodHh0LmNsYXNzTGlzdC5jb250YWlucygnbW9ub3NwYWNlLWZvbnQnKSkgcmV0dXJuO1xuXG4gICAgdHh0LmNsYXNzTGlzdC5hZGQoJ21vbm9zcGFjZS1mb250Jyk7XG4gICAgdHh0LnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsIGZhbHNlKTtcblxuICAgIHR4dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gJzgwMHB4JztcbiAgICAgIHRoaXMuc3R5bGUuZm9udFNpemUgPSAnMTNweCc7XG4gICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSAnMS40NSc7XG4gICAgfSk7XG5cbiAgICB0eHQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3R5bGUgPSBgaGVpZ2h0OiAke2RlZmF1bHRUZXh0QXJlYUhlaWdodH1gOyAvLyBGcm9tIGVubGFyZ2VUcmVlbGlzdCgpIGZ1bmN0aW9uIGJlbG93LlxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGVubGFyZ2VUcmVlbGlzdCA9ICgpID0+IHtcbiAgY29uc3QgZGF0YVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWQqPVwiU2VjdGlvbl9EYXRhXCJdJyk7XG4gIGlmICghZGF0YVNlY3Rpb24pIHJldHVybjtcbiAgbGV0IGRhdGFUcmVlbGlzdCA9IGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9XCJTZWN0aW9uX0RhdGFcIl0nKVxuICAgIC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRDb250cm9sVHJlZWxpc3QnKTtcbiAgaWYgKCFkYXRhVHJlZWxpc3QpIHJldHVybjtcbiAgZGF0YVRyZWVsaXN0LnN0eWxlID0gYGhlaWdodDogJHtkZWZhdWx0VGV4dEFyZWFIZWlnaHR9YDtcbn07XG5cbmNvbnN0IGdldEZhdm9yaXRlSXRlbUxhYmVsID0gKGZhdm9yaXRlKSA9PiB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmlubmVyVGV4dCA9IGZhdm9yaXRlLmxhYmVsO1xuICByZXR1cm4gc3Bhbjtcbn07XG5cbmNvbnN0IGdldEZhdm9yaXRlSXRlbVBhcmVudFRleHQgPSAoZmF2b3JpdGUpID0+IHtcbiAgbGV0IHBhdGggPSBmYXZvcml0ZS5wYXRoLnNwbGl0KCcvJyk7XG4gIHBhdGgucG9wKCk7XG4gIHBhdGggPSBwYXRoLmpvaW4oJy8nKTtcbiAgcGF0aCA9IGAke3BhdGh9LyBgO1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi5jbGFzc05hbWUgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1QYXJlbnQnO1xuICBzcGFuLmlubmVyVGV4dCA9IHBhdGg7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgYWRkRmF2b3JpdGVzID0gKCkgPT4ge1xuICBsZXQgZmF2b3JpdGVzU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNTdHlsZScpO1xuXG4gIGlmICghZmF2b3JpdGVzU3R5bGUpIHtcbiAgICBmYXZvcml0ZXNTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZmF2b3JpdGVzU3R5bGUuaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNTdHlsZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGZhdm9yaXRlc1N0eWxlKTtcbiAgICBmYXZvcml0ZXNTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAuc2MtZ2xvYmFsSGVhZGVyIHtcbiAgICAgICAgei1pbmRleDogMTAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICAjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgICNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyYjJiMmI7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4IDZweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0gc3Bhbi5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbVJlbW92ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbSBzcGFuLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtUmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkOyBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtIHNwYW4uQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1QYXJlbnQge1xuICAgICAgICBjb2xvcjogIzk2OTY5NjtcbiAgICAgIH1cbiAgICBcbiAgICAgICNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwQWRkRmF2b3JpdGUge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9YDtcbiAgfVxuXG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdmYXZvcml0ZXMnLCAoeyBmYXZvcml0ZXMgfSkgPT4ge1xuICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcyB8fCBbXTtcbiAgICBpZiAoZmF2b3JpdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcy5zb3J0KChhLCBiKSA9PiAoYS5wYXRoID4gYi5wYXRoID8gMSA6IC0xKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy1hY2NvdW50SW5mb3JtYXRpb24nKTtcbiAgICBsZXQgZmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzJyk7XG4gICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXAnKTtcblxuICAgIGlmICghZmF2KSB7XG4gICAgICBmYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgZmF2LmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzJztcbiAgICAgIGZhdi5pbm5lclRleHQgPSAnRmF2b3JpdGVzJztcbiAgICAgIGFjY0luZm8uaW5zZXJ0QmVmb3JlKGZhdiwgYWNjSW5mby5maXJzdENoaWxkKTtcbiAgICAgIGZhdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd0Zhdm9yaXRlc1BvcHVwID0gIXNob3dGYXZvcml0ZXNQb3B1cDtcbiAgICAgICAgYWRkRmF2b3JpdGVzKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXNob3dGYXZvcml0ZXNQb3B1cCAmJiBwb3B1cCkge1xuICAgICAgZmF2LnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgICB9XG5cbiAgICBpZiAoc2hvd0Zhdm9yaXRlc1BvcHVwKSB7XG4gICAgICBpZiAoIXBvcHVwKSB7XG4gICAgICAgIHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcHVwLmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXAnO1xuICAgICAgICBmYXYuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgICAgfVxuXG4gICAgICBmYXZvcml0ZXMuZm9yRWFjaCgoZmF2b3JpdGUpID0+IHtcbiAgICAgICAgbGV0IGYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW09XCIke2Zhdm9yaXRlLnBhdGh9XCJdYCk7XG5cbiAgICAgICAgaWYgKCFmKSB7XG4gICAgICAgICAgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGYuY2xhc3NOYW1lID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtJztcbiAgICAgICAgICBmLnNldEF0dHJpYnV0ZSgnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0nLCBmYXZvcml0ZS5wYXRoKTtcblxuICAgICAgICAgIGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2xvY2F0aW9uLm9yaWdpbn0ke2xvY2F0aW9uLnBhdGhuYW1lfT9zY19idz0xJmZvPSR7ZmF2b3JpdGUucGF0aH1gO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZi5hcHBlbmRDaGlsZChnZXRGYXZvcml0ZUl0ZW1QYXJlbnRUZXh0KGZhdm9yaXRlKSk7XG4gICAgICAgICAgZi5hcHBlbmRDaGlsZChnZXRGYXZvcml0ZUl0ZW1MYWJlbChmYXZvcml0ZSkpO1xuXG4gICAgICAgICAgbGV0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICByZW1vdmUuY2xhc3NOYW1lID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtUmVtb3ZlJztcbiAgICAgICAgICByZW1vdmUuaW5uZXJUZXh0ID0gJ3gnO1xuICAgICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcy5maWx0ZXIoKGYpID0+IGYgIT09IGZhdm9yaXRlKTtcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgZmF2b3JpdGVzIH0pO1xuICAgICAgICAgICAgcG9wdXAucmVtb3ZlQ2hpbGQoZik7XG4gICAgICAgICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGYuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChmKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBpc0l0ZW1Jbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtID0gXCIke2dldEFjdGl2ZVRyZWVOb2RlUGF0aCgpfVwiXWBcbiAgICAgICk7XG4gICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBBZGRGYXZvcml0ZScpO1xuXG4gICAgICBpZiAoYWRkQnV0dG9uKSBwb3B1cC5yZW1vdmVDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgICBpZiAoIWlzSXRlbUluTWVudSkge1xuICAgICAgICBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkQnV0dG9uLmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBBZGRGYXZvcml0ZSc7XG4gICAgICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBgQWRkICR7Z2V0QWN0aXZlVHJlZU5vZGVUZXh0KCl9ID8gYDtcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgZmF2b3JpdGVzLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCgpLFxuICAgICAgICAgICAgcGF0aDogZ2V0QWN0aXZlVHJlZU5vZGVQYXRoKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBmYXZvcml0ZXMgfSk7XG4gICAgICAgICAgYWRkRmF2b3JpdGVzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFkZEltYWdlRGlyZWN0VXJsID0gKCkgPT4ge1xuICBsZXQgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFZGl0b3JGcmFtZXMnKT8ucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gIGxldCBpc1Zpc2libGUgPSBpdGVtPy5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gIGNvbnN0IHRhYmxlID0gaXRlbT8ucXVlcnlTZWxlY3RvcigndGFibGUuc2NFZGl0b3JRdWlja0luZm8gdGJvZHknKTtcblxuICBpZiAoaXRlbT8uaWQgJiYgaXNWaXNpYmxlICYmIHRhYmxlICYmICF0YWJsZS5xdWVyeVNlbGVjdG9yKCcjc2NUb29sTWVkaWFQYXRoJykpIHtcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgdHIuaWQgPSAnc2NUb29sTWVkaWFQYXRoJztcbiAgICBjb25zdCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgJ2phdmFzY3JpcHQ6dGhpcy5zZWxlY3QoKTtyZXR1cm4gZmFsc2UnKTtcbiAgICBpbnB1dC52YWx1ZSA9ICctL21lZGlhLycgKyBpdGVtLmlkLnJlcGxhY2UoJ0ZDb250ZW50JywgJycpICsgJy5hc2h4JztcblxuICAgIHRkMS5pbm5lclRleHQgPSAnUmVsYXRpdiBzdGk6JztcbiAgICB0ZDIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkMSk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XG4gIH1cbn07XG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gIGlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykpIHtcbiAgICBpZiAoISFkZWNvZGVVUklDb21wb25lbnQobG9jYXRpb24ucGF0aG5hbWUpLm1hdGNoKC9cXC9zaXRlY29yZVxcL3NoZWxsXFwvYXBwbGljYXRpb25zXFwvY29udGVudFstIF1lZGl0b3JcXC5hc3B4L2kpKSB7XG4gICAgICBzdHJldGNoQ29sdW1uKCk7XG4gICAgICBzY3JvbGxUb0l0ZW0oKTtcbiAgICAgIGFkZEJvb2ttYXJrKCk7XG4gICAgICBzZXRJbnRlcnZhbChhZGRVcmxUb1RyZWVMaXN0SWRzLCA1MDApO1xuICAgICAgc2V0SW50ZXJ2YWwoaW5jcmVhc2VIZWlnaHRPblRyZWVMaXN0cywgNTAwKTtcbiAgICAgIHNldEludGVydmFsKGZpeElucHV0Q2VsbFRleHRBcmVhLCA1MDApO1xuICAgICAgc2V0SW50ZXJ2YWwoYWRkQm9va21hcmssIDUwMCk7XG5cbiAgICAgIHNldEludGVydmFsKGVubGFyZ2VUcmVlbGlzdCwgNTAwKTtcblxuICAgICAgYWRkRmF2b3JpdGVzKCk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldFRpbWVvdXQoYWRkRmF2b3JpdGVzLCA1MDApKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhIWRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5wYXRobmFtZSkubWF0Y2goXG4gICAgICAgIC9cXC9zaXRlY29yZVxcL3NoZWxsXFwvYXBwbGljYXRpb25zXFwvY29udGVudFstIF1tYW5hZ2VyXFwvZGVmYXVsdFxcLmFzcHgvaVxuICAgICAgKVxuICAgICkge1xuICAgICAgc2V0SW50ZXJ2YWwoYWRkSW1hZ2VEaXJlY3RVcmwsIDUwMCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTaXRlY29yZUxheW91dEltcHJvdmVtZW50cygpIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgIC8vIERvY3VtZW50IGlzIGFscmVhZHkgcmVhZHkgdG8gZ28sIHJ1biB5b3VyIGNvZGVcbiAgICBpbml0aWFsaXplKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBET01Db250ZW50TG9hZGVkXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNldHVwQWRkR3JpZCB9IGZyb20gJy4vQ29udGVudFNjcmlwdHMvRFMvQWRkR3JpZCc7XG5pbXBvcnQgeyBzZXR1cERzRmluZERpY3Rpb25hcnkgfSBmcm9tICcuL0NvbnRlbnRTY3JpcHRzL0RTL0RzRmluZERpY3Rpb25hcnknO1xuaW1wb3J0IHsgc2V0dXBEc1NpdGVjb3JlRGV2ZWxvcGVyRXJyb3IgfSBmcm9tICcuL0NvbnRlbnRTY3JpcHRzL0RTL1NpdGVjb3JlRGV2ZWxvcGVyRXJyb3InO1xuaW1wb3J0IHsgc2V0dXBHaXRodWJDcmVhdGVCcmFuY2ggfSBmcm9tICcuL0NvbnRlbnRTY3JpcHRzL0dpdGh1Yi9HaXRIdWJDcmVhdGVCcmFuY2gnO1xuaW1wb3J0IHsgc2V0dXBTaXRlY29yZUxheW91dEltcHJvdmVtZW50cyB9IGZyb20gJy4vU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMnO1xuaW1wb3J0IHsgc2hvd0NyZWF0ZUJyYW5jaExpbmsgfSBmcm9tICcuL0NvbnRlbnRTY3JpcHRzL0ppcmEvU2hvd0NyZWF0ZUJyYW5jaExpbmsnO1xuXG5zZXR1cEFkZEdyaWQoKTtcbnNldHVwRHNGaW5kRGljdGlvbmFyeSgpO1xuc2V0dXBHaXRodWJDcmVhdGVCcmFuY2goKTtcbnNldHVwU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMoKTtcbnNob3dDcmVhdGVCcmFuY2hMaW5rKCk7XG5zZXR1cERzU2l0ZWNvcmVEZXZlbG9wZXJFcnJvcigpO1xuXG5pZiAobG9jYXRpb24uaG9zdC5lbmRzV2l0aCgnZGFuc2tlc3BpbC5kaycpKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRjInKSB7XG4gICAgICAvLyBEbyBzb21ldGhpbmcgd2hlbiBGMiBpcyBwcmVzc2VkXG4gICAgICBhbGVydCgnRjIgd2FzIHByZXNzZWQnKTtcblxuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdjYWxsTXlGdW5jdGlvbicgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3h4eCBDQUxMSU5HIE1ZIEZVTkNUSU9OIHh4eCcsIHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlR3JpZERlc2t0b3BFbGVtZW50IiwiZ3JpZERlc2t0b3AiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInRyIiwidGQxIiwidGQyIiwidGQzIiwidGQ0IiwidGQ1IiwidGQ2IiwidGQ3IiwidGQ4IiwidGQ5IiwidGQxMCIsInRkMTEiLCJ0ZDEyIiwidGQxMyIsInRkMTQiLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJjcmVhdGVHcmlkTW9iaWxlRWxlbWVudCIsImdyaWRNb2JpbGUiLCJjcmVhdGVHcmlkU3R5bGVFbGVtZW50IiwiZ3JpZFN0eWxlIiwiaW5uZXJIVE1MIiwidG9nZ2xlR3JpZCIsInNob3dHcmlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzZXR1cEFkZEdyaWQiLCJsb2NhdGlvbiIsImhvc3QiLCJlbmRzV2l0aCIsInN0YXJ0c1dpdGgiLCJwYXRobmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJjdHJsS2V5IiwicHJldmVudERlZmF1bHQiLCJmaW5kVGV4dEluRGljdGlvbmFyaWVzIiwic2VhcmNoU3RyaW5nIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsInJlc3VsdHMiLCJvdXRwdXQiLCJfcmVmIiwia2V5Iiwia2V5MiIsImtleTMiLCJrZXk0Iiwia2V5NSIsImtleTYiLCJrZXk3Iiwia2V5OCIsInJlcyIsImRpY3Rpb25hcnlLZXkiLCJpc0RsbyIsImluY2x1ZGVzIiwicmVnaW9uIiwic3BsaXQiLCJpbmRleEtleSIsImRpY3Rpb25hcnlLZXlzIiwibG9jYWxTdG9yYWdlIiwic3RvcmFnZUtleSIsInB1c2giLCJmb3JFYWNoIiwicyIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJfdHlwZW9mIiwiT2JqZWN0Iiwia2V5cyIsImNvbnRlbnQiLCJ1cmwiLCJnZXREaWN0aW9uYXJ5VXJsIiwidHh0IiwiZmlsbERpY3Rpb25hcnkiLCJjbGVhckZpbGxEaWN0aW9uYXJ5IiwiaG9zdFBhcnRzIiwicHJvdG9jb2wiLCJpc1Rvd25FbnYiLCJpc0RldkVudiIsImVudlBhcnQiLCJjb25jYXQiLCJyZW1vdmVFbGVtZW50QnlJZCIsImVsIiwicmVtb3ZlIiwiZW5zdXJlRWxlbWVudCIsInNldFN0eWxlIiwic3R5bGUiLCJjc3MiLCJpbm5lclRleHQiLCJkaXYiLCJzdHlsZUVsIiwiX3JlZjIiLCJwIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJ0ZXh0Iiwic2V0dXBEc0ZpbmREaWN0aW9uYXJ5Iiwic2V0dXBEc1NpdGVjb3JlRGV2ZWxvcGVyRXJyb3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwid2FpdEZvckVsZW1lbnQiLCJfY2FsbGVlIiwic2VsZWN0b3IiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicXVlcnlTZWxlY3RvciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl94Iiwic2V0dXBHaXRodWJDcmVhdGVCcmFuY2giLCJfc2V0dXBHaXRodWJDcmVhdGVCcmFuY2giLCJfY2FsbGVlMiIsInBhcmFtcyIsIm5ld0JyYW5jaCIsImN0YSIsImlucHV0IiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic2VhcmNoIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwiY2xpY2siLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwiZXZlbnRzVG9EaXNwYXRjaCIsImV2ZW50VHlwZSIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50IiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImdldFRvb2xiYXIiLCJ0b29sQmFyIiwiY3RhQ29udGFpbmVyIiwiYWRkIiwiaXNQYWdlQUppcmFUYXNrIiwiaXNKaXJhSVUiLCJpc0ppcmFGT1IiLCJpc0ppcmFDVyIsImlzSmlyYURMT0EiLCJjcmVhdGVDVEFJblRvb2xiYXIiLCJfcmVmMyIsIl9jYWxsZWUzIiwibGFiZWwiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfeDIiLCJfeDMiLCJtYWtlQnJhbmNoTmFtZSIsImNyZWF0ZUNUQSIsInJlcG8iLCJicmFuY2hOYW1lIiwib3BlbiIsInNob3dDcmVhdGVCcmFuY2hMaW5rIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCMiIsImlzVGl2b2xpIiwiaXNEREsiLCJpc3N1ZSIsInN1bW1hcnkiLCJ0aXRsZSIsInRyaW0iLCJyZXBsYWNlIiwicHJldmlvdXNTZWxlY3RlZFNpdGVjb3JlSWQiLCJzaG93RmF2b3JpdGVzUG9wdXAiLCJkZWZhdWx0VGV4dEFyZWFIZWlnaHQiLCJhZGRVcmxUb1RyZWVMaXN0SWRzIiwidHJlZUxpc3RzIiwicXVlcnlTZWxlY3RvckFsbCIsInRyZWVMaXN0IiwiY29udGFpbnMiLCJvcHRpb25zIiwiaGVscCIsInBhcmVudEVsZW1lbnQiLCJvcHRpb24iLCJfb3B0aW9uJHZhbHVlIiwic2V0Iiwic3RyZXRjaENvbHVtbiIsImNvbHVtbldpZHRoIiwiY29va2llIiwid2lkdGgiLCJsZWZ0IiwiZWRpdG9yIiwicGFyc2VJbnQiLCJzY3JvbGxUb0l0ZW0iLCJzZWxlY3RlZEl0ZW0iLCJ0b2dnbGVBcnJvdyIsInNjcm9sbEludG9WaWV3IiwiZ2V0QWN0aXZlVHJlZU5vZGVUZXh0IiwiZ2V0QWN0aXZlVHJlZU5vZGVQYXRoIiwiYWRkQm9va21hcmsiLCJzaXRlY29yZVRleHQiLCJib29rbWFya0xpbmsiLCJib29rbWFya1N0eWxlIiwiaW5jcmVhc2VIZWlnaHRPblRyZWVMaXN0cyIsImVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJmaXhJbnB1dENlbGxUZXh0QXJlYSIsInR4dHMiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJlbmxhcmdlVHJlZWxpc3QiLCJkYXRhU2VjdGlvbiIsImRhdGFUcmVlbGlzdCIsImdldEZhdm9yaXRlSXRlbUxhYmVsIiwiZmF2b3JpdGUiLCJzcGFuIiwiZ2V0RmF2b3JpdGVJdGVtUGFyZW50VGV4dCIsInBhdGgiLCJqb2luIiwiY2xhc3NOYW1lIiwiYWRkRmF2b3JpdGVzIiwiZmF2b3JpdGVzU3R5bGUiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsImZhdm9yaXRlcyIsInNvcnQiLCJiIiwiYWNjSW5mbyIsImZhdiIsInBvcHVwIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwib3JpZ2luIiwiZmlsdGVyIiwiaXNJdGVtSW5NZW51IiwiYWRkQnV0dG9uIiwiZXYiLCJhZGRJbWFnZURpcmVjdFVybCIsIml0ZW0iLCJpc1Zpc2libGUiLCJkaXNwbGF5IiwidGFibGUiLCJpbml0aWFsaXplIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibWF0Y2giLCJzZXRJbnRlcnZhbCIsInNldHVwU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMiLCJyZWFkeVN0YXRlIiwiYWxlcnQiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJhY3Rpb24iLCJyZXNwb25zZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9