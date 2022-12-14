var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { l as f$7, n as n$a, U as U$1, m as j$4, g as s$a, p as f$8, e as a$e, a as r$b, q as b$3, h as has, u as n$d, v as v$4, w as a$g, t as t$d, s as s$b, x as l$g, y as s$c, z as r$c, A as u$a, B as n$f, D as D$3, r as r$d, C as d$d, E as n$g, F as e$b, G as o$h, H as l$h, I as f$9, J as h$9, M as M$2, K as r$e, L as r$f, d as d$e, c as a$h, N as n$j, o as o$i, O as e$c, P as A$1, Q as r$g, R as l$i, S as h$a, T as m$6, V as a$i, W as i$e, X as m$7, Y as a$j, Z as m$8, _ as e$e, $ as e$f, a0 as y$4, a1 as n$l, a2 as P$4, a3 as c$e, a4 as s$f, a5 as g$7, a6 as u$b, a7 as w$2, a8 as f$a, a9 as St, aa as i$f, ab as r$h, ac as nt, ad as s$g, ae as Gt, af as n$m, ag as $$1, ah as bt$1, ai as pt, aj as a$k, ak as Rt, al as t$i, am as j$5, an as It } from "./index.js";
import { o as o$d } from "./_commonjsHelpers.js";
import { c as c$d } from "./imageutils2.js";
import { i as i$d, r as r$i } from "./utils.js";
import { n as n$k } from "./BufferPool.js";
import { I as I$2, N as Ne, O as O$3, v as ve, M as Me, a as Ie, T as Te, B as Be, _ as _e, E as Ee, U as Ue, w as we, A as Ae, D as De, b as E$3, S as S$2 } from "./Utils2.js";
import { n as n$c, t as t$b, a as n$h, b as t$e, c as n$i, m as m$9 } from "./WGLContainer.js";
import { T as T$2 } from "./enums3.js";
import { e as e$7, a as e$8 } from "./ProgramTemplate.js";
import { n as n$b } from "./programUtils.js";
import { a as a$f, E as E$1, x as x$1, s as s$d } from "./VertexArrayObject.js";
import { R, E, F as F$2, P as P$2, G as G$1, L, D as D$2, O as O$4, I as I$3, M as M$3, C as C$3, Y, V as V$1, B as B$2 } from "./enums.js";
import { o as o$e, T as T$3, y as y$3 } from "./RenderingContext.js";
import { p as pe, o as oe, r as r$a, t as t$a, a as a$c, b as a$d, c as o$g, e as e$9, i as i$c, n as n$e } from "./ExpandedCIM.js";
import { r as r$9, e as e$6 } from "./rasterizingUtils.js";
import { e as et, d as d$c, z as z$1, y as y$2, b as bt, x as xt, w as wt, N as N$1, B as B$1, C as C$2, J, I as I$4, Y as Y$1, O as O$5, U as U$2, V as V$2 } from "./enums2.js";
import { t as t$c } from "./Rect.js";
import { E as E$2 } from "./Texture.js";
import { o as o$f } from "./floatRGBA.js";
import { P as P$3 } from "./GeometryUtils2.js";
import { e as e$a } from "./Matcher.js";
import { t as t$f } from "./VertexElementDescriptor.js";
import { s as s$e } from "./CircularArray.js";
import { e as e$d } from "./imageUtils.js";
import { t as t$g } from "./ComputedAttributeStorage.js";
export { o as GraphicsView2D } from "./BaseGraphicContainer.js";
export { i as GraphicContainer } from "./GraphicContainer.js";
import { t as t$h } from "./requestImageUtils.js";
import "vue";
import "./MaterialKey.js";
import "./pixelUtils.js";
import "./StyleDefinition.js";
import "./config.js";
import "./earcut.js";
import "./OrderIndependentTransparency.js";
import "./BidiEngine.js";
import "./quantizationUtils.js";
import "./GeometryUtils.js";
import "./visualVariablesUtils.js";
import "./visualVariablesUtils2.js";
import "./tileUtils.js";
import "./TileClipper.js";
import "./Geometry.js";
import "./devEnvironmentUtils.js";
import "./centroid.js";
import "./normalizeUtilsSync.js";
import "./projectionSupport.js";
import "./json.js";
import "./FeatureContainer.js";
import "./TileContainer.js";
import "./schemaUtils.js";
import "./createSymbolSchema.js";
import "./util.js";
import "./vec3f32.js";
var i$b, s$9 = { exports: {} };
i$b = function() {
  return function(e3) {
    var t2 = {};
    function r2(n2) {
      if (t2[n2])
        return t2[n2].exports;
      var i3 = t2[n2] = { exports: {}, id: n2, loaded: false };
      return e3[n2].call(i3.exports, i3, i3.exports, r2), i3.loaded = true, i3.exports;
    }
    return r2.m = e3, r2.c = t2, r2.p = "", r2(0);
  }([function(e3, t2, r2) {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isNotPNG = u2, t2.isNotAPNG = h2, t2.default = c2;
    var n2 = s2(r2(1)), i3 = r2(2);
    function s2(e4) {
      return e4 && e4.__esModule ? e4 : { default: e4 };
    }
    var a2 = new Error("Not a PNG"), o3 = new Error("Not an animated PNG");
    function u2(e4) {
      return e4 === a2;
    }
    function h2(e4) {
      return e4 === o3;
    }
    var l2 = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
    function c2(e4) {
      var t3 = new Uint8Array(e4);
      if (Array.prototype.some.call(l2, function(e5, r4) {
        return e5 !== t3[r4];
      }))
        return a2;
      var r3 = false;
      if (p2(t3, function(e5) {
        return !(r3 = e5 === "acTL");
      }), !r3)
        return o3;
      var n3 = [], s3 = [], u3 = null, h3 = null, c3 = 0, f3 = new i3.APNG();
      if (p2(t3, function(e5, t4, r4, a3) {
        var o4 = new DataView(t4.buffer);
        switch (e5) {
          case "IHDR":
            u3 = t4.subarray(r4 + 8, r4 + 8 + a3), f3.width = o4.getUint32(r4 + 8), f3.height = o4.getUint32(r4 + 12);
            break;
          case "acTL":
            f3.numPlays = o4.getUint32(r4 + 8 + 4);
            break;
          case "fcTL":
            h3 && (f3.frames.push(h3), c3++), (h3 = new i3.Frame()).width = o4.getUint32(r4 + 8 + 4), h3.height = o4.getUint32(r4 + 8 + 8), h3.left = o4.getUint32(r4 + 8 + 12), h3.top = o4.getUint32(r4 + 8 + 16);
            var l3 = o4.getUint16(r4 + 8 + 20), p3 = o4.getUint16(r4 + 8 + 22);
            p3 === 0 && (p3 = 100), h3.delay = 1e3 * l3 / p3, h3.delay <= 10 && (h3.delay = 100), f3.playTime += h3.delay, h3.disposeOp = o4.getUint8(r4 + 8 + 24), h3.blendOp = o4.getUint8(r4 + 8 + 25), h3.dataParts = [], c3 === 0 && h3.disposeOp === 2 && (h3.disposeOp = 1);
            break;
          case "fdAT":
            h3 && h3.dataParts.push(t4.subarray(r4 + 8 + 4, r4 + 8 + a3));
            break;
          case "IDAT":
            h3 && h3.dataParts.push(t4.subarray(r4 + 8, r4 + 8 + a3));
            break;
          case "IEND":
            s3.push(v2(t4, r4, 12 + a3));
            break;
          default:
            n3.push(v2(t4, r4, 12 + a3));
        }
      }), h3 && f3.frames.push(h3), f3.frames.length == 0)
        return o3;
      var m3 = new Blob(n3), g2 = new Blob(s3);
      return f3.frames.forEach(function(e5) {
        var t4 = [];
        t4.push(l2), u3.set(_2(e5.width), 0), u3.set(_2(e5.height), 4), t4.push(d2("IHDR", u3)), t4.push(m3), e5.dataParts.forEach(function(e6) {
          return t4.push(d2("IDAT", e6));
        }), t4.push(g2), e5.imageData = new Blob(t4, { type: "image/png" }), delete e5.dataParts, t4 = null;
      }), f3;
    }
    function p2(e4, t3) {
      var r3 = new DataView(e4.buffer), n3 = 8, i4 = void 0, s3 = void 0, a3 = void 0;
      do {
        s3 = r3.getUint32(n3), a3 = t3(i4 = f2(e4, n3 + 4, 4), e4, n3, s3), n3 += 12 + s3;
      } while (a3 !== false && i4 != "IEND" && n3 < e4.length);
    }
    function f2(e4, t3, r3) {
      var n3 = Array.prototype.slice.call(e4.subarray(t3, t3 + r3));
      return String.fromCharCode.apply(String, n3);
    }
    function m2(e4) {
      for (var t3 = new Uint8Array(e4.length), r3 = 0; r3 < e4.length; r3++)
        t3[r3] = e4.charCodeAt(r3);
      return t3;
    }
    function v2(e4, t3, r3) {
      var n3 = new Uint8Array(r3);
      return n3.set(e4.subarray(t3, t3 + r3)), n3;
    }
    var d2 = function(e4, t3) {
      var r3 = e4.length + t3.length, i4 = new Uint8Array(r3 + 8), s3 = new DataView(i4.buffer);
      s3.setUint32(0, t3.length), i4.set(m2(e4), 4), i4.set(t3, 8);
      var a3 = (0, n2.default)(i4, 4, r3);
      return s3.setUint32(r3 + 4, a3), i4;
    }, _2 = function(e4) {
      return new Uint8Array([e4 >>> 24 & 255, e4 >>> 16 & 255, e4 >>> 8 & 255, 255 & e4]);
    };
  }, function(e3, t2) {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.default = function(e4) {
      for (var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n3 = -1, i4 = t3, s3 = t3 + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e4.length - t3); i4 < s3; i4++)
        n3 = n3 >>> 8 ^ r2[255 & (n3 ^ e4[i4])];
      return -1 ^ n3;
    };
    for (var r2 = new Uint32Array(256), n2 = 0; n2 < 256; n2++) {
      for (var i3 = n2, s2 = 0; s2 < 8; s2++)
        i3 = (1 & i3) != 0 ? 3988292384 ^ i3 >>> 1 : i3 >>> 1;
      r2[n2] = i3;
    }
  }, function(e3, t2, r2) {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.Frame = t2.APNG = void 0;
    var n2 = function() {
      function e4(e5, t3) {
        for (var r3 = 0; r3 < t3.length; r3++) {
          var n3 = t3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e5, n3.key, n3);
        }
      }
      return function(t3, r3, n3) {
        return r3 && e4(t3.prototype, r3), n3 && e4(t3, n3), t3;
      };
    }(), i3 = s2(r2(3));
    function s2(e4) {
      return e4 && e4.__esModule ? e4 : { default: e4 };
    }
    function a2(e4, t3) {
      if (!(e4 instanceof t3))
        throw new TypeError("Cannot call a class as a function");
    }
    t2.APNG = function() {
      function e4() {
        a2(this, e4), this.width = 0, this.height = 0, this.numPlays = 0, this.playTime = 0, this.frames = [];
      }
      return n2(e4, [{ key: "createImages", value: function() {
        return Promise.all(this.frames.map(function(e5) {
          return e5.createImage();
        }));
      } }, { key: "getPlayer", value: function(e5) {
        var t3 = this, r3 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        return this.createImages().then(function() {
          return new i3.default(t3, e5, r3);
        });
      } }]), e4;
    }(), t2.Frame = function() {
      function e4() {
        a2(this, e4), this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.delay = 0, this.disposeOp = 0, this.blendOp = 0, this.imageData = null, this.imageElement = null;
      }
      return n2(e4, [{ key: "createImage", value: function() {
        var e5 = this;
        return this.imageElement ? Promise.resolve() : new Promise(function(t3, r3) {
          var n3 = URL.createObjectURL(e5.imageData);
          e5.imageElement = document.createElement("img"), e5.imageElement.onload = function() {
            URL.revokeObjectURL(n3), t3();
          }, e5.imageElement.onerror = function() {
            URL.revokeObjectURL(n3), e5.imageElement = null, r3(new Error("Image creation error"));
          }, e5.imageElement.src = n3;
        });
      } }]), e4;
    }();
  }, function(e3, t2, r2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    var n2 = function() {
      function e4(e5, t3) {
        for (var r3 = 0; r3 < t3.length; r3++) {
          var n3 = t3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e5, n3.key, n3);
        }
      }
      return function(t3, r3, n3) {
        return r3 && e4(t3.prototype, r3), n3 && e4(t3, n3), t3;
      };
    }();
    function i3(e4) {
      return e4 && e4.__esModule ? e4 : { default: e4 };
    }
    function s2(e4, t3) {
      if (!(e4 instanceof t3))
        throw new TypeError("Cannot call a class as a function");
    }
    function a2(e4, t3) {
      if (!e4)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t3 || typeof t3 != "object" && typeof t3 != "function" ? e4 : t3;
    }
    function o3(e4, t3) {
      if (typeof t3 != "function" && t3 !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
      e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e4, t3) : e4.__proto__ = t3);
    }
    var u2 = function(e4) {
      function t3(e5, r3, n3) {
        s2(this, t3);
        var i4 = a2(this, (t3.__proto__ || Object.getPrototypeOf(t3)).call(this));
        return i4.playbackRate = 1, i4._currentFrameNumber = 0, i4._ended = false, i4._paused = true, i4._numPlays = 0, i4._apng = e5, i4.context = r3, i4.stop(), n3 && i4.play(), i4;
      }
      return o3(t3, e4), n2(t3, [{ key: "renderNextFrame", value: function() {
        this._currentFrameNumber = (this._currentFrameNumber + 1) % this._apng.frames.length, this._currentFrameNumber === this._apng.frames.length - 1 && (this._numPlays++, this._apng.numPlays !== 0 && this._numPlays >= this._apng.numPlays && (this._ended = true, this._paused = true)), this._prevFrame && this._prevFrame.disposeOp == 1 ? this.context.clearRect(this._prevFrame.left, this._prevFrame.top, this._prevFrame.width, this._prevFrame.height) : this._prevFrame && this._prevFrame.disposeOp == 2 && this.context.putImageData(this._prevFrameData, this._prevFrame.left, this._prevFrame.top);
        var e5 = this.currentFrame;
        this._prevFrame = e5, this._prevFrameData = null, e5.disposeOp == 2 && (this._prevFrameData = this.context.getImageData(e5.left, e5.top, e5.width, e5.height)), e5.blendOp == 0 && this.context.clearRect(e5.left, e5.top, e5.width, e5.height), this.context.drawImage(e5.imageElement, e5.left, e5.top), this.emit("frame", this._currentFrameNumber), this._ended && this.emit("end");
      } }, { key: "play", value: function() {
        var e5 = this;
        this.emit("play"), this._ended && this.stop(), this._paused = false;
        var t4 = performance.now() + this.currentFrame.delay / this.playbackRate, r3 = function r4(n3) {
          if (!e5._ended && !e5._paused) {
            if (n3 >= t4) {
              for (; n3 - t4 >= e5._apng.playTime / e5.playbackRate; )
                t4 += e5._apng.playTime / e5.playbackRate, e5._numPlays++;
              do {
                e5.renderNextFrame(), t4 += e5.currentFrame.delay / e5.playbackRate;
              } while (!e5._ended && n3 > t4);
            }
            requestAnimationFrame(r4);
          }
        };
        requestAnimationFrame(r3);
      } }, { key: "pause", value: function() {
        this._paused || (this.emit("pause"), this._paused = true);
      } }, { key: "stop", value: function() {
        this.emit("stop"), this._numPlays = 0, this._ended = false, this._paused = true, this._currentFrameNumber = -1, this.context.clearRect(0, 0, this._apng.width, this._apng.height), this.renderNextFrame();
      } }, { key: "currentFrameNumber", get: function() {
        return this._currentFrameNumber;
      } }, { key: "currentFrame", get: function() {
        return this._apng.frames[this._currentFrameNumber];
      } }, { key: "paused", get: function() {
        return this._paused;
      } }, { key: "ended", get: function() {
        return this._ended;
      } }]), t3;
    }(i3(r2(4)).default);
    t2.default = u2;
  }, function(e3, t2) {
    function r2() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }
    function n2(e4) {
      return typeof e4 == "function";
    }
    function i3(e4) {
      return typeof e4 == "number";
    }
    function s2(e4) {
      return typeof e4 == "object" && e4 !== null;
    }
    function a2(e4) {
      return e4 === void 0;
    }
    e3.exports = r2, r2.EventEmitter = r2, r2.prototype._events = void 0, r2.prototype._maxListeners = void 0, r2.defaultMaxListeners = 10, r2.prototype.setMaxListeners = function(e4) {
      if (!i3(e4) || e4 < 0 || isNaN(e4))
        throw TypeError("n must be a positive number");
      return this._maxListeners = e4, this;
    }, r2.prototype.emit = function(e4) {
      var t3, r3, i4, o3, u2, h2;
      if (this._events || (this._events = {}), e4 === "error" && (!this._events.error || s2(this._events.error) && !this._events.error.length)) {
        if ((t3 = arguments[1]) instanceof Error)
          throw t3;
        var l2 = new Error('Uncaught, unspecified "error" event. (' + t3 + ")");
        throw l2.context = t3, l2;
      }
      if (a2(r3 = this._events[e4]))
        return false;
      if (n2(r3))
        switch (arguments.length) {
          case 1:
            r3.call(this);
            break;
          case 2:
            r3.call(this, arguments[1]);
            break;
          case 3:
            r3.call(this, arguments[1], arguments[2]);
            break;
          default:
            o3 = Array.prototype.slice.call(arguments, 1), r3.apply(this, o3);
        }
      else if (s2(r3))
        for (o3 = Array.prototype.slice.call(arguments, 1), i4 = (h2 = r3.slice()).length, u2 = 0; u2 < i4; u2++)
          h2[u2].apply(this, o3);
      return true;
    }, r2.prototype.addListener = function(e4, t3) {
      var i4;
      if (!n2(t3))
        throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e4, n2(t3.listener) ? t3.listener : t3), this._events[e4] ? s2(this._events[e4]) ? this._events[e4].push(t3) : this._events[e4] = [this._events[e4], t3] : this._events[e4] = t3, s2(this._events[e4]) && !this._events[e4].warned && (i4 = a2(this._maxListeners) ? r2.defaultMaxListeners : this._maxListeners) && i4 > 0 && this._events[e4].length > i4 && (this._events[e4].warned = true, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e4].length), typeof console.trace == "function" && console.trace()), this;
    }, r2.prototype.on = r2.prototype.addListener, r2.prototype.once = function(e4, t3) {
      if (!n2(t3))
        throw TypeError("listener must be a function");
      var r3 = false;
      function i4() {
        this.removeListener(e4, i4), r3 || (r3 = true, t3.apply(this, arguments));
      }
      return i4.listener = t3, this.on(e4, i4), this;
    }, r2.prototype.removeListener = function(e4, t3) {
      var r3, i4, a3, o3;
      if (!n2(t3))
        throw TypeError("listener must be a function");
      if (!this._events || !this._events[e4])
        return this;
      if (a3 = (r3 = this._events[e4]).length, i4 = -1, r3 === t3 || n2(r3.listener) && r3.listener === t3)
        delete this._events[e4], this._events.removeListener && this.emit("removeListener", e4, t3);
      else if (s2(r3)) {
        for (o3 = a3; o3-- > 0; )
          if (r3[o3] === t3 || r3[o3].listener && r3[o3].listener === t3) {
            i4 = o3;
            break;
          }
        if (i4 < 0)
          return this;
        r3.length === 1 ? (r3.length = 0, delete this._events[e4]) : r3.splice(i4, 1), this._events.removeListener && this.emit("removeListener", e4, t3);
      }
      return this;
    }, r2.prototype.removeAllListeners = function(e4) {
      var t3, r3;
      if (!this._events)
        return this;
      if (!this._events.removeListener)
        return arguments.length === 0 ? this._events = {} : this._events[e4] && delete this._events[e4], this;
      if (arguments.length === 0) {
        for (t3 in this._events)
          t3 !== "removeListener" && this.removeAllListeners(t3);
        return this.removeAllListeners("removeListener"), this._events = {}, this;
      }
      if (n2(r3 = this._events[e4]))
        this.removeListener(e4, r3);
      else if (r3)
        for (; r3.length; )
          this.removeListener(e4, r3[r3.length - 1]);
      return delete this._events[e4], this;
    }, r2.prototype.listeners = function(e4) {
      return this._events && this._events[e4] ? n2(this._events[e4]) ? [this._events[e4]] : this._events[e4].slice() : [];
    }, r2.prototype.listenerCount = function(e4) {
      if (this._events) {
        var t3 = this._events[e4];
        if (n2(t3))
          return 1;
        if (t3)
          return t3.length;
      }
      return 0;
    }, r2.listenerCount = function(e4, t3) {
      return e4.listenerCount(t3);
    };
  }]);
}, s$9.exports = i$b();
const a$b = o$d(s$9.exports);
async function o$c(e3, t2) {
  const i3 = a$b(e3);
  if (i3 instanceof Error)
    throw i3;
  await i3.createImages(), f$7(t2);
  const { frames: s2, width: o3, height: u2 } = i3, h2 = document.createElement("canvas");
  h2.width = o3, h2.height = u2;
  const l2 = h2.getContext("2d"), c2 = [], p2 = [];
  for (const r2 of s2) {
    p2.push(n$a(r2.delay || 100));
    const e4 = r2.imageElement;
    r2.blendOp === 0 ? l2.globalCompositeOperation = "copy" : l2.globalCompositeOperation = "source-over";
    const t3 = r2.disposeOp === 2 && l2.getImageData(r2.left, r2.top, r2.width, r2.height);
    l2.drawImage(e4, r2.left, r2.top);
    const i4 = l2.getImageData(0, 0, o3, u2);
    c2.push(i4), r2.disposeOp === 0 || (r2.disposeOp === 1 ? l2.clearRect(r2.left, r2.top, r2.width, r2.height) : r2.disposeOp === 2 && l2.putImageData(t3, r2.left, r2.top));
  }
  return { frameDurations: p2, getFrame: (e4) => c2[e4], width: o3, height: u2 };
}
const u$9 = [137, 80, 78, 71, 13, 10, 26, 10];
function h$8(e3) {
  const t2 = new Uint8Array(e3);
  return !u$9.some((e4, r2) => e4 !== t2[r2]);
}
function l$f(e3) {
  if (!h$8(e3))
    return false;
  const t2 = new DataView(e3), r2 = new Uint8Array(e3);
  let n2, i3 = 8;
  do {
    const e4 = t2.getUint32(i3);
    if (n2 = String.fromCharCode.apply(String, Array.prototype.slice.call(r2.subarray(i3 + 4, i3 + 8))), n2 === "acTL")
      return true;
    i3 += 12 + e4;
  } while (n2 !== "IEND" && i3 < r2.length);
  return false;
}
var t$9 = {}, n$9 = {}, a$a = {};
Object.defineProperty(a$a, "__esModule", { value: true }), a$a.loop = a$a.conditional = a$a.parse = void 0;
var i$a = function e(r2, t2) {
  var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : n2;
  if (Array.isArray(t2))
    t2.forEach(function(t3) {
      return e(r2, t3, n2, a2);
    });
  else if (typeof t2 == "function")
    t2(r2, n2, a2, e);
  else {
    var i3 = Object.keys(t2)[0];
    Array.isArray(t2[i3]) ? (a2[i3] = {}, e(r2, t2[i3], n2, a2[i3])) : a2[i3] = t2[i3](r2, n2, a2, e);
  }
  return n2;
};
a$a.parse = i$a;
var o$b = function(e3, r2) {
  return function(t2, n2, a2, i3) {
    r2(t2, n2, a2) && i3(t2, e3, n2, a2);
  };
};
a$a.conditional = o$b;
var d$b = function(e3, r2) {
  return function(t2, n2, a2, i3) {
    for (var o3 = [], d2 = t2.pos; r2(t2, n2, a2); ) {
      var s2 = {};
      if (i3(t2, e3, n2, s2), t2.pos === d2)
        break;
      d2 = t2.pos, o3.push(s2);
    }
    return o3;
  };
};
a$a.loop = d$b;
var s$8 = {};
Object.defineProperty(s$8, "__esModule", { value: true }), s$8.readBits = s$8.readArray = s$8.readUnsigned = s$8.readString = s$8.peekBytes = s$8.readBytes = s$8.peekByte = s$8.readByte = s$8.buildStream = void 0;
var c$c = function(e3) {
  return { data: e3, pos: 0 };
};
s$8.buildStream = c$c;
var u$8 = function() {
  return function(e3) {
    return e3.data[e3.pos++];
  };
};
s$8.readByte = u$8;
var f$6 = function() {
  var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return function(r2) {
    return r2.data[r2.pos + e3];
  };
};
s$8.peekByte = f$6;
var l$e = function(e3) {
  return function(r2) {
    return r2.data.subarray(r2.pos, r2.pos += e3);
  };
};
s$8.readBytes = l$e;
var p$5 = function(e3) {
  return function(r2) {
    return r2.data.subarray(r2.pos, r2.pos + e3);
  };
};
s$8.peekBytes = p$5;
var g$6 = function(e3) {
  return function(r2) {
    return Array.from(l$e(e3)(r2)).map(function(e4) {
      return String.fromCharCode(e4);
    }).join("");
  };
};
s$8.readString = g$6;
var y$1 = function(e3) {
  return function(r2) {
    var t2 = l$e(2)(r2);
    return e3 ? (t2[1] << 8) + t2[0] : (t2[0] << 8) + t2[1];
  };
};
s$8.readUnsigned = y$1;
var v$3 = function(e3, r2) {
  return function(t2, n2, a2) {
    for (var i3 = typeof r2 == "function" ? r2(t2, n2, a2) : r2, o3 = l$e(e3), d2 = new Array(i3), s2 = 0; s2 < i3; s2++)
      d2[s2] = o3(t2);
    return d2;
  };
};
s$8.readArray = v$3;
var h$7 = function(e3, r2, t2) {
  for (var n2 = 0, a2 = 0; a2 < t2; a2++)
    n2 += e3[r2 + a2] && Math.pow(2, t2 - a2 - 1);
  return n2;
}, m$5 = function(e3) {
  return function(r2) {
    for (var t2 = u$8()(r2), n2 = new Array(8), a2 = 0; a2 < 8; a2++)
      n2[7 - a2] = !!(t2 & 1 << a2);
    return Object.keys(e3).reduce(function(r3, t3) {
      var a3 = e3[t3];
      return a3.length ? r3[t3] = h$7(n2, a3.index, a3.length) : r3[t3] = n2[a3.index], r3;
    }, {});
  };
};
s$8.readBits = m$5, function(e3) {
  Object.defineProperty(e3, "__esModule", { value: true }), e3.default = void 0;
  var r2 = a$a, t2 = s$8, n2 = { blocks: function(e4) {
    for (var r3 = 0, n3 = [], a2 = e4.data.length, i4 = 0, o4 = (0, t2.readByte)()(e4); o4 !== r3 && o4; o4 = (0, t2.readByte)()(e4)) {
      if (e4.pos + o4 >= a2) {
        var d3 = a2 - e4.pos;
        n3.push((0, t2.readBytes)(d3)(e4)), i4 += d3;
        break;
      }
      n3.push((0, t2.readBytes)(o4)(e4)), i4 += o4;
    }
    for (var s2 = new Uint8Array(i4), c3 = 0, u3 = 0; u3 < n3.length; u3++)
      s2.set(n3[u3], c3), c3 += n3[u3].length;
    return s2;
  } }, i3 = (0, r2.conditional)({ gce: [{ codes: (0, t2.readBytes)(2) }, { byteSize: (0, t2.readByte)() }, { extras: (0, t2.readBits)({ future: { index: 0, length: 3 }, disposal: { index: 3, length: 3 }, userInput: { index: 6 }, transparentColorGiven: { index: 7 } }) }, { delay: (0, t2.readUnsigned)(true) }, { transparentColorIndex: (0, t2.readByte)() }, { terminator: (0, t2.readByte)() }] }, function(e4) {
    var r3 = (0, t2.peekBytes)(2)(e4);
    return r3[0] === 33 && r3[1] === 249;
  }), o3 = (0, r2.conditional)({ image: [{ code: (0, t2.readByte)() }, { descriptor: [{ left: (0, t2.readUnsigned)(true) }, { top: (0, t2.readUnsigned)(true) }, { width: (0, t2.readUnsigned)(true) }, { height: (0, t2.readUnsigned)(true) }, { lct: (0, t2.readBits)({ exists: { index: 0 }, interlaced: { index: 1 }, sort: { index: 2 }, future: { index: 3, length: 2 }, size: { index: 5, length: 3 } }) }] }, (0, r2.conditional)({ lct: (0, t2.readArray)(3, function(e4, r3, t3) {
    return Math.pow(2, t3.descriptor.lct.size + 1);
  }) }, function(e4, r3, t3) {
    return t3.descriptor.lct.exists;
  }), { data: [{ minCodeSize: (0, t2.readByte)() }, n2] }] }, function(e4) {
    return (0, t2.peekByte)()(e4) === 44;
  }), d2 = (0, r2.conditional)({ text: [{ codes: (0, t2.readBytes)(2) }, { blockSize: (0, t2.readByte)() }, { preData: function(e4, r3, n3) {
    return (0, t2.readBytes)(n3.text.blockSize)(e4);
  } }, n2] }, function(e4) {
    var r3 = (0, t2.peekBytes)(2)(e4);
    return r3[0] === 33 && r3[1] === 1;
  }), c2 = (0, r2.conditional)({ application: [{ codes: (0, t2.readBytes)(2) }, { blockSize: (0, t2.readByte)() }, { id: function(e4, r3, n3) {
    return (0, t2.readString)(n3.blockSize)(e4);
  } }, n2] }, function(e4) {
    var r3 = (0, t2.peekBytes)(2)(e4);
    return r3[0] === 33 && r3[1] === 255;
  }), u2 = (0, r2.conditional)({ comment: [{ codes: (0, t2.readBytes)(2) }, n2] }, function(e4) {
    var r3 = (0, t2.peekBytes)(2)(e4);
    return r3[0] === 33 && r3[1] === 254;
  }), f2 = [{ header: [{ signature: (0, t2.readString)(3) }, { version: (0, t2.readString)(3) }] }, { lsd: [{ width: (0, t2.readUnsigned)(true) }, { height: (0, t2.readUnsigned)(true) }, { gct: (0, t2.readBits)({ exists: { index: 0 }, resolution: { index: 1, length: 3 }, sort: { index: 4 }, size: { index: 5, length: 3 } }) }, { backgroundColorIndex: (0, t2.readByte)() }, { pixelAspectRatio: (0, t2.readByte)() }] }, (0, r2.conditional)({ gct: (0, t2.readArray)(3, function(e4, r3) {
    return Math.pow(2, r3.lsd.gct.size + 1);
  }) }, function(e4, r3) {
    return r3.lsd.gct.exists;
  }), { frames: (0, r2.loop)([i3, c2, u2, o3, d2], function(e4) {
    var r3 = (0, t2.peekByte)()(e4);
    return r3 === 33 || r3 === 44;
  }) }];
  e3.default = f2;
}(n$9);
var x = {};
Object.defineProperty(x, "__esModule", { value: true }), x.deinterlace = void 0;
var B = function(e3, r2) {
  for (var t2 = new Array(e3.length), n2 = e3.length / r2, a2 = function(n3, a3) {
    var i4 = e3.slice(a3 * r2, (a3 + 1) * r2);
    t2.splice.apply(t2, [n3 * r2, r2].concat(i4));
  }, i3 = [0, 4, 2, 1], o3 = [8, 8, 4, 2], d2 = 0, s2 = 0; s2 < 4; s2++)
    for (var c2 = i3[s2]; c2 < n2; c2 += o3[s2])
      a2(c2, d2), d2++;
  return t2;
};
x.deinterlace = B;
var w$1 = {};
Object.defineProperty(w$1, "__esModule", { value: true }), w$1.lzw = void 0;
var b$2 = function(e3, r2, t2) {
  var n2, a2, i3, o3, d2, s2, c2, u2, f2, l2, p2, g2, y2, v2, h2, m2, x2 = 4096, B2 = -1, w2 = t2, b2 = new Array(t2), k2 = new Array(x2), A2 = new Array(x2), U2 = new Array(x2 + 1);
  for (d2 = (a2 = 1 << (l2 = e3)) + 1, n2 = a2 + 2, c2 = B2, i3 = (1 << (o3 = l2 + 1)) - 1, u2 = 0; u2 < a2; u2++)
    k2[u2] = 0, A2[u2] = u2;
  for (p2 = g2 = y2 = v2 = h2 = m2 = 0, f2 = 0; f2 < w2; ) {
    if (v2 === 0) {
      if (g2 < o3) {
        p2 += r2[m2] << g2, g2 += 8, m2++;
        continue;
      }
      if (u2 = p2 & i3, p2 >>= o3, g2 -= o3, u2 > n2 || u2 == d2)
        break;
      if (u2 == a2) {
        i3 = (1 << (o3 = l2 + 1)) - 1, n2 = a2 + 2, c2 = B2;
        continue;
      }
      if (c2 == B2) {
        U2[v2++] = A2[u2], c2 = u2, y2 = u2;
        continue;
      }
      for (s2 = u2, u2 == n2 && (U2[v2++] = y2, u2 = c2); u2 > a2; )
        U2[v2++] = A2[u2], u2 = k2[u2];
      y2 = 255 & A2[u2], U2[v2++] = y2, n2 < x2 && (k2[n2] = c2, A2[n2] = y2, (++n2 & i3) == 0 && n2 < x2 && (o3++, i3 += n2)), c2 = s2;
    }
    v2--, b2[h2++] = U2[v2], f2++;
  }
  for (f2 = h2; f2 < w2; f2++)
    b2[f2] = 0;
  return b2;
};
w$1.lzw = b$2, Object.defineProperty(t$9, "__esModule", { value: true });
var k$1 = t$9.decompressFrames = t$9.decompressFrame = C$1 = t$9.parseGIF = void 0, A = I$1(n$9), U = a$a, S$1 = s$8, z = x, _$8 = w$1;
function I$1(e3) {
  return e3 && e3.__esModule ? e3 : { default: e3 };
}
var j$3 = function(e3) {
  var r2 = new Uint8Array(e3);
  return (0, U.parse)((0, S$1.buildStream)(r2), A.default);
}, C$1 = t$9.parseGIF = j$3, M$1 = function(e3) {
  for (var r2 = e3.pixels.length, t2 = new Uint8ClampedArray(4 * r2), n2 = 0; n2 < r2; n2++) {
    var a2 = 4 * n2, i3 = e3.pixels[n2], o3 = e3.colorTable[i3] || [0, 0, 0];
    t2[a2] = o3[0], t2[a2 + 1] = o3[1], t2[a2 + 2] = o3[2], t2[a2 + 3] = i3 !== e3.transparentIndex ? 255 : 0;
  }
  return t2;
}, O$2 = function(e3, r2, t2) {
  if (e3.image) {
    var n2 = e3.image, a2 = n2.descriptor.width * n2.descriptor.height, i3 = (0, _$8.lzw)(n2.data.minCodeSize, n2.data.blocks, a2);
    n2.descriptor.lct.interlaced && (i3 = (0, z.deinterlace)(i3, n2.descriptor.width));
    var o3 = { pixels: i3, dims: { top: e3.image.descriptor.top, left: e3.image.descriptor.left, width: e3.image.descriptor.width, height: e3.image.descriptor.height } };
    return n2.descriptor.lct && n2.descriptor.lct.exists ? o3.colorTable = n2.lct : o3.colorTable = r2, e3.gce && (o3.delay = 10 * (e3.gce.delay || 10), o3.disposalType = e3.gce.extras.disposal, e3.gce.extras.transparentColorGiven && (o3.transparentIndex = e3.gce.transparentColorIndex)), t2 && (o3.patch = M$1(o3)), o3;
  }
  console.warn("gif frame does not have associated image.");
};
t$9.decompressFrame = O$2;
var T$1 = function(e3, r2) {
  return e3.frames.filter(function(e4) {
    return e4.image;
  }).map(function(t2) {
    return O$2(t2, e3.gct, r2);
  });
};
async function D$1(t2, n2) {
  const a2 = C$1(t2), i3 = k$1(a2, true), { width: o3, height: d2 } = a2.lsd, s2 = document.createElement("canvas");
  s2.width = o3, s2.height = d2;
  const c2 = s2.getContext("2d"), u2 = [], f2 = [];
  for (const l2 of i3) {
    f2.push(n$a(l2.delay || 100));
    const t3 = new ImageData(l2.patch, l2.dims.width, l2.dims.height), n3 = c$d(t3), a3 = l2.disposalType === 3 && c2.getImageData(l2.dims.left, l2.dims.top, l2.dims.width, l2.dims.height);
    c2.drawImage(n3, l2.dims.left, l2.dims.top);
    const i4 = c2.getImageData(0, 0, o3, d2);
    u2.push(i4), l2.disposalType === 1 || (l2.disposalType === 2 ? c2.clearRect(l2.dims.left, l2.dims.top, l2.dims.width, l2.dims.height) : l2.disposalType === 3 && c2.putImageData(a3, l2.dims.left, l2.dims.top));
  }
  return { frameDurations: f2, getFrame: (e3) => u2[e3], width: o3, height: d2 };
}
k$1 = t$9.decompressFrames = T$1;
const F$1 = [71, 73, 70];
function P$1(e3) {
  const r2 = new Uint8Array(e3);
  return !F$1.some((e4, t2) => e4 !== r2[t2]);
}
function G(e3) {
  if (!P$1(e3))
    return false;
  const r2 = new DataView(e3), t2 = r2.getUint8(10);
  let n2 = 13 + (128 & t2 ? 3 * 2 ** (1 + (7 & t2)) : 0), a2 = 0, i3 = false;
  for (; !i3; ) {
    switch (r2.getUint8(n2++)) {
      case 33:
        if (!o3())
          return false;
        break;
      case 44:
        d2();
        break;
      case 59:
        i3 = true;
        break;
      default:
        return false;
    }
    if (a2 > 1)
      return true;
  }
  function o3() {
    switch (r2.getUint8(n2++)) {
      case 249:
        s2();
        break;
      case 1:
        c2();
        break;
      case 254:
        u2();
        break;
      case 255:
        f2();
        break;
      default:
        return false;
    }
    return true;
  }
  function d2() {
    a2++, n2 += 8;
    const e4 = r2.getUint8(n2++);
    n2 += 128 & e4 ? 3 * 2 ** (1 + (7 & e4)) : 0, n2++, l2();
  }
  function s2() {
    n2++, n2 += 4, l2();
  }
  function c2() {
    a2++, n2++, n2 += 12, l2();
  }
  function u2() {
    l2();
  }
  function f2() {
    n2++, n2 += 8, n2 += 3, l2();
  }
  function l2() {
    let e4;
    for (; e4 = r2.getUint8(n2++); )
      n2 += e4;
  }
  return false;
}
class o$a {
  constructor() {
    this._resourceMap = new Map(), this._inFlightResourceMap = new Map(), this.geometryEngine = null;
  }
  destroy() {
    this._inFlightResourceMap.clear(), this._resourceMap.clear();
  }
  getResource(e3) {
    var _a;
    return (_a = this._resourceMap.get(e3)) != null ? _a : null;
  }
  async fetchResource(e3, t2) {
    const r2 = this._resourceMap.get(e3);
    if (r2)
      return { width: r2.width, height: r2.height };
    const i3 = this._inFlightResourceMap.get(e3);
    if (i3)
      return i3.then((e4) => ({ width: e4.width, height: e4.height }));
    const s2 = h$6(e3, t2);
    return this._inFlightResourceMap.set(e3, i3), s2.then((t3) => (this._inFlightResourceMap.delete(e3), this._resourceMap.set(e3, t3), { width: t3.width, height: t3.height }), () => ({ width: 0, height: 0 }));
  }
  deleteResource(e3) {
    this._inFlightResourceMap.delete(e3), this._resourceMap.delete(e3);
  }
}
async function c$b(i3, s2) {
  const n2 = window.URL.createObjectURL(i3);
  try {
    const { data: t2 } = await U$1(n2, __spreadProps(__spreadValues({}, s2), { responseType: "image" }));
    return t2;
  } catch (a2) {
    if (!j$4(a2))
      throw new s$a("mapview-invalid-resource", `Could not fetch requested resource at ${n2}`);
    throw a2;
  } finally {
    window.URL.revokeObjectURL(n2);
  }
}
async function h$6(e3, t2) {
  const { arrayBuffer: r2, mediaType: o3 } = await u$7(e3, t2), h2 = o3 === "image/png";
  if (o3 === "image/gif" && G(r2))
    return D$1(r2);
  if (h2 && l$f(r2))
    return o$c(r2, t2);
  return c$b(new Blob([r2], { type: o3 }), t2);
}
async function u$7(i3, s2) {
  let n2;
  const a2 = ";base64,";
  if (i3.includes(a2)) {
    const e3 = i3.indexOf(a2), t2 = i3.indexOf(a2) + a2.length, r2 = i3.substring(t2), s3 = atob(r2), o3 = new Uint8Array(s3.length);
    for (let i4 = 0; i4 < s3.length; i4++)
      o3[i4] = s3.charCodeAt(i4);
    n2 = { arrayBuffer: o3.buffer, mediaType: i3.substring(0, e3).replace("data:", "") };
  } else
    try {
      const t2 = await U$1(i3, __spreadValues({ responseType: "array-buffer" }, s2)), r2 = t2.data;
      n2 = { arrayBuffer: r2, mediaType: t2.getHeader("Content-Type") };
    } catch (o3) {
      if (!j$4(o3))
        throw new s$a("mapview-invalid-resource", `Could not fetch requested resource at ${i3}`);
    }
  return n2;
}
const l$d = 512;
class c$a {
  constructor(e3) {
    this._resourceManager = e3;
  }
  dispose() {
    this._rasterizationCanvas = null;
  }
  rasterizeJSONResource(m2, l2, c2) {
    if (this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas")), m2.type === "simple-fill" || m2.type === "esriSFS") {
      const [t2, r2, i3] = r$9(this._rasterizationCanvas, m2.style, l2);
      return { size: [r2, i3], image: new Uint32Array(t2.buffer), sdf: false, simplePattern: true, anchorX: 0, anchorY: 0, rasterizationScale: f$8(Math.ceil(l2)) };
    }
    if (m2.type === "simple-line" || m2.type === "esriSLS" || m2.type === "line" && m2.dashTemplate) {
      let e3, r2;
      if (m2.type === "simple-line" || m2.type === "esriSLS")
        switch (e3 = pe(m2.style, m2.cap), m2.cap) {
          case "butt":
            r2 = "Butt";
            break;
          case "square":
            r2 = "Square";
            break;
          default:
            r2 = "Round";
        }
      else
        e3 = m2.dashTemplate, r2 = m2.cim.capStyle;
      const [a2, n2, s2] = e$6(e3, r2);
      return { size: [n2, s2], image: new Uint32Array(a2.buffer), sdf: true, simplePattern: true, anchorX: 0, anchorY: 0 };
    }
    let f2, h2, p2, u2 = 1;
    if (m2.type === "simple-marker" || m2.type === "esriSMS" || m2.type === "line-marker" ? (f2 = oe.fromSimpleMarker(m2), p2 = r$a(f2)) : m2.cim && m2.cim.type === "CIMHatchFill" ? (f2 = oe.fromCIMHatchFill(m2.cim, l2), h2 = new t$a(f2.frame.xmin, -f2.frame.ymax, f2.frame.xmax - f2.frame.xmin, f2.frame.ymax - f2.frame.ymin), u2 = l2) : m2.cim.markerPlacement && m2.cim.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" ? (f2 = oe.fromCIMInsidePolygon(m2.cim), h2 = new t$a(f2.frame.xmin, -f2.frame.ymax, f2.frame.xmax - f2.frame.xmin, f2.frame.ymax - f2.frame.ymin)) : (f2 = m2.cim, p2 = r$a(f2)), p2 && !c2) {
      const [e3, t2, r2] = a$d(p2);
      return e3 ? { size: [t2, r2], image: new Uint32Array(e3.buffer), sdf: true, simplePattern: true, anchorX: 0, anchorY: 0, rasterizationScale: u2 } : null;
    }
    const [y2, d2, g2, C2, z2] = oe.rasterize(this._rasterizationCanvas, f2, h2, this._resourceManager, !c2);
    return y2 ? { size: [d2, g2], image: new Uint32Array(y2.buffer), sdf: false, simplePattern: false, anchorX: C2, anchorY: z2 } : null;
  }
  rasterizeImageResource(e3, t2, r2, a2) {
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas")), this._rasterizationCanvas.width = e3, this._rasterizationCanvas.height = t2;
    const i3 = this._rasterizationCanvas.getContext("2d");
    r2 instanceof ImageData ? i3.putImageData(r2, 0, 0) : (r2.setAttribute("width", `${e3}px`), r2.setAttribute("height", `${t2}px`), i3.drawImage(r2, 0, 0, e3, t2));
    const n2 = i3.getImageData(0, 0, e3, t2), s2 = new Uint8Array(n2.data);
    if (a2) {
      for (const m2 of a2)
        if (m2 && m2.oldColor && m2.oldColor.length === 4 && m2.newColor && m2.newColor.length === 4) {
          const [e4, t3, r3, a3] = m2.oldColor, [i4, n3, o4, l2] = m2.newColor;
          if (e4 === i4 && t3 === n3 && r3 === o4 && a3 === l2)
            continue;
          for (let m3 = 0; m3 < s2.length; m3 += 4)
            e4 === s2[m3] && t3 === s2[m3 + 1] && r3 === s2[m3 + 2] && a3 === s2[m3 + 3] && (s2[m3] = i4, s2[m3 + 1] = n3, s2[m3 + 2] = o4, s2[m3 + 3] = l2);
        }
    }
    let o3;
    for (let m2 = 0; m2 < s2.length; m2 += 4)
      o3 = s2[m2 + 3] / 255, s2[m2] = s2[m2] * o3, s2[m2 + 1] = s2[m2 + 1] * o3, s2[m2 + 2] = s2[m2 + 2] * o3;
    let c2 = s2, f2 = e3, h2 = t2;
    const p2 = l$d;
    if (f2 >= p2 || h2 >= p2) {
      const r3 = f2 / h2;
      r3 > 1 ? (f2 = p2, h2 = Math.round(p2 / r3)) : (h2 = p2, f2 = Math.round(p2 * r3)), c2 = new Uint8Array(4 * f2 * h2);
      const a3 = new Uint8ClampedArray(c2.buffer);
      a$c(s2, e3, t2, a3, f2, h2, false);
    }
    return { size: [f2, h2], image: new Uint32Array(c2.buffer), sdf: false, simplePattern: false, anchorX: 0, anchorY: 0 };
  }
}
const e$5 = { background: { "background.frag": "#ifdef PATTERN\nuniform lowp float u_opacity;\nuniform lowp sampler2D u_texture;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_tileTextureCoord;\n#else\nuniform lowp vec4 u_color;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main() {\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = u_opacity * color;\n#else\ngl_FragColor = u_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}", "background.vert": "precision mediump float;\nattribute vec2 a_pos;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\nuniform mediump vec4 u_tlbr;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\n#endif\nvoid main() {\ngl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);\n#ifdef PATTERN\nv_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\nv_tlbr             = u_tlbr / u_mosaicSize.xyxy;\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}" }, circle: { "circle.frag": "precision lowp float;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float dist = length(v_offset);\nmediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);\nlowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\ngl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}", "circle.vert": "precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_circleTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_antialiasingWidth;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_stroke_color = stroke_color * stroke_opacity;\nv_stroke_width = stroke_width;\nv_radius = radius;\nv_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));\nmediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\nv_offset = offset;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}" }, fill: { "fill.frag": "precision lowp float;\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = v_color[3] * color;\n#else\ngl_FragColor = v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}", "fill.vert": "precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_fillTranslation;\n#ifdef PATTERN\n#include <util/util.glsl>\nuniform mediump vec2 u_mosaicSize;\nuniform mediump float u_patternFactor;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n#ifdef PATTERN\nfloat patternWidth = nextPOT(tlbr.z - tlbr.x);\nfloat patternHeight = nextPOT(tlbr.w - tlbr.y);\nfloat scaleX = 1.0 / (patternWidth * u_patternFactor);\nfloat scaleY = 1.0 / (patternHeight * u_patternFactor);\nmat3 patterMat = mat3(scaleX, 0.0,    0.0,\n0.0,    -scaleY, 0.0,\n0.0,    0.0,    1.0);\nv_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;\nv_tlbr             = tlbr / u_mosaicSize.xyxy;\n#endif\nvec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}" }, icon: { "icon.frag": "precision mediump float;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nuniform lowp vec4 u_color;\nuniform lowp vec4 u_outlineColor;\n#endif\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump flaot v_halo_width;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\n#include <util/encoding.glsl>\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef SDF\nlowp vec4 fillPixelColor = v_color;\nfloat d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;\nconst float softEdgeRatio = 0.248062016;\nfloat size = max(v_size.x, v_size.y);\nfloat dist = d * softEdgeRatio * size;\nfillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\nif (v_halo_width > 0.25) {\nlowp vec4 outlinePixelColor = u_outlineColor;\nconst float outlineLimitRatio = (16.0 / 86.0);\nfloat clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));\noutlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\ngl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);\n}\nelse {\ngl_FragColor = v_opacity * fillPixelColor;\n}\n#else\nlowp vec4 texColor = texture2D(u_texture, v_tex);\ngl_FragColor = v_opacity * texColor;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}", "icon.vert": "attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump float v_halo_width;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_iconTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nconst float C_OFFSET_PRECISION = 1.0 / 8.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float tileCoordRatio = 1.0 / 8.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nv_color = color;\nv_opacity = opacity;\n#ifdef SDF\nv_halo_width = halo_width;\n#endif\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_opacity *= interpolatedOpacity;\nmediump float a_angle         = a_levelInfo[1];\nmediump float a_minLevel      = a_levelInfo[2];\nmediump float a_maxLevel      = a_levelInfo[3];\nmediump vec2 a_tex            = a_texAngleRange.xy;\nmediump float delta_z = 0.0;\nmediump float rotated = mod(a_angle + u_mapRotation, 256.0);\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_opacity, 0.0);\nvec2 offset = C_OFFSET_PRECISION * a_vertexOffset;\nv_size = abs(offset);\n#ifdef SDF\noffset = (120.0 / 86.0) * offset;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_tex = a_tex.xy / u_mosaicSize;\n}" }, line: { "line.frag": "precision lowp float;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nvarying mediump float v_lineHalfWidth;\nvarying lowp vec4 v_color;\nvarying mediump float v_blur;\n#if defined (PATTERN) || defined(SDF)\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\nvarying mediump float v_widthRatio;\nuniform sampler2D u_texture;\nuniform mediump float u_antialiasing;\n#endif\n#ifdef SDF\n#include <util/encoding.glsl>\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float fragDist = length(v_normal) * v_lineHalfWidth;\nlowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n#ifdef PATTERN\nmediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));\nmediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nlowp vec4 color = texture2D(u_texture, texCoord);\ngl_FragColor = alpha * v_color[3] * color;\n#elif defined(SDF)\nmediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));\nmediump float relativeTexY =  0.5 + 0.25 * v_normal.y;\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nmediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\nfloat dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);\ngl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;\n#else\ngl_FragColor = alpha * v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}", "line.vert": "precision mediump float;\nattribute vec2 a_pos;\nattribute vec4 a_extrude_offset;\nattribute vec4 a_dir_normal;\nattribute vec2 a_accumulatedDistance;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump float u_zoomFactor;\nuniform mediump vec2 u_lineTranslation;\nuniform mediump float u_antialiasing;\nuniform mediump float u_depth;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nconst float scale = 1.0 / 31.0;\nconst mediump float tileCoordRatio = 8.0;\n#if defined (SDF)\nconst mediump float sdfPatternHalfWidth = 15.5;\n#endif\n#if defined (PATTERN) || defined(SDF)\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\nvarying mediump float v_widthRatio;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvarying mediump float v_lineHalfWidth;\nvarying mediump float v_blur;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_blur = blur + u_antialiasing;\nv_normal = a_dir_normal.zw * scale;\n#if defined (PATTERN) || defined(SDF)\nv_tlbr          = tlbr / u_mosaicSize.xyxy;\nv_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);\n#if defined (PATTERN)\nv_widthRatio = width / v_patternSize.y;\n#else\nv_widthRatio = width / sdfPatternHalfWidth / 2.0;\n#endif\n#endif\nv_lineHalfWidth = (width + u_antialiasing) * 0.5;\nmediump vec2 dir = a_dir_normal.xy * scale;\nmediump vec2 offset_ = a_extrude_offset.zw * scale * offset;\nmediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n#if defined (PATTERN) || defined(SDF)\nv_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}" }, outline: { "outline.frag": "varying lowp vec4 v_color;\nvarying mediump vec2 v_normal;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = abs(v_normal.y);\nlowp float alpha = smoothstep(1.0, 0.0, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}", "outline.vert": "attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_fillTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\nvarying lowp vec2 v_normal;\nconst float scale = 1.0 / 15.0;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_normal = a_xnormal;\nmediump vec2 dist = u_outline_width * scale * a_offset;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}" }, text: { "text.frag": "uniform lowp sampler2D u_texture;\nvarying lowp vec2 v_tex;\nvarying lowp vec4 v_color;\nvarying mediump float v_edgeWidth;\nvarying mediump float v_edgeDistance;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = texture2D(u_texture, v_tex).a;\nmediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}", "text.vert": "attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_textTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying lowp vec2 v_tex;\nconst float offsetPrecision = 1.0 / 8.0;\nconst mediump float edgePos = 0.75;\nuniform mediump float u_antialiasingWidth;\nvarying mediump float v_edgeDistance;\nvarying mediump float v_edgeWidth;\nuniform lowp float u_halo;\nconst float sdfFontScale = 1.0 / 24.0;\nconst float sdfPixel = 3.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nif (u_halo > 0.5)\n{\nv_color = halo_color * opacity;\nhalo_width *= sdfPixel;\nhalo_blur *= sdfPixel;\n}\nelse\n{\nv_color = color * opacity;\nhalo_width = 0.0;\nhalo_blur = 0.0;\n}\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_color *= interpolatedOpacity;\nmediump float a_angle       = a_levelInfo[1];\nmediump float a_minLevel    = a_levelInfo[2];\nmediump float a_maxLevel    = a_levelInfo[3];\nmediump vec2 a_tex          = a_texAngleRange.xy;\nmediump float a_visMinAngle    = a_texAngleRange.z;\nmediump float a_visMaxAngle    = a_texAngleRange.w;\nmediump float delta_z = 0.0;\nmediump float angle = mod(a_angle + u_mapRotation, 256.0);\nif (a_visMinAngle < a_visMaxAngle)\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));\n}\nelse\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));\n}\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_color[3], 0.0);\nv_tex = a_tex.xy / u_mosaicSize;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_edgeDistance = edgePos - halo_width / size;\nv_edgeWidth = (u_antialiasingWidth + halo_blur) / size;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n}" }, util: { "encoding.glsl": "const vec4 rgba2float_factors = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, rgba2float_factors);\n}", "util.glsl": "float nextPOT(in float x) {\nreturn pow(2.0, ceil(log2(abs(x))));\n}" } };
function o$9(e3) {
  let o3 = e$5;
  return e3.split("/").forEach((r2) => {
    o3 && (o3 = o3[r2]);
  }), o3;
}
const t$8 = new e$7(o$9);
function n$8(r2) {
  return t$8.resolveIncludes(r2);
}
const t$7 = (e3) => n$b({ ID: e3.id, PATTERN: e3.pattern }), a$9 = { shaders: (r2) => ({ vertexShader: t$7(r2) + n$8("background/background.vert"), fragmentShader: t$7(r2) + n$8("background/background.frag") }) }, d$a = (e3) => n$b({ ID: e3.id }), i$9 = { shaders: (r2) => ({ vertexShader: d$a(r2) + n$8("circle/circle.vert"), fragmentShader: d$a(r2) + n$8("circle/circle.frag") }) }, n$7 = (e3) => n$b({ ID: e3.id, PATTERN: e3.pattern }), l$c = { shaders: (r2) => ({ vertexShader: n$7(r2) + n$8("fill/fill.vert"), fragmentShader: n$7(r2) + n$8("fill/fill.frag") }) }, s$7 = (e3) => n$b({ ID: e3.id }), f$5 = { shaders: (r2) => ({ vertexShader: s$7(r2) + n$8("outline/outline.vert"), fragmentShader: s$7(r2) + n$8("outline/outline.frag") }) }, h$5 = (e3) => n$b({ ID: e3.id, SDF: e3.sdf }), o$8 = { shaders: (r2) => ({ vertexShader: h$5(r2) + n$8("icon/icon.vert"), fragmentShader: h$5(r2) + n$8("icon/icon.frag") }) }, g$5 = (e3) => n$b({ ID: e3.id, PATTERN: e3.pattern, SDF: e3.sdf }), c$9 = { shaders: (r2) => ({ vertexShader: g$5(r2) + n$8("line/line.vert"), fragmentShader: g$5(r2) + n$8("line/line.frag") }) }, S = (e3) => n$b({ ID: e3.id }), v$2 = { shaders: (r2) => ({ vertexShader: S(r2) + n$8("text/text.vert"), fragmentShader: S(r2) + n$8("text/text.frag") }) };
class o$7 {
  constructor() {
    this._programByKey = new Map();
  }
  dispose() {
    this._programByKey.forEach((e3) => e3.dispose()), this._programByKey.clear();
  }
  getMaterialProgram(e3, r2, t2) {
    const a2 = r2.key << 3 | this._getMaterialOptionsValue(r2.type, t2);
    if (this._programByKey.has(a2))
      return this._programByKey.get(a2);
    const s2 = this._getProgramTemplate(r2.type), { shaders: n2 } = s2, { vertexShader: c2, fragmentShader: i3 } = n2(t2), o3 = r2.getShaderHeader(), u2 = r2.getShaderMain(), p2 = c2.replace("#pragma header", o3).replace("#pragma main", u2), g2 = e3.programCache.acquire(p2, i3, r2.getAttributeLocations());
    return this._programByKey.set(a2, g2), g2;
  }
  _getMaterialOptionsValue(r2, t2) {
    switch (r2) {
      case T$2.BACKGROUND: {
        const e3 = t2;
        return (e3.pattern ? 1 : 0) << 1 | (e3.id ? 1 : 0);
      }
      case T$2.FILL: {
        const e3 = t2;
        return (e3.pattern ? 1 : 0) << 1 | (e3.id ? 1 : 0);
      }
      case T$2.OUTLINE:
        return t2.id ? 1 : 0;
      case T$2.LINE: {
        const e3 = t2;
        return (e3.sdf ? 1 : 0) << 2 | (e3.pattern ? 1 : 0) << 1 | (e3.id ? 1 : 0);
      }
      case T$2.ICON: {
        const e3 = t2;
        return (e3.sdf ? 1 : 0) << 1 | (e3.id ? 1 : 0);
      }
      case T$2.CIRCLE:
        return t2.id ? 1 : 0;
      case T$2.TEXT:
        return t2.id ? 1 : 0;
      default:
        return 0;
    }
  }
  _getProgramTemplate(o3) {
    switch (o3) {
      case T$2.BACKGROUND:
        return a$9;
      case T$2.CIRCLE:
        return i$9;
      case T$2.FILL:
        return l$c;
      case T$2.ICON:
        return o$8;
      case T$2.LINE:
        return c$9;
      case T$2.OUTLINE:
        return f$5;
      case T$2.TEXT:
        return v$2;
      default:
        return null;
    }
  }
}
const e$4 = { shaders: { vertexShader: n$c("bitBlit/bitBlit.vert"), fragmentShader: n$c("bitBlit/bitBlit.frag") }, attributes: new Map([["a_pos", 0], ["a_tex", 1]]) };
class _$7 {
  constructor() {
    this._initialized = false;
  }
  dispose() {
    this._program = a$e(this._program), this._vertexArrayObject = a$e(this._vertexArrayObject);
  }
  render(r2, t2, e3, i3) {
    r2 && (this._initialized || this._initialize(r2), r2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), r2.bindVAO(this._vertexArrayObject), r2.useProgram(this._program), t2.setSamplingMode(e3), r2.bindTexture(t2, 0), this._program.setUniform1i("u_tex", 0), this._program.setUniform1f("u_opacity", i3), r2.drawArrays(E.TRIANGLE_STRIP, 0, 4), r2.bindTexture(null, 0), r2.bindVAO());
  }
  _initialize(r2) {
    if (this._initialized)
      return true;
    const s2 = e$8(r2, e$4);
    if (!s2)
      return false;
    const o3 = new Int8Array(16);
    o3[0] = -1, o3[1] = -1, o3[2] = 0, o3[3] = 0, o3[4] = 1, o3[5] = -1, o3[6] = 1, o3[7] = 0, o3[8] = -1, o3[9] = 1, o3[10] = 0, o3[11] = 1, o3[12] = 1, o3[13] = 1, o3[14] = 1, o3[15] = 1;
    const _2 = e$4.attributes, p2 = new a$f(r2, _2, t$b, { geometry: E$1.createVertex(r2, F$2.STATIC_DRAW, o3) });
    return this._program = s2, this._vertexArrayObject = p2, this._initialized = true, true;
  }
}
const a$8 = (r2) => r2 === I$2.HITTEST || r2 === I$2.LABEL_ALPHA, s$6 = (r2) => (a$8(r2) ? 1 : 0) | (r2 === I$2.HIGHLIGHT ? 2 : 0), o$6 = ({ rendererInfo: e3, drawPhase: t2 }, a2, o3, i3) => `${a2.getVariationHash()}-${i3.join(".")}-${s$6(t2)}-${e3.getVariationHash()}-${r$b(o3) && o3.join(".")}`, i$8 = (t2, s2, o3, i3) => {
  const h2 = i3.reduce((r2, e3) => __spreadProps(__spreadValues({}, r2), { [e3]: t2.context.driverTest[e3] }), {}), n2 = __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, s2.getVariation()), t2.rendererInfo.getVariation()), { highlight: t2.drawPhase === I$2.HIGHLIGHT, id: a$8(t2.drawPhase) }), h2);
  if (r$b(o3))
    for (const r2 of o3)
      n2[r2] = true;
  return n2;
};
class h$4 {
  constructor(r2) {
    this._rctx = r2, this._programByKey = new Map();
  }
  dispose() {
    this._programByKey.forEach((r2) => r2.dispose()), this._programByKey.clear();
  }
  getProgram(r2, e3 = [], a2 = []) {
    const s2 = r2.vsPath + "." + r2.fsPath + JSON.stringify(e3) + a2.join(".");
    if (this._programByKey.has(s2))
      return this._programByKey.get(s2);
    const o3 = a2.reduce((r3, e4) => __spreadProps(__spreadValues({}, r3), { [e4]: this._rctx.driverTest[e4] }), {}), i3 = __spreadValues(__spreadValues({}, e3.map((r3) => typeof r3 == "string" ? { name: r3, value: true } : r3).reduce((r3, e4) => __spreadProps(__spreadValues({}, r3), { [e4.name]: e4.value }), {})), o3), { vsPath: h2, fsPath: n2, attributes: g2 } = r2, m2 = o$e(h2, n2, g2, i3), c2 = this._rctx.programCache.acquire(m2.shaders.vertexShader, m2.shaders.fragmentShader, m2.attributes);
    if (!c2)
      throw new Error("Unable to get program for key: ${key}");
    return this._programByKey.set(s2, c2), c2;
  }
  getMaterialProgram(r2, e3, a2, s2, h2, n2 = ["ignoresSamplerPrecision"]) {
    const g2 = o$6(r2, e3, h2, n2);
    if (this._programByKey.has(g2))
      return this._programByKey.get(g2);
    const m2 = i$8(r2, e3, h2, n2), c2 = o$e(a2, a2, s2, m2), y2 = this._rctx.programCache.acquire(c2.shaders.vertexShader, c2.shaders.fragmentShader, c2.attributes);
    if (!y2)
      throw new Error("Unable to get program for key: ${key}");
    return this._programByKey.set(g2, y2), y2;
  }
}
class t$6 {
  constructor(t2, e3) {
    this._width = 0, this._height = 0, this._free = [], this._width = t2, this._height = e3, this._free.push(new t$c(0, 0, t2, e3));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(t2, e3) {
    if (t2 > this._width || e3 > this._height)
      return new t$c();
    let i3 = null, s2 = -1;
    for (let h2 = 0; h2 < this._free.length; ++h2) {
      const r2 = this._free[h2];
      t2 <= r2.width && e3 <= r2.height && (i3 === null || r2.y <= i3.y && r2.x <= i3.x) && (i3 = r2, s2 = h2);
    }
    return i3 === null ? new t$c() : (this._free.splice(s2, 1), i3.width < i3.height ? (i3.width > t2 && this._free.push(new t$c(i3.x + t2, i3.y, i3.width - t2, e3)), i3.height > e3 && this._free.push(new t$c(i3.x, i3.y + e3, i3.width, i3.height - e3))) : (i3.width > t2 && this._free.push(new t$c(i3.x + t2, i3.y, i3.width - t2, i3.height)), i3.height > e3 && this._free.push(new t$c(i3.x, i3.y + e3, t2, i3.height - e3))), new t$c(i3.x, i3.y, t2, e3));
  }
  release(h2) {
    for (let t2 = 0; t2 < this._free.length; ++t2) {
      const e3 = this._free[t2];
      if (e3.y === h2.y && e3.height === h2.height && e3.x + e3.width === h2.x)
        e3.width += h2.width;
      else if (e3.x === h2.x && e3.width === h2.width && e3.y + e3.height === h2.y)
        e3.height += h2.height;
      else if (h2.y === e3.y && h2.height === e3.height && h2.x + h2.width === e3.x)
        e3.x = h2.x, e3.width += h2.width;
      else {
        if (h2.x !== e3.x || h2.width !== e3.width || h2.y + h2.height !== e3.y)
          continue;
        e3.y = h2.y, e3.height += h2.height;
      }
      this._free.splice(t2, 1), this.release(h2);
    }
    this._free.push(h2);
  }
}
const a$7 = 256, n$6 = (t2) => Math.floor(t2 / 256);
function c$8(t2) {
  const e3 = new Set();
  for (const i3 of t2)
    e3.add(n$6(i3));
  return e3;
}
function o$5(e3, i3, h2) {
  return e3.has(i3) || e3.set(i3, h2().then(() => {
    e3.delete(i3);
  }).catch((h3) => {
    e3.delete(i3), b$3(h3);
  })), e3.get(i3);
}
const l$b = (t2) => ({ rect: new t$c(0, 0, 0, 0), page: 0, metrics: { left: 0, width: 0, height: 0, advance: 0, top: 0 }, code: t2, sdf: true });
class g$4 {
  constructor(t2, e3, h2) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphCache = {}, this._textures = [], this._rangePromises = new Map(), this.width = t2, this.height = e3, this._glyphSource = h2, this._binPack = new t$6(t2 - 4, e3 - 4), this._glyphData.push(new Uint8Array(t2 * e3)), this._dirties.push(true), this._textures.push(null), this._initDecorationGlyph();
  }
  dispose() {
    this._binPack = null;
    for (const t2 of this._textures)
      t2 && t2.dispose();
    this._textures.length = 0, this._glyphData.length = 0;
  }
  _initDecorationGlyph() {
    const t2 = [117, 149, 181, 207, 207, 181, 149, 117], e3 = [];
    for (let h2 = 0; h2 < t2.length; h2++) {
      const i4 = t2[h2];
      for (let t3 = 0; t3 < 11; t3++)
        e3.push(i4);
    }
    const i3 = { metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 }, bitmap: new Uint8Array(e3) };
    this._recordGlyph(i3);
  }
  async getGlyphItems(t2, e3, i3) {
    const h2 = this._getGlyphCache(t2);
    return await this._fetchRanges(t2, e3, i3), e3.map((e4) => this._getMosaicItem(h2, t2, e4));
  }
  bind(t2, e3, i3, h2) {
    const s2 = this._getTexture(t2, i3);
    s2.setSamplingMode(e3), this._dirties[i3] && (s2.setData(this._glyphData[i3]), this._dirties[i3] = false), t2.bindTexture(s2, h2);
  }
  _getGlyphCache(t2) {
    return this._glyphCache[t2] || (this._glyphCache[t2] = {}), this._glyphCache[t2];
  }
  _getTexture(t2, e3) {
    return this._textures[e3] || (this._textures[e3] = new E$2(t2, { pixelFormat: P$2.ALPHA, dataType: G$1.UNSIGNED_BYTE, width: this.width, height: this.height }, new Uint8Array(this.width * this.height))), this._textures[e3];
  }
  _invalidate() {
    this._dirties[this._currentPage] = true;
  }
  async _fetchRanges(t2, e3, i3) {
    const h2 = c$8(e3), s2 = [];
    h2.forEach((e4) => {
      s2.push(this._fetchRange(t2, e4, i3));
    }), await Promise.all(s2);
  }
  async _fetchRange(t2, e3, i3) {
    if (e3 > a$7)
      return null;
    const h2 = t2 + e3;
    return o$5(this._rangePromises, h2, () => this._glyphSource.getRange(t2, e3, i3));
  }
  _getMosaicItem(t2, e3, i3) {
    if (!t2[i3]) {
      const h2 = this._glyphSource.getGlyph(e3, i3);
      if (!h2 || !h2.metrics)
        return l$b(i3);
      const s2 = this._recordGlyph(h2), r2 = this._currentPage, a2 = h2.metrics;
      t2[i3] = { rect: s2, page: r2, metrics: a2, code: i3, sdf: true }, this._invalidate();
    }
    return t2[i3];
  }
  _recordGlyph(t2) {
    const h2 = t2.metrics;
    let s2;
    if (h2.width === 0)
      s2 = new t$c(0, 0, 0, 0);
    else {
      const e3 = 3, r2 = h2.width + 2 * e3, a2 = h2.height + 2 * e3;
      s2 = this._binPack.allocate(r2, a2), s2.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(true), this._textures.push(null), this._initDecorationGlyph(), this._binPack = new t$6(this.width - 4, this.height - 4), s2 = this._binPack.allocate(r2, a2));
      const n2 = this._glyphData[this._currentPage], c2 = t2.bitmap;
      let o3, l2;
      if (c2)
        for (let t3 = 0; t3 < a2; t3++) {
          o3 = r2 * t3, l2 = this.width * (s2.y + t3) + s2.x;
          for (let t4 = 0; t4 < r2; t4++)
            n2[l2 + t4] = c2[o3 + t4];
        }
      has("esri-glyph-debug") && this._showDebugPage(n2);
    }
    return s2;
  }
  _showDebugPage(t2) {
    const e3 = document.createElement("canvas"), i3 = e3.getContext("2d"), h2 = new ImageData(this.width, this.height), s2 = h2.data;
    e3.width = this.width, e3.height = this.height, e3.style.border = "1px solid black";
    for (let r2 = 0; r2 < t2.length; ++r2)
      s2[4 * r2 + 0] = t2[r2], s2[4 * r2 + 1] = 0, s2[4 * r2 + 2] = 0, s2[4 * r2 + 3] = 255;
    i3.putImageData(h2, 0, 0), document.body.appendChild(e3);
  }
}
class s$5 {
  constructor(t2) {
    for (this._metrics = [], this._bitmaps = []; t2.next(); )
      switch (t2.tag()) {
        case 1: {
          const e3 = t2.getMessage();
          for (; e3.next(); )
            switch (e3.tag()) {
              case 3: {
                const t3 = e3.getMessage();
                let s2, a2, r2, n2, i3, c2, g2;
                for (; t3.next(); )
                  switch (t3.tag()) {
                    case 1:
                      s2 = t3.getUInt32();
                      break;
                    case 2:
                      a2 = t3.getBytes();
                      break;
                    case 3:
                      r2 = t3.getUInt32();
                      break;
                    case 4:
                      n2 = t3.getUInt32();
                      break;
                    case 5:
                      i3 = t3.getSInt32();
                      break;
                    case 6:
                      c2 = t3.getSInt32();
                      break;
                    case 7:
                      g2 = t3.getUInt32();
                      break;
                    default:
                      t3.skip();
                  }
                t3.release(), s2 && (this._metrics[s2] = { width: r2, height: n2, left: i3, top: c2, advance: g2 }, this._bitmaps[s2] = a2);
                break;
              }
              default:
                e3.skip();
            }
          e3.release();
          break;
        }
        default:
          t2.skip();
      }
  }
  getMetrics(t2) {
    return this._metrics[t2];
  }
  getBitmap(t2) {
    return this._bitmaps[t2];
  }
}
class a$6 {
  constructor() {
    this._ranges = [];
  }
  getRange(t2) {
    return this._ranges[t2];
  }
  addRange(t2, e3) {
    this._ranges[t2] = e3;
  }
}
class r$8 {
  constructor(t2) {
    this._glyphInfo = {}, this._baseURL = t2;
  }
  getRange(a2, r2, n2) {
    const i3 = this._getFontStack(a2);
    if (i3.getRange(r2))
      return Promise.resolve();
    const c2 = 256 * r2, g2 = c2 + 255, o3 = this._baseURL.replace("{fontstack}", a2).replace("{range}", c2 + "-" + g2);
    return U$1(o3, __spreadValues({ responseType: "array-buffer" }, n2)).then((t2) => {
      i3.addRange(r2, new s$5(new n$d(new Uint8Array(t2.data), new DataView(t2.data))));
    });
  }
  getGlyph(t2, e3) {
    const s2 = this._getFontStack(t2);
    if (!s2)
      return;
    const a2 = Math.floor(e3 / 256);
    if (a2 > 256)
      return;
    const r2 = s2.getRange(a2);
    return r2 ? { metrics: r2.getMetrics(e3), bitmap: r2.getBitmap(e3) } : void 0;
  }
  _getFontStack(t2) {
    let e3 = this._glyphInfo[t2];
    return e3 || (e3 = this._glyphInfo[t2] = new a$6()), e3;
  }
}
const i$7 = 1e20;
class r$7 {
  constructor(t2) {
    this._svg = null, this.size = t2;
    const e3 = document.createElement("canvas");
    e3.width = e3.height = t2, this._context = e3.getContext("2d"), this._gridOuter = new Float64Array(t2 * t2), this._gridInner = new Float64Array(t2 * t2), this._f = new Float64Array(t2), this._d = new Float64Array(t2), this._z = new Float64Array(t2 + 1), this._v = new Int16Array(t2);
  }
  dispose() {
    this._context = this._gridOuter = this._gridInner = this._f = this._d = this._z = this._v = null, this._svg && (document.body.removeChild(this._svg), this._svg = null);
  }
  draw(r2, h2, n2 = 31) {
    this._initSVG();
    const o3 = this.createSVGString(r2);
    return new Promise((r3, a2) => {
      const d2 = new Image();
      d2.src = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(o3), d2.onload = () => {
        d2.onload = null, this._context.clearRect(0, 0, this.size, this.size), this._context.drawImage(d2, 0, 0, this.size, this.size);
        const e3 = this._context.getImageData(0, 0, this.size, this.size), s2 = new Uint8Array(this.size * this.size * 4);
        for (let t2 = 0; t2 < this.size * this.size; t2++) {
          const s3 = e3.data[4 * t2 + 3] / 255;
          this._gridOuter[t2] = s3 === 1 ? 0 : s3 === 0 ? i$7 : Math.max(0, 0.5 - s3) ** 2, this._gridInner[t2] = s3 === 1 ? i$7 : s3 === 0 ? 0 : Math.max(0, s3 - 0.5) ** 2;
        }
        this._edt(this._gridOuter, this.size, this.size), this._edt(this._gridInner, this.size, this.size);
        for (let i3 = 0; i3 < this.size * this.size; i3++) {
          const e4 = this._gridOuter[i3] - this._gridInner[i3];
          o$f(0.5 - e4 / (2 * n2), s2, 4 * i3);
        }
        r3(s2);
      };
      const l2 = h2 && h2.signal;
      l2 && v$4(l2, () => a2(a$g()));
    });
  }
  _initSVG() {
    if (!this._svg) {
      const t2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      t2.setAttribute("style", "position: absolute;"), t2.setAttribute("width", "0"), t2.setAttribute("height", "0"), t2.setAttribute("aria-hidden", "true"), t2.setAttribute("role", "presentation"), document.body.appendChild(t2), this._svg = t2;
    }
    return this._svg;
  }
  createSVGString(t2) {
    const e3 = this._initSVG(), s2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    s2.setAttribute("d", t2), e3.appendChild(s2);
    const i3 = s2.getBBox(), r2 = i3.width / i3.height, h2 = this.size / 2;
    let n2, o3, a2, d2;
    if (r2 > 1) {
      o3 = n2 = h2 / i3.width;
      const t3 = h2 * (1 / r2);
      a2 = this.size / 4, d2 = h2 - t3 / 2;
    } else {
      n2 = o3 = h2 / i3.height;
      a2 = h2 - h2 * r2 / 2, d2 = this.size / 4;
    }
    const l2 = -i3.x * n2 + a2, _2 = -i3.y * o3 + d2;
    s2.setAttribute("style", `transform: matrix(${n2}, 0, 0, ${o3}, ${l2}, ${_2})`);
    const g2 = `<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${e3.innerHTML}</svg>`;
    return e3.removeChild(s2), g2;
  }
  _edt(t2, e3, s2) {
    const i3 = this._f, r2 = this._d, h2 = this._v, n2 = this._z;
    for (let o3 = 0; o3 < e3; o3++) {
      for (let r3 = 0; r3 < s2; r3++)
        i3[r3] = t2[r3 * e3 + o3];
      this._edt1d(i3, r2, h2, n2, s2);
      for (let i4 = 0; i4 < s2; i4++)
        t2[i4 * e3 + o3] = r2[i4];
    }
    for (let o3 = 0; o3 < s2; o3++) {
      for (let s3 = 0; s3 < e3; s3++)
        i3[s3] = t2[o3 * e3 + s3];
      this._edt1d(i3, r2, h2, n2, e3);
      for (let s3 = 0; s3 < e3; s3++)
        t2[o3 * e3 + s3] = Math.sqrt(r2[s3]);
    }
  }
  _edt1d(t2, e3, s2, r2, h2) {
    s2[0] = 0, r2[0] = -i$7, r2[1] = +i$7;
    for (let n2 = 1, o3 = 0; n2 < h2; n2++) {
      let e4 = (t2[n2] + n2 * n2 - (t2[s2[o3]] + s2[o3] * s2[o3])) / (2 * n2 - 2 * s2[o3]);
      for (; e4 <= r2[o3]; )
        o3--, e4 = (t2[n2] + n2 * n2 - (t2[s2[o3]] + s2[o3] * s2[o3])) / (2 * n2 - 2 * s2[o3]);
      o3++, s2[o3] = n2, r2[o3] = e4, r2[o3 + 1] = +i$7;
    }
    for (let i3 = 0, n2 = 0; i3 < h2; i3++) {
      for (; r2[n2 + 1] < i3; )
        n2++;
      e3[i3] = (i3 - s2[n2]) * (i3 - s2[n2]) + t2[s2[n2]];
    }
  }
}
function g$3(t2) {
  return t2 && t2.type === "static";
}
class p$4 {
  constructor(t2, e3, i3 = 0) {
    this._mosaicPages = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = new Map(), this._spriteCopyQueue = [], this.pixelRatio = 1, (t2 <= 0 || e3 <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = t2, this._pageHeight = e3, i3 > 0 && (this._maxItemSize = i3), this.pixelRatio = window.devicePixelRatio || 1, this._binPack = new t$6(this._pageWidth, this._pageHeight);
    const s2 = Math.floor(this._pageWidth), r2 = Math.floor(this._pageHeight);
    this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(s2 * r2) }, size: [this._pageWidth, this._pageHeight], dirty: true, texture: void 0 });
  }
  getWidth(t2) {
    return t2 >= this._mosaicPages.length ? -1 : this._mosaicPages[t2].size[0];
  }
  getHeight(t2) {
    return t2 >= this._mosaicPages.length ? -1 : this._mosaicPages[t2].size[1];
  }
  getPageTexture(t2) {
    return t2 < this._mosaicPages.length ? this._mosaicPages[t2].texture : null;
  }
  has(t2) {
    return this._mosaicRects.has(t2);
  }
  get itemCount() {
    return this._mosaicRects.size;
  }
  getSpriteItem(t2) {
    return this._mosaicRects.get(t2);
  }
  addSpriteItem(t2, i3, a2, r2, o3, h2, c2 = 1) {
    if (this._mosaicRects.has(t2))
      return this._mosaicRects.get(t2);
    let n2, p2, m2;
    if (g$3(a2))
      [n2, p2, m2] = this._allocateImage(i3[0], i3[1]);
    else {
      n2 = new t$c(0, 0, i3[0], i3[1]), p2 = this._mosaicPages.length;
      const t3 = void 0;
      this._mosaicPages.push({ mosaicsData: a2, size: [i3[0] + 2 * et, i3[1] + 2 * et], dirty: true, texture: t3 });
    }
    if (n2.width <= 0 || n2.height <= 0)
      return null;
    const _2 = { rect: n2, width: i3[0], height: i3[1], sdf: o3, simplePattern: h2, pixelRatio: c2, page: p2 };
    return this._mosaicRects.set(t2, _2), g$3(a2) && this._copy({ rect: n2, spriteSize: i3, spriteData: a2.data, page: p2, pageSize: m2, repeat: r2, sdf: o3 }), _2;
  }
  hasItemsToProcess() {
    return this._spriteCopyQueue.length !== 0;
  }
  processNextItem() {
    const t2 = this._spriteCopyQueue.pop();
    t2 && this._copy(t2);
  }
  getSpriteItems(t2) {
    const e3 = {};
    for (const i3 of t2)
      e3[i3] = this.getSpriteItem(i3);
    return e3;
  }
  getMosaicItemPosition(t2) {
    const i3 = this.getSpriteItem(t2), s2 = i3 && i3.rect;
    if (!s2)
      return null;
    s2.width = i3.width, s2.height = i3.height;
    const a2 = i3.width, r2 = i3.height, o3 = et, h2 = this._mosaicPages[i3.page];
    return { size: [i3.width, i3.height], tl: [(s2.x + o3) / h2[0], (s2.y + o3) / h2[1]], br: [(s2.x + o3 + a2) / h2[0], (s2.y + o3 + r2) / h2[1]], page: i3.page };
  }
  bind(t2, e3, i3 = 0, s2 = 0) {
    const a2 = this._mosaicPages[i3], r2 = a2.mosaicsData;
    let o3 = a2.texture;
    if (o3 || (o3 = m$4(t2, r2, a2.size), a2.texture = o3), o3.setSamplingMode(e3), g$3(r2))
      t2.bindTexture(o3, s2), a2.dirty && (o3.setData(new Uint8Array(r2.data.buffer)), o3.generateMipmap());
    else {
      r2.data.bindFrame(t2, o3, s2);
    }
    a2.dirty = false;
  }
  static _copyBits(t2, e3, i3, s2, a2, r2, o3, h2, c2, n2, g2) {
    let p2 = s2 * e3 + i3, m2 = h2 * r2 + o3;
    if (g2) {
      m2 -= r2;
      for (let o4 = -1; o4 <= n2; o4++, p2 = ((o4 + n2) % n2 + s2) * e3 + i3, m2 += r2)
        for (let e4 = -1; e4 <= c2; e4++)
          a2[m2 + e4] = t2[p2 + (e4 + c2) % c2];
    } else
      for (let _2 = 0; _2 < n2; _2++) {
        for (let e4 = 0; e4 < c2; e4++)
          a2[m2 + e4] = t2[p2 + e4];
        p2 += e3, m2 += r2;
      }
  }
  _copy(i3) {
    if (i3.page >= this._mosaicPages.length)
      return;
    const s2 = this._mosaicPages[i3.page], a2 = s2.mosaicsData;
    if (!g$3(s2.mosaicsData))
      throw new s$a("mapview-invalid-resource", "unsuitable data type!");
    const r2 = i3.spriteData, o3 = a2.data;
    o3 && r2 || console.error("Source or target images are uninitialized!"), p$4._copyBits(r2, i3.spriteSize[0], 0, 0, o3, i3.pageSize[0], i3.rect.x + et, i3.rect.y + et, i3.spriteSize[0], i3.spriteSize[1], i3.repeat), s2.dirty = true;
  }
  _allocateImage(t2, r2) {
    t2 += 2 * et, r2 += 2 * et;
    const o3 = Math.max(t2, r2);
    if (this._maxItemSize && this._maxItemSize < o3) {
      const e3 = 2 ** Math.ceil(P$3(t2)), a2 = 2 ** Math.ceil(P$3(r2)), o4 = new t$c(0, 0, t2, r2);
      return this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(e3 * a2) }, size: [e3, a2], dirty: true, texture: void 0 }), [o4, this._mosaicPages.length - 1, [e3, a2]];
    }
    const h2 = this._binPack.allocate(t2, r2);
    if (h2.width <= 0) {
      const e3 = this._mosaicPages[this._currentPage];
      return !e3.dirty && g$3(e3.mosaicsData) && (e3.mosaicsData.data = null), this._currentPage = this._mosaicPages.length, this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(this._pageWidth * this._pageHeight) }, size: [this._pageWidth, this._pageHeight], dirty: true, texture: void 0 }), this._binPack = new t$6(this._pageWidth, this._pageHeight), this._allocateImage(t2, r2);
    }
    return [h2, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  dispose() {
    this._binPack = null;
    for (const t2 of this._mosaicPages) {
      const e3 = t2.texture;
      e3 && e3.dispose();
      const i3 = t2.mosaicsData;
      if (!g$3(i3)) {
        i3.data.destroy();
      }
    }
    this._mosaicPages = null, this._mosaicRects.clear();
  }
}
function m$4(t2, e3, i3) {
  return g$3(e3) ? new E$2(t2, { pixelFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, width: i3[0], height: i3[1] }, new Uint8Array(e3.data.buffer)) : new E$2(t2, { pixelFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, samplingMode: L.LINEAR, wrapMode: D$2.CLAMP_TO_EDGE, width: i3[0], height: i3[1] }, null);
}
function a$5(e3) {
  return n$a(e3.frameDurations.reduce((t2, e4) => t2 + e4, 0));
}
function n$5(t2) {
  const { width: e3, height: r2 } = t2;
  return { frameDurations: t2.frameDurations.reverse(), getFrame: (e4) => {
    const r3 = t2.frameDurations.length - 1 - e4;
    return t2.getFrame(r3);
  }, width: e3, height: r2 };
}
function s$4(e3, r2) {
  const { width: i3, height: n2, getFrame: s2 } = e3, o3 = r2 / a$5(e3);
  return { frameDurations: e3.frameDurations.map((e4) => n$a(e4 * o3)), getFrame: s2, width: i3, height: n2 };
}
function o$4(e3, r2) {
  const { width: i3, height: a2, getFrame: n2 } = e3, s2 = e3.frameDurations.slice(), o3 = s2.shift();
  return s2.unshift(n$a(o3 + r2)), { frameDurations: s2, getFrame: n2, width: i3, height: a2 };
}
function m$3(e3, r2) {
  const { width: i3, height: a2, getFrame: n2 } = e3, s2 = e3.frameDurations.slice(), o3 = s2.pop();
  return s2.push(n$a(o3 + r2)), { frameDurations: s2, getFrame: n2, width: i3, height: a2 };
}
class h$3 {
  constructor(t2, e3, r2, i3) {
    this._animation = t2, this._repeatType = r2, this._onFrameData = i3, this._direction = 1, this._currentFrame = 0, this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    let a2 = 0;
    for (; e3 > a2; )
      a2 += this.timeToFrame, this.nextFrame();
    const n2 = this._animation.getFrame(this._currentFrame);
    this._onFrameData(n2);
  }
  nextFrame() {
    if (this._currentFrame += this._direction, this._direction > 0) {
      if (this._currentFrame === this._animation.frameDurations.length)
        switch (this._repeatType) {
          case d$c.None:
            this._currentFrame -= this._direction;
            break;
          case d$c.Loop:
            this._currentFrame = 0;
            break;
          case d$c.Oscillate:
            this._currentFrame -= this._direction, this._direction = -1;
        }
    } else if (this._currentFrame === -1)
      switch (this._repeatType) {
        case d$c.None:
          this._currentFrame -= this._direction;
          break;
        case d$c.Loop:
          this._currentFrame = this._animation.frameDurations.length - 1;
          break;
        case d$c.Oscillate:
          this._currentFrame -= this._direction, this._direction = 1;
      }
    this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    const t2 = this._animation.getFrame(this._currentFrame);
    this._onFrameData(t2);
  }
}
function c$7(c2, u2, f2, l2) {
  let _2, { repeatType: F2 } = u2;
  if (F2 == null && (F2 = d$c.Loop), u2.reverseAnimation === true && (c2 = n$5(c2)), u2.duration != null && (c2 = s$4(c2, n$a(1e3 * u2.duration))), u2.repeatDelay != null) {
    const r2 = 1e3 * u2.repeatDelay;
    F2 === d$c.Loop ? c2 = m$3(c2, n$a(r2)) : F2 === d$c.Oscillate && (c2 = o$4(m$3(c2, n$a(r2 / 2)), n$a(r2 / 2)));
  }
  if (u2.startTimeOffset != null)
    _2 = n$a(1e3 * u2.startTimeOffset);
  else if (u2.randomizeStartTime != null) {
    const e3 = o$g(f2), n2 = 82749913, s2 = u2.randomizeStartSeed != null ? u2.randomizeStartSeed : n2, o3 = e$9(e3, s2);
    _2 = n$a(o3 * a$5(c2));
  } else
    _2 = n$a(0);
  return new h$3(c2, _2, F2, l2);
}
function u$6(t2, e3, r2, i3) {
  const a2 = e3.playAnimation == null || e3.playAnimation, n2 = c$7(t2, e3, r2, i3);
  let s2, o3 = n2.timeToFrame;
  function m2() {
    s2 = a2 && setTimeout(() => {
      n2.nextFrame(), o3 = n2.timeToFrame, m2();
    }, o3);
  }
  return m2(), { remove: () => {
    a2 && clearTimeout(s2);
  } };
}
class e$3 {
  constructor(t2, a2, e3, s2) {
    this._animation = t2, this._frameData = null;
    const h2 = (t3) => {
      this._frameData = t3, a2.requestRender();
    };
    this.frameCount = this._animation.frameDurations.length, this.width = this._animation.width, this.height = this._animation.height, this._playHandle = u$6(this._animation, e3, s2, h2);
  }
  destroy() {
    this._playHandle.remove();
  }
  bindFrame(i3, e3, s2) {
    i3.bindTexture(e3, s2), t$d(this._frameData) || (e3.updateData(0, et, et, this._frameData.width, this._frameData.height, this._frameData), this._frameData = null);
  }
}
function e$2(e3) {
  switch (e3.type) {
    case "esriSMS":
      return `${e3.style}.${e3.path}`;
    case "esriSLS":
      return `${e3.style}.${e3.cap}`;
    case "esriSFS":
      return `${e3.style}`;
    case "esriPFS":
    case "esriPMS":
      return e3.imageData ? `${e3.imageData}${e3.width}${e3.height}` : `${e3.url}${e3.width}${e3.height}`;
    default:
      return "mosaicHash" in e3 ? e3.mosaicHash : JSON.stringify(e3);
  }
}
const F = n$f(), $ = "arial-unicode-ms-regular", N = 126, k = s$b.getLogger("esri.views.2d.engine.webgl.TextureManager");
function H(e3, t2) {
  const i3 = Math.round(u$a(t2) * window.devicePixelRatio), s2 = i3 >= 128 ? 2 : 4;
  return Math.min(e3, i3 * s2);
}
const Q = (e3, t2, i3) => k.error(new s$a(e3, t2, i3));
class O$1 {
  constructor(e3, t2, i3) {
    this.mosaicType = e3, this.page = t2, this.sdf = i3;
  }
  static fromMosaic(e3, t2) {
    return new O$1(e3, t2.page, t2.sdf);
  }
}
class V {
  constructor(i3, r2) {
    this._requestRender = i3, this.resourceManager = r2, this._invalidFontsMap = new Map(), this._sdfConverter = new r$7(N), this._bindingInfos = new Array(), this._hashToBindingIndex = new Map(), this._ongoingRasterizations = new Map(), this._imageRequestQueue = new l$g({ concurrency: 10, process: async (e3, i4) => {
      f$7(i4);
      try {
        return await U$1(e3, { responseType: "image", signal: i4 });
      } catch (r3) {
        if (!j$4(r3))
          throw new s$a("mapview-invalid-resource", `Could not fetch requested resource at ${e3}`, r3);
        throw r3;
      }
    } }), this._spriteMosaic = new p$4(2048, 2048, 500), this._glyphSource = new r$8(`${s$c.fontsUrl}/{fontstack}/{range}.pbf`), this._glyphMosaic = new g$4(1024, 1024, this._glyphSource), this._rasterizer = new c$a(r2);
  }
  dispose() {
    this._spriteMosaic.dispose(), this._glyphMosaic.dispose(), this._rasterizer.dispose(), this._sdfConverter.dispose(), this._spriteMosaic = null, this._glyphMosaic = null, this._sdfConverter = null, this._hashToBindingIndex.clear(), this._hashToBindingIndex = null, this._bindingInfos = null, this._ongoingRasterizations.clear(), this._ongoingRasterizations = null, this._imageRequestQueue.clear(), this._imageRequestQueue = null;
  }
  get sprites() {
    return this._spriteMosaic;
  }
  get glyphs() {
    return this._glyphMosaic;
  }
  async rasterizeItem(e3, t2, i3, s2) {
    if (t$d(e3))
      return Q("mapview-null-resource", "Unable to rasterize null resource"), null;
    switch (e3.type) {
      case "text":
      case "esriTS": {
        const t3 = await this._rasterizeText(e3, i3, s2);
        return t3.forEach((e4) => this._setTextureBinding(O$3.GLYPH, e4)), { glyphMosaicItems: t3 };
      }
      default: {
        if (Ne(e3))
          return Q("mapview-invalid-type", `MapView does not support symbol type: ${e3.type}`, e3), null;
        const i4 = await this._rasterizeSpriteSymbol(e3, t2, s2);
        return e$a(i4) && i4 && this._setTextureBinding(O$3.SPRITE, i4), { spriteMosaicItem: i4 };
      }
    }
  }
  bindTextures(e3, t2, i3, s2 = false) {
    if (i3.textureBinding === 0)
      return;
    const r2 = this._bindingInfos[i3.textureBinding - 1], n2 = r2.page, o3 = s2 ? L.LINEAR_MIPMAP_LINEAR : L.LINEAR;
    switch (r2.mosaicType) {
      case O$3.SPRITE: {
        const i4 = this.sprites.getWidth(n2), s3 = this.sprites.getHeight(n2), r3 = r$c(F, i4, s3);
        return this._spriteMosaic.bind(e3, o3, n2, y$2), t2.setUniform1i("u_texture", y$2), void t2.setUniform2fv("u_mosaicSize", r3);
      }
      case O$3.GLYPH: {
        const i4 = this.glyphs.width, s3 = this.glyphs.height, r3 = r$c(F, i4, s3);
        return this._glyphMosaic.bind(e3, o3, n2, z$1), t2.setUniform1i("u_texture", z$1), void t2.setUniform2fv("u_mosaicSize", r3);
      }
      default:
        k.error("mapview-texture-manager", `Cannot handle unknown type ${r2.mosaicType}`);
    }
  }
  _hashMosaic(e3, t2) {
    return 1 | e3 << 1 | (t2.sdf ? 1 : 0) << 2 | t2.page << 3;
  }
  _setTextureBinding(e3, t2) {
    const i3 = this._hashMosaic(e3, t2);
    if (!this._hashToBindingIndex.has(i3)) {
      const s2 = O$1.fromMosaic(e3, t2), r2 = this._bindingInfos.length + 1;
      this._hashToBindingIndex.set(i3, r2), this._bindingInfos.push(s2);
    }
    t2.textureBinding = this._hashToBindingIndex.get(i3);
  }
  async _rasterizeText(e3, t2, s2) {
    let n2, o3;
    if ("cim" in e3) {
      const t3 = e3;
      n2 = t3.fontName, o3 = t3.text;
    } else {
      const t3 = e3;
      n2 = i$c(t3.font), o3 = t3.text;
    }
    const a2 = this._invalidFontsMap.has(n2), h2 = t2 || ve(n$e(o3)[0]);
    try {
      return await this._glyphMosaic.getGlyphItems(a2 ? $ : n2, h2, s2);
    } catch (c2) {
      return Q("mapview-invalid-resource", `Couldn't find font ${n2}. Falling back to Arial Unicode MS Regular`), this._invalidFontsMap.set(n2, true), this._glyphMosaic.getGlyphItems($, h2, s2);
    }
  }
  async _rasterizeSpriteSymbol(e3, t2, i3) {
    if (Me(e3))
      return null;
    const r2 = e$2(e3);
    if (this._spriteMosaic.has(r2))
      return this._spriteMosaic.getSpriteItem(r2);
    if (Ie(e3) || Te(e3) && !Be(e3))
      return this._handleAsyncResource(r2, e3, i3);
    const n2 = bt, o3 = this._rasterizer.rasterizeJSONResource(e3, n2);
    if (o3) {
      const { size: t3, image: i4, sdf: s2, simplePattern: n3, rasterizationScale: a2 } = o3;
      return this._addItemToMosaic(r2, t3, { type: "static", data: i4 }, _e(e3), s2, n3, a2);
    }
    return new s$a("TextureManager", "unrecognized or null rasterized image");
  }
  async _handleAsyncResource(e3, t2, i3) {
    if (this._ongoingRasterizations.has(e3))
      return this._ongoingRasterizations.get(e3);
    let s2;
    s2 = Ie(t2) ? this._handleSVG(t2, e3, i3) : this._handleImage(t2, e3, i3), this._ongoingRasterizations.set(e3, s2);
    try {
      await s2, this._ongoingRasterizations.delete(e3);
    } catch {
      this._ongoingRasterizations.delete(e3);
    }
    return s2;
  }
  async _handleSVG(e3, t2, i3) {
    const s2 = [N, N], r2 = await this._sdfConverter.draw(e3.path, i3);
    return this._addItemToMosaic(t2, s2, { type: "static", data: new Uint32Array(r2.buffer) }, false, true, true);
  }
  async _handleGIFOrPNG(e3, t2, i3) {
    const r2 = Ee(e3);
    await this.resourceManager.fetchResource(r2, i3);
    const n2 = this.resourceManager.getResource(r2);
    if (t$d(n2))
      return new s$a("mapview-invalid-resource", `Could not fetch requested resource at ${r2}.`);
    if (n2 instanceof HTMLImageElement) {
      let i4 = n2.width, s2 = n2.height;
      e3.type === "esriPMS" && (i4 = Math.round(H(n2.width, Ue(e3))), s2 = Math.round(n2.height * (i4 / n2.width)));
      const r3 = "cim" in e3 ? e3.cim.colorSubstitutions : void 0, { size: o3, sdf: a3, image: h3 } = this._rasterizer.rasterizeImageResource(i4, s2, n2, r3);
      return this._addItemToMosaic(t2, o3, { type: "static", data: h3 }, _e(e3), a3, false);
    }
    const a2 = e3.animatedSymbolProperties || {}, h2 = e3.objectId, c2 = new e$3(n2, this._requestRender, a2, h2);
    return this._addItemToMosaic(t2, [c2.width, c2.height], { type: "animated", data: c2 }, _e(e3), false, false);
  }
  async _handleImage(e3, t2, i3) {
    var _a;
    if (we(e3) || Ae(e3))
      return this._handleGIFOrPNG(e3, t2, i3);
    const r2 = Ee(e3);
    try {
      let s2;
      const n2 = this.resourceManager.getResource(r2);
      if (r$b(n2) && n2 instanceof HTMLImageElement)
        s2 = n2;
      else {
        const { data: e4 } = await this._imageRequestQueue.push(r2, __spreadValues({}, i3));
        s2 = e4;
      }
      if (De(r2)) {
        if ("width" in e3 && "height" in e3)
          s2.width = u$a(e3.width), s2.height = u$a(e3.height);
        else if ("cim" in e3) {
          const t3 = e3.cim;
          s2.width = u$a((_a = t3.width) != null ? _a : t3.scaleX * t3.size), s2.height = u$a(t3.size);
        }
      }
      if (!s2.width || !s2.height)
        return null;
      let o3 = s2.width, h2 = s2.height;
      e3.type === "esriPMS" && (o3 = Math.round(H(s2.width, Ue(e3))), h2 = Math.round(s2.height * (o3 / s2.width)));
      const c2 = "cim" in e3 ? e3.cim.colorSubstitutions : void 0, { size: d2, sdf: m2, image: l2 } = this._rasterizer.rasterizeImageResource(o3, h2, s2, c2);
      return this._addItemToMosaic(t2, d2, { type: "static", data: l2 }, _e(e3), m2, false);
    } catch (n2) {
      if (!j$4(n2))
        return new s$a("mapview-invalid-resource", `Could not fetch requested resource at ${r2}. ${n2.message}`);
    }
  }
  _addItemToMosaic(e3, t2, i3, s2, r2, n2, o3) {
    return this._spriteMosaic.addSpriteItem(e3, t2, i3, s2, r2, n2, o3);
  }
}
class i$6 {
  constructor(e3, t2) {
    this._queue = [], this._context = e3, this._refreshable = t2;
  }
  destroy() {
    this._queue = [];
  }
  enqueueTextureUpdate(e3, r2) {
    const i3 = D$3(), h2 = e3, a2 = wt, c2 = Math.ceil(h2.height / a2);
    if (f$7(r2), this._context.type === r$d.WEBGL1)
      this._queue.push({ type: "no-chunk", request: e3, resolver: i3, options: r2 });
    else
      for (let t2 = 0; t2 < c2; t2++) {
        const s2 = t2 * a2, o3 = t2 === c2 - 1, u2 = o3 ? h2.height - a2 * t2 : a2;
        this._queue.push({ type: "chunk", request: e3, resolver: i3, chunk: t2, chunkOffset: s2, destHeight: u2, chunkIsLast: o3, options: r2 });
      }
    return d$d(r2, (e4) => i3.reject(e4)), i3.promise;
  }
  upload() {
    let t2 = 0;
    for (; this._queue.length; ) {
      const s2 = performance.now(), o3 = this._queue.shift();
      if (o3) {
        if (r$b(o3.options.signal) && o3.options.signal.aborted)
          continue;
        switch (o3.type) {
          case "chunk":
            this._uploadChunk(o3);
            break;
          case "no-chunk":
            this._uploadNoChunk(o3);
        }
        const u2 = performance.now() - s2;
        if (t2 += u2, t2 + u2 >= xt)
          break;
      }
    }
    this._queue.length && this._refreshable.requestRender();
  }
  _uploadChunk(t2) {
    const { request: s2, resolver: o3, chunkOffset: r2, chunkIsLast: u2, destHeight: n2 } = t2, { data: i3, texture: h2, width: a2 } = s2;
    r$b(i3) && (h2.updateData(0, 0, r2, a2, n2, i3, r2), u2 && o3.resolve());
  }
  _uploadNoChunk(e3) {
    const { request: t2, resolver: s2 } = e3, { data: o3, texture: r2 } = t2;
    r2.setData(o3), s2.resolve();
  }
}
const r$6 = { shaders: { vertexShader: n$c("stencil/stencil.vert"), fragmentShader: n$c("stencil/stencil.frag") }, attributes: new Map([["a_pos", 0]]) };
const u$5 = r$e(-0.5, -0.5);
class f$4 {
  constructor() {
    this._centerNdc = n$g(), this._pxToNdc = n$g(), this._worldDimensionsPx = n$g(), this._mat3 = e$b(), this._initialized = false;
  }
  dispose() {
    this._program = a$e(this._program), this._quad = a$e(this._quad);
  }
  render(t2, s2) {
    const { context: i3 } = t2;
    return !!this._updateGeometry(t2, s2) && (this._initialized || this._initialize(i3), i3.setDepthWriteEnabled(false), i3.setDepthTestEnabled(false), i3.setColorMask(false, false, false, false), i3.setBlendingEnabled(false), i3.setStencilOp(O$4.KEEP, O$4.KEEP, O$4.REPLACE), i3.setStencilFunction(I$3.ALWAYS, 1, 255), i3.setStencilTestEnabled(true), i3.useProgram(this._program), this._program.setUniformMatrix3fv("u_worldExtent", this._mat3), this._quad.draw(), this._quad.unbind(), true);
  }
  _initialize(t2) {
    if (this._initialized)
      return;
    const s2 = e$8(t2, r$6);
    s2 && (this._program = s2, this._quad = new n$h(t2, [0, 0, 1, 0, 0, 1, 1, 1]), this._initialized = true);
  }
  _updateGeometry(t2, a2) {
    const { state: n2, pixelRatio: m2 } = t2, { size: c2, rotation: d2 } = n2, p2 = Math.round(c2[0] * m2), _2 = Math.round(c2[1] * m2);
    if (!n2.spatialReference.isWrappable)
      return false;
    const l2 = r$f(d2), f2 = Math.abs(Math.cos(l2)), b2 = Math.abs(Math.sin(l2)), g2 = Math.round(p2 * f2 + _2 * b2), j2 = Math.round(n2.worldScreenWidth);
    if (g2 <= j2)
      return false;
    const x2 = p2 * b2 + _2 * f2, E2 = j2 * m2, M2 = (a2.left - a2.right) * m2 / p2, w2 = (a2.bottom - a2.top) * m2 / _2;
    o$h(this._worldDimensionsPx, E2, x2, 1), o$h(this._pxToNdc, 2 / p2, -2 / _2, 1), o$h(this._centerNdc, M2, w2, 1);
    const P2 = this._mat3;
    return l$h(P2, this._centerNdc), f$9(P2, P2, this._pxToNdc), d2 !== 0 && h$9(P2, P2, l2), f$9(P2, P2, this._worldDimensionsPx), M$2(P2, P2, u$5), true;
  }
}
class o$3 extends t$e {
  constructor() {
    super(...arguments), this.defines = [], this._desc = { vsPath: "fx/integrate", fsPath: "fx/integrate", attributes: new Map([["a_position", 0]]) };
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  bind() {
  }
  unbind() {
  }
  draw(r2, i3) {
    if (!i3.size)
      return;
    const { context: a2, renderingOptions: o3 } = r2;
    this._quad || (this._quad = new n$h(a2, [0, 0, 1, 0, 0, 1, 1, 1]));
    const n2 = a2.getBoundFramebufferObject(), { x: u2, y: m2, width: d2, height: f2 } = a2.getViewport();
    i3.bindTextures(a2);
    const c2 = i3.getBlock(N$1);
    if (t$d(c2))
      return;
    const _2 = c2.getFBO(a2), l2 = c2.getFBO(a2, 1);
    a2.setViewport(0, 0, i3.size, i3.size), this._computeDelta(r2, l2, o3.labelsAnimationTime), this._updateAnimationState(r2, l2, _2), a2.bindFramebuffer(n2), a2.setViewport(u2, m2, d2, f2);
  }
  _computeDelta(e3, t2, s2) {
    const { context: a2, painter: o3, displayLevel: n2 } = e3, u2 = o3.materialManager.getProgram(this._desc, ["delta"]);
    a2.bindFramebuffer(t2), a2.setClearColor(0, 0, 0, 0), a2.clear(a2.gl.COLOR_BUFFER_BIT), a2.useProgram(u2), u2.setUniform1i("u_maskTexture", B$1), u2.setUniform1i("u_sourceTexture", C$2), u2.setUniform1f("u_timeDelta", e3.deltaTime), u2.setUniform1f("u_animationTime", s2), u2.setUniform1f("u_zoomLevel", Math.round(10 * n2)), this._quad.draw();
  }
  _updateAnimationState(e3, t2, r2) {
    const { context: i3, painter: s2 } = e3, a2 = s2.materialManager.getProgram(this._desc, ["update"]);
    i3.bindTexture(t2.colorTexture, 1), i3.useProgram(a2), a2.setUniform1i("u_sourceTexture", 1), i3.bindFramebuffer(r2), i3.setClearColor(0, 0, 0, 0), i3.clear(i3.gl.COLOR_BUFFER_BIT), this._quad.draw();
  }
}
const r$5 = (e3) => e3.replace("-", "_").toUpperCase(), t$5 = (e3) => `#define ${r$5(e3)}
`;
function n$4(r2) {
  return { attributes: new Map([["a_pos", 0], ["a_tex", 1]]), shaders: { vertexShader: t$5(r2) + n$c("blend/blend.vert"), fragmentShader: t$5(r2) + n$c("blend/blend.frag") } };
}
const l$a = s$b.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");
class _$6 {
  constructor() {
    this._size = [0, 0];
  }
  dispose(e3) {
    this._backBufferTexture = a$e(this._backBufferTexture), this._quad = a$e(this._quad);
  }
  draw(r2, t2, s2, a2, d2) {
    const { context: u2, drawPhase: f2 } = r2;
    if (this._setupShader(u2), a2 && a2 !== "normal" && f2 !== I$2.LABEL)
      return void this._drawBlended(r2, t2, s2, a2, d2);
    const c2 = n$4("normal"), m2 = u2.programCache.acquire(c2.shaders.vertexShader, c2.shaders.fragmentShader, c2.attributes);
    if (!m2)
      return void l$a.error(new s$a("mapview-BlendEffect", 'Error creating shader program for blend mode "normal"'));
    u2.useProgram(m2), t2.setSamplingMode(s2), u2.bindTexture(t2, 0), m2.setUniform1i("u_layerTexture", 0), m2.setUniform1f("u_opacity", d2), u2.setBlendingEnabled(true), u2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA);
    const h2 = this._quad;
    h2.draw(), h2.unbind(), m2.dispose();
  }
  _drawBlended(r2, t2, i3, a2, d2) {
    const { context: u2, state: f2, pixelRatio: c2, inFadeTransition: m2 } = r2, { size: h2 } = f2, _2 = u2.getBoundFramebufferObject();
    let p2, b2;
    if (r$b(_2)) {
      const e3 = _2.descriptor;
      p2 = e3.width, b2 = e3.height;
    } else
      p2 = Math.round(c2 * h2[0]), b2 = Math.round(c2 * h2[1]);
    this._createOrResizeTexture(r2, p2, b2);
    const g2 = this._backBufferTexture;
    _2.copyToTexture(0, 0, p2, b2, 0, 0, g2), u2.setStencilTestEnabled(false), u2.setStencilWriteMask(0), u2.setBlendingEnabled(true), u2.setDepthTestEnabled(false), u2.setDepthWriteEnabled(false);
    const x2 = n$4(a2), E2 = u2.programCache.acquire(x2.shaders.vertexShader, x2.shaders.fragmentShader, x2.attributes);
    if (!E2)
      return void l$a.error(new s$a("mapview-BlendEffect", `Error creating shader program for blend mode ${a2}`));
    u2.useProgram(E2), g2.setSamplingMode(i3), u2.bindTexture(g2, 0), E2.setUniform1i("u_backbufferTexture", 0), t2.setSamplingMode(i3), u2.bindTexture(t2, 1), E2.setUniform1i("u_layerTexture", 1), E2.setUniform1f("u_opacity", d2), E2.setUniform1f("u_inFadeOpacity", m2 ? 1 : 0), u2.setBlendFunction(R.ONE, R.ZERO);
    const T2 = this._quad;
    T2.draw(), T2.unbind(), E2.dispose(), u2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA);
  }
  _setupShader(e3) {
    this._quad || (this._quad = new n$h(e3, [-1, -1, 1, -1, -1, 1, 1, 1]));
  }
  _createOrResizeTexture(e3, r2, t2) {
    const { context: s2 } = e3;
    this._backBufferTexture !== null && r2 === this._size[0] && t2 === this._size[1] || (this._backBufferTexture ? this._backBufferTexture.resize(r2, t2) : this._backBufferTexture = new E$2(s2, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.LINEAR, flipped: false, width: r2, height: t2 }), this._size[0] = r2, this._size[1] = t2);
  }
}
class r$4 extends t$e {
  constructor(e3) {
    super(), this.name = this.constructor.name, this.defines = [e3];
  }
  dispose() {
  }
  bind({ context: e3, painter: t2 }) {
    this._prev = e3.getBoundFramebufferObject();
    const { width: r2, height: s2 } = e3.getViewport(), o3 = t2.getFbos(r2, s2).effect0;
    e3.bindFramebuffer(o3), e3.setColorMask(true, true, true, true), e3.setClearColor(0, 0, 0, 0), e3.clear(e3.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  draw(e3, r2) {
    const { context: s2, painter: o3 } = e3, n2 = o3.getPostProcessingEffects(r2), c2 = s2.getBoundFramebufferObject();
    for (const { postProcessingEffect: t2, effect: f2 } of n2)
      t2.draw(e3, c2, f2);
    s2.bindFramebuffer(this._prev), s2.setStencilTestEnabled(false), o3.blitTexture(s2, c2.colorTexture, L.NEAREST), s2.setStencilTestEnabled(true);
  }
}
const o$2 = 1, t$4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], i$5 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], n$3 = 256, e$1 = { outlineWidth: 1.3, outerHaloWidth: 0.4, innerHaloWidth: 0.4, outlinePosition: 0 };
const u$4 = s$b.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");
function C(o3, i3) {
  i3.fillColor[0] = o3.color.r / 255, i3.fillColor[1] = o3.color.g / 255, i3.fillColor[2] = o3.color.b / 255, i3.fillColor[3] = o3.color.a, o3.haloColor ? (i3.outlineColor[0] = o3.haloColor.r / 255, i3.outlineColor[1] = o3.haloColor.g / 255, i3.outlineColor[2] = o3.haloColor.b / 255, i3.outlineColor[3] = o3.haloColor.a) : (i3.outlineColor[0] = i3.fillColor[0], i3.outlineColor[1] = i3.fillColor[1], i3.outlineColor[2] = i3.fillColor[2], i3.outlineColor[3] = i3.fillColor[3]), i3.fillColor[3] *= o3.fillOpacity, i3.outlineColor[3] *= o3.haloOpacity, i3.fillColor[0] *= i3.fillColor[3], i3.fillColor[1] *= i3.fillColor[3], i3.fillColor[2] *= i3.fillColor[3], i3.outlineColor[0] *= i3.outlineColor[3], i3.outlineColor[1] *= i3.outlineColor[3], i3.outlineColor[2] *= i3.outlineColor[3], i3.outlineWidth = e$1.outlineWidth, i3.outerHaloWidth = e$1.outerHaloWidth, i3.innerHaloWidth = e$1.innerHaloWidth, i3.outlinePosition = e$1.outlinePosition;
}
const g$2 = [0, 0, 0, 0];
class f$3 {
  constructor() {
    this._convertedHighlightOptions = { fillColor: [0.2 * 0.75, 0.6 * 0.75, 0.675, 0.75], outlineColor: [0.2 * 0.9, 0.54, 0.81, 0.9], outlinePosition: e$1.outlinePosition, outlineWidth: e$1.outlineWidth, innerHaloWidth: e$1.innerHaloWidth, outerHaloWidth: e$1.outerHaloWidth }, this._shadeTexChanged = true, this._texelData = new Uint8Array(4 * n$3), this._minMaxDistance = [0, 0];
  }
  setHighlightOptions(o3) {
    const i3 = this._convertedHighlightOptions;
    C(o3, i3);
    const t2 = i3.outlinePosition - i3.outlineWidth / 2 - i3.outerHaloWidth, r2 = i3.outlinePosition - i3.outlineWidth / 2, n2 = i3.outlinePosition + i3.outlineWidth / 2, h2 = i3.outlinePosition + i3.outlineWidth / 2 + i3.innerHaloWidth, a2 = Math.sqrt(Math.PI / 2) * o$2, s2 = Math.abs(t2) > a2 ? Math.round(10 * (Math.abs(t2) - a2)) / 10 : 0, d2 = Math.abs(h2) > a2 ? Math.round(10 * (Math.abs(h2) - a2)) / 10 : 0;
    let f2;
    s2 && !d2 ? u$4.error("The outer rim of the highlight is " + s2 + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards).") : !s2 && d2 ? u$4.error("The inner rim of the highlight is " + d2 + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards).") : s2 && d2 && u$4.error("The highlight is " + Math.max(s2, d2) + "px away from the edge of the feature; consider reducing some width values.");
    const c2 = [void 0, void 0, void 0, void 0];
    function m2(o4, i4, t3) {
      c2[0] = (1 - t3) * o4[0] + t3 * i4[0], c2[1] = (1 - t3) * o4[1] + t3 * i4[1], c2[2] = (1 - t3) * o4[2] + t3 * i4[2], c2[3] = (1 - t3) * o4[3] + t3 * i4[3];
    }
    const { _texelData: p2 } = this;
    for (let l2 = 0; l2 < n$3; ++l2)
      f2 = t2 + l2 / (n$3 - 1) * (h2 - t2), f2 < t2 ? (c2[4 * l2 + 0] = 0, c2[4 * l2 + 1] = 0, c2[4 * l2 + 2] = 0, c2[4 * l2 + 3] = 0) : f2 < r2 ? m2(g$2, i3.outlineColor, (f2 - t2) / (r2 - t2)) : f2 < n2 ? [c2[0], c2[1], c2[2], c2[3]] = i3.outlineColor : f2 < h2 ? m2(i3.outlineColor, i3.fillColor, (f2 - n2) / (h2 - n2)) : [c2[4 * l2 + 0], c2[4 * l2 + 1], c2[4 * l2 + 2], c2[4 * l2 + 3]] = i3.fillColor, p2[4 * l2 + 0] = 255 * c2[0], p2[4 * l2 + 1] = 255 * c2[1], p2[4 * l2 + 2] = 255 * c2[2], p2[4 * l2 + 3] = 255 * c2[3];
    this._minMaxDistance[0] = t2, this._minMaxDistance[1] = h2, this._shadeTexChanged = true;
  }
  applyHighlightOptions(o3, t2) {
    this._shadeTex || (this._shadeTex = new E$2(o3, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, width: n$3, height: 1, samplingMode: L.LINEAR })), this._shadeTexChanged && (this._shadeTex.updateData(0, 0, 0, n$3, 1, this._texelData), this._shadeTexChanged = false), o3.bindTexture(this._shadeTex, J), t2.setUniform2fv("u_minMaxDistance", this._minMaxDistance);
  }
  destroy() {
    this._shadeTex && (this._shadeTex.dispose(), this._shadeTex = null);
  }
}
const t$3 = { shaders: { vertexShader: n$c("highlight/textured.vert"), fragmentShader: n$c("highlight/highlight.frag") }, attributes: new Map([["a_position", 0], ["a_texcoord", 1]]) }, r$3 = { shaders: { vertexShader: n$c("highlight/textured.vert"), fragmentShader: n$c("highlight/blur.frag") }, attributes: new Map([["a_position", 0], ["a_texcoord", 1]]) };
class c$6 {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.quadGeometry.dispose(), this._resources.quadVAO.dispose(), this._resources.highlightProgram.dispose(), this._resources.blurProgram.dispose(), this._resources = null);
  }
  preBlur(e3, i3) {
    e3.bindTexture(i3, I$4), e3.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [1, 0, 1 / this._width, 0]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", t$4), e3.bindVAO(this._resources.quadVAO), e3.drawArrays(E.TRIANGLE_STRIP, 0, 4), e3.bindVAO();
  }
  finalBlur(e3, s2) {
    e3.bindTexture(s2, I$4), e3.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [0, 1, 0, 1 / this._height]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", i$5), e3.bindVAO(this._resources.quadVAO), e3.drawArrays(E.TRIANGLE_STRIP, 0, 4), e3.bindVAO();
  }
  renderHighlight(e3, s2, i3) {
    e3.bindTexture(s2, I$4), e3.useProgram(this._resources.highlightProgram), i3.applyHighlightOptions(e3, this._resources.highlightProgram), e3.bindVAO(this._resources.quadVAO), e3.setBlendingEnabled(true), e3.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), e3.drawArrays(E.TRIANGLE_STRIP, 0, 4), e3.bindVAO();
  }
  _initialize(s2, i3, a2) {
    this._width = i3, this._height = a2;
    const m2 = E$1.createVertex(s2, F$2.STATIC_DRAW, new Int8Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]).buffer), c2 = new a$f(s2, new Map([["a_position", 0], ["a_texcoord", 1]]), { geometry: [new t$f("a_position", 2, C$3.BYTE, 0, 4), new t$f("a_texcoord", 2, C$3.UNSIGNED_BYTE, 2, 4)] }, { geometry: m2 }), f2 = e$8(s2, t$3), b2 = e$8(s2, r$3);
    s2.useProgram(f2), f2.setUniform1i("u_texture", I$4), f2.setUniform1i("u_shade", J), f2.setUniform1f("u_sigma", o$2), s2.useProgram(b2), b2.setUniform1i("u_texture", I$4), b2.setUniform1f("u_sigma", o$2), this._resources = { quadGeometry: m2, quadVAO: c2, highlightProgram: f2, blurProgram: b2 };
  }
  setup(r2, e3, s2) {
    this._resources ? (this._width = e3, this._height = s2) : this._initialize(r2, e3, s2);
  }
}
function l$9(e3, l2, _2) {
  const c2 = new E$2(e3, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, width: l2, height: _2, samplingMode: L.LINEAR });
  return [c2, new x$1(e3, { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.STENCIL_RENDER_BUFFER }, c2)];
}
class _$5 {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.sharedBlur1Tex.dispose(), this._resources.sharedBlur1Fbo.dispose(), this._resources.sharedBlur2Tex.dispose(), this._resources.sharedBlur2Fbo.dispose(), this._resources = d$e(this._resources));
  }
  _initialize(e3, s2, r2) {
    this._width = s2, this._height = r2;
    const [t2, i3] = l$9(e3, s2, r2), [h2, o3] = l$9(e3, s2, r2);
    this._resources = { sharedBlur1Tex: t2, sharedBlur1Fbo: i3, sharedBlur2Tex: h2, sharedBlur2Fbo: o3 };
  }
  setup(e3, s2, r2) {
    !this._resources || this._width === s2 && this._height === r2 || this.dispose(), this._resources || this._initialize(e3, s2, r2);
  }
  get sharedBlur1Tex() {
    return this._resources.sharedBlur1Tex;
  }
  get sharedBlur1Fbo() {
    return this._resources.sharedBlur1Fbo;
  }
  get sharedBlur2Tex() {
    return this._resources.sharedBlur2Tex;
  }
  get sharedBlur2Fbo() {
    return this._resources.sharedBlur2Fbo;
  }
}
const l$8 = 4, d$9 = 4 / l$8;
class n$2 extends t$e {
  constructor() {
    super(...arguments), this.defines = ["highlight"], this._hlRenderer = new c$6(), this._hlGradient = new f$3(), this._width = void 0, this._height = void 0, this._hlSurfaces = new _$5(), this._adjustedWidth = void 0, this._adjustedHeight = void 0, this._blitRenderer = new _$7();
  }
  dispose() {
    this._hlSurfaces && this._hlSurfaces.dispose(), this._hlRenderer && this._hlRenderer.dispose(), this._hlGradient && this._hlGradient.destroy(), this._boundFBO = null;
  }
  bind(e3) {
    const { context: t2, painter: s2 } = e3, { width: i3, height: h2 } = t2.getViewport(), r2 = s2.getFbos(i3, h2).effect0;
    this.setup(e3, i3, h2), t2.bindFramebuffer(r2), t2.setColorMask(true, true, true, true), t2.setClearColor(0, 0, 0, 0), t2.clear(t2.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  setup({ context: e3 }, t2, s2) {
    this._width = t2, this._height = s2;
    const i3 = t2 % l$8, h2 = s2 % l$8;
    t2 += i3 < l$8 / 2 ? -i3 : l$8 - i3, s2 += h2 < l$8 / 2 ? -h2 : l$8 - h2, this._adjustedWidth = t2, this._adjustedHeight = s2, this._boundFBO = e3.getBoundFramebufferObject();
    const r2 = Math.round(t2 * d$9), n2 = Math.round(s2 * d$9);
    this._hlRenderer.setup(e3, r2, n2), this._hlSurfaces.setup(e3, r2, n2);
  }
  draw({ context: e3 }) {
    const t2 = e3.getBoundFramebufferObject();
    e3.setViewport(0, 0, this._adjustedWidth * d$9, this._adjustedHeight * d$9), e3.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), e3.setStencilTestEnabled(false), e3.setClearColor(0, 0, 0, 0), e3.clear(e3.gl.COLOR_BUFFER_BIT), this._blitRenderer.render(e3, t2.colorTexture, L.NEAREST, 1), e3.setStencilTestEnabled(false), e3.setBlendingEnabled(false), e3.setColorMask(false, false, false, true), e3.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo), e3.setClearColor(0, 0, 0, 0), e3.clear(e3.gl.COLOR_BUFFER_BIT), this._hlRenderer.preBlur(e3, this._hlSurfaces.sharedBlur1Tex), e3.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), e3.setClearColor(0, 0, 0, 0), e3.clear(e3.gl.COLOR_BUFFER_BIT), this._hlRenderer.finalBlur(e3, this._hlSurfaces.sharedBlur2Tex), e3.bindFramebuffer(this._boundFBO), e3.setBlendingEnabled(true), e3.setColorMask(true, true, true, true), e3.setViewport(0, 0, this._width, this._height), this._hlRenderer.renderHighlight(e3, this._hlSurfaces.sharedBlur1Tex, this._hlGradient), this._boundFBO = null;
  }
  setHighlightOptions(e3) {
    this._hlGradient.setHighlightOptions(e3);
  }
}
class c$5 extends t$e {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["hittest"];
  }
  dispose() {
    r$b(this._fbo) && this._fbo.dispose();
  }
  createOptions({ pixelRatio: t2 }, e3, s2 = Y$1) {
    if (!e3.length)
      return null;
    const r2 = e3.shift(), o3 = r2.x, n2 = r2.y;
    return this._outstanding = r2, { type: "hittest", distance: s2 * t2, position: [o3, n2] };
  }
  bind(t2) {
    const { context: i3, attributeView: r2 } = t2;
    if (!r2.size)
      return;
    const o3 = r2.getBlock(O$5);
    if (t$d(o3))
      return;
    const n2 = o3.getFBO(i3);
    i3.setViewport(0, 0, r2.size, r2.size), i3.bindFramebuffer(n2), i3.setColorMask(true, true, true, true), i3.setClearColor(0, 0, 0, 0), i3.clear(i3.gl.COLOR_BUFFER_BIT | i3.gl.DEPTH_BUFFER_BIT);
  }
  unbind(t2) {
  }
  draw(t2) {
    if (t$d(this._outstanding))
      return;
    const i3 = this._outstanding;
    this._outstanding = null, this._resolve(t2, i3.resolvers);
  }
  async _resolve(t2, i3) {
    const { context: r2, attributeView: c2 } = t2, a2 = c2.getBlock(O$5);
    if (t$d(a2))
      return void i3.forEach((t3) => t3.resolve([]));
    const d2 = a2.getFBO(r2), h2 = new Uint8Array(d2.width * d2.height * 4);
    try {
      await d2.readPixelsAsync(0, 0, d2.width, d2.height, P$2.RGBA, G$1.UNSIGNED_BYTE, h2);
    } catch (u2) {
      return void i3.forEach((t3) => t3.resolve([]));
    }
    const l2 = [];
    for (let e3 = 0; e3 < h2.length; e3 += 4) {
      const t3 = h2[e3], i4 = h2[e3 + 3];
      t3 && l2.push({ id: e3 / 4, directHits: i4 });
    }
    l2.sort((t3, e3) => e3.directHits === t3.directHits ? e3.id - t3.id : e3.directHits - t3.directHits);
    const f2 = l2.map((t3) => t3.id);
    i3.forEach((t3) => t3.resolve(f2));
  }
}
class i$4 extends t$e {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["id"], this._lastSize = 0;
  }
  dispose() {
    r$b(this._fbo) && this._fbo.dispose();
  }
  bind({ context: t2, painter: e3 }) {
    const { width: s2, height: o3 } = t2.getViewport();
    this._boundFBO = t2.getBoundFramebufferObject();
    const r2 = e3.getFbos(s2, o3).effect0;
    t2.bindFramebuffer(r2), t2.setColorMask(true, true, true, true), t2.setClearColor(0, 0, 0, 0), t2.clear(t2.gl.COLOR_BUFFER_BIT);
  }
  unbind({ context: t2 }) {
    t2.bindFramebuffer(this._boundFBO), this._boundFBO = null;
  }
  draw(t2, s2, o3 = 2 * Y$1) {
    this._resolve(t2, s2, o3);
  }
  async _resolve({ context: t2, state: e3, pixelRatio: s2 }, i3, n2) {
    const f2 = t2.getBoundFramebufferObject(), a2 = e3.size[1] * s2, h2 = Math.round(n2 * s2), u2 = h2 / 2, b2 = h2 / 2;
    this._ensureBuffer(h2), i3.forEach(async (t3, e4) => {
      const n3 = new Map(), c2 = Math.floor(e4.x * s2 - h2 / 2), l2 = Math.floor(a2 - e4.y * s2 - h2 / 2);
      await f2.readPixelsAsync(c2, l2, h2, h2, P$2.RGBA, G$1.UNSIGNED_BYTE, this._buf);
      for (let s3 = 0; s3 < this._buf32.length; s3++) {
        const t4 = this._buf32[s3];
        if (t4 !== 4294967295 && t4 !== 0) {
          const e5 = s3 % h2, o3 = h2 - Math.floor(s3 / h2), r2 = (u2 - e5) * (u2 - e5) + (b2 - o3) * (b2 - o3), i4 = n3.has(t4) ? n3.get(t4) : 4294967295;
          n3.set(t4, Math.min(r2, i4));
        }
      }
      const _2 = Array.from(n3).sort((t4, e5) => t4[1] - e5[1]).map((t4) => t4[0]);
      t3.resolve(_2), i3.delete(e4);
    });
  }
  _ensureBuffer(t2) {
    this._lastSize !== t2 && (this._lastSize = t2, this._buf = new Uint8Array(4 * t2 * t2), this._buf32 = new Uint32Array(this._buf.buffer));
  }
}
const u$3 = 5, p$3 = [1, 0], _$4 = [0, 1], m$2 = [1, 0.8, 0.6, 0.4, 0.2], d$8 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
class c$4 {
  constructor() {
    this._intensityFBO = null, this._compositeFBO = null, this._mipsFBOs = new Array(u$3), this._nMips = u$3, this._kernelSizeArray = [3, 5, 7, 9, 11], this._size = [0, 0], this._programDesc = { luminosityHighPass: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/luminosityHighPass", attributes: new Map([["a_position", 0]]) }, gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/gaussianBlur", attributes: new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/composite", attributes: new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: new Map([["a_position", 0]]) } };
  }
  dispose() {
    if (this._quad && (this._quad.dispose(), this._quad = null), this._intensityFBO && (this._intensityFBO.dispose(), this._intensityFBO = null), this._compositeFBO && (this._compositeFBO.dispose(), this._compositeFBO = null), this._mipsFBOs) {
      for (let t2 = 0; t2 < this._nMips; t2++)
        this._mipsFBOs[t2] && (this._mipsFBOs[t2].horizontal.dispose(), this._mipsFBOs[t2].vertical.dispose());
      this._mipsFBOs = null;
    }
  }
  draw(i3, s2, r2) {
    const { width: o3, height: n2 } = s2, { context: a2, painter: l2 } = i3, { materialManager: h2 } = l2, c2 = a2.gl, T2 = this._programDesc, { strength: f2, radius: g2, threshold: B2 } = r2;
    this._quad || (this._quad = new n$h(a2, [-1, -1, 1, -1, -1, 1, 1, 1])), this._createOrResizeResources(i3, o3, n2), a2.setStencilTestEnabled(false), a2.setBlendingEnabled(true), a2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), a2.setStencilWriteMask(0);
    const O2 = this._quad;
    O2.bind(), a2.bindFramebuffer(this._intensityFBO);
    const F2 = h2.getProgram(T2.luminosityHighPass);
    a2.useProgram(F2), a2.bindTexture(s2.colorTexture, 0), F2.setUniform1i("u_texture", 0), F2.setUniform3fv("u_defaultColor", [0, 0, 0]), F2.setUniform1f("u_defaultOpacity", 0), F2.setUniform1f("u_luminosityThreshold", B2), F2.setUniform1f("u_smoothWidth", 0.01);
    const b2 = [Math.round(o3 / 2), Math.round(n2 / 2)];
    a2.setViewport(0, 0, b2[0], b2[1]), a2.setClearColor(0, 0, 0, 0), a2.clear(c2.COLOR_BUFFER_BIT), O2.draw(), a2.setBlendingEnabled(false);
    let E2 = this._intensityFBO.colorTexture;
    for (let t2 = 0; t2 < this._nMips; t2++) {
      const e3 = h2.getProgram(T2.gaussianBlur, [{ name: "radius", value: this._kernelSizeArray[t2] }]);
      a2.useProgram(e3), a2.bindTexture(E2, t2 + 1), e3.setUniform1i("u_colorTexture", t2 + 1), e3.setUniform2fv("u_texSize", b2), e3.setUniform2fv("u_direction", p$3), a2.setViewport(0, 0, b2[0], b2[1]);
      const i4 = this._mipsFBOs[t2];
      a2.bindFramebuffer(i4.horizontal), O2.draw(), E2 = i4.horizontal.colorTexture, a2.bindFramebuffer(i4.vertical), a2.bindTexture(E2, t2 + 1), e3.setUniform2fv("u_direction", _$4), O2.draw(), E2 = i4.vertical.colorTexture, b2[0] = Math.round(b2[0] / 2), b2[1] = Math.round(b2[1] / 2);
    }
    a2.setViewport(0, 0, o3, n2);
    const x2 = h2.getProgram(T2.composite, [{ name: "nummips", value: u$3 }]);
    a2.bindFramebuffer(this._compositeFBO), a2.useProgram(x2), x2.setUniform1f("u_bloomStrength", f2), x2.setUniform1f("u_bloomRadius", g2), x2.setUniform1fv("u_bloomFactors", m$2), x2.setUniform3fv("u_bloomTintColors", d$8), a2.bindTexture(this._mipsFBOs[0].vertical.colorTexture, 1), x2.setUniform1i("u_blurTexture1", 1), a2.bindTexture(this._mipsFBOs[1].vertical.colorTexture, 2), x2.setUniform1i("u_blurTexture2", 2), a2.bindTexture(this._mipsFBOs[2].vertical.colorTexture, 3), x2.setUniform1i("u_blurTexture3", 3), a2.bindTexture(this._mipsFBOs[3].vertical.colorTexture, 4), x2.setUniform1i("u_blurTexture4", 4), a2.bindTexture(this._mipsFBOs[4].vertical.colorTexture, 5), x2.setUniform1i("u_blurTexture5", 5), O2.draw(), a2.bindFramebuffer(s2), a2.setBlendingEnabled(true);
    const w2 = h2.getProgram(T2.blit);
    a2.useProgram(w2), a2.bindTexture(this._compositeFBO.colorTexture, 6), w2.setUniform1i("u_texture", 6), a2.setBlendFunction(R.ONE, R.ONE), O2.draw(), O2.unbind(), a2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), a2.setStencilTestEnabled(true);
  }
  _createOrResizeResources(t2, e3, u2) {
    const { context: p2 } = t2;
    if (this._compositeFBO && this._size[0] === e3 && this._size[1] === u2)
      return;
    this._size[0] = e3, this._size[1] = u2;
    const _2 = [Math.round(e3 / 2), Math.round(u2 / 2)];
    this._compositeFBO ? this._compositeFBO.resize(e3, u2) : this._compositeFBO = new x$1(p2, { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.NONE, width: e3, height: u2 }), this._intensityFBO ? this._intensityFBO.resize(_2[0], _2[1]) : this._intensityFBO = new x$1(p2, { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.NONE, width: _2[0], height: _2[1] }, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.LINEAR, flipped: false, width: _2[0], height: _2[1] });
    for (let m2 = 0; m2 < this._nMips; m2++)
      this._mipsFBOs[m2] ? (this._mipsFBOs[m2].horizontal.resize(_2[0], _2[1]), this._mipsFBOs[m2].vertical.resize(_2[0], _2[1])) : this._mipsFBOs[m2] = { horizontal: new x$1(p2, { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.NONE, width: _2[0], height: _2[1] }, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.LINEAR, flipped: false, width: _2[0], height: _2[1] }), vertical: new x$1(p2, { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.NONE, width: _2[0], height: _2[1] }, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.LINEAR, flipped: false, width: _2[0], height: _2[1] }) }, _2[0] = Math.round(_2[0] / 2), _2[1] = Math.round(_2[1] / 2);
  }
}
const d$7 = [1, 0], _$3 = [0, 1];
class b$1 {
  constructor() {
    this._blurFBO = null, this._size = [0, 0], this._programDesc = { gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: new Map([["a_position", 0]]) }, radialBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/radial-blur", attributes: new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._blurFBO && (this._blurFBO.dispose(), this._blurFBO = null);
  }
  draw(t2, r2, s2) {
    const { context: i3 } = t2, { type: a2, radius: n2 } = s2;
    if (n2 === 0)
      return;
    this._createOrResizeResources(t2), this._quad || (this._quad = new n$h(i3, [-1, -1, 1, -1, -1, 1, 1, 1]));
    const o3 = this._quad;
    o3.bind(), a2 === "blur" ? this._gaussianBlur(t2, r2, n2) : this._radialBlur(t2, r2), o3.unbind();
  }
  _gaussianBlur(e3, r2, s2) {
    const { context: i3, state: a2, painter: n2, pixelRatio: o3 } = e3, { size: u2 } = a2, { materialManager: l2 } = n2, b2 = this._programDesc, p2 = this._quad, c2 = [Math.round(o3 * u2[0]), Math.round(o3 * u2[1])], h2 = this._blurFBO, g2 = l2.getProgram(b2.gaussianBlur, [{ name: "radius", value: Math.ceil(s2) }]);
    i3.useProgram(g2), i3.setBlendingEnabled(false), i3.bindFramebuffer(h2), i3.bindTexture(r2.colorTexture, 4), g2.setUniform1i("u_colorTexture", 4), g2.setUniform2fv("u_texSize", c2), g2.setUniform2fv("u_direction", d$7), g2.setUniform1f("u_sigma", s2), p2.draw(), i3.bindFramebuffer(r2), i3.setStencilWriteMask(0), i3.setStencilTestEnabled(false), i3.setDepthWriteEnabled(false), i3.setDepthTestEnabled(false), i3.bindTexture(h2.colorTexture, 5), g2.setUniform1i("u_colorTexture", 5), g2.setUniform2fv("u_direction", _$3), p2.draw(), i3.setBlendingEnabled(true), i3.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), i3.setStencilTestEnabled(true);
  }
  _radialBlur(e3, r2) {
    const { context: s2, painter: i3 } = e3, { materialManager: a2 } = i3, n2 = this._programDesc, o3 = this._quad, u2 = this._blurFBO;
    s2.bindFramebuffer(u2);
    const l2 = a2.getProgram(n2.radialBlur);
    s2.useProgram(l2), s2.setBlendingEnabled(false), s2.bindTexture(r2.colorTexture, 4), l2.setUniform1i("u_colorTexture", 4), o3.draw(), s2.bindFramebuffer(r2), s2.setStencilWriteMask(0), s2.setStencilTestEnabled(false), s2.setDepthWriteEnabled(false), s2.setDepthTestEnabled(false), s2.setBlendingEnabled(true);
    const d2 = a2.getProgram(n2.blit);
    s2.useProgram(d2), s2.bindTexture(u2.colorTexture, 5), d2.setUniform1i("u_texture", 5), s2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), o3.draw();
  }
  _createOrResizeResources(e3) {
    const { context: t2, state: d2, pixelRatio: _2 } = e3, { size: b2 } = d2, p2 = Math.round(_2 * b2[0]), c2 = Math.round(_2 * b2[1]);
    this._blurFBO && this._size[0] === p2 && this._size[1] === c2 || (this._size[0] = p2, this._size[1] = c2, this._blurFBO ? this._blurFBO.resize(p2, c2) : this._blurFBO = new x$1(t2, { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.NONE, width: p2, height: c2 }, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.LINEAR, flipped: false, width: p2, height: c2 }));
  }
}
class l$7 {
  constructor() {
    this._size = [0, 0], this._programDesc = { vsPath: "post-processing/pp", fsPath: "post-processing/filterEffect", attributes: new Map([["a_position", 0]]) };
  }
  dispose() {
    this._layerFBOTexture && (this._layerFBOTexture.dispose(), this._layerFBOTexture = null);
  }
  draw(e3, s2, r2) {
    const { width: i3, height: a2 } = s2;
    this._createOrResizeResources(e3, i3, a2);
    const { context: o3, painter: n2 } = e3, { materialManager: l2 } = n2, _2 = this._programDesc, c2 = this._quad, h2 = r2.colorMatrix;
    c2.bind();
    const u2 = this._layerFBOTexture;
    o3.bindFramebuffer(s2), s2.copyToTexture(0, 0, i3, a2, 0, 0, u2), o3.setBlendingEnabled(false), o3.setStencilTestEnabled(false);
    const d2 = l2.getProgram(_2);
    o3.useProgram(d2), o3.bindTexture(u2, 2), d2.setUniformMatrix4fv("u_coefficients", h2), d2.setUniform1i("u_colorTexture", 2), c2.draw(), o3.setBlendingEnabled(true), o3.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), o3.setStencilTestEnabled(true), c2.unbind();
  }
  _createOrResizeResources(t2, l2, _2) {
    const { context: c2 } = t2;
    this._layerFBOTexture && this._size[0] === l2 && this._size[1] === _2 || (this._size[0] = l2, this._size[1] = _2, this._layerFBOTexture ? this._layerFBOTexture.resize(l2, _2) : this._layerFBOTexture = new E$2(c2, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.LINEAR, flipped: false, width: l2, height: _2 }), this._quad || (this._quad = new n$h(c2, [-1, -1, 1, -1, -1, 1, 1, 1])));
  }
}
const _$2 = [1, 0], d$6 = [0, 1];
class c$3 {
  constructor() {
    this._horizontalBlurFBO = null, this._verticalBlurFBO = null, this._size = [0, 0], this._programDesc = { blur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/drop-shadow/composite", attributes: new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._layerFBOTexture && (this._layerFBOTexture.dispose(), this._layerFBOTexture = null), this._horizontalBlurFBO && (this._horizontalBlurFBO.dispose(), this._horizontalBlurFBO = null), this._verticalBlurFBO && (this._verticalBlurFBO.dispose(), this._verticalBlurFBO = null);
  }
  draw(i3, s2, o3) {
    const { context: a2, state: l2, painter: n2 } = i3, { materialManager: u2 } = n2, h2 = this._programDesc, p2 = s2.width, c2 = s2.height, B2 = [Math.round(p2), Math.round(c2)], { blurRadius: m2, offsetX: T2, offsetY: f2, color: g2 } = o3, F2 = [u$a(T2), u$a(f2)];
    this._createOrResizeResources(i3, p2, c2, B2);
    const O2 = this._horizontalBlurFBO, E2 = this._verticalBlurFBO;
    a2.setStencilWriteMask(0), a2.setStencilTestEnabled(false), a2.setDepthWriteEnabled(false), a2.setDepthTestEnabled(false);
    const b2 = this._layerFBOTexture;
    s2.copyToTexture(0, 0, p2, c2, 0, 0, b2), this._quad || (this._quad = new n$h(a2, [-1, -1, 1, -1, -1, 1, 1, 1])), a2.setViewport(0, 0, B2[0], B2[1]);
    const w2 = this._quad;
    w2.bind(), a2.setBlendingEnabled(false);
    const x2 = u2.getProgram(h2.blur, [{ name: "radius", value: Math.ceil(m2) }]);
    a2.useProgram(x2), a2.bindFramebuffer(O2), a2.bindTexture(s2.colorTexture, 4), x2.setUniform1i("u_colorTexture", 4), x2.setUniform2fv("u_texSize", B2), x2.setUniform2fv("u_direction", _$2), x2.setUniform1f("u_sigma", m2), w2.draw(), a2.bindFramebuffer(E2), a2.bindTexture(O2.colorTexture, 5), x2.setUniform1i("u_colorTexture", 5), x2.setUniform2fv("u_direction", d$6), w2.draw(), a2.bindFramebuffer(s2), a2.setViewport(0, 0, p2, c2);
    const M2 = u2.getProgram(h2.composite);
    a2.useProgram(M2), a2.bindTexture(E2.colorTexture, 2), M2.setUniform1i("u_blurTexture", 2), a2.bindTexture(b2, 3), M2.setUniform1i("u_layerFBOTexture", 3), M2.setUniform4fv("u_shadowColor", [g2[3] * (g2[0] / 255), g2[3] * (g2[1] / 255), g2[3] * (g2[2] / 255), g2[3]]), M2.setUniformMatrix3fv("u_displayViewMat3", l2.displayMat3), M2.setUniform2fv("u_shadowOffset", F2), w2.draw(), a2.setBlendingEnabled(true), a2.setStencilTestEnabled(true), a2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), w2.unbind();
  }
  _createOrResizeResources(e3, t2, r2, _2) {
    const { context: d2 } = e3;
    this._horizontalBlurFBO && this._size[0] === t2 && this._size[1] === r2 || (this._size[0] = t2, this._size[1] = r2, this._horizontalBlurFBO ? this._horizontalBlurFBO.resize(_2[0], _2[1]) : this._horizontalBlurFBO = new x$1(d2, { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.NONE, width: _2[0], height: _2[1] }, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.LINEAR, flipped: false, width: _2[0], height: _2[1] }), this._verticalBlurFBO ? this._verticalBlurFBO.resize(_2[0], _2[1]) : this._verticalBlurFBO = new x$1(d2, { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.NONE, width: _2[0], height: _2[1] }, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.LINEAR, flipped: false, width: _2[0], height: _2[1] }), this._layerFBOTexture ? this._layerFBOTexture.resize(t2, r2) : this._layerFBOTexture = new E$2(d2, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.LINEAR, flipped: false, width: t2, height: r2 }));
  }
}
class l$6 {
  constructor() {
    this._size = [0, 0];
  }
  dispose() {
    this._layerFBOTexture && (this._layerFBOTexture.dispose(), this._layerFBOTexture = null);
  }
  draw(t2, s2, r2) {
    const { width: i3, height: a2 } = s2;
    this._createOrResizeResources(t2, i3, a2);
    const { context: l2, painter: o3 } = t2, { amount: T2 } = r2, h2 = l2.gl, n2 = this._layerFBOTexture;
    l2.bindFramebuffer(s2), s2.copyToTexture(0, 0, i3, a2, 0, 0, n2), l2.setBlendingEnabled(true), l2.setStencilTestEnabled(false), l2.setDepthTestEnabled(false), l2.setClearColor(0, 0, 0, 0), l2.clear(h2.COLOR_BUFFER_BIT), o3.blitTexture(l2, n2, L.NEAREST, T2);
  }
  _createOrResizeResources(l2, o3, T2) {
    const { context: h2 } = l2;
    this._layerFBOTexture && this._size[0] === o3 && this._size[1] === T2 || (this._size[0] = o3, this._size[1] = T2, this._layerFBOTexture ? this._layerFBOTexture.resize(o3, T2) : this._layerFBOTexture = new E$2(h2, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.NEAREST, flipped: false, width: o3, height: T2 }));
  }
}
function c$2(o3) {
  switch (o3) {
    case "bloom":
    case "blur":
    case "opacity":
    case "drop-shadow":
      return o3;
    default:
      return "colorize";
  }
}
const f$2 = { colorize: () => new l$7(), blur: () => new b$1(), bloom: () => new c$4(), opacity: () => new l$6(), "drop-shadow": () => new c$3() };
class i$3 {
  constructor() {
    this._effectMap = new Map();
  }
  dispose() {
    this._effectMap.forEach((o3) => o3.dispose()), this._effectMap.clear();
  }
  getPostProcessingEffects(o3) {
    if (!o3 || o3.length === 0)
      return [];
    const e3 = [];
    for (const t2 of o3) {
      const o4 = c$2(t2.type);
      let s2 = this._effectMap.get(o4);
      s2 || (s2 = f$2[o4](), this._effectMap.set(o4, s2)), e3.push({ postProcessingEffect: s2, effect: t2 });
    }
    return e3;
  }
}
class a$4 {
  constructor(e3, t2) {
    var _a;
    this.brushes = e3, this.name = t2.name, this.drawPhase = t2.drawPhase || I$2.MAP, this._targetFn = t2.target, this.effects = t2.effects || [], this.enableDefaultDraw = (_a = t2.enableDefaultDraw) != null ? _a : () => true;
  }
  render(e3) {
    const { context: t2, profiler: r2 } = e3, s2 = this._targetFn(), a2 = this.drawPhase & e3.drawPhase;
    if (r2.recordPassStart(this.name), a2) {
      this.enableDefaultDraw() && this._doRender(e3, s2), r2.recordPassEnd();
      for (const r3 of this.effects) {
        if (!r3.enable())
          continue;
        const a3 = r3.apply, n2 = r3.args && r3.args(), i3 = t2.getViewport(), o3 = t2.getBoundFramebufferObject(), f2 = e3.passOptions;
        this._bindEffect(e3, a3, n2), this._doRender(e3, s2, a3.defines), this._drawAndUnbindEffect(e3, a3, i3, o3, f2, n2);
      }
    }
  }
  _doRender(e3, s2, a2) {
    if (t$d(s2))
      return;
    const { profiler: n2, context: i3 } = e3;
    for (const t2 of this.brushes) {
      if (n2.recordBrushStart(t2.name), r$b(t2.brushEffect)) {
        const r2 = i3.getViewport(), n3 = i3.getBoundFramebufferObject(), o3 = e3.passOptions;
        this._bindEffect(e3, t2.brushEffect), this._drawWithBrush(t2, e3, s2, a2), this._drawAndUnbindEffect(e3, t2.brushEffect, r2, n3, o3);
      } else
        this._drawWithBrush(t2, e3, s2, a2);
      n2.recordBrushEnd();
    }
  }
  _drawWithBrush(t2, r2, s2, a2) {
    a$h(s2) ? (t2.prepareState(r2, a2), t2.drawMany(r2, s2, a2)) : s2.visible && (t2.prepareState(r2, a2), t2.draw(r2, s2, a2));
  }
  _bindEffect(e3, t2, r2) {
    const { profiler: s2 } = e3;
    s2.recordPassStart(this.name + "." + t2.name), t2.bind(e3, r2);
    const a2 = t2.createOptions(e3, r2);
    e3.passOptions = a2;
  }
  _drawAndUnbindEffect(e3, t2, r2, s2, a2, n2) {
    const { profiler: i3, context: o3 } = e3;
    e3.passOptions = a2, i3.recordBrushStart(t2.name), t2.draw(e3, n2), t2.unbind(e3, n2), o3.bindFramebuffer(s2);
    const { x: f2, y: d2, width: h2, height: c2 } = r2;
    o3.setViewport(f2, d2, h2, c2), i3.recordBrushEnd(), i3.recordPassEnd();
  }
}
function D(e3, t2) {
  switch (e3) {
    case E$3.LINE:
      return n$i.line;
    case E$3.TEXT:
      return n$i.text;
    case E$3.LABEL:
      return n$i.label;
    case E$3.FILL:
      return t2 === S$2.DOT_DENSITY ? n$i.dotDensity : n$i.fill;
    case E$3.MARKER:
      switch (t2) {
        case S$2.HEATMAP:
          return n$i.heatmap;
        case S$2.PIE_CHART:
          return n$i.pieChart;
        default:
          return n$i.marker;
      }
  }
}
class I {
  constructor(e3, t2, s2) {
    this.context = e3, this._blitRenderer = new _$7(), this._worldExtentClipRenderer = new f$4(), this._isClippedToWorldExtent = false, this._brushCache = new Map(), this._vtlMaterialManager = new o$7(), this._blendEffect = new _$6(), this._fboPool = [], this.effects = { highlight: new n$2(), hittest: new c$5(), hittestVTL: new i$4(), integrate: new o$3(), insideEffect: new r$4("inside"), outsideEffect: new r$4("outside") }, this.materialManager = new h$4(e3), this.textureManager = new V(t2, s2), this.textureUploadManager = new i$6(e3, t2), this._effectsManager = new i$3();
  }
  get vectorTilesMaterialManager() {
    return this._vtlMaterialManager;
  }
  getRenderTarget() {
    return this._renderTarget;
  }
  setRenderTarget(e3) {
    this._renderTarget = e3;
  }
  getFbos(e3, t2) {
    if (e3 !== this._lastWidth || t2 !== this._lastHeight) {
      if (this._lastWidth = e3, this._lastHeight = t2, this._fbos) {
        for (const s3 in this._fbos)
          this._fbos[s3].resize(e3, t2);
        return this._fbos;
      }
      const s2 = { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, samplingMode: L.NEAREST, wrapMode: D$2.CLAMP_TO_EDGE, width: e3, height: t2 }, r2 = { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.DEPTH_STENCIL_RENDER_BUFFER }, i3 = new s$d(this.context, { width: e3, height: t2, internalFormat: B$2.DEPTH_STENCIL });
      this._stencilBuf = i3, this._fbos = { output: new x$1(this.context, r2, s2, i3), blend: new x$1(this.context, r2, s2, i3), effect0: new x$1(this.context, r2, s2, i3) };
    }
    return this._fbos;
  }
  acquireFbo(e3, t2) {
    let s2;
    s2 = this._fboPool.length > 0 ? this._fboPool.pop() : new x$1(this.context, { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.DEPTH_STENCIL_RENDER_BUFFER }, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, samplingMode: L.NEAREST, wrapMode: D$2.CLAMP_TO_EDGE, width: e3, height: t2 }, this._stencilBuf);
    const r2 = s2.descriptor;
    return r2.width === e3 && r2.height === t2 || s2.resize(e3, t2), s2;
  }
  releaseFbo(e3) {
    this._fboPool.push(e3);
  }
  getSharedStencilBuffer() {
    return this._stencilBuf;
  }
  beforeRenderLayers(t2, s2 = null) {
    const { width: r2, height: i3 } = t2.getViewport();
    this._prevFBO = t2.getBoundFramebufferObject();
    const n2 = this.getFbos(r2, i3);
    if (t2.bindFramebuffer(n2.output), t2.setColorMask(true, true, true, true), r$b(s2)) {
      const { r: e3, g: r3, b: i4, a: n3 } = s2.color;
      t2.setClearColor(n3 * e3 / 255, n3 * r3 / 255, n3 * i4 / 255, n3);
    } else
      t2.setClearColor(0, 0, 0, 0);
    t2.setDepthWriteEnabled(true), t2.setClearDepth(1), t2.clear(t2.gl.COLOR_BUFFER_BIT | t2.gl.DEPTH_BUFFER_BIT), t2.setDepthWriteEnabled(false);
  }
  beforeRenderLayer(e3, t2, s2) {
    const { context: r2, blendMode: i3, effects: n2, requireFBO: o3, drawPhase: a2 } = e3;
    if (o3 || j$2(a2, i3, n2, s2))
      r2.bindFramebuffer(this._fbos.blend), r2.setColorMask(true, true, true, true), r2.setClearColor(0, 0, 0, 0), r2.setDepthWriteEnabled(true), r2.setClearDepth(1), r2.clear(r2.gl.COLOR_BUFFER_BIT | r2.gl.DEPTH_BUFFER_BIT), r2.setDepthWriteEnabled(false);
    else {
      const e4 = this._getOutputFBO();
      r2.bindFramebuffer(e4);
    }
    r2.setDepthWriteEnabled(false), r2.setDepthTestEnabled(false), r2.setStencilTestEnabled(true), r2.setClearStencil(t2), r2.setStencilWriteMask(255), r2.clear(r2.gl.STENCIL_BUFFER_BIT);
  }
  compositeLayer(s2, r2) {
    const { context: i3, blendMode: n2, effects: a2, requireFBO: h2, drawPhase: l2 } = s2;
    if (h2 || j$2(l2, n2, a2, r2)) {
      r$b(a2) && a2.length > 0 && l2 === I$2.MAP && this._applyEffects(s2, a2);
      const h3 = this._getOutputFBO();
      i3.bindFramebuffer(h3), i3.setStencilTestEnabled(false), i3.setStencilWriteMask(0), i3.setBlendingEnabled(true), i3.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), i3.setColorMask(true, true, true, true);
      const f2 = t$d(n2) || l2 === I$2.HIGHLIGHT ? "normal" : n2;
      this._blendEffect.draw(s2, this._fbos.blend.colorTexture, L.NEAREST, f2, r2);
    }
  }
  renderLayers(e3) {
    if (e3.bindFramebuffer(this._prevFBO), !this._fbos)
      return;
    const t2 = this._getOutputFBO();
    e3.setDepthTestEnabled(false), e3.setStencilWriteMask(0), this._isClippedToWorldExtent ? (e3.setStencilTestEnabled(true), e3.setStencilFunction(I$3.EQUAL, 1, 255)) : e3.setStencilTestEnabled(false), this.blitTexture(e3, t2.colorTexture, L.NEAREST);
  }
  prepareDisplay(t2, s2, r2) {
    const { context: i3 } = t2;
    if (i3.bindFramebuffer(this._prevFBO), i3.setColorMask(true, true, true, true), r$b(s2)) {
      const { r: e3, g: t3, b: r3, a: n2 } = s2.color;
      i3.setClearColor(n2 * e3 / 255, n2 * t3 / 255, n2 * r3 / 255, n2);
    } else
      i3.setClearColor(0, 0, 0, 0);
    i3.setStencilWriteMask(255), i3.setClearStencil(0), i3.clear(i3.gl.COLOR_BUFFER_BIT | i3.gl.STENCIL_BUFFER_BIT), this._isClippedToWorldExtent = this._worldExtentClipRenderer.render(t2, r2);
  }
  dispose() {
    if (this.materialManager.dispose(), this.textureManager.dispose(), this.textureUploadManager.destroy(), this._blitRenderer = a$e(this._blitRenderer), this._worldExtentClipRenderer = a$e(this._worldExtentClipRenderer), this._brushCache && (this._brushCache.forEach((e3) => e3.dispose()), this._brushCache.clear(), this._brushCache = null), this._fbos)
      for (const e3 in this._fbos)
        this._fbos[e3] && this._fbos[e3].dispose();
    for (const e3 of this._fboPool)
      e3.dispose();
    if (this._fboPool.length = 0, this.effects)
      for (const e3 in this.effects)
        this.effects[e3] && this.effects[e3].dispose();
    this._effectsManager.dispose(), this._vtlMaterialManager = a$e(this._vtlMaterialManager), this._prevFBO = null;
  }
  getBrush(e3, t2) {
    const s2 = D(e3, t2);
    let r2 = this._brushCache.get(s2);
    return r2 === void 0 && (r2 = new s2(), this._brushCache.set(s2, r2)), this._brushCache.get(s2);
  }
  renderObject(e3, t2, s2, i3) {
    const n2 = n$i[s2];
    if (!n2)
      return null;
    let o3 = this._brushCache.get(n2);
    o3 === void 0 && (o3 = new n2(), this._brushCache.set(n2, o3)), o3.prepareState(e3, i3), o3.draw(e3, t2, i3);
  }
  renderObjects(e3, t2, s2, i3) {
    const n2 = n$i[s2];
    if (!n2)
      return null;
    let o3 = this._brushCache.get(n2);
    o3 === void 0 && (o3 = new n2(), this._brushCache.set(n2, o3)), o3.drawMany(e3, t2, i3);
  }
  registerRenderPass(e3) {
    const t2 = e3.brushes.map((e4) => (this._brushCache.has(e4) || this._brushCache.set(e4, new e4()), this._brushCache.get(e4)));
    return new a$4(t2, e3);
  }
  setHighlightOptions(e3) {
    this.effects.highlight.setHighlightOptions(e3);
  }
  blitTexture(e3, t2, s2, r2 = 1) {
    e3.setBlendingEnabled(true), e3.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e3.setColorMask(true, true, true, true), this._blitRenderer.render(e3, t2, s2, r2);
  }
  getPostProcessingEffects(e3) {
    return this._effectsManager.getPostProcessingEffects(e3);
  }
  _getOutputFBO() {
    return this._renderTarget != null ? this._renderTarget : this._fbos.output;
  }
  _applyEffects(e3, t2) {
    const { context: s2 } = e3, r2 = this._effectsManager.getPostProcessingEffects(t2);
    for (const { postProcessingEffect: i3, effect: n2 } of r2)
      s2.bindFramebuffer(this._fbos.blend), i3.draw(e3, this._fbos.blend, n2);
  }
}
function j$2(t2, s2, r2, i3) {
  return t2 !== I$2.HIGHLIGHT && (i3 !== 1 || r$b(s2) && s2 !== "normal" || r$b(r2) && r2.length > 0);
}
const n$1 = has("esri-2d-profiler");
class i$2 {
  constructor(s2, i3) {
    if (this._events = new n$j(), this._entries = new Map(), this._timings = new s$e(10), this._currentContainer = null, this._currentPass = null, this._currentBrush = null, this._currentSummary = null, !n$1)
      return;
    this._ext = T$3(s2.gl, {}), this._debugOutput = i3;
    const o3 = s2.gl;
    if (this.enableCommandLogging) {
      for (const e3 in o3)
        if (typeof o3[e3] == "function") {
          const t2 = o3[e3], s3 = e3.includes("draw");
          o3[e3] = (...r2) => (this._events.emit("command", { container: this._currentContainer, pass: this._currentPass, brush: this._currentBrush, method: e3, args: r2, isDrawCommand: s3 }), this._currentSummary && (this._currentSummary.commands++, s3 && this._currentSummary.drawCommands++), t2.apply(o3, r2));
        }
    }
  }
  get enableCommandLogging() {
    return !(typeof n$1 == "object" && n$1.disableCommands);
  }
  recordContainerStart(e3) {
    n$1 && (this._currentContainer = e3);
  }
  recordContainerEnd() {
    n$1 && (this._currentContainer = null);
  }
  recordPassStart(e3) {
    n$1 && (this._currentPass = e3, this._initSummary());
  }
  recordPassEnd() {
    n$1 && (this._currentPass = null, this._emitSummary());
  }
  recordBrushStart(e3) {
    n$1 && (this._currentBrush = e3);
  }
  recordBrushEnd() {
    n$1 && (this._currentBrush = null);
  }
  recordStart(e3) {
    if (n$1 && r$b(this._ext)) {
      if (this._entries.has(e3)) {
        const t3 = this._entries.get(e3), r2 = this._ext.resultAvailable(t3.query), n2 = this._ext.disjoint();
        if (r2 && !n2) {
          const r3 = this._ext.getResult(t3.query) / 1e6;
          let n3 = 0;
          if (r$b(this._timings.enqueue(r3))) {
            const e4 = this._timings.entries, t4 = e4.length;
            let s2 = 0;
            for (const r4 of e4)
              s2 += r4;
            n3 = s2 / t4;
          }
          const i3 = r3.toFixed(2), o3 = n3 ? n3.toFixed(2) : "--";
          this.enableCommandLogging ? (console.groupCollapsed(`Frame report for ${e3}, ${i3} ms (${o3} last 10 avg)
${t3.commandsLen} Commands (${t3.drawCommands} draw)`), console.log("RenderPass breakdown: "), console.table(t3.summaries), console.log("Commands: ", t3.commands), console.groupEnd()) : console.log(`Frame report for ${e3}, ${i3} ms (${o3} last 10 avg)`), this._debugOutput.innerHTML = `${i3} (${o3})`;
        }
        for (const e4 of t3.handles)
          e4.remove();
        this._ext.deleteQuery(t3.query), this._entries.delete(e3);
      }
      const t2 = { name: e3, query: this._ext.createQuery(), commands: [], commandsLen: 0, drawCommands: 0, summaries: [], handles: [] };
      this.enableCommandLogging && (t2.handles.push(this._events.on("command", (e4) => {
        t2.commandsLen++, t2.commands.push(e4), e4.isDrawCommand && t2.drawCommands++;
      })), t2.handles.push(this._events.on("summary", (e4) => {
        t2.summaries.push(e4);
      }))), this._ext.beginTimeElapsed(t2.query), this._entries.set(e3, t2);
    }
  }
  recordEnd(e3) {
    n$1 && r$b(this._ext) && this._entries.has(e3) && this._ext.endTimeElapsed();
  }
  _initSummary() {
    this.enableCommandLogging && (this._currentSummary = { container: this._currentContainer, pass: this._currentPass, drawCommands: 0, commands: 0 });
  }
  _emitSummary() {
    this.enableCommandLogging && this._currentSummary && this._events.emit("summary", this._currentSummary);
  }
}
const O = 2e3;
class P extends i$d {
  constructor(s2, i3) {
    super(), this._trash = new Set(), this._renderRemainingTime = 0, this._lastFrameRenderTime = 0, this.renderRequested = false, this.stage = this, this._stationary = true;
    const { canvas: a2 = document.createElement("canvas"), alpha: h2 = true, stencil: l2 = true, contextOptions: m2 = {} } = i3;
    this._canvas = a2;
    const g2 = o$i("2d", a2, { alpha: h2, antialias: false, depth: true, stencil: l2 });
    this.context = new y$3(r$b(g2) ? g2 : null, m2), this.resourceManager = new o$a(), this.painter = new I(this.context, this, this.resourceManager), has("esri-2d-profiler") && (this._debugOutput = document.createElement("div"), this._debugOutput.setAttribute("style", "margin: 24px 64px; position: absolute; color: red;"), s2.appendChild(this._debugOutput)), this._renderParameters = { drawPhase: 0, state: this.state, pixelRatio: window.devicePixelRatio, stationary: false, globalOpacity: 1, blendMode: null, deltaTime: -1, time: 0, inFadeTransition: false, effects: null, context: this.context, painter: this.painter, timeline: i3.timeline || new e$c(), renderingOptions: i3.renderingOptions, requestRender: () => this.requestRender(), allowDelayedRender: false, requireFBO: false, profiler: new i$2(this.context, this._debugOutput), dataUploadCounter: 0 }, this._taskHandle = A$1({ render: (e3) => this.renderFrame(e3) }), this._taskHandle.pause(), this._lostWebGLContextHandle = r$g(a2, "webglcontextlost", () => {
      this.emit("webgl-error", { error: new s$a("webgl-context-lost") });
    }), this._bufferPool = new n$k(), a2.setAttribute("style", "width: 100%; height:100%; display:block;"), s2.appendChild(a2);
  }
  destroy() {
    this.removeAllChildren(), this._emptyTrash(), this._taskHandle.remove(), this._taskHandle = null, this._lostWebGLContextHandle && (this._lostWebGLContextHandle.remove(), this._lostWebGLContextHandle = null), this._canvas.parentNode && this._canvas.parentNode.removeChild(this._canvas), this._debugOutput && this._debugOutput.parentNode && this._debugOutput.parentNode.removeChild(this._debugOutput), this._bufferPool.destroy(), this.highlightOptions = null, this.resourceManager.destroy(), this.painter.dispose(), this.context.dispose(), this._canvas = null;
  }
  get background() {
    return this._background;
  }
  set background(e3) {
    this._background = e3, this.requestRender();
  }
  get bufferPool() {
    return this._bufferPool;
  }
  get highlightOptions() {
    return this._highlightOptions;
  }
  set highlightOptions(e3) {
    this._highlightOptionsHandle && (this._highlightOptionsHandle.remove(), this._highlightOptionsHandle = null), this._highlightOptions = e3, this._highlightOptions && (this._highlightOptionsHandle = l$i(() => {
      var _a;
      return (_a = this._highlightOptions) == null ? void 0 : _a.version;
    }, () => {
      this.painter.setHighlightOptions(e3), this.requestRender();
    }, h$a));
  }
  get renderingOptions() {
    return this._renderingOptions;
  }
  set renderingOptions(e3) {
    this._renderingOptions = e3, this.requestRender();
  }
  get state() {
    return this._state;
  }
  set state(e3) {
    this._state = e3, this.requestRender();
  }
  get stationary() {
    return this._stationary;
  }
  set stationary(e3) {
    this._stationary !== e3 && (this._stationary = e3, this.requestRender());
  }
  trashDisplayObject(e3) {
    this._trash.add(e3), this.requestRender();
  }
  untrashDisplayObject(e3) {
    return this._trash.delete(e3);
  }
  requestRender() {
    this._renderRemainingTime = O, this.renderRequested || (this.renderRequested = true, this.emit("will-render"), this._taskHandle.resume());
  }
  renderFrame(e3) {
    const t2 = this._lastFrameRenderTime ? e3.time - this._lastFrameRenderTime : 0;
    this._renderRemainingTime -= t2, this._renderRemainingTime <= 0 && this._taskHandle.pause(), this._lastFrameRenderTime = e3.time, this.renderRequested = false, this._renderParameters.state = this._state, this._renderParameters.stationary = this.stationary, this._renderParameters.pixelRatio = window.devicePixelRatio, this._renderParameters.globalOpacity = 1, this._renderParameters.time = e3.time, this._renderParameters.deltaTime = e3.deltaTime, this._renderParameters.effects = null, this.processRender(this._renderParameters), this._emptyTrash(), this.emit("post-render");
  }
  _createTransforms() {
    return { dvs: e$b() };
  }
  renderChildren(e3) {
    for (const t2 of this.children)
      t2.beforeRender(e3);
    this._renderChildren(this.children, e3);
    for (const t2 of this.children)
      t2.afterRender(e3);
  }
  _renderChildren(e3, t2) {
    const r2 = this.context;
    this.painter.textureUploadManager.upload(), r2.resetInfo(), t2.profiler.recordStart("drawLayers"), t2.dataUploadCounter = 0, t2.drawPhase = I$2.MAP, this.painter.beforeRenderLayers(r2, this.background);
    for (const s2 of e3)
      s2.processRender(t2);
    this.painter.prepareDisplay(t2, this.background, this.state.padding), this.painter.renderLayers(r2), t2.drawPhase = I$2.HIGHLIGHT, this.painter.beforeRenderLayers(r2);
    for (const s2 of e3)
      s2.processRender(t2);
    this.painter.renderLayers(r2);
    if (this._isLabelDrawPhaseRequired(e3)) {
      t2.drawPhase = I$2.LABEL, this.painter.beforeRenderLayers(r2);
      for (const r3 of e3)
        r3.processRender(t2);
      this.painter.renderLayers(r2);
    }
    if (has("esri-tiles-debug")) {
      t2.drawPhase = I$2.DEBUG, this.painter.beforeRenderLayers(r2);
      for (const r3 of e3)
        r3.processRender(t2);
      this.painter.renderLayers(r2);
    }
    t2.profiler.recordEnd("drawLayers"), r2.logInfo();
  }
  doRender(e3) {
    const t2 = this.context, { state: r2, pixelRatio: s2 } = e3;
    this._resizeCanvas(e3), t2.setViewport(0, 0, s2 * r2.size[0], s2 * r2.size[1]), t2.setDepthWriteEnabled(true), t2.setStencilWriteMask(255), super.doRender(e3);
  }
  async takeScreenshot(e3) {
    const { framebufferWidth: t2, framebufferHeight: r2 } = { framebufferWidth: Math.round(this.state.size[0] * e3.resolutionScale), framebufferHeight: Math.round(this.state.size[1] * e3.resolutionScale) }, s2 = 1, i3 = this.context, n2 = this._state.clone();
    if (e3.rotation != null) {
      const t3 = n2.viewpoint;
      n2.viewpoint.rotation = e3.rotation, n2.viewpoint = t3;
    }
    const a2 = __spreadProps(__spreadValues({}, this._renderParameters), { drawPhase: null, globalOpacity: 1, stationary: true, state: n2, pixelRatio: s2, time: performance.now(), deltaTime: 0, blendMode: null, effects: null, inFadeTransition: false }), o3 = new x$1(i3, { colorTarget: Y.TEXTURE, depthStencilTarget: V$1.DEPTH_STENCIL_RENDER_BUFFER, width: t2, height: r2 }), h2 = i3.getBoundFramebufferObject(), d2 = i3.getViewport();
    i3.bindFramebuffer(o3), i3.setViewport(0, 0, t2, r2), this._renderChildren(e3.children, a2);
    const l2 = this._readbackScreenshot(o3, __spreadProps(__spreadValues({}, e3.cropArea), { y: r2 - (e3.cropArea.y + e3.cropArea.height) }));
    i3.bindFramebuffer(h2), i3.setViewport(d2.x, d2.y, d2.width, d2.height), this.requestRender();
    const p2 = await l2;
    let u2;
    return e3.outputScale === 1 ? u2 = p2 : (u2 = new ImageData(Math.round(p2.width * e3.outputScale), Math.round(p2.height * e3.outputScale)), m$6(p2, u2, true)), u2;
  }
  async _readbackScreenshot(e3, t2) {
    const r2 = e$d(t2.width, t2.height, document.createElement("canvas"));
    return await e3.readPixelsAsync(t2.x, t2.y, t2.width, t2.height, P$2.RGBA, G$1.UNSIGNED_BYTE, new Uint8Array(r2.data.buffer)), r2;
  }
  _resizeCanvas(e3) {
    const t2 = this._canvas, r2 = t2.style, { state: { size: s2 }, pixelRatio: i3 } = e3, n2 = s2[0], a2 = s2[1], o3 = Math.round(n2 * i3), h2 = Math.round(a2 * i3);
    t2.width === o3 && t2.height === h2 || (t2.width = o3, t2.height = h2), r2.width = n2 + "px", r2.height = a2 + "px";
  }
  _emptyTrash() {
    for (; this._trash.size > 0; ) {
      const e3 = Array.from(this._trash);
      this._trash.clear();
      for (const t2 of e3)
        t2.processDetach();
    }
  }
  _isLabelDrawPhaseRequired(e3) {
    let t2 = false;
    for (const r2 of e3) {
      if (!(r2 instanceof i$d)) {
        t2 = t2 || false;
        break;
      }
      if (r2.hasLabels)
        return true;
      t2 = t2 || this._isLabelDrawPhaseRequired(r2.children);
    }
    return t2;
  }
}
const e2 = 2, i$1 = 1, o$1 = 0, h$2 = 1, r$2 = 2;
class l$5 {
  constructor(t2, e3, o3) {
    this._debugMap = new Map(), this._width = t2 * o3, this._height = e3 * o3, this._pixelRatio = o3;
    const h2 = Math.ceil(this._width / i$1), r2 = Math.ceil(this._height / i$1);
    this._cols = h2, this._rows = r2, this._cells = t$g.create(h2 * r2);
  }
  insertMetrics(t2) {
    const s2 = this._hasCollision(t2);
    return s2 === o$1 && this._markMetrics(t2), s2;
  }
  getCellId(t2, s2) {
    return t2 + s2 * this._cols;
  }
  has(t2) {
    return this._cells.has(t2);
  }
  hasRange(t2, s2) {
    return this._cells.hasRange(t2, s2);
  }
  set(t2) {
    this._cells.set(t2);
  }
  setRange(t2, s2) {
    this._cells.setRange(t2, s2);
  }
  _collide(s2, e3, l2, n2) {
    const c2 = s2 - l2 / 2, a2 = e3 - n2 / 2, _2 = c2 + l2, d2 = a2 + n2;
    if (_2 < 0 || d2 < 0 || c2 > this._width || a2 > this._height)
      return h$2;
    const u2 = a$i(Math.floor(c2 / i$1), 0, this._cols), p2 = a$i(Math.floor(a2 / i$1), 0, this._rows), M2 = a$i(Math.ceil(_2 / i$1), 0, this._cols), f2 = a$i(Math.ceil(d2 / i$1), 0, this._rows);
    for (let t2 = p2; t2 <= f2; t2++)
      for (let s3 = u2; s3 <= M2; s3++) {
        const e4 = this.getCellId(s3, t2);
        if (this.has(e4))
          return r$2;
      }
    return o$1;
  }
  _mark(s2, e3, o3, h2, r2) {
    const l2 = s2 - o3 / 2, n2 = e3 - h2 / 2, c2 = l2 + o3, a2 = n2 + h2, _2 = a$i(Math.floor(l2 / i$1), 0, this._cols), d2 = a$i(Math.floor(n2 / i$1), 0, this._rows), u2 = a$i(Math.ceil(c2 / i$1), 0, this._cols), p2 = a$i(Math.ceil(a2 / i$1), 0, this._rows);
    for (let t2 = d2; t2 <= p2; t2++)
      for (let s3 = _2; s3 <= u2; s3++) {
        const e4 = this.getCellId(s3, t2);
        this._debugMap.set(e4, r2), this.set(e4);
      }
    return false;
  }
  _hasCollision(t2) {
    const s2 = t2.id;
    let i3 = 0, l2 = 0;
    t2.save();
    do {
      const s3 = t2.boundsCount;
      i3 += s3;
      for (let i4 = 0; i4 < s3; i4++) {
        const s4 = t2.boundsComputedAnchorX(i4), o3 = t2.boundsComputedAnchorY(i4), n2 = (t2.boundsWidth(i4) + e2) * this._pixelRatio, c2 = (t2.boundsHeight(i4) + e2) * this._pixelRatio;
        switch (this._collide(s4, o3, n2, c2)) {
          case r$2:
            return r$2;
          case h$2:
            l2++;
        }
      }
    } while (t2.peekId() === s2 && t2.next());
    return t2.restore(), i3 === l2 ? h$2 : o$1;
  }
  _markMetrics(t2) {
    const s2 = t2.id;
    t2.save();
    do {
      const s3 = t2.boundsCount;
      for (let i3 = 0; i3 < s3; i3++) {
        const s4 = t2.boundsComputedAnchorX(i3), o3 = t2.boundsComputedAnchorY(i3), h2 = (t2.boundsWidth(i3) + e2) * this._pixelRatio, r2 = (t2.boundsHeight(i3) + e2) * this._pixelRatio;
        this._mark(s4, o3, h2, r2, t2.id);
      }
    } while (t2.peekId() === s2 && t2.next());
    t2.restore();
  }
}
const r$1 = Math.PI;
function a$3(e3, t2) {
  switch (t2.transformationType) {
    case i$e.Additive:
      return s$3(e3, t2);
    case i$e.Constant:
      return u$2(t2, e3);
    case i$e.ClampedLinear:
      return o2(e3, t2);
    case i$e.Proportional:
      return l$4(e3, t2);
    case i$e.Stops:
      return c$1(e3, t2);
    case i$e.RealWorldSize:
      return m$1(e3, t2);
    case i$e.Identity:
      return e3;
    case i$e.Unknown:
      return null;
  }
}
function i2(e3, t2) {
  return typeof e3 == "number" ? e3 : a$3(t2, e3);
}
function s$3(e3, t2) {
  return e3 + (i2(t2.minSize, e3) || t2.minDataValue);
}
function u$2(e3, t2) {
  const n2 = e3.stops;
  let r2 = n2 && n2.length && n2[0].size;
  return r2 == null && (r2 = e3.minSize), i2(r2, t2);
}
function o2(e3, t2) {
  const n2 = (e3 - t2.minDataValue) / (t2.maxDataValue - t2.minDataValue), r2 = i2(t2.minSize, e3), a2 = i2(t2.maxSize, e3);
  return e3 <= t2.minDataValue ? r2 : e3 >= t2.maxDataValue ? a2 : r2 + n2 * (a2 - r2);
}
function l$4(t2, n2) {
  const r2 = t2 / n2.minDataValue, a2 = i2(n2.minSize, t2), s2 = i2(n2.maxSize, t2);
  let u2 = null;
  return u2 = r2 * a2, a$i(u2, a2, s2);
}
function c$1(e3, t2) {
  const [n2, r2, a2] = p$2(e3, t2.cache.ipData);
  if (n2 === r2)
    return i2(t2.stops[n2].size, e3);
  {
    const s2 = i2(t2.stops[n2].size, e3);
    return s2 + (i2(t2.stops[r2].size, e3) - s2) * a2;
  }
}
function m$1(n2, a2) {
  const s2 = m$7[a2.valueUnit], u2 = i2(a2.minSize, n2), o3 = i2(a2.maxSize, n2), { valueRepresentation: l2 } = a2;
  let c2 = null;
  return c2 = l2 === "area" ? 2 * Math.sqrt(n2 / r$1) / s2 : l2 === "radius" || l2 === "distance" ? 2 * n2 / s2 : n2 / s2, a$i(c2, u2, o3);
}
function p$2(e3, t2) {
  if (!t2)
    return;
  let n2 = 0, r2 = t2.length - 1;
  return t2.some((t3, a2) => e3 < t3 ? (r2 = a2, true) : (n2 = a2, false)), [n2, r2, (e3 - t2[n2]) / (t2[r2] - t2[n2])];
}
const d$5 = 254, u$1 = 255, f$1 = 0;
function b(e3, i3) {
  const o3 = [];
  e3.forEachTile((e4) => o3.push(e4)), o3.sort((e4, t2) => e4.instanceId - t2.instanceId), o3.forEach((e4) => {
    r$b(e4.labelMetrics) && e4.isReady && i3(e4, e4.labelMetrics.getCursor());
  });
}
function y(e3) {
  return e3.layer && (e3.layer.type === "feature" || e3.layer.type === "csv" || e3.layer.type === "geojson" || e3.layer.type === "ogc-feature" || e3.layer.type === "stream" || e3.layer.type === "subtype-group" || e3.layer.type === "wfs");
}
function p$1(e3) {
  return (t2) => u$a(a$3(t2, e3));
}
function m(e3) {
  const t2 = "visualVariables" in e3 && e3.visualVariables;
  if (!t2)
    return null;
  for (const i3 of t2)
    if (i3.type === "size")
      return p$1(i3);
  return null;
}
function h$1(e3) {
  for (const t2 of e3) {
    const e4 = "featureReduction" in t2 && t2.featureReduction && "labelingInfo" in t2.featureReduction && t2.featureReduction, i3 = [...t2.labelingInfo || [], ...(e4 == null ? void 0 : e4.labelingInfo) || []];
    if (!t2.labelsVisible || !i3.length)
      continue;
    if (i3.some((e5) => e5.deconflictionStrategy === "none"))
      return true;
  }
  return false;
}
function M(t2, i3) {
  var _a;
  if (!y(i3))
    return;
  const o3 = i3.layer.type === "subtype-group" ? i3.layer.sublayers.items : [i3.layer], r2 = i3.layer.geometryType, n2 = !h$1(o3), s2 = {};
  if (i3.layer.type !== "subtype-group") {
    if (((_a = i3.tileRenderer) == null ? void 0 : _a.type) === "heatmap")
      return;
    const e3 = m(i3.layer.renderer);
    s2[0] = e3;
  }
  const l2 = i3.tileRenderer;
  if (t$d(l2))
    return;
  const a2 = i3.layer.visible && !i3.suspended;
  t2.push({ tileRenderer: l2, vvEvaluators: s2, deconflictionEnabled: n2, geometryType: r2, visible: a2 });
}
class g$1 {
  run(e3, t2, i3) {
    const o3 = [];
    for (let r2 = e3.length - 1; r2 >= 0; r2--) {
      M(o3, e3[r2]);
    }
    this._transformMetrics(o3), this._runCollision(o3, t2, i3);
  }
  _runCollision(e3, t2, i3) {
    const [o3, r2] = t2.state.size, s2 = new l$5(o3, r2, t2.pixelRatio);
    for (const { tileRenderer: n2, deconflictionEnabled: l2, visible: a2 } of e3) {
      const e4 = n2.featuresView.attributeView;
      l2 ? a2 ? (this._prepare(n2), this._collideVisible(s2, n2, i3), this._collideInvisible(s2, n2)) : b(n2, (t3, i4) => {
        for (; i4.nextId(); )
          e4.setLabelMinZoom(i4.id, u$1);
      }) : b(n2, (t3, i4) => {
        for (; i4.nextId(); )
          e4.setLabelMinZoom(i4.id, f$1), a2 && s2.insertMetrics(i4);
      });
    }
  }
  _isFiltered(t2, i3, n2) {
    const s2 = i3.getFilterFlags(t2), l2 = !n2.hasFilter || !!(s2 & U$2), a2 = t$d(n2.featureEffect) || n2.featureEffect.excludedLabelsVisible || !!(s2 & V$2);
    return !(l2 && a2);
  }
  _prepare(e3) {
    const t2 = e3.featuresView.attributeView, i3 = new Set();
    b(e3, (o3, r2) => {
      for (; r2.nextId(); ) {
        if (i3.has(r2.id))
          continue;
        if (i3.add(r2.id), this._isFiltered(r2.id, t2, e3.layerView)) {
          t2.setLabelMinZoom(r2.id, d$5);
          continue;
        }
        t2.getLabelMinZoom(r2.id) !== f$1 ? t2.setLabelMinZoom(r2.id, u$1) : t2.setLabelMinZoom(r2.id, f$1);
      }
    });
  }
  _collideVisible(e3, t2, i3) {
    const o3 = t2.featuresView.attributeView, r2 = new Set();
    b(t2, (t3, n2) => {
      for (; n2.nextId(); )
        if (!r2.has(n2.id))
          if (t3.key.level === i3) {
            if (o3.getLabelMinZoom(n2.id) === 0) {
              switch (e3.insertMetrics(n2)) {
                case h$2:
                  break;
                case r$2:
                  o3.setLabelMinZoom(n2.id, d$5), r2.add(n2.id);
                  break;
                case o$1:
                  o3.setLabelMinZoom(n2.id, f$1), r2.add(n2.id);
              }
            }
          } else
            o3.setLabelMinZoom(n2.id, d$5);
    });
  }
  _collideInvisible(e3, t2) {
    const i3 = t2.featuresView.attributeView, o3 = new Set();
    b(t2, (t3, r2) => {
      for (; r2.nextId(); )
        if (!o3.has(r2.id) && i3.getLabelMinZoom(r2.id) === u$1) {
          switch (e3.insertMetrics(r2)) {
            case h$2:
              break;
            case r$2:
              i3.setLabelMinZoom(r2.id, u$1), o3.add(r2.id);
              break;
            case o$1:
              i3.setLabelMinZoom(r2.id, f$1), o3.add(r2.id);
          }
        }
    });
  }
  _transformMetrics(e3) {
    for (const { tileRenderer: i3, geometryType: o3, vvEvaluators: r2 } of e3)
      b(i3, (e4, n2) => {
        const s2 = i3.featuresView.attributeView, l2 = e4.transforms.labelMat2d;
        l2[4] = Math.round(l2[4]), l2[5] = Math.round(l2[5]);
        const a2 = o3 === "polyline";
        for (; n2.next(); ) {
          const e5 = n2.boundsCount, i4 = n2.anchorX, o4 = n2.anchorY;
          let c2 = n2.size;
          const d2 = r2[0];
          if (r$b(d2)) {
            const e6 = d2(s2.getVVSize(n2.id));
            c2 = isNaN(e6) || e6 == null || e6 === 1 / 0 ? c2 : e6;
          }
          const u2 = n2.directionX * (c2 / 2), f2 = n2.directionY * (c2 / 2);
          for (let t2 = 0; t2 < e5; t2++) {
            let e6 = i4, r3 = n2.anchorY;
            if (a2) {
              let i5 = e6 + n2.boundsX(t2) + u2, o5 = r3 + n2.boundsY(t2) + f2;
              i5 = l2[0] * i5 + l2[2] * o5 + l2[4], o5 = l2[1] * i5 + l2[3] * o5 + l2[5], n2.setBoundsComputedAnchorX(t2, Math.floor(i5)), n2.setBoundsComputedAnchorY(t2, Math.floor(o5));
            } else {
              e6 = l2[0] * i4 + l2[2] * o4 + l2[4], r3 = l2[1] * i4 + l2[3] * o4 + l2[5];
              const s3 = e6 + n2.boundsX(t2) + u2, a3 = r3 + n2.boundsY(t2) + f2;
              n2.setBoundsComputedAnchorX(t2, s3), n2.setBoundsComputedAnchorY(t2, a3);
            }
          }
        }
      });
  }
}
const p = 32;
let l$3 = class extends a$j(m$8) {
  constructor(e3) {
    super(e3), this._applyVisibilityPassThrottled = e$e(this._applyVisibilityPass, p, this), this.lastUpdateId = -1, this.updateRequested = false, this.view = null;
  }
  initialize() {
    this.collisionEngine = new g$1();
  }
  destroy() {
    this.collisionEngine = null, this._applyVisibilityPassThrottled.remove(), this._applyVisibilityPassThrottled = null;
  }
  get updating() {
    return has("esri-2d-log-updating") && console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`), this.updateRequested;
  }
  update(e3) {
    this._applyVisibilityPassThrottled(e3);
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.view.requestUpdate());
  }
  processUpdate(e3) {
    this._set("updateParameters", e3), this.updateRequested && (this.updateRequested = false, this.update(e3));
  }
  _applyVisibilityPass(e3) {
    try {
      const t2 = this.view.featuresTilingScheme.getClosestInfoForScale(e3.state.scale).level;
      this.collisionEngine.run(this.view.allLayerViews.items, e3, t2);
    } catch (t2) {
    }
  }
};
e$f([y$4()], l$3.prototype, "updateRequested", void 0), e$f([y$4({ readOnly: true })], l$3.prototype, "updateParameters", void 0), e$f([y$4()], l$3.prototype, "updating", null), e$f([y$4()], l$3.prototype, "view", void 0), l$3 = e$f([n$l("esri.views.2d.layers.labels.LabelManager")], l$3);
const d$4 = l$3;
const a$2 = { container: "esri-zoom-box__container", overlay: "esri-zoom-box__overlay", background: "esri-zoom-box__overlay-background", box: "esri-zoom-box__outline" }, n = { zoom: "Shift", counter: "Ctrl" };
let h = class extends m$8 {
  constructor(t2) {
    super(t2), this._container = null, this._overlay = null, this._backgroundShape = null, this._boxShape = null, this._box = { x: 0, y: 0, width: 0, height: 0 }, this._redraw = this._redraw.bind(this);
  }
  destroy() {
    this.view = null;
  }
  set view(t2) {
    this._handles && this._handles.forEach((t3) => {
      t3.remove();
    }), this._handles = null, this._destroyOverlay(), this._set("view", t2), t2 && (t2.on("drag", [n.zoom], (t3) => this._handleDrag(t3, 1), P$4.INTERNAL), t2.on("drag", [n.zoom, n.counter], (t3) => this._handleDrag(t3, -1), P$4.INTERNAL));
  }
  _start() {
    this._createContainer(), this._createOverlay(), this.navigation.begin();
  }
  _update(t2, e3, i3, r2) {
    this._box.x = t2, this._box.y = e3, this._box.width = i3, this._box.height = r2, this._rafId || (this._rafId = requestAnimationFrame(this._redraw));
  }
  _end(t2, e3, r2, o3, s2) {
    const a2 = this.view, n2 = a2.toMap(c$e(t2 + 0.5 * r2, e3 + 0.5 * o3));
    let h2 = Math.max(r2 / a2.width, o3 / a2.height);
    s2 === -1 && (h2 = 1 / h2), this._destroyOverlay(), this.navigation.end(), a2.goTo({ center: n2, scale: a2.scale * h2 });
  }
  _updateBox(t2, e3, i3, r2) {
    const o3 = this._boxShape;
    o3.setAttributeNS(null, "x", "" + t2), o3.setAttributeNS(null, "y", "" + e3), o3.setAttributeNS(null, "width", "" + i3), o3.setAttributeNS(null, "height", "" + r2), o3.setAttributeNS(null, "class", a$2.box);
  }
  _updateBackground(t2, e3, i3, r2) {
    this._backgroundShape.setAttributeNS(null, "d", this._toSVGPath(t2, e3, i3, r2, this.view.width, this.view.height));
  }
  _createContainer() {
    const t2 = document.createElement("div");
    t2.className = a$2.container, this.view.root.appendChild(t2), this._container = t2;
  }
  _createOverlay() {
    const t2 = this.view.width, e3 = this.view.height, i3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    i3.setAttributeNS(null, "d", "M 0 0 L " + t2 + " 0 L " + t2 + " " + e3 + " L 0 " + e3 + " Z"), i3.setAttributeNS(null, "class", a$2.background);
    const r2 = document.createElementNS("http://www.w3.org/2000/svg", "rect"), o3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    o3.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), o3.setAttributeNS(null, "class", a$2.overlay), o3.appendChild(i3), o3.appendChild(r2), this._container.appendChild(o3), this._backgroundShape = i3, this._boxShape = r2, this._overlay = o3;
  }
  _destroyOverlay() {
    this._container && this._container.parentNode && this._container.parentNode.removeChild(this._container), this._container = this._backgroundShape = this._boxShape = this._overlay = null;
  }
  _toSVGPath(t2, e3, i3, r2, o3, s2) {
    const a2 = t2 + i3, n2 = e3 + r2;
    return "M 0 0 L " + o3 + " 0 L " + o3 + " " + s2 + " L 0 " + s2 + " ZM " + t2 + " " + e3 + " L " + t2 + " " + n2 + " L " + a2 + " " + n2 + " L " + a2 + " " + e3 + " Z";
  }
  _handleDrag(t2, e3) {
    const i3 = t2.x, r2 = t2.y, o3 = t2.origin.x, s2 = t2.origin.y;
    let a2, n2, h2, l2;
    switch (i3 > o3 ? (a2 = o3, h2 = i3 - o3) : (a2 = i3, h2 = o3 - i3), r2 > s2 ? (n2 = s2, l2 = r2 - s2) : (n2 = r2, l2 = s2 - r2), t2.action) {
      case "start":
        this._start();
        break;
      case "update":
        this._update(a2, n2, h2, l2);
        break;
      case "end":
        this._end(a2, n2, h2, l2, e3);
    }
    t2.stopPropagation();
  }
  _redraw() {
    if (!this._rafId)
      return;
    if (this._rafId = null, !this._overlay)
      return;
    const { x: t2, y: e3, width: i3, height: r2 } = this._box;
    this._updateBox(t2, e3, i3, r2), this._updateBackground(t2, e3, i3, r2), this._rafId = requestAnimationFrame(this._redraw);
  }
};
e$f([y$4()], h.prototype, "navigation", void 0), e$f([y$4()], h.prototype, "view", null), h = e$f([n$l("esri.views.2d.navigation.ZoomBox")], h);
const l$2 = h;
class t$2 {
  constructor(t2) {
    this._gain = t2, this.lastValue = void 0, this.filteredDelta = void 0;
  }
  update(t2) {
    if (this.hasLastValue()) {
      const e3 = this.computeDelta(t2);
      this._updateDelta(e3);
    }
    this.lastValue = t2;
  }
  reset() {
    this.lastValue = void 0, this.filteredDelta = void 0;
  }
  hasLastValue() {
    return this.lastValue !== void 0;
  }
  hasFilteredDelta() {
    return this.filteredDelta !== void 0;
  }
  computeDelta(t2) {
    return this.lastValue === void 0 ? NaN : t2 - this.lastValue;
  }
  _updateDelta(t2) {
    this.filteredDelta !== void 0 ? this.filteredDelta = (1 - this._gain) * this.filteredDelta + this._gain * t2 : this.filteredDelta = t2;
  }
}
class t$1 {
  constructor(t2, i3, o3) {
    this._initialVelocity = t2, this._stopVelocity = i3, this._friction = o3, this._duration = Math.abs(Math.log(Math.abs(this._initialVelocity) / this._stopVelocity) / Math.log(1 - this._friction));
  }
  get duration() {
    return this._duration;
  }
  isFinished(t2) {
    return t2 > this.duration;
  }
  get friction() {
    return this._friction;
  }
  value(t2) {
    return this.valueFromInitialVelocity(this._initialVelocity, t2);
  }
  valueDelta(t2, i3) {
    const o3 = this.value(t2);
    return this.value(t2 + i3) - o3;
  }
  valueFromInitialVelocity(t2, i3) {
    i3 = Math.min(i3, this.duration);
    const o3 = 1 - this.friction;
    return t2 * (o3 ** i3 - 1) / Math.log(o3);
  }
}
class c extends t$1 {
  constructor(e3, t2, i3, s2, n2) {
    super(e3, t2, i3), this._sceneVelocity = s2, this.direction = n2;
  }
  value(e3) {
    return super.valueFromInitialVelocity(this._sceneVelocity, e3);
  }
}
class l$1 {
  constructor(e3 = 300, t2 = 12, i3 = 0.84) {
    this._minimumInitialVelocity = e3, this._stopVelocity = t2, this._friction = i3, this.enabled = true, this._time = new t$2(0.6), this._screen = [new t$2(0.4), new t$2(0.4)], this._scene = [new t$2(0.6), new t$2(0.6), new t$2(0.6)], this._tmpDirection = n$g();
  }
  add(e3, t2, i3) {
    if (this.enabled) {
      if (this._time.hasLastValue()) {
        if (this._time.computeDelta(i3) < 0.015)
          return;
      }
      this._screen[0].update(e3[0]), this._screen[1].update(e3[1]), this._scene[0].update(t2[0]), this._scene[1].update(t2[1]), this._scene[2].update(t2[2]), this._time.update(i3);
    }
  }
  reset() {
    this._screen[0].reset(), this._screen[1].reset(), this._scene[0].reset(), this._scene[1].reset(), this._scene[2].reset(), this._time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this._screen[0].hasFilteredDelta() || !this._time.hasFilteredDelta())
      return null;
    const e3 = this._screen[0].filteredDelta, t2 = this._screen[1].filteredDelta, i3 = e3 == null || t2 == null ? 0 : Math.sqrt(e3 * e3 + t2 * t2), s2 = this._time.filteredDelta, n2 = s2 == null || i3 == null ? 0 : i3 / s2;
    return Math.abs(n2) < this._minimumInitialVelocity ? null : this.createMomentum(n2, this._stopVelocity, this._friction);
  }
  createMomentum(s2, n2, r2) {
    var _a, _b, _c;
    o$h(this._tmpDirection, (_a = this._scene[0].filteredDelta) != null ? _a : 0, (_b = this._scene[1].filteredDelta) != null ? _b : 0, (_c = this._scene[2].filteredDelta) != null ? _c : 0);
    const l2 = s$f(this._tmpDirection);
    l2 > 0 && g$7(this._tmpDirection, this._tmpDirection, 1 / l2);
    const h2 = this._time.filteredDelta;
    return new c(s2, n2, r2, h2 == null ? 0 : l2 / h2, this._tmpDirection);
  }
}
let d$3 = class extends m$8 {
  constructor(t2) {
    super(t2), this.animationTime = 0, this.momentumEstimator = new l$1(500, 6, 0.92), this.momentum = null, this.tmpMomentum = n$g(), this.momentumFinished = false, this.viewpoint = new u$b({ targetGeometry: new w$2(), scale: 0, rotation: 0 }), f$a(() => this.momentumFinished, () => this.navigation.stop());
  }
  begin(t2, i3) {
    this.navigation.begin(), this.momentumEstimator.reset(), this.addToEstimator(i3), this._previousDrag = i3;
  }
  update(t2, i3) {
    this.addToEstimator(i3);
    let o3 = i3.center.x, m2 = i3.center.y;
    const s2 = this._previousDrag;
    o3 = s2 ? s2.center.x - o3 : -o3, m2 = s2 ? m2 - s2.center.y : m2, t2.viewpoint = St(this.viewpoint, t2.viewpoint, [o3 || 0, m2 || 0]), this._previousDrag = i3;
  }
  end(t2, i3) {
    this.addToEstimator(i3);
    const o3 = t2.navigation.momentumEnabled;
    this.momentum = o3 ? this.momentumEstimator.evaluateMomentum() : null, this.animationTime = 0, this.momentum && this.onAnimationUpdate(t2), this._previousDrag = null, this.navigation.end();
  }
  addToEstimator(t2) {
    const i3 = t2.center.x, o3 = t2.center.y, m2 = i$f(-i3, o3), e3 = r$h(-i3, o3, 0);
    this.momentumEstimator.add(m2, e3, 1e-3 * t2.timestamp);
  }
  onAnimationUpdate(t2) {
    this.navigation.animationManager.animateContinous(t2.viewpoint, (i3, o3) => {
      this.momentumFinished = !this.momentum || this.momentum.isFinished(this.animationTime);
      const m2 = 1e-3 * o3;
      if (!this.momentumFinished) {
        const o4 = this.momentum.valueDelta(this.animationTime, m2);
        g$7(this.tmpMomentum, this.momentum.direction, o4), St(i3, i3, this.tmpMomentum), t2.constraints.constrainByGeometry(i3);
      }
      this.animationTime += m2;
    });
  }
  stopMomentumNavigation() {
    this.momentum && (this.momentumEstimator.reset(), this.momentum = null, this.navigation.stop());
  }
};
e$f([y$4()], d$3.prototype, "momentumFinished", void 0), e$f([y$4()], d$3.prototype, "viewpoint", void 0), e$f([y$4()], d$3.prototype, "navigation", void 0), d$3 = e$f([n$l("esri.views.2d.navigation.actions.Pan")], d$3);
const v$1 = d$3;
class s$2 {
  constructor(t2 = 2.5, i3 = 0.01, s2 = 0.95, l2 = 12) {
    this._minimumInitialVelocity = t2, this._stopVelocity = i3, this._friction = s2, this._maxVelocity = l2, this.enabled = true, this.value = new t$2(0.8), this.time = new t$2(0.3);
  }
  add(t2, e3) {
    if (this.enabled && e3 != null) {
      if (this.time.hasLastValue()) {
        if (this.time.computeDelta(e3) < 0.01)
          return;
        if (this.value.hasFilteredDelta()) {
          const e4 = this.value.computeDelta(t2);
          this.value.filteredDelta * e4 < 0 && this.value.reset();
        }
      }
      this.time.update(e3), this.value.update(t2);
    }
  }
  reset() {
    this.value.reset(), this.time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this.value.hasFilteredDelta() || !this.time.hasFilteredDelta())
      return null;
    let e3 = this.value.filteredDelta / this.time.filteredDelta;
    return e3 = a$i(e3, -this._maxVelocity, this._maxVelocity), Math.abs(e3) < this._minimumInitialVelocity ? null : this.createMomentum(e3, this._stopVelocity, this._friction);
  }
  createMomentum(t2, e3, s2) {
    return new t$1(t2, e3, s2);
  }
}
class a$1 extends s$2 {
  constructor(t2 = 3, a2 = 0.01, s2 = 0.95, o3 = 12) {
    super(t2, a2, s2, o3);
  }
  add(t2, a2) {
    const s2 = this.value.lastValue;
    if (s2 != null) {
      let a3 = t2 - s2;
      for (; a3 > Math.PI; )
        a3 -= 2 * Math.PI;
      for (; a3 < -Math.PI; )
        a3 += 2 * Math.PI;
      t2 = s2 + a3;
    }
    super.add(t2, a2);
  }
}
class r extends t$1 {
  constructor(e3, t2, r2) {
    super(e3, t2, r2);
  }
  value(e3) {
    const t2 = super.value(e3);
    return Math.exp(t2);
  }
  valueDelta(e3, t2) {
    const r2 = super.value(e3), s2 = super.value(e3 + t2) - r2;
    return Math.exp(s2);
  }
}
class s$1 extends s$2 {
  constructor(e3 = 2.5, t2 = 0.01, r2 = 0.95, s2 = 12) {
    super(e3, t2, r2, s2);
  }
  add(e3, t2) {
    super.add(Math.log(e3), t2);
  }
  createMomentum(e3, t2, s2) {
    return new r(e3, t2, s2);
  }
}
let _$1 = class extends m$8 {
  constructor(t2) {
    super(t2), this._animationTime = 0, this._momentumFinished = false, this._rotationMomentumEstimator = new a$1(0.6, 0.15, 0.95), this._rotationDirection = 1, this._zoomDirection = 1, this._zoomMomentumEstimator = new s$1(), this._zoomOnly = null, this.zoomMomentum = null, this.rotateMomentum = null, this.viewpoint = new u$b({ targetGeometry: new w$2(), scale: 0, rotation: 0 }), this.addHandles(f$a(() => this._momentumFinished, () => this.navigation.stop()));
  }
  begin(t2, o3) {
    this.navigation.begin(), this._rotationMomentumEstimator.reset(), this._zoomMomentumEstimator.reset(), this._zoomOnly = null, this._previousAngle = this._startAngle = o3.angle, this._previousRadius = this._startRadius = o3.radius, this._previousCenter = o3.center, this._updateTimestamp = null, t2.constraints.rotationEnabled && this.addToRotateEstimator(0, o3.timestamp), this.addToZoomEstimator(o3, 1);
  }
  update(t2, o3) {
    this._updateTimestamp === null && (this._updateTimestamp = o3.timestamp);
    const i3 = o3.angle, s2 = o3.radius, e3 = o3.center, n2 = Math.abs(180 * (i3 - this._startAngle) / Math.PI), m2 = Math.abs(s2 - this._startRadius), a2 = this._startRadius / s2;
    if (this._previousRadius) {
      const r2 = s2 / this._previousRadius;
      let h2 = 180 * (i3 - this._previousAngle) / Math.PI;
      this._rotationDirection = h2 >= 0 ? 1 : -1, this._zoomDirection = r2 >= 1 ? 1 : -1, t2.constraints.rotationEnabled ? (this._zoomOnly === null && o3.timestamp - this._updateTimestamp > 200 && (this._zoomOnly = m2 - n2 > 0), this._zoomOnly === null || this._zoomOnly ? h2 = 0 : this.addToRotateEstimator(i3 - this._startAngle, o3.timestamp)) : h2 = 0, this.addToZoomEstimator(o3, a2), this.navigation.setViewpoint([e3.x, e3.y], 1 / r2, h2, [this._previousCenter.x - e3.x, e3.y - this._previousCenter.y]);
    }
    this._previousAngle = i3, this._previousRadius = s2, this._previousCenter = e3;
  }
  end(t2) {
    this.rotateMomentum = this._rotationMomentumEstimator.evaluateMomentum(), this.zoomMomentum = this._zoomMomentumEstimator.evaluateMomentum(), this._animationTime = 0, (this.rotateMomentum || this.zoomMomentum) && this.onAnimationUpdate(t2), this.navigation.end();
  }
  addToRotateEstimator(t2, o3) {
    this._rotationMomentumEstimator.add(t2, 1e-3 * o3);
  }
  addToZoomEstimator(t2, o3) {
    this._zoomMomentumEstimator.add(o3, 1e-3 * t2.timestamp);
  }
  canZoomIn(t2) {
    const o3 = t2.scale, i3 = t2.constraints.effectiveMaxScale;
    return i3 === 0 || o3 > i3;
  }
  canZoomOut(t2) {
    const o3 = t2.scale, i3 = t2.constraints.effectiveMinScale;
    return i3 === 0 || o3 < i3;
  }
  onAnimationUpdate(t2) {
    this.navigation.animationManager.animateContinous(t2.viewpoint, (o3, i3) => {
      const s2 = !this.canZoomIn(t2) && this._zoomDirection > 1 || !this.canZoomOut(t2) && this._zoomDirection < 1, e3 = !this.rotateMomentum || this.rotateMomentum.isFinished(this._animationTime), n2 = s2 || !this.zoomMomentum || this.zoomMomentum.isFinished(this._animationTime), p2 = 1e-3 * i3;
      if (this._momentumFinished = e3 && n2, !this._momentumFinished) {
        const i4 = this.rotateMomentum ? Math.abs(this.rotateMomentum.valueDelta(this._animationTime, p2)) * this._rotationDirection * 180 / Math.PI : 0;
        let s3 = this.zoomMomentum ? Math.abs(this.zoomMomentum.valueDelta(this._animationTime, p2)) : 1;
        const e4 = n$m(), n3 = n$m();
        if (this._previousCenter) {
          r$c(e4, this._previousCenter.x, this._previousCenter.y), nt(n3, t2.size, t2.padding), s$g(e4, e4, n3);
          const { constraints: r2, scale: p3 } = t2, c2 = p3 * s3;
          s3 < 1 && !r2.canZoomInTo(c2) ? (s3 = p3 / r2.effectiveMaxScale, this.zoomMomentum = null, this.rotateMomentum = null) : s3 > 1 && !r2.canZoomOutTo(c2) && (s3 = p3 / r2.effectiveMinScale, this.zoomMomentum = null, this.rotateMomentum = null), Gt(o3, t2.viewpoint, s3, i4, e4, t2.size), t2.constraints.constrainByGeometry(o3);
        }
      }
      this._animationTime += p2;
    });
  }
  stopMomentumNavigation() {
    (this.rotateMomentum || this.zoomMomentum) && (this.rotateMomentum && (this._rotationMomentumEstimator.reset(), this.rotateMomentum = null), this.zoomMomentum && (this._zoomMomentumEstimator.reset(), this.zoomMomentum = null), this.navigation.stop());
  }
};
e$f([y$4()], _$1.prototype, "_momentumFinished", void 0), e$f([y$4()], _$1.prototype, "viewpoint", void 0), e$f([y$4()], _$1.prototype, "navigation", void 0), _$1 = e$f([n$l("esri.views.2d.navigation.actions.Pinch")], _$1);
const d$2 = _$1;
const u = n$m(), d$1 = n$m();
let j$1 = class extends m$8 {
  constructor(t2) {
    super(t2), this._previousCenter = n$m(), this.viewpoint = new u$b({ targetGeometry: new w$2(), scale: 0, rotation: 0 });
  }
  begin(t2, e3) {
    this.navigation.begin(), r$c(this._previousCenter, e3.center.x, e3.center.y);
  }
  update(t2, e3) {
    const { state: { size: o3, padding: r2 } } = t2;
    r$c(u, e3.center.x, e3.center.y), $$1(d$1, o3, r2), t2.viewpoint = bt$1(this.viewpoint, t2.state.paddedViewState.viewpoint, pt(d$1, this._previousCenter, u)), a$k(this._previousCenter, u);
  }
  end() {
    this.navigation.end();
  }
};
e$f([y$4()], j$1.prototype, "viewpoint", void 0), e$f([y$4()], j$1.prototype, "navigation", void 0), j$1 = e$f([n$l("esri.views.2d.actions.Rotate")], j$1);
const f = j$1;
const l = 10, w = 1, v = new u$b({ targetGeometry: new w$2() }), d = [0, 0], g = 250;
let _ = class extends m$8 {
  constructor(t2) {
    super(t2), this._endTimer = null, this.animationManager = null;
  }
  initialize() {
    this.pan = new v$1({ navigation: this }), this.rotate = new f({ navigation: this }), this.pinch = new d$2({ navigation: this }), this.zoomBox = new l$2({ view: this.view, navigation: this });
  }
  destroy() {
    this.pan.destroy(), this.rotate.destroy(), this.pinch.destroy(), this.zoomBox.destroy(), this.pan = this.rotate = this.pinch = this.zoomBox = this.animationManager = null;
  }
  begin() {
    this._set("interacting", true);
  }
  end() {
    this._lastEventTimestamp = performance.now(), this._startTimer(g);
  }
  async zoom(t2, i3 = this._getDefaultAnchor()) {
    if (this.stop(), this.begin(), this.view.constraints.snapToZoom && this.view.constraints.effectiveLODs)
      return t2 < 1 ? this.zoomIn(i3) : this.zoomOut(i3);
    this.setViewpoint(i3, t2, 0, [0, 0]);
  }
  async zoomIn(t2) {
    const i3 = this.view, o3 = i3.constraints.snapToNextScale(i3.scale);
    return this._zoomToScale(o3, t2);
  }
  async zoomOut(t2) {
    const i3 = this.view, o3 = i3.constraints.snapToPreviousScale(i3.scale);
    return this._zoomToScale(o3, t2);
  }
  setViewpoint(t2, i3, o3, n2) {
    this.begin(), this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, t2, i3, o3, n2), this.end();
  }
  setViewpointImmediate(t2, i3 = 0, o3 = [0, 0], n2 = this._getDefaultAnchor()) {
    this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, n2, t2, i3, o3);
  }
  continousRotateClockwise() {
    const t2 = this.get("view.viewpoint");
    this.animationManager.animateContinous(t2, (t3) => {
      bt$1(t3, t3, -w);
    });
  }
  continousRotateCounterclockwise() {
    const t2 = this.get("view.viewpoint");
    this.animationManager.animateContinous(t2, (t3) => {
      bt$1(t3, t3, w);
    });
  }
  resetRotation() {
    this.view.rotation = 0;
  }
  continousPanLeft() {
    this._continuousPan([-l, 0]);
  }
  continousPanRight() {
    this._continuousPan([l, 0]);
  }
  continousPanUp() {
    this._continuousPan([0, l]);
  }
  continousPanDown() {
    this._continuousPan([0, -l]);
  }
  stop() {
    this.pan.stopMomentumNavigation(), this.animationManager.stop(), this.end(), this._endTimer !== null && (clearTimeout(this._endTimer), this._endTimer = null, this._set("interacting", false));
  }
  _continuousPan(t2) {
    const i3 = this.view.viewpoint;
    this.animationManager.animateContinous(i3, (i4) => {
      St(i4, i4, t2), this.view.constraints.constrainByGeometry(i4);
    });
  }
  _startTimer(t2) {
    return this._endTimer !== null || (this._endTimer = setTimeout(() => {
      this._endTimer = null;
      const t3 = performance.now() - this._lastEventTimestamp;
      t3 < g ? this._endTimer = this._startTimer(t3) : this._set("interacting", false);
    }, t2)), this._endTimer;
  }
  _getDefaultAnchor() {
    const { size: t2, padding: { left: i3, right: o3, top: n2, bottom: e3 } } = this.view;
    return d[0] = 0.5 * (t2[0] - o3 + i3), d[1] = 0.5 * (t2[1] - e3 + n2), d;
  }
  async _zoomToScale(t2, i3 = this._getDefaultAnchor()) {
    const { view: o3 } = this, { constraints: n2, scale: e3, viewpoint: s2, size: a2, padding: r2 } = o3, h2 = n2.canZoomInTo(t2), m2 = n2.canZoomOutTo(t2);
    if (!(t2 < e3 && !h2 || t2 > e3 && !m2))
      return Rt(v, s2, t2 / e3, 0, i3, a2, r2), n2.constrainByGeometry(v), o3.goTo(v, { animate: true });
  }
  _scaleRotateTranslateViewpoint(t2, i3, o3, n2, e3) {
    const { view: s2 } = this, { size: a2, padding: h2, constraints: m2, scale: p2, viewpoint: u2 } = s2, l2 = p2 * o3, w2 = m2.canZoomInTo(l2), v2 = m2.canZoomOutTo(l2);
    return (o3 < 1 && !w2 || o3 > 1 && !v2) && (o3 = 1), St(u2, u2, e3), Rt(t2, u2, o3, n2, i3, a2, h2), m2.constrainByGeometry(t2);
  }
};
e$f([y$4()], _.prototype, "animationManager", void 0), e$f([y$4({ type: Boolean, readOnly: true })], _.prototype, "interacting", void 0), e$f([y$4()], _.prototype, "pan", void 0), e$f([y$4()], _.prototype, "pinch", void 0), e$f([y$4()], _.prototype, "rotate", void 0), e$f([y$4()], _.prototype, "view", void 0), e$f([y$4()], _.prototype, "zoomBox", void 0), _ = e$f([n$l("esri.views.2d.navigation.MapViewNavigation")], _);
const T = _;
const a = { shaders: { vertexShader: n$c("magnifier/magnifier.vert"), fragmentShader: n$c("magnifier/magnifier.frag") }, attributes: new Map([["a_pos", 0]]) };
function t(r2) {
  return e$8(r2, a);
}
async function s(s2) {
  const r2 = import("./mask-svg.js"), i3 = import("./overlay-svg.js"), o3 = t$h((await r2).default, { signal: s2 }), e3 = t$h((await i3).default, { signal: s2 }), m2 = { mask: await o3, overlay: await e3 };
  return f$7(s2), m2;
}
class j extends r$i {
  constructor() {
    super(), this._handles = new t$i(), this._resourcePixelRatio = 1, this.visible = false;
  }
  destroy() {
    this._handles.destroy(), this._handles = null, this._disposeRenderResources(), this._resourcesTask && (this._resourcesTask.abort(), this._resourcesTask = null);
  }
  get background() {
    return this._background;
  }
  set background(e3) {
    this._background = e3, this.requestRender();
  }
  get magnifier() {
    return this._magnifier;
  }
  set magnifier(e3) {
    this._magnifier = e3, this._handles.removeAll(), this._handles.add([l$i(() => e3.version, () => {
      this.visible = e3.visible && r$b(e3.position) && e3.size > 0, this.requestRender();
    }, h$a), l$i(() => [e3.maskUrl, e3.overlayUrl], () => this._reloadResources()), l$i(() => e3.size, () => {
      this._disposeRenderResources(), this.requestRender();
    })]);
  }
  _createTransforms() {
    return { dvs: e$b() };
  }
  doRender(e3) {
    var _a;
    const r2 = e3.context;
    if (!this._resourcesTask)
      return void this._reloadResources();
    if (e3.drawPhase !== I$2.MAP || !this._canRender())
      return;
    this._updateResources(e3);
    const s2 = this._magnifier;
    if (t$d(s2.position))
      return;
    const a2 = e3.pixelRatio, o3 = s2.size * a2, n2 = 1 / s2.factor, l2 = Math.ceil(n2 * o3);
    this._readbackTexture.resize(l2, l2);
    const { size: h2 } = e3.state, m2 = a2 * h2[0], u2 = a2 * h2[1], c2 = 0.5 * l2, _2 = 0.5 * l2, p2 = a$i(a2 * s2.position.x, c2, m2 - c2 - 1), f2 = a$i(u2 - a2 * s2.position.y, _2, u2 - _2 - 1);
    r2.setBlendingEnabled(true);
    const g2 = p2 - c2, b2 = f2 - _2, x2 = this._readbackTexture;
    r2.bindTexture(x2, 0), r2.gl.copyTexImage2D(x2.descriptor.target, 0, x2.descriptor.pixelFormat, g2, b2, l2, l2, 0);
    const R2 = (_a = this.background) == null ? void 0 : _a.color, y2 = R2 ? [R2.a * R2.r / 255, R2.a * R2.g / 255, R2.a * R2.b / 255, R2.a] : [1, 1, 1, 1], k2 = (p2 + s2.offset.x * a2) / m2 * 2 - 1, A2 = (f2 - s2.offset.y * a2) / u2 * 2 - 1, v2 = o3 / m2 * 2, E$12 = o3 / u2 * 2, j2 = this._program;
    r2.bindVAO(this._vertexArrayObject), r2.bindTexture(this._overlayTexture, 6), r2.bindTexture(this._maskTexture, 7), r2.useProgram(j2), j2.setUniform4fv("u_background", y2), j2.setUniform1i("u_readbackTexture", 0), j2.setUniform1i("u_overlayTexture", 6), j2.setUniform1i("u_maskTexture", 7), j2.setUniform4f("u_drawPos", k2, A2, v2, E$12), j2.setUniform1i("u_maskEnabled", s2.maskEnabled ? 1 : 0), j2.setUniform1i("u_overlayEnabled", s2.overlayEnabled ? 1 : 0), r2.setStencilTestEnabled(false), r2.setColorMask(true, true, true, true), r2.drawArrays(E.TRIANGLE_STRIP, 0, 4), r2.bindVAO();
  }
  _canRender() {
    return this.mask && this.overlay && this._magnifier != null;
  }
  _reloadResources() {
    this._resourcesTask && this._resourcesTask.abort();
    const s$12 = r$b(this._magnifier) ? this._magnifier.maskUrl : null, t2 = r$b(this._magnifier) ? this._magnifier.overlayUrl : null;
    this._resourcesTask = j$5(async (r2) => {
      const o3 = t$d(s$12) || t$d(t2) ? s(r2) : null, n2 = r$b(s$12) ? U$1(s$12, { responseType: "image", signal: r2 }).then((e3) => e3.data) : o3.then((e3) => e3.mask), l2 = r$b(t2) ? U$1(t2, { responseType: "image", signal: r2 }).then((e3) => e3.data) : o3.then((e3) => e3.overlay), [h2, m2] = await Promise.all([n2, l2]);
      this.mask = h2, this.overlay = m2, this._disposeRenderResources(), this.requestRender();
    });
  }
  _disposeRenderResources() {
    this._readbackTexture = a$e(this._readbackTexture), this._overlayTexture = a$e(this._overlayTexture), this._maskTexture = a$e(this._maskTexture), this._vertexArrayObject = a$e(this._vertexArrayObject), this._program = a$e(this._program);
  }
  _updateResources(e3) {
    if (e3.pixelRatio !== this._resourcePixelRatio && this._disposeRenderResources(), this._readbackTexture)
      return;
    const r2 = e3.context;
    this._resourcePixelRatio = e3.pixelRatio;
    const s2 = Math.ceil(this._magnifier.size * e3.pixelRatio);
    this._program = t(r2);
    const t$12 = new Uint16Array([0, 1, 0, 0, 1, 1, 1, 0]), i3 = a.attributes;
    this._vertexArrayObject = new a$f(r2, i3, m$9, { geometry: E$1.createVertex(r2, F$2.STATIC_DRAW, t$12) }), this.overlay.width = s2, this.overlay.height = s2, this._overlayTexture = new E$2(r2, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.NEAREST, flipped: true, preMultiplyAlpha: !It(this.overlay.src) || !e3.context.driverTest.svgAlwaysPremultipliesAlpha }, this.overlay), this.mask.width = s2, this.mask.height = s2, this._maskTexture = new E$2(r2, { target: M$3.TEXTURE_2D, pixelFormat: P$2.ALPHA, internalFormat: P$2.ALPHA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.NEAREST, flipped: true }, this.mask);
    const a$12 = 1 / this._magnifier.factor;
    this._readbackTexture = new E$2(r2, { target: M$3.TEXTURE_2D, pixelFormat: P$2.RGBA, internalFormat: P$2.RGBA, dataType: G$1.UNSIGNED_BYTE, wrapMode: D$2.CLAMP_TO_EDGE, samplingMode: L.LINEAR, flipped: false, width: Math.ceil(a$12 * s2), height: Math.ceil(a$12 * s2) });
  }
}
export { d$4 as LabelManager, j as MagnifierView2D, T as MapViewNavigation, P as Stage };
