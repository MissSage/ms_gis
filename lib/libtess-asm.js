function r(r2, e2) {
  for (var f2 = 0; f2 < e2.length; f2++) {
    const i2 = e2[f2];
    if (typeof i2 != "string" && !Array.isArray(i2)) {
      for (const e3 in i2)
        if (e3 !== "default" && !(e3 in r2)) {
          const f3 = Object.getOwnPropertyDescriptor(i2, e3);
          f3 && Object.defineProperty(r2, e3, f3.get ? f3 : { enumerable: true, get: () => i2[e3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r2, Symbol.toStringTag, { value: "Module" }));
}
var e, f, i, a = { exports: {} };
e = a, f = function() {
  function r2(r3) {
    const f2 = r3.locateFile, i2 = {};
    var a2 = a2 !== void 0 ? a2 : {};
    const n2 = (() => {
      let r4;
      return { resolve: (e2) => r4(e2), promise: new Promise((e2) => r4 = e2) };
    })(), t = () => n2.promise;
    a2.locateFile = f2, a2.onRuntimeInitialized = () => {
      n2.resolve(i2);
    }, i2.Module = a2, i2.whenLoaded = t;
    var o, b = {};
    for (o in a2)
      a2.hasOwnProperty(o) && (b[o] = a2[o]);
    var k, u, c, s, A, l = typeof window == "object", v = typeof importScripts == "function", d = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", h = "";
    function p(r4) {
      return a2.locateFile ? a2.locateFile(r4, h) : h + r4;
    }
    d ? (h = v ? require("path").dirname(h) + "/" : __dirname + "/", k = function(r4, e2) {
      var f3 = dr(r4);
      return f3 ? e2 ? f3 : f3.toString() : (s || (s = require("fs")), A || (A = require("path")), r4 = A.normalize(r4), s.readFileSync(r4, e2 ? null : "utf8"));
    }, c = function(r4) {
      var e2 = k(r4, true);
      return e2.buffer || (e2 = new Uint8Array(e2)), S(e2.buffer), e2;
    }, u = function(r4, e2, f3) {
      var i3 = dr(r4);
      i3 && e2(i3), s || (s = require("fs")), A || (A = require("path")), r4 = A.normalize(r4), s.readFile(r4, function(r5, i4) {
        r5 ? f3(r5) : e2(i4.buffer);
      });
    }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), e.exports = a2, process.on("uncaughtException", function(r4) {
      if (!(r4 instanceof Sr))
        throw r4;
    }), process.on("unhandledRejection", X), a2.inspect = function() {
      return "[Emscripten Module object]";
    }) : (l || v) && (v ? h = self.location.href : typeof document != "undefined" && document.currentScript && (h = document.currentScript.src), h = h.indexOf("blob:") !== 0 ? h.substr(0, h.lastIndexOf("/") + 1) : "", k = function(r4) {
      try {
        var e2 = new XMLHttpRequest();
        return e2.open("GET", r4, false), e2.send(null), e2.responseText;
      } catch (m2) {
        var f3 = dr(r4);
        if (f3)
          return Ar(f3);
        throw m2;
      }
    }, v && (c = function(r4) {
      try {
        var e2 = new XMLHttpRequest();
        return e2.open("GET", r4, false), e2.responseType = "arraybuffer", e2.send(null), new Uint8Array(e2.response);
      } catch (m2) {
        var f3 = dr(r4);
        if (f3)
          return f3;
        throw m2;
      }
    }), u = function(r4, e2, f3) {
      var i3 = new XMLHttpRequest();
      i3.open("GET", r4, true), i3.responseType = "arraybuffer", i3.onload = function() {
        if (i3.status == 200 || i3.status == 0 && i3.response)
          e2(i3.response);
        else {
          var a3 = dr(r4);
          a3 ? e2(a3.buffer) : f3();
        }
      }, i3.onerror = f3, i3.send(null);
    });
    var w = a2.print || console.log.bind(console), m = a2.printErr || console.warn.bind(console);
    for (o in b)
      b.hasOwnProperty(o) && (a2[o] = b[o]);
    b = null, a2.arguments && a2.arguments, a2.thisProgram && a2.thisProgram, a2.quit && a2.quit;
    var y, g = 0, E = function(r4) {
      g = r4;
    }, C = function() {
      return g;
    };
    a2.wasmBinary && (y = a2.wasmBinary), a2.noExitRuntime;
    var R, M = { Memory: function(r4) {
      this.buffer = new ArrayBuffer(65536 * r4.initial);
    }, Module: function(r4) {
    }, Instance: function(r4, e2) {
      this.exports = function(r5) {
        function e3(r6) {
          return r6.set = function(r7, e4) {
            this[r7] = e4;
          }, r6.get = function(r7) {
            return this[r7];
          }, r6;
        }
        for (var f3, i3 = new Uint8Array(123), a3 = 25; a3 >= 0; --a3)
          i3[48 + a3] = 52 + a3, i3[65 + a3] = a3, i3[97 + a3] = 26 + a3;
        function n3(r6, e4, f4) {
          for (var a4, n4, t3 = 0, o3 = e4, b3 = f4.length, k3 = e4 + (3 * b3 >> 2) - (f4[b3 - 2] == "=") - (f4[b3 - 1] == "="); t3 < b3; t3 += 4)
            a4 = i3[f4.charCodeAt(t3 + 1)], n4 = i3[f4.charCodeAt(t3 + 2)], r6[o3++] = i3[f4.charCodeAt(t3)] << 2 | a4 >> 4, o3 < k3 && (r6[o3++] = a4 << 4 | n4 >> 2), o3 < k3 && (r6[o3++] = n4 << 6 | i3[f4.charCodeAt(t3 + 3)]);
        }
        function t2(r6) {
          n3(f3, 1024, "LSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABuYW4AaW5mAE5BTgBJTkYALgAobnVsbCkAR290IGVycm9yICVkCgAlZCAlZCAoJWYsJWYpLCglZiwlZiksKCVmLCVmKSAK"), n3(f3, 1132, "BwAAAAAAAD8AAAA/AAAAAAAAAAB4Bg=="), n3(f3, 1168, "EQAKABEREQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAARAA8KERERAwoHAAEACQsLAAAJBgsAAAsABhEAAAARERE="), n3(f3, 1249, "CwAAAAAAAAAAEQAKChEREQAKAAACAAkLAAAACQALAAAL"), n3(f3, 1307, "DA=="), n3(f3, 1319, "DAAAAAAMAAAAAAkMAAAAAAAMAAAM"), n3(f3, 1365, "Dg=="), n3(f3, 1377, "DQAAAAQNAAAAAAkOAAAAAAAOAAAO"), n3(f3, 1423, "EA=="), n3(f3, 1435, "DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS"), n3(f3, 1490, "EgAAABISEgAAAAAAAAk="), n3(f3, 1539, "Cw=="), n3(f3, 1551, "CgAAAAAKAAAAAAkLAAAAAAALAAAL"), n3(f3, 1597, "DA=="), n3(f3, 1609, "DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVG"), n3(f3, 1648, "4I8AAAAAAAAF"), n3(f3, 1668, "KA=="), n3(f3, 1692, "KQAAACoAAACYCwAAAAQ="), n3(f3, 1716, "AQ=="), n3(f3, 1731, "Cv////8="), n3(f3, 1972, "wA8=");
        }
        i3[43] = 62, i3[47] = 63;
        var o2 = new ArrayBuffer(16), b2 = new Int32Array(o2), k2 = new Float64Array(o2);
        function u2(r6) {
          return b2[r6];
        }
        function c2(r6, e4) {
          b2[r6] = e4;
        }
        function s2() {
          return k2[0];
        }
        function A2(r6) {
          k2[0] = r6;
        }
        function l2(r6) {
          var i4 = r6.a, a4 = i4.buffer;
          i4.grow = ue;
          var n4 = new Int8Array(a4), o3 = new Int16Array(a4), b3 = new Int32Array(a4), k3 = new Uint8Array(a4), l3 = new Uint16Array(a4), v2 = new Uint32Array(a4), d2 = new Float32Array(a4), h2 = new Float64Array(a4), p2 = Math.imul, w2 = Math.fround, m2 = Math.abs, y2 = Math.clz32, g2 = Math.max, E2 = r6.abort, C2 = r6.b, R2 = r6.c, M2 = r6.d, I2 = r6.e, S2 = r6.f, _2 = r6.g, P2 = r6.h, x2 = r6.i, L2 = r6.j, B2 = r6.k, T2 = r6.l, U2 = r6.m, j2 = 36832, F2 = 0;
          function O2(r7) {
            var e4 = 0, f4 = 0, i5 = 0, a5 = 0, n5 = 0, t3 = 0, o4 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0, l4 = 0, d3 = 0, h3 = 0;
            j2 = l4 = j2 - 16 | 0;
            r: {
              e: {
                f: {
                  i: {
                    a: {
                      n: {
                        t: {
                          o: {
                            b: {
                              k: {
                                u: {
                                  c: {
                                    if ((r7 |= 0) >>> 0 <= 244) {
                                      if (3 & (e4 = (n5 = b3[614]) >>> (f4 = (u3 = r7 >>> 0 < 11 ? 16 : r7 + 11 & -8) >>> 3 | 0) | 0)) {
                                        r7 = (a5 = b3[2504 + (e4 = (i5 = f4 + (1 & (-1 ^ e4)) | 0) << 3) >> 2]) + 8 | 0, (0 | (f4 = b3[a5 + 8 >> 2])) != (0 | (e4 = e4 + 2496 | 0)) ? (b3[f4 + 12 >> 2] = e4, b3[e4 + 8 >> 2] = f4) : (d3 = 2456, h3 = Jr(i5) & n5, b3[d3 >> 2] = h3), e4 = i5 << 3, b3[a5 + 4 >> 2] = 3 | e4, b3[4 + (e4 = e4 + a5 | 0) >> 2] = 1 | b3[e4 + 4 >> 2];
                                        break r;
                                      }
                                      if ((s3 = b3[616]) >>> 0 >= u3 >>> 0)
                                        break c;
                                      if (e4) {
                                        f4 = r7 = (e4 = (0 - (r7 = (0 - (r7 = 2 << f4) | r7) & e4 << f4) & r7) - 1 | 0) >>> 12 & 16, f4 |= r7 = (e4 = e4 >>> r7 | 0) >>> 5 & 8, f4 |= r7 = (e4 = e4 >>> r7 | 0) >>> 2 & 4, t3 = b3[2504 + (r7 = (f4 = ((f4 |= r7 = (e4 = e4 >>> r7 | 0) >>> 1 & 2) | (r7 = (e4 = e4 >>> r7 | 0) >>> 1 & 1)) + (e4 >>> r7 | 0) | 0) << 3) >> 2], (0 | (e4 = b3[t3 + 8 >> 2])) != (0 | (r7 = r7 + 2496 | 0)) ? (b3[e4 + 12 >> 2] = r7, b3[r7 + 8 >> 2] = e4) : (n5 = Jr(f4) & n5, b3[614] = n5), r7 = t3 + 8 | 0, b3[t3 + 4 >> 2] = 3 | u3, a5 = (e4 = f4 << 3) - u3 | 0, b3[4 + (i5 = t3 + u3 | 0) >> 2] = 1 | a5, b3[e4 + t3 >> 2] = a5, s3 && (f4 = 2496 + ((e4 = s3 >>> 3 | 0) << 3) | 0, t3 = b3[619], (e4 = 1 << e4) & n5 ? e4 = b3[f4 + 8 >> 2] : (b3[614] = e4 | n5, e4 = f4), b3[f4 + 8 >> 2] = t3, b3[e4 + 12 >> 2] = t3, b3[t3 + 12 >> 2] = f4, b3[t3 + 8 >> 2] = e4), b3[619] = i5, b3[616] = a5;
                                        break r;
                                      }
                                      if (!(o4 = b3[615]))
                                        break c;
                                      for (f4 = r7 = (e4 = (o4 & 0 - o4) - 1 | 0) >>> 12 & 16, f4 |= r7 = (e4 = e4 >>> r7 | 0) >>> 5 & 8, f4 |= r7 = (e4 = e4 >>> r7 | 0) >>> 2 & 4, e4 = b3[2760 + (((f4 |= r7 = (e4 = e4 >>> r7 | 0) >>> 1 & 2) | (r7 = (e4 = e4 >>> r7 | 0) >>> 1 & 1)) + (e4 >>> r7 | 0) << 2) >> 2], i5 = (-8 & b3[e4 + 4 >> 2]) - u3 | 0, f4 = e4; (r7 = b3[f4 + 16 >> 2]) || (r7 = b3[f4 + 20 >> 2]); )
                                        i5 = (a5 = (f4 = (-8 & b3[r7 + 4 >> 2]) - u3 | 0) >>> 0 < i5 >>> 0) ? f4 : i5, e4 = a5 ? r7 : e4, f4 = r7;
                                      if ((c3 = e4 + u3 | 0) >>> 0 <= e4 >>> 0)
                                        break u;
                                      if (A3 = b3[e4 + 24 >> 2], (0 | (a5 = b3[e4 + 12 >> 2])) != (0 | e4)) {
                                        r7 = b3[e4 + 8 >> 2], b3[r7 + 12 >> 2] = a5, b3[a5 + 8 >> 2] = r7;
                                        break e;
                                      }
                                      if (!(r7 = b3[(f4 = e4 + 20 | 0) >> 2])) {
                                        if (!(r7 = b3[e4 + 16 >> 2]))
                                          break k;
                                        f4 = e4 + 16 | 0;
                                      }
                                      for (; t3 = f4, a5 = r7, (r7 = b3[(f4 = r7 + 20 | 0) >> 2]) || (f4 = a5 + 16 | 0, r7 = b3[a5 + 16 >> 2]); )
                                        ;
                                      b3[t3 >> 2] = 0;
                                      break e;
                                    }
                                    if (u3 = -1, !(r7 >>> 0 > 4294967231) && (u3 = -8 & (r7 = r7 + 11 | 0), c3 = b3[615])) {
                                      i5 = 0 - u3 | 0, n5 = 0, u3 >>> 0 < 256 || (n5 = 31, u3 >>> 0 > 16777215 || (r7 = r7 >>> 8 | 0, r7 <<= t3 = r7 + 1048320 >>> 16 & 8, n5 = 28 + ((r7 = ((r7 <<= f4 = r7 + 520192 >>> 16 & 4) << (e4 = r7 + 245760 >>> 16 & 2) >>> 15 | 0) - (e4 | f4 | t3) | 0) << 1 | u3 >>> r7 + 21 & 1) | 0));
                                      s: {
                                        A: {
                                          if (f4 = b3[2760 + (n5 << 2) >> 2])
                                            for (r7 = 0, e4 = u3 << ((0 | n5) == 31 ? 0 : 25 - (n5 >>> 1 | 0) | 0); ; ) {
                                              if (!((t3 = (-8 & b3[f4 + 4 >> 2]) - u3 | 0) >>> 0 >= i5 >>> 0 || (a5 = f4, i5 = t3))) {
                                                i5 = 0, r7 = f4;
                                                break A;
                                              }
                                              if (t3 = b3[f4 + 20 >> 2], f4 = b3[16 + ((e4 >>> 29 & 4) + f4 | 0) >> 2], r7 = t3 ? (0 | t3) == (0 | f4) ? r7 : t3 : r7, e4 <<= 1, !f4)
                                                break;
                                            }
                                          else
                                            r7 = 0;
                                          if (!(r7 | a5)) {
                                            if (a5 = 0, !(r7 = (0 - (r7 = 2 << n5) | r7) & c3))
                                              break c;
                                            f4 = r7 = (e4 = (r7 & 0 - r7) - 1 | 0) >>> 12 & 16, f4 |= r7 = (e4 = e4 >>> r7 | 0) >>> 5 & 8, f4 |= r7 = (e4 = e4 >>> r7 | 0) >>> 2 & 4, r7 = b3[2760 + (((f4 |= r7 = (e4 = e4 >>> r7 | 0) >>> 1 & 2) | (r7 = (e4 = e4 >>> r7 | 0) >>> 1 & 1)) + (e4 >>> r7 | 0) << 2) >> 2];
                                          }
                                          if (!r7)
                                            break s;
                                        }
                                        for (; i5 = (f4 = (e4 = (-8 & b3[r7 + 4 >> 2]) - u3 | 0) >>> 0 < i5 >>> 0) ? e4 : i5, a5 = f4 ? r7 : a5, r7 = (e4 = b3[r7 + 16 >> 2]) || b3[r7 + 20 >> 2]; )
                                          ;
                                      }
                                      if (!(!a5 | b3[616] - u3 >>> 0 <= i5 >>> 0)) {
                                        if ((o4 = a5 + u3 | 0) >>> 0 <= a5 >>> 0)
                                          break u;
                                        if (n5 = b3[a5 + 24 >> 2], (0 | a5) != (0 | (e4 = b3[a5 + 12 >> 2]))) {
                                          r7 = b3[a5 + 8 >> 2], b3[r7 + 12 >> 2] = e4, b3[e4 + 8 >> 2] = r7;
                                          break f;
                                        }
                                        if (!(r7 = b3[(f4 = a5 + 20 | 0) >> 2])) {
                                          if (!(r7 = b3[a5 + 16 >> 2]))
                                            break b;
                                          f4 = a5 + 16 | 0;
                                        }
                                        for (; t3 = f4, e4 = r7, (r7 = b3[(f4 = r7 + 20 | 0) >> 2]) || (f4 = e4 + 16 | 0, r7 = b3[e4 + 16 >> 2]); )
                                          ;
                                        b3[t3 >> 2] = 0;
                                        break f;
                                      }
                                    }
                                  }
                                  if ((f4 = b3[616]) >>> 0 >= u3 >>> 0) {
                                    i5 = b3[619], (e4 = f4 - u3 | 0) >>> 0 >= 16 ? (b3[616] = e4, r7 = i5 + u3 | 0, b3[619] = r7, b3[r7 + 4 >> 2] = 1 | e4, b3[f4 + i5 >> 2] = e4, b3[i5 + 4 >> 2] = 3 | u3) : (b3[619] = 0, b3[616] = 0, b3[i5 + 4 >> 2] = 3 | f4, b3[4 + (r7 = f4 + i5 | 0) >> 2] = 1 | b3[r7 + 4 >> 2]), r7 = i5 + 8 | 0;
                                    break r;
                                  }
                                  if ((o4 = b3[617]) >>> 0 > u3 >>> 0) {
                                    e4 = o4 - u3 | 0, b3[617] = e4, r7 = (f4 = b3[620]) + u3 | 0, b3[620] = r7, b3[r7 + 4 >> 2] = 1 | e4, b3[f4 + 4 >> 2] = 3 | u3, r7 = f4 + 8 | 0;
                                    break r;
                                  }
                                  if (r7 = 0, e4 = c3 = u3 + 47 | 0, b3[732] ? f4 = b3[734] : (b3[735] = -1, b3[736] = -1, b3[733] = 4096, b3[734] = 4096, b3[732] = l4 + 12 & -16 ^ 1431655768, b3[737] = 0, b3[725] = 0, f4 = 4096), (f4 = (t3 = e4 + f4 | 0) & (a5 = 0 - f4 | 0)) >>> 0 <= u3 >>> 0)
                                    break r;
                                  if ((i5 = b3[724]) && i5 >>> 0 < (n5 = (e4 = b3[722]) + f4 | 0) >>> 0 | e4 >>> 0 >= n5 >>> 0)
                                    break r;
                                  if (4 & k3[2900])
                                    break n;
                                  c: {
                                    s: {
                                      if (i5 = b3[620])
                                        for (r7 = 2904; ; ) {
                                          if (i5 >>> 0 < (e4 = b3[r7 >> 2]) + b3[r7 + 4 >> 2] >>> 0 && e4 >>> 0 <= i5 >>> 0)
                                            break s;
                                          if (!(r7 = b3[r7 + 8 >> 2]))
                                            break;
                                        }
                                      if ((0 | (e4 = Qr(0))) == -1)
                                        break t;
                                      if (n5 = f4, (r7 = (i5 = b3[733]) - 1 | 0) & e4 && (n5 = (f4 - e4 | 0) + (r7 + e4 & 0 - i5) | 0), n5 >>> 0 <= u3 >>> 0 | n5 >>> 0 > 2147483646)
                                        break t;
                                      if ((i5 = b3[724]) && i5 >>> 0 < (a5 = (r7 = b3[722]) + n5 | 0) >>> 0 | r7 >>> 0 >= a5 >>> 0)
                                        break t;
                                      if ((0 | e4) != (0 | (r7 = Qr(n5))))
                                        break c;
                                      break a;
                                    }
                                    if ((n5 = a5 & t3 - o4) >>> 0 > 2147483646)
                                      break t;
                                    if ((0 | (e4 = Qr(n5))) == (b3[r7 >> 2] + b3[r7 + 4 >> 2] | 0))
                                      break o;
                                    r7 = e4;
                                  }
                                  if (!((0 | r7) == -1 | u3 + 48 >>> 0 <= n5 >>> 0)) {
                                    if ((e4 = (e4 = b3[734]) + (c3 - n5 | 0) & 0 - e4) >>> 0 > 2147483646) {
                                      e4 = r7;
                                      break a;
                                    }
                                    if ((0 | Qr(e4)) != -1) {
                                      n5 = e4 + n5 | 0, e4 = r7;
                                      break a;
                                    }
                                    Qr(0 - n5 | 0);
                                    break t;
                                  }
                                  if (e4 = r7, (0 | r7) != -1)
                                    break a;
                                  break t;
                                }
                                E2();
                              }
                              a5 = 0;
                              break e;
                            }
                            e4 = 0;
                            break f;
                          }
                          if ((0 | e4) != -1)
                            break a;
                        }
                        b3[725] = 4 | b3[725];
                      }
                      if (f4 >>> 0 > 2147483646)
                        break i;
                      if ((0 | (e4 = Qr(f4))) == -1 | (0 | (r7 = Qr(0))) == -1 | r7 >>> 0 <= e4 >>> 0)
                        break i;
                      if ((n5 = r7 - e4 | 0) >>> 0 <= u3 + 40 >>> 0)
                        break i;
                    }
                    r7 = b3[722] + n5 | 0, b3[722] = r7, r7 >>> 0 > v2[723] && (b3[723] = r7);
                    a: {
                      n: {
                        t: {
                          if (t3 = b3[620]) {
                            for (r7 = 2904; ; ) {
                              if (((i5 = b3[r7 >> 2]) + (f4 = b3[r7 + 4 >> 2]) | 0) == (0 | e4))
                                break t;
                              if (!(r7 = b3[r7 + 8 >> 2]))
                                break;
                            }
                            break n;
                          }
                          for ((r7 = b3[618]) >>> 0 <= e4 >>> 0 && r7 || (b3[618] = e4), r7 = 0, b3[727] = n5, b3[726] = e4, b3[622] = -1, b3[623] = b3[732], b3[729] = 0; f4 = 2496 + (i5 = r7 << 3) | 0, b3[i5 + 2504 >> 2] = f4, b3[i5 + 2508 >> 2] = f4, (0 | (r7 = r7 + 1 | 0)) != 32; )
                            ;
                          f4 = (i5 = n5 - 40 | 0) - (r7 = e4 + 8 & 7 ? -8 - e4 & 7 : 0) | 0, b3[617] = f4, r7 = r7 + e4 | 0, b3[620] = r7, b3[r7 + 4 >> 2] = 1 | f4, b3[4 + (e4 + i5 | 0) >> 2] = 40, b3[621] = b3[736];
                          break a;
                        }
                        if (!(8 & k3[r7 + 12 | 0] | i5 >>> 0 > t3 >>> 0 | e4 >>> 0 <= t3 >>> 0)) {
                          b3[r7 + 4 >> 2] = f4 + n5, f4 = (r7 = t3 + 8 & 7 ? -8 - t3 & 7 : 0) + t3 | 0, b3[620] = f4, r7 = (e4 = b3[617] + n5 | 0) - r7 | 0, b3[617] = r7, b3[f4 + 4 >> 2] = 1 | r7, b3[4 + (e4 + t3 | 0) >> 2] = 40, b3[621] = b3[736];
                          break a;
                        }
                      }
                      v2[618] > e4 >>> 0 && (b3[618] = e4), f4 = e4 + n5 | 0, r7 = 2904;
                      n: {
                        t: {
                          o: {
                            b: {
                              k: {
                                u: {
                                  for (; ; ) {
                                    if ((0 | f4) != b3[r7 >> 2]) {
                                      if (r7 = b3[r7 + 8 >> 2])
                                        continue;
                                      break u;
                                    }
                                    break;
                                  }
                                  if (!(8 & k3[r7 + 12 | 0]))
                                    break k;
                                }
                                for (r7 = 2904; ; ) {
                                  if ((f4 = b3[r7 >> 2]) >>> 0 <= t3 >>> 0 && (a5 = f4 + b3[r7 + 4 >> 2] | 0) >>> 0 > t3 >>> 0)
                                    break b;
                                  r7 = b3[r7 + 8 >> 2];
                                }
                              }
                              if (b3[r7 >> 2] = e4, b3[r7 + 4 >> 2] = b3[r7 + 4 >> 2] + n5, b3[4 + (c3 = (e4 + 8 & 7 ? -8 - e4 & 7 : 0) + e4 | 0) >> 2] = 3 | u3, f4 = (n5 = f4 + (f4 + 8 & 7 ? -8 - f4 & 7 : 0) | 0) - (o4 = u3 + c3 | 0) | 0, (0 | t3) == (0 | n5)) {
                                b3[620] = o4, r7 = b3[617] + f4 | 0, b3[617] = r7, b3[o4 + 4 >> 2] = 1 | r7;
                                break t;
                              }
                              if (b3[619] == (0 | n5)) {
                                b3[619] = o4, r7 = b3[616] + f4 | 0, b3[616] = r7, b3[o4 + 4 >> 2] = 1 | r7, b3[r7 + o4 >> 2] = r7;
                                break t;
                              }
                              if ((3 & (r7 = b3[n5 + 4 >> 2])) == 1) {
                                t3 = -8 & r7;
                                k:
                                  if (r7 >>> 0 <= 255) {
                                    if (i5 = b3[n5 + 8 >> 2], r7 = r7 >>> 3 | 0, (0 | (e4 = b3[n5 + 12 >> 2])) == (0 | i5)) {
                                      d3 = 2456, h3 = b3[614] & Jr(r7), b3[d3 >> 2] = h3;
                                      break k;
                                    }
                                    b3[i5 + 12 >> 2] = e4, b3[e4 + 8 >> 2] = i5;
                                  } else {
                                    if (u3 = b3[n5 + 24 >> 2], (0 | n5) == (0 | (e4 = b3[n5 + 12 >> 2])))
                                      if ((i5 = b3[(r7 = n5 + 20 | 0) >> 2]) || (i5 = b3[(r7 = n5 + 16 | 0) >> 2])) {
                                        for (; a5 = r7, (i5 = b3[(r7 = (e4 = i5) + 20 | 0) >> 2]) || (r7 = e4 + 16 | 0, i5 = b3[e4 + 16 >> 2]); )
                                          ;
                                        b3[a5 >> 2] = 0;
                                      } else
                                        e4 = 0;
                                    else
                                      r7 = b3[n5 + 8 >> 2], b3[r7 + 12 >> 2] = e4, b3[e4 + 8 >> 2] = r7;
                                    if (u3) {
                                      i5 = b3[n5 + 28 >> 2];
                                      u: {
                                        if (b3[(r7 = 2760 + (i5 << 2) | 0) >> 2] == (0 | n5)) {
                                          if (b3[r7 >> 2] = e4, e4)
                                            break u;
                                          d3 = 2460, h3 = b3[615] & Jr(i5), b3[d3 >> 2] = h3;
                                          break k;
                                        }
                                        if (b3[u3 + (b3[u3 + 16 >> 2] == (0 | n5) ? 16 : 20) >> 2] = e4, !e4)
                                          break k;
                                      }
                                      b3[e4 + 24 >> 2] = u3, (r7 = b3[n5 + 16 >> 2]) && (b3[e4 + 16 >> 2] = r7, b3[r7 + 24 >> 2] = e4), (r7 = b3[n5 + 20 >> 2]) && (b3[e4 + 20 >> 2] = r7, b3[r7 + 24 >> 2] = e4);
                                    }
                                  }
                                n5 = t3 + n5 | 0, f4 = f4 + t3 | 0;
                              }
                              if (b3[n5 + 4 >> 2] = -2 & b3[n5 + 4 >> 2], b3[o4 + 4 >> 2] = 1 | f4, b3[f4 + o4 >> 2] = f4, f4 >>> 0 <= 255) {
                                e4 = 2496 + ((r7 = f4 >>> 3 | 0) << 3) | 0, (f4 = b3[614]) & (r7 = 1 << r7) ? r7 = b3[e4 + 8 >> 2] : (b3[614] = r7 | f4, r7 = e4), b3[e4 + 8 >> 2] = o4, b3[r7 + 12 >> 2] = o4, b3[o4 + 12 >> 2] = e4, b3[o4 + 8 >> 2] = r7;
                                break t;
                              }
                              if (r7 = 31, f4 >>> 0 <= 16777215 && (r7 = f4 >>> 8 | 0, r7 <<= a5 = r7 + 1048320 >>> 16 & 8, r7 = 28 + ((r7 = ((r7 <<= i5 = r7 + 520192 >>> 16 & 4) << (e4 = r7 + 245760 >>> 16 & 2) >>> 15 | 0) - (e4 | i5 | a5) | 0) << 1 | f4 >>> r7 + 21 & 1) | 0), b3[o4 + 28 >> 2] = r7, b3[o4 + 16 >> 2] = 0, b3[o4 + 20 >> 2] = 0, a5 = 2760 + (r7 << 2) | 0, (i5 = b3[615]) & (e4 = 1 << r7)) {
                                for (r7 = f4 << ((0 | r7) == 31 ? 0 : 25 - (r7 >>> 1 | 0) | 0), e4 = b3[a5 >> 2]; ; ) {
                                  if (i5 = e4, (-8 & b3[e4 + 4 >> 2]) == (0 | f4))
                                    break o;
                                  if (e4 = r7 >>> 29 | 0, r7 <<= 1, !(e4 = b3[16 + (a5 = i5 + (4 & e4) | 0) >> 2]))
                                    break;
                                }
                                b3[a5 + 16 >> 2] = o4, b3[o4 + 24 >> 2] = i5;
                              } else
                                b3[615] = e4 | i5, b3[a5 >> 2] = o4, b3[o4 + 24 >> 2] = a5;
                              b3[o4 + 12 >> 2] = o4, b3[o4 + 8 >> 2] = o4;
                              break t;
                            }
                            for (f4 = (i5 = n5 - 40 | 0) - (r7 = e4 + 8 & 7 ? -8 - e4 & 7 : 0) | 0, b3[617] = f4, r7 = r7 + e4 | 0, b3[620] = r7, b3[r7 + 4 >> 2] = 1 | f4, b3[4 + (e4 + i5 | 0) >> 2] = 40, b3[621] = b3[736], b3[(f4 = (r7 = (a5 + (a5 - 39 & 7 ? 39 - a5 & 7 : 0) | 0) - 47 | 0) >>> 0 < t3 + 16 >>> 0 ? t3 : r7) + 4 >> 2] = 27, r7 = b3[729], b3[f4 + 16 >> 2] = b3[728], b3[f4 + 20 >> 2] = r7, r7 = b3[727], b3[f4 + 8 >> 2] = b3[726], b3[f4 + 12 >> 2] = r7, b3[728] = f4 + 8, b3[727] = n5, b3[726] = e4, b3[729] = 0, r7 = f4 + 24 | 0; b3[r7 + 4 >> 2] = 7, e4 = r7 + 8 | 0, r7 = r7 + 4 | 0, e4 >>> 0 < a5 >>> 0; )
                              ;
                            if ((0 | f4) == (0 | t3))
                              break a;
                            if (b3[f4 + 4 >> 2] = -2 & b3[f4 + 4 >> 2], a5 = f4 - t3 | 0, b3[t3 + 4 >> 2] = 1 | a5, b3[f4 >> 2] = a5, a5 >>> 0 <= 255) {
                              e4 = 2496 + ((r7 = a5 >>> 3 | 0) << 3) | 0, (f4 = b3[614]) & (r7 = 1 << r7) ? r7 = b3[e4 + 8 >> 2] : (b3[614] = r7 | f4, r7 = e4), b3[e4 + 8 >> 2] = t3, b3[r7 + 12 >> 2] = t3, b3[t3 + 12 >> 2] = e4, b3[t3 + 8 >> 2] = r7;
                              break a;
                            }
                            if (r7 = 31, b3[t3 + 16 >> 2] = 0, b3[t3 + 20 >> 2] = 0, a5 >>> 0 <= 16777215 && (r7 = a5 >>> 8 | 0, r7 <<= i5 = r7 + 1048320 >>> 16 & 8, r7 = 28 + ((r7 = ((r7 <<= f4 = r7 + 520192 >>> 16 & 4) << (e4 = r7 + 245760 >>> 16 & 2) >>> 15 | 0) - (e4 | f4 | i5) | 0) << 1 | a5 >>> r7 + 21 & 1) | 0), b3[t3 + 28 >> 2] = r7, i5 = 2760 + (r7 << 2) | 0, (f4 = b3[615]) & (e4 = 1 << r7)) {
                              for (r7 = a5 << ((0 | r7) == 31 ? 0 : 25 - (r7 >>> 1 | 0) | 0), e4 = b3[i5 >> 2]; ; ) {
                                if (f4 = e4, (0 | a5) == (-8 & b3[e4 + 4 >> 2]))
                                  break n;
                                if (e4 = r7 >>> 29 | 0, r7 <<= 1, !(e4 = b3[16 + (i5 = f4 + (4 & e4) | 0) >> 2]))
                                  break;
                              }
                              b3[i5 + 16 >> 2] = t3, b3[t3 + 24 >> 2] = f4;
                            } else
                              b3[615] = e4 | f4, b3[i5 >> 2] = t3, b3[t3 + 24 >> 2] = i5;
                            b3[t3 + 12 >> 2] = t3, b3[t3 + 8 >> 2] = t3;
                            break a;
                          }
                          r7 = b3[i5 + 8 >> 2], b3[r7 + 12 >> 2] = o4, b3[i5 + 8 >> 2] = o4, b3[o4 + 24 >> 2] = 0, b3[o4 + 12 >> 2] = i5, b3[o4 + 8 >> 2] = r7;
                        }
                        r7 = c3 + 8 | 0;
                        break r;
                      }
                      r7 = b3[f4 + 8 >> 2], b3[r7 + 12 >> 2] = t3, b3[f4 + 8 >> 2] = t3, b3[t3 + 24 >> 2] = 0, b3[t3 + 12 >> 2] = f4, b3[t3 + 8 >> 2] = r7;
                    }
                    if (!((r7 = b3[617]) >>> 0 <= u3 >>> 0)) {
                      e4 = r7 - u3 | 0, b3[617] = e4, r7 = (f4 = b3[620]) + u3 | 0, b3[620] = r7, b3[r7 + 4 >> 2] = 1 | e4, b3[f4 + 4 >> 2] = 3 | u3, r7 = f4 + 8 | 0;
                      break r;
                    }
                  }
                  b3[613] = 48, r7 = 0;
                  break r;
                }
                f:
                  if (n5) {
                    f4 = b3[a5 + 28 >> 2];
                    i: {
                      if (b3[(r7 = 2760 + (f4 << 2) | 0) >> 2] == (0 | a5)) {
                        if (b3[r7 >> 2] = e4, e4)
                          break i;
                        c3 = Jr(f4) & c3, b3[615] = c3;
                        break f;
                      }
                      if (b3[n5 + (b3[n5 + 16 >> 2] == (0 | a5) ? 16 : 20) >> 2] = e4, !e4)
                        break f;
                    }
                    b3[e4 + 24 >> 2] = n5, (r7 = b3[a5 + 16 >> 2]) && (b3[e4 + 16 >> 2] = r7, b3[r7 + 24 >> 2] = e4), (r7 = b3[a5 + 20 >> 2]) && (b3[e4 + 20 >> 2] = r7, b3[r7 + 24 >> 2] = e4);
                  }
                f:
                  if (i5 >>> 0 <= 15)
                    r7 = i5 + u3 | 0, b3[a5 + 4 >> 2] = 3 | r7, b3[4 + (r7 = r7 + a5 | 0) >> 2] = 1 | b3[r7 + 4 >> 2];
                  else if (b3[a5 + 4 >> 2] = 3 | u3, b3[o4 + 4 >> 2] = 1 | i5, b3[i5 + o4 >> 2] = i5, i5 >>> 0 <= 255)
                    e4 = 2496 + ((r7 = i5 >>> 3 | 0) << 3) | 0, (f4 = b3[614]) & (r7 = 1 << r7) ? r7 = b3[e4 + 8 >> 2] : (b3[614] = r7 | f4, r7 = e4), b3[e4 + 8 >> 2] = o4, b3[r7 + 12 >> 2] = o4, b3[o4 + 12 >> 2] = e4, b3[o4 + 8 >> 2] = r7;
                  else {
                    r7 = 31, i5 >>> 0 <= 16777215 && (r7 = i5 >>> 8 | 0, r7 <<= t3 = r7 + 1048320 >>> 16 & 8, r7 = 28 + ((r7 = ((r7 <<= f4 = r7 + 520192 >>> 16 & 4) << (e4 = r7 + 245760 >>> 16 & 2) >>> 15 | 0) - (e4 | f4 | t3) | 0) << 1 | i5 >>> r7 + 21 & 1) | 0), b3[o4 + 28 >> 2] = r7, b3[o4 + 16 >> 2] = 0, b3[o4 + 20 >> 2] = 0, f4 = 2760 + (r7 << 2) | 0;
                    i: {
                      if ((e4 = 1 << r7) & c3) {
                        for (r7 = i5 << ((0 | r7) == 31 ? 0 : 25 - (r7 >>> 1 | 0) | 0), u3 = b3[f4 >> 2]; ; ) {
                          if ((-8 & b3[(e4 = u3) + 4 >> 2]) == (0 | i5))
                            break i;
                          if (f4 = r7 >>> 29 | 0, r7 <<= 1, !(u3 = b3[16 + (f4 = e4 + (4 & f4) | 0) >> 2]))
                            break;
                        }
                        b3[f4 + 16 >> 2] = o4, b3[o4 + 24 >> 2] = e4;
                      } else
                        b3[615] = e4 | c3, b3[f4 >> 2] = o4, b3[o4 + 24 >> 2] = f4;
                      b3[o4 + 12 >> 2] = o4, b3[o4 + 8 >> 2] = o4;
                      break f;
                    }
                    r7 = b3[e4 + 8 >> 2], b3[r7 + 12 >> 2] = o4, b3[e4 + 8 >> 2] = o4, b3[o4 + 24 >> 2] = 0, b3[o4 + 12 >> 2] = e4, b3[o4 + 8 >> 2] = r7;
                  }
                r7 = a5 + 8 | 0;
                break r;
              }
              e:
                if (A3) {
                  f4 = b3[e4 + 28 >> 2];
                  f: {
                    if (b3[(r7 = 2760 + (f4 << 2) | 0) >> 2] == (0 | e4)) {
                      if (b3[r7 >> 2] = a5, a5)
                        break f;
                      d3 = 2460, h3 = Jr(f4) & o4, b3[d3 >> 2] = h3;
                      break e;
                    }
                    if (b3[(b3[A3 + 16 >> 2] == (0 | e4) ? 16 : 20) + A3 >> 2] = a5, !a5)
                      break e;
                  }
                  b3[a5 + 24 >> 2] = A3, (r7 = b3[e4 + 16 >> 2]) && (b3[a5 + 16 >> 2] = r7, b3[r7 + 24 >> 2] = a5), (r7 = b3[e4 + 20 >> 2]) && (b3[a5 + 20 >> 2] = r7, b3[r7 + 24 >> 2] = a5);
                }
              i5 >>> 0 <= 15 ? (r7 = i5 + u3 | 0, b3[e4 + 4 >> 2] = 3 | r7, b3[4 + (r7 = r7 + e4 | 0) >> 2] = 1 | b3[r7 + 4 >> 2]) : (b3[e4 + 4 >> 2] = 3 | u3, b3[c3 + 4 >> 2] = 1 | i5, b3[i5 + c3 >> 2] = i5, s3 && (f4 = 2496 + ((r7 = s3 >>> 3 | 0) << 3) | 0, a5 = b3[619], (r7 = 1 << r7) & n5 ? r7 = b3[f4 + 8 >> 2] : (b3[614] = r7 | n5, r7 = f4), b3[f4 + 8 >> 2] = a5, b3[r7 + 12 >> 2] = a5, b3[a5 + 12 >> 2] = f4, b3[a5 + 8 >> 2] = r7), b3[619] = c3, b3[616] = i5), r7 = e4 + 8 | 0;
            }
            return j2 = l4 + 16 | 0, 0 | r7;
          }
          function D2(r7, e4, f4, i5, a5, t3) {
            r7 |= 0, e4 |= 0, f4 |= 0, i5 |= 0, a5 |= 0, t3 |= 0;
            for (var u3 = 0, c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = w2(0), h3 = 0, m3 = w2(0), y3 = w2(0), g3 = 0, _3 = 0, P3 = 0, x3 = 0, U3 = 0, j3 = 0, F3 = 0, D3 = 0; (s3 = b3[2032 + (u3 = c3 << 2) >> 2]) && (b3[s3 >> 2] = 0), (s3 = b3[2032 + (4 | u3) >> 2]) && (b3[s3 >> 2] = 0), (s3 = b3[2032 + (8 | u3) >> 2]) && (b3[s3 >> 2] = 0), (u3 = b3[2032 + (12 | u3) >> 2]) && (b3[u3 >> 2] = 0), (0 | (c3 = c3 + 4 | 0)) != 100; )
              ;
            if ((c3 = b3[608]) || (c3 = O2(16), b3[608] = c3), b3[c3 + 8 >> 2] = t3, b3[c3 + 4 >> 2] = 0, b3[c3 + 12 >> 2] = i5, b3[c3 >> 2] = a5, (c3 = b3[609]) || ((a5 = O2(1900)) ? (b3[a5 + 100 >> 2] = 12, b3[a5 + 96 >> 2] = 13, b3[a5 + 92 >> 2] = 14, b3[a5 + 88 >> 2] = 15, o3[a5 + 80 >> 1] = 0, b3[a5 + 52 >> 2] = 0, b3[a5 + 56 >> 2] = 100130, b3[a5 + 16 >> 2] = 0, b3[a5 + 20 >> 2] = 0, b3[a5 >> 2] = 0, b3[a5 + 1896 >> 2] = 0, b3[a5 + 1736 >> 2] = 8, b3[a5 + 1732 >> 2] = 11, b3[a5 + 1728 >> 2] = 6, b3[a5 + 1724 >> 2] = 5, b3[a5 + 1720 >> 2] = 4, b3[a5 + 1716 >> 2] = 3, b3[a5 + 104 >> 2] = 16, b3[a5 + 76 >> 2] = 17, b3[a5 + 12 >> 2] = 18, b3[a5 + 24 >> 2] = 0) : a5 = 0, b3[609] = a5, mr2(a5, 100107, 34), mr2(b3[609], 100100, 35), mr2(b3[609], 100102, 36), mr2(b3[609], 100105, 37), mr2(b3[609], 100103, 38), mr2(b3[609], 100104, 39), b3[b3[609] + 56 >> 2] = 100130, a5 = b3[609], d2[a5 + 16 >> 2] = 0, d2[a5 + 24 >> 2] = 1, d2[a5 + 20 >> 2] = 0, c3 = b3[609]), a5 = 0, t3 = b3[608], b3[c3 >> 2] && cr2(c3, 0), b3[c3 + 112 >> 2] = 0, b3[c3 >> 2] = 1, n4[c3 + 108 | 0] = 0, b3[c3 + 1896 >> 2] = t3, b3[c3 + 8 >> 2] = 0, (0 | f4) > 0)
              for (t3 = 0; ; ) {
                if (g3 = b3[(t3 << 2) + e4 >> 2], u3 = b3[609], b3[u3 >> 2] != 1 && cr2(u3, 1), b3[u3 >> 2] = 2, b3[u3 + 4 >> 2] = 0, b3[u3 + 112 >> 2] >= 1 && (n4[u3 + 108 | 0] = 1), c3 = 0, (0 | g3) > 0)
                  for (; ; ) {
                    l4 = _3 = (p2(a5 + c3 | 0, i5) << 2) + r7 | 0, s3 = b3[609], b3[s3 >> 2] != 2 && cr2(s3, 2);
                    r: {
                      e: {
                        f: {
                          if (k3[s3 + 108 | 0]) {
                            if (u3 = Rr2(), b3[s3 + 8 >> 2] = u3, !u3)
                              break f;
                            if ((0 | (u3 = b3[s3 + 112 >> 2])) >= 1)
                              for (P3 = 116 + (s3 + (u3 << 4) | 0) | 0, A3 = s3 + 116 | 0, u3 = b3[s3 + 4 >> 2]; ; ) {
                                D3 = b3[A3 + 12 >> 2];
                                i: {
                                  if (!u3) {
                                    if (!(u3 = br2(b3[s3 + 8 >> 2])))
                                      break f;
                                    if (tr2(u3, b3[u3 + 4 >> 2]))
                                      break i;
                                    break f;
                                  }
                                  if (!ir2(u3))
                                    break f;
                                  u3 = b3[u3 + 12 >> 2];
                                }
                                if (h3 = b3[u3 + 16 >> 2], b3[h3 + 12 >> 2] = D3, d2[h3 + 16 >> 2] = d2[A3 >> 2], v3 = d2[A3 + 4 >> 2], b3[h3 + 24 >> 2] = 0, d2[h3 + 20 >> 2] = v3, b3[u3 + 28 >> 2] = 1, b3[b3[u3 + 4 >> 2] + 28 >> 2] = -1, b3[s3 + 4 >> 2] = u3, !(P3 >>> 0 > (A3 = A3 + 16 | 0) >>> 0))
                                  break;
                              }
                            n4[s3 + 108 | 0] = 0, b3[s3 + 112 >> 2] = 0, b3[s3 + 4 >> 2] = 0;
                          }
                          A3 = (U3 = +(v3 = (x3 = +(v3 = d2[l4 + 4 >> 2])) < -1e37 ? w2(-9999999933815813e21) : v3)) > 1e37, h3 = (F3 = +(m3 = (j3 = +(m3 = d2[l4 >> 2])) < -1e37 ? w2(-9999999933815813e21) : m3)) > 1e37, ((u3 = +(y3 = d2[l4 + 8 >> 2]) < -1e37) | (l4 = +(y3 = u3 ? w2(-9999999933815813e21) : y3) > 1e37) | x3 < -1e37 | U3 > 1e37 || F3 > 1e37 || j3 < -1e37) && ((0 | (u3 = b3[s3 + 1732 >> 2])) == 11 ? be[b3[s3 + 12 >> 2]](100155) : be[0 | u3](100155, b3[s3 + 1896 >> 2])), v3 = A3 ? w2(9999999933815813e21) : v3, m3 = h3 ? w2(9999999933815813e21) : m3;
                          i: {
                            if (!b3[s3 + 8 >> 2]) {
                              if ((0 | (A3 = b3[s3 + 112 >> 2])) <= 99) {
                                d2[124 + (u3 = s3 + (A3 << 4) | 0) >> 2] = l4 ? w2(9999999933815813e21) : y3, d2[u3 + 120 >> 2] = v3, d2[u3 + 116 >> 2] = m3, b3[u3 + 128 >> 2] = _3, b3[s3 + 112 >> 2] = A3 + 1;
                                break r;
                              }
                              if (u3 = Rr2(), b3[s3 + 8 >> 2] = u3, !u3)
                                break i;
                              if ((0 | (u3 = b3[s3 + 112 >> 2])) >= 1)
                                for (h3 = 116 + (s3 + (u3 << 4) | 0) | 0, A3 = s3 + 116 | 0, u3 = b3[s3 + 4 >> 2]; ; ) {
                                  P3 = b3[A3 + 12 >> 2];
                                  a: {
                                    if (!u3) {
                                      if (!(u3 = br2(b3[s3 + 8 >> 2])))
                                        break i;
                                      if (tr2(u3, b3[u3 + 4 >> 2]))
                                        break a;
                                      break i;
                                    }
                                    if (!ir2(u3))
                                      break i;
                                    u3 = b3[u3 + 12 >> 2];
                                  }
                                  if (l4 = b3[u3 + 16 >> 2], b3[l4 + 12 >> 2] = P3, d2[l4 + 16 >> 2] = d2[A3 >> 2], y3 = d2[A3 + 4 >> 2], b3[l4 + 24 >> 2] = 0, d2[l4 + 20 >> 2] = y3, b3[u3 + 28 >> 2] = 1, b3[b3[u3 + 4 >> 2] + 28 >> 2] = -1, b3[s3 + 4 >> 2] = u3, !(h3 >>> 0 > (A3 = A3 + 16 | 0) >>> 0))
                                    break;
                                }
                              n4[s3 + 108 | 0] = 0, b3[s3 + 112 >> 2] = 0;
                            }
                            a: {
                              n: {
                                if (!(u3 = b3[s3 + 4 >> 2])) {
                                  if (!(u3 = br2(b3[s3 + 8 >> 2])))
                                    break a;
                                  if (tr2(u3, b3[u3 + 4 >> 2]))
                                    break n;
                                  break a;
                                }
                                if (!ir2(u3))
                                  break a;
                                u3 = b3[u3 + 12 >> 2];
                              }
                              A3 = b3[u3 + 16 >> 2], d2[A3 + 16 >> 2] = m3, b3[A3 + 12 >> 2] = _3, b3[A3 + 24 >> 2] = 0, d2[A3 + 20 >> 2] = v3, b3[u3 + 28 >> 2] = 1, b3[b3[u3 + 4 >> 2] + 28 >> 2] = -1, b3[s3 + 4 >> 2] = u3;
                              break r;
                            }
                            if ((0 | (u3 = b3[s3 + 1732 >> 2])) != 11)
                              break e;
                            be[b3[s3 + 12 >> 2]](100902);
                            break r;
                          }
                          if ((0 | (u3 = b3[s3 + 1732 >> 2])) != 11)
                            break e;
                          be[b3[s3 + 12 >> 2]](100902);
                          break r;
                        }
                        if ((0 | (u3 = b3[s3 + 1732 >> 2])) == 11) {
                          be[b3[s3 + 12 >> 2]](100902);
                          break r;
                        }
                      }
                      be[0 | u3](100902, b3[s3 + 1896 >> 2]);
                    }
                    if ((0 | g3) == (0 | (c3 = c3 + 1 | 0)))
                      break;
                  }
                if (u3 = b3[609], b3[u3 >> 2] != 2 && cr2(u3, 2), b3[u3 >> 2] = 1, a5 = a5 + g3 | 0, (0 | (t3 = t3 + 1 | 0)) == (0 | f4))
                  break;
              }
            f4 = b3[609], r7 = 0, e4 = O2(40), b3[e4 >> 2] = 0, a5 = Tr2(s3 = f4 + 1740 | 0, 1, e4, 4), t3 = 0 | R2();
            r: {
              e: {
                f: {
                  i: {
                    a: {
                      n:
                        for (; ; ) {
                          t: {
                            o: {
                              b: {
                                k: {
                                  u: {
                                    c: {
                                      s: {
                                        if (r7) {
                                          if ((0 | (r7 = b3[f4 + 1732 >> 2])) != 11) {
                                            if (e4 = b3[f4 + 1896 >> 2], b3[611] = 0, M2(0 | r7, 100902, 0 | e4), r7 = b3[611], b3[611] = 0, e4 = -1, !r7)
                                              break c;
                                            if (!(i5 = b3[612]))
                                              break c;
                                            if (e4 = Hr(b3[r7 >> 2], a5, t3))
                                              break s;
                                            break a;
                                          }
                                          if (r7 = b3[f4 + 12 >> 2], b3[611] = 0, S2(0 | r7, 100902), r7 = b3[611], b3[611] = 0, e4 = -1, !r7)
                                            break k;
                                          if (!(i5 = b3[612]))
                                            break k;
                                          if (e4 = Hr(b3[r7 >> 2], a5, t3))
                                            break u;
                                          break a;
                                        }
                                        if (b3[f4 >> 2] == 1)
                                          break t;
                                        if (b3[611] = 0, M2(19, 0 | f4, 1), r7 = b3[611], b3[611] = 0, e4 = -1, !r7)
                                          break o;
                                        if (!(i5 = b3[612]))
                                          break o;
                                        if (e4 = Hr(b3[r7 >> 2], a5, t3))
                                          break b;
                                        break a;
                                      }
                                      C2(0 | i5);
                                    }
                                    if (r7 = 0 | R2(), (0 | e4) == 1)
                                      continue;
                                    break r;
                                  }
                                  C2(0 | i5);
                                }
                                if (r7 = 0 | R2(), (0 | e4) == 1)
                                  continue;
                                break r;
                              }
                              C2(0 | i5);
                            }
                            if (r7 = 0 | R2(), (0 | e4) == 1)
                              continue;
                          }
                          b3[f4 >> 2] = 0;
                          t: {
                            o: {
                              b: {
                                if (!b3[f4 + 8 >> 2]) {
                                  if (!(k3[f4 + 80 | 0] | b3[f4 + 104 >> 2] != 16)) {
                                    if (b3[611] = 0, u3 = 0 | I2(20, 0 | f4), r7 = b3[611], b3[611] = 0, e4 = -1, r7 && (i5 = b3[612])) {
                                      if (!(e4 = Hr(b3[r7 >> 2], a5, t3)))
                                        break a;
                                      C2(0 | i5);
                                    }
                                    if (r7 = 0 | R2(), (0 | e4) == 1)
                                      continue;
                                    if (u3) {
                                      b3[f4 + 1896 >> 2] = 0;
                                      break r;
                                    }
                                  }
                                  if (b3[611] = 0, i5 = 0 | T2(21), r7 = b3[611], b3[611] = 0, e4 = -1, r7 && (c3 = b3[612])) {
                                    if (!(e4 = Hr(b3[r7 >> 2], a5, t3)))
                                      break i;
                                    C2(0 | c3);
                                  }
                                  if (r7 = 0 | R2(), (0 | e4) == 1)
                                    continue;
                                  if (b3[f4 + 8 >> 2] = i5, !i5)
                                    break b;
                                  if ((0 | (r7 = b3[f4 + 112 >> 2])) >= 1)
                                    for (A3 = 116 + (f4 + (r7 << 4) | 0) | 0, i5 = f4 + 116 | 0, e4 = b3[f4 + 4 >> 2]; ; ) {
                                      g3 = b3[i5 + 12 >> 2];
                                      k: {
                                        u: {
                                          c: {
                                            s: {
                                              A: {
                                                l: {
                                                  if (!e4) {
                                                    if (r7 = b3[f4 + 8 >> 2], b3[611] = 0, e4 = 0 | I2(22, 0 | r7), r7 = b3[611], b3[611] = 0, c3 = -1, !r7)
                                                      break A;
                                                    if (!(u3 = b3[612]))
                                                      break A;
                                                    if (c3 = Hr(b3[r7 >> 2], a5, t3))
                                                      break l;
                                                    break f;
                                                  }
                                                  if (b3[611] = 0, l4 = 0 | I2(23, 0 | e4), r7 = b3[611], b3[611] = 0, c3 = -1, !r7)
                                                    break c;
                                                  if (!(u3 = b3[612]))
                                                    break c;
                                                  if (c3 = Hr(b3[r7 >> 2], a5, t3))
                                                    break s;
                                                  break f;
                                                }
                                                C2(0 | u3);
                                              }
                                              if (r7 = 0 | R2(), (0 | c3) != 1)
                                                break u;
                                              continue n;
                                            }
                                            C2(0 | u3);
                                          }
                                          if (r7 = 0 | R2(), (0 | c3) == 1)
                                            continue n;
                                          if (!l4)
                                            break b;
                                          e4 = b3[e4 + 12 >> 2];
                                          break k;
                                        }
                                        if (!e4)
                                          break b;
                                        if (r7 = b3[e4 + 4 >> 2], b3[611] = 0, l4 = 0 | B2(24, 0 | e4, 0 | r7), r7 = b3[611], b3[611] = 0, c3 = -1, r7 && (u3 = b3[612])) {
                                          if (!(c3 = Hr(b3[r7 >> 2], a5, t3)))
                                            break f;
                                          C2(0 | u3);
                                        }
                                        if (r7 = 0 | R2(), (0 | c3) == 1)
                                          continue n;
                                        if (!l4)
                                          break b;
                                      }
                                      if (r7 = b3[e4 + 16 >> 2], b3[r7 + 12 >> 2] = g3, d2[r7 + 16 >> 2] = d2[i5 >> 2], v3 = d2[i5 + 4 >> 2], b3[r7 + 24 >> 2] = 0, d2[r7 + 20 >> 2] = v3, b3[e4 + 28 >> 2] = 1, b3[b3[e4 + 4 >> 2] + 28 >> 2] = -1, b3[f4 + 4 >> 2] = e4, !(A3 >>> 0 > (i5 = i5 + 16 | 0) >>> 0))
                                        break;
                                    }
                                  n4[f4 + 108 | 0] = 0, b3[f4 + 112 >> 2] = 0;
                                }
                                if (b3[611] = 0, K2(f4), r7 = b3[611], b3[611] = 0, e4 = -1, !r7)
                                  break t;
                                if (!(i5 = b3[612]))
                                  break t;
                                if (e4 = Hr(b3[r7 >> 2], a5, t3))
                                  break o;
                                break a;
                              }
                              if (b3[611] = 0, M2(26, 0 | s3, 1), e4 = b3[611], b3[611] = 0, e4 && (r7 = b3[612])) {
                                if (!Hr(b3[e4 >> 2], a5, t3))
                                  break e;
                                C2(0 | r7);
                              }
                              r7 = 0 | R2();
                              continue;
                            }
                            C2(0 | i5);
                          }
                          if (r7 = 0 | R2(), (0 | e4) != 1) {
                            if (b3[611] = 0, u3 = 0 | I2(27, 0 | f4), r7 = b3[611], b3[611] = 0, e4 = -1, r7 && (i5 = b3[612])) {
                              if (!(e4 = Hr(b3[r7 >> 2], a5, t3)))
                                break a;
                              C2(0 | i5);
                            }
                            if (r7 = 0 | R2(), (0 | e4) != 1) {
                              t: {
                                o: {
                                  b: {
                                    k: {
                                      u: {
                                        c: {
                                          s: {
                                            A: {
                                              l: {
                                                v: {
                                                  d: {
                                                    if (!u3) {
                                                      if (b3[611] = 0, M2(26, 0 | s3, 1), e4 = b3[611], b3[611] = 0, !e4)
                                                        break v;
                                                      if (!(r7 = b3[612]))
                                                        break v;
                                                      if (Hr(b3[e4 >> 2], a5, t3))
                                                        break d;
                                                      break e;
                                                    }
                                                    if (e4 = b3[f4 + 8 >> 2], k3[f4 + 60 | 0])
                                                      break c;
                                                    if (k3[f4 + 81 | 0]) {
                                                      if (b3[611] = 0, c3 = 0 | L2(28, 0 | e4, 1, 1), r7 = b3[611], b3[611] = 0, i5 = -1, !r7)
                                                        break s;
                                                      if (!(u3 = b3[612]))
                                                        break s;
                                                      if (i5 = Hr(b3[r7 >> 2], a5, t3))
                                                        break l;
                                                      break f;
                                                    }
                                                    if (b3[611] = 0, c3 = 0 | I2(29, 0 | e4), r7 = b3[611], b3[611] = 0, i5 = -1, !r7)
                                                      break s;
                                                    if (!(u3 = b3[612]))
                                                      break s;
                                                    if (i5 = Hr(b3[r7 >> 2], a5, t3))
                                                      break A;
                                                    break f;
                                                  }
                                                  C2(0 | r7);
                                                }
                                                r7 = 0 | R2();
                                                continue;
                                              }
                                              C2(0 | u3);
                                              break s;
                                            }
                                            C2(0 | u3);
                                          }
                                          if (r7 = 0 | R2(), (0 | i5) == 1)
                                            continue;
                                          s: {
                                            A: {
                                              l: {
                                                v: {
                                                  d: {
                                                    h: {
                                                      p: {
                                                        if (!c3) {
                                                          if (b3[611] = 0, M2(26, 0 | s3, 1), e4 = b3[611], b3[611] = 0, !e4)
                                                            break h;
                                                          if (!(r7 = b3[612]))
                                                            break h;
                                                          if (Hr(b3[e4 >> 2], a5, t3))
                                                            break p;
                                                          break e;
                                                        }
                                                        if (!(b3[f4 + 88 >> 2] != 15 | b3[f4 + 100 >> 2] != 12 | b3[f4 + 96 >> 2] != 13 | b3[f4 + 92 >> 2] != 14 || b3[f4 + 1716 >> 2] != 3 | b3[f4 + 1728 >> 2] != 6 | b3[f4 + 1724 >> 2] != 5 || b3[f4 + 1720 >> 2] != 4))
                                                          break s;
                                                        if (k3[f4 + 81 | 0]) {
                                                          if (b3[611] = 0, M2(30, 0 | f4, 0 | e4), r7 = b3[611], b3[611] = 0, i5 = -1, !r7)
                                                            break v;
                                                          if (!(c3 = b3[612]))
                                                            break v;
                                                          if (i5 = Hr(b3[r7 >> 2], a5, t3))
                                                            break d;
                                                          break i;
                                                        }
                                                        if (b3[611] = 0, M2(31, 0 | f4, 0 | e4), r7 = b3[611], b3[611] = 0, i5 = -1, !r7)
                                                          break A;
                                                        if (!(c3 = b3[612]))
                                                          break A;
                                                        if (i5 = Hr(b3[r7 >> 2], a5, t3))
                                                          break l;
                                                        break i;
                                                      }
                                                      C2(0 | r7);
                                                    }
                                                    r7 = 0 | R2();
                                                    continue;
                                                  }
                                                  C2(0 | c3);
                                                }
                                                if (r7 = 0 | R2(), (0 | i5) == 1)
                                                  continue;
                                                break s;
                                              }
                                              C2(0 | c3);
                                            }
                                            if (r7 = 0 | R2(), (0 | i5) == 1)
                                              continue;
                                          }
                                          if (b3[f4 + 104 >> 2] != 16) {
                                            if (b3[611] = 0, nr2(e4), r7 = b3[611], b3[611] = 0, i5 = -1, !r7)
                                              break k;
                                            if (!(c3 = b3[612]))
                                              break k;
                                            if (i5 = Hr(b3[r7 >> 2], a5, t3))
                                              break u;
                                            break i;
                                          }
                                        }
                                        if (b3[611] = 0, Pr2(e4), r7 = b3[611], b3[611] = 0, e4 = -1, !r7)
                                          break o;
                                        if (!(i5 = b3[612]))
                                          break o;
                                        if (e4 = Hr(b3[r7 >> 2], a5, t3))
                                          break b;
                                        break a;
                                      }
                                      C2(0 | c3);
                                    }
                                    if (r7 = 0 | R2(), (0 | i5) != 1)
                                      break t;
                                    continue;
                                  }
                                  C2(0 | i5);
                                }
                                if (r7 = 0 | R2(), (0 | e4) == 1)
                                  continue;
                                b3[f4 + 8 >> 2] = 0, b3[f4 + 1896 >> 2] = 0;
                                break r;
                              }
                              if (r7 = b3[f4 + 104 >> 2], b3[611] = 0, S2(0 | r7, 0 | e4), r7 = b3[611], b3[611] = 0, e4 = -1, r7 && (i5 = b3[612])) {
                                if (!(e4 = Hr(b3[r7 >> 2], a5, t3)))
                                  break a;
                                C2(0 | i5);
                              }
                              if (r7 = 0 | R2(), (0 | e4) != 1)
                                break;
                            }
                          }
                        }
                      b3[f4 + 1896 >> 2] = 0, b3[f4 + 8 >> 2] = 0;
                      break r;
                    }
                    Zr(r7, i5), E2();
                  }
                  Zr(r7, c3), E2();
                }
                Zr(r7, u3), E2();
              }
              Zr(e4, r7), E2();
            }
            return Y2(a5), b3[b3[608] + 4 >> 2];
          }
          function H2(r7, e4) {
            var f4 = w2(0), i5 = w2(0), a5 = 0, t3 = w2(0), o4 = w2(0), u3 = 0, c3 = 0, s3 = w2(0), A3 = 0, l4 = 0, v3 = 0, p3 = w2(0), m3 = w2(0), y3 = w2(0), C3 = 0, R3 = 0, M3 = 0, I3 = 0, S3 = 0, _3 = 0, P3 = 0, x3 = 0, L3 = 0, B3 = w2(0), T3 = 0, U3 = w2(0);
            j2 = u3 = j2 - 144 | 0, L3 = b3[b3[b3[e4 + 4 >> 2] + 8 >> 2] >> 2], P3 = b3[L3 >> 2], M3 = b3[P3 + 16 >> 2], S3 = b3[b3[P3 + 4 >> 2] + 16 >> 2], _3 = b3[e4 >> 2], I3 = b3[b3[_3 + 4 >> 2] + 16 >> 2], C3 = b3[_3 + 16 >> 2], pr2(I3, b3[r7 + 72 >> 2], C3) > w2(0) && (f4 = d2[I3 + 28 >> 2], i5 = d2[I3 + 32 >> 2], a5 = b3[r7 + 72 >> 2], t3 = d2[a5 + 28 >> 2], o4 = d2[a5 + 32 >> 2], s3 = d2[C3 + 28 >> 2], h2[u3 + 40 >> 3] = d2[C3 + 32 >> 2], h2[u3 + 32 >> 3] = s3, h2[u3 + 24 >> 3] = o4, h2[u3 + 16 >> 3] = t3, h2[u3 + 8 >> 3] = i5, h2[u3 >> 3] = f4, Gr(1098, u3));
            r: {
              e: {
                f:
                  if ((0 | C3) != (0 | M3) && !((m3 = (f4 = d2[C3 + 32 >> 2]) <= (i5 = d2[I3 + 32 >> 2]) ? f4 : i5) > ((i5 = d2[M3 + 32 >> 2]) >= (t3 = d2[S3 + 32 >> 2]) ? i5 : t3))) {
                    i: {
                      if (!(!(f4 <= i5) | (t3 = d2[C3 + 28 >> 2]) != (o4 = d2[M3 + 28 >> 2])) || t3 < o4) {
                        if (!(pr2(S3, C3, M3) > w2(0)))
                          break i;
                        break f;
                      }
                      if (pr2(I3, M3, C3) < w2(0))
                        break f;
                    }
                    v3 = S3, a5 = M3, l4 = C3, (f4 = d2[(A3 = I3) + 28 >> 2]) < (i5 = d2[C3 + 28 >> 2]) | (d2[A3 + 32 >> 2] <= d2[l4 + 32 >> 2] ? f4 == i5 : 0) ? (c3 = l4, l4 = A3) : c3 = A3, (f4 = d2[a5 + 28 >> 2]) > (i5 = d2[v3 + 28 >> 2]) | (d2[v3 + 32 >> 2] <= d2[a5 + 32 >> 2] ? f4 == i5 : 0) ? (f4 = i5, A3 = a5, a5 = v3) : A3 = v3, f4 > (i5 = d2[l4 + 28 >> 2]) | (d2[l4 + 32 >> 2] <= d2[a5 + 32 >> 2] ? f4 == i5 : 0) ? (i5 = f4, v3 = A3, R3 = a5, A3 = c3, a5 = l4) : (v3 = c3, R3 = l4), c3 = u3;
                    i:
                      if ((o4 = d2[A3 + 28 >> 2]) > i5 | (d2[R3 + 32 >> 2] <= d2[A3 + 32 >> 2] ? i5 == o4 : 0))
                        if (p3 = d2[v3 + 28 >> 2], !(d2[A3 + 32 >> 2] <= d2[v3 + 32 >> 2]) | o4 != p3 && !(p3 > o4))
                          if (i5 = pr2(a5, R3, A3), f4 = pr2(a5, v3, A3), l4 = w2(i5 - f4) < w2(0), (t3 = w2(g2(l4 ? w2(-i5) : i5, w2(0)))) <= (i5 = w2(g2(l4 ? f4 : w2(-f4), w2(0))))) {
                            if (o4 = d2[R3 + 28 >> 2], s3 = d2[v3 + 28 >> 2], f4 = w2(w2(o4 + s3) * w2(0.5)), i5 == w2(0))
                              break i;
                            f4 = w2(o4 + w2(w2(t3 / w2(t3 + i5)) * w2(s3 - o4)));
                          } else
                            f4 = d2[v3 + 28 >> 2], f4 = w2(f4 + w2(w2(i5 / w2(t3 + i5)) * w2(d2[R3 + 28 >> 2] - f4)));
                        else {
                          if (f4 = w2(0), s3 = w2(o4 - i5), t3 = w2(i5 - d2[a5 + 28 >> 2]), (m3 = w2(s3 + t3)) > w2(0) && (f4 = d2[((l4 = t3 < s3) ? a5 : A3) + 32 >> 2], f4 = w2(w2(d2[R3 + 32 >> 2] - f4) + w2(w2((l4 ? t3 : s3) / m3) * w2(f4 - d2[(l4 ? A3 : a5) + 32 >> 2])))), B3 = w2(-f4), m3 = f4, p3 = w2(p3 - o4), (t3 = w2(s3 + p3)) > w2(0) && (y3 = d2[((l4 = s3 < p3) ? R3 : v3) + 32 >> 2], y3 = w2(w2(d2[A3 + 32 >> 2] - y3) + w2(w2((l4 ? s3 : p3) / t3) * w2(y3 - d2[(l4 ? v3 : R3) + 32 >> 2])))), l4 = w2(f4 + y3) < w2(0), (p3 = w2(g2(l4 ? B3 : m3, w2(0)))) <= (t3 = w2(g2(l4 ? w2(-y3) : y3, w2(0))))) {
                            if (f4 = w2(w2(i5 + o4) * w2(0.5)), t3 == w2(0))
                              break i;
                            f4 = w2(i5 + w2(s3 * w2(p3 / w2(p3 + t3))));
                            break i;
                          }
                          f4 = w2(o4 + w2(w2(i5 - o4) * w2(t3 / w2(p3 + t3))));
                        }
                      else
                        f4 = w2(w2(i5 + o4) * w2(0.5));
                    d2[c3 + 84 >> 2] = f4, (f4 = d2[a5 + 32 >> 2]) < (i5 = d2[A3 + 32 >> 2]) | (d2[a5 + 28 >> 2] <= d2[A3 + 28 >> 2] ? f4 == i5 : 0) ? (c3 = A3, A3 = a5) : c3 = a5, (i5 = d2[v3 + 32 >> 2]) > (f4 = d2[R3 + 32 >> 2]) | (d2[R3 + 28 >> 2] <= d2[v3 + 28 >> 2] ? f4 == i5 : 0) ? (i5 = f4, a5 = v3, v3 = R3) : a5 = R3, (f4 = d2[A3 + 32 >> 2]) < i5 | (d2[A3 + 28 >> 2] <= d2[v3 + 28 >> 2] ? f4 == i5 : 0) ? (R3 = a5, l4 = v3, a5 = c3, v3 = A3) : (R3 = c3, l4 = A3);
                    i: {
                      a:
                        if ((o4 = d2[l4 + 32 >> 2]) < (s3 = d2[a5 + 32 >> 2]) | (d2[l4 + 28 >> 2] <= d2[a5 + 28 >> 2] ? o4 == s3 : 0)) {
                          if (y3 = d2[R3 + 32 >> 2], !(!(d2[a5 + 28 >> 2] <= d2[R3 + 28 >> 2]) | s3 != y3) || y3 > s3) {
                            if (f4 = w2(0), i5 = w2(0), p3 = w2(s3 - o4), t3 = w2(o4 - d2[v3 + 32 >> 2]), (m3 = w2(p3 + t3)) > w2(0) && (i5 = d2[((c3 = t3 < p3) ? v3 : a5) + 28 >> 2], i5 = w2(w2(d2[l4 + 28 >> 2] - i5) + w2(w2((c3 ? t3 : p3) / m3) * w2(i5 - d2[(c3 ? a5 : v3) + 28 >> 2])))), U3 = w2(-i5), m3 = i5, y3 = w2(y3 - s3), (t3 = w2(p3 + y3)) > w2(0) && (B3 = d2[a5 + 28 >> 2], f4 = d2[((a5 = p3 < y3) ? l4 : R3) + 28 >> 2], f4 = w2(w2(B3 - f4) + w2(w2((a5 ? p3 : y3) / t3) * w2(f4 - d2[(a5 ? R3 : l4) + 28 >> 2])))), a5 = w2(i5 + f4) < w2(0), (i5 = w2(g2(a5 ? U3 : m3, w2(0)))) <= (f4 = w2(g2(a5 ? w2(-f4) : f4, w2(0))))) {
                              if (f4 == w2(0))
                                break a;
                              d2[u3 + 88 >> 2] = o4 + w2(p3 * w2(i5 / w2(i5 + f4)));
                              break i;
                            }
                            d2[u3 + 88 >> 2] = s3 + w2(w2(o4 - s3) * w2(f4 / w2(i5 + f4)));
                            break i;
                          }
                          if (f4 = w2(0), i5 = w2(0), t3 = w2(s3 - o4), p3 = d2[v3 + 32 >> 2], m3 = w2(o4 - p3), w2(t3 + m3) > w2(0) && (i5 = d2[l4 + 28 >> 2], i5 = w2(w2(m3 * w2(i5 - d2[a5 + 28 >> 2])) + w2(t3 * w2(i5 - d2[v3 + 28 >> 2])))), m3 = w2(-i5), t3 = i5, s3 = w2(s3 - y3), p3 = w2(y3 - p3), w2(s3 + p3) > w2(0) && (f4 = d2[R3 + 28 >> 2], f4 = w2(w2(p3 * w2(f4 - d2[a5 + 28 >> 2])) + w2(s3 * w2(f4 - d2[v3 + 28 >> 2])))), a5 = w2(i5 - f4) < w2(0), (i5 = w2(g2(a5 ? m3 : t3, w2(0)))) <= (f4 = w2(g2(a5 ? f4 : w2(-f4), w2(0))))) {
                            if (f4 == w2(0)) {
                              d2[u3 + 88 >> 2] = w2(o4 + y3) * w2(0.5);
                              break i;
                            }
                            d2[u3 + 88 >> 2] = o4 + w2(w2(y3 - o4) * w2(i5 / w2(i5 + f4)));
                            break i;
                          }
                          d2[u3 + 88 >> 2] = y3 + w2(w2(o4 - y3) * w2(f4 / w2(i5 + f4)));
                          break i;
                        }
                      d2[u3 + 88 >> 2] = w2(o4 + s3) * w2(0.5);
                    }
                    f4 = d2[u3 + 84 >> 2], c3 = b3[r7 + 72 >> 2];
                    i: {
                      if (f4 < (t3 = d2[c3 + 28 >> 2]))
                        i5 = d2[c3 + 32 >> 2];
                      else {
                        if (f4 != t3)
                          break i;
                        if (!((i5 = d2[c3 + 32 >> 2]) >= d2[u3 + 88 >> 2]))
                          break i;
                      }
                      d2[u3 + 88 >> 2] = i5, d2[u3 + 84 >> 2] = t3, f4 = t3;
                    }
                    A3 = a5 = C3, (i5 = t3 = d2[a5 + 28 >> 2]) < (o4 = d2[M3 + 28 >> 2]) || t3 == o4 && (i5 = t3, A3 = C3, d2[a5 + 32 >> 2] <= d2[M3 + 32 >> 2]) || (i5 = o4, A3 = M3), a5 = A3;
                    i: {
                      if (f4 > i5)
                        o4 = d2[a5 + 32 >> 2];
                      else {
                        if (f4 != i5)
                          break i;
                        if (!((o4 = d2[a5 + 32 >> 2]) <= d2[u3 + 88 >> 2]))
                          break i;
                      }
                      d2[u3 + 88 >> 2] = o4, d2[u3 + 84 >> 2] = i5, t3 = d2[C3 + 28 >> 2], f4 = i5;
                    }
                    if (d2[M3 + 28 >> 2] != f4 | d2[u3 + 88 >> 2] != d2[M3 + 32 >> 2] && (d2[u3 + 88 >> 2] != d2[C3 + 32 >> 2] || f4 != t3)) {
                      i: {
                        f4 = d2[c3 + 28 >> 2];
                        a: {
                          if (d2[I3 + 32 >> 2] != d2[c3 + 32 >> 2] || f4 != d2[I3 + 28 >> 2]) {
                            if (pr2(I3, c3, u3 + 56 | 0) >= w2(0))
                              break a;
                            c3 = b3[r7 + 72 >> 2], f4 = d2[c3 + 28 >> 2];
                          }
                          if (d2[S3 + 32 >> 2] == d2[c3 + 32 >> 2] && f4 == d2[S3 + 28 >> 2])
                            break i;
                          if (!(pr2(S3, c3, u3 + 56 | 0) <= w2(0)))
                            break i;
                        }
                        if ((0 | (a5 = b3[r7 + 72 >> 2])) == (0 | S3)) {
                          if (!ir2(b3[_3 + 4 >> 2]))
                            break r;
                          if (!tr2(b3[P3 + 4 >> 2], _3))
                            break r;
                          for (a5 = b3[b3[e4 >> 2] + 16 >> 2]; e4 = b3[b3[b3[e4 + 4 >> 2] + 4 >> 2] >> 2], A3 = b3[e4 >> 2], (0 | a5) == b3[A3 + 16 >> 2]; )
                            ;
                          if (c3 = e4, k3[e4 + 15 | 0] && (c3 = 0, (a5 = er2(b3[b3[b3[b3[b3[e4 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], b3[A3 + 12 >> 2])) && rr2(b3[e4 >> 2]) && (b3[e4 >> 2] = a5, n4[e4 + 15 | 0] = 0, b3[a5 + 24 >> 2] = e4, c3 = b3[b3[b3[e4 + 4 >> 2] + 4 >> 2] >> 2])), !c3)
                            break r;
                          a5 = b3[b3[b3[c3 + 4 >> 2] + 8 >> 2] >> 2], e4 = b3[a5 >> 2], wr2(r7, a5, L3), T3 = 1, ar2(r7, c3, b3[b3[e4 + 4 >> 2] + 12 >> 2], e4, e4, 1);
                          break f;
                        }
                        if ((0 | a5) == (0 | I3)) {
                          if (!ir2(b3[P3 + 4 >> 2]))
                            break r;
                          if (!tr2(b3[_3 + 12 >> 2], b3[b3[P3 + 4 >> 2] + 12 >> 2]))
                            break r;
                          for (c3 = b3[b3[b3[e4 >> 2] + 4 >> 2] + 16 >> 2], a5 = e4; a5 = b3[b3[b3[a5 + 4 >> 2] + 4 >> 2] >> 2], (0 | c3) == b3[b3[b3[a5 >> 2] + 4 >> 2] + 16 >> 2]; )
                            ;
                          c3 = b3[b3[b3[b3[b3[b3[a5 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2] + 8 >> 2], b3[e4 >> 2] = b3[b3[P3 + 4 >> 2] + 12 >> 2], T3 = 1, ar2(r7, a5, b3[wr2(r7, e4, 0) + 8 >> 2], b3[b3[_3 + 4 >> 2] + 8 >> 2], c3, 1);
                          break f;
                        }
                        if (pr2(I3, a5, u3 + 56 | 0) >= w2(0)) {
                          if (n4[e4 + 14 | 0] = 1, n4[b3[b3[b3[e4 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !ir2(b3[_3 + 4 >> 2]))
                            break r;
                          c3 = b3[_3 + 16 >> 2], a5 = b3[r7 + 72 >> 2], d2[c3 + 28 >> 2] = d2[a5 + 28 >> 2], d2[c3 + 32 >> 2] = d2[a5 + 32 >> 2];
                        } else
                          a5 = b3[r7 + 72 >> 2];
                        if (!(pr2(S3, a5, u3 + 56 | 0) <= w2(0)))
                          break f;
                        if (n4[L3 + 14 | 0] = 1, n4[e4 + 14 | 0] = 1, !ir2(b3[P3 + 4 >> 2]))
                          break r;
                        e4 = b3[P3 + 16 >> 2], r7 = b3[r7 + 72 >> 2], d2[e4 + 28 >> 2] = d2[r7 + 28 >> 2], d2[e4 + 32 >> 2] = d2[r7 + 32 >> 2];
                        break f;
                      }
                      if (!ir2(b3[_3 + 4 >> 2]))
                        break r;
                      if (!ir2(b3[P3 + 4 >> 2]))
                        break r;
                      if (!tr2(b3[b3[P3 + 4 >> 2] + 12 >> 2], _3))
                        break r;
                      if (a5 = b3[_3 + 16 >> 2], d2[a5 + 28 >> 2] = d2[u3 + 84 >> 2], d2[a5 + 32 >> 2] = d2[u3 + 88 >> 2], c3 = or2(b3[r7 + 68 >> 2], a5), a5 = b3[_3 + 16 >> 2], b3[a5 + 36 >> 2] = c3, (0 | c3) == 2147483647)
                        break e;
                      b3[u3 + 112 >> 2] = b3[C3 + 12 >> 2], b3[u3 + 116 >> 2] = b3[I3 + 12 >> 2], b3[u3 + 120 >> 2] = b3[M3 + 12 >> 2], b3[u3 + 124 >> 2] = b3[S3 + 12 >> 2], b3[a5 + 24 >> 2] = 0, b3[a5 + 16 >> 2] = 0, b3[a5 + 20 >> 2] = 0, f4 = d2[a5 + 28 >> 2], m3 = (i5 = w2(d2[I3 + 28 >> 2] - f4)) < w2(0) ? w2(-i5) : i5, i5 = d2[a5 + 32 >> 2], t3 = w2(d2[I3 + 32 >> 2] - i5), o4 = w2(m3 + (t3 < w2(0) ? w2(-t3) : t3)), m3 = (t3 = w2(d2[C3 + 28 >> 2] - f4)) < w2(0) ? w2(-t3) : t3, t3 = w2(d2[C3 + 32 >> 2] - i5), s3 = w2(m3 + (t3 < w2(0) ? w2(-t3) : t3)), x3 = +w2(s3 + o4), t3 = w2(0.5 * +o4 / x3), d2[u3 + 96 >> 2] = t3, o4 = w2(0.5 * +s3 / x3), d2[u3 + 100 >> 2] = o4, s3 = w2(w2(w2(d2[C3 + 16 >> 2] * t3) + w2(d2[I3 + 16 >> 2] * o4)) + w2(0)), d2[a5 + 16 >> 2] = s3, y3 = w2(w2(w2(d2[C3 + 20 >> 2] * t3) + w2(d2[I3 + 20 >> 2] * o4)) + w2(0)), d2[a5 + 20 >> 2] = y3, o4 = w2(w2(w2(d2[C3 + 24 >> 2] * t3) + w2(d2[I3 + 24 >> 2] * o4)) + w2(0)), d2[a5 + 24 >> 2] = o4, m3 = (t3 = w2(d2[M3 + 28 >> 2] - f4)) < w2(0) ? w2(-t3) : t3, t3 = w2(d2[M3 + 32 >> 2] - i5), t3 = w2(m3 + (t3 < w2(0) ? w2(-t3) : t3)), m3 = (f4 = w2(d2[S3 + 28 >> 2] - f4)) < w2(0) ? w2(-f4) : f4, f4 = w2(d2[S3 + 32 >> 2] - i5), f4 = w2(m3 + (f4 < w2(0) ? w2(-f4) : f4)), x3 = +w2(t3 + f4), f4 = w2(0.5 * +f4 / x3), d2[u3 + 104 >> 2] = f4, i5 = w2(0.5 * +t3 / x3), d2[u3 + 108 >> 2] = i5, t3 = w2(s3 + w2(w2(d2[M3 + 16 >> 2] * f4) + w2(d2[S3 + 16 >> 2] * i5))), d2[a5 + 16 >> 2] = t3, s3 = w2(y3 + w2(w2(d2[M3 + 20 >> 2] * f4) + w2(d2[S3 + 20 >> 2] * i5))), d2[a5 + 20 >> 2] = s3, f4 = w2(o4 + w2(w2(d2[M3 + 24 >> 2] * f4) + w2(d2[S3 + 24 >> 2] * i5))), d2[a5 + 24 >> 2] = f4, d2[u3 + 140 >> 2] = f4, d2[u3 + 136 >> 2] = s3, d2[u3 + 132 >> 2] = t3, b3[a5 + 12 >> 2] = 0, a5 = a5 + 12 | 0, (0 | (c3 = b3[r7 + 1736 >> 2])) == 8 ? be[b3[r7 + 76 >> 2]](u3 + 132 | 0, u3 + 112 | 0, u3 + 96 | 0, a5) : be[0 | c3](u3 + 132 | 0, u3 + 112 | 0, u3 + 96 | 0, a5, b3[r7 + 1896 >> 2]), b3[a5 >> 2] | k3[r7 + 60 | 0] || ((0 | (a5 = b3[r7 + 1732 >> 2])) == 11 ? be[b3[r7 + 12 >> 2]](100156) : be[0 | a5](100156, b3[r7 + 1896 >> 2]), n4[r7 + 60 | 0] = 1), n4[L3 + 14 | 0] = 1, n4[e4 + 14 | 0] = 1, n4[b3[b3[b3[e4 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1;
                    } else
                      G2(r7, e4);
                  }
                return j2 = u3 + 144 | 0, T3;
              }
              Kr(b3[r7 + 68 >> 2]), b3[r7 + 68 >> 2] = 0;
            }
            Zr(r7 + 1740 | 0, 1), E2();
          }
          function Q2(r7) {
            r7 |= 0;
            var e4 = 0, f4 = 0, i5 = 0, a5 = 0, t3 = 0, o4 = 0, k4 = 0, u3 = 0, c3 = w2(0), s3 = w2(0), A3 = 0, l4 = 0, v3 = 0, h3 = 0, m3 = 0, y3 = 0, g3 = 0, C3 = 0, R3 = 0, M3 = 0;
            j2 = t3 = j2 - 48 | 0, n4[r7 + 60 | 0] = 0;
            r: {
              if (f4 = b3[r7 + 8 >> 2], (0 | (e4 = b3[f4 + 64 >> 2])) != (0 | (k4 = f4 - -64 | 0)))
                for (; ; ) {
                  f4 = b3[e4 + 12 >> 2], a5 = b3[e4 >> 2], o4 = b3[e4 + 16 >> 2], i5 = b3[b3[e4 + 4 >> 2] + 16 >> 2];
                  e: {
                    if (!(d2[o4 + 28 >> 2] != d2[i5 + 28 >> 2] | d2[o4 + 32 >> 2] != d2[i5 + 32 >> 2] | b3[f4 + 12 >> 2] == (0 | e4))) {
                      b3[t3 + 24 >> 2] = 0, b3[t3 + 28 >> 2] = 0, b3[t3 + 16 >> 2] = 0, b3[t3 + 20 >> 2] = 0, i5 = b3[287], b3[t3 + 8 >> 2] = b3[286], b3[t3 + 12 >> 2] = i5, i5 = b3[285], b3[t3 >> 2] = b3[284], b3[t3 + 4 >> 2] = i5, i5 = b3[f4 + 16 >> 2], b3[t3 + 16 >> 2] = b3[i5 + 12 >> 2], b3[t3 + 20 >> 2] = b3[o4 + 12 >> 2], d2[t3 + 36 >> 2] = d2[i5 + 16 >> 2], d2[t3 + 40 >> 2] = d2[i5 + 20 >> 2], d2[t3 + 44 >> 2] = d2[i5 + 24 >> 2], b3[i5 + 12 >> 2] = 0, i5 = i5 + 12 | 0, (0 | (o4 = b3[r7 + 1736 >> 2])) == 8 ? be[b3[r7 + 76 >> 2]](t3 + 36 | 0, t3 + 16 | 0, t3, i5) : be[0 | o4](t3 + 36 | 0, t3 + 16 | 0, t3, i5, b3[r7 + 1896 >> 2]), b3[i5 >> 2] || (b3[i5 >> 2] = b3[t3 + 16 >> 2]);
                      f: {
                        if (tr2(f4, e4)) {
                          if (!rr2(e4))
                            break f;
                          i5 = b3[f4 + 12 >> 2];
                          break e;
                        }
                        break r;
                      }
                      break r;
                    }
                    i5 = f4, f4 = e4;
                  }
                  if (b3[i5 + 12 >> 2] == (0 | f4)) {
                    if ((0 | f4) != (0 | i5) && (a5 = b3[a5 + 4 >> 2] != (0 | i5) && (0 | i5) != (0 | a5) ? a5 : b3[a5 >> 2], !rr2(i5)))
                      break r;
                    if (e4 = (0 | f4) == (0 | a5) | b3[a5 + 4 >> 2] == (0 | f4) ? b3[a5 >> 2] : a5, !rr2(f4))
                      break r;
                  } else
                    e4 = a5;
                  if ((0 | e4) == (0 | k4))
                    break;
                }
              a5 = r7, (e4 = O2(28)) ? (i5 = e4, (f4 = O2(28)) ? (b3[f4 + 8 >> 2] = 0, b3[f4 + 12 >> 2] = 32, o4 = O2(132), b3[f4 >> 2] = o4, o4 ? (k4 = O2(264), b3[f4 + 4 >> 2] = k4, k4 ? (b3[f4 + 24 >> 2] = 9, b3[f4 + 16 >> 2] = 0, b3[f4 + 20 >> 2] = 0, b3[o4 + 4 >> 2] = 1, b3[k4 + 8 >> 2] = 0) : (Y2(o4), Y2(f4), f4 = 0)) : (Y2(f4), f4 = 0)) : f4 = 0, b3[i5 >> 2] = f4, f4 ? (i5 = O2(128), b3[e4 + 4 >> 2] = i5, i5 ? (b3[e4 + 24 >> 2] = 9, b3[e4 + 20 >> 2] = 0, b3[e4 + 12 >> 2] = 0, b3[e4 + 16 >> 2] = 32) : (Y2(b3[f4 + 4 >> 2]), Y2(b3[f4 >> 2]), Y2(f4), Y2(e4), e4 = 0)) : (Y2(e4), e4 = 0)) : e4 = 0, v3 = e4, b3[a5 + 68 >> 2] = e4;
              e:
                if (e4) {
                  f: {
                    f4 = b3[r7 + 8 >> 2];
                    i: {
                      if ((0 | (e4 = b3[f4 >> 2])) != (0 | f4))
                        for (; ; ) {
                          if (a5 = or2(v3, e4), b3[e4 + 36 >> 2] = a5, (0 | a5) == 2147483647)
                            break i;
                          if ((0 | f4) == (0 | (e4 = b3[e4 >> 2])))
                            break;
                        }
                      if (j2 = y3 = j2 - 400 | 0, a5 = O2(4 + (e4 = (m3 = b3[v3 + 12 >> 2]) << 2) | 0), b3[v3 + 8 >> 2] = a5, j2 = y3 + 400 | 0, a5) {
                        if (!((o4 = (e4 + a5 | 0) - 4 | 0) >>> 0 < a5 >>> 0)) {
                          if (f4 = b3[v3 + 4 >> 2], i5 = 1 + ((k4 = (m3 << 2) - 4 | 0) >>> 2 | 0) & 7)
                            for (e4 = a5; b3[e4 >> 2] = f4, e4 = e4 + 4 | 0, f4 = f4 + 4 | 0, i5 = i5 - 1 | 0; )
                              ;
                          else
                            e4 = a5;
                          if (!(k4 >>> 0 < 28))
                            for (; b3[e4 >> 2] = f4, b3[e4 + 28 >> 2] = f4 + 28, b3[e4 + 24 >> 2] = f4 + 24, b3[e4 + 20 >> 2] = f4 + 20, b3[e4 + 16 >> 2] = f4 + 16, b3[e4 + 12 >> 2] = f4 + 12, b3[e4 + 8 >> 2] = f4 + 8, b3[e4 + 4 >> 2] = f4 + 4, f4 = f4 + 32 | 0, o4 >>> 0 >= (e4 = e4 + 32 | 0) >>> 0; )
                              ;
                        }
                        for (b3[y3 + 4 >> 2] = o4, b3[y3 >> 2] = a5, g3 = 2016473283, u3 = 1; ; ) {
                          if ((A3 = b3[((u3 << 3) + y3 | 0) - 4 >> 2]) >>> 0 > (k4 = b3[(h3 << 3) + y3 >> 2]) + 40 >>> 0)
                            for (; ; ) {
                              for (g3 = p2(g3, 1539415821) + 1 | 0, R3 = b3[(e4 = ((g3 >>> 0) % (1 + (A3 - k4 >> 2) >>> 0) << 2) + k4 | 0) >> 2], b3[e4 >> 2] = b3[k4 >> 2], b3[k4 >> 2] = R3, i5 = A3 + 4 | 0, f4 = k4 - 4 | 0; ; ) {
                                a5 = i5, l4 = b3[f4 + 4 >> 2], o4 = f4, e4 = f4 + 4 | 0, i5 = b3[l4 >> 2], c3 = d2[i5 + 28 >> 2], C3 = b3[R3 >> 2], u3 = e4;
                                a:
                                  if (!(c3 < (s3 = d2[C3 + 28 >> 2]))) {
                                    for (; ; ) {
                                      if (f4 = e4, u3 = e4, d2[i5 + 32 >> 2] <= d2[C3 + 32 >> 2] && c3 == s3)
                                        break a;
                                      if (e4 = f4 + 4 | 0, o4 = f4, l4 = b3[f4 + 4 >> 2], i5 = b3[l4 >> 2], s3 > (c3 = d2[i5 + 28 >> 2]))
                                        break;
                                    }
                                    u3 = e4;
                                  }
                                f4 = u3, u3 = b3[(i5 = a5 - 4 | 0) >> 2], e4 = b3[u3 >> 2];
                                a:
                                  if (!(s3 < (c3 = d2[e4 + 28 >> 2])))
                                    for (; ; ) {
                                      if (!(!(d2[C3 + 32 >> 2] <= d2[e4 + 32 >> 2]) | c3 != s3))
                                        break a;
                                      if (a5 = i5, u3 = b3[(i5 = i5 - 4 | 0) >> 2], e4 = b3[u3 >> 2], s3 < (c3 = d2[e4 + 28 >> 2]))
                                        break;
                                    }
                                if (b3[f4 >> 2] = u3, b3[i5 >> 2] = l4, !(f4 >>> 0 < i5 >>> 0))
                                  break;
                              }
                              if (e4 = b3[f4 >> 2], b3[f4 >> 2] = l4, b3[i5 >> 2] = e4, (f4 - k4 | 0) < (A3 - i5 | 0) ? (e4 = a5, i5 = A3, A3 = o4) : (e4 = k4, i5 = o4, k4 = a5), b3[4 + (f4 = (h3 << 3) + y3 | 0) >> 2] = i5, b3[f4 >> 2] = e4, h3 = h3 + 1 | 0, !(k4 + 40 >>> 0 < A3 >>> 0))
                                break;
                            }
                          if (u3 = h3, A3 >>> 0 >= (a5 = k4 + 4 | 0) >>> 0)
                            for (; ; ) {
                              i5 = b3[a5 >> 2], f4 = e4 = a5;
                              a:
                                if (!(k4 >>> 0 >= e4 >>> 0))
                                  for (; ; ) {
                                    if (o4 = b3[i5 >> 2], c3 = d2[o4 + 28 >> 2], h3 = b3[(f4 = e4 - 4 | 0) >> 2], l4 = b3[h3 >> 2], c3 < (s3 = d2[l4 + 28 >> 2])) {
                                      f4 = e4;
                                      break a;
                                    }
                                    if (!(!(d2[o4 + 32 >> 2] <= d2[l4 + 32 >> 2]) | c3 != s3)) {
                                      f4 = e4;
                                      break a;
                                    }
                                    if (b3[e4 >> 2] = h3, !(k4 >>> 0 < (e4 = f4) >>> 0))
                                      break;
                                  }
                              if (b3[f4 >> 2] = i5, !(A3 >>> 0 >= (a5 = a5 + 4 | 0) >>> 0))
                                break;
                            }
                          if (h3 = u3 - 1 | 0, !((0 | u3) >= 1))
                            break;
                        }
                        if (b3[v3 + 20 >> 2] = 1, b3[v3 + 16 >> 2] = m3, v3 = b3[v3 >> 2], (0 | (a5 = b3[v3 + 8 >> 2])) >= 1)
                          for (A3 = b3[v3 + 4 >> 2], k4 = b3[v3 >> 2], f4 = a5; ; ) {
                            for (i5 = f4, u3 = A3 + ((h3 = b3[k4 + (f4 << 2) >> 2]) << 3) | 0, e4 = f4; (0 | a5) <= (0 | (f4 = e4 << 1)) || (l4 = b3[A3 + (b3[k4 + ((o4 = 1 | f4) << 2) >> 2] << 3) >> 2], c3 = d2[l4 + 28 >> 2], m3 = b3[A3 + (b3[k4 + (f4 << 2) >> 2] << 3) >> 2], s3 = d2[m3 + 28 >> 2], !(d2[l4 + 32 >> 2] <= d2[m3 + 32 >> 2]) | c3 != s3 && !(c3 < s3) || (f4 = o4)), !((0 | f4) > (0 | a5) || (o4 = b3[u3 >> 2], c3 = d2[o4 + 28 >> 2], l4 = b3[k4 + (f4 << 2) >> 2], g3 = b3[(m3 = A3 + (l4 << 3) | 0) >> 2], c3 < (s3 = d2[g3 + 28 >> 2]) | (d2[o4 + 32 >> 2] <= d2[g3 + 32 >> 2] ? c3 == s3 : 0))); )
                              b3[k4 + (e4 << 2) >> 2] = l4, b3[m3 + 4 >> 2] = e4, e4 = f4;
                            if (b3[k4 + (e4 << 2) >> 2] = h3, b3[u3 + 4 >> 2] = e4, f4 = i5 - 1 | 0, !((0 | i5) > 1))
                              break;
                          }
                        b3[v3 + 20 >> 2] = 1, e4 = 1;
                      } else
                        e4 = 0;
                      if (e4)
                        break f;
                    }
                    Kr(b3[r7 + 68 >> 2]), b3[r7 + 68 >> 2] = 0;
                    break e;
                  }
                  if (f4 = r7 - -64 | 0, (e4 = O2(20)) ? (b3[e4 + 16 >> 2] = 10, b3[e4 + 12 >> 2] = r7, b3[e4 >> 2] = 0, b3[e4 + 8 >> 2] = e4, b3[e4 + 4 >> 2] = e4) : e4 = 0, b3[f4 >> 2] = e4, !e4)
                    break r;
                  if (_r2(r7, w2(-3999999973526325e22)), _r2(r7, w2(3999999973526325e22)), f4 = Ir2(b3[r7 + 68 >> 2]))
                    for (; ; ) {
                      f:
                        if (e4 = xr2(b3[r7 + 68 >> 2]))
                          for (; ; ) {
                            if (d2[e4 + 28 >> 2] != d2[f4 + 28 >> 2] | d2[e4 + 32 >> 2] != d2[f4 + 32 >> 2])
                              break f;
                            if (a5 = b3[Ir2(b3[r7 + 68 >> 2]) + 8 >> 2], i5 = b3[f4 + 8 >> 2], b3[t3 + 24 >> 2] = 0, b3[t3 + 28 >> 2] = 0, b3[t3 + 16 >> 2] = 0, b3[t3 + 20 >> 2] = 0, e4 = b3[287], b3[t3 + 8 >> 2] = b3[286], b3[t3 + 12 >> 2] = e4, e4 = b3[285], b3[t3 >> 2] = b3[284], b3[t3 + 4 >> 2] = e4, e4 = b3[i5 + 16 >> 2], b3[t3 + 16 >> 2] = b3[e4 + 12 >> 2], b3[t3 + 20 >> 2] = b3[b3[a5 + 16 >> 2] + 12 >> 2], d2[t3 + 36 >> 2] = d2[e4 + 16 >> 2], d2[t3 + 40 >> 2] = d2[e4 + 20 >> 2], d2[t3 + 44 >> 2] = d2[e4 + 24 >> 2], b3[e4 + 12 >> 2] = 0, e4 = e4 + 12 | 0, (0 | (o4 = b3[r7 + 1736 >> 2])) == 8 ? be[b3[r7 + 76 >> 2]](t3 + 36 | 0, t3 + 16 | 0, t3, e4) : be[0 | o4](t3 + 36 | 0, t3 + 16 | 0, t3, e4, b3[r7 + 1896 >> 2]), b3[e4 >> 2] || (b3[e4 >> 2] = b3[t3 + 16 >> 2]), !tr2(i5, a5))
                              break r;
                            if (!(e4 = xr2(b3[r7 + 68 >> 2])))
                              break;
                          }
                      if (z2(r7, f4), !(f4 = Ir2(b3[r7 + 68 >> 2])))
                        break;
                    }
                  if (e4 = b3[b3[b3[(a5 = r7 - -64 | 0) >> 2] + 4 >> 2] >> 2], f4 = b3[e4 >> 2], b3[r7 + 72 >> 2] = b3[f4 + 16 >> 2], b3[f4 + 24 >> 2] = 0, Vr(b3[e4 + 4 >> 2]), Y2(e4), f4 = b3[a5 >> 2], e4 = b3[b3[f4 + 4 >> 2] >> 2])
                    for (; b3[b3[e4 >> 2] + 24 >> 2] = 0, Vr(b3[e4 + 4 >> 2]), Y2(e4), f4 = b3[a5 >> 2], e4 = b3[b3[f4 + 4 >> 2] >> 2]; )
                      ;
                  if ((0 | f4) != (0 | (e4 = b3[f4 + 4 >> 2])))
                    for (; Y2(e4), (0 | f4) != (0 | (e4 = b3[e4 + 4 >> 2])); )
                      ;
                  if (Y2(f4), Kr(b3[r7 + 68 >> 2]), M3 = 1, r7 = b3[r7 + 8 >> 2], (0 | (f4 = b3[r7 + 40 >> 2])) != (0 | (a5 = r7 + 40 | 0)))
                    for (; ; ) {
                      if (r7 = b3[f4 + 8 >> 2], f4 = b3[f4 >> 2], (0 | r7) == b3[b3[r7 + 12 >> 2] + 12 >> 2] && (e4 = b3[r7 + 8 >> 2], b3[e4 + 28 >> 2] = b3[e4 + 28 >> 2] + b3[r7 + 28 >> 2], e4 = b3[e4 + 4 >> 2], b3[e4 + 28 >> 2] = b3[e4 + 28 >> 2] + b3[b3[r7 + 4 >> 2] + 28 >> 2], !rr2(r7))) {
                        M3 = 0;
                        break e;
                      }
                      if ((0 | f4) == (0 | a5))
                        break;
                    }
                }
              return j2 = t3 + 48 | 0, 0 | M3;
            }
            Zr(r7 + 1740 | 0, 1), E2();
          }
          function W2(r7, e4, f4, i5, a5, t3) {
            var u3 = 0, c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = 0, d3 = 0, w3 = 0, m3 = 0, y3 = 0, g3 = 0, E3 = 0, C3 = 0, R3 = 0, M3 = 0, I3 = 0, S3 = 0;
            j2 = c3 = j2 - 80 | 0, b3[c3 + 76 >> 2] = e4, M3 = c3 + 55 | 0, C3 = c3 + 56 | 0, e4 = 0;
            r: {
              e:
                for (; ; ) {
                  (0 | m3) < 0 || ((2147483647 - m3 | 0) < (0 | e4) ? (b3[613] = 61, m3 = -1) : m3 = e4 + m3 | 0);
                  f: {
                    i: {
                      a: {
                        if (l4 = b3[c3 + 76 >> 2], u3 = k3[0 | (e4 = l4)])
                          for (; ; ) {
                            n: {
                              t:
                                if (u3 &= 255) {
                                  if ((0 | u3) != 37)
                                    break n;
                                  for (u3 = e4; ; ) {
                                    if (k3[e4 + 1 | 0] != 37)
                                      break t;
                                    if (s3 = e4 + 2 | 0, b3[c3 + 76 >> 2] = s3, u3 = u3 + 1 | 0, v3 = k3[e4 + 2 | 0], e4 = s3, (0 | v3) != 37)
                                      break;
                                  }
                                } else
                                  u3 = e4;
                              if (e4 = u3 - l4 | 0, r7 && yr2(r7, l4, e4), e4)
                                continue e;
                              g3 = -1, u3 = 1, s3 = c3, e4 = b3[c3 + 76 >> 2], k3[e4 + 2 | 0] != 36 | n4[b3[c3 + 76 >> 2] + 1 | 0] - 48 >>> 0 >= 10 || (g3 = n4[e4 + 1 | 0] - 48 | 0, R3 = 1, u3 = 3), e4 = u3 + e4 | 0, b3[s3 + 76 >> 2] = e4, y3 = 0;
                              t:
                                if ((s3 = (A3 = n4[0 | e4]) - 32 | 0) >>> 0 > 31)
                                  u3 = e4;
                                else if (u3 = e4, 75913 & (s3 = 1 << s3))
                                  for (; ; ) {
                                    if (u3 = e4 + 1 | 0, b3[c3 + 76 >> 2] = u3, y3 |= s3, (s3 = (A3 = n4[e4 + 1 | 0]) - 32 | 0) >>> 0 >= 32)
                                      break t;
                                    if (e4 = u3, !(75913 & (s3 = 1 << s3)))
                                      break;
                                  }
                              t:
                                if ((0 | A3) != 42) {
                                  if ((0 | (d3 = Wr(c3 + 76 | 0))) < 0)
                                    break a;
                                  e4 = b3[c3 + 76 >> 2];
                                } else {
                                  if (s3 = c3, n4[u3 + 1 | 0] - 48 >>> 0 >= 10 || (e4 = b3[c3 + 76 >> 2], k3[e4 + 2 | 0] != 36)) {
                                    if (R3)
                                      break a;
                                    R3 = 0, d3 = 0, r7 && (e4 = b3[f4 >> 2], b3[f4 >> 2] = e4 + 4, d3 = b3[e4 >> 2]), e4 = b3[c3 + 76 >> 2] + 1 | 0;
                                  } else
                                    b3[((n4[e4 + 1 | 0] << 2) + a5 | 0) - 192 >> 2] = 10, d3 = b3[((n4[e4 + 1 | 0] << 3) + i5 | 0) - 384 >> 2], R3 = 1, e4 = e4 + 3 | 0;
                                  if (b3[s3 + 76 >> 2] = e4, (0 | d3) > -1)
                                    break t;
                                  d3 = 0 - d3 | 0, y3 |= 8192;
                                }
                              v3 = -1;
                              t:
                                if (k3[0 | e4] == 46)
                                  if (k3[e4 + 1 | 0] != 42)
                                    b3[c3 + 76 >> 2] = e4 + 1, v3 = Wr(c3 + 76 | 0), e4 = b3[c3 + 76 >> 2];
                                  else {
                                    if (!(n4[e4 + 2 | 0] - 48 >>> 0 >= 10) && (e4 = b3[c3 + 76 >> 2], k3[e4 + 3 | 0] == 36)) {
                                      b3[((n4[e4 + 2 | 0] << 2) + a5 | 0) - 192 >> 2] = 10, v3 = b3[((n4[e4 + 2 | 0] << 3) + i5 | 0) - 384 >> 2], e4 = e4 + 4 | 0, b3[c3 + 76 >> 2] = e4;
                                      break t;
                                    }
                                    if (R3)
                                      break a;
                                    r7 ? (e4 = b3[f4 >> 2], b3[f4 >> 2] = e4 + 4, v3 = b3[e4 >> 2]) : v3 = 0, e4 = b3[c3 + 76 >> 2] + 2 | 0, b3[c3 + 76 >> 2] = e4;
                                  }
                              for (u3 = 0; ; ) {
                                if (E3 = u3, w3 = -1, n4[0 | e4] - 65 >>> 0 > 57)
                                  break r;
                                if (A3 = e4 + 1 | 0, b3[c3 + 76 >> 2] = A3, u3 = n4[0 | e4], e4 = A3, !((u3 = k3[1103 + (u3 + p2(E3, 58) | 0) | 0]) - 1 >>> 0 < 8))
                                  break;
                              }
                              t: {
                                o: {
                                  if ((0 | u3) != 19) {
                                    if (!u3)
                                      break r;
                                    if ((0 | g3) >= 0) {
                                      b3[(g3 << 2) + a5 >> 2] = u3, u3 = b3[4 + (e4 = (g3 << 3) + i5 | 0) >> 2], b3[c3 + 64 >> 2] = b3[e4 >> 2], b3[c3 + 68 >> 2] = u3;
                                      break o;
                                    }
                                    if (!r7)
                                      break f;
                                    hr2(c3 - -64 | 0, u3, f4), A3 = b3[c3 + 76 >> 2];
                                    break t;
                                  }
                                  if ((0 | g3) > -1)
                                    break r;
                                }
                                if (e4 = 0, !r7)
                                  continue e;
                              }
                              s3 = -65537 & y3, u3 = 8192 & y3 ? s3 : y3, w3 = 0, g3 = 1024, y3 = C3;
                              t: {
                                o: {
                                  b: {
                                    k: {
                                      u: {
                                        c: {
                                          s: {
                                            A: {
                                              l: {
                                                v: {
                                                  d: {
                                                    h: {
                                                      p: {
                                                        w: {
                                                          m: {
                                                            switch (e4 = n4[A3 - 1 | 0], (e4 = E3 && (15 & e4) == 3 ? -33 & e4 : e4) - 88 | 0) {
                                                              case 11:
                                                                break t;
                                                              case 9:
                                                              case 13:
                                                              case 14:
                                                              case 15:
                                                                break o;
                                                              case 27:
                                                                break s;
                                                              case 12:
                                                              case 17:
                                                                break v;
                                                              case 23:
                                                                break d;
                                                              case 0:
                                                              case 32:
                                                                break h;
                                                              case 24:
                                                                break p;
                                                              case 22:
                                                                break w;
                                                              case 29:
                                                                break m;
                                                              case 1:
                                                              case 2:
                                                              case 3:
                                                              case 4:
                                                              case 5:
                                                              case 6:
                                                              case 7:
                                                              case 8:
                                                              case 10:
                                                              case 16:
                                                              case 18:
                                                              case 19:
                                                              case 20:
                                                              case 21:
                                                              case 25:
                                                              case 26:
                                                              case 28:
                                                              case 30:
                                                              case 31:
                                                                break i;
                                                            }
                                                            switch (e4 - 65 | 0) {
                                                              case 0:
                                                              case 4:
                                                              case 5:
                                                              case 6:
                                                                break o;
                                                              case 2:
                                                                break u;
                                                              case 1:
                                                              case 3:
                                                                break i;
                                                            }
                                                            if ((0 | e4) == 83)
                                                              break c;
                                                            break i;
                                                          }
                                                          A3 = b3[c3 + 64 >> 2], s3 = b3[c3 + 68 >> 2], g3 = 1024;
                                                          break l;
                                                        }
                                                        e4 = 0;
                                                        w:
                                                          switch (255 & E3) {
                                                            case 0:
                                                            case 1:
                                                            case 6:
                                                              b3[b3[c3 + 64 >> 2] >> 2] = m3;
                                                              continue e;
                                                            case 2:
                                                              u3 = b3[c3 + 64 >> 2], b3[u3 >> 2] = m3, b3[u3 + 4 >> 2] = m3 >> 31;
                                                              continue e;
                                                            case 3:
                                                              o3[b3[c3 + 64 >> 2] >> 1] = m3;
                                                              continue e;
                                                            case 4:
                                                              n4[b3[c3 + 64 >> 2]] = m3;
                                                              continue e;
                                                            case 7:
                                                              break w;
                                                            default:
                                                              continue e;
                                                          }
                                                        u3 = b3[c3 + 64 >> 2], b3[u3 >> 2] = m3, b3[u3 + 4 >> 2] = m3 >> 31;
                                                        continue e;
                                                      }
                                                      v3 = v3 >>> 0 > 8 ? v3 : 8, u3 |= 8, e4 = 120;
                                                    }
                                                    if (l4 = C3, I3 = 32 & e4, (s3 = E3 = b3[c3 + 68 >> 2]) | (A3 = b3[c3 + 64 >> 2]))
                                                      for (; n4[0 | (l4 = l4 - 1 | 0)] = I3 | k3[1632 + (15 & A3) | 0], S3 = !s3 & A3 >>> 0 > 15 | (0 | s3) != 0, E3 = s3, s3 = s3 >>> 4 | 0, A3 = (15 & E3) << 28 | A3 >>> 4, S3; )
                                                        ;
                                                    if (!(b3[c3 + 64 >> 2] | b3[c3 + 68 >> 2]) | !(8 & u3))
                                                      break A;
                                                    g3 = 1024 + (e4 >>> 4 | 0) | 0, w3 = 2;
                                                    break A;
                                                  }
                                                  if (e4 = C3, (s3 = l4 = b3[c3 + 68 >> 2]) | (A3 = b3[c3 + 64 >> 2]))
                                                    for (; n4[0 | (e4 = e4 - 1 | 0)] = 7 & A3 | 48, E3 = !s3 & A3 >>> 0 > 7 | (0 | s3) != 0, l4 = s3, s3 = s3 >>> 3 | 0, A3 = (7 & l4) << 29 | A3 >>> 3, E3; )
                                                      ;
                                                  if (l4 = e4, !(8 & u3))
                                                    break A;
                                                  v3 = (0 | (e4 = C3 - l4 | 0)) < (0 | v3) ? v3 : e4 + 1 | 0;
                                                  break A;
                                                }
                                                s3 = e4 = b3[c3 + 68 >> 2], A3 = b3[c3 + 64 >> 2], (0 | e4) < -1 || (0 | e4) <= -1 ? (s3 = 0 - (s3 + ((0 | A3) != 0) | 0) | 0, A3 = 0 - A3 | 0, b3[c3 + 64 >> 2] = A3, b3[c3 + 68 >> 2] = s3, w3 = 1, g3 = 1024) : 2048 & u3 ? (w3 = 1, g3 = 1025) : g3 = (w3 = 1 & u3) ? 1026 : 1024;
                                              }
                                              l4 = Br2(A3, s3, C3);
                                            }
                                            if (u3 = (0 | v3) > -1 ? -65537 & u3 : u3, s3 = e4 = b3[c3 + 68 >> 2], !(v3 | (0 | (A3 = b3[c3 + 64 >> 2])) != 0 | (0 | e4) != 0)) {
                                              v3 = 0, l4 = C3;
                                              break i;
                                            }
                                            v3 = (0 | (e4 = !(s3 | A3) + (C3 - l4 | 0) | 0)) < (0 | v3) ? v3 : e4;
                                            break i;
                                          }
                                          y3 = (0 | (e4 = v3)) != 0;
                                          s: {
                                            A: {
                                              l: {
                                                v:
                                                  if (!(!(3 & (u3 = l4 = (u3 = b3[c3 + 64 >> 2]) || 1071)) | !e4))
                                                    for (; ; ) {
                                                      if (!k3[0 | u3])
                                                        break l;
                                                      if (y3 = (0 | (e4 = e4 - 1 | 0)) != 0, !(3 & (u3 = u3 + 1 | 0)))
                                                        break v;
                                                      if (!e4)
                                                        break;
                                                    }
                                                if (!y3)
                                                  break A;
                                              }
                                              l:
                                                if (!(!k3[0 | u3] | e4 >>> 0 < 4))
                                                  for (; ; ) {
                                                    if ((-1 ^ (A3 = b3[u3 >> 2])) & A3 - 16843009 & -2139062144)
                                                      break l;
                                                    if (u3 = u3 + 4 | 0, !((e4 = e4 - 4 | 0) >>> 0 > 3))
                                                      break;
                                                  }
                                              if (e4)
                                                for (; ; ) {
                                                  if (A3 = u3, !k3[0 | u3])
                                                    break s;
                                                  if (u3 = u3 + 1 | 0, !(e4 = e4 - 1 | 0))
                                                    break;
                                                }
                                            }
                                            A3 = 0;
                                          }
                                          y3 = A3 || v3 + l4 | 0, u3 = s3, v3 = A3 ? A3 - l4 | 0 : v3;
                                          break i;
                                        }
                                        if (s3 = b3[c3 + 64 >> 2], v3)
                                          break k;
                                        e4 = 0, Dr(r7, 32, d3, 0, u3);
                                        break b;
                                      }
                                      b3[c3 + 12 >> 2] = 0, b3[c3 + 8 >> 2] = b3[c3 + 64 >> 2], b3[c3 + 64 >> 2] = c3 + 8, v3 = -1, s3 = c3 + 8 | 0;
                                    }
                                    e4 = 0;
                                    k: {
                                      for (; ; ) {
                                        if (!(l4 = b3[s3 >> 2]))
                                          break k;
                                        if (!((A3 = (0 | (l4 = Cr2(c3 + 4 | 0, l4))) < 0) | l4 >>> 0 > v3 - e4 >>> 0)) {
                                          if (s3 = s3 + 4 | 0, v3 >>> 0 > (e4 = e4 + l4 | 0) >>> 0)
                                            continue;
                                          break k;
                                        }
                                        break;
                                      }
                                      if (w3 = -1, A3)
                                        break r;
                                    }
                                    if (Dr(r7, 32, d3, e4, u3), e4)
                                      for (s3 = 0, A3 = b3[c3 + 64 >> 2]; ; ) {
                                        if (!(l4 = b3[A3 >> 2]))
                                          break b;
                                        if ((0 | (s3 = (l4 = Cr2(c3 + 4 | 0, l4)) + s3 | 0)) > (0 | e4))
                                          break b;
                                        if (yr2(r7, c3 + 4 | 0, l4), A3 = A3 + 4 | 0, !(e4 >>> 0 > s3 >>> 0))
                                          break;
                                      }
                                    else
                                      e4 = 0;
                                  }
                                  Dr(r7, 32, d3, e4, 8192 ^ u3), e4 = (0 | e4) < (0 | d3) ? d3 : e4;
                                  continue e;
                                }
                                e4 = 0 | be[0 | t3](r7, h2[c3 + 64 >> 3], d3, v3, u3, e4);
                                continue e;
                              }
                              n4[c3 + 55 | 0] = b3[c3 + 64 >> 2], v3 = 1, l4 = M3, u3 = s3;
                              break i;
                            }
                            s3 = e4 + 1 | 0, b3[c3 + 76 >> 2] = s3, u3 = k3[e4 + 1 | 0], e4 = s3;
                          }
                        if (w3 = m3, r7)
                          break r;
                        if (!R3)
                          break f;
                        for (e4 = 1; ; ) {
                          if (r7 = b3[(e4 << 2) + a5 >> 2]) {
                            if (hr2((e4 << 3) + i5 | 0, r7, f4), w3 = 1, (0 | (e4 = e4 + 1 | 0)) != 10)
                              continue;
                            break r;
                          }
                          break;
                        }
                        if (w3 = 1, e4 >>> 0 >= 10)
                          break r;
                        for (; ; ) {
                          if (b3[(e4 << 2) + a5 >> 2])
                            break a;
                          if ((0 | (e4 = e4 + 1 | 0)) == 10)
                            break;
                        }
                        break r;
                      }
                      w3 = -1;
                      break r;
                    }
                    Dr(r7, 32, e4 = (0 | (s3 = (v3 = (0 | (A3 = y3 - l4 | 0)) > (0 | v3) ? A3 : v3) + w3 | 0)) > (0 | d3) ? s3 : d3, s3, u3), yr2(r7, g3, w3), Dr(r7, 48, e4, s3, 65536 ^ u3), Dr(r7, 48, v3, A3, 0), yr2(r7, l4, A3), Dr(r7, 32, e4, s3, 8192 ^ u3);
                    continue;
                  }
                  break;
                }
              w3 = 0;
            }
            return j2 = c3 + 80 | 0, w3;
          }
          function q2(r7, e4, f4, i5, a5, t3) {
            r7 |= 0, e4 = +e4, f4 |= 0, i5 |= 0, a5 |= 0, t3 |= 0;
            var o4 = 0, c3 = 0, s3 = 0, l4 = 0, v3 = 0, d3 = 0, h3 = 0, w3 = 0, y3 = 0, g3 = 0, E3 = 0, C3 = 0, R3 = 0, M3 = 0, I3 = 0, S3 = 0, _3 = 0, P3 = 0, x3 = 0, L3 = 0, B3 = 0;
            j2 = l4 = j2 - 560 | 0, b3[l4 + 44 >> 2] = 0, A2(+e4), o4 = 0 | u2(1), u2(0), (0 | o4) < -1 || (0 | o4) <= -1 ? (I3 = 1, S3 = 1034, A2(+(e4 = -e4)), o4 = 0 | u2(1), u2(0)) : 2048 & a5 ? (I3 = 1, S3 = 1037) : (S3 = (I3 = 1 & a5) ? 1040 : 1035, B3 = !I3);
            r:
              if ((2146435072 & o4) != 2146435072) {
                R3 = l4 + 16 | 0;
                e: {
                  f: {
                    i: {
                      if (e4 = Ur2(e4, l4 + 44 | 0), (e4 += e4) != 0) {
                        if (o4 = b3[l4 + 44 >> 2], b3[l4 + 44 >> 2] = o4 - 1, (0 | (_3 = 32 | t3)) != 97)
                          break i;
                        break e;
                      }
                      if ((0 | (_3 = 32 | t3)) == 97)
                        break e;
                      v3 = b3[l4 + 44 >> 2], h3 = (0 | i5) < 0 ? 6 : i5;
                      break f;
                    }
                    v3 = o4 - 29 | 0, b3[l4 + 44 >> 2] = v3, e4 *= 268435456, h3 = (0 | i5) < 0 ? 6 : i5;
                  }
                  for (c3 = E3 = (0 | v3) < 0 ? l4 + 48 | 0 : l4 + 336 | 0; o4 = e4 < 4294967296 & e4 >= 0 ? ~~e4 >>> 0 : 0, b3[(i5 = c3) >> 2] = o4, c3 = c3 + 4 | 0, (e4 = 1e9 * (e4 - +(o4 >>> 0))) != 0; )
                    ;
                  if ((0 | v3) < 1)
                    i5 = v3, o4 = c3, s3 = E3;
                  else
                    for (s3 = E3, i5 = v3; ; ) {
                      if (C3 = (0 | i5) < 29 ? i5 : 29, !(s3 >>> 0 > (o4 = c3 - 4 | 0) >>> 0)) {
                        for (i5 = C3, y3 = 0; g3 = o4, w3 = 0, x3 = y3, y3 = b3[o4 >> 2], d3 = 31 & i5, (63 & i5) >>> 0 >= 32 ? (L3 = y3 << d3, d3 = 0) : (L3 = (1 << d3) - 1 & y3 >>> 32 - d3, d3 = y3 << d3), w3 = w3 + L3 | 0, w3 = d3 >>> 0 > (y3 = x3 + d3 | 0) >>> 0 ? w3 + 1 | 0 : w3, x3 = g3, g3 = Or2(y3 = sr2(d3 = y3, w3, 1e9), F2, 1e9, 0), b3[x3 >> 2] = d3 - g3, s3 >>> 0 <= (o4 = o4 - 4 | 0) >>> 0; )
                          ;
                        (i5 = y3) && (b3[(s3 = s3 - 4 | 0) >> 2] = i5);
                      }
                      for (; s3 >>> 0 < (o4 = c3) >>> 0 && !b3[(c3 = o4 - 4 | 0) >> 2]; )
                        ;
                      if (i5 = b3[l4 + 44 >> 2] - C3 | 0, b3[l4 + 44 >> 2] = i5, c3 = o4, !((0 | i5) > 0))
                        break;
                    }
                  if (c3 = (h3 + 25 | 0) / 9 | 0, (0 | i5) <= -1)
                    for (C3 = c3 + 1 | 0, P3 = (0 | _3) == 102; ; ) {
                      y3 = (0 | i5) < -9 ? 9 : 0 - i5 | 0;
                      f:
                        if (o4 >>> 0 > s3 >>> 0) {
                          for (g3 = 1e9 >>> y3 | 0, d3 = -1 << y3 ^ -1, i5 = 0, c3 = s3; x3 = i5, i5 = b3[c3 >> 2], b3[c3 >> 2] = x3 + (i5 >>> y3 | 0), i5 = p2(g3, i5 & d3), (c3 = c3 + 4 | 0) >>> 0 < o4 >>> 0; )
                            ;
                          if (s3 = b3[s3 >> 2] ? s3 : s3 + 4 | 0, !i5)
                            break f;
                          b3[o4 >> 2] = i5, o4 = o4 + 4 | 0;
                        } else
                          s3 = b3[s3 >> 2] ? s3 : s3 + 4 | 0;
                      if (i5 = b3[l4 + 44 >> 2] + y3 | 0, b3[l4 + 44 >> 2] = i5, o4 = (0 | C3) < o4 - (c3 = P3 ? E3 : s3) >> 2 ? c3 + (C3 << 2) | 0 : o4, !((0 | i5) < 0))
                        break;
                    }
                  if (c3 = 0, !(o4 >>> 0 <= s3 >>> 0 || (c3 = p2(E3 - s3 >> 2, 9), i5 = 10, (d3 = b3[s3 >> 2]) >>> 0 < 10)))
                    for (; c3 = c3 + 1 | 0, d3 >>> 0 >= (i5 = p2(i5, 10)) >>> 0; )
                      ;
                  if ((0 | (i5 = (h3 - ((0 | _3) == 102 ? 0 : c3) | 0) - ((0 | _3) == 103 & (0 | h3) != 0) | 0)) < (p2(o4 - E3 >> 2, 9) - 9 | 0)) {
                    if (w3 = (((d3 = (0 | (g3 = i5 + 9216 | 0)) / 9 | 0) << 2) + ((0 | v3) < 0 ? l4 + 48 | 4 : l4 + 340 | 0) | 0) - 4096 | 0, i5 = 10, (0 | (g3 = g3 - p2(d3, 9) | 0)) <= 7)
                      for (; i5 = p2(i5, 10), (0 | (g3 = g3 + 1 | 0)) != 8; )
                        ;
                    if (C3 = (g3 = b3[w3 >> 2]) - p2(i5, d3 = (g3 >>> 0) / (i5 >>> 0) | 0) | 0, ((0 | (v3 = w3 + 4 | 0)) != (0 | o4) || C3) && (e4 = (0 | o4) == (0 | v3) ? 1 : 1.5, M3 = (v3 = i5 >>> 1 | 0) >>> 0 > C3 >>> 0 ? 0.5 : (0 | v3) == (0 | C3) ? e4 : 1.5, e4 = 1 & d3 ? 9007199254740994 : 9007199254740992, k3[0 | S3] != 45 | B3 || (M3 = -M3, e4 = -e4), v3 = g3 - C3 | 0, b3[w3 >> 2] = v3, e4 + M3 != e4)) {
                      if (i5 = i5 + v3 | 0, b3[w3 >> 2] = i5, i5 >>> 0 >= 1e9)
                        for (; b3[w3 >> 2] = 0, (w3 = w3 - 4 | 0) >>> 0 < s3 >>> 0 && (b3[(s3 = s3 - 4 | 0) >> 2] = 0), i5 = b3[w3 >> 2] + 1 | 0, b3[w3 >> 2] = i5, i5 >>> 0 > 999999999; )
                          ;
                      if (c3 = p2(E3 - s3 >> 2, 9), i5 = 10, !((v3 = b3[s3 >> 2]) >>> 0 < 10))
                        for (; c3 = c3 + 1 | 0, v3 >>> 0 >= (i5 = p2(i5, 10)) >>> 0; )
                          ;
                    }
                    o4 = (i5 = w3 + 4 | 0) >>> 0 < o4 >>> 0 ? i5 : o4;
                  }
                  for (; d3 = o4, !(v3 = o4 >>> 0 <= s3 >>> 0) && !b3[(o4 = d3 - 4 | 0) >> 2]; )
                    ;
                  if ((0 | _3) == 103) {
                    if (h3 = ((i5 = (0 | (o4 = h3 || 1)) > (0 | c3) & (0 | c3) > -5) ? -1 ^ c3 : -1) + o4 | 0, t3 = (i5 ? -1 : -2) + t3 | 0, !(y3 = 8 & a5)) {
                      if (o4 = -9, !v3 && (v3 = b3[d3 - 4 >> 2]) && (g3 = 10, o4 = 0, !((v3 >>> 0) % 10 | 0))) {
                        for (; i5 = o4, o4 = o4 + 1 | 0, !((v3 >>> 0) % ((g3 = p2(g3, 10)) >>> 0) | 0); )
                          ;
                        o4 = -1 ^ i5;
                      }
                      i5 = p2(d3 - E3 >> 2, 9), (-33 & t3) != 70 ? (y3 = 0, h3 = (0 | (i5 = (0 | (i5 = ((i5 + c3 | 0) + o4 | 0) - 9 | 0)) > 0 ? i5 : 0)) > (0 | h3) ? h3 : i5) : (y3 = 0, h3 = (0 | (i5 = (0 | (i5 = (i5 + o4 | 0) - 9 | 0)) > 0 ? i5 : 0)) > (0 | h3) ? h3 : i5);
                    }
                  } else
                    y3 = 8 & a5;
                  if (C3 = (h3 | y3) != 0, i5 = r7, v3 = f4, (0 | (g3 = -33 & t3)) == 70)
                    t3 = (0 | c3) > 0 ? c3 : 0;
                  else {
                    if ((R3 - (o4 = Br2((o4 = c3 >> 31) + c3 ^ o4, 0, R3)) | 0) <= 1)
                      for (; n4[0 | (o4 = o4 - 1 | 0)] = 48, (R3 - o4 | 0) < 2; )
                        ;
                    n4[0 | (P3 = o4 - 2 | 0)] = t3, n4[o4 - 1 | 0] = (0 | c3) < 0 ? 45 : 43, t3 = R3 - P3 | 0;
                  }
                  Dr(i5, 32, v3, w3 = 1 + (t3 + (C3 + (h3 + I3 | 0) | 0) | 0) | 0, a5), yr2(r7, S3, I3), Dr(r7, 48, f4, w3, 65536 ^ a5);
                  f: {
                    i: {
                      a: {
                        if ((0 | g3) == 70) {
                          for (i5 = l4 + 16 | 8, c3 = l4 + 16 | 9, s3 = t3 = s3 >>> 0 > E3 >>> 0 ? E3 : s3; ; ) {
                            o4 = Br2(b3[s3 >> 2], 0, c3);
                            n:
                              if ((0 | t3) == (0 | s3))
                                (0 | o4) == (0 | c3) && (n4[l4 + 24 | 0] = 48, o4 = i5);
                              else {
                                if (l4 + 16 >>> 0 >= o4 >>> 0)
                                  break n;
                                for (; n4[0 | (o4 = o4 - 1 | 0)] = 48, l4 + 16 >>> 0 < o4 >>> 0; )
                                  ;
                              }
                            if (yr2(r7, o4, c3 - o4 | 0), !(E3 >>> 0 >= (s3 = s3 + 4 | 0) >>> 0))
                              break;
                          }
                          if (o4 = 0, !C3)
                            break i;
                          if (yr2(r7, 1069, 1), (0 | h3) < 1 | s3 >>> 0 >= d3 >>> 0)
                            break a;
                          for (; ; ) {
                            if ((o4 = Br2(b3[s3 >> 2], 0, c3)) >>> 0 > l4 + 16 >>> 0)
                              for (; n4[0 | (o4 = o4 - 1 | 0)] = 48, l4 + 16 >>> 0 < o4 >>> 0; )
                                ;
                            if (yr2(r7, o4, (0 | h3) < 9 ? h3 : 9), o4 = h3 - 9 | 0, d3 >>> 0 <= (s3 = s3 + 4 | 0) >>> 0)
                              break i;
                            if (i5 = (0 | h3) > 9, h3 = o4, !i5)
                              break;
                          }
                          break i;
                        }
                        n:
                          if (!((0 | h3) < 0))
                            for (t3 = s3 >>> 0 < d3 >>> 0 ? d3 : s3 + 4 | 0, v3 = l4 + 16 | 9, i5 = l4 + 16 | 8, c3 = s3; ; ) {
                              (0 | v3) == (0 | (o4 = Br2(b3[c3 >> 2], 0, v3))) && (n4[l4 + 24 | 0] = 48, o4 = i5);
                              t:
                                if ((0 | c3) == (0 | s3))
                                  yr2(r7, o4, 1), o4 = o4 + 1 | 0, !y3 && (0 | h3) <= 0 || yr2(r7, 1069, 1);
                                else {
                                  if (l4 + 16 >>> 0 >= o4 >>> 0)
                                    break t;
                                  for (; n4[0 | (o4 = o4 - 1 | 0)] = 48, l4 + 16 >>> 0 < o4 >>> 0; )
                                    ;
                                }
                              if (yr2(r7, d3 = o4, (0 | (o4 = v3 - o4 | 0)) < (0 | h3) ? o4 : h3), h3 = h3 - o4 | 0, t3 >>> 0 <= (c3 = c3 + 4 | 0) >>> 0)
                                break n;
                              if (!((0 | h3) > -1))
                                break;
                            }
                        Dr(r7, 48, h3 + 18 | 0, 18, 0), yr2(r7, P3, R3 - P3 | 0);
                        break f;
                      }
                      o4 = h3;
                    }
                    Dr(r7, 48, o4 + 9 | 0, 9, 0);
                  }
                  break r;
                }
                if (E3 = (v3 = 32 & t3) ? S3 + 9 | 0 : S3, !(i5 >>> 0 > 11) && (o4 = 12 - i5 | 0)) {
                  for (M3 = 8; M3 *= 16, o4 = o4 - 1 | 0; )
                    ;
                  e4 = k3[0 | E3] != 45 ? e4 + M3 - M3 : -(M3 + (-e4 - M3));
                }
                for ((0 | R3) == (0 | (o4 = Br2((c3 = (o4 = b3[l4 + 44 >> 2]) >> 31) ^ o4 + c3, 0, R3))) && (n4[l4 + 15 | 0] = 48, o4 = l4 + 15 | 0), h3 = 2 | I3, c3 = b3[l4 + 44 >> 2], n4[0 | (d3 = o4 - 2 | 0)] = t3 + 15, n4[o4 - 1 | 0] = (0 | c3) < 0 ? 45 : 43, o4 = 8 & a5, s3 = l4 + 16 | 0; t3 = s3, y3 = v3, c3 = m2(e4) < 2147483648 ? ~~e4 : -2147483648, n4[0 | s3] = y3 | k3[c3 + 1632 | 0], e4 = 16 * (e4 - +(0 | c3)), !(o4 || (0 | i5) > 0 | e4 != 0) | ((s3 = t3 + 1 | 0) - (l4 + 16 | 0) | 0) != 1 || (n4[t3 + 1 | 0] = 46, s3 = t3 + 2 | 0), e4 != 0; )
                  ;
                Dr(t3 = r7, 32, o4 = f4, w3 = (v3 = !i5 | ((s3 - l4 | 0) - 18 | 0) >= (0 | i5) ? (R3 - (d3 + (l4 + 16 | 0) | 0) | 0) + s3 | 0 : 2 + ((i5 + R3 | 0) - d3 | 0) | 0) + h3 | 0, a5), yr2(r7, E3, h3), Dr(r7, 48, f4, w3, 65536 ^ a5), yr2(r7, l4 + 16 | 0, i5 = s3 - (l4 + 16 | 0) | 0), Dr(r7, 48, v3 - ((t3 = i5) + (i5 = R3 - d3 | 0) | 0) | 0, 0, 0), yr2(r7, d3, i5);
              } else
                Dr(r7, 32, f4, w3 = I3 + 3 | 0, -65537 & a5), yr2(r7, S3, I3), i5 = 32 & t3, yr2(r7, e4 != e4 ? i5 ? 1053 : 1061 : i5 ? 1057 : 1065, 3);
            return Dr(r7, 32, f4, w3, 8192 ^ a5), j2 = l4 + 560 | 0, 0 | ((0 | f4) > (0 | w3) ? f4 : w3);
          }
          function z2(r7, e4) {
            var f4 = 0, i5 = 0, a5 = 0, t3 = 0, o4 = 0, u3 = w2(0), c3 = 0, s3 = w2(0), A3 = 0, l4 = 0, v3 = 0;
            j2 = o4 = j2 + -64 | 0, b3[r7 + 72 >> 2] = e4, f4 = a5 = b3[e4 + 8 >> 2];
            r: {
              e: {
                f: {
                  for (; ; ) {
                    if (i5 = b3[f4 + 24 >> 2])
                      break f;
                    if ((0 | a5) == (0 | (f4 = b3[f4 + 8 >> 2])))
                      break;
                  }
                  for (b3[o4 >> 2] = b3[a5 + 4 >> 2], a5 = f4 = b3[r7 - -64 >> 2]; a5 = b3[a5 + 4 >> 2], (i5 = b3[a5 >> 2]) && !(0 | be[b3[f4 + 16 >> 2]](b3[f4 + 12 >> 2], o4, i5)); )
                    ;
                  if (i5 = b3[a5 >> 2], a5 = b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2], c3 = b3[a5 >> 2], t3 = b3[i5 >> 2], pr2(b3[b3[t3 + 4 >> 2] + 16 >> 2], e4, b3[t3 + 16 >> 2]) == w2(0)) {
                    if (u3 = d2[e4 + 28 >> 2], a5 = b3[i5 >> 2], f4 = b3[a5 + 16 >> 2], !(u3 != d2[f4 + 28 >> 2] | d2[f4 + 32 >> 2] != d2[e4 + 32 >> 2])) {
                      if (i5 = b3[e4 + 8 >> 2], b3[o4 + 40 >> 2] = 0, b3[o4 + 44 >> 2] = 0, b3[o4 + 32 >> 2] = 0, b3[o4 + 36 >> 2] = 0, e4 = b3[287], b3[o4 + 24 >> 2] = b3[286], b3[o4 + 28 >> 2] = e4, e4 = b3[285], b3[o4 + 16 >> 2] = b3[284], b3[o4 + 20 >> 2] = e4, b3[o4 + 32 >> 2] = b3[f4 + 12 >> 2], b3[o4 + 36 >> 2] = b3[b3[i5 + 16 >> 2] + 12 >> 2], d2[o4 + 52 >> 2] = d2[f4 + 16 >> 2], d2[o4 + 56 >> 2] = d2[f4 + 20 >> 2], d2[o4 + 60 >> 2] = d2[f4 + 24 >> 2], b3[f4 + 12 >> 2] = 0, e4 = f4 + 12 | 0, (0 | (f4 = b3[r7 + 1736 >> 2])) == 8 ? be[b3[r7 + 76 >> 2]](o4 + 52 | 0, o4 + 32 | 0, o4 + 16 | 0, e4) : be[0 | f4](o4 + 52 | 0, o4 + 32 | 0, o4 + 16 | 0, e4, b3[r7 + 1896 >> 2]), b3[e4 >> 2] || (b3[e4 >> 2] = b3[o4 + 32 >> 2]), tr2(a5, i5))
                        break e;
                      break r;
                    }
                    if (t3 = b3[a5 + 4 >> 2], f4 = b3[t3 + 16 >> 2], d2[f4 + 32 >> 2] != d2[e4 + 32 >> 2] || u3 != d2[f4 + 28 >> 2]) {
                      if (!ir2(t3))
                        break r;
                      if (k3[i5 + 15 | 0]) {
                        if (!rr2(b3[a5 + 8 >> 2]))
                          break r;
                        n4[i5 + 15 | 0] = 0;
                      }
                      if (!tr2(b3[e4 + 8 >> 2], a5))
                        break r;
                      z2(r7, e4);
                      break e;
                    }
                    for (; i5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2], (0 | f4) == b3[b3[b3[i5 >> 2] + 4 >> 2] + 16 >> 2]; )
                      ;
                    if (a5 = b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2], c3 = b3[a5 >> 2], t3 = b3[c3 + 4 >> 2], f4 = b3[t3 + 8 >> 2], k3[a5 + 15 | 0]) {
                      if (b3[c3 + 24 >> 2] = 0, Vr(b3[a5 + 4 >> 2]), Y2(a5), !rr2(t3))
                        break r;
                      t3 = b3[b3[f4 + 4 >> 2] + 12 >> 2];
                    }
                    if (!tr2(b3[e4 + 8 >> 2], t3))
                      break r;
                    A3 = b3[t3 + 8 >> 2], t3 = f4, e4 = f4, a5 = b3[b3[f4 + 4 >> 2] + 16 >> 2], u3 = d2[a5 + 28 >> 2], c3 = b3[f4 + 16 >> 2], u3 < (s3 = d2[c3 + 28 >> 2]) | (d2[a5 + 32 >> 2] <= d2[c3 + 32 >> 2] ? u3 == s3 : 0) || (e4 = 0), ar2(r7, i5, A3, t3, e4, 1);
                    break e;
                  }
                  if (l4 = k3[i5 + 12 | 0], c3 = b3[c3 + 4 >> 2], A3 = b3[c3 + 16 >> 2], u3 = d2[A3 + 28 >> 2], v3 = b3[b3[t3 + 4 >> 2] + 16 >> 2], f4 = i5, u3 < (s3 = d2[v3 + 28 >> 2]) || u3 == s3 && (f4 = i5, d2[A3 + 32 >> 2] <= d2[v3 + 32 >> 2]) || (f4 = a5), k3[f4 + 15 | 0] || l4) {
                    i: {
                      if ((0 | f4) == (0 | i5)) {
                        if (a5 = er2(b3[b3[e4 + 8 >> 2] + 4 >> 2], b3[t3 + 12 >> 2]))
                          break i;
                        break r;
                      }
                      if (!(a5 = er2(b3[b3[c3 + 8 >> 2] + 4 >> 2], b3[e4 + 8 >> 2])))
                        break r;
                      a5 = b3[a5 + 4 >> 2];
                    }
                    if (k3[f4 + 15 | 0]) {
                      if (rr2(b3[f4 >> 2])) {
                        b3[f4 >> 2] = a5, n4[f4 + 15 | 0] = 0, b3[a5 + 24 >> 2] = f4, z2(r7, e4);
                        break e;
                      }
                      break r;
                    }
                    if (!(f4 = O2(16)))
                      break r;
                    if (b3[f4 >> 2] = a5, i5 = Fr2(b3[r7 - -64 >> 2], b3[i5 + 4 >> 2], f4), b3[f4 + 4 >> 2] = i5, !i5)
                      break r;
                    n4[f4 + 13 | 0] = 0, n4[f4 + 14 | 0] = 0, n4[f4 + 15 | 0] = 0, b3[a5 + 24 >> 2] = f4, t3 = b3[r7 + 56 >> 2], a5 = b3[b3[f4 >> 2] + 28 >> 2] + b3[b3[b3[i5 + 4 >> 2] >> 2] + 8 >> 2] | 0, b3[f4 + 8 >> 2] = a5;
                    i: {
                      a:
                        switch (t3 - 100130 | 0) {
                          case 0:
                            i5 = 1 & a5;
                            break i;
                          case 1:
                            i5 = (0 | a5) != 0;
                            break i;
                          case 2:
                            i5 = (0 | a5) > 0;
                            break i;
                          case 3:
                            i5 = a5 >>> 31 | 0;
                            break i;
                          case 4:
                            break a;
                          default:
                            break i;
                        }
                      i5 = a5 + 1 >>> 0 > 2;
                    }
                    n4[f4 + 12 | 0] = i5, z2(r7, e4);
                    break e;
                  }
                  ar2(f4 = r7, i5, r7 = b3[e4 + 8 >> 2], r7, 0, 1);
                  break e;
                }
                for (e4 = b3[b3[i5 >> 2] + 16 >> 2]; i5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2], f4 = b3[i5 >> 2], (0 | e4) == b3[f4 + 16 >> 2]; )
                  ;
                if (k3[i5 + 15 | 0]) {
                  if (!(e4 = er2(b3[b3[b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], b3[f4 + 12 >> 2])))
                    break r;
                  if (!rr2(b3[i5 >> 2]))
                    break r;
                  if (b3[i5 >> 2] = e4, n4[i5 + 15 | 0] = 0, b3[e4 + 24 >> 2] = i5, !(i5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2]))
                    break r;
                }
                if (e4 = b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2], f4 = b3[e4 >> 2], e4 = wr2(r7, e4, 0), (0 | f4) != (0 | (a5 = b3[e4 + 8 >> 2])))
                  ar2(r7, i5, a5, f4, f4, 1);
                else {
                  if (a5 = b3[i5 >> 2], A3 = b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2], c3 = b3[A3 >> 2], b3[b3[a5 + 4 >> 2] + 16 >> 2] != b3[b3[c3 + 4 >> 2] + 16 >> 2] && H2(r7, i5), v3 = 1, t3 = b3[r7 + 72 >> 2], u3 = d2[t3 + 28 >> 2], l4 = b3[a5 + 16 >> 2], !(u3 != d2[l4 + 28 >> 2] | d2[l4 + 32 >> 2] != d2[t3 + 32 >> 2])) {
                    if (!tr2(b3[b3[f4 + 4 >> 2] + 12 >> 2], a5))
                      break r;
                    for (f4 = b3[b3[i5 >> 2] + 16 >> 2]; i5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2], t3 = b3[i5 >> 2], (0 | f4) == b3[t3 + 16 >> 2]; )
                      ;
                    if (k3[i5 + 15 | 0]) {
                      if (!(f4 = er2(b3[b3[b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], b3[t3 + 12 >> 2])))
                        break r;
                      if (!rr2(b3[i5 >> 2]))
                        break r;
                      if (b3[i5 >> 2] = f4, n4[i5 + 15 | 0] = 0, b3[f4 + 24 >> 2] = i5, !(i5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2]))
                        break r;
                    }
                    t3 = b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2], f4 = b3[t3 >> 2], wr2(r7, t3, A3), t3 = b3[r7 + 72 >> 2], u3 = d2[t3 + 28 >> 2], v3 = 0;
                  }
                  f: {
                    if (s3 = u3, l4 = b3[c3 + 16 >> 2], s3 != (u3 = d2[l4 + 28 >> 2]) | d2[l4 + 32 >> 2] != d2[t3 + 32 >> 2]) {
                      if (v3)
                        break f;
                    } else {
                      if (!tr2(e4, b3[b3[c3 + 4 >> 2] + 12 >> 2]))
                        break r;
                      e4 = wr2(r7, A3, 0);
                    }
                    ar2(r7, i5, b3[e4 + 8 >> 2], f4, f4, 1);
                    break e;
                  }
                  if (f4 = b3[a5 + 16 >> 2], s3 = d2[f4 + 28 >> 2], !(d2[l4 + 32 >> 2] <= d2[f4 + 32 >> 2]) | u3 != s3 && !(s3 > u3) || (a5 = b3[b3[c3 + 4 >> 2] + 12 >> 2]), !(e4 = er2(b3[b3[e4 + 8 >> 2] + 4 >> 2], a5)))
                    break r;
                  ar2(r7, i5, e4, f4 = b3[e4 + 8 >> 2], f4, 0), n4[b3[b3[e4 + 4 >> 2] + 24 >> 2] + 15 | 0] = 1, X2(r7, i5);
                }
              }
              return void (j2 = o4 - -64 | 0);
            }
            Zr(r7 + 1740 | 0, 1), E2();
          }
          function K2(r7) {
            r7 |= 0;
            var e4 = 0, f4 = 0, i5 = 0, a5 = w2(0), n5 = w2(0), t3 = 0, o4 = 0, k4 = w2(0), u3 = w2(0), c3 = w2(0), s3 = w2(0), A3 = 0, l4 = w2(0), v3 = 0, h3 = w2(0), p3 = w2(0), m3 = w2(0), y3 = w2(0), g3 = w2(0), E3 = w2(0), C3 = w2(0), R3 = 0, M3 = 0, I3 = w2(0), S3 = w2(0), _3 = 0, P3 = 0, x3 = 0, L3 = 0, B3 = 0, T3 = 0, U3 = 0, F3 = 0;
            v3 = b3[r7 + 8 >> 2], e4 = j2 - 80 | 0, n5 = d2[r7 + 16 >> 2], d2[e4 + 8 >> 2] = n5, p3 = d2[r7 + 20 >> 2], d2[e4 + 12 >> 2] = p3, m3 = d2[r7 + 24 >> 2], d2[e4 + 16 >> 2] = m3;
            r:
              if (_3 = n5 == w2(0) & p3 == w2(0) & m3 == w2(0)) {
                if (b3[e4 + 76 >> 2] = -42943038, b3[e4 + 68 >> 2] = -42943038, b3[e4 + 72 >> 2] = -42943038, b3[e4 + 64 >> 2] = 2104540610, b3[e4 + 56 >> 2] = 2104540610, b3[e4 + 60 >> 2] = 2104540610, P3 = (0 | (A3 = b3[v3 >> 2])) == (0 | v3))
                  h3 = w2(-19999999867631625e21), k4 = w2(19999999867631625e21), u3 = w2(19999999867631625e21), l4 = w2(-19999999867631625e21), c3 = w2(19999999867631625e21), s3 = w2(-19999999867631625e21);
                else {
                  for (y3 = w2(19999999867631625e21), g3 = w2(-19999999867631625e21), E3 = w2(-19999999867631625e21), C3 = w2(19999999867631625e21), I3 = w2(-19999999867631625e21), S3 = w2(19999999867631625e21), h3 = w2(-19999999867631625e21), k4 = w2(19999999867631625e21), s3 = w2(-19999999867631625e21), c3 = w2(19999999867631625e21), l4 = w2(-19999999867631625e21), u3 = w2(19999999867631625e21), f4 = A3; h3 = (i5 = (a5 = d2[f4 + 24 >> 2]) > h3) ? a5 : h3, g3 = i5 ? a5 : g3, k4 = (R3 = a5 < k4) ? a5 : k4, y3 = R3 ? a5 : y3, s3 = (t3 = (a5 = d2[f4 + 20 >> 2]) > s3) ? a5 : s3, E3 = t3 ? a5 : E3, c3 = (M3 = a5 < c3) ? a5 : c3, C3 = M3 ? a5 : C3, l4 = (o4 = (a5 = d2[f4 + 16 >> 2]) > l4) ? a5 : l4, I3 = o4 ? a5 : I3, x3 = o4 ? f4 : x3, u3 = (o4 = a5 < u3) ? a5 : u3, S3 = o4 ? a5 : S3, L3 = o4 ? f4 : L3, B3 = i5 ? f4 : B3, T3 = R3 ? f4 : T3, U3 = t3 ? f4 : U3, F3 = M3 ? f4 : F3, (0 | v3) != (0 | (f4 = b3[f4 >> 2])); )
                    ;
                  b3[e4 + 20 >> 2] = L3, d2[e4 + 56 >> 2] = S3, d2[e4 + 68 >> 2] = I3, b3[e4 + 32 >> 2] = x3, d2[e4 + 60 >> 2] = C3, b3[e4 + 24 >> 2] = F3, d2[e4 + 72 >> 2] = E3, b3[e4 + 36 >> 2] = U3, d2[e4 + 64 >> 2] = y3, b3[e4 + 28 >> 2] = T3, d2[e4 + 76 >> 2] = g3, b3[e4 + 40 >> 2] = B3;
                }
                if (f4 = 2, i5 = (t3 = w2(s3 - c3) > w2(l4 - u3)) << 2, i5 = w2(h3 - k4) > w2(d2[i5 + (e4 + 68 | 0) >> 2] - d2[i5 + (e4 + 56 | 0) >> 2]) ? 2 : t3, d2[(t3 = i5 << 2) + (e4 + 56 | 0) >> 2] >= d2[t3 + (e4 + 68 | 0) >> 2])
                  b3[e4 + 8 >> 2] = 0, b3[e4 + 12 >> 2] = 0;
                else {
                  if (f4 = b3[(i5 <<= 2) + (e4 + 20 | 0) >> 2], i5 = b3[i5 + (e4 + 32 | 0) >> 2], g3 = d2[i5 + 16 >> 2], c3 = w2(d2[f4 + 16 >> 2] - g3), d2[e4 + 44 >> 2] = c3, E3 = d2[i5 + 20 >> 2], s3 = w2(d2[f4 + 20 >> 2] - E3), d2[e4 + 48 >> 2] = s3, C3 = d2[i5 + 24 >> 2], a5 = w2(d2[f4 + 24 >> 2] - C3), d2[e4 + 52 >> 2] = a5, !P3) {
                    for (y3 = w2(0), f4 = A3; k4 = w2(d2[f4 + 20 >> 2] - E3), u3 = w2(d2[f4 + 16 >> 2] - g3), h3 = w2(w2(c3 * k4) - w2(s3 * u3)), l4 = w2(d2[f4 + 24 >> 2] - C3), k4 = w2(w2(s3 * l4) - w2(a5 * k4)), u3 = w2(w2(a5 * u3) - w2(c3 * l4)), (l4 = w2(w2(h3 * h3) + w2(w2(k4 * k4) + w2(u3 * u3)))) > y3 && (m3 = h3, p3 = u3, y3 = l4, n5 = k4), (0 | v3) != (0 | (f4 = b3[f4 >> 2])); )
                      ;
                    if (d2[e4 + 16 >> 2] = m3, d2[e4 + 12 >> 2] = p3, d2[e4 + 8 >> 2] = n5, !(y3 <= w2(0)))
                      break r;
                  }
                  b3[e4 + 16 >> 2] = 0, b3[e4 + 8 >> 2] = 0, b3[e4 + 12 >> 2] = 0, f4 = (s3 < w2(0) ? w2(-s3) : s3) > (c3 < w2(0) ? w2(-c3) : c3), n5 = d2[(e4 + 44 | 0) + (f4 << 2) >> 2], f4 = (a5 < w2(0) ? w2(-a5) : a5) > (n5 < w2(0) ? w2(-n5) : n5) ? 2 : f4;
                }
                b3[(e4 + 8 | 0) + (f4 << 2) >> 2] = 1065353216, m3 = d2[e4 + 16 >> 2], n5 = d2[e4 + 8 >> 2], p3 = d2[e4 + 12 >> 2];
              } else
                A3 = b3[v3 >> 2];
            if (i5 = (p3 < w2(0) ? w2(-p3) : p3) > (n5 < w2(0) ? w2(-n5) : n5), n5 = d2[(e4 + 8 | 0) + (i5 << 2) >> 2], f4 = r7 + 28 | 0, i5 = (m3 < w2(0) ? w2(-m3) : m3) > (n5 < w2(0) ? w2(-n5) : n5) ? 2 : i5, b3[f4 + (t3 = i5 << 2) >> 2] = 0, b3[(o4 = (i5 + 1 >>> 0) % 3 << 2) + f4 >> 2] = 1065353216, b3[(i5 = (i5 + 2 >>> 0) % 3 << 2) + f4 >> 2] = 0, b3[(f4 = r7 + 40 | 0) + t3 >> 2] = 0, e4 = d2[t3 + (e4 + 8 | 0) >> 2] > w2(0), d2[f4 + o4 >> 2] = w2(e4 ? -0 : 0), d2[f4 + i5 >> 2] = w2(e4 ? 1 : -1), !(i5 = (0 | v3) == (0 | A3)))
              for (f4 = A3; e4 = b3[f4 + 20 >> 2], b3[f4 + 28 >> 2] = b3[f4 + 16 >> 2], b3[f4 + 32 >> 2] = e4, (0 | v3) != (0 | (f4 = b3[f4 >> 2])); )
                ;
            if (_3 && (0 | (e4 = b3[v3 + 40 >> 2])) != (0 | (t3 = v3 + 40 | 0))) {
              for (n5 = w2(0); ; ) {
                if (o4 = b3[e4 + 8 >> 2], b3[(f4 = o4) + 28 >> 2] >= 1)
                  for (; R3 = b3[f4 + 16 >> 2], M3 = b3[b3[f4 + 4 >> 2] + 16 >> 2], n5 = w2(n5 + w2(w2(d2[R3 + 28 >> 2] - d2[M3 + 28 >> 2]) * w2(d2[R3 + 32 >> 2] + d2[M3 + 32 >> 2]))), (0 | o4) != (0 | (f4 = b3[f4 + 12 >> 2])); )
                    ;
                if ((0 | t3) == (0 | (e4 = b3[e4 >> 2])))
                  break;
              }
              if (n5 < w2(0)) {
                if (!i5)
                  for (; d2[A3 + 32 >> 2] = -d2[A3 + 32 >> 2], (0 | (A3 = b3[A3 >> 2])) != (0 | v3); )
                    ;
                d2[r7 + 40 >> 2] = -d2[r7 + 40 >> 2], d2[r7 + 44 >> 2] = -d2[r7 + 44 >> 2], d2[r7 + 48 >> 2] = -d2[r7 + 48 >> 2];
              }
            }
          }
          function Y2(r7) {
            var e4 = 0, f4 = 0, i5 = 0, a5 = 0, n5 = 0, t3 = 0, o4 = 0, k4 = 0, u3 = 0;
            r:
              if (r7 |= 0) {
                n5 = (i5 = r7 - 8 | 0) + (r7 = -8 & (e4 = b3[r7 - 4 >> 2])) | 0;
                e:
                  if (!(1 & e4)) {
                    if (!(3 & e4))
                      break r;
                    if ((i5 = i5 - (e4 = b3[i5 >> 2]) | 0) >>> 0 < v2[618])
                      break r;
                    if (r7 = r7 + e4 | 0, b3[619] == (0 | i5)) {
                      if ((3 & (e4 = b3[n5 + 4 >> 2])) == 3)
                        return b3[616] = r7, b3[n5 + 4 >> 2] = -2 & e4, b3[i5 + 4 >> 2] = 1 | r7, void (b3[r7 + i5 >> 2] = r7);
                    } else {
                      if (e4 >>> 0 <= 255) {
                        if (a5 = b3[i5 + 8 >> 2], e4 = e4 >>> 3 | 0, (0 | (f4 = b3[i5 + 12 >> 2])) == (0 | a5)) {
                          k4 = 2456, u3 = b3[614] & Jr(e4), b3[k4 >> 2] = u3;
                          break e;
                        }
                        b3[a5 + 12 >> 2] = f4, b3[f4 + 8 >> 2] = a5;
                        break e;
                      }
                      if (o4 = b3[i5 + 24 >> 2], (0 | i5) == (0 | (e4 = b3[i5 + 12 >> 2])))
                        if ((f4 = b3[(a5 = i5 + 20 | 0) >> 2]) || (f4 = b3[(a5 = i5 + 16 | 0) >> 2])) {
                          for (; t3 = a5, (f4 = b3[(a5 = (e4 = f4) + 20 | 0) >> 2]) || (a5 = e4 + 16 | 0, f4 = b3[e4 + 16 >> 2]); )
                            ;
                          b3[t3 >> 2] = 0;
                        } else
                          e4 = 0;
                      else
                        f4 = b3[i5 + 8 >> 2], b3[f4 + 12 >> 2] = e4, b3[e4 + 8 >> 2] = f4;
                      if (!o4)
                        break e;
                      a5 = b3[i5 + 28 >> 2];
                      f: {
                        if (b3[(f4 = 2760 + (a5 << 2) | 0) >> 2] == (0 | i5)) {
                          if (b3[f4 >> 2] = e4, e4)
                            break f;
                          k4 = 2460, u3 = b3[615] & Jr(a5), b3[k4 >> 2] = u3;
                          break e;
                        }
                        if (b3[o4 + (b3[o4 + 16 >> 2] == (0 | i5) ? 16 : 20) >> 2] = e4, !e4)
                          break e;
                      }
                      if (b3[e4 + 24 >> 2] = o4, (f4 = b3[i5 + 16 >> 2]) && (b3[e4 + 16 >> 2] = f4, b3[f4 + 24 >> 2] = e4), !(f4 = b3[i5 + 20 >> 2]))
                        break e;
                      b3[e4 + 20 >> 2] = f4, b3[f4 + 24 >> 2] = e4;
                    }
                  }
                if (!(i5 >>> 0 >= n5 >>> 0) && 1 & (e4 = b3[n5 + 4 >> 2])) {
                  e: {
                    if (!(2 & e4)) {
                      if (b3[620] == (0 | n5)) {
                        if (b3[620] = i5, r7 = b3[617] + r7 | 0, b3[617] = r7, b3[i5 + 4 >> 2] = 1 | r7, b3[619] != (0 | i5))
                          break r;
                        return b3[616] = 0, void (b3[619] = 0);
                      }
                      if (b3[619] == (0 | n5))
                        return b3[619] = i5, r7 = b3[616] + r7 | 0, b3[616] = r7, b3[i5 + 4 >> 2] = 1 | r7, void (b3[r7 + i5 >> 2] = r7);
                      r7 = (-8 & e4) + r7 | 0;
                      f:
                        if (e4 >>> 0 <= 255) {
                          if (a5 = b3[n5 + 8 >> 2], e4 = e4 >>> 3 | 0, (0 | (f4 = b3[n5 + 12 >> 2])) == (0 | a5)) {
                            k4 = 2456, u3 = b3[614] & Jr(e4), b3[k4 >> 2] = u3;
                            break f;
                          }
                          b3[a5 + 12 >> 2] = f4, b3[f4 + 8 >> 2] = a5;
                        } else {
                          if (o4 = b3[n5 + 24 >> 2], (0 | n5) == (0 | (e4 = b3[n5 + 12 >> 2])))
                            if ((f4 = b3[(a5 = n5 + 20 | 0) >> 2]) || (f4 = b3[(a5 = n5 + 16 | 0) >> 2])) {
                              for (; t3 = a5, (f4 = b3[(a5 = (e4 = f4) + 20 | 0) >> 2]) || (a5 = e4 + 16 | 0, f4 = b3[e4 + 16 >> 2]); )
                                ;
                              b3[t3 >> 2] = 0;
                            } else
                              e4 = 0;
                          else
                            f4 = b3[n5 + 8 >> 2], b3[f4 + 12 >> 2] = e4, b3[e4 + 8 >> 2] = f4;
                          if (o4) {
                            a5 = b3[n5 + 28 >> 2];
                            i: {
                              if (b3[(f4 = 2760 + (a5 << 2) | 0) >> 2] == (0 | n5)) {
                                if (b3[f4 >> 2] = e4, e4)
                                  break i;
                                k4 = 2460, u3 = b3[615] & Jr(a5), b3[k4 >> 2] = u3;
                                break f;
                              }
                              if (b3[o4 + (b3[o4 + 16 >> 2] == (0 | n5) ? 16 : 20) >> 2] = e4, !e4)
                                break f;
                            }
                            b3[e4 + 24 >> 2] = o4, (f4 = b3[n5 + 16 >> 2]) && (b3[e4 + 16 >> 2] = f4, b3[f4 + 24 >> 2] = e4), (f4 = b3[n5 + 20 >> 2]) && (b3[e4 + 20 >> 2] = f4, b3[f4 + 24 >> 2] = e4);
                          }
                        }
                      if (b3[i5 + 4 >> 2] = 1 | r7, b3[r7 + i5 >> 2] = r7, b3[619] != (0 | i5))
                        break e;
                      return void (b3[616] = r7);
                    }
                    b3[n5 + 4 >> 2] = -2 & e4, b3[i5 + 4 >> 2] = 1 | r7, b3[r7 + i5 >> 2] = r7;
                  }
                  if (r7 >>> 0 <= 255)
                    return e4 = 2496 + ((r7 = r7 >>> 3 | 0) << 3) | 0, (f4 = b3[614]) & (r7 = 1 << r7) ? r7 = b3[e4 + 8 >> 2] : (b3[614] = r7 | f4, r7 = e4), b3[e4 + 8 >> 2] = i5, b3[r7 + 12 >> 2] = i5, b3[i5 + 12 >> 2] = e4, void (b3[i5 + 8 >> 2] = r7);
                  a5 = 31, b3[i5 + 16 >> 2] = 0, b3[i5 + 20 >> 2] = 0, r7 >>> 0 <= 16777215 && (e4 = r7 >>> 8 | 0, e4 <<= t3 = e4 + 1048320 >>> 16 & 8, a5 = 28 + ((e4 = ((e4 <<= a5 = e4 + 520192 >>> 16 & 4) << (f4 = e4 + 245760 >>> 16 & 2) >>> 15 | 0) - (f4 | a5 | t3) | 0) << 1 | r7 >>> e4 + 21 & 1) | 0), b3[i5 + 28 >> 2] = a5, t3 = 2760 + (a5 << 2) | 0;
                  e: {
                    f: {
                      if ((f4 = b3[615]) & (e4 = 1 << a5)) {
                        for (a5 = r7 << ((0 | a5) == 31 ? 0 : 25 - (a5 >>> 1 | 0) | 0), e4 = b3[t3 >> 2]; ; ) {
                          if (f4 = e4, (-8 & b3[e4 + 4 >> 2]) == (0 | r7))
                            break f;
                          if (e4 = a5 >>> 29 | 0, a5 <<= 1, !(e4 = b3[16 + (t3 = f4 + (4 & e4) | 0) >> 2]))
                            break;
                        }
                        b3[t3 + 16 >> 2] = i5, b3[i5 + 24 >> 2] = f4;
                      } else
                        b3[615] = e4 | f4, b3[t3 >> 2] = i5, b3[i5 + 24 >> 2] = t3;
                      b3[i5 + 12 >> 2] = i5, b3[i5 + 8 >> 2] = i5;
                      break e;
                    }
                    r7 = b3[f4 + 8 >> 2], b3[r7 + 12 >> 2] = i5, b3[f4 + 8 >> 2] = i5, b3[i5 + 24 >> 2] = 0, b3[i5 + 12 >> 2] = f4, b3[i5 + 8 >> 2] = r7;
                  }
                  r7 = b3[622] - 1 | 0, b3[622] = r7 || -1;
                }
              }
          }
          function N2(r7, e4) {
            e4 |= 0;
            var f4 = 0, i5 = 0, a5 = 0, t3 = 0, o4 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = 0, d3 = 0, h3 = 0, p3 = 0, w3 = 0, m3 = 0, y3 = 0;
            if (j2 = u3 = j2 - 16 | 0, b3[84 + (r7 |= 0) >> 2] = 0, (0 | (s3 = b3[e4 + 40 >> 2])) != (0 | (h3 = e4 + 40 | 0)))
              for (e4 = s3; n4[e4 + 20 | 0] = 0, (0 | h3) != (0 | (e4 = b3[e4 >> 2])); )
                ;
            if ((0 | s3) != (0 | h3)) {
              for (; ; ) {
                if (!(k3[s3 + 20 | 0] | !k3[s3 + 21 | 0])) {
                  if (o4 = b3[s3 + 8 >> 2], k3[r7 + 80 | 0])
                    e4 = 1, f4 = 1;
                  else {
                    a5 = 0, i5 = 0, e4 = 0, t3 = b3[(f4 = o4) + 20 >> 2];
                    r:
                      if (k3[t3 + 21 | 0])
                        for (; ; ) {
                          if (k3[(e4 = t3) + 20 | 0]) {
                            e4 = i5;
                            break r;
                          }
                          if (n4[e4 + 20 | 0] = 1, b3[e4 + 16 >> 2] = i5, a5 = a5 + 1 | 0, i5 = e4, f4 = b3[f4 + 8 >> 2], t3 = b3[f4 + 20 >> 2], !k3[t3 + 21 | 0])
                            break;
                        }
                    i5 = b3[o4 + 4 >> 2], t3 = b3[i5 + 20 >> 2];
                    r: {
                      e:
                        if (!k3[t3 + 21 | 0] | k3[t3 + 20 | 0]) {
                          if (w3 = o4, !e4)
                            break r;
                        } else
                          for (f4 = e4; ; ) {
                            if (n4[(e4 = t3) + 20 | 0] = 1, b3[e4 + 16 >> 2] = f4, a5 = a5 + 1 | 0, w3 = b3[i5 + 12 >> 2], i5 = b3[w3 + 4 >> 2], t3 = b3[i5 + 20 >> 2], !k3[t3 + 21 | 0])
                              break e;
                            if (f4 = e4, k3[t3 + 20 | 0])
                              break;
                          }
                      for (; n4[e4 + 20 | 0] = 0, e4 = b3[e4 + 16 >> 2]; )
                        ;
                    }
                    m3 = (0 | a5) > 1, t3 = 0, f4 = 0, e4 = 0, v3 = b3[o4 + 12 >> 2], i5 = b3[(c3 = v3) + 20 >> 2];
                    r:
                      if (k3[i5 + 21 | 0])
                        for (; ; ) {
                          if (k3[(e4 = i5) + 20 | 0]) {
                            e4 = f4;
                            break r;
                          }
                          if (n4[e4 + 20 | 0] = 1, b3[e4 + 16 >> 2] = f4, t3 = t3 + 1 | 0, f4 = e4, c3 = b3[c3 + 8 >> 2], i5 = b3[c3 + 20 >> 2], !k3[i5 + 21 | 0])
                            break;
                        }
                    p3 = m3 ? a5 : 1, i5 = b3[v3 + 4 >> 2], a5 = b3[i5 + 20 >> 2];
                    r: {
                      e:
                        if (!k3[a5 + 21 | 0] | k3[a5 + 20 | 0]) {
                          if (!e4)
                            break r;
                        } else
                          for (f4 = e4; ; ) {
                            if (n4[(e4 = a5) + 20 | 0] = 1, b3[e4 + 16 >> 2] = f4, t3 = t3 + 1 | 0, v3 = b3[i5 + 12 >> 2], i5 = b3[v3 + 4 >> 2], a5 = b3[i5 + 20 >> 2], !k3[a5 + 21 | 0])
                              break e;
                            if (f4 = e4, k3[a5 + 20 | 0])
                              break;
                          }
                      for (; n4[e4 + 20 | 0] = 0, e4 = b3[e4 + 16 >> 2]; )
                        ;
                    }
                    y3 = (0 | t3) > (0 | p3), a5 = 0, f4 = 0, e4 = 0, d3 = b3[b3[o4 + 8 >> 2] + 4 >> 2], i5 = b3[(c3 = d3) + 20 >> 2];
                    r:
                      if (k3[i5 + 21 | 0])
                        for (; ; ) {
                          if (k3[(e4 = i5) + 20 | 0]) {
                            e4 = f4;
                            break r;
                          }
                          if (n4[e4 + 20 | 0] = 1, b3[e4 + 16 >> 2] = f4, a5 = a5 + 1 | 0, f4 = e4, c3 = b3[c3 + 8 >> 2], i5 = b3[c3 + 20 >> 2], !k3[i5 + 21 | 0])
                            break;
                        }
                    A3 = y3 ? t3 : p3, i5 = b3[d3 + 4 >> 2], t3 = b3[i5 + 20 >> 2];
                    r: {
                      e:
                        if (!k3[t3 + 21 | 0] | k3[t3 + 20 | 0]) {
                          if (!e4)
                            break r;
                        } else
                          for (f4 = e4; ; ) {
                            if (n4[(e4 = t3) + 20 | 0] = 1, b3[e4 + 16 >> 2] = f4, a5 = a5 + 1 | 0, d3 = b3[i5 + 12 >> 2], i5 = b3[d3 + 4 >> 2], t3 = b3[i5 + 20 >> 2], !k3[t3 + 21 | 0])
                              break e;
                            if (f4 = e4, k3[t3 + 20 | 0])
                              break;
                          }
                      for (; n4[e4 + 20 | 0] = 0, e4 = b3[e4 + 16 >> 2]; )
                        ;
                    }
                    kr2(u3, o4), c3 = b3[u3 + 8 >> 2], p3 = b3[u3 + 4 >> 2], l4 = b3[u3 >> 2], kr2(u3, b3[o4 + 12 >> 2]), t3 = b3[u3 + 8 >> 2], i5 = b3[u3 + 4 >> 2], f4 = b3[u3 >> 2], kr2(u3, b3[b3[o4 + 8 >> 2] + 4 >> 2]), e4 = a5, (0 | (e4 = (l4 = (0 | (e4 = (A3 = (0 | (e4 = (a5 = (0 | a5) > (0 | A3)) ? e4 : A3)) < (0 | l4)) ? l4 : e4)) < (0 | f4)) ? f4 : e4)) >= (0 | (f4 = b3[u3 >> 2])) ? (o4 = l4 ? i5 : A3 ? p3 : a5 ? d3 : y3 ? v3 : m3 ? w3 : o4, f4 = l4 ? t3 : A3 ? c3 : a5 || m3 | y3 ? 2 : 1) : (o4 = b3[u3 + 4 >> 2], e4 = f4, f4 = b3[u3 + 8 >> 2]);
                  }
                  be[0 | f4](r7, o4, e4);
                }
                if ((0 | h3) == (0 | (s3 = b3[s3 >> 2])))
                  break;
              }
              if (a5 = b3[r7 + 84 >> 2]) {
                for ((0 | (e4 = b3[r7 + 1716 >> 2])) == 3 ? be[b3[r7 + 88 >> 2]](4) : be[0 | e4](4, b3[r7 + 1896 >> 2]), t3 = -1; ; ) {
                  for (e4 = b3[a5 + 8 >> 2]; k3[r7 + 80 | 0] && (0 | (f4 = !(o4 = k3[b3[b3[e4 + 4 >> 2] + 20 >> 2] + 21 | 0]))) != (0 | t3) && ((0 | (i5 = b3[r7 + 1720 >> 2])) == 4 ? be[b3[r7 + 92 >> 2]](!o4) : be[0 | i5](!o4, b3[r7 + 1896 >> 2]), t3 = f4), (0 | (f4 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[b3[e4 + 16 >> 2] + 12 >> 2]) : be[0 | f4](b3[b3[e4 + 16 >> 2] + 12 >> 2], b3[r7 + 1896 >> 2]), (0 | (e4 = b3[e4 + 12 >> 2])) != b3[a5 + 8 >> 2]; )
                    ;
                  if (!(a5 = b3[a5 + 16 >> 2]))
                    break;
                }
                (0 | (e4 = b3[r7 + 1728 >> 2])) == 6 ? be[b3[r7 + 100 >> 2]]() : be[0 | e4](b3[r7 + 1896 >> 2]), b3[r7 + 84 >> 2] = 0;
              }
            }
            j2 = u3 + 16 | 0;
          }
          function V2(r7, e4) {
            var f4 = 0, i5 = 0, a5 = 0, n5 = 0, t3 = 0, o4 = 0, k4 = 0, u3 = 0;
            n5 = r7 + e4 | 0;
            r: {
              e:
                if (!(1 & (f4 = b3[r7 + 4 >> 2]))) {
                  if (!(3 & f4))
                    break r;
                  e4 = (f4 = b3[r7 >> 2]) + e4 | 0;
                  f: {
                    if ((0 | (r7 = r7 - f4 | 0)) != b3[619]) {
                      if (f4 >>> 0 <= 255) {
                        if (a5 = b3[r7 + 8 >> 2], f4 = f4 >>> 3 | 0, (0 | (i5 = b3[r7 + 12 >> 2])) != (0 | a5))
                          break f;
                        k4 = 2456, u3 = b3[614] & Jr(f4), b3[k4 >> 2] = u3;
                        break e;
                      }
                      if (o4 = b3[r7 + 24 >> 2], (0 | (f4 = b3[r7 + 12 >> 2])) == (0 | r7))
                        if ((i5 = b3[(a5 = r7 + 20 | 0) >> 2]) || (i5 = b3[(a5 = r7 + 16 | 0) >> 2])) {
                          for (; t3 = a5, (i5 = b3[(a5 = (f4 = i5) + 20 | 0) >> 2]) || (a5 = f4 + 16 | 0, i5 = b3[f4 + 16 >> 2]); )
                            ;
                          b3[t3 >> 2] = 0;
                        } else
                          f4 = 0;
                      else
                        i5 = b3[r7 + 8 >> 2], b3[i5 + 12 >> 2] = f4, b3[f4 + 8 >> 2] = i5;
                      if (!o4)
                        break e;
                      a5 = b3[r7 + 28 >> 2];
                      i: {
                        if (b3[(i5 = 2760 + (a5 << 2) | 0) >> 2] == (0 | r7)) {
                          if (b3[i5 >> 2] = f4, f4)
                            break i;
                          k4 = 2460, u3 = b3[615] & Jr(a5), b3[k4 >> 2] = u3;
                          break e;
                        }
                        if (b3[o4 + (b3[o4 + 16 >> 2] == (0 | r7) ? 16 : 20) >> 2] = f4, !f4)
                          break e;
                      }
                      if (b3[f4 + 24 >> 2] = o4, (i5 = b3[r7 + 16 >> 2]) && (b3[f4 + 16 >> 2] = i5, b3[i5 + 24 >> 2] = f4), !(i5 = b3[r7 + 20 >> 2]))
                        break e;
                      b3[f4 + 20 >> 2] = i5, b3[i5 + 24 >> 2] = f4;
                      break e;
                    }
                    if ((3 & (f4 = b3[n5 + 4 >> 2])) != 3)
                      break e;
                    return b3[616] = e4, b3[n5 + 4 >> 2] = -2 & f4, b3[r7 + 4 >> 2] = 1 | e4, void (b3[n5 >> 2] = e4);
                  }
                  b3[a5 + 12 >> 2] = i5, b3[i5 + 8 >> 2] = a5;
                }
              e: {
                if (!(2 & (f4 = b3[n5 + 4 >> 2]))) {
                  if (b3[620] == (0 | n5)) {
                    if (b3[620] = r7, e4 = b3[617] + e4 | 0, b3[617] = e4, b3[r7 + 4 >> 2] = 1 | e4, b3[619] != (0 | r7))
                      break r;
                    return b3[616] = 0, void (b3[619] = 0);
                  }
                  if (b3[619] == (0 | n5))
                    return b3[619] = r7, e4 = b3[616] + e4 | 0, b3[616] = e4, b3[r7 + 4 >> 2] = 1 | e4, void (b3[r7 + e4 >> 2] = e4);
                  e4 = (-8 & f4) + e4 | 0;
                  f:
                    if (f4 >>> 0 <= 255) {
                      if (a5 = b3[n5 + 8 >> 2], f4 = f4 >>> 3 | 0, (0 | (i5 = b3[n5 + 12 >> 2])) == (0 | a5)) {
                        k4 = 2456, u3 = b3[614] & Jr(f4), b3[k4 >> 2] = u3;
                        break f;
                      }
                      b3[a5 + 12 >> 2] = i5, b3[i5 + 8 >> 2] = a5;
                    } else {
                      if (o4 = b3[n5 + 24 >> 2], (0 | n5) == (0 | (f4 = b3[n5 + 12 >> 2])))
                        if ((a5 = b3[(i5 = n5 + 20 | 0) >> 2]) || (a5 = b3[(i5 = n5 + 16 | 0) >> 2])) {
                          for (; t3 = i5, (a5 = b3[(i5 = (f4 = a5) + 20 | 0) >> 2]) || (i5 = f4 + 16 | 0, a5 = b3[f4 + 16 >> 2]); )
                            ;
                          b3[t3 >> 2] = 0;
                        } else
                          f4 = 0;
                      else
                        i5 = b3[n5 + 8 >> 2], b3[i5 + 12 >> 2] = f4, b3[f4 + 8 >> 2] = i5;
                      if (o4) {
                        a5 = b3[n5 + 28 >> 2];
                        i: {
                          if (b3[(i5 = 2760 + (a5 << 2) | 0) >> 2] == (0 | n5)) {
                            if (b3[i5 >> 2] = f4, f4)
                              break i;
                            k4 = 2460, u3 = b3[615] & Jr(a5), b3[k4 >> 2] = u3;
                            break f;
                          }
                          if (b3[o4 + (b3[o4 + 16 >> 2] == (0 | n5) ? 16 : 20) >> 2] = f4, !f4)
                            break f;
                        }
                        b3[f4 + 24 >> 2] = o4, (i5 = b3[n5 + 16 >> 2]) && (b3[f4 + 16 >> 2] = i5, b3[i5 + 24 >> 2] = f4), (i5 = b3[n5 + 20 >> 2]) && (b3[f4 + 20 >> 2] = i5, b3[i5 + 24 >> 2] = f4);
                      }
                    }
                  if (b3[r7 + 4 >> 2] = 1 | e4, b3[r7 + e4 >> 2] = e4, b3[619] != (0 | r7))
                    break e;
                  return void (b3[616] = e4);
                }
                b3[n5 + 4 >> 2] = -2 & f4, b3[r7 + 4 >> 2] = 1 | e4, b3[r7 + e4 >> 2] = e4;
              }
              if (e4 >>> 0 <= 255)
                return f4 = 2496 + ((e4 = e4 >>> 3 | 0) << 3) | 0, (i5 = b3[614]) & (e4 = 1 << e4) ? e4 = b3[f4 + 8 >> 2] : (b3[614] = e4 | i5, e4 = f4), b3[f4 + 8 >> 2] = r7, b3[e4 + 12 >> 2] = r7, b3[r7 + 12 >> 2] = f4, void (b3[r7 + 8 >> 2] = e4);
              a5 = 31, b3[r7 + 16 >> 2] = 0, b3[r7 + 20 >> 2] = 0, e4 >>> 0 <= 16777215 && (f4 = e4 >>> 8 | 0, f4 <<= t3 = f4 + 1048320 >>> 16 & 8, a5 = 28 + ((f4 = ((f4 <<= a5 = f4 + 520192 >>> 16 & 4) << (i5 = f4 + 245760 >>> 16 & 2) >>> 15 | 0) - (i5 | a5 | t3) | 0) << 1 | e4 >>> f4 + 21 & 1) | 0), b3[r7 + 28 >> 2] = a5, t3 = 2760 + (a5 << 2) | 0;
              e: {
                if ((i5 = b3[615]) & (f4 = 1 << a5)) {
                  for (a5 = e4 << ((0 | a5) == 31 ? 0 : 25 - (a5 >>> 1 | 0) | 0), f4 = b3[t3 >> 2]; ; ) {
                    if (i5 = f4, (-8 & b3[f4 + 4 >> 2]) == (0 | e4))
                      break e;
                    if (f4 = a5 >>> 29 | 0, a5 <<= 1, !(f4 = b3[16 + (t3 = i5 + (4 & f4) | 0) >> 2]))
                      break;
                  }
                  b3[t3 + 16 >> 2] = r7, b3[r7 + 24 >> 2] = i5;
                } else
                  b3[615] = f4 | i5, b3[t3 >> 2] = r7, b3[r7 + 24 >> 2] = t3;
                return b3[r7 + 12 >> 2] = r7, void (b3[r7 + 8 >> 2] = r7);
              }
              e4 = b3[i5 + 8 >> 2], b3[e4 + 12 >> 2] = r7, b3[i5 + 8 >> 2] = r7, b3[r7 + 24 >> 2] = 0, b3[r7 + 12 >> 2] = i5, b3[r7 + 8 >> 2] = e4;
            }
          }
          function G2(r7, e4) {
            var f4 = 0, i5 = 0, a5 = 0, t3 = w2(0), o4 = 0, k4 = 0, u3 = w2(0), c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = 0, h3 = 0, p3 = 0, m3 = 0, y3 = 0, g3 = 0, C3 = 0, R3 = 0, M3 = 0, I3 = 0;
            j2 = a5 = j2 - 48 | 0;
            r: {
              A3 = b3[e4 >> 2], k4 = b3[A3 + 16 >> 2], u3 = d2[k4 + 28 >> 2], f4 = b3[b3[b3[e4 + 4 >> 2] + 8 >> 2] >> 2], v3 = b3[f4 >> 2], i5 = b3[v3 + 16 >> 2], t3 = d2[i5 + 28 >> 2];
              e: {
                if (!(!(d2[k4 + 32 >> 2] <= d2[i5 + 32 >> 2]) | u3 != t3) || u3 < t3) {
                  if (pr2(b3[b3[v3 + 4 >> 2] + 16 >> 2], k4, i5) > w2(0))
                    break e;
                  if (k4 = b3[A3 + 16 >> 2], i5 = b3[v3 + 16 >> 2], d2[k4 + 32 >> 2] != d2[i5 + 32 >> 2] || d2[k4 + 28 >> 2] != d2[i5 + 28 >> 2]) {
                    if (!ir2(b3[v3 + 4 >> 2]))
                      break r;
                    if (!tr2(A3, b3[b3[v3 + 4 >> 2] + 12 >> 2]))
                      break r;
                    g3 = 1, n4[f4 + 14 | 0] = 1, n4[e4 + 14 | 0] = 1;
                    break e;
                  }
                  if (g3 = 1, (0 | i5) == (0 | k4))
                    break e;
                  if (o4 = b3[r7 + 68 >> 2], (0 | (e4 = b3[k4 + 36 >> 2])) >= 0) {
                    if (h3 = b3[o4 >> 2], c3 = b3[h3 >> 2], k4 = e4, s3 = b3[h3 + 4 >> 2], e4 = b3[4 + (C3 = s3 + (e4 << 3) | 0) >> 2], y3 = b3[h3 + 8 >> 2], m3 = b3[c3 + (y3 << 2) >> 2], b3[c3 + (e4 << 2) >> 2] = m3, b3[4 + (R3 = (m3 << 3) + s3 | 0) >> 2] = e4, M3 = y3 - 1 | 0, b3[h3 + 8 >> 2] = M3, (0 | e4) < (0 | y3)) {
                      f: {
                        if ((0 | e4) < 2 || (f4 = b3[(b3[c3 + (e4 << 1 & -4) >> 2] << 3) + s3 >> 2], t3 = d2[f4 + 28 >> 2], p3 = b3[(m3 << 3) + s3 >> 2], t3 < (u3 = d2[p3 + 28 >> 2]) || !(!(d2[f4 + 32 >> 2] <= d2[p3 + 32 >> 2]) | u3 != t3)))
                          for (I3 = (m3 << 3) + s3 | 0; ; ) {
                            if ((0 | M3) <= (0 | (f4 = e4 << 1)) || (l4 = b3[(b3[c3 + ((i5 = 1 | f4) << 2) >> 2] << 3) + s3 >> 2], u3 = d2[l4 + 28 >> 2], o4 = b3[(b3[c3 + (f4 << 2) >> 2] << 3) + s3 >> 2], t3 = d2[o4 + 28 >> 2], !(d2[l4 + 32 >> 2] <= d2[o4 + 32 >> 2]) | u3 != t3 && !(u3 < t3) || (f4 = i5)), (0 | f4) >= (0 | y3)) {
                              f4 = e4;
                              break f;
                            }
                            if (p3 = b3[I3 >> 2], u3 = d2[p3 + 28 >> 2], l4 = b3[c3 + (f4 << 2) >> 2], i5 = b3[(o4 = (l4 << 3) + s3 | 0) >> 2], u3 < (t3 = d2[i5 + 28 >> 2])) {
                              f4 = e4;
                              break f;
                            }
                            if (!(!(d2[p3 + 32 >> 2] <= d2[i5 + 32 >> 2]) | u3 != t3)) {
                              f4 = e4;
                              break f;
                            }
                            b3[c3 + (e4 << 2) >> 2] = l4, b3[o4 + 4 >> 2] = e4, e4 = f4;
                          }
                        for (; ; ) {
                          if (l4 = b3[c3 + ((f4 = e4 >> 1) << 2) >> 2], i5 = b3[(o4 = (l4 << 3) + s3 | 0) >> 2], (t3 = d2[i5 + 28 >> 2]) < u3) {
                            f4 = e4;
                            break f;
                          }
                          if (!(!(d2[i5 + 32 >> 2] <= d2[p3 + 32 >> 2]) | u3 != t3)) {
                            f4 = e4;
                            break f;
                          }
                          if (b3[c3 + (e4 << 2) >> 2] = l4, b3[o4 + 4 >> 2] = e4, !((e4 = f4) >>> 0 > 1))
                            break;
                        }
                      }
                      b3[c3 + (f4 << 2) >> 2] = m3, b3[R3 + 4 >> 2] = f4;
                    }
                    b3[C3 >> 2] = 0, b3[C3 + 4 >> 2] = b3[h3 + 16 >> 2], b3[h3 + 16 >> 2] = k4;
                  } else {
                    b3[b3[o4 + 4 >> 2] + ((-1 ^ e4) << 2) >> 2] = 0;
                    f:
                      if (!((0 | (e4 = b3[o4 + 12 >> 2])) < 1))
                        for (k4 = b3[o4 + 8 >> 2]; ; ) {
                          if (b3[b3[k4 + ((f4 = e4 - 1 | 0) << 2) >> 2] >> 2])
                            break f;
                          if (b3[o4 + 12 >> 2] = f4, i5 = (0 | e4) > 1, e4 = f4, !i5)
                            break;
                        }
                  }
                  if (f4 = b3[b3[v3 + 4 >> 2] + 12 >> 2], b3[a5 + 24 >> 2] = 0, b3[a5 + 28 >> 2] = 0, b3[a5 + 16 >> 2] = 0, b3[a5 + 20 >> 2] = 0, e4 = b3[287], b3[a5 + 8 >> 2] = b3[286], b3[a5 + 12 >> 2] = e4, e4 = b3[285], b3[a5 >> 2] = b3[284], b3[a5 + 4 >> 2] = e4, e4 = b3[f4 + 16 >> 2], b3[a5 + 16 >> 2] = b3[e4 + 12 >> 2], b3[a5 + 20 >> 2] = b3[b3[A3 + 16 >> 2] + 12 >> 2], d2[a5 + 36 >> 2] = d2[e4 + 16 >> 2], d2[a5 + 40 >> 2] = d2[e4 + 20 >> 2], d2[a5 + 44 >> 2] = d2[e4 + 24 >> 2], b3[e4 + 12 >> 2] = 0, i5 = e4 + 12 | 0, (0 | (e4 = b3[r7 + 1736 >> 2])) == 8 ? be[b3[r7 + 76 >> 2]](a5 + 36 | 0, a5 + 16 | 0, a5, i5) : be[0 | e4](a5 + 36 | 0, a5 + 16 | 0, a5, i5, b3[r7 + 1896 >> 2]), b3[i5 >> 2] || (b3[i5 >> 2] = b3[a5 + 16 >> 2]), tr2(f4, A3))
                    break e;
                  break r;
                }
                if (!(pr2(b3[b3[A3 + 4 >> 2] + 16 >> 2], i5, k4) < w2(0))) {
                  if (g3 = 1, n4[e4 + 14 | 0] = 1, n4[b3[b3[b3[e4 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !ir2(b3[A3 + 4 >> 2]))
                    break r;
                  if (!tr2(b3[b3[v3 + 4 >> 2] + 12 >> 2], A3))
                    break r;
                }
              }
              return j2 = a5 + 48 | 0, g3;
            }
            Zr(r7 + 1740 | 0, 1), E2();
          }
          function J2(r7) {
            r7 |= 0;
            var e4 = 0, f4 = 0, i5 = w2(0), a5 = w2(0), n5 = w2(0), t3 = w2(0), o4 = w2(0), u3 = w2(0), c3 = 0, s3 = 0, A3 = 0, l4 = w2(0), v3 = w2(0), h3 = 0, p3 = w2(0), m3 = w2(0), y3 = w2(0), g3 = w2(0), E3 = w2(0), C3 = 0, R3 = 0, M3 = w2(0), I3 = w2(0), S3 = w2(0);
            r: {
              e:
                if (!((0 | (A3 = b3[r7 + 112 >> 2])) < 3)) {
                  if (c3 = (R3 = r7 + 116 | 0) + (A3 << 4) | 0, t3 = d2[r7 + 24 >> 2], o4 = d2[r7 + 16 >> 2], u3 = d2[r7 + 20 >> 2], t3 != w2(0) || o4 != w2(0) | u3 != w2(0))
                    p3 = d2[r7 + 124 >> 2], n5 = w2(d2[r7 + 140 >> 2] - p3), m3 = d2[r7 + 120 >> 2], l4 = w2(d2[r7 + 136 >> 2] - m3), y3 = d2[r7 + 116 >> 2], v3 = w2(d2[r7 + 132 >> 2] - y3);
                  else {
                    for (f4 = r7 + 148 | 0, t3 = w2(0), u3 = w2(0), o4 = w2(0), e4 = r7 + 132 | 0, y3 = d2[r7 + 116 >> 2], i5 = v3 = w2(d2[e4 >> 2] - y3), m3 = d2[r7 + 120 >> 2], a5 = l4 = w2(d2[r7 + 136 >> 2] - m3), p3 = d2[r7 + 124 >> 2], g3 = n5 = w2(d2[r7 + 140 >> 2] - p3); E3 = w2(d2[e4 + 20 >> 2] - m3), M3 = w2(d2[f4 >> 2] - y3), I3 = w2(w2(i5 * E3) - w2(a5 * M3)), S3 = w2(d2[e4 + 24 >> 2] - p3), a5 = w2(w2(a5 * S3) - w2(g3 * E3)), i5 = w2(w2(g3 * M3) - w2(i5 * S3)), w2(w2(t3 * I3) + w2(w2(o4 * a5) + w2(u3 * i5))) >= w2(0) ? (u3 = w2(u3 + i5), o4 = w2(o4 + a5), t3 = w2(t3 + I3)) : (u3 = w2(u3 - i5), o4 = w2(o4 - a5), t3 = w2(t3 - I3)), i5 = M3, a5 = E3, g3 = S3, c3 >>> 0 > (f4 = (e4 = f4) + 16 | 0) >>> 0; )
                      ;
                    if ((0 | A3) < 3)
                      break e;
                  }
                  for (f4 = r7 + 148 | 0, e4 = h3 = r7 + 132 | 0; ; ) {
                    i5 = n5, n5 = l4, C3 = e4, a5 = v3, l4 = w2(d2[e4 + 20 >> 2] - m3), v3 = w2(d2[(e4 = f4) >> 2] - y3), E3 = w2(t3 * w2(w2(a5 * l4) - w2(n5 * v3))), g3 = n5, n5 = w2(d2[C3 + 24 >> 2] - p3);
                    f:
                      if ((i5 = w2(E3 + w2(w2(o4 * w2(w2(g3 * n5) - w2(i5 * l4))) + w2(u3 * w2(w2(i5 * v3) - w2(a5 * n5)))))) != w2(0)) {
                        if (i5 > w2(0)) {
                          if (f4 = 0, C3 = (0 | s3) < 0, s3 = 1, !C3)
                            break f;
                          break r;
                        }
                        if (f4 = 0, C3 = (0 | s3) > 0, s3 = -1, C3)
                          break r;
                      }
                    if (!(c3 >>> 0 > (f4 = e4 + 16 | 0) >>> 0))
                      break;
                  }
                  switch (f4 = 0, 0 | s3) {
                    case 2:
                      break r;
                    case 0:
                      break e;
                  }
                  f4 = 1;
                  f: {
                    i:
                      switch (b3[r7 + 56 >> 2] - 100132 | 0) {
                        case 0:
                          if ((0 | s3) >= 0)
                            break f;
                          break e;
                        case 2:
                          break r;
                        case 1:
                          break i;
                        default:
                          break f;
                      }
                    if ((0 | s3) > 0)
                      break e;
                  }
                  (0 | (e4 = b3[r7 + 1716 >> 2])) == 3 ? be[b3[r7 + 88 >> 2]](k3[r7 + 81 | 0] ? 2 : (0 | A3) < 4 ? 4 : 6) : be[0 | e4](k3[r7 + 81 | 0] ? 2 : (0 | A3) < 4 ? 4 : 6, b3[r7 + 1896 >> 2]), (0 | (e4 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[r7 + 128 >> 2]) : be[0 | e4](b3[r7 + 128 >> 2], b3[r7 + 1896 >> 2]);
                  f:
                    if ((0 | s3) <= 0) {
                      if (R3 >>> 0 >= (e4 = c3 - 16 | 0) >>> 0)
                        break f;
                      for (; (0 | (f4 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[c3 - 4 >> 2]) : be[0 | f4](b3[c3 - 4 >> 2], b3[r7 + 1896 >> 2]), c3 = e4, R3 >>> 0 < (e4 = e4 - 16 | 0) >>> 0; )
                        ;
                    } else if (!((0 | A3) < 2))
                      for (; (0 | (e4 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[h3 + 12 >> 2]) : be[0 | e4](b3[h3 + 12 >> 2], b3[r7 + 1896 >> 2]), (h3 = h3 + 16 | 0) >>> 0 < c3 >>> 0; )
                        ;
                  (0 | (e4 = b3[r7 + 1728 >> 2])) == 6 ? be[b3[r7 + 100 >> 2]]() : be[0 | e4](b3[r7 + 1896 >> 2]);
                }
              f4 = 1;
            }
            return 0 | f4;
          }
          function Z2(r7, e4) {
            var f4 = 0, i5 = 0, a5 = 0, n5 = 0, t3 = 0, o4 = 0, k4 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = 0;
            if (!r7)
              return O2(e4);
            if (e4 >>> 0 >= 4294967232)
              return b3[613] = 48, 0;
            t3 = e4 >>> 0 < 11 ? 16 : e4 + 11 & -8, a5 = -8 & (u3 = b3[4 + (n5 = r7 - 8 | 0) >> 2]);
            r:
              if (3 & u3) {
                o4 = a5 + n5 | 0;
                e:
                  if (a5 >>> 0 >= t3 >>> 0) {
                    if ((i5 = a5 - t3 | 0) >>> 0 < 16)
                      break e;
                    b3[n5 + 4 >> 2] = 1 & u3 | t3 | 2, b3[4 + (f4 = n5 + t3 | 0) >> 2] = 3 | i5, b3[o4 + 4 >> 2] = 1 | b3[o4 + 4 >> 2], V2(f4, i5);
                  } else if (b3[620] != (0 | o4))
                    if (b3[619] != (0 | o4)) {
                      if (2 & (i5 = b3[o4 + 4 >> 2]))
                        break r;
                      if ((c3 = a5 + (-8 & i5) | 0) >>> 0 < t3 >>> 0)
                        break r;
                      A3 = c3 - t3 | 0;
                      f:
                        if (i5 >>> 0 <= 255) {
                          if (a5 = b3[o4 + 8 >> 2], f4 = i5 >>> 3 | 0, (0 | (i5 = b3[o4 + 12 >> 2])) == (0 | a5)) {
                            l4 = 2456, v3 = b3[614] & Jr(f4), b3[l4 >> 2] = v3;
                            break f;
                          }
                          b3[a5 + 12 >> 2] = i5, b3[i5 + 8 >> 2] = a5;
                        } else {
                          if (s3 = b3[o4 + 24 >> 2], (0 | (k4 = b3[o4 + 12 >> 2])) == (0 | o4))
                            if ((f4 = b3[(a5 = o4 + 20 | 0) >> 2]) || (f4 = b3[(a5 = o4 + 16 | 0) >> 2])) {
                              for (; i5 = a5, k4 = f4, (f4 = b3[(a5 = f4 + 20 | 0) >> 2]) || (a5 = k4 + 16 | 0, f4 = b3[k4 + 16 >> 2]); )
                                ;
                              b3[i5 >> 2] = 0;
                            } else
                              k4 = 0;
                          else
                            f4 = b3[o4 + 8 >> 2], b3[f4 + 12 >> 2] = k4, b3[k4 + 8 >> 2] = f4;
                          if (s3) {
                            i5 = b3[o4 + 28 >> 2];
                            i: {
                              if (b3[(f4 = 2760 + (i5 << 2) | 0) >> 2] == (0 | o4)) {
                                if (b3[f4 >> 2] = k4, k4)
                                  break i;
                                l4 = 2460, v3 = b3[615] & Jr(i5), b3[l4 >> 2] = v3;
                                break f;
                              }
                              if (b3[(b3[s3 + 16 >> 2] == (0 | o4) ? 16 : 20) + s3 >> 2] = k4, !k4)
                                break f;
                            }
                            b3[k4 + 24 >> 2] = s3, (f4 = b3[o4 + 16 >> 2]) && (b3[k4 + 16 >> 2] = f4, b3[f4 + 24 >> 2] = k4), (f4 = b3[o4 + 20 >> 2]) && (b3[k4 + 20 >> 2] = f4, b3[f4 + 24 >> 2] = k4);
                          }
                        }
                      A3 >>> 0 <= 15 ? (b3[n5 + 4 >> 2] = 1 & u3 | c3 | 2, b3[4 + (f4 = n5 + c3 | 0) >> 2] = 1 | b3[f4 + 4 >> 2]) : (b3[n5 + 4 >> 2] = 1 & u3 | t3 | 2, b3[4 + (i5 = n5 + t3 | 0) >> 2] = 3 | A3, b3[4 + (f4 = n5 + c3 | 0) >> 2] = 1 | b3[f4 + 4 >> 2], V2(i5, A3));
                    } else {
                      if ((i5 = a5 + b3[616] | 0) >>> 0 < t3 >>> 0)
                        break r;
                      (f4 = i5 - t3 | 0) >>> 0 >= 16 ? (b3[n5 + 4 >> 2] = 1 & u3 | t3 | 2, b3[4 + (a5 = n5 + t3 | 0) >> 2] = 1 | f4, b3[(i5 = i5 + n5 | 0) >> 2] = f4, b3[i5 + 4 >> 2] = -2 & b3[i5 + 4 >> 2]) : (b3[n5 + 4 >> 2] = i5 | 1 & u3 | 2, b3[4 + (f4 = i5 + n5 | 0) >> 2] = 1 | b3[f4 + 4 >> 2], f4 = 0, a5 = 0), b3[619] = a5, b3[616] = f4;
                    }
                  else {
                    if ((a5 = a5 + b3[617] | 0) >>> 0 <= t3 >>> 0)
                      break r;
                    b3[n5 + 4 >> 2] = 1 & u3 | t3 | 2, f4 = a5 - t3 | 0, b3[4 + (i5 = n5 + t3 | 0) >> 2] = 1 | f4, b3[617] = f4, b3[620] = i5;
                  }
                f4 = n5;
              } else {
                if (t3 >>> 0 < 256)
                  break r;
                if (a5 >>> 0 >= t3 + 4 >>> 0 && (f4 = n5, a5 - t3 >>> 0 <= b3[734] << 1 >>> 0))
                  break r;
                f4 = 0;
              }
            return f4 ? f4 + 8 | 0 : (n5 = O2(e4)) ? (fr2(n5, r7, e4 >>> 0 > (f4 = (3 & (f4 = b3[r7 - 4 >> 2]) ? -4 : -8) + (-8 & f4) | 0) >>> 0 ? f4 : e4), Y2(r7), n5) : 0;
          }
          function X2(r7, e4) {
            var f4 = 0, i5 = 0, a5 = 0, t3 = 0, o4 = 0, u3 = 0, c3 = w2(0), s3 = 0, A3 = w2(0);
            for (i5 = b3[b3[b3[e4 + 4 >> 2] + 8 >> 2] >> 2]; ; ) {
              r: {
                if (k3[i5 + 14 | 0])
                  for (; i5 = b3[b3[b3[(e4 = i5) + 4 >> 2] + 8 >> 2] >> 2], k3[i5 + 14 | 0]; )
                    ;
                e: {
                  f: {
                    i: {
                      a: {
                        if (k3[e4 + 14 | 0])
                          f4 = e4;
                        else {
                          if (!(f4 = b3[b3[b3[e4 + 4 >> 2] + 4 >> 2] >> 2]))
                            break a;
                          if (i5 = e4, !k3[f4 + 14 | 0])
                            break a;
                        }
                        n4[f4 + 14 | 0] = 0, a5 = b3[f4 >> 2], e4 = b3[b3[a5 + 4 >> 2] + 16 >> 2], o4 = b3[i5 >> 2];
                        n:
                          if ((0 | e4) != b3[b3[o4 + 4 >> 2] + 16 >> 2]) {
                            c3 = d2[e4 + 28 >> 2], s3 = b3[b3[b3[f4 + 4 >> 2] + 8 >> 2] >> 2], t3 = b3[s3 >> 2], u3 = b3[b3[t3 + 4 >> 2] + 16 >> 2], A3 = d2[u3 + 28 >> 2];
                            t: {
                              if (!(!(d2[e4 + 32 >> 2] <= d2[u3 + 32 >> 2]) | c3 != A3) || c3 < A3) {
                                if (pr2(e4, u3, b3[a5 + 16 >> 2]) < w2(0)) {
                                  e4 = f4;
                                  break n;
                                }
                                if (n4[f4 + 14 | 0] = 1, n4[b3[b3[b3[f4 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !(e4 = ir2(a5)))
                                  break e;
                                if (tr2(b3[t3 + 4 >> 2], e4))
                                  break t;
                                break r;
                              }
                              if (pr2(u3, e4, b3[t3 + 16 >> 2]) > w2(0)) {
                                e4 = f4;
                                break n;
                              }
                              if (n4[s3 + 14 | 0] = 1, n4[f4 + 14 | 0] = 1, !(e4 = ir2(t3)))
                                break r;
                              if (!tr2(b3[a5 + 12 >> 2], b3[t3 + 4 >> 2]))
                                break r;
                              e4 = b3[e4 + 4 >> 2];
                            }
                            if (n4[b3[e4 + 20 >> 2] + 21 | 0] = k3[f4 + 12 | 0], k3[i5 + 15 | 0]) {
                              if (b3[b3[i5 >> 2] + 24 >> 2] = 0, Vr(b3[i5 + 4 >> 2]), Y2(i5), !rr2(o4))
                                break r;
                              i5 = b3[b3[b3[f4 + 4 >> 2] + 8 >> 2] >> 2], o4 = b3[i5 >> 2], e4 = f4;
                            } else if (k3[f4 + 15 | 0]) {
                              if (b3[b3[f4 >> 2] + 24 >> 2] = 0, Vr(b3[f4 + 4 >> 2]), Y2(f4), !rr2(a5))
                                break r;
                              e4 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2], a5 = b3[e4 >> 2];
                            } else
                              e4 = f4;
                          } else
                            e4 = f4;
                        if (b3[a5 + 16 >> 2] == b3[o4 + 16 >> 2])
                          break f;
                        if (f4 = b3[b3[a5 + 4 >> 2] + 16 >> 2], t3 = b3[b3[o4 + 4 >> 2] + 16 >> 2], k3[i5 + 15 | 0] | k3[e4 + 15 | 0] | (0 | f4) == (0 | t3))
                          break i;
                        if (u3 = f4, (0 | (f4 = b3[r7 + 72 >> 2])) != (0 | t3) && (0 | u3) != (0 | f4))
                          break i;
                        if (!H2(r7, e4))
                          break f;
                      }
                      return;
                    }
                    G2(r7, e4);
                  }
                  if (b3[a5 + 16 >> 2] != b3[o4 + 16 >> 2])
                    continue;
                  if (t3 = b3[a5 + 4 >> 2], f4 = b3[o4 + 4 >> 2], b3[t3 + 16 >> 2] != b3[f4 + 16 >> 2])
                    continue;
                  if (b3[o4 + 28 >> 2] = b3[o4 + 28 >> 2] + b3[a5 + 28 >> 2], b3[f4 + 28 >> 2] = b3[f4 + 28 >> 2] + b3[t3 + 28 >> 2], b3[b3[e4 >> 2] + 24 >> 2] = 0, Vr(b3[e4 + 4 >> 2]), Y2(e4), !rr2(a5))
                    break r;
                  e4 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2];
                  continue;
                }
              }
              break;
            }
            Zr(r7 + 1740 | 0, 1), E2();
          }
          function $2(r7) {
            r7 |= 0;
            var e4 = 0, f4 = 0, i5 = 0, a5 = w2(0), n5 = w2(0), t3 = 0, o4 = 0, u3 = 0, c3 = 0;
            if ((0 | (e4 = b3[r7 + 40 >> 2])) != (0 | (u3 = r7 + 40 | 0)))
              for (; ; ) {
                if (r7 = b3[e4 >> 2], k3[e4 + 21 | 0]) {
                  for (e4 = e4 + 8 | 0; e4 = b3[e4 >> 2], f4 = b3[b3[e4 + 4 >> 2] + 16 >> 2], a5 = d2[f4 + 28 >> 2], i5 = b3[e4 + 16 >> 2], n5 = d2[i5 + 28 >> 2], !(!(d2[f4 + 32 >> 2] <= d2[i5 + 32 >> 2]) | a5 != n5) || a5 < n5; )
                    e4 = b3[e4 + 8 >> 2] + 4 | 0;
                  for (; !(!(d2[i5 + 32 >> 2] <= d2[f4 + 32 >> 2]) | a5 != n5) || a5 > n5; )
                    e4 = b3[e4 + 12 >> 2], i5 = b3[e4 + 16 >> 2], n5 = d2[i5 + 28 >> 2], f4 = b3[b3[e4 + 4 >> 2] + 16 >> 2], a5 = d2[f4 + 28 >> 2];
                  r: {
                    e:
                      if ((0 | (i5 = b3[b3[e4 + 8 >> 2] + 4 >> 2])) != b3[e4 + 12 >> 2])
                        for (; ; ) {
                          if (t3 = b3[i5 + 16 >> 2], n5 = d2[t3 + 28 >> 2], !(d2[f4 + 32 >> 2] <= d2[t3 + 32 >> 2]) | a5 != n5 && !(n5 > a5)) {
                            f:
                              if (b3[i5 + 12 >> 2] != (0 | e4))
                                for (; ; ) {
                                  if (f4 = b3[b3[e4 + 8 >> 2] + 4 >> 2], t3 = b3[f4 + 16 >> 2], a5 = d2[t3 + 28 >> 2], o4 = b3[b3[f4 + 4 >> 2] + 16 >> 2], !(a5 < (n5 = d2[o4 + 28 >> 2]) | (d2[t3 + 32 >> 2] <= d2[o4 + 32 >> 2] ? a5 == n5 : 0))) {
                                    if (!(pr2(b3[b3[e4 + 4 >> 2] + 16 >> 2], b3[e4 + 16 >> 2], t3) >= w2(0)))
                                      break f;
                                    f4 = b3[b3[e4 + 8 >> 2] + 4 >> 2];
                                  }
                                  if (e4 = er2(e4, f4), f4 = 0, !e4)
                                    break r;
                                  if ((0 | (e4 = b3[e4 + 4 >> 2])) == b3[i5 + 12 >> 2])
                                    break;
                                }
                            e4 = b3[e4 + 12 >> 2];
                          } else {
                            f:
                              if ((0 | (f4 = b3[i5 + 12 >> 2])) != (0 | e4))
                                for (t3 = i5 + 12 | 0; ; ) {
                                  if (o4 = b3[b3[f4 + 4 >> 2] + 16 >> 2], a5 = d2[o4 + 28 >> 2], c3 = b3[f4 + 16 >> 2], !(a5 < (n5 = d2[c3 + 28 >> 2]) | (d2[o4 + 32 >> 2] <= d2[c3 + 32 >> 2] ? a5 == n5 : 0))) {
                                    if (!(pr2(b3[i5 + 16 >> 2], b3[b3[i5 + 4 >> 2] + 16 >> 2], o4) <= w2(0)))
                                      break f;
                                    f4 = b3[t3 >> 2];
                                  }
                                  if (i5 = er2(f4, i5), f4 = 0, !i5)
                                    break r;
                                  if (t3 = (i5 = b3[i5 + 4 >> 2]) + 12 | 0, (0 | (f4 = b3[i5 + 12 >> 2])) == (0 | e4))
                                    break;
                                }
                            i5 = b3[b3[i5 + 8 >> 2] + 4 >> 2];
                          }
                          if (b3[e4 + 12 >> 2] == (0 | i5))
                            break e;
                          f4 = b3[b3[e4 + 4 >> 2] + 16 >> 2], a5 = d2[f4 + 28 >> 2];
                        }
                    if (f4 = b3[i5 + 12 >> 2], b3[f4 + 12 >> 2] != (0 | e4))
                      for (; ; ) {
                        if (i5 = er2(f4, i5), f4 = 0, !i5)
                          break r;
                        if (i5 = b3[i5 + 4 >> 2], f4 = b3[i5 + 12 >> 2], b3[f4 + 12 >> 2] == (0 | e4))
                          break;
                      }
                    f4 = 1;
                  }
                  if (!f4)
                    return 0;
                }
                if ((0 | u3) == (0 | (e4 = r7)))
                  break;
              }
            return 1;
          }
          function rr2(r7) {
            var e4 = 0, f4 = 0, i5 = 0, a5 = 0, t3 = 0, o4 = 0;
            if (a5 = b3[r7 + 4 >> 2], (0 | (o4 = b3[a5 + 20 >> 2])) != (0 | (f4 = b3[r7 + 20 >> 2]))) {
              for (e4 = i5 = b3[f4 + 8 >> 2]; b3[e4 + 20 >> 2] = o4, (0 | i5) != (0 | (e4 = b3[e4 + 12 >> 2])); )
                ;
              e4 = b3[f4 >> 2], i5 = b3[f4 + 4 >> 2], b3[e4 + 4 >> 2] = i5, b3[i5 >> 2] = e4, Y2(f4);
            }
            if ((0 | (i5 = b3[r7 + 8 >> 2])) != (0 | r7)) {
              if (t3 = b3[r7 + 4 >> 2], e4 = b3[t3 + 12 >> 2], b3[b3[t3 + 20 >> 2] + 8 >> 2] = e4, b3[b3[r7 + 16 >> 2] + 8 >> 2] = i5, t3 = b3[e4 + 8 >> 2], b3[b3[i5 + 4 >> 2] + 12 >> 2] = e4, b3[b3[t3 + 4 >> 2] + 12 >> 2] = r7, b3[r7 + 8 >> 2] = t3, b3[e4 + 8 >> 2] = i5, (0 | f4) == (0 | o4)) {
                if (!(f4 = O2(24)))
                  return 0;
                for (e4 = b3[r7 + 20 >> 2], i5 = b3[e4 + 4 >> 2], b3[f4 + 4 >> 2] = i5, b3[i5 >> 2] = f4, b3[f4 >> 2] = e4, b3[e4 + 4 >> 2] = f4, b3[f4 + 12 >> 2] = 0, b3[f4 + 16 >> 2] = 0, b3[f4 + 8 >> 2] = r7, n4[f4 + 20 | 0] = 0, n4[f4 + 21 | 0] = k3[e4 + 21 | 0], e4 = r7; b3[e4 + 20 >> 2] = f4, (0 | (e4 = b3[e4 + 12 >> 2])) != (0 | r7); )
                  ;
              }
            } else {
              for (f4 = b3[r7 + 16 >> 2], e4 = i5 = b3[f4 + 8 >> 2]; b3[e4 + 16 >> 2] = 0, (0 | i5) != (0 | (e4 = b3[e4 + 8 >> 2])); )
                ;
              e4 = b3[f4 >> 2], i5 = b3[f4 + 4 >> 2], b3[e4 + 4 >> 2] = i5, b3[i5 >> 2] = e4, Y2(f4);
            }
            if ((0 | (e4 = b3[a5 + 8 >> 2])) != (0 | a5))
              f4 = b3[b3[a5 + 4 >> 2] + 12 >> 2], b3[b3[r7 + 20 >> 2] + 8 >> 2] = f4, b3[b3[a5 + 16 >> 2] + 8 >> 2] = e4, i5 = b3[f4 + 8 >> 2], b3[b3[e4 + 4 >> 2] + 12 >> 2] = f4, b3[b3[i5 + 4 >> 2] + 12 >> 2] = a5, b3[a5 + 8 >> 2] = i5, b3[f4 + 8 >> 2] = e4;
            else {
              for (f4 = b3[a5 + 16 >> 2], e4 = i5 = b3[f4 + 8 >> 2]; b3[e4 + 16 >> 2] = 0, (0 | i5) != (0 | (e4 = b3[e4 + 8 >> 2])); )
                ;
              for (e4 = b3[f4 >> 2], i5 = b3[f4 + 4 >> 2], b3[e4 + 4 >> 2] = i5, b3[i5 >> 2] = e4, Y2(f4), f4 = b3[a5 + 20 >> 2], e4 = a5 = b3[f4 + 8 >> 2]; b3[e4 + 20 >> 2] = 0, (0 | a5) != (0 | (e4 = b3[e4 + 12 >> 2])); )
                ;
              e4 = b3[f4 >> 2], a5 = b3[f4 + 4 >> 2], b3[e4 + 4 >> 2] = a5, b3[a5 >> 2] = e4, Y2(f4);
            }
            return e4 = b3[r7 + 4 >> 2], e4 = b3[(r7 = r7 >>> 0 > e4 >>> 0 ? e4 : r7) >> 2], f4 = b3[b3[r7 + 4 >> 2] >> 2], b3[b3[e4 + 4 >> 2] >> 2] = f4, b3[b3[f4 + 4 >> 2] >> 2] = e4, Y2(r7), 1;
          }
          function er2(r7, e4) {
            var f4 = 0, i5 = 0, a5 = 0, t3 = 0, o4 = 0, u3 = 0, c3 = 0, s3 = 0;
            if (i5 = 0, f4 = O2(64)) {
              if (u3 = b3[r7 + 4 >> 2], t3 = b3[(i5 = r7 >>> 0 > u3 >>> 0 ? u3 : r7) + 4 >> 2], a5 = b3[t3 >> 2], b3[f4 + 32 >> 2] = a5, b3[b3[a5 + 4 >> 2] >> 2] = f4, b3[f4 >> 2] = i5, o4 = f4 + 32 | 0, b3[t3 >> 2] = o4, b3[f4 + 16 >> 2] = 0, b3[f4 + 20 >> 2] = 0, b3[f4 + 12 >> 2] = o4, b3[f4 + 4 >> 2] = o4, b3[f4 + 24 >> 2] = 0, b3[f4 + 28 >> 2] = 0, b3[f4 + 48 >> 2] = 0, b3[f4 + 52 >> 2] = 0, b3[f4 + 44 >> 2] = f4, b3[f4 + 40 >> 2] = o4, b3[f4 + 36 >> 2] = f4, b3[f4 + 56 >> 2] = 0, b3[f4 + 60 >> 2] = 0, b3[f4 + 8 >> 2] = f4, (0 | (c3 = b3[r7 + 20 >> 2])) != (0 | (t3 = b3[e4 + 20 >> 2]))) {
                for (i5 = a5 = b3[t3 + 8 >> 2]; b3[i5 + 20 >> 2] = c3, (0 | a5) != (0 | (i5 = b3[i5 + 12 >> 2])); )
                  ;
                i5 = b3[t3 >> 2], a5 = b3[t3 + 4 >> 2], b3[i5 + 4 >> 2] = a5, b3[a5 >> 2] = i5, Y2(t3), u3 = b3[r7 + 4 >> 2], a5 = b3[f4 + 8 >> 2], i5 = b3[r7 + 20 >> 2];
              } else
                a5 = f4, i5 = t3;
              if (r7 = b3[r7 + 12 >> 2], s3 = b3[r7 + 8 >> 2], b3[b3[a5 + 4 >> 2] + 12 >> 2] = r7, b3[b3[s3 + 4 >> 2] + 12 >> 2] = f4, b3[f4 + 8 >> 2] = s3, b3[r7 + 8 >> 2] = a5, r7 = b3[e4 + 8 >> 2], a5 = b3[f4 + 40 >> 2], b3[b3[a5 + 4 >> 2] + 12 >> 2] = e4, b3[b3[r7 + 4 >> 2] + 12 >> 2] = o4, b3[f4 + 40 >> 2] = r7, b3[e4 + 8 >> 2] = a5, b3[f4 + 16 >> 2] = b3[u3 + 16 >> 2], e4 = b3[e4 + 16 >> 2], r7 = i5, b3[f4 + 52 >> 2] = r7, b3[f4 + 48 >> 2] = e4, b3[f4 + 20 >> 2] = r7, b3[r7 + 8 >> 2] = o4, i5 = f4, (0 | t3) == (0 | c3) && (i5 = 0, e4 = O2(24))) {
                for (i5 = b3[r7 + 4 >> 2], b3[e4 + 4 >> 2] = i5, b3[i5 >> 2] = e4, b3[e4 >> 2] = r7, b3[r7 + 4 >> 2] = e4, b3[e4 + 12 >> 2] = 0, b3[e4 + 16 >> 2] = 0, b3[e4 + 8 >> 2] = f4, n4[e4 + 20 | 0] = 0, n4[e4 + 21 | 0] = k3[r7 + 21 | 0], i5 = f4; b3[i5 + 20 >> 2] = e4, (0 | (i5 = b3[i5 + 12 >> 2])) != (0 | f4); )
                  ;
                i5 = f4;
              }
            }
            return i5;
          }
          function fr2(r7, e4, f4) {
            var i5 = 0, a5 = 0;
            if (f4 >>> 0 >= 512)
              U2(0 | r7, 0 | e4, 0 | f4);
            else {
              i5 = r7 + f4 | 0;
              r:
                if (3 & (r7 ^ e4))
                  if (i5 >>> 0 < 4)
                    f4 = r7;
                  else if ((a5 = i5 - 4 | 0) >>> 0 < r7 >>> 0)
                    f4 = r7;
                  else
                    for (f4 = r7; n4[0 | f4] = k3[0 | e4], n4[f4 + 1 | 0] = k3[e4 + 1 | 0], n4[f4 + 2 | 0] = k3[e4 + 2 | 0], n4[f4 + 3 | 0] = k3[e4 + 3 | 0], e4 = e4 + 4 | 0, a5 >>> 0 >= (f4 = f4 + 4 | 0) >>> 0; )
                      ;
                else {
                  e:
                    if (3 & r7)
                      if ((0 | f4) < 1)
                        f4 = r7;
                      else
                        for (f4 = r7; ; ) {
                          if (n4[0 | f4] = k3[0 | e4], e4 = e4 + 1 | 0, !(3 & (f4 = f4 + 1 | 0)))
                            break e;
                          if (!(f4 >>> 0 < i5 >>> 0))
                            break;
                        }
                    else
                      f4 = r7;
                  if (!((r7 = -4 & i5) >>> 0 < 64 || (a5 = r7 + -64 | 0) >>> 0 < f4 >>> 0))
                    for (; b3[f4 >> 2] = b3[e4 >> 2], b3[f4 + 4 >> 2] = b3[e4 + 4 >> 2], b3[f4 + 8 >> 2] = b3[e4 + 8 >> 2], b3[f4 + 12 >> 2] = b3[e4 + 12 >> 2], b3[f4 + 16 >> 2] = b3[e4 + 16 >> 2], b3[f4 + 20 >> 2] = b3[e4 + 20 >> 2], b3[f4 + 24 >> 2] = b3[e4 + 24 >> 2], b3[f4 + 28 >> 2] = b3[e4 + 28 >> 2], b3[f4 + 32 >> 2] = b3[e4 + 32 >> 2], b3[f4 + 36 >> 2] = b3[e4 + 36 >> 2], b3[f4 + 40 >> 2] = b3[e4 + 40 >> 2], b3[f4 + 44 >> 2] = b3[e4 + 44 >> 2], b3[f4 + 48 >> 2] = b3[e4 + 48 >> 2], b3[f4 + 52 >> 2] = b3[e4 + 52 >> 2], b3[f4 + 56 >> 2] = b3[e4 + 56 >> 2], b3[f4 + 60 >> 2] = b3[e4 + 60 >> 2], e4 = e4 - -64 | 0, a5 >>> 0 >= (f4 = f4 - -64 | 0) >>> 0; )
                      ;
                  if (r7 >>> 0 <= f4 >>> 0)
                    break r;
                  for (; b3[f4 >> 2] = b3[e4 >> 2], e4 = e4 + 4 | 0, r7 >>> 0 > (f4 = f4 + 4 | 0) >>> 0; )
                    ;
                }
              if (f4 >>> 0 < i5 >>> 0)
                for (; n4[0 | f4] = k3[0 | e4], e4 = e4 + 1 | 0, (0 | i5) != (0 | (f4 = f4 + 1 | 0)); )
                  ;
            }
          }
          function ir2(r7) {
            var e4 = 0, f4 = 0, i5 = 0, a5 = 0, n5 = 0, t3 = 0;
            if (n5 = r7 |= 0, r7 = 0, (e4 = O2(64)) && (i5 = b3[n5 + 4 >> 2], a5 = b3[(f4 = i5 >>> 0 < n5 >>> 0 ? i5 : n5) + 4 >> 2], t3 = b3[a5 >> 2], b3[e4 + 32 >> 2] = t3, b3[b3[t3 + 4 >> 2] >> 2] = e4, b3[e4 >> 2] = f4, f4 = e4 + 32 | 0, b3[a5 >> 2] = f4, b3[e4 + 16 >> 2] = 0, b3[e4 + 20 >> 2] = 0, b3[e4 + 12 >> 2] = f4, b3[e4 + 4 >> 2] = f4, b3[e4 + 24 >> 2] = 0, b3[e4 + 28 >> 2] = 0, b3[e4 + 48 >> 2] = 0, b3[e4 + 52 >> 2] = 0, b3[e4 + 40 >> 2] = f4, b3[e4 + 36 >> 2] = e4, b3[e4 + 56 >> 2] = 0, b3[e4 + 60 >> 2] = 0, b3[e4 + 8 >> 2] = e4, a5 = b3[n5 + 12 >> 2], t3 = b3[a5 + 8 >> 2], b3[e4 + 44 >> 2] = a5, b3[b3[t3 + 4 >> 2] + 12 >> 2] = e4, b3[e4 + 8 >> 2] = t3, b3[a5 + 8 >> 2] = e4, a5 = b3[i5 + 16 >> 2], b3[e4 + 16 >> 2] = a5, i5 = O2(40))) {
              for (r7 = b3[a5 + 4 >> 2], b3[i5 + 4 >> 2] = r7, b3[r7 >> 2] = i5, b3[i5 >> 2] = a5, b3[a5 + 4 >> 2] = i5, b3[i5 + 12 >> 2] = 0, b3[i5 + 8 >> 2] = f4, r7 = f4; b3[r7 + 16 >> 2] = i5, (0 | f4) != (0 | (r7 = b3[r7 + 8 >> 2])); )
                ;
              r7 = b3[n5 + 20 >> 2], b3[e4 + 20 >> 2] = r7, b3[e4 + 52 >> 2] = r7, r7 = e4;
            }
            return r7 ? (e4 = b3[r7 + 4 >> 2], r7 = b3[n5 + 4 >> 2], f4 = b3[b3[r7 + 4 >> 2] + 12 >> 2], i5 = b3[f4 + 8 >> 2], a5 = b3[r7 + 8 >> 2], b3[b3[a5 + 4 >> 2] + 12 >> 2] = f4, b3[b3[i5 + 4 >> 2] + 12 >> 2] = r7, b3[r7 + 8 >> 2] = i5, b3[f4 + 8 >> 2] = a5, f4 = b3[e4 + 8 >> 2], i5 = b3[r7 + 8 >> 2], b3[b3[i5 + 4 >> 2] + 12 >> 2] = e4, b3[b3[f4 + 4 >> 2] + 12 >> 2] = r7, b3[r7 + 8 >> 2] = f4, b3[e4 + 8 >> 2] = i5, b3[r7 + 16 >> 2] = b3[e4 + 16 >> 2], f4 = b3[e4 + 4 >> 2], b3[b3[f4 + 16 >> 2] + 8 >> 2] = f4, b3[f4 + 20 >> 2] = b3[r7 + 20 >> 2], b3[e4 + 28 >> 2] = b3[n5 + 28 >> 2], b3[f4 + 28 >> 2] = b3[r7 + 28 >> 2], 0 | e4) : 0;
          }
          function ar2(r7, e4, f4, i5, a5, t3) {
            var o4 = 0, k4 = 0, u3 = 0, c3 = 0, s3 = 0;
            c3 = e4 + 4 | 0, u3 = r7 - -64 | 0;
            r: {
              for (; ; ) {
                if (k4 = b3[f4 + 4 >> 2], !(o4 = O2(16)))
                  break r;
                if (b3[o4 >> 2] = k4, s3 = Fr2(b3[u3 >> 2], b3[e4 + 4 >> 2], o4), b3[o4 + 4 >> 2] = s3, !s3)
                  break r;
                if (n4[o4 + 13 | 0] = 0, n4[o4 + 14 | 0] = 0, n4[o4 + 15 | 0] = 0, b3[k4 + 24 >> 2] = o4, (0 | i5) == (0 | (f4 = b3[f4 + 8 >> 2])))
                  break;
              }
              if (o4 = b3[b3[b3[e4 + 4 >> 2] + 8 >> 2] >> 2], f4 = b3[b3[o4 >> 2] + 4 >> 2], a5 = a5 || b3[f4 + 8 >> 2], b3[f4 + 16 >> 2] == b3[a5 + 16 >> 2])
                for (u3 = 0; ; ) {
                  if (i5 = e4, e4 = o4, (0 | (o4 = a5)) != b3[(a5 = f4) + 8 >> 2]) {
                    if (!tr2(b3[b3[a5 + 4 >> 2] + 12 >> 2], a5))
                      break r;
                    if (!tr2(b3[b3[o4 + 4 >> 2] + 12 >> 2], a5))
                      break r;
                  }
                  k4 = b3[i5 + 8 >> 2] - b3[a5 + 28 >> 2] | 0, b3[e4 + 8 >> 2] = k4;
                  e: {
                    f:
                      switch (b3[r7 + 56 >> 2] - 100130 | 0) {
                        case 0:
                          f4 = 1 & k4;
                          break e;
                        case 1:
                          f4 = (0 | k4) != 0;
                          break e;
                        case 2:
                          f4 = (0 | k4) > 0;
                          break e;
                        case 3:
                          f4 = k4 >>> 31 | 0;
                          break e;
                        case 4:
                          break f;
                        default:
                          break e;
                      }
                    f4 = k4 + 1 >>> 0 > 2;
                  }
                  if (n4[e4 + 12 | 0] = f4, n4[i5 + 14 | 0] = 1, u3 && G2(r7, i5) && (b3[a5 + 28 >> 2] = b3[a5 + 28 >> 2] + b3[o4 + 28 >> 2], f4 = b3[a5 + 4 >> 2], b3[f4 + 28 >> 2] = b3[f4 + 28 >> 2] + b3[b3[o4 + 4 >> 2] + 28 >> 2], b3[b3[i5 >> 2] + 24 >> 2] = 0, Vr(b3[c3 >> 2]), Y2(i5), !rr2(o4)))
                    break r;
                  if (c3 = e4 + 4 | 0, u3 = 1, o4 = b3[b3[b3[e4 + 4 >> 2] + 8 >> 2] >> 2], f4 = b3[b3[o4 >> 2] + 4 >> 2], b3[f4 + 16 >> 2] != b3[a5 + 16 >> 2])
                    break;
                }
              return n4[e4 + 14 | 0] = 1, void (t3 && X2(r7, e4));
            }
            Zr(r7 + 1740 | 0, 1), E2();
          }
          function nr2(r7) {
            var e4 = 0, f4 = 0, i5 = 0, a5 = 0, n5 = 0, t3 = 0, o4 = 0, u3 = 0, c3 = 0;
            if ((0 | (a5 = b3[40 + (r7 |= 0) >> 2])) != (0 | (o4 = r7 + 40 | 0)))
              for (; ; ) {
                if (c3 = b3[a5 >> 2], !k3[a5 + 21 | 0]) {
                  for (u3 = b3[a5 + 8 >> 2], r7 = b3[u3 + 12 >> 2]; ; ) {
                    if (b3[r7 + 20 >> 2] = 0, t3 = b3[r7 + 12 >> 2], e4 = b3[r7 + 4 >> 2], !b3[e4 + 20 >> 2]) {
                      if (i5 = b3[r7 + 16 >> 2], (0 | (f4 = b3[r7 + 8 >> 2])) != (0 | r7))
                        b3[i5 + 8 >> 2] = f4, i5 = b3[e4 + 12 >> 2], n5 = b3[i5 + 8 >> 2], b3[b3[f4 + 4 >> 2] + 12 >> 2] = i5, b3[b3[n5 + 4 >> 2] + 12 >> 2] = r7, b3[r7 + 8 >> 2] = n5, b3[i5 + 8 >> 2] = f4;
                      else {
                        for (e4 = f4 = b3[i5 + 8 >> 2]; b3[e4 + 16 >> 2] = 0, (0 | f4) != (0 | (e4 = b3[e4 + 8 >> 2])); )
                          ;
                        e4 = b3[i5 >> 2], f4 = b3[i5 + 4 >> 2], b3[e4 + 4 >> 2] = f4, b3[f4 >> 2] = e4, Y2(i5), e4 = b3[r7 + 4 >> 2];
                      }
                      if (i5 = b3[e4 + 16 >> 2], (0 | (f4 = b3[e4 + 8 >> 2])) != (0 | e4))
                        b3[i5 + 8 >> 2] = f4, i5 = b3[b3[e4 + 4 >> 2] + 12 >> 2], n5 = b3[i5 + 8 >> 2], b3[b3[f4 + 4 >> 2] + 12 >> 2] = i5, b3[b3[n5 + 4 >> 2] + 12 >> 2] = e4, b3[e4 + 8 >> 2] = n5, b3[i5 + 8 >> 2] = f4;
                      else {
                        for (e4 = f4 = b3[i5 + 8 >> 2]; b3[e4 + 16 >> 2] = 0, (0 | f4) != (0 | (e4 = b3[e4 + 8 >> 2])); )
                          ;
                        e4 = b3[i5 >> 2], f4 = b3[i5 + 4 >> 2], b3[e4 + 4 >> 2] = f4, b3[f4 >> 2] = e4, Y2(i5), e4 = b3[r7 + 4 >> 2];
                      }
                      i5 = b3[(e4 = r7 >>> 0 > e4 >>> 0 ? e4 : r7) >> 2], f4 = b3[b3[e4 + 4 >> 2] >> 2], b3[b3[i5 + 4 >> 2] >> 2] = f4, b3[b3[f4 + 4 >> 2] >> 2] = i5, Y2(e4);
                    }
                    if (e4 = (0 | r7) != (0 | u3), r7 = t3, !e4)
                      break;
                  }
                  r7 = b3[a5 >> 2], t3 = b3[a5 + 4 >> 2], b3[r7 + 4 >> 2] = t3, b3[t3 >> 2] = r7, Y2(a5);
                }
                if ((0 | o4) == (0 | (a5 = c3)))
                  break;
              }
          }
          function tr2(r7, e4) {
            var f4 = 0, i5 = 0, a5 = 0, t3 = 0, o4 = 0, u3 = 0;
            if ((0 | (r7 |= 0)) != (0 | (e4 |= 0))) {
              if ((0 | (i5 = b3[e4 + 16 >> 2])) != (0 | (o4 = b3[r7 + 16 >> 2]))) {
                for (f4 = a5 = b3[i5 + 8 >> 2]; b3[f4 + 16 >> 2] = o4, (0 | a5) != (0 | (f4 = b3[f4 + 8 >> 2])); )
                  ;
                f4 = b3[i5 >> 2], a5 = b3[i5 + 4 >> 2], b3[f4 + 4 >> 2] = a5, b3[a5 >> 2] = f4, Y2(i5);
              }
              if ((0 | (u3 = b3[r7 + 20 >> 2])) != (0 | (a5 = b3[e4 + 20 >> 2]))) {
                for (f4 = t3 = b3[a5 + 8 >> 2]; b3[f4 + 20 >> 2] = u3, (0 | t3) != (0 | (f4 = b3[f4 + 12 >> 2])); )
                  ;
                f4 = b3[a5 >> 2], t3 = b3[a5 + 4 >> 2], b3[f4 + 4 >> 2] = t3, b3[t3 >> 2] = f4, Y2(a5);
              }
              if (f4 = b3[r7 + 8 >> 2], t3 = b3[e4 + 8 >> 2], b3[b3[t3 + 4 >> 2] + 12 >> 2] = r7, b3[b3[f4 + 4 >> 2] + 12 >> 2] = e4, b3[e4 + 8 >> 2] = f4, b3[r7 + 8 >> 2] = t3, (0 | i5) == (0 | o4)) {
                if (!(i5 = O2(40)))
                  return 0;
                for (f4 = b3[r7 + 16 >> 2], o4 = b3[f4 + 4 >> 2], b3[i5 + 4 >> 2] = o4, b3[o4 >> 2] = i5, b3[i5 >> 2] = f4, b3[f4 + 4 >> 2] = i5, b3[i5 + 12 >> 2] = 0, b3[i5 + 8 >> 2] = e4, f4 = e4; b3[f4 + 16 >> 2] = i5, (0 | (f4 = b3[f4 + 8 >> 2])) != (0 | e4); )
                  ;
                b3[b3[r7 + 16 >> 2] + 8 >> 2] = r7;
              }
              if ((0 | a5) == (0 | u3)) {
                if (!(i5 = O2(24)))
                  return 0;
                for (f4 = b3[r7 + 20 >> 2], a5 = b3[f4 + 4 >> 2], b3[i5 + 4 >> 2] = a5, b3[a5 >> 2] = i5, b3[i5 >> 2] = f4, b3[f4 + 4 >> 2] = i5, b3[i5 + 12 >> 2] = 0, b3[i5 + 16 >> 2] = 0, b3[i5 + 8 >> 2] = e4, n4[i5 + 20 | 0] = 0, n4[i5 + 21 | 0] = k3[f4 + 21 | 0], f4 = e4; b3[f4 + 20 >> 2] = i5, (0 | (f4 = b3[f4 + 12 >> 2])) != (0 | e4); )
                  ;
                b3[b3[r7 + 20 >> 2] + 8 >> 2] = r7;
              }
            }
            return 1;
          }
          function or2(r7, e4) {
            var f4 = 0, i5 = 0, a5 = 0, n5 = 0, t3 = 0, o4 = 0, k4 = w2(0), u3 = 0, c3 = 0, s3 = w2(0);
            if (b3[r7 + 20 >> 2]) {
              i5 = e4, f4 = b3[r7 >> 2], r7 = b3[f4 + 8 >> 2] + 1 | 0, b3[f4 + 8 >> 2] = r7;
              r: {
                if (!((0 | (e4 = b3[f4 + 12 >> 2])) >= r7 << 1)) {
                  if (b3[f4 + 12 >> 2] = e4 << 1, a5 = b3[f4 + 4 >> 2], e4 = Z2(n5 = b3[f4 >> 2], e4 << 3 | 4), b3[f4 >> 2] = e4, !e4) {
                    b3[f4 >> 2] = n5, a5 = 2147483647;
                    break r;
                  }
                  if (e4 = Z2(b3[f4 + 4 >> 2], 8 + (b3[f4 + 12 >> 2] << 3) | 0), b3[f4 + 4 >> 2] = e4, !e4) {
                    b3[f4 + 4 >> 2] = a5, a5 = 2147483647;
                    break r;
                  }
                }
                if (n5 = b3[f4 + 4 >> 2], a5 = r7, (e4 = b3[f4 + 16 >> 2]) && (b3[f4 + 16 >> 2] = b3[4 + (n5 + (e4 << 3) | 0) >> 2], a5 = e4), t3 = b3[f4 >> 2], b3[t3 + (r7 << 2) >> 2] = a5, b3[(o4 = n5 + (a5 << 3) | 0) >> 2] = i5, b3[o4 + 4 >> 2] = r7, b3[f4 + 20 >> 2]) {
                  e:
                    if (r7 >>> 0 < 2)
                      e4 = r7;
                    else
                      for (k4 = d2[i5 + 28 >> 2]; ; ) {
                        if (f4 = b3[((e4 = r7 >> 1) << 2) + t3 >> 2], c3 = b3[(u3 = n5 + (f4 << 3) | 0) >> 2], (s3 = d2[c3 + 28 >> 2]) < k4) {
                          e4 = r7;
                          break e;
                        }
                        if (!(!(d2[c3 + 32 >> 2] <= d2[i5 + 32 >> 2]) | k4 != s3)) {
                          e4 = r7;
                          break e;
                        }
                        if (b3[(r7 << 2) + t3 >> 2] = f4, b3[u3 + 4 >> 2] = r7, !((r7 = e4) >>> 0 > 1))
                          break;
                      }
                  b3[(e4 << 2) + t3 >> 2] = a5, b3[o4 + 4 >> 2] = e4;
                }
              }
              return a5;
            }
            if (i5 = (f4 = b3[r7 + 12 >> 2]) + 1 | 0, b3[r7 + 12 >> 2] = i5, a5 = b3[r7 + 4 >> 2], (0 | (n5 = i5)) < (0 | (i5 = b3[r7 + 16 >> 2])))
              i5 = a5;
            else if (b3[r7 + 16 >> 2] = i5 << 1, i5 = Z2(a5, i5 << 3), b3[r7 + 4 >> 2] = i5, !i5)
              return b3[r7 + 4 >> 2] = a5, 2147483647;
            return b3[(f4 << 2) + i5 >> 2] = e4, -1 ^ f4;
          }
          function br2(r7) {
            r7 |= 0;
            var e4 = 0, f4 = 0, i5 = 0, a5 = 0, t3 = 0, o4 = 0, u3 = 0;
            t3 = O2(40), o4 = O2(40);
            r: {
              if (!(i5 = O2(24)) || !t3 | !o4) {
                if (t3 && Y2(t3), o4 && Y2(o4), !i5)
                  break r;
                return Y2(i5), 0;
              }
              if (!(e4 = O2(64)))
                return 0;
              for (f4 = b3[r7 + 68 >> 2], a5 = b3[(f4 = f4 >>> 0 < (a5 = r7 - -64 | 0) >>> 0 ? f4 : a5) + 4 >> 2], u3 = b3[a5 >> 2], b3[e4 + 32 >> 2] = u3, b3[b3[u3 + 4 >> 2] >> 2] = e4, b3[e4 >> 2] = f4, f4 = a5, a5 = e4 + 32 | 0, b3[f4 >> 2] = a5, b3[e4 + 16 >> 2] = 0, b3[e4 + 20 >> 2] = 0, b3[e4 + 12 >> 2] = a5, b3[e4 + 4 >> 2] = a5, b3[e4 + 24 >> 2] = 0, b3[e4 + 28 >> 2] = 0, b3[e4 + 48 >> 2] = 0, b3[e4 + 52 >> 2] = 0, b3[e4 + 44 >> 2] = e4, b3[e4 + 40 >> 2] = a5, b3[e4 + 36 >> 2] = e4, b3[e4 + 56 >> 2] = 0, b3[e4 + 60 >> 2] = 0, b3[e4 + 8 >> 2] = e4, f4 = b3[r7 + 4 >> 2], b3[t3 + 4 >> 2] = f4, b3[f4 >> 2] = t3, b3[t3 + 12 >> 2] = 0, b3[t3 + 8 >> 2] = e4, f4 = e4; b3[f4 + 16 >> 2] = t3, (0 | (f4 = b3[f4 + 8 >> 2])) != (0 | e4); )
                ;
              for (b3[o4 + 4 >> 2] = t3, b3[t3 >> 2] = o4, b3[o4 >> 2] = r7, b3[r7 + 4 >> 2] = o4, b3[o4 + 12 >> 2] = 0, b3[o4 + 8 >> 2] = a5, f4 = a5; b3[f4 + 16 >> 2] = o4, (0 | a5) != (0 | (f4 = b3[f4 + 8 >> 2])); )
                ;
              for (f4 = b3[r7 + 44 >> 2], b3[i5 + 4 >> 2] = f4, b3[f4 >> 2] = i5, b3[i5 >> 2] = r7 + 40, b3[r7 + 44 >> 2] = i5, b3[i5 + 12 >> 2] = 0, b3[i5 + 16 >> 2] = 0, b3[i5 + 8 >> 2] = e4, n4[i5 + 20 | 0] = 0, n4[i5 + 21 | 0] = k3[r7 + 61 | 0], f4 = e4; b3[f4 + 20 >> 2] = i5, (0 | (f4 = b3[f4 + 12 >> 2])) != (0 | e4); )
                ;
            }
            return 0 | e4;
          }
          function kr2(r7, e4) {
            var f4 = 0, i5 = 0, a5 = 0, t3 = 0, o4 = 0, u3 = 0;
            b3[r7 + 8 >> 2] = b3[283], f4 = b3[282], b3[r7 >> 2] = b3[281], b3[r7 + 4 >> 2] = f4, f4 = b3[e4 + 20 >> 2];
            r:
              if (k3[f4 + 21 | 0]) {
                a5 = e4;
                e: {
                  f: {
                    for (; ; ) {
                      if (k3[f4 + 20 | 0])
                        break r;
                      if (n4[f4 + 20 | 0] = 1, b3[f4 + 16 >> 2] = i5, a5 = b3[b3[a5 + 12 >> 2] + 4 >> 2], i5 = b3[a5 + 20 >> 2], k3[i5 + 21 | 0]) {
                        if (k3[i5 + 20 | 0])
                          break f;
                        if (n4[i5 + 20 | 0] = 1, b3[i5 + 16 >> 2] = f4, t3 = t3 + 2 | 0, a5 = b3[a5 + 8 >> 2], f4 = b3[a5 + 20 >> 2], k3[f4 + 21 | 0])
                          continue;
                        break r;
                      }
                      break;
                    }
                    t3 |= 1;
                    break e;
                  }
                  t3 |= 1;
                }
                i5 = f4;
              } else
                a5 = e4;
            o4 = b3[e4 + 4 >> 2], f4 = b3[o4 + 20 >> 2];
            r:
              if (!(!k3[f4 + 21 | 0] | k3[f4 + 20 | 0])) {
                e: {
                  f: {
                    for (; ; ) {
                      if (n4[f4 + 20 | 0] = 1, b3[f4 + 16 >> 2] = i5, e4 = b3[o4 + 12 >> 2], o4 = b3[e4 + 4 >> 2], i5 = b3[o4 + 20 >> 2], k3[i5 + 21 | 0]) {
                        if (k3[i5 + 20 | 0])
                          break f;
                        if (n4[i5 + 20 | 0] = 1, b3[i5 + 16 >> 2] = f4, u3 = u3 + 2 | 0, e4 = b3[b3[o4 + 8 >> 2] + 4 >> 2], o4 = b3[e4 + 4 >> 2], f4 = b3[o4 + 20 >> 2], !k3[f4 + 21 | 0])
                          break r;
                        if (!k3[f4 + 20 | 0])
                          continue;
                        break r;
                      }
                      break;
                    }
                    u3 |= 1;
                    break e;
                  }
                  u3 |= 1;
                }
                i5 = f4;
              }
            f4 = t3 + u3 | 0, b3[r7 >> 2] = f4;
            r: {
              if (1 & t3) {
                if (!(1 & u3))
                  break r;
                b3[r7 >> 2] = f4 - 1, e4 = e4 + 8 | 0;
              } else
                e4 = a5 + 4 | 0;
              e4 = b3[e4 >> 2];
            }
            if (b3[r7 + 4 >> 2] = e4, i5)
              for (; n4[i5 + 20 | 0] = 0, i5 = b3[i5 + 16 >> 2]; )
                ;
          }
          function ur2(r7, e4, f4) {
            e4 |= 0, f4 |= 0, (0 | (f4 = b3[1716 + (r7 |= 0) >> 2])) == 3 ? be[b3[r7 + 88 >> 2]](5) : be[0 | f4](5, b3[r7 + 1896 >> 2]), (0 | (f4 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[b3[e4 + 16 >> 2] + 12 >> 2]) : be[0 | f4](b3[b3[e4 + 16 >> 2] + 12 >> 2], b3[r7 + 1896 >> 2]), (0 | (f4 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[b3[b3[e4 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : be[0 | f4](b3[b3[b3[e4 + 4 >> 2] + 16 >> 2] + 12 >> 2], b3[r7 + 1896 >> 2]), f4 = b3[e4 + 20 >> 2];
            r:
              if (k3[f4 + 21 | 0])
                for (; ; ) {
                  if (k3[f4 + 20 | 0])
                    break r;
                  if (n4[f4 + 20 | 0] = 1, e4 = b3[b3[e4 + 12 >> 2] + 4 >> 2], (0 | (f4 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[b3[e4 + 16 >> 2] + 12 >> 2]) : be[0 | f4](b3[b3[e4 + 16 >> 2] + 12 >> 2], b3[r7 + 1896 >> 2]), f4 = b3[e4 + 20 >> 2], !k3[f4 + 21 | 0] | k3[f4 + 20 | 0])
                    break r;
                  if (n4[f4 + 20 | 0] = 1, e4 = b3[e4 + 8 >> 2], (0 | (f4 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[b3[b3[e4 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : be[0 | f4](b3[b3[b3[e4 + 4 >> 2] + 16 >> 2] + 12 >> 2], b3[r7 + 1896 >> 2]), f4 = b3[e4 + 20 >> 2], !k3[f4 + 21 | 0])
                    break;
                }
            (0 | (e4 = b3[r7 + 1728 >> 2])) == 6 ? be[b3[r7 + 100 >> 2]]() : be[0 | e4](b3[r7 + 1896 >> 2]);
          }
          function cr2(r7, e4) {
            e4 |= 0;
            var f4 = 0;
            if ((0 | (f4 = b3[(r7 |= 0) >> 2])) != (0 | e4))
              for (; ; ) {
                r:
                  if (e4 >>> 0 > f4 >>> 0) {
                    e:
                      switch (0 | f4) {
                        case 0:
                          (0 | (f4 = b3[r7 + 1732 >> 2])) == 11 ? be[b3[r7 + 12 >> 2]](100151) : be[0 | f4](100151, b3[r7 + 1896 >> 2]), b3[r7 >> 2] && cr2(r7, 0), b3[r7 + 112 >> 2] = 0, f4 = 1, b3[r7 >> 2] = 1, n4[r7 + 108 | 0] = 0, b3[r7 + 1896 >> 2] = 0, b3[r7 + 8 >> 2] = 0;
                          break r;
                        case 1:
                          break e;
                        default:
                          break r;
                      }
                    if ((0 | (f4 = b3[r7 + 1732 >> 2])) == 11 ? be[b3[r7 + 12 >> 2]](100152) : be[0 | f4](100152, b3[r7 + 1896 >> 2]), b3[r7 >> 2] != 1 && cr2(r7, 1), b3[r7 >> 2] = 2, b3[r7 + 4 >> 2] = 0, f4 = 2, b3[r7 + 112 >> 2] < 1)
                      break r;
                    n4[r7 + 108 | 0] = 1;
                  } else {
                    e:
                      switch (f4 - 1 | 0) {
                        case 1:
                          (0 | (f4 = b3[r7 + 1732 >> 2])) == 11 ? be[b3[r7 + 12 >> 2]](100154) : be[0 | f4](100154, b3[r7 + 1896 >> 2]), b3[r7 >> 2] != 2 && cr2(r7, 2), f4 = 1, b3[r7 >> 2] = 1;
                          break r;
                        case 0:
                          break e;
                        default:
                          break r;
                      }
                    (0 | (f4 = b3[r7 + 1732 >> 2])) == 11 ? be[b3[r7 + 12 >> 2]](100153) : be[0 | f4](100153, b3[r7 + 1896 >> 2]), (f4 = b3[r7 + 8 >> 2]) && Pr2(f4), f4 = 0, b3[r7 + 8 >> 2] = 0, b3[r7 >> 2] = 0, b3[r7 + 4 >> 2] = 0;
                  }
                if ((0 | e4) == (0 | f4))
                  break;
              }
          }
          function sr2(r7, e4, f4) {
            var i5 = 0, a5 = 0, n5 = 0, t3 = 0, o4 = 0, b4 = 0, k4 = 0, u3 = 0, c3 = 0;
            r: {
              e: {
                f: {
                  i: {
                    a: {
                      n: {
                        t: {
                          o: {
                            b: {
                              k: {
                                if (a5 = e4, e4) {
                                  if (!(i5 = f4))
                                    break k;
                                  break b;
                                }
                                r7 = (r7 >>> 0) / (f4 >>> 0) | 0, F2 = 0;
                                break r;
                              }
                              if (!r7)
                                break o;
                              break t;
                            }
                            if (!(i5 - 1 & i5))
                              break n;
                            b4 = 0 - (o4 = (y2(i5) + 33 | 0) - y2(a5) | 0) | 0;
                            break i;
                          }
                          r7 = (a5 >>> 0) / 0 | 0, F2 = 0;
                          break r;
                        }
                        if ((i5 = 32 - y2(a5) | 0) >>> 0 < 31)
                          break a;
                        break f;
                      }
                      if ((0 | i5) == 1)
                        break e;
                      f4 = 31 & (i5 = i5 ? 31 - y2(i5 - 1 ^ i5) | 0 : 32), (63 & i5) >>> 0 >= 32 ? (a5 = 0, r7 = e4 >>> f4 | 0) : (a5 = e4 >>> f4 | 0, r7 = ((1 << f4) - 1 & e4) << 32 - f4 | r7 >>> f4), F2 = a5;
                      break r;
                    }
                    o4 = i5 + 1 | 0, b4 = 63 - i5 | 0;
                  }
                  if (i5 = e4, n5 = 31 & (a5 = 63 & o4), a5 >>> 0 >= 32 ? (a5 = 0, n5 = i5 >>> n5 | 0) : (a5 = i5 >>> n5 | 0, n5 = ((1 << n5) - 1 & i5) << 32 - n5 | r7 >>> n5), i5 = 31 & (b4 &= 63), b4 >>> 0 >= 32 ? (e4 = r7 << i5, r7 = 0) : (e4 = (1 << i5) - 1 & r7 >>> 32 - i5 | e4 << i5, r7 <<= i5), o4)
                    for (b4 = (0 | (i5 = f4 - 1 | 0)) != -1 ? 0 : -1; n5 = (k4 = t3 = n5 << 1 | e4 >>> 31) - (u3 = f4 & (t3 = b4 - ((a5 = a5 << 1 | n5 >>> 31) + (i5 >>> 0 < t3 >>> 0) | 0) >> 31)) | 0, a5 = a5 - (k4 >>> 0 < u3 >>> 0) | 0, e4 = e4 << 1 | r7 >>> 31, r7 = c3 | r7 << 1, c3 = t3 &= 1, o4 = o4 - 1 | 0; )
                      ;
                  F2 = e4 << 1 | r7 >>> 31, r7 = t3 | r7 << 1;
                  break r;
                }
                r7 = 0, e4 = 0;
              }
              F2 = e4;
            }
            return r7;
          }
          function Ar2(r7, e4, f4) {
            e4 |= 0, f4 |= 0;
            var i5 = 0, a5 = 0, n5 = 0, t3 = 0, o4 = 0, k4 = 0, u3 = 0;
            j2 = a5 = j2 - 32 | 0, n5 = b3[28 + (r7 |= 0) >> 2], b3[a5 + 16 >> 2] = n5, i5 = b3[r7 + 20 >> 2], b3[a5 + 28 >> 2] = f4, b3[a5 + 24 >> 2] = e4, e4 = i5 - n5 | 0, b3[a5 + 20 >> 2] = e4, n5 = e4 + f4 | 0, u3 = 2, e4 = a5 + 16 | 0;
            r: {
              e: {
                (i5 = 0 | _2(b3[r7 + 60 >> 2], a5 + 16 | 0, 2, a5 + 12 | 0)) ? (b3[613] = i5, i5 = -1) : i5 = 0;
                f: {
                  if (!i5)
                    for (; ; ) {
                      if ((0 | (i5 = b3[a5 + 12 >> 2])) == (0 | n5))
                        break f;
                      if ((0 | i5) <= -1)
                        break e;
                      if (t3 = i5 - ((o4 = (t3 = b3[e4 + 4 >> 2]) >>> 0 < i5 >>> 0) ? t3 : 0) | 0, b3[(k4 = (o4 << 3) + e4 | 0) >> 2] = t3 + b3[k4 >> 2], b3[(k4 = (o4 ? 12 : 4) + e4 | 0) >> 2] = b3[k4 >> 2] - t3, n5 = n5 - i5 | 0, e4 = o4 ? e4 + 8 | 0 : e4, u3 = u3 - o4 | 0, (i5 = 0 | _2(b3[r7 + 60 >> 2], 0 | e4, 0 | u3, a5 + 12 | 0)) ? (b3[613] = i5, i5 = -1) : i5 = 0, i5)
                        break;
                    }
                  if ((0 | n5) != -1)
                    break e;
                }
                e4 = b3[r7 + 44 >> 2], b3[r7 + 28 >> 2] = e4, b3[r7 + 20 >> 2] = e4, b3[r7 + 16 >> 2] = e4 + b3[r7 + 48 >> 2], r7 = f4;
                break r;
              }
              b3[r7 + 28 >> 2] = 0, b3[r7 + 16 >> 2] = 0, b3[r7 + 20 >> 2] = 0, b3[r7 >> 2] = 32 | b3[r7 >> 2], r7 = 0, (0 | u3) != 2 && (r7 = f4 - b3[e4 + 4 >> 2] | 0);
            }
            return j2 = a5 + 32 | 0, 0 | r7;
          }
          function lr2(r7) {
            var e4 = 0, f4 = 0, i5 = 0, a5 = 0, n5 = 0, t3 = 0, o4 = w2(0), k4 = 0, u3 = w2(0), c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = 0, h3 = 0;
            if (a5 = b3[r7 + 4 >> 2], f4 = b3[r7 >> 2], i5 = b3[f4 + 4 >> 2], v3 = b3[(e4 = a5 + (i5 << 3) | 0) >> 2], !((0 | (n5 = b3[r7 + 8 >> 2])) < 1) && (c3 = b3[(n5 << 2) + f4 >> 2], b3[f4 + 4 >> 2] = c3, b3[4 + (s3 = (c3 << 3) + a5 | 0) >> 2] = 1, b3[e4 >> 2] = 0, b3[e4 + 4 >> 2] = b3[r7 + 16 >> 2], A3 = n5 - 1 | 0, b3[r7 + 8 >> 2] = A3, b3[r7 + 16 >> 2] = i5, (0 | n5) != 1)) {
              for (h3 = (c3 << 3) + a5 | 0, e4 = 1; (0 | A3) <= (0 | (r7 = e4 << 1)) || (t3 = b3[(b3[((i5 = 1 | r7) << 2) + f4 >> 2] << 3) + a5 >> 2], o4 = d2[t3 + 28 >> 2], k4 = b3[(b3[(r7 << 2) + f4 >> 2] << 3) + a5 >> 2], u3 = d2[k4 + 28 >> 2], !(d2[t3 + 32 >> 2] <= d2[k4 + 32 >> 2]) | o4 != u3 && !(o4 < u3) || (r7 = i5)), !((0 | r7) >= (0 | n5) || (i5 = b3[h3 >> 2], o4 = d2[i5 + 28 >> 2], t3 = b3[(r7 << 2) + f4 >> 2], l4 = b3[(k4 = (t3 << 3) + a5 | 0) >> 2], o4 < (u3 = d2[l4 + 28 >> 2]) | (d2[i5 + 32 >> 2] <= d2[l4 + 32 >> 2] ? o4 == u3 : 0))); )
                b3[(e4 << 2) + f4 >> 2] = t3, b3[k4 + 4 >> 2] = e4, e4 = r7;
              b3[(e4 << 2) + f4 >> 2] = c3, b3[s3 + 4 >> 2] = e4;
            }
            return v3;
          }
          function vr2(r7, e4, f4) {
            e4 |= 0, f4 |= 0, (0 | (f4 = b3[1716 + (r7 |= 0) >> 2])) == 3 ? be[b3[r7 + 88 >> 2]](6) : be[0 | f4](6, b3[r7 + 1896 >> 2]), (0 | (f4 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[b3[e4 + 16 >> 2] + 12 >> 2]) : be[0 | f4](b3[b3[e4 + 16 >> 2] + 12 >> 2], b3[r7 + 1896 >> 2]), (0 | (f4 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[b3[b3[e4 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : be[0 | f4](b3[b3[b3[e4 + 4 >> 2] + 16 >> 2] + 12 >> 2], b3[r7 + 1896 >> 2]), f4 = b3[e4 + 20 >> 2];
            r:
              if (k3[f4 + 21 | 0])
                for (; ; ) {
                  if (k3[f4 + 20 | 0])
                    break r;
                  if (n4[f4 + 20 | 0] = 1, e4 = b3[e4 + 8 >> 2], (0 | (f4 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[b3[b3[e4 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : be[0 | f4](b3[b3[b3[e4 + 4 >> 2] + 16 >> 2] + 12 >> 2], b3[r7 + 1896 >> 2]), f4 = b3[e4 + 20 >> 2], !k3[f4 + 21 | 0])
                    break;
                }
            (0 | (e4 = b3[r7 + 1728 >> 2])) == 6 ? be[b3[r7 + 100 >> 2]]() : be[0 | e4](b3[r7 + 1896 >> 2]);
          }
          function dr2(r7, e4, f4) {
            var i5 = 0, a5 = 0;
            if (f4 && (n4[(i5 = r7 + f4 | 0) - 1 | 0] = e4, n4[0 | r7] = e4, !(f4 >>> 0 < 3 || (n4[i5 - 2 | 0] = e4, n4[r7 + 1 | 0] = e4, n4[i5 - 3 | 0] = e4, n4[r7 + 2 | 0] = e4, f4 >>> 0 < 7 || (n4[i5 - 4 | 0] = e4, n4[r7 + 3 | 0] = e4, f4 >>> 0 < 9 || (i5 = (i5 = r7) + (r7 = 0 - r7 & 3) | 0, a5 = p2(255 & e4, 16843009), b3[i5 >> 2] = a5, b3[(e4 = (r7 = f4 - r7 & -4) + i5 | 0) - 4 >> 2] = a5, r7 >>> 0 < 9 || (b3[i5 + 8 >> 2] = a5, b3[i5 + 4 >> 2] = a5, b3[e4 - 8 >> 2] = a5, b3[e4 - 12 >> 2] = a5, r7 >>> 0 < 25 || (b3[i5 + 24 >> 2] = a5, b3[i5 + 20 >> 2] = a5, b3[i5 + 16 >> 2] = a5, b3[i5 + 12 >> 2] = a5, b3[e4 - 16 >> 2] = a5, b3[e4 - 20 >> 2] = a5, b3[e4 - 24 >> 2] = a5, b3[e4 - 28 >> 2] = a5, (f4 = r7 - (e4 = 4 & i5 | 24) | 0) >>> 0 < 32))))))))
              for (a5 = Or2(a5, 0, 1, 1), r7 = F2, e4 = e4 + i5 | 0; b3[e4 + 24 >> 2] = a5, i5 = r7, b3[e4 + 28 >> 2] = i5, b3[e4 + 16 >> 2] = a5, b3[e4 + 20 >> 2] = i5, b3[e4 + 8 >> 2] = a5, b3[e4 + 12 >> 2] = i5, b3[e4 >> 2] = a5, b3[e4 + 4 >> 2] = i5, e4 = e4 + 32 | 0, (f4 = f4 - 32 | 0) >>> 0 > 31; )
                ;
          }
          function hr2(r7, e4, f4) {
            r:
              if (!(e4 >>> 0 > 20)) {
                e:
                  switch (e4 - 9 | 0) {
                    case 0:
                      return e4 = b3[f4 >> 2], b3[f4 >> 2] = e4 + 4, void (b3[r7 >> 2] = b3[e4 >> 2]);
                    case 1:
                      return e4 = b3[f4 >> 2], b3[f4 >> 2] = e4 + 4, e4 = b3[e4 >> 2], b3[r7 >> 2] = e4, void (b3[r7 + 4 >> 2] = e4 >> 31);
                    case 2:
                      return e4 = b3[f4 >> 2], b3[f4 >> 2] = e4 + 4, b3[r7 >> 2] = b3[e4 >> 2], void (b3[r7 + 4 >> 2] = 0);
                    case 3:
                      return e4 = b3[f4 >> 2] + 7 & -8, b3[f4 >> 2] = e4 + 8, f4 = b3[e4 + 4 >> 2], b3[r7 >> 2] = b3[e4 >> 2], void (b3[r7 + 4 >> 2] = f4);
                    case 4:
                      return e4 = b3[f4 >> 2], b3[f4 >> 2] = e4 + 4, e4 = o3[e4 >> 1], b3[r7 >> 2] = e4, void (b3[r7 + 4 >> 2] = e4 >> 31);
                    case 5:
                      return e4 = b3[f4 >> 2], b3[f4 >> 2] = e4 + 4, b3[r7 >> 2] = l3[e4 >> 1], void (b3[r7 + 4 >> 2] = 0);
                    case 6:
                      return e4 = b3[f4 >> 2], b3[f4 >> 2] = e4 + 4, e4 = n4[0 | e4], b3[r7 >> 2] = e4, void (b3[r7 + 4 >> 2] = e4 >> 31);
                    case 7:
                      return e4 = b3[f4 >> 2], b3[f4 >> 2] = e4 + 4, b3[r7 >> 2] = k3[0 | e4], void (b3[r7 + 4 >> 2] = 0);
                    case 8:
                      return e4 = b3[f4 >> 2] + 7 & -8, b3[f4 >> 2] = e4 + 8, void (h2[r7 >> 3] = h2[e4 >> 3]);
                    case 9:
                      break e;
                    default:
                      break r;
                  }
                be[0](r7, f4);
              }
          }
          function pr2(r7, e4, f4) {
            var i5 = w2(0), a5 = w2(0), n5 = 0, t3 = 0, o4 = w2(0), k4 = w2(0), u3 = 0, c3 = w2(0), s3 = w2(0);
            j2 = t3 = j2 + -64 | 0, u3 = (i5 = d2[e4 + 28 >> 2]) > (a5 = d2[r7 + 28 >> 2]);
            r: {
              e: {
                if (!(!(d2[r7 + 32 >> 2] <= d2[e4 + 32 >> 2]) | i5 != a5) || u3) {
                  if ((o4 = d2[f4 + 28 >> 2]) > i5 | (d2[e4 + 32 >> 2] <= d2[f4 + 32 >> 2] ? i5 == o4 : 0))
                    break r;
                  if (n5 = 1, u3)
                    break e;
                }
                n5 = 0, i5 == a5 && (n5 = d2[r7 + 32 >> 2] <= d2[e4 + 32 >> 2]);
              }
              u3 = n5, n5 = 1, (o4 = d2[f4 + 28 >> 2]) > i5 || (n5 = 0, i5 == o4 && (n5 = d2[e4 + 32 >> 2] <= d2[f4 + 32 >> 2])), k4 = d2[r7 + 32 >> 2], c3 = d2[e4 + 32 >> 2], s3 = d2[f4 + 32 >> 2], h2[t3 + 40 >> 3] = o4, h2[t3 + 24 >> 3] = i5, h2[t3 + 48 >> 3] = s3, h2[t3 + 32 >> 3] = c3, h2[t3 + 16 >> 3] = k4, h2[t3 + 8 >> 3] = a5, b3[t3 + 4 >> 2] = n5, b3[t3 >> 2] = u3, Gr(1092, t3), o4 = d2[f4 + 28 >> 2], a5 = d2[r7 + 28 >> 2], i5 = d2[e4 + 28 >> 2];
            }
            return k4 = w2(0), j2 = t3 - -64 | 0, a5 = w2(i5 - a5), i5 = w2(o4 - i5), w2(a5 + i5) > w2(0) && (k4 = a5, a5 = d2[e4 + 32 >> 2], k4 = w2(w2(k4 * w2(a5 - d2[f4 + 32 >> 2])) + w2(i5 * w2(a5 - d2[r7 + 32 >> 2])))), k4;
          }
          function wr2(r7, e4, f4) {
            var i5 = 0, a5 = 0, t3 = 0, o4 = 0;
            i5 = b3[e4 >> 2];
            r: {
              if ((0 | e4) != (0 | f4))
                for (; ; ) {
                  if (n4[e4 + 15 | 0] = 0, o4 = b3[e4 + 4 >> 2], t3 = b3[b3[o4 + 8 >> 2] >> 2], a5 = b3[t3 >> 2], b3[a5 + 16 >> 2] != b3[i5 + 16 >> 2]) {
                    if (!k3[t3 + 15 | 0])
                      return r7 = k3[e4 + 12 | 0], f4 = b3[i5 + 20 >> 2], b3[f4 + 8 >> 2] = i5, n4[f4 + 21 | 0] = r7, b3[i5 + 24 >> 2] = 0, Vr(o4), Y2(e4), i5;
                    if (!(a5 = er2(b3[b3[i5 + 8 >> 2] + 4 >> 2], b3[a5 + 4 >> 2])))
                      break r;
                    if (!rr2(b3[t3 >> 2]))
                      break r;
                    b3[t3 >> 2] = a5, n4[t3 + 15 | 0] = 0, b3[a5 + 24 >> 2] = t3;
                  }
                  if (b3[i5 + 8 >> 2] != (0 | a5)) {
                    if (!tr2(b3[b3[a5 + 4 >> 2] + 12 >> 2], a5))
                      break r;
                    if (!tr2(i5, a5))
                      break r;
                  }
                  if (a5 = k3[e4 + 12 | 0], i5 = b3[e4 >> 2], o4 = b3[i5 + 20 >> 2], b3[o4 + 8 >> 2] = i5, n4[o4 + 21 | 0] = a5, b3[i5 + 24 >> 2] = 0, Vr(b3[e4 + 4 >> 2]), Y2(e4), i5 = b3[t3 >> 2], (0 | f4) == (0 | (e4 = t3)))
                    break;
                }
              return i5;
            }
            Zr(r7 + 1740 | 0, 1), E2();
          }
          function mr2(r7, e4, f4) {
            switch (e4 - 100100 | 0) {
              case 0:
                return void (b3[r7 + 88 >> 2] = f4 || 15);
              case 6:
                return void (b3[r7 + 1716 >> 2] = f4 || 3);
              case 4:
                return n4[r7 + 80 | 0] = (0 | f4) != 0, void (b3[r7 + 92 >> 2] = f4 || 14);
              case 10:
                return n4[r7 + 80 | 0] = (0 | f4) != 0, void (b3[r7 + 1720 >> 2] = f4 || 4);
              case 1:
                return void (b3[r7 + 96 >> 2] = f4 || 13);
              case 7:
                return void (b3[r7 + 1724 >> 2] = f4 || 5);
              case 2:
                return void (b3[r7 + 100 >> 2] = f4 || 12);
              case 8:
                return void (b3[r7 + 1728 >> 2] = f4 || 6);
              case 3:
                return void (b3[r7 + 12 >> 2] = f4 || 18);
              case 9:
                return void (b3[r7 + 1732 >> 2] = f4 || 11);
              case 5:
                return void (b3[r7 + 76 >> 2] = f4 || 17);
              case 11:
                return void (b3[r7 + 1736 >> 2] = f4 || 8);
              case 12:
                return void (b3[r7 + 104 >> 2] = f4 || 16);
            }
            (0 | (e4 = b3[r7 + 1732 >> 2])) == 11 ? be[b3[r7 + 12 >> 2]](100900) : be[0 | e4](100900, b3[r7 + 1896 >> 2]);
          }
          function yr2(r7, e4, f4) {
            var i5 = 0, a5 = 0, t3 = 0;
            if (!(32 & k3[0 | r7]))
              r: {
                a5 = e4, i5 = f4;
                e: {
                  if (!(r7 = b3[(e4 = r7) + 16 >> 2])) {
                    if (r7 = k3[e4 + 74 | 0], n4[e4 + 74 | 0] = r7 - 1 | r7, 8 & (r7 = b3[e4 >> 2]) ? (b3[e4 >> 2] = 32 | r7, r7 = -1) : (b3[e4 + 4 >> 2] = 0, b3[e4 + 8 >> 2] = 0, r7 = b3[e4 + 44 >> 2], b3[e4 + 28 >> 2] = r7, b3[e4 + 20 >> 2] = r7, b3[e4 + 16 >> 2] = r7 + b3[e4 + 48 >> 2], r7 = 0), r7)
                      break e;
                    r7 = b3[e4 + 16 >> 2];
                  }
                  if (r7 - (t3 = b3[e4 + 20 >> 2]) >>> 0 < i5 >>> 0) {
                    be[b3[e4 + 36 >> 2]](e4, a5, f4);
                    break r;
                  }
                  f:
                    if (!(n4[e4 + 75 | 0] < 0)) {
                      for (r7 = f4; ; ) {
                        if (i5 = r7, !r7)
                          break f;
                        if (k3[a5 + (r7 = i5 - 1 | 0) | 0] == 10)
                          break;
                      }
                      if (be[b3[e4 + 36 >> 2]](e4, a5, i5) >>> 0 < i5 >>> 0)
                        break e;
                      a5 = i5 + a5 | 0, f4 = f4 - i5 | 0, t3 = b3[e4 + 20 >> 2];
                    }
                  fr2(t3, a5, f4), b3[e4 + 20 >> 2] = b3[e4 + 20 >> 2] + f4;
                }
              }
          }
          function gr2(r7, e4, f4, i5) {
            var a5 = 0, t3 = 0;
            j2 = a5 = j2 - 208 | 0, b3[a5 + 204 >> 2] = f4, dr2(a5 + 160 | 0, 0, 40), b3[a5 + 200 >> 2] = b3[a5 + 204 >> 2], (0 | W2(0, e4, a5 + 200 | 0, a5 + 80 | 0, a5 + 160 | 0, i5)) < 0 || (b3[r7 + 76 >> 2], f4 = b3[r7 >> 2], n4[r7 + 74 | 0] <= 0 && (b3[r7 >> 2] = -33 & f4), t3 = 32 & f4, b3[r7 + 48 >> 2] ? W2(r7, e4, a5 + 200 | 0, a5 + 80 | 0, a5 + 160 | 0, i5) : (b3[r7 + 48 >> 2] = 80, b3[r7 + 16 >> 2] = a5 + 80, b3[r7 + 28 >> 2] = a5, b3[r7 + 20 >> 2] = a5, f4 = b3[r7 + 44 >> 2], b3[r7 + 44 >> 2] = a5, W2(r7, e4, a5 + 200 | 0, a5 + 80 | 0, a5 + 160 | 0, i5), f4 && (be[b3[r7 + 36 >> 2]](r7, 0, 0), b3[r7 + 48 >> 2] = 0, b3[r7 + 44 >> 2] = f4, b3[r7 + 28 >> 2] = 0, b3[r7 + 16 >> 2] = 0, b3[r7 + 20 >> 2] = 0)), b3[r7 >> 2] = b3[r7 >> 2] | t3), j2 = a5 + 208 | 0;
          }
          function Er2(r7, e4) {
            r7 |= 0;
            var f4 = 0, i5 = 0, a5 = 0;
            if ((0 | (f4 = b3[40 + (e4 |= 0) >> 2])) != (0 | (i5 = e4 + 40 | 0)))
              for (; ; ) {
                if (k3[f4 + 21 | 0]) {
                  for ((0 | (e4 = b3[r7 + 1716 >> 2])) == 3 ? be[b3[r7 + 88 >> 2]](2) : be[0 | e4](2, b3[r7 + 1896 >> 2]), e4 = b3[f4 + 8 >> 2]; (0 | (a5 = b3[r7 + 1724 >> 2])) == 5 ? be[b3[r7 + 96 >> 2]](b3[b3[e4 + 16 >> 2] + 12 >> 2]) : be[0 | a5](b3[b3[e4 + 16 >> 2] + 12 >> 2], b3[r7 + 1896 >> 2]), (0 | (e4 = b3[e4 + 12 >> 2])) != b3[f4 + 8 >> 2]; )
                    ;
                  (0 | (e4 = b3[r7 + 1728 >> 2])) == 6 ? be[b3[r7 + 100 >> 2]]() : be[0 | e4](b3[r7 + 1896 >> 2]);
                }
                if ((0 | i5) == (0 | (f4 = b3[f4 >> 2])))
                  break;
              }
          }
          function Cr2(r7, e4) {
            if (!r7)
              return 0;
            r: {
              e: {
                if (r7) {
                  if (e4 >>> 0 <= 127)
                    break e;
                  if (b3[b3[493] >> 2]) {
                    if (e4 >>> 0 <= 2047) {
                      n4[r7 + 1 | 0] = 63 & e4 | 128, n4[0 | r7] = e4 >>> 6 | 192, r7 = 2;
                      break r;
                    }
                    if (!((-8192 & e4) != 57344 && e4 >>> 0 >= 55296)) {
                      n4[r7 + 2 | 0] = 63 & e4 | 128, n4[0 | r7] = e4 >>> 12 | 224, n4[r7 + 1 | 0] = e4 >>> 6 & 63 | 128, r7 = 3;
                      break r;
                    }
                    if (e4 - 65536 >>> 0 <= 1048575) {
                      n4[r7 + 3 | 0] = 63 & e4 | 128, n4[0 | r7] = e4 >>> 18 | 240, n4[r7 + 2 | 0] = e4 >>> 6 & 63 | 128, n4[r7 + 1 | 0] = e4 >>> 12 & 63 | 128, r7 = 4;
                      break r;
                    }
                  } else if ((-128 & e4) == 57216)
                    break e;
                  b3[613] = 25, r7 = -1;
                } else
                  r7 = 1;
                break r;
              }
              n4[0 | r7] = e4, r7 = 1;
            }
            return r7;
          }
          function Rr2() {
            var r7 = 0, e4 = 0, f4 = 0;
            return (r7 = O2(128)) ? (b3[r7 + 8 >> 2] = 0, b3[r7 + 12 >> 2] = 0, e4 = r7 + 40 | 0, b3[r7 + 44 >> 2] = e4, b3[r7 + 48 >> 2] = 0, b3[r7 + 52 >> 2] = 0, b3[r7 + 40 >> 2] = e4, o3[r7 + 54 >> 1] = 0, o3[r7 + 56 >> 1] = 0, o3[r7 + 58 >> 1] = 0, o3[r7 + 60 >> 1] = 0, b3[r7 + 72 >> 2] = 0, b3[r7 + 76 >> 2] = 0, e4 = r7 + 96 | 0, b3[r7 + 68 >> 2] = e4, f4 = r7 - -64 | 0, b3[r7 + 64 >> 2] = f4, b3[r7 + 80 >> 2] = 0, b3[r7 + 84 >> 2] = 0, b3[r7 + 88 >> 2] = 0, b3[r7 + 92 >> 2] = 0, b3[r7 + 104 >> 2] = 0, b3[r7 + 108 >> 2] = 0, b3[r7 + 100 >> 2] = f4, b3[r7 + 96 >> 2] = e4, b3[r7 + 112 >> 2] = 0, b3[r7 + 116 >> 2] = 0, b3[r7 + 120 >> 2] = 0, b3[r7 + 124 >> 2] = 0, b3[r7 >> 2] = r7, b3[r7 + 4 >> 2] = r7, 0 | r7) : 0;
          }
          function Mr2(r7, e4, f4) {
            r7 |= 0, e4 |= 0, f4 |= 0;
            var i5 = 0, a5 = 0, n5 = w2(0), t3 = w2(0);
            return f4 = b3[f4 >> 2], i5 = b3[b3[f4 + 4 >> 2] + 16 >> 2], e4 = b3[e4 >> 2], (0 | (a5 = b3[b3[e4 + 4 >> 2] + 16 >> 2])) == (0 | (r7 = b3[r7 + 72 >> 2])) ? (0 | r7) == (0 | i5) ? (e4 = b3[e4 + 16 >> 2], n5 = d2[e4 + 28 >> 2], f4 = b3[f4 + 16 >> 2], t3 = d2[f4 + 28 >> 2], !(!(d2[e4 + 32 >> 2] <= d2[f4 + 32 >> 2]) | n5 != t3) || n5 < t3 ? pr2(r7, e4, f4) <= w2(0) | 0 : pr2(r7, f4, e4) >= w2(0) | 0) : pr2(i5, r7, b3[f4 + 16 >> 2]) <= w2(0) | 0 : (e4 = b3[e4 + 16 >> 2], (0 | r7) == (0 | i5) ? pr2(a5, r7, e4) >= w2(0) | 0 : jr2(a5, r7, e4) >= jr2(b3[b3[f4 + 4 >> 2] + 16 >> 2], r7, b3[f4 + 16 >> 2]) | 0);
          }
          function Ir2(r7) {
            var e4 = 0, f4 = 0, i5 = 0, a5 = 0, n5 = 0, t3 = w2(0), o4 = w2(0), k4 = 0;
            if (!(e4 = b3[r7 + 12 >> 2]))
              return lr2(b3[r7 >> 2]);
            if (n5 = b3[r7 + 8 >> 2], i5 = b3[b3[(n5 + (e4 << 2) | 0) - 4 >> 2] >> 2], f4 = b3[r7 >> 2], b3[f4 + 8 >> 2] && (a5 = b3[b3[f4 + 4 >> 2] + (b3[b3[f4 >> 2] + 4 >> 2] << 3) >> 2], t3 = d2[a5 + 28 >> 2], o4 = d2[i5 + 28 >> 2], !(!(d2[a5 + 32 >> 2] <= d2[i5 + 32 >> 2]) | t3 != o4) || t3 < o4))
              return lr2(f4);
            for (f4 = ((0 | e4) < 1 ? e4 : 1) - 1 | 0; ; ) {
              if ((0 | e4) < 2)
                return b3[r7 + 12 >> 2] = f4, i5;
              if (a5 = e4 << 2, e4 = k4 = e4 - 1 | 0, b3[b3[(a5 + n5 | 0) - 8 >> 2] >> 2])
                break;
            }
            return b3[r7 + 12 >> 2] = k4, i5;
          }
          function Sr2(r7, e4, f4) {
            e4 |= 0, f4 |= 0;
            var i5 = 0, a5 = 0, n5 = 0, t3 = 0;
            n5 = 1;
            r:
              if ((0 | (i5 = b3[64 + (r7 |= 0) >> 2])) != (0 | (a5 = r7 - -64 | 0))) {
                if (t3 = 0 - e4 | 0, !f4) {
                  for (; ; )
                    if (r7 = k3[b3[i5 + 20 >> 2] + 21 | 0], b3[i5 + 28 >> 2] = (0 | r7) == k3[b3[b3[i5 + 4 >> 2] + 20 >> 2] + 21 | 0] ? 0 : r7 ? e4 : t3, (0 | a5) == (0 | (i5 = b3[i5 >> 2])))
                      break r;
                }
                for (; ; ) {
                  if (r7 = b3[i5 >> 2], (0 | (f4 = k3[b3[i5 + 20 >> 2] + 21 | 0])) == k3[b3[b3[i5 + 4 >> 2] + 20 >> 2] + 21 | 0]) {
                    if (!rr2(i5)) {
                      n5 = 0;
                      break r;
                    }
                  } else
                    b3[i5 + 28 >> 2] = f4 ? e4 : t3;
                  if ((0 | a5) == (0 | (i5 = r7)))
                    break;
                }
              }
            return 0 | n5;
          }
          function _r2(r7, e4) {
            var f4 = 0, i5 = 0, a5 = 0;
            (f4 = O2(16)) && (a5 = br2(b3[r7 + 8 >> 2])) && (i5 = b3[a5 + 16 >> 2], d2[i5 + 32 >> 2] = e4, b3[i5 + 28 >> 2] = 2112929218, i5 = b3[b3[a5 + 4 >> 2] + 16 >> 2], d2[i5 + 32 >> 2] = e4, b3[i5 + 28 >> 2] = -34554430, b3[r7 + 72 >> 2] = i5, n4[f4 + 15 | 0] = 0, n4[f4 + 12 | 0] = 0, b3[f4 + 8 >> 2] = 0, b3[f4 >> 2] = a5, n4[f4 + 13 | 0] = 1, n4[f4 + 14 | 0] = 0, i5 = f4, f4 = Fr2(a5 = b3[r7 + 64 >> 2], a5, f4), b3[i5 + 4 >> 2] = f4, f4) || (Zr(r7 + 1740 | 0, 1), E2());
          }
          function Pr2(r7) {
            var e4 = 0, f4 = 0, i5 = 0;
            if ((0 | (e4 = b3[40 + (r7 |= 0) >> 2])) != (0 | (f4 = r7 + 40 | 0)))
              for (; i5 = b3[e4 >> 2], Y2(e4), (0 | f4) != (0 | (e4 = i5)); )
                ;
            if ((0 | (e4 = b3[r7 >> 2])) != (0 | r7))
              for (; i5 = b3[e4 >> 2], Y2(e4), (0 | (e4 = i5)) != (0 | r7); )
                ;
            if ((0 | (e4 = b3[r7 + 64 >> 2])) != (0 | (f4 = r7 - -64 | 0)))
              for (; i5 = b3[e4 >> 2], Y2(e4), (0 | f4) != (0 | (e4 = i5)); )
                ;
            Y2(r7);
          }
          function xr2(r7) {
            var e4 = 0, f4 = w2(0), i5 = w2(0);
            if (!(e4 = b3[r7 + 12 >> 2]))
              return r7 = b3[r7 >> 2], b3[b3[r7 + 4 >> 2] + (b3[b3[r7 >> 2] + 4 >> 2] << 3) >> 2];
            e4 = b3[b3[(b3[r7 + 8 >> 2] + (e4 << 2) | 0) - 4 >> 2] >> 2], r7 = b3[r7 >> 2];
            r: {
              if (b3[r7 + 8 >> 2]) {
                if (r7 = b3[b3[r7 + 4 >> 2] + (b3[b3[r7 >> 2] + 4 >> 2] << 3) >> 2], (f4 = d2[r7 + 28 >> 2]) < (i5 = d2[e4 + 28 >> 2]))
                  break r;
                if (f4 == i5 && d2[r7 + 32 >> 2] <= d2[e4 + 32 >> 2])
                  break r;
              }
              r7 = e4;
            }
            return r7;
          }
          function Lr2(r7, e4, f4, i5) {
            r7 |= 0, e4 |= 0, f4 |= 0, i5 |= 0, f4 = 0;
            r: {
              if (e4 = b3[520]) {
                if (!((f4 = b3[e4 >> 2]) >>> 0 < 100001)) {
                  e4 = O2(12);
                  break r;
                }
              } else
                e4 = O2(1200008), b3[e4 + 4 >> 2] = 12, b3[e4 >> 2] = 0, b3[520] = e4;
              b3[e4 >> 2] = f4 + 1, e4 = 8 + (p2(f4, 12) + e4 | 0) | 0;
            }
            d2[e4 >> 2] = d2[r7 >> 2], d2[e4 + 4 >> 2] = d2[r7 + 4 >> 2], d2[e4 + 8 >> 2] = d2[r7 + 8 >> 2], b3[i5 >> 2] = e4;
          }
          function Br2(r7, e4, f4) {
            var i5 = 0, a5 = 0, t3 = 0;
            if (e4 >>> 0 < 1)
              i5 = r7;
            else
              for (; i5 = sr2(r7, e4, 10), t3 = a5 = F2, a5 = Or2(i5, a5, 10, 0), n4[0 | (f4 = f4 - 1 | 0)] = r7 - a5 | 48, a5 = e4 >>> 0 > 9, r7 = i5, e4 = t3, a5; )
                ;
            if (i5)
              for (; r7 = (i5 >>> 0) / 10 | 0, n4[0 | (f4 = f4 - 1 | 0)] = i5 - p2(r7, 10) | 48, e4 = i5 >>> 0 > 9, i5 = r7, e4; )
                ;
            return f4;
          }
          function Tr2(r7, e4, f4, i5) {
            var a5 = 0, n5 = 0, t3 = 0;
            if (n5 = b3[610] + 1 | 0, b3[610] = n5, b3[r7 >> 2] = n5, i5)
              for (; ; ) {
                if (!b3[(t3 = (a5 << 3) + f4 | 0) >> 2])
                  return b3[t3 >> 2] = n5, b3[4 + (r7 = (a5 << 3) + f4 | 0) >> 2] = e4, b3[r7 + 8 >> 2] = 0, C2(0 | i5), f4;
                if ((0 | (a5 = a5 + 1 | 0)) == (0 | i5))
                  break;
              }
            return a5 = r7, r7 = i5 << 1, e4 = Tr2(a5, e4, Z2(f4, i5 << 4 | 8), r7), C2(0 | r7), e4;
          }
          function Ur2(r7, e4) {
            var f4 = 0, i5 = 0, a5 = 0;
            if (A2(+r7), f4 = 0 | u2(1), i5 = 0 | u2(0), a5 = f4, (0 | (f4 = f4 >>> 20 & 2047)) != 2047) {
              if (!f4)
                return f4 = e4, r7 == 0 ? e4 = 0 : (r7 = Ur2(18446744073709552e3 * r7, e4), e4 = b3[e4 >> 2] + -64 | 0), b3[f4 >> 2] = e4, r7;
              b3[e4 >> 2] = f4 - 1022, c2(0, 0 | i5), c2(1, -2146435073 & a5 | 1071644672), r7 = +s2();
            }
            return r7;
          }
          function jr2(r7, e4, f4) {
            var i5 = w2(0), a5 = w2(0), n5 = w2(0), t3 = w2(0), o4 = w2(0);
            return i5 = d2[e4 + 28 >> 2], a5 = w2(i5 - d2[r7 + 28 >> 2]), i5 = w2(d2[f4 + 28 >> 2] - i5), (n5 = w2(a5 + i5)) > w2(0) ? (o4 = d2[e4 + 32 >> 2], t3 = d2[((e4 = i5 > a5) ? r7 : f4) + 32 >> 2], i5 = w2(w2(o4 - t3) + w2(w2((e4 ? a5 : i5) / n5) * w2(t3 - d2[(e4 ? f4 : r7) + 32 >> 2])))) : i5 = w2(0), i5;
          }
          function Fr2(r7, e4, f4) {
            for (var i5 = 0; e4 = b3[e4 + 8 >> 2], (i5 = b3[e4 >> 2]) && !(0 | be[b3[r7 + 16 >> 2]](b3[r7 + 12 >> 2], i5, f4)); )
              ;
            return (r7 = O2(12)) ? (b3[r7 >> 2] = f4, b3[r7 + 4 >> 2] = b3[e4 + 4 >> 2], b3[b3[e4 + 4 >> 2] + 8 >> 2] = r7, b3[r7 + 8 >> 2] = e4, b3[e4 + 4 >> 2] = r7, r7) : 0;
          }
          function Or2(r7, e4, f4, i5) {
            var a5 = 0, n5 = 0, t3 = 0, o4 = 0, b4 = 0, k4 = 0;
            return k4 = p2(a5 = f4 >>> 16 | 0, n5 = r7 >>> 16 | 0), a5 = (65535 & (n5 = ((b4 = p2(t3 = 65535 & f4, o4 = 65535 & r7)) >>> 16 | 0) + p2(n5, t3) | 0)) + p2(a5, o4) | 0, F2 = (p2(e4, f4) + k4 | 0) + p2(r7, i5) + (n5 >>> 16) + (a5 >>> 16) | 0, 65535 & b4 | a5 << 16;
          }
          function Dr(r7, e4, f4, i5, a5) {
            var n5 = 0;
            if (j2 = n5 = j2 - 256 | 0, !(73728 & a5 | (0 | f4) <= (0 | i5))) {
              if (dr2(n5, 255 & e4, (i5 = (f4 = f4 - i5 | 0) >>> 0 < 256) ? f4 : 256), !i5)
                for (; yr2(r7, n5, 256), (f4 = f4 - 256 | 0) >>> 0 > 255; )
                  ;
              yr2(r7, n5, f4);
            }
            j2 = n5 + 256 | 0;
          }
          function Hr(r7, e4, f4) {
            var i5 = 0, a5 = 0;
            r:
              if (f4)
                for (; ; ) {
                  if (!(a5 = b3[(i5 << 3) + e4 >> 2]))
                    break r;
                  if ((0 | r7) == (0 | a5))
                    return b3[4 + ((i5 << 3) + e4 | 0) >> 2];
                  if ((0 | (i5 = i5 + 1 | 0)) == (0 | f4))
                    break;
                }
            return 0;
          }
          function Qr(r7) {
            var e4 = 0, f4 = 0;
            return (r7 = (e4 = b3[412]) + (f4 = r7 + 3 & -4) | 0) >>> 0 <= e4 >>> 0 && f4 || r7 >>> 0 > ke() << 16 >>> 0 && !(0 | P2(0 | r7)) ? (b3[613] = 48, -1) : (b3[412] = r7, e4);
          }
          function Wr(r7) {
            var e4 = 0, f4 = 0, i5 = 0;
            if (n4[b3[r7 >> 2]] - 48 >>> 0 < 10)
              for (; e4 = b3[r7 >> 2], i5 = n4[0 | e4], b3[r7 >> 2] = e4 + 1, f4 = (p2(f4, 10) + i5 | 0) - 48 | 0, n4[e4 + 1 | 0] - 48 >>> 0 < 10; )
                ;
            return f4;
          }
          function qr(r7, e4) {
            r7 |= 0;
            var f4 = 0, i5 = 0;
            (0 | (f4 = b3[4 + (e4 |= 0) >> 2])) < b3[e4 + 8 >> 2] && (i5 = b3[e4 >> 2] + (p2(b3[e4 + 12 >> 2], f4) << 2) | 0, d2[i5 >> 2] = d2[r7 >> 2], d2[i5 + 4 >> 2] = d2[r7 + 4 >> 2], b3[e4 + 4 >> 2] = f4 + 1);
          }
          function zr(r7, e4) {
            r7 |= 0, e4 |= 0;
            var f4 = w2(0), i5 = w2(0);
            if ((f4 = d2[r7 + 28 >> 2]) < (i5 = d2[e4 + 28 >> 2]))
              r7 = 1;
            else {
              if (f4 != i5)
                return 0;
              r7 = d2[r7 + 32 >> 2] <= d2[e4 + 32 >> 2];
            }
            return 0 | r7;
          }
          function Kr(r7) {
            var e4 = 0;
            (e4 = b3[r7 >> 2]) && (Y2(b3[e4 + 4 >> 2]), Y2(b3[e4 >> 2]), Y2(e4)), (e4 = b3[r7 + 8 >> 2]) && Y2(e4), (e4 = b3[r7 + 4 >> 2]) && Y2(e4), Y2(r7);
          }
          function Yr(r7) {
            r7 |= 0;
            var e4 = 0;
            j2 = e4 = j2 - 16 | 0, b3[e4 >> 2] = r7, j2 = r7 = j2 - 16 | 0, b3[r7 + 12 >> 2] = e4, gr2(b3[288], 1078, e4, 0), j2 = r7 + 16 | 0, j2 = e4 + 16 | 0;
          }
          function Nr(r7, e4, f4) {
            r7 |= 0, e4 = b3[20 + (e4 |= 0) >> 2], b3[e4 + 16 >> 2] = b3[r7 + 84 >> 2], b3[r7 + 84 >> 2] = e4, n4[e4 + 20 | 0] = 1;
          }
          function Vr(r7) {
            var e4 = 0;
            e4 = b3[r7 + 4 >> 2], b3[e4 + 8 >> 2] = b3[r7 + 8 >> 2], b3[b3[r7 + 8 >> 2] + 4 >> 2] = e4, Y2(r7);
          }
          function Gr(r7, e4) {
            var f4 = 0;
            j2 = f4 = j2 - 16 | 0, b3[f4 + 12 >> 2] = e4, gr2(b3[288], r7, e4, 43), j2 = f4 + 16 | 0;
          }
          function Jr(r7) {
            var e4 = 0;
            return (-1 >>> (e4 = 31 & r7) & -2) << e4 | (-1 << (r7 = 0 - r7 & 31) & -2) >>> r7;
          }
          function Zr(r7, e4) {
            r7 |= 0, e4 |= 0, b3[611] || (b3[612] = e4, b3[611] = r7), x2();
          }
          function Xr(r7, e4) {
            r7 |= 0, e4 |= 0, b3[611] || (b3[612] = e4, b3[611] = r7);
          }
          function $r(r7, e4, f4, i5) {
            return F2 = 0, 0;
          }
          function re(r7, e4, f4, i5, a5) {
          }
          function ee(r7, e4, f4, i5) {
          }
          function fe(r7) {
            return 0;
          }
          function ie(r7, e4) {
          }
          function ae() {
            return 0 | j2;
          }
          function ne(r7) {
            j2 = r7 |= 0;
          }
          function te(r7) {
          }
          function oe() {
          }
          f3 = k3, t2();
          var be = e3([null, Nr, vr2, ie, ie, ie, te, ur2, re, zr, Mr2, ie, oe, te, te, te, te, ee, te, cr2, J2, Rr2, br2, ir2, tr2, K2, Zr, Q2, Sr2, $2, Er2, N2, nr2, Pr2, qr, te, oe, Lr2, Yr, te, fe, Ar2, $r, q2]);
          function ke() {
            return a4.byteLength / 65536 | 0;
          }
          function ue(r7) {
            r7 |= 0;
            var e4 = 0 | ke(), t3 = e4 + r7 | 0;
            if (e4 < t3 && t3 < 65536) {
              var u3 = new ArrayBuffer(p2(t3, 65536));
              new Int8Array(u3).set(n4), n4 = new Int8Array(u3), o3 = new Int16Array(u3), b3 = new Int32Array(u3), k3 = new Uint8Array(u3), l3 = new Uint16Array(u3), v2 = new Uint32Array(u3), d2 = new Float32Array(u3), h2 = new Float64Array(u3), a4 = u3, i4.buffer = a4, f3 = k3;
            }
            return e4;
          }
          return { n: oe, o: O2, p: Y2, q: be, r: D2, s: ae, t: ne, u: Xr };
        }
        return l2(r5);
      }(hr);
    }, instantiate: function(r4, e2) {
      return { then: function(e3) {
        var f3 = new M.Module(r4);
        e3({ instance: new M.Instance(f3) });
      } };
    }, RuntimeError: Error };
    y = [], typeof M != "object" && X("no native wasm support detected");
    var I = false;
    function S(r4, e2) {
      r4 || X("Assertion failed: " + e2);
    }
    var _, P, x, L = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
    function B(r4, e2, f3) {
      for (var i3 = e2 + f3, a3 = e2; r4[a3] && !(a3 >= i3); )
        ++a3;
      if (a3 - e2 > 16 && r4.subarray && L)
        return L.decode(r4.subarray(e2, a3));
      for (var n3 = ""; e2 < a3; ) {
        var t2 = r4[e2++];
        if (128 & t2) {
          var o2 = 63 & r4[e2++];
          if ((224 & t2) != 192) {
            var b2 = 63 & r4[e2++];
            if ((t2 = (240 & t2) == 224 ? (15 & t2) << 12 | o2 << 6 | b2 : (7 & t2) << 18 | o2 << 12 | b2 << 6 | 63 & r4[e2++]) < 65536)
              n3 += String.fromCharCode(t2);
            else {
              var k2 = t2 - 65536;
              n3 += String.fromCharCode(55296 | k2 >> 10, 56320 | 1023 & k2);
            }
          } else
            n3 += String.fromCharCode((31 & t2) << 6 | o2);
        } else
          n3 += String.fromCharCode(t2);
      }
      return n3;
    }
    function T(r4, e2) {
      return r4 ? B(P, r4, e2) : "";
    }
    function U(r4, e2) {
      return r4 % e2 > 0 && (r4 += e2 - r4 % e2), r4;
    }
    function j(r4) {
      _ = r4, a2.HEAP8 = new Int8Array(r4), a2.HEAP16 = new Int16Array(r4), a2.HEAP32 = x = new Int32Array(r4), a2.HEAPU8 = P = new Uint8Array(r4), a2.HEAPU16 = new Uint16Array(r4), a2.HEAPU32 = new Uint32Array(r4), a2.HEAPF32 = new Float32Array(r4), a2.HEAPF64 = new Float64Array(r4);
    }
    var F, O = a2.INITIAL_MEMORY || 4194304;
    (R = a2.wasmMemory ? a2.wasmMemory : new M.Memory({ initial: O / 65536, maximum: 32768 })) && (_ = R.buffer), O = _.byteLength, j(_);
    var D = [], H = [], Q = [];
    function W() {
      if (a2.preRun)
        for (typeof a2.preRun == "function" && (a2.preRun = [a2.preRun]); a2.preRun.length; )
          K(a2.preRun.shift());
      tr(D);
    }
    function q() {
      tr(H);
    }
    function z() {
      if (a2.postRun)
        for (typeof a2.postRun == "function" && (a2.postRun = [a2.postRun]); a2.postRun.length; )
          N(a2.postRun.shift());
      tr(Q);
    }
    function K(r4) {
      D.unshift(r4);
    }
    function Y(r4) {
      H.unshift(r4);
    }
    function N(r4) {
      Q.unshift(r4);
    }
    var V = 0, G = null;
    function J(r4) {
      V++, a2.monitorRunDependencies && a2.monitorRunDependencies(V);
    }
    function Z(r4) {
      if (V--, a2.monitorRunDependencies && a2.monitorRunDependencies(V), V == 0 && G) {
        var e2 = G;
        G = null, e2();
      }
    }
    function X(r4) {
      throw a2.onAbort && a2.onAbort(r4), m(r4 += ""), I = true, r4 = "abort(" + r4 + "). Build with -s ASSERTIONS=1 for more info.", new M.RuntimeError(r4);
    }
    a2.preloadedImages = {}, a2.preloadedAudios = {};
    var $, rr = "data:application/octet-stream;base64,";
    function er(r4) {
      return r4.startsWith(rr);
    }
    function fr(r4) {
      return r4.startsWith("file://");
    }
    function ir(r4) {
      try {
        if (r4 == $ && y)
          return new Uint8Array(y);
        var e2 = dr(r4);
        if (e2)
          return e2;
        if (c)
          return c(r4);
        throw "both async and sync fetching of the wasm failed";
      } catch (m2) {
        X(m2);
      }
    }
    function ar() {
      if (!y && (l || v)) {
        if (typeof fetch == "function" && !fr($))
          return fetch($, { credentials: "same-origin" }).then(function(r4) {
            if (!r4.ok)
              throw "failed to load wasm binary file at '" + $ + "'";
            return r4.arrayBuffer();
          }).catch(function() {
            return ir($);
          });
        if (u)
          return new Promise(function(r4, e2) {
            u($, function(e3) {
              r4(new Uint8Array(e3));
            }, e2);
          });
      }
      return Promise.resolve().then(function() {
        return ir($);
      });
    }
    function nr() {
      var r4 = { a: hr };
      function e2(r5, e3) {
        var f4 = r5.exports;
        a2.asm = f4, F = a2.asm.q, Y(a2.asm.n), Z();
      }
      function f3(r5) {
        e2(r5.instance);
      }
      function i3(e3) {
        return ar().then(function(e4) {
          return M.instantiate(e4, r4);
        }).then(e3, function(r5) {
          m("failed to asynchronously prepare wasm: " + r5), X(r5);
        });
      }
      function n3() {
        return y || typeof M.instantiateStreaming != "function" || er($) || fr($) || typeof fetch != "function" ? i3(f3) : fetch($, { credentials: "same-origin" }).then(function(e3) {
          return M.instantiateStreaming(e3, r4).then(f3, function(r5) {
            return m("wasm streaming compile failed: " + r5), m("falling back to ArrayBuffer instantiation"), i3(f3);
          });
        });
      }
      if (J(), a2.instantiateWasm)
        try {
          return a2.instantiateWasm(r4, e2);
        } catch (t2) {
          return m("Module.instantiateWasm callback failed with error: " + t2), false;
        }
      return n3(), {};
    }
    function tr(r4) {
      for (; r4.length > 0; ) {
        var e2 = r4.shift();
        if (typeof e2 != "function") {
          var f3 = e2.func;
          typeof f3 == "number" ? e2.arg === void 0 ? F.get(f3)() : F.get(f3)(e2.arg) : f3(e2.arg === void 0 ? null : e2.arg);
        } else
          e2(a2);
      }
    }
    function or() {
      throw "longjmp";
    }
    function br(r4, e2, f3) {
      P.copyWithin(r4, e2, e2 + f3);
    }
    function kr(r4) {
      try {
        return R.grow(r4 - _.byteLength + 65535 >>> 16), j(R.buffer), 1;
      } catch (e2) {
      }
    }
    function ur(r4) {
      var e2 = P.length, f3 = 2147483648;
      if ((r4 >>>= 0) > f3)
        return false;
      for (var i3 = 1; i3 <= 4; i3 *= 2) {
        var a3 = e2 * (1 + 0.2 / i3);
        if (a3 = Math.min(a3, r4 + 100663296), kr(Math.min(f3, U(Math.max(r4, a3), 65536))))
          return true;
      }
      return false;
    }
    er($ = "libtess-asm.wasm") || ($ = p($));
    var cr = { mappings: {}, buffers: [null, [], []], printChar: function(r4, e2) {
      var f3 = cr.buffers[r4];
      e2 === 0 || e2 === 10 ? ((r4 === 1 ? w : m)(B(f3, 0)), f3.length = 0) : f3.push(e2);
    }, varargs: void 0, get: function() {
      return cr.varargs += 4, x[cr.varargs - 4 >> 2];
    }, getStr: function(r4) {
      return T(r4);
    }, get64: function(r4, e2) {
      return r4;
    } };
    function sr(r4, e2, f3, i3) {
      for (var a3 = 0, n3 = 0; n3 < f3; n3++) {
        for (var t2 = x[e2 + 8 * n3 >> 2], o2 = x[e2 + (8 * n3 + 4) >> 2], b2 = 0; b2 < o2; b2++)
          cr.printChar(r4, P[t2 + b2]);
        a3 += o2;
      }
      return x[i3 >> 2] = a3, 0;
    }
    function Ar(r4) {
      for (var e2 = [], f3 = 0; f3 < r4.length; f3++) {
        var i3 = r4[f3];
        i3 > 255 && (i3 &= 255), e2.push(String.fromCharCode(i3));
      }
      return e2.join("");
    }
    var lr = typeof atob == "function" ? atob : function(r4) {
      var e2, f3, i3, a3, n3, t2, o2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b2 = "", k2 = 0;
      r4 = r4.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      do {
        e2 = o2.indexOf(r4.charAt(k2++)) << 2 | (a3 = o2.indexOf(r4.charAt(k2++))) >> 4, f3 = (15 & a3) << 4 | (n3 = o2.indexOf(r4.charAt(k2++))) >> 2, i3 = (3 & n3) << 6 | (t2 = o2.indexOf(r4.charAt(k2++))), b2 += String.fromCharCode(e2), n3 !== 64 && (b2 += String.fromCharCode(f3)), t2 !== 64 && (b2 += String.fromCharCode(i3));
      } while (k2 < r4.length);
      return b2;
    };
    function vr(r4) {
      if (typeof d == "boolean" && d) {
        var e2 = Buffer.from(r4, "base64");
        return new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength);
      }
      try {
        for (var f3 = lr(r4), i3 = new Uint8Array(f3.length), a3 = 0; a3 < f3.length; ++a3)
          i3[a3] = f3.charCodeAt(a3);
        return i3;
      } catch (n3) {
        throw new Error("Converting base64 string to bytes failed.");
      }
    }
    function dr(r4) {
      if (er(r4))
        return vr(r4.slice(rr.length));
    }
    var hr = { i: or, m: br, h: ur, g: sr, c: C, l: Rr, e: Cr, k: Mr, j: Ir, f: Er, d: gr, a: R, b: E };
    nr(), a2.___wasm_call_ctors = function() {
      return (a2.___wasm_call_ctors = a2.asm.n).apply(null, arguments);
    }, a2._malloc = function() {
      return (a2._malloc = a2.asm.o).apply(null, arguments);
    }, a2._free = function() {
      return (a2._free = a2.asm.p).apply(null, arguments);
    }, a2._triangulate = function() {
      return (a2._triangulate = a2.asm.r).apply(null, arguments);
    };
    var pr, wr = a2.stackSave = function() {
      return (wr = a2.stackSave = a2.asm.s).apply(null, arguments);
    }, mr = a2.stackRestore = function() {
      return (mr = a2.stackRestore = a2.asm.t).apply(null, arguments);
    }, yr = a2._setThrew = function() {
      return (yr = a2._setThrew = a2.asm.u).apply(null, arguments);
    };
    function gr(r4, e2, f3) {
      var i3 = wr();
      try {
        F.get(r4)(e2, f3);
      } catch (a3) {
        if (mr(i3), a3 !== a3 + 0 && a3 !== "longjmp")
          throw a3;
        yr(1, 0);
      }
    }
    function Er(r4, e2) {
      var f3 = wr();
      try {
        F.get(r4)(e2);
      } catch (i3) {
        if (mr(f3), i3 !== i3 + 0 && i3 !== "longjmp")
          throw i3;
        yr(1, 0);
      }
    }
    function Cr(r4, e2) {
      var f3 = wr();
      try {
        return F.get(r4)(e2);
      } catch (i3) {
        if (mr(f3), i3 !== i3 + 0 && i3 !== "longjmp")
          throw i3;
        yr(1, 0);
      }
    }
    function Rr(r4) {
      var e2 = wr();
      try {
        return F.get(r4)();
      } catch (f3) {
        if (mr(e2), f3 !== f3 + 0 && f3 !== "longjmp")
          throw f3;
        yr(1, 0);
      }
    }
    function Mr(r4, e2, f3) {
      var i3 = wr();
      try {
        return F.get(r4)(e2, f3);
      } catch (a3) {
        if (mr(i3), a3 !== a3 + 0 && a3 !== "longjmp")
          throw a3;
        yr(1, 0);
      }
    }
    function Ir(r4, e2, f3, i3) {
      var a3 = wr();
      try {
        return F.get(r4)(e2, f3, i3);
      } catch (n3) {
        if (mr(a3), n3 !== n3 + 0 && n3 !== "longjmp")
          throw n3;
        yr(1, 0);
      }
    }
    function Sr(r4) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + r4 + ")", this.status = r4;
    }
    function _r(r4) {
      function e2() {
        pr || (pr = true, a2.calledRun = true, I || (q(), a2.onRuntimeInitialized && a2.onRuntimeInitialized(), z()));
      }
      V > 0 || (W(), V > 0 || (a2.setStatus ? (a2.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          a2.setStatus("");
        }, 1), e2();
      }, 1)) : e2()));
    }
    if (G = function r4() {
      pr || _r(), pr || (G = r4);
    }, a2.run = _r, a2.preInit)
      for (typeof a2.preInit == "function" && (a2.preInit = [a2.preInit]); a2.preInit.length > 0; )
        a2.preInit.pop()();
    _r();
    let Pr = null, xr = null, Lr = null, Br = null;
    const Tr = i2.Module, Ur = 2, jr = 4e3;
    let Fr = 0;
    const Or = (r4, e2, f3) => {
      Pr || (Pr = Tr._triangulate);
      let i3 = Tr.HEAPF32;
      const a3 = Tr.HEAP32.BYTES_PER_ELEMENT, n3 = 2, t2 = i3.BYTES_PER_ELEMENT;
      f3 > Fr && (Fr = f3, Lr && (Tr._free(Lr), Lr = 0), xr && (Tr._free(xr), xr = 0)), Lr || (Lr = Tr._malloc(f3 * t2)), Br || (Br = Tr._malloc(jr * a3));
      const o2 = f3 * Ur;
      xr || (xr = Tr._malloc(o2 * t2)), i3 = Tr.HEAPF32, i3.set(r4, Lr / t2), Tr.HEAP32.set(e2, Br / a3);
      const b2 = o2 / n3, k2 = Pr(Lr, Br, Math.min(e2.length, jr), n3, xr, b2), u2 = k2 * n3;
      i3 = Tr.HEAPF32;
      const c2 = i3.slice(xr / t2, xr / t2 + u2), s2 = {};
      return s2.buffer = c2, s2.vertexCount = k2, s2;
    };
    return i2.triangulate = Or, i2.whenLoaded();
  }
  return { load: r2 };
}, (i = f()) !== void 0 && (e.exports = i);
const n = r({ __proto__: null, default: a.exports }, [a.exports]);
export { n as l };
