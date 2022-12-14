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
import { g as s$4, bU as p$4, w as a$7, cj as a$8, e5 as c$4, a as r$7, b0 as l$5, ck as s$5, t as t$5, k as e$5, $ as e$6, a0 as y$3, a7 as w$2, a1 as n$8, co as l$6, aX as y$4, cr as w$3, aK as k$3, s as s$7 } from "./index.js";
import { g as g$4, r as r$8, s as s$6, f as f$5, p as p$6, c as c$5, a as a$9 } from "./pixelUtils.js";
import { z, y as y$2, v as v$2, p as p$5 } from "./colorUtils.js";
var t$4, e$4, r$6, i$5 = { exports: {} };
e$4 = i$5, (t$4 = function() {
  function t2() {
    this.pos = 0, this.bufferLength = 0, this.eof = false, this.buffer = null;
  }
  return t2.prototype = { ensureBuffer: function(t3) {
    var e2 = this.buffer, r2 = e2 ? e2.byteLength : 0;
    if (t3 < r2)
      return e2;
    for (var i2 = 512; i2 < t3; )
      i2 <<= 1;
    for (var s2 = new Uint8Array(i2), f2 = 0; f2 < r2; ++f2)
      s2[f2] = e2[f2];
    return this.buffer = s2;
  }, getByte: function() {
    for (var t3 = this.pos; this.bufferLength <= t3; ) {
      if (this.eof)
        return null;
      this.readBlock();
    }
    return this.buffer[this.pos++];
  }, getBytes: function(t3) {
    var e2 = this.pos;
    if (t3) {
      this.ensureBuffer(e2 + t3);
      for (var r2 = e2 + t3; !this.eof && this.bufferLength < r2; )
        this.readBlock();
      var i2 = this.bufferLength;
      r2 > i2 && (r2 = i2);
    } else {
      for (; !this.eof; )
        this.readBlock();
      r2 = this.bufferLength;
    }
    return this.pos = r2, this.buffer.subarray(e2, r2);
  }, lookChar: function() {
    for (var t3 = this.pos; this.bufferLength <= t3; ) {
      if (this.eof)
        return null;
      this.readBlock();
    }
    return String.fromCharCode(this.buffer[this.pos]);
  }, getChar: function() {
    for (var t3 = this.pos; this.bufferLength <= t3; ) {
      if (this.eof)
        return null;
      this.readBlock();
    }
    return String.fromCharCode(this.buffer[this.pos++]);
  }, makeSubStream: function(t3, e2, r2) {
    for (var i2 = t3 + e2; this.bufferLength <= i2 && !this.eof; )
      this.readBlock();
    return new Stream(this.buffer, t3, e2, r2);
  }, skip: function(t3) {
    t3 || (t3 = 1), this.pos += t3;
  }, reset: function() {
    this.pos = 0;
  } }, t2;
}(), r$6 = function() {
  if (!self || !self.Uint32Array)
    return null;
  var e2 = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), r2 = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]), i2 = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]), s2 = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9], f2 = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
  function o2(t2) {
    throw new Error(t2);
  }
  function n2(e3) {
    var r3 = 0, i3 = e3[r3++], s3 = e3[r3++];
    i3 != -1 && s3 != -1 || o2("Invalid header in flate stream"), (15 & i3) != 8 && o2("Unknown compression method in flate stream"), ((i3 << 8) + s3) % 31 != 0 && o2("Bad FCHECK in flate stream"), 32 & s3 && o2("FDICT bit set in flate stream"), this.bytes = e3, this.bytesPos = r3, this.codeSize = 0, this.codeBuf = 0, t$4.call(this);
  }
  return n2.prototype = Object.create(t$4.prototype), n2.prototype.getBits = function(t2) {
    for (var e3, r3 = this.codeSize, i3 = this.codeBuf, s3 = this.bytes, f3 = this.bytesPos; r3 < t2; )
      (e3 = s3[f3++]) === void 0 && o2("Bad encoding in flate stream"), i3 |= e3 << r3, r3 += 8;
    return e3 = i3 & (1 << t2) - 1, this.codeBuf = i3 >> t2, this.codeSize = r3 -= t2, this.bytesPos = f3, e3;
  }, n2.prototype.getCode = function(t2) {
    for (var e3 = t2[0], r3 = t2[1], i3 = this.codeSize, s3 = this.codeBuf, f3 = this.bytes, n3 = this.bytesPos; i3 < r3; ) {
      var h2;
      (h2 = f3[n3++]) === void 0 && o2("Bad encoding in flate stream"), s3 |= h2 << i3, i3 += 8;
    }
    var a2 = e3[s3 & (1 << r3) - 1], u2 = a2 >> 16, l2 = 65535 & a2;
    return (i3 == 0 || i3 < u2 || u2 == 0) && o2("Bad encoding in flate stream"), this.codeBuf = s3 >> u2, this.codeSize = i3 - u2, this.bytesPos = n3, l2;
  }, n2.prototype.generateHuffmanTable = function(t2) {
    for (var e3 = t2.length, r3 = 0, i3 = 0; i3 < e3; ++i3)
      t2[i3] > r3 && (r3 = t2[i3]);
    for (var s3 = 1 << r3, f3 = new Uint32Array(s3), o3 = 1, n3 = 0, h2 = 2; o3 <= r3; ++o3, n3 <<= 1, h2 <<= 1)
      for (var a2 = 0; a2 < e3; ++a2)
        if (t2[a2] == o3) {
          var u2 = 0, l2 = n3;
          for (i3 = 0; i3 < o3; ++i3)
            u2 = u2 << 1 | 1 & l2, l2 >>= 1;
          for (i3 = u2; i3 < s3; i3 += h2)
            f3[i3] = o3 << 16 | a2;
          ++n3;
        }
    return [f3, r3];
  }, n2.prototype.readBlock = function() {
    function t2(t3, e3, r3, i3, s3) {
      for (var f3 = t3.getBits(r3) + i3; f3-- > 0; )
        e3[b2++] = s3;
    }
    var n3 = this.getBits(3);
    if (1 & n3 && (this.eof = true), (n3 >>= 1) != 0) {
      var h2, a2;
      if (n3 == 1)
        h2 = s2, a2 = f2;
      else if (n3 == 2) {
        for (var u2 = this.getBits(5) + 257, l2 = this.getBits(5) + 1, c2 = this.getBits(4) + 4, d2 = Array(e2.length), b2 = 0; b2 < c2; )
          d2[e2[b2++]] = this.getBits(3);
        for (var v2 = this.generateHuffmanTable(d2), g2 = 0, B2 = (b2 = 0, u2 + l2), p2 = new Array(B2); b2 < B2; ) {
          var y2 = this.getCode(v2);
          y2 == 16 ? t2(this, p2, 2, 3, g2) : y2 == 17 ? t2(this, p2, 3, 3, g2 = 0) : y2 == 18 ? t2(this, p2, 7, 11, g2 = 0) : p2[b2++] = g2 = y2;
        }
        h2 = this.generateHuffmanTable(p2.slice(0, u2)), a2 = this.generateHuffmanTable(p2.slice(u2, B2));
      } else
        o2("Unknown block type in flate stream");
      for (var m2 = (x2 = this.buffer) ? x2.length : 0, k2 = this.bufferLength; ; ) {
        var w2 = this.getCode(h2);
        if (w2 < 256)
          k2 + 1 >= m2 && (m2 = (x2 = this.ensureBuffer(k2 + 1)).length), x2[k2++] = w2;
        else {
          if (w2 == 256)
            return void (this.bufferLength = k2);
          var C2 = (w2 = r2[w2 -= 257]) >> 16;
          C2 > 0 && (C2 = this.getBits(C2)), g2 = (65535 & w2) + C2, w2 = this.getCode(a2), (C2 = (w2 = i2[w2]) >> 16) > 0 && (C2 = this.getBits(C2));
          var L2 = (65535 & w2) + C2;
          k2 + g2 >= m2 && (m2 = (x2 = this.ensureBuffer(k2 + g2)).length);
          for (var S2 = 0; S2 < g2; ++S2, ++k2)
            x2[k2] = x2[k2 - L2];
        }
      }
    } else {
      var A2, U2 = this.bytes, P2 = this.bytesPos;
      (A2 = U2[P2++]) === void 0 && o2("Bad block header in flate stream");
      var z2 = A2;
      (A2 = U2[P2++]) === void 0 && o2("Bad block header in flate stream"), z2 |= A2 << 8, (A2 = U2[P2++]) === void 0 && o2("Bad block header in flate stream");
      var H = A2;
      (A2 = U2[P2++]) === void 0 && o2("Bad block header in flate stream"), (H |= A2 << 8) != (65535 & ~z2) && o2("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
      var T2 = this.bufferLength, x2 = this.ensureBuffer(T2 + z2), E2 = T2 + z2;
      this.bufferLength = E2;
      for (var F2 = T2; F2 < E2; ++F2) {
        if ((A2 = U2[P2++]) === void 0) {
          this.eof = true;
          break;
        }
        x2[F2] = A2;
      }
      this.bytesPos = P2;
    }
  }, n2;
}()) !== void 0 && (e$4.exports = r$6);
const s$3 = i$5.exports;
class i$4 {
  constructor(t2) {
    this._canvas = null, this._ctx = null, t2 && (this._canvas = t2.canvas, this._ctx = t2.ctx || t2.canvas && t2.canvas.getContext("2d"));
  }
  decode(n2, s2, r2) {
    if (!n2 || n2.byteLength < 10)
      throw new s$4("imagecanvasdecoder: decode", "required a valid encoded data as input.");
    let { width: c2 = 0, height: h2 = 0, format: o2 } = s2;
    const { applyJpegMask: l2 } = s2;
    if (l2 && (!c2 || !h2))
      throw new s$4("imagecanvasdecoder: decode", "image width and height are needed to apply jpeg mask directly to canvas");
    return new Promise((t2, d2) => {
      let g2 = null;
      o2 === "jpg" && l2 && (g2 = i$4._getMask(n2, { width: c2, height: h2 }));
      const w2 = new Blob([new Uint8Array(n2)], { type: "image/" + o2 == "jpg" ? "jpeg" : o2 }), v2 = URL.createObjectURL(w2), m2 = new Image();
      let _2;
      m2.src = v2, m2.onload = () => {
        if (URL.revokeObjectURL(v2), p$4(r2))
          return void d2(a$7());
        c2 = m2.width, h2 = m2.height, this._canvas && this._ctx ? (this._canvas.width === c2 && this._canvas.height === h2 || (this._canvas.width = c2, this._canvas.height = h2), this._ctx.clearRect(0, 0, c2, h2)) : (this._canvas = document.createElement("canvas"), this._canvas.width = c2, this._canvas.height = h2, this._ctx = this._canvas.getContext("2d")), this._ctx.drawImage(m2, 0, 0);
        const n3 = this._ctx.getImageData(0, 0, c2, h2);
        let i2;
        if (_2 = n3.data, s2.renderOnCanvas) {
          if (g2)
            for (i2 = 0; i2 < g2.length; i2++)
              g2[i2] ? _2[4 * i2 + 3] = 255 : _2[4 * i2 + 3] = 0;
          return this._ctx.putImageData(n3, 0, 0), void t2(null);
        }
        const o3 = c2 * h2, l3 = new Uint8Array(o3), w3 = new Uint8Array(o3), p2 = new Uint8Array(o3);
        if (g2)
          for (i2 = 0; i2 < o3; i2++)
            l3[i2] = _2[4 * i2], w3[i2] = _2[4 * i2 + 1], p2[i2] = _2[4 * i2 + 2];
        else
          for (g2 = new Uint8Array(o3), i2 = 0; i2 < o3; i2++)
            l3[i2] = _2[4 * i2], w3[i2] = _2[4 * i2 + 1], p2[i2] = _2[4 * i2 + 2], g2[i2] = _2[4 * i2 + 3];
        t2({ width: c2, height: h2, pixels: [l3, w3, p2], mask: g2, pixelType: "u8" });
      }, m2.onerror = () => {
        URL.revokeObjectURL(v2), d2("cannot load image");
      };
    });
  }
  static _getMask(t2, e2) {
    let a2 = null;
    try {
      const i2 = new Uint8Array(t2), s2 = Math.ceil(i2.length / 2);
      let r2 = 0;
      const c2 = i2.length - 2;
      for (r2 = s2; r2 < c2 && (i2[r2] !== 255 || i2[r2 + 1] !== 217); r2++)
        ;
      if (r2 += 2, r2 < i2.length - 1) {
        const t3 = new s$3(i2.subarray(r2)).getBytes();
        a2 = new Uint8Array(e2.width * e2.height);
        let s3 = 0;
        for (let e3 = 0; e3 < t3.length; e3++)
          for (let n2 = 7; n2 >= 0; n2--)
            a2[s3++] = t3[e3] >> n2 & 1;
      }
    } catch (i2) {
    }
    return a2;
  }
}
var e$3, n$7, r$5, o$3 = { exports: {} };
e$3 = o$3, n$7 = function() {
  var e2 = function() {
    function e3(e4) {
      this.message = "JPEG error: " + e4;
    }
    return e3.prototype = new Error(), e3.prototype.name = "JpegError", e3.constructor = e3, e3;
  }();
  return function() {
    if (!self || !self.Uint8ClampedArray)
      return null;
    var n2 = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]), r2 = 4017, o2 = 799, a2 = 3406, t2 = 2276, i2 = 1567, s2 = 3784, c2 = 5793, f2 = 2896;
    function l2() {
      this.decodeTransform = null, this.colorTransform = -1;
    }
    function u2(e3, n3) {
      for (var r3, o3, a3 = 0, t3 = [], i3 = 16; i3 > 0 && !e3[i3 - 1]; )
        i3--;
      t3.push({ children: [], index: 0 });
      var s3, c3 = t3[0];
      for (r3 = 0; r3 < i3; r3++) {
        for (o3 = 0; o3 < e3[r3]; o3++) {
          for ((c3 = t3.pop()).children[c3.index] = n3[a3]; c3.index > 0; )
            c3 = t3.pop();
          for (c3.index++, t3.push(c3); t3.length <= r3; )
            t3.push(s3 = { children: [], index: 0 }), c3.children[c3.index] = s3.children, c3 = s3;
          a3++;
        }
        r3 + 1 < i3 && (t3.push(s3 = { children: [], index: 0 }), c3.children[c3.index] = s3.children, c3 = s3);
      }
      return t3[0].children;
    }
    function h2(e3, n3, r3) {
      return 64 * ((e3.blocksPerLine + 1) * n3 + r3);
    }
    function v2(r3, o3, a3, t3, i3, s3, c3, f3, l3) {
      var u3 = a3.mcusPerLine, v3 = a3.progressive, m3 = o3, d3 = 0, p2 = 0;
      function k2() {
        if (p2 > 0)
          return p2--, d3 >> p2 & 1;
        if ((d3 = r3[o3++]) === 255) {
          var n3 = r3[o3++];
          if (n3)
            throw new e2("unexpected marker " + (d3 << 8 | n3).toString(16));
        }
        return p2 = 7, d3 >>> 7;
      }
      function g2(n3) {
        for (var r4 = n3; ; ) {
          if (typeof (r4 = r4[k2()]) == "number")
            return r4;
          if (typeof r4 != "object")
            throw new e2("invalid huffman sequence");
        }
      }
      function C2(e3) {
        for (var n3 = 0; e3 > 0; )
          n3 = n3 << 1 | k2(), e3--;
        return n3;
      }
      function w2(e3) {
        if (e3 === 1)
          return k2() === 1 ? 1 : -1;
        var n3 = C2(e3);
        return n3 >= 1 << e3 - 1 ? n3 : n3 + (-1 << e3) + 1;
      }
      function x2(e3, r4) {
        var o4 = g2(e3.huffmanTableDC), a4 = o4 === 0 ? 0 : w2(o4);
        e3.blockData[r4] = e3.pred += a4;
        for (var t4 = 1; t4 < 64; ) {
          var i4 = g2(e3.huffmanTableAC), s4 = 15 & i4, c4 = i4 >> 4;
          if (s4 !== 0) {
            var f4 = n2[t4 += c4];
            e3.blockData[r4 + f4] = w2(s4), t4++;
          } else {
            if (c4 < 15)
              break;
            t4 += 16;
          }
        }
      }
      function y2(e3, n3) {
        var r4 = g2(e3.huffmanTableDC), o4 = r4 === 0 ? 0 : w2(r4) << l3;
        e3.blockData[n3] = e3.pred += o4;
      }
      function D2(e3, n3) {
        e3.blockData[n3] |= k2() << l3;
      }
      var T2 = 0;
      function P2(e3, r4) {
        if (T2 > 0)
          T2--;
        else
          for (var o4 = s3, a4 = c3; o4 <= a4; ) {
            var t4 = g2(e3.huffmanTableAC), i4 = 15 & t4, f4 = t4 >> 4;
            if (i4 !== 0) {
              var u4 = n2[o4 += f4];
              e3.blockData[r4 + u4] = w2(i4) * (1 << l3), o4++;
            } else {
              if (f4 < 15) {
                T2 = C2(f4) + (1 << f4) - 1;
                break;
              }
              o4 += 16;
            }
          }
      }
      var L2, A2 = 0;
      function _2(r4, o4) {
        for (var a4, t4, i4 = s3, f4 = c3, u4 = 0; i4 <= f4; ) {
          var h3 = n2[i4];
          switch (A2) {
            case 0:
              if (u4 = (t4 = g2(r4.huffmanTableAC)) >> 4, (a4 = 15 & t4) == 0)
                u4 < 15 ? (T2 = C2(u4) + (1 << u4), A2 = 4) : (u4 = 16, A2 = 1);
              else {
                if (a4 !== 1)
                  throw new e2("invalid ACn encoding");
                L2 = w2(a4), A2 = u4 ? 2 : 3;
              }
              continue;
            case 1:
            case 2:
              r4.blockData[o4 + h3] ? r4.blockData[o4 + h3] += k2() << l3 : --u4 == 0 && (A2 = A2 === 2 ? 3 : 0);
              break;
            case 3:
              r4.blockData[o4 + h3] ? r4.blockData[o4 + h3] += k2() << l3 : (r4.blockData[o4 + h3] = L2 << l3, A2 = 0);
              break;
            case 4:
              r4.blockData[o4 + h3] && (r4.blockData[o4 + h3] += k2() << l3);
          }
          i4++;
        }
        A2 === 4 && --T2 == 0 && (A2 = 0);
      }
      function U2(e3, n3, r4, o4, a4) {
        var t4 = r4 % u3;
        n3(e3, h2(e3, (r4 / u3 | 0) * e3.v + o4, t4 * e3.h + a4));
      }
      function z2(e3, n3, r4) {
        n3(e3, h2(e3, r4 / e3.blocksPerLine | 0, r4 % e3.blocksPerLine));
      }
      var I2, M2, Y, q, S2, R2, H = t3.length;
      R2 = v3 ? s3 === 0 ? f3 === 0 ? y2 : D2 : f3 === 0 ? P2 : _2 : x2;
      var E2, J, V2, j, B2 = 0;
      for (J = H === 1 ? t3[0].blocksPerLine * t3[0].blocksPerColumn : u3 * a3.mcusPerColumn; B2 < J; ) {
        var N2 = i3 ? Math.min(J - B2, i3) : J;
        for (M2 = 0; M2 < H; M2++)
          t3[M2].pred = 0;
        if (T2 = 0, H === 1)
          for (I2 = t3[0], S2 = 0; S2 < N2; S2++)
            z2(I2, R2, B2), B2++;
        else
          for (S2 = 0; S2 < N2; S2++) {
            for (M2 = 0; M2 < H; M2++)
              for (V2 = (I2 = t3[M2]).h, j = I2.v, Y = 0; Y < j; Y++)
                for (q = 0; q < V2; q++)
                  U2(I2, R2, B2, Y, q);
            B2++;
          }
        p2 = 0, (E2 = b2(r3, o3)) && E2.invalid && (console.log("decodeScan - unexpected MCU data, next marker is: " + E2.invalid), o3 = E2.offset);
        var G2 = E2 && E2.marker;
        if (!G2 || G2 <= 65280)
          throw new e2("marker was not found");
        if (!(G2 >= 65488 && G2 <= 65495))
          break;
        o3 += 2;
      }
      return (E2 = b2(r3, o3)) && E2.invalid && (console.log("decodeScan - unexpected Scan data, next marker is: " + E2.invalid), o3 = E2.offset), o3 - m3;
    }
    function m2(n3, l3, u3) {
      var h3, v3, m3, d3, b3, p2, k2, g2, C2, w2, x2, y2, D2, T2, P2, L2, A2, _2 = n3.quantizationTable, U2 = n3.blockData;
      if (!_2)
        throw new e2("missing required Quantization Table.");
      for (var z2 = 0; z2 < 64; z2 += 8)
        C2 = U2[l3 + z2], w2 = U2[l3 + z2 + 1], x2 = U2[l3 + z2 + 2], y2 = U2[l3 + z2 + 3], D2 = U2[l3 + z2 + 4], T2 = U2[l3 + z2 + 5], P2 = U2[l3 + z2 + 6], L2 = U2[l3 + z2 + 7], C2 *= _2[z2], (w2 | x2 | y2 | D2 | T2 | P2 | L2) != 0 ? (w2 *= _2[z2 + 1], x2 *= _2[z2 + 2], y2 *= _2[z2 + 3], D2 *= _2[z2 + 4], T2 *= _2[z2 + 5], P2 *= _2[z2 + 6], L2 *= _2[z2 + 7], v3 = (h3 = (h3 = c2 * C2 + 128 >> 8) + (v3 = c2 * D2 + 128 >> 8) + 1 >> 1) - v3, A2 = (m3 = x2) * s2 + (d3 = P2) * i2 + 128 >> 8, m3 = m3 * i2 - d3 * s2 + 128 >> 8, k2 = (b3 = (b3 = f2 * (w2 - L2) + 128 >> 8) + (k2 = T2 << 4) + 1 >> 1) - k2, p2 = (g2 = (g2 = f2 * (w2 + L2) + 128 >> 8) + (p2 = y2 << 4) + 1 >> 1) - p2, d3 = (h3 = h3 + (d3 = A2) + 1 >> 1) - d3, m3 = (v3 = v3 + m3 + 1 >> 1) - m3, A2 = b3 * t2 + g2 * a2 + 2048 >> 12, b3 = b3 * a2 - g2 * t2 + 2048 >> 12, g2 = A2, A2 = p2 * o2 + k2 * r2 + 2048 >> 12, p2 = p2 * r2 - k2 * o2 + 2048 >> 12, k2 = A2, u3[z2] = h3 + g2, u3[z2 + 7] = h3 - g2, u3[z2 + 1] = v3 + k2, u3[z2 + 6] = v3 - k2, u3[z2 + 2] = m3 + p2, u3[z2 + 5] = m3 - p2, u3[z2 + 3] = d3 + b3, u3[z2 + 4] = d3 - b3) : (A2 = c2 * C2 + 512 >> 10, u3[z2] = A2, u3[z2 + 1] = A2, u3[z2 + 2] = A2, u3[z2 + 3] = A2, u3[z2 + 4] = A2, u3[z2 + 5] = A2, u3[z2 + 6] = A2, u3[z2 + 7] = A2);
      for (var I2 = 0; I2 < 8; ++I2)
        C2 = u3[I2], ((w2 = u3[I2 + 8]) | (x2 = u3[I2 + 16]) | (y2 = u3[I2 + 24]) | (D2 = u3[I2 + 32]) | (T2 = u3[I2 + 40]) | (P2 = u3[I2 + 48]) | (L2 = u3[I2 + 56])) != 0 ? (v3 = (h3 = 4112 + ((h3 = c2 * C2 + 2048 >> 12) + (v3 = c2 * D2 + 2048 >> 12) + 1 >> 1)) - v3, A2 = (m3 = x2) * s2 + (d3 = P2) * i2 + 2048 >> 12, m3 = m3 * i2 - d3 * s2 + 2048 >> 12, d3 = A2, k2 = (b3 = (b3 = f2 * (w2 - L2) + 2048 >> 12) + (k2 = T2) + 1 >> 1) - k2, p2 = (g2 = (g2 = f2 * (w2 + L2) + 2048 >> 12) + (p2 = y2) + 1 >> 1) - p2, A2 = b3 * t2 + g2 * a2 + 2048 >> 12, b3 = b3 * a2 - g2 * t2 + 2048 >> 12, g2 = A2, A2 = p2 * o2 + k2 * r2 + 2048 >> 12, p2 = p2 * r2 - k2 * o2 + 2048 >> 12, C2 = (C2 = (h3 = h3 + d3 + 1 >> 1) + g2) < 16 ? 0 : C2 >= 4080 ? 255 : C2 >> 4, w2 = (w2 = (v3 = v3 + m3 + 1 >> 1) + (k2 = A2)) < 16 ? 0 : w2 >= 4080 ? 255 : w2 >> 4, x2 = (x2 = (m3 = v3 - m3) + p2) < 16 ? 0 : x2 >= 4080 ? 255 : x2 >> 4, y2 = (y2 = (d3 = h3 - d3) + b3) < 16 ? 0 : y2 >= 4080 ? 255 : y2 >> 4, D2 = (D2 = d3 - b3) < 16 ? 0 : D2 >= 4080 ? 255 : D2 >> 4, T2 = (T2 = m3 - p2) < 16 ? 0 : T2 >= 4080 ? 255 : T2 >> 4, P2 = (P2 = v3 - k2) < 16 ? 0 : P2 >= 4080 ? 255 : P2 >> 4, L2 = (L2 = h3 - g2) < 16 ? 0 : L2 >= 4080 ? 255 : L2 >> 4, U2[l3 + I2] = C2, U2[l3 + I2 + 8] = w2, U2[l3 + I2 + 16] = x2, U2[l3 + I2 + 24] = y2, U2[l3 + I2 + 32] = D2, U2[l3 + I2 + 40] = T2, U2[l3 + I2 + 48] = P2, U2[l3 + I2 + 56] = L2) : (A2 = (A2 = c2 * C2 + 8192 >> 14) < -2040 ? 0 : A2 >= 2024 ? 255 : A2 + 2056 >> 4, U2[l3 + I2] = A2, U2[l3 + I2 + 8] = A2, U2[l3 + I2 + 16] = A2, U2[l3 + I2 + 24] = A2, U2[l3 + I2 + 32] = A2, U2[l3 + I2 + 40] = A2, U2[l3 + I2 + 48] = A2, U2[l3 + I2 + 56] = A2);
    }
    function d2(e3, n3) {
      for (var r3 = n3.blocksPerLine, o3 = n3.blocksPerColumn, a3 = new Int16Array(64), t3 = 0; t3 < o3; t3++)
        for (var i3 = 0; i3 < r3; i3++)
          m2(n3, h2(n3, t3, i3), a3);
      return n3.blockData;
    }
    function b2(e3, n3, r3) {
      function o3(n4) {
        return e3[n4] << 8 | e3[n4 + 1];
      }
      var a3 = e3.length - 1, t3 = r3 < n3 ? r3 : n3;
      if (n3 >= a3)
        return null;
      var i3 = o3(n3);
      if (i3 >= 65472 && i3 <= 65534)
        return { invalid: null, marker: i3, offset: n3 };
      for (var s3 = o3(t3); !(s3 >= 65472 && s3 <= 65534); ) {
        if (++t3 >= a3)
          return null;
        s3 = o3(t3);
      }
      return { invalid: i3.toString(16), marker: s3, offset: t3 };
    }
    return l2.prototype = { parse: function(r3) {
      function o3() {
        var e3 = r3[c3] << 8 | r3[c3 + 1];
        return c3 += 2, e3;
      }
      function a3() {
        var e3 = o3(), n3 = c3 + e3 - 2, a4 = b2(r3, n3, c3);
        a4 && a4.invalid && (console.log("readDataBlock - incorrect length, next marker is: " + a4.invalid), n3 = a4.offset);
        var t4 = r3.subarray(c3, n3);
        return c3 += t4.length, t4;
      }
      function t3(e3) {
        for (var n3 = Math.ceil(e3.samplesPerLine / 8 / e3.maxH), r4 = Math.ceil(e3.scanLines / 8 / e3.maxV), o4 = 0; o4 < e3.components.length; o4++) {
          H = e3.components[o4];
          var a4 = Math.ceil(Math.ceil(e3.samplesPerLine / 8) * H.h / e3.maxH), t4 = Math.ceil(Math.ceil(e3.scanLines / 8) * H.v / e3.maxV), i4 = n3 * H.h, s4 = r4 * H.v * 64 * (i4 + 1);
          H.blockData = new Int16Array(s4), H.blocksPerLine = a4, H.blocksPerColumn = t4;
        }
        e3.mcusPerLine = n3, e3.mcusPerColumn = r4;
      }
      var i3, s3, c3 = 0, f3 = null, l3 = null, h3 = [], m3 = [], p2 = [], k2 = o3();
      if (k2 !== 65496)
        throw new e2("SOI not found");
      for (k2 = o3(); k2 !== 65497; ) {
        var g2, C2, w2;
        switch (k2) {
          case 65504:
          case 65505:
          case 65506:
          case 65507:
          case 65508:
          case 65509:
          case 65510:
          case 65511:
          case 65512:
          case 65513:
          case 65514:
          case 65515:
          case 65516:
          case 65517:
          case 65518:
          case 65519:
          case 65534:
            var x2 = a3();
            k2 === 65504 && x2[0] === 74 && x2[1] === 70 && x2[2] === 73 && x2[3] === 70 && x2[4] === 0 && (f3 = { version: { major: x2[5], minor: x2[6] }, densityUnits: x2[7], xDensity: x2[8] << 8 | x2[9], yDensity: x2[10] << 8 | x2[11], thumbWidth: x2[12], thumbHeight: x2[13], thumbData: x2.subarray(14, 14 + 3 * x2[12] * x2[13]) }), k2 === 65518 && x2[0] === 65 && x2[1] === 100 && x2[2] === 111 && x2[3] === 98 && x2[4] === 101 && (l3 = { version: x2[5] << 8 | x2[6], flags0: x2[7] << 8 | x2[8], flags1: x2[9] << 8 | x2[10], transformCode: x2[11] });
            break;
          case 65499:
            for (var y2 = o3() + c3 - 2; c3 < y2; ) {
              var D2 = r3[c3++], T2 = new Uint16Array(64);
              if (D2 >> 4 == 0)
                for (C2 = 0; C2 < 64; C2++)
                  T2[n2[C2]] = r3[c3++];
              else {
                if (D2 >> 4 != 1)
                  throw new e2("DQT - invalid table spec");
                for (C2 = 0; C2 < 64; C2++)
                  T2[n2[C2]] = o3();
              }
              h3[15 & D2] = T2;
            }
            break;
          case 65472:
          case 65473:
          case 65474:
            if (i3)
              throw new e2("Only single frame JPEGs supported");
            o3(), (i3 = {}).extended = k2 === 65473, i3.progressive = k2 === 65474, i3.precision = r3[c3++], i3.scanLines = o3(), i3.samplesPerLine = o3(), i3.components = [], i3.componentIds = {};
            var P2, L2 = r3[c3++], A2 = 0, _2 = 0;
            for (g2 = 0; g2 < L2; g2++) {
              P2 = r3[c3];
              var U2 = r3[c3 + 1] >> 4, z2 = 15 & r3[c3 + 1];
              A2 < U2 && (A2 = U2), _2 < z2 && (_2 = z2);
              var I2 = r3[c3 + 2];
              w2 = i3.components.push({ h: U2, v: z2, quantizationId: I2, quantizationTable: null }), i3.componentIds[P2] = w2 - 1, c3 += 3;
            }
            i3.maxH = A2, i3.maxV = _2, t3(i3);
            break;
          case 65476:
            var M2 = o3();
            for (g2 = 2; g2 < M2; ) {
              var Y = r3[c3++], q = new Uint8Array(16), S2 = 0;
              for (C2 = 0; C2 < 16; C2++, c3++)
                S2 += q[C2] = r3[c3];
              var R2 = new Uint8Array(S2);
              for (C2 = 0; C2 < S2; C2++, c3++)
                R2[C2] = r3[c3];
              g2 += 17 + S2, (Y >> 4 == 0 ? p2 : m3)[15 & Y] = u2(q, R2);
            }
            break;
          case 65501:
            o3(), s3 = o3();
            break;
          case 65498:
            o3();
            var H, E2 = r3[c3++], J = [];
            for (g2 = 0; g2 < E2; g2++) {
              var V2 = i3.componentIds[r3[c3++]];
              H = i3.components[V2];
              var j = r3[c3++];
              H.huffmanTableDC = p2[j >> 4], H.huffmanTableAC = m3[15 & j], J.push(H);
            }
            var B2 = r3[c3++], N2 = r3[c3++], G2 = r3[c3++], O2 = v2(r3, c3, i3, J, s3, B2, N2, G2 >> 4, 15 & G2);
            c3 += O2;
            break;
          case 65535:
            r3[c3] !== 255 && c3--;
            break;
          default:
            if (r3[c3 - 3] === 255 && r3[c3 - 2] >= 192 && r3[c3 - 2] <= 254) {
              c3 -= 3;
              break;
            }
            throw new e2("unknown marker " + k2.toString(16));
        }
        k2 = o3();
      }
      for (this.width = i3.samplesPerLine, this.height = i3.scanLines, this.jfif = f3, this.eof = c3, this.adobe = l3, this.components = [], g2 = 0; g2 < i3.components.length; g2++) {
        var Q = h3[(H = i3.components[g2]).quantizationId];
        Q && (H.quantizationTable = Q), this.components.push({ output: d2(i3, H), scaleX: H.h / i3.maxH, scaleY: H.v / i3.maxV, blocksPerLine: H.blocksPerLine, blocksPerColumn: H.blocksPerColumn });
      }
      this.numComponents = this.components.length;
    }, _getLinearizedBlockData: function(e3, n3) {
      var r3, o3, a3, t3, i3, s3, c3, f3, l3, u3, h3, v3 = this.width / e3, m3 = this.height / n3, d3 = 0, b3 = this.components.length, p2 = e3 * n3 * b3, k2 = new Uint8ClampedArray(p2), g2 = new Uint32Array(e3), C2 = 4294967288;
      for (c3 = 0; c3 < b3; c3++) {
        for (o3 = (r3 = this.components[c3]).scaleX * v3, a3 = r3.scaleY * m3, d3 = c3, h3 = r3.output, t3 = r3.blocksPerLine + 1 << 3, i3 = 0; i3 < e3; i3++)
          f3 = 0 | i3 * o3, g2[i3] = (f3 & C2) << 3 | 7 & f3;
        for (s3 = 0; s3 < n3; s3++)
          for (u3 = t3 * ((f3 = 0 | s3 * a3) & C2) | (7 & f3) << 3, i3 = 0; i3 < e3; i3++)
            k2[d3] = h3[u3 + g2[i3]], d3 += b3;
      }
      var w2 = this.decodeTransform;
      if (w2)
        for (c3 = 0; c3 < p2; )
          for (f3 = 0, l3 = 0; f3 < b3; f3++, c3++, l3 += 2)
            k2[c3] = (k2[c3] * w2[l3] >> 8) + w2[l3 + 1];
      return k2;
    }, _isColorConversionNeeded: function() {
      return this.adobe ? !!this.adobe.transformCode : this.numComponents === 3 ? this.colorTransform !== 0 : this.colorTransform === 1;
    }, _convertYccToRgb: function(e3) {
      for (var n3, r3, o3, a3 = 0, t3 = e3.length; a3 < t3; a3 += 3)
        n3 = e3[a3], r3 = e3[a3 + 1], o3 = e3[a3 + 2], e3[a3] = n3 - 179.456 + 1.402 * o3, e3[a3 + 1] = n3 + 135.459 - 0.344 * r3 - 0.714 * o3, e3[a3 + 2] = n3 - 226.816 + 1.772 * r3;
      return e3;
    }, _convertYcckToRgb: function(e3) {
      for (var n3, r3, o3, a3, t3 = 0, i3 = 0, s3 = e3.length; i3 < s3; i3 += 4)
        n3 = e3[i3], r3 = e3[i3 + 1], o3 = e3[i3 + 2], a3 = e3[i3 + 3], e3[t3++] = r3 * (-660635669420364e-19 * r3 + 437130475926232e-18 * o3 - 54080610064599e-18 * n3 + 48449797120281e-17 * a3 - 0.154362151871126) - 122.67195406894 + o3 * (-957964378445773e-18 * o3 + 817076911346625e-18 * n3 - 0.00477271405408747 * a3 + 1.53380253221734) + n3 * (961250184130688e-18 * n3 - 0.00266257332283933 * a3 + 0.48357088451265) + a3 * (-336197177618394e-18 * a3 + 0.484791561490776), e3[t3++] = 107.268039397724 + r3 * (219927104525741e-19 * r3 - 640992018297945e-18 * o3 + 659397001245577e-18 * n3 + 426105652938837e-18 * a3 - 0.176491792462875) + o3 * (-778269941513683e-18 * o3 + 0.00130872261408275 * n3 + 770482631801132e-18 * a3 - 0.151051492775562) + n3 * (0.00126935368114843 * n3 - 0.00265090189010898 * a3 + 0.25802910206845) + a3 * (-318913117588328e-18 * a3 - 0.213742400323665), e3[t3++] = r3 * (-570115196973677e-18 * r3 - 263409051004589e-19 * o3 + 0.0020741088115012 * n3 - 0.00288260236853442 * a3 + 0.814272968359295) - 20.810012546947 + o3 * (-153496057440975e-19 * o3 - 132689043961446e-18 * n3 + 560833691242812e-18 * a3 - 0.195152027534049) + n3 * (0.00174418132927582 * n3 - 0.00255243321439347 * a3 + 0.116935020465145) + a3 * (-343531996510555e-18 * a3 + 0.24165260232407);
      return e3;
    }, _convertYcckToCmyk: function(e3) {
      for (var n3, r3, o3, a3 = 0, t3 = e3.length; a3 < t3; a3 += 4)
        n3 = e3[a3], r3 = e3[a3 + 1], o3 = e3[a3 + 2], e3[a3] = 434.456 - n3 - 1.402 * o3, e3[a3 + 1] = 119.541 - n3 + 0.344 * r3 + 0.714 * o3, e3[a3 + 2] = 481.816 - n3 - 1.772 * r3;
      return e3;
    }, _convertCmykToRgb: function(e3) {
      for (var n3, r3, o3, a3, t3 = 0, i3 = 1 / 255, s3 = 0, c3 = e3.length; s3 < c3; s3 += 4)
        n3 = e3[s3] * i3, r3 = e3[s3 + 1] * i3, o3 = e3[s3 + 2] * i3, a3 = e3[s3 + 3] * i3, e3[t3++] = 255 + n3 * (-4.387332384609988 * n3 + 54.48615194189176 * r3 + 18.82290502165302 * o3 + 212.25662451639585 * a3 - 285.2331026137004) + r3 * (1.7149763477362134 * r3 - 5.6096736904047315 * o3 - 17.873870861415444 * a3 - 5.497006427196366) + o3 * (-2.5217340131683033 * o3 - 21.248923337353073 * a3 + 17.5119270841813) - a3 * (21.86122147463605 * a3 + 189.48180835922747), e3[t3++] = 255 + n3 * (8.841041422036149 * n3 + 60.118027045597366 * r3 + 6.871425592049007 * o3 + 31.159100130055922 * a3 - 79.2970844816548) + r3 * (-15.310361306967817 * r3 + 17.575251261109482 * o3 + 131.35250912493976 * a3 - 190.9453302588951) + o3 * (4.444339102852739 * o3 + 9.8632861493405 * a3 - 24.86741582555878) - a3 * (20.737325471181034 * a3 + 187.80453709719578), e3[t3++] = 255 + n3 * (0.8842522430003296 * n3 + 8.078677503112928 * r3 + 30.89978309703729 * o3 - 0.23883238689178934 * a3 - 14.183576799673286) + r3 * (10.49593273432072 * r3 + 63.02378494754052 * o3 + 50.606957656360734 * a3 - 112.23884253719248) + o3 * (0.03296041114873217 * o3 + 115.60384449646641 * a3 - 193.58209356861505) - a3 * (22.33816807309886 * a3 + 180.12613974708367);
      return e3;
    }, getData: function(n3, r3, o3) {
      if (this.numComponents > 4)
        throw new e2("Unsupported color mode");
      var a3 = this._getLinearizedBlockData(n3, r3);
      if (this.numComponents === 1 && o3) {
        for (var t3 = a3.length, i3 = new Uint8ClampedArray(3 * t3), s3 = 0, c3 = 0; c3 < t3; c3++) {
          var f3 = a3[c3];
          i3[s3++] = f3, i3[s3++] = f3, i3[s3++] = f3;
        }
        return i3;
      }
      if (this.numComponents === 3 && this._isColorConversionNeeded())
        return this._convertYccToRgb(a3);
      if (this.numComponents === 4) {
        if (this._isColorConversionNeeded())
          return o3 ? this._convertYcckToRgb(a3) : this._convertYcckToCmyk(a3);
        if (o3)
          return this._convertCmykToRgb(a3);
      }
      return a3;
    } }, l2;
  }();
}, (r$5 = n$7()) !== void 0 && (e$3.exports = r$5);
const a$6 = o$3.exports;
class r$4 {
  static decode(r2, n2 = false) {
    const s2 = new Uint8Array(r2), o2 = new a$6();
    o2.parse(s2);
    const { width: a2, height: i2, numComponents: h2, eof: l2 } = o2, f2 = o2.getData(a2, i2, true), c2 = a2 * i2;
    let g2, p2 = null, u2 = 0, m2 = 0, w2 = 0;
    if (!n2 && l2 < s2.length - 1)
      try {
        const t2 = new s$3(s2.subarray(l2)).getBytes();
        p2 = new Uint8Array(c2);
        let r3 = 0;
        for (u2 = 0; u2 < t2.length; u2++)
          for (w2 = 7; w2 >= 0; w2--)
            p2[r3++] = t2[u2] >> w2 & 1;
      } catch {
      }
    if (h2 === 1 && f2.length === a2 * i2)
      g2 = [f2, f2, f2];
    else {
      for (g2 = [], u2 = 0; u2 < 3; u2++)
        g2.push(new Uint8Array(c2));
      for (w2 = 0, m2 = 0; m2 < c2; m2++)
        for (u2 = 0; u2 < 3; u2++)
          g2[u2][m2] = f2[w2++];
    }
    return { width: a2, height: i2, pixels: g2, mask: p2 };
  }
}
const t$3 = [{ pixelType: "S8", size: 1, ctor: Int8Array, range: [-128, 128] }, { pixelType: "U8", size: 1, ctor: Uint8Array, range: [0, 255] }, { pixelType: "S16", size: 2, ctor: Int16Array, range: [-32768, 32767] }, { pixelType: "U16", size: 2, ctor: Uint16Array, range: [0, 65536] }, { pixelType: "S32", size: 4, ctor: Int32Array, range: [-2147483648, 2147483647] }, { pixelType: "U32", size: 4, ctor: Uint32Array, range: [0, 4294967296] }, { pixelType: "F32", size: 4, ctor: Float32Array, range: [-34027999387901484e22, 34027999387901484e22] }, { pixelType: "F64", size: 8, ctor: Float64Array, range: [-17976931348623157e292, 17976931348623157e292] }];
let n$6 = null;
function a$5() {
  return n$6 || (n$6 = import("./lerc-wasm.js").then((e2) => e2.l).then(({ default: t2 }) => t2({ locateFile: (t3) => a$8(`esri/layers/support/rasterFormats/${t3}`) })).then((e2) => {
    u$4(e2);
  }), n$6);
}
const l$4 = { getBlobInfo: null, decode: null };
function s$2(e2) {
  return 16 + (e2 >> 3 << 3);
}
function i$3(e2, t2, n2) {
  n2.set(e2.slice(t2, t2 + n2.length));
}
function u$4(e2) {
  const { _malloc: n2, _free: r2, _lerc_getBlobInfo: a2, _lerc_getDataRanges: o2, _lerc_decode_4D: u2, asm: f2 } = e2;
  let c2;
  const h2 = Object.values(f2).find((t2) => t2 && "buffer" in t2 && t2.buffer === e2.HEAPU8.buffer), y2 = (e3) => {
    const t2 = e3.map((e4) => s$2(e4)), r3 = t2.reduce((e4, t3) => e4 + t3), a3 = n2(r3);
    c2 = new Uint8Array(h2.buffer);
    let o3 = t2[0];
    t2[0] = a3;
    for (let n3 = 1; n3 < t2.length; n3++) {
      const e4 = t2[n3];
      t2[n3] = t2[n3 - 1] + o3, o3 = e4;
    }
    return t2;
  };
  l$4.getBlobInfo = (e3) => {
    const t2 = 12, n3 = 3, l2 = new Uint8Array(4 * t2), s2 = new Uint8Array(8 * n3), [u3, f3, p2] = y2([e3.length, l2.length, s2.length]);
    c2.set(e3, u3), c2.set(l2, f3), c2.set(s2, p2);
    let g2 = a2(u3, e3.length, f3, p2, t2, n3);
    if (g2)
      throw r2(u3), `lerc-getBlobInfo: error code is ${g2}`;
    c2 = new Uint8Array(h2.buffer), i$3(c2, f3, l2), i$3(c2, p2, s2);
    const d2 = new Uint32Array(l2.buffer), b2 = new Float64Array(s2.buffer), [A2, w2, , m2, U2, x2, C2, T2, V2, z2, F2] = d2, I2 = { version: A2, depthCount: z2, width: m2, height: U2, validPixelCount: C2, bandCount: x2, blobSize: T2, maskCount: V2, dataType: w2, minValue: b2[0], maxValue: b2[1], maxZerror: b2[2], statistics: [], bandCountWithNoData: F2 };
    if (F2)
      return I2;
    if (z2 === 1 && x2 === 1)
      return r2(u3), I2.statistics.push({ minValue: b2[0], maxValue: b2[1] }), I2;
    const D2 = z2 * x2 * 8, _2 = new Uint8Array(D2), k2 = new Uint8Array(D2);
    let B2 = u3, S2 = 0, v2 = 0, O2 = false;
    if (c2.byteLength < u3 + 2 * D2 ? (r2(u3), O2 = true, [B2, S2, v2] = y2([e3.length, D2, D2]), c2.set(e3, B2)) : [S2, v2] = y2([D2, D2]), c2.set(_2, S2), c2.set(k2, v2), g2 = o2(B2, e3.length, z2, x2, S2, v2), g2)
      throw r2(B2), O2 || r2(S2), `lerc-getDataRanges: error code is ${g2}`;
    c2 = new Uint8Array(h2.buffer), i$3(c2, S2, _2), i$3(c2, v2, k2);
    const $ = new Float64Array(_2.buffer), j = new Float64Array(k2.buffer), M2 = I2.statistics;
    for (let r3 = 0; r3 < x2; r3++)
      if (z2 > 1) {
        const e4 = $.slice(r3 * z2, (r3 + 1) * z2), t3 = j.slice(r3 * z2, (r3 + 1) * z2), n4 = Math.min.apply(null, e4), a3 = Math.max.apply(null, t3);
        M2.push({ minValue: n4, maxValue: a3, depthStats: { minValues: e4, maxValues: t3 } });
      } else
        M2.push({ minValue: $[r3], maxValue: j[r3] });
    return r2(B2), O2 || r2(S2), I2;
  }, l$4.decode = (e3, n3) => {
    const { maskCount: a3, depthCount: o3, bandCount: l2, width: s2, height: f3, dataType: p2, bandCountWithNoData: g2 } = n3, d2 = t$3[p2], b2 = s2 * f3, A2 = new Uint8Array(b2 * l2), w2 = b2 * o3 * l2 * d2.size, m2 = new Uint8Array(w2), U2 = new Uint8Array(l2), x2 = new Uint8Array(8 * l2), [C2, T2, V2, z2, F2] = y2([e3.length, A2.length, m2.length, U2.length, x2.length]);
    c2.set(e3, C2), c2.set(A2, T2), c2.set(m2, V2), c2.set(U2, z2), c2.set(x2, F2);
    const I2 = u2(C2, e3.length, a3, T2, o3, s2, f3, l2, p2, V2, z2, F2);
    if (I2)
      throw r2(C2), `lerc-decode: error code is ${I2}`;
    c2 = new Uint8Array(h2.buffer), i$3(c2, V2, m2), i$3(c2, T2, A2);
    let D2 = null;
    if (g2) {
      i$3(c2, z2, U2), i$3(c2, F2, x2), D2 = [];
      const e4 = new Float64Array(x2.buffer);
      for (let t2 = 0; t2 < U2.length; t2++)
        D2.push(U2[t2] ? e4[t2] : null);
    }
    return r2(C2), { data: m2, maskData: A2, noDataValues: D2 };
  };
}
function f$4(e2, t2, n2, r2, a2) {
  if (n2 < 2)
    return e2;
  const o2 = new r2(t2 * n2);
  if (a2)
    for (let l2 = 0, s2 = 0; l2 < t2; l2++)
      for (let r3 = 0, a3 = l2; r3 < n2; r3++, a3 += t2)
        o2[a3] = e2[s2++];
  else
    for (let l2 = 0, s2 = 0; l2 < t2; l2++)
      for (let r3 = 0, a3 = l2; r3 < n2; r3++, a3 += t2)
        o2[s2++] = e2[a3];
  return o2;
}
function c$3(e2, n2 = {}) {
  var _a;
  const r2 = (_a = n2.inputOffset) != null ? _a : 0, a2 = e2 instanceof Uint8Array ? e2.subarray(r2) : new Uint8Array(e2, r2), o2 = l$4.getBlobInfo(a2), { data: s2, maskData: i2 } = l$4.decode(a2, o2), { width: u2, height: c2, bandCount: h2, depthCount: y2, dataType: p2, maskCount: g2, statistics: d2 } = o2, b2 = t$3[p2], A2 = new b2.ctor(s2.buffer), w2 = [], m2 = [], U2 = u2 * c2, x2 = U2 * y2;
  for (let t2 = 0; t2 < h2; t2++) {
    const e3 = A2.subarray(t2 * x2, (t2 + 1) * x2);
    if (n2.returnInterleaved)
      w2.push(e3);
    else {
      const t3 = f$4(e3, U2, y2, b2.ctor, true);
      w2.push(t3);
    }
    m2.push(i2.subarray(t2 * x2, (t2 + 1) * x2));
  }
  const C2 = g2 === 0 ? null : g2 === 1 ? m2[0] : new Uint8Array(U2);
  if (g2 > 1) {
    C2.set(m2[0]);
    for (let e3 = 1; e3 < m2.length; e3++) {
      const t2 = m2[e3];
      for (let e4 = 0; e4 < U2; e4++)
        C2[e4] = C2[e4] & t2[e4];
    }
  }
  const { noDataValue: T2 } = n2, V2 = T2 != null && b2.range[0] <= T2 && b2.range[1] >= T2;
  if (g2 > 0 && V2)
    for (let t2 = 0; t2 < h2; t2++) {
      const e3 = w2[t2], n3 = m2[t2] || C2;
      for (let t3 = 0; t3 < U2; t3++)
        n3[t3] === 0 && (e3[t3] = T2);
    }
  const z2 = g2 === h2 && h2 > 1 ? m2 : null, { pixelType: F2 } = b2;
  return { width: u2, height: c2, bandCount: h2, pixelType: F2, depthCount: y2, statistics: d2, pixels: w2, mask: C2, bandMasks: z2 };
}
function e$2(e2, n2, t2, r2 = true) {
  if (n2 % 4 != 0 || t2 % 4 != 0) {
    const i2 = new ArrayBuffer(4 * Math.ceil(t2 / 4)), l2 = new Uint8Array(i2), o2 = new Uint8Array(e2, n2, t2);
    if (r2)
      for (let e3 = 0; e3 < l2.length; e3 += 4)
        l2[e3] = o2[e3 + 3], l2[e3 + 1] = o2[e3 + 2], l2[e3 + 2] = o2[e3 + 1], l2[e3 + 3] = o2[e3];
    else
      l2.set(o2);
    return new Uint32Array(l2.buffer);
  }
  if (r2) {
    const r3 = new Uint8Array(e2, n2, t2), i2 = new Uint8Array(r3.length);
    for (let e3 = 0; e3 < i2.length; e3 += 4)
      i2[e3] = r3[e3 + 3], i2[e3 + 1] = r3[e3 + 2], i2[e3 + 2] = r3[e3 + 1], i2[e3 + 3] = r3[e3];
    return new Uint32Array(i2.buffer);
  }
  return new Uint32Array(e2, n2, t2 / 4);
}
function n$5() {
  const e2 = [];
  for (let n2 = 0; n2 <= 257; n2++)
    e2[n2] = [n2];
  return e2;
}
function t$2(e2, n2) {
  for (let t2 = 0; t2 < n2.length; t2++)
    e2.push(n2[t2]);
}
const r$3 = new Set();
function i$2(i2, l2, o2, f2 = true) {
  const s2 = e$2(i2, l2, o2, f2);
  let a2 = 9, c2 = n$5(), u2 = 32, h2 = c2.length, d2 = [], g2 = 1, w2 = s2[0], y2 = 0;
  const A2 = s2.length, U2 = 8 * (4 * A2 - o2), p2 = [];
  for (; w2 != null; ) {
    if (u2 >= a2)
      u2 -= a2, y2 = w2 >>> 32 - a2, w2 <<= a2;
    else {
      y2 = w2 >>> 32 - u2, w2 = s2[g2++];
      const e3 = a2 - u2;
      u2 = 32 - e3, y2 = (y2 << e3) + (w2 >>> u2), w2 <<= e3;
    }
    if (y2 === 257)
      break;
    if (y2 === 256) {
      a2 = 9, c2 = n$5(), h2 = c2.length, d2 = [];
      continue;
    }
    const e2 = c2[y2];
    if (e2 == null) {
      if (y2 > c2.length)
        throw "data integrity issue: code does not exist on code page";
      d2.push(d2[0]), c2[h2++] = d2.slice(), t$2(p2, d2);
    } else
      t$2(p2, e2), d2.push(e2[0]), d2.length > 1 && (c2[h2++] = d2.slice()), d2 = e2.slice();
    if (r$3.has(h2) && a2++, u2 === 0 && (w2 = s2[g2++], u2 = 32), g2 > A2 || g2 === A2 && u2 <= U2)
      break;
  }
  return new Uint8Array(p2);
}
r$3.add(511), r$3.add(1023), r$3.add(2047), r$3.add(4095), r$3.add(8191);
const e$1 = (e2, r2) => {
  const a2 = r2.width * r2.height, n2 = r2.pixelType;
  return Math.floor(e2.byteLength / (a2 * t$1(n2)));
}, t$1 = (e2) => {
  let t2 = 1;
  switch (e2) {
    case Uint8Array:
    case Int8Array:
      t2 = 1;
      break;
    case Uint16Array:
    case Int16Array:
      t2 = 2;
      break;
    case Uint32Array:
    case Int32Array:
    case Float32Array:
      t2 = 4;
      break;
    case Float64Array:
      t2 = 8;
  }
  return t2;
}, r$2 = (e2, t2) => {
  if (8 * e2.byteLength < t2)
    return null;
  const r2 = new Uint8Array(e2, 0, Math.ceil(t2 / 8)), a2 = new Uint8Array(t2);
  let n2 = 0, s2 = 0, l2 = 0, i2 = 0;
  for (l2 = 0; l2 < r2.length - 1; l2++)
    for (s2 = r2[l2], i2 = 7; i2 >= 0; i2--)
      a2[n2++] = s2 >> i2 & 1;
  for (i2 = 7; n2 < t2 - 1; )
    s2 = r2[r2.length - 1], a2[n2++] = s2 >> i2 & 1, i2--;
  return a2;
};
class a$4 {
  static decode(a2, n2) {
    const s2 = n2.pixelType, l2 = [], i2 = n2.width * n2.height, h2 = e$1(a2, n2), { bandIds: c2, format: y2 } = n2, o2 = c2 && c2.length || e$1(a2, n2), b2 = a2.byteLength - a2.byteLength % (i2 * t$1(s2)), f2 = new s2(a2, 0, i2 * h2);
    let u2, g2, A2, p2, d2 = null;
    if (y2 === "bip")
      for (u2 = 0; u2 < o2; u2++) {
        for (A2 = new s2(i2), p2 = c2 ? c2[u2] : u2, g2 = 0; g2 < i2; g2++)
          A2[g2] = f2[g2 * h2 + p2];
        l2.push(A2);
      }
    else if (y2 === "bsq")
      for (u2 = 0; u2 < o2; u2++)
        p2 = c2 ? c2[u2] : u2, l2.push(f2.subarray(p2 * i2, (p2 + 1) * i2));
    return b2 < a2.byteLength - 1 && (d2 = r$2(a2.slice(b2), i2)), { pixels: l2, mask: d2 };
  }
}
function r$1(r2, t2) {
  let n2 = 0, o2 = "", e2 = 0, f2 = 0;
  const c2 = r2.length;
  for (; n2 < c2; )
    f2 = r2[n2++], e2 = f2 >> 4, e2 < 8 ? e2 = 1 : e2 === 15 ? (e2 = 4, f2 = (7 & f2) << 18 | (63 & r2[n2++]) << 12 | (63 & r2[n2++]) << 6 | 63 & r2[n2++]) : e2 === 14 ? (e2 = 3, f2 = (15 & f2) << 12 | (63 & r2[n2++]) << 6 | 63 & r2[n2++]) : (e2 = 2, f2 = (31 & f2) << 6 | 63 & r2[n2++]), (f2 !== 0 || t2) && (o2 += String.fromCharCode(f2));
  return o2;
}
const e = (() => {
  const e2 = [];
  return e2[254] = "NEWSUBFILETYPE", e2[255] = "SUBFILETYPE", e2[256] = "IMAGEWIDTH", e2[257] = "IMAGELENGTH", e2[258] = "BITSPERSAMPLE", e2[259] = "COMPRESSION", e2[262] = "PHOTOMETRICINTERPRETATION", e2[263] = "THRESHHOLDING", e2[264] = "CELLWIDTH", e2[265] = "CELLLENGTH", e2[266] = "FILLORDER", e2[269] = "DOCUMENTNAME", e2[270] = "IMAGEDESCRIPTION", e2[271] = "MAKE", e2[272] = "MODEL", e2[273] = "STRIPOFFSETS", e2[274] = "ORIENTATION", e2[277] = "SAMPLESPERPIXEL", e2[278] = "ROWSPERSTRIP", e2[279] = "STRIPBYTECOUNTS", e2[280] = "MINSAMPLEVALUE", e2[281] = "MAXSAMPLEVALUE", e2[282] = "XRESOLUTION", e2[283] = "YRESOLUTION", e2[284] = "PLANARCONFIGURATION", e2[285] = "PAGENAME", e2[286] = "XPOSITION", e2[287] = "YPOSITION", e2[288] = "FREEOFFSETS", e2[289] = "FREEBYTECOUNTS", e2[290] = "GRAYRESPONSEUNIT", e2[291] = "GRAYRESPONSECURVE", e2[292] = "T4OPTIONS", e2[293] = "T6OPTIONS", e2[296] = "RESOLUTIONUNIT", e2[297] = "PAGENUMBER", e2[300] = "COLORRESPONSEUNIT", e2[301] = "TRANSFERFUNCTION", e2[305] = "SOFTWARE", e2[306] = "DATETIME", e2[315] = "ARTIST", e2[316] = "HOSTCOMPUTER", e2[317] = "PREDICTOR", e2[318] = "WHITEPOINT", e2[319] = "PRIMARYCHROMATICITIES", e2[320] = "COLORMAP", e2[321] = "HALFTONEHINTS", e2[322] = "TILEWIDTH", e2[323] = "TILELENGTH", e2[324] = "TILEOFFSETS", e2[325] = "TILEBYTECOUNTS", e2[326] = "BADFAXLINES", e2[327] = "CLEANFAXDATA", e2[328] = "CONSECUTIVEBADFAXLINES", e2[330] = "SUBIFD", e2[332] = "INKSET", e2[333] = "INKNAMES", e2[334] = "NUMBEROFINKS", e2[336] = "DOTRANGE", e2[337] = "TARGETPRINTER", e2[338] = "EXTRASAMPLES", e2[339] = "SAMPLEFORMAT", e2[340] = "SMINSAMPLEVALUE", e2[341] = "SMAXSAMPLEVALUE", e2[342] = "TRANSFERRANGE", e2[347] = "JPEGTABLES", e2[512] = "JPEGPROC", e2[513] = "JPEGIFOFFSET", e2[514] = "JPEGIFBYTECOUNT", e2[515] = "JPEGRESTARTINTERVAL", e2[517] = "JPEGLOSSLESSPREDICTORS", e2[518] = "JPEGPOINTTRANSFORM", e2[519] = "JPEGQTABLES", e2[520] = "JPEGDCTABLES", e2[521] = "JPEGACTABLES", e2[529] = "YCBCRCOEFFICIENTS", e2[530] = "YCBCRSUBSAMPLING", e2[531] = "YCBCRPOSITIONING", e2[532] = "REFERENCEBLACKWHITE", e2[700] = "XMP", e2[33550] = "GEOPIXELSCALE", e2[33922] = "GEOTIEPOINTS", e2[33432] = "COPYRIGHT", e2[42112] = "GDAL_METADATA", e2[42113] = "GDAL_NODATA", e2[50844] = "RPCCOEFFICIENT", e2[34264] = "GEOTRANSMATRIX", e2[34735] = "GEOKEYDIRECTORY", e2[34736] = "GEODOUBLEPARAMS", e2[34737] = "GEOASCIIPARAMS", e2[34665] = "EXIFIFD", e2[34853] = "GPSIFD", e2[40965] = "INTEROPERABILITYIFD", e2;
})(), i$1 = (() => {
  const i2 = e.slice();
  return i2[36864] = "ExifVersion", i2[40960] = "FlashpixVersion", i2[40961] = "ColorSpace", i2[42240] = "Gamma", i2[37121] = "ComponentsConfiguration", i2[37122] = "CompressedBitsPerPixel", i2[40962] = "PixelXDimension", i2[40963] = "PixelYDimension", i2[37500] = "MakerNote", i2[37510] = "UserComment", i2[40964] = "RelatedSoundFile", i2[36867] = "DateTimeOriginal", i2[36868] = "DateTimeDigitized", i2[36880] = "OffsetTime", i2[36881] = "OffsetTimeOriginal", i2[36882] = "OffsetTimeDigitized", i2[37520] = "SubSecTime", i2[37521] = "SubSecTimeOriginal", i2[37522] = "SubSecTimeDigitized", i2[37888] = "Temperature", i2[37889] = "Humidity", i2[37890] = "Pressure", i2[37891] = "WaterDepth", i2[37892] = "Acceleration", i2[37893] = "CameraElevationAngle", i2[42016] = "ImageUniqueID", i2[42032] = "CameraOwnerName", i2[42033] = "BodySerialNumber", i2[42034] = "LensSpecification", i2[42035] = "LensMake", i2[42036] = "LensModel", i2[42037] = "LensSerialNumber", i2[33434] = "ExposureTime", i2[33437] = "FNumber", i2[34850] = "ExposureProgram", i2[34852] = "SpectralSensitivity", i2[34855] = "PhotographicSensitivity", i2[34856] = "OECF", i2[34864] = "SensitivityType", i2[34865] = "StandardOutputSensitivity", i2[34866] = "RecommendedExposureIndex", i2[34867] = "ISOSpeed", i2[34868] = "ISOSpeedLatitudeyyy", i2[34869] = "ISOSpeedLatitudezzz", i2[37377] = "ShutterSpeedValue", i2[37378] = "ApertureValue", i2[37379] = "BrightnessValue", i2[37380] = "ExposureBiasValue", i2[37381] = "MaxApertureValue", i2[37382] = "SubjectDistance", i2[37383] = "MeteringMode", i2[37384] = "LightSource", i2[37385] = "Flash", i2[37386] = "FocalLength", i2[37396] = "SubjectArea", i2[41483] = "FlashEnergy", i2[41484] = "SpatialFrequencyResponse", i2[41486] = "FocalPlaneXResolution", i2[41487] = "FocalPlaneYResolution", i2[41488] = "FocalPlaneResolutionUnit", i2[41492] = "SubjectLocation", i2[41493] = "ExposureIndex", i2[41495] = "SensingMethod", i2[41728] = "FileSource", i2[41729] = "SceneType", i2[41730] = "CFAPattern", i2[41985] = "CustomRendered", i2[41986] = "ExposureMode", i2[41987] = "WhiteBalance", i2[41988] = "DigitalZoomRatio", i2[41989] = "FocalLengthIn35mmFilm", i2[41990] = "SceneCaptureType", i2[41991] = "GainControl", i2[41992] = "Contrast", i2[41993] = "Saturation", i2[41994] = "Sharpness", i2[41995] = "DeviceSettingDescription", i2[41996] = "SubjectDistanceRange", i2;
})(), t = ["GPSVersionID", "GPSLatitudeRef", "GPSLatitude", "GPSLongitudeRef", "GPSLongitude", "GPSAltitudeRef", "GPSAltitude", "GPSTimeStamp", "GPSSatellites", "GPSStatus", "GPSMeasureMode", "GPSDOP", "GPSSpeedRef", "GPSSpeed", "GPSTrackRef", "GPSTrack", "GPSImgDirectionRef", "GPSImgDirection", "GPSMapDatum", "GPSDestLatitudeRef", "GPSDestLatitude", "GPSDestLongitudeRef", "GPSDestLongitude", "GPSDestBearingRef", "GPSDestBearing", "GPSDestDistanceRef", "GPSDestDistance", "GPSProcessingMethod", "GPSAreaInformation", "GPSDateStamp", "GPSDifferential", "GPSHPositioningError"], o$2 = (() => {
  const e2 = [];
  return e2[1024] = "GTModelTypeGeoKey", e2[1025] = "GTRasterTypeGeoKey", e2[1026] = "GTCitationGeoKey", e2[2048] = "GeographicTypeGeoKey", e2[2049] = "GeogCitationGeoKey", e2[2050] = "GeogGeodeticDatumGeoKey", e2[2051] = "GeogPrimeMeridianGeoKey", e2[2052] = "GeogLinearUnitsGeoKey", e2[2053] = "GeogLinearUnitSizeGeoKey", e2[2054] = "GeogAngularUnitsGeoKey", e2[2055] = "GeogAngularUnitSizeGeoKey", e2[2056] = "GeogEllipsoidGeoKey", e2[2057] = "GeogSemiMajorAxisGeoKey", e2[2058] = "GeogSemiMinorAxisGeoKey", e2[2059] = "GeogInvFlatteningGeoKey", e2[2061] = "GeogPrimeMeridianLongGeoKey", e2[2060] = "GeogAzimuthUnitsGeoKey", e2[3072] = "ProjectedCSTypeGeoKey", e2[3073] = "PCSCitationGeoKey", e2[3074] = "ProjectionGeoKey", e2[3075] = "ProjCoordTransGeoKey", e2[3076] = "ProjLinearUnitsGeoKey", e2[3077] = "ProjLinearUnitSizeGeoKey", e2[3078] = "ProjStdParallel1GeoKey", e2[3079] = "ProjStdParallel2GeoKey", e2[3080] = "ProjNatOriginLongGeoKey", e2[3081] = "ProjNatOriginLatGeoKey", e2[3082] = "ProjFalseEastingGeoKey", e2[3083] = "ProjFalseNorthingGeoKey", e2[3084] = "ProjFalseOriginLongGeoKey", e2[3085] = "ProjFalseOriginLatGeoKey", e2[3086] = "ProjFalseOriginEastingGeoKey", e2[3087] = "ProjFalseOriginNorthingGeoKey", e2[3088] = "ProjCenterLongGeoKey", e2[3090] = "ProjCenterEastingGeoKey", e2[3091] = "ProjCenterNorthingGeoKey", e2[3092] = "ProjScaleAtNatOriginGeoKey", e2[3093] = "ProjScaleAtCenterGeoKey", e2[3094] = "ProjAzimuthAngleGeoKey", e2[3095] = "ProjStraightVertPoleLongGeoKey", e2[4096] = "VerticalCSTypeGeoKey", e2[4097] = "VerticalCitationGeoKey", e2[4098] = "VerticalDatumGeoKey", e2[4099] = "VerticalUnitsGeoKey", e2;
})(), S$2 = (i2, t2) => {
  let o2 = (t2 || e)[i2];
  return o2 === void 0 && (o2 = "unknown" + String(i2)), o2;
}, E$1 = new Map();
E$1.set("EXIFIFD", i$1), E$1.set("GPSIFD", t);
const n$4 = { TIFF_TAGS: e, ifdTags: E$1, GEO_KEYS: o$2, getTagName: S$2 };
const r = (() => {
  const r2 = new ArrayBuffer(4), n2 = new Uint8Array(r2);
  return new Uint32Array(r2)[0] = 1, n2[0] === 1;
})();
const f$3 = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, -1, -1, -1, 8, 8, 8], u$3 = 4294967296, c$2 = new Set([1, 5, 6, 7, 8, 34712, 34887]);
function h$3(e2, t2) {
  let n2 = "unknown";
  return e2 === 3 ? n2 = t2 === 64 ? "f64" : "f32" : e2 === 1 ? t2 === 1 ? n2 = "u1" : t2 === 2 ? n2 = "u2" : t2 === 4 ? n2 = "u4" : t2 <= 8 ? n2 = "u8" : t2 <= 16 ? n2 = "u16" : t2 <= 32 && (n2 = "u32") : e2 === 2 && (t2 <= 8 ? n2 = "s8" : t2 <= 16 ? n2 = "s16" : t2 <= 32 && (n2 = "s32")), n2;
}
function g$3(e2) {
  let t2 = null;
  switch (e2 ? e2.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      t2 = Uint8Array;
      break;
    case "u16":
      t2 = Uint16Array;
      break;
    case "u32":
      t2 = Uint32Array;
      break;
    case "s8":
      t2 = Int8Array;
      break;
    case "s16":
      t2 = Int16Array;
      break;
    case "s32":
      t2 = Int32Array;
      break;
    case "f64":
      t2 = Float64Array;
      break;
    default:
      t2 = Float32Array;
  }
  return t2;
}
function w$1(e2, t2) {
  return { x: t2[0] * e2.x + t2[1] * e2.y + t2[2], y: t2[3] * e2.x + t2[4] * e2.y + t2[5] };
}
function p$3(e2, t2) {
  var _a;
  return (_a = e2.get(t2)) == null ? void 0 : _a.values;
}
function d$2(e2, t2) {
  var _a;
  return (_a = e2.get(t2)) == null ? void 0 : _a.values;
}
function I$1(e2, t2) {
  var _a, _b;
  return (_b = (_a = e2.get(t2)) == null ? void 0 : _a.values) == null ? void 0 : _b[0];
}
function T$2(e2, t2) {
  var _a, _b;
  return (_b = (_a = e2.get(t2)) == null ? void 0 : _a.values) == null ? void 0 : _b[0];
}
function E(e2, t2, n2, a2 = 0, i2 = n$4.TIFF_TAGS, s2 = 4) {
  const l2 = s2 === 8, o2 = l2 ? L$1(new DataView(e2, n2, 8), 0, t2) : new DataView(e2, n2, 2).getUint16(0, t2), f2 = 4 + 2 * s2, u2 = l2 ? 8 : 2, c2 = u2 + o2 * f2;
  if (n2 + c2 > e2.byteLength)
    return { success: false, ifd: null, nextIFD: null, requiredBufferSize: c2 };
  const h2 = n2 + c2 + 4 <= e2.byteLength ? k$2(new DataView(e2, n2 + c2, s2 === 8 ? 8 : 4), 0, t2, s2 === 8) : null, g2 = n2 + u2, w2 = new Map();
  let p2, d2, I2, T2, E2, y2 = 0, m2 = 0;
  for (let A2 = 0; A2 < o2; A2++) {
    d2 = new DataView(e2, g2 + f2 * A2, f2), I2 = d2.getUint16(0, t2), E2 = d2.getUint16(2, t2), T2 = n$4.getTagName(I2, i2);
    const n3 = [];
    s2 === 2 ? (y2 = d2.getUint16(4, t2), m2 = d2.getUint16(6, t2)) : s2 === 4 ? (y2 = d2.getUint32(4, t2), m2 = d2.getUint32(8, t2)) : s2 === 8 && (y2 = k$2(d2, 4, t2, true), m2 = k$2(d2, 12, t2, true), n3.push(d2.getUint32(12, t2)), n3.push(d2.getUint32(16, t2))), p2 = { id: I2, type: E2, valueCount: y2, valueOffset: m2, valueOffsets: n3, values: null }, b$1(e2, t2, p2, a2, false, s2), w2.set(T2, p2);
  }
  return { success: true, ifd: w2, nextIFD: h2, requiredBufferSize: c2 };
}
const y$1 = (e2, t2) => c$3(e2, { inputOffset: t2 }).pixels[0];
async function m$3(t2, i2, r$12, f2, u2) {
  var _a, _b;
  const c2 = r === i2, w2 = T$2(r$12, "BITSPERSAMPLE"), p2 = h$3((_a = T$2(r$12, "SAMPLEFORMAT")) != null ? _a : 1, w2), d2 = (_b = T$2(r$12, "COMPRESSION")) != null ? _b : 1, I2 = g$3(p2);
  let E2, m2, A2, S2, M2, x2, b2;
  if (d2 === 34887)
    return await a$5(), y$1(t2, f2);
  if (d2 === 1)
    b2 = t2.slice(f2, f2 + u2), A2 = new Uint8Array(b2);
  else if (d2 === 8 || d2 === 32946)
    A2 = new Uint8Array(t2, f2, u2), M2 = new s$3(A2), x2 = M2.getBytes(), b2 = new ArrayBuffer(x2.length), A2 = new Uint8Array(b2), A2.set(x2);
  else if (d2 === 6) {
    A2 = new Uint8Array(t2, f2, u2);
    const e2 = new a$6();
    e2.parse(A2);
    const a2 = e2.getData(e2.width, e2.height, true);
    b2 = new ArrayBuffer(a2.length), A2 = new Uint8Array(b2), A2.set(a2);
  } else if (d2 === 7) {
    const e2 = r$12.get("JPEGTABLES").values, a2 = e2.length - 2;
    A2 = new Uint8Array(a2 + u2 - 2);
    for (let t3 = 0; t3 < a2; t3++)
      A2[t3] = e2[t3];
    const i3 = new Uint8Array(t2, f2 + 2, u2 - 2);
    for (let t3 = 0; t3 < i3.length; t3++)
      A2[a2 + t3] = i3[t3];
    const s2 = new a$6();
    s2.parse(A2);
    const l2 = s2.getData(s2.width, s2.height, true);
    b2 = new ArrayBuffer(l2.length), A2 = new Uint8Array(b2), A2.set(l2);
  } else
    d2 === 5 && (A2 = i$2(t2, f2, u2, i2), b2 = A2.buffer);
  if (p2 === "u8" || p2 === "s8" || c2)
    m2 = new I2(b2);
  else {
    switch (c$4(A2), b2 = new ArrayBuffer(A2.length), S2 = new Uint8Array(b2), p2) {
      case "u16":
      case "s16":
        for (E2 = 0; E2 < A2.length; E2 += 2)
          S2[E2] = A2[E2 + 1], S2[E2 + 1] = A2[E2];
        break;
      case "u32":
      case "s32":
      case "f32":
        for (E2 = 0; E2 < A2.length; E2 += 4)
          S2[E2] = A2[E2 + 3], S2[E2 + 1] = A2[E2 + 2], S2[E2 + 2] = A2[E2 + 1], S2[E2 + 3] = A2[E2];
    }
    m2 = new I2(b2);
  }
  return m2;
}
async function A$1(e2, t2, n2) {
  var _a;
  const a2 = d$2(n2, "TILEOFFSETS");
  if (a2 === void 0)
    return null;
  const i2 = d$2(n2, "TILEBYTECOUNTS"), { width: s2, height: r2, pixelType: l2, tileWidth: o2, tileHeight: f2 } = D$2([n2]), u2 = O$2(n2, t2), c2 = t2.planes, h2 = s2 * r2, w2 = T$2(n2, "BITSPERSAMPLE"), p2 = ((_a = T$2(n2, "COMPRESSION")) != null ? _a : 1) === 34887, I2 = g$3(l2), E2 = [];
  for (let g2 = 0; g2 < c2; g2++)
    E2.push(new I2(h2));
  let y2, A2, S2, M2, x2, b2, U2, L2, P2, k2, N2, G2, R2;
  const C2 = Math.ceil(s2 / o2);
  if (w2 % 8 == 0) {
    if (p2 && u2 && c2 > 1) {
      const l3 = Math.round(a2.length / c2);
      for (y2 = 0; y2 < l3; y2++) {
        b2 = Math.floor(y2 / C2) * f2, U2 = y2 % C2 * o2, L2 = b2 * s2 + U2;
        for (let l4 = 0; l4 < c2; l4++) {
          const u3 = y2 * c2 + l4;
          if (i2[u3] !== 0)
            for (S2 = await m$3(e2, t2.littleEndian, n2, a2[u3], i2[u3]), k2 = 0, P2 = L2, G2 = Math.min(o2, s2 - U2), N2 = Math.min(f2, r2 - b2), R2 = E2[l4], M2 = 0; M2 < N2; M2++)
              for (P2 = L2 + M2 * s2, k2 = M2 * o2, x2 = 0; x2 < G2; x2++, P2++, k2++)
                R2[P2] = S2[k2];
        }
      }
    } else
      for (y2 = 0; y2 < a2.length; y2++)
        if (i2[y2] !== 0)
          for (b2 = Math.floor(y2 / C2) * f2, U2 = y2 % C2 * o2, L2 = b2 * s2 + U2, S2 = await m$3(e2, t2.littleEndian, n2, a2[y2], i2[y2]), k2 = 0, P2 = L2, G2 = Math.min(o2, s2 - U2), N2 = Math.min(f2, r2 - b2), A2 = 0; A2 < c2; A2++)
            if (R2 = E2[A2], u2 || p2)
              for (M2 = 0; M2 < N2; M2++)
                for (P2 = L2 + M2 * s2, k2 = o2 * f2 * A2 + M2 * o2, x2 = 0; x2 < G2; x2++, P2++, k2++)
                  R2[P2] = S2[k2];
            else
              for (M2 = 0; M2 < N2; M2++)
                for (P2 = L2 + M2 * s2, k2 = M2 * o2 * c2 + A2, x2 = 0; x2 < G2; x2++, P2++, k2 += c2)
                  R2[P2] = S2[k2];
  }
  return { width: s2, height: r2, pixelType: l2, pixels: E2 };
}
const S$1 = (t2, a2, i2) => {
  var _a;
  const r$12 = r === a2.littleEndian, f2 = d$2(i2, "STRIPOFFSETS");
  if (f2 === void 0)
    return null;
  const { width: u2, height: c2, pixelType: h2 } = D$2([i2]), w2 = a2.planes, p2 = u2 * c2, I2 = T$2(i2, "BITSPERSAMPLE"), E2 = g$3(h2), y2 = new E2(p2 * w2), m2 = d$2(i2, "STRIPBYTECOUNTS"), A2 = T$2(i2, "ROWSPERSTRIP"), S2 = (_a = T$2(i2, "COMPRESSION")) != null ? _a : 1;
  let M2, x2, b2, O2, U2, L2, P2, k2, N2, G2, R2, C2 = A2;
  if (I2 % 8 == 0)
    for (M2 = 0; M2 < f2.length; M2++) {
      if (U2 = M2 * (A2 * u2) * w2, C2 = (M2 + 1) * A2 > c2 ? c2 - M2 * A2 : A2, h2 === "u8" || h2 === "s8" || r$12) {
        if (S2 === 8 || S2 === 32946)
          P2 = new Uint8Array(t2, f2[M2], m2[M2]), G2 = new s$3(P2), R2 = G2.getBytes(), L2 = new ArrayBuffer(R2.length), P2 = new Uint8Array(L2), P2.set(R2), P2.length !== C2 * u2 * w2 * I2 / 8 && console.log("strip byte counts is different than expected");
        else if (S2 === 6) {
          P2 = new Uint8Array(t2, f2[M2], m2[M2]);
          const e2 = new a$6();
          e2.parse(P2);
          const a3 = e2.getData(e2.width, e2.height, true);
          L2 = new ArrayBuffer(a3.length), P2 = new Uint8Array(L2), P2.set(a3);
        } else
          S2 === 5 ? (P2 = i$2(t2, f2[M2], m2[M2], a2.littleEndian), L2 = P2.buffer) : (m2[M2] !== C2 * u2 * w2 * I2 / 8 && console.log("strip byte counts is different than expected"), L2 = t2.slice(f2[M2], f2[M2] + m2[M2]));
        O2 = new E2(L2);
      } else {
        switch (S2 === 6 || S2 === 8 || S2 === 32946 ? (P2 = new Uint8Array(t2, f2[M2], m2[M2]), G2 = new s$3(P2), P2 = G2.getBytes(), L2 = new ArrayBuffer(P2.length), k2 = new Uint8Array(L2), P2.length !== C2 * u2 * w2 * I2 / 8 && console.log("strip byte counts is different than expected")) : (m2[M2] !== C2 * u2 * w2 * I2 / 8 && console.log("strip byte counts is different than expected"), L2 = new ArrayBuffer(m2[M2]), P2 = new Uint8Array(t2, f2[M2], m2[M2]), k2 = new Uint8Array(L2)), h2) {
          case "u16":
          case "s16":
            for (b2 = 0; b2 < P2.length; b2 += 2)
              k2[b2] = P2[b2 + 1], k2[b2 + 1] = P2[b2];
            break;
          case "u32":
          case "s32":
          case "f32":
            for (b2 = 0; b2 < P2.length; b2 += 4)
              k2[b2] = P2[b2 + 3], k2[b2 + 1] = P2[b2 + 2], k2[b2 + 2] = P2[b2 + 1], k2[b2 + 3] = P2[b2];
        }
        c$4(L2), O2 = new E2(L2);
      }
      y2.set(O2, U2);
    }
  const F2 = [];
  if (w2 === 1)
    F2.push(y2);
  else
    for (M2 = 0; M2 < w2; M2++) {
      for (N2 = new E2(p2), x2 = 0; x2 < p2; x2++)
        N2[x2] = y2[x2 * w2 + M2];
      F2.push(N2);
    }
  return { width: u2, height: c2, pixelType: h2, pixels: F2 };
}, M$1 = (e2, t2, n2) => {
  if (!(e2 && e2.length > 0 && t2 && n2))
    return null;
  let a2, i2, s2;
  const r2 = e2[0].length, l2 = e2.length, o2 = new Uint8Array(r2);
  for (let f2 = 0; f2 < l2; f2++)
    if (a2 = e2[f2], i2 = t2[f2], s2 = n2[f2], f2 === 0)
      for (let e3 = 0; e3 < r2; e3++)
        o2[e3] = a2[e3] < i2 || a2[e3] > s2 ? 0 : 1;
    else
      for (let e3 = 0; e3 < r2; e3++)
        o2[e3] && (o2[e3] = a2[e3] < i2 || a2[e3] > s2 ? 0 : 1);
  return o2;
}, x$2 = (e2) => {
  if (!e2)
    return null;
  const t2 = e2.match(/<Item(.*?)Item>/gi);
  if (!t2 || t2.length === 0)
    return null;
  const n2 = new Map();
  let a2, i2, s2, r2, l2;
  for (let I2 = 0; I2 < t2.length; I2++)
    a2 = t2[I2], i2 = a2.slice("<Item ".length, a2.indexOf(">")), r2 = a2.indexOf("sample="), r2 > -1 && (l2 = a2.slice(r2 + 'sample="'.length, a2.indexOf('"', r2 + 'sample="'.length))), r2 = a2.indexOf("name="), r2 > -1 && (i2 = a2.slice(r2 + 'name="'.length, a2.indexOf('"', r2 + 'name="'.length))), i2 && (s2 = a2.slice(a2.indexOf(">") + 1, a2.indexOf("</Item>")).trim(), l2 != null ? n2.has(i2) ? n2.get(i2)[l2] = s2 : n2.set(i2, [s2]) : n2.set(i2, s2)), l2 = null;
  const o2 = n2.get("STATISTICS_MINIMUM"), f2 = n2.get("STATISTICS_MAXIMUM"), u2 = n2.get("STATISTICS_MEAN"), c2 = n2.get("STATISTICS_STDDEV");
  let h2 = null;
  if (o2 && f2) {
    h2 = [];
    for (let e3 = 0; e3 < o2.length; e3++)
      h2.push({ min: parseFloat(o2[e3]), max: parseFloat(f2[e3]), avg: u2 && parseFloat(u2[e3]), stddev: c2 && parseFloat(c2[e3]) });
  }
  const g2 = n2.get("BandName"), w2 = n2.get("WavelengthMin"), p2 = n2.get("WavelengthMax");
  let d2 = null;
  if (g2) {
    d2 = [];
    for (let e3 = 0; e3 < g2.length; e3++)
      d2.push({ BandName: g2[e3], WavelengthMin: w2 && parseFloat(w2[e3]), WavelengthMax: p2 && parseFloat(p2[e3]) });
  }
  return { statistics: h2, bandProperties: d2, dataType: n2.get("DataType"), rawMetadata: n2 };
};
function b$1(e2, t2, n2, a2 = 0, i2 = false, s2 = 4) {
  if (n2.values)
    return true;
  const r2 = n2.type, l2 = n2.valueCount;
  let o2 = n2.valueOffset, c2 = [];
  const h2 = f$3[r2], g2 = 8 * h2, w2 = l2 * h2, p2 = l2 * f$3[r2] * 8;
  let d2, I2;
  const T2 = s2 === 8 ? 64 : 32, E2 = n2.valueOffsets;
  if (p2 > T2) {
    if (w2 > (i2 ? e2.byteLength : e2 ? e2.byteLength - o2 + a2 : 0))
      return n2.offlineOffsetSize = [o2, w2], n2.values = null, false;
  }
  if (p2 <= T2) {
    if (!t2)
      if (T2 <= 32)
        o2 >>>= 32 - p2;
      else {
        const e3 = (E2 == null ? void 0 : E2.length) ? E2[0] : o2 >>> 0, t3 = (E2 == null ? void 0 : E2.length) ? E2[1] : Math.round((o2 - e3) / u$3);
        p2 <= 32 ? (o2 = e3 >>> 32 - p2, E2[0] = o2) : (o2 = e3 * 2 ** (32 - p2) + (t3 >>> 32 - p2), E2[0] = e3, E2[1] = t3 >>> 32 - p2);
      }
    if (l2 === 1 && g2 === T2)
      c2 = [o2];
    else if (T2 === 64) {
      const e3 = (E2 == null ? void 0 : E2.length) ? E2[0] : o2 >>> 0, t3 = (E2 == null ? void 0 : E2.length) ? E2[1] : Math.round((o2 - e3) / u$3);
      let n3 = e3, a3 = 32;
      for (I2 = 1; I2 <= l2; I2++) {
        const e4 = 32 - g2 * I2 % 32;
        if (a3 < g2) {
          const i3 = n3 << e4 >>> 32 - a3, s3 = t3 << 32 - a3 >>> 32 - a3;
          n3 = t3, c2.push(i3 + s3 * 2 ** (g2 - a3)), a3 -= 32 - (g2 - a3);
        } else
          c2.push(n3 << e4 >>> 32 - g2), a3 -= g2;
        a3 === 0 && (a3 = 32, n3 = t3);
      }
    } else
      for (I2 = 1; I2 <= l2; I2++) {
        const e3 = 32 - g2 * I2;
        c2.push(o2 << e3 >>> 32 - g2);
      }
  } else {
    o2 -= a2, i2 && (o2 = 0);
    for (let n3 = o2; n3 < o2 + w2; n3 += h2) {
      switch (r2) {
        case 1:
        case 2:
        case 7:
          d2 = new DataView(e2, n3, 1).getUint8(0);
          break;
        case 3:
          d2 = new DataView(e2, n3, 2).getUint16(0, t2);
          break;
        case 4:
        case 13:
          d2 = new DataView(e2, n3, 4).getUint32(0, t2);
          break;
        case 5:
          d2 = new DataView(e2, n3, 4).getUint32(0, t2) / new DataView(e2, n3 + 4, 4).getUint32(0, t2);
          break;
        case 6:
          d2 = new DataView(e2, n3, 1).getInt8(0);
          break;
        case 8:
          d2 = new DataView(e2, n3, 2).getInt16(0, t2);
          break;
        case 9:
          d2 = new DataView(e2, n3, 4).getInt32(0, t2);
          break;
        case 10:
          d2 = new DataView(e2, n3, 4).getInt32(0, t2) / new DataView(e2, n3 + 4, 4).getInt32(0, t2);
          break;
        case 11:
          d2 = new DataView(e2, n3, 4).getFloat32(0, t2);
          break;
        case 12:
          d2 = new DataView(e2, n3, 8).getFloat64(0, t2);
          break;
        case 16:
        case 18:
          d2 = L$1(new DataView(e2, n3, 8), 0, t2);
          break;
        case 17:
          d2 = P$1(new DataView(e2, n3, 8), 0, t2);
          break;
        default:
          d2 = null;
      }
      c2.push(d2);
    }
  }
  if (r2 === 2) {
    let e3 = "";
    const t3 = c2;
    for (c2 = [], I2 = 0; I2 < t3.length; I2++)
      t3[I2] === 0 && e3 !== "" ? (c2.push(e3), e3 = "") : e3 += String.fromCharCode(t3[I2]);
    e3 === "" && c2.length !== 0 || c2.push(e3);
  }
  return n2.values = c2, true;
}
function D$2(e2) {
  var _a, _b;
  const t2 = e2[0], n2 = T$2(t2, "TILEWIDTH"), a2 = T$2(t2, "TILELENGTH"), i2 = T$2(t2, "IMAGEWIDTH"), s2 = T$2(t2, "IMAGELENGTH"), r2 = T$2(t2, "BITSPERSAMPLE"), l2 = T$2(t2, "SAMPLESPERPIXEL"), o2 = (_a = T$2(t2, "SAMPLEFORMAT")) != null ? _a : 1, f2 = h$3(o2, r2), u2 = O$2(t2), g2 = p$3(t2, "GDAL_NODATA");
  let E2 = null;
  (g2 == null ? void 0 : g2.length) && (E2 = g2.map((e3) => parseFloat(e3)), E2.some((e3) => isNaN(e3)) && (E2 = null));
  const y2 = (_b = T$2(t2, "COMPRESSION")) != null ? _b : 1;
  let m2;
  switch (y2) {
    case 1:
      m2 = "NONE";
      break;
    case 2:
    case 3:
    case 4:
    case 32771:
      m2 = "CCITT";
      break;
    case 5:
      m2 = "LZW";
      break;
    case 6:
    case 7:
      m2 = "JPEG";
      break;
    case 32773:
      m2 = "PACKBITS";
      break;
    case 8:
    case 32946:
      m2 = "DEFLATE";
      break;
    case 34712:
      m2 = "JPEG2000";
      break;
    case 34887:
      m2 = "LERC";
      break;
    default:
      m2 = String(y2);
  }
  let A2 = true, S2 = "";
  c$2.has(y2) || (A2 = false, S2 += "unsupported tag compression " + y2), o2 > 3 && (A2 = false, S2 += "unsupported tag sampleFormat " + o2), r2 % 8 != 0 && (A2 = false, S2 += "unsupported tag bitsPerSample " + r2);
  const M2 = I$1(t2, "GEOASCIIPARAMS");
  let b2;
  if (M2) {
    const e3 = M2.split("|").find((e4) => e4.includes("ESRI PE String = ")), t3 = e3 ? e3.replace("ESRI PE String = ", "") : "";
    b2 = t3.startsWith("COMPD_CS") || t3.startsWith("PROJCS") || t3.startsWith("GEOGCS") ? { wkid: null, wkt: t3 } : null;
  }
  const D2 = d$2(t2, "GEOTIEPOINTS"), U2 = d$2(t2, "GEOPIXELSCALE"), L2 = d$2(t2, "GEOTRANSMATRIX"), P2 = t2.has("GEOKEYDIRECTORY") ? t2.get("GEOKEYDIRECTORY").data : null;
  let k2, N2, G2 = false;
  if (P2) {
    G2 = T$2(P2, "GTRasterTypeGeoKey") === 2;
    const e3 = T$2(P2, "GTModelTypeGeoKey");
    if (e3 === 2) {
      const e4 = T$2(P2, "GeographicTypeGeoKey");
      e4 >= 1024 && e4 <= 32766 && (b2 = { wkid: e4 });
    } else if (e3 === 1) {
      const e4 = T$2(P2, "ProjectedCSTypeGeoKey");
      e4 >= 1024 && e4 <= 32766 && (b2 = { wkid: e4 });
    }
  }
  if (U2 && D2 && D2.length >= 6 ? (k2 = [U2[0], 0, D2[3] - D2[0] * U2[0], 0, -Math.abs(U2[1]), D2[4] - D2[1] * U2[1]], G2 && (k2[2] -= 0.5 * k2[0] + 0.5 * k2[1], k2[5] -= 0.5 * k2[3] + 0.5 * k2[4])) : L2 && L2.length === 16 && (k2 = G2 ? [L2[0], L2[1], L2[3] - 0.5 * L2[0], L2[4], L2[5], L2[7] - 0.5 * L2[5]] : [L2[0], L2[1], L2[3], L2[4], L2[5], L2[7]]), k2) {
    const e3 = [{ x: 0, y: s2 }, { x: 0, y: 0 }, { x: i2, y: s2 }, { x: i2, y: 0 }];
    let t3, n3 = Number.POSITIVE_INFINITY, a3 = Number.POSITIVE_INFINITY, r3 = Number.NEGATIVE_INFINITY, l3 = Number.NEGATIVE_INFINITY;
    for (let i3 = 0; i3 < e3.length; i3++)
      t3 = w$1(e3[i3], k2), n3 = t3.x > n3 ? n3 : t3.x, r3 = t3.x < r3 ? r3 : t3.x, a3 = t3.y > a3 ? a3 : t3.y, l3 = t3.y < l3 ? l3 : t3.y;
    N2 = { xmin: n3, xmax: r3, ymin: a3, ymax: l3, spatialReference: b2 };
  } else
    N2 = { xmin: -0.5, ymin: 0.5 - s2, xmax: i2 - 0.5, ymax: 0.5, spatialReference: b2 };
  const C2 = e2.filter((e3) => I$1(e3, "NEWSUBFILETYPE") === 1);
  let F2, v2, B2, V2, W;
  if (C2.length > 0) {
    B2 = Math.round(Math.log(i2 / T$2(C2[0], "IMAGEWIDTH")) / Math.LN2);
    const e3 = C2[C2.length - 1];
    V2 = Math.round(Math.log(i2 / T$2(e3, "IMAGEWIDTH")) / Math.LN2), F2 = T$2(e3, "TILEWIDTH"), v2 = T$2(e3, "TILELENGTH");
  }
  F2 = V2 != null && V2 > 0 ? F2 || n2 : null, v2 = V2 != null && V2 > 0 ? v2 || a2 : null, n2 && (W = [{ maxCol: Math.ceil(i2 / n2) - 1, maxRow: Math.ceil(s2 / a2) - 1, minRow: 0, minCol: 0 }], C2.forEach((e3) => {
    W.push({ maxCol: Math.ceil(T$2(e3, "IMAGEWIDTH") / T$2(e3, "TILEWIDTH")) - 1, maxRow: Math.ceil(T$2(e3, "IMAGELENGTH") / T$2(e3, "TILELENGTH")) - 1, minRow: 0, minCol: 0 });
  }));
  const H = I$1(e2[0], "GDAL_METADATA"), Y = x$2(H);
  return S2 += " " + R({ width: i2, height: s2, tileWidth: n2, tileHeight: a2, planes: l2, ifds: e2 }), { width: i2, height: s2, tileWidth: n2, tileHeight: a2, planes: l2, isBSQ: u2, pixelType: f2, compression: m2, noData: E2, isSupported: A2, message: S2, extent: N2, affine: U2 ? null : k2, firstPyramidLevel: B2, maximumPyramidLevel: V2, pyramidBlockWidth: F2, pyramidBlockHeight: v2, tileBoundary: W, metadata: Y };
}
function O$2(e2, t2) {
  const n2 = p$3(e2, "PLANARCONFIGURATION");
  return n2 ? n2[0] === 2 : !!t2 && t2.isBSQ;
}
function U$1(e2) {
  const { littleEndian: t2, isBigTiff: n2, firstIFDPos: a2 } = N(e2);
  let i2 = a2;
  const s2 = [];
  do {
    const a3 = G(e2, t2, i2, 0, n$4.TIFF_TAGS, n2 ? 8 : 4);
    if (!a3.success)
      break;
    s2.push(a3.ifd), i2 = a3.nextIFD;
  } while (i2 > 0);
  return __spreadProps(__spreadValues({}, D$2(s2)), { littleEndian: t2, isBigTiff: n2, ifds: s2 });
}
function L$1(e2, t2, n2) {
  const a2 = e2.getUint32(t2, n2), i2 = e2.getUint32(t2 + 4, n2);
  return n2 ? i2 * u$3 + a2 : a2 * u$3 + i2;
}
function P$1(e2, t2, n2) {
  let a2 = n2 ? e2.getInt32(t2, n2) : e2.getUint32(t2, n2), i2 = n2 ? e2.getUint32(t2 + 4, n2) : e2.getInt32(t2 + 4, n2);
  const s2 = (n2 ? a2 : i2) >= 0 ? 1 : -1;
  n2 ? a2 *= s2 : i2 *= s2;
  return s2 * (n2 ? i2 * u$3 + a2 : a2 * u$3 + i2);
}
function k$2(e2, t2, n2, a2) {
  return a2 ? L$1(e2, t2, n2) : e2.getUint32(t2, n2);
}
function N(e2) {
  const t2 = new DataView(e2, 0, 16), n2 = t2.getUint16(0, false);
  let a2 = null;
  if (n2 === 18761)
    a2 = true;
  else {
    if (n2 !== 19789)
      throw "unexpected endianess byte";
    a2 = false;
  }
  const i2 = t2.getUint16(2, a2);
  if (i2 !== 42 && i2 !== 43)
    throw "unexpected tiff identifier";
  let s2 = 4;
  const r2 = i2 === 43;
  if (r2) {
    const e3 = t2.getUint16(s2, a2);
    if (s2 += 2, e3 !== 8)
      throw "unsupported bigtiff version";
    if (t2.getUint16(s2, a2) !== 0)
      throw "unsupported bigtiff version";
    s2 += 2;
  }
  return { littleEndian: a2, isBigTiff: r2, firstIFDPos: k$2(t2, s2, a2, r2) };
}
function G(e2, n2, a2, i2 = 0, s2 = n$4.TIFF_TAGS, l2 = 4) {
  const o2 = E(e2, n2, a2, i2, s2, l2);
  let f2;
  const u2 = o2.ifd;
  if (u2) {
    if (n$4.ifdTags.forEach((t2, a3) => {
      u2.has(a3) && (f2 = u2.get(a3), f2.data = E(e2, n2, f2.valueOffset - i2, i2, t2).ifd);
    }), u2.has("GEOKEYDIRECTORY")) {
      f2 = u2.get("GEOKEYDIRECTORY");
      const t2 = f2.values;
      if (t2 && t2.length > 4) {
        const a3 = t2[0] + "." + t2[1] + "." + t2[2];
        f2.data = E(e2, n2, f2.valueOffset + 6 - i2, i2, n$4.GEO_KEYS, 2).ifd, f2.data && f2.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [a3] });
      }
    }
    if (u2.has("XMP")) {
      f2 = u2.get("XMP");
      const e3 = f2.values;
      typeof e3[0] == "number" && f2.type === 7 && (f2.values = [r$1(new Uint8Array(e3))]);
    }
  }
  return o2;
}
function R(e2) {
  const { width: t2, height: n2, tileHeight: a2, tileWidth: i2 } = e2, s2 = e2.planes, r2 = i2 ? i2 * a2 : t2 * n2, l2 = T$2(e2.ifds[0], "BITSPERSAMPLE");
  let o2 = "";
  return r2 * s2 > 2 ** 30 / (l2 > 8 ? l2 / 8 : 1) && (o2 = i2 ? "tiled tiff exceeding 1 gigabits per tile is not supported" : "scanline tiff exceeding 1 gigabits is not supported"), o2;
}
async function C$2(e2, t2) {
  var _a;
  const { headerInfo: n2, ifd: a2, offsets: i2, sizes: s2 } = t2, r2 = [];
  for (let g2 = 0; g2 < i2.length; g2++) {
    const t3 = await m$3(e2, n2.littleEndian, a2, i2[g2], s2[g2] || e2.byteLength);
    r2.push(t3);
  }
  const l2 = O$2(a2, n2), { pixelType: o2, planes: f2 } = n2, u2 = g$3(o2), c2 = T$2(a2, "TILEWIDTH"), h2 = T$2(a2, "TILELENGTH"), w2 = (_a = T$2(a2, "COMPRESSION")) != null ? _a : 1, p2 = c2 * h2;
  let d2;
  const I2 = [];
  let E2 = r2[0];
  const y2 = w2 === 34887;
  for (let g2 = 0; g2 < f2; g2++) {
    if (d2 = new u2(p2), l2 && y2) {
      if (E2 = r2[g2], E2.length)
        for (let e3 = 0; e3 < p2; e3++)
          d2[e3] = E2[g2][e3 + g2];
    } else if (E2.length)
      if (l2 || y2 && !l2)
        d2 = E2.slice(p2 * g2, p2 * (g2 + 1));
      else
        for (let e3 = 0; e3 < p2; e3++)
          d2[e3] = E2[e3 * f2 + g2];
    I2.push(d2);
  }
  const A2 = n2.noData ? n2.noData[0] : t2.noDataValue, S2 = n2.metadata ? n2.metadata.statistics : null, x2 = S2 ? S2.map((e3) => e3.min) : null, b2 = S2 ? S2.map((e3) => e3.max) : null;
  let D2, U2 = null;
  if (A2 != null)
    if (U2 = new Uint8Array(p2), Math.abs(A2) > 1e24)
      for (D2 = 0; D2 < p2; D2++)
        Math.abs((I2[0][D2] - A2) / A2) < 1e-6 ? U2[D2] = 0 : U2[D2] = 1;
    else
      for (D2 = 0; D2 < p2; D2++)
        I2[0][D2] === A2 ? U2[D2] = 0 : U2[D2] = 1;
  else
    x2 && b2 && t2.applyMinMaxConstraint && (U2 = M$1(I2, x2, b2));
  return { pixelType: o2, width: c2, height: h2, pixels: I2, mask: U2, noDataValue: A2 };
}
async function F(t2, n2 = {}) {
  const a2 = n2.pyramidLevel || 0, i2 = n2.headerInfo || U$1(t2), { ifds: s2, noData: r2 } = i2;
  if (s2.length === 0)
    throw "no valid image file directory";
  const l2 = R(i2);
  if (l2)
    throw l2;
  let o2, f2 = null;
  const u2 = a2 === -1 ? s2[s2.length - 1] : s2[a2], c2 = r2 ? r2[0] : n2.noDataValue;
  if (f2 = i2.tileWidth ? await A$1(t2, i2, u2) : await S$1(t2, i2, u2), c2 != null) {
    if (c$4(f2), f2.mask = new Uint8Array(f2.width * f2.height), Math.abs(c2) > 1e24)
      for (o2 = 0; o2 < f2.width * f2.height; o2++)
        Math.abs((f2.pixels[0][o2] - c2) / c2) < 1e-6 ? f2.mask[o2] = 0 : f2.mask[o2] = 1;
    else
      for (o2 = 0; o2 < f2.width * f2.height; o2++)
        f2.pixels[0][o2] === c2 ? f2.mask[o2] = 0 : f2.mask[o2] = 1;
    f2.noDataValue = c2;
  }
  return f2;
}
var f$2 = function(t2) {
  var e2, i2, a2, s2, r2, n2;
  function o2(t3) {
    var e3, i3, a3, s3, r3, n3, o3, h2, c2, p2, l2, d2, u2;
    for (this.data = t3, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, r3 = null; ; ) {
      switch (e3 = this.readUInt32(), h2 = function() {
        var t4, e4;
        for (e4 = [], t4 = 0; t4 < 4; ++t4)
          e4.push(String.fromCharCode(this.data[this.pos++]));
        return e4;
      }.call(this).join(""), h2) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(e3);
          break;
        case "fcTL":
          r3 && this.animation.frames.push(r3), this.pos += 4, r3 = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, s3 = this.readUInt16(), a3 = this.readUInt16() || 100, r3.delay = 1e3 * s3 / a3, r3.disposeOp = this.data[this.pos++], r3.blendOp = this.data[this.pos++], r3.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for (h2 === "fdAT" && (this.pos += 4, e3 -= 4), t3 = (r3 != null ? r3.data : void 0) || this.imgData, l2 = 0; 0 <= e3 ? l2 < e3 : l2 > e3; 0 <= e3 ? ++l2 : --l2)
            t3.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (this.transparency.indexed = this.read(e3), (c2 = 255 - this.transparency.indexed.length) > 0)
                for (d2 = 0; 0 <= c2 ? d2 < c2 : d2 > c2; 0 <= c2 ? ++d2 : --d2)
                  this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(e3)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(e3);
          }
          break;
        case "tEXt":
          n3 = (p2 = this.read(e3)).indexOf(0), o3 = String.fromCharCode.apply(String, p2.slice(0, n3)), this.text[o3] = String.fromCharCode.apply(String, p2.slice(n3 + 1));
          break;
        case "IEND":
          return r3 && this.animation.frames.push(r3), this.colors = function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }.call(this), this.hasAlphaChannel = (u2 = this.colorType) === 4 || u2 === 6, i3 = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * i3, this.colorSpace = function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }.call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += e3;
      }
      if (this.pos += 4, this.pos > this.data.length)
        throw new Error("Incomplete or corrupt PNG file");
    }
  }
  return o2.load = function(t3, e3, i3) {
    var a3;
    return typeof e3 == "function" && (i3 = e3), (a3 = new XMLHttpRequest()).open("GET", t3, true), a3.responseType = "arraybuffer", a3.onload = function() {
      var t4;
      return t4 = new o2(new Uint8Array(a3.response || a3.mozResponseArrayBuffer)), typeof (e3 != null ? e3.getContext : void 0) == "function" && t4.render(e3), typeof i3 == "function" ? i3(t4) : void 0;
    }, a3.send(null);
  }, i2 = 1, a2 = 2, e2 = 0, o2.prototype.read = function(t3) {
    var e3, i3;
    for (i3 = [], e3 = 0; 0 <= t3 ? e3 < t3 : e3 > t3; 0 <= t3 ? ++e3 : --e3)
      i3.push(this.data[this.pos++]);
    return i3;
  }, o2.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, o2.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, o2.prototype.decodePixels = function(t3) {
    var e3, i3, a3, s3, r3, n3, o3, h2, p2, l2, d2, u2, f2, m2, g2, w2, y2, x2, b2, k2, I2, T2, v2;
    if (t3 == null && (t3 = this.imgData), t3.length === 0)
      return new Uint8Array(0);
    for (t3 = (t3 = new s$3(t3)).getBytes(), w2 = (u2 = this.pixelBitlength / 8) * this.width, f2 = new Uint8Array(w2 * this.height), n3 = t3.length, g2 = 0, m2 = 0, i3 = 0; m2 < n3; ) {
      switch (t3[m2++]) {
        case 0:
          for (s3 = b2 = 0; b2 < w2; s3 = b2 += 1)
            f2[i3++] = t3[m2++];
          break;
        case 1:
          for (s3 = k2 = 0; k2 < w2; s3 = k2 += 1)
            e3 = t3[m2++], r3 = s3 < u2 ? 0 : f2[i3 - u2], f2[i3++] = (e3 + r3) % 256;
          break;
        case 2:
          for (s3 = I2 = 0; I2 < w2; s3 = I2 += 1)
            e3 = t3[m2++], a3 = (s3 - s3 % u2) / u2, y2 = g2 && f2[(g2 - 1) * w2 + a3 * u2 + s3 % u2], f2[i3++] = (y2 + e3) % 256;
          break;
        case 3:
          for (s3 = T2 = 0; T2 < w2; s3 = T2 += 1)
            e3 = t3[m2++], a3 = (s3 - s3 % u2) / u2, r3 = s3 < u2 ? 0 : f2[i3 - u2], y2 = g2 && f2[(g2 - 1) * w2 + a3 * u2 + s3 % u2], f2[i3++] = (e3 + Math.floor((r3 + y2) / 2)) % 256;
          break;
        case 4:
          for (s3 = v2 = 0; v2 < w2; s3 = v2 += 1)
            e3 = t3[m2++], a3 = (s3 - s3 % u2) / u2, r3 = s3 < u2 ? 0 : f2[i3 - u2], g2 === 0 ? y2 = x2 = 0 : (y2 = f2[(g2 - 1) * w2 + a3 * u2 + s3 % u2], x2 = a3 && f2[(g2 - 1) * w2 + (a3 - 1) * u2 + s3 % u2]), o3 = r3 + y2 - x2, h2 = Math.abs(o3 - r3), l2 = Math.abs(o3 - y2), d2 = Math.abs(o3 - x2), p2 = h2 <= l2 && h2 <= d2 ? r3 : l2 <= d2 ? y2 : x2, f2[i3++] = (e3 + p2) % 256;
          break;
        default:
          throw new Error("Invalid filter algorithm: " + t3[m2 - 1]);
      }
      g2++;
    }
    return f2;
  }, o2.prototype.decodePalette = function() {
    var t3, e3, i3, a3, s3, r3, n3, o3, h2;
    for (i3 = this.palette, r3 = this.transparency.indexed || [], s3 = new Uint8Array((r3.length || 0) + i3.length), a3 = 0, i3.length, t3 = 0, e3 = n3 = 0, o3 = i3.length; n3 < o3; e3 = n3 += 3)
      s3[a3++] = i3[e3], s3[a3++] = i3[e3 + 1], s3[a3++] = i3[e3 + 2], s3[a3++] = (h2 = r3[t3++]) != null ? h2 : 255;
    return s3;
  }, o2.prototype.copyToImageData = function(t3, e3) {
    var i3, a3, s3, r3, n3, o3, h2, c2, p2, l2, d2;
    if (a3 = this.colors, p2 = null, i3 = this.hasAlphaChannel, this.palette.length && (p2 = (d2 = this._decodedPalette) != null ? d2 : this._decodedPalette = this.decodePalette(), a3 = 4, i3 = true), c2 = (s3 = t3.data || t3).length, n3 = p2 || e3, r3 = o3 = 0, a3 === 1)
      for (; r3 < c2; )
        h2 = p2 ? 4 * e3[r3 / 4] : o3, l2 = n3[h2++], s3[r3++] = l2, s3[r3++] = l2, s3[r3++] = l2, s3[r3++] = i3 ? n3[h2++] : this.transparency.grayscale && this.transparency.grayscale === l2 ? 0 : 255, o3 = h2;
    else
      for (; r3 < c2; )
        h2 = p2 ? 4 * e3[r3 / 4] : o3, s3[r3++] = n3[h2++], s3[r3++] = n3[h2++], s3[r3++] = n3[h2++], s3[r3++] = i3 ? n3[h2++] : this.transparency.rgb && this.transparency.rgb[1] === n3[h2 - 3] && this.transparency.rgb[3] === n3[h2 - 2] && this.transparency.rgb[5] === n3[h2 - 1] ? 0 : 255, o3 = h2;
  }, o2.prototype.decode = function() {
    var t3;
    return t3 = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t3, this.decodePixels()), t3;
  }, r2 = t2.document && t2.document.createElement("canvas"), n2 = r2 && r2.getContext("2d"), s2 = function(t3) {
    var e3;
    return n2.width = t3.width, n2.height = t3.height, n2.clearRect(0, 0, t3.width, t3.height), n2.putImageData(t3, 0, 0), (e3 = new Image()).src = r2.toDataURL(), e3;
  }, o2.prototype.decodeFrames = function(t3) {
    var e3, i3, a3, r3, n3, o3, h2, c2;
    if (this.animation) {
      for (c2 = [], i3 = n3 = 0, o3 = (h2 = this.animation.frames).length; n3 < o3; i3 = ++n3)
        e3 = h2[i3], a3 = t3.createImageData(e3.width, e3.height), r3 = this.decodePixels(new Uint8Array(e3.data)), this.copyToImageData(a3, r3), e3.imageData = a3, c2.push(e3.image = s2(a3));
      return c2;
    }
  }, o2.prototype.renderFrame = function(t3, s3) {
    var r3, n3, o3;
    return r3 = (n3 = this.animation.frames)[s3], o3 = n3[s3 - 1], s3 === 0 && t3.clearRect(0, 0, this.width, this.height), (o3 != null ? o3.disposeOp : void 0) === i2 ? t3.clearRect(o3.xOffset, o3.yOffset, o3.width, o3.height) : (o3 != null ? o3.disposeOp : void 0) === a2 && t3.putImageData(o3.imageData, o3.xOffset, o3.yOffset), r3.blendOp === e2 && t3.clearRect(r3.xOffset, r3.yOffset, r3.width, r3.height), t3.drawImage(r3.image, r3.xOffset, r3.yOffset);
  }, o2.prototype.animate = function(t3) {
    var e3, i3, a3, s3, r3, n3, o3 = this;
    return i3 = 0, n3 = this.animation, s3 = n3.numFrames, a3 = n3.frames, r3 = n3.numPlays, (e3 = function() {
      var n4, h2;
      if (n4 = i3++ % s3, h2 = a3[n4], o3.renderFrame(t3, n4), s3 > 1 && i3 / s3 < r3)
        return o3.animation._timeout = setTimeout(e3, h2.delay);
    })();
  }, o2.prototype.stopAnimation = function() {
    var t3;
    return clearTimeout((t3 = this.animation) != null ? t3._timeout : void 0);
  }, o2.prototype.render = function(t3) {
    var e3, i3;
    return t3._png && t3._png.stopAnimation(), t3._png = this, t3.width = this.width, t3.height = this.height, e3 = t3.getContext("2d"), this.animation ? (this.decodeFrames(e3), this.animate(e3)) : (i3 = e3.createImageData(this.width, this.height), this.copyToImageData(i3, this.decodePixels()), e3.putImageData(i3, 0, 0));
  }, o2;
}(self);
const m$2 = new Set(["jpg", "png", "bmp", "gif"]);
async function g$2(e2, i2) {
  if (!r)
    throw new s$4("rasterCoded:decode", "lerc decoder is not supported on big endian platform");
  await a$5();
  const { offset: s2, noDataValue: r$12 } = i2, { width: h2, height: c2, pixelType: p2, statistics: l2, pixels: d2, mask: f2 } = c$3(e2, { inputOffset: s2, noDataValue: r$12, returnInterleaved: i2.returnInterleaved });
  return new g$4({ width: h2, height: c2, pixelType: p2.toLowerCase(), pixels: d2, mask: f2, statistics: l2 });
}
async function w(t2, e2) {
  const s2 = await F(t2, e2);
  c$4(s2);
  const r2 = new g$4({ width: s2.width, height: s2.height, pixels: s2.pixels, pixelType: s2.pixelType.toLowerCase(), mask: s2.mask, statistics: null });
  return r2.updateStatistics(), r2;
}
async function y(t2, e2) {
  const i2 = await C$2(t2, e2.customOptions), s2 = new g$4({ width: i2.width, height: i2.height, pixels: i2.pixels, pixelType: i2.pixelType.toLowerCase(), mask: i2.mask, statistics: null });
  return s2.updateStatistics(), s2;
}
function x$1(t2, e2) {
  const i2 = e2.pixelType || "u8", s2 = g$4.getPixelArrayConstructor(i2), r2 = i2 === "u8" ? t2 : new s2(t2.buffer), n2 = [], o2 = e2.planes || 1;
  if (o2 === 1)
    n2.push(r2);
  else
    for (let a2 = 0; a2 < o2; a2++) {
      const i3 = (e2.width || 1) * (e2.height || t2.length), h3 = new s2(i3);
      for (let t3 = 0; t3 < i3; t3++)
        h3[t3] = r2[t3 * o2 + a2];
      n2.push(h3);
    }
  const h2 = new g$4({ width: e2.width || 1, height: e2.height || t2.length, pixels: n2, pixelType: i2, statistics: null });
  return h2.updateStatistics(), h2;
}
function b(t2, e2) {
  return x$1(new s$3(new Uint8Array(t2)).getBytes(), e2);
}
function k$1(t2, e2) {
  return x$1(i$2(t2, e2.offset, e2.eof, !e2.isInputBigEndian), e2);
}
function I(t2, e2, i2) {
  const { pixelTypeCtor: s2 } = D$1(e2.pixelType), r2 = (0, a$4.decode)(t2, { width: e2.width, height: e2.height, pixelType: s2, format: i2 }), n2 = new g$4({ width: e2.width, height: e2.height, pixels: r2.pixels, pixelType: e2.pixelType, mask: r2.mask, statistics: null });
  return n2.updateStatistics(), n2;
}
function T$1(t2, e2) {
  var _a;
  const i2 = r$4.decode(t2, (_a = e2.hasNoZlibMask) != null ? _a : void 0), s2 = new g$4({ width: i2.width, height: i2.height, pixels: i2.pixels, pixelType: "U8", mask: i2.mask, statistics: null });
  return s2.updateStatistics(), s2;
}
function v$1(t2, e2) {
  const i2 = new Uint8Array(t2), s2 = new f$2(i2), { width: r2, height: n2 } = e2, o2 = r2 * n2, h2 = s2.decode();
  let c2, p2 = 0, l2 = 0;
  const d2 = new Uint8Array(o2);
  for (p2 = 0; p2 < o2; p2++)
    d2[p2] = h2[4 * p2 + 3];
  const u2 = new g$4({ width: r2, height: n2, pixels: [], pixelType: "U8", mask: d2, statistics: [] });
  for (p2 = 0; p2 < 3; p2++) {
    for (c2 = new Uint8Array(o2), l2 = 0; l2 < o2; l2++)
      c2[l2] = h2[4 * l2 + p2];
    u2.addData({ pixels: c2 });
  }
  return u2.updateStatistics(), u2;
}
async function U(t2, e2, i2, r2) {
  const n2 = new i$4(), o2 = __spreadValues({ applyJpegMask: false, format: e2 }, i2), h2 = await n2.decode(t2, o2, r2), c2 = new g$4(h2);
  return c2.updateStatistics(), c2;
}
function A(e2) {
  if (e2 == null)
    throw new s$4("rasterCodec:decode", "parameter encodeddata is required.");
  const i2 = new Uint8Array(e2, 0, 10);
  let a2 = "";
  return i2[0] === 255 && i2[1] === 216 ? a2 = "jpg" : i2[0] === 137 && i2[1] === 80 && i2[2] === 78 && i2[3] === 71 ? a2 = "png" : i2[0] === 67 && i2[1] === 110 && i2[2] === 116 && i2[3] === 90 && i2[4] === 73 && i2[5] === 109 && i2[6] === 97 && i2[7] === 103 && i2[8] === 101 && i2[9] === 32 ? a2 = "lerc" : i2[0] === 76 && i2[1] === 101 && i2[2] === 114 && i2[3] === 99 && i2[4] === 50 && i2[5] === 32 ? a2 = "lerc2" : i2[0] === 73 && i2[1] === 73 && i2[2] === 42 && i2[3] === 0 || i2[0] === 77 && i2[1] === 77 && i2[2] === 0 && i2[3] === 42 || i2[0] === 73 && i2[1] === 73 && i2[2] === 43 && i2[3] === 0 || i2[0] === 77 && i2[1] === 77 && i2[2] === 0 && i2[3] === 43 ? a2 = "tiff" : i2[0] === 71 && i2[1] === 73 && i2[2] === 70 ? a2 = "gif" : i2[0] === 66 && i2[1] === 77 ? a2 = "bmp" : String.fromCharCode.apply(null, i2).toLowerCase().includes("error") && (a2 = "error"), a2;
}
function C$1(e2) {
  let i2 = null;
  switch (e2) {
    case "lerc":
    case "lerc2":
      i2 = g$2;
      break;
    case "jpg":
      i2 = T$1;
      break;
    case "png":
      i2 = v$1;
      break;
    case "bsq":
    case "bip":
      i2 = (t2, i3) => I(t2, i3, e2);
      break;
    case "tiff":
      i2 = w;
      break;
    case "deflate":
      i2 = b;
      break;
    case "lzw":
      i2 = k$1;
      break;
    case "error":
      i2 = () => {
        throw new s$4("rasterCodec:decode", "input data contains error");
      };
      break;
    default:
      i2 = () => {
        throw new s$4("rasterCodec:decode", "unsupported raster format");
      };
  }
  return i2;
}
function D$1(t2) {
  let e2 = null, i2 = null;
  switch (t2 ? t2.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      i2 = 255, e2 = Uint8Array;
      break;
    case "u16":
      i2 = i2 || 65535, e2 = Uint16Array;
      break;
    case "u32":
      i2 = i2 || 2 ** 32 - 1, e2 = Uint32Array;
      break;
    case "s8":
      i2 = i2 || -128, e2 = Int8Array;
      break;
    case "s16":
      i2 = i2 || -32768, e2 = Int16Array;
      break;
    case "s32":
      i2 = i2 || 0 - 2 ** 31, e2 = Int32Array;
      break;
    default:
      e2 = Float32Array;
  }
  return { pixelTypeCtor: e2, noDataValue: i2 };
}
function O$1(t2, i2 = 1) {
  if (!t2)
    return;
  const { pixels: s2, width: r2, height: n2, mask: o2 } = t2;
  if (!s2 || s2.length === 0)
    return;
  const h2 = s2.length, c2 = r2 - 1, p2 = n2 - 1, l2 = [];
  let d2, u2, f2, m2, g2, w2, y2 = null;
  const x2 = g$4.getPixelArrayConstructor(t2.pixelType);
  if (i2 === 0) {
    for (d2 = 0; d2 < h2; d2++) {
      for (g2 = s2[d2], w2 = new x2(c2 * p2), u2 = 0; u2 < p2; u2++)
        for (m2 = u2 * r2, f2 = 0; f2 < c2; f2++)
          w2[u2 * c2 + f2] = g2[m2 + f2];
      l2.push(w2);
    }
    if (r$7(o2))
      for (y2 = new Uint8Array(c2 * p2), u2 = 0; u2 < p2; u2++)
        for (m2 = u2 * r2, f2 = 0; f2 < c2; f2++)
          y2[u2 * c2 + f2] = o2[m2 + f2];
  } else {
    for (d2 = 0; d2 < h2; d2++) {
      for (g2 = s2[d2], w2 = new x2(c2 * p2), u2 = 0; u2 < p2; u2++)
        for (m2 = u2 * r2, f2 = 0; f2 < c2; f2++)
          w2[u2 * c2 + f2] = (g2[m2 + f2] + g2[m2 + f2 + 1] + g2[m2 + r2 + f2] + g2[m2 + r2 + f2 + 1]) / 4;
      l2.push(w2);
    }
    if (o2)
      for (y2 = new Uint8Array(c2 * p2), u2 = 0; u2 < p2; u2++)
        for (m2 = u2 * r2, f2 = 0; f2 < c2; f2++)
          y2[u2 * c2 + f2] = Math.min.apply(null, [o2[m2 + f2], o2[m2 + f2 + 1], o2[m2 + r2 + f2], o2[m2 + r2 + f2 + 1]]);
  }
  t2.width = c2, t2.height = p2, t2.mask = y2, t2.pixels = l2;
}
function P(t2) {
  let e2 = A(t2);
  return e2 === "lerc2" ? e2 = "lerc" : e2 === "error" && (e2 = ""), e2;
}
async function S(e2, i2 = {}, a2) {
  if (e2 == null)
    throw new s$4("rasterCodec:decode", "missing encodeddata parameter.");
  let s2, r2, n2 = i2.format && i2.format.toLowerCase();
  if (!(n2 !== "bsq" && n2 !== "bip" || i2.width != null && i2.height != null))
    throw new s$4("rasterCodec:decode", "requires width and height in options parameter.");
  return n2 === "tiff" && i2.customOptions ? y(e2, i2) : ((!n2 || n2 !== "bsq" && n2 !== "bip" && n2 !== "deflate" && n2 !== "lzw") && (n2 = A(e2)), i2.useCanvas && m$2.has(n2) ? r2 = await U(e2, n2, i2, a2) : (s2 = C$1(n2), i2.isPoint && ((i2 = __spreadValues({}, i2)).width != null && i2.width++, i2.height != null && i2.height++), r2 = await s2(e2, i2), i2.isPoint && O$1(r2)), r2);
}
function n$3(t2) {
  let { altitude: e2, azimuth: i2 } = t2;
  const { hillshadeType: n2, pixelSizePower: l2 = 1, pixelSizeFactor: s2 = 1, scalingType: a2, isGCS: o2, resolution: r2 } = t2, c2 = n2 === "multi-directional" ? 2 * t2.zFactor : t2.zFactor, { x: h2, y: f2 } = r2;
  let u2 = c2 / (8 * h2), p2 = c2 / (8 * f2);
  if (o2 && c2 > 1e-3 && (u2 /= 111e3, p2 /= 111e3), a2 === "adjusted")
    if (o2) {
      const t3 = 111e3 * h2, e3 = 111e3 * f2;
      u2 = (c2 + t3 ** l2 * s2) / (8 * t3), p2 = (c2 + e3 ** l2 * s2) / (8 * e3);
    } else
      u2 = (c2 + h2 ** l2 * s2) / (8 * h2), p2 = (c2 + f2 ** l2 * s2) / (8 * f2);
  let x2 = (90 - e2) * Math.PI / 180, d2 = Math.cos(x2), m2 = (360 - i2 + 90) * Math.PI / 180, w2 = Math.sin(x2) * Math.cos(m2), y2 = Math.sin(x2) * Math.sin(m2);
  const M2 = [315, 270, 225, 360, 180, 0], A2 = [60, 60, 60, 60, 60, 90], g2 = new Float32Array([3, 5, 3, 2, 1, 4]), k2 = g2.reduce((t3, e3) => t3 + e3), P2 = g2.map((t3) => t3 / k2), Z = n2 === "multi-directional" ? M2.length : 1, C2 = new Float32Array(6), F2 = new Float32Array(6), b2 = new Float32Array(6);
  if (n2 === "multi-directional")
    for (let z2 = 0; z2 < Z; z2++)
      e2 = A2[z2], i2 = M2[z2], x2 = (90 - e2) * Math.PI / 180, d2 = Math.cos(x2), m2 = (360 - i2 + 90) * Math.PI / 180, w2 = Math.sin(x2) * Math.cos(m2), y2 = Math.sin(x2) * Math.sin(m2), C2[z2] = d2, F2[z2] = w2, b2[z2] = y2;
  else
    C2.fill(d2), F2.fill(w2), b2.fill(y2);
  return { resolution: r2, factor: [u2, p2], sinZcosA: w2, sinZsinA: y2, cosZ: d2, sinZcosAs: F2, sinZsinAs: b2, cosZs: C2, weights: P2, hillshadeType: ["traditional", "multi-directional"].indexOf(n2) };
}
function l$3(l2, s2) {
  if (!r$8(l2))
    return l2;
  const { width: a2, height: o2, mask: r2 } = l2, c2 = new Uint8Array(a2 * o2);
  let h2 = 1;
  if (r$7(r2)) {
    for (let t2 = 0; t2 < r2.length; t2++)
      if (r2[t2]) {
        h2 = r2[t2];
        break;
      }
    c2.set(r2);
  }
  const { factor: f2, sinZcosA: u2, sinZsinA: p2, cosZ: x2, sinZcosAs: d2, sinZsinAs: m2, cosZs: w2, weights: y2 } = n$3(s2), [M2, A2] = f2, { hillshadeType: g2 } = s2, k2 = l2.pixels[0], P2 = new Uint8Array(a2 * o2);
  let Z, C2, F2, b2, z2, T2, U2, S2;
  const v2 = 1, V2 = r$7(r2);
  for (let t2 = v2; t2 < o2 - v2; t2++) {
    const e2 = t2 * a2;
    for (let t3 = v2; t3 < a2 - v2; t3++) {
      if (r2 && !r2[e2 + t3]) {
        P2[e2 + t3] = 0;
        continue;
      }
      let i2 = 8;
      if (V2 && (i2 = (r2[e2 - a2 + t3 - 1] + r2[e2 - a2 + t3] + r2[e2 - a2 + t3 + 1] + r2[e2 + t3 - 1] + r2[e2 + t3 + 1] + r2[e2 + a2 + t3 - 1] + r2[e2 + a2 + t3] + r2[e2 + a2 + t3 + 1]) / h2, i2 < 7)) {
        P2[e2 + t3] = 0, c2[e2 + t3] = 0;
        continue;
      }
      r2 && i2 === 7 ? (Z = r2[e2 - a2 + t3 - 1] ? k2[e2 - a2 + t3 - 1] : k2[e2 + t3], C2 = r2[e2 - a2 + t3] ? k2[e2 - a2 + t3] : k2[e2 + t3], F2 = r2[e2 - a2 + t3 + 1] ? k2[e2 - a2 + t3 + 1] : k2[e2 + t3], b2 = r2[e2 + t3 - 1] ? k2[e2 + t3 - 1] : k2[e2 + t3], z2 = r2[e2 + t3 + 1] ? k2[e2 + t3 + 1] : k2[e2 + t3], T2 = r2[e2 + a2 + t3 - 1] ? k2[e2 + a2 + t3 - 1] : k2[e2 + t3], U2 = r2[e2 + a2 + t3] ? k2[e2 + a2 + t3] : k2[e2 + t3], S2 = r2[e2 + a2 + t3 + 1] ? k2[e2 + a2 + t3 + 1] : k2[e2 + t3]) : (Z = k2[e2 - a2 + t3 - 1], C2 = k2[e2 - a2 + t3], F2 = k2[e2 - a2 + t3 + 1], b2 = k2[e2 + t3 - 1], z2 = k2[e2 + t3 + 1], T2 = k2[e2 + a2 + t3 - 1], U2 = k2[e2 + a2 + t3], S2 = k2[e2 + a2 + t3 + 1]);
      const n2 = (F2 + z2 + z2 + S2 - (Z + b2 + b2 + T2)) * M2, l3 = (T2 + U2 + U2 + S2 - (Z + C2 + C2 + F2)) * A2, s3 = Math.sqrt(1 + n2 * n2 + l3 * l3);
      let o3 = 0;
      if (g2 === "traditional") {
        let t4 = 255 * (x2 + p2 * l3 - u2 * n2) / s3;
        t4 < 0 && (t4 = 0), o3 = t4;
      } else {
        const t4 = m2.length;
        for (let e3 = 0; e3 < t4; e3++) {
          let t5 = 255 * (w2[e3] + m2[e3] * l3 - d2[e3] * n2) / s3;
          t5 < 0 && (t5 = 0), o3 += t5 * y2[e3];
        }
      }
      P2[e2 + t3] = 255 & o3;
    }
  }
  for (let t2 = 0; t2 < o2; t2++)
    P2[t2 * a2] = P2[t2 * a2 + 1], P2[(t2 + 1) * a2 - 1] = P2[(t2 + 1) * a2 - 2];
  for (let t2 = 1; t2 < a2 - 1; t2++)
    P2[t2] = P2[t2 + a2], P2[t2 + (o2 - 1) * a2] = P2[t2 + (o2 - 2) * a2];
  return new g$4({ width: a2, height: o2, pixels: [P2], mask: r2 ? c2 : null, pixelType: "u8", validPixelCount: l2.validPixelCount, statistics: [{ minValue: 0, maxValue: 255 }] });
}
function s$1(t2, e2, n2, l2) {
  if (!r$8(t2) || !r$8(e2))
    return;
  const { min: s2, max: a2 } = l2, o2 = t2.pixels[0], { pixels: r2, mask: c2 } = e2, h2 = r2[0], f2 = 255.00001 / (a2 - s2), u2 = new Uint8ClampedArray(h2.length), p2 = new Uint8ClampedArray(h2.length), x2 = new Uint8ClampedArray(h2.length), d2 = n2.length - 1;
  for (let i2 = 0; i2 < h2.length; i2++) {
    if (c2 && c2[i2] === 0)
      continue;
    const t3 = Math.floor((h2[i2] - s2) * f2), [e3, l3] = n2[t3 < 0 ? 0 : t3 > d2 ? d2 : t3], a3 = o2[i2], r3 = a3 * l3, m2 = r3 * (1 - Math.abs(e3 % 2 - 1)), w2 = a3 - r3;
    switch (Math.floor(e3)) {
      case 0:
        u2[i2] = r3 + w2, p2[i2] = m2 + w2, x2[i2] = w2;
        break;
      case 1:
        u2[i2] = m2 + w2, p2[i2] = r3 + w2, x2[i2] = w2;
        break;
      case 2:
        u2[i2] = w2, p2[i2] = r3 + w2, x2[i2] = m2 + w2;
        break;
      case 3:
        u2[i2] = w2, p2[i2] = m2 + w2, x2[i2] = r3 + w2;
        break;
      case 4:
        u2[i2] = m2 + w2, p2[i2] = w2, x2[i2] = r3 + w2;
        break;
      case 5:
      case 6:
        u2[i2] = r3 + w2, p2[i2] = w2, x2[i2] = m2 + w2;
    }
  }
  t2.pixels = [u2, p2, x2], t2.updateStatistics();
}
function a$3(n2, l2) {
  var _a, _b;
  if (!r$8(n2))
    return n2;
  const s2 = l2.zFactor, a2 = (_a = l2.pixelSizePower) != null ? _a : 1, o2 = (_b = l2.pixelSizeFactor) != null ? _b : 1, r2 = l2.slopeType, c2 = l2.isGCS, { width: h2, height: f2, mask: u2 } = n2, p2 = n2.pixels[0], x2 = new Uint8Array(h2 * f2);
  let d2 = 1;
  if (r$7(u2)) {
    for (let t2 = 0; t2 < u2.length; t2++)
      if (u2[t2]) {
        d2 = u2[t2];
        break;
      }
    x2.set(u2);
  }
  const m2 = new Float32Array(h2 * f2), { x: w2, y: y2 } = l2.resolution;
  let M2 = s2 / (8 * w2), A2 = s2 / (8 * y2);
  if (c2 && Math.abs(s2 - 1) < 1e-4 && (M2 /= 111e3, A2 /= 111e3), r2 === "adjusted")
    if (c2) {
      const t2 = 111e3 * w2, e2 = 111e3 * y2;
      M2 = (s2 + t2 ** a2 * o2) / (8 * t2), A2 = (s2 + e2 ** a2 * o2) / (8 * e2);
    } else
      M2 = (s2 + w2 ** a2 * o2) / (8 * w2), A2 = (s2 + y2 ** a2 * o2) / (8 * y2);
  const g2 = 1;
  let k2, P2, Z, C2, F2, b2, z2, T2;
  const U2 = r$7(u2);
  for (let t2 = g2; t2 < f2 - g2; t2++) {
    const e2 = t2 * h2;
    for (let t3 = g2; t3 < h2 - g2; t3++) {
      if (u2 && !u2[e2 + t3]) {
        m2[e2 + t3] = 0;
        continue;
      }
      let i2 = 0;
      if (U2 && (i2 = (u2[e2 - h2 + t3 - 1] + u2[e2 - h2 + t3] + u2[e2 - h2 + t3 + 1] + u2[e2 + t3 - 1] + u2[e2 + t3 + 1] + u2[e2 + h2 + t3 - 1] + u2[e2 + h2 + t3] + u2[e2 + h2 + t3 + 1]) / d2, i2 < 7)) {
        m2[e2 + t3] = 0, x2[e2 + t3] = 0;
        continue;
      }
      u2 && i2 === 7 ? (k2 = u2[e2 - h2 + t3 - 1] ? p2[e2 - h2 + t3 - 1] : p2[e2 + t3], P2 = u2[e2 - h2 + t3] ? p2[e2 - h2 + t3] : p2[e2 + t3], Z = u2[e2 - h2 + t3 + 1] ? p2[e2 - h2 + t3 + 1] : p2[e2 + t3], C2 = u2[e2 + t3 - 1] ? p2[e2 + t3 - 1] : p2[e2 + t3], F2 = u2[e2 + t3 + 1] ? p2[e2 + t3 + 1] : p2[e2 + t3], b2 = u2[e2 + h2 + t3 - 1] ? p2[e2 + h2 + t3 - 1] : p2[e2 + t3], z2 = u2[e2 + h2 + t3] ? p2[e2 + h2 + t3] : p2[e2 + t3], T2 = u2[e2 + h2 + t3 + 1] ? p2[e2 + h2 + t3 + 1] : p2[e2 + t3]) : (k2 = p2[e2 - h2 + t3 - 1], P2 = p2[e2 - h2 + t3], Z = p2[e2 - h2 + t3 + 1], C2 = p2[e2 + t3 - 1], F2 = p2[e2 + t3 + 1], b2 = p2[e2 + h2 + t3 - 1], z2 = p2[e2 + h2 + t3], T2 = p2[e2 + h2 + t3 + 1]);
      const n3 = (Z + F2 + F2 + T2 - (k2 + C2 + C2 + b2)) * M2, l3 = (b2 + z2 + z2 + T2 - (k2 + P2 + P2 + Z)) * A2, s3 = Math.sqrt(n3 * n3 + l3 * l3);
      m2[e2 + t3] = r2 === "percent-rise" ? 100 * s3 : 57.2957795 * Math.atan(s3);
    }
  }
  for (let t2 = 0; t2 < f2; t2++)
    m2[t2 * h2] = m2[t2 * h2 + 1], m2[(t2 + 1) * h2 - 1] = m2[(t2 + 1) * h2 - 2];
  for (let t2 = 1; t2 < h2 - 1; t2++)
    m2[t2] = m2[t2 + h2], m2[t2 + (f2 - 1) * h2] = m2[t2 + (f2 - 2) * h2];
  return new g$4({ width: h2, height: f2, pixels: [m2], mask: u2 ? x2 : null, pixelType: "f32", validPixelCount: n2.validPixelCount, statistics: [{ minValue: 0, maxValue: r2 === "percent-rise" ? 100 : 360 }] });
}
function o$1(n2, l2 = {}) {
  if (!r$8(n2))
    return n2;
  const { width: s2, height: a2, mask: o2 } = n2, r2 = n2.pixels[0], c2 = new Uint8Array(s2 * a2);
  r$7(o2) && c2.set(o2);
  const h2 = new Float32Array(s2 * a2), { resolution: f2 } = l2, u2 = f2 ? 1 / f2.x : 1, p2 = f2 ? 1 / f2.y : 1, x2 = 1;
  let d2, m2, w2, y2, M2, A2, g2, k2;
  const P2 = r$7(o2);
  for (let t2 = x2; t2 < a2 - x2; t2++) {
    const e2 = t2 * s2;
    for (let t3 = x2; t3 < s2 - x2; t3++) {
      if (o2 && !o2[e2 + t3]) {
        h2[e2 + t3] = 0;
        continue;
      }
      let i2 = 0;
      if (P2 && (i2 = o2[e2 - s2 + t3 - 1] + o2[e2 - s2 + t3] + o2[e2 - s2 + t3 + 1] + o2[e2 + t3 - 1] + o2[e2 + t3 + 1] + o2[e2 + s2 + t3 - 1] + o2[e2 + s2 + t3] + o2[e2 + s2 + t3 + 1], i2 < 7)) {
        h2[e2 + t3] = 0, c2[e2 + t3] = 0;
        continue;
      }
      o2 && i2 === 7 ? (d2 = o2[e2 - s2 + t3 - 1] ? r2[e2 - s2 + t3 - 1] : r2[e2 + t3], m2 = o2[e2 - s2 + t3] ? r2[e2 - s2 + t3] : r2[e2 + t3], w2 = o2[e2 - s2 + t3 + 1] ? r2[e2 - s2 + t3 + 1] : r2[e2 + t3], y2 = o2[e2 + t3 - 1] ? r2[e2 + t3 - 1] : r2[e2 + t3], M2 = o2[e2 + t3 + 1] ? r2[e2 + t3 + 1] : r2[e2 + t3], A2 = o2[e2 + s2 + t3 - 1] ? r2[e2 + s2 + t3 - 1] : r2[e2 + t3], g2 = o2[e2 + s2 + t3] ? r2[e2 + s2 + t3] : r2[e2 + t3], k2 = o2[e2 + s2 + t3 + 1] ? r2[e2 + s2 + t3 + 1] : r2[e2 + t3]) : (d2 = r2[e2 - s2 + t3 - 1], m2 = r2[e2 - s2 + t3], w2 = r2[e2 - s2 + t3 + 1], y2 = r2[e2 + t3 - 1], M2 = r2[e2 + t3 + 1], A2 = r2[e2 + s2 + t3 - 1], g2 = r2[e2 + s2 + t3], k2 = r2[e2 + s2 + t3 + 1]);
      const n3 = (w2 + M2 + M2 + k2 - (d2 + y2 + y2 + A2)) * u2, l3 = (A2 + g2 + g2 + k2 - (d2 + m2 + m2 + w2)) * p2;
      let a3 = -1;
      n3 === 0 && l3 === 0 || (a3 = 90 - 57.29578 * Math.atan2(l3, -n3), a3 < 0 && (a3 += 360), a3 === 360 ? a3 = 0 : a3 > 360 && (a3 %= 360)), h2[e2 + t3] = a3;
    }
  }
  for (let t2 = 0; t2 < a2; t2++)
    h2[t2 * s2] = h2[t2 * s2 + 1], h2[(t2 + 1) * s2 - 1] = h2[(t2 + 1) * s2 - 2];
  for (let t2 = 1; t2 < s2 - 1; t2++)
    h2[t2] = h2[t2 + s2], h2[t2 + (a2 - 1) * s2] = h2[t2 + (a2 - 2) * s2];
  return new g$4({ width: s2, height: a2, pixels: [h2], mask: o2 ? c2 : null, pixelType: "f32", validPixelCount: n2.validPixelCount, statistics: [{ minValue: 0, maxValue: 360 }] });
}
const i = [{ id: "aspect_predefined", type: "multipart", colorRamps: [{ fromColor: [190, 190, 190], toColor: [255, 45, 8] }, { fromColor: [255, 45, 8], toColor: [255, 181, 61] }, { fromColor: [255, 181, 61], toColor: [255, 254, 52] }, { fromColor: [255, 254, 52], toColor: [0, 251, 50] }, { fromColor: [0, 251, 50], toColor: [255, 254, 52] }, { fromColor: [0, 253, 255], toColor: [0, 181, 255] }, { fromColor: [0, 181, 255], toColor: [26, 35, 253] }, { fromColor: [26, 35, 253], toColor: [255, 57, 251] }, { fromColor: [255, 57, 251], toColor: [255, 45, 8] }] }, { id: "blackToWhite_predefined", fromColor: [0, 0, 0], toColor: [255, 255, 255] }, { id: "blueBright_predefined", fromColor: [204, 204, 255], toColor: [0, 0, 224] }, { id: "blueLightToDark_predefined", fromColor: [211, 229, 232], toColor: [46, 100, 140] }, { id: "blueGreenBright_predefined", fromColor: [203, 245, 234], toColor: [48, 207, 146] }, { id: "blueGreenLightToDark_predefined", fromColor: [216, 242, 237], toColor: [21, 79, 74] }, { id: "brownLightToDark_predefined", fromColor: [240, 236, 170], toColor: [102, 72, 48] }, { id: "brownToBlueGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [156, 85, 31], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [33, 130, 145] }] }, { id: "brownToBlueGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [110, 70, 45], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [48, 100, 102] }] }, { id: "coefficientBias_predefined", fromColor: [214, 214, 255], toColor: [0, 57, 148] }, { id: "coldToHotDiverging_predefined", type: "multipart", colorRamps: [{ fromColor: [69, 117, 181], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [214, 47, 39] }] }, { id: "conditionNumber_predefined", type: "multipart", colorRamps: [{ fromColor: [0, 97, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 34, 0] }] }, { id: "cyanToPurple_predefined", type: "multipart", colorRamps: [{ fromColor: [0, 245, 245], toColor: [0, 0, 245] }, { fromColor: [0, 0, 245], toColor: [245, 0, 245] }] }, { id: "cyanLightToBlueDark_predefined", type: "multipart", colorRamps: [{ fromColor: [182, 237, 240], toColor: [31, 131, 224] }, { fromColor: [31, 131, 224], toColor: [9, 9, 145] }] }, { id: "distance_predefined", fromColor: [255, 200, 0], toColor: [0, 0, 255] }, { id: "elevation1_predefined", type: "multipart", colorRamps: [{ fromColor: [175, 240, 233], toColor: [255, 255, 179] }, { fromColor: [255, 255, 179], toColor: [0, 128, 64] }, { fromColor: [0, 128, 64], toColor: [252, 186, 3] }, { fromColor: [252, 186, 3], toColor: [128, 0, 0] }, { fromColor: [120, 0, 0], toColor: [105, 48, 13] }, { fromColor: [105, 48, 13], toColor: [171, 171, 171] }, { fromColor: [171, 171, 171], toColor: [255, 252, 255] }] }, { id: "elevation2_predefined", type: "multipart", colorRamps: [{ fromColor: [118, 219, 211], toColor: [255, 255, 199] }, { fromColor: [255, 255, 199], toColor: [255, 255, 128] }, { fromColor: [255, 255, 128], toColor: [217, 194, 121] }, { fromColor: [217, 194, 121], toColor: [135, 96, 38] }, { fromColor: [135, 96, 38], toColor: [150, 150, 181] }, { fromColor: [150, 150, 181], toColor: [181, 150, 181] }, { fromColor: [181, 150, 181], toColor: [255, 252, 255] }] }, { id: "errors_predefined", fromColor: [255, 235, 214], toColor: [196, 10, 10] }, { id: "grayLightToDark_predefined", fromColor: [219, 219, 219], toColor: [69, 69, 69] }, { id: "greenBright_predefined", fromColor: [204, 255, 204], toColor: [14, 204, 14] }, { id: "greenLightToDark_predefined", fromColor: [220, 245, 233], toColor: [34, 102, 51] }, { id: "greenToBlue_predefined", type: "multipart", colorRamps: [{ fromColor: [32, 204, 16], toColor: [0, 242, 242] }, { fromColor: [0, 242, 242], toColor: [2, 33, 227] }] }, { id: "orangeBright_predefined", fromColor: [255, 235, 204], toColor: [240, 118, 5] }, { id: "orangeLightToDark_predefined", fromColor: [250, 233, 212], toColor: [171, 65, 36] }, { id: "partialSpectrum_predefined", type: "multipart", colorRamps: [{ fromColor: [242, 241, 162], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }, { fromColor: [252, 3, 69], toColor: [176, 7, 237] }, { fromColor: [176, 7, 237], toColor: [2, 29, 173] }] }, { id: "partialSpectrum1Diverging_predefined", type: "multipart", colorRamps: [{ fromColor: [135, 38, 38], toColor: [240, 149, 12] }, { fromColor: [240, 149, 12], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [74, 80, 181] }, { fromColor: [74, 80, 181], toColor: [39, 32, 122] }] }, { id: "partialSpectrum2Diverging_predefined", type: "multipart", colorRamps: [{ fromColor: [115, 77, 42], toColor: [201, 137, 52] }, { fromColor: [201, 137, 52], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [91, 63, 176] }, { fromColor: [91, 63, 176], toColor: [81, 13, 97] }] }, { id: "pinkToYellowGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [158, 30, 113], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [99, 110, 45] }] }, { id: "pinkToYellowGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [97, 47, 73], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [22, 59, 15] }] }, { id: "precipitation_predefined", type: "multipart", colorRamps: [{ fromColor: [194, 82, 60], toColor: [237, 161, 19] }, { fromColor: [237, 161, 19], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [0, 219, 0] }, { fromColor: [0, 219, 0], toColor: [32, 153, 143] }, { fromColor: [32, 153, 143], toColor: [11, 44, 122] }] }, { id: "prediction_predefined", type: "multipart", colorRamps: [{ fromColor: [40, 146, 199], toColor: [250, 250, 100] }, { fromColor: [250, 250, 100], toColor: [232, 16, 20] }] }, { id: "purpleBright_predefined", fromColor: [255, 204, 255], toColor: [199, 0, 199] }, { id: "purpleToGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [77, 32, 150], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [20, 122, 11] }] }, { id: "purpleToGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [67, 14, 89], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [24, 79, 15] }] }, { id: "purpleBlueBright_predefined", fromColor: [223, 184, 230], toColor: [112, 12, 242] }, { id: "purpleBlueLightToDark_predefined", fromColor: [229, 213, 242], toColor: [93, 44, 112] }, { id: "purpleRedBright_predefined", fromColor: [255, 204, 225], toColor: [199, 0, 99] }, { id: "purpleRedLightToDark_predefined", fromColor: [250, 215, 246], toColor: [143, 17, 57] }, { id: "redBright_predefined", fromColor: [255, 204, 204], toColor: [219, 0, 0] }, { id: "redLightToDark_predefined", fromColor: [255, 224, 224], toColor: [143, 10, 10] }, { id: "redToBlueDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [196, 69, 57], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [48, 95, 207] }] }, { id: "redToBlueDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [107, 13, 13], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [13, 53, 97] }] }, { id: "redToGreen_predefined", type: "multipart", colorRamps: [{ fromColor: [245, 0, 0], toColor: [245, 245, 0] }, { fromColor: [245, 245, 0], toColor: [0, 245, 0] }] }, { id: "redToGreenDivergingBright_predefined", type: "multipart", colorRamps: [{ fromColor: [186, 20, 20], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [54, 145, 33] }] }, { id: "redToGreenDivergingDark_predefined", type: "multipart", colorRamps: [{ fromColor: [97, 21, 13], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [16, 69, 16] }] }, { id: "slope_predefined", type: "multipart", colorRamps: [{ fromColor: [56, 168, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }] }, { id: "spectrumFullBright_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 0, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [0, 0, 255] }] }, { id: "spectrumFullDark_predefined", type: "multipart", colorRamps: [{ fromColor: [153, 0, 0], toColor: [153, 153, 0] }, { fromColor: [153, 153, 0], toColor: [0, 153, 153] }, { fromColor: [0, 153, 153], toColor: [0, 0, 153] }] }, { id: "spectrumFullLight_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 153, 153], toColor: [255, 255, 153] }, { fromColor: [255, 255, 153], toColor: [153, 255, 255] }, { fromColor: [153, 255, 255], toColor: [153, 153, 255] }] }, { id: "surface_predefined", type: "multipart", colorRamps: [{ fromColor: [112, 153, 89], toColor: [242, 238, 162] }, { fromColor: [242, 238, 162], toColor: [242, 206, 133] }, { fromColor: [242, 206, 133], toColor: [194, 140, 124] }, { fromColor: [194, 140, 124], toColor: [255, 242, 255] }] }, { id: "temperature_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 252, 255], toColor: [255, 0, 255] }, { fromColor: [255, 0, 255], toColor: [0, 0, 255] }, { fromColor: [0, 0, 255], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [0, 255, 0] }, { fromColor: [0, 255, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 128, 0] }, { fromColor: [255, 128, 0], toColor: [128, 0, 0] }] }, { id: "whiteToBlack_predefined", fromColor: [255, 255, 255], toColor: [0, 0, 0] }, { id: "yellowToDarkRed_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 255, 128], toColor: [242, 167, 46] }, { fromColor: [242, 167, 46], toColor: [107, 0, 0] }] }, { id: "yellowToGreenToDarkBlue_predefined", type: "multipart", colorRamps: [{ fromColor: [255, 255, 128], toColor: [56, 224, 9] }, { fromColor: [56, 224, 9], toColor: [26, 147, 171] }, { fromColor: [26, 147, 171], toColor: [12, 16, 120] }] }, { id: "yellowToRed_predefined", fromColor: [245, 245, 0], toColor: [255, 0, 0] }, { id: "yellowGreenBright_predefined", fromColor: [236, 252, 204], toColor: [157, 204, 16] }, { id: "yellowGreenLightToDark_predefined", fromColor: [215, 240, 175], toColor: [96, 107, 45] }], n$2 = { aspect_predefined: "Aspect", blackToWhite_predefined: "Black to White", blueBright_predefined: "Blue Bright", blueLightToDark_predefined: "Blue Light to Dark", blueGreenBright_predefined: "Blue-Green Bright", blueGreenLightToDark_predefined: "Blue-Green Light to Dark", brownLightToDark_predefined: "Brown Light to Dark", brownToBlueGreenDivergingBright_predefined: "Brown to Blue Green Diverging, Bright", brownToBlueGreenDivergingDark_predefined: "Brown to Blue Green Diverging, Dark", coefficientBias_predefined: "Coefficient Bias", coldToHotDiverging_predefined: "Cold to Hot Diverging", conditionNumber_predefined: "Condition Number", cyanToPurple_predefined: "Cyan to Purple", cyanLightToBlueDark_predefined: "Cyan-Light to Blue-Dark", distance_predefined: "Distance", elevation1_predefined: "Elevation #1", elevation2_predefined: "Elevation #2", errors_predefined: "Errors", grayLightToDark_predefined: "Gray Light to Dark", greenBright_predefined: "Green Bright", greenLightToDark_predefined: "Green Light to Dark", greenToBlue_predefined: "Green to Blue", orangeBright_predefined: "Orange Bright", orangeLightToDark_predefined: "Orange Light to Dark", partialSpectrum_predefined: "Partial Spectrum", partialSpectrum1Diverging_predefined: "Partial Spectrum 1 Diverging", partialSpectrum2Diverging_predefined: "Partial Spectrum 2 Diverging", pinkToYellowGreenDivergingBright_predefined: "Pink to YellowGreen Diverging, Bright", pinkToYellowGreenDivergingDark_predefined: "Pink to YellowGreen Diverging, Dark", precipitation_predefined: "Precipitation", prediction_predefined: "Prediction", purpleBright_predefined: "Purple Bright", purpleToGreenDivergingBright_predefined: "Purple to Green Diverging, Bright", purpleToGreenDivergingDark_predefined: "Purple to Green Diverging, Dark", purpleBlueBright_predefined: "Purple-Blue Bright", purpleBlueLightToDark_predefined: "Purple-Blue Light to Dark", purpleRedBright_predefined: "Purple-Red Bright", purpleRedLightToDark_predefined: "Purple-Red Light to Dark", redBright_predefined: "Red Bright", redLightToDark_predefined: "Red Light to Dark", redToBlueDivergingBright_predefined: "Red to Blue Diverging, Bright", redToBlueDivergingDark_predefined: "Red to Blue Diverging, Dark", redToGreen_predefined: "Red to Green", redToGreenDivergingBright_predefined: "Red to Green Diverging, Bright", redToGreenDivergingDark_predefined: "Red to Green Diverging, Dark", slope_predefined: "Slope", spectrumFullBright_predefined: "Spectrum-Full Bright", spectrumFullDark_predefined: "Spectrum-Full Dark", spectrumFullLight_predefined: "Spectrum-Full Light", surface_predefined: "Surface", temperature_predefined: "Temperature", whiteToBlack_predefined: "White to Black", yellowToDarkRed_predefined: "Yellow to Dark Red", yellowToGreenToDarkBlue_predefined: "Yellow to Green to Dark Blue", yellowToRed_predefined: "Yellow to Red", yellowGreenBright_predefined: "Yellow-Green Bright", yellowGreenLightToDark_predefined: "Yellow-Green Light to Dark" };
function d$1(o2, r2) {
  if (!o2 || !r2 || o2.length !== r2.length)
    return false;
  for (let e2 = 0; e2 < o2.length; e2++)
    if (o2[e2] > r2[e2] + 2 || o2[e2] < r2[e2] - 2)
      return false;
  return true;
}
function p$2(r2, e2) {
  if (!r2)
    return;
  const t2 = e2 || i;
  let l2 = null;
  return r2.type === "algorithmic" ? t2.some((o2) => {
    if (d$1(r2.fromColor.toRgb(), o2.fromColor) && d$1(r2.toColor.toRgb(), o2.toColor))
      return l2 = o2.id, true;
  }) : r2.type === "multipart" && t2.some((e3) => {
    const t3 = r2.colorRamps, i2 = e3.colorRamps;
    if (t3 && i2 && t3.length === i2.length && !i2.some((r3, e4) => {
      if (!d$1(t3[e4].fromColor.toRgb(), new l$5(r3.fromColor).toRgb()) || !d$1(t3[e4].toColor.toRgb(), new l$5(r3.toColor).toRgb()))
        return true;
    })) {
      if (l2)
        return true;
      l2 = e3.id;
    }
  }), l2;
}
function f$1(o2) {
  const r2 = p$2(o2);
  return r2 ? n$2[r2] : null;
}
function C(o2) {
  const r2 = (o2 = o2 || {}).numColors || 256, e2 = o2.distanceOffset || 0, t2 = o2.isCustomInterval != null ? o2.isCustomInterval : o2.distanceInterval !== null && o2.distanceInterval !== 1 / (r2 - 1), l2 = o2.distanceInterval || 1 / (r2 - 1);
  return __spreadProps(__spreadValues({}, o2), { numColors: r2, distanceOffset: e2, interpolateAlpha: !!o2.interpolateAlpha, distanceInterval: l2, isCustomInterval: t2, weights: o2.weights });
}
function a$2(o2, r2, e2) {
  const { numColors: t2, distanceOffset: l2, distanceInterval: i2, isCustomInterval: n2 } = C(e2), d2 = o2.s === 0, p2 = r2.s === 0;
  let f2 = o2.h, a2 = r2.h;
  d2 && !p2 ? f2 = a2 : p2 && !d2 && (r2 = __spreadProps(__spreadValues({}, r2), { h: f2 }), a2 = f2);
  let m2, u2 = Math.abs(a2 - f2);
  const g2 = 360;
  u2 < g2 / 2 ? m2 = (a2 - f2) * i2 : (u2 = g2 - u2, m2 = f2 > a2 ? u2 * i2 : -u2 * i2);
  const s2 = (r2.s - o2.s) * i2, c2 = (r2.v - o2.v) * i2;
  let { s: h2, v: _2 } = o2, D2 = f2;
  if (l2) {
    const o3 = l2 / i2;
    D2 = (D2 + o3 * m2 + g2) % g2, h2 += o3 * s2, _2 += o3 * c2;
  }
  const B2 = [];
  for (let C2 = 0; C2 < t2 - 1; C2++)
    B2.push({ h: D2, s: h2, v: _2 }), D2 = (D2 + m2 + g2) % g2, h2 += s2, _2 += c2;
  return B2.push(n2 ? { h: D2, s: h2, v: _2 } : r2), B2;
}
function m$1(o2, r2, e2) {
  const { numColors: t2, distanceOffset: l2, distanceInterval: i2, isCustomInterval: n2 } = C(e2);
  let { l: d2, a: p2, b: f2 } = o2;
  const a2 = (r2.l - d2) * i2, m2 = (r2.a - p2) * i2, u2 = (r2.b - f2) * i2, g2 = [];
  if (l2) {
    const o3 = l2 / i2;
    d2 += o3 * a2, p2 += o3 * m2, f2 += o3 * u2;
  }
  for (let C2 = 0; C2 < t2 - 1; C2++)
    g2.push({ l: d2, a: p2, b: f2 }), d2 += a2, p2 += m2, f2 += u2;
  return g2.push(n2 ? { l: d2, a: p2, b: f2 } : r2), g2;
}
function u$2(o2, r2, e2) {
  const { numColors: t2, distanceOffset: l2, distanceInterval: i2, isCustomInterval: n2 } = C(e2), d2 = o2.h, p2 = r2.h, f2 = 2 * Math.PI;
  let a2;
  if (d2 <= p2) {
    const o3 = p2 - d2, r3 = p2 - d2 - f2;
    a2 = Math.abs(r3) < Math.abs(o3) ? r3 : o3;
  } else {
    const o3 = p2 + f2 - d2, r3 = p2 - d2;
    a2 = Math.abs(r3) < Math.abs(o3) ? r3 : o3;
  }
  const m2 = a2 * i2, u2 = (r2.l - o2.l) * i2, g2 = (r2.c - o2.c) * i2;
  let { l: s2, c: c2, h: h2 } = o2;
  if (l2) {
    const o3 = l2 / i2;
    s2 += o3 * u2, c2 += o3 * g2, h2 = (h2 + o3 * m2 + f2) % f2;
  }
  const _2 = [];
  for (let C2 = 0; C2 < t2 - 1; C2++)
    _2.push({ l: s2, c: c2, h: h2 }), s2 += u2, c2 += g2, h2 = (h2 + m2 + f2) % f2;
  return _2.push(n2 ? { l: s2, c: c2, h: h2 } : r2), _2;
}
function g$1(o2, i2) {
  var _a, _b;
  let { fromColor: n2, toColor: d2 } = o2;
  n2.length === 3 && (n2 = n2.concat([255])), d2.length === 3 && (d2 = d2.concat([255]));
  const p2 = o2.algorithm || "esriCIELabAlgorithm", { numColors: f2, distanceOffset: g2, isCustomInterval: s2, interpolateAlpha: c2 } = C(i2);
  if (f2 === 1 && g2 === 0)
    return [n2];
  if (f2 === 2 && g2 === 0 && !s2)
    return [n2, d2];
  const h2 = { r: n2[0], g: n2[1], b: n2[2] }, _2 = { r: d2[0], g: d2[1], b: d2[2] }, D2 = p2 === "esriCIELabAlgorithm" ? m$1(z(h2), z(_2), i2) : p2 === "esriHSVAlgorithm" ? a$2(y$2(h2), y$2(_2), i2) : u$2(v$2(h2), v$2(_2), i2), B2 = [], k2 = (_a = n2[3]) != null ? _a : 255, v2 = (((_b = d2[3]) != null ? _b : 255) - k2) / (f2 - 1);
  for (let r2 = 0; r2 < f2; r2++) {
    const { r: o3, g: e2, b: t2 } = p$5(D2[r2]), i3 = c2 ? Math.round(k2 + v2 * r2) : 255;
    B2.push([o3, e2, t2, i3]);
  }
  return B2;
}
function s(o2, r2) {
  const { numColors: e2, interpolateAlpha: t2 } = C(r2);
  let l2 = r2 == null ? void 0 : r2.weights;
  const { colorRamps: i2 } = o2;
  if (l2) {
    const o3 = l2.reduce((o4, r3) => o4 + r3);
    l2 = l2.map((r3) => r3 / o3);
  } else {
    l2 = [];
    for (let o3 = 0; o3 < i2.length; o3++)
      l2[o3] = 1 / i2.length;
  }
  const n2 = [];
  let d2 = 0, p2 = 0;
  const f2 = 1 / (e2 - 1);
  let a2 = false;
  for (let C2 = 0; C2 < i2.length; C2++) {
    let o3 = a2 ? 0 : d2 * f2 - p2, r3 = C2 === i2.length - 1 ? e2 - 1 - d2 : (l2[C2] - o3) / f2;
    if (a2 = Math.ceil(r3) === r3, r3 = Math.ceil(r3), r3 === 0)
      continue;
    o3 /= l2[C2];
    const m3 = g$1(i2[C2], { numColors: r3, interpolateAlpha: t2, distanceOffset: o3, distanceInterval: f2 / l2[C2] });
    d2 += m3.length, n2.push(...m3), p2 += l2[C2];
  }
  const m2 = [...i2[i2.length - 1].toColor];
  return m2.length === 3 && m2.push(255), n2.push(m2), n2;
}
function c$1(o2, r2 = 256, e2 = false) {
  const t2 = "toJSON" in o2 ? o2.toJSON() : o2, l2 = { numColors: r2, interpolateAlpha: e2 };
  return t2.type === "multipart" ? s(t2, l2) : g$1(t2, l2);
}
function h$2(o2, r2 = 256, e2 = false) {
  const t2 = c$1(o2, r2, e2);
  return t2.forEach((o3, r3) => {
    o3.unshift(r3), e2 || o3.pop();
  }), t2;
}
function _$1(o2) {
  const r2 = f$1(o2);
  if (o2) {
    if (o2.type === "algorithmic")
      return __spreadProps(__spreadValues({}, D(o2)), { Name: r2 });
    if (o2.colorRamps) {
      const e2 = o2.colorRamps.map(D);
      return { type: "MultiPartColorRamp", NumColorRamps: e2.length, ArrayOfColorRamp: e2, Name: r2 };
    }
  }
}
function D(o2) {
  var _a;
  if (!o2)
    return;
  return { Algorithm: ((_a = o2.toJSON()) == null ? void 0 : _a.Algorithm) || "esriHSVAlgorithm", type: "AlgorithmicColorRamp", FromColor: B(o2.fromColor), ToColor: B(o2.toColor) };
}
function B(o2) {
  const e2 = y$2(o2);
  return { type: "HsvColor", Hue: e2.h, Saturation: e2.s, Value: e2.v, AlphaValue: 255 };
}
function k(o2) {
  const r2 = o2.reverse().map((o3) => {
    const r3 = o3.toString(16);
    return r3.length < 2 ? "0" + r3 : r3;
  });
  return 4294967295 & Number.parseInt(r2.join(""), 16);
}
const n$1 = new s$5({ none: "none", standardDeviation: "standard-deviation", histogramEqualization: "histogram-equalization", minMax: "min-max", percentClip: "percent-clip", sigmoid: "sigmoid" }), a$1 = { 0: "none", 3: "standardDeviation", 4: "histogramEqualization", 5: "minMax", 6: "percentClip", 9: "sigmoid" };
const o = { u1: [0, 1], u2: [0, 3], u4: [0, 15], u8: [0, 255], s8: [-128, 127], u16: [0, 65535], s16: [-32768, 32767], u32: [0, 4294967295], s32: [-2147483648, 2147483647], f32: [-34e38, 34e38], f64: [-Number.MAX_VALUE, Number.MAX_VALUE] }, a = 1, f = [0.299, 0.587, 0.114];
function l$2(t2, e2 = 256) {
  e2 = Math.min(e2, 256);
  const { size: n2, counts: i2 } = t2, r2 = new Uint8Array(n2), s2 = i2.reduce((t3, n3) => t3 + n3 / e2, 0);
  let o2 = 0, a2 = 0, f2 = 0, l2 = s2;
  for (let u2 = 0; u2 < n2; u2++)
    if (f2 += i2[u2], !(u2 < n2 - 1 && f2 + i2[u2 + 1] < l2)) {
      for (; o2 < e2 - 1 && l2 < f2; )
        o2++, l2 += s2;
      for (let t3 = a2; t3 <= u2; t3++)
        r2[t3] = o2;
      a2 = u2 + 1;
    }
  for (let u2 = a2; u2 < n2; u2++)
    r2[u2] = e2 - 1;
  return r2;
}
function u$1(t2) {
  const { minCutOff: e2, maxCutOff: n2, gamma: i2, pixelType: r2 } = t2, s2 = t2.outMin || 0, o2 = t2.outMax || 255;
  if (!["u8", "u16", "s8", "s16"].includes(r2))
    return null;
  const a2 = e2.length;
  let f2, l2, u2 = 0;
  r2 === "s8" ? u2 = -127 : r2 === "s16" && (u2 = -32767);
  let c2 = 256;
  ["u16", "s16"].includes(r2) && (c2 = 65536);
  const h2 = [], p2 = o2 - s2;
  for (f2 = 0; f2 < a2; f2++)
    h2[f2] = n2[f2] - e2[f2], n2[f2], e2[f2];
  const g2 = i2 && i2.length >= a2, x2 = [];
  if (g2)
    for (f2 = 0; f2 < a2; f2++)
      i2[f2] > 1 ? i2[f2] > 2 ? x2[f2] = 6.5 + (i2[f2] - 2) ** 2.5 : x2[f2] = 6.5 + 100 * (2 - i2[f2]) ** 4 : x2[f2] = 1;
  let M2;
  const d2 = [];
  let y2, b2, O2;
  if (g2)
    for (f2 = 0; f2 < a2; f2++) {
      for (O2 = [], l2 = 0; l2 < c2; l2++)
        y2 = l2 + u2, M2 = (y2 - e2[f2]) / h2[f2], b2 = 1, i2[f2] > 1 && (b2 -= (1 / p2) ** (M2 * x2[f2])), y2 < n2[f2] && y2 > e2[f2] ? O2[l2] = Math.floor(b2 * p2 * M2 ** (1 / i2[f2])) + s2 : y2 >= n2[f2] ? O2[l2] = o2 : O2[l2] = s2;
      d2[f2] = O2;
    }
  else
    for (f2 = 0; f2 < a2; f2++) {
      for (O2 = [], l2 = 0; l2 < c2; l2++)
        y2 = l2 + u2, y2 <= e2[f2] ? O2[l2] = s2 : y2 >= n2[f2] ? O2[l2] = o2 : O2[l2] = Math.floor((y2 - e2[f2]) / h2[f2] * p2) + s2;
      d2[f2] = O2;
    }
  if (t2.contrastOffset != null) {
    const e3 = m(t2.contrastOffset, t2.brightnessOffset);
    for (f2 = 0; f2 < a2; f2++)
      for (O2 = d2[f2], l2 = 0; l2 < c2; l2++)
        O2[l2] = e3[O2[l2]];
  }
  return { lut: d2, offset: u2 };
}
function m(t2, e2) {
  const n2 = Math.min(Math.max(t2, -100), 100), i2 = Math.min(Math.max(e2 != null ? e2 : 0, -100), 100), r2 = 255, s2 = 128;
  let o2 = 0, a2 = 0;
  const f2 = new Uint8Array(256);
  for (o2 = 0; o2 < 256; o2++)
    n2 > 0 && n2 < 100 ? a2 = (200 * o2 - 100 * r2 + 2 * r2 * i2) / (2 * (100 - n2)) + s2 : n2 <= 0 && n2 > -100 ? a2 = (200 * o2 - 100 * r2 + 2 * r2 * i2) * (100 + n2) / 2e4 + s2 : n2 === 100 ? (a2 = 200 * o2 - 100 * r2 + (r2 + 1) * (100 - n2) + 2 * r2 * i2, a2 = a2 > 0 ? r2 : 0) : n2 === -100 && (a2 = s2), f2[o2] = a2 > r2 ? r2 : a2 < 0 ? 0 : a2;
  return f2;
}
function c(t2, e2, n2) {
  const i2 = [];
  for (let r2 = 0; r2 < e2.length; r2++) {
    let s2 = 0, o2 = 0, a2 = 0;
    "min" in e2[r2] ? { min: s2, max: o2, avg: a2 } = e2[r2] : [s2, o2, a2] = e2[r2];
    let l2 = a2 != null ? a2 : 0;
    t2 !== "u8" && (l2 = 255 * (l2 - s2) / (o2 - s2)), n2 && (l2 *= f[r2]), i2.push(h$1(l2));
  }
  return i2;
}
function h$1(t2) {
  if (t2 <= 0 || t2 >= 255)
    return a;
  let e2 = 0;
  t2 !== 150 && (e2 = t2 <= 150 ? 45 * Math.cos(0.01047 * t2) : 17 * Math.sin(0.021 * t2));
  const n2 = 255, i2 = t2 + e2, r2 = Math.log(t2 / n2), s2 = Math.log(i2 / n2);
  if (s2 === 0)
    return a;
  const o2 = r2 / s2;
  return isNaN(o2) ? a : Math.min(9.9, Math.max(0.01, o2));
}
function p$1(n2) {
  var _a;
  if (t$5(n2) || !((_a = n2.pixels) == null ? void 0 : _a.length))
    return null;
  n2.statistics || n2.updateStatistics();
  const { pixels: i2, mask: r2, pixelType: s2, statistics: o2 } = n2, a2 = n2.width * n2.height, f2 = i2.length;
  let l2, u2, m2, c2, h2;
  const p2 = [], g2 = [];
  let x2, M2, d2, y2, b2, O2, C2, k2, z2, A2;
  const v2 = 256;
  for (c2 = 0; c2 < f2; c2++) {
    if (x2 = new Uint32Array(v2), d2 = i2[c2], s2 === "u8")
      if (l2 = -0.5, u2 = 255.5, r2)
        for (h2 = 0; h2 < a2; h2++)
          r2[h2] && x2[d2[h2]]++;
      else
        for (h2 = 0; h2 < a2; h2++)
          x2[d2[h2]]++;
    else {
      if (c$4(o2), l2 = o2[c2].minValue, u2 = o2[c2].maxValue, m2 = (u2 - l2) / v2, M2 = new Uint32Array(v2 + 1), r2)
        for (h2 = 0; h2 < a2; h2++)
          r2[h2] && M2[Math.floor((d2[h2] - l2) / m2)]++;
      else
        for (h2 = 0; h2 < a2; h2++)
          M2[Math.floor((d2[h2] - l2) / m2)]++;
      for (h2 = 0; h2 < 255; h2++)
        x2[h2] = M2[h2];
      x2[255] = M2[255] + M2[256];
    }
    for (p2.push({ min: l2, max: u2, size: v2, counts: x2 }), y2 = 0, b2 = 0, k2 = 0, h2 = 0; h2 < v2; h2++)
      y2 += x2[h2], b2 += h2 * x2[h2];
    for (z2 = b2 / y2, h2 = 0; h2 < v2; h2++)
      k2 += x2[h2] * (h2 - z2) ** 2;
    A2 = Math.sqrt(k2 / (y2 - 1)), m2 = (u2 - l2) / v2, O2 = (z2 + 0.5) * m2 + l2, C2 = A2 * m2, g2.push({ min: l2, max: u2, avg: O2, stddev: C2 });
  }
  return { statistics: g2, histograms: p2 };
}
function g(t2) {
  const e2 = [];
  for (let n2 = 0; n2 < t2.length; n2++) {
    const { min: i2, max: r2, size: s2, counts: o2 } = t2[n2];
    let a2 = 0, f2 = 0;
    for (let t3 = 0; t3 < s2; t3++)
      a2 += o2[t3], f2 += t3 * o2[t3];
    const l2 = f2 / a2;
    let u2 = 0;
    for (let t3 = 0; t3 < s2; t3++)
      u2 += o2[t3] * (t3 - l2) ** 2;
    const m2 = (r2 - i2) / s2, c2 = (l2 + 0.5) * m2 + i2, h2 = Math.sqrt(u2 / (a2 - 1)) * m2;
    e2.push({ min: i2, max: r2, avg: c2, stddev: h2 });
  }
  return e2;
}
function x(t2, r2) {
  var _a;
  const { pixelBlock: a2, bandIds: f2, returnHistogramLut: u2, rasterInfo: m2 } = r2;
  let c2 = null, h2 = null, g2 = t2.stretchType;
  if (typeof g2 == "number" && (g2 = a$1[g2]), t2.dra)
    if (g2 === "minMax" && r$7(a2) && a2.statistics)
      c2 = a2.statistics.map((t3) => [t3.minValue, t3.maxValue, 0, 0]);
    else {
      const t3 = p$1(a2);
      c2 = r$7(t3) ? t3.statistics : null, h2 = r$7(t3) ? t3.histograms : null;
    }
  else
    c2 = ((_a = t2.statistics) == null ? void 0 : _a.length) > 0 ? t2.statistics : e$5(m2.statistics), h2 = t2.histograms || e$5(m2.histograms);
  g2 !== "percentClip" && g2 !== "histogramEqualization" || (h2 == null ? void 0 : h2.length) || (g2 = "minMax");
  const x2 = (c2 == null ? void 0 : c2.length) || (h2 == null ? void 0 : h2.length) || m2.bandCount, d2 = [], y2 = [];
  let b2, O2, C2, k2, z2, A2, v2, w2, U2, E2, L2, T2;
  switch (c2 && !Array.isArray(c2[0]) && (c2 = c2.map((t3) => [t3.min, t3.max, t3.avg, t3.stddev])), g2) {
    case "none":
      {
        const t3 = o[m2.pixelType] || o.f32;
        for (w2 = 0; w2 < x2; w2++)
          d2[w2] = t3[0], y2[w2] = t3[1];
      }
      break;
    case "minMax":
      for (c$4(c2), w2 = 0; w2 < x2; w2++)
        d2[w2] = c2[w2][0], y2[w2] = c2[w2][1];
      break;
    case "standardDeviation":
      for (c$4(c2), w2 = 0; w2 < x2; w2++)
        d2[w2] = c2[w2][2] - t2.numberOfStandardDeviations * c2[w2][3], y2[w2] = c2[w2][2] + t2.numberOfStandardDeviations * c2[w2][3], d2[w2] < c2[w2][0] && (d2[w2] = c2[w2][0]), y2[w2] > c2[w2][1] && (y2[w2] = c2[w2][1]);
      break;
    case "histogramEqualization":
      for (c$4(h2), w2 = 0; w2 < x2; w2++)
        d2[w2] = h2[w2].min, y2[w2] = h2[w2].max;
      break;
    case "percentClip":
      for (c$4(h2), w2 = 0; w2 < h2.length; w2++) {
        for (b2 = h2[w2], z2 = new Uint32Array(b2.size), k2 = [...b2.counts], k2.length >= 20 && (k2[0] = k2[1] = k2[2] = k2[k2.length - 1] = k2[k2.length - 2] = 0), C2 = 0, O2 = (b2.max - b2.min) / b2.size, v2 = b2.min === -0.5 && O2 === 1 ? 0.5 : 0, U2 = 0; U2 < b2.size; U2++)
          C2 += k2[U2], z2[U2] = C2;
        for (A2 = (t2.minPercent || 0) * C2 / 100, U2 = 0; U2 < b2.size; U2++)
          if (z2[U2] > A2) {
            d2[w2] = b2.min + O2 * (U2 + v2);
            break;
          }
        for (A2 = (1 - (t2.maxPercent || 0) / 100) * C2, U2 = b2.size - 2; U2 >= 0; U2--)
          if (z2[U2] < A2) {
            y2[w2] = b2.min + O2 * (U2 + 2 - v2);
            break;
          }
      }
      break;
    default:
      for (c$4(c2), w2 = 0; w2 < x2; w2++)
        d2[w2] = c2[w2][0], y2[w2] = c2[w2][1];
  }
  g2 === "histogramEqualization" ? (c$4(h2), L2 = h2[0].size || 256, E2 = 0, u2 && (T2 = h2.map((t3) => l$2(t3)))) : (L2 = t2.max || 255, E2 = t2.min || 0);
  return M({ minCutOff: d2, maxCutOff: y2, outMax: L2, outMin: E2, histogramLut: T2 }, f2);
}
function M(t2, e2) {
  if (e2 == null || e2.length === 0)
    return t2;
  const n2 = Math.max.apply(null, e2), { minCutOff: i2, maxCutOff: r2, outMin: s2, outMax: o2, histogramLut: a2 } = t2;
  return i2.length === e2.length || i2.length <= n2 ? t2 : { minCutOff: e2.map((t3) => i2[t3]), maxCutOff: e2.map((t3) => r2[t3]), histogramLut: a2 ? e2.map((t3) => a2[t3]) : null, outMin: s2, outMax: o2 };
}
function d(e2, n2) {
  var _a;
  if (t$5(e2) || !((_a = e2.pixels) == null ? void 0 : _a.length))
    return e2;
  const { mask: i2, width: s2, height: o2, pixels: a2 } = e2, { minCutOff: f2, maxCutOff: l2, gamma: u2 } = n2, m2 = n2.outMin || 0, c2 = n2.outMax || 255, h2 = s2 * o2, p2 = n2.outputPixelType || "u8", g2 = e2.pixels.map(() => g$4.createEmptyBand(p2, h2)), x2 = g2.length;
  let M2, d2, y2, b2, O2;
  const C2 = c2 - m2, k2 = [];
  for (M2 = 0; M2 < x2; M2++)
    k2[M2] = l2[M2] - f2[M2], l2[M2], f2[M2];
  const z2 = u2 && u2.length >= x2, A2 = [];
  if (z2)
    for (M2 = 0; M2 < x2; M2++)
      u2[M2] > 1 ? u2[M2] > 2 ? A2[M2] = 6.5 + (u2[M2] - 2) ** 2.5 : A2[M2] = 6.5 + 100 * (2 - u2[M2]) ** 4 : A2[M2] = 1;
  if (z2)
    if (i2 != null) {
      for (d2 = 0; d2 < h2; d2++)
        if (i2[d2])
          for (M2 = 0; M2 < x2; M2++)
            y2 = a2[M2][d2], O2 = (y2 - f2[M2]) / k2[M2], b2 = 1, u2[M2] > 1 && (b2 -= (1 / C2) ** (O2 * A2[M2])), y2 < l2[M2] && y2 > f2[M2] ? g2[M2][d2] = Math.floor(b2 * C2 * O2 ** (1 / u2[M2])) + m2 : y2 >= l2[M2] ? g2[M2][d2] = c2 : g2[M2][d2] = m2;
    } else
      for (d2 = 0; d2 < h2; d2++)
        for (M2 = 0; M2 < x2; M2++)
          y2 = a2[M2][d2], O2 = (y2 - f2[M2]) / k2[M2], b2 = 1, u2[M2] > 1 && (b2 -= (1 / C2) ** (O2 * A2[M2])), y2 < l2[M2] && y2 > f2[M2] ? g2[M2][d2] = Math.floor(b2 * C2 * O2 ** (1 / u2[M2])) + m2 : y2 >= l2[M2] ? g2[M2][d2] = c2 : g2[M2][d2] = m2;
  else if (i2 != null) {
    for (d2 = 0; d2 < h2; d2++)
      if (i2[d2])
        for (M2 = 0; M2 < x2; M2++)
          y2 = a2[M2][d2], y2 < l2[M2] && y2 > f2[M2] ? g2[M2][d2] = Math.floor((y2 - f2[M2]) / k2[M2] * C2) + m2 : y2 >= l2[M2] ? g2[M2][d2] = c2 : g2[M2][d2] = m2;
  } else
    for (d2 = 0; d2 < h2; d2++)
      for (M2 = 0; M2 < x2; M2++)
        y2 = a2[M2][d2], y2 < l2[M2] && y2 > f2[M2] ? g2[M2][d2] = Math.floor((y2 - f2[M2]) / k2[M2] * C2) + m2 : y2 >= l2[M2] ? g2[M2][d2] = c2 : g2[M2][d2] = m2;
  const v2 = new g$4({ width: s2, height: o2, mask: i2, pixels: g2, pixelType: p2 });
  return v2.updateStatistics(), v2;
}
var p;
let l$1 = p = class extends l$6 {
  constructor() {
    super(...arguments), this.blockWidth = void 0, this.blockHeight = void 0, this.compression = null, this.origin = null, this.firstPyramidLevel = null, this.maximumPyramidLevel = null, this.pyramidScalingFactor = 2, this.pyramidBlockWidth = null, this.pyramidBlockHeight = null, this.isVirtualTileInfo = false, this.tileInfo = null, this.transposeInfo = null, this.blockBoundary = null;
  }
  clone() {
    return new p({ blockWidth: this.blockWidth, blockHeight: this.blockHeight, compression: this.compression, origin: y$4(this.origin), firstPyramidLevel: this.firstPyramidLevel, maximumPyramidLevel: this.maximumPyramidLevel, pyramidResolutions: y$4(this.pyramidResolutions), pyramidScalingFactor: this.pyramidScalingFactor, pyramidBlockWidth: this.pyramidBlockWidth, pyramidBlockHeight: this.pyramidBlockHeight, isVirtualTileInfo: this.isVirtualTileInfo, tileInfo: y$4(this.tileInfo), transposeInfo: y$4(this.transposeInfo), blockBoundary: y$4(this.blockBoundary) });
  }
};
e$6([y$3({ type: Number, json: { write: true } })], l$1.prototype, "blockWidth", void 0), e$6([y$3({ type: Number, json: { write: true } })], l$1.prototype, "blockHeight", void 0), e$6([y$3({ type: String, json: { write: true } })], l$1.prototype, "compression", void 0), e$6([y$3({ type: w$2, json: { write: true } })], l$1.prototype, "origin", void 0), e$6([y$3({ type: Number, json: { write: true } })], l$1.prototype, "firstPyramidLevel", void 0), e$6([y$3({ type: Number, json: { write: true } })], l$1.prototype, "maximumPyramidLevel", void 0), e$6([y$3({ json: { write: true } })], l$1.prototype, "pyramidResolutions", void 0), e$6([y$3({ type: Number, json: { write: true } })], l$1.prototype, "pyramidScalingFactor", void 0), e$6([y$3({ type: Number, json: { write: true } })], l$1.prototype, "pyramidBlockWidth", void 0), e$6([y$3({ type: Number, json: { write: true } })], l$1.prototype, "pyramidBlockHeight", void 0), e$6([y$3({ type: Boolean, json: { write: true } })], l$1.prototype, "isVirtualTileInfo", void 0), e$6([y$3({ json: { write: true } })], l$1.prototype, "tileInfo", void 0), e$6([y$3()], l$1.prototype, "transposeInfo", void 0), e$6([y$3()], l$1.prototype, "blockBoundary", void 0), l$1 = p = e$6([n$8("esri.layers.support.RasterStorageInfo")], l$1);
const n = l$1;
var l;
let h = l = class extends l$6 {
  constructor(t2) {
    super(t2), this.attributeTable = null, this.bandCount = null, this.colormap = null, this.extent = null, this.format = void 0, this.height = null, this.width = null, this.histograms = null, this.keyProperties = {}, this.multidimensionalInfo = null, this.noDataValue = null, this.pixelSize = null, this.pixelType = null, this.isPseudoSpatialReference = false, this.spatialReference = null, this.statistics = null, this.storageInfo = null, this.transform = null;
  }
  get dataType() {
    var _a, _b, _c;
    const t2 = (_c = (_b = (_a = this.keyProperties) == null ? void 0 : _a.DataType) == null ? void 0 : _b.toLowerCase()) != null ? _c : "generic";
    return t2 === "stdtime" ? "standard-time" : t2;
  }
  get nativeExtent() {
    return this._get("nativeExtent") || this.extent;
  }
  set nativeExtent(t2) {
    t2 && this._set("nativeExtent", t2);
  }
  get nativePixelSize() {
    if (t$5(this.transform) || !this.transform.affectsPixelSize)
      return this.pixelSize;
    const t2 = this.nativeExtent;
    return { x: t2.width / this.width, y: t2.height / this.height };
  }
  get hasMultidimensionalTranspose() {
    var _a;
    return !!((_a = this.storageInfo) == null ? void 0 : _a.transposeInfo);
  }
  clone() {
    return new l({ attributeTable: y$4(this.attributeTable), bandCount: this.bandCount, colormap: y$4(this.colormap), extent: y$4(this.extent), nativePixelSize: y$4(this.nativePixelSize), format: this.format, height: this.height, width: this.width, histograms: y$4(this.histograms), keyProperties: y$4(this.keyProperties), multidimensionalInfo: y$4(this.multidimensionalInfo), noDataValue: this.noDataValue, pixelSize: y$4(this.pixelSize), pixelType: this.pixelType, isPseudoSpatialReference: this.isPseudoSpatialReference, spatialReference: y$4(this.spatialReference), statistics: y$4(this.statistics), storageInfo: y$4(this.storageInfo), transform: y$4(this.transform) });
  }
};
e$6([y$3({ json: { write: true } })], h.prototype, "attributeTable", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "bandCount", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "colormap", void 0), e$6([y$3({ type: String, readOnly: true })], h.prototype, "dataType", null), e$6([y$3({ type: w$3, json: { write: true } })], h.prototype, "extent", void 0), e$6([y$3({ type: w$3, json: { write: true } })], h.prototype, "nativeExtent", null), e$6([y$3({ json: { write: true } })], h.prototype, "nativePixelSize", null), e$6([y$3({ json: { write: true } })], h.prototype, "format", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "height", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "width", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "hasMultidimensionalTranspose", null), e$6([y$3({ json: { write: true } })], h.prototype, "histograms", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "keyProperties", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "multidimensionalInfo", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "noDataValue", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "pixelSize", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "pixelType", void 0), e$6([y$3()], h.prototype, "isPseudoSpatialReference", void 0), e$6([y$3({ type: k$3, json: { write: true } })], h.prototype, "spatialReference", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "statistics", void 0), e$6([y$3({ type: n, json: { write: true } })], h.prototype, "storageInfo", void 0), e$6([y$3({ json: { write: true } })], h.prototype, "transform", void 0), h = l = e$6([n$8("esri.layers.support.RasterInfo")], h);
const u = h;
function L(e2, t2) {
  const { attributeTable: r2, bandCount: s2 } = e2;
  if (t$5(r2) || s2 > 1)
    return false;
  if (t2) {
    if (r2.fields.find((e3) => e3.name.toLowerCase() === t2.toLowerCase()) == null)
      return false;
  }
  return true;
}
function _(e2) {
  const { bandCount: t2, dataType: r2, pixelType: s2 } = e2;
  return r2 === "elevation" || r2 === "generic" && t2 === 1 && (s2 === "s16" || s2 === "f32" || s2 === "f64");
}
function V(e2) {
  const { bandCount: t2, colormap: r2 } = e2;
  return r$7(r2) && r2.length > 0 && t2 === 1;
}
let v = class extends l$6 {
  constructor(e2) {
    super(e2);
  }
  bind() {
    const { rendererJSON: e2 } = this;
    if (!e2)
      return { success: false };
    let t2;
    switch (this.lookup = { rendererJSON: {} }, e2.type) {
      case "uniqueValue":
        t2 = this._updateUVRenderer(e2);
        break;
      case "rasterColormap":
        t2 = this._updateColormapRenderer(e2);
        break;
      case "rasterStretch":
        t2 = this._updateStretchRenderer(e2);
        break;
      case "classBreaks":
        t2 = this._updateClassBreaksRenderer(e2);
        break;
      case "rasterShadedRelief":
        t2 = this._updateShadedReliefRenderer(e2);
        break;
      case "vectorField":
        t2 = this._updateVectorFieldRenderer();
        break;
      case "flowRenderer":
        t2 = this._updateFlowRenderer();
    }
    return t2;
  }
  symbolize(e2) {
    let t2 = e2 && e2.pixelBlock;
    if (!O(t2))
      return t2;
    if (e2.simpleStretchParams && this.rendererJSON.type === "rasterStretch")
      return this.simpleStretch(t2, e2.simpleStretchParams);
    try {
      let r2;
      switch (t2.pixels.length > 3 && (t2 = s$6(t2, [0, 1, 2])), this.rendererJSON.type) {
        case "uniqueValue":
        case "rasterColormap":
          r2 = this._symbolizeColormap(t2);
          break;
        case "classBreaks":
          r2 = this._symbolizeClassBreaks(t2);
          break;
        case "rasterStretch":
          r2 = this._symbolizeStretch(t2, e2.bandIds);
          break;
        case "rasterShadedRelief": {
          const s2 = e2.extent, a2 = s2.spatialReference.isGeographic, o2 = { x: (s2.xmax - s2.xmin) / t2.width, y: (s2.ymax - s2.ymin) / t2.height };
          r2 = this._symbolizeShadedRelief(t2, { isGCS: a2, resolution: o2 });
          break;
        }
      }
      return r2;
    } catch (r2) {
      return s$7.getLogger(this.declaredClass).error("symbolize", r2.message), t2;
    }
  }
  simpleStretch(e2, t2) {
    if (!O(e2))
      return e2;
    try {
      return e2.pixels.length > 3 && (e2 = s$6(e2, [0, 1, 2])), d(e2, t2);
    } catch (r2) {
      return s$7.getLogger(this.declaredClass).error("symbolize", r2.message), e2;
    }
  }
  generateWebGLParameters(e2) {
    if (["uniqueValue", "rasterColormap", "classBreaks"].includes(this.rendererJSON.type)) {
      const { indexedColormap: e3, offset: t3 } = this.lookup.colormapLut || {};
      return { colormap: e3, colormapOffset: t3, type: "lut" };
    }
    const { pixelBlock: t2, isGCS: r2, resolution: s2, bandIds: a2 } = e2, { rendererJSON: o2 } = this;
    return o2.type === "rasterStretch" ? this._generateStretchWebGLParams(t2, o2, a2) : o2.type === "rasterShadedRelief" ? this._generateShadedReliefWebGLParams(o2, r2, s2) : o2.type === "vectorField" ? this._generateVectorFieldWebGLParams(o2) : null;
  }
  _isLUTChanged(e2) {
    if (!this.lookup || !this.lookup.rendererJSON)
      return true;
    if ("colorRamp" in this.rendererJSON) {
      const t2 = this.rendererJSON.colorRamp;
      return e2 ? JSON.stringify(t2) !== JSON.stringify(this.lookup.rendererJSON.colorRamp) : (this.rendererJSON, this.lookup.rendererJSON, JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON));
    }
    return JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON);
  }
  _symbolizeColormap(e2) {
    if (this._isLUTChanged()) {
      if (!this.bind().success)
        return e2;
    }
    return f$5(e2, this.lookup.colormapLut);
  }
  _symbolizeClassBreaks(e2) {
    var _a;
    const { canUseIndexedLUT: t2 } = this._analyzeClassBreaks(this.rendererJSON);
    if (this._isLUTChanged()) {
      if (!this.bind().success)
        return e2;
    }
    return t2 ? f$5(e2, this.lookup.colormapLut) : p$6(e2, (_a = this.lookup.remapLut) != null ? _a : []);
  }
  _symbolizeStretch(e2, t2) {
    var _a, _b, _c;
    const { rasterInfo: r2 } = this, { pixelType: s2, bandCount: o2 } = r2, n2 = this.rendererJSON, i2 = ["u8", "u16", "s8", "s16"].includes(s2);
    let l2, u2;
    const { dra: c2 } = n2, { gamma: d$12 } = this.lookup;
    if (n2.stretchType === "histogramEqualization") {
      const s3 = c2 ? null : (_a = this.lookup) == null ? void 0 : _a.histogramLut, a2 = x(n2, { rasterInfo: r2, pixelBlock: e2, bandIds: t2, returnHistogramLut: !s3 }), o3 = d(e2, __spreadProps(__spreadValues({}, a2), { gamma: d$12 }));
      u2 = c$5(o3, { lut: c2 ? a2.histogramLut : s3, offset: 0 });
    } else if (i2) {
      if (c2) {
        const a2 = x(n2, { rasterInfo: r2, pixelBlock: e2, bandIds: t2 });
        l2 = u$1(__spreadProps(__spreadValues({ pixelType: s2 }, a2), { gamma: d$12 }));
      } else if (this._isLUTChanged()) {
        if (!this.bind().success)
          return e2;
        l2 = this.lookup ? this.lookup.stretchLut : null;
      } else
        l2 = this.lookup ? this.lookup.stretchLut : null;
      if (!l2)
        return e2;
      o2 > 1 && (t2 == null ? void 0 : t2.length) === ((_b = e$5(e2)) == null ? void 0 : _b.pixels.length) && (l2 == null ? void 0 : l2.lut.length) === o2 && (l2 = { lut: t2.map((e3) => l2.lut[e3]), offset: l2.offset }), u2 = c$5(e2, l2);
    } else {
      const s3 = x(n2, { rasterInfo: r2, pixelBlock: e2, bandIds: t2 });
      u2 = d(e2, __spreadProps(__spreadValues({}, s3), { gamma: d$12 }));
    }
    if (n2.colorRamp) {
      if (this._isLUTChanged(true)) {
        if (!this.bind().success)
          return e2;
      }
      u2 = f$5(u2, (_c = this.lookup) == null ? void 0 : _c.colormapLut);
    }
    return u2;
  }
  _symbolizeShadedRelief(e2, t2) {
    var _a, _b;
    const r2 = this.rendererJSON, s2 = __spreadValues(__spreadValues({}, r2), t2), o2 = l$3(e2, s2);
    if (!r2.colorRamp)
      return o2;
    let n2;
    if (this._isLUTChanged(true)) {
      if (!this.bind().success)
        return o2;
      n2 = this.lookup ? this.lookup.hsvMap : null;
    } else
      n2 = this.lookup ? this.lookup.hsvMap : null;
    if (!n2)
      return o2;
    const i2 = (_b = (_a = e$5(this.rasterInfo.statistics)) == null ? void 0 : _a[0]) != null ? _b : { min: 0, max: 8e3 };
    return s$1(o2, e2, n2, i2), o2;
  }
  _isVectorFieldData() {
    const { bandCount: e2, dataType: t2 } = this.rasterInfo;
    return e2 === 2 && (t2 === "vector-magdir" || t2 === "vector-uv");
  }
  _updateVectorFieldRenderer() {
    return this._isVectorFieldData() ? { success: true } : { success: false, error: `Unsupported data type "${this.rasterInfo.dataType}"; VectorFieldRenderer only supports "vector-magdir" and "vector-uv".` };
  }
  _updateFlowRenderer() {
    return this._isVectorFieldData() ? { success: true } : { success: false, error: `Unsupported data type "${this.rasterInfo.dataType}"; FlowRenderer only supports "vector-magdir" and "vector-uv".` };
  }
  _updateUVRenderer(e2) {
    var _a;
    const { bandCount: t2, attributeTable: r2, pixelType: s2 } = this.rasterInfo, a2 = e2.field1;
    if (!a2)
      return { success: false, error: "Unsupported renderer; missing UniqueValueRenderer.field." };
    const n2 = e2.defaultSymbol, i2 = t2 === 1 && ["u8", "s8"].includes(s2);
    if (!L(this.rasterInfo, a2) && !i2)
      return { success: false, error: "Unsupported data; UniqueValueRenderer is only supported on single band data with a valid raster attribute table." };
    const l2 = [];
    if (r$7(r2)) {
      const t3 = r2.fields.find((e3) => e3.name.toLowerCase() === "value");
      if (!t3)
        return { success: false, error: "Unsupported data; the data's raster attribute table does not have a value field." };
      r2.features.forEach((r3) => {
        var _a2, _b;
        const s3 = (_a2 = e2.uniqueValueInfos) == null ? void 0 : _a2.find((e3) => String(e3.value) === String(r3.attributes[a2])), o2 = (_b = s3 == null ? void 0 : s3.symbol) == null ? void 0 : _b.color;
        o2 ? l2.push([r3.attributes[t3.name]].concat(o2)) : n2 && l2.push([r3.attributes[t3.name]].concat(n2.color));
      });
    } else {
      if (a2.toLowerCase() !== "value")
        return { success: false, error: 'Unsupported renderer; UniqueValueRenderer.field must be "Value" when raster attribute table is not availalbe.' };
      (_a = e2.uniqueValueInfos) == null ? void 0 : _a.forEach((e3) => {
        var _a2;
        const t3 = (_a2 = e3 == null ? void 0 : e3.symbol) == null ? void 0 : _a2.color;
        t3 ? l2.push([parseInt("" + e3.value, 10)].concat(t3)) : n2 && l2.push([parseInt("" + e3.value, 10)].concat(n2 == null ? void 0 : n2.color));
      });
    }
    if (l2.length === 0)
      return { success: false, error: "Invalid UniqueValueRenderer. Cannot find matching records in the raster attribute table." };
    const u2 = a$9({ colormap: l2 });
    return this.lookup = { rendererJSON: e2, colormapLut: u2 }, this.canRenderInWebGL = true, { success: true };
  }
  _updateColormapRenderer(e2) {
    if (!V(this.rasterInfo))
      return { success: false, error: "Unsupported data; the data source does not have a colormap." };
    const t2 = e2.colormapInfos.map((e3) => [e3.value].concat(e3.color)).sort((e3, t3) => e3[0] - t3[0]);
    if (!t2 || t2.length === 0)
      return { success: false, error: "Unsupported renderer; ColormapRenderer must have meaningful colormapInfos." };
    const r2 = a$9({ colormap: t2 });
    return this.lookup = { rendererJSON: e2, colormapLut: r2 }, this.canRenderInWebGL = true, { success: true };
  }
  _updateShadedReliefRenderer(e2) {
    if (!_(this.rasterInfo))
      return { success: false, error: `Unsupported data type "${this.rasterInfo.dataType}"; ShadedReliefRenderer only supports "elevation", or single band float/s16 data.` };
    if (e2.colorRamp) {
      const r2 = h$2(e2.colorRamp, 256, true), s2 = a$9({ colormap: r2 }), a2 = [], o2 = s2.indexedColormap;
      for (let e3 = 0; e3 < o2.length; e3 += 4) {
        const r3 = y$2({ r: o2[e3], g: o2[e3 + 1], b: o2[e3 + 2] });
        a2.push([r3.h / 60, r3.s / 100, 255 * r3.v / 100]);
      }
      this.lookup = { rendererJSON: e2, colormapLut: s2, hsvMap: a2 };
    } else
      this.lookup = null;
    return this.canRenderInWebGL = true, { success: true };
  }
  _analyzeClassBreaks(e2) {
    const { attributeTable: t2, pixelType: r2 } = this.rasterInfo, s2 = r$7(t2) ? t2.fields.find((e3) => e3.name.toLowerCase() === "value") : null, a2 = r$7(t2) ? t2.fields.find((t3) => t3.name.toLowerCase() === e2.field.toLowerCase()) : null, n2 = s2 != null && a2 !== null;
    return { canUseIndexedLUT: ["u8", "u16", "s8", "s16"].includes(r2) || n2, tableValueField: s2, tableBreakField: a2 };
  }
  _updateClassBreaksRenderer(e2) {
    var _a;
    const { attributeTable: t2 } = this.rasterInfo, { canUseIndexedLUT: r2, tableValueField: s2, tableBreakField: a2 } = this._analyzeClassBreaks(e2), n2 = e2.classBreakInfos;
    if (!(n2 == null ? void 0 : n2.length))
      return { success: false, error: "Unsupported renderer; missing or invalid ClassBreaksRenderer.classBreakInfos." };
    const i2 = n2.sort((e3, t3) => e3.classMaxValue - t3.classMaxValue), l2 = i2[i2.length - 1];
    let u2 = e2.minValue;
    if (!r2) {
      const t3 = [];
      for (let e3 = 0; e3 < i2.length; e3++)
        t3.push({ value: (_a = i2[e3].classMinValue) != null ? _a : u2, mappedColor: i2[e3].symbol.color }), u2 = i2[e3].classMaxValue;
      return t3.push({ value: l2.classMaxValue, mappedColor: l2.symbol.color }), this.lookup = { rendererJSON: e2, remapLut: t3 }, this.canRenderInWebGL = false, { success: true };
    }
    const c2 = [];
    if (r$7(t2) && s2 != null && a2 !== null && s2 !== a2) {
      const r3 = s2.name, o2 = a2.name, n3 = i2[i2.length - 1], { classMaxValue: l3 } = n3;
      u2 = e2.minValue;
      for (const e3 of t2.features) {
        const t3 = e3.attributes[r3], s3 = e3.attributes[o2], a3 = s3 === l3 ? n3 : s3 < u2 ? null : i2.find(({ classMaxValue: e4 }) => e4 > s3);
        a3 && c2.push([t3].concat(a3.symbol.color));
      }
    } else {
      u2 = Math.floor(e2.minValue);
      for (let e3 = 0; e3 < i2.length; e3++) {
        const t3 = i2[e3];
        for (let e4 = u2; e4 < t3.classMaxValue; e4++)
          c2.push([e4].concat(t3.symbol.color));
        u2 = Math.ceil(t3.classMaxValue);
      }
      l2.classMaxValue === u2 && c2.push([l2.classMaxValue].concat(l2.symbol.color));
    }
    const p2 = a$9({ colormap: c2, fillUnspecified: false });
    return this.lookup = { rendererJSON: e2, colormapLut: p2 }, this.canRenderInWebGL = true, { success: true };
  }
  _isHistogramRequired(e2) {
    return e2 === "percentClip" || e2 === "histogramEqualization";
  }
  _isValidRasterStatistics(e2) {
    return r$7(e2) && e2.length > 0 && e2[0].min != null && e2[0].max != null;
  }
  _updateStretchRenderer(e2) {
    var _a, _b;
    let { stretchType: t2, dra: r2 } = e2;
    if (!(t2 === "none" || ((_a = e2.statistics) == null ? void 0 : _a.length) || this._isValidRasterStatistics(this.rasterInfo.statistics) || r2))
      return { success: false, error: "Unsupported renderer; StretchRenderer.statistics is required when dynamic range adjustment is not used." };
    const s2 = e$5(e2.histograms || this.rasterInfo.histograms);
    !this._isHistogramRequired(e2.stretchType) || (s2 == null ? void 0 : s2.length) || r2 || (t2 = "minMax");
    const { computeGamma: o2, useGamma: n2, colorRamp: i2 } = e2;
    let { gamma: l2 } = e2;
    if (n2 && o2 && !(l2 == null ? void 0 : l2.length)) {
      const t3 = ((_b = e2.statistics) == null ? void 0 : _b.length) ? e2.statistics : e$5(this.rasterInfo.statistics);
      l2 = c(this.rasterInfo.pixelType, t3);
    }
    const u2 = this.rasterInfo.pixelType, c$12 = !r2 && ["u8", "u16", "s8", "s16"].includes(u2);
    if (t2 === "histogramEqualization") {
      const t3 = s2.map((e3) => l$2(e3));
      this.lookup = { rendererJSON: e2, histogramLut: t3 };
    } else if (c$12) {
      const t3 = x(e2, { rasterInfo: this.rasterInfo }), r3 = u$1(__spreadProps(__spreadValues({ pixelType: u2 }, t3), { gamma: n2 ? l2 : null }));
      this.lookup = { rendererJSON: e2, stretchLut: r3 };
    }
    if (i2) {
      const t3 = h$2(i2, 256, true);
      this.lookup || (this.lookup = { rendererJSON: e2 }), this.lookup.colormapLut = a$9({ colormap: t3 }), this.lookup.rendererJSON = e2;
    }
    return this.lookup.gamma = n2 && (l2 == null ? void 0 : l2.length) ? l2 : null, this.canRenderInWebGL = true, { success: true };
  }
  _generateStretchWebGLParams(e2, t2, r2) {
    let s2 = null, a2 = null;
    const n2 = this.lookup && this.lookup.colormapLut;
    t2.colorRamp && n2 && (s2 = n2.indexedColormap, a2 = n2.offset), t2.stretchType === "histogramEqualization" && (t2 = __spreadProps(__spreadValues({}, t2), { stretchType: "minMax" }));
    const { gamma: i2 } = this.lookup, l2 = !!(t2.useGamma && i2 && i2.some((e3) => e3 !== 1)), { minCutOff: u2, maxCutOff: c2, outMin: p2, outMax: d2 } = x(t2, { rasterInfo: this.rasterInfo, pixelBlock: e2, bandIds: r2 });
    let h2 = 0;
    r$7(e2) && (h2 = e2.getPlaneCount(), h2 === 2 && ((e2 = e2.clone()).statistics = [e2.statistics[0]], e2.pixels = [e2.pixels[0]]));
    const m2 = Math.min(3, (r2 == null ? void 0 : r2.length) || h2 || this.rasterInfo.bandCount), f2 = new Float32Array(m2), y2 = s2 || l2 ? 1 : 255;
    let g2;
    for (g2 = 0; g2 < m2; g2++)
      f2[g2] = (d2 - p2) / (c2[g2] - u2[g2]) / y2;
    const S2 = new Float32Array(m2);
    if (l2)
      for (g2 = 0; g2 < m2; g2++)
        i2[g2] > 1 ? i2[g2] > 2 ? S2[g2] = 6.5 + (i2[g2] - 2) ** 2.5 : S2[g2] = 6.5 + 100 * (2 - i2[g2]) ** 4 : S2[g2] = 1;
    return { bandCount: m2, outMin: p2 / y2, outMax: d2 / y2, minCutOff: u2, maxCutOff: c2, factor: f2, useGamma: l2, gamma: l2 ? i2 : [1, 1, 1], gammaCorrection: l2 ? S2 : [1, 1, 1], colormap: s2, colormapOffset: a2, stretchType: t2.stretchType, type: "stretch" };
  }
  _generateShadedReliefWebGLParams(e2, t2 = false, r2 = { x: 0, y: 0 }) {
    var _a, _b, _c;
    let s2 = null, o2 = null;
    const n2 = this.lookup && this.lookup.colormapLut;
    e2.colorRamp && n2 && (s2 = n2.indexedColormap, o2 = n2.offset);
    const i2 = __spreadProps(__spreadValues({}, e2), { isGCS: t2, resolution: r2 }), l2 = n$3(i2), u2 = (_a = e$5(this.rasterInfo.statistics)) == null ? void 0 : _a[0];
    return __spreadProps(__spreadValues({}, l2), { minValue: (_b = u2 == null ? void 0 : u2.min) != null ? _b : 0, maxValue: (_c = u2 == null ? void 0 : u2.max) != null ? _c : 8e3, hillshadeType: e2.hillshadeType === "traditional" ? 0 : 1, type: "hillshade", colormap: s2, colormapOffset: o2 });
  }
  _generateVectorFieldWebGLParams(e2) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { style: t2, inputUnit: r2, outputUnit: s2, visualVariables: a2, symbolTileSize: n2, flowRepresentation: i2 } = e2;
    let l2;
    const u2 = (_b = (_a = this.rasterInfo.statistics) == null ? void 0 : _a[0].min) != null ? _b : 0, c2 = (_d = (_c = this.rasterInfo.statistics) == null ? void 0 : _c[0].max) != null ? _d : 50, p2 = (_e = a2 == null ? void 0 : a2.find((e3) => e3.type === "sizeInfo")) != null ? _e : { type: "sizeInfo", field: "Magnitude", maxDataValue: c2, maxSize: 0.8 * n2, minDataValue: u2, minSize: 0.2 * n2 }, d2 = (_f = p2.minDataValue) != null ? _f : u2, h2 = (_g = p2.maxDataValue) != null ? _g : c2, m2 = r$7(p2.maxSize) && r$7(p2.minSize) ? [p2.minSize / n2, p2.maxSize / n2] : [0.2, 0.8];
    if (t2 === "wind_speed") {
      const e3 = (m2[0] + m2[1]) / 2;
      m2[0] = m2[1] = e3;
    }
    const f2 = r$7(d2) && r$7(h2) ? [d2, h2] : null;
    if (t2 === "classified_arrow")
      if (r$7(d2) && r$7(h2) && r$7(p2)) {
        l2 = [];
        const e3 = (p2.maxDataValue - p2.minDataValue) / 5;
        for (let t3 = 0; t3 < 6; t3++)
          l2.push(p2.minDataValue + e3 * t3);
      } else
        l2 = [0, 1e-6, 3.5, 7, 10.5, 14];
    const y2 = i2 === "flow_to" === (t2 === "ocean_current_kn" || t2 === "ocean_current_m") ? 0 : Math.PI, b2 = a2 == null ? void 0 : a2.find((e3) => e3.type === "rotationInfo");
    return { breakValues: l2, dataRange: f2, inputUnit: r2, outputUnit: s2, symbolTileSize: n2, symbolPercentRange: m2, style: t2 || "single_arrow", rotation: y2, rotationType: ((_h = this.rasterInfo.storageInfo) == null ? void 0 : _h.tileInfo) && this.rasterInfo.dataType === "vector-uv" ? "geographic" : (b2 == null ? void 0 : b2.rotationType) || e2.rotationType, type: "vectorField" };
  }
};
function O(e2) {
  return r$8(e2) && e2.validPixelCount !== 0;
}
e$6([y$3({ json: { write: true } })], v.prototype, "rendererJSON", void 0), e$6([y$3({ type: u, json: { write: true } })], v.prototype, "rasterInfo", void 0), e$6([y$3({ json: { write: true } })], v.prototype, "lookup", void 0), e$6([y$3()], v.prototype, "canRenderInWebGL", void 0), v = e$6([n$8("esri.renderers.support.RasterSymbolizer")], v);
const T = v;
export { D$2 as D, G, N, O$2 as O, P, S, T, _$1 as _, a$3 as a, n as b, c$1 as c, d, u as e, f$1 as f, a$1 as g, h$2 as h, i, g as j, k, r as l, n$4 as m, n$1 as n, o$1 as o, p$1 as p, b$1 as q, r$1 as r, u$1 as u, x };
