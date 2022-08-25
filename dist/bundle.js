/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  'use strict';
  var t = {
      916: (t, e, n) => {
        var r = n(294),
          i = n(935),
          o = n(688),
          a = n(798);
        let s = function (t) {
          t();
        };
        const l = () => s,
          u = r.createContext(null);
        function c() {
          return (0, r.useContext)(u);
        }
        let d = () => {
          throw new Error('uSES not initialized!');
        };
        const h = (t, e) => t === e;
        function f(t = u) {
          const e = t === u ? c : () => (0, r.useContext)(t);
          return function (t, n = h) {
            const { store: i, subscription: o, getServerState: a } = e(),
              s = d(o.addNestedSub, i.getState, a || i.getState, t, n);
            return (0, r.useDebugValue)(s), s;
          };
        }
        const p = f();
        n(679), n(973);
        const g = { notify() {}, get: () => [] };
        const m =
          'undefined' != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
            ? r.useLayoutEffect
            : r.useEffect;
        let b = null;
        const y = function ({
          store: t,
          context: e,
          children: n,
          serverState: i,
        }) {
          const o = (0, r.useMemo)(() => {
              const e = (function (t, e) {
                let n,
                  r = g;
                function i() {
                  a.onStateChange && a.onStateChange();
                }
                function o() {
                  n ||
                    ((n = e ? e.addNestedSub(i) : t.subscribe(i)),
                    (r = (function () {
                      const t = l();
                      let e = null,
                        n = null;
                      return {
                        clear() {
                          (e = null), (n = null);
                        },
                        notify() {
                          t(() => {
                            let t = e;
                            for (; t; ) t.callback(), (t = t.next);
                          });
                        },
                        get() {
                          let t = [],
                            n = e;
                          for (; n; ) t.push(n), (n = n.next);
                          return t;
                        },
                        subscribe(t) {
                          let r = !0,
                            i = (n = { callback: t, next: null, prev: n });
                          return (
                            i.prev ? (i.prev.next = i) : (e = i),
                            function () {
                              r &&
                                null !== e &&
                                ((r = !1),
                                i.next ? (i.next.prev = i.prev) : (n = i.prev),
                                i.prev ? (i.prev.next = i.next) : (e = i.next));
                            }
                          );
                        },
                      };
                    })()));
                }
                const a = {
                  addNestedSub: function (t) {
                    return o(), r.subscribe(t);
                  },
                  notifyNestedSubs: function () {
                    r.notify();
                  },
                  handleChangeWrapper: i,
                  isSubscribed: function () {
                    return Boolean(n);
                  },
                  trySubscribe: o,
                  tryUnsubscribe: function () {
                    n && (n(), (n = void 0), r.clear(), (r = g));
                  },
                  getListeners: () => r,
                };
                return a;
              })(t);
              return {
                store: t,
                subscription: e,
                getServerState: i ? () => i : void 0,
              };
            }, [t, i]),
            a = (0, r.useMemo)(() => t.getState(), [t]);
          m(() => {
            const { subscription: e } = o;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              a !== t.getState() && e.notifyNestedSubs(),
              () => {
                e.tryUnsubscribe(), (e.onStateChange = void 0);
              }
            );
          }, [o, a]);
          const s = e || u;
          return r.createElement(s.Provider, { value: o }, n);
        };
        function v(t = u) {
          const e = t === u ? c : () => (0, r.useContext)(t);
          return function () {
            const { store: t } = e();
            return t;
          };
        }
        const x = v();
        function _(t = u) {
          const e = t === u ? x : v(t);
          return function () {
            return e().dispatch;
          };
        }
        const w = _();
        function k(t, e) {
          return t === e
            ? 0 !== t || 0 !== e || 1 / t == 1 / e
            : t != t && e != e;
        }
        function S(t, e) {
          if (k(t, e)) return !0;
          if (
            'object' != typeof t ||
            null === t ||
            'object' != typeof e ||
            null === e
          )
            return !1;
          const n = Object.keys(t),
            r = Object.keys(e);
          if (n.length !== r.length) return !1;
          for (let r = 0; r < n.length; r++)
            if (
              !Object.prototype.hasOwnProperty.call(e, n[r]) ||
              !k(t[n[r]], e[n[r]])
            )
              return !1;
          return !0;
        }
        var M;
        function P(t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          throw Error(
            '[Immer] minified error nr: ' +
              t +
              (n.length
                ? ' ' +
                  n
                    .map(function (t) {
                      return "'" + t + "'";
                    })
                    .join(',')
                : '') +
              '. Find the full error at: https://bit.ly/3cXEKWf'
          );
        }
        function E(t) {
          return !!t && !!t[gt];
        }
        function C(t) {
          return (
            !!t &&
            ((function (t) {
              if (!t || 'object' != typeof t) return !1;
              var e = Object.getPrototypeOf(t);
              if (null === e) return !0;
              var n =
                Object.hasOwnProperty.call(e, 'constructor') && e.constructor;
              return (
                n === Object ||
                ('function' == typeof n && Function.toString.call(n) === mt)
              );
            })(t) ||
              Array.isArray(t) ||
              !!t[pt] ||
              !!t.constructor[pt] ||
              z(t) ||
              I(t))
          );
        }
        function O(t, e, n) {
          void 0 === n && (n = !1),
            0 === D(t)
              ? (n ? Object.keys : bt)(t).forEach(function (r) {
                  (n && 'symbol' == typeof r) || e(r, t[r], t);
                })
              : t.forEach(function (n, r) {
                  return e(r, n, t);
                });
        }
        function D(t) {
          var e = t[gt];
          return e
            ? e.i > 3
              ? e.i - 4
              : e.i
            : Array.isArray(t)
            ? 1
            : z(t)
            ? 2
            : I(t)
            ? 3
            : 0;
        }
        function T(t, e) {
          return 2 === D(t)
            ? t.has(e)
            : Object.prototype.hasOwnProperty.call(t, e);
        }
        function R(t, e) {
          return 2 === D(t) ? t.get(e) : t[e];
        }
        function A(t, e, n) {
          var r = D(t);
          2 === r
            ? t.set(e, n)
            : 3 === r
            ? (t.delete(e), t.add(n))
            : (t[e] = n);
        }
        function L(t, e) {
          return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
        }
        function z(t) {
          return ct && t instanceof Map;
        }
        function I(t) {
          return dt && t instanceof Set;
        }
        function N(t) {
          return t.o || t.t;
        }
        function F(t) {
          if (Array.isArray(t)) return Array.prototype.slice.call(t);
          var e = yt(t);
          delete e[gt];
          for (var n = bt(e), r = 0; r < n.length; r++) {
            var i = n[r],
              o = e[i];
            !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
              (o.get || o.set) &&
                (e[i] = {
                  configurable: !0,
                  writable: !0,
                  enumerable: o.enumerable,
                  value: t[i],
                });
          }
          return Object.create(Object.getPrototypeOf(t), e);
        }
        function j(t, e) {
          return (
            void 0 === e && (e = !1),
            B(t) ||
              E(t) ||
              !C(t) ||
              (D(t) > 1 && (t.set = t.add = t.clear = t.delete = V),
              Object.freeze(t),
              e &&
                O(
                  t,
                  function (t, e) {
                    return j(e, !0);
                  },
                  !0
                )),
            t
          );
        }
        function V() {
          P(2);
        }
        function B(t) {
          return null == t || 'object' != typeof t || Object.isFrozen(t);
        }
        function W(t) {
          var e = vt[t];
          return e || P(18, t), e;
        }
        function H(t, e) {
          vt[t] || (vt[t] = e);
        }
        function q() {
          return lt;
        }
        function $(t, e) {
          e && (W('Patches'), (t.u = []), (t.s = []), (t.v = e));
        }
        function U(t) {
          Q(t), t.p.forEach(Y), (t.p = null);
        }
        function Q(t) {
          t === lt && (lt = t.l);
        }
        function K(t) {
          return (lt = { p: [], l: lt, h: t, m: !0, _: 0 });
        }
        function Y(t) {
          var e = t[gt];
          0 === e.i || 1 === e.i ? e.j() : (e.O = !0);
        }
        function X(t, e) {
          e._ = e.p.length;
          var n = e.p[0],
            r = void 0 !== t && t !== n;
          return (
            e.h.g || W('ES5').S(e, t, r),
            r
              ? (n[gt].P && (U(e), P(4)),
                C(t) && ((t = G(e, t)), e.l || J(e, t)),
                e.u && W('Patches').M(n[gt].t, t, e.u, e.s))
              : (t = G(e, n, [])),
            U(e),
            e.u && e.v(e.u, e.s),
            t !== ft ? t : void 0
          );
        }
        function G(t, e, n) {
          if (B(e)) return e;
          var r = e[gt];
          if (!r)
            return (
              O(
                e,
                function (i, o) {
                  return Z(t, r, e, i, o, n);
                },
                !0
              ),
              e
            );
          if (r.A !== t) return e;
          if (!r.P) return J(t, r.t, !0), r.t;
          if (!r.I) {
            (r.I = !0), r.A._--;
            var i = 4 === r.i || 5 === r.i ? (r.o = F(r.k)) : r.o;
            O(3 === r.i ? new Set(i) : i, function (e, o) {
              return Z(t, r, i, e, o, n);
            }),
              J(t, i, !1),
              n && t.u && W('Patches').R(r, n, t.u, t.s);
          }
          return r.o;
        }
        function Z(t, e, n, r, i, o) {
          if (E(i)) {
            var a = G(
              t,
              i,
              o && e && 3 !== e.i && !T(e.D, r) ? o.concat(r) : void 0
            );
            if ((A(n, r, a), !E(a))) return;
            t.m = !1;
          }
          if (C(i) && !B(i)) {
            if (!t.h.F && t._ < 1) return;
            G(t, i), (e && e.A.l) || J(t, i);
          }
        }
        function J(t, e, n) {
          void 0 === n && (n = !1), t.h.F && t.m && j(e, n);
        }
        function tt(t, e) {
          var n = t[gt];
          return (n ? N(n) : t)[e];
        }
        function et(t, e) {
          if (e in t)
            for (var n = Object.getPrototypeOf(t); n; ) {
              var r = Object.getOwnPropertyDescriptor(n, e);
              if (r) return r;
              n = Object.getPrototypeOf(n);
            }
        }
        function nt(t) {
          t.P || ((t.P = !0), t.l && nt(t.l));
        }
        function rt(t) {
          t.o || (t.o = F(t.t));
        }
        function it(t, e, n) {
          var r = z(e)
            ? W('MapSet').N(e, n)
            : I(e)
            ? W('MapSet').T(e, n)
            : t.g
            ? (function (t, e) {
                var n = Array.isArray(t),
                  r = {
                    i: n ? 1 : 0,
                    A: e ? e.A : q(),
                    P: !1,
                    I: !1,
                    D: {},
                    l: e,
                    t,
                    k: null,
                    o: null,
                    j: null,
                    C: !1,
                  },
                  i = r,
                  o = xt;
                n && ((i = [r]), (o = _t));
                var a = Proxy.revocable(i, o),
                  s = a.revoke,
                  l = a.proxy;
                return (r.k = l), (r.j = s), l;
              })(e, n)
            : W('ES5').J(e, n);
          return (n ? n.A : q()).p.push(r), r;
        }
        function ot(t) {
          return (
            E(t) || P(22, t),
            (function t(e) {
              if (!C(e)) return e;
              var n,
                r = e[gt],
                i = D(e);
              if (r) {
                if (!r.P && (r.i < 4 || !W('ES5').K(r))) return r.t;
                (r.I = !0), (n = at(e, i)), (r.I = !1);
              } else n = at(e, i);
              return (
                O(n, function (e, i) {
                  (r && R(r.t, e) === i) || A(n, e, t(i));
                }),
                3 === i ? new Set(n) : n
              );
            })(t)
          );
        }
        function at(t, e) {
          switch (e) {
            case 2:
              return new Map(t);
            case 3:
              return Array.from(t);
          }
          return F(t);
        }
        ((t) => {
          d = t;
        })(a.useSyncExternalStoreWithSelector),
          ((t) => {
            b = t;
          })(o.useSyncExternalStore),
          (M = i.unstable_batchedUpdates),
          (s = M);
        var st,
          lt,
          ut = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
          ct = 'undefined' != typeof Map,
          dt = 'undefined' != typeof Set,
          ht =
            'undefined' != typeof Proxy &&
            void 0 !== Proxy.revocable &&
            'undefined' != typeof Reflect,
          ft = ut
            ? Symbol.for('immer-nothing')
            : (((st = {})['immer-nothing'] = !0), st),
          pt = ut ? Symbol.for('immer-draftable') : '__$immer_draftable',
          gt = ut ? Symbol.for('immer-state') : '__$immer_state',
          mt =
            ('undefined' != typeof Symbol && Symbol.iterator,
            '' + Object.prototype.constructor),
          bt =
            'undefined' != typeof Reflect && Reflect.ownKeys
              ? Reflect.ownKeys
              : void 0 !== Object.getOwnPropertySymbols
              ? function (t) {
                  return Object.getOwnPropertyNames(t).concat(
                    Object.getOwnPropertySymbols(t)
                  );
                }
              : Object.getOwnPropertyNames,
          yt =
            Object.getOwnPropertyDescriptors ||
            function (t) {
              var e = {};
              return (
                bt(t).forEach(function (n) {
                  e[n] = Object.getOwnPropertyDescriptor(t, n);
                }),
                e
              );
            },
          vt = {},
          xt = {
            get: function (t, e) {
              if (e === gt) return t;
              var n = N(t);
              if (!T(n, e))
                return (function (t, e, n) {
                  var r,
                    i = et(e, n);
                  return i
                    ? 'value' in i
                      ? i.value
                      : null === (r = i.get) || void 0 === r
                      ? void 0
                      : r.call(t.k)
                    : void 0;
                })(t, n, e);
              var r = n[e];
              return t.I || !C(r)
                ? r
                : r === tt(t.t, e)
                ? (rt(t), (t.o[e] = it(t.A.h, r, t)))
                : r;
            },
            has: function (t, e) {
              return e in N(t);
            },
            ownKeys: function (t) {
              return Reflect.ownKeys(N(t));
            },
            set: function (t, e, n) {
              var r = et(N(t), e);
              if (null == r ? void 0 : r.set) return r.set.call(t.k, n), !0;
              if (!t.P) {
                var i = tt(N(t), e),
                  o = null == i ? void 0 : i[gt];
                if (o && o.t === n) return (t.o[e] = n), (t.D[e] = !1), !0;
                if (L(n, i) && (void 0 !== n || T(t.t, e))) return !0;
                rt(t), nt(t);
              }
              return (
                (t.o[e] === n &&
                  'number' != typeof n &&
                  (void 0 !== n || e in t.o)) ||
                ((t.o[e] = n), (t.D[e] = !0), !0)
              );
            },
            deleteProperty: function (t, e) {
              return (
                void 0 !== tt(t.t, e) || e in t.t
                  ? ((t.D[e] = !1), rt(t), nt(t))
                  : delete t.D[e],
                t.o && delete t.o[e],
                !0
              );
            },
            getOwnPropertyDescriptor: function (t, e) {
              var n = N(t),
                r = Reflect.getOwnPropertyDescriptor(n, e);
              return r
                ? {
                    writable: !0,
                    configurable: 1 !== t.i || 'length' !== e,
                    enumerable: r.enumerable,
                    value: n[e],
                  }
                : r;
            },
            defineProperty: function () {
              P(11);
            },
            getPrototypeOf: function (t) {
              return Object.getPrototypeOf(t.t);
            },
            setPrototypeOf: function () {
              P(12);
            },
          },
          _t = {};
        O(xt, function (t, e) {
          _t[t] = function () {
            return (arguments[0] = arguments[0][0]), e.apply(this, arguments);
          };
        }),
          (_t.deleteProperty = function (t, e) {
            return _t.set.call(this, t, e, void 0);
          }),
          (_t.set = function (t, e, n) {
            return xt.set.call(this, t[0], e, n, t[0]);
          });
        var wt = (function () {
            function t(t) {
              var e = this;
              (this.g = ht),
                (this.F = !0),
                (this.produce = function (t, n, r) {
                  if ('function' == typeof t && 'function' != typeof n) {
                    var i = n;
                    n = t;
                    var o = e;
                    return function (t) {
                      var e = this;
                      void 0 === t && (t = i);
                      for (
                        var r = arguments.length,
                          a = Array(r > 1 ? r - 1 : 0),
                          s = 1;
                        s < r;
                        s++
                      )
                        a[s - 1] = arguments[s];
                      return o.produce(t, function (t) {
                        var r;
                        return (r = n).call.apply(r, [e, t].concat(a));
                      });
                    };
                  }
                  var a;
                  if (
                    ('function' != typeof n && P(6),
                    void 0 !== r && 'function' != typeof r && P(7),
                    C(t))
                  ) {
                    var s = K(e),
                      l = it(e, t, void 0),
                      u = !0;
                    try {
                      (a = n(l)), (u = !1);
                    } finally {
                      u ? U(s) : Q(s);
                    }
                    return 'undefined' != typeof Promise && a instanceof Promise
                      ? a.then(
                          function (t) {
                            return $(s, r), X(t, s);
                          },
                          function (t) {
                            throw (U(s), t);
                          }
                        )
                      : ($(s, r), X(a, s));
                  }
                  if (!t || 'object' != typeof t) {
                    if (
                      (void 0 === (a = n(t)) && (a = t),
                      a === ft && (a = void 0),
                      e.F && j(a, !0),
                      r)
                    ) {
                      var c = [],
                        d = [];
                      W('Patches').M(t, a, c, d), r(c, d);
                    }
                    return a;
                  }
                  P(21, t);
                }),
                (this.produceWithPatches = function (t, n) {
                  if ('function' == typeof t)
                    return function (n) {
                      for (
                        var r = arguments.length,
                          i = Array(r > 1 ? r - 1 : 0),
                          o = 1;
                        o < r;
                        o++
                      )
                        i[o - 1] = arguments[o];
                      return e.produceWithPatches(n, function (e) {
                        return t.apply(void 0, [e].concat(i));
                      });
                    };
                  var r,
                    i,
                    o = e.produce(t, n, function (t, e) {
                      (r = t), (i = e);
                    });
                  return 'undefined' != typeof Promise && o instanceof Promise
                    ? o.then(function (t) {
                        return [t, r, i];
                      })
                    : [o, r, i];
                }),
                'boolean' == typeof (null == t ? void 0 : t.useProxies) &&
                  this.setUseProxies(t.useProxies),
                'boolean' == typeof (null == t ? void 0 : t.autoFreeze) &&
                  this.setAutoFreeze(t.autoFreeze);
            }
            var e = t.prototype;
            return (
              (e.createDraft = function (t) {
                C(t) || P(8), E(t) && (t = ot(t));
                var e = K(this),
                  n = it(this, t, void 0);
                return (n[gt].C = !0), Q(e), n;
              }),
              (e.finishDraft = function (t, e) {
                var n = (t && t[gt]).A;
                return $(n, e), X(void 0, n);
              }),
              (e.setAutoFreeze = function (t) {
                this.F = t;
              }),
              (e.setUseProxies = function (t) {
                t && !ht && P(20), (this.g = t);
              }),
              (e.applyPatches = function (t, e) {
                var n;
                for (n = e.length - 1; n >= 0; n--) {
                  var r = e[n];
                  if (0 === r.path.length && 'replace' === r.op) {
                    t = r.value;
                    break;
                  }
                }
                n > -1 && (e = e.slice(n + 1));
                var i = W('Patches').$;
                return E(t)
                  ? i(t, e)
                  : this.produce(t, function (t) {
                      return i(t, e);
                    });
              }),
              t
            );
          })(),
          kt = new wt(),
          St = kt.produce,
          Mt = kt.produceWithPatches.bind(kt),
          Pt =
            (kt.setAutoFreeze.bind(kt),
            kt.setUseProxies.bind(kt),
            kt.applyPatches.bind(kt));
        kt.createDraft.bind(kt), kt.finishDraft.bind(kt);
        const Et = St;
        function Ct(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function Ot(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Dt(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Ot(Object(n), !0).forEach(function (e) {
                  Ct(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Ot(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function Tt(t) {
          return (
            'Minified Redux error #' +
            t +
            '; visit https://redux.js.org/Errors?code=' +
            t +
            ' for the full message or use the non-minified dev environment for full errors. '
          );
        }
        var Rt =
            ('function' == typeof Symbol && Symbol.observable) ||
            '@@observable',
          At = function () {
            return Math.random().toString(36).substring(7).split('').join('.');
          },
          Lt = {
            INIT: '@@redux/INIT' + At(),
            REPLACE: '@@redux/REPLACE' + At(),
            PROBE_UNKNOWN_ACTION: function () {
              return '@@redux/PROBE_UNKNOWN_ACTION' + At();
            },
          };
        function zt(t) {
          if ('object' != typeof t || null === t) return !1;
          for (var e = t; null !== Object.getPrototypeOf(e); )
            e = Object.getPrototypeOf(e);
          return Object.getPrototypeOf(t) === e;
        }
        function It(t, e, n) {
          var r;
          if (
            ('function' == typeof e && 'function' == typeof n) ||
            ('function' == typeof n && 'function' == typeof arguments[3])
          )
            throw new Error(Tt(0));
          if (
            ('function' == typeof e && void 0 === n && ((n = e), (e = void 0)),
            void 0 !== n)
          ) {
            if ('function' != typeof n) throw new Error(Tt(1));
            return n(It)(t, e);
          }
          if ('function' != typeof t) throw new Error(Tt(2));
          var i = t,
            o = e,
            a = [],
            s = a,
            l = !1;
          function u() {
            s === a && (s = a.slice());
          }
          function c() {
            if (l) throw new Error(Tt(3));
            return o;
          }
          function d(t) {
            if ('function' != typeof t) throw new Error(Tt(4));
            if (l) throw new Error(Tt(5));
            var e = !0;
            return (
              u(),
              s.push(t),
              function () {
                if (e) {
                  if (l) throw new Error(Tt(6));
                  (e = !1), u();
                  var n = s.indexOf(t);
                  s.splice(n, 1), (a = null);
                }
              }
            );
          }
          function h(t) {
            if (!zt(t)) throw new Error(Tt(7));
            if (void 0 === t.type) throw new Error(Tt(8));
            if (l) throw new Error(Tt(9));
            try {
              (l = !0), (o = i(o, t));
            } finally {
              l = !1;
            }
            for (var e = (a = s), n = 0; n < e.length; n++) (0, e[n])();
            return t;
          }
          function f(t) {
            if ('function' != typeof t) throw new Error(Tt(10));
            (i = t), h({ type: Lt.REPLACE });
          }
          function p() {
            var t,
              e = d;
            return (
              ((t = {
                subscribe: function (t) {
                  if ('object' != typeof t || null === t)
                    throw new Error(Tt(11));
                  function n() {
                    t.next && t.next(c());
                  }
                  return n(), { unsubscribe: e(n) };
                },
              })[Rt] = function () {
                return this;
              }),
              t
            );
          }
          return (
            h({ type: Lt.INIT }),
            ((r = {
              dispatch: h,
              subscribe: d,
              getState: c,
              replaceReducer: f,
            })[Rt] = p),
            r
          );
        }
        function Nt(t) {
          for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            'function' == typeof t[i] && (n[i] = t[i]);
          }
          var o,
            a = Object.keys(n);
          try {
            !(function (t) {
              Object.keys(t).forEach(function (e) {
                var n = t[e];
                if (void 0 === n(void 0, { type: Lt.INIT }))
                  throw new Error(Tt(12));
                if (void 0 === n(void 0, { type: Lt.PROBE_UNKNOWN_ACTION() }))
                  throw new Error(Tt(13));
              });
            })(n);
          } catch (t) {
            o = t;
          }
          return function (t, e) {
            if ((void 0 === t && (t = {}), o)) throw o;
            for (var r = !1, i = {}, s = 0; s < a.length; s++) {
              var l = a[s],
                u = n[l],
                c = t[l],
                d = u(c, e);
              if (void 0 === d) throw (e && e.type, new Error(Tt(14)));
              (i[l] = d), (r = r || d !== c);
            }
            return (r = r || a.length !== Object.keys(t).length) ? i : t;
          };
        }
        function Ft() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return 0 === e.length
            ? function (t) {
                return t;
              }
            : 1 === e.length
            ? e[0]
            : e.reduce(function (t, e) {
                return function () {
                  return t(e.apply(void 0, arguments));
                };
              });
        }
        function jt() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return function (t) {
            return function () {
              var n = t.apply(void 0, arguments),
                r = function () {
                  throw new Error(Tt(15));
                },
                i = {
                  getState: n.getState,
                  dispatch: function () {
                    return r.apply(void 0, arguments);
                  },
                },
                o = e.map(function (t) {
                  return t(i);
                });
              return (
                (r = Ft.apply(void 0, o)(n.dispatch)),
                Dt(Dt({}, n), {}, { dispatch: r })
              );
            };
          };
        }
        function Vt(t) {
          return function (e) {
            var n = e.dispatch,
              r = e.getState;
            return function (e) {
              return function (i) {
                return 'function' == typeof i ? i(n, r, t) : e(i);
              };
            };
          };
        }
        var Bt = Vt();
        Bt.withExtraArgument = Vt;
        const Wt = Bt;
        var Ht,
          qt =
            ((Ht = function (t, e) {
              return (
                (Ht =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  }),
                Ht(t, e)
              );
            }),
            function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Class extends value ' +
                    String(e) +
                    ' is not a constructor or null'
                );
              function n() {
                this.constructor = t;
              }
              Ht(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
            }),
          $t = function (t, e) {
            for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
              t[i] = e[n];
            return t;
          },
          Ut = Object.defineProperty,
          Qt = Object.defineProperties,
          Kt = Object.getOwnPropertyDescriptors,
          Yt = Object.getOwnPropertySymbols,
          Xt = Object.prototype.hasOwnProperty,
          Gt = Object.prototype.propertyIsEnumerable,
          Zt = function (t, e, n) {
            return e in t
              ? Ut(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (t[e] = n);
          },
          Jt = function (t, e) {
            for (var n in e || (e = {})) Xt.call(e, n) && Zt(t, n, e[n]);
            if (Yt)
              for (var r = 0, i = Yt(e); r < i.length; r++)
                (n = i[r]), Gt.call(e, n) && Zt(t, n, e[n]);
            return t;
          },
          te = function (t, e) {
            return Qt(t, Kt(e));
          },
          ee =
            'undefined' != typeof window &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
              ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
              : function () {
                  if (0 !== arguments.length)
                    return 'object' == typeof arguments[0]
                      ? Ft
                      : Ft.apply(null, arguments);
                };
        function ne(t) {
          if ('object' != typeof t || null === t) return !1;
          var e = Object.getPrototypeOf(t);
          if (null === e) return !0;
          for (var n = e; null !== Object.getPrototypeOf(n); )
            n = Object.getPrototypeOf(n);
          return e === n;
        }
        'undefined' != typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__;
        var re = (function (t) {
          function e() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            var i = t.apply(this, n) || this;
            return Object.setPrototypeOf(i, e.prototype), i;
          }
          return (
            qt(e, t),
            Object.defineProperty(e, Symbol.species, {
              get: function () {
                return e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.concat = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return t.prototype.concat.apply(this, e);
            }),
            (e.prototype.prepend = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return 1 === t.length && Array.isArray(t[0])
                ? new (e.bind.apply(e, $t([void 0], t[0].concat(this))))()
                : new (e.bind.apply(e, $t([void 0], t.concat(this))))();
            }),
            e
          );
        })(Array);
        function ie(t) {
          return C(t) ? Et(t, function () {}) : t;
        }
        function oe(t, e) {
          function n() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            if (e) {
              var i = e.apply(void 0, n);
              if (!i) throw new Error('prepareAction did not return an object');
              return Jt(
                Jt(
                  { type: t, payload: i.payload },
                  'meta' in i && { meta: i.meta }
                ),
                'error' in i && { error: i.error }
              );
            }
            return { type: t, payload: n[0] };
          }
          return (
            (n.toString = function () {
              return '' + t;
            }),
            (n.type = t),
            (n.match = function (e) {
              return e.type === t;
            }),
            n
          );
        }
        function ae(t) {
          var e,
            n = {},
            r = [],
            i = {
              addCase: function (t, e) {
                var r = 'string' == typeof t ? t : t.type;
                if (r in n)
                  throw new Error(
                    'addCase cannot be called with two reducers for the same action type'
                  );
                return (n[r] = e), i;
              },
              addMatcher: function (t, e) {
                return r.push({ matcher: t, reducer: e }), i;
              },
              addDefaultCase: function (t) {
                return (e = t), i;
              },
            };
          return t(i), [n, r, e];
        }
        function se(t) {
          var e = t.name;
          if (!e)
            throw new Error('`name` is a required option for createSlice');
          var n,
            r =
              'function' == typeof t.initialState
                ? t.initialState
                : ie(t.initialState),
            i = t.reducers || {},
            o = Object.keys(i),
            a = {},
            s = {},
            l = {};
          function u() {
            var e =
                'function' == typeof t.extraReducers
                  ? ae(t.extraReducers)
                  : [t.extraReducers],
              n = e[0],
              i = void 0 === n ? {} : n,
              o = e[1],
              a = void 0 === o ? [] : o,
              l = e[2],
              u = void 0 === l ? void 0 : l,
              c = Jt(Jt({}, i), s);
            return (function (t, e, n, r) {
              void 0 === n && (n = []);
              var i,
                o = 'function' == typeof e ? ae(e) : [e, n, r],
                a = o[0],
                s = o[1],
                l = o[2];
              if (
                (function (t) {
                  return 'function' == typeof t;
                })(t)
              )
                i = function () {
                  return ie(t());
                };
              else {
                var u = ie(t);
                i = function () {
                  return u;
                };
              }
              function c(t, e) {
                void 0 === t && (t = i());
                var n = $t(
                  [a[e.type]],
                  s
                    .filter(function (t) {
                      return (0, t.matcher)(e);
                    })
                    .map(function (t) {
                      return t.reducer;
                    })
                );
                return (
                  0 ===
                    n.filter(function (t) {
                      return !!t;
                    }).length && (n = [l]),
                  n.reduce(function (t, n) {
                    if (n) {
                      var r;
                      if (E(t)) return void 0 === (r = n(t, e)) ? t : r;
                      if (C(t))
                        return Et(t, function (t) {
                          return n(t, e);
                        });
                      if (void 0 === (r = n(t, e))) {
                        if (null === t) return t;
                        throw Error(
                          'A case reducer on a non-draftable value must not return undefined'
                        );
                      }
                      return r;
                    }
                    return t;
                  }, t)
                );
              }
              return (c.getInitialState = i), c;
            })(r, c, a, u);
          }
          return (
            o.forEach(function (t) {
              var n,
                r,
                o = i[t],
                u = e + '/' + t;
              'reducer' in o ? ((n = o.reducer), (r = o.prepare)) : (n = o),
                (a[t] = n),
                (s[u] = n),
                (l[t] = r ? oe(u, r) : oe(u));
            }),
            {
              name: e,
              reducer: function (t, e) {
                return n || (n = u()), n(t, e);
              },
              actions: l,
              caseReducers: a,
              getInitialState: function () {
                return n || (n = u()), n.getInitialState();
              },
            }
          );
        }
        var le = function (t) {
            void 0 === t && (t = 21);
            for (var e = '', n = t; n--; )
              e +=
                'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'[
                  (64 * Math.random()) | 0
                ];
            return e;
          },
          ue = ['name', 'message', 'stack', 'code'],
          ce = function (t, e) {
            (this.payload = t), (this.meta = e);
          },
          de = function (t, e) {
            (this.payload = t), (this.meta = e);
          },
          he = function (t) {
            if ('object' == typeof t && null !== t) {
              for (var e = {}, n = 0, r = ue; n < r.length; n++) {
                var i = r[n];
                'string' == typeof t[i] && (e[i] = t[i]);
              }
              return e;
            }
            return { message: String(t) };
          };
        function fe(t, e, n) {
          var r = oe(t + '/fulfilled', function (t, e, n, r) {
              return {
                payload: t,
                meta: te(Jt({}, r || {}), {
                  arg: n,
                  requestId: e,
                  requestStatus: 'fulfilled',
                }),
              };
            }),
            i = oe(t + '/pending', function (t, e, n) {
              return {
                payload: void 0,
                meta: te(Jt({}, n || {}), {
                  arg: e,
                  requestId: t,
                  requestStatus: 'pending',
                }),
              };
            }),
            o = oe(t + '/rejected', function (t, e, r, i, o) {
              return {
                payload: i,
                error: ((n && n.serializeError) || he)(t || 'Rejected'),
                meta: te(Jt({}, o || {}), {
                  arg: r,
                  requestId: e,
                  rejectedWithValue: !!i,
                  requestStatus: 'rejected',
                  aborted: 'AbortError' === (null == t ? void 0 : t.name),
                  condition: 'ConditionError' === (null == t ? void 0 : t.name),
                }),
              };
            }),
            a =
              'undefined' != typeof AbortController
                ? AbortController
                : (function () {
                    function t() {
                      this.signal = {
                        aborted: !1,
                        addEventListener: function () {},
                        dispatchEvent: function () {
                          return !1;
                        },
                        onabort: function () {},
                        removeEventListener: function () {},
                        reason: void 0,
                        throwIfAborted: function () {},
                      };
                    }
                    return (t.prototype.abort = function () {}), t;
                  })();
          return Object.assign(
            function (t) {
              return function (s, l, u) {
                var c,
                  d = (null == n ? void 0 : n.idGenerator)
                    ? n.idGenerator(t)
                    : le(),
                  h = new a(),
                  f = new Promise(function (t, e) {
                    return h.signal.addEventListener('abort', function () {
                      return e({ name: 'AbortError', message: c || 'Aborted' });
                    });
                  }),
                  p = !1,
                  g = (function () {
                    return (
                      (a = this),
                      (c = null),
                      (g = function () {
                        var a, c, g, m, b;
                        return (function (t, e) {
                          var n,
                            r,
                            i,
                            o,
                            a = {
                              label: 0,
                              sent: function () {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                              },
                              trys: [],
                              ops: [],
                            };
                          return (
                            (o = { next: s(0), throw: s(1), return: s(2) }),
                            'function' == typeof Symbol &&
                              (o[Symbol.iterator] = function () {
                                return this;
                              }),
                            o
                          );
                          function s(o) {
                            return function (s) {
                              return (function (o) {
                                if (n)
                                  throw new TypeError(
                                    'Generator is already executing.'
                                  );
                                for (; a; )
                                  try {
                                    if (
                                      ((n = 1),
                                      r &&
                                        (i =
                                          2 & o[0]
                                            ? r.return
                                            : o[0]
                                            ? r.throw ||
                                              ((i = r.return) && i.call(r), 0)
                                            : r.next) &&
                                        !(i = i.call(r, o[1])).done)
                                    )
                                      return i;
                                    switch (
                                      ((r = 0),
                                      i && (o = [2 & o[0], i.value]),
                                      o[0])
                                    ) {
                                      case 0:
                                      case 1:
                                        i = o;
                                        break;
                                      case 4:
                                        return (
                                          a.label++, { value: o[1], done: !1 }
                                        );
                                      case 5:
                                        a.label++, (r = o[1]), (o = [0]);
                                        continue;
                                      case 7:
                                        (o = a.ops.pop()), a.trys.pop();
                                        continue;
                                      default:
                                        if (
                                          !(
                                            (i =
                                              (i = a.trys).length > 0 &&
                                              i[i.length - 1]) ||
                                            (6 !== o[0] && 2 !== o[0])
                                          )
                                        ) {
                                          a = 0;
                                          continue;
                                        }
                                        if (
                                          3 === o[0] &&
                                          (!i || (o[1] > i[0] && o[1] < i[3]))
                                        ) {
                                          a.label = o[1];
                                          break;
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                          (a.label = i[1]), (i = o);
                                          break;
                                        }
                                        if (i && a.label < i[2]) {
                                          (a.label = i[2]), a.ops.push(o);
                                          break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                    }
                                    o = e.call(t, a);
                                  } catch (t) {
                                    (o = [6, t]), (r = 0);
                                  } finally {
                                    n = i = 0;
                                  }
                                if (5 & o[0]) throw o[1];
                                return {
                                  value: o[0] ? o[1] : void 0,
                                  done: !0,
                                };
                              })([o, s]);
                            };
                          }
                        })(this, function (y) {
                          switch (y.label) {
                            case 0:
                              return (
                                y.trys.push([0, 4, , 5]),
                                null ===
                                  (v = m =
                                    null ==
                                    (a = null == n ? void 0 : n.condition)
                                      ? void 0
                                      : a.call(n, t, {
                                          getState: l,
                                          extra: u,
                                        })) ||
                                'object' != typeof v ||
                                'function' != typeof v.then
                                  ? [3, 2]
                                  : [4, m]
                              );
                            case 1:
                              (m = y.sent()), (y.label = 2);
                            case 2:
                              if (!1 === m)
                                throw {
                                  name: 'ConditionError',
                                  message:
                                    'Aborted due to condition callback returning false.',
                                };
                              return (
                                (p = !0),
                                s(
                                  i(
                                    d,
                                    t,
                                    null ==
                                      (c =
                                        null == n ? void 0 : n.getPendingMeta)
                                      ? void 0
                                      : c.call(
                                          n,
                                          { requestId: d, arg: t },
                                          { getState: l, extra: u }
                                        )
                                  )
                                ),
                                [
                                  4,
                                  Promise.race([
                                    f,
                                    Promise.resolve(
                                      e(t, {
                                        dispatch: s,
                                        getState: l,
                                        extra: u,
                                        requestId: d,
                                        signal: h.signal,
                                        rejectWithValue: function (t, e) {
                                          return new ce(t, e);
                                        },
                                        fulfillWithValue: function (t, e) {
                                          return new de(t, e);
                                        },
                                      })
                                    ).then(function (e) {
                                      if (e instanceof ce) throw e;
                                      return e instanceof de
                                        ? r(e.payload, d, t, e.meta)
                                        : r(e, d, t);
                                    }),
                                  ]),
                                ]
                              );
                            case 3:
                              return (g = y.sent()), [3, 5];
                            case 4:
                              return (
                                (b = y.sent()),
                                (g =
                                  b instanceof ce
                                    ? o(null, d, t, b.payload, b.meta)
                                    : o(b, d, t)),
                                [3, 5]
                              );
                            case 5:
                              return (
                                (n &&
                                  !n.dispatchConditionRejection &&
                                  o.match(g) &&
                                  g.meta.condition) ||
                                  s(g),
                                [2, g]
                              );
                          }
                          var v;
                        });
                      }),
                      new Promise(function (t, e) {
                        var n = function (t) {
                            try {
                              i(g.next(t));
                            } catch (t) {
                              e(t);
                            }
                          },
                          r = function (t) {
                            try {
                              i(g.throw(t));
                            } catch (t) {
                              e(t);
                            }
                          },
                          i = function (e) {
                            return e.done
                              ? t(e.value)
                              : Promise.resolve(e.value).then(n, r);
                          };
                        i((g = g.apply(a, c)).next());
                      })
                    );
                    var a, c, g;
                  })();
                return Object.assign(g, {
                  abort: function (t) {
                    p && ((c = t), h.abort());
                  },
                  requestId: d,
                  arg: t,
                  unwrap: function () {
                    return g.then(pe);
                  },
                });
              };
            },
            { pending: i, rejected: o, fulfilled: r, typePrefix: t }
          );
        }
        function pe(t) {
          if (t.meta && t.meta.rejectedWithValue) throw t.payload;
          if (t.error) throw t.error;
          return t.payload;
        }
        var ge = function (t, e) {
          return (function (t) {
            return t && 'function' == typeof t.match;
          })(t)
            ? t.match(e)
            : t(e);
        };
        function me() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return function (e) {
            return t.some(function (t) {
              return ge(t, e);
            });
          };
        }
        function be() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return function (e) {
            return t.every(function (t) {
              return ge(t, e);
            });
          };
        }
        function ye(t, e) {
          if (!t || !t.meta) return !1;
          var n = 'string' == typeof t.meta.requestId,
            r = e.indexOf(t.meta.requestStatus) > -1;
          return n && r;
        }
        function ve(t) {
          return (
            'function' == typeof t[0] &&
            'pending' in t[0] &&
            'fulfilled' in t[0] &&
            'rejected' in t[0]
          );
        }
        function xe() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return 0 === t.length
            ? function (t) {
                return ye(t, ['pending']);
              }
            : ve(t)
            ? function (e) {
                var n = t.map(function (t) {
                  return t.pending;
                });
                return me.apply(void 0, n)(e);
              }
            : xe()(t[0]);
        }
        function _e() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return 0 === t.length
            ? function (t) {
                return ye(t, ['rejected']);
              }
            : ve(t)
            ? function (e) {
                var n = t.map(function (t) {
                  return t.rejected;
                });
                return me.apply(void 0, n)(e);
              }
            : _e()(t[0]);
        }
        function we() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var n = function (t) {
            return t && t.meta && t.meta.rejectedWithValue;
          };
          return 0 === t.length || ve(t)
            ? function (e) {
                return be(_e.apply(void 0, t), n)(e);
              }
            : we()(t[0]);
        }
        function ke() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return 0 === t.length
            ? function (t) {
                return ye(t, ['fulfilled']);
              }
            : ve(t)
            ? function (e) {
                var n = t.map(function (t) {
                  return t.fulfilled;
                });
                return me.apply(void 0, n)(e);
              }
            : ke()(t[0]);
        }
        function Se() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return 0 === t.length
            ? function (t) {
                return ye(t, ['pending', 'fulfilled', 'rejected']);
              }
            : ve(t)
            ? function (e) {
                for (var n = [], r = 0, i = t; r < i.length; r++) {
                  var o = i[r];
                  n.push(o.pending, o.rejected, o.fulfilled);
                }
                return me.apply(void 0, n)(e);
              }
            : Se()(t[0]);
        }
        Object.assign;
        var Me = 'listenerMiddleware';
        oe(Me + '/add'),
          oe(Me + '/removeAll'),
          oe(Me + '/remove'),
          (function () {
            function t(t, e) {
              var n = i[t];
              return (
                n
                  ? (n.enumerable = e)
                  : (i[t] = n =
                      {
                        configurable: !0,
                        enumerable: e,
                        get: function () {
                          var e = this[gt];
                          return xt.get(e, t);
                        },
                        set: function (e) {
                          var n = this[gt];
                          xt.set(n, t, e);
                        },
                      }),
                n
              );
            }
            function e(t) {
              for (var e = t.length - 1; e >= 0; e--) {
                var i = t[e][gt];
                if (!i.P)
                  switch (i.i) {
                    case 5:
                      r(i) && nt(i);
                      break;
                    case 4:
                      n(i) && nt(i);
                  }
              }
            }
            function n(t) {
              for (
                var e = t.t, n = t.k, r = bt(n), i = r.length - 1;
                i >= 0;
                i--
              ) {
                var o = r[i];
                if (o !== gt) {
                  var a = e[o];
                  if (void 0 === a && !T(e, o)) return !0;
                  var s = n[o],
                    l = s && s[gt];
                  if (l ? l.t !== a : !L(s, a)) return !0;
                }
              }
              var u = !!e[gt];
              return r.length !== bt(e).length + (u ? 0 : 1);
            }
            function r(t) {
              var e = t.k;
              if (e.length !== t.t.length) return !0;
              var n = Object.getOwnPropertyDescriptor(e, e.length - 1);
              if (n && !n.get) return !0;
              for (var r = 0; r < e.length; r++)
                if (!e.hasOwnProperty(r)) return !0;
              return !1;
            }
            var i = {};
            H('ES5', {
              J: function (e, n) {
                var r = Array.isArray(e),
                  i = (function (e, n) {
                    if (e) {
                      for (var r = Array(n.length), i = 0; i < n.length; i++)
                        Object.defineProperty(r, '' + i, t(i, !0));
                      return r;
                    }
                    var o = yt(n);
                    delete o[gt];
                    for (var a = bt(o), s = 0; s < a.length; s++) {
                      var l = a[s];
                      o[l] = t(l, e || !!o[l].enumerable);
                    }
                    return Object.create(Object.getPrototypeOf(n), o);
                  })(r, e),
                  o = {
                    i: r ? 5 : 4,
                    A: n ? n.A : q(),
                    P: !1,
                    I: !1,
                    D: {},
                    l: n,
                    t: e,
                    k: i,
                    o: null,
                    O: !1,
                    C: !1,
                  };
                return (
                  Object.defineProperty(i, gt, { value: o, writable: !0 }), i
                );
              },
              S: function (t, n, i) {
                i
                  ? E(n) && n[gt].A === t && e(t.p)
                  : (t.u &&
                      (function t(e) {
                        if (e && 'object' == typeof e) {
                          var n = e[gt];
                          if (n) {
                            var i = n.t,
                              o = n.k,
                              a = n.D,
                              s = n.i;
                            if (4 === s)
                              O(o, function (e) {
                                e !== gt &&
                                  (void 0 !== i[e] || T(i, e)
                                    ? a[e] || t(o[e])
                                    : ((a[e] = !0), nt(n)));
                              }),
                                O(i, function (t) {
                                  void 0 !== o[t] ||
                                    T(o, t) ||
                                    ((a[t] = !1), nt(n));
                                });
                            else if (5 === s) {
                              if (
                                (r(n) && (nt(n), (a.length = !0)),
                                o.length < i.length)
                              )
                                for (var l = o.length; l < i.length; l++)
                                  a[l] = !1;
                              else
                                for (var u = i.length; u < o.length; u++)
                                  a[u] = !0;
                              for (
                                var c = Math.min(o.length, i.length), d = 0;
                                d < c;
                                d++
                              )
                                o.hasOwnProperty(d) || (a[d] = !0),
                                  void 0 === a[d] && t(o[d]);
                            }
                          }
                        }
                      })(t.p[0]),
                    e(t.p));
              },
              K: function (t) {
                return 4 === t.i ? n(t) : r(t);
              },
            });
          })();
        var Pe = 'NOT_FOUND',
          Ee = function (t, e) {
            return t === e;
          };
        function Ce(t, e) {
          var n,
            r,
            i = 'object' == typeof e ? e : { equalityCheck: e },
            o = i.equalityCheck,
            a = void 0 === o ? Ee : o,
            s = i.maxSize,
            l = void 0 === s ? 1 : s,
            u = i.resultEqualityCheck,
            c = (function (t) {
              return function (e, n) {
                if (null === e || null === n || e.length !== n.length)
                  return !1;
                for (var r = e.length, i = 0; i < r; i++)
                  if (!t(e[i], n[i])) return !1;
                return !0;
              };
            })(a),
            d =
              1 === l
                ? ((n = c),
                  {
                    get: function (t) {
                      return r && n(r.key, t) ? r.value : Pe;
                    },
                    put: function (t, e) {
                      r = { key: t, value: e };
                    },
                    getEntries: function () {
                      return r ? [r] : [];
                    },
                    clear: function () {
                      r = void 0;
                    },
                  })
                : (function (t, e) {
                    var n = [];
                    function r(t) {
                      var r = n.findIndex(function (n) {
                        return e(t, n.key);
                      });
                      if (r > -1) {
                        var i = n[r];
                        return r > 0 && (n.splice(r, 1), n.unshift(i)), i.value;
                      }
                      return Pe;
                    }
                    return {
                      get: r,
                      put: function (e, i) {
                        r(e) === Pe &&
                          (n.unshift({ key: e, value: i }),
                          n.length > t && n.pop());
                      },
                      getEntries: function () {
                        return n;
                      },
                      clear: function () {
                        n = [];
                      },
                    };
                  })(l, c);
          function h() {
            var e = d.get(arguments);
            if (e === Pe) {
              if (((e = t.apply(null, arguments)), u)) {
                var n = d.getEntries(),
                  r = n.find(function (t) {
                    return u(t.value, e);
                  });
                r && (e = r.value);
              }
              d.put(arguments, e);
            }
            return e;
          }
          return (
            (h.clearCache = function () {
              return d.clear();
            }),
            h
          );
        }
        function Oe(t) {
          var e = Array.isArray(t[0]) ? t[0] : t;
          if (
            !e.every(function (t) {
              return 'function' == typeof t;
            })
          ) {
            var n = e
              .map(function (t) {
                return 'function' == typeof t
                  ? 'function ' + (t.name || 'unnamed') + '()'
                  : typeof t;
              })
              .join(', ');
            throw new Error(
              'createSelector expects all input-selectors to be functions, but received the following types: [' +
                n +
                ']'
            );
          }
          return e;
        }
        function De(t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          var i = function () {
            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
              r[i] = arguments[i];
            var o,
              a = 0,
              s = { memoizeOptions: void 0 },
              l = r.pop();
            if (
              ('object' == typeof l && ((s = l), (l = r.pop())),
              'function' != typeof l)
            )
              throw new Error(
                'createSelector expects an output function after the inputs, but received: [' +
                  typeof l +
                  ']'
              );
            var u = s,
              c = u.memoizeOptions,
              d = void 0 === c ? n : c,
              h = Array.isArray(d) ? d : [d],
              f = Oe(r),
              p = t.apply(
                void 0,
                [
                  function () {
                    return a++, l.apply(null, arguments);
                  },
                ].concat(h)
              ),
              g = t(function () {
                for (var t = [], e = f.length, n = 0; n < e; n++)
                  t.push(f[n].apply(null, arguments));
                return (o = p.apply(null, t));
              });
            return (
              Object.assign(g, {
                resultFunc: l,
                memoizedResultFunc: p,
                dependencies: f,
                lastResult: function () {
                  return o;
                },
                recomputations: function () {
                  return a;
                },
                resetRecomputations: function () {
                  return (a = 0);
                },
              }),
              g
            );
          };
          return i;
        }
        var Te,
          Re,
          Ae = De(Ce),
          Le = function (t, e) {
            var n,
              r,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              'function' == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return a.label++, { value: o[1], done: !1 };
                        case 5:
                          a.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (i =
                                (i = a.trys).length > 0 && i[i.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0])
                            )
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            a.label = o[1];
                            break;
                          }
                          if (6 === o[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = o);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(o);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      o = e.call(t, a);
                    } catch (t) {
                      (o = [6, t]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, s]);
              };
            }
          },
          ze = function (t, e) {
            for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
              t[i] = e[n];
            return t;
          },
          Ie = Object.defineProperty,
          Ne = Object.defineProperties,
          Fe = Object.getOwnPropertyDescriptors,
          je = Object.getOwnPropertySymbols,
          Ve = Object.prototype.hasOwnProperty,
          Be = Object.prototype.propertyIsEnumerable,
          We = function (t, e, n) {
            return e in t
              ? Ie(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (t[e] = n);
          },
          He = function (t, e) {
            for (var n in e || (e = {})) Ve.call(e, n) && We(t, n, e[n]);
            if (je)
              for (var r = 0, i = je(e); r < i.length; r++)
                (n = i[r]), Be.call(e, n) && We(t, n, e[n]);
            return t;
          },
          qe = function (t, e) {
            return Ne(t, Fe(e));
          },
          $e = function (t, e) {
            var n = {};
            for (var r in t) Ve.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && je)
              for (var i = 0, o = je(t); i < o.length; i++)
                (r = o[i]), e.indexOf(r) < 0 && Be.call(t, r) && (n[r] = t[r]);
            return n;
          },
          Ue = function (t, e, n) {
            return new Promise(function (r, i) {
              var o = function (t) {
                  try {
                    s(n.next(t));
                  } catch (t) {
                    i(t);
                  }
                },
                a = function (t) {
                  try {
                    s(n.throw(t));
                  } catch (t) {
                    i(t);
                  }
                },
                s = function (t) {
                  return t.done
                    ? r(t.value)
                    : Promise.resolve(t.value).then(o, a);
                };
              s((n = n.apply(t, e)).next());
            });
          };
        ((Re = Te || (Te = {})).uninitialized = 'uninitialized'),
          (Re.pending = 'pending'),
          (Re.fulfilled = 'fulfilled'),
          (Re.rejected = 'rejected');
        var Qe = function (t) {
            return [].concat.apply([], t);
          },
          Ke = ne;
        function Ye(t, e) {
          if (
            t === e ||
            !((Ke(t) && Ke(e)) || (Array.isArray(t) && Array.isArray(e)))
          )
            return e;
          for (
            var n = Object.keys(e),
              r = Object.keys(t),
              i = n.length === r.length,
              o = Array.isArray(e) ? [] : {},
              a = 0,
              s = n;
            a < s.length;
            a++
          ) {
            var l = s[a];
            (o[l] = Ye(t[l], e[l])), i && (i = t[l] === o[l]);
          }
          return i ? t : o;
        }
        var Xe = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return fetch.apply(void 0, t);
          },
          Ge = function (t) {
            return t.status >= 200 && t.status <= 299;
          },
          Ze = function (t, e) {
            return Ue(void 0, null, function () {
              var n;
              return Le(this, function (r) {
                switch (r.label) {
                  case 0:
                    return 'function' == typeof e
                      ? [2, e(t)]
                      : 'text' === e
                      ? [2, t.text()]
                      : 'json' !== e
                      ? [3, 2]
                      : [4, t.text()];
                  case 1:
                    return [2, (n = r.sent()).length ? JSON.parse(n) : null];
                  case 2:
                    return [2];
                }
              });
            });
          };
        function Je(t) {
          if (!ne(t)) return t;
          for (
            var e = He({}, t), n = 0, r = Object.entries(e);
            n < r.length;
            n++
          ) {
            var i = r[n],
              o = i[0];
            void 0 === i[1] && delete e[o];
          }
          return e;
        }
        var tn,
          en,
          nn = function (t, e) {
            void 0 === e && (e = void 0), (this.value = t), (this.meta = e);
          },
          rn = oe('__rtkq/focused'),
          on = oe('__rtkq/unfocused'),
          an = oe('__rtkq/online'),
          sn = oe('__rtkq/offline');
        function ln(t, e, n, r, i, o) {
          return (function (t) {
            return 'function' == typeof t;
          })(t)
            ? t(e, n, r, i).map(un).map(o)
            : Array.isArray(t)
            ? t.map(un).map(o)
            : [];
        }
        function un(t) {
          return 'string' == typeof t ? { type: t } : t;
        }
        function cn(t) {
          return t;
        }
        function dn(t, e, n, r) {
          return ln(
            n[t.meta.arg.endpointName][e],
            ke(t) ? t.payload : void 0,
            we(t) ? t.payload : void 0,
            t.meta.arg.originalArgs,
            'baseQueryMeta' in t.meta ? t.meta.baseQueryMeta : void 0,
            r
          );
        }
        function hn(t, e, n) {
          var r = t[e];
          r && n(r);
        }
        function fn(t) {
          var e;
          return null !=
            (e = 'arg' in t ? t.arg.fixedCacheKey : t.fixedCacheKey)
            ? e
            : t.requestId;
        }
        function pn(t, e, n) {
          var r = t[fn(e)];
          r && n(r);
        }
        ((en = tn || (tn = {})).query = 'query'), (en.mutation = 'mutation');
        var gn = {};
        function mn(t) {
          var e = t.reducerPath,
            n = t.queryThunk,
            r = t.mutationThunk,
            i = t.context,
            o = i.endpointDefinitions,
            a = i.apiUid,
            s = i.extractRehydrationInfo,
            l = i.hasRehydrationInfo,
            u = t.assertTagType,
            c = t.config,
            d = oe(e + '/resetApiState'),
            h = se({
              name: e + '/queries',
              initialState: gn,
              reducers: {
                removeQueryResult: function (t, e) {
                  delete t[e.payload.queryCacheKey];
                },
                queryResultPatched: function (t, e) {
                  var n = e.payload,
                    r = n.queryCacheKey,
                    i = n.patches;
                  hn(t, r, function (t) {
                    t.data = Pt(t.data, i.concat());
                  });
                },
              },
              extraReducers: function (t) {
                t.addCase(n.pending, function (t, e) {
                  var n,
                    r = e.meta,
                    i = e.meta.arg;
                  i.subscribe &&
                    (null != t[(n = i.queryCacheKey)] ||
                      (t[n] = {
                        status: Te.uninitialized,
                        endpointName: i.endpointName,
                      })),
                    hn(t, i.queryCacheKey, function (t) {
                      (t.status = Te.pending),
                        (t.requestId = r.requestId),
                        void 0 !== i.originalArgs &&
                          (t.originalArgs = i.originalArgs),
                        (t.startedTimeStamp = r.startedTimeStamp);
                    });
                })
                  .addCase(n.fulfilled, function (t, e) {
                    var n = e.meta,
                      r = e.payload;
                    hn(t, n.arg.queryCacheKey, function (t) {
                      var e;
                      t.requestId === n.requestId &&
                        ((t.status = Te.fulfilled),
                        (t.data =
                          null ==
                            (e = o[n.arg.endpointName].structuralSharing) || e
                            ? Ye(t.data, r)
                            : r),
                        delete t.error,
                        (t.fulfilledTimeStamp = n.fulfilledTimeStamp));
                    });
                  })
                  .addCase(n.rejected, function (t, e) {
                    var n = e.meta,
                      r = n.condition,
                      i = n.arg,
                      o = n.requestId,
                      a = e.error,
                      s = e.payload;
                    hn(t, i.queryCacheKey, function (t) {
                      if (r);
                      else {
                        if (t.requestId !== o) return;
                        (t.status = Te.rejected), (t.error = null != s ? s : a);
                      }
                    });
                  })
                  .addMatcher(l, function (t, e) {
                    for (
                      var n = s(e).queries, r = 0, i = Object.entries(n);
                      r < i.length;
                      r++
                    ) {
                      var o = i[r],
                        a = o[0],
                        l = o[1];
                      ((null == l ? void 0 : l.status) !== Te.fulfilled &&
                        (null == l ? void 0 : l.status) !== Te.rejected) ||
                        (t[a] = l);
                    }
                  });
              },
            }),
            f = se({
              name: e + '/mutations',
              initialState: gn,
              reducers: {
                removeMutationResult: function (t, e) {
                  var n = fn(e.payload);
                  n in t && delete t[n];
                },
              },
              extraReducers: function (t) {
                t.addCase(r.pending, function (t, e) {
                  var n = e.meta,
                    r = e.meta,
                    i = r.requestId,
                    o = r.arg,
                    a = r.startedTimeStamp;
                  o.track &&
                    (t[fn(n)] = {
                      requestId: i,
                      status: Te.pending,
                      endpointName: o.endpointName,
                      startedTimeStamp: a,
                    });
                })
                  .addCase(r.fulfilled, function (t, e) {
                    var n = e.payload,
                      r = e.meta;
                    r.arg.track &&
                      pn(t, r, function (t) {
                        t.requestId === r.requestId &&
                          ((t.status = Te.fulfilled),
                          (t.data = n),
                          (t.fulfilledTimeStamp = r.fulfilledTimeStamp));
                      });
                  })
                  .addCase(r.rejected, function (t, e) {
                    var n = e.payload,
                      r = e.error,
                      i = e.meta;
                    i.arg.track &&
                      pn(t, i, function (t) {
                        t.requestId === i.requestId &&
                          ((t.status = Te.rejected),
                          (t.error = null != n ? n : r));
                      });
                  })
                  .addMatcher(l, function (t, e) {
                    for (
                      var n = s(e).mutations, r = 0, i = Object.entries(n);
                      r < i.length;
                      r++
                    ) {
                      var o = i[r],
                        a = o[0],
                        l = o[1];
                      ((null == l ? void 0 : l.status) !== Te.fulfilled &&
                        (null == l ? void 0 : l.status) !== Te.rejected) ||
                        a === (null == l ? void 0 : l.requestId) ||
                        (t[a] = l);
                    }
                  });
              },
            }),
            p = se({
              name: e + '/invalidation',
              initialState: gn,
              reducers: {},
              extraReducers: function (t) {
                t.addCase(h.actions.removeQueryResult, function (t, e) {
                  for (
                    var n = e.payload.queryCacheKey,
                      r = 0,
                      i = Object.values(t);
                    r < i.length;
                    r++
                  )
                    for (
                      var o = i[r], a = 0, s = Object.values(o);
                      a < s.length;
                      a++
                    ) {
                      var l = s[a],
                        u = l.indexOf(n);
                      -1 !== u && l.splice(u, 1);
                    }
                })
                  .addMatcher(l, function (t, e) {
                    for (
                      var n,
                        r,
                        i,
                        o,
                        a = s(e).provided,
                        l = 0,
                        u = Object.entries(a);
                      l < u.length;
                      l++
                    )
                      for (
                        var c = u[l],
                          d = c[0],
                          h = c[1],
                          f = 0,
                          p = Object.entries(h);
                        f < p.length;
                        f++
                      )
                        for (
                          var g = p[f],
                            m = g[0],
                            b = g[1],
                            y =
                              null !=
                              (o = (r = null != (n = t[d]) ? n : (t[d] = {}))[
                                (i = m || '__internal_without_id')
                              ])
                                ? o
                                : (r[i] = []),
                            v = 0,
                            x = b;
                          v < x.length;
                          v++
                        ) {
                          var _ = x[v];
                          y.includes(_) || y.push(_);
                        }
                  })
                  .addMatcher(me(ke(n), we(n)), function (t, e) {
                    for (
                      var n,
                        r,
                        i,
                        a,
                        s = dn(e, 'providesTags', o, u),
                        l = e.meta.arg.queryCacheKey,
                        c = 0,
                        d = s;
                      c < d.length;
                      c++
                    ) {
                      var h = d[c],
                        f = h.type,
                        p = h.id,
                        g =
                          null !=
                          (a = (r = null != (n = t[f]) ? n : (t[f] = {}))[
                            (i = p || '__internal_without_id')
                          ])
                            ? a
                            : (r[i] = []);
                      g.includes(l) || g.push(l);
                    }
                  });
              },
            }),
            g = se({
              name: e + '/subscriptions',
              initialState: gn,
              reducers: {
                updateSubscriptionOptions: function (t, e) {
                  var n,
                    r = e.payload,
                    i = r.queryCacheKey,
                    o = r.requestId,
                    a = r.options;
                  (null == (n = null == t ? void 0 : t[i]) ? void 0 : n[o]) &&
                    (t[i][o] = a);
                },
                unsubscribeQueryResult: function (t, e) {
                  var n = e.payload,
                    r = n.queryCacheKey,
                    i = n.requestId;
                  t[r] && delete t[r][i];
                },
              },
              extraReducers: function (t) {
                t.addCase(h.actions.removeQueryResult, function (t, e) {
                  delete t[e.payload.queryCacheKey];
                })
                  .addCase(n.pending, function (t, e) {
                    var n,
                      r,
                      i,
                      o,
                      a = e.meta,
                      s = a.arg,
                      l = a.requestId;
                    if (s.subscribe) {
                      var u =
                        null != (r = t[(n = s.queryCacheKey)])
                          ? r
                          : (t[n] = {});
                      u[l] =
                        null !=
                        (o = null != (i = s.subscriptionOptions) ? i : u[l])
                          ? o
                          : {};
                    }
                  })
                  .addCase(n.rejected, function (t, e) {
                    var n,
                      r,
                      i,
                      o,
                      a = e.meta,
                      s = a.condition,
                      l = a.arg,
                      u = a.requestId;
                    if ((e.error, e.payload, s && l.subscribe)) {
                      var c =
                        null != (r = t[(n = l.queryCacheKey)])
                          ? r
                          : (t[n] = {});
                      c[u] =
                        null !=
                        (o = null != (i = l.subscriptionOptions) ? i : c[u])
                          ? o
                          : {};
                    }
                  })
                  .addMatcher(l, function (t) {
                    return He({}, t);
                  });
              },
            }),
            m = se({
              name: e + '/config',
              initialState: He(
                {
                  online:
                    'undefined' == typeof navigator ||
                    void 0 === navigator.onLine ||
                    navigator.onLine,
                  focused:
                    'undefined' == typeof document ||
                    'hidden' !== document.visibilityState,
                  middlewareRegistered: !1,
                },
                c
              ),
              reducers: {
                middlewareRegistered: function (t, e) {
                  var n = e.payload;
                  t.middlewareRegistered =
                    ('conflict' !== t.middlewareRegistered && a === n) ||
                    'conflict';
                },
              },
              extraReducers: function (t) {
                t.addCase(an, function (t) {
                  t.online = !0;
                })
                  .addCase(sn, function (t) {
                    t.online = !1;
                  })
                  .addCase(rn, function (t) {
                    t.focused = !0;
                  })
                  .addCase(on, function (t) {
                    t.focused = !1;
                  })
                  .addMatcher(l, function (t) {
                    return He({}, t);
                  });
              },
            }),
            b = Nt({
              queries: h.reducer,
              mutations: f.reducer,
              provided: p.reducer,
              subscriptions: g.reducer,
              config: m.reducer,
            });
          return {
            reducer: function (t, e) {
              return b(d.match(e) ? void 0 : t, e);
            },
            actions: qe(
              He(He(He(He({}, m.actions), h.actions), g.actions), f.actions),
              {
                unsubscribeMutationResult: f.actions.removeMutationResult,
                resetApiState: d,
              }
            ),
          };
        }
        var bn = Symbol.for('RTKQ/skipToken'),
          yn = { status: Te.uninitialized },
          vn = Et(yn, function () {}),
          xn = Et(yn, function () {});
        var _n = function (t) {
          var e = t.endpointName,
            n = t.queryArgs;
          return (
            e +
            '(' +
            JSON.stringify(n, function (t, e) {
              return ne(e)
                ? Object.keys(e)
                    .sort()
                    .reduce(function (t, n) {
                      return (t[n] = e[n]), t;
                    }, {})
                : e;
            }) +
            ')'
          );
        };
        function wn() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return function (e) {
            var n = Ce(function (t) {
                var n, r;
                return null == (r = e.extractRehydrationInfo)
                  ? void 0
                  : r.call(e, t, {
                      reducerPath: null != (n = e.reducerPath) ? n : 'api',
                    });
              }),
              r = qe(
                He(
                  {
                    reducerPath: 'api',
                    serializeQueryArgs: _n,
                    keepUnusedDataFor: 60,
                    refetchOnMountOrArgChange: !1,
                    refetchOnFocus: !1,
                    refetchOnReconnect: !1,
                  },
                  e
                ),
                {
                  extractRehydrationInfo: n,
                  tagTypes: ze([], e.tagTypes || []),
                }
              ),
              i = {
                endpointDefinitions: {},
                batch: function (t) {
                  t();
                },
                apiUid: le(),
                extractRehydrationInfo: n,
                hasRehydrationInfo: Ce(function (t) {
                  return null != n(t);
                }),
              },
              o = {
                injectEndpoints: function (t) {
                  for (
                    var e = t.endpoints({
                        query: function (t) {
                          return qe(He({}, t), { type: tn.query });
                        },
                        mutation: function (t) {
                          return qe(He({}, t), { type: tn.mutation });
                        },
                      }),
                      n = 0,
                      r = Object.entries(e);
                    n < r.length;
                    n++
                  ) {
                    var s = r[n],
                      l = s[0],
                      u = s[1];
                    if (t.overrideExisting || !(l in i.endpointDefinitions)) {
                      i.endpointDefinitions[l] = u;
                      for (var c = 0, d = a; c < d.length; c++)
                        d[c].injectEndpoint(l, u);
                    }
                  }
                  return o;
                },
                enhanceEndpoints: function (t) {
                  var e = t.addTagTypes,
                    n = t.endpoints;
                  if (e)
                    for (var a = 0, s = e; a < s.length; a++) {
                      var l = s[a];
                      r.tagTypes.includes(l) || r.tagTypes.push(l);
                    }
                  if (n)
                    for (var u = 0, c = Object.entries(n); u < c.length; u++) {
                      var d = c[u],
                        h = d[0],
                        f = d[1];
                      'function' == typeof f
                        ? f(i.endpointDefinitions[h])
                        : Object.assign(i.endpointDefinitions[h] || {}, f);
                    }
                  return o;
                },
              },
              a = t.map(function (t) {
                return t.init(o, r, i);
              });
            return o.injectEndpoints({ endpoints: e.endpoints });
          };
        }
        var kn = function (t) {
            var e = t.reducerPath,
              n = t.api,
              r = t.context,
              i = n.internalActions,
              o = i.removeQueryResult,
              a = i.unsubscribeQueryResult;
            return function (t) {
              var i = {};
              return function (o) {
                return function (l) {
                  var u,
                    c = o(l);
                  if (a.match(l)) {
                    var d = t.getState()[e];
                    s(
                      (_ = l.payload.queryCacheKey),
                      null == (u = d.queries[_]) ? void 0 : u.endpointName,
                      t,
                      d.config
                    );
                  }
                  if (n.util.resetApiState.match(l))
                    for (var h = 0, f = Object.entries(i); h < f.length; h++) {
                      var p = f[h],
                        g = p[0],
                        m = p[1];
                      m && clearTimeout(m), delete i[g];
                    }
                  if (r.hasRehydrationInfo(l)) {
                    d = t.getState()[e];
                    for (
                      var b = r.extractRehydrationInfo(l).queries,
                        y = 0,
                        v = Object.entries(b);
                      y < v.length;
                      y++
                    ) {
                      var x = v[y],
                        _ = x[0],
                        w = x[1];
                      s(_, null == w ? void 0 : w.endpointName, t, d.config);
                    }
                  }
                  return c;
                };
              };
              function s(t, n, a, s) {
                var l,
                  u = r.endpointDefinitions[n],
                  c =
                    null != (l = null == u ? void 0 : u.keepUnusedDataFor)
                      ? l
                      : s.keepUnusedDataFor,
                  d = i[t];
                d && clearTimeout(d),
                  (i[t] = setTimeout(function () {
                    var n = a.getState()[e].subscriptions[t];
                    (n && 0 !== Object.keys(n).length) ||
                      a.dispatch(o({ queryCacheKey: t })),
                      delete i[t];
                  }, 1e3 * c));
              }
            };
          },
          Sn = function (t) {
            var e = t.reducerPath,
              n = t.context,
              r = t.context.endpointDefinitions,
              i = t.mutationThunk,
              o = t.api,
              a = t.assertTagType,
              s = t.refetchQuery,
              l = o.internalActions.removeQueryResult;
            return function (t) {
              return function (e) {
                return function (n) {
                  var s = e(n);
                  return (
                    me(ke(i), we(i))(n) && u(dn(n, 'invalidatesTags', r, a), t),
                    o.util.invalidateTags.match(n) &&
                      u(ln(n.payload, void 0, void 0, void 0, void 0, a), t),
                    s
                  );
                };
              };
            };
            function u(t, r) {
              var i = r.getState(),
                a = i[e],
                u = o.util.selectInvalidatedBy(i, t);
              n.batch(function () {
                for (var t = 0, e = Array.from(u.values()); t < e.length; t++) {
                  var n = e[t].queryCacheKey,
                    i = a.queries[n],
                    o = a.subscriptions[n];
                  i &&
                    o &&
                    (0 === Object.keys(o).length
                      ? r.dispatch(l({ queryCacheKey: n }))
                      : i.status !== Te.uninitialized && r.dispatch(s(i, n)));
                }
              });
            }
          },
          Mn = function (t) {
            var e = t.reducerPath,
              n = t.queryThunk,
              r = t.api,
              i = t.refetchQuery;
            return function (t) {
              var a = {};
              return function (e) {
                return function (i) {
                  var o = e(i);
                  return (
                    (r.internalActions.updateSubscriptionOptions.match(i) ||
                      r.internalActions.unsubscribeQueryResult.match(i)) &&
                      l(i.payload, t),
                    (n.pending.match(i) ||
                      (n.rejected.match(i) && i.meta.condition)) &&
                      l(i.meta.arg, t),
                    (n.fulfilled.match(i) ||
                      (n.rejected.match(i) && !i.meta.condition)) &&
                      s(i.meta.arg, t),
                    r.util.resetApiState.match(i) &&
                      (function () {
                        for (var t = 0, e = Object.keys(a); t < e.length; t++)
                          u(e[t]);
                      })(),
                    o
                  );
                };
              };
              function s(t, n) {
                var r = t.queryCacheKey,
                  s = n.getState()[e],
                  l = s.queries[r],
                  u = s.subscriptions[r];
                if (l && l.status !== Te.uninitialized) {
                  var c = o(u);
                  if (Number.isFinite(c)) {
                    var d = a[r];
                    (null == d ? void 0 : d.timeout) &&
                      (clearTimeout(d.timeout), (d.timeout = void 0));
                    var h = Date.now() + c,
                      f = (a[r] = {
                        nextPollTimestamp: h,
                        pollingInterval: c,
                        timeout: setTimeout(function () {
                          (f.timeout = void 0), n.dispatch(i(l, r));
                        }, c),
                      });
                  }
                }
              }
              function l(t, n) {
                var r = t.queryCacheKey,
                  i = n.getState()[e],
                  l = i.queries[r],
                  c = i.subscriptions[r];
                if (l && l.status !== Te.uninitialized) {
                  var d = o(c);
                  if (Number.isFinite(d)) {
                    var h = a[r],
                      f = Date.now() + d;
                    (!h || f < h.nextPollTimestamp) &&
                      s({ queryCacheKey: r }, n);
                  } else u(r);
                }
              }
              function u(t) {
                var e = a[t];
                (null == e ? void 0 : e.timeout) && clearTimeout(e.timeout),
                  delete a[t];
              }
            };
            function o(t) {
              void 0 === t && (t = {});
              for (
                var e = Number.POSITIVE_INFINITY, n = 0, r = Object.values(t);
                n < r.length;
                n++
              ) {
                var i = r[n];
                i.pollingInterval && (e = Math.min(i.pollingInterval, e));
              }
              return e;
            }
          },
          Pn = function (t) {
            var e = t.reducerPath,
              n = t.context,
              r = t.api,
              i = t.refetchQuery,
              o = r.internalActions.removeQueryResult;
            return function (t) {
              return function (e) {
                return function (n) {
                  var r = e(n);
                  return (
                    rn.match(n) && a(t, 'refetchOnFocus'),
                    an.match(n) && a(t, 'refetchOnReconnect'),
                    r
                  );
                };
              };
            };
            function a(t, r) {
              var a = t.getState()[e],
                s = a.queries,
                l = a.subscriptions;
              n.batch(function () {
                for (var e = 0, n = Object.keys(l); e < n.length; e++) {
                  var u = n[e],
                    c = s[u],
                    d = l[u];
                  d &&
                    c &&
                    (Object.values(d).some(function (t) {
                      return !0 === t[r];
                    }) ||
                      (Object.values(d).every(function (t) {
                        return void 0 === t[r];
                      }) &&
                        a.config[r])) &&
                    (0 === Object.keys(d).length
                      ? t.dispatch(o({ queryCacheKey: u }))
                      : c.status !== Te.uninitialized && t.dispatch(i(c, u)));
                }
              });
            }
          },
          En = new Error('Promise never resolved before cacheEntryRemoved.'),
          Cn = function (t) {
            var e = t.api,
              n = t.reducerPath,
              r = t.context,
              i = t.queryThunk,
              o = t.mutationThunk,
              a = Se(i),
              s = Se(o),
              l = ke(i, o);
            return function (t) {
              var u = {};
              return function (r) {
                return function (d) {
                  var h = t.getState(),
                    f = r(d),
                    p = (function (t) {
                      return a(t)
                        ? t.meta.arg.queryCacheKey
                        : s(t)
                        ? t.meta.requestId
                        : e.internalActions.removeQueryResult.match(t)
                        ? t.payload.queryCacheKey
                        : e.internalActions.removeMutationResult.match(t)
                        ? fn(t.payload)
                        : '';
                    })(d);
                  if (i.pending.match(d)) {
                    var g = h[n].queries[p],
                      m = t.getState()[n].queries[p];
                    !g &&
                      m &&
                      c(
                        d.meta.arg.endpointName,
                        d.meta.arg.originalArgs,
                        p,
                        t,
                        d.meta.requestId
                      );
                  } else if (o.pending.match(d))
                    (m = t.getState()[n].mutations[p]) &&
                      c(
                        d.meta.arg.endpointName,
                        d.meta.arg.originalArgs,
                        p,
                        t,
                        d.meta.requestId
                      );
                  else if (l(d))
                    (null == (_ = u[p]) ? void 0 : _.valueResolved) &&
                      (_.valueResolved({
                        data: d.payload,
                        meta: d.meta.baseQueryMeta,
                      }),
                      delete _.valueResolved);
                  else if (
                    e.internalActions.removeQueryResult.match(d) ||
                    e.internalActions.removeMutationResult.match(d)
                  )
                    (_ = u[p]) && (delete u[p], _.cacheEntryRemoved());
                  else if (e.util.resetApiState.match(d))
                    for (var b = 0, y = Object.entries(u); b < y.length; b++) {
                      var v = y[b],
                        x = v[0],
                        _ = v[1];
                      delete u[x], _.cacheEntryRemoved();
                    }
                  return f;
                };
              };
              function c(t, n, i, o, a) {
                var s = r.endpointDefinitions[t],
                  l = null == s ? void 0 : s.onCacheEntryAdded;
                if (l) {
                  var c = {},
                    d = new Promise(function (t) {
                      c.cacheEntryRemoved = t;
                    }),
                    h = Promise.race([
                      new Promise(function (t) {
                        c.valueResolved = t;
                      }),
                      d.then(function () {
                        throw En;
                      }),
                    ]);
                  h.catch(function () {}), (u[i] = c);
                  var f = e.endpoints[t].select(s.type === tn.query ? n : i),
                    p = o.dispatch(function (t, e, n) {
                      return n;
                    }),
                    g = qe(He({}, o), {
                      getCacheEntry: function () {
                        return f(o.getState());
                      },
                      requestId: a,
                      extra: p,
                      updateCachedData:
                        s.type === tn.query
                          ? function (r) {
                              return o.dispatch(
                                e.util.updateQueryData(t, n, r)
                              );
                            }
                          : void 0,
                      cacheDataLoaded: h,
                      cacheEntryRemoved: d,
                    }),
                    m = l(n, g);
                  Promise.resolve(m).catch(function (t) {
                    if (t !== En) throw t;
                  });
                }
              }
            };
          },
          On = function (t) {
            var e = t.api,
              n = t.context,
              r = t.queryThunk,
              i = t.mutationThunk,
              o = xe(r, i),
              a = _e(r, i),
              s = ke(r, i);
            return function (t) {
              var r = {};
              return function (i) {
                return function (l) {
                  var u,
                    c,
                    d,
                    h = i(l);
                  if (o(l)) {
                    var f = l.meta,
                      p = f.requestId,
                      g = f.arg,
                      m = g.endpointName,
                      b = g.originalArgs,
                      y = n.endpointDefinitions[m],
                      v = null == y ? void 0 : y.onQueryStarted;
                    if (v) {
                      var x = {},
                        _ = new Promise(function (t, e) {
                          (x.resolve = t), (x.reject = e);
                        });
                      _.catch(function () {}), (r[p] = x);
                      var w = e.endpoints[m].select(
                          y.type === tn.query ? b : p
                        ),
                        k = t.dispatch(function (t, e, n) {
                          return n;
                        }),
                        S = qe(He({}, t), {
                          getCacheEntry: function () {
                            return w(t.getState());
                          },
                          requestId: p,
                          extra: k,
                          updateCachedData:
                            y.type === tn.query
                              ? function (n) {
                                  return t.dispatch(
                                    e.util.updateQueryData(m, b, n)
                                  );
                                }
                              : void 0,
                          queryFulfilled: _,
                        });
                      v(b, S);
                    }
                  } else if (s(l)) {
                    var M = l.meta,
                      P = ((p = M.requestId), M.baseQueryMeta);
                    null == (u = r[p]) ||
                      u.resolve({ data: l.payload, meta: P }),
                      delete r[p];
                  } else if (a(l)) {
                    var E = l.meta,
                      C = ((p = E.requestId), E.rejectedWithValue);
                    (P = E.baseQueryMeta),
                      null == (d = r[p]) ||
                        d.reject({
                          error: null != (c = l.payload) ? c : l.error,
                          isUnhandledError: !C,
                          meta: P,
                        }),
                      delete r[p];
                  }
                  return h;
                };
              };
            };
          },
          Dn = function (t) {
            var e = t.api,
              n = t.context.apiUid;
            return (
              t.reducerPath,
              function (t) {
                var r = !1;
                return function (i) {
                  return function (o) {
                    r ||
                      ((r = !0),
                      t.dispatch(e.internalActions.middlewareRegistered(n)));
                    var a = i(o);
                    return (
                      e.util.resetApiState.match(o) &&
                        t.dispatch(e.internalActions.middlewareRegistered(n)),
                      a
                    );
                  };
                };
              }
            );
          };
        function Tn(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          Object.assign.apply(Object, ze([t], e));
        }
        var Rn = Symbol(),
          An = function () {
            return {
              name: Rn,
              init: function (t, e, n) {
                var r = e.baseQuery,
                  i = (e.tagTypes, e.reducerPath),
                  o = e.serializeQueryArgs,
                  a = e.keepUnusedDataFor,
                  s = e.refetchOnMountOrArgChange,
                  l = e.refetchOnFocus,
                  u = e.refetchOnReconnect;
                !(function () {
                  function t(e) {
                    if (!C(e)) return e;
                    if (Array.isArray(e)) return e.map(t);
                    if (z(e))
                      return new Map(
                        Array.from(e.entries()).map(function (e) {
                          return [e[0], t(e[1])];
                        })
                      );
                    if (I(e)) return new Set(Array.from(e).map(t));
                    var n = Object.create(Object.getPrototypeOf(e));
                    for (var r in e) n[r] = t(e[r]);
                    return T(e, pt) && (n[pt] = e[pt]), n;
                  }
                  function e(e) {
                    return E(e) ? t(e) : e;
                  }
                  var n = 'add';
                  H('Patches', {
                    $: function (e, r) {
                      return (
                        r.forEach(function (r) {
                          for (
                            var i = r.path, o = r.op, a = e, s = 0;
                            s < i.length - 1;
                            s++
                          ) {
                            var l = D(a),
                              u = '' + i[s];
                            (0 !== l && 1 !== l) ||
                              ('__proto__' !== u && 'constructor' !== u) ||
                              P(24),
                              'function' == typeof a &&
                                'prototype' === u &&
                                P(24),
                              'object' != typeof (a = R(a, u)) &&
                                P(15, i.join('/'));
                          }
                          var c = D(a),
                            d = t(r.value),
                            h = i[i.length - 1];
                          switch (o) {
                            case 'replace':
                              switch (c) {
                                case 2:
                                  return a.set(h, d);
                                case 3:
                                  P(16);
                                default:
                                  return (a[h] = d);
                              }
                            case n:
                              switch (c) {
                                case 1:
                                  return '-' === h
                                    ? a.push(d)
                                    : a.splice(h, 0, d);
                                case 2:
                                  return a.set(h, d);
                                case 3:
                                  return a.add(d);
                                default:
                                  return (a[h] = d);
                              }
                            case 'remove':
                              switch (c) {
                                case 1:
                                  return a.splice(h, 1);
                                case 2:
                                  return a.delete(h);
                                case 3:
                                  return a.delete(r.value);
                                default:
                                  return delete a[h];
                              }
                            default:
                              P(17, o);
                          }
                        }),
                        e
                      );
                    },
                    R: function (t, r, i, o) {
                      switch (t.i) {
                        case 0:
                        case 4:
                        case 2:
                          return (function (t, r, i, o) {
                            var a = t.t,
                              s = t.o;
                            O(t.D, function (t, l) {
                              var u = R(a, t),
                                c = R(s, t),
                                d = l ? (T(a, t) ? 'replace' : n) : 'remove';
                              if (u !== c || 'replace' !== d) {
                                var h = r.concat(t);
                                i.push(
                                  'remove' === d
                                    ? { op: d, path: h }
                                    : { op: d, path: h, value: c }
                                ),
                                  o.push(
                                    d === n
                                      ? { op: 'remove', path: h }
                                      : 'remove' === d
                                      ? { op: n, path: h, value: e(u) }
                                      : { op: 'replace', path: h, value: e(u) }
                                  );
                              }
                            });
                          })(t, r, i, o);
                        case 5:
                        case 1:
                          return (function (t, r, i, o) {
                            var a = t.t,
                              s = t.D,
                              l = t.o;
                            if (l.length < a.length) {
                              var u = [l, a];
                              (a = u[0]), (l = u[1]);
                              var c = [o, i];
                              (i = c[0]), (o = c[1]);
                            }
                            for (var d = 0; d < a.length; d++)
                              if (s[d] && l[d] !== a[d]) {
                                var h = r.concat([d]);
                                i.push({
                                  op: 'replace',
                                  path: h,
                                  value: e(l[d]),
                                }),
                                  o.push({
                                    op: 'replace',
                                    path: h,
                                    value: e(a[d]),
                                  });
                              }
                            for (var f = a.length; f < l.length; f++) {
                              var p = r.concat([f]);
                              i.push({ op: n, path: p, value: e(l[f]) });
                            }
                            a.length < l.length &&
                              o.push({
                                op: 'replace',
                                path: r.concat(['length']),
                                value: a.length,
                              });
                          })(t, r, i, o);
                        case 3:
                          return (function (t, e, r, i) {
                            var o = t.t,
                              a = t.o,
                              s = 0;
                            o.forEach(function (t) {
                              if (!a.has(t)) {
                                var o = e.concat([s]);
                                r.push({ op: 'remove', path: o, value: t }),
                                  i.unshift({ op: n, path: o, value: t });
                              }
                              s++;
                            }),
                              (s = 0),
                              a.forEach(function (t) {
                                if (!o.has(t)) {
                                  var a = e.concat([s]);
                                  r.push({ op: n, path: a, value: t }),
                                    i.unshift({
                                      op: 'remove',
                                      path: a,
                                      value: t,
                                    });
                                }
                                s++;
                              });
                          })(t, r, i, o);
                      }
                    },
                    M: function (t, e, n, r) {
                      n.push({
                        op: 'replace',
                        path: [],
                        value: e === ft ? void 0 : e,
                      }),
                        r.push({ op: 'replace', path: [], value: t });
                    },
                  });
                })();
                var c = function (t) {
                  return t;
                };
                Object.assign(t, {
                  reducerPath: i,
                  endpoints: {},
                  internalActions: {
                    onOnline: an,
                    onOffline: sn,
                    onFocus: rn,
                    onFocusLost: on,
                  },
                  util: {},
                });
                var d = (function (t) {
                    var e = this,
                      n = t.reducerPath,
                      r = t.baseQuery,
                      i = t.context.endpointDefinitions,
                      o = t.serializeQueryArgs,
                      a = t.api,
                      s = function (t, n) {
                        return Ue(e, [t, n], function (t, e) {
                          var n,
                            o,
                            a,
                            s,
                            u,
                            c,
                            d = e.signal,
                            h = e.rejectWithValue,
                            f = e.fulfillWithValue,
                            p = e.dispatch,
                            g = e.getState,
                            m = e.extra;
                          return Le(this, function (e) {
                            switch (e.label) {
                              case 0:
                                (n = i[t.endpointName]), (e.label = 1);
                              case 1:
                                return (
                                  e.trys.push([1, 7, , 8]),
                                  (o = cn),
                                  (a = void 0),
                                  (s = {
                                    signal: d,
                                    dispatch: p,
                                    getState: g,
                                    extra: m,
                                    endpoint: t.endpointName,
                                    type: t.type,
                                    forced:
                                      'query' === t.type ? l(t, g()) : void 0,
                                  }),
                                  n.query
                                    ? [
                                        4,
                                        r(
                                          n.query(t.originalArgs),
                                          s,
                                          n.extraOptions
                                        ),
                                      ]
                                    : [3, 3]
                                );
                              case 2:
                                return (
                                  (a = e.sent()),
                                  n.transformResponse &&
                                    (o = n.transformResponse),
                                  [3, 5]
                                );
                              case 3:
                                return [
                                  4,
                                  n.queryFn(
                                    t.originalArgs,
                                    s,
                                    n.extraOptions,
                                    function (t) {
                                      return r(t, s, n.extraOptions);
                                    }
                                  ),
                                ];
                              case 4:
                                (a = e.sent()), (e.label = 5);
                              case 5:
                                if (a.error) throw new nn(a.error, a.meta);
                                return (
                                  (u = f),
                                  [4, o(a.data, a.meta, t.originalArgs)]
                                );
                              case 6:
                                return [
                                  2,
                                  u.apply(void 0, [
                                    e.sent(),
                                    {
                                      fulfilledTimeStamp: Date.now(),
                                      baseQueryMeta: a.meta,
                                    },
                                  ]),
                                ];
                              case 7:
                                if ((c = e.sent()) instanceof nn)
                                  return [
                                    2,
                                    h(c.value, { baseQueryMeta: c.meta }),
                                  ];
                                throw (console.error(c), c);
                              case 8:
                                return [2];
                            }
                          });
                        });
                      };
                    function l(t, e) {
                      var r,
                        i,
                        o,
                        a,
                        s =
                          null == (i = null == (r = e[n]) ? void 0 : r.queries)
                            ? void 0
                            : i[t.queryCacheKey],
                        l =
                          null == (o = e[n])
                            ? void 0
                            : o.config.refetchOnMountOrArgChange,
                        u = null == s ? void 0 : s.fulfilledTimeStamp,
                        c = null != (a = t.forceRefetch) ? a : t.subscribe && l;
                      return (
                        !!c &&
                        (!0 === c ||
                          (Number(new Date()) - Number(u)) / 1e3 >= c)
                      );
                    }
                    var u = fe(n + '/executeQuery', s, {
                      getPendingMeta: function () {
                        return { startedTimeStamp: Date.now() };
                      },
                      condition: function (t, e) {
                        var r,
                          i,
                          o = (0, e.getState)(),
                          a =
                            null ==
                            (i = null == (r = o[n]) ? void 0 : r.queries)
                              ? void 0
                              : i[t.queryCacheKey],
                          s = null == a ? void 0 : a.fulfilledTimeStamp;
                        return !(
                          'pending' === (null == a ? void 0 : a.status) ||
                          (!l(t, o) && s)
                        );
                      },
                      dispatchConditionRejection: !0,
                    });
                    function c(t) {
                      return function (e) {
                        var n, r;
                        return (
                          (null ==
                          (r =
                            null == (n = null == e ? void 0 : e.meta)
                              ? void 0
                              : n.arg)
                            ? void 0
                            : r.endpointName) === t
                        );
                      };
                    }
                    return {
                      queryThunk: u,
                      mutationThunk: fe(n + '/executeMutation', s, {
                        getPendingMeta: function () {
                          return { startedTimeStamp: Date.now() };
                        },
                      }),
                      prefetch: function (t, e, n) {
                        return function (r, i) {
                          var o =
                              (function (t) {
                                return 'force' in t;
                              })(n) && n.force,
                            s =
                              (function (t) {
                                return 'ifOlderThan' in t;
                              })(n) && n.ifOlderThan,
                            l = function (n) {
                              return (
                                void 0 === n && (n = !0),
                                a.endpoints[t].initiate(e, { forceRefetch: n })
                              );
                            },
                            u = a.endpoints[t].select(e)(i());
                          if (o) r(l());
                          else if (s) {
                            var c = null == u ? void 0 : u.fulfilledTimeStamp;
                            if (!c) return void r(l());
                            (Number(new Date()) - Number(new Date(c))) / 1e3 >=
                              s && r(l());
                          } else r(l(!1));
                        };
                      },
                      updateQueryData: function (t, e, n) {
                        return function (r, i) {
                          var o,
                            s,
                            l = a.endpoints[t].select(e)(i()),
                            u = {
                              patches: [],
                              inversePatches: [],
                              undo: function () {
                                return r(
                                  a.util.patchQueryData(t, e, u.inversePatches)
                                );
                              },
                            };
                          if (l.status === Te.uninitialized) return u;
                          if ('data' in l)
                            if (C(l.data)) {
                              var c = Mt(l.data, n),
                                d = c[1],
                                h = c[2];
                              (o = u.patches).push.apply(o, d),
                                (s = u.inversePatches).push.apply(s, h);
                            } else {
                              var f = n(l.data);
                              u.patches.push({
                                op: 'replace',
                                path: [],
                                value: f,
                              }),
                                u.inversePatches.push({
                                  op: 'replace',
                                  path: [],
                                  value: l.data,
                                });
                            }
                          return r(a.util.patchQueryData(t, e, u.patches)), u;
                        };
                      },
                      patchQueryData: function (t, e, n) {
                        return function (r) {
                          var s = i[t];
                          r(
                            a.internalActions.queryResultPatched({
                              queryCacheKey: o({
                                queryArgs: e,
                                endpointDefinition: s,
                                endpointName: t,
                              }),
                              patches: n,
                            })
                          );
                        };
                      },
                      buildMatchThunkActions: function (t, e) {
                        return {
                          matchPending: be(xe(t), c(e)),
                          matchFulfilled: be(ke(t), c(e)),
                          matchRejected: be(_e(t), c(e)),
                        };
                      },
                    };
                  })({
                    baseQuery: r,
                    reducerPath: i,
                    context: n,
                    api: t,
                    serializeQueryArgs: o,
                  }),
                  h = d.queryThunk,
                  f = d.mutationThunk,
                  p = d.patchQueryData,
                  g = d.updateQueryData,
                  m = d.prefetch,
                  b = d.buildMatchThunkActions,
                  y = mn({
                    context: n,
                    queryThunk: h,
                    mutationThunk: f,
                    reducerPath: i,
                    assertTagType: c,
                    config: {
                      refetchOnFocus: l,
                      refetchOnReconnect: u,
                      refetchOnMountOrArgChange: s,
                      keepUnusedDataFor: a,
                      reducerPath: i,
                    },
                  }),
                  v = y.reducer,
                  x = y.actions;
                Tn(t.util, {
                  patchQueryData: p,
                  updateQueryData: g,
                  prefetch: m,
                  resetApiState: x.resetApiState,
                }),
                  Tn(t.internalActions, x),
                  Object.defineProperty(t.util, 'updateQueryResult', {
                    get: function () {
                      return t.util.updateQueryData;
                    },
                  }),
                  Object.defineProperty(t.util, 'patchQueryResult', {
                    get: function () {
                      return t.util.patchQueryData;
                    },
                  });
                var _ = (function (t) {
                    var e = t.reducerPath,
                      n = t.queryThunk,
                      r = { invalidateTags: oe(e + '/invalidateTags') },
                      i = [Dn, kn, Sn, Mn, Pn, Cn, On].map(function (e) {
                        return e(qe(He({}, t), { refetchQuery: o }));
                      });
                    return {
                      middleware: function (t) {
                        return function (n) {
                          var r = Ft.apply(
                            void 0,
                            i.map(function (e) {
                              return e(t);
                            })
                          )(n);
                          return function (i) {
                            return t.getState()[e] ? r(i) : n(i);
                          };
                        };
                      },
                      actions: r,
                    };
                    function o(t, e, r) {
                      return (
                        void 0 === r && (r = {}),
                        n(
                          He(
                            {
                              type: 'query',
                              endpointName: t.endpointName,
                              originalArgs: t.originalArgs,
                              subscribe: !1,
                              forceRefetch: !0,
                              queryCacheKey: e,
                            },
                            r
                          )
                        )
                      );
                    }
                  })({
                    reducerPath: i,
                    context: n,
                    queryThunk: h,
                    mutationThunk: f,
                    api: t,
                    assertTagType: c,
                  }),
                  w = _.middleware,
                  k = _.actions;
                Tn(t.util, k), Tn(t, { reducer: v, middleware: w });
                var S = (function (t) {
                    var e = t.serializeQueryArgs,
                      n = t.reducerPath;
                    return {
                      buildQuerySelector: function (t, n) {
                        return function (o) {
                          var a = Ae(i, function (r) {
                            var i, a;
                            return null !=
                              (a =
                                o === bn ||
                                null == (i = null == r ? void 0 : r.queries)
                                  ? void 0
                                  : i[
                                      e({
                                        queryArgs: o,
                                        endpointDefinition: n,
                                        endpointName: t,
                                      })
                                    ])
                              ? a
                              : vn;
                          });
                          return Ae(a, r);
                        };
                      },
                      buildMutationSelector: function () {
                        return function (t) {
                          var e, n;
                          n =
                            'object' == typeof t
                              ? null != (e = fn(t))
                                ? e
                                : bn
                              : t;
                          var o = Ae(i, function (t) {
                            var e, r;
                            return null !=
                              (r =
                                n === bn ||
                                null == (e = null == t ? void 0 : t.mutations)
                                  ? void 0
                                  : e[n])
                              ? r
                              : xn;
                          });
                          return Ae(o, r);
                        };
                      },
                      selectInvalidatedBy: function (t, e) {
                        for (
                          var r, i = t[n], o = new Set(), a = 0, s = e.map(un);
                          a < s.length;
                          a++
                        ) {
                          var l = s[a],
                            u = i.provided[l.type];
                          if (u)
                            for (
                              var c = 0,
                                d =
                                  null !=
                                  (r =
                                    void 0 !== l.id
                                      ? u[l.id]
                                      : Qe(Object.values(u)))
                                    ? r
                                    : [];
                              c < d.length;
                              c++
                            ) {
                              var h = d[c];
                              o.add(h);
                            }
                        }
                        return Qe(
                          Array.from(o.values()).map(function (t) {
                            var e = i.queries[t];
                            return e
                              ? [
                                  {
                                    queryCacheKey: t,
                                    endpointName: e.endpointName,
                                    originalArgs: e.originalArgs,
                                  },
                                ]
                              : [];
                          })
                        );
                      },
                    };
                    function r(t) {
                      return He(He({}, t), {
                        status: (e = t.status),
                        isUninitialized: e === Te.uninitialized,
                        isLoading: e === Te.pending,
                        isSuccess: e === Te.fulfilled,
                        isError: e === Te.rejected,
                      });
                      var e;
                    }
                    function i(t) {
                      return t[n];
                    }
                  })({ serializeQueryArgs: o, reducerPath: i }),
                  M = S.buildQuerySelector,
                  A = S.buildMutationSelector,
                  L = S.selectInvalidatedBy;
                Tn(t.util, { selectInvalidatedBy: L });
                var N = (function (t) {
                    var e = t.serializeQueryArgs,
                      n = t.queryThunk,
                      r = t.mutationThunk,
                      i = t.api,
                      o = t.context,
                      a = {},
                      s = {},
                      l = i.internalActions,
                      u = l.unsubscribeQueryResult,
                      c = l.removeMutationResult,
                      d = l.updateSubscriptionOptions;
                    return {
                      buildInitiateQuery: function (t, r) {
                        var o = function (s, l) {
                          var c = void 0 === l ? {} : l,
                            h = c.subscribe,
                            f = void 0 === h || h,
                            p = c.forceRefetch,
                            g = c.subscriptionOptions;
                          return function (l, c) {
                            var h = e({
                                queryArgs: s,
                                endpointDefinition: r,
                                endpointName: t,
                              }),
                              m = n({
                                type: 'query',
                                subscribe: f,
                                forceRefetch: p,
                                subscriptionOptions: g,
                                endpointName: t,
                                originalArgs: s,
                                queryCacheKey: h,
                              }),
                              b = l(m),
                              y = b.requestId,
                              v = b.abort,
                              x = Object.assign(
                                Promise.all([a[h], b]).then(function () {
                                  return i.endpoints[t].select(s)(c());
                                }),
                                {
                                  arg: s,
                                  requestId: y,
                                  subscriptionOptions: g,
                                  queryCacheKey: h,
                                  abort: v,
                                  unwrap: function () {
                                    return Ue(this, null, function () {
                                      var t;
                                      return Le(this, function (e) {
                                        switch (e.label) {
                                          case 0:
                                            return [4, x];
                                          case 1:
                                            if ((t = e.sent()).isError)
                                              throw t.error;
                                            return [2, t.data];
                                        }
                                      });
                                    });
                                  },
                                  refetch: function () {
                                    l(
                                      o(s, { subscribe: !1, forceRefetch: !0 })
                                    );
                                  },
                                  unsubscribe: function () {
                                    f &&
                                      l(u({ queryCacheKey: h, requestId: y }));
                                  },
                                  updateSubscriptionOptions: function (e) {
                                    (x.subscriptionOptions = e),
                                      l(
                                        d({
                                          endpointName: t,
                                          requestId: y,
                                          queryCacheKey: h,
                                          options: e,
                                        })
                                      );
                                  },
                                }
                              );
                            return (
                              a[h] ||
                                ((a[h] = x),
                                x.then(function () {
                                  delete a[h];
                                })),
                              x
                            );
                          };
                        };
                        return o;
                      },
                      buildInitiateMutation: function (t) {
                        return function (e, n) {
                          var i = void 0 === n ? {} : n,
                            o = i.track,
                            a = void 0 === o || o,
                            l = i.fixedCacheKey;
                          return function (n, i) {
                            var o = r({
                                type: 'mutation',
                                endpointName: t,
                                originalArgs: e,
                                track: a,
                                fixedCacheKey: l,
                              }),
                              u = n(o),
                              d = u.requestId,
                              h = u.abort,
                              f = u.unwrap,
                              p = u
                                .unwrap()
                                .then(function (t) {
                                  return { data: t };
                                })
                                .catch(function (t) {
                                  return { error: t };
                                }),
                              g = function () {
                                n(c({ requestId: d, fixedCacheKey: l }));
                              },
                              m = Object.assign(p, {
                                arg: u.arg,
                                requestId: d,
                                abort: h,
                                unwrap: f,
                                unsubscribe: g,
                                reset: g,
                              });
                            return (
                              (s[d] = m),
                              m.then(function () {
                                delete s[d];
                              }),
                              l &&
                                ((s[l] = m),
                                m.then(function () {
                                  s[l] === m && delete s[l];
                                })),
                              m
                            );
                          };
                        };
                      },
                      getRunningOperationPromises: function () {
                        return ze(
                          ze([], Object.values(a)),
                          Object.values(s)
                        ).filter(function (t) {
                          return !!t;
                        });
                      },
                      getRunningOperationPromise: function (t, n) {
                        var r = o.endpointDefinitions[t];
                        if (r.type === tn.query) {
                          var i = e({
                            queryArgs: n,
                            endpointDefinition: r,
                            endpointName: t,
                          });
                          return a[i];
                        }
                        return s[n];
                      },
                    };
                  })({
                    queryThunk: h,
                    mutationThunk: f,
                    api: t,
                    serializeQueryArgs: o,
                    context: n,
                  }),
                  F = N.buildInitiateQuery,
                  j = N.buildInitiateMutation,
                  V = N.getRunningOperationPromises,
                  B = N.getRunningOperationPromise;
                return (
                  Tn(t.util, {
                    getRunningOperationPromises: V,
                    getRunningOperationPromise: B,
                  }),
                  {
                    name: Rn,
                    injectEndpoint: function (e, n) {
                      var r,
                        i = t;
                      null != (r = i.endpoints)[e] || (r[e] = {}),
                        n.type !== tn.query
                          ? (function (t) {
                              return t.type === tn.mutation;
                            })(n) &&
                            Tn(
                              i.endpoints[e],
                              { select: A(), initiate: j(e) },
                              b(f, e)
                            )
                          : Tn(
                              i.endpoints[e],
                              { select: M(e, n), initiate: F(e, n) },
                              b(h, e)
                            );
                    },
                  }
                );
              },
            };
          },
          Ln =
            (An(),
            function (t, e) {
              for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
                t[i] = e[n];
              return t;
            }),
          zn = Object.defineProperty,
          In = Object.defineProperties,
          Nn = Object.getOwnPropertyDescriptors,
          Fn = Object.getOwnPropertySymbols,
          jn = Object.prototype.hasOwnProperty,
          Vn = Object.prototype.propertyIsEnumerable,
          Bn = function (t, e, n) {
            return e in t
              ? zn(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (t[e] = n);
          },
          Wn = function (t, e) {
            for (var n in e || (e = {})) jn.call(e, n) && Bn(t, n, e[n]);
            if (Fn)
              for (var r = 0, i = Fn(e); r < i.length; r++)
                (n = i[r]), Vn.call(e, n) && Bn(t, n, e[n]);
            return t;
          },
          Hn = function (t, e) {
            return In(t, Nn(e));
          };
        function qn(t, e, n, i) {
          var o = (0, r.useMemo)(
              function () {
                return {
                  queryArgs: t,
                  serialized:
                    'object' == typeof t
                      ? e({
                          queryArgs: t,
                          endpointDefinition: n,
                          endpointName: i,
                        })
                      : t,
                };
              },
              [t, e, n, i]
            ),
            a = (0, r.useRef)(o);
          return (
            (0, r.useEffect)(
              function () {
                a.current.serialized !== o.serialized && (a.current = o);
              },
              [o]
            ),
            a.current.serialized === o.serialized ? a.current.queryArgs : t
          );
        }
        var $n = Symbol();
        function Un(t) {
          var e = (0, r.useRef)(t);
          return (
            (0, r.useEffect)(
              function () {
                S(e.current, t) || (e.current = t);
              },
              [t]
            ),
            S(e.current, t) ? e.current : t
          );
        }
        var Qn,
          Kn =
            'undefined' != typeof window &&
            void 0 !== window.document &&
            void 0 !== window.document.createElement
              ? r.useLayoutEffect
              : r.useEffect,
          Yn = function (t) {
            return t;
          },
          Xn = function (t) {
            return t;
          },
          Gn = function (t) {
            return t.isUninitialized
              ? Hn(Wn({}, t), {
                  isUninitialized: !1,
                  isFetching: !0,
                  isLoading: void 0 === t.data,
                  status: Te.pending,
                })
              : t;
          };
        function Zn(t) {
          return t.replace(t[0], t[0].toUpperCase());
        }
        function Jn(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          Object.assign.apply(Object, Ln([t], e));
        }
        !(function (t) {
          (t.query = 'query'), (t.mutation = 'mutation');
        })(Qn || (Qn = {}));
        var tr = Symbol(),
          er = wn(
            An(),
            (function (t) {
              var e = {},
                n = e.batch,
                o = void 0 === n ? i.unstable_batchedUpdates : n,
                a = e.useDispatch,
                s = void 0 === a ? w : a,
                l = e.useSelector,
                u = void 0 === l ? p : l,
                c = e.useStore,
                d = void 0 === c ? x : c,
                h = e.unstable__sideEffectsInRender,
                f = void 0 !== h && h;
              return {
                name: tr,
                init: function (t, e, n) {
                  var i = e.serializeQueryArgs,
                    a = t,
                    l = (function (t) {
                      var e = t.api,
                        n = t.moduleOptions,
                        i = n.batch,
                        o = n.useDispatch,
                        a = n.useSelector,
                        s = n.useStore,
                        l = n.unstable__sideEffectsInRender,
                        u = t.serializeQueryArgs,
                        c = t.context,
                        d = l
                          ? function (t) {
                              return t();
                            }
                          : r.useEffect;
                      return {
                        buildQueryHooks: function (t) {
                          var n = function (n, i) {
                              var s = void 0 === i ? {} : i,
                                l = s.refetchOnReconnect,
                                h = s.refetchOnFocus,
                                f = s.refetchOnMountOrArgChange,
                                p = s.skip,
                                g = void 0 !== p && p,
                                m = s.pollingInterval,
                                b = void 0 === m ? 0 : m,
                                y = e.endpoints[t].initiate,
                                v = o(),
                                x = qn(
                                  g ? bn : n,
                                  u,
                                  c.endpointDefinitions[t],
                                  t
                                ),
                                _ = Un({
                                  refetchOnReconnect: l,
                                  refetchOnFocus: h,
                                  pollingInterval: b,
                                }),
                                w = (0, r.useRef)(),
                                k = w.current || {},
                                S = k.queryCacheKey,
                                M = k.requestId,
                                P = a(function (t) {
                                  var n;
                                  return (
                                    !!S &&
                                    !!M &&
                                    !(null ==
                                    (n = t[e.reducerPath].subscriptions[S])
                                      ? void 0
                                      : n[M])
                                  );
                                });
                              return (
                                d(
                                  function () {
                                    w.current = void 0;
                                  },
                                  [P]
                                ),
                                d(
                                  function () {
                                    var t,
                                      e = w.current;
                                    if (x === bn)
                                      return (
                                        null == e || e.unsubscribe(),
                                        void (w.current = void 0)
                                      );
                                    var n =
                                      null == (t = w.current)
                                        ? void 0
                                        : t.subscriptionOptions;
                                    if (e && e.arg === x)
                                      _ !== n && e.updateSubscriptionOptions(_);
                                    else {
                                      null == e || e.unsubscribe();
                                      var r = v(
                                        y(x, {
                                          subscriptionOptions: _,
                                          forceRefetch: f,
                                        })
                                      );
                                      w.current = r;
                                    }
                                  },
                                  [v, y, f, x, _, P]
                                ),
                                (0, r.useEffect)(function () {
                                  return function () {
                                    var t;
                                    null == (t = w.current) || t.unsubscribe(),
                                      (w.current = void 0);
                                  };
                                }, []),
                                (0, r.useMemo)(function () {
                                  return {
                                    refetch: function () {
                                      var t;
                                      null == (t = w.current) || t.refetch();
                                    },
                                  };
                                }, [])
                              );
                            },
                            l = function (n) {
                              var a = void 0 === n ? {} : n,
                                s = a.refetchOnReconnect,
                                l = a.refetchOnFocus,
                                u = a.pollingInterval,
                                c = void 0 === u ? 0 : u,
                                h = e.endpoints[t].initiate,
                                f = o(),
                                p = (0, r.useState)($n),
                                g = p[0],
                                m = p[1],
                                b = (0, r.useRef)(),
                                y = Un({
                                  refetchOnReconnect: s,
                                  refetchOnFocus: l,
                                  pollingInterval: c,
                                });
                              d(
                                function () {
                                  var t,
                                    e,
                                    n =
                                      null == (t = b.current)
                                        ? void 0
                                        : t.subscriptionOptions;
                                  y !== n &&
                                    (null == (e = b.current) ||
                                      e.updateSubscriptionOptions(y));
                                },
                                [y]
                              );
                              var v = (0, r.useRef)(y);
                              d(
                                function () {
                                  v.current = y;
                                },
                                [y]
                              );
                              var x = (0, r.useCallback)(
                                function (t, e) {
                                  var n;
                                  return (
                                    void 0 === e && (e = !1),
                                    i(function () {
                                      var r;
                                      null == (r = b.current) ||
                                        r.unsubscribe(),
                                        (b.current = n =
                                          f(
                                            h(t, {
                                              subscriptionOptions: v.current,
                                              forceRefetch: !e,
                                            })
                                          )),
                                        m(t);
                                    }),
                                    n
                                  );
                                },
                                [f, h]
                              );
                              return (
                                (0, r.useEffect)(function () {
                                  return function () {
                                    var t;
                                    null ==
                                      (t = null == b ? void 0 : b.current) ||
                                      t.unsubscribe();
                                  };
                                }, []),
                                (0, r.useEffect)(
                                  function () {
                                    g === $n || b.current || x(g, !0);
                                  },
                                  [g, x]
                                ),
                                (0, r.useMemo)(
                                  function () {
                                    return [x, g];
                                  },
                                  [x, g]
                                )
                              );
                            },
                            f = function (n, i) {
                              var o = void 0 === i ? {} : i,
                                l = o.skip,
                                d = void 0 !== l && l,
                                f = o.selectFromResult,
                                p = void 0 === f ? Yn : f,
                                g = e.endpoints[t].select,
                                m = qn(
                                  d ? bn : n,
                                  u,
                                  c.endpointDefinitions[t],
                                  t
                                ),
                                b = (0, r.useRef)(),
                                y = (0, r.useMemo)(
                                  function () {
                                    return Ae(
                                      [
                                        g(m),
                                        function (t, e) {
                                          return e;
                                        },
                                        function (t) {
                                          return m;
                                        },
                                      ],
                                      h
                                    );
                                  },
                                  [g, m]
                                ),
                                v = (0, r.useMemo)(
                                  function () {
                                    return Ae([y], p);
                                  },
                                  [y, p]
                                ),
                                x = a(function (t) {
                                  return v(t, b.current);
                                }, S),
                                _ = s(),
                                w = y(_.getState(), b.current);
                              return (
                                Kn(
                                  function () {
                                    b.current = w;
                                  },
                                  [w]
                                ),
                                x
                              );
                            };
                          return {
                            useQueryState: f,
                            useQuerySubscription: n,
                            useLazyQuerySubscription: l,
                            useLazyQuery: function (t) {
                              var e = l(t),
                                n = e[0],
                                i = e[1],
                                o = f(i, Hn(Wn({}, t), { skip: i === $n })),
                                a = (0, r.useMemo)(
                                  function () {
                                    return { lastArg: i };
                                  },
                                  [i]
                                );
                              return (0, r.useMemo)(
                                function () {
                                  return [n, o, a];
                                },
                                [n, o, a]
                              );
                            },
                            useQuery: function (t, e) {
                              var i = n(t, e),
                                o = f(
                                  t,
                                  Wn(
                                    {
                                      selectFromResult:
                                        t === bn ||
                                        (null == e ? void 0 : e.skip)
                                          ? void 0
                                          : Gn,
                                    },
                                    e
                                  )
                                );
                              return (0, r.useMemo)(
                                function () {
                                  return Wn(Wn({}, o), i);
                                },
                                [o, i]
                              );
                            },
                          };
                        },
                        buildMutationHook: function (t) {
                          return function (n) {
                            var s = void 0 === n ? {} : n,
                              l = s.selectFromResult,
                              u = void 0 === l ? Xn : l,
                              c = s.fixedCacheKey,
                              d = e.endpoints[t],
                              h = d.select,
                              f = d.initiate,
                              p = o(),
                              g = (0, r.useState)(),
                              m = g[0],
                              b = g[1];
                            (0, r.useEffect)(
                              function () {
                                return function () {
                                  (null == m ? void 0 : m.arg.fixedCacheKey) ||
                                    null == m ||
                                    m.reset();
                                };
                              },
                              [m]
                            );
                            var y = (0, r.useCallback)(
                                function (t) {
                                  var e = p(f(t, { fixedCacheKey: c }));
                                  return b(e), e;
                                },
                                [p, f, c]
                              ),
                              v = (m || {}).requestId,
                              x = (0, r.useMemo)(
                                function () {
                                  return Ae(
                                    [
                                      h({
                                        fixedCacheKey: c,
                                        requestId:
                                          null == m ? void 0 : m.requestId,
                                      }),
                                    ],
                                    u
                                  );
                                },
                                [h, m, u, c]
                              ),
                              _ = a(x, S),
                              w =
                                null == c
                                  ? null == m
                                    ? void 0
                                    : m.arg.originalArgs
                                  : void 0,
                              k = (0, r.useCallback)(
                                function () {
                                  i(function () {
                                    m && b(void 0),
                                      c &&
                                        p(
                                          e.internalActions.removeMutationResult(
                                            { requestId: v, fixedCacheKey: c }
                                          )
                                        );
                                  });
                                },
                                [p, c, m, v]
                              ),
                              M = (0, r.useMemo)(
                                function () {
                                  return Hn(Wn({}, _), {
                                    originalArgs: w,
                                    reset: k,
                                  });
                                },
                                [_, w, k]
                              );
                            return (0, r.useMemo)(
                              function () {
                                return [y, M];
                              },
                              [y, M]
                            );
                          };
                        },
                        usePrefetch: function (t, n) {
                          var i = o(),
                            a = Un(n);
                          return (0, r.useCallback)(
                            function (n, r) {
                              return i(e.util.prefetch(t, n, Wn(Wn({}, a), r)));
                            },
                            [t, i, a]
                          );
                        },
                      };
                      function h(t, e, n) {
                        if (
                          (null == e ? void 0 : e.endpointName) &&
                          t.isUninitialized
                        ) {
                          var r = e.endpointName,
                            i = c.endpointDefinitions[r];
                          u({
                            queryArgs: e.originalArgs,
                            endpointDefinition: i,
                            endpointName: r,
                          }) ===
                            u({
                              queryArgs: n,
                              endpointDefinition: i,
                              endpointName: r,
                            }) && (e = void 0);
                        }
                        var o = t.isSuccess
                          ? t.data
                          : null == e
                          ? void 0
                          : e.data;
                        void 0 === o && (o = t.data);
                        var a = void 0 !== o,
                          s = t.isLoading,
                          l = !a && s,
                          d = t.isSuccess || (s && a);
                        return Hn(Wn({}, t), {
                          data: o,
                          currentData: t.data,
                          isFetching: s,
                          isLoading: l,
                          isSuccess: d,
                        });
                      }
                    })({
                      api: t,
                      moduleOptions: {
                        batch: o,
                        useDispatch: s,
                        useSelector: u,
                        useStore: d,
                        unstable__sideEffectsInRender: f,
                      },
                      serializeQueryArgs: i,
                      context: n,
                    }),
                    c = l.buildQueryHooks,
                    h = l.buildMutationHook,
                    p = l.usePrefetch;
                  return (
                    Jn(a, { usePrefetch: p }),
                    Jn(n, { batch: o }),
                    {
                      injectEndpoint: function (e, n) {
                        if (n.type === Qn.query) {
                          var r = c(e),
                            i = r.useQuery,
                            o = r.useLazyQuery,
                            s = r.useLazyQuerySubscription,
                            l = r.useQueryState,
                            u = r.useQuerySubscription;
                          Jn(a.endpoints[e], {
                            useQuery: i,
                            useLazyQuery: o,
                            useLazyQuerySubscription: s,
                            useQueryState: l,
                            useQuerySubscription: u,
                          }),
                            (t['use' + Zn(e) + 'Query'] = i),
                            (t['useLazy' + Zn(e) + 'Query'] = o);
                        } else if (
                          (function (t) {
                            return t.type === Qn.mutation;
                          })(n)
                        ) {
                          var d = h(e);
                          Jn(a.endpoints[e], { useMutation: d }),
                            (t['use' + Zn(e) + 'Mutation'] = d);
                        }
                      },
                    }
                  );
                },
              };
            })()
          );
        const nr = er({
            reducerPath: 'containerAPI',
            baseQuery: (function (t) {
              var e = this;
              void 0 === t && (t = {});
              var n = t,
                r = n.baseUrl,
                i = n.prepareHeaders,
                o =
                  void 0 === i
                    ? function (t) {
                        return t;
                      }
                    : i,
                a = n.fetchFn,
                s = void 0 === a ? Xe : a,
                l = n.paramsSerializer,
                u = $e(n, [
                  'baseUrl',
                  'prepareHeaders',
                  'fetchFn',
                  'paramsSerializer',
                ]);
              return (
                'undefined' == typeof fetch &&
                  s === Xe &&
                  console.warn(
                    'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
                  ),
                function (t, n) {
                  return Ue(e, null, function () {
                    var e,
                      i,
                      a,
                      c,
                      d,
                      h,
                      f,
                      p,
                      g,
                      m,
                      b,
                      y,
                      v,
                      x,
                      _,
                      w,
                      k,
                      S,
                      M,
                      P,
                      E,
                      C,
                      O,
                      D,
                      T,
                      R,
                      A,
                      L,
                      z,
                      I,
                      N,
                      F,
                      j,
                      V,
                      B,
                      W;
                    return Le(this, function (H) {
                      switch (H.label) {
                        case 0:
                          return (
                            (e = n.signal),
                            (i = n.getState),
                            (a = n.extra),
                            (c = n.endpoint),
                            (d = n.forced),
                            (h = n.type),
                            (g = (p = 'string' == typeof t ? { url: t } : t)
                              .url),
                            (m = p.method),
                            (b = void 0 === m ? 'GET' : m),
                            (y = p.headers),
                            (v = void 0 === y ? new Headers({}) : y),
                            (x = p.body),
                            (_ = void 0 === x ? void 0 : x),
                            (w = p.params),
                            (k = void 0 === w ? void 0 : w),
                            (S = p.responseHandler),
                            (M = void 0 === S ? 'json' : S),
                            (P = p.validateStatus),
                            (E = void 0 === P ? Ge : P),
                            (C = $e(p, [
                              'url',
                              'method',
                              'headers',
                              'body',
                              'params',
                              'responseHandler',
                              'validateStatus',
                            ])),
                            (O = He(
                              qe(He({}, u), { method: b, signal: e, body: _ }),
                              C
                            )),
                            (D = O),
                            [
                              4,
                              o(new Headers(Je(v)), {
                                getState: i,
                                extra: a,
                                endpoint: c,
                                forced: d,
                                type: h,
                              }),
                            ]
                          );
                        case 1:
                          (D.headers = H.sent()),
                            (T = function (t) {
                              return (
                                'object' == typeof t &&
                                (ne(t) ||
                                  Array.isArray(t) ||
                                  'function' == typeof t.toJSON)
                              );
                            }),
                            !O.headers.has('content-type') &&
                              T(_) &&
                              O.headers.set('content-type', 'application/json'),
                            T(_) &&
                              (function (t) {
                                var e, n;
                                return null ==
                                  (n =
                                    null == (e = t.get('content-type'))
                                      ? void 0
                                      : e.trim())
                                  ? void 0
                                  : n.startsWith('application/json');
                              })(O.headers) &&
                              (O.body = JSON.stringify(_)),
                            k &&
                              ((R = ~g.indexOf('?') ? '&' : '?'),
                              (A = l ? l(k) : new URLSearchParams(Je(k))),
                              (g += R + A)),
                            (g = (function (t, e) {
                              return t
                                ? e
                                  ? (function (t) {
                                      return new RegExp('(^|:)//').test(t);
                                    })(e)
                                    ? e
                                    : ((t = (function (t) {
                                        return t.replace(/\/$/, '');
                                      })(t)),
                                      t +
                                        '/' +
                                        (e = (function (t) {
                                          return t.replace(/^\//, '');
                                        })(e)))
                                  : t
                                : e;
                            })(r, g)),
                            (L = new Request(g, O)),
                            (z = L.clone()),
                            (f = { request: z }),
                            (H.label = 2);
                        case 2:
                          return H.trys.push([2, 4, , 5]), [4, s(L)];
                        case 3:
                          return (I = H.sent()), [3, 5];
                        case 4:
                          return (
                            (N = H.sent()),
                            [
                              2,
                              {
                                error: {
                                  status: 'FETCH_ERROR',
                                  error: String(N),
                                },
                                meta: f,
                              },
                            ]
                          );
                        case 5:
                          (F = I.clone()),
                            (f.response = F),
                            (V = ''),
                            (H.label = 6);
                        case 6:
                          return (
                            H.trys.push([6, 8, , 9]),
                            [
                              4,
                              Promise.all([
                                Ze(I, M).then(
                                  function (t) {
                                    return (j = t);
                                  },
                                  function (t) {
                                    return (B = t);
                                  }
                                ),
                                F.text().then(
                                  function (t) {
                                    return (V = t);
                                  },
                                  function () {}
                                ),
                              ]),
                            ]
                          );
                        case 7:
                          if ((H.sent(), B)) throw B;
                          return [3, 9];
                        case 8:
                          return (
                            (W = H.sent()),
                            [
                              2,
                              {
                                error: {
                                  status: 'PARSING_ERROR',
                                  originalStatus: I.status,
                                  data: V,
                                  error: String(W),
                                },
                                meta: f,
                              },
                            ]
                          );
                        case 9:
                          return [
                            2,
                            E(I, j)
                              ? { data: j, meta: f }
                              : {
                                  error: { status: I.status, data: j },
                                  meta: f,
                                },
                          ];
                      }
                    });
                  });
                }
              );
            })({ baseUrl: 'http://localhost:3000/' }),
            endpoints: (t) => ({
              getContainers: t.query({ query: () => 'container' }),
              getMemoryData: t.query({
                query: () => ({
                  url: 'metrics',
                  method: 'POST',
                  body: {
                    query: 'container_memory_usage_bytes',
                    secondsPassed: 90,
                    interval: 15,
                  },
                }),
              }),
              getCPUData: t.query({
                query: () => ({
                  url: 'metrics/cpu',
                  method: 'POST',
                  body: {
                    query:
                      'rate(container_cpu_user_seconds_total{id=~"/docker.*"}[30s])*100',
                    secondsPassed: 90,
                    interval: 15,
                  },
                }),
              }),
            }),
          }),
          {
            useGetContainersQuery: rr,
            useGetMemoryDataQuery: ir,
            useGetCPUDataQuery: or,
          } = nr,
          ar = se({
            name: 'containerStatus',
            initialState: {},
            reducers: {
              getContainerStates: (t, e) => {
                for (let n = 0; n < e.payload.length; n++) {
                  const r = e.payload[n].id;
                  e.payload[n].id in t ||
                    (t[r] = {
                      name: e.payload[n].name,
                      statusState: 'running' === e.payload[n].state,
                      dataState: !1,
                      memoryState: [],
                      cpuState: [],
                    });
                }
              },
              logStateButton: (t) => {
                console.log('newState: ', ot(t));
              },
              toggleStatus: (t, e) => {
                t[e.payload].statusState = !ot(t)[e.payload].statusState;
              },
              toggleData: (t, e) => {
                t[e.payload].dataState = !ot(t)[e.payload].dataState;
              },
              addMemory: (t, e) => {
                t[e.payload.metric.id.slice(8, 20)].memoryState =
                  e.payload.values;
              },
              deleteMemory: (t, e) => {
                t[`${e.payload}`].memoryState = [];
              },
              addCpu: (t, e) => {
                const n = e.payload.id.slice(8, 20);
                console.log('actualId in addCpu: ', n),
                  (t[n].cpuState = e.payload.values),
                  console.log('state: ', ot(t));
              },
              deleteCpu: (t, e) => {
                t[`${e.payload}`].cpuState = [];
              },
            },
          }),
          {
            getContainerStates: sr,
            logStateButton: lr,
            toggleStatus: ur,
            toggleData: cr,
            addMemory: dr,
            deleteMemory: hr,
            addCpu: fr,
            deleteCpu: pr,
          } = ar.actions,
          gr = ar.reducer,
          mr = (function (t) {
            var e,
              n = function (t) {
                return (function (t) {
                  void 0 === t && (t = {});
                  var e = t.thunk,
                    n = void 0 === e || e,
                    r = (t.immutableCheck, t.serializableCheck, new re());
                  return (
                    n &&
                      ((function (t) {
                        return 'boolean' == typeof t;
                      })(n)
                        ? r.push(Wt)
                        : r.push(Wt.withExtraArgument(n.extraArgument))),
                    r
                  );
                })(t);
              },
              r = t || {},
              i = r.reducer,
              o = void 0 === i ? void 0 : i,
              a = r.middleware,
              s = void 0 === a ? n() : a,
              l = r.devTools,
              u = void 0 === l || l,
              c = r.preloadedState,
              d = void 0 === c ? void 0 : c,
              h = r.enhancers,
              f = void 0 === h ? void 0 : h;
            if ('function' == typeof o) e = o;
            else {
              if (!ne(o))
                throw new Error(
                  '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
                );
              e = Nt(o);
            }
            var p = s;
            'function' == typeof p && (p = p(n));
            var g = jt.apply(void 0, p),
              m = Ft;
            u && (m = ee(Jt({ trace: !1 }, 'object' == typeof u && u)));
            var b = [g];
            return (
              Array.isArray(f)
                ? (b = $t([g], f))
                : 'function' == typeof f && (b = f(b)),
              It(e, d, m.apply(void 0, b))
            );
          })({
            reducer: { [nr.reducerPath]: nr.reducer, statusToggle: gr },
            middleware: (t) => t().concat(nr.middleware),
          }),
          br = (t) => {
            const { name: e, state: n, id: i } = t,
              o = w();
            let { data: a } = ir(),
              s = or().data;
            return (
              s && console.log('cpu:', s[0].id),
              r.createElement(
                'div',
                { className: 'container' },
                r.createElement('div', null, r.createElement('span', null, e)),
                r.createElement(
                  'div',
                  { className: 'btns' },
                  r.createElement(
                    'div',
                    { className: 'ea-btn' },
                    r.createElement(
                      'div',
                      { className: 'toggleText' },
                      'On/Off'
                    ),
                    r.createElement(
                      'label',
                      {
                        className: 'form-switch',
                        id: `onButton${i}`,
                        onChange: () => {
                          o(ur(i));
                        },
                      },
                      'running' === n
                        ? r.createElement('input', {
                            type: 'checkbox',
                            defaultChecked: !0,
                          })
                        : r.createElement('input', { type: 'checkbox' }),
                      r.createElement('i', null)
                    )
                  ),
                  r.createElement(
                    'div',
                    { className: 'ea-btn' },
                    r.createElement(
                      'div',
                      { className: 'toggleText' },
                      'Get Data'
                    ),
                    r.createElement(
                      'label',
                      {
                        className: 'form-switch',
                        id: `dataButton${i}`,
                        onChange: () => {
                          if ('running' === n) {
                            const t = ((t) => {
                                if (a)
                                  for (let e = 0; e < a.length; e++)
                                    if (a[e].metric.id.slice(8, 20) === t)
                                      return a[e];
                              })(i),
                              e = ((t) => {
                                if (s)
                                  for (let e = 0; e < s.length; e++)
                                    if (
                                      s &&
                                      s[e].id &&
                                      s[e].id.slice(8, 20) === t
                                    )
                                      return s[e];
                              })(i);
                            o(cr(i)),
                              document.getElementById(`dataCheckmark${i}`)
                                .checked
                                ? t && e && (o(dr(t)), o(fr(e)))
                                : i && (o(hr(i)), o(pr(i)));
                          } else console.log('Container not running');
                        },
                      },
                      r.createElement('input', {
                        id: `dataCheckmark${i}`,
                        type: 'checkbox',
                      }),
                      r.createElement('i', null)
                    )
                  )
                )
              )
            );
          },
          yr = () => {
            const { data: t, error: e, isLoading: n } = rr(),
              i = w();
            return (
              t && i(sr(t)),
              r.createElement(
                'div',
                { className: 'docker-container' },
                r.createElement('div', null, 'Docker Containers'),
                e
                  ? r.createElement(
                      r.Fragment,
                      null,
                      'Oh no, there was an error'
                    )
                  : n
                  ? r.createElement(r.Fragment, null, 'Loading...')
                  : t
                  ? r.createElement(
                      r.Fragment,
                      null,
                      t.map((t) =>
                        r.createElement(br, {
                          id: t.id,
                          name: t.name,
                          state: t.state,
                          key: 'key' + t.id,
                        })
                      )
                    )
                  : null
              )
            );
          };
        function vr() {
          const t = w();
          return r.createElement(
            'div',
            { className: 'header-component' },
            r.createElement(
              'button',
              {
                onClick: () => {
                  t(lr());
                },
              },
              'Log State'
            )
          );
        }
        const xr = () =>
          r.createElement(
            'div',
            { className: 'header-container' },
            r.createElement('img', { src: '../assets/transparentLogo.svg' }),
            r.createElement(vr, null)
          );
        function _r() {}
        const wr = (function () {
          let t = 0;
          return function () {
            return t++;
          };
        })();
        function kr(t) {
          return null == t;
        }
        function Sr(t) {
          if (Array.isArray && Array.isArray(t)) return !0;
          const e = Object.prototype.toString.call(t);
          return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6);
        }
        function Mr(t) {
          return (
            null !== t &&
            '[object Object]' === Object.prototype.toString.call(t)
          );
        }
        const Pr = (t) =>
          ('number' == typeof t || t instanceof Number) && isFinite(+t);
        function Er(t, e) {
          return Pr(t) ? t : e;
        }
        function Cr(t, e) {
          return void 0 === t ? e : t;
        }
        const Or = (t, e) =>
          'string' == typeof t && t.endsWith('%')
            ? (parseFloat(t) / 100) * e
            : +t;
        function Dr(t, e, n) {
          if (t && 'function' == typeof t.call) return t.apply(n, e);
        }
        function Tr(t, e, n, r) {
          let i, o, a;
          if (Sr(t))
            if (((o = t.length), r))
              for (i = o - 1; i >= 0; i--) e.call(n, t[i], i);
            else for (i = 0; i < o; i++) e.call(n, t[i], i);
          else if (Mr(t))
            for (a = Object.keys(t), o = a.length, i = 0; i < o; i++)
              e.call(n, t[a[i]], a[i]);
        }
        function Rr(t, e) {
          let n, r, i, o;
          if (!t || !e || t.length !== e.length) return !1;
          for (n = 0, r = t.length; n < r; ++n)
            if (
              ((i = t[n]),
              (o = e[n]),
              i.datasetIndex !== o.datasetIndex || i.index !== o.index)
            )
              return !1;
          return !0;
        }
        function Ar(t) {
          if (Sr(t)) return t.map(Ar);
          if (Mr(t)) {
            const e = Object.create(null),
              n = Object.keys(t),
              r = n.length;
            let i = 0;
            for (; i < r; ++i) e[n[i]] = Ar(t[n[i]]);
            return e;
          }
          return t;
        }
        function Lr(t) {
          return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
        }
        function zr(t, e, n, r) {
          if (!Lr(t)) return;
          const i = e[t],
            o = n[t];
          Mr(i) && Mr(o) ? Ir(i, o, r) : (e[t] = Ar(o));
        }
        function Ir(t, e, n) {
          const r = Sr(e) ? e : [e],
            i = r.length;
          if (!Mr(t)) return t;
          const o = (n = n || {}).merger || zr;
          for (let a = 0; a < i; ++a) {
            if (((e = r[a]), !Mr(e))) continue;
            const i = Object.keys(e);
            for (let r = 0, a = i.length; r < a; ++r) o(i[r], t, e, n);
          }
          return t;
        }
        function Nr(t, e) {
          return Ir(t, e, { merger: Fr });
        }
        function Fr(t, e, n) {
          if (!Lr(t)) return;
          const r = e[t],
            i = n[t];
          Mr(r) && Mr(i)
            ? Nr(r, i)
            : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Ar(i));
        }
        const jr = { '': (t) => t, x: (t) => t.x, y: (t) => t.y };
        function Vr(t, e) {
          const n =
            jr[e] ||
            (jr[e] = (function (t) {
              const e = (function (t) {
                const e = t.split('.'),
                  n = [];
                let r = '';
                for (const t of e)
                  (r += t),
                    r.endsWith('\\')
                      ? (r = r.slice(0, -1) + '.')
                      : (n.push(r), (r = ''));
                return n;
              })(t);
              return (t) => {
                for (const n of e) {
                  if ('' === n) break;
                  t = t && t[n];
                }
                return t;
              };
            })(e));
          return n(t);
        }
        function Br(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        const Wr = (t) => void 0 !== t,
          Hr = (t) => 'function' == typeof t,
          qr = (t, e) => {
            if (t.size !== e.size) return !1;
            for (const n of t) if (!e.has(n)) return !1;
            return !0;
          },
          $r = Math.PI,
          Ur = 2 * $r,
          Qr = Ur + $r,
          Kr = Number.POSITIVE_INFINITY,
          Yr = $r / 180,
          Xr = $r / 2,
          Gr = $r / 4,
          Zr = (2 * $r) / 3,
          Jr = Math.log10,
          ti = Math.sign;
        function ei(t) {
          const e = Math.round(t);
          t = ri(t, e, t / 1e3) ? e : t;
          const n = Math.pow(10, Math.floor(Jr(t))),
            r = t / n;
          return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
        }
        function ni(t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }
        function ri(t, e, n) {
          return Math.abs(t - e) < n;
        }
        function ii(t, e, n) {
          let r, i, o;
          for (r = 0, i = t.length; r < i; r++)
            (o = t[r][n]),
              isNaN(o) ||
                ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
        }
        function oi(t) {
          return t * ($r / 180);
        }
        function ai(t) {
          return t * (180 / $r);
        }
        function si(t) {
          if (!Pr(t)) return;
          let e = 1,
            n = 0;
          for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
          return n;
        }
        function li(t, e) {
          const n = e.x - t.x,
            r = e.y - t.y,
            i = Math.sqrt(n * n + r * r);
          let o = Math.atan2(r, n);
          return o < -0.5 * $r && (o += Ur), { angle: o, distance: i };
        }
        function ui(t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }
        function ci(t, e) {
          return ((t - e + Qr) % Ur) - $r;
        }
        function di(t) {
          return ((t % Ur) + Ur) % Ur;
        }
        function hi(t, e, n, r) {
          const i = di(t),
            o = di(e),
            a = di(n),
            s = di(o - i),
            l = di(a - i),
            u = di(i - o),
            c = di(i - a);
          return i === o || i === a || (r && o === a) || (s > l && u < c);
        }
        function fi(t, e, n) {
          return Math.max(e, Math.min(n, t));
        }
        function pi(t, e, n, r = 1e-6) {
          return t >= Math.min(e, n) - r && t <= Math.max(e, n) + r;
        }
        function gi(t, e, n) {
          n = n || ((n) => t[n] < e);
          let r,
            i = t.length - 1,
            o = 0;
          for (; i - o > 1; ) (r = (o + i) >> 1), n(r) ? (o = r) : (i = r);
          return { lo: o, hi: i };
        }
        const mi = (t, e, n, r) =>
            gi(t, n, r ? (r) => t[r][e] <= n : (r) => t[r][e] < n),
          bi = (t, e, n) => gi(t, n, (r) => t[r][e] >= n),
          yi = ['push', 'pop', 'shift', 'splice', 'unshift'];
        function vi(t, e) {
          const n = t._chartjs;
          if (!n) return;
          const r = n.listeners,
            i = r.indexOf(e);
          -1 !== i && r.splice(i, 1),
            r.length > 0 ||
              (yi.forEach((e) => {
                delete t[e];
              }),
              delete t._chartjs);
        }
        function xi(t) {
          const e = new Set();
          let n, r;
          for (n = 0, r = t.length; n < r; ++n) e.add(t[n]);
          return e.size === r ? t : Array.from(e);
        }
        const _i =
          'undefined' == typeof window
            ? function (t) {
                return t();
              }
            : window.requestAnimationFrame;
        function wi(t, e, n) {
          const r = n || ((t) => Array.prototype.slice.call(t));
          let i = !1,
            o = [];
          return function (...n) {
            (o = r(n)),
              i ||
                ((i = !0),
                _i.call(window, () => {
                  (i = !1), t.apply(e, o);
                }));
          };
        }
        const ki = (t) =>
            'start' === t ? 'left' : 'end' === t ? 'right' : 'center',
          Si = (t, e, n) => ('start' === t ? e : 'end' === t ? n : (e + n) / 2);
        function Mi(t, e, n) {
          const r = e.length;
          let i = 0,
            o = r;
          if (t._sorted) {
            const { iScale: a, _parsed: s } = t,
              l = a.axis,
              {
                min: u,
                max: c,
                minDefined: d,
                maxDefined: h,
              } = a.getUserBounds();
            d &&
              (i = fi(
                Math.min(
                  mi(s, a.axis, u).lo,
                  n ? r : mi(e, l, a.getPixelForValue(u)).lo
                ),
                0,
                r - 1
              )),
              (o = h
                ? fi(
                    Math.max(
                      mi(s, a.axis, c, !0).hi + 1,
                      n ? 0 : mi(e, l, a.getPixelForValue(c), !0).hi + 1
                    ),
                    i,
                    r
                  ) - i
                : r - i);
          }
          return { start: i, count: o };
        }
        function Pi(t) {
          const { xScale: e, yScale: n, _scaleRanges: r } = t,
            i = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
          if (!r) return (t._scaleRanges = i), !0;
          const o =
            r.xmin !== e.min ||
            r.xmax !== e.max ||
            r.ymin !== n.min ||
            r.ymax !== n.max;
          return Object.assign(r, i), o;
        }
        const Ei = (t) => 0 === t || 1 === t,
          Ci = (t, e, n) =>
            -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * Ur) / n),
          Oi = (t, e, n) =>
            Math.pow(2, -10 * t) * Math.sin(((t - e) * Ur) / n) + 1,
          Di = {
            linear: (t) => t,
            easeInQuad: (t) => t * t,
            easeOutQuad: (t) => -t * (t - 2),
            easeInOutQuad: (t) =>
              (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
            easeInCubic: (t) => t * t * t,
            easeOutCubic: (t) => (t -= 1) * t * t + 1,
            easeInOutCubic: (t) =>
              (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
            easeInQuart: (t) => t * t * t * t,
            easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
            easeInOutQuart: (t) =>
              (t /= 0.5) < 1
                ? 0.5 * t * t * t * t
                : -0.5 * ((t -= 2) * t * t * t - 2),
            easeInQuint: (t) => t * t * t * t * t,
            easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
            easeInOutQuint: (t) =>
              (t /= 0.5) < 1
                ? 0.5 * t * t * t * t * t
                : 0.5 * ((t -= 2) * t * t * t * t + 2),
            easeInSine: (t) => 1 - Math.cos(t * Xr),
            easeOutSine: (t) => Math.sin(t * Xr),
            easeInOutSine: (t) => -0.5 * (Math.cos($r * t) - 1),
            easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
            easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
            easeInOutExpo: (t) =>
              Ei(t)
                ? t
                : t < 0.5
                ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
            easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
            easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
            easeInOutCirc: (t) =>
              (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
            easeInElastic: (t) => (Ei(t) ? t : Ci(t, 0.075, 0.3)),
            easeOutElastic: (t) => (Ei(t) ? t : Oi(t, 0.075, 0.3)),
            easeInOutElastic(t) {
              const e = 0.1125;
              return Ei(t)
                ? t
                : t < 0.5
                ? 0.5 * Ci(2 * t, e, 0.45)
                : 0.5 + 0.5 * Oi(2 * t - 1, e, 0.45);
            },
            easeInBack(t) {
              const e = 1.70158;
              return t * t * ((e + 1) * t - e);
            },
            easeOutBack(t) {
              const e = 1.70158;
              return (t -= 1) * t * ((e + 1) * t + e) + 1;
            },
            easeInOutBack(t) {
              let e = 1.70158;
              return (t /= 0.5) < 1
                ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            },
            easeInBounce: (t) => 1 - Di.easeOutBounce(1 - t),
            easeOutBounce(t) {
              const e = 7.5625,
                n = 2.75;
              return t < 1 / n
                ? e * t * t
                : t < 2 / n
                ? e * (t -= 1.5 / n) * t + 0.75
                : t < 2.5 / n
                ? e * (t -= 2.25 / n) * t + 0.9375
                : e * (t -= 2.625 / n) * t + 0.984375;
            },
            easeInOutBounce: (t) =>
              t < 0.5
                ? 0.5 * Di.easeInBounce(2 * t)
                : 0.5 * Di.easeOutBounce(2 * t - 1) + 0.5,
          };
        function Ti(t) {
          return (t + 0.5) | 0;
        }
        const Ri = (t, e, n) => Math.max(Math.min(t, n), e);
        function Ai(t) {
          return Ri(Ti(2.55 * t), 0, 255);
        }
        function Li(t) {
          return Ri(Ti(255 * t), 0, 255);
        }
        function zi(t) {
          return Ri(Ti(t / 2.55) / 100, 0, 1);
        }
        function Ii(t) {
          return Ri(Ti(100 * t), 0, 100);
        }
        const Ni = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15,
          },
          Fi = [...'0123456789ABCDEF'],
          ji = (t) => Fi[15 & t],
          Vi = (t) => Fi[(240 & t) >> 4] + Fi[15 & t],
          Bi = (t) => (240 & t) >> 4 == (15 & t);
        const Wi =
          /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
        function Hi(t, e, n) {
          const r = e * Math.min(n, 1 - n),
            i = (e, i = (e + t / 30) % 12) =>
              n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
          return [i(0), i(8), i(4)];
        }
        function qi(t, e, n) {
          const r = (r, i = (r + t / 60) % 6) =>
            n - n * e * Math.max(Math.min(i, 4 - i, 1), 0);
          return [r(5), r(3), r(1)];
        }
        function $i(t, e, n) {
          const r = Hi(t, 1, 0.5);
          let i;
          for (
            e + n > 1 && ((i = 1 / (e + n)), (e *= i), (n *= i)), i = 0;
            i < 3;
            i++
          )
            (r[i] *= 1 - e - n), (r[i] += e);
          return r;
        }
        function Ui(t) {
          const e = t.r / 255,
            n = t.g / 255,
            r = t.b / 255,
            i = Math.max(e, n, r),
            o = Math.min(e, n, r),
            a = (i + o) / 2;
          let s, l, u;
          return (
            i !== o &&
              ((u = i - o),
              (l = a > 0.5 ? u / (2 - i - o) : u / (i + o)),
              (s = (function (t, e, n, r, i) {
                return t === i
                  ? (e - n) / r + (e < n ? 6 : 0)
                  : e === i
                  ? (n - t) / r + 2
                  : (t - e) / r + 4;
              })(e, n, r, u, i)),
              (s = 60 * s + 0.5)),
            [0 | s, l || 0, a]
          );
        }
        function Qi(t, e, n, r) {
          return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, r)).map(Li);
        }
        function Ki(t, e, n) {
          return Qi(Hi, t, e, n);
        }
        function Yi(t) {
          return ((t % 360) + 360) % 360;
        }
        const Xi = {
            x: 'dark',
            Z: 'light',
            Y: 're',
            X: 'blu',
            W: 'gr',
            V: 'medium',
            U: 'slate',
            A: 'ee',
            T: 'ol',
            S: 'or',
            B: 'ra',
            C: 'lateg',
            D: 'ights',
            R: 'in',
            Q: 'turquois',
            E: 'hi',
            P: 'ro',
            O: 'al',
            N: 'le',
            M: 'de',
            L: 'yello',
            F: 'en',
            K: 'ch',
            G: 'arks',
            H: 'ea',
            I: 'ightg',
            J: 'wh',
          },
          Gi = {
            OiceXe: 'f0f8ff',
            antiquewEte: 'faebd7',
            aqua: 'ffff',
            aquamarRe: '7fffd4',
            azuY: 'f0ffff',
            beige: 'f5f5dc',
            bisque: 'ffe4c4',
            black: '0',
            blanKedOmond: 'ffebcd',
            Xe: 'ff',
            XeviTet: '8a2be2',
            bPwn: 'a52a2a',
            burlywood: 'deb887',
            caMtXe: '5f9ea0',
            KartYuse: '7fff00',
            KocTate: 'd2691e',
            cSO: 'ff7f50',
            cSnflowerXe: '6495ed',
            cSnsilk: 'fff8dc',
            crimson: 'dc143c',
            cyan: 'ffff',
            xXe: '8b',
            xcyan: '8b8b',
            xgTMnPd: 'b8860b',
            xWay: 'a9a9a9',
            xgYF: '6400',
            xgYy: 'a9a9a9',
            xkhaki: 'bdb76b',
            xmagFta: '8b008b',
            xTivegYF: '556b2f',
            xSange: 'ff8c00',
            xScEd: '9932cc',
            xYd: '8b0000',
            xsOmon: 'e9967a',
            xsHgYF: '8fbc8f',
            xUXe: '483d8b',
            xUWay: '2f4f4f',
            xUgYy: '2f4f4f',
            xQe: 'ced1',
            xviTet: '9400d3',
            dAppRk: 'ff1493',
            dApskyXe: 'bfff',
            dimWay: '696969',
            dimgYy: '696969',
            dodgerXe: '1e90ff',
            fiYbrick: 'b22222',
            flSOwEte: 'fffaf0',
            foYstWAn: '228b22',
            fuKsia: 'ff00ff',
            gaRsbSo: 'dcdcdc',
            ghostwEte: 'f8f8ff',
            gTd: 'ffd700',
            gTMnPd: 'daa520',
            Way: '808080',
            gYF: '8000',
            gYFLw: 'adff2f',
            gYy: '808080',
            honeyMw: 'f0fff0',
            hotpRk: 'ff69b4',
            RdianYd: 'cd5c5c',
            Rdigo: '4b0082',
            ivSy: 'fffff0',
            khaki: 'f0e68c',
            lavFMr: 'e6e6fa',
            lavFMrXsh: 'fff0f5',
            lawngYF: '7cfc00',
            NmoncEffon: 'fffacd',
            ZXe: 'add8e6',
            ZcSO: 'f08080',
            Zcyan: 'e0ffff',
            ZgTMnPdLw: 'fafad2',
            ZWay: 'd3d3d3',
            ZgYF: '90ee90',
            ZgYy: 'd3d3d3',
            ZpRk: 'ffb6c1',
            ZsOmon: 'ffa07a',
            ZsHgYF: '20b2aa',
            ZskyXe: '87cefa',
            ZUWay: '778899',
            ZUgYy: '778899',
            ZstAlXe: 'b0c4de',
            ZLw: 'ffffe0',
            lime: 'ff00',
            limegYF: '32cd32',
            lRF: 'faf0e6',
            magFta: 'ff00ff',
            maPon: '800000',
            VaquamarRe: '66cdaa',
            VXe: 'cd',
            VScEd: 'ba55d3',
            VpurpN: '9370db',
            VsHgYF: '3cb371',
            VUXe: '7b68ee',
            VsprRggYF: 'fa9a',
            VQe: '48d1cc',
            VviTetYd: 'c71585',
            midnightXe: '191970',
            mRtcYam: 'f5fffa',
            mistyPse: 'ffe4e1',
            moccasR: 'ffe4b5',
            navajowEte: 'ffdead',
            navy: '80',
            Tdlace: 'fdf5e6',
            Tive: '808000',
            TivedBb: '6b8e23',
            Sange: 'ffa500',
            SangeYd: 'ff4500',
            ScEd: 'da70d6',
            pOegTMnPd: 'eee8aa',
            pOegYF: '98fb98',
            pOeQe: 'afeeee',
            pOeviTetYd: 'db7093',
            papayawEp: 'ffefd5',
            pHKpuff: 'ffdab9',
            peru: 'cd853f',
            pRk: 'ffc0cb',
            plum: 'dda0dd',
            powMrXe: 'b0e0e6',
            purpN: '800080',
            YbeccapurpN: '663399',
            Yd: 'ff0000',
            Psybrown: 'bc8f8f',
            PyOXe: '4169e1',
            saddNbPwn: '8b4513',
            sOmon: 'fa8072',
            sandybPwn: 'f4a460',
            sHgYF: '2e8b57',
            sHshell: 'fff5ee',
            siFna: 'a0522d',
            silver: 'c0c0c0',
            skyXe: '87ceeb',
            UXe: '6a5acd',
            UWay: '708090',
            UgYy: '708090',
            snow: 'fffafa',
            sprRggYF: 'ff7f',
            stAlXe: '4682b4',
            tan: 'd2b48c',
            teO: '8080',
            tEstN: 'd8bfd8',
            tomato: 'ff6347',
            Qe: '40e0d0',
            viTet: 'ee82ee',
            JHt: 'f5deb3',
            wEte: 'ffffff',
            wEtesmoke: 'f5f5f5',
            Lw: 'ffff00',
            LwgYF: '9acd32',
          };
        let Zi;
        const Ji =
            /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
          to = (t) =>
            t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
          eo = (t) =>
            t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
        function no(t, e, n) {
          if (t) {
            let r = Ui(t);
            (r[e] = Math.max(0, Math.min(r[e] + r[e] * n, 0 === e ? 360 : 1))),
              (r = Ki(r)),
              (t.r = r[0]),
              (t.g = r[1]),
              (t.b = r[2]);
          }
        }
        function ro(t, e) {
          return t ? Object.assign(e || {}, t) : t;
        }
        function io(t) {
          var e = { r: 0, g: 0, b: 0, a: 255 };
          return (
            Array.isArray(t)
              ? t.length >= 3 &&
                ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
                t.length > 3 && (e.a = Li(t[3])))
              : ((e = ro(t, { r: 0, g: 0, b: 0, a: 1 })).a = Li(e.a)),
            e
          );
        }
        function oo(t) {
          return 'r' === t.charAt(0)
            ? (function (t) {
                const e = Ji.exec(t);
                let n,
                  r,
                  i,
                  o = 255;
                if (e) {
                  if (e[7] !== n) {
                    const t = +e[7];
                    o = e[8] ? Ai(t) : Ri(255 * t, 0, 255);
                  }
                  return (
                    (n = +e[1]),
                    (r = +e[3]),
                    (i = +e[5]),
                    (n = 255 & (e[2] ? Ai(n) : Ri(n, 0, 255))),
                    (r = 255 & (e[4] ? Ai(r) : Ri(r, 0, 255))),
                    (i = 255 & (e[6] ? Ai(i) : Ri(i, 0, 255))),
                    { r: n, g: r, b: i, a: o }
                  );
                }
              })(t)
            : (function (t) {
                const e = Wi.exec(t);
                let n,
                  r = 255;
                if (!e) return;
                e[5] !== n && (r = e[6] ? Ai(+e[5]) : Li(+e[5]));
                const i = Yi(+e[2]),
                  o = +e[3] / 100,
                  a = +e[4] / 100;
                return (
                  (n =
                    'hwb' === e[1]
                      ? (function (t, e, n) {
                          return Qi($i, t, e, n);
                        })(i, o, a)
                      : 'hsv' === e[1]
                      ? (function (t, e, n) {
                          return Qi(qi, t, e, n);
                        })(i, o, a)
                      : Ki(i, o, a)),
                  { r: n[0], g: n[1], b: n[2], a: r }
                );
              })(t);
        }
        class ao {
          constructor(t) {
            if (t instanceof ao) return t;
            const e = typeof t;
            let n;
            var r, i, o;
            'object' === e
              ? (n = io(t))
              : 'string' === e &&
                ((o = (r = t).length),
                '#' === r[0] &&
                  (4 === o || 5 === o
                    ? (i = {
                        r: 255 & (17 * Ni[r[1]]),
                        g: 255 & (17 * Ni[r[2]]),
                        b: 255 & (17 * Ni[r[3]]),
                        a: 5 === o ? 17 * Ni[r[4]] : 255,
                      })
                    : (7 !== o && 9 !== o) ||
                      (i = {
                        r: (Ni[r[1]] << 4) | Ni[r[2]],
                        g: (Ni[r[3]] << 4) | Ni[r[4]],
                        b: (Ni[r[5]] << 4) | Ni[r[6]],
                        a: 9 === o ? (Ni[r[7]] << 4) | Ni[r[8]] : 255,
                      })),
                (n =
                  i ||
                  (function (t) {
                    Zi ||
                      ((Zi = (function () {
                        const t = {},
                          e = Object.keys(Gi),
                          n = Object.keys(Xi);
                        let r, i, o, a, s;
                        for (r = 0; r < e.length; r++) {
                          for (a = s = e[r], i = 0; i < n.length; i++)
                            (o = n[i]), (s = s.replace(o, Xi[o]));
                          (o = parseInt(Gi[a], 16)),
                            (t[s] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
                        }
                        return t;
                      })()),
                      (Zi.transparent = [0, 0, 0, 0]));
                    const e = Zi[t.toLowerCase()];
                    return (
                      e && {
                        r: e[0],
                        g: e[1],
                        b: e[2],
                        a: 4 === e.length ? e[3] : 255,
                      }
                    );
                  })(t) ||
                  oo(t))),
              (this._rgb = n),
              (this._valid = !!n);
          }
          get valid() {
            return this._valid;
          }
          get rgb() {
            var t = ro(this._rgb);
            return t && (t.a = zi(t.a)), t;
          }
          set rgb(t) {
            this._rgb = io(t);
          }
          rgbString() {
            return this._valid
              ? (function (t) {
                  return (
                    t &&
                    (t.a < 255
                      ? `rgba(${t.r}, ${t.g}, ${t.b}, ${zi(t.a)})`
                      : `rgb(${t.r}, ${t.g}, ${t.b})`)
                  );
                })(this._rgb)
              : void 0;
          }
          hexString() {
            return this._valid
              ? (function (t) {
                  var e = ((t) => Bi(t.r) && Bi(t.g) && Bi(t.b) && Bi(t.a))(t)
                    ? ji
                    : Vi;
                  return t
                    ? '#' +
                        e(t.r) +
                        e(t.g) +
                        e(t.b) +
                        ((t, e) => (t < 255 ? e(t) : ''))(t.a, e)
                    : void 0;
                })(this._rgb)
              : void 0;
          }
          hslString() {
            return this._valid
              ? (function (t) {
                  if (!t) return;
                  const e = Ui(t),
                    n = e[0],
                    r = Ii(e[1]),
                    i = Ii(e[2]);
                  return t.a < 255
                    ? `hsla(${n}, ${r}%, ${i}%, ${zi(t.a)})`
                    : `hsl(${n}, ${r}%, ${i}%)`;
                })(this._rgb)
              : void 0;
          }
          mix(t, e) {
            if (t) {
              const n = this.rgb,
                r = t.rgb;
              let i;
              const o = e === i ? 0.5 : e,
                a = 2 * o - 1,
                s = n.a - r.a,
                l = ((a * s == -1 ? a : (a + s) / (1 + a * s)) + 1) / 2;
              (i = 1 - l),
                (n.r = 255 & (l * n.r + i * r.r + 0.5)),
                (n.g = 255 & (l * n.g + i * r.g + 0.5)),
                (n.b = 255 & (l * n.b + i * r.b + 0.5)),
                (n.a = o * n.a + (1 - o) * r.a),
                (this.rgb = n);
            }
            return this;
          }
          interpolate(t, e) {
            return (
              t &&
                (this._rgb = (function (t, e, n) {
                  const r = eo(zi(t.r)),
                    i = eo(zi(t.g)),
                    o = eo(zi(t.b));
                  return {
                    r: Li(to(r + n * (eo(zi(e.r)) - r))),
                    g: Li(to(i + n * (eo(zi(e.g)) - i))),
                    b: Li(to(o + n * (eo(zi(e.b)) - o))),
                    a: t.a + n * (e.a - t.a),
                  };
                })(this._rgb, t._rgb, e)),
              this
            );
          }
          clone() {
            return new ao(this.rgb);
          }
          alpha(t) {
            return (this._rgb.a = Li(t)), this;
          }
          clearer(t) {
            return (this._rgb.a *= 1 - t), this;
          }
          greyscale() {
            const t = this._rgb,
              e = Ti(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
            return (t.r = t.g = t.b = e), this;
          }
          opaquer(t) {
            return (this._rgb.a *= 1 + t), this;
          }
          negate() {
            const t = this._rgb;
            return (
              (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
            );
          }
          lighten(t) {
            return no(this._rgb, 2, t), this;
          }
          darken(t) {
            return no(this._rgb, 2, -t), this;
          }
          saturate(t) {
            return no(this._rgb, 1, t), this;
          }
          desaturate(t) {
            return no(this._rgb, 1, -t), this;
          }
          rotate(t) {
            return (
              (function (t, e) {
                var n = Ui(t);
                (n[0] = Yi(n[0] + e)),
                  (n = Ki(n)),
                  (t.r = n[0]),
                  (t.g = n[1]),
                  (t.b = n[2]);
              })(this._rgb, t),
              this
            );
          }
        }
        function so(t) {
          return new ao(t);
        }
        function lo(t) {
          if (t && 'object' == typeof t) {
            const e = t.toString();
            return (
              '[object CanvasPattern]' === e || '[object CanvasGradient]' === e
            );
          }
          return !1;
        }
        function uo(t) {
          return lo(t) ? t : so(t);
        }
        function co(t) {
          return lo(t) ? t : so(t).saturate(0.5).darken(0.1).hexString();
        }
        const ho = Object.create(null),
          fo = Object.create(null);
        function po(t, e) {
          if (!e) return t;
          const n = e.split('.');
          for (let e = 0, r = n.length; e < r; ++e) {
            const r = n[e];
            t = t[r] || (t[r] = Object.create(null));
          }
          return t;
        }
        function go(t, e, n) {
          return 'string' == typeof e ? Ir(po(t, e), n) : Ir(po(t, ''), e);
        }
        var mo = new (class {
          constructor(t) {
            (this.animation = void 0),
              (this.backgroundColor = 'rgba(0,0,0,0.1)'),
              (this.borderColor = 'rgba(0,0,0,0.1)'),
              (this.color = '#666'),
              (this.datasets = {}),
              (this.devicePixelRatio = (t) =>
                t.chart.platform.getDevicePixelRatio()),
              (this.elements = {}),
              (this.events = [
                'mousemove',
                'mouseout',
                'click',
                'touchstart',
                'touchmove',
              ]),
              (this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: 'normal',
                lineHeight: 1.2,
                weight: null,
              }),
              (this.hover = {}),
              (this.hoverBackgroundColor = (t, e) => co(e.backgroundColor)),
              (this.hoverBorderColor = (t, e) => co(e.borderColor)),
              (this.hoverColor = (t, e) => co(e.color)),
              (this.indexAxis = 'x'),
              (this.interaction = {
                mode: 'nearest',
                intersect: !0,
                includeInvisible: !1,
              }),
              (this.maintainAspectRatio = !0),
              (this.onHover = null),
              (this.onClick = null),
              (this.parsing = !0),
              (this.plugins = {}),
              (this.responsive = !0),
              (this.scale = void 0),
              (this.scales = {}),
              (this.showLine = !0),
              (this.drawActiveElementsOnTop = !0),
              this.describe(t);
          }
          set(t, e) {
            return go(this, t, e);
          }
          get(t) {
            return po(this, t);
          }
          describe(t, e) {
            return go(fo, t, e);
          }
          override(t, e) {
            return go(ho, t, e);
          }
          route(t, e, n, r) {
            const i = po(this, t),
              o = po(this, n),
              a = '_' + e;
            Object.defineProperties(i, {
              [a]: { value: i[e], writable: !0 },
              [e]: {
                enumerable: !0,
                get() {
                  const t = this[a],
                    e = o[r];
                  return Mr(t) ? Object.assign({}, e, t) : Cr(t, e);
                },
                set(t) {
                  this[a] = t;
                },
              },
            });
          }
        })({
          _scriptable: (t) => !t.startsWith('on'),
          _indexable: (t) => 'events' !== t,
          hover: { _fallback: 'interaction' },
          interaction: { _scriptable: !1, _indexable: !1 },
        });
        function bo(t, e, n, r, i) {
          let o = e[i];
          return (
            o || ((o = e[i] = t.measureText(i).width), n.push(i)),
            o > r && (r = o),
            r
          );
        }
        function yo(t, e, n, r) {
          let i = ((r = r || {}).data = r.data || {}),
            o = (r.garbageCollect = r.garbageCollect || []);
          r.font !== e &&
            ((i = r.data = {}), (o = r.garbageCollect = []), (r.font = e)),
            t.save(),
            (t.font = e);
          let a = 0;
          const s = n.length;
          let l, u, c, d, h;
          for (l = 0; l < s; l++)
            if (((d = n[l]), null != d && !0 !== Sr(d))) a = bo(t, i, o, a, d);
            else if (Sr(d))
              for (u = 0, c = d.length; u < c; u++)
                (h = d[u]), null == h || Sr(h) || (a = bo(t, i, o, a, h));
          t.restore();
          const f = o.length / 2;
          if (f > n.length) {
            for (l = 0; l < f; l++) delete i[o[l]];
            o.splice(0, f);
          }
          return a;
        }
        function vo(t, e, n) {
          const r = t.currentDevicePixelRatio,
            i = 0 !== n ? Math.max(n / 2, 0.5) : 0;
          return Math.round((e - i) * r) / r + i;
        }
        function xo(t, e) {
          (e = e || t.getContext('2d')).save(),
            e.resetTransform(),
            e.clearRect(0, 0, t.width, t.height),
            e.restore();
        }
        function _o(t, e, n, r) {
          wo(t, e, n, r, null);
        }
        function wo(t, e, n, r, i) {
          let o, a, s, l, u, c;
          const d = e.pointStyle,
            h = e.rotation,
            f = e.radius;
          let p = (h || 0) * Yr;
          if (
            d &&
            'object' == typeof d &&
            ((o = d.toString()),
            '[object HTMLImageElement]' === o ||
              '[object HTMLCanvasElement]' === o)
          )
            return (
              t.save(),
              t.translate(n, r),
              t.rotate(p),
              t.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height),
              void t.restore()
            );
          if (!(isNaN(f) || f <= 0)) {
            switch ((t.beginPath(), d)) {
              default:
                i ? t.ellipse(n, r, i / 2, f, 0, 0, Ur) : t.arc(n, r, f, 0, Ur),
                  t.closePath();
                break;
              case 'triangle':
                t.moveTo(n + Math.sin(p) * f, r - Math.cos(p) * f),
                  (p += Zr),
                  t.lineTo(n + Math.sin(p) * f, r - Math.cos(p) * f),
                  (p += Zr),
                  t.lineTo(n + Math.sin(p) * f, r - Math.cos(p) * f),
                  t.closePath();
                break;
              case 'rectRounded':
                (u = 0.516 * f),
                  (l = f - u),
                  (a = Math.cos(p + Gr) * l),
                  (s = Math.sin(p + Gr) * l),
                  t.arc(n - a, r - s, u, p - $r, p - Xr),
                  t.arc(n + s, r - a, u, p - Xr, p),
                  t.arc(n + a, r + s, u, p, p + Xr),
                  t.arc(n - s, r + a, u, p + Xr, p + $r),
                  t.closePath();
                break;
              case 'rect':
                if (!h) {
                  (l = Math.SQRT1_2 * f),
                    (c = i ? i / 2 : l),
                    t.rect(n - c, r - l, 2 * c, 2 * l);
                  break;
                }
                p += Gr;
              case 'rectRot':
                (a = Math.cos(p) * f),
                  (s = Math.sin(p) * f),
                  t.moveTo(n - a, r - s),
                  t.lineTo(n + s, r - a),
                  t.lineTo(n + a, r + s),
                  t.lineTo(n - s, r + a),
                  t.closePath();
                break;
              case 'crossRot':
                p += Gr;
              case 'cross':
                (a = Math.cos(p) * f),
                  (s = Math.sin(p) * f),
                  t.moveTo(n - a, r - s),
                  t.lineTo(n + a, r + s),
                  t.moveTo(n + s, r - a),
                  t.lineTo(n - s, r + a);
                break;
              case 'star':
                (a = Math.cos(p) * f),
                  (s = Math.sin(p) * f),
                  t.moveTo(n - a, r - s),
                  t.lineTo(n + a, r + s),
                  t.moveTo(n + s, r - a),
                  t.lineTo(n - s, r + a),
                  (p += Gr),
                  (a = Math.cos(p) * f),
                  (s = Math.sin(p) * f),
                  t.moveTo(n - a, r - s),
                  t.lineTo(n + a, r + s),
                  t.moveTo(n + s, r - a),
                  t.lineTo(n - s, r + a);
                break;
              case 'line':
                (a = i ? i / 2 : Math.cos(p) * f),
                  (s = Math.sin(p) * f),
                  t.moveTo(n - a, r - s),
                  t.lineTo(n + a, r + s);
                break;
              case 'dash':
                t.moveTo(n, r),
                  t.lineTo(n + Math.cos(p) * f, r + Math.sin(p) * f);
            }
            t.fill(), e.borderWidth > 0 && t.stroke();
          }
        }
        function ko(t, e, n) {
          return (
            (n = n || 0.5),
            !e ||
              (t &&
                t.x > e.left - n &&
                t.x < e.right + n &&
                t.y > e.top - n &&
                t.y < e.bottom + n)
          );
        }
        function So(t, e) {
          t.save(),
            t.beginPath(),
            t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
            t.clip();
        }
        function Mo(t) {
          t.restore();
        }
        function Po(t, e, n, r, i) {
          if (!e) return t.lineTo(n.x, n.y);
          if ('middle' === i) {
            const r = (e.x + n.x) / 2;
            t.lineTo(r, e.y), t.lineTo(r, n.y);
          } else
            ('after' === i) != !!r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
          t.lineTo(n.x, n.y);
        }
        function Eo(t, e, n, r) {
          if (!e) return t.lineTo(n.x, n.y);
          t.bezierCurveTo(
            r ? e.cp1x : e.cp2x,
            r ? e.cp1y : e.cp2y,
            r ? n.cp2x : n.cp1x,
            r ? n.cp2y : n.cp1y,
            n.x,
            n.y
          );
        }
        function Co(t, e, n, r, i, o = {}) {
          const a = Sr(e) ? e : [e],
            s = o.strokeWidth > 0 && '' !== o.strokeColor;
          let l, u;
          for (
            t.save(),
              t.font = i.string,
              (function (t, e) {
                e.translation &&
                  t.translate(e.translation[0], e.translation[1]),
                  kr(e.rotation) || t.rotate(e.rotation),
                  e.color && (t.fillStyle = e.color),
                  e.textAlign && (t.textAlign = e.textAlign),
                  e.textBaseline && (t.textBaseline = e.textBaseline);
              })(t, o),
              l = 0;
            l < a.length;
            ++l
          )
            (u = a[l]),
              s &&
                (o.strokeColor && (t.strokeStyle = o.strokeColor),
                kr(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
                t.strokeText(u, n, r, o.maxWidth)),
              t.fillText(u, n, r, o.maxWidth),
              Oo(t, n, r, u, o),
              (r += i.lineHeight);
          t.restore();
        }
        function Oo(t, e, n, r, i) {
          if (i.strikethrough || i.underline) {
            const o = t.measureText(r),
              a = e - o.actualBoundingBoxLeft,
              s = e + o.actualBoundingBoxRight,
              l = n - o.actualBoundingBoxAscent,
              u = n + o.actualBoundingBoxDescent,
              c = i.strikethrough ? (l + u) / 2 : u;
            (t.strokeStyle = t.fillStyle),
              t.beginPath(),
              (t.lineWidth = i.decorationWidth || 2),
              t.moveTo(a, c),
              t.lineTo(s, c),
              t.stroke();
          }
        }
        function Do(t, e) {
          const { x: n, y: r, w: i, h: o, radius: a } = e;
          t.arc(n + a.topLeft, r + a.topLeft, a.topLeft, -Xr, $r, !0),
            t.lineTo(n, r + o - a.bottomLeft),
            t.arc(
              n + a.bottomLeft,
              r + o - a.bottomLeft,
              a.bottomLeft,
              $r,
              Xr,
              !0
            ),
            t.lineTo(n + i - a.bottomRight, r + o),
            t.arc(
              n + i - a.bottomRight,
              r + o - a.bottomRight,
              a.bottomRight,
              Xr,
              0,
              !0
            ),
            t.lineTo(n + i, r + a.topRight),
            t.arc(n + i - a.topRight, r + a.topRight, a.topRight, 0, -Xr, !0),
            t.lineTo(n + a.topLeft, r);
        }
        const To = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
          Ro = new RegExp(
            /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
          );
        function Ao(t, e) {
          const n = ('' + t).match(To);
          if (!n || 'normal' === n[1]) return 1.2 * e;
          switch (((t = +n[2]), n[3])) {
            case 'px':
              return t;
            case '%':
              t /= 100;
          }
          return e * t;
        }
        const Lo = (t) => +t || 0;
        function zo(t, e) {
          const n = {},
            r = Mr(e),
            i = r ? Object.keys(e) : e,
            o = Mr(t) ? (r ? (n) => Cr(t[n], t[e[n]]) : (e) => t[e]) : () => t;
          for (const t of i) n[t] = Lo(o(t));
          return n;
        }
        function Io(t) {
          return zo(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
        }
        function No(t) {
          return zo(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
        }
        function Fo(t) {
          const e = Io(t);
          return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
        }
        function jo(t, e) {
          (t = t || {}), (e = e || mo.font);
          let n = Cr(t.size, e.size);
          'string' == typeof n && (n = parseInt(n, 10));
          let r = Cr(t.style, e.style);
          r &&
            !('' + r).match(Ro) &&
            (console.warn('Invalid font style specified: "' + r + '"'),
            (r = ''));
          const i = {
            family: Cr(t.family, e.family),
            lineHeight: Ao(Cr(t.lineHeight, e.lineHeight), n),
            size: n,
            style: r,
            weight: Cr(t.weight, e.weight),
            string: '',
          };
          return (
            (i.string = (function (t) {
              return !t || kr(t.size) || kr(t.family)
                ? null
                : (t.style ? t.style + ' ' : '') +
                    (t.weight ? t.weight + ' ' : '') +
                    t.size +
                    'px ' +
                    t.family;
            })(i)),
            i
          );
        }
        function Vo(t, e, n, r) {
          let i,
            o,
            a,
            s = !0;
          for (i = 0, o = t.length; i < o; ++i)
            if (
              ((a = t[i]),
              void 0 !== a &&
                (void 0 !== e &&
                  'function' == typeof a &&
                  ((a = a(e)), (s = !1)),
                void 0 !== n && Sr(a) && ((a = a[n % a.length]), (s = !1)),
                void 0 !== a))
            )
              return r && !s && (r.cacheable = !1), a;
        }
        function Bo(t, e) {
          return Object.assign(Object.create(t), e);
        }
        function Wo(t, e = [''], n = t, r, i = () => t[0]) {
          Wr(r) || (r = Jo('_fallback', t));
          const o = {
            [Symbol.toStringTag]: 'Object',
            _cacheable: !0,
            _scopes: t,
            _rootScopes: n,
            _fallback: r,
            _getTarget: i,
            override: (i) => Wo([i, ...t], e, n, r),
          };
          return new Proxy(o, {
            deleteProperty: (e, n) => (
              delete e[n], delete e._keys, delete t[0][n], !0
            ),
            get: (n, r) =>
              Qo(n, r, () =>
                (function (t, e, n, r) {
                  let i;
                  for (const o of e)
                    if (((i = Jo($o(o, t), n)), Wr(i)))
                      return Uo(t, i) ? Go(n, r, t, i) : i;
                })(r, e, t, n)
              ),
            getOwnPropertyDescriptor: (t, e) =>
              Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
            getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
            has: (t, e) => ta(t).includes(e),
            ownKeys: (t) => ta(t),
            set(t, e, n) {
              const r = t._storage || (t._storage = i());
              return (t[e] = r[e] = n), delete t._keys, !0;
            },
          });
        }
        function Ho(t, e, n, r) {
          const i = {
            _cacheable: !1,
            _proxy: t,
            _context: e,
            _subProxy: n,
            _stack: new Set(),
            _descriptors: qo(t, r),
            setContext: (e) => Ho(t, e, n, r),
            override: (i) => Ho(t.override(i), e, n, r),
          };
          return new Proxy(i, {
            deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
            get: (t, e, n) =>
              Qo(t, e, () =>
                (function (t, e, n) {
                  const {
                    _proxy: r,
                    _context: i,
                    _subProxy: o,
                    _descriptors: a,
                  } = t;
                  let s = r[e];
                  return (
                    Hr(s) &&
                      a.isScriptable(e) &&
                      (s = (function (t, e, n, r) {
                        const {
                          _proxy: i,
                          _context: o,
                          _subProxy: a,
                          _stack: s,
                        } = n;
                        if (s.has(t))
                          throw new Error(
                            'Recursion detected: ' +
                              Array.from(s).join('->') +
                              '->' +
                              t
                          );
                        return (
                          s.add(t),
                          (e = e(o, a || r)),
                          s.delete(t),
                          Uo(t, e) && (e = Go(i._scopes, i, t, e)),
                          e
                        );
                      })(e, s, t, n)),
                    Sr(s) &&
                      s.length &&
                      (s = (function (t, e, n, r) {
                        const {
                          _proxy: i,
                          _context: o,
                          _subProxy: a,
                          _descriptors: s,
                        } = n;
                        if (Wr(o.index) && r(t)) e = e[o.index % e.length];
                        else if (Mr(e[0])) {
                          const n = e,
                            r = i._scopes.filter((t) => t !== n);
                          e = [];
                          for (const l of n) {
                            const n = Go(r, i, t, l);
                            e.push(Ho(n, o, a && a[t], s));
                          }
                        }
                        return e;
                      })(e, s, t, a.isIndexable)),
                    Uo(e, s) && (s = Ho(s, i, o && o[e], a)),
                    s
                  );
                })(t, e, n)
              ),
            getOwnPropertyDescriptor: (e, n) =>
              e._descriptors.allKeys
                ? Reflect.has(t, n)
                  ? { enumerable: !0, configurable: !0 }
                  : void 0
                : Reflect.getOwnPropertyDescriptor(t, n),
            getPrototypeOf: () => Reflect.getPrototypeOf(t),
            has: (e, n) => Reflect.has(t, n),
            ownKeys: () => Reflect.ownKeys(t),
            set: (e, n, r) => ((t[n] = r), delete e[n], !0),
          });
        }
        function qo(t, e = { scriptable: !0, indexable: !0 }) {
          const {
            _scriptable: n = e.scriptable,
            _indexable: r = e.indexable,
            _allKeys: i = e.allKeys,
          } = t;
          return {
            allKeys: i,
            scriptable: n,
            indexable: r,
            isScriptable: Hr(n) ? n : () => n,
            isIndexable: Hr(r) ? r : () => r,
          };
        }
        const $o = (t, e) => (t ? t + Br(e) : e),
          Uo = (t, e) =>
            Mr(e) &&
            'adapters' !== t &&
            (null === Object.getPrototypeOf(e) || e.constructor === Object);
        function Qo(t, e, n) {
          if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          const r = n();
          return (t[e] = r), r;
        }
        function Ko(t, e, n) {
          return Hr(t) ? t(e, n) : t;
        }
        const Yo = (t, e) =>
          !0 === t ? e : 'string' == typeof t ? Vr(e, t) : void 0;
        function Xo(t, e, n, r, i) {
          for (const o of e) {
            const e = Yo(n, o);
            if (e) {
              t.add(e);
              const o = Ko(e._fallback, n, i);
              if (Wr(o) && o !== n && o !== r) return o;
            } else if (!1 === e && Wr(r) && n !== r) return null;
          }
          return !1;
        }
        function Go(t, e, n, r) {
          const i = e._rootScopes,
            o = Ko(e._fallback, n, r),
            a = [...t, ...i],
            s = new Set();
          s.add(r);
          let l = Zo(s, a, n, o || n, r);
          return (
            null !== l &&
            (!Wr(o) || o === n || ((l = Zo(s, a, o, l, r)), null !== l)) &&
            Wo(Array.from(s), [''], i, o, () =>
              (function (t, e, n) {
                const r = t._getTarget();
                e in r || (r[e] = {});
                const i = r[e];
                return Sr(i) && Mr(n) ? n : i;
              })(e, n, r)
            )
          );
        }
        function Zo(t, e, n, r, i) {
          for (; n; ) n = Xo(t, e, n, r, i);
          return n;
        }
        function Jo(t, e) {
          for (const n of e) {
            if (!n) continue;
            const e = n[t];
            if (Wr(e)) return e;
          }
        }
        function ta(t) {
          let e = t._keys;
          return (
            e ||
              (e = t._keys =
                (function (t) {
                  const e = new Set();
                  for (const n of t)
                    for (const t of Object.keys(n).filter(
                      (t) => !t.startsWith('_')
                    ))
                      e.add(t);
                  return Array.from(e);
                })(t._scopes)),
            e
          );
        }
        function ea(t, e, n, r) {
          const { iScale: i } = t,
            { key: o = 'r' } = this._parsing,
            a = new Array(r);
          let s, l, u, c;
          for (s = 0, l = r; s < l; ++s)
            (u = s + n), (c = e[u]), (a[s] = { r: i.parse(Vr(c, o), u) });
          return a;
        }
        const na = Number.EPSILON || 1e-14,
          ra = (t, e) => e < t.length && !t[e].skip && t[e],
          ia = (t) => ('x' === t ? 'y' : 'x');
        function oa(t, e, n, r) {
          const i = t.skip ? e : t,
            o = e,
            a = n.skip ? e : n,
            s = ui(o, i),
            l = ui(a, o);
          let u = s / (s + l),
            c = l / (s + l);
          (u = isNaN(u) ? 0 : u), (c = isNaN(c) ? 0 : c);
          const d = r * u,
            h = r * c;
          return {
            previous: { x: o.x - d * (a.x - i.x), y: o.y - d * (a.y - i.y) },
            next: { x: o.x + h * (a.x - i.x), y: o.y + h * (a.y - i.y) },
          };
        }
        function aa(t, e, n) {
          return Math.max(Math.min(t, n), e);
        }
        function sa(t, e, n, r, i) {
          let o, a, s, l;
          if (
            (e.spanGaps && (t = t.filter((t) => !t.skip)),
            'monotone' === e.cubicInterpolationMode)
          )
            !(function (t, e = 'x') {
              const n = ia(e),
                r = t.length,
                i = Array(r).fill(0),
                o = Array(r);
              let a,
                s,
                l,
                u = ra(t, 0);
              for (a = 0; a < r; ++a)
                if (((s = l), (l = u), (u = ra(t, a + 1)), l)) {
                  if (u) {
                    const t = u[e] - l[e];
                    i[a] = 0 !== t ? (u[n] - l[n]) / t : 0;
                  }
                  o[a] = s
                    ? u
                      ? ti(i[a - 1]) !== ti(i[a])
                        ? 0
                        : (i[a - 1] + i[a]) / 2
                      : i[a - 1]
                    : i[a];
                }
              !(function (t, e, n) {
                const r = t.length;
                let i,
                  o,
                  a,
                  s,
                  l,
                  u = ra(t, 0);
                for (let c = 0; c < r - 1; ++c)
                  (l = u),
                    (u = ra(t, c + 1)),
                    l &&
                      u &&
                      (ri(e[c], 0, na)
                        ? (n[c] = n[c + 1] = 0)
                        : ((i = n[c] / e[c]),
                          (o = n[c + 1] / e[c]),
                          (s = Math.pow(i, 2) + Math.pow(o, 2)),
                          s <= 9 ||
                            ((a = 3 / Math.sqrt(s)),
                            (n[c] = i * a * e[c]),
                            (n[c + 1] = o * a * e[c]))));
              })(t, i, o),
                (function (t, e, n = 'x') {
                  const r = ia(n),
                    i = t.length;
                  let o,
                    a,
                    s,
                    l = ra(t, 0);
                  for (let u = 0; u < i; ++u) {
                    if (((a = s), (s = l), (l = ra(t, u + 1)), !s)) continue;
                    const i = s[n],
                      c = s[r];
                    a &&
                      ((o = (i - a[n]) / 3),
                      (s[`cp1${n}`] = i - o),
                      (s[`cp1${r}`] = c - o * e[u])),
                      l &&
                        ((o = (l[n] - i) / 3),
                        (s[`cp2${n}`] = i + o),
                        (s[`cp2${r}`] = c + o * e[u]));
                  }
                })(t, o, e);
            })(t, i);
          else {
            let n = r ? t[t.length - 1] : t[0];
            for (o = 0, a = t.length; o < a; ++o)
              (s = t[o]),
                (l = oa(
                  n,
                  s,
                  t[Math.min(o + 1, a - (r ? 0 : 1)) % a],
                  e.tension
                )),
                (s.cp1x = l.previous.x),
                (s.cp1y = l.previous.y),
                (s.cp2x = l.next.x),
                (s.cp2y = l.next.y),
                (n = s);
          }
          e.capBezierPoints &&
            (function (t, e) {
              let n,
                r,
                i,
                o,
                a,
                s = ko(t[0], e);
              for (n = 0, r = t.length; n < r; ++n)
                (a = o),
                  (o = s),
                  (s = n < r - 1 && ko(t[n + 1], e)),
                  o &&
                    ((i = t[n]),
                    a &&
                      ((i.cp1x = aa(i.cp1x, e.left, e.right)),
                      (i.cp1y = aa(i.cp1y, e.top, e.bottom))),
                    s &&
                      ((i.cp2x = aa(i.cp2x, e.left, e.right)),
                      (i.cp2y = aa(i.cp2y, e.top, e.bottom))));
            })(t, n);
        }
        function la() {
          return 'undefined' != typeof window && 'undefined' != typeof document;
        }
        function ua(t) {
          let e = t.parentNode;
          return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e;
        }
        function ca(t, e, n) {
          let r;
          return (
            'string' == typeof t
              ? ((r = parseInt(t, 10)),
                -1 !== t.indexOf('%') && (r = (r / 100) * e.parentNode[n]))
              : (r = t),
            r
          );
        }
        const da = (t) => window.getComputedStyle(t, null),
          ha = ['top', 'right', 'bottom', 'left'];
        function fa(t, e, n) {
          const r = {};
          n = n ? '-' + n : '';
          for (let i = 0; i < 4; i++) {
            const o = ha[i];
            r[o] = parseFloat(t[e + '-' + o + n]) || 0;
          }
          return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
        }
        function pa(t, e) {
          if ('native' in t) return t;
          const { canvas: n, currentDevicePixelRatio: r } = e,
            i = da(n),
            o = 'border-box' === i.boxSizing,
            a = fa(i, 'padding'),
            s = fa(i, 'border', 'width'),
            {
              x: l,
              y: u,
              box: c,
            } = (function (t, e) {
              const n = t.touches,
                r = n && n.length ? n[0] : t,
                { offsetX: i, offsetY: o } = r;
              let a,
                s,
                l = !1;
              if (
                ((t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot))(
                  i,
                  o,
                  t.target
                )
              )
                (a = i), (s = o);
              else {
                const t = e.getBoundingClientRect();
                (a = r.clientX - t.left), (s = r.clientY - t.top), (l = !0);
              }
              return { x: a, y: s, box: l };
            })(t, n),
            d = a.left + (c && s.left),
            h = a.top + (c && s.top);
          let { width: f, height: p } = e;
          return (
            o && ((f -= a.width + s.width), (p -= a.height + s.height)),
            {
              x: Math.round((((l - d) / f) * n.width) / r),
              y: Math.round((((u - h) / p) * n.height) / r),
            }
          );
        }
        const ga = (t) => Math.round(10 * t) / 10;
        function ma(t, e, n) {
          const r = e || 1,
            i = Math.floor(t.height * r),
            o = Math.floor(t.width * r);
          (t.height = i / r), (t.width = o / r);
          const a = t.canvas;
          return (
            a.style &&
              (n || (!a.style.height && !a.style.width)) &&
              ((a.style.height = `${t.height}px`),
              (a.style.width = `${t.width}px`)),
            (t.currentDevicePixelRatio !== r ||
              a.height !== i ||
              a.width !== o) &&
              ((t.currentDevicePixelRatio = r),
              (a.height = i),
              (a.width = o),
              t.ctx.setTransform(r, 0, 0, r, 0, 0),
              !0)
          );
        }
        const ba = (function () {
          let t = !1;
          try {
            const e = {
              get passive() {
                return (t = !0), !1;
              },
            };
            window.addEventListener('test', null, e),
              window.removeEventListener('test', null, e);
          } catch (t) {}
          return t;
        })();
        function ya(t, e) {
          const n = (function (t, e) {
              return da(t).getPropertyValue(e);
            })(t, e),
            r = n && n.match(/^(\d+)(\.\d+)?px$/);
          return r ? +r[1] : void 0;
        }
        function va(t, e, n, r) {
          return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
        }
        function xa(t, e, n, r) {
          return {
            x: t.x + n * (e.x - t.x),
            y:
              'middle' === r
                ? n < 0.5
                  ? t.y
                  : e.y
                : 'after' === r
                ? n < 1
                  ? t.y
                  : e.y
                : n > 0
                ? e.y
                : t.y,
          };
        }
        function _a(t, e, n, r) {
          const i = { x: t.cp2x, y: t.cp2y },
            o = { x: e.cp1x, y: e.cp1y },
            a = va(t, i, n),
            s = va(i, o, n),
            l = va(o, e, n),
            u = va(a, s, n),
            c = va(s, l, n);
          return va(u, c, n);
        }
        const wa = new Map();
        function ka(t, e, n) {
          return (function (t, e) {
            e = e || {};
            const n = t + JSON.stringify(e);
            let r = wa.get(n);
            return r || ((r = new Intl.NumberFormat(t, e)), wa.set(n, r)), r;
          })(e, n).format(t);
        }
        function Sa(t, e, n) {
          return t
            ? (function (t, e) {
                return {
                  x: (n) => t + t + e - n,
                  setWidth(t) {
                    e = t;
                  },
                  textAlign: (t) =>
                    'center' === t ? t : 'right' === t ? 'left' : 'right',
                  xPlus: (t, e) => t - e,
                  leftForLtr: (t, e) => t - e,
                };
              })(e, n)
            : {
                x: (t) => t,
                setWidth(t) {},
                textAlign: (t) => t,
                xPlus: (t, e) => t + e,
                leftForLtr: (t, e) => t,
              };
        }
        function Ma(t, e) {
          let n, r;
          ('ltr' !== e && 'rtl' !== e) ||
            ((n = t.canvas.style),
            (r = [
              n.getPropertyValue('direction'),
              n.getPropertyPriority('direction'),
            ]),
            n.setProperty('direction', e, 'important'),
            (t.prevTextDirection = r));
        }
        function Pa(t, e) {
          void 0 !== e &&
            (delete t.prevTextDirection,
            t.canvas.style.setProperty('direction', e[0], e[1]));
        }
        function Ea(t) {
          return 'angle' === t
            ? { between: hi, compare: ci, normalize: di }
            : { between: pi, compare: (t, e) => t - e, normalize: (t) => t };
        }
        function Ca({ start: t, end: e, count: n, loop: r, style: i }) {
          return {
            start: t % n,
            end: e % n,
            loop: r && (e - t + 1) % n == 0,
            style: i,
          };
        }
        function Oa(t, e, n) {
          if (!n) return [t];
          const { property: r, start: i, end: o } = n,
            a = e.length,
            { compare: s, between: l, normalize: u } = Ea(r),
            {
              start: c,
              end: d,
              loop: h,
              style: f,
            } = (function (t, e, n) {
              const { property: r, start: i, end: o } = n,
                { between: a, normalize: s } = Ea(r),
                l = e.length;
              let u,
                c,
                { start: d, end: h, loop: f } = t;
              if (f) {
                for (
                  d += l, h += l, u = 0, c = l;
                  u < c && a(s(e[d % l][r]), i, o);
                  ++u
                )
                  d--, h--;
                (d %= l), (h %= l);
              }
              return (
                h < d && (h += l), { start: d, end: h, loop: f, style: t.style }
              );
            })(t, e, n),
            p = [];
          let g,
            m,
            b,
            y = !1,
            v = null;
          for (let t = c, n = c; t <= d; ++t)
            (m = e[t % a]),
              m.skip ||
                ((g = u(m[r])),
                g !== b &&
                  ((y = l(g, i, o)),
                  null === v &&
                    (y || (l(i, b, g) && 0 !== s(i, b))) &&
                    (v = 0 === s(g, i) ? t : n),
                  null !== v &&
                    (!y || 0 === s(o, g) || l(o, b, g)) &&
                    (p.push(
                      Ca({ start: v, end: t, loop: h, count: a, style: f })
                    ),
                    (v = null)),
                  (n = t),
                  (b = g)));
          return (
            null !== v &&
              p.push(Ca({ start: v, end: d, loop: h, count: a, style: f })),
            p
          );
        }
        function Da(t, e) {
          const n = [],
            r = t.segments;
          for (let i = 0; i < r.length; i++) {
            const o = Oa(r[i], t.points, e);
            o.length && n.push(...o);
          }
          return n;
        }
        function Ta(t) {
          return {
            backgroundColor: t.backgroundColor,
            borderCapStyle: t.borderCapStyle,
            borderDash: t.borderDash,
            borderDashOffset: t.borderDashOffset,
            borderJoinStyle: t.borderJoinStyle,
            borderWidth: t.borderWidth,
            borderColor: t.borderColor,
          };
        }
        function Ra(t, e) {
          return e && JSON.stringify(t) !== JSON.stringify(e);
        }
        var Aa = new (class {
          constructor() {
            (this._request = null),
              (this._charts = new Map()),
              (this._running = !1),
              (this._lastDate = void 0);
          }
          _notify(t, e, n, r) {
            const i = e.listeners[r],
              o = e.duration;
            i.forEach((r) =>
              r({
                chart: t,
                initial: e.initial,
                numSteps: o,
                currentStep: Math.min(n - e.start, o),
              })
            );
          }
          _refresh() {
            this._request ||
              ((this._running = !0),
              (this._request = _i.call(window, () => {
                this._update(),
                  (this._request = null),
                  this._running && this._refresh();
              })));
          }
          _update(t = Date.now()) {
            let e = 0;
            this._charts.forEach((n, r) => {
              if (!n.running || !n.items.length) return;
              const i = n.items;
              let o,
                a = i.length - 1,
                s = !1;
              for (; a >= 0; --a)
                (o = i[a]),
                  o._active
                    ? (o._total > n.duration && (n.duration = o._total),
                      o.tick(t),
                      (s = !0))
                    : ((i[a] = i[i.length - 1]), i.pop());
              s && (r.draw(), this._notify(r, n, t, 'progress')),
                i.length ||
                  ((n.running = !1),
                  this._notify(r, n, t, 'complete'),
                  (n.initial = !1)),
                (e += i.length);
            }),
              (this._lastDate = t),
              0 === e && (this._running = !1);
          }
          _getAnims(t) {
            const e = this._charts;
            let n = e.get(t);
            return (
              n ||
                ((n = {
                  running: !1,
                  initial: !0,
                  items: [],
                  listeners: { complete: [], progress: [] },
                }),
                e.set(t, n)),
              n
            );
          }
          listen(t, e, n) {
            this._getAnims(t).listeners[e].push(n);
          }
          add(t, e) {
            e && e.length && this._getAnims(t).items.push(...e);
          }
          has(t) {
            return this._getAnims(t).items.length > 0;
          }
          start(t) {
            const e = this._charts.get(t);
            e &&
              ((e.running = !0),
              (e.start = Date.now()),
              (e.duration = e.items.reduce(
                (t, e) => Math.max(t, e._duration),
                0
              )),
              this._refresh());
          }
          running(t) {
            if (!this._running) return !1;
            const e = this._charts.get(t);
            return !!(e && e.running && e.items.length);
          }
          stop(t) {
            const e = this._charts.get(t);
            if (!e || !e.items.length) return;
            const n = e.items;
            let r = n.length - 1;
            for (; r >= 0; --r) n[r].cancel();
            (e.items = []), this._notify(t, e, Date.now(), 'complete');
          }
          remove(t) {
            return this._charts.delete(t);
          }
        })();
        const La = 'transparent',
          za = {
            boolean: (t, e, n) => (n > 0.5 ? e : t),
            color(t, e, n) {
              const r = uo(t || La),
                i = r.valid && uo(e || La);
              return i && i.valid ? i.mix(r, n).hexString() : e;
            },
            number: (t, e, n) => t + (e - t) * n,
          };
        class Ia {
          constructor(t, e, n, r) {
            const i = e[n];
            r = Vo([t.to, r, i, t.from]);
            const o = Vo([t.from, i, r]);
            (this._active = !0),
              (this._fn = t.fn || za[t.type || typeof o]),
              (this._easing = Di[t.easing] || Di.linear),
              (this._start = Math.floor(Date.now() + (t.delay || 0))),
              (this._duration = this._total = Math.floor(t.duration)),
              (this._loop = !!t.loop),
              (this._target = e),
              (this._prop = n),
              (this._from = o),
              (this._to = r),
              (this._promises = void 0);
          }
          active() {
            return this._active;
          }
          update(t, e, n) {
            if (this._active) {
              this._notify(!1);
              const r = this._target[this._prop],
                i = n - this._start,
                o = this._duration - i;
              (this._start = n),
                (this._duration = Math.floor(Math.max(o, t.duration))),
                (this._total += i),
                (this._loop = !!t.loop),
                (this._to = Vo([t.to, e, r, t.from])),
                (this._from = Vo([t.from, r, e]));
            }
          }
          cancel() {
            this._active &&
              (this.tick(Date.now()), (this._active = !1), this._notify(!1));
          }
          tick(t) {
            const e = t - this._start,
              n = this._duration,
              r = this._prop,
              i = this._from,
              o = this._loop,
              a = this._to;
            let s;
            if (((this._active = i !== a && (o || e < n)), !this._active))
              return (this._target[r] = a), void this._notify(!0);
            e < 0
              ? (this._target[r] = i)
              : ((s = (e / n) % 2),
                (s = o && s > 1 ? 2 - s : s),
                (s = this._easing(Math.min(1, Math.max(0, s)))),
                (this._target[r] = this._fn(i, a, s)));
          }
          wait() {
            const t = this._promises || (this._promises = []);
            return new Promise((e, n) => {
              t.push({ res: e, rej: n });
            });
          }
          _notify(t) {
            const e = t ? 'res' : 'rej',
              n = this._promises || [];
            for (let t = 0; t < n.length; t++) n[t][e]();
          }
        }
        mo.set('animation', {
          delay: void 0,
          duration: 1e3,
          easing: 'easeOutQuart',
          fn: void 0,
          from: void 0,
          loop: void 0,
          to: void 0,
          type: void 0,
        });
        const Na = Object.keys(mo.animation);
        mo.describe('animation', {
          _fallback: !1,
          _indexable: !1,
          _scriptable: (t) =>
            'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
        }),
          mo.set('animations', {
            colors: {
              type: 'color',
              properties: ['color', 'borderColor', 'backgroundColor'],
            },
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'borderWidth', 'radius', 'tension'],
            },
          }),
          mo.describe('animations', { _fallback: 'animation' }),
          mo.set('transitions', {
            active: { animation: { duration: 400 } },
            resize: { animation: { duration: 0 } },
            show: {
              animations: {
                colors: { from: 'transparent' },
                visible: { type: 'boolean', duration: 0 },
              },
            },
            hide: {
              animations: {
                colors: { to: 'transparent' },
                visible: {
                  type: 'boolean',
                  easing: 'linear',
                  fn: (t) => 0 | t,
                },
              },
            },
          });
        class Fa {
          constructor(t, e) {
            (this._chart = t),
              (this._properties = new Map()),
              this.configure(e);
          }
          configure(t) {
            if (!Mr(t)) return;
            const e = this._properties;
            Object.getOwnPropertyNames(t).forEach((n) => {
              const r = t[n];
              if (!Mr(r)) return;
              const i = {};
              for (const t of Na) i[t] = r[t];
              ((Sr(r.properties) && r.properties) || [n]).forEach((t) => {
                (t !== n && e.has(t)) || e.set(t, i);
              });
            });
          }
          _animateOptions(t, e) {
            const n = e.options,
              r = (function (t, e) {
                if (!e) return;
                let n = t.options;
                if (n)
                  return (
                    n.$shared &&
                      (t.options = n =
                        Object.assign({}, n, { $shared: !1, $animations: {} })),
                    n
                  );
                t.options = e;
              })(t, n);
            if (!r) return [];
            const i = this._createAnimations(r, n);
            return (
              n.$shared &&
                (function (t, e) {
                  const n = [],
                    r = Object.keys(e);
                  for (let e = 0; e < r.length; e++) {
                    const i = t[r[e]];
                    i && i.active() && n.push(i.wait());
                  }
                  return Promise.all(n);
                })(t.options.$animations, n).then(
                  () => {
                    t.options = n;
                  },
                  () => {}
                ),
              i
            );
          }
          _createAnimations(t, e) {
            const n = this._properties,
              r = [],
              i = t.$animations || (t.$animations = {}),
              o = Object.keys(e),
              a = Date.now();
            let s;
            for (s = o.length - 1; s >= 0; --s) {
              const l = o[s];
              if ('$' === l.charAt(0)) continue;
              if ('options' === l) {
                r.push(...this._animateOptions(t, e));
                continue;
              }
              const u = e[l];
              let c = i[l];
              const d = n.get(l);
              if (c) {
                if (d && c.active()) {
                  c.update(d, u, a);
                  continue;
                }
                c.cancel();
              }
              d && d.duration
                ? ((i[l] = c = new Ia(d, t, l, u)), r.push(c))
                : (t[l] = u);
            }
            return r;
          }
          update(t, e) {
            if (0 === this._properties.size) return void Object.assign(t, e);
            const n = this._createAnimations(t, e);
            return n.length ? (Aa.add(this._chart, n), !0) : void 0;
          }
        }
        function ja(t, e) {
          const n = (t && t.options) || {},
            r = n.reverse,
            i = void 0 === n.min ? e : 0,
            o = void 0 === n.max ? e : 0;
          return { start: r ? o : i, end: r ? i : o };
        }
        function Va(t, e) {
          const n = [],
            r = t._getSortedDatasetMetas(e);
          let i, o;
          for (i = 0, o = r.length; i < o; ++i) n.push(r[i].index);
          return n;
        }
        function Ba(t, e, n, r = {}) {
          const i = t.keys,
            o = 'single' === r.mode;
          let a, s, l, u;
          if (null !== e) {
            for (a = 0, s = i.length; a < s; ++a) {
              if (((l = +i[a]), l === n)) {
                if (r.all) continue;
                break;
              }
              (u = t.values[l]),
                Pr(u) && (o || 0 === e || ti(e) === ti(u)) && (e += u);
            }
            return e;
          }
        }
        function Wa(t, e) {
          const n = t && t.options.stacked;
          return n || (void 0 === n && void 0 !== e.stack);
        }
        function Ha(t, e, n) {
          const r = t[e] || (t[e] = {});
          return r[n] || (r[n] = {});
        }
        function qa(t, e, n, r) {
          for (const i of e.getMatchingVisibleMetas(r).reverse()) {
            const e = t[i.index];
            if ((n && e > 0) || (!n && e < 0)) return i.index;
          }
          return null;
        }
        function $a(t, e) {
          const { chart: n, _cachedMeta: r } = t,
            i = n._stacks || (n._stacks = {}),
            { iScale: o, vScale: a, index: s } = r,
            l = o.axis,
            u = a.axis,
            c = (function (t, e, n) {
              return `${t.id}.${e.id}.${n.stack || n.type}`;
            })(o, a, r),
            d = e.length;
          let h;
          for (let t = 0; t < d; ++t) {
            const n = e[t],
              { [l]: o, [u]: d } = n;
            (h = (n._stacks || (n._stacks = {}))[u] = Ha(i, c, o)),
              (h[s] = d),
              (h._top = qa(h, a, !0, r.type)),
              (h._bottom = qa(h, a, !1, r.type));
          }
        }
        function Ua(t, e) {
          const n = t.scales;
          return Object.keys(n)
            .filter((t) => n[t].axis === e)
            .shift();
        }
        function Qa(t, e) {
          const n = t.controller.index,
            r = t.vScale && t.vScale.axis;
          if (r) {
            e = e || t._parsed;
            for (const t of e) {
              const e = t._stacks;
              if (!e || void 0 === e[r] || void 0 === e[r][n]) return;
              delete e[r][n];
            }
          }
        }
        const Ka = (t) => 'reset' === t || 'none' === t,
          Ya = (t, e) => (e ? t : Object.assign({}, t));
        class Xa {
          constructor(t, e) {
            (this.chart = t),
              (this._ctx = t.ctx),
              (this.index = e),
              (this._cachedDataOpts = {}),
              (this._cachedMeta = this.getMeta()),
              (this._type = this._cachedMeta.type),
              (this.options = void 0),
              (this._parsing = !1),
              (this._data = void 0),
              (this._objectData = void 0),
              (this._sharedOptions = void 0),
              (this._drawStart = void 0),
              (this._drawCount = void 0),
              (this.enableOptionSharing = !1),
              (this.supportsDecimation = !1),
              (this.$context = void 0),
              (this._syncList = []),
              this.initialize();
          }
          initialize() {
            const t = this._cachedMeta;
            this.configure(),
              this.linkScales(),
              (t._stacked = Wa(t.vScale, t)),
              this.addElements();
          }
          updateIndex(t) {
            this.index !== t && Qa(this._cachedMeta), (this.index = t);
          }
          linkScales() {
            const t = this.chart,
              e = this._cachedMeta,
              n = this.getDataset(),
              r = (t, e, n, r) => ('x' === t ? e : 'r' === t ? r : n),
              i = (e.xAxisID = Cr(n.xAxisID, Ua(t, 'x'))),
              o = (e.yAxisID = Cr(n.yAxisID, Ua(t, 'y'))),
              a = (e.rAxisID = Cr(n.rAxisID, Ua(t, 'r'))),
              s = e.indexAxis,
              l = (e.iAxisID = r(s, i, o, a)),
              u = (e.vAxisID = r(s, o, i, a));
            (e.xScale = this.getScaleForId(i)),
              (e.yScale = this.getScaleForId(o)),
              (e.rScale = this.getScaleForId(a)),
              (e.iScale = this.getScaleForId(l)),
              (e.vScale = this.getScaleForId(u));
          }
          getDataset() {
            return this.chart.data.datasets[this.index];
          }
          getMeta() {
            return this.chart.getDatasetMeta(this.index);
          }
          getScaleForId(t) {
            return this.chart.scales[t];
          }
          _getOtherScale(t) {
            const e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale;
          }
          reset() {
            this._update('reset');
          }
          _destroy() {
            const t = this._cachedMeta;
            this._data && vi(this._data, this), t._stacked && Qa(t);
          }
          _dataCheck() {
            const t = this.getDataset(),
              e = t.data || (t.data = []),
              n = this._data;
            if (Mr(e))
              this._data = (function (t) {
                const e = Object.keys(t),
                  n = new Array(e.length);
                let r, i, o;
                for (r = 0, i = e.length; r < i; ++r)
                  (o = e[r]), (n[r] = { x: o, y: t[o] });
                return n;
              })(e);
            else if (n !== e) {
              if (n) {
                vi(n, this);
                const t = this._cachedMeta;
                Qa(t), (t._parsed = []);
              }
              e &&
                Object.isExtensible(e) &&
                ((i = this),
                (r = e)._chartjs
                  ? r._chartjs.listeners.push(i)
                  : (Object.defineProperty(r, '_chartjs', {
                      configurable: !0,
                      enumerable: !1,
                      value: { listeners: [i] },
                    }),
                    yi.forEach((t) => {
                      const e = '_onData' + Br(t),
                        n = r[t];
                      Object.defineProperty(r, t, {
                        configurable: !0,
                        enumerable: !1,
                        value(...t) {
                          const i = n.apply(this, t);
                          return (
                            r._chartjs.listeners.forEach((n) => {
                              'function' == typeof n[e] && n[e](...t);
                            }),
                            i
                          );
                        },
                      });
                    }))),
                (this._syncList = []),
                (this._data = e);
            }
            var r, i;
          }
          addElements() {
            const t = this._cachedMeta;
            this._dataCheck(),
              this.datasetElementType &&
                (t.dataset = new this.datasetElementType());
          }
          buildOrUpdateElements(t) {
            const e = this._cachedMeta,
              n = this.getDataset();
            let r = !1;
            this._dataCheck();
            const i = e._stacked;
            (e._stacked = Wa(e.vScale, e)),
              e.stack !== n.stack && ((r = !0), Qa(e), (e.stack = n.stack)),
              this._resyncElements(t),
              (r || i !== e._stacked) && $a(this, e._parsed);
          }
          configure() {
            const t = this.chart.config,
              e = t.datasetScopeKeys(this._type),
              n = t.getOptionScopes(this.getDataset(), e, !0);
            (this.options = t.createResolver(n, this.getContext())),
              (this._parsing = this.options.parsing),
              (this._cachedDataOpts = {});
          }
          parse(t, e) {
            const { _cachedMeta: n, _data: r } = this,
              { iScale: i, _stacked: o } = n,
              a = i.axis;
            let s,
              l,
              u,
              c = (0 === t && e === r.length) || n._sorted,
              d = t > 0 && n._parsed[t - 1];
            if (!1 === this._parsing)
              (n._parsed = r), (n._sorted = !0), (u = r);
            else {
              u = Sr(r[t])
                ? this.parseArrayData(n, r, t, e)
                : Mr(r[t])
                ? this.parseObjectData(n, r, t, e)
                : this.parsePrimitiveData(n, r, t, e);
              const i = () => null === l[a] || (d && l[a] < d[a]);
              for (s = 0; s < e; ++s)
                (n._parsed[s + t] = l = u[s]), c && (i() && (c = !1), (d = l));
              n._sorted = c;
            }
            o && $a(this, u);
          }
          parsePrimitiveData(t, e, n, r) {
            const { iScale: i, vScale: o } = t,
              a = i.axis,
              s = o.axis,
              l = i.getLabels(),
              u = i === o,
              c = new Array(r);
            let d, h, f;
            for (d = 0, h = r; d < h; ++d)
              (f = d + n),
                (c[d] = { [a]: u || i.parse(l[f], f), [s]: o.parse(e[f], f) });
            return c;
          }
          parseArrayData(t, e, n, r) {
            const { xScale: i, yScale: o } = t,
              a = new Array(r);
            let s, l, u, c;
            for (s = 0, l = r; s < l; ++s)
              (u = s + n),
                (c = e[u]),
                (a[s] = { x: i.parse(c[0], u), y: o.parse(c[1], u) });
            return a;
          }
          parseObjectData(t, e, n, r) {
            const { xScale: i, yScale: o } = t,
              { xAxisKey: a = 'x', yAxisKey: s = 'y' } = this._parsing,
              l = new Array(r);
            let u, c, d, h;
            for (u = 0, c = r; u < c; ++u)
              (d = u + n),
                (h = e[d]),
                (l[u] = { x: i.parse(Vr(h, a), d), y: o.parse(Vr(h, s), d) });
            return l;
          }
          getParsed(t) {
            return this._cachedMeta._parsed[t];
          }
          getDataElement(t) {
            return this._cachedMeta.data[t];
          }
          applyStack(t, e, n) {
            const r = this.chart,
              i = this._cachedMeta,
              o = e[t.axis];
            return Ba(
              { keys: Va(r, !0), values: e._stacks[t.axis] },
              o,
              i.index,
              { mode: n }
            );
          }
          updateRangeFromParsed(t, e, n, r) {
            const i = n[e.axis];
            let o = null === i ? NaN : i;
            const a = r && n._stacks[e.axis];
            r && a && ((r.values = a), (o = Ba(r, i, this._cachedMeta.index))),
              (t.min = Math.min(t.min, o)),
              (t.max = Math.max(t.max, o));
          }
          getMinMax(t, e) {
            const n = this._cachedMeta,
              r = n._parsed,
              i = n._sorted && t === n.iScale,
              o = r.length,
              a = this._getOtherScale(t),
              s = ((t, e, n) =>
                t &&
                !e.hidden &&
                e._stacked && { keys: Va(n, !0), values: null })(
                e,
                n,
                this.chart
              ),
              l = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
              },
              { min: u, max: c } = (function (t) {
                const {
                  min: e,
                  max: n,
                  minDefined: r,
                  maxDefined: i,
                } = t.getUserBounds();
                return {
                  min: r ? e : Number.NEGATIVE_INFINITY,
                  max: i ? n : Number.POSITIVE_INFINITY,
                };
              })(a);
            let d, h;
            function f() {
              h = r[d];
              const e = h[a.axis];
              return !Pr(h[t.axis]) || u > e || c < e;
            }
            for (
              d = 0;
              d < o && (f() || (this.updateRangeFromParsed(l, t, h, s), !i));
              ++d
            );
            if (i)
              for (d = o - 1; d >= 0; --d)
                if (!f()) {
                  this.updateRangeFromParsed(l, t, h, s);
                  break;
                }
            return l;
          }
          getAllParsedValues(t) {
            const e = this._cachedMeta._parsed,
              n = [];
            let r, i, o;
            for (r = 0, i = e.length; r < i; ++r)
              (o = e[r][t.axis]), Pr(o) && n.push(o);
            return n;
          }
          getMaxOverflow() {
            return !1;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              n = e.iScale,
              r = e.vScale,
              i = this.getParsed(t);
            return {
              label: n ? '' + n.getLabelForValue(i[n.axis]) : '',
              value: r ? '' + r.getLabelForValue(i[r.axis]) : '',
            };
          }
          _update(t) {
            const e = this._cachedMeta;
            this.update(t || 'default'),
              (e._clip = (function (t) {
                let e, n, r, i;
                return (
                  Mr(t)
                    ? ((e = t.top), (n = t.right), (r = t.bottom), (i = t.left))
                    : (e = n = r = i = t),
                  { top: e, right: n, bottom: r, left: i, disabled: !1 === t }
                );
              })(
                Cr(
                  this.options.clip,
                  (function (t, e, n) {
                    if (!1 === n) return !1;
                    const r = ja(t, n),
                      i = ja(e, n);
                    return {
                      top: i.end,
                      right: r.end,
                      bottom: i.start,
                      left: r.start,
                    };
                  })(e.xScale, e.yScale, this.getMaxOverflow())
                )
              ));
          }
          update(t) {}
          draw() {
            const t = this._ctx,
              e = this.chart,
              n = this._cachedMeta,
              r = n.data || [],
              i = e.chartArea,
              o = [],
              a = this._drawStart || 0,
              s = this._drawCount || r.length - a,
              l = this.options.drawActiveElementsOnTop;
            let u;
            for (
              n.dataset && n.dataset.draw(t, i, a, s), u = a;
              u < a + s;
              ++u
            ) {
              const e = r[u];
              e.hidden || (e.active && l ? o.push(e) : e.draw(t, i));
            }
            for (u = 0; u < o.length; ++u) o[u].draw(t, i);
          }
          getStyle(t, e) {
            const n = e ? 'active' : 'default';
            return void 0 === t && this._cachedMeta.dataset
              ? this.resolveDatasetElementOptions(n)
              : this.resolveDataElementOptions(t || 0, n);
          }
          getContext(t, e, n) {
            const r = this.getDataset();
            let i;
            if (t >= 0 && t < this._cachedMeta.data.length) {
              const e = this._cachedMeta.data[t];
              (i =
                e.$context ||
                (e.$context = (function (t, e, n) {
                  return Bo(t, {
                    active: !1,
                    dataIndex: e,
                    parsed: void 0,
                    raw: void 0,
                    element: n,
                    index: e,
                    mode: 'default',
                    type: 'data',
                  });
                })(this.getContext(), t, e))),
                (i.parsed = this.getParsed(t)),
                (i.raw = r.data[t]),
                (i.index = i.dataIndex = t);
            } else
              (i =
                this.$context ||
                (this.$context = (function (t, e) {
                  return Bo(t, {
                    active: !1,
                    dataset: void 0,
                    datasetIndex: e,
                    index: e,
                    mode: 'default',
                    type: 'dataset',
                  });
                })(this.chart.getContext(), this.index))),
                (i.dataset = r),
                (i.index = i.datasetIndex = this.index);
            return (i.active = !!e), (i.mode = n), i;
          }
          resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t);
          }
          resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t);
          }
          _resolveElementOptions(t, e = 'default', n) {
            const r = 'active' === e,
              i = this._cachedDataOpts,
              o = t + '-' + e,
              a = i[o],
              s = this.enableOptionSharing && Wr(n);
            if (a) return Ya(a, s);
            const l = this.chart.config,
              u = l.datasetElementScopeKeys(this._type, t),
              c = r ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
              d = l.getOptionScopes(this.getDataset(), u),
              h = Object.keys(mo.elements[t]),
              f = l.resolveNamedOptions(d, h, () => this.getContext(n, r), c);
            return (
              f.$shared && ((f.$shared = s), (i[o] = Object.freeze(Ya(f, s)))),
              f
            );
          }
          _resolveAnimations(t, e, n) {
            const r = this.chart,
              i = this._cachedDataOpts,
              o = `animation-${e}`,
              a = i[o];
            if (a) return a;
            let s;
            if (!1 !== r.options.animation) {
              const r = this.chart.config,
                i = r.datasetAnimationScopeKeys(this._type, e),
                o = r.getOptionScopes(this.getDataset(), i);
              s = r.createResolver(o, this.getContext(t, n, e));
            }
            const l = new Fa(r, s && s.animations);
            return s && s._cacheable && (i[o] = Object.freeze(l)), l;
          }
          getSharedOptions(t) {
            if (t.$shared)
              return (
                this._sharedOptions ||
                (this._sharedOptions = Object.assign({}, t))
              );
          }
          includeOptions(t, e) {
            return !e || Ka(t) || this.chart._animationsDisabled;
          }
          _getSharedOptions(t, e) {
            const n = this.resolveDataElementOptions(t, e),
              r = this._sharedOptions,
              i = this.getSharedOptions(n),
              o = this.includeOptions(e, i) || i !== r;
            return (
              this.updateSharedOptions(i, e, n),
              { sharedOptions: i, includeOptions: o }
            );
          }
          updateElement(t, e, n, r) {
            Ka(r)
              ? Object.assign(t, n)
              : this._resolveAnimations(e, r).update(t, n);
          }
          updateSharedOptions(t, e, n) {
            t && !Ka(e) && this._resolveAnimations(void 0, e).update(t, n);
          }
          _setStyle(t, e, n, r) {
            t.active = r;
            const i = this.getStyle(e, r);
            this._resolveAnimations(e, n, r).update(t, {
              options: (!r && this.getSharedOptions(i)) || i,
            });
          }
          removeHoverStyle(t, e, n) {
            this._setStyle(t, n, 'active', !1);
          }
          setHoverStyle(t, e, n) {
            this._setStyle(t, n, 'active', !0);
          }
          _removeDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, 'active', !1);
          }
          _setDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, 'active', !0);
          }
          _resyncElements(t) {
            const e = this._data,
              n = this._cachedMeta.data;
            for (const [t, e, n] of this._syncList) this[t](e, n);
            this._syncList = [];
            const r = n.length,
              i = e.length,
              o = Math.min(i, r);
            o && this.parse(0, o),
              i > r
                ? this._insertElements(r, i - r, t)
                : i < r && this._removeElements(i, r - i);
          }
          _insertElements(t, e, n = !0) {
            const r = this._cachedMeta,
              i = r.data,
              o = t + e;
            let a;
            const s = (t) => {
              for (t.length += e, a = t.length - 1; a >= o; a--)
                t[a] = t[a - e];
            };
            for (s(i), a = t; a < o; ++a) i[a] = new this.dataElementType();
            this._parsing && s(r._parsed),
              this.parse(t, e),
              n && this.updateElements(i, t, e, 'reset');
          }
          updateElements(t, e, n, r) {}
          _removeElements(t, e) {
            const n = this._cachedMeta;
            if (this._parsing) {
              const r = n._parsed.splice(t, e);
              n._stacked && Qa(n, r);
            }
            n.data.splice(t, e);
          }
          _sync(t) {
            if (this._parsing) this._syncList.push(t);
            else {
              const [e, n, r] = t;
              this[e](n, r);
            }
            this.chart._dataChanges.push([this.index, ...t]);
          }
          _onDataPush() {
            const t = arguments.length;
            this._sync([
              '_insertElements',
              this.getDataset().data.length - t,
              t,
            ]);
          }
          _onDataPop() {
            this._sync([
              '_removeElements',
              this._cachedMeta.data.length - 1,
              1,
            ]);
          }
          _onDataShift() {
            this._sync(['_removeElements', 0, 1]);
          }
          _onDataSplice(t, e) {
            e && this._sync(['_removeElements', t, e]);
            const n = arguments.length - 2;
            n && this._sync(['_insertElements', t, n]);
          }
          _onDataUnshift() {
            this._sync(['_insertElements', 0, arguments.length]);
          }
        }
        function Ga(t) {
          const e = t.iScale,
            n = (function (t, e) {
              if (!t._cache.$bar) {
                const n = t.getMatchingVisibleMetas(e);
                let r = [];
                for (let e = 0, i = n.length; e < i; e++)
                  r = r.concat(n[e].controller.getAllParsedValues(t));
                t._cache.$bar = xi(r.sort((t, e) => t - e));
              }
              return t._cache.$bar;
            })(e, t.type);
          let r,
            i,
            o,
            a,
            s = e._length;
          const l = () => {
            32767 !== o &&
              -32768 !== o &&
              (Wr(a) && (s = Math.min(s, Math.abs(o - a) || s)), (a = o));
          };
          for (r = 0, i = n.length; r < i; ++r)
            (o = e.getPixelForValue(n[r])), l();
          for (a = void 0, r = 0, i = e.ticks.length; r < i; ++r)
            (o = e.getPixelForTick(r)), l();
          return s;
        }
        function Za(t, e, n, r) {
          return (
            Sr(t)
              ? (function (t, e, n, r) {
                  const i = n.parse(t[0], r),
                    o = n.parse(t[1], r),
                    a = Math.min(i, o),
                    s = Math.max(i, o);
                  let l = a,
                    u = s;
                  Math.abs(a) > Math.abs(s) && ((l = s), (u = a)),
                    (e[n.axis] = u),
                    (e._custom = {
                      barStart: l,
                      barEnd: u,
                      start: i,
                      end: o,
                      min: a,
                      max: s,
                    });
                })(t, e, n, r)
              : (e[n.axis] = n.parse(t, r)),
            e
          );
        }
        function Ja(t, e, n, r) {
          const i = t.iScale,
            o = t.vScale,
            a = i.getLabels(),
            s = i === o,
            l = [];
          let u, c, d, h;
          for (u = n, c = n + r; u < c; ++u)
            (h = e[u]),
              (d = {}),
              (d[i.axis] = s || i.parse(a[u], u)),
              l.push(Za(h, d, o, u));
          return l;
        }
        function ts(t) {
          return t && void 0 !== t.barStart && void 0 !== t.barEnd;
        }
        function es(t, e, n, r) {
          let i = e.borderSkipped;
          const o = {};
          if (!i) return void (t.borderSkipped = o);
          if (!0 === i)
            return void (t.borderSkipped = {
              top: !0,
              right: !0,
              bottom: !0,
              left: !0,
            });
          const {
            start: a,
            end: s,
            reverse: l,
            top: u,
            bottom: c,
          } = (function (t) {
            let e, n, r, i, o;
            return (
              t.horizontal
                ? ((e = t.base > t.x), (n = 'left'), (r = 'right'))
                : ((e = t.base < t.y), (n = 'bottom'), (r = 'top')),
              e ? ((i = 'end'), (o = 'start')) : ((i = 'start'), (o = 'end')),
              { start: n, end: r, reverse: e, top: i, bottom: o }
            );
          })(t);
          'middle' === i &&
            n &&
            ((t.enableBorderRadius = !0),
            (n._top || 0) === r
              ? (i = u)
              : (n._bottom || 0) === r
              ? (i = c)
              : ((o[ns(c, a, s, l)] = !0), (i = u))),
            (o[ns(i, a, s, l)] = !0),
            (t.borderSkipped = o);
        }
        function ns(t, e, n, r) {
          var i, o, a;
          return (
            r
              ? ((a = n),
                (t = rs((t = (i = t) === (o = e) ? a : i === a ? o : i), n, e)))
              : (t = rs(t, e, n)),
            t
          );
        }
        function rs(t, e, n) {
          return 'start' === t ? e : 'end' === t ? n : t;
        }
        function is(t, { inflateAmount: e }, n) {
          t.inflateAmount = 'auto' === e ? (1 === n ? 0.33 : 0) : e;
        }
        (Xa.defaults = {}),
          (Xa.prototype.datasetElementType = null),
          (Xa.prototype.dataElementType = null);
        class os extends Xa {
          parsePrimitiveData(t, e, n, r) {
            return Ja(t, e, n, r);
          }
          parseArrayData(t, e, n, r) {
            return Ja(t, e, n, r);
          }
          parseObjectData(t, e, n, r) {
            const { iScale: i, vScale: o } = t,
              { xAxisKey: a = 'x', yAxisKey: s = 'y' } = this._parsing,
              l = 'x' === i.axis ? a : s,
              u = 'x' === o.axis ? a : s,
              c = [];
            let d, h, f, p;
            for (d = n, h = n + r; d < h; ++d)
              (p = e[d]),
                (f = {}),
                (f[i.axis] = i.parse(Vr(p, l), d)),
                c.push(Za(Vr(p, u), f, o, d));
            return c;
          }
          updateRangeFromParsed(t, e, n, r) {
            super.updateRangeFromParsed(t, e, n, r);
            const i = n._custom;
            i &&
              e === this._cachedMeta.vScale &&
              ((t.min = Math.min(t.min, i.min)),
              (t.max = Math.max(t.max, i.max)));
          }
          getMaxOverflow() {
            return 0;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              { iScale: n, vScale: r } = e,
              i = this.getParsed(t),
              o = i._custom,
              a = ts(o)
                ? '[' + o.start + ', ' + o.end + ']'
                : '' + r.getLabelForValue(i[r.axis]);
            return { label: '' + n.getLabelForValue(i[n.axis]), value: a };
          }
          initialize() {
            (this.enableOptionSharing = !0),
              super.initialize(),
              (this._cachedMeta.stack = this.getDataset().stack);
          }
          update(t) {
            const e = this._cachedMeta;
            this.updateElements(e.data, 0, e.data.length, t);
          }
          updateElements(t, e, n, r) {
            const i = 'reset' === r,
              {
                index: o,
                _cachedMeta: { vScale: a },
              } = this,
              s = a.getBasePixel(),
              l = a.isHorizontal(),
              u = this._getRuler(),
              { sharedOptions: c, includeOptions: d } = this._getSharedOptions(
                e,
                r
              );
            for (let h = e; h < e + n; h++) {
              const e = this.getParsed(h),
                n =
                  i || kr(e[a.axis])
                    ? { base: s, head: s }
                    : this._calculateBarValuePixels(h),
                f = this._calculateBarIndexPixels(h, u),
                p = (e._stacks || {})[a.axis],
                g = {
                  horizontal: l,
                  base: n.base,
                  enableBorderRadius:
                    !p || ts(e._custom) || o === p._top || o === p._bottom,
                  x: l ? n.head : f.center,
                  y: l ? f.center : n.head,
                  height: l ? f.size : Math.abs(n.size),
                  width: l ? Math.abs(n.size) : f.size,
                };
              d &&
                (g.options =
                  c ||
                  this.resolveDataElementOptions(
                    h,
                    t[h].active ? 'active' : r
                  ));
              const m = g.options || t[h].options;
              es(g, m, p, o),
                is(g, m, u.ratio),
                this.updateElement(t[h], h, g, r);
            }
          }
          _getStacks(t, e) {
            const { iScale: n } = this._cachedMeta,
              r = n
                .getMatchingVisibleMetas(this._type)
                .filter((t) => t.controller.options.grouped),
              i = n.options.stacked,
              o = [],
              a = (t) => {
                const n = t.controller.getParsed(e),
                  r = n && n[t.vScale.axis];
                if (kr(r) || isNaN(r)) return !0;
              };
            for (const n of r)
              if (
                (void 0 === e || !a(n)) &&
                ((!1 === i ||
                  -1 === o.indexOf(n.stack) ||
                  (void 0 === i && void 0 === n.stack)) &&
                  o.push(n.stack),
                n.index === t)
              )
                break;
            return o.length || o.push(void 0), o;
          }
          _getStackCount(t) {
            return this._getStacks(void 0, t).length;
          }
          _getStackIndex(t, e, n) {
            const r = this._getStacks(t, n),
              i = void 0 !== e ? r.indexOf(e) : -1;
            return -1 === i ? r.length - 1 : i;
          }
          _getRuler() {
            const t = this.options,
              e = this._cachedMeta,
              n = e.iScale,
              r = [];
            let i, o;
            for (i = 0, o = e.data.length; i < o; ++i)
              r.push(n.getPixelForValue(this.getParsed(i)[n.axis], i));
            const a = t.barThickness;
            return {
              min: a || Ga(e),
              pixels: r,
              start: n._startPixel,
              end: n._endPixel,
              stackCount: this._getStackCount(),
              scale: n,
              grouped: t.grouped,
              ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
            };
          }
          _calculateBarValuePixels(t) {
            const {
                _cachedMeta: { vScale: e, _stacked: n },
                options: { base: r, minBarLength: i },
              } = this,
              o = r || 0,
              a = this.getParsed(t),
              s = a._custom,
              l = ts(s);
            let u,
              c,
              d = a[e.axis],
              h = 0,
              f = n ? this.applyStack(e, a, n) : d;
            f !== d && ((h = f - d), (f = d)),
              l &&
                ((d = s.barStart),
                (f = s.barEnd - s.barStart),
                0 !== d && ti(d) !== ti(s.barEnd) && (h = 0),
                (h += d));
            const p = kr(r) || l ? h : r;
            let g = e.getPixelForValue(p);
            if (
              ((u = this.chart.getDataVisibility(t)
                ? e.getPixelForValue(h + f)
                : g),
              (c = u - g),
              Math.abs(c) < i)
            ) {
              (c =
                (function (t, e, n) {
                  return 0 !== t
                    ? ti(t)
                    : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
                })(c, e, o) * i),
                d === o && (g -= c / 2);
              const t = e.getPixelForDecimal(0),
                n = e.getPixelForDecimal(1),
                r = Math.min(t, n),
                a = Math.max(t, n);
              (g = Math.max(Math.min(g, a), r)), (u = g + c);
            }
            if (g === e.getPixelForValue(o)) {
              const t = (ti(c) * e.getLineWidthForValue(o)) / 2;
              (g += t), (c -= t);
            }
            return { size: c, base: g, head: u, center: u + c / 2 };
          }
          _calculateBarIndexPixels(t, e) {
            const n = e.scale,
              r = this.options,
              i = r.skipNull,
              o = Cr(r.maxBarThickness, 1 / 0);
            let a, s;
            if (e.grouped) {
              const n = i ? this._getStackCount(t) : e.stackCount,
                l =
                  'flex' === r.barThickness
                    ? (function (t, e, n, r) {
                        const i = e.pixels,
                          o = i[t];
                        let a = t > 0 ? i[t - 1] : null,
                          s = t < i.length - 1 ? i[t + 1] : null;
                        const l = n.categoryPercentage;
                        null === a &&
                          (a = o - (null === s ? e.end - e.start : s - o)),
                          null === s && (s = o + o - a);
                        const u = o - ((o - Math.min(a, s)) / 2) * l;
                        return {
                          chunk: ((Math.abs(s - a) / 2) * l) / r,
                          ratio: n.barPercentage,
                          start: u,
                        };
                      })(t, e, r, n)
                    : (function (t, e, n, r) {
                        const i = n.barThickness;
                        let o, a;
                        return (
                          kr(i)
                            ? ((o = e.min * n.categoryPercentage),
                              (a = n.barPercentage))
                            : ((o = i * r), (a = 1)),
                          { chunk: o / r, ratio: a, start: e.pixels[t] - o / 2 }
                        );
                      })(t, e, r, n),
                u = this._getStackIndex(
                  this.index,
                  this._cachedMeta.stack,
                  i ? t : void 0
                );
              (a = l.start + l.chunk * u + l.chunk / 2),
                (s = Math.min(o, l.chunk * l.ratio));
            } else
              (a = n.getPixelForValue(this.getParsed(t)[n.axis], t)),
                (s = Math.min(o, e.min * e.ratio));
            return { base: a - s / 2, head: a + s / 2, center: a, size: s };
          }
          draw() {
            const t = this._cachedMeta,
              e = t.vScale,
              n = t.data,
              r = n.length;
            let i = 0;
            for (; i < r; ++i)
              null !== this.getParsed(i)[e.axis] && n[i].draw(this._ctx);
          }
        }
        (os.id = 'bar'),
          (os.defaults = {
            datasetElementType: !1,
            dataElementType: 'bar',
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            grouped: !0,
            animations: {
              numbers: {
                type: 'number',
                properties: ['x', 'y', 'base', 'width', 'height'],
              },
            },
          }),
          (os.overrides = {
            scales: {
              _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
              _value_: { type: 'linear', beginAtZero: !0 },
            },
          });
        class as extends Xa {
          initialize() {
            (this.enableOptionSharing = !0), super.initialize();
          }
          parsePrimitiveData(t, e, n, r) {
            const i = super.parsePrimitiveData(t, e, n, r);
            for (let t = 0; t < i.length; t++)
              i[t]._custom = this.resolveDataElementOptions(t + n).radius;
            return i;
          }
          parseArrayData(t, e, n, r) {
            const i = super.parseArrayData(t, e, n, r);
            for (let t = 0; t < i.length; t++) {
              const r = e[n + t];
              i[t]._custom = Cr(
                r[2],
                this.resolveDataElementOptions(t + n).radius
              );
            }
            return i;
          }
          parseObjectData(t, e, n, r) {
            const i = super.parseObjectData(t, e, n, r);
            for (let t = 0; t < i.length; t++) {
              const r = e[n + t];
              i[t]._custom = Cr(
                r && r.r && +r.r,
                this.resolveDataElementOptions(t + n).radius
              );
            }
            return i;
          }
          getMaxOverflow() {
            const t = this._cachedMeta.data;
            let e = 0;
            for (let n = t.length - 1; n >= 0; --n)
              e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
            return e > 0 && e;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              { xScale: n, yScale: r } = e,
              i = this.getParsed(t),
              o = n.getLabelForValue(i.x),
              a = r.getLabelForValue(i.y),
              s = i._custom;
            return {
              label: e.label,
              value: '(' + o + ', ' + a + (s ? ', ' + s : '') + ')',
            };
          }
          update(t) {
            const e = this._cachedMeta.data;
            this.updateElements(e, 0, e.length, t);
          }
          updateElements(t, e, n, r) {
            const i = 'reset' === r,
              { iScale: o, vScale: a } = this._cachedMeta,
              { sharedOptions: s, includeOptions: l } = this._getSharedOptions(
                e,
                r
              ),
              u = o.axis,
              c = a.axis;
            for (let d = e; d < e + n; d++) {
              const e = t[d],
                n = !i && this.getParsed(d),
                h = {},
                f = (h[u] = i
                  ? o.getPixelForDecimal(0.5)
                  : o.getPixelForValue(n[u])),
                p = (h[c] = i ? a.getBasePixel() : a.getPixelForValue(n[c]));
              (h.skip = isNaN(f) || isNaN(p)),
                l &&
                  ((h.options =
                    s ||
                    this.resolveDataElementOptions(d, e.active ? 'active' : r)),
                  i && (h.options.radius = 0)),
                this.updateElement(e, d, h, r);
            }
          }
          resolveDataElementOptions(t, e) {
            const n = this.getParsed(t);
            let r = super.resolveDataElementOptions(t, e);
            r.$shared && (r = Object.assign({}, r, { $shared: !1 }));
            const i = r.radius;
            return (
              'active' !== e && (r.radius = 0),
              (r.radius += Cr(n && n._custom, i)),
              r
            );
          }
        }
        (as.id = 'bubble'),
          (as.defaults = {
            datasetElementType: !1,
            dataElementType: 'point',
            animations: {
              numbers: {
                type: 'number',
                properties: ['x', 'y', 'borderWidth', 'radius'],
              },
            },
          }),
          (as.overrides = {
            scales: { x: { type: 'linear' }, y: { type: 'linear' } },
            plugins: { tooltip: { callbacks: { title: () => '' } } },
          });
        class ss extends Xa {
          constructor(t, e) {
            super(t, e),
              (this.enableOptionSharing = !0),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0),
              (this.offsetX = void 0),
              (this.offsetY = void 0);
          }
          linkScales() {}
          parse(t, e) {
            const n = this.getDataset().data,
              r = this._cachedMeta;
            if (!1 === this._parsing) r._parsed = n;
            else {
              let i,
                o,
                a = (t) => +n[t];
              if (Mr(n[t])) {
                const { key: t = 'value' } = this._parsing;
                a = (e) => +Vr(n[e], t);
              }
              for (i = t, o = t + e; i < o; ++i) r._parsed[i] = a(i);
            }
          }
          _getRotation() {
            return oi(this.options.rotation - 90);
          }
          _getCircumference() {
            return oi(this.options.circumference);
          }
          _getRotationExtents() {
            let t = Ur,
              e = -Ur;
            for (let n = 0; n < this.chart.data.datasets.length; ++n)
              if (this.chart.isDatasetVisible(n)) {
                const r = this.chart.getDatasetMeta(n).controller,
                  i = r._getRotation(),
                  o = r._getCircumference();
                (t = Math.min(t, i)), (e = Math.max(e, i + o));
              }
            return { rotation: t, circumference: e - t };
          }
          update(t) {
            const e = this.chart,
              { chartArea: n } = e,
              r = this._cachedMeta,
              i = r.data,
              o =
                this.getMaxBorderWidth() +
                this.getMaxOffset(i) +
                this.options.spacing,
              a = Math.max((Math.min(n.width, n.height) - o) / 2, 0),
              s = Math.min(
                ((u = a),
                'string' == typeof (l = this.options.cutout) && l.endsWith('%')
                  ? parseFloat(l) / 100
                  : l / u),
                1
              );
            var l, u;
            const c = this._getRingWeight(this.index),
              { circumference: d, rotation: h } = this._getRotationExtents(),
              {
                ratioX: f,
                ratioY: p,
                offsetX: g,
                offsetY: m,
              } = (function (t, e, n) {
                let r = 1,
                  i = 1,
                  o = 0,
                  a = 0;
                if (e < Ur) {
                  const s = t,
                    l = s + e,
                    u = Math.cos(s),
                    c = Math.sin(s),
                    d = Math.cos(l),
                    h = Math.sin(l),
                    f = (t, e, r) =>
                      hi(t, s, l, !0) ? 1 : Math.max(e, e * n, r, r * n),
                    p = (t, e, r) =>
                      hi(t, s, l, !0) ? -1 : Math.min(e, e * n, r, r * n),
                    g = f(0, u, d),
                    m = f(Xr, c, h),
                    b = p($r, u, d),
                    y = p($r + Xr, c, h);
                  (r = (g - b) / 2),
                    (i = (m - y) / 2),
                    (o = -(g + b) / 2),
                    (a = -(m + y) / 2);
                }
                return { ratioX: r, ratioY: i, offsetX: o, offsetY: a };
              })(h, d, s),
              b = (n.width - o) / f,
              y = (n.height - o) / p,
              v = Math.max(Math.min(b, y) / 2, 0),
              x = Or(this.options.radius, v),
              _ =
                (x - Math.max(x * s, 0)) / this._getVisibleDatasetWeightTotal();
            (this.offsetX = g * x),
              (this.offsetY = m * x),
              (r.total = this.calculateTotal()),
              (this.outerRadius =
                x - _ * this._getRingWeightOffset(this.index)),
              (this.innerRadius = Math.max(this.outerRadius - _ * c, 0)),
              this.updateElements(i, 0, i.length, t);
          }
          _circumference(t, e) {
            const n = this.options,
              r = this._cachedMeta,
              i = this._getCircumference();
            return (e && n.animation.animateRotate) ||
              !this.chart.getDataVisibility(t) ||
              null === r._parsed[t] ||
              r.data[t].hidden
              ? 0
              : this.calculateCircumference((r._parsed[t] * i) / Ur);
          }
          updateElements(t, e, n, r) {
            const i = 'reset' === r,
              o = this.chart,
              a = o.chartArea,
              s = o.options.animation,
              l = (a.left + a.right) / 2,
              u = (a.top + a.bottom) / 2,
              c = i && s.animateScale,
              d = c ? 0 : this.innerRadius,
              h = c ? 0 : this.outerRadius,
              { sharedOptions: f, includeOptions: p } = this._getSharedOptions(
                e,
                r
              );
            let g,
              m = this._getRotation();
            for (g = 0; g < e; ++g) m += this._circumference(g, i);
            for (g = e; g < e + n; ++g) {
              const e = this._circumference(g, i),
                n = t[g],
                o = {
                  x: l + this.offsetX,
                  y: u + this.offsetY,
                  startAngle: m,
                  endAngle: m + e,
                  circumference: e,
                  outerRadius: h,
                  innerRadius: d,
                };
              p &&
                (o.options =
                  f ||
                  this.resolveDataElementOptions(g, n.active ? 'active' : r)),
                (m += e),
                this.updateElement(n, g, o, r);
            }
          }
          calculateTotal() {
            const t = this._cachedMeta,
              e = t.data;
            let n,
              r = 0;
            for (n = 0; n < e.length; n++) {
              const i = t._parsed[n];
              null === i ||
                isNaN(i) ||
                !this.chart.getDataVisibility(n) ||
                e[n].hidden ||
                (r += Math.abs(i));
            }
            return r;
          }
          calculateCircumference(t) {
            const e = this._cachedMeta.total;
            return e > 0 && !isNaN(t) ? Ur * (Math.abs(t) / e) : 0;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              n = this.chart,
              r = n.data.labels || [],
              i = ka(e._parsed[t], n.options.locale);
            return { label: r[t] || '', value: i };
          }
          getMaxBorderWidth(t) {
            let e = 0;
            const n = this.chart;
            let r, i, o, a, s;
            if (!t)
              for (r = 0, i = n.data.datasets.length; r < i; ++r)
                if (n.isDatasetVisible(r)) {
                  (o = n.getDatasetMeta(r)), (t = o.data), (a = o.controller);
                  break;
                }
            if (!t) return 0;
            for (r = 0, i = t.length; r < i; ++r)
              (s = a.resolveDataElementOptions(r)),
                'inner' !== s.borderAlign &&
                  (e = Math.max(
                    e,
                    s.borderWidth || 0,
                    s.hoverBorderWidth || 0
                  ));
            return e;
          }
          getMaxOffset(t) {
            let e = 0;
            for (let n = 0, r = t.length; n < r; ++n) {
              const t = this.resolveDataElementOptions(n);
              e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
            }
            return e;
          }
          _getRingWeightOffset(t) {
            let e = 0;
            for (let n = 0; n < t; ++n)
              this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
            return e;
          }
          _getRingWeight(t) {
            return Math.max(Cr(this.chart.data.datasets[t].weight, 1), 0);
          }
          _getVisibleDatasetWeightTotal() {
            return (
              this._getRingWeightOffset(this.chart.data.datasets.length) || 1
            );
          }
        }
        (ss.id = 'doughnut'),
          (ss.defaults = {
            datasetElementType: !1,
            dataElementType: 'arc',
            animation: { animateRotate: !0, animateScale: !1 },
            animations: {
              numbers: {
                type: 'number',
                properties: [
                  'circumference',
                  'endAngle',
                  'innerRadius',
                  'outerRadius',
                  'startAngle',
                  'x',
                  'y',
                  'offset',
                  'borderWidth',
                  'spacing',
                ],
              },
            },
            cutout: '50%',
            rotation: 0,
            circumference: 360,
            radius: '100%',
            spacing: 0,
            indexAxis: 'r',
          }),
          (ss.descriptors = {
            _scriptable: (t) => 'spacing' !== t,
            _indexable: (t) => 'spacing' !== t,
          }),
          (ss.overrides = {
            aspectRatio: 1,
            plugins: {
              legend: {
                labels: {
                  generateLabels(t) {
                    const e = t.data;
                    if (e.labels.length && e.datasets.length) {
                      const {
                        labels: { pointStyle: n },
                      } = t.legend.options;
                      return e.labels.map((e, r) => {
                        const i = t.getDatasetMeta(0).controller.getStyle(r);
                        return {
                          text: e,
                          fillStyle: i.backgroundColor,
                          strokeStyle: i.borderColor,
                          lineWidth: i.borderWidth,
                          pointStyle: n,
                          hidden: !t.getDataVisibility(r),
                          index: r,
                        };
                      });
                    }
                    return [];
                  },
                },
                onClick(t, e, n) {
                  n.chart.toggleDataVisibility(e.index), n.chart.update();
                },
              },
              tooltip: {
                callbacks: {
                  title: () => '',
                  label(t) {
                    let e = t.label;
                    const n = ': ' + t.formattedValue;
                    return Sr(e) ? ((e = e.slice()), (e[0] += n)) : (e += n), e;
                  },
                },
              },
            },
          });
        class ls extends Xa {
          initialize() {
            (this.enableOptionSharing = !0),
              (this.supportsDecimation = !0),
              super.initialize();
          }
          update(t) {
            const e = this._cachedMeta,
              { dataset: n, data: r = [], _dataset: i } = e,
              o = this.chart._animationsDisabled;
            let { start: a, count: s } = Mi(e, r, o);
            (this._drawStart = a),
              (this._drawCount = s),
              Pi(e) && ((a = 0), (s = r.length)),
              (n._chart = this.chart),
              (n._datasetIndex = this.index),
              (n._decimated = !!i._decimated),
              (n.points = r);
            const l = this.resolveDatasetElementOptions(t);
            this.options.showLine || (l.borderWidth = 0),
              (l.segment = this.options.segment),
              this.updateElement(n, void 0, { animated: !o, options: l }, t),
              this.updateElements(r, a, s, t);
          }
          updateElements(t, e, n, r) {
            const i = 'reset' === r,
              {
                iScale: o,
                vScale: a,
                _stacked: s,
                _dataset: l,
              } = this._cachedMeta,
              { sharedOptions: u, includeOptions: c } = this._getSharedOptions(
                e,
                r
              ),
              d = o.axis,
              h = a.axis,
              { spanGaps: f, segment: p } = this.options,
              g = ni(f) ? f : Number.POSITIVE_INFINITY,
              m = this.chart._animationsDisabled || i || 'none' === r;
            let b = e > 0 && this.getParsed(e - 1);
            for (let f = e; f < e + n; ++f) {
              const e = t[f],
                n = this.getParsed(f),
                y = m ? e : {},
                v = kr(n[h]),
                x = (y[d] = o.getPixelForValue(n[d], f)),
                _ = (y[h] =
                  i || v
                    ? a.getBasePixel()
                    : a.getPixelForValue(
                        s ? this.applyStack(a, n, s) : n[h],
                        f
                      ));
              (y.skip = isNaN(x) || isNaN(_) || v),
                (y.stop = f > 0 && Math.abs(n[d] - b[d]) > g),
                p && ((y.parsed = n), (y.raw = l.data[f])),
                c &&
                  (y.options =
                    u ||
                    this.resolveDataElementOptions(f, e.active ? 'active' : r)),
                m || this.updateElement(e, f, y, r),
                (b = n);
            }
          }
          getMaxOverflow() {
            const t = this._cachedMeta,
              e = t.dataset,
              n = (e.options && e.options.borderWidth) || 0,
              r = t.data || [];
            if (!r.length) return n;
            const i = r[0].size(this.resolveDataElementOptions(0)),
              o = r[r.length - 1].size(
                this.resolveDataElementOptions(r.length - 1)
              );
            return Math.max(n, i, o) / 2;
          }
          draw() {
            const t = this._cachedMeta;
            t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
              super.draw();
          }
        }
        (ls.id = 'line'),
          (ls.defaults = {
            datasetElementType: 'line',
            dataElementType: 'point',
            showLine: !0,
            spanGaps: !1,
          }),
          (ls.overrides = {
            scales: {
              _index_: { type: 'category' },
              _value_: { type: 'linear' },
            },
          });
        class us extends Xa {
          constructor(t, e) {
            super(t, e),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0);
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              n = this.chart,
              r = n.data.labels || [],
              i = ka(e._parsed[t].r, n.options.locale);
            return { label: r[t] || '', value: i };
          }
          parseObjectData(t, e, n, r) {
            return ea.bind(this)(t, e, n, r);
          }
          update(t) {
            const e = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(e, 0, e.length, t);
          }
          getMinMax() {
            const t = this._cachedMeta,
              e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
              };
            return (
              t.data.forEach((t, n) => {
                const r = this.getParsed(n).r;
                !isNaN(r) &&
                  this.chart.getDataVisibility(n) &&
                  (r < e.min && (e.min = r), r > e.max && (e.max = r));
              }),
              e
            );
          }
          _updateRadius() {
            const t = this.chart,
              e = t.chartArea,
              n = t.options,
              r = Math.min(e.right - e.left, e.bottom - e.top),
              i = Math.max(r / 2, 0),
              o =
                (i -
                  Math.max(
                    n.cutoutPercentage ? (i / 100) * n.cutoutPercentage : 1,
                    0
                  )) /
                t.getVisibleDatasetCount();
            (this.outerRadius = i - o * this.index),
              (this.innerRadius = this.outerRadius - o);
          }
          updateElements(t, e, n, r) {
            const i = 'reset' === r,
              o = this.chart,
              a = o.options.animation,
              s = this._cachedMeta.rScale,
              l = s.xCenter,
              u = s.yCenter,
              c = s.getIndexAngle(0) - 0.5 * $r;
            let d,
              h = c;
            const f = 360 / this.countVisibleElements();
            for (d = 0; d < e; ++d) h += this._computeAngle(d, r, f);
            for (d = e; d < e + n; d++) {
              const e = t[d];
              let n = h,
                p = h + this._computeAngle(d, r, f),
                g = o.getDataVisibility(d)
                  ? s.getDistanceFromCenterForValue(this.getParsed(d).r)
                  : 0;
              (h = p),
                i &&
                  (a.animateScale && (g = 0), a.animateRotate && (n = p = c));
              const m = {
                x: l,
                y: u,
                innerRadius: 0,
                outerRadius: g,
                startAngle: n,
                endAngle: p,
                options: this.resolveDataElementOptions(
                  d,
                  e.active ? 'active' : r
                ),
              };
              this.updateElement(e, d, m, r);
            }
          }
          countVisibleElements() {
            const t = this._cachedMeta;
            let e = 0;
            return (
              t.data.forEach((t, n) => {
                !isNaN(this.getParsed(n).r) &&
                  this.chart.getDataVisibility(n) &&
                  e++;
              }),
              e
            );
          }
          _computeAngle(t, e, n) {
            return this.chart.getDataVisibility(t)
              ? oi(this.resolveDataElementOptions(t, e).angle || n)
              : 0;
          }
        }
        (us.id = 'polarArea'),
          (us.defaults = {
            dataElementType: 'arc',
            animation: { animateRotate: !0, animateScale: !0 },
            animations: {
              numbers: {
                type: 'number',
                properties: [
                  'x',
                  'y',
                  'startAngle',
                  'endAngle',
                  'innerRadius',
                  'outerRadius',
                ],
              },
            },
            indexAxis: 'r',
            startAngle: 0,
          }),
          (us.overrides = {
            aspectRatio: 1,
            plugins: {
              legend: {
                labels: {
                  generateLabels(t) {
                    const e = t.data;
                    if (e.labels.length && e.datasets.length) {
                      const {
                        labels: { pointStyle: n },
                      } = t.legend.options;
                      return e.labels.map((e, r) => {
                        const i = t.getDatasetMeta(0).controller.getStyle(r);
                        return {
                          text: e,
                          fillStyle: i.backgroundColor,
                          strokeStyle: i.borderColor,
                          lineWidth: i.borderWidth,
                          pointStyle: n,
                          hidden: !t.getDataVisibility(r),
                          index: r,
                        };
                      });
                    }
                    return [];
                  },
                },
                onClick(t, e, n) {
                  n.chart.toggleDataVisibility(e.index), n.chart.update();
                },
              },
              tooltip: {
                callbacks: {
                  title: () => '',
                  label: (t) =>
                    t.chart.data.labels[t.dataIndex] + ': ' + t.formattedValue,
                },
              },
            },
            scales: {
              r: {
                type: 'radialLinear',
                angleLines: { display: !1 },
                beginAtZero: !0,
                grid: { circular: !0 },
                pointLabels: { display: !1 },
                startAngle: 0,
              },
            },
          });
        class cs extends ss {}
        (cs.id = 'pie'),
          (cs.defaults = {
            cutout: 0,
            rotation: 0,
            circumference: 360,
            radius: '100%',
          });
        class ds extends Xa {
          getLabelAndValue(t) {
            const e = this._cachedMeta.vScale,
              n = this.getParsed(t);
            return {
              label: e.getLabels()[t],
              value: '' + e.getLabelForValue(n[e.axis]),
            };
          }
          parseObjectData(t, e, n, r) {
            return ea.bind(this)(t, e, n, r);
          }
          update(t) {
            const e = this._cachedMeta,
              n = e.dataset,
              r = e.data || [],
              i = e.iScale.getLabels();
            if (((n.points = r), 'resize' !== t)) {
              const e = this.resolveDatasetElementOptions(t);
              this.options.showLine || (e.borderWidth = 0);
              const o = {
                _loop: !0,
                _fullLoop: i.length === r.length,
                options: e,
              };
              this.updateElement(n, void 0, o, t);
            }
            this.updateElements(r, 0, r.length, t);
          }
          updateElements(t, e, n, r) {
            const i = this._cachedMeta.rScale,
              o = 'reset' === r;
            for (let a = e; a < e + n; a++) {
              const e = t[a],
                n = this.resolveDataElementOptions(a, e.active ? 'active' : r),
                s = i.getPointPositionForValue(a, this.getParsed(a).r),
                l = o ? i.xCenter : s.x,
                u = o ? i.yCenter : s.y,
                c = {
                  x: l,
                  y: u,
                  angle: s.angle,
                  skip: isNaN(l) || isNaN(u),
                  options: n,
                };
              this.updateElement(e, a, c, r);
            }
          }
        }
        (ds.id = 'radar'),
          (ds.defaults = {
            datasetElementType: 'line',
            dataElementType: 'point',
            indexAxis: 'r',
            showLine: !0,
            elements: { line: { fill: 'start' } },
          }),
          (ds.overrides = {
            aspectRatio: 1,
            scales: { r: { type: 'radialLinear' } },
          });
        class hs {
          constructor() {
            (this.x = void 0),
              (this.y = void 0),
              (this.active = !1),
              (this.options = void 0),
              (this.$animations = void 0);
          }
          tooltipPosition(t) {
            const { x: e, y: n } = this.getProps(['x', 'y'], t);
            return { x: e, y: n };
          }
          hasValue() {
            return ni(this.x) && ni(this.y);
          }
          getProps(t, e) {
            const n = this.$animations;
            if (!e || !n) return this;
            const r = {};
            return (
              t.forEach((t) => {
                r[t] = n[t] && n[t].active() ? n[t]._to : this[t];
              }),
              r
            );
          }
        }
        (hs.defaults = {}), (hs.defaultRoutes = void 0);
        const fs = {
          values: (t) => (Sr(t) ? t : '' + t),
          numeric(t, e, n) {
            if (0 === t) return '0';
            const r = this.chart.options.locale;
            let i,
              o = t;
            if (n.length > 1) {
              const e = Math.max(
                Math.abs(n[0].value),
                Math.abs(n[n.length - 1].value)
              );
              (e < 1e-4 || e > 1e15) && (i = 'scientific'),
                (o = (function (t, e) {
                  let n =
                    e.length > 3
                      ? e[2].value - e[1].value
                      : e[1].value - e[0].value;
                  return (
                    Math.abs(n) >= 1 &&
                      t !== Math.floor(t) &&
                      (n = t - Math.floor(t)),
                    n
                  );
                })(t, n));
            }
            const a = Jr(Math.abs(o)),
              s = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
              l = {
                notation: i,
                minimumFractionDigits: s,
                maximumFractionDigits: s,
              };
            return Object.assign(l, this.options.ticks.format), ka(t, r, l);
          },
          logarithmic(t, e, n) {
            if (0 === t) return '0';
            const r = t / Math.pow(10, Math.floor(Jr(t)));
            return 1 === r || 2 === r || 5 === r
              ? fs.numeric.call(this, t, e, n)
              : '';
          },
        };
        var ps = { formatters: fs };
        function gs(t, e, n, r, i) {
          const o = Cr(r, 0),
            a = Math.min(Cr(i, t.length), t.length);
          let s,
            l,
            u,
            c = 0;
          for (
            n = Math.ceil(n),
              i && ((s = i - r), (n = s / Math.floor(s / n))),
              u = o;
            u < 0;

          )
            c++, (u = Math.round(o + c * n));
          for (l = Math.max(o, 0); l < a; l++)
            l === u && (e.push(t[l]), c++, (u = Math.round(o + c * n)));
        }
        mo.set('scale', {
          display: !0,
          offset: !1,
          reverse: !1,
          beginAtZero: !1,
          bounds: 'ticks',
          grace: 0,
          grid: {
            display: !0,
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t, e) => e.lineWidth,
            tickColor: (t, e) => e.color,
            offset: !1,
            borderDash: [],
            borderDashOffset: 0,
            borderWidth: 1,
          },
          title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
          ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: '',
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: ps.formatters.values,
            minor: {},
            major: {},
            align: 'center',
            crossAlign: 'near',
            showLabelBackdrop: !1,
            backdropColor: 'rgba(255, 255, 255, 0.75)',
            backdropPadding: 2,
          },
        }),
          mo.route('scale.ticks', 'color', '', 'color'),
          mo.route('scale.grid', 'color', '', 'borderColor'),
          mo.route('scale.grid', 'borderColor', '', 'borderColor'),
          mo.route('scale.title', 'color', '', 'color'),
          mo.describe('scale', {
            _fallback: !1,
            _scriptable: (t) =>
              !t.startsWith('before') &&
              !t.startsWith('after') &&
              'callback' !== t &&
              'parser' !== t,
            _indexable: (t) => 'borderDash' !== t && 'tickBorderDash' !== t,
          }),
          mo.describe('scales', { _fallback: 'scale' }),
          mo.describe('scale.ticks', {
            _scriptable: (t) => 'backdropPadding' !== t && 'callback' !== t,
            _indexable: (t) => 'backdropPadding' !== t,
          });
        const ms = (t, e, n) =>
          'top' === e || 'left' === e ? t[e] + n : t[e] - n;
        function bs(t, e) {
          const n = [],
            r = t.length / e,
            i = t.length;
          let o = 0;
          for (; o < i; o += r) n.push(t[Math.floor(o)]);
          return n;
        }
        function ys(t, e, n) {
          const r = t.ticks.length,
            i = Math.min(e, r - 1),
            o = t._startPixel,
            a = t._endPixel,
            s = 1e-6;
          let l,
            u = t.getPixelForTick(i);
          if (
            !(
              n &&
              ((l =
                1 === r
                  ? Math.max(u - o, a - u)
                  : 0 === e
                  ? (t.getPixelForTick(1) - u) / 2
                  : (u - t.getPixelForTick(i - 1)) / 2),
              (u += i < e ? l : -l),
              u < o - s || u > a + s)
            )
          )
            return u;
        }
        function vs(t) {
          return t.drawTicks ? t.tickLength : 0;
        }
        function xs(t, e) {
          if (!t.display) return 0;
          const n = jo(t.font, e),
            r = Fo(t.padding);
          return (Sr(t.text) ? t.text.length : 1) * n.lineHeight + r.height;
        }
        function _s(t, e, n) {
          let r = ki(t);
          return (
            ((n && 'right' !== e) || (!n && 'right' === e)) &&
              (r = ((t) =>
                'left' === t ? 'right' : 'right' === t ? 'left' : t)(r)),
            r
          );
        }
        class ws extends hs {
          constructor(t) {
            super(),
              (this.id = t.id),
              (this.type = t.type),
              (this.options = void 0),
              (this.ctx = t.ctx),
              (this.chart = t.chart),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
              (this.maxWidth = void 0),
              (this.maxHeight = void 0),
              (this.paddingTop = void 0),
              (this.paddingBottom = void 0),
              (this.paddingLeft = void 0),
              (this.paddingRight = void 0),
              (this.axis = void 0),
              (this.labelRotation = void 0),
              (this.min = void 0),
              (this.max = void 0),
              (this._range = void 0),
              (this.ticks = []),
              (this._gridLineItems = null),
              (this._labelItems = null),
              (this._labelSizes = null),
              (this._length = 0),
              (this._maxLength = 0),
              (this._longestTextCache = {}),
              (this._startPixel = void 0),
              (this._endPixel = void 0),
              (this._reversePixels = !1),
              (this._userMax = void 0),
              (this._userMin = void 0),
              (this._suggestedMax = void 0),
              (this._suggestedMin = void 0),
              (this._ticksLength = 0),
              (this._borderValue = 0),
              (this._cache = {}),
              (this._dataLimitsCached = !1),
              (this.$context = void 0);
          }
          init(t) {
            (this.options = t.setContext(this.getContext())),
              (this.axis = t.axis),
              (this._userMin = this.parse(t.min)),
              (this._userMax = this.parse(t.max)),
              (this._suggestedMin = this.parse(t.suggestedMin)),
              (this._suggestedMax = this.parse(t.suggestedMax));
          }
          parse(t, e) {
            return t;
          }
          getUserBounds() {
            let {
              _userMin: t,
              _userMax: e,
              _suggestedMin: n,
              _suggestedMax: r,
            } = this;
            return (
              (t = Er(t, Number.POSITIVE_INFINITY)),
              (e = Er(e, Number.NEGATIVE_INFINITY)),
              (n = Er(n, Number.POSITIVE_INFINITY)),
              (r = Er(r, Number.NEGATIVE_INFINITY)),
              {
                min: Er(t, n),
                max: Er(e, r),
                minDefined: Pr(t),
                maxDefined: Pr(e),
              }
            );
          }
          getMinMax(t) {
            let e,
              {
                min: n,
                max: r,
                minDefined: i,
                maxDefined: o,
              } = this.getUserBounds();
            if (i && o) return { min: n, max: r };
            const a = this.getMatchingVisibleMetas();
            for (let s = 0, l = a.length; s < l; ++s)
              (e = a[s].controller.getMinMax(this, t)),
                i || (n = Math.min(n, e.min)),
                o || (r = Math.max(r, e.max));
            return (
              (n = o && n > r ? r : n),
              (r = i && n > r ? n : r),
              { min: Er(n, Er(r, n)), max: Er(r, Er(n, r)) }
            );
          }
          getPadding() {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0,
            };
          }
          getTicks() {
            return this.ticks;
          }
          getLabels() {
            const t = this.chart.data;
            return (
              this.options.labels ||
              (this.isHorizontal() ? t.xLabels : t.yLabels) ||
              t.labels ||
              []
            );
          }
          beforeLayout() {
            (this._cache = {}), (this._dataLimitsCached = !1);
          }
          beforeUpdate() {
            Dr(this.options.beforeUpdate, [this]);
          }
          update(t, e, n) {
            const { beginAtZero: r, grace: i, ticks: o } = this.options,
              a = o.sampleSize;
            this.beforeUpdate(),
              (this.maxWidth = t),
              (this.maxHeight = e),
              (this._margins = n =
                Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
              (this.ticks = null),
              (this._labelSizes = null),
              (this._gridLineItems = null),
              (this._labelItems = null),
              this.beforeSetDimensions(),
              this.setDimensions(),
              this.afterSetDimensions(),
              (this._maxLength = this.isHorizontal()
                ? this.width + n.left + n.right
                : this.height + n.top + n.bottom),
              this._dataLimitsCached ||
                (this.beforeDataLimits(),
                this.determineDataLimits(),
                this.afterDataLimits(),
                (this._range = (function (t, e, n) {
                  const { min: r, max: i } = t,
                    o = Or(e, (i - r) / 2),
                    a = (t, e) => (n && 0 === t ? 0 : t + e);
                  return { min: a(r, -Math.abs(o)), max: a(i, o) };
                })(this, i, r)),
                (this._dataLimitsCached = !0)),
              this.beforeBuildTicks(),
              (this.ticks = this.buildTicks() || []),
              this.afterBuildTicks();
            const s = a < this.ticks.length;
            this._convertTicksToLabels(s ? bs(this.ticks, a) : this.ticks),
              this.configure(),
              this.beforeCalculateLabelRotation(),
              this.calculateLabelRotation(),
              this.afterCalculateLabelRotation(),
              o.display &&
                (o.autoSkip || 'auto' === o.source) &&
                ((this.ticks = (function (t, e) {
                  const n = t.options.ticks,
                    r =
                      n.maxTicksLimit ||
                      (function (t) {
                        const e = t.options.offset,
                          n = t._tickSize(),
                          r = t._length / n + (e ? 0 : 1),
                          i = t._maxLength / n;
                        return Math.floor(Math.min(r, i));
                      })(t),
                    i = n.major.enabled
                      ? (function (t) {
                          const e = [];
                          let n, r;
                          for (n = 0, r = t.length; n < r; n++)
                            t[n].major && e.push(n);
                          return e;
                        })(e)
                      : [],
                    o = i.length,
                    a = i[0],
                    s = i[o - 1],
                    l = [];
                  if (o > r)
                    return (
                      (function (t, e, n, r) {
                        let i,
                          o = 0,
                          a = n[0];
                        for (r = Math.ceil(r), i = 0; i < t.length; i++)
                          i === a && (e.push(t[i]), o++, (a = n[o * r]));
                      })(e, l, i, o / r),
                      l
                    );
                  const u = (function (t, e, n) {
                    const r = (function (t) {
                        const e = t.length;
                        let n, r;
                        if (e < 2) return !1;
                        for (r = t[0], n = 1; n < e; ++n)
                          if (t[n] - t[n - 1] !== r) return !1;
                        return r;
                      })(t),
                      i = e.length / n;
                    if (!r) return Math.max(i, 1);
                    const o = (function (t) {
                      const e = [],
                        n = Math.sqrt(t);
                      let r;
                      for (r = 1; r < n; r++)
                        t % r == 0 && (e.push(r), e.push(t / r));
                      return (
                        n === (0 | n) && e.push(n),
                        e.sort((t, e) => t - e).pop(),
                        e
                      );
                    })(r);
                    for (let t = 0, e = o.length - 1; t < e; t++) {
                      const e = o[t];
                      if (e > i) return e;
                    }
                    return Math.max(i, 1);
                  })(i, e, r);
                  if (o > 0) {
                    let t, n;
                    const r = o > 1 ? Math.round((s - a) / (o - 1)) : null;
                    for (
                      gs(e, l, u, kr(r) ? 0 : a - r, a), t = 0, n = o - 1;
                      t < n;
                      t++
                    )
                      gs(e, l, u, i[t], i[t + 1]);
                    return gs(e, l, u, s, kr(r) ? e.length : s + r), l;
                  }
                  return gs(e, l, u), l;
                })(this, this.ticks)),
                (this._labelSizes = null),
                this.afterAutoSkip()),
              s && this._convertTicksToLabels(this.ticks),
              this.beforeFit(),
              this.fit(),
              this.afterFit(),
              this.afterUpdate();
          }
          configure() {
            let t,
              e,
              n = this.options.reverse;
            this.isHorizontal()
              ? ((t = this.left), (e = this.right))
              : ((t = this.top), (e = this.bottom), (n = !n)),
              (this._startPixel = t),
              (this._endPixel = e),
              (this._reversePixels = n),
              (this._length = e - t),
              (this._alignToPixels = this.options.alignToPixels);
          }
          afterUpdate() {
            Dr(this.options.afterUpdate, [this]);
          }
          beforeSetDimensions() {
            Dr(this.options.beforeSetDimensions, [this]);
          }
          setDimensions() {
            this.isHorizontal()
              ? ((this.width = this.maxWidth),
                (this.left = 0),
                (this.right = this.width))
              : ((this.height = this.maxHeight),
                (this.top = 0),
                (this.bottom = this.height)),
              (this.paddingLeft = 0),
              (this.paddingTop = 0),
              (this.paddingRight = 0),
              (this.paddingBottom = 0);
          }
          afterSetDimensions() {
            Dr(this.options.afterSetDimensions, [this]);
          }
          _callHooks(t) {
            this.chart.notifyPlugins(t, this.getContext()),
              Dr(this.options[t], [this]);
          }
          beforeDataLimits() {
            this._callHooks('beforeDataLimits');
          }
          determineDataLimits() {}
          afterDataLimits() {
            this._callHooks('afterDataLimits');
          }
          beforeBuildTicks() {
            this._callHooks('beforeBuildTicks');
          }
          buildTicks() {
            return [];
          }
          afterBuildTicks() {
            this._callHooks('afterBuildTicks');
          }
          beforeTickToLabelConversion() {
            Dr(this.options.beforeTickToLabelConversion, [this]);
          }
          generateTickLabels(t) {
            const e = this.options.ticks;
            let n, r, i;
            for (n = 0, r = t.length; n < r; n++)
              (i = t[n]), (i.label = Dr(e.callback, [i.value, n, t], this));
          }
          afterTickToLabelConversion() {
            Dr(this.options.afterTickToLabelConversion, [this]);
          }
          beforeCalculateLabelRotation() {
            Dr(this.options.beforeCalculateLabelRotation, [this]);
          }
          calculateLabelRotation() {
            const t = this.options,
              e = t.ticks,
              n = this.ticks.length,
              r = e.minRotation || 0,
              i = e.maxRotation;
            let o,
              a,
              s,
              l = r;
            if (
              !this._isVisible() ||
              !e.display ||
              r >= i ||
              n <= 1 ||
              !this.isHorizontal()
            )
              return void (this.labelRotation = r);
            const u = this._getLabelSizes(),
              c = u.widest.width,
              d = u.highest.height,
              h = fi(this.chart.width - c, 0, this.maxWidth);
            (o = t.offset ? this.maxWidth / n : h / (n - 1)),
              c + 6 > o &&
                ((o = h / (n - (t.offset ? 0.5 : 1))),
                (a =
                  this.maxHeight -
                  vs(t.grid) -
                  e.padding -
                  xs(t.title, this.chart.options.font)),
                (s = Math.sqrt(c * c + d * d)),
                (l = ai(
                  Math.min(
                    Math.asin(fi((u.highest.height + 6) / o, -1, 1)),
                    Math.asin(fi(a / s, -1, 1)) - Math.asin(fi(d / s, -1, 1))
                  )
                )),
                (l = Math.max(r, Math.min(i, l)))),
              (this.labelRotation = l);
          }
          afterCalculateLabelRotation() {
            Dr(this.options.afterCalculateLabelRotation, [this]);
          }
          afterAutoSkip() {}
          beforeFit() {
            Dr(this.options.beforeFit, [this]);
          }
          fit() {
            const t = { width: 0, height: 0 },
              {
                chart: e,
                options: { ticks: n, title: r, grid: i },
              } = this,
              o = this._isVisible(),
              a = this.isHorizontal();
            if (o) {
              const o = xs(r, e.options.font);
              if (
                (a
                  ? ((t.width = this.maxWidth), (t.height = vs(i) + o))
                  : ((t.height = this.maxHeight), (t.width = vs(i) + o)),
                n.display && this.ticks.length)
              ) {
                const {
                    first: e,
                    last: r,
                    widest: i,
                    highest: o,
                  } = this._getLabelSizes(),
                  s = 2 * n.padding,
                  l = oi(this.labelRotation),
                  u = Math.cos(l),
                  c = Math.sin(l);
                if (a) {
                  const e = n.mirror ? 0 : c * i.width + u * o.height;
                  t.height = Math.min(this.maxHeight, t.height + e + s);
                } else {
                  const e = n.mirror ? 0 : u * i.width + c * o.height;
                  t.width = Math.min(this.maxWidth, t.width + e + s);
                }
                this._calculatePadding(e, r, c, u);
              }
            }
            this._handleMargins(),
              a
                ? ((this.width = this._length =
                    e.width - this._margins.left - this._margins.right),
                  (this.height = t.height))
                : ((this.width = t.width),
                  (this.height = this._length =
                    e.height - this._margins.top - this._margins.bottom));
          }
          _calculatePadding(t, e, n, r) {
            const {
                ticks: { align: i, padding: o },
                position: a,
              } = this.options,
              s = 0 !== this.labelRotation,
              l = 'top' !== a && 'x' === this.axis;
            if (this.isHorizontal()) {
              const a = this.getPixelForTick(0) - this.left,
                u = this.right - this.getPixelForTick(this.ticks.length - 1);
              let c = 0,
                d = 0;
              s
                ? l
                  ? ((c = r * t.width), (d = n * e.height))
                  : ((c = n * t.height), (d = r * e.width))
                : 'start' === i
                ? (d = e.width)
                : 'end' === i
                ? (c = t.width)
                : 'inner' !== i && ((c = t.width / 2), (d = e.width / 2)),
                (this.paddingLeft = Math.max(
                  ((c - a + o) * this.width) / (this.width - a),
                  0
                )),
                (this.paddingRight = Math.max(
                  ((d - u + o) * this.width) / (this.width - u),
                  0
                ));
            } else {
              let n = e.height / 2,
                r = t.height / 2;
              'start' === i
                ? ((n = 0), (r = t.height))
                : 'end' === i && ((n = e.height), (r = 0)),
                (this.paddingTop = n + o),
                (this.paddingBottom = r + o);
            }
          }
          _handleMargins() {
            this._margins &&
              ((this._margins.left = Math.max(
                this.paddingLeft,
                this._margins.left
              )),
              (this._margins.top = Math.max(
                this.paddingTop,
                this._margins.top
              )),
              (this._margins.right = Math.max(
                this.paddingRight,
                this._margins.right
              )),
              (this._margins.bottom = Math.max(
                this.paddingBottom,
                this._margins.bottom
              )));
          }
          afterFit() {
            Dr(this.options.afterFit, [this]);
          }
          isHorizontal() {
            const { axis: t, position: e } = this.options;
            return 'top' === e || 'bottom' === e || 'x' === t;
          }
          isFullSize() {
            return this.options.fullSize;
          }
          _convertTicksToLabels(t) {
            let e, n;
            for (
              this.beforeTickToLabelConversion(),
                this.generateTickLabels(t),
                e = 0,
                n = t.length;
              e < n;
              e++
            )
              kr(t[e].label) && (t.splice(e, 1), n--, e--);
            this.afterTickToLabelConversion();
          }
          _getLabelSizes() {
            let t = this._labelSizes;
            if (!t) {
              const e = this.options.ticks.sampleSize;
              let n = this.ticks;
              e < n.length && (n = bs(n, e)),
                (this._labelSizes = t = this._computeLabelSizes(n, n.length));
            }
            return t;
          }
          _computeLabelSizes(t, e) {
            const { ctx: n, _longestTextCache: r } = this,
              i = [],
              o = [];
            let a,
              s,
              l,
              u,
              c,
              d,
              h,
              f,
              p,
              g,
              m,
              b = 0,
              y = 0;
            for (a = 0; a < e; ++a) {
              if (
                ((u = t[a].label),
                (c = this._resolveTickFontOptions(a)),
                (n.font = d = c.string),
                (h = r[d] = r[d] || { data: {}, gc: [] }),
                (f = c.lineHeight),
                (p = g = 0),
                kr(u) || Sr(u))
              ) {
                if (Sr(u))
                  for (s = 0, l = u.length; s < l; ++s)
                    (m = u[s]),
                      kr(m) ||
                        Sr(m) ||
                        ((p = bo(n, h.data, h.gc, p, m)), (g += f));
              } else (p = bo(n, h.data, h.gc, p, u)), (g = f);
              i.push(p), o.push(g), (b = Math.max(p, b)), (y = Math.max(g, y));
            }
            !(function (t, e) {
              Tr(t, (t) => {
                const n = t.gc,
                  r = n.length / 2;
                let i;
                if (r > e) {
                  for (i = 0; i < r; ++i) delete t.data[n[i]];
                  n.splice(0, r);
                }
              });
            })(r, e);
            const v = i.indexOf(b),
              x = o.indexOf(y),
              _ = (t) => ({ width: i[t] || 0, height: o[t] || 0 });
            return {
              first: _(0),
              last: _(e - 1),
              widest: _(v),
              highest: _(x),
              widths: i,
              heights: o,
            };
          }
          getLabelForValue(t) {
            return t;
          }
          getPixelForValue(t, e) {
            return NaN;
          }
          getValueForPixel(t) {}
          getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t].value);
          }
          getPixelForDecimal(t) {
            this._reversePixels && (t = 1 - t);
            const e = this._startPixel + t * this._length;
            return fi(
              this._alignToPixels ? vo(this.chart, e, 0) : e,
              -32768,
              32767
            );
          }
          getDecimalForPixel(t) {
            const e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e;
          }
          getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          }
          getBaseValue() {
            const { min: t, max: e } = this;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
          }
          getContext(t) {
            const e = this.ticks || [];
            if (t >= 0 && t < e.length) {
              const n = e[t];
              return (
                n.$context ||
                (n.$context = (function (t, e, n) {
                  return Bo(t, { tick: n, index: e, type: 'tick' });
                })(this.getContext(), t, n))
              );
            }
            return (
              this.$context ||
              (this.$context = Bo(this.chart.getContext(), {
                scale: this,
                type: 'scale',
              }))
            );
          }
          _tickSize() {
            const t = this.options.ticks,
              e = oi(this.labelRotation),
              n = Math.abs(Math.cos(e)),
              r = Math.abs(Math.sin(e)),
              i = this._getLabelSizes(),
              o = t.autoSkipPadding || 0,
              a = i ? i.widest.width + o : 0,
              s = i ? i.highest.height + o : 0;
            return this.isHorizontal()
              ? s * n > a * r
                ? a / n
                : s / r
              : s * r < a * n
              ? s / n
              : a / r;
          }
          _isVisible() {
            const t = this.options.display;
            return 'auto' !== t
              ? !!t
              : this.getMatchingVisibleMetas().length > 0;
          }
          _computeGridLineItems(t) {
            const e = this.axis,
              n = this.chart,
              r = this.options,
              { grid: i, position: o } = r,
              a = i.offset,
              s = this.isHorizontal(),
              l = this.ticks.length + (a ? 1 : 0),
              u = vs(i),
              c = [],
              d = i.setContext(this.getContext()),
              h = d.drawBorder ? d.borderWidth : 0,
              f = h / 2,
              p = function (t) {
                return vo(n, t, h);
              };
            let g, m, b, y, v, x, _, w, k, S, M, P;
            if ('top' === o)
              (g = p(this.bottom)),
                (x = this.bottom - u),
                (w = g - f),
                (S = p(t.top) + f),
                (P = t.bottom);
            else if ('bottom' === o)
              (g = p(this.top)),
                (S = t.top),
                (P = p(t.bottom) - f),
                (x = g + f),
                (w = this.top + u);
            else if ('left' === o)
              (g = p(this.right)),
                (v = this.right - u),
                (_ = g - f),
                (k = p(t.left) + f),
                (M = t.right);
            else if ('right' === o)
              (g = p(this.left)),
                (k = t.left),
                (M = p(t.right) - f),
                (v = g + f),
                (_ = this.left + u);
            else if ('x' === e) {
              if ('center' === o) g = p((t.top + t.bottom) / 2 + 0.5);
              else if (Mr(o)) {
                const t = Object.keys(o)[0],
                  e = o[t];
                g = p(this.chart.scales[t].getPixelForValue(e));
              }
              (S = t.top), (P = t.bottom), (x = g + f), (w = x + u);
            } else if ('y' === e) {
              if ('center' === o) g = p((t.left + t.right) / 2);
              else if (Mr(o)) {
                const t = Object.keys(o)[0],
                  e = o[t];
                g = p(this.chart.scales[t].getPixelForValue(e));
              }
              (v = g - f), (_ = v - u), (k = t.left), (M = t.right);
            }
            const E = Cr(r.ticks.maxTicksLimit, l),
              C = Math.max(1, Math.ceil(l / E));
            for (m = 0; m < l; m += C) {
              const t = i.setContext(this.getContext(m)),
                e = t.lineWidth,
                r = t.color,
                o = t.borderDash || [],
                l = t.borderDashOffset,
                u = t.tickWidth,
                d = t.tickColor,
                h = t.tickBorderDash || [],
                f = t.tickBorderDashOffset;
              (b = ys(this, m, a)),
                void 0 !== b &&
                  ((y = vo(n, b, e)),
                  s ? (v = _ = k = M = y) : (x = w = S = P = y),
                  c.push({
                    tx1: v,
                    ty1: x,
                    tx2: _,
                    ty2: w,
                    x1: k,
                    y1: S,
                    x2: M,
                    y2: P,
                    width: e,
                    color: r,
                    borderDash: o,
                    borderDashOffset: l,
                    tickWidth: u,
                    tickColor: d,
                    tickBorderDash: h,
                    tickBorderDashOffset: f,
                  }));
            }
            return (this._ticksLength = l), (this._borderValue = g), c;
          }
          _computeLabelItems(t) {
            const e = this.axis,
              n = this.options,
              { position: r, ticks: i } = n,
              o = this.isHorizontal(),
              a = this.ticks,
              { align: s, crossAlign: l, padding: u, mirror: c } = i,
              d = vs(n.grid),
              h = d + u,
              f = c ? -u : h,
              p = -oi(this.labelRotation),
              g = [];
            let m,
              b,
              y,
              v,
              x,
              _,
              w,
              k,
              S,
              M,
              P,
              E,
              C = 'middle';
            if ('top' === r)
              (_ = this.bottom - f), (w = this._getXAxisLabelAlignment());
            else if ('bottom' === r)
              (_ = this.top + f), (w = this._getXAxisLabelAlignment());
            else if ('left' === r) {
              const t = this._getYAxisLabelAlignment(d);
              (w = t.textAlign), (x = t.x);
            } else if ('right' === r) {
              const t = this._getYAxisLabelAlignment(d);
              (w = t.textAlign), (x = t.x);
            } else if ('x' === e) {
              if ('center' === r) _ = (t.top + t.bottom) / 2 + h;
              else if (Mr(r)) {
                const t = Object.keys(r)[0],
                  e = r[t];
                _ = this.chart.scales[t].getPixelForValue(e) + h;
              }
              w = this._getXAxisLabelAlignment();
            } else if ('y' === e) {
              if ('center' === r) x = (t.left + t.right) / 2 - h;
              else if (Mr(r)) {
                const t = Object.keys(r)[0],
                  e = r[t];
                x = this.chart.scales[t].getPixelForValue(e);
              }
              w = this._getYAxisLabelAlignment(d).textAlign;
            }
            'y' === e &&
              ('start' === s ? (C = 'top') : 'end' === s && (C = 'bottom'));
            const O = this._getLabelSizes();
            for (m = 0, b = a.length; m < b; ++m) {
              (y = a[m]), (v = y.label);
              const t = i.setContext(this.getContext(m));
              (k = this.getPixelForTick(m) + i.labelOffset),
                (S = this._resolveTickFontOptions(m)),
                (M = S.lineHeight),
                (P = Sr(v) ? v.length : 1);
              const e = P / 2,
                n = t.color,
                s = t.textStrokeColor,
                u = t.textStrokeWidth;
              let d,
                h = w;
              if (
                (o
                  ? ((x = k),
                    'inner' === w &&
                      (h =
                        m === b - 1
                          ? this.options.reverse
                            ? 'left'
                            : 'right'
                          : 0 === m
                          ? this.options.reverse
                            ? 'right'
                            : 'left'
                          : 'center'),
                    (E =
                      'top' === r
                        ? 'near' === l || 0 !== p
                          ? -P * M + M / 2
                          : 'center' === l
                          ? -O.highest.height / 2 - e * M + M
                          : -O.highest.height + M / 2
                        : 'near' === l || 0 !== p
                        ? M / 2
                        : 'center' === l
                        ? O.highest.height / 2 - e * M
                        : O.highest.height - P * M),
                    c && (E *= -1))
                  : ((_ = k), (E = ((1 - P) * M) / 2)),
                t.showLabelBackdrop)
              ) {
                const e = Fo(t.backdropPadding),
                  n = O.heights[m],
                  r = O.widths[m];
                let i = _ + E - e.top,
                  o = x - e.left;
                switch (C) {
                  case 'middle':
                    i -= n / 2;
                    break;
                  case 'bottom':
                    i -= n;
                }
                switch (w) {
                  case 'center':
                    o -= r / 2;
                    break;
                  case 'right':
                    o -= r;
                }
                d = {
                  left: o,
                  top: i,
                  width: r + e.width,
                  height: n + e.height,
                  color: t.backdropColor,
                };
              }
              g.push({
                rotation: p,
                label: v,
                font: S,
                color: n,
                strokeColor: s,
                strokeWidth: u,
                textOffset: E,
                textAlign: h,
                textBaseline: C,
                translation: [x, _],
                backdrop: d,
              });
            }
            return g;
          }
          _getXAxisLabelAlignment() {
            const { position: t, ticks: e } = this.options;
            if (-oi(this.labelRotation)) return 'top' === t ? 'left' : 'right';
            let n = 'center';
            return (
              'start' === e.align
                ? (n = 'left')
                : 'end' === e.align
                ? (n = 'right')
                : 'inner' === e.align && (n = 'inner'),
              n
            );
          }
          _getYAxisLabelAlignment(t) {
            const {
                position: e,
                ticks: { crossAlign: n, mirror: r, padding: i },
              } = this.options,
              o = t + i,
              a = this._getLabelSizes().widest.width;
            let s, l;
            return (
              'left' === e
                ? r
                  ? ((l = this.right + i),
                    'near' === n
                      ? (s = 'left')
                      : 'center' === n
                      ? ((s = 'center'), (l += a / 2))
                      : ((s = 'right'), (l += a)))
                  : ((l = this.right - o),
                    'near' === n
                      ? (s = 'right')
                      : 'center' === n
                      ? ((s = 'center'), (l -= a / 2))
                      : ((s = 'left'), (l = this.left)))
                : 'right' === e
                ? r
                  ? ((l = this.left + i),
                    'near' === n
                      ? (s = 'right')
                      : 'center' === n
                      ? ((s = 'center'), (l -= a / 2))
                      : ((s = 'left'), (l -= a)))
                  : ((l = this.left + o),
                    'near' === n
                      ? (s = 'left')
                      : 'center' === n
                      ? ((s = 'center'), (l += a / 2))
                      : ((s = 'right'), (l = this.right)))
                : (s = 'right'),
              { textAlign: s, x: l }
            );
          }
          _computeLabelArea() {
            if (this.options.ticks.mirror) return;
            const t = this.chart,
              e = this.options.position;
            return 'left' === e || 'right' === e
              ? { top: 0, left: this.left, bottom: t.height, right: this.right }
              : 'top' === e || 'bottom' === e
              ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
              : void 0;
          }
          drawBackground() {
            const {
              ctx: t,
              options: { backgroundColor: e },
              left: n,
              top: r,
              width: i,
              height: o,
            } = this;
            e &&
              (t.save(),
              (t.fillStyle = e),
              t.fillRect(n, r, i, o),
              t.restore());
          }
          getLineWidthForValue(t) {
            const e = this.options.grid;
            if (!this._isVisible() || !e.display) return 0;
            const n = this.ticks.findIndex((e) => e.value === t);
            return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
          }
          drawGrid(t) {
            const e = this.options.grid,
              n = this.ctx,
              r =
                this._gridLineItems ||
                (this._gridLineItems = this._computeGridLineItems(t));
            let i, o;
            const a = (t, e, r) => {
              r.width &&
                r.color &&
                (n.save(),
                (n.lineWidth = r.width),
                (n.strokeStyle = r.color),
                n.setLineDash(r.borderDash || []),
                (n.lineDashOffset = r.borderDashOffset),
                n.beginPath(),
                n.moveTo(t.x, t.y),
                n.lineTo(e.x, e.y),
                n.stroke(),
                n.restore());
            };
            if (e.display)
              for (i = 0, o = r.length; i < o; ++i) {
                const t = r[i];
                e.drawOnChartArea &&
                  a({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                  e.drawTicks &&
                    a(
                      { x: t.tx1, y: t.ty1 },
                      { x: t.tx2, y: t.ty2 },
                      {
                        color: t.tickColor,
                        width: t.tickWidth,
                        borderDash: t.tickBorderDash,
                        borderDashOffset: t.tickBorderDashOffset,
                      }
                    );
              }
          }
          drawBorder() {
            const {
                chart: t,
                ctx: e,
                options: { grid: n },
              } = this,
              r = n.setContext(this.getContext()),
              i = n.drawBorder ? r.borderWidth : 0;
            if (!i) return;
            const o = n.setContext(this.getContext(0)).lineWidth,
              a = this._borderValue;
            let s, l, u, c;
            this.isHorizontal()
              ? ((s = vo(t, this.left, i) - i / 2),
                (l = vo(t, this.right, o) + o / 2),
                (u = c = a))
              : ((u = vo(t, this.top, i) - i / 2),
                (c = vo(t, this.bottom, o) + o / 2),
                (s = l = a)),
              e.save(),
              (e.lineWidth = r.borderWidth),
              (e.strokeStyle = r.borderColor),
              e.beginPath(),
              e.moveTo(s, u),
              e.lineTo(l, c),
              e.stroke(),
              e.restore();
          }
          drawLabels(t) {
            if (!this.options.ticks.display) return;
            const e = this.ctx,
              n = this._computeLabelArea();
            n && So(e, n);
            const r =
              this._labelItems ||
              (this._labelItems = this._computeLabelItems(t));
            let i, o;
            for (i = 0, o = r.length; i < o; ++i) {
              const t = r[i],
                n = t.font,
                o = t.label;
              t.backdrop &&
                ((e.fillStyle = t.backdrop.color),
                e.fillRect(
                  t.backdrop.left,
                  t.backdrop.top,
                  t.backdrop.width,
                  t.backdrop.height
                )),
                Co(e, o, 0, t.textOffset, n, t);
            }
            n && Mo(e);
          }
          drawTitle() {
            const {
              ctx: t,
              options: { position: e, title: n, reverse: r },
            } = this;
            if (!n.display) return;
            const i = jo(n.font),
              o = Fo(n.padding),
              a = n.align;
            let s = i.lineHeight / 2;
            'bottom' === e || 'center' === e || Mr(e)
              ? ((s += o.bottom),
                Sr(n.text) && (s += i.lineHeight * (n.text.length - 1)))
              : (s += o.top);
            const {
              titleX: l,
              titleY: u,
              maxWidth: c,
              rotation: d,
            } = (function (t, e, n, r) {
              const { top: i, left: o, bottom: a, right: s, chart: l } = t,
                { chartArea: u, scales: c } = l;
              let d,
                h,
                f,
                p = 0;
              const g = a - i,
                m = s - o;
              if (t.isHorizontal()) {
                if (((h = Si(r, o, s)), Mr(n))) {
                  const t = Object.keys(n)[0],
                    r = n[t];
                  f = c[t].getPixelForValue(r) + g - e;
                } else
                  f =
                    'center' === n
                      ? (u.bottom + u.top) / 2 + g - e
                      : ms(t, n, e);
                d = s - o;
              } else {
                if (Mr(n)) {
                  const t = Object.keys(n)[0],
                    r = n[t];
                  h = c[t].getPixelForValue(r) - m + e;
                } else
                  h =
                    'center' === n
                      ? (u.left + u.right) / 2 - m + e
                      : ms(t, n, e);
                (f = Si(r, a, i)), (p = 'left' === n ? -Xr : Xr);
              }
              return { titleX: h, titleY: f, maxWidth: d, rotation: p };
            })(this, s, e, a);
            Co(t, n.text, 0, 0, i, {
              color: n.color,
              maxWidth: c,
              rotation: d,
              textAlign: _s(a, e, r),
              textBaseline: 'middle',
              translation: [l, u],
            });
          }
          draw(t) {
            this._isVisible() &&
              (this.drawBackground(),
              this.drawGrid(t),
              this.drawBorder(),
              this.drawTitle(),
              this.drawLabels(t));
          }
          _layers() {
            const t = this.options,
              e = (t.ticks && t.ticks.z) || 0,
              n = Cr(t.grid && t.grid.z, -1);
            return this._isVisible() && this.draw === ws.prototype.draw
              ? [
                  {
                    z: n,
                    draw: (t) => {
                      this.drawBackground(), this.drawGrid(t), this.drawTitle();
                    },
                  },
                  {
                    z: n + 1,
                    draw: () => {
                      this.drawBorder();
                    },
                  },
                  {
                    z: e,
                    draw: (t) => {
                      this.drawLabels(t);
                    },
                  },
                ]
              : [
                  {
                    z: e,
                    draw: (t) => {
                      this.draw(t);
                    },
                  },
                ];
          }
          getMatchingVisibleMetas(t) {
            const e = this.chart.getSortedVisibleDatasetMetas(),
              n = this.axis + 'AxisID',
              r = [];
            let i, o;
            for (i = 0, o = e.length; i < o; ++i) {
              const o = e[i];
              o[n] !== this.id || (t && o.type !== t) || r.push(o);
            }
            return r;
          }
          _resolveTickFontOptions(t) {
            return jo(this.options.ticks.setContext(this.getContext(t)).font);
          }
          _maxDigits() {
            const t = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / t;
          }
        }
        class ks {
          constructor(t, e, n) {
            (this.type = t),
              (this.scope = e),
              (this.override = n),
              (this.items = Object.create(null));
          }
          isForType(t) {
            return Object.prototype.isPrototypeOf.call(
              this.type.prototype,
              t.prototype
            );
          }
          register(t) {
            const e = Object.getPrototypeOf(t);
            let n;
            (function (t) {
              return 'id' in t && 'defaults' in t;
            })(e) && (n = this.register(e));
            const r = this.items,
              i = t.id,
              o = this.scope + '.' + i;
            if (!i) throw new Error('class does not have id: ' + t);
            return (
              i in r ||
                ((r[i] = t),
                (function (t, e, n) {
                  const r = Ir(Object.create(null), [
                    n ? mo.get(n) : {},
                    mo.get(e),
                    t.defaults,
                  ]);
                  mo.set(e, r),
                    t.defaultRoutes &&
                      (function (t, e) {
                        Object.keys(e).forEach((n) => {
                          const r = n.split('.'),
                            i = r.pop(),
                            o = [t].concat(r).join('.'),
                            a = e[n].split('.'),
                            s = a.pop(),
                            l = a.join('.');
                          mo.route(o, i, l, s);
                        });
                      })(e, t.defaultRoutes),
                    t.descriptors && mo.describe(e, t.descriptors);
                })(t, o, n),
                this.override && mo.override(t.id, t.overrides)),
              o
            );
          }
          get(t) {
            return this.items[t];
          }
          unregister(t) {
            const e = this.items,
              n = t.id,
              r = this.scope;
            n in e && delete e[n],
              r &&
                n in mo[r] &&
                (delete mo[r][n], this.override && delete ho[n]);
          }
        }
        var Ss = new (class {
          constructor() {
            (this.controllers = new ks(Xa, 'datasets', !0)),
              (this.elements = new ks(hs, 'elements')),
              (this.plugins = new ks(Object, 'plugins')),
              (this.scales = new ks(ws, 'scales')),
              (this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements,
              ]);
          }
          add(...t) {
            this._each('register', t);
          }
          remove(...t) {
            this._each('unregister', t);
          }
          addControllers(...t) {
            this._each('register', t, this.controllers);
          }
          addElements(...t) {
            this._each('register', t, this.elements);
          }
          addPlugins(...t) {
            this._each('register', t, this.plugins);
          }
          addScales(...t) {
            this._each('register', t, this.scales);
          }
          getController(t) {
            return this._get(t, this.controllers, 'controller');
          }
          getElement(t) {
            return this._get(t, this.elements, 'element');
          }
          getPlugin(t) {
            return this._get(t, this.plugins, 'plugin');
          }
          getScale(t) {
            return this._get(t, this.scales, 'scale');
          }
          removeControllers(...t) {
            this._each('unregister', t, this.controllers);
          }
          removeElements(...t) {
            this._each('unregister', t, this.elements);
          }
          removePlugins(...t) {
            this._each('unregister', t, this.plugins);
          }
          removeScales(...t) {
            this._each('unregister', t, this.scales);
          }
          _each(t, e, n) {
            [...e].forEach((e) => {
              const r = n || this._getRegistryForType(e);
              n || r.isForType(e) || (r === this.plugins && e.id)
                ? this._exec(t, r, e)
                : Tr(e, (e) => {
                    const r = n || this._getRegistryForType(e);
                    this._exec(t, r, e);
                  });
            });
          }
          _exec(t, e, n) {
            const r = Br(t);
            Dr(n['before' + r], [], n), e[t](n), Dr(n['after' + r], [], n);
          }
          _getRegistryForType(t) {
            for (let e = 0; e < this._typedRegistries.length; e++) {
              const n = this._typedRegistries[e];
              if (n.isForType(t)) return n;
            }
            return this.plugins;
          }
          _get(t, e, n) {
            const r = e.get(t);
            if (void 0 === r)
              throw new Error('"' + t + '" is not a registered ' + n + '.');
            return r;
          }
        })();
        class Ms extends Xa {
          update(t) {
            const e = this._cachedMeta,
              { data: n = [] } = e,
              r = this.chart._animationsDisabled;
            let { start: i, count: o } = Mi(e, n, r);
            if (
              ((this._drawStart = i),
              (this._drawCount = o),
              Pi(e) && ((i = 0), (o = n.length)),
              this.options.showLine)
            ) {
              const { dataset: i, _dataset: o } = e;
              (i._chart = this.chart),
                (i._datasetIndex = this.index),
                (i._decimated = !!o._decimated),
                (i.points = n);
              const a = this.resolveDatasetElementOptions(t);
              (a.segment = this.options.segment),
                this.updateElement(i, void 0, { animated: !r, options: a }, t);
            }
            this.updateElements(n, i, o, t);
          }
          addElements() {
            const { showLine: t } = this.options;
            !this.datasetElementType &&
              t &&
              (this.datasetElementType = Ss.getElement('line')),
              super.addElements();
          }
          updateElements(t, e, n, r) {
            const i = 'reset' === r,
              {
                iScale: o,
                vScale: a,
                _stacked: s,
                _dataset: l,
              } = this._cachedMeta,
              u = this.resolveDataElementOptions(e, r),
              c = this.getSharedOptions(u),
              d = this.includeOptions(r, c),
              h = o.axis,
              f = a.axis,
              { spanGaps: p, segment: g } = this.options,
              m = ni(p) ? p : Number.POSITIVE_INFINITY,
              b = this.chart._animationsDisabled || i || 'none' === r;
            let y = e > 0 && this.getParsed(e - 1);
            for (let u = e; u < e + n; ++u) {
              const e = t[u],
                n = this.getParsed(u),
                p = b ? e : {},
                v = kr(n[f]),
                x = (p[h] = o.getPixelForValue(n[h], u)),
                _ = (p[f] =
                  i || v
                    ? a.getBasePixel()
                    : a.getPixelForValue(
                        s ? this.applyStack(a, n, s) : n[f],
                        u
                      ));
              (p.skip = isNaN(x) || isNaN(_) || v),
                (p.stop = u > 0 && Math.abs(n[h] - y[h]) > m),
                g && ((p.parsed = n), (p.raw = l.data[u])),
                d &&
                  (p.options =
                    c ||
                    this.resolveDataElementOptions(u, e.active ? 'active' : r)),
                b || this.updateElement(e, u, p, r),
                (y = n);
            }
            this.updateSharedOptions(c, r, u);
          }
          getMaxOverflow() {
            const t = this._cachedMeta,
              e = t.data || [];
            if (!this.options.showLine) {
              let t = 0;
              for (let n = e.length - 1; n >= 0; --n)
                t = Math.max(
                  t,
                  e[n].size(this.resolveDataElementOptions(n)) / 2
                );
              return t > 0 && t;
            }
            const n = t.dataset,
              r = (n.options && n.options.borderWidth) || 0;
            if (!e.length) return r;
            const i = e[0].size(this.resolveDataElementOptions(0)),
              o = e[e.length - 1].size(
                this.resolveDataElementOptions(e.length - 1)
              );
            return Math.max(r, i, o) / 2;
          }
        }
        (Ms.id = 'scatter'),
          (Ms.defaults = {
            datasetElementType: !1,
            dataElementType: 'point',
            showLine: !1,
            fill: !1,
          }),
          (Ms.overrides = {
            interaction: { mode: 'point' },
            plugins: {
              tooltip: {
                callbacks: {
                  title: () => '',
                  label: (t) => '(' + t.label + ', ' + t.formattedValue + ')',
                },
              },
            },
            scales: { x: { type: 'linear' }, y: { type: 'linear' } },
          });
        var Ps = Object.freeze({
          __proto__: null,
          BarController: os,
          BubbleController: as,
          DoughnutController: ss,
          LineController: ls,
          PolarAreaController: us,
          PieController: cs,
          RadarController: ds,
          ScatterController: Ms,
        });
        function Es() {
          throw new Error(
            'This method is not implemented: Check that a complete date adapter is provided.'
          );
        }
        class Cs {
          constructor(t) {
            this.options = t || {};
          }
          init(t) {}
          formats() {
            return Es();
          }
          parse(t, e) {
            return Es();
          }
          format(t, e) {
            return Es();
          }
          add(t, e, n) {
            return Es();
          }
          diff(t, e, n) {
            return Es();
          }
          startOf(t, e, n) {
            return Es();
          }
          endOf(t, e) {
            return Es();
          }
        }
        Cs.override = function (t) {
          Object.assign(Cs.prototype, t);
        };
        var Os = { _date: Cs };
        function Ds(t, e, n, r) {
          const { controller: i, data: o, _sorted: a } = t,
            s = i._cachedMeta.iScale;
          if (s && e === s.axis && 'r' !== e && a && o.length) {
            const t = s._reversePixels ? bi : mi;
            if (!r) return t(o, e, n);
            if (i._sharedOptions) {
              const r = o[0],
                i = 'function' == typeof r.getRange && r.getRange(e);
              if (i) {
                const r = t(o, e, n - i),
                  a = t(o, e, n + i);
                return { lo: r.lo, hi: a.hi };
              }
            }
          }
          return { lo: 0, hi: o.length - 1 };
        }
        function Ts(t, e, n, r, i) {
          const o = t.getSortedVisibleDatasetMetas(),
            a = n[e];
          for (let t = 0, n = o.length; t < n; ++t) {
            const { index: n, data: s } = o[t],
              { lo: l, hi: u } = Ds(o[t], e, a, i);
            for (let t = l; t <= u; ++t) {
              const e = s[t];
              e.skip || r(e, n, t);
            }
          }
        }
        function Rs(t, e, n, r, i) {
          const o = [];
          return i || t.isPointInArea(e)
            ? (Ts(
                t,
                n,
                e,
                function (n, a, s) {
                  (i || ko(n, t.chartArea, 0)) &&
                    n.inRange(e.x, e.y, r) &&
                    o.push({ element: n, datasetIndex: a, index: s });
                },
                !0
              ),
              o)
            : o;
        }
        function As(t, e, n, r, i, o) {
          return o || t.isPointInArea(e)
            ? 'r' !== n || r
              ? (function (t, e, n, r, i, o) {
                  let a = [];
                  const s = (function (t) {
                    const e = -1 !== t.indexOf('x'),
                      n = -1 !== t.indexOf('y');
                    return function (t, r) {
                      const i = e ? Math.abs(t.x - r.x) : 0,
                        o = n ? Math.abs(t.y - r.y) : 0;
                      return Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2));
                    };
                  })(n);
                  let l = Number.POSITIVE_INFINITY;
                  return (
                    Ts(t, n, e, function (n, u, c) {
                      const d = n.inRange(e.x, e.y, i);
                      if (r && !d) return;
                      const h = n.getCenterPoint(i);
                      if (!o && !t.isPointInArea(h) && !d) return;
                      const f = s(e, h);
                      f < l
                        ? ((a = [{ element: n, datasetIndex: u, index: c }]),
                          (l = f))
                        : f === l &&
                          a.push({ element: n, datasetIndex: u, index: c });
                    }),
                    a
                  );
                })(t, e, n, r, i, o)
              : (function (t, e, n, r) {
                  let i = [];
                  return (
                    Ts(t, n, e, function (t, n, o) {
                      const { startAngle: a, endAngle: s } = t.getProps(
                          ['startAngle', 'endAngle'],
                          r
                        ),
                        { angle: l } = li(t, { x: e.x, y: e.y });
                      hi(l, a, s) &&
                        i.push({ element: t, datasetIndex: n, index: o });
                    }),
                    i
                  );
                })(t, e, n, i)
            : [];
        }
        function Ls(t, e, n, r, i) {
          const o = [],
            a = 'x' === n ? 'inXRange' : 'inYRange';
          let s = !1;
          return (
            Ts(t, n, e, (t, r, l) => {
              t[a](e[n], i) &&
                (o.push({ element: t, datasetIndex: r, index: l }),
                (s = s || t.inRange(e.x, e.y, i)));
            }),
            r && !s ? [] : o
          );
        }
        var zs = {
          evaluateInteractionItems: Ts,
          modes: {
            index(t, e, n, r) {
              const i = pa(e, t),
                o = n.axis || 'x',
                a = n.includeInvisible || !1,
                s = n.intersect ? Rs(t, i, o, r, a) : As(t, i, o, !1, r, a),
                l = [];
              return s.length
                ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                    const e = s[0].index,
                      n = t.data[e];
                    n &&
                      !n.skip &&
                      l.push({ element: n, datasetIndex: t.index, index: e });
                  }),
                  l)
                : [];
            },
            dataset(t, e, n, r) {
              const i = pa(e, t),
                o = n.axis || 'xy',
                a = n.includeInvisible || !1;
              let s = n.intersect ? Rs(t, i, o, r, a) : As(t, i, o, !1, r, a);
              if (s.length > 0) {
                const e = s[0].datasetIndex,
                  n = t.getDatasetMeta(e).data;
                s = [];
                for (let t = 0; t < n.length; ++t)
                  s.push({ element: n[t], datasetIndex: e, index: t });
              }
              return s;
            },
            point: (t, e, n, r) =>
              Rs(t, pa(e, t), n.axis || 'xy', r, n.includeInvisible || !1),
            nearest(t, e, n, r) {
              const i = pa(e, t),
                o = n.axis || 'xy',
                a = n.includeInvisible || !1;
              return As(t, i, o, n.intersect, r, a);
            },
            x: (t, e, n, r) => Ls(t, pa(e, t), 'x', n.intersect, r),
            y: (t, e, n, r) => Ls(t, pa(e, t), 'y', n.intersect, r),
          },
        };
        const Is = ['left', 'top', 'right', 'bottom'];
        function Ns(t, e) {
          return t.filter((t) => t.pos === e);
        }
        function Fs(t, e) {
          return t.filter((t) => -1 === Is.indexOf(t.pos) && t.box.axis === e);
        }
        function js(t, e) {
          return t.sort((t, n) => {
            const r = e ? n : t,
              i = e ? t : n;
            return r.weight === i.weight
              ? r.index - i.index
              : r.weight - i.weight;
          });
        }
        function Vs(t, e, n, r) {
          return Math.max(t[n], e[n]) + Math.max(t[r], e[r]);
        }
        function Bs(t, e) {
          (t.top = Math.max(t.top, e.top)),
            (t.left = Math.max(t.left, e.left)),
            (t.bottom = Math.max(t.bottom, e.bottom)),
            (t.right = Math.max(t.right, e.right));
        }
        function Ws(t, e, n, r) {
          const { pos: i, box: o } = n,
            a = t.maxPadding;
          if (!Mr(i)) {
            n.size && (t[i] -= n.size);
            const e = r[n.stack] || { size: 0, count: 1 };
            (e.size = Math.max(e.size, n.horizontal ? o.height : o.width)),
              (n.size = e.size / e.count),
              (t[i] += n.size);
          }
          o.getPadding && Bs(a, o.getPadding());
          const s = Math.max(0, e.outerWidth - Vs(a, t, 'left', 'right')),
            l = Math.max(0, e.outerHeight - Vs(a, t, 'top', 'bottom')),
            u = s !== t.w,
            c = l !== t.h;
          return (
            (t.w = s),
            (t.h = l),
            n.horizontal ? { same: u, other: c } : { same: c, other: u }
          );
        }
        function Hs(t, e) {
          const n = e.maxPadding;
          return (function (t) {
            const r = { left: 0, top: 0, right: 0, bottom: 0 };
            return (
              t.forEach((t) => {
                r[t] = Math.max(e[t], n[t]);
              }),
              r
            );
          })(t ? ['left', 'right'] : ['top', 'bottom']);
        }
        function qs(t, e, n, r) {
          const i = [];
          let o, a, s, l, u, c;
          for (o = 0, a = t.length, u = 0; o < a; ++o) {
            (s = t[o]),
              (l = s.box),
              l.update(s.width || e.w, s.height || e.h, Hs(s.horizontal, e));
            const { same: a, other: d } = Ws(e, n, s, r);
            (u |= a && i.length), (c = c || d), l.fullSize || i.push(s);
          }
          return (u && qs(i, e, n, r)) || c;
        }
        function $s(t, e, n, r, i) {
          (t.top = n),
            (t.left = e),
            (t.right = e + r),
            (t.bottom = n + i),
            (t.width = r),
            (t.height = i);
        }
        function Us(t, e, n, r) {
          const i = n.padding;
          let { x: o, y: a } = e;
          for (const s of t) {
            const t = s.box,
              l = r[s.stack] || { count: 1, placed: 0, weight: 1 },
              u = s.stackWeight / l.weight || 1;
            if (s.horizontal) {
              const r = e.w * u,
                o = l.size || t.height;
              Wr(l.start) && (a = l.start),
                t.fullSize
                  ? $s(t, i.left, a, n.outerWidth - i.right - i.left, o)
                  : $s(t, e.left + l.placed, a, r, o),
                (l.start = a),
                (l.placed += r),
                (a = t.bottom);
            } else {
              const r = e.h * u,
                a = l.size || t.width;
              Wr(l.start) && (o = l.start),
                t.fullSize
                  ? $s(t, o, i.top, a, n.outerHeight - i.bottom - i.top)
                  : $s(t, o, e.top + l.placed, a, r),
                (l.start = o),
                (l.placed += r),
                (o = t.right);
            }
          }
          (e.x = o), (e.y = a);
        }
        mo.set('layout', {
          autoPadding: !0,
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
        });
        var Qs = {
          addBox(t, e) {
            t.boxes || (t.boxes = []),
              (e.fullSize = e.fullSize || !1),
              (e.position = e.position || 'top'),
              (e.weight = e.weight || 0),
              (e._layers =
                e._layers ||
                function () {
                  return [
                    {
                      z: 0,
                      draw(t) {
                        e.draw(t);
                      },
                    },
                  ];
                }),
              t.boxes.push(e);
          },
          removeBox(t, e) {
            const n = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== n && t.boxes.splice(n, 1);
          },
          configure(t, e, n) {
            (e.fullSize = n.fullSize),
              (e.position = n.position),
              (e.weight = n.weight);
          },
          update(t, e, n, r) {
            if (!t) return;
            const i = Fo(t.options.layout.padding),
              o = Math.max(e - i.width, 0),
              a = Math.max(n - i.height, 0),
              s = (function (t) {
                const e = (function (t) {
                    const e = [];
                    let n, r, i, o, a, s;
                    for (n = 0, r = (t || []).length; n < r; ++n)
                      (i = t[n]),
                        ({
                          position: o,
                          options: { stack: a, stackWeight: s = 1 },
                        } = i),
                        e.push({
                          index: n,
                          box: i,
                          pos: o,
                          horizontal: i.isHorizontal(),
                          weight: i.weight,
                          stack: a && o + a,
                          stackWeight: s,
                        });
                    return e;
                  })(t),
                  n = js(
                    e.filter((t) => t.box.fullSize),
                    !0
                  ),
                  r = js(Ns(e, 'left'), !0),
                  i = js(Ns(e, 'right')),
                  o = js(Ns(e, 'top'), !0),
                  a = js(Ns(e, 'bottom')),
                  s = Fs(e, 'x'),
                  l = Fs(e, 'y');
                return {
                  fullSize: n,
                  leftAndTop: r.concat(o),
                  rightAndBottom: i.concat(l).concat(a).concat(s),
                  chartArea: Ns(e, 'chartArea'),
                  vertical: r.concat(i).concat(l),
                  horizontal: o.concat(a).concat(s),
                };
              })(t.boxes),
              l = s.vertical,
              u = s.horizontal;
            Tr(t.boxes, (t) => {
              'function' == typeof t.beforeLayout && t.beforeLayout();
            });
            const c =
                l.reduce(
                  (t, e) =>
                    e.box.options && !1 === e.box.options.display ? t : t + 1,
                  0
                ) || 1,
              d = Object.freeze({
                outerWidth: e,
                outerHeight: n,
                padding: i,
                availableWidth: o,
                availableHeight: a,
                vBoxMaxWidth: o / 2 / c,
                hBoxMaxHeight: a / 2,
              }),
              h = Object.assign({}, i);
            Bs(h, Fo(r));
            const f = Object.assign(
                { maxPadding: h, w: o, h: a, x: i.left, y: i.top },
                i
              ),
              p = (function (t, e) {
                const n = (function (t) {
                    const e = {};
                    for (const n of t) {
                      const { stack: t, pos: r, stackWeight: i } = n;
                      if (!t || !Is.includes(r)) continue;
                      const o =
                        e[t] ||
                        (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                      o.count++, (o.weight += i);
                    }
                    return e;
                  })(t),
                  { vBoxMaxWidth: r, hBoxMaxHeight: i } = e;
                let o, a, s;
                for (o = 0, a = t.length; o < a; ++o) {
                  s = t[o];
                  const { fullSize: a } = s.box,
                    l = n[s.stack],
                    u = l && s.stackWeight / l.weight;
                  s.horizontal
                    ? ((s.width = u ? u * r : a && e.availableWidth),
                      (s.height = i))
                    : ((s.width = r),
                      (s.height = u ? u * i : a && e.availableHeight));
                }
                return n;
              })(l.concat(u), d);
            qs(s.fullSize, f, d, p),
              qs(l, f, d, p),
              qs(u, f, d, p) && qs(l, f, d, p),
              (function (t) {
                const e = t.maxPadding;
                function n(n) {
                  const r = Math.max(e[n] - t[n], 0);
                  return (t[n] += r), r;
                }
                (t.y += n('top')), (t.x += n('left')), n('right'), n('bottom');
              })(f),
              Us(s.leftAndTop, f, d, p),
              (f.x += f.w),
              (f.y += f.h),
              Us(s.rightAndBottom, f, d, p),
              (t.chartArea = {
                left: f.left,
                top: f.top,
                right: f.left + f.w,
                bottom: f.top + f.h,
                height: f.h,
                width: f.w,
              }),
              Tr(s.chartArea, (e) => {
                const n = e.box;
                Object.assign(n, t.chartArea),
                  n.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
              });
          },
        };
        class Ks {
          acquireContext(t, e) {}
          releaseContext(t) {
            return !1;
          }
          addEventListener(t, e, n) {}
          removeEventListener(t, e, n) {}
          getDevicePixelRatio() {
            return 1;
          }
          getMaximumSize(t, e, n, r) {
            return (
              (e = Math.max(0, e || t.width)),
              (n = n || t.height),
              { width: e, height: Math.max(0, r ? Math.floor(e / r) : n) }
            );
          }
          isAttached(t) {
            return !0;
          }
          updateConfig(t) {}
        }
        class Ys extends Ks {
          acquireContext(t) {
            return (t && t.getContext && t.getContext('2d')) || null;
          }
          updateConfig(t) {
            t.options.animation = !1;
          }
        }
        const Xs = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup',
            pointerenter: 'mouseenter',
            pointerdown: 'mousedown',
            pointermove: 'mousemove',
            pointerup: 'mouseup',
            pointerleave: 'mouseout',
            pointerout: 'mouseout',
          },
          Gs = (t) => null === t || '' === t,
          Zs = !!ba && { passive: !0 };
        function Js(t, e, n) {
          t.canvas.removeEventListener(e, n, Zs);
        }
        function tl(t, e) {
          for (const n of t) if (n === e || n.contains(e)) return !0;
        }
        function el(t, e, n) {
          const r = t.canvas,
            i = new MutationObserver((t) => {
              let e = !1;
              for (const n of t)
                (e = e || tl(n.addedNodes, r)),
                  (e = e && !tl(n.removedNodes, r));
              e && n();
            });
          return i.observe(document, { childList: !0, subtree: !0 }), i;
        }
        function nl(t, e, n) {
          const r = t.canvas,
            i = new MutationObserver((t) => {
              let e = !1;
              for (const n of t)
                (e = e || tl(n.removedNodes, r)),
                  (e = e && !tl(n.addedNodes, r));
              e && n();
            });
          return i.observe(document, { childList: !0, subtree: !0 }), i;
        }
        const rl = new Map();
        let il = 0;
        function ol() {
          const t = window.devicePixelRatio;
          t !== il &&
            ((il = t),
            rl.forEach((e, n) => {
              n.currentDevicePixelRatio !== t && e();
            }));
        }
        function al(t, e, n) {
          const r = t.canvas,
            i = r && ua(r);
          if (!i) return;
          const o = wi((t, e) => {
              const r = i.clientWidth;
              n(t, e), r < i.clientWidth && n();
            }, window),
            a = new ResizeObserver((t) => {
              const e = t[0],
                n = e.contentRect.width,
                r = e.contentRect.height;
              (0 === n && 0 === r) || o(n, r);
            });
          return (
            a.observe(i),
            (function (t, e) {
              rl.size || window.addEventListener('resize', ol), rl.set(t, e);
            })(t, o),
            a
          );
        }
        function sl(t, e, n) {
          n && n.disconnect(),
            'resize' === e &&
              (function (t) {
                rl.delete(t),
                  rl.size || window.removeEventListener('resize', ol);
              })(t);
        }
        function ll(t, e, n) {
          const r = t.canvas,
            i = wi(
              (e) => {
                null !== t.ctx &&
                  n(
                    (function (t, e) {
                      const n = Xs[t.type] || t.type,
                        { x: r, y: i } = pa(t, e);
                      return {
                        type: n,
                        chart: e,
                        native: t,
                        x: void 0 !== r ? r : null,
                        y: void 0 !== i ? i : null,
                      };
                    })(e, t)
                  );
              },
              t,
              (t) => {
                const e = t[0];
                return [e, e.offsetX, e.offsetY];
              }
            );
          return (
            (function (t, e, n) {
              t.addEventListener(e, n, Zs);
            })(r, e, i),
            i
          );
        }
        class ul extends Ks {
          acquireContext(t, e) {
            const n = t && t.getContext && t.getContext('2d');
            return n && n.canvas === t
              ? ((function (t, e) {
                  const n = t.style,
                    r = t.getAttribute('height'),
                    i = t.getAttribute('width');
                  if (
                    ((t.$chartjs = {
                      initial: {
                        height: r,
                        width: i,
                        style: {
                          display: n.display,
                          height: n.height,
                          width: n.width,
                        },
                      },
                    }),
                    (n.display = n.display || 'block'),
                    (n.boxSizing = n.boxSizing || 'border-box'),
                    Gs(i))
                  ) {
                    const e = ya(t, 'width');
                    void 0 !== e && (t.width = e);
                  }
                  if (Gs(r))
                    if ('' === t.style.height) t.height = t.width / (e || 2);
                    else {
                      const e = ya(t, 'height');
                      void 0 !== e && (t.height = e);
                    }
                })(t, e),
                n)
              : null;
          }
          releaseContext(t) {
            const e = t.canvas;
            if (!e.$chartjs) return !1;
            const n = e.$chartjs.initial;
            ['height', 'width'].forEach((t) => {
              const r = n[t];
              kr(r) ? e.removeAttribute(t) : e.setAttribute(t, r);
            });
            const r = n.style || {};
            return (
              Object.keys(r).forEach((t) => {
                e.style[t] = r[t];
              }),
              (e.width = e.width),
              delete e.$chartjs,
              !0
            );
          }
          addEventListener(t, e, n) {
            this.removeEventListener(t, e);
            const r = t.$proxies || (t.$proxies = {}),
              i = { attach: el, detach: nl, resize: al }[e] || ll;
            r[e] = i(t, e, n);
          }
          removeEventListener(t, e) {
            const n = t.$proxies || (t.$proxies = {}),
              r = n[e];
            r &&
              (({ attach: sl, detach: sl, resize: sl }[e] || Js)(t, e, r),
              (n[e] = void 0));
          }
          getDevicePixelRatio() {
            return window.devicePixelRatio;
          }
          getMaximumSize(t, e, n, r) {
            return (function (t, e, n, r) {
              const i = da(t),
                o = fa(i, 'margin'),
                a = ca(i.maxWidth, t, 'clientWidth') || Kr,
                s = ca(i.maxHeight, t, 'clientHeight') || Kr,
                l = (function (t, e, n) {
                  let r, i;
                  if (void 0 === e || void 0 === n) {
                    const o = ua(t);
                    if (o) {
                      const t = o.getBoundingClientRect(),
                        a = da(o),
                        s = fa(a, 'border', 'width'),
                        l = fa(a, 'padding');
                      (e = t.width - l.width - s.width),
                        (n = t.height - l.height - s.height),
                        (r = ca(a.maxWidth, o, 'clientWidth')),
                        (i = ca(a.maxHeight, o, 'clientHeight'));
                    } else (e = t.clientWidth), (n = t.clientHeight);
                  }
                  return {
                    width: e,
                    height: n,
                    maxWidth: r || Kr,
                    maxHeight: i || Kr,
                  };
                })(t, e, n);
              let { width: u, height: c } = l;
              if ('content-box' === i.boxSizing) {
                const t = fa(i, 'border', 'width'),
                  e = fa(i, 'padding');
                (u -= e.width + t.width), (c -= e.height + t.height);
              }
              return (
                (u = Math.max(0, u - o.width)),
                (c = Math.max(0, r ? Math.floor(u / r) : c - o.height)),
                (u = ga(Math.min(u, a, l.maxWidth))),
                (c = ga(Math.min(c, s, l.maxHeight))),
                u && !c && (c = ga(u / 2)),
                { width: u, height: c }
              );
            })(t, e, n, r);
          }
          isAttached(t) {
            const e = ua(t);
            return !(!e || !e.isConnected);
          }
        }
        class cl {
          constructor() {
            this._init = [];
          }
          notify(t, e, n, r) {
            'beforeInit' === e &&
              ((this._init = this._createDescriptors(t, !0)),
              this._notify(this._init, t, 'install'));
            const i = r ? this._descriptors(t).filter(r) : this._descriptors(t),
              o = this._notify(i, t, e, n);
            return (
              'afterDestroy' === e &&
                (this._notify(i, t, 'stop'),
                this._notify(this._init, t, 'uninstall')),
              o
            );
          }
          _notify(t, e, n, r) {
            r = r || {};
            for (const i of t) {
              const t = i.plugin;
              if (!1 === Dr(t[n], [e, r, i.options], t) && r.cancelable)
                return !1;
            }
            return !0;
          }
          invalidate() {
            kr(this._cache) ||
              ((this._oldCache = this._cache), (this._cache = void 0));
          }
          _descriptors(t) {
            if (this._cache) return this._cache;
            const e = (this._cache = this._createDescriptors(t));
            return this._notifyStateChanges(t), e;
          }
          _createDescriptors(t, e) {
            const n = t && t.config,
              r = Cr(n.options && n.options.plugins, {}),
              i = (function (t) {
                const e = {},
                  n = [],
                  r = Object.keys(Ss.plugins.items);
                for (let t = 0; t < r.length; t++) n.push(Ss.getPlugin(r[t]));
                const i = t.plugins || [];
                for (let t = 0; t < i.length; t++) {
                  const r = i[t];
                  -1 === n.indexOf(r) && (n.push(r), (e[r.id] = !0));
                }
                return { plugins: n, localIds: e };
              })(n);
            return !1 !== r || e
              ? (function (t, { plugins: e, localIds: n }, r, i) {
                  const o = [],
                    a = t.getContext();
                  for (const s of e) {
                    const e = s.id,
                      l = dl(r[e], i);
                    null !== l &&
                      o.push({
                        plugin: s,
                        options: hl(t.config, { plugin: s, local: n[e] }, l, a),
                      });
                  }
                  return o;
                })(t, i, r, e)
              : [];
          }
          _notifyStateChanges(t) {
            const e = this._oldCache || [],
              n = this._cache,
              r = (t, e) =>
                t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
            this._notify(r(e, n), t, 'stop'), this._notify(r(n, e), t, 'start');
          }
        }
        function dl(t, e) {
          return e || !1 !== t ? (!0 === t ? {} : t) : null;
        }
        function hl(t, { plugin: e, local: n }, r, i) {
          const o = t.pluginScopeKeys(e),
            a = t.getOptionScopes(r, o);
          return (
            n && e.defaults && a.push(e.defaults),
            t.createResolver(a, i, [''], {
              scriptable: !1,
              indexable: !1,
              allKeys: !0,
            })
          );
        }
        function fl(t, e) {
          const n = mo.datasets[t] || {};
          return (
            ((e.datasets || {})[t] || {}).indexAxis ||
            e.indexAxis ||
            n.indexAxis ||
            'x'
          );
        }
        function pl(t, e) {
          return 'x' === t || 'y' === t
            ? t
            : e.axis ||
                ('top' === (n = e.position) || 'bottom' === n
                  ? 'x'
                  : 'left' === n || 'right' === n
                  ? 'y'
                  : void 0) ||
                t.charAt(0).toLowerCase();
          var n;
        }
        function gl(t) {
          const e = t.options || (t.options = {});
          (e.plugins = Cr(e.plugins, {})),
            (e.scales = (function (t, e) {
              const n = ho[t.type] || { scales: {} },
                r = e.scales || {},
                i = fl(t.type, e),
                o = Object.create(null),
                a = Object.create(null);
              return (
                Object.keys(r).forEach((t) => {
                  const e = r[t];
                  if (!Mr(e))
                    return console.error(
                      `Invalid scale configuration for scale: ${t}`
                    );
                  if (e._proxy)
                    return console.warn(
                      `Ignoring resolver passed as options for scale: ${t}`
                    );
                  const s = pl(t, e),
                    l = (function (t, e) {
                      return t === e ? '_index_' : '_value_';
                    })(s, i),
                    u = n.scales || {};
                  (o[s] = o[s] || t),
                    (a[t] = Nr(Object.create(null), [
                      { axis: s },
                      e,
                      u[s],
                      u[l],
                    ]));
                }),
                t.data.datasets.forEach((n) => {
                  const i = n.type || t.type,
                    s = n.indexAxis || fl(i, e),
                    l = (ho[i] || {}).scales || {};
                  Object.keys(l).forEach((t) => {
                    const e = (function (t, e) {
                        let n = t;
                        return (
                          '_index_' === t
                            ? (n = e)
                            : '_value_' === t && (n = 'x' === e ? 'y' : 'x'),
                          n
                        );
                      })(t, s),
                      i = n[e + 'AxisID'] || o[e] || e;
                    (a[i] = a[i] || Object.create(null)),
                      Nr(a[i], [{ axis: e }, r[i], l[t]]);
                  });
                }),
                Object.keys(a).forEach((t) => {
                  const e = a[t];
                  Nr(e, [mo.scales[e.type], mo.scale]);
                }),
                a
              );
            })(t, e));
        }
        function ml(t) {
          return (
            ((t = t || {}).datasets = t.datasets || []),
            (t.labels = t.labels || []),
            t
          );
        }
        const bl = new Map(),
          yl = new Set();
        function vl(t, e) {
          let n = bl.get(t);
          return n || ((n = e()), bl.set(t, n), yl.add(n)), n;
        }
        const xl = (t, e, n) => {
          const r = Vr(e, n);
          void 0 !== r && t.add(r);
        };
        class _l {
          constructor(t) {
            (this._config = (function (t) {
              return ((t = t || {}).data = ml(t.data)), gl(t), t;
            })(t)),
              (this._scopeCache = new Map()),
              (this._resolverCache = new Map());
          }
          get platform() {
            return this._config.platform;
          }
          get type() {
            return this._config.type;
          }
          set type(t) {
            this._config.type = t;
          }
          get data() {
            return this._config.data;
          }
          set data(t) {
            this._config.data = ml(t);
          }
          get options() {
            return this._config.options;
          }
          set options(t) {
            this._config.options = t;
          }
          get plugins() {
            return this._config.plugins;
          }
          update() {
            const t = this._config;
            this.clearCache(), gl(t);
          }
          clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear();
          }
          datasetScopeKeys(t) {
            return vl(t, () => [[`datasets.${t}`, '']]);
          }
          datasetAnimationScopeKeys(t, e) {
            return vl(`${t}.transition.${e}`, () => [
              [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
              [`datasets.${t}`, ''],
            ]);
          }
          datasetElementScopeKeys(t, e) {
            return vl(`${t}-${e}`, () => [
              [
                `datasets.${t}.elements.${e}`,
                `datasets.${t}`,
                `elements.${e}`,
                '',
              ],
            ]);
          }
          pluginScopeKeys(t) {
            const e = t.id;
            return vl(`${this.type}-plugin-${e}`, () => [
              [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
            ]);
          }
          _cachedScopes(t, e) {
            const n = this._scopeCache;
            let r = n.get(t);
            return (r && !e) || ((r = new Map()), n.set(t, r)), r;
          }
          getOptionScopes(t, e, n) {
            const { options: r, type: i } = this,
              o = this._cachedScopes(t, n),
              a = o.get(e);
            if (a) return a;
            const s = new Set();
            e.forEach((e) => {
              t && (s.add(t), e.forEach((e) => xl(s, t, e))),
                e.forEach((t) => xl(s, r, t)),
                e.forEach((t) => xl(s, ho[i] || {}, t)),
                e.forEach((t) => xl(s, mo, t)),
                e.forEach((t) => xl(s, fo, t));
            });
            const l = Array.from(s);
            return (
              0 === l.length && l.push(Object.create(null)),
              yl.has(e) && o.set(e, l),
              l
            );
          }
          chartOptionScopes() {
            const { options: t, type: e } = this;
            return [t, ho[e] || {}, mo.datasets[e] || {}, { type: e }, mo, fo];
          }
          resolveNamedOptions(t, e, n, r = ['']) {
            const i = { $shared: !0 },
              { resolver: o, subPrefixes: a } = wl(this._resolverCache, t, r);
            let s = o;
            (function (t, e) {
              const { isScriptable: n, isIndexable: r } = qo(t);
              for (const i of e) {
                const e = n(i),
                  o = r(i),
                  a = (o || e) && t[i];
                if ((e && (Hr(a) || kl(a))) || (o && Sr(a))) return !0;
              }
              return !1;
            })(o, e) &&
              ((i.$shared = !1),
              (s = Ho(o, (n = Hr(n) ? n() : n), this.createResolver(t, n, a))));
            for (const t of e) i[t] = s[t];
            return i;
          }
          createResolver(t, e, n = [''], r) {
            const { resolver: i } = wl(this._resolverCache, t, n);
            return Mr(e) ? Ho(i, e, void 0, r) : i;
          }
        }
        function wl(t, e, n) {
          let r = t.get(e);
          r || ((r = new Map()), t.set(e, r));
          const i = n.join();
          let o = r.get(i);
          return (
            o ||
              ((o = {
                resolver: Wo(e, n),
                subPrefixes: n.filter(
                  (t) => !t.toLowerCase().includes('hover')
                ),
              }),
              r.set(i, o)),
            o
          );
        }
        const kl = (t) =>
            Mr(t) &&
            Object.getOwnPropertyNames(t).reduce((e, n) => e || Hr(t[n]), !1),
          Sl = ['top', 'bottom', 'left', 'right', 'chartArea'];
        function Ml(t, e) {
          return (
            'top' === t || 'bottom' === t || (-1 === Sl.indexOf(t) && 'x' === e)
          );
        }
        function Pl(t, e) {
          return function (n, r) {
            return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t];
          };
        }
        function El(t) {
          const e = t.chart,
            n = e.options.animation;
          e.notifyPlugins('afterRender'), Dr(n && n.onComplete, [t], e);
        }
        function Cl(t) {
          const e = t.chart,
            n = e.options.animation;
          Dr(n && n.onProgress, [t], e);
        }
        function Ol(t) {
          return (
            la() && 'string' == typeof t
              ? (t = document.getElementById(t))
              : t && t.length && (t = t[0]),
            t && t.canvas && (t = t.canvas),
            t
          );
        }
        const Dl = {},
          Tl = (t) => {
            const e = Ol(t);
            return Object.values(Dl)
              .filter((t) => t.canvas === e)
              .pop();
          };
        function Rl(t, e, n) {
          const r = Object.keys(t);
          for (const i of r) {
            const r = +i;
            if (r >= e) {
              const o = t[i];
              delete t[i], (n > 0 || r > e) && (t[r + n] = o);
            }
          }
        }
        class Al {
          constructor(t, e) {
            const n = (this.config = new _l(e)),
              r = Ol(t),
              i = Tl(r);
            if (i)
              throw new Error(
                "Canvas is already in use. Chart with ID '" +
                  i.id +
                  "' must be destroyed before the canvas with ID '" +
                  i.canvas.id +
                  "' can be reused."
              );
            const o = n.createResolver(
              n.chartOptionScopes(),
              this.getContext()
            );
            (this.platform = new (n.platform ||
              (function (t) {
                return !la() ||
                  ('undefined' != typeof OffscreenCanvas &&
                    t instanceof OffscreenCanvas)
                  ? Ys
                  : ul;
              })(r))()),
              this.platform.updateConfig(n);
            const a = this.platform.acquireContext(r, o.aspectRatio),
              s = a && a.canvas,
              l = s && s.height,
              u = s && s.width;
            (this.id = wr()),
              (this.ctx = a),
              (this.canvas = s),
              (this.width = u),
              (this.height = l),
              (this._options = o),
              (this._aspectRatio = this.aspectRatio),
              (this._layers = []),
              (this._metasets = []),
              (this._stacks = void 0),
              (this.boxes = []),
              (this.currentDevicePixelRatio = void 0),
              (this.chartArea = void 0),
              (this._active = []),
              (this._lastEvent = void 0),
              (this._listeners = {}),
              (this._responsiveListeners = void 0),
              (this._sortedMetasets = []),
              (this.scales = {}),
              (this._plugins = new cl()),
              (this.$proxies = {}),
              (this._hiddenIndices = {}),
              (this.attached = !1),
              (this._animationsDisabled = void 0),
              (this.$context = void 0),
              (this._doResize = (function (t, e) {
                let n;
                return function (...r) {
                  return (
                    e
                      ? (clearTimeout(n), (n = setTimeout(t, e, r)))
                      : t.apply(this, r),
                    e
                  );
                };
              })((t) => this.update(t), o.resizeDelay || 0)),
              (this._dataChanges = []),
              (Dl[this.id] = this),
              a && s
                ? (Aa.listen(this, 'complete', El),
                  Aa.listen(this, 'progress', Cl),
                  this._initialize(),
                  this.attached && this.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item"
                  );
          }
          get aspectRatio() {
            const {
              options: { aspectRatio: t, maintainAspectRatio: e },
              width: n,
              height: r,
              _aspectRatio: i,
            } = this;
            return kr(t) ? (e && i ? i : r ? n / r : null) : t;
          }
          get data() {
            return this.config.data;
          }
          set data(t) {
            this.config.data = t;
          }
          get options() {
            return this._options;
          }
          set options(t) {
            this.config.options = t;
          }
          _initialize() {
            return (
              this.notifyPlugins('beforeInit'),
              this.options.responsive
                ? this.resize()
                : ma(this, this.options.devicePixelRatio),
              this.bindEvents(),
              this.notifyPlugins('afterInit'),
              this
            );
          }
          clear() {
            return xo(this.canvas, this.ctx), this;
          }
          stop() {
            return Aa.stop(this), this;
          }
          resize(t, e) {
            Aa.running(this)
              ? (this._resizeBeforeDraw = { width: t, height: e })
              : this._resize(t, e);
          }
          _resize(t, e) {
            const n = this.options,
              r = this.canvas,
              i = n.maintainAspectRatio && this.aspectRatio,
              o = this.platform.getMaximumSize(r, t, e, i),
              a = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
              s = this.width ? 'resize' : 'attach';
            (this.width = o.width),
              (this.height = o.height),
              (this._aspectRatio = this.aspectRatio),
              ma(this, a, !0) &&
                (this.notifyPlugins('resize', { size: o }),
                Dr(n.onResize, [this, o], this),
                this.attached && this._doResize(s) && this.render());
          }
          ensureScalesHaveIDs() {
            Tr(this.options.scales || {}, (t, e) => {
              t.id = e;
            });
          }
          buildOrUpdateScales() {
            const t = this.options,
              e = t.scales,
              n = this.scales,
              r = Object.keys(n).reduce((t, e) => ((t[e] = !1), t), {});
            let i = [];
            e &&
              (i = i.concat(
                Object.keys(e).map((t) => {
                  const n = e[t],
                    r = pl(t, n),
                    i = 'r' === r,
                    o = 'x' === r;
                  return {
                    options: n,
                    dposition: i ? 'chartArea' : o ? 'bottom' : 'left',
                    dtype: i ? 'radialLinear' : o ? 'category' : 'linear',
                  };
                })
              )),
              Tr(i, (e) => {
                const i = e.options,
                  o = i.id,
                  a = pl(o, i),
                  s = Cr(i.type, e.dtype);
                (void 0 !== i.position &&
                  Ml(i.position, a) === Ml(e.dposition)) ||
                  (i.position = e.dposition),
                  (r[o] = !0);
                let l = null;
                o in n && n[o].type === s
                  ? (l = n[o])
                  : ((l = new (Ss.getScale(s))({
                      id: o,
                      type: s,
                      ctx: this.ctx,
                      chart: this,
                    })),
                    (n[l.id] = l)),
                  l.init(i, t);
              }),
              Tr(r, (t, e) => {
                t || delete n[e];
              }),
              Tr(n, (t) => {
                Qs.configure(this, t, t.options), Qs.addBox(this, t);
              });
          }
          _updateMetasets() {
            const t = this._metasets,
              e = this.data.datasets.length,
              n = t.length;
            if ((t.sort((t, e) => t.index - e.index), n > e)) {
              for (let t = e; t < n; ++t) this._destroyDatasetMeta(t);
              t.splice(e, n - e);
            }
            this._sortedMetasets = t.slice(0).sort(Pl('order', 'index'));
          }
          _removeUnreferencedMetasets() {
            const {
              _metasets: t,
              data: { datasets: e },
            } = this;
            t.length > e.length && delete this._stacks,
              t.forEach((t, n) => {
                0 === e.filter((e) => e === t._dataset).length &&
                  this._destroyDatasetMeta(n);
              });
          }
          buildOrUpdateControllers() {
            const t = [],
              e = this.data.datasets;
            let n, r;
            for (
              this._removeUnreferencedMetasets(), n = 0, r = e.length;
              n < r;
              n++
            ) {
              const r = e[n];
              let i = this.getDatasetMeta(n);
              const o = r.type || this.config.type;
              if (
                (i.type &&
                  i.type !== o &&
                  (this._destroyDatasetMeta(n), (i = this.getDatasetMeta(n))),
                (i.type = o),
                (i.indexAxis = r.indexAxis || fl(o, this.options)),
                (i.order = r.order || 0),
                (i.index = n),
                (i.label = '' + r.label),
                (i.visible = this.isDatasetVisible(n)),
                i.controller)
              )
                i.controller.updateIndex(n), i.controller.linkScales();
              else {
                const e = Ss.getController(o),
                  { datasetElementType: r, dataElementType: a } =
                    mo.datasets[o];
                Object.assign(e.prototype, {
                  dataElementType: Ss.getElement(a),
                  datasetElementType: r && Ss.getElement(r),
                }),
                  (i.controller = new e(this, n)),
                  t.push(i.controller);
              }
            }
            return this._updateMetasets(), t;
          }
          _resetElements() {
            Tr(
              this.data.datasets,
              (t, e) => {
                this.getDatasetMeta(e).controller.reset();
              },
              this
            );
          }
          reset() {
            this._resetElements(), this.notifyPlugins('reset');
          }
          update(t) {
            const e = this.config;
            e.update();
            const n = (this._options = e.createResolver(
                e.chartOptionScopes(),
                this.getContext()
              )),
              r = (this._animationsDisabled = !n.animation);
            if (
              (this._updateScales(),
              this._checkEventBindings(),
              this._updateHiddenIndices(),
              this._plugins.invalidate(),
              !1 ===
                this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }))
            )
              return;
            const i = this.buildOrUpdateControllers();
            this.notifyPlugins('beforeElementsUpdate');
            let o = 0;
            for (let t = 0, e = this.data.datasets.length; t < e; t++) {
              const { controller: e } = this.getDatasetMeta(t),
                n = !r && -1 === i.indexOf(e);
              e.buildOrUpdateElements(n),
                (o = Math.max(+e.getMaxOverflow(), o));
            }
            (o = this._minPadding = n.layout.autoPadding ? o : 0),
              this._updateLayout(o),
              r ||
                Tr(i, (t) => {
                  t.reset();
                }),
              this._updateDatasets(t),
              this.notifyPlugins('afterUpdate', { mode: t }),
              this._layers.sort(Pl('z', '_idx'));
            const { _active: a, _lastEvent: s } = this;
            s
              ? this._eventHandler(s, !0)
              : a.length && this._updateHoverStyles(a, a, !0),
              this.render();
          }
          _updateScales() {
            Tr(this.scales, (t) => {
              Qs.removeBox(this, t);
            }),
              this.ensureScalesHaveIDs(),
              this.buildOrUpdateScales();
          }
          _checkEventBindings() {
            const t = this.options,
              e = new Set(Object.keys(this._listeners)),
              n = new Set(t.events);
            (qr(e, n) && !!this._responsiveListeners === t.responsive) ||
              (this.unbindEvents(), this.bindEvents());
          }
          _updateHiddenIndices() {
            const { _hiddenIndices: t } = this,
              e = this._getUniformDataChanges() || [];
            for (const { method: n, start: r, count: i } of e)
              Rl(t, r, '_removeElements' === n ? -i : i);
          }
          _getUniformDataChanges() {
            const t = this._dataChanges;
            if (!t || !t.length) return;
            this._dataChanges = [];
            const e = this.data.datasets.length,
              n = (e) =>
                new Set(
                  t
                    .filter((t) => t[0] === e)
                    .map((t, e) => e + ',' + t.splice(1).join(','))
                ),
              r = n(0);
            for (let t = 1; t < e; t++) if (!qr(r, n(t))) return;
            return Array.from(r)
              .map((t) => t.split(','))
              .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
          }
          _updateLayout(t) {
            if (!1 === this.notifyPlugins('beforeLayout', { cancelable: !0 }))
              return;
            Qs.update(this, this.width, this.height, t);
            const e = this.chartArea,
              n = e.width <= 0 || e.height <= 0;
            (this._layers = []),
              Tr(
                this.boxes,
                (t) => {
                  (n && 'chartArea' === t.position) ||
                    (t.configure && t.configure(),
                    this._layers.push(...t._layers()));
                },
                this
              ),
              this._layers.forEach((t, e) => {
                t._idx = e;
              }),
              this.notifyPlugins('afterLayout');
          }
          _updateDatasets(t) {
            if (
              !1 !==
              this.notifyPlugins('beforeDatasetsUpdate', {
                mode: t,
                cancelable: !0,
              })
            ) {
              for (let t = 0, e = this.data.datasets.length; t < e; ++t)
                this.getDatasetMeta(t).controller.configure();
              for (let e = 0, n = this.data.datasets.length; e < n; ++e)
                this._updateDataset(e, Hr(t) ? t({ datasetIndex: e }) : t);
              this.notifyPlugins('afterDatasetsUpdate', { mode: t });
            }
          }
          _updateDataset(t, e) {
            const n = this.getDatasetMeta(t),
              r = { meta: n, index: t, mode: e, cancelable: !0 };
            !1 !== this.notifyPlugins('beforeDatasetUpdate', r) &&
              (n.controller._update(e),
              (r.cancelable = !1),
              this.notifyPlugins('afterDatasetUpdate', r));
          }
          render() {
            !1 !== this.notifyPlugins('beforeRender', { cancelable: !0 }) &&
              (Aa.has(this)
                ? this.attached && !Aa.running(this) && Aa.start(this)
                : (this.draw(), El({ chart: this })));
          }
          draw() {
            let t;
            if (this._resizeBeforeDraw) {
              const { width: t, height: e } = this._resizeBeforeDraw;
              this._resize(t, e), (this._resizeBeforeDraw = null);
            }
            if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
            if (!1 === this.notifyPlugins('beforeDraw', { cancelable: !0 }))
              return;
            const e = this._layers;
            for (t = 0; t < e.length && e[t].z <= 0; ++t)
              e[t].draw(this.chartArea);
            for (this._drawDatasets(); t < e.length; ++t)
              e[t].draw(this.chartArea);
            this.notifyPlugins('afterDraw');
          }
          _getSortedDatasetMetas(t) {
            const e = this._sortedMetasets,
              n = [];
            let r, i;
            for (r = 0, i = e.length; r < i; ++r) {
              const i = e[r];
              (t && !i.visible) || n.push(i);
            }
            return n;
          }
          getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
          }
          _drawDatasets() {
            if (
              !1 ===
              this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 })
            )
              return;
            const t = this.getSortedVisibleDatasetMetas();
            for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
            this.notifyPlugins('afterDatasetsDraw');
          }
          _drawDataset(t) {
            const e = this.ctx,
              n = t._clip,
              r = !n.disabled,
              i = this.chartArea,
              o = { meta: t, index: t.index, cancelable: !0 };
            !1 !== this.notifyPlugins('beforeDatasetDraw', o) &&
              (r &&
                So(e, {
                  left: !1 === n.left ? 0 : i.left - n.left,
                  right: !1 === n.right ? this.width : i.right + n.right,
                  top: !1 === n.top ? 0 : i.top - n.top,
                  bottom: !1 === n.bottom ? this.height : i.bottom + n.bottom,
                }),
              t.controller.draw(),
              r && Mo(e),
              (o.cancelable = !1),
              this.notifyPlugins('afterDatasetDraw', o));
          }
          isPointInArea(t) {
            return ko(t, this.chartArea, this._minPadding);
          }
          getElementsAtEventForMode(t, e, n, r) {
            const i = zs.modes[e];
            return 'function' == typeof i ? i(this, t, n, r) : [];
          }
          getDatasetMeta(t) {
            const e = this.data.datasets[t],
              n = this._metasets;
            let r = n.filter((t) => t && t._dataset === e).pop();
            return (
              r ||
                ((r = {
                  type: null,
                  data: [],
                  dataset: null,
                  controller: null,
                  hidden: null,
                  xAxisID: null,
                  yAxisID: null,
                  order: (e && e.order) || 0,
                  index: t,
                  _dataset: e,
                  _parsed: [],
                  _sorted: !1,
                }),
                n.push(r)),
              r
            );
          }
          getContext() {
            return (
              this.$context ||
              (this.$context = Bo(null, { chart: this, type: 'chart' }))
            );
          }
          getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
          }
          isDatasetVisible(t) {
            const e = this.data.datasets[t];
            if (!e) return !1;
            const n = this.getDatasetMeta(t);
            return 'boolean' == typeof n.hidden ? !n.hidden : !e.hidden;
          }
          setDatasetVisibility(t, e) {
            this.getDatasetMeta(t).hidden = !e;
          }
          toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t];
          }
          getDataVisibility(t) {
            return !this._hiddenIndices[t];
          }
          _updateVisibility(t, e, n) {
            const r = n ? 'show' : 'hide',
              i = this.getDatasetMeta(t),
              o = i.controller._resolveAnimations(void 0, r);
            Wr(e)
              ? ((i.data[e].hidden = !n), this.update())
              : (this.setDatasetVisibility(t, n),
                o.update(i, { visible: n }),
                this.update((e) => (e.datasetIndex === t ? r : void 0)));
          }
          hide(t, e) {
            this._updateVisibility(t, e, !1);
          }
          show(t, e) {
            this._updateVisibility(t, e, !0);
          }
          _destroyDatasetMeta(t) {
            const e = this._metasets[t];
            e && e.controller && e.controller._destroy(),
              delete this._metasets[t];
          }
          _stop() {
            let t, e;
            for (
              this.stop(),
                Aa.remove(this),
                t = 0,
                e = this.data.datasets.length;
              t < e;
              ++t
            )
              this._destroyDatasetMeta(t);
          }
          destroy() {
            this.notifyPlugins('beforeDestroy');
            const { canvas: t, ctx: e } = this;
            this._stop(),
              this.config.clearCache(),
              t &&
                (this.unbindEvents(),
                xo(t, e),
                this.platform.releaseContext(e),
                (this.canvas = null),
                (this.ctx = null)),
              this.notifyPlugins('destroy'),
              delete Dl[this.id],
              this.notifyPlugins('afterDestroy');
          }
          toBase64Image(...t) {
            return this.canvas.toDataURL(...t);
          }
          bindEvents() {
            this.bindUserEvents(),
              this.options.responsive
                ? this.bindResponsiveEvents()
                : (this.attached = !0);
          }
          bindUserEvents() {
            const t = this._listeners,
              e = this.platform,
              n = (n, r) => {
                e.addEventListener(this, n, r), (t[n] = r);
              },
              r = (t, e, n) => {
                (t.offsetX = e), (t.offsetY = n), this._eventHandler(t);
              };
            Tr(this.options.events, (t) => n(t, r));
          }
          bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const t = this._responsiveListeners,
              e = this.platform,
              n = (n, r) => {
                e.addEventListener(this, n, r), (t[n] = r);
              },
              r = (n, r) => {
                t[n] && (e.removeEventListener(this, n, r), delete t[n]);
              },
              i = (t, e) => {
                this.canvas && this.resize(t, e);
              };
            let o;
            const a = () => {
              r('attach', a),
                (this.attached = !0),
                this.resize(),
                n('resize', i),
                n('detach', o);
            };
            (o = () => {
              (this.attached = !1),
                r('resize', i),
                this._stop(),
                this._resize(0, 0),
                n('attach', a);
            }),
              e.isAttached(this.canvas) ? a() : o();
          }
          unbindEvents() {
            Tr(this._listeners, (t, e) => {
              this.platform.removeEventListener(this, e, t);
            }),
              (this._listeners = {}),
              Tr(this._responsiveListeners, (t, e) => {
                this.platform.removeEventListener(this, e, t);
              }),
              (this._responsiveListeners = void 0);
          }
          updateHoverStyle(t, e, n) {
            const r = n ? 'set' : 'remove';
            let i, o, a, s;
            for (
              'dataset' === e &&
                ((i = this.getDatasetMeta(t[0].datasetIndex)),
                i.controller['_' + r + 'DatasetHoverStyle']()),
                a = 0,
                s = t.length;
              a < s;
              ++a
            ) {
              o = t[a];
              const e = o && this.getDatasetMeta(o.datasetIndex).controller;
              e && e[r + 'HoverStyle'](o.element, o.datasetIndex, o.index);
            }
          }
          getActiveElements() {
            return this._active || [];
          }
          setActiveElements(t) {
            const e = this._active || [],
              n = t.map(({ datasetIndex: t, index: e }) => {
                const n = this.getDatasetMeta(t);
                if (!n) throw new Error('No dataset found at index ' + t);
                return { datasetIndex: t, element: n.data[e], index: e };
              });
            !Rr(n, e) &&
              ((this._active = n),
              (this._lastEvent = null),
              this._updateHoverStyles(n, e));
          }
          notifyPlugins(t, e, n) {
            return this._plugins.notify(this, t, e, n);
          }
          _updateHoverStyles(t, e, n) {
            const r = this.options.hover,
              i = (t, e) =>
                t.filter(
                  (t) =>
                    !e.some(
                      (e) =>
                        t.datasetIndex === e.datasetIndex && t.index === e.index
                    )
                ),
              o = i(e, t),
              a = n ? t : i(t, e);
            o.length && this.updateHoverStyle(o, r.mode, !1),
              a.length && r.mode && this.updateHoverStyle(a, r.mode, !0);
          }
          _eventHandler(t, e) {
            const n = {
                event: t,
                replay: e,
                cancelable: !0,
                inChartArea: this.isPointInArea(t),
              },
              r = (e) =>
                (e.options.events || this.options.events).includes(
                  t.native.type
                );
            if (!1 === this.notifyPlugins('beforeEvent', n, r)) return;
            const i = this._handleEvent(t, e, n.inChartArea);
            return (
              (n.cancelable = !1),
              this.notifyPlugins('afterEvent', n, r),
              (i || n.changed) && this.render(),
              this
            );
          }
          _handleEvent(t, e, n) {
            const { _active: r = [], options: i } = this,
              o = e,
              a = this._getActiveElements(t, r, n, o),
              s = (function (t) {
                return (
                  'mouseup' === t.type ||
                  'click' === t.type ||
                  'contextmenu' === t.type
                );
              })(t),
              l = (function (t, e, n, r) {
                return n && 'mouseout' !== t.type ? (r ? e : t) : null;
              })(t, this._lastEvent, n, s);
            n &&
              ((this._lastEvent = null),
              Dr(i.onHover, [t, a, this], this),
              s && Dr(i.onClick, [t, a, this], this));
            const u = !Rr(a, r);
            return (
              (u || e) &&
                ((this._active = a), this._updateHoverStyles(a, r, e)),
              (this._lastEvent = l),
              u
            );
          }
          _getActiveElements(t, e, n, r) {
            if ('mouseout' === t.type) return [];
            if (!n) return e;
            const i = this.options.hover;
            return this.getElementsAtEventForMode(t, i.mode, i, r);
          }
        }
        const Ll = () => Tr(Al.instances, (t) => t._plugins.invalidate()),
          zl = !0;
        function Il(t, e, n) {
          const {
            startAngle: r,
            pixelMargin: i,
            x: o,
            y: a,
            outerRadius: s,
            innerRadius: l,
          } = e;
          let u = i / s;
          t.beginPath(),
            t.arc(o, a, s, r - u, n + u),
            l > i
              ? ((u = i / l), t.arc(o, a, l, n + u, r - u, !0))
              : t.arc(o, a, i, n + Xr, r - Xr),
            t.closePath(),
            t.clip();
        }
        function Nl(t, e, n, r) {
          return { x: n + t * Math.cos(e), y: r + t * Math.sin(e) };
        }
        function Fl(t, e, n, r, i, o) {
          const {
              x: a,
              y: s,
              startAngle: l,
              pixelMargin: u,
              innerRadius: c,
            } = e,
            d = Math.max(e.outerRadius + r + n - u, 0),
            h = c > 0 ? c + r + n + u : 0;
          let f = 0;
          const p = i - l;
          if (r) {
            const t = ((c > 0 ? c - r : 0) + (d > 0 ? d - r : 0)) / 2;
            f = (p - (0 !== t ? (p * t) / (t + r) : p)) / 2;
          }
          const g = (p - Math.max(0.001, p * d - n / $r) / d) / 2,
            m = l + g + f,
            b = i - g - f,
            {
              outerStart: y,
              outerEnd: v,
              innerStart: x,
              innerEnd: _,
            } = (function (t, e, n, r) {
              const i = zo(t.options.borderRadius, [
                  'outerStart',
                  'outerEnd',
                  'innerStart',
                  'innerEnd',
                ]),
                o = (n - e) / 2,
                a = Math.min(o, (r * e) / 2),
                s = (t) => {
                  const e = ((n - Math.min(o, t)) * r) / 2;
                  return fi(t, 0, Math.min(o, e));
                };
              return {
                outerStart: s(i.outerStart),
                outerEnd: s(i.outerEnd),
                innerStart: fi(i.innerStart, 0, a),
                innerEnd: fi(i.innerEnd, 0, a),
              };
            })(e, h, d, b - m),
            w = d - y,
            k = d - v,
            S = m + y / w,
            M = b - v / k,
            P = h + x,
            E = h + _,
            C = m + x / P,
            O = b - _ / E;
          if ((t.beginPath(), o)) {
            if ((t.arc(a, s, d, S, M), v > 0)) {
              const e = Nl(k, M, a, s);
              t.arc(e.x, e.y, v, M, b + Xr);
            }
            const e = Nl(E, b, a, s);
            if ((t.lineTo(e.x, e.y), _ > 0)) {
              const e = Nl(E, O, a, s);
              t.arc(e.x, e.y, _, b + Xr, O + Math.PI);
            }
            if ((t.arc(a, s, h, b - _ / h, m + x / h, !0), x > 0)) {
              const e = Nl(P, C, a, s);
              t.arc(e.x, e.y, x, C + Math.PI, m - Xr);
            }
            const n = Nl(w, m, a, s);
            if ((t.lineTo(n.x, n.y), y > 0)) {
              const e = Nl(w, S, a, s);
              t.arc(e.x, e.y, y, m - Xr, S);
            }
          } else {
            t.moveTo(a, s);
            const e = Math.cos(S) * d + a,
              n = Math.sin(S) * d + s;
            t.lineTo(e, n);
            const r = Math.cos(M) * d + a,
              i = Math.sin(M) * d + s;
            t.lineTo(r, i);
          }
          t.closePath();
        }
        Object.defineProperties(Al, {
          defaults: { enumerable: zl, value: mo },
          instances: { enumerable: zl, value: Dl },
          overrides: { enumerable: zl, value: ho },
          registry: { enumerable: zl, value: Ss },
          version: { enumerable: zl, value: '3.9.1' },
          getChart: { enumerable: zl, value: Tl },
          register: {
            enumerable: zl,
            value: (...t) => {
              Ss.add(...t), Ll();
            },
          },
          unregister: {
            enumerable: zl,
            value: (...t) => {
              Ss.remove(...t), Ll();
            },
          },
        });
        class jl extends hs {
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.circumference = void 0),
              (this.startAngle = void 0),
              (this.endAngle = void 0),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0),
              (this.pixelMargin = 0),
              (this.fullCircles = 0),
              t && Object.assign(this, t);
          }
          inRange(t, e, n) {
            const r = this.getProps(['x', 'y'], n),
              { angle: i, distance: o } = li(r, { x: t, y: e }),
              {
                startAngle: a,
                endAngle: s,
                innerRadius: l,
                outerRadius: u,
                circumference: c,
              } = this.getProps(
                [
                  'startAngle',
                  'endAngle',
                  'innerRadius',
                  'outerRadius',
                  'circumference',
                ],
                n
              ),
              d = this.options.spacing / 2,
              h = Cr(c, s - a) >= Ur || hi(i, a, s),
              f = pi(o, l + d, u + d);
            return h && f;
          }
          getCenterPoint(t) {
            const {
                x: e,
                y: n,
                startAngle: r,
                endAngle: i,
                innerRadius: o,
                outerRadius: a,
              } = this.getProps(
                [
                  'x',
                  'y',
                  'startAngle',
                  'endAngle',
                  'innerRadius',
                  'outerRadius',
                  'circumference',
                ],
                t
              ),
              { offset: s, spacing: l } = this.options,
              u = (r + i) / 2,
              c = (o + a + l + s) / 2;
            return { x: e + Math.cos(u) * c, y: n + Math.sin(u) * c };
          }
          tooltipPosition(t) {
            return this.getCenterPoint(t);
          }
          draw(t) {
            const { options: e, circumference: n } = this,
              r = (e.offset || 0) / 2,
              i = (e.spacing || 0) / 2,
              o = e.circular;
            if (
              ((this.pixelMargin = 'inner' === e.borderAlign ? 0.33 : 0),
              (this.fullCircles = n > Ur ? Math.floor(n / Ur) : 0),
              0 === n || this.innerRadius < 0 || this.outerRadius < 0)
            )
              return;
            t.save();
            let a = 0;
            if (r) {
              a = r / 2;
              const e = (this.startAngle + this.endAngle) / 2;
              t.translate(Math.cos(e) * a, Math.sin(e) * a),
                this.circumference >= $r && (a = r);
            }
            (t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor);
            const s = (function (t, e, n, r, i) {
              const { fullCircles: o, startAngle: a, circumference: s } = e;
              let l = e.endAngle;
              if (o) {
                Fl(t, e, n, r, a + Ur, i);
                for (let e = 0; e < o; ++e) t.fill();
                isNaN(s) || ((l = a + (s % Ur)), s % Ur == 0 && (l += Ur));
              }
              return Fl(t, e, n, r, l, i), t.fill(), l;
            })(t, this, a, i, o);
            (function (t, e, n, r, i, o) {
              const { options: a } = e,
                { borderWidth: s, borderJoinStyle: l } = a,
                u = 'inner' === a.borderAlign;
              s &&
                (u
                  ? ((t.lineWidth = 2 * s), (t.lineJoin = l || 'round'))
                  : ((t.lineWidth = s), (t.lineJoin = l || 'bevel')),
                e.fullCircles &&
                  (function (t, e, n) {
                    const {
                        x: r,
                        y: i,
                        startAngle: o,
                        pixelMargin: a,
                        fullCircles: s,
                      } = e,
                      l = Math.max(e.outerRadius - a, 0),
                      u = e.innerRadius + a;
                    let c;
                    for (
                      n && Il(t, e, o + Ur),
                        t.beginPath(),
                        t.arc(r, i, u, o + Ur, o, !0),
                        c = 0;
                      c < s;
                      ++c
                    )
                      t.stroke();
                    for (
                      t.beginPath(), t.arc(r, i, l, o, o + Ur), c = 0;
                      c < s;
                      ++c
                    )
                      t.stroke();
                  })(t, e, u),
                u && Il(t, e, i),
                Fl(t, e, n, r, i, o),
                t.stroke());
            })(t, this, a, i, s, o),
              t.restore();
          }
        }
        function Vl(t, e, n = e) {
          (t.lineCap = Cr(n.borderCapStyle, e.borderCapStyle)),
            t.setLineDash(Cr(n.borderDash, e.borderDash)),
            (t.lineDashOffset = Cr(n.borderDashOffset, e.borderDashOffset)),
            (t.lineJoin = Cr(n.borderJoinStyle, e.borderJoinStyle)),
            (t.lineWidth = Cr(n.borderWidth, e.borderWidth)),
            (t.strokeStyle = Cr(n.borderColor, e.borderColor));
        }
        function Bl(t, e, n) {
          t.lineTo(n.x, n.y);
        }
        function Wl(t, e, n = {}) {
          const r = t.length,
            { start: i = 0, end: o = r - 1 } = n,
            { start: a, end: s } = e,
            l = Math.max(i, a),
            u = Math.min(o, s),
            c = (i < a && o < a) || (i > s && o > s);
          return {
            count: r,
            start: l,
            loop: e.loop,
            ilen: u < l && !c ? r + u - l : u - l,
          };
        }
        function Hl(t, e, n, r) {
          const { points: i, options: o } = e,
            { count: a, start: s, loop: l, ilen: u } = Wl(i, n, r),
            c = (function (t) {
              return t.stepped
                ? Po
                : t.tension || 'monotone' === t.cubicInterpolationMode
                ? Eo
                : Bl;
            })(o);
          let d,
            h,
            f,
            { move: p = !0, reverse: g } = r || {};
          for (d = 0; d <= u; ++d)
            (h = i[(s + (g ? u - d : d)) % a]),
              h.skip ||
                (p ? (t.moveTo(h.x, h.y), (p = !1)) : c(t, f, h, g, o.stepped),
                (f = h));
          return (
            l && ((h = i[(s + (g ? u : 0)) % a]), c(t, f, h, g, o.stepped)), !!l
          );
        }
        function ql(t, e, n, r) {
          const i = e.points,
            { count: o, start: a, ilen: s } = Wl(i, n, r),
            { move: l = !0, reverse: u } = r || {};
          let c,
            d,
            h,
            f,
            p,
            g,
            m = 0,
            b = 0;
          const y = (t) => (a + (u ? s - t : t)) % o,
            v = () => {
              f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g));
            };
          for (l && ((d = i[y(0)]), t.moveTo(d.x, d.y)), c = 0; c <= s; ++c) {
            if (((d = i[y(c)]), d.skip)) continue;
            const e = d.x,
              n = d.y,
              r = 0 | e;
            r === h
              ? (n < f ? (f = n) : n > p && (p = n), (m = (b * m + e) / ++b))
              : (v(), t.lineTo(e, n), (h = r), (b = 0), (f = p = n)),
              (g = n);
          }
          v();
        }
        function $l(t) {
          const e = t.options,
            n = e.borderDash && e.borderDash.length;
          return t._decimated ||
            t._loop ||
            e.tension ||
            'monotone' === e.cubicInterpolationMode ||
            e.stepped ||
            n
            ? Hl
            : ql;
        }
        (jl.id = 'arc'),
          (jl.defaults = {
            borderAlign: 'center',
            borderColor: '#fff',
            borderJoinStyle: void 0,
            borderRadius: 0,
            borderWidth: 2,
            offset: 0,
            spacing: 0,
            angle: void 0,
            circular: !0,
          }),
          (jl.defaultRoutes = { backgroundColor: 'backgroundColor' });
        const Ul = 'function' == typeof Path2D;
        class Ql extends hs {
          constructor(t) {
            super(),
              (this.animated = !0),
              (this.options = void 0),
              (this._chart = void 0),
              (this._loop = void 0),
              (this._fullLoop = void 0),
              (this._path = void 0),
              (this._points = void 0),
              (this._segments = void 0),
              (this._decimated = !1),
              (this._pointsUpdated = !1),
              (this._datasetIndex = void 0),
              t && Object.assign(this, t);
          }
          updateControlPoints(t, e) {
            const n = this.options;
            if (
              (n.tension || 'monotone' === n.cubicInterpolationMode) &&
              !n.stepped &&
              !this._pointsUpdated
            ) {
              const r = n.spanGaps ? this._loop : this._fullLoop;
              sa(this._points, n, t, r, e), (this._pointsUpdated = !0);
            }
          }
          set points(t) {
            (this._points = t),
              delete this._segments,
              delete this._path,
              (this._pointsUpdated = !1);
          }
          get points() {
            return this._points;
          }
          get segments() {
            return (
              this._segments ||
              (this._segments = (function (t, e) {
                const n = t.points,
                  r = t.options.spanGaps,
                  i = n.length;
                if (!i) return [];
                const o = !!t._loop,
                  { start: a, end: s } = (function (t, e, n, r) {
                    let i = 0,
                      o = e - 1;
                    if (n && !r) for (; i < e && !t[i].skip; ) i++;
                    for (; i < e && t[i].skip; ) i++;
                    for (i %= e, n && (o += i); o > i && t[o % e].skip; ) o--;
                    return (o %= e), { start: i, end: o };
                  })(n, i, o, r);
                return (function (t, e, n, r) {
                  return r && r.setContext && n
                    ? (function (t, e, n, r) {
                        const i = t._chart.getContext(),
                          o = Ta(t.options),
                          {
                            _datasetIndex: a,
                            options: { spanGaps: s },
                          } = t,
                          l = n.length,
                          u = [];
                        let c = o,
                          d = e[0].start,
                          h = d;
                        function f(t, e, r, i) {
                          const o = s ? -1 : 1;
                          if (t !== e) {
                            for (t += l; n[t % l].skip; ) t -= o;
                            for (; n[e % l].skip; ) e += o;
                            t % l != e % l &&
                              (u.push({
                                start: t % l,
                                end: e % l,
                                loop: r,
                                style: i,
                              }),
                              (c = i),
                              (d = e % l));
                          }
                        }
                        for (const t of e) {
                          d = s ? d : t.start;
                          let e,
                            o = n[d % l];
                          for (h = d + 1; h <= t.end; h++) {
                            const s = n[h % l];
                            (e = Ta(
                              r.setContext(
                                Bo(i, {
                                  type: 'segment',
                                  p0: o,
                                  p1: s,
                                  p0DataIndex: (h - 1) % l,
                                  p1DataIndex: h % l,
                                  datasetIndex: a,
                                })
                              )
                            )),
                              Ra(e, c) && f(d, h - 1, t.loop, c),
                              (o = s),
                              (c = e);
                          }
                          d < h - 1 && f(d, h - 1, t.loop, c);
                        }
                        return u;
                      })(t, e, n, r)
                    : e;
                })(
                  t,
                  !0 === r
                    ? [{ start: a, end: s, loop: o }]
                    : (function (t, e, n, r) {
                        const i = t.length,
                          o = [];
                        let a,
                          s = e,
                          l = t[e];
                        for (a = e + 1; a <= n; ++a) {
                          const n = t[a % i];
                          n.skip || n.stop
                            ? l.skip ||
                              ((r = !1),
                              o.push({
                                start: e % i,
                                end: (a - 1) % i,
                                loop: r,
                              }),
                              (e = s = n.stop ? a : null))
                            : ((s = a), l.skip && (e = a)),
                            (l = n);
                        }
                        return (
                          null !== s &&
                            o.push({ start: e % i, end: s % i, loop: r }),
                          o
                        );
                      })(
                        n,
                        a,
                        s < a ? s + i : s,
                        !!t._fullLoop && 0 === a && s === i - 1
                      ),
                  n,
                  e
                );
              })(this, this.options.segment))
            );
          }
          first() {
            const t = this.segments,
              e = this.points;
            return t.length && e[t[0].start];
          }
          last() {
            const t = this.segments,
              e = this.points,
              n = t.length;
            return n && e[t[n - 1].end];
          }
          interpolate(t, e) {
            const n = this.options,
              r = t[e],
              i = this.points,
              o = Da(this, { property: e, start: r, end: r });
            if (!o.length) return;
            const a = [],
              s = (function (t) {
                return t.stepped
                  ? xa
                  : t.tension || 'monotone' === t.cubicInterpolationMode
                  ? _a
                  : va;
              })(n);
            let l, u;
            for (l = 0, u = o.length; l < u; ++l) {
              const { start: u, end: c } = o[l],
                d = i[u],
                h = i[c];
              if (d === h) {
                a.push(d);
                continue;
              }
              const f = s(
                d,
                h,
                Math.abs((r - d[e]) / (h[e] - d[e])),
                n.stepped
              );
              (f[e] = t[e]), a.push(f);
            }
            return 1 === a.length ? a[0] : a;
          }
          pathSegment(t, e, n) {
            return $l(this)(t, this, e, n);
          }
          path(t, e, n) {
            const r = this.segments,
              i = $l(this);
            let o = this._loop;
            (e = e || 0), (n = n || this.points.length - e);
            for (const a of r) o &= i(t, this, a, { start: e, end: e + n - 1 });
            return !!o;
          }
          draw(t, e, n, r) {
            const i = this.options || {};
            (this.points || []).length &&
              i.borderWidth &&
              (t.save(),
              (function (t, e, n, r) {
                Ul && !e.options.segment
                  ? (function (t, e, n, r) {
                      let i = e._path;
                      i ||
                        ((i = e._path = new Path2D()),
                        e.path(i, n, r) && i.closePath()),
                        Vl(t, e.options),
                        t.stroke(i);
                    })(t, e, n, r)
                  : (function (t, e, n, r) {
                      const { segments: i, options: o } = e,
                        a = $l(e);
                      for (const s of i)
                        Vl(t, o, s.style),
                          t.beginPath(),
                          a(t, e, s, { start: n, end: n + r - 1 }) &&
                            t.closePath(),
                          t.stroke();
                    })(t, e, n, r);
              })(t, this, n, r),
              t.restore()),
              this.animated &&
                ((this._pointsUpdated = !1), (this._path = void 0));
          }
        }
        function Kl(t, e, n, r) {
          const i = t.options,
            { [n]: o } = t.getProps([n], r);
          return Math.abs(e - o) < i.radius + i.hitRadius;
        }
        (Ql.id = 'line'),
          (Ql.defaults = {
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: 'miter',
            borderWidth: 3,
            capBezierPoints: !0,
            cubicInterpolationMode: 'default',
            fill: !1,
            spanGaps: !1,
            stepped: !1,
            tension: 0,
          }),
          (Ql.defaultRoutes = {
            backgroundColor: 'backgroundColor',
            borderColor: 'borderColor',
          }),
          (Ql.descriptors = {
            _scriptable: !0,
            _indexable: (t) => 'borderDash' !== t && 'fill' !== t,
          });
        class Yl extends hs {
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.parsed = void 0),
              (this.skip = void 0),
              (this.stop = void 0),
              t && Object.assign(this, t);
          }
          inRange(t, e, n) {
            const r = this.options,
              { x: i, y: o } = this.getProps(['x', 'y'], n);
            return (
              Math.pow(t - i, 2) + Math.pow(e - o, 2) <
              Math.pow(r.hitRadius + r.radius, 2)
            );
          }
          inXRange(t, e) {
            return Kl(this, t, 'x', e);
          }
          inYRange(t, e) {
            return Kl(this, t, 'y', e);
          }
          getCenterPoint(t) {
            const { x: e, y: n } = this.getProps(['x', 'y'], t);
            return { x: e, y: n };
          }
          size(t) {
            let e = (t = t || this.options || {}).radius || 0;
            return (
              (e = Math.max(e, (e && t.hoverRadius) || 0)),
              2 * (e + ((e && t.borderWidth) || 0))
            );
          }
          draw(t, e) {
            const n = this.options;
            this.skip ||
              n.radius < 0.1 ||
              !ko(this, e, this.size(n) / 2) ||
              ((t.strokeStyle = n.borderColor),
              (t.lineWidth = n.borderWidth),
              (t.fillStyle = n.backgroundColor),
              _o(t, n, this.x, this.y));
          }
          getRange() {
            const t = this.options || {};
            return t.radius + t.hitRadius;
          }
        }
        function Xl(t, e) {
          const {
            x: n,
            y: r,
            base: i,
            width: o,
            height: a,
          } = t.getProps(['x', 'y', 'base', 'width', 'height'], e);
          let s, l, u, c, d;
          return (
            t.horizontal
              ? ((d = a / 2),
                (s = Math.min(n, i)),
                (l = Math.max(n, i)),
                (u = r - d),
                (c = r + d))
              : ((d = o / 2),
                (s = n - d),
                (l = n + d),
                (u = Math.min(r, i)),
                (c = Math.max(r, i))),
            { left: s, top: u, right: l, bottom: c }
          );
        }
        function Gl(t, e, n, r) {
          return t ? 0 : fi(e, n, r);
        }
        function Zl(t, e, n, r) {
          const i = null === e,
            o = null === n,
            a = t && !(i && o) && Xl(t, r);
          return (
            a && (i || pi(e, a.left, a.right)) && (o || pi(n, a.top, a.bottom))
          );
        }
        function Jl(t, e) {
          t.rect(e.x, e.y, e.w, e.h);
        }
        function tu(t, e, n = {}) {
          const r = t.x !== n.x ? -e : 0,
            i = t.y !== n.y ? -e : 0,
            o = (t.x + t.w !== n.x + n.w ? e : 0) - r,
            a = (t.y + t.h !== n.y + n.h ? e : 0) - i;
          return {
            x: t.x + r,
            y: t.y + i,
            w: t.w + o,
            h: t.h + a,
            radius: t.radius,
          };
        }
        (Yl.id = 'point'),
          (Yl.defaults = {
            borderWidth: 1,
            hitRadius: 1,
            hoverBorderWidth: 1,
            hoverRadius: 4,
            pointStyle: 'circle',
            radius: 3,
            rotation: 0,
          }),
          (Yl.defaultRoutes = {
            backgroundColor: 'backgroundColor',
            borderColor: 'borderColor',
          });
        class eu extends hs {
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.horizontal = void 0),
              (this.base = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this.inflateAmount = void 0),
              t && Object.assign(this, t);
          }
          draw(t) {
            const {
                inflateAmount: e,
                options: { borderColor: n, backgroundColor: r },
              } = this,
              { inner: i, outer: o } = (function (t) {
                const e = Xl(t),
                  n = e.right - e.left,
                  r = e.bottom - e.top,
                  i = (function (t, e, n) {
                    const r = t.options.borderWidth,
                      i = t.borderSkipped,
                      o = Io(r);
                    return {
                      t: Gl(i.top, o.top, 0, n),
                      r: Gl(i.right, o.right, 0, e),
                      b: Gl(i.bottom, o.bottom, 0, n),
                      l: Gl(i.left, o.left, 0, e),
                    };
                  })(t, n / 2, r / 2),
                  o = (function (t, e, n) {
                    const { enableBorderRadius: r } = t.getProps([
                        'enableBorderRadius',
                      ]),
                      i = t.options.borderRadius,
                      o = No(i),
                      a = Math.min(e, n),
                      s = t.borderSkipped,
                      l = r || Mr(i);
                    return {
                      topLeft: Gl(!l || s.top || s.left, o.topLeft, 0, a),
                      topRight: Gl(!l || s.top || s.right, o.topRight, 0, a),
                      bottomLeft: Gl(
                        !l || s.bottom || s.left,
                        o.bottomLeft,
                        0,
                        a
                      ),
                      bottomRight: Gl(
                        !l || s.bottom || s.right,
                        o.bottomRight,
                        0,
                        a
                      ),
                    };
                  })(t, n / 2, r / 2);
                return {
                  outer: { x: e.left, y: e.top, w: n, h: r, radius: o },
                  inner: {
                    x: e.left + i.l,
                    y: e.top + i.t,
                    w: n - i.l - i.r,
                    h: r - i.t - i.b,
                    radius: {
                      topLeft: Math.max(0, o.topLeft - Math.max(i.t, i.l)),
                      topRight: Math.max(0, o.topRight - Math.max(i.t, i.r)),
                      bottomLeft: Math.max(
                        0,
                        o.bottomLeft - Math.max(i.b, i.l)
                      ),
                      bottomRight: Math.max(
                        0,
                        o.bottomRight - Math.max(i.b, i.r)
                      ),
                    },
                  },
                };
              })(this),
              a =
                (s = o.radius).topLeft ||
                s.topRight ||
                s.bottomLeft ||
                s.bottomRight
                  ? Do
                  : Jl;
            var s;
            t.save(),
              (o.w === i.w && o.h === i.h) ||
                (t.beginPath(),
                a(t, tu(o, e, i)),
                t.clip(),
                a(t, tu(i, -e, o)),
                (t.fillStyle = n),
                t.fill('evenodd')),
              t.beginPath(),
              a(t, tu(i, e)),
              (t.fillStyle = r),
              t.fill(),
              t.restore();
          }
          inRange(t, e, n) {
            return Zl(this, t, e, n);
          }
          inXRange(t, e) {
            return Zl(this, t, null, e);
          }
          inYRange(t, e) {
            return Zl(this, null, t, e);
          }
          getCenterPoint(t) {
            const {
              x: e,
              y: n,
              base: r,
              horizontal: i,
            } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
            return { x: i ? (e + r) / 2 : e, y: i ? n : (n + r) / 2 };
          }
          getRange(t) {
            return 'x' === t ? this.width / 2 : this.height / 2;
          }
        }
        (eu.id = 'bar'),
          (eu.defaults = {
            borderSkipped: 'start',
            borderWidth: 0,
            borderRadius: 0,
            inflateAmount: 'auto',
            pointStyle: void 0,
          }),
          (eu.defaultRoutes = {
            backgroundColor: 'backgroundColor',
            borderColor: 'borderColor',
          });
        var nu = Object.freeze({
          __proto__: null,
          ArcElement: jl,
          LineElement: Ql,
          PointElement: Yl,
          BarElement: eu,
        });
        function ru(t) {
          if (t._decimated) {
            const e = t._data;
            delete t._decimated,
              delete t._data,
              Object.defineProperty(t, 'data', { value: e });
          }
        }
        function iu(t) {
          t.data.datasets.forEach((t) => {
            ru(t);
          });
        }
        var ou = {
          id: 'decimation',
          defaults: { algorithm: 'min-max', enabled: !1 },
          beforeElementsUpdate: (t, e, n) => {
            if (!n.enabled) return void iu(t);
            const r = t.width;
            t.data.datasets.forEach((e, i) => {
              const { _data: o, indexAxis: a } = e,
                s = t.getDatasetMeta(i),
                l = o || e.data;
              if ('y' === Vo([a, t.options.indexAxis])) return;
              if (!s.controller.supportsDecimation) return;
              const u = t.scales[s.xAxisID];
              if ('linear' !== u.type && 'time' !== u.type) return;
              if (t.options.parsing) return;
              let c,
                { start: d, count: h } = (function (t, e) {
                  const n = e.length;
                  let r,
                    i = 0;
                  const { iScale: o } = t,
                    {
                      min: a,
                      max: s,
                      minDefined: l,
                      maxDefined: u,
                    } = o.getUserBounds();
                  return (
                    l && (i = fi(mi(e, o.axis, a).lo, 0, n - 1)),
                    (r = u ? fi(mi(e, o.axis, s).hi + 1, i, n) - i : n - i),
                    { start: i, count: r }
                  );
                })(s, l);
              if (h <= (n.threshold || 4 * r)) ru(e);
              else {
                switch (
                  (kr(o) &&
                    ((e._data = l),
                    delete e.data,
                    Object.defineProperty(e, 'data', {
                      configurable: !0,
                      enumerable: !0,
                      get: function () {
                        return this._decimated;
                      },
                      set: function (t) {
                        this._data = t;
                      },
                    })),
                  n.algorithm)
                ) {
                  case 'lttb':
                    c = (function (t, e, n, r, i) {
                      const o = i.samples || r;
                      if (o >= n) return t.slice(e, e + n);
                      const a = [],
                        s = (n - 2) / (o - 2);
                      let l = 0;
                      const u = e + n - 1;
                      let c,
                        d,
                        h,
                        f,
                        p,
                        g = e;
                      for (a[l++] = t[g], c = 0; c < o - 2; c++) {
                        let r,
                          i = 0,
                          o = 0;
                        const u = Math.floor((c + 1) * s) + 1 + e,
                          m = Math.min(Math.floor((c + 2) * s) + 1, n) + e,
                          b = m - u;
                        for (r = u; r < m; r++) (i += t[r].x), (o += t[r].y);
                        (i /= b), (o /= b);
                        const y = Math.floor(c * s) + 1 + e,
                          v = Math.min(Math.floor((c + 1) * s) + 1, n) + e,
                          { x, y: _ } = t[g];
                        for (h = f = -1, r = y; r < v; r++)
                          (f =
                            0.5 *
                            Math.abs(
                              (x - i) * (t[r].y - _) - (x - t[r].x) * (o - _)
                            )),
                            f > h && ((h = f), (d = t[r]), (p = r));
                        (a[l++] = d), (g = p);
                      }
                      return (a[l++] = t[u]), a;
                    })(l, d, h, r, n);
                    break;
                  case 'min-max':
                    c = (function (t, e, n, r) {
                      let i,
                        o,
                        a,
                        s,
                        l,
                        u,
                        c,
                        d,
                        h,
                        f,
                        p = 0,
                        g = 0;
                      const m = [],
                        b = e + n - 1,
                        y = t[e].x,
                        v = t[b].x - y;
                      for (i = e; i < e + n; ++i) {
                        (o = t[i]), (a = ((o.x - y) / v) * r), (s = o.y);
                        const e = 0 | a;
                        if (e === l)
                          s < h
                            ? ((h = s), (u = i))
                            : s > f && ((f = s), (c = i)),
                            (p = (g * p + o.x) / ++g);
                        else {
                          const n = i - 1;
                          if (!kr(u) && !kr(c)) {
                            const e = Math.min(u, c),
                              r = Math.max(u, c);
                            e !== d && e !== n && m.push({ ...t[e], x: p }),
                              r !== d && r !== n && m.push({ ...t[r], x: p });
                          }
                          i > 0 && n !== d && m.push(t[n]),
                            m.push(o),
                            (l = e),
                            (g = 0),
                            (h = f = s),
                            (u = c = d = i);
                        }
                      }
                      return m;
                    })(l, d, h, r);
                    break;
                  default:
                    throw new Error(
                      `Unsupported decimation algorithm '${n.algorithm}'`
                    );
                }
                e._decimated = c;
              }
            });
          },
          destroy(t) {
            iu(t);
          },
        };
        function au(t, e, n, r) {
          if (r) return;
          let i = e[t],
            o = n[t];
          return (
            'angle' === t && ((i = di(i)), (o = di(o))),
            { property: t, start: i, end: o }
          );
        }
        function su(t, e, n) {
          for (; e > t; e--) {
            const t = n[e];
            if (!isNaN(t.x) && !isNaN(t.y)) break;
          }
          return e;
        }
        function lu(t, e, n, r) {
          return t && e ? r(t[n], e[n]) : t ? t[n] : e ? e[n] : 0;
        }
        function uu(t, e) {
          let n = [],
            r = !1;
          return (
            Sr(t)
              ? ((r = !0), (n = t))
              : (n = (function (t, e) {
                  const { x: n = null, y: r = null } = t || {},
                    i = e.points,
                    o = [];
                  return (
                    e.segments.forEach(({ start: t, end: e }) => {
                      e = su(t, e, i);
                      const a = i[t],
                        s = i[e];
                      null !== r
                        ? (o.push({ x: a.x, y: r }), o.push({ x: s.x, y: r }))
                        : null !== n &&
                          (o.push({ x: n, y: a.y }), o.push({ x: n, y: s.y }));
                    }),
                    o
                  );
                })(t, e)),
            n.length
              ? new Ql({
                  points: n,
                  options: { tension: 0 },
                  _loop: r,
                  _fullLoop: r,
                })
              : null
          );
        }
        function cu(t) {
          return t && !1 !== t.fill;
        }
        function du(t, e, n) {
          let r = t[e].fill;
          const i = [e];
          let o;
          if (!n) return r;
          for (; !1 !== r && -1 === i.indexOf(r); ) {
            if (!Pr(r)) return r;
            if (((o = t[r]), !o)) return !1;
            if (o.visible) return r;
            i.push(r), (r = o.fill);
          }
          return !1;
        }
        function hu(t, e, n) {
          const r = (function (t) {
            const e = t.options,
              n = e.fill;
            let r = Cr(n && n.target, n);
            return (
              void 0 === r && (r = !!e.backgroundColor),
              !1 !== r && null !== r && (!0 === r ? 'origin' : r)
            );
          })(t);
          if (Mr(r)) return !isNaN(r.value) && r;
          let i = parseFloat(r);
          return Pr(i) && Math.floor(i) === i
            ? (function (t, e, n, r) {
                return (
                  ('-' !== t && '+' !== t) || (n = e + n),
                  !(n === e || n < 0 || n >= r) && n
                );
              })(r[0], e, i, n)
            : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(r) >= 0 && r;
        }
        function fu(t, e, n) {
          const r = [];
          for (let i = 0; i < n.length; i++) {
            const o = n[i],
              { first: a, last: s, point: l } = pu(o, e, 'x');
            if (!(!l || (a && s)))
              if (a) r.unshift(l);
              else if ((t.push(l), !s)) break;
          }
          t.push(...r);
        }
        function pu(t, e, n) {
          const r = t.interpolate(e, n);
          if (!r) return {};
          const i = r[n],
            o = t.segments,
            a = t.points;
          let s = !1,
            l = !1;
          for (let t = 0; t < o.length; t++) {
            const e = o[t],
              r = a[e.start][n],
              u = a[e.end][n];
            if (pi(i, r, u)) {
              (s = i === r), (l = i === u);
              break;
            }
          }
          return { first: s, last: l, point: r };
        }
        class gu {
          constructor(t) {
            (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
          }
          pathSegment(t, e, n) {
            const { x: r, y: i, radius: o } = this;
            return (
              (e = e || { start: 0, end: Ur }),
              t.arc(r, i, o, e.end, e.start, !0),
              !n.bounds
            );
          }
          interpolate(t) {
            const { x: e, y: n, radius: r } = this,
              i = t.angle;
            return { x: e + Math.cos(i) * r, y: n + Math.sin(i) * r, angle: i };
          }
        }
        function mu(t, e, n) {
          const r = (function (t) {
              const { chart: e, fill: n, line: r } = t;
              if (Pr(n))
                return (function (t, e) {
                  const n = t.getDatasetMeta(e);
                  return n && t.isDatasetVisible(e) ? n.dataset : null;
                })(e, n);
              if ('stack' === n)
                return (function (t) {
                  const { scale: e, index: n, line: r } = t,
                    i = [],
                    o = r.segments,
                    a = r.points,
                    s = (function (t, e) {
                      const n = [],
                        r = t.getMatchingVisibleMetas('line');
                      for (let t = 0; t < r.length; t++) {
                        const i = r[t];
                        if (i.index === e) break;
                        i.hidden || n.unshift(i.dataset);
                      }
                      return n;
                    })(e, n);
                  s.push(uu({ x: null, y: e.bottom }, r));
                  for (let t = 0; t < o.length; t++) {
                    const e = o[t];
                    for (let t = e.start; t <= e.end; t++) fu(i, a[t], s);
                  }
                  return new Ql({ points: i, options: {} });
                })(t);
              if ('shape' === n) return !0;
              const i = (function (t) {
                return (t.scale || {}).getPointPositionForValue
                  ? (function (t) {
                      const { scale: e, fill: n } = t,
                        r = e.options,
                        i = e.getLabels().length,
                        o = r.reverse ? e.max : e.min,
                        a = (function (t, e, n) {
                          let r;
                          return (
                            (r =
                              'start' === t
                                ? n
                                : 'end' === t
                                ? e.options.reverse
                                  ? e.min
                                  : e.max
                                : Mr(t)
                                ? t.value
                                : e.getBaseValue()),
                            r
                          );
                        })(n, e, o),
                        s = [];
                      if (r.grid.circular) {
                        const t = e.getPointPositionForValue(0, o);
                        return new gu({
                          x: t.x,
                          y: t.y,
                          radius: e.getDistanceFromCenterForValue(a),
                        });
                      }
                      for (let t = 0; t < i; ++t)
                        s.push(e.getPointPositionForValue(t, a));
                      return s;
                    })(t)
                  : (function (t) {
                      const { scale: e = {}, fill: n } = t,
                        r = (function (t, e) {
                          let n = null;
                          return (
                            'start' === t
                              ? (n = e.bottom)
                              : 'end' === t
                              ? (n = e.top)
                              : Mr(t)
                              ? (n = e.getPixelForValue(t.value))
                              : e.getBasePixel && (n = e.getBasePixel()),
                            n
                          );
                        })(n, e);
                      if (Pr(r)) {
                        const t = e.isHorizontal();
                        return { x: t ? r : null, y: t ? null : r };
                      }
                      return null;
                    })(t);
              })(t);
              return i instanceof gu ? i : uu(i, r);
            })(e),
            { line: i, scale: o, axis: a } = e,
            s = i.options,
            l = s.fill,
            u = s.backgroundColor,
            { above: c = u, below: d = u } = l || {};
          r &&
            i.points.length &&
            (So(t, n),
            (function (t, e) {
              const {
                  line: n,
                  target: r,
                  above: i,
                  below: o,
                  area: a,
                  scale: s,
                } = e,
                l = n._loop ? 'angle' : e.axis;
              t.save(),
                'x' === l &&
                  o !== i &&
                  (bu(t, r, a.top),
                  yu(t, {
                    line: n,
                    target: r,
                    color: i,
                    scale: s,
                    property: l,
                  }),
                  t.restore(),
                  t.save(),
                  bu(t, r, a.bottom)),
                yu(t, { line: n, target: r, color: o, scale: s, property: l }),
                t.restore();
            })(t, {
              line: i,
              target: r,
              above: c,
              below: d,
              area: n,
              scale: o,
              axis: a,
            }),
            Mo(t));
        }
        function bu(t, e, n) {
          const { segments: r, points: i } = e;
          let o = !0,
            a = !1;
          t.beginPath();
          for (const s of r) {
            const { start: r, end: l } = s,
              u = i[r],
              c = i[su(r, l, i)];
            o
              ? (t.moveTo(u.x, u.y), (o = !1))
              : (t.lineTo(u.x, n), t.lineTo(u.x, u.y)),
              (a = !!e.pathSegment(t, s, { move: a })),
              a ? t.closePath() : t.lineTo(c.x, n);
          }
          t.lineTo(e.first().x, n), t.closePath(), t.clip();
        }
        function yu(t, e) {
          const { line: n, target: r, property: i, color: o, scale: a } = e,
            s = (function (t, e, n) {
              const r = t.segments,
                i = t.points,
                o = e.points,
                a = [];
              for (const t of r) {
                let { start: r, end: s } = t;
                s = su(r, s, i);
                const l = au(n, i[r], i[s], t.loop);
                if (!e.segments) {
                  a.push({ source: t, target: l, start: i[r], end: i[s] });
                  continue;
                }
                const u = Da(e, l);
                for (const e of u) {
                  const r = au(n, o[e.start], o[e.end], e.loop),
                    s = Oa(t, i, r);
                  for (const t of s)
                    a.push({
                      source: t,
                      target: e,
                      start: { [n]: lu(l, r, 'start', Math.max) },
                      end: { [n]: lu(l, r, 'end', Math.min) },
                    });
                }
              }
              return a;
            })(n, r, i);
          for (const { source: e, target: l, start: u, end: c } of s) {
            const { style: { backgroundColor: s = o } = {} } = e,
              d = !0 !== r;
            t.save(),
              (t.fillStyle = s),
              vu(t, a, d && au(i, u, c)),
              t.beginPath();
            const h = !!n.pathSegment(t, e);
            let f;
            if (d) {
              h ? t.closePath() : xu(t, r, c, i);
              const e = !!r.pathSegment(t, l, { move: h, reverse: !0 });
              (f = h && e), f || xu(t, r, u, i);
            }
            t.closePath(), t.fill(f ? 'evenodd' : 'nonzero'), t.restore();
          }
        }
        function vu(t, e, n) {
          const { top: r, bottom: i } = e.chart.chartArea,
            { property: o, start: a, end: s } = n || {};
          'x' === o && (t.beginPath(), t.rect(a, r, s - a, i - r), t.clip());
        }
        function xu(t, e, n, r) {
          const i = e.interpolate(n, r);
          i && t.lineTo(i.x, i.y);
        }
        var _u = {
          id: 'filler',
          afterDatasetsUpdate(t, e, n) {
            const r = (t.data.datasets || []).length,
              i = [];
            let o, a, s, l;
            for (a = 0; a < r; ++a)
              (o = t.getDatasetMeta(a)),
                (s = o.dataset),
                (l = null),
                s &&
                  s.options &&
                  s instanceof Ql &&
                  (l = {
                    visible: t.isDatasetVisible(a),
                    index: a,
                    fill: hu(s, a, r),
                    chart: t,
                    axis: o.controller.options.indexAxis,
                    scale: o.vScale,
                    line: s,
                  }),
                (o.$filler = l),
                i.push(l);
            for (a = 0; a < r; ++a)
              (l = i[a]),
                l && !1 !== l.fill && (l.fill = du(i, a, n.propagate));
          },
          beforeDraw(t, e, n) {
            const r = 'beforeDraw' === n.drawTime,
              i = t.getSortedVisibleDatasetMetas(),
              o = t.chartArea;
            for (let e = i.length - 1; e >= 0; --e) {
              const n = i[e].$filler;
              n &&
                (n.line.updateControlPoints(o, n.axis),
                r && n.fill && mu(t.ctx, n, o));
            }
          },
          beforeDatasetsDraw(t, e, n) {
            if ('beforeDatasetsDraw' !== n.drawTime) return;
            const r = t.getSortedVisibleDatasetMetas();
            for (let e = r.length - 1; e >= 0; --e) {
              const n = r[e].$filler;
              cu(n) && mu(t.ctx, n, t.chartArea);
            }
          },
          beforeDatasetDraw(t, e, n) {
            const r = e.meta.$filler;
            cu(r) &&
              'beforeDatasetDraw' === n.drawTime &&
              mu(t.ctx, r, t.chartArea);
          },
          defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
        };
        const wu = (t, e) => {
          let { boxHeight: n = e, boxWidth: r = e } = t;
          return (
            t.usePointStyle &&
              ((n = Math.min(n, e)), (r = t.pointStyleWidth || Math.min(r, e))),
            { boxWidth: r, boxHeight: n, itemHeight: Math.max(e, n) }
          );
        };
        class ku extends hs {
          constructor(t) {
            super(),
              (this._added = !1),
              (this.legendHitBoxes = []),
              (this._hoveredItem = null),
              (this.doughnutMode = !1),
              (this.chart = t.chart),
              (this.options = t.options),
              (this.ctx = t.ctx),
              (this.legendItems = void 0),
              (this.columnSizes = void 0),
              (this.lineWidths = void 0),
              (this.maxHeight = void 0),
              (this.maxWidth = void 0),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.height = void 0),
              (this.width = void 0),
              (this._margins = void 0),
              (this.position = void 0),
              (this.weight = void 0),
              (this.fullSize = void 0);
          }
          update(t, e, n) {
            (this.maxWidth = t),
              (this.maxHeight = e),
              (this._margins = n),
              this.setDimensions(),
              this.buildLabels(),
              this.fit();
          }
          setDimensions() {
            this.isHorizontal()
              ? ((this.width = this.maxWidth),
                (this.left = this._margins.left),
                (this.right = this.width))
              : ((this.height = this.maxHeight),
                (this.top = this._margins.top),
                (this.bottom = this.height));
          }
          buildLabels() {
            const t = this.options.labels || {};
            let e = Dr(t.generateLabels, [this.chart], this) || [];
            t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
              t.sort && (e = e.sort((e, n) => t.sort(e, n, this.chart.data))),
              this.options.reverse && e.reverse(),
              (this.legendItems = e);
          }
          fit() {
            const { options: t, ctx: e } = this;
            if (!t.display) return void (this.width = this.height = 0);
            const n = t.labels,
              r = jo(n.font),
              i = r.size,
              o = this._computeTitleHeight(),
              { boxWidth: a, itemHeight: s } = wu(n, i);
            let l, u;
            (e.font = r.string),
              this.isHorizontal()
                ? ((l = this.maxWidth), (u = this._fitRows(o, i, a, s) + 10))
                : ((u = this.maxHeight), (l = this._fitCols(o, i, a, s) + 10)),
              (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
              (this.height = Math.min(u, t.maxHeight || this.maxHeight));
          }
          _fitRows(t, e, n, r) {
            const {
                ctx: i,
                maxWidth: o,
                options: {
                  labels: { padding: a },
                },
              } = this,
              s = (this.legendHitBoxes = []),
              l = (this.lineWidths = [0]),
              u = r + a;
            let c = t;
            (i.textAlign = 'left'), (i.textBaseline = 'middle');
            let d = -1,
              h = -u;
            return (
              this.legendItems.forEach((t, f) => {
                const p = n + e / 2 + i.measureText(t.text).width;
                (0 === f || l[l.length - 1] + p + 2 * a > o) &&
                  ((c += u),
                  (l[l.length - (f > 0 ? 0 : 1)] = 0),
                  (h += u),
                  d++),
                  (s[f] = { left: 0, top: h, row: d, width: p, height: r }),
                  (l[l.length - 1] += p + a);
              }),
              c
            );
          }
          _fitCols(t, e, n, r) {
            const {
                ctx: i,
                maxHeight: o,
                options: {
                  labels: { padding: a },
                },
              } = this,
              s = (this.legendHitBoxes = []),
              l = (this.columnSizes = []),
              u = o - t;
            let c = a,
              d = 0,
              h = 0,
              f = 0,
              p = 0;
            return (
              this.legendItems.forEach((t, o) => {
                const g = n + e / 2 + i.measureText(t.text).width;
                o > 0 &&
                  h + r + 2 * a > u &&
                  ((c += d + a),
                  l.push({ width: d, height: h }),
                  (f += d + a),
                  p++,
                  (d = h = 0)),
                  (s[o] = { left: f, top: h, col: p, width: g, height: r }),
                  (d = Math.max(d, g)),
                  (h += r + a);
              }),
              (c += d),
              l.push({ width: d, height: h }),
              c
            );
          }
          adjustHitBoxes() {
            if (!this.options.display) return;
            const t = this._computeTitleHeight(),
              {
                legendHitBoxes: e,
                options: {
                  align: n,
                  labels: { padding: r },
                  rtl: i,
                },
              } = this,
              o = Sa(i, this.left, this.width);
            if (this.isHorizontal()) {
              let i = 0,
                a = Si(n, this.left + r, this.right - this.lineWidths[i]);
              for (const s of e)
                i !== s.row &&
                  ((i = s.row),
                  (a = Si(n, this.left + r, this.right - this.lineWidths[i]))),
                  (s.top += this.top + t + r),
                  (s.left = o.leftForLtr(o.x(a), s.width)),
                  (a += s.width + r);
            } else {
              let i = 0,
                a = Si(
                  n,
                  this.top + t + r,
                  this.bottom - this.columnSizes[i].height
                );
              for (const s of e)
                s.col !== i &&
                  ((i = s.col),
                  (a = Si(
                    n,
                    this.top + t + r,
                    this.bottom - this.columnSizes[i].height
                  ))),
                  (s.top = a),
                  (s.left += this.left + r),
                  (s.left = o.leftForLtr(o.x(s.left), s.width)),
                  (a += s.height + r);
            }
          }
          isHorizontal() {
            return (
              'top' === this.options.position ||
              'bottom' === this.options.position
            );
          }
          draw() {
            if (this.options.display) {
              const t = this.ctx;
              So(t, this), this._draw(), Mo(t);
            }
          }
          _draw() {
            const { options: t, columnSizes: e, lineWidths: n, ctx: r } = this,
              { align: i, labels: o } = t,
              a = mo.color,
              s = Sa(t.rtl, this.left, this.width),
              l = jo(o.font),
              { color: u, padding: c } = o,
              d = l.size,
              h = d / 2;
            let f;
            this.drawTitle(),
              (r.textAlign = s.textAlign('left')),
              (r.textBaseline = 'middle'),
              (r.lineWidth = 0.5),
              (r.font = l.string);
            const { boxWidth: p, boxHeight: g, itemHeight: m } = wu(o, d),
              b = this.isHorizontal(),
              y = this._computeTitleHeight();
            (f = b
              ? {
                  x: Si(i, this.left + c, this.right - n[0]),
                  y: this.top + c + y,
                  line: 0,
                }
              : {
                  x: this.left + c,
                  y: Si(i, this.top + y + c, this.bottom - e[0].height),
                  line: 0,
                }),
              Ma(this.ctx, t.textDirection);
            const v = m + c;
            this.legendItems.forEach((x, _) => {
              (r.strokeStyle = x.fontColor || u),
                (r.fillStyle = x.fontColor || u);
              const w = r.measureText(x.text).width,
                k = s.textAlign(x.textAlign || (x.textAlign = o.textAlign)),
                S = p + h + w;
              let M = f.x,
                P = f.y;
              s.setWidth(this.width),
                b
                  ? _ > 0 &&
                    M + S + c > this.right &&
                    ((P = f.y += v),
                    f.line++,
                    (M = f.x = Si(i, this.left + c, this.right - n[f.line])))
                  : _ > 0 &&
                    P + v > this.bottom &&
                    ((M = f.x = M + e[f.line].width + c),
                    f.line++,
                    (P = f.y =
                      Si(i, this.top + y + c, this.bottom - e[f.line].height))),
                (function (t, e, n) {
                  if (isNaN(p) || p <= 0 || isNaN(g) || g < 0) return;
                  r.save();
                  const i = Cr(n.lineWidth, 1);
                  if (
                    ((r.fillStyle = Cr(n.fillStyle, a)),
                    (r.lineCap = Cr(n.lineCap, 'butt')),
                    (r.lineDashOffset = Cr(n.lineDashOffset, 0)),
                    (r.lineJoin = Cr(n.lineJoin, 'miter')),
                    (r.lineWidth = i),
                    (r.strokeStyle = Cr(n.strokeStyle, a)),
                    r.setLineDash(Cr(n.lineDash, [])),
                    o.usePointStyle)
                  ) {
                    const a = {
                        radius: (g * Math.SQRT2) / 2,
                        pointStyle: n.pointStyle,
                        rotation: n.rotation,
                        borderWidth: i,
                      },
                      l = s.xPlus(t, p / 2);
                    wo(r, a, l, e + h, o.pointStyleWidth && p);
                  } else {
                    const o = e + Math.max((d - g) / 2, 0),
                      a = s.leftForLtr(t, p),
                      l = No(n.borderRadius);
                    r.beginPath(),
                      Object.values(l).some((t) => 0 !== t)
                        ? Do(r, { x: a, y: o, w: p, h: g, radius: l })
                        : r.rect(a, o, p, g),
                      r.fill(),
                      0 !== i && r.stroke();
                  }
                  r.restore();
                })(s.x(M), P, x),
                (M = ((t, e, n, r) =>
                  t === (r ? 'left' : 'right')
                    ? n
                    : 'center' === t
                    ? (e + n) / 2
                    : e)(k, M + p + h, b ? M + S : this.right, t.rtl)),
                (function (t, e, n) {
                  Co(r, n.text, t, e + m / 2, l, {
                    strikethrough: n.hidden,
                    textAlign: s.textAlign(n.textAlign),
                  });
                })(s.x(M), P, x),
                b ? (f.x += S + c) : (f.y += v);
            }),
              Pa(this.ctx, t.textDirection);
          }
          drawTitle() {
            const t = this.options,
              e = t.title,
              n = jo(e.font),
              r = Fo(e.padding);
            if (!e.display) return;
            const i = Sa(t.rtl, this.left, this.width),
              o = this.ctx,
              a = e.position,
              s = n.size / 2,
              l = r.top + s;
            let u,
              c = this.left,
              d = this.width;
            if (this.isHorizontal())
              (d = Math.max(...this.lineWidths)),
                (u = this.top + l),
                (c = Si(t.align, c, this.right - d));
            else {
              const e = this.columnSizes.reduce(
                (t, e) => Math.max(t, e.height),
                0
              );
              u =
                l +
                Si(
                  t.align,
                  this.top,
                  this.bottom -
                    e -
                    t.labels.padding -
                    this._computeTitleHeight()
                );
            }
            const h = Si(a, c, c + d);
            (o.textAlign = i.textAlign(ki(a))),
              (o.textBaseline = 'middle'),
              (o.strokeStyle = e.color),
              (o.fillStyle = e.color),
              (o.font = n.string),
              Co(o, e.text, h, u, n);
          }
          _computeTitleHeight() {
            const t = this.options.title,
              e = jo(t.font),
              n = Fo(t.padding);
            return t.display ? e.lineHeight + n.height : 0;
          }
          _getLegendItemAt(t, e) {
            let n, r, i;
            if (pi(t, this.left, this.right) && pi(e, this.top, this.bottom))
              for (i = this.legendHitBoxes, n = 0; n < i.length; ++n)
                if (
                  ((r = i[n]),
                  pi(t, r.left, r.left + r.width) &&
                    pi(e, r.top, r.top + r.height))
                )
                  return this.legendItems[n];
            return null;
          }
          handleEvent(t) {
            const e = this.options;
            if (
              !(function (t, e) {
                return (
                  !(
                    ('mousemove' !== t && 'mouseout' !== t) ||
                    (!e.onHover && !e.onLeave)
                  ) || !(!e.onClick || ('click' !== t && 'mouseup' !== t))
                );
              })(t.type, e)
            )
              return;
            const n = this._getLegendItemAt(t.x, t.y);
            if ('mousemove' === t.type || 'mouseout' === t.type) {
              const r = this._hoveredItem,
                i = ((t, e) =>
                  null !== t &&
                  null !== e &&
                  t.datasetIndex === e.datasetIndex &&
                  t.index === e.index)(r, n);
              r && !i && Dr(e.onLeave, [t, r, this], this),
                (this._hoveredItem = n),
                n && !i && Dr(e.onHover, [t, n, this], this);
            } else n && Dr(e.onClick, [t, n, this], this);
          }
        }
        var Su = {
          id: 'legend',
          _element: ku,
          start(t, e, n) {
            const r = (t.legend = new ku({ ctx: t.ctx, options: n, chart: t }));
            Qs.configure(t, r, n), Qs.addBox(t, r);
          },
          stop(t) {
            Qs.removeBox(t, t.legend), delete t.legend;
          },
          beforeUpdate(t, e, n) {
            const r = t.legend;
            Qs.configure(t, r, n), (r.options = n);
          },
          afterUpdate(t) {
            const e = t.legend;
            e.buildLabels(), e.adjustHitBoxes();
          },
          afterEvent(t, e) {
            e.replay || t.legend.handleEvent(e.event);
          },
          defaults: {
            display: !0,
            position: 'top',
            align: 'center',
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick(t, e, n) {
              const r = e.datasetIndex,
                i = n.chart;
              i.isDatasetVisible(r)
                ? (i.hide(r), (e.hidden = !0))
                : (i.show(r), (e.hidden = !1));
            },
            onHover: null,
            onLeave: null,
            labels: {
              color: (t) => t.chart.options.color,
              boxWidth: 40,
              padding: 10,
              generateLabels(t) {
                const e = t.data.datasets,
                  {
                    labels: {
                      usePointStyle: n,
                      pointStyle: r,
                      textAlign: i,
                      color: o,
                    },
                  } = t.legend.options;
                return t._getSortedDatasetMetas().map((t) => {
                  const a = t.controller.getStyle(n ? 0 : void 0),
                    s = Fo(a.borderWidth);
                  return {
                    text: e[t.index].label,
                    fillStyle: a.backgroundColor,
                    fontColor: o,
                    hidden: !t.visible,
                    lineCap: a.borderCapStyle,
                    lineDash: a.borderDash,
                    lineDashOffset: a.borderDashOffset,
                    lineJoin: a.borderJoinStyle,
                    lineWidth: (s.width + s.height) / 4,
                    strokeStyle: a.borderColor,
                    pointStyle: r || a.pointStyle,
                    rotation: a.rotation,
                    textAlign: i || a.textAlign,
                    borderRadius: 0,
                    datasetIndex: t.index,
                  };
                }, this);
              },
            },
            title: {
              color: (t) => t.chart.options.color,
              display: !1,
              position: 'center',
              text: '',
            },
          },
          descriptors: {
            _scriptable: (t) => !t.startsWith('on'),
            labels: {
              _scriptable: (t) =>
                !['generateLabels', 'filter', 'sort'].includes(t),
            },
          },
        };
        class Mu extends hs {
          constructor(t) {
            super(),
              (this.chart = t.chart),
              (this.options = t.options),
              (this.ctx = t.ctx),
              (this._padding = void 0),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this.position = void 0),
              (this.weight = void 0),
              (this.fullSize = void 0);
          }
          update(t, e) {
            const n = this.options;
            if (((this.left = 0), (this.top = 0), !n.display))
              return void (this.width =
                this.height =
                this.right =
                this.bottom =
                  0);
            (this.width = this.right = t), (this.height = this.bottom = e);
            const r = Sr(n.text) ? n.text.length : 1;
            this._padding = Fo(n.padding);
            const i = r * jo(n.font).lineHeight + this._padding.height;
            this.isHorizontal() ? (this.height = i) : (this.width = i);
          }
          isHorizontal() {
            const t = this.options.position;
            return 'top' === t || 'bottom' === t;
          }
          _drawArgs(t) {
            const { top: e, left: n, bottom: r, right: i, options: o } = this,
              a = o.align;
            let s,
              l,
              u,
              c = 0;
            return (
              this.isHorizontal()
                ? ((l = Si(a, n, i)), (u = e + t), (s = i - n))
                : ('left' === o.position
                    ? ((l = n + t), (u = Si(a, r, e)), (c = -0.5 * $r))
                    : ((l = i - t), (u = Si(a, e, r)), (c = 0.5 * $r)),
                  (s = r - e)),
              { titleX: l, titleY: u, maxWidth: s, rotation: c }
            );
          }
          draw() {
            const t = this.ctx,
              e = this.options;
            if (!e.display) return;
            const n = jo(e.font),
              r = n.lineHeight / 2 + this._padding.top,
              {
                titleX: i,
                titleY: o,
                maxWidth: a,
                rotation: s,
              } = this._drawArgs(r);
            Co(t, e.text, 0, 0, n, {
              color: e.color,
              maxWidth: a,
              rotation: s,
              textAlign: ki(e.align),
              textBaseline: 'middle',
              translation: [i, o],
            });
          }
        }
        var Pu = {
          id: 'title',
          _element: Mu,
          start(t, e, n) {
            !(function (t, e) {
              const n = new Mu({ ctx: t.ctx, options: e, chart: t });
              Qs.configure(t, n, e), Qs.addBox(t, n), (t.titleBlock = n);
            })(t, n);
          },
          stop(t) {
            const e = t.titleBlock;
            Qs.removeBox(t, e), delete t.titleBlock;
          },
          beforeUpdate(t, e, n) {
            const r = t.titleBlock;
            Qs.configure(t, r, n), (r.options = n);
          },
          defaults: {
            align: 'center',
            display: !1,
            font: { weight: 'bold' },
            fullSize: !0,
            padding: 10,
            position: 'top',
            text: '',
            weight: 2e3,
          },
          defaultRoutes: { color: 'color' },
          descriptors: { _scriptable: !0, _indexable: !1 },
        };
        const Eu = new WeakMap();
        var Cu = {
          id: 'subtitle',
          start(t, e, n) {
            const r = new Mu({ ctx: t.ctx, options: n, chart: t });
            Qs.configure(t, r, n), Qs.addBox(t, r), Eu.set(t, r);
          },
          stop(t) {
            Qs.removeBox(t, Eu.get(t)), Eu.delete(t);
          },
          beforeUpdate(t, e, n) {
            const r = Eu.get(t);
            Qs.configure(t, r, n), (r.options = n);
          },
          defaults: {
            align: 'center',
            display: !1,
            font: { weight: 'normal' },
            fullSize: !0,
            padding: 0,
            position: 'top',
            text: '',
            weight: 1500,
          },
          defaultRoutes: { color: 'color' },
          descriptors: { _scriptable: !0, _indexable: !1 },
        };
        const Ou = {
          average(t) {
            if (!t.length) return !1;
            let e,
              n,
              r = 0,
              i = 0,
              o = 0;
            for (e = 0, n = t.length; e < n; ++e) {
              const n = t[e].element;
              if (n && n.hasValue()) {
                const t = n.tooltipPosition();
                (r += t.x), (i += t.y), ++o;
              }
            }
            return { x: r / o, y: i / o };
          },
          nearest(t, e) {
            if (!t.length) return !1;
            let n,
              r,
              i,
              o = e.x,
              a = e.y,
              s = Number.POSITIVE_INFINITY;
            for (n = 0, r = t.length; n < r; ++n) {
              const r = t[n].element;
              if (r && r.hasValue()) {
                const t = ui(e, r.getCenterPoint());
                t < s && ((s = t), (i = r));
              }
            }
            if (i) {
              const t = i.tooltipPosition();
              (o = t.x), (a = t.y);
            }
            return { x: o, y: a };
          },
        };
        function Du(t, e) {
          return e && (Sr(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }
        function Tu(t) {
          return ('string' == typeof t || t instanceof String) &&
            t.indexOf('\n') > -1
            ? t.split('\n')
            : t;
        }
        function Ru(t, e) {
          const { element: n, datasetIndex: r, index: i } = e,
            o = t.getDatasetMeta(r).controller,
            { label: a, value: s } = o.getLabelAndValue(i);
          return {
            chart: t,
            label: a,
            parsed: o.getParsed(i),
            raw: t.data.datasets[r].data[i],
            formattedValue: s,
            dataset: o.getDataset(),
            dataIndex: i,
            datasetIndex: r,
            element: n,
          };
        }
        function Au(t, e) {
          const n = t.chart.ctx,
            { body: r, footer: i, title: o } = t,
            { boxWidth: a, boxHeight: s } = e,
            l = jo(e.bodyFont),
            u = jo(e.titleFont),
            c = jo(e.footerFont),
            d = o.length,
            h = i.length,
            f = r.length,
            p = Fo(e.padding);
          let g = p.height,
            m = 0,
            b = r.reduce(
              (t, e) => t + e.before.length + e.lines.length + e.after.length,
              0
            );
          (b += t.beforeBody.length + t.afterBody.length),
            d &&
              (g +=
                d * u.lineHeight +
                (d - 1) * e.titleSpacing +
                e.titleMarginBottom),
            b &&
              (g +=
                f *
                  (e.displayColors ? Math.max(s, l.lineHeight) : l.lineHeight) +
                (b - f) * l.lineHeight +
                (b - 1) * e.bodySpacing),
            h &&
              (g +=
                e.footerMarginTop +
                h * c.lineHeight +
                (h - 1) * e.footerSpacing);
          let y = 0;
          const v = function (t) {
            m = Math.max(m, n.measureText(t).width + y);
          };
          return (
            n.save(),
            (n.font = u.string),
            Tr(t.title, v),
            (n.font = l.string),
            Tr(t.beforeBody.concat(t.afterBody), v),
            (y = e.displayColors ? a + 2 + e.boxPadding : 0),
            Tr(r, (t) => {
              Tr(t.before, v), Tr(t.lines, v), Tr(t.after, v);
            }),
            (y = 0),
            (n.font = c.string),
            Tr(t.footer, v),
            n.restore(),
            (m += p.width),
            { width: m, height: g }
          );
        }
        function Lu(t, e, n, r) {
          const { x: i, width: o } = n,
            {
              width: a,
              chartArea: { left: s, right: l },
            } = t;
          let u = 'center';
          return (
            'center' === r
              ? (u = i <= (s + l) / 2 ? 'left' : 'right')
              : i <= o / 2
              ? (u = 'left')
              : i >= a - o / 2 && (u = 'right'),
            (function (t, e, n, r) {
              const { x: i, width: o } = r,
                a = n.caretSize + n.caretPadding;
              return (
                ('left' === t && i + o + a > e.width) ||
                ('right' === t && i - o - a < 0) ||
                void 0
              );
            })(u, t, e, n) && (u = 'center'),
            u
          );
        }
        function zu(t, e, n) {
          const r =
            n.yAlign ||
            e.yAlign ||
            (function (t, e) {
              const { y: n, height: r } = e;
              return n < r / 2
                ? 'top'
                : n > t.height - r / 2
                ? 'bottom'
                : 'center';
            })(t, n);
          return { xAlign: n.xAlign || e.xAlign || Lu(t, e, n, r), yAlign: r };
        }
        function Iu(t, e, n, r) {
          const { caretSize: i, caretPadding: o, cornerRadius: a } = t,
            { xAlign: s, yAlign: l } = n,
            u = i + o,
            { topLeft: c, topRight: d, bottomLeft: h, bottomRight: f } = No(a);
          let p = (function (t, e) {
            let { x: n, width: r } = t;
            return 'right' === e ? (n -= r) : 'center' === e && (n -= r / 2), n;
          })(e, s);
          const g = (function (t, e, n) {
            let { y: r, height: i } = t;
            return (
              'top' === e ? (r += n) : (r -= 'bottom' === e ? i + n : i / 2), r
            );
          })(e, l, u);
          return (
            'center' === l
              ? 'left' === s
                ? (p += u)
                : 'right' === s && (p -= u)
              : 'left' === s
              ? (p -= Math.max(c, h) + i)
              : 'right' === s && (p += Math.max(d, f) + i),
            { x: fi(p, 0, r.width - e.width), y: fi(g, 0, r.height - e.height) }
          );
        }
        function Nu(t, e, n) {
          const r = Fo(n.padding);
          return 'center' === e
            ? t.x + t.width / 2
            : 'right' === e
            ? t.x + t.width - r.right
            : t.x + r.left;
        }
        function Fu(t) {
          return Du([], Tu(t));
        }
        function ju(t, e) {
          const n =
            e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
          return n ? t.override(n) : t;
        }
        class Vu extends hs {
          constructor(t) {
            super(),
              (this.opacity = 0),
              (this._active = []),
              (this._eventPosition = void 0),
              (this._size = void 0),
              (this._cachedAnimations = void 0),
              (this._tooltipItems = []),
              (this.$animations = void 0),
              (this.$context = void 0),
              (this.chart = t.chart || t._chart),
              (this._chart = this.chart),
              (this.options = t.options),
              (this.dataPoints = void 0),
              (this.title = void 0),
              (this.beforeBody = void 0),
              (this.body = void 0),
              (this.afterBody = void 0),
              (this.footer = void 0),
              (this.xAlign = void 0),
              (this.yAlign = void 0),
              (this.x = void 0),
              (this.y = void 0),
              (this.height = void 0),
              (this.width = void 0),
              (this.caretX = void 0),
              (this.caretY = void 0),
              (this.labelColors = void 0),
              (this.labelPointStyles = void 0),
              (this.labelTextColors = void 0);
          }
          initialize(t) {
            (this.options = t),
              (this._cachedAnimations = void 0),
              (this.$context = void 0);
          }
          _resolveAnimations() {
            const t = this._cachedAnimations;
            if (t) return t;
            const e = this.chart,
              n = this.options.setContext(this.getContext()),
              r = n.enabled && e.options.animation && n.animations,
              i = new Fa(this.chart, r);
            return (
              r._cacheable && (this._cachedAnimations = Object.freeze(i)), i
            );
          }
          getContext() {
            return (
              this.$context ||
              (this.$context =
                (this,
                Bo(this.chart.getContext(), {
                  tooltip: this,
                  tooltipItems: this._tooltipItems,
                  type: 'tooltip',
                })))
            );
          }
          getTitle(t, e) {
            const { callbacks: n } = e,
              r = n.beforeTitle.apply(this, [t]),
              i = n.title.apply(this, [t]),
              o = n.afterTitle.apply(this, [t]);
            let a = [];
            return (
              (a = Du(a, Tu(r))), (a = Du(a, Tu(i))), (a = Du(a, Tu(o))), a
            );
          }
          getBeforeBody(t, e) {
            return Fu(e.callbacks.beforeBody.apply(this, [t]));
          }
          getBody(t, e) {
            const { callbacks: n } = e,
              r = [];
            return (
              Tr(t, (t) => {
                const e = { before: [], lines: [], after: [] },
                  i = ju(n, t);
                Du(e.before, Tu(i.beforeLabel.call(this, t))),
                  Du(e.lines, i.label.call(this, t)),
                  Du(e.after, Tu(i.afterLabel.call(this, t))),
                  r.push(e);
              }),
              r
            );
          }
          getAfterBody(t, e) {
            return Fu(e.callbacks.afterBody.apply(this, [t]));
          }
          getFooter(t, e) {
            const { callbacks: n } = e,
              r = n.beforeFooter.apply(this, [t]),
              i = n.footer.apply(this, [t]),
              o = n.afterFooter.apply(this, [t]);
            let a = [];
            return (
              (a = Du(a, Tu(r))), (a = Du(a, Tu(i))), (a = Du(a, Tu(o))), a
            );
          }
          _createItems(t) {
            const e = this._active,
              n = this.chart.data,
              r = [],
              i = [],
              o = [];
            let a,
              s,
              l = [];
            for (a = 0, s = e.length; a < s; ++a) l.push(Ru(this.chart, e[a]));
            return (
              t.filter && (l = l.filter((e, r, i) => t.filter(e, r, i, n))),
              t.itemSort && (l = l.sort((e, r) => t.itemSort(e, r, n))),
              Tr(l, (e) => {
                const n = ju(t.callbacks, e);
                r.push(n.labelColor.call(this, e)),
                  i.push(n.labelPointStyle.call(this, e)),
                  o.push(n.labelTextColor.call(this, e));
              }),
              (this.labelColors = r),
              (this.labelPointStyles = i),
              (this.labelTextColors = o),
              (this.dataPoints = l),
              l
            );
          }
          update(t, e) {
            const n = this.options.setContext(this.getContext()),
              r = this._active;
            let i,
              o = [];
            if (r.length) {
              const t = Ou[n.position].call(this, r, this._eventPosition);
              (o = this._createItems(n)),
                (this.title = this.getTitle(o, n)),
                (this.beforeBody = this.getBeforeBody(o, n)),
                (this.body = this.getBody(o, n)),
                (this.afterBody = this.getAfterBody(o, n)),
                (this.footer = this.getFooter(o, n));
              const e = (this._size = Au(this, n)),
                a = Object.assign({}, t, e),
                s = zu(this.chart, n, a),
                l = Iu(n, a, s, this.chart);
              (this.xAlign = s.xAlign),
                (this.yAlign = s.yAlign),
                (i = {
                  opacity: 1,
                  x: l.x,
                  y: l.y,
                  width: e.width,
                  height: e.height,
                  caretX: t.x,
                  caretY: t.y,
                });
            } else 0 !== this.opacity && (i = { opacity: 0 });
            (this._tooltipItems = o),
              (this.$context = void 0),
              i && this._resolveAnimations().update(this, i),
              t &&
                n.external &&
                n.external.call(this, {
                  chart: this.chart,
                  tooltip: this,
                  replay: e,
                });
          }
          drawCaret(t, e, n, r) {
            const i = this.getCaretPosition(t, n, r);
            e.lineTo(i.x1, i.y1), e.lineTo(i.x2, i.y2), e.lineTo(i.x3, i.y3);
          }
          getCaretPosition(t, e, n) {
            const { xAlign: r, yAlign: i } = this,
              { caretSize: o, cornerRadius: a } = n,
              {
                topLeft: s,
                topRight: l,
                bottomLeft: u,
                bottomRight: c,
              } = No(a),
              { x: d, y: h } = t,
              { width: f, height: p } = e;
            let g, m, b, y, v, x;
            return (
              'center' === i
                ? ((v = h + p / 2),
                  'left' === r
                    ? ((g = d), (m = g - o), (y = v + o), (x = v - o))
                    : ((g = d + f), (m = g + o), (y = v - o), (x = v + o)),
                  (b = g))
                : ((m =
                    'left' === r
                      ? d + Math.max(s, u) + o
                      : 'right' === r
                      ? d + f - Math.max(l, c) - o
                      : this.caretX),
                  'top' === i
                    ? ((y = h), (v = y - o), (g = m - o), (b = m + o))
                    : ((y = h + p), (v = y + o), (g = m + o), (b = m - o)),
                  (x = y)),
              { x1: g, x2: m, x3: b, y1: y, y2: v, y3: x }
            );
          }
          drawTitle(t, e, n) {
            const r = this.title,
              i = r.length;
            let o, a, s;
            if (i) {
              const l = Sa(n.rtl, this.x, this.width);
              for (
                t.x = Nu(this, n.titleAlign, n),
                  e.textAlign = l.textAlign(n.titleAlign),
                  e.textBaseline = 'middle',
                  o = jo(n.titleFont),
                  a = n.titleSpacing,
                  e.fillStyle = n.titleColor,
                  e.font = o.string,
                  s = 0;
                s < i;
                ++s
              )
                e.fillText(r[s], l.x(t.x), t.y + o.lineHeight / 2),
                  (t.y += o.lineHeight + a),
                  s + 1 === i && (t.y += n.titleMarginBottom - a);
            }
          }
          _drawColorBox(t, e, n, r, i) {
            const o = this.labelColors[n],
              a = this.labelPointStyles[n],
              { boxHeight: s, boxWidth: l, boxPadding: u } = i,
              c = jo(i.bodyFont),
              d = Nu(this, 'left', i),
              h = r.x(d),
              f = s < c.lineHeight ? (c.lineHeight - s) / 2 : 0,
              p = e.y + f;
            if (i.usePointStyle) {
              const e = {
                  radius: Math.min(l, s) / 2,
                  pointStyle: a.pointStyle,
                  rotation: a.rotation,
                  borderWidth: 1,
                },
                n = r.leftForLtr(h, l) + l / 2,
                u = p + s / 2;
              (t.strokeStyle = i.multiKeyBackground),
                (t.fillStyle = i.multiKeyBackground),
                _o(t, e, n, u),
                (t.strokeStyle = o.borderColor),
                (t.fillStyle = o.backgroundColor),
                _o(t, e, n, u);
            } else {
              (t.lineWidth = Mr(o.borderWidth)
                ? Math.max(...Object.values(o.borderWidth))
                : o.borderWidth || 1),
                (t.strokeStyle = o.borderColor),
                t.setLineDash(o.borderDash || []),
                (t.lineDashOffset = o.borderDashOffset || 0);
              const e = r.leftForLtr(h, l - u),
                n = r.leftForLtr(r.xPlus(h, 1), l - u - 2),
                a = No(o.borderRadius);
              Object.values(a).some((t) => 0 !== t)
                ? (t.beginPath(),
                  (t.fillStyle = i.multiKeyBackground),
                  Do(t, { x: e, y: p, w: l, h: s, radius: a }),
                  t.fill(),
                  t.stroke(),
                  (t.fillStyle = o.backgroundColor),
                  t.beginPath(),
                  Do(t, { x: n, y: p + 1, w: l - 2, h: s - 2, radius: a }),
                  t.fill())
                : ((t.fillStyle = i.multiKeyBackground),
                  t.fillRect(e, p, l, s),
                  t.strokeRect(e, p, l, s),
                  (t.fillStyle = o.backgroundColor),
                  t.fillRect(n, p + 1, l - 2, s - 2));
            }
            t.fillStyle = this.labelTextColors[n];
          }
          drawBody(t, e, n) {
            const { body: r } = this,
              {
                bodySpacing: i,
                bodyAlign: o,
                displayColors: a,
                boxHeight: s,
                boxWidth: l,
                boxPadding: u,
              } = n,
              c = jo(n.bodyFont);
            let d = c.lineHeight,
              h = 0;
            const f = Sa(n.rtl, this.x, this.width),
              p = function (n) {
                e.fillText(n, f.x(t.x + h), t.y + d / 2), (t.y += d + i);
              },
              g = f.textAlign(o);
            let m, b, y, v, x, _, w;
            for (
              e.textAlign = o,
                e.textBaseline = 'middle',
                e.font = c.string,
                t.x = Nu(this, g, n),
                e.fillStyle = n.bodyColor,
                Tr(this.beforeBody, p),
                h =
                  a && 'right' !== g
                    ? 'center' === o
                      ? l / 2 + u
                      : l + 2 + u
                    : 0,
                v = 0,
                _ = r.length;
              v < _;
              ++v
            ) {
              for (
                m = r[v],
                  b = this.labelTextColors[v],
                  e.fillStyle = b,
                  Tr(m.before, p),
                  y = m.lines,
                  a &&
                    y.length &&
                    (this._drawColorBox(e, t, v, f, n),
                    (d = Math.max(c.lineHeight, s))),
                  x = 0,
                  w = y.length;
                x < w;
                ++x
              )
                p(y[x]), (d = c.lineHeight);
              Tr(m.after, p);
            }
            (h = 0), (d = c.lineHeight), Tr(this.afterBody, p), (t.y -= i);
          }
          drawFooter(t, e, n) {
            const r = this.footer,
              i = r.length;
            let o, a;
            if (i) {
              const s = Sa(n.rtl, this.x, this.width);
              for (
                t.x = Nu(this, n.footerAlign, n),
                  t.y += n.footerMarginTop,
                  e.textAlign = s.textAlign(n.footerAlign),
                  e.textBaseline = 'middle',
                  o = jo(n.footerFont),
                  e.fillStyle = n.footerColor,
                  e.font = o.string,
                  a = 0;
                a < i;
                ++a
              )
                e.fillText(r[a], s.x(t.x), t.y + o.lineHeight / 2),
                  (t.y += o.lineHeight + n.footerSpacing);
            }
          }
          drawBackground(t, e, n, r) {
            const { xAlign: i, yAlign: o } = this,
              { x: a, y: s } = t,
              { width: l, height: u } = n,
              {
                topLeft: c,
                topRight: d,
                bottomLeft: h,
                bottomRight: f,
              } = No(r.cornerRadius);
            (e.fillStyle = r.backgroundColor),
              (e.strokeStyle = r.borderColor),
              (e.lineWidth = r.borderWidth),
              e.beginPath(),
              e.moveTo(a + c, s),
              'top' === o && this.drawCaret(t, e, n, r),
              e.lineTo(a + l - d, s),
              e.quadraticCurveTo(a + l, s, a + l, s + d),
              'center' === o && 'right' === i && this.drawCaret(t, e, n, r),
              e.lineTo(a + l, s + u - f),
              e.quadraticCurveTo(a + l, s + u, a + l - f, s + u),
              'bottom' === o && this.drawCaret(t, e, n, r),
              e.lineTo(a + h, s + u),
              e.quadraticCurveTo(a, s + u, a, s + u - h),
              'center' === o && 'left' === i && this.drawCaret(t, e, n, r),
              e.lineTo(a, s + c),
              e.quadraticCurveTo(a, s, a + c, s),
              e.closePath(),
              e.fill(),
              r.borderWidth > 0 && e.stroke();
          }
          _updateAnimationTarget(t) {
            const e = this.chart,
              n = this.$animations,
              r = n && n.x,
              i = n && n.y;
            if (r || i) {
              const n = Ou[t.position].call(
                this,
                this._active,
                this._eventPosition
              );
              if (!n) return;
              const o = (this._size = Au(this, t)),
                a = Object.assign({}, n, this._size),
                s = zu(e, t, a),
                l = Iu(t, a, s, e);
              (r._to === l.x && i._to === l.y) ||
                ((this.xAlign = s.xAlign),
                (this.yAlign = s.yAlign),
                (this.width = o.width),
                (this.height = o.height),
                (this.caretX = n.x),
                (this.caretY = n.y),
                this._resolveAnimations().update(this, l));
            }
          }
          _willRender() {
            return !!this.opacity;
          }
          draw(t) {
            const e = this.options.setContext(this.getContext());
            let n = this.opacity;
            if (!n) return;
            this._updateAnimationTarget(e);
            const r = { width: this.width, height: this.height },
              i = { x: this.x, y: this.y };
            n = Math.abs(n) < 0.001 ? 0 : n;
            const o = Fo(e.padding),
              a =
                this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length;
            e.enabled &&
              a &&
              (t.save(),
              (t.globalAlpha = n),
              this.drawBackground(i, t, r, e),
              Ma(t, e.textDirection),
              (i.y += o.top),
              this.drawTitle(i, t, e),
              this.drawBody(i, t, e),
              this.drawFooter(i, t, e),
              Pa(t, e.textDirection),
              t.restore());
          }
          getActiveElements() {
            return this._active || [];
          }
          setActiveElements(t, e) {
            const n = this._active,
              r = t.map(({ datasetIndex: t, index: e }) => {
                const n = this.chart.getDatasetMeta(t);
                if (!n) throw new Error('Cannot find a dataset at index ' + t);
                return { datasetIndex: t, element: n.data[e], index: e };
              }),
              i = !Rr(n, r),
              o = this._positionChanged(r, e);
            (i || o) &&
              ((this._active = r),
              (this._eventPosition = e),
              (this._ignoreReplayEvents = !0),
              this.update(!0));
          }
          handleEvent(t, e, n = !0) {
            if (e && this._ignoreReplayEvents) return !1;
            this._ignoreReplayEvents = !1;
            const r = this.options,
              i = this._active || [],
              o = this._getActiveElements(t, i, e, n),
              a = this._positionChanged(o, t),
              s = e || !Rr(o, i) || a;
            return (
              s &&
                ((this._active = o),
                (r.enabled || r.external) &&
                  ((this._eventPosition = { x: t.x, y: t.y }),
                  this.update(!0, e))),
              s
            );
          }
          _getActiveElements(t, e, n, r) {
            const i = this.options;
            if ('mouseout' === t.type) return [];
            if (!r) return e;
            const o = this.chart.getElementsAtEventForMode(t, i.mode, i, n);
            return i.reverse && o.reverse(), o;
          }
          _positionChanged(t, e) {
            const { caretX: n, caretY: r, options: i } = this,
              o = Ou[i.position].call(this, t, e);
            return !1 !== o && (n !== o.x || r !== o.y);
          }
        }
        Vu.positioners = Ou;
        var Bu = {
            id: 'tooltip',
            _element: Vu,
            positioners: Ou,
            afterInit(t, e, n) {
              n && (t.tooltip = new Vu({ chart: t, options: n }));
            },
            beforeUpdate(t, e, n) {
              t.tooltip && t.tooltip.initialize(n);
            },
            reset(t, e, n) {
              t.tooltip && t.tooltip.initialize(n);
            },
            afterDraw(t) {
              const e = t.tooltip;
              if (e && e._willRender()) {
                const n = { tooltip: e };
                if (!1 === t.notifyPlugins('beforeTooltipDraw', n)) return;
                e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', n);
              }
            },
            afterEvent(t, e) {
              if (t.tooltip) {
                const n = e.replay;
                t.tooltip.handleEvent(e.event, n, e.inChartArea) &&
                  (e.changed = !0);
              }
            },
            defaults: {
              enabled: !0,
              external: null,
              position: 'average',
              backgroundColor: 'rgba(0,0,0,0.8)',
              titleColor: '#fff',
              titleFont: { weight: 'bold' },
              titleSpacing: 2,
              titleMarginBottom: 6,
              titleAlign: 'left',
              bodyColor: '#fff',
              bodySpacing: 2,
              bodyFont: {},
              bodyAlign: 'left',
              footerColor: '#fff',
              footerSpacing: 2,
              footerMarginTop: 6,
              footerFont: { weight: 'bold' },
              footerAlign: 'left',
              padding: 6,
              caretPadding: 2,
              caretSize: 5,
              cornerRadius: 6,
              boxHeight: (t, e) => e.bodyFont.size,
              boxWidth: (t, e) => e.bodyFont.size,
              multiKeyBackground: '#fff',
              displayColors: !0,
              boxPadding: 0,
              borderColor: 'rgba(0,0,0,0)',
              borderWidth: 0,
              animation: { duration: 400, easing: 'easeOutQuart' },
              animations: {
                numbers: {
                  type: 'number',
                  properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
                },
                opacity: { easing: 'linear', duration: 200 },
              },
              callbacks: {
                beforeTitle: _r,
                title(t) {
                  if (t.length > 0) {
                    const e = t[0],
                      n = e.chart.data.labels,
                      r = n ? n.length : 0;
                    if (this && this.options && 'dataset' === this.options.mode)
                      return e.dataset.label || '';
                    if (e.label) return e.label;
                    if (r > 0 && e.dataIndex < r) return n[e.dataIndex];
                  }
                  return '';
                },
                afterTitle: _r,
                beforeBody: _r,
                beforeLabel: _r,
                label(t) {
                  if (this && this.options && 'dataset' === this.options.mode)
                    return (
                      t.label + ': ' + t.formattedValue || t.formattedValue
                    );
                  let e = t.dataset.label || '';
                  e && (e += ': ');
                  const n = t.formattedValue;
                  return kr(n) || (e += n), e;
                },
                labelColor(t) {
                  const e = t.chart
                    .getDatasetMeta(t.datasetIndex)
                    .controller.getStyle(t.dataIndex);
                  return {
                    borderColor: e.borderColor,
                    backgroundColor: e.backgroundColor,
                    borderWidth: e.borderWidth,
                    borderDash: e.borderDash,
                    borderDashOffset: e.borderDashOffset,
                    borderRadius: 0,
                  };
                },
                labelTextColor() {
                  return this.options.bodyColor;
                },
                labelPointStyle(t) {
                  const e = t.chart
                    .getDatasetMeta(t.datasetIndex)
                    .controller.getStyle(t.dataIndex);
                  return { pointStyle: e.pointStyle, rotation: e.rotation };
                },
                afterLabel: _r,
                afterBody: _r,
                beforeFooter: _r,
                footer: _r,
                afterFooter: _r,
              },
            },
            defaultRoutes: {
              bodyFont: 'font',
              footerFont: 'font',
              titleFont: 'font',
            },
            descriptors: {
              _scriptable: (t) =>
                'filter' !== t && 'itemSort' !== t && 'external' !== t,
              _indexable: !1,
              callbacks: { _scriptable: !1, _indexable: !1 },
              animation: { _fallback: !1 },
              animations: { _fallback: 'animation' },
            },
            additionalOptionScopes: ['interaction'],
          },
          Wu = Object.freeze({
            __proto__: null,
            Decimation: ou,
            Filler: _u,
            Legend: Su,
            SubTitle: Cu,
            Title: Pu,
            Tooltip: Bu,
          });
        class Hu extends ws {
          constructor(t) {
            super(t),
              (this._startValue = void 0),
              (this._valueRange = 0),
              (this._addedLabels = []);
          }
          init(t) {
            const e = this._addedLabels;
            if (e.length) {
              const t = this.getLabels();
              for (const { index: n, label: r } of e)
                t[n] === r && t.splice(n, 1);
              this._addedLabels = [];
            }
            super.init(t);
          }
          parse(t, e) {
            if (kr(t)) return null;
            const n = this.getLabels();
            return ((t, e) => (null === t ? null : fi(Math.round(t), 0, e)))(
              (e =
                isFinite(e) && n[e] === t
                  ? e
                  : (function (t, e, n, r) {
                      const i = t.indexOf(e);
                      return -1 === i
                        ? ((t, e, n, r) => (
                            'string' == typeof e
                              ? ((n = t.push(e) - 1),
                                r.unshift({ index: n, label: e }))
                              : isNaN(e) && (n = null),
                            n
                          ))(t, e, n, r)
                        : i !== t.lastIndexOf(e)
                        ? n
                        : i;
                    })(n, t, Cr(e, t), this._addedLabels)),
              n.length - 1
            );
          }
          determineDataLimits() {
            const { minDefined: t, maxDefined: e } = this.getUserBounds();
            let { min: n, max: r } = this.getMinMax(!0);
            'ticks' === this.options.bounds &&
              (t || (n = 0), e || (r = this.getLabels().length - 1)),
              (this.min = n),
              (this.max = r);
          }
          buildTicks() {
            const t = this.min,
              e = this.max,
              n = this.options.offset,
              r = [];
            let i = this.getLabels();
            (i = 0 === t && e === i.length - 1 ? i : i.slice(t, e + 1)),
              (this._valueRange = Math.max(i.length - (n ? 0 : 1), 1)),
              (this._startValue = this.min - (n ? 0.5 : 0));
            for (let n = t; n <= e; n++) r.push({ value: n });
            return r;
          }
          getLabelForValue(t) {
            const e = this.getLabels();
            return t >= 0 && t < e.length ? e[t] : t;
          }
          configure() {
            super.configure(),
              this.isHorizontal() ||
                (this._reversePixels = !this._reversePixels);
          }
          getPixelForValue(t) {
            return (
              'number' != typeof t && (t = this.parse(t)),
              null === t
                ? NaN
                : this.getPixelForDecimal(
                    (t - this._startValue) / this._valueRange
                  )
            );
          }
          getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t].value);
          }
          getValueForPixel(t) {
            return Math.round(
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          }
          getBasePixel() {
            return this.bottom;
          }
        }
        function qu(t, e, { horizontal: n, minRotation: r }) {
          const i = oi(r),
            o = (n ? Math.sin(i) : Math.cos(i)) || 0.001,
            a = 0.75 * e * ('' + t).length;
          return Math.min(e / o, a);
        }
        (Hu.id = 'category'),
          (Hu.defaults = {
            ticks: { callback: Hu.prototype.getLabelForValue },
          });
        class $u extends ws {
          constructor(t) {
            super(t),
              (this.start = void 0),
              (this.end = void 0),
              (this._startValue = void 0),
              (this._endValue = void 0),
              (this._valueRange = 0);
          }
          parse(t, e) {
            return kr(t) ||
              (('number' == typeof t || t instanceof Number) && !isFinite(+t))
              ? null
              : +t;
          }
          handleTickRangeOptions() {
            const { beginAtZero: t } = this.options,
              { minDefined: e, maxDefined: n } = this.getUserBounds();
            let { min: r, max: i } = this;
            const o = (t) => (r = e ? r : t),
              a = (t) => (i = n ? i : t);
            if (t) {
              const t = ti(r),
                e = ti(i);
              t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0);
            }
            if (r === i) {
              let e = 1;
              (i >= Number.MAX_SAFE_INTEGER || r <= Number.MIN_SAFE_INTEGER) &&
                (e = Math.abs(0.05 * i)),
                a(i + e),
                t || o(r - e);
            }
            (this.min = r), (this.max = i);
          }
          getTickLimit() {
            const t = this.options.ticks;
            let e,
              { maxTicksLimit: n, stepSize: r } = t;
            return (
              r
                ? ((e = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1),
                  e > 1e3 &&
                    (console.warn(
                      `scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${e} ticks. Limiting to 1000.`
                    ),
                    (e = 1e3)))
                : ((e = this.computeTickLimit()), (n = n || 11)),
              n && (e = Math.min(n, e)),
              e
            );
          }
          computeTickLimit() {
            return Number.POSITIVE_INFINITY;
          }
          buildTicks() {
            const t = this.options,
              e = t.ticks;
            let n = this.getTickLimit();
            n = Math.max(2, n);
            const r = (function (t, e) {
              const n = [],
                {
                  bounds: r,
                  step: i,
                  min: o,
                  max: a,
                  precision: s,
                  count: l,
                  maxTicks: u,
                  maxDigits: c,
                  includeBounds: d,
                } = t,
                h = i || 1,
                f = u - 1,
                { min: p, max: g } = e,
                m = !kr(o),
                b = !kr(a),
                y = !kr(l),
                v = (g - p) / (c + 1);
              let x,
                _,
                w,
                k,
                S = ei((g - p) / f / h) * h;
              if (S < 1e-14 && !m && !b) return [{ value: p }, { value: g }];
              (k = Math.ceil(g / S) - Math.floor(p / S)),
                k > f && (S = ei((k * S) / f / h) * h),
                kr(s) || ((x = Math.pow(10, s)), (S = Math.ceil(S * x) / x)),
                'ticks' === r
                  ? ((_ = Math.floor(p / S) * S), (w = Math.ceil(g / S) * S))
                  : ((_ = p), (w = g)),
                m &&
                b &&
                i &&
                (function (t, e) {
                  const n = Math.round(t);
                  return n - e <= t && n + e >= t;
                })((a - o) / i, S / 1e3)
                  ? ((k = Math.round(Math.min((a - o) / S, u))),
                    (S = (a - o) / k),
                    (_ = o),
                    (w = a))
                  : y
                  ? ((_ = m ? o : _),
                    (w = b ? a : w),
                    (k = l - 1),
                    (S = (w - _) / k))
                  : ((k = (w - _) / S),
                    (k = ri(k, Math.round(k), S / 1e3)
                      ? Math.round(k)
                      : Math.ceil(k)));
              const M = Math.max(si(S), si(_));
              (x = Math.pow(10, kr(s) ? M : s)),
                (_ = Math.round(_ * x) / x),
                (w = Math.round(w * x) / x);
              let P = 0;
              for (
                m &&
                (d && _ !== o
                  ? (n.push({ value: o }),
                    _ < o && P++,
                    ri(Math.round((_ + P * S) * x) / x, o, qu(o, v, t)) && P++)
                  : _ < o && P++);
                P < k;
                ++P
              )
                n.push({ value: Math.round((_ + P * S) * x) / x });
              return (
                b && d && w !== a
                  ? n.length && ri(n[n.length - 1].value, a, qu(a, v, t))
                    ? (n[n.length - 1].value = a)
                    : n.push({ value: a })
                  : (b && w !== a) || n.push({ value: w }),
                n
              );
            })(
              {
                maxTicks: n,
                bounds: t.bounds,
                min: t.min,
                max: t.max,
                precision: e.precision,
                step: e.stepSize,
                count: e.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: e.minRotation || 0,
                includeBounds: !1 !== e.includeBounds,
              },
              this._range || this
            );
            return (
              'ticks' === t.bounds && ii(r, this, 'value'),
              t.reverse
                ? (r.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
              r
            );
          }
          configure() {
            const t = this.ticks;
            let e = this.min,
              n = this.max;
            if ((super.configure(), this.options.offset && t.length)) {
              const r = (n - e) / Math.max(t.length - 1, 1) / 2;
              (e -= r), (n += r);
            }
            (this._startValue = e),
              (this._endValue = n),
              (this._valueRange = n - e);
          }
          getLabelForValue(t) {
            return ka(t, this.chart.options.locale, this.options.ticks.format);
          }
        }
        class Uu extends $u {
          determineDataLimits() {
            const { min: t, max: e } = this.getMinMax(!0);
            (this.min = Pr(t) ? t : 0),
              (this.max = Pr(e) ? e : 1),
              this.handleTickRangeOptions();
          }
          computeTickLimit() {
            const t = this.isHorizontal(),
              e = t ? this.width : this.height,
              n = oi(this.options.ticks.minRotation),
              r = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
              i = this._resolveTickFontOptions(0);
            return Math.ceil(e / Math.min(40, i.lineHeight / r));
          }
          getPixelForValue(t) {
            return null === t
              ? NaN
              : this.getPixelForDecimal(
                  (t - this._startValue) / this._valueRange
                );
          }
          getValueForPixel(t) {
            return (
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          }
        }
        function Qu(t) {
          return 1 == t / Math.pow(10, Math.floor(Jr(t)));
        }
        (Uu.id = 'linear'),
          (Uu.defaults = { ticks: { callback: ps.formatters.numeric } });
        class Ku extends ws {
          constructor(t) {
            super(t),
              (this.start = void 0),
              (this.end = void 0),
              (this._startValue = void 0),
              (this._valueRange = 0);
          }
          parse(t, e) {
            const n = $u.prototype.parse.apply(this, [t, e]);
            if (0 !== n) return Pr(n) && n > 0 ? n : null;
            this._zero = !0;
          }
          determineDataLimits() {
            const { min: t, max: e } = this.getMinMax(!0);
            (this.min = Pr(t) ? Math.max(0, t) : null),
              (this.max = Pr(e) ? Math.max(0, e) : null),
              this.options.beginAtZero && (this._zero = !0),
              this.handleTickRangeOptions();
          }
          handleTickRangeOptions() {
            const { minDefined: t, maxDefined: e } = this.getUserBounds();
            let n = this.min,
              r = this.max;
            const i = (e) => (n = t ? n : e),
              o = (t) => (r = e ? r : t),
              a = (t, e) => Math.pow(10, Math.floor(Jr(t)) + e);
            n === r && (n <= 0 ? (i(1), o(10)) : (i(a(n, -1)), o(a(r, 1)))),
              n <= 0 && i(a(r, -1)),
              r <= 0 && o(a(n, 1)),
              this._zero &&
                this.min !== this._suggestedMin &&
                n === a(this.min, 0) &&
                i(a(n, -1)),
              (this.min = n),
              (this.max = r);
          }
          buildTicks() {
            const t = this.options,
              e = (function (t, e) {
                const n = Math.floor(Jr(e.max)),
                  r = Math.ceil(e.max / Math.pow(10, n)),
                  i = [];
                let o = Er(t.min, Math.pow(10, Math.floor(Jr(e.min)))),
                  a = Math.floor(Jr(o)),
                  s = Math.floor(o / Math.pow(10, a)),
                  l = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
                do {
                  i.push({ value: o, major: Qu(o) }),
                    ++s,
                    10 === s && ((s = 1), ++a, (l = a >= 0 ? 1 : l)),
                    (o = Math.round(s * Math.pow(10, a) * l) / l);
                } while (a < n || (a === n && s < r));
                const u = Er(t.max, o);
                return i.push({ value: u, major: Qu(o) }), i;
              })({ min: this._userMin, max: this._userMax }, this);
            return (
              'ticks' === t.bounds && ii(e, this, 'value'),
              t.reverse
                ? (e.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
              e
            );
          }
          getLabelForValue(t) {
            return void 0 === t
              ? '0'
              : ka(t, this.chart.options.locale, this.options.ticks.format);
          }
          configure() {
            const t = this.min;
            super.configure(),
              (this._startValue = Jr(t)),
              (this._valueRange = Jr(this.max) - Jr(t));
          }
          getPixelForValue(t) {
            return (
              (void 0 !== t && 0 !== t) || (t = this.min),
              null === t || isNaN(t)
                ? NaN
                : this.getPixelForDecimal(
                    t === this.min
                      ? 0
                      : (Jr(t) - this._startValue) / this._valueRange
                  )
            );
          }
          getValueForPixel(t) {
            const e = this.getDecimalForPixel(t);
            return Math.pow(10, this._startValue + e * this._valueRange);
          }
        }
        function Yu(t) {
          const e = t.ticks;
          if (e.display && t.display) {
            const t = Fo(e.backdropPadding);
            return Cr(e.font && e.font.size, mo.font.size) + t.height;
          }
          return 0;
        }
        function Xu(t, e, n, r, i) {
          return t === r || t === i
            ? { start: e - n / 2, end: e + n / 2 }
            : t < r || t > i
            ? { start: e - n, end: e }
            : { start: e, end: e + n };
        }
        function Gu(t, e, n, r, i) {
          const o = Math.abs(Math.sin(n)),
            a = Math.abs(Math.cos(n));
          let s = 0,
            l = 0;
          r.start < e.l
            ? ((s = (e.l - r.start) / o), (t.l = Math.min(t.l, e.l - s)))
            : r.end > e.r &&
              ((s = (r.end - e.r) / o), (t.r = Math.max(t.r, e.r + s))),
            i.start < e.t
              ? ((l = (e.t - i.start) / a), (t.t = Math.min(t.t, e.t - l)))
              : i.end > e.b &&
                ((l = (i.end - e.b) / a), (t.b = Math.max(t.b, e.b + l)));
        }
        function Zu(t) {
          return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right';
        }
        function Ju(t, e, n) {
          return 'right' === n ? (t -= e) : 'center' === n && (t -= e / 2), t;
        }
        function tc(t, e, n) {
          return (
            90 === n || 270 === n
              ? (t -= e / 2)
              : (n > 270 || n < 90) && (t -= e),
            t
          );
        }
        function ec(t, e, n, r) {
          const { ctx: i } = t;
          if (n) i.arc(t.xCenter, t.yCenter, e, 0, Ur);
          else {
            let n = t.getPointPosition(0, e);
            i.moveTo(n.x, n.y);
            for (let o = 1; o < r; o++)
              (n = t.getPointPosition(o, e)), i.lineTo(n.x, n.y);
          }
        }
        (Ku.id = 'logarithmic'),
          (Ku.defaults = {
            ticks: {
              callback: ps.formatters.logarithmic,
              major: { enabled: !0 },
            },
          });
        class nc extends $u {
          constructor(t) {
            super(t),
              (this.xCenter = void 0),
              (this.yCenter = void 0),
              (this.drawingArea = void 0),
              (this._pointLabels = []),
              (this._pointLabelItems = []);
          }
          setDimensions() {
            const t = (this._padding = Fo(Yu(this.options) / 2)),
              e = (this.width = this.maxWidth - t.width),
              n = (this.height = this.maxHeight - t.height);
            (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
              (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
              (this.drawingArea = Math.floor(Math.min(e, n) / 2));
          }
          determineDataLimits() {
            const { min: t, max: e } = this.getMinMax(!1);
            (this.min = Pr(t) && !isNaN(t) ? t : 0),
              (this.max = Pr(e) && !isNaN(e) ? e : 0),
              this.handleTickRangeOptions();
          }
          computeTickLimit() {
            return Math.ceil(this.drawingArea / Yu(this.options));
          }
          generateTickLabels(t) {
            $u.prototype.generateTickLabels.call(this, t),
              (this._pointLabels = this.getLabels()
                .map((t, e) => {
                  const n = Dr(this.options.pointLabels.callback, [t, e], this);
                  return n || 0 === n ? n : '';
                })
                .filter((t, e) => this.chart.getDataVisibility(e)));
          }
          fit() {
            const t = this.options;
            t.display && t.pointLabels.display
              ? (function (t) {
                  const e = {
                      l: t.left + t._padding.left,
                      r: t.right - t._padding.right,
                      t: t.top + t._padding.top,
                      b: t.bottom - t._padding.bottom,
                    },
                    n = Object.assign({}, e),
                    r = [],
                    i = [],
                    o = t._pointLabels.length,
                    a = t.options.pointLabels,
                    s = a.centerPointLabels ? $r / o : 0;
                  for (let d = 0; d < o; d++) {
                    const o = a.setContext(t.getPointLabelContext(d));
                    i[d] = o.padding;
                    const h = t.getPointPosition(d, t.drawingArea + i[d], s),
                      f = jo(o.font),
                      p =
                        ((l = t.ctx),
                        (u = f),
                        (c = Sr((c = t._pointLabels[d])) ? c : [c]),
                        { w: yo(l, u.string, c), h: c.length * u.lineHeight });
                    r[d] = p;
                    const g = di(t.getIndexAngle(d) + s),
                      m = Math.round(ai(g));
                    Gu(
                      n,
                      e,
                      g,
                      Xu(m, h.x, p.w, 0, 180),
                      Xu(m, h.y, p.h, 90, 270)
                    );
                  }
                  var l, u, c;
                  t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
                    (t._pointLabelItems = (function (t, e, n) {
                      const r = [],
                        i = t._pointLabels.length,
                        o = t.options,
                        a = Yu(o) / 2,
                        s = t.drawingArea,
                        l = o.pointLabels.centerPointLabels ? $r / i : 0;
                      for (let o = 0; o < i; o++) {
                        const i = t.getPointPosition(o, s + a + n[o], l),
                          u = Math.round(ai(di(i.angle + Xr))),
                          c = e[o],
                          d = tc(i.y, c.h, u),
                          h = Zu(u),
                          f = Ju(i.x, c.w, h);
                        r.push({
                          x: i.x,
                          y: d,
                          textAlign: h,
                          left: f,
                          top: d,
                          right: f + c.w,
                          bottom: d + c.h,
                        });
                      }
                      return r;
                    })(t, r, i));
                })(this)
              : this.setCenterPoint(0, 0, 0, 0);
          }
          setCenterPoint(t, e, n, r) {
            (this.xCenter += Math.floor((t - e) / 2)),
              (this.yCenter += Math.floor((n - r) / 2)),
              (this.drawingArea -= Math.min(
                this.drawingArea / 2,
                Math.max(t, e, n, r)
              ));
          }
          getIndexAngle(t) {
            return di(
              t * (Ur / (this._pointLabels.length || 1)) +
                oi(this.options.startAngle || 0)
            );
          }
          getDistanceFromCenterForValue(t) {
            if (kr(t)) return NaN;
            const e = this.drawingArea / (this.max - this.min);
            return this.options.reverse
              ? (this.max - t) * e
              : (t - this.min) * e;
          }
          getValueForDistanceFromCenter(t) {
            if (kr(t)) return NaN;
            const e = t / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - e : this.min + e;
          }
          getPointLabelContext(t) {
            const e = this._pointLabels || [];
            if (t >= 0 && t < e.length) {
              const n = e[t];
              return (function (t, e, n) {
                return Bo(t, { label: n, index: e, type: 'pointLabel' });
              })(this.getContext(), t, n);
            }
          }
          getPointPosition(t, e, n = 0) {
            const r = this.getIndexAngle(t) - Xr + n;
            return {
              x: Math.cos(r) * e + this.xCenter,
              y: Math.sin(r) * e + this.yCenter,
              angle: r,
            };
          }
          getPointPositionForValue(t, e) {
            return this.getPointPosition(
              t,
              this.getDistanceFromCenterForValue(e)
            );
          }
          getBasePosition(t) {
            return this.getPointPositionForValue(t || 0, this.getBaseValue());
          }
          getPointLabelPosition(t) {
            const {
              left: e,
              top: n,
              right: r,
              bottom: i,
            } = this._pointLabelItems[t];
            return { left: e, top: n, right: r, bottom: i };
          }
          drawBackground() {
            const {
              backgroundColor: t,
              grid: { circular: e },
            } = this.options;
            if (t) {
              const n = this.ctx;
              n.save(),
                n.beginPath(),
                ec(
                  this,
                  this.getDistanceFromCenterForValue(this._endValue),
                  e,
                  this._pointLabels.length
                ),
                n.closePath(),
                (n.fillStyle = t),
                n.fill(),
                n.restore();
            }
          }
          drawGrid() {
            const t = this.ctx,
              e = this.options,
              { angleLines: n, grid: r } = e,
              i = this._pointLabels.length;
            let o, a, s;
            if (
              (e.pointLabels.display &&
                (function (t, e) {
                  const {
                    ctx: n,
                    options: { pointLabels: r },
                  } = t;
                  for (let i = e - 1; i >= 0; i--) {
                    const e = r.setContext(t.getPointLabelContext(i)),
                      o = jo(e.font),
                      {
                        x: a,
                        y: s,
                        textAlign: l,
                        left: u,
                        top: c,
                        right: d,
                        bottom: h,
                      } = t._pointLabelItems[i],
                      { backdropColor: f } = e;
                    if (!kr(f)) {
                      const t = No(e.borderRadius),
                        r = Fo(e.backdropPadding);
                      n.fillStyle = f;
                      const i = u - r.left,
                        o = c - r.top,
                        a = d - u + r.width,
                        s = h - c + r.height;
                      Object.values(t).some((t) => 0 !== t)
                        ? (n.beginPath(),
                          Do(n, { x: i, y: o, w: a, h: s, radius: t }),
                          n.fill())
                        : n.fillRect(i, o, a, s);
                    }
                    Co(n, t._pointLabels[i], a, s + o.lineHeight / 2, o, {
                      color: e.color,
                      textAlign: l,
                      textBaseline: 'middle',
                    });
                  }
                })(this, i),
              r.display &&
                this.ticks.forEach((t, e) => {
                  0 !== e &&
                    ((a = this.getDistanceFromCenterForValue(t.value)),
                    (function (t, e, n, r) {
                      const i = t.ctx,
                        o = e.circular,
                        { color: a, lineWidth: s } = e;
                      (!o && !r) ||
                        !a ||
                        !s ||
                        n < 0 ||
                        (i.save(),
                        (i.strokeStyle = a),
                        (i.lineWidth = s),
                        i.setLineDash(e.borderDash),
                        (i.lineDashOffset = e.borderDashOffset),
                        i.beginPath(),
                        ec(t, n, o, r),
                        i.closePath(),
                        i.stroke(),
                        i.restore());
                    })(this, r.setContext(this.getContext(e - 1)), a, i));
                }),
              n.display)
            ) {
              for (t.save(), o = i - 1; o >= 0; o--) {
                const r = n.setContext(this.getPointLabelContext(o)),
                  { color: i, lineWidth: l } = r;
                l &&
                  i &&
                  ((t.lineWidth = l),
                  (t.strokeStyle = i),
                  t.setLineDash(r.borderDash),
                  (t.lineDashOffset = r.borderDashOffset),
                  (a = this.getDistanceFromCenterForValue(
                    e.ticks.reverse ? this.min : this.max
                  )),
                  (s = this.getPointPosition(o, a)),
                  t.beginPath(),
                  t.moveTo(this.xCenter, this.yCenter),
                  t.lineTo(s.x, s.y),
                  t.stroke());
              }
              t.restore();
            }
          }
          drawBorder() {}
          drawLabels() {
            const t = this.ctx,
              e = this.options,
              n = e.ticks;
            if (!n.display) return;
            const r = this.getIndexAngle(0);
            let i, o;
            t.save(),
              t.translate(this.xCenter, this.yCenter),
              t.rotate(r),
              (t.textAlign = 'center'),
              (t.textBaseline = 'middle'),
              this.ticks.forEach((r, a) => {
                if (0 === a && !e.reverse) return;
                const s = n.setContext(this.getContext(a)),
                  l = jo(s.font);
                if (
                  ((i = this.getDistanceFromCenterForValue(
                    this.ticks[a].value
                  )),
                  s.showLabelBackdrop)
                ) {
                  (t.font = l.string),
                    (o = t.measureText(r.label).width),
                    (t.fillStyle = s.backdropColor);
                  const e = Fo(s.backdropPadding);
                  t.fillRect(
                    -o / 2 - e.left,
                    -i - l.size / 2 - e.top,
                    o + e.width,
                    l.size + e.height
                  );
                }
                Co(t, r.label, 0, -i, l, { color: s.color });
              }),
              t.restore();
          }
          drawTitle() {}
        }
        (nc.id = 'radialLinear'),
          (nc.defaults = {
            display: !0,
            animate: !0,
            position: 'chartArea',
            angleLines: {
              display: !0,
              lineWidth: 1,
              borderDash: [],
              borderDashOffset: 0,
            },
            grid: { circular: !1 },
            startAngle: 0,
            ticks: { showLabelBackdrop: !0, callback: ps.formatters.numeric },
            pointLabels: {
              backdropColor: void 0,
              backdropPadding: 2,
              display: !0,
              font: { size: 10 },
              callback: (t) => t,
              padding: 5,
              centerPointLabels: !1,
            },
          }),
          (nc.defaultRoutes = {
            'angleLines.color': 'borderColor',
            'pointLabels.color': 'color',
            'ticks.color': 'color',
          }),
          (nc.descriptors = { angleLines: { _fallback: 'grid' } });
        const rc = {
            millisecond: { common: !0, size: 1, steps: 1e3 },
            second: { common: !0, size: 1e3, steps: 60 },
            minute: { common: !0, size: 6e4, steps: 60 },
            hour: { common: !0, size: 36e5, steps: 24 },
            day: { common: !0, size: 864e5, steps: 30 },
            week: { common: !1, size: 6048e5, steps: 4 },
            month: { common: !0, size: 2628e6, steps: 12 },
            quarter: { common: !1, size: 7884e6, steps: 4 },
            year: { common: !0, size: 3154e7 },
          },
          ic = Object.keys(rc);
        function oc(t, e) {
          return t - e;
        }
        function ac(t, e) {
          if (kr(e)) return null;
          const n = t._adapter,
            { parser: r, round: i, isoWeekday: o } = t._parseOpts;
          let a = e;
          return (
            'function' == typeof r && (a = r(a)),
            Pr(a) || (a = 'string' == typeof r ? n.parse(a, r) : n.parse(a)),
            null === a
              ? null
              : (i &&
                  (a =
                    'week' !== i || (!ni(o) && !0 !== o)
                      ? n.startOf(a, i)
                      : n.startOf(a, 'isoWeek', o)),
                +a)
          );
        }
        function sc(t, e, n, r) {
          const i = ic.length;
          for (let o = ic.indexOf(t); o < i - 1; ++o) {
            const t = rc[ic[o]],
              i = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
            if (t.common && Math.ceil((n - e) / (i * t.size)) <= r)
              return ic[o];
          }
          return ic[i - 1];
        }
        function lc(t, e, n) {
          if (n) {
            if (n.length) {
              const { lo: r, hi: i } = gi(n, e);
              t[n[r] >= e ? n[r] : n[i]] = !0;
            }
          } else t[e] = !0;
        }
        function uc(t, e, n) {
          const r = [],
            i = {},
            o = e.length;
          let a, s;
          for (a = 0; a < o; ++a)
            (s = e[a]), (i[s] = a), r.push({ value: s, major: !1 });
          return 0 !== o && n
            ? (function (t, e, n, r) {
                const i = t._adapter,
                  o = +i.startOf(e[0].value, r),
                  a = e[e.length - 1].value;
                let s, l;
                for (s = o; s <= a; s = +i.add(s, 1, r))
                  (l = n[s]), l >= 0 && (e[l].major = !0);
                return e;
              })(t, r, i, n)
            : r;
        }
        class cc extends ws {
          constructor(t) {
            super(t),
              (this._cache = { data: [], labels: [], all: [] }),
              (this._unit = 'day'),
              (this._majorUnit = void 0),
              (this._offsets = {}),
              (this._normalized = !1),
              (this._parseOpts = void 0);
          }
          init(t, e) {
            const n = t.time || (t.time = {}),
              r = (this._adapter = new Os._date(t.adapters.date));
            r.init(e),
              Nr(n.displayFormats, r.formats()),
              (this._parseOpts = {
                parser: n.parser,
                round: n.round,
                isoWeekday: n.isoWeekday,
              }),
              super.init(t),
              (this._normalized = e.normalized);
          }
          parse(t, e) {
            return void 0 === t ? null : ac(this, t);
          }
          beforeLayout() {
            super.beforeLayout(),
              (this._cache = { data: [], labels: [], all: [] });
          }
          determineDataLimits() {
            const t = this.options,
              e = this._adapter,
              n = t.time.unit || 'day';
            let {
              min: r,
              max: i,
              minDefined: o,
              maxDefined: a,
            } = this.getUserBounds();
            function s(t) {
              o || isNaN(t.min) || (r = Math.min(r, t.min)),
                a || isNaN(t.max) || (i = Math.max(i, t.max));
            }
            (o && a) ||
              (s(this._getLabelBounds()),
              ('ticks' === t.bounds && 'labels' === t.ticks.source) ||
                s(this.getMinMax(!1))),
              (r = Pr(r) && !isNaN(r) ? r : +e.startOf(Date.now(), n)),
              (i = Pr(i) && !isNaN(i) ? i : +e.endOf(Date.now(), n) + 1),
              (this.min = Math.min(r, i - 1)),
              (this.max = Math.max(r + 1, i));
          }
          _getLabelBounds() {
            const t = this.getLabelTimestamps();
            let e = Number.POSITIVE_INFINITY,
              n = Number.NEGATIVE_INFINITY;
            return (
              t.length && ((e = t[0]), (n = t[t.length - 1])),
              { min: e, max: n }
            );
          }
          buildTicks() {
            const t = this.options,
              e = t.time,
              n = t.ticks,
              r =
                'labels' === n.source
                  ? this.getLabelTimestamps()
                  : this._generate();
            'ticks' === t.bounds &&
              r.length &&
              ((this.min = this._userMin || r[0]),
              (this.max = this._userMax || r[r.length - 1]));
            const i = this.min,
              o = (function (t, e, n) {
                let r = 0,
                  i = t.length;
                for (; r < i && t[r] < e; ) r++;
                for (; i > r && t[i - 1] > n; ) i--;
                return r > 0 || i < t.length ? t.slice(r, i) : t;
              })(r, i, this.max);
            return (
              (this._unit =
                e.unit ||
                (n.autoSkip
                  ? sc(e.minUnit, this.min, this.max, this._getLabelCapacity(i))
                  : (function (t, e, n, r, i) {
                      for (let o = ic.length - 1; o >= ic.indexOf(n); o--) {
                        const n = ic[o];
                        if (rc[n].common && t._adapter.diff(i, r, n) >= e - 1)
                          return n;
                      }
                      return ic[n ? ic.indexOf(n) : 0];
                    })(this, o.length, e.minUnit, this.min, this.max))),
              (this._majorUnit =
                n.major.enabled && 'year' !== this._unit
                  ? (function (t) {
                      for (let e = ic.indexOf(t) + 1, n = ic.length; e < n; ++e)
                        if (rc[ic[e]].common) return ic[e];
                    })(this._unit)
                  : void 0),
              this.initOffsets(r),
              t.reverse && o.reverse(),
              uc(this, o, this._majorUnit)
            );
          }
          afterAutoSkip() {
            this.options.offsetAfterAutoskip &&
              this.initOffsets(this.ticks.map((t) => +t.value));
          }
          initOffsets(t) {
            let e,
              n,
              r = 0,
              i = 0;
            this.options.offset &&
              t.length &&
              ((e = this.getDecimalForValue(t[0])),
              (r =
                1 === t.length
                  ? 1 - e
                  : (this.getDecimalForValue(t[1]) - e) / 2),
              (n = this.getDecimalForValue(t[t.length - 1])),
              (i =
                1 === t.length
                  ? n
                  : (n - this.getDecimalForValue(t[t.length - 2])) / 2));
            const o = t.length < 3 ? 0.5 : 0.25;
            (r = fi(r, 0, o)),
              (i = fi(i, 0, o)),
              (this._offsets = { start: r, end: i, factor: 1 / (r + 1 + i) });
          }
          _generate() {
            const t = this._adapter,
              e = this.min,
              n = this.max,
              r = this.options,
              i = r.time,
              o = i.unit || sc(i.minUnit, e, n, this._getLabelCapacity(e)),
              a = Cr(i.stepSize, 1),
              s = 'week' === o && i.isoWeekday,
              l = ni(s) || !0 === s,
              u = {};
            let c,
              d,
              h = e;
            if (
              (l && (h = +t.startOf(h, 'isoWeek', s)),
              (h = +t.startOf(h, l ? 'day' : o)),
              t.diff(n, e, o) > 1e5 * a)
            )
              throw new Error(
                e +
                  ' and ' +
                  n +
                  ' are too far apart with stepSize of ' +
                  a +
                  ' ' +
                  o
              );
            const f = 'data' === r.ticks.source && this.getDataTimestamps();
            for (c = h, d = 0; c < n; c = +t.add(c, a, o), d++) lc(u, c, f);
            return (
              (c !== n && 'ticks' !== r.bounds && 1 !== d) || lc(u, c, f),
              Object.keys(u)
                .sort((t, e) => t - e)
                .map((t) => +t)
            );
          }
          getLabelForValue(t) {
            const e = this._adapter,
              n = this.options.time;
            return n.tooltipFormat
              ? e.format(t, n.tooltipFormat)
              : e.format(t, n.displayFormats.datetime);
          }
          _tickFormatFunction(t, e, n, r) {
            const i = this.options,
              o = i.time.displayFormats,
              a = this._unit,
              s = this._majorUnit,
              l = a && o[a],
              u = s && o[s],
              c = n[e],
              d = s && u && c && c.major,
              h = this._adapter.format(t, r || (d ? u : l)),
              f = i.ticks.callback;
            return f ? Dr(f, [h, e, n], this) : h;
          }
          generateTickLabels(t) {
            let e, n, r;
            for (e = 0, n = t.length; e < n; ++e)
              (r = t[e]), (r.label = this._tickFormatFunction(r.value, e, t));
          }
          getDecimalForValue(t) {
            return null === t ? NaN : (t - this.min) / (this.max - this.min);
          }
          getPixelForValue(t) {
            const e = this._offsets,
              n = this.getDecimalForValue(t);
            return this.getPixelForDecimal((e.start + n) * e.factor);
          }
          getValueForPixel(t) {
            const e = this._offsets,
              n = this.getDecimalForPixel(t) / e.factor - e.end;
            return this.min + n * (this.max - this.min);
          }
          _getLabelSize(t) {
            const e = this.options.ticks,
              n = this.ctx.measureText(t).width,
              r = oi(this.isHorizontal() ? e.maxRotation : e.minRotation),
              i = Math.cos(r),
              o = Math.sin(r),
              a = this._resolveTickFontOptions(0).size;
            return { w: n * i + a * o, h: n * o + a * i };
          }
          _getLabelCapacity(t) {
            const e = this.options.time,
              n = e.displayFormats,
              r = n[e.unit] || n.millisecond,
              i = this._tickFormatFunction(
                t,
                0,
                uc(this, [t], this._majorUnit),
                r
              ),
              o = this._getLabelSize(i),
              a =
                Math.floor(
                  this.isHorizontal() ? this.width / o.w : this.height / o.h
                ) - 1;
            return a > 0 ? a : 1;
          }
          getDataTimestamps() {
            let t,
              e,
              n = this._cache.data || [];
            if (n.length) return n;
            const r = this.getMatchingVisibleMetas();
            if (this._normalized && r.length)
              return (this._cache.data =
                r[0].controller.getAllParsedValues(this));
            for (t = 0, e = r.length; t < e; ++t)
              n = n.concat(r[t].controller.getAllParsedValues(this));
            return (this._cache.data = this.normalize(n));
          }
          getLabelTimestamps() {
            const t = this._cache.labels || [];
            let e, n;
            if (t.length) return t;
            const r = this.getLabels();
            for (e = 0, n = r.length; e < n; ++e) t.push(ac(this, r[e]));
            return (this._cache.labels = this._normalized
              ? t
              : this.normalize(t));
          }
          normalize(t) {
            return xi(t.sort(oc));
          }
        }
        function dc(t, e, n) {
          let r,
            i,
            o,
            a,
            s = 0,
            l = t.length - 1;
          n
            ? (e >= t[s].pos &&
                e <= t[l].pos &&
                ({ lo: s, hi: l } = mi(t, 'pos', e)),
              ({ pos: r, time: o } = t[s]),
              ({ pos: i, time: a } = t[l]))
            : (e >= t[s].time &&
                e <= t[l].time &&
                ({ lo: s, hi: l } = mi(t, 'time', e)),
              ({ time: r, pos: o } = t[s]),
              ({ time: i, pos: a } = t[l]));
          const u = i - r;
          return u ? o + ((a - o) * (e - r)) / u : o;
        }
        (cc.id = 'time'),
          (cc.defaults = {
            bounds: 'data',
            adapters: {},
            time: {
              parser: !1,
              unit: !1,
              round: !1,
              isoWeekday: !1,
              minUnit: 'millisecond',
              displayFormats: {},
            },
            ticks: { source: 'auto', major: { enabled: !1 } },
          });
        class hc extends cc {
          constructor(t) {
            super(t),
              (this._table = []),
              (this._minPos = void 0),
              (this._tableRange = void 0);
          }
          initOffsets() {
            const t = this._getTimestampsForTable(),
              e = (this._table = this.buildLookupTable(t));
            (this._minPos = dc(e, this.min)),
              (this._tableRange = dc(e, this.max) - this._minPos),
              super.initOffsets(t);
          }
          buildLookupTable(t) {
            const { min: e, max: n } = this,
              r = [],
              i = [];
            let o, a, s, l, u;
            for (o = 0, a = t.length; o < a; ++o)
              (l = t[o]), l >= e && l <= n && r.push(l);
            if (r.length < 2)
              return [
                { time: e, pos: 0 },
                { time: n, pos: 1 },
              ];
            for (o = 0, a = r.length; o < a; ++o)
              (u = r[o + 1]),
                (s = r[o - 1]),
                (l = r[o]),
                Math.round((u + s) / 2) !== l &&
                  i.push({ time: l, pos: o / (a - 1) });
            return i;
          }
          _getTimestampsForTable() {
            let t = this._cache.all || [];
            if (t.length) return t;
            const e = this.getDataTimestamps(),
              n = this.getLabelTimestamps();
            return (
              (t =
                e.length && n.length
                  ? this.normalize(e.concat(n))
                  : e.length
                  ? e
                  : n),
              (t = this._cache.all = t),
              t
            );
          }
          getDecimalForValue(t) {
            return (dc(this._table, t) - this._minPos) / this._tableRange;
          }
          getValueForPixel(t) {
            const e = this._offsets,
              n = this.getDecimalForPixel(t) / e.factor - e.end;
            return dc(this._table, n * this._tableRange + this._minPos, !0);
          }
        }
        (hc.id = 'timeseries'), (hc.defaults = cc.defaults);
        const fc = [
          Ps,
          nu,
          Wu,
          Object.freeze({
            __proto__: null,
            CategoryScale: Hu,
            LinearScale: Uu,
            LogarithmicScale: Ku,
            RadialLinearScale: nc,
            TimeScale: cc,
            TimeSeriesScale: hc,
          }),
        ];
        Al.register(...fc);
        const pc = Al,
          gc = 'label';
        function mc(t, e) {
          'function' == typeof t ? t(e) : t && (t.current = e);
        }
        function bc(t, e) {
          t.labels = e;
        }
        function yc(t, e) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gc;
          const r = [];
          t.datasets = e.map((e) => {
            const i = t.datasets.find((t) => t[n] === e[n]);
            return i && e.data && !r.includes(i)
              ? (r.push(i), Object.assign(i, e), i)
              : { ...e };
          });
        }
        function vc(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gc;
          const n = { labels: [], datasets: [] };
          return bc(n, t.labels), yc(n, t.datasets, e), n;
        }
        function xc(t, e) {
          let {
            height: n = 150,
            width: i = 300,
            redraw: o = !1,
            datasetIdKey: a,
            type: s,
            data: l,
            options: u,
            plugins: c = [],
            fallbackContent: d,
            updateMode: h,
            ...f
          } = t;
          const p = (0, r.useRef)(null),
            g = (0, r.useRef)(),
            m = () => {
              p.current &&
                ((g.current = new Al(p.current, {
                  type: s,
                  data: vc(l, a),
                  options: u && { ...u },
                  plugins: c,
                })),
                mc(e, g.current));
            },
            b = () => {
              mc(e, null),
                g.current && (g.current.destroy(), (g.current = null));
            };
          return (
            (0, r.useEffect)(() => {
              var t, e;
              !o &&
                g.current &&
                u &&
                ((t = g.current), (e = u), Object.assign(t.options, e));
            }, [o, u]),
            (0, r.useEffect)(() => {
              !o && g.current && bc(g.current.config.data, l.labels);
            }, [o, l.labels]),
            (0, r.useEffect)(() => {
              !o &&
                g.current &&
                l.datasets &&
                yc(g.current.config.data, l.datasets, a);
            }, [o, l.datasets]),
            (0, r.useEffect)(() => {
              g.current && (o ? (b(), setTimeout(m)) : g.current.update(h));
            }, [o, u, l.labels, l.datasets, h]),
            (0, r.useEffect)(() => {
              g.current && (b(), setTimeout(m));
            }, [s]),
            (0, r.useEffect)(() => (m(), () => b()), []),
            r.createElement(
              'canvas',
              Object.assign({ ref: p, role: 'img', height: n, width: i }, f),
              d
            )
          );
        }
        const _c = (0, r.forwardRef)(xc);
        function wc(t, e) {
          return (
            Al.register(e),
            (0, r.forwardRef)((e, n) =>
              r.createElement(_c, Object.assign({}, e, { ref: n, type: t }))
            )
          );
        }
        const kc = wc('line', ls);
        function Sc() {
          const t = p((t) => t);
          let e = [];
          const n = Object.values(t.statusToggle);
          for (let t = 0; t < n.length; t++)
            if (void 0 !== n[t].memoryState[0]) {
              for (let r = 0; r < n[t].memoryState.length; r++) {
                let i = new Date(
                  1e3 * n[t].memoryState[r][0]
                ).toLocaleTimeString();
                e.push(i);
              }
              break;
            }
          let i = [];
          for (let t = 0; t < n.length; t++)
            if (void 0 !== n[t].memoryState[0]) {
              let e = [];
              for (let r = 0; r < n[t].memoryState.length; r++)
                e.push(String(n[t].memoryState[r][1] / 1e6));
              let r = {
                label: n[t].name,
                data: e,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                yAxisID: 'yAxis',
              };
              i.push(r);
            }
          return r.createElement(
            'div',
            null,
            r.createElement(kc, {
              data: { labels: e, datasets: i },
              height: 300,
              width: 500,
              options: {
                plugins: { title: { display: !0, text: 'Toggled Memory' } },
                maintainAspectRatio: !1,
                scales: {
                  yAxis: { title: { display: !0, text: 'megabytes' } },
                },
              },
            })
          );
        }
        function Mc() {
          const t = p((t) => t);
          let e = [];
          const n = Object.values(t.statusToggle);
          for (let t = 0; t < n.length; t++)
            if (void 0 !== n[t].cpuState[0]) {
              for (let r = 0; r < n[t].cpuState.length; r++) {
                let i = new Date(
                  1e3 * n[t].cpuState[r][0]
                ).toLocaleTimeString();
                e.push(i);
              }
              break;
            }
          let i = [];
          for (let t = 0; t < n.length; t++)
            if (void 0 !== n[t].cpuState[0]) {
              let e = [];
              for (let r = 0; r < n[t].cpuState.length; r++)
                e.push(String(n[t].cpuState[r][1]));
              let r = {
                label: n[t].name,
                data: e,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                yAxisID: 'yAxis',
              };
              i.push(r);
            }
          return r.createElement(
            'div',
            null,
            r.createElement(kc, {
              data: { labels: e, datasets: i },
              height: 300,
              width: 500,
              options: {
                plugins: { title: { display: !0, text: 'Toggled CPU' } },
                maintainAspectRatio: !1,
                scales: {
                  yAxis: { title: { display: !0, text: 'CPU Percentage' } },
                },
              },
            })
          );
        }
        pc.register(Hu), pc.register(Hu);
        const Pc = () => {
            const { data: t, error: e, isLoading: n } = rr(),
              i = w();
            return (
              t && i(sr(t)),
              r.createElement(
                'div',
                { className: 'metrics-container' },
                r.createElement('div', null),
                e
                  ? r.createElement(
                      r.Fragment,
                      null,
                      'Oh no, there was an error'
                    )
                  : n
                  ? r.createElement(r.Fragment, null, 'Loading...')
                  : t
                  ? r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(Mc, null),
                      r.createElement('div', {
                        style: { height: '20px', width: '20px' },
                      }),
                      r.createElement(Sc, null)
                    )
                  : null
              )
            );
          },
          Ec = () =>
            r.createElement(
              r.Fragment,
              null,
              r.createElement(xr, null),
              r.createElement(
                'div',
                { className: 'containers' },
                r.createElement(yr, null),
                r.createElement(Pc, null)
              )
            );
        var Cc = n(379),
          Oc = n.n(Cc),
          Dc = n(795),
          Tc = n.n(Dc),
          Rc = n(569),
          Ac = n.n(Rc),
          Lc = n(565),
          zc = n.n(Lc),
          Ic = n(216),
          Nc = n.n(Ic),
          Fc = n(589),
          jc = n.n(Fc),
          Vc = n(28),
          Bc = {};
        (Bc.styleTagTransform = jc()),
          (Bc.setAttributes = zc()),
          (Bc.insert = Ac().bind(null, 'head')),
          (Bc.domAPI = Tc()),
          (Bc.insertStyleElement = Nc()),
          Oc()(Vc.Z, Bc),
          Vc.Z && Vc.Z.locals && Vc.Z.locals;
        var Wc = n(99),
          Hc = {};
        (Hc.styleTagTransform = jc()),
          (Hc.setAttributes = zc()),
          (Hc.insert = Ac().bind(null, 'head')),
          (Hc.domAPI = Tc()),
          (Hc.insertStyleElement = Nc()),
          Oc()(Wc.Z, Hc),
          Wc.Z && Wc.Z.locals && Wc.Z.locals,
          i.render(
            r.createElement(y, { store: mr }, r.createElement(Ec, null)),
            document.getElementById('app')
          );
      },
      99: (t, e, n) => {
        n.d(e, { Z: () => s });
        var r = n(81),
          i = n.n(r),
          o = n(645),
          a = n.n(o)()(i());
        a.push([
          t.id,
          "*{margin:0px;padding:0;background-color:#ebf5ee;font-family:'Raleway', sans-serif}h1{color:#fff;background-color:#000}.form-switch{display:inline-block;cursor:pointer;-webkit-tap-highlight-color:transparent}.form-switch i{position:relative;display:inline-block;margin-right:0.5rem;width:46px;height:26px;background-color:#e6e6e6;border-radius:23px;vertical-align:text-bottom;transition:all 0.3s linear}.form-switch i::before{content:'';position:absolute;left:0;width:42px;height:22px;background-color:#fff;border-radius:11px;transform:translate3d(2px, 2px, 0) scale3d(1, 1, 1);transition:all 0.25s linear}.form-switch i::after{content:'';position:absolute;left:0;width:22px;height:22px;background-color:#fff;border-radius:11px;box-shadow:0 2px 2px rgba(0,0,0,0.24);transform:translate3d(2px, 2px, 0);transition:all 0.2s ease-in-out}.form-switch:active i::after{width:28px;transform:translate3d(2px, 2px, 0)}.form-switch:active input:checked+i::after{transform:translate3d(16px, 2px, 0)}.form-switch input{display:none}.form-switch input:checked+i{background-color:#11c1e0}.form-switch input:checked+i::before{transform:translate3d(18px, 2px, 0) scale3d(0, 0, 0)}.form-switch input:checked+i::after{transform:translate3d(22px, 2px, 0)}.docker-container{width:30%;height:100%;display:flex;flex-direction:column;align-items:center;margin:60px 20px}.metrics-container{display:flex;align-items:center;margin:60px 20px}.container{display:flex;border:2px solid rgba(17,193,224,0.4);border-radius:15px;width:80%;justify-content:space-between;align-items:center;padding:10px;margin-top:10px}.btns{display:flex}.ea-btn{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-left:20px}.header-container{height:50px;margin-bottom:20px;border:1px solid rgba(17,193,224,0.15)}.header-component button{margin-top:20px;border-radius:5px;padding:0.8em 1.8em;border:2px solid #11c1e0;position:relative;overflow:hidden;background-color:transparent;text-align:center;text-transform:uppercase;font-size:16px;transition:0.3s;z-index:1;font-family:inherit;color:#11c1e0}.header-component button::before{content:'';width:0;height:300%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%) rotate(45deg);background:#11c1e0;transition:0.5s ease;display:block;z-index:-1}.header-component button:hover::before{width:105%}.header-component button:hover{color:#111}.header-component button:active{filter:brightness(0.8)}.containers{display:flex;height:100%}\n",
          '',
        ]);
        const s = a;
      },
      28: (t, e, n) => {
        n.d(e, { Z: () => s });
        var r = n(81),
          i = n.n(r),
          o = n(645),
          a = n.n(o)()(i());
        a.push([
          t.id,
          'h1 {\n  color: white;\n  background-color: black;\n}\n',
          '',
        ]);
        const s = a;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = '',
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += '@supports ('.concat(e[4], ') {')),
                  e[2] && (n += '@media '.concat(e[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {'
                    )),
                  (n += t(e)),
                  r && (n += '}'),
                  e[2] && (n += '}'),
                  e[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (e.i = function (t, n, r, i, o) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (a[l] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var c = [].concat(t[u]);
                (r && a[c[0]]) ||
                  (void 0 !== o &&
                    (void 0 === c[5] ||
                      (c[1] = '@layer'
                        .concat(c[5].length > 0 ? ' '.concat(c[5]) : '', ' {')
                        .concat(c[1], '}')),
                    (c[5] = o)),
                  n &&
                    (c[2]
                      ? ((c[1] = '@media '
                          .concat(c[2], ' {')
                          .concat(c[1], '}')),
                        (c[2] = n))
                      : (c[2] = n)),
                  i &&
                    (c[4]
                      ? ((c[1] = '@supports ('
                          .concat(c[4], ') {')
                          .concat(c[1], '}')),
                        (c[4] = i))
                      : (c[4] = ''.concat(i))),
                  e.push(c));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      679: (t, e, n) => {
        var r = n(296),
          i = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          s = {};
        function l(t) {
          return r.isMemo(t) ? a : s[t.$$typeof] || i;
        }
        (s[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (s[r.Memo] = a);
        var u = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          h = Object.getOwnPropertyDescriptor,
          f = Object.getPrototypeOf,
          p = Object.prototype;
        t.exports = function t(e, n, r) {
          if ('string' != typeof n) {
            if (p) {
              var i = f(n);
              i && i !== p && t(e, i, r);
            }
            var a = c(n);
            d && (a = a.concat(d(n)));
            for (var s = l(e), g = l(n), m = 0; m < a.length; ++m) {
              var b = a[m];
              if (!(o[b] || (r && r[b]) || (g && g[b]) || (s && s[b]))) {
                var y = h(n, b);
                try {
                  u(e, b, y);
                } catch (t) {}
              }
            }
          }
          return e;
        };
      },
      103: (t, e) => {
        var n = 'function' == typeof Symbol && Symbol.for,
          r = n ? Symbol.for('react.element') : 60103,
          i = n ? Symbol.for('react.portal') : 60106,
          o = n ? Symbol.for('react.fragment') : 60107,
          a = n ? Symbol.for('react.strict_mode') : 60108,
          s = n ? Symbol.for('react.profiler') : 60114,
          l = n ? Symbol.for('react.provider') : 60109,
          u = n ? Symbol.for('react.context') : 60110,
          c = n ? Symbol.for('react.async_mode') : 60111,
          d = n ? Symbol.for('react.concurrent_mode') : 60111,
          h = n ? Symbol.for('react.forward_ref') : 60112,
          f = n ? Symbol.for('react.suspense') : 60113,
          p = n ? Symbol.for('react.suspense_list') : 60120,
          g = n ? Symbol.for('react.memo') : 60115,
          m = n ? Symbol.for('react.lazy') : 60116,
          b = n ? Symbol.for('react.block') : 60121,
          y = n ? Symbol.for('react.fundamental') : 60117,
          v = n ? Symbol.for('react.responder') : 60118,
          x = n ? Symbol.for('react.scope') : 60119;
        function _(t) {
          if ('object' == typeof t && null !== t) {
            var e = t.$$typeof;
            switch (e) {
              case r:
                switch ((t = t.type)) {
                  case c:
                  case d:
                  case o:
                  case s:
                  case a:
                  case f:
                    return t;
                  default:
                    switch ((t = t && t.$$typeof)) {
                      case u:
                      case h:
                      case m:
                      case g:
                      case l:
                        return t;
                      default:
                        return e;
                    }
                }
              case i:
                return e;
            }
          }
        }
        function w(t) {
          return _(t) === d;
        }
        (e.AsyncMode = c),
          (e.ConcurrentMode = d),
          (e.ContextConsumer = u),
          (e.ContextProvider = l),
          (e.Element = r),
          (e.ForwardRef = h),
          (e.Fragment = o),
          (e.Lazy = m),
          (e.Memo = g),
          (e.Portal = i),
          (e.Profiler = s),
          (e.StrictMode = a),
          (e.Suspense = f),
          (e.isAsyncMode = function (t) {
            return w(t) || _(t) === c;
          }),
          (e.isConcurrentMode = w),
          (e.isContextConsumer = function (t) {
            return _(t) === u;
          }),
          (e.isContextProvider = function (t) {
            return _(t) === l;
          }),
          (e.isElement = function (t) {
            return 'object' == typeof t && null !== t && t.$$typeof === r;
          }),
          (e.isForwardRef = function (t) {
            return _(t) === h;
          }),
          (e.isFragment = function (t) {
            return _(t) === o;
          }),
          (e.isLazy = function (t) {
            return _(t) === m;
          }),
          (e.isMemo = function (t) {
            return _(t) === g;
          }),
          (e.isPortal = function (t) {
            return _(t) === i;
          }),
          (e.isProfiler = function (t) {
            return _(t) === s;
          }),
          (e.isStrictMode = function (t) {
            return _(t) === a;
          }),
          (e.isSuspense = function (t) {
            return _(t) === f;
          }),
          (e.isValidElementType = function (t) {
            return (
              'string' == typeof t ||
              'function' == typeof t ||
              t === o ||
              t === d ||
              t === s ||
              t === a ||
              t === f ||
              t === p ||
              ('object' == typeof t &&
                null !== t &&
                (t.$$typeof === m ||
                  t.$$typeof === g ||
                  t.$$typeof === l ||
                  t.$$typeof === u ||
                  t.$$typeof === h ||
                  t.$$typeof === y ||
                  t.$$typeof === v ||
                  t.$$typeof === x ||
                  t.$$typeof === b))
            );
          }),
          (e.typeOf = _);
      },
      296: (t, e, n) => {
        t.exports = n(103);
      },
      448: (t, e, n) => {
        var r = n(294),
          i = n(142);
        function o(t) {
          for (
            var e =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
              n = 1;
            n < arguments.length;
            n++
          )
            e += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            t +
            '; visit ' +
            e +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var a = new Set(),
          s = {};
        function l(t, e) {
          u(t, e), u(t + 'Capture', e);
        }
        function u(t, e) {
          for (s[t] = e, t = 0; t < e.length; t++) a.add(e[t]);
        }
        var c = !(
            'undefined' == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          p = {};
        function g(t, e, n, r, i, o, a) {
          (this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = t),
            (this.type = e),
            (this.sanitizeURL = o),
            (this.removeEmptyString = a);
        }
        var m = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (t) {
            m[t] = new g(t, 0, !1, t, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (t) {
            var e = t[0];
            m[e] = new g(e, 1, !1, t[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (t) {
              m[t] = new g(t, 2, !1, t.toLowerCase(), null, !1, !1);
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (t) {
            m[t] = new g(t, 2, !1, t, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (t) {
              m[t] = new g(t, 3, !1, t.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
            m[t] = new g(t, 3, !0, t, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (t) {
            m[t] = new g(t, 4, !1, t, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (t) {
            m[t] = new g(t, 6, !1, t, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (t) {
            m[t] = new g(t, 5, !1, t.toLowerCase(), null, !1, !1);
          });
        var b = /[\-:]([a-z])/g;
        function y(t) {
          return t[1].toUpperCase();
        }
        function v(t, e, n, r) {
          var i = m.hasOwnProperty(e) ? m[e] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < e.length) ||
              ('o' !== e[0] && 'O' !== e[0]) ||
              ('n' !== e[1] && 'N' !== e[1])) &&
            ((function (t, e, n, r) {
              if (
                null == e ||
                (function (t, e, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof e) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (t = t.toLowerCase().slice(0, 5)) &&
                            'aria-' !== t)
                      );
                    default:
                      return !1;
                  }
                })(t, e, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !e;
                  case 4:
                    return !1 === e;
                  case 5:
                    return isNaN(e);
                  case 6:
                    return isNaN(e) || 1 > e;
                }
              return !1;
            })(e, n, i, r) && (n = null),
            r || null === i
              ? (function (t) {
                  return (
                    !!d.call(p, t) ||
                    (!d.call(f, t) &&
                      (h.test(t) ? (p[t] = !0) : ((f[t] = !0), !1)))
                  );
                })(e) &&
                (null === n ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
              : i.mustUseProperty
              ? (t[i.propertyName] = null === n ? 3 !== i.type && '' : n)
              : ((e = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? t.removeAttribute(e)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ''
                        : '' + n),
                    r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (t) {
            var e = t.replace(b, y);
            m[e] = new g(e, 1, !1, t, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (t) {
              var e = t.replace(b, y);
              m[e] = new g(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
            var e = t.replace(b, y);
            m[e] = new g(
              e,
              1,
              !1,
              t,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (t) {
            m[t] = new g(t, 1, !1, t.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new g(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (t) {
            m[t] = new g(t, 1, !1, t.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          _ = Symbol.for('react.element'),
          w = Symbol.for('react.portal'),
          k = Symbol.for('react.fragment'),
          S = Symbol.for('react.strict_mode'),
          M = Symbol.for('react.profiler'),
          P = Symbol.for('react.provider'),
          E = Symbol.for('react.context'),
          C = Symbol.for('react.forward_ref'),
          O = Symbol.for('react.suspense'),
          D = Symbol.for('react.suspense_list'),
          T = Symbol.for('react.memo'),
          R = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var A = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var L = Symbol.iterator;
        function z(t) {
          return null === t || 'object' != typeof t
            ? null
            : 'function' == typeof (t = (L && t[L]) || t['@@iterator'])
            ? t
            : null;
        }
        var I,
          N = Object.assign;
        function F(t) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (t) {
              var e = t.stack.trim().match(/\n( *(at )?)/);
              I = (e && e[1]) || '';
            }
          return '\n' + I + t;
        }
        var j = !1;
        function V(t, e) {
          if (!t || j) return '';
          j = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (e)
              if (
                ((e = function () {
                  throw Error();
                }),
                Object.defineProperty(e.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(e, []);
                } catch (t) {
                  var r = t;
                }
                Reflect.construct(t, [], e);
              } else {
                try {
                  e.call();
                } catch (t) {
                  r = t;
                }
                t.call(e.prototype);
              }
            else {
              try {
                throw Error();
              } catch (t) {
                r = t;
              }
              t();
            }
          } catch (e) {
            if (e && r && 'string' == typeof e.stack) {
              for (
                var i = e.stack.split('\n'),
                  o = r.stack.split('\n'),
                  a = i.length - 1,
                  s = o.length - 1;
                1 <= a && 0 <= s && i[a] !== o[s];

              )
                s--;
              for (; 1 <= a && 0 <= s; a--, s--)
                if (i[a] !== o[s]) {
                  if (1 !== a || 1 !== s)
                    do {
                      if ((a--, 0 > --s || i[a] !== o[s])) {
                        var l = '\n' + i[a].replace(' at new ', ' at ');
                        return (
                          t.displayName &&
                            l.includes('<anonymous>') &&
                            (l = l.replace('<anonymous>', t.displayName)),
                          l
                        );
                      }
                    } while (1 <= a && 0 <= s);
                  break;
                }
            }
          } finally {
            (j = !1), (Error.prepareStackTrace = n);
          }
          return (t = t ? t.displayName || t.name : '') ? F(t) : '';
        }
        function B(t) {
          switch (t.tag) {
            case 5:
              return F(t.type);
            case 16:
              return F('Lazy');
            case 13:
              return F('Suspense');
            case 19:
              return F('SuspenseList');
            case 0:
            case 2:
            case 15:
              return V(t.type, !1);
            case 11:
              return V(t.type.render, !1);
            case 1:
              return V(t.type, !0);
            default:
              return '';
          }
        }
        function W(t) {
          if (null == t) return null;
          if ('function' == typeof t) return t.displayName || t.name || null;
          if ('string' == typeof t) return t;
          switch (t) {
            case k:
              return 'Fragment';
            case w:
              return 'Portal';
            case M:
              return 'Profiler';
            case S:
              return 'StrictMode';
            case O:
              return 'Suspense';
            case D:
              return 'SuspenseList';
          }
          if ('object' == typeof t)
            switch (t.$$typeof) {
              case E:
                return (t.displayName || 'Context') + '.Consumer';
              case P:
                return (t._context.displayName || 'Context') + '.Provider';
              case C:
                var e = t.render;
                return (
                  (t = t.displayName) ||
                    (t =
                      '' !== (t = e.displayName || e.name || '')
                        ? 'ForwardRef(' + t + ')'
                        : 'ForwardRef'),
                  t
                );
              case T:
                return null !== (e = t.displayName || null)
                  ? e
                  : W(t.type) || 'Memo';
              case R:
                (e = t._payload), (t = t._init);
                try {
                  return W(t(e));
                } catch (t) {}
            }
          return null;
        }
        function H(t) {
          var e = t.type;
          switch (t.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (e.displayName || 'Context') + '.Consumer';
            case 10:
              return (e._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (t = (t = e.render).displayName || t.name || ''),
                e.displayName ||
                  ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return e;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return W(e);
            case 8:
              return e === S ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' == typeof e)
                return e.displayName || e.name || null;
              if ('string' == typeof e) return e;
          }
          return null;
        }
        function q(t) {
          switch (typeof t) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return t;
            default:
              return '';
          }
        }
        function $(t) {
          var e = t.type;
          return (
            (t = t.nodeName) &&
            'input' === t.toLowerCase() &&
            ('checkbox' === e || 'radio' === e)
          );
        }
        function U(t) {
          t._valueTracker ||
            (t._valueTracker = (function (t) {
              var e = $(t) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
                r = '' + t[e];
              if (
                !t.hasOwnProperty(e) &&
                void 0 !== n &&
                'function' == typeof n.get &&
                'function' == typeof n.set
              ) {
                var i = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (t) {
                      (r = '' + t), o.call(this, t);
                    },
                  }),
                  Object.defineProperty(t, e, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (t) {
                      r = '' + t;
                    },
                    stopTracking: function () {
                      (t._valueTracker = null), delete t[e];
                    },
                  }
                );
              }
            })(t));
        }
        function Q(t) {
          if (!t) return !1;
          var e = t._valueTracker;
          if (!e) return !0;
          var n = e.getValue(),
            r = '';
          return (
            t && (r = $(t) ? (t.checked ? 'true' : 'false') : t.value),
            (t = r) !== n && (e.setValue(t), !0)
          );
        }
        function K(t) {
          if (
            void 0 ===
            (t = t || ('undefined' != typeof document ? document : void 0))
          )
            return null;
          try {
            return t.activeElement || t.body;
          } catch (e) {
            return t.body;
          }
        }
        function Y(t, e) {
          var n = e.checked;
          return N({}, e, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : t._wrapperState.initialChecked,
          });
        }
        function X(t, e) {
          var n = null == e.defaultValue ? '' : e.defaultValue,
            r = null != e.checked ? e.checked : e.defaultChecked;
          (n = q(null != e.value ? e.value : n)),
            (t._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === e.type || 'radio' === e.type
                  ? null != e.checked
                  : null != e.value,
            });
        }
        function G(t, e) {
          null != (e = e.checked) && v(t, 'checked', e, !1);
        }
        function Z(t, e) {
          G(t, e);
          var n = q(e.value),
            r = e.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === t.value) || t.value != n) &&
                (t.value = '' + n)
              : t.value !== '' + n && (t.value = '' + n);
          else if ('submit' === r || 'reset' === r)
            return void t.removeAttribute('value');
          e.hasOwnProperty('value')
            ? tt(t, e.type, n)
            : e.hasOwnProperty('defaultValue') &&
              tt(t, e.type, q(e.defaultValue)),
            null == e.checked &&
              null != e.defaultChecked &&
              (t.defaultChecked = !!e.defaultChecked);
        }
        function J(t, e, n) {
          if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
            var r = e.type;
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== e.value && null !== e.value)
              )
            )
              return;
            (e = '' + t._wrapperState.initialValue),
              n || e === t.value || (t.value = e),
              (t.defaultValue = e);
          }
          '' !== (n = t.name) && (t.name = ''),
            (t.defaultChecked = !!t._wrapperState.initialChecked),
            '' !== n && (t.name = n);
        }
        function tt(t, e, n) {
          ('number' === e && K(t.ownerDocument) === t) ||
            (null == n
              ? (t.defaultValue = '' + t._wrapperState.initialValue)
              : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
        }
        var et = Array.isArray;
        function nt(t, e, n, r) {
          if (((t = t.options), e)) {
            e = {};
            for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0;
            for (n = 0; n < t.length; n++)
              (i = e.hasOwnProperty('$' + t[n].value)),
                t[n].selected !== i && (t[n].selected = i),
                i && r && (t[n].defaultSelected = !0);
          } else {
            for (n = '' + q(n), e = null, i = 0; i < t.length; i++) {
              if (t[i].value === n)
                return (
                  (t[i].selected = !0), void (r && (t[i].defaultSelected = !0))
                );
              null !== e || t[i].disabled || (e = t[i]);
            }
            null !== e && (e.selected = !0);
          }
        }
        function rt(t, e) {
          if (null != e.dangerouslySetInnerHTML) throw Error(o(91));
          return N({}, e, {
            value: void 0,
            defaultValue: void 0,
            children: '' + t._wrapperState.initialValue,
          });
        }
        function it(t, e) {
          var n = e.value;
          if (null == n) {
            if (((n = e.children), (e = e.defaultValue), null != n)) {
              if (null != e) throw Error(o(92));
              if (et(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              e = n;
            }
            null == e && (e = ''), (n = e);
          }
          t._wrapperState = { initialValue: q(n) };
        }
        function ot(t, e) {
          var n = q(e.value),
            r = q(e.defaultValue);
          null != n &&
            ((n = '' + n) !== t.value && (t.value = n),
            null == e.defaultValue &&
              t.defaultValue !== n &&
              (t.defaultValue = n)),
            null != r && (t.defaultValue = '' + r);
        }
        function at(t) {
          var e = t.textContent;
          e === t._wrapperState.initialValue &&
            '' !== e &&
            null !== e &&
            (t.value = e);
        }
        function st(t) {
          switch (t) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function lt(t, e) {
          return null == t || 'http://www.w3.org/1999/xhtml' === t
            ? st(e)
            : 'http://www.w3.org/2000/svg' === t && 'foreignObject' === e
            ? 'http://www.w3.org/1999/xhtml'
            : t;
        }
        var ut,
          ct,
          dt =
            ((ct = function (t, e) {
              if (
                'http://www.w3.org/2000/svg' !== t.namespaceURI ||
                'innerHTML' in t
              )
                t.innerHTML = e;
              else {
                for (
                  (ut = ut || document.createElement('div')).innerHTML =
                    '<svg>' + e.valueOf().toString() + '</svg>',
                    e = ut.firstChild;
                  t.firstChild;

                )
                  t.removeChild(t.firstChild);
                for (; e.firstChild; ) t.appendChild(e.firstChild);
              }
            }),
            'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (t, e, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ct(t, e);
                  });
                }
              : ct);
        function ht(t, e) {
          if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = e);
          }
          t.textContent = e;
        }
        var ft = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pt = ['Webkit', 'ms', 'Moz', 'O'];
        function gt(t, e, n) {
          return null == e || 'boolean' == typeof e || '' === e
            ? ''
            : n ||
              'number' != typeof e ||
              0 === e ||
              (ft.hasOwnProperty(t) && ft[t])
            ? ('' + e).trim()
            : e + 'px';
        }
        function mt(t, e) {
          for (var n in ((t = t.style), e))
            if (e.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                i = gt(n, e[n], r);
              'float' === n && (n = 'cssFloat'),
                r ? t.setProperty(n, i) : (t[n] = i);
            }
        }
        Object.keys(ft).forEach(function (t) {
          pt.forEach(function (e) {
            (e = e + t.charAt(0).toUpperCase() + t.substring(1)),
              (ft[e] = ft[t]);
          });
        });
        var bt = N(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function yt(t, e) {
          if (e) {
            if (
              bt[t] &&
              (null != e.children || null != e.dangerouslySetInnerHTML)
            )
              throw Error(o(137, t));
            if (null != e.dangerouslySetInnerHTML) {
              if (null != e.children) throw Error(o(60));
              if (
                'object' != typeof e.dangerouslySetInnerHTML ||
                !('__html' in e.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != e.style && 'object' != typeof e.style)
              throw Error(o(62));
          }
        }
        function vt(t, e) {
          if (-1 === t.indexOf('-')) return 'string' == typeof e.is;
          switch (t) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var xt = null;
        function _t(t) {
          return (
            (t = t.target || t.srcElement || window).correspondingUseElement &&
              (t = t.correspondingUseElement),
            3 === t.nodeType ? t.parentNode : t
          );
        }
        var wt = null,
          kt = null,
          St = null;
        function Mt(t) {
          if ((t = mi(t))) {
            if ('function' != typeof wt) throw Error(o(280));
            var e = t.stateNode;
            e && ((e = yi(e)), wt(t.stateNode, t.type, e));
          }
        }
        function Pt(t) {
          kt ? (St ? St.push(t) : (St = [t])) : (kt = t);
        }
        function Et() {
          if (kt) {
            var t = kt,
              e = St;
            if (((St = kt = null), Mt(t), e))
              for (t = 0; t < e.length; t++) Mt(e[t]);
          }
        }
        function Ct(t, e) {
          return t(e);
        }
        function Ot() {}
        var Dt = !1;
        function Tt(t, e, n) {
          if (Dt) return t(e, n);
          Dt = !0;
          try {
            return Ct(t, e, n);
          } finally {
            (Dt = !1), (null !== kt || null !== St) && (Ot(), Et());
          }
        }
        function Rt(t, e) {
          var n = t.stateNode;
          if (null === n) return null;
          var r = yi(n);
          if (null === r) return null;
          n = r[e];
          t: switch (e) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (t = t.type) ||
                  'input' === t ||
                  'select' === t ||
                  'textarea' === t
                )),
                (t = !r);
              break t;
            default:
              t = !1;
          }
          if (t) return null;
          if (n && 'function' != typeof n) throw Error(o(231, e, typeof n));
          return n;
        }
        var At = !1;
        if (c)
          try {
            var Lt = {};
            Object.defineProperty(Lt, 'passive', {
              get: function () {
                At = !0;
              },
            }),
              window.addEventListener('test', Lt, Lt),
              window.removeEventListener('test', Lt, Lt);
          } catch (ct) {
            At = !1;
          }
        function zt(t, e, n, r, i, o, a, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            e.apply(n, u);
          } catch (t) {
            this.onError(t);
          }
        }
        var It = !1,
          Nt = null,
          Ft = !1,
          jt = null,
          Vt = {
            onError: function (t) {
              (It = !0), (Nt = t);
            },
          };
        function Bt(t, e, n, r, i, o, a, s, l) {
          (It = !1), (Nt = null), zt.apply(Vt, arguments);
        }
        function Wt(t) {
          var e = t,
            n = t;
          if (t.alternate) for (; e.return; ) e = e.return;
          else {
            t = e;
            do {
              0 != (4098 & (e = t).flags) && (n = e.return), (t = e.return);
            } while (t);
          }
          return 3 === e.tag ? n : null;
        }
        function Ht(t) {
          if (13 === t.tag) {
            var e = t.memoizedState;
            if (
              (null === e &&
                null !== (t = t.alternate) &&
                (e = t.memoizedState),
              null !== e)
            )
              return e.dehydrated;
          }
          return null;
        }
        function qt(t) {
          if (Wt(t) !== t) throw Error(o(188));
        }
        function $t(t) {
          return null !==
            (t = (function (t) {
              var e = t.alternate;
              if (!e) {
                if (null === (e = Wt(t))) throw Error(o(188));
                return e !== t ? null : t;
              }
              for (var n = t, r = e; ; ) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === a.child) {
                  for (a = i.child; a; ) {
                    if (a === n) return qt(i), t;
                    if (a === r) return qt(i), e;
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = i), (r = a);
                else {
                  for (var s = !1, l = i.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = i), (r = a);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = i), (n = a);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = a.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = a), (r = i);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = a), (n = i);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? t : e;
            })(t))
            ? Ut(t)
            : null;
        }
        function Ut(t) {
          if (5 === t.tag || 6 === t.tag) return t;
          for (t = t.child; null !== t; ) {
            var e = Ut(t);
            if (null !== e) return e;
            t = t.sibling;
          }
          return null;
        }
        var Qt = i.unstable_scheduleCallback,
          Kt = i.unstable_cancelCallback,
          Yt = i.unstable_shouldYield,
          Xt = i.unstable_requestPaint,
          Gt = i.unstable_now,
          Zt = i.unstable_getCurrentPriorityLevel,
          Jt = i.unstable_ImmediatePriority,
          te = i.unstable_UserBlockingPriority,
          ee = i.unstable_NormalPriority,
          ne = i.unstable_LowPriority,
          re = i.unstable_IdlePriority,
          ie = null,
          oe = null,
          ae = Math.clz32
            ? Math.clz32
            : function (t) {
                return 0 == (t >>>= 0) ? 32 : (31 - ((se(t) / le) | 0)) | 0;
              },
          se = Math.log,
          le = Math.LN2,
          ue = 64,
          ce = 4194304;
        function de(t) {
          switch (t & -t) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & t;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & t;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return t;
          }
        }
        function he(t, e) {
          var n = t.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = t.suspendedLanes,
            o = t.pingedLanes,
            a = 268435455 & n;
          if (0 !== a) {
            var s = a & ~i;
            0 !== s ? (r = de(s)) : 0 != (o &= a) && (r = de(o));
          } else 0 != (a = n & ~i) ? (r = de(a)) : 0 !== o && (r = de(o));
          if (0 === r) return 0;
          if (
            0 !== e &&
            e !== r &&
            0 == (e & i) &&
            ((i = r & -r) >= (o = e & -e) || (16 === i && 0 != (4194240 & o)))
          )
            return e;
          if ((0 != (4 & r) && (r |= 16 & n), 0 !== (e = t.entangledLanes)))
            for (t = t.entanglements, e &= r; 0 < e; )
              (i = 1 << (n = 31 - ae(e))), (r |= t[n]), (e &= ~i);
          return r;
        }
        function fe(t, e) {
          switch (t) {
            case 1:
            case 2:
            case 4:
              return e + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return e + 5e3;
            default:
              return -1;
          }
        }
        function pe(t) {
          return 0 != (t = -1073741825 & t.pendingLanes)
            ? t
            : 1073741824 & t
            ? 1073741824
            : 0;
        }
        function ge(t) {
          for (var e = [], n = 0; 31 > n; n++) e.push(t);
          return e;
        }
        function me(t, e, n) {
          (t.pendingLanes |= e),
            536870912 !== e && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
            ((t = t.eventTimes)[(e = 31 - ae(e))] = n);
        }
        function be(t, e) {
          var n = (t.entangledLanes |= e);
          for (t = t.entanglements; n; ) {
            var r = 31 - ae(n),
              i = 1 << r;
            (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
          }
        }
        var ye = 0;
        function ve(t) {
          return 1 < (t &= -t)
            ? 4 < t
              ? 0 != (268435455 & t)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xe,
          _e,
          we,
          ke,
          Se,
          Me = !1,
          Pe = [],
          Ee = null,
          Ce = null,
          Oe = null,
          De = new Map(),
          Te = new Map(),
          Re = [],
          Ae =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function Le(t, e) {
          switch (t) {
            case 'focusin':
            case 'focusout':
              Ee = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Ce = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Oe = null;
              break;
            case 'pointerover':
            case 'pointerout':
              De.delete(e.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Te.delete(e.pointerId);
          }
        }
        function ze(t, e, n, r, i, o) {
          return null === t || t.nativeEvent !== o
            ? ((t = {
                blockedOn: e,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [i],
              }),
              null !== e && null !== (e = mi(e)) && _e(e),
              t)
            : ((t.eventSystemFlags |= r),
              (e = t.targetContainers),
              null !== i && -1 === e.indexOf(i) && e.push(i),
              t);
        }
        function Ie(t) {
          var e = gi(t.target);
          if (null !== e) {
            var n = Wt(e);
            if (null !== n)
              if (13 === (e = n.tag)) {
                if (null !== (e = Ht(n)))
                  return (
                    (t.blockedOn = e),
                    void Se(t.priority, function () {
                      we(n);
                    })
                  );
              } else if (
                3 === e &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (t.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          t.blockedOn = null;
        }
        function Ne(t) {
          if (null !== t.blockedOn) return !1;
          for (var e = t.targetContainers; 0 < e.length; ) {
            var n = Qe(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
            if (null !== n)
              return null !== (e = mi(n)) && _e(e), (t.blockedOn = n), !1;
            var r = new (n = t.nativeEvent).constructor(n.type, n);
            (xt = r), n.target.dispatchEvent(r), (xt = null), e.shift();
          }
          return !0;
        }
        function Fe(t, e, n) {
          Ne(t) && n.delete(e);
        }
        function je() {
          (Me = !1),
            null !== Ee && Ne(Ee) && (Ee = null),
            null !== Ce && Ne(Ce) && (Ce = null),
            null !== Oe && Ne(Oe) && (Oe = null),
            De.forEach(Fe),
            Te.forEach(Fe);
        }
        function Ve(t, e) {
          t.blockedOn === e &&
            ((t.blockedOn = null),
            Me ||
              ((Me = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, je)));
        }
        function Be(t) {
          function e(e) {
            return Ve(e, t);
          }
          if (0 < Pe.length) {
            Ve(Pe[0], t);
            for (var n = 1; n < Pe.length; n++) {
              var r = Pe[n];
              r.blockedOn === t && (r.blockedOn = null);
            }
          }
          for (
            null !== Ee && Ve(Ee, t),
              null !== Ce && Ve(Ce, t),
              null !== Oe && Ve(Oe, t),
              De.forEach(e),
              Te.forEach(e),
              n = 0;
            n < Re.length;
            n++
          )
            (r = Re[n]).blockedOn === t && (r.blockedOn = null);
          for (; 0 < Re.length && null === (n = Re[0]).blockedOn; )
            Ie(n), null === n.blockedOn && Re.shift();
        }
        var We = x.ReactCurrentBatchConfig;
        function He(t, e, n, r) {
          var i = ye,
            o = We.transition;
          We.transition = null;
          try {
            (ye = 1), $e(t, e, n, r);
          } finally {
            (ye = i), (We.transition = o);
          }
        }
        function qe(t, e, n, r) {
          var i = ye,
            o = We.transition;
          We.transition = null;
          try {
            (ye = 4), $e(t, e, n, r);
          } finally {
            (ye = i), (We.transition = o);
          }
        }
        function $e(t, e, n, r) {
          var i = Qe(t, e, n, r);
          if (null === i) Wr(t, e, r, Ue, n), Le(t, r);
          else if (
            (function (t, e, n, r, i) {
              switch (e) {
                case 'focusin':
                  return (Ee = ze(Ee, t, e, n, r, i)), !0;
                case 'dragenter':
                  return (Ce = ze(Ce, t, e, n, r, i)), !0;
                case 'mouseover':
                  return (Oe = ze(Oe, t, e, n, r, i)), !0;
                case 'pointerover':
                  var o = i.pointerId;
                  return De.set(o, ze(De.get(o) || null, t, e, n, r, i)), !0;
                case 'gotpointercapture':
                  return (
                    (o = i.pointerId),
                    Te.set(o, ze(Te.get(o) || null, t, e, n, r, i)),
                    !0
                  );
              }
              return !1;
            })(i, t, e, n, r)
          )
            r.stopPropagation();
          else if ((Le(t, r), 4 & e && -1 < Ae.indexOf(t))) {
            for (; null !== i; ) {
              var o = mi(i);
              if (
                (null !== o && xe(o),
                null === (o = Qe(t, e, n, r)) && Wr(t, e, r, Ue, n),
                o === i)
              )
                break;
              i = o;
            }
            null !== i && r.stopPropagation();
          } else Wr(t, e, r, null, n);
        }
        var Ue = null;
        function Qe(t, e, n, r) {
          if (((Ue = null), null !== (t = gi((t = _t(r))))))
            if (null === (e = Wt(t))) t = null;
            else if (13 === (n = e.tag)) {
              if (null !== (t = Ht(e))) return t;
              t = null;
            } else if (3 === n) {
              if (e.stateNode.current.memoizedState.isDehydrated)
                return 3 === e.tag ? e.stateNode.containerInfo : null;
              t = null;
            } else e !== t && (t = null);
          return (Ue = t), null;
        }
        function Ke(t) {
          switch (t) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Zt()) {
                case Jt:
                  return 1;
                case te:
                  return 4;
                case ee:
                case ne:
                  return 16;
                case re:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Ye = null,
          Xe = null,
          Ge = null;
        function Ze() {
          if (Ge) return Ge;
          var t,
            e,
            n = Xe,
            r = n.length,
            i = 'value' in Ye ? Ye.value : Ye.textContent,
            o = i.length;
          for (t = 0; t < r && n[t] === i[t]; t++);
          var a = r - t;
          for (e = 1; e <= a && n[r - e] === i[o - e]; e++);
          return (Ge = i.slice(t, 1 < e ? 1 - e : void 0));
        }
        function Je(t) {
          var e = t.keyCode;
          return (
            'charCode' in t
              ? 0 === (t = t.charCode) && 13 === e && (t = 13)
              : (t = e),
            10 === t && (t = 13),
            32 <= t || 13 === t ? t : 0
          );
        }
        function tn() {
          return !0;
        }
        function en() {
          return !1;
        }
        function nn(t) {
          function e(e, n, r, i, o) {
            for (var a in ((this._reactName = e),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null),
            t))
              t.hasOwnProperty(a) && ((e = t[a]), (this[a] = e ? e(i) : i[a]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? tn
                : en),
              (this.isPropagationStopped = en),
              this
            );
          }
          return (
            N(e.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t &&
                  (t.preventDefault
                    ? t.preventDefault()
                    : 'unknown' != typeof t.returnValue && (t.returnValue = !1),
                  (this.isDefaultPrevented = tn));
              },
              stopPropagation: function () {
                var t = this.nativeEvent;
                t &&
                  (t.stopPropagation
                    ? t.stopPropagation()
                    : 'unknown' != typeof t.cancelBubble &&
                      (t.cancelBubble = !0),
                  (this.isPropagationStopped = tn));
              },
              persist: function () {},
              isPersistent: tn,
            }),
            e
          );
        }
        var rn,
          on,
          an,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (t) {
              return t.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ln = nn(sn),
          un = N({}, sn, { view: 0, detail: 0 }),
          cn = nn(un),
          dn = N({}, un, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: kn,
            button: 0,
            buttons: 0,
            relatedTarget: function (t) {
              return void 0 === t.relatedTarget
                ? t.fromElement === t.srcElement
                  ? t.toElement
                  : t.fromElement
                : t.relatedTarget;
            },
            movementX: function (t) {
              return 'movementX' in t
                ? t.movementX
                : (t !== an &&
                    (an && 'mousemove' === t.type
                      ? ((rn = t.screenX - an.screenX),
                        (on = t.screenY - an.screenY))
                      : (on = rn = 0),
                    (an = t)),
                  rn);
            },
            movementY: function (t) {
              return 'movementY' in t ? t.movementY : on;
            },
          }),
          hn = nn(dn),
          fn = nn(N({}, dn, { dataTransfer: 0 })),
          pn = nn(N({}, un, { relatedTarget: 0 })),
          gn = nn(
            N({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          mn = N({}, sn, {
            clipboardData: function (t) {
              return 'clipboardData' in t
                ? t.clipboardData
                : window.clipboardData;
            },
          }),
          bn = nn(mn),
          yn = nn(N({}, sn, { data: 0 })),
          vn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          xn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          _n = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function wn(t) {
          var e = this.nativeEvent;
          return e.getModifierState
            ? e.getModifierState(t)
            : !!(t = _n[t]) && !!e[t];
        }
        function kn() {
          return wn;
        }
        var Sn = N({}, un, {
            key: function (t) {
              if (t.key) {
                var e = vn[t.key] || t.key;
                if ('Unidentified' !== e) return e;
              }
              return 'keypress' === t.type
                ? 13 === (t = Je(t))
                  ? 'Enter'
                  : String.fromCharCode(t)
                : 'keydown' === t.type || 'keyup' === t.type
                ? xn[t.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: kn,
            charCode: function (t) {
              return 'keypress' === t.type ? Je(t) : 0;
            },
            keyCode: function (t) {
              return 'keydown' === t.type || 'keyup' === t.type ? t.keyCode : 0;
            },
            which: function (t) {
              return 'keypress' === t.type
                ? Je(t)
                : 'keydown' === t.type || 'keyup' === t.type
                ? t.keyCode
                : 0;
            },
          }),
          Mn = nn(Sn),
          Pn = nn(
            N({}, dn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          En = nn(
            N({}, un, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: kn,
            })
          ),
          Cn = nn(
            N({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = N({}, dn, {
            deltaX: function (t) {
              return 'deltaX' in t
                ? t.deltaX
                : 'wheelDeltaX' in t
                ? -t.wheelDeltaX
                : 0;
            },
            deltaY: function (t) {
              return 'deltaY' in t
                ? t.deltaY
                : 'wheelDeltaY' in t
                ? -t.wheelDeltaY
                : 'wheelDelta' in t
                ? -t.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Dn = nn(On),
          Tn = [9, 13, 27, 32],
          Rn = c && 'CompositionEvent' in window,
          An = null;
        c && 'documentMode' in document && (An = document.documentMode);
        var Ln = c && 'TextEvent' in window && !An,
          zn = c && (!Rn || (An && 8 < An && 11 >= An)),
          In = String.fromCharCode(32),
          Nn = !1;
        function Fn(t, e) {
          switch (t) {
            case 'keyup':
              return -1 !== Tn.indexOf(e.keyCode);
            case 'keydown':
              return 229 !== e.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function jn(t) {
          return 'object' == typeof (t = t.detail) && 'data' in t
            ? t.data
            : null;
        }
        var Vn = !1,
          Bn = {
            color: !0,
            date: !0,
            datetime: !0,
            'datetime-local': !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function Wn(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return 'input' === e ? !!Bn[t.type] : 'textarea' === e;
        }
        function Hn(t, e, n, r) {
          Pt(r),
            0 < (e = qr(e, 'onChange')).length &&
              ((n = new ln('onChange', 'change', null, n, r)),
              t.push({ event: n, listeners: e }));
        }
        var qn = null,
          $n = null;
        function Un(t) {
          Ir(t, 0);
        }
        function Qn(t) {
          if (Q(bi(t))) return t;
        }
        function Kn(t, e) {
          if ('change' === t) return e;
        }
        var Yn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Gn = 'oninput' in document;
            if (!Gn) {
              var Zn = document.createElement('div');
              Zn.setAttribute('oninput', 'return;'),
                (Gn = 'function' == typeof Zn.oninput);
            }
            Xn = Gn;
          } else Xn = !1;
          Yn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function Jn() {
          qn && (qn.detachEvent('onpropertychange', tr), ($n = qn = null));
        }
        function tr(t) {
          if ('value' === t.propertyName && Qn($n)) {
            var e = [];
            Hn(e, $n, t, _t(t)), Tt(Un, e);
          }
        }
        function er(t, e, n) {
          'focusin' === t
            ? (Jn(), ($n = n), (qn = e).attachEvent('onpropertychange', tr))
            : 'focusout' === t && Jn();
        }
        function nr(t) {
          if ('selectionchange' === t || 'keyup' === t || 'keydown' === t)
            return Qn($n);
        }
        function rr(t, e) {
          if ('click' === t) return Qn(e);
        }
        function ir(t, e) {
          if ('input' === t || 'change' === t) return Qn(e);
        }
        var or =
          'function' == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              };
        function ar(t, e) {
          if (or(t, e)) return !0;
          if (
            'object' != typeof t ||
            null === t ||
            'object' != typeof e ||
            null === e
          )
            return !1;
          var n = Object.keys(t),
            r = Object.keys(e);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!d.call(e, i) || !or(t[i], e[i])) return !1;
          }
          return !0;
        }
        function sr(t) {
          for (; t && t.firstChild; ) t = t.firstChild;
          return t;
        }
        function lr(t, e) {
          var n,
            r = sr(t);
          for (t = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = t + r.textContent.length), t <= e && n >= e))
                return { node: r, offset: e - t };
              t = n;
            }
            t: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break t;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function ur(t, e) {
          return (
            !(!t || !e) &&
            (t === e ||
              ((!t || 3 !== t.nodeType) &&
                (e && 3 === e.nodeType
                  ? ur(t, e.parentNode)
                  : 'contains' in t
                  ? t.contains(e)
                  : !!t.compareDocumentPosition &&
                    !!(16 & t.compareDocumentPosition(e)))))
          );
        }
        function cr() {
          for (var t = window, e = K(); e instanceof t.HTMLIFrameElement; ) {
            try {
              var n = 'string' == typeof e.contentWindow.location.href;
            } catch (t) {
              n = !1;
            }
            if (!n) break;
            e = K((t = e.contentWindow).document);
          }
          return e;
        }
        function dr(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return (
            e &&
            (('input' === e &&
              ('text' === t.type ||
                'search' === t.type ||
                'tel' === t.type ||
                'url' === t.type ||
                'password' === t.type)) ||
              'textarea' === e ||
              'true' === t.contentEditable)
          );
        }
        function hr(t) {
          var e = cr(),
            n = t.focusedElem,
            r = t.selectionRange;
          if (
            e !== n &&
            n &&
            n.ownerDocument &&
            ur(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && dr(n))
              if (
                ((e = r.start),
                void 0 === (t = r.end) && (t = e),
                'selectionStart' in n)
              )
                (n.selectionStart = e),
                  (n.selectionEnd = Math.min(t, n.value.length));
              else if (
                (t =
                  ((e = n.ownerDocument || document) && e.defaultView) ||
                  window).getSelection
              ) {
                t = t.getSelection();
                var i = n.textContent.length,
                  o = Math.min(r.start, i);
                (r = void 0 === r.end ? o : Math.min(r.end, i)),
                  !t.extend && o > r && ((i = r), (r = o), (o = i)),
                  (i = lr(n, o));
                var a = lr(n, r);
                i &&
                  a &&
                  (1 !== t.rangeCount ||
                    t.anchorNode !== i.node ||
                    t.anchorOffset !== i.offset ||
                    t.focusNode !== a.node ||
                    t.focusOffset !== a.offset) &&
                  ((e = e.createRange()).setStart(i.node, i.offset),
                  t.removeAllRanges(),
                  o > r
                    ? (t.addRange(e), t.extend(a.node, a.offset))
                    : (e.setEnd(a.node, a.offset), t.addRange(e)));
              }
            for (e = [], t = n; (t = t.parentNode); )
              1 === t.nodeType &&
                e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
            for (
              'function' == typeof n.focus && n.focus(), n = 0;
              n < e.length;
              n++
            )
              ((t = e[n]).element.scrollLeft = t.left),
                (t.element.scrollTop = t.top);
          }
        }
        var fr = c && 'documentMode' in document && 11 >= document.documentMode,
          pr = null,
          gr = null,
          mr = null,
          br = !1;
        function yr(t, e, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == pr ||
            pr !== K(r) ||
            ((r =
              'selectionStart' in (r = pr) && dr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (mr && ar(mr, r)) ||
              ((mr = r),
              0 < (r = qr(gr, 'onSelect')).length &&
                ((e = new ln('onSelect', 'select', null, e, n)),
                t.push({ event: e, listeners: r }),
                (e.target = pr))));
        }
        function vr(t, e) {
          var n = {};
          return (
            (n[t.toLowerCase()] = e.toLowerCase()),
            (n['Webkit' + t] = 'webkit' + e),
            (n['Moz' + t] = 'moz' + e),
            n
          );
        }
        var xr = {
            animationend: vr('Animation', 'AnimationEnd'),
            animationiteration: vr('Animation', 'AnimationIteration'),
            animationstart: vr('Animation', 'AnimationStart'),
            transitionend: vr('Transition', 'TransitionEnd'),
          },
          _r = {},
          wr = {};
        function kr(t) {
          if (_r[t]) return _r[t];
          if (!xr[t]) return t;
          var e,
            n = xr[t];
          for (e in n)
            if (n.hasOwnProperty(e) && e in wr) return (_r[t] = n[e]);
          return t;
        }
        c &&
          ((wr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          'TransitionEvent' in window || delete xr.transitionend.transition);
        var Sr = kr('animationend'),
          Mr = kr('animationiteration'),
          Pr = kr('animationstart'),
          Er = kr('transitionend'),
          Cr = new Map(),
          Or =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function Dr(t, e) {
          Cr.set(t, e), l(e, [t]);
        }
        for (var Tr = 0; Tr < Or.length; Tr++) {
          var Rr = Or[Tr];
          Dr(Rr.toLowerCase(), 'on' + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Dr(Sr, 'onAnimationEnd'),
          Dr(Mr, 'onAnimationIteration'),
          Dr(Pr, 'onAnimationStart'),
          Dr('dblclick', 'onDoubleClick'),
          Dr('focusin', 'onFocus'),
          Dr('focusout', 'onBlur'),
          Dr(Er, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          l(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' '
            )
          ),
          l(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          l('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          l(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          l(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          l(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          );
        var Ar =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Lr = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Ar)
          );
        function zr(t, e, n) {
          var r = t.type || 'unknown-event';
          (t.currentTarget = n),
            (function (t, e, n, r, i, a, s, l, u) {
              if ((Bt.apply(this, arguments), It)) {
                if (!It) throw Error(o(198));
                var c = Nt;
                (It = !1), (Nt = null), Ft || ((Ft = !0), (jt = c));
              }
            })(r, e, void 0, t),
            (t.currentTarget = null);
        }
        function Ir(t, e) {
          e = 0 != (4 & e);
          for (var n = 0; n < t.length; n++) {
            var r = t[n],
              i = r.event;
            r = r.listeners;
            t: {
              var o = void 0;
              if (e)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var s = r[a],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== o && i.isPropagationStopped()))
                    break t;
                  zr(i, s, u), (o = l);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((l = (s = r[a]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== o && i.isPropagationStopped())
                  )
                    break t;
                  zr(i, s, u), (o = l);
                }
            }
          }
          if (Ft) throw ((t = jt), (Ft = !1), (jt = null), t);
        }
        function Nr(t, e) {
          var n = e[hi];
          void 0 === n && (n = e[hi] = new Set());
          var r = t + '__bubble';
          n.has(r) || (Br(e, t, 2, !1), n.add(r));
        }
        function Fr(t, e, n) {
          var r = 0;
          e && (r |= 4), Br(n, t, r, e);
        }
        var jr = '_reactListening' + Math.random().toString(36).slice(2);
        function Vr(t) {
          if (!t[jr]) {
            (t[jr] = !0),
              a.forEach(function (e) {
                'selectionchange' !== e &&
                  (Lr.has(e) || Fr(e, !1, t), Fr(e, !0, t));
              });
            var e = 9 === t.nodeType ? t : t.ownerDocument;
            null === e || e[jr] || ((e[jr] = !0), Fr('selectionchange', !1, e));
          }
        }
        function Br(t, e, n, r) {
          switch (Ke(e)) {
            case 1:
              var i = He;
              break;
            case 4:
              i = qe;
              break;
            default:
              i = $e;
          }
          (n = i.bind(null, e, n, t)),
            (i = void 0),
            !At ||
              ('touchstart' !== e && 'touchmove' !== e && 'wheel' !== e) ||
              (i = !0),
            r
              ? void 0 !== i
                ? t.addEventListener(e, n, { capture: !0, passive: i })
                : t.addEventListener(e, n, !0)
              : void 0 !== i
              ? t.addEventListener(e, n, { passive: i })
              : t.addEventListener(e, n, !1);
        }
        function Wr(t, e, n, r, i) {
          var o = r;
          if (0 == (1 & e) && 0 == (2 & e) && null !== r)
            t: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var s = r.stateNode.containerInfo;
                if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var l = a.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = a.stateNode.containerInfo) === i ||
                        (8 === l.nodeType && l.parentNode === i))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== s; ) {
                  if (null === (a = gi(s))) return;
                  if (5 === (l = a.tag) || 6 === l) {
                    r = o = a;
                    continue t;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Tt(function () {
            var r = o,
              i = _t(n),
              a = [];
            t: {
              var s = Cr.get(t);
              if (void 0 !== s) {
                var l = ln,
                  u = t;
                switch (t) {
                  case 'keypress':
                    if (0 === Je(n)) break t;
                  case 'keydown':
                  case 'keyup':
                    l = Mn;
                    break;
                  case 'focusin':
                    (u = 'focus'), (l = pn);
                    break;
                  case 'focusout':
                    (u = 'blur'), (l = pn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    l = pn;
                    break;
                  case 'click':
                    if (2 === n.button) break t;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    l = hn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    l = fn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    l = En;
                    break;
                  case Sr:
                  case Mr:
                  case Pr:
                    l = gn;
                    break;
                  case Er:
                    l = Cn;
                    break;
                  case 'scroll':
                    l = cn;
                    break;
                  case 'wheel':
                    l = Dn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    l = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    l = Pn;
                }
                var c = 0 != (4 & e),
                  d = !c && 'scroll' === t,
                  h = c ? (null !== s ? s + 'Capture' : null) : s;
                c = [];
                for (var f, p = r; null !== p; ) {
                  var g = (f = p).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== g &&
                      ((f = g),
                      null !== h &&
                        null != (g = Rt(p, h)) &&
                        c.push(Hr(p, g, f))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, i)),
                  a.push({ event: s, listeners: c }));
              }
            }
            if (0 == (7 & e)) {
              if (
                ((l = 'mouseout' === t || 'pointerout' === t),
                (!(s = 'mouseover' === t || 'pointerover' === t) ||
                  n === xt ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!gi(u) && !u[di])) &&
                  (l || s) &&
                  ((s =
                    i.window === i
                      ? i
                      : (s = i.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? gi(u)
                          : null) &&
                        (u !== (d = Wt(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = hn),
                  (g = 'onMouseLeave'),
                  (h = 'onMouseEnter'),
                  (p = 'mouse'),
                  ('pointerout' !== t && 'pointerover' !== t) ||
                    ((c = Pn),
                    (g = 'onPointerLeave'),
                    (h = 'onPointerEnter'),
                    (p = 'pointer')),
                  (d = null == l ? s : bi(l)),
                  (f = null == u ? s : bi(u)),
                  ((s = new c(g, p + 'leave', l, n, i)).target = d),
                  (s.relatedTarget = f),
                  (g = null),
                  gi(i) === r &&
                    (((c = new c(h, p + 'enter', u, n, i)).target = f),
                    (c.relatedTarget = d),
                    (g = c)),
                  (d = g),
                  l && u)
                )
                  t: {
                    for (h = u, p = 0, f = c = l; f; f = $r(f)) p++;
                    for (f = 0, g = h; g; g = $r(g)) f++;
                    for (; 0 < p - f; ) (c = $r(c)), p--;
                    for (; 0 < f - p; ) (h = $r(h)), f--;
                    for (; p--; ) {
                      if (c === h || (null !== h && c === h.alternate)) break t;
                      (c = $r(c)), (h = $r(h));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Ur(a, s, l, c, !1),
                  null !== u && null !== d && Ur(a, d, u, c, !0);
              }
              if (
                'select' ===
                  (l =
                    (s = r ? bi(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ('input' === l && 'file' === s.type)
              )
                var m = Kn;
              else if (Wn(s))
                if (Yn) m = ir;
                else {
                  m = nr;
                  var b = er;
                }
              else
                (l = s.nodeName) &&
                  'input' === l.toLowerCase() &&
                  ('checkbox' === s.type || 'radio' === s.type) &&
                  (m = rr);
              switch (
                (m && (m = m(t, r))
                  ? Hn(a, m, n, i)
                  : (b && b(t, s, r),
                    'focusout' === t &&
                      (b = s._wrapperState) &&
                      b.controlled &&
                      'number' === s.type &&
                      tt(s, 'number', s.value)),
                (b = r ? bi(r) : window),
                t)
              ) {
                case 'focusin':
                  (Wn(b) || 'true' === b.contentEditable) &&
                    ((pr = b), (gr = r), (mr = null));
                  break;
                case 'focusout':
                  mr = gr = pr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), yr(a, n, i);
                  break;
                case 'selectionchange':
                  if (fr) break;
                case 'keydown':
                case 'keyup':
                  yr(a, n, i);
              }
              var y;
              if (Rn)
                t: {
                  switch (t) {
                    case 'compositionstart':
                      var v = 'onCompositionStart';
                      break t;
                    case 'compositionend':
                      v = 'onCompositionEnd';
                      break t;
                    case 'compositionupdate':
                      v = 'onCompositionUpdate';
                      break t;
                  }
                  v = void 0;
                }
              else
                Vn
                  ? Fn(t, n) && (v = 'onCompositionEnd')
                  : 'keydown' === t &&
                    229 === n.keyCode &&
                    (v = 'onCompositionStart');
              v &&
                (zn &&
                  'ko' !== n.locale &&
                  (Vn || 'onCompositionStart' !== v
                    ? 'onCompositionEnd' === v && Vn && (y = Ze())
                    : ((Xe = 'value' in (Ye = i) ? Ye.value : Ye.textContent),
                      (Vn = !0))),
                0 < (b = qr(r, v)).length &&
                  ((v = new yn(v, t, null, n, i)),
                  a.push({ event: v, listeners: b }),
                  (y || null !== (y = jn(n))) && (v.data = y))),
                (y = Ln
                  ? (function (t, e) {
                      switch (t) {
                        case 'compositionend':
                          return jn(e);
                        case 'keypress':
                          return 32 !== e.which ? null : ((Nn = !0), In);
                        case 'textInput':
                          return (t = e.data) === In && Nn ? null : t;
                        default:
                          return null;
                      }
                    })(t, n)
                  : (function (t, e) {
                      if (Vn)
                        return 'compositionend' === t || (!Rn && Fn(t, e))
                          ? ((t = Ze()), (Ge = Xe = Ye = null), (Vn = !1), t)
                          : null;
                      switch (t) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(e.ctrlKey || e.altKey || e.metaKey) ||
                            (e.ctrlKey && e.altKey)
                          ) {
                            if (e.char && 1 < e.char.length) return e.char;
                            if (e.which) return String.fromCharCode(e.which);
                          }
                          return null;
                        case 'compositionend':
                          return zn && 'ko' !== e.locale ? null : e.data;
                      }
                    })(t, n)) &&
                  0 < (r = qr(r, 'onBeforeInput')).length &&
                  ((i = new yn('onBeforeInput', 'beforeinput', null, n, i)),
                  a.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            Ir(a, e);
          });
        }
        function Hr(t, e, n) {
          return { instance: t, listener: e, currentTarget: n };
        }
        function qr(t, e) {
          for (var n = e + 'Capture', r = []; null !== t; ) {
            var i = t,
              o = i.stateNode;
            5 === i.tag &&
              null !== o &&
              ((i = o),
              null != (o = Rt(t, n)) && r.unshift(Hr(t, o, i)),
              null != (o = Rt(t, e)) && r.push(Hr(t, o, i))),
              (t = t.return);
          }
          return r;
        }
        function $r(t) {
          if (null === t) return null;
          do {
            t = t.return;
          } while (t && 5 !== t.tag);
          return t || null;
        }
        function Ur(t, e, n, r, i) {
          for (var o = e._reactName, a = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              i
                ? null != (l = Rt(n, o)) && a.unshift(Hr(n, l, s))
                : i || (null != (l = Rt(n, o)) && a.push(Hr(n, l, s)))),
              (n = n.return);
          }
          0 !== a.length && t.push({ event: e, listeners: a });
        }
        var Qr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Yr(t) {
          return ('string' == typeof t ? t : '' + t)
            .replace(Qr, '\n')
            .replace(Kr, '');
        }
        function Xr(t, e, n) {
          if (((e = Yr(e)), Yr(t) !== e && n)) throw Error(o(425));
        }
        function Gr() {}
        var Zr = null;
        function Jr(t, e) {
          return (
            'textarea' === t ||
            'noscript' === t ||
            'string' == typeof e.children ||
            'number' == typeof e.children ||
            ('object' == typeof e.dangerouslySetInnerHTML &&
              null !== e.dangerouslySetInnerHTML &&
              null != e.dangerouslySetInnerHTML.__html)
          );
        }
        var ti = 'function' == typeof setTimeout ? setTimeout : void 0,
          ei = 'function' == typeof clearTimeout ? clearTimeout : void 0,
          ni = 'function' == typeof Promise ? Promise : void 0,
          ri =
            'function' == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== ni
              ? function (t) {
                  return ni.resolve(null).then(t).catch(ii);
                }
              : ti;
        function ii(t) {
          setTimeout(function () {
            throw t;
          });
        }
        function oi(t, e) {
          var n = e,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((t.removeChild(n), i && 8 === i.nodeType))
              if ('/$' === (n = i.data)) {
                if (0 === r) return t.removeChild(i), void Be(e);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = i;
          } while (n);
          Be(e);
        }
        function ai(t) {
          for (; null != t; t = t.nextSibling) {
            var e = t.nodeType;
            if (1 === e || 3 === e) break;
            if (8 === e) {
              if ('$' === (e = t.data) || '$!' === e || '$?' === e) break;
              if ('/$' === e) return null;
            }
          }
          return t;
        }
        function si(t) {
          t = t.previousSibling;
          for (var e = 0; t; ) {
            if (8 === t.nodeType) {
              var n = t.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === e) return t;
                e--;
              } else '/$' === n && e++;
            }
            t = t.previousSibling;
          }
          return null;
        }
        var li = Math.random().toString(36).slice(2),
          ui = '__reactFiber$' + li,
          ci = '__reactProps$' + li,
          di = '__reactContainer$' + li,
          hi = '__reactEvents$' + li,
          fi = '__reactListeners$' + li,
          pi = '__reactHandles$' + li;
        function gi(t) {
          var e = t[ui];
          if (e) return e;
          for (var n = t.parentNode; n; ) {
            if ((e = n[di] || n[ui])) {
              if (
                ((n = e.alternate),
                null !== e.child || (null !== n && null !== n.child))
              )
                for (t = si(t); null !== t; ) {
                  if ((n = t[ui])) return n;
                  t = si(t);
                }
              return e;
            }
            n = (t = n).parentNode;
          }
          return null;
        }
        function mi(t) {
          return !(t = t[ui] || t[di]) ||
            (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag)
            ? null
            : t;
        }
        function bi(t) {
          if (5 === t.tag || 6 === t.tag) return t.stateNode;
          throw Error(o(33));
        }
        function yi(t) {
          return t[ci] || null;
        }
        var vi = [],
          xi = -1;
        function _i(t) {
          return { current: t };
        }
        function wi(t) {
          0 > xi || ((t.current = vi[xi]), (vi[xi] = null), xi--);
        }
        function ki(t, e) {
          xi++, (vi[xi] = t.current), (t.current = e);
        }
        var Si = {},
          Mi = _i(Si),
          Pi = _i(!1),
          Ei = Si;
        function Ci(t, e) {
          var n = t.type.contextTypes;
          if (!n) return Si;
          var r = t.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            o = {};
          for (i in n) o[i] = e[i];
          return (
            r &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                e),
              (t.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Oi(t) {
          return null != t.childContextTypes;
        }
        function Di() {
          wi(Pi), wi(Mi);
        }
        function Ti(t, e, n) {
          if (Mi.current !== Si) throw Error(o(168));
          ki(Mi, e), ki(Pi, n);
        }
        function Ri(t, e, n) {
          var r = t.stateNode;
          if (
            ((e = e.childContextTypes), 'function' != typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in e)) throw Error(o(108, H(t) || 'Unknown', i));
          return N({}, n, r);
        }
        function Ai(t) {
          return (
            (t =
              ((t = t.stateNode) &&
                t.__reactInternalMemoizedMergedChildContext) ||
              Si),
            (Ei = Mi.current),
            ki(Mi, t),
            ki(Pi, Pi.current),
            !0
          );
        }
        function Li(t, e, n) {
          var r = t.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((t = Ri(t, e, Ei)),
              (r.__reactInternalMemoizedMergedChildContext = t),
              wi(Pi),
              wi(Mi),
              ki(Mi, t))
            : wi(Pi),
            ki(Pi, n);
        }
        var zi = null,
          Ii = !1,
          Ni = !1;
        function Fi(t) {
          null === zi ? (zi = [t]) : zi.push(t);
        }
        function ji() {
          if (!Ni && null !== zi) {
            Ni = !0;
            var t = 0,
              e = ye;
            try {
              var n = zi;
              for (ye = 1; t < n.length; t++) {
                var r = n[t];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (zi = null), (Ii = !1);
            } catch (e) {
              throw (null !== zi && (zi = zi.slice(t + 1)), Qt(Jt, ji), e);
            } finally {
              (ye = e), (Ni = !1);
            }
          }
          return null;
        }
        var Vi = x.ReactCurrentBatchConfig;
        function Bi(t, e) {
          if (t && t.defaultProps) {
            for (var n in ((e = N({}, e)), (t = t.defaultProps)))
              void 0 === e[n] && (e[n] = t[n]);
            return e;
          }
          return e;
        }
        var Wi = _i(null),
          Hi = null,
          qi = null,
          $i = null;
        function Ui() {
          $i = qi = Hi = null;
        }
        function Qi(t) {
          var e = Wi.current;
          wi(Wi), (t._currentValue = e);
        }
        function Ki(t, e, n) {
          for (; null !== t; ) {
            var r = t.alternate;
            if (
              ((t.childLanes & e) !== e
                ? ((t.childLanes |= e), null !== r && (r.childLanes |= e))
                : null !== r && (r.childLanes & e) !== e && (r.childLanes |= e),
              t === n)
            )
              break;
            t = t.return;
          }
        }
        function Yi(t, e) {
          (Hi = t),
            ($i = qi = null),
            null !== (t = t.dependencies) &&
              null !== t.firstContext &&
              (0 != (t.lanes & e) && (bs = !0), (t.firstContext = null));
        }
        function Xi(t) {
          var e = t._currentValue;
          if ($i !== t)
            if (
              ((t = { context: t, memoizedValue: e, next: null }), null === qi)
            ) {
              if (null === Hi) throw Error(o(308));
              (qi = t), (Hi.dependencies = { lanes: 0, firstContext: t });
            } else qi = qi.next = t;
          return e;
        }
        var Gi = null,
          Zi = !1;
        function Ji(t) {
          t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function to(t, e) {
          (t = t.updateQueue),
            e.updateQueue === t &&
              (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                effects: t.effects,
              });
        }
        function eo(t, e) {
          return {
            eventTime: t,
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function no(t, e) {
          var n = t.updateQueue;
          null !== n &&
            ((n = n.shared),
            null !== bl && 0 != (1 & t.mode) && 0 == (2 & ml)
              ? (null === (t = n.interleaved)
                  ? ((e.next = e), null === Gi ? (Gi = [n]) : Gi.push(n))
                  : ((e.next = t.next), (t.next = e)),
                (n.interleaved = e))
              : (null === (t = n.pending)
                  ? (e.next = e)
                  : ((e.next = t.next), (t.next = e)),
                (n.pending = e)));
        }
        function ro(t, e, n) {
          if (
            null !== (e = e.updateQueue) &&
            ((e = e.shared), 0 != (4194240 & n))
          ) {
            var r = e.lanes;
            (n |= r &= t.pendingLanes), (e.lanes = n), be(t, n);
          }
        }
        function io(t, e) {
          var n = t.updateQueue,
            r = t.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (i = o = a) : (o = o.next = a), (n = n.next);
              } while (null !== n);
              null === o ? (i = o = e) : (o = o.next = e);
            } else i = o = e;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (t.updateQueue = n)
            );
          }
          null === (t = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = e)
            : (t.next = e),
            (n.lastBaseUpdate = e);
        }
        function oo(t, e, n, r) {
          var i = t.updateQueue;
          Zi = !1;
          var o = i.firstBaseUpdate,
            a = i.lastBaseUpdate,
            s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === a ? (o = u) : (a.next = u), (a = l);
            var c = t.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== a &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== o) {
            var d = i.baseState;
            for (a = 0, c = u = l = null, s = o; ; ) {
              var h = s.lane,
                f = s.eventTime;
              if ((r & h) === h) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                t: {
                  var p = t,
                    g = s;
                  switch (((h = e), (f = n), g.tag)) {
                    case 1:
                      if ('function' == typeof (p = g.payload)) {
                        d = p.call(f, d, h);
                        break t;
                      }
                      d = p;
                      break t;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (h =
                          'function' == typeof (p = g.payload)
                            ? p.call(f, d, h)
                            : p)
                      )
                        break t;
                      d = N({}, d, h);
                      break t;
                    case 2:
                      Zi = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((t.flags |= 64),
                  null === (h = i.effects) ? (i.effects = [s]) : h.push(s));
              } else
                (f = {
                  eventTime: f,
                  lane: h,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = f), (l = d)) : (c = c.next = f),
                  (a |= h);
              if (null === (s = s.next)) {
                if (null === (s = i.shared.pending)) break;
                (s = (h = s).next),
                  (h.next = null),
                  (i.lastBaseUpdate = h),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (l = d),
              (i.baseState = l),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = c),
              null !== (e = i.shared.interleaved))
            ) {
              i = e;
              do {
                (a |= i.lane), (i = i.next);
              } while (i !== e);
            } else null === o && (i.shared.lanes = 0);
            (Sl |= a), (t.lanes = a), (t.memoizedState = d);
          }
        }
        function ao(t, e, n) {
          if (((t = e.effects), (e.effects = null), null !== t))
            for (e = 0; e < t.length; e++) {
              var r = t[e],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), 'function' != typeof i))
                  throw Error(o(191, i));
                i.call(r);
              }
            }
        }
        var so = new r.Component().refs;
        function lo(t, e, n, r) {
          (n = null == (n = n(r, (e = t.memoizedState))) ? e : N({}, e, n)),
            (t.memoizedState = n),
            0 === t.lanes && (t.updateQueue.baseState = n);
        }
        var uo = {
          isMounted: function (t) {
            return !!(t = t._reactInternals) && Wt(t) === t;
          },
          enqueueSetState: function (t, e, n) {
            t = t._reactInternals;
            var r = Bl(),
              i = Wl(t),
              o = eo(r, i);
            (o.payload = e),
              null != n && (o.callback = n),
              no(t, o),
              null !== (e = Hl(t, i, r)) && ro(e, t, i);
          },
          enqueueReplaceState: function (t, e, n) {
            t = t._reactInternals;
            var r = Bl(),
              i = Wl(t),
              o = eo(r, i);
            (o.tag = 1),
              (o.payload = e),
              null != n && (o.callback = n),
              no(t, o),
              null !== (e = Hl(t, i, r)) && ro(e, t, i);
          },
          enqueueForceUpdate: function (t, e) {
            t = t._reactInternals;
            var n = Bl(),
              r = Wl(t),
              i = eo(n, r);
            (i.tag = 2),
              null != e && (i.callback = e),
              no(t, i),
              null !== (e = Hl(t, r, n)) && ro(e, t, r);
          },
        };
        function co(t, e, n, r, i, o, a) {
          return 'function' == typeof (t = t.stateNode).shouldComponentUpdate
            ? t.shouldComponentUpdate(r, o, a)
            : !(
                e.prototype &&
                e.prototype.isPureReactComponent &&
                ar(n, r) &&
                ar(i, o)
              );
        }
        function ho(t, e, n) {
          var r = !1,
            i = Si,
            o = e.contextType;
          return (
            'object' == typeof o && null !== o
              ? (o = Xi(o))
              : ((i = Oi(e) ? Ei : Mi.current),
                (o = (r = null != (r = e.contextTypes)) ? Ci(t, i) : Si)),
            (e = new e(n, o)),
            (t.memoizedState =
              null !== e.state && void 0 !== e.state ? e.state : null),
            (e.updater = uo),
            (t.stateNode = e),
            (e._reactInternals = t),
            r &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (t.__reactInternalMemoizedMaskedChildContext = o)),
            e
          );
        }
        function fo(t, e, n, r) {
          (t = e.state),
            'function' == typeof e.componentWillReceiveProps &&
              e.componentWillReceiveProps(n, r),
            'function' == typeof e.UNSAFE_componentWillReceiveProps &&
              e.UNSAFE_componentWillReceiveProps(n, r),
            e.state !== t && uo.enqueueReplaceState(e, e.state, null);
        }
        function po(t, e, n, r) {
          var i = t.stateNode;
          (i.props = n), (i.state = t.memoizedState), (i.refs = so), Ji(t);
          var o = e.contextType;
          'object' == typeof o && null !== o
            ? (i.context = Xi(o))
            : ((o = Oi(e) ? Ei : Mi.current), (i.context = Ci(t, o))),
            (i.state = t.memoizedState),
            'function' == typeof (o = e.getDerivedStateFromProps) &&
              (lo(t, e, o, n), (i.state = t.memoizedState)),
            'function' == typeof e.getDerivedStateFromProps ||
              'function' == typeof i.getSnapshotBeforeUpdate ||
              ('function' != typeof i.UNSAFE_componentWillMount &&
                'function' != typeof i.componentWillMount) ||
              ((e = i.state),
              'function' == typeof i.componentWillMount &&
                i.componentWillMount(),
              'function' == typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              e !== i.state && uo.enqueueReplaceState(i, i.state, null),
              oo(t, n, i, r),
              (i.state = t.memoizedState)),
            'function' == typeof i.componentDidMount && (t.flags |= 4194308);
        }
        var go = [],
          mo = 0,
          bo = null,
          yo = 0,
          vo = [],
          xo = 0,
          _o = null,
          wo = 1,
          ko = '';
        function So(t, e) {
          (go[mo++] = yo), (go[mo++] = bo), (bo = t), (yo = e);
        }
        function Mo(t, e, n) {
          (vo[xo++] = wo), (vo[xo++] = ko), (vo[xo++] = _o), (_o = t);
          var r = wo;
          t = ko;
          var i = 32 - ae(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var o = 32 - ae(e) + i;
          if (30 < o) {
            var a = i - (i % 5);
            (o = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (i -= a),
              (wo = (1 << (32 - ae(e) + i)) | (n << i) | r),
              (ko = o + t);
          } else (wo = (1 << o) | (n << i) | r), (ko = t);
        }
        function Po(t) {
          null !== t.return && (So(t, 1), Mo(t, 1, 0));
        }
        function Eo(t) {
          for (; t === bo; )
            (bo = go[--mo]), (go[mo] = null), (yo = go[--mo]), (go[mo] = null);
          for (; t === _o; )
            (_o = vo[--xo]),
              (vo[xo] = null),
              (ko = vo[--xo]),
              (vo[xo] = null),
              (wo = vo[--xo]),
              (vo[xo] = null);
        }
        var Co = null,
          Oo = null,
          Do = !1,
          To = null;
        function Ro(t, e) {
          var n = vu(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = e),
            (n.return = t),
            null === (e = t.deletions)
              ? ((t.deletions = [n]), (t.flags |= 16))
              : e.push(n);
        }
        function Ao(t, e) {
          switch (t.tag) {
            case 5:
              var n = t.type;
              return (
                null !==
                  (e =
                    1 !== e.nodeType ||
                    n.toLowerCase() !== e.nodeName.toLowerCase()
                      ? null
                      : e) &&
                ((t.stateNode = e), (Co = t), (Oo = ai(e.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (e = '' === t.pendingProps || 3 !== e.nodeType ? null : e) &&
                ((t.stateNode = e), (Co = t), (Oo = null), !0)
              );
            case 13:
              return (
                null !== (e = 8 !== e.nodeType ? null : e) &&
                ((n = null !== _o ? { id: wo, overflow: ko } : null),
                (t.memoizedState = {
                  dehydrated: e,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = vu(18, null, null, 0)).stateNode = e),
                (n.return = t),
                (t.child = n),
                (Co = t),
                (Oo = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function Lo(t) {
          return 0 != (1 & t.mode) && 0 == (128 & t.flags);
        }
        function zo(t) {
          if (Do) {
            var e = Oo;
            if (e) {
              var n = e;
              if (!Ao(t, e)) {
                if (Lo(t)) throw Error(o(418));
                e = ai(n.nextSibling);
                var r = Co;
                e && Ao(t, e)
                  ? Ro(r, n)
                  : ((t.flags = (-4097 & t.flags) | 2), (Do = !1), (Co = t));
              }
            } else {
              if (Lo(t)) throw Error(o(418));
              (t.flags = (-4097 & t.flags) | 2), (Do = !1), (Co = t);
            }
          }
        }
        function Io(t) {
          for (
            t = t.return;
            null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;

          )
            t = t.return;
          Co = t;
        }
        function No(t) {
          if (t !== Co) return !1;
          if (!Do) return Io(t), (Do = !0), !1;
          var e;
          if (
            ((e = 3 !== t.tag) &&
              !(e = 5 !== t.tag) &&
              (e =
                'head' !== (e = t.type) &&
                'body' !== e &&
                !Jr(t.type, t.memoizedProps)),
            e && (e = Oo))
          ) {
            if (Lo(t)) {
              for (t = Oo; t; ) t = ai(t.nextSibling);
              throw Error(o(418));
            }
            for (; e; ) Ro(t, e), (e = ai(e.nextSibling));
          }
          if ((Io(t), 13 === t.tag)) {
            if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
              throw Error(o(317));
            t: {
              for (t = t.nextSibling, e = 0; t; ) {
                if (8 === t.nodeType) {
                  var n = t.data;
                  if ('/$' === n) {
                    if (0 === e) {
                      Oo = ai(t.nextSibling);
                      break t;
                    }
                    e--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || e++;
                }
                t = t.nextSibling;
              }
              Oo = null;
            }
          } else Oo = Co ? ai(t.stateNode.nextSibling) : null;
          return !0;
        }
        function Fo() {
          (Oo = Co = null), (Do = !1);
        }
        function jo(t) {
          null === To ? (To = [t]) : To.push(t);
        }
        function Vo(t, e, n) {
          if (
            null !== (t = n.ref) &&
            'function' != typeof t &&
            'object' != typeof t
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, t));
              var i = r,
                a = '' + t;
              return null !== e &&
                null !== e.ref &&
                'function' == typeof e.ref &&
                e.ref._stringRef === a
                ? e.ref
                : ((e = function (t) {
                    var e = i.refs;
                    e === so && (e = i.refs = {}),
                      null === t ? delete e[a] : (e[a] = t);
                  }),
                  (e._stringRef = a),
                  e);
            }
            if ('string' != typeof t) throw Error(o(284));
            if (!n._owner) throw Error(o(290, t));
          }
          return t;
        }
        function Bo(t, e) {
          throw (
            ((t = Object.prototype.toString.call(e)),
            Error(
              o(
                31,
                '[object Object]' === t
                  ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                  : t
              )
            ))
          );
        }
        function Wo(t) {
          return (0, t._init)(t._payload);
        }
        function Ho(t) {
          function e(e, n) {
            if (t) {
              var r = e.deletions;
              null === r ? ((e.deletions = [n]), (e.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!t) return null;
            for (; null !== r; ) e(n, r), (r = r.sibling);
            return null;
          }
          function r(t, e) {
            for (t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function i(t, e) {
            return ((t = _u(t, e)).index = 0), (t.sibling = null), t;
          }
          function a(e, n, r) {
            return (
              (e.index = r),
              t
                ? null !== (r = e.alternate)
                  ? (r = r.index) < n
                    ? ((e.flags |= 2), n)
                    : r
                  : ((e.flags |= 2), n)
                : ((e.flags |= 1048576), n)
            );
          }
          function s(e) {
            return t && null === e.alternate && (e.flags |= 2), e;
          }
          function l(t, e, n, r) {
            return null === e || 6 !== e.tag
              ? (((e = Mu(n, t.mode, r)).return = t), e)
              : (((e = i(e, n)).return = t), e);
          }
          function u(t, e, n, r) {
            var o = n.type;
            return o === k
              ? d(t, e, n.props.children, r, n.key)
              : null !== e &&
                (e.elementType === o ||
                  ('object' == typeof o &&
                    null !== o &&
                    o.$$typeof === R &&
                    Wo(o) === e.type))
              ? (((r = i(e, n.props)).ref = Vo(t, e, n)), (r.return = t), r)
              : (((r = wu(n.type, n.key, n.props, null, t.mode, r)).ref = Vo(
                  t,
                  e,
                  n
                )),
                (r.return = t),
                r);
          }
          function c(t, e, n, r) {
            return null === e ||
              4 !== e.tag ||
              e.stateNode.containerInfo !== n.containerInfo ||
              e.stateNode.implementation !== n.implementation
              ? (((e = Pu(n, t.mode, r)).return = t), e)
              : (((e = i(e, n.children || [])).return = t), e);
          }
          function d(t, e, n, r, o) {
            return null === e || 7 !== e.tag
              ? (((e = ku(n, t.mode, r, o)).return = t), e)
              : (((e = i(e, n)).return = t), e);
          }
          function h(t, e, n) {
            if (('string' == typeof e && '' !== e) || 'number' == typeof e)
              return ((e = Mu('' + e, t.mode, n)).return = t), e;
            if ('object' == typeof e && null !== e) {
              switch (e.$$typeof) {
                case _:
                  return (
                    ((n = wu(e.type, e.key, e.props, null, t.mode, n)).ref = Vo(
                      t,
                      null,
                      e
                    )),
                    (n.return = t),
                    n
                  );
                case w:
                  return ((e = Pu(e, t.mode, n)).return = t), e;
                case R:
                  return h(t, (0, e._init)(e._payload), n);
              }
              if (et(e) || z(e))
                return ((e = ku(e, t.mode, n, null)).return = t), e;
              Bo(t, e);
            }
            return null;
          }
          function f(t, e, n, r) {
            var i = null !== e ? e.key : null;
            if (('string' == typeof n && '' !== n) || 'number' == typeof n)
              return null !== i ? null : l(t, e, '' + n, r);
            if ('object' == typeof n && null !== n) {
              switch (n.$$typeof) {
                case _:
                  return n.key === i ? u(t, e, n, r) : null;
                case w:
                  return n.key === i ? c(t, e, n, r) : null;
                case R:
                  return f(t, e, (i = n._init)(n._payload), r);
              }
              if (et(n) || z(n)) return null !== i ? null : d(t, e, n, r, null);
              Bo(t, n);
            }
            return null;
          }
          function p(t, e, n, r, i) {
            if (('string' == typeof r && '' !== r) || 'number' == typeof r)
              return l(e, (t = t.get(n) || null), '' + r, i);
            if ('object' == typeof r && null !== r) {
              switch (r.$$typeof) {
                case _:
                  return u(
                    e,
                    (t = t.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case w:
                  return c(
                    e,
                    (t = t.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case R:
                  return p(t, e, n, (0, r._init)(r._payload), i);
              }
              if (et(r) || z(r))
                return d(e, (t = t.get(n) || null), r, i, null);
              Bo(e, r);
            }
            return null;
          }
          function g(i, o, s, l) {
            for (
              var u = null, c = null, d = o, g = (o = 0), m = null;
              null !== d && g < s.length;
              g++
            ) {
              d.index > g ? ((m = d), (d = null)) : (m = d.sibling);
              var b = f(i, d, s[g], l);
              if (null === b) {
                null === d && (d = m);
                break;
              }
              t && d && null === b.alternate && e(i, d),
                (o = a(b, o, g)),
                null === c ? (u = b) : (c.sibling = b),
                (c = b),
                (d = m);
            }
            if (g === s.length) return n(i, d), Do && So(i, g), u;
            if (null === d) {
              for (; g < s.length; g++)
                null !== (d = h(i, s[g], l)) &&
                  ((o = a(d, o, g)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return Do && So(i, g), u;
            }
            for (d = r(i, d); g < s.length; g++)
              null !== (m = p(d, i, g, s[g], l)) &&
                (t &&
                  null !== m.alternate &&
                  d.delete(null === m.key ? g : m.key),
                (o = a(m, o, g)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              t &&
                d.forEach(function (t) {
                  return e(i, t);
                }),
              Do && So(i, g),
              u
            );
          }
          function m(i, s, l, u) {
            var c = z(l);
            if ('function' != typeof c) throw Error(o(150));
            if (null == (l = c.call(l))) throw Error(o(151));
            for (
              var d = (c = null), g = s, m = (s = 0), b = null, y = l.next();
              null !== g && !y.done;
              m++, y = l.next()
            ) {
              g.index > m ? ((b = g), (g = null)) : (b = g.sibling);
              var v = f(i, g, y.value, u);
              if (null === v) {
                null === g && (g = b);
                break;
              }
              t && g && null === v.alternate && e(i, g),
                (s = a(v, s, m)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v),
                (g = b);
            }
            if (y.done) return n(i, g), Do && So(i, m), c;
            if (null === g) {
              for (; !y.done; m++, y = l.next())
                null !== (y = h(i, y.value, u)) &&
                  ((s = a(y, s, m)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return Do && So(i, m), c;
            }
            for (g = r(i, g); !y.done; m++, y = l.next())
              null !== (y = p(g, i, m, y.value, u)) &&
                (t &&
                  null !== y.alternate &&
                  g.delete(null === y.key ? m : y.key),
                (s = a(y, s, m)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              t &&
                g.forEach(function (t) {
                  return e(i, t);
                }),
              Do && So(i, m),
              c
            );
          }
          return function t(r, o, a, l) {
            if (
              ('object' == typeof a &&
                null !== a &&
                a.type === k &&
                null === a.key &&
                (a = a.props.children),
              'object' == typeof a && null !== a)
            ) {
              switch (a.$$typeof) {
                case _:
                  t: {
                    for (var u = a.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = a.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = i(c, a.props.children)).return = r),
                              (r = o);
                            break t;
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' == typeof u &&
                            null !== u &&
                            u.$$typeof === R &&
                            Wo(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = i(c, a.props)).ref = Vo(r, c, a)),
                            (o.return = r),
                            (r = o);
                          break t;
                        }
                        n(r, c);
                        break;
                      }
                      e(r, c), (c = c.sibling);
                    }
                    a.type === k
                      ? (((o = ku(a.props.children, r.mode, l, a.key)).return =
                          r),
                        (r = o))
                      : (((l = wu(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          r.mode,
                          l
                        )).ref = Vo(r, o, a)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case w:
                  t: {
                    for (c = a.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === a.containerInfo &&
                          o.stateNode.implementation === a.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = i(o, a.children || [])).return = r),
                            (r = o);
                          break t;
                        }
                        n(r, o);
                        break;
                      }
                      e(r, o), (o = o.sibling);
                    }
                    ((o = Pu(a, r.mode, l)).return = r), (r = o);
                  }
                  return s(r);
                case R:
                  return t(r, o, (c = a._init)(a._payload), l);
              }
              if (et(a)) return g(r, o, a, l);
              if (z(a)) return m(r, o, a, l);
              Bo(r, a);
            }
            return ('string' == typeof a && '' !== a) || 'number' == typeof a
              ? ((a = '' + a),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = i(o, a)).return = r), (r = o))
                  : (n(r, o), ((o = Mu(a, r.mode, l)).return = r), (r = o)),
                s(r))
              : n(r, o);
          };
        }
        var qo = Ho(!0),
          $o = Ho(!1),
          Uo = {},
          Qo = _i(Uo),
          Ko = _i(Uo),
          Yo = _i(Uo);
        function Xo(t) {
          if (t === Uo) throw Error(o(174));
          return t;
        }
        function Go(t, e) {
          switch ((ki(Yo, e), ki(Ko, t), ki(Qo, Uo), (t = e.nodeType))) {
            case 9:
            case 11:
              e = (e = e.documentElement) ? e.namespaceURI : lt(null, '');
              break;
            default:
              e = lt(
                (e = (t = 8 === t ? e.parentNode : e).namespaceURI || null),
                (t = t.tagName)
              );
          }
          wi(Qo), ki(Qo, e);
        }
        function Zo() {
          wi(Qo), wi(Ko), wi(Yo);
        }
        function Jo(t) {
          Xo(Yo.current);
          var e = Xo(Qo.current),
            n = lt(e, t.type);
          e !== n && (ki(Ko, t), ki(Qo, n));
        }
        function ta(t) {
          Ko.current === t && (wi(Qo), wi(Ko));
        }
        var ea = _i(0);
        function na(t) {
          for (var e = t; null !== e; ) {
            if (13 === e.tag) {
              var n = e.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return e;
            } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
              if (0 != (128 & e.flags)) return e;
            } else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) return null;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
          return null;
        }
        var ra = [];
        function ia() {
          for (var t = 0; t < ra.length; t++)
            ra[t]._workInProgressVersionPrimary = null;
          ra.length = 0;
        }
        var oa = x.ReactCurrentDispatcher,
          aa = x.ReactCurrentBatchConfig,
          sa = 0,
          la = null,
          ua = null,
          ca = null,
          da = !1,
          ha = !1,
          fa = 0,
          pa = 0;
        function ga() {
          throw Error(o(321));
        }
        function ma(t, e) {
          if (null === e) return !1;
          for (var n = 0; n < e.length && n < t.length; n++)
            if (!or(t[n], e[n])) return !1;
          return !0;
        }
        function ba(t, e, n, r, i, a) {
          if (
            ((sa = a),
            (la = e),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.lanes = 0),
            (oa.current = null === t || null === t.memoizedState ? Ja : ts),
            (t = n(r, i)),
            ha)
          ) {
            a = 0;
            do {
              if (((ha = !1), (fa = 0), 25 <= a)) throw Error(o(301));
              (a += 1),
                (ca = ua = null),
                (e.updateQueue = null),
                (oa.current = es),
                (t = n(r, i));
            } while (ha);
          }
          if (
            ((oa.current = Za),
            (e = null !== ua && null !== ua.next),
            (sa = 0),
            (ca = ua = la = null),
            (da = !1),
            e)
          )
            throw Error(o(300));
          return t;
        }
        function ya() {
          var t = 0 !== fa;
          return (fa = 0), t;
        }
        function va() {
          var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ca ? (la.memoizedState = ca = t) : (ca = ca.next = t), ca
          );
        }
        function xa() {
          if (null === ua) {
            var t = la.alternate;
            t = null !== t ? t.memoizedState : null;
          } else t = ua.next;
          var e = null === ca ? la.memoizedState : ca.next;
          if (null !== e) (ca = e), (ua = t);
          else {
            if (null === t) throw Error(o(310));
            (t = {
              memoizedState: (ua = t).memoizedState,
              baseState: ua.baseState,
              baseQueue: ua.baseQueue,
              queue: ua.queue,
              next: null,
            }),
              null === ca ? (la.memoizedState = ca = t) : (ca = ca.next = t);
          }
          return ca;
        }
        function _a(t, e) {
          return 'function' == typeof e ? e(t) : e;
        }
        function wa(t) {
          var e = xa(),
            n = e.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = t;
          var r = ua,
            i = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== i) {
              var s = i.next;
              (i.next = a.next), (a.next = s);
            }
            (r.baseQueue = i = a), (n.pending = null);
          }
          if (null !== i) {
            (a = i.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = a;
            do {
              var d = c.lane;
              if ((sa & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : t(r, c.action));
              else {
                var h = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = h), (s = r)) : (u = u.next = h),
                  (la.lanes |= d),
                  (Sl |= d);
              }
              c = c.next;
            } while (null !== c && c !== a);
            null === u ? (s = r) : (u.next = l),
              or(r, e.memoizedState) || (bs = !0),
              (e.memoizedState = r),
              (e.baseState = s),
              (e.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (t = n.interleaved)) {
            i = t;
            do {
              (a = i.lane), (la.lanes |= a), (Sl |= a), (i = i.next);
            } while (i !== t);
          } else null === i && (n.lanes = 0);
          return [e.memoizedState, n.dispatch];
        }
        function ka(t) {
          var e = xa(),
            n = e.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = t;
          var r = n.dispatch,
            i = n.pending,
            a = e.memoizedState;
          if (null !== i) {
            n.pending = null;
            var s = (i = i.next);
            do {
              (a = t(a, s.action)), (s = s.next);
            } while (s !== i);
            or(a, e.memoizedState) || (bs = !0),
              (e.memoizedState = a),
              null === e.baseQueue && (e.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function Sa() {}
        function Ma(t, e) {
          var n = la,
            r = xa(),
            i = e(),
            a = !or(r.memoizedState, i);
          if (
            (a && ((r.memoizedState = i), (bs = !0)),
            (r = r.queue),
            Ia(Ca.bind(null, n, r, t), [t]),
            r.getSnapshot !== e ||
              a ||
              (null !== ca && 1 & ca.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ta(9, Ea.bind(null, n, r, i, e), void 0, null),
              null === bl)
            )
              throw Error(o(349));
            0 != (30 & sa) || Pa(n, e, i);
          }
          return i;
        }
        function Pa(t, e, n) {
          (t.flags |= 16384),
            (t = { getSnapshot: e, value: n }),
            null === (e = la.updateQueue)
              ? ((e = { lastEffect: null, stores: null }),
                (la.updateQueue = e),
                (e.stores = [t]))
              : null === (n = e.stores)
              ? (e.stores = [t])
              : n.push(t);
        }
        function Ea(t, e, n, r) {
          (e.value = n), (e.getSnapshot = r), Oa(e) && Hl(t, 1, -1);
        }
        function Ca(t, e, n) {
          return n(function () {
            Oa(e) && Hl(t, 1, -1);
          });
        }
        function Oa(t) {
          var e = t.getSnapshot;
          t = t.value;
          try {
            var n = e();
            return !or(t, n);
          } catch (t) {
            return !0;
          }
        }
        function Da(t) {
          var e = va();
          return (
            'function' == typeof t && (t = t()),
            (e.memoizedState = e.baseState = t),
            (t = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: _a,
              lastRenderedState: t,
            }),
            (e.queue = t),
            (t = t.dispatch = Qa.bind(null, la, t)),
            [e.memoizedState, t]
          );
        }
        function Ta(t, e, n, r) {
          return (
            (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
            null === (e = la.updateQueue)
              ? ((e = { lastEffect: null, stores: null }),
                (la.updateQueue = e),
                (e.lastEffect = t.next = t))
              : null === (n = e.lastEffect)
              ? (e.lastEffect = t.next = t)
              : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t)),
            t
          );
        }
        function Ra() {
          return xa().memoizedState;
        }
        function Aa(t, e, n, r) {
          var i = va();
          (la.flags |= t),
            (i.memoizedState = Ta(1 | e, n, void 0, void 0 === r ? null : r));
        }
        function La(t, e, n, r) {
          var i = xa();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== ua) {
            var a = ua.memoizedState;
            if (((o = a.destroy), null !== r && ma(r, a.deps)))
              return void (i.memoizedState = Ta(e, n, o, r));
          }
          (la.flags |= t), (i.memoizedState = Ta(1 | e, n, o, r));
        }
        function za(t, e) {
          return Aa(8390656, 8, t, e);
        }
        function Ia(t, e) {
          return La(2048, 8, t, e);
        }
        function Na(t, e) {
          return La(4, 2, t, e);
        }
        function Fa(t, e) {
          return La(4, 4, t, e);
        }
        function ja(t, e) {
          return 'function' == typeof e
            ? ((t = t()),
              e(t),
              function () {
                e(null);
              })
            : null != e
            ? ((t = t()),
              (e.current = t),
              function () {
                e.current = null;
              })
            : void 0;
        }
        function Va(t, e, n) {
          return (
            (n = null != n ? n.concat([t]) : null),
            La(4, 4, ja.bind(null, e, t), n)
          );
        }
        function Ba() {}
        function Wa(t, e) {
          var n = xa();
          e = void 0 === e ? null : e;
          var r = n.memoizedState;
          return null !== r && null !== e && ma(e, r[1])
            ? r[0]
            : ((n.memoizedState = [t, e]), t);
        }
        function Ha(t, e) {
          var n = xa();
          e = void 0 === e ? null : e;
          var r = n.memoizedState;
          return null !== r && null !== e && ma(e, r[1])
            ? r[0]
            : ((t = t()), (n.memoizedState = [t, e]), t);
        }
        function qa(t, e) {
          var n = ye;
          (ye = 0 !== n && 4 > n ? n : 4), t(!0);
          var r = aa.transition;
          aa.transition = {};
          try {
            t(!1), e();
          } finally {
            (ye = n), (aa.transition = r);
          }
        }
        function $a() {
          return xa().memoizedState;
        }
        function Ua(t, e, n) {
          var r = Wl(t);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            Ka(t)
              ? Ya(e, n)
              : (Xa(t, e, n),
                null !== (t = Hl(t, r, (n = Bl()))) && Ga(t, e, r));
        }
        function Qa(t, e, n) {
          var r = Wl(t),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Ka(t)) Ya(e, i);
          else {
            Xa(t, e, i);
            var o = t.alternate;
            if (
              0 === t.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = e.lastRenderedReducer)
            )
              try {
                var a = e.lastRenderedState,
                  s = o(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), or(s, a)))
                  return;
              } catch (t) {}
            null !== (t = Hl(t, r, (n = Bl()))) && Ga(t, e, r);
          }
        }
        function Ka(t) {
          var e = t.alternate;
          return t === la || (null !== e && e === la);
        }
        function Ya(t, e) {
          ha = da = !0;
          var n = t.pending;
          null === n ? (e.next = e) : ((e.next = n.next), (n.next = e)),
            (t.pending = e);
        }
        function Xa(t, e, n) {
          null !== bl && 0 != (1 & t.mode) && 0 == (2 & ml)
            ? (null === (t = e.interleaved)
                ? ((n.next = n), null === Gi ? (Gi = [e]) : Gi.push(e))
                : ((n.next = t.next), (t.next = n)),
              (e.interleaved = n))
            : (null === (t = e.pending)
                ? (n.next = n)
                : ((n.next = t.next), (t.next = n)),
              (e.pending = n));
        }
        function Ga(t, e, n) {
          if (0 != (4194240 & n)) {
            var r = e.lanes;
            (n |= r &= t.pendingLanes), (e.lanes = n), be(t, n);
          }
        }
        var Za = {
            readContext: Xi,
            useCallback: ga,
            useContext: ga,
            useEffect: ga,
            useImperativeHandle: ga,
            useInsertionEffect: ga,
            useLayoutEffect: ga,
            useMemo: ga,
            useReducer: ga,
            useRef: ga,
            useState: ga,
            useDebugValue: ga,
            useDeferredValue: ga,
            useTransition: ga,
            useMutableSource: ga,
            useSyncExternalStore: ga,
            useId: ga,
            unstable_isNewReconciler: !1,
          },
          Ja = {
            readContext: Xi,
            useCallback: function (t, e) {
              return (va().memoizedState = [t, void 0 === e ? null : e]), t;
            },
            useContext: Xi,
            useEffect: za,
            useImperativeHandle: function (t, e, n) {
              return (
                (n = null != n ? n.concat([t]) : null),
                Aa(4194308, 4, ja.bind(null, e, t), n)
              );
            },
            useLayoutEffect: function (t, e) {
              return Aa(4194308, 4, t, e);
            },
            useInsertionEffect: function (t, e) {
              return Aa(4, 2, t, e);
            },
            useMemo: function (t, e) {
              var n = va();
              return (
                (e = void 0 === e ? null : e),
                (t = t()),
                (n.memoizedState = [t, e]),
                t
              );
            },
            useReducer: function (t, e, n) {
              var r = va();
              return (
                (e = void 0 !== n ? n(e) : e),
                (r.memoizedState = r.baseState = e),
                (t = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: t,
                  lastRenderedState: e,
                }),
                (r.queue = t),
                (t = t.dispatch = Ua.bind(null, la, t)),
                [r.memoizedState, t]
              );
            },
            useRef: function (t) {
              return (t = { current: t }), (va().memoizedState = t);
            },
            useState: Da,
            useDebugValue: Ba,
            useDeferredValue: function (t) {
              var e = Da(t),
                n = e[0],
                r = e[1];
              return (
                za(
                  function () {
                    var e = aa.transition;
                    aa.transition = {};
                    try {
                      r(t);
                    } finally {
                      aa.transition = e;
                    }
                  },
                  [t]
                ),
                n
              );
            },
            useTransition: function () {
              var t = Da(!1),
                e = t[0];
              return (
                (t = qa.bind(null, t[1])), (va().memoizedState = t), [e, t]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (t, e, n) {
              var r = la,
                i = va();
              if (Do) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = e()), null === bl)) throw Error(o(349));
                0 != (30 & sa) || Pa(r, e, n);
              }
              i.memoizedState = n;
              var a = { value: n, getSnapshot: e };
              return (
                (i.queue = a),
                za(Ca.bind(null, r, a, t), [t]),
                (r.flags |= 2048),
                Ta(9, Ea.bind(null, r, a, n, e), void 0, null),
                n
              );
            },
            useId: function () {
              var t = va(),
                e = bl.identifierPrefix;
              if (Do) {
                var n = ko;
                (e =
                  ':' +
                  e +
                  'R' +
                  (n = (wo & ~(1 << (32 - ae(wo) - 1))).toString(32) + n)),
                  0 < (n = fa++) && (e += 'H' + n.toString(32)),
                  (e += ':');
              } else e = ':' + e + 'r' + (n = pa++).toString(32) + ':';
              return (t.memoizedState = e);
            },
            unstable_isNewReconciler: !1,
          },
          ts = {
            readContext: Xi,
            useCallback: Wa,
            useContext: Xi,
            useEffect: Ia,
            useImperativeHandle: Va,
            useInsertionEffect: Na,
            useLayoutEffect: Fa,
            useMemo: Ha,
            useReducer: wa,
            useRef: Ra,
            useState: function () {
              return wa(_a);
            },
            useDebugValue: Ba,
            useDeferredValue: function (t) {
              var e = wa(_a),
                n = e[0],
                r = e[1];
              return (
                Ia(
                  function () {
                    var e = aa.transition;
                    aa.transition = {};
                    try {
                      r(t);
                    } finally {
                      aa.transition = e;
                    }
                  },
                  [t]
                ),
                n
              );
            },
            useTransition: function () {
              return [wa(_a)[0], xa().memoizedState];
            },
            useMutableSource: Sa,
            useSyncExternalStore: Ma,
            useId: $a,
            unstable_isNewReconciler: !1,
          },
          es = {
            readContext: Xi,
            useCallback: Wa,
            useContext: Xi,
            useEffect: Ia,
            useImperativeHandle: Va,
            useInsertionEffect: Na,
            useLayoutEffect: Fa,
            useMemo: Ha,
            useReducer: ka,
            useRef: Ra,
            useState: function () {
              return ka(_a);
            },
            useDebugValue: Ba,
            useDeferredValue: function (t) {
              var e = ka(_a),
                n = e[0],
                r = e[1];
              return (
                Ia(
                  function () {
                    var e = aa.transition;
                    aa.transition = {};
                    try {
                      r(t);
                    } finally {
                      aa.transition = e;
                    }
                  },
                  [t]
                ),
                n
              );
            },
            useTransition: function () {
              return [ka(_a)[0], xa().memoizedState];
            },
            useMutableSource: Sa,
            useSyncExternalStore: Ma,
            useId: $a,
            unstable_isNewReconciler: !1,
          };
        function ns(t, e) {
          try {
            var n = '',
              r = e;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (t) {
            i = '\nError generating stack: ' + t.message + '\n' + t.stack;
          }
          return { value: t, source: e, stack: i };
        }
        function rs(t, e) {
          try {
            console.error(e.value);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
        }
        var is,
          os,
          as,
          ss = 'function' == typeof WeakMap ? WeakMap : Map;
        function ls(t, e, n) {
          ((n = eo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = e.value;
          return (
            (n.callback = function () {
              Tl || ((Tl = !0), (Rl = r)), rs(0, e);
            }),
            n
          );
        }
        function us(t, e, n) {
          (n = eo(-1, n)).tag = 3;
          var r = t.type.getDerivedStateFromError;
          if ('function' == typeof r) {
            var i = e.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                rs(0, e);
              });
          }
          var o = t.stateNode;
          return (
            null !== o &&
              'function' == typeof o.componentDidCatch &&
              (n.callback = function () {
                rs(0, e),
                  'function' != typeof r &&
                    (null === Al ? (Al = new Set([this])) : Al.add(this));
                var t = e.stack;
                this.componentDidCatch(e.value, {
                  componentStack: null !== t ? t : '',
                });
              }),
            n
          );
        }
        function cs(t, e, n) {
          var r = t.pingCache;
          if (null === r) {
            r = t.pingCache = new ss();
            var i = new Set();
            r.set(e, i);
          } else void 0 === (i = r.get(e)) && ((i = new Set()), r.set(e, i));
          i.has(n) || (i.add(n), (t = fu.bind(null, t, e, n)), e.then(t, t));
        }
        function ds(t) {
          do {
            var e;
            if (
              ((e = 13 === t.tag) &&
                (e = null === (e = t.memoizedState) || null !== e.dehydrated),
              e)
            )
              return t;
            t = t.return;
          } while (null !== t);
          return null;
        }
        function hs(t, e, n, r, i) {
          return 0 == (1 & t.mode)
            ? (t === e
                ? (t.flags |= 65536)
                : ((t.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((e = eo(-1, 1)).tag = 2), no(n, e))),
                  (n.lanes |= 1)),
              t)
            : ((t.flags |= 65536), (t.lanes = i), t);
        }
        function fs(t, e) {
          if (!Do)
            switch (t.tailMode) {
              case 'hidden':
                e = t.tail;
                for (var n = null; null !== e; )
                  null !== e.alternate && (n = e), (e = e.sibling);
                null === n ? (t.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = t.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? e || null === t.tail
                    ? (t.tail = null)
                    : (t.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ps(t) {
          var e = null !== t.alternate && t.alternate.child === t.child,
            n = 0,
            r = 0;
          if (e)
            for (var i = t.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = t),
                (i = i.sibling);
          else
            for (i = t.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = t),
                (i = i.sibling);
          return (t.subtreeFlags |= r), (t.childLanes = n), e;
        }
        function gs(t, e, n) {
          var r = e.pendingProps;
          switch ((Eo(e), e.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ps(e), null;
            case 1:
            case 17:
              return Oi(e.type) && Di(), ps(e), null;
            case 3:
              return (
                (r = e.stateNode),
                Zo(),
                wi(Pi),
                wi(Mi),
                ia(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== t && null !== t.child) ||
                  (No(e)
                    ? (e.flags |= 4)
                    : null === t ||
                      (t.memoizedState.isDehydrated && 0 == (256 & e.flags)) ||
                      ((e.flags |= 1024),
                      null !== To && (Kl(To), (To = null)))),
                ps(e),
                null
              );
            case 5:
              ta(e);
              var i = Xo(Yo.current);
              if (((n = e.type), null !== t && null != e.stateNode))
                os(t, e, n, r),
                  t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
              else {
                if (!r) {
                  if (null === e.stateNode) throw Error(o(166));
                  return ps(e), null;
                }
                if (((t = Xo(Qo.current)), No(e))) {
                  (r = e.stateNode), (n = e.type);
                  var a = e.memoizedProps;
                  switch (
                    ((r[ui] = e), (r[ci] = a), (t = 0 != (1 & e.mode)), n)
                  ) {
                    case 'dialog':
                      Nr('cancel', r), Nr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Nr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (i = 0; i < Ar.length; i++) Nr(Ar[i], r);
                      break;
                    case 'source':
                      Nr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Nr('error', r), Nr('load', r);
                      break;
                    case 'details':
                      Nr('toggle', r);
                      break;
                    case 'input':
                      X(r, a), Nr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!a.multiple }),
                        Nr('invalid', r);
                      break;
                    case 'textarea':
                      it(r, a), Nr('invalid', r);
                  }
                  for (var l in (yt(n, a), (i = null), a))
                    if (a.hasOwnProperty(l)) {
                      var u = a[l];
                      'children' === l
                        ? 'string' == typeof u
                          ? r.textContent !== u &&
                            (Xr(r.textContent, u, t), (i = ['children', u]))
                          : 'number' == typeof u &&
                            r.textContent !== '' + u &&
                            (Xr(r.textContent, u, t),
                            (i = ['children', '' + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          'onScroll' === l &&
                          Nr('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      U(r), J(r, a, !0);
                      break;
                    case 'textarea':
                      U(r), at(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' == typeof a.onClick && (r.onclick = Gr);
                  }
                  (r = i), (e.updateQueue = r), null !== r && (e.flags |= 4);
                } else {
                  (l = 9 === i.nodeType ? i : i.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === t && (t = st(n)),
                    'http://www.w3.org/1999/xhtml' === t
                      ? 'script' === n
                        ? (((t = l.createElement('div')).innerHTML =
                            '<script></script>'),
                          (t = t.removeChild(t.firstChild)))
                        : 'string' == typeof r.is
                        ? (t = l.createElement(n, { is: r.is }))
                        : ((t = l.createElement(n)),
                          'select' === n &&
                            ((l = t),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (t = l.createElementNS(t, n)),
                    (t[ui] = e),
                    (t[ci] = r),
                    is(t, e),
                    (e.stateNode = t);
                  t: {
                    switch (((l = vt(n, r)), n)) {
                      case 'dialog':
                        Nr('cancel', t), Nr('close', t), (i = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Nr('load', t), (i = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (i = 0; i < Ar.length; i++) Nr(Ar[i], t);
                        i = r;
                        break;
                      case 'source':
                        Nr('error', t), (i = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Nr('error', t), Nr('load', t), (i = r);
                        break;
                      case 'details':
                        Nr('toggle', t), (i = r);
                        break;
                      case 'input':
                        X(t, r), (i = Y(t, r)), Nr('invalid', t);
                        break;
                      case 'option':
                      default:
                        i = r;
                        break;
                      case 'select':
                        (t._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = N({}, r, { value: void 0 })),
                          Nr('invalid', t);
                        break;
                      case 'textarea':
                        it(t, r), (i = rt(t, r)), Nr('invalid', t);
                    }
                    for (a in (yt(n, i), (u = i)))
                      if (u.hasOwnProperty(a)) {
                        var c = u[a];
                        'style' === a
                          ? mt(t, c)
                          : 'dangerouslySetInnerHTML' === a
                          ? null != (c = c ? c.__html : void 0) && dt(t, c)
                          : 'children' === a
                          ? 'string' == typeof c
                            ? ('textarea' !== n || '' !== c) && ht(t, c)
                            : 'number' == typeof c && ht(t, '' + c)
                          : 'suppressContentEditableWarning' !== a &&
                            'suppressHydrationWarning' !== a &&
                            'autoFocus' !== a &&
                            (s.hasOwnProperty(a)
                              ? null != c && 'onScroll' === a && Nr('scroll', t)
                              : null != c && v(t, a, c, l));
                      }
                    switch (n) {
                      case 'input':
                        U(t), J(t, r, !1);
                        break;
                      case 'textarea':
                        U(t), at(t);
                        break;
                      case 'option':
                        null != r.value &&
                          t.setAttribute('value', '' + q(r.value));
                        break;
                      case 'select':
                        (t.multiple = !!r.multiple),
                          null != (a = r.value)
                            ? nt(t, !!r.multiple, a, !1)
                            : null != r.defaultValue &&
                              nt(t, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' == typeof i.onClick && (t.onclick = Gr);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break t;
                      case 'img':
                        r = !0;
                        break t;
                      default:
                        r = !1;
                    }
                  }
                  r && (e.flags |= 4);
                }
                null !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
              }
              return ps(e), null;
            case 6:
              if (t && null != e.stateNode) as(0, e, t.memoizedProps, r);
              else {
                if ('string' != typeof r && null === e.stateNode)
                  throw Error(o(166));
                if (((n = Xo(Yo.current)), Xo(Qo.current), No(e))) {
                  if (
                    ((r = e.stateNode),
                    (n = e.memoizedProps),
                    (r[ui] = e),
                    (a = r.nodeValue !== n) && null !== (t = Co))
                  )
                    switch (((l = 0 != (1 & t.mode)), t.tag)) {
                      case 3:
                        Xr(r.nodeValue, n, l);
                        break;
                      case 5:
                        !0 !== t.memoizedProps[void 0] && Xr(r.nodeValue, n, l);
                    }
                  a && (e.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[ui] = e),
                    (e.stateNode = r);
              }
              return ps(e), null;
            case 13:
              if (
                (wi(ea),
                (r = e.memoizedState),
                Do && null !== Oo && 0 != (1 & e.mode) && 0 == (128 & e.flags))
              ) {
                for (r = Oo; r; ) r = ai(r.nextSibling);
                return Fo(), (e.flags |= 98560), e;
              }
              if (null !== r && null !== r.dehydrated) {
                if (((r = No(e)), null === t)) {
                  if (!r) throw Error(o(318));
                  if (
                    !(r = null !== (r = e.memoizedState) ? r.dehydrated : null)
                  )
                    throw Error(o(317));
                  r[ui] = e;
                } else
                  Fo(),
                    0 == (128 & e.flags) && (e.memoizedState = null),
                    (e.flags |= 4);
                return ps(e), null;
              }
              return (
                null !== To && (Kl(To), (To = null)),
                0 != (128 & e.flags)
                  ? ((e.lanes = n), e)
                  : ((r = null !== r),
                    (n = !1),
                    null === t ? No(e) : (n = null !== t.memoizedState),
                    r &&
                      !n &&
                      ((e.child.flags |= 8192),
                      0 != (1 & e.mode) &&
                        (null === t || 0 != (1 & ea.current)
                          ? 0 === wl && (wl = 3)
                          : ru())),
                    null !== e.updateQueue && (e.flags |= 4),
                    ps(e),
                    null)
              );
            case 4:
              return (
                Zo(), null === t && Vr(e.stateNode.containerInfo), ps(e), null
              );
            case 10:
              return Qi(e.type._context), ps(e), null;
            case 19:
              if ((wi(ea), null === (a = e.memoizedState))) return ps(e), null;
              if (((r = 0 != (128 & e.flags)), null === (l = a.rendering)))
                if (r) fs(a, !1);
                else {
                  if (0 !== wl || (null !== t && 0 != (128 & t.flags)))
                    for (t = e.child; null !== t; ) {
                      if (null !== (l = na(t))) {
                        for (
                          e.flags |= 128,
                            fs(a, !1),
                            null !== (r = l.updateQueue) &&
                              ((e.updateQueue = r), (e.flags |= 4)),
                            e.subtreeFlags = 0,
                            r = n,
                            n = e.child;
                          null !== n;

                        )
                          (t = r),
                            ((a = n).flags &= 14680066),
                            null === (l = a.alternate)
                              ? ((a.childLanes = 0),
                                (a.lanes = t),
                                (a.child = null),
                                (a.subtreeFlags = 0),
                                (a.memoizedProps = null),
                                (a.memoizedState = null),
                                (a.updateQueue = null),
                                (a.dependencies = null),
                                (a.stateNode = null))
                              : ((a.childLanes = l.childLanes),
                                (a.lanes = l.lanes),
                                (a.child = l.child),
                                (a.subtreeFlags = 0),
                                (a.deletions = null),
                                (a.memoizedProps = l.memoizedProps),
                                (a.memoizedState = l.memoizedState),
                                (a.updateQueue = l.updateQueue),
                                (a.type = l.type),
                                (t = l.dependencies),
                                (a.dependencies =
                                  null === t
                                    ? null
                                    : {
                                        lanes: t.lanes,
                                        firstContext: t.firstContext,
                                      })),
                            (n = n.sibling);
                        return ki(ea, (1 & ea.current) | 2), e.child;
                      }
                      t = t.sibling;
                    }
                  null !== a.tail &&
                    Gt() > Dl &&
                    ((e.flags |= 128),
                    (r = !0),
                    fs(a, !1),
                    (e.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (t = na(l))) {
                    if (
                      ((e.flags |= 128),
                      (r = !0),
                      null !== (n = t.updateQueue) &&
                        ((e.updateQueue = n), (e.flags |= 4)),
                      fs(a, !0),
                      null === a.tail &&
                        'hidden' === a.tailMode &&
                        !l.alternate &&
                        !Do)
                    )
                      return ps(e), null;
                  } else
                    2 * Gt() - a.renderingStartTime > Dl &&
                      1073741824 !== n &&
                      ((e.flags |= 128),
                      (r = !0),
                      fs(a, !1),
                      (e.lanes = 4194304));
                a.isBackwards
                  ? ((l.sibling = e.child), (e.child = l))
                  : (null !== (n = a.last) ? (n.sibling = l) : (e.child = l),
                    (a.last = l));
              }
              return null !== a.tail
                ? ((e = a.tail),
                  (a.rendering = e),
                  (a.tail = e.sibling),
                  (a.renderingStartTime = Gt()),
                  (e.sibling = null),
                  (n = ea.current),
                  ki(ea, r ? (1 & n) | 2 : 1 & n),
                  e)
                : (ps(e), null);
            case 22:
            case 23:
              return (
                Jl(),
                (r = null !== e.memoizedState),
                null !== t &&
                  (null !== t.memoizedState) !== r &&
                  (e.flags |= 8192),
                r && 0 != (1 & e.mode)
                  ? 0 != (1073741824 & xl) &&
                    (ps(e), 6 & e.subtreeFlags && (e.flags |= 8192))
                  : ps(e),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, e.tag));
        }
        (is = function (t, e) {
          for (var n = e.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (os = function (t, e, n, r) {
            var i = t.memoizedProps;
            if (i !== r) {
              (t = e.stateNode), Xo(Qo.current);
              var o,
                a = null;
              switch (n) {
                case 'input':
                  (i = Y(t, i)), (r = Y(t, r)), (a = []);
                  break;
                case 'select':
                  (i = N({}, i, { value: void 0 })),
                    (r = N({}, r, { value: void 0 })),
                    (a = []);
                  break;
                case 'textarea':
                  (i = rt(t, i)), (r = rt(t, r)), (a = []);
                  break;
                default:
                  'function' != typeof i.onClick &&
                    'function' == typeof r.onClick &&
                    (t.onclick = Gr);
              }
              for (c in (yt(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ('style' === c) {
                    var l = i[c];
                    for (o in l)
                      l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (s.hasOwnProperty(c)
                        ? a || (a = [])
                        : (a = a || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ('style' === c)
                    if (l) {
                      for (o in l)
                        !l.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ''));
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          l[o] !== u[o] &&
                          (n || (n = {}), (n[o] = u[o]));
                    } else n || (a || (a = []), a.push(c, n)), (n = u);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (a = a || []).push(c, u))
                      : 'children' === c
                      ? ('string' != typeof u && 'number' != typeof u) ||
                        (a = a || []).push(c, '' + u)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && 'onScroll' === c && Nr('scroll', t),
                            a || l === u || (a = []))
                          : (a = a || []).push(c, u));
              }
              n && (a = a || []).push('style', n);
              var c = a;
              (e.updateQueue = c) && (e.flags |= 4);
            }
          }),
          (as = function (t, e, n, r) {
            n !== r && (e.flags |= 4);
          });
        var ms = x.ReactCurrentOwner,
          bs = !1;
        function ys(t, e, n, r) {
          e.child = null === t ? $o(e, null, n, r) : qo(e, t.child, n, r);
        }
        function vs(t, e, n, r, i) {
          n = n.render;
          var o = e.ref;
          return (
            Yi(e, i),
            (r = ba(t, e, n, r, o, i)),
            (n = ya()),
            null === t || bs
              ? (Do && n && Po(e), (e.flags |= 1), ys(t, e, r, i), e.child)
              : ((e.updateQueue = t.updateQueue),
                (e.flags &= -2053),
                (t.lanes &= ~i),
                js(t, e, i))
          );
        }
        function xs(t, e, n, r, i) {
          if (null === t) {
            var o = n.type;
            return 'function' != typeof o ||
              xu(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((t = wu(n.type, null, r, e, e.mode, i)).ref = e.ref),
                (t.return = e),
                (e.child = t))
              : ((e.tag = 15), (e.type = o), _s(t, e, o, r, i));
          }
          if (((o = t.child), 0 == (t.lanes & i))) {
            var a = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ar)(a, r) &&
              t.ref === e.ref
            )
              return js(t, e, i);
          }
          return (
            (e.flags |= 1),
            ((t = _u(o, r)).ref = e.ref),
            (t.return = e),
            (e.child = t)
          );
        }
        function _s(t, e, n, r, i) {
          if (null !== t && ar(t.memoizedProps, r) && t.ref === e.ref) {
            if (((bs = !1), 0 == (t.lanes & i)))
              return (e.lanes = t.lanes), js(t, e, i);
            0 != (131072 & t.flags) && (bs = !0);
          }
          return Ss(t, e, n, r, i);
        }
        function ws(t, e, n) {
          var r = e.pendingProps,
            i = r.children,
            o = null !== t ? t.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 == (1 & e.mode))
              (e.memoizedState = { baseLanes: 0, cachePool: null }),
                ki(_l, xl),
                (xl |= n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (t = null !== o ? o.baseLanes | n : n),
                  (e.lanes = e.childLanes = 1073741824),
                  (e.memoizedState = { baseLanes: t, cachePool: null }),
                  (e.updateQueue = null),
                  ki(_l, xl),
                  (xl |= t),
                  null
                );
              (e.memoizedState = { baseLanes: 0, cachePool: null }),
                (r = null !== o ? o.baseLanes : n),
                ki(_l, xl),
                (xl |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (e.memoizedState = null))
              : (r = n),
              ki(_l, xl),
              (xl |= r);
          return ys(t, e, i, n), e.child;
        }
        function ks(t, e) {
          var n = e.ref;
          ((null === t && null !== n) || (null !== t && t.ref !== n)) &&
            ((e.flags |= 512), (e.flags |= 2097152));
        }
        function Ss(t, e, n, r, i) {
          var o = Oi(n) ? Ei : Mi.current;
          return (
            (o = Ci(e, o)),
            Yi(e, i),
            (n = ba(t, e, n, r, o, i)),
            (r = ya()),
            null === t || bs
              ? (Do && r && Po(e), (e.flags |= 1), ys(t, e, n, i), e.child)
              : ((e.updateQueue = t.updateQueue),
                (e.flags &= -2053),
                (t.lanes &= ~i),
                js(t, e, i))
          );
        }
        function Ms(t, e, n, r, i) {
          if (Oi(n)) {
            var o = !0;
            Ai(e);
          } else o = !1;
          if ((Yi(e, i), null === e.stateNode))
            null !== t &&
              ((t.alternate = null), (e.alternate = null), (e.flags |= 2)),
              ho(e, n, r),
              po(e, n, r, i),
              (r = !0);
          else if (null === t) {
            var a = e.stateNode,
              s = e.memoizedProps;
            a.props = s;
            var l = a.context,
              u = n.contextType;
            u =
              'object' == typeof u && null !== u
                ? Xi(u)
                : Ci(e, (u = Oi(n) ? Ei : Mi.current));
            var c = n.getDerivedStateFromProps,
              d =
                'function' == typeof c ||
                'function' == typeof a.getSnapshotBeforeUpdate;
            d ||
              ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
              ((s !== r || l !== u) && fo(e, a, r, u)),
              (Zi = !1);
            var h = e.memoizedState;
            (a.state = h),
              oo(e, r, a, i),
              (l = e.memoizedState),
              s !== r || h !== l || Pi.current || Zi
                ? ('function' == typeof c &&
                    (lo(e, n, c, r), (l = e.memoizedState)),
                  (s = Zi || co(e, n, s, r, h, l, u))
                    ? (d ||
                        ('function' != typeof a.UNSAFE_componentWillMount &&
                          'function' != typeof a.componentWillMount) ||
                        ('function' == typeof a.componentWillMount &&
                          a.componentWillMount(),
                        'function' == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      'function' == typeof a.componentDidMount &&
                        (e.flags |= 4194308))
                    : ('function' == typeof a.componentDidMount &&
                        (e.flags |= 4194308),
                      (e.memoizedProps = r),
                      (e.memoizedState = l)),
                  (a.props = r),
                  (a.state = l),
                  (a.context = u),
                  (r = s))
                : ('function' == typeof a.componentDidMount &&
                    (e.flags |= 4194308),
                  (r = !1));
          } else {
            (a = e.stateNode),
              to(t, e),
              (s = e.memoizedProps),
              (u = e.type === e.elementType ? s : Bi(e.type, s)),
              (a.props = u),
              (d = e.pendingProps),
              (h = a.context),
              (l =
                'object' == typeof (l = n.contextType) && null !== l
                  ? Xi(l)
                  : Ci(e, (l = Oi(n) ? Ei : Mi.current)));
            var f = n.getDerivedStateFromProps;
            (c =
              'function' == typeof f ||
              'function' == typeof a.getSnapshotBeforeUpdate) ||
              ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
              ((s !== d || h !== l) && fo(e, a, r, l)),
              (Zi = !1),
              (h = e.memoizedState),
              (a.state = h),
              oo(e, r, a, i);
            var p = e.memoizedState;
            s !== d || h !== p || Pi.current || Zi
              ? ('function' == typeof f &&
                  (lo(e, n, f, r), (p = e.memoizedState)),
                (u = Zi || co(e, n, u, r, h, p, l) || !1)
                  ? (c ||
                      ('function' != typeof a.UNSAFE_componentWillUpdate &&
                        'function' != typeof a.componentWillUpdate) ||
                      ('function' == typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, p, l),
                      'function' == typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, p, l)),
                    'function' == typeof a.componentDidUpdate && (e.flags |= 4),
                    'function' == typeof a.getSnapshotBeforeUpdate &&
                      (e.flags |= 1024))
                  : ('function' != typeof a.componentDidUpdate ||
                      (s === t.memoizedProps && h === t.memoizedState) ||
                      (e.flags |= 4),
                    'function' != typeof a.getSnapshotBeforeUpdate ||
                      (s === t.memoizedProps && h === t.memoizedState) ||
                      (e.flags |= 1024),
                    (e.memoizedProps = r),
                    (e.memoizedState = p)),
                (a.props = r),
                (a.state = p),
                (a.context = l),
                (r = u))
              : ('function' != typeof a.componentDidUpdate ||
                  (s === t.memoizedProps && h === t.memoizedState) ||
                  (e.flags |= 4),
                'function' != typeof a.getSnapshotBeforeUpdate ||
                  (s === t.memoizedProps && h === t.memoizedState) ||
                  (e.flags |= 1024),
                (r = !1));
          }
          return Ps(t, e, n, r, o, i);
        }
        function Ps(t, e, n, r, i, o) {
          ks(t, e);
          var a = 0 != (128 & e.flags);
          if (!r && !a) return i && Li(e, n, !1), js(t, e, o);
          (r = e.stateNode), (ms.current = e);
          var s =
            a && 'function' != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (e.flags |= 1),
            null !== t && a
              ? ((e.child = qo(e, t.child, null, o)),
                (e.child = qo(e, null, s, o)))
              : ys(t, e, s, o),
            (e.memoizedState = r.state),
            i && Li(e, n, !0),
            e.child
          );
        }
        function Es(t) {
          var e = t.stateNode;
          e.pendingContext
            ? Ti(0, e.pendingContext, e.pendingContext !== e.context)
            : e.context && Ti(0, e.context, !1),
            Go(t, e.containerInfo);
        }
        function Cs(t, e, n, r, i) {
          return Fo(), jo(i), (e.flags |= 256), ys(t, e, n, r), e.child;
        }
        var Os = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ds(t) {
          return { baseLanes: t, cachePool: null };
        }
        function Ts(t, e, n) {
          var r,
            i = e.pendingProps,
            a = ea.current,
            s = !1,
            l = 0 != (128 & e.flags);
          if (
            ((r = l) ||
              (r = (null === t || null !== t.memoizedState) && 0 != (2 & a)),
            r
              ? ((s = !0), (e.flags &= -129))
              : (null !== t && null === t.memoizedState) || (a |= 1),
            ki(ea, 1 & a),
            null === t)
          )
            return (
              zo(e),
              null !== (t = e.memoizedState) && null !== (t = t.dehydrated)
                ? (0 == (1 & e.mode)
                    ? (e.lanes = 1)
                    : '$!' === t.data
                    ? (e.lanes = 8)
                    : (e.lanes = 1073741824),
                  null)
                : ((a = i.children),
                  (t = i.fallback),
                  s
                    ? ((i = e.mode),
                      (s = e.child),
                      (a = { mode: 'hidden', children: a }),
                      0 == (1 & i) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = a))
                        : (s = Su(a, i, 0, null)),
                      (t = ku(t, i, n, null)),
                      (s.return = e),
                      (t.return = e),
                      (s.sibling = t),
                      (e.child = s),
                      (e.child.memoizedState = Ds(n)),
                      (e.memoizedState = Os),
                      t)
                    : Rs(e, a))
            );
          if (null !== (a = t.memoizedState)) {
            if (null !== (r = a.dehydrated)) {
              if (l)
                return 256 & e.flags
                  ? ((e.flags &= -257), zs(t, e, n, Error(o(422))))
                  : null !== e.memoizedState
                  ? ((e.child = t.child), (e.flags |= 128), null)
                  : ((s = i.fallback),
                    (a = e.mode),
                    (i = Su(
                      { mode: 'visible', children: i.children },
                      a,
                      0,
                      null
                    )),
                    ((s = ku(s, a, n, null)).flags |= 2),
                    (i.return = e),
                    (s.return = e),
                    (i.sibling = s),
                    (e.child = i),
                    0 != (1 & e.mode) && qo(e, t.child, null, n),
                    (e.child.memoizedState = Ds(n)),
                    (e.memoizedState = Os),
                    s);
              if (0 == (1 & e.mode)) e = zs(t, e, n, null);
              else if ('$!' === r.data) e = zs(t, e, n, Error(o(419)));
              else if (((i = 0 != (n & t.childLanes)), bs || i)) {
                if (null !== (i = bl)) {
                  switch (n & -n) {
                    case 4:
                      s = 2;
                      break;
                    case 16:
                      s = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      s = 32;
                      break;
                    case 536870912:
                      s = 268435456;
                      break;
                    default:
                      s = 0;
                  }
                  0 !== (i = 0 != (s & (i.suspendedLanes | n)) ? 0 : s) &&
                    i !== a.retryLane &&
                    ((a.retryLane = i), Hl(t, i, -1));
                }
                ru(), (e = zs(t, e, n, Error(o(421))));
              } else
                '$?' === r.data
                  ? ((e.flags |= 128),
                    (e.child = t.child),
                    (e = gu.bind(null, t)),
                    (r._reactRetry = e),
                    (e = null))
                  : ((n = a.treeContext),
                    (Oo = ai(r.nextSibling)),
                    (Co = e),
                    (Do = !0),
                    (To = null),
                    null !== n &&
                      ((vo[xo++] = wo),
                      (vo[xo++] = ko),
                      (vo[xo++] = _o),
                      (wo = n.id),
                      (ko = n.overflow),
                      (_o = e)),
                    ((e = Rs(e, e.pendingProps.children)).flags |= 4096));
              return e;
            }
            return s
              ? ((i = Ls(t, e, i.children, i.fallback, n)),
                (s = e.child),
                (a = t.child.memoizedState),
                (s.memoizedState =
                  null === a
                    ? Ds(n)
                    : { baseLanes: a.baseLanes | n, cachePool: null }),
                (s.childLanes = t.childLanes & ~n),
                (e.memoizedState = Os),
                i)
              : ((n = As(t, e, i.children, n)), (e.memoizedState = null), n);
          }
          return s
            ? ((i = Ls(t, e, i.children, i.fallback, n)),
              (s = e.child),
              (a = t.child.memoizedState),
              (s.memoizedState =
                null === a
                  ? Ds(n)
                  : { baseLanes: a.baseLanes | n, cachePool: null }),
              (s.childLanes = t.childLanes & ~n),
              (e.memoizedState = Os),
              i)
            : ((n = As(t, e, i.children, n)), (e.memoizedState = null), n);
        }
        function Rs(t, e) {
          return (
            ((e = Su(
              { mode: 'visible', children: e },
              t.mode,
              0,
              null
            )).return = t),
            (t.child = e)
          );
        }
        function As(t, e, n, r) {
          var i = t.child;
          return (
            (t = i.sibling),
            (n = _u(i, { mode: 'visible', children: n })),
            0 == (1 & e.mode) && (n.lanes = r),
            (n.return = e),
            (n.sibling = null),
            null !== t &&
              (null === (r = e.deletions)
                ? ((e.deletions = [t]), (e.flags |= 16))
                : r.push(t)),
            (e.child = n)
          );
        }
        function Ls(t, e, n, r, i) {
          var o = e.mode,
            a = (t = t.child).sibling,
            s = { mode: 'hidden', children: n };
          return (
            0 == (1 & o) && e.child !== t
              ? (((n = e.child).childLanes = 0),
                (n.pendingProps = s),
                (e.deletions = null))
              : ((n = _u(t, s)).subtreeFlags = 14680064 & t.subtreeFlags),
            null !== a ? (r = _u(a, r)) : ((r = ku(r, o, i, null)).flags |= 2),
            (r.return = e),
            (n.return = e),
            (n.sibling = r),
            (e.child = n),
            r
          );
        }
        function zs(t, e, n, r) {
          return (
            null !== r && jo(r),
            qo(e, t.child, null, n),
            ((t = Rs(e, e.pendingProps.children)).flags |= 2),
            (e.memoizedState = null),
            t
          );
        }
        function Is(t, e, n) {
          t.lanes |= e;
          var r = t.alternate;
          null !== r && (r.lanes |= e), Ki(t.return, e, n);
        }
        function Ns(t, e, n, r, i) {
          var o = t.memoizedState;
          null === o
            ? (t.memoizedState = {
                isBackwards: e,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((o.isBackwards = e),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = i));
        }
        function Fs(t, e, n) {
          var r = e.pendingProps,
            i = r.revealOrder,
            o = r.tail;
          if ((ys(t, e, r.children, n), 0 != (2 & (r = ea.current))))
            (r = (1 & r) | 2), (e.flags |= 128);
          else {
            if (null !== t && 0 != (128 & t.flags))
              t: for (t = e.child; null !== t; ) {
                if (13 === t.tag) null !== t.memoizedState && Is(t, n, e);
                else if (19 === t.tag) Is(t, n, e);
                else if (null !== t.child) {
                  (t.child.return = t), (t = t.child);
                  continue;
                }
                if (t === e) break t;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) break t;
                  t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
              }
            r &= 1;
          }
          if ((ki(ea, r), 0 == (1 & e.mode))) e.memoizedState = null;
          else
            switch (i) {
              case 'forwards':
                for (n = e.child, i = null; null !== n; )
                  null !== (t = n.alternate) && null === na(t) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = e.child), (e.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Ns(e, !1, i, n, o);
                break;
              case 'backwards':
                for (n = null, i = e.child, e.child = null; null !== i; ) {
                  if (null !== (t = i.alternate) && null === na(t)) {
                    e.child = i;
                    break;
                  }
                  (t = i.sibling), (i.sibling = n), (n = i), (i = t);
                }
                Ns(e, !0, n, null, o);
                break;
              case 'together':
                Ns(e, !1, null, null, void 0);
                break;
              default:
                e.memoizedState = null;
            }
          return e.child;
        }
        function js(t, e, n) {
          if (
            (null !== t && (e.dependencies = t.dependencies),
            (Sl |= e.lanes),
            0 == (n & e.childLanes))
          )
            return null;
          if (null !== t && e.child !== t.child) throw Error(o(153));
          if (null !== e.child) {
            for (
              n = _u((t = e.child), t.pendingProps), e.child = n, n.return = e;
              null !== t.sibling;

            )
              (t = t.sibling),
                ((n = n.sibling = _u(t, t.pendingProps)).return = e);
            n.sibling = null;
          }
          return e.child;
        }
        function Vs(t, e) {
          switch ((Eo(e), e.tag)) {
            case 1:
              return (
                Oi(e.type) && Di(),
                65536 & (t = e.flags)
                  ? ((e.flags = (-65537 & t) | 128), e)
                  : null
              );
            case 3:
              return (
                Zo(),
                wi(Pi),
                wi(Mi),
                ia(),
                0 != (65536 & (t = e.flags)) && 0 == (128 & t)
                  ? ((e.flags = (-65537 & t) | 128), e)
                  : null
              );
            case 5:
              return ta(e), null;
            case 13:
              if (
                (wi(ea),
                null !== (t = e.memoizedState) && null !== t.dehydrated)
              ) {
                if (null === e.alternate) throw Error(o(340));
                Fo();
              }
              return 65536 & (t = e.flags)
                ? ((e.flags = (-65537 & t) | 128), e)
                : null;
            case 19:
              return wi(ea), null;
            case 4:
              return Zo(), null;
            case 10:
              return Qi(e.type._context), null;
            case 22:
            case 23:
              return Jl(), null;
            default:
              return null;
          }
        }
        var Bs = !1,
          Ws = !1,
          Hs = 'function' == typeof WeakSet ? WeakSet : Set,
          qs = null;
        function $s(t, e) {
          var n = t.ref;
          if (null !== n)
            if ('function' == typeof n)
              try {
                n(null);
              } catch (n) {
                hu(t, e, n);
              }
            else n.current = null;
        }
        function Us(t, e, n) {
          try {
            n();
          } catch (n) {
            hu(t, e, n);
          }
        }
        var Qs = !1;
        function Ks(t, e, n) {
          var r = e.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & t) === t) {
                var o = i.destroy;
                (i.destroy = void 0), void 0 !== o && Us(e, n, o);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function Ys(t, e) {
          if (
            null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)
          ) {
            var n = (e = e.next);
            do {
              if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== e);
          }
        }
        function Xs(t) {
          var e = t.ref;
          if (null !== e) {
            var n = t.stateNode;
            t.tag, (t = n), 'function' == typeof e ? e(t) : (e.current = t);
          }
        }
        function Gs(t, e, n) {
          if (oe && 'function' == typeof oe.onCommitFiberUnmount)
            try {
              oe.onCommitFiberUnmount(ie, e);
            } catch (t) {}
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (null !== (t = e.updateQueue) && null !== (t = t.lastEffect)) {
                var r = (t = t.next);
                do {
                  var i = r,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 != (2 & i) || 0 != (4 & i)) &&
                      Us(e, n, o),
                    (r = r.next);
                } while (r !== t);
              }
              break;
            case 1:
              if (
                ($s(e, n),
                'function' == typeof (t = e.stateNode).componentWillUnmount)
              )
                try {
                  (t.props = e.memoizedProps),
                    (t.state = e.memoizedState),
                    t.componentWillUnmount();
                } catch (t) {
                  hu(e, n, t);
                }
              break;
            case 5:
              $s(e, n);
              break;
            case 4:
              il(t, e, n);
          }
        }
        function Zs(t) {
          var e = t.alternate;
          null !== e && ((t.alternate = null), Zs(e)),
            (t.child = null),
            (t.deletions = null),
            (t.sibling = null),
            5 === t.tag &&
              null !== (e = t.stateNode) &&
              (delete e[ui],
              delete e[ci],
              delete e[hi],
              delete e[fi],
              delete e[pi]),
            (t.stateNode = null),
            (t.return = null),
            (t.dependencies = null),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.pendingProps = null),
            (t.stateNode = null),
            (t.updateQueue = null);
        }
        function Js(t) {
          return 5 === t.tag || 3 === t.tag || 4 === t.tag;
        }
        function tl(t) {
          t: for (;;) {
            for (; null === t.sibling; ) {
              if (null === t.return || Js(t.return)) return null;
              t = t.return;
            }
            for (
              t.sibling.return = t.return, t = t.sibling;
              5 !== t.tag && 6 !== t.tag && 18 !== t.tag;

            ) {
              if (2 & t.flags) continue t;
              if (null === t.child || 4 === t.tag) continue t;
              (t.child.return = t), (t = t.child);
            }
            if (!(2 & t.flags)) return t.stateNode;
          }
        }
        function el(t) {
          t: {
            for (var e = t.return; null !== e; ) {
              if (Js(e)) break t;
              e = e.return;
            }
            throw Error(o(160));
          }
          var n = e;
          switch (n.tag) {
            case 5:
              (e = n.stateNode),
                32 & n.flags && (ht(e, ''), (n.flags &= -33)),
                rl(t, (n = tl(t)), e);
              break;
            case 3:
            case 4:
              (e = n.stateNode.containerInfo), nl(t, (n = tl(t)), e);
              break;
            default:
              throw Error(o(161));
          }
        }
        function nl(t, e, n) {
          var r = t.tag;
          if (5 === r || 6 === r)
            (t = t.stateNode),
              e
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(t, e)
                  : n.insertBefore(t, e)
                : (8 === n.nodeType
                    ? (e = n.parentNode).insertBefore(t, n)
                    : (e = n).appendChild(t),
                  null != (n = n._reactRootContainer) ||
                    null !== e.onclick ||
                    (e.onclick = Gr));
          else if (4 !== r && null !== (t = t.child))
            for (nl(t, e, n), t = t.sibling; null !== t; )
              nl(t, e, n), (t = t.sibling);
        }
        function rl(t, e, n) {
          var r = t.tag;
          if (5 === r || 6 === r)
            (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
          else if (4 !== r && null !== (t = t.child))
            for (rl(t, e, n), t = t.sibling; null !== t; )
              rl(t, e, n), (t = t.sibling);
        }
        function il(t, e, n) {
          for (var r, i, a = e, s = !1; ; ) {
            if (!s) {
              s = a.return;
              t: for (;;) {
                if (null === s) throw Error(o(160));
                switch (((r = s.stateNode), s.tag)) {
                  case 5:
                    i = !1;
                    break t;
                  case 3:
                  case 4:
                    (r = r.containerInfo), (i = !0);
                    break t;
                }
                s = s.return;
              }
              s = !0;
            }
            if (5 === a.tag || 6 === a.tag) {
              t: for (var l = t, u = a, c = n, d = u; ; )
                if ((Gs(l, d, c), null !== d.child && 4 !== d.tag))
                  (d.child.return = d), (d = d.child);
                else {
                  if (d === u) break t;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === u) break t;
                    d = d.return;
                  }
                  (d.sibling.return = d.return), (d = d.sibling);
                }
              i
                ? ((l = r),
                  (u = a.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(u)
                    : l.removeChild(u))
                : r.removeChild(a.stateNode);
            } else if (18 === a.tag)
              i
                ? ((l = r),
                  (u = a.stateNode),
                  8 === l.nodeType
                    ? oi(l.parentNode, u)
                    : 1 === l.nodeType && oi(l, u),
                  Be(l))
                : oi(r, a.stateNode);
            else if (4 === a.tag) {
              if (null !== a.child) {
                (r = a.stateNode.containerInfo),
                  (i = !0),
                  (a.child.return = a),
                  (a = a.child);
                continue;
              }
            } else if ((Gs(t, a, n), null !== a.child)) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === e) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === e) return;
              4 === (a = a.return).tag && (s = !1);
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
        }
        function ol(t, e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              return Ks(3, e, e.return), Ys(3, e), void Ks(5, e, e.return);
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              var n = e.stateNode;
              if (null != n) {
                var r = e.memoizedProps,
                  i = null !== t ? t.memoizedProps : r;
                t = e.type;
                var a = e.updateQueue;
                if (((e.updateQueue = null), null !== a)) {
                  for (
                    'input' === t &&
                      'radio' === r.type &&
                      null != r.name &&
                      G(n, r),
                      vt(t, i),
                      e = vt(t, r),
                      i = 0;
                    i < a.length;
                    i += 2
                  ) {
                    var s = a[i],
                      l = a[i + 1];
                    'style' === s
                      ? mt(n, l)
                      : 'dangerouslySetInnerHTML' === s
                      ? dt(n, l)
                      : 'children' === s
                      ? ht(n, l)
                      : v(n, s, l, e);
                  }
                  switch (t) {
                    case 'input':
                      Z(n, r);
                      break;
                    case 'textarea':
                      ot(n, r);
                      break;
                    case 'select':
                      (t = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (a = r.value)
                          ? nt(n, !!r.multiple, a, !1)
                          : t !== !!r.multiple &&
                            (null != r.defaultValue
                              ? nt(n, !!r.multiple, r.defaultValue, !0)
                              : nt(n, !!r.multiple, r.multiple ? [] : '', !1));
                  }
                  n[ci] = r;
                }
              }
              return;
            case 6:
              if (null === e.stateNode) throw Error(o(162));
              return void (e.stateNode.nodeValue = e.memoizedProps);
            case 3:
              return void (
                null !== t &&
                t.memoizedState.isDehydrated &&
                Be(e.stateNode.containerInfo)
              );
            case 13:
            case 19:
              return void (function (t) {
                var e = t.updateQueue;
                if (null !== e) {
                  t.updateQueue = null;
                  var n = t.stateNode;
                  null === n && (n = t.stateNode = new Hs()),
                    e.forEach(function (e) {
                      var r = mu.bind(null, t, e);
                      n.has(e) || (n.add(e), e.then(r, r));
                    });
                }
              })(e);
          }
          throw Error(o(163));
        }
        function al(t, e, n) {
          (qs = t), sl(t, e, n);
        }
        function sl(t, e, n) {
          for (var r = 0 != (1 & t.mode); null !== qs; ) {
            var i = qs,
              o = i.child;
            if (22 === i.tag && r) {
              var a = null !== i.memoizedState || Bs;
              if (!a) {
                var s = i.alternate,
                  l = (null !== s && null !== s.memoizedState) || Ws;
                s = Bs;
                var u = Ws;
                if (((Bs = a), (Ws = l) && !u))
                  for (qs = i; null !== qs; )
                    (l = (a = qs).child),
                      22 === a.tag && null !== a.memoizedState
                        ? cl(i)
                        : null !== l
                        ? ((l.return = a), (qs = l))
                        : cl(i);
                for (; null !== o; ) (qs = o), sl(o, e, n), (o = o.sibling);
                (qs = i), (Bs = s), (Ws = u);
              }
              ll(t);
            } else
              0 != (8772 & i.subtreeFlags) && null !== o
                ? ((o.return = i), (qs = o))
                : ll(t);
          }
        }
        function ll(t) {
          for (; null !== qs; ) {
            var e = qs;
            if (0 != (8772 & e.flags)) {
              var n = e.alternate;
              try {
                if (0 != (8772 & e.flags))
                  switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ws || Ys(5, e);
                      break;
                    case 1:
                      var r = e.stateNode;
                      if (4 & e.flags && !Ws)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            e.elementType === e.type
                              ? n.memoizedProps
                              : Bi(e.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var a = e.updateQueue;
                      null !== a && ao(e, a, r);
                      break;
                    case 3:
                      var s = e.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== e.child))
                          switch (e.child.tag) {
                            case 5:
                            case 1:
                              n = e.child.stateNode;
                          }
                        ao(e, s, n);
                      }
                      break;
                    case 5:
                      var l = e.stateNode;
                      if (null === n && 4 & e.flags) {
                        n = l;
                        var u = e.memoizedProps;
                        switch (e.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && n.focus();
                            break;
                          case 'img':
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                      break;
                    case 13:
                      if (null === e.memoizedState) {
                        var c = e.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var h = d.dehydrated;
                            null !== h && Be(h);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Ws || (512 & e.flags && Xs(e));
              } catch (t) {
                hu(e, e.return, t);
              }
            }
            if (e === t) {
              qs = null;
              break;
            }
            if (null !== (n = e.sibling)) {
              (n.return = e.return), (qs = n);
              break;
            }
            qs = e.return;
          }
        }
        function ul(t) {
          for (; null !== qs; ) {
            var e = qs;
            if (e === t) {
              qs = null;
              break;
            }
            var n = e.sibling;
            if (null !== n) {
              (n.return = e.return), (qs = n);
              break;
            }
            qs = e.return;
          }
        }
        function cl(t) {
          for (; null !== qs; ) {
            var e = qs;
            try {
              switch (e.tag) {
                case 0:
                case 11:
                case 15:
                  var n = e.return;
                  try {
                    Ys(4, e);
                  } catch (t) {
                    hu(e, n, t);
                  }
                  break;
                case 1:
                  var r = e.stateNode;
                  if ('function' == typeof r.componentDidMount) {
                    var i = e.return;
                    try {
                      r.componentDidMount();
                    } catch (t) {
                      hu(e, i, t);
                    }
                  }
                  var o = e.return;
                  try {
                    Xs(e);
                  } catch (t) {
                    hu(e, o, t);
                  }
                  break;
                case 5:
                  var a = e.return;
                  try {
                    Xs(e);
                  } catch (t) {
                    hu(e, a, t);
                  }
              }
            } catch (t) {
              hu(e, e.return, t);
            }
            if (e === t) {
              qs = null;
              break;
            }
            var s = e.sibling;
            if (null !== s) {
              (s.return = e.return), (qs = s);
              break;
            }
            qs = e.return;
          }
        }
        var dl,
          hl = Math.ceil,
          fl = x.ReactCurrentDispatcher,
          pl = x.ReactCurrentOwner,
          gl = x.ReactCurrentBatchConfig,
          ml = 0,
          bl = null,
          yl = null,
          vl = 0,
          xl = 0,
          _l = _i(0),
          wl = 0,
          kl = null,
          Sl = 0,
          Ml = 0,
          Pl = 0,
          El = null,
          Cl = null,
          Ol = 0,
          Dl = 1 / 0,
          Tl = !1,
          Rl = null,
          Al = null,
          Ll = !1,
          zl = null,
          Il = 0,
          Nl = 0,
          Fl = null,
          jl = -1,
          Vl = 0;
        function Bl() {
          return 0 != (6 & ml) ? Gt() : -1 !== jl ? jl : (jl = Gt());
        }
        function Wl(t) {
          return 0 == (1 & t.mode)
            ? 1
            : 0 != (2 & ml) && 0 !== vl
            ? vl & -vl
            : null !== Vi.transition
            ? (0 === Vl &&
                ((t = ue), 0 == (4194240 & (ue <<= 1)) && (ue = 64), (Vl = t)),
              Vl)
            : 0 !== (t = ye)
            ? t
            : (t = void 0 === (t = window.event) ? 16 : Ke(t.type));
        }
        function Hl(t, e, n) {
          if (50 < Nl) throw ((Nl = 0), (Fl = null), Error(o(185)));
          var r = ql(t, e);
          return null === r
            ? null
            : (me(r, e, n),
              (0 != (2 & ml) && r === bl) ||
                (r === bl &&
                  (0 == (2 & ml) && (Ml |= e), 4 === wl && Yl(r, vl)),
                $l(r, n),
                1 === e &&
                  0 === ml &&
                  0 == (1 & t.mode) &&
                  ((Dl = Gt() + 500), Ii && ji())),
              r);
        }
        function ql(t, e) {
          t.lanes |= e;
          var n = t.alternate;
          for (null !== n && (n.lanes |= e), n = t, t = t.return; null !== t; )
            (t.childLanes |= e),
              null !== (n = t.alternate) && (n.childLanes |= e),
              (n = t),
              (t = t.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function $l(t, e) {
          var n = t.callbackNode;
          !(function (t, e) {
            for (
              var n = t.suspendedLanes,
                r = t.pingedLanes,
                i = t.expirationTimes,
                o = t.pendingLanes;
              0 < o;

            ) {
              var a = 31 - ae(o),
                s = 1 << a,
                l = i[a];
              -1 === l
                ? (0 != (s & n) && 0 == (s & r)) || (i[a] = fe(s, e))
                : l <= e && (t.expiredLanes |= s),
                (o &= ~s);
            }
          })(t, e);
          var r = he(t, t === bl ? vl : 0);
          if (0 === r)
            null !== n && Kt(n),
              (t.callbackNode = null),
              (t.callbackPriority = 0);
          else if (((e = r & -r), t.callbackPriority !== e)) {
            if ((null != n && Kt(n), 1 === e))
              0 === t.tag
                ? (function (t) {
                    (Ii = !0), Fi(t);
                  })(Xl.bind(null, t))
                : Fi(Xl.bind(null, t)),
                ri(function () {
                  0 === ml && ji();
                }),
                (n = null);
            else {
              switch (ve(r)) {
                case 1:
                  n = Jt;
                  break;
                case 4:
                  n = te;
                  break;
                case 16:
                default:
                  n = ee;
                  break;
                case 536870912:
                  n = re;
              }
              n = bu(n, Ul.bind(null, t));
            }
            (t.callbackPriority = e), (t.callbackNode = n);
          }
        }
        function Ul(t, e) {
          if (((jl = -1), (Vl = 0), 0 != (6 & ml))) throw Error(o(327));
          var n = t.callbackNode;
          if (cu() && t.callbackNode !== n) return null;
          var r = he(t, t === bl ? vl : 0);
          if (0 === r) return null;
          if (0 != (30 & r) || 0 != (r & t.expiredLanes) || e) e = iu(t, r);
          else {
            e = r;
            var i = ml;
            ml |= 2;
            var a = nu();
            for ((bl === t && vl === e) || ((Dl = Gt() + 500), tu(t, e)); ; )
              try {
                au();
                break;
              } catch (e) {
                eu(t, e);
              }
            Ui(),
              (fl.current = a),
              (ml = i),
              null !== yl ? (e = 0) : ((bl = null), (vl = 0), (e = wl));
          }
          if (0 !== e) {
            if (
              (2 === e && 0 !== (i = pe(t)) && ((r = i), (e = Ql(t, i))),
              1 === e)
            )
              throw ((n = kl), tu(t, 0), Yl(t, r), $l(t, Gt()), n);
            if (6 === e) Yl(t, r);
            else {
              if (
                ((i = t.current.alternate),
                0 == (30 & r) &&
                  !(function (t) {
                    for (var e = t; ; ) {
                      if (16384 & e.flags) {
                        var n = e.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              o = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!or(o(), i)) return !1;
                            } catch (t) {
                              return !1;
                            }
                          }
                      }
                      if (((n = e.child), 16384 & e.subtreeFlags && null !== n))
                        (n.return = e), (e = n);
                      else {
                        if (e === t) break;
                        for (; null === e.sibling; ) {
                          if (null === e.return || e.return === t) return !0;
                          e = e.return;
                        }
                        (e.sibling.return = e.return), (e = e.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (e = iu(t, r)) &&
                    0 !== (a = pe(t)) &&
                    ((r = a), (e = Ql(t, a))),
                  1 === e))
              )
                throw ((n = kl), tu(t, 0), Yl(t, r), $l(t, Gt()), n);
              switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  uu(t, Cl);
                  break;
                case 3:
                  if (
                    (Yl(t, r),
                    (130023424 & r) === r && 10 < (e = Ol + 500 - Gt()))
                  ) {
                    if (0 !== he(t, 0)) break;
                    if (((i = t.suspendedLanes) & r) !== r) {
                      Bl(), (t.pingedLanes |= t.suspendedLanes & i);
                      break;
                    }
                    t.timeoutHandle = ti(uu.bind(null, t, Cl), e);
                    break;
                  }
                  uu(t, Cl);
                  break;
                case 4:
                  if ((Yl(t, r), (4194240 & r) === r)) break;
                  for (e = t.eventTimes, i = -1; 0 < r; ) {
                    var s = 31 - ae(r);
                    (a = 1 << s), (s = e[s]) > i && (i = s), (r &= ~a);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Gt() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * hl(r / 1960)) - r))
                  ) {
                    t.timeoutHandle = ti(uu.bind(null, t, Cl), r);
                    break;
                  }
                  uu(t, Cl);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return $l(t, Gt()), t.callbackNode === n ? Ul.bind(null, t) : null;
        }
        function Ql(t, e) {
          var n = El;
          return (
            t.current.memoizedState.isDehydrated && (tu(t, e).flags |= 256),
            2 !== (t = iu(t, e)) && ((e = Cl), (Cl = n), null !== e && Kl(e)),
            t
          );
        }
        function Kl(t) {
          null === Cl ? (Cl = t) : Cl.push.apply(Cl, t);
        }
        function Yl(t, e) {
          for (
            e &= ~Pl,
              e &= ~Ml,
              t.suspendedLanes |= e,
              t.pingedLanes &= ~e,
              t = t.expirationTimes;
            0 < e;

          ) {
            var n = 31 - ae(e),
              r = 1 << n;
            (t[n] = -1), (e &= ~r);
          }
        }
        function Xl(t) {
          if (0 != (6 & ml)) throw Error(o(327));
          cu();
          var e = he(t, 0);
          if (0 == (1 & e)) return $l(t, Gt()), null;
          var n = iu(t, e);
          if (0 !== t.tag && 2 === n) {
            var r = pe(t);
            0 !== r && ((e = r), (n = Ql(t, r)));
          }
          if (1 === n) throw ((n = kl), tu(t, 0), Yl(t, e), $l(t, Gt()), n);
          if (6 === n) throw Error(o(345));
          return (
            (t.finishedWork = t.current.alternate),
            (t.finishedLanes = e),
            uu(t, Cl),
            $l(t, Gt()),
            null
          );
        }
        function Gl(t, e) {
          var n = ml;
          ml |= 1;
          try {
            return t(e);
          } finally {
            0 === (ml = n) && ((Dl = Gt() + 500), Ii && ji());
          }
        }
        function Zl(t) {
          null !== zl && 0 === zl.tag && 0 == (6 & ml) && cu();
          var e = ml;
          ml |= 1;
          var n = gl.transition,
            r = ye;
          try {
            if (((gl.transition = null), (ye = 1), t)) return t();
          } finally {
            (ye = r), (gl.transition = n), 0 == (6 & (ml = e)) && ji();
          }
        }
        function Jl() {
          (xl = _l.current), wi(_l);
        }
        function tu(t, e) {
          (t.finishedWork = null), (t.finishedLanes = 0);
          var n = t.timeoutHandle;
          if ((-1 !== n && ((t.timeoutHandle = -1), ei(n)), null !== yl))
            for (n = yl.return; null !== n; ) {
              var r = n;
              switch ((Eo(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && Di();
                  break;
                case 3:
                  Zo(), wi(Pi), wi(Mi), ia();
                  break;
                case 5:
                  ta(r);
                  break;
                case 4:
                  Zo();
                  break;
                case 13:
                case 19:
                  wi(ea);
                  break;
                case 10:
                  Qi(r.type._context);
                  break;
                case 22:
                case 23:
                  Jl();
              }
              n = n.return;
            }
          if (
            ((bl = t),
            (yl = t = _u(t.current, null)),
            (vl = xl = e),
            (wl = 0),
            (kl = null),
            (Pl = Ml = Sl = 0),
            (Cl = El = null),
            null !== Gi)
          ) {
            for (e = 0; e < Gi.length; e++)
              if (null !== (r = (n = Gi[e]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  o = n.pending;
                if (null !== o) {
                  var a = o.next;
                  (o.next = i), (r.next = a);
                }
                n.pending = r;
              }
            Gi = null;
          }
          return t;
        }
        function eu(t, e) {
          for (;;) {
            var n = yl;
            try {
              if ((Ui(), (oa.current = Za), da)) {
                for (var r = la.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                da = !1;
              }
              if (
                ((sa = 0),
                (ca = ua = la = null),
                (ha = !1),
                (fa = 0),
                (pl.current = null),
                null === n || null === n.return)
              ) {
                (wl = 1), (kl = e), (yl = null);
                break;
              }
              t: {
                var a = t,
                  s = n.return,
                  l = n,
                  u = e;
                if (
                  ((e = vl),
                  (l.flags |= 32768),
                  null !== u &&
                    'object' == typeof u &&
                    'function' == typeof u.then)
                ) {
                  var c = u,
                    d = l,
                    h = d.tag;
                  if (0 == (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
                    var f = d.alternate;
                    f
                      ? ((d.updateQueue = f.updateQueue),
                        (d.memoizedState = f.memoizedState),
                        (d.lanes = f.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = ds(s);
                  if (null !== p) {
                    (p.flags &= -257),
                      hs(p, s, l, 0, e),
                      1 & p.mode && cs(a, c, e),
                      (u = c);
                    var g = (e = p).updateQueue;
                    if (null === g) {
                      var m = new Set();
                      m.add(u), (e.updateQueue = m);
                    } else g.add(u);
                    break t;
                  }
                  if (0 == (1 & e)) {
                    cs(a, c, e), ru();
                    break t;
                  }
                  u = Error(o(426));
                } else if (Do && 1 & l.mode) {
                  var b = ds(s);
                  if (null !== b) {
                    0 == (65536 & b.flags) && (b.flags |= 256),
                      hs(b, s, l, 0, e),
                      jo(u);
                    break t;
                  }
                }
                (a = u),
                  4 !== wl && (wl = 2),
                  null === El ? (El = [a]) : El.push(a),
                  (u = ns(u, l)),
                  (l = s);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (e &= -e),
                        (l.lanes |= e),
                        io(l, ls(0, u, e));
                      break t;
                    case 1:
                      a = u;
                      var y = l.type,
                        v = l.stateNode;
                      if (
                        0 == (128 & l.flags) &&
                        ('function' == typeof y.getDerivedStateFromError ||
                          (null !== v &&
                            'function' == typeof v.componentDidCatch &&
                            (null === Al || !Al.has(v))))
                      ) {
                        (l.flags |= 65536),
                          (e &= -e),
                          (l.lanes |= e),
                          io(l, us(l, a, e));
                        break t;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              lu(n);
            } catch (t) {
              (e = t), yl === n && null !== n && (yl = n = n.return);
              continue;
            }
            break;
          }
        }
        function nu() {
          var t = fl.current;
          return (fl.current = Za), null === t ? Za : t;
        }
        function ru() {
          (0 !== wl && 3 !== wl && 2 !== wl) || (wl = 4),
            null === bl ||
              (0 == (268435455 & Sl) && 0 == (268435455 & Ml)) ||
              Yl(bl, vl);
        }
        function iu(t, e) {
          var n = ml;
          ml |= 2;
          var r = nu();
          for ((bl === t && vl === e) || tu(t, e); ; )
            try {
              ou();
              break;
            } catch (e) {
              eu(t, e);
            }
          if ((Ui(), (ml = n), (fl.current = r), null !== yl))
            throw Error(o(261));
          return (bl = null), (vl = 0), wl;
        }
        function ou() {
          for (; null !== yl; ) su(yl);
        }
        function au() {
          for (; null !== yl && !Yt(); ) su(yl);
        }
        function su(t) {
          var e = dl(t.alternate, t, xl);
          (t.memoizedProps = t.pendingProps),
            null === e ? lu(t) : (yl = e),
            (pl.current = null);
        }
        function lu(t) {
          var e = t;
          do {
            var n = e.alternate;
            if (((t = e.return), 0 == (32768 & e.flags))) {
              if (null !== (n = gs(n, e, xl))) return void (yl = n);
            } else {
              if (null !== (n = Vs(n, e)))
                return (n.flags &= 32767), void (yl = n);
              if (null === t) return (wl = 6), void (yl = null);
              (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
            }
            if (null !== (e = e.sibling)) return void (yl = e);
            yl = e = t;
          } while (null !== e);
          0 === wl && (wl = 5);
        }
        function uu(t, e) {
          var n = ye,
            r = gl.transition;
          try {
            (gl.transition = null),
              (ye = 1),
              (function (t, e, n) {
                do {
                  cu();
                } while (null !== zl);
                if (0 != (6 & ml)) throw Error(o(327));
                var r = t.finishedWork,
                  i = t.finishedLanes;
                if (null === r) return null;
                if (
                  ((t.finishedWork = null),
                  (t.finishedLanes = 0),
                  r === t.current)
                )
                  throw Error(o(177));
                (t.callbackNode = null), (t.callbackPriority = 0);
                var a = r.lanes | r.childLanes;
                if (
                  ((function (t, e) {
                    var n = t.pendingLanes & ~e;
                    (t.pendingLanes = e),
                      (t.suspendedLanes = 0),
                      (t.pingedLanes = 0),
                      (t.expiredLanes &= e),
                      (t.mutableReadLanes &= e),
                      (t.entangledLanes &= e),
                      (e = t.entanglements);
                    var r = t.eventTimes;
                    for (t = t.expirationTimes; 0 < n; ) {
                      var i = 31 - ae(n),
                        o = 1 << i;
                      (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~o);
                    }
                  })(t, a),
                  t === bl && ((yl = bl = null), (vl = 0)),
                  (0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags)) ||
                    Ll ||
                    ((Ll = !0),
                    bu(ee, function () {
                      return cu(), null;
                    })),
                  (a = 0 != (15990 & r.flags)),
                  0 != (15990 & r.subtreeFlags) || a)
                ) {
                  (a = gl.transition), (gl.transition = null);
                  var s = ye;
                  ye = 1;
                  var l = ml;
                  (ml |= 4),
                    (pl.current = null),
                    (function (t, e) {
                      if (dr((t = cr()))) {
                        if ('selectionStart' in t)
                          var n = {
                            start: t.selectionStart,
                            end: t.selectionEnd,
                          };
                        else
                          t: {
                            var r =
                              (n =
                                ((n = t.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                a = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, a.nodeType;
                              } catch (t) {
                                n = null;
                                break t;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                h = t,
                                f = null;
                              e: for (;;) {
                                for (
                                  var p;
                                  h !== n ||
                                    (0 !== i && 3 !== h.nodeType) ||
                                    (l = s + i),
                                    h !== a ||
                                      (0 !== r && 3 !== h.nodeType) ||
                                      (u = s + r),
                                    3 === h.nodeType &&
                                      (s += h.nodeValue.length),
                                    null !== (p = h.firstChild);

                                )
                                  (f = h), (h = p);
                                for (;;) {
                                  if (h === t) break e;
                                  if (
                                    (f === n && ++c === i && (l = s),
                                    f === a && ++d === r && (u = s),
                                    null !== (p = h.nextSibling))
                                  )
                                    break;
                                  f = (h = f).parentNode;
                                }
                                h = p;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        Zr = { focusedElem: t, selectionRange: n }, qs = e;
                        null !== qs;

                      )
                        if (
                          ((t = (e = qs).child),
                          0 != (1028 & e.subtreeFlags) && null !== t)
                        )
                          (t.return = e), (qs = t);
                        else
                          for (; null !== qs; ) {
                            e = qs;
                            try {
                              var g = e.alternate;
                              if (0 != (1024 & e.flags))
                                switch (e.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== g) {
                                      var m = g.memoizedProps,
                                        b = g.memoizedState,
                                        y = e.stateNode,
                                        v = y.getSnapshotBeforeUpdate(
                                          e.elementType === e.type
                                            ? m
                                            : Bi(e.type, m),
                                          b
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = v;
                                    }
                                    break;
                                  case 3:
                                    var x = e.stateNode.containerInfo;
                                    if (1 === x.nodeType) x.textContent = '';
                                    else if (9 === x.nodeType) {
                                      var _ = x.body;
                                      null != _ && (_.textContent = '');
                                    }
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (t) {
                              hu(e, e.return, t);
                            }
                            if (null !== (t = e.sibling)) {
                              (t.return = e.return), (qs = t);
                              break;
                            }
                            qs = e.return;
                          }
                      (g = Qs), (Qs = !1);
                    })(t, r),
                    (function (t, e) {
                      for (qs = e; null !== qs; ) {
                        var n = (e = qs).deletions;
                        if (null !== n)
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r];
                            try {
                              il(t, i, e);
                              var o = i.alternate;
                              null !== o && (o.return = null),
                                (i.return = null);
                            } catch (t) {
                              hu(i, e, t);
                            }
                          }
                        if (
                          ((n = e.child),
                          0 != (12854 & e.subtreeFlags) && null !== n)
                        )
                          (n.return = e), (qs = n);
                        else
                          for (; null !== qs; ) {
                            e = qs;
                            try {
                              var a = e.flags;
                              if ((32 & a && ht(e.stateNode, ''), 512 & a)) {
                                var s = e.alternate;
                                if (null !== s) {
                                  var l = s.ref;
                                  null !== l &&
                                    ('function' == typeof l
                                      ? l(null)
                                      : (l.current = null));
                                }
                              }
                              if (8192 & a)
                                switch (e.tag) {
                                  case 13:
                                    if (null !== e.memoizedState) {
                                      var u = e.alternate;
                                      (null !== u &&
                                        null !== u.memoizedState) ||
                                        (Ol = Gt());
                                    }
                                    break;
                                  case 22:
                                    var c = null !== e.memoizedState,
                                      d = e.alternate,
                                      h =
                                        null !== d && null !== d.memoizedState;
                                    t: {
                                      i = c;
                                      for (var f = null, p = (r = n = e); ; ) {
                                        if (5 === p.tag) {
                                          if (null === f) {
                                            f = p;
                                            var g = p.stateNode;
                                            if (i) {
                                              var m = g.style;
                                              'function' == typeof m.setProperty
                                                ? m.setProperty(
                                                    'display',
                                                    'none',
                                                    'important'
                                                  )
                                                : (m.display = 'none');
                                            } else {
                                              var b = p.stateNode,
                                                y = p.memoizedProps.style,
                                                v =
                                                  null != y &&
                                                  y.hasOwnProperty('display')
                                                    ? y.display
                                                    : null;
                                              b.style.display = gt(
                                                'display',
                                                v
                                              );
                                            }
                                          }
                                        } else if (6 === p.tag)
                                          null === f &&
                                            (p.stateNode.nodeValue = i
                                              ? ''
                                              : p.memoizedProps);
                                        else if (
                                          ((22 !== p.tag && 23 !== p.tag) ||
                                            null === p.memoizedState ||
                                            p === r) &&
                                          null !== p.child
                                        ) {
                                          (p.child.return = p), (p = p.child);
                                          continue;
                                        }
                                        if (p === r) break;
                                        for (; null === p.sibling; ) {
                                          if (
                                            null === p.return ||
                                            p.return === r
                                          )
                                            break t;
                                          f === p && (f = null), (p = p.return);
                                        }
                                        f === p && (f = null),
                                          (p.sibling.return = p.return),
                                          (p = p.sibling);
                                      }
                                    }
                                    if (c && !h && 0 != (1 & n.mode)) {
                                      qs = n;
                                      for (var x = n.child; null !== x; ) {
                                        for (n = qs = x; null !== qs; ) {
                                          var _ = (r = qs).child;
                                          switch (r.tag) {
                                            case 0:
                                            case 11:
                                            case 14:
                                            case 15:
                                              Ks(4, r, r.return);
                                              break;
                                            case 1:
                                              $s(r, r.return);
                                              var w = r.stateNode;
                                              if (
                                                'function' ==
                                                typeof w.componentWillUnmount
                                              ) {
                                                var k = r.return;
                                                try {
                                                  (w.props = r.memoizedProps),
                                                    (w.state = r.memoizedState),
                                                    w.componentWillUnmount();
                                                } catch (t) {
                                                  hu(r, k, t);
                                                }
                                              }
                                              break;
                                            case 5:
                                              $s(r, r.return);
                                              break;
                                            case 22:
                                              if (null !== r.memoizedState) {
                                                ul(n);
                                                continue;
                                              }
                                          }
                                          null !== _
                                            ? ((_.return = r), (qs = _))
                                            : ul(n);
                                        }
                                        x = x.sibling;
                                      }
                                    }
                                }
                              switch (4102 & a) {
                                case 2:
                                  el(e), (e.flags &= -3);
                                  break;
                                case 6:
                                  el(e), (e.flags &= -3), ol(e.alternate, e);
                                  break;
                                case 4096:
                                  e.flags &= -4097;
                                  break;
                                case 4100:
                                  (e.flags &= -4097), ol(e.alternate, e);
                                  break;
                                case 4:
                                  ol(e.alternate, e);
                              }
                            } catch (t) {
                              hu(e, e.return, t);
                            }
                            if (null !== (n = e.sibling)) {
                              (n.return = e.return), (qs = n);
                              break;
                            }
                            qs = e.return;
                          }
                      }
                    })(t, r),
                    hr(Zr),
                    (Zr = null),
                    (t.current = r),
                    al(r, t, i),
                    Xt(),
                    (ml = l),
                    (ye = s),
                    (gl.transition = a);
                } else t.current = r;
                if (
                  (Ll && ((Ll = !1), (zl = t), (Il = i)),
                  0 === (a = t.pendingLanes) && (Al = null),
                  (function (t) {
                    if (oe && 'function' == typeof oe.onCommitFiberRoot)
                      try {
                        oe.onCommitFiberRoot(
                          ie,
                          t,
                          void 0,
                          128 == (128 & t.current.flags)
                        );
                      } catch (t) {}
                  })(r.stateNode),
                  $l(t, Gt()),
                  null !== e)
                )
                  for (n = t.onRecoverableError, r = 0; r < e.length; r++)
                    n(e[r]);
                if (Tl) throw ((Tl = !1), (t = Rl), (Rl = null), t);
                0 != (1 & Il) && 0 !== t.tag && cu(),
                  0 != (1 & (a = t.pendingLanes))
                    ? t === Fl
                      ? Nl++
                      : ((Nl = 0), (Fl = t))
                    : (Nl = 0),
                  ji();
              })(t, e, n);
          } finally {
            (gl.transition = r), (ye = n);
          }
          return null;
        }
        function cu() {
          if (null !== zl) {
            var t = ve(Il),
              e = gl.transition,
              n = ye;
            try {
              if (((gl.transition = null), (ye = 16 > t ? 16 : t), null === zl))
                var r = !1;
              else {
                if (((t = zl), (zl = null), (Il = 0), 0 != (6 & ml)))
                  throw Error(o(331));
                var i = ml;
                for (ml |= 4, qs = t.current; null !== qs; ) {
                  var a = qs,
                    s = a.child;
                  if (0 != (16 & qs.flags)) {
                    var l = a.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (qs = c; null !== qs; ) {
                          var d = qs;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Ks(8, d, a);
                          }
                          var h = d.child;
                          if (null !== h) (h.return = d), (qs = h);
                          else
                            for (; null !== qs; ) {
                              var f = (d = qs).sibling,
                                p = d.return;
                              if ((Zs(d), d === c)) {
                                qs = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = p), (qs = f);
                                break;
                              }
                              qs = p;
                            }
                        }
                      }
                      var g = a.alternate;
                      if (null !== g) {
                        var m = g.child;
                        if (null !== m) {
                          g.child = null;
                          do {
                            var b = m.sibling;
                            (m.sibling = null), (m = b);
                          } while (null !== m);
                        }
                      }
                      qs = a;
                    }
                  }
                  if (0 != (2064 & a.subtreeFlags) && null !== s)
                    (s.return = a), (qs = s);
                  else
                    t: for (; null !== qs; ) {
                      if (0 != (2048 & (a = qs).flags))
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Ks(9, a, a.return);
                        }
                      var y = a.sibling;
                      if (null !== y) {
                        (y.return = a.return), (qs = y);
                        break t;
                      }
                      qs = a.return;
                    }
                }
                var v = t.current;
                for (qs = v; null !== qs; ) {
                  var x = (s = qs).child;
                  if (0 != (2064 & s.subtreeFlags) && null !== x)
                    (x.return = s), (qs = x);
                  else
                    t: for (s = v; null !== qs; ) {
                      if (0 != (2048 & (l = qs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Ys(9, l);
                          }
                        } catch (t) {
                          hu(l, l.return, t);
                        }
                      if (l === s) {
                        qs = null;
                        break t;
                      }
                      var _ = l.sibling;
                      if (null !== _) {
                        (_.return = l.return), (qs = _);
                        break t;
                      }
                      qs = l.return;
                    }
                }
                if (
                  ((ml = i),
                  ji(),
                  oe && 'function' == typeof oe.onPostCommitFiberRoot)
                )
                  try {
                    oe.onPostCommitFiberRoot(ie, t);
                  } catch (t) {}
                r = !0;
              }
              return r;
            } finally {
              (ye = n), (gl.transition = e);
            }
          }
          return !1;
        }
        function du(t, e, n) {
          no(t, (e = ls(0, (e = ns(n, e)), 1))),
            (e = Bl()),
            null !== (t = ql(t, 1)) && (me(t, 1, e), $l(t, e));
        }
        function hu(t, e, n) {
          if (3 === t.tag) du(t, t, n);
          else
            for (; null !== e; ) {
              if (3 === e.tag) {
                du(e, t, n);
                break;
              }
              if (1 === e.tag) {
                var r = e.stateNode;
                if (
                  'function' == typeof e.type.getDerivedStateFromError ||
                  ('function' == typeof r.componentDidCatch &&
                    (null === Al || !Al.has(r)))
                ) {
                  no(e, (t = us(e, (t = ns(n, t)), 1))),
                    (t = Bl()),
                    null !== (e = ql(e, 1)) && (me(e, 1, t), $l(e, t));
                  break;
                }
              }
              e = e.return;
            }
        }
        function fu(t, e, n) {
          var r = t.pingCache;
          null !== r && r.delete(e),
            (e = Bl()),
            (t.pingedLanes |= t.suspendedLanes & n),
            bl === t &&
              (vl & n) === n &&
              (4 === wl ||
              (3 === wl && (130023424 & vl) === vl && 500 > Gt() - Ol)
                ? tu(t, 0)
                : (Pl |= n)),
            $l(t, e);
        }
        function pu(t, e) {
          0 === e &&
            (0 == (1 & t.mode)
              ? (e = 1)
              : ((e = ce), 0 == (130023424 & (ce <<= 1)) && (ce = 4194304)));
          var n = Bl();
          null !== (t = ql(t, e)) && (me(t, e, n), $l(t, n));
        }
        function gu(t) {
          var e = t.memoizedState,
            n = 0;
          null !== e && (n = e.retryLane), pu(t, n);
        }
        function mu(t, e) {
          var n = 0;
          switch (t.tag) {
            case 13:
              var r = t.stateNode,
                i = t.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = t.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(e), pu(t, n);
        }
        function bu(t, e) {
          return Qt(t, e);
        }
        function yu(t, e, n, r) {
          (this.tag = t),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = e),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function vu(t, e, n, r) {
          return new yu(t, e, n, r);
        }
        function xu(t) {
          return !(!(t = t.prototype) || !t.isReactComponent);
        }
        function _u(t, e) {
          var n = t.alternate;
          return (
            null === n
              ? (((n = vu(t.tag, e, t.key, t.mode)).elementType =
                  t.elementType),
                (n.type = t.type),
                (n.stateNode = t.stateNode),
                (n.alternate = t),
                (t.alternate = n))
              : ((n.pendingProps = e),
                (n.type = t.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & t.flags),
            (n.childLanes = t.childLanes),
            (n.lanes = t.lanes),
            (n.child = t.child),
            (n.memoizedProps = t.memoizedProps),
            (n.memoizedState = t.memoizedState),
            (n.updateQueue = t.updateQueue),
            (e = t.dependencies),
            (n.dependencies =
              null === e
                ? null
                : { lanes: e.lanes, firstContext: e.firstContext }),
            (n.sibling = t.sibling),
            (n.index = t.index),
            (n.ref = t.ref),
            n
          );
        }
        function wu(t, e, n, r, i, a) {
          var s = 2;
          if (((r = t), 'function' == typeof t)) xu(t) && (s = 1);
          else if ('string' == typeof t) s = 5;
          else
            t: switch (t) {
              case k:
                return ku(n.children, i, a, e);
              case S:
                (s = 8), (i |= 8);
                break;
              case M:
                return (
                  ((t = vu(12, n, e, 2 | i)).elementType = M), (t.lanes = a), t
                );
              case O:
                return (
                  ((t = vu(13, n, e, i)).elementType = O), (t.lanes = a), t
                );
              case D:
                return (
                  ((t = vu(19, n, e, i)).elementType = D), (t.lanes = a), t
                );
              case A:
                return Su(n, i, a, e);
              default:
                if ('object' == typeof t && null !== t)
                  switch (t.$$typeof) {
                    case P:
                      s = 10;
                      break t;
                    case E:
                      s = 9;
                      break t;
                    case C:
                      s = 11;
                      break t;
                    case T:
                      s = 14;
                      break t;
                    case R:
                      (s = 16), (r = null);
                      break t;
                  }
                throw Error(o(130, null == t ? t : typeof t, ''));
            }
          return (
            ((e = vu(s, n, e, i)).elementType = t),
            (e.type = r),
            (e.lanes = a),
            e
          );
        }
        function ku(t, e, n, r) {
          return ((t = vu(7, t, r, e)).lanes = n), t;
        }
        function Su(t, e, n, r) {
          return (
            ((t = vu(22, t, r, e)).elementType = A),
            (t.lanes = n),
            (t.stateNode = {}),
            t
          );
        }
        function Mu(t, e, n) {
          return ((t = vu(6, t, null, e)).lanes = n), t;
        }
        function Pu(t, e, n) {
          return (
            ((e = vu(
              4,
              null !== t.children ? t.children : [],
              t.key,
              e
            )).lanes = n),
            (e.stateNode = {
              containerInfo: t.containerInfo,
              pendingChildren: null,
              implementation: t.implementation,
            }),
            e
          );
        }
        function Eu(t, e, n, r, i) {
          (this.tag = e),
            (this.containerInfo = t),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = ge(0)),
            (this.expirationTimes = ge(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = ge(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Cu(t, e, n, r, i, o, a, s, l) {
          return (
            (t = new Eu(t, e, n, s, l)),
            1 === e ? ((e = 1), !0 === o && (e |= 8)) : (e = 0),
            (o = vu(3, null, null, e)),
            (t.current = o),
            (o.stateNode = t),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
            }),
            Ji(o),
            t
          );
        }
        function Ou(t, e, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: w,
            key: null == r ? null : '' + r,
            children: t,
            containerInfo: e,
            implementation: n,
          };
        }
        function Du(t) {
          if (!t) return Si;
          t: {
            if (Wt((t = t._reactInternals)) !== t || 1 !== t.tag)
              throw Error(o(170));
            var e = t;
            do {
              switch (e.tag) {
                case 3:
                  e = e.stateNode.context;
                  break t;
                case 1:
                  if (Oi(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              e = e.return;
            } while (null !== e);
            throw Error(o(171));
          }
          if (1 === t.tag) {
            var n = t.type;
            if (Oi(n)) return Ri(t, n, e);
          }
          return e;
        }
        function Tu(t, e, n, r, i, o, a, s, l) {
          return (
            ((t = Cu(n, r, !0, t, 0, o, 0, s, l)).context = Du(null)),
            (n = t.current),
            ((o = eo((r = Bl()), (i = Wl(n)))).callback = null != e ? e : null),
            no(n, o),
            (t.current.lanes = i),
            me(t, i, r),
            $l(t, r),
            t
          );
        }
        function Ru(t, e, n, r) {
          var i = e.current,
            o = Bl(),
            a = Wl(i);
          return (
            (n = Du(n)),
            null === e.context ? (e.context = n) : (e.pendingContext = n),
            ((e = eo(o, a)).payload = { element: t }),
            null !== (r = void 0 === r ? null : r) && (e.callback = r),
            no(i, e),
            null !== (t = Hl(i, a, o)) && ro(t, i, a),
            a
          );
        }
        function Au(t) {
          return (t = t.current).child
            ? (t.child.tag, t.child.stateNode)
            : null;
        }
        function Lu(t, e) {
          if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
            var n = t.retryLane;
            t.retryLane = 0 !== n && n < e ? n : e;
          }
        }
        function zu(t, e) {
          Lu(t, e), (t = t.alternate) && Lu(t, e);
        }
        dl = function (t, e, n) {
          if (null !== t)
            if (t.memoizedProps !== e.pendingProps || Pi.current) bs = !0;
            else {
              if (0 == (t.lanes & n) && 0 == (128 & e.flags))
                return (
                  (bs = !1),
                  (function (t, e, n) {
                    switch (e.tag) {
                      case 3:
                        Es(e), Fo();
                        break;
                      case 5:
                        Jo(e);
                        break;
                      case 1:
                        Oi(e.type) && Ai(e);
                        break;
                      case 4:
                        Go(e, e.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = e.type._context,
                          i = e.memoizedProps.value;
                        ki(Wi, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = e.memoizedState))
                          return null !== r.dehydrated
                            ? (ki(ea, 1 & ea.current), (e.flags |= 128), null)
                            : 0 != (n & e.child.childLanes)
                            ? Ts(t, e, n)
                            : (ki(ea, 1 & ea.current),
                              null !== (t = js(t, e, n)) ? t.sibling : null);
                        ki(ea, 1 & ea.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 != (n & e.childLanes)), 0 != (128 & t.flags))
                        ) {
                          if (r) return Fs(t, e, n);
                          e.flags |= 128;
                        }
                        if (
                          (null !== (i = e.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          ki(ea, ea.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (e.lanes = 0), ws(t, e, n);
                    }
                    return js(t, e, n);
                  })(t, e, n)
                );
              bs = 0 != (131072 & t.flags);
            }
          else (bs = !1), Do && 0 != (1048576 & e.flags) && Mo(e, yo, e.index);
          switch (((e.lanes = 0), e.tag)) {
            case 2:
              var r = e.type;
              null !== t &&
                ((t.alternate = null), (e.alternate = null), (e.flags |= 2)),
                (t = e.pendingProps);
              var i = Ci(e, Mi.current);
              Yi(e, n), (i = ba(null, e, r, t, i, n));
              var a = ya();
              return (
                (e.flags |= 1),
                'object' == typeof i &&
                null !== i &&
                'function' == typeof i.render &&
                void 0 === i.$$typeof
                  ? ((e.tag = 1),
                    (e.memoizedState = null),
                    (e.updateQueue = null),
                    Oi(r) ? ((a = !0), Ai(e)) : (a = !1),
                    (e.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    Ji(e),
                    (i.updater = uo),
                    (e.stateNode = i),
                    (i._reactInternals = e),
                    po(e, r, t, n),
                    (e = Ps(null, e, r, !0, a, n)))
                  : ((e.tag = 0),
                    Do && a && Po(e),
                    ys(null, e, i, n),
                    (e = e.child)),
                e
              );
            case 16:
              r = e.elementType;
              t: {
                switch (
                  (null !== t &&
                    ((t.alternate = null),
                    (e.alternate = null),
                    (e.flags |= 2)),
                  (t = e.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (e.type = r),
                  (i = e.tag =
                    (function (t) {
                      if ('function' == typeof t) return xu(t) ? 1 : 0;
                      if (null != t) {
                        if ((t = t.$$typeof) === C) return 11;
                        if (t === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (t = Bi(r, t)),
                  i)
                ) {
                  case 0:
                    e = Ss(null, e, r, t, n);
                    break t;
                  case 1:
                    e = Ms(null, e, r, t, n);
                    break t;
                  case 11:
                    e = vs(null, e, r, t, n);
                    break t;
                  case 14:
                    e = xs(null, e, r, Bi(r.type, t), n);
                    break t;
                }
                throw Error(o(306, r, ''));
              }
              return e;
            case 0:
              return (
                (r = e.type),
                (i = e.pendingProps),
                Ss(t, e, r, (i = e.elementType === r ? i : Bi(r, i)), n)
              );
            case 1:
              return (
                (r = e.type),
                (i = e.pendingProps),
                Ms(t, e, r, (i = e.elementType === r ? i : Bi(r, i)), n)
              );
            case 3:
              t: {
                if ((Es(e), null === t)) throw Error(o(387));
                (r = e.pendingProps),
                  (i = (a = e.memoizedState).element),
                  to(t, e),
                  oo(e, r, null, n);
                var s = e.memoizedState;
                if (((r = s.element), a.isDehydrated)) {
                  if (
                    ((a = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      transitions: s.transitions,
                    }),
                    (e.updateQueue.baseState = a),
                    (e.memoizedState = a),
                    256 & e.flags)
                  ) {
                    e = Cs(t, e, r, n, (i = Error(o(423))));
                    break t;
                  }
                  if (r !== i) {
                    e = Cs(t, e, r, n, (i = Error(o(424))));
                    break t;
                  }
                  for (
                    Oo = ai(e.stateNode.containerInfo.firstChild),
                      Co = e,
                      Do = !0,
                      To = null,
                      n = $o(e, null, r, n),
                      e.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((Fo(), r === i)) {
                    e = js(t, e, n);
                    break t;
                  }
                  ys(t, e, r, n);
                }
                e = e.child;
              }
              return e;
            case 5:
              return (
                Jo(e),
                null === t && zo(e),
                (r = e.type),
                (i = e.pendingProps),
                (a = null !== t ? t.memoizedProps : null),
                (s = i.children),
                Jr(r, i)
                  ? (s = null)
                  : null !== a && Jr(r, a) && (e.flags |= 32),
                ks(t, e),
                ys(t, e, s, n),
                e.child
              );
            case 6:
              return null === t && zo(e), null;
            case 13:
              return Ts(t, e, n);
            case 4:
              return (
                Go(e, e.stateNode.containerInfo),
                (r = e.pendingProps),
                null === t ? (e.child = qo(e, null, r, n)) : ys(t, e, r, n),
                e.child
              );
            case 11:
              return (
                (r = e.type),
                (i = e.pendingProps),
                vs(t, e, r, (i = e.elementType === r ? i : Bi(r, i)), n)
              );
            case 7:
              return ys(t, e, e.pendingProps, n), e.child;
            case 8:
            case 12:
              return ys(t, e, e.pendingProps.children, n), e.child;
            case 10:
              t: {
                if (
                  ((r = e.type._context),
                  (i = e.pendingProps),
                  (a = e.memoizedProps),
                  (s = i.value),
                  ki(Wi, r._currentValue),
                  (r._currentValue = s),
                  null !== a)
                )
                  if (or(a.value, s)) {
                    if (a.children === i.children && !Pi.current) {
                      e = js(t, e, n);
                      break t;
                    }
                  } else
                    for (
                      null !== (a = e.child) && (a.return = e);
                      null !== a;

                    ) {
                      var l = a.dependencies;
                      if (null !== l) {
                        s = a.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === a.tag) {
                              (u = eo(-1, n & -n)).tag = 2;
                              var c = a.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (a.lanes |= n),
                              null !== (u = a.alternate) && (u.lanes |= n),
                              Ki(a.return, n, e),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === a.tag)
                        s = a.type === e.type ? null : a.child;
                      else if (18 === a.tag) {
                        if (null === (s = a.return)) throw Error(o(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          Ki(s, n, e),
                          (s = a.sibling);
                      } else s = a.child;
                      if (null !== s) s.return = a;
                      else
                        for (s = a; null !== s; ) {
                          if (s === e) {
                            s = null;
                            break;
                          }
                          if (null !== (a = s.sibling)) {
                            (a.return = s.return), (s = a);
                            break;
                          }
                          s = s.return;
                        }
                      a = s;
                    }
                ys(t, e, i.children, n), (e = e.child);
              }
              return e;
            case 9:
              return (
                (i = e.type),
                (r = e.pendingProps.children),
                Yi(e, n),
                (r = r((i = Xi(i)))),
                (e.flags |= 1),
                ys(t, e, r, n),
                e.child
              );
            case 14:
              return (
                (i = Bi((r = e.type), e.pendingProps)),
                xs(t, e, r, (i = Bi(r.type, i)), n)
              );
            case 15:
              return _s(t, e, e.type, e.pendingProps, n);
            case 17:
              return (
                (r = e.type),
                (i = e.pendingProps),
                (i = e.elementType === r ? i : Bi(r, i)),
                null !== t &&
                  ((t.alternate = null), (e.alternate = null), (e.flags |= 2)),
                (e.tag = 1),
                Oi(r) ? ((t = !0), Ai(e)) : (t = !1),
                Yi(e, n),
                ho(e, r, i),
                po(e, r, i, n),
                Ps(null, e, r, !0, t, n)
              );
            case 19:
              return Fs(t, e, n);
            case 22:
              return ws(t, e, n);
          }
          throw Error(o(156, e.tag));
        };
        var Iu =
          'function' == typeof reportError
            ? reportError
            : function (t) {
                console.error(t);
              };
        function Nu(t) {
          this._internalRoot = t;
        }
        function Fu(t) {
          this._internalRoot = t;
        }
        function ju(t) {
          return !(
            !t ||
            (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
          );
        }
        function Vu(t) {
          return !(
            !t ||
            (1 !== t.nodeType &&
              9 !== t.nodeType &&
              11 !== t.nodeType &&
              (8 !== t.nodeType ||
                ' react-mount-point-unstable ' !== t.nodeValue))
          );
        }
        function Bu() {}
        function Wu(t, e, n, r, i) {
          var o = n._reactRootContainer;
          if (o) {
            var a = o;
            if ('function' == typeof i) {
              var s = i;
              i = function () {
                var t = Au(a);
                s.call(t);
              };
            }
            Ru(e, a, t, i);
          } else
            a = (function (t, e, n, r, i) {
              if (i) {
                if ('function' == typeof r) {
                  var o = r;
                  r = function () {
                    var t = Au(a);
                    o.call(t);
                  };
                }
                var a = Tu(e, r, t, 0, null, !1, 0, '', Bu);
                return (
                  (t._reactRootContainer = a),
                  (t[di] = a.current),
                  Vr(8 === t.nodeType ? t.parentNode : t),
                  Zl(),
                  a
                );
              }
              for (; (i = t.lastChild); ) t.removeChild(i);
              if ('function' == typeof r) {
                var s = r;
                r = function () {
                  var t = Au(l);
                  s.call(t);
                };
              }
              var l = Cu(t, 0, !1, null, 0, !1, 0, '', Bu);
              return (
                (t._reactRootContainer = l),
                (t[di] = l.current),
                Vr(8 === t.nodeType ? t.parentNode : t),
                Zl(function () {
                  Ru(e, l, n, r);
                }),
                l
              );
            })(n, e, t, i, r);
          return Au(a);
        }
        (Fu.prototype.render = Nu.prototype.render =
          function (t) {
            var e = this._internalRoot;
            if (null === e) throw Error(o(409));
            Ru(t, e, null, null);
          }),
          (Fu.prototype.unmount = Nu.prototype.unmount =
            function () {
              var t = this._internalRoot;
              if (null !== t) {
                this._internalRoot = null;
                var e = t.containerInfo;
                Zl(function () {
                  Ru(null, t, null, null);
                }),
                  (e[di] = null);
              }
            }),
          (Fu.prototype.unstable_scheduleHydration = function (t) {
            if (t) {
              var e = ke();
              t = { blockedOn: null, target: t, priority: e };
              for (
                var n = 0;
                n < Re.length && 0 !== e && e < Re[n].priority;
                n++
              );
              Re.splice(n, 0, t), 0 === n && Ie(t);
            }
          }),
          (xe = function (t) {
            switch (t.tag) {
              case 3:
                var e = t.stateNode;
                if (e.current.memoizedState.isDehydrated) {
                  var n = de(e.pendingLanes);
                  0 !== n &&
                    (be(e, 1 | n),
                    $l(e, Gt()),
                    0 == (6 & ml) && ((Dl = Gt() + 500), ji()));
                }
                break;
              case 13:
                var r = Bl();
                Zl(function () {
                  return Hl(t, 1, r);
                }),
                  zu(t, 1);
            }
          }),
          (_e = function (t) {
            13 === t.tag && (Hl(t, 134217728, Bl()), zu(t, 134217728));
          }),
          (we = function (t) {
            if (13 === t.tag) {
              var e = Bl(),
                n = Wl(t);
              Hl(t, n, e), zu(t, n);
            }
          }),
          (ke = function () {
            return ye;
          }),
          (Se = function (t, e) {
            var n = ye;
            try {
              return (ye = t), e();
            } finally {
              ye = n;
            }
          }),
          (wt = function (t, e, n) {
            switch (e) {
              case 'input':
                if ((Z(t, n), (e = n.name), 'radio' === n.type && null != e)) {
                  for (n = t; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
                    ),
                      e = 0;
                    e < n.length;
                    e++
                  ) {
                    var r = n[e];
                    if (r !== t && r.form === t.form) {
                      var i = yi(r);
                      if (!i) throw Error(o(90));
                      Q(r), Z(r, i);
                    }
                  }
                }
                break;
              case 'textarea':
                ot(t, n);
                break;
              case 'select':
                null != (e = n.value) && nt(t, !!n.multiple, e, !1);
            }
          }),
          (Ct = Gl),
          (Ot = Zl);
        var Hu = {
            usingClientEntryPoint: !1,
            Events: [mi, bi, yi, Pt, Et, Gl],
          },
          qu = {
            findFiberByHostInstance: gi,
            bundleType: 0,
            version: '18.0.0-fc46dba67-20220329',
            rendererPackageName: 'react-dom',
          },
          $u = {
            bundleType: qu.bundleType,
            version: qu.version,
            rendererPackageName: qu.rendererPackageName,
            rendererConfig: qu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (t) {
              return null === (t = $t(t)) ? null : t.stateNode;
            },
            findFiberByHostInstance:
              qu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.0.0-fc46dba67-20220329',
          };
        if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Uu.isDisabled && Uu.supportsFiber)
            try {
              (ie = Uu.inject($u)), (oe = Uu);
            } catch (ct) {}
        }
        (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hu),
          (e.createPortal = function (t, e) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!ju(e)) throw Error(o(200));
            return Ou(t, e, null, n);
          }),
          (e.createRoot = function (t, e) {
            if (!ju(t)) throw Error(o(299));
            var n = !1,
              r = '',
              i = Iu;
            return (
              null != e &&
                (!0 === e.unstable_strictMode && (n = !0),
                void 0 !== e.identifierPrefix && (r = e.identifierPrefix),
                void 0 !== e.onRecoverableError && (i = e.onRecoverableError)),
              (e = Cu(t, 1, !1, null, 0, n, 0, r, i)),
              (t[di] = e.current),
              Vr(8 === t.nodeType ? t.parentNode : t),
              new Nu(e)
            );
          }),
          (e.findDOMNode = function (t) {
            if (null == t) return null;
            if (1 === t.nodeType) return t;
            var e = t._reactInternals;
            if (void 0 === e) {
              if ('function' == typeof t.render) throw Error(o(188));
              throw ((t = Object.keys(t).join(',')), Error(o(268, t)));
            }
            return null === (t = $t(e)) ? null : t.stateNode;
          }),
          (e.flushSync = function (t) {
            return Zl(t);
          }),
          (e.hydrate = function (t, e, n) {
            if (!Vu(e)) throw Error(o(200));
            return Wu(null, t, e, !0, n);
          }),
          (e.hydrateRoot = function (t, e, n) {
            if (!ju(t)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              a = '',
              s = Iu;
            if (
              (null != n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (e = Tu(e, null, t, 1, null != n ? n : null, i, 0, a, s)),
              (t[di] = e.current),
              Vr(t),
              r)
            )
              for (t = 0; t < r.length; t++)
                (i = (i = (n = r[t])._getVersion)(n._source)),
                  null == e.mutableSourceEagerHydrationData
                    ? (e.mutableSourceEagerHydrationData = [n, i])
                    : e.mutableSourceEagerHydrationData.push(n, i);
            return new Fu(e);
          }),
          (e.render = function (t, e, n) {
            if (!Vu(e)) throw Error(o(200));
            return Wu(null, t, e, !1, n);
          }),
          (e.unmountComponentAtNode = function (t) {
            if (!Vu(t)) throw Error(o(40));
            return (
              !!t._reactRootContainer &&
              (Zl(function () {
                Wu(null, null, t, !1, function () {
                  (t._reactRootContainer = null), (t[di] = null);
                });
              }),
              !0)
            );
          }),
          (e.unstable_batchedUpdates = Gl),
          (e.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
            if (!Vu(n)) throw Error(o(200));
            if (null == t || void 0 === t._reactInternals) throw Error(o(38));
            return Wu(t, e, n, !1, r);
          }),
          (e.version = '18.0.0-fc46dba67-20220329');
      },
      935: (t, e, n) => {
        !(function t() {
          if (
            'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
            } catch (t) {
              console.error(t);
            }
        })(),
          (t.exports = n(448));
      },
      203: (t, e) => {
        function n(t, e) {
          var n = t.length;
          t.push(e);
          t: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = t[r];
            if (!(0 < o(i, e))) break t;
            (t[r] = e), (t[n] = i), (n = r);
          }
        }
        function r(t) {
          return 0 === t.length ? null : t[0];
        }
        function i(t) {
          if (0 === t.length) return null;
          var e = t[0],
            n = t.pop();
          if (n !== e) {
            t[0] = n;
            t: for (var r = 0, i = t.length, a = i >>> 1; r < a; ) {
              var s = 2 * (r + 1) - 1,
                l = t[s],
                u = s + 1,
                c = t[u];
              if (0 > o(l, n))
                u < i && 0 > o(c, l)
                  ? ((t[r] = c), (t[u] = n), (r = u))
                  : ((t[r] = l), (t[s] = n), (r = s));
              else {
                if (!(u < i && 0 > o(c, n))) break t;
                (t[r] = c), (t[u] = n), (r = u);
              }
            }
          }
          return e;
        }
        function o(t, e) {
          var n = t.sortIndex - e.sortIndex;
          return 0 !== n ? n : t.id - e.id;
        }
        if (
          'object' == typeof performance &&
          'function' == typeof performance.now
        ) {
          var a = performance;
          e.unstable_now = function () {
            return a.now();
          };
        } else {
          var s = Date,
            l = s.now();
          e.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          h = null,
          f = 3,
          p = !1,
          g = !1,
          m = !1,
          b = 'function' == typeof setTimeout ? setTimeout : null,
          y = 'function' == typeof clearTimeout ? clearTimeout : null,
          v = 'undefined' != typeof setImmediate ? setImmediate : null;
        function x(t) {
          for (var e = r(c); null !== e; ) {
            if (null === e.callback) i(c);
            else {
              if (!(e.startTime <= t)) break;
              i(c), (e.sortIndex = e.expirationTime), n(u, e);
            }
            e = r(c);
          }
        }
        function _(t) {
          if (((m = !1), x(t), !g))
            if (null !== r(u)) (g = !0), A(w);
            else {
              var e = r(c);
              null !== e && L(_, e.startTime - t);
            }
        }
        function w(t, n) {
          (g = !1), m && ((m = !1), y(P), (P = -1)), (p = !0);
          var o = f;
          try {
            for (
              x(n), h = r(u);
              null !== h && (!(h.expirationTime > n) || (t && !O()));

            ) {
              var a = h.callback;
              if ('function' == typeof a) {
                (h.callback = null), (f = h.priorityLevel);
                var s = a(h.expirationTime <= n);
                (n = e.unstable_now()),
                  'function' == typeof s
                    ? (h.callback = s)
                    : h === r(u) && i(u),
                  x(n);
              } else i(u);
              h = r(u);
            }
            if (null !== h) var l = !0;
            else {
              var d = r(c);
              null !== d && L(_, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (h = null), (f = o), (p = !1);
          }
        }
        'undefined' != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          S = !1,
          M = null,
          P = -1,
          E = 5,
          C = -1;
        function O() {
          return !(e.unstable_now() - C < E);
        }
        function D() {
          if (null !== M) {
            var t = e.unstable_now();
            C = t;
            var n = !0;
            try {
              n = M(!0, t);
            } finally {
              n ? k() : ((S = !1), (M = null));
            }
          } else S = !1;
        }
        if ('function' == typeof v)
          k = function () {
            v(D);
          };
        else if ('undefined' != typeof MessageChannel) {
          var T = new MessageChannel(),
            R = T.port2;
          (T.port1.onmessage = D),
            (k = function () {
              R.postMessage(null);
            });
        } else
          k = function () {
            b(D, 0);
          };
        function A(t) {
          (M = t), S || ((S = !0), k());
        }
        function L(t, n) {
          P = b(function () {
            t(e.unstable_now());
          }, n);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (t) {
            t.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            g || p || ((g = !0), A(w));
          }),
          (e.unstable_forceFrameRate = function (t) {
            0 > t || 125 < t
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (E = 0 < t ? Math.floor(1e3 / t) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (e.unstable_next = function (t) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var e = 3;
                break;
              default:
                e = f;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (t, e) {
            switch (t) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                t = 3;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (e.unstable_scheduleCallback = function (t, i, o) {
            var a = e.unstable_now();
            switch (
              ((o =
                'object' == typeof o &&
                null !== o &&
                'number' == typeof (o = o.delay) &&
                0 < o
                  ? a + o
                  : a),
              t)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (t = {
                id: d++,
                callback: i,
                priorityLevel: t,
                startTime: o,
                expirationTime: (s = o + s),
                sortIndex: -1,
              }),
              o > a
                ? ((t.sortIndex = o),
                  n(c, t),
                  null === r(u) &&
                    t === r(c) &&
                    (m ? (y(P), (P = -1)) : (m = !0), L(_, o - a)))
                : ((t.sortIndex = s), n(u, t), g || p || ((g = !0), A(w))),
              t
            );
          }),
          (e.unstable_shouldYield = O),
          (e.unstable_wrapCallback = function (t) {
            var e = f;
            return function () {
              var n = f;
              f = e;
              try {
                return t.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          });
      },
      142: (t, e, n) => {
        t.exports = n(203);
      },
      209: (t, e, n) => {
        var r,
          i =
            (r = n(294)) && 'object' == typeof r && 'default' in r
              ? r.default
              : r;
        function o(t) {
          return (
            o.warnAboutHMRDisabled &&
              ((o.warnAboutHMRDisabled = !0),
              console.error(
                'React-Hot-Loader: misconfiguration detected, using production version in non-production environment.'
              ),
              console.error(
                'React-Hot-Loader: Hot Module Replacement is not enabled.'
              )),
            i.Children.only(t.children)
          );
        }
        o.warnAboutHMRDisabled = !1;
      },
      658: (t, e, n) => {
        n(209);
      },
      359: (t, e) => {
        Symbol.for('react.element'),
          Symbol.for('react.portal'),
          Symbol.for('react.fragment'),
          Symbol.for('react.strict_mode'),
          Symbol.for('react.profiler'),
          Symbol.for('react.provider'),
          Symbol.for('react.context'),
          Symbol.for('react.server_context'),
          Symbol.for('react.forward_ref'),
          Symbol.for('react.suspense'),
          Symbol.for('react.suspense_list'),
          Symbol.for('react.memo'),
          Symbol.for('react.lazy'),
          Symbol.for('react.offscreen');
        Symbol.for('react.module.reference');
      },
      973: (t, e, n) => {
        n(359);
      },
      408: (t, e) => {
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          i = Symbol.for('react.fragment'),
          o = Symbol.for('react.strict_mode'),
          a = Symbol.for('react.profiler'),
          s = Symbol.for('react.provider'),
          l = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          h = Symbol.for('react.lazy'),
          f = Symbol.iterator,
          p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          m = {};
        function b(t, e, n) {
          (this.props = t),
            (this.context = e),
            (this.refs = m),
            (this.updater = n || p);
        }
        function y() {}
        function v(t, e, n) {
          (this.props = t),
            (this.context = e),
            (this.refs = m),
            (this.updater = n || p);
        }
        (b.prototype.isReactComponent = {}),
          (b.prototype.setState = function (t, e) {
            if ('object' != typeof t && 'function' != typeof t && null != t)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, t, e, 'setState');
          }),
          (b.prototype.forceUpdate = function (t) {
            this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
          }),
          (y.prototype = b.prototype);
        var x = (v.prototype = new y());
        (x.constructor = v), g(x, b.prototype), (x.isPureReactComponent = !0);
        var _ = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          k = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function M(t, e, r) {
          var i,
            o = {},
            a = null,
            s = null;
          if (null != e)
            for (i in (void 0 !== e.ref && (s = e.ref),
            void 0 !== e.key && (a = '' + e.key),
            e))
              w.call(e, i) && !S.hasOwnProperty(i) && (o[i] = e[i]);
          var l = arguments.length - 2;
          if (1 === l) o.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (t && t.defaultProps)
            for (i in (l = t.defaultProps)) void 0 === o[i] && (o[i] = l[i]);
          return {
            $$typeof: n,
            type: t,
            key: a,
            ref: s,
            props: o,
            _owner: k.current,
          };
        }
        function P(t) {
          return 'object' == typeof t && null !== t && t.$$typeof === n;
        }
        var E = /\/+/g;
        function C(t, e) {
          return 'object' == typeof t && null !== t && null != t.key
            ? (function (t) {
                var e = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  t.replace(/[=:]/g, function (t) {
                    return e[t];
                  })
                );
              })('' + t.key)
            : e.toString(36);
        }
        function O(t, e, i, o, a) {
          var s = typeof t;
          ('undefined' !== s && 'boolean' !== s) || (t = null);
          var l = !1;
          if (null === t) l = !0;
          else
            switch (s) {
              case 'string':
              case 'number':
                l = !0;
                break;
              case 'object':
                switch (t.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (a = a((l = t))),
              (t = '' === o ? '.' + C(l, 0) : o),
              _(a)
                ? ((i = ''),
                  null != t && (i = t.replace(E, '$&/') + '/'),
                  O(a, e, i, '', function (t) {
                    return t;
                  }))
                : null != a &&
                  (P(a) &&
                    (a = (function (t, e) {
                      return {
                        $$typeof: n,
                        type: t.type,
                        key: e,
                        ref: t.ref,
                        props: t.props,
                        _owner: t._owner,
                      };
                    })(
                      a,
                      i +
                        (!a.key || (l && l.key === a.key)
                          ? ''
                          : ('' + a.key).replace(E, '$&/') + '/') +
                        t
                    )),
                  e.push(a)),
              1
            );
          if (((l = 0), (o = '' === o ? '.' : o + ':'), _(t)))
            for (var u = 0; u < t.length; u++) {
              var c = o + C((s = t[u]), u);
              l += O(s, e, i, c, a);
            }
          else if (
            ((c = (function (t) {
              return null === t || 'object' != typeof t
                ? null
                : 'function' == typeof (t = (f && t[f]) || t['@@iterator'])
                ? t
                : null;
            })(t)),
            'function' == typeof c)
          )
            for (t = c.call(t), u = 0; !(s = t.next()).done; )
              l += O((s = s.value), e, i, (c = o + C(s, u++)), a);
          else if ('object' === s)
            throw (
              ((e = String(t)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === e
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : e) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return l;
        }
        function D(t, e, n) {
          if (null == t) return t;
          var r = [],
            i = 0;
          return (
            O(t, r, '', '', function (t) {
              return e.call(n, t, i++);
            }),
            r
          );
        }
        function T(t) {
          if (-1 === t._status) {
            var e = t._result;
            (e = e()).then(
              function (e) {
                (0 !== t._status && -1 !== t._status) ||
                  ((t._status = 1), (t._result = e));
              },
              function (e) {
                (0 !== t._status && -1 !== t._status) ||
                  ((t._status = 2), (t._result = e));
              }
            ),
              -1 === t._status && ((t._status = 0), (t._result = e));
          }
          if (1 === t._status) return t._result.default;
          throw t._result;
        }
        var R = { current: null },
          A = { transition: null },
          L = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: k,
          };
        (e.Children = {
          map: D,
          forEach: function (t, e, n) {
            D(
              t,
              function () {
                e.apply(this, arguments);
              },
              n
            );
          },
          count: function (t) {
            var e = 0;
            return (
              D(t, function () {
                e++;
              }),
              e
            );
          },
          toArray: function (t) {
            return (
              D(t, function (t) {
                return t;
              }) || []
            );
          },
          only: function (t) {
            if (!P(t))
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            return t;
          },
        }),
          (e.Component = b),
          (e.Fragment = i),
          (e.Profiler = a),
          (e.PureComponent = v),
          (e.StrictMode = o),
          (e.Suspense = c),
          (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (e.cloneElement = function (t, e, r) {
            if (null == t)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  t +
                  '.'
              );
            var i = g({}, t.props),
              o = t.key,
              a = t.ref,
              s = t._owner;
            if (null != e) {
              if (
                (void 0 !== e.ref && ((a = e.ref), (s = k.current)),
                void 0 !== e.key && (o = '' + e.key),
                t.type && t.type.defaultProps)
              )
                var l = t.type.defaultProps;
              for (u in e)
                w.call(e, u) &&
                  !S.hasOwnProperty(u) &&
                  (i[u] = void 0 === e[u] && void 0 !== l ? l[u] : e[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              i.children = l;
            }
            return {
              $$typeof: n,
              type: t.type,
              key: o,
              ref: a,
              props: i,
              _owner: s,
            };
          }),
          (e.createContext = function (t) {
            return (
              ((t = {
                $$typeof: l,
                _currentValue: t,
                _currentValue2: t,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: t }),
              (t.Consumer = t)
            );
          }),
          (e.createElement = M),
          (e.createFactory = function (t) {
            var e = M.bind(null, t);
            return (e.type = t), e;
          }),
          (e.createRef = function () {
            return { current: null };
          }),
          (e.forwardRef = function (t) {
            return { $$typeof: u, render: t };
          }),
          (e.isValidElement = P),
          (e.lazy = function (t) {
            return {
              $$typeof: h,
              _payload: { _status: -1, _result: t },
              _init: T,
            };
          }),
          (e.memo = function (t, e) {
            return { $$typeof: d, type: t, compare: void 0 === e ? null : e };
          }),
          (e.startTransition = function (t) {
            var e = A.transition;
            A.transition = {};
            try {
              t();
            } finally {
              A.transition = e;
            }
          }),
          (e.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.'
            );
          }),
          (e.useCallback = function (t, e) {
            return R.current.useCallback(t, e);
          }),
          (e.useContext = function (t) {
            return R.current.useContext(t);
          }),
          (e.useDebugValue = function () {}),
          (e.useDeferredValue = function (t) {
            return R.current.useDeferredValue(t);
          }),
          (e.useEffect = function (t, e) {
            return R.current.useEffect(t, e);
          }),
          (e.useId = function () {
            return R.current.useId();
          }),
          (e.useImperativeHandle = function (t, e, n) {
            return R.current.useImperativeHandle(t, e, n);
          }),
          (e.useInsertionEffect = function (t, e) {
            return R.current.useInsertionEffect(t, e);
          }),
          (e.useLayoutEffect = function (t, e) {
            return R.current.useLayoutEffect(t, e);
          }),
          (e.useMemo = function (t, e) {
            return R.current.useMemo(t, e);
          }),
          (e.useReducer = function (t, e, n) {
            return R.current.useReducer(t, e, n);
          }),
          (e.useRef = function (t) {
            return R.current.useRef(t);
          }),
          (e.useState = function (t) {
            return R.current.useState(t);
          }),
          (e.useSyncExternalStore = function (t, e, n) {
            return R.current.useSyncExternalStore(t, e, n);
          }),
          (e.useTransition = function () {
            return R.current.useTransition();
          }),
          (e.version = '18.0.0-fc46dba67-20220329');
      },
      294: (t, e, n) => {
        t.exports = n(408);
      },
      379: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var o = {}, a = [], s = 0; s < t.length; s++) {
            var l = t[s],
              u = r.base ? l[0] + r.base : l[0],
              c = o[u] || 0,
              d = ''.concat(u, ' ').concat(c);
            o[u] = c + 1;
            var h = n(d),
              f = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== h) e[h].references++, e[h].updater(f);
            else {
              var p = i(f, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: d, updater: p, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function i(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, i) {
          var o = r((t = t || []), (i = i || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < o.length; a++) {
              var s = n(o[a]);
              e[s].references--;
            }
            for (var l = r(t, i), u = 0; u < o.length; u++) {
              var c = n(o[u]);
              0 === e[c].references && (e[c].updater(), e.splice(c, 1));
            }
            o = l;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement('style');
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute('nonce', e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var i = void 0 !== n.layer;
                i &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (r += n.css),
                  i && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var o = n.sourceMap;
                o &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      ' */'
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      250: (t, e, n) => {
        var r = n(294),
          i =
            'function' == typeof Object.is
              ? Object.is
              : function (t, e) {
                  return (
                    (t === e && (0 !== t || 1 / t == 1 / e)) ||
                    (t != t && e != e)
                  );
                },
          o = r.useState,
          a = r.useEffect,
          s = r.useLayoutEffect,
          l = r.useDebugValue;
        function u(t) {
          var e = t.getSnapshot;
          t = t.value;
          try {
            var n = e();
            return !i(t, n);
          } catch (t) {
            return !0;
          }
        }
        var c =
          'undefined' == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
            ? function (t, e) {
                return e();
              }
            : function (t, e) {
                var n = e(),
                  r = o({ inst: { value: n, getSnapshot: e } }),
                  i = r[0].inst,
                  c = r[1];
                return (
                  s(
                    function () {
                      (i.value = n),
                        (i.getSnapshot = e),
                        u(i) && c({ inst: i });
                    },
                    [t, n, e]
                  ),
                  a(
                    function () {
                      return (
                        u(i) && c({ inst: i }),
                        t(function () {
                          u(i) && c({ inst: i });
                        })
                      );
                    },
                    [t]
                  ),
                  l(n),
                  n
                );
              };
        e.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
      },
      139: (t, e, n) => {
        var r = n(294),
          i = n(688),
          o =
            'function' == typeof Object.is
              ? Object.is
              : function (t, e) {
                  return (
                    (t === e && (0 !== t || 1 / t == 1 / e)) ||
                    (t != t && e != e)
                  );
                },
          a = i.useSyncExternalStore,
          s = r.useRef,
          l = r.useEffect,
          u = r.useMemo,
          c = r.useDebugValue;
        e.useSyncExternalStoreWithSelector = function (t, e, n, r, i) {
          var d = s(null);
          if (null === d.current) {
            var h = { hasValue: !1, value: null };
            d.current = h;
          } else h = d.current;
          d = u(
            function () {
              function t(t) {
                if (!l) {
                  if (
                    ((l = !0), (a = t), (t = r(t)), void 0 !== i && h.hasValue)
                  ) {
                    var e = h.value;
                    if (i(e, t)) return (s = e);
                  }
                  return (s = t);
                }
                if (((e = s), o(a, t))) return e;
                var n = r(t);
                return void 0 !== i && i(e, n) ? e : ((a = t), (s = n));
              }
              var a,
                s,
                l = !1,
                u = void 0 === n ? null : n;
              return [
                function () {
                  return t(e());
                },
                null === u
                  ? void 0
                  : function () {
                      return t(u());
                    },
              ];
            },
            [e, n, r, i]
          );
          var f = a(t, d[0], d[1]);
          return (
            l(
              function () {
                (h.hasValue = !0), (h.value = f);
              },
              [f]
            ),
            c(f),
            f
          );
        };
      },
      688: (t, e, n) => {
        t.exports = n(250);
      },
      798: (t, e, n) => {
        t.exports = n(139);
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var o = (e[r] = { id: r, exports: {} });
    return t[r](o, o.exports, n), o.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    n(658),
    n(916);
})();
