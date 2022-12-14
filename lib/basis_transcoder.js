import { e as e$1 } from "./_commonjsHelpers.js";
function n(t, n2) {
  for (var e2 = 0; e2 < n2.length; e2++) {
    const r2 = n2[e2];
    if (typeof r2 != "string" && !Array.isArray(r2)) {
      for (const n3 in r2)
        if (n3 !== "default" && !(n3 in t)) {
          const e3 = Object.getOwnPropertyDescriptor(r2, n3);
          e3 && Object.defineProperty(t, n3, e3.get ? e3 : { enumerable: true, get: () => r2[n3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var e, r, i, o = { exports: {} };
e = o, r = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0, typeof __filename != "undefined" && (r = r || __filename), i = function(n2) {
  var e2, i2, o2 = (n2 = n2 || {}) !== void 0 ? n2 : {};
  o2.ready = new Promise(function(t, n3) {
    e2 = t, i2 = n3;
  });
  var a2, u = {};
  for (a2 in o2)
    o2.hasOwnProperty(a2) && (u[a2] = o2[a2]);
  var s = false, c = false, l = false, f = false;
  s = typeof window == "object", c = typeof importScripts == "function", l = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", f = !s && !l && !c;
  var p, d, y, h, v = "";
  function m(t) {
    return o2.locateFile ? o2.locateFile(t, v) : v + t;
  }
  l ? (v = c ? require("path").dirname(v) + "/" : __dirname + "/", p = function(t, n3) {
    return y || (y = require("fs")), h || (h = require("path")), t = h.normalize(t), y.readFileSync(t, n3 ? null : "utf8");
  }, d = function(t) {
    var n3 = p(t, true);
    return n3.buffer || (n3 = new Uint8Array(n3)), _(n3.buffer), n3;
  }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(t) {
    if (!(t instanceof Qe))
      throw t;
  }), process.on("unhandledRejection", vt), o2.inspect = function() {
    return "[Emscripten Module object]";
  }) : f ? (typeof read != "undefined" && (p = function(t) {
    return read(t);
  }), d = function(t) {
    var n3;
    return typeof readbuffer == "function" ? new Uint8Array(readbuffer(t)) : (_(typeof (n3 = read(t, "binary")) == "object"), n3);
  }, typeof scriptArgs != "undefined" && scriptArgs, typeof print != "undefined" && (typeof console == "undefined" && (console = {}), console.log = print, console.warn = console.error = typeof printErr != "undefined" ? printErr : print)) : (s || c) && (c ? v = self.location.href : document.currentScript && (v = document.currentScript.src), r && (v = r), v = v.indexOf("blob:") !== 0 ? v.substr(0, v.lastIndexOf("/") + 1) : "", p = function(t) {
    var n3 = new XMLHttpRequest();
    return n3.open("GET", t, false), n3.send(null), n3.responseText;
  }, c && (d = function(t) {
    var n3 = new XMLHttpRequest();
    return n3.open("GET", t, false), n3.responseType = "arraybuffer", n3.send(null), new Uint8Array(n3.response);
  }));
  var g, b, $ = o2.print || console.log.bind(console), C = o2.printErr || console.warn.bind(console);
  for (a2 in u)
    u.hasOwnProperty(a2) && (o2[a2] = u[a2]);
  u = null, o2.arguments && o2.arguments, o2.thisProgram && o2.thisProgram, o2.quit && o2.quit, o2.wasmBinary && (g = o2.wasmBinary), o2.noExitRuntime && o2.noExitRuntime, typeof WebAssembly != "object" && vt("no native wasm support detected");
  var w = new WebAssembly.Table({ initial: 157, maximum: 157, element: "anyfunc" }), T = false;
  function _(t, n3) {
    t || vt("Assertion failed: " + n3);
  }
  var P = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
  function A(t, n3, e3) {
    for (var r2 = n3 + e3, i3 = n3; t[i3] && !(i3 >= r2); )
      ++i3;
    if (i3 - n3 > 16 && t.subarray && P)
      return P.decode(t.subarray(n3, i3));
    for (var o3 = ""; n3 < i3; ) {
      var a3 = t[n3++];
      if (128 & a3) {
        var u2 = 63 & t[n3++];
        if ((224 & a3) != 192) {
          var s2 = 63 & t[n3++];
          if ((a3 = (240 & a3) == 224 ? (15 & a3) << 12 | u2 << 6 | s2 : (7 & a3) << 18 | u2 << 12 | s2 << 6 | 63 & t[n3++]) < 65536)
            o3 += String.fromCharCode(a3);
          else {
            var c2 = a3 - 65536;
            o3 += String.fromCharCode(55296 | c2 >> 10, 56320 | 1023 & c2);
          }
        } else
          o3 += String.fromCharCode((31 & a3) << 6 | u2);
      } else
        o3 += String.fromCharCode(a3);
    }
    return o3;
  }
  function W(t, n3) {
    return t ? A(V, t, n3) : "";
  }
  function E(t, n3, e3, r2) {
    if (!(r2 > 0))
      return 0;
    for (var i3 = e3, o3 = e3 + r2 - 1, a3 = 0; a3 < t.length; ++a3) {
      var u2 = t.charCodeAt(a3);
      if (u2 >= 55296 && u2 <= 57343 && (u2 = 65536 + ((1023 & u2) << 10) | 1023 & t.charCodeAt(++a3)), u2 <= 127) {
        if (e3 >= o3)
          break;
        n3[e3++] = u2;
      } else if (u2 <= 2047) {
        if (e3 + 1 >= o3)
          break;
        n3[e3++] = 192 | u2 >> 6, n3[e3++] = 128 | 63 & u2;
      } else if (u2 <= 65535) {
        if (e3 + 2 >= o3)
          break;
        n3[e3++] = 224 | u2 >> 12, n3[e3++] = 128 | u2 >> 6 & 63, n3[e3++] = 128 | 63 & u2;
      } else {
        if (e3 + 3 >= o3)
          break;
        n3[e3++] = 240 | u2 >> 18, n3[e3++] = 128 | u2 >> 12 & 63, n3[e3++] = 128 | u2 >> 6 & 63, n3[e3++] = 128 | 63 & u2;
      }
    }
    return n3[e3] = 0, e3 - i3;
  }
  function S(t, n3, e3) {
    return E(t, V, n3, e3);
  }
  function j(t) {
    for (var n3 = 0, e3 = 0; e3 < t.length; ++e3) {
      var r2 = t.charCodeAt(e3);
      r2 >= 55296 && r2 <= 57343 && (r2 = 65536 + ((1023 & r2) << 10) | 1023 & t.charCodeAt(++e3)), r2 <= 127 ? ++n3 : n3 += r2 <= 2047 ? 2 : r2 <= 65535 ? 3 : 4;
    }
    return n3;
  }
  var O = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
  function k(t, n3) {
    for (var e3 = t, r2 = e3 >> 1, i3 = r2 + n3 / 2; !(r2 >= i3) && z[r2]; )
      ++r2;
    if ((e3 = r2 << 1) - t > 32 && O)
      return O.decode(V.subarray(t, e3));
    for (var o3 = 0, a3 = ""; ; ) {
      var u2 = H[t + 2 * o3 >> 1];
      if (u2 == 0 || o3 == n3 / 2)
        return a3;
      ++o3, a3 += String.fromCharCode(u2);
    }
  }
  function F(t, n3, e3) {
    if (e3 === void 0 && (e3 = 2147483647), e3 < 2)
      return 0;
    for (var r2 = n3, i3 = (e3 -= 2) < 2 * t.length ? e3 / 2 : t.length, o3 = 0; o3 < i3; ++o3) {
      var a3 = t.charCodeAt(o3);
      H[n3 >> 1] = a3, n3 += 2;
    }
    return H[n3 >> 1] = 0, n3 - r2;
  }
  function R(t) {
    return 2 * t.length;
  }
  function x(t, n3) {
    for (var e3 = 0, r2 = ""; !(e3 >= n3 / 4); ) {
      var i3 = q[t + 4 * e3 >> 2];
      if (i3 == 0)
        break;
      if (++e3, i3 >= 65536) {
        var o3 = i3 - 65536;
        r2 += String.fromCharCode(55296 | o3 >> 10, 56320 | 1023 & o3);
      } else
        r2 += String.fromCharCode(i3);
    }
    return r2;
  }
  function D(t, n3, e3) {
    if (e3 === void 0 && (e3 = 2147483647), e3 < 4)
      return 0;
    for (var r2 = n3, i3 = r2 + e3 - 4, o3 = 0; o3 < t.length; ++o3) {
      var a3 = t.charCodeAt(o3);
      if (a3 >= 55296 && a3 <= 57343 && (a3 = 65536 + ((1023 & a3) << 10) | 1023 & t.charCodeAt(++o3)), q[n3 >> 2] = a3, (n3 += 4) + 4 > i3)
        break;
    }
    return q[n3 >> 2] = 0, n3 - r2;
  }
  function I(t) {
    for (var n3 = 0, e3 = 0; e3 < t.length; ++e3) {
      var r2 = t.charCodeAt(e3);
      r2 >= 55296 && r2 <= 57343 && ++e3, n3 += 4;
    }
    return n3;
  }
  var U, M, V, H, z, q, B, N, G, L = 65536;
  function X(t, n3) {
    return t % n3 > 0 && (t += n3 - t % n3), t;
  }
  function J(t) {
    U = t, o2.HEAP8 = M = new Int8Array(t), o2.HEAP16 = H = new Int16Array(t), o2.HEAP32 = q = new Int32Array(t), o2.HEAPU8 = V = new Uint8Array(t), o2.HEAPU16 = z = new Uint16Array(t), o2.HEAPU32 = B = new Uint32Array(t), o2.HEAPF32 = N = new Float32Array(t), o2.HEAPF64 = G = new Float64Array(t);
  }
  var Y = 5565536, Z = 322496, K = o2.INITIAL_MEMORY || 16777216;
  function Q(t) {
    for (; t.length > 0; ) {
      var n3 = t.shift();
      if (typeof n3 != "function") {
        var e3 = n3.func;
        typeof e3 == "number" ? n3.arg === void 0 ? o2.dynCall_v(e3) : o2.dynCall_vi(e3, n3.arg) : e3(n3.arg === void 0 ? null : n3.arg);
      } else
        n3(o2);
    }
  }
  (b = o2.wasmMemory ? o2.wasmMemory : new WebAssembly.Memory({ initial: K / L, maximum: 2147483648 / L })) && (U = b.buffer), K = U.byteLength, J(U), q[Z >> 2] = Y;
  var tt = [], nt = [], et = [], rt = [];
  function it() {
    if (o2.preRun)
      for (typeof o2.preRun == "function" && (o2.preRun = [o2.preRun]); o2.preRun.length; )
        st(o2.preRun.shift());
    Q(tt);
  }
  function ot() {
    Q(nt);
  }
  function at() {
    Q(et);
  }
  function ut() {
    if (o2.postRun)
      for (typeof o2.postRun == "function" && (o2.postRun = [o2.postRun]); o2.postRun.length; )
        ct(o2.postRun.shift());
    Q(rt);
  }
  function st(t) {
    tt.unshift(t);
  }
  function ct(t) {
    rt.unshift(t);
  }
  var lt = Math.ceil, ft = Math.floor, pt = 0, dt = null;
  function yt(t) {
    pt++, o2.monitorRunDependencies && o2.monitorRunDependencies(pt);
  }
  function ht(t) {
    if (pt--, o2.monitorRunDependencies && o2.monitorRunDependencies(pt), pt == 0 && dt) {
      var n3 = dt;
      dt = null, n3();
    }
  }
  function vt(t) {
    o2.onAbort && o2.onAbort(t), C(t += ""), T = true, t = "abort(" + t + "). Build with -s ASSERTIONS=1 for more info.";
    var n3 = new WebAssembly.RuntimeError(t);
    throw i2(n3), n3;
  }
  function mt(t, n3) {
    return String.prototype.startsWith ? t.startsWith(n3) : t.indexOf(n3) === 0;
  }
  o2.preloadedImages = {}, o2.preloadedAudios = {};
  var gt = "data:application/octet-stream;base64,";
  function bt(t) {
    return mt(t, gt);
  }
  var $t = "file://";
  function Ct(t) {
    return mt(t, $t);
  }
  var wt = "basis_transcoder.wasm";
  function Tt() {
    try {
      if (g)
        return new Uint8Array(g);
      if (d)
        return d(wt);
      throw "both async and sync fetching of the wasm failed";
    } catch (C2) {
      vt(C2);
    }
  }
  function _t() {
    return g || !s && !c || typeof fetch != "function" || Ct(wt) ? new Promise(function(t, n3) {
      t(Tt());
    }) : fetch(wt, { credentials: "same-origin" }).then(function(t) {
      if (!t.ok)
        throw "failed to load wasm binary file at '" + wt + "'";
      return t.arrayBuffer();
    }).catch(function() {
      return Tt();
    });
  }
  function Pt() {
    var t = { a: Le };
    function n3(t2, n4) {
      var e4 = t2.exports;
      o2.asm = e4, ht();
    }
    function e3(t2) {
      n3(t2.instance);
    }
    function r2(n4) {
      return _t().then(function(n5) {
        return WebAssembly.instantiate(n5, t);
      }).then(n4, function(t2) {
        C("failed to asynchronously prepare wasm: " + t2), vt(t2);
      });
    }
    function i3() {
      if (g || typeof WebAssembly.instantiateStreaming != "function" || bt(wt) || Ct(wt) || typeof fetch != "function")
        return r2(e3);
      fetch(wt, { credentials: "same-origin" }).then(function(n4) {
        return WebAssembly.instantiateStreaming(n4, t).then(e3, function(t2) {
          return C("wasm streaming compile failed: " + t2), C("falling back to ArrayBuffer instantiation"), r2(e3);
        });
      });
    }
    if (yt(), o2.instantiateWasm)
      try {
        return o2.instantiateWasm(t, n3);
      } catch (a3) {
        return C("Module.instantiateWasm callback failed with error: " + a3), false;
      }
    return i3(), {};
  }
  bt(wt) || (wt = m(wt)), nt.push({ func: function() {
    Je();
  } });
  var At = {};
  function Wt(t) {
    for (; t.length; ) {
      var n3 = t.pop();
      t.pop()(n3);
    }
  }
  function Et(t) {
    return this.fromWireType(B[t >> 2]);
  }
  var St = {}, jt = {}, Ot = {}, kt = 48, Ft = 57;
  function Rt(t) {
    if (t === void 0)
      return "_unknown";
    var n3 = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return n3 >= kt && n3 <= Ft ? "_" + t : t;
  }
  function xt(t, n3) {
    return t = Rt(t), function() {
      return n3.apply(this, arguments);
    };
  }
  function Dt(t, n3) {
    var e3 = xt(n3, function(t2) {
      this.name = n3, this.message = t2;
      var e4 = new Error(t2).stack;
      e4 !== void 0 && (this.stack = this.toString() + "\n" + e4.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return e3.prototype = Object.create(t.prototype), e3.prototype.constructor = e3, e3.prototype.toString = function() {
      return this.message === void 0 ? this.name : this.name + ": " + this.message;
    }, e3;
  }
  var It = void 0;
  function Ut(t) {
    throw new It(t);
  }
  function Mt(t, n3, e3) {
    function r2(n4) {
      var r3 = e3(n4);
      r3.length !== t.length && Ut("Mismatched type converter count");
      for (var i4 = 0; i4 < t.length; ++i4)
        Lt(t[i4], r3[i4]);
    }
    t.forEach(function(t2) {
      Ot[t2] = n3;
    });
    var i3 = new Array(n3.length), o3 = [], a3 = 0;
    n3.forEach(function(t2, n4) {
      jt.hasOwnProperty(t2) ? i3[n4] = jt[t2] : (o3.push(t2), St.hasOwnProperty(t2) || (St[t2] = []), St[t2].push(function() {
        i3[n4] = jt[t2], ++a3 === o3.length && r2(i3);
      }));
    }), o3.length === 0 && r2(i3);
  }
  function Vt(t) {
    var n3 = At[t];
    delete At[t];
    var e3 = n3.rawConstructor, r2 = n3.rawDestructor, i3 = n3.fields;
    Mt([t], i3.map(function(t2) {
      return t2.getterReturnType;
    }).concat(i3.map(function(t2) {
      return t2.setterArgumentType;
    })), function(t2) {
      var o3 = {};
      return i3.forEach(function(n4, e4) {
        var r3 = n4.fieldName, a3 = t2[e4], u2 = n4.getter, s2 = n4.getterContext, c2 = t2[e4 + i3.length], l2 = n4.setter, f2 = n4.setterContext;
        o3[r3] = { read: function(t3) {
          return a3.fromWireType(u2(s2, t3));
        }, write: function(t3, n5) {
          var e5 = [];
          l2(f2, t3, c2.toWireType(e5, n5)), Wt(e5);
        } };
      }), [{ name: n3.name, fromWireType: function(t3) {
        var n4 = {};
        for (var e4 in o3)
          n4[e4] = o3[e4].read(t3);
        return r2(t3), n4;
      }, toWireType: function(t3, n4) {
        for (var i4 in o3)
          if (!(i4 in n4))
            throw new TypeError('Missing field:  "' + i4 + '"');
        var a3 = e3();
        for (i4 in o3)
          o3[i4].write(a3, n4[i4]);
        return t3 !== null && t3.push(r2, a3), a3;
      }, argPackAdvance: 8, readValueFromPointer: Et, destructorFunction: r2 }];
    });
  }
  function Ht(t) {
    switch (t) {
      case 1:
        return 0;
      case 2:
        return 1;
      case 4:
        return 2;
      case 8:
        return 3;
      default:
        throw new TypeError("Unknown type size: " + t);
    }
  }
  function zt() {
    for (var t = new Array(256), n3 = 0; n3 < 256; ++n3)
      t[n3] = String.fromCharCode(n3);
    qt = t;
  }
  var qt = void 0;
  function Bt(t) {
    for (var n3 = "", e3 = t; V[e3]; )
      n3 += qt[V[e3++]];
    return n3;
  }
  var Nt = void 0;
  function Gt(t) {
    throw new Nt(t);
  }
  function Lt(t, n3, e3) {
    if (e3 = e3 || {}, !("argPackAdvance" in n3))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    var r2 = n3.name;
    if (t || Gt('type "' + r2 + '" must have a positive integer typeid pointer'), jt.hasOwnProperty(t)) {
      if (e3.ignoreDuplicateRegistrations)
        return;
      Gt("Cannot register type '" + r2 + "' twice");
    }
    if (jt[t] = n3, delete Ot[t], St.hasOwnProperty(t)) {
      var i3 = St[t];
      delete St[t], i3.forEach(function(t2) {
        t2();
      });
    }
  }
  function Xt(t, n3, e3, r2, i3) {
    var o3 = Ht(e3);
    Lt(t, { name: n3 = Bt(n3), fromWireType: function(t2) {
      return !!t2;
    }, toWireType: function(t2, n4) {
      return n4 ? r2 : i3;
    }, argPackAdvance: 8, readValueFromPointer: function(t2) {
      var r3;
      if (e3 === 1)
        r3 = M;
      else if (e3 === 2)
        r3 = H;
      else {
        if (e3 !== 4)
          throw new TypeError("Unknown boolean type size: " + n3);
        r3 = q;
      }
      return this.fromWireType(r3[t2 >> o3]);
    }, destructorFunction: null });
  }
  function Jt(t) {
    if (!(this instanceof pn))
      return false;
    if (!(t instanceof pn))
      return false;
    for (var n3 = this.$$.ptrType.registeredClass, e3 = this.$$.ptr, r2 = t.$$.ptrType.registeredClass, i3 = t.$$.ptr; n3.baseClass; )
      e3 = n3.upcast(e3), n3 = n3.baseClass;
    for (; r2.baseClass; )
      i3 = r2.upcast(i3), r2 = r2.baseClass;
    return n3 === r2 && e3 === i3;
  }
  function Yt(t) {
    return { count: t.count, deleteScheduled: t.deleteScheduled, preservePointerOnDelete: t.preservePointerOnDelete, ptr: t.ptr, ptrType: t.ptrType, smartPtr: t.smartPtr, smartPtrType: t.smartPtrType };
  }
  function Zt(t) {
    function n3(t2) {
      return t2.$$.ptrType.registeredClass.name;
    }
    Gt(n3(t) + " instance already deleted");
  }
  var Kt = false;
  function Qt(t) {
  }
  function tn(t) {
    t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr);
  }
  function nn(t) {
    t.count.value -= 1, t.count.value === 0 && tn(t);
  }
  function en(t) {
    return typeof FinalizationGroup == "undefined" ? (en = function(t2) {
      return t2;
    }, t) : (Kt = new FinalizationGroup(function(t2) {
      for (var n3 = t2.next(); !n3.done; n3 = t2.next()) {
        var e3 = n3.value;
        e3.ptr ? nn(e3) : console.warn("object already deleted: " + e3.ptr);
      }
    }), en = function(t2) {
      return Kt.register(t2, t2.$$, t2.$$), t2;
    }, Qt = function(t2) {
      Kt.unregister(t2.$$);
    }, en(t));
  }
  function rn() {
    if (this.$$.ptr || Zt(this), this.$$.preservePointerOnDelete)
      return this.$$.count.value += 1, this;
    var t = en(Object.create(Object.getPrototypeOf(this), { $$: { value: Yt(this.$$) } }));
    return t.$$.count.value += 1, t.$$.deleteScheduled = false, t;
  }
  function on() {
    this.$$.ptr || Zt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Gt("Object already scheduled for deletion"), Qt(this), nn(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
  }
  function an() {
    return !this.$$.ptr;
  }
  var un = void 0, sn = [];
  function cn() {
    for (; sn.length; ) {
      var t = sn.pop();
      t.$$.deleteScheduled = false, t.delete();
    }
  }
  function ln() {
    return this.$$.ptr || Zt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Gt("Object already scheduled for deletion"), sn.push(this), sn.length === 1 && un && un(cn), this.$$.deleteScheduled = true, this;
  }
  function fn() {
    pn.prototype.isAliasOf = Jt, pn.prototype.clone = rn, pn.prototype.delete = on, pn.prototype.isDeleted = an, pn.prototype.deleteLater = ln;
  }
  function pn() {
  }
  var dn = {};
  function yn(t, n3, e3) {
    if (t[n3].overloadTable === void 0) {
      var r2 = t[n3];
      t[n3] = function() {
        return t[n3].overloadTable.hasOwnProperty(arguments.length) || Gt("Function '" + e3 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + t[n3].overloadTable + ")!"), t[n3].overloadTable[arguments.length].apply(this, arguments);
      }, t[n3].overloadTable = [], t[n3].overloadTable[r2.argCount] = r2;
    }
  }
  function hn(t, n3, e3) {
    o2.hasOwnProperty(t) ? ((e3 === void 0 || o2[t].overloadTable !== void 0 && o2[t].overloadTable[e3] !== void 0) && Gt("Cannot register public name '" + t + "' twice"), yn(o2, t, t), o2.hasOwnProperty(e3) && Gt("Cannot register multiple overloads of a function with the same number of arguments (" + e3 + ")!"), o2[t].overloadTable[e3] = n3) : (o2[t] = n3, e3 !== void 0 && (o2[t].numArguments = e3));
  }
  function vn(t, n3, e3, r2, i3, o3, a3, u2) {
    this.name = t, this.constructor = n3, this.instancePrototype = e3, this.rawDestructor = r2, this.baseClass = i3, this.getActualType = o3, this.upcast = a3, this.downcast = u2, this.pureVirtualFunctions = [];
  }
  function mn(t, n3, e3) {
    for (; n3 !== e3; )
      n3.upcast || Gt("Expected null or instance of " + e3.name + ", got an instance of " + n3.name), t = n3.upcast(t), n3 = n3.baseClass;
    return t;
  }
  function gn(t, n3) {
    if (n3 === null)
      return this.isReference && Gt("null is not a valid " + this.name), 0;
    n3.$$ || Gt('Cannot pass "' + oe(n3) + '" as a ' + this.name), n3.$$.ptr || Gt("Cannot pass deleted object as a pointer of type " + this.name);
    var e3 = n3.$$.ptrType.registeredClass;
    return mn(n3.$$.ptr, e3, this.registeredClass);
  }
  function bn(t, n3) {
    var e3;
    if (n3 === null)
      return this.isReference && Gt("null is not a valid " + this.name), this.isSmartPointer ? (e3 = this.rawConstructor(), t !== null && t.push(this.rawDestructor, e3), e3) : 0;
    n3.$$ || Gt('Cannot pass "' + oe(n3) + '" as a ' + this.name), n3.$$.ptr || Gt("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && n3.$$.ptrType.isConst && Gt("Cannot convert argument of type " + (n3.$$.smartPtrType ? n3.$$.smartPtrType.name : n3.$$.ptrType.name) + " to parameter type " + this.name);
    var r2 = n3.$$.ptrType.registeredClass;
    if (e3 = mn(n3.$$.ptr, r2, this.registeredClass), this.isSmartPointer)
      switch (n3.$$.smartPtr === void 0 && Gt("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
        case 0:
          n3.$$.smartPtrType === this ? e3 = n3.$$.smartPtr : Gt("Cannot convert argument of type " + (n3.$$.smartPtrType ? n3.$$.smartPtrType.name : n3.$$.ptrType.name) + " to parameter type " + this.name);
          break;
        case 1:
          e3 = n3.$$.smartPtr;
          break;
        case 2:
          if (n3.$$.smartPtrType === this)
            e3 = n3.$$.smartPtr;
          else {
            var i3 = n3.clone();
            e3 = this.rawShare(e3, Qn(function() {
              i3.delete();
            })), t !== null && t.push(this.rawDestructor, e3);
          }
          break;
        default:
          Gt("Unsupporting sharing policy");
      }
    return e3;
  }
  function $n(t, n3) {
    if (n3 === null)
      return this.isReference && Gt("null is not a valid " + this.name), 0;
    n3.$$ || Gt('Cannot pass "' + oe(n3) + '" as a ' + this.name), n3.$$.ptr || Gt("Cannot pass deleted object as a pointer of type " + this.name), n3.$$.ptrType.isConst && Gt("Cannot convert argument of type " + n3.$$.ptrType.name + " to parameter type " + this.name);
    var e3 = n3.$$.ptrType.registeredClass;
    return mn(n3.$$.ptr, e3, this.registeredClass);
  }
  function Cn(t) {
    return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
  }
  function wn(t) {
    this.rawDestructor && this.rawDestructor(t);
  }
  function Tn(t) {
    t !== null && t.delete();
  }
  function _n(t, n3, e3) {
    if (n3 === e3)
      return t;
    if (e3.baseClass === void 0)
      return null;
    var r2 = _n(t, n3, e3.baseClass);
    return r2 === null ? null : e3.downcast(r2);
  }
  function Pn() {
    return Object.keys(Sn).length;
  }
  function An() {
    var t = [];
    for (var n3 in Sn)
      Sn.hasOwnProperty(n3) && t.push(Sn[n3]);
    return t;
  }
  function Wn(t) {
    un = t, sn.length && un && un(cn);
  }
  function En() {
    o2.getInheritedInstanceCount = Pn, o2.getLiveInheritedInstances = An, o2.flushPendingDeletes = cn, o2.setDelayFunction = Wn;
  }
  var Sn = {};
  function jn(t, n3) {
    for (n3 === void 0 && Gt("ptr should not be undefined"); t.baseClass; )
      n3 = t.upcast(n3), t = t.baseClass;
    return n3;
  }
  function On(t, n3) {
    return n3 = jn(t, n3), Sn[n3];
  }
  function kn(t, n3) {
    return n3.ptrType && n3.ptr || Ut("makeClassHandle requires ptr and ptrType"), !!n3.smartPtrType != !!n3.smartPtr && Ut("Both smartPtrType and smartPtr must be specified"), n3.count = { value: 1 }, en(Object.create(t, { $$: { value: n3 } }));
  }
  function Fn(t) {
    var n3 = this.getPointee(t);
    if (!n3)
      return this.destructor(t), null;
    var e3 = On(this.registeredClass, n3);
    if (e3 !== void 0) {
      if (e3.$$.count.value === 0)
        return e3.$$.ptr = n3, e3.$$.smartPtr = t, e3.clone();
      var r2 = e3.clone();
      return this.destructor(t), r2;
    }
    function i3() {
      return this.isSmartPointer ? kn(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: n3, smartPtrType: this, smartPtr: t }) : kn(this.registeredClass.instancePrototype, { ptrType: this, ptr: t });
    }
    var o3, a3 = this.registeredClass.getActualType(n3), u2 = dn[a3];
    if (!u2)
      return i3.call(this);
    o3 = this.isConst ? u2.constPointerType : u2.pointerType;
    var s2 = _n(n3, this.registeredClass, o3.registeredClass);
    return s2 === null ? i3.call(this) : this.isSmartPointer ? kn(o3.registeredClass.instancePrototype, { ptrType: o3, ptr: s2, smartPtrType: this, smartPtr: t }) : kn(o3.registeredClass.instancePrototype, { ptrType: o3, ptr: s2 });
  }
  function Rn() {
    xn.prototype.getPointee = Cn, xn.prototype.destructor = wn, xn.prototype.argPackAdvance = 8, xn.prototype.readValueFromPointer = Et, xn.prototype.deleteObject = Tn, xn.prototype.fromWireType = Fn;
  }
  function xn(t, n3, e3, r2, i3, o3, a3, u2, s2, c2, l2) {
    this.name = t, this.registeredClass = n3, this.isReference = e3, this.isConst = r2, this.isSmartPointer = i3, this.pointeeType = o3, this.sharingPolicy = a3, this.rawGetPointee = u2, this.rawConstructor = s2, this.rawShare = c2, this.rawDestructor = l2, i3 || n3.baseClass !== void 0 ? this.toWireType = bn : r2 ? (this.toWireType = gn, this.destructorFunction = null) : (this.toWireType = $n, this.destructorFunction = null);
  }
  function Dn(t, n3, e3) {
    o2.hasOwnProperty(t) || Ut("Replacing nonexistant public symbol"), o2[t].overloadTable !== void 0 && e3 !== void 0 ? o2[t].overloadTable[e3] = n3 : (o2[t] = n3, o2[t].argCount = e3);
  }
  function In(t, n3) {
    function e3(t2) {
      var e4 = [n3];
      return function() {
        e4.length = arguments.length + 1;
        for (var n4 = 0; n4 < arguments.length; n4++)
          e4[n4 + 1] = arguments[n4];
        return t2.apply(null, e4);
      };
    }
    t = Bt(t);
    var r2 = e3(o2["dynCall_" + t]);
    return typeof r2 != "function" && Gt("unknown function pointer with signature " + t + ": " + n3), r2;
  }
  var Un = void 0;
  function Mn(t) {
    var n3 = Ke(t), e3 = Bt(n3);
    return Ze(n3), e3;
  }
  function Vn(t, n3) {
    var e3 = [], r2 = {};
    function i3(t2) {
      r2[t2] || jt[t2] || (Ot[t2] ? Ot[t2].forEach(i3) : (e3.push(t2), r2[t2] = true));
    }
    throw n3.forEach(i3), new Un(t + ": " + e3.map(Mn).join([", "]));
  }
  function Hn(t, n3, e3, r2, i3, o3, a3, u2, s2, c2, l2, f2, p2) {
    l2 = Bt(l2), o3 = In(i3, o3), u2 && (u2 = In(a3, u2)), c2 && (c2 = In(s2, c2)), p2 = In(f2, p2);
    var d2 = Rt(l2);
    hn(d2, function() {
      Vn("Cannot construct " + l2 + " due to unbound types", [r2]);
    }), Mt([t, n3, e3], r2 ? [r2] : [], function(n4) {
      var e4, i4;
      n4 = n4[0], i4 = r2 ? (e4 = n4.registeredClass).instancePrototype : pn.prototype;
      var a4 = xt(d2, function() {
        if (Object.getPrototypeOf(this) !== s3)
          throw new Nt("Use 'new' to construct " + l2);
        if (f3.constructor_body === void 0)
          throw new Nt(l2 + " has no accessible constructor");
        var t2 = f3.constructor_body[arguments.length];
        if (t2 === void 0)
          throw new Nt("Tried to invoke ctor of " + l2 + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(f3.constructor_body).toString() + ") parameters instead!");
        return t2.apply(this, arguments);
      }), s3 = Object.create(i4, { constructor: { value: a4 } });
      a4.prototype = s3;
      var f3 = new vn(l2, a4, s3, p2, e4, o3, u2, c2), y2 = new xn(l2, f3, true, false, false), h2 = new xn(l2 + "*", f3, false, false, false), v2 = new xn(l2 + " const*", f3, false, true, false);
      return dn[t] = { pointerType: h2, constPointerType: v2 }, Dn(d2, a4), [y2, h2, v2];
    });
  }
  function zn(t, n3) {
    for (var e3 = [], r2 = 0; r2 < t; r2++)
      e3.push(q[(n3 >> 2) + r2]);
    return e3;
  }
  function qn(t, n3, e3, r2, i3, o3) {
    _(n3 > 0);
    var a3 = zn(n3, e3);
    i3 = In(r2, i3);
    var u2 = [o3], s2 = [];
    Mt([], [t], function(t2) {
      var e4 = "constructor " + (t2 = t2[0]).name;
      if (t2.registeredClass.constructor_body === void 0 && (t2.registeredClass.constructor_body = []), t2.registeredClass.constructor_body[n3 - 1] !== void 0)
        throw new Nt("Cannot register multiple constructors with identical number of parameters (" + (n3 - 1) + ") for class '" + t2.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
      return t2.registeredClass.constructor_body[n3 - 1] = function() {
        Vn("Cannot construct " + t2.name + " due to unbound types", a3);
      }, Mt([], a3, function(r3) {
        return t2.registeredClass.constructor_body[n3 - 1] = function() {
          arguments.length !== n3 - 1 && Gt(e4 + " called with " + arguments.length + " arguments, expected " + (n3 - 1)), s2.length = 0, u2.length = n3;
          for (var t3 = 1; t3 < n3; ++t3)
            u2[t3] = r3[t3].toWireType(s2, arguments[t3 - 1]);
          var o4 = i3.apply(null, u2);
          return Wt(s2), r3[0].fromWireType(o4);
        }, [];
      }), [];
    });
  }
  function Bn(t, n3, e3, r2, i3) {
    var o3 = n3.length;
    o3 < 2 && Gt("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var a3 = n3[1] !== null && e3 !== null, u2 = false, s2 = 1; s2 < n3.length; ++s2)
      if (n3[s2] !== null && n3[s2].destructorFunction === void 0) {
        u2 = true;
        break;
      }
    var c2 = n3[0].name !== "void", l2 = o3 - 2, f2 = new Array(l2), p2 = [], d2 = [];
    return function() {
      var e4;
      arguments.length !== l2 && Gt("function " + t + " called with " + arguments.length + " arguments, expected " + l2 + " args!"), d2.length = 0, p2.length = a3 ? 2 : 1, p2[0] = i3, a3 && (e4 = n3[1].toWireType(d2, this), p2[1] = e4);
      for (var o4 = 0; o4 < l2; ++o4)
        f2[o4] = n3[o4 + 2].toWireType(d2, arguments[o4]), p2.push(f2[o4]);
      var s3 = r2.apply(null, p2);
      if (u2)
        Wt(d2);
      else
        for (o4 = a3 ? 1 : 2; o4 < n3.length; o4++) {
          var y2 = o4 === 1 ? e4 : f2[o4 - 2];
          n3[o4].destructorFunction !== null && n3[o4].destructorFunction(y2);
        }
      if (c2)
        return n3[0].fromWireType(s3);
    };
  }
  function Nn(t, n3, e3, r2, i3, o3, a3, u2) {
    var s2 = zn(e3, r2);
    n3 = Bt(n3), o3 = In(i3, o3), Mt([], [t], function(t2) {
      var r3 = (t2 = t2[0]).name + "." + n3;
      function i4() {
        Vn("Cannot call " + r3 + " due to unbound types", s2);
      }
      u2 && t2.registeredClass.pureVirtualFunctions.push(n3);
      var c2 = t2.registeredClass.instancePrototype, l2 = c2[n3];
      return l2 === void 0 || l2.overloadTable === void 0 && l2.className !== t2.name && l2.argCount === e3 - 2 ? (i4.argCount = e3 - 2, i4.className = t2.name, c2[n3] = i4) : (yn(c2, n3, r3), c2[n3].overloadTable[e3 - 2] = i4), Mt([], s2, function(i5) {
        var u3 = Bn(r3, i5, t2, o3, a3);
        return c2[n3].overloadTable === void 0 ? (u3.argCount = e3 - 2, c2[n3] = u3) : c2[n3].overloadTable[e3 - 2] = u3, [];
      }), [];
    });
  }
  function Gn(t, n3, e3) {
    t = Bt(t), Mt([], [n3], function(n4) {
      return n4 = n4[0], o2[t] = n4.fromWireType(e3), [];
    });
  }
  var Ln = [], Xn = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
  function Jn(t) {
    t > 4 && --Xn[t].refcount == 0 && (Xn[t] = void 0, Ln.push(t));
  }
  function Yn() {
    for (var t = 0, n3 = 5; n3 < Xn.length; ++n3)
      Xn[n3] !== void 0 && ++t;
    return t;
  }
  function Zn() {
    for (var t = 5; t < Xn.length; ++t)
      if (Xn[t] !== void 0)
        return Xn[t];
    return null;
  }
  function Kn() {
    o2.count_emval_handles = Yn, o2.get_first_emval = Zn;
  }
  function Qn(t) {
    switch (t) {
      case void 0:
        return 1;
      case null:
        return 2;
      case true:
        return 3;
      case false:
        return 4;
      default:
        var n3 = Ln.length ? Ln.pop() : Xn.length;
        return Xn[n3] = { refcount: 1, value: t }, n3;
    }
  }
  function te(t, n3) {
    Lt(t, { name: n3 = Bt(n3), fromWireType: function(t2) {
      var n4 = Xn[t2].value;
      return Jn(t2), n4;
    }, toWireType: function(t2, n4) {
      return Qn(n4);
    }, argPackAdvance: 8, readValueFromPointer: Et, destructorFunction: null });
  }
  function ne(t, n3, e3) {
    switch (n3) {
      case 0:
        return function(t2) {
          var n4 = e3 ? M : V;
          return this.fromWireType(n4[t2]);
        };
      case 1:
        return function(t2) {
          var n4 = e3 ? H : z;
          return this.fromWireType(n4[t2 >> 1]);
        };
      case 2:
        return function(t2) {
          var n4 = e3 ? q : B;
          return this.fromWireType(n4[t2 >> 2]);
        };
      default:
        throw new TypeError("Unknown integer type: " + t);
    }
  }
  function ee(t, n3, e3, r2) {
    var i3 = Ht(e3);
    function o3() {
    }
    n3 = Bt(n3), o3.values = {}, Lt(t, { name: n3, constructor: o3, fromWireType: function(t2) {
      return this.constructor.values[t2];
    }, toWireType: function(t2, n4) {
      return n4.value;
    }, argPackAdvance: 8, readValueFromPointer: ne(n3, i3, r2), destructorFunction: null }), hn(n3, o3);
  }
  function re(t, n3) {
    var e3 = jt[t];
    return e3 === void 0 && Gt(n3 + " has unknown type " + Mn(t)), e3;
  }
  function ie(t, n3, e3) {
    var r2 = re(t, "enum");
    n3 = Bt(n3);
    var i3 = r2.constructor, o3 = Object.create(r2.constructor.prototype, { value: { value: e3 }, constructor: { value: xt(r2.name + "_" + n3, function() {
    }) } });
    i3.values[e3] = o3, i3[n3] = o3;
  }
  function oe(t) {
    if (t === null)
      return "null";
    var n3 = typeof t;
    return n3 === "object" || n3 === "array" || n3 === "function" ? t.toString() : "" + t;
  }
  function ae(t, n3) {
    switch (n3) {
      case 2:
        return function(t2) {
          return this.fromWireType(N[t2 >> 2]);
        };
      case 3:
        return function(t2) {
          return this.fromWireType(G[t2 >> 3]);
        };
      default:
        throw new TypeError("Unknown float type: " + t);
    }
  }
  function ue(t, n3, e3) {
    var r2 = Ht(e3);
    Lt(t, { name: n3 = Bt(n3), fromWireType: function(t2) {
      return t2;
    }, toWireType: function(t2, n4) {
      if (typeof n4 != "number" && typeof n4 != "boolean")
        throw new TypeError('Cannot convert "' + oe(n4) + '" to ' + this.name);
      return n4;
    }, argPackAdvance: 8, readValueFromPointer: ae(n3, r2), destructorFunction: null });
  }
  function se(t, n3, e3, r2, i3, o3) {
    var a3 = zn(n3, e3);
    t = Bt(t), i3 = In(r2, i3), hn(t, function() {
      Vn("Cannot call " + t + " due to unbound types", a3);
    }, n3 - 1), Mt([], a3, function(e4) {
      var r3 = [e4[0], null].concat(e4.slice(1));
      return Dn(t, Bn(t, r3, null, i3, o3), n3 - 1), [];
    });
  }
  function ce(t, n3, e3) {
    switch (n3) {
      case 0:
        return e3 ? function(t2) {
          return M[t2];
        } : function(t2) {
          return V[t2];
        };
      case 1:
        return e3 ? function(t2) {
          return H[t2 >> 1];
        } : function(t2) {
          return z[t2 >> 1];
        };
      case 2:
        return e3 ? function(t2) {
          return q[t2 >> 2];
        } : function(t2) {
          return B[t2 >> 2];
        };
      default:
        throw new TypeError("Unknown integer type: " + t);
    }
  }
  function le(t, n3, e3, r2, i3) {
    n3 = Bt(n3), i3 === -1 && (i3 = 4294967295);
    var o3 = Ht(e3), a3 = function(t2) {
      return t2;
    };
    if (r2 === 0) {
      var u2 = 32 - 8 * e3;
      a3 = function(t2) {
        return t2 << u2 >>> u2;
      };
    }
    var s2 = n3.indexOf("unsigned") != -1;
    Lt(t, { name: n3, fromWireType: a3, toWireType: function(t2, e4) {
      if (typeof e4 != "number" && typeof e4 != "boolean")
        throw new TypeError('Cannot convert "' + oe(e4) + '" to ' + this.name);
      if (e4 < r2 || e4 > i3)
        throw new TypeError('Passing a number "' + oe(e4) + '" from JS side to C/C++ side to an argument of type "' + n3 + '", which is outside the valid range [' + r2 + ", " + i3 + "]!");
      return s2 ? e4 >>> 0 : 0 | e4;
    }, argPackAdvance: 8, readValueFromPointer: ce(n3, o3, r2 !== 0), destructorFunction: null });
  }
  function fe(t, n3, e3) {
    var r2 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][n3];
    function i3(t2) {
      var n4 = B, e4 = n4[t2 >>= 2], i4 = n4[t2 + 1];
      return new r2(U, i4, e4);
    }
    Lt(t, { name: e3 = Bt(e3), fromWireType: i3, argPackAdvance: 8, readValueFromPointer: i3 }, { ignoreDuplicateRegistrations: true });
  }
  function pe(t, n3) {
    var e3 = (n3 = Bt(n3)) === "std::string";
    Lt(t, { name: n3, fromWireType: function(t2) {
      var n4, r2 = B[t2 >> 2];
      if (e3)
        for (var i3 = t2 + 4, o3 = 0; o3 <= r2; ++o3) {
          var a3 = t2 + 4 + o3;
          if (o3 == r2 || V[a3] == 0) {
            var u2 = W(i3, a3 - i3);
            n4 === void 0 ? n4 = u2 : (n4 += String.fromCharCode(0), n4 += u2), i3 = a3 + 1;
          }
        }
      else {
        var s2 = new Array(r2);
        for (o3 = 0; o3 < r2; ++o3)
          s2[o3] = String.fromCharCode(V[t2 + 4 + o3]);
        n4 = s2.join("");
      }
      return Ze(t2), n4;
    }, toWireType: function(t2, n4) {
      n4 instanceof ArrayBuffer && (n4 = new Uint8Array(n4));
      var r2 = typeof n4 == "string";
      r2 || n4 instanceof Uint8Array || n4 instanceof Uint8ClampedArray || n4 instanceof Int8Array || Gt("Cannot pass non-string to std::string");
      var i3 = (e3 && r2 ? function() {
        return j(n4);
      } : function() {
        return n4.length;
      })(), o3 = Ye(4 + i3 + 1);
      if (B[o3 >> 2] = i3, e3 && r2)
        S(n4, o3 + 4, i3 + 1);
      else if (r2)
        for (var a3 = 0; a3 < i3; ++a3) {
          var u2 = n4.charCodeAt(a3);
          u2 > 255 && (Ze(o3), Gt("String has UTF-16 code units that do not fit in 8 bits")), V[o3 + 4 + a3] = u2;
        }
      else
        for (a3 = 0; a3 < i3; ++a3)
          V[o3 + 4 + a3] = n4[a3];
      return t2 !== null && t2.push(Ze, o3), o3;
    }, argPackAdvance: 8, readValueFromPointer: Et, destructorFunction: function(t2) {
      Ze(t2);
    } });
  }
  function de(t, n3, e3) {
    var r2, i3, o3, a3, u2;
    e3 = Bt(e3), n3 === 2 ? (r2 = k, i3 = F, a3 = R, o3 = function() {
      return z;
    }, u2 = 1) : n3 === 4 && (r2 = x, i3 = D, a3 = I, o3 = function() {
      return B;
    }, u2 = 2), Lt(t, { name: e3, fromWireType: function(t2) {
      for (var e4, i4 = B[t2 >> 2], a4 = o3(), s2 = t2 + 4, c2 = 0; c2 <= i4; ++c2) {
        var l2 = t2 + 4 + c2 * n3;
        if (c2 == i4 || a4[l2 >> u2] == 0) {
          var f2 = r2(s2, l2 - s2);
          e4 === void 0 ? e4 = f2 : (e4 += String.fromCharCode(0), e4 += f2), s2 = l2 + n3;
        }
      }
      return Ze(t2), e4;
    }, toWireType: function(t2, r3) {
      typeof r3 != "string" && Gt("Cannot pass non-string to C++ string type " + e3);
      var o4 = a3(r3), s2 = Ye(4 + o4 + n3);
      return B[s2 >> 2] = o4 >> u2, i3(r3, s2 + 4, o4 + n3), t2 !== null && t2.push(Ze, s2), s2;
    }, argPackAdvance: 8, readValueFromPointer: Et, destructorFunction: function(t2) {
      Ze(t2);
    } });
  }
  function ye(t, n3, e3, r2, i3, o3) {
    At[t] = { name: Bt(n3), rawConstructor: In(e3, r2), rawDestructor: In(i3, o3), fields: [] };
  }
  function he(t, n3, e3, r2, i3, o3, a3, u2, s2, c2) {
    At[t].fields.push({ fieldName: Bt(n3), getterReturnType: e3, getter: In(r2, i3), getterContext: o3, setterArgumentType: a3, setter: In(u2, s2), setterContext: c2 });
  }
  function ve(t, n3) {
    Lt(t, { isVoid: true, name: n3 = Bt(n3), argPackAdvance: 0, fromWireType: function() {
    }, toWireType: function(t2, n4) {
    } });
  }
  function me(t) {
    return t || Gt("Cannot use deleted val. handle = " + t), Xn[t].value;
  }
  function ge(t, n3, e3) {
    t = me(t), n3 = re(n3, "emval::as");
    var r2 = [], i3 = Qn(r2);
    return q[e3 >> 2] = i3, n3.toWireType(r2, t);
  }
  var be = {};
  function $e(t) {
    var n3 = be[t];
    return n3 === void 0 ? Bt(t) : n3;
  }
  var Ce = [];
  function we(t, n3, e3, r2) {
    (t = Ce[t])(n3 = me(n3), e3 = $e(e3), null, r2);
  }
  function Te() {
    if (typeof globalThis == "object")
      return globalThis;
    function n3(t) {
      t.$$$embind_global$$$ = t;
      var n4 = typeof $$$embind_global$$$ == "object" && t.$$$embind_global$$$ === t;
      return n4 || delete t.$$$embind_global$$$, n4;
    }
    if (typeof $$$embind_global$$$ == "object")
      return $$$embind_global$$$;
    if (typeof e$1 == "object" && n3(e$1) ? $$$embind_global$$$ = e$1 : typeof self == "object" && n3(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")
      return $$$embind_global$$$;
    throw Error("unable to get global object.");
  }
  function _e(t) {
    return t === 0 ? Qn(Te()) : (t = $e(t), Qn(Te()[t]));
  }
  function Pe(t) {
    var n3 = Ce.length;
    return Ce.push(t), n3;
  }
  function Ae(t, n3) {
    for (var e3 = new Array(t), r2 = 0; r2 < t; ++r2)
      e3[r2] = re(q[(n3 >> 2) + r2], "parameter " + r2);
    return e3;
  }
  function We(t, n3) {
    var e3 = Ae(t, n3), r2 = e3[0], i3 = new Array(t - 1);
    return Pe(function(n4, o3, a3, u2) {
      for (var s2 = 0, c2 = 0; c2 < t - 1; ++c2)
        i3[c2] = e3[c2 + 1].readValueFromPointer(u2 + s2), s2 += e3[c2 + 1].argPackAdvance;
      var l2 = n4[o3].apply(n4, i3);
      for (c2 = 0; c2 < t - 1; ++c2)
        e3[c2 + 1].deleteObject && e3[c2 + 1].deleteObject(i3[c2]);
      if (!r2.isVoid)
        return r2.toWireType(a3, l2);
    });
  }
  function Ee(t) {
    return t = $e(t), Qn(o2[t]);
  }
  function Se(t, n3) {
    return Qn((t = me(t))[n3 = me(n3)]);
  }
  function je(t) {
    t > 4 && (Xn[t].refcount += 1);
  }
  function Oe(t) {
    var n3 = new Array(t + 1);
    return function(e3, r2, i3) {
      n3[0] = e3;
      for (var o3 = 0; o3 < t; ++o3) {
        var a3 = re(q[(r2 >> 2) + o3], "parameter " + o3);
        n3[o3 + 1] = a3.readValueFromPointer(i3), i3 += a3.argPackAdvance;
      }
      return Qn(new (e3.bind.apply(e3, n3))());
    };
  }
  var ke = {};
  function Fe(t, n3, e3, r2) {
    t = me(t);
    var i3 = ke[n3];
    return i3 || (i3 = Oe(n3), ke[n3] = i3), i3(t, e3, r2);
  }
  function Re(t) {
    return Qn($e(t));
  }
  function xe(t) {
    Wt(Xn[t].value), Jn(t);
  }
  function De() {
    vt();
  }
  function Ie(t, n3, e3) {
    V.copyWithin(t, n3, n3 + e3);
  }
  function Ue() {
    return V.length;
  }
  function Me(t) {
    try {
      return b.grow(t - U.byteLength + 65535 >>> 16), J(b.buffer), 1;
    } catch (n3) {
    }
  }
  function Ve(t) {
    t >>>= 0;
    var n3 = Ue(), e3 = 65536, r2 = 2147483648;
    if (t > r2)
      return false;
    for (var i3 = 16777216, o3 = 1; o3 <= 4; o3 *= 2) {
      var a3 = n3 * (1 + 0.2 / o3);
      if (a3 = Math.min(a3, t + 100663296), Me(Math.min(r2, X(Math.max(i3, t, a3), e3))))
        return true;
    }
    return false;
  }
  var He = { mappings: {}, buffers: [null, [], []], printChar: function(t, n3) {
    var e3 = He.buffers[t];
    n3 === 0 || n3 === 10 ? ((t === 1 ? $ : C)(A(e3, 0)), e3.length = 0) : e3.push(n3);
  }, varargs: void 0, get: function() {
    return He.varargs += 4, q[He.varargs - 4 >> 2];
  }, getStr: function(t) {
    return W(t);
  }, get64: function(t, n3) {
    return t;
  } };
  function ze(t) {
    return 0;
  }
  function qe(t, n3, e3, r2, i3) {
  }
  function Be(t, n3, e3, r2) {
    for (var i3 = 0, o3 = 0; o3 < e3; o3++) {
      for (var a3 = q[n3 + 8 * o3 >> 2], u2 = q[n3 + (8 * o3 + 4) >> 2], s2 = 0; s2 < u2; s2++)
        He.printChar(t, V[a3 + s2]);
      i3 += u2;
    }
    return q[r2 >> 2] = i3, 0;
  }
  function Ne(t) {
    return (t = +t) >= 0 ? +ft(t + 0.5) : +lt(t - 0.5);
  }
  function Ge(t) {
  }
  It = o2.InternalError = Dt(Error, "InternalError"), zt(), Nt = o2.BindingError = Dt(Error, "BindingError"), fn(), Rn(), En(), Un = o2.UnboundTypeError = Dt(Error, "UnboundTypeError"), Kn();
  var Le = { u: Vt, J: Xt, y: Hn, x: qn, d: Nn, k: Gn, I: te, n: ee, a: ie, B: ue, i: se, j: le, h: fe, C: pe, w: de, v: ye, c: he, K: ve, m: ge, s: we, b: Jn, z: _e, t: We, r: Ee, e: Se, g: je, q: Fe, f: Re, l: xe, p: De, F: Ie, G: Ve, H: ze, D: qe, A: Be, memory: b, o: Ne, E: Ge, table: w };
  Pt();
  var Xe, Je = o2.___wasm_call_ctors = function() {
    return (Je = o2.___wasm_call_ctors = o2.asm.L).apply(null, arguments);
  }, Ye = o2._malloc = function() {
    return (Ye = o2._malloc = o2.asm.M).apply(null, arguments);
  }, Ze = o2._free = function() {
    return (Ze = o2._free = o2.asm.N).apply(null, arguments);
  }, Ke = o2.___getTypeName = function() {
    return (Ke = o2.___getTypeName = o2.asm.O).apply(null, arguments);
  };
  function Qe(t) {
    this.name = "ExitStatus", this.message = "Program terminated with exit(" + t + ")", this.status = t;
  }
  function tr(t) {
    function n3() {
      Xe || (Xe = true, o2.calledRun = true, T || (ot(), at(), e2(o2), o2.onRuntimeInitialized && o2.onRuntimeInitialized(), ut()));
    }
    pt > 0 || (it(), pt > 0 || (o2.setStatus ? (o2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        o2.setStatus("");
      }, 1), n3();
    }, 1)) : n3()));
  }
  if (o2.___embind_register_native_and_builtin_types = function() {
    return (o2.___embind_register_native_and_builtin_types = o2.asm.P).apply(null, arguments);
  }, o2.dynCall_viii = function() {
    return (o2.dynCall_viii = o2.asm.Q).apply(null, arguments);
  }, o2.dynCall_vi = function() {
    return (o2.dynCall_vi = o2.asm.R).apply(null, arguments);
  }, o2.dynCall_v = function() {
    return (o2.dynCall_v = o2.asm.S).apply(null, arguments);
  }, o2.dynCall_i = function() {
    return (o2.dynCall_i = o2.asm.T).apply(null, arguments);
  }, o2.dynCall_iii = function() {
    return (o2.dynCall_iii = o2.asm.U).apply(null, arguments);
  }, o2.dynCall_ii = function() {
    return (o2.dynCall_ii = o2.asm.V).apply(null, arguments);
  }, o2.dynCall_vii = function() {
    return (o2.dynCall_vii = o2.asm.W).apply(null, arguments);
  }, o2.dynCall_iiii = function() {
    return (o2.dynCall_iiii = o2.asm.X).apply(null, arguments);
  }, o2.dynCall_iiiii = function() {
    return (o2.dynCall_iiiii = o2.asm.Y).apply(null, arguments);
  }, o2.dynCall_iiiiii = function() {
    return (o2.dynCall_iiiiii = o2.asm.Z).apply(null, arguments);
  }, o2.dynCall_iiiiiiii = function() {
    return (o2.dynCall_iiiiiiii = o2.asm._).apply(null, arguments);
  }, o2.dynCall_iiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiii = o2.asm.$).apply(null, arguments);
  }, o2.dynCall_viiii = function() {
    return (o2.dynCall_viiii = o2.asm.aa).apply(null, arguments);
  }, o2.dynCall_iiiiiii = function() {
    return (o2.dynCall_iiiiiii = o2.asm.ba).apply(null, arguments);
  }, o2.dynCall_iiiiiiiiiiiiiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiiiiiiiiiiiiii = o2.asm.ca).apply(null, arguments);
  }, o2.dynCall_iiiiiiiiiiiiiiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiiiiiiiiiiiiiii = o2.asm.da).apply(null, arguments);
  }, o2.dynCall_iiiiiiiiiiiiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiiiiiiiiiiiii = o2.asm.ea).apply(null, arguments);
  }, o2.dynCall_viiiii = function() {
    return (o2.dynCall_viiiii = o2.asm.fa).apply(null, arguments);
  }, o2.dynCall_iiiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiiii = o2.asm.ga).apply(null, arguments);
  }, o2.dynCall_iiiiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiiiii = o2.asm.ha).apply(null, arguments);
  }, o2.dynCall_jiji = function() {
    return (o2.dynCall_jiji = o2.asm.ia).apply(null, arguments);
  }, o2.dynCall_viiiiii = function() {
    return (o2.dynCall_viiiiii = o2.asm.ja).apply(null, arguments);
  }, dt = function t() {
    Xe || tr(), Xe || (dt = t);
  }, o2.run = tr, o2.preInit)
    for (typeof o2.preInit == "function" && (o2.preInit = [o2.preInit]); o2.preInit.length > 0; )
      o2.preInit.pop()();
  return tr(), n2.ready;
}, e.exports = i;
const a = n({ __proto__: null, default: o.exports }, [o.exports]);
export { a as b };
