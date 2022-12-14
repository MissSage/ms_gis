var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import { eN as l$1, eO as o$1 } from "./index.js";
const n = { ar: [".", ","], bg: [",", "\xA0"], bs: [",", "."], ca: [",", "."], cs: [",", "\xA0"], da: [",", "."], de: [",", "."], "de-ch": [".", "\u2019"], el: [",", "."], en: [".", ","], "en-au": [".", ","], es: [",", "."], "es-mx": [".", ","], et: [",", "\xA0"], fi: [",", "\xA0"], fr: [",", "\u202F"], "fr-ch": [",", "\u202F"], he: [".", ","], hi: [".", ",", "#,##,##0.###"], hr: [",", "."], hu: [",", "\xA0"], id: [",", "."], it: [",", "."], "it-ch": [".", "\u2019"], ja: [".", ","], ko: [".", ","], lt: [",", "\xA0"], lv: [",", "\xA0"], mk: [",", "."], nb: [",", "\xA0"], nl: [",", "."], pl: [",", "\xA0"], pt: [",", "."], "pt-pt": [",", "\xA0"], ro: [",", "."], ru: [",", "\xA0"], sk: [",", "\xA0"], sl: [",", "."], sr: [",", "."], sv: [",", "\xA0"], th: [".", ","], tr: [",", "."], uk: [",", "\xA0"], vi: [",", "."], zh: [".", ","] };
function r(e) {
  e || (e = l$1());
  let r2 = e in n;
  if (!r2) {
    const t = e.split("-");
    t.length > 1 && t[0] in n && (e = t[0], r2 = true), r2 || (e = "en");
  }
  const [s2, l2, o2 = "#,##0.###"] = n[e];
  return { decimal: s2, group: l2, pattern: o2 };
}
function s(e, t) {
  const n2 = r((t = __spreadValues({}, t)).locale);
  t.customs = n2;
  const s2 = t.pattern || n2.pattern;
  return isNaN(e) || Math.abs(e) === 1 / 0 ? null : o(e, s2, t);
}
const l = /[#0,]*[#0](?:\.0*#*)?/;
function o(e, t, n2) {
  const r2 = (n2 = n2 || {}).customs.group, s2 = n2.customs.decimal, o2 = t.split(";"), c = o2[0];
  if ((t = o2[e < 0 ? 1 : 0] || "-" + c).includes("%"))
    e *= 100;
  else if (t.includes("\u2030"))
    e *= 1e3;
  else {
    if (t.includes("\xA4"))
      throw new Error("currency notation not supported");
    if (t.includes("E"))
      throw new Error("exponential notation not supported");
  }
  const a2 = l, p2 = c.match(a2);
  if (!p2)
    throw new Error("unable to find a number expression in pattern: " + t);
  return n2.fractional === false && (n2.places = 0), t.replace(a2, i(e, p2[0], { decimal: s2, group: r2, places: n2.places, round: n2.round }));
}
function i(e, t, n2) {
  (n2 = n2 || {}).places === true && (n2.places = 0), n2.places === 1 / 0 && (n2.places = 6);
  const r2 = t.split("."), s2 = typeof n2.places == "string" && n2.places.indexOf(",");
  let l2 = n2.places;
  s2 ? l2 = n2.places.substring(s2 + 1) : l2 >= 0 || (l2 = (r2[1] || []).length), n2.round < 0 || (e = Number(e.toFixed(Number(l2))));
  const o2 = String(Math.abs(e)).split("."), i2 = o2[1] || "";
  if (r2[1] || n2.places) {
    s2 && (n2.places = n2.places.substring(0, s2));
    const e2 = n2.places !== void 0 ? n2.places : r2[1] && r2[1].lastIndexOf("0") + 1;
    e2 > i2.length && (o2[1] = i2.padEnd(Number(e2), "0")), l2 < i2.length && (o2[1] = i2.substr(0, Number(l2)));
  } else
    o2[1] && o2.pop();
  const c = r2[0].replace(",", "");
  let a2 = c.indexOf("0");
  a2 !== -1 && (a2 = c.length - a2, a2 > o2[0].length && (o2[0] = o2[0].padStart(a2, "0")), c.includes("#") || (o2[0] = o2[0].substr(o2[0].length - a2)));
  let p2, u2, d2 = r2[0].lastIndexOf(",");
  if (d2 !== -1) {
    p2 = r2[0].length - d2 - 1;
    const e2 = r2[0].substr(0, d2);
    d2 = e2.lastIndexOf(","), d2 !== -1 && (u2 = e2.length - d2 - 1);
  }
  const g2 = [];
  for (let f2 = o2[0]; f2; ) {
    const e2 = f2.length - p2;
    g2.push(e2 > 0 ? f2.substr(e2) : f2), f2 = e2 > 0 ? f2.slice(0, e2) : "", u2 && (p2 = u2, u2 = void 0);
  }
  return o2[0] = g2.reverse().join(n2.group || ","), o2.join(n2.decimal || ".");
}
function a(t) {
  const n2 = r((t = t || {}).locale), s2 = t.pattern || n2.pattern, o2 = n2.group, i2 = n2.decimal;
  let c = 1;
  if (s2.includes("%"))
    c /= 100;
  else if (s2.includes("\u2030"))
    c /= 1e3;
  else if (s2.includes("\xA4"))
    throw new Error("currency notation not supported");
  const a2 = s2.split(";");
  a2.length === 1 && a2.push("-" + a2[0]);
  const p2 = g(a2, (n3) => (n3 = "(?:" + o$1(n3, ".") + ")").replace(l, (e) => {
    const n4 = { signed: false, separator: t.strict ? o2 : [o2, ""], fractional: t.fractional, decimal: i2, exponent: false }, r2 = e.split(".");
    let s3 = t.places;
    r2.length === 1 && c !== 1 && (r2[1] = "###"), r2.length === 1 || s3 === 0 ? n4.fractional = false : (s3 === void 0 && (s3 = t.pattern ? r2[1].lastIndexOf("0") + 1 : 1 / 0), s3 && t.fractional == null && (n4.fractional = true), !t.places && s3 < r2[1].length && (s3 += "," + r2[1].length), n4.places = s3);
    const l2 = r2[0].split(",");
    return l2.length > 1 && (n4.groupSize = l2.pop().length, l2.length > 1 && (n4.groupSize2 = l2.pop().length)), "(" + u(n4) + ")";
  }), true);
  return { regexp: p2.replace(/[\xa0 ]/g, "[\\s\\xa0]"), group: o2, decimal: i2, factor: c };
}
function p(e, t) {
  const n2 = a(t), r2 = new RegExp("^" + n2.regexp + "$").exec(e);
  if (!r2)
    return NaN;
  let s2 = r2[1];
  if (!r2[1]) {
    if (!r2[2])
      return NaN;
    s2 = r2[2], n2.factor *= -1;
  }
  return s2 = s2.replace(new RegExp("[" + n2.group + "\\s\\xa0]", "g"), "").replace(n2.decimal, "."), Number(s2) * n2.factor;
}
function u(e) {
  "places" in (e = e || {}) || (e.places = 1 / 0), typeof e.decimal != "string" && (e.decimal = "."), "fractional" in e && !/^0/.test(String(e.places)) || (e.fractional = [true, false]), "exponent" in e || (e.exponent = [true, false]), "eSigned" in e || (e.eSigned = [true, false]);
  const t = d(e), n2 = g(e.fractional, (t2) => {
    let n3 = "";
    return t2 && e.places !== 0 && (n3 = "\\" + e.decimal, e.places === 1 / 0 ? n3 = "(?:" + n3 + "\\d+)?" : n3 += "\\d{" + e.places + "}"), n3;
  }, true);
  let r2 = t + n2;
  return n2 && (r2 = "(?:(?:" + r2 + ")|(?:" + n2 + "))"), r2 + g(e.exponent, (t2) => t2 ? "([eE]" + d({ signed: e.eSigned }) + ")" : "");
}
function d(t) {
  "signed" in (t = t || {}) || (t.signed = [true, false]), "separator" in t ? "groupSize" in t || (t.groupSize = 3) : t.separator = "";
  return g(t.signed, (e) => e ? "[-+]" : "", true) + g(t.separator, (n2) => {
    if (!n2)
      return "(?:\\d+)";
    (n2 = o$1(n2)) === " " ? n2 = "\\s" : n2 === "\xA0" && (n2 = "\\s\\xa0");
    const r2 = t.groupSize, s2 = t.groupSize2;
    if (s2) {
      const e = "(?:0|[1-9]\\d{0," + (s2 - 1) + "}(?:[" + n2 + "]\\d{" + s2 + "})*[" + n2 + "]\\d{" + r2 + "})";
      return r2 - s2 > 0 ? "(?:" + e + "|(?:0|[1-9]\\d{0," + (r2 - 1) + "}))" : e;
    }
    return "(?:0|[1-9]\\d{0," + (r2 - 1) + "}(?:[" + n2 + "]\\d{" + r2 + "})*)";
  }, true);
}
const g = (e, t, n2) => {
  if (!(e instanceof Array))
    return t(e);
  const r2 = [];
  for (let s2 = 0; s2 < e.length; s2++)
    r2.push(t(e[s2]));
  return f(r2.join("|"), Boolean(n2));
}, f = (e, t) => "(" + (t ? "?:" : "") + e + ")";
export { a, p, s };
