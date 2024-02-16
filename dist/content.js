/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DsFindDictionary.js":
/*!*********************************!*\
  !*** ./src/DsFindDictionary.js ***!
  \*********************************/
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

/***/ "./src/GitHubCreateBranch.js":
/*!***********************************!*\
  !*** ./src/GitHubCreateBranch.js ***!
  \***********************************/
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
    if (location.pathname === '/sitecore/shell/Applications/Content%20Editor.aspx') {
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
    if (location.pathname === '/sitecore/shell/Applications/Content%20Manager/Default.aspx') {
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
/* harmony import */ var _DsFindDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DsFindDictionary */ "./src/DsFindDictionary.js");
/* harmony import */ var _GitHubCreateBranch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GitHubCreateBranch */ "./src/GitHubCreateBranch.js");
/* harmony import */ var _SitecoreLayoutImprovements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SitecoreLayoutImprovements */ "./src/SitecoreLayoutImprovements.js");



(0,_DsFindDictionary__WEBPACK_IMPORTED_MODULE_0__.setupDsFindDictionary)();
(0,_GitHubCreateBranch__WEBPACK_IMPORTED_MODULE_1__.setupGithubCreateBranch)();
(0,_SitecoreLayoutImprovements__WEBPACK_IMPORTED_MODULE_2__.setupSitecoreLayoutImprovements)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCQSxDQUFBLEVBQVM7RUFDbkMsSUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLFlBQVksQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBRW5FLElBQUksQ0FBQUosWUFBWSxhQUFaQSxZQUFZLHVCQUFaQSxZQUFZLENBQUVLLE1BQU0sSUFBRyxDQUFDLEVBQUU7SUFDNUIsSUFBSUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUVoQixJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQUMsSUFBQSxFQUE4RTtNQUFBLElBQXhFQyxHQUFHLEdBQUFELElBQUEsQ0FBSEMsR0FBRztRQUFFQyxJQUFJLEdBQUFGLElBQUEsQ0FBSkUsSUFBSTtRQUFFQyxJQUFJLEdBQUFILElBQUEsQ0FBSkcsSUFBSTtRQUFFQyxJQUFJLEdBQUFKLElBQUEsQ0FBSkksSUFBSTtRQUFFQyxJQUFJLEdBQUFMLElBQUEsQ0FBSkssSUFBSTtRQUFFQyxJQUFJLEdBQUFOLElBQUEsQ0FBSk0sSUFBSTtRQUFFQyxJQUFJLEdBQUFQLElBQUEsQ0FBSk8sSUFBSTtRQUFFQyxJQUFJLEdBQUFSLElBQUEsQ0FBSlEsSUFBSTtRQUFFQyxHQUFHLEdBQUFULElBQUEsQ0FBSFMsR0FBRztRQUFFQyxhQUFhLEdBQUFWLElBQUEsQ0FBYlUsYUFBYTtNQUNqRlQsR0FBRyxHQUFHQSxHQUFHLEdBQUdBLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtNQUMxQkMsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtNQUM3QkMsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtNQUM3QkMsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtNQUM3QkMsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtNQUM3QkMsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtNQUM3QkMsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtNQUM3QkMsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtNQUU3QixJQUFNRyxLQUFLLEdBQUdELGFBQWEsQ0FBQ0UsUUFBUSxDQUFDLE9BQU8sQ0FBQztNQUU3QyxJQUFNQyxNQUFNLEdBQUdILGFBQWEsQ0FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztNQUVuRWhCLE9BQU8sQ0FBQ2UsTUFBTSxHQUFHWCxJQUFJLEdBQUdDLElBQUksR0FBR0MsSUFBSSxHQUFHQyxJQUFJLEdBQUdDLElBQUksR0FBR0MsSUFBSSxHQUFHQyxJQUFJLENBQUMsR0FBRztRQUNqRUcsS0FBSyxFQUFMQSxLQUFLO1FBQ0xGLEdBQUcsRUFBSEE7TUFDRixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlNLFFBQVEsR0FBRyxDQUFDO0lBQ2hCLElBQU1DLGNBQWMsR0FBRyxFQUFFO0lBRXpCLE9BQU9DLFlBQVksQ0FBQ2hCLEdBQUcsQ0FBQ2MsUUFBUSxDQUFDLEVBQUU7TUFDakMsSUFBTUcsVUFBVSxHQUFHRCxZQUFZLENBQUNoQixHQUFHLENBQUNjLFFBQVEsQ0FBQztNQUU3QyxJQUFJRyxVQUFVLENBQUNOLFFBQVEsQ0FBQyx5Q0FBeUMsQ0FBQyxFQUFFO1FBQ2xFSSxjQUFjLENBQUNHLElBQUksQ0FBQ0QsVUFBVSxDQUFDO01BQ2pDO01BRUFILFFBQVEsRUFBRTtJQUNaO0lBRUFDLGNBQWMsQ0FBQ0ksT0FBTyxDQUFDLFVBQUNWLGFBQWEsRUFBSztNQUN4QyxJQUFNVyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixZQUFZLENBQUNPLE9BQU8sQ0FBQ2QsYUFBYSxDQUFDLENBQUM7TUFFekQsSUFBSWUsT0FBQSxDQUFPSixDQUFDLE1BQUssUUFBUSxFQUFFO01BRTNCSyxNQUFNLENBQUNDLElBQUksQ0FBQ04sQ0FBQyxDQUFDLENBQUNELE9BQU8sQ0FBQyxVQUFDbkIsR0FBRyxFQUFLO1FBQzlCLElBQUksQ0FBQ29CLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxFQUFFO1FBRWIsSUFBSSxPQUFPb0IsQ0FBQyxDQUFDcEIsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO1VBQzlCLElBQUlvQixDQUFDLENBQUNwQixHQUFHLENBQUMsQ0FBQ0wsV0FBVyxDQUFDLENBQUMsQ0FBQ2dCLFFBQVEsQ0FBQ3BCLFlBQVksQ0FBQyxFQUFFO1lBQy9DTyxNQUFNLENBQUM7Y0FDTEUsR0FBRyxFQUFIQSxHQUFHO2NBQ0hRLEdBQUcsRUFBRVksQ0FBQyxDQUFDcEIsR0FBRyxDQUFDO2NBQ1hTLGFBQWEsRUFBYkE7WUFDRixDQUFDLENBQUM7VUFDSjtRQUNGO1FBRUFnQixNQUFNLENBQUNDLElBQUksQ0FBQ04sQ0FBQyxDQUFDcEIsR0FBRyxDQUFDLENBQUMsQ0FBQ21CLE9BQU8sQ0FBQyxVQUFDbEIsSUFBSSxFQUFLO1VBQ3BDLElBQUksT0FBT21CLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDcEMsSUFBSW1CLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ04sV0FBVyxDQUFDLENBQUMsQ0FBQ2dCLFFBQVEsQ0FBQ3BCLFlBQVksQ0FBQyxFQUFFO2NBQ3JETyxNQUFNLENBQUM7Z0JBQ0xFLEdBQUcsRUFBSEEsR0FBRztnQkFDSEMsSUFBSSxFQUFKQSxJQUFJO2dCQUNKTyxHQUFHLEVBQUVZLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQ2pCUSxhQUFhLEVBQWJBO2NBQ0YsQ0FBQyxDQUFDO1lBQ0o7VUFDRjtVQUVBZ0IsTUFBTSxDQUFDQyxJQUFJLENBQUNOLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDa0IsT0FBTyxDQUFDLFVBQUNqQixJQUFJLEVBQUs7WUFDMUMsSUFBSSxPQUFPa0IsQ0FBQyxDQUFDcEIsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7Y0FDMUMsSUFBSWtCLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNQLFdBQVcsQ0FBQyxDQUFDLENBQUNnQixRQUFRLENBQUNwQixZQUFZLENBQUMsRUFBRTtnQkFDM0RPLE1BQU0sQ0FBQztrQkFDTEUsR0FBRyxFQUFIQSxHQUFHO2tCQUNIQyxJQUFJLEVBQUpBLElBQUk7a0JBQ0pDLElBQUksRUFBSkEsSUFBSTtrQkFDSk0sR0FBRyxFQUFFWSxDQUFDLENBQUNwQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQztrQkFDdkJPLGFBQWEsRUFBYkE7Z0JBQ0YsQ0FBQyxDQUFDO2NBQ0o7WUFDRjtZQUVBZ0IsTUFBTSxDQUFDQyxJQUFJLENBQUNOLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQ2lCLE9BQU8sQ0FBQyxVQUFDaEIsSUFBSSxFQUFLO2NBQ2hELElBQUksT0FBT2lCLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDaEQsSUFBSWlCLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDUixXQUFXLENBQUMsQ0FBQyxDQUFDZ0IsUUFBUSxDQUFDcEIsWUFBWSxDQUFDLEVBQUU7a0JBQ2pFTyxNQUFNLENBQUM7b0JBQ0xFLEdBQUcsRUFBSEEsR0FBRztvQkFDSEMsSUFBSSxFQUFKQSxJQUFJO29CQUNKQyxJQUFJLEVBQUpBLElBQUk7b0JBQ0pDLElBQUksRUFBSkEsSUFBSTtvQkFDSkssR0FBRyxFQUFFWSxDQUFDLENBQUNwQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQzdCTSxhQUFhLEVBQWJBO2tCQUNGLENBQUMsQ0FBQztnQkFDSjtjQUNGO2NBRUFnQixNQUFNLENBQUNDLElBQUksQ0FBQ04sQ0FBQyxDQUFDcEIsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQ2dCLE9BQU8sQ0FBQyxVQUFDZixJQUFJLEVBQUs7Z0JBQ3RELElBQUksT0FBT2dCLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7a0JBQ3RELElBQUlnQixDQUFDLENBQUNwQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNULFdBQVcsQ0FBQyxDQUFDLENBQUNnQixRQUFRLENBQUNwQixZQUFZLENBQUMsRUFBRTtvQkFDdkVPLE1BQU0sQ0FBQztzQkFDTEUsR0FBRyxFQUFIQSxHQUFHO3NCQUNIQyxJQUFJLEVBQUpBLElBQUk7c0JBQ0pDLElBQUksRUFBSkEsSUFBSTtzQkFDSkMsSUFBSSxFQUFKQSxJQUFJO3NCQUNKQyxJQUFJLEVBQUpBLElBQUk7c0JBQ0pJLEdBQUcsRUFBRVksQ0FBQyxDQUFDcEIsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQztzQkFDbkNLLGFBQWEsRUFBYkE7b0JBQ0YsQ0FBQyxDQUFDO2tCQUNKO2dCQUNGO2dCQUVBZ0IsTUFBTSxDQUFDQyxJQUFJLENBQUNOLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDZSxPQUFPLENBQUMsVUFBQ2QsSUFBSSxFQUFLO2tCQUM1RCxJQUFJLE9BQU9lLENBQUMsQ0FBQ3BCLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUM1RCxJQUFJZSxDQUFDLENBQUNwQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDVixXQUFXLENBQUMsQ0FBQyxDQUFDZ0IsUUFBUSxDQUFDcEIsWUFBWSxDQUFDLEVBQUU7c0JBQzdFTyxNQUFNLENBQUM7d0JBQ0xFLEdBQUcsRUFBSEEsR0FBRzt3QkFDSEMsSUFBSSxFQUFKQSxJQUFJO3dCQUNKQyxJQUFJLEVBQUpBLElBQUk7d0JBQ0pDLElBQUksRUFBSkEsSUFBSTt3QkFDSkMsSUFBSSxFQUFKQSxJQUFJO3dCQUNKQyxJQUFJLEVBQUpBLElBQUk7d0JBQ0pHLEdBQUcsRUFBRVksQ0FBQyxDQUFDcEIsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUM7d0JBQ3pDSSxhQUFhLEVBQWJBO3NCQUNGLENBQUMsQ0FBQztvQkFDSjtrQkFDRjtrQkFFQWdCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTixDQUFDLENBQUNwQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUNjLE9BQU8sQ0FBQyxVQUFDYixJQUFJLEVBQUs7b0JBQ2xFLElBQUksT0FBT2MsQ0FBQyxDQUFDcEIsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO3NCQUNsRSxJQUFJYyxDQUFDLENBQUNwQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ1gsV0FBVyxDQUFDLENBQUMsQ0FBQ2dCLFFBQVEsQ0FBQ3BCLFlBQVksQ0FBQyxFQUFFO3dCQUNuRk8sTUFBTSxDQUFDOzBCQUNMRSxHQUFHLEVBQUhBLEdBQUc7MEJBQ0hDLElBQUksRUFBSkEsSUFBSTswQkFDSkMsSUFBSSxFQUFKQSxJQUFJOzBCQUNKQyxJQUFJLEVBQUpBLElBQUk7MEJBQ0pDLElBQUksRUFBSkEsSUFBSTswQkFDSkMsSUFBSSxFQUFKQSxJQUFJOzBCQUNKQyxJQUFJLEVBQUpBLElBQUk7MEJBQ0pFLEdBQUcsRUFBRVksQ0FBQyxDQUFDcEIsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDOzBCQUMvQ0csYUFBYSxFQUFiQTt3QkFDRixDQUFDLENBQUM7c0JBQ0o7b0JBQ0Y7b0JBRUFnQixNQUFNLENBQUNDLElBQUksQ0FBQ04sQ0FBQyxDQUFDcEIsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQ2EsT0FBTyxDQUFDLFVBQUNaLElBQUksRUFBSztzQkFDeEUsSUFBSSxPQUFPYSxDQUFDLENBQUNwQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO3dCQUN4RSxJQUFJYSxDQUFDLENBQUNwQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNaLFdBQVcsQ0FBQyxDQUFDLENBQUNnQixRQUFRLENBQUNwQixZQUFZLENBQUMsRUFBRTswQkFDekZPLE1BQU0sQ0FBQzs0QkFDTEUsR0FBRyxFQUFIQSxHQUFHOzRCQUNIQyxJQUFJLEVBQUpBLElBQUk7NEJBQ0pDLElBQUksRUFBSkEsSUFBSTs0QkFDSkMsSUFBSSxFQUFKQSxJQUFJOzRCQUNKQyxJQUFJLEVBQUpBLElBQUk7NEJBQ0pDLElBQUksRUFBSkEsSUFBSTs0QkFDSkMsSUFBSSxFQUFKQSxJQUFJOzRCQUNKQyxJQUFJLEVBQUpBLElBQUk7NEJBQ0pDLEdBQUcsRUFBRVksQ0FBQyxDQUFDcEIsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQzs0QkFDckRFLGFBQWEsRUFBYkE7MEJBQ0YsQ0FBQyxDQUFDO3dCQUNKO3NCQUNGO29CQUNGLENBQUMsQ0FBQztrQkFDSixDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDO2NBQ0osQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDO1VBQ0osQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBTWtCLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLElBQUlGLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDN0IsT0FBTyxDQUFDLENBQUNELE1BQU0sR0FBRyxHQUFHLEVBQUU7SUFDdkM2QixNQUFNLENBQUNDLElBQUksQ0FBQzdCLE9BQU8sQ0FBQyxDQUFDc0IsT0FBTyxDQUFDLFVBQUNuQixHQUFHLEVBQUs7TUFDcEMsSUFBTTRCLEdBQUcsR0FBR0MsZ0JBQWdCLENBQUNoQyxPQUFPLENBQUNHLEdBQUcsQ0FBQyxDQUFDVSxLQUFLLENBQUMsR0FBR1YsR0FBRztNQUN0RDJCLE9BQU8sQ0FBQ1QsSUFBSSxDQUFDO1FBQUVZLEdBQUcsRUFBRWpDLE9BQU8sQ0FBQ0csR0FBRyxDQUFDLENBQUNRLEdBQUc7UUFBRW9CLEdBQUcsRUFBSEEsR0FBRztRQUFFNUIsR0FBRyxFQUFIQTtNQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUM7SUFFRitCLGNBQWMsQ0FBQ0osT0FBTyxDQUFDO0VBQ3pCLENBQUMsTUFBTTtJQUNMSyxtQkFBbUIsQ0FBQyxDQUFDO0VBQ3ZCO0FBQ0YsQ0FBQztBQUVELElBQU1ILGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUluQixLQUFLLEVBQUs7RUFDbEMsSUFBTXVCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxJQUFJLENBQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDO0VBQzFDLElBQU11QixRQUFRLEdBQUdGLFFBQVEsQ0FBQ0UsUUFBUSxHQUFHLElBQUk7RUFDekMsSUFBTUMsU0FBUyxHQUFHSixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUN0QixRQUFRLENBQUMsTUFBTSxDQUFDO0VBQy9DLElBQU0yQixRQUFRLEdBQUdMLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3RCLFFBQVEsQ0FBQyxLQUFLLENBQUM7RUFDN0MsSUFBSTRCLE9BQU87RUFFWCxJQUFJRCxRQUFRLEVBQUU7SUFDWkMsT0FBTyxVQUFBQyxNQUFBLENBQVVQLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRTtFQUNqQyxDQUFDLE1BQU0sSUFBSUksU0FBUyxFQUFFO0lBQ3BCRSxPQUFPLE1BQUFDLE1BQUEsQ0FBTVAsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFBTyxNQUFBLENBQU85QixLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBRTtFQUN6RCxDQUFDLE1BQU07SUFDTDZCLE9BQU8sVUFBQUMsTUFBQSxDQUFVOUIsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUU7RUFDMUM7RUFFQSxVQUFBOEIsTUFBQSxDQUFVSixRQUFRLEVBQUFJLE1BQUEsQ0FBR0QsT0FBTztBQUM5QixDQUFDO0FBRUQsSUFBTVAsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBQSxFQUFTO0VBQ2hDLElBQU1TLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlDLEVBQUUsRUFBSztJQUNoQyxJQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDSCxFQUFFLENBQUM7SUFDdEMsSUFBSUMsRUFBRSxFQUFFQSxFQUFFLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0VBQ3JCLENBQUM7RUFFREwsaUJBQWlCLENBQUMsd0JBQXdCLENBQUM7RUFDM0NBLGlCQUFpQixDQUFDLDZCQUE2QixDQUFDO0FBQ2xELENBQUM7QUFFRCxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlMLEVBQUUsRUFBRU0sYUFBYSxFQUFLO0VBQzNDLElBQUlMLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUNILEVBQUUsQ0FBQztFQUNwQyxJQUFJLENBQUNDLEVBQUUsRUFBRTtJQUNQQSxFQUFFLEdBQUdLLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCSixRQUFRLENBQUNLLElBQUksQ0FBQ0MsV0FBVyxDQUFDUCxFQUFFLENBQUM7RUFDL0I7RUFDQSxPQUFPQSxFQUFFO0FBQ1gsQ0FBQztBQUVELElBQU1RLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJQyxLQUFLLEVBQUVDLEdBQUcsRUFBSztFQUMvQkQsS0FBSyxDQUFDRSxTQUFTLEdBQUdELEdBQUc7QUFDdkIsQ0FBQztBQUVELElBQU10QixjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlKLE9BQU8sRUFBSztFQUNsQyxJQUFNZ0IsRUFBRSxHQUFHSSxhQUFhLENBQUMsd0JBQXdCLEVBQUUsWUFBTTtJQUN2RCxJQUFNUSxHQUFHLEdBQUdYLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6Q08sR0FBRyxDQUFDYixFQUFFLEdBQUcsd0JBQXdCO0lBQ2pDLE9BQU9hLEdBQUc7RUFDWixDQUFDLENBQUM7RUFDRlosRUFBRSxDQUFDVyxTQUFTLEdBQUcsRUFBRTtFQUVqQixJQUFNRixLQUFLLEdBQUdMLGFBQWEsQ0FBQyw2QkFBNkIsRUFBRSxZQUFNO0lBQy9ELElBQU1TLE9BQU8sR0FBR1osUUFBUSxDQUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQy9DUSxPQUFPLENBQUNkLEVBQUUsR0FBRyw2QkFBNkI7SUFDMUMsT0FBT2MsT0FBTztFQUNoQixDQUFDLENBQUM7RUFFRkwsUUFBUSxDQUNOQyxLQUFLLGlnQkFBQVosTUFBQSxDQW1CYWIsT0FBTyxDQUFDL0IsTUFBTSxnNUJBc0NsQyxDQUFDO0VBRUQrQixPQUFPLENBQUNSLE9BQU8sQ0FBQyxVQUFBc0MsS0FBQSxFQUF1QjtJQUFBLElBQXBCM0IsR0FBRyxHQUFBMkIsS0FBQSxDQUFIM0IsR0FBRztNQUFFRixHQUFHLEdBQUE2QixLQUFBLENBQUg3QixHQUFHO01BQUU1QixHQUFHLEdBQUF5RCxLQUFBLENBQUh6RCxHQUFHO0lBQzlCLElBQU11RCxHQUFHLEdBQUdYLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QyxJQUFNVSxDQUFDLEdBQUdkLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUNyQyxJQUFNVyxDQUFDLEdBQUdmLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUNyQ1UsQ0FBQyxDQUFDSixTQUFTLEdBQUd4QixHQUFHO0lBQ2pCNkIsQ0FBQyxDQUFDQyxJQUFJLEdBQUdoQyxHQUFHO0lBQ1orQixDQUFDLENBQUNFLE1BQU0sR0FBRyxRQUFRO0lBQ25CRixDQUFDLENBQUNHLElBQUksR0FBRzlELEdBQUc7SUFDWnVELEdBQUcsQ0FBQ0wsV0FBVyxDQUFDUSxDQUFDLENBQUM7SUFDbEJILEdBQUcsQ0FBQ0wsV0FBVyxDQUFDUyxDQUFDLENBQUM7SUFDbEJoQixFQUFFLENBQUNPLFdBQVcsQ0FBQ0ssR0FBRyxDQUFDO0VBQ3JCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTUSxxQkFBcUJBLENBQUEsRUFBRztFQUN0QyxJQUFJN0IsUUFBUSxDQUFDQyxJQUFJLENBQUM2QixRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQzlCLFFBQVEsQ0FBQytCLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFO0lBQzFGdEIsUUFBUSxDQUFDdUIsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUU3RSxzQkFBc0IsQ0FBQztFQUN0RTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7K0NDNVRBLHFKQUFBOEUsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBOUMsTUFBQSxDQUFBK0MsU0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsY0FBQSxFQUFBQyxDQUFBLEdBQUFsRCxNQUFBLENBQUFtRCxjQUFBLGNBQUFOLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFNLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFwQixDQUFBLEdBQUFtQixDQUFBLENBQUFFLFFBQUEsa0JBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxhQUFBLHVCQUFBQyxDQUFBLEdBQUFMLENBQUEsQ0FBQU0sV0FBQSw4QkFBQUMsT0FBQWYsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQTlDLE1BQUEsQ0FBQW1ELGNBQUEsQ0FBQU4sQ0FBQSxFQUFBRCxDQUFBLElBQUFRLEtBQUEsRUFBQU4sQ0FBQSxFQUFBZSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBbEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFnQixNQUFBLG1CQUFBZixDQUFBLElBQUFlLE1BQUEsWUFBQUEsT0FBQWYsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFrQixLQUFBbkIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBSyxDQUFBLEdBQUFULENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxTQUFBLFlBQUFrQixTQUFBLEdBQUFyQixDQUFBLEdBQUFxQixTQUFBLEVBQUEvQixDQUFBLEdBQUFsQyxNQUFBLENBQUFrRSxNQUFBLENBQUFiLENBQUEsQ0FBQU4sU0FBQSxHQUFBUyxDQUFBLE9BQUFXLE9BQUEsQ0FBQW5CLENBQUEsZ0JBQUFFLENBQUEsQ0FBQWhCLENBQUEsZUFBQWtCLEtBQUEsRUFBQWdCLGdCQUFBLENBQUF2QixDQUFBLEVBQUFDLENBQUEsRUFBQVUsQ0FBQSxNQUFBdEIsQ0FBQSxhQUFBbUMsU0FBQXhCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBd0IsSUFBQSxZQUFBQyxHQUFBLEVBQUExQixDQUFBLENBQUEyQixJQUFBLENBQUE1QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBeUIsSUFBQSxXQUFBQyxHQUFBLEVBQUExQixDQUFBLFFBQUFELENBQUEsQ0FBQW9CLElBQUEsR0FBQUEsSUFBQSxNQUFBUyxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBaEYsQ0FBQSxnQkFBQWlGLENBQUEsZ0JBQUFYLFVBQUEsY0FBQVksa0JBQUEsY0FBQUMsMkJBQUEsU0FBQTdDLENBQUEsT0FBQTJCLE1BQUEsQ0FBQTNCLENBQUEsRUFBQUMsQ0FBQSxxQ0FBQTZDLENBQUEsR0FBQS9FLE1BQUEsQ0FBQWdGLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBbkMsQ0FBQSxJQUFBRSxDQUFBLENBQUF3QixJQUFBLENBQUFTLENBQUEsRUFBQS9DLENBQUEsTUFBQUQsQ0FBQSxHQUFBZ0QsQ0FBQSxPQUFBRSxDQUFBLEdBQUFMLDBCQUFBLENBQUEvQixTQUFBLEdBQUFrQixTQUFBLENBQUFsQixTQUFBLEdBQUEvQyxNQUFBLENBQUFrRSxNQUFBLENBQUFqQyxDQUFBLFlBQUFtRCxzQkFBQXZDLENBQUEsZ0NBQUFuRCxPQUFBLFdBQUFrRCxDQUFBLElBQUFnQixNQUFBLENBQUFmLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBd0MsT0FBQSxDQUFBekMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBeUMsY0FBQXpDLENBQUEsRUFBQUQsQ0FBQSxhQUFBMkMsT0FBQXpDLENBQUEsRUFBQUksQ0FBQSxFQUFBRyxDQUFBLEVBQUFuQixDQUFBLFFBQUFzQixDQUFBLEdBQUFhLFFBQUEsQ0FBQXhCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFLLENBQUEsbUJBQUFNLENBQUEsQ0FBQWMsSUFBQSxRQUFBWixDQUFBLEdBQUFGLENBQUEsQ0FBQWUsR0FBQSxFQUFBRSxDQUFBLEdBQUFmLENBQUEsQ0FBQU4sS0FBQSxTQUFBcUIsQ0FBQSxnQkFBQTFFLE9BQUEsQ0FBQTBFLENBQUEsS0FBQXpCLENBQUEsQ0FBQXdCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBN0IsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBZixDQUFBLENBQUFnQixPQUFBLEVBQUFDLElBQUEsV0FBQTdDLENBQUEsSUFBQTBDLE1BQUEsU0FBQTFDLENBQUEsRUFBQVEsQ0FBQSxFQUFBbkIsQ0FBQSxnQkFBQVcsQ0FBQSxJQUFBMEMsTUFBQSxVQUFBMUMsQ0FBQSxFQUFBUSxDQUFBLEVBQUFuQixDQUFBLFFBQUFVLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQWYsQ0FBQSxFQUFBaUIsSUFBQSxXQUFBN0MsQ0FBQSxJQUFBYSxDQUFBLENBQUFOLEtBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLENBQUFLLENBQUEsZ0JBQUFiLENBQUEsV0FBQTBDLE1BQUEsVUFBQTFDLENBQUEsRUFBQVEsQ0FBQSxFQUFBbkIsQ0FBQSxTQUFBQSxDQUFBLENBQUFzQixDQUFBLENBQUFlLEdBQUEsU0FBQXpCLENBQUEsRUFBQUksQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUCxDQUFBLEVBQUFHLENBQUEsYUFBQTJDLDJCQUFBLGVBQUEvQyxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBeUMsTUFBQSxDQUFBMUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFKLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQTRDLElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUF2QixpQkFBQXhCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQXVCLENBQUEsbUJBQUFwQixDQUFBLEVBQUFuQixDQUFBLFFBQUFnQixDQUFBLEtBQUF5QixDQUFBLFlBQUFpQixLQUFBLHNDQUFBMUMsQ0FBQSxLQUFBdkQsQ0FBQSxvQkFBQTBELENBQUEsUUFBQW5CLENBQUEsV0FBQWtCLEtBQUEsRUFBQVAsQ0FBQSxFQUFBZ0QsSUFBQSxlQUFBN0MsQ0FBQSxDQUFBOEMsTUFBQSxHQUFBekMsQ0FBQSxFQUFBTCxDQUFBLENBQUF1QixHQUFBLEdBQUFyQyxDQUFBLFVBQUFzQixDQUFBLEdBQUFSLENBQUEsQ0FBQStDLFFBQUEsTUFBQXZDLENBQUEsUUFBQUUsQ0FBQSxHQUFBc0MsbUJBQUEsQ0FBQXhDLENBQUEsRUFBQVIsQ0FBQSxPQUFBVSxDQUFBLFFBQUFBLENBQUEsS0FBQWtCLENBQUEsbUJBQUFsQixDQUFBLHFCQUFBVixDQUFBLENBQUE4QyxNQUFBLEVBQUE5QyxDQUFBLENBQUFpRCxJQUFBLEdBQUFqRCxDQUFBLENBQUFrRCxLQUFBLEdBQUFsRCxDQUFBLENBQUF1QixHQUFBLHNCQUFBdkIsQ0FBQSxDQUFBOEMsTUFBQSxRQUFBNUMsQ0FBQSxLQUFBdUIsQ0FBQSxRQUFBdkIsQ0FBQSxHQUFBdkQsQ0FBQSxFQUFBcUQsQ0FBQSxDQUFBdUIsR0FBQSxFQUFBdkIsQ0FBQSxDQUFBbUQsaUJBQUEsQ0FBQW5ELENBQUEsQ0FBQXVCLEdBQUEsdUJBQUF2QixDQUFBLENBQUE4QyxNQUFBLElBQUE5QyxDQUFBLENBQUFvRCxNQUFBLFdBQUFwRCxDQUFBLENBQUF1QixHQUFBLEdBQUFyQixDQUFBLEdBQUF5QixDQUFBLE1BQUExQyxDQUFBLEdBQUFvQyxRQUFBLENBQUF6QixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxvQkFBQWYsQ0FBQSxDQUFBcUMsSUFBQSxRQUFBcEIsQ0FBQSxHQUFBRixDQUFBLENBQUE2QyxJQUFBLEdBQUFsRyxDQUFBLEdBQUErRSxDQUFBLEVBQUF6QyxDQUFBLENBQUFzQyxHQUFBLEtBQUFLLENBQUEscUJBQUF4QixLQUFBLEVBQUFuQixDQUFBLENBQUFzQyxHQUFBLEVBQUFzQixJQUFBLEVBQUE3QyxDQUFBLENBQUE2QyxJQUFBLGtCQUFBNUQsQ0FBQSxDQUFBcUMsSUFBQSxLQUFBcEIsQ0FBQSxHQUFBdkQsQ0FBQSxFQUFBcUQsQ0FBQSxDQUFBOEMsTUFBQSxZQUFBOUMsQ0FBQSxDQUFBdUIsR0FBQSxHQUFBdEMsQ0FBQSxDQUFBc0MsR0FBQSxtQkFBQXlCLG9CQUFBcEQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBZ0QsTUFBQSxFQUFBNUMsQ0FBQSxHQUFBTixDQUFBLENBQUFXLFFBQUEsQ0FBQVAsQ0FBQSxPQUFBRSxDQUFBLEtBQUFMLENBQUEsU0FBQUMsQ0FBQSxDQUFBaUQsUUFBQSxxQkFBQS9DLENBQUEsSUFBQUosQ0FBQSxDQUFBVyxRQUFBLGVBQUFULENBQUEsQ0FBQWdELE1BQUEsYUFBQWhELENBQUEsQ0FBQXlCLEdBQUEsR0FBQTFCLENBQUEsRUFBQW1ELG1CQUFBLENBQUFwRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBZ0QsTUFBQSxrQkFBQTlDLENBQUEsS0FBQUYsQ0FBQSxDQUFBZ0QsTUFBQSxZQUFBaEQsQ0FBQSxDQUFBeUIsR0FBQSxPQUFBOEIsU0FBQSx1Q0FBQXJELENBQUEsaUJBQUE0QixDQUFBLE1BQUF2QixDQUFBLEdBQUFnQixRQUFBLENBQUFuQixDQUFBLEVBQUFOLENBQUEsQ0FBQVcsUUFBQSxFQUFBVCxDQUFBLENBQUF5QixHQUFBLG1CQUFBbEIsQ0FBQSxDQUFBaUIsSUFBQSxTQUFBeEIsQ0FBQSxDQUFBZ0QsTUFBQSxZQUFBaEQsQ0FBQSxDQUFBeUIsR0FBQSxHQUFBbEIsQ0FBQSxDQUFBa0IsR0FBQSxFQUFBekIsQ0FBQSxDQUFBaUQsUUFBQSxTQUFBbkIsQ0FBQSxNQUFBMUMsQ0FBQSxHQUFBbUIsQ0FBQSxDQUFBa0IsR0FBQSxTQUFBckMsQ0FBQSxHQUFBQSxDQUFBLENBQUEyRCxJQUFBLElBQUEvQyxDQUFBLENBQUFGLENBQUEsQ0FBQTBELFVBQUEsSUFBQXBFLENBQUEsQ0FBQWtCLEtBQUEsRUFBQU4sQ0FBQSxDQUFBeUQsSUFBQSxHQUFBM0QsQ0FBQSxDQUFBNEQsT0FBQSxlQUFBMUQsQ0FBQSxDQUFBZ0QsTUFBQSxLQUFBaEQsQ0FBQSxDQUFBZ0QsTUFBQSxXQUFBaEQsQ0FBQSxDQUFBeUIsR0FBQSxHQUFBMUIsQ0FBQSxHQUFBQyxDQUFBLENBQUFpRCxRQUFBLFNBQUFuQixDQUFBLElBQUExQyxDQUFBLElBQUFZLENBQUEsQ0FBQWdELE1BQUEsWUFBQWhELENBQUEsQ0FBQXlCLEdBQUEsT0FBQThCLFNBQUEsc0NBQUF2RCxDQUFBLENBQUFpRCxRQUFBLFNBQUFuQixDQUFBLGNBQUE2QixhQUFBNUQsQ0FBQSxRQUFBRCxDQUFBLEtBQUE4RCxNQUFBLEVBQUE3RCxDQUFBLFlBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBK0QsUUFBQSxHQUFBOUQsQ0FBQSxXQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQWdFLFVBQUEsR0FBQS9ELENBQUEsS0FBQUQsQ0FBQSxDQUFBaUUsUUFBQSxHQUFBaEUsQ0FBQSxXQUFBaUUsVUFBQSxDQUFBckgsSUFBQSxDQUFBbUQsQ0FBQSxjQUFBbUUsY0FBQWxFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUFtRSxVQUFBLFFBQUFwRSxDQUFBLENBQUEwQixJQUFBLG9CQUFBMUIsQ0FBQSxDQUFBMkIsR0FBQSxFQUFBMUIsQ0FBQSxDQUFBbUUsVUFBQSxHQUFBcEUsQ0FBQSxhQUFBdUIsUUFBQXRCLENBQUEsU0FBQWlFLFVBQUEsTUFBQUosTUFBQSxhQUFBN0QsQ0FBQSxDQUFBbkQsT0FBQSxDQUFBK0csWUFBQSxjQUFBUSxLQUFBLGlCQUFBL0IsT0FBQXRDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBVixDQUFBLE9BQUFZLENBQUEsU0FBQUEsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBNUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBMkQsSUFBQSxTQUFBM0QsQ0FBQSxPQUFBc0UsS0FBQSxDQUFBdEUsQ0FBQSxDQUFBekUsTUFBQSxTQUFBK0UsQ0FBQSxPQUFBRyxDQUFBLFlBQUFrRCxLQUFBLGFBQUFyRCxDQUFBLEdBQUFOLENBQUEsQ0FBQXpFLE1BQUEsT0FBQTZFLENBQUEsQ0FBQXdCLElBQUEsQ0FBQTVCLENBQUEsRUFBQU0sQ0FBQSxVQUFBcUQsSUFBQSxDQUFBbkQsS0FBQSxHQUFBUixDQUFBLENBQUFNLENBQUEsR0FBQXFELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQW5ELEtBQUEsR0FBQVAsQ0FBQSxFQUFBMEQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQWxELENBQUEsQ0FBQWtELElBQUEsR0FBQWxELENBQUEsZ0JBQUFnRCxTQUFBLENBQUF0RyxPQUFBLENBQUE2QyxDQUFBLGtDQUFBaUMsaUJBQUEsQ0FBQTlCLFNBQUEsR0FBQStCLDBCQUFBLEVBQUE1QixDQUFBLENBQUFpQyxDQUFBLG1CQUFBL0IsS0FBQSxFQUFBMEIsMEJBQUEsRUFBQWhCLFlBQUEsU0FBQVosQ0FBQSxDQUFBNEIsMEJBQUEsbUJBQUExQixLQUFBLEVBQUF5QixpQkFBQSxFQUFBZixZQUFBLFNBQUFlLGlCQUFBLENBQUFzQyxXQUFBLEdBQUF2RCxNQUFBLENBQUFrQiwwQkFBQSxFQUFBcEIsQ0FBQSx3QkFBQWQsQ0FBQSxDQUFBd0UsbUJBQUEsYUFBQXZFLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUF3RSxXQUFBLFdBQUF6RSxDQUFBLEtBQUFBLENBQUEsS0FBQWlDLGlCQUFBLDZCQUFBakMsQ0FBQSxDQUFBdUUsV0FBQSxJQUFBdkUsQ0FBQSxDQUFBMEUsSUFBQSxPQUFBMUUsQ0FBQSxDQUFBMkUsSUFBQSxhQUFBMUUsQ0FBQSxXQUFBN0MsTUFBQSxDQUFBd0gsY0FBQSxHQUFBeEgsTUFBQSxDQUFBd0gsY0FBQSxDQUFBM0UsQ0FBQSxFQUFBaUMsMEJBQUEsS0FBQWpDLENBQUEsQ0FBQTRFLFNBQUEsR0FBQTNDLDBCQUFBLEVBQUFsQixNQUFBLENBQUFmLENBQUEsRUFBQWEsQ0FBQSx5QkFBQWIsQ0FBQSxDQUFBRSxTQUFBLEdBQUEvQyxNQUFBLENBQUFrRSxNQUFBLENBQUFpQixDQUFBLEdBQUF0QyxDQUFBLEtBQUFELENBQUEsQ0FBQThFLEtBQUEsYUFBQTdFLENBQUEsYUFBQTRDLE9BQUEsRUFBQTVDLENBQUEsT0FBQXVDLHFCQUFBLENBQUFFLGFBQUEsQ0FBQXZDLFNBQUEsR0FBQWEsTUFBQSxDQUFBMEIsYUFBQSxDQUFBdkMsU0FBQSxFQUFBUyxDQUFBLGlDQUFBWixDQUFBLENBQUEwQyxhQUFBLEdBQUFBLGFBQUEsRUFBQTFDLENBQUEsQ0FBQStFLEtBQUEsYUFBQTlFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQXVFLE9BQUEsT0FBQTFGLENBQUEsT0FBQW9ELGFBQUEsQ0FBQXRCLElBQUEsQ0FBQW5CLENBQUEsRUFBQUMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsR0FBQUcsQ0FBQSxVQUFBVCxDQUFBLENBQUF3RSxtQkFBQSxDQUFBdEUsQ0FBQSxJQUFBWixDQUFBLEdBQUFBLENBQUEsQ0FBQXFFLElBQUEsR0FBQWIsSUFBQSxXQUFBN0MsQ0FBQSxXQUFBQSxDQUFBLENBQUFnRCxJQUFBLEdBQUFoRCxDQUFBLENBQUFPLEtBQUEsR0FBQWxCLENBQUEsQ0FBQXFFLElBQUEsV0FBQW5CLHFCQUFBLENBQUFELENBQUEsR0FBQXZCLE1BQUEsQ0FBQXVCLENBQUEsRUFBQXpCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXVCLENBQUEsRUFBQWpELENBQUEsaUNBQUEwQixNQUFBLENBQUF1QixDQUFBLDZEQUFBdkMsQ0FBQSxDQUFBM0MsSUFBQSxhQUFBNEMsQ0FBQSxRQUFBRCxDQUFBLEdBQUE1QyxNQUFBLENBQUE2QyxDQUFBLEdBQUFDLENBQUEsZ0JBQUFFLENBQUEsSUFBQUosQ0FBQSxFQUFBRSxDQUFBLENBQUFyRCxJQUFBLENBQUF1RCxDQUFBLFVBQUFGLENBQUEsQ0FBQStFLE9BQUEsYUFBQXRCLEtBQUEsV0FBQXpELENBQUEsQ0FBQTNFLE1BQUEsU0FBQTBFLENBQUEsR0FBQUMsQ0FBQSxDQUFBZ0YsR0FBQSxRQUFBakYsQ0FBQSxJQUFBRCxDQUFBLFNBQUEyRCxJQUFBLENBQUFuRCxLQUFBLEdBQUFQLENBQUEsRUFBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUEzRCxDQUFBLENBQUFzQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWYsT0FBQSxDQUFBcEIsU0FBQSxLQUFBc0UsV0FBQSxFQUFBbEQsT0FBQSxFQUFBOEMsS0FBQSxXQUFBQSxNQUFBckUsQ0FBQSxhQUFBbUYsSUFBQSxXQUFBeEIsSUFBQSxXQUFBTixJQUFBLFFBQUFDLEtBQUEsR0FBQXJELENBQUEsT0FBQWdELElBQUEsWUFBQUUsUUFBQSxjQUFBRCxNQUFBLGdCQUFBdkIsR0FBQSxHQUFBMUIsQ0FBQSxPQUFBaUUsVUFBQSxDQUFBcEgsT0FBQSxDQUFBcUgsYUFBQSxJQUFBbkUsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUFrRixNQUFBLE9BQUFoRixDQUFBLENBQUF3QixJQUFBLE9BQUExQixDQUFBLE1BQUFvRSxLQUFBLEVBQUFwRSxDQUFBLENBQUFtRixLQUFBLGNBQUFuRixDQUFBLElBQUFELENBQUEsTUFBQXFGLElBQUEsV0FBQUEsS0FBQSxTQUFBckMsSUFBQSxXQUFBaEQsQ0FBQSxRQUFBaUUsVUFBQSxJQUFBRSxVQUFBLGtCQUFBbkUsQ0FBQSxDQUFBeUIsSUFBQSxRQUFBekIsQ0FBQSxDQUFBMEIsR0FBQSxjQUFBNEQsSUFBQSxLQUFBaEMsaUJBQUEsV0FBQUEsa0JBQUF2RCxDQUFBLGFBQUFpRCxJQUFBLFFBQUFqRCxDQUFBLE1BQUFFLENBQUEsa0JBQUFzRixPQUFBcEYsQ0FBQSxFQUFBRSxDQUFBLFdBQUFoQixDQUFBLENBQUFvQyxJQUFBLFlBQUFwQyxDQUFBLENBQUFxQyxHQUFBLEdBQUEzQixDQUFBLEVBQUFFLENBQUEsQ0FBQXlELElBQUEsR0FBQXZELENBQUEsRUFBQUUsQ0FBQSxLQUFBSixDQUFBLENBQUFnRCxNQUFBLFdBQUFoRCxDQUFBLENBQUF5QixHQUFBLEdBQUExQixDQUFBLEtBQUFLLENBQUEsYUFBQUEsQ0FBQSxRQUFBNEQsVUFBQSxDQUFBM0ksTUFBQSxNQUFBK0UsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQXlELFVBQUEsQ0FBQTVELENBQUEsR0FBQWhCLENBQUEsR0FBQW1CLENBQUEsQ0FBQTJELFVBQUEsaUJBQUEzRCxDQUFBLENBQUFxRCxNQUFBLFNBQUEwQixNQUFBLGFBQUEvRSxDQUFBLENBQUFxRCxNQUFBLFNBQUFxQixJQUFBLFFBQUF2RSxDQUFBLEdBQUFSLENBQUEsQ0FBQXdCLElBQUEsQ0FBQW5CLENBQUEsZUFBQUssQ0FBQSxHQUFBVixDQUFBLENBQUF3QixJQUFBLENBQUFuQixDQUFBLHFCQUFBRyxDQUFBLElBQUFFLENBQUEsYUFBQXFFLElBQUEsR0FBQTFFLENBQUEsQ0FBQXNELFFBQUEsU0FBQXlCLE1BQUEsQ0FBQS9FLENBQUEsQ0FBQXNELFFBQUEsZ0JBQUFvQixJQUFBLEdBQUExRSxDQUFBLENBQUF1RCxVQUFBLFNBQUF3QixNQUFBLENBQUEvRSxDQUFBLENBQUF1RCxVQUFBLGNBQUFwRCxDQUFBLGFBQUF1RSxJQUFBLEdBQUExRSxDQUFBLENBQUFzRCxRQUFBLFNBQUF5QixNQUFBLENBQUEvRSxDQUFBLENBQUFzRCxRQUFBLHFCQUFBakQsQ0FBQSxZQUFBa0MsS0FBQSxxREFBQW1DLElBQUEsR0FBQTFFLENBQUEsQ0FBQXVELFVBQUEsU0FBQXdCLE1BQUEsQ0FBQS9FLENBQUEsQ0FBQXVELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBdkQsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQWdFLFVBQUEsQ0FBQTNJLE1BQUEsTUFBQTJFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSSxDQUFBLFFBQUE0RCxVQUFBLENBQUFoRSxDQUFBLE9BQUFJLENBQUEsQ0FBQXdELE1BQUEsU0FBQXFCLElBQUEsSUFBQS9FLENBQUEsQ0FBQXdCLElBQUEsQ0FBQXRCLENBQUEsd0JBQUE2RSxJQUFBLEdBQUE3RSxDQUFBLENBQUEwRCxVQUFBLFFBQUF2RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVIsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUSxDQUFBLENBQUFxRCxNQUFBLElBQUE5RCxDQUFBLElBQUFBLENBQUEsSUFBQVMsQ0FBQSxDQUFBdUQsVUFBQSxLQUFBdkQsQ0FBQSxjQUFBbkIsQ0FBQSxHQUFBbUIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyRCxVQUFBLGNBQUE5RSxDQUFBLENBQUFvQyxJQUFBLEdBQUF6QixDQUFBLEVBQUFYLENBQUEsQ0FBQXFDLEdBQUEsR0FBQTNCLENBQUEsRUFBQVMsQ0FBQSxTQUFBeUMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBbEQsQ0FBQSxDQUFBdUQsVUFBQSxFQUFBaEMsQ0FBQSxTQUFBeUQsUUFBQSxDQUFBbkcsQ0FBQSxNQUFBbUcsUUFBQSxXQUFBQSxTQUFBeEYsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUF5QixJQUFBLFFBQUF6QixDQUFBLENBQUEwQixHQUFBLHFCQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxtQkFBQXpCLENBQUEsQ0FBQXlCLElBQUEsUUFBQWlDLElBQUEsR0FBQTFELENBQUEsQ0FBQTBCLEdBQUEsZ0JBQUExQixDQUFBLENBQUF5QixJQUFBLFNBQUE2RCxJQUFBLFFBQUE1RCxHQUFBLEdBQUExQixDQUFBLENBQUEwQixHQUFBLE9BQUF1QixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBMUQsQ0FBQSxDQUFBeUIsSUFBQSxJQUFBMUIsQ0FBQSxVQUFBMkQsSUFBQSxHQUFBM0QsQ0FBQSxHQUFBZ0MsQ0FBQSxLQUFBMEQsTUFBQSxXQUFBQSxPQUFBekYsQ0FBQSxhQUFBRCxDQUFBLFFBQUFrRSxVQUFBLENBQUEzSSxNQUFBLE1BQUF5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBZ0UsVUFBQSxDQUFBbEUsQ0FBQSxPQUFBRSxDQUFBLENBQUE4RCxVQUFBLEtBQUEvRCxDQUFBLGNBQUF3RixRQUFBLENBQUF2RixDQUFBLENBQUFrRSxVQUFBLEVBQUFsRSxDQUFBLENBQUErRCxRQUFBLEdBQUFFLGFBQUEsQ0FBQWpFLENBQUEsR0FBQThCLENBQUEseUJBQUEyRCxPQUFBMUYsQ0FBQSxhQUFBRCxDQUFBLFFBQUFrRSxVQUFBLENBQUEzSSxNQUFBLE1BQUF5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBZ0UsVUFBQSxDQUFBbEUsQ0FBQSxPQUFBRSxDQUFBLENBQUE0RCxNQUFBLEtBQUE3RCxDQUFBLFFBQUFHLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0UsVUFBQSxrQkFBQWhFLENBQUEsQ0FBQXNCLElBQUEsUUFBQXBCLENBQUEsR0FBQUYsQ0FBQSxDQUFBdUIsR0FBQSxFQUFBd0MsYUFBQSxDQUFBakUsQ0FBQSxZQUFBSSxDQUFBLGdCQUFBMEMsS0FBQSw4QkFBQTRDLGFBQUEsV0FBQUEsY0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBK0MsUUFBQSxLQUFBeEMsUUFBQSxFQUFBMkIsTUFBQSxDQUFBdEMsQ0FBQSxHQUFBMEQsVUFBQSxFQUFBeEQsQ0FBQSxFQUFBMEQsT0FBQSxFQUFBeEQsQ0FBQSxvQkFBQThDLE1BQUEsVUFBQXZCLEdBQUEsR0FBQTFCLENBQUEsR0FBQStCLENBQUEsT0FBQWhDLENBQUE7QUFBQSxTQUFBNkYsbUJBQUFDLEdBQUEsRUFBQWxELE9BQUEsRUFBQW1ELE1BQUEsRUFBQUMsS0FBQSxFQUFBQyxNQUFBLEVBQUF0SyxHQUFBLEVBQUFnRyxHQUFBLGNBQUF1RSxJQUFBLEdBQUFKLEdBQUEsQ0FBQW5LLEdBQUEsRUFBQWdHLEdBQUEsT0FBQW5CLEtBQUEsR0FBQTBGLElBQUEsQ0FBQTFGLEtBQUEsV0FBQTJGLEtBQUEsSUFBQUosTUFBQSxDQUFBSSxLQUFBLGlCQUFBRCxJQUFBLENBQUFqRCxJQUFBLElBQUFMLE9BQUEsQ0FBQXBDLEtBQUEsWUFBQXdFLE9BQUEsQ0FBQXBDLE9BQUEsQ0FBQXBDLEtBQUEsRUFBQXNDLElBQUEsQ0FBQWtELEtBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFHLGtCQUFBQyxFQUFBLDZCQUFBQyxJQUFBLFNBQUFDLElBQUEsR0FBQUMsU0FBQSxhQUFBeEIsT0FBQSxXQUFBcEMsT0FBQSxFQUFBbUQsTUFBQSxRQUFBRCxHQUFBLEdBQUFPLEVBQUEsQ0FBQUksS0FBQSxDQUFBSCxJQUFBLEVBQUFDLElBQUEsWUFBQVAsTUFBQXhGLEtBQUEsSUFBQXFGLGtCQUFBLENBQUFDLEdBQUEsRUFBQWxELE9BQUEsRUFBQW1ELE1BQUEsRUFBQUMsS0FBQSxFQUFBQyxNQUFBLFVBQUF6RixLQUFBLGNBQUF5RixPQUFBUyxHQUFBLElBQUFiLGtCQUFBLENBQUFDLEdBQUEsRUFBQWxELE9BQUEsRUFBQW1ELE1BQUEsRUFBQUMsS0FBQSxFQUFBQyxNQUFBLFdBQUFTLEdBQUEsS0FBQVYsS0FBQSxDQUFBVyxTQUFBO0FBREEsSUFBTUMsY0FBYztFQUFBLElBQUFsTCxJQUFBLEdBQUEwSyxpQkFBQSxlQUFBckcsbUJBQUEsR0FBQTRFLElBQUEsQ0FBRyxTQUFBa0MsUUFBT0MsUUFBUTtJQUFBLE9BQUEvRyxtQkFBQSxHQUFBcUIsSUFBQSxVQUFBMkYsU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUE3QixJQUFBLEdBQUE2QixRQUFBLENBQUFyRCxJQUFBO1FBQUE7VUFBQSxJQUM1QnBGLFFBQVEsQ0FBQzBJLGFBQWEsQ0FBQ0gsUUFBUSxDQUFDO1lBQUFFLFFBQUEsQ0FBQXJELElBQUE7WUFBQTtVQUFBO1VBQUFxRCxRQUFBLENBQUFyRCxJQUFBO1VBQUEsT0FDaEMsSUFBSXFCLE9BQU8sQ0FBQyxVQUFDcEMsT0FBTztZQUFBLE9BQUtzRSxxQkFBcUIsQ0FBQ3RFLE9BQU8sQ0FBQztVQUFBLEVBQUM7UUFBQTtVQUFBb0UsUUFBQSxDQUFBckQsSUFBQTtVQUFBO1FBQUE7VUFBQSxPQUFBcUQsUUFBQSxDQUFBeEQsTUFBQSxXQUV6RGpGLFFBQVEsQ0FBQzBJLGFBQWEsQ0FBQ0gsUUFBUSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFFLFFBQUEsQ0FBQTFCLElBQUE7TUFBQTtJQUFBLEdBQUF1QixPQUFBO0VBQUEsQ0FDeEM7RUFBQSxnQkFMS0QsY0FBY0EsQ0FBQU8sRUFBQTtJQUFBLE9BQUF6TCxJQUFBLENBQUErSyxLQUFBLE9BQUFELFNBQUE7RUFBQTtBQUFBLEdBS25CO0FBRU0sU0FBZVksdUJBQXVCQSxDQUFBO0VBQUEsT0FBQUMsd0JBQUEsQ0FBQVosS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUEwQjVDLFNBQUFhLHlCQUFBO0VBQUFBLHdCQUFBLEdBQUFqQixpQkFBQSxlQUFBckcsbUJBQUEsR0FBQTRFLElBQUEsQ0ExQk0sU0FBQTJDLFNBQUE7SUFBQSxJQUFBQyxNQUFBLEVBQUFDLFNBQUEsRUFBQUMsR0FBQSxFQUFBQyxLQUFBLEVBQUFuSyxHQUFBO0lBQUEsT0FBQXdDLG1CQUFBLEdBQUFxQixJQUFBLFVBQUF1RyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXpDLElBQUEsR0FBQXlDLFNBQUEsQ0FBQWpFLElBQUE7UUFBQTtVQUFBLE1BQ0Q5RixRQUFRLENBQUNDLElBQUksS0FBSyxZQUFZLElBQUlELFFBQVEsQ0FBQ2dLLE1BQU0sQ0FBQ3ZMLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFBQXNMLFNBQUEsQ0FBQWpFLElBQUE7WUFBQTtVQUFBO1VBQ3JFNEQsTUFBTSxHQUFHLElBQUlPLGVBQWUsQ0FBQ2pLLFFBQVEsQ0FBQ2dLLE1BQU0sQ0FBQztVQUM3Q0wsU0FBUyxHQUFHRCxNQUFNLENBQUNRLEdBQUcsQ0FBQyxXQUFXLENBQUM7VUFBQUgsU0FBQSxDQUFBakUsSUFBQTtVQUFBLE9BRXZCaUQsY0FBYyxDQUFDLG9DQUFvQyxDQUFDO1FBQUE7VUFBaEVhLEdBQUcsR0FBQUcsU0FBQSxDQUFBdkUsSUFBQTtVQUNUb0UsR0FBRyxhQUFIQSxHQUFHLGVBQUhBLEdBQUcsQ0FBRU8sS0FBSyxDQUFDLENBQUM7VUFBQ0osU0FBQSxDQUFBakUsSUFBQTtVQUFBLE9BQ09pRCxjQUFjLENBQUMsK0NBQStDLENBQUM7UUFBQTtVQUE3RWMsS0FBSyxHQUFBRSxTQUFBLENBQUF2RSxJQUFBO1VBQ1gsSUFBSXFFLEtBQUssRUFBRTtZQUNUTyxVQUFVLENBQUMsWUFBTTtjQUNmO2NBQ0FQLEtBQUssQ0FBQ1EsWUFBWSxDQUFDLE9BQU8sRUFBRVYsU0FBUyxDQUFDOztjQUV0QztjQUNBLElBQU1XLGdCQUFnQixHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7Y0FDckRBLGdCQUFnQixDQUFDckwsT0FBTyxDQUFDLFVBQUNzTCxTQUFTLEVBQUs7Z0JBQ3RDLElBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUNGLFNBQVMsRUFBRTtrQkFBRUcsT0FBTyxFQUFFLElBQUk7a0JBQUVDLFVBQVUsRUFBRTtnQkFBSyxDQUFDLENBQUM7Z0JBQ3ZFZCxLQUFLLENBQUNlLGFBQWEsQ0FBQ0osS0FBSyxDQUFDO2NBQzVCLENBQUMsQ0FBQztZQUNKLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDVDtVQUVNOUssR0FBRyxHQUFHLElBQUltTCxHQUFHLENBQUN2TixNQUFNLENBQUMwQyxRQUFRLENBQUM7VUFDcENOLEdBQUcsQ0FBQ29MLFlBQVksVUFBTyxDQUFDLFdBQVcsQ0FBQztVQUNwQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFdEwsR0FBRyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFxSyxTQUFBLENBQUF0QyxJQUFBO01BQUE7SUFBQSxHQUFBZ0MsUUFBQTtFQUFBLENBRWxDO0VBQUEsT0FBQUQsd0JBQUEsQ0FBQVosS0FBQSxPQUFBRCxTQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDakNELElBQUlzQywwQkFBMEIsR0FBRyxFQUFFO0FBQ25DLElBQUlDLGtCQUFrQixHQUFHLEtBQUs7QUFDOUIsSUFBSUMscUJBQXFCLEdBQUcsUUFBUTtBQUVwQyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQVM7RUFDaEMsSUFBTUMsU0FBUyxHQUFHM0ssUUFBUSxDQUFDNEssZ0JBQWdCLENBQUMsK0JBQStCLENBQUM7RUFFNUVELFNBQVMsQ0FBQ3BNLE9BQU8sQ0FBQyxVQUFDc00sUUFBUSxFQUFLO0lBQzlCLElBQUlBLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsb0NBQW9DLENBQUMsRUFBRTtJQUV2RSxJQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0QsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBQzFELElBQU1LLElBQUksR0FBR0osUUFBUSxDQUFDSyxhQUFhLENBQUN4QyxhQUFhLENBQUMsK0JBQStCLENBQUM7SUFFbEYsSUFBSSxDQUFDdUMsSUFBSSxJQUFJRCxPQUFPLENBQUNoTyxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBRW5DNk4sUUFBUSxDQUFDQyxTQUFTLENBQUNLLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQztJQUU1REgsT0FBTyxDQUFDek0sT0FBTyxDQUFDLFVBQUM2TSxNQUFNLEVBQUs7TUFBQSxJQUFBQyxhQUFBO01BQzFCLElBQU12TCxFQUFFLElBQUF1TCxhQUFBLEdBQUdELE1BQU0sQ0FBQ25KLEtBQUssY0FBQW9KLGFBQUEsZ0JBQUFBLGFBQUEsR0FBWkEsYUFBQSxDQUFjcE4sS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFBb04sYUFBQSx1QkFBeEJBLGFBQUEsQ0FBMkIsQ0FBQyxDQUFDO01BQ3hDLElBQUksQ0FBQ3ZMLEVBQUUsRUFBRTtNQUVUc0wsTUFBTSxDQUFDN0osZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDckMsSUFBTXZDLEdBQUcsR0FBRyxJQUFJbUwsR0FBRyxDQUFDN0ssUUFBUSxDQUFDMEIsSUFBSSxDQUFDO1FBQ2xDaEMsR0FBRyxDQUFDb0wsWUFBWSxDQUFDa0IsR0FBRyxDQUFDLElBQUksRUFBRXhMLEVBQUUsQ0FBQztRQUM5QixJQUFJbUwsSUFBSSxDQUFDTSxTQUFTLENBQUN4TixRQUFRLENBQUMrQixFQUFFLENBQUMsRUFBRTtRQUVqQ21MLElBQUksQ0FBQ00sU0FBUyxNQUFBM0wsTUFBQSxDQUFNcUwsSUFBSSxDQUFDTSxTQUFTLGlCQUFBM0wsTUFBQSxDQUFhWixHQUFHLENBQUNnQyxJQUFJLHdEQUFBcEIsTUFBQSxDQUFnREUsRUFBRSxTQUFNO01BQ2pILENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxJQUFNMEwsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7RUFDMUIsSUFBTUMsV0FBVyxHQUFHLEdBQUc7RUFDdkJ6TCxRQUFRLENBQUMwTCxNQUFNLGtDQUFBOUwsTUFBQSxDQUFrQzZMLFdBQVcsb0RBQWlEO0VBQzdHekwsUUFBUSxDQUFDMEksYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUNsSSxLQUFLLENBQUNtTCxLQUFLLE1BQUEvTCxNQUFBLENBQU02TCxXQUFXLE9BQUk7RUFDNUV6TCxRQUFRLENBQUMwSSxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQ2xJLEtBQUssQ0FBQ29MLElBQUksTUFBQWhNLE1BQUEsQ0FBTTZMLFdBQVcsT0FBSTtFQUNoRixJQUFNSSxNQUFNLEdBQUc3TCxRQUFRLENBQUMwSSxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDdkRtRCxNQUFNLENBQUNyTCxLQUFLLENBQUNtTCxLQUFLLEdBQUdHLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDckwsS0FBSyxDQUFDbUwsS0FBSyxDQUFDLEdBQUdGLFdBQVcsR0FBR0ssUUFBUSxDQUFDRCxNQUFNLENBQUNyTCxLQUFLLENBQUNvTCxJQUFJLENBQUMsR0FBRyxJQUFJO0VBQ3BHQyxNQUFNLENBQUNyTCxLQUFLLENBQUNvTCxJQUFJLE1BQUFoTSxNQUFBLENBQU02TCxXQUFXLE9BQUk7QUFDeEMsQ0FBQztBQUVELElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7RUFDekIsSUFBTUMsWUFBWSxHQUFHaE0sUUFBUSxDQUFDNEssZ0JBQWdCLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDN0UsSUFBTXFCLFdBQVcsR0FBR0QsWUFBWSxDQUFDZCxhQUFhLENBQUN4QyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ25FdUQsV0FBVyxJQUFJQSxXQUFXLENBQUN4QyxLQUFLLENBQUMsQ0FBQztFQUNsQ3VDLFlBQVksSUFBSUEsWUFBWSxDQUFDZCxhQUFhLElBQUljLFlBQVksQ0FBQ2QsYUFBYSxDQUFDZ0IsY0FBYyxDQUFDLENBQUM7QUFDM0YsQ0FBQztBQUVELElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUEsRUFBUztFQUNsQyxPQUFPbk0sUUFBUSxDQUFDMEksYUFBYSxDQUFDLCtCQUErQixDQUFDLENBQUNoSSxTQUFTO0FBQzFFLENBQUM7QUFFRCxJQUFNMEwscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBQSxFQUFTO0VBQ2xDLE9BQU9wTSxRQUFRLENBQUMwSSxhQUFhLENBQUMsa0VBQWtFLENBQUMsQ0FBQ3pHLEtBQUs7QUFDekcsQ0FBQztBQUVELElBQU1vSyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3hCLElBQU1DLFlBQVksR0FBR0gscUJBQXFCLENBQUMsQ0FBQztFQUM1QyxJQUFJRyxZQUFZLEtBQUsvQiwwQkFBMEIsRUFBRTtFQUNqREEsMEJBQTBCLEdBQUcrQixZQUFZO0VBRXpDLElBQUlDLFlBQVksR0FBR3ZNLFFBQVEsQ0FBQzBJLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFDMUQsSUFBSThELGFBQWEsR0FBR3hNLFFBQVEsQ0FBQzBJLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUU1RCxJQUFJLENBQUM2RCxZQUFZLEVBQUU7SUFDakJBLFlBQVksR0FBR3ZNLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUMxQ21NLFlBQVksQ0FBQ3pNLEVBQUUsR0FBRyxjQUFjO0lBQ2hDRSxRQUFRLENBQUMwSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNwSSxXQUFXLENBQUNpTSxZQUFZLENBQUM7SUFDeERDLGFBQWEsR0FBR3hNLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUMvQ29NLGFBQWEsQ0FBQzFNLEVBQUUsR0FBRyxlQUFlO0lBQ2xDRSxRQUFRLENBQUMwSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNwSSxXQUFXLENBQUNrTSxhQUFhLENBQUM7RUFDM0Q7RUFFQUQsWUFBWSxDQUFDdkwsSUFBSSwwSEFBQXBCLE1BQUEsQ0FBMEh3TSxxQkFBcUIsQ0FBQyxDQUFDLE1BQUc7RUFDcktHLFlBQVksQ0FBQ2hCLFNBQVMsR0FBR2UsWUFBWTtFQUVyQ0UsYUFBYSxDQUFDakIsU0FBUyw2bUJBcUJwQjtBQUNMLENBQUM7QUFFRCxJQUFNa0IseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUF5QkEsQ0FBQSxFQUFTO0VBQ3RDek0sUUFBUSxDQUNMNEssZ0JBQWdCLENBQUMsc0VBQXNFLENBQUMsQ0FDeEZyTSxPQUFPLENBQUMsVUFBQ21PLE9BQU8sRUFBSztJQUNwQixJQUFJQSxPQUFPLENBQUNDLFlBQVksS0FBSyxHQUFHLEVBQUU7TUFDaENELE9BQU8sQ0FBQ2xNLEtBQUssQ0FBQ29NLE1BQU0sR0FBRyxPQUFPO0lBQ2hDO0VBQ0YsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUEsRUFBUztFQUNqQyxJQUFNQyxJQUFJLEdBQUc5TSxRQUFRLENBQUM0SyxnQkFBZ0IsQ0FBQyx3Q0FBd0MsQ0FBQztFQUNoRixJQUFJa0MsSUFBSSxDQUFDOVAsTUFBTSxLQUFLLENBQUMsRUFBRTtFQUV2QixJQUFJLENBQUNnRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO0lBQ3BELElBQU1PLEtBQUssR0FBR1IsUUFBUSxDQUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzdDSSxLQUFLLENBQUNWLEVBQUUsR0FBRyxzQkFBc0I7SUFDakNVLEtBQUssQ0FBQytLLFNBQVMsZ0hBRWQ7SUFDRHZMLFFBQVEsQ0FBQzBJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ3BJLFdBQVcsQ0FBQ0UsS0FBSyxDQUFDO0VBQ25EO0VBRUFzTSxJQUFJLENBQUN2TyxPQUFPLENBQUMsVUFBQ1csR0FBRyxFQUFLO0lBQ3BCLElBQUlBLEdBQUcsQ0FBQzRMLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7SUFFOUM3TCxHQUFHLENBQUM0TCxTQUFTLENBQUNLLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNuQ2pNLEdBQUcsQ0FBQ3lLLFlBQVksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO0lBRXJDekssR0FBRyxDQUFDcUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDeEMsSUFBSSxDQUFDZixLQUFLLENBQUNvTSxNQUFNLEdBQUcsT0FBTztNQUMzQixJQUFJLENBQUNwTSxLQUFLLENBQUN1TSxRQUFRLEdBQUcsTUFBTTtNQUM1QixJQUFJLENBQUN2TSxLQUFLLENBQUN3TSxVQUFVLEdBQUcsTUFBTTtJQUNoQyxDQUFDLENBQUM7SUFFRjlOLEdBQUcsQ0FBQ3FDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFZO01BQ3ZDLElBQUksQ0FBQ2YsS0FBSyxjQUFBWixNQUFBLENBQWM2SyxxQkFBcUIsQ0FBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELElBQU13QyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBUztFQUM1QixJQUFNQyxXQUFXLEdBQUdsTixRQUFRLENBQUMwSSxhQUFhLENBQUMsc0JBQXNCLENBQUM7RUFDbEUsSUFBSSxDQUFDd0UsV0FBVyxFQUFFO0VBQ2xCLElBQUlDLFlBQVksR0FBR25OLFFBQVEsQ0FDeEIwSSxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FDckN3QyxhQUFhLENBQUN4QyxhQUFhLENBQUMsMkJBQTJCLENBQUM7RUFDM0QsSUFBSSxDQUFDeUUsWUFBWSxFQUFFO0VBQ25CQSxZQUFZLENBQUMzTSxLQUFLLGNBQUFaLE1BQUEsQ0FBYzZLLHFCQUFxQixDQUFFO0FBQ3pELENBQUM7QUFFRCxJQUFNMkMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBSUMsUUFBUSxFQUFLO0VBQ3pDLElBQUlDLElBQUksR0FBR3ROLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUN6Q2tOLElBQUksQ0FBQzVNLFNBQVMsR0FBRzJNLFFBQVEsQ0FBQ0UsS0FBSztFQUMvQixPQUFPRCxJQUFJO0FBQ2IsQ0FBQztBQUVELElBQU1FLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBeUJBLENBQUlILFFBQVEsRUFBSztFQUM5QyxJQUFJSSxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDeFAsS0FBSyxDQUFDLEdBQUcsQ0FBQztFQUNuQ3dQLElBQUksQ0FBQzlHLEdBQUcsQ0FBQyxDQUFDO0VBQ1Y4RyxJQUFJLEdBQUdBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUNyQkQsSUFBSSxNQUFBN04sTUFBQSxDQUFNNk4sSUFBSSxPQUFJO0VBQ2xCLElBQUlILElBQUksR0FBR3ROLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUN6Q2tOLElBQUksQ0FBQ0ssU0FBUyxHQUFHLG9EQUFvRDtFQUNyRUwsSUFBSSxDQUFDNU0sU0FBUyxHQUFHK00sSUFBSTtFQUNyQixPQUFPSCxJQUFJO0FBQ2IsQ0FBQztBQUVELElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7RUFDekIsSUFBSUMsY0FBYyxHQUFHN04sUUFBUSxDQUFDMEksYUFBYSxDQUFDLDJDQUEyQyxDQUFDO0VBRXhGLElBQUksQ0FBQ21GLGNBQWMsRUFBRTtJQUNuQkEsY0FBYyxHQUFHN04sUUFBUSxDQUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ2hEeU4sY0FBYyxDQUFDL04sRUFBRSxHQUFHLDBDQUEwQztJQUM5REUsUUFBUSxDQUFDMEksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDcEksV0FBVyxDQUFDdU4sY0FBYyxDQUFDO0lBQzFEQSxjQUFjLENBQUN0QyxTQUFTLDR1REE4RHBCO0VBQ047RUFFQXVDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUN4RSxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQUFyTSxJQUFBLEVBQW1CO0lBQUEsSUFBaEI4USxTQUFTLEdBQUE5USxJQUFBLENBQVQ4USxTQUFTO0lBQy9DQSxTQUFTLEdBQUdBLFNBQVMsSUFBSSxFQUFFO0lBQzNCLElBQUlBLFNBQVMsQ0FBQ2pSLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDeEJpUixTQUFTLEdBQUdBLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNuTixDQUFDLEVBQUVvTixDQUFDO1FBQUEsT0FBTXBOLENBQUMsQ0FBQzBNLElBQUksR0FBR1UsQ0FBQyxDQUFDVixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBQztJQUNsRTtJQUVBLElBQU1XLE9BQU8sR0FBR3BPLFFBQVEsQ0FBQzBJLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztJQUNoRSxJQUFJMkYsR0FBRyxHQUFHck8sUUFBUSxDQUFDMEksYUFBYSxDQUFDLHNDQUFzQyxDQUFDO0lBQ3hFLElBQUk0RixLQUFLLEdBQUd0TyxRQUFRLENBQUMwSSxhQUFhLENBQUMsMkNBQTJDLENBQUM7SUFFL0UsSUFBSSxDQUFDMkYsR0FBRyxFQUFFO01BQ1JBLEdBQUcsR0FBR3JPLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLElBQUksQ0FBQztNQUNsQ2lPLEdBQUcsQ0FBQ3ZPLEVBQUUsR0FBRyxxQ0FBcUM7TUFDOUN1TyxHQUFHLENBQUMzTixTQUFTLEdBQUcsV0FBVztNQUMzQjBOLE9BQU8sQ0FBQ0csWUFBWSxDQUFDRixHQUFHLEVBQUVELE9BQU8sQ0FBQ0ksVUFBVSxDQUFDO01BQzdDSCxHQUFHLENBQUM5TSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUNsQ2lKLGtCQUFrQixHQUFHLENBQUNBLGtCQUFrQjtRQUN4Q29ELFlBQVksQ0FBQyxDQUFDO01BQ2hCLENBQUMsQ0FBQztJQUNKO0lBRUEsSUFBSSxDQUFDcEQsa0JBQWtCLElBQUk4RCxLQUFLLEVBQUU7TUFDaENELEdBQUcsQ0FBQ0ksV0FBVyxDQUFDSCxLQUFLLENBQUM7SUFDeEI7SUFFQSxJQUFJOUQsa0JBQWtCLEVBQUU7TUFDdEIsSUFBSSxDQUFDOEQsS0FBSyxFQUFFO1FBQ1ZBLEtBQUssR0FBR3RPLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNyQ2tPLEtBQUssQ0FBQ3hPLEVBQUUsR0FBRywwQ0FBMEM7UUFDckR1TyxHQUFHLENBQUMvTixXQUFXLENBQUNnTyxLQUFLLENBQUM7TUFDeEI7TUFFQUwsU0FBUyxDQUFDMVAsT0FBTyxDQUFDLFVBQUM4TyxRQUFRLEVBQUs7UUFDOUIsSUFBSTdKLENBQUMsR0FBR3hELFFBQVEsQ0FBQzBJLGFBQWEsb0RBQUE5SSxNQUFBLENBQW1EeU4sUUFBUSxDQUFDSSxJQUFJLFFBQUksQ0FBQztRQUVuRyxJQUFJLENBQUNqSyxDQUFDLEVBQUU7VUFDTkEsQ0FBQyxHQUFHeEQsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO1VBQ2pDb0QsQ0FBQyxDQUFDbUssU0FBUyxHQUFHLDhDQUE4QztVQUM1RG5LLENBQUMsQ0FBQ21HLFlBQVksQ0FBQyw4Q0FBOEMsRUFBRTBELFFBQVEsQ0FBQ0ksSUFBSSxDQUFDO1VBRTdFakssQ0FBQyxDQUFDakMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07WUFDaEMzRSxNQUFNLENBQUMwQyxRQUFRLENBQUMwQixJQUFJLE1BQUFwQixNQUFBLENBQU1OLFFBQVEsQ0FBQ29QLE1BQU0sRUFBQTlPLE1BQUEsQ0FBR04sUUFBUSxDQUFDK0IsUUFBUSxrQkFBQXpCLE1BQUEsQ0FBZXlOLFFBQVEsQ0FBQ0ksSUFBSSxDQUFFO1VBQzdGLENBQUMsQ0FBQztVQUVGakssQ0FBQyxDQUFDbEQsV0FBVyxDQUFDa04seUJBQXlCLENBQUNILFFBQVEsQ0FBQyxDQUFDO1VBQ2xEN0osQ0FBQyxDQUFDbEQsV0FBVyxDQUFDOE0sb0JBQW9CLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1VBRTdDLElBQUluTixNQUFNLEdBQUdGLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE1BQU0sQ0FBQztVQUMzQ0YsTUFBTSxDQUFDeU4sU0FBUyxHQUFHLG9EQUFvRDtVQUN2RXpOLE1BQU0sQ0FBQ1EsU0FBUyxHQUFHLEdBQUc7VUFDdEJSLE1BQU0sQ0FBQ3FCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1lBQ3JDME0sU0FBUyxHQUFHQSxTQUFTLENBQUNVLE1BQU0sQ0FBQyxVQUFDbkwsQ0FBQztjQUFBLE9BQUtBLENBQUMsS0FBSzZKLFFBQVE7WUFBQSxFQUFDO1lBQ25EUyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDMUMsR0FBRyxDQUFDO2NBQUUyQyxTQUFTLEVBQVRBO1lBQVUsQ0FBQyxDQUFDO1lBQ3RDSyxLQUFLLENBQUNHLFdBQVcsQ0FBQ2pMLENBQUMsQ0FBQztZQUNwQm9LLFlBQVksQ0FBQyxDQUFDO1VBQ2hCLENBQUMsQ0FBQztVQUVGcEssQ0FBQyxDQUFDbEQsV0FBVyxDQUFDSixNQUFNLENBQUM7VUFDckJvTyxLQUFLLENBQUNoTyxXQUFXLENBQUNrRCxDQUFDLENBQUM7UUFDdEI7TUFDRixDQUFDLENBQUM7TUFFRixJQUFJb0wsWUFBWSxHQUFHNU8sUUFBUSxDQUFDMEksYUFBYSxzREFBQTlJLE1BQUEsQ0FDYXdNLHFCQUFxQixDQUFDLENBQUMsUUFDN0UsQ0FBQztNQUNELElBQUl5QyxTQUFTLEdBQUc3TyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxxREFBcUQsQ0FBQztNQUU5RixJQUFJNE8sU0FBUyxFQUFFUCxLQUFLLENBQUNHLFdBQVcsQ0FBQ0ksU0FBUyxDQUFDO01BRTNDLElBQUksQ0FBQ0QsWUFBWSxFQUFFO1FBQ2pCQyxTQUFTLEdBQUc3TyxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDekN5TyxTQUFTLENBQUMvTyxFQUFFLEdBQUcscURBQXFEO1FBQ3BFK08sU0FBUyxDQUFDbk8sU0FBUyxVQUFBZCxNQUFBLENBQVV1TSxxQkFBcUIsQ0FBQyxDQUFDLFFBQUs7UUFDekQwQyxTQUFTLENBQUN0TixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ3VOLEVBQUUsRUFBSztVQUMxQ2IsU0FBUyxDQUFDM1AsSUFBSSxDQUFDO1lBQ2JpUCxLQUFLLEVBQUVwQixxQkFBcUIsQ0FBQyxDQUFDO1lBQzlCc0IsSUFBSSxFQUFFckIscUJBQXFCLENBQUM7VUFDOUIsQ0FBQyxDQUFDO1VBQ0YwQixNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDMUMsR0FBRyxDQUFDO1lBQUUyQyxTQUFTLEVBQVRBO1VBQVUsQ0FBQyxDQUFDO1VBQ3RDTCxZQUFZLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFRlUsS0FBSyxDQUFDaE8sV0FBVyxDQUFDdU8sU0FBUyxDQUFDO01BQzlCO0lBQ0Y7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQSxFQUFTO0VBQUEsSUFBQUMscUJBQUE7RUFDOUIsSUFBSUMsSUFBSSxJQUFBRCxxQkFBQSxHQUFHaFAsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDLGNBQUErTyxxQkFBQSx1QkFBdkNBLHFCQUFBLENBQXlDdEcsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN4RSxJQUFJd0csU0FBUyxHQUFHLENBQUFELElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFek8sS0FBSyxDQUFDMk8sT0FBTyxNQUFLLE1BQU07RUFDOUMsSUFBTUMsS0FBSyxHQUFHSCxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRXZHLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztFQUVsRSxJQUFJdUcsSUFBSSxhQUFKQSxJQUFJLGVBQUpBLElBQUksQ0FBRW5QLEVBQUUsSUFBSW9QLFNBQVMsSUFBSUUsS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQzFHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO0lBQzlFLElBQU0yRyxFQUFFLEdBQUdyUCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdkNpUCxFQUFFLENBQUN2UCxFQUFFLEdBQUcsaUJBQWlCO0lBQ3pCLElBQU13UCxHQUFHLEdBQUd0UCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDeEMsSUFBTW1QLEdBQUcsR0FBR3ZQLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLElBQUksQ0FBQztJQUN4QyxJQUFNSSxLQUFLLEdBQUdSLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUM3QyxJQUFNK0ksS0FBSyxHQUFHbkosUUFBUSxDQUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzdDK0ksS0FBSyxDQUFDUSxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztJQUMxQ1IsS0FBSyxDQUFDUSxZQUFZLENBQUMsU0FBUyxFQUFFLHVDQUF1QyxDQUFDO0lBQ3RFUixLQUFLLENBQUNsSCxLQUFLLEdBQUcsVUFBVSxHQUFHZ04sSUFBSSxDQUFDblAsRUFBRSxDQUFDMFAsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPO0lBRXBFRixHQUFHLENBQUM1TyxTQUFTLEdBQUcsY0FBYztJQUM5QjZPLEdBQUcsQ0FBQ2pQLFdBQVcsQ0FBQzZJLEtBQUssQ0FBQztJQUN0QmtHLEVBQUUsQ0FBQy9PLFdBQVcsQ0FBQ2dQLEdBQUcsQ0FBQztJQUNuQkQsRUFBRSxDQUFDL08sV0FBVyxDQUFDaVAsR0FBRyxDQUFDO0lBQ25CSCxLQUFLLENBQUM5TyxXQUFXLENBQUMrTyxFQUFFLENBQUM7RUFDdkI7QUFDRixDQUFDO0FBRUQsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUN2QixJQUFJblEsUUFBUSxDQUFDQyxJQUFJLENBQUM2QixRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7SUFDM0MsSUFBSTlCLFFBQVEsQ0FBQytCLFFBQVEsS0FBSyxvREFBb0QsRUFBRTtNQUM5RW1LLGFBQWEsQ0FBQyxDQUFDO01BQ2ZPLFlBQVksQ0FBQyxDQUFDO01BQ2RNLFdBQVcsQ0FBQyxDQUFDO01BQ2JxRCxXQUFXLENBQUNoRixtQkFBbUIsRUFBRSxHQUFHLENBQUM7TUFDckNnRixXQUFXLENBQUNqRCx5QkFBeUIsRUFBRSxHQUFHLENBQUM7TUFDM0NpRCxXQUFXLENBQUM3QyxvQkFBb0IsRUFBRSxHQUFHLENBQUM7TUFDdEM2QyxXQUFXLENBQUNyRCxXQUFXLEVBQUUsR0FBRyxDQUFDO01BRTdCcUQsV0FBVyxDQUFDekMsZUFBZSxFQUFFLEdBQUcsQ0FBQztNQUVqQ1csWUFBWSxDQUFDLENBQUM7TUFDZDVOLFFBQVEsQ0FBQ3VCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUFBLE9BQU1tSSxVQUFVLENBQUNrRSxZQUFZLEVBQUUsR0FBRyxDQUFDO01BQUEsRUFBQztJQUN6RTtJQUVBLElBQUl0TyxRQUFRLENBQUMrQixRQUFRLEtBQUssNkRBQTZELEVBQUU7TUFDdkZxTyxXQUFXLENBQUNYLGlCQUFpQixFQUFFLEdBQUcsQ0FBQztJQUNyQztFQUNGO0FBQ0YsQ0FBQztBQUVNLFNBQVNZLCtCQUErQkEsQ0FBQSxFQUFHO0VBQ2hELElBQUkzUCxRQUFRLENBQUM0UCxVQUFVLEtBQUssVUFBVSxJQUFJNVAsUUFBUSxDQUFDNFAsVUFBVSxLQUFLLGFBQWEsRUFBRTtJQUMvRTtJQUNBSCxVQUFVLENBQUMsQ0FBQztFQUNkLENBQUMsTUFBTTtJQUNMO0lBQ0F6UCxRQUFRLENBQUN1QixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRWtPLFVBQVUsQ0FBQztFQUMzRDtBQUNGOzs7Ozs7VUNoWUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjJEO0FBQ0k7QUFDZ0I7QUFFL0V0Tyx3RUFBcUIsQ0FBQyxDQUFDO0FBQ3ZCMEgsNEVBQXVCLENBQUMsQ0FBQztBQUN6QjhHLDRGQUErQixDQUFDLENBQUM7QUFFakMsSUFBSXJRLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDNkIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO0VBQzNDcEIsUUFBUSxDQUFDdUIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVV1SSxLQUFLLEVBQUU7SUFDcEQsSUFBSUEsS0FBSyxDQUFDMU0sR0FBRyxLQUFLLElBQUksRUFBRTtNQUN0QjtNQUNBeVMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO01BRXZCL0IsTUFBTSxDQUFDZ0MsT0FBTyxDQUFDQyxXQUFXLENBQUM7UUFBRUMsTUFBTSxFQUFFO01BQWlCLENBQUMsRUFBRSxVQUFVQyxRQUFRLEVBQUU7UUFDM0VDLE9BQU8sQ0FBQ3RJLEtBQUssQ0FBQyw2QkFBNkIsRUFBRXFJLFFBQVEsQ0FBQztNQUN4RCxDQUFDLENBQUM7SUFDSjtFQUNGLENBQUMsQ0FBQztBQUNKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL0RzRmluZERpY3Rpb25hcnkuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9HaXRIdWJDcmVhdGVCcmFuY2guanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9TaXRlY29yZUxheW91dEltcHJvdmVtZW50cy5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpbmRUZXh0SW5EaWN0aW9uYXJpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFN0cmluZyA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKHNlYXJjaFN0cmluZz8ubGVuZ3RoID4gNCkge1xuICAgIGxldCByZXN1bHRzID0ge307XG5cbiAgICBjb25zdCBvdXRwdXQgPSAoeyBrZXksIGtleTIsIGtleTMsIGtleTQsIGtleTUsIGtleTYsIGtleTcsIGtleTgsIHJlcywgZGljdGlvbmFyeUtleSB9KSA9PiB7XG4gICAgICBrZXkgPSBrZXkgPyBrZXkgKyAnLycgOiAnJztcbiAgICAgIGtleTIgPSBrZXkyID8ga2V5MiArICcvJyA6ICcnO1xuICAgICAga2V5MyA9IGtleTMgPyBrZXkzICsgJy8nIDogJyc7XG4gICAgICBrZXk0ID0ga2V5NCA/IGtleTQgKyAnLycgOiAnJztcbiAgICAgIGtleTUgPSBrZXk1ID8ga2V5NSArICcvJyA6ICcnO1xuICAgICAga2V5NiA9IGtleTYgPyBrZXk2ICsgJy8nIDogJyc7XG4gICAgICBrZXk3ID0ga2V5NyA/IGtleTcgKyAnLycgOiAnJztcbiAgICAgIGtleTggPSBrZXk4ID8ga2V5OCArICcvJyA6ICcnO1xuXG4gICAgICBjb25zdCBpc0RsbyA9IGRpY3Rpb25hcnlLZXkuaW5jbHVkZXMoJy1ETE8tJyk7XG5cbiAgICAgIGNvbnN0IHJlZ2lvbiA9IGRpY3Rpb25hcnlLZXkuc3BsaXQoJ3BhdGg9LycpWzFdLnNwbGl0KCcmJylbMF0gKyAnLyc7XG5cbiAgICAgIHJlc3VsdHNbcmVnaW9uICsga2V5MiArIGtleTMgKyBrZXk0ICsga2V5NSArIGtleTYgKyBrZXk3ICsga2V5OF0gPSB7XG4gICAgICAgIGlzRGxvLFxuICAgICAgICByZXMsXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBsZXQgaW5kZXhLZXkgPSAwO1xuICAgIGNvbnN0IGRpY3Rpb25hcnlLZXlzID0gW107XG5cbiAgICB3aGlsZSAobG9jYWxTdG9yYWdlLmtleShpbmRleEtleSkpIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGluZGV4S2V5KTtcblxuICAgICAgaWYgKHN0b3JhZ2VLZXkuaW5jbHVkZXMoJy9kbG8vc2NhcGkvY29tbW9uL2RpY3Rpb25hcnkvZGljdGlvbmFyeScpKSB7XG4gICAgICAgIGRpY3Rpb25hcnlLZXlzLnB1c2goc3RvcmFnZUtleSk7XG4gICAgICB9XG5cbiAgICAgIGluZGV4S2V5Kys7XG4gICAgfVxuXG4gICAgZGljdGlvbmFyeUtleXMuZm9yRWFjaCgoZGljdGlvbmFyeUtleSkgPT4ge1xuICAgICAgY29uc3QgcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGljdGlvbmFyeUtleSkpO1xuXG4gICAgICBpZiAodHlwZW9mIHMgIT09ICdvYmplY3QnKSByZXR1cm47XG5cbiAgICAgIE9iamVjdC5rZXlzKHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIXNba2V5XSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc1trZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChzW2tleV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgIHJlczogc1trZXldLFxuICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc1trZXldKS5mb3JFYWNoKChrZXkyKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoc1trZXldW2tleTJdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdLFxuICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXSkuZm9yRWFjaCgoa2V5MykgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M10gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M10udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M10sXG4gICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXVtrZXkzXSkuZm9yRWFjaCgoa2V5NCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdW2tleTRdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgICBrZXk0LFxuICAgICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XSxcbiAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XSkuZm9yRWFjaCgoa2V5NSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgICAgIGtleTQsXG4gICAgICAgICAgICAgICAgICAgICAga2V5NSxcbiAgICAgICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XSxcbiAgICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV0pLmZvckVhY2goKGtleTYpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTQsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk1LFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5NixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl0pLmZvckVhY2goKGtleTcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl1ba2V5N10gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl1ba2V5N10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl1ba2V5N10pLmZvckVhY2goKGtleTgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XVtrZXk4XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl1ba2V5N11ba2V5OF0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl1ba2V5N11ba2V5OF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGVudCA9IFtdO1xuICAgIGlmIChPYmplY3Qua2V5cyhyZXN1bHRzKS5sZW5ndGggPiAxNTApIHJldHVybjtcbiAgICBPYmplY3Qua2V5cyhyZXN1bHRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IGdldERpY3Rpb25hcnlVcmwocmVzdWx0c1trZXldLmlzRGxvKSArIGtleTtcbiAgICAgIGNvbnRlbnQucHVzaCh7IHR4dDogcmVzdWx0c1trZXldLnJlcywgdXJsLCBrZXkgfSk7XG4gICAgfSk7XG5cbiAgICBmaWxsRGljdGlvbmFyeShjb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBjbGVhckZpbGxEaWN0aW9uYXJ5KCk7XG4gIH1cbn07XG5cbmNvbnN0IGdldERpY3Rpb25hcnlVcmwgPSAoaXNEbG8pID0+IHtcbiAgY29uc3QgaG9zdFBhcnRzID0gbG9jYXRpb24uaG9zdC5zcGxpdCgnLicpO1xuICBjb25zdCBwcm90b2NvbCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJztcbiAgY29uc3QgaXNUb3duRW52ID0gaG9zdFBhcnRzWzBdLmluY2x1ZGVzKCd0b3duJyk7XG4gIGNvbnN0IGlzRGV2RW52ID0gaG9zdFBhcnRzWzBdLmluY2x1ZGVzKCd3ZWInKTtcbiAgbGV0IGVudlBhcnQ7XG5cbiAgaWYgKGlzRGV2RW52KSB7XG4gICAgZW52UGFydCA9IGB3ZWIuJHtob3N0UGFydHNbMV19YDtcbiAgfSBlbHNlIGlmIChpc1Rvd25FbnYpIHtcbiAgICBlbnZQYXJ0ID0gYCR7aG9zdFBhcnRzWzBdfWVkaXQke2lzRGxvID8gJ2RsbycgOiAnZGxpJ31gO1xuICB9IGVsc2Uge1xuICAgIGVudlBhcnQgPSBgZWRpdCR7aXNEbG8gPyAnZGxvJyA6ICdkbGknfWA7XG4gIH1cblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtlbnZQYXJ0fS5kYW5za2VzcGlsLmRrL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50JTIwRWRpdG9yLmFzcHg/c2NfYnc9MSZmbz0vc2l0ZWNvcmUvY29udGVudC9EYW5za2VTcGlsL1NpdGUlMjBzZXR0aW5ncy9EaWN0aW9uYXJ5L2A7XG59O1xuXG5jb25zdCBjbGVhckZpbGxEaWN0aW9uYXJ5ID0gKCkgPT4ge1xuICBjb25zdCByZW1vdmVFbGVtZW50QnlJZCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChlbCkgZWwucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmVtb3ZlRWxlbWVudEJ5SWQoJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMnKTtcbiAgcmVtb3ZlRWxlbWVudEJ5SWQoJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXNTdHlsZScpO1xufTtcblxuY29uc3QgZW5zdXJlRWxlbWVudCA9IChpZCwgY3JlYXRlRWxlbWVudCkgPT4ge1xuICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGlmICghZWwpIHtcbiAgICBlbCA9IGNyZWF0ZUVsZW1lbnQoKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgfVxuICByZXR1cm4gZWw7XG59O1xuXG5jb25zdCBzZXRTdHlsZSA9IChzdHlsZSwgY3NzKSA9PiB7XG4gIHN0eWxlLmlubmVyVGV4dCA9IGNzcztcbn07XG5cbmNvbnN0IGZpbGxEaWN0aW9uYXJ5ID0gKGNvbnRlbnQpID0+IHtcbiAgY29uc3QgZWwgPSBlbnN1cmVFbGVtZW50KCdmaW5kVGV4dEluRGljdGlvbmFyaWVzJywgKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pZCA9ICdmaW5kVGV4dEluRGljdGlvbmFyaWVzJztcbiAgICByZXR1cm4gZGl2O1xuICB9KTtcbiAgZWwuaW5uZXJUZXh0ID0gJyc7XG5cbiAgY29uc3Qgc3R5bGUgPSBlbnN1cmVFbGVtZW50KCdmaW5kVGV4dEluRGljdGlvbmFyaWVzU3R5bGUnLCAoKSA9PiB7XG4gICAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGVFbC5pZCA9ICdmaW5kVGV4dEluRGljdGlvbmFyaWVzU3R5bGUnO1xuICAgIHJldHVybiBzdHlsZUVsO1xuICB9KTtcblxuICBzZXRTdHlsZShcbiAgICBzdHlsZSxcbiAgICBgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgei1pbmRleDogMTAwMDAwMDAwMTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMTAwdmg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VkZWRlZDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMTNweCAxcHggI2NjYztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICAgICAgICAgIG1heC13aWR0aDogOTV2dztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXM6OmFmdGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTAwMDAwMDAwMDtcbiAgICAgICAgICBjb250ZW50OiBcIiR7Y29udGVudC5sZW5ndGh9XCI7XG4gICAgICAgICAgdG9wOiAtMzVweDtcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmRmZmU1O1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAwIDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzOmhvdmVyIHtcbiAgICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllcyBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzIGE6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllcyBwIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMgYSB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGBcbiAgKTtcblxuICBjb250ZW50LmZvckVhY2goKHsgdHh0LCB1cmwsIGtleSB9KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHAuaW5uZXJUZXh0ID0gdHh0O1xuICAgIGEuaHJlZiA9IHVybDtcbiAgICBhLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGEudGV4dCA9IGtleTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGEpO1xuICAgIGVsLmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRHNGaW5kRGljdGlvbmFyeSgpIHtcbiAgaWYgKGxvY2F0aW9uLmhvc3QuZW5kc1dpdGgoJ2RhbnNrZXNwaWwuZGsnKSAmJiAhbG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL3NpdGVjb3JlLycpKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZmluZFRleHRJbkRpY3Rpb25hcmllcyk7XG4gIH1cbn1cbiIsImNvbnN0IHdhaXRGb3JFbGVtZW50ID0gYXN5bmMgKHNlbGVjdG9yKSA9PiB7XG4gIHdoaWxlICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpKTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0dXBHaXRodWJDcmVhdGVCcmFuY2goKSB7XG4gIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnZ2l0aHViLmNvbScgJiYgbG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCc/bmV3QnJhbmNoPScpKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgIGNvbnN0IG5ld0JyYW5jaCA9IHBhcmFtcy5nZXQoJ25ld0JyYW5jaCcpO1xuXG4gICAgY29uc3QgY3RhID0gYXdhaXQgd2FpdEZvckVsZW1lbnQoJ1thcHAtbmFtZT1cInJlcG9zLWJyYW5jaGVzXCJdIGJ1dHRvbicpO1xuICAgIGN0YT8uY2xpY2soKTtcbiAgICBjb25zdCBpbnB1dCA9IGF3YWl0IHdhaXRGb3JFbGVtZW50KCdbcm9sZT1kaWFsb2ddW2RhdGEtZm9jdXMtdHJhcD1cImFjdGl2ZVwiXSBpbnB1dCcpO1xuICAgIGlmIChpbnB1dCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFNldCB0aGUgdmFsdWUgYXR0cmlidXRlIGRpcmVjdGx5XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdCcmFuY2gpO1xuXG4gICAgICAgIC8vIERpc3BhdGNoIGV2ZW50c1xuICAgICAgICBjb25zdCBldmVudHNUb0Rpc3BhdGNoID0gWydpbnB1dCcsICdjaGFuZ2UnLCAna2V5dXAnXTtcbiAgICAgICAgZXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudChldmVudFR5cGUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgnbmV3QnJhbmNoJyk7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpO1xuICB9XG59XG4iLCJsZXQgcHJldmlvdXNTZWxlY3RlZFNpdGVjb3JlSWQgPSAnJztcbmxldCBzaG93RmF2b3JpdGVzUG9wdXAgPSBmYWxzZTtcbmxldCBkZWZhdWx0VGV4dEFyZWFIZWlnaHQgPSAnNTAwcHg7JztcblxuY29uc3QgYWRkVXJsVG9UcmVlTGlzdElkcyA9ICgpID0+IHtcbiAgY29uc3QgdHJlZUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjQ29udGVudENvbnRyb2xTZWxlY3RlZExpc3QnKTtcblxuICB0cmVlTGlzdHMuZm9yRWFjaCgodHJlZUxpc3QpID0+IHtcbiAgICBpZiAodHJlZUxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdDaHJvbWVFeHRlbnNpb25BZGRVcmxUb1RyZWVMaXN0SWRzJykpIHJldHVybjtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB0cmVlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3Qgb3B0aW9uJyk7XG4gICAgY29uc3QgaGVscCA9IHRyZWVMaXN0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjQ29udGVudENvbnRyb2xUcmVlTGlzdEhlbHAnKTtcblxuICAgIGlmICghaGVscCB8fCBvcHRpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgdHJlZUxpc3QuY2xhc3NMaXN0LmFkZCgnQ2hyb21lRXh0ZW5zaW9uQWRkVXJsVG9UcmVlTGlzdElkcycpO1xuXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGlkID0gb3B0aW9uLnZhbHVlPy5zcGxpdCgnfCcpPy5bMV07XG4gICAgICBpZiAoIWlkKSByZXR1cm47XG5cbiAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2ZvJywgaWQpO1xuICAgICAgICBpZiAoaGVscC5pbm5lckhUTUwuaW5jbHVkZXMoaWQpKSByZXR1cm47XG5cbiAgICAgICAgaGVscC5pbm5lckhUTUwgPSBgJHtoZWxwLmlubmVySFRNTH0gPGEgaHJlZj1cIiR7dXJsLmhyZWZ9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDtcIj4ke2lkfTwvYT5gO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc3RyZXRjaENvbHVtbiA9ICgpID0+IHtcbiAgY29uc3QgY29sdW1uV2lkdGggPSA0MDA7XG4gIGRvY3VtZW50LmNvb2tpZSA9IGBzY0NvbnRlbnRFZGl0b3JGb2xkZXJzV2lkdGg9JHtjb2x1bW5XaWR0aH07IGV4cGlyZXM9VGh1LCAzMSBEZWMgMjEwMCAxMjowMDowMCBVVEM7IHBhdGg9L2A7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDb250ZW50VHJlZVBhbmVsJykuc3R5bGUud2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGxpdHRlci1iYXItdmVydGljYWwnKS5zdHlsZS5sZWZ0ID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xuICBjb25zdCBlZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ29udGVudEVkaXRvcicpO1xuICBlZGl0b3Iuc3R5bGUud2lkdGggPSBwYXJzZUludChlZGl0b3Iuc3R5bGUud2lkdGgpIC0gY29sdW1uV2lkdGggKyBwYXJzZUludChlZGl0b3Iuc3R5bGUubGVmdCkgKyAncHgnO1xuICBlZGl0b3Iuc3R5bGUubGVmdCA9IGAke2NvbHVtbldpZHRofXB4YDtcbn07XG5cbmNvbnN0IHNjcm9sbFRvSXRlbSA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjQ29udGVudFRyZWVOb2RlQWN0aXZlJylbMF07XG4gIGNvbnN0IHRvZ2dsZUFycm93ID0gc2VsZWN0ZWRJdGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gIHRvZ2dsZUFycm93ICYmIHRvZ2dsZUFycm93LmNsaWNrKCk7XG4gIHNlbGVjdGVkSXRlbSAmJiBzZWxlY3RlZEl0ZW0ucGFyZW50RWxlbWVudCAmJiBzZWxlY3RlZEl0ZW0ucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xufTtcblxuY29uc3QgZ2V0QWN0aXZlVHJlZU5vZGVUZXh0ID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjQ29udGVudFRyZWVOb2RlQWN0aXZlIHNwYW4nKS5pbm5lclRleHQ7XG59O1xuXG5jb25zdCBnZXRBY3RpdmVUcmVlTm9kZVBhdGggPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NFZGl0b3JRdWlja0luZm8gdHI6bnRoLWNoaWxkKDMpIC5zY0VkaXRvckhlYWRlclF1aWNrSW5mb0lucHV0JykudmFsdWU7XG59O1xuXG5jb25zdCBhZGRCb29rbWFyayA9ICgpID0+IHtcbiAgY29uc3Qgc2l0ZWNvcmVUZXh0ID0gZ2V0QWN0aXZlVHJlZU5vZGVUZXh0KCk7XG4gIGlmIChzaXRlY29yZVRleHQgPT09IHByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkKSByZXR1cm47XG4gIHByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkID0gc2l0ZWNvcmVUZXh0O1xuXG4gIGxldCBib29rbWFya0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va21hcmtMaW5rJyk7XG4gIGxldCBib29rbWFya1N0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2ttYXJrU3R5bGUnKTtcblxuICBpZiAoIWJvb2ttYXJrTGluaykge1xuICAgIGJvb2ttYXJrTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBib29rbWFya0xpbmsuaWQgPSAnYm9va21hcmtMaW5rJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoYm9va21hcmtMaW5rKTtcbiAgICBib29rbWFya1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBib29rbWFya1N0eWxlLmlkID0gJ2Jvb2ttYXJrU3R5bGUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChib29rbWFya1N0eWxlKTtcbiAgfVxuXG4gIGJvb2ttYXJrTGluay5ocmVmID0gYGphdmFzY3JpcHQ6d2luZG93LmxvY2F0aW9uLmhyZWY9d2luZG93LmxvY2F0aW9uLm9yaWdpbisnL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50IEVkaXRvci5hc3B4P3NjX2J3PTEmZm89JHtnZXRBY3RpdmVUcmVlTm9kZVBhdGgoKX0nYDtcbiAgYm9va21hcmtMaW5rLmlubmVySFRNTCA9IHNpdGVjb3JlVGV4dDtcblxuICBib29rbWFya1N0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICNib29rbWFya0xpbmsge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwO1xuICAgICAgICAgIHRvcDogMTFweDtcbiAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdPcGVuIFNhbnMnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweCAwIDdweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMHB4IDFweCAjNTg1ODU4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICB9XG4gICAgYDtcbn07XG5cbmNvbnN0IGluY3JlYXNlSGVpZ2h0T25UcmVlTGlzdHMgPSAoKSA9PiB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY0VkaXRvclNlY3Rpb25QYW5lbENlbGwgLnNjQ29udGVudENvbnRyb2wuc2NDb250ZW50Q29udHJvbFRyZWVsaXN0JylcbiAgICAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuY2xpZW50SGVpZ2h0ID09PSAyMjApIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnNDAwcHgnO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuY29uc3QgZml4SW5wdXRDZWxsVGV4dEFyZWEgPSAoKSA9PiB7XG4gIGNvbnN0IHR4dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NFZGl0b3JGaWVsZE1hcmtlcklucHV0Q2VsbCB0ZXh0YXJlYScpO1xuICBpZiAodHh0cy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXhJbnB1dENlbGxUZXh0QXJlYScpKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlkID0gJ2ZpeElucHV0Q2VsbFRleHRBcmVhJztcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAubW9ub3NwYWNlLWZvbnQge2ZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCBcIkFuZGFsZSBNb25vXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO31cbiAgICBgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICB0eHRzLmZvckVhY2goKHR4dCkgPT4ge1xuICAgIGlmICh0eHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb25vc3BhY2UtZm9udCcpKSByZXR1cm47XG5cbiAgICB0eHQuY2xhc3NMaXN0LmFkZCgnbW9ub3NwYWNlLWZvbnQnKTtcbiAgICB0eHQuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgZmFsc2UpO1xuXG4gICAgdHh0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSAnODAwcHgnO1xuICAgICAgdGhpcy5zdHlsZS5mb250U2l6ZSA9ICcxM3B4JztcbiAgICAgIHRoaXMuc3R5bGUubGluZUhlaWdodCA9ICcxLjQ1JztcbiAgICB9KTtcblxuICAgIHR4dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZSA9IGBoZWlnaHQ6ICR7ZGVmYXVsdFRleHRBcmVhSGVpZ2h0fWA7IC8vIEZyb20gZW5sYXJnZVRyZWVsaXN0KCkgZnVuY3Rpb24gYmVsb3cuXG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZW5sYXJnZVRyZWVsaXN0ID0gKCkgPT4ge1xuICBjb25zdCBkYXRhU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9XCJTZWN0aW9uX0RhdGFcIl0nKTtcbiAgaWYgKCFkYXRhU2VjdGlvbikgcmV0dXJuO1xuICBsZXQgZGF0YVRyZWVsaXN0ID0gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignW2lkKj1cIlNlY3Rpb25fRGF0YVwiXScpXG4gICAgLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjQ29udGVudENvbnRyb2xUcmVlbGlzdCcpO1xuICBpZiAoIWRhdGFUcmVlbGlzdCkgcmV0dXJuO1xuICBkYXRhVHJlZWxpc3Quc3R5bGUgPSBgaGVpZ2h0OiAke2RlZmF1bHRUZXh0QXJlYUhlaWdodH1gO1xufTtcblxuY29uc3QgZ2V0RmF2b3JpdGVJdGVtTGFiZWwgPSAoZmF2b3JpdGUpID0+IHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uaW5uZXJUZXh0ID0gZmF2b3JpdGUubGFiZWw7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgZ2V0RmF2b3JpdGVJdGVtUGFyZW50VGV4dCA9IChmYXZvcml0ZSkgPT4ge1xuICBsZXQgcGF0aCA9IGZhdm9yaXRlLnBhdGguc3BsaXQoJy8nKTtcbiAgcGF0aC5wb3AoKTtcbiAgcGF0aCA9IHBhdGguam9pbignLycpO1xuICBwYXRoID0gYCR7cGF0aH0vIGA7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmNsYXNzTmFtZSA9ICdDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbVBhcmVudCc7XG4gIHNwYW4uaW5uZXJUZXh0ID0gcGF0aDtcbiAgcmV0dXJuIHNwYW47XG59O1xuXG5jb25zdCBhZGRGYXZvcml0ZXMgPSAoKSA9PiB7XG4gIGxldCBmYXZvcml0ZXNTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1N0eWxlJyk7XG5cbiAgaWYgKCFmYXZvcml0ZXNTdHlsZSkge1xuICAgIGZhdm9yaXRlc1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBmYXZvcml0ZXNTdHlsZS5pZCA9ICdDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1N0eWxlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzU3R5bGUpO1xuICAgIGZhdm9yaXRlc1N0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgIC5zYy1nbG9iYWxIZWFkZXIge1xuICAgICAgICB6LWluZGV4OiAxMDE7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlcyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICAgICAgYmFja2dyb3VuZDogIzJiMmIyYjtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMCA1cHggNnB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogNnB4IDdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW06aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbSBzcGFuLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtUmVtb3ZlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtIHNwYW4uQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1SZW1vdmU6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7IFxuICAgICAgfVxuICAgICAgXG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0gc3Bhbi5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbVBhcmVudCB7XG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xuICAgICAgfVxuICAgIFxuICAgICAgI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBBZGRGYXZvcml0ZSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogNnB4IDdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1gO1xuICB9XG5cbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2Zhdm9yaXRlcycsICh7IGZhdm9yaXRlcyB9KSA9PiB7XG4gICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzIHx8IFtdO1xuICAgIGlmIChmYXZvcml0ZXMubGVuZ3RoID4gMSkge1xuICAgICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzLnNvcnQoKGEsIGIpID0+IChhLnBhdGggPiBiLnBhdGggPyAxIDogLTEpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY2NJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLWFjY291bnRJbmZvcm1hdGlvbicpO1xuICAgIGxldCBmYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXMnKTtcbiAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cCcpO1xuXG4gICAgaWYgKCFmYXYpIHtcbiAgICAgIGZhdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBmYXYuaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXMnO1xuICAgICAgZmF2LmlubmVyVGV4dCA9ICdGYXZvcml0ZXMnO1xuICAgICAgYWNjSW5mby5pbnNlcnRCZWZvcmUoZmF2LCBhY2NJbmZvLmZpcnN0Q2hpbGQpO1xuICAgICAgZmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaG93RmF2b3JpdGVzUG9wdXAgPSAhc2hvd0Zhdm9yaXRlc1BvcHVwO1xuICAgICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghc2hvd0Zhdm9yaXRlc1BvcHVwICYmIHBvcHVwKSB7XG4gICAgICBmYXYucmVtb3ZlQ2hpbGQocG9wdXApO1xuICAgIH1cblxuICAgIGlmIChzaG93RmF2b3JpdGVzUG9wdXApIHtcbiAgICAgIGlmICghcG9wdXApIHtcbiAgICAgICAgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wdXAuaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cCc7XG4gICAgICAgIGZhdi5hcHBlbmRDaGlsZChwb3B1cCk7XG4gICAgICB9XG5cbiAgICAgIGZhdm9yaXRlcy5mb3JFYWNoKChmYXZvcml0ZSkgPT4ge1xuICAgICAgICBsZXQgZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbT1cIiR7ZmF2b3JpdGUucGF0aH1cIl1gKTtcblxuICAgICAgICBpZiAoIWYpIHtcbiAgICAgICAgICBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZi5jbGFzc05hbWUgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0nO1xuICAgICAgICAgIGYuc2V0QXR0cmlidXRlKCdDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbScsIGZhdm9yaXRlLnBhdGgpO1xuXG4gICAgICAgICAgZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bG9jYXRpb24ub3JpZ2lufSR7bG9jYXRpb24ucGF0aG5hbWV9P3NjX2J3PTEmZm89JHtmYXZvcml0ZS5wYXRofWA7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBmLmFwcGVuZENoaWxkKGdldEZhdm9yaXRlSXRlbVBhcmVudFRleHQoZmF2b3JpdGUpKTtcbiAgICAgICAgICBmLmFwcGVuZENoaWxkKGdldEZhdm9yaXRlSXRlbUxhYmVsKGZhdm9yaXRlKSk7XG5cbiAgICAgICAgICBsZXQgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIHJlbW92ZS5jbGFzc05hbWUgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1SZW1vdmUnO1xuICAgICAgICAgIHJlbW92ZS5pbm5lclRleHQgPSAneCc7XG4gICAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzLmZpbHRlcigoZikgPT4gZiAhPT0gZmF2b3JpdGUpO1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBmYXZvcml0ZXMgfSk7XG4gICAgICAgICAgICBwb3B1cC5yZW1vdmVDaGlsZChmKTtcbiAgICAgICAgICAgIGFkZEZhdm9yaXRlcygpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZi5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGYpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGlzSXRlbUluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0gPSBcIiR7Z2V0QWN0aXZlVHJlZU5vZGVQYXRoKCl9XCJdYFxuICAgICAgKTtcbiAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEFkZEZhdm9yaXRlJyk7XG5cbiAgICAgIGlmIChhZGRCdXR0b24pIHBvcHVwLnJlbW92ZUNoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICAgIGlmICghaXNJdGVtSW5NZW51KSB7XG4gICAgICAgIGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRCdXR0b24uaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEFkZEZhdm9yaXRlJztcbiAgICAgICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9IGBBZGQgJHtnZXRBY3RpdmVUcmVlTm9kZVRleHQoKX0gPyBgO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICBmYXZvcml0ZXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogZ2V0QWN0aXZlVHJlZU5vZGVUZXh0KCksXG4gICAgICAgICAgICBwYXRoOiBnZXRBY3RpdmVUcmVlTm9kZVBhdGgoKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGZhdm9yaXRlcyB9KTtcbiAgICAgICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWRkSW1hZ2VEaXJlY3RVcmwgPSAoKSA9PiB7XG4gIGxldCBpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VkaXRvckZyYW1lcycpPy5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgbGV0IGlzVmlzaWJsZSA9IGl0ZW0/LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJztcbiAgY29uc3QgdGFibGUgPSBpdGVtPy5xdWVyeVNlbGVjdG9yKCd0YWJsZS5zY0VkaXRvclF1aWNrSW5mbyB0Ym9keScpO1xuXG4gIGlmIChpdGVtPy5pZCAmJiBpc1Zpc2libGUgJiYgdGFibGUgJiYgIXRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNzY1Rvb2xNZWRpYVBhdGgnKSkge1xuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICB0ci5pZCA9ICdzY1Rvb2xNZWRpYVBhdGgnO1xuICAgIGNvbnN0IHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ29uY2xpY2snLCAnamF2YXNjcmlwdDp0aGlzLnNlbGVjdCgpO3JldHVybiBmYWxzZScpO1xuICAgIGlucHV0LnZhbHVlID0gJy0vbWVkaWEvJyArIGl0ZW0uaWQucmVwbGFjZSgnRkNvbnRlbnQnLCAnJykgKyAnLmFzaHgnO1xuXG4gICAgdGQxLmlubmVyVGV4dCA9ICdSZWxhdGl2IHN0aTonO1xuICAgIHRkMi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZDIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgaWYgKGxvY2F0aW9uLmhvc3QuZW5kc1dpdGgoJ2RhbnNrZXNwaWwuZGsnKSkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4Jykge1xuICAgICAgc3RyZXRjaENvbHVtbigpO1xuICAgICAgc2Nyb2xsVG9JdGVtKCk7XG4gICAgICBhZGRCb29rbWFyaygpO1xuICAgICAgc2V0SW50ZXJ2YWwoYWRkVXJsVG9UcmVlTGlzdElkcywgNTAwKTtcbiAgICAgIHNldEludGVydmFsKGluY3JlYXNlSGVpZ2h0T25UcmVlTGlzdHMsIDUwMCk7XG4gICAgICBzZXRJbnRlcnZhbChmaXhJbnB1dENlbGxUZXh0QXJlYSwgNTAwKTtcbiAgICAgIHNldEludGVydmFsKGFkZEJvb2ttYXJrLCA1MDApO1xuXG4gICAgICBzZXRJbnRlcnZhbChlbmxhcmdlVHJlZWxpc3QsIDUwMCk7XG5cbiAgICAgIGFkZEZhdm9yaXRlcygpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRUaW1lb3V0KGFkZEZhdm9yaXRlcywgNTAwKSk7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50JTIwTWFuYWdlci9EZWZhdWx0LmFzcHgnKSB7XG4gICAgICBzZXRJbnRlcnZhbChhZGRJbWFnZURpcmVjdFVybCwgNTAwKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFNpdGVjb3JlTGF5b3V0SW1wcm92ZW1lbnRzKCkge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgLy8gRG9jdW1lbnQgaXMgYWxyZWFkeSByZWFkeSB0byBnbywgcnVuIHlvdXIgY29kZVxuICAgIGluaXRpYWxpemUoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIERPTUNvbnRlbnRMb2FkZWRcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2V0dXBEc0ZpbmREaWN0aW9uYXJ5IH0gZnJvbSAnLi9Ec0ZpbmREaWN0aW9uYXJ5JztcbmltcG9ydCB7IHNldHVwR2l0aHViQ3JlYXRlQnJhbmNoIH0gZnJvbSAnLi9HaXRIdWJDcmVhdGVCcmFuY2gnO1xuaW1wb3J0IHsgc2V0dXBTaXRlY29yZUxheW91dEltcHJvdmVtZW50cyB9IGZyb20gJy4vU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMnO1xuXG5zZXR1cERzRmluZERpY3Rpb25hcnkoKTtcbnNldHVwR2l0aHViQ3JlYXRlQnJhbmNoKCk7XG5zZXR1cFNpdGVjb3JlTGF5b3V0SW1wcm92ZW1lbnRzKCk7XG5cbmlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdGMicpIHtcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aGVuIEYyIGlzIHByZXNzZWRcbiAgICAgIGFsZXJ0KCdGMiB3YXMgcHJlc3NlZCcpO1xuXG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2NhbGxNeUZ1bmN0aW9uJyB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigneHh4IENBTExJTkcgTVkgRlVOQ1RJT04geHh4JywgcmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kVGV4dEluRGljdGlvbmFyaWVzIiwic2VhcmNoU3RyaW5nIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsInJlc3VsdHMiLCJvdXRwdXQiLCJfcmVmIiwia2V5Iiwia2V5MiIsImtleTMiLCJrZXk0Iiwia2V5NSIsImtleTYiLCJrZXk3Iiwia2V5OCIsInJlcyIsImRpY3Rpb25hcnlLZXkiLCJpc0RsbyIsImluY2x1ZGVzIiwicmVnaW9uIiwic3BsaXQiLCJpbmRleEtleSIsImRpY3Rpb25hcnlLZXlzIiwibG9jYWxTdG9yYWdlIiwic3RvcmFnZUtleSIsInB1c2giLCJmb3JFYWNoIiwicyIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJfdHlwZW9mIiwiT2JqZWN0Iiwia2V5cyIsImNvbnRlbnQiLCJ1cmwiLCJnZXREaWN0aW9uYXJ5VXJsIiwidHh0IiwiZmlsbERpY3Rpb25hcnkiLCJjbGVhckZpbGxEaWN0aW9uYXJ5IiwiaG9zdFBhcnRzIiwibG9jYXRpb24iLCJob3N0IiwicHJvdG9jb2wiLCJpc1Rvd25FbnYiLCJpc0RldkVudiIsImVudlBhcnQiLCJjb25jYXQiLCJyZW1vdmVFbGVtZW50QnlJZCIsImlkIiwiZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwiZW5zdXJlRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRTdHlsZSIsInN0eWxlIiwiY3NzIiwiaW5uZXJUZXh0IiwiZGl2Iiwic3R5bGVFbCIsIl9yZWYyIiwicCIsImEiLCJocmVmIiwidGFyZ2V0IiwidGV4dCIsInNldHVwRHNGaW5kRGljdGlvbmFyeSIsImVuZHNXaXRoIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJ3YWl0Rm9yRWxlbWVudCIsIl9jYWxsZWUiLCJzZWxlY3RvciIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJxdWVyeVNlbGVjdG9yIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3giLCJzZXR1cEdpdGh1YkNyZWF0ZUJyYW5jaCIsIl9zZXR1cEdpdGh1YkNyZWF0ZUJyYW5jaCIsIl9jYWxsZWUyIiwicGFyYW1zIiwibmV3QnJhbmNoIiwiY3RhIiwiaW5wdXQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzZWFyY2giLCJVUkxTZWFyY2hQYXJhbXMiLCJnZXQiLCJjbGljayIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJldmVudHNUb0Rpc3BhdGNoIiwiZXZlbnRUeXBlIiwiZXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsIlVSTCIsInNlYXJjaFBhcmFtcyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJwcmV2aW91c1NlbGVjdGVkU2l0ZWNvcmVJZCIsInNob3dGYXZvcml0ZXNQb3B1cCIsImRlZmF1bHRUZXh0QXJlYUhlaWdodCIsImFkZFVybFRvVHJlZUxpc3RJZHMiLCJ0cmVlTGlzdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHJlZUxpc3QiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm9wdGlvbnMiLCJoZWxwIiwicGFyZW50RWxlbWVudCIsImFkZCIsIm9wdGlvbiIsIl9vcHRpb24kdmFsdWUiLCJzZXQiLCJpbm5lckhUTUwiLCJzdHJldGNoQ29sdW1uIiwiY29sdW1uV2lkdGgiLCJjb29raWUiLCJ3aWR0aCIsImxlZnQiLCJlZGl0b3IiLCJwYXJzZUludCIsInNjcm9sbFRvSXRlbSIsInNlbGVjdGVkSXRlbSIsInRvZ2dsZUFycm93Iiwic2Nyb2xsSW50b1ZpZXciLCJnZXRBY3RpdmVUcmVlTm9kZVRleHQiLCJnZXRBY3RpdmVUcmVlTm9kZVBhdGgiLCJhZGRCb29rbWFyayIsInNpdGVjb3JlVGV4dCIsImJvb2ttYXJrTGluayIsImJvb2ttYXJrU3R5bGUiLCJpbmNyZWFzZUhlaWdodE9uVHJlZUxpc3RzIiwiZWxlbWVudCIsImNsaWVudEhlaWdodCIsImhlaWdodCIsImZpeElucHV0Q2VsbFRleHRBcmVhIiwidHh0cyIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImVubGFyZ2VUcmVlbGlzdCIsImRhdGFTZWN0aW9uIiwiZGF0YVRyZWVsaXN0IiwiZ2V0RmF2b3JpdGVJdGVtTGFiZWwiLCJmYXZvcml0ZSIsInNwYW4iLCJsYWJlbCIsImdldEZhdm9yaXRlSXRlbVBhcmVudFRleHQiLCJwYXRoIiwiam9pbiIsImNsYXNzTmFtZSIsImFkZEZhdm9yaXRlcyIsImZhdm9yaXRlc1N0eWxlIiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJmYXZvcml0ZXMiLCJzb3J0IiwiYiIsImFjY0luZm8iLCJmYXYiLCJwb3B1cCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsIm9yaWdpbiIsImZpbHRlciIsImlzSXRlbUluTWVudSIsImFkZEJ1dHRvbiIsImV2IiwiYWRkSW1hZ2VEaXJlY3RVcmwiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIiLCJpdGVtIiwiaXNWaXNpYmxlIiwiZGlzcGxheSIsInRhYmxlIiwidHIiLCJ0ZDEiLCJ0ZDIiLCJyZXBsYWNlIiwiaW5pdGlhbGl6ZSIsInNldEludGVydmFsIiwic2V0dXBTaXRlY29yZUxheW91dEltcHJvdmVtZW50cyIsInJlYWR5U3RhdGUiLCJhbGVydCIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImFjdGlvbiIsInJlc3BvbnNlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=