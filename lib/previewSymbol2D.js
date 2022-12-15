var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
import { bj as l, o$ as t, fK as u$1, p0 as f$1, p1 as y$1, p2 as e$1, s, p3 as d$1, p4 as h, p5 as h$1, gX as e$2 } from "./index.js";
import { o } from "./fontUtils.js";
import "vue";
function e(r) {
  let { r: n, g: a, b: o2, a: e2 } = r;
  return e2 < 1 && (n = Math.round(e2 * n + 255 * (1 - e2)), a = Math.round(e2 * a + 255 * (1 - e2)), o2 = Math.round(e2 * o2 + 255 * (1 - e2))), new l({ r: n, g: a, b: o2 });
}
function u(t2) {
  const { r, g: n, b: a } = e(t2);
  return 0.2126 * r + 0.7152 * n + 0.0722 * a;
}
const p = "picture-fill", d = "picture-marker", f = "simple-fill", y = "simple-line", w = "simple-marker", g = "text", v = "Aa", b = t.size, x = t.maxSize, k = t.maxOutlineSize, M = t.lineWidth, z = 225, L = document.createElement("canvas");
function j(e2, t2) {
  const a = L.getContext("2d"), n = [];
  return t2 && (t2.weight && n.push(t2.weight), t2.size && n.push(t2.size + "px"), t2.family && n.push(t2.family)), a.font = n.join(" "), a.measureText(e2).width;
}
const C = 7.2 / 2.54, S = 72 / 2.54;
function F(e2) {
  if (e2.length === 0)
    return 0;
  if (e2.length > 2) {
    const t2 = e$2(1), a = parseFloat(e2);
    switch (e2.slice(-2)) {
      case "px":
        return a;
      case "pt":
        return a * t2;
      case "in":
        return 72 * a * t2;
      case "pc":
        return 12 * a * t2;
      case "mm":
        return a * C * t2;
      case "cm":
        return a * S * t2;
    }
  }
  return parseFloat(e2);
}
function E(e2) {
  const t2 = e2 == null ? void 0 : e2.size;
  return { width: t2 != null && typeof t2 == "object" && "width" in t2 ? u$1(t2.width) : null, height: t2 != null && typeof t2 == "object" && "height" in t2 ? u$1(t2.height) : null };
}
async function U(e2, t2) {
  const a = t2.fill, n = e2.color;
  if ((a == null ? void 0 : a.type) === "pattern" && n && e2.type !== p) {
    const e3 = await h$1(a.src, n.toCss(true));
    a.src = e3, t2.fill = a;
  }
}
async function Z(e2, t2, n, l2) {
  if (!("font" in e2) || !e2.font || t2.shape.type !== "text")
    return;
  try {
    await o(e2.font);
  } catch {
  }
  const { width: i } = E(l2), s2 = /[\uE600-\uE6FF]/.test(t2.shape.text);
  i != null || s2 || (n[0] = j(t2.shape.text, { weight: t2.font.weight, size: t2.font.size, family: t2.font.family }));
}
function q(e2, t2) {
  return e2 > t2 ? "dark" : "light";
}
function D(e2, t2) {
  var _a;
  const a = typeof (t2 == null ? void 0 : t2.size) == "number" ? t2 == null ? void 0 : t2.size : null, l2 = a != null ? u$1(a) : null, o2 = (t2 == null ? void 0 : t2.maxSize) != null ? u$1(t2.maxSize) : null, r = (t2 == null ? void 0 : t2.rotation) != null ? t2.rotation : "angle" in e2 ? e2.angle : null, m = f$1(e2);
  let u2 = y$1(e2);
  T(e2, 245) !== "dark" || (t2 == null ? void 0 : t2.ignoreWhiteSymbols) || (u2 = __spreadProps(__spreadValues({ width: 0.75 }, u2), { color: "#bdc3c7" }));
  const h2 = { shape: null, fill: m, stroke: u2, offset: [0, 0] };
  (u2 == null ? void 0 : u2.width) && (u2.width = Math.min(u2.width, k));
  const z2 = (u2 == null ? void 0 : u2.width) || 0;
  let L2 = (t2 == null ? void 0 : t2.size) != null && ((t2 == null ? void 0 : t2.scale) == null || (t2 == null ? void 0 : t2.scale)), C2 = 0, S2 = 0, U2 = false;
  switch (e2.type) {
    case w: {
      const a2 = e2.style, { width: i, height: s2 } = E(t2), c = i === s2 && i != null ? i : l2 != null ? l2 : Math.min(u$1(e2.size), o2 || x);
      switch (C2 = c, S2 = c, a2) {
        case "circle":
          h2.shape = { type: "circle", cx: 0, cy: 0, r: 0.5 * c }, L2 || (C2 += z2, S2 += z2);
          break;
        case "cross":
          h2.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * S2] }, { command: "L", values: [C2, 0.5 * S2] }, { command: "M", values: [0.5 * C2, 0] }, { command: "L", values: [0.5 * C2, S2] }] };
          break;
        case "diamond":
          h2.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * S2] }, { command: "L", values: [0.5 * C2, 0] }, { command: "L", values: [C2, 0.5 * S2] }, { command: "L", values: [0.5 * C2, S2] }, { command: "Z", values: [] }] }, L2 || (C2 += z2, S2 += z2);
          break;
        case "square":
          h2.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [C2, 0] }, { command: "L", values: [C2, S2] }, { command: "L", values: [0, S2] }, { command: "Z", values: [] }] }, L2 || (C2 += z2, S2 += z2), r && (U2 = true);
          break;
        case "triangle":
          h2.shape = { type: "path", path: [{ command: "M", values: [0.5 * C2, 0] }, { command: "L", values: [C2, S2] }, { command: "L", values: [0, S2] }, { command: "Z", values: [] }] }, L2 || (C2 += z2, S2 += z2), r && (U2 = true);
          break;
        case "x":
          h2.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [C2, S2] }, { command: "M", values: [C2, 0] }, { command: "L", values: [0, S2] }] }, r && (U2 = true);
          break;
        case "path":
          h2.shape = { type: "path", path: e2.path || "" }, L2 || (C2 += z2, S2 += z2), r && (U2 = true), L2 = true;
      }
      break;
    }
    case y: {
      const { width: e3, height: a2 } = E(t2), n = a2 != null ? a2 : l2 != null ? l2 : z2, i = e3 != null ? e3 : M;
      u2 && (u2.width = n), C2 = i, S2 = n;
      const s2 = ((_a = h2 == null ? void 0 : h2.stroke) == null ? void 0 : _a.cap) || "butt", o3 = s2 === "round";
      L2 = true, h2.stroke && (h2.stroke.cap = s2 === "butt" ? "square" : s2), h2.shape = { type: "path", path: [{ command: "M", values: [o3 ? n / 2 : 0, S2 / 2] }, { command: "L", values: [o3 ? C2 - n / 2 : C2, S2 / 2] }] };
      break;
    }
    case p:
    case f: {
      const e3 = typeof (t2 == null ? void 0 : t2.symbolConfig) == "object" && (t2 == null ? void 0 : t2.symbolConfig.isSquareFill), { width: a2, height: n } = E(t2);
      C2 = !e3 && a2 !== n || a2 == null ? l2 != null ? l2 : b : a2, S2 = !e3 && a2 !== n || n == null ? C2 : n, L2 || (C2 += z2, S2 += z2), L2 = true, h2.shape = e3 ? { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [C2, 0] }, { command: "L", values: [C2, S2] }, { command: "L", values: [0, S2] }, { command: "L", values: [0, 0] }, { command: "Z", values: [] }] } : e$1.fill[0];
      break;
    }
    case d: {
      const a2 = Math.min(u$1(e2.width), o2 || x), i = Math.min(u$1(e2.height), o2 || x), { width: s2, height: c } = E(t2), m2 = s2 === c && s2 != null ? s2 : l2 != null ? l2 : Math.max(a2, i), u3 = a2 / i;
      C2 = u3 <= 1 ? Math.ceil(m2 * u3) : m2, S2 = u3 <= 1 ? m2 : Math.ceil(m2 / u3), h2.shape = { type: "image", x: -Math.round(C2 / 2), y: -Math.round(S2 / 2), width: C2, height: S2, src: e2.url || "" }, r && (U2 = true);
      break;
    }
    case g: {
      const a2 = e2, i = (t2 == null ? void 0 : t2.overrideText) || a2.text || v, s2 = a2.font, { width: r2, height: c } = E(t2), m2 = c != null ? c : l2 != null ? l2 : Math.min(u$1(s2.size), o2 || x), u3 = j(i, { weight: s2.weight, size: m2, family: s2.family }), p2 = /[\uE600-\uE6FF]/.test(i);
      C2 = r2 != null ? r2 : p2 ? m2 : u3, S2 = m2;
      let d2 = 0.25 * F((s2 ? m2 : 0).toString());
      p2 && (d2 += 5), h2.shape = { type: "text", text: i, x: a2.xoffset || 0, y: a2.yoffset || d2, align: "middle", alignBaseline: a2.verticalAlignment, decoration: s2 && s2.decoration, rotated: a2.rotated, kerning: a2.kerning }, h2.font = s2 && { size: m2, style: s2.style, decoration: s2.decoration, weight: s2.weight, family: s2.family };
      break;
    }
  }
  return { shapeDescriptor: h2, size: [C2, S2], renderOptions: { node: t2 == null ? void 0 : t2.node, scale: L2, opacity: t2 == null ? void 0 : t2.opacity, rotation: r, useRotationSize: U2, effectView: t2 == null ? void 0 : t2.effectView } };
}
async function O(e2, a) {
  const { shapeDescriptor: n, size: l2, renderOptions: i } = D(e2, a);
  if (!n.shape)
    throw new s("symbolPreview: renderPreviewHTML2D", "symbol not supported.");
  await U(e2, n), await Z(e2, n, l2, a);
  const s$1 = [[n]];
  if (typeof (a == null ? void 0 : a.symbolConfig) == "object" && (a == null ? void 0 : a.symbolConfig.applyColorModulation)) {
    const e3 = 0.6 * l2[0];
    s$1.unshift([__spreadProps(__spreadValues({}, n), { offset: [-e3, 0], fill: d$1(n.fill, -0.3) })]), s$1.push([__spreadProps(__spreadValues({}, n), { offset: [e3, 0], fill: d$1(n.fill, 0.3) })]), l2[0] += 2 * e3, i.scale = false;
  }
  return h(s$1, l2, i);
}
function T(t2, a = z) {
  const n = f$1(t2), l$1 = y$1(t2), o2 = !n || "type" in n ? null : new l(n), r = (l$1 == null ? void 0 : l$1.color) ? new l(l$1 == null ? void 0 : l$1.color) : null, c = o2 ? q(u(o2), a) : null, m = r ? q(u(r), a) : null;
  return m ? c ? c === m ? c : a >= z ? "light" : "dark" : m : c;
}
export { T as getContrastingBackgroundTheme, D as getRenderSymbolParameters, O as previewSymbol2D };
