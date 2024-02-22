/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/ContentScripts/Github/GitHubCreateBranch.js':
      /*!*********************************************************!*\
  !*** ./src/ContentScripts/Github/GitHubCreateBranch.js ***!
  \*********************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupGithubCreateBranch: () => /* binding */ setupGithubCreateBranch,
          /* harmony export */
        });
        function _typeof(o) {
          '@babel/helpers - typeof';
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                      ? 'symbol'
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          'use strict';
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = 'function' == typeof Symbol ? Symbol : {},
            a = i.iterator || '@@iterator',
            c = i.asyncIterator || '@@asyncIterator',
            u = i.toStringTag || '@@toStringTag';
          function define(t, e, r) {
            return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
          }
          try {
            define({}, '');
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: 'normal', arg: t.call(e, r) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          e.wrap = wrap;
          var h = 'suspendedStart',
            l = 'suspendedYield',
            f = 'executing',
            s = 'completed',
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p));
          function defineIteratorMethods(t) {
            ['next', 'throw', 'return'].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ('throw' !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && 'object' == _typeof(h) && n.call(h, '__await')
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke('next', t, i, a);
                      },
                      function (t) {
                        invoke('throw', t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke('throw', t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, '_invoke', {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error('Generator is already running');
              if (o === s) {
                if ('throw' === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ('normal' === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                'throw' === p.type && ((o = s), (n.method = 'throw'), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ('throw' === n &&
                  e.iterator['return'] &&
                  ((r.method = 'return'), (r.arg = t), maybeInvokeDelegate(e, r), 'throw' === r.method)) ||
                  ('return' !== n &&
                    ((r.method = 'throw'),
                    (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = 'throw'),
                (r.arg = new TypeError('iterator result is not an object')),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = 'normal'), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(pushTryEntry, this), this.reset(!0);
          }
          function values(e) {
            if (e || '' === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ('function' == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; ) if (n.call(e, o)) return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + ' is not iterable');
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
            o(GeneratorFunctionPrototype, 'constructor', { value: GeneratorFunction, configurable: !0 }),
            (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, 'GeneratorFunction')),
            (e.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor;
              return !!e && (e === GeneratorFunction || 'GeneratorFunction' === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype), define(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, 'Generator'),
            define(g, a, function () {
              return this;
            }),
            define(g, 'toString', function () {
              return '[object Generator]';
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (a.type = 'throw'), (a.arg = e), (r.next = n), o && ((r.method = 'next'), (r.arg = t)), !!o;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ('root' === i.tryLoc) return handle('end');
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, 'catchLoc'),
                      u = n.call(i, 'finallyLoc');
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u) throw new Error('try statement without catch or finally');
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                  }
                }
                i && ('break' === t || 'continue' === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ('throw' === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
                  'next' === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
              }
              _next(undefined);
            });
          };
        }
        var waitForElement = /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(selector) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
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
                      return _context.abrupt('return', document.querySelector(selector));
                    case 6:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return function waitForElement(_x) {
            return _ref.apply(this, arguments);
          };
        })();
        function setupGithubCreateBranch() {
          return _setupGithubCreateBranch.apply(this, arguments);
        }
        function _setupGithubCreateBranch() {
          _setupGithubCreateBranch = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
              var params, newBranch, cta, input, url;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
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
                              cancelable: true,
                            });
                            input.dispatchEvent(event);
                          });
                        }, 500);
                      }
                      url = new URL(window.location);
                      url.searchParams['delete']('newBranch');
                      history.pushState({}, '', url);
                    case 14:
                    case 'end':
                      return _context2.stop();
                  }
              }, _callee2);
            })
          );
          return _setupGithubCreateBranch.apply(this, arguments);
        }

        /***/
      },

    /***/ './src/ContentScripts/Jira/ShowCreateBranchLink.js':
      /*!*********************************************************!*\
  !*** ./src/ContentScripts/Jira/ShowCreateBranchLink.js ***!
  \*********************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ showCreateBranchLink: () => /* binding */ showCreateBranchLink,
          /* harmony export */
        });
        /* harmony import */ var _MakeBranchName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../MakeBranchName */ './src/MakeBranchName.js'
        );

        var isPageAJiraTaskIUPage = function isPageAJiraTaskIUPage() {
          return location.host.includes('jira.danskespil.dk') && location.pathname.startsWith('/browse/IU-');
        };
        var createCTA = function createCTA() {
          var branchName = (0, _MakeBranchName__WEBPACK_IMPORTED_MODULE_0__['default'])();
          if (!branchName) return;
          var toolBar = document.querySelector('.aui-toolbar2-primary');
          var newCtaContainer = document.createElement('div');
          newCtaContainer.classList.add('aui-buttons');
          var cta = document.createElement('a');
          cta.classList.add('aui-button');
          cta.innerText = 'Create Branch';
          cta.addEventListener('click', function () {
            window.open(
              'https://github.com/ds-itu-frontend-service/danskespil-website/branches?newBranch=' + branchName
            );
          });
          newCtaContainer.appendChild(cta);
          toolBar.appendChild(newCtaContainer);
        };
        function showCreateBranchLink() {
          if (isPageAJiraTaskIUPage()) {
            createCTA();
          }
        }

        /***/
      },

    /***/ './src/DsFindDictionary.js':
      /*!*********************************!*\
  !*** ./src/DsFindDictionary.js ***!
  \*********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupDsFindDictionary: () => /* binding */ setupDsFindDictionary,
          /* harmony export */
        });
        function _typeof(o) {
          '@babel/helpers - typeof';
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                      ? 'symbol'
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
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
                res: res,
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
                      dictionaryKey: dictionaryKey,
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
                        dictionaryKey: dictionaryKey,
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
                          dictionaryKey: dictionaryKey,
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
                            dictionaryKey: dictionaryKey,
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
                              dictionaryKey: dictionaryKey,
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
                                dictionaryKey: dictionaryKey,
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
                                  dictionaryKey: dictionaryKey,
                                });
                              }
                            }
                            Object.keys(s[key][key2][key3][key4][key5][key6][key7]).forEach(function (key8) {
                              if (typeof s[key][key2][key3][key4][key5][key6][key7][key8] === 'string') {
                                if (
                                  s[key][key2][key3][key4][key5][key6][key7][key8].toLowerCase().includes(searchString)
                                ) {
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
                                    dictionaryKey: dictionaryKey,
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
                key: key,
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
            envPart = 'web.'.concat(hostParts[1]);
          } else if (isTownEnv) {
            envPart = ''.concat(hostParts[0], 'edit').concat(isDlo ? 'dlo' : 'dli');
          } else {
            envPart = 'edit'.concat(isDlo ? 'dlo' : 'dli');
          }
          return ''
            .concat(protocol)
            .concat(
              envPart,
              '.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/Site%20settings/Dictionary/'
            );
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
          setStyle(
            style,
            '\n        #findTextInDictionaries {\n          position: fixed;\n          z-index: 1000000001;\n          left: 0;\n          top: 100vh;\n          font-size: 12px;\n          line-height: 1.2;\n          background: #ededed;\n          padding: 15px 20px;\n          box-shadow: 0 1px 13px 1px #ccc;\n          max-height: 95vh;\n          max-width: 95vw;\n        }\n        \n        #findTextInDictionaries::after {\n          position: absolute;\n          z-index: 1000000000;\n          content: "'.concat(
              content.length,
              '";\n          top: -35px;\n          left: 10px;\n          width: 40px;\n          height: 40px;\n          background: #bdffe5;\n          color: black;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          border-radius: 50% 50% 0 0;\n        }\n        \n        #findTextInDictionaries:hover {\n          top: auto;\n          bottom: 0;\n          overflow: auto;\n        }\n        \n        #findTextInDictionaries a {\n          text-decoration: none;\n        }\n        \n        #findTextInDictionaries a:hover {\n          text-decoration: underline;\n        }\n        \n        #findTextInDictionaries p {\n          background: white;\n          padding: 10px;\n          margin-bottom: 5px;\n        }\n        \n        #findTextInDictionaries a {\n          margin: 0 0 5px 10px;\n          display: inline-block;\n        }\n        '
            )
          );
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

        /***/
      },

    /***/ './src/MakeBranchName.js':
      /*!*******************************!*\
  !*** ./src/MakeBranchName.js ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
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
          summary = summary.innerText
            .toLowerCase()
            .replace(/[^a-z ]/g, '-')
            .replace(/ /g, '-')
            .replace(/--+/g, '-');
          return ''.concat(type, '/').concat(issue, '-').concat(summary).slice(0, 50).replace(/-$/, '');
        }

        // Add to window, as it's used in JiraMakeBRanchName.js.
        window.makeBranchName = makeBranchName;
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = makeBranchName;

        /***/
      },

    /***/ './src/SitecoreLayoutImprovements.js':
      /*!*******************************************!*\
  !*** ./src/SitecoreLayoutImprovements.js ***!
  \*******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupSitecoreLayoutImprovements: () => /* binding */ setupSitecoreLayoutImprovements,
          /* harmony export */
        });
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
              var id =
                (_option$value = option.value) === null ||
                _option$value === void 0 ||
                (_option$value = _option$value.split('|')) === null ||
                _option$value === void 0
                  ? void 0
                  : _option$value[1];
              if (!id) return;
              option.addEventListener('click', function () {
                var url = new URL(location.href);
                url.searchParams.set('fo', id);
                if (help.innerHTML.includes(id)) return;
                help.innerHTML = ''
                  .concat(help.innerHTML, ' <a href="')
                  .concat(url.href, '" target="_blank" style="margin-left: 10px;">')
                  .concat(id, '</a>');
              });
            });
          });
        };
        var stretchColumn = function stretchColumn() {
          var columnWidth = 400;
          document.cookie = 'scContentEditorFoldersWidth='.concat(
            columnWidth,
            '; expires=Thu, 31 Dec 2100 12:00:00 UTC; path=/'
          );
          document.querySelector('#ContentTreePanel').style.width = ''.concat(columnWidth, 'px');
          document.querySelector('.splitter-bar-vertical').style.left = ''.concat(columnWidth, 'px');
          var editor = document.querySelector('#ContentEditor');
          editor.style.width = parseInt(editor.style.width) - columnWidth + parseInt(editor.style.left) + 'px';
          editor.style.left = ''.concat(columnWidth, 'px');
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
          bookmarkLink.href =
            "javascript:window.location.href=window.location.origin+'/sitecore/shell/Applications/Content Editor.aspx?sc_bw=1&fo=".concat(
              getActiveTreeNodePath(),
              "'"
            );
          bookmarkLink.innerHTML = sitecoreText;
          bookmarkStyle.innerHTML =
            "\n      #bookmarkLink {\n          position: fixed;\n          z-index: 1000000;\n          top: 11px;\n          left: 60px;\n          cursor: pointer;\n          height: 30px;\n          display: flex;\n          align-items: center;\n          font-size: 10px;\n          font-weight: 500;\n          font-family: 'Montserrat', 'Open Sans', Helvetica, Arial, sans-serif;\n          background: black;\n          color: white;\n          padding: 0 8px 0 7px;\n          box-shadow: 0 0 0px 1px #585858;\n          border-radius: 3px;\n          text-decoration: none;\n          line-height: 15px;\n      }\n    ";
        };
        var increaseHeightOnTreeLists = function increaseHeightOnTreeLists() {
          document
            .querySelectorAll('.scEditorSectionPanelCell .scContentControl.scContentControlTreelist')
            .forEach(function (element) {
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
            style.innerHTML =
              '\n      .monospace-font {font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;}\n    ';
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
              this.style = 'height: '.concat(defaultTextAreaHeight); // From enlargeTreelist() function below.
            });
          });
        };
        var enlargeTreelist = function enlargeTreelist() {
          var dataSection = document.querySelector('[id*="Section_Data"]');
          if (!dataSection) return;
          var dataTreelist = document
            .querySelector('[id*="Section_Data"]')
            .parentElement.querySelector('.scContentControlTreelist');
          if (!dataTreelist) return;
          dataTreelist.style = 'height: '.concat(defaultTextAreaHeight);
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
          path = ''.concat(path, '/ ');
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
            favoritesStyle.innerHTML =
              '\n      .sc-globalHeader {\n        z-index: 101;\n      }\n      \n      #ChromeExtensionForSitecoreFavorites {\n        position: relative;\n        cursor: pointer;\n      }\n      #ChromeExtensionForSitecoreFavoritesPopup {\n        position: absolute;\n        z-index: 100000;\n        background: #2b2b2b;\n        top: 50px;\n        right: 10px;\n        min-width: 200px;\n        text-align: left;\n        padding: 0 5px 6px;\n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem {\n        position: relative;\n        height: auto;\n        padding: 6px 7px;\n        line-height: 1.4;\n        font-size: 12px;\n        cursor: pointer;\n        padding-right: 35px;\n        white-space: nowrap;\n      }\n      .ChromeExtensionForSitecoreFavoritesPopupItem:hover {\n        background: black;\n        text-decoration: underline;\n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemRemove {\n        position: absolute;\n        z-index: 1;\n        top: 5px;\n        right: 5px;\n        background: black;\n        width: 18px;\n        height: 18px;\n        text-align: center;\n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemRemove:hover {\n        background: red; \n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemParent {\n        color: #969696;\n      }\n    \n      #ChromeExtensionForSitecoreFavoritesPopupAddFavorite {\n        height: auto;\n        padding: 6px 7px;\n        line-height: 1.4;\n        font-size: 12px;\n        cursor: pointer;\n        background: red;\n        white-space: nowrap;\n      }';
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
                var f = document.querySelector(
                  '[ChromeExtensionForSitecoreFavoritesPopupItem="'.concat(favorite.path, '"]')
                );
                if (!f) {
                  f = document.createElement('div');
                  f.className = 'ChromeExtensionForSitecoreFavoritesPopupItem';
                  f.setAttribute('ChromeExtensionForSitecoreFavoritesPopupItem', favorite.path);
                  f.addEventListener('click', function () {
                    window.location.href = ''
                      .concat(location.origin)
                      .concat(location.pathname, '?sc_bw=1&fo=')
                      .concat(favorite.path);
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
                      favorites: favorites,
                    });
                    popup.removeChild(f);
                    addFavorites();
                  });
                  f.appendChild(remove);
                  popup.appendChild(f);
                }
              });
              var isItemInMenu = document.querySelector(
                '[ChromeExtensionForSitecoreFavoritesPopupItem = "'.concat(getActiveTreeNodePath(), '"]')
              );
              var addButton = document.getElementById('ChromeExtensionForSitecoreFavoritesPopupAddFavorite');
              if (addButton) popup.removeChild(addButton);
              if (!isItemInMenu) {
                addButton = document.createElement('div');
                addButton.id = 'ChromeExtensionForSitecoreFavoritesPopupAddFavorite';
                addButton.innerText = 'Add '.concat(getActiveTreeNodeText(), ' ? ');
                addButton.addEventListener('click', function (ev) {
                  favorites.push({
                    label: getActiveTreeNodeText(),
                    path: getActiveTreeNodePath(),
                  });
                  chrome.storage.sync.set({
                    favorites: favorites,
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
          var item =
            (_document$getElementB = document.getElementById('EditorFrames')) === null ||
            _document$getElementB === void 0
              ? void 0
              : _document$getElementB.querySelector('div');
          var isVisible = (item === null || item === void 0 ? void 0 : item.style.display) !== 'none';
          var table = item === null || item === void 0 ? void 0 : item.querySelector('table.scEditorQuickInfo tbody');
          if (
            item !== null &&
            item !== void 0 &&
            item.id &&
            isVisible &&
            table &&
            !table.querySelector('#scToolMediaPath')
          ) {
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

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!************************!*\
  !*** ./src/content.js ***!
  \************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _DsFindDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./DsFindDictionary */ './src/DsFindDictionary.js'
    );
    /* harmony import */ var _ContentScripts_Github_GitHubCreateBranch__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(
        /*! ./ContentScripts/Github/GitHubCreateBranch */ './src/ContentScripts/Github/GitHubCreateBranch.js'
      );
    /* harmony import */ var _SitecoreLayoutImprovements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./SitecoreLayoutImprovements */ './src/SitecoreLayoutImprovements.js'
    );
    /* harmony import */ var _ContentScripts_Jira_ShowCreateBranchLink__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(
        /*! ./ContentScripts/Jira/ShowCreateBranchLink */ './src/ContentScripts/Jira/ShowCreateBranchLink.js'
      );

    (0, _DsFindDictionary__WEBPACK_IMPORTED_MODULE_0__.setupDsFindDictionary)();
    (0, _ContentScripts_Github_GitHubCreateBranch__WEBPACK_IMPORTED_MODULE_1__.setupGithubCreateBranch)();
    (0, _SitecoreLayoutImprovements__WEBPACK_IMPORTED_MODULE_2__.setupSitecoreLayoutImprovements)();
    (0, _ContentScripts_Jira_ShowCreateBranchLink__WEBPACK_IMPORTED_MODULE_3__.showCreateBranchLink)();
    if (location.host.endsWith('danskespil.dk')) {
      document.addEventListener('keydown', function (event) {
        if (event.key === 'F2') {
          // Do something when F2 is pressed
          alert('F2 was pressed');
          chrome.runtime.sendMessage(
            {
              action: 'callMyFunction',
            },
            function (response) {
              console.error('xxx CALLING MY FUNCTION xxx', response);
            }
          );
        }
      });
    }
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkQ7QUFDMEI7QUFDTjtBQUNHO0FBRWxGdEYsd0VBQXFCLENBQUMsQ0FBQztBQUN2QnBHLGtHQUF1QixDQUFDLENBQUM7QUFDekI0TCw0RkFBK0IsQ0FBQyxDQUFDO0FBQ2pDOUksK0ZBQW9CLENBQUMsQ0FBQztBQUV0QixJQUFJcEMsUUFBUSxDQUFDQyxJQUFJLENBQUMwRixRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7RUFDM0N6RyxRQUFRLENBQUMrQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVXRCLEtBQUssRUFBRTtJQUNwRCxJQUFJQSxLQUFLLENBQUMxQyxHQUFHLEtBQUssSUFBSSxFQUFFO01BQ3RCO01BQ0FtTixLQUFLLENBQUMsZ0JBQWdCLENBQUM7TUFFdkI5QixNQUFNLENBQUMrQixPQUFPLENBQUNDLFdBQVcsQ0FBQztRQUFFQyxNQUFNLEVBQUU7TUFBaUIsQ0FBQyxFQUFFLFVBQVVDLFFBQVEsRUFBRTtRQUMzRUMsT0FBTyxDQUFDdE4sS0FBSyxDQUFDLDZCQUE2QixFQUFFcU4sUUFBUSxDQUFDO01BQ3hELENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvQ29udGVudFNjcmlwdHMvR2l0aHViL0dpdEh1YkNyZWF0ZUJyYW5jaC5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL0NvbnRlbnRTY3JpcHRzL0ppcmEvU2hvd0NyZWF0ZUJyYW5jaExpbmsuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9Ec0ZpbmREaWN0aW9uYXJ5LmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvTWFrZUJyYW5jaE5hbWUuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9TaXRlY29yZUxheW91dEltcHJvdmVtZW50cy5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdhaXRGb3JFbGVtZW50ID0gYXN5bmMgKHNlbGVjdG9yKSA9PiB7XG4gIHdoaWxlICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpKTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0dXBHaXRodWJDcmVhdGVCcmFuY2goKSB7XG4gIGlmIChsb2NhdGlvbi5ob3N0ID09PSAnZ2l0aHViLmNvbScgJiYgbG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCc/bmV3QnJhbmNoPScpKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgIGNvbnN0IG5ld0JyYW5jaCA9IHBhcmFtcy5nZXQoJ25ld0JyYW5jaCcpO1xuXG4gICAgY29uc3QgY3RhID0gYXdhaXQgd2FpdEZvckVsZW1lbnQoJ1thcHAtbmFtZT1cInJlcG9zLWJyYW5jaGVzXCJdIGJ1dHRvbicpO1xuICAgIGN0YT8uY2xpY2soKTtcbiAgICBjb25zdCBpbnB1dCA9IGF3YWl0IHdhaXRGb3JFbGVtZW50KCdbcm9sZT1kaWFsb2ddW2RhdGEtZm9jdXMtdHJhcD1cImFjdGl2ZVwiXSBpbnB1dCcpO1xuICAgIGlmIChpbnB1dCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFNldCB0aGUgdmFsdWUgYXR0cmlidXRlIGRpcmVjdGx5XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdCcmFuY2gpO1xuXG4gICAgICAgIC8vIERpc3BhdGNoIGV2ZW50c1xuICAgICAgICBjb25zdCBldmVudHNUb0Rpc3BhdGNoID0gWydpbnB1dCcsICdjaGFuZ2UnLCAna2V5dXAnXTtcbiAgICAgICAgZXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudChldmVudFR5cGUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgnbmV3QnJhbmNoJyk7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpO1xuICB9XG59XG4iLCJpbXBvcnQgbWFrZUJyYW5jaE5hbWUgZnJvbSAnLi4vLi4vTWFrZUJyYW5jaE5hbWUnO1xuXG5jb25zdCBpc1BhZ2VBSmlyYVRhc2tJVVBhZ2UgPSAoKSA9PlxuICBsb2NhdGlvbi5ob3N0LmluY2x1ZGVzKCdqaXJhLmRhbnNrZXNwaWwuZGsnKSAmJiBsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvYnJvd3NlL0lVLScpO1xuXG5jb25zdCBjcmVhdGVDVEEgPSAoKSA9PiB7XG4gIGNvbnN0IGJyYW5jaE5hbWUgPSBtYWtlQnJhbmNoTmFtZSgpO1xuICBpZiAoIWJyYW5jaE5hbWUpIHJldHVybjtcblxuICBjb25zdCB0b29sQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1aS10b29sYmFyMi1wcmltYXJ5Jyk7XG4gIGNvbnN0IG5ld0N0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdDdGFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXVpLWJ1dHRvbnMnKTtcbiAgY29uc3QgY3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjdGEuY2xhc3NMaXN0LmFkZCgnYXVpLWJ1dHRvbicpO1xuICBjdGEuaW5uZXJUZXh0ID0gJ0NyZWF0ZSBCcmFuY2gnO1xuICBjdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9kcy1pdHUtZnJvbnRlbmQtc2VydmljZS9kYW5za2VzcGlsLXdlYnNpdGUvYnJhbmNoZXM/bmV3QnJhbmNoPScgKyBicmFuY2hOYW1lKTtcbiAgfSk7XG4gIG5ld0N0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdGEpO1xuICB0b29sQmFyLmFwcGVuZENoaWxkKG5ld0N0YUNvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NyZWF0ZUJyYW5jaExpbmsoKSB7XG4gIGlmIChpc1BhZ2VBSmlyYVRhc2tJVVBhZ2UoKSkge1xuICAgIGNyZWF0ZUNUQSgpO1xuICB9XG59XG4iLCJjb25zdCBmaW5kVGV4dEluRGljdGlvbmFyaWVzID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hTdHJpbmcgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChzZWFyY2hTdHJpbmc/Lmxlbmd0aCA+IDQpIHtcbiAgICBsZXQgcmVzdWx0cyA9IHt9O1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gKHsga2V5LCBrZXkyLCBrZXkzLCBrZXk0LCBrZXk1LCBrZXk2LCBrZXk3LCBrZXk4LCByZXMsIGRpY3Rpb25hcnlLZXkgfSkgPT4ge1xuICAgICAga2V5ID0ga2V5ID8ga2V5ICsgJy8nIDogJyc7XG4gICAgICBrZXkyID0ga2V5MiA/IGtleTIgKyAnLycgOiAnJztcbiAgICAgIGtleTMgPSBrZXkzID8ga2V5MyArICcvJyA6ICcnO1xuICAgICAga2V5NCA9IGtleTQgPyBrZXk0ICsgJy8nIDogJyc7XG4gICAgICBrZXk1ID0ga2V5NSA/IGtleTUgKyAnLycgOiAnJztcbiAgICAgIGtleTYgPSBrZXk2ID8ga2V5NiArICcvJyA6ICcnO1xuICAgICAga2V5NyA9IGtleTcgPyBrZXk3ICsgJy8nIDogJyc7XG4gICAgICBrZXk4ID0ga2V5OCA/IGtleTggKyAnLycgOiAnJztcblxuICAgICAgY29uc3QgaXNEbG8gPSBkaWN0aW9uYXJ5S2V5LmluY2x1ZGVzKCctRExPLScpO1xuXG4gICAgICBjb25zdCByZWdpb24gPSBkaWN0aW9uYXJ5S2V5LnNwbGl0KCdwYXRoPS8nKVsxXS5zcGxpdCgnJicpWzBdICsgJy8nO1xuXG4gICAgICByZXN1bHRzW3JlZ2lvbiArIGtleTIgKyBrZXkzICsga2V5NCArIGtleTUgKyBrZXk2ICsga2V5NyArIGtleThdID0ge1xuICAgICAgICBpc0RsbyxcbiAgICAgICAgcmVzLFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgbGV0IGluZGV4S2V5ID0gMDtcbiAgICBjb25zdCBkaWN0aW9uYXJ5S2V5cyA9IFtdO1xuXG4gICAgd2hpbGUgKGxvY2FsU3RvcmFnZS5rZXkoaW5kZXhLZXkpKSB7XG4gICAgICBjb25zdCBzdG9yYWdlS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpbmRleEtleSk7XG5cbiAgICAgIGlmIChzdG9yYWdlS2V5LmluY2x1ZGVzKCcvZGxvL3NjYXBpL2NvbW1vbi9kaWN0aW9uYXJ5L2RpY3Rpb25hcnknKSkge1xuICAgICAgICBkaWN0aW9uYXJ5S2V5cy5wdXNoKHN0b3JhZ2VLZXkpO1xuICAgICAgfVxuXG4gICAgICBpbmRleEtleSsrO1xuICAgIH1cblxuICAgIGRpY3Rpb25hcnlLZXlzLmZvckVhY2goKGRpY3Rpb25hcnlLZXkpID0+IHtcbiAgICAgIGNvbnN0IHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRpY3Rpb25hcnlLZXkpKTtcblxuICAgICAgaWYgKHR5cGVvZiBzICE9PSAnb2JqZWN0JykgcmV0dXJuO1xuXG4gICAgICBPYmplY3Qua2V5cyhzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFzW2tleV0pIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mIHNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoc1trZXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICByZXM6IHNba2V5XSxcbiAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKHNba2V5XSkuZm9yRWFjaCgoa2V5MikgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXSxcbiAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml0pLmZvckVhY2goKGtleTMpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdLFxuICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml1ba2V5M10pLmZvckVhY2goKGtleTQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0sXG4gICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0pLmZvckVhY2goKGtleTUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgICAgICBrZXk0LFxuICAgICAgICAgICAgICAgICAgICAgIGtleTUsXG4gICAgICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV0sXG4gICAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdKS5mb3JFYWNoKChrZXk2KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk0LFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTYsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdKS5mb3JFYWNoKChrZXk3KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl1ba2V5N10udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddKS5mb3JFYWNoKChrZXk4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl1ba2V5N11ba2V5OF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddW2tleThdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddW2tleThdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcbiAgICBpZiAoT2JqZWN0LmtleXMocmVzdWx0cykubGVuZ3RoID4gMTUwKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMocmVzdWx0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBnZXREaWN0aW9uYXJ5VXJsKHJlc3VsdHNba2V5XS5pc0RsbykgKyBrZXk7XG4gICAgICBjb250ZW50LnB1c2goeyB0eHQ6IHJlc3VsdHNba2V5XS5yZXMsIHVybCwga2V5IH0pO1xuICAgIH0pO1xuXG4gICAgZmlsbERpY3Rpb25hcnkoY29udGVudCk7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJGaWxsRGljdGlvbmFyeSgpO1xuICB9XG59O1xuXG5jb25zdCBnZXREaWN0aW9uYXJ5VXJsID0gKGlzRGxvKSA9PiB7XG4gIGNvbnN0IGhvc3RQYXJ0cyA9IGxvY2F0aW9uLmhvc3Quc3BsaXQoJy4nKTtcbiAgY29uc3QgcHJvdG9jb2wgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLyc7XG4gIGNvbnN0IGlzVG93bkVudiA9IGhvc3RQYXJ0c1swXS5pbmNsdWRlcygndG93bicpO1xuICBjb25zdCBpc0RldkVudiA9IGhvc3RQYXJ0c1swXS5pbmNsdWRlcygnd2ViJyk7XG4gIGxldCBlbnZQYXJ0O1xuXG4gIGlmIChpc0RldkVudikge1xuICAgIGVudlBhcnQgPSBgd2ViLiR7aG9zdFBhcnRzWzFdfWA7XG4gIH0gZWxzZSBpZiAoaXNUb3duRW52KSB7XG4gICAgZW52UGFydCA9IGAke2hvc3RQYXJ0c1swXX1lZGl0JHtpc0RsbyA/ICdkbG8nIDogJ2RsaSd9YDtcbiAgfSBlbHNlIHtcbiAgICBlbnZQYXJ0ID0gYGVkaXQke2lzRGxvID8gJ2RsbycgOiAnZGxpJ31gO1xuICB9XG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7ZW52UGFydH0uZGFuc2tlc3BpbC5kay9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4P3NjX2J3PTEmZm89L3NpdGVjb3JlL2NvbnRlbnQvRGFuc2tlU3BpbC9TaXRlJTIwc2V0dGluZ3MvRGljdGlvbmFyeS9gO1xufTtcblxuY29uc3QgY2xlYXJGaWxsRGljdGlvbmFyeSA9ICgpID0+IHtcbiAgY29uc3QgcmVtb3ZlRWxlbWVudEJ5SWQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWwpIGVsLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJlbW92ZUVsZW1lbnRCeUlkKCdmaW5kVGV4dEluRGljdGlvbmFyaWVzJyk7XG4gIHJlbW92ZUVsZW1lbnRCeUlkKCdmaW5kVGV4dEluRGljdGlvbmFyaWVzU3R5bGUnKTtcbn07XG5cbmNvbnN0IGVuc3VyZUVsZW1lbnQgPSAoaWQsIGNyZWF0ZUVsZW1lbnQpID0+IHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBpZiAoIWVsKSB7XG4gICAgZWwgPSBjcmVhdGVFbGVtZW50KCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufTtcblxuY29uc3Qgc2V0U3R5bGUgPSAoc3R5bGUsIGNzcykgPT4ge1xuICBzdHlsZS5pbm5lclRleHQgPSBjc3M7XG59O1xuXG5jb25zdCBmaWxsRGljdGlvbmFyeSA9IChjb250ZW50KSA9PiB7XG4gIGNvbnN0IGVsID0gZW5zdXJlRWxlbWVudCgnZmluZFRleHRJbkRpY3Rpb25hcmllcycsICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSAnZmluZFRleHRJbkRpY3Rpb25hcmllcyc7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSk7XG4gIGVsLmlubmVyVGV4dCA9ICcnO1xuXG4gIGNvbnN0IHN0eWxlID0gZW5zdXJlRWxlbWVudCgnZmluZFRleHRJbkRpY3Rpb25hcmllc1N0eWxlJywgKCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWwuaWQgPSAnZmluZFRleHRJbkRpY3Rpb25hcmllc1N0eWxlJztcbiAgICByZXR1cm4gc3R5bGVFbDtcbiAgfSk7XG5cbiAgc2V0U3R5bGUoXG4gICAgc3R5bGUsXG4gICAgYFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllcyB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDAwMDE7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDEwMHZoO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEzcHggMXB4ICNjY2M7XG4gICAgICAgICAgbWF4LWhlaWdodDogOTV2aDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDk1dnc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzOjphZnRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gICAgICAgICAgY29udGVudDogXCIke2NvbnRlbnQubGVuZ3RofVwiO1xuICAgICAgICAgIHRvcDogLTM1cHg7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2JkZmZlNTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllczpob3ZlciB7XG4gICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllcyBhOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMgcCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzIGEge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBgXG4gICk7XG5cbiAgY29udGVudC5mb3JFYWNoKCh7IHR4dCwgdXJsLCBrZXkgfSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBwLmlubmVyVGV4dCA9IHR4dDtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgYS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBhLnRleHQgPSBrZXk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIGRpdi5hcHBlbmRDaGlsZChhKTtcbiAgICBlbC5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cERzRmluZERpY3Rpb25hcnkoKSB7XG4gIGlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykgJiYgIWxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9zaXRlY29yZS8nKSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGZpbmRUZXh0SW5EaWN0aW9uYXJpZXMpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBtYWtlQnJhbmNoTmFtZSgpIHtcbiAgbGV0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXNzdWVkZXRhaWxzICN0eXBlLXZhbCcpO1xuICBsZXQgaXNzdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXNzdWUtbGluaycpO1xuICBsZXQgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdW1tYXJ5LXZhbCcpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWNvbHVtbnMgLmdoeC1pc3N1ZS5naHgtc2VsZWN0ZWQnKSkge1xuICAgIHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWlzc3VlLmdoeC1zZWxlY3RlZCAuZ2h4LXR5cGUnKTtcbiAgICBpc3N1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naHgtaXNzdWUuZ2h4LXNlbGVjdGVkIC5naHgta2V5Jyk7XG4gICAgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naHgtaXNzdWUuZ2h4LXNlbGVjdGVkIC5naHgtc3VtbWFyeScpO1xuICB9XG5cbiAgaWYgKCEodHlwZSAmJiBpc3N1ZSAmJiBzdW1tYXJ5KSkgcmV0dXJuO1xuXG4gIHR5cGUgPSB0eXBlLmlubmVyVGV4dCB8fCB0eXBlLnRpdGxlO1xuICB0eXBlID0gdHlwZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgdHlwZSA9IHR5cGUucmVwbGFjZSgvc3RvcnkvLCAnZmVhdHVyZScpO1xuXG4gIGlzc3VlID0gaXNzdWUuaW5uZXJUZXh0LnRyaW0oKTtcblxuICBzdW1tYXJ5ID0gc3VtbWFyeS5pbm5lclRleHRcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9bXmEteiBdL2csICctJylcbiAgICAucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgLnJlcGxhY2UoLy0tKy9nLCAnLScpO1xuXG4gIHJldHVybiBgJHt0eXBlfS8ke2lzc3VlfS0ke3N1bW1hcnl9YC5zbGljZSgwLCA1MCkucmVwbGFjZSgvLSQvLCAnJyk7XG59XG5cbi8vIEFkZCB0byB3aW5kb3csIGFzIGl0J3MgdXNlZCBpbiBKaXJhTWFrZUJSYW5jaE5hbWUuanMuXG53aW5kb3cubWFrZUJyYW5jaE5hbWUgPSBtYWtlQnJhbmNoTmFtZTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZUJyYW5jaE5hbWU7XG4iLCJsZXQgcHJldmlvdXNTZWxlY3RlZFNpdGVjb3JlSWQgPSAnJztcbmxldCBzaG93RmF2b3JpdGVzUG9wdXAgPSBmYWxzZTtcbmxldCBkZWZhdWx0VGV4dEFyZWFIZWlnaHQgPSAnNTAwcHg7JztcblxuY29uc3QgYWRkVXJsVG9UcmVlTGlzdElkcyA9ICgpID0+IHtcbiAgY29uc3QgdHJlZUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjQ29udGVudENvbnRyb2xTZWxlY3RlZExpc3QnKTtcblxuICB0cmVlTGlzdHMuZm9yRWFjaCgodHJlZUxpc3QpID0+IHtcbiAgICBpZiAodHJlZUxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdDaHJvbWVFeHRlbnNpb25BZGRVcmxUb1RyZWVMaXN0SWRzJykpIHJldHVybjtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB0cmVlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3Qgb3B0aW9uJyk7XG4gICAgY29uc3QgaGVscCA9IHRyZWVMaXN0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjQ29udGVudENvbnRyb2xUcmVlTGlzdEhlbHAnKTtcblxuICAgIGlmICghaGVscCB8fCBvcHRpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgdHJlZUxpc3QuY2xhc3NMaXN0LmFkZCgnQ2hyb21lRXh0ZW5zaW9uQWRkVXJsVG9UcmVlTGlzdElkcycpO1xuXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGlkID0gb3B0aW9uLnZhbHVlPy5zcGxpdCgnfCcpPy5bMV07XG4gICAgICBpZiAoIWlkKSByZXR1cm47XG5cbiAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2ZvJywgaWQpO1xuICAgICAgICBpZiAoaGVscC5pbm5lckhUTUwuaW5jbHVkZXMoaWQpKSByZXR1cm47XG5cbiAgICAgICAgaGVscC5pbm5lckhUTUwgPSBgJHtoZWxwLmlubmVySFRNTH0gPGEgaHJlZj1cIiR7dXJsLmhyZWZ9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDtcIj4ke2lkfTwvYT5gO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc3RyZXRjaENvbHVtbiA9ICgpID0+IHtcbiAgY29uc3QgY29sdW1uV2lkdGggPSA0MDA7XG4gIGRvY3VtZW50LmNvb2tpZSA9IGBzY0NvbnRlbnRFZGl0b3JGb2xkZXJzV2lkdGg9JHtjb2x1bW5XaWR0aH07IGV4cGlyZXM9VGh1LCAzMSBEZWMgMjEwMCAxMjowMDowMCBVVEM7IHBhdGg9L2A7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDb250ZW50VHJlZVBhbmVsJykuc3R5bGUud2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGxpdHRlci1iYXItdmVydGljYWwnKS5zdHlsZS5sZWZ0ID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xuICBjb25zdCBlZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ29udGVudEVkaXRvcicpO1xuICBlZGl0b3Iuc3R5bGUud2lkdGggPSBwYXJzZUludChlZGl0b3Iuc3R5bGUud2lkdGgpIC0gY29sdW1uV2lkdGggKyBwYXJzZUludChlZGl0b3Iuc3R5bGUubGVmdCkgKyAncHgnO1xuICBlZGl0b3Iuc3R5bGUubGVmdCA9IGAke2NvbHVtbldpZHRofXB4YDtcbn07XG5cbmNvbnN0IHNjcm9sbFRvSXRlbSA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjQ29udGVudFRyZWVOb2RlQWN0aXZlJylbMF07XG4gIGNvbnN0IHRvZ2dsZUFycm93ID0gc2VsZWN0ZWRJdGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gIHRvZ2dsZUFycm93ICYmIHRvZ2dsZUFycm93LmNsaWNrKCk7XG4gIHNlbGVjdGVkSXRlbSAmJiBzZWxlY3RlZEl0ZW0ucGFyZW50RWxlbWVudCAmJiBzZWxlY3RlZEl0ZW0ucGFyZW50RWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xufTtcblxuY29uc3QgZ2V0QWN0aXZlVHJlZU5vZGVUZXh0ID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjQ29udGVudFRyZWVOb2RlQWN0aXZlIHNwYW4nKS5pbm5lclRleHQ7XG59O1xuXG5jb25zdCBnZXRBY3RpdmVUcmVlTm9kZVBhdGggPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NFZGl0b3JRdWlja0luZm8gdHI6bnRoLWNoaWxkKDMpIC5zY0VkaXRvckhlYWRlclF1aWNrSW5mb0lucHV0JykudmFsdWU7XG59O1xuXG5jb25zdCBhZGRCb29rbWFyayA9ICgpID0+IHtcbiAgY29uc3Qgc2l0ZWNvcmVUZXh0ID0gZ2V0QWN0aXZlVHJlZU5vZGVUZXh0KCk7XG4gIGlmIChzaXRlY29yZVRleHQgPT09IHByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkKSByZXR1cm47XG4gIHByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkID0gc2l0ZWNvcmVUZXh0O1xuXG4gIGxldCBib29rbWFya0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va21hcmtMaW5rJyk7XG4gIGxldCBib29rbWFya1N0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2ttYXJrU3R5bGUnKTtcblxuICBpZiAoIWJvb2ttYXJrTGluaykge1xuICAgIGJvb2ttYXJrTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBib29rbWFya0xpbmsuaWQgPSAnYm9va21hcmtMaW5rJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoYm9va21hcmtMaW5rKTtcbiAgICBib29rbWFya1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBib29rbWFya1N0eWxlLmlkID0gJ2Jvb2ttYXJrU3R5bGUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChib29rbWFya1N0eWxlKTtcbiAgfVxuXG4gIGJvb2ttYXJrTGluay5ocmVmID0gYGphdmFzY3JpcHQ6d2luZG93LmxvY2F0aW9uLmhyZWY9d2luZG93LmxvY2F0aW9uLm9yaWdpbisnL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50IEVkaXRvci5hc3B4P3NjX2J3PTEmZm89JHtnZXRBY3RpdmVUcmVlTm9kZVBhdGgoKX0nYDtcbiAgYm9va21hcmtMaW5rLmlubmVySFRNTCA9IHNpdGVjb3JlVGV4dDtcblxuICBib29rbWFya1N0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICNib29rbWFya0xpbmsge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwO1xuICAgICAgICAgIHRvcDogMTFweDtcbiAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdPcGVuIFNhbnMnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweCAwIDdweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMHB4IDFweCAjNTg1ODU4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICB9XG4gICAgYDtcbn07XG5cbmNvbnN0IGluY3JlYXNlSGVpZ2h0T25UcmVlTGlzdHMgPSAoKSA9PiB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY0VkaXRvclNlY3Rpb25QYW5lbENlbGwgLnNjQ29udGVudENvbnRyb2wuc2NDb250ZW50Q29udHJvbFRyZWVsaXN0JylcbiAgICAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuY2xpZW50SGVpZ2h0ID09PSAyMjApIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnNDAwcHgnO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuY29uc3QgZml4SW5wdXRDZWxsVGV4dEFyZWEgPSAoKSA9PiB7XG4gIGNvbnN0IHR4dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NFZGl0b3JGaWVsZE1hcmtlcklucHV0Q2VsbCB0ZXh0YXJlYScpO1xuICBpZiAodHh0cy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXhJbnB1dENlbGxUZXh0QXJlYScpKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlkID0gJ2ZpeElucHV0Q2VsbFRleHRBcmVhJztcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAubW9ub3NwYWNlLWZvbnQge2ZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCBcIkFuZGFsZSBNb25vXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO31cbiAgICBgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICB0eHRzLmZvckVhY2goKHR4dCkgPT4ge1xuICAgIGlmICh0eHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb25vc3BhY2UtZm9udCcpKSByZXR1cm47XG5cbiAgICB0eHQuY2xhc3NMaXN0LmFkZCgnbW9ub3NwYWNlLWZvbnQnKTtcbiAgICB0eHQuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgZmFsc2UpO1xuXG4gICAgdHh0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSAnODAwcHgnO1xuICAgICAgdGhpcy5zdHlsZS5mb250U2l6ZSA9ICcxM3B4JztcbiAgICAgIHRoaXMuc3R5bGUubGluZUhlaWdodCA9ICcxLjQ1JztcbiAgICB9KTtcblxuICAgIHR4dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZSA9IGBoZWlnaHQ6ICR7ZGVmYXVsdFRleHRBcmVhSGVpZ2h0fWA7IC8vIEZyb20gZW5sYXJnZVRyZWVsaXN0KCkgZnVuY3Rpb24gYmVsb3cuXG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZW5sYXJnZVRyZWVsaXN0ID0gKCkgPT4ge1xuICBjb25zdCBkYXRhU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9XCJTZWN0aW9uX0RhdGFcIl0nKTtcbiAgaWYgKCFkYXRhU2VjdGlvbikgcmV0dXJuO1xuICBsZXQgZGF0YVRyZWVsaXN0ID0gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignW2lkKj1cIlNlY3Rpb25fRGF0YVwiXScpXG4gICAgLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjQ29udGVudENvbnRyb2xUcmVlbGlzdCcpO1xuICBpZiAoIWRhdGFUcmVlbGlzdCkgcmV0dXJuO1xuICBkYXRhVHJlZWxpc3Quc3R5bGUgPSBgaGVpZ2h0OiAke2RlZmF1bHRUZXh0QXJlYUhlaWdodH1gO1xufTtcblxuY29uc3QgZ2V0RmF2b3JpdGVJdGVtTGFiZWwgPSAoZmF2b3JpdGUpID0+IHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uaW5uZXJUZXh0ID0gZmF2b3JpdGUubGFiZWw7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgZ2V0RmF2b3JpdGVJdGVtUGFyZW50VGV4dCA9IChmYXZvcml0ZSkgPT4ge1xuICBsZXQgcGF0aCA9IGZhdm9yaXRlLnBhdGguc3BsaXQoJy8nKTtcbiAgcGF0aC5wb3AoKTtcbiAgcGF0aCA9IHBhdGguam9pbignLycpO1xuICBwYXRoID0gYCR7cGF0aH0vIGA7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmNsYXNzTmFtZSA9ICdDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbVBhcmVudCc7XG4gIHNwYW4uaW5uZXJUZXh0ID0gcGF0aDtcbiAgcmV0dXJuIHNwYW47XG59O1xuXG5jb25zdCBhZGRGYXZvcml0ZXMgPSAoKSA9PiB7XG4gIGxldCBmYXZvcml0ZXNTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1N0eWxlJyk7XG5cbiAgaWYgKCFmYXZvcml0ZXNTdHlsZSkge1xuICAgIGZhdm9yaXRlc1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBmYXZvcml0ZXNTdHlsZS5pZCA9ICdDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1N0eWxlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzU3R5bGUpO1xuICAgIGZhdm9yaXRlc1N0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgIC5zYy1nbG9iYWxIZWFkZXIge1xuICAgICAgICB6LWluZGV4OiAxMDE7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlcyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICAgICAgYmFja2dyb3VuZDogIzJiMmIyYjtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMCA1cHggNnB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogNnB4IDdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW06aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbSBzcGFuLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtUmVtb3ZlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtIHNwYW4uQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1SZW1vdmU6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7IFxuICAgICAgfVxuICAgICAgXG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0gc3Bhbi5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbVBhcmVudCB7XG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xuICAgICAgfVxuICAgIFxuICAgICAgI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBBZGRGYXZvcml0ZSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogNnB4IDdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1gO1xuICB9XG5cbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2Zhdm9yaXRlcycsICh7IGZhdm9yaXRlcyB9KSA9PiB7XG4gICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzIHx8IFtdO1xuICAgIGlmIChmYXZvcml0ZXMubGVuZ3RoID4gMSkge1xuICAgICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzLnNvcnQoKGEsIGIpID0+IChhLnBhdGggPiBiLnBhdGggPyAxIDogLTEpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY2NJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLWFjY291bnRJbmZvcm1hdGlvbicpO1xuICAgIGxldCBmYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXMnKTtcbiAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cCcpO1xuXG4gICAgaWYgKCFmYXYpIHtcbiAgICAgIGZhdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBmYXYuaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXMnO1xuICAgICAgZmF2LmlubmVyVGV4dCA9ICdGYXZvcml0ZXMnO1xuICAgICAgYWNjSW5mby5pbnNlcnRCZWZvcmUoZmF2LCBhY2NJbmZvLmZpcnN0Q2hpbGQpO1xuICAgICAgZmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaG93RmF2b3JpdGVzUG9wdXAgPSAhc2hvd0Zhdm9yaXRlc1BvcHVwO1xuICAgICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghc2hvd0Zhdm9yaXRlc1BvcHVwICYmIHBvcHVwKSB7XG4gICAgICBmYXYucmVtb3ZlQ2hpbGQocG9wdXApO1xuICAgIH1cblxuICAgIGlmIChzaG93RmF2b3JpdGVzUG9wdXApIHtcbiAgICAgIGlmICghcG9wdXApIHtcbiAgICAgICAgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wdXAuaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cCc7XG4gICAgICAgIGZhdi5hcHBlbmRDaGlsZChwb3B1cCk7XG4gICAgICB9XG5cbiAgICAgIGZhdm9yaXRlcy5mb3JFYWNoKChmYXZvcml0ZSkgPT4ge1xuICAgICAgICBsZXQgZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbT1cIiR7ZmF2b3JpdGUucGF0aH1cIl1gKTtcblxuICAgICAgICBpZiAoIWYpIHtcbiAgICAgICAgICBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZi5jbGFzc05hbWUgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0nO1xuICAgICAgICAgIGYuc2V0QXR0cmlidXRlKCdDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbScsIGZhdm9yaXRlLnBhdGgpO1xuXG4gICAgICAgICAgZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bG9jYXRpb24ub3JpZ2lufSR7bG9jYXRpb24ucGF0aG5hbWV9P3NjX2J3PTEmZm89JHtmYXZvcml0ZS5wYXRofWA7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBmLmFwcGVuZENoaWxkKGdldEZhdm9yaXRlSXRlbVBhcmVudFRleHQoZmF2b3JpdGUpKTtcbiAgICAgICAgICBmLmFwcGVuZENoaWxkKGdldEZhdm9yaXRlSXRlbUxhYmVsKGZhdm9yaXRlKSk7XG5cbiAgICAgICAgICBsZXQgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIHJlbW92ZS5jbGFzc05hbWUgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1SZW1vdmUnO1xuICAgICAgICAgIHJlbW92ZS5pbm5lclRleHQgPSAneCc7XG4gICAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZmF2b3JpdGVzID0gZmF2b3JpdGVzLmZpbHRlcigoZikgPT4gZiAhPT0gZmF2b3JpdGUpO1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBmYXZvcml0ZXMgfSk7XG4gICAgICAgICAgICBwb3B1cC5yZW1vdmVDaGlsZChmKTtcbiAgICAgICAgICAgIGFkZEZhdm9yaXRlcygpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZi5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGYpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGlzSXRlbUluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0gPSBcIiR7Z2V0QWN0aXZlVHJlZU5vZGVQYXRoKCl9XCJdYFxuICAgICAgKTtcbiAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEFkZEZhdm9yaXRlJyk7XG5cbiAgICAgIGlmIChhZGRCdXR0b24pIHBvcHVwLnJlbW92ZUNoaWxkKGFkZEJ1dHRvbik7XG5cbiAgICAgIGlmICghaXNJdGVtSW5NZW51KSB7XG4gICAgICAgIGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRCdXR0b24uaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEFkZEZhdm9yaXRlJztcbiAgICAgICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9IGBBZGQgJHtnZXRBY3RpdmVUcmVlTm9kZVRleHQoKX0gPyBgO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICBmYXZvcml0ZXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogZ2V0QWN0aXZlVHJlZU5vZGVUZXh0KCksXG4gICAgICAgICAgICBwYXRoOiBnZXRBY3RpdmVUcmVlTm9kZVBhdGgoKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGZhdm9yaXRlcyB9KTtcbiAgICAgICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWRkSW1hZ2VEaXJlY3RVcmwgPSAoKSA9PiB7XG4gIGxldCBpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0VkaXRvckZyYW1lcycpPy5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgbGV0IGlzVmlzaWJsZSA9IGl0ZW0/LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJztcbiAgY29uc3QgdGFibGUgPSBpdGVtPy5xdWVyeVNlbGVjdG9yKCd0YWJsZS5zY0VkaXRvclF1aWNrSW5mbyB0Ym9keScpO1xuXG4gIGlmIChpdGVtPy5pZCAmJiBpc1Zpc2libGUgJiYgdGFibGUgJiYgIXRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNzY1Rvb2xNZWRpYVBhdGgnKSkge1xuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICB0ci5pZCA9ICdzY1Rvb2xNZWRpYVBhdGgnO1xuICAgIGNvbnN0IHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ29uY2xpY2snLCAnamF2YXNjcmlwdDp0aGlzLnNlbGVjdCgpO3JldHVybiBmYWxzZScpO1xuICAgIGlucHV0LnZhbHVlID0gJy0vbWVkaWEvJyArIGl0ZW0uaWQucmVwbGFjZSgnRkNvbnRlbnQnLCAnJykgKyAnLmFzaHgnO1xuXG4gICAgdGQxLmlubmVyVGV4dCA9ICdSZWxhdGl2IHN0aTonO1xuICAgIHRkMi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZDIpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgaWYgKGxvY2F0aW9uLmhvc3QuZW5kc1dpdGgoJ2RhbnNrZXNwaWwuZGsnKSkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4Jykge1xuICAgICAgc3RyZXRjaENvbHVtbigpO1xuICAgICAgc2Nyb2xsVG9JdGVtKCk7XG4gICAgICBhZGRCb29rbWFyaygpO1xuICAgICAgc2V0SW50ZXJ2YWwoYWRkVXJsVG9UcmVlTGlzdElkcywgNTAwKTtcbiAgICAgIHNldEludGVydmFsKGluY3JlYXNlSGVpZ2h0T25UcmVlTGlzdHMsIDUwMCk7XG4gICAgICBzZXRJbnRlcnZhbChmaXhJbnB1dENlbGxUZXh0QXJlYSwgNTAwKTtcbiAgICAgIHNldEludGVydmFsKGFkZEJvb2ttYXJrLCA1MDApO1xuXG4gICAgICBzZXRJbnRlcnZhbChlbmxhcmdlVHJlZWxpc3QsIDUwMCk7XG5cbiAgICAgIGFkZEZhdm9yaXRlcygpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRUaW1lb3V0KGFkZEZhdm9yaXRlcywgNTAwKSk7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50JTIwTWFuYWdlci9EZWZhdWx0LmFzcHgnKSB7XG4gICAgICBzZXRJbnRlcnZhbChhZGRJbWFnZURpcmVjdFVybCwgNTAwKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFNpdGVjb3JlTGF5b3V0SW1wcm92ZW1lbnRzKCkge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgLy8gRG9jdW1lbnQgaXMgYWxyZWFkeSByZWFkeSB0byBnbywgcnVuIHlvdXIgY29kZVxuICAgIGluaXRpYWxpemUoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIERPTUNvbnRlbnRMb2FkZWRcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2V0dXBEc0ZpbmREaWN0aW9uYXJ5IH0gZnJvbSAnLi9Ec0ZpbmREaWN0aW9uYXJ5JztcbmltcG9ydCB7IHNldHVwR2l0aHViQ3JlYXRlQnJhbmNoIH0gZnJvbSAnLi9Db250ZW50U2NyaXB0cy9HaXRodWIvR2l0SHViQ3JlYXRlQnJhbmNoJztcbmltcG9ydCB7IHNldHVwU2l0ZWNvcmVMYXlvdXRJbXByb3ZlbWVudHMgfSBmcm9tICcuL1NpdGVjb3JlTGF5b3V0SW1wcm92ZW1lbnRzJztcbmltcG9ydCB7IHNob3dDcmVhdGVCcmFuY2hMaW5rIH0gZnJvbSAnLi9Db250ZW50U2NyaXB0cy9KaXJhL1Nob3dDcmVhdGVCcmFuY2hMaW5rJztcblxuc2V0dXBEc0ZpbmREaWN0aW9uYXJ5KCk7XG5zZXR1cEdpdGh1YkNyZWF0ZUJyYW5jaCgpO1xuc2V0dXBTaXRlY29yZUxheW91dEltcHJvdmVtZW50cygpO1xuc2hvd0NyZWF0ZUJyYW5jaExpbmsoKTtcblxuaWYgKGxvY2F0aW9uLmhvc3QuZW5kc1dpdGgoJ2RhbnNrZXNwaWwuZGsnKSkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0YyJykge1xuICAgICAgLy8gRG8gc29tZXRoaW5nIHdoZW4gRjIgaXMgcHJlc3NlZFxuICAgICAgYWxlcnQoJ0YyIHdhcyBwcmVzc2VkJyk7XG5cbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnY2FsbE15RnVuY3Rpb24nIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCd4eHggQ0FMTElORyBNWSBGVU5DVElPTiB4eHgnLCByZXNwb25zZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwid2FpdEZvckVsZW1lbnQiLCJfcmVmIiwiX2NhbGxlZSIsInNlbGVjdG9yIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl94Iiwic2V0dXBHaXRodWJDcmVhdGVCcmFuY2giLCJfc2V0dXBHaXRodWJDcmVhdGVCcmFuY2giLCJfY2FsbGVlMiIsInBhcmFtcyIsIm5ld0JyYW5jaCIsImN0YSIsImlucHV0IiwidXJsIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwibG9jYXRpb24iLCJob3N0Iiwic2VhcmNoIiwiaW5jbHVkZXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJnZXQiLCJjbGljayIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJldmVudHNUb0Rpc3BhdGNoIiwiZXZlbnRUeXBlIiwiZXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsIlVSTCIsIndpbmRvdyIsInNlYXJjaFBhcmFtcyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJtYWtlQnJhbmNoTmFtZSIsImlzUGFnZUFKaXJhVGFza0lVUGFnZSIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImNyZWF0ZUNUQSIsImJyYW5jaE5hbWUiLCJ0b29sQmFyIiwibmV3Q3RhQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuIiwiYXBwZW5kQ2hpbGQiLCJzaG93Q3JlYXRlQnJhbmNoTGluayIsImZpbmRUZXh0SW5EaWN0aW9uYXJpZXMiLCJzZWFyY2hTdHJpbmciLCJnZXRTZWxlY3Rpb24iLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwicmVzdWx0cyIsIm91dHB1dCIsImtleTIiLCJrZXkzIiwia2V5NCIsImtleTUiLCJrZXk2Iiwia2V5NyIsImtleTgiLCJyZXMiLCJkaWN0aW9uYXJ5S2V5IiwiaXNEbG8iLCJyZWdpb24iLCJzcGxpdCIsImluZGV4S2V5IiwiZGljdGlvbmFyeUtleXMiLCJsb2NhbFN0b3JhZ2UiLCJzdG9yYWdlS2V5IiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsImNvbnRlbnQiLCJnZXREaWN0aW9uYXJ5VXJsIiwidHh0IiwiZmlsbERpY3Rpb25hcnkiLCJjbGVhckZpbGxEaWN0aW9uYXJ5IiwiaG9zdFBhcnRzIiwicHJvdG9jb2wiLCJpc1Rvd25FbnYiLCJpc0RldkVudiIsImVudlBhcnQiLCJjb25jYXQiLCJyZW1vdmVFbGVtZW50QnlJZCIsImlkIiwiZWwiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImVuc3VyZUVsZW1lbnQiLCJib2R5Iiwic2V0U3R5bGUiLCJzdHlsZSIsImNzcyIsImRpdiIsInN0eWxlRWwiLCJfcmVmMiIsImhyZWYiLCJ0YXJnZXQiLCJ0ZXh0Iiwic2V0dXBEc0ZpbmREaWN0aW9uYXJ5IiwiZW5kc1dpdGgiLCJpc3N1ZSIsInN1bW1hcnkiLCJ0aXRsZSIsInRyaW0iLCJyZXBsYWNlIiwicHJldmlvdXNTZWxlY3RlZFNpdGVjb3JlSWQiLCJzaG93RmF2b3JpdGVzUG9wdXAiLCJkZWZhdWx0VGV4dEFyZWFIZWlnaHQiLCJhZGRVcmxUb1RyZWVMaXN0SWRzIiwidHJlZUxpc3RzIiwicXVlcnlTZWxlY3RvckFsbCIsInRyZWVMaXN0IiwiY29udGFpbnMiLCJvcHRpb25zIiwiaGVscCIsInBhcmVudEVsZW1lbnQiLCJvcHRpb24iLCJfb3B0aW9uJHZhbHVlIiwic2V0IiwiaW5uZXJIVE1MIiwic3RyZXRjaENvbHVtbiIsImNvbHVtbldpZHRoIiwiY29va2llIiwid2lkdGgiLCJsZWZ0IiwiZWRpdG9yIiwicGFyc2VJbnQiLCJzY3JvbGxUb0l0ZW0iLCJzZWxlY3RlZEl0ZW0iLCJ0b2dnbGVBcnJvdyIsInNjcm9sbEludG9WaWV3IiwiZ2V0QWN0aXZlVHJlZU5vZGVUZXh0IiwiZ2V0QWN0aXZlVHJlZU5vZGVQYXRoIiwiYWRkQm9va21hcmsiLCJzaXRlY29yZVRleHQiLCJib29rbWFya0xpbmsiLCJib29rbWFya1N0eWxlIiwiaW5jcmVhc2VIZWlnaHRPblRyZWVMaXN0cyIsImVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJmaXhJbnB1dENlbGxUZXh0QXJlYSIsInR4dHMiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJlbmxhcmdlVHJlZWxpc3QiLCJkYXRhU2VjdGlvbiIsImRhdGFUcmVlbGlzdCIsImdldEZhdm9yaXRlSXRlbUxhYmVsIiwiZmF2b3JpdGUiLCJzcGFuIiwibGFiZWwiLCJnZXRGYXZvcml0ZUl0ZW1QYXJlbnRUZXh0IiwicGF0aCIsImpvaW4iLCJjbGFzc05hbWUiLCJhZGRGYXZvcml0ZXMiLCJmYXZvcml0ZXNTdHlsZSIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZmF2b3JpdGVzIiwic29ydCIsImIiLCJhY2NJbmZvIiwiZmF2IiwicG9wdXAiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJvcmlnaW4iLCJmaWx0ZXIiLCJpc0l0ZW1Jbk1lbnUiLCJhZGRCdXR0b24iLCJldiIsImFkZEltYWdlRGlyZWN0VXJsIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCIiwiaXRlbSIsImlzVmlzaWJsZSIsImRpc3BsYXkiLCJ0YWJsZSIsInRyIiwidGQxIiwidGQyIiwiaW5pdGlhbGl6ZSIsInNldEludGVydmFsIiwic2V0dXBTaXRlY29yZUxheW91dEltcHJvdmVtZW50cyIsInJlYWR5U3RhdGUiLCJhbGVydCIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImFjdGlvbiIsInJlc3BvbnNlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=
