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

var isPageAJiraTask = function isPageAJiraTask() {
  return location.host.includes('jira.danskespil.dk') && location.pathname.startsWith('/browse/');
};
var isJiraIU = function isJiraIU() {
  return location.pathname.includes('/IU-');
};
var isJiraFOR = function isJiraFOR() {
  return location.pathname.includes('/FOR-');
};
var createCTA = function createCTA(repo) {
  var branchName = (0,_MakeBranchName__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (!branchName) return;
  var toolBar = document.querySelector('.aui-toolbar2-primary');
  var newCtaContainer = document.createElement('div');
  newCtaContainer.classList.add('aui-buttons');
  var cta = document.createElement('a');
  cta.classList.add('aui-button');
  cta.innerText = 'Create Branch';
  cta.addEventListener('click', function () {
    window.open("https://github.com/ds-itu-frontend-service/".concat(repo, "/branches?newBranch=").concat(branchName));
  });
  newCtaContainer.appendChild(cta);
  toolBar.appendChild(newCtaContainer);
};
function showCreateBranchLink() {
  if (isPageAJiraTask() && (isJiraIU() || isJiraFOR())) {
    createCTA('danskespil-website');
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
    if (location.pathname.toLowerCase() === '/sitecore/shell/applications/content%20editor.aspx') {
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
    if (location.pathname.toLowerCase() === '/sitecore/shell/applications/content%20manager/default.aspx') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQyw2QkFBNkIsRUFBRXdOLFFBQVEsQ0FBQztNQUN4RCxDQUFDLENBQUM7SUFDSjtFQUNGLENBQUMsQ0FBQztBQUNKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL0NvbnRlbnRTY3JpcHRzL0dpdGh1Yi9HaXRIdWJDcmVhdGVCcmFuY2guanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9Db250ZW50U2NyaXB0cy9KaXJhL1Nob3dDcmVhdGVCcmFuY2hMaW5rLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvRHNGaW5kRGljdGlvbmFyeS5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL01ha2VCcmFuY2hOYW1lLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3YWl0Rm9yRWxlbWVudCA9IGFzeW5jIChzZWxlY3RvcikgPT4ge1xuICB3aGlsZSAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKSk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwR2l0aHViQ3JlYXRlQnJhbmNoKCkge1xuICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2dpdGh1Yi5jb20nICYmIGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnP25ld0JyYW5jaD0nKSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcbiAgICBjb25zdCBuZXdCcmFuY2ggPSBwYXJhbXMuZ2V0KCduZXdCcmFuY2gnKTtcblxuICAgIGNvbnN0IGN0YSA9IGF3YWl0IHdhaXRGb3JFbGVtZW50KCdbYXBwLW5hbWU9XCJyZXBvcy1icmFuY2hlc1wiXSBidXR0b24nKTtcbiAgICBjdGE/LmNsaWNrKCk7XG4gICAgY29uc3QgaW5wdXQgPSBhd2FpdCB3YWl0Rm9yRWxlbWVudCgnW3JvbGU9ZGlhbG9nXVtkYXRhLWZvY3VzLXRyYXA9XCJhY3RpdmVcIl0gaW5wdXQnKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBTZXQgdGhlIHZhbHVlIGF0dHJpYnV0ZSBkaXJlY3RseVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmV3QnJhbmNoKTtcblxuICAgICAgICAvLyBEaXNwYXRjaCBldmVudHNcbiAgICAgICAgY29uc3QgZXZlbnRzVG9EaXNwYXRjaCA9IFsnaW5wdXQnLCAnY2hhbmdlJywgJ2tleXVwJ107XG4gICAgICAgIGV2ZW50c1RvRGlzcGF0Y2guZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnRUeXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ25ld0JyYW5jaCcpO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcbiAgfVxufVxuIiwiaW1wb3J0IG1ha2VCcmFuY2hOYW1lIGZyb20gJy4uLy4uL01ha2VCcmFuY2hOYW1lJztcclxuXHJcbmNvbnN0IGlzUGFnZUFKaXJhVGFzayA9ICgpID0+IGxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoJ2ppcmEuZGFuc2tlc3BpbC5kaycpICYmIGxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9icm93c2UvJyk7XHJcbmNvbnN0IGlzSmlyYUlVID0gKCkgPT4gbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9JVS0nKTtcclxuY29uc3QgaXNKaXJhRk9SID0gKCkgPT4gbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9GT1ItJyk7XHJcblxyXG5jb25zdCBjcmVhdGVDVEEgPSAocmVwbykgPT4ge1xyXG4gIGNvbnN0IGJyYW5jaE5hbWUgPSBtYWtlQnJhbmNoTmFtZSgpO1xyXG4gIGlmICghYnJhbmNoTmFtZSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCB0b29sQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1aS10b29sYmFyMi1wcmltYXJ5Jyk7XHJcbiAgY29uc3QgbmV3Q3RhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3Q3RhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2F1aS1idXR0b25zJyk7XHJcbiAgY29uc3QgY3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGN0YS5jbGFzc0xpc3QuYWRkKCdhdWktYnV0dG9uJyk7XHJcbiAgY3RhLmlubmVyVGV4dCA9ICdDcmVhdGUgQnJhbmNoJztcclxuICBjdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9naXRodWIuY29tL2RzLWl0dS1mcm9udGVuZC1zZXJ2aWNlLyR7cmVwb30vYnJhbmNoZXM/bmV3QnJhbmNoPSR7YnJhbmNoTmFtZX1gKTtcclxuICB9KTtcclxuICBuZXdDdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoY3RhKTtcclxuICB0b29sQmFyLmFwcGVuZENoaWxkKG5ld0N0YUNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NyZWF0ZUJyYW5jaExpbmsoKSB7XHJcbiAgaWYgKGlzUGFnZUFKaXJhVGFzaygpICYmIChpc0ppcmFJVSgpIHx8IGlzSmlyYUZPUigpKSkge1xyXG4gICAgY3JlYXRlQ1RBKCdkYW5za2VzcGlsLXdlYnNpdGUnKTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgZmluZFRleHRJbkRpY3Rpb25hcmllcyA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoU3RyaW5nID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoc2VhcmNoU3RyaW5nPy5sZW5ndGggPiA0KSB7XG4gICAgbGV0IHJlc3VsdHMgPSB7fTtcblxuICAgIGNvbnN0IG91dHB1dCA9ICh7IGtleSwga2V5Miwga2V5Mywga2V5NCwga2V5NSwga2V5Niwga2V5Nywga2V5OCwgcmVzLCBkaWN0aW9uYXJ5S2V5IH0pID0+IHtcbiAgICAgIGtleSA9IGtleSA/IGtleSArICcvJyA6ICcnO1xuICAgICAga2V5MiA9IGtleTIgPyBrZXkyICsgJy8nIDogJyc7XG4gICAgICBrZXkzID0ga2V5MyA/IGtleTMgKyAnLycgOiAnJztcbiAgICAgIGtleTQgPSBrZXk0ID8ga2V5NCArICcvJyA6ICcnO1xuICAgICAga2V5NSA9IGtleTUgPyBrZXk1ICsgJy8nIDogJyc7XG4gICAgICBrZXk2ID0ga2V5NiA/IGtleTYgKyAnLycgOiAnJztcbiAgICAgIGtleTcgPSBrZXk3ID8ga2V5NyArICcvJyA6ICcnO1xuICAgICAga2V5OCA9IGtleTggPyBrZXk4ICsgJy8nIDogJyc7XG5cbiAgICAgIGNvbnN0IGlzRGxvID0gZGljdGlvbmFyeUtleS5pbmNsdWRlcygnLURMTy0nKTtcblxuICAgICAgY29uc3QgcmVnaW9uID0gZGljdGlvbmFyeUtleS5zcGxpdCgncGF0aD0vJylbMV0uc3BsaXQoJyYnKVswXSArICcvJztcblxuICAgICAgcmVzdWx0c1tyZWdpb24gKyBrZXkyICsga2V5MyArIGtleTQgKyBrZXk1ICsga2V5NiArIGtleTcgKyBrZXk4XSA9IHtcbiAgICAgICAgaXNEbG8sXG4gICAgICAgIHJlcyxcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGxldCBpbmRleEtleSA9IDA7XG4gICAgY29uc3QgZGljdGlvbmFyeUtleXMgPSBbXTtcblxuICAgIHdoaWxlIChsb2NhbFN0b3JhZ2Uua2V5KGluZGV4S2V5KSkge1xuICAgICAgY29uc3Qgc3RvcmFnZUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaW5kZXhLZXkpO1xuXG4gICAgICBpZiAoc3RvcmFnZUtleS5pbmNsdWRlcygnL2Rsby9zY2FwaS9jb21tb24vZGljdGlvbmFyeS9kaWN0aW9uYXJ5JykpIHtcbiAgICAgICAgZGljdGlvbmFyeUtleXMucHVzaChzdG9yYWdlS2V5KTtcbiAgICAgIH1cblxuICAgICAgaW5kZXhLZXkrKztcbiAgICB9XG5cbiAgICBkaWN0aW9uYXJ5S2V5cy5mb3JFYWNoKChkaWN0aW9uYXJ5S2V5KSA9PiB7XG4gICAgICBjb25zdCBzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkaWN0aW9uYXJ5S2V5KSk7XG5cbiAgICAgIGlmICh0eXBlb2YgcyAhPT0gJ29iamVjdCcpIHJldHVybjtcblxuICAgICAgT2JqZWN0LmtleXMocykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICghc1trZXldKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHNba2V5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgcmVzOiBzW2tleV0sXG4gICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhzW2tleV0pLmZvckVhY2goKGtleTIpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml0sXG4gICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdKS5mb3JFYWNoKChrZXkzKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXSxcbiAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdKS5mb3JFYWNoKChrZXk0KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdW2tleTRdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgIGtleTQsXG4gICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdLFxuICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdKS5mb3JFYWNoKChrZXk1KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgICBrZXk1LFxuICAgICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdLFxuICAgICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XSkuZm9yRWFjaCgoa2V5NikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XSkuZm9yRWFjaCgoa2V5NykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XSkuZm9yRWFjaCgoa2V5OCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddW2tleThdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XVtrZXk4XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XVtrZXk3XVtrZXk4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gW107XG4gICAgaWYgKE9iamVjdC5rZXlzKHJlc3VsdHMpLmxlbmd0aCA+IDE1MCkgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdXJsID0gZ2V0RGljdGlvbmFyeVVybChyZXN1bHRzW2tleV0uaXNEbG8pICsga2V5O1xuICAgICAgY29udGVudC5wdXNoKHsgdHh0OiByZXN1bHRzW2tleV0ucmVzLCB1cmwsIGtleSB9KTtcbiAgICB9KTtcblxuICAgIGZpbGxEaWN0aW9uYXJ5KGNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyRmlsbERpY3Rpb25hcnkoKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0RGljdGlvbmFyeVVybCA9IChpc0RsbykgPT4ge1xuICBjb25zdCBob3N0UGFydHMgPSBsb2NhdGlvbi5ob3N0LnNwbGl0KCcuJyk7XG4gIGNvbnN0IHByb3RvY29sID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nO1xuICBjb25zdCBpc1Rvd25FbnYgPSBob3N0UGFydHNbMF0uaW5jbHVkZXMoJ3Rvd24nKTtcbiAgY29uc3QgaXNEZXZFbnYgPSBob3N0UGFydHNbMF0uaW5jbHVkZXMoJ3dlYicpO1xuICBsZXQgZW52UGFydDtcblxuICBpZiAoaXNEZXZFbnYpIHtcbiAgICBlbnZQYXJ0ID0gYHdlYi4ke2hvc3RQYXJ0c1sxXX1gO1xuICB9IGVsc2UgaWYgKGlzVG93bkVudikge1xuICAgIGVudlBhcnQgPSBgJHtob3N0UGFydHNbMF19ZWRpdCR7aXNEbG8gPyAnZGxvJyA6ICdkbGknfWA7XG4gIH0gZWxzZSB7XG4gICAgZW52UGFydCA9IGBlZGl0JHtpc0RsbyA/ICdkbG8nIDogJ2RsaSd9YDtcbiAgfVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2VudlBhcnR9LmRhbnNrZXNwaWwuZGsvc2l0ZWNvcmUvc2hlbGwvQXBwbGljYXRpb25zL0NvbnRlbnQlMjBFZGl0b3IuYXNweD9zY19idz0xJmZvPS9zaXRlY29yZS9jb250ZW50L0RhbnNrZVNwaWwvU2l0ZSUyMHNldHRpbmdzL0RpY3Rpb25hcnkvYDtcbn07XG5cbmNvbnN0IGNsZWFyRmlsbERpY3Rpb25hcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHJlbW92ZUVsZW1lbnRCeUlkID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGVsKSBlbC5yZW1vdmUoKTtcbiAgfTtcblxuICByZW1vdmVFbGVtZW50QnlJZCgnZmluZFRleHRJbkRpY3Rpb25hcmllcycpO1xuICByZW1vdmVFbGVtZW50QnlJZCgnZmluZFRleHRJbkRpY3Rpb25hcmllc1N0eWxlJyk7XG59O1xuXG5jb25zdCBlbnN1cmVFbGVtZW50ID0gKGlkLCBjcmVhdGVFbGVtZW50KSA9PiB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaWYgKCFlbCkge1xuICAgIGVsID0gY3JlYXRlRWxlbWVudCgpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG4gIHJldHVybiBlbDtcbn07XG5cbmNvbnN0IHNldFN0eWxlID0gKHN0eWxlLCBjc3MpID0+IHtcbiAgc3R5bGUuaW5uZXJUZXh0ID0gY3NzO1xufTtcblxuY29uc3QgZmlsbERpY3Rpb25hcnkgPSAoY29udGVudCkgPT4ge1xuICBjb25zdCBlbCA9IGVuc3VyZUVsZW1lbnQoJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMnLCAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMnO1xuICAgIHJldHVybiBkaXY7XG4gIH0pO1xuICBlbC5pbm5lclRleHQgPSAnJztcblxuICBjb25zdCBzdHlsZSA9IGVuc3VyZUVsZW1lbnQoJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXNTdHlsZScsICgpID0+IHtcbiAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsLmlkID0gJ2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXNTdHlsZSc7XG4gICAgcmV0dXJuIHN0eWxlRWw7XG4gIH0pO1xuXG4gIHNldFN0eWxlKFxuICAgIHN0eWxlLFxuICAgIGBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwMDAxO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAxMDB2aDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxM3B4IDFweCAjY2NjO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDk1dmg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5NXZ3O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllczo6YWZ0ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwMDAwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiJHtjb250ZW50Lmxlbmd0aH1cIjtcbiAgICAgICAgICB0b3A6IC0zNXB4O1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNiZGZmZTU7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXM6aG92ZXIge1xuICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMgYTpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzIHAge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllcyBhIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgYFxuICApO1xuXG4gIGNvbnRlbnQuZm9yRWFjaCgoeyB0eHQsIHVybCwga2V5IH0pID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcC5pbm5lclRleHQgPSB0eHQ7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIGEudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgYS50ZXh0ID0ga2V5O1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBEc0ZpbmREaWN0aW9uYXJ5KCkge1xuICBpZiAobG9jYXRpb24uaG9zdC5lbmRzV2l0aCgnZGFuc2tlc3BpbC5kaycpICYmICFsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvc2l0ZWNvcmUvJykpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmaW5kVGV4dEluRGljdGlvbmFyaWVzKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gbWFrZUJyYW5jaE5hbWUoKSB7XG4gIGxldCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzc3VlZGV0YWlscyAjdHlwZS12YWwnKTtcbiAgbGV0IGlzc3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlzc3VlLWxpbmsnKTtcbiAgbGV0IHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VtbWFyeS12YWwnKTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdoeC1jb2x1bW5zIC5naHgtaXNzdWUuZ2h4LXNlbGVjdGVkJykpIHtcbiAgICB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdoeC1pc3N1ZS5naHgtc2VsZWN0ZWQgLmdoeC10eXBlJyk7XG4gICAgaXNzdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWlzc3VlLmdoeC1zZWxlY3RlZCAuZ2h4LWtleScpO1xuICAgIHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWlzc3VlLmdoeC1zZWxlY3RlZCAuZ2h4LXN1bW1hcnknKTtcbiAgfVxuXG4gIGlmICghKHR5cGUgJiYgaXNzdWUgJiYgc3VtbWFyeSkpIHJldHVybjtcblxuICB0eXBlID0gdHlwZS5pbm5lclRleHQgfHwgdHlwZS50aXRsZTtcbiAgdHlwZSA9IHR5cGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIHR5cGUgPSB0eXBlLnJlcGxhY2UoL3N0b3J5LywgJ2ZlYXR1cmUnKTtcblxuICBpc3N1ZSA9IGlzc3VlLmlubmVyVGV4dC50cmltKCk7XG5cbiAgc3VtbWFyeSA9IHN1bW1hcnkuaW5uZXJUZXh0XG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvW15hLXogXS9nLCAnLScpXG4gICAgLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgIC5yZXBsYWNlKC8tLSsvZywgJy0nKTtcblxuICByZXR1cm4gYCR7dHlwZX0vJHtpc3N1ZX0tJHtzdW1tYXJ5fWAuc2xpY2UoMCwgNTApLnJlcGxhY2UoLy0kLywgJycpO1xufVxuXG4vLyBBZGQgdG8gd2luZG93LCBhcyBpdCdzIHVzZWQgaW4gSmlyYU1ha2VCUmFuY2hOYW1lLmpzLlxud2luZG93Lm1ha2VCcmFuY2hOYW1lID0gbWFrZUJyYW5jaE5hbWU7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VCcmFuY2hOYW1lO1xuIiwibGV0IHByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkID0gJyc7XG5sZXQgc2hvd0Zhdm9yaXRlc1BvcHVwID0gZmFsc2U7XG5sZXQgZGVmYXVsdFRleHRBcmVhSGVpZ2h0ID0gJzUwMHB4Oyc7XG5cbmNvbnN0IGFkZFVybFRvVHJlZUxpc3RJZHMgPSAoKSA9PiB7XG4gIGNvbnN0IHRyZWVMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY0NvbnRlbnRDb250cm9sU2VsZWN0ZWRMaXN0Jyk7XG5cbiAgdHJlZUxpc3RzLmZvckVhY2goKHRyZWVMaXN0KSA9PiB7XG4gICAgaWYgKHRyZWVMaXN0LmNsYXNzTGlzdC5jb250YWlucygnQ2hyb21lRXh0ZW5zaW9uQWRkVXJsVG9UcmVlTGlzdElkcycpKSByZXR1cm47XG5cbiAgICBjb25zdCBvcHRpb25zID0gdHJlZUxpc3QucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0IG9wdGlvbicpO1xuICAgIGNvbnN0IGhlbHAgPSB0cmVlTGlzdC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRDb250cm9sVHJlZUxpc3RIZWxwJyk7XG5cbiAgICBpZiAoIWhlbHAgfHwgb3B0aW9ucy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHRyZWVMaXN0LmNsYXNzTGlzdC5hZGQoJ0Nocm9tZUV4dGVuc2lvbkFkZFVybFRvVHJlZUxpc3RJZHMnKTtcblxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IG9wdGlvbi52YWx1ZT8uc3BsaXQoJ3wnKT8uWzFdO1xuICAgICAgaWYgKCFpZCkgcmV0dXJuO1xuXG4gICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdmbycsIGlkKTtcbiAgICAgICAgaWYgKGhlbHAuaW5uZXJIVE1MLmluY2x1ZGVzKGlkKSkgcmV0dXJuO1xuXG4gICAgICAgIGhlbHAuaW5uZXJIVE1MID0gYCR7aGVscC5pbm5lckhUTUx9IDxhIGhyZWY9XCIke3VybC5ocmVmfVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHg7XCI+JHtpZH08L2E+YDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHN0cmV0Y2hDb2x1bW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbHVtbldpZHRoID0gNDAwO1xuICBkb2N1bWVudC5jb29raWUgPSBgc2NDb250ZW50RWRpdG9yRm9sZGVyc1dpZHRoPSR7Y29sdW1uV2lkdGh9OyBleHBpcmVzPVRodSwgMzEgRGVjIDIxMDAgMTI6MDA6MDAgVVRDOyBwYXRoPS9gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ29udGVudFRyZWVQYW5lbCcpLnN0eWxlLndpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BsaXR0ZXItYmFyLXZlcnRpY2FsJykuc3R5bGUubGVmdCA9IGAke2NvbHVtbldpZHRofXB4YDtcbiAgY29uc3QgZWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0NvbnRlbnRFZGl0b3InKTtcbiAgZWRpdG9yLnN0eWxlLndpZHRoID0gcGFyc2VJbnQoZWRpdG9yLnN0eWxlLndpZHRoKSAtIGNvbHVtbldpZHRoICsgcGFyc2VJbnQoZWRpdG9yLnN0eWxlLmxlZnQpICsgJ3B4JztcbiAgZWRpdG9yLnN0eWxlLmxlZnQgPSBgJHtjb2x1bW5XaWR0aH1weGA7XG59O1xuXG5jb25zdCBzY3JvbGxUb0l0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY0NvbnRlbnRUcmVlTm9kZUFjdGl2ZScpWzBdO1xuICBjb25zdCB0b2dnbGVBcnJvdyA9IHNlbGVjdGVkSXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICB0b2dnbGVBcnJvdyAmJiB0b2dnbGVBcnJvdy5jbGljaygpO1xuICBzZWxlY3RlZEl0ZW0gJiYgc2VsZWN0ZWRJdGVtLnBhcmVudEVsZW1lbnQgJiYgc2VsZWN0ZWRJdGVtLnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbn07XG5cbmNvbnN0IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRUcmVlTm9kZUFjdGl2ZSBzcGFuJykuaW5uZXJUZXh0O1xufTtcblxuY29uc3QgZ2V0QWN0aXZlVHJlZU5vZGVQYXRoID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjRWRpdG9yUXVpY2tJbmZvIHRyOm50aC1jaGlsZCgzKSAuc2NFZGl0b3JIZWFkZXJRdWlja0luZm9JbnB1dCcpLnZhbHVlO1xufTtcblxuY29uc3QgYWRkQm9va21hcmsgPSAoKSA9PiB7XG4gIGNvbnN0IHNpdGVjb3JlVGV4dCA9IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCgpO1xuICBpZiAoc2l0ZWNvcmVUZXh0ID09PSBwcmV2aW91c1NlbGVjdGVkU2l0ZWNvcmVJZCkgcmV0dXJuO1xuICBwcmV2aW91c1NlbGVjdGVkU2l0ZWNvcmVJZCA9IHNpdGVjb3JlVGV4dDtcblxuICBsZXQgYm9va21hcmtMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2ttYXJrTGluaycpO1xuICBsZXQgYm9va21hcmtTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rbWFya1N0eWxlJyk7XG5cbiAgaWYgKCFib29rbWFya0xpbmspIHtcbiAgICBib29rbWFya0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYm9va21hcmtMaW5rLmlkID0gJ2Jvb2ttYXJrTGluayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGJvb2ttYXJrTGluayk7XG4gICAgYm9va21hcmtTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYm9va21hcmtTdHlsZS5pZCA9ICdib29rbWFya1N0eWxlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoYm9va21hcmtTdHlsZSk7XG4gIH1cblxuICBib29rbWFya0xpbmsuaHJlZiA9IGBqYXZhc2NyaXB0OndpbmRvdy5sb2NhdGlvbi5ocmVmPXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4rJy9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCBFZGl0b3IuYXNweD9zY19idz0xJmZvPSR7Z2V0QWN0aXZlVHJlZU5vZGVQYXRoKCl9J2A7XG4gIGJvb2ttYXJrTGluay5pbm5lckhUTUwgPSBzaXRlY29yZVRleHQ7XG5cbiAgYm9va21hcmtTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAjYm9va21hcmtMaW5rIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgei1pbmRleDogMTAwMDAwMDtcbiAgICAgICAgICB0b3A6IDExcHg7XG4gICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnT3BlbiBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHggMCA3cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDBweCAxcHggIzU4NTg1ODtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgfVxuICAgIGA7XG59O1xuXG5jb25zdCBpbmNyZWFzZUhlaWdodE9uVHJlZUxpc3RzID0gKCkgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NFZGl0b3JTZWN0aW9uUGFuZWxDZWxsIC5zY0NvbnRlbnRDb250cm9sLnNjQ29udGVudENvbnRyb2xUcmVlbGlzdCcpXG4gICAgLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA9PT0gMjIwKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzQwMHB4JztcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmNvbnN0IGZpeElucHV0Q2VsbFRleHRBcmVhID0gKCkgPT4ge1xuICBjb25zdCB0eHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjRWRpdG9yRmllbGRNYXJrZXJJbnB1dENlbGwgdGV4dGFyZWEnKTtcbiAgaWYgKHR4dHMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZml4SW5wdXRDZWxsVGV4dEFyZWEnKSkge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pZCA9ICdmaXhJbnB1dENlbGxUZXh0QXJlYSc7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgLm1vbm9zcGFjZS1mb250IHtmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgXCJBbmRhbGUgTW9ub1wiLCBcIlVidW50dSBNb25vXCIsIG1vbm9zcGFjZTt9XG4gICAgYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgdHh0cy5mb3JFYWNoKCh0eHQpID0+IHtcbiAgICBpZiAodHh0LmNsYXNzTGlzdC5jb250YWlucygnbW9ub3NwYWNlLWZvbnQnKSkgcmV0dXJuO1xuXG4gICAgdHh0LmNsYXNzTGlzdC5hZGQoJ21vbm9zcGFjZS1mb250Jyk7XG4gICAgdHh0LnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsIGZhbHNlKTtcblxuICAgIHR4dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gJzgwMHB4JztcbiAgICAgIHRoaXMuc3R5bGUuZm9udFNpemUgPSAnMTNweCc7XG4gICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSAnMS40NSc7XG4gICAgfSk7XG5cbiAgICB0eHQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3R5bGUgPSBgaGVpZ2h0OiAke2RlZmF1bHRUZXh0QXJlYUhlaWdodH1gOyAvLyBGcm9tIGVubGFyZ2VUcmVlbGlzdCgpIGZ1bmN0aW9uIGJlbG93LlxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGVubGFyZ2VUcmVlbGlzdCA9ICgpID0+IHtcbiAgY29uc3QgZGF0YVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWQqPVwiU2VjdGlvbl9EYXRhXCJdJyk7XG4gIGlmICghZGF0YVNlY3Rpb24pIHJldHVybjtcbiAgbGV0IGRhdGFUcmVlbGlzdCA9IGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9XCJTZWN0aW9uX0RhdGFcIl0nKVxuICAgIC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRDb250cm9sVHJlZWxpc3QnKTtcbiAgaWYgKCFkYXRhVHJlZWxpc3QpIHJldHVybjtcbiAgZGF0YVRyZWVsaXN0LnN0eWxlID0gYGhlaWdodDogJHtkZWZhdWx0VGV4dEFyZWFIZWlnaHR9YDtcbn07XG5cbmNvbnN0IGdldEZhdm9yaXRlSXRlbUxhYmVsID0gKGZhdm9yaXRlKSA9PiB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmlubmVyVGV4dCA9IGZhdm9yaXRlLmxhYmVsO1xuICByZXR1cm4gc3Bhbjtcbn07XG5cbmNvbnN0IGdldEZhdm9yaXRlSXRlbVBhcmVudFRleHQgPSAoZmF2b3JpdGUpID0+IHtcbiAgbGV0IHBhdGggPSBmYXZvcml0ZS5wYXRoLnNwbGl0KCcvJyk7XG4gIHBhdGgucG9wKCk7XG4gIHBhdGggPSBwYXRoLmpvaW4oJy8nKTtcbiAgcGF0aCA9IGAke3BhdGh9LyBgO1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi5jbGFzc05hbWUgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1QYXJlbnQnO1xuICBzcGFuLmlubmVyVGV4dCA9IHBhdGg7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgYWRkRmF2b3JpdGVzID0gKCkgPT4ge1xuICBsZXQgZmF2b3JpdGVzU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNTdHlsZScpO1xuXG4gIGlmICghZmF2b3JpdGVzU3R5bGUpIHtcbiAgICBmYXZvcml0ZXNTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZmF2b3JpdGVzU3R5bGUuaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNTdHlsZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGZhdm9yaXRlc1N0eWxlKTtcbiAgICBmYXZvcml0ZXNTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAuc2MtZ2xvYmFsSGVhZGVyIHtcbiAgICAgICAgei1pbmRleDogMTAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICAjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgICNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyYjJiMmI7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4IDZweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0gc3Bhbi5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbVJlbW92ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbSBzcGFuLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtUmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkOyBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtIHNwYW4uQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1QYXJlbnQge1xuICAgICAgICBjb2xvcjogIzk2OTY5NjtcbiAgICAgIH1cbiAgICBcbiAgICAgICNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwQWRkRmF2b3JpdGUge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9YDtcbiAgfVxuXG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdmYXZvcml0ZXMnLCAoeyBmYXZvcml0ZXMgfSkgPT4ge1xuICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcyB8fCBbXTtcbiAgICBpZiAoZmF2b3JpdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcy5zb3J0KChhLCBiKSA9PiAoYS5wYXRoID4gYi5wYXRoID8gMSA6IC0xKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy1hY2NvdW50SW5mb3JtYXRpb24nKTtcbiAgICBsZXQgZmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzJyk7XG4gICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXAnKTtcblxuICAgIGlmICghZmF2KSB7XG4gICAgICBmYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgZmF2LmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzJztcbiAgICAgIGZhdi5pbm5lclRleHQgPSAnRmF2b3JpdGVzJztcbiAgICAgIGFjY0luZm8uaW5zZXJ0QmVmb3JlKGZhdiwgYWNjSW5mby5maXJzdENoaWxkKTtcbiAgICAgIGZhdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd0Zhdm9yaXRlc1BvcHVwID0gIXNob3dGYXZvcml0ZXNQb3B1cDtcbiAgICAgICAgYWRkRmF2b3JpdGVzKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXNob3dGYXZvcml0ZXNQb3B1cCAmJiBwb3B1cCkge1xuICAgICAgZmF2LnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgICB9XG5cbiAgICBpZiAoc2hvd0Zhdm9yaXRlc1BvcHVwKSB7XG4gICAgICBpZiAoIXBvcHVwKSB7XG4gICAgICAgIHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcHVwLmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXAnO1xuICAgICAgICBmYXYuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgICAgfVxuXG4gICAgICBmYXZvcml0ZXMuZm9yRWFjaCgoZmF2b3JpdGUpID0+IHtcbiAgICAgICAgbGV0IGYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW09XCIke2Zhdm9yaXRlLnBhdGh9XCJdYCk7XG5cbiAgICAgICAgaWYgKCFmKSB7XG4gICAgICAgICAgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGYuY2xhc3NOYW1lID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtJztcbiAgICAgICAgICBmLnNldEF0dHJpYnV0ZSgnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0nLCBmYXZvcml0ZS5wYXRoKTtcblxuICAgICAgICAgIGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2xvY2F0aW9uLm9yaWdpbn0ke2xvY2F0aW9uLnBhdGhuYW1lfT9zY19idz0xJmZvPSR7ZmF2b3JpdGUucGF0aH1gO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZi5hcHBlbmRDaGlsZChnZXRGYXZvcml0ZUl0ZW1QYXJlbnRUZXh0KGZhdm9yaXRlKSk7XG4gICAgICAgICAgZi5hcHBlbmRDaGlsZChnZXRGYXZvcml0ZUl0ZW1MYWJlbChmYXZvcml0ZSkpO1xuXG4gICAgICAgICAgbGV0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICByZW1vdmUuY2xhc3NOYW1lID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtUmVtb3ZlJztcbiAgICAgICAgICByZW1vdmUuaW5uZXJUZXh0ID0gJ3gnO1xuICAgICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcy5maWx0ZXIoKGYpID0+IGYgIT09IGZhdm9yaXRlKTtcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgZmF2b3JpdGVzIH0pO1xuICAgICAgICAgICAgcG9wdXAucmVtb3ZlQ2hpbGQoZik7XG4gICAgICAgICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGYuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChmKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBpc0l0ZW1Jbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtID0gXCIke2dldEFjdGl2ZVRyZWVOb2RlUGF0aCgpfVwiXWBcbiAgICAgICk7XG4gICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBBZGRGYXZvcml0ZScpO1xuXG4gICAgICBpZiAoYWRkQnV0dG9uKSBwb3B1cC5yZW1vdmVDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgICBpZiAoIWlzSXRlbUluTWVudSkge1xuICAgICAgICBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkQnV0dG9uLmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBBZGRGYXZvcml0ZSc7XG4gICAgICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBgQWRkICR7Z2V0QWN0aXZlVHJlZU5vZGVUZXh0KCl9ID8gYDtcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgZmF2b3JpdGVzLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCgpLFxuICAgICAgICAgICAgcGF0aDogZ2V0QWN0aXZlVHJlZU5vZGVQYXRoKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBmYXZvcml0ZXMgfSk7XG4gICAgICAgICAgYWRkRmF2b3JpdGVzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFkZEltYWdlRGlyZWN0VXJsID0gKCkgPT4ge1xuICBsZXQgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFZGl0b3JGcmFtZXMnKT8ucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gIGxldCBpc1Zpc2libGUgPSBpdGVtPy5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gIGNvbnN0IHRhYmxlID0gaXRlbT8ucXVlcnlTZWxlY3RvcigndGFibGUuc2NFZGl0b3JRdWlja0luZm8gdGJvZHknKTtcblxuICBpZiAoaXRlbT8uaWQgJiYgaXNWaXNpYmxlICYmIHRhYmxlICYmICF0YWJsZS5xdWVyeVNlbGVjdG9yKCcjc2NUb29sTWVkaWFQYXRoJykpIHtcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgdHIuaWQgPSAnc2NUb29sTWVkaWFQYXRoJztcbiAgICBjb25zdCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgJ2phdmFzY3JpcHQ6dGhpcy5zZWxlY3QoKTtyZXR1cm4gZmFsc2UnKTtcbiAgICBpbnB1dC52YWx1ZSA9ICctL21lZGlhLycgKyBpdGVtLmlkLnJlcGxhY2UoJ0ZDb250ZW50JywgJycpICsgJy5hc2h4JztcblxuICAgIHRkMS5pbm5lclRleHQgPSAnUmVsYXRpdiBzdGk6JztcbiAgICB0ZDIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkMSk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XG4gIH1cbn07XG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gIGlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykpIHtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJy9zaXRlY29yZS9zaGVsbC9hcHBsaWNhdGlvbnMvY29udGVudCUyMGVkaXRvci5hc3B4Jykge1xuICAgICAgc3RyZXRjaENvbHVtbigpO1xuICAgICAgc2Nyb2xsVG9JdGVtKCk7XG4gICAgICBhZGRCb29rbWFyaygpO1xuICAgICAgc2V0SW50ZXJ2YWwoYWRkVXJsVG9UcmVlTGlzdElkcywgNTAwKTtcbiAgICAgIHNldEludGVydmFsKGluY3JlYXNlSGVpZ2h0T25UcmVlTGlzdHMsIDUwMCk7XG4gICAgICBzZXRJbnRlcnZhbChmaXhJbnB1dENlbGxUZXh0QXJlYSwgNTAwKTtcbiAgICAgIHNldEludGVydmFsKGFkZEJvb2ttYXJrLCA1MDApO1xuXG4gICAgICBzZXRJbnRlcnZhbChlbmxhcmdlVHJlZWxpc3QsIDUwMCk7XG5cbiAgICAgIGFkZEZhdm9yaXRlcygpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRUaW1lb3V0KGFkZEZhdm9yaXRlcywgNTAwKSk7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICcvc2l0ZWNvcmUvc2hlbGwvYXBwbGljYXRpb25zL2NvbnRlbnQlMjBtYW5hZ2VyL2RlZmF1bHQuYXNweCcpIHtcbiAgICAgIHNldEludGVydmFsKGFkZEltYWdlRGlyZWN0VXJsLCA1MDApO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMoKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpIHtcbiAgICAvLyBEb2N1bWVudCBpcyBhbHJlYWR5IHJlYWR5IHRvIGdvLCBydW4geW91ciBjb2RlXG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3IgRE9NQ29udGVudExvYWRlZFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzZXR1cERzRmluZERpY3Rpb25hcnkgfSBmcm9tICcuL0RzRmluZERpY3Rpb25hcnknO1xyXG5pbXBvcnQgeyBzZXR1cEdpdGh1YkNyZWF0ZUJyYW5jaCB9IGZyb20gJy4vQ29udGVudFNjcmlwdHMvR2l0aHViL0dpdEh1YkNyZWF0ZUJyYW5jaCc7XHJcbmltcG9ydCB7IHNldHVwU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMgfSBmcm9tICcuL1NpdGVjb3JlTGF5b3V0SW1wcm92ZW1lbnRzJztcclxuaW1wb3J0IHsgc2hvd0NyZWF0ZUJyYW5jaExpbmsgfSBmcm9tICcuL0NvbnRlbnRTY3JpcHRzL0ppcmEvU2hvd0NyZWF0ZUJyYW5jaExpbmsnO1xyXG5cclxuc2V0dXBEc0ZpbmREaWN0aW9uYXJ5KCk7XHJcbnNldHVwR2l0aHViQ3JlYXRlQnJhbmNoKCk7XHJcbnNldHVwU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMoKTtcclxuc2hvd0NyZWF0ZUJyYW5jaExpbmsoKTtcclxuXHJcbmlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRjInKSB7XHJcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aGVuIEYyIGlzIHByZXNzZWRcclxuICAgICAgYWxlcnQoJ0YyIHdhcyBwcmVzc2VkJyk7XHJcblxyXG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2NhbGxNeUZ1bmN0aW9uJyB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCd4eHggQ0FMTElORyBNWSBGVU5DVElPTiB4eHgnLCByZXNwb25zZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIndhaXRGb3JFbGVtZW50IiwiX3JlZiIsIl9jYWxsZWUiLCJzZWxlY3RvciIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfeCIsInNldHVwR2l0aHViQ3JlYXRlQnJhbmNoIiwiX3NldHVwR2l0aHViQ3JlYXRlQnJhbmNoIiwiX2NhbGxlZTIiLCJwYXJhbXMiLCJuZXdCcmFuY2giLCJjdGEiLCJpbnB1dCIsInVybCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxvY2F0aW9uIiwiaG9zdCIsInNlYXJjaCIsImluY2x1ZGVzIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwiY2xpY2siLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwiZXZlbnRzVG9EaXNwYXRjaCIsImV2ZW50VHlwZSIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoRXZlbnQiLCJVUkwiLCJ3aW5kb3ciLCJzZWFyY2hQYXJhbXMiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibWFrZUJyYW5jaE5hbWUiLCJpc1BhZ2VBSmlyYVRhc2siLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJpc0ppcmFJVSIsImlzSmlyYUZPUiIsImNyZWF0ZUNUQSIsInJlcG8iLCJicmFuY2hOYW1lIiwidG9vbEJhciIsIm5ld0N0YUNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwib3BlbiIsImNvbmNhdCIsImFwcGVuZENoaWxkIiwic2hvd0NyZWF0ZUJyYW5jaExpbmsiLCJmaW5kVGV4dEluRGljdGlvbmFyaWVzIiwic2VhcmNoU3RyaW5nIiwiZ2V0U2VsZWN0aW9uIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdHMiLCJvdXRwdXQiLCJrZXkyIiwia2V5MyIsImtleTQiLCJrZXk1Iiwia2V5NiIsImtleTciLCJrZXk4IiwicmVzIiwiZGljdGlvbmFyeUtleSIsImlzRGxvIiwicmVnaW9uIiwic3BsaXQiLCJpbmRleEtleSIsImRpY3Rpb25hcnlLZXlzIiwibG9jYWxTdG9yYWdlIiwic3RvcmFnZUtleSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJjb250ZW50IiwiZ2V0RGljdGlvbmFyeVVybCIsInR4dCIsImZpbGxEaWN0aW9uYXJ5IiwiY2xlYXJGaWxsRGljdGlvbmFyeSIsImhvc3RQYXJ0cyIsInByb3RvY29sIiwiaXNUb3duRW52IiwiaXNEZXZFbnYiLCJlbnZQYXJ0IiwicmVtb3ZlRWxlbWVudEJ5SWQiLCJpZCIsImVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJlbnN1cmVFbGVtZW50IiwiYm9keSIsInNldFN0eWxlIiwic3R5bGUiLCJjc3MiLCJkaXYiLCJzdHlsZUVsIiwiX3JlZjIiLCJocmVmIiwidGFyZ2V0IiwidGV4dCIsInNldHVwRHNGaW5kRGljdGlvbmFyeSIsImVuZHNXaXRoIiwiaXNzdWUiLCJzdW1tYXJ5IiwidGl0bGUiLCJ0cmltIiwicmVwbGFjZSIsInByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkIiwic2hvd0Zhdm9yaXRlc1BvcHVwIiwiZGVmYXVsdFRleHRBcmVhSGVpZ2h0IiwiYWRkVXJsVG9UcmVlTGlzdElkcyIsInRyZWVMaXN0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0cmVlTGlzdCIsImNvbnRhaW5zIiwib3B0aW9ucyIsImhlbHAiLCJwYXJlbnRFbGVtZW50Iiwib3B0aW9uIiwiX29wdGlvbiR2YWx1ZSIsInNldCIsImlubmVySFRNTCIsInN0cmV0Y2hDb2x1bW4iLCJjb2x1bW5XaWR0aCIsImNvb2tpZSIsIndpZHRoIiwibGVmdCIsImVkaXRvciIsInBhcnNlSW50Iiwic2Nyb2xsVG9JdGVtIiwic2VsZWN0ZWRJdGVtIiwidG9nZ2xlQXJyb3ciLCJzY3JvbGxJbnRvVmlldyIsImdldEFjdGl2ZVRyZWVOb2RlVGV4dCIsImdldEFjdGl2ZVRyZWVOb2RlUGF0aCIsImFkZEJvb2ttYXJrIiwic2l0ZWNvcmVUZXh0IiwiYm9va21hcmtMaW5rIiwiYm9va21hcmtTdHlsZSIsImluY3JlYXNlSGVpZ2h0T25UcmVlTGlzdHMiLCJlbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0IiwiZml4SW5wdXRDZWxsVGV4dEFyZWEiLCJ0eHRzIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZW5sYXJnZVRyZWVsaXN0IiwiZGF0YVNlY3Rpb24iLCJkYXRhVHJlZWxpc3QiLCJnZXRGYXZvcml0ZUl0ZW1MYWJlbCIsImZhdm9yaXRlIiwic3BhbiIsImxhYmVsIiwiZ2V0RmF2b3JpdGVJdGVtUGFyZW50VGV4dCIsInBhdGgiLCJqb2luIiwiY2xhc3NOYW1lIiwiYWRkRmF2b3JpdGVzIiwiZmF2b3JpdGVzU3R5bGUiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsImZhdm9yaXRlcyIsInNvcnQiLCJiIiwiYWNjSW5mbyIsImZhdiIsInBvcHVwIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwib3JpZ2luIiwiZmlsdGVyIiwiaXNJdGVtSW5NZW51IiwiYWRkQnV0dG9uIiwiZXYiLCJhZGRJbWFnZURpcmVjdFVybCIsIl9kb2N1bWVudCRnZXRFbGVtZW50QiIsIml0ZW0iLCJpc1Zpc2libGUiLCJkaXNwbGF5IiwidGFibGUiLCJ0ciIsInRkMSIsInRkMiIsImluaXRpYWxpemUiLCJzZXRJbnRlcnZhbCIsInNldHVwU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMiLCJyZWFkeVN0YXRlIiwiYWxlcnQiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJhY3Rpb24iLCJyZXNwb25zZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9