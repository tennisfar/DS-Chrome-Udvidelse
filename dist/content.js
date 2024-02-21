/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

var isPageAJiraTaskIUPage = function isPageAJiraTaskIUPage() {
  return location.host.includes('jira.danskespil.dk') && location.pathname.startsWith('/browse/IU-');
};
var createCTA = function createCTA() {
  var branchName = (0,_MakeBranchName__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (!branchName) return;
  var toolBar = document.querySelector('.aui-toolbar2-primary');
  var newCtaContainer = document.createElement('div');
  newCtaContainer.classList.add('aui-buttons');
  var cta = document.createElement('a');
  cta.classList.add('aui-button');
  cta.innerText = 'Create Branch';
  cta.addEventListener('click', function () {
    window.open('https://github.com/ds-itu-frontend-service/danskespil-website/branches?newBranch=' + branchName);
  });
  newCtaContainer.appendChild(cta);
  toolBar.appendChild(newCtaContainer);
};
function showCreateBranchLink() {
  if (isPageAJiraTaskIUPage()) {
    createCTA();
  }
}

/***/ }),

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
  issue = issue.innerText.trim();
  summary = summary.innerText.toLowerCase().replace(/[^a-z ]/g, '-').replace(/ /g, '-').replace(/--+/g, '-');
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
/* harmony import */ var _ContentScripts_Github_GitHubCreateBranch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentScripts/Github/GitHubCreateBranch */ "./src/ContentScripts/Github/GitHubCreateBranch.js");
/* harmony import */ var _SitecoreLayoutImprovements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SitecoreLayoutImprovements */ "./src/SitecoreLayoutImprovements.js");
/* harmony import */ var _ContentScripts_Jira_ShowCreateBranchLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentScripts/Jira/ShowCreateBranchLink */ "./src/ContentScripts/Jira/ShowCreateBranchLink.js");




