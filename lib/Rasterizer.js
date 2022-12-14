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
import { aX as f$1, el as n$1, fo as U$1, fQ as j$1, ew as s$2, i$ as f$2 } from "./index.js";
import { o as o$3 } from "./_commonjsHelpers.js";
import { c as c$3 } from "./imageutils2.js";
import { p as pe, b as oe, r as r$1, t as t$1, c as a$2, d as a$3 } from "./cimAnalyzer.js";
import { r, e } from "./rasterizingUtils.js";
var i$1, s$1 = { exports: {} };
i$1 = function() {
  return function(e3) {
    var t2 = {};
    function r2(n2) {
      if (t2[n2])
        return t2[n2].exports;
      var i2 = t2[n2] = { exports: {}, id: n2, loaded: false };
      return e3[n2].call(i2.exports, i2, i2.exports, r2), i2.loaded = true, i2.exports;
    }
    return r2.m = e3, r2.c = t2, r2.p = "", r2(0);
  }([function(e3, t2, r2) {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isNotPNG = u2, t2.isNotAPNG = h2, t2.default = c2;
    var n2 = s2(r2(1)), i2 = r2(2);
    function s2(e4) {
      return e4 && e4.__esModule ? e4 : { default: e4 };
    }
    var a2 = new Error("Not a PNG"), o2 = new Error("Not an animated PNG");
    function u2(e4) {
      return e4 === a2;
    }
    function h2(e4) {
      return e4 === o2;
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
        return o2;
      var n3 = [], s3 = [], u3 = null, h3 = null, c3 = 0, f3 = new i2.APNG();
      if (p2(t3, function(e5, t4, r4, a3) {
        var o3 = new DataView(t4.buffer);
        switch (e5) {
          case "IHDR":
            u3 = t4.subarray(r4 + 8, r4 + 8 + a3), f3.width = o3.getUint32(r4 + 8), f3.height = o3.getUint32(r4 + 12);
            break;
          case "acTL":
            f3.numPlays = o3.getUint32(r4 + 8 + 4);
            break;
          case "fcTL":
            h3 && (f3.frames.push(h3), c3++), (h3 = new i2.Frame()).width = o3.getUint32(r4 + 8 + 4), h3.height = o3.getUint32(r4 + 8 + 8), h3.left = o3.getUint32(r4 + 8 + 12), h3.top = o3.getUint32(r4 + 8 + 16);
            var l3 = o3.getUint16(r4 + 8 + 20), p3 = o3.getUint16(r4 + 8 + 22);
            p3 === 0 && (p3 = 100), h3.delay = 1e3 * l3 / p3, h3.delay <= 10 && (h3.delay = 100), f3.playTime += h3.delay, h3.disposeOp = o3.getUint8(r4 + 8 + 24), h3.blendOp = o3.getUint8(r4 + 8 + 25), h3.dataParts = [], c3 === 0 && h3.disposeOp === 2 && (h3.disposeOp = 1);
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
        return o2;
      var m3 = new Blob(n3), g2 = new Blob(s3);
      return f3.frames.forEach(function(e5) {
        var t4 = [];
        t4.push(l2), u3.set(_2(e5.width), 0), u3.set(_2(e5.height), 4), t4.push(d2("IHDR", u3)), t4.push(m3), e5.dataParts.forEach(function(e6) {
          return t4.push(d2("IDAT", e6));
        }), t4.push(g2), e5.imageData = new Blob(t4, { type: "image/png" }), delete e5.dataParts, t4 = null;
      }), f3;
    }
    function p2(e4, t3) {
      var r3 = new DataView(e4.buffer), n3 = 8, i3 = void 0, s3 = void 0, a3 = void 0;
      do {
        s3 = r3.getUint32(n3), a3 = t3(i3 = f2(e4, n3 + 4, 4), e4, n3, s3), n3 += 12 + s3;
      } while (a3 !== false && i3 != "IEND" && n3 < e4.length);
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
      var r3 = e4.length + t3.length, i3 = new Uint8Array(r3 + 8), s3 = new DataView(i3.buffer);
      s3.setUint32(0, t3.length), i3.set(m2(e4), 4), i3.set(t3, 8);
      var a3 = (0, n2.default)(i3, 4, r3);
      return s3.setUint32(r3 + 4, a3), i3;
    }, _2 = function(e4) {
      return new Uint8Array([e4 >>> 24 & 255, e4 >>> 16 & 255, e4 >>> 8 & 255, 255 & e4]);
    };
  }, function(e3, t2) {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.default = function(e4) {
      for (var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n3 = -1, i3 = t3, s3 = t3 + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e4.length - t3); i3 < s3; i3++)
        n3 = n3 >>> 8 ^ r2[255 & (n3 ^ e4[i3])];
      return -1 ^ n3;
    };
    for (var r2 = new Uint32Array(256), n2 = 0; n2 < 256; n2++) {
      for (var i2 = n2, s2 = 0; s2 < 8; s2++)
        i2 = (1 & i2) != 0 ? 3988292384 ^ i2 >>> 1 : i2 >>> 1;
      r2[n2] = i2;
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
    }(), i2 = s2(r2(3));
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
          return new i2.default(t3, e5, r3);
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
    function i2(e4) {
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
    function o2(e4, t3) {
      if (typeof t3 != "function" && t3 !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
      e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e4, t3) : e4.__proto__ = t3);
    }
    var u2 = function(e4) {
      function t3(e5, r3, n3) {
        s2(this, t3);
        var i3 = a2(this, (t3.__proto__ || Object.getPrototypeOf(t3)).call(this));
        return i3.playbackRate = 1, i3._currentFrameNumber = 0, i3._ended = false, i3._paused = true, i3._numPlays = 0, i3._apng = e5, i3.context = r3, i3.stop(), n3 && i3.play(), i3;
      }
      return o2(t3, e4), n2(t3, [{ key: "renderNextFrame", value: function() {
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
    }(i2(r2(4)).default);
    t2.default = u2;
  }, function(e3, t2) {
    function r2() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }
    function n2(e4) {
      return typeof e4 == "function";
    }
    function i2(e4) {
      return typeof e4 == "number";
    }
    function s2(e4) {
      return typeof e4 == "object" && e4 !== null;
    }
    function a2(e4) {
      return e4 === void 0;
    }
    e3.exports = r2, r2.EventEmitter = r2, r2.prototype._events = void 0, r2.prototype._maxListeners = void 0, r2.defaultMaxListeners = 10, r2.prototype.setMaxListeners = function(e4) {
      if (!i2(e4) || e4 < 0 || isNaN(e4))
        throw TypeError("n must be a positive number");
      return this._maxListeners = e4, this;
    }, r2.prototype.emit = function(e4) {
      var t3, r3, i3, o2, u2, h2;
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
            o2 = Array.prototype.slice.call(arguments, 1), r3.apply(this, o2);
        }
      else if (s2(r3))
        for (o2 = Array.prototype.slice.call(arguments, 1), i3 = (h2 = r3.slice()).length, u2 = 0; u2 < i3; u2++)
          h2[u2].apply(this, o2);
      return true;
    }, r2.prototype.addListener = function(e4, t3) {
      var i3;
      if (!n2(t3))
        throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e4, n2(t3.listener) ? t3.listener : t3), this._events[e4] ? s2(this._events[e4]) ? this._events[e4].push(t3) : this._events[e4] = [this._events[e4], t3] : this._events[e4] = t3, s2(this._events[e4]) && !this._events[e4].warned && (i3 = a2(this._maxListeners) ? r2.defaultMaxListeners : this._maxListeners) && i3 > 0 && this._events[e4].length > i3 && (this._events[e4].warned = true, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e4].length), typeof console.trace == "function" && console.trace()), this;
    }, r2.prototype.on = r2.prototype.addListener, r2.prototype.once = function(e4, t3) {
      if (!n2(t3))
        throw TypeError("listener must be a function");
      var r3 = false;
      function i3() {
        this.removeListener(e4, i3), r3 || (r3 = true, t3.apply(this, arguments));
      }
      return i3.listener = t3, this.on(e4, i3), this;
    }, r2.prototype.removeListener = function(e4, t3) {
      var r3, i3, a3, o2;
      if (!n2(t3))
        throw TypeError("listener must be a function");
      if (!this._events || !this._events[e4])
        return this;
      if (a3 = (r3 = this._events[e4]).length, i3 = -1, r3 === t3 || n2(r3.listener) && r3.listener === t3)
        delete this._events[e4], this._events.removeListener && this.emit("removeListener", e4, t3);
      else if (s2(r3)) {
        for (o2 = a3; o2-- > 0; )
          if (r3[o2] === t3 || r3[o2].listener && r3[o2].listener === t3) {
            i3 = o2;
            break;
          }
        if (i3 < 0)
          return this;
        r3.length === 1 ? (r3.length = 0, delete this._events[e4]) : r3.splice(i3, 1), this._events.removeListener && this.emit("removeListener", e4, t3);
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
}, s$1.exports = i$1();
const a$1 = o$3(s$1.exports);
async function o$2(e3, t2) {
  const i2 = a$1(e3);
  if (i2 instanceof Error)
    throw i2;
  await i2.createImages(), f$1(t2);
  const { frames: s2, width: o2, height: u2 } = i2, h2 = document.createElement("canvas");
  h2.width = o2, h2.height = u2;
  const l2 = h2.getContext("2d"), c2 = [], p2 = [];
  for (const r2 of s2) {
    p2.push(n$1(r2.delay || 100));
    const e4 = r2.imageElement;
    r2.blendOp === 0 ? l2.globalCompositeOperation = "copy" : l2.globalCompositeOperation = "source-over";
    const t3 = r2.disposeOp === 2 && l2.getImageData(r2.left, r2.top, r2.width, r2.height);
    l2.drawImage(e4, r2.left, r2.top);
    const i3 = l2.getImageData(0, 0, o2, u2);
    c2.push(i3), r2.disposeOp === 0 || (r2.disposeOp === 1 ? l2.clearRect(r2.left, r2.top, r2.width, r2.height) : r2.disposeOp === 2 && l2.putImageData(t3, r2.left, r2.top));
  }
  return { frameDurations: p2, getFrame: (e4) => c2[e4], width: o2, height: u2 };
}
const u$2 = [137, 80, 78, 71, 13, 10, 26, 10];
function h$2(e3) {
  const t2 = new Uint8Array(e3);
  return !u$2.some((e4, r2) => e4 !== t2[r2]);
}
function l$2(e3) {
  if (!h$2(e3))
    return false;
  const t2 = new DataView(e3), r2 = new Uint8Array(e3);
  let n2, i2 = 8;
  do {
    const e4 = t2.getUint32(i2);
    if (n2 = String.fromCharCode.apply(String, Array.prototype.slice.call(r2.subarray(i2 + 4, i2 + 8))), n2 === "acTL")
      return true;
    i2 += 12 + e4;
  } while (n2 !== "IEND" && i2 < r2.length);
  return false;
}
var t = {}, n = {}, a = {};
Object.defineProperty(a, "__esModule", { value: true }), a.loop = a.conditional = a.parse = void 0;
var i = function e2(r2, t2) {
  var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : n2;
  if (Array.isArray(t2))
    t2.forEach(function(t3) {
      return e2(r2, t3, n2, a2);
    });
  else if (typeof t2 == "function")
    t2(r2, n2, a2, e2);
  else {
    var i2 = Object.keys(t2)[0];
    Array.isArray(t2[i2]) ? (a2[i2] = {}, e2(r2, t2[i2], n2, a2[i2])) : a2[i2] = t2[i2](r2, n2, a2, e2);
  }
  return n2;
};
a.parse = i;
var o$1 = function(e3, r2) {
  return function(t2, n2, a2, i2) {
    r2(t2, n2, a2) && i2(t2, e3, n2, a2);
  };
};
a.conditional = o$1;
var d = function(e3, r2) {
  return function(t2, n2, a2, i2) {
    for (var o2 = [], d2 = t2.pos; r2(t2, n2, a2); ) {
      var s2 = {};
      if (i2(t2, e3, n2, s2), t2.pos === d2)
        break;
      d2 = t2.pos, o2.push(s2);
    }
    return o2;
  };
};
a.loop = d;
var s = {};
Object.defineProperty(s, "__esModule", { value: true }), s.readBits = s.readArray = s.readUnsigned = s.readString = s.peekBytes = s.readBytes = s.peekByte = s.readByte = s.buildStream = void 0;
var c$2 = function(e3) {
  return { data: e3, pos: 0 };
};
s.buildStream = c$2;
var u$1 = function() {
  return function(e3) {
    return e3.data[e3.pos++];
  };
};
s.readByte = u$1;
var f = function() {
  var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return function(r2) {
    return r2.data[r2.pos + e3];
  };
};
s.peekByte = f;
var l$1 = function(e3) {
  return function(r2) {
    return r2.data.subarray(r2.pos, r2.pos += e3);
  };
};
s.readBytes = l$1;
var p = function(e3) {
  return function(r2) {
    return r2.data.subarray(r2.pos, r2.pos + e3);
  };
};
s.peekBytes = p;
var g = function(e3) {
  return function(r2) {
    return Array.from(l$1(e3)(r2)).map(function(e4) {
      return String.fromCharCode(e4);
    }).join("");
  };
};
s.readString = g;
var y = function(e3) {
  return function(r2) {
    var t2 = l$1(2)(r2);
    return e3 ? (t2[1] << 8) + t2[0] : (t2[0] << 8) + t2[1];
  };
};
s.readUnsigned = y;
var v = function(e3, r2) {
  return function(t2, n2, a2) {
    for (var i2 = typeof r2 == "function" ? r2(t2, n2, a2) : r2, o2 = l$1(e3), d2 = new Array(i2), s2 = 0; s2 < i2; s2++)
      d2[s2] = o2(t2);
    return d2;
  };
};
s.readArray = v;
var h$1 = function(e3, r2, t2) {
  for (var n2 = 0, a2 = 0; a2 < t2; a2++)
    n2 += e3[r2 + a2] && Math.pow(2, t2 - a2 - 1);
  return n2;
}, m = function(e3) {
  return function(r2) {
    for (var t2 = u$1()(r2), n2 = new Array(8), a2 = 0; a2 < 8; a2++)
      n2[7 - a2] = !!(t2 & 1 << a2);
    return Object.keys(e3).reduce(function(r3, t3) {
      var a3 = e3[t3];
      return a3.length ? r3[t3] = h$1(n2, a3.index, a3.length) : r3[t3] = n2[a3.index], r3;
    }, {});
  };
};
s.readBits = m, function(e3) {
  Object.defineProperty(e3, "__esModule", { value: true }), e3.default = void 0;
  var r2 = a, t2 = s, n2 = { blocks: function(e4) {
    for (var r3 = 0, n3 = [], a2 = e4.data.length, i3 = 0, o3 = (0, t2.readByte)()(e4); o3 !== r3 && o3; o3 = (0, t2.readByte)()(e4)) {
      if (e4.pos + o3 >= a2) {
        var d3 = a2 - e4.pos;
        n3.push((0, t2.readBytes)(d3)(e4)), i3 += d3;
        break;
      }
      n3.push((0, t2.readBytes)(o3)(e4)), i3 += o3;
    }
    for (var s2 = new Uint8Array(i3), c3 = 0, u3 = 0; u3 < n3.length; u3++)
      s2.set(n3[u3], c3), c3 += n3[u3].length;
    return s2;
  } }, i2 = (0, r2.conditional)({ gce: [{ codes: (0, t2.readBytes)(2) }, { byteSize: (0, t2.readByte)() }, { extras: (0, t2.readBits)({ future: { index: 0, length: 3 }, disposal: { index: 3, length: 3 }, userInput: { index: 6 }, transparentColorGiven: { index: 7 } }) }, { delay: (0, t2.readUnsigned)(true) }, { transparentColorIndex: (0, t2.readByte)() }, { terminator: (0, t2.readByte)() }] }, function(e4) {
    var r3 = (0, t2.peekBytes)(2)(e4);
    return r3[0] === 33 && r3[1] === 249;
  }), o2 = (0, r2.conditional)({ image: [{ code: (0, t2.readByte)() }, { descriptor: [{ left: (0, t2.readUnsigned)(true) }, { top: (0, t2.readUnsigned)(true) }, { width: (0, t2.readUnsigned)(true) }, { height: (0, t2.readUnsigned)(true) }, { lct: (0, t2.readBits)({ exists: { index: 0 }, interlaced: { index: 1 }, sort: { index: 2 }, future: { index: 3, length: 2 }, size: { index: 5, length: 3 } }) }] }, (0, r2.conditional)({ lct: (0, t2.readArray)(3, function(e4, r3, t3) {
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
  }), { frames: (0, r2.loop)([i2, c2, u2, o2, d2], function(e4) {
    var r3 = (0, t2.peekByte)()(e4);
    return r3 === 33 || r3 === 44;
  }) }];
  e3.default = f2;
}(n);
var x = {};
Object.defineProperty(x, "__esModule", { value: true }), x.deinterlace = void 0;
var B = function(e3, r2) {
  for (var t2 = new Array(e3.length), n2 = e3.length / r2, a2 = function(n3, a3) {
    var i3 = e3.slice(a3 * r2, (a3 + 1) * r2);
    t2.splice.apply(t2, [n3 * r2, r2].concat(i3));
  }, i2 = [0, 4, 2, 1], o2 = [8, 8, 4, 2], d2 = 0, s2 = 0; s2 < 4; s2++)
    for (var c2 = i2[s2]; c2 < n2; c2 += o2[s2])
      a2(c2, d2), d2++;
  return t2;
};
x.deinterlace = B;
var w = {};
Object.defineProperty(w, "__esModule", { value: true }), w.lzw = void 0;
var b = function(e3, r2, t2) {
  var n2, a2, i2, o2, d2, s2, c2, u2, f2, l2, p2, g2, y2, v2, h2, m2, x2 = 4096, B2 = -1, w2 = t2, b2 = new Array(t2), k2 = new Array(x2), A2 = new Array(x2), U2 = new Array(x2 + 1);
  for (d2 = (a2 = 1 << (l2 = e3)) + 1, n2 = a2 + 2, c2 = B2, i2 = (1 << (o2 = l2 + 1)) - 1, u2 = 0; u2 < a2; u2++)
    k2[u2] = 0, A2[u2] = u2;
  for (p2 = g2 = y2 = v2 = h2 = m2 = 0, f2 = 0; f2 < w2; ) {
    if (v2 === 0) {
      if (g2 < o2) {
        p2 += r2[m2] << g2, g2 += 8, m2++;
        continue;
      }
      if (u2 = p2 & i2, p2 >>= o2, g2 -= o2, u2 > n2 || u2 == d2)
        break;
      if (u2 == a2) {
        i2 = (1 << (o2 = l2 + 1)) - 1, n2 = a2 + 2, c2 = B2;
        continue;
      }
      if (c2 == B2) {
        U2[v2++] = A2[u2], c2 = u2, y2 = u2;
        continue;
      }
      for (s2 = u2, u2 == n2 && (U2[v2++] = y2, u2 = c2); u2 > a2; )
        U2[v2++] = A2[u2], u2 = k2[u2];
      y2 = 255 & A2[u2], U2[v2++] = y2, n2 < x2 && (k2[n2] = c2, A2[n2] = y2, (++n2 & i2) == 0 && n2 < x2 && (o2++, i2 += n2)), c2 = s2;
    }
    v2--, b2[h2++] = U2[v2], f2++;
  }
  for (f2 = h2; f2 < w2; f2++)
    b2[f2] = 0;
  return b2;
};
w.lzw = b, Object.defineProperty(t, "__esModule", { value: true });
var k = t.decompressFrames = t.decompressFrame = C = t.parseGIF = void 0, A = I(n), U = a, S = s, z = x, _ = w;
function I(e3) {
  return e3 && e3.__esModule ? e3 : { default: e3 };
}
var j = function(e3) {
  var r2 = new Uint8Array(e3);
  return (0, U.parse)((0, S.buildStream)(r2), A.default);
}, C = t.parseGIF = j, M = function(e3) {
  for (var r2 = e3.pixels.length, t2 = new Uint8ClampedArray(4 * r2), n2 = 0; n2 < r2; n2++) {
    var a2 = 4 * n2, i2 = e3.pixels[n2], o2 = e3.colorTable[i2] || [0, 0, 0];
    t2[a2] = o2[0], t2[a2 + 1] = o2[1], t2[a2 + 2] = o2[2], t2[a2 + 3] = i2 !== e3.transparentIndex ? 255 : 0;
  }
  return t2;
}, O = function(e3, r2, t2) {
  if (e3.image) {
    var n2 = e3.image, a2 = n2.descriptor.width * n2.descriptor.height, i2 = (0, _.lzw)(n2.data.minCodeSize, n2.data.blocks, a2);
    n2.descriptor.lct.interlaced && (i2 = (0, z.deinterlace)(i2, n2.descriptor.width));
    var o2 = { pixels: i2, dims: { top: e3.image.descriptor.top, left: e3.image.descriptor.left, width: e3.image.descriptor.width, height: e3.image.descriptor.height } };
    return n2.descriptor.lct && n2.descriptor.lct.exists ? o2.colorTable = n2.lct : o2.colorTable = r2, e3.gce && (o2.delay = 10 * (e3.gce.delay || 10), o2.disposalType = e3.gce.extras.disposal, e3.gce.extras.transparentColorGiven && (o2.transparentIndex = e3.gce.transparentColorIndex)), t2 && (o2.patch = M(o2)), o2;
  }
  console.warn("gif frame does not have associated image.");
};
t.decompressFrame = O;
var T = function(e3, r2) {
  return e3.frames.filter(function(e4) {
    return e4.image;
  }).map(function(t2) {
    return O(t2, e3.gct, r2);
  });
};
async function D(t2, n2) {
  const a2 = C(t2), i2 = k(a2, true), { width: o2, height: d2 } = a2.lsd, s2 = document.createElement("canvas");
  s2.width = o2, s2.height = d2;
  const c2 = s2.getContext("2d"), u2 = [], f2 = [];
  for (const l2 of i2) {
    f2.push(n$1(l2.delay || 100));
    const t3 = new ImageData(l2.patch, l2.dims.width, l2.dims.height), n3 = c$3(t3), a3 = l2.disposalType === 3 && c2.getImageData(l2.dims.left, l2.dims.top, l2.dims.width, l2.dims.height);
    c2.drawImage(n3, l2.dims.left, l2.dims.top);
    const i3 = c2.getImageData(0, 0, o2, d2);
    u2.push(i3), l2.disposalType === 1 || (l2.disposalType === 2 ? c2.clearRect(l2.dims.left, l2.dims.top, l2.dims.width, l2.dims.height) : l2.disposalType === 3 && c2.putImageData(a3, l2.dims.left, l2.dims.top));
  }
  return { frameDurations: f2, getFrame: (e3) => u2[e3], width: o2, height: d2 };
}
k = t.decompressFrames = T;
const F = [71, 73, 70];
function P(e3) {
  const r2 = new Uint8Array(e3);
  return !F.some((e4, t2) => e4 !== r2[t2]);
}
function G(e3) {
  if (!P(e3))
    return false;
  const r2 = new DataView(e3), t2 = r2.getUint8(10);
  let n2 = 13 + (128 & t2 ? 3 * 2 ** (1 + (7 & t2)) : 0), a2 = 0, i2 = false;
  for (; !i2; ) {
    switch (r2.getUint8(n2++)) {
      case 33:
        if (!o2())
          return false;
        break;
      case 44:
        d2();
        break;
      case 59:
        i2 = true;
        break;
      default:
        return false;
    }
    if (a2 > 1)
      return true;
  }
  function o2() {
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
class o {
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
    const i2 = this._inFlightResourceMap.get(e3);
    if (i2)
      return i2.then((e4) => ({ width: e4.width, height: e4.height }));
    const s2 = h(e3, t2);
    return this._inFlightResourceMap.set(e3, i2), s2.then((t3) => (this._inFlightResourceMap.delete(e3), this._resourceMap.set(e3, t3), { width: t3.width, height: t3.height }), () => ({ width: 0, height: 0 }));
  }
  deleteResource(e3) {
    this._inFlightResourceMap.delete(e3), this._resourceMap.delete(e3);
  }
}
async function c$1(i2, s2) {
  const n2 = window.URL.createObjectURL(i2);
  try {
    const { data: t2 } = await U$1(n2, __spreadProps(__spreadValues({}, s2), { responseType: "image" }));
    return t2;
  } catch (a2) {
    if (!j$1(a2))
      throw new s$2("mapview-invalid-resource", `Could not fetch requested resource at ${n2}`);
    throw a2;
  } finally {
    window.URL.revokeObjectURL(n2);
  }
}
async function h(e3, t2) {
  const { arrayBuffer: r2, mediaType: o2 } = await u(e3, t2), h2 = o2 === "image/png";
  if (o2 === "image/gif" && G(r2))
    return D(r2);
  if (h2 && l$2(r2))
    return o$2(r2, t2);
  return c$1(new Blob([r2], { type: o2 }), t2);
}
async function u(i2, s2) {
  let n2;
  const a2 = ";base64,";
  if (i2.includes(a2)) {
    const e3 = i2.indexOf(a2), t2 = i2.indexOf(a2) + a2.length, r2 = i2.substring(t2), s3 = atob(r2), o2 = new Uint8Array(s3.length);
    for (let i3 = 0; i3 < s3.length; i3++)
      o2[i3] = s3.charCodeAt(i3);
    n2 = { arrayBuffer: o2.buffer, mediaType: i2.substring(0, e3).replace("data:", "") };
  } else
    try {
      const t2 = await U$1(i2, __spreadValues({ responseType: "array-buffer" }, s2)), r2 = t2.data;
      n2 = { arrayBuffer: r2, mediaType: t2.getHeader("Content-Type") };
    } catch (o2) {
      if (!j$1(o2))
        throw new s$2("mapview-invalid-resource", `Could not fetch requested resource at ${i2}`);
    }
  return n2;
}
const l = 512;
class c {
  constructor(e3) {
    this._resourceManager = e3;
  }
  dispose() {
    this._rasterizationCanvas = null;
  }
  rasterizeJSONResource(m2, l2, c2) {
    if (this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas")), m2.type === "simple-fill" || m2.type === "esriSFS") {
      const [t2, r$12, i2] = r(this._rasterizationCanvas, m2.style, l2);
      return { size: [r$12, i2], image: new Uint32Array(t2.buffer), sdf: false, simplePattern: true, anchorX: 0, anchorY: 0, rasterizationScale: f$2(Math.ceil(l2)) };
    }
    if (m2.type === "simple-line" || m2.type === "esriSLS" || m2.type === "line" && m2.dashTemplate) {
      let e$1, r2;
      if (m2.type === "simple-line" || m2.type === "esriSLS")
        switch (e$1 = pe(m2.style, m2.cap), m2.cap) {
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
        e$1 = m2.dashTemplate, r2 = m2.cim.capStyle;
      const [a2, n2, s2] = e(e$1, r2);
      return { size: [n2, s2], image: new Uint32Array(a2.buffer), sdf: true, simplePattern: true, anchorX: 0, anchorY: 0 };
    }
    let f2, h2, p2, u2 = 1;
    if (m2.type === "simple-marker" || m2.type === "esriSMS" || m2.type === "line-marker" ? (f2 = oe.fromSimpleMarker(m2), p2 = r$1(f2)) : m2.cim && m2.cim.type === "CIMHatchFill" ? (f2 = oe.fromCIMHatchFill(m2.cim, l2), h2 = new t$1(f2.frame.xmin, -f2.frame.ymax, f2.frame.xmax - f2.frame.xmin, f2.frame.ymax - f2.frame.ymin), u2 = l2) : m2.cim.markerPlacement && m2.cim.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" ? (f2 = oe.fromCIMInsidePolygon(m2.cim), h2 = new t$1(f2.frame.xmin, -f2.frame.ymax, f2.frame.xmax - f2.frame.xmin, f2.frame.ymax - f2.frame.ymin)) : (f2 = m2.cim, p2 = r$1(f2)), p2 && !c2) {
      const [e3, t2, r2] = a$3(p2);
      return e3 ? { size: [t2, r2], image: new Uint32Array(e3.buffer), sdf: true, simplePattern: true, anchorX: 0, anchorY: 0, rasterizationScale: u2 } : null;
    }
    const [y2, d2, g2, C2, z2] = oe.rasterize(this._rasterizationCanvas, f2, h2, this._resourceManager, !c2);
    return y2 ? { size: [d2, g2], image: new Uint32Array(y2.buffer), sdf: false, simplePattern: false, anchorX: C2, anchorY: z2 } : null;
  }
  rasterizeImageResource(e3, t2, r2, a2) {
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas")), this._rasterizationCanvas.width = e3, this._rasterizationCanvas.height = t2;
    const i2 = this._rasterizationCanvas.getContext("2d");
    r2 instanceof ImageData ? i2.putImageData(r2, 0, 0) : (r2.setAttribute("width", `${e3}px`), r2.setAttribute("height", `${t2}px`), i2.drawImage(r2, 0, 0, e3, t2));
    const n2 = i2.getImageData(0, 0, e3, t2), s2 = new Uint8Array(n2.data);
    if (a2) {
      for (const m2 of a2)
        if (m2 && m2.oldColor && m2.oldColor.length === 4 && m2.newColor && m2.newColor.length === 4) {
          const [e4, t3, r3, a3] = m2.oldColor, [i3, n3, o3, l2] = m2.newColor;
          if (e4 === i3 && t3 === n3 && r3 === o3 && a3 === l2)
            continue;
          for (let m3 = 0; m3 < s2.length; m3 += 4)
            e4 === s2[m3] && t3 === s2[m3 + 1] && r3 === s2[m3 + 2] && a3 === s2[m3 + 3] && (s2[m3] = i3, s2[m3 + 1] = n3, s2[m3 + 2] = o3, s2[m3 + 3] = l2);
        }
    }
    let o2;
    for (let m2 = 0; m2 < s2.length; m2 += 4)
      o2 = s2[m2 + 3] / 255, s2[m2] = s2[m2] * o2, s2[m2 + 1] = s2[m2 + 1] * o2, s2[m2 + 2] = s2[m2 + 2] * o2;
    let c2 = s2, f2 = e3, h2 = t2;
    const p2 = l;
    if (f2 >= p2 || h2 >= p2) {
      const r3 = f2 / h2;
      r3 > 1 ? (f2 = p2, h2 = Math.round(p2 / r3)) : (h2 = p2, f2 = Math.round(p2 * r3)), c2 = new Uint8Array(4 * f2 * h2);
      const a3 = new Uint8ClampedArray(c2.buffer);
      a$2(s2, e3, t2, a3, f2, h2, false);
    }
    return { size: [f2, h2], image: new Uint32Array(c2.buffer), sdf: false, simplePattern: false, anchorX: 0, anchorY: 0 };
  }
}
export { c, o };
