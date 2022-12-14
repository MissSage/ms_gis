function n(n2, r2) {
  for (var t2 = 0; t2 < r2.length; t2++) {
    const e2 = r2[t2];
    if (typeof e2 != "string" && !Array.isArray(e2)) {
      for (const r3 in e2)
        if (r3 !== "default" && !(r3 in n2)) {
          const t3 = Object.getOwnPropertyDescriptor(e2, r3);
          t3 && Object.defineProperty(n2, r3, t3.get ? t3 : { enumerable: true, get: () => e2[r3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
var r, t, e, o = { exports: {} };
r = o, t = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0, e = function(n2) {
  var r2, e2, o2 = (n2 = n2 || {}) !== void 0 ? n2 : {};
  o2.ready = new Promise(function(n3, t2) {
    r2 = n3, e2 = t2;
  });
  var i2, a = {};
  for (i2 in o2)
    o2.hasOwnProperty(i2) && (a[i2] = o2[i2]);
  var u = typeof window == "object", c = typeof importScripts == "function";
  typeof process == "object" && typeof process.versions == "object" && process.versions.node;
  var f, s = "";
  function l(n3) {
    return o2.locateFile ? o2.locateFile(n3, s) : s + n3;
  }
  (u || c) && (c ? s = self.location.href : typeof document != "undefined" && document.currentScript && (s = document.currentScript.src), t && (s = t), s = s.indexOf("blob:") !== 0 ? s.substr(0, s.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", c && (f = function(n3) {
    var r3 = new XMLHttpRequest();
    return r3.open("GET", n3, false), r3.responseType = "arraybuffer", r3.send(null), new Uint8Array(r3.response);
  }));
  var p, d, v = o2.print || console.log.bind(console), h = o2.printErr || console.warn.bind(console);
  for (i2 in a)
    a.hasOwnProperty(i2) && (o2[i2] = a[i2]);
  a = null, o2.arguments && o2.arguments, o2.thisProgram && o2.thisProgram, o2.quit && o2.quit, o2.wasmBinary && (p = o2.wasmBinary), o2.noExitRuntime, typeof WebAssembly != "object" && rn("no native wasm support detected");
  var m = false, y = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
  function g(n3, r3, t2) {
    for (var e3 = r3 + t2, o3 = r3; n3[o3] && !(o3 >= e3); )
      ++o3;
    if (o3 - r3 > 16 && n3.subarray && y)
      return y.decode(n3.subarray(r3, o3));
    for (var i3 = ""; r3 < o3; ) {
      var a2 = n3[r3++];
      if (128 & a2) {
        var u2 = 63 & n3[r3++];
        if ((224 & a2) != 192) {
          var c2 = 63 & n3[r3++];
          if ((a2 = (240 & a2) == 224 ? (15 & a2) << 12 | u2 << 6 | c2 : (7 & a2) << 18 | u2 << 12 | c2 << 6 | 63 & n3[r3++]) < 65536)
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
  function _(n3, r3) {
    return n3 ? g(P, n3, r3) : "";
  }
  function w(n3, r3, t2, e3) {
    if (!(e3 > 0))
      return 0;
    for (var o3 = t2, i3 = t2 + e3 - 1, a2 = 0; a2 < n3.length; ++a2) {
      var u2 = n3.charCodeAt(a2);
      if (u2 >= 55296 && u2 <= 57343 && (u2 = 65536 + ((1023 & u2) << 10) | 1023 & n3.charCodeAt(++a2)), u2 <= 127) {
        if (t2 >= i3)
          break;
        r3[t2++] = u2;
      } else if (u2 <= 2047) {
        if (t2 + 1 >= i3)
          break;
        r3[t2++] = 192 | u2 >> 6, r3[t2++] = 128 | 63 & u2;
      } else if (u2 <= 65535) {
        if (t2 + 2 >= i3)
          break;
        r3[t2++] = 224 | u2 >> 12, r3[t2++] = 128 | u2 >> 6 & 63, r3[t2++] = 128 | 63 & u2;
      } else {
        if (t2 + 3 >= i3)
          break;
        r3[t2++] = 240 | u2 >> 18, r3[t2++] = 128 | u2 >> 12 & 63, r3[t2++] = 128 | u2 >> 6 & 63, r3[t2++] = 128 | 63 & u2;
      }
    }
    return r3[t2] = 0, t2 - o3;
  }
  function b(n3, r3, t2) {
    return w(n3, P, r3, t2);
  }
  function A(n3) {
    for (var r3 = 0, t2 = 0; t2 < n3.length; ++t2) {
      var e3 = n3.charCodeAt(t2);
      e3 >= 55296 && e3 <= 57343 && (e3 = 65536 + ((1023 & e3) << 10) | 1023 & n3.charCodeAt(++t2)), e3 <= 127 ? ++r3 : r3 += e3 <= 2047 ? 2 : e3 <= 65535 ? 3 : 4;
    }
    return r3;
  }
  var T, C, P, k, E, W, S, R, F, x, j = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
  function I(n3, r3) {
    for (var t2 = n3, e3 = t2 >> 1, o3 = e3 + r3 / 2; !(e3 >= o3) && E[e3]; )
      ++e3;
    if ((t2 = e3 << 1) - n3 > 32 && j)
      return j.decode(P.subarray(n3, t2));
    for (var i3 = "", a2 = 0; !(a2 >= r3 / 2); ++a2) {
      var u2 = k[n3 + 2 * a2 >> 1];
      if (u2 == 0)
        break;
      i3 += String.fromCharCode(u2);
    }
    return i3;
  }
  function U(n3, r3, t2) {
    if (t2 === void 0 && (t2 = 2147483647), t2 < 2)
      return 0;
    for (var e3 = r3, o3 = (t2 -= 2) < 2 * n3.length ? t2 / 2 : n3.length, i3 = 0; i3 < o3; ++i3) {
      var a2 = n3.charCodeAt(i3);
      k[r3 >> 1] = a2, r3 += 2;
    }
    return k[r3 >> 1] = 0, r3 - e3;
  }
  function O(n3) {
    return 2 * n3.length;
  }
  function D(n3, r3) {
    for (var t2 = 0, e3 = ""; !(t2 >= r3 / 4); ) {
      var o3 = W[n3 + 4 * t2 >> 2];
      if (o3 == 0)
        break;
      if (++t2, o3 >= 65536) {
        var i3 = o3 - 65536;
        e3 += String.fromCharCode(55296 | i3 >> 10, 56320 | 1023 & i3);
      } else
        e3 += String.fromCharCode(o3);
    }
    return e3;
  }
  function H(n3, r3, t2) {
    if (t2 === void 0 && (t2 = 2147483647), t2 < 4)
      return 0;
    for (var e3 = r3, o3 = e3 + t2 - 4, i3 = 0; i3 < n3.length; ++i3) {
      var a2 = n3.charCodeAt(i3);
      if (a2 >= 55296 && a2 <= 57343 && (a2 = 65536 + ((1023 & a2) << 10) | 1023 & n3.charCodeAt(++i3)), W[r3 >> 2] = a2, (r3 += 4) + 4 > o3)
        break;
    }
    return W[r3 >> 2] = 0, r3 - e3;
  }
  function V(n3) {
    for (var r3 = 0, t2 = 0; t2 < n3.length; ++t2) {
      var e3 = n3.charCodeAt(t2);
      e3 >= 55296 && e3 <= 57343 && ++t2, r3 += 4;
    }
    return r3;
  }
  function M(n3, r3) {
    return n3 % r3 > 0 && (n3 += r3 - n3 % r3), n3;
  }
  function z(n3) {
    T = n3, o2.HEAP8 = C = new Int8Array(n3), o2.HEAP16 = k = new Int16Array(n3), o2.HEAP32 = W = new Int32Array(n3), o2.HEAPU8 = P = new Uint8Array(n3), o2.HEAPU16 = E = new Uint16Array(n3), o2.HEAPU32 = S = new Uint32Array(n3), o2.HEAPF32 = R = new Float32Array(n3), o2.HEAPF64 = F = new Float64Array(n3);
  }
  o2.INITIAL_MEMORY;
  var B = [], N = [], q = [];
  function L() {
    if (o2.preRun)
      for (typeof o2.preRun == "function" && (o2.preRun = [o2.preRun]); o2.preRun.length; )
        X(o2.preRun.shift());
    fn(B);
  }
  function G() {
    fn(N);
  }
  function J() {
    if (o2.postRun)
      for (typeof o2.postRun == "function" && (o2.postRun = [o2.postRun]); o2.postRun.length; )
        Z(o2.postRun.shift());
    fn(q);
  }
  function X(n3) {
    B.unshift(n3);
  }
  function Y(n3) {
    N.unshift(n3);
  }
  function Z(n3) {
    q.unshift(n3);
  }
  var $ = 0, K = null;
  function Q(n3) {
    $++, o2.monitorRunDependencies && o2.monitorRunDependencies($);
  }
  function nn(n3) {
    if ($--, o2.monitorRunDependencies && o2.monitorRunDependencies($), $ == 0 && K) {
      var r3 = K;
      K = null, r3();
    }
  }
  function rn(n3) {
    o2.onAbort && o2.onAbort(n3), h(n3 = "Aborted(" + n3 + ")"), m = true, n3 += ". Build with -s ASSERTIONS=1 for more info.";
    var r3 = new WebAssembly.RuntimeError(n3);
    throw e2(r3), r3;
  }
  o2.preloadedImages = {}, o2.preloadedAudios = {};
  var tn, en = "data:application/octet-stream;base64,";
  function on(n3) {
    return n3.startsWith(en);
  }
  function an(n3) {
    try {
      if (n3 == tn && p)
        return new Uint8Array(p);
      if (f)
        return f(n3);
      throw "both async and sync fetching of the wasm failed";
    } catch (h2) {
      rn(h2);
    }
  }
  function un() {
    return p || !u && !c || typeof fetch != "function" ? Promise.resolve().then(function() {
      return an(tn);
    }) : fetch(tn, { credentials: "same-origin" }).then(function(n3) {
      if (!n3.ok)
        throw "failed to load wasm binary file at '" + tn + "'";
      return n3.arrayBuffer();
    }).catch(function() {
      return an(tn);
    });
  }
  function cn() {
    var n3 = { env: Ur, wasi_snapshot_preview1: Ur };
    function r3(n4, r4) {
      var t3 = n4.exports;
      o2.asm = t3, z((d = o2.asm.memory).buffer), x = o2.asm.__indirect_function_table, Y(o2.asm.__wasm_call_ctors), nn();
    }
    function t2(n4) {
      r3(n4.instance);
    }
    function i3(r4) {
      return un().then(function(r5) {
        return WebAssembly.instantiate(r5, n3);
      }).then(function(n4) {
        return n4;
      }).then(r4, function(n4) {
        h("failed to asynchronously prepare wasm: " + n4), rn(n4);
      });
    }
    function a2() {
      return p || typeof WebAssembly.instantiateStreaming != "function" || on(tn) || typeof fetch != "function" ? i3(t2) : fetch(tn, { credentials: "same-origin" }).then(function(r4) {
        return WebAssembly.instantiateStreaming(r4, n3).then(t2, function(n4) {
          return h("wasm streaming compile failed: " + n4), h("falling back to ArrayBuffer instantiation"), i3(t2);
        });
      });
    }
    if (Q(), o2.instantiateWasm)
      try {
        return o2.instantiateWasm(n3, r3);
      } catch (u2) {
        return h("Module.instantiateWasm callback failed with error: " + u2), false;
      }
    return a2().catch(e2), {};
  }
  function fn(n3) {
    for (; n3.length > 0; ) {
      var r3 = n3.shift();
      if (typeof r3 != "function") {
        var t2 = r3.func;
        typeof t2 == "number" ? r3.arg === void 0 ? ln(t2)() : ln(t2)(r3.arg) : t2(r3.arg === void 0 ? null : r3.arg);
      } else
        r3(o2);
    }
  }
  on(tn = "i3s.wasm") || (tn = l(tn));
  var sn = [];
  function ln(n3) {
    var r3 = sn[n3];
    return r3 || (n3 >= sn.length && (sn.length = n3 + 1), sn[n3] = r3 = x.get(n3)), r3;
  }
  function pn(n3, r3) {
    ln(n3)(r3);
  }
  function dn(n3) {
    return Dr(n3 + 16) + 16;
  }
  function vn(n3, r3) {
  }
  function hn(n3, r3) {
    return vn();
  }
  function mn(n3) {
    this.excPtr = n3, this.ptr = n3 - 16, this.set_type = function(n4) {
      W[this.ptr + 4 >> 2] = n4;
    }, this.get_type = function() {
      return W[this.ptr + 4 >> 2];
    }, this.set_destructor = function(n4) {
      W[this.ptr + 8 >> 2] = n4;
    }, this.get_destructor = function() {
      return W[this.ptr + 8 >> 2];
    }, this.set_refcount = function(n4) {
      W[this.ptr >> 2] = n4;
    }, this.set_caught = function(n4) {
      n4 = n4 ? 1 : 0, C[this.ptr + 12 >> 0] = n4;
    }, this.get_caught = function() {
      return C[this.ptr + 12 >> 0] != 0;
    }, this.set_rethrown = function(n4) {
      n4 = n4 ? 1 : 0, C[this.ptr + 13 >> 0] = n4;
    }, this.get_rethrown = function() {
      return C[this.ptr + 13 >> 0] != 0;
    }, this.init = function(n4, r3) {
      this.set_type(n4), this.set_destructor(r3), this.set_refcount(0), this.set_caught(false), this.set_rethrown(false);
    }, this.add_ref = function() {
      var n4 = W[this.ptr >> 2];
      W[this.ptr >> 2] = n4 + 1;
    }, this.release_ref = function() {
      var n4 = W[this.ptr >> 2];
      return W[this.ptr >> 2] = n4 - 1, n4 === 1;
    };
  }
  function yn(n3, r3, t2) {
    throw new mn(n3).init(r3, t2), n3;
  }
  var gn = {};
  function _n(n3) {
    for (; n3.length; ) {
      var r3 = n3.pop();
      n3.pop()(r3);
    }
  }
  function wn(n3) {
    return this.fromWireType(S[n3 >> 2]);
  }
  var bn = {}, An = {}, Tn = {}, Cn = 48, Pn = 57;
  function kn(n3) {
    if (n3 === void 0)
      return "_unknown";
    var r3 = (n3 = n3.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return r3 >= Cn && r3 <= Pn ? "_" + n3 : n3;
  }
  function En(n3, r3) {
    return n3 = kn(n3), function() {
      return r3.apply(this, arguments);
    };
  }
  function Wn(n3, r3) {
    var t2 = En(r3, function(n4) {
      this.name = r3, this.message = n4;
      var t3 = new Error(n4).stack;
      t3 !== void 0 && (this.stack = this.toString() + "\n" + t3.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t2.prototype = Object.create(n3.prototype), t2.prototype.constructor = t2, t2.prototype.toString = function() {
      return this.message === void 0 ? this.name : this.name + ": " + this.message;
    }, t2;
  }
  var Sn = void 0;
  function Rn(n3) {
    throw new Sn(n3);
  }
  function Fn(n3, r3, t2) {
    function e3(r4) {
      var e4 = t2(r4);
      e4.length !== n3.length && Rn("Mismatched type converter count");
      for (var o4 = 0; o4 < n3.length; ++o4)
        Mn(n3[o4], e4[o4]);
    }
    n3.forEach(function(n4) {
      Tn[n4] = r3;
    });
    var o3 = new Array(r3.length), i3 = [], a2 = 0;
    r3.forEach(function(n4, r4) {
      An.hasOwnProperty(n4) ? o3[r4] = An[n4] : (i3.push(n4), bn.hasOwnProperty(n4) || (bn[n4] = []), bn[n4].push(function() {
        o3[r4] = An[n4], ++a2 === i3.length && e3(o3);
      }));
    }), i3.length === 0 && e3(o3);
  }
  function xn(n3) {
    var r3 = gn[n3];
    delete gn[n3];
    var t2 = r3.rawConstructor, e3 = r3.rawDestructor, o3 = r3.fields;
    Fn([n3], o3.map(function(n4) {
      return n4.getterReturnType;
    }).concat(o3.map(function(n4) {
      return n4.setterArgumentType;
    })), function(n4) {
      var i3 = {};
      return o3.forEach(function(r4, t3) {
        var e4 = r4.fieldName, a2 = n4[t3], u2 = r4.getter, c2 = r4.getterContext, f2 = n4[t3 + o3.length], s2 = r4.setter, l2 = r4.setterContext;
        i3[e4] = { read: function(n5) {
          return a2.fromWireType(u2(c2, n5));
        }, write: function(n5, r5) {
          var t4 = [];
          s2(l2, n5, f2.toWireType(t4, r5)), _n(t4);
        } };
      }), [{ name: r3.name, fromWireType: function(n5) {
        var r4 = {};
        for (var t3 in i3)
          r4[t3] = i3[t3].read(n5);
        return e3(n5), r4;
      }, toWireType: function(n5, r4) {
        for (var o4 in i3)
          if (!(o4 in r4))
            throw new TypeError('Missing field:  "' + o4 + '"');
        var a2 = t2();
        for (o4 in i3)
          i3[o4].write(a2, r4[o4]);
        return n5 !== null && n5.push(e3, a2), a2;
      }, argPackAdvance: 8, readValueFromPointer: wn, destructorFunction: e3 }];
    });
  }
  function jn(n3, r3, t2, e3, o3) {
  }
  function In(n3) {
    switch (n3) {
      case 1:
        return 0;
      case 2:
        return 1;
      case 4:
        return 2;
      case 8:
        return 3;
      default:
        throw new TypeError("Unknown type size: " + n3);
    }
  }
  function Un() {
    for (var n3 = new Array(256), r3 = 0; r3 < 256; ++r3)
      n3[r3] = String.fromCharCode(r3);
    On = n3;
  }
  var On = void 0;
  function Dn(n3) {
    for (var r3 = "", t2 = n3; P[t2]; )
      r3 += On[P[t2++]];
    return r3;
  }
  var Hn = void 0;
  function Vn(n3) {
    throw new Hn(n3);
  }
  function Mn(n3, r3, t2) {
    if (t2 = t2 || {}, !("argPackAdvance" in r3))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    var e3 = r3.name;
    if (n3 || Vn('type "' + e3 + '" must have a positive integer typeid pointer'), An.hasOwnProperty(n3)) {
      if (t2.ignoreDuplicateRegistrations)
        return;
      Vn("Cannot register type '" + e3 + "' twice");
    }
    if (An[n3] = r3, delete Tn[n3], bn.hasOwnProperty(n3)) {
      var o3 = bn[n3];
      delete bn[n3], o3.forEach(function(n4) {
        n4();
      });
    }
  }
  function zn(n3, r3, t2, e3, o3) {
    var i3 = In(t2);
    Mn(n3, { name: r3 = Dn(r3), fromWireType: function(n4) {
      return !!n4;
    }, toWireType: function(n4, r4) {
      return r4 ? e3 : o3;
    }, argPackAdvance: 8, readValueFromPointer: function(n4) {
      var e4;
      if (t2 === 1)
        e4 = C;
      else if (t2 === 2)
        e4 = k;
      else {
        if (t2 !== 4)
          throw new TypeError("Unknown boolean type size: " + r3);
        e4 = W;
      }
      return this.fromWireType(e4[n4 >> i3]);
    }, destructorFunction: null });
  }
  var Bn = [], Nn = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
  function qn(n3) {
    n3 > 4 && --Nn[n3].refcount == 0 && (Nn[n3] = void 0, Bn.push(n3));
  }
  function Ln() {
    for (var n3 = 0, r3 = 5; r3 < Nn.length; ++r3)
      Nn[r3] !== void 0 && ++n3;
    return n3;
  }
  function Gn() {
    for (var n3 = 5; n3 < Nn.length; ++n3)
      if (Nn[n3] !== void 0)
        return Nn[n3];
    return null;
  }
  function Jn() {
    o2.count_emval_handles = Ln, o2.get_first_emval = Gn;
  }
  var Xn = { toValue: function(n3) {
    return n3 || Vn("Cannot use deleted val. handle = " + n3), Nn[n3].value;
  }, toHandle: function(n3) {
    switch (n3) {
      case void 0:
        return 1;
      case null:
        return 2;
      case true:
        return 3;
      case false:
        return 4;
      default:
        var r3 = Bn.length ? Bn.pop() : Nn.length;
        return Nn[r3] = { refcount: 1, value: n3 }, r3;
    }
  } };
  function Yn(n3, r3) {
    Mn(n3, { name: r3 = Dn(r3), fromWireType: function(n4) {
      var r4 = Xn.toValue(n4);
      return qn(n4), r4;
    }, toWireType: function(n4, r4) {
      return Xn.toHandle(r4);
    }, argPackAdvance: 8, readValueFromPointer: wn, destructorFunction: null });
  }
  function Zn(n3) {
    if (n3 === null)
      return "null";
    var r3 = typeof n3;
    return r3 === "object" || r3 === "array" || r3 === "function" ? n3.toString() : "" + n3;
  }
  function $n(n3, r3) {
    switch (r3) {
      case 2:
        return function(n4) {
          return this.fromWireType(R[n4 >> 2]);
        };
      case 3:
        return function(n4) {
          return this.fromWireType(F[n4 >> 3]);
        };
      default:
        throw new TypeError("Unknown float type: " + n3);
    }
  }
  function Kn(n3, r3, t2) {
    var e3 = In(t2);
    Mn(n3, { name: r3 = Dn(r3), fromWireType: function(n4) {
      return n4;
    }, toWireType: function(n4, r4) {
      if (typeof r4 != "number" && typeof r4 != "boolean")
        throw new TypeError('Cannot convert "' + Zn(r4) + '" to ' + this.name);
      return r4;
    }, argPackAdvance: 8, readValueFromPointer: $n(r3, e3), destructorFunction: null });
  }
  function Qn(n3, r3, t2, e3, o3) {
    var i3 = r3.length;
    i3 < 2 && Vn("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var a2 = r3[1] !== null && t2 !== null, u2 = false, c2 = 1; c2 < r3.length; ++c2)
      if (r3[c2] !== null && r3[c2].destructorFunction === void 0) {
        u2 = true;
        break;
      }
    var f2 = r3[0].name !== "void", s2 = i3 - 2, l2 = new Array(s2), p2 = [], d2 = [];
    return function() {
      var t3;
      arguments.length !== s2 && Vn("function " + n3 + " called with " + arguments.length + " arguments, expected " + s2 + " args!"), d2.length = 0, p2.length = a2 ? 2 : 1, p2[0] = o3, a2 && (t3 = r3[1].toWireType(d2, this), p2[1] = t3);
      for (var i4 = 0; i4 < s2; ++i4)
        l2[i4] = r3[i4 + 2].toWireType(d2, arguments[i4]), p2.push(l2[i4]);
      function c3(n4) {
        if (u2)
          _n(d2);
        else
          for (var e4 = a2 ? 1 : 2; e4 < r3.length; e4++) {
            var o4 = e4 === 1 ? t3 : l2[e4 - 2];
            r3[e4].destructorFunction !== null && r3[e4].destructorFunction(o4);
          }
        if (f2)
          return r3[0].fromWireType(n4);
      }
      return c3(e3.apply(null, p2));
    };
  }
  function nr(n3, r3, t2) {
    if (n3[r3].overloadTable === void 0) {
      var e3 = n3[r3];
      n3[r3] = function() {
        return n3[r3].overloadTable.hasOwnProperty(arguments.length) || Vn("Function '" + t2 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n3[r3].overloadTable + ")!"), n3[r3].overloadTable[arguments.length].apply(this, arguments);
      }, n3[r3].overloadTable = [], n3[r3].overloadTable[e3.argCount] = e3;
    }
  }
  function rr(n3, r3, t2) {
    o2.hasOwnProperty(n3) ? ((t2 === void 0 || o2[n3].overloadTable !== void 0 && o2[n3].overloadTable[t2] !== void 0) && Vn("Cannot register public name '" + n3 + "' twice"), nr(o2, n3, n3), o2.hasOwnProperty(t2) && Vn("Cannot register multiple overloads of a function with the same number of arguments (" + t2 + ")!"), o2[n3].overloadTable[t2] = r3) : (o2[n3] = r3, t2 !== void 0 && (o2[n3].numArguments = t2));
  }
  function tr(n3, r3) {
    for (var t2 = [], e3 = 0; e3 < n3; e3++)
      t2.push(W[(r3 >> 2) + e3]);
    return t2;
  }
  function er(n3, r3, t2) {
    o2.hasOwnProperty(n3) || Rn("Replacing nonexistant public symbol"), o2[n3].overloadTable !== void 0 && t2 !== void 0 ? o2[n3].overloadTable[t2] = r3 : (o2[n3] = r3, o2[n3].argCount = t2);
  }
  function or(n3, r3, t2) {
    var e3 = o2["dynCall_" + n3];
    return t2 && t2.length ? e3.apply(null, [r3].concat(t2)) : e3.call(null, r3);
  }
  function ir(n3, r3, t2) {
    return n3.includes("j") ? or(n3, r3, t2) : ln(r3).apply(null, t2);
  }
  function ar(n3, r3) {
    var t2 = [];
    return function() {
      t2.length = arguments.length;
      for (var e3 = 0; e3 < arguments.length; e3++)
        t2[e3] = arguments[e3];
      return ir(n3, r3, t2);
    };
  }
  function ur(n3, r3) {
    function t2() {
      return n3.includes("j") ? ar(n3, r3) : ln(r3);
    }
    n3 = Dn(n3);
    var e3 = t2();
    return typeof e3 != "function" && Vn("unknown function pointer with signature " + n3 + ": " + r3), e3;
  }
  var cr = void 0;
  function fr(n3) {
    var r3 = Vr(n3), t2 = Dn(r3);
    return Hr(r3), t2;
  }
  function sr(n3, r3) {
    var t2 = [], e3 = {};
    function o3(n4) {
      e3[n4] || An[n4] || (Tn[n4] ? Tn[n4].forEach(o3) : (t2.push(n4), e3[n4] = true));
    }
    throw r3.forEach(o3), new cr(n3 + ": " + t2.map(fr).join([", "]));
  }
  function lr(n3, r3, t2, e3, o3, i3) {
    var a2 = tr(r3, t2);
    n3 = Dn(n3), o3 = ur(e3, o3), rr(n3, function() {
      sr("Cannot call " + n3 + " due to unbound types", a2);
    }, r3 - 1), Fn([], a2, function(t3) {
      var e4 = [t3[0], null].concat(t3.slice(1));
      return er(n3, Qn(n3, e4, null, o3, i3), r3 - 1), [];
    });
  }
  function pr(n3, r3, t2) {
    switch (r3) {
      case 0:
        return t2 ? function(n4) {
          return C[n4];
        } : function(n4) {
          return P[n4];
        };
      case 1:
        return t2 ? function(n4) {
          return k[n4 >> 1];
        } : function(n4) {
          return E[n4 >> 1];
        };
      case 2:
        return t2 ? function(n4) {
          return W[n4 >> 2];
        } : function(n4) {
          return S[n4 >> 2];
        };
      default:
        throw new TypeError("Unknown integer type: " + n3);
    }
  }
  function dr(n3, r3, t2, e3, o3) {
    r3 = Dn(r3), o3 === -1 && (o3 = 4294967295);
    var i3 = In(t2), a2 = function(n4) {
      return n4;
    };
    if (e3 === 0) {
      var u2 = 32 - 8 * t2;
      a2 = function(n4) {
        return n4 << u2 >>> u2;
      };
    }
    var c2 = r3.includes("unsigned");
    Mn(n3, { name: r3, fromWireType: a2, toWireType: function(n4, t3) {
      if (typeof t3 != "number" && typeof t3 != "boolean")
        throw new TypeError('Cannot convert "' + Zn(t3) + '" to ' + this.name);
      if (t3 < e3 || t3 > o3)
        throw new TypeError('Passing a number "' + Zn(t3) + '" from JS side to C/C++ side to an argument of type "' + r3 + '", which is outside the valid range [' + e3 + ", " + o3 + "]!");
      return c2 ? t3 >>> 0 : 0 | t3;
    }, argPackAdvance: 8, readValueFromPointer: pr(r3, i3, e3 !== 0), destructorFunction: null });
  }
  function vr(n3, r3, t2) {
    var e3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r3];
    function o3(n4) {
      var r4 = S, t3 = r4[n4 >>= 2], o4 = r4[n4 + 1];
      return new e3(T, o4, t3);
    }
    Mn(n3, { name: t2 = Dn(t2), fromWireType: o3, argPackAdvance: 8, readValueFromPointer: o3 }, { ignoreDuplicateRegistrations: true });
  }
  function hr(n3, r3) {
    var t2 = (r3 = Dn(r3)) === "std::string";
    Mn(n3, { name: r3, fromWireType: function(n4) {
      var r4, e3 = S[n4 >> 2];
      if (t2)
        for (var o3 = n4 + 4, i3 = 0; i3 <= e3; ++i3) {
          var a2 = n4 + 4 + i3;
          if (i3 == e3 || P[a2] == 0) {
            var u2 = _(o3, a2 - o3);
            r4 === void 0 ? r4 = u2 : (r4 += String.fromCharCode(0), r4 += u2), o3 = a2 + 1;
          }
        }
      else {
        var c2 = new Array(e3);
        for (i3 = 0; i3 < e3; ++i3)
          c2[i3] = String.fromCharCode(P[n4 + 4 + i3]);
        r4 = c2.join("");
      }
      return Hr(n4), r4;
    }, toWireType: function(n4, r4) {
      r4 instanceof ArrayBuffer && (r4 = new Uint8Array(r4));
      var e3 = typeof r4 == "string";
      e3 || r4 instanceof Uint8Array || r4 instanceof Uint8ClampedArray || r4 instanceof Int8Array || Vn("Cannot pass non-string to std::string");
      var o3 = (t2 && e3 ? function() {
        return A(r4);
      } : function() {
        return r4.length;
      })(), i3 = Dr(4 + o3 + 1);
      if (S[i3 >> 2] = o3, t2 && e3)
        b(r4, i3 + 4, o3 + 1);
      else if (e3)
        for (var a2 = 0; a2 < o3; ++a2) {
          var u2 = r4.charCodeAt(a2);
          u2 > 255 && (Hr(i3), Vn("String has UTF-16 code units that do not fit in 8 bits")), P[i3 + 4 + a2] = u2;
        }
      else
        for (a2 = 0; a2 < o3; ++a2)
          P[i3 + 4 + a2] = r4[a2];
      return n4 !== null && n4.push(Hr, i3), i3;
    }, argPackAdvance: 8, readValueFromPointer: wn, destructorFunction: function(n4) {
      Hr(n4);
    } });
  }
  function mr(n3, r3, t2) {
    var e3, o3, i3, a2, u2;
    t2 = Dn(t2), r3 === 2 ? (e3 = I, o3 = U, a2 = O, i3 = function() {
      return E;
    }, u2 = 1) : r3 === 4 && (e3 = D, o3 = H, a2 = V, i3 = function() {
      return S;
    }, u2 = 2), Mn(n3, { name: t2, fromWireType: function(n4) {
      for (var t3, o4 = S[n4 >> 2], a3 = i3(), c2 = n4 + 4, f2 = 0; f2 <= o4; ++f2) {
        var s2 = n4 + 4 + f2 * r3;
        if (f2 == o4 || a3[s2 >> u2] == 0) {
          var l2 = e3(c2, s2 - c2);
          t3 === void 0 ? t3 = l2 : (t3 += String.fromCharCode(0), t3 += l2), c2 = s2 + r3;
        }
      }
      return Hr(n4), t3;
    }, toWireType: function(n4, e4) {
      typeof e4 != "string" && Vn("Cannot pass non-string to C++ string type " + t2);
      var i4 = a2(e4), c2 = Dr(4 + i4 + r3);
      return S[c2 >> 2] = i4 >> u2, o3(e4, c2 + 4, i4 + r3), n4 !== null && n4.push(Hr, c2), c2;
    }, argPackAdvance: 8, readValueFromPointer: wn, destructorFunction: function(n4) {
      Hr(n4);
    } });
  }
  function yr(n3, r3, t2, e3, o3, i3) {
    gn[n3] = { name: Dn(r3), rawConstructor: ur(t2, e3), rawDestructor: ur(o3, i3), fields: [] };
  }
  function gr(n3, r3, t2, e3, o3, i3, a2, u2, c2, f2) {
    gn[n3].fields.push({ fieldName: Dn(r3), getterReturnType: t2, getter: ur(e3, o3), getterContext: i3, setterArgumentType: a2, setter: ur(u2, c2), setterContext: f2 });
  }
  function _r(n3, r3) {
    Mn(n3, { isVoid: true, name: r3 = Dn(r3), argPackAdvance: 0, fromWireType: function() {
    }, toWireType: function(n4, r4) {
    } });
  }
  function wr(n3) {
    n3 > 4 && (Nn[n3].refcount += 1);
  }
  var br = {};
  function Ar(n3) {
    var r3 = br[n3];
    return r3 === void 0 ? Dn(n3) : r3;
  }
  function Tr(n3) {
    return Xn.toHandle(Ar(n3));
  }
  function Cr(n3, r3) {
    var t2 = An[n3];
    return t2 === void 0 && Vn(r3 + " has unknown type " + fr(n3)), t2;
  }
  function Pr(n3, r3) {
    var t2 = (n3 = Cr(n3, "_emval_take_value")).readValueFromPointer(r3);
    return Xn.toHandle(t2);
  }
  function kr() {
    rn("");
  }
  function Er(n3, r3, t2) {
    P.copyWithin(n3, r3, r3 + t2);
  }
  function Wr(n3) {
    try {
      return d.grow(n3 - T.byteLength + 65535 >>> 16), z(d.buffer), 1;
    } catch (r3) {
    }
  }
  function Sr(n3) {
    var r3 = P.length, t2 = 2147483648;
    if ((n3 >>>= 0) > t2)
      return false;
    for (var e3 = 1; e3 <= 4; e3 *= 2) {
      var o3 = r3 * (1 + 0.2 / e3);
      if (o3 = Math.min(o3, n3 + 100663296), Wr(Math.min(t2, M(Math.max(n3, o3), 65536))))
        return true;
    }
    return false;
  }
  var Rr = { mappings: {}, buffers: [null, [], []], printChar: function(n3, r3) {
    var t2 = Rr.buffers[n3];
    r3 === 0 || r3 === 10 ? ((n3 === 1 ? v : h)(g(t2, 0)), t2.length = 0) : t2.push(r3);
  }, varargs: void 0, get: function() {
    return Rr.varargs += 4, W[Rr.varargs - 4 >> 2];
  }, getStr: function(n3) {
    return _(n3);
  }, get64: function(n3, r3) {
    return n3;
  } };
  function Fr(n3) {
    return 0;
  }
  function xr(n3, r3, t2, e3, o3) {
  }
  function jr(n3, r3, t2, e3) {
    for (var o3 = 0, i3 = 0; i3 < t2; i3++) {
      var a2 = W[r3 >> 2], u2 = W[r3 + 4 >> 2];
      r3 += 8;
      for (var c2 = 0; c2 < u2; c2++)
        Rr.printChar(n3, P[a2 + c2]);
      o3 += u2;
    }
    return W[e3 >> 2] = o3, 0;
  }
  function Ir(n3) {
  }
  Sn = o2.InternalError = Wn(Error, "InternalError"), Un(), Hn = o2.BindingError = Wn(Error, "BindingError"), Jn(), cr = o2.UnboundTypeError = Wn(Error, "UnboundTypeError");
  var Ur = { __call_sighandler: pn, __cxa_allocate_exception: dn, __cxa_atexit: hn, __cxa_throw: yn, _embind_finalize_value_object: xn, _embind_register_bigint: jn, _embind_register_bool: zn, _embind_register_emval: Yn, _embind_register_float: Kn, _embind_register_function: lr, _embind_register_integer: dr, _embind_register_memory_view: vr, _embind_register_std_string: hr, _embind_register_std_wstring: mr, _embind_register_value_object: yr, _embind_register_value_object_field: gr, _embind_register_void: _r, _emval_decref: qn, _emval_incref: wr, _emval_new_cstring: Tr, _emval_take_value: Pr, abort: kr, emscripten_memcpy_big: Er, emscripten_resize_heap: Sr, fd_close: Fr, fd_seek: xr, fd_write: jr, setTempRet0: Ir };
  cn(), o2.___wasm_call_ctors = function() {
    return (o2.___wasm_call_ctors = o2.asm.__wasm_call_ctors).apply(null, arguments);
  };
  var Or, Dr = o2._malloc = function() {
    return (Dr = o2._malloc = o2.asm.malloc).apply(null, arguments);
  }, Hr = o2._free = function() {
    return (Hr = o2._free = o2.asm.free).apply(null, arguments);
  }, Vr = o2.___getTypeName = function() {
    return (Vr = o2.___getTypeName = o2.asm.__getTypeName).apply(null, arguments);
  };
  function Mr(n3) {
    function t2() {
      Or || (Or = true, o2.calledRun = true, m || (G(), r2(o2), o2.onRuntimeInitialized && o2.onRuntimeInitialized(), J()));
    }
    $ > 0 || (L(), $ > 0 || (o2.setStatus ? (o2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        o2.setStatus("");
      }, 1), t2();
    }, 1)) : t2()));
  }
  if (o2.___embind_register_native_and_builtin_types = function() {
    return (o2.___embind_register_native_and_builtin_types = o2.asm.__embind_register_native_and_builtin_types).apply(null, arguments);
  }, o2.___errno_location = function() {
    return (o2.___errno_location = o2.asm.__errno_location).apply(null, arguments);
  }, o2.stackSave = function() {
    return (o2.stackSave = o2.asm.stackSave).apply(null, arguments);
  }, o2.stackRestore = function() {
    return (o2.stackRestore = o2.asm.stackRestore).apply(null, arguments);
  }, o2.stackAlloc = function() {
    return (o2.stackAlloc = o2.asm.stackAlloc).apply(null, arguments);
  }, o2.dynCall_vij = function() {
    return (o2.dynCall_vij = o2.asm.dynCall_vij).apply(null, arguments);
  }, o2.dynCall_jiji = function() {
    return (o2.dynCall_jiji = o2.asm.dynCall_jiji).apply(null, arguments);
  }, K = function n3() {
    Or || Mr(), Or || (K = n3);
  }, o2.run = Mr, o2.preInit)
    for (typeof o2.preInit == "function" && (o2.preInit = [o2.preInit]); o2.preInit.length > 0; )
      o2.preInit.pop()();
  return Mr(), n2.ready;
}, r.exports = e;
const i = n({ __proto__: null, default: o.exports }, [o.exports]);
export { i };