(0,_DsFindDictionary__WEBPACK_IMPORTED_MODULE_0__.setupDsFindDictionary)();
(0,_ContentScripts_Github_GitHubCreateBranch__WEBPACK_IMPORTED_MODULE_1__.setupGithubCreateBranch)();
(0,_SitecoreLayoutImprovements__WEBPACK_IMPORTED_MODULE_2__.setupSitecoreLayoutImprovements)();
(0,_ContentScripts_Jira_ShowCreateBranchLink__WEBPACK_IMPORTED_MODULE_3__.showCreateBranchLink)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdBQUFULE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTixTQUFBLEdBQUFVLENBQUEsT0FBQVcsT0FBQSxDQUFBcEIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSyxDQUFBLGVBQUFILEtBQUEsRUFBQWlCLGdCQUFBLENBQUF6QixDQUFBLEVBQUFDLENBQUEsRUFBQVksQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUExQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQTBCLElBQUEsWUFBQUMsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBNkIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQTJCLElBQUEsV0FBQUMsR0FBQSxFQUFBNUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFzQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBcEMsTUFBQSxDQUFBcUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUF2QyxDQUFBLElBQUFHLENBQUEsQ0FBQXlCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWpDLFNBQUEsR0FBQW1CLFNBQUEsQ0FBQW5CLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBM0MsQ0FBQSxnQ0FBQTRDLE9BQUEsV0FBQTdDLENBQUEsSUFBQWtCLE1BQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBNkMsT0FBQSxDQUFBOUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBOEMsY0FBQTlDLENBQUEsRUFBQUQsQ0FBQSxhQUFBZ0QsT0FBQTlDLENBQUEsRUFBQUssQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUExQixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTyxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFQLEtBQUEsU0FBQXNCLENBQUEsZ0JBQUFrQixPQUFBLENBQUFsQixDQUFBLEtBQUExQixDQUFBLENBQUF5QixJQUFBLENBQUFDLENBQUEsZUFBQS9CLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsQ0FBQW9CLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBK0MsTUFBQSxTQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFYLENBQUEsSUFBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFFBQUFaLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsRUFBQXFCLElBQUEsV0FBQW5ELENBQUEsSUFBQWUsQ0FBQSxDQUFBUCxLQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZixDQUFBLFdBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBM0IsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBRSxLQUFBLFdBQUFBLE1BQUFSLENBQUEsRUFBQUksQ0FBQSxhQUFBZ0QsMkJBQUEsZUFBQXJELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE4QyxNQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0IsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBTCxDQUFBLEtBQUEwQixDQUFBLFlBQUFxQixLQUFBLHNDQUFBL0MsQ0FBQSxLQUFBMkIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBSCxLQUFBLEVBQUFSLENBQUEsRUFBQXNELElBQUEsZUFBQWxELENBQUEsQ0FBQW1ELE1BQUEsR0FBQTlDLENBQUEsRUFBQUwsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFULENBQUEsQ0FBQW9ELFFBQUEsTUFBQTNDLENBQUEsUUFBQUUsQ0FBQSxHQUFBMEMsbUJBQUEsQ0FBQTVDLENBQUEsRUFBQVQsQ0FBQSxPQUFBVyxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBWCxDQUFBLENBQUFtRCxNQUFBLEVBQUFuRCxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUF1RCxLQUFBLEdBQUF2RCxDQUFBLENBQUF3QixHQUFBLHNCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxRQUFBakQsQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBeEIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBeEIsQ0FBQSxDQUFBd0QsaUJBQUEsQ0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsdUJBQUF4QixDQUFBLENBQUFtRCxNQUFBLElBQUFuRCxDQUFBLENBQUF5RCxNQUFBLFdBQUF6RCxDQUFBLENBQUF3QixHQUFBLEdBQUF0QixDQUFBLEdBQUEwQixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFpQyxDQUFBLENBQUFWLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBckIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBMUIsS0FBQSxFQUFBNkIsQ0FBQSxDQUFBVCxHQUFBLEVBQUEwQixJQUFBLEVBQUFsRCxDQUFBLENBQUFrRCxJQUFBLGtCQUFBakIsQ0FBQSxDQUFBVixJQUFBLEtBQUFyQixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUFtRCxNQUFBLFlBQUFuRCxDQUFBLENBQUF3QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTZCLG9CQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxFQUFBakQsQ0FBQSxHQUFBUCxDQUFBLENBQUFhLFFBQUEsQ0FBQVIsQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQXBELENBQUEsSUFBQUwsQ0FBQSxDQUFBYSxRQUFBLGVBQUFYLENBQUEsQ0FBQXNELE1BQUEsYUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsRUFBQXlELG1CQUFBLENBQUExRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBc0QsTUFBQSxrQkFBQW5ELENBQUEsS0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSx1Q0FBQTFELENBQUEsaUJBQUE4QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFwQixDQUFBLEVBQUFQLENBQUEsQ0FBQWEsUUFBQSxFQUFBWCxDQUFBLENBQUEyQixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBMUIsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBM0IsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQTJDLElBQUEsSUFBQXJELENBQUEsQ0FBQUYsQ0FBQSxDQUFBZ0UsVUFBQSxJQUFBcEQsQ0FBQSxDQUFBSCxLQUFBLEVBQUFQLENBQUEsQ0FBQStELElBQUEsR0FBQWpFLENBQUEsQ0FBQWtFLE9BQUEsZUFBQWhFLENBQUEsQ0FBQXNELE1BQUEsS0FBQXRELENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxJQUFBdkIsQ0FBQSxJQUFBVixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHNDQUFBN0QsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxjQUFBZ0MsYUFBQWxFLENBQUEsUUFBQUQsQ0FBQSxLQUFBb0UsTUFBQSxFQUFBbkUsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFFBQUEsR0FBQXBFLENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxVQUFBLEdBQUFyRSxDQUFBLEtBQUFELENBQUEsQ0FBQXVFLFFBQUEsR0FBQXRFLENBQUEsV0FBQXVFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBekUsQ0FBQSxjQUFBMEUsY0FBQXpFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUEwRSxVQUFBLFFBQUEzRSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBMEUsVUFBQSxHQUFBM0UsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXVFLFVBQUEsTUFBQUosTUFBQSxhQUFBbkUsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBc0IsWUFBQSxjQUFBUyxLQUFBLGlCQUFBbEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBaUUsSUFBQSxTQUFBakUsQ0FBQSxPQUFBNkUsS0FBQSxDQUFBN0UsQ0FBQSxDQUFBOEUsTUFBQSxTQUFBdkUsQ0FBQSxPQUFBRyxDQUFBLFlBQUF1RCxLQUFBLGFBQUExRCxDQUFBLEdBQUFQLENBQUEsQ0FBQThFLE1BQUEsT0FBQXpFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBMEQsSUFBQSxDQUFBeEQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWpELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMkMsV0FBQSxHQUFBN0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUFnRixtQkFBQSxhQUFBL0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQWdGLFdBQUEsV0FBQWpGLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUErRSxXQUFBLElBQUEvRSxDQUFBLENBQUFrRixJQUFBLE9BQUFsRixDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFdBQUFFLE1BQUEsQ0FBQWlGLGNBQUEsR0FBQWpGLE1BQUEsQ0FBQWlGLGNBQUEsQ0FBQW5GLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFvRixTQUFBLEdBQUFoRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRixLQUFBLGFBQUFyRixDQUFBLGFBQUFrRCxPQUFBLEVBQUFsRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRyxhQUFBLENBQUEzQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTZCLGFBQUEsQ0FBQTNDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBK0MsYUFBQSxHQUFBQSxhQUFBLEVBQUEvQyxDQUFBLENBQUF1RixLQUFBLGFBQUF0RixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE4RSxPQUFBLE9BQUE1RSxDQUFBLE9BQUFtQyxhQUFBLENBQUF6QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBZ0YsbUJBQUEsQ0FBQTlFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFiLElBQUEsV0FBQW5ELENBQUEsV0FBQUEsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQXFELElBQUEsV0FBQXJCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF5RixJQUFBLGFBQUF4RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUF1RSxJQUFBLENBQUFwRSxDQUFBLFVBQUFILENBQUEsQ0FBQXdGLE9BQUEsYUFBQXpCLEtBQUEsV0FBQS9ELENBQUEsQ0FBQTRFLE1BQUEsU0FBQTdFLENBQUEsR0FBQUMsQ0FBQSxDQUFBeUYsR0FBQSxRQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFpRSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFqRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTZFLFdBQUEsRUFBQXhELE9BQUEsRUFBQW1ELEtBQUEsV0FBQUEsTUFBQTVFLENBQUEsYUFBQTRGLElBQUEsV0FBQTNCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUEzRCxDQUFBLE9BQUFzRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXVFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTZCLGFBQUEsSUFBQTFFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBMkYsTUFBQSxPQUFBeEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBMkUsS0FBQSxFQUFBM0UsQ0FBQSxDQUFBNEYsS0FBQSxjQUFBNUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE4RixJQUFBLFdBQUFBLEtBQUEsU0FBQXhDLElBQUEsV0FBQXRELENBQUEsUUFBQXVFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTFFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQW1FLElBQUEsS0FBQW5DLGlCQUFBLFdBQUFBLGtCQUFBN0QsQ0FBQSxhQUFBdUQsSUFBQSxRQUFBdkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBK0YsT0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQStELElBQUEsR0FBQTVELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBakUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQWlFLFVBQUEsaUJBQUFqRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE2QixNQUFBLGFBQUF2RixDQUFBLENBQUEwRCxNQUFBLFNBQUF3QixJQUFBLFFBQUE5RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTRFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUF1QixJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE4RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxZQUFBc0MsS0FBQSxxREFBQXNDLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBN0QsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWlFLFVBQUEsQ0FBQXRFLENBQUEsT0FBQUssQ0FBQSxDQUFBNkQsTUFBQSxTQUFBd0IsSUFBQSxJQUFBdkYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQXFGLElBQUEsR0FBQXJGLENBQUEsQ0FBQStELFVBQUEsUUFBQTVELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQTBELE1BQUEsSUFBQXBFLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRSxVQUFBLGNBQUEvRCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBK0QsUUFBQSxDQUFBdEYsQ0FBQSxNQUFBc0YsUUFBQSxXQUFBQSxTQUFBakcsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQXFDLElBQUEsR0FBQWhFLENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFvRSxJQUFBLFFBQUFuRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBaEUsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBaUUsSUFBQSxHQUFBakUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBZ0UsTUFBQSxXQUFBQSxPQUFBbEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW9FLFVBQUEsS0FBQXJFLENBQUEsY0FBQWlHLFFBQUEsQ0FBQWhHLENBQUEsQ0FBQXlFLFVBQUEsRUFBQXpFLENBQUEsQ0FBQXFFLFFBQUEsR0FBQUcsYUFBQSxDQUFBeEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQWlFLE9BQUFuRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBbkUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXlFLFVBQUEsa0JBQUF0RSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTZDLGFBQUEsQ0FBQXhFLENBQUEsWUFBQUssQ0FBQSxnQkFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLG1CQUFBQyxHQUFBLEVBQUFyRCxPQUFBLEVBQUFzRCxNQUFBLEVBQUFDLEtBQUEsRUFBQUMsTUFBQSxFQUFBQyxHQUFBLEVBQUE5RSxHQUFBLGNBQUErRSxJQUFBLEdBQUFMLEdBQUEsQ0FBQUksR0FBQSxFQUFBOUUsR0FBQSxPQUFBcEIsS0FBQSxHQUFBbUcsSUFBQSxDQUFBbkcsS0FBQSxXQUFBb0csS0FBQSxJQUFBTCxNQUFBLENBQUFLLEtBQUEsaUJBQUFELElBQUEsQ0FBQXJELElBQUEsSUFBQUwsT0FBQSxDQUFBekMsS0FBQSxZQUFBK0UsT0FBQSxDQUFBdEMsT0FBQSxDQUFBekMsS0FBQSxFQUFBMkMsSUFBQSxDQUFBcUQsS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUksa0JBQUFDLEVBQUEsNkJBQUFDLElBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLGFBQUExQixPQUFBLFdBQUF0QyxPQUFBLEVBQUFzRCxNQUFBLFFBQUFELEdBQUEsR0FBQVEsRUFBQSxDQUFBSSxLQUFBLENBQUFILElBQUEsRUFBQUMsSUFBQSxZQUFBUixNQUFBaEcsS0FBQSxJQUFBNkYsa0JBQUEsQ0FBQUMsR0FBQSxFQUFBckQsT0FBQSxFQUFBc0QsTUFBQSxFQUFBQyxLQUFBLEVBQUFDLE1BQUEsVUFBQWpHLEtBQUEsY0FBQWlHLE9BQUFVLEdBQUEsSUFBQWQsa0JBQUEsQ0FBQUMsR0FBQSxFQUFBckQsT0FBQSxFQUFBc0QsTUFBQSxFQUFBQyxLQUFBLEVBQUFDLE1BQUEsV0FBQVUsR0FBQSxLQUFBWCxLQUFBLENBQUFZLFNBQUE7QUFEQSxJQUFNQyxjQUFjO0VBQUEsSUFBQUMsSUFBQSxHQUFBVCxpQkFBQSxlQUFBL0csbUJBQUEsR0FBQW9GLElBQUEsQ0FBRyxTQUFBcUMsUUFBT0MsUUFBUTtJQUFBLE9BQUExSCxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBb0csU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUEvQixJQUFBLEdBQUErQixRQUFBLENBQUExRCxJQUFBO1FBQUE7VUFBQSxJQUM1QjJELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDSixRQUFRLENBQUM7WUFBQUUsUUFBQSxDQUFBMUQsSUFBQTtZQUFBO1VBQUE7VUFBQTBELFFBQUEsQ0FBQTFELElBQUE7VUFBQSxPQUNoQyxJQUFJdUIsT0FBTyxDQUFDLFVBQUN0QyxPQUFPO1lBQUEsT0FBSzRFLHFCQUFxQixDQUFDNUUsT0FBTyxDQUFDO1VBQUEsRUFBQztRQUFBO1VBQUF5RSxRQUFBLENBQUExRCxJQUFBO1VBQUE7UUFBQTtVQUFBLE9BQUEwRCxRQUFBLENBQUE3RCxNQUFBLFdBRXpEOEQsUUFBUSxDQUFDQyxhQUFhLENBQUNKLFFBQVEsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBRSxRQUFBLENBQUE1QixJQUFBO01BQUE7SUFBQSxHQUFBeUIsT0FBQTtFQUFBLENBQ3hDO0VBQUEsZ0JBTEtGLGNBQWNBLENBQUFTLEVBQUE7SUFBQSxPQUFBUixJQUFBLENBQUFKLEtBQUEsT0FBQUQsU0FBQTtFQUFBO0FBQUEsR0FLbkI7QUFFTSxTQUFlYyx1QkFBdUJBLENBQUE7RUFBQSxPQUFBQyx3QkFBQSxDQUFBZCxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQTBCNUMsU0FBQWUseUJBQUE7RUFBQUEsd0JBQUEsR0FBQW5CLGlCQUFBLGVBQUEvRyxtQkFBQSxHQUFBb0YsSUFBQSxDQTFCTSxTQUFBK0MsU0FBQTtJQUFBLElBQUFDLE1BQUEsRUFBQUMsU0FBQSxFQUFBQyxHQUFBLEVBQUFDLEtBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUF4SSxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBa0gsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUE3QyxJQUFBLEdBQUE2QyxTQUFBLENBQUF4RSxJQUFBO1FBQUE7VUFBQSxNQUNEeUUsUUFBUSxDQUFDQyxJQUFJLEtBQUssWUFBWSxJQUFJRCxRQUFRLENBQUNFLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUFBSixTQUFBLENBQUF4RSxJQUFBO1lBQUE7VUFBQTtVQUNyRWtFLE1BQU0sR0FBRyxJQUFJVyxlQUFlLENBQUNKLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDO1VBQzdDUixTQUFTLEdBQUdELE1BQU0sQ0FBQ1ksR0FBRyxDQUFDLFdBQVcsQ0FBQztVQUFBTixTQUFBLENBQUF4RSxJQUFBO1VBQUEsT0FFdkJxRCxjQUFjLENBQUMsb0NBQW9DLENBQUM7UUFBQTtVQUFoRWUsR0FBRyxHQUFBSSxTQUFBLENBQUE5RSxJQUFBO1VBQ1QwRSxHQUFHLGFBQUhBLEdBQUcsZUFBSEEsR0FBRyxDQUFFVyxLQUFLLENBQUMsQ0FBQztVQUFDUCxTQUFBLENBQUF4RSxJQUFBO1VBQUEsT0FDT3FELGNBQWMsQ0FBQywrQ0FBK0MsQ0FBQztRQUFBO1VBQTdFZ0IsS0FBSyxHQUFBRyxTQUFBLENBQUE5RSxJQUFBO1VBQ1gsSUFBSTJFLEtBQUssRUFBRTtZQUNUVyxVQUFVLENBQUMsWUFBTTtjQUNmO2NBQ0FYLEtBQUssQ0FBQ1ksWUFBWSxDQUFDLE9BQU8sRUFBRWQsU0FBUyxDQUFDOztjQUV0QztjQUNBLElBQU1lLGdCQUFnQixHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7Y0FDckRBLGdCQUFnQixDQUFDdEcsT0FBTyxDQUFDLFVBQUN1RyxTQUFTLEVBQUs7Z0JBQ3RDLElBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUNGLFNBQVMsRUFBRTtrQkFBRUcsT0FBTyxFQUFFLElBQUk7a0JBQUVDLFVBQVUsRUFBRTtnQkFBSyxDQUFDLENBQUM7Z0JBQ3ZFbEIsS0FBSyxDQUFDbUIsYUFBYSxDQUFDSixLQUFLLENBQUM7Y0FDNUIsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUNUO1VBRU1kLEdBQUcsR0FBRyxJQUFJbUIsR0FBRyxDQUFDQyxNQUFNLENBQUNqQixRQUFRLENBQUM7VUFDcENILEdBQUcsQ0FBQ3FCLFlBQVksVUFBTyxDQUFDLFdBQVcsQ0FBQztVQUNwQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFdkIsR0FBRyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFFLFNBQUEsQ0FBQTFDLElBQUE7TUFBQTtJQUFBLEdBQUFtQyxRQUFBO0VBQUEsQ0FFbEM7RUFBQSxPQUFBRCx3QkFBQSxDQUFBZCxLQUFBLE9BQUFELFNBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDakNpRDtBQUVsRCxJQUFNOEMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBQTtFQUFBLE9BQVN0QixRQUFRLENBQUNDLElBQUksQ0FBQ0UsUUFBUSxDQUFDLG9CQUFvQixDQUFDLElBQUlILFFBQVEsQ0FBQ3VCLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGFBQWEsQ0FBQztBQUFBO0FBRS9ILElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVM7RUFDdEIsSUFBTUMsVUFBVSxHQUFHTCwyREFBYyxDQUFDLENBQUM7RUFDbkMsSUFBSSxDQUFDSyxVQUFVLEVBQUU7RUFFakIsSUFBTUMsT0FBTyxHQUFHekMsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7RUFDL0QsSUFBTXlDLGVBQWUsR0FBRzFDLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDckRELGVBQWUsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQzVDLElBQU1wQyxHQUFHLEdBQUdULFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDdkNsQyxHQUFHLENBQUNtQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDL0JwQyxHQUFHLENBQUNxQyxTQUFTLEdBQUcsZUFBZTtFQUMvQnJDLEdBQUcsQ0FBQ3NDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ2xDaEIsTUFBTSxDQUFDaUIsSUFBSSxDQUFDLG1GQUFtRixHQUFHUixVQUFVLENBQUM7RUFDL0csQ0FBQyxDQUFDO0VBQ0ZFLGVBQWUsQ0FBQ08sV0FBVyxDQUFDeEMsR0FBRyxDQUFDO0VBQ2hDZ0MsT0FBTyxDQUFDUSxXQUFXLENBQUNQLGVBQWUsQ0FBQztBQUN0QyxDQUFDO0FBRU0sU0FBU1Esb0JBQW9CQSxDQUFBLEVBQUc7RUFDckMsSUFBSWQscUJBQXFCLENBQUMsQ0FBQyxFQUFFO0lBQzNCRyxTQUFTLENBQUMsQ0FBQztFQUNiO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQSxJQUFNWSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCQSxDQUFBLEVBQVM7RUFDbkMsSUFBTUMsWUFBWSxHQUFHckIsTUFBTSxDQUFDc0IsWUFBWSxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7RUFFbkUsSUFBSSxDQUFBSCxZQUFZLGFBQVpBLFlBQVksdUJBQVpBLFlBQVksQ0FBRWxHLE1BQU0sSUFBRyxDQUFDLEVBQUU7SUFDNUIsSUFBSXNHLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFFaEIsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUE5RCxJQUFBLEVBQThFO01BQUEsSUFBeEVaLEdBQUcsR0FBQVksSUFBQSxDQUFIWixHQUFHO1FBQUUyRSxJQUFJLEdBQUEvRCxJQUFBLENBQUorRCxJQUFJO1FBQUVDLElBQUksR0FBQWhFLElBQUEsQ0FBSmdFLElBQUk7UUFBRUMsSUFBSSxHQUFBakUsSUFBQSxDQUFKaUUsSUFBSTtRQUFFQyxJQUFJLEdBQUFsRSxJQUFBLENBQUprRSxJQUFJO1FBQUVDLElBQUksR0FBQW5FLElBQUEsQ0FBSm1FLElBQUk7UUFBRUMsSUFBSSxHQUFBcEUsSUFBQSxDQUFKb0UsSUFBSTtRQUFFQyxJQUFJLEdBQUFyRSxJQUFBLENBQUpxRSxJQUFJO1FBQUVDLEdBQUcsR0FBQXRFLElBQUEsQ0FBSHNFLEdBQUc7UUFBRUMsYUFBYSxHQUFBdkUsSUFBQSxDQUFidUUsYUFBYTtNQUNqRm5GLEdBQUcsR0FBR0EsR0FBRyxHQUFHQSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUU7TUFDMUIyRSxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO01BQzdCQyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO01BQzdCQyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO01BQzdCQyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO01BQzdCQyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO01BQzdCQyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO01BQzdCQyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO01BRTdCLElBQU1HLEtBQUssR0FBR0QsYUFBYSxDQUFDakQsUUFBUSxDQUFDLE9BQU8sQ0FBQztNQUU3QyxJQUFNbUQsTUFBTSxHQUFHRixhQUFhLENBQUNHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7TUFFbkViLE9BQU8sQ0FBQ1ksTUFBTSxHQUFHVixJQUFJLEdBQUdDLElBQUksR0FBR0MsSUFBSSxHQUFHQyxJQUFJLEdBQUdDLElBQUksR0FBR0MsSUFBSSxHQUFHQyxJQUFJLENBQUMsR0FBRztRQUNqRUcsS0FBSyxFQUFMQSxLQUFLO1FBQ0xGLEdBQUcsRUFBSEE7TUFDRixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlLLFFBQVEsR0FBRyxDQUFDO0lBQ2hCLElBQU1DLGNBQWMsR0FBRyxFQUFFO0lBRXpCLE9BQU9DLFlBQVksQ0FBQ3pGLEdBQUcsQ0FBQ3VGLFFBQVEsQ0FBQyxFQUFFO01BQ2pDLElBQU1HLFVBQVUsR0FBR0QsWUFBWSxDQUFDekYsR0FBRyxDQUFDdUYsUUFBUSxDQUFDO01BRTdDLElBQUlHLFVBQVUsQ0FBQ3hELFFBQVEsQ0FBQyx5Q0FBeUMsQ0FBQyxFQUFFO1FBQ2xFc0QsY0FBYyxDQUFDMUgsSUFBSSxDQUFDNEgsVUFBVSxDQUFDO01BQ2pDO01BRUFILFFBQVEsRUFBRTtJQUNaO0lBRUFDLGNBQWMsQ0FBQ3RKLE9BQU8sQ0FBQyxVQUFDaUosYUFBYSxFQUFLO01BQ3hDLElBQU01SixDQUFDLEdBQUdvSyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsWUFBWSxDQUFDSSxPQUFPLENBQUNWLGFBQWEsQ0FBQyxDQUFDO01BRXpELElBQUk3SSxPQUFBLENBQU9mLENBQUMsTUFBSyxRQUFRLEVBQUU7TUFFM0IvQixNQUFNLENBQUNzRixJQUFJLENBQUN2RCxDQUFDLENBQUMsQ0FBQ1csT0FBTyxDQUFDLFVBQUM4RCxHQUFHLEVBQUs7UUFDOUIsSUFBSSxDQUFDekUsQ0FBQyxDQUFDeUUsR0FBRyxDQUFDLEVBQUU7UUFFYixJQUFJLE9BQU96RSxDQUFDLENBQUN5RSxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7VUFDOUIsSUFBSXpFLENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxDQUFDd0UsV0FBVyxDQUFDLENBQUMsQ0FBQ3RDLFFBQVEsQ0FBQ21DLFlBQVksQ0FBQyxFQUFFO1lBQy9DSyxNQUFNLENBQUM7Y0FDTDFFLEdBQUcsRUFBSEEsR0FBRztjQUNIa0YsR0FBRyxFQUFFM0osQ0FBQyxDQUFDeUUsR0FBRyxDQUFDO2NBQ1htRixhQUFhLEVBQWJBO1lBQ0YsQ0FBQyxDQUFDO1VBQ0o7UUFDRjtRQUVBM0wsTUFBTSxDQUFDc0YsSUFBSSxDQUFDdkQsQ0FBQyxDQUFDeUUsR0FBRyxDQUFDLENBQUMsQ0FBQzlELE9BQU8sQ0FBQyxVQUFDeUksSUFBSSxFQUFLO1VBQ3BDLElBQUksT0FBT3BKLENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxDQUFDMkUsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ3BDLElBQUlwSixDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxDQUFDSCxXQUFXLENBQUMsQ0FBQyxDQUFDdEMsUUFBUSxDQUFDbUMsWUFBWSxDQUFDLEVBQUU7Y0FDckRLLE1BQU0sQ0FBQztnQkFDTDFFLEdBQUcsRUFBSEEsR0FBRztnQkFDSDJFLElBQUksRUFBSkEsSUFBSTtnQkFDSk8sR0FBRyxFQUFFM0osQ0FBQyxDQUFDeUUsR0FBRyxDQUFDLENBQUMyRSxJQUFJLENBQUM7Z0JBQ2pCUSxhQUFhLEVBQWJBO2NBQ0YsQ0FBQyxDQUFDO1lBQ0o7VUFDRjtVQUVBM0wsTUFBTSxDQUFDc0YsSUFBSSxDQUFDdkQsQ0FBQyxDQUFDeUUsR0FBRyxDQUFDLENBQUMyRSxJQUFJLENBQUMsQ0FBQyxDQUFDekksT0FBTyxDQUFDLFVBQUMwSSxJQUFJLEVBQUs7WUFDMUMsSUFBSSxPQUFPckosQ0FBQyxDQUFDeUUsR0FBRyxDQUFDLENBQUMyRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO2NBQzFDLElBQUlySixDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0osV0FBVyxDQUFDLENBQUMsQ0FBQ3RDLFFBQVEsQ0FBQ21DLFlBQVksQ0FBQyxFQUFFO2dCQUMzREssTUFBTSxDQUFDO2tCQUNMMUUsR0FBRyxFQUFIQSxHQUFHO2tCQUNIMkUsSUFBSSxFQUFKQSxJQUFJO2tCQUNKQyxJQUFJLEVBQUpBLElBQUk7a0JBQ0pNLEdBQUcsRUFBRTNKLENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxDQUFDMkUsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQztrQkFDdkJPLGFBQWEsRUFBYkE7Z0JBQ0YsQ0FBQyxDQUFDO2NBQ0o7WUFDRjtZQUVBM0wsTUFBTSxDQUFDc0YsSUFBSSxDQUFDdkQsQ0FBQyxDQUFDeUUsR0FBRyxDQUFDLENBQUMyRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQzFJLE9BQU8sQ0FBQyxVQUFDMkksSUFBSSxFQUFLO2NBQ2hELElBQUksT0FBT3RKLENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxDQUFDMkUsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ2hELElBQUl0SixDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNMLFdBQVcsQ0FBQyxDQUFDLENBQUN0QyxRQUFRLENBQUNtQyxZQUFZLENBQUMsRUFBRTtrQkFDakVLLE1BQU0sQ0FBQztvQkFDTDFFLEdBQUcsRUFBSEEsR0FBRztvQkFDSDJFLElBQUksRUFBSkEsSUFBSTtvQkFDSkMsSUFBSSxFQUFKQSxJQUFJO29CQUNKQyxJQUFJLEVBQUpBLElBQUk7b0JBQ0pLLEdBQUcsRUFBRTNKLENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxDQUFDMkUsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQzdCTSxhQUFhLEVBQWJBO2tCQUNGLENBQUMsQ0FBQztnQkFDSjtjQUNGO2NBRUEzTCxNQUFNLENBQUNzRixJQUFJLENBQUN2RCxDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQzNJLE9BQU8sQ0FBQyxVQUFDNEksSUFBSSxFQUFLO2dCQUN0RCxJQUFJLE9BQU92SixDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTtrQkFDdEQsSUFBSXZKLENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxDQUFDMkUsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNOLFdBQVcsQ0FBQyxDQUFDLENBQUN0QyxRQUFRLENBQUNtQyxZQUFZLENBQUMsRUFBRTtvQkFDdkVLLE1BQU0sQ0FBQztzQkFDTDFFLEdBQUcsRUFBSEEsR0FBRztzQkFDSDJFLElBQUksRUFBSkEsSUFBSTtzQkFDSkMsSUFBSSxFQUFKQSxJQUFJO3NCQUNKQyxJQUFJLEVBQUpBLElBQUk7c0JBQ0pDLElBQUksRUFBSkEsSUFBSTtzQkFDSkksR0FBRyxFQUFFM0osQ0FBQyxDQUFDeUUsR0FBRyxDQUFDLENBQUMyRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUM7c0JBQ25DSyxhQUFhLEVBQWJBO29CQUNGLENBQUMsQ0FBQztrQkFDSjtnQkFDRjtnQkFFQTNMLE1BQU0sQ0FBQ3NGLElBQUksQ0FBQ3ZELENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxDQUFDMkUsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQzVJLE9BQU8sQ0FBQyxVQUFDNkksSUFBSSxFQUFLO2tCQUM1RCxJQUFJLE9BQU94SixDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQzVELElBQUl4SixDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ1AsV0FBVyxDQUFDLENBQUMsQ0FBQ3RDLFFBQVEsQ0FBQ21DLFlBQVksQ0FBQyxFQUFFO3NCQUM3RUssTUFBTSxDQUFDO3dCQUNMMUUsR0FBRyxFQUFIQSxHQUFHO3dCQUNIMkUsSUFBSSxFQUFKQSxJQUFJO3dCQUNKQyxJQUFJLEVBQUpBLElBQUk7d0JBQ0pDLElBQUksRUFBSkEsSUFBSTt3QkFDSkMsSUFBSSxFQUFKQSxJQUFJO3dCQUNKQyxJQUFJLEVBQUpBLElBQUk7d0JBQ0pHLEdBQUcsRUFBRTNKLENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxDQUFDMkUsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQzt3QkFDekNJLGFBQWEsRUFBYkE7c0JBQ0YsQ0FBQyxDQUFDO29CQUNKO2tCQUNGO2tCQUVBM0wsTUFBTSxDQUFDc0YsSUFBSSxDQUFDdkQsQ0FBQyxDQUFDeUUsR0FBRyxDQUFDLENBQUMyRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQzdJLE9BQU8sQ0FBQyxVQUFDOEksSUFBSSxFQUFLO29CQUNsRSxJQUFJLE9BQU96SixDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO3NCQUNsRSxJQUFJekosQ0FBQyxDQUFDeUUsR0FBRyxDQUFDLENBQUMyRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDUixXQUFXLENBQUMsQ0FBQyxDQUFDdEMsUUFBUSxDQUFDbUMsWUFBWSxDQUFDLEVBQUU7d0JBQ25GSyxNQUFNLENBQUM7MEJBQ0wxRSxHQUFHLEVBQUhBLEdBQUc7MEJBQ0gyRSxJQUFJLEVBQUpBLElBQUk7MEJBQ0pDLElBQUksRUFBSkEsSUFBSTswQkFDSkMsSUFBSSxFQUFKQSxJQUFJOzBCQUNKQyxJQUFJLEVBQUpBLElBQUk7MEJBQ0pDLElBQUksRUFBSkEsSUFBSTswQkFDSkMsSUFBSSxFQUFKQSxJQUFJOzBCQUNKRSxHQUFHLEVBQUUzSixDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDOzBCQUMvQ0csYUFBYSxFQUFiQTt3QkFDRixDQUFDLENBQUM7c0JBQ0o7b0JBQ0Y7b0JBRUEzTCxNQUFNLENBQUNzRixJQUFJLENBQUN2RCxDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQzlJLE9BQU8sQ0FBQyxVQUFDK0ksSUFBSSxFQUFLO3NCQUN4RSxJQUFJLE9BQU8xSixDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQzJFLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTt3QkFDeEUsSUFBSTFKLENBQUMsQ0FBQ3lFLEdBQUcsQ0FBQyxDQUFDMkUsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNULFdBQVcsQ0FBQyxDQUFDLENBQUN0QyxRQUFRLENBQUNtQyxZQUFZLENBQUMsRUFBRTswQkFDekZLLE1BQU0sQ0FBQzs0QkFDTDFFLEdBQUcsRUFBSEEsR0FBRzs0QkFDSDJFLElBQUksRUFBSkEsSUFBSTs0QkFDSkMsSUFBSSxFQUFKQSxJQUFJOzRCQUNKQyxJQUFJLEVBQUpBLElBQUk7NEJBQ0pDLElBQUksRUFBSkEsSUFBSTs0QkFDSkMsSUFBSSxFQUFKQSxJQUFJOzRCQUNKQyxJQUFJLEVBQUpBLElBQUk7NEJBQ0pDLElBQUksRUFBSkEsSUFBSTs0QkFDSkMsR0FBRyxFQUFFM0osQ0FBQyxDQUFDeUUsR0FBRyxDQUFDLENBQUMyRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUM7NEJBQ3JERSxhQUFhLEVBQWJBOzBCQUNGLENBQUMsQ0FBQzt3QkFDSjtzQkFDRjtvQkFDRixDQUFDLENBQUM7a0JBQ0osQ0FBQyxDQUFDO2dCQUNKLENBQUMsQ0FBQztjQUNKLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztVQUNKLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLElBQU1XLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLElBQUl0TSxNQUFNLENBQUNzRixJQUFJLENBQUMyRixPQUFPLENBQUMsQ0FBQ3RHLE1BQU0sR0FBRyxHQUFHLEVBQUU7SUFDdkMzRSxNQUFNLENBQUNzRixJQUFJLENBQUMyRixPQUFPLENBQUMsQ0FBQ3ZJLE9BQU8sQ0FBQyxVQUFDOEQsR0FBRyxFQUFLO01BQ3BDLElBQU00QixHQUFHLEdBQUdtRSxnQkFBZ0IsQ0FBQ3RCLE9BQU8sQ0FBQ3pFLEdBQUcsQ0FBQyxDQUFDb0YsS0FBSyxDQUFDLEdBQUdwRixHQUFHO01BQ3REOEYsT0FBTyxDQUFDaEksSUFBSSxDQUFDO1FBQUVrSSxHQUFHLEVBQUV2QixPQUFPLENBQUN6RSxHQUFHLENBQUMsQ0FBQ2tGLEdBQUc7UUFBRXRELEdBQUcsRUFBSEEsR0FBRztRQUFFNUIsR0FBRyxFQUFIQTtNQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUM7SUFFRmlHLGNBQWMsQ0FBQ0gsT0FBTyxDQUFDO0VBQ3pCLENBQUMsTUFBTTtJQUNMSSxtQkFBbUIsQ0FBQyxDQUFDO0VBQ3ZCO0FBQ0YsQ0FBQztBQUVELElBQU1ILGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlYLEtBQUssRUFBSztFQUNsQyxJQUFNZSxTQUFTLEdBQUdwRSxRQUFRLENBQUNDLElBQUksQ0FBQ3NELEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDMUMsSUFBTWMsUUFBUSxHQUFHckUsUUFBUSxDQUFDcUUsUUFBUSxHQUFHLElBQUk7RUFDekMsSUFBTUMsU0FBUyxHQUFHRixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNqRSxRQUFRLENBQUMsTUFBTSxDQUFDO0VBQy9DLElBQU1vRSxRQUFRLEdBQUdILFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2pFLFFBQVEsQ0FBQyxLQUFLLENBQUM7RUFDN0MsSUFBSXFFLE9BQU87RUFFWCxJQUFJRCxRQUFRLEVBQUU7SUFDWkMsT0FBTyxVQUFBQyxNQUFBLENBQVVMLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRTtFQUNqQyxDQUFDLE1BQU0sSUFBSUUsU0FBUyxFQUFFO0lBQ3BCRSxPQUFPLE1BQUFDLE1BQUEsQ0FBTUwsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFBSyxNQUFBLENBQU9wQixLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBRTtFQUN6RCxDQUFDLE1BQU07SUFDTG1CLE9BQU8sVUFBQUMsTUFBQSxDQUFVcEIsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUU7RUFDMUM7RUFFQSxVQUFBb0IsTUFBQSxDQUFVSixRQUFRLEVBQUFJLE1BQUEsQ0FBR0QsT0FBTztBQUM5QixDQUFDO0FBRUQsSUFBTUwsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBQSxFQUFTO0VBQ2hDLElBQU1PLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlDLEVBQUUsRUFBSztJQUNoQyxJQUFNQyxFQUFFLEdBQUcxRixRQUFRLENBQUMyRixjQUFjLENBQUNGLEVBQUUsQ0FBQztJQUN0QyxJQUFJQyxFQUFFLEVBQUVBLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDLENBQUM7RUFDckIsQ0FBQztFQUVESixpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQztFQUMzQ0EsaUJBQWlCLENBQUMsNkJBQTZCLENBQUM7QUFDbEQsQ0FBQztBQUVELElBQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUosRUFBRSxFQUFFOUMsYUFBYSxFQUFLO0VBQzNDLElBQUkrQyxFQUFFLEdBQUcxRixRQUFRLENBQUMyRixjQUFjLENBQUNGLEVBQUUsQ0FBQztFQUNwQyxJQUFJLENBQUNDLEVBQUUsRUFBRTtJQUNQQSxFQUFFLEdBQUcvQyxhQUFhLENBQUMsQ0FBQztJQUNwQjNDLFFBQVEsQ0FBQzhGLElBQUksQ0FBQzdDLFdBQVcsQ0FBQ3lDLEVBQUUsQ0FBQztFQUMvQjtFQUNBLE9BQU9BLEVBQUU7QUFDWCxDQUFDO0FBRUQsSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlDLEtBQUssRUFBRUMsR0FBRyxFQUFLO0VBQy9CRCxLQUFLLENBQUNsRCxTQUFTLEdBQUdtRCxHQUFHO0FBQ3ZCLENBQUM7QUFFRCxJQUFNakIsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJSCxPQUFPLEVBQUs7RUFDbEMsSUFBTWEsRUFBRSxHQUFHRyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsWUFBTTtJQUN2RCxJQUFNSyxHQUFHLEdBQUdsRyxRQUFRLENBQUMyQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDdUQsR0FBRyxDQUFDVCxFQUFFLEdBQUcsd0JBQXdCO0lBQ2pDLE9BQU9TLEdBQUc7RUFDWixDQUFDLENBQUM7RUFDRlIsRUFBRSxDQUFDNUMsU0FBUyxHQUFHLEVBQUU7RUFFakIsSUFBTWtELEtBQUssR0FBR0gsYUFBYSxDQUFDLDZCQUE2QixFQUFFLFlBQU07SUFDL0QsSUFBTU0sT0FBTyxHQUFHbkcsUUFBUSxDQUFDMkMsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUMvQ3dELE9BQU8sQ0FBQ1YsRUFBRSxHQUFHLDZCQUE2QjtJQUMxQyxPQUFPVSxPQUFPO0VBQ2hCLENBQUMsQ0FBQztFQUVGSixRQUFRLENBQ05DLEtBQUssaWdCQUFBVCxNQUFBLENBbUJhVixPQUFPLENBQUMzSCxNQUFNLGc1QkFzQ2xDLENBQUM7RUFFRDJILE9BQU8sQ0FBQzVKLE9BQU8sQ0FBQyxVQUFBbUwsS0FBQSxFQUF1QjtJQUFBLElBQXBCckIsR0FBRyxHQUFBcUIsS0FBQSxDQUFIckIsR0FBRztNQUFFcEUsR0FBRyxHQUFBeUYsS0FBQSxDQUFIekYsR0FBRztNQUFFNUIsR0FBRyxHQUFBcUgsS0FBQSxDQUFIckgsR0FBRztJQUM5QixJQUFNbUgsR0FBRyxHQUFHbEcsUUFBUSxDQUFDMkMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QyxJQUFNakksQ0FBQyxHQUFHc0YsUUFBUSxDQUFDMkMsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUNyQyxJQUFNM0osQ0FBQyxHQUFHZ0gsUUFBUSxDQUFDMkMsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUNyQ2pJLENBQUMsQ0FBQ29JLFNBQVMsR0FBR2lDLEdBQUc7SUFDakIvTCxDQUFDLENBQUNxTixJQUFJLEdBQUcxRixHQUFHO0lBQ1ozSCxDQUFDLENBQUNzTixNQUFNLEdBQUcsUUFBUTtJQUNuQnROLENBQUMsQ0FBQ3VOLElBQUksR0FBR3hILEdBQUc7SUFDWm1ILEdBQUcsQ0FBQ2pELFdBQVcsQ0FBQ3ZJLENBQUMsQ0FBQztJQUNsQndMLEdBQUcsQ0FBQ2pELFdBQVcsQ0FBQ2pLLENBQUMsQ0FBQztJQUNsQjBNLEVBQUUsQ0FBQ3pDLFdBQVcsQ0FBQ2lELEdBQUcsQ0FBQztFQUNyQixDQUFDLENBQUM7QUFDSixDQUFDO0FBRU0sU0FBU00scUJBQXFCQSxDQUFBLEVBQUc7RUFDdEMsSUFBSTFGLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDMEYsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMzRixRQUFRLENBQUN1QixRQUFRLENBQUNDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRTtJQUMxRnRDLFFBQVEsQ0FBQytDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFSSxzQkFBc0IsQ0FBQztFQUN0RTtBQUNGOzs7Ozs7Ozs7Ozs7OztBQzdUQSxTQUFTaEIsY0FBY0EsQ0FBQSxFQUFHO0VBQ3hCLElBQUluSSxJQUFJLEdBQUdnRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztFQUM1RCxJQUFJeUcsS0FBSyxHQUFHMUcsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0VBQ2pELElBQUkwRyxPQUFPLEdBQUczRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFFcEQsSUFBSUQsUUFBUSxDQUFDQyxhQUFhLENBQUMsc0NBQXNDLENBQUMsRUFBRTtJQUNsRWpHLElBQUksR0FBR2dHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1DQUFtQyxDQUFDO0lBQ2xFeUcsS0FBSyxHQUFHMUcsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0NBQWtDLENBQUM7SUFDbEUwRyxPQUFPLEdBQUczRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQztFQUMxRTtFQUVBLElBQUksRUFBRWpHLElBQUksSUFBSTBNLEtBQUssSUFBSUMsT0FBTyxDQUFDLEVBQUU7RUFFakMzTSxJQUFJLEdBQUdBLElBQUksQ0FBQzhJLFNBQVMsSUFBSTlJLElBQUksQ0FBQzRNLEtBQUs7RUFDbkM1TSxJQUFJLEdBQUdBLElBQUksQ0FBQzZNLElBQUksQ0FBQyxDQUFDLENBQUN0RCxXQUFXLENBQUMsQ0FBQztFQUNoQ3ZKLElBQUksR0FBR0EsSUFBSSxDQUFDOE0sT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7RUFFdkNKLEtBQUssR0FBR0EsS0FBSyxDQUFDNUQsU0FBUyxDQUFDK0QsSUFBSSxDQUFDLENBQUM7RUFFOUJGLE9BQU8sR0FBR0EsT0FBTyxDQUFDN0QsU0FBUyxDQUN4QlMsV0FBVyxDQUFDLENBQUMsQ0FDYnVELE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQ3hCQSxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUNsQkEsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7RUFFdkIsT0FBTyxHQUFBdkIsTUFBQSxDQUFHdkwsSUFBSSxPQUFBdUwsTUFBQSxDQUFJbUIsS0FBSyxPQUFBbkIsTUFBQSxDQUFJb0IsT0FBTyxFQUFHekksS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzRJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3JFOztBQUVBO0FBQ0EvRSxNQUFNLENBQUNJLGNBQWMsR0FBR0EsY0FBYztBQUV0QyxpRUFBZUEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUMvQjdCLElBQUk0RSwwQkFBMEIsR0FBRyxFQUFFO0FBQ25DLElBQUlDLGtCQUFrQixHQUFHLEtBQUs7QUFDOUIsSUFBSUMscUJBQXFCLEdBQUcsUUFBUTtBQUVwQyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQVM7RUFDaEMsSUFBTUMsU0FBUyxHQUFHbkgsUUFBUSxDQUFDb0gsZ0JBQWdCLENBQUMsK0JBQStCLENBQUM7RUFFNUVELFNBQVMsQ0FBQ2xNLE9BQU8sQ0FBQyxVQUFDb00sUUFBUSxFQUFLO0lBQzlCLElBQUlBLFFBQVEsQ0FBQ3pFLFNBQVMsQ0FBQzBFLFFBQVEsQ0FBQyxvQ0FBb0MsQ0FBQyxFQUFFO0lBRXZFLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7SUFDMUQsSUFBTUksSUFBSSxHQUFHSCxRQUFRLENBQUNJLGFBQWEsQ0FBQ3hILGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztJQUVsRixJQUFJLENBQUN1SCxJQUFJLElBQUlELE9BQU8sQ0FBQ3JLLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFFbkNtSyxRQUFRLENBQUN6RSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQztJQUU1RDBFLE9BQU8sQ0FBQ3RNLE9BQU8sQ0FBQyxVQUFDeU0sTUFBTSxFQUFLO01BQUEsSUFBQUMsYUFBQTtNQUMxQixJQUFNbEMsRUFBRSxJQUFBa0MsYUFBQSxHQUFHRCxNQUFNLENBQUM3TyxLQUFLLGNBQUE4TyxhQUFBLGdCQUFBQSxhQUFBLEdBQVpBLGFBQUEsQ0FBY3RELEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBQXNELGFBQUEsdUJBQXhCQSxhQUFBLENBQTJCLENBQUMsQ0FBQztNQUN4QyxJQUFJLENBQUNsQyxFQUFFLEVBQUU7TUFFVGlDLE1BQU0sQ0FBQzNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ3JDLElBQU1wQyxHQUFHLEdBQUcsSUFBSW1CLEdBQUcsQ0FBQ2hCLFFBQVEsQ0FBQ3VGLElBQUksQ0FBQztRQUNsQzFGLEdBQUcsQ0FBQ3FCLFlBQVksQ0FBQzRGLEdBQUcsQ0FBQyxJQUFJLEVBQUVuQyxFQUFFLENBQUM7UUFDOUIsSUFBSStCLElBQUksQ0FBQ0ssU0FBUyxDQUFDNUcsUUFBUSxDQUFDd0UsRUFBRSxDQUFDLEVBQUU7UUFFakMrQixJQUFJLENBQUNLLFNBQVMsTUFBQXRDLE1BQUEsQ0FBTWlDLElBQUksQ0FBQ0ssU0FBUyxpQkFBQXRDLE1BQUEsQ0FBYTVFLEdBQUcsQ0FBQzBGLElBQUksd0RBQUFkLE1BQUEsQ0FBZ0RFLEVBQUUsU0FBTTtNQUNqSCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBTXFDLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQSxFQUFTO0VBQzFCLElBQU1DLFdBQVcsR0FBRyxHQUFHO0VBQ3ZCL0gsUUFBUSxDQUFDZ0ksTUFBTSxrQ0FBQXpDLE1BQUEsQ0FBa0N3QyxXQUFXLG9EQUFpRDtFQUM3Ry9ILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMrRixLQUFLLENBQUNpQyxLQUFLLE1BQUExQyxNQUFBLENBQU13QyxXQUFXLE9BQUk7RUFDNUUvSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDK0YsS0FBSyxDQUFDa0MsSUFBSSxNQUFBM0MsTUFBQSxDQUFNd0MsV0FBVyxPQUFJO0VBQ2hGLElBQU1JLE1BQU0sR0FBR25JLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQ3ZEa0ksTUFBTSxDQUFDbkMsS0FBSyxDQUFDaUMsS0FBSyxHQUFHRyxRQUFRLENBQUNELE1BQU0sQ0FBQ25DLEtBQUssQ0FBQ2lDLEtBQUssQ0FBQyxHQUFHRixXQUFXLEdBQUdLLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDbkMsS0FBSyxDQUFDa0MsSUFBSSxDQUFDLEdBQUcsSUFBSTtFQUNwR0MsTUFBTSxDQUFDbkMsS0FBSyxDQUFDa0MsSUFBSSxNQUFBM0MsTUFBQSxDQUFNd0MsV0FBVyxPQUFJO0FBQ3hDLENBQUM7QUFFRCxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0VBQ3pCLElBQU1DLFlBQVksR0FBR3RJLFFBQVEsQ0FBQ29ILGdCQUFnQixDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzdFLElBQU1tQixXQUFXLEdBQUdELFlBQVksQ0FBQ2IsYUFBYSxDQUFDeEgsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNuRXNJLFdBQVcsSUFBSUEsV0FBVyxDQUFDbkgsS0FBSyxDQUFDLENBQUM7RUFDbENrSCxZQUFZLElBQUlBLFlBQVksQ0FBQ2IsYUFBYSxJQUFJYSxZQUFZLENBQUNiLGFBQWEsQ0FBQ2UsY0FBYyxDQUFDLENBQUM7QUFDM0YsQ0FBQztBQUVELElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUEsRUFBUztFQUNsQyxPQUFPekksUUFBUSxDQUFDQyxhQUFhLENBQUMsK0JBQStCLENBQUMsQ0FBQzZDLFNBQVM7QUFDMUUsQ0FBQztBQUVELElBQU00RixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFBLEVBQVM7RUFDbEMsT0FBTzFJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtFQUFrRSxDQUFDLENBQUNwSCxLQUFLO0FBQ3pHLENBQUM7QUFFRCxJQUFNOFAsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztFQUN4QixJQUFNQyxZQUFZLEdBQUdILHFCQUFxQixDQUFDLENBQUM7RUFDNUMsSUFBSUcsWUFBWSxLQUFLN0IsMEJBQTBCLEVBQUU7RUFDakRBLDBCQUEwQixHQUFHNkIsWUFBWTtFQUV6QyxJQUFJQyxZQUFZLEdBQUc3SSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFDMUQsSUFBSTZJLGFBQWEsR0FBRzlJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBRTVELElBQUksQ0FBQzRJLFlBQVksRUFBRTtJQUNqQkEsWUFBWSxHQUFHN0ksUUFBUSxDQUFDMkMsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUMxQ2tHLFlBQVksQ0FBQ3BELEVBQUUsR0FBRyxjQUFjO0lBQ2hDekYsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNnRCxXQUFXLENBQUM0RixZQUFZLENBQUM7SUFDeERDLGFBQWEsR0FBRzlJLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDL0NtRyxhQUFhLENBQUNyRCxFQUFFLEdBQUcsZUFBZTtJQUNsQ3pGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDZ0QsV0FBVyxDQUFDNkYsYUFBYSxDQUFDO0VBQzNEO0VBRUFELFlBQVksQ0FBQ3hDLElBQUksMEhBQUFkLE1BQUEsQ0FBMEhtRCxxQkFBcUIsQ0FBQyxDQUFDLE1BQUc7RUFDcktHLFlBQVksQ0FBQ2hCLFNBQVMsR0FBR2UsWUFBWTtFQUVyQ0UsYUFBYSxDQUFDakIsU0FBUyw2bUJBcUJwQjtBQUNMLENBQUM7QUFFRCxJQUFNa0IseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUF5QkEsQ0FBQSxFQUFTO0VBQ3RDL0ksUUFBUSxDQUNMb0gsZ0JBQWdCLENBQUMsc0VBQXNFLENBQUMsQ0FDeEZuTSxPQUFPLENBQUMsVUFBQytOLE9BQU8sRUFBSztJQUNwQixJQUFJQSxPQUFPLENBQUNDLFlBQVksS0FBSyxHQUFHLEVBQUU7TUFDaENELE9BQU8sQ0FBQ2hELEtBQUssQ0FBQ2tELE1BQU0sR0FBRyxPQUFPO0lBQ2hDO0VBQ0YsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUEsRUFBUztFQUNqQyxJQUFNQyxJQUFJLEdBQUdwSixRQUFRLENBQUNvSCxnQkFBZ0IsQ0FBQyx3Q0FBd0MsQ0FBQztFQUNoRixJQUFJZ0MsSUFBSSxDQUFDbE0sTUFBTSxLQUFLLENBQUMsRUFBRTtFQUV2QixJQUFJLENBQUM4QyxRQUFRLENBQUMyRixjQUFjLENBQUMsc0JBQXNCLENBQUMsRUFBRTtJQUNwRCxJQUFNSyxLQUFLLEdBQUdoRyxRQUFRLENBQUMyQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzdDcUQsS0FBSyxDQUFDUCxFQUFFLEdBQUcsc0JBQXNCO0lBQ2pDTyxLQUFLLENBQUM2QixTQUFTLGdIQUVkO0lBQ0Q3SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ2dELFdBQVcsQ0FBQytDLEtBQUssQ0FBQztFQUNuRDtFQUVBb0QsSUFBSSxDQUFDbk8sT0FBTyxDQUFDLFVBQUM4SixHQUFHLEVBQUs7SUFDcEIsSUFBSUEsR0FBRyxDQUFDbkMsU0FBUyxDQUFDMEUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7SUFFOUN2QyxHQUFHLENBQUNuQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNuQ2tDLEdBQUcsQ0FBQ3pELFlBQVksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO0lBRXJDeUQsR0FBRyxDQUFDaEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDeEMsSUFBSSxDQUFDaUQsS0FBSyxDQUFDa0QsTUFBTSxHQUFHLE9BQU87TUFDM0IsSUFBSSxDQUFDbEQsS0FBSyxDQUFDcUQsUUFBUSxHQUFHLE1BQU07TUFDNUIsSUFBSSxDQUFDckQsS0FBSyxDQUFDc0QsVUFBVSxHQUFHLE1BQU07SUFDaEMsQ0FBQyxDQUFDO0lBRUZ2RSxHQUFHLENBQUNoQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBWTtNQUN2QyxJQUFJLENBQUNpRCxLQUFLLGNBQUFULE1BQUEsQ0FBYzBCLHFCQUFxQixDQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBTXNDLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO0VBQzVCLElBQU1DLFdBQVcsR0FBR3hKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0VBQ2xFLElBQUksQ0FBQ3VKLFdBQVcsRUFBRTtFQUNsQixJQUFJQyxZQUFZLEdBQUd6SixRQUFRLENBQ3hCQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FDckN3SCxhQUFhLENBQUN4SCxhQUFhLENBQUMsMkJBQTJCLENBQUM7RUFDM0QsSUFBSSxDQUFDd0osWUFBWSxFQUFFO0VBQ25CQSxZQUFZLENBQUN6RCxLQUFLLGNBQUFULE1BQUEsQ0FBYzBCLHFCQUFxQixDQUFFO0FBQ3pELENBQUM7QUFFRCxJQUFNeUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBSUMsUUFBUSxFQUFLO0VBQ3pDLElBQUlDLElBQUksR0FBRzVKLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDekNpSCxJQUFJLENBQUM5RyxTQUFTLEdBQUc2RyxRQUFRLENBQUNFLEtBQUs7RUFDL0IsT0FBT0QsSUFBSTtBQUNiLENBQUM7QUFFRCxJQUFNRSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQXlCQSxDQUFJSCxRQUFRLEVBQUs7RUFDOUMsSUFBSUksSUFBSSxHQUFHSixRQUFRLENBQUNJLElBQUksQ0FBQzFGLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDbkMwRixJQUFJLENBQUNoTSxHQUFHLENBQUMsQ0FBQztFQUNWZ00sSUFBSSxHQUFHQSxJQUFJLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDckJELElBQUksTUFBQXhFLE1BQUEsQ0FBTXdFLElBQUksT0FBSTtFQUNsQixJQUFJSCxJQUFJLEdBQUc1SixRQUFRLENBQUMyQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQ3pDaUgsSUFBSSxDQUFDSyxTQUFTLEdBQUcsb0RBQW9EO0VBQ3JFTCxJQUFJLENBQUM5RyxTQUFTLEdBQUdpSCxJQUFJO0VBQ3JCLE9BQU9ILElBQUk7QUFDYixDQUFDO0FBRUQsSUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUN6QixJQUFJQyxjQUFjLEdBQUduSyxRQUFRLENBQUNDLGFBQWEsQ0FBQywyQ0FBMkMsQ0FBQztFQUV4RixJQUFJLENBQUNrSyxjQUFjLEVBQUU7SUFDbkJBLGNBQWMsR0FBR25LLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDaER3SCxjQUFjLENBQUMxRSxFQUFFLEdBQUcsMENBQTBDO0lBQzlEekYsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNnRCxXQUFXLENBQUNrSCxjQUFjLENBQUM7SUFDMURBLGNBQWMsQ0FBQ3RDLFNBQVMsNHVEQThEcEI7RUFDTjtFQUVBdUMsTUFBTSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQ25KLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBQXhCLElBQUEsRUFBbUI7SUFBQSxJQUFoQjRLLFNBQVMsR0FBQTVLLElBQUEsQ0FBVDRLLFNBQVM7SUFDL0NBLFNBQVMsR0FBR0EsU0FBUyxJQUFJLEVBQUU7SUFDM0IsSUFBSUEsU0FBUyxDQUFDck4sTUFBTSxHQUFHLENBQUMsRUFBRTtNQUN4QnFOLFNBQVMsR0FBR0EsU0FBUyxDQUFDQyxJQUFJLENBQUMsVUFBQ3hSLENBQUMsRUFBRXlSLENBQUM7UUFBQSxPQUFNelIsQ0FBQyxDQUFDK1EsSUFBSSxHQUFHVSxDQUFDLENBQUNWLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQUEsQ0FBQyxDQUFDO0lBQ2xFO0lBRUEsSUFBTVcsT0FBTyxHQUFHMUssUUFBUSxDQUFDQyxhQUFhLENBQUMsd0JBQXdCLENBQUM7SUFDaEUsSUFBSTBLLEdBQUcsR0FBRzNLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNDQUFzQyxDQUFDO0lBQ3hFLElBQUkySyxLQUFLLEdBQUc1SyxRQUFRLENBQUNDLGFBQWEsQ0FBQywyQ0FBMkMsQ0FBQztJQUUvRSxJQUFJLENBQUMwSyxHQUFHLEVBQUU7TUFDUkEsR0FBRyxHQUFHM0ssUUFBUSxDQUFDMkMsYUFBYSxDQUFDLElBQUksQ0FBQztNQUNsQ2dJLEdBQUcsQ0FBQ2xGLEVBQUUsR0FBRyxxQ0FBcUM7TUFDOUNrRixHQUFHLENBQUM3SCxTQUFTLEdBQUcsV0FBVztNQUMzQjRILE9BQU8sQ0FBQ0csWUFBWSxDQUFDRixHQUFHLEVBQUVELE9BQU8sQ0FBQ0ksVUFBVSxDQUFDO01BQzdDSCxHQUFHLENBQUM1SCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUNsQ2lFLGtCQUFrQixHQUFHLENBQUNBLGtCQUFrQjtRQUN4Q2tELFlBQVksQ0FBQyxDQUFDO01BQ2hCLENBQUMsQ0FBQztJQUNKO0lBRUEsSUFBSSxDQUFDbEQsa0JBQWtCLElBQUk0RCxLQUFLLEVBQUU7TUFDaENELEdBQUcsQ0FBQ0ksV0FBVyxDQUFDSCxLQUFLLENBQUM7SUFDeEI7SUFFQSxJQUFJNUQsa0JBQWtCLEVBQUU7TUFDdEIsSUFBSSxDQUFDNEQsS0FBSyxFQUFFO1FBQ1ZBLEtBQUssR0FBRzVLLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDckNpSSxLQUFLLENBQUNuRixFQUFFLEdBQUcsMENBQTBDO1FBQ3JEa0YsR0FBRyxDQUFDMUgsV0FBVyxDQUFDMkgsS0FBSyxDQUFDO01BQ3hCO01BRUFMLFNBQVMsQ0FBQ3RQLE9BQU8sQ0FBQyxVQUFDME8sUUFBUSxFQUFLO1FBQzlCLElBQUl0UCxDQUFDLEdBQUcyRixRQUFRLENBQUNDLGFBQWEsb0RBQUFzRixNQUFBLENBQW1Eb0UsUUFBUSxDQUFDSSxJQUFJLFFBQUksQ0FBQztRQUVuRyxJQUFJLENBQUMxUCxDQUFDLEVBQUU7VUFDTkEsQ0FBQyxHQUFHMkYsUUFBUSxDQUFDMkMsYUFBYSxDQUFDLEtBQUssQ0FBQztVQUNqQ3RJLENBQUMsQ0FBQzRQLFNBQVMsR0FBRyw4Q0FBOEM7VUFDNUQ1UCxDQUFDLENBQUNpSCxZQUFZLENBQUMsOENBQThDLEVBQUVxSSxRQUFRLENBQUNJLElBQUksQ0FBQztVQUU3RTFQLENBQUMsQ0FBQzBJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1lBQ2hDaEIsTUFBTSxDQUFDakIsUUFBUSxDQUFDdUYsSUFBSSxNQUFBZCxNQUFBLENBQU16RSxRQUFRLENBQUNrSyxNQUFNLEVBQUF6RixNQUFBLENBQUd6RSxRQUFRLENBQUN1QixRQUFRLGtCQUFBa0QsTUFBQSxDQUFlb0UsUUFBUSxDQUFDSSxJQUFJLENBQUU7VUFDN0YsQ0FBQyxDQUFDO1VBRUYxUCxDQUFDLENBQUM0SSxXQUFXLENBQUM2Ryx5QkFBeUIsQ0FBQ0gsUUFBUSxDQUFDLENBQUM7VUFDbER0UCxDQUFDLENBQUM0SSxXQUFXLENBQUN5RyxvQkFBb0IsQ0FBQ0MsUUFBUSxDQUFDLENBQUM7VUFFN0MsSUFBSS9ELE1BQU0sR0FBRzVGLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxNQUFNLENBQUM7VUFDM0NpRCxNQUFNLENBQUNxRSxTQUFTLEdBQUcsb0RBQW9EO1VBQ3ZFckUsTUFBTSxDQUFDOUMsU0FBUyxHQUFHLEdBQUc7VUFDdEI4QyxNQUFNLENBQUM3QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtZQUNyQ3dILFNBQVMsR0FBR0EsU0FBUyxDQUFDVSxNQUFNLENBQUMsVUFBQzVRLENBQUM7Y0FBQSxPQUFLQSxDQUFDLEtBQUtzUCxRQUFRO1lBQUEsRUFBQztZQUNuRFMsTUFBTSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQzFDLEdBQUcsQ0FBQztjQUFFMkMsU0FBUyxFQUFUQTtZQUFVLENBQUMsQ0FBQztZQUN0Q0ssS0FBSyxDQUFDRyxXQUFXLENBQUMxUSxDQUFDLENBQUM7WUFDcEI2UCxZQUFZLENBQUMsQ0FBQztVQUNoQixDQUFDLENBQUM7VUFFRjdQLENBQUMsQ0FBQzRJLFdBQVcsQ0FBQzJDLE1BQU0sQ0FBQztVQUNyQmdGLEtBQUssQ0FBQzNILFdBQVcsQ0FBQzVJLENBQUMsQ0FBQztRQUN0QjtNQUNGLENBQUMsQ0FBQztNQUVGLElBQUk2USxZQUFZLEdBQUdsTCxRQUFRLENBQUNDLGFBQWEsc0RBQUFzRixNQUFBLENBQ2FtRCxxQkFBcUIsQ0FBQyxDQUFDLFFBQzdFLENBQUM7TUFDRCxJQUFJeUMsU0FBUyxHQUFHbkwsUUFBUSxDQUFDMkYsY0FBYyxDQUFDLHFEQUFxRCxDQUFDO01BRTlGLElBQUl3RixTQUFTLEVBQUVQLEtBQUssQ0FBQ0csV0FBVyxDQUFDSSxTQUFTLENBQUM7TUFFM0MsSUFBSSxDQUFDRCxZQUFZLEVBQUU7UUFDakJDLFNBQVMsR0FBR25MLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDekN3SSxTQUFTLENBQUMxRixFQUFFLEdBQUcscURBQXFEO1FBQ3BFMEYsU0FBUyxDQUFDckksU0FBUyxVQUFBeUMsTUFBQSxDQUFVa0QscUJBQXFCLENBQUMsQ0FBQyxRQUFLO1FBQ3pEMEMsU0FBUyxDQUFDcEksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNxSSxFQUFFLEVBQUs7VUFDMUNiLFNBQVMsQ0FBQzFOLElBQUksQ0FBQztZQUNiZ04sS0FBSyxFQUFFcEIscUJBQXFCLENBQUMsQ0FBQztZQUM5QnNCLElBQUksRUFBRXJCLHFCQUFxQixDQUFDO1VBQzlCLENBQUMsQ0FBQztVQUNGMEIsTUFBTSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQzFDLEdBQUcsQ0FBQztZQUFFMkMsU0FBUyxFQUFUQTtVQUFVLENBQUMsQ0FBQztVQUN0Q0wsWUFBWSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBRUZVLEtBQUssQ0FBQzNILFdBQVcsQ0FBQ2tJLFNBQVMsQ0FBQztNQUM5QjtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztFQUFBLElBQUFDLHFCQUFBO0VBQzlCLElBQUlDLElBQUksSUFBQUQscUJBQUEsR0FBR3RMLFFBQVEsQ0FBQzJGLGNBQWMsQ0FBQyxjQUFjLENBQUMsY0FBQTJGLHFCQUFBLHVCQUF2Q0EscUJBQUEsQ0FBeUNyTCxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3hFLElBQUl1TCxTQUFTLEdBQUcsQ0FBQUQsSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUV2RixLQUFLLENBQUN5RixPQUFPLE1BQUssTUFBTTtFQUM5QyxJQUFNQyxLQUFLLEdBQUdILElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFdEwsYUFBYSxDQUFDLCtCQUErQixDQUFDO0VBRWxFLElBQUlzTCxJQUFJLGFBQUpBLElBQUksZUFBSkEsSUFBSSxDQUFFOUYsRUFBRSxJQUFJK0YsU0FBUyxJQUFJRSxLQUFLLElBQUksQ0FBQ0EsS0FBSyxDQUFDekwsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7SUFDOUUsSUFBTTBMLEVBQUUsR0FBRzNMLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdkNnSixFQUFFLENBQUNsRyxFQUFFLEdBQUcsaUJBQWlCO0lBQ3pCLElBQU1tRyxHQUFHLEdBQUc1TCxRQUFRLENBQUMyQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQU1rSixHQUFHLEdBQUc3TCxRQUFRLENBQUMyQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQU1xRCxLQUFLLEdBQUdoRyxRQUFRLENBQUMyQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzdDLElBQU1qQyxLQUFLLEdBQUdWLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDN0NqQyxLQUFLLENBQUNZLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO0lBQzFDWixLQUFLLENBQUNZLFlBQVksQ0FBQyxTQUFTLEVBQUUsdUNBQXVDLENBQUM7SUFDdEVaLEtBQUssQ0FBQzdILEtBQUssR0FBRyxVQUFVLEdBQUcwUyxJQUFJLENBQUM5RixFQUFFLENBQUNxQixPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU87SUFFcEU4RSxHQUFHLENBQUM5SSxTQUFTLEdBQUcsY0FBYztJQUM5QitJLEdBQUcsQ0FBQzVJLFdBQVcsQ0FBQ3ZDLEtBQUssQ0FBQztJQUN0QmlMLEVBQUUsQ0FBQzFJLFdBQVcsQ0FBQzJJLEdBQUcsQ0FBQztJQUNuQkQsRUFBRSxDQUFDMUksV0FBVyxDQUFDNEksR0FBRyxDQUFDO0lBQ25CSCxLQUFLLENBQUN6SSxXQUFXLENBQUMwSSxFQUFFLENBQUM7RUFDdkI7QUFDRixDQUFDO0FBRUQsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUN2QixJQUFJaEwsUUFBUSxDQUFDQyxJQUFJLENBQUMwRixRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7SUFDM0MsSUFBSTNGLFFBQVEsQ0FBQ3VCLFFBQVEsS0FBSyxvREFBb0QsRUFBRTtNQUM5RXlGLGFBQWEsQ0FBQyxDQUFDO01BQ2ZPLFlBQVksQ0FBQyxDQUFDO01BQ2RNLFdBQVcsQ0FBQyxDQUFDO01BQ2JvRCxXQUFXLENBQUM3RSxtQkFBbUIsRUFBRSxHQUFHLENBQUM7TUFDckM2RSxXQUFXLENBQUNoRCx5QkFBeUIsRUFBRSxHQUFHLENBQUM7TUFDM0NnRCxXQUFXLENBQUM1QyxvQkFBb0IsRUFBRSxHQUFHLENBQUM7TUFDdEM0QyxXQUFXLENBQUNwRCxXQUFXLEVBQUUsR0FBRyxDQUFDO01BRTdCb0QsV0FBVyxDQUFDeEMsZUFBZSxFQUFFLEdBQUcsQ0FBQztNQUVqQ1csWUFBWSxDQUFDLENBQUM7TUFDZGxLLFFBQVEsQ0FBQytDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUFBLE9BQU0xQixVQUFVLENBQUM2SSxZQUFZLEVBQUUsR0FBRyxDQUFDO01BQUEsRUFBQztJQUN6RTtJQUVBLElBQUlwSixRQUFRLENBQUN1QixRQUFRLEtBQUssNkRBQTZELEVBQUU7TUFDdkYwSixXQUFXLENBQUNWLGlCQUFpQixFQUFFLEdBQUcsQ0FBQztJQUNyQztFQUNGO0FBQ0YsQ0FBQztBQUVNLFNBQVNXLCtCQUErQkEsQ0FBQSxFQUFHO0VBQ2hELElBQUloTSxRQUFRLENBQUNpTSxVQUFVLEtBQUssVUFBVSxJQUFJak0sUUFBUSxDQUFDaU0sVUFBVSxLQUFLLGFBQWEsRUFBRTtJQUMvRTtJQUNBSCxVQUFVLENBQUMsQ0FBQztFQUNkLENBQUMsTUFBTTtJQUNMO0lBQ0E5TCxRQUFRLENBQUMrQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRStJLFVBQVUsQ0FBQztFQUMzRDtBQUNGOzs7Ozs7VUNoWUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yRDtBQUMwQjtBQUNOO0FBQ0c7QUFFbEZ0Rix3RUFBcUIsQ0FBQyxDQUFDO0FBQ3ZCcEcsa0dBQXVCLENBQUMsQ0FBQztBQUN6QjRMLDRGQUErQixDQUFDLENBQUM7QUFDakM5SSwrRkFBb0IsQ0FBQyxDQUFDO0FBRXRCLElBQUlwQyxRQUFRLENBQUNDLElBQUksQ0FBQzBGLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtFQUMzQ3pHLFFBQVEsQ0FBQytDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVdEIsS0FBSyxFQUFFO0lBQ3BELElBQUlBLEtBQUssQ0FBQzFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7TUFDdEI7TUFDQW1OLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztNQUV2QjlCLE1BQU0sQ0FBQytCLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDO1FBQUVDLE1BQU0sRUFBRTtNQUFpQixDQUFDLEVBQUUsVUFBVUMsUUFBUSxFQUFFO1FBQzNFQyxPQUFPLENBQUN0TixLQUFLLENBQUMsNkJBQTZCLEVBQUVxTixRQUFRLENBQUM7TUFDeEQsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLENBQUM7QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9Db250ZW50U2NyaXB0cy9HaXRodWIvR2l0SHViQ3JlYXRlQnJhbmNoLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvQ29udGVudFNjcmlwdHMvSmlyYS9TaG93Q3JlYXRlQnJhbmNoTGluay5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL0RzRmluZERpY3Rpb25hcnkuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9NYWtlQnJhbmNoTmFtZS5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL1NpdGVjb3JlTGF5b3V0SW1wcm92ZW1lbnRzLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL2NvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2FpdEZvckVsZW1lbnQgPSBhc3luYyAoc2VsZWN0b3IpID0+IHtcbiAgd2hpbGUgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzb2x2ZSkpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXR1cEdpdGh1YkNyZWF0ZUJyYW5jaCgpIHtcbiAgaWYgKGxvY2F0aW9uLmhvc3QgPT09ICdnaXRodWIuY29tJyAmJiBsb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJz9uZXdCcmFuY2g9JykpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgY29uc3QgbmV3QnJhbmNoID0gcGFyYW1zLmdldCgnbmV3QnJhbmNoJyk7XG5cbiAgICBjb25zdCBjdGEgPSBhd2FpdCB3YWl0Rm9yRWxlbWVudCgnW2FwcC1uYW1lPVwicmVwb3MtYnJhbmNoZXNcIl0gYnV0dG9uJyk7XG4gICAgY3RhPy5jbGljaygpO1xuICAgIGNvbnN0IGlucHV0ID0gYXdhaXQgd2FpdEZvckVsZW1lbnQoJ1tyb2xlPWRpYWxvZ11bZGF0YS1mb2N1cy10cmFwPVwiYWN0aXZlXCJdIGlucHV0Jyk7XG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gU2V0IHRoZSB2YWx1ZSBhdHRyaWJ1dGUgZGlyZWN0bHlcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG5ld0JyYW5jaCk7XG5cbiAgICAgICAgLy8gRGlzcGF0Y2ggZXZlbnRzXG4gICAgICAgIGNvbnN0IGV2ZW50c1RvRGlzcGF0Y2ggPSBbJ2lucHV0JywgJ2NoYW5nZScsICdrZXl1cCddO1xuICAgICAgICBldmVudHNUb0Rpc3BhdGNoLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50VHlwZSwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24pO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCduZXdCcmFuY2gnKTtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybCk7XG4gIH1cbn1cbiIsImltcG9ydCBtYWtlQnJhbmNoTmFtZSBmcm9tICcuLi8uLi9NYWtlQnJhbmNoTmFtZSc7XHJcblxyXG5jb25zdCBpc1BhZ2VBSmlyYVRhc2tJVVBhZ2UgPSAoKSA9PiBsb2NhdGlvbi5ob3N0LmluY2x1ZGVzKCdqaXJhLmRhbnNrZXNwaWwuZGsnKSAmJiBsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvYnJvd3NlL0lVLScpO1xyXG5cclxuY29uc3QgY3JlYXRlQ1RBID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJyYW5jaE5hbWUgPSBtYWtlQnJhbmNoTmFtZSgpO1xyXG4gIGlmICghYnJhbmNoTmFtZSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCB0b29sQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1aS10b29sYmFyMi1wcmltYXJ5Jyk7XHJcbiAgY29uc3QgbmV3Q3RhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3Q3RhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2F1aS1idXR0b25zJyk7XHJcbiAgY29uc3QgY3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGN0YS5jbGFzc0xpc3QuYWRkKCdhdWktYnV0dG9uJyk7XHJcbiAgY3RhLmlubmVyVGV4dCA9ICdDcmVhdGUgQnJhbmNoJztcclxuICBjdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tL2RzLWl0dS1mcm9udGVuZC1zZXJ2aWNlL2RhbnNrZXNwaWwtd2Vic2l0ZS9icmFuY2hlcz9uZXdCcmFuY2g9JyArIGJyYW5jaE5hbWUpO1xyXG4gIH0pO1xyXG4gIG5ld0N0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdGEpO1xyXG4gIHRvb2xCYXIuYXBwZW5kQ2hpbGQobmV3Q3RhQ29udGFpbmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDcmVhdGVCcmFuY2hMaW5rKCkge1xyXG4gIGlmIChpc1BhZ2VBSmlyYVRhc2tJVVBhZ2UoKSkge1xyXG4gICAgY3JlYXRlQ1RBKCk7XHJcbiAgfVxyXG59IiwiY29uc3QgZmluZFRleHRJbkRpY3Rpb25hcmllcyA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoU3RyaW5nID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoc2VhcmNoU3RyaW5nPy5sZW5ndGggPiA0KSB7XG4gICAgbGV0IHJlc3VsdHMgPSB7fTtcblxuICAgIGNvbnN0IG91dHB1dCA9ICh7IGtleSwga2V5Miwga2V5Mywga2V5NCwga2V5NSwga2V5Niwga2V5Nywga2V5OCwgcmVzLCBkaWN0aW9uYXJ5S2V5IH0pID0+IHtcbiAgICAgIGtleSA9IGtleSA/IGtleSArICcvJyA6ICcnO1xuICAgICAga2V5MiA9IGtleTIgPyBrZXkyICsgJy8nIDogJyc7XG4gICAgICBrZXkzID0ga2V5MyA/IGtleTMgKyAnLycgOiAnJztcbiAgICAgIGtleTQgPSBrZXk0ID8ga2V5NCArICcvJyA6ICcnO1xuICAgICAga2V5NSA9IGtleTUgPyBrZXk1ICsgJy8nIDogJyc7XG4gICAgICBrZXk2ID0ga2V5NiA/IGtleTYgKyAnLycgOiAnJztcbiAgICAgIGtleTcgPSBrZXk3ID8ga2V5NyArICcvJyA6ICcnO1xuICAgICAga2V5OCA9IGtleTggPyBrZXk4ICsgJy8nIDogJyc7XG5cbiAgICAgIGNvbnN0IGlzRGxvID0gZGljdGlvbmFyeUtleS5pbmNsdWRlcygnLURMTy0nKTtcblxuICAgICAgY29uc3QgcmVnaW9uID0gZGljdGlvbmFyeUtleS5zcGxpdCgncGF0aD0vJylbMV0uc3BsaXQoJyYnKVswXSArICcvJztcblxuICAgICAgcmVzdWx0c1tyZWdpb24gKyBrZXkyICsga2V5MyArIGtleTQgKyBrZXk1ICsga2V5NiArIGtleTcgKyBrZXk4XSA9IHtcbiAgICAgICAgaXNEbG8sXG4gICAgICAgIHJlcyxcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGxldCBpbmRleEtleSA9IDA7XG4gICAgY29uc3QgZGljdGlvbmFyeUtleXMgPSBbXTtcblxuICAgIHdoaWxlIChsb2NhbFN0b3JhZ2Uua2V5KGluZGV4S2V5KSkge1xuICAgICAgY29uc3Qgc3RvcmFnZUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaW5kZXhLZXkpO1xuXG4gICAgICBpZiAoc3RvcmFnZUtleS5pbmNsdWRlcygnL2Rsby9zY2FwaS9jb21tb24vZGljdGlvbmFyeS9kaWN0aW9uYXJ5JykpIHtcbiAgICAgICAgZGljdGlvbmFyeUtleXMucHVzaChzdG9yYWdlS2V5KTtcbiAgICAgIH1cblxuICAgICAgaW5kZXhLZXkrKztcbiAgICB9XG5cbiAgICBkaWN0aW9uYXJ5S2V5cy5mb3JFYWNoKChkaWN0aW9uYXJ5S2V5KSA9PiB7XG4gICAgICBjb25zdCBzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkaWN0aW9uYXJ5S2V5KSk7XG5cbiAgICAgIGlmICh0eXBlb2YgcyAhPT0gJ29iamVjdCcpIHJldHVybjtcblxuICAgICAgT2JqZWN0LmtleXMocykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICghc1trZXldKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHNba2V5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgcmVzOiBzW2tleV0sXG4gICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhzW2tleV0pLmZvckVhY2goKGtleTIpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml0sXG4gICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdKS5mb3JFYWNoKChrZXkzKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXSxcbiAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdKS5mb3JFYWNoKChrZXk0KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdW2tleTRdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgIGtleTQsXG4gICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdLFxuICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdKS5mb3JFYWNoKChrZXk1KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgICBrZXk1LFxuICAgICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdLFxuICAgICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XSkuZm9yRWFjaCgoa2V5NikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XSkuZm9yRWFjaCgoa2V5NykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XSkuZm9yRWFjaCgoa2V5OCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddW2tleThdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XVtrZXk4XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XVtrZXk4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gW107XG4gICAgaWYgKE9iamVjdC5rZXlzKHJlc3VsdHMpLmxlbmd0aCA+IDE1MCkgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdXJsID0gZ2V0RGljdGlvbmFyeVVybChyZXN1bHRzW2tleV0uaXNEbG8pICsga2V5O1xuICAgICAgY29udGVudC5wdXNoKHsgdHh0OiByZXN1bHRzW2tleV0ucmVzLCB1cmwsIGtleSB9KTtcbiAgICB9KTtcblxuICAgIGZpbGxEaWN0aW9uYXJ5KGNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyRmlsbERpY3Rpb25hcnkoKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0RGljdGlvbmFyeVVybCA9IChpc0RsbykgPT4ge1xuICBjb25zdCBob3N0UGFydHMgPSBsb2NhdGlvbi5ob3N0LnNwbGl0KCcuJyk7XG4gIGNvbnN0IHByb3RvY29sID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nO1xuICBjb25zdCBpc1Rvd25FbnYgPSBob3N0UGFydHNbMF0uaW5jbHVkZXMoJ3Rvd24nKTtcbiAgY29uc3QgaXNEZXZFbnYgPSBob3N0UGFydHNbMF0uaW5jbHVkZXMoJ3dlYicpO1xuICBsZXQgZW52UGFydDtcblxuICBpZiAoaXNEZXZFbnYpIHtcbiAgICBlbnZQYXJ0ID0gYHdlYi4ke2hvc3RQYXJ0c1sxXX1gO1xuICB9IGVsc2UgaWYgKGlzVG93bkVudikge1xuICAgIGVudlBhcnQgPSBgJHtob3N0UGFydHNbMF19ZWRpdCR7aXNEbG8gPyAnZGxvJyA6ICdkbGknfWA7XG4gIH0gZWxzZSB7XG4gICAgZW52UGFydCA9IGBlZGl0JHtpc0RsbyA/ICdkbG8nIDogJ2RsaSd9YDtcbiAgfVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2VudlBhcnR9LmRhbnNrZXNwaWwuZGsvc2l0ZWNvcmUvc2hlbGwvQXBwbGljYXRpb25zL0NvbnRlbnQlMjBFZGl0b3IuYXNweD9zY19idz0xJmZvPS9zaXRlY29yZS9jb250ZW50L0RhbnNrZVNwaWwvU2l0ZSUyMHNldHRpbmdzL0RpY3Rpb25hcnkvYDtcbn07XG5cbmNvbnN0IGNsZWFyRmlsbERpY3Rpb25hcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHJlbW92ZUVsZW1lbnRCeUlkID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGVsKSBlbC5yZW1vdmUoKTtcbiAgfTtcblxuICByZW1vdmVFbGVtZW50QnlJZCgnZmluZFRleHRJbkRpY3Rpb25hcmllcycpO1xuICByZW1vdmVFbGVtZW50QnlJZCgnZmluZFRleHRJbkRpY3Rpb25hcmllc1N0eWxlJyk7XG59O1xuXG5jb25zdCBlbnN1cmVFbGVtZW50ID0gKGlkLCBjcmVhdGVFbGVtZW50KSA9PiB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaWYgKCFlbCkge1xuICAgIGVsID0gY3JlYXRlRWxlbWVudCgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG4gIHJldHVybiBlbDtcbn07XG5cbmNvbnN0IHNldFN0eWxlID0gKHN0eWxlLCBjc3MpID0+IHtcbiAgc3R5bGUuaW5uZXJUZXh0ID0gY3NzO1xufTtcblxuY29uc3QgZmlsbERpY3Rpb25hcnkgPSAoY29udGVudCkgPT4ge1xuICBjb25zdCBlbCA9IGVuc3VyZUVsZW1lbnQoJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMnLCAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMnO1xuICAgIHJldHVybiBkaXY7XG4gIH0pO1xuICBlbC5pbm5lclRleHQgPSAnJztcblxuICBjb25zdCBzdHlsZSA9IGVuc3VyZUVsZW1lbnQoJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXNTdHlsZScsICgpID0+IHtcbiAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsLmlkID0gJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXNTdHlsZSc7XG4gICAgcmV0dXJuIHN0eWxlRWw7XG4gIH0pO1xuXG4gIHNldFN0eWxlKFxuICAgIHN0eWxlLFxuICAgIGBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwMDAxO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAxMDB2aDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxM3B4IDFweCAjY2NjO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDk1dmg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5NXZ3O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllczo6YWZ0ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwMDAwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiJHtjb250ZW50Lmxlbmd0aH1cIjtcbiAgICAgICAgICB0b3A6IC0zNXB4O1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNiZGZmZTU7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXM6aG92ZXIge1xuICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMgYTpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzIHAge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllcyBhIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgYFxuICApO1xuXG4gIGNvbnRlbnQuZm9yRWFjaCgoeyB0eHQsIHVybCwga2V5IH0pID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcC5pbm5lclRleHQgPSB0eHQ7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIGEudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgYS50ZXh0ID0ga2V5O1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBEc0ZpbmREaWN0aW9uYXJ5KCkge1xuICBpZiAobG9jYXRpb24uaG9zdC5lbmRzV2l0aCgnZGFuc2tlc3BpbC5kaycpICYmICFsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvc2l0ZWNvcmUvJykpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmaW5kVGV4dEluRGljdGlvbmFyaWVzKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gbWFrZUJyYW5jaE5hbWUoKSB7XHJcbiAgbGV0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXNzdWVkZXRhaWxzICN0eXBlLXZhbCcpO1xyXG4gIGxldCBpc3N1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pc3N1ZS1saW5rJyk7XHJcbiAgbGV0IHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VtbWFyeS12YWwnKTtcclxuXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naHgtY29sdW1ucyAuZ2h4LWlzc3VlLmdoeC1zZWxlY3RlZCcpKSB7XHJcbiAgICB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdoeC1pc3N1ZS5naHgtc2VsZWN0ZWQgLmdoeC10eXBlJyk7XHJcbiAgICBpc3N1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naHgtaXNzdWUuZ2h4LXNlbGVjdGVkIC5naHgta2V5Jyk7XHJcbiAgICBzdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdoeC1pc3N1ZS5naHgtc2VsZWN0ZWQgLmdoeC1zdW1tYXJ5Jyk7XHJcbiAgfVxyXG5cclxuICBpZiAoISh0eXBlICYmIGlzc3VlICYmIHN1bW1hcnkpKSByZXR1cm47XHJcblxyXG4gIHR5cGUgPSB0eXBlLmlubmVyVGV4dCB8fCB0eXBlLnRpdGxlO1xyXG4gIHR5cGUgPSB0eXBlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gIHR5cGUgPSB0eXBlLnJlcGxhY2UoL3N0b3J5LywgJ2ZlYXR1cmUnKTtcclxuXHJcbiAgaXNzdWUgPSBpc3N1ZS5pbm5lclRleHQudHJpbSgpO1xyXG5cclxuICBzdW1tYXJ5ID0gc3VtbWFyeS5pbm5lclRleHRcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAucmVwbGFjZSgvW15hLXogXS9nLCAnLScpXHJcbiAgICAucmVwbGFjZSgvIC9nLCAnLScpXHJcbiAgICAucmVwbGFjZSgvLS0rL2csICctJyk7XHJcblxyXG4gIHJldHVybiBgJHt0eXBlfS8ke2lzc3VlfS0ke3N1bW1hcnl9YC5zbGljZSgwLCA1MCkucmVwbGFjZSgvLSQvLCAnJyk7XHJcbn1cclxuXHJcbi8vIEFkZCB0byB3aW5kb3csIGFzIGl0J3MgdXNlZCBpbiBKaXJhTWFrZUJSYW5jaE5hbWUuanMuXHJcbndpbmRvdy5tYWtlQnJhbmNoTmFtZSA9IG1ha2VCcmFuY2hOYW1lO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZUJyYW5jaE5hbWU7IiwibGV0IHByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkID0gJyc7XG5sZXQgc2hvd0Zhdm9yaXRlc1BvcHVwID0gZmFsc2U7XG5sZXQgZGVmYXVsdFRleHRBcmVhSGVpZ2h0ID0gJzUwMHB4Oyc7XG5cbmNvbnN0IGFkZFVybFRvVHJlZUxpc3RJZHMgPSAoKSA9PiB7XG4gIGNvbnN0IHRyZWVMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY0NvbnRlbnRDb250cm9sU2VsZWN0ZWRMaXN0Jyk7XG5cbiAgdHJlZUxpc3RzLmZvckVhY2goKHRyZWVMaXN0KSA9PiB7XG4gICAgaWYgKHRyZWVMaXN0LmNsYXNzTGlzdC5jb250YWlucygnQ2hyb21lRXh0ZW5zaW9uQWRkVXJsVG9UcmVlTGlzdElkcycpKSByZXR1cm47XG5cbiAgICBjb25zdCBvcHRpb25zID0gdHJlZUxpc3QucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0IG9wdGlvbicpO1xuICAgIGNvbnN0IGhlbHAgPSB0cmVlTGlzdC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRDb250cm9sVHJlZUxpc3RIZWxwJyk7XG5cbiAgICBpZiAoIWhlbHAgfHwgb3B0aW9ucy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHRyZWVMaXN0LmNsYXNzTGlzdC5hZGQoJ0Nocm9tZUV4dGVuc2lvbkFkZFVybFRvVHJlZUxpc3RJZHMnKTtcblxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IG9wdGlvbi52YWx1ZT8uc3BsaXQoJ3wnKT8uWzFdO1xuICAgICAgaWYgKCFpZCkgcmV0dXJuO1xuXG4gICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdmbycsIGlkKTtcbiAgICAgICAgaWYgKGhlbHAuaW5uZXJIVE1MLmluY2x1ZGVzKGlkKSkgcmV0dXJuO1xuXG4gICAgICAgIGhlbHAuaW5uZXJIVE1MID0gYCR7aGVscC5pbm5lckhUTUx9IDxhIGhyZWY9XCIke3VybC5ocmVmfVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHg7XCI+JHtpZH08L2E+YDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHN0cmV0Y2hDb2x1bW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbHVtbldpZHRoID0gNDAwO1xuICBkb2N1bWVudC5jb29raWUgPSBgc2NDb250ZW50RWRpdG9yRm9sZGVyc1dpZHRoPSR7Y29sdW1uV2lkdGh9OyBleHBpcmVzPVRodSwgMzEgRGVjIDIxMDAgMTI6MDA6MDAgVVRDOyBwYXRoPS9gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ29udGVudFRyZWVQYW5lbCcpLnN0eWxlLndpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BsaXR0ZXItYmFyLXZlcnRpY2FsJykuc3R5bGUubGVmdCA9IGAke2NvbHVtbldpZHRofXB4YDtcbiAgY29uc3QgZWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0NvbnRlbnRFZGl0b3InKTtcbiAgZWRpdG9yLnN0eWxlLndpZHRoID0gcGFyc2VJbnQoZWRpdG9yLnN0eWxlLndpZHRoKSAtIGNvbHVtbldpZHRoICsgcGFyc2VJbnQoZWRpdG9yLnN0eWxlLmxlZnQpICsgJ3B4JztcbiAgZWRpdG9yLnN0eWxlLmxlZnQgPSBgJHtjb2x1bW5XaWR0aH1weGA7XG59O1xuXG5jb25zdCBzY3JvbGxUb0l0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY0NvbnRlbnRUcmVlTm9kZUFjdGl2ZScpWzBdO1xuICBjb25zdCB0b2dnbGVBcnJvdyA9IHNlbGVjdGVkSXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICB0b2dnbGVBcnJvdyAmJiB0b2dnbGVBcnJvdy5jbGljaygpO1xuICBzZWxlY3RlZEl0ZW0gJiYgc2VsZWN0ZWRJdGVtLnBhcmVudEVsZW1lbnQgJiYgc2VsZWN0ZWRJdGVtLnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbn07XG5cbmNvbnN0IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRUcmVlTm9kZUFjdGl2ZSBzcGFuJykuaW5uZXJUZXh0O1xufTtcblxuY29uc3QgZ2V0QWN0aXZlVHJlZU5vZGVQYXRoID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjRWRpdG9yUXVpY2tJbmZvIHRyOm50aC1jaGlsZCgzKSAuc2NFZGl0b3JIZWFkZXJRdWlja0luZm9JbnB1dCcpLnZhbHVlO1xufTtcblxuY29uc3QgYWRkQm9va21hcmsgPSAoKSA9PiB7XG4gIGNvbnN0IHNpdGVjb3JlVGV4dCA9IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCgpO1xuICBpZiAoc2l0ZWNvcmVUZXh0ID09PSBwcmV2aW91c1NlbGVjdGVkU2l0ZWNvcmVJZCkgcmV0dXJuO1xuICBwcmV2aW91c1NlbGVjdGVkU2l0ZWNvcmVJZCA9IHNpdGVjb3JlVGV4dDtcblxuICBsZXQgYm9va21hcmtMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2ttYXJrTGluaycpO1xuICBsZXQgYm9va21hcmtTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rbWFya1N0eWxlJyk7XG5cbiAgaWYgKCFib29rbWFya0xpbmspIHtcbiAgICBib29rbWFya0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYm9va21hcmtMaW5rLmlkID0gJ2Jvb2ttYXJrTGluayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGJvb2ttYXJrTGluayk7XG4gICAgYm9va21hcmtTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYm9va21hcmtTdHlsZS5pZCA9ICdib29rbWFya1N0eWxlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoYm9va21hcmtTdHlsZSk7XG4gIH1cblxuICBib29rbWFya0xpbmsuaHJlZiA9IGBqYXZhc2NyaXB0OndpbmRvdy5sb2NhdGlvbi5ocmVmPXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4rJy9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCBFZGl0b3IuYXNweD9zY19idz0xJmZvPSR7Z2V0QWN0aXZlVHJlZU5vZGVQYXRoKCl9J2A7XG4gIGJvb2ttYXJrTGluay5pbm5lckhUTUwgPSBzaXRlY29yZVRleHQ7XG5cbiAgYm9va21hcmtTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAjYm9va21hcmtMaW5rIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgei1pbmRleDogMTAwMDAwMDtcbiAgICAgICAgICB0b3A6IDExcHg7XG4gICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnT3BlbiBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHggMCA3cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDBweCAxcHggIzU4NTg1ODtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgfVxuICAgIGA7XG59O1xuXG5jb25zdCBpbmNyZWFzZUhlaWdodE9uVHJlZUxpc3RzID0gKCkgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NFZGl0b3JTZWN0aW9uUGFuZWxDZWxsIC5zY0NvbnRlbnRDb250cm9sLnNjQ29udGVudENvbnRyb2xUcmVlbGlzdCcpXG4gICAgLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA9PT0gMjIwKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzQwMHB4JztcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmNvbnN0IGZpeElucHV0Q2VsbFRleHRBcmVhID0gKCkgPT4ge1xuICBjb25zdCB0eHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjRWRpdG9yRmllbGRNYXJrZXJJbnB1dENlbGwgdGV4dGFyZWEnKTtcbiAgaWYgKHR4dHMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZml4SW5wdXRDZWxsVGV4dEFyZWEnKSkge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pZCA9ICdmaXhJbnB1dENlbGxUZXh0QXJlYSc7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgLm1vbm9zcGFjZS1mb250IHtmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgXCJBbmRhbGUgTW9ub1wiLCBcIlVidW50dSBNb25vXCIsIG1vbm9zcGFjZTt9XG4gICAgYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgdHh0cy5mb3JFYWNoKCh0eHQpID0+IHtcbiAgICBpZiAodHh0LmNsYXNzTGlzdC5jb250YWlucygnbW9ub3NwYWNlLWZvbnQnKSkgcmV0dXJuO1xuXG4gICAgdHh0LmNsYXNzTGlzdC5hZGQoJ21vbm9zcGFjZS1mb250Jyk7XG4gICAgdHh0LnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsIGZhbHNlKTtcblxuICAgIHR4dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gJzgwMHB4JztcbiAgICAgIHRoaXMuc3R5bGUuZm9udFNpemUgPSAnMTNweCc7XG4gICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSAnMS40NSc7XG4gICAgfSk7XG5cbiAgICB0eHQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3R5bGUgPSBgaGVpZ2h0OiAke2RlZmF1bHRUZXh0QXJlYUhlaWdodH1gOyAvLyBGcm9tIGVubGFyZ2VUcmVlbGlzdCgpIGZ1bmN0aW9uIGJlbG93LlxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGVubGFyZ2VUcmVlbGlzdCA9ICgpID0+IHtcbiAgY29uc3QgZGF0YVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWQqPVwiU2VjdGlvbl9EYXRhXCJdJyk7XG4gIGlmICghZGF0YVNlY3Rpb24pIHJldHVybjtcbiAgbGV0IGRhdGFUcmVlbGlzdCA9IGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9XCJTZWN0aW9uX0RhdGFcIl0nKVxuICAgIC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRDb250cm9sVHJlZWxpc3QnKTtcbiAgaWYgKCFkYXRhVHJlZWxpc3QpIHJldHVybjtcbiAgZGF0YVRyZWVsaXN0LnN0eWxlID0gYGhlaWdodDogJHtkZWZhdWx0VGV4dEFyZWFIZWlnaHR9YDtcbn07XG5cbmNvbnN0IGdldEZhdm9yaXRlSXRlbUxhYmVsID0gKGZhdm9yaXRlKSA9PiB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmlubmVyVGV4dCA9IGZhdm9yaXRlLmxhYmVsO1xuICByZXR1cm4gc3Bhbjtcbn07XG5cbmNvbnN0IGdldEZhdm9yaXRlSXRlbVBhcmVudFRleHQgPSAoZmF2b3JpdGUpID0+IHtcbiAgbGV0IHBhdGggPSBmYXZvcml0ZS5wYXRoLnNwbGl0KCcvJyk7XG4gIHBhdGgucG9wKCk7XG4gIHBhdGggPSBwYXRoLmpvaW4oJy8nKTtcbiAgcGF0aCA9IGAke3BhdGh9LyBgO1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi5jbGFzc05hbWUgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1QYXJlbnQnO1xuICBzcGFuLmlubmVyVGV4dCA9IHBhdGg7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgYWRkRmF2b3JpdGVzID0gKCkgPT4ge1xuICBsZXQgZmF2b3JpdGVzU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNTdHlsZScpO1xuXG4gIGlmICghZmF2b3JpdGVzU3R5bGUpIHtcbiAgICBmYXZvcml0ZXNTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZmF2b3JpdGVzU3R5bGUuaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNTdHlsZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGZhdm9yaXRlc1N0eWxlKTtcbiAgICBmYXZvcml0ZXNTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAuc2MtZ2xvYmFsSGVhZGVyIHtcbiAgICAgICAgei1pbmRleDogMTAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICAjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgICNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyYjJiMmI7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4IDZweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0gc3Bhbi5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbVJlbW92ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbSBzcGFuLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtUmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkOyBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtIHNwYW4uQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1QYXJlbnQge1xuICAgICAgICBjb2xvcjogIzk2OTY5NjtcbiAgICAgIH1cbiAgICBcbiAgICAgICNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwQWRkRmF2b3JpdGUge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9YDtcbiAgfVxuXG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdmYXZvcml0ZXMnLCAoeyBmYXZvcml0ZXMgfSkgPT4ge1xuICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcyB8fCBbXTtcbiAgICBpZiAoZmF2b3JpdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcy5zb3J0KChhLCBiKSA9PiAoYS5wYXRoID4gYi5wYXRoID8gMSA6IC0xKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy1hY2NvdW50SW5mb3JtYXRpb24nKTtcbiAgICBsZXQgZmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzJyk7XG4gICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXAnKTtcblxuICAgIGlmICghZmF2KSB7XG4gICAgICBmYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgZmF2LmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzJztcbiAgICAgIGZhdi5pbm5lclRleHQgPSAnRmF2b3JpdGVzJztcbiAgICAgIGFjY0luZm8uaW5zZXJ0QmVmb3JlKGZhdiwgYWNjSW5mby5maXJzdENoaWxkKTtcbiAgICAgIGZhdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd0Zhdm9yaXRlc1BvcHVwID0gIXNob3dGYXZvcml0ZXNQb3B1cDtcbiAgICAgICAgYWRkRmF2b3JpdGVzKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXNob3dGYXZvcml0ZXNQb3B1cCAmJiBwb3B1cCkge1xuICAgICAgZmF2LnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgICB9XG5cbiAgICBpZiAoc2hvd0Zhdm9yaXRlc1BvcHVwKSB7XG4gICAgICBpZiAoIXBvcHVwKSB7XG4gICAgICAgIHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcHVwLmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXAnO1xuICAgICAgICBmYXYuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgICAgfVxuXG4gICAgICBmYXZvcml0ZXMuZm9yRWFjaCgoZmF2b3JpdGUpID0+IHtcbiAgICAgICAgbGV0IGYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW09XCIke2Zhdm9yaXRlLnBhdGh9XCJdYCk7XG5cbiAgICAgICAgaWYgKCFmKSB7XG4gICAgICAgICAgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGYuY2xhc3NOYW1lID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtJztcbiAgICAgICAgICBmLnNldEF0dHJpYnV0ZSgnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0nLCBmYXZvcml0ZS5wYXRoKTtcblxuICAgICAgICAgIGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2xvY2F0aW9uLm9yaWdpbn0ke2xvY2F0aW9uLnBhdGhuYW1lfT9zY19idz0xJmZvPSR7ZmF2b3JpdGUucGF0aH1gO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZi5hcHBlbmRDaGlsZChnZXRGYXZvcml0ZUl0ZW1QYXJlbnRUZXh0KGZhdm9yaXRlKSk7XG4gICAgICAgICAgZi5hcHBlbmRDaGlsZChnZXRGYXZvcml0ZUl0ZW1MYWJlbChmYXZvcml0ZSkpO1xuXG4gICAgICAgICAgbGV0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICByZW1vdmUuY2xhc3NOYW1lID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtUmVtb3ZlJztcbiAgICAgICAgICByZW1vdmUuaW5uZXJUZXh0ID0gJ3gnO1xuICAgICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcy5maWx0ZXIoKGYpID0+IGYgIT09IGZhdm9yaXRlKTtcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgZmF2b3JpdGVzIH0pO1xuICAgICAgICAgICAgcG9wdXAucmVtb3ZlQ2hpbGQoZik7XG4gICAgICAgICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGYuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChmKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBpc0l0ZW1Jbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtID0gXCIke2dldEFjdGl2ZVRyZWVOb2RlUGF0aCgpfVwiXWBcbiAgICAgICk7XG4gICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBBZGRGYXZvcml0ZScpO1xuXG4gICAgICBpZiAoYWRkQnV0dG9uKSBwb3B1cC5yZW1vdmVDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgICBpZiAoIWlzSXRlbUluTWVudSkge1xuICAgICAgICBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkQnV0dG9uLmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBBZGRGYXZvcml0ZSc7XG4gICAgICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBgQWRkICR7Z2V0QWN0aXZlVHJlZU5vZGVUZXh0KCl9ID8gYDtcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgZmF2b3JpdGVzLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCgpLFxuICAgICAgICAgICAgcGF0aDogZ2V0QWN0aXZlVHJlZU5vZGVQYXRoKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBmYXZvcml0ZXMgfSk7XG4gICAgICAgICAgYWRkRmF2b3JpdGVzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFkZEltYWdlRGlyZWN0VXJsID0gKCkgPT4ge1xuICBsZXQgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFZGl0b3JGcmFtZXMnKT8ucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gIGxldCBpc1Zpc2libGUgPSBpdGVtPy5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gIGNvbnN0IHRhYmxlID0gaXRlbT8ucXVlcnlTZWxlY3RvcigndGFibGUuc2NFZGl0b3JRdWlja0luZm8gdGJvZHknKTtcblxuICBpZiAoaXRlbT8uaWQgJiYgaXNWaXNpYmxlICYmIHRhYmxlICYmICF0YWJsZS5xdWVyeVNlbGVjdG9yKCcjc2NUb29sTWVkaWFQYXRoJykpIHtcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgdHIuaWQgPSAnc2NUb29sTWVkaWFQYXRoJztcbiAgICBjb25zdCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgJ2phdmFzY3JpcHQ6dGhpcy5zZWxlY3QoKTtyZXR1cm4gZmFsc2UnKTtcbiAgICBpbnB1dC52YWx1ZSA9ICctL21lZGlhLycgKyBpdGVtLmlkLnJlcGxhY2UoJ0ZDb250ZW50JywgJycpICsgJy5hc2h4JztcblxuICAgIHRkMS5pbm5lclRleHQgPSAnUmVsYXRpdiBzdGk6JztcbiAgICB0ZDIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkMSk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XG4gIH1cbn07XG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gIGlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykpIHtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09ICcvc2l0ZWNvcmUvc2hlbGwvQXBwbGljYXRpb25zL0NvbnRlbnQlMjBFZGl0b3IuYXNweCcpIHtcbiAgICAgIHN0cmV0Y2hDb2x1bW4oKTtcbiAgICAgIHNjcm9sbFRvSXRlbSgpO1xuICAgICAgYWRkQm9va21hcmsoKTtcbiAgICAgIHNldEludGVydmFsKGFkZFVybFRvVHJlZUxpc3RJZHMsIDUwMCk7XG4gICAgICBzZXRJbnRlcnZhbChpbmNyZWFzZUhlaWdodE9uVHJlZUxpc3RzLCA1MDApO1xuICAgICAgc2V0SW50ZXJ2YWwoZml4SW5wdXRDZWxsVGV4dEFyZWEsIDUwMCk7XG4gICAgICBzZXRJbnRlcnZhbChhZGRCb29rbWFyaywgNTAwKTtcblxuICAgICAgc2V0SW50ZXJ2YWwoZW5sYXJnZVRyZWVsaXN0LCA1MDApO1xuXG4gICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0VGltZW91dChhZGRGYXZvcml0ZXMsIDUwMCkpO1xuICAgIH1cblxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyME1hbmFnZXIvRGVmYXVsdC5hc3B4Jykge1xuICAgICAgc2V0SW50ZXJ2YWwoYWRkSW1hZ2VEaXJlY3RVcmwsIDUwMCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTaXRlY29yZUxheW91dEltcHJvdmVtZW50cygpIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgIC8vIERvY3VtZW50IGlzIGFscmVhZHkgcmVhZHkgdG8gZ28sIHJ1biB5b3VyIGNvZGVcbiAgICBpbml0aWFsaXplKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBET01Db250ZW50TG9hZGVkXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNldHVwRHNGaW5kRGljdGlvbmFyeSB9IGZyb20gJy4vRHNGaW5kRGljdGlvbmFyeSc7XG5pbXBvcnQgeyBzZXR1cEdpdGh1YkNyZWF0ZUJyYW5jaCB9IGZyb20gJy4vQ29udGVudFNjcmlwdHMvR2l0aHViL0dpdEh1YkNyZWF0ZUJyYW5jaCc7XG5pbXBvcnQgeyBzZXR1cFNpdGVjb3JlTGF5b3V0SW1wcm92ZW1lbnRzIH0gZnJvbSAnLi9TaXRlY29yZUxheW91dEltcHJvdmVtZW50cyc7XG5pbXBvcnQgeyBzaG93Q3JlYXRlQnJhbmNoTGluayB9IGZyb20gJy4vQ29udGVudFNjcmlwdHMvSmlyYS9TaG93Q3JlYXRlQnJhbmNoTGluayc7XG5cbnNldHVwRHNGaW5kRGljdGlvbmFyeSgpO1xuc2V0dXBHaXRodWJDcmVhdGVCcmFuY2goKTtcbnNldHVwU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMoKTtcbnNob3dDcmVhdGVCcmFuY2hMaW5rKCk7XG5cbmlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdGMicpIHtcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aGVuIEYyIGlzIHByZXNzZWRcbiAgICAgIGFsZXJ0KCdGMiB3YXMgcHJlc3NlZCcpO1xuXG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2NhbGxNeUZ1bmN0aW9uJyB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigneHh4IENBTExJTkcgTVkgRlVOQ1RJT04geHh4JywgcmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIndhaXRGb3JFbGVtZW50IiwiX3JlZiIsIl9jYWxsZWUiLCJzZWxlY3RvciIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfeCIsInNldHVwR2l0aHViQ3JlYXRlQnJhbmNoIiwiX3NldHVwR2l0aHViQ3JlYXRlQnJhbmNoIiwiX2NhbGxlZTIiLCJwYXJhbXMiLCJuZXdCcmFuY2giLCJjdGEiLCJpbnB1dCIsInVybCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxvY2F0aW9uIiwiaG9zdCIsInNlYXJjaCIsImluY2x1ZGVzIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwiY2xpY2siLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwiZXZlbnRzVG9EaXNwYXRjaCIsImV2ZW50VHlwZSIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoRXZlbnQiLCJVUkwiLCJ3aW5kb3ciLCJzZWFyY2hQYXJhbXMiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibWFrZUJyYW5jaE5hbWUiLCJpc1BhZ2VBSmlyYVRhc2tJVVBhZ2UiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJjcmVhdGVDVEEiLCJicmFuY2hOYW1lIiwidG9vbEJhciIsIm5ld0N0YUNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwib3BlbiIsImFwcGVuZENoaWxkIiwic2hvd0NyZWF0ZUJyYW5jaExpbmsiLCJmaW5kVGV4dEluRGljdGlvbmFyaWVzIiwic2VhcmNoU3RyaW5nIiwiZ2V0U2VsZWN0aW9uIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdHMiLCJvdXRwdXQiLCJrZXkyIiwia2V5MyIsImtleTQiLCJrZXk1Iiwia2V5NiIsImtleTciLCJrZXk4IiwicmVzIiwiZGljdGlvbmFyeUtleSIsImlzRGxvIiwicmVnaW9uIiwic3BsaXQiLCJpbmRleEtleSIsImRpY3Rpb25hcnlLZXlzIiwibG9jYWxTdG9yYWdlIiwic3RvcmFnZUtleSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJjb250ZW50IiwiZ2V0RGljdGlvbmFyeVVybCIsInR4dCIsImZpbGxEaWN0aW9uYXJ5IiwiY2xlYXJGaWxsRGljdGlvbmFyeSIsImhvc3RQYXJ0cyIsInByb3RvY29sIiwiaXNUb3duRW52IiwiaXNEZXZFbnYiLCJlbnZQYXJ0IiwiY29uY2F0IiwicmVtb3ZlRWxlbWVudEJ5SWQiLCJpZCIsImVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJlbnN1cmVFbGVtZW50IiwiYm9keSIsInNldFN0eWxlIiwic3R5bGUiLCJjc3MiLCJkaXYiLCJzdHlsZUVsIiwiX3JlZjIiLCJocmVmIiwidGFyZ2V0IiwidGV4dCIsInNldHVwRHNGaW5kRGljdGlvbmFyeSIsImVuZHNXaXRoIiwiaXNzdWUiLCJzdW1tYXJ5IiwidGl0bGUiLCJ0cmltIiwicmVwbGFjZSIsInByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkIiwic2hvd0Zhdm9yaXRlc1BvcHVwIiwiZGVmYXVsdFRleHRBcmVhSGVpZ2h0IiwiYWRkVXJsVG9UcmVlTGlzdElkcyIsInRyZWVMaXN0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0cmVlTGlzdCIsImNvbnRhaW5zIiwib3B0aW9ucyIsImhlbHAiLCJwYXJlbnRFbGVtZW50Iiwib3B0aW9uIiwiX29wdGlvbiR2YWx1ZSIsInNldCIsImlubmVySFRNTCIsInN0cmV0Y2hDb2x1bW4iLCJjb2x1bW5XaWR0aCIsImNvb2tpZSIsIndpZHRoIiwibGVmdCIsImVkaXRvciIsInBhcnNlSW50Iiwic2Nyb2xsVG9JdGVtIiwic2VsZWN0ZWRJdGVtIiwidG9nZ2xlQXJyb3ciLCJzY3JvbGxJbnRvVmlldyIsImdldEFjdGl2ZVRyZWVOb2RlVGV4dCIsImdldEFjdGl2ZVRyZWVOb2RlUGF0aCIsImFkZEJvb2ttYXJrIiwic2l0ZWNvcmVUZXh0IiwiYm9va21hcmtMaW5rIiwiYm9va21hcmtTdHlsZSIsImluY3JlYXNlSGVpZ2h0T25UcmVlTGlzdHMiLCJlbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0IiwiZml4SW5wdXRDZWxsVGV4dEFyZWEiLCJ0eHRzIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZW5sYXJnZVRyZWVsaXN0IiwiZGF0YVNlY3Rpb24iLCJkYXRhVHJlZWxpc3QiLCJnZXRGYXZvcml0ZUl0ZW1MYWJlbCIsImZhdm9yaXRlIiwic3BhbiIsImxhYmVsIiwiZ2V0RmF2b3JpdGVJdGVtUGFyZW50VGV4dCIsInBhdGgiLCJqb2luIiwiY2xhc3NOYW1lIiwiYWRkRmF2b3JpdGVzIiwiZmF2b3JpdGVzU3R5bGUiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsImZhdm9yaXRlcyIsInNvcnQiLCJiIiwiYWNjSW5mbyIsImZhdiIsInBvcHVwIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwib3JpZ2luIiwiZmlsdGVyIiwiaXNJdGVtSW5NZW51IiwiYWRkQnV0dG9uIiwiZXYiLCJhZGRJbWFnZURpcmVjdFVybCIsIl9kb2N1bWVudCRnZXRFbGVtZW50QiIsIml0ZW0iLCJpc1Zpc2libGUiLCJkaXNwbGF5IiwidGFibGUiLCJ0ciIsInRkMSIsInRkMiIsImluaXRpYWxpemUiLCJzZXRJbnRlcnZhbCIsInNldHVwU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMiLCJyZWFkeVN0YXRlIiwiYWxlcnQiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJhY3Rpb24iLCJyZXNwb25zZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9