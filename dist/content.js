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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxFQUFFLFVBQVVDLFFBQVEsRUFBRTtRQUMzRUMsT0FBTyxDQUFDM04sS0FBSyxDQUFDLDZCQUE2QixFQUFFME4sUUFBUSxDQUFDO01BQ3hELENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvQ29udGVudFNjcmlwdHMvR2l0aHViL0dpdEh1YkNyZWF0ZUJyYW5jaC5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL0NvbnRlbnRTY3JpcHRzL0ppcmEvU2hvd0NyZWF0ZUJyYW5jaExpbmsuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9Ec0ZpbmREaWN0aW9uYXJ5LmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvTWFrZUJyYW5jaE5hbWUuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9TaXRlY29yZUxheW91dEltcHJvdmVtZW50cy5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdhaXRGb3JFbGVtZW50ID0gYXN5bmMgKHNlbGVjdG9yKSA9PiB7XG4gIHdoaWxlICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpKTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0dXBHaXRodWJDcmVhdGVCcmFuY2goKSB7XG4gIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnZ2l0aHViLmNvbScgJiYgbG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCc/bmV3QnJhbmNoPScpKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgIGNvbnN0IG5ld0JyYW5jaCA9IHBhcmFtcy5nZXQoJ25ld0JyYW5jaCcpO1xuXG4gICAgY29uc3QgY3RhID0gYXdhaXQgd2FpdEZvckVsZW1lbnQoJ1thcHAtbmFtZT1cInJlcG9zLWJyYW5jaGVzXCJdIGJ1dHRvbicpO1xuICAgIGN0YT8uY2xpY2soKTtcbiAgICBjb25zdCBpbnB1dCA9IGF3YWl0IHdhaXRGb3JFbGVtZW50KCdbcm9sZT1kaWFsb2ddW2RhdGEtZm9jdXMtdHJhcD1cImFjdGl2ZVwiXSBpbnB1dCcpO1xuICAgIGlmIChpbnB1dCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFNldCB0aGUgdmFsdWUgYXR0cmlidXRlIGRpcmVjdGx5XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdCcmFuY2gpO1xuXG4gICAgICAgIC8vIERpc3BhdGNoIGV2ZW50c1xuICAgICAgICBjb25zdCBldmVudHNUb0Rpc3BhdGNoID0gWydpbnB1dCcsICdjaGFuZ2UnLCAna2V5dXAnXTtcbiAgICAgICAgZXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudChldmVudFR5cGUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgnbmV3QnJhbmNoJyk7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpO1xuICB9XG59XG4iLCJpbXBvcnQgbWFrZUJyYW5jaE5hbWUgZnJvbSAnLi4vLi4vTWFrZUJyYW5jaE5hbWUnO1xyXG5cclxuY29uc3QgaXNQYWdlQUppcmFUYXNrID0gKCkgPT4gbG9jYXRpb24uaG9zdC5pbmNsdWRlcygnamlyYS5kYW5za2VzcGlsLmRrJykgJiYgbG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2Jyb3dzZS8nKTtcclxuY29uc3QgaXNKaXJhSVUgPSAoKSA9PiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnL0lVLScpO1xyXG5jb25zdCBpc0ppcmFGT1IgPSAoKSA9PiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnL0ZPUi0nKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNUQSA9IChyZXBvKSA9PiB7XHJcbiAgY29uc3QgYnJhbmNoTmFtZSA9IG1ha2VCcmFuY2hOYW1lKCk7XHJcbiAgaWYgKCFicmFuY2hOYW1lKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHRvb2xCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVpLXRvb2xiYXIyLXByaW1hcnknKTtcclxuICBjb25zdCBuZXdDdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdDdGFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXVpLWJ1dHRvbnMnKTtcclxuICBjb25zdCBjdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgY3RhLmNsYXNzTGlzdC5hZGQoJ2F1aS1idXR0b24nKTtcclxuICBjdGEuaW5uZXJUZXh0ID0gJ0NyZWF0ZSBCcmFuY2gnO1xyXG4gIGN0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHdpbmRvdy5vcGVuKGBodHRwczovL2dpdGh1Yi5jb20vZHMtaXR1LWZyb250ZW5kLXNlcnZpY2UvJHtyZXBvfS9icmFuY2hlcz9uZXdCcmFuY2g9JHticmFuY2hOYW1lfWApO1xyXG4gIH0pO1xyXG4gIG5ld0N0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdGEpO1xyXG4gIHRvb2xCYXIuYXBwZW5kQ2hpbGQobmV3Q3RhQ29udGFpbmVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Q3JlYXRlQnJhbmNoTGluaygpIHtcclxuICBpZiAoaXNQYWdlQUppcmFUYXNrKCkgJiYgKGlzSmlyYUlVKCkgfHwgaXNKaXJhRk9SKCkpKSB7XHJcbiAgICBjcmVhdGVDVEEoJ2RhbnNrZXNwaWwtd2Vic2l0ZScpO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBmaW5kVGV4dEluRGljdGlvbmFyaWVzID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hTdHJpbmcgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChzZWFyY2hTdHJpbmc/Lmxlbmd0aCA+IDQpIHtcbiAgICBsZXQgcmVzdWx0cyA9IHt9O1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gKHsga2V5LCBrZXkyLCBrZXkzLCBrZXk0LCBrZXk1LCBrZXk2LCBrZXk3LCBrZXk4LCByZXMsIGRpY3Rpb25hcnlLZXkgfSkgPT4ge1xuICAgICAga2V5ID0ga2V5ID8ga2V5ICsgJy8nIDogJyc7XG4gICAgICBrZXkyID0ga2V5MiA/IGtleTIgKyAnLycgOiAnJztcbiAgICAgIGtleTMgPSBrZXkzID8ga2V5MyArICcvJyA6ICcnO1xuICAgICAga2V5NCA9IGtleTQgPyBrZXk0ICsgJy8nIDogJyc7XG4gICAgICBrZXk1ID0ga2V5NSA/IGtleTUgKyAnLycgOiAnJztcbiAgICAgIGtleTYgPSBrZXk2ID8ga2V5NiArICcvJyA6ICcnO1xuICAgICAga2V5NyA9IGtleTcgPyBrZXk3ICsgJy8nIDogJyc7XG4gICAgICBrZXk4ID0ga2V5OCA/IGtleTggKyAnLycgOiAnJztcblxuICAgICAgY29uc3QgaXNEbG8gPSBkaWN0aW9uYXJ5S2V5LmluY2x1ZGVzKCctRExPLScpO1xuXG4gICAgICBjb25zdCByZWdpb24gPSBkaWN0aW9uYXJ5S2V5LnNwbGl0KCdwYXRoPS8nKVsxXS5zcGxpdCgnJicpWzBdICsgJy8nO1xuXG4gICAgICByZXN1bHRzW3JlZ2lvbiArIGtleTIgKyBrZXkzICsga2V5NCArIGtleTUgKyBrZXk2ICsga2V5NyArIGtleThdID0ge1xuICAgICAgICBpc0RsbyxcbiAgICAgICAgcmVzLFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgbGV0IGluZGV4S2V5ID0gMDtcbiAgICBjb25zdCBkaWN0aW9uYXJ5S2V5cyA9IFtdO1xuXG4gICAgd2hpbGUgKGxvY2FsU3RvcmFnZS5rZXkoaW5kZXhLZXkpKSB7XG4gICAgICBjb25zdCBzdG9yYWdlS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpbmRleEtleSk7XG5cbiAgICAgIGlmIChzdG9yYWdlS2V5LmluY2x1ZGVzKCcvZGxvL3NjYXBpL2NvbW1vbi9kaWN0aW9uYXJ5L2RpY3Rpb25hcnknKSkge1xuICAgICAgICBkaWN0aW9uYXJ5S2V5cy5wdXNoKHN0b3JhZ2VLZXkpO1xuICAgICAgfVxuXG4gICAgICBpbmRleEtleSsrO1xuICAgIH1cblxuICAgIGRpY3Rpb25hcnlLZXlzLmZvckVhY2goKGRpY3Rpb25hcnlLZXkpID0+IHtcbiAgICAgIGNvbnN0IHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRpY3Rpb25hcnlLZXkpKTtcblxuICAgICAgaWYgKHR5cGVvZiBzICE9PSAnb2JqZWN0JykgcmV0dXJuO1xuXG4gICAgICBPYmplY3Qua2V5cyhzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFzW2tleV0pIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mIHNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoc1trZXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICByZXM6IHNba2V5XSxcbiAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKHNba2V5XSkuZm9yRWFjaCgoa2V5MikgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXSxcbiAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml0pLmZvckVhY2goKGtleTMpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdLFxuICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml1ba2V5M10pLmZvckVhY2goKGtleTQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0sXG4gICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0pLmZvckVhY2goKGtleTUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgICAgICBrZXk0LFxuICAgICAgICAgICAgICAgICAgICAgIGtleTUsXG4gICAgICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV0sXG4gICAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdKS5mb3JFYWNoKChrZXk2KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk0LFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTYsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdKS5mb3JFYWNoKChrZXk3KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl1ba2V5N10udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddKS5mb3JFYWNoKChrZXk4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl1ba2V5N11ba2V5OF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddW2tleThdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddW2tleThdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcbiAgICBpZiAoT2JqZWN0LmtleXMocmVzdWx0cykubGVuZ3RoID4gMTUwKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMocmVzdWx0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBnZXREaWN0aW9uYXJ5VXJsKHJlc3VsdHNba2V5XS5pc0RsbykgKyBrZXk7XG4gICAgICBjb250ZW50LnB1c2goeyB0eHQ6IHJlc3VsdHNba2V5XS5yZXMsIHVybCwga2V5IH0pO1xuICAgIH0pO1xuXG4gICAgZmlsbERpY3Rpb25hcnkoY29udGVudCk7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJGaWxsRGljdGlvbmFyeSgpO1xuICB9XG59O1xuXG5jb25zdCBnZXREaWN0aW9uYXJ5VXJsID0gKGlzRGxvKSA9PiB7XG4gIGNvbnN0IGhvc3RQYXJ0cyA9IGxvY2F0aW9uLmhvc3Quc3BsaXQoJy4nKTtcbiAgY29uc3QgcHJvdG9jb2wgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLyc7XG4gIGNvbnN0IGlzVG93bkVudiA9IGhvc3RQYXJ0c1swXS5pbmNsdWRlcygndG93bicpO1xuICBjb25zdCBpc0RldkVudiA9IGhvc3RQYXJ0c1swXS5pbmNsdWRlcygnd2ViJyk7XG4gIGxldCBlbnZQYXJ0O1xuXG4gIGlmIChpc0RldkVudikge1xuICAgIGVudlBhcnQgPSBgd2ViLiR7aG9zdFBhcnRzWzFdfWA7XG4gIH0gZWxzZSBpZiAoaXNUb3duRW52KSB7XG4gICAgZW52UGFydCA9IGAke2hvc3RQYXJ0c1swXX1lZGl0JHtpc0RsbyA/ICdkbG8nIDogJ2RsaSd9YDtcbiAgfSBlbHNlIHtcbiAgICBlbnZQYXJ0ID0gYGVkaXQke2lzRGxvID8gJ2RsbycgOiAnZGxpJ31gO1xuICB9XG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7ZW52UGFydH0uZGFuc2tlc3BpbC5kay9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4P3NjX2J3PTEmZm89L3NpdGVjb3JlL2NvbnRlbnQvRGFuc2tlU3BpbC9TaXRlJTIwc2V0dGluZ3MvRGljdGlvbmFyeS9gO1xufTtcblxuY29uc3QgY2xlYXJGaWxsRGljdGlvbmFyeSA9ICgpID0+IHtcbiAgY29uc3QgcmVtb3ZlRWxlbWVudEJ5SWQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWwpIGVsLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJlbW92ZUVsZW1lbnRCeUlkKCdmaW5kVGV4dEluRGljdGlvbmFyaWVzJyk7XG4gIHJlbW92ZUVsZW1lbnRCeUlkKCdmaW5kVGV4dEluRGljdGlvbmFyaWVzU3R5bGUnKTtcbn07XG5cbmNvbnN0IGVuc3VyZUVsZW1lbnQgPSAoaWQsIGNyZWF0ZUVsZW1lbnQpID0+IHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBpZiAoIWVsKSB7XG4gICAgZWwgPSBjcmVhdGVFbGVtZW50KCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufTtcblxuY29uc3Qgc2V0U3R5bGUgPSAoc3R5bGUsIGNzcykgPT4ge1xuICBzdHlsZS5pbm5lclRleHQgPSBjc3M7XG59O1xuXG5jb25zdCBmaWxsRGljdGlvbmFyeSA9IChjb250ZW50KSA9PiB7XG4gIGNvbnN0IGVsID0gZW5zdXJlRWxlbWVudCgnZmluZFRleHRJbkRpY3Rpb25hcmllcycsICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSAnZmluZFRleHRJbkRpY3Rpb25hcmllcyc7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSk7XG4gIGVsLmlubmVyVGV4dCA9ICcnO1xuXG4gIGNvbnN0IHN0eWxlID0gZW5zdXJlRWxlbWVudCgnZmluZFRleHRJbkRpY3Rpb25hcmllc1N0eWxlJywgKCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWwuaWQgPSAnZmluZFRleHRJbkRpY3Rpb25hcmllc1N0eWxlJztcbiAgICByZXR1cm4gc3R5bGVFbDtcbiAgfSk7XG5cbiAgc2V0U3R5bGUoXG4gICAgc3R5bGUsXG4gICAgYFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllcyB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDAwMDE7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDEwMHZoO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEzcHggMXB4ICNjY2M7XG4gICAgICAgICAgbWF4LWhlaWdodDogOTV2aDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDk1dnc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzOjphZnRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gICAgICAgICAgY29udGVudDogXCIke2NvbnRlbnQubGVuZ3RofVwiO1xuICAgICAgICAgIHRvcDogLTM1cHg7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2JkZmZlNTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllczpob3ZlciB7XG4gICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllcyBhOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMgcCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzIGEge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBgXG4gICk7XG5cbiAgY29udGVudC5mb3JFYWNoKCh7IHR4dCwgdXJsLCBrZXkgfSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBwLmlubmVyVGV4dCA9IHR4dDtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgYS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBhLnRleHQgPSBrZXk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIGRpdi5hcHBlbmRDaGlsZChhKTtcbiAgICBlbC5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cERzRmluZERpY3Rpb25hcnkoKSB7XG4gIGlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykgJiYgIWxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9zaXRlY29yZS8nKSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGZpbmRUZXh0SW5EaWN0aW9uYXJpZXMpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBtYWtlQnJhbmNoTmFtZSgpIHtcbiAgbGV0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXNzdWVkZXRhaWxzICN0eXBlLXZhbCcpO1xuICBsZXQgaXNzdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXNzdWUtbGluaycpO1xuICBsZXQgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdW1tYXJ5LXZhbCcpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWNvbHVtbnMgLmdoeC1pc3N1ZS5naHgtc2VsZWN0ZWQnKSkge1xuICAgIHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWlzc3VlLmdoeC1zZWxlY3RlZCAuZ2h4LXR5cGUnKTtcbiAgICBpc3N1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naHgtaXNzdWUuZ2h4LXNlbGVjdGVkIC5naHgta2V5Jyk7XG4gICAgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naHgtaXNzdWUuZ2h4LXNlbGVjdGVkIC5naHgtc3VtbWFyeScpO1xuICB9XG5cbiAgaWYgKCEodHlwZSAmJiBpc3N1ZSAmJiBzdW1tYXJ5KSkgcmV0dXJuO1xuXG4gIHR5cGUgPSB0eXBlLmlubmVyVGV4dCB8fCB0eXBlLnRpdGxlO1xuICB0eXBlID0gdHlwZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgdHlwZSA9IHR5cGUucmVwbGFjZSgvc3RvcnkvLCAnZmVhdHVyZScpO1xuXG4gIGlzc3VlID0gaXNzdWUuaW5uZXJUZXh0LnRyaW0oKTtcblxuICBzdW1tYXJ5ID0gc3VtbWFyeS5pbm5lclRleHRcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9bXmEteiBdL2csICctJylcbiAgICAucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgLnJlcGxhY2UoLy0tKy9nLCAnLScpO1xuXG4gIHJldHVybiBgJHt0eXBlfS8ke2lzc3VlfS0ke3N1bW1hcnl9YC5zbGljZSgwLCA1MCkucmVwbGFjZSgvLSQvLCAnJyk7XG59XG5cbi8vIEFkZCB0byB3aW5kb3csIGFzIGl0J3MgdXNlZCBpbiBKaXJhTWFrZUJSYW5jaE5hbWUuanMuXG53aW5kb3cubWFrZUJyYW5jaE5hbWUgPSBtYWtlQnJhbmNoTmFtZTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZUJyYW5jaE5hbWU7XG4iLCJsZXQgcHJldmlvdXNTZWxlY3RlZFNpdGVjb3JlSWQgPSAnJztcbmxldCBzaG93RmF2b3JpdGVzUG9wdXAgPSBmYWxzZTtcbmxldCBkZWZhdWx0VGV4dEFyZWFIZWlnaHQgPSAnNTAwcHg7JztcblxuY29uc3QgYWRkVXJsVG9UcmVlTGlzdElkcyA9ICgpID0+IHtcbiAgY29uc3QgdHJlZUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjQ29udGVudENvbnRyb2xTZWxlY3RlZExpc3QnKTtcblxuICB0cmVlTGlzdHMuZm9yRWFjaCgodHJlZUxpc3QpID0+IHtcbiAgICBpZiAodHJlZUxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdDaHJvbWVFeHRlbnNpb25BZGRVcmxUb1RyZWVMaXN0SWRzJykpIHJldHVybjtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB0cmVlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3Qgb3B0aW9uJyk7XG4gICAgY29uc3QgaGVscCA9IHRyZWVMaXN0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjQ29udGVudENvbnRyb2xUcmVlTGlzdEhlbHAnKTtcblxuICAgIGlmICghaGVscCB8fCBvcHRpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgdHJlZUxpc3QuY2xhc3NMaXN0LmFkZCgnQ2hyb21lRXh0ZW5zaW9uQWRkVXJsVG9UcmVlTGlzdElkcycpO1xuXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGlkID0gb3B0aW9uLnZhbHVlPy5zcGxpdCgnfCcpPy5bMV07XG4gICAgICBpZiAoIWlkKSByZXR1cm47XG5cbiAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2ZvJywgaWQpO1xuICAgICAgICBpZiAoaGVscC5pbm5lckhUTUwuaW5jbHVkZXMoaWQpKSByZXR1cm47XG5cbiAgICAgICAgaGVscC5pbm5lckhUTUwgPSBgJHtoZWxwLmlubmVySFRNTH0gPGEgaHJlZj1cIiR7dXJsLmhyZWZ9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDtcIj4ke2lkfTwvYT5gO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc3RyZXRjaENvbHVtbiA9ICgpID0+IHtcbiAgY29uc3QgY29sdW1uV2lkdGggPSA0MDA7XG4gIGRvY3VtZW50LmNvb2tpZSA9IGBzY0NvbnRlbnRFZGl0b3JGb2xkZXJzV2lkdGg9JHtjb2x1bW5XaWR0aH07IGV4cGlyZXM9VGh1LCAzMSBEZWMgMjEwMCAxMjowMDowMCBVVEM7IHBhdGg9L2A7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDb250ZW50VHJlZVBhbmVsJykuc3R5bGUud2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGxpdHRlci1iYXItdmVydGljYWwnKS5zdHlsZS5sZWZ0ID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xuICBjb25zdCBlZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ29udGVudEVkaXRvcicpO1xuICBlZGl0b3Iuc3R5bGUud2lkdGggPSBwYXJzZUludChlZGl0b3Iuc3R5bGUud2lkdGgpIC0gY29sdW1uV2lkdGggKyBwYXJzZUludChlZGl0b3Iuc3R5bGUubGVmdCkgKyAncHgnO1xuICBlZGl0b3Iuc3R5bGUubGVmdCA9IGAke2NvbHVtbldpZHRofXB4YDtcbn07XG5cbmNvbnN0IHNjcm9sbFRvSXRlbSA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjQ29udGVudFRyZWVOb2RlQWN0aXZlJylbMF07XG4gIGNvbnN0IHRvZ2dsZUFycm93ID0gc2VsZWN0ZWRJdGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gIHRvZ2dsZUFycm93ICYmIHRvZ2dsZUFycm93LmNsaWNrKCk7XG4gIHNlbGVjdGVkSXRlbSAmJiBzZWxlY3RlZEl0ZW0ucGFyZW50RWxlbWVudCAmJiBzZWxlY3RlZEl0ZW0ucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xufTtcblxuY29uc3QgZ2V0QWN0aXZlVHJlZU5vZGVUZXh0ID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjQ29udGVudFRyZWVOb2RlQWN0aXZlIHNwYW4nKS5pbm5lclRleHQ7XG59O1xuXG5jb25zdCBnZXRBY3RpdmVUcmVlTm9kZVBhdGggPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NFZGl0b3JRdWlja0luZm8gdHI6bnRoLWNoaWxkKDMpIC5zY0VkaXRvckhlYWRlclF1aWNrSW5mb0lucHV0JykudmFsdWU7XG59O1xuXG5jb25zdCBhZGRCb29rbWFyayA9ICgpID0+IHtcbiAgY29uc3Qgc2l0ZWNvcmVUZXh0ID0gZ2V0QWN0aXZlVHJlZU5vZGVUZXh0KCk7XG4gIGlmIChzaXRlY29yZVRleHQgPT09IHByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkKSByZXR1cm47XG4gIHByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkID0gc2l0ZWNvcmVUZXh0O1xuXG4gIGxldCBib29rbWFya0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va21hcmtMaW5rJyk7XG4gIGxldCBib29rbWFya1N0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2ttYXJrU3R5bGUnKTtcblxuICBpZiAoIWJvb2ttYXJrTGluaykge1xuICAgIGJvb2ttYXJrTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBib29rbWFya0xpbmsuaWQgPSAnYm9va21hcmtMaW5rJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoYm9va21hcmtMaW5rKTtcbiAgICBib29rbWFya1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBib29rbWFya1N0eWxlLmlkID0gJ2Jvb2ttYXJrU3R5bGUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChib29rbWFya1N0eWxlKTtcbiAgfVxuXG4gIGJvb2ttYXJrTGluay5ocmVmID0gYGphdmFzY3JpcHQ6d2luZG93LmxvY2F0aW9uLmhyZWY9d2luZG93LmxvY2F0aW9uLm9yaWdpbisnL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50IEVkaXRvci5hc3B4P3NjX2J3PTEmZm89JHtnZXRBY3RpdmVUcmVlTm9kZVBhdGgoKX0nYDtcbiAgYm9va21hcmtMaW5rLmlubmVySFRNTCA9IHNpdGVjb3JlVGV4dDtcblxuICBib29rbWFya1N0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICNib29rbWFya0xpbmsge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwO1xuICAgICAgICAgIHRvcDogMTFweDtcbiAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdPcGVuIFNhbnMnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweCAwIDdweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMHB4IDFweCAjNTg1ODU4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICB9XG4gICAgYDtcbn07XG5cbmNvbnN0IGluY3JlYXNlSGVpZ2h0T25UcmVlTGlzdHMgPSAoKSA9PiB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY0VkaXRvclNlY3Rpb25QYW5lbENlbGwgLnNjQ29udGVudENvbnRyb2wuc2NDb250ZW50Q29udHJvbFRyZWVsaXN0JylcbiAgICAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuY2xpZW50SGVpZ2h0ID09PSAyMjApIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnNDAwcHgnO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuY29uc3QgZml4SW5wdXRDZWxsVGV4dEFyZWEgPSAoKSA9PiB7XG4gIGNvbnN0IHR4dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NFZGl0b3JGaWVsZE1hcmtlcklucHV0Q2VsbCB0ZXh0YXJlYScpO1xuICBpZiAodHh0cy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXhJbnB1dENlbGxUZXh0QXJlYScpKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlkID0gJ2ZpeElucHV0Q2VsbFRleHRBcmVhJztcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAubW9ub3NwYWNlLWZvbnQge2ZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCBcIkFuZGFsZSBNb25vXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO31cbiAgICBgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICB0eHRzLmZvckVhY2goKHR4dCkgPT4ge1xuICAgIGlmICh0eHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb25vc3BhY2UtZm9udCcpKSByZXR1cm47XG5cbiAgICB0eHQuY2xhc3NMaXN0LmFkZCgnbW9ub3NwYWNlLWZvbnQnKTtcbiAgICB0eHQuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgZmFsc2UpO1xuXG4gICAgdHh0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSAnODAwcHgnO1xuICAgICAgdGhpcy5zdHlsZS5mb250U2l6ZSA9ICcxM3B4JztcbiAgICAgIHRoaXMuc3R5bGUubGluZUhlaWdodCA9ICcxLjQ1JztcbiAgICB9KTtcblxuICAgIHR4dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZSA9IGBoZWlnaHQ6ICR7ZGVmYXVsdFRleHRBcmVhSGVpZ2h0fWA7IC8vIEZyb20gZW5sYXJnZVRyZWVsaXN0KCkgZnVuY3Rpb24gYmVsb3cuXG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZW5sYXJnZVRyZWVsaXN0ID0gKCkgPT4ge1xuICBjb25zdCBkYXRhU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9XCJTZWN0aW9uX0RhdGFcIl0nKTtcbiAgaWYgKCFkYXRhU2VjdGlvbikgcmV0dXJuO1xuICBsZXQgZGF0YVRyZWVsaXN0ID0gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignW2lkKj1cIlNlY3Rpb25fRGF0YVwiXScpXG4gICAgLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjQ29udGVudENvbnRyb2xUcmVlbGlzdCcpO1xuICBpZiAoIWRhdGFUcmVlbGlzdCkgcmV0dXJuO1xuICBkYXRhVHJlZWxpc3Quc3R5bGUgPSBgaGVpZ2h0OiAke2RlZmF1bHRUZXh0QXJlYUhlaWdodH1gO1xufTtcblxuY29uc3QgZ2V0RmF2b3JpdGVJdGVtTGFiZWwgPSAoZmF2b3JpdGUpID0+IHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uaW5uZXJUZXh0ID0gZmF2b3JpdGUubGFiZWw7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgZ2V0RmF2b3JpdGVJdGVtUGFyZW50VGV4dCA9IChmYXZvcml0ZSkgPT4ge1xuICBsZXQgcGF0aCA9IGZhdm9yaXRlLnBhdGguc3BsaXQoJy8nKTtcbiAgcGF0aC5wb3AoKTtcbiAgcGF0aCA9IHBhdGguam9pbignLycpO1xuICBwYXRoID0gYCR7cGF0aH0vIGA7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmNsYXNzTmFtZSA9ICdDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbVBhcmVudCc7XG4gIHNwYW4uaW5uZXJUZXh0ID0gcGF0aDtcbiAgcmV0dXJuIHNwYW47XG59O1xuXG5jb25zdCBhZGRGYXZvcml0ZXMgPSAoKSA9PiB7XG4gIGxldCBmYXZvcml0ZXNTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1N0eWxlJyk7XG5cbiAgaWYgKCFmYXZvcml0ZXNTdHlsZSkge1xuICAgIGZhdm9yaXRlc1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBmYXZvcml0ZXNTdHlsZS5pZCA9ICdDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1N0eWxlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzU3R5bGUpO1xuICAgIGZhdm9yaXRlc1N0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgIC5zYy1nbG9iYWxIZWFkZXIge1xuICAgICAgICB6LWluZGV4OiAxMDE7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlcyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICAgICAgYmFja2dyb3VuZDogIzJiMmIyYjtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMCA1cHggNnB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogNnB4IDdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW06aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbSBzcGFuLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtUmVtb3ZlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtIHNwYW4uQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1SZW1vdmU6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7IFxuICAgICAgfVxuICAgICAgXG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0gc3Bhbi5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbVBhcmVudCB7XG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xuICAgICAgfVxuICAgIFxuICAgICAgI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBBZGRGYXZvcml0ZSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogNnB4IDdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1gO1xuICB9XG5cbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2Zhdm9yaXRlcycsICh7IGZhdm9yaXRlcyB9KSA9PiB7XG4gICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzIHx8IFtdO1xuICAgIGlmIChmYXZvcml0ZXMubGVuZ3RoID4gMSkge1xuICAgICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzLnNvcnQoKGEsIGIpID0+IChhLnBhdGggPiBiLnBhdGggPyAxIDogLTEpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY2NJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLWFjY291bnRJbmZvcm1hdGlvbicpO1xuICAgIGxldCBmYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXMnKTtcbiAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cCcpO1xuXG4gICAgaWYgKCFmYXYpIHtcbiAgICAgIGZhdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBmYXYuaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXMnO1xuICAgICAgZmF2LmlubmVyVGV4dCA9ICdGYXZvcml0ZXMnO1xuICAgICAgYWNjSW5mby5pbnNlcnRCZWZvcmUoZmF2LCBhY2NJbmZvLmZpcnN0Q2hpbGQpO1xuICAgICAgZmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaG93RmF2b3JpdGVzUG9wdXAgPSAhc2hvd0Zhdm9yaXRlc1BvcHVwO1xuICAgICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghc2hvd0Zhdm9yaXRlc1BvcHVwICYmIHBvcHVwKSB7XG4gICAgICBmYXYucmVtb3ZlQ2hpbGQocG9wdXApO1xuICAgIH1cblxuICAgIGlmIChzaG93RmF2b3JpdGVzUG9wdXApIHtcbiAgICAgIGlmICghcG9wdXApIHtcbiAgICAgICAgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wdXAuaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cCc7XG4gICAgICAgIGZhdi5hcHBlbmRDaGlsZChwb3B1cCk7XG4gICAgICB9XG5cbiAgICAgIGZhdm9yaXRlcy5mb3JFYWNoKChmYXZvcml0ZSkgPT4ge1xuICAgICAgICBsZXQgZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbT1cIiR7ZmF2b3JpdGUucGF0aH1cIl1gKTtcblxuICAgICAgICBpZiAoIWYpIHtcbiAgICAgICAgICBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZi5jbGFzc05hbWUgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0nO1xuICAgICAgICAgIGYuc2V0QXR0cmlidXRlKCdDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbScsIGZhdm9yaXRlLnBhdGgpO1xuXG4gICAgICAgICAgZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bG9jYXRpb24ub3JpZ2lufSR7bG9jYXRpb24ucGF0aG5hbWV9P3NjX2J3PTEmZm89JHtmYXZvcml0ZS5wYXRofWA7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBmLmFwcGVuZENoaWxkKGdldEZhdm9yaXRlSXRlbVBhcmVudFRleHQoZmF2b3JpdGUpKTtcbiAgICAgICAgICBmLmFwcGVuZENoaWxkKGdldEZhdm9yaXRlSXRlbUxhYmVsKGZhdm9yaXRlKSk7XG5cbiAgICAgICAgICBsZXQgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIHJlbW92ZS5jbGFzc05hbWUgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1SZW1vdmUnO1xuICAgICAgICAgIHJlbW92ZS5pbm5lclRleHQgPSAneCc7XG4gICAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzLmZpbHRlcigoZikgPT4gZiAhPT0gZmF2b3JpdGUpO1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBmYXZvcml0ZXMgfSk7XG4gICAgICAgICAgICBwb3B1cC5yZW1vdmVDaGlsZChmKTtcbiAgICAgICAgICAgIGFkZEZhdm9yaXRlcygpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZi5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGYpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGlzSXRlbUluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0gPSBcIiR7Z2V0QWN0aXZlVHJlZU5vZGVQYXRoKCl9XCJdYFxuICAgICAgKTtcbiAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEFkZEZhdm9yaXRlJyk7XG5cbiAgICAgIGlmIChhZGRCdXR0b24pIHBvcHVwLnJlbW92ZUNoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICAgIGlmICghaXNJdGVtSW5NZW51KSB7XG4gICAgICAgIGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRCdXR0b24uaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEFkZEZhdm9yaXRlJztcbiAgICAgICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9IGBBZGQgJHtnZXRBY3RpdmVUcmVlTm9kZVRleHQoKX0gPyBgO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICBmYXZvcml0ZXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogZ2V0QWN0aXZlVHJlZU5vZGVUZXh0KCksXG4gICAgICAgICAgICBwYXRoOiBnZXRBY3RpdmVUcmVlTm9kZVBhdGgoKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGZhdm9yaXRlcyB9KTtcbiAgICAgICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWRkSW1hZ2VEaXJlY3RVcmwgPSAoKSA9PiB7XG4gIGxldCBpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VkaXRvckZyYW1lcycpPy5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgbGV0IGlzVmlzaWJsZSA9IGl0ZW0/LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJztcbiAgY29uc3QgdGFibGUgPSBpdGVtPy5xdWVyeVNlbGVjdG9yKCd0YWJsZS5zY0VkaXRvclF1aWNrSW5mbyB0Ym9keScpO1xuXG4gIGlmIChpdGVtPy5pZCAmJiBpc1Zpc2libGUgJiYgdGFibGUgJiYgIXRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNzY1Rvb2xNZWRpYVBhdGgnKSkge1xuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICB0ci5pZCA9ICdzY1Rvb2xNZWRpYVBhdGgnO1xuICAgIGNvbnN0IHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ29uY2xpY2snLCAnamF2YXNjcmlwdDp0aGlzLnNlbGVjdCgpO3JldHVybiBmYWxzZScpO1xuICAgIGlucHV0LnZhbHVlID0gJy0vbWVkaWEvJyArIGl0ZW0uaWQucmVwbGFjZSgnRkNvbnRlbnQnLCAnJykgKyAnLmFzaHgnO1xuXG4gICAgdGQxLmlubmVyVGV4dCA9ICdSZWxhdGl2IHN0aTonO1xuICAgIHRkMi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZDIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgaWYgKGxvY2F0aW9uLmhvc3QuZW5kc1dpdGgoJ2RhbnNrZXNwaWwuZGsnKSkge1xuICAgIGlmICghIWRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5wYXRobmFtZSkubWF0Y2goL1xcL3NpdGVjb3JlXFwvc2hlbGxcXC9hcHBsaWNhdGlvbnNcXC9jb250ZW50Wy0gXWVkaXRvclxcLmFzcHgvaSkpIHtcbiAgICAgIHN0cmV0Y2hDb2x1bW4oKTtcbiAgICAgIHNjcm9sbFRvSXRlbSgpO1xuICAgICAgYWRkQm9va21hcmsoKTtcbiAgICAgIHNldEludGVydmFsKGFkZFVybFRvVHJlZUxpc3RJZHMsIDUwMCk7XG4gICAgICBzZXRJbnRlcnZhbChpbmNyZWFzZUhlaWdodE9uVHJlZUxpc3RzLCA1MDApO1xuICAgICAgc2V0SW50ZXJ2YWwoZml4SW5wdXRDZWxsVGV4dEFyZWEsIDUwMCk7XG4gICAgICBzZXRJbnRlcnZhbChhZGRCb29rbWFyaywgNTAwKTtcblxuICAgICAgc2V0SW50ZXJ2YWwoZW5sYXJnZVRyZWVsaXN0LCA1MDApO1xuXG4gICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0VGltZW91dChhZGRGYXZvcml0ZXMsIDUwMCkpO1xuICAgIH1cblxuICAgIGlmICghIWRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5wYXRobmFtZSkubWF0Y2goL1xcL3NpdGVjb3JlXFwvc2hlbGxcXC9hcHBsaWNhdGlvbnNcXC9jb250ZW50Wy0gXW1hbmFnZXJcXC9kZWZhdWx0XFwuYXNweC9pKSkge1xuICAgICAgc2V0SW50ZXJ2YWwoYWRkSW1hZ2VEaXJlY3RVcmwsIDUwMCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTaXRlY29yZUxheW91dEltcHJvdmVtZW50cygpIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgIC8vIERvY3VtZW50IGlzIGFscmVhZHkgcmVhZHkgdG8gZ28sIHJ1biB5b3VyIGNvZGVcbiAgICBpbml0aWFsaXplKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBET01Db250ZW50TG9hZGVkXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNldHVwRHNGaW5kRGljdGlvbmFyeSB9IGZyb20gJy4vRHNGaW5kRGljdGlvbmFyeSc7XHJcbmltcG9ydCB7IHNldHVwR2l0aHViQ3JlYXRlQnJhbmNoIH0gZnJvbSAnLi9Db250ZW50U2NyaXB0cy9HaXRodWIvR2l0SHViQ3JlYXRlQnJhbmNoJztcclxuaW1wb3J0IHsgc2V0dXBTaXRlY29yZUxheW91dEltcHJvdmVtZW50cyB9IGZyb20gJy4vU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMnO1xyXG5pbXBvcnQgeyBzaG93Q3JlYXRlQnJhbmNoTGluayB9IGZyb20gJy4vQ29udGVudFNjcmlwdHMvSmlyYS9TaG93Q3JlYXRlQnJhbmNoTGluayc7XHJcblxyXG5zZXR1cERzRmluZERpY3Rpb25hcnkoKTtcclxuc2V0dXBHaXRodWJDcmVhdGVCcmFuY2goKTtcclxuc2V0dXBTaXRlY29yZUxheW91dEltcHJvdmVtZW50cygpO1xyXG5zaG93Q3JlYXRlQnJhbmNoTGluaygpO1xyXG5cclxuaWYgKGxvY2F0aW9uLmhvc3QuZW5kc1dpdGgoJ2RhbnNrZXNwaWwuZGsnKSkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdGMicpIHtcclxuICAgICAgLy8gRG8gc29tZXRoaW5nIHdoZW4gRjIgaXMgcHJlc3NlZFxyXG4gICAgICBhbGVydCgnRjIgd2FzIHByZXNzZWQnKTtcclxuXHJcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnY2FsbE15RnVuY3Rpb24nIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3h4eCBDQUxMSU5HIE1ZIEZVTkNUSU9OIHh4eCcsIHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwid2FpdEZvckVsZW1lbnQiLCJfcmVmIiwiX2NhbGxlZSIsInNlbGVjdG9yIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl94Iiwic2V0dXBHaXRodWJDcmVhdGVCcmFuY2giLCJfc2V0dXBHaXRodWJDcmVhdGVCcmFuY2giLCJfY2FsbGVlMiIsInBhcmFtcyIsIm5ld0JyYW5jaCIsImN0YSIsImlucHV0IiwidXJsIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwibG9jYXRpb24iLCJob3N0Iiwic2VhcmNoIiwiaW5jbHVkZXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJnZXQiLCJjbGljayIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJldmVudHNUb0Rpc3BhdGNoIiwiZXZlbnRUeXBlIiwiZXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsIlVSTCIsIndpbmRvdyIsInNlYXJjaFBhcmFtcyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJtYWtlQnJhbmNoTmFtZSIsImlzUGFnZUFKaXJhVGFzayIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImlzSmlyYUlVIiwiaXNKaXJhRk9SIiwiY3JlYXRlQ1RBIiwicmVwbyIsImJyYW5jaE5hbWUiLCJ0b29sQmFyIiwibmV3Q3RhQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuIiwiY29uY2F0IiwiYXBwZW5kQ2hpbGQiLCJzaG93Q3JlYXRlQnJhbmNoTGluayIsImZpbmRUZXh0SW5EaWN0aW9uYXJpZXMiLCJzZWFyY2hTdHJpbmciLCJnZXRTZWxlY3Rpb24iLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwicmVzdWx0cyIsIm91dHB1dCIsImtleTIiLCJrZXkzIiwia2V5NCIsImtleTUiLCJrZXk2Iiwia2V5NyIsImtleTgiLCJyZXMiLCJkaWN0aW9uYXJ5S2V5IiwiaXNEbG8iLCJyZWdpb24iLCJzcGxpdCIsImluZGV4S2V5IiwiZGljdGlvbmFyeUtleXMiLCJsb2NhbFN0b3JhZ2UiLCJzdG9yYWdlS2V5IiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsImNvbnRlbnQiLCJnZXREaWN0aW9uYXJ5VXJsIiwidHh0IiwiZmlsbERpY3Rpb25hcnkiLCJjbGVhckZpbGxEaWN0aW9uYXJ5IiwiaG9zdFBhcnRzIiwicHJvdG9jb2wiLCJpc1Rvd25FbnYiLCJpc0RldkVudiIsImVudlBhcnQiLCJyZW1vdmVFbGVtZW50QnlJZCIsImlkIiwiZWwiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImVuc3VyZUVsZW1lbnQiLCJib2R5Iiwic2V0U3R5bGUiLCJzdHlsZSIsImNzcyIsImRpdiIsInN0eWxlRWwiLCJfcmVmMiIsImhyZWYiLCJ0YXJnZXQiLCJ0ZXh0Iiwic2V0dXBEc0ZpbmREaWN0aW9uYXJ5IiwiZW5kc1dpdGgiLCJpc3N1ZSIsInN1bW1hcnkiLCJ0aXRsZSIsInRyaW0iLCJyZXBsYWNlIiwicHJldmlvdXNTZWxlY3RlZFNpdGVjb3JlSWQiLCJzaG93RmF2b3JpdGVzUG9wdXAiLCJkZWZhdWx0VGV4dEFyZWFIZWlnaHQiLCJhZGRVcmxUb1RyZWVMaXN0SWRzIiwidHJlZUxpc3RzIiwicXVlcnlTZWxlY3RvckFsbCIsInRyZWVMaXN0IiwiY29udGFpbnMiLCJvcHRpb25zIiwiaGVscCIsInBhcmVudEVsZW1lbnQiLCJvcHRpb24iLCJfb3B0aW9uJHZhbHVlIiwic2V0IiwiaW5uZXJIVE1MIiwic3RyZXRjaENvbHVtbiIsImNvbHVtbldpZHRoIiwiY29va2llIiwid2lkdGgiLCJsZWZ0IiwiZWRpdG9yIiwicGFyc2VJbnQiLCJzY3JvbGxUb0l0ZW0iLCJzZWxlY3RlZEl0ZW0iLCJ0b2dnbGVBcnJvdyIsInNjcm9sbEludG9WaWV3IiwiZ2V0QWN0aXZlVHJlZU5vZGVUZXh0IiwiZ2V0QWN0aXZlVHJlZU5vZGVQYXRoIiwiYWRkQm9va21hcmsiLCJzaXRlY29yZVRleHQiLCJib29rbWFya0xpbmsiLCJib29rbWFya1N0eWxlIiwiaW5jcmVhc2VIZWlnaHRPblRyZWVMaXN0cyIsImVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJmaXhJbnB1dENlbGxUZXh0QXJlYSIsInR4dHMiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJlbmxhcmdlVHJlZWxpc3QiLCJkYXRhU2VjdGlvbiIsImRhdGFUcmVlbGlzdCIsImdldEZhdm9yaXRlSXRlbUxhYmVsIiwiZmF2b3JpdGUiLCJzcGFuIiwibGFiZWwiLCJnZXRGYXZvcml0ZUl0ZW1QYXJlbnRUZXh0IiwicGF0aCIsImpvaW4iLCJjbGFzc05hbWUiLCJhZGRGYXZvcml0ZXMiLCJmYXZvcml0ZXNTdHlsZSIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZmF2b3JpdGVzIiwic29ydCIsImIiLCJhY2NJbmZvIiwiZmF2IiwicG9wdXAiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJvcmlnaW4iLCJmaWx0ZXIiLCJpc0l0ZW1Jbk1lbnUiLCJhZGRCdXR0b24iLCJldiIsImFkZEltYWdlRGlyZWN0VXJsIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCIiwiaXRlbSIsImlzVmlzaWJsZSIsImRpc3BsYXkiLCJ0YWJsZSIsInRyIiwidGQxIiwidGQyIiwiaW5pdGlhbGl6ZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIm1hdGNoIiwic2V0SW50ZXJ2YWwiLCJzZXR1cFNpdGVjb3JlTGF5b3V0SW1wcm92ZW1lbnRzIiwicmVhZHlTdGF0ZSIsImFsZXJ0IiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwiYWN0aW9uIiwicmVzcG9uc2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==