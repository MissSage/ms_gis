function t(t2, n2) {
  for (var e2 = 0; e2 < n2.length; e2++) {
    const r2 = n2[e2];
    if (typeof r2 != "string" && !Array.isArray(r2)) {
      for (const n3 in r2)
        if (n3 !== "default" && !(n3 in t2)) {
          const e3 = Object.getOwnPropertyDescriptor(r2, n3);
          e3 && Object.defineProperty(t2, n3, e3.get ? e3 : { enumerable: true, get: () => r2[n3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }));
}
var n, e, r, i = { exports: {} };
n = i, e = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0, typeof __filename != "undefined" && (e = e || __filename), r = function(t2) {
  var n2, r2;
  (t2 = (t2 = t2 || {}) !== void 0 ? t2 : {}).ready = new Promise(function(t3, e2) {
    n2 = t3, r2 = e2;
  });
  var i2, o2, u, s, a, c, f = Object.assign({}, t2), p = typeof window == "object", l = typeof importScripts == "function", h = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", d = "";
  function m(n3) {
    return t2.locateFile ? t2.locateFile(n3, d) : d + n3;
  }
  h ? (d = l ? require("path").dirname(d) + "/" : __dirname + "/", c = () => {
    a || (s = require("fs"), a = require("path"));
  }, i2 = function(t3, n3) {
    return c(), t3 = a.normalize(t3), s.readFileSync(t3, n3 ? void 0 : "utf8");
  }, u = (t3) => {
    var n3 = i2(t3, true);
    return n3.buffer || (n3 = new Uint8Array(n3)), n3;
  }, o2 = (t3, n3, e2) => {
    c(), t3 = a.normalize(t3), s.readFile(t3, function(t4, r3) {
      t4 ? e2(t4) : n3(r3.buffer);
    });
  }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(t3) {
    if (!(t3 instanceof ht))
      throw t3;
  }), process.on("unhandledRejection", function(t3) {
    throw t3;
  }), t2.inspect = function() {
    return "[Emscripten Module object]";
  }) : (p || l) && (l ? d = self.location.href : typeof document != "undefined" && document.currentScript && (d = document.currentScript.src), e && (d = e), d = d.indexOf("blob:") !== 0 ? d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", i2 = (t3) => {
    var n3 = new XMLHttpRequest();
    return n3.open("GET", t3, false), n3.send(null), n3.responseText;
  }, l && (u = (t3) => {
    var n3 = new XMLHttpRequest();
    return n3.open("GET", t3, false), n3.responseType = "arraybuffer", n3.send(null), new Uint8Array(n3.response);
  }), o2 = (t3, n3, e2) => {
    var r3 = new XMLHttpRequest();
    r3.open("GET", t3, true), r3.responseType = "arraybuffer", r3.onload = () => {
      r3.status == 200 || r3.status == 0 && r3.response ? n3(r3.response) : e2();
    }, r3.onerror = e2, r3.send(null);
  }), t2.print || console.log.bind(console);
  var _, y, g = t2.printErr || console.warn.bind(console);
  Object.assign(t2, f), f = null, t2.arguments && t2.arguments, t2.thisProgram && t2.thisProgram, t2.quit && t2.quit, t2.wasmBinary && (_ = t2.wasmBinary), t2.noExitRuntime, typeof WebAssembly != "object" && L("no native wasm support detected");
  var v, w, b, A, R, x, S = false, P = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
  function E(t3, n3, e2) {
    for (var r3 = n3 + e2, i3 = n3; t3[i3] && !(i3 >= r3); )
      ++i3;
    if (i3 - n3 > 16 && t3.buffer && P)
      return P.decode(t3.subarray(n3, i3));
    for (var o3 = ""; n3 < i3; ) {
      var u2 = t3[n3++];
      if (128 & u2) {
        var s2 = 63 & t3[n3++];
        if ((224 & u2) != 192) {
          var a2 = 63 & t3[n3++];
          if ((u2 = (240 & u2) == 224 ? (15 & u2) << 12 | s2 << 6 | a2 : (7 & u2) << 18 | s2 << 12 | a2 << 6 | 63 & t3[n3++]) < 65536)
            o3 += String.fromCharCode(u2);
          else {
            var c2 = u2 - 65536;
            o3 += String.fromCharCode(55296 | c2 >> 10, 56320 | 1023 & c2);
          }
        } else
          o3 += String.fromCharCode((31 & u2) << 6 | s2);
      } else
        o3 += String.fromCharCode(u2);
    }
    return o3;
  }
  function I(t3, n3) {
    return t3 ? E(b, t3, n3) : "";
  }
  function j(n3) {
    v = n3, t2.HEAP8 = w = new Int8Array(n3), t2.HEAP16 = new Int16Array(n3), t2.HEAP32 = A = new Int32Array(n3), t2.HEAPU8 = b = new Uint8Array(n3), t2.HEAPU16 = new Uint16Array(n3), t2.HEAPU32 = R = new Uint32Array(n3), t2.HEAPF32 = new Float32Array(n3), t2.HEAPF64 = new Float64Array(n3);
  }
  t2.INITIAL_MEMORY;
  var T = [], D = [], H = [];
  function M() {
    if (t2.preRun)
      for (typeof t2.preRun == "function" && (t2.preRun = [t2.preRun]); t2.preRun.length; )
        U(t2.preRun.shift());
    V(T);
  }
  function O() {
    V(D);
  }
  function W() {
    if (t2.postRun)
      for (typeof t2.postRun == "function" && (t2.postRun = [t2.postRun]); t2.postRun.length; )
        C(t2.postRun.shift());
    V(H);
  }
  function U(t3) {
    T.unshift(t3);
  }
  function q(t3) {
    D.unshift(t3);
  }
  function C(t3) {
    H.unshift(t3);
  }
  var F = 0, B = null;
  function k(n3) {
    F++, t2.monitorRunDependencies && t2.monitorRunDependencies(F);
  }
  function z(n3) {
    if (F--, t2.monitorRunDependencies && t2.monitorRunDependencies(F), F == 0 && B) {
      var e2 = B;
      B = null, e2();
    }
  }
  function L(n3) {
    t2.onAbort && t2.onAbort(n3), g(n3 = "Aborted(" + n3 + ")"), S = true, n3 += ". Build with -sASSERTIONS for more info.";
    var e2 = new WebAssembly.RuntimeError(n3);
    throw r2(e2), e2;
  }
  var G, X = "data:application/octet-stream;base64,";
  function N(t3) {
    return t3.startsWith(X);
  }
  function Y(t3) {
    return t3.startsWith("file://");
  }
  function J(t3) {
    try {
      if (t3 == G && _)
        return new Uint8Array(_);
      if (u)
        return u(t3);
      throw "both async and sync fetching of the wasm failed";
    } catch (g2) {
      L(g2);
    }
  }
  function K() {
    if (!_ && (p || l)) {
      if (typeof fetch == "function" && !Y(G))
        return fetch(G, { credentials: "same-origin" }).then(function(t3) {
          if (!t3.ok)
            throw "failed to load wasm binary file at '" + G + "'";
          return t3.arrayBuffer();
        }).catch(function() {
          return J(G);
        });
      if (o2)
        return new Promise(function(t3, n3) {
          o2(G, function(n4) {
            t3(new Uint8Array(n4));
          }, n3);
        });
    }
    return Promise.resolve().then(function() {
      return J(G);
    });
  }
  function Q() {
    var n3 = { a: ct };
    function e2(n4, e3) {
      var r3 = n4.exports;
      t2.asm = r3, j((y = t2.asm.g).buffer), x = t2.asm.m, q(t2.asm.h), z();
    }
    function i3(t3) {
      e2(t3.instance);
    }
    function o3(t3) {
      return K().then(function(t4) {
        return WebAssembly.instantiate(t4, n3);
      }).then(function(t4) {
        return t4;
      }).then(t3, function(t4) {
        g("failed to asynchronously prepare wasm: " + t4), L(t4);
      });
    }
    function u2() {
      return _ || typeof WebAssembly.instantiateStreaming != "function" || N(G) || Y(G) || h || typeof fetch != "function" ? o3(i3) : fetch(G, { credentials: "same-origin" }).then(function(t3) {
        return WebAssembly.instantiateStreaming(t3, n3).then(i3, function(t4) {
          return g("wasm streaming compile failed: " + t4), g("falling back to ArrayBuffer instantiation"), o3(i3);
        });
      });
    }
    if (k(), t2.instantiateWasm)
      try {
        return t2.instantiateWasm(n3, e2);
      } catch (s2) {
        return g("Module.instantiateWasm callback failed with error: " + s2), false;
      }
    return u2().catch(r2), {};
  }
  function V(n3) {
    for (; n3.length > 0; ) {
      var e2 = n3.shift();
      if (typeof e2 != "function") {
        var r3 = e2.func;
        typeof r3 == "number" ? e2.arg === void 0 ? $(r3)() : $(r3)(e2.arg) : r3(e2.arg === void 0 ? null : e2.arg);
      } else
        e2(t2);
    }
  }
  N(G = "lerc-wasm.wasm") || (G = m(G));
  var Z = [];
  function $(t3) {
    var n3 = Z[t3];
    return n3 || (t3 >= Z.length && (Z.length = t3 + 1), Z[t3] = n3 = x.get(t3)), n3;
  }
  function tt(t3, n3, e2, r3) {
    L("Assertion failed: " + I(t3) + ", at: " + [n3 ? I(n3) : "unknown filename", e2, r3 ? I(r3) : "unknown function"]);
  }
  function nt(t3) {
    return ft(t3 + 24) + 24;
  }
  function et(t3) {
    this.excPtr = t3, this.ptr = t3 - 24, this.set_type = function(t4) {
      R[this.ptr + 4 >> 2] = t4;
    }, this.get_type = function() {
      return R[this.ptr + 4 >> 2];
    }, this.set_destructor = function(t4) {
      R[this.ptr + 8 >> 2] = t4;
    }, this.get_destructor = function() {
      return R[this.ptr + 8 >> 2];
    }, this.set_refcount = function(t4) {
      A[this.ptr >> 2] = t4;
    }, this.set_caught = function(t4) {
      t4 = t4 ? 1 : 0, w[this.ptr + 12 >> 0] = t4;
    }, this.get_caught = function() {
      return w[this.ptr + 12 >> 0] != 0;
    }, this.set_rethrown = function(t4) {
      t4 = t4 ? 1 : 0, w[this.ptr + 13 >> 0] = t4;
    }, this.get_rethrown = function() {
      return w[this.ptr + 13 >> 0] != 0;
    }, this.init = function(t4, n3) {
      this.set_adjusted_ptr(0), this.set_type(t4), this.set_destructor(n3), this.set_refcount(0), this.set_caught(false), this.set_rethrown(false);
    }, this.add_ref = function() {
      var t4 = A[this.ptr >> 2];
      A[this.ptr >> 2] = t4 + 1;
    }, this.release_ref = function() {
      var t4 = A[this.ptr >> 2];
      return A[this.ptr >> 2] = t4 - 1, t4 === 1;
    }, this.set_adjusted_ptr = function(t4) {
      R[this.ptr + 16 >> 2] = t4;
    }, this.get_adjusted_ptr = function() {
      return R[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (lt(this.get_type()))
        return R[this.excPtr >> 2];
      var t4 = this.get_adjusted_ptr();
      return t4 !== 0 ? t4 : this.excPtr;
    };
  }
  function rt(t3, n3, e2) {
    throw new et(t3).init(n3, e2), t3;
  }
  function it() {
    L("");
  }
  function ot(t3, n3, e2) {
    b.copyWithin(t3, n3, n3 + e2);
  }
  function ut() {
    return 2147483648;
  }
  function st(t3) {
    try {
      return y.grow(t3 - v.byteLength + 65535 >>> 16), j(y.buffer), 1;
    } catch (n3) {
    }
  }
  function at(t3) {
    var n3 = b.length;
    t3 >>>= 0;
    var e2 = ut();
    if (t3 > e2)
      return false;
    let r3 = (t4, n4) => t4 + (n4 - t4 % n4) % n4;
    for (var i3 = 1; i3 <= 4; i3 *= 2) {
      var o3 = n3 * (1 + 0.2 / i3);
      if (o3 = Math.min(o3, t3 + 100663296), st(Math.min(e2, r3(Math.max(t3, o3), 65536))))
        return true;
    }
    return false;
  }
  var ct = { a: tt, c: nt, b: rt, d: it, f: ot, e: at };
  Q(), t2.___wasm_call_ctors = function() {
    return (t2.___wasm_call_ctors = t2.asm.h).apply(null, arguments);
  }, t2._lerc_getBlobInfo = function() {
    return (t2._lerc_getBlobInfo = t2.asm.i).apply(null, arguments);
  }, t2._lerc_getDataRanges = function() {
    return (t2._lerc_getDataRanges = t2.asm.j).apply(null, arguments);
  }, t2._lerc_decode = function() {
    return (t2._lerc_decode = t2.asm.k).apply(null, arguments);
  }, t2._lerc_decode_4D = function() {
    return (t2._lerc_decode_4D = t2.asm.l).apply(null, arguments);
  };
  var ft = t2._malloc = function() {
    return (ft = t2._malloc = t2.asm.n).apply(null, arguments);
  };
  t2._free = function() {
    return (t2._free = t2.asm.o).apply(null, arguments);
  };
  var pt, lt = t2.___cxa_is_pointer_type = function() {
    return (lt = t2.___cxa_is_pointer_type = t2.asm.p).apply(null, arguments);
  };
  function ht(t3) {
    this.name = "ExitStatus", this.message = "Program terminated with exit(" + t3 + ")", this.status = t3;
  }
  function dt(e2) {
    function r3() {
      pt || (pt = true, t2.calledRun = true, S || (O(), n2(t2), t2.onRuntimeInitialized && t2.onRuntimeInitialized(), W()));
    }
    F > 0 || (M(), F > 0 || (t2.setStatus ? (t2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        t2.setStatus("");
      }, 1), r3();
    }, 1)) : r3()));
  }
  if (B = function t3() {
    pt || dt(), pt || (B = t3);
  }, t2.run = dt, t2.preInit)
    for (typeof t2.preInit == "function" && (t2.preInit = [t2.preInit]); t2.preInit.length > 0; )
      t2.preInit.pop()();
  return dt(), t2.ready;
}, n.exports = r;
const o = t({ __proto__: null, default: i.exports }, [i.exports]);
export { o as l };
