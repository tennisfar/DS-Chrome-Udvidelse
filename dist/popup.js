/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/ChromeTools.js':
      /*!****************************!*\
  !*** ./src/ChromeTools.js ***!
  \****************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getCurrentTab: () => /* binding */ getCurrentTab,
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
        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }
        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _iterableToArrayLimit(r, l) {
          var t = null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
          if (null != t) {
            var e,
              n,
              i,
              u,
              a = [],
              f = !0,
              o = !1;
            try {
              if (((i = (t = t.call(r)).next), 0 === l)) {
                if (Object(t) !== t) return;
                f = !1;
              } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
            } catch (r) {
              (o = !0), (n = r);
            } finally {
              try {
                if (!f && null != t['return'] && ((u = t['return']()), Object(u) !== u)) return;
              } finally {
                if (o) throw n;
              }
            }
            return a;
          }
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
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
        function getCurrentTab() {
          return _getCurrentTab.apply(this, arguments);
        }
        function _getCurrentTab() {
          _getCurrentTab = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
              var queryOptions, _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      queryOptions = {
                        active: true,
                        lastFocusedWindow: true,
                      }; // `tab` will either be a `tabs.Tab` instance or `undefined`.
                      _context.next = 3;
                      return chrome.tabs.query(queryOptions);
                    case 3:
                      _yield$chrome$tabs$qu = _context.sent;
                      _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
                      tab = _yield$chrome$tabs$qu2[0];
                      return _context.abrupt('return', tab);
                    case 7:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return _getCurrentTab.apply(this, arguments);
        }

        /***/
      },

    /***/ './src/CurrentVersion.js':
      /*!*******************************!*\
  !*** ./src/CurrentVersion.js ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ updateVersionButton: () => /* binding */ updateVersionButton,
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
        var isVersionLower = function isVersionLower(userVersion, newVersion) {
          var userParts = userVersion.split('.').map(Number);
          var newParts = newVersion.split('.').map(Number);
          for (var i = 0; i < Math.max(userParts.length, newParts.length); i++) {
            var userPart = userParts[i] || 0;
            var newPart = newParts[i] || 0;
            if (userPart < newPart) return true;
            if (userPart > newPart) return false;
          }
          return false;
        };
        var getGithubLatestRelease = /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
              var gitHubApiUrl, gitHubResponse, releases;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      gitHubApiUrl = 'https://api.github.com/repos/tennisfar/DS-Chrome-Udvidelse/releases';
                      _context.next = 3;
                      return fetch(gitHubApiUrl);
                    case 3:
                      gitHubResponse = _context.sent;
                      _context.next = 6;
                      return gitHubResponse.json();
                    case 6:
                      releases = _context.sent;
                      return _context.abrupt('return', releases[0]);
                    case 8:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return function getGithubLatestRelease() {
            return _ref.apply(this, arguments);
          };
        })();
        var getLocalVersion = /*#__PURE__*/ (function () {
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
              var localDataUrl, localDataResponse, localData;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      localDataUrl = '/manifest.json';
                      _context2.next = 3;
                      return fetch(localDataUrl);
                    case 3:
                      localDataResponse = _context2.sent;
                      _context2.next = 6;
                      return localDataResponse.json();
                    case 6:
                      localData = _context2.sent;
                      return _context2.abrupt('return', localData.version);
                    case 8:
                    case 'end':
                      return _context2.stop();
                  }
              }, _callee2);
            })
          );
          return function getLocalVersion() {
            return _ref2.apply(this, arguments);
          };
        })();
        function updateVersionButton() {
          return _updateVersionButton.apply(this, arguments);
        }
        function _updateVersionButton() {
          _updateVersionButton = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
              var updateDiv, _githubLatestRelease$, githubLatestRelease, githubVersion, localVersion, url, message;
              return _regeneratorRuntime().wrap(
                function _callee3$(_context3) {
                  while (1)
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        updateDiv = document.querySelector('#updateStatus');
                        _context3.prev = 1;
                        _context3.next = 4;
                        return getGithubLatestRelease();
                      case 4:
                        githubLatestRelease = _context3.sent;
                        githubVersion =
                          githubLatestRelease === null ||
                          githubLatestRelease === void 0 ||
                          (_githubLatestRelease$ = githubLatestRelease.tag_name) === null ||
                          _githubLatestRelease$ === void 0
                            ? void 0
                            : _githubLatestRelease$.replace('v', '');
                        _context3.next = 8;
                        return getLocalVersion();
                      case 8:
                        localVersion = _context3.sent;
                        if (isVersionLower(localVersion, githubVersion)) {
                          url = githubLatestRelease.html_url;
                          message = 'Opdater til v. '.concat(githubVersion, ' (du har ').concat(localVersion, ')');
                        } else {
                          url = 'https://github.com/tennisfar/DS-Chrome-Udvidelse/releases';
                          message = 'Version '.concat(localVersion);
                        }
                        updateDiv.innerText = message;
                        updateDiv.addEventListener('click', function () {
                          return window.open(url);
                        });
                        _context3.next = 17;
                        break;
                      case 14:
                        _context3.prev = 14;
                        _context3.t0 = _context3['catch'](1);
                        updateDiv.style.display = 'none';
                      case 17:
                      case 'end':
                        return _context3.stop();
                    }
                },
                _callee3,
                null,
                [[1, 14]]
              );
            })
          );
          return _updateVersionButton.apply(this, arguments);
        }

        /***/
      },

    /***/ './src/OpenPageInExperienceEditor.js':
      /*!*******************************************!*\
  !*** ./src/OpenPageInExperienceEditor.js ***!
  \*******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupOpenPageInExperienceEditor: () => /* binding */ setupOpenPageInExperienceEditor,
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
        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }
        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _iterableToArrayLimit(r, l) {
          var t = null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
          if (null != t) {
            var e,
              n,
              i,
              u,
              a = [],
              f = !0,
              o = !1;
            try {
              if (((i = (t = t.call(r)).next), 0 === l)) {
                if (Object(t) !== t) return;
                f = !1;
              } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
            } catch (r) {
              (o = !0), (n = r);
            } finally {
              try {
                if (!f && null != t['return'] && ((u = t['return']()), Object(u) !== u)) return;
              } finally {
                if (o) throw n;
              }
            }
            return a;
          }
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
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
        function getCurrentTab() {
          return _getCurrentTab.apply(this, arguments);
        }
        function _getCurrentTab() {
          _getCurrentTab = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
              var queryOptions, _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1)
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      queryOptions = {
                        active: true,
                        lastFocusedWindow: true,
                      }; // `tab` will either be a `tabs.Tab` instance or `undefined`.
                      _context3.next = 3;
                      return chrome.tabs.query(queryOptions);
                    case 3:
                      _yield$chrome$tabs$qu = _context3.sent;
                      _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
                      tab = _yield$chrome$tabs$qu2[0];
                      return _context3.abrupt('return', tab);
                    case 7:
                    case 'end':
                      return _context3.stop();
                  }
              }, _callee3);
            })
          );
          return _getCurrentTab.apply(this, arguments);
        }
        var handleEnableCta = /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(cta) {
              var _tab$url, _tab$url2;
              var tab;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return getCurrentTab();
                    case 2:
                      tab = _context.sent;
                      if (
                        tab !== null &&
                        tab !== void 0 &&
                        (_tab$url = tab.url) !== null &&
                        _tab$url !== void 0 &&
                        _tab$url.includes('danskespil.dk') &&
                        !(
                          tab !== null &&
                          tab !== void 0 &&
                          (_tab$url2 = tab.url) !== null &&
                          _tab$url2 !== void 0 &&
                          _tab$url2.includes('/sitecore/')
                        )
                      ) {
                        cta.removeAttribute('disabled');
                      }
                    case 4:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return function handleEnableCta(_x) {
            return _ref.apply(this, arguments);
          };
        })();
        var handleOpenPageInExperienceEditor = /*#__PURE__*/ (function () {
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
              var tab;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return getCurrentTab();
                    case 2:
                      tab = _context2.sent;
                      chrome.scripting.executeScript({
                        target: {
                          tabId: tab.id,
                        },
                        function: function _function() {
                          var sitecoreId = sessionStorage.getItem('page_id');
                          var lo = window.location.origin;
                          var cl = document.body.classList;
                          var isDlo = cl.contains('dlo');
                          var isDli = cl.contains('dli');
                          var reg = isDli ? 'dli' : 'dlo';
                          if (lo.includes('town')) lo = lo.replace('.dan', 'edit' + reg + '.dan');
                          if (lo.includes('//da')) lo = lo.replace('//dan', '//edit' + reg + '.dan');
                          lo += '/?sc_mode=edit';
                          window.open(''.concat(lo, '&sc_itemid=').concat(sitecoreId), '_blank');
                        },
                      });
                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
              }, _callee2);
            })
          );
          return function handleOpenPageInExperienceEditor() {
            return _ref2.apply(this, arguments);
          };
        })();
        function setupOpenPageInExperienceEditor() {
          document.addEventListener('DOMContentLoaded', function () {
            var cta = document.querySelector('#openInExperienceEditor');
            handleEnableCta(cta);
            cta.addEventListener('click', function () {
              handleOpenPageInExperienceEditor();
            });
          });
        }

        /***/
      },

    /***/ './src/OpenPageInSitecore.js':
      /*!***********************************!*\
  !*** ./src/OpenPageInSitecore.js ***!
  \***********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupOpenPageInSitecore: () => /* binding */ setupOpenPageInSitecore,
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
        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }
        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _iterableToArrayLimit(r, l) {
          var t = null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
          if (null != t) {
            var e,
              n,
              i,
              u,
              a = [],
              f = !0,
              o = !1;
            try {
              if (((i = (t = t.call(r)).next), 0 === l)) {
                if (Object(t) !== t) return;
                f = !1;
              } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
            } catch (r) {
              (o = !0), (n = r);
            } finally {
              try {
                if (!f && null != t['return'] && ((u = t['return']()), Object(u) !== u)) return;
              } finally {
                if (o) throw n;
              }
            }
            return a;
          }
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
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
        function getCurrentTab() {
          return _getCurrentTab.apply(this, arguments);
        }
        function _getCurrentTab() {
          _getCurrentTab = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
              var queryOptions, _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1)
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      queryOptions = {
                        active: true,
                        lastFocusedWindow: true,
                      }; // `tab` will either be a `tabs.Tab` instance or `undefined`.
                      _context3.next = 3;
                      return chrome.tabs.query(queryOptions);
                    case 3:
                      _yield$chrome$tabs$qu = _context3.sent;
                      _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
                      tab = _yield$chrome$tabs$qu2[0];
                      return _context3.abrupt('return', tab);
                    case 7:
                    case 'end':
                      return _context3.stop();
                  }
              }, _callee3);
            })
          );
          return _getCurrentTab.apply(this, arguments);
        }
        var handleEnableCta = /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(cta) {
              var _tab$url, _tab$url2;
              var tab;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return getCurrentTab();
                    case 2:
                      tab = _context.sent;
                      if (
                        tab !== null &&
                        tab !== void 0 &&
                        (_tab$url = tab.url) !== null &&
                        _tab$url !== void 0 &&
                        _tab$url.includes('danskespil.dk') &&
                        !(
                          tab !== null &&
                          tab !== void 0 &&
                          (_tab$url2 = tab.url) !== null &&
                          _tab$url2 !== void 0 &&
                          _tab$url2.includes('/sitecore/')
                        )
                      ) {
                        cta.removeAttribute('disabled');
                      }
                    case 4:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return function handleEnableCta(_x) {
            return _ref.apply(this, arguments);
          };
        })();
        var handleOpenPageInSitecore = /*#__PURE__*/ (function () {
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
              var tab;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return getCurrentTab();
                    case 2:
                      tab = _context2.sent;
                      chrome.scripting.executeScript({
                        target: {
                          tabId: tab.id,
                        },
                        function: function _function() {
                          var sitecoreId = sessionStorage.getItem('page_id');
                          var lo = window.location.origin;
                          var cl = document.body.classList;
                          var isDlo = cl.contains('dlo');
                          var isDli = cl.contains('dli');
                          var reg = isDli ? 'dli' : 'dlo';
                          if (lo.includes('town')) lo = lo.replace('.dan', 'edit' + reg + '.dan');
                          if (lo.includes('//da')) lo = lo.replace('//dan', '//edit' + reg + '.dan');
                          lo += '/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1';
                          window.open(''.concat(lo, '&fo=').concat(sitecoreId), '_blank');
                        },
                      });
                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
              }, _callee2);
            })
          );
          return function handleOpenPageInSitecore() {
            return _ref2.apply(this, arguments);
          };
        })();
        function setupOpenPageInSitecore() {
          document.addEventListener('DOMContentLoaded', function () {
            var cta = document.querySelector('#openInSitecore');
            handleEnableCta(cta);
            cta.addEventListener('click', function () {
              handleOpenPageInSitecore();
            });
          });
        }

        /***/
      },

    /***/ './src/OpenSitecore.js':
      /*!*****************************!*\
  !*** ./src/OpenSitecore.js ***!
  \*****************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupOpenSitecore: () => /* binding */ setupOpenSitecore,
          /* harmony export */
        });
        function setupOpenSitecore() {
          document.querySelector('#openSitecoreProdDli').addEventListener('click', function () {
            window.open(
              'https://editdli.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
          document.querySelector('#openSitecoreProdDlo').addEventListener('click', function () {
            window.open(
              'https://editdlo.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
          document.querySelector('#openSitecoreTown21Dli').addEventListener('click', function () {
            window.open(
              'https://town21editdli.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
          document.querySelector('#openSitecoreTown21Dlo').addEventListener('click', function () {
            window.open(
              'https://town21editdlo.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
          document.querySelector('#openSitecoreDev').addEventListener('click', function () {
            window.open(
              'https://web.develop.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
          document.querySelector('#openSitecoreTrunk').addEventListener('click', function () {
            window.open(
              'https://web.trunk.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
        }

        /***/
      },

    /***/ './src/Settings.js':
      /*!*************************!*\
  !*** ./src/Settings.js ***!
  \*************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupSettings: () => /* binding */ setupSettings,
          /* harmony export */
        });
        var handleDelete = function handleDelete(elName, showSettings, showButtons) {
          var el = document.getElementById(elName);
          if (!el) return;
          if (!showSettings) {
            el.style.display = showButtons[elName] ? 'block' : 'none';
            return;
          }
          if (showSettings) {
            el.classList.toggle('is-danger', !showButtons[elName]);
            el.querySelector('button.delete').addEventListener('click', function (ev) {
              ev.stopPropagation();
              showButtons[elName] = !showButtons[elName];
              chrome.storage.sync.set({
                showButtons: showButtons,
              });
              location.reload();
            });
          }
        };
        var handleHideBlock = function handleHideBlock(elNames, blockEl, showSettings, showButtons) {
          if (showSettings) return;
          var hideBlock = true;
          elNames.forEach(function (elName) {
            if (showButtons[elName]) hideBlock = false;
          });
          if (hideBlock) {
            document.getElementById(blockEl).style.display = 'none';
          }
          return hideBlock;
        };
        function setupSettings() {
          chrome.storage.sync.get('showSettings', function (_ref) {
            var showSettings = _ref.showSettings;
            var content = document.querySelector('.is-ancestor');
            content.classList.toggle('show-settings', showSettings);
            if (showSettings) {
              var disabledButtons = document.querySelectorAll('.button[disabled]');
              disabledButtons.forEach(function (button) {
                button.removeAttribute('disabled');
              });
            }
            document.getElementById('settingsCta').addEventListener('click', function () {
              showSettings = !showSettings;
              chrome.storage.sync.set({
                showSettings: showSettings,
              });
              location.reload();
            });
            chrome.storage.sync.get('showButtons', function (_ref2) {
              var showButtons = _ref2.showButtons;
              var danskeSpilButtons = ['showSitecoreComponents', 'openInSitecore', 'openInExperienceEditor'];
              danskeSpilButtons.forEach(function (button) {
                return handleDelete(button, showSettings, showButtons);
              });
              var hideDanskeSpilButtons = handleHideBlock(
                danskeSpilButtons,
                'danskeSpilButtons',
                showSettings,
                showButtons
              );
              var jiraButtons = [
                'openMyJira',
                'openJiraBoardDli',
                'openJiraBoardDlo',
                'openJiraBoardFOR',
                'makeJiraDli',
                'makeJiraDlo',
                'makeJiraFOR',
                'makeJira',
              ];
              jiraButtons.forEach(function (button) {
                return handleDelete(button, showSettings, showButtons);
              });
              var hideJiraButtons = handleHideBlock(jiraButtons, 'jiraButtons', showSettings, showButtons);
              var sitecoreButtons = [
                'openSitecoreProdDli',
                'openSitecoreProdDlo',
                'openSitecoreTown21Dli',
                'openSitecoreTown21Dlo',
                'openSitecoreDev',
                'openSitecoreTrunk',
              ];
              sitecoreButtons.forEach(function (button) {
                return handleDelete(button, showSettings, showButtons);
              });
              var hideSitecoreButtons = handleHideBlock(sitecoreButtons, 'sitecoreButtons', showSettings, showButtons);
              var hiddenBlocks = [hideDanskeSpilButtons, hideJiraButtons, hideSitecoreButtons].filter(function (value) {
                return value === true;
              }).length;
              var container = document.getElementById('container');
              if (hiddenBlocks === 0) {
                container.style.width = '769px';
              } else {
                container.style.width = '300px';
              }

              // const debug = document.querySelector('#debug');
              // debug.innerHTML = JSON.stringify(hiddenBlocks, null, 2);
            });
          });
        }

        /***/
      },

    /***/ './src/ShowComponents.js':
      /*!*******************************!*\
  !*** ./src/ShowComponents.js ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupShowComponents: () => /* binding */ setupShowComponents,
          /* harmony export */
        });
        /* harmony import */ var _ChromeTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./ChromeTools */ './src/ChromeTools.js'
        );
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

        var handleEnableCta = /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(cta) {
              var _tab$url, _tab$url2;
              var tab;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return (0, _ChromeTools__WEBPACK_IMPORTED_MODULE_0__.getCurrentTab)();
                    case 2:
                      tab = _context.sent;
                      if (
                        tab !== null &&
                        tab !== void 0 &&
                        (_tab$url = tab.url) !== null &&
                        _tab$url !== void 0 &&
                        _tab$url.includes('danskespil.dk') &&
                        !(
                          tab !== null &&
                          tab !== void 0 &&
                          (_tab$url2 = tab.url) !== null &&
                          _tab$url2 !== void 0 &&
                          _tab$url2.includes('/sitecore/')
                        )
                      ) {
                        cta.removeAttribute('disabled');
                      }
                    case 4:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return function handleEnableCta(_x) {
            return _ref.apply(this, arguments);
          };
        })();
        var handleShowComponents = function handleShowComponents() {
          chrome.tabs.query(
            {
              active: true,
              currentWindow: true,
            },
            function (tabs) {
              chrome.scripting.executeScript({
                target: {
                  tabId: tabs[0].id,
                },
                function: function _function() {
                  var dsSC;
                  var nextElShouldBeMarked;
                  var foundName;
                  var foundId;
                  var found = [];
                  var sitecoreUrl;
                  var resizeTimeout;
                  var dsSCExist;

                  // toggle
                  dsSCExist = document.querySelector('#dsSC');
                  if (!!dsSCExist) {
                    dsSCExist.remove();
                    return;
                  }
                  var addStyle = function addStyle() {
                    var style = document.querySelector('#dsSCStyle');
                    if (!!style) style.remove();
                    style = document.createElement('style');
                    style.id = 'dsSCStyle';
                    style.innerText =
                      "\n        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=block');\n        \n        .dsSC__item {\n          cursor: pointer;\n          position: absolute;\n          z-index: 10000000;\n          height: 30px;\n          display: flex;\n          align-items: center;\n          font-size: 10px;\n          font-weight: 500;\n          font-family: 'Montserrat', 'Open Sans', Helvetica, Arial, sans-serif;\n          background: black;\n          color: white;\n          padding: 0 8px 0 10px;\n          box-shadow: 0 0 0 1px #585858;\n          border-radius: 3px;\n          text-decoration: none;\n          line-height: 15px;\n        }\n        \n        .dsSC__item-close {\n          position: relative;\n          width: 30px;\n          height: 30px;\n          background: #222;\n          margin: 0 -8px 0 10px;\n        }\n        \n        .dsSC__item-close::before,\n        .dsSC__item-close::after {\n          position: absolute;\n          top: 14px;\n          left: 10px;\n          content: \"\";\n          width: 10px;\n          height: 2px;\n          background: white;\n          transform: rotate(45deg);\n        }\n        \n        .dsSC__item-close::after {\n          transform: rotate(-45deg);\n        }\n        \n        .dsSC__item-close:hover {\n          background: red;\n        }\n        \n        .dsSC__item img {\n          height: 15px;\n          width: 15px;\n          margin-right: 5px;\n        }\n        \n        .dsSC__target {\n          filter: blur(2px) !important;\n        }\n        \n        .dsSC__toggle {\n          position: fixed;\n          bottom: 5px;\n          right: 5px;\n          background: black;\n          width: 25px;\n          height: 25px;\n          z-index: 1000000000;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          border-radius: 3px;\n          cursor: pointer;\n          opacity: 0.3;\n        }\n        \n        .dsSC__toggle:hover {\n          opacity: 1;\n        }\n        \n        .dsSC__toggle img {\n          height: 15px;\n          width: 15px;\n        }\n        \n        .dsSC--hidden {\n          display: none;\n        }\n        ".replace(
                        /\n/g,
                        ''
                      );
                    document.body.appendChild(style);
                  };
                  var reset = function reset() {
                    dsSCExist = document.querySelector('#dsSC');
                    if (!!dsSCExist) dsSCExist.remove();
                    dsSC = document.createElement('div');
                    dsSC.id = 'dsSC';
                  };
                  var getSitecoreUrl = function getSitecoreUrl() {
                    var dlo = [
                      'alt-eller-intet',
                      'eurojackpot',
                      'keno',
                      'lotto',
                      'vikinglotto',
                      'plus-abonnement',
                      'quick',
                      'spil-sammen',
                      'roed-konto',
                    ];
                    var host = window.location.host
                      .replace(/danskespil\.dk/, '')
                      .toLowerCase()
                      .replace(/\.$/, '');
                    var region = window.location.pathname.replace(/^\//, '').replace(/\/.*$/, '').toLowerCase();
                    var dliOrDlo = dlo.indexOf(region) > -1 ? 'editdlo' : 'editdli';
                    dliOrDlo = host === 'web.develop' || host === 'web.trunk' ? '' : dliOrDlo;
                    sitecoreUrl = 'https://'
                      .concat(host)
                      .concat(dliOrDlo, '.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=');
                  };
                  var checkForId = function checkForId(child) {
                    var nodeValue = child.nodeValue;
                    if (nodeValue.match(/^[^\/].*({.*})/)) {
                      nextElShouldBeMarked = true;
                      foundName = nodeValue.replace(/{.*}/, '').trim();
                      foundId = nodeValue.match(/{.*}/)[0];
                    }
                  };
                  var outputComments = function outputComments(node) {
                    // initialise the child node
                    var child = node.firstChild;
                    var prevPositions = [];

                    // loop while the child node exists
                    while (child) {
                      if (child === document.body.lastChild) {
                        // found.map((item) => console.error(item.name, parseInt(item.top)))
                        document.body.appendChild(dsSC);
                      }

                      // determine the type of the node
                      switch (child.nodeType) {
                        // if the node is an element node, recurse into it
                        case Node.ELEMENT_NODE:
                          if (nextElShouldBeMarked) {
                            var childTopPos = child.getBoundingClientRect().top + 10 + window.scrollY;
                            var childLeftPos = child.getBoundingClientRect().left + 10 + window.scrollX;
                            if (childLeftPos < 10) childLeftPos = 10;
                            var strippedId = 'dsSCId' + foundId.replace('{', '').replace('}', '').toLowerCase();
                            var el = document.createElement('a');
                            el.href = ''.concat(sitecoreUrl).concat(foundId);
                            el.target = 'dsSitecore';
                            el.classList.add('dsSC__item');
                            el.draggable = true;
                            el.setAttribute('dsSCId', strippedId);
                            child.classList.add(strippedId);
                            if (prevPositions.includes(''.concat(childTopPos, ',').concat(childLeftPos))) {
                              childTopPos += 18;
                              childLeftPos += 18;
                            }
                            prevPositions.push(''.concat(childTopPos, ',').concat(childLeftPos));
                            el.style.top = childTopPos + 'px';
                            el.style.left = childLeftPos + 'px';
                            el.innerHTML = ''.concat(
                              foundName
                                .replace(/View$/, '')
                                .split(/(?=[A-Z])/)
                                .join(' ')
                            );
                            var close = document.createElement('span');
                            close.classList.add('dsSC__item-close');
                            el.appendChild(close);
                            close.addEventListener('click', function (ev) {
                              ev.preventDefault();
                              ev.target.parentElement.style.display = 'none';
                            });
                            el.onmouseover = function (ev) {
                              var target = document.querySelector('.'.concat(ev.target.getAttribute('dsSCId')));
                              target && target.classList.add('dsSC__target');
                            };
                            el.onmouseout = function (ev) {
                              var target = document.querySelector('.'.concat(ev.target.getAttribute('dsSCId')));
                              target && target.classList.remove('dsSC__target');
                            };
                            dsSC.appendChild(el);
                            nextElShouldBeMarked = false;
                            found.push({
                              name: foundName,
                              id: foundId,
                              top: childTopPos,
                            });
                          }
                          outputComments(child);
                          break;

                        // if the node is a comment node, output its value
                        case Node.COMMENT_NODE:
                          checkForId(child);
                          break;
                      }

                      // move to the next child node
                      child = child.nextSibling;
                    }
                  };
                  var init = function init() {
                    reset();
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(function () {
                      return outputComments(document.body);
                    }, 200);
                  };
                  addStyle();
                  getSitecoreUrl();
                  init();
                  window.onresize = function () {
                    return init();
                  };
                  window.onscroll = function () {
                    return init();
                  };
                },
              });
            }
          );
        };
        function setupShowComponents() {
          var showComponentsCta = document.querySelector('#showSitecoreComponents');
          handleEnableCta(showComponentsCta);
          showComponentsCta.addEventListener('click', function () {
            handleShowComponents();
          });
        }

        /***/
      },

    /***/ './src/popup/style.scss':
      /*!******************************!*\
  !*** ./src/popup/style.scss ***!
  \******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

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
    /*!****************************!*\
  !*** ./src/popup/popup.js ***!
  \****************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./style.scss */ './src/popup/style.scss'
    );
    /* harmony import */ var _CurrentVersion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurrentVersion */ './src/CurrentVersion.js'
    );
    /* harmony import */ var _OpenSitecore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../OpenSitecore */ './src/OpenSitecore.js'
    );
    /* harmony import */ var _OpenPageInExperienceEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../OpenPageInExperienceEditor */ './src/OpenPageInExperienceEditor.js'
    );
    /* harmony import */ var _OpenPageInSitecore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../OpenPageInSitecore */ './src/OpenPageInSitecore.js'
    );
    /* harmony import */ var _ShowComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ShowComponents */ './src/ShowComponents.js'
    );
    /* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Settings */ './src/Settings.js'
    );

    // import { jiraMakeBranch } from '../JiraMakeBranch';

    (0, _CurrentVersion__WEBPACK_IMPORTED_MODULE_1__.updateVersionButton)();
    // jiraMakeBranch();
    (0, _OpenSitecore__WEBPACK_IMPORTED_MODULE_2__.setupOpenSitecore)();
    (0, _OpenPageInExperienceEditor__WEBPACK_IMPORTED_MODULE_3__.setupOpenPageInExperienceEditor)();
    (0, _OpenPageInSitecore__WEBPACK_IMPORTED_MODULE_4__.setupOpenPageInSitecore)();
    (0, _ShowComponents__WEBPACK_IMPORTED_MODULE_5__.setupShowComponents)();
    (0, _Settings__WEBPACK_IMPORTED_MODULE_6__.setupSettings)();
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQyxJQUFNQyxpQkFBaUIsR0FBRzVJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0VBQzNFWSxlQUFlLENBQUMrSCxpQkFBaUIsQ0FBQztFQUVsQ0EsaUJBQWlCLENBQUNySSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNoRHNFLG9CQUFvQixDQUFDLENBQUM7RUFDeEIsQ0FBQyxDQUFDO0FBQ0o7Ozs7Ozs7Ozs7O0FDL1FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNrQztBQUN4RDtBQUNvRDtBQUM0QjtBQUNoQjtBQUNSO0FBQ1o7QUFFNUN6RixvRUFBbUIsQ0FBQyxDQUFDO0FBQ3JCO0FBQ0F1RCxnRUFBaUIsQ0FBQyxDQUFDO0FBQ25CSCw0RkFBK0IsQ0FBQyxDQUFDO0FBQ2pDRSw0RUFBdUIsQ0FBQyxDQUFDO0FBQ3pCaUcsb0VBQW1CLENBQUMsQ0FBQztBQUNyQjlFLHdEQUFhLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9DaHJvbWVUb29scy5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL0N1cnJlbnRWZXJzaW9uLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvT3BlblBhZ2VJbkV4cGVyaWVuY2VFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9PcGVuUGFnZUluU2l0ZWNvcmUuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9PcGVuU2l0ZWNvcmUuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL1Nob3dDb21wb25lbnRzLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9wb3B1cC9wb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFRhYigpIHtcbiAgbGV0IHF1ZXJ5T3B0aW9ucyA9IHsgYWN0aXZlOiB0cnVlLCBsYXN0Rm9jdXNlZFdpbmRvdzogdHJ1ZSB9O1xuICAvLyBgdGFiYCB3aWxsIGVpdGhlciBiZSBhIGB0YWJzLlRhYmAgaW5zdGFuY2Ugb3IgYHVuZGVmaW5lZGAuXG4gIGxldCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5T3B0aW9ucyk7XG4gIHJldHVybiB0YWI7XG59XG4iLCJjb25zdCBpc1ZlcnNpb25Mb3dlciA9ICh1c2VyVmVyc2lvbiwgbmV3VmVyc2lvbikgPT4ge1xuICBjb25zdCB1c2VyUGFydHMgPSB1c2VyVmVyc2lvbi5zcGxpdCgnLicpLm1hcChOdW1iZXIpO1xuICBjb25zdCBuZXdQYXJ0cyA9IG5ld1ZlcnNpb24uc3BsaXQoJy4nKS5tYXAoTnVtYmVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWF4KHVzZXJQYXJ0cy5sZW5ndGgsIG5ld1BhcnRzLmxlbmd0aCk7IGkrKykge1xuICAgIGNvbnN0IHVzZXJQYXJ0ID0gdXNlclBhcnRzW2ldIHx8IDA7XG4gICAgY29uc3QgbmV3UGFydCA9IG5ld1BhcnRzW2ldIHx8IDA7XG5cbiAgICBpZiAodXNlclBhcnQgPCBuZXdQYXJ0KSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodXNlclBhcnQgPiBuZXdQYXJ0KSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgZ2V0R2l0aHViTGF0ZXN0UmVsZWFzZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZ2l0SHViQXBpVXJsID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvdGVubmlzZmFyL0RTLUNocm9tZS1VZHZpZGVsc2UvcmVsZWFzZXMnO1xuICBjb25zdCBnaXRIdWJSZXNwb25zZSA9IGF3YWl0IGZldGNoKGdpdEh1YkFwaVVybCk7XG4gIGNvbnN0IHJlbGVhc2VzID0gYXdhaXQgZ2l0SHViUmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcmVsZWFzZXNbMF07XG59O1xuXG5jb25zdCBnZXRMb2NhbFZlcnNpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsRGF0YVVybCA9ICcvbWFuaWZlc3QuanNvbic7XG4gIGNvbnN0IGxvY2FsRGF0YVJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobG9jYWxEYXRhVXJsKTtcbiAgY29uc3QgbG9jYWxEYXRhID0gYXdhaXQgbG9jYWxEYXRhUmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gbG9jYWxEYXRhLnZlcnNpb247XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVmVyc2lvbkJ1dHRvbigpIHtcbiAgY29uc3QgdXBkYXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZVN0YXR1cycpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZ2l0aHViTGF0ZXN0UmVsZWFzZSA9IGF3YWl0IGdldEdpdGh1YkxhdGVzdFJlbGVhc2UoKTtcbiAgICBjb25zdCBnaXRodWJWZXJzaW9uID0gZ2l0aHViTGF0ZXN0UmVsZWFzZT8udGFnX25hbWU/LnJlcGxhY2UoJ3YnLCAnJyk7XG4gICAgY29uc3QgbG9jYWxWZXJzaW9uID0gYXdhaXQgZ2V0TG9jYWxWZXJzaW9uKCk7XG4gICAgbGV0IHVybDtcbiAgICBsZXQgbWVzc2FnZTtcblxuICAgIGlmIChpc1ZlcnNpb25Mb3dlcihsb2NhbFZlcnNpb24sIGdpdGh1YlZlcnNpb24pKSB7XG4gICAgICB1cmwgPSBnaXRodWJMYXRlc3RSZWxlYXNlLmh0bWxfdXJsO1xuICAgICAgbWVzc2FnZSA9IGBPcGRhdGVyIHRpbCB2LiAke2dpdGh1YlZlcnNpb259IChkdSBoYXIgJHtsb2NhbFZlcnNpb259KWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vdGVubmlzZmFyL0RTLUNocm9tZS1VZHZpZGVsc2UvcmVsZWFzZXMnO1xuICAgICAgbWVzc2FnZSA9IGBWZXJzaW9uICR7bG9jYWxWZXJzaW9ufWA7XG4gICAgfVxuICAgIHVwZGF0ZURpdi5pbm5lclRleHQgPSBtZXNzYWdlO1xuICAgIHVwZGF0ZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHdpbmRvdy5vcGVuKHVybCkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdXBkYXRlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cbiIsImFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRUYWIoKSB7XG4gIGxldCBxdWVyeU9wdGlvbnMgPSB7IGFjdGl2ZTogdHJ1ZSwgbGFzdEZvY3VzZWRXaW5kb3c6IHRydWUgfTtcbiAgLy8gYHRhYmAgd2lsbCBlaXRoZXIgYmUgYSBgdGFicy5UYWJgIGluc3RhbmNlIG9yIGB1bmRlZmluZWRgLlxuICBsZXQgW3RhYl0gPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeShxdWVyeU9wdGlvbnMpO1xuICByZXR1cm4gdGFiO1xufVxuXG5jb25zdCBoYW5kbGVFbmFibGVDdGEgPSBhc3luYyAoY3RhKSA9PiB7XG4gIGNvbnN0IHRhYiA9IGF3YWl0IGdldEN1cnJlbnRUYWIoKTtcblxuICBpZiAodGFiPy51cmw/LmluY2x1ZGVzKCdkYW5za2VzcGlsLmRrJykgJiYgIXRhYj8udXJsPy5pbmNsdWRlcygnL3NpdGVjb3JlLycpKSB7XG4gICAgY3RhLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlT3BlblBhZ2VJbkV4cGVyaWVuY2VFZGl0b3IgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRhYiA9IGF3YWl0IGdldEN1cnJlbnRUYWIoKTtcblxuICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgIHRhcmdldDogeyB0YWJJZDogdGFiLmlkIH0sXG4gICAgZnVuY3Rpb246ICgpID0+IHtcbiAgICAgIGxldCBzaXRlY29yZUlkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncGFnZV9pZCcpO1xuICAgICAgbGV0IGxvID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICAgIGxldCBjbCA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0O1xuICAgICAgbGV0IGlzRGxvID0gY2wuY29udGFpbnMoJ2RsbycpO1xuICAgICAgbGV0IGlzRGxpID0gY2wuY29udGFpbnMoJ2RsaScpO1xuICAgICAgbGV0IHJlZyA9IGlzRGxpID8gJ2RsaScgOiAnZGxvJztcblxuICAgICAgaWYgKGxvLmluY2x1ZGVzKCd0b3duJykpIGxvID0gbG8ucmVwbGFjZSgnLmRhbicsICdlZGl0JyArIHJlZyArICcuZGFuJyk7XG4gICAgICBpZiAobG8uaW5jbHVkZXMoJy8vZGEnKSkgbG8gPSBsby5yZXBsYWNlKCcvL2RhbicsICcvL2VkaXQnICsgcmVnICsgJy5kYW4nKTtcblxuICAgICAgbG8gKz0gJy8/c2NfbW9kZT1lZGl0JztcblxuICAgICAgd2luZG93Lm9wZW4oYCR7bG99JnNjX2l0ZW1pZD0ke3NpdGVjb3JlSWR9YCwgJ19ibGFuaycpO1xuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwT3BlblBhZ2VJbkV4cGVyaWVuY2VFZGl0b3IoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW5JbkV4cGVyaWVuY2VFZGl0b3InKTtcbiAgICBoYW5kbGVFbmFibGVDdGEoY3RhKTtcblxuICAgIGN0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGhhbmRsZU9wZW5QYWdlSW5FeHBlcmllbmNlRWRpdG9yKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFRhYigpIHtcbiAgbGV0IHF1ZXJ5T3B0aW9ucyA9IHsgYWN0aXZlOiB0cnVlLCBsYXN0Rm9jdXNlZFdpbmRvdzogdHJ1ZSB9O1xuICAvLyBgdGFiYCB3aWxsIGVpdGhlciBiZSBhIGB0YWJzLlRhYmAgaW5zdGFuY2Ugb3IgYHVuZGVmaW5lZGAuXG4gIGxldCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5T3B0aW9ucyk7XG4gIHJldHVybiB0YWI7XG59XG5cbmNvbnN0IGhhbmRsZUVuYWJsZUN0YSA9IGFzeW5jIChjdGEpID0+IHtcbiAgY29uc3QgdGFiID0gYXdhaXQgZ2V0Q3VycmVudFRhYigpO1xuXG4gIGlmICh0YWI/LnVybD8uaW5jbHVkZXMoJ2RhbnNrZXNwaWwuZGsnKSAmJiAhdGFiPy51cmw/LmluY2x1ZGVzKCcvc2l0ZWNvcmUvJykpIHtcbiAgICBjdGEucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVPcGVuUGFnZUluU2l0ZWNvcmUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRhYiA9IGF3YWl0IGdldEN1cnJlbnRUYWIoKTtcblxuICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgIHRhcmdldDogeyB0YWJJZDogdGFiLmlkIH0sXG4gICAgZnVuY3Rpb246ICgpID0+IHtcbiAgICAgIGxldCBzaXRlY29yZUlkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncGFnZV9pZCcpO1xuICAgICAgbGV0IGxvID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICAgIGxldCBjbCA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0O1xuICAgICAgbGV0IGlzRGxvID0gY2wuY29udGFpbnMoJ2RsbycpO1xuICAgICAgbGV0IGlzRGxpID0gY2wuY29udGFpbnMoJ2RsaScpO1xuICAgICAgbGV0IHJlZyA9IGlzRGxpID8gJ2RsaScgOiAnZGxvJztcblxuICAgICAgaWYgKGxvLmluY2x1ZGVzKCd0b3duJykpIGxvID0gbG8ucmVwbGFjZSgnLmRhbicsICdlZGl0JyArIHJlZyArICcuZGFuJyk7XG4gICAgICBpZiAobG8uaW5jbHVkZXMoJy8vZGEnKSkgbG8gPSBsby5yZXBsYWNlKCcvL2RhbicsICcvL2VkaXQnICsgcmVnICsgJy5kYW4nKTtcblxuICAgICAgbG8gKz0gJy9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4P3NjX2J3PTEnO1xuXG4gICAgICB3aW5kb3cub3BlbihgJHtsb30mZm89JHtzaXRlY29yZUlkfWAsICdfYmxhbmsnKTtcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cE9wZW5QYWdlSW5TaXRlY29yZSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BlbkluU2l0ZWNvcmUnKTtcbiAgICBoYW5kbGVFbmFibGVDdGEoY3RhKTtcblxuICAgIGN0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGhhbmRsZU9wZW5QYWdlSW5TaXRlY29yZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZXR1cE9wZW5TaXRlY29yZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW5TaXRlY29yZVByb2REbGknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbihcbiAgICAgICdodHRwczovL2VkaXRkbGkuZGFuc2tlc3BpbC5kay9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4P3NjX2J3PTEmZm89L3NpdGVjb3JlL2NvbnRlbnQvRGFuc2tlU3BpbC9ob21lJ1xuICAgICk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuU2l0ZWNvcmVQcm9kRGxvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oXG4gICAgICAnaHR0cHM6Ly9lZGl0ZGxvLmRhbnNrZXNwaWwuZGsvc2l0ZWNvcmUvc2hlbGwvQXBwbGljYXRpb25zL0NvbnRlbnQlMjBFZGl0b3IuYXNweD9zY19idz0xJmZvPS9zaXRlY29yZS9jb250ZW50L0RhbnNrZVNwaWwvaG9tZSdcbiAgICApO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BlblNpdGVjb3JlVG93bjIxRGxpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oXG4gICAgICAnaHR0cHM6Ly90b3duMjFlZGl0ZGxpLmRhbnNrZXNwaWwuZGsvc2l0ZWNvcmUvc2hlbGwvQXBwbGljYXRpb25zL0NvbnRlbnQlMjBFZGl0b3IuYXNweD9zY19idz0xJmZvPS9zaXRlY29yZS9jb250ZW50L0RhbnNrZVNwaWwvaG9tZSdcbiAgICApO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BlblNpdGVjb3JlVG93bjIxRGxvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oXG4gICAgICAnaHR0cHM6Ly90b3duMjFlZGl0ZGxvLmRhbnNrZXNwaWwuZGsvc2l0ZWNvcmUvc2hlbGwvQXBwbGljYXRpb25zL0NvbnRlbnQlMjBFZGl0b3IuYXNweD9zY19idz0xJmZvPS9zaXRlY29yZS9jb250ZW50L0RhbnNrZVNwaWwvaG9tZSdcbiAgICApO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BlblNpdGVjb3JlRGV2JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oXG4gICAgICAnaHR0cHM6Ly93ZWIuZGV2ZWxvcC5kYW5za2VzcGlsLmRrL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50JTIwRWRpdG9yLmFzcHg/c2NfYnc9MSZmbz0vc2l0ZWNvcmUvY29udGVudC9EYW5za2VTcGlsL2hvbWUnXG4gICAgKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW5TaXRlY29yZVRydW5rJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oXG4gICAgICAnaHR0cHM6Ly93ZWIudHJ1bmsuZGFuc2tlc3BpbC5kay9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4P3NjX2J3PTEmZm89L3NpdGVjb3JlL2NvbnRlbnQvRGFuc2tlU3BpbC9ob21lJ1xuICAgICk7XG4gIH0pO1xufVxuIiwiY29uc3QgaGFuZGxlRGVsZXRlID0gKGVsTmFtZSwgc2hvd1NldHRpbmdzLCBzaG93QnV0dG9ucykgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsTmFtZSk7XG5cbiAgaWYgKCFlbCkgcmV0dXJuO1xuXG4gIGlmICghc2hvd1NldHRpbmdzKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IHNob3dCdXR0b25zW2VsTmFtZV0gPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzaG93U2V0dGluZ3MpIHtcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1kYW5nZXInLCAhc2hvd0J1dHRvbnNbZWxOYW1lXSk7XG5cbiAgICBlbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uZGVsZXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgc2hvd0J1dHRvbnNbZWxOYW1lXSA9ICFzaG93QnV0dG9uc1tlbE5hbWVdO1xuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBzaG93QnV0dG9ucyB9KTtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVIaWRlQmxvY2sgPSAoZWxOYW1lcywgYmxvY2tFbCwgc2hvd1NldHRpbmdzLCBzaG93QnV0dG9ucykgPT4ge1xuICBpZiAoc2hvd1NldHRpbmdzKSByZXR1cm47XG4gIGxldCBoaWRlQmxvY2sgPSB0cnVlO1xuXG4gIGVsTmFtZXMuZm9yRWFjaCgoZWxOYW1lKSA9PiB7XG4gICAgaWYgKHNob3dCdXR0b25zW2VsTmFtZV0pIGhpZGVCbG9jayA9IGZhbHNlO1xuICB9KTtcblxuICBpZiAoaGlkZUJsb2NrKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmxvY2tFbCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIHJldHVybiBoaWRlQmxvY2s7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTZXR0aW5ncygpIHtcbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ3Nob3dTZXR0aW5ncycsICh7IHNob3dTZXR0aW5ncyB9KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pcy1hbmNlc3RvcicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1zZXR0aW5ncycsIHNob3dTZXR0aW5ncyk7XG5cbiAgICBpZiAoc2hvd1NldHRpbmdzKSB7XG4gICAgICBjb25zdCBkaXNhYmxlZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uW2Rpc2FibGVkXScpO1xuICAgICAgZGlzYWJsZWRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzQ3RhJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzaG93U2V0dGluZ3MgPSAhc2hvd1NldHRpbmdzO1xuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBzaG93U2V0dGluZ3MgfSk7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdzaG93QnV0dG9ucycsICh7IHNob3dCdXR0b25zIH0pID0+IHtcbiAgICAgIGNvbnN0IGRhbnNrZVNwaWxCdXR0b25zID0gWydzaG93U2l0ZWNvcmVDb21wb25lbnRzJywgJ29wZW5JblNpdGVjb3JlJywgJ29wZW5JbkV4cGVyaWVuY2VFZGl0b3InXTtcbiAgICAgIGRhbnNrZVNwaWxCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gaGFuZGxlRGVsZXRlKGJ1dHRvbiwgc2hvd1NldHRpbmdzLCBzaG93QnV0dG9ucykpO1xuICAgICAgY29uc3QgaGlkZURhbnNrZVNwaWxCdXR0b25zID0gaGFuZGxlSGlkZUJsb2NrKGRhbnNrZVNwaWxCdXR0b25zLCAnZGFuc2tlU3BpbEJ1dHRvbnMnLCBzaG93U2V0dGluZ3MsIHNob3dCdXR0b25zKTtcblxuICAgICAgY29uc3QgamlyYUJ1dHRvbnMgPSBbXG4gICAgICAgICdvcGVuTXlKaXJhJyxcbiAgICAgICAgJ29wZW5KaXJhQm9hcmREbGknLFxuICAgICAgICAnb3BlbkppcmFCb2FyZERsbycsXG4gICAgICAgICdvcGVuSmlyYUJvYXJkRk9SJyxcbiAgICAgICAgJ21ha2VKaXJhRGxpJyxcbiAgICAgICAgJ21ha2VKaXJhRGxvJyxcbiAgICAgICAgJ21ha2VKaXJhRk9SJyxcbiAgICAgICAgJ21ha2VKaXJhJyxcbiAgICAgIF07XG4gICAgICBqaXJhQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGhhbmRsZURlbGV0ZShidXR0b24sIHNob3dTZXR0aW5ncywgc2hvd0J1dHRvbnMpKTtcbiAgICAgIGNvbnN0IGhpZGVKaXJhQnV0dG9ucyA9IGhhbmRsZUhpZGVCbG9jayhqaXJhQnV0dG9ucywgJ2ppcmFCdXR0b25zJywgc2hvd1NldHRpbmdzLCBzaG93QnV0dG9ucyk7XG5cbiAgICAgIGNvbnN0IHNpdGVjb3JlQnV0dG9ucyA9IFtcbiAgICAgICAgJ29wZW5TaXRlY29yZVByb2REbGknLFxuICAgICAgICAnb3BlblNpdGVjb3JlUHJvZERsbycsXG4gICAgICAgICdvcGVuU2l0ZWNvcmVUb3duMjFEbGknLFxuICAgICAgICAnb3BlblNpdGVjb3JlVG93bjIxRGxvJyxcbiAgICAgICAgJ29wZW5TaXRlY29yZURldicsXG4gICAgICAgICdvcGVuU2l0ZWNvcmVUcnVuaycsXG4gICAgICBdO1xuICAgICAgc2l0ZWNvcmVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gaGFuZGxlRGVsZXRlKGJ1dHRvbiwgc2hvd1NldHRpbmdzLCBzaG93QnV0dG9ucykpO1xuICAgICAgY29uc3QgaGlkZVNpdGVjb3JlQnV0dG9ucyA9IGhhbmRsZUhpZGVCbG9jayhzaXRlY29yZUJ1dHRvbnMsICdzaXRlY29yZUJ1dHRvbnMnLCBzaG93U2V0dGluZ3MsIHNob3dCdXR0b25zKTtcblxuICAgICAgY29uc3QgaGlkZGVuQmxvY2tzID0gW2hpZGVEYW5za2VTcGlsQnV0dG9ucywgaGlkZUppcmFCdXR0b25zLCBoaWRlU2l0ZWNvcmVCdXR0b25zXS5maWx0ZXIoXG4gICAgICAgICh2YWx1ZSkgPT4gdmFsdWUgPT09IHRydWVcbiAgICAgICkubGVuZ3RoO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgICBpZiAoaGlkZGVuQmxvY2tzID09PSAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICc3NjlweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnMzAwcHgnO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCBkZWJ1ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWJ1ZycpO1xuICAgICAgLy8gZGVidWcuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoaGlkZGVuQmxvY2tzLCBudWxsLCAyKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBnZXRDdXJyZW50VGFiIH0gZnJvbSAnLi9DaHJvbWVUb29scyc7XG5cbmNvbnN0IGhhbmRsZUVuYWJsZUN0YSA9IGFzeW5jIChjdGEpID0+IHtcbiAgY29uc3QgdGFiID0gYXdhaXQgZ2V0Q3VycmVudFRhYigpO1xuXG4gIGlmICh0YWI/LnVybD8uaW5jbHVkZXMoJ2RhbnNrZXNwaWwuZGsnKSAmJiAhdGFiPy51cmw/LmluY2x1ZGVzKCcvc2l0ZWNvcmUvJykpIHtcbiAgICBjdGEucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVTaG93Q29tcG9uZW50cyA9ICgpID0+IHtcbiAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpID0+IHtcbiAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJzWzBdLmlkIH0sXG4gICAgICBmdW5jdGlvbjogKCkgPT4ge1xuICAgICAgICBsZXQgZHNTQztcbiAgICAgICAgbGV0IG5leHRFbFNob3VsZEJlTWFya2VkO1xuICAgICAgICBsZXQgZm91bmROYW1lO1xuICAgICAgICBsZXQgZm91bmRJZDtcbiAgICAgICAgbGV0IGZvdW5kID0gW107XG4gICAgICAgIGxldCBzaXRlY29yZVVybDtcbiAgICAgICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG4gICAgICAgIGxldCBkc1NDRXhpc3Q7XG5cbiAgICAgICAgLy8gdG9nZ2xlXG4gICAgICAgIGRzU0NFeGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkc1NDJyk7XG4gICAgICAgIGlmICghIWRzU0NFeGlzdCkge1xuICAgICAgICAgIGRzU0NFeGlzdC5yZW1vdmUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRTdHlsZSA9ICgpID0+IHtcbiAgICAgICAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHNTQ1N0eWxlJyk7XG4gICAgICAgICAgaWYgKCEhc3R5bGUpIHN0eWxlLnJlbW92ZSgpO1xuICAgICAgICAgIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzdHlsZS5pZCA9ICdkc1NDU3R5bGUnO1xuICAgICAgICAgIHN0eWxlLmlubmVyVGV4dCA9IGBcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMCZkaXNwbGF5PWJsb2NrJyk7XG4gICAgICAgIFxuICAgICAgICAuZHNTQ19faXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdPcGVuIFNhbnMnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweCAwIDEwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICM1ODU4NTg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRzU0NfX2l0ZW0tY2xvc2Uge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICAgICAgICBtYXJnaW46IDAgLThweCAwIDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kc1NDX19pdGVtLWNsb3NlOjpiZWZvcmUsXG4gICAgICAgIC5kc1NDX19pdGVtLWNsb3NlOjphZnRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTRweDtcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZHNTQ19faXRlbS1jbG9zZTo6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kc1NDX19pdGVtLWNsb3NlOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kc1NDX19pdGVtIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZHNTQ19fdGFyZ2V0IHtcbiAgICAgICAgICBmaWx0ZXI6IGJsdXIoMnB4KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZHNTQ19fdG9nZ2xlIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgei1pbmRleDogMTAwMDAwMDAwMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kc1NDX190b2dnbGU6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kc1NDX190b2dnbGUgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kc1NDLS1oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYC5yZXBsYWNlKC9cXG4vZywgJycpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICAgIGRzU0NFeGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkc1NDJyk7XG4gICAgICAgICAgaWYgKCEhZHNTQ0V4aXN0KSBkc1NDRXhpc3QucmVtb3ZlKCk7XG4gICAgICAgICAgZHNTQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRzU0MuaWQgPSAnZHNTQyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZ2V0U2l0ZWNvcmVVcmwgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGxvID0gW1xuICAgICAgICAgICAgJ2FsdC1lbGxlci1pbnRldCcsXG4gICAgICAgICAgICAnZXVyb2phY2twb3QnLFxuICAgICAgICAgICAgJ2tlbm8nLFxuICAgICAgICAgICAgJ2xvdHRvJyxcbiAgICAgICAgICAgICd2aWtpbmdsb3R0bycsXG4gICAgICAgICAgICAncGx1cy1hYm9ubmVtZW50JyxcbiAgICAgICAgICAgICdxdWljaycsXG4gICAgICAgICAgICAnc3BpbC1zYW1tZW4nLFxuICAgICAgICAgICAgJ3JvZWQta29udG8nLFxuICAgICAgICAgIF07XG4gICAgICAgICAgY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0XG4gICAgICAgICAgICAucmVwbGFjZSgvZGFuc2tlc3BpbFxcLmRrLywgJycpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLiQvLCAnJyk7XG4gICAgICAgICAgY29uc3QgcmVnaW9uID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykucmVwbGFjZSgvXFwvLiokLywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgbGV0IGRsaU9yRGxvID0gZGxvLmluZGV4T2YocmVnaW9uKSA+IC0xID8gJ2VkaXRkbG8nIDogJ2VkaXRkbGknO1xuICAgICAgICAgIGRsaU9yRGxvID0gaG9zdCA9PT0gJ3dlYi5kZXZlbG9wJyB8fCBob3N0ID09PSAnd2ViLnRydW5rJyA/ICcnIDogZGxpT3JEbG87XG4gICAgICAgICAgc2l0ZWNvcmVVcmwgPSBgaHR0cHM6Ly8ke2hvc3R9JHtkbGlPckRsb30uZGFuc2tlc3BpbC5kay9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4P3NjX2J3PTEmZm89YDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjaGVja0ZvcklkID0gKGNoaWxkKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZVZhbHVlID0gY2hpbGQubm9kZVZhbHVlO1xuICAgICAgICAgIGlmIChub2RlVmFsdWUubWF0Y2goL15bXlxcL10uKih7Lip9KS8pKSB7XG4gICAgICAgICAgICBuZXh0RWxTaG91bGRCZU1hcmtlZCA9IHRydWU7XG4gICAgICAgICAgICBmb3VuZE5hbWUgPSBub2RlVmFsdWUucmVwbGFjZSgvey4qfS8sICcnKS50cmltKCk7XG4gICAgICAgICAgICBmb3VuZElkID0gbm9kZVZhbHVlLm1hdGNoKC97Lip9LylbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG91dHB1dENvbW1lbnRzID0gKG5vZGUpID0+IHtcbiAgICAgICAgICAvLyBpbml0aWFsaXNlIHRoZSBjaGlsZCBub2RlXG4gICAgICAgICAgbGV0IGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICAgIGNvbnN0IHByZXZQb3NpdGlvbnMgPSBbXTtcblxuICAgICAgICAgIC8vIGxvb3Agd2hpbGUgdGhlIGNoaWxkIG5vZGUgZXhpc3RzXG4gICAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQgPT09IGRvY3VtZW50LmJvZHkubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgIC8vIGZvdW5kLm1hcCgoaXRlbSkgPT4gY29uc29sZS5lcnJvcihpdGVtLm5hbWUsIHBhcnNlSW50KGl0ZW0udG9wKSkpXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHNTQyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRldGVybWluZSB0aGUgdHlwZSBvZiB0aGUgbm9kZVxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAvLyBpZiB0aGUgbm9kZSBpcyBhbiBlbGVtZW50IG5vZGUsIHJlY3Vyc2UgaW50byBpdFxuICAgICAgICAgICAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOlxuICAgICAgICAgICAgICAgIGlmIChuZXh0RWxTaG91bGRCZU1hcmtlZCkge1xuICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkVG9wUG9zID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgMTAgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgICAgICAgICAgIGxldCBjaGlsZExlZnRQb3MgPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgMTAgKyB3aW5kb3cuc2Nyb2xsWDtcblxuICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTGVmdFBvcyA8IDEwKSBjaGlsZExlZnRQb3MgPSAxMDtcblxuICAgICAgICAgICAgICAgICAgbGV0IHN0cmlwcGVkSWQgPSAnZHNTQ0lkJyArIGZvdW5kSWQucmVwbGFjZSgneycsICcnKS5yZXBsYWNlKCd9JywgJycpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgIGVsLmhyZWYgPSBgJHtzaXRlY29yZVVybH0ke2ZvdW5kSWR9YDtcbiAgICAgICAgICAgICAgICAgIGVsLnRhcmdldCA9ICdkc1NpdGVjb3JlJztcbiAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RzU0NfX2l0ZW0nKTtcbiAgICAgICAgICAgICAgICAgIGVsLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RzU0NJZCcsIHN0cmlwcGVkSWQpO1xuICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChzdHJpcHBlZElkKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHByZXZQb3NpdGlvbnMuaW5jbHVkZXMoYCR7Y2hpbGRUb3BQb3N9LCR7Y2hpbGRMZWZ0UG9zfWApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVG9wUG9zICs9IDE4O1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExlZnRQb3MgKz0gMTg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwcmV2UG9zaXRpb25zLnB1c2goYCR7Y2hpbGRUb3BQb3N9LCR7Y2hpbGRMZWZ0UG9zfWApO1xuXG4gICAgICAgICAgICAgICAgICBlbC5zdHlsZS50b3AgPSBjaGlsZFRvcFBvcyArICdweCc7XG4gICAgICAgICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gY2hpbGRMZWZ0UG9zICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGAke2ZvdW5kTmFtZVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvVmlldyQvLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KC8oPz1bQS1aXSkvKVxuICAgICAgICAgICAgICAgICAgICAuam9pbignICcpfWA7XG5cbiAgICAgICAgICAgICAgICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2RzU0NfX2l0ZW0tY2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICAgICAgICAgICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgZWwub25tb3VzZW92ZXIgPSAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZXYudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZHNTQ0lkJyl9YCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCAmJiB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHNTQ19fdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgZWwub25tb3VzZW91dCA9IChldikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtldi50YXJnZXQuZ2V0QXR0cmlidXRlKCdkc1NDSWQnKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ICYmIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkc1NDX190YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIGRzU0MuYXBwZW5kQ2hpbGQoZWwpO1xuXG4gICAgICAgICAgICAgICAgICBuZXh0RWxTaG91bGRCZU1hcmtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgZm91bmQucHVzaCh7IG5hbWU6IGZvdW5kTmFtZSwgaWQ6IGZvdW5kSWQsIHRvcDogY2hpbGRUb3BQb3MgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dHB1dENvbW1lbnRzKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAvLyBpZiB0aGUgbm9kZSBpcyBhIGNvbW1lbnQgbm9kZSwgb3V0cHV0IGl0cyB2YWx1ZVxuICAgICAgICAgICAgICBjYXNlIE5vZGUuQ09NTUVOVF9OT0RFOlxuICAgICAgICAgICAgICAgIGNoZWNrRm9ySWQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtb3ZlIHRvIHRoZSBuZXh0IGNoaWxkIG5vZGVcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gb3V0cHV0Q29tbWVudHMoZG9jdW1lbnQuYm9keSksIDIwMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkU3R5bGUoKTtcbiAgICAgICAgZ2V0U2l0ZWNvcmVVcmwoKTtcblxuICAgICAgICBpbml0KCk7XG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IGluaXQoKTtcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4gaW5pdCgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTaG93Q29tcG9uZW50cygpIHtcbiAgY29uc3Qgc2hvd0NvbXBvbmVudHNDdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvd1NpdGVjb3JlQ29tcG9uZW50cycpO1xuICBoYW5kbGVFbmFibGVDdGEoc2hvd0NvbXBvbmVudHNDdGEpO1xuXG4gIHNob3dDb21wb25lbnRzQ3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhhbmRsZVNob3dDb21wb25lbnRzKCk7XG4gIH0pO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyB1cGRhdGVWZXJzaW9uQnV0dG9uIH0gZnJvbSAnLi4vQ3VycmVudFZlcnNpb24nO1xuLy8gaW1wb3J0IHsgamlyYU1ha2VCcmFuY2ggfSBmcm9tICcuLi9KaXJhTWFrZUJyYW5jaCc7XG5pbXBvcnQgeyBzZXR1cE9wZW5TaXRlY29yZSB9IGZyb20gJy4uL09wZW5TaXRlY29yZSc7XG5pbXBvcnQgeyBzZXR1cE9wZW5QYWdlSW5FeHBlcmllbmNlRWRpdG9yIH0gZnJvbSAnLi4vT3BlblBhZ2VJbkV4cGVyaWVuY2VFZGl0b3InO1xuaW1wb3J0IHsgc2V0dXBPcGVuUGFnZUluU2l0ZWNvcmUgfSBmcm9tICcuLi9PcGVuUGFnZUluU2l0ZWNvcmUnO1xuaW1wb3J0IHsgc2V0dXBTaG93Q29tcG9uZW50cyB9IGZyb20gJy4uL1Nob3dDb21wb25lbnRzJztcbmltcG9ydCB7IHNldHVwU2V0dGluZ3MgfSBmcm9tICcuLi9TZXR0aW5ncyc7XG5cbnVwZGF0ZVZlcnNpb25CdXR0b24oKTtcbi8vIGppcmFNYWtlQnJhbmNoKCk7XG5zZXR1cE9wZW5TaXRlY29yZSgpO1xuc2V0dXBPcGVuUGFnZUluRXhwZXJpZW5jZUVkaXRvcigpO1xuc2V0dXBPcGVuUGFnZUluU2l0ZWNvcmUoKTtcbnNldHVwU2hvd0NvbXBvbmVudHMoKTtcbnNldHVwU2V0dGluZ3MoKTtcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiaXNBcnJheSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJnZXRDdXJyZW50VGFiIiwiX2dldEN1cnJlbnRUYWIiLCJfY2FsbGVlIiwicXVlcnlPcHRpb25zIiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1IiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1MiIsInRhYiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJhY3RpdmUiLCJsYXN0Rm9jdXNlZFdpbmRvdyIsImNocm9tZSIsInRhYnMiLCJxdWVyeSIsImlzVmVyc2lvbkxvd2VyIiwidXNlclZlcnNpb24iLCJuZXdWZXJzaW9uIiwidXNlclBhcnRzIiwic3BsaXQiLCJtYXAiLCJOdW1iZXIiLCJuZXdQYXJ0cyIsIk1hdGgiLCJtYXgiLCJ1c2VyUGFydCIsIm5ld1BhcnQiLCJnZXRHaXRodWJMYXRlc3RSZWxlYXNlIiwiX3JlZiIsImdpdEh1YkFwaVVybCIsImdpdEh1YlJlc3BvbnNlIiwicmVsZWFzZXMiLCJmZXRjaCIsImpzb24iLCJnZXRMb2NhbFZlcnNpb24iLCJfcmVmMiIsIl9jYWxsZWUyIiwibG9jYWxEYXRhVXJsIiwibG9jYWxEYXRhUmVzcG9uc2UiLCJsb2NhbERhdGEiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ2ZXJzaW9uIiwidXBkYXRlVmVyc2lvbkJ1dHRvbiIsIl91cGRhdGVWZXJzaW9uQnV0dG9uIiwiX2NhbGxlZTMiLCJ1cGRhdGVEaXYiLCJfZ2l0aHViTGF0ZXN0UmVsZWFzZSQiLCJnaXRodWJMYXRlc3RSZWxlYXNlIiwiZ2l0aHViVmVyc2lvbiIsImxvY2FsVmVyc2lvbiIsInVybCIsIm1lc3NhZ2UiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YWdfbmFtZSIsInJlcGxhY2UiLCJodG1sX3VybCIsImNvbmNhdCIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJvcGVuIiwidDAiLCJzdHlsZSIsImRpc3BsYXkiLCJoYW5kbGVFbmFibGVDdGEiLCJjdGEiLCJfdGFiJHVybCIsIl90YWIkdXJsMiIsImluY2x1ZGVzIiwicmVtb3ZlQXR0cmlidXRlIiwiX3giLCJoYW5kbGVPcGVuUGFnZUluRXhwZXJpZW5jZUVkaXRvciIsInNjcmlwdGluZyIsImV4ZWN1dGVTY3JpcHQiLCJ0YXJnZXQiLCJ0YWJJZCIsImlkIiwiX2Z1bmN0aW9uIiwic2l0ZWNvcmVJZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImxvIiwibG9jYXRpb24iLCJvcmlnaW4iLCJjbCIsImJvZHkiLCJjbGFzc0xpc3QiLCJpc0RsbyIsImNvbnRhaW5zIiwiaXNEbGkiLCJyZWciLCJzZXR1cE9wZW5QYWdlSW5FeHBlcmllbmNlRWRpdG9yIiwiaGFuZGxlT3BlblBhZ2VJblNpdGVjb3JlIiwic2V0dXBPcGVuUGFnZUluU2l0ZWNvcmUiLCJzZXR1cE9wZW5TaXRlY29yZSIsImhhbmRsZURlbGV0ZSIsImVsTmFtZSIsInNob3dTZXR0aW5ncyIsInNob3dCdXR0b25zIiwiZWwiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZSIsImV2Iiwic3RvcFByb3BhZ2F0aW9uIiwic3RvcmFnZSIsInN5bmMiLCJzZXQiLCJyZWxvYWQiLCJoYW5kbGVIaWRlQmxvY2siLCJlbE5hbWVzIiwiYmxvY2tFbCIsImhpZGVCbG9jayIsInNldHVwU2V0dGluZ3MiLCJnZXQiLCJjb250ZW50IiwiZGlzYWJsZWRCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsImRhbnNrZVNwaWxCdXR0b25zIiwiaGlkZURhbnNrZVNwaWxCdXR0b25zIiwiamlyYUJ1dHRvbnMiLCJoaWRlSmlyYUJ1dHRvbnMiLCJzaXRlY29yZUJ1dHRvbnMiLCJoaWRlU2l0ZWNvcmVCdXR0b25zIiwiaGlkZGVuQmxvY2tzIiwiZmlsdGVyIiwiY29udGFpbmVyIiwid2lkdGgiLCJoYW5kbGVTaG93Q29tcG9uZW50cyIsImN1cnJlbnRXaW5kb3ciLCJkc1NDIiwibmV4dEVsU2hvdWxkQmVNYXJrZWQiLCJmb3VuZE5hbWUiLCJmb3VuZElkIiwiZm91bmQiLCJzaXRlY29yZVVybCIsInJlc2l6ZVRpbWVvdXQiLCJkc1NDRXhpc3QiLCJyZW1vdmUiLCJhZGRTdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImdldFNpdGVjb3JlVXJsIiwiZGxvIiwiaG9zdCIsInRvTG93ZXJDYXNlIiwicmVnaW9uIiwicGF0aG5hbWUiLCJkbGlPckRsbyIsImluZGV4T2YiLCJjaGVja0ZvcklkIiwiY2hpbGQiLCJub2RlVmFsdWUiLCJtYXRjaCIsInRyaW0iLCJvdXRwdXRDb21tZW50cyIsIm5vZGUiLCJmaXJzdENoaWxkIiwicHJldlBvc2l0aW9ucyIsImxhc3RDaGlsZCIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImNoaWxkVG9wUG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImNoaWxkTGVmdFBvcyIsImxlZnQiLCJzY3JvbGxYIiwic3RyaXBwZWRJZCIsImhyZWYiLCJhZGQiLCJkcmFnZ2FibGUiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJqb2luIiwiY2xvc2UiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudEVsZW1lbnQiLCJvbm1vdXNlb3ZlciIsImdldEF0dHJpYnV0ZSIsIm9ubW91c2VvdXQiLCJDT01NRU5UX05PREUiLCJuZXh0U2libGluZyIsImluaXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwib25yZXNpemUiLCJvbnNjcm9sbCIsInNldHVwU2hvd0NvbXBvbmVudHMiLCJzaG93Q29tcG9uZW50c0N0YSJdLCJzb3VyY2VSb290IjoiIn0=
