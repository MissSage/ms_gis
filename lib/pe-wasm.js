function t(t2, e2) {
  for (var n2 = 0; n2 < e2.length; n2++) {
    const _2 = e2[n2];
    if (typeof _2 != "string" && !Array.isArray(_2)) {
      for (const e3 in _2)
        if (e3 !== "default" && !(e3 in t2)) {
          const n3 = Object.getOwnPropertyDescriptor(_2, e3);
          n3 && Object.defineProperty(t2, e3, n3.get ? n3 : { enumerable: true, get: () => _2[e3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }));
}
var e, n, _, r = { exports: {} };
e = r, n = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0, typeof __filename != "undefined" && (n = n || __filename), _ = function(t2) {
  var e2, _2;
  (t2 = (t2 = t2 || {}) !== void 0 ? t2 : {}).ready = new Promise(function(t3, n2) {
    e2 = t3, _2 = n2;
  });
  var r2, o2, p, i, c, a, s = Object.assign({}, t2), u = "./this.program", P = typeof window == "object", y = typeof importScripts == "function", g = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", f = "";
  function l(e3) {
    return t2.locateFile ? t2.locateFile(e3, f) : f + e3;
  }
  g ? (f = y ? require("path").dirname(f) + "/" : __dirname + "/", a = () => {
    c || (i = require("fs"), c = require("path"));
  }, r2 = function(t3, e3) {
    return a(), t3 = c.normalize(t3), i.readFileSync(t3, e3 ? void 0 : "utf8");
  }, p = (t3) => {
    var e3 = r2(t3, true);
    return e3.buffer || (e3 = new Uint8Array(e3)), e3;
  }, o2 = (t3, e3, n2) => {
    a(), t3 = c.normalize(t3), i.readFile(t3, function(t4, _3) {
      t4 ? n2(t4) : e3(_3.buffer);
    });
  }, process.argv.length > 1 && (u = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", function(t3) {
    if (!(t3 instanceof f_))
      throw t3;
  }), process.on("unhandledRejection", function(t3) {
    throw t3;
  }), t2.inspect = function() {
    return "[Emscripten Module object]";
  }) : (P || y) && (y ? f = self.location.href : typeof document != "undefined" && document.currentScript && (f = document.currentScript.src), n && (f = n), f = f.indexOf("blob:") !== 0 ? f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", r2 = (t3) => {
    var e3 = new XMLHttpRequest();
    return e3.open("GET", t3, false), e3.send(null), e3.responseText;
  }, y && (p = (t3) => {
    var e3 = new XMLHttpRequest();
    return e3.open("GET", t3, false), e3.responseType = "arraybuffer", e3.send(null), new Uint8Array(e3.response);
  }), o2 = (t3, e3, n2) => {
    var _3 = new XMLHttpRequest();
    _3.open("GET", t3, true), _3.responseType = "arraybuffer", _3.onload = () => {
      _3.status == 200 || _3.status == 0 && _3.response ? e3(_3.response) : n2();
    }, _3.onerror = n2, _3.send(null);
  });
  var m, d, E = t2.print || console.log.bind(console), b = t2.printErr || console.warn.bind(console);
  Object.assign(t2, s), s = null, t2.arguments && t2.arguments, t2.thisProgram && (u = t2.thisProgram), t2.quit && t2.quit, t2.wasmBinary && (m = t2.wasmBinary), t2.noExitRuntime, typeof WebAssembly != "object" && Q("no native wasm support detected");
  var O = false;
  function T(t3, e3) {
    t3 || Q(e3);
  }
  var S, N, h, M, v, D, R, A, G, C = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
  function I(t3, e3, n2) {
    for (var _3 = e3 + n2, r3 = e3; t3[r3] && !(r3 >= _3); )
      ++r3;
    if (r3 - e3 > 16 && t3.buffer && C)
      return C.decode(t3.subarray(e3, r3));
    for (var o3 = ""; e3 < r3; ) {
      var p2 = t3[e3++];
      if (128 & p2) {
        var i2 = 63 & t3[e3++];
        if ((224 & p2) != 192) {
          var c2 = 63 & t3[e3++];
          if ((p2 = (240 & p2) == 224 ? (15 & p2) << 12 | i2 << 6 | c2 : (7 & p2) << 18 | i2 << 12 | c2 << 6 | 63 & t3[e3++]) < 65536)
            o3 += String.fromCharCode(p2);
          else {
            var a2 = p2 - 65536;
            o3 += String.fromCharCode(55296 | a2 >> 10, 56320 | 1023 & a2);
          }
        } else
          o3 += String.fromCharCode((31 & p2) << 6 | i2);
      } else
        o3 += String.fromCharCode(p2);
    }
    return o3;
  }
  function j(t3, e3) {
    return t3 ? I(h, t3, e3) : "";
  }
  function L(t3, e3, n2, _3) {
    if (!(_3 > 0))
      return 0;
    for (var r3 = n2, o3 = n2 + _3 - 1, p2 = 0; p2 < t3.length; ++p2) {
      var i2 = t3.charCodeAt(p2);
      if (i2 >= 55296 && i2 <= 57343 && (i2 = 65536 + ((1023 & i2) << 10) | 1023 & t3.charCodeAt(++p2)), i2 <= 127) {
        if (n2 >= o3)
          break;
        e3[n2++] = i2;
      } else if (i2 <= 2047) {
        if (n2 + 1 >= o3)
          break;
        e3[n2++] = 192 | i2 >> 6, e3[n2++] = 128 | 63 & i2;
      } else if (i2 <= 65535) {
        if (n2 + 2 >= o3)
          break;
        e3[n2++] = 224 | i2 >> 12, e3[n2++] = 128 | i2 >> 6 & 63, e3[n2++] = 128 | 63 & i2;
      } else {
        if (n2 + 3 >= o3)
          break;
        e3[n2++] = 240 | i2 >> 18, e3[n2++] = 128 | i2 >> 12 & 63, e3[n2++] = 128 | i2 >> 6 & 63, e3[n2++] = 128 | 63 & i2;
      }
    }
    return e3[n2] = 0, n2 - r3;
  }
  function U(t3) {
    for (var e3 = 0, n2 = 0; n2 < t3.length; ++n2) {
      var _3 = t3.charCodeAt(n2);
      _3 >= 55296 && _3 <= 57343 && (_3 = 65536 + ((1023 & _3) << 10) | 1023 & t3.charCodeAt(++n2)), _3 <= 127 ? ++e3 : e3 += _3 <= 2047 ? 2 : _3 <= 65535 ? 3 : 4;
    }
    return e3;
  }
  function Y(t3) {
    var e3 = U(t3) + 1, n2 = g_(e3);
    return n2 && L(t3, N, n2, e3), n2;
  }
  function x(t3, e3, n2) {
    for (var _3 = 0; _3 < t3.length; ++_3)
      N[e3++ >> 0] = t3.charCodeAt(_3);
    n2 || (N[e3 >> 0] = 0);
  }
  function F(e3) {
    S = e3, t2.HEAP8 = N = new Int8Array(e3), t2.HEAP16 = M = new Int16Array(e3), t2.HEAP32 = v = new Int32Array(e3), t2.HEAPU8 = h = new Uint8Array(e3), t2.HEAPU16 = new Uint16Array(e3), t2.HEAPU32 = D = new Uint32Array(e3), t2.HEAPF32 = R = new Float32Array(e3), t2.HEAPF64 = A = new Float64Array(e3);
  }
  t2.INITIAL_MEMORY;
  var w = [], H = [], X = [];
  function z() {
    if (t2.preRun)
      for (typeof t2.preRun == "function" && (t2.preRun = [t2.preRun]); t2.preRun.length; )
        W(t2.preRun.shift());
    it(w);
  }
  function Z() {
    it(H);
  }
  function B() {
    if (t2.postRun)
      for (typeof t2.postRun == "function" && (t2.postRun = [t2.postRun]); t2.postRun.length; )
        q(t2.postRun.shift());
    it(X);
  }
  function W(t3) {
    w.unshift(t3);
  }
  function V(t3) {
    H.unshift(t3);
  }
  function q(t3) {
    X.unshift(t3);
  }
  var k = 0, J = null;
  function K(e3) {
    k++, t2.monitorRunDependencies && t2.monitorRunDependencies(k);
  }
  function $(e3) {
    if (k--, t2.monitorRunDependencies && t2.monitorRunDependencies(k), k == 0 && J) {
      var n2 = J;
      J = null, n2();
    }
  }
  function Q(e3) {
    t2.onAbort && t2.onAbort(e3), b(e3 = "Aborted(" + e3 + ")"), O = true, e3 += ". Build with -sASSERTIONS for more info.";
    var n2 = new WebAssembly.RuntimeError(e3);
    throw _2(n2), n2;
  }
  var tt, et = "data:application/octet-stream;base64,";
  function nt(t3) {
    return t3.startsWith(et);
  }
  function _t(t3) {
    return t3.startsWith("file://");
  }
  function rt(t3) {
    try {
      if (t3 == tt && m)
        return new Uint8Array(m);
      if (p)
        return p(t3);
      throw "both async and sync fetching of the wasm failed";
    } catch (b2) {
      Q(b2);
    }
  }
  function ot() {
    if (!m && (P || y)) {
      if (typeof fetch == "function" && !_t(tt))
        return fetch(tt, { credentials: "same-origin" }).then(function(t3) {
          if (!t3.ok)
            throw "failed to load wasm binary file at '" + tt + "'";
          return t3.arrayBuffer();
        }).catch(function() {
          return rt(tt);
        });
      if (o2)
        return new Promise(function(t3, e3) {
          o2(tt, function(e4) {
            t3(new Uint8Array(e4));
          }, e3);
        });
    }
    return Promise.resolve().then(function() {
      return rt(tt);
    });
  }
  function pt() {
    var e3 = { a: Ft };
    function n2(e4, n3) {
      var _3 = e4.exports;
      t2.asm = _3, F((d = t2.asm.t).buffer), G = t2.asm.Yb, V(t2.asm.u), $();
    }
    function r3(t3) {
      n2(t3.instance);
    }
    function o3(t3) {
      return ot().then(function(t4) {
        return WebAssembly.instantiate(t4, e3);
      }).then(function(t4) {
        return t4;
      }).then(t3, function(t4) {
        b("failed to asynchronously prepare wasm: " + t4), Q(t4);
      });
    }
    function p2() {
      return m || typeof WebAssembly.instantiateStreaming != "function" || nt(tt) || _t(tt) || g || typeof fetch != "function" ? o3(r3) : fetch(tt, { credentials: "same-origin" }).then(function(t3) {
        return WebAssembly.instantiateStreaming(t3, e3).then(r3, function(t4) {
          return b("wasm streaming compile failed: " + t4), b("falling back to ArrayBuffer instantiation"), o3(r3);
        });
      });
    }
    if (K(), t2.instantiateWasm)
      try {
        return t2.instantiateWasm(e3, n2);
      } catch (i2) {
        return b("Module.instantiateWasm callback failed with error: " + i2), false;
      }
    return p2().catch(_2), {};
  }
  function it(e3) {
    for (; e3.length > 0; ) {
      var n2 = e3.shift();
      if (typeof n2 != "function") {
        var _3 = n2.func;
        typeof _3 == "number" ? n2.arg === void 0 ? st(_3)() : st(_3)(n2.arg) : _3(n2.arg === void 0 ? null : n2.arg);
      } else
        n2(t2);
    }
  }
  function ct(t3, e3 = "i8") {
    switch (e3.endsWith("*") && (e3 = "i32"), e3) {
      case "i1":
      case "i8":
        return N[t3 >> 0];
      case "i16":
        return M[t3 >> 1];
      case "i32":
      case "i64":
        return v[t3 >> 2];
      case "float":
        return R[t3 >> 2];
      case "double":
        return Number(A[t3 >> 3]);
      default:
        Q("invalid type for getValue: " + e3);
    }
    return null;
  }
  nt(tt = "pe-wasm.wasm") || (tt = l(tt));
  var at = [];
  function st(t3) {
    var e3 = at[t3];
    return e3 || (t3 >= at.length && (at.length = t3 + 1), at[t3] = e3 = G.get(t3)), e3;
  }
  function ut(t3, e3, n2) {
    return 0;
  }
  function Pt(t3, e3, n2) {
  }
  function yt(t3, e3, n2) {
    return 0;
  }
  function gt(t3, e3, n2, _3) {
  }
  function ft(t3) {
  }
  function lt(t3, e3) {
  }
  function mt(t3, e3, n2) {
  }
  function dt() {
    return Date.now();
  }
  function Et(t3, e3) {
    var n2 = new Date(1e3 * v[t3 >> 2]);
    v[e3 >> 2] = n2.getSeconds(), v[e3 + 4 >> 2] = n2.getMinutes(), v[e3 + 8 >> 2] = n2.getHours(), v[e3 + 12 >> 2] = n2.getDate(), v[e3 + 16 >> 2] = n2.getMonth(), v[e3 + 20 >> 2] = n2.getFullYear() - 1900, v[e3 + 24 >> 2] = n2.getDay();
    var _3 = new Date(n2.getFullYear(), 0, 1), r3 = (n2.getTime() - _3.getTime()) / 864e5 | 0;
    v[e3 + 28 >> 2] = r3, v[e3 + 36 >> 2] = -60 * n2.getTimezoneOffset();
    var o3 = new Date(n2.getFullYear(), 6, 1).getTimezoneOffset(), p2 = _3.getTimezoneOffset(), i2 = 0 | (o3 != p2 && n2.getTimezoneOffset() == Math.min(p2, o3));
    v[e3 + 32 >> 2] = i2;
  }
  function bt(t3, e3, n2) {
    var _3 = new Date().getFullYear(), r3 = new Date(_3, 0, 1), o3 = new Date(_3, 6, 1), p2 = r3.getTimezoneOffset(), i2 = o3.getTimezoneOffset(), c2 = Math.max(p2, i2);
    function a2(t4) {
      var e4 = t4.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      return e4 ? e4[1] : "GMT";
    }
    v[t3 >> 2] = 60 * c2, v[e3 >> 2] = Number(p2 != i2);
    var s2 = a2(r3), u2 = a2(o3), P2 = Y(s2), y2 = Y(u2);
    i2 < p2 ? (D[n2 >> 2] = P2, D[n2 + 4 >> 2] = y2) : (D[n2 >> 2] = y2, D[n2 + 4 >> 2] = P2);
  }
  function Ot(t3, e3, n2) {
    Ot.called || (Ot.called = true, bt(t3, e3, n2));
  }
  function Tt() {
    Q("");
  }
  function St(t3, e3, n2) {
    h.copyWithin(t3, e3, e3 + n2);
  }
  function Nt() {
    return 2147483648;
  }
  function ht(t3) {
    try {
      return d.grow(t3 - S.byteLength + 65535 >>> 16), F(d.buffer), 1;
    } catch (e3) {
    }
  }
  function Mt(t3) {
    var e3 = h.length;
    t3 >>>= 0;
    var n2 = Nt();
    if (t3 > n2)
      return false;
    let _3 = (t4, e4) => t4 + (e4 - t4 % e4) % e4;
    for (var r3 = 1; r3 <= 4; r3 *= 2) {
      var o3 = e3 * (1 + 0.2 / r3);
      if (o3 = Math.min(o3, t3 + 100663296), ht(Math.min(n2, _3(Math.max(t3, o3), 65536))))
        return true;
    }
    return false;
  }
  var vt = {};
  function Dt() {
    return u || "./this.program";
  }
  function Rt() {
    if (!Rt.strings) {
      var t3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Dt() };
      for (var e3 in vt)
        vt[e3] === void 0 ? delete t3[e3] : t3[e3] = vt[e3];
      var n2 = [];
      for (var e3 in t3)
        n2.push(e3 + "=" + t3[e3]);
      Rt.strings = n2;
    }
    return Rt.strings;
  }
  function At(t3, e3) {
    var n2 = 0;
    return Rt().forEach(function(_3, r3) {
      var o3 = e3 + n2;
      D[t3 + 4 * r3 >> 2] = o3, x(_3, o3), n2 += _3.length + 1;
    }), 0;
  }
  function Gt(t3, e3) {
    var n2 = Rt();
    D[t3 >> 2] = n2.length;
    var _3 = 0;
    return n2.forEach(function(t4) {
      _3 += t4.length + 1;
    }), D[e3 >> 2] = _3, 0;
  }
  function Ct(t3) {
    return 52;
  }
  function It(t3, e3, n2, _3) {
    return 52;
  }
  function jt(t3, e3, n2, _3, r3) {
    return 70;
  }
  var Lt = [null, [], []];
  function Ut(t3, e3) {
    var n2 = Lt[t3];
    e3 === 0 || e3 === 10 ? ((t3 === 1 ? E : b)(I(n2, 0)), n2.length = 0) : n2.push(e3);
  }
  function Yt(t3, e3, n2, _3) {
    for (var r3 = 0, o3 = 0; o3 < n2; o3++) {
      var p2 = D[e3 >> 2], i2 = D[e3 + 4 >> 2];
      e3 += 8;
      for (var c2 = 0; c2 < i2; c2++)
        Ut(t3, h[p2 + c2]);
      r3 += i2;
    }
    return D[_3 >> 2] = r3, 0;
  }
  function xt(t3, e3, n2) {
    var _3 = n2 > 0 ? n2 : U(t3) + 1, r3 = new Array(_3), o3 = L(t3, r3, 0, r3.length);
    return e3 && (r3.length = o3), r3;
  }
  var Ft = { c: ut, p: Pt, f: yt, d: gt, n: ft, m: lt, o: mt, g: dt, h: Et, i: Ot, k: Tt, s: St, l: Mt, q: At, r: Gt, a: Ct, e: It, j: jt, b: Yt };
  pt(), t2.___wasm_call_ctors = function() {
    return (t2.___wasm_call_ctors = t2.asm.u).apply(null, arguments);
  };
  var wt = t2._emscripten_bind_PeObject_getCode_0 = function() {
    return (wt = t2._emscripten_bind_PeObject_getCode_0 = t2.asm.v).apply(null, arguments);
  }, Ht = t2._emscripten_bind_PeObject_getName_1 = function() {
    return (Ht = t2._emscripten_bind_PeObject_getName_1 = t2.asm.w).apply(null, arguments);
  }, Xt = t2._emscripten_bind_PeObject_getType_0 = function() {
    return (Xt = t2._emscripten_bind_PeObject_getType_0 = t2.asm.x).apply(null, arguments);
  }, zt = t2._emscripten_bind_PeCoordsys_getCode_0 = function() {
    return (zt = t2._emscripten_bind_PeCoordsys_getCode_0 = t2.asm.y).apply(null, arguments);
  }, Zt = t2._emscripten_bind_PeCoordsys_getName_1 = function() {
    return (Zt = t2._emscripten_bind_PeCoordsys_getName_1 = t2.asm.z).apply(null, arguments);
  }, Bt = t2._emscripten_bind_PeCoordsys_getType_0 = function() {
    return (Bt = t2._emscripten_bind_PeCoordsys_getType_0 = t2.asm.A).apply(null, arguments);
  }, Wt = t2._emscripten_bind_VoidPtr___destroy___0 = function() {
    return (Wt = t2._emscripten_bind_VoidPtr___destroy___0 = t2.asm.B).apply(null, arguments);
  }, Vt = t2._emscripten_bind_PeDatum_getSpheroid_0 = function() {
    return (Vt = t2._emscripten_bind_PeDatum_getSpheroid_0 = t2.asm.C).apply(null, arguments);
  }, qt = t2._emscripten_bind_PeDatum_getCode_0 = function() {
    return (qt = t2._emscripten_bind_PeDatum_getCode_0 = t2.asm.D).apply(null, arguments);
  }, kt = t2._emscripten_bind_PeDatum_getName_1 = function() {
    return (kt = t2._emscripten_bind_PeDatum_getName_1 = t2.asm.E).apply(null, arguments);
  }, Jt = t2._emscripten_bind_PeDatum_getType_0 = function() {
    return (Jt = t2._emscripten_bind_PeDatum_getType_0 = t2.asm.F).apply(null, arguments);
  }, Kt = t2._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = function() {
    return (Kt = t2._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = t2.asm.G).apply(null, arguments);
  }, $t = t2._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = function() {
    return ($t = t2._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = t2.asm.H).apply(null, arguments);
  }, Qt = t2._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = function() {
    return (Qt = t2._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = t2.asm.I).apply(null, arguments);
  }, te = t2._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = function() {
    return (te = t2._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = t2.asm.J).apply(null, arguments);
  }, ee = t2._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = function() {
    return (ee = t2._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = t2.asm.K).apply(null, arguments);
  }, ne = t2._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = function() {
    return (ne = t2._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = t2.asm.L).apply(null, arguments);
  }, _e = t2._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = function() {
    return (_e = t2._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = t2.asm.M).apply(null, arguments);
  }, re = t2._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = function() {
    return (re = t2._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = t2.asm.N).apply(null, arguments);
  }, oe = t2._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = function() {
    return (oe = t2._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = t2.asm.O).apply(null, arguments);
  }, pe = t2._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = function() {
    return (pe = t2._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = t2.asm.P).apply(null, arguments);
  }, ie = t2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = function() {
    return (ie = t2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = t2.asm.Q).apply(null, arguments);
  }, ce = t2._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = function() {
    return (ce = t2._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = t2.asm.R).apply(null, arguments);
  }, ae = t2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = function() {
    return (ae = t2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = t2.asm.S).apply(null, arguments);
  }, se = t2._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = function() {
    return (se = t2._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = t2.asm.T).apply(null, arguments);
  }, ue = t2._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = function() {
    return (ue = t2._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = t2.asm.U).apply(null, arguments);
  }, Pe = t2._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = function() {
    return (Pe = t2._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = t2.asm.V).apply(null, arguments);
  }, ye = t2._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = function() {
    return (ye = t2._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = t2.asm.W).apply(null, arguments);
  }, ge = t2._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = function() {
    return (ge = t2._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = t2.asm.X).apply(null, arguments);
  }, fe = t2._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = function() {
    return (fe = t2._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = t2.asm.Y).apply(null, arguments);
  }, le = t2._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = function() {
    return (le = t2._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = t2.asm.Z).apply(null, arguments);
  }, me = t2._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = function() {
    return (me = t2._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = t2.asm._).apply(null, arguments);
  }, de = t2._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = function() {
    return (de = t2._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = t2.asm.$).apply(null, arguments);
  }, Ee = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = function() {
    return (Ee = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = t2.asm.aa).apply(null, arguments);
  }, be = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = function() {
    return (be = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = t2.asm.ba).apply(null, arguments);
  }, Oe = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = function() {
    return (Oe = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = t2.asm.ca).apply(null, arguments);
  }, Te = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = function() {
    return (Te = t2._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = t2.asm.da).apply(null, arguments);
  }, Se = t2._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = function() {
    return (Se = t2._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = t2.asm.ea).apply(null, arguments);
  }, Ne = t2._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = function() {
    return (Ne = t2._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = t2.asm.fa).apply(null, arguments);
  }, he = t2._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = function() {
    return (he = t2._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = t2.asm.ga).apply(null, arguments);
  }, Me = t2._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = function() {
    return (Me = t2._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = t2.asm.ha).apply(null, arguments);
  }, ve = t2._emscripten_bind_PeFactory_initialize_1 = function() {
    return (ve = t2._emscripten_bind_PeFactory_initialize_1 = t2.asm.ia).apply(null, arguments);
  }, De = t2._emscripten_bind_PeFactory_factoryByType_2 = function() {
    return (De = t2._emscripten_bind_PeFactory_factoryByType_2 = t2.asm.ja).apply(null, arguments);
  }, Re = t2._emscripten_bind_PeFactory_fromString_2 = function() {
    return (Re = t2._emscripten_bind_PeFactory_fromString_2 = t2.asm.ka).apply(null, arguments);
  }, Ae = t2._emscripten_bind_PeFactory_getCode_1 = function() {
    return (Ae = t2._emscripten_bind_PeFactory_getCode_1 = t2.asm.la).apply(null, arguments);
  }, Ge = t2._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = function() {
    return (Ge = t2._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = t2.asm.ma).apply(null, arguments);
  }, Ce = t2._emscripten_bind_PeGCSExtent_getLLon_0 = function() {
    return (Ce = t2._emscripten_bind_PeGCSExtent_getLLon_0 = t2.asm.na).apply(null, arguments);
  }, Ie = t2._emscripten_bind_PeGCSExtent_getSLat_0 = function() {
    return (Ie = t2._emscripten_bind_PeGCSExtent_getSLat_0 = t2.asm.oa).apply(null, arguments);
  }, je = t2._emscripten_bind_PeGCSExtent_getRLon_0 = function() {
    return (je = t2._emscripten_bind_PeGCSExtent_getRLon_0 = t2.asm.pa).apply(null, arguments);
  }, Le = t2._emscripten_bind_PeGCSExtent_getNLat_0 = function() {
    return (Le = t2._emscripten_bind_PeGCSExtent_getNLat_0 = t2.asm.qa).apply(null, arguments);
  }, Ue = t2._emscripten_bind_PeGCSExtent___destroy___0 = function() {
    return (Ue = t2._emscripten_bind_PeGCSExtent___destroy___0 = t2.asm.ra).apply(null, arguments);
  }, Ye = t2._emscripten_bind_PeGeogcs_getDatum_0 = function() {
    return (Ye = t2._emscripten_bind_PeGeogcs_getDatum_0 = t2.asm.sa).apply(null, arguments);
  }, xe = t2._emscripten_bind_PeGeogcs_getPrimem_0 = function() {
    return (xe = t2._emscripten_bind_PeGeogcs_getPrimem_0 = t2.asm.ta).apply(null, arguments);
  }, Fe = t2._emscripten_bind_PeGeogcs_getUnit_0 = function() {
    return (Fe = t2._emscripten_bind_PeGeogcs_getUnit_0 = t2.asm.ua).apply(null, arguments);
  }, we = t2._emscripten_bind_PeGeogcs_getCode_0 = function() {
    return (we = t2._emscripten_bind_PeGeogcs_getCode_0 = t2.asm.va).apply(null, arguments);
  }, He = t2._emscripten_bind_PeGeogcs_getName_1 = function() {
    return (He = t2._emscripten_bind_PeGeogcs_getName_1 = t2.asm.wa).apply(null, arguments);
  }, Xe = t2._emscripten_bind_PeGeogcs_getType_0 = function() {
    return (Xe = t2._emscripten_bind_PeGeogcs_getType_0 = t2.asm.xa).apply(null, arguments);
  }, ze = t2._emscripten_bind_PeGeogtran_isEqual_1 = function() {
    return (ze = t2._emscripten_bind_PeGeogtran_isEqual_1 = t2.asm.ya).apply(null, arguments);
  }, Ze = t2._emscripten_bind_PeGeogtran_getGeogcs1_0 = function() {
    return (Ze = t2._emscripten_bind_PeGeogtran_getGeogcs1_0 = t2.asm.za).apply(null, arguments);
  }, Be = t2._emscripten_bind_PeGeogtran_getGeogcs2_0 = function() {
    return (Be = t2._emscripten_bind_PeGeogtran_getGeogcs2_0 = t2.asm.Aa).apply(null, arguments);
  }, We = t2._emscripten_bind_PeGeogtran_getParameters_0 = function() {
    return (We = t2._emscripten_bind_PeGeogtran_getParameters_0 = t2.asm.Ba).apply(null, arguments);
  }, Ve = t2._emscripten_bind_PeGeogtran_loadConstants_0 = function() {
    return (Ve = t2._emscripten_bind_PeGeogtran_loadConstants_0 = t2.asm.Ca).apply(null, arguments);
  }, qe = t2._emscripten_bind_PeGeogtran_getCode_0 = function() {
    return (qe = t2._emscripten_bind_PeGeogtran_getCode_0 = t2.asm.Da).apply(null, arguments);
  }, ke = t2._emscripten_bind_PeGeogtran_getName_1 = function() {
    return (ke = t2._emscripten_bind_PeGeogtran_getName_1 = t2.asm.Ea).apply(null, arguments);
  }, Je = t2._emscripten_bind_PeGeogtran_getType_0 = function() {
    return (Je = t2._emscripten_bind_PeGeogtran_getType_0 = t2.asm.Fa).apply(null, arguments);
  }, Ke = t2._emscripten_bind_PeGTlistExtended_getGTlist_6 = function() {
    return (Ke = t2._emscripten_bind_PeGTlistExtended_getGTlist_6 = t2.asm.Ga).apply(null, arguments);
  }, $e = t2._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = function() {
    return ($e = t2._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = t2.asm.Ha).apply(null, arguments);
  }, Qe = t2._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = function() {
    return (Qe = t2._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = t2.asm.Ia).apply(null, arguments);
  }, tn = t2._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = function() {
    return (tn = t2._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = t2.asm.Ja).apply(null, arguments);
  }, en = t2._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = function() {
    return (en = t2._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = t2.asm.Ka).apply(null, arguments);
  }, nn = t2._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = function() {
    return (nn = t2._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = t2.asm.La).apply(null, arguments);
  }, _n = t2._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = function() {
    return (_n = t2._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = t2.asm.Ma).apply(null, arguments);
  }, rn = t2._emscripten_bind_PeHorizon_getNump_0 = function() {
    return (rn = t2._emscripten_bind_PeHorizon_getNump_0 = t2.asm.Na).apply(null, arguments);
  }, on = t2._emscripten_bind_PeHorizon_getKind_0 = function() {
    return (on = t2._emscripten_bind_PeHorizon_getKind_0 = t2.asm.Oa).apply(null, arguments);
  }, pn = t2._emscripten_bind_PeHorizon_getInclusive_0 = function() {
    return (pn = t2._emscripten_bind_PeHorizon_getInclusive_0 = t2.asm.Pa).apply(null, arguments);
  }, cn = t2._emscripten_bind_PeHorizon_getSize_0 = function() {
    return (cn = t2._emscripten_bind_PeHorizon_getSize_0 = t2.asm.Qa).apply(null, arguments);
  }, an = t2._emscripten_bind_PeHorizon_getCoord_0 = function() {
    return (an = t2._emscripten_bind_PeHorizon_getCoord_0 = t2.asm.Ra).apply(null, arguments);
  }, sn = t2._emscripten_bind_PeInteger_PeInteger_1 = function() {
    return (sn = t2._emscripten_bind_PeInteger_PeInteger_1 = t2.asm.Sa).apply(null, arguments);
  }, un = t2._emscripten_bind_PeInteger_get_val_0 = function() {
    return (un = t2._emscripten_bind_PeInteger_get_val_0 = t2.asm.Ta).apply(null, arguments);
  }, Pn = t2._emscripten_bind_PeInteger_set_val_1 = function() {
    return (Pn = t2._emscripten_bind_PeInteger_set_val_1 = t2.asm.Ua).apply(null, arguments);
  }, yn = t2._emscripten_bind_PeInteger___destroy___0 = function() {
    return (yn = t2._emscripten_bind_PeInteger___destroy___0 = t2.asm.Va).apply(null, arguments);
  }, gn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = function() {
    return (gn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = t2.asm.Wa).apply(null, arguments);
  }, fn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = function() {
    return (fn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = t2.asm.Xa).apply(null, arguments);
  }, ln = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = function() {
    return (ln = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = t2.asm.Ya).apply(null, arguments);
  }, mn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = function() {
    return (mn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = t2.asm.Za).apply(null, arguments);
  }, dn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = function() {
    return (dn = t2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = t2.asm._a).apply(null, arguments);
  }, En = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = function() {
    return (En = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = t2.asm.$a).apply(null, arguments);
  }, bn = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = function() {
    return (bn = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = t2.asm.ab).apply(null, arguments);
  }, On = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = function() {
    return (On = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = t2.asm.bb).apply(null, arguments);
  }, Tn = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = function() {
    return (Tn = t2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = t2.asm.cb).apply(null, arguments);
  }, Sn = t2._emscripten_bind_PeParameter_getValue_0 = function() {
    return (Sn = t2._emscripten_bind_PeParameter_getValue_0 = t2.asm.db).apply(null, arguments);
  }, Nn = t2._emscripten_bind_PeParameter_getCode_0 = function() {
    return (Nn = t2._emscripten_bind_PeParameter_getCode_0 = t2.asm.eb).apply(null, arguments);
  }, hn = t2._emscripten_bind_PeParameter_getName_1 = function() {
    return (hn = t2._emscripten_bind_PeParameter_getName_1 = t2.asm.fb).apply(null, arguments);
  }, Mn = t2._emscripten_bind_PeParameter_getType_0 = function() {
    return (Mn = t2._emscripten_bind_PeParameter_getType_0 = t2.asm.gb).apply(null, arguments);
  }, vn = t2._emscripten_bind_PePCSInfo_getCentralMeridian_0 = function() {
    return (vn = t2._emscripten_bind_PePCSInfo_getCentralMeridian_0 = t2.asm.hb).apply(null, arguments);
  }, Dn = t2._emscripten_bind_PePCSInfo_getDomainMinx_0 = function() {
    return (Dn = t2._emscripten_bind_PePCSInfo_getDomainMinx_0 = t2.asm.ib).apply(null, arguments);
  }, Rn = t2._emscripten_bind_PePCSInfo_getDomainMiny_0 = function() {
    return (Rn = t2._emscripten_bind_PePCSInfo_getDomainMiny_0 = t2.asm.jb).apply(null, arguments);
  }, An = t2._emscripten_bind_PePCSInfo_getDomainMaxx_0 = function() {
    return (An = t2._emscripten_bind_PePCSInfo_getDomainMaxx_0 = t2.asm.kb).apply(null, arguments);
  }, Gn = t2._emscripten_bind_PePCSInfo_getDomainMaxy_0 = function() {
    return (Gn = t2._emscripten_bind_PePCSInfo_getDomainMaxy_0 = t2.asm.lb).apply(null, arguments);
  }, Cn = t2._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = function() {
    return (Cn = t2._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = t2.asm.mb).apply(null, arguments);
  }, In = t2._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = function() {
    return (In = t2._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = t2.asm.nb).apply(null, arguments);
  }, jn = t2._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = function() {
    return (jn = t2._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = t2.asm.ob).apply(null, arguments);
  }, Ln = t2._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = function() {
    return (Ln = t2._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = t2.asm.pb).apply(null, arguments);
  }, Un = t2._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = function() {
    return (Un = t2._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = t2.asm.qb).apply(null, arguments);
  }, Yn = t2._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = function() {
    return (Yn = t2._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = t2.asm.rb).apply(null, arguments);
  }, xn = t2._emscripten_bind_PePCSInfo_isPannableRectangle_0 = function() {
    return (xn = t2._emscripten_bind_PePCSInfo_isPannableRectangle_0 = t2.asm.sb).apply(null, arguments);
  }, Fn = t2._emscripten_bind_PePCSInfo_generate_2 = function() {
    return (Fn = t2._emscripten_bind_PePCSInfo_generate_2 = t2.asm.tb).apply(null, arguments);
  }, wn = t2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = function() {
    return (wn = t2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = t2.asm.ub).apply(null, arguments);
  }, Hn = t2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = function() {
    return (Hn = t2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = t2.asm.vb).apply(null, arguments);
  }, Xn = t2._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = function() {
    return (Xn = t2._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = t2.asm.wb).apply(null, arguments);
  }, zn = t2._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = function() {
    return (zn = t2._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = t2.asm.xb).apply(null, arguments);
  }, Zn = t2._emscripten_bind_PePrimem_getLongitude_0 = function() {
    return (Zn = t2._emscripten_bind_PePrimem_getLongitude_0 = t2.asm.yb).apply(null, arguments);
  }, Bn = t2._emscripten_bind_PePrimem_getCode_0 = function() {
    return (Bn = t2._emscripten_bind_PePrimem_getCode_0 = t2.asm.zb).apply(null, arguments);
  }, Wn = t2._emscripten_bind_PePrimem_getName_1 = function() {
    return (Wn = t2._emscripten_bind_PePrimem_getName_1 = t2.asm.Ab).apply(null, arguments);
  }, Vn = t2._emscripten_bind_PePrimem_getType_0 = function() {
    return (Vn = t2._emscripten_bind_PePrimem_getType_0 = t2.asm.Bb).apply(null, arguments);
  }, qn = t2._emscripten_bind_PeProjcs_getGeogcs_0 = function() {
    return (qn = t2._emscripten_bind_PeProjcs_getGeogcs_0 = t2.asm.Cb).apply(null, arguments);
  }, kn = t2._emscripten_bind_PeProjcs_getParameters_0 = function() {
    return (kn = t2._emscripten_bind_PeProjcs_getParameters_0 = t2.asm.Db).apply(null, arguments);
  }, Jn = t2._emscripten_bind_PeProjcs_getUnit_0 = function() {
    return (Jn = t2._emscripten_bind_PeProjcs_getUnit_0 = t2.asm.Eb).apply(null, arguments);
  }, Kn = t2._emscripten_bind_PeProjcs_loadConstants_0 = function() {
    return (Kn = t2._emscripten_bind_PeProjcs_loadConstants_0 = t2.asm.Fb).apply(null, arguments);
  }, $n = t2._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = function() {
    return ($n = t2._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = t2.asm.Gb).apply(null, arguments);
  }, Qn = t2._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = function() {
    return (Qn = t2._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = t2.asm.Hb).apply(null, arguments);
  }, t_ = t2._emscripten_bind_PeProjcs_getCode_0 = function() {
    return (t_ = t2._emscripten_bind_PeProjcs_getCode_0 = t2.asm.Ib).apply(null, arguments);
  }, e_ = t2._emscripten_bind_PeProjcs_getName_1 = function() {
    return (e_ = t2._emscripten_bind_PeProjcs_getName_1 = t2.asm.Jb).apply(null, arguments);
  }, n_ = t2._emscripten_bind_PeProjcs_getType_0 = function() {
    return (n_ = t2._emscripten_bind_PeProjcs_getType_0 = t2.asm.Kb).apply(null, arguments);
  }, __ = t2._emscripten_bind_PeSpheroid_getAxis_0 = function() {
    return (__ = t2._emscripten_bind_PeSpheroid_getAxis_0 = t2.asm.Lb).apply(null, arguments);
  }, r_ = t2._emscripten_bind_PeSpheroid_getFlattening_0 = function() {
    return (r_ = t2._emscripten_bind_PeSpheroid_getFlattening_0 = t2.asm.Mb).apply(null, arguments);
  }, o_ = t2._emscripten_bind_PeSpheroid_getCode_0 = function() {
    return (o_ = t2._emscripten_bind_PeSpheroid_getCode_0 = t2.asm.Nb).apply(null, arguments);
  }, p_ = t2._emscripten_bind_PeSpheroid_getName_1 = function() {
    return (p_ = t2._emscripten_bind_PeSpheroid_getName_1 = t2.asm.Ob).apply(null, arguments);
  }, i_ = t2._emscripten_bind_PeSpheroid_getType_0 = function() {
    return (i_ = t2._emscripten_bind_PeSpheroid_getType_0 = t2.asm.Pb).apply(null, arguments);
  }, c_ = t2._emscripten_bind_PeUnit_getUnitFactor_0 = function() {
    return (c_ = t2._emscripten_bind_PeUnit_getUnitFactor_0 = t2.asm.Qb).apply(null, arguments);
  }, a_ = t2._emscripten_bind_PeUnit_getCode_0 = function() {
    return (a_ = t2._emscripten_bind_PeUnit_getCode_0 = t2.asm.Rb).apply(null, arguments);
  }, s_ = t2._emscripten_bind_PeUnit_getName_1 = function() {
    return (s_ = t2._emscripten_bind_PeUnit_getName_1 = t2.asm.Sb).apply(null, arguments);
  }, u_ = t2._emscripten_bind_PeUnit_getType_0 = function() {
    return (u_ = t2._emscripten_bind_PeUnit_getType_0 = t2.asm.Tb).apply(null, arguments);
  }, P_ = t2._emscripten_bind_PeVersion_version_string_0 = function() {
    return (P_ = t2._emscripten_bind_PeVersion_version_string_0 = t2.asm.Ub).apply(null, arguments);
  };
  t2._pe_getPeGTlistExtendedEntrySize = function() {
    return (t2._pe_getPeGTlistExtendedEntrySize = t2.asm.Vb).apply(null, arguments);
  }, t2._pe_getPeGTlistExtendedGTsSize = function() {
    return (t2._pe_getPeGTlistExtendedGTsSize = t2.asm.Wb).apply(null, arguments);
  }, t2._pe_getPeHorizonSize = function() {
    return (t2._pe_getPeHorizonSize = t2.asm.Xb).apply(null, arguments);
  }, t2._pe_geog_to_geog = function() {
    return (t2._pe_geog_to_geog = t2.asm.Zb).apply(null, arguments);
  }, t2._pe_geog_to_proj = function() {
    return (t2._pe_geog_to_proj = t2.asm._b).apply(null, arguments);
  }, t2._pe_geog_to_dd = function() {
    return (t2._pe_geog_to_dd = t2.asm.$b).apply(null, arguments);
  }, t2._pe_dd_to_geog = function() {
    return (t2._pe_dd_to_geog = t2.asm.ac).apply(null, arguments);
  }, t2._pe_geog_to_ddm = function() {
    return (t2._pe_geog_to_ddm = t2.asm.bc).apply(null, arguments);
  }, t2._pe_ddm_to_geog = function() {
    return (t2._pe_ddm_to_geog = t2.asm.cc).apply(null, arguments);
  }, t2._pe_geog_to_dms = function() {
    return (t2._pe_geog_to_dms = t2.asm.dc).apply(null, arguments);
  }, t2._pe_dms_to_geog = function() {
    return (t2._pe_dms_to_geog = t2.asm.ec).apply(null, arguments);
  }, t2._pe_geog_to_mgrs_extended = function() {
    return (t2._pe_geog_to_mgrs_extended = t2.asm.fc).apply(null, arguments);
  }, t2._pe_mgrs_to_geog_extended = function() {
    return (t2._pe_mgrs_to_geog_extended = t2.asm.gc).apply(null, arguments);
  }, t2._pe_geog_to_usng = function() {
    return (t2._pe_geog_to_usng = t2.asm.hc).apply(null, arguments);
  }, t2._pe_usng_to_geog = function() {
    return (t2._pe_usng_to_geog = t2.asm.ic).apply(null, arguments);
  }, t2._pe_geog_to_utm = function() {
    return (t2._pe_geog_to_utm = t2.asm.jc).apply(null, arguments);
  }, t2._pe_utm_to_geog = function() {
    return (t2._pe_utm_to_geog = t2.asm.kc).apply(null, arguments);
  }, t2._pe_object_to_string_ext = function() {
    return (t2._pe_object_to_string_ext = t2.asm.lc).apply(null, arguments);
  }, t2._pe_proj_to_geog_center = function() {
    return (t2._pe_proj_to_geog_center = t2.asm.mc).apply(null, arguments);
  };
  var y_, g_ = t2._malloc = function() {
    return (g_ = t2._malloc = t2.asm.nc).apply(null, arguments);
  };
  function f_(t3) {
    this.name = "ExitStatus", this.message = "Program terminated with exit(" + t3 + ")", this.status = t3;
  }
  function l_(n2) {
    function _3() {
      y_ || (y_ = true, t2.calledRun = true, O || (Z(), e2(t2), t2.onRuntimeInitialized && t2.onRuntimeInitialized(), B()));
    }
    k > 0 || (z(), k > 0 || (t2.setStatus ? (t2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        t2.setStatus("");
      }, 1), _3();
    }, 1)) : _3()));
  }
  if (t2._free = function() {
    return (t2._free = t2.asm.oc).apply(null, arguments);
  }, t2.UTF8ToString = j, t2.getValue = ct, J = function t3() {
    y_ || l_(), y_ || (J = t3);
  }, t2.run = l_, t2.preInit)
    for (typeof t2.preInit == "function" && (t2.preInit = [t2.preInit]); t2.preInit.length > 0; )
      t2.preInit.pop()();
  function m_() {
  }
  function d_(t3) {
    return (t3 || m_).__cache__;
  }
  function E_(t3, e3) {
    var n2 = d_(e3), _3 = n2[t3];
    return _3 || ((_3 = Object.create((e3 || m_).prototype)).ptr = t3, n2[t3] = _3);
  }
  function b_(t3, e3) {
    return E_(t3.ptr, e3);
  }
  function O_(t3) {
    if (!t3.__destroy__)
      throw "Error: Cannot destroy object. (Did you create it yourself?)";
    t3.__destroy__(), delete d_(t3.__class__)[t3.ptr];
  }
  function T_(t3, e3) {
    return t3.ptr === e3.ptr;
  }
  function S_(t3) {
    return t3.ptr;
  }
  function N_(t3) {
    return t3.__class__;
  }
  l_(), m_.prototype = Object.create(m_.prototype), m_.prototype.constructor = m_, m_.prototype.__class__ = m_, m_.__cache__ = {}, t2.WrapperObject = m_, t2.getCache = d_, t2.wrapPointer = E_, t2.castObject = b_, t2.NULL = E_(0), t2.destroy = O_, t2.compare = T_, t2.getPointer = S_, t2.getClass = N_;
  var h_ = { buffer: 0, size: 0, pos: 0, temps: [], needed: 0, prepare: function() {
    if (h_.needed) {
      for (var e3 = 0; e3 < h_.temps.length; e3++)
        t2._free(h_.temps[e3]);
      h_.temps.length = 0, t2._free(h_.buffer), h_.buffer = 0, h_.size += h_.needed, h_.needed = 0;
    }
    h_.buffer || (h_.size += 128, h_.buffer = t2._malloc(h_.size), T(h_.buffer)), h_.pos = 0;
  }, alloc: function(e3, n2) {
    T(h_.buffer);
    var _3, r3 = n2.BYTES_PER_ELEMENT, o3 = e3.length * r3;
    return o3 = o3 + 7 & -8, h_.pos + o3 >= h_.size ? (T(o3 > 0), h_.needed += o3, _3 = t2._malloc(o3), h_.temps.push(_3)) : (_3 = h_.buffer + h_.pos, h_.pos += o3), _3;
  }, copy: function(t3, e3, n2) {
    switch (n2 >>>= 0, e3.BYTES_PER_ELEMENT) {
      case 2:
        n2 >>>= 1;
        break;
      case 4:
        n2 >>>= 2;
        break;
      case 8:
        n2 >>>= 3;
    }
    for (var _3 = 0; _3 < t3.length; _3++)
      e3[n2 + _3] = t3[_3];
  } };
  function M_(t3) {
    if (typeof t3 == "string") {
      var e3 = xt(t3), n2 = h_.alloc(e3, N);
      return h_.copy(e3, N, n2), n2;
    }
    return t3;
  }
  function v_(t3) {
    if (typeof t3 == "object") {
      var e3 = h_.alloc(t3, N);
      return h_.copy(t3, N, e3), e3;
    }
    return t3;
  }
  function D_(t3) {
    if (typeof t3 == "object") {
      var e3 = h_.alloc(t3, M);
      return h_.copy(t3, M, e3), e3;
    }
    return t3;
  }
  function R_(t3) {
    if (typeof t3 == "object") {
      var e3 = h_.alloc(t3, v);
      return h_.copy(t3, v, e3), e3;
    }
    return t3;
  }
  function A_(t3) {
    if (typeof t3 == "object") {
      var e3 = h_.alloc(t3, R);
      return h_.copy(t3, R, e3), e3;
    }
    return t3;
  }
  function G_(t3) {
    if (typeof t3 == "object") {
      var e3 = h_.alloc(t3, A);
      return h_.copy(t3, A, e3), e3;
    }
    return t3;
  }
  function C_() {
    throw "cannot construct a PeObject, no constructor in IDL";
  }
  function I_() {
    throw "cannot construct a PeCoordsys, no constructor in IDL";
  }
  function j_() {
    throw "cannot construct a VoidPtr, no constructor in IDL";
  }
  function L_() {
    throw "cannot construct a PeDatum, no constructor in IDL";
  }
  function U_() {
    throw "cannot construct a PeDefs, no constructor in IDL";
  }
  function Y_() {
    throw "cannot construct a PeFactory, no constructor in IDL";
  }
  function x_(t3, e3, n2, _3, r3, o3) {
    t3 && typeof t3 == "object" && (t3 = t3.ptr), e3 && typeof e3 == "object" && (e3 = e3.ptr), n2 && typeof n2 == "object" && (n2 = n2.ptr), _3 && typeof _3 == "object" && (_3 = _3.ptr), r3 && typeof r3 == "object" && (r3 = r3.ptr), o3 && typeof o3 == "object" && (o3 = o3.ptr), this.ptr = Ge(t3, e3, n2, _3, r3, o3), d_(x_)[this.ptr] = this;
  }
  function F_() {
    throw "cannot construct a PeGeogcs, no constructor in IDL";
  }
  function w_() {
    throw "cannot construct a PeGeogtran, no constructor in IDL";
  }
  function H_() {
    throw "cannot construct a PeGTlistExtended, no constructor in IDL";
  }
  function X_() {
    throw "cannot construct a PeGTlistExtendedEntry, no constructor in IDL";
  }
  function z_() {
    throw "cannot construct a PeGTlistExtendedGTs, no constructor in IDL";
  }
  function Z_() {
    throw "cannot construct a PeHorizon, no constructor in IDL";
  }
  function B_(t3) {
    t3 && typeof t3 == "object" && (t3 = t3.ptr), this.ptr = sn(t3), d_(B_)[this.ptr] = this;
  }
  function W_() {
    throw "cannot construct a PeNotationMgrs, no constructor in IDL";
  }
  function V_() {
    throw "cannot construct a PeNotationUtm, no constructor in IDL";
  }
  function q_() {
    throw "cannot construct a PeParameter, no constructor in IDL";
  }
  function k_() {
    throw "cannot construct a PePCSInfo, no constructor in IDL";
  }
  function J_() {
    throw "cannot construct a PePrimem, no constructor in IDL";
  }
  function K_() {
    throw "cannot construct a PeProjcs, no constructor in IDL";
  }
  function $_() {
    throw "cannot construct a PeSpheroid, no constructor in IDL";
  }
  function Q_() {
    throw "cannot construct a PeUnit, no constructor in IDL";
  }
  function tr() {
    throw "cannot construct a PeVersion, no constructor in IDL";
  }
  return C_.prototype = Object.create(m_.prototype), C_.prototype.constructor = C_, C_.prototype.__class__ = C_, C_.__cache__ = {}, t2.PeObject = C_, C_.prototype.getCode = C_.prototype.getCode = function() {
    var t3 = this.ptr;
    return wt(t3);
  }, C_.prototype.getName = C_.prototype.getName = function(t3) {
    var e3 = this.ptr;
    return h_.prepare(), typeof t3 == "object" && (t3 = v_(t3)), j(Ht(e3, t3));
  }, C_.prototype.getType = C_.prototype.getType = function() {
    var t3 = this.ptr;
    return Xt(t3);
  }, I_.prototype = Object.create(C_.prototype), I_.prototype.constructor = I_, I_.prototype.__class__ = I_, I_.__cache__ = {}, t2.PeCoordsys = I_, I_.prototype.getCode = I_.prototype.getCode = function() {
    var t3 = this.ptr;
    return zt(t3);
  }, I_.prototype.getName = I_.prototype.getName = function(t3) {
    var e3 = this.ptr;
    return h_.prepare(), typeof t3 == "object" && (t3 = v_(t3)), j(Zt(e3, t3));
  }, I_.prototype.getType = I_.prototype.getType = function() {
    var t3 = this.ptr;
    return Bt(t3);
  }, j_.prototype = Object.create(m_.prototype), j_.prototype.constructor = j_, j_.prototype.__class__ = j_, j_.__cache__ = {}, t2.VoidPtr = j_, j_.prototype.__destroy__ = j_.prototype.__destroy__ = function() {
    var t3 = this.ptr;
    Wt(t3);
  }, L_.prototype = Object.create(C_.prototype), L_.prototype.constructor = L_, L_.prototype.__class__ = L_, L_.__cache__ = {}, t2.PeDatum = L_, L_.prototype.getSpheroid = L_.prototype.getSpheroid = function() {
    var t3 = this.ptr;
    return E_(Vt(t3), $_);
  }, L_.prototype.getCode = L_.prototype.getCode = function() {
    var t3 = this.ptr;
    return qt(t3);
  }, L_.prototype.getName = L_.prototype.getName = function(t3) {
    var e3 = this.ptr;
    return h_.prepare(), typeof t3 == "object" && (t3 = v_(t3)), j(kt(e3, t3));
  }, L_.prototype.getType = L_.prototype.getType = function() {
    var t3 = this.ptr;
    return Jt(t3);
  }, U_.prototype = Object.create(m_.prototype), U_.prototype.constructor = U_, U_.prototype.__class__ = U_, U_.__cache__ = {}, t2.PeDefs = U_, U_.prototype.get_PE_BUFFER_MAX = U_.prototype.get_PE_BUFFER_MAX = function() {
    var t3 = this.ptr;
    return Kt(t3);
  }, Object.defineProperty(U_.prototype, "PE_BUFFER_MAX", { get: U_.prototype.get_PE_BUFFER_MAX }), U_.prototype.get_PE_NAME_MAX = U_.prototype.get_PE_NAME_MAX = function() {
    var t3 = this.ptr;
    return $t(t3);
  }, Object.defineProperty(U_.prototype, "PE_NAME_MAX", { get: U_.prototype.get_PE_NAME_MAX }), U_.prototype.get_PE_MGRS_MAX = U_.prototype.get_PE_MGRS_MAX = function() {
    var t3 = this.ptr;
    return Qt(t3);
  }, Object.defineProperty(U_.prototype, "PE_MGRS_MAX", { get: U_.prototype.get_PE_MGRS_MAX }), U_.prototype.get_PE_USNG_MAX = U_.prototype.get_PE_USNG_MAX = function() {
    var t3 = this.ptr;
    return te(t3);
  }, Object.defineProperty(U_.prototype, "PE_USNG_MAX", { get: U_.prototype.get_PE_USNG_MAX }), U_.prototype.get_PE_DD_MAX = U_.prototype.get_PE_DD_MAX = function() {
    var t3 = this.ptr;
    return ee(t3);
  }, Object.defineProperty(U_.prototype, "PE_DD_MAX", { get: U_.prototype.get_PE_DD_MAX }), U_.prototype.get_PE_DMS_MAX = U_.prototype.get_PE_DMS_MAX = function() {
    var t3 = this.ptr;
    return ne(t3);
  }, Object.defineProperty(U_.prototype, "PE_DMS_MAX", { get: U_.prototype.get_PE_DMS_MAX }), U_.prototype.get_PE_DDM_MAX = U_.prototype.get_PE_DDM_MAX = function() {
    var t3 = this.ptr;
    return _e(t3);
  }, Object.defineProperty(U_.prototype, "PE_DDM_MAX", { get: U_.prototype.get_PE_DDM_MAX }), U_.prototype.get_PE_UTM_MAX = U_.prototype.get_PE_UTM_MAX = function() {
    var t3 = this.ptr;
    return re(t3);
  }, Object.defineProperty(U_.prototype, "PE_UTM_MAX", { get: U_.prototype.get_PE_UTM_MAX }), U_.prototype.get_PE_PARM_MAX = U_.prototype.get_PE_PARM_MAX = function() {
    var t3 = this.ptr;
    return oe(t3);
  }, Object.defineProperty(U_.prototype, "PE_PARM_MAX", { get: U_.prototype.get_PE_PARM_MAX }), U_.prototype.get_PE_TYPE_NONE = U_.prototype.get_PE_TYPE_NONE = function() {
    var t3 = this.ptr;
    return pe(t3);
  }, Object.defineProperty(U_.prototype, "PE_TYPE_NONE", { get: U_.prototype.get_PE_TYPE_NONE }), U_.prototype.get_PE_TYPE_GEOGCS = U_.prototype.get_PE_TYPE_GEOGCS = function() {
    var t3 = this.ptr;
    return ie(t3);
  }, Object.defineProperty(U_.prototype, "PE_TYPE_GEOGCS", { get: U_.prototype.get_PE_TYPE_GEOGCS }), U_.prototype.get_PE_TYPE_PROJCS = U_.prototype.get_PE_TYPE_PROJCS = function() {
    var t3 = this.ptr;
    return ce(t3);
  }, Object.defineProperty(U_.prototype, "PE_TYPE_PROJCS", { get: U_.prototype.get_PE_TYPE_PROJCS }), U_.prototype.get_PE_TYPE_GEOGTRAN = U_.prototype.get_PE_TYPE_GEOGTRAN = function() {
    var t3 = this.ptr;
    return ae(t3);
  }, Object.defineProperty(U_.prototype, "PE_TYPE_GEOGTRAN", { get: U_.prototype.get_PE_TYPE_GEOGTRAN }), U_.prototype.get_PE_TYPE_COORDSYS = U_.prototype.get_PE_TYPE_COORDSYS = function() {
    var t3 = this.ptr;
    return se(t3);
  }, Object.defineProperty(U_.prototype, "PE_TYPE_COORDSYS", { get: U_.prototype.get_PE_TYPE_COORDSYS }), U_.prototype.get_PE_TYPE_UNIT = U_.prototype.get_PE_TYPE_UNIT = function() {
    var t3 = this.ptr;
    return ue(t3);
  }, Object.defineProperty(U_.prototype, "PE_TYPE_UNIT", { get: U_.prototype.get_PE_TYPE_UNIT }), U_.prototype.get_PE_TYPE_LINUNIT = U_.prototype.get_PE_TYPE_LINUNIT = function() {
    var t3 = this.ptr;
    return Pe(t3);
  }, Object.defineProperty(U_.prototype, "PE_TYPE_LINUNIT", { get: U_.prototype.get_PE_TYPE_LINUNIT }), U_.prototype.get_PE_STR_OPTS_NONE = U_.prototype.get_PE_STR_OPTS_NONE = function() {
    var t3 = this.ptr;
    return ye(t3);
  }, Object.defineProperty(U_.prototype, "PE_STR_OPTS_NONE", { get: U_.prototype.get_PE_STR_OPTS_NONE }), U_.prototype.get_PE_STR_AUTH_NONE = U_.prototype.get_PE_STR_AUTH_NONE = function() {
    var t3 = this.ptr;
    return ge(t3);
  }, Object.defineProperty(U_.prototype, "PE_STR_AUTH_NONE", { get: U_.prototype.get_PE_STR_AUTH_NONE }), U_.prototype.get_PE_STR_AUTH_TOP = U_.prototype.get_PE_STR_AUTH_TOP = function() {
    var t3 = this.ptr;
    return fe(t3);
  }, Object.defineProperty(U_.prototype, "PE_STR_AUTH_TOP", { get: U_.prototype.get_PE_STR_AUTH_TOP }), U_.prototype.get_PE_STR_NAME_CANON = U_.prototype.get_PE_STR_NAME_CANON = function() {
    var t3 = this.ptr;
    return le(t3);
  }, Object.defineProperty(U_.prototype, "PE_STR_NAME_CANON", { get: U_.prototype.get_PE_STR_NAME_CANON }), U_.prototype.get_PE_PARM_X0 = U_.prototype.get_PE_PARM_X0 = function() {
    var t3 = this.ptr;
    return me(t3);
  }, Object.defineProperty(U_.prototype, "PE_PARM_X0", { get: U_.prototype.get_PE_PARM_X0 }), U_.prototype.get_PE_PARM_ND = U_.prototype.get_PE_PARM_ND = function() {
    var t3 = this.ptr;
    return de(t3);
  }, Object.defineProperty(U_.prototype, "PE_PARM_ND", { get: U_.prototype.get_PE_PARM_ND }), U_.prototype.get_PE_TRANSFORM_1_TO_2 = U_.prototype.get_PE_TRANSFORM_1_TO_2 = function() {
    var t3 = this.ptr;
    return Ee(t3);
  }, Object.defineProperty(U_.prototype, "PE_TRANSFORM_1_TO_2", { get: U_.prototype.get_PE_TRANSFORM_1_TO_2 }), U_.prototype.get_PE_TRANSFORM_2_TO_1 = U_.prototype.get_PE_TRANSFORM_2_TO_1 = function() {
    var t3 = this.ptr;
    return be(t3);
  }, Object.defineProperty(U_.prototype, "PE_TRANSFORM_2_TO_1", { get: U_.prototype.get_PE_TRANSFORM_2_TO_1 }), U_.prototype.get_PE_TRANSFORM_P_TO_G = U_.prototype.get_PE_TRANSFORM_P_TO_G = function() {
    var t3 = this.ptr;
    return Oe(t3);
  }, Object.defineProperty(U_.prototype, "PE_TRANSFORM_P_TO_G", { get: U_.prototype.get_PE_TRANSFORM_P_TO_G }), U_.prototype.get_PE_TRANSFORM_G_TO_P = U_.prototype.get_PE_TRANSFORM_G_TO_P = function() {
    var t3 = this.ptr;
    return Te(t3);
  }, Object.defineProperty(U_.prototype, "PE_TRANSFORM_G_TO_P", { get: U_.prototype.get_PE_TRANSFORM_G_TO_P }), U_.prototype.get_PE_HORIZON_RECT = U_.prototype.get_PE_HORIZON_RECT = function() {
    var t3 = this.ptr;
    return Se(t3);
  }, Object.defineProperty(U_.prototype, "PE_HORIZON_RECT", { get: U_.prototype.get_PE_HORIZON_RECT }), U_.prototype.get_PE_HORIZON_POLY = U_.prototype.get_PE_HORIZON_POLY = function() {
    var t3 = this.ptr;
    return Ne(t3);
  }, Object.defineProperty(U_.prototype, "PE_HORIZON_POLY", { get: U_.prototype.get_PE_HORIZON_POLY }), U_.prototype.get_PE_HORIZON_LINE = U_.prototype.get_PE_HORIZON_LINE = function() {
    var t3 = this.ptr;
    return he(t3);
  }, Object.defineProperty(U_.prototype, "PE_HORIZON_LINE", { get: U_.prototype.get_PE_HORIZON_LINE }), U_.prototype.get_PE_HORIZON_DELTA = U_.prototype.get_PE_HORIZON_DELTA = function() {
    var t3 = this.ptr;
    return Me(t3);
  }, Object.defineProperty(U_.prototype, "PE_HORIZON_DELTA", { get: U_.prototype.get_PE_HORIZON_DELTA }), Y_.prototype = Object.create(m_.prototype), Y_.prototype.constructor = Y_, Y_.prototype.__class__ = Y_, Y_.__cache__ = {}, t2.PeFactory = Y_, Y_.prototype.initialize = Y_.prototype.initialize = function(t3) {
    var e3 = this.ptr;
    h_.prepare(), t3 = t3 && typeof t3 == "object" ? t3.ptr : M_(t3), ve(e3, t3);
  }, Y_.prototype.factoryByType = Y_.prototype.factoryByType = function(t3, e3) {
    var n2 = this.ptr;
    return t3 && typeof t3 == "object" && (t3 = t3.ptr), e3 && typeof e3 == "object" && (e3 = e3.ptr), E_(De(n2, t3, e3), C_);
  }, Y_.prototype.fromString = Y_.prototype.fromString = function(t3, e3) {
    var n2 = this.ptr;
    return h_.prepare(), t3 && typeof t3 == "object" && (t3 = t3.ptr), e3 = e3 && typeof e3 == "object" ? e3.ptr : M_(e3), E_(Re(n2, t3, e3), C_);
  }, Y_.prototype.getCode = Y_.prototype.getCode = function(t3) {
    var e3 = this.ptr;
    return t3 && typeof t3 == "object" && (t3 = t3.ptr), Ae(e3, t3);
  }, x_.prototype = Object.create(m_.prototype), x_.prototype.constructor = x_, x_.prototype.__class__ = x_, x_.__cache__ = {}, t2.PeGCSExtent = x_, x_.prototype.getLLon = x_.prototype.getLLon = function() {
    var t3 = this.ptr;
    return Ce(t3);
  }, x_.prototype.getSLat = x_.prototype.getSLat = function() {
    var t3 = this.ptr;
    return Ie(t3);
  }, x_.prototype.getRLon = x_.prototype.getRLon = function() {
    var t3 = this.ptr;
    return je(t3);
  }, x_.prototype.getNLat = x_.prototype.getNLat = function() {
    var t3 = this.ptr;
    return Le(t3);
  }, x_.prototype.__destroy__ = x_.prototype.__destroy__ = function() {
    var t3 = this.ptr;
    Ue(t3);
  }, F_.prototype = Object.create(I_.prototype), F_.prototype.constructor = F_, F_.prototype.__class__ = F_, F_.__cache__ = {}, t2.PeGeogcs = F_, F_.prototype.getDatum = F_.prototype.getDatum = function() {
    var t3 = this.ptr;
    return E_(Ye(t3), L_);
  }, F_.prototype.getPrimem = F_.prototype.getPrimem = function() {
    var t3 = this.ptr;
    return E_(xe(t3), J_);
  }, F_.prototype.getUnit = F_.prototype.getUnit = function() {
    var t3 = this.ptr;
    return E_(Fe(t3), Q_);
  }, F_.prototype.getCode = F_.prototype.getCode = function() {
    var t3 = this.ptr;
    return we(t3);
  }, F_.prototype.getName = F_.prototype.getName = function(t3) {
    var e3 = this.ptr;
    return h_.prepare(), typeof t3 == "object" && (t3 = v_(t3)), j(He(e3, t3));
  }, F_.prototype.getType = F_.prototype.getType = function() {
    var t3 = this.ptr;
    return Xe(t3);
  }, w_.prototype = Object.create(C_.prototype), w_.prototype.constructor = w_, w_.prototype.__class__ = w_, w_.__cache__ = {}, t2.PeGeogtran = w_, w_.prototype.isEqual = w_.prototype.isEqual = function(t3) {
    var e3 = this.ptr;
    return t3 && typeof t3 == "object" && (t3 = t3.ptr), !!ze(e3, t3);
  }, w_.prototype.getGeogcs1 = w_.prototype.getGeogcs1 = function() {
    var t3 = this.ptr;
    return E_(Ze(t3), F_);
  }, w_.prototype.getGeogcs2 = w_.prototype.getGeogcs2 = function() {
    var t3 = this.ptr;
    return E_(Be(t3), F_);
  }, w_.prototype.getParameters = w_.prototype.getParameters = function() {
    var t3 = this.ptr;
    return We(t3);
  }, w_.prototype.loadConstants = w_.prototype.loadConstants = function() {
    var t3 = this.ptr;
    return !!Ve(t3);
  }, w_.prototype.getCode = w_.prototype.getCode = function() {
    var t3 = this.ptr;
    return qe(t3);
  }, w_.prototype.getName = w_.prototype.getName = function(t3) {
    var e3 = this.ptr;
    return h_.prepare(), typeof t3 == "object" && (t3 = v_(t3)), j(ke(e3, t3));
  }, w_.prototype.getType = w_.prototype.getType = function() {
    var t3 = this.ptr;
    return Je(t3);
  }, H_.prototype = Object.create(m_.prototype), H_.prototype.constructor = H_, H_.prototype.__class__ = H_, H_.__cache__ = {}, t2.PeGTlistExtended = H_, H_.prototype.getGTlist = H_.prototype.getGTlist = function(t3, e3, n2, _3, r3, o3) {
    var p2 = this.ptr;
    return t3 && typeof t3 == "object" && (t3 = t3.ptr), e3 && typeof e3 == "object" && (e3 = e3.ptr), n2 && typeof n2 == "object" && (n2 = n2.ptr), _3 && typeof _3 == "object" && (_3 = _3.ptr), r3 && typeof r3 == "object" && (r3 = r3.ptr), o3 && typeof o3 == "object" && (o3 = o3.ptr), E_(Ke(p2, t3, e3, n2, _3, r3, o3), X_);
  }, H_.prototype.get_PE_GTLIST_OPTS_COMMON = H_.prototype.get_PE_GTLIST_OPTS_COMMON = function() {
    var t3 = this.ptr;
    return $e(t3);
  }, Object.defineProperty(H_.prototype, "PE_GTLIST_OPTS_COMMON", { get: H_.prototype.get_PE_GTLIST_OPTS_COMMON }), X_.prototype = Object.create(m_.prototype), X_.prototype.constructor = X_, X_.prototype.__class__ = X_, X_.__cache__ = {}, t2.PeGTlistExtendedEntry = X_, X_.prototype.getEntries = X_.prototype.getEntries = function() {
    var t3 = this.ptr;
    return E_(Qe(t3), z_);
  }, X_.prototype.getSteps = X_.prototype.getSteps = function() {
    var t3 = this.ptr;
    return tn(t3);
  }, X_.prototype.Delete = X_.prototype.Delete = function(t3) {
    var e3 = this.ptr;
    t3 && typeof t3 == "object" && (t3 = t3.ptr), en(e3, t3);
  }, z_.prototype = Object.create(m_.prototype), z_.prototype.constructor = z_, z_.prototype.__class__ = z_, z_.__cache__ = {}, t2.PeGTlistExtendedGTs = z_, z_.prototype.getDirection = z_.prototype.getDirection = function() {
    var t3 = this.ptr;
    return nn(t3);
  }, z_.prototype.getGeogtran = z_.prototype.getGeogtran = function() {
    var t3 = this.ptr;
    return E_(_n(t3), w_);
  }, Z_.prototype = Object.create(m_.prototype), Z_.prototype.constructor = Z_, Z_.prototype.__class__ = Z_, Z_.__cache__ = {}, t2.PeHorizon = Z_, Z_.prototype.getNump = Z_.prototype.getNump = function() {
    var t3 = this.ptr;
    return rn(t3);
  }, Z_.prototype.getKind = Z_.prototype.getKind = function() {
    var t3 = this.ptr;
    return on(t3);
  }, Z_.prototype.getInclusive = Z_.prototype.getInclusive = function() {
    var t3 = this.ptr;
    return pn(t3);
  }, Z_.prototype.getSize = Z_.prototype.getSize = function() {
    var t3 = this.ptr;
    return cn(t3);
  }, Z_.prototype.getCoord = Z_.prototype.getCoord = function() {
    var t3 = this.ptr;
    return an(t3);
  }, B_.prototype = Object.create(m_.prototype), B_.prototype.constructor = B_, B_.prototype.__class__ = B_, B_.__cache__ = {}, t2.PeInteger = B_, B_.prototype.get_val = B_.prototype.get_val = function() {
    var t3 = this.ptr;
    return un(t3);
  }, B_.prototype.set_val = B_.prototype.set_val = function(t3) {
    var e3 = this.ptr;
    t3 && typeof t3 == "object" && (t3 = t3.ptr), Pn(e3, t3);
  }, Object.defineProperty(B_.prototype, "val", { get: B_.prototype.get_val, set: B_.prototype.set_val }), B_.prototype.__destroy__ = B_.prototype.__destroy__ = function() {
    var t3 = this.ptr;
    yn(t3);
  }, W_.prototype = Object.create(m_.prototype), W_.prototype.constructor = W_, W_.prototype.__class__ = W_, W_.__cache__ = {}, t2.PeNotationMgrs = W_, W_.prototype.get_PE_MGRS_STYLE_NEW = W_.prototype.get_PE_MGRS_STYLE_NEW = function() {
    var t3 = this.ptr;
    return gn(t3);
  }, Object.defineProperty(W_.prototype, "PE_MGRS_STYLE_NEW", { get: W_.prototype.get_PE_MGRS_STYLE_NEW }), W_.prototype.get_PE_MGRS_STYLE_OLD = W_.prototype.get_PE_MGRS_STYLE_OLD = function() {
    var t3 = this.ptr;
    return fn(t3);
  }, Object.defineProperty(W_.prototype, "PE_MGRS_STYLE_OLD", { get: W_.prototype.get_PE_MGRS_STYLE_OLD }), W_.prototype.get_PE_MGRS_STYLE_AUTO = W_.prototype.get_PE_MGRS_STYLE_AUTO = function() {
    var t3 = this.ptr;
    return ln(t3);
  }, Object.defineProperty(W_.prototype, "PE_MGRS_STYLE_AUTO", { get: W_.prototype.get_PE_MGRS_STYLE_AUTO }), W_.prototype.get_PE_MGRS_180_ZONE_1_PLUS = W_.prototype.get_PE_MGRS_180_ZONE_1_PLUS = function() {
    var t3 = this.ptr;
    return mn(t3);
  }, Object.defineProperty(W_.prototype, "PE_MGRS_180_ZONE_1_PLUS", { get: W_.prototype.get_PE_MGRS_180_ZONE_1_PLUS }), W_.prototype.get_PE_MGRS_ADD_SPACES = W_.prototype.get_PE_MGRS_ADD_SPACES = function() {
    var t3 = this.ptr;
    return dn(t3);
  }, Object.defineProperty(W_.prototype, "PE_MGRS_ADD_SPACES", { get: W_.prototype.get_PE_MGRS_ADD_SPACES }), V_.prototype = Object.create(m_.prototype), V_.prototype.constructor = V_, V_.prototype.__class__ = V_, V_.__cache__ = {}, t2.PeNotationUtm = V_, V_.prototype.get_PE_UTM_OPTS_NONE = V_.prototype.get_PE_UTM_OPTS_NONE = function() {
    var t3 = this.ptr;
    return En(t3);
  }, Object.defineProperty(V_.prototype, "PE_UTM_OPTS_NONE", { get: V_.prototype.get_PE_UTM_OPTS_NONE }), V_.prototype.get_PE_UTM_OPTS_NS = V_.prototype.get_PE_UTM_OPTS_NS = function() {
    var t3 = this.ptr;
    return bn(t3);
  }, Object.defineProperty(V_.prototype, "PE_UTM_OPTS_NS", { get: V_.prototype.get_PE_UTM_OPTS_NS }), V_.prototype.get_PE_UTM_OPTS_NS_STRICT = V_.prototype.get_PE_UTM_OPTS_NS_STRICT = function() {
    var t3 = this.ptr;
    return On(t3);
  }, Object.defineProperty(V_.prototype, "PE_UTM_OPTS_NS_STRICT", { get: V_.prototype.get_PE_UTM_OPTS_NS_STRICT }), V_.prototype.get_PE_UTM_OPTS_ADD_SPACES = V_.prototype.get_PE_UTM_OPTS_ADD_SPACES = function() {
    var t3 = this.ptr;
    return Tn(t3);
  }, Object.defineProperty(V_.prototype, "PE_UTM_OPTS_ADD_SPACES", { get: V_.prototype.get_PE_UTM_OPTS_ADD_SPACES }), q_.prototype = Object.create(C_.prototype), q_.prototype.constructor = q_, q_.prototype.__class__ = q_, q_.__cache__ = {}, t2.PeParameter = q_, q_.prototype.getValue = q_.prototype.getValue = function() {
    var t3 = this.ptr;
    return Sn(t3);
  }, q_.prototype.getCode = q_.prototype.getCode = function() {
    var t3 = this.ptr;
    return Nn(t3);
  }, q_.prototype.getName = q_.prototype.getName = function(t3) {
    var e3 = this.ptr;
    return h_.prepare(), typeof t3 == "object" && (t3 = v_(t3)), j(hn(e3, t3));
  }, q_.prototype.getType = q_.prototype.getType = function() {
    var t3 = this.ptr;
    return Mn(t3);
  }, k_.prototype = Object.create(m_.prototype), k_.prototype.constructor = k_, k_.prototype.__class__ = k_, k_.__cache__ = {}, t2.PePCSInfo = k_, k_.prototype.getCentralMeridian = k_.prototype.getCentralMeridian = function() {
    var t3 = this.ptr;
    return vn(t3);
  }, k_.prototype.getDomainMinx = k_.prototype.getDomainMinx = function() {
    var t3 = this.ptr;
    return Dn(t3);
  }, k_.prototype.getDomainMiny = k_.prototype.getDomainMiny = function() {
    var t3 = this.ptr;
    return Rn(t3);
  }, k_.prototype.getDomainMaxx = k_.prototype.getDomainMaxx = function() {
    var t3 = this.ptr;
    return An(t3);
  }, k_.prototype.getDomainMaxy = k_.prototype.getDomainMaxy = function() {
    var t3 = this.ptr;
    return Gn(t3);
  }, k_.prototype.getNorthPoleLocation = k_.prototype.getNorthPoleLocation = function() {
    var t3 = this.ptr;
    return Cn(t3);
  }, k_.prototype.getNorthPoleGeometry = k_.prototype.getNorthPoleGeometry = function() {
    var t3 = this.ptr;
    return In(t3);
  }, k_.prototype.getSouthPoleLocation = k_.prototype.getSouthPoleLocation = function() {
    var t3 = this.ptr;
    return jn(t3);
  }, k_.prototype.getSouthPoleGeometry = k_.prototype.getSouthPoleGeometry = function() {
    var t3 = this.ptr;
    return Ln(t3);
  }, k_.prototype.isDensificationNeeded = k_.prototype.isDensificationNeeded = function() {
    var t3 = this.ptr;
    return !!Un(t3);
  }, k_.prototype.isGcsHorizonMultiOverlap = k_.prototype.isGcsHorizonMultiOverlap = function() {
    var t3 = this.ptr;
    return !!Yn(t3);
  }, k_.prototype.isPannableRectangle = k_.prototype.isPannableRectangle = function() {
    var t3 = this.ptr;
    return !!xn(t3);
  }, k_.prototype.generate = k_.prototype.generate = function(t3, e3) {
    var n2 = this.ptr;
    return t3 && typeof t3 == "object" && (t3 = t3.ptr), e3 && typeof e3 == "object" && (e3 = e3.ptr), E_(Fn(n2, t3, e3), k_);
  }, k_.prototype.get_PE_PCSINFO_OPTION_NONE = k_.prototype.get_PE_PCSINFO_OPTION_NONE = function() {
    var t3 = this.ptr;
    return wn(t3);
  }, Object.defineProperty(k_.prototype, "PE_PCSINFO_OPTION_NONE", { get: k_.prototype.get_PE_PCSINFO_OPTION_NONE }), k_.prototype.get_PE_PCSINFO_OPTION_DOMAIN = k_.prototype.get_PE_PCSINFO_OPTION_DOMAIN = function() {
    var t3 = this.ptr;
    return Hn(t3);
  }, Object.defineProperty(k_.prototype, "PE_PCSINFO_OPTION_DOMAIN", { get: k_.prototype.get_PE_PCSINFO_OPTION_DOMAIN }), k_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = k_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = function() {
    var t3 = this.ptr;
    return Xn(t3);
  }, Object.defineProperty(k_.prototype, "PE_POLE_OUTSIDE_BOUNDARY", { get: k_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY }), k_.prototype.get_PE_POLE_POINT = k_.prototype.get_PE_POLE_POINT = function() {
    var t3 = this.ptr;
    return zn(t3);
  }, Object.defineProperty(k_.prototype, "PE_POLE_POINT", { get: k_.prototype.get_PE_POLE_POINT }), J_.prototype = Object.create(C_.prototype), J_.prototype.constructor = J_, J_.prototype.__class__ = J_, J_.__cache__ = {}, t2.PePrimem = J_, J_.prototype.getLongitude = J_.prototype.getLongitude = function() {
    var t3 = this.ptr;
    return Zn(t3);
  }, J_.prototype.getCode = J_.prototype.getCode = function() {
    var t3 = this.ptr;
    return Bn(t3);
  }, J_.prototype.getName = J_.prototype.getName = function(t3) {
    var e3 = this.ptr;
    return h_.prepare(), typeof t3 == "object" && (t3 = v_(t3)), j(Wn(e3, t3));
  }, J_.prototype.getType = J_.prototype.getType = function() {
    var t3 = this.ptr;
    return Vn(t3);
  }, K_.prototype = Object.create(I_.prototype), K_.prototype.constructor = K_, K_.prototype.__class__ = K_, K_.__cache__ = {}, t2.PeProjcs = K_, K_.prototype.getGeogcs = K_.prototype.getGeogcs = function() {
    var t3 = this.ptr;
    return E_(qn(t3), F_);
  }, K_.prototype.getParameters = K_.prototype.getParameters = function() {
    var t3 = this.ptr;
    return kn(t3);
  }, K_.prototype.getUnit = K_.prototype.getUnit = function() {
    var t3 = this.ptr;
    return E_(Jn(t3), Q_);
  }, K_.prototype.loadConstants = K_.prototype.loadConstants = function() {
    var t3 = this.ptr;
    return !!Kn(t3);
  }, K_.prototype.horizonGcsGenerate = K_.prototype.horizonGcsGenerate = function() {
    var t3 = this.ptr;
    return E_($n(t3), Z_);
  }, K_.prototype.horizonPcsGenerate = K_.prototype.horizonPcsGenerate = function() {
    var t3 = this.ptr;
    return E_(Qn(t3), Z_);
  }, K_.prototype.getCode = K_.prototype.getCode = function() {
    var t3 = this.ptr;
    return t_(t3);
  }, K_.prototype.getName = K_.prototype.getName = function(t3) {
    var e3 = this.ptr;
    return h_.prepare(), typeof t3 == "object" && (t3 = v_(t3)), j(e_(e3, t3));
  }, K_.prototype.getType = K_.prototype.getType = function() {
    var t3 = this.ptr;
    return n_(t3);
  }, $_.prototype = Object.create(C_.prototype), $_.prototype.constructor = $_, $_.prototype.__class__ = $_, $_.__cache__ = {}, t2.PeSpheroid = $_, $_.prototype.getAxis = $_.prototype.getAxis = function() {
    var t3 = this.ptr;
    return __(t3);
  }, $_.prototype.getFlattening = $_.prototype.getFlattening = function() {
    var t3 = this.ptr;
    return r_(t3);
  }, $_.prototype.getCode = $_.prototype.getCode = function() {
    var t3 = this.ptr;
    return o_(t3);
  }, $_.prototype.getName = $_.prototype.getName = function(t3) {
    var e3 = this.ptr;
    return h_.prepare(), typeof t3 == "object" && (t3 = v_(t3)), j(p_(e3, t3));
  }, $_.prototype.getType = $_.prototype.getType = function() {
    var t3 = this.ptr;
    return i_(t3);
  }, Q_.prototype = Object.create(C_.prototype), Q_.prototype.constructor = Q_, Q_.prototype.__class__ = Q_, Q_.__cache__ = {}, t2.PeUnit = Q_, Q_.prototype.getUnitFactor = Q_.prototype.getUnitFactor = function() {
    var t3 = this.ptr;
    return c_(t3);
  }, Q_.prototype.getCode = Q_.prototype.getCode = function() {
    var t3 = this.ptr;
    return a_(t3);
  }, Q_.prototype.getName = Q_.prototype.getName = function(t3) {
    var e3 = this.ptr;
    return h_.prepare(), typeof t3 == "object" && (t3 = v_(t3)), j(s_(e3, t3));
  }, Q_.prototype.getType = Q_.prototype.getType = function() {
    var t3 = this.ptr;
    return u_(t3);
  }, tr.prototype = Object.create(m_.prototype), tr.prototype.constructor = tr, tr.prototype.__class__ = tr, tr.__cache__ = {}, t2.PeVersion = tr, tr.prototype.version_string = tr.prototype.version_string = function() {
    var t3 = this.ptr;
    return j(P_(t3));
  }, t2.ensureCache = h_, t2.ensureString = M_, t2.ensureInt8 = v_, t2.ensureInt16 = D_, t2.ensureInt32 = R_, t2.ensureFloat32 = A_, t2.ensureFloat64 = G_, t2.ready;
}, e.exports = _;
const o = t({ __proto__: null, default: r.exports }, [r.exports]);
export { o as p };
