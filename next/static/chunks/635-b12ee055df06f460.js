"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [635],
  {
    6648: function (e, t, n) {
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(5601),
        i = n.n(r);
    },
    7138: function (e, t, n) {
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(231),
        i = n.n(r);
    },
    844: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(8157);
      let r = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return e;
      };
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5944: function (e, t, n) {
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(8157),
        ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8173: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = n(9920),
        i = n(1452),
        o = n(7437),
        s = i._(n(2265)),
        a = r._(n(4887)),
        l = r._(n(8321)),
        u = n(497),
        c = n(6161),
        d = n(3938);
      n(2301);
      let f = n(291),
        h = r._(n(1241)),
        p = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/dagang2_web_html/next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(e, t, n, r, i, o, s) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", { writable: !1, value: e });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function g(e) {
        return s.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, s.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: i,
          height: a,
          width: l,
          decoding: u,
          className: c,
          style: d,
          fetchPriority: f,
          placeholder: h,
          loading: p,
          unoptimized: v,
          fill: y,
          onLoadRef: b,
          onLoadingCompleteRef: x,
          setBlurComplete: w,
          setShowAltText: P,
          sizesInput: E,
          onLoad: S,
          onError: T,
          ...C
        } = e;
        return (0, o.jsx)("img", {
          ...C,
          ...g(f),
          loading: p,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: d,
          sizes: i,
          srcSet: r,
          src: n,
          ref: (0, s.useCallback)(
            (e) => {
              t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                e && (T && (e.src = e.src), e.complete && m(e, h, b, x, w, v, E));
            },
            [n, h, b, x, w, T, v, E, t]
          ),
          onLoad: (e) => {
            m(e.currentTarget, h, b, x, w, v, E);
          },
          onError: (e) => {
            P(!0), "empty" !== h && w(!0), T && T(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...g(n.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(n.src, r), null)
          : (0, o.jsx)(l.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let b = (0, s.forwardRef)((e, t) => {
        let n = (0, s.useContext)(f.RouterContext),
          r = (0, s.useContext)(d.ImageConfigContext),
          i = (0, s.useMemo)(() => {
            let e = p || r || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: a, onLoadingComplete: l } = e,
          m = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
          m.current = a;
        }, [a]);
        let g = (0, s.useRef)(l);
        (0, s.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [b, x] = (0, s.useState)(!1),
          [w, P] = (0, s.useState)(!1),
          { props: E, meta: S } = (0, u.getImgProps)(e, {
            defaultLoader: h.default,
            imgConf: i,
            blurComplete: b,
            showAltText: w,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(v, {
              ...E,
              unoptimized: S.unoptimized,
              placeholder: S.placeholder,
              fill: S.fill,
              onLoadRef: m,
              onLoadingCompleteRef: g,
              setBlurComplete: x,
              setShowAltText: P,
              sizesInput: e.sizes,
              ref: t,
            }),
            S.priority ? (0, o.jsx)(y, { isAppRouter: !n, imgAttributes: E }) : null,
          ],
        });
      });
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    231: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let r = n(9920),
        i = n(7437),
        o = r._(n(2265)),
        s = n(8016),
        a = n(8029),
        l = n(1142),
        u = n(3461),
        c = n(844),
        d = n(291),
        f = n(4467),
        h = n(3106),
        p = n(5944),
        m = n(4897),
        g = n(1507),
        v = new Set();
      function y(e, t, n, r, i, o) {
        if ("undefined" != typeof window && (o || (0, a.isLocalURL)(t))) {
          if (!r.bypassPrefetchedCheck) {
            let i = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
            if (v.has(i)) return;
            v.add(i);
          }
          (async () => (o ? e.prefetch(t, i) : e.prefetch(t, n, r)))().catch((e) => {});
        }
      }
      function b(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let x = o.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: l,
          as: v,
          children: x,
          prefetch: w = null,
          passHref: P,
          replace: E,
          shallow: S,
          scroll: T,
          locale: C,
          onClick: A,
          onMouseEnter: M,
          onTouchStart: R,
          legacyBehavior: k = !1,
          ...L
        } = e;
        (n = x), k && ("string" == typeof n || "number" == typeof n) && (n = (0, i.jsx)("a", { children: n }));
        let O = o.default.useContext(d.RouterContext),
          F = o.default.useContext(f.AppRouterContext),
          j = null != O ? O : F,
          D = !O,
          V = !1 !== w,
          I = null === w ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: N, as: _ } = o.default.useMemo(() => {
            if (!O) {
              let e = b(l);
              return { href: e, as: v ? b(v) : e };
            }
            let [e, t] = (0, s.resolveHref)(O, l, !0);
            return { href: e, as: v ? (0, s.resolveHref)(O, v) : t || e };
          }, [O, l, v]),
          B = o.default.useRef(N),
          W = o.default.useRef(_);
        k && (r = o.default.Children.only(n));
        let U = k ? r && "object" == typeof r && r.ref : t,
          [H, z, $] = (0, h.useIntersection)({ rootMargin: "200px" }),
          K = o.default.useCallback(
            (e) => {
              (W.current !== _ || B.current !== N) && ($(), (W.current = _), (B.current = N)),
                H(e),
                U && ("function" == typeof U ? U(e) : "object" == typeof U && (U.current = e));
            },
            [_, U, N, $, H]
          );
        o.default.useEffect(() => {
          j && z && V && y(j, N, _, { locale: C }, { kind: I }, D);
        }, [_, N, z, C, V, null == O ? void 0 : O.locale, j, D, I]);
        let q = {
          ref: K,
          onClick(e) {
            k || "function" != typeof A || A(e),
              k && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
              j &&
                !e.defaultPrevented &&
                (function (e, t, n, r, i, s, l, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, a.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == l || l;
                    "beforePopState" in t
                      ? t[i ? "replace" : "push"](n, r, { shallow: s, locale: u, scroll: e })
                      : t[i ? "replace" : "push"](r || n, { scroll: e });
                  };
                  c ? o.default.startTransition(f) : f();
                })(e, j, N, _, E, S, T, C, D);
          },
          onMouseEnter(e) {
            k || "function" != typeof M || M(e),
              k && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
              j && (V || !D) && y(j, N, _, { locale: C, priority: !0, bypassPrefetchedCheck: !0 }, { kind: I }, D);
          },
          onTouchStart: function (e) {
            k || "function" != typeof R || R(e),
              k && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
              j && (V || !D) && y(j, N, _, { locale: C, priority: !0, bypassPrefetchedCheck: !0 }, { kind: I }, D);
          },
        };
        if ((0, u.isAbsoluteUrl)(_)) q.href = _;
        else if (!k || P || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== C ? C : null == O ? void 0 : O.locale,
            t =
              (null == O ? void 0 : O.isLocaleDomain) &&
              (0, p.getDomainLocale)(_, e, null == O ? void 0 : O.locales, null == O ? void 0 : O.domainLocales);
          q.href = t || (0, m.addBasePath)((0, c.addLocale)(_, e, null == O ? void 0 : O.defaultLocale));
        }
        return k ? o.default.cloneElement(r, q) : (0, i.jsx)("a", { ...L, ...q, children: n });
      });
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9189: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8016: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(8323),
        i = n(1142),
        o = n(5519),
        s = n(3461),
        a = n(8157),
        l = n(8029),
        u = n(9195),
        c = n(20);
      function d(e, t, n) {
        let d;
        let f = "string" == typeof t ? t : (0, i.formatWithValidation)(t),
          h = f.match(/^[a-zA-Z]{1,}:\/\//),
          p = h ? f.slice(h[0].length) : f;
        if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, s.normalizeRepeatedSlashes)(p);
          f = (h ? h[0] : "") + t;
        }
        if (!(0, l.isLocalURL)(f)) return n ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && n) {
            let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
              { result: s, params: a } = (0, c.interpolateAs)(e.pathname, e.pathname, n);
            s && (t = (0, i.formatWithValidation)({ pathname: s, hash: e.hash, query: (0, o.omit)(n, a) }));
          }
          let s = e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return n ? [s, t || s] : s;
        } catch (e) {
          return n ? [f] : f;
        }
      }
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3106: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(2265),
        i = n(9189),
        o = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function l(e) {
        let { rootRef: t, rootMargin: n, disabled: l } = e,
          u = l || !o,
          [c, d] = (0, r.useState)(!1),
          f = (0, r.useRef)(null),
          h = (0, r.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (o) {
              if (u || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: i,
                    elements: o,
                  } = (function (e) {
                    let t;
                    let n = { root: e.root || null, margin: e.rootMargin || "" },
                      r = a.find((e) => e.root === n.root && e.margin === n.margin);
                    if (r && (t = s.get(r))) return t;
                    let i = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = i.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: i,
                      }),
                      a.push(n),
                      s.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    o.set(e, t),
                    i.observe(e),
                    function () {
                      if ((o.delete(e), i.unobserve(e), 0 === o.size)) {
                        i.disconnect(), s.delete(r);
                        let e = a.findIndex((e) => e.root === r.root && e.margin === r.margin);
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), { root: null == t ? void 0 : t.current, rootMargin: n });
            } else if (!c) {
              let e = (0, i.requestIdleCallback)(() => d(!0));
              return () => (0, i.cancelIdleCallback)(e);
            }
          }, [u, n, t, c, f.current]),
          [
            h,
            c,
            (0, r.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2901: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(9920)._(n(2265)).default.createContext({});
    },
    687: function (e, t) {
      function n(e) {
        let { ampFirst: t = !1, hybrid: n = !1, hasQuery: r = !1 } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    1943: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function i(e) {
        return n.test(e) ? e.replace(r, "\\$&") : e;
      }
    },
    497: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        n(2301);
      let r = n(1564),
        i = n(6161);
      function o(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var n;
        let a,
          l,
          u,
          {
            src: c,
            sizes: d,
            unoptimized: f = !1,
            priority: h = !1,
            loading: p,
            className: m,
            quality: g,
            width: v,
            height: y,
            fill: b = !1,
            style: x,
            overrideSrc: w,
            onLoad: P,
            onLoadingComplete: E,
            placeholder: S = "empty",
            blurDataURL: T,
            fetchPriority: C,
            layout: A,
            objectFit: M,
            objectPosition: R,
            lazyBoundary: k,
            lazyRoot: L,
            ...O
          } = e,
          { imgConf: F, showAltText: j, blurComplete: D, defaultLoader: V } = t,
          I = F || i.imageConfigDefault;
        if ("allSizes" in I) a = I;
        else {
          let e = [...I.deviceSizes, ...I.imageSizes].sort((e, t) => e - t),
            t = I.deviceSizes.sort((e, t) => e - t);
          a = { ...I, allSizes: e, deviceSizes: t };
        }
        if (void 0 === V)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let N = O.loader || V;
        delete O.loader, delete O.srcSet;
        let _ = "__next_img_default" in N;
        if (_) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = N;
          N = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (A) {
          "fill" === A && (b = !0);
          let e = { intrinsic: { maxWidth: "100%", height: "auto" }, responsive: { width: "100%", height: "auto" } }[A];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[A];
          t && !d && (d = t);
        }
        let B = "",
          W = s(v),
          U = s(y);
        if ("object" == typeof (n = c) && (o(n) || void 0 !== n.src)) {
          let e = o(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (((l = e.blurWidth), (u = e.blurHeight), (T = T || e.blurDataURL), (B = e.src), !b)) {
            if (W || U) {
              if (W && !U) {
                let t = W / e.width;
                U = Math.round(e.height * t);
              } else if (!W && U) {
                let t = U / e.height;
                W = Math.round(e.width * t);
              }
            } else (W = e.width), (U = e.height);
          }
        }
        let H = !h && ("lazy" === p || void 0 === p);
        (!(c = "string" == typeof c ? c : B) || c.startsWith("data:") || c.startsWith("blob:")) && ((f = !0), (H = !1)),
          a.unoptimized && (f = !0),
          _ && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
          h && (C = "high");
        let z = s(g),
          $ = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: M,
                  objectPosition: R,
                }
              : {},
            j ? {} : { color: "transparent" },
            x
          ),
          K =
            D || "empty" === S
              ? null
              : "blur" === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: W,
                  heightInt: U,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: T || "",
                  objectFit: $.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          q = K
            ? {
                backgroundSize: $.objectFit || "cover",
                backgroundPosition: $.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: K,
              }
            : {},
          G = (function (e) {
            let { config: t, src: n, unoptimized: r, width: i, quality: o, sizes: s, loader: a } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return { widths: i.filter((t) => t >= r[0] * e), kind: "w" };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [...new Set([t, 2 * t].map((e) => i.find((t) => t >= e) || i[i.length - 1]))],
                      kind: "x",
                    };
              })(t, i, s),
              c = l.length - 1;
            return {
              sizes: s || "w" !== u ? s : "100vw",
              srcSet: l
                .map((e, r) => a({ config: t, src: n, quality: o, width: e }) + " " + ("w" === u ? e : r + 1) + u)
                .join(", "),
              src: a({ config: t, src: n, quality: o, width: l[c] }),
            };
          })({ config: a, src: c, unoptimized: f, width: W, quality: z, sizes: d, loader: N });
        return {
          props: {
            ...O,
            loading: H ? "lazy" : p,
            fetchPriority: C,
            width: W,
            height: U,
            decoding: "async",
            className: m,
            style: { ...$, ...q },
            sizes: G.sizes,
            srcSet: G.srcSet,
            src: w || G.src,
          },
          meta: { unoptimized: f, priority: h, placeholder: S, fill: b },
        };
      }
    },
    8321: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return d;
          },
        });
      let r = n(9920),
        i = n(1452),
        o = n(7437),
        s = i._(n(2265)),
        a = r._(n(5960)),
        l = n(2901),
        u = n(6590),
        c = n(687);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, o.jsx)("meta", { charSet: "utf-8" })];
        return e || t.push((0, o.jsx)("meta", { name: "viewport", content: "width=device-width" })), t;
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === s.default.Fragment
          ? e.concat(
              s.default.Children.toArray(t.props.children).reduce(
                (e, t) => ("string" == typeof t || "number" == typeof t ? e : e.concat(t)),
                []
              )
            )
          : e.concat(t);
      }
      n(2301);
      let h = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(d(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (i) => {
                let o = !0,
                  s = !1;
                if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                  s = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = h.length; e < t; e++) {
                      let t = h[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (o = !1) : n.add(t);
                        else {
                          let e = i.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !s) && n.has(e) ? (o = !1) : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                s.default.cloneElement(e, t)
              );
            }
            return s.default.cloneElement(e, { key: r });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          n = (0, s.useContext)(l.AmpStateContext),
          r = (0, s.useContext)(u.HeadManagerContext);
        return (0, o.jsx)(a.default, {
          reduceComponentsToState: p,
          headManager: r,
          inAmpMode: (0, c.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1564: function (e, t) {
      function n(e) {
        let { widthInt: t, heightInt: n, blurWidth: r, blurHeight: i, blurDataURL: o, objectFit: s } = e,
          a = r ? 40 * r : t,
          l = i ? 40 * i : n,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    3938: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(9920)._(n(2265)),
        i = n(6161),
        o = r.default.createContext(i.imageConfigDefault);
    },
    6161: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    5601: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let r = n(9920),
        i = n(497),
        o = n(8173),
        s = r._(n(1241));
      function a(e) {
        let { props: t } = (0, i.getImgProps)(e, {
          defaultLoader: s.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/dagang2_web_html/next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let l = o.Image;
    },
    1241: function (e, t) {
      function n(e) {
        let { config: t, src: n, width: r, quality: i } = e;
        return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (i || 75);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    291: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(9920)._(n(2265)).default.createContext(null);
    },
    1142: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return o;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return s;
          },
        });
      let r = n(1452)._(n(8323)),
        i = /https?|ftp|gopher|file/;
      function o(e) {
        let { auth: t, hostname: n } = e,
          o = e.protocol || "",
          s = e.pathname || "",
          a = e.hash || "",
          l = e.query || "",
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (u = t + e.host)
            : n && ((u = t + (~n.indexOf(":") ? "[" + n + "]" : n)), e.port && (u += ":" + e.port)),
          l && "object" == typeof l && (l = String(r.urlQueryToSearchParams(l)));
        let c = e.search || (l && "?" + l) || "";
        return (
          o && !o.endsWith(":") && (o += ":"),
          e.slashes || ((!o || i.test(o)) && !1 !== u)
            ? ((u = "//" + (u || "")), s && "/" !== s[0] && (s = "/" + s))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          c && "?" !== c[0] && (c = "?" + c),
          "" + o + u + (s = s.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + a
        );
      }
      let s = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(e) {
        return o(e);
      }
    },
    9195: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return i.isDynamicRoute;
          },
        });
      let r = n(9089),
        i = n(8083);
    },
    20: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(1533),
        i = n(3169);
      function o(e, t, n) {
        let o = "",
          s = (0, i.getRouteRegex)(e),
          a = s.groups,
          l = (t !== e ? (0, r.getRouteMatcher)(s)(t) : "") || n;
        o = e;
        let u = Object.keys(a);
        return (
          u.every((e) => {
            let t = l[e] || "",
              { repeat: n, optional: r } = a[e],
              i = "[" + (n ? "..." : "") + e + "]";
            return (
              r && (i = (t ? "" : "/") + "[" + i + "]"),
              n && !Array.isArray(t) && (t = [t]),
              (r || e in l) &&
                (o = o.replace(i, n ? t.map((e) => encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/")
            );
          }) || (o = ""),
          { params: u, result: o }
        );
      }
    },
    8083: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(2269),
        i = /\/\[[^/]+?\](?=\/|$)/;
      function o(e) {
        return (
          (0, r.isInterceptionRouteAppPath)(e) && (e = (0, r.extractInterceptionRouteInformation)(e).interceptedRoute),
          i.test(e)
        );
      }
    },
    8029: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(3461),
        i = n(9404);
      function o(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, i.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    5519: function (e, t) {
      function n(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (n[r] = e[r]);
          }),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8323: function (e, t) {
      function n(e) {
        let t = {};
        return (
          e.forEach((e, n) => {
            void 0 === t[n] ? (t[n] = e) : Array.isArray(t[n]) ? t[n].push(e) : (t[n] = [t[n], e]);
          }),
          t
        );
      }
      function r(e) {
        return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e);
      }
      function i(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [n, i] = e;
            Array.isArray(i) ? i.forEach((e) => t.append(n, r(e))) : t.set(n, r(i));
          }),
          t
        );
      }
      function o(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return (
          n.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)), t.forEach((t, n) => e.append(n, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          assign: function () {
            return o;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return i;
          },
        });
    },
    1533: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(3461);
      function i(e) {
        let { re: t, groups: n } = e;
        return (e) => {
          let i = t.exec(e);
          if (!i) return !1;
          let o = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            s = {};
          return (
            Object.keys(n).forEach((e) => {
              let t = n[e],
                r = i[t.pos];
              void 0 !== r && (s[e] = ~r.indexOf("/") ? r.split("/").map((e) => o(e)) : t.repeat ? [o(r)] : o(r));
            }),
            s
          );
        };
      }
    },
    3169: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return f;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return l;
          },
        });
      let r = n(2269),
        i = n(1943),
        o = n(7741);
      function s(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let n = e.startsWith("...");
        return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
      }
      function a(e) {
        let t = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
          n = {},
          a = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = r.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && o) {
                let { key: e, optional: r, repeat: l } = s(o[1]);
                return (n[e] = { pos: a++, repeat: l, optional: r }), "/" + (0, i.escapeStringRegexp)(t) + "([^/]+?)";
              }
              if (!o) return "/" + (0, i.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: r } = s(o[1]);
                return (n[e] = { pos: a++, repeat: t, optional: r }), t ? (r ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)";
              }
            })
            .join(""),
          groups: n,
        };
      }
      function l(e) {
        let { parameterizedRoute: t, groups: n } = a(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: n };
      }
      function u(e) {
        let { interceptionMarker: t, getSafeRouteKey: n, segment: r, routeKeys: o, keyPrefix: a } = e,
          { key: l, optional: u, repeat: c } = s(r),
          d = l.replace(/\W/g, "");
        a && (d = "" + a + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = n()),
          a ? (o[d] = "" + a + l) : (o[d] = l);
        let h = t ? (0, i.escapeStringRegexp)(t) : "";
        return c
          ? u
            ? "(?:/" + h + "(?<" + d + ">.+?))?"
            : "/" + h + "(?<" + d + ">.+?)"
          : "/" + h + "(?<" + d + ">[^/]+?)";
      }
      function c(e, t) {
        let n;
        let s = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((n = 0),
            () => {
              let e = "",
                t = ++n;
              for (; t > 0; ) (e += String.fromCharCode(97 + ((t - 1) % 26))), (t = Math.floor((t - 1) / 26));
              return e;
            }),
          l = {};
        return {
          namedParameterizedRoute: s
            .map((e) => {
              let n = r.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              if (n && o) {
                let [n] = e.split(o[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: n,
                  segment: o[1],
                  routeKeys: l,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return o
                ? u({ getSafeRouteKey: a, segment: o[1], routeKeys: l, keyPrefix: t ? "nxtP" : void 0 })
                : "/" + (0, i.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: l,
        };
      }
      function d(e, t) {
        let n = c(e, t);
        return { ...l(e), namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$", routeKeys: n.routeKeys };
      }
      function f(e, t) {
        let { parameterizedRoute: n } = a(e),
          { catchAll: r = !0 } = t;
        if ("/" === n) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: i } = c(e, !1);
        return { namedRegex: "^" + i + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    9089: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      class n {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName && t.splice(t.indexOf("[[...]]"), 1);
          let n = t.map((t) => this.children.get(t)._smoosh("" + e + t + "/")).reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName && n.push(...this.children.get("[]")._smoosh(e + "[" + this.slugName + "]/")),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(...this.children.get("[...]")._smoosh(e + "[..." + this.restSlugName + "]/")),
            null !== this.optionalRestSlugName &&
              n.push(...this.children.get("[[...]]")._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")),
            n
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let i = e[0];
          if (i.startsWith("[") && i.endsWith("]")) {
            let n = i.slice(1, -1),
              s = !1;
            if (
              (n.startsWith("[") && n.endsWith("]") && ((n = n.slice(1, -1)), (s = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (r = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error("Segment names may not start or end with extra brackets ('" + n + "').");
            if (n.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + n + "').");
            function o(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" + e + "' !== '" + n + "')."
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error('You cannot have the same slug name "' + n + '" repeat within a single dynamic path');
                if (e.replace(/\W/g, "") === i.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(n);
            }
            if (r) {
              if (s) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                o(this.optionalRestSlugName, n), (this.optionalRestSlugName = n), (i = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                o(this.restSlugName, n), (this.restSlugName = n), (i = "[...]");
              }
            } else {
              if (s) throw Error('Optional route parameters are not yet supported ("' + e[0] + '").');
              o(this.slugName, n), (this.slugName = n), (i = "[]");
            }
          }
          this.children.has(i) || this.children.set(i, new n()), this.children.get(i)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(e) {
        let t = new n();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    5960: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(2265),
        i = "undefined" == typeof window,
        o = i ? () => {} : r.useLayoutEffect,
        s = i ? () => {} : r.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function a() {
          if (t && t.mountedInstances) {
            let i = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
            t.updateHead(n(i, e));
          }
        }
        if (i) {
          var l;
          null == t || null == (l = t.mountedInstances) || l.add(e.children), a();
        }
        return (
          o(() => {
            var n;
            return (
              null == t || null == (n = t.mountedInstances) || n.add(e.children),
              () => {
                var n;
                null == t || null == (n = t.mountedInstances) || n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          s(
            () => (
              t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3461: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DecodeError: function () {
            return p;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return v;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return h;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return s;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return o;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return b;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(e) {
        let t,
          n = !1;
        return function () {
          for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
          return n || ((n = !0), (t = e(...i))), t;
        };
      }
      let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = (e) => i.test(e);
      function s() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + "//" + t + (n ? ":" + n : "");
      }
      function a() {
        let { href: e } = window.location,
          t = s();
        return e.substring(t.length);
      }
      function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "");
      }
      async function d(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await d(t.Component, t.ctx) } : {};
        let r = await e.getInitialProps(t);
        if (n && u(n)) return r;
        if (!r)
          throw Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.');
        return r;
      }
      let f = "undefined" != typeof performance,
        h = f && ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e]);
      class p extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class v extends Error {
        constructor(e, t) {
          super(), (this.message = "Failed to load static file for page: " + e + " " + t);
        }
      }
      class y extends Error {
        constructor() {
          super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module");
        }
      }
      function b(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    8143: function (e, t, n) {
      n.d(t, {
        Me: function () {
          return P;
        },
        oo: function () {
          return M;
        },
        US: function () {
          return E;
        },
        RR: function () {
          return C;
        },
        cv: function () {
          return S;
        },
        uY: function () {
          return T;
        },
        dp: function () {
          return A;
        },
      });
      var r = n(7848);
      function i(e, t, n) {
        let i,
          { reference: o, floating: s } = e,
          a = (0, r.Qq)(t),
          l = (0, r.Wh)(t),
          u = (0, r.I4)(l),
          c = (0, r.k3)(t),
          d = "y" === a,
          f = o.x + o.width / 2 - s.width / 2,
          h = o.y + o.height / 2 - s.height / 2,
          p = o[u] / 2 - s[u] / 2;
        switch (c) {
          case "top":
            i = { x: f, y: o.y - s.height };
            break;
          case "bottom":
            i = { x: f, y: o.y + o.height };
            break;
          case "right":
            i = { x: o.x + o.width, y: h };
            break;
          case "left":
            i = { x: o.x - s.width, y: h };
            break;
          default:
            i = { x: o.x, y: o.y };
        }
        switch ((0, r.hp)(t)) {
          case "start":
            i[l] -= p * (n && d ? -1 : 1);
            break;
          case "end":
            i[l] += p * (n && d ? -1 : 1);
        }
        return i;
      }
      let o = async (e, t, n) => {
        let { placement: r = "bottom", strategy: o = "absolute", middleware: s = [], platform: a } = n,
          l = s.filter(Boolean),
          u = await (null == a.isRTL ? void 0 : a.isRTL(t)),
          c = await a.getElementRects({ reference: e, floating: t, strategy: o }),
          { x: d, y: f } = i(c, r, u),
          h = r,
          p = {},
          m = 0;
        for (let n = 0; n < l.length; n++) {
          let { name: s, fn: g } = l[n],
            {
              x: v,
              y: y,
              data: b,
              reset: x,
            } = await g({
              x: d,
              y: f,
              initialPlacement: r,
              placement: h,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: a,
              elements: { reference: e, floating: t },
            });
          (d = null != v ? v : d),
            (f = null != y ? y : f),
            (p = { ...p, [s]: { ...p[s], ...b } }),
            x &&
              m <= 50 &&
              (m++,
              "object" == typeof x &&
                (x.placement && (h = x.placement),
                x.rects &&
                  (c = !0 === x.rects ? await a.getElementRects({ reference: e, floating: t, strategy: o }) : x.rects),
                ({ x: d, y: f } = i(c, h, u))),
              (n = -1));
        }
        return { x: d, y: f, placement: h, strategy: o, middlewareData: p };
      };
      async function s(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: i, y: o, platform: s, rects: a, elements: l, strategy: u } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: f = "floating",
            altBoundary: h = !1,
            padding: p = 0,
          } = (0, r.ku)(t, e),
          m = (0, r.yd)(p),
          g = l[h ? ("floating" === f ? "reference" : "floating") : f],
          v = (0, r.JB)(
            await s.getClippingRect({
              element:
                null == (n = await (null == s.isElement ? void 0 : s.isElement(g))) || n
                  ? g
                  : g.contextElement ||
                    (await (null == s.getDocumentElement ? void 0 : s.getDocumentElement(l.floating))),
              boundary: c,
              rootBoundary: d,
              strategy: u,
            })
          ),
          y = "floating" === f ? { x: i, y: o, width: a.floating.width, height: a.floating.height } : a.reference,
          b = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(l.floating)),
          x = ((await (null == s.isElement ? void 0 : s.isElement(b))) &&
            (await (null == s.getScale ? void 0 : s.getScale(b)))) || { x: 1, y: 1 },
          w = (0, r.JB)(
            s.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: y,
                  offsetParent: b,
                  strategy: u,
                })
              : y
          );
        return {
          top: (v.top - w.top + m.top) / x.y,
          bottom: (w.bottom - v.bottom + m.bottom) / x.y,
          left: (v.left - w.left + m.left) / x.x,
          right: (w.right - v.right + m.right) / x.x,
        };
      }
      async function a(e, t) {
        let { placement: n, platform: i, elements: o } = e,
          s = await (null == i.isRTL ? void 0 : i.isRTL(o.floating)),
          a = (0, r.k3)(n),
          l = (0, r.hp)(n),
          u = "y" === (0, r.Qq)(n),
          c = ["left", "top"].includes(a) ? -1 : 1,
          d = s && u ? -1 : 1,
          f = (0, r.ku)(t, e),
          {
            mainAxis: h,
            crossAxis: p,
            alignmentAxis: m,
          } = "number" == typeof f
            ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
        return (
          l && "number" == typeof m && (p = "end" === l ? -1 * m : m),
          u ? { x: p * d, y: h * c } : { x: h * c, y: p * d }
        );
      }
      var l = n(5224);
      function u(e) {
        let t = (0, l.Dx)(e),
          n = parseFloat(t.width) || 0,
          i = parseFloat(t.height) || 0,
          o = (0, l.Re)(e),
          s = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : i,
          u = (0, r.NM)(n) !== s || (0, r.NM)(i) !== a;
        return u && ((n = s), (i = a)), { width: n, height: i, $: u };
      }
      function c(e) {
        return (0, l.kK)(e) ? e : e.contextElement;
      }
      function d(e) {
        let t = c(e);
        if (!(0, l.Re)(t)) return (0, r.ze)(1);
        let n = t.getBoundingClientRect(),
          { width: i, height: o, $: s } = u(t),
          a = (s ? (0, r.NM)(n.width) : n.width) / i,
          d = (s ? (0, r.NM)(n.height) : n.height) / o;
        return (a && Number.isFinite(a)) || (a = 1), (d && Number.isFinite(d)) || (d = 1), { x: a, y: d };
      }
      let f = (0, r.ze)(0);
      function h(e) {
        let t = (0, l.Jj)(e);
        return (0, l.Pf)() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : f;
      }
      function p(e, t, n, i) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let s = e.getBoundingClientRect(),
          a = c(e),
          u = (0, r.ze)(1);
        t && (i ? (0, l.kK)(i) && (u = d(i)) : (u = d(e)));
        let f = (void 0 === (o = n) && (o = !1), i && (!o || i === (0, l.Jj)(a)) && o) ? h(a) : (0, r.ze)(0),
          p = (s.left + f.x) / u.x,
          m = (s.top + f.y) / u.y,
          g = s.width / u.x,
          v = s.height / u.y;
        if (a) {
          let e = (0, l.Jj)(a),
            t = i && (0, l.kK)(i) ? (0, l.Jj)(i) : i,
            n = e,
            r = (0, l.wK)(n);
          for (; r && i && t !== n; ) {
            let e = d(r),
              t = r.getBoundingClientRect(),
              i = (0, l.Dx)(r),
              o = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
              s = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
            (p *= e.x), (m *= e.y), (g *= e.x), (v *= e.y), (p += o), (m += s), (n = (0, l.Jj)(r)), (r = (0, l.wK)(n));
          }
        }
        return (0, r.JB)({ width: g, height: v, x: p, y: m });
      }
      function m(e) {
        return p((0, l.tF)(e)).left + (0, l.Lw)(e).scrollLeft;
      }
      function g(e, t, n) {
        let i;
        if ("viewport" === t)
          i = (function (e, t) {
            let n = (0, l.Jj)(e),
              r = (0, l.tF)(e),
              i = n.visualViewport,
              o = r.clientWidth,
              s = r.clientHeight,
              a = 0,
              u = 0;
            if (i) {
              (o = i.width), (s = i.height);
              let e = (0, l.Pf)();
              (!e || (e && "fixed" === t)) && ((a = i.offsetLeft), (u = i.offsetTop));
            }
            return { width: o, height: s, x: a, y: u };
          })(e, n);
        else if ("document" === t)
          i = (function (e) {
            let t = (0, l.tF)(e),
              n = (0, l.Lw)(e),
              i = e.ownerDocument.body,
              o = (0, r.Fp)(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
              s = (0, r.Fp)(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight),
              a = -n.scrollLeft + m(e),
              u = -n.scrollTop;
            return (
              "rtl" === (0, l.Dx)(i).direction && (a += (0, r.Fp)(t.clientWidth, i.clientWidth) - o),
              { width: o, height: s, x: a, y: u }
            );
          })((0, l.tF)(e));
        else if ((0, l.kK)(t))
          i = (function (e, t) {
            let n = p(e, !0, "fixed" === t),
              i = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              s = (0, l.Re)(e) ? d(e) : (0, r.ze)(1),
              a = e.clientWidth * s.x;
            return { width: a, height: e.clientHeight * s.y, x: o * s.x, y: i * s.y };
          })(t, n);
        else {
          let n = h(e);
          i = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return (0, r.JB)(i);
      }
      function v(e) {
        return "static" === (0, l.Dx)(e).position;
      }
      function y(e, t) {
        return (0, l.Re)(e) && "fixed" !== (0, l.Dx)(e).position ? (t ? t(e) : e.offsetParent) : null;
      }
      function b(e, t) {
        let n = (0, l.Jj)(e);
        if ((0, l.tR)(e)) return n;
        if (!(0, l.Re)(e)) {
          let t = (0, l.Ow)(e);
          for (; t && !(0, l.Py)(t); ) {
            if ((0, l.kK)(t) && !v(t)) return t;
            t = (0, l.Ow)(t);
          }
          return n;
        }
        let r = y(e, t);
        for (; r && (0, l.Ze)(r) && v(r); ) r = y(r, t);
        return r && (0, l.Py)(r) && v(r) && !(0, l.hT)(r) ? n : r || (0, l.gQ)(e) || n;
      }
      let x = async function (e) {
          let t = this.getOffsetParent || b,
            n = this.getDimensions,
            i = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let i = (0, l.Re)(t),
                o = (0, l.tF)(t),
                s = "fixed" === n,
                a = p(e, !0, s, t),
                u = { scrollLeft: 0, scrollTop: 0 },
                c = (0, r.ze)(0);
              if (i || (!i && !s)) {
                if ((("body" !== (0, l.wk)(t) || (0, l.ao)(o)) && (u = (0, l.Lw)(t)), i)) {
                  let e = p(t, !0, s, t);
                  (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
                } else o && (c.x = m(o));
              }
              return { x: a.left + u.scrollLeft - c.x, y: a.top + u.scrollTop - c.y, width: a.width, height: a.height };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: i.width, height: i.height },
          };
        },
        w = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: i, strategy: o } = e,
              s = "fixed" === o,
              a = (0, l.tF)(i),
              u = !!t && (0, l.tR)(t.floating);
            if (i === a || (u && s)) return n;
            let c = { scrollLeft: 0, scrollTop: 0 },
              f = (0, r.ze)(1),
              h = (0, r.ze)(0),
              m = (0, l.Re)(i);
            if ((m || (!m && !s)) && (("body" !== (0, l.wk)(i) || (0, l.ao)(a)) && (c = (0, l.Lw)(i)), (0, l.Re)(i))) {
              let e = p(i);
              (f = d(i)), (h.x = e.x + i.clientLeft), (h.y = e.y + i.clientTop);
            }
            return {
              width: n.width * f.x,
              height: n.height * f.y,
              x: n.x * f.x - c.scrollLeft * f.x + h.x,
              y: n.y * f.y - c.scrollTop * f.y + h.y,
            };
          },
          getDocumentElement: l.tF,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: i, strategy: o } = e,
              s = [
                ...("clippingAncestors" === n
                  ? (0, l.tR)(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = (0, l.Kx)(e, [], !1).filter((e) => (0, l.kK)(e) && "body" !== (0, l.wk)(e)),
                          i = null,
                          o = "fixed" === (0, l.Dx)(e).position,
                          s = o ? (0, l.Ow)(e) : e;
                        for (; (0, l.kK)(s) && !(0, l.Py)(s); ) {
                          let t = (0, l.Dx)(s),
                            n = (0, l.hT)(s);
                          n || "fixed" !== t.position || (i = null),
                            (
                              o
                                ? !n && !i
                                : (!n &&
                                    "static" === t.position &&
                                    !!i &&
                                    ["absolute", "fixed"].includes(i.position)) ||
                                  ((0, l.ao)(s) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = (0, l.Ow)(t);
                                      return (
                                        !(r === n || !(0, l.kK)(r) || (0, l.Py)(r)) &&
                                        ("fixed" === (0, l.Dx)(r).position || e(r, n))
                                      );
                                    })(e, s))
                            )
                              ? (r = r.filter((e) => e !== s))
                              : (i = t),
                            (s = (0, l.Ow)(s));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                i,
              ],
              a = s[0],
              u = s.reduce((e, n) => {
                let i = g(t, n, o);
                return (
                  (e.top = (0, r.Fp)(i.top, e.top)),
                  (e.right = (0, r.VV)(i.right, e.right)),
                  (e.bottom = (0, r.VV)(i.bottom, e.bottom)),
                  (e.left = (0, r.Fp)(i.left, e.left)),
                  e
                );
              }, g(t, a, o));
            return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
          },
          getOffsetParent: b,
          getElementRects: x,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = u(e);
            return { width: t, height: n };
          },
          getScale: d,
          isElement: l.kK,
          isRTL: function (e) {
            return "rtl" === (0, l.Dx)(e).direction;
          },
        };
      function P(e, t, n, i) {
        let o;
        void 0 === i && (i = {});
        let {
            ancestorScroll: s = !0,
            ancestorResize: a = !0,
            elementResize: u = "function" == typeof ResizeObserver,
            layoutShift: d = "function" == typeof IntersectionObserver,
            animationFrame: f = !1,
          } = i,
          h = c(e),
          m = s || a ? [...(h ? (0, l.Kx)(h) : []), ...(0, l.Kx)(t)] : [];
        m.forEach((e) => {
          s && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
        });
        let g =
            h && d
              ? (function (e, t) {
                  let n,
                    i = null,
                    o = (0, l.tF)(e);
                  function s() {
                    var e;
                    clearTimeout(n), null == (e = i) || e.disconnect(), (i = null);
                  }
                  return (
                    !(function a(l, u) {
                      void 0 === l && (l = !1), void 0 === u && (u = 1), s();
                      let { left: c, top: d, width: f, height: h } = e.getBoundingClientRect();
                      if ((l || t(), !f || !h)) return;
                      let p = (0, r.GW)(d),
                        m = (0, r.GW)(o.clientWidth - (c + f)),
                        g = {
                          rootMargin:
                            -p +
                            "px " +
                            -m +
                            "px " +
                            -(0, r.GW)(o.clientHeight - (d + h)) +
                            "px " +
                            -(0, r.GW)(c) +
                            "px",
                          threshold: (0, r.Fp)(0, (0, r.VV)(1, u)) || 1,
                        },
                        v = !0;
                      function y(e) {
                        let t = e[0].intersectionRatio;
                        if (t !== u) {
                          if (!v) return a();
                          t
                            ? a(!1, t)
                            : (n = setTimeout(() => {
                                a(!1, 1e-7);
                              }, 1e3));
                        }
                        v = !1;
                      }
                      try {
                        i = new IntersectionObserver(y, { ...g, root: o.ownerDocument });
                      } catch (e) {
                        i = new IntersectionObserver(y, g);
                      }
                      i.observe(e);
                    })(!0),
                    s
                  );
                })(h, n)
              : null,
          v = -1,
          y = null;
        u &&
          ((y = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === h &&
              y &&
              (y.unobserve(t),
              cancelAnimationFrame(v),
              (v = requestAnimationFrame(() => {
                var e;
                null == (e = y) || e.observe(t);
              }))),
              n();
          })),
          h && !f && y.observe(h),
          y.observe(t));
        let b = f ? p(e) : null;
        return (
          f &&
            (function t() {
              let r = p(e);
              b && (r.x !== b.x || r.y !== b.y || r.width !== b.width || r.height !== b.height) && n(),
                (b = r),
                (o = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            m.forEach((e) => {
              s && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
            }),
              null == g || g(),
              null == (e = y) || e.disconnect(),
              (y = null),
              f && cancelAnimationFrame(o);
          }
        );
      }
      let E = s,
        S = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                var n, r;
                let { x: i, y: o, placement: s, middlewareData: l } = t,
                  u = await a(t, e);
                return s === (null == (n = l.offset) ? void 0 : n.placement) &&
                  null != (r = l.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: i + u.x, y: o + u.y, data: { ...u, placement: s } };
              },
            }
          );
        },
        T = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                let { x: n, y: i, placement: o } = t,
                  {
                    mainAxis: a = !0,
                    crossAxis: l = !1,
                    limiter: u = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...c
                  } = (0, r.ku)(e, t),
                  d = { x: n, y: i },
                  f = await s(t, c),
                  h = (0, r.Qq)((0, r.k3)(o)),
                  p = (0, r.Rn)(h),
                  m = d[p],
                  g = d[h];
                if (a) {
                  let e = "y" === p ? "top" : "left",
                    t = "y" === p ? "bottom" : "right",
                    n = m + f[e],
                    i = m - f[t];
                  m = (0, r.uZ)(n, m, i);
                }
                if (l) {
                  let e = "y" === h ? "top" : "left",
                    t = "y" === h ? "bottom" : "right",
                    n = g + f[e],
                    i = g - f[t];
                  g = (0, r.uZ)(n, g, i);
                }
                let v = u.fn({ ...t, [p]: m, [h]: g });
                return { ...v, data: { x: v.x - n, y: v.y - i } };
              },
            }
          );
        },
        C = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "flip",
              options: e,
              async fn(t) {
                var n, i, o, a, l;
                let { placement: u, middlewareData: c, rects: d, initialPlacement: f, platform: h, elements: p } = t,
                  {
                    mainAxis: m = !0,
                    crossAxis: g = !0,
                    fallbackPlacements: v,
                    fallbackStrategy: y = "bestFit",
                    fallbackAxisSideDirection: b = "none",
                    flipAlignment: x = !0,
                    ...w
                  } = (0, r.ku)(e, t);
                if (null != (n = c.arrow) && n.alignmentOffset) return {};
                let P = (0, r.k3)(u),
                  E = (0, r.Qq)(f),
                  S = (0, r.k3)(f) === f,
                  T = await (null == h.isRTL ? void 0 : h.isRTL(p.floating)),
                  C = v || (S || !x ? [(0, r.pw)(f)] : (0, r.gy)(f)),
                  A = "none" !== b;
                !v && A && C.push(...(0, r.KX)(f, x, b, T));
                let M = [f, ...C],
                  R = await s(t, w),
                  k = [],
                  L = (null == (i = c.flip) ? void 0 : i.overflows) || [];
                if ((m && k.push(R[P]), g)) {
                  let e = (0, r.i8)(u, d, T);
                  k.push(R[e[0]], R[e[1]]);
                }
                if (((L = [...L, { placement: u, overflows: k }]), !k.every((e) => e <= 0))) {
                  let e = ((null == (o = c.flip) ? void 0 : o.index) || 0) + 1,
                    t = M[e];
                  if (t) return { data: { index: e, overflows: L }, reset: { placement: t } };
                  let n =
                    null ==
                    (a = L.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                      ? void 0
                      : a.placement;
                  if (!n)
                    switch (y) {
                      case "bestFit": {
                        let e =
                          null ==
                          (l = L.filter((e) => {
                            if (A) {
                              let t = (0, r.Qq)(e.placement);
                              return t === E || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : l[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = f;
                    }
                  if (u !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        A = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "size",
              options: e,
              async fn(t) {
                let n, i;
                let { placement: o, rects: a, platform: l, elements: u } = t,
                  { apply: c = () => {}, ...d } = (0, r.ku)(e, t),
                  f = await s(t, d),
                  h = (0, r.k3)(o),
                  p = (0, r.hp)(o),
                  m = "y" === (0, r.Qq)(o),
                  { width: g, height: v } = a.floating;
                "top" === h || "bottom" === h
                  ? ((n = h),
                    (i =
                      p === ((await (null == l.isRTL ? void 0 : l.isRTL(u.floating))) ? "start" : "end")
                        ? "left"
                        : "right"))
                  : ((i = h), (n = "end" === p ? "top" : "bottom"));
                let y = v - f.top - f.bottom,
                  b = g - f.left - f.right,
                  x = (0, r.VV)(v - f[n], y),
                  w = (0, r.VV)(g - f[i], b),
                  P = !t.middlewareData.shift,
                  E = x,
                  S = w;
                if ((m ? (S = p || P ? (0, r.VV)(w, b) : b) : (E = p || P ? (0, r.VV)(x, y) : y), P && !p)) {
                  let e = (0, r.Fp)(f.left, 0),
                    t = (0, r.Fp)(f.right, 0),
                    n = (0, r.Fp)(f.top, 0),
                    i = (0, r.Fp)(f.bottom, 0);
                  m
                    ? (S = g - 2 * (0 !== e || 0 !== t ? e + t : (0, r.Fp)(f.left, f.right)))
                    : (E = v - 2 * (0 !== n || 0 !== i ? n + i : (0, r.Fp)(f.top, f.bottom)));
                }
                await c({ ...t, availableWidth: S, availableHeight: E });
                let T = await l.getDimensions(u.floating);
                return g !== T.width || v !== T.height ? { reset: { rects: !0 } } : {};
              },
            }
          );
        },
        M = (e, t, n) => {
          let r = new Map(),
            i = { platform: w, ...n },
            s = { ...i.platform, _c: r };
          return o(e, t, { ...i, platform: s });
        };
    },
    4674: function (e, t, n) {
      n.d(t, {
        RR: function () {
          return p;
        },
        YF: function () {
          return d;
        },
        cv: function () {
          return f;
        },
        dp: function () {
          return m;
        },
        uY: function () {
          return h;
        },
      });
      var r = n(8143),
        i = n(2265),
        o = n(4887),
        s = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function a(e, t) {
        let n, r, i;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!a(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = i[r];
            if (("_owner" !== n || !e.$$typeof) && !a(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function l(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function u(e, t) {
        let n = l(e);
        return Math.round(t * n) / n;
      }
      function c(e) {
        let t = i.useRef(e);
        return (
          s(() => {
            t.current = e;
          }),
          t
        );
      }
      function d(e) {
        void 0 === e && (e = {});
        let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: d = [],
            platform: f,
            elements: { reference: h, floating: p } = {},
            transform: m = !0,
            whileElementsMounted: g,
            open: v,
          } = e,
          [y, b] = i.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
          [x, w] = i.useState(d);
        a(x, d) || w(d);
        let [P, E] = i.useState(null),
          [S, T] = i.useState(null),
          C = i.useCallback((e) => {
            e !== k.current && ((k.current = e), E(e));
          }, []),
          A = i.useCallback((e) => {
            e !== L.current && ((L.current = e), T(e));
          }, []),
          M = h || P,
          R = p || S,
          k = i.useRef(null),
          L = i.useRef(null),
          O = i.useRef(y),
          F = null != g,
          j = c(g),
          D = c(f),
          V = i.useCallback(() => {
            if (!k.current || !L.current) return;
            let e = { placement: t, strategy: n, middleware: x };
            D.current && (e.platform = D.current),
              (0, r.oo)(k.current, L.current, e).then((e) => {
                let t = { ...e, isPositioned: !0 };
                I.current &&
                  !a(O.current, t) &&
                  ((O.current = t),
                  o.flushSync(() => {
                    b(t);
                  }));
              });
          }, [x, t, n, D]);
        s(() => {
          !1 === v && O.current.isPositioned && ((O.current.isPositioned = !1), b((e) => ({ ...e, isPositioned: !1 })));
        }, [v]);
        let I = i.useRef(!1);
        s(
          () => (
            (I.current = !0),
            () => {
              I.current = !1;
            }
          ),
          []
        ),
          s(() => {
            if ((M && (k.current = M), R && (L.current = R), M && R)) {
              if (j.current) return j.current(M, R, V);
              V();
            }
          }, [M, R, V, j, F]);
        let N = i.useMemo(() => ({ reference: k, floating: L, setReference: C, setFloating: A }), [C, A]),
          _ = i.useMemo(() => ({ reference: M, floating: R }), [M, R]),
          B = i.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!_.floating) return e;
            let t = u(_.floating, y.x),
              r = u(_.floating, y.y);
            return m
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(l(_.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, m, _.floating, y.x, y.y]);
        return i.useMemo(() => ({ ...y, update: V, refs: N, elements: _, floatingStyles: B }), [y, V, N, _, B]);
      }
      let f = (e, t) => ({ ...(0, r.cv)(e), options: [e, t] }),
        h = (e, t) => ({ ...(0, r.uY)(e), options: [e, t] }),
        p = (e, t) => ({ ...(0, r.RR)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.dp)(e), options: [e, t] });
    },
    600: function (e, t, n) {
      n.d(t, {
        ij: function () {
          return r;
        },
      });
      function r() {
        let e = navigator.userAgentData;
        return e && Array.isArray(e.brands)
          ? e.brands
              .map((e) => {
                let { brand: t, version: n } = e;
                return t + "/" + n;
              })
              .join(" ")
          : navigator.userAgent;
      }
    },
    5224: function (e, t, n) {
      function r(e) {
        return s(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function i(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
      }
      function o(e) {
        var t;
        return null == (t = (s(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
      }
      function s(e) {
        return e instanceof Node || e instanceof i(e).Node;
      }
      function a(e) {
        return e instanceof Element || e instanceof i(e).Element;
      }
      function l(e) {
        return e instanceof HTMLElement || e instanceof i(e).HTMLElement;
      }
      function u(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot);
      }
      function c(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: i } = v(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
      }
      function d(e) {
        return ["table", "td", "th"].includes(r(e));
      }
      function f(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function h(e) {
        let t = m(),
          n = a(e) ? v(e) : e;
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) => (n.willChange || "").includes(e)) ||
          ["paint", "layout", "strict", "content"].some((e) => (n.contain || "").includes(e))
        );
      }
      function p(e) {
        let t = b(e);
        for (; l(t) && !g(t); ) {
          if (h(t)) return t;
          if (f(t)) break;
          t = b(t);
        }
        return null;
      }
      function m() {
        return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
      }
      function g(e) {
        return ["html", "body", "#document"].includes(r(e));
      }
      function v(e) {
        return i(e).getComputedStyle(e);
      }
      function y(e) {
        return a(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function b(e) {
        if ("html" === r(e)) return e;
        let t = e.assignedSlot || e.parentNode || (u(e) && e.host) || o(e);
        return u(t) ? t.host : t;
      }
      function x(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
      }
      n.d(t, {
        Dx: function () {
          return v;
        },
        Jj: function () {
          return i;
        },
        Kx: function () {
          return function e(t, n, r) {
            var o;
            void 0 === n && (n = []), void 0 === r && (r = !0);
            let s = (function e(t) {
                let n = b(t);
                return g(n) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : l(n) && c(n) ? n : e(n);
              })(t),
              a = s === (null == (o = t.ownerDocument) ? void 0 : o.body),
              u = i(s);
            if (a) {
              let t = x(u);
              return n.concat(u, u.visualViewport || [], c(s) ? s : [], t && r ? e(t) : []);
            }
            return n.concat(s, e(s, [], r));
          };
        },
        Lw: function () {
          return y;
        },
        Ow: function () {
          return b;
        },
        Pf: function () {
          return m;
        },
        Py: function () {
          return g;
        },
        Re: function () {
          return l;
        },
        Ze: function () {
          return d;
        },
        ao: function () {
          return c;
        },
        gQ: function () {
          return p;
        },
        hT: function () {
          return h;
        },
        kK: function () {
          return a;
        },
        tF: function () {
          return o;
        },
        tR: function () {
          return f;
        },
        wK: function () {
          return x;
        },
        wk: function () {
          return r;
        },
      });
    },
    7848: function (e, t, n) {
      n.d(t, {
        Fp: function () {
          return i;
        },
        GW: function () {
          return s;
        },
        I4: function () {
          return m;
        },
        JB: function () {
          return S;
        },
        KX: function () {
          return w;
        },
        NM: function () {
          return o;
        },
        Qq: function () {
          return g;
        },
        Rn: function () {
          return p;
        },
        VV: function () {
          return r;
        },
        Wh: function () {
          return v;
        },
        gy: function () {
          return b;
        },
        hp: function () {
          return h;
        },
        i8: function () {
          return y;
        },
        k3: function () {
          return f;
        },
        ku: function () {
          return d;
        },
        pw: function () {
          return P;
        },
        uZ: function () {
          return c;
        },
        yd: function () {
          return E;
        },
        ze: function () {
          return a;
        },
      });
      let r = Math.min,
        i = Math.max,
        o = Math.round,
        s = Math.floor,
        a = (e) => ({ x: e, y: e }),
        l = { left: "right", right: "left", bottom: "top", top: "bottom" },
        u = { start: "end", end: "start" };
      function c(e, t, n) {
        return i(e, r(t, n));
      }
      function d(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function f(e) {
        return e.split("-")[0];
      }
      function h(e) {
        return e.split("-")[1];
      }
      function p(e) {
        return "x" === e ? "y" : "x";
      }
      function m(e) {
        return "y" === e ? "height" : "width";
      }
      function g(e) {
        return ["top", "bottom"].includes(f(e)) ? "y" : "x";
      }
      function v(e) {
        return p(g(e));
      }
      function y(e, t, n) {
        void 0 === n && (n = !1);
        let r = h(e),
          i = v(e),
          o = m(i),
          s = "x" === i ? (r === (n ? "end" : "start") ? "right" : "left") : "start" === r ? "bottom" : "top";
        return t.reference[o] > t.floating[o] && (s = P(s)), [s, P(s)];
      }
      function b(e) {
        let t = P(e);
        return [x(e), t, x(t)];
      }
      function x(e) {
        return e.replace(/start|end/g, (e) => u[e]);
      }
      function w(e, t, n, r) {
        let i = h(e),
          o = (function (e, t, n) {
            let r = ["left", "right"],
              i = ["right", "left"];
            switch (e) {
              case "top":
              case "bottom":
                if (n) return t ? i : r;
                return t ? r : i;
              case "left":
              case "right":
                return t ? ["top", "bottom"] : ["bottom", "top"];
              default:
                return [];
            }
          })(f(e), "start" === n, r);
        return i && ((o = o.map((e) => e + "-" + i)), t && (o = o.concat(o.map(x)))), o;
      }
      function P(e) {
        return e.replace(/left|right|bottom|top/g, (e) => l[e]);
      }
      function E(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function S(e) {
        let { x: t, y: n, width: r, height: i } = e;
        return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n };
      }
    },
    8149: function (e, t, n) {
      let r, i, o, s, a, l, u, c, d, f, h, p, m, g;
      function v(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          ((null === (t = window.navigator.userAgentData) || void 0 === t
            ? void 0
            : t.brands.some((t) => e.test(t.brand))) ||
            e.test(window.navigator.userAgent))
        );
      }
      function y(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          e.test(
            (null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) ||
              window.navigator.platform
          )
        );
      }
      function b(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      n.d(t, {
        J2: function () {
          return tI;
        },
        NO: function () {
          return tD;
        },
        O7: function () {
          return tF;
        },
        Hi: function () {
          return tV;
        },
      });
      let x = b(function () {
          return y(/^Mac/i);
        }),
        w = b(function () {
          return y(/^iPhone/i);
        }),
        P = b(function () {
          return y(/^iPad/i) || (x() && navigator.maxTouchPoints > 1);
        }),
        E = b(function () {
          return w() || P();
        });
      b(function () {
        return x() || E();
      }),
        b(function () {
          return v(/AppleWebKit/i) && !S();
        });
      let S = b(function () {
          return v(/Chrome/i);
        }),
        T = b(function () {
          return v(/Android/i);
        });
      b(function () {
        return v(/Firefox/i);
      });
      let C = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document;
        },
        A = (e) => (e && "window" in e && e.window === e ? e : C(e).defaultView || window);
      var M = n(2265),
        R = n.t(M, 2);
      let k = null,
        L = new Set(),
        O = new Map(),
        F = !1,
        j = !1,
        D = { Tab: !0, Escape: !0 };
      function V(e, t) {
        for (let n of L) n(e, t);
      }
      function I(e) {
        (F = !0),
          e.metaKey ||
            (!x() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((k = "keyboard"), V("keyboard", e));
      }
      function N(e) {
        (k = "pointer"), ("mousedown" === e.type || "pointerdown" === e.type) && ((F = !0), V("pointer", e));
      }
      function _(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (T() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)) &&
          ((F = !0), (k = "virtual"));
      }
      function B(e) {
        e.target !== window &&
          e.target !== document &&
          (F || j || ((k = "virtual"), V("virtual", e)), (F = !1), (j = !1));
      }
      function W() {
        (F = !1), (j = !0);
      }
      function U(e) {
        if ("undefined" == typeof window || O.get(A(e))) return;
        let t = A(e),
          n = C(e),
          r = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (F = !0), r.apply(this, arguments);
        }),
          n.addEventListener("keydown", I, !0),
          n.addEventListener("keyup", I, !0),
          n.addEventListener("click", _, !0),
          t.addEventListener("focus", B, !0),
          t.addEventListener("blur", W, !1),
          "undefined" != typeof PointerEvent
            ? (n.addEventListener("pointerdown", N, !0),
              n.addEventListener("pointermove", N, !0),
              n.addEventListener("pointerup", N, !0))
            : (n.addEventListener("mousedown", N, !0),
              n.addEventListener("mousemove", N, !0),
              n.addEventListener("mouseup", N, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              H(e);
            },
            { once: !0 }
          ),
          O.set(t, { focus: r });
      }
      let H = (e, t) => {
        let n = A(e),
          r = C(e);
        t && r.removeEventListener("DOMContentLoaded", t),
          O.has(n) &&
            ((n.HTMLElement.prototype.focus = O.get(n).focus),
            r.removeEventListener("keydown", I, !0),
            r.removeEventListener("keyup", I, !0),
            r.removeEventListener("click", _, !0),
            n.removeEventListener("focus", B, !0),
            n.removeEventListener("blur", W, !1),
            "undefined" != typeof PointerEvent
              ? (r.removeEventListener("pointerdown", N, !0),
                r.removeEventListener("pointermove", N, !0),
                r.removeEventListener("pointerup", N, !0))
              : (r.removeEventListener("mousedown", N, !0),
                r.removeEventListener("mousemove", N, !0),
                r.removeEventListener("mouseup", N, !0)),
            O.delete(n));
      };
      function z() {
        return "pointer" !== k;
      }
      "undefined" != typeof document &&
        (function (e) {
          let t;
          let n = C(void 0);
          "loading" !== n.readyState
            ? U(void 0)
            : ((t = () => {
                U(void 0);
              }),
              n.addEventListener("DOMContentLoaded", t)),
            () => H(e, t);
        })();
      let $ = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        K = "undefined" != typeof document ? M.useLayoutEffect : () => {};
      class q {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
        }
        preventDefault() {
          (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
        }
        isPropagationStopped() {
          return !1;
        }
        persist() {}
        constructor(e, t) {
          (this.nativeEvent = t),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.bubbles = t.bubbles),
            (this.cancelable = t.cancelable),
            (this.defaultPrevented = t.defaultPrevented),
            (this.eventPhase = t.eventPhase),
            (this.isTrusted = t.isTrusted),
            (this.timeStamp = t.timeStamp),
            (this.type = e);
        }
      }
      function G(e) {
        let t = (0, M.useRef)({ isFocused: !1, observer: null });
        K(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let n = (function (e) {
          let t = (0, M.useRef)(null);
          return (
            K(() => {
              t.current = e;
            }, [e]),
            (0, M.useCallback)((...e) => {
              let n = t.current;
              return null == n ? void 0 : n(...e);
            }, [])
          );
        })((t) => {
          null == e || e(t);
        });
        return (0, M.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let r = e.target;
              r.addEventListener(
                "focusout",
                (e) => {
                  (t.current.isFocused = !1),
                    r.disabled && n(new q("blur", e)),
                    t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
                },
                { once: !0 }
              ),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && r.disabled) {
                    var e;
                    null === (e = t.current.observer) || void 0 === e || e.disconnect();
                    let n = r === document.activeElement ? null : document.activeElement;
                    r.dispatchEvent(new FocusEvent("blur", { relatedTarget: n })),
                      r.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: n }));
                  }
                })),
                t.current.observer.observe(r, { attributes: !0, attributeFilter: ["disabled"] });
            }
          },
          [n]
        );
      }
      let Y = !1,
        Z = 0;
      function X() {
        (Y = !0),
          setTimeout(() => {
            Y = !1;
          }, 50);
      }
      function J(e) {
        "touch" === e.pointerType && X();
      }
      function Q() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent
              ? document.addEventListener("pointerup", J)
              : document.addEventListener("touchend", X),
            Z++,
            () => {
              --Z > 0 ||
                ("undefined" != typeof PointerEvent
                  ? document.removeEventListener("pointerup", J)
                  : document.removeEventListener("touchend", X));
            }
          );
      }
      var ee = Object.defineProperty,
        et = (e, t, n) =>
          t in e ? ee(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
        en = (e, t, n) => (et(e, "symbol" != typeof t ? t + "" : t, n), n);
      class er {
        set(e) {
          this.current !== e && ((this.handoffState = "pending"), (this.currentId = 0), (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
        constructor() {
          en(this, "current", this.detect()), en(this, "handoffState", "pending"), en(this, "currentId", 0);
        }
      }
      let ei = new er();
      function eo(e) {
        return ei.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e && e.hasOwnProperty("current") && e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
      function es(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
      function ea() {
        let e = [],
          t = {
            addEventListener: (e, n, r, i) => (
              e.addEventListener(n, r, i), t.add(() => e.removeEventListener(n, r, i))
            ),
            requestAnimationFrame() {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              let i = requestAnimationFrame(...n);
              return t.add(() => cancelAnimationFrame(i));
            },
            nextFrame() {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
            },
            setTimeout() {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              let i = setTimeout(...n);
              return t.add(() => clearTimeout(i));
            },
            microTask() {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              let i = { current: !0 };
              return (
                es(() => {
                  i.current && n[0]();
                }),
                t.add(() => {
                  i.current = !1;
                })
              );
            },
            style(e, t, n) {
              let r = e.style.getPropertyValue(t);
              return (
                Object.assign(e.style, { [t]: n }),
                this.add(() => {
                  Object.assign(e.style, { [t]: r });
                })
              );
            },
            group(e) {
              let t = ea();
              return e(t), this.add(() => t.dispose());
            },
            add: (t) => (
              e.includes(t) || e.push(t),
              () => {
                let n = e.indexOf(t);
                if (n >= 0) for (let t of e.splice(n, 1)) t();
              }
            ),
            dispose() {
              for (let t of e.splice(0)) t();
            },
          };
        return t;
      }
      function el() {
        let [e] = (0, M.useState)(ea);
        return (0, M.useEffect)(() => () => e.dispose(), [e]), e;
      }
      let eu = (e, t) => {
        ei.isServer ? (0, M.useEffect)(e, t) : (0, M.useLayoutEffect)(e, t);
      };
      function ec(e) {
        let t = (0, M.useRef)(e);
        return (
          eu(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      let ed = function (e) {
        let t = ec(e);
        return M.useCallback(
          function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return t.current(...n);
          },
          [t]
        );
      };
      function ef(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        if (e in t) {
          let n = t[e];
          return "function" == typeof n ? n(...r) : n;
        }
        let o = Error(
          'Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(
            Object.keys(t)
              .map((e) => '"'.concat(e, '"'))
              .join(", "),
            "."
          )
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(o, ef), o);
      }
      let eh = [
          "[contentEditable=true]",
          "[tabindex]",
          "a[href]",
          "area[href]",
          "button:not([disabled])",
          "iframe",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
        ]
          .map((e) => "".concat(e, ":not([tabindex='-1'])"))
          .join(","),
        ep = ["[data-autofocus]"].map((e) => "".concat(e, ":not([tabindex='-1'])")).join(",");
      var em =
          (((r = em || {})[(r.First = 1)] = "First"),
          (r[(r.Previous = 2)] = "Previous"),
          (r[(r.Next = 4)] = "Next"),
          (r[(r.Last = 8)] = "Last"),
          (r[(r.WrapAround = 16)] = "WrapAround"),
          (r[(r.NoScroll = 32)] = "NoScroll"),
          (r[(r.AutoFocus = 64)] = "AutoFocus"),
          r),
        eg =
          (((i = eg || {})[(i.Error = 0)] = "Error"),
          (i[(i.Overflow = 1)] = "Overflow"),
          (i[(i.Success = 2)] = "Success"),
          (i[(i.Underflow = 3)] = "Underflow"),
          i),
        ev = (((o = ev || {})[(o.Previous = -1)] = "Previous"), (o[(o.Next = 1)] = "Next"), o);
      function ey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
        return null == e
          ? []
          : Array.from(e.querySelectorAll(eh)).sort((e, t) =>
              Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER))
            );
      }
      var eb = (((s = eb || {})[(s.Strict = 0)] = "Strict"), (s[(s.Loose = 1)] = "Loose"), s);
      function ex(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (
          e !== (null == (t = eo(e)) ? void 0 : t.body) &&
          ef(n, {
            0: () => e.matches(eh),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(eh)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      var ew = (((a = ew || {})[(a.Keyboard = 0)] = "Keyboard"), (a[(a.Mouse = 1)] = "Mouse"), a);
      function eP(e, t) {
        var n, r, i;
        let {
            sorted: o = !0,
            relativeTo: s = null,
            skipElements: a = [],
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          l = Array.isArray(e) ? (e.length > 0 ? e[0].ownerDocument : document) : e.ownerDocument,
          u = Array.isArray(e)
            ? o
              ? (function (e) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e) => e;
                  return e.slice().sort((e, n) => {
                    let r = t(e),
                      i = t(n);
                    if (null === r || null === i) return 0;
                    let o = r.compareDocumentPosition(i);
                    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
                  });
                })(e)
              : e
            : 64 & t
            ? (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                return null == e
                  ? []
                  : Array.from(e.querySelectorAll(ep)).sort((e, t) =>
                      Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER))
                    );
              })(e)
            : ey(e);
        a.length > 0 &&
          u.length > 1 &&
          (u = u.filter(
            (e) => !a.some((t) => (null != t && "current" in t ? (null == t ? void 0 : t.current) === e : t === e))
          )),
          (s = null != s ? s : l.activeElement);
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, u.indexOf(s)) - 1;
            if (4 & t) return Math.max(0, u.indexOf(s)) + 1;
            if (8 & t) return u.length - 1;
            throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          h = 0,
          p = u.length,
          m;
        do {
          if (h >= p || h + p <= 0) return 0;
          let e = d + h;
          if (16 & t) e = (e + p) % p;
          else {
            if (e < 0) return 3;
            if (e >= p) return 1;
          }
          null == (m = u[e]) || m.focus(f), (h += c);
        } while (m !== l.activeElement);
        return (
          6 & t &&
            null != (i = null == (r = null == (n = m) ? void 0 : n.matches) ? void 0 : r.call(n, "textarea,input")) &&
            i &&
            m.select(),
          2
        );
      }
      function eE() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0)
        );
      }
      function eS(e, t, n, r) {
        let i = ec(n);
        (0, M.useEffect)(() => {
          if (e) return document.addEventListener(t, n, r), () => document.removeEventListener(t, n, r);
          function n(e) {
            i.current(e);
          }
        }, [e, t, r]);
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
      class eT extends Map {
        get(e) {
          let t = super.get(e);
          return void 0 === t && ((t = this.factory(e)), this.set(e, t)), t;
        }
        constructor(e) {
          super(), (this.factory = e);
        }
      }
      function eC(e, t) {
        let n = e(),
          r = new Set();
        return {
          getSnapshot: () => n,
          subscribe: (e) => (r.add(e), () => r.delete(e)),
          dispatch(e) {
            for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
            let a = t[e].call(n, ...o);
            a && ((n = a), r.forEach((e) => e()));
          },
        };
      }
      function eA(e) {
        return (0, M.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot);
      }
      let eM = new eT(() =>
        eC(() => [], {
          ADD(e) {
            return this.includes(e) ? this : [...this, e];
          },
          REMOVE(e) {
            let t = this.indexOf(e);
            if (-1 === t) return this;
            let n = this.slice();
            return n.splice(t, 1), n;
          },
        })
      );
      function eR(e, t) {
        let n = eM.get(t),
          r = (0, M.useId)(),
          i = eA(n);
        if (
          (eu(() => {
            if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
          }, [n, e]),
          !e)
        )
          return !1;
        let o = i.indexOf(r),
          s = i.length;
        return -1 === o && ((o = s), (s += 1)), o === s - 1;
      }
      function ek(e, t, n, r) {
        let i = ec(n);
        (0, M.useEffect)(() => {
          if (e) return window.addEventListener(t, n, r), () => window.removeEventListener(t, n, r);
          function n(e) {
            i.current(e);
          }
        }, [e, t, r]);
      }
      function eL() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return (0, M.useMemo)(() => eo(...t), [...t]);
      }
      function eO() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return Array.from(new Set(t.flatMap((e) => ("string" == typeof e ? e.split(" ") : []))))
          .filter(Boolean)
          .join(" ");
      }
      var eF =
          (((l = eF || {})[(l.None = 0)] = "None"),
          (l[(l.RenderStrategy = 1)] = "RenderStrategy"),
          (l[(l.Static = 2)] = "Static"),
          l),
        ej = (((u = ej || {})[(u.Unmount = 0)] = "Unmount"), (u[(u.Hidden = 1)] = "Hidden"), u);
      function eD(e) {
        let {
          ourProps: t,
          theirProps: n,
          slot: r,
          defaultTag: i,
          features: o,
          visible: s = !0,
          name: a,
          mergeRefs: l,
        } = e;
        l = null != l ? l : eI;
        let u = eN(n, t);
        if (s) return eV(u, r, i, a, l);
        let c = null != o ? o : 0;
        if (2 & c) {
          let { static: e = !1, ...t } = u;
          if (e) return eV(t, r, i, a, l);
        }
        if (1 & c) {
          let { unmount: e = !0, ...t } = u;
          return ef(e ? 0 : 1, {
            0: () => null,
            1: () => eV({ ...t, hidden: !0, style: { display: "none" } }, r, i, a, l),
          });
        }
        return eV(u, r, i, a, l);
      }
      function eV(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 ? arguments[4] : void 0,
          { as: o = n, children: s, refName: a = "ref", ...l } = eU(e, ["unmount", "static"]),
          u = void 0 !== e.ref ? { [a]: e.ref } : {},
          c = "function" == typeof s ? s(t) : s;
        "className" in l && l.className && "function" == typeof l.className && (l.className = l.className(t)),
          l["aria-labelledby"] && l["aria-labelledby"] === l.id && (l["aria-labelledby"] = void 0);
        let d = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, i] of Object.entries(t))
            "boolean" == typeof i && (e = !0),
              !0 === i && n.push(r.replace(/([A-Z])/g, (e) => "-".concat(e.toLowerCase())));
          if (e) for (let e of ((d["data-headlessui-state"] = n.join(" ")), n)) d["data-".concat(e)] = "";
        }
        if (o === M.Fragment && (Object.keys(eW(l)).length > 0 || Object.keys(eW(d)).length > 0)) {
          if (!(0, M.isValidElement)(c) || (Array.isArray(c) && c.length > 1)) {
            if (Object.keys(eW(l)).length > 0)
              throw Error(
                [
                  'Passing props on "Fragment"!',
                  "",
                  "The current component <".concat(r, ' /> is rendering a "Fragment".'),
                  "However we need to passthrough the following props:",
                  Object.keys(eW(l))
                    .concat(Object.keys(eW(d)))
                    .map((e) => "  - ".concat(e))
                    .join("\n"),
                  "",
                  "You can apply a few solutions:",
                  [
                    'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                    "Render a single element as the child so that we can forward the props onto that element.",
                  ]
                    .map((e) => "  - ".concat(e))
                    .join("\n"),
                ].join("\n")
              );
          } else {
            let e = c.props,
              t = null == e ? void 0 : e.className,
              n =
                "function" == typeof t
                  ? function () {
                      for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                      return eO(t(...n), l.className);
                    }
                  : eO(t, l.className),
              r = eN(c.props, eW(eU(l, ["ref"])));
            for (let e in d) e in r && delete d[e];
            return (0, M.cloneElement)(
              c,
              Object.assign({}, r, d, u, { ref: i(c.ref, u.ref) }, n ? { className: n } : {})
            );
          }
        }
        return (0, M.createElement)(
          o,
          Object.assign({}, eU(l, ["ref"]), o !== M.Fragment && u, o !== M.Fragment && d),
          c
        );
      }
      function eI() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.every((e) => null == e)
          ? void 0
          : (e) => {
              for (let n of t) null != n && ("function" == typeof n ? n(e) : (n.current = e));
            };
      }
      function eN() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        let r = {},
          i = {};
        for (let e of t)
          for (let t in e)
            t.startsWith("on") && "function" == typeof e[t]
              ? (null != i[t] || (i[t] = []), i[t].push(e[t]))
              : (r[t] = e[t]);
        if (r.disabled || r["aria-disabled"])
          for (let e in i)
            /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e) &&
              (i[e] = [
                (e) => {
                  var t;
                  return null == (t = null == e ? void 0 : e.preventDefault) ? void 0 : t.call(e);
                },
              ]);
        for (let e in i)
          Object.assign(r, {
            [e](t) {
              for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
              for (let n of i[e]) {
                if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented)
                  return;
                n(t, ...r);
              }
            },
          });
        return r;
      }
      function e_() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        let r = {},
          i = {};
        for (let e of t)
          for (let t in e)
            t.startsWith("on") && "function" == typeof e[t]
              ? (null != i[t] || (i[t] = []), i[t].push(e[t]))
              : (r[t] = e[t]);
        for (let e in i)
          Object.assign(r, {
            [e]() {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              for (let t of i[e]) null == t || t(...n);
            },
          });
        return r;
      }
      function eB(e) {
        var t;
        return Object.assign((0, M.forwardRef)(e), { displayName: null != (t = e.displayName) ? t : e.name });
      }
      function eW(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function eU(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
      var eH =
        (((c = eH || {})[(c.None = 1)] = "None"),
        (c[(c.Focusable = 2)] = "Focusable"),
        (c[(c.Hidden = 4)] = "Hidden"),
        c);
      let ez = eB(function (e, t) {
          var n;
          let { features: r = 1, ...i } = e;
          return eD({
            ourProps: {
              ref: t,
              "aria-hidden": (2 & r) == 2 || (null != (n = i["aria-hidden"]) ? n : void 0),
              hidden: (4 & r) == 4 || void 0,
              style: {
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0",
                ...((4 & r) == 4 && (2 & r) != 2 && { display: "none" }),
              },
            },
            theirProps: i,
            slot: {},
            defaultTag: "span",
            name: "Hidden",
          });
        }),
        e$ = (0, M.createContext)(null);
      function eK(e) {
        let { children: t, node: n } = e,
          [r, i] = (0, M.useState)(null),
          o = eq(null != n ? n : r);
        return M.createElement(
          e$.Provider,
          { value: o },
          t,
          null === o &&
            M.createElement(ez, {
              features: eH.Hidden,
              ref: (e) => {
                var t, n;
                if (e) {
                  for (let r of null != (n = null == (t = eo(e)) ? void 0 : t.querySelectorAll("html > *, body > *"))
                    ? n
                    : [])
                    if (
                      r !== document.body &&
                      r !== document.head &&
                      r instanceof HTMLElement &&
                      null != r &&
                      r.contains(e)
                    ) {
                      i(r);
                      break;
                    }
                }
              },
            })
        );
      }
      function eq() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return null != (e = (0, M.useContext)(e$)) ? e : t;
      }
      let eG = eC(() => new Map(), {
        PUSH(e, t) {
          var n;
          let r = null != (n = this.get(e)) ? n : { doc: e, count: 0, d: ea(), meta: new Set() };
          return r.count++, r.meta.add(t), this.set(e, r), this;
        },
        POP(e, t) {
          let n = this.get(e);
          return n && (n.count--, n.meta.delete(t)), this;
        },
        SCROLL_PREVENT(e) {
          let t,
            { doc: n, d: r, meta: i } = e,
            o = {
              doc: n,
              d: r,
              meta: (function (e) {
                let t = {};
                for (let n of e) Object.assign(t, n(t));
                return t;
              })(i),
            },
            s = [
              eE()
                ? {
                    before(e) {
                      let { doc: t, d: n, meta: r } = e;
                      function i(e) {
                        return r.containers.flatMap((e) => e()).some((t) => t.contains(e));
                      }
                      n.microTask(() => {
                        var e;
                        if ("auto" !== window.getComputedStyle(t.documentElement).scrollBehavior) {
                          let e = ea();
                          e.style(t.documentElement, "scrollBehavior", "auto"),
                            n.add(() => n.microTask(() => e.dispose()));
                        }
                        let r = null != (e = window.scrollY) ? e : window.pageYOffset,
                          o = null;
                        n.addEventListener(
                          t,
                          "click",
                          (e) => {
                            if (e.target instanceof HTMLElement)
                              try {
                                let n = e.target.closest("a");
                                if (!n) return;
                                let { hash: r } = new URL(n.href),
                                  s = t.querySelector(r);
                                s && !i(s) && (o = s);
                              } catch (e) {}
                          },
                          !0
                        ),
                          n.addEventListener(t, "touchstart", (e) => {
                            if (e.target instanceof HTMLElement) {
                              if (i(e.target)) {
                                let t = e.target;
                                for (; t.parentElement && i(t.parentElement); ) t = t.parentElement;
                                n.style(t, "overscrollBehavior", "contain");
                              } else n.style(e.target, "touchAction", "none");
                            }
                          }),
                          n.addEventListener(
                            t,
                            "touchmove",
                            (e) => {
                              if (e.target instanceof HTMLElement && "INPUT" !== e.target.tagName) {
                                if (i(e.target)) {
                                  let t = e.target;
                                  for (
                                    ;
                                    t.parentElement &&
                                    "" !== t.dataset.headlessuiPortal &&
                                    !(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);

                                  )
                                    t = t.parentElement;
                                  "" === t.dataset.headlessuiPortal && e.preventDefault();
                                } else e.preventDefault();
                              }
                            },
                            { passive: !1 }
                          ),
                          n.add(() => {
                            var e;
                            r !== (null != (e = window.scrollY) ? e : window.pageYOffset) && window.scrollTo(0, r),
                              o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), (o = null));
                          });
                      });
                    },
                  }
                : {},
              {
                before(e) {
                  var n;
                  let { doc: r } = e,
                    i = r.documentElement;
                  t = Math.max(0, (null != (n = r.defaultView) ? n : window).innerWidth - i.clientWidth);
                },
                after(e) {
                  let { doc: n, d: r } = e,
                    i = n.documentElement,
                    o = Math.max(0, i.clientWidth - i.offsetWidth),
                    s = Math.max(0, t - o);
                  r.style(i, "paddingRight", "".concat(s, "px"));
                },
              },
              {
                before(e) {
                  let { doc: t, d: n } = e;
                  n.style(t.documentElement, "overflow", "hidden");
                },
              },
            ];
          s.forEach((e) => {
            let { before: t } = e;
            return null == t ? void 0 : t(o);
          }),
            s.forEach((e) => {
              let { after: t } = e;
              return null == t ? void 0 : t(o);
            });
        },
        SCROLL_ALLOW(e) {
          let { d: t } = e;
          t.dispose();
        },
        TEARDOWN(e) {
          let { doc: t } = e;
          this.delete(t);
        },
      });
      eG.subscribe(() => {
        let e = eG.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
          ((r && !e) || (!r && e)) && eG.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && eG.dispatch("TEARDOWN", n);
        }
      });
      let eY = Symbol();
      function eZ(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return Object.assign(e, { [eY]: t });
      }
      function eX() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = (0, M.useRef)(t);
        (0, M.useEffect)(() => {
          r.current = t;
        }, [t]);
        let i = ed((e) => {
          for (let t of r.current) null != t && ("function" == typeof t ? t(e) : (t.current = e));
        });
        return t.every((e) => null == e || (null == e ? void 0 : e[eY])) ? void 0 : i;
      }
      var eJ = (((d = eJ || {})[(d.Forwards = 0)] = "Forwards"), (d[(d.Backwards = 1)] = "Backwards"), d);
      function eQ() {
        let e = (0, M.useRef)(0);
        return (
          ek(
            !0,
            "keydown",
            (t) => {
              "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0);
            },
            !0
          ),
          e
        );
      }
      var e0 =
        (((f = e0 || {})[(f.None = 0)] = "None"),
        (f[(f.Closed = 1)] = "Closed"),
        (f[(f.Enter = 2)] = "Enter"),
        (f[(f.Leave = 4)] = "Leave"),
        f);
      function e1(e) {
        let t = {};
        for (let n in e) !0 === e[n] && (t["data-".concat(n)] = "");
        return t;
      }
      function e2(e, t, n, r) {
        let [i, o] = (0, M.useState)(n),
          {
            hasFlag: s,
            addFlag: a,
            removeFlag: l,
          } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              [t, n] = (0, M.useState)(e),
              r = (0, M.useCallback)((e) => n(e), [t]),
              i = (0, M.useCallback)((e) => n((t) => t | e), [t]),
              o = (0, M.useCallback)((e) => (t & e) === e, [t]);
            return {
              flags: t,
              setFlag: r,
              addFlag: i,
              hasFlag: o,
              removeFlag: (0, M.useCallback)((e) => n((t) => t & ~e), [n]),
              toggleFlag: (0, M.useCallback)((e) => n((t) => t ^ e), [n]),
            };
          })(e && i ? 3 : 0),
          u = (0, M.useRef)(!1),
          c = (0, M.useRef)(!1);
        return (
          eu(() => {
            var i;
            if (e) {
              if ((n && o(!0), !t)) {
                n && a(3);
                return;
              }
              return (
                null == (i = null == r ? void 0 : r.start) || i.call(r, n),
                (function (e, t) {
                  let { prepare: n, run: r, done: i, inFlight: o } = t,
                    s = ea();
                  return (
                    (function (e, t) {
                      let { inFlight: n, prepare: r } = t;
                      if (null != n && n.current) {
                        r();
                        return;
                      }
                      let i = e.style.transition;
                      (e.style.transition = "none"), r(), e.offsetHeight, (e.style.transition = i);
                    })(e, { prepare: n, inFlight: o }),
                    s.nextFrame(() => {
                      s.add(
                        (function (e, t) {
                          let n;
                          let r =
                              ((n = { called: !1 }),
                              function () {
                                for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                                if (!n.called) return (n.called = !0), t(...r);
                              }),
                            i = ea();
                          if (!e) return i.dispose;
                          let { transitionDuration: o, transitionDelay: s } = getComputedStyle(e),
                            [a, l] = [o, s].map((e) => {
                              let [t = 0] = e
                                .split(",")
                                .filter(Boolean)
                                .map((e) => (e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)))
                                .sort((e, t) => t - e);
                              return t;
                            }),
                            u = a + l;
                          if (0 !== u) {
                            let t = i.group((n) => {
                              let i = n.setTimeout(() => {
                                r(), n.dispose();
                              }, u);
                              n.addEventListener(e, "transitionrun", (o) => {
                                o.target === o.currentTarget &&
                                  (i(),
                                  n.addEventListener(e, "transitioncancel", (e) => {
                                    e.target === e.currentTarget && (r(), t());
                                  }));
                              });
                            });
                            i.addEventListener(e, "transitionend", (e) => {
                              e.target === e.currentTarget && (r(), i.dispose());
                            });
                          } else r();
                          return i.dispose;
                        })(e, i)
                      ),
                        r();
                    }),
                    s.dispose
                  );
                })(t, {
                  inFlight: u,
                  prepare() {
                    c.current ? (c.current = !1) : (c.current = u.current),
                      (u.current = !0),
                      c.current || (n ? (a(3), l(4)) : (a(4), l(2)));
                  },
                  run() {
                    c.current ? (n ? (l(3), a(4)) : (l(4), a(3))) : n ? l(1) : a(1);
                  },
                  done() {
                    var e;
                    (c.current && "function" == typeof t.getAnimations && t.getAnimations().length > 0) ||
                      ((u.current = !1), l(7), n || o(!1), null == (e = null == r ? void 0 : r.end) || e.call(r, n));
                  },
                })
              );
            }
          }, [e, n, t, el()]),
          e
            ? [i, { closed: s(1), enter: s(2), leave: s(4), transition: s(2) || s(4) }]
            : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }]
        );
      }
      let e3 = (0, M.createContext)(() => {});
      function e5(e) {
        let { value: t, children: n } = e;
        return M.createElement(e3.Provider, { value: t }, n);
      }
      var e4 = n(913),
        e9 = n(4674),
        e6 = n(8143);
      let e8 = (0, M.createContext)({
        styles: void 0,
        setReference: () => {},
        setFloating: () => {},
        getReferenceProps: () => ({}),
        getFloatingProps: () => ({}),
        slot: {},
      });
      e8.displayName = "FloatingContext";
      let e7 = (0, M.createContext)(null);
      function te(e) {
        var t, n, r, i;
        let o,
          s,
          a,
          { children: l, enabled: u = !0 } = e,
          [c, d] = (0, M.useState)(null),
          [f, h] = (0, M.useState)(0),
          p = (0, M.useRef)(null),
          [m, g] = (0, M.useState)(null);
        eu(() => {
          if (!t) return;
          let e = new MutationObserver(() => {
            let e = window.getComputedStyle(t).maxHeight,
              n = parseFloat(e);
            if (isNaN(n)) return;
            let r = parseInt(e);
            isNaN(r) || (n !== r && (t.style.maxHeight = "".concat(Math.ceil(n), "px")));
          });
          return (
            e.observe(t, { attributes: !0, attributeFilter: ["style"] }),
            () => {
              e.disconnect();
            }
          );
        }, [(t = m)]);
        let v = u && null !== c && null !== m,
          {
            to: y = "bottom",
            gap: b = 0,
            offset: x = 0,
            padding: w = 0,
            inner: P,
          } = ((o = tt(null != (n = null == c ? void 0 : c.gap) ? n : "var(--anchor-gap, 0)", m)),
          (s = tt(null != (r = null == c ? void 0 : c.offset) ? r : "var(--anchor-offset, 0)", m)),
          (a = tt(null != (i = null == c ? void 0 : c.padding) ? i : "var(--anchor-padding, 0)", m)),
          { ...c, gap: o, offset: s, padding: a }),
          [E, S = "center"] = y.split(" ");
        eu(() => {
          v && h(0);
        }, [v]);
        let {
            refs: T,
            floatingStyles: C,
            context: A,
          } = (0, e4.YF)({
            open: v,
            placement:
              "selection" === E
                ? "center" === S
                  ? "bottom"
                  : "bottom-".concat(S)
                : "center" === S
                ? "".concat(E)
                : "".concat(E, "-").concat(S),
            strategy: "absolute",
            transform: !1,
            middleware: [
              (0, e9.cv)({ mainAxis: "selection" === E ? 0 : b, crossAxis: x }),
              (0, e9.uY)({ padding: w }),
              "selection" !== E && (0, e9.RR)({ padding: w }),
              "selection" === E && P
                ? (0, e4.aN)({
                    ...P,
                    padding: w,
                    overflowRef: p,
                    offset: f,
                    minItemsVisible: 4,
                    referenceOverflowThreshold: w,
                    onFallbackChange(e) {
                      var t, n;
                      if (!e) return;
                      let r = A.elements.floating;
                      if (!r) return;
                      let i = parseFloat(getComputedStyle(r).scrollPaddingBottom) || 0,
                        o = Math.min(4, r.childElementCount),
                        s = 0,
                        a = 0;
                      for (let e of null != (n = null == (t = A.elements.floating) ? void 0 : t.childNodes) ? n : [])
                        if (e instanceof HTMLElement) {
                          let t = e.offsetTop,
                            n = t + e.clientHeight + i,
                            l = r.scrollTop,
                            u = l + r.clientHeight;
                          if (t >= l && n <= u) o--;
                          else {
                            (a = Math.max(0, Math.min(n, u) - Math.max(t, l))), (s = e.clientHeight);
                            break;
                          }
                        }
                      o >= 1 &&
                        h((e) => {
                          let t = s * o - a + i;
                          return e >= t ? e : t;
                        });
                    },
                  })
                : null,
              (0, e9.dp)({
                padding: w,
                apply(e) {
                  let { availableWidth: t, availableHeight: n, elements: r } = e;
                  Object.assign(r.floating.style, {
                    overflow: "auto",
                    maxWidth: "".concat(t, "px"),
                    maxHeight: "min(var(--anchor-max-height, 100vh), ".concat(n, "px)"),
                  });
                },
              }),
            ].filter(Boolean),
            whileElementsMounted: e6.Me,
          }),
          [R = E, k = S] = A.placement.split("-");
        "selection" === E && (R = "selection");
        let L = (0, M.useMemo)(() => ({ anchor: [R, k].filter(Boolean).join(" ") }), [R, k]),
          O = (0, e4.Rz)(A, { overflowRef: p, onChange: h }),
          { getReferenceProps: F, getFloatingProps: j } = (0, e4.NI)([O]),
          D = ed((e) => {
            g(e), T.setFloating(e);
          });
        return M.createElement(
          e7.Provider,
          { value: d },
          M.createElement(
            e8.Provider,
            {
              value: {
                setFloating: D,
                setReference: T.setReference,
                styles: C,
                getReferenceProps: F,
                getFloatingProps: j,
                slot: L,
              },
            },
            l
          )
        );
      }
      function tt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
          r = el(),
          i = ed((e, t) => {
            if (null == e) return [n, null];
            if ("number" == typeof e) return [e, null];
            if ("string" == typeof e) {
              if (!t) return [n, null];
              let i = tn(e, t);
              return [
                i,
                (n) => {
                  let o = (function e(t) {
                    let n = /var\((.*)\)/.exec(t);
                    if (n) {
                      let t = n[1].indexOf(",");
                      if (-1 === t) return [n[1]];
                      let r = n[1].slice(0, t).trim(),
                        i = n[1].slice(t + 1).trim();
                      return i ? [r, ...e(i)] : [r];
                    }
                    return [];
                  })(e);
                  {
                    let s = o.map((e) => window.getComputedStyle(t).getPropertyValue(e));
                    r.requestAnimationFrame(function a() {
                      r.nextFrame(a);
                      let l = !1;
                      for (let [e, n] of o.entries()) {
                        let r = window.getComputedStyle(t).getPropertyValue(n);
                        if (s[e] !== r) {
                          (s[e] = r), (l = !0);
                          break;
                        }
                      }
                      if (!l) return;
                      let u = tn(e, t);
                      i !== u && (n(u), (i = u));
                    });
                  }
                  return r.dispose;
                },
              ];
            }
            return [n, null];
          }),
          o = (0, M.useMemo)(() => i(e, t)[0], [e, t]),
          [s = o, a] = (0, M.useState)();
        return (
          eu(() => {
            let [n, r] = i(e, t);
            if ((a(n), r)) return r(a);
          }, [e, t]),
          s
        );
      }
      function tn(e, t) {
        let n = document.createElement("div");
        t.appendChild(n),
          n.style.setProperty("margin-top", "0px", "important"),
          n.style.setProperty("margin-top", e, "important");
        let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
        return t.removeChild(n), r;
      }
      e7.displayName = "PlacementContext";
      let tr = (0, M.createContext)(null);
      tr.displayName = "OpenClosedContext";
      var ti =
        (((h = ti || {})[(h.Open = 1)] = "Open"),
        (h[(h.Closed = 2)] = "Closed"),
        (h[(h.Closing = 4)] = "Closing"),
        (h[(h.Opening = 8)] = "Opening"),
        h);
      function to() {
        return (0, M.useContext)(tr);
      }
      function ts(e) {
        let { value: t, children: n } = e;
        return M.createElement(tr.Provider, { value: t }, n);
      }
      function ta(e) {
        let { children: t } = e;
        return M.createElement(tr.Provider, { value: null }, t);
      }
      function tl(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return (
          !(
            r &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)
          ) && r
        );
      }
      var tu =
          (((p = tu || {}).Space = " "),
          (p.Enter = "Enter"),
          (p.Escape = "Escape"),
          (p.Backspace = "Backspace"),
          (p.Delete = "Delete"),
          (p.ArrowLeft = "ArrowLeft"),
          (p.ArrowUp = "ArrowUp"),
          (p.ArrowRight = "ArrowRight"),
          (p.ArrowDown = "ArrowDown"),
          (p.Home = "Home"),
          (p.End = "End"),
          (p.PageUp = "PageUp"),
          (p.PageDown = "PageDown"),
          (p.Tab = "Tab"),
          p),
        tc = n(4887);
      let td = (0, M.createContext)(!1),
        tf = M.Fragment,
        th = eB(function (e, t) {
          let n,
            r,
            i = (0, M.useRef)(null),
            o = eX(
              eZ((e) => {
                i.current = e;
              }),
              t
            ),
            s = eL(i),
            a = (function (e) {
              let t = (0, M.useContext)(td),
                n = (0, M.useContext)(tm),
                r = eL(e),
                [i, o] = (0, M.useState)(() => {
                  var e;
                  if (!t && null !== n) return null != (e = n.current) ? e : null;
                  if (ei.isServer) return null;
                  let i = null == r ? void 0 : r.getElementById("headlessui-portal-root");
                  if (i) return i;
                  if (null === r) return null;
                  let o = r.createElement("div");
                  return o.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(o);
                });
              return (
                (0, M.useEffect)(() => {
                  null !== i && ((null != r && r.body.contains(i)) || null == r || r.body.appendChild(i));
                }, [i, r]),
                (0, M.useEffect)(() => {
                  t || (null !== n && o(n.current));
                }, [n, o, t]),
                i
              );
            })(i),
            [l] = (0, M.useState)(() => {
              var e;
              return ei.isServer ? null : null != (e = null == s ? void 0 : s.createElement("div")) ? e : null;
            }),
            u = (0, M.useContext)(tg),
            c = (function () {
              let e;
              let t =
                  ((e = "undefined" == typeof document),
                  (0, R.useSyncExternalStore)(
                    () => () => {},
                    () => !1,
                    () => !e
                  )),
                [n, r] = M.useState(ei.isHandoffComplete);
              return (
                n && !1 === ei.isHandoffComplete && r(!1),
                M.useEffect(() => {
                  !0 !== n && r(!0);
                }, [n]),
                M.useEffect(() => ei.handoff(), []),
                !t && n
              );
            })();
          return (
            eu(() => {
              !a || !l || a.contains(l) || (l.setAttribute("data-headlessui-portal", ""), a.appendChild(l));
            }, [a, l]),
            eu(() => {
              if (l && u) return u.register(l);
            }, [u, l]),
            (n = ed(() => {
              var e;
              a &&
                l &&
                (l instanceof Node && a.contains(l) && a.removeChild(l),
                a.childNodes.length <= 0 && (null == (e = a.parentElement) || e.removeChild(a)));
            })),
            (r = (0, M.useRef)(!1)),
            (0, M.useEffect)(
              () => (
                (r.current = !1),
                () => {
                  (r.current = !0),
                    es(() => {
                      r.current && n();
                    });
                }
              ),
              [n]
            ),
            c && a && l
              ? (0, tc.createPortal)(
                  eD({ ourProps: { ref: o }, theirProps: e, slot: {}, defaultTag: tf, name: "Portal" }),
                  l
                )
              : null
          );
        }),
        tp = M.Fragment,
        tm = (0, M.createContext)(null),
        tg = (0, M.createContext)(null),
        tv = Object.assign(
          eB(function (e, t) {
            let n = eX(t),
              { enabled: r = !0, ...i } = e;
            return r
              ? M.createElement(th, { ...i, ref: n })
              : eD({ ourProps: { ref: n }, theirProps: i, slot: {}, defaultTag: tf, name: "Portal" });
          }),
          {
            Group: eB(function (e, t) {
              let { target: n, ...r } = e,
                i = { ref: eX(t) };
              return M.createElement(
                tm.Provider,
                { value: n },
                eD({ ourProps: i, theirProps: r, defaultTag: tp, name: "Popover.Group" })
              );
            }),
          }
        );
      var ty = (((m = ty || {})[(m.Open = 0)] = "Open"), (m[(m.Closed = 1)] = "Closed"), m),
        tb =
          (((g = tb || {})[(g.TogglePopover = 0)] = "TogglePopover"),
          (g[(g.ClosePopover = 1)] = "ClosePopover"),
          (g[(g.SetButton = 2)] = "SetButton"),
          (g[(g.SetButtonId = 3)] = "SetButtonId"),
          (g[(g.SetPanel = 4)] = "SetPanel"),
          (g[(g.SetPanelId = 5)] = "SetPanelId"),
          g);
      let tx = {
          0: (e) => ({ ...e, popoverState: ef(e.popoverState, { 0: 1, 1: 0 }), __demoMode: !1 }),
          1: (e) => (1 === e.popoverState ? e : { ...e, popoverState: 1, __demoMode: !1 }),
          2: (e, t) => (e.button === t.button ? e : { ...e, button: t.button }),
          3: (e, t) => (e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId }),
          4: (e, t) => (e.panel === t.panel ? e : { ...e, panel: t.panel }),
          5: (e, t) => (e.panelId === t.panelId ? e : { ...e, panelId: t.panelId }),
        },
        tw = (0, M.createContext)(null);
      function tP(e) {
        let t = (0, M.useContext)(tw);
        if (null === t) {
          let t = Error("<".concat(e, " /> is missing a parent <Popover /> component."));
          throw (Error.captureStackTrace && Error.captureStackTrace(t, tP), t);
        }
        return t;
      }
      tw.displayName = "PopoverContext";
      let tE = (0, M.createContext)(null);
      function tS(e) {
        let t = (0, M.useContext)(tE);
        if (null === t) {
          let t = Error("<".concat(e, " /> is missing a parent <Popover /> component."));
          throw (Error.captureStackTrace && Error.captureStackTrace(t, tS), t);
        }
        return t;
      }
      tE.displayName = "PopoverAPIContext";
      let tT = (0, M.createContext)(null);
      function tC() {
        return (0, M.useContext)(tT);
      }
      tT.displayName = "PopoverGroupContext";
      let tA = (0, M.createContext)(null);
      function tM(e, t) {
        return ef(t.type, tx, e, t);
      }
      tA.displayName = "PopoverPanelContext";
      let tR = eF.RenderStrategy | eF.Static;
      function tk(e, t) {
        let n = (0, M.useId)(),
          { id: r = "headlessui-popover-backdrop-".concat(n), transition: i = !1, ...o } = e,
          [{ popoverState: s }, a] = tP("Popover.Backdrop"),
          [l, u] = (0, M.useState)(null),
          c = eX(t, u),
          d = to(),
          [f, h] = e2(i, l, null !== d ? (d & ti.Open) === ti.Open : 0 === s),
          p = ed((e) => {
            if (tl(e.currentTarget)) return e.preventDefault();
            a({ type: 1 });
          }),
          m = (0, M.useMemo)(() => ({ open: 0 === s }), [s]);
        return eD({
          ourProps: { ref: c, id: r, "aria-hidden": !0, onClick: p, ...e1(h) },
          theirProps: o,
          slot: m,
          defaultTag: "div",
          features: tR,
          visible: f,
          name: "Popover.Backdrop",
        });
      }
      let tL = eF.RenderStrategy | eF.Static,
        tO = eB(function (e, t) {
          var n, r, i, o, s, a;
          let l, u, c, d, f, h, p, m, g, v, y;
          let { __demoMode: b = !1, ...x } = e,
            w = (0, M.useRef)(null),
            P = eX(
              t,
              eZ((e) => {
                w.current = e;
              })
            ),
            E = (0, M.useRef)([]),
            S = (0, M.useReducer)(tM, {
              __demoMode: b,
              popoverState: b ? 0 : 1,
              buttons: E,
              button: null,
              buttonId: null,
              panel: null,
              panelId: null,
              beforePanelSentinel: (0, M.createRef)(),
              afterPanelSentinel: (0, M.createRef)(),
              afterButtonSentinel: (0, M.createRef)(),
            }),
            [
              {
                popoverState: T,
                button: C,
                buttonId: A,
                panel: R,
                panelId: k,
                beforePanelSentinel: L,
                afterPanelSentinel: O,
                afterButtonSentinel: F,
              },
              j,
            ] = S,
            D = eL(null != (n = w.current) ? n : C),
            V = (0, M.useMemo)(() => {
              if (!C || !R) return !1;
              for (let e of document.querySelectorAll("body > *"))
                if (Number(null == e ? void 0 : e.contains(C)) ^ Number(null == e ? void 0 : e.contains(R))) return !0;
              let e = ey(),
                t = e.indexOf(C),
                n = (t + e.length - 1) % e.length,
                r = (t + 1) % e.length,
                i = e[n],
                o = e[r];
              return !R.contains(i) && !R.contains(o);
            }, [C, R]),
            I = ec(A),
            N = ec(k),
            _ = (0, M.useMemo)(() => ({ buttonId: I, panelId: N, close: () => j({ type: 1 }) }), [I, N, j]),
            B = tC(),
            W = null == B ? void 0 : B.registerPopover,
            U = ed(() => {
              var e;
              return null != (e = null == B ? void 0 : B.isFocusWithinPopoverGroup())
                ? e
                : (null == D ? void 0 : D.activeElement) &&
                    ((null == C ? void 0 : C.contains(D.activeElement)) ||
                      (null == R ? void 0 : R.contains(D.activeElement)));
            });
          (0, M.useEffect)(() => (null == W ? void 0 : W(_)), [W, _]);
          let [H, z] =
              ((l = (0, M.useContext)(tg)),
              (u = (0, M.useRef)([])),
              (c = ed((e) => (u.current.push(e), l && l.register(e), () => d(e)))),
              (d = ed((e) => {
                let t = u.current.indexOf(e);
                -1 !== t && u.current.splice(t, 1), l && l.unregister(e);
              })),
              (f = (0, M.useMemo)(() => ({ register: c, unregister: d, portals: u }), [c, d, u])),
              [
                u,
                (0, M.useMemo)(
                  () =>
                    function (e) {
                      let { children: t } = e;
                      return M.createElement(tg.Provider, { value: f }, t);
                    },
                  [f]
                ),
              ]),
            $ = eq(C),
            K = (function () {
              let {
                  defaultContainers: e = [],
                  portals: t,
                  mainTreeNode: n,
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = eL(n),
                i = ed(() => {
                  var i, o;
                  let s = [];
                  for (let t of e)
                    null !== t &&
                      (t instanceof HTMLElement
                        ? s.push(t)
                        : "current" in t && t.current instanceof HTMLElement && s.push(t.current));
                  if (null != t && t.current) for (let e of t.current) s.push(e);
                  for (let e of null != (i = null == r ? void 0 : r.querySelectorAll("html > *, body > *")) ? i : [])
                    e !== document.body &&
                      e !== document.head &&
                      e instanceof HTMLElement &&
                      "headlessui-portal-root" !== e.id &&
                      ((n &&
                        (e.contains(n) ||
                          e.contains(null == (o = null == n ? void 0 : n.getRootNode()) ? void 0 : o.host))) ||
                        s.some((t) => e.contains(t)) ||
                        s.push(e));
                  return s;
                });
              return { resolveContainers: i, contains: ed((e) => i().some((t) => t.contains(e))) };
            })({ mainTreeNode: $, portals: H, defaultContainers: [C, R] });
          (r = null == D ? void 0 : D.defaultView),
            (i = "focus"),
            (h = ec((e) => {
              var t, n, r, i, o, s;
              e.target !== window &&
                e.target instanceof HTMLElement &&
                0 === T &&
                (U() ||
                  (C &&
                    R &&
                    (K.contains(e.target) ||
                      (null != (n = null == (t = L.current) ? void 0 : t.contains) && n.call(t, e.target)) ||
                      (null != (i = null == (r = O.current) ? void 0 : r.contains) && i.call(r, e.target)) ||
                      (null != (s = null == (o = F.current) ? void 0 : o.contains) && s.call(o, e.target)) ||
                      j({ type: 1 }))));
            })),
            (0, M.useEffect)(() => {
              function e(e) {
                h.current(e);
              }
              return (r = null != r ? r : window).addEventListener(i, e, !0), () => r.removeEventListener(i, e, !0);
            }, [r, i, !0]),
            (o = 0 === T),
            (s = K.resolveContainers),
            (a = (e, t) => {
              j({ type: 1 }), ex(t, eb.Loose) || (e.preventDefault(), null == C || C.focus());
            }),
            (p = eR(o, "outside-click")),
            (m = ec(a)),
            (g = (0, M.useCallback)(
              function (e, t) {
                if (e.defaultPrevented) return;
                let n = t(e);
                if (null !== n && n.getRootNode().contains(n) && n.isConnected) {
                  for (let t of (function e(t) {
                    return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t];
                  })(s))
                    if (null !== t && (t.contains(n) || (e.composed && e.composedPath().includes(t)))) return;
                  return ex(n, eb.Loose) || -1 === n.tabIndex || e.preventDefault(), m.current(e, n);
                }
              },
              [m, s]
            )),
            (v = (0, M.useRef)(null)),
            eS(
              p,
              "pointerdown",
              (e) => {
                var t, n;
                v.current =
                  (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target;
              },
              !0
            ),
            eS(
              p,
              "mousedown",
              (e) => {
                var t, n;
                v.current =
                  (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target;
              },
              !0
            ),
            eS(
              p,
              "click",
              (e) => {
                eE() ||
                  /Android/gi.test(window.navigator.userAgent) ||
                  (v.current && (g(e, () => v.current), (v.current = null)));
              },
              !0
            ),
            (y = (0, M.useRef)({ x: 0, y: 0 })),
            eS(
              p,
              "touchstart",
              (e) => {
                (y.current.x = e.touches[0].clientX), (y.current.y = e.touches[0].clientY);
              },
              !0
            ),
            eS(
              p,
              "touchend",
              (e) => {
                let t = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
                if (!(Math.abs(t.x - y.current.x) >= 30 || Math.abs(t.y - y.current.y) >= 30))
                  return g(e, () => (e.target instanceof HTMLElement ? e.target : null));
              },
              !0
            ),
            ek(
              p,
              "blur",
              (e) =>
                g(e, () =>
                  window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null
                ),
              !0
            );
          let q = ed((e) => {
              j({ type: 1 });
              let t = e
                ? e instanceof HTMLElement
                  ? e
                  : "current" in e && e.current instanceof HTMLElement
                  ? e.current
                  : C
                : C;
              null == t || t.focus();
            }),
            G = (0, M.useMemo)(() => ({ close: q, isPortalled: V }), [q, V]),
            Y = (0, M.useMemo)(() => ({ open: 0 === T, close: q }), [T, q]);
          return M.createElement(
            eK,
            { node: $ },
            M.createElement(
              te,
              null,
              M.createElement(
                tA.Provider,
                { value: null },
                M.createElement(
                  tw.Provider,
                  { value: S },
                  M.createElement(
                    tE.Provider,
                    { value: G },
                    M.createElement(
                      e5,
                      { value: q },
                      M.createElement(
                        ts,
                        { value: ef(T, { 0: ti.Open, 1: ti.Closed }) },
                        M.createElement(
                          z,
                          null,
                          eD({ ourProps: { ref: P }, theirProps: x, slot: Y, defaultTag: "div", name: "Popover" })
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        tF = eB(function (e, t) {
          var n;
          let r = (0, M.useId)(),
            { id: i = "headlessui-popover-button-".concat(r), disabled: o = !1, autoFocus: s = !1, ...a } = e,
            [l, u] = tP("Popover.Button"),
            { isPortalled: c } = tS("Popover.Button"),
            d = (0, M.useRef)(null),
            f = "headlessui-focus-sentinel-".concat((0, M.useId)()),
            h = tC(),
            p = null == h ? void 0 : h.closeOthers,
            m = null !== (0, M.useContext)(tA);
          (0, M.useEffect)(() => {
            if (!m)
              return (
                u({ type: 3, buttonId: i }),
                () => {
                  u({ type: 3, buttonId: null });
                }
              );
          }, [m, i, u]);
          let [g] = (0, M.useState)(() => Symbol()),
            v = eX(
              d,
              t,
              (0, M.useContext)(e8).setReference,
              m
                ? null
                : ed((e) => {
                    if (e) l.buttons.current.push(g);
                    else {
                      let e = l.buttons.current.indexOf(g);
                      -1 !== e && l.buttons.current.splice(e, 1);
                    }
                    l.buttons.current.length > 1 &&
                      console.warn(
                        "You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."
                      ),
                      e && u({ type: 2, button: e });
                  })
            ),
            y = eX(d, t),
            b = eL(d),
            x = ed((e) => {
              var t, n, r;
              if (m) {
                if (1 === l.popoverState) return;
                switch (e.key) {
                  case tu.Space:
                  case tu.Enter:
                    e.preventDefault(),
                      null == (n = (t = e.target).click) || n.call(t),
                      u({ type: 1 }),
                      null == (r = l.button) || r.focus();
                }
              } else
                switch (e.key) {
                  case tu.Space:
                  case tu.Enter:
                    e.preventDefault(),
                      e.stopPropagation(),
                      1 === l.popoverState && (null == p || p(l.buttonId)),
                      u({ type: 0 });
                    break;
                  case tu.Escape:
                    if (0 !== l.popoverState) return null == p ? void 0 : p(l.buttonId);
                    if (!d.current || (null != b && b.activeElement && !d.current.contains(b.activeElement))) return;
                    e.preventDefault(), e.stopPropagation(), u({ type: 1 });
                }
            }),
            w = ed((e) => {
              m || (e.key === tu.Space && e.preventDefault());
            }),
            P = ed((e) => {
              var t, n;
              tl(e.currentTarget) ||
                o ||
                (m
                  ? (u({ type: 1 }), null == (t = l.button) || t.focus())
                  : (e.preventDefault(),
                    e.stopPropagation(),
                    1 === l.popoverState && (null == p || p(l.buttonId)),
                    u({ type: 0 }),
                    null == (n = l.button) || n.focus()));
            }),
            E = ed((e) => {
              e.preventDefault(), e.stopPropagation();
            }),
            { isFocusVisible: S, focusProps: T } = (function (e = {}) {
              var t, n, r;
              let { autoFocus: i = !1, isTextInput: o, within: s } = e,
                a = (0, M.useRef)({ isFocused: !1, isFocusVisible: i || z() }),
                [l, u] = (0, M.useState)(!1),
                [c, d] = (0, M.useState)(() => a.current.isFocused && a.current.isFocusVisible),
                f = (0, M.useCallback)(() => d(a.current.isFocused && a.current.isFocusVisible), []),
                h = (0, M.useCallback)(
                  (e) => {
                    (a.current.isFocused = e), u(e), f();
                  },
                  [f]
                );
              (t = (e) => {
                (a.current.isFocusVisible = e), f();
              }),
                (n = []),
                (r = { isTextInput: o }),
                U(),
                (0, M.useEffect)(() => {
                  let e = (e, n) => {
                    (function (e, t, n) {
                      var r;
                      let i =
                          "undefined" != typeof window
                            ? A(null == n ? void 0 : n.target).HTMLInputElement
                            : HTMLInputElement,
                        o =
                          "undefined" != typeof window
                            ? A(null == n ? void 0 : n.target).HTMLTextAreaElement
                            : HTMLTextAreaElement,
                        s = "undefined" != typeof window ? A(null == n ? void 0 : n.target).HTMLElement : HTMLElement,
                        a =
                          "undefined" != typeof window ? A(null == n ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
                      return !(
                        (e =
                          e ||
                          ((null == n ? void 0 : n.target) instanceof i &&
                            !$.has(null == n ? void 0 : null === (r = n.target) || void 0 === r ? void 0 : r.type)) ||
                          (null == n ? void 0 : n.target) instanceof o ||
                          ((null == n ? void 0 : n.target) instanceof s &&
                            (null == n ? void 0 : n.target.isContentEditable))) &&
                        "keyboard" === t &&
                        n instanceof a &&
                        !D[n.key]
                      );
                    })(!!(null == r ? void 0 : r.isTextInput), e, n) && t(z());
                  };
                  return (
                    L.add(e),
                    () => {
                      L.delete(e);
                    }
                  );
                }, n);
              let { focusProps: p } = (function (e) {
                  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: i } = e,
                    o = (0, M.useCallback)(
                      (e) => {
                        if (e.target === e.currentTarget) return r && r(e), i && i(!1), !0;
                      },
                      [r, i]
                    ),
                    s = G(o),
                    a = (0, M.useCallback)(
                      (e) => {
                        let t = C(e.target);
                        e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), i && i(!0), s(e));
                      },
                      [i, n, s]
                    );
                  return {
                    focusProps: { onFocus: !t && (n || i || r) ? a : void 0, onBlur: !t && (r || i) ? o : void 0 },
                  };
                })({ isDisabled: s, onFocusChange: h }),
                { focusWithinProps: m } = (function (e) {
                  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: i } = e,
                    o = (0, M.useRef)({ isFocusWithin: !1 }),
                    s = (0, M.useCallback)(
                      (e) => {
                        o.current.isFocusWithin &&
                          !e.currentTarget.contains(e.relatedTarget) &&
                          ((o.current.isFocusWithin = !1), n && n(e), i && i(!1));
                      },
                      [n, i, o]
                    ),
                    a = G(s),
                    l = (0, M.useCallback)(
                      (e) => {
                        o.current.isFocusWithin ||
                          document.activeElement !== e.target ||
                          (r && r(e), i && i(!0), (o.current.isFocusWithin = !0), a(e));
                      },
                      [r, i, a]
                    );
                  return t
                    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
                    : { focusWithinProps: { onFocus: l, onBlur: s } };
                })({ isDisabled: !s, onFocusWithinChange: h });
              return { isFocused: l, isFocusVisible: c, focusProps: s ? m : p };
            })({ autoFocus: s }),
            { isHovered: R, hoverProps: k } = (function (e) {
              let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: i } = e,
                [o, s] = (0, M.useState)(!1),
                a = (0, M.useRef)({
                  isHovered: !1,
                  ignoreEmulatedMouseEvents: !1,
                  pointerType: "",
                  target: null,
                }).current;
              (0, M.useEffect)(Q, []);
              let { hoverProps: l, triggerHoverEnd: u } = (0, M.useMemo)(() => {
                let e = (e, r) => {
                    if (((a.pointerType = r), i || "touch" === r || a.isHovered || !e.currentTarget.contains(e.target)))
                      return;
                    a.isHovered = !0;
                    let o = e.currentTarget;
                    (a.target = o), t && t({ type: "hoverstart", target: o, pointerType: r }), n && n(!0), s(!0);
                  },
                  o = (e, t) => {
                    if (((a.pointerType = ""), (a.target = null), "touch" === t || !a.isHovered)) return;
                    a.isHovered = !1;
                    let i = e.currentTarget;
                    r && r({ type: "hoverend", target: i, pointerType: t }), n && n(!1), s(!1);
                  },
                  l = {};
                return (
                  "undefined" != typeof PointerEvent
                    ? ((l.onPointerEnter = (t) => {
                        (Y && "mouse" === t.pointerType) || e(t, t.pointerType);
                      }),
                      (l.onPointerLeave = (e) => {
                        !i && e.currentTarget.contains(e.target) && o(e, e.pointerType);
                      }))
                    : ((l.onTouchStart = () => {
                        a.ignoreEmulatedMouseEvents = !0;
                      }),
                      (l.onMouseEnter = (t) => {
                        a.ignoreEmulatedMouseEvents || Y || e(t, "mouse"), (a.ignoreEmulatedMouseEvents = !1);
                      }),
                      (l.onMouseLeave = (e) => {
                        !i && e.currentTarget.contains(e.target) && o(e, "mouse");
                      })),
                  { hoverProps: l, triggerHoverEnd: o }
                );
              }, [t, n, r, i, a]);
              return (
                (0, M.useEffect)(() => {
                  i && u({ currentTarget: a.target }, a.pointerType);
                }, [i]),
                { hoverProps: l, isHovered: o }
              );
            })({ isDisabled: o }),
            { pressed: O, pressProps: F } = (function () {
              let { disabled: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = (0, M.useRef)(null),
                [n, r] = (0, M.useState)(!1),
                i = el(),
                o = ed(() => {
                  (t.current = null), r(!1), i.dispose();
                }),
                s = ed((e) => {
                  if ((i.dispose(), null === t.current)) {
                    (t.current = e.currentTarget), r(!0);
                    {
                      let n = eo(e.currentTarget);
                      i.addEventListener(n, "pointerup", o, !1),
                        i.addEventListener(
                          n,
                          "pointermove",
                          (e) => {
                            if (t.current) {
                              var n, i;
                              let o, s;
                              r(
                                ((o = e.width / 2),
                                (s = e.height / 2),
                                (n = {
                                  top: e.clientY - s,
                                  right: e.clientX + o,
                                  bottom: e.clientY + s,
                                  left: e.clientX - o,
                                }),
                                (i = t.current.getBoundingClientRect()),
                                !(
                                  !n ||
                                  !i ||
                                  n.right < i.left ||
                                  n.left > i.right ||
                                  n.bottom < i.top ||
                                  n.top > i.bottom
                                ))
                              );
                            }
                          },
                          !1
                        ),
                        i.addEventListener(n, "pointercancel", o, !1);
                    }
                  }
                });
              return { pressed: n, pressProps: e ? {} : { onPointerDown: s, onPointerUp: o, onClick: o } };
            })({ disabled: o }),
            j = 0 === l.popoverState,
            V = (0, M.useMemo)(
              () => ({ open: j, active: O || j, disabled: o, hover: R, focus: S, autofocus: s }),
              [j, R, S, O, o, s]
            ),
            I =
              ((n = l.button),
              (0, M.useMemo)(() => {
                var t;
                if (e.type) return e.type;
                let r = null != (t = e.as) ? t : "button";
                if (
                  ("string" == typeof r && "button" === r.toLowerCase()) ||
                  ((null == n ? void 0 : n.tagName) === "BUTTON" && !n.hasAttribute("type"))
                )
                  return "button";
              }, [e.type, e.as, n])),
            N = m
              ? e_({ ref: y, type: I, onKeyDown: x, onClick: P, disabled: o || void 0, autoFocus: s }, T, k, F)
              : e_(
                  {
                    ref: v,
                    id: l.buttonId,
                    type: I,
                    "aria-expanded": 0 === l.popoverState,
                    "aria-controls": l.panel ? l.panelId : void 0,
                    disabled: o || void 0,
                    autoFocus: s,
                    onKeyDown: x,
                    onKeyUp: w,
                    onClick: P,
                    onMouseDown: E,
                  },
                  T,
                  k,
                  F
                ),
            _ = eQ(),
            B = ed(() => {
              let e = l.panel;
              e &&
                ef(_.current, { [eJ.Forwards]: () => eP(e, em.First), [eJ.Backwards]: () => eP(e, em.Last) }) ===
                  eg.Error &&
                eP(
                  ey().filter((e) => "true" !== e.dataset.headlessuiFocusGuard),
                  ef(_.current, { [eJ.Forwards]: em.Next, [eJ.Backwards]: em.Previous }),
                  { relativeTo: l.button }
                );
            });
          return M.createElement(
            M.Fragment,
            null,
            eD({ ourProps: N, theirProps: a, slot: V, defaultTag: "button", name: "Popover.Button" }),
            j &&
              !m &&
              c &&
              M.createElement(ez, {
                id: f,
                ref: l.afterButtonSentinel,
                features: eH.Focusable,
                "data-headlessui-focus-guard": !0,
                as: "button",
                type: "button",
                onFocus: B,
              })
          );
        }),
        tj = eB(tk),
        tD = eB(tk),
        tV = eB(function (e, t) {
          var n, r;
          let i, o, s;
          let a = (0, M.useId)(),
            {
              id: l = "headlessui-popover-panel-".concat(a),
              focus: u = !1,
              anchor: c,
              portal: d = !1,
              modal: f = !1,
              transition: h = !1,
              ...p
            } = e,
            [m, g] = tP("Popover.Panel"),
            { close: v, isPortalled: y } = tS("Popover.Panel"),
            b = "headlessui-focus-sentinel-before-".concat(a),
            x = "headlessui-focus-sentinel-after-".concat(a),
            w = (0, M.useRef)(null),
            P = (0, M.useMemo)(() => (c ? ("string" == typeof c ? { to: c } : c) : null), [c]),
            [E, S] = (function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              !1 === e && (e = null), "string" == typeof e && (e = { to: e });
              let t = (0, M.useContext)(e7),
                n = (0, M.useMemo)(
                  () => e,
                  [
                    JSON.stringify(
                      e,
                      "undefined" != typeof HTMLElement
                        ? (e, t) => (t instanceof HTMLElement ? t.outerHTML : t)
                        : void 0
                    ),
                  ]
                );
              eu(() => {
                null == t || t(null != n ? n : null);
              }, [t, n]);
              let r = (0, M.useContext)(e8);
              return (0, M.useMemo)(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
            })(P),
            T = (function () {
              let { getFloatingProps: e, slot: t } = (0, M.useContext)(e8);
              return (0, M.useCallback)(
                function () {
                  for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                  return Object.assign({}, e(...r), { "data-anchor": t.anchor });
                },
                [e, t]
              );
            })();
          P && (d = !0);
          let C = eX(
              w,
              t,
              P ? E : null,
              ed((e) => g({ type: 4, panel: e }))
            ),
            A = eL(w),
            R =
              ((i = (0, M.useRef)([])),
              (o = (0, M.useCallback)((e) => {
                for (let t of i.current) null != t && ("function" == typeof t ? t(e) : (t.current = e));
              }, [])),
              function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (!t.every((e) => null == e)) return (i.current = t), o;
              });
          eu(
            () => (
              g({ type: 5, panelId: l }),
              () => {
                g({ type: 5, panelId: null });
              }
            ),
            [l, g]
          );
          let k = to(),
            [L, O] = e2(h, m.panel, null !== k ? (k & ti.Open) === ti.Open : 0 === m.popoverState);
          (n = m.button),
            (r = () => {
              g({ type: 1 });
            }),
            (s = ec((e) => {
              let t = e.getBoundingClientRect();
              0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && r();
            })),
            (0, M.useEffect)(() => {
              if (!L) return;
              let e = null === n ? null : n instanceof HTMLElement ? n : n.current;
              if (!e) return;
              let t = ea();
              if ("undefined" != typeof ResizeObserver) {
                let n = new ResizeObserver(() => s.current(e));
                n.observe(e), t.add(() => n.disconnect());
              }
              if ("undefined" != typeof IntersectionObserver) {
                let n = new IntersectionObserver(() => s.current(e));
                n.observe(e), t.add(() => n.disconnect());
              }
              return () => t.dispose();
            }, [n, s, L]),
            (function (e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => [document.body];
              !(function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => ({ containers: [] }),
                  r = eA(eG),
                  i = t ? r.get(t) : void 0;
                i && i.count,
                  eu(() => {
                    if (!(!t || !e)) return eG.dispatch("PUSH", t, n), () => eG.dispatch("POP", t, n);
                  }, [e, t]);
              })(eR(e, "scroll-lock"), t, (e) => {
                var t;
                return { containers: [...(null != (t = e.containers) ? t : []), n] };
              });
            })(!m.__demoMode && f && L, A);
          let F = ed((e) => {
            var t;
            if (e.key === tu.Escape) {
              if (
                0 !== m.popoverState ||
                !w.current ||
                (null != A && A.activeElement && !w.current.contains(A.activeElement))
              )
                return;
              e.preventDefault(), e.stopPropagation(), g({ type: 1 }), null == (t = m.button) || t.focus();
            }
          });
          (0, M.useEffect)(() => {
            var t;
            e.static || (1 === m.popoverState && (null == (t = e.unmount) || t) && g({ type: 4, panel: null }));
          }, [m.popoverState, e.unmount, e.static, g]),
            (0, M.useEffect)(() => {
              if (m.__demoMode || !u || 0 !== m.popoverState || !w.current) return;
              let e = null == A ? void 0 : A.activeElement;
              w.current.contains(e) || eP(w.current, em.First);
            }, [m.__demoMode, u, w.current, m.popoverState]);
          let j = (0, M.useMemo)(() => ({ open: 0 === m.popoverState, close: v }), [m.popoverState, v]),
            D = e_(P ? T() : {}, {
              ref: C,
              id: l,
              onKeyDown: F,
              onBlur:
                u && 0 === m.popoverState
                  ? (e) => {
                      var t, n, r, i, o;
                      let s = e.relatedTarget;
                      s &&
                        w.current &&
                        ((null != (t = w.current) && t.contains(s)) ||
                          (g({ type: 1 }),
                          ((null != (r = null == (n = m.beforePanelSentinel.current) ? void 0 : n.contains) &&
                            r.call(n, s)) ||
                            (null != (o = null == (i = m.afterPanelSentinel.current) ? void 0 : i.contains) &&
                              o.call(i, s))) &&
                            s.focus({ preventScroll: !0 })));
                    }
                  : void 0,
              tabIndex: -1,
              style: {
                ...p.style,
                ...S,
                "--button-width": (function (e) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    [n, r] = (0, M.useReducer)(() => ({}), {}),
                    i = (0, M.useMemo)(
                      () =>
                        (function (e) {
                          if (null === e) return { width: 0, height: 0 };
                          let { width: t, height: n } = e.getBoundingClientRect();
                          return { width: t, height: n };
                        })(e),
                      [e, n]
                    );
                  return (
                    eu(() => {
                      if (!e) return;
                      let t = new ResizeObserver(r);
                      return (
                        t.observe(e),
                        () => {
                          t.disconnect();
                        }
                      );
                    }, [e]),
                    t ? { width: "".concat(i.width, "px"), height: "".concat(i.height, "px") } : i
                  );
                })(m.button, !0).width,
              },
              ...e1(O),
            }),
            V = eQ(),
            I = ed(() => {
              let e = w.current;
              e &&
                ef(V.current, {
                  [eJ.Forwards]: () => {
                    var t;
                    eP(e, em.First) === eg.Error && (null == (t = m.afterPanelSentinel.current) || t.focus());
                  },
                  [eJ.Backwards]: () => {
                    var e;
                    null == (e = m.button) || e.focus({ preventScroll: !0 });
                  },
                });
            }),
            N = ed(() => {
              let e = w.current;
              e &&
                ef(V.current, {
                  [eJ.Forwards]: () => {
                    var e;
                    if (!m.button) return;
                    let t = ey(),
                      n = t.indexOf(m.button),
                      r = t.slice(0, n + 1),
                      i = [...t.slice(n + 1), ...r];
                    for (let t of i.slice())
                      if ("true" === t.dataset.headlessuiFocusGuard || (null != (e = m.panel) && e.contains(t))) {
                        let e = i.indexOf(t);
                        -1 !== e && i.splice(e, 1);
                      }
                    eP(i, em.First, { sorted: !1 });
                  },
                  [eJ.Backwards]: () => {
                    var t;
                    eP(e, em.Previous) === eg.Error && (null == (t = m.button) || t.focus());
                  },
                });
            });
          return M.createElement(
            ta,
            null,
            M.createElement(
              tA.Provider,
              { value: l },
              M.createElement(
                tE.Provider,
                { value: { close: v, isPortalled: y } },
                M.createElement(
                  tv,
                  { enabled: !!d && (e.static || L) },
                  L &&
                    y &&
                    M.createElement(ez, {
                      id: b,
                      ref: m.beforePanelSentinel,
                      features: eH.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: I,
                    }),
                  eD({
                    mergeRefs: R,
                    ourProps: D,
                    theirProps: p,
                    slot: j,
                    defaultTag: "div",
                    features: tL,
                    visible: L,
                    name: "Popover.Panel",
                  }),
                  L &&
                    y &&
                    M.createElement(ez, {
                      id: x,
                      ref: m.afterPanelSentinel,
                      features: eH.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: N,
                    })
                )
              )
            )
          );
        }),
        tI = Object.assign(tO, {
          Button: tF,
          Backdrop: tD,
          Overlay: tj,
          Panel: tV,
          Group: eB(function (e, t) {
            let n = (0, M.useRef)(null),
              r = eX(n, t),
              [i, o] = (0, M.useState)([]),
              s = ed((e) => {
                o((t) => {
                  let n = t.indexOf(e);
                  if (-1 !== n) {
                    let e = t.slice();
                    return e.splice(n, 1), e;
                  }
                  return t;
                });
              }),
              a = ed((e) => (o((t) => [...t, e]), () => s(e))),
              l = ed(() => {
                var e;
                let t = eo(n);
                if (!t) return !1;
                let r = t.activeElement;
                return (
                  !!(null != (e = n.current) && e.contains(r)) ||
                  i.some((e) => {
                    var n, i;
                    return (
                      (null == (n = t.getElementById(e.buttonId.current)) ? void 0 : n.contains(r)) ||
                      (null == (i = t.getElementById(e.panelId.current)) ? void 0 : i.contains(r))
                    );
                  })
                );
              }),
              u = ed((e) => {
                for (let t of i) t.buttonId.current !== e && t.close();
              }),
              c = (0, M.useMemo)(
                () => ({ registerPopover: a, unregisterPopover: s, isFocusWithinPopoverGroup: l, closeOthers: u }),
                [a, s, l, u]
              ),
              d = (0, M.useMemo)(() => ({}), []);
            return M.createElement(
              eK,
              null,
              M.createElement(
                tT.Provider,
                { value: c },
                eD({ ourProps: { ref: r }, theirProps: e, slot: d, defaultTag: "div", name: "Popover.Group" })
              )
            );
          }),
        });
    },
    4839: function (e, t, n) {
      t.Z = function () {
        for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var o = t.length;
                  for (n = 0; n < o; n++) t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                } else for (r in t) t[r] && (i && (i += " "), (i += r));
              }
              return i;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      };
    },
    5127: function (e, t, n) {
      n.d(t, {
        M: function () {
          return g;
        },
      });
      var r = n(2265),
        i = n(9033);
      function o() {
        let e = (0, r.useRef)(!1);
        return (
          (0, i.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var s = n(9630),
        a = n(7797),
        l = n(458);
      class u extends r.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c({ children: e, isPresent: t }) {
        let n = (0, r.useId)(),
          i = (0, r.useRef)(null),
          o = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: r, top: s, left: a } = o.current;
            if (t || !i.current || !e || !r) return;
            i.current.dataset.motionPopId = n;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${s}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [t]),
          r.createElement(u, { isPresent: t, childRef: i, sizeRef: o }, r.cloneElement(e, { ref: i }))
        );
      }
      let d = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: i,
        custom: o,
        presenceAffectsLayout: s,
        mode: u,
      }) => {
        let d = (0, l.h)(f),
          h = (0, r.useId)(),
          p = (0, r.useMemo)(
            () => ({
              id: h,
              initial: t,
              isPresent: n,
              custom: o,
              onExitComplete: (e) => {
                for (let t of (d.set(e, !0), d.values())) if (!t) return;
                i && i();
              },
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }),
            s ? void 0 : [n]
          );
        return (
          (0, r.useMemo)(() => {
            d.forEach((e, t) => d.set(t, !1));
          }, [n]),
          r.useEffect(() => {
            n || d.size || !i || i();
          }, [n]),
          "popLayout" === u && (e = r.createElement(c, { isPresent: n }, e)),
          r.createElement(a.O.Provider, { value: p }, e)
        );
      };
      function f() {
        return new Map();
      }
      var h = n(5050),
        p = n(9047);
      let m = (e) => e.key || "",
        g = ({
          children: e,
          custom: t,
          initial: n = !0,
          onExitComplete: a,
          exitBeforeEnter: l,
          presenceAffectsLayout: u = !0,
          mode: c = "sync",
        }) => {
          var f;
          (0, p.k)(!l, "Replace exitBeforeEnter with mode='wait'");
          let g =
              (0, r.useContext)(h.p).forceRender ||
              (function () {
                let e = o(),
                  [t, n] = (0, r.useState)(0),
                  i = (0, r.useCallback)(() => {
                    e.current && n(t + 1);
                  }, [t]);
                return [(0, r.useCallback)(() => s.Wi.postRender(i), [i]), t];
              })()[0],
            v = o(),
            y = (function (e) {
              let t = [];
              return (
                r.Children.forEach(e, (e) => {
                  (0, r.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            b = y,
            x = (0, r.useRef)(new Map()).current,
            w = (0, r.useRef)(b),
            P = (0, r.useRef)(new Map()).current,
            E = (0, r.useRef)(!0);
          if (
            ((0, i.L)(() => {
              (E.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let n = m(e);
                    t.set(n, e);
                  });
                })(y, P),
                (w.current = b);
            }),
            (f = () => {
              (E.current = !0), P.clear(), x.clear();
            }),
            (0, r.useEffect)(() => () => f(), []),
            E.current)
          )
            return r.createElement(
              r.Fragment,
              null,
              b.map((e) =>
                r.createElement(
                  d,
                  { key: m(e), isPresent: !0, initial: !!n && void 0, presenceAffectsLayout: u, mode: c },
                  e
                )
              )
            );
          b = [...b];
          let S = w.current.map(m),
            T = y.map(m),
            C = S.length;
          for (let e = 0; e < C; e++) {
            let t = S[e];
            -1 !== T.indexOf(t) || x.has(t) || x.set(t, void 0);
          }
          return (
            "wait" === c && x.size && (b = []),
            x.forEach((e, n) => {
              if (-1 !== T.indexOf(n)) return;
              let i = P.get(n);
              if (!i) return;
              let o = S.indexOf(n),
                s = e;
              s ||
                ((s = r.createElement(
                  d,
                  {
                    key: m(i),
                    isPresent: !1,
                    onExitComplete: () => {
                      x.delete(n);
                      let e = Array.from(P.keys()).filter((e) => !T.includes(e));
                      if (
                        (e.forEach((e) => P.delete(e)),
                        (w.current = y.filter((t) => {
                          let r = m(t);
                          return r === n || e.includes(r);
                        })),
                        !x.size)
                      ) {
                        if (!1 === v.current) return;
                        g(), a && a();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: u,
                    mode: c,
                  },
                  i
                )),
                x.set(n, s)),
                b.splice(o, 0, s);
            }),
            (b = b.map((e) => {
              let t = e.key;
              return x.has(t)
                ? e
                : r.createElement(d, { key: m(e), isPresent: !0, presenceAffectsLayout: u, mode: c }, e);
            })),
            r.createElement(r.Fragment, null, x.size ? b : b.map((e) => (0, r.cloneElement)(e)))
          );
        };
    },
    5050: function (e, t, n) {
      n.d(t, {
        p: function () {
          return r;
        },
      });
      let r = (0, n(2265).createContext)({});
    },
    7797: function (e, t, n) {
      n.d(t, {
        O: function () {
          return r;
        },
      });
      let r = (0, n(2265).createContext)(null);
    },
    9630: function (e, t, n) {
      n.d(t, {
        Pn: function () {
          return a;
        },
        Wi: function () {
          return s;
        },
        frameData: function () {
          return l;
        },
        S6: function () {
          return u;
        },
      });
      var r = n(9276);
      class i {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(e) {
          if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0;
        }
        remove(e) {
          let t = this.order.indexOf(e);
          -1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let o = ["prepare", "read", "update", "preRender", "render", "postRender"],
        {
          schedule: s,
          cancel: a,
          state: l,
          steps: u,
        } = (function (e, t) {
          let n = !1,
            r = !0,
            s = { delta: 0, timestamp: 0, isProcessing: !1 },
            a = o.reduce(
              (e, t) => (
                (e[t] = (function (e) {
                  let t = new i(),
                    n = new i(),
                    r = 0,
                    o = !1,
                    s = !1,
                    a = new WeakSet(),
                    l = {
                      schedule: (e, i = !1, s = !1) => {
                        let l = s && o,
                          u = l ? t : n;
                        return i && a.add(e), u.add(e) && l && o && (r = t.order.length), e;
                      },
                      cancel: (e) => {
                        n.remove(e), a.delete(e);
                      },
                      process: (i) => {
                        if (o) {
                          s = !0;
                          return;
                        }
                        if (((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length)))
                          for (let n = 0; n < r; n++) {
                            let r = t.order[n];
                            r(i), a.has(r) && (l.schedule(r), e());
                          }
                        (o = !1), s && ((s = !1), l.process(i));
                      },
                    };
                  return l;
                })(() => (n = !0))),
                e
              ),
              {}
            ),
            l = (e) => a[e].process(s),
            u = () => {
              let i = performance.now();
              (n = !1),
                (s.delta = r ? 1e3 / 60 : Math.max(Math.min(i - s.timestamp, 40), 1)),
                (s.timestamp = i),
                (s.isProcessing = !0),
                o.forEach(l),
                (s.isProcessing = !1),
                n && t && ((r = !1), e(u));
            },
            c = () => {
              (n = !0), (r = !0), s.isProcessing || e(u);
            };
          return {
            schedule: o.reduce((e, t) => {
              let r = a[t];
              return (e[t] = (e, t = !1, i = !1) => (n || c(), r.schedule(e, t, i))), e;
            }, {}),
            cancel: (e) => o.forEach((t) => a[t].cancel(e)),
            state: s,
            steps: a,
          };
        })("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : r.Z, !0);
    },
    4539: function (e, t, n) {
      let r;
      n.d(t, {
        E: function () {
          return i$;
        },
      });
      var i,
        o,
        s = n(2265);
      let a = (0, s.createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" }),
        l = (0, s.createContext)({});
      var u = n(7797),
        c = n(9033);
      let d = (0, s.createContext)({ strict: !1 }),
        f = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        h = "data-" + f("framerAppearId");
      function p(e) {
        return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current");
      }
      function m(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function g(e) {
        return null !== e && "object" == typeof e && "function" == typeof e.start;
      }
      let v = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        y = ["initial", ...v];
      function b(e) {
        return g(e.animate) || y.some((t) => m(e[t]));
      }
      function x(e) {
        return !!(b(e) || e.variants);
      }
      function w(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let P = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        E = {};
      for (let e in P) E[e] = { isEnabled: (t) => P[e].some((e) => !!t[e]) };
      var S = n(7282),
        T = n(5050);
      let C = (0, s.createContext)({}),
        A = Symbol.for("motionComponentSymbol"),
        M = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function R(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (M.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
        return !1;
      }
      let k = {},
        L = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        O = new Set(L);
      function F(e, { layout: t, layoutId: n }) {
        return O.has(e) || e.startsWith("origin") || ((t || void 0 !== n) && (!!k[e] || "opacity" === e));
      }
      let j = (e) => !!(e && e.getVelocity),
        D = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
        V = L.length,
        I = (e) => (t) => "string" == typeof t && t.startsWith(e),
        N = I("--"),
        _ = I("var(--"),
        B = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
        W = (e, t, n) => Math.min(Math.max(n, e), t),
        U = { test: (e) => "number" == typeof e, parse: parseFloat, transform: (e) => e },
        H = { ...U, transform: (e) => W(0, 1, e) },
        z = { ...U, default: 1 },
        $ = (e) => Math.round(1e5 * e) / 1e5,
        K = /(-)?([\d]*\.?[\d])+/g,
        q = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        G = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function Y(e) {
        return "string" == typeof e;
      }
      let Z = (e) => ({
          test: (t) => Y(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        X = Z("deg"),
        J = Z("%"),
        Q = Z("px"),
        ee = Z("vh"),
        et = Z("vw"),
        en = { ...J, parse: (e) => J.parse(e) / 100, transform: (e) => J.transform(100 * e) },
        er = { ...U, transform: Math.round },
        ei = {
          borderWidth: Q,
          borderTopWidth: Q,
          borderRightWidth: Q,
          borderBottomWidth: Q,
          borderLeftWidth: Q,
          borderRadius: Q,
          radius: Q,
          borderTopLeftRadius: Q,
          borderTopRightRadius: Q,
          borderBottomRightRadius: Q,
          borderBottomLeftRadius: Q,
          width: Q,
          maxWidth: Q,
          height: Q,
          maxHeight: Q,
          size: Q,
          top: Q,
          right: Q,
          bottom: Q,
          left: Q,
          padding: Q,
          paddingTop: Q,
          paddingRight: Q,
          paddingBottom: Q,
          paddingLeft: Q,
          margin: Q,
          marginTop: Q,
          marginRight: Q,
          marginBottom: Q,
          marginLeft: Q,
          rotate: X,
          rotateX: X,
          rotateY: X,
          rotateZ: X,
          scale: z,
          scaleX: z,
          scaleY: z,
          scaleZ: z,
          skew: X,
          skewX: X,
          skewY: X,
          distance: Q,
          translateX: Q,
          translateY: Q,
          translateZ: Q,
          x: Q,
          y: Q,
          z: Q,
          perspective: Q,
          transformPerspective: Q,
          opacity: H,
          originX: en,
          originY: en,
          originZ: Q,
          zIndex: er,
          fillOpacity: H,
          strokeOpacity: H,
          numOctaves: er,
        };
      function eo(e, t, n, r) {
        let { style: i, vars: o, transform: s, transformOrigin: a } = e,
          l = !1,
          u = !1,
          c = !0;
        for (let e in t) {
          let n = t[e];
          if (N(e)) {
            o[e] = n;
            continue;
          }
          let r = ei[e],
            d = B(n, r);
          if (O.has(e)) {
            if (((l = !0), (s[e] = d), !c)) continue;
            n !== (r.default || 0) && (c = !1);
          } else e.startsWith("origin") ? ((u = !0), (a[e] = d)) : (i[e] = d);
        }
        if (
          (!t.transform &&
            (l || r
              ? (i.transform = (function (e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
                  let o = "";
                  for (let t = 0; t < V; t++) {
                    let n = L[t];
                    if (void 0 !== e[n]) {
                      let t = D[n] || n;
                      o += `${t}(${e[n]}) `;
                    }
                  }
                  return (
                    t && !e.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
                    o
                  );
                })(e.transform, n, c, r))
              : i.transform && (i.transform = "none")),
          u)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
          i.transformOrigin = `${e} ${t} ${n}`;
        }
      }
      let es = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
      function ea(e, t, n) {
        for (let r in t) j(t[r]) || F(r, n) || (e[r] = t[r]);
      }
      let el = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function eu(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          el.has(e)
        );
      }
      let ec = (e) => !eu(e);
      try {
        (i = require("@emotion/is-prop-valid").default) && (ec = (e) => (e.startsWith("on") ? !eu(e) : i(e)));
      } catch (e) {}
      function ed(e, t, n) {
        return "string" == typeof e ? e : Q.transform(t + n * e);
      }
      let ef = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        eh = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function ep(
        e,
        {
          attrX: t,
          attrY: n,
          attrScale: r,
          originX: i,
          originY: o,
          pathLength: s,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d,
        f
      ) {
        if ((eo(e, u, c, f), d)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: h, style: p, dimensions: m } = e;
        h.transform && (m && (p.transform = h.transform), delete h.transform),
          m &&
            (void 0 !== i || void 0 !== o || p.transform) &&
            (p.transformOrigin = (function (e, t, n) {
              let r = ed(t, e.x, e.width),
                i = ed(n, e.y, e.height);
              return `${r} ${i}`;
            })(m, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== t && (h.x = t),
          void 0 !== n && (h.y = n),
          void 0 !== r && (h.scale = r),
          void 0 !== s &&
            (function (e, t, n = 1, r = 0, i = !0) {
              e.pathLength = 1;
              let o = i ? ef : eh;
              e[o.offset] = Q.transform(-r);
              let s = Q.transform(t),
                a = Q.transform(n);
              e[o.array] = `${s} ${a}`;
            })(h, s, a, l, !1);
      }
      let em = () => ({ ...es(), attrs: {} }),
        eg = (e) => "string" == typeof e && "svg" === e.toLowerCase();
      function ev(e, { style: t, vars: n }, r, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(r)), n)) e.style.setProperty(o, n[o]);
      }
      let ey = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function eb(e, t, n, r) {
        for (let n in (ev(e, t, void 0, r), t.attrs)) e.setAttribute(ey.has(n) ? n : f(n), t.attrs[n]);
      }
      function ex(e, t) {
        let { style: n } = e,
          r = {};
        for (let i in n) (j(n[i]) || (t.style && j(t.style[i])) || F(i, e)) && (r[i] = n[i]);
        return r;
      }
      function ew(e, t) {
        let n = ex(e, t);
        for (let r in e)
          (j(e[r]) || j(t[r])) &&
            (n[-1 !== L.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = e[r]);
        return n;
      }
      function eP(e, t, n, r = {}, i = {}) {
        return (
          "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
          "string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
          t
        );
      }
      var eE = n(458);
      let eS = (e) => Array.isArray(e),
        eT = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        eC = (e) => (eS(e) ? e[e.length - 1] || 0 : e);
      function eA(e) {
        let t = j(e) ? e.get() : e;
        return eT(t) ? t.toValue() : t;
      }
      let eM = (e) => (t, n) => {
        let r = (0, s.useContext)(l),
          i = (0, s.useContext)(u.O),
          o = () =>
            (function ({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
              let s = {
                latestValues: (function (e, t, n, r) {
                  let i = {},
                    o = r(e, {});
                  for (let e in o) i[e] = eA(o[e]);
                  let { initial: s, animate: a } = e,
                    l = b(e),
                    u = x(e);
                  t &&
                    u &&
                    !l &&
                    !1 !== e.inherit &&
                    (void 0 === s && (s = t.initial), void 0 === a && (a = t.animate));
                  let c = !!n && !1 === n.initial,
                    d = (c = c || !1 === s) ? a : s;
                  return (
                    d &&
                      "boolean" != typeof d &&
                      !g(d) &&
                      (Array.isArray(d) ? d : [d]).forEach((t) => {
                        let n = eP(e, t);
                        if (!n) return;
                        let { transitionEnd: r, transition: o, ...s } = n;
                        for (let e in s) {
                          let t = s[e];
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (i[e] = t);
                        }
                        for (let e in r) i[e] = r[e];
                      }),
                    i
                  );
                })(r, i, o, e),
                renderState: t(),
              };
              return n && (s.mount = (e) => n(r, e, s)), s;
            })(e, t, r, i);
        return n ? o() : (0, eE.h)(o);
      };
      var eR = n(9630);
      let ek = {
          useVisualState: eM({
            scrapeMotionValuesFromProps: ew,
            createRenderState: em,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
              eR.Wi.read(() => {
                try {
                  n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect();
                } catch (e) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                eR.Wi.render(() => {
                  ep(n, r, { enableHardwareAcceleration: !1 }, eg(t.tagName), e.transformTemplate), eb(t, n);
                });
            },
          }),
        },
        eL = { useVisualState: eM({ scrapeMotionValuesFromProps: ex, createRenderState: es }) };
      function eO(e, t, n, r = { passive: !0 }) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
      }
      let eF = (e) => ("mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary);
      function ej(e, t = "page") {
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      let eD = (e) => (t) => eF(t) && e(t, ej(t));
      function eV(e, t, n, r) {
        return eO(e, t, eD(n), r);
      }
      let eI = (e, t) => (n) => t(e(n)),
        eN = (...e) => e.reduce(eI);
      function e_(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let eB = e_("dragHorizontal"),
        eW = e_("dragVertical");
      function eU(e) {
        let t = !1;
        if ("y" === e) t = eW();
        else if ("x" === e) t = eB();
        else {
          let e = eB(),
            n = eW();
          e && n
            ? (t = () => {
                e(), n();
              })
            : (e && e(), n && n());
        }
        return t;
      }
      function eH() {
        let e = eU(!0);
        return !e || (e(), !1);
      }
      class ez {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      function e$(e, t) {
        let n = "onHover" + (t ? "Start" : "End");
        return eV(
          e.current,
          "pointer" + (t ? "enter" : "leave"),
          (r, i) => {
            if ("touch" === r.pointerType || eH()) return;
            let o = e.getProps();
            e.animationState && o.whileHover && e.animationState.setActive("whileHover", t),
              o[n] && eR.Wi.update(() => o[n](r, i));
          },
          { passive: !e.getProps()[n] }
        );
      }
      class eK extends ez {
        mount() {
          this.unmount = eN(e$(this.node, !0), e$(this.node, !1));
        }
        unmount() {}
      }
      class eq extends ez {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
        }
        mount() {
          this.unmount = eN(
            eO(this.node.current, "focus", () => this.onFocus()),
            eO(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let eG = (e, t) => !!t && (e === t || eG(e, t.parentElement));
      var eY = n(9276);
      function eZ(e, t) {
        if (!t) return;
        let n = new PointerEvent("pointer" + e);
        t(n, ej(n));
      }
      class eX extends ez {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = eY.Z),
            (this.removeEndListeners = eY.Z),
            (this.removeAccessibleListeners = eY.Z),
            (this.startPointerPress = (e, t) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                r = eV(
                  window,
                  "pointerup",
                  (e, t) => {
                    if (!this.checkPressEnd()) return;
                    let { onTap: n, onTapCancel: r, globalTapTarget: i } = this.node.getProps();
                    eR.Wi.update(() => {
                      i || eG(this.node.current, e.target) ? n && n(e, t) : r && r(e, t);
                    });
                  },
                  { passive: !(n.onTap || n.onPointerUp) }
                ),
                i = eV(window, "pointercancel", (e, t) => this.cancelPress(e, t), {
                  passive: !(n.onTapCancel || n.onPointerCancel),
                });
              (this.removeEndListeners = eN(r, i)), this.startPress(e, t);
            }),
            (this.startAccessiblePress = () => {
              let e = eO(this.node.current, "keydown", (e) => {
                  "Enter" !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = eO(this.node.current, "keyup", (e) => {
                      "Enter" === e.key &&
                        this.checkPressEnd() &&
                        eZ("up", (e, t) => {
                          let { onTap: n } = this.node.getProps();
                          n && eR.Wi.update(() => n(e, t));
                        });
                    })),
                    eZ("down", (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = eO(this.node.current, "blur", () => {
                  this.isPressing && eZ("cancel", (e, t) => this.cancelPress(e, t));
                });
              this.removeAccessibleListeners = eN(e, t);
            });
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: r } = this.node.getProps();
          r && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
            n && eR.Wi.update(() => n(e, t));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !eH()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && eR.Wi.update(() => n(e, t));
        }
        mount() {
          let e = this.node.getProps(),
            t = eV(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
              passive: !(e.onTapStart || e.onPointerStart),
            }),
            n = eO(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = eN(t, n);
        }
        unmount() {
          this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
        }
      }
      let eJ = new WeakMap(),
        eQ = new WeakMap(),
        e0 = (e) => {
          let t = eJ.get(e.target);
          t && t(e);
        },
        e1 = (e) => {
          e.forEach(e0);
        },
        e2 = { some: 0, all: 1 };
      class e3 extends ez {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: r = "some", once: i } = e,
            o = { root: t ? t.current : void 0, rootMargin: n, threshold: "number" == typeof r ? r : e2[r] };
          return (function (e, t, n) {
            let r = (function ({ root: e, ...t }) {
              let n = e || document;
              eQ.has(n) || eQ.set(n, {});
              let r = eQ.get(n),
                i = JSON.stringify(t);
              return r[i] || (r[i] = new IntersectionObserver(e1, { root: e, ...t })), r[i];
            })(t);
            return (
              eJ.set(e, n),
              r.observe(e),
              () => {
                eJ.delete(e), r.unobserve(e);
              }
            );
          })(this.node.current, o, (e) => {
            let { isIntersecting: t } = e;
            if (this.isInView === t || ((this.isInView = t), i && !t && this.hasEnteredView)) return;
            t && (this.hasEnteredView = !0),
              this.node.animationState && this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
              o = t ? n : r;
            o && o(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (n) => e[n] !== t[n];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function e5(e, t) {
        if (!Array.isArray(t)) return !1;
        let n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function e4(e, t, n) {
        let r = e.getProps();
        return eP(
          r,
          t,
          void 0 !== n ? n : r.custom,
          (function (e) {
            let t = {};
            return e.values.forEach((e, n) => (t[n] = e.get())), t;
          })(e),
          (function (e) {
            let t = {};
            return e.values.forEach((e, n) => (t[n] = e.getVelocity())), t;
          })(e)
        );
      }
      var e9 = n(9047);
      let e6 = (e) => 1e3 * e,
        e8 = (e) => e / 1e3,
        e7 = { current: !1 },
        te = (e) => Array.isArray(e) && "number" == typeof e[0],
        tt = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
        tn = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tt([0, 0.65, 0.55, 1]),
          circOut: tt([0.55, 0, 1, 0.45]),
          backIn: tt([0.31, 0.01, 0.66, -0.59]),
          backOut: tt([0.33, 1.53, 0.69, 0.99]),
        },
        tr = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
      function ti(e, t, n, r) {
        if (e === t && n === r) return eY.Z;
        let i = (t) =>
          (function (e, t, n, r, i) {
            let o, s;
            let a = 0;
            do (o = tr((s = t + (n - t) / 2), r, i) - e) > 0 ? (n = s) : (t = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(t, 0, 1, e, n);
        return (e) => (0 === e || 1 === e ? e : tr(i(e), t, r));
      }
      let to = ti(0.42, 0, 1, 1),
        ts = ti(0, 0, 0.58, 1),
        ta = ti(0.42, 0, 0.58, 1),
        tl = (e) => Array.isArray(e) && "number" != typeof e[0],
        tu = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        tc = (e) => (t) => 1 - e(1 - t),
        td = (e) => 1 - Math.sin(Math.acos(e)),
        tf = tc(td),
        th = tu(td),
        tp = ti(0.33, 1.53, 0.69, 0.99),
        tm = tc(tp),
        tg = tu(tm),
        tv = {
          linear: eY.Z,
          easeIn: to,
          easeInOut: ta,
          easeOut: ts,
          circIn: td,
          circInOut: th,
          circOut: tf,
          backIn: tm,
          backInOut: tg,
          backOut: tp,
          anticipate: (e) => ((e *= 2) < 1 ? 0.5 * tm(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
        },
        ty = (e) => {
          if (Array.isArray(e)) {
            (0, e9.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
            let [t, n, r, i] = e;
            return ti(t, n, r, i);
          }
          return "string" == typeof e ? ((0, e9.k)(void 0 !== tv[e], `Invalid easing type '${e}'`), tv[e]) : e;
        },
        tb = (e, t) => (n) =>
          !!((Y(n) && G.test(n) && n.startsWith(e)) || (t && Object.prototype.hasOwnProperty.call(n, t))),
        tx = (e, t, n) => (r) => {
          if (!Y(r)) return r;
          let [i, o, s, a] = r.match(K);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tw = (e) => W(0, 255, e),
        tP = { ...U, transform: (e) => Math.round(tw(e)) },
        tE = {
          test: tb("rgb", "red"),
          parse: tx("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            tP.transform(e) +
            ", " +
            tP.transform(t) +
            ", " +
            tP.transform(n) +
            ", " +
            $(H.transform(r)) +
            ")",
        },
        tS = {
          test: tb("#"),
          parse: function (e) {
            let t = "",
              n = "",
              r = "",
              i = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (i = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (r = e.substring(3, 4)),
                  (i = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: tE.transform,
        },
        tT = {
          test: tb("hsl", "hue"),
          parse: tx("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            J.transform($(t)) +
            ", " +
            J.transform($(n)) +
            ", " +
            $(H.transform(r)) +
            ")",
        },
        tC = {
          test: (e) => tE.test(e) || tS.test(e) || tT.test(e),
          parse: (e) => (tE.test(e) ? tE.parse(e) : tT.test(e) ? tT.parse(e) : tS.parse(e)),
          transform: (e) => (Y(e) ? e : e.hasOwnProperty("red") ? tE.transform(e) : tT.transform(e)),
        },
        tA = (e, t, n) => -n * e + n * t + e;
      function tM(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (t - e) * 6 * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e;
      }
      let tR = (e, t, n) => {
          let r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r));
        },
        tk = [tS, tE, tT],
        tL = (e) => tk.find((t) => t.test(e));
      function tO(e) {
        let t = tL(e);
        (0, e9.k)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
        let n = t.parse(e);
        return (
          t === tT &&
            (n = (function ({ hue: e, saturation: t, lightness: n, alpha: r }) {
              (e /= 360), (n /= 100);
              let i = 0,
                o = 0,
                s = 0;
              if ((t /= 100)) {
                let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
                  a = 2 * n - r;
                (i = tM(a, r, e + 1 / 3)), (o = tM(a, r, e)), (s = tM(a, r, e - 1 / 3));
              } else i = o = s = n;
              return { red: Math.round(255 * i), green: Math.round(255 * o), blue: Math.round(255 * s), alpha: r };
            })(n)),
          n
        );
      }
      let tF = (e, t) => {
          let n = tO(e),
            r = tO(t),
            i = { ...n };
          return (e) => (
            (i.red = tR(n.red, r.red, e)),
            (i.green = tR(n.green, r.green, e)),
            (i.blue = tR(n.blue, r.blue, e)),
            (i.alpha = tA(n.alpha, r.alpha, e)),
            tE.transform(i)
          );
        },
        tj = {
          regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: eY.Z,
        },
        tD = { regex: q, countKey: "Colors", token: "${c}", parse: tC.parse },
        tV = { regex: K, countKey: "Numbers", token: "${n}", parse: U.parse };
      function tI(e, { regex: t, countKey: n, token: r, parse: i }) {
        let o = e.tokenised.match(t);
        o && ((e["num" + n] = o.length), (e.tokenised = e.tokenised.replace(t, r)), e.values.push(...o.map(i)));
      }
      function tN(e) {
        let t = e.toString(),
          n = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
        return n.value.includes("var(--") && tI(n, tj), tI(n, tD), tI(n, tV), n;
      }
      function t_(e) {
        return tN(e).values;
      }
      function tB(e) {
        let { values: t, numColors: n, numVars: r, tokenised: i } = tN(e),
          o = t.length;
        return (e) => {
          let t = i;
          for (let i = 0; i < o; i++)
            t =
              i < r
                ? t.replace(tj.token, e[i])
                : i < r + n
                ? t.replace(tD.token, tC.transform(e[i]))
                : t.replace(tV.token, $(e[i]));
          return t;
        };
      }
      let tW = (e) => ("number" == typeof e ? 0 : e),
        tU = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              Y(e) &&
              ((null === (t = e.match(K)) || void 0 === t ? void 0 : t.length) || 0) +
                ((null === (n = e.match(q)) || void 0 === n ? void 0 : n.length) || 0) >
                0
            );
          },
          parse: t_,
          createTransformer: tB,
          getAnimatableNone: function (e) {
            let t = t_(e);
            return tB(e)(t.map(tW));
          },
        },
        tH = (e, t) => (n) => `${n > 0 ? t : e}`;
      function tz(e, t) {
        return "number" == typeof e
          ? (n) => tA(e, t, n)
          : tC.test(e)
          ? tF(e, t)
          : e.startsWith("var(")
          ? tH(e, t)
          : tq(e, t);
      }
      let t$ = (e, t) => {
          let n = [...e],
            r = n.length,
            i = e.map((e, n) => tz(e, t[n]));
          return (e) => {
            for (let t = 0; t < r; t++) n[t] = i[t](e);
            return n;
          };
        },
        tK = (e, t) => {
          let n = { ...e, ...t },
            r = {};
          for (let i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = tz(e[i], t[i]));
          return (e) => {
            for (let t in r) n[t] = r[t](e);
            return n;
          };
        },
        tq = (e, t) => {
          let n = tU.createTransformer(t),
            r = tN(e),
            i = tN(t);
          return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers
            ? eN(t$(r.values, i.values), n)
            : ((0, e9.K)(
                !0,
                `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              tH(e, t));
        },
        tG = (e, t, n) => {
          let r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        tY = (e, t) => (n) => tA(e, t, n);
      function tZ(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
        let o = e.length;
        if (((0, e9.k)(o === t.length, "Both input and output ranges must be the same length"), 1 === o))
          return () => t[0];
        e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
        let s = (function (e, t, n) {
            let r = [],
              i =
                n ||
                (function (e) {
                  if ("number" == typeof e);
                  else if ("string" == typeof e) return tC.test(e) ? tF : tq;
                  else if (Array.isArray(e)) return t$;
                  else if ("object" == typeof e) return tK;
                  return tY;
                })(e[0]),
              o = e.length - 1;
            for (let n = 0; n < o; n++) {
              let o = i(e[n], e[n + 1]);
              t && (o = eN(Array.isArray(t) ? t[n] || eY.Z : t, o)), r.push(o);
            }
            return r;
          })(t, r, i),
          a = s.length,
          l = (t) => {
            let n = 0;
            if (a > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            let r = tG(e[n], e[n + 1], t);
            return s[n](r);
          };
        return n ? (t) => l(W(e[0], e[o - 1], t)) : l;
      }
      function tX({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
        let i = tl(r) ? r.map(ty) : ty(r),
          o = { done: !1, value: t[0] },
          s = tZ(
            (n && n.length === t.length
              ? n
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let n = e[e.length - 1];
                      for (let r = 1; r <= t; r++) {
                        let i = tG(0, t, r);
                        e.push(tA(n, 1, i));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            { ease: Array.isArray(i) ? i : t.map(() => i || ta).splice(0, t.length - 1) }
          );
        return { calculatedDuration: e, next: (t) => ((o.value = s(t)), (o.done = t >= e), o) };
      }
      function tJ(e, t, n) {
        var r, i;
        let o = Math.max(t - 5, 0);
        return (r = n - e(o)), (i = t - o) ? (1e3 / i) * r : 0;
      }
      function tQ(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let t0 = ["duration", "bounce"],
        t1 = ["stiffness", "damping", "mass"];
      function t2(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function t3({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
        let i;
        let o = e[0],
          s = e[e.length - 1],
          a = { done: !1, value: o },
          {
            stiffness: l,
            damping: u,
            mass: c,
            duration: d,
            velocity: f,
            isResolvedFromDuration: h,
          } = (function (e) {
            let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
            if (!t2(e, t1) && t2(e, t0)) {
              let n = (function ({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
                let i, o;
                (0, e9.K)(e <= e6(10), "Spring duration must be 10 seconds or less");
                let s = 1 - t;
                (s = W(0.05, 1, s)),
                  (e = W(0.01, 10, e8(e))),
                  s < 1
                    ? ((i = (t) => {
                        let r = t * s,
                          i = r * e;
                        return 0.001 - ((r - n) / tQ(t, s)) * Math.exp(-i);
                      }),
                      (o = (t) => {
                        let r = t * s * e,
                          o = Math.pow(s, 2) * Math.pow(t, 2) * e,
                          a = tQ(Math.pow(t, 2), s);
                        return ((r * n + n - o) * Math.exp(-r) * (-i(t) + 0.001 > 0 ? -1 : 1)) / a;
                      }))
                    : ((i = (t) => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
                      (o = (t) => e * e * (n - t) * Math.exp(-t * e)));
                let a = (function (e, t, n) {
                  let r = n;
                  for (let n = 1; n < 12; n++) r -= e(r) / t(r);
                  return r;
                })(i, o, 5 / e);
                if (((e = e6(e)), isNaN(a))) return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(a, 2) * r;
                  return { stiffness: t, damping: 2 * s * Math.sqrt(r * t), duration: e };
                }
              })(e);
              (t = { ...t, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return t;
          })({ ...r, velocity: -e8(r.velocity || 0) }),
          p = f || 0,
          m = u / (2 * Math.sqrt(l * c)),
          g = s - o,
          v = e8(Math.sqrt(l / c)),
          y = 5 > Math.abs(g);
        if ((n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5), m < 1)) {
          let e = tQ(v, m);
          i = (t) => s - Math.exp(-m * v * t) * (((p + m * v * g) / e) * Math.sin(e * t) + g * Math.cos(e * t));
        } else if (1 === m) i = (e) => s - Math.exp(-v * e) * (g + (p + v * g) * e);
        else {
          let e = v * Math.sqrt(m * m - 1);
          i = (t) => {
            let n = Math.exp(-m * v * t),
              r = Math.min(e * t, 300);
            return s - (n * ((p + m * v * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e;
          };
        }
        return {
          calculatedDuration: (h && d) || null,
          next: (e) => {
            let r = i(e);
            if (h) a.done = e >= d;
            else {
              let o = p;
              0 !== e && (o = m < 1 ? tJ(i, e, r) : 0);
              let l = Math.abs(o) <= n,
                u = Math.abs(s - r) <= t;
              a.done = l && u;
            }
            return (a.value = a.done ? s : r), a;
          },
        };
      }
      function t5({
        keyframes: e,
        velocity: t = 0,
        power: n = 0.8,
        timeConstant: r = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, f;
        let h = e[0],
          p = { done: !1, value: h },
          m = (e) => (void 0 !== a && e < a) || (void 0 !== l && e > l),
          g = (e) => (void 0 === a ? l : void 0 === l ? a : Math.abs(a - e) < Math.abs(l - e) ? a : l),
          v = n * t,
          y = h + v,
          b = void 0 === s ? y : s(y);
        b !== y && (v = b - h);
        let x = (e) => -v * Math.exp(-e / r),
          w = (e) => b + x(e),
          P = (e) => {
            let t = x(e),
              n = w(e);
            (p.done = Math.abs(t) <= u), (p.value = p.done ? b : n);
          },
          E = (e) => {
            m(p.value) &&
              ((d = e),
              (f = t3({
                keyframes: [p.value, g(p.value)],
                velocity: tJ(w, e, p.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          E(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (f || void 0 !== d || ((t = !0), P(e), E(e)), void 0 !== d && e > d)
                ? f.next(e - d)
                : (t || P(e), p);
            },
          }
        );
      }
      let t4 = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: () => eR.Wi.update(t, !0),
          stop: () => (0, eR.Pn)(t),
          now: () => (eR.frameData.isProcessing ? eR.frameData.timestamp : performance.now()),
        };
      };
      function t9(e) {
        let t = 0,
          n = e.next(t);
        for (; !n.done && t < 2e4; ) (t += 50), (n = e.next(t));
        return t >= 2e4 ? 1 / 0 : t;
      }
      let t6 = { decay: t5, inertia: t5, tween: tX, keyframes: tX, spring: t3 };
      function t8({
        autoplay: e = !0,
        delay: t = 0,
        driver: n = t4,
        keyframes: r,
        type: i = "keyframes",
        repeat: o = 0,
        repeatDelay: s = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: c,
        onUpdate: d,
        ...f
      }) {
        let h,
          p,
          m,
          g,
          v,
          y = 1,
          b = !1,
          x = () => {
            p = new Promise((e) => {
              h = e;
            });
          };
        x();
        let w = t6[i] || tX;
        w !== tX && "number" != typeof r[0] && ((g = tZ([0, 100], r, { clamp: !1 })), (r = [0, 100]));
        let P = w({ ...f, keyframes: r });
        "mirror" === a && (v = w({ ...f, keyframes: [...r].reverse(), velocity: -(f.velocity || 0) }));
        let E = "idle",
          S = null,
          T = null,
          C = null;
        null === P.calculatedDuration && o && (P.calculatedDuration = t9(P));
        let { calculatedDuration: A } = P,
          M = 1 / 0,
          R = 1 / 0;
        null !== A && (R = (M = A + s) * (o + 1) - s);
        let k = 0,
          L = (e) => {
            if (null === T) return;
            y > 0 && (T = Math.min(T, e)), y < 0 && (T = Math.min(e - R / y, T));
            let n = (k = null !== S ? S : Math.round(e - T) * y) - t * (y >= 0 ? 1 : -1),
              i = y >= 0 ? n < 0 : n > R;
            (k = Math.max(n, 0)), "finished" === E && null === S && (k = R);
            let l = k,
              u = P;
            if (o) {
              let e = Math.min(k, R) / M,
                t = Math.floor(e),
                n = e % 1;
              !n && e >= 1 && (n = 1),
                1 === n && t--,
                (t = Math.min(t, o + 1)) % 2 &&
                  ("reverse" === a ? ((n = 1 - n), s && (n -= s / M)) : "mirror" === a && (u = v)),
                (l = W(0, 1, n) * M);
            }
            let c = i ? { done: !1, value: r[0] } : u.next(l);
            g && (c.value = g(c.value));
            let { done: f } = c;
            i || null === A || (f = y >= 0 ? k >= R : k <= 0);
            let h = null === S && ("finished" === E || ("running" === E && f));
            return d && d(c.value), h && j(), c;
          },
          O = () => {
            m && m.stop(), (m = void 0);
          },
          F = () => {
            (E = "idle"), O(), h(), x(), (T = C = null);
          },
          j = () => {
            (E = "finished"), c && c(), O(), h();
          },
          D = () => {
            if (b) return;
            m || (m = n(L));
            let e = m.now();
            l && l(),
              null !== S ? (T = e - S) : (T && "finished" !== E) || (T = e),
              "finished" === E && x(),
              (C = T),
              (S = null),
              (E = "running"),
              m.start();
          };
        e && D();
        let V = {
          then: (e, t) => p.then(e, t),
          get time() {
            return e8(k);
          },
          set time(newTime) {
            (k = newTime = e6(newTime)), null === S && m && 0 !== y ? (T = m.now() - newTime / y) : (S = newTime);
          },
          get duration() {
            return e8(null === P.calculatedDuration ? t9(P) : P.calculatedDuration);
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !m) return;
            (y = newSpeed), (V.time = e8(k));
          },
          get state() {
            return E;
          },
          play: D,
          pause: () => {
            (E = "paused"), (S = k);
          },
          stop: () => {
            (b = !0), "idle" !== E && ((E = "idle"), u && u(), F());
          },
          cancel: () => {
            null !== C && L(C), F();
          },
          complete: () => {
            E = "finished";
          },
          sample: (e) => ((T = 0), L(e)),
        };
        return V;
      }
      let t7 =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")), () => (void 0 === r && (r = o()), r)),
        ne = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
        nt = (e, t) =>
          "spring" === t.type ||
          "backgroundColor" === e ||
          !(function e(t) {
            return !!(!t || ("string" == typeof t && tn[t]) || te(t) || (Array.isArray(t) && t.every(e)));
          })(t.ease),
        nn = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        nr = (e) => ({ type: "spring", stiffness: 550, damping: 0 === e ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
        ni = { type: "keyframes", duration: 0.8 },
        no = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ns = (e, { keyframes: t }) => (t.length > 2 ? ni : O.has(e) ? (e.startsWith("scale") ? nr(t[1]) : nn) : no),
        na = (e, t) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t && (tU.test(t) || "0" === t) && !t.startsWith("url("))
          ),
        nl = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function nu(e) {
        let [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [r] = n.match(K) || [];
        if (!r) return e;
        let i = n.replace(r, ""),
          o = nl.has(t) ? 1 : 0;
        return r !== n && (o *= 100), t + "(" + o + i + ")";
      }
      let nc = /([a-z-]*)\(.*?\)/g,
        nd = {
          ...tU,
          getAnimatableNone: (e) => {
            let t = e.match(nc);
            return t ? t.map(nu).join(" ") : e;
          },
        },
        nf = {
          ...ei,
          color: tC,
          backgroundColor: tC,
          outlineColor: tC,
          fill: tC,
          stroke: tC,
          borderColor: tC,
          borderTopColor: tC,
          borderRightColor: tC,
          borderBottomColor: tC,
          borderLeftColor: tC,
          filter: nd,
          WebkitFilter: nd,
        },
        nh = (e) => nf[e];
      function np(e, t) {
        let n = nh(e);
        return n !== nd && (n = tU), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
      }
      let nm = (e) => /^0[^.\s]+$/.test(e);
      function ng(e, t) {
        return e[t] || e.default || e;
      }
      let nv = { skipAnimations: !1 },
        ny =
          (e, t, n, r = {}) =>
          (i) => {
            let o = ng(r, e) || {},
              s = o.delay || r.delay || 0,
              { elapsed: a = 0 } = r;
            a -= e6(s);
            let l = (function (e, t, n, r) {
                let i, o;
                let s = na(t, n);
                i = Array.isArray(n) ? [...n] : [null, n];
                let a = void 0 !== r.from ? r.from : e.get(),
                  l = [];
                for (let e = 0; e < i.length; e++) {
                  var u;
                  null === i[e] && (i[e] = 0 === e ? a : i[e - 1]),
                    ("number" == typeof (u = i[e])
                      ? 0 === u
                      : null !== u
                      ? "none" === u || "0" === u || nm(u)
                      : void 0) && l.push(e),
                    "string" == typeof i[e] && "none" !== i[e] && "0" !== i[e] && (o = i[e]);
                }
                if (s && l.length && o) for (let e = 0; e < l.length; e++) i[l[e]] = np(t, o);
                return i;
              })(t, e, n, o),
              u = l[0],
              c = l[l.length - 1],
              d = na(e, u),
              f = na(e, c);
            (0, e9.K)(
              d === f,
              `You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`
            );
            let h = {
              keyframes: l,
              velocity: t.getVelocity(),
              ease: "easeOut",
              ...o,
              delay: -a,
              onUpdate: (e) => {
                t.set(e), o.onUpdate && o.onUpdate(e);
              },
              onComplete: () => {
                i(), o.onComplete && o.onComplete();
              },
            };
            if (
              (!(function ({
                when: e,
                delay: t,
                delayChildren: n,
                staggerChildren: r,
                staggerDirection: i,
                repeat: o,
                repeatType: s,
                repeatDelay: a,
                from: l,
                elapsed: u,
                ...c
              }) {
                return !!Object.keys(c).length;
              })(o) && (h = { ...h, ...ns(e, h) }),
              h.duration && (h.duration = e6(h.duration)),
              h.repeatDelay && (h.repeatDelay = e6(h.repeatDelay)),
              !d || !f || e7.current || !1 === o.type || nv.skipAnimations)
            )
              return (function ({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
                let i = () => (
                  n && n(e[e.length - 1]),
                  r && r(),
                  {
                    time: 0,
                    speed: 1,
                    duration: 0,
                    play: eY.Z,
                    pause: eY.Z,
                    stop: eY.Z,
                    then: (e) => (e(), Promise.resolve()),
                    cancel: eY.Z,
                    complete: eY.Z,
                  }
                );
                return t ? t8({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i }) : i();
              })(e7.current ? { ...h, delay: 0 } : h);
            if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
              let n = (function (e, t, { onUpdate: n, onComplete: r, ...i }) {
                let o, s;
                if (
                  !(
                    t7() &&
                    ne.has(t) &&
                    !i.repeatDelay &&
                    "mirror" !== i.repeatType &&
                    0 !== i.damping &&
                    "inertia" !== i.type
                  )
                )
                  return !1;
                let a = !1,
                  l = !1,
                  u = () => {
                    s = new Promise((e) => {
                      o = e;
                    });
                  };
                u();
                let { keyframes: c, duration: d = 300, ease: f, times: h } = i;
                if (nt(t, i)) {
                  let e = t8({ ...i, repeat: 0, delay: 0 }),
                    t = { done: !1, value: c[0] },
                    n = [],
                    r = 0;
                  for (; !t.done && r < 2e4; ) (t = e.sample(r)), n.push(t.value), (r += 10);
                  (h = void 0), (c = n), (d = r - 10), (f = "linear");
                }
                let p = (function (
                    e,
                    t,
                    n,
                    { delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}
                  ) {
                    let u = { [t]: n };
                    l && (u.offset = l);
                    let c = (function e(t) {
                      if (t) return te(t) ? tt(t) : Array.isArray(t) ? t.map(e) : tn[t];
                    })(a);
                    return (
                      Array.isArray(c) && (u.easing = c),
                      e.animate(u, {
                        delay: r,
                        duration: i,
                        easing: Array.isArray(c) ? "linear" : c,
                        fill: "both",
                        iterations: o + 1,
                        direction: "reverse" === s ? "alternate" : "normal",
                      })
                    );
                  })(e.owner.current, t, c, { ...i, duration: d, ease: f, times: h }),
                  m = () => {
                    (l = !1), p.cancel();
                  },
                  g = () => {
                    (l = !0), eR.Wi.update(m), o(), u();
                  };
                return (
                  (p.onfinish = () => {
                    l ||
                      (e.set(
                        (function (e, { repeat: t, repeatType: n = "loop" }) {
                          let r = t && "loop" !== n && t % 2 == 1 ? 0 : e.length - 1;
                          return e[r];
                        })(c, i)
                      ),
                      r && r(),
                      g());
                  }),
                  {
                    then: (e, t) => s.then(e, t),
                    attachTimeline: (e) => ((p.timeline = e), (p.onfinish = null), eY.Z),
                    get time() {
                      return e8(p.currentTime || 0);
                    },
                    set time(newTime) {
                      p.currentTime = e6(newTime);
                    },
                    get speed() {
                      return p.playbackRate;
                    },
                    set speed(newSpeed) {
                      p.playbackRate = newSpeed;
                    },
                    get duration() {
                      return e8(d);
                    },
                    play: () => {
                      a || (p.play(), (0, eR.Pn)(m));
                    },
                    pause: () => p.pause(),
                    stop: () => {
                      if (((a = !0), "idle" === p.playState)) return;
                      let { currentTime: t } = p;
                      if (t) {
                        let n = t8({ ...i, autoplay: !1 });
                        e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10);
                      }
                      g();
                    },
                    complete: () => {
                      l || p.finish();
                    },
                    cancel: g,
                  }
                );
              })(t, e, h);
              if (n) return n;
            }
            return t8(h);
          };
      function nb(e) {
        return !!(j(e) && e.add);
      }
      let nx = (e) => /^\-?\d*\.?\d+$/.test(e);
      function nw(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function nP(e, t) {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class nE {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return nw(this.subscriptions, e), () => nP(this.subscriptions, e);
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let nS = (e) => !isNaN(parseFloat(e)),
        nT = { current: void 0 };
      class nC {
        constructor(e, t = {}) {
          (this.version = "10.18.0"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              (this.prev = this.current), (this.current = e);
              let { delta: n, timestamp: r } = eR.frameData;
              this.lastUpdated !== r &&
                ((this.timeDelta = n), (this.lastUpdated = r), eR.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                t && this.events.renderRequest && this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () => eR.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: e }) => {
              e !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity = nS(this.current)),
            (this.owner = t.owner);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new nE());
          let n = this.events[e].add(t);
          return "change" === e
            ? () => {
                n(),
                  eR.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, n) {
          this.set(t), (this.prev = e), (this.timeDelta = n);
        }
        jump(e) {
          this.updateAndNotify(e), (this.prev = e), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return nT.current && nT.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var e, t;
          return this.canTrackVelocity
            ? ((e = parseFloat(this.current) - parseFloat(this.prev)), (t = this.timeDelta) ? (1e3 / t) * e : 0)
            : 0;
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart && this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function nA(e, t) {
        return new nC(e, t);
      }
      let nM = (e) => (t) => t.test(e),
        nR = [U, Q, J, X, et, ee, { test: (e) => "auto" === e, parse: (e) => e }],
        nk = (e) => nR.find(nM(e)),
        nL = [...nR, tC, tU],
        nO = (e) => nL.find(nM(e));
      function nF(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
        let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = e.makeTargetAnimatable(t),
          l = e.getValue("willChange");
        r && (o = r);
        let u = [],
          c = i && e.animationState && e.animationState.getState()[i];
        for (let t in a) {
          let r = e.getValue(t),
            i = a[t];
          if (
            !r ||
            void 0 === i ||
            (c &&
              (function ({ protectedKeys: e, needsAnimating: t }, n) {
                let r = e.hasOwnProperty(n) && !0 !== t[n];
                return (t[n] = !1), r;
              })(c, t))
          )
            continue;
          let s = { delay: n, elapsed: 0, ...ng(o || {}, t) };
          if (window.HandoffAppearAnimations) {
            let n = e.getProps()[h];
            if (n) {
              let e = window.HandoffAppearAnimations(n, t, r, eR.Wi);
              null !== e && ((s.elapsed = e), (s.isHandoff = !0));
            }
          }
          let d =
            !s.isHandoff &&
            !(function (e, t) {
              let n = e.get();
              if (!Array.isArray(t)) return n !== t;
              for (let e = 0; e < t.length; e++) if (t[e] !== n) return !0;
            })(r, i);
          if (("spring" === s.type && (r.getVelocity() || s.velocity) && (d = !1), r.animation && (d = !1), d))
            continue;
          r.start(ny(t, r, i, e.shouldReduceMotion && O.has(t) ? { type: !1 } : s));
          let f = r.animation;
          nb(l) && (l.add(t), f.then(() => l.remove(t))), u.push(f);
        }
        return (
          s &&
            Promise.all(u).then(() => {
              s &&
                (function (e, t) {
                  let n = e4(e, t),
                    { transitionEnd: r = {}, transition: i = {}, ...o } = n ? e.makeTargetAnimatable(n, !1) : {};
                  for (let t in (o = { ...o, ...r })) {
                    let n = eC(o[t]);
                    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, nA(n));
                  }
                })(e, s);
            }),
          u
        );
      }
      function nj(e, t, n = {}) {
        let r = e4(e, t, n.custom),
          { transition: i = e.getDefaultTransition() || {} } = r || {};
        n.transitionOverride && (i = n.transitionOverride);
        let o = r ? () => Promise.all(nF(e, r, n)) : () => Promise.resolve(),
          s =
            e.variantChildren && e.variantChildren.size
              ? (r = 0) => {
                  let { delayChildren: o = 0, staggerChildren: s, staggerDirection: a } = i;
                  return (function (e, t, n = 0, r = 0, i = 1, o) {
                    let s = [],
                      a = (e.variantChildren.size - 1) * r,
                      l = 1 === i ? (e = 0) => e * r : (e = 0) => a - e * r;
                    return (
                      Array.from(e.variantChildren)
                        .sort(nD)
                        .forEach((e, r) => {
                          e.notify("AnimationStart", t),
                            s.push(nj(e, t, { ...o, delay: n + l(r) }).then(() => e.notify("AnimationComplete", t)));
                        }),
                      Promise.all(s)
                    );
                  })(e, t, o + r, s, a, n);
                }
              : () => Promise.resolve(),
          { when: a } = i;
        if (!a) return Promise.all([o(), s(n.delay)]);
        {
          let [e, t] = "beforeChildren" === a ? [o, s] : [s, o];
          return e().then(() => t());
        }
      }
      function nD(e, t) {
        return e.sortNodePosition(t);
      }
      let nV = [...v].reverse(),
        nI = v.length;
      function nN(e = !1) {
        return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
      }
      class n_ extends ez {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: n }) =>
                        (function (e, t, n = {}) {
                          let r;
                          if ((e.notify("AnimationStart", t), Array.isArray(t)))
                            r = Promise.all(t.map((t) => nj(e, t, n)));
                          else if ("string" == typeof t) r = nj(e, t, n);
                          else {
                            let i = "function" == typeof t ? e4(e, t, n.custom) : t;
                            r = Promise.all(nF(e, i, n));
                          }
                          return r.then(() => e.notify("AnimationComplete", t));
                        })(e, t, n)
                      )
                    ),
                  n = {
                    animate: nN(!0),
                    whileInView: nN(),
                    whileHover: nN(),
                    whileTap: nN(),
                    whileDrag: nN(),
                    whileFocus: nN(),
                    exit: nN(),
                  },
                  r = !0,
                  i = (t, n) => {
                    let r = e4(e, n);
                    if (r) {
                      let { transition: e, transitionEnd: n, ...i } = r;
                      t = { ...t, ...i, ...n };
                    }
                    return t;
                  };
                function o(o, s) {
                  let a = e.getProps(),
                    l = e.getVariantContext(!0) || {},
                    u = [],
                    c = new Set(),
                    d = {},
                    f = 1 / 0;
                  for (let t = 0; t < nI; t++) {
                    var h;
                    let p = nV[t],
                      v = n[p],
                      y = void 0 !== a[p] ? a[p] : l[p],
                      b = m(y),
                      x = p === s ? v.isActive : null;
                    !1 === x && (f = t);
                    let w = y === l[p] && y !== a[p] && b;
                    if (
                      (w && r && e.manuallyAnimateOnMount && (w = !1),
                      (v.protectedKeys = { ...d }),
                      (!v.isActive && null === x) || (!y && !v.prevProp) || g(y) || "boolean" == typeof y)
                    )
                      continue;
                    let P =
                        ((h = v.prevProp),
                        ("string" == typeof y ? y !== h : !!Array.isArray(y) && !e5(y, h)) ||
                          (p === s && v.isActive && !w && b) ||
                          (t > f && b)),
                      E = !1,
                      S = Array.isArray(y) ? y : [y],
                      T = S.reduce(i, {});
                    !1 === x && (T = {});
                    let { prevResolvedValues: C = {} } = v,
                      A = { ...C, ...T },
                      M = (e) => {
                        (P = !0), c.has(e) && ((E = !0), c.delete(e)), (v.needsAnimating[e] = !0);
                      };
                    for (let e in A) {
                      let t = T[e],
                        n = C[e];
                      if (!d.hasOwnProperty(e))
                        (eS(t) && eS(n) ? e5(t, n) : t === n)
                          ? void 0 !== t && c.has(e)
                            ? M(e)
                            : (v.protectedKeys[e] = !0)
                          : void 0 !== t
                          ? M(e)
                          : c.add(e);
                    }
                    (v.prevProp = y),
                      (v.prevResolvedValues = T),
                      v.isActive && (d = { ...d, ...T }),
                      r && e.blockInitialAnimation && (P = !1),
                      P && (!w || E) && u.push(...S.map((e) => ({ animation: e, options: { type: p, ...o } })));
                  }
                  if (c.size) {
                    let t = {};
                    c.forEach((n) => {
                      let r = e.getBaseTarget(n);
                      void 0 !== r && (t[n] = r);
                    }),
                      u.push({ animation: t });
                  }
                  let p = !!u.length;
                  return (
                    r && (!1 === a.initial || a.initial === a.animate) && !e.manuallyAnimateOnMount && (p = !1),
                    (r = !1),
                    p ? t(u) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (t, r, i) {
                    var s;
                    if (n[t].isActive === r) return Promise.resolve();
                    null === (s = e.variantChildren) ||
                      void 0 === s ||
                      s.forEach((e) => {
                        var n;
                        return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r);
                      }),
                      (n[t].isActive = r);
                    let a = o(i, t);
                    for (let e in n) n[e].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (n) {
                    t = n(e);
                  },
                  getState: () => n,
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          this.unmount(), g(e) && (this.unmount = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let nB = 0;
      class nW extends ez {
        constructor() {
          super(...arguments), (this.id = nB++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t, custom: n } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === r) return;
          let i = this.node.animationState.setActive("exit", !e, {
            custom: null != n ? n : this.node.getProps().custom,
          });
          t && !e && i.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      let nU = (e, t) => Math.abs(e - t);
      class nH {
        constructor(e, t, { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var e, t;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let n = nK(this.lastMoveEventInfo, this.history),
                r = null !== this.startEvent,
                i = ((e = n.offset), (t = { x: 0, y: 0 }), Math.sqrt(nU(e.x, t.x) ** 2 + nU(e.y, t.y) ** 2) >= 3);
              if (!r && !i) return;
              let { point: o } = n,
                { timestamp: s } = eR.frameData;
              this.history.push({ ...o, timestamp: s });
              let { onStart: a, onMove: l } = this.handlers;
              r || (a && a(this.lastMoveEvent, n), (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, n);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = nz(t, this.transformPagePoint)),
                eR.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
              if ((this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
              let o = nK(
                "pointercancel" === e.type ? this.lastMoveEventInfo : nz(t, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(e, o), r && r(e, o);
            }),
            !eF(e))
          )
            return;
          (this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.contextWindow = r || window);
          let o = nz(ej(e), this.transformPagePoint),
            { point: s } = o,
            { timestamp: a } = eR.frameData;
          this.history = [{ ...s, timestamp: a }];
          let { onSessionStart: l } = t;
          l && l(e, nK(o, this.history)),
            (this.removeListeners = eN(
              eV(this.contextWindow, "pointermove", this.handlePointerMove),
              eV(this.contextWindow, "pointerup", this.handlePointerUp),
              eV(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(), (0, eR.Pn)(this.updatePoint);
        }
      }
      function nz(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function n$(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function nK({ point: e }, t) {
        return {
          point: e,
          delta: n$(e, nq(t)),
          offset: n$(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let n = e.length - 1,
              r = null,
              i = nq(e);
            for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > e6(0.1))); ) n--;
            if (!r) return { x: 0, y: 0 };
            let o = e8(i.timestamp - r.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(t, 0),
        };
      }
      function nq(e) {
        return e[e.length - 1];
      }
      function nG(e) {
        return e.max - e.min;
      }
      function nY(e, t = 0, n = 0.01) {
        return Math.abs(e - t) <= n;
      }
      function nZ(e, t, n, r = 0.5) {
        (e.origin = r),
          (e.originPoint = tA(t.min, t.max, e.origin)),
          (e.scale = nG(n) / nG(t)),
          (nY(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = tA(n.min, n.max, e.origin) - e.originPoint),
          (nY(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function nX(e, t, n, r) {
        nZ(e.x, t.x, n.x, r ? r.originX : void 0), nZ(e.y, t.y, n.y, r ? r.originY : void 0);
      }
      function nJ(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + nG(t));
      }
      function nQ(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + nG(t));
      }
      function n0(e, t, n) {
        nQ(e.x, t.x, n.x), nQ(e.y, t.y, n.y);
      }
      function n1(e, t, n) {
        return { min: void 0 !== t ? e.min + t : void 0, max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0 };
      }
      function n2(e, t) {
        let n = t.min - e.min,
          r = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
      }
      function n3(e, t, n) {
        return { min: n5(e, t), max: n5(e, n) };
      }
      function n5(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let n4 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        n9 = () => ({ x: n4(), y: n4() }),
        n6 = () => ({ min: 0, max: 0 }),
        n8 = () => ({ x: n6(), y: n6() });
      function n7(e) {
        return [e("x"), e("y")];
      }
      function re({ top: e, left: t, right: n, bottom: r }) {
        return { x: { min: t, max: n }, y: { min: e, max: r } };
      }
      function rt(e) {
        return void 0 === e || 1 === e;
      }
      function rn({ scale: e, scaleX: t, scaleY: n }) {
        return !rt(e) || !rt(t) || !rt(n);
      }
      function rr(e) {
        return rn(e) || ri(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function ri(e) {
        var t, n;
        return ((t = e.x) && "0%" !== t) || ((n = e.y) && "0%" !== n);
      }
      function ro(e, t, n, r, i) {
        return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t;
      }
      function rs(e, t = 0, n = 1, r, i) {
        (e.min = ro(e.min, t, n, r, i)), (e.max = ro(e.max, t, n, r, i));
      }
      function ra(e, { x: t, y: n }) {
        rs(e.x, t.translate, t.scale, t.originPoint), rs(e.y, n.translate, n.scale, n.originPoint);
      }
      function rl(e) {
        return Number.isInteger(e) ? e : e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
      }
      function ru(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function rc(e, t, [n, r, i]) {
        let o = void 0 !== t[i] ? t[i] : 0.5,
          s = tA(e.min, e.max, o);
        rs(e, t[n], t[r], s, t.scale);
      }
      let rd = ["x", "scaleX", "originX"],
        rf = ["y", "scaleY", "originY"];
      function rh(e, t) {
        rc(e.x, t, rd), rc(e.y, t, rf);
      }
      function rp(e, t) {
        return re(
          (function (e, t) {
            if (!t) return e;
            let n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      let rm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
        rg = new WeakMap();
      class rv {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = n8()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new nH(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(ej(e, "page").point);
              },
              onStart: (e, t) => {
                let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = eU(n)), !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  n7((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (J.test(t)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let r = n.layout.layoutBox[e];
                        if (r) {
                          let e = nG(r);
                          t = (parseFloat(t) / 100) * e;
                        }
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  i && eR.Wi.update(() => i(e, t), !1, !0);
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: o } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                let { offset: s } = t;
                if (r && null === this.currentDirection) {
                  (this.currentDirection = (function (e, t = 10) {
                    let n = null;
                    return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
                  })(s)),
                    null !== this.currentDirection && i && i(this.currentDirection);
                  return;
                }
                this.updateAxis("x", t.point, s),
                  this.updateAxis("y", t.point, s),
                  this.visualElement.render(),
                  o && o(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                n7((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              contextWindow: rm(this.visualElement),
            }
          );
        }
        stop(e, t) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: r } = t;
          this.startAnimation(r);
          let { onDragEnd: i } = this.getProps();
          i && eR.Wi.update(() => i(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, n) {
          let { drag: r } = this.getProps();
          if (!n || !ry(e, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            o = this.originPoint[e] + n[e];
          this.constraints &&
            this.constraints[e] &&
            (o = (function (e, { min: t, max: n }, r) {
              return (
                void 0 !== t && e < t
                  ? (e = r ? tA(t, e, r.min) : Math.max(e, t))
                  : void 0 !== n && e > n && (e = r ? tA(n, e, r.max) : Math.min(e, n)),
                e
              );
            })(o, this.constraints[e], this.elastic[e])),
            i.set(o);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: n } = this.getProps(),
            r =
              this.visualElement.projection && !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                ? void 0
                : e.layout,
            i = this.constraints;
          t && p(t)
            ? this.constraints || (this.constraints = this.resolveRefConstraints())
            : t && r
            ? (this.constraints = (function (e, { top: t, left: n, bottom: r, right: i }) {
                return { x: n1(e.x, n, i), y: n1(e.y, t, r) };
              })(r.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35), { x: n3(e, "left", "right"), y: n3(e, "top", "bottom") }
              );
            })(n)),
            i !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              n7((e) => {
                this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let n = {};
                    return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n;
                  })(r.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
          if (!t || !p(t)) return !1;
          let r = t.current;
          (0, e9.k)(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = (function (e, t, n) {
              let r = rp(e, n),
                { scroll: i } = t;
              return i && (ru(r.x, i.offset.x), ru(r.y, i.offset.y)), r;
            })(r, i.root, this.visualElement.getTransformPagePoint()),
            s = { x: n2((e = i.layout.layoutBox).x, o.x), y: n2(e.y, o.y) };
          if (n) {
            let e = n(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(s)
            );
            (this.hasMutatedConstraints = !!e), e && (s = re(e));
          }
          return s;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            n7((s) => {
              if (!ry(s, t, this.currentDirection)) return;
              let l = (a && a[s]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? e[s] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(s, u);
            })
          ).then(s);
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return n.start(ny(e, n, 0, t));
        }
        stopAnimation() {
          n7((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          n7((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.state;
        }
        getAxisMotionValue(e) {
          let t = "_drag" + e.toUpperCase(),
            n = this.visualElement.getProps();
          return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
        }
        snapToCursor(e) {
          n7((t) => {
            let { drag: n } = this.getProps();
            if (!ry(t, n, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              let { min: n, max: o } = r.layout.layoutBox[t];
              i.set(e[t] - tA(n, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!p(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          n7((e) => {
            let t = this.getAxisMotionValue(e);
            if (t) {
              let n = t.get();
              r[e] = (function (e, t) {
                let n = 0.5,
                  r = nG(e),
                  i = nG(t);
                return (
                  i > r ? (n = tG(t.min, t.max - r, e.min)) : r > i && (n = tG(e.min, e.max - i, t.min)), W(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            n7((t) => {
              if (!ry(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: i, max: o } = this.constraints[t];
              n.set(tA(i, o, r[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rg.set(this.visualElement, this);
          let e = eV(this.visualElement.current, "pointerdown", (e) => {
              let { drag: t, dragListener: n = !0 } = this.getProps();
              t && n && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              p(e) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", t);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), t();
          let i = eO(window, "resize", () => this.scalePositionWithinConstraints()),
            o = n.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t }) => {
              this.isDragging &&
                t &&
                (n7((t) => {
                  let n = this.getAxisMotionValue(t);
                  n && ((this.originPoint[t] += e[t].translate), n.set(n.get() + e[t].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            i(), e(), r(), o && o();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }
      function ry(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      class rb extends ez {
        constructor(e) {
          super(e), (this.removeGroupControls = eY.Z), (this.removeListeners = eY.Z), (this.controls = new rv(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || eY.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let rx = (e) => (t, n) => {
        e && eR.Wi.update(() => e(t, n));
      };
      class rw extends ez {
        constructor() {
          super(...arguments), (this.removePointerDownListener = eY.Z);
        }
        onPointerDown(e) {
          this.session = new nH(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: rm(this.node),
          });
        }
        createPanHandlers() {
          let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
          return {
            onSessionStart: rx(e),
            onStart: rx(t),
            onMove: n,
            onEnd: (e, t) => {
              delete this.session, r && eR.Wi.update(() => r(e, t));
            },
          };
        }
        mount() {
          this.removePointerDownListener = eV(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let rP = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function rE(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let rS = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e) {
            if (!Q.test(e)) return e;
            e = parseFloat(e);
          }
          let n = rE(e, t.target.x),
            r = rE(e, t.target.y);
          return `${n}% ${r}%`;
        },
      };
      class rT extends s.Component {
        componentDidMount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
            { projection: i } = e;
          Object.assign(k, rA),
            i &&
              (t.group && t.group.add(i),
              n && n.register && r && n.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
            (rP.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props,
            o = n.projection;
          return (
            o &&
              ((o.isPresent = i),
              r || e.layoutDependency !== t || void 0 === t ? o.willUpdate() : this.safeToRemove(),
              e.isPresent === i ||
                (i
                  ? o.promote()
                  : o.relegate() ||
                    eR.Wi.postRender(() => {
                      let e = o.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            queueMicrotask(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
            { projection: r } = e;
          r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function rC(e) {
        let [t, n] = (function () {
            let e = (0, s.useContext)(u.O);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: n, register: r } = e,
              i = (0, s.useId)();
            return (0, s.useEffect)(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
          })(),
          r = (0, s.useContext)(T.p);
        return s.createElement(rT, {
          ...e,
          layoutGroup: r,
          switchLayoutGroup: (0, s.useContext)(C),
          isPresent: t,
          safeToRemove: n,
        });
      }
      let rA = {
          borderRadius: {
            ...rS,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: rS,
          borderTopRightRadius: rS,
          borderBottomLeftRadius: rS,
          borderBottomRightRadius: rS,
          boxShadow: {
            correct: (e, { treeScale: t, projectionDelta: n }) => {
              let r = tU.parse(e);
              if (r.length > 5) return e;
              let i = tU.createTransformer(e),
                o = "number" != typeof r[0] ? 1 : 0,
                s = n.x.scale * t.x,
                a = n.y.scale * t.y;
              (r[0 + o] /= s), (r[1 + o] /= a);
              let l = tA(s, a, 0.5);
              return (
                "number" == typeof r[2 + o] && (r[2 + o] /= l), "number" == typeof r[3 + o] && (r[3 + o] /= l), i(r)
              );
            },
          },
        },
        rM = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rR = rM.length,
        rk = (e) => ("string" == typeof e ? parseFloat(e) : e),
        rL = (e) => "number" == typeof e || Q.test(e);
      function rO(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let rF = rD(0, 0.5, tf),
        rj = rD(0.5, 0.95, eY.Z);
      function rD(e, t, n) {
        return (r) => (r < e ? 0 : r > t ? 1 : n(tG(e, t, r)));
      }
      function rV(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function rI(e, t) {
        rV(e.x, t.x), rV(e.y, t.y);
      }
      function rN(e, t, n, r, i) {
        return (e -= t), (e = r + (1 / n) * (e - r)), void 0 !== i && (e = r + (1 / i) * (e - r)), e;
      }
      function r_(e, t, [n, r, i], o, s) {
        !(function (e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
          if ((J.test(t) && ((t = parseFloat(t)), (t = tA(s.min, s.max, t / 100) - s.min)), "number" != typeof t))
            return;
          let a = tA(o.min, o.max, r);
          e === o && (a -= t), (e.min = rN(e.min, t, n, a, i)), (e.max = rN(e.max, t, n, a, i));
        })(e, t[n], t[r], t[i], t.scale, o, s);
      }
      let rB = ["x", "scaleX", "originX"],
        rW = ["y", "scaleY", "originY"];
      function rU(e, t, n, r) {
        r_(e.x, t, rB, n ? n.x : void 0, r ? r.x : void 0), r_(e.y, t, rW, n ? n.y : void 0, r ? r.y : void 0);
      }
      function rH(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function rz(e) {
        return rH(e.x) && rH(e.y);
      }
      function r$(e, t) {
        return (
          Math.round(e.x.min) === Math.round(t.x.min) &&
          Math.round(e.x.max) === Math.round(t.x.max) &&
          Math.round(e.y.min) === Math.round(t.y.min) &&
          Math.round(e.y.max) === Math.round(t.y.max)
        );
      }
      function rK(e) {
        return nG(e.x) / nG(e.y);
      }
      class rq {
        constructor() {
          this.members = [];
        }
        add(e) {
          nw(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if ((nP(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let n = this.members.findIndex((t) => e === t);
          if (0 === n) return !1;
          for (let e = n; e >= 0; e--) {
            let n = this.members[e];
            if (!1 !== n.isPresent) {
              t = n;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            n.instance && n.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = n),
              t && (e.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((e.snapshot = n.snapshot), (e.snapshot.latestValues = n.animationValues || n.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: r } = e.options;
            !1 === r && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: n } = e;
            t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function rG(e, t, n) {
        let r = "",
          i = e.x.translate / t.x,
          o = e.y.translate / t.y;
        if (
          ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
          (1 !== t.x || 1 !== t.y) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
          n)
        ) {
          let { rotate: e, rotateX: t, rotateY: i } = n;
          e && (r += `rotate(${e}deg) `), t && (r += `rotateX(${t}deg) `), i && (r += `rotateY(${i}deg) `);
        }
        let s = e.x.scale * t.x,
          a = e.y.scale * t.y;
        return (1 !== s || 1 !== a) && (r += `scale(${s}, ${a})`), r || "none";
      }
      let rY = (e, t) => e.depth - t.depth;
      class rZ {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          nw(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          nP(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(rY), (this.isDirty = !1), this.children.forEach(e);
        }
      }
      let rX = ["", "X", "Y", "Z"],
        rJ = { visibility: "hidden" },
        rQ = 0,
        r0 = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
      function r1({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: i,
      }) {
        return class {
          constructor(e = {}, n = null == t ? void 0 : t()) {
            (this.id = rQ++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (r0.totalNodes = r0.resolvedTargetDeltas = r0.recalculatedProjection = 0),
                  this.nodes.forEach(r5),
                  this.nodes.forEach(it),
                  this.nodes.forEach(ir),
                  this.nodes.forEach(r4),
                  window.MotionDebug && window.MotionDebug.record(r0);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rZ());
          }
          addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new nE()), this.eventHandlers.get(e).add(t);
          }
          notifyListeners(e, ...t) {
            let n = this.eventHandlers.get(e);
            n && n.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName), (this.instance = t);
            let { layoutId: r, layout: i, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (i || r) && (this.isLayoutDirty = !0),
              e)
            ) {
              let n;
              let r = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (e, t) {
                    let n = performance.now(),
                      r = ({ timestamp: t }) => {
                        let i = t - n;
                        i >= 250 && ((0, eR.Pn)(r), e(i - 250));
                      };
                    return eR.Wi.read(r, !0), () => (0, eR.Pn)(r);
                  })(r, 0)),
                  rP.hasAnimatedSinceResize && ((rP.hasAnimatedSinceResize = !1), this.nodes.forEach(ie));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                o &&
                (r || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({ delta: e, hasLayoutChanged: t, hasRelativeTargetChanged: n, layout: r }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i = this.options.transition || o.getDefaultTransition() || iu,
                      { onLayoutAnimationStart: s, onLayoutAnimationComplete: a } = o.getProps(),
                      l = !this.targetLayout || !r$(this.targetLayout, r) || n,
                      u = !t && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = { ...ng(i, "layout"), onPlay: s, onComplete: a };
                      (o.shouldReduceMotion || this.options.layoutRoot) && ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else t || ie(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, eR.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0), this.nodes && this.nodes.forEach(ii), this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if ((this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty)) return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: n } = this.options;
            if (void 0 === t && !n) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(r6);
              return;
            }
            this.isUpdating || this.nodes.forEach(r8),
              (this.isUpdating = !1),
              this.nodes.forEach(r7),
              this.nodes.forEach(r2),
              this.nodes.forEach(r3),
              this.clearAllSnapshots();
            let e = performance.now();
            (eR.frameData.delta = W(0, 1e3 / 60, e - eR.frameData.timestamp)),
              (eR.frameData.timestamp = e),
              (eR.frameData.isProcessing = !0),
              eR.S6.update.process(eR.frameData),
              eR.S6.preRender.process(eR.frameData),
              eR.S6.render.process(eR.frameData),
              (eR.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(r9), this.sharedNodes.forEach(io);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0), eR.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            eR.Wi.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = n8()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1),
              t &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: r(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            if (!i) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !rz(this.projectionDelta),
              n = this.getTransformTemplate(),
              r = n ? n(this.latestValues, "") : void 0,
              o = r !== this.prevTransformTemplateValue;
            e &&
              (t || rr(this.latestValues) || o) &&
              (i(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let n = this.measurePageBox(),
              r = this.removeElementScroll(n);
            return (
              e && (r = this.removeTransform(r)),
              ih((t = r).x),
              ih(t.y),
              { animationId: this.root.animationId, measuredBox: n, layoutBox: r, latestValues: {}, source: this.id }
            );
          }
          measurePageBox() {
            let { visualElement: e } = this.options;
            if (!e) return n8();
            let t = e.measureViewportBox(),
              { scroll: n } = this.root;
            return n && (ru(t.x, n.offset.x), ru(t.y, n.offset.y)), t;
          }
          removeElementScroll(e) {
            let t = n8();
            rI(t, e);
            for (let n = 0; n < this.path.length; n++) {
              let r = this.path[n],
                { scroll: i, options: o } = r;
              if (r !== this.root && i && o.layoutScroll) {
                if (i.isRoot) {
                  rI(t, e);
                  let { scroll: n } = this.root;
                  n && (ru(t.x, -n.offset.x), ru(t.y, -n.offset.y));
                }
                ru(t.x, i.offset.x), ru(t.y, i.offset.y);
              }
            }
            return t;
          }
          applyTransform(e, t = !1) {
            let n = n8();
            rI(n, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              !t &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                rh(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                rr(r.latestValues) && rh(n, r.latestValues);
            }
            return rr(this.latestValues) && rh(n, this.latestValues), n;
          }
          removeTransform(e) {
            let t = n8();
            rI(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              if (!n.instance || !rr(n.latestValues)) continue;
              rn(n.latestValues) && n.updateSnapshot();
              let r = n8();
              rI(r, n.measurePageBox()), rU(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r);
            }
            return rr(this.latestValues) && rU(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = { ...this.options, ...e, crossfade: void 0 === e.crossfade || e.crossfade };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== eR.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, n, r, i;
            let o = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let s = !!this.resumingFrom || this !== o;
            if (
              !(
                e ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = eR.frameData.timestamp), !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = n8()),
                    (this.relativeTargetOrigin = n8()),
                    n0(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
                    rI(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target || ((this.target = n8()), (this.targetWithTransforms = n8())),
                  this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (r = this.relativeTarget),
                      (i = this.relativeParent.target),
                      nJ(n.x, r.x, i.x),
                      nJ(n.y, r.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(this.layout.layoutBox))
                        : rI(this.target, this.layout.layoutBox),
                      ra(this.target, this.targetDelta))
                    : rI(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = n8()),
                      (this.relativeTargetOrigin = n8()),
                      n0(this.relativeTargetOrigin, this.target, e.target),
                      rI(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                r0.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent || rn(this.parent.latestValues) || ri(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              n = !!this.resumingFrom || this !== t,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) &&
                (r = !1),
              n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1),
              this.resolvedRelativeTargetAt === eR.frameData.timestamp && (r = !1),
              r)
            )
              return;
            let { layout: i, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || o))
            )
              return;
            rI(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            !(function (e, t, n, r = !1) {
              let i, o;
              let s = n.length;
              if (s) {
                t.x = t.y = 1;
                for (let a = 0; a < s; a++) {
                  o = (i = n[a]).projectionDelta;
                  let s = i.instance;
                  (!s || !s.style || "contents" !== s.style.display) &&
                    (r &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      rh(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    o && ((t.x *= o.x.scale), (t.y *= o.y.scale), ra(e, o)),
                    r && rr(i.latestValues) && rh(e, i.latestValues));
                }
                (t.x = rl(t.x)), (t.y = rl(t.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, n),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (t.target = t.layout.layoutBox);
            let { target: l } = t;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = n9()), (this.projectionTransform = "none"), this.scheduleRender());
              return;
            }
            this.projectionDelta || ((this.projectionDelta = n9()), (this.projectionDeltaWithTransform = n9()));
            let u = this.projectionTransform;
            nX(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
              (this.projectionTransform = rG(this.projectionDelta, this.treeScale)),
              (this.projectionTransform !== u || this.treeScale.x !== s || this.treeScale.y !== a) &&
                ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", l)),
              r0.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            if ((this.options.scheduleRender && this.options.scheduleRender(), e)) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
          }
          setAnimationOrigin(e, t = !1) {
            let n;
            let r = this.snapshot,
              i = r ? r.latestValues : {},
              o = { ...this.latestValues },
              s = n9();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let a = n8(),
              l = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(l && !c && !0 === this.options.crossfade && !this.path.some(il));
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let r = t / 1e3;
                if (
                  (is(s.x, e.x, r),
                  is(s.y, e.y, r),
                  this.setTargetDelta(s),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, f, h, p;
                  n0(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                    (h = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    ia(h.x, p.x, a.x, r),
                    ia(h.y, p.y, a.y, r),
                    n &&
                      ((u = this.relativeTarget),
                      (f = n),
                      u.x.min === f.x.min && u.x.max === f.x.max && u.y.min === f.y.min && u.y.max === f.y.max) &&
                      (this.isProjectionDirty = !1),
                    n || (n = n8()),
                    rI(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = o),
                  (function (e, t, n, r, i, o) {
                    i
                      ? ((e.opacity = tA(0, void 0 !== n.opacity ? n.opacity : 1, rF(r))),
                        (e.opacityExit = tA(void 0 !== t.opacity ? t.opacity : 1, 0, rj(r))))
                      : o &&
                        (e.opacity = tA(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                    for (let i = 0; i < rR; i++) {
                      let o = `border${rM[i]}Radius`,
                        s = rO(t, o),
                        a = rO(n, o);
                      (void 0 !== s || void 0 !== a) &&
                        (s || (s = 0),
                        a || (a = 0),
                        0 === s || 0 === a || rL(s) === rL(a)
                          ? ((e[o] = Math.max(tA(rk(s), rk(a), r), 0)), (J.test(a) || J.test(s)) && (e[o] += "%"))
                          : (e[o] = a));
                    }
                    (t.rotate || n.rotate) && (e.rotate = tA(t.rotate || 0, n.rotate || 0, r));
                  })(o, i, this.latestValues, r, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation && ((0, eR.Pn)(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = eR.Wi.update(() => {
                (rP.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, n) {
                    let r = j(0) ? 0 : nA(0);
                    return r.start(ny("", r, 1e3, n)), r.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
            if (t && n && r) {
              if (
                this !== e &&
                this.layout &&
                r &&
                ip(this.options.animationType, this.layout.layoutBox, r.layoutBox)
              ) {
                n = this.target || n8();
                let t = nG(this.layout.layoutBox.x);
                (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
                let r = nG(this.layout.layoutBox.y);
                (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
              }
              rI(t, n), rh(t, i), nX(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new rq()), this.sharedNodes.get(e).add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead)) || this;
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t ? (null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead) : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
            let r = this.getStack();
            r && r.promote(this, n),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: n } = e;
            if (((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t)) return;
            let r = {};
            for (let t = 0; t < rX.length; t++) {
              let i = "rotate" + rX[t];
              n[i] && ((r[i] = n[i]), e.setStaticValue(i, 0));
            }
            for (let t in (e.render(), r)) e.setStaticValue(t, r[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return rJ;
            let r = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents = eA(null == e ? void 0 : e.pointerEvents) || ""),
                (r.transform = i ? i(this.latestValues, "") : "none"),
                r
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
                  (t.pointerEvents = eA(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !rr(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"), (this.hasProjected = !1)),
                t
              );
            }
            let s = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = rG(this.projectionDeltaWithTransform, this.treeScale, s)),
              i && (r.transform = i(s, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let e in ((r.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            o.animationValues
              ? (r.opacity =
                  o === this
                    ? null !== (n = null !== (t = s.opacity) && void 0 !== t ? t : this.latestValues.opacity) &&
                      void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (r.opacity =
                  o === this ? (void 0 !== s.opacity ? s.opacity : "") : void 0 !== s.opacityExit ? s.opacityExit : 0),
            k)) {
              if (void 0 === s[e]) continue;
              let { correct: t, applyTo: n } = k[e],
                i = "none" === r.transform ? s[e] : t(s[e], o);
              if (n) {
                let e = n.length;
                for (let t = 0; t < e; t++) r[n[t]] = i;
              } else r[e] = i;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents = o === this ? eA(null == e ? void 0 : e.pointerEvents) || "" : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop();
            }),
              this.root.nodes.forEach(r6),
              this.root.sharedNodes.clear();
          }
        };
      }
      function r2(e) {
        e.updateLayout();
      }
      function r3(e) {
        var t;
        let n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: r } = e.layout,
            { animationType: i } = e.options,
            o = n.source !== e.layout.source;
          "size" === i
            ? n7((e) => {
                let r = o ? n.measuredBox[e] : n.layoutBox[e],
                  i = nG(r);
                (r.min = t[e].min), (r.max = r.min + i);
              })
            : ip(i, n.layoutBox, t) &&
              n7((r) => {
                let i = o ? n.measuredBox[r] : n.layoutBox[r],
                  s = nG(t[r]);
                (i.max = i.min + s),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0), (e.relativeTarget[r].max = e.relativeTarget[r].min + s));
              });
          let s = n9();
          nX(s, t, n.layoutBox);
          let a = n9();
          o ? nX(a, e.applyTransform(r, !0), n.measuredBox) : nX(a, t, n.layoutBox);
          let l = !rz(s),
            u = !1;
          if (!e.resumeFrom) {
            let r = e.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: i, layout: o } = r;
              if (i && o) {
                let s = n8();
                n0(s, n.layoutBox, i.layoutBox);
                let a = n8();
                n0(a, t, o.layoutBox),
                  r$(s, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((e.relativeTarget = a), (e.relativeTargetOrigin = s), (e.relativeParent = r));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: n,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function r5(e) {
        r0.totalNodes++,
          e.parent &&
            (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function r4(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
      }
      function r9(e) {
        e.clearSnapshot();
      }
      function r6(e) {
        e.clearMeasurements();
      }
      function r8(e) {
        e.isLayoutDirty = !1;
      }
      function r7(e) {
        let { visualElement: t } = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
      }
      function ie(e) {
        e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
      }
      function it(e) {
        e.resolveTargetDelta();
      }
      function ir(e) {
        e.calcProjection();
      }
      function ii(e) {
        e.resetRotation();
      }
      function io(e) {
        e.removeLeadSnapshot();
      }
      function is(e, t, n) {
        (e.translate = tA(t.translate, 0, n)),
          (e.scale = tA(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function ia(e, t, n, r) {
        (e.min = tA(t.min, n.min, r)), (e.max = tA(t.max, n.max, r));
      }
      function il(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let iu = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ic = (e) => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(e),
        id = ic("applewebkit/") && !ic("chrome/") ? Math.round : eY.Z;
      function ih(e) {
        (e.min = id(e.min)), (e.max = id(e.max));
      }
      function ip(e, t, n) {
        return "position" === e || ("preserve-aspect" === e && !nY(rK(t), rK(n), 0.2));
      }
      let im = r1({
          attachResizeListener: (e, t) => eO(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ig = { current: void 0 },
        iv = r1({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!ig.current) {
              let e = new im({});
              e.mount(window), e.setOptions({ layoutScroll: !0 }), (ig.current = e);
            }
            return ig.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) => "fixed" === window.getComputedStyle(e).position,
        }),
        iy = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function ib(e, t, n = 1) {
        (0, e9.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
        );
        let [r, i] = (function (e) {
          let t = iy.exec(e);
          if (!t) return [,];
          let [, n, r] = t;
          return [n, r];
        })(e);
        if (!r) return;
        let o = window.getComputedStyle(t).getPropertyValue(r);
        if (o) {
          let e = o.trim();
          return nx(e) ? parseFloat(e) : e;
        }
        return _(i) ? ib(i, t, n + 1) : i;
      }
      let ix = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
        iw = (e) => ix.has(e),
        iP = (e) => Object.keys(e).some(iw),
        iE = (e) => e === U || e === Q,
        iS = (e, t) => parseFloat(e.split(", ")[t]),
        iT =
          (e, t) =>
          (n, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let i = r.match(/^matrix3d\((.+)\)$/);
            if (i) return iS(i[1], t);
            {
              let t = r.match(/^matrix\((.+)\)$/);
              return t ? iS(t[1], e) : 0;
            }
          },
        iC = new Set(["x", "y", "z"]),
        iA = L.filter((e) => !iC.has(e)),
        iM = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(n),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(n),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: iT(4, 13),
          y: iT(5, 14),
        };
      (iM.translateX = iM.x), (iM.translateY = iM.y);
      let iR = (e, t, n) => {
          let r = t.measureViewportBox(),
            i = getComputedStyle(t.current),
            { display: o } = i,
            s = {};
          "none" === o && t.setStaticValue("display", e.display || "block"),
            n.forEach((e) => {
              s[e] = iM[e](r, i);
            }),
            t.render();
          let a = t.measureViewportBox();
          return (
            n.forEach((n) => {
              let r = t.getValue(n);
              r && r.jump(s[n]), (e[n] = iM[n](a, i));
            }),
            e
          );
        },
        ik = (e, t, n = {}, r = {}) => {
          (t = { ...t }), (r = { ...r });
          let i = Object.keys(t).filter(iw),
            o = [],
            s = !1,
            a = [];
          if (
            (i.forEach((i) => {
              let l;
              let u = e.getValue(i);
              if (!e.hasValue(i)) return;
              let c = n[i],
                d = nk(c),
                f = t[i];
              if (eS(f)) {
                let e = f.length,
                  t = null === f[0] ? 1 : 0;
                d = nk((c = f[t]));
                for (let n = t; n < e && null !== f[n]; n++)
                  l
                    ? (0, e9.k)(nk(f[n]) === l, "All keyframes must be of the same type")
                    : ((l = nk(f[n])),
                      (0, e9.k)(
                        l === d || (iE(d) && iE(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = nk(f);
              if (d !== l) {
                if (iE(d) && iE(l)) {
                  let e = u.get();
                  "string" == typeof e && u.set(parseFloat(e)),
                    "string" == typeof f
                      ? (t[i] = parseFloat(f))
                      : Array.isArray(f) && l === Q && (t[i] = f.map(parseFloat));
                } else
                  (null == d ? void 0 : d.transform) && (null == l ? void 0 : l.transform) && (0 === c || 0 === f)
                    ? 0 === c
                      ? u.set(l.transform(c))
                      : (t[i] = d.transform(f))
                    : (s ||
                        ((o = (function (e) {
                          let t = [];
                          return (
                            iA.forEach((n) => {
                              let r = e.getValue(n);
                              void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            t.length && e.render(),
                            t
                          );
                        })(e)),
                        (s = !0)),
                      a.push(i),
                      (r[i] = void 0 !== r[i] ? r[i] : t[i]),
                      u.jump(f));
              }
            }),
            !a.length)
          )
            return { target: t, transitionEnd: r };
          {
            let n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = iR(t, e, a);
            return (
              o.length &&
                o.forEach(([t, n]) => {
                  e.getValue(t).set(n);
                }),
              e.render(),
              S.j && null !== n && window.scrollTo({ top: n }),
              { target: i, transitionEnd: r }
            );
          }
        },
        iL = (e, t, n, r) => {
          var i, o;
          let s = (function (e, { ...t }, n) {
            let r = e.current;
            if (!(r instanceof Element)) return { target: t, transitionEnd: n };
            for (let i in (n && (n = { ...n }),
            e.values.forEach((e) => {
              let t = e.get();
              if (!_(t)) return;
              let n = ib(t, r);
              n && e.set(n);
            }),
            t)) {
              let e = t[i];
              if (!_(e)) continue;
              let o = ib(e, r);
              o && ((t[i] = o), n || (n = {}), void 0 === n[i] && (n[i] = e));
            }
            return { target: t, transitionEnd: n };
          })(e, t, r);
          return (
            (t = s.target),
            (r = s.transitionEnd),
            (i = t),
            (o = r),
            iP(i) ? ik(e, i, n, o) : { target: i, transitionEnd: o }
          );
        },
        iO = { current: null },
        iF = { current: !1 },
        ij = new WeakMap(),
        iD = Object.keys(E),
        iV = iD.length,
        iI = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        iN = y.length;
      class i_ {
        constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, visualState: i }, o = {}) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
            }),
            (this.scheduleRender = () => eR.Wi.render(this.render, !1, !0));
          let { latestValues: s, renderState: a } = i;
          (this.latestValues = s),
            (this.baseTarget = { ...s }),
            (this.initialValues = t.initial ? { ...s } : {}),
            (this.renderState = a),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.isControllingVariants = b(t)),
            (this.isVariantNode = x(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(t, {});
          for (let e in u) {
            let t = u[e];
            void 0 !== s[e] && j(t) && (t.set(s[e], !1), nb(l) && l.add(e));
          }
        }
        scrapeMotionValuesFromProps(e, t) {
          return {};
        }
        mount(e) {
          (this.current = e),
            ij.set(e, this),
            this.projection && !this.projection.instance && this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            iF.current ||
              (function () {
                if (((iF.current = !0), S.j)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (iO.current = e.matches);
                    e.addListener(t), t();
                  } else iO.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || iO.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (ij.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, eR.Pn)(this.notifyUpdate),
          (0, eR.Pn)(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) this.features[e].unmount();
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let n = O.has(e),
            r = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && eR.Wi.update(this.notifyUpdate, !1, !0),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            r(), i();
          });
        }
        sortNodePosition(e) {
          return this.current && this.sortInstanceNodePosition && this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...t }, n, r, i) {
          let o, s;
          for (let e = 0; e < iV; e++) {
            let n = iD[e],
              { isEnabled: r, Feature: i, ProjectionNode: a, MeasureLayout: l } = E[n];
            a && (o = a), r(t) && (!this.features[n] && i && (this.features[n] = new i(this)), l && (s = l));
          }
          if (("html" === this.type || "svg" === this.type) && !this.projection && o) {
            this.projection = new o(this.latestValues, this.parent && this.parent.projection);
            let { layoutId: e, layout: n, drag: r, dragConstraints: s, layoutScroll: a, layoutRoot: l } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: !!r || (s && p(s)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: i,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return s;
        }
        updateFeatures() {
          for (let e in this.features) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props);
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : n8();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        makeTargetAnimatable(e, t = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, t);
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < iI.length; t++) {
            let n = iI[t];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            let r = e["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          (this.prevMotionValues = (function (e, t, n) {
            let { willChange: r } = t;
            for (let i in t) {
              let o = t[i],
                s = n[i];
              if (j(o)) e.addValue(i, o), nb(r) && r.add(i);
              else if (j(s)) e.addValue(i, nA(o, { owner: e })), nb(r) && r.remove(i);
              else if (s !== o) {
                if (e.hasValue(i)) {
                  let t = e.getValue(i);
                  t.hasAnimated || t.set(o);
                } else {
                  let t = e.getStaticValue(i);
                  e.addValue(i, nA(void 0 !== t ? t : o, { owner: e }));
                }
              }
            }
            for (let r in n) void 0 === t[r] && e.removeValue(r);
            return t;
          })(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues)),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return void 0 !== this.props.initial && (e.initial = this.props.initial), e;
          }
          let t = {};
          for (let e = 0; e < iN; e++) {
            let n = y[e],
              r = this.props[n];
            (m(r) || !1 === r) && (t[n] = r);
          }
          return t;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
        }
        addValue(e, t) {
          t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)),
            this.values.set(e, t),
            (this.latestValues[e] = t.get());
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let n = this.values.get(e);
          return void 0 === n && void 0 !== t && ((n = nA(t, { owner: this })), this.addValue(e, n)), n;
        }
        readValue(e) {
          var t;
          return void 0 === this.latestValues[e] && this.current
            ? null !== (t = this.getBaseTargetFromProps(this.props, e)) && void 0 !== t
              ? t
              : this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e];
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let { initial: n } = this.props,
            r =
              "string" == typeof n || "object" == typeof n
                ? null === (t = eP(this.props, n)) || void 0 === t
                  ? void 0
                  : t[e]
                : void 0;
          if (n && void 0 !== r) return r;
          let i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || j(i)
            ? void 0 !== this.initialValues[e] && void 0 === r
              ? void 0
              : this.baseTarget[e]
            : i;
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new nE()), this.events[e].add(t);
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class iB extends i_ {
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
          delete t[e], delete n[e];
        }
        makeTargetAnimatableFromInstance({ transition: e, transitionEnd: t, ...n }, { transformValues: r }, i) {
          let o = (function (e, t, n) {
            let r = {};
            for (let i in e) {
              let e = (function (e, t) {
                if (t) return (t[e] || t.default || t).from;
              })(i, t);
              if (void 0 !== e) r[i] = e;
              else {
                let e = n.getValue(i);
                e && (r[i] = e.get());
              }
            }
            return r;
          })(n, e || {}, this);
          if ((r && (t && (t = r(t)), n && (n = r(n)), o && (o = r(o))), i)) {
            !(function (e, t, n) {
              var r, i;
              let o = Object.keys(t).filter((t) => !e.hasValue(t)),
                s = o.length;
              if (s)
                for (let a = 0; a < s; a++) {
                  let s = o[a],
                    l = t[s],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !== (i = null !== (r = n[s]) && void 0 !== r ? r : e.readValue(s)) && void 0 !== i
                          ? i
                          : t[s]),
                    null != u &&
                      ("string" == typeof u && (nx(u) || nm(u))
                        ? (u = parseFloat(u))
                        : !nO(u) && tU.test(l) && (u = np(s, l)),
                      e.addValue(s, nA(u, { owner: e })),
                      void 0 === n[s] && (n[s] = u),
                      null !== u && e.setBaseTarget(s, u));
                }
            })(this, n, o);
            let e = iL(this, n, o, t);
            (t = e.transitionEnd), (n = e.target);
          }
          return { transition: e, transitionEnd: t, ...n };
        }
      }
      class iW extends iB {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(e, t) {
          if (O.has(t)) {
            let e = nh(t);
            return (e && e.default) || 0;
          }
          {
            let n = window.getComputedStyle(e),
              r = (N(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return rp(e, t);
        }
        build(e, t, n, r) {
          eo(e, t, n, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t) {
          return ex(e, t);
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          j(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, t, n, r) {
          ev(e, t, n, r);
        }
      }
      class iU extends iB {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (O.has(t)) {
            let e = nh(t);
            return (e && e.default) || 0;
          }
          return (t = ey.has(t) ? t : f(t)), e.getAttribute(t);
        }
        measureInstanceViewportBox() {
          return n8();
        }
        scrapeMotionValuesFromProps(e, t) {
          return ew(e, t);
        }
        build(e, t, n, r) {
          ep(e, t, n, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(e, t, n, r) {
          eb(e, t, n, r);
        }
        mount(e) {
          (this.isSVGTag = eg(e.tagName)), super.mount(e);
        }
      }
      let iH = (e, t) =>
          R(e) ? new iU(t, { enableHardwareAcceleration: !1 }) : new iW(t, { enableHardwareAcceleration: !0 }),
        iz = {
          animation: { Feature: n_ },
          exit: { Feature: nW },
          inView: { Feature: e3 },
          tap: { Feature: eX },
          focus: { Feature: eq },
          hover: { Feature: eK },
          pan: { Feature: rw },
          drag: { Feature: rb, ProjectionNode: iv, MeasureLayout: rC },
          layout: { ProjectionNode: iv, MeasureLayout: rC },
        },
        i$ = (function (e) {
          function t(t, n = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: n,
              useVisualState: r,
              Component: i,
            }) {
              e &&
                (function (e) {
                  for (let t in e) E[t] = { ...E[t], ...e[t] };
                })(e);
              let o = (0, s.forwardRef)(function (o, f) {
                var g;
                let v;
                let y = {
                    ...(0, s.useContext)(a),
                    ...o,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, s.useContext)(T.p).id;
                      return t && void 0 !== e ? t + "-" + e : e;
                    })(o),
                  },
                  { isStatic: x } = y,
                  P = (function (e) {
                    let { initial: t, animate: n } = (function (e, t) {
                      if (b(e)) {
                        let { initial: t, animate: n } = e;
                        return { initial: !1 === t || m(t) ? t : void 0, animate: m(n) ? n : void 0 };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, s.useContext)(l));
                    return (0, s.useMemo)(() => ({ initial: t, animate: n }), [w(t), w(n)]);
                  })(o),
                  E = r(o, x);
                if (!x && S.j) {
                  P.visualElement = (function (e, t, n, r) {
                    let { visualElement: i } = (0, s.useContext)(l),
                      o = (0, s.useContext)(d),
                      f = (0, s.useContext)(u.O),
                      p = (0, s.useContext)(a).reducedMotion,
                      m = (0, s.useRef)();
                    (r = r || o.renderer),
                      !m.current &&
                        r &&
                        (m.current = r(e, {
                          visualState: t,
                          parent: i,
                          props: n,
                          presenceContext: f,
                          blockInitialAnimation: !!f && !1 === f.initial,
                          reducedMotionConfig: p,
                        }));
                    let g = m.current;
                    (0, s.useInsertionEffect)(() => {
                      g && g.update(n, f);
                    });
                    let v = (0, s.useRef)(!!(n[h] && !window.HandoffComplete));
                    return (
                      (0, c.L)(() => {
                        g && (g.render(), v.current && g.animationState && g.animationState.animateChanges());
                      }),
                      (0, s.useEffect)(() => {
                        g &&
                          (g.updateFeatures(),
                          !v.current && g.animationState && g.animationState.animateChanges(),
                          v.current && ((v.current = !1), (window.HandoffComplete = !0)));
                      }),
                      g
                    );
                  })(i, E, y, t);
                  let n = (0, s.useContext)(C),
                    r = (0, s.useContext)(d).strict;
                  P.visualElement && (v = P.visualElement.loadFeatures(y, r, e, n));
                }
                return s.createElement(
                  l.Provider,
                  { value: P },
                  v && P.visualElement ? s.createElement(v, { visualElement: P.visualElement, ...y }) : null,
                  n(
                    i,
                    o,
                    ((g = P.visualElement),
                    (0, s.useCallback)(
                      (e) => {
                        e && E.mount && E.mount(e),
                          g && (e ? g.mount(e) : g.unmount()),
                          f && ("function" == typeof f ? f(e) : p(f) && (f.current = e));
                      },
                      [g]
                    )),
                    E,
                    x,
                    P.visualElement
                  )
                );
              });
              return (o[A] = i), o;
            })(e(t, n));
          }
          if ("undefined" == typeof Proxy) return t;
          let n = new Map();
          return new Proxy(t, { get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r)) });
        })((e, t) =>
          (function (e, { forwardMotionProps: t = !1 }, n, r) {
            return {
              ...(R(e) ? ek : eL),
              preloadedFeatures: n,
              useRender: (function (e = !1) {
                return (t, n, r, { latestValues: i }, o) => {
                  let a = (
                      R(t)
                        ? function (e, t, n, r) {
                            let i = (0, s.useMemo)(() => {
                              let n = em();
                              return (
                                ep(n, t, { enableHardwareAcceleration: !1 }, eg(r), e.transformTemplate),
                                { ...n.attrs, style: { ...n.style } }
                              );
                            }, [t]);
                            if (e.style) {
                              let t = {};
                              ea(t, e.style, e), (i.style = { ...t, ...i.style });
                            }
                            return i;
                          }
                        : function (e, t, n) {
                            let r = {},
                              i = (function (e, t, n) {
                                let r = e.style || {},
                                  i = {};
                                return (
                                  ea(i, r, e),
                                  Object.assign(
                                    i,
                                    (function ({ transformTemplate: e }, t, n) {
                                      return (0, s.useMemo)(() => {
                                        let r = es();
                                        return (
                                          eo(r, t, { enableHardwareAcceleration: !n }, e),
                                          Object.assign({}, r.vars, r.style)
                                        );
                                      }, [t]);
                                    })(e, t, n)
                                  ),
                                  e.transformValues ? e.transformValues(i) : i
                                );
                              })(e, t, n);
                            return (
                              e.drag &&
                                !1 !== e.dragListener &&
                                ((r.draggable = !1),
                                (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
                                (i.touchAction = !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`)),
                              void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
                              (r.style = i),
                              r
                            );
                          }
                    )(n, i, o, t),
                    l = {
                      ...(function (e, t, n) {
                        let r = {};
                        for (let i in e)
                          ("values" !== i || "object" != typeof e.values) &&
                            (ec(i) ||
                              (!0 === n && eu(i)) ||
                              (!t && !eu(i)) ||
                              (e.draggable && i.startsWith("onDrag"))) &&
                            (r[i] = e[i]);
                        return r;
                      })(n, "string" == typeof t, e),
                      ...a,
                      ref: r,
                    },
                    { children: u } = n,
                    c = (0, s.useMemo)(() => (j(u) ? u.get() : u), [u]);
                  return (0, s.createElement)(t, { ...l, children: c });
                };
              })(t),
              createVisualElement: r,
              Component: e,
            };
          })(e, t, iz, iH)
        );
    },
    9047: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var r = n(9276);
      let i = r.Z,
        o = r.Z;
    },
    7282: function (e, t, n) {
      n.d(t, {
        j: function () {
          return r;
        },
      });
      let r = "undefined" != typeof document;
    },
    9276: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (e) => e;
    },
    458: function (e, t, n) {
      n.d(t, {
        h: function () {
          return i;
        },
      });
      var r = n(2265);
      function i(e) {
        let t = (0, r.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    9033: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(2265);
      let i = n(7282).j ? r.useLayoutEffect : r.useEffect;
    },
  },
]);
