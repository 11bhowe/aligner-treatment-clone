"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [35],
  {
    4019: function (e, n, t) {
      t.d(n, {
        FY: function () {
          return l;
        },
        qo: function () {
          return o;
        },
      });
      let r = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "0";
        return (r) => {
          let o = "" + r;
          return !n && o.length > e
            ? o
            : (Array(e).fill(t).join("") + o).slice(-e);
        };
      };
      function o(e) {
        let n = e.length;
        if (n % 2) throw Error("hex's length must be an even.");
        let t = Array(n / 2),
          r = 0,
          o = 0;
        for (; r < n; ) ((t[o++] = parseInt(e.substr(r, 2), 16)), (r += 2));
        return t;
      }
      function l(e) {
        return (function (e) {
          let n = "";
          for (let t = 0, o = e.length; t < o; t++)
            n += r(2, !0)(e[t].toString(16));
          return n;
        })(new Uint8Array(e));
      }
    },
    6486: function (e, n, t) {
      console.log("%%%%%%", e, n, t);
      console.log(e.exports.Z, { credentials: "same-origin", ...n });
      n.Z = (e, n) =>
        fetch(
          e.includes("community")
            ? "3D Treatment Plan Example_files/en.json"
            : // : e.includes("simulator.wasm")
              //   ? "sim/simulator.wasm"
              e,
          {
            credentials: "same-origin",
            ...n,
          },
        ).then(async (e) => {
          // if (!e.ok) throw e;
          let ee = null;
          console.log("EEE: ", e);
          // const json = await e.
          // console.log("EEE: ", await e.json());
          console.log("EEE text ", t.text);
          console.log("EEE n", n);

          // if (e.url.includes("simulator.wasm")) {
          //   const buff = await e.arrayBuffer();
          //   console.log("GOGOGO ", buff);
          //   const compiledModule = await WebAssembly.compileStreaming(e);
          //   const moduleImports = WebAssembly.Module.imports(compiledModule);
          //   console.log("imports...", moduleImports);
          //   const { instance } = await WebAssembly.instantiate(buff);
          //   console.log("GOGOGO ", buff, instance, result);
          //   const result = instance.exports.myWasmFunction(42);
          //   console.log("GOGOGO ", buff, instance, result);
          // }
          if (
            e.url ===
            "https://iweb.angelalign.com/jslib/simulator/0.0.0-3bf37bb30c/assets/webgl2/simulator.js"
          ) {
            // ee = {
            //   body: e.body,
            //   bodyUsed: false,
            //   headers: e.headers,
            //   ok: true,
            //   redirected: false,
            //   status: 200,
            //   statusText: "",
            //   text: () => "",
            //   type: "cors",
            //   url: "http://127.0.0.1:5500/sim/simulator.js",
            // };
            ee = e.clone();
            // ee.url = "http://127.0.0.1:5500/sim/simulator.js";
            console.log("2ND EEE ", ee);
            // return ee;
          }
          return e;
        });
      console.log("NZZZZZZZ", n.Z);
    },
    5367: function (e, n, t) {
      function r(e) {
        var n;
        let t =
          "undefined" != typeof globalThis &&
          null !== (n = globalThis.__RUNTIME__) &&
          void 0 !== n
            ? n
            : {};
        return void 0 === e ? t : t[e];
      }
      t.d(n, {
        So: function () {
          return p;
        },
        O1: function () {
          return f;
        },
        Gd: function () {
          return w;
        },
      });
      var o = t(4081);
      let l = r("languages") || [
        "zh-CN",
        "en",
        "es-ES",
        "fr-FR",
        "it-IT",
        "pt-PT",
        "de-DE",
        "ja-JP",
        "ru-RU",
        "pt-BR",
        "ko-KR",
      ];
      function i(e) {
        console.log("@@@ ", e);
        if (e === "https://iweb.angelalign.com/tmx/r/iortho/global/prod") {
          const fs = require("fs");
          const rawData = fs.readFileSync("./prod", "utf8");
          return JSON.parse(rawData);
        }
        if (
          e === "undefined/3d-wasm/en.json" ||
          e ===
            "https://iweb.angelalign.com/tmx/v/0135ec228d04cec4ce164678f55238d553032186/3d-wasm/en.json" ||
          e.includes("3d-wasm/en.json")
        ) {
          const fs = require("fs");
          const rawData = fs.readFileSync("./en-wasm.json", "utf8");
          return JSON.parse(rawData);
        }
        if (
          e === "undefined/3d-community/en.json" ||
          // e ===
          //   "https://iweb.angelalign.com/tmx/v/0135ec228d04cec4ce164678f55238d553032186/3d-wasm/en.json"
          e.includes("3d-community/en.json")
        ) {
          const fs = require("fs");
          const rawData = fs.readFileSync("./en.json", "utf8");
          return JSON.parse(rawData);
        }
        if (
          e === "undefined/3d-scheme/en.json" ||
          e ===
            "https://iweb.angelalign.com/tmx/v/0135ec228d04cec4ce164678f55238d553032186/3d-scheme/en.json" ||
          e.includes("3d-scheme/en.json")
        ) {
          // console.log("!!!!!");
          const fs = require("fs");
          // console.log("!!!!!!!!!");
          const rawData = fs.readFileSync("./en-scheme3.json", "utf8");
          // console.log("!!!!!!!!!!!!!");
          // console.log(await JSON.parse(rawData));
          const thedata = JSON.parse(rawData);
          console.log(thedata);
          return thedata;
        }
        let { noCache: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = new XMLHttpRequest();

        t.open("GET", e, !1);
        t.send();
        console.log(JSON.parse(t.responseText));
        return (
          t.open("GET", e, !1),
          n &&
            (t.setRequestHeader("Cache-Control", "no-cache"),
            t.setRequestHeader("Pragma", "no-cache"),
            t.setRequestHeader("If-Modified-Since", "0")),
          t.send(),
          JSON.parse(t.responseText)
        );
      }
      var a = t(6486);
      let u =
          ("undefined" != typeof globalThis && globalThis["--tmx--"]) || null,
        c = () => {
          try {
            ("undefined" != typeof globalThis && (globalThis["--tmx--"] = u),
              localStorage.setItem("tmx", JSON.stringify(u)),
              console.log("[TMx] cached:", u));
          } catch (e) {
            console.error("[TMx] cache failed:", e);
          }
        },
        s = new Map();
      function d(e) {
        return (n, t) => {
          if (o.TF)
            try {
              let l = (function (e, n) {
                let t = (function () {
                  if (u) return u;
                  try {
                    // let e = r("tmx");
                    let e =
                      "https://iweb.angelalign.com/tmx/r/iortho/global/prod";
                    console.log("[TMx] loaded from global:", e);
                    if (!e) {
                      let e = Error("[TMx] tmx api is not defined");
                      throw (o.TF && console.error(e), e);
                    }
                    return (
                      (u = i(e, { noCache: !0 })),
                      console.log("[TMx] loaded:", u),
                      c(),
                      u
                    );
                  } catch (e) {
                    try {
                      return (
                        // (u = JSON.parse(localStorage.getItem("tmx") || "null")),
                        (
                          (u = {
                            env: "prod",
                            region: "global",
                            version: "583bf3abd25a9b1c8ffe43a049b83dae933b9998",
                            time: 1781254733007,
                            endpoint:
                              "https://iweb.angelalign.com/tmx/v/583bf3abd25a9b1c8ffe43a049b83dae933b9998",
                          }),
                          console.log("[TMx] loaded from cache:", u),
                          u
                        )
                      );
                    } catch (e) {
                      return null;
                    }
                  }
                })();
                if (t)
                  return ""
                    .concat(t.endpoint, "/")
                    .concat(e, "/")
                    .concat(n, ".json");
              })(n, t);
              if (!l) return;
              if (s.has(l)) return s.get(l);
              let a = e(l);
              if (a instanceof Promise) return a.then((e) => (s.set(l, e), e));
              return (s.set(l, a), a);
            } catch (e) {}
        };
      }
      let f = d(i),
        p = d((e, n) => (0, a.Z)(e, n).then((e) => e.json()));
      var g = t(4051);
      let h = [
        { locale: "de-DE", enum: 3, label: "Deutsch", icon: "De" },
        { locale: "en", enum: 2, label: "English", icon: "En" },
        { locale: "es-ES", enum: 4, label: "Espa\xf1ol", icon: "Es" },
        { locale: "fr-FR", enum: 5, label: "Fran\xe7ais", icon: "Fr" },
        { locale: "ko-KR", enum: 11, label: "한국어", icon: "KO" },
        { locale: "it-IT", enum: 6, label: "Italiano", icon: "It" },
        { locale: "ja-JP", enum: 8, label: "日本語", icon: "日" },
        { locale: "pt-PT", enum: 7, label: "Portugu\xeas", icon: "Pt" },
        {
          locale: "pt-BR",
          enum: 9,
          label: "Portugu\xeas Brasileiro",
          icon: "PTB",
        },
        { locale: "ru-RU", enum: 10, label: "Русский", icon: "Ru" },
        { locale: "zh-CN", enum: 0, label: "中文", icon: "中" },
      ];
      (Object.fromEntries(h.map((e) => [e.locale, e.enum])),
        Object.fromEntries(h.map((e) => [e.enum, e.locale])));
      let m = { localStorage: ["languageKey"], searchParams: ["locale"] },
        w = (function (e) {
          let n = Symbol(),
            t = n;
          return function () {
            for (var r = arguments.length, o = Array(r), l = 0; l < r; l++)
              o[l] = arguments[l];
            return (t === n && (t = e(...o)), t);
          };
        })(function () {
          let { detectors: e = m, fallbackLanguage: n = "en" } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!g.T) return n;
          let t = (function (e, n) {
            var t, r;
            if (!o.TF) return n;
            let i = new URLSearchParams(
                null !==
                  (r =
                    null === (t = globalThis.location) || void 0 === t
                      ? void 0
                      : t.search) && void 0 !== r
                  ? r
                  : "",
              ),
              a = {
                searchParams: (e) => i.get(e),
                localStorage: (e) => localStorage.getItem(e),
                sessionStorage: (e) => sessionStorage.getItem(e),
                cookie: (e) => {
                  var n;
                  return (
                    (null ===
                      (n = new RegExp("(^| )".concat(e, "=([^;]*)(;|$)")).exec(
                        document.cookie,
                      )) || void 0 === n
                      ? void 0
                      : n[2]) || null
                  );
                },
              };
            return (function (e, n) {
              let t;
              for (let { fields: n, detect: r } of e)
                if (n.length && "function" == typeof r) {
                  for (let e of n)
                    if (
                      (null != t ||
                        (t = (function (e, n) {
                          if (!e) return;
                          let [t, r] = e.split(/-|_/),
                            o = ""
                              .concat(t, "-")
                              .concat(null == r ? void 0 : r.toUpperCase());
                          return l.includes(o)
                            ? o
                            : l.find((e) => e.split("-")[0] === t) || void 0;
                        })(r(e))),
                      t)
                    )
                      return t;
                }
              return n;
            })(
              [
                ...Object.entries(e).map((e) => {
                  let [n, t] = e;
                  return { detect: a[n], fields: t };
                }),
                { fields: ["language"], detect: () => navigator.language },
              ],
              n,
            );
          })(e, n);
          return (
            (document.documentElement.lang = t),
            console.log("Resolved language:", t),
            t
          );
        });
    },
    4051: function (e, n, t) {
      t.d(n, {
        T: function () {
          return r;
        },
      });
      let r =
        "undefined" != typeof window &&
        "undefined" != typeof document &&
        "undefined" != typeof navigator;
    },
    4081: function (e, n, t) {
      t.d(n, {
        TF: function () {
          return l.T;
        },
        Qc: function () {
          return i;
        },
      });
      var r = t(4019);
      function o(e, n) {
        let [t, r, o, l] = e;
        ((t += (((r & o) | (~r & l)) + n[0] - 680876936) | 0),
          (l +=
            ((((t = (((t << 7) | (t >>> 25)) + r) | 0) & r) | (~t & o)) +
              n[1] -
              389564586) |
            0),
          (o +=
            ((((l = (((l << 12) | (l >>> 20)) + t) | 0) & t) | (~l & r)) +
              n[2] +
              606105819) |
            0),
          (r +=
            ((((o = (((o << 17) | (o >>> 15)) + l) | 0) & l) | (~o & t)) +
              n[3] -
              1044525330) |
            0),
          (t +=
            ((((r = (((r << 22) | (r >>> 10)) + o) | 0) & o) | (~r & l)) +
              n[4] -
              176418897) |
            0),
          (l +=
            ((((t = (((t << 7) | (t >>> 25)) + r) | 0) & r) | (~t & o)) +
              n[5] +
              1200080426) |
            0),
          (o +=
            ((((l = (((l << 12) | (l >>> 20)) + t) | 0) & t) | (~l & r)) +
              n[6] -
              1473231341) |
            0),
          (r +=
            ((((o = (((o << 17) | (o >>> 15)) + l) | 0) & l) | (~o & t)) +
              n[7] -
              45705983) |
            0),
          (t +=
            ((((r = (((r << 22) | (r >>> 10)) + o) | 0) & o) | (~r & l)) +
              n[8] +
              1770035416) |
            0),
          (l +=
            ((((t = (((t << 7) | (t >>> 25)) + r) | 0) & r) | (~t & o)) +
              n[9] -
              1958414417) |
            0),
          (o +=
            ((((l = (((l << 12) | (l >>> 20)) + t) | 0) & t) | (~l & r)) +
              n[10] -
              42063) |
            0),
          (r +=
            ((((o = (((o << 17) | (o >>> 15)) + l) | 0) & l) | (~o & t)) +
              n[11] -
              1990404162) |
            0),
          (t +=
            ((((r = (((r << 22) | (r >>> 10)) + o) | 0) & o) | (~r & l)) +
              n[12] +
              1804603682) |
            0),
          (l +=
            ((((t = (((t << 7) | (t >>> 25)) + r) | 0) & r) | (~t & o)) +
              n[13] -
              40341101) |
            0),
          (o +=
            ((((l = (((l << 12) | (l >>> 20)) + t) | 0) & t) | (~l & r)) +
              n[14] -
              1502002290) |
            0),
          (r +=
            ((((o = (((o << 17) | (o >>> 15)) + l) | 0) & l) | (~o & t)) +
              n[15] +
              1236535329) |
            0),
          (t +=
            ((((r = (((r << 22) | (r >>> 10)) + o) | 0) & l) | (o & ~l)) +
              n[1] -
              165796510) |
            0),
          (l +=
            ((((t = (((t << 5) | (t >>> 27)) + r) | 0) & o) | (r & ~o)) +
              n[6] -
              1069501632) |
            0),
          (o +=
            ((((l = (((l << 9) | (l >>> 23)) + t) | 0) & r) | (t & ~r)) +
              n[11] +
              643717713) |
            0),
          (r +=
            ((((o = (((o << 14) | (o >>> 18)) + l) | 0) & t) | (l & ~t)) +
              n[0] -
              373897302) |
            0),
          (t +=
            ((((r = (((r << 20) | (r >>> 12)) + o) | 0) & l) | (o & ~l)) +
              n[5] -
              701558691) |
            0),
          (l +=
            ((((t = (((t << 5) | (t >>> 27)) + r) | 0) & o) | (r & ~o)) +
              n[10] +
              38016083) |
            0),
          (o +=
            ((((l = (((l << 9) | (l >>> 23)) + t) | 0) & r) | (t & ~r)) +
              n[15] -
              660478335) |
            0),
          (r +=
            ((((o = (((o << 14) | (o >>> 18)) + l) | 0) & t) | (l & ~t)) +
              n[4] -
              405537848) |
            0),
          (t +=
            ((((r = (((r << 20) | (r >>> 12)) + o) | 0) & l) | (o & ~l)) +
              n[9] +
              568446438) |
            0),
          (l +=
            ((((t = (((t << 5) | (t >>> 27)) + r) | 0) & o) | (r & ~o)) +
              n[14] -
              1019803690) |
            0),
          (o +=
            ((((l = (((l << 9) | (l >>> 23)) + t) | 0) & r) | (t & ~r)) +
              n[3] -
              187363961) |
            0),
          (r +=
            ((((o = (((o << 14) | (o >>> 18)) + l) | 0) & t) | (l & ~t)) +
              n[8] +
              1163531501) |
            0),
          (t +=
            ((((r = (((r << 20) | (r >>> 12)) + o) | 0) & l) | (o & ~l)) +
              n[13] -
              1444681467) |
            0),
          (l +=
            ((((t = (((t << 5) | (t >>> 27)) + r) | 0) & o) | (r & ~o)) +
              n[2] -
              51403784) |
            0),
          (o +=
            ((((l = (((l << 9) | (l >>> 23)) + t) | 0) & r) | (t & ~r)) +
              n[7] +
              1735328473) |
            0),
          (r +=
            ((((o = (((o << 14) | (o >>> 18)) + l) | 0) & t) | (l & ~t)) +
              n[12] -
              1926607734) |
            0),
          (t +=
            (((r = (((r << 20) | (r >>> 12)) + o) | 0) ^ o ^ l) +
              n[5] -
              378558) |
            0),
          (l +=
            (((t = (((t << 4) | (t >>> 28)) + r) | 0) ^ r ^ o) +
              n[8] -
              2022574463) |
            0),
          (o +=
            (((l = (((l << 11) | (l >>> 21)) + t) | 0) ^ t ^ r) +
              n[11] +
              1839030562) |
            0),
          (r +=
            (((o = (((o << 16) | (o >>> 16)) + l) | 0) ^ l ^ t) +
              n[14] -
              35309556) |
            0),
          (t +=
            (((r = (((r << 23) | (r >>> 9)) + o) | 0) ^ o ^ l) +
              n[1] -
              1530992060) |
            0),
          (l +=
            (((t = (((t << 4) | (t >>> 28)) + r) | 0) ^ r ^ o) +
              n[4] +
              1272893353) |
            0),
          (o +=
            (((l = (((l << 11) | (l >>> 21)) + t) | 0) ^ t ^ r) +
              n[7] -
              155497632) |
            0),
          (r +=
            (((o = (((o << 16) | (o >>> 16)) + l) | 0) ^ l ^ t) +
              n[10] -
              1094730640) |
            0),
          (t +=
            (((r = (((r << 23) | (r >>> 9)) + o) | 0) ^ o ^ l) +
              n[13] +
              681279174) |
            0),
          (l +=
            (((t = (((t << 4) | (t >>> 28)) + r) | 0) ^ r ^ o) +
              n[0] -
              358537222) |
            0),
          (o +=
            (((l = (((l << 11) | (l >>> 21)) + t) | 0) ^ t ^ r) +
              n[3] -
              722521979) |
            0),
          (r +=
            (((o = (((o << 16) | (o >>> 16)) + l) | 0) ^ l ^ t) +
              n[6] +
              76029189) |
            0),
          (t +=
            (((r = (((r << 23) | (r >>> 9)) + o) | 0) ^ o ^ l) +
              n[9] -
              640364487) |
            0),
          (l +=
            (((t = (((t << 4) | (t >>> 28)) + r) | 0) ^ r ^ o) +
              n[12] -
              421815835) |
            0),
          (o +=
            (((l = (((l << 11) | (l >>> 21)) + t) | 0) ^ t ^ r) +
              n[15] +
              530742520) |
            0),
          (r +=
            (((o = (((o << 16) | (o >>> 16)) + l) | 0) ^ l ^ t) +
              n[2] -
              995338651) |
            0),
          (r = (((r << 23) | (r >>> 9)) + o) | 0),
          (t += ((o ^ (r | ~l)) + n[0] - 198630844) | 0),
          (t = (((t << 6) | (t >>> 26)) + r) | 0),
          (l += ((r ^ (t | ~o)) + n[7] + 1126891415) | 0),
          (l = (((l << 10) | (l >>> 22)) + t) | 0),
          (o += ((t ^ (l | ~r)) + n[14] - 1416354905) | 0),
          (o = (((o << 15) | (o >>> 17)) + l) | 0),
          (r += ((l ^ (o | ~t)) + n[5] - 57434055) | 0),
          (r = (((r << 21) | (r >>> 11)) + o) | 0),
          (t += ((o ^ (r | ~l)) + n[12] + 1700485571) | 0),
          (t = (((t << 6) | (t >>> 26)) + r) | 0),
          (l += ((r ^ (t | ~o)) + n[3] - 1894986606) | 0),
          (l = (((l << 10) | (l >>> 22)) + t) | 0),
          (o += ((t ^ (l | ~r)) + n[10] - 1051523) | 0),
          (o = (((o << 15) | (o >>> 17)) + l) | 0),
          (r += ((l ^ (o | ~t)) + n[1] - 2054922799) | 0),
          (r = (((r << 21) | (r >>> 11)) + o) | 0),
          (t += ((o ^ (r | ~l)) + n[8] + 1873313359) | 0),
          (t = (((t << 6) | (t >>> 26)) + r) | 0),
          (l += ((r ^ (t | ~o)) + n[15] - 30611744) | 0),
          (l = (((l << 10) | (l >>> 22)) + t) | 0),
          (o += ((t ^ (l | ~r)) + n[6] - 1560198380) | 0),
          (o = (((o << 15) | (o >>> 17)) + l) | 0),
          (r += ((l ^ (o | ~t)) + n[13] + 1309151649) | 0),
          (r = (((r << 21) | (r >>> 11)) + o) | 0),
          (t += ((o ^ (r | ~l)) + n[4] - 145523070) | 0),
          (t = (((t << 6) | (t >>> 26)) + r) | 0),
          (l += ((r ^ (t | ~o)) + n[11] - 1120210379) | 0),
          (l = (((l << 10) | (l >>> 22)) + t) | 0),
          (o += ((t ^ (l | ~r)) + n[2] + 718787259) | 0),
          (o = (((o << 15) | (o >>> 17)) + l) | 0),
          (r += ((l ^ (o | ~t)) + n[9] - 343485551) | 0),
          (r = (((r << 21) | (r >>> 11)) + o) | 0),
          (e[0] = (t + e[0]) | 0),
          (e[1] = (r + e[1]) | 0),
          (e[2] = (o + e[2]) | 0),
          (e[3] = (l + e[3]) | 0));
      }
      (new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        RegExp(
          "\uD870\uDF17|\uD83C\uDE34|\uD83C\uDE51|\uD83C\uDE36|\uD83C\uDE1A|\uD83C\uDE38|\uD83C\uDE3A|\uD83C\uDE37|\uD83C\uDE50|㊙|㊗|\uD83C\uDE35|\uD83C\uDE39|\uD83C\uDE32|\uD83C\uDD70️|\uD83C\uDD71️|\uD83C\uDD8E|\uD83C\uDD91|\uD83C\uDD7E️|\uD83C\uDD7F️|0️⃣|1️⃣|2️⃣|3️⃣|4️⃣|5️⃣|6️⃣|7️⃣|8️⃣|9️⃣|\uD83D\uDD1F",
          "g",
        ));
      var l = t(4051);
      function i(e) {
        var n;
        let t = /html5plus/i.test(e),
          l = (/Mozilla\/.*? \((.*?)\)/i.exec(e) || [])[1] || "",
          i = /iP(hone|ad|od)/i.test(l),
          a = /Android/i.test(l),
          u = /Windows NT /i.test(l),
          c = /Macintosh/i.test(l),
          s = !a && /Linux/i.test(l),
          d = {
            5.1: "XP",
            5.2: "XP",
            "6.0": "Vista",
            6.1: "7",
            6.2: "8",
            6.3: "8.1",
            10: "10",
            "10.0": "10",
          },
          f = (() => {
            var e;
            try {
              let { name: n, version: t } =
                null === (e = window.plus) || void 0 === e ? void 0 : e.os;
              if (n && t) return [n, t].filter(Boolean).join(" ");
            } catch (e) {}
            return i
              ? "iOS" +
                  l.replace(/^.*OS ([-\d_.]+).*$/i, (e, n) =>
                    " ".concat(n.replace(/_/g, ".")),
                  )
              : a
                ? "Android" + l.replace(/^.*Android ([-\d.]+).*$/i, " $1")
                : u
                  ? "Windows" +
                    l.replace(/^.*Windows NT ([-\d.]+).*$/i, (e, n) =>
                      " ".concat(d[n] || "NT" + n),
                    )
                  : c
                    ? "Mac" +
                      l.replace(/^.*Mac OS X ([-\d_.]+).*$/i, (e, n) =>
                        " ".concat(n.replace(/_/g, ".")),
                      )
                    : s
                      ? "Linux Unknown"
                      : "Other Unknown";
          })(),
          p = / MicroMessenger\//i.test(e)
            ? "MicroMessenger" +
              e.replace(/^.* MicroMessenger\/([\d.]+).*$/i, " $1")
            : t && a
              ? "Android-Webview" + e.replace(/^.*Chrome\/([\d.]+).*$/i, " $1")
              : i
                ? "iOS-Webview " + f.split(" ")[1]
                : / Firefox\//i.test(e)
                  ? "Firefox" + e.replace(/^.* Firefox\/([\d.]+).*$/i, " $1")
                  : / Edge\//i.test(e)
                    ? "Edge" + e.replace(/^.* Edge\/([\d.]+).*$/i, " $1")
                    : / Edg\//i.test(e)
                      ? "Edge" + e.replace(/^.* Edg\/([\d.]+).*$/i, " $1")
                      : c && / Version\/[\d.]+ Safari\/[\d.]+/i.test(e)
                        ? "Safari" +
                          e.replace(/^.* Version\/([\d.]+).*$/i, " $1")
                        : / Chrome\//i.test(e)
                          ? "Chrome" +
                            e.replace(/^.* Chrome\/([\d.]+).*$/i, " $1")
                          : / HeadlessChrome\//i.test(e)
                            ? "HeadlessChrome" +
                              e.replace(
                                /^.* HeadlessChrome\/([\d.]+).*$/i,
                                " $1",
                              )
                            : /Trident\/.*rv:11.0.*\) like Gecko/i.test(e)
                              ? "IE 11"
                              : / MSIE [\d.]+/i.test(e)
                                ? "IE" +
                                  e.replace(/^.* MSIE ([\d.]+).*$/i, " $1")
                                : "Other Unknown",
          g = i
            ? "iOS-Webview " + f.split(" ")[1]
            : a && /Chrome/.test(e)
              ? "Android-Webview" + e.replace(/^.*Chrome\/([\d.]+).*$/i, " $1")
              : p,
          h = (() => {
            var n, t, r;
            try {
              let { vendor: e, model: t } =
                null === (n = window.plus) || void 0 === n ? void 0 : n.device;
              return [e, t].filter(Boolean).join(" ");
            } catch (e) {}
            return /^IE/.test(p)
              ? (null === (t = /\((.*?) Trident.*?\)/.exec(e)) || void 0 === t
                  ? void 0
                  : t[1]) || "Other Unknown"
              : (null === (r = /\((.*?)\)/.exec(e)) || void 0 === r
                  ? void 0
                  : r[1]) || "Other Unknown";
          })(),
          m =
            ((n = (function (e) {
              if ("function" == typeof TextEncoder)
                return new TextEncoder().encode(e);
              let n = (e = unescape(encodeURIComponent(e))).length,
                t = new Uint8Array(n);
              for (let r = 0; r < n; r++) t[r] = e.charCodeAt(r);
              return t;
            })([e, h, f].join("#"))),
            (0, r.FY)(
              (function (e) {
                let [n, t] = (function (e) {
                  let n,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [1732584193, -271733879, -1732584194, 271733878],
                    r = e.length;
                  for (n = 64; n <= r; n += 64)
                    o(
                      t,
                      (function (e) {
                        let n = [];
                        for (let t = 0; t < 64; t += 4)
                          n[t >> 2] =
                            e[t] +
                            (e[t + 1] << 8) +
                            (e[t + 2] << 16) +
                            (e[t + 3] << 24);
                        return n;
                      })(e.slice(n - 64, n)),
                    );
                  return [
                    (e = n - 64 < r ? e.slice(n - 64) : new Uint8Array(0)),
                    t,
                  ];
                })(e);
                return (function (e, n, t) {
                  var r;
                  let l;
                  let i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    a = e.length;
                  for (l = 0; l < a; l += 1)
                    i[l >> 2] |= e[l] << ((l % 4) << 3);
                  if (((i[l >> 2] |= 128 << ((l % 4) << 3)), l > 55))
                    for (o(n, i), l = 0; l < 16; l += 1) i[l] = 0;
                  let u =
                      null !==
                        (r = /(.*?)(.{0,8})$/.exec((8 * t).toString(16))) &&
                      void 0 !== r
                        ? r
                        : [],
                    c = parseInt(u[2], 16),
                    s = parseInt(u[1], 16) || 0;
                  return (
                    (i[14] = c),
                    (i[15] = s),
                    o(n, i),
                    new Uint8Array(new Int32Array(n).buffer)
                  );
                })(n, t, e.length);
              })(n),
            ));
        return {
          ua: e,
          platform: t && i ? "ios" : t && a ? "android" : "web",
          os: f,
          browser: p,
          webview: g,
          device: h,
          hash: m,
        };
      }
      l.T && /\bHtml5Plus\b/i.test(navigator.userAgent);
    },
    210: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return function e(n) {
            if ("string" == typeof n || "number" == typeof n) return "" + n;
            let t = "";
            if (Array.isArray(n))
              for (let r = 0, o; r < n.length; r++)
                "" !== (o = e(n[r])) && (t += (t && " ") + o);
            else for (let e in n) n[e] && (t += (t && " ") + e);
            return t;
          };
        },
      });
    },
  },
]);
