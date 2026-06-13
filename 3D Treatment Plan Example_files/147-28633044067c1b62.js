"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [147],
  {
    6018: function (e, t, n) {
      n.d(t, {
        I9: function () {
          return u;
        },
        IT: function () {
          return o;
        },
        IW: function () {
          return i;
        },
      });
      let { version: r } = n(4346),
        o = "/",
        u = {
          1: "fdi",
          2: "attachment",
          3: "ipr",
          4: "toothRoot",
          5: "jawbone",
          6: "overlying",
          7: "contact",
          8: "biteJump",
          9: "grid",
          10: "bolton",
          11: "simGum",
        },
        i = "https://iweb.angelalign.com/jslib/simulator/".concat(r, "/assets");
      // i = "http://127.0.0.1:5500/sim";
      //   i = "/sim";
    },
    9576: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(3619),
        o = n(210);
      function u(e) {
        let { logo: t, children: n } = e,
          u = !!t;
        return (0, r.jsxs)("div", {
          className: "overlay overflow-hidden min-w-320px",
          children: [
            (0, r.jsxs)("div", {
              className:
                "w-1/1 h-1/1 min-w-1920px min-h-960px absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "opacity-50 absolute left-0px top-0px w-1080px h-891px bg-right-center bg-contain bg-no-repeat bg-[url(/static/images/auth-bg-lt.svg)]",
                }),
                (0, r.jsx)("div", {
                  className:
                    "opacity-36 absolute right-0px bottom-0px w-1137px h-871px bg-left-center bg-contain bg-no-repeat bg-[url(/static/images/auth-bg-rb.svg)]",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className:
                "opacity-80 absolute right-0px bottom-0px w-231px h-231px sm:w-361px sm:h-361px bg-center bg-contain bg-no-repeat bg-[url(/static/images/auth-bg-rb-jaw.svg)]",
            }),
            (0, r.jsxs)("div", {
              className: (0, o.Z)([
                "overlay flex flex-col justify-center items-center p-20px",
                { "-mt-58px sm:-mt-68px": u },
              ]),
              children: [
                u &&
                  (0, r.jsx)("div", {
                    id: "center-logo",
                    className: (0, o.Z)([
                      "mb-80px sm:mb-100px flex-none h-36px bg-center bg-contain bg-no-repeat",
                      t,
                    ]),
                  }),
                n,
              ],
            }),
          ],
        });
      }
    },
    7657: function (e, t, n) {
      n.d(t, {
        default: function () {
          return c;
        },
      });
      var r = n(3619),
        o = n(9576),
        u = n(1158),
        i = n(8686),
        l = n(1051);
      function c(e) {
        let { titleKey: t, logo: n, children: c } = e,
          { t: a } = (0, l.Q)();
        return (0, r.jsxs)(o.Z, {
          logo: n,
          children: [
            t && (0, r.jsx)(i.Z, { children: a(t) }),
            (0, r.jsx)(u.Z, {}),
            (0, r.jsx)("div", {
              className:
                "mt-24px font-400 text-18px leading-34px tracking-0.75px text-#14142b",
              children: c,
            }),
          ],
        });
      }
    },
    8686: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(1196);
      function o(e) {
        let { children: t } = e;
        return (
          (0, r.useEffect)(() => {
            document.title = t;
          }, [t]),
          null
        );
      }
    },
    1483: function (e, t, n) {
      n.d(t, {
        j: function () {
          return c;
        },
      });
      var r = n(1257),
        o = n(6741),
        u = n(6018),
        i = n(3491);
      let l = (0, o.V)();
      function c(e) {
        // let t = {
        //   ...e,
        //   c_t: new Date().toISOString(),
        //   url: location.href,
        //   pid: l,
        // };
        // "function" == typeof navigator.sendBeacon &&
        // "function" == typeof URLSearchParams
        //   ? navigator.sendBeacon(
        //       (0, r.v)(u.IT, "/api/track"),
        //       new URLSearchParams(t),
        //     )
        //   : fetch((0, r.v)(u.IT, "/api/track"), {
        //       method: "POST",
        //       headers: {
        //         "Content-Type":
        //           "application/x-www-form-urlencoded; charset=UTF-8",
        //       },
        //       body: (0, i.ZP)(t),
        //     }).catch(console.error);
      }
    },
    1051: function (e, t, n) {
      n.d(t, {
        I18NProvider: function () {
          return a;
        },
        Trans: function () {
          return s;
        },
        Q: function () {
          return c;
        },
      });
      var r = n(3619),
        o = n(5367),
        u = n(1196);
      let i = Symbol(),
        l = (function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = (0, u.createContext)(i);
          return [
            function (t) {
              let { initialState: o, children: u } = t,
                i = e(o);
              return (0, r.jsx)(n.Provider, { value: i, children: u });
            },
            function () {
              let e = (0, u.useContext)(n);
              if (e === i)
                throw Error(
                  "Missing Provider [".concat(
                    t,
                    "]: component using Container.useModel must be wrapped with <Container.Provider>.",
                  ),
                );
              return e;
            },
          ];
        })(function () {
          let [e, t] = (0, u.useState)(),
            [n, r] = (0, u.useState)();
          return (
            (0, u.useEffect)(() => {
              t(
                (0, o.Gd)({
                  fallbackLanguage: "en",
                  detectors: { searchParams: ["locale"] },
                }),
              );
            }, []),
            (0, u.useEffect)(() => {
              var t, n;
              e &&
                (null === (n = (0, o.So)("3d-community", e)) ||
                  void 0 === n ||
                  null === (t = n.then) ||
                  void 0 === t ||
                  t.call(n, r));
            }, [e]),
            {
              language: e,
              translations: n,
              t: function (e, t) {
                if (!n) return "";
                let r = e.split(".").reduce((e, t) => (e && e[t]) || null, n);
                return r
                  ? (function (e) {
                      var t;
                      let n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return null !==
                        (t = e.replace(/\{\{(.*?)\}\}/g, (e, t) => {
                          var r;
                          return "".concat(
                            null !== (r = n[null == t ? void 0 : t.trim()]) &&
                              void 0 !== r
                              ? r
                              : "",
                          );
                        })) && void 0 !== t
                        ? t
                        : "";
                    })(r, t)
                  : "";
              },
            }
          );
        }),
        c = l[1],
        a = (function (e, t) {
          let { container: n, initialState: o } = e;
          return (0, u.memo)(function (e) {
            let [u] = n;
            return (0, r.jsx)(u, {
              initialState: o,
              children: (0, r.jsx)(t, { ...e }),
            });
          });
        })({ container: l }, function (e) {
          let { children: t } = e,
            { language: n, translations: o } = c();
          return n && o ? (0, r.jsx)(r.Fragment, { children: t }) : null;
        });
      function s(e) {
        let { i18nKey: t, values: n } = e,
          { t: o } = c();
        return (0, r.jsx)(r.Fragment, { children: o(t, n) });
      }
    },
    1158: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(3619);
      function o(e) {
        let { color: t = "#0086cd", ...n } = e;
        return (0, r.jsx)("svg", {
          width: "76",
          height: "76",
          viewBox: "0 0 76 76",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...n,
          children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M38.0001 72.8333C57.238 72.8333 72.8334 57.2379 72.8334 38C72.8334 18.7621 57.238 3.16666 38.0001 3.16666C18.7622 3.16666 3.16675 18.7621 3.16675 38C3.16675 57.2379 18.7622 72.8333 38.0001 72.8333ZM38.0001 18.1667C40.2092 18.1667 42.0001 19.9575 42.0001 22.1667V38C42.0001 40.2091 40.2092 42 38.0001 42C35.7909 42 34.0001 40.2091 34.0001 38V22.1667C34.0001 19.9575 35.7909 18.1667 38.0001 18.1667ZM38.0001 46.6667C40.2092 46.6667 42.0001 48.4575 42.0001 50.6667V52.25C42.0001 54.4591 40.2092 56.25 38.0001 56.25C35.7909 56.25 34.0001 54.4591 34.0001 52.25V50.6667C34.0001 48.4575 35.7909 46.6667 38.0001 46.6667Z",
            style: { fill: "var(--icon-color, ".concat(t, ")") },
          }),
        });
      }
    },
    9353: function (e, t, n) {
      n.d(t, {
        Qh: function () {
          return o;
        },
        d: function () {
          return l;
        },
        ey: function () {
          return u;
        },
        wz: function () {
          return i;
        },
      });
      var r = n(3904);
      let o = (e) => e && ["Angelalign", "VSPRY"].includes(e),
        u = (e) => e && ["Impress"].includes(e),
        i = (e) => e && ["OB"].includes(e);
      function l() {
        var e, t;
        let { host: o, searchParams: u } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (r.j) {
          null != o || (o = location.host);
          let { search: t } = location,
            n =
              null === (e = /brand=(.+?)([&#]|$)/.exec(t)) || void 0 === e
                ? void 0
                : e[1];
          null != u || (u = { brand: n });
        } else {
          let { headers: e } = n(3923);
          null != o ||
            (o = null !== (t = e().get("host")) && void 0 !== t ? t : "");
        }
        if (null == o ? void 0 : o.includes(".simplyclear.")) return "OB";
        let { brand: i } = null != u ? u : {};
        return (
          i ||
          ((null == o ? void 0 : o.includes(".angelalign.")) ||
          (null == i ? void 0 : i.toLowerCase()) === "angelalign"
            ? "Angelalign"
            : void 0)
        );
      }
    },
    2433: function (e, t, n) {
      n.d(t, {
        H: function () {
          return c;
        },
        m8: function () {
          return l;
        },
        c0: function () {
          return v;
        },
        Hm: function () {
          return d;
        },
        xE: function () {
          return s;
        },
        Lq: function () {
          return f;
        },
      });
      var r = n(1196);
      let o = (e) => {
        let t = !0;
        return async function () {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          if (t) {
            t = !1;
            try {
              return await e(...r);
            } finally {
              t = !0;
            }
          }
        };
      };
      var u = n(7399),
        i = n(2701);
      n(3904);
      let l = (e, t) => {
        let [n, o] = (0, r.useState)();
        return ((0, r.useEffect)(() => o(e()), t), n);
      };
      function c(e) {
        return (0, r.useMemo)(() => o(e), [e]);
      }
      let a = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      };
      function s(e) {
        let [t, n] = (0, r.useState)(a),
          o = l(
            () =>
              new ResizeObserver((e) => {
                if (e[0]) {
                  let {
                    x: t,
                    y: r,
                    width: o,
                    height: u,
                    top: i,
                    left: l,
                    bottom: c,
                    right: a,
                  } = e[0].contentRect;
                  n({
                    x: t,
                    y: r,
                    width: o,
                    height: u,
                    top: i,
                    left: l,
                    bottom: c,
                    right: a,
                  });
                }
              }),
            [],
          );
        return (
          (0, r.useEffect)(() => {
            if (e && o)
              return (
                o.observe(e, { box: "border-box" }),
                () => {
                  o.disconnect();
                }
              );
          }, [e, o]),
          t
        );
      }
      function d(e) {
        let [t, n] = (0, r.useState)(e),
          o = (0, r.useMemo)(() => JSON.stringify(e), [e]);
        return (
          (0, r.useEffect)(() => {
            n(e);
          }, [o]),
          [t, n]
        );
      }
      function f() {
        let [e, t] = (0, r.useState)(null);
        return (
          (0, r.useEffect)(
            () => (0, u.v)(e, "touchstart", (e) => e.preventDefault(), !1),
            [e],
          ),
          (0, r.useEffect)(
            () => (0, u.v)(e, "touchmove", (e) => e.preventDefault(), !1),
            [e],
          ),
          t
        );
      }
      let v = (e) => {
        let {
            container: t,
            initialPosition: n = { x: 0, y: 0 },
            disabled: o,
          } = e,
          [u, l] = (0, r.useState)(null);
        null != t || (t = u);
        let [c, a] = (0, r.useState)(!1),
          [s, d] = (0, r.useState)(n),
          f = (0, r.useRef)(s);
        return (
          (0, r.useEffect)(() => {
            if (!u || !t || o) return;
            let e = 0,
              n = 0,
              r = 0,
              l = 0,
              c = (e, n) => {
                var o, u, c, s;
                if (4 >= Math.abs(e) && 4 >= Math.abs(n)) return f.current;
                a(!0);
                let { x: v, y: m } = f.current,
                  p = getComputedStyle(t),
                  g = parseFloat(null !== (o = p.left) && void 0 !== o ? o : 0),
                  h = parseFloat(null !== (u = p.top) && void 0 !== u ? u : 0),
                  x = parseFloat(
                    null !== (c = p.right) && void 0 !== c ? c : 0,
                  ),
                  b = parseFloat(
                    null !== (s = p.bottom) && void 0 !== s ? s : 0,
                  );
                ((r = (0, i.u)(-g, x)(v + e)), (l = (0, i.u)(-h, b)(m + n)));
                let w = { x: r, y: l };
                return (d(w), w);
              },
              s = (t) => {
                (t.preventDefault(),
                  (e = t.pageX),
                  (n = t.pageY),
                  document.addEventListener("mousemove", v),
                  document.addEventListener("mouseup", m));
              },
              v = (t) => {
                (t.preventDefault(), c(t.pageX - e, t.pageY - n));
              },
              m = () => {
                (document.removeEventListener("mouseup", m),
                  document.removeEventListener("mousemove", v),
                  a(!1),
                  (f.current = { x: r, y: l }));
              },
              p = (t) => {
                (t.preventDefault(),
                  (e = t.touches[0].pageX),
                  (n = t.touches[0].pageY),
                  document.addEventListener("touchmove", g),
                  document.addEventListener("touchcancel", h),
                  document.addEventListener("touchend", h));
              },
              g = (t) => {
                c(t.touches[0].pageX - e, t.touches[0].pageY - n);
              },
              h = () => {
                (document.removeEventListener("touchmove", g),
                  document.removeEventListener("touchcancel", h),
                  document.removeEventListener("touchend", h),
                  a(!1),
                  (f.current = { x: r, y: l }));
              };
            return (
              u.addEventListener("mousedown", s),
              u.addEventListener("touchstart", p),
              () => {
                (u.removeEventListener("mousedown", s),
                  u.removeEventListener("touchstart", p));
              }
            );
          }, [t, o, u]),
          [l, s, c]
        );
      };
    },
    7399: function (e, t, n) {
      n.d(t, {
        v: function () {
          return r;
        },
      });
      function r(e, t, n, r) {
        if (e)
          return (
            e.addEventListener(t, n, r),
            () => e.removeEventListener(t, n, r)
          );
      }
    },
    3904: function (e, t, n) {
      n.d(t, {
        j: function () {
          return r;
        },
      });
      let r =
        "object" == typeof navigator &&
        "object" == typeof document &&
        "function" == typeof document.createElement;
    },
    3491: function (e, t, n) {
      t.ZP = function (e) {
        return Object.entries(null != e ? e : {})
          .map((e) => {
            let [t, n] = e;
            return [
              encodeURIComponent(t),
              void 0 !== n ? encodeURIComponent(n) : "",
            ];
          })
          .map((e) => e.join("="))
          .join("&");
      };
    },
  },
]);
