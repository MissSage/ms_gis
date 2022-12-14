function n(n2, t2) {
  for (var e2 = 0; e2 < t2.length; e2++) {
    const r2 = t2[e2];
    if (typeof r2 != "string" && !Array.isArray(r2)) {
      for (const t3 in r2)
        if (t3 !== "default" && !(t3 in n2)) {
          const e3 = Object.getOwnPropertyDescriptor(r2, t3);
          e3 && Object.defineProperty(n2, t3, e3.get ? e3 : { enumerable: true, get: () => r2[t3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
var t, e, r, o = { exports: {} };
t = o, e = function() {
  function n2(n3) {
    const e2 = n3.locateFile, r2 = {};
    var o2 = o2 !== void 0 ? o2 : {};
    const i2 = (() => {
      let n4;
      return { resolve: (t2) => n4(t2), promise: new Promise((t2) => n4 = t2) };
    })(), a = () => i2.promise;
    o2.locateFile = e2, o2.onRuntimeInitialized = () => {
      i2.resolve(r2);
    }, r2.Module = o2, r2.whenLoaded = a;
    var u, s = {};
    for (u in o2)
      o2.hasOwnProperty(u) && (s[u] = o2[u]);
    var f, c, l, p, m, h = typeof window == "object", d = typeof importScripts == "function", y = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", g = "";
    function v(n4) {
      return o2.locateFile ? o2.locateFile(n4, g) : g + n4;
    }
    y ? (g = d ? require("path").dirname(g) + "/" : __dirname + "/", f = function(n4, t2) {
      return p || (p = require("fs")), m || (m = require("path")), n4 = m.normalize(n4), p.readFileSync(n4, t2 ? null : "utf8");
    }, l = function(n4) {
      var t2 = f(n4, true);
      return t2.buffer || (t2 = new Uint8Array(t2)), T(t2.buffer), t2;
    }, c = function(n4, t2, e3) {
      p || (p = require("fs")), m || (m = require("path")), n4 = m.normalize(n4), p.readFile(n4, function(n5, r3) {
        n5 ? e3(n5) : t2(r3.buffer);
      });
    }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), t.exports = o2, process.on("uncaughtException", function(n4) {
      if (!(n4 instanceof Pn))
        throw n4;
    }), process.on("unhandledRejection", Q), o2.inspect = function() {
      return "[Emscripten Module object]";
    }) : (h || d) && (d ? g = self.location.href : typeof document != "undefined" && document.currentScript && (g = document.currentScript.src), g = g.indexOf("blob:") !== 0 ? g.substr(0, g.lastIndexOf("/") + 1) : "", f = function(n4) {
      var t2 = new XMLHttpRequest();
      return t2.open("GET", n4, false), t2.send(null), t2.responseText;
    }, d && (l = function(n4) {
      var t2 = new XMLHttpRequest();
      return t2.open("GET", n4, false), t2.responseType = "arraybuffer", t2.send(null), new Uint8Array(t2.response);
    }), c = function(n4, t2, e3) {
      var r3 = new XMLHttpRequest();
      r3.open("GET", n4, true), r3.responseType = "arraybuffer", r3.onload = function() {
        r3.status == 200 || r3.status == 0 && r3.response ? t2(r3.response) : e3();
      }, r3.onerror = e3, r3.send(null);
    });
    var w = o2.print || console.log.bind(console), b = o2.printErr || console.warn.bind(console);
    for (u in s)
      s.hasOwnProperty(u) && (o2[u] = s[u]);
    s = null, o2.arguments && o2.arguments, o2.thisProgram && o2.thisProgram, o2.quit && o2.quit;
    var A, _, E = 0, R = function(n4) {
      E = n4;
    }, P = function() {
      return E;
    };
    o2.wasmBinary && (A = o2.wasmBinary), o2.noExitRuntime, typeof WebAssembly != "object" && Q("no native wasm support detected");
    var S = false;
    function T(n4, t2) {
      n4 || Q("Assertion failed: " + t2);
    }
    var j, x, I, H, M = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
    function F(n4, t2, e3) {
      for (var r3 = t2 + e3, o3 = t2; n4[o3] && !(o3 >= r3); )
        ++o3;
      if (o3 - t2 > 16 && n4.subarray && M)
        return M.decode(n4.subarray(t2, o3));
      for (var i3 = ""; t2 < o3; ) {
        var a2 = n4[t2++];
        if (128 & a2) {
          var u2 = 63 & n4[t2++];
          if ((224 & a2) != 192) {
            var s2 = 63 & n4[t2++];
            if ((a2 = (240 & a2) == 224 ? (15 & a2) << 12 | u2 << 6 | s2 : (7 & a2) << 18 | u2 << 12 | s2 << 6 | 63 & n4[t2++]) < 65536)
              i3 += String.fromCharCode(a2);
            else {
              var f2 = a2 - 65536;
              i3 += String.fromCharCode(55296 | f2 >> 10, 56320 | 1023 & f2);
            }
          } else
            i3 += String.fromCharCode((31 & a2) << 6 | u2);
        } else
          i3 += String.fromCharCode(a2);
      }
      return i3;
    }
    function q(n4, t2) {
      return n4 ? F(x, n4, t2) : "";
    }
    function C(n4, t2) {
      return n4 % t2 > 0 && (n4 += t2 - n4 % t2), n4;
    }
    function O(n4) {
      j = n4, o2.HEAP8 = new Int8Array(n4), o2.HEAP16 = new Int16Array(n4), o2.HEAP32 = I = new Int32Array(n4), o2.HEAPU8 = x = new Uint8Array(n4), o2.HEAPU16 = new Uint16Array(n4), o2.HEAPU32 = new Uint32Array(n4), o2.HEAPF32 = new Float32Array(n4), o2.HEAPF64 = new Float64Array(n4);
    }
    o2.INITIAL_MEMORY;
    var W = [], U = [], L = [];
    function k() {
      if (o2.preRun)
        for (typeof o2.preRun == "function" && (o2.preRun = [o2.preRun]); o2.preRun.length; )
          z(o2.preRun.shift());
      on(W);
    }
    function B() {
      on(U);
    }
    function D() {
      if (o2.postRun)
        for (typeof o2.postRun == "function" && (o2.postRun = [o2.postRun]); o2.postRun.length; )
          G(o2.postRun.shift());
      on(L);
    }
    function z(n4) {
      W.unshift(n4);
    }
    function N(n4) {
      U.unshift(n4);
    }
    function G(n4) {
      L.unshift(n4);
    }
    var X = 0, Y = null;
    function J(n4) {
      X++, o2.monitorRunDependencies && o2.monitorRunDependencies(X);
    }
    function K(n4) {
      if (X--, o2.monitorRunDependencies && o2.monitorRunDependencies(X), X == 0 && Y) {
        var t2 = Y;
        Y = null, t2();
      }
    }
    function Q(n4) {
      throw o2.onAbort && o2.onAbort(n4), b(n4 += ""), S = true, n4 = "abort(" + n4 + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(n4);
    }
    o2.preloadedImages = {}, o2.preloadedAudios = {};
    var V, Z = "data:application/octet-stream;base64,";
    function $(n4) {
      return n4.startsWith(Z);
    }
    function nn(n4) {
      return n4.startsWith("file://");
    }
    function tn(n4) {
      try {
        if (n4 == V && A)
          return new Uint8Array(A);
        if (l)
          return l(n4);
        throw "both async and sync fetching of the wasm failed";
      } catch (b2) {
        Q(b2);
      }
    }
    function en() {
      if (!A && (h || d)) {
        if (typeof fetch == "function" && !nn(V))
          return fetch(V, { credentials: "same-origin" }).then(function(n4) {
            if (!n4.ok)
              throw "failed to load wasm binary file at '" + V + "'";
            return n4.arrayBuffer();
          }).catch(function() {
            return tn(V);
          });
        if (c)
          return new Promise(function(n4, t2) {
            c(V, function(t3) {
              n4(new Uint8Array(t3));
            }, t2);
          });
      }
      return Promise.resolve().then(function() {
        return tn(V);
      });
    }
    function rn() {
      var n4 = { a: hn };
      function t2(n5, t3) {
        var e4 = n5.exports;
        o2.asm = e4, O((_ = o2.asm.m).buffer), H = o2.asm.q, N(o2.asm.n), K();
      }
      function e3(n5) {
        t2(n5.instance);
      }
      function r3(t3) {
        return en().then(function(t4) {
          return WebAssembly.instantiate(t4, n4);
        }).then(t3, function(n5) {
          b("failed to asynchronously prepare wasm: " + n5), Q(n5);
        });
      }
      function i3() {
        return A || typeof WebAssembly.instantiateStreaming != "function" || $(V) || nn(V) || typeof fetch != "function" ? r3(e3) : fetch(V, { credentials: "same-origin" }).then(function(t3) {
          return WebAssembly.instantiateStreaming(t3, n4).then(e3, function(n5) {
            return b("wasm streaming compile failed: " + n5), b("falling back to ArrayBuffer instantiation"), r3(e3);
          });
        });
      }
      if (J(), o2.instantiateWasm)
        try {
          return o2.instantiateWasm(n4, t2);
        } catch (a2) {
          return b("Module.instantiateWasm callback failed with error: " + a2), false;
        }
      return i3(), {};
    }
    function on(n4) {
      for (; n4.length > 0; ) {
        var t2 = n4.shift();
        if (typeof t2 != "function") {
          var e3 = t2.func;
          typeof e3 == "number" ? t2.arg === void 0 ? H.get(e3)() : H.get(e3)(t2.arg) : e3(t2.arg === void 0 ? null : t2.arg);
        } else
          t2(o2);
      }
    }
    function an() {
      throw "longjmp";
    }
    function un(n4, t2, e3) {
      x.copyWithin(n4, t2, t2 + e3);
    }
    function sn(n4) {
      try {
        return _.grow(n4 - j.byteLength + 65535 >>> 16), O(_.buffer), 1;
      } catch (t2) {
      }
    }
    function fn(n4) {
      var t2 = x.length, e3 = 2147483648;
      if ((n4 >>>= 0) > e3)
        return false;
      for (var r3 = 1; r3 <= 4; r3 *= 2) {
        var o3 = t2 * (1 + 0.2 / r3);
        if (o3 = Math.min(o3, n4 + 100663296), sn(Math.min(e3, C(Math.max(n4, o3), 65536))))
          return true;
      }
      return false;
    }
    $(V = "libtess.wasm") || (V = v(V));
    var cn = { mappings: {}, buffers: [null, [], []], printChar: function(n4, t2) {
      var e3 = cn.buffers[n4];
      t2 === 0 || t2 === 10 ? ((n4 === 1 ? w : b)(F(e3, 0)), e3.length = 0) : e3.push(t2);
    }, varargs: void 0, get: function() {
      return cn.varargs += 4, I[cn.varargs - 4 >> 2];
    }, getStr: function(n4) {
      return q(n4);
    }, get64: function(n4, t2) {
      return n4;
    } };
    function ln(n4, t2, e3, r3) {
      for (var o3 = 0, i3 = 0; i3 < e3; i3++) {
        for (var a2 = I[t2 + 8 * i3 >> 2], u2 = I[t2 + (8 * i3 + 4) >> 2], s2 = 0; s2 < u2; s2++)
          cn.printChar(n4, x[a2 + s2]);
        o3 += u2;
      }
      return I[r3 >> 2] = o3, 0;
    }
    function pn() {
      return P();
    }
    function mn(n4) {
      R(n4);
    }
    var hn = { h: an, l: un, g: fn, f: ln, b: pn, k: _n, d: An, j: En, i: Rn, e: bn, c: wn, a: mn };
    rn(), o2.___wasm_call_ctors = function() {
      return (o2.___wasm_call_ctors = o2.asm.n).apply(null, arguments);
    }, o2._malloc = function() {
      return (o2._malloc = o2.asm.o).apply(null, arguments);
    }, o2._free = function() {
      return (o2._free = o2.asm.p).apply(null, arguments);
    }, o2._triangulate = function() {
      return (o2._triangulate = o2.asm.r).apply(null, arguments);
    };
    var dn, yn = o2.stackSave = function() {
      return (yn = o2.stackSave = o2.asm.s).apply(null, arguments);
    }, gn = o2.stackRestore = function() {
      return (gn = o2.stackRestore = o2.asm.t).apply(null, arguments);
    }, vn = o2._setThrew = function() {
      return (vn = o2._setThrew = o2.asm.u).apply(null, arguments);
    };
    function wn(n4, t2, e3) {
      var r3 = yn();
      try {
        H.get(n4)(t2, e3);
      } catch (o3) {
        if (gn(r3), o3 !== o3 + 0 && o3 !== "longjmp")
          throw o3;
        vn(1, 0);
      }
    }
    function bn(n4, t2) {
      var e3 = yn();
      try {
        H.get(n4)(t2);
      } catch (r3) {
        if (gn(e3), r3 !== r3 + 0 && r3 !== "longjmp")
          throw r3;
        vn(1, 0);
      }
    }
    function An(n4, t2) {
      var e3 = yn();
      try {
        return H.get(n4)(t2);
      } catch (r3) {
        if (gn(e3), r3 !== r3 + 0 && r3 !== "longjmp")
          throw r3;
        vn(1, 0);
      }
    }
    function _n(n4) {
      var t2 = yn();
      try {
        return H.get(n4)();
      } catch (e3) {
        if (gn(t2), e3 !== e3 + 0 && e3 !== "longjmp")
          throw e3;
        vn(1, 0);
      }
    }
    function En(n4, t2, e3) {
      var r3 = yn();
      try {
        return H.get(n4)(t2, e3);
      } catch (o3) {
        if (gn(r3), o3 !== o3 + 0 && o3 !== "longjmp")
          throw o3;
        vn(1, 0);
      }
    }
    function Rn(n4, t2, e3, r3) {
      var o3 = yn();
      try {
        return H.get(n4)(t2, e3, r3);
      } catch (i3) {
        if (gn(o3), i3 !== i3 + 0 && i3 !== "longjmp")
          throw i3;
        vn(1, 0);
      }
    }
    function Pn(n4) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + n4 + ")", this.status = n4;
    }
    function Sn(n4) {
      function t2() {
        dn || (dn = true, o2.calledRun = true, S || (B(), o2.onRuntimeInitialized && o2.onRuntimeInitialized(), D()));
      }
      X > 0 || (k(), X > 0 || (o2.setStatus ? (o2.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          o2.setStatus("");
        }, 1), t2();
      }, 1)) : t2()));
    }
    if (Y = function n4() {
      dn || Sn(), dn || (Y = n4);
    }, o2.run = Sn, o2.preInit)
      for (typeof o2.preInit == "function" && (o2.preInit = [o2.preInit]); o2.preInit.length > 0; )
        o2.preInit.pop()();
    Sn();
    let Tn = null, jn = null, xn = null, In = null;
    const Hn = r2.Module, Mn = 2, Fn = 4e3;
    let qn = 0;
    const Cn = (n4, t2, e3) => {
      Tn || (Tn = Hn._triangulate);
      let r3 = Hn.HEAPF32;
      const o3 = Hn.HEAP32.BYTES_PER_ELEMENT, i3 = 2, a2 = r3.BYTES_PER_ELEMENT;
      e3 > qn && (qn = e3, xn && (Hn._free(xn), xn = 0), jn && (Hn._free(jn), jn = 0)), xn || (xn = Hn._malloc(e3 * a2)), In || (In = Hn._malloc(Fn * o3));
      const u2 = e3 * Mn;
      jn || (jn = Hn._malloc(u2 * a2)), r3 = Hn.HEAPF32, r3.set(n4, xn / a2), Hn.HEAP32.set(t2, In / o3);
      const s2 = u2 / i3, f2 = Tn(xn, In, Math.min(t2.length, Fn), i3, jn, s2), c2 = f2 * i3;
      r3 = Hn.HEAPF32;
      const l2 = r3.slice(jn / a2, jn / a2 + c2), p2 = {};
      return p2.buffer = l2, p2.vertexCount = f2, p2;
    };
    return r2.triangulate = Cn, r2.whenLoaded();
  }
  return { load: n2 };
}, (r = e()) !== void 0 && (t.exports = r);
const i = n({ __proto__: null, default: o.exports }, [o.exports]);
export { i as l };
