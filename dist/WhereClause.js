import { eO as o$1, h as has } from "./index.js";
import "vue";
function a(a2, n2) {
  const t2 = l$1[a2.toLowerCase()];
  if (t2 == null)
    throw new Error("Function Not Recognised");
  if (n2.length < t2.minParams || n2.length > t2.maxParams)
    throw new Error(`Invalid Parameter count for call to ${a2.toUpperCase()}`);
  return t2.evaluate(n2);
}
function n$2(a2, n2) {
  const t2 = l$1[a2.toLowerCase()];
  return t2 != null && n2 >= t2.minParams && n2 <= t2.maxParams;
}
const l$1 = { min: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.min.apply(Math, a2[0]) }, max: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.max.apply(Math, a2[0]) }, avg: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : t$2(a2[0]) }, sum: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : r$1(a2[0]) }, stddev: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.sqrt(e$2(a2[0])) }, count: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : a2[0].length }, var: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : e$2(a2[0]) } };
function t$2(a2) {
  let n2 = 0;
  for (let l2 = 0; l2 < a2.length; l2++)
    n2 += a2[l2];
  return n2 / a2.length;
}
function r$1(a2) {
  let n2 = 0;
  for (let l2 = 0; l2 < a2.length; l2++)
    n2 += a2[l2];
  return n2;
}
function e$2(a2) {
  const n2 = t$2(a2), l2 = a2.length;
  let r2 = 0;
  for (const t2 of a2)
    r2 += (t2 - n2) ** 2;
  return l2 > 1 ? r2 / (l2 - 1) : 0;
}
class e$1 {
  constructor() {
    this.op = "+", this.day = 0, this.second = 0, this.hour = 0, this.month = 0, this.year = 0, this.minute = 0;
  }
  static _fixDefaults(a2) {
    if (a2.precision !== null || a2.secondary !== null)
      throw new Error("Primary and Secondary SqlInterval qualifiers not supported");
  }
  static createFromMilliseconds(a2) {
    const r2 = new e$1();
    return r2.second = a2 / 1e3, r2;
  }
  static createFromValueAndQualifer(a2, r2, t2) {
    let n2 = null;
    const l2 = new e$1();
    if (l2.op = t2 === "-" ? "-" : "+", r2.type === "interval-period") {
      e$1._fixDefaults(r2);
      const t3 = new RegExp("^[0-9]{1,}$");
      if (r2.period === "year" || r2.period === "month")
        throw new Error("Year-Month Intervals not supported");
      if (!t3.test(a2))
        throw new Error("Illegal Interval");
      l2[r2.period] = parseFloat(a2);
    } else {
      if (e$1._fixDefaults(r2.start), e$1._fixDefaults(r2.end), r2.start.period === "year" || r2.start.period === "month")
        throw new Error("Year-Month Intervals not supported");
      if (r2.end.period === "year" || r2.end.period === "month")
        throw new Error("Year-Month Intervals not supported");
      switch (r2.start.period) {
        case "day":
          switch (r2.end.period) {
            case "hour":
              if (n2 = new RegExp("^[0-9]{1,} [0-9]{1,}$"), !n2.test(a2))
                throw new Error("Illegal Interval");
              l2[r2.start.period] = parseFloat(a2.split(" ")[0]), l2[r2.end.period] = parseFloat(a2.split(" ")[1]);
              break;
            case "minute":
              if (n2 = new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,}$"), !n2.test(a2))
                throw new Error("Illegal Interval");
              {
                l2[r2.start.period] = parseFloat(a2.split(" ")[0]);
                const e2 = a2.split(" ")[1].split(":");
                l2.hour = parseFloat(e2[0]), l2.minute = parseFloat(e2[1]);
              }
              break;
            case "second":
              if (n2 = new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !n2.test(a2))
                throw new Error("Illegal Interval");
              {
                l2[r2.start.period] = parseFloat(a2.split(" ")[0]);
                const e2 = a2.split(" ")[1].split(":");
                l2.hour = parseFloat(e2[0]), l2.minute = parseFloat(e2[1]), l2.second = parseFloat(e2[2]);
              }
              break;
            default:
              throw new Error("Invalid Interval.");
          }
          break;
        case "hour":
          switch (r2.end.period) {
            case "minute":
              if (n2 = new RegExp("^[0-9]{1,}:[0-9]{1,}$"), !n2.test(a2))
                throw new Error("Illegal Interval");
              l2.hour = parseFloat(a2.split(":")[0]), l2.minute = parseFloat(a2.split(":")[1]);
              break;
            case "second":
              if (n2 = new RegExp("^[0-9]{1,}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !n2.test(a2))
                throw new Error("Illegal Interval");
              {
                const e2 = a2.split(":");
                l2.hour = parseFloat(e2[0]), l2.minute = parseFloat(e2[1]), l2.second = parseFloat(e2[2]);
              }
              break;
            default:
              throw new Error("Invalid Interval.");
          }
          break;
        case "minute":
          if (r2.end.period !== "second")
            throw new Error("Invalid Interval.");
          if (n2 = new RegExp("^[0-9]{1,}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !n2.test(a2))
            throw new Error("Illegal Interval");
          {
            const e2 = a2.split(":");
            l2.minute = parseFloat(e2[0]), l2.second = parseFloat(e2[1]);
          }
          break;
        default:
          throw new Error("Invalid Interval.");
      }
    }
    return l2;
  }
  valueInMilliseconds() {
    return (this.op === "-" ? -1 : 1) * (1e3 * this.second + 60 * this.minute * 1e3 + 60 * this.hour * 60 * 1e3 + 24 * this.day * 60 * 60 * 1e3 + this.month * (365 / 12) * 24 * 60 * 60 * 1e3 + 365 * this.year * 24 * 60 * 60 * 1e3);
  }
}
function r(a2, e2) {
  const r2 = n$1[a2.toLowerCase()];
  if (r2 == null)
    throw new Error("Function Not Recognised");
  if (e2.length < r2.minParams || e2.length > r2.maxParams)
    throw new Error(`Invalid Parameter count for call to ${a2.toUpperCase()}`);
  return r2.evaluate(e2);
}
function t$1(a2, e2) {
  const r2 = n$1[a2.toLowerCase()];
  return r2 != null && e2 >= r2.minParams && e2 <= r2.maxParams;
}
const n$1 = { extract: { minParams: 2, maxParams: 2, evaluate: ([a2, e2]) => {
  if (e2 == null)
    return null;
  if (e2 instanceof Date)
    switch (a2.toUpperCase()) {
      case "SECOND":
        return e2.getSeconds();
      case "MINUTE":
        return e2.getMinutes();
      case "HOUR":
        return e2.getHours();
      case "DAY":
        return e2.getDate();
      case "MONTH":
        return e2.getMonth() + 1;
      case "YEAR":
        return e2.getFullYear();
    }
  throw new Error("Invalid Parameter for call to EXTRACT");
} }, substring: { minParams: 2, maxParams: 3, evaluate: (a2) => {
  if (a2.length === 2) {
    const [e2, r2] = a2;
    return e2 == null || r2 == null ? null : e2.toString().substring(r2 - 1);
  }
  if (a2.length === 3) {
    const [e2, r2, t2] = a2;
    return e2 == null || r2 == null || t2 == null ? null : t2 <= 0 ? "" : e2.toString().substring(r2 - 1, r2 + t2 - 1);
  }
} }, position: { minParams: 2, maxParams: 2, evaluate: ([a2, e2]) => a2 == null || e2 == null ? null : e2.indexOf(a2) + 1 }, trim: { minParams: 2, maxParams: 3, evaluate: (e2) => {
  const r2 = e2.length === 3, t2 = r2 ? e2[1] : " ", n2 = r2 ? e2[2] : e2[1];
  if (t2 == null || n2 == null)
    return null;
  const l2 = `(${o$1(t2)})`;
  switch (e2[0]) {
    case "BOTH":
      return n2.replace(new RegExp(`^${l2}*|${l2}*$`, "g"), "");
    case "LEADING":
      return n2.replace(new RegExp(`^${l2}*`, "g"), "");
    case "TRAILING":
      return n2.replace(new RegExp(`${l2}*$`, "g"), "");
  }
  throw new Error("Invalid Parameter for call to TRIM");
} }, abs: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.abs(a2[0]) }, ceiling: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.ceil(a2[0]) }, floor: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.floor(a2[0]) }, log: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.log(a2[0]) }, log10: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.log(a2[0]) * Math.LOG10E }, sin: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.sin(a2[0]) }, cos: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.cos(a2[0]) }, tan: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.tan(a2[0]) }, asin: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.asin(a2[0]) }, acos: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.acos(a2[0]) }, atan: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.atan(a2[0]) }, sign: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : a2[0] > 0 ? 1 : a2[1] < 0 ? -1 : 0 }, power: { minParams: 2, maxParams: 2, evaluate: (a2) => a2[0] == null || a2[1] == null ? null : a2[0] ** a2[1] }, mod: { minParams: 2, maxParams: 2, evaluate: (a2) => a2[0] == null || a2[1] == null ? null : a2[0] % a2[1] }, round: { minParams: 1, maxParams: 2, evaluate: (a2) => {
  const e2 = a2[0], r2 = a2.length === 2 ? 10 ** a2[1] : 1;
  return e2 == null ? null : Math.round(e2 * r2) / r2;
} }, truncate: { minParams: 1, maxParams: 2, evaluate: (a2) => a2[0] == null ? null : a2.length === 1 ? parseInt(a2[0].toFixed(0), 10) : parseFloat(a2[0].toFixed(a2[1])) }, char_length: { minParams: 1, maxParams: 1, evaluate: (a2) => typeof a2[0] == "string" || a2[0] instanceof String ? a2[0].length : 0 }, concat: { minParams: 1, maxParams: 1 / 0, evaluate: (a2) => {
  let e2 = "";
  for (let r2 = 0; r2 < a2.length; r2++) {
    if (a2[r2] == null)
      return null;
    e2 += a2[r2].toString();
  }
  return e2;
} }, lower: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : a2[0].toString().toLowerCase() }, upper: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : a2[0].toString().toUpperCase() } };
var n, t, e = { exports: {} };
t = function() {
  function r2(r3, n3) {
    function t3() {
      this.constructor = r3;
    }
    t3.prototype = n3.prototype, r3.prototype = new t3();
  }
  function n2(r3, t3, e3, u2) {
    var o2 = Error.call(this, r3);
    return Object.setPrototypeOf && Object.setPrototypeOf(o2, n2.prototype), o2.expected = t3, o2.found = e3, o2.location = u2, o2.name = "SyntaxError", o2;
  }
  function t2(r3, n3, t3) {
    return t3 = t3 || " ", r3.length > n3 ? r3 : (n3 -= r3.length, r3 + (t3 += t3.repeat(n3)).slice(0, n3));
  }
  function e2(r3, t3) {
    var e3, u2 = {}, o2 = (t3 = t3 !== void 0 ? t3 : {}).grammarSource, i2 = { start: ke }, s = ke, a2 = "!", c2 = "=", f2 = ">=", l2 = ">", p2 = "<=", v2 = "<>", d2 = "<", h2 = "!=", y2 = "+", b2 = "-", A2 = "*", g2 = "/", C = "@", m2 = "'", E2 = "N'", x2 = "''", L = ".", w2 = "null", T2 = "true", N2 = "false", O2 = "in", R = "is", F2 = "like", I2 = "escape", S2 = "not", M2 = "and", D2 = "or", H = "between", j = "from", U = "for", P = "substring", _2 = "extract", B = "trim", z = "position", G = "timestamp", Z = "date", W = "leading", Y = "trailing", k = "both", q = "to", K = "interval", V = "year", X = "month", $ = "day", J2 = "hour", Q = "minute", rr = "second", nr = "case", tr = "end", er = "when", ur = "then", or = "else", ir = ",", sr = "(", ar = ")", cr = "`", fr = /^[A-Za-z_\x80-\uFFFF]/, lr = /^[A-Za-z0-9_]/, pr = /^[A-Za-z0-9_.\x80-\uFFFF]/, vr = /^[^']/, dr = /^[0-9]/, hr = /^[eE]/, yr = /^[+\-]/, br = /^[ \t\n\r]/, Ar = /^[^`]/, gr = _e("!", false), Cr = _e("=", false), mr = _e(">=", false), Er = _e(">", false), xr = _e("<=", false), Lr = _e("<>", false), wr = _e("<", false), Tr = _e("!=", false), Nr = _e("+", false), Or = _e("-", false), Rr = _e("*", false), Fr = _e("/", false), Ir = Be([["A", "Z"], ["a", "z"], "_", ["\x80", "\uFFFF"]], false, false), Sr = Be([["A", "Z"], ["a", "z"], ["0", "9"], "_"], false, false), Mr = Be([["A", "Z"], ["a", "z"], ["0", "9"], "_", ".", ["\x80", "\uFFFF"]], false, false), Dr = _e("@", false), Hr = _e("'", false), jr = _e("N'", false), Ur = _e("''", false), Pr = Be(["'"], true, false), _r = _e(".", false), Br = Be([["0", "9"]], false, false), zr = Be(["e", "E"], false, false), Gr = Be(["+", "-"], false, false), Zr = _e("NULL", true), Wr = _e("TRUE", true), Yr = _e("FALSE", true), kr = _e("IN", true), qr = _e("IS", true), Kr = _e("LIKE", true), Vr = _e("ESCAPE", true), Xr = _e("NOT", true), $r = _e("AND", true), Jr = _e("OR", true), Qr = _e("BETWEEN", true), rn = _e("FROM", true), nn = _e("FOR", true), tn = _e("SUBSTRING", true), en = _e("EXTRACT", true), un = _e("TRIM", true), on = _e("POSITION", true), sn = _e("TIMESTAMP", true), an = _e("DATE", true), cn = _e("LEADING", true), fn = _e("TRAILING", true), ln = _e("BOTH", true), pn = _e("TO", true), vn = _e("INTERVAL", true), dn = _e("YEAR", true), hn = _e("MONTH", true), yn = _e("DAY", true), bn = _e("HOUR", true), An = _e("MINUTE", true), gn = _e("SECOND", true), Cn = _e("CASE", true), mn = _e("END", true), En = _e("WHEN", true), xn = _e("THEN", true), Ln = _e("ELSE", true), wn = _e(",", false), Tn = _e("(", false), Nn = _e(")", false), On = Be([" ", "	", "\n", "\r"], false, false), Rn = _e("`", false), Fn = Be(["`"], true, false), In = function(r4) {
      return r4;
    }, Sn = function(r4, n3) {
      var t4 = { type: "expression-list" }, e4 = qo(r4, n3);
      return t4.value = e4, t4;
    }, Mn = function(r4, n3) {
      return Ko(r4, n3);
    }, Dn = function(r4, n3) {
      return Ko(r4, n3);
    }, Hn = function(r4) {
      return Wo("NOT", r4);
    }, jn = function(r4, n3) {
      return n3 == "" || n3 == null || n3 == null ? r4 : n3.type == "arithmetic" ? Ko(r4, n3.tail) : Yo(n3.op, r4, n3.right, n3.escape);
    }, Un = function(r4) {
      return { type: "arithmetic", tail: r4 };
    }, Pn = function(r4, n3) {
      return { op: r4 + "NOT", right: n3 };
    }, _n = function(r4, n3) {
      return { op: r4, right: n3 };
    }, Bn = function(r4, n3, t4) {
      return { op: "NOT" + r4, right: { type: "expression-list", value: [n3, t4] } };
    }, zn = function(r4, n3, t4) {
      return { op: r4, right: { type: "expression-list", value: [n3, t4] } };
    }, Gn = function(r4) {
      return r4[0] + " " + r4[2];
    }, Zn = function(r4) {
      return r4[0] + " " + r4[2];
    }, Wn = function(r4, n3, t4) {
      return { op: r4, right: n3, escape: t4.value };
    }, Yn = function(r4, n3) {
      return { op: r4, right: n3, escape: "" };
    }, kn = function(r4, n3) {
      return { op: r4, right: n3 };
    }, qn = function(r4) {
      return { op: r4, right: { type: "expression-list", value: [] } };
    }, Kn = function(r4, n3) {
      return { op: r4, right: n3 };
    }, Vn = function(r4, n3) {
      return Ko(r4, n3);
    }, Xn = function(r4, n3) {
      return Ko(r4, n3);
    }, $n = function(r4) {
      return r4.paren = true, r4;
    }, Jn = function(r4) {
      return /^CURRENT_DATE$/i.test(r4) ? { type: "current-time", mode: "date" } : /^CURRENT_TIMESTAMP$/i.test(r4) ? { type: "current-time", mode: "timestamp" } : { type: "column-reference", table: "", column: r4 };
    }, Qn = function(r4) {
      return r4;
    }, rt = function(r4, n3) {
      return r4 + n3.join("");
    }, nt = function(r4, n3) {
      return r4 + n3.join("");
    }, tt = function(r4) {
      return { type: "parameter", value: r4[1] };
    }, et = function(r4, n3) {
      return { type: "function", name: "extract", args: { type: "expression-list", value: [{ type: "string", value: r4 }, n3] } };
    }, ut = function(r4, n3, t4) {
      return { type: "function", name: "substring", args: { type: "expression-list", value: t4 ? [r4, n3, t4[2]] : [r4, n3] } };
    }, ot = function(r4, n3, t4) {
      return { type: "function", name: "trim", args: { type: "expression-list", value: [{ type: "string", value: r4 != null ? r4 : "BOTH" }, n3, t4] } };
    }, it = function(r4, n3) {
      return { type: "function", name: "trim", args: { type: "expression-list", value: [{ type: "string", value: r4 != null ? r4 : "BOTH" }, n3] } };
    }, st = function(r4, n3) {
      return { type: "function", name: "position", args: { type: "expression-list", value: [r4, n3] } };
    }, at = function(r4, n3) {
      return { type: "function", name: r4, args: n3 || { type: "expression-list", value: [] } };
    }, ct = function(r4) {
      return { type: "timestamp", value: r4.value };
    }, ft = function(r4, n3, t4) {
      return { type: "interval", value: n3, qualifier: t4, op: r4 };
    }, lt = function(r4, n3) {
      return { type: "interval", value: r4, qualifier: n3, op: "" };
    }, pt = function(r4, n3) {
      return { type: "interval-qualifier", start: r4, end: n3 };
    }, vt = function(r4, n3) {
      return { type: "interval-period", period: r4.value, precision: n3, secondary: null };
    }, dt = function(r4) {
      return { type: "interval-period", period: r4.value, precision: null, secondary: null };
    }, ht = function(r4) {
      return { type: "interval-period", period: r4.value, precision: null, secondary: null };
    }, yt = function(r4, n3) {
      return { type: "interval-period", period: "second", precision: r4, secondary: n3 };
    }, bt = function(r4) {
      return { type: "interval-period", period: "second", precision: r4, secondary: null };
    }, At = function() {
      return { type: "interval-period", period: "second", precision: null, secondary: null };
    }, gt = function(r4, n3) {
      return { type: "interval-period", period: r4.value, precision: n3, secondary: null };
    }, Ct = function(r4) {
      return { type: "interval-period", period: r4.value, precision: null, secondary: null };
    }, mt = function(r4, n3) {
      return { type: "interval-period", period: "second", precision: r4, secondary: n3 };
    }, Et = function(r4) {
      return { type: "interval-period", period: "second", precision: r4, secondary: null };
    }, xt = function() {
      return { type: "interval-period", period: "second", precision: null, secondary: null };
    }, Lt = function() {
      return { type: "string", value: "day" };
    }, wt = function() {
      return { type: "string", value: "hour" };
    }, Tt = function() {
      return { type: "string", value: "minute" };
    }, Nt = function() {
      return { type: "string", value: "month" };
    }, Ot = function() {
      return { type: "string", value: "year" };
    }, Rt = function(r4) {
      return parseFloat(r4);
    }, Ft = function(r4) {
      return parseFloat(r4);
    }, It = function(r4) {
      return { type: "date", value: r4.value };
    }, St = function() {
      return { type: "null", value: null };
    }, Mt = function() {
      return { type: "boolean", value: true };
    }, Dt = function() {
      return { type: "boolean", value: false };
    }, Ht = function() {
      return "'";
    }, jt = function(r4) {
      return { type: "string", value: r4.join("") };
    }, Ut = function(r4, n3) {
      return { type: "case-expression", format: "simple", operand: r4, clauses: n3, else: null };
    }, Pt = function(r4, n3, t4) {
      return { type: "case-expression", format: "simple", operand: r4, clauses: n3, else: t4.value };
    }, _t = function(r4) {
      return { type: "case-expression", format: "searched", clauses: r4, else: null };
    }, Bt = function(r4, n3) {
      return { type: "case-expression", format: "searched", clauses: r4, else: n3.value };
    }, zt = function(r4, n3) {
      return { type: "when-clause", operand: r4, value: n3 };
    }, Gt = function(r4, n3) {
      return { type: "when-clause", operand: r4, value: n3 };
    }, Zt = function(r4) {
      return { type: "else-clause", value: r4 };
    }, Wt = function(r4) {
      return { type: "number", value: r4 };
    }, Yt = function(r4, n3, t4) {
      return parseFloat(r4 + n3 + t4);
    }, kt = function(r4, n3) {
      return parseFloat(r4 + n3);
    }, qt = function(r4, n3) {
      return parseFloat(r4 + n3);
    }, Kt = function(r4) {
      return parseFloat(r4);
    }, Vt = function(r4, n3) {
      return r4[0] + n3;
    }, Xt = function(r4) {
      return "." + (r4 != null ? r4 : "");
    }, $t = function(r4, n3) {
      return r4 + n3;
    }, Jt = function(r4) {
      return r4.join("");
    }, Qt = function(r4, n3) {
      return "e" + (n3 === null ? "" : n3);
    }, re = function() {
      return "IN";
    }, ne = function() {
      return "IS";
    }, te = function() {
      return "LIKE";
    }, ee = function() {
      return "ESCAPE";
    }, ue = function() {
      return "NOT";
    }, oe = function() {
      return "AND";
    }, ie = function() {
      return "OR";
    }, se = function() {
      return "BETWEEN";
    }, ae = function() {
      return "FROM";
    }, ce = function() {
      return "FOR";
    }, fe = function() {
      return "SUBSTRING";
    }, le = function() {
      return "EXTRACT";
    }, pe = function() {
      return "TRIM";
    }, ve = function() {
      return "POSITION";
    }, de = function() {
      return "TIMESTAMP";
    }, he = function() {
      return "DATE";
    }, ye = function() {
      return "LEADING";
    }, be = function() {
      return "TRAILING";
    }, Ae = function() {
      return "BOTH";
    }, ge = function() {
      return "TO";
    }, Ce = function() {
      return "INTERVAL";
    }, me = function() {
      return "YEAR";
    }, Ee = function() {
      return "MONTH";
    }, xe = function() {
      return "DAY";
    }, Le = function() {
      return "HOUR";
    }, we = function() {
      return "MINUTE";
    }, Te = function() {
      return "SECOND";
    }, Ne = function() {
      return "CASE";
    }, Oe = function() {
      return "END";
    }, Re = function() {
      return "WHEN";
    }, Fe = function() {
      return "THEN";
    }, Ie = function() {
      return "ELSE";
    }, Se = function(r4) {
      return r4;
    }, Me = function(r4) {
      return r4.join("");
    }, De = 0, He = [{ line: 1, column: 1 }], je = 0, Ue = [], Pe = 0;
    if ("startRule" in t3) {
      if (!(t3.startRule in i2))
        throw new Error(`Can't start parsing from rule "` + t3.startRule + '".');
      s = i2[t3.startRule];
    }
    function _e(r4, n3) {
      return { type: "literal", text: r4, ignoreCase: n3 };
    }
    function Be(r4, n3, t4) {
      return { type: "class", parts: r4, inverted: n3, ignoreCase: t4 };
    }
    function ze() {
      return { type: "end" };
    }
    function Ge(n3) {
      var t4, e4 = He[n3];
      if (e4)
        return e4;
      for (t4 = n3 - 1; !He[t4]; )
        t4--;
      for (e4 = { line: (e4 = He[t4]).line, column: e4.column }; t4 < n3; )
        r3.charCodeAt(t4) === 10 ? (e4.line++, e4.column = 1) : e4.column++, t4++;
      return He[n3] = e4, e4;
    }
    function Ze(r4, n3) {
      var t4 = Ge(r4), e4 = Ge(n3);
      return { source: o2, start: { offset: r4, line: t4.line, column: t4.column }, end: { offset: n3, line: e4.line, column: e4.column } };
    }
    function We(r4) {
      De < je || (De > je && (je = De, Ue = []), Ue.push(r4));
    }
    function Ye(r4, t4, e4) {
      return new n2(n2.buildMessage(r4, t4), r4, t4, e4);
    }
    function ke() {
      var r4, n3;
      return r4 = De, zo(), (n3 = Ke()) !== u2 ? (zo(), r4 = In(n3)) : (De = r4, r4 = u2), r4;
    }
    function qe() {
      var r4, n3, t4, e4, o3, i3, s2, a3;
      if (r4 = De, (n3 = Ke()) !== u2) {
        for (t4 = [], e4 = De, o3 = zo(), (i3 = Po()) !== u2 ? (s2 = zo(), (a3 = Ke()) !== u2 ? e4 = o3 = [o3, i3, s2, a3] : (De = e4, e4 = u2)) : (De = e4, e4 = u2); e4 !== u2; )
          t4.push(e4), e4 = De, o3 = zo(), (i3 = Po()) !== u2 ? (s2 = zo(), (a3 = Ke()) !== u2 ? e4 = o3 = [o3, i3, s2, a3] : (De = e4, e4 = u2)) : (De = e4, e4 = u2);
        r4 = Sn(n3, t4);
      } else
        De = r4, r4 = u2;
      return r4;
    }
    function Ke() {
      var r4, n3, t4, e4, o3, i3, s2, a3;
      if (r4 = De, (n3 = Ve()) !== u2) {
        for (t4 = [], e4 = De, o3 = zo(), (i3 = lo()) !== u2 ? (s2 = zo(), (a3 = Ve()) !== u2 ? e4 = o3 = [o3, i3, s2, a3] : (De = e4, e4 = u2)) : (De = e4, e4 = u2); e4 !== u2; )
          t4.push(e4), e4 = De, o3 = zo(), (i3 = lo()) !== u2 ? (s2 = zo(), (a3 = Ve()) !== u2 ? e4 = o3 = [o3, i3, s2, a3] : (De = e4, e4 = u2)) : (De = e4, e4 = u2);
        r4 = Mn(n3, t4);
      } else
        De = r4, r4 = u2;
      return r4;
    }
    function Ve() {
      var r4, n3, t4, e4, o3, i3, s2, a3;
      if (r4 = De, (n3 = Xe()) !== u2) {
        for (t4 = [], e4 = De, o3 = zo(), (i3 = fo()) !== u2 ? (s2 = zo(), (a3 = Xe()) !== u2 ? e4 = o3 = [o3, i3, s2, a3] : (De = e4, e4 = u2)) : (De = e4, e4 = u2); e4 !== u2; )
          t4.push(e4), e4 = De, o3 = zo(), (i3 = fo()) !== u2 ? (s2 = zo(), (a3 = Xe()) !== u2 ? e4 = o3 = [o3, i3, s2, a3] : (De = e4, e4 = u2)) : (De = e4, e4 = u2);
        r4 = Dn(n3, t4);
      } else
        De = r4, r4 = u2;
      return r4;
    }
    function Xe() {
      var n3, t4, e4, o3, i3;
      return n3 = De, (t4 = co()) === u2 && (t4 = De, r3.charCodeAt(De) === 33 ? (e4 = a2, De++) : (e4 = u2, Pe === 0 && We(gr)), e4 !== u2 ? (o3 = De, Pe++, r3.charCodeAt(De) === 61 ? (i3 = c2, De++) : (i3 = u2, Pe === 0 && We(Cr)), Pe--, i3 === u2 ? o3 = void 0 : (De = o3, o3 = u2), o3 !== u2 ? t4 = e4 = [e4, o3] : (De = t4, t4 = u2)) : (De = t4, t4 = u2)), t4 !== u2 ? (e4 = zo(), (o3 = Xe()) !== u2 ? n3 = Hn(o3) : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3 === u2 && (n3 = $e()), n3;
    }
    function $e() {
      var r4, n3, t4;
      return r4 = De, (n3 = su()) !== u2 ? (zo(), (t4 = Je()) === u2 && (t4 = null), r4 = jn(n3, t4)) : (De = r4, r4 = u2), r4;
    }
    function Je() {
      var r4;
      return (r4 = Qe()) === u2 && (r4 = iu()) === u2 && (r4 = tu()) === u2 && (r4 = nu()) === u2 && (r4 = ou()), r4;
    }
    function Qe() {
      var r4, n3, t4, e4, o3, i3;
      if (r4 = [], n3 = De, t4 = zo(), (e4 = ru()) !== u2 ? (o3 = zo(), (i3 = su()) !== u2 ? n3 = t4 = [t4, e4, o3, i3] : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3 !== u2)
        for (; n3 !== u2; )
          r4.push(n3), n3 = De, t4 = zo(), (e4 = ru()) !== u2 ? (o3 = zo(), (i3 = su()) !== u2 ? n3 = t4 = [t4, e4, o3, i3] : (De = n3, n3 = u2)) : (De = n3, n3 = u2);
      else
        r4 = u2;
      return r4 !== u2 && (r4 = Un(r4)), r4;
    }
    function ru() {
      var n3;
      return r3.substr(De, 2) === f2 ? (n3 = f2, De += 2) : (n3 = u2, Pe === 0 && We(mr)), n3 === u2 && (r3.charCodeAt(De) === 62 ? (n3 = l2, De++) : (n3 = u2, Pe === 0 && We(Er)), n3 === u2 && (r3.substr(De, 2) === p2 ? (n3 = p2, De += 2) : (n3 = u2, Pe === 0 && We(xr)), n3 === u2 && (r3.substr(De, 2) === v2 ? (n3 = v2, De += 2) : (n3 = u2, Pe === 0 && We(Lr)), n3 === u2 && (r3.charCodeAt(De) === 60 ? (n3 = d2, De++) : (n3 = u2, Pe === 0 && We(wr)), n3 === u2 && (r3.charCodeAt(De) === 61 ? (n3 = c2, De++) : (n3 = u2, Pe === 0 && We(Cr)), n3 === u2 && (r3.substr(De, 2) === h2 ? (n3 = h2, De += 2) : (n3 = u2, Pe === 0 && We(Tr)))))))), n3;
    }
    function nu() {
      var r4, n3, t4, e4;
      return r4 = De, (n3 = io()) !== u2 ? (zo(), (t4 = co()) !== u2 ? (zo(), (e4 = su()) !== u2 ? r4 = Pn(n3, e4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = io()) !== u2 ? (zo(), (t4 = su()) !== u2 ? r4 = _n(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)), r4;
    }
    function tu() {
      var r4, n3, t4, e4, o3, i3;
      return r4 = De, (n3 = co()) !== u2 ? (zo(), (t4 = po()) !== u2 ? (zo(), (e4 = su()) !== u2 ? (zo(), (o3 = fo()) !== u2 ? (zo(), (i3 = su()) !== u2 ? r4 = Bn(t4, e4, i3) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = po()) !== u2 ? (zo(), (t4 = su()) !== u2 ? (zo(), (e4 = fo()) !== u2 ? (zo(), (o3 = su()) !== u2 ? r4 = zn(n3, t4, o3) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)), r4;
    }
    function eu() {
      var r4, n3, t4, e4, o3;
      return r4 = De, n3 = De, (t4 = co()) !== u2 ? (e4 = zo(), (o3 = so()) !== u2 ? n3 = t4 = [t4, e4, o3] : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3 !== u2 && (n3 = Gn(n3)), (r4 = n3) === u2 && (r4 = so()), r4;
    }
    function uu() {
      var r4, n3, t4, e4, o3;
      return r4 = De, n3 = De, (t4 = co()) !== u2 ? (e4 = zo(), (o3 = oo()) !== u2 ? n3 = t4 = [t4, e4, o3] : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3 !== u2 && (n3 = Zn(n3)), (r4 = n3) === u2 && (r4 = oo()), r4;
    }
    function ou() {
      var r4, n3, t4, e4;
      return r4 = De, (n3 = eu()) !== u2 ? (zo(), (t4 = Bu()) !== u2 ? (zo(), ao() !== u2 ? (zo(), (e4 = zu()) !== u2 ? r4 = Wn(n3, t4, e4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = eu()) !== u2 ? (zo(), (t4 = Bu()) !== u2 ? r4 = Yn(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)), r4;
    }
    function iu() {
      var r4, n3, t4, e4;
      return r4 = De, (n3 = uu()) !== u2 ? (zo(), (t4 = _o()) !== u2 ? (zo(), (e4 = qe()) !== u2 ? (zo(), Bo() !== u2 ? r4 = kn(n3, e4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = uu()) !== u2 ? (zo(), (t4 = _o()) !== u2 ? (zo(), (e4 = Bo()) !== u2 ? r4 = qn(n3) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = uu()) !== u2 ? (zo(), (t4 = gu()) !== u2 ? r4 = Kn(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2))), r4;
    }
    function su() {
      var r4, n3, t4, e4, o3, i3, s2, a3;
      if (r4 = De, (n3 = cu()) !== u2) {
        for (t4 = [], e4 = De, o3 = zo(), (i3 = au()) !== u2 ? (s2 = zo(), (a3 = cu()) !== u2 ? e4 = o3 = [o3, i3, s2, a3] : (De = e4, e4 = u2)) : (De = e4, e4 = u2); e4 !== u2; )
          t4.push(e4), e4 = De, o3 = zo(), (i3 = au()) !== u2 ? (s2 = zo(), (a3 = cu()) !== u2 ? e4 = o3 = [o3, i3, s2, a3] : (De = e4, e4 = u2)) : (De = e4, e4 = u2);
        r4 = Vn(n3, t4);
      } else
        De = r4, r4 = u2;
      return r4;
    }
    function au() {
      var n3;
      return r3.charCodeAt(De) === 43 ? (n3 = y2, De++) : (n3 = u2, Pe === 0 && We(Nr)), n3 === u2 && (r3.charCodeAt(De) === 45 ? (n3 = b2, De++) : (n3 = u2, Pe === 0 && We(Or))), n3;
    }
    function cu() {
      var r4, n3, t4, e4, o3, i3, s2, a3;
      if (r4 = De, (n3 = lu()) !== u2) {
        for (t4 = [], e4 = De, o3 = zo(), (i3 = fu()) !== u2 ? (s2 = zo(), (a3 = lu()) !== u2 ? e4 = o3 = [o3, i3, s2, a3] : (De = e4, e4 = u2)) : (De = e4, e4 = u2); e4 !== u2; )
          t4.push(e4), e4 = De, o3 = zo(), (i3 = fu()) !== u2 ? (s2 = zo(), (a3 = lu()) !== u2 ? e4 = o3 = [o3, i3, s2, a3] : (De = e4, e4 = u2)) : (De = e4, e4 = u2);
        r4 = Xn(n3, t4);
      } else
        De = r4, r4 = u2;
      return r4;
    }
    function fu() {
      var n3;
      return r3.charCodeAt(De) === 42 ? (n3 = A2, De++) : (n3 = u2, Pe === 0 && We(Rr)), n3 === u2 && (r3.charCodeAt(De) === 47 ? (n3 = g2, De++) : (n3 = u2, Pe === 0 && We(Fr))), n3;
    }
    function lu() {
      var r4, n3;
      return (r4 = Nu()) === u2 && (r4 = Cu()) === u2 && (r4 = mu()) === u2 && (r4 = Eu()) === u2 && (r4 = Lu()) === u2 && (r4 = wu()) === u2 && (r4 = Gu()) === u2 && (r4 = pu()) === u2 && (r4 = gu()) === u2 && (r4 = De, _o() !== u2 ? (zo(), (n3 = Ke()) !== u2 ? (zo(), Bo() !== u2 ? r4 = $n(n3) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)), r4;
    }
    function pu() {
      var r4;
      return (r4 = vu()) !== u2 && (r4 = Jn(r4)), r4;
    }
    function vu() {
      var r4;
      return (r4 = du()) !== u2 && (r4 = Qn(r4)), r4;
    }
    function du() {
      var r4, n3, t4, e4;
      if (r4 = De, (n3 = yu()) !== u2) {
        for (t4 = [], e4 = Au(); e4 !== u2; )
          t4.push(e4), e4 = Au();
        r4 = rt(n3, t4);
      } else
        De = r4, r4 = u2;
      return r4;
    }
    function hu() {
      var r4, n3, t4, e4;
      if (r4 = De, (n3 = yu()) !== u2) {
        for (t4 = [], e4 = bu(); e4 !== u2; )
          t4.push(e4), e4 = bu();
        r4 = nt(n3, t4);
      } else
        De = r4, r4 = u2;
      return r4;
    }
    function yu() {
      var n3;
      return fr.test(r3.charAt(De)) ? (n3 = r3.charAt(De), De++) : (n3 = u2, Pe === 0 && We(Ir)), n3;
    }
    function bu() {
      var n3;
      return lr.test(r3.charAt(De)) ? (n3 = r3.charAt(De), De++) : (n3 = u2, Pe === 0 && We(Sr)), n3;
    }
    function Au() {
      var n3;
      return pr.test(r3.charAt(De)) ? (n3 = r3.charAt(De), De++) : (n3 = u2, Pe === 0 && We(Mr)), n3;
    }
    function gu() {
      var n3, t4, e4;
      return n3 = De, r3.charCodeAt(De) === 64 ? (t4 = C, De++) : (t4 = u2, Pe === 0 && We(Dr)), t4 !== u2 && (e4 = hu()) !== u2 ? n3 = t4 = [t4, e4] : (De = n3, n3 = u2), n3 !== u2 && (n3 = tt(n3)), n3;
    }
    function Cu() {
      var r4, n3, t4;
      return r4 = De, bo() !== u2 ? (zo(), _o() !== u2 ? (zo(), (n3 = Tu()) !== u2 ? (zo(), vo() !== u2 ? (zo(), (t4 = Ke()) !== u2 ? (zo(), Bo() !== u2 ? r4 = et(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4;
    }
    function mu() {
      var r4, n3, t4, e4, o3, i3, s2;
      return r4 = De, yo() !== u2 ? (zo(), _o() !== u2 ? (zo(), (n3 = Ke()) !== u2 ? (zo(), vo() !== u2 ? (zo(), (t4 = Ke()) !== u2 ? (zo(), e4 = De, (o3 = ho()) !== u2 ? (i3 = zo(), (s2 = Ke()) !== u2 ? e4 = o3 = [o3, i3, s2, zo()] : (De = e4, e4 = u2)) : (De = e4, e4 = u2), e4 === u2 && (e4 = null), (o3 = Bo()) !== u2 ? r4 = ut(n3, t4, e4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4;
    }
    function Eu() {
      var r4, n3, t4, e4;
      return r4 = De, Ao() !== u2 ? (zo(), _o() !== u2 ? (zo(), (n3 = xu()) === u2 && (n3 = null), zo(), (t4 = Ke()) !== u2 ? (zo(), vo() !== u2 ? (zo(), (e4 = Ke()) !== u2 ? (zo(), Bo() !== u2 ? r4 = ot(n3, t4, e4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, Ao() !== u2 ? (zo(), _o() !== u2 ? (zo(), (n3 = xu()) === u2 && (n3 = null), zo(), (t4 = Ke()) !== u2 ? (zo(), Bo() !== u2 ? r4 = it(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)), r4;
    }
    function xu() {
      var r4;
      return (r4 = Eo()) === u2 && (r4 = xo()) === u2 && (r4 = Lo()), r4;
    }
    function Lu() {
      var r4, n3, t4;
      return r4 = De, go() !== u2 ? (zo(), _o() !== u2 ? (zo(), (n3 = Ke()) !== u2 ? (zo(), oo() !== u2 ? (zo(), (t4 = Ke()) !== u2 ? (zo(), Bo() !== u2 ? r4 = st(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4;
    }
    function wu() {
      var r4, n3, t4;
      return r4 = De, (n3 = Zo()) !== u2 ? (zo(), _o() !== u2 ? (zo(), (t4 = qe()) === u2 && (t4 = null), zo(), Bo() !== u2 ? r4 = at(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4;
    }
    function Tu() {
      var r4;
      return (r4 = No()) === u2 && (r4 = Oo()) === u2 && (r4 = Ro()) === u2 && (r4 = Fo()) === u2 && (r4 = Io()) === u2 && (r4 = So()), r4;
    }
    function Nu() {
      var r4;
      return (r4 = zu()) === u2 && (r4 = Ku()) === u2 && (r4 = _u()) === u2 && (r4 = Pu()) === u2 && (r4 = Uu()) === u2 && (r4 = Ou()) === u2 && (r4 = Ru()), r4;
    }
    function Ou() {
      var r4, n3;
      return r4 = De, Co() !== u2 ? (zo(), (n3 = Bu()) !== u2 ? r4 = ct(n3) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4;
    }
    function Ru() {
      var n3, t4, e4, o3;
      return n3 = De, To() !== u2 ? (zo(), r3.charCodeAt(De) === 45 ? (t4 = b2, De++) : (t4 = u2, Pe === 0 && We(Or)), t4 === u2 && (r3.charCodeAt(De) === 43 ? (t4 = y2, De++) : (t4 = u2, Pe === 0 && We(Nr))), t4 !== u2 ? (zo(), (e4 = Bu()) !== u2 ? (zo(), (o3 = Fu()) !== u2 ? n3 = ft(t4, e4, o3) : (De = n3, n3 = u2)) : (De = n3, n3 = u2)) : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3 === u2 && (n3 = De, To() !== u2 ? (zo(), (t4 = Bu()) !== u2 ? (zo(), (e4 = Fu()) !== u2 ? n3 = lt(t4, e4) : (De = n3, n3 = u2)) : (De = n3, n3 = u2)) : (De = n3, n3 = u2)), n3;
    }
    function Fu() {
      var r4, n3, t4;
      return r4 = De, (n3 = Iu()) !== u2 ? (zo(), wo() !== u2 ? (zo(), (t4 = Su()) !== u2 ? r4 = pt(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = Mu()), r4;
    }
    function Iu() {
      var r4, n3, t4;
      return r4 = De, (n3 = Du()) !== u2 ? (zo(), _o() !== u2 ? (zo(), (t4 = ju()) !== u2 ? (zo(), Bo() !== u2 ? r4 = vt(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = Du()) !== u2 && (n3 = dt(n3)), r4 = n3), r4;
    }
    function Su() {
      var r4, n3, t4, e4;
      return r4 = De, (n3 = Du()) !== u2 && (n3 = ht(n3)), (r4 = n3) === u2 && (r4 = De, (n3 = So()) !== u2 ? (zo(), _o() !== u2 ? (zo(), (t4 = ju()) !== u2 ? (zo(), Po() !== u2 ? (zo(), (e4 = Hu()) !== u2 ? (zo(), Bo() !== u2 ? r4 = yt(t4, e4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = So()) !== u2 ? (zo(), _o() !== u2 ? (zo(), (t4 = ju()) !== u2 ? (zo(), Bo() !== u2 ? r4 = bt(t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = So()) !== u2 && (n3 = At()), r4 = n3))), r4;
    }
    function Mu() {
      var r4, n3, t4, e4;
      return r4 = De, (n3 = Du()) !== u2 ? (zo(), _o() !== u2 ? (zo(), (t4 = Hu()) !== u2 ? (zo(), Bo() !== u2 ? r4 = gt(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = Du()) !== u2 && (n3 = Ct(n3)), (r4 = n3) === u2 && (r4 = De, (n3 = So()) !== u2 ? (zo(), _o() !== u2 ? (zo(), (t4 = ju()) !== u2 ? (zo(), Po() !== u2 ? (zo(), (e4 = Hu()) !== u2 ? (zo(), Bo() !== u2 ? r4 = mt(t4, e4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = So()) !== u2 ? (zo(), _o() !== u2 ? (zo(), (t4 = Hu()) !== u2 ? (zo(), Bo() !== u2 ? r4 = Et(t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = So()) !== u2 && (n3 = xt()), r4 = n3)))), r4;
    }
    function Du() {
      var r4, n3;
      return r4 = De, (n3 = Ro()) !== u2 && (n3 = Lt()), (r4 = n3) === u2 && (r4 = De, (n3 = Fo()) !== u2 && (n3 = wt()), (r4 = n3) === u2 && (r4 = De, (n3 = Io()) !== u2 && (n3 = Tt()), (r4 = n3) === u2 && (r4 = De, (n3 = Oo()) !== u2 && (n3 = Nt()), (r4 = n3) === u2 && (r4 = De, (n3 = No()) !== u2 && (n3 = Ot()), r4 = n3)))), r4;
    }
    function Hu() {
      var r4;
      return (r4 = Qu()) !== u2 && (r4 = Rt(r4)), r4;
    }
    function ju() {
      var r4;
      return (r4 = Qu()) !== u2 && (r4 = Ft(r4)), r4;
    }
    function Uu() {
      var r4, n3;
      return r4 = De, mo() !== u2 ? (zo(), (n3 = Bu()) !== u2 ? r4 = It(n3) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4;
    }
    function Pu() {
      var r4;
      return (r4 = to()) !== u2 && (r4 = St()), r4;
    }
    function _u() {
      var r4, n3;
      return r4 = De, (n3 = eo()) !== u2 && (n3 = Mt()), (r4 = n3) === u2 && (r4 = De, (n3 = uo()) !== u2 && (n3 = Dt()), r4 = n3), r4;
    }
    function Bu() {
      var r4;
      return (r4 = zu()) === u2 && (r4 = gu()), r4;
    }
    function zu() {
      var n3, t4, e4, o3, i3;
      if (n3 = De, r3.charCodeAt(De) === 39 ? (t4 = m2, De++) : (t4 = u2, Pe === 0 && We(Hr)), t4 === u2 && (r3.substr(De, 2) === E2 ? (t4 = E2, De += 2) : (t4 = u2, Pe === 0 && We(jr))), t4 !== u2) {
        for (e4 = [], o3 = De, r3.substr(De, 2) === x2 ? (i3 = x2, De += 2) : (i3 = u2, Pe === 0 && We(Ur)), i3 !== u2 && (i3 = Ht()), (o3 = i3) === u2 && (vr.test(r3.charAt(De)) ? (o3 = r3.charAt(De), De++) : (o3 = u2, Pe === 0 && We(Pr))); o3 !== u2; )
          e4.push(o3), o3 = De, r3.substr(De, 2) === x2 ? (i3 = x2, De += 2) : (i3 = u2, Pe === 0 && We(Ur)), i3 !== u2 && (i3 = Ht()), (o3 = i3) === u2 && (vr.test(r3.charAt(De)) ? (o3 = r3.charAt(De), De++) : (o3 = u2, Pe === 0 && We(Pr)));
        r3.charCodeAt(De) === 39 ? (o3 = m2, De++) : (o3 = u2, Pe === 0 && We(Hr)), o3 !== u2 ? n3 = jt(e4) : (De = n3, n3 = u2);
      } else
        De = n3, n3 = u2;
      return n3;
    }
    function Gu() {
      var r4;
      return (r4 = Zu()) === u2 && (r4 = Wu()), r4;
    }
    function Zu() {
      var r4, n3, t4, e4, o3;
      if (r4 = De, Mo() !== u2)
        if (zo(), (n3 = Ke()) !== u2) {
          for (zo(), t4 = [], e4 = ku(); e4 !== u2; )
            t4.push(e4), e4 = ku();
          e4 = zo(), (o3 = Do()) !== u2 ? r4 = Ut(n3, t4) : (De = r4, r4 = u2);
        } else
          De = r4, r4 = u2;
      else
        De = r4, r4 = u2;
      if (r4 === u2)
        if (r4 = De, Mo() !== u2)
          if (zo(), (n3 = Ke()) !== u2) {
            for (zo(), t4 = [], e4 = ku(); e4 !== u2; )
              t4.push(e4), e4 = ku();
            e4 = zo(), (o3 = qu()) !== u2 ? (zo(), Do() !== u2 ? r4 = Pt(n3, t4, o3) : (De = r4, r4 = u2)) : (De = r4, r4 = u2);
          } else
            De = r4, r4 = u2;
        else
          De = r4, r4 = u2;
      return r4;
    }
    function Wu() {
      var r4, n3, t4, e4;
      if (r4 = De, Mo() !== u2) {
        for (zo(), n3 = [], t4 = Yu(); t4 !== u2; )
          n3.push(t4), t4 = Yu();
        t4 = zo(), (e4 = Do()) !== u2 ? r4 = _t(n3) : (De = r4, r4 = u2);
      } else
        De = r4, r4 = u2;
      if (r4 === u2)
        if (r4 = De, Mo() !== u2) {
          for (zo(), n3 = [], t4 = Yu(); t4 !== u2; )
            n3.push(t4), t4 = Yu();
          t4 = zo(), (e4 = qu()) !== u2 ? (zo(), Do() !== u2 ? r4 = Bt(n3, e4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2);
        } else
          De = r4, r4 = u2;
      return r4;
    }
    function Yu() {
      var r4, n3, t4;
      return r4 = De, Ho() !== u2 ? (zo(), (n3 = Ke()) !== u2 ? (zo(), jo() !== u2 ? (zo(), (t4 = Ke()) !== u2 ? r4 = zt(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4;
    }
    function ku() {
      var r4, n3, t4;
      return r4 = De, Ho() !== u2 ? (zo(), (n3 = Ke()) !== u2 ? (zo(), jo() !== u2 ? (zo(), (t4 = Ke()) !== u2 ? r4 = Gt(n3, t4) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4;
    }
    function qu() {
      var r4, n3;
      return r4 = De, Uo() !== u2 ? (zo(), (n3 = Ke()) !== u2 ? r4 = Zt(n3) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4;
    }
    function Ku() {
      var r4, n3, t4, e4;
      return r4 = De, (n3 = Vu()) !== u2 ? (t4 = De, Pe++, e4 = yu(), Pe--, e4 === u2 ? t4 = void 0 : (De = t4, t4 = u2), t4 !== u2 ? r4 = Wt(n3) : (De = r4, r4 = u2)) : (De = r4, r4 = u2), r4;
    }
    function Vu() {
      var r4, n3, t4, e4;
      return r4 = De, (n3 = Xu()) !== u2 && (t4 = $u()) !== u2 && (e4 = Ju()) !== u2 ? r4 = Yt(n3, t4, e4) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = Xu()) !== u2 && (t4 = $u()) !== u2 ? r4 = kt(n3, t4) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = Xu()) !== u2 && (t4 = Ju()) !== u2 ? r4 = qt(n3, t4) : (De = r4, r4 = u2), r4 === u2 && (r4 = De, (n3 = Xu()) !== u2 && (n3 = Kt(n3)), r4 = n3))), r4;
    }
    function Xu() {
      var n3, t4, e4;
      return (n3 = Qu()) === u2 && (n3 = De, r3.charCodeAt(De) === 45 ? (t4 = b2, De++) : (t4 = u2, Pe === 0 && We(Or)), t4 === u2 && (r3.charCodeAt(De) === 43 ? (t4 = y2, De++) : (t4 = u2, Pe === 0 && We(Nr))), t4 !== u2 && (e4 = Qu()) !== u2 ? n3 = Vt(t4, e4) : (De = n3, n3 = u2)), n3;
    }
    function $u() {
      var n3, t4, e4;
      return n3 = De, r3.charCodeAt(De) === 46 ? (t4 = L, De++) : (t4 = u2, Pe === 0 && We(_r)), t4 !== u2 ? ((e4 = Qu()) === u2 && (e4 = null), n3 = Xt(e4)) : (De = n3, n3 = u2), n3;
    }
    function Ju() {
      var r4, n3, t4;
      return r4 = De, (n3 = no()) !== u2 && (t4 = Qu()) !== u2 ? r4 = $t(n3, t4) : (De = r4, r4 = u2), r4;
    }
    function Qu() {
      var r4, n3;
      if (r4 = [], (n3 = ro()) !== u2)
        for (; n3 !== u2; )
          r4.push(n3), n3 = ro();
      else
        r4 = u2;
      return r4 !== u2 && (r4 = Jt(r4)), r4;
    }
    function ro() {
      var n3;
      return dr.test(r3.charAt(De)) ? (n3 = r3.charAt(De), De++) : (n3 = u2, Pe === 0 && We(Br)), n3;
    }
    function no() {
      var n3, t4, e4;
      return n3 = De, hr.test(r3.charAt(De)) ? (t4 = r3.charAt(De), De++) : (t4 = u2, Pe === 0 && We(zr)), t4 !== u2 ? (yr.test(r3.charAt(De)) ? (e4 = r3.charAt(De), De++) : (e4 = u2, Pe === 0 && We(Gr)), e4 === u2 && (e4 = null), n3 = Qt(t4, e4)) : (De = n3, n3 = u2), n3;
    }
    function to() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === w2 ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(Zr)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = t4 = [t4, e4] : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function eo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === T2 ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(Wr)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = t4 = [t4, e4] : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function uo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 5).toLowerCase() === N2 ? (t4 = r3.substr(De, 5), De += 5) : (t4 = u2, Pe === 0 && We(Yr)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = t4 = [t4, e4] : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function oo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 2).toLowerCase() === O2 ? (t4 = r3.substr(De, 2), De += 2) : (t4 = u2, Pe === 0 && We(kr)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = re() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function io() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 2).toLowerCase() === R ? (t4 = r3.substr(De, 2), De += 2) : (t4 = u2, Pe === 0 && We(qr)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = ne() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function so() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === F2 ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(Kr)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = te() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function ao() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 6).toLowerCase() === I2 ? (t4 = r3.substr(De, 6), De += 6) : (t4 = u2, Pe === 0 && We(Vr)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = ee() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function co() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 3).toLowerCase() === S2 ? (t4 = r3.substr(De, 3), De += 3) : (t4 = u2, Pe === 0 && We(Xr)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = ue() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function fo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 3).toLowerCase() === M2 ? (t4 = r3.substr(De, 3), De += 3) : (t4 = u2, Pe === 0 && We($r)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = oe() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function lo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 2).toLowerCase() === D2 ? (t4 = r3.substr(De, 2), De += 2) : (t4 = u2, Pe === 0 && We(Jr)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = ie() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function po() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 7).toLowerCase() === H ? (t4 = r3.substr(De, 7), De += 7) : (t4 = u2, Pe === 0 && We(Qr)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = se() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function vo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === j ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(rn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = ae() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function ho() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 3).toLowerCase() === U ? (t4 = r3.substr(De, 3), De += 3) : (t4 = u2, Pe === 0 && We(nn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = ce() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function yo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 9).toLowerCase() === P ? (t4 = r3.substr(De, 9), De += 9) : (t4 = u2, Pe === 0 && We(tn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = fe() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function bo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 7).toLowerCase() === _2 ? (t4 = r3.substr(De, 7), De += 7) : (t4 = u2, Pe === 0 && We(en)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = le() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Ao() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === B ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(un)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = pe() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function go() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 8).toLowerCase() === z ? (t4 = r3.substr(De, 8), De += 8) : (t4 = u2, Pe === 0 && We(on)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = ve() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Co() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 9).toLowerCase() === G ? (t4 = r3.substr(De, 9), De += 9) : (t4 = u2, Pe === 0 && We(sn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = de() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function mo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === Z ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(an)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = he() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Eo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 7).toLowerCase() === W ? (t4 = r3.substr(De, 7), De += 7) : (t4 = u2, Pe === 0 && We(cn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = ye() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function xo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 8).toLowerCase() === Y ? (t4 = r3.substr(De, 8), De += 8) : (t4 = u2, Pe === 0 && We(fn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = be() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Lo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === k ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(ln)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = Ae() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function wo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 2).toLowerCase() === q ? (t4 = r3.substr(De, 2), De += 2) : (t4 = u2, Pe === 0 && We(pn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = ge() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function To() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 8).toLowerCase() === K ? (t4 = r3.substr(De, 8), De += 8) : (t4 = u2, Pe === 0 && We(vn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = Ce() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function No() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === V ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(dn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = me() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Oo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 5).toLowerCase() === X ? (t4 = r3.substr(De, 5), De += 5) : (t4 = u2, Pe === 0 && We(hn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = Ee() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Ro() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 3).toLowerCase() === $ ? (t4 = r3.substr(De, 3), De += 3) : (t4 = u2, Pe === 0 && We(yn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = xe() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Fo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === J2 ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(bn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = Le() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Io() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 6).toLowerCase() === Q ? (t4 = r3.substr(De, 6), De += 6) : (t4 = u2, Pe === 0 && We(An)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = we() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function So() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 6).toLowerCase() === rr ? (t4 = r3.substr(De, 6), De += 6) : (t4 = u2, Pe === 0 && We(gn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = Te() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Mo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === nr ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(Cn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = Ne() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Do() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 3).toLowerCase() === tr ? (t4 = r3.substr(De, 3), De += 3) : (t4 = u2, Pe === 0 && We(mn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = Oe() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Ho() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === er ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(En)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = Re() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function jo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === ur ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(xn)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = Fe() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Uo() {
      var n3, t4, e4, o3;
      return n3 = De, r3.substr(De, 4).toLowerCase() === or ? (t4 = r3.substr(De, 4), De += 4) : (t4 = u2, Pe === 0 && We(Ln)), t4 !== u2 ? (e4 = De, Pe++, o3 = bu(), Pe--, o3 === u2 ? e4 = void 0 : (De = e4, e4 = u2), e4 !== u2 ? n3 = Ie() : (De = n3, n3 = u2)) : (De = n3, n3 = u2), n3;
    }
    function Po() {
      var n3;
      return r3.charCodeAt(De) === 44 ? (n3 = ir, De++) : (n3 = u2, Pe === 0 && We(wn)), n3;
    }
    function _o() {
      var n3;
      return r3.charCodeAt(De) === 40 ? (n3 = sr, De++) : (n3 = u2, Pe === 0 && We(Tn)), n3;
    }
    function Bo() {
      var n3;
      return r3.charCodeAt(De) === 41 ? (n3 = ar, De++) : (n3 = u2, Pe === 0 && We(Nn)), n3;
    }
    function zo() {
      var r4, n3;
      for (r4 = [], n3 = Go(); n3 !== u2; )
        r4.push(n3), n3 = Go();
      return r4;
    }
    function Go() {
      var n3;
      return br.test(r3.charAt(De)) ? (n3 = r3.charAt(De), De++) : (n3 = u2, Pe === 0 && We(On)), n3;
    }
    function Zo() {
      var n3, t4, e4, o3;
      if (n3 = De, (t4 = hu()) !== u2 && (t4 = Se(t4)), (n3 = t4) === u2)
        if (n3 = De, r3.charCodeAt(De) === 96 ? (t4 = cr, De++) : (t4 = u2, Pe === 0 && We(Rn)), t4 !== u2) {
          if (e4 = [], Ar.test(r3.charAt(De)) ? (o3 = r3.charAt(De), De++) : (o3 = u2, Pe === 0 && We(Fn)), o3 !== u2)
            for (; o3 !== u2; )
              e4.push(o3), Ar.test(r3.charAt(De)) ? (o3 = r3.charAt(De), De++) : (o3 = u2, Pe === 0 && We(Fn));
          else
            e4 = u2;
          e4 !== u2 ? (r3.charCodeAt(De) === 96 ? (o3 = cr, De++) : (o3 = u2, Pe === 0 && We(Rn)), o3 !== u2 ? n3 = Me(e4) : (De = n3, n3 = u2)) : (De = n3, n3 = u2);
        } else
          De = n3, n3 = u2;
      return n3;
    }
    function Wo(r4, n3) {
      return { type: "unary-expression", operator: r4, expr: n3 };
    }
    function Yo(r4, n3, t4, e4) {
      var u3 = { type: "binary-expression", operator: r4, left: n3, right: t4 };
      return e4 !== void 0 && (u3.escape = e4), u3;
    }
    function ko(r4, n3) {
      for (var t4 = [r4], e4 = 0; e4 < n3.length; e4++)
        t4.push(n3[e4][3]);
      return t4;
    }
    function qo(r4, n3, t4) {
      return ko(r4, n3);
    }
    function Ko(r4, n3) {
      for (var t4 = r4, e4 = 0; e4 < n3.length; e4++)
        t4 = Yo(n3[e4][1], t4, n3[e4][3]);
      return t4;
    }
    if ((e3 = s()) !== u2 && De === r3.length)
      return e3;
    throw e3 !== u2 && De < r3.length && We(ze()), Ye(Ue, je < r3.length ? r3.charAt(je) : null, je < r3.length ? Ze(je, je + 1) : Ze(je, je));
  }
  return r2(n2, Error), n2.prototype.format = function(r3) {
    var n3 = "Error: " + this.message;
    if (this.location) {
      var e3, u2 = null;
      for (e3 = 0; e3 < r3.length; e3++)
        if (r3[e3].source === this.location.source) {
          u2 = r3[e3].text.split(/\r\n|\n|\r/g);
          break;
        }
      var o2 = this.location.start, i2 = this.location.source + ":" + o2.line + ":" + o2.column;
      if (u2) {
        var s = this.location.end, a2 = t2("", o2.line.toString().length, " "), c2 = u2[o2.line - 1], f2 = (o2.line === s.line ? s.column : c2.length + 1) - o2.column || 1;
        n3 += "\n --> " + i2 + "\n" + a2 + " |\n" + o2.line + " | " + c2 + "\n" + a2 + " | " + t2("", o2.column - 1, " ") + t2("", f2, "^");
      } else
        n3 += "\n at " + i2;
    }
    return n3;
  }, n2.buildMessage = function(r3, n3) {
    var t3 = { literal: function(r4) {
      return '"' + u2(r4.text) + '"';
    }, class: function(r4) {
      var n4 = r4.parts.map(function(r5) {
        return Array.isArray(r5) ? o2(r5[0]) + "-" + o2(r5[1]) : o2(r5);
      });
      return "[" + (r4.inverted ? "^" : "") + n4.join("") + "]";
    }, any: function() {
      return "any character";
    }, end: function() {
      return "end of input";
    }, other: function(r4) {
      return r4.description;
    } };
    function e3(r4) {
      return r4.charCodeAt(0).toString(16).toUpperCase();
    }
    function u2(r4) {
      return r4.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(r5) {
        return "\\x0" + e3(r5);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(r5) {
        return "\\x" + e3(r5);
      });
    }
    function o2(r4) {
      return r4.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(r5) {
        return "\\x0" + e3(r5);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(r5) {
        return "\\x" + e3(r5);
      });
    }
    function i2(r4) {
      return t3[r4.type](r4);
    }
    function s(r4) {
      var n4, t4, e4 = r4.map(i2);
      if (e4.sort(), e4.length > 0) {
        for (n4 = 1, t4 = 1; n4 < e4.length; n4++)
          e4[n4 - 1] !== e4[n4] && (e4[t4] = e4[n4], t4++);
        e4.length = t4;
      }
      switch (e4.length) {
        case 1:
          return e4[0];
        case 2:
          return e4[0] + " or " + e4[1];
        default:
          return e4.slice(0, -1).join(", ") + ", or " + e4[e4.length - 1];
      }
    }
    function a2(r4) {
      return r4 ? '"' + u2(r4) + '"' : "end of input";
    }
    return "Expected " + s(r3) + " but " + a2(n3) + " found.";
  }, { SyntaxError: n2, parse: e2 };
}, (n = e).exports && (n.exports = t());
class u$1 {
  static parse(r2) {
    return e.exports.parse(r2);
  }
}
const i = /^(\d{4})-(\d{1,2})-(\d{1,2})$/, l = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2}(\.[0-9]+)?)$/, u = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2}(\.[0-9]+)?)(\+|\-)(\d{1,2}):(\d{1,2})$/, o = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})(\+|\-)(\d{1,2}):(\d{1,2})$/, c = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/, h = new Set(["current_timestamp", "current_date", "current_time"]);
function d(e2, t2) {
  return (e2 += "").length >= t2 ? e2 : new Array(t2 - e2.length + 1).join("0") + e2;
}
function p(e2, t2, a2 = "0", r2 = "0", s = "0", n2 = "0", i2 = "", l2 = "0", u2 = "0") {
  if (i2 === "+" || i2 === "-") {
    const o2 = `${d(parseInt(e2, 10), 4)}-${d(parseInt(t2, 10), 2)}-${d(parseInt(a2, 10), 2)}`;
    let c2 = "";
    parseFloat(n2) < 10 && (c2 = "0");
    const h2 = `${d(parseInt(r2, 10), 2)}:${d(parseInt(s, 10), 2)}:${c2 + parseFloat(n2).toString()}`, p2 = `${i2}${d(parseInt(l2, 10), 2)}:${d(parseInt(u2, 10), 2)}`;
    return new Date(o2 + "T" + h2 + p2);
  }
  return new Date(parseInt(e2, 10), parseInt(t2, 10) - 1, parseInt(a2, 10), parseInt(r2, 10), parseInt(s, 10), parseFloat(n2));
}
class v {
  static makeBool(e2) {
    return g(e2);
  }
  static featureValue(e2, t2, a2, r2) {
    return M(e2, t2, a2, r2);
  }
  static equalsNull(e2) {
    return e2 === null;
  }
  static applyLike(e2, t2, a2) {
    return D(e2, t2, a2);
  }
  static ensureArray(e2) {
    return _(e2);
  }
  static applyIn(e2, t2) {
    return y(e2, t2);
  }
  static currentDate() {
    const e2 = new Date();
    return e2.setHours(0, 0, 0, 0), e2;
  }
  static makeSqlInterval(e2, t2, r2) {
    return e$1.createFromValueAndQualifer(e2, t2, r2);
  }
  static convertInterval(e2) {
    return e2 instanceof e$1 ? e2.valueInMilliseconds() : e2;
  }
  static currentTimestamp() {
    return new Date();
  }
  static compare(e2, t2, a2) {
    return E(e2, t2, a2);
  }
  static calculate(e2, t2, a2) {
    return x(e2, t2, a2);
  }
  static makeComparable(e2) {
    return b(e2);
  }
  static evaluateFunction(e2, t2) {
    return r(e2, t2);
  }
  static lookup(e2, t2) {
    const a2 = t2[e2];
    return a2 === void 0 ? null : a2;
  }
  static between(e2, t2) {
    return e2 == null || t2[0] == null || t2[1] == null ? null : e2 >= t2[0] && e2 <= t2[1];
  }
  static notbetween(e2, t2) {
    return e2 == null || t2[0] == null || t2[1] == null ? null : e2 < t2[0] || e2 > t2[1];
  }
  static ternaryNot(e2) {
    return T(e2);
  }
  static ternaryAnd(e2, t2) {
    return S(e2, t2);
  }
  static ternaryOr(e2, t2) {
    return w(e2, t2);
  }
}
class f {
  constructor(e2, t2) {
    this.fieldsIndex = t2, this._datefields = {}, this.parameters = {}, this._hasDateFunctions = void 0, this.parseTree = u$1.parse(e2);
    const { isStandardized: a2, isAggregate: r2, referencedFieldNames: s } = this._extractExpressionInfo(t2);
    this._referencedFieldNames = s, this.isStandardized = a2, this.isAggregate = r2;
  }
  static create(e2, t2) {
    return new f(e2, t2);
  }
  get fieldNames() {
    return this._referencedFieldNames;
  }
  testSet(e2, t2 = O) {
    const a2 = {};
    for (const r2 of this.fieldNames)
      a2[r2] = e2.map((e3) => t2.getAttribute(e3, r2));
    return !!this._evaluateNode(this.parseTree, { attributes: a2 }, O);
  }
  calculateValue(e2, t2 = O) {
    const r2 = this._evaluateNode(this.parseTree, e2, t2);
    return r2 instanceof e$1 ? r2.valueInMilliseconds() / 864e5 : r2;
  }
  calculateValueCompiled(e2, t2 = O) {
    return this.parseTree._compiledVersion != null ? this.parseTree._compiledVersion(e2, this.parameters, t2, this._datefields) : has("esri-csp-restrictions") ? this.calculateValue(e2, t2) : (this._compileMe(), this.parseTree._compiledVersion(e2, this.parameters, t2, this._datefields));
  }
  testFeature(e2, t2 = O) {
    return !!this._evaluateNode(this.parseTree, e2, t2);
  }
  testFeatureCompiled(e2, t2 = O) {
    return this.parseTree._compiledVersion != null ? !!this.parseTree._compiledVersion(e2, this.parameters, t2, this._datefields) : has("esri-csp-restrictions") ? this.testFeature(e2, t2) : (this._compileMe(), !!this.parseTree._compiledVersion(e2, this.parameters, t2, this._datefields));
  }
  get hasDateFunctions() {
    return this._hasDateFunctions != null || (this._hasDateFunctions = false, this._visitAll(this.parseTree, (e2) => {
      e2.type === "current-time" ? this._hasDateFunctions = true : e2.type === "function" && (this._hasDateFunctions = this._hasDateFunctions || h.has(e2.name.toLowerCase()));
    })), this._hasDateFunctions;
  }
  getFunctions() {
    const e2 = new Set();
    return this._visitAll(this.parseTree, (t2) => {
      t2.type === "function" && e2.add(t2.name.toLowerCase());
    }), Array.from(e2);
  }
  getExpressions() {
    const e2 = new Map();
    return this._visitAll(this.parseTree, (t2) => {
      if (t2.type === "function") {
        const a2 = t2.name.toLowerCase(), r2 = t2.args.value[0];
        if (r2.type === "column-reference") {
          const t3 = r2.column, s = `${a2}-${t3}`;
          e2.has(s) || e2.set(s, { aggregateType: a2, field: t3 });
        }
      }
    }), [...e2.values()];
  }
  getVariables() {
    const e2 = new Set();
    return this._visitAll(this.parseTree, (t2) => {
      t2.type === "parameter" && e2.add(t2.value.toLowerCase());
    }), Array.from(e2);
  }
  _compileMe() {
    const e2 = "return this.convertInterval(" + this.evaluateNodeToJavaScript(this.parseTree) + ")";
    this.parseTree._compiledVersion = new Function("feature", "lookups", "attributeAdapter", "datefields", e2).bind(v);
  }
  _extractExpressionInfo(t2) {
    const a2 = [], s = new Set();
    let n2 = true, i2 = true;
    return this._visitAll(this.parseTree, (l2) => {
      var _a;
      switch (l2.type) {
        case "column-reference": {
          const e2 = t2 == null ? void 0 : t2.get(l2.column);
          let r2, n3;
          e2 ? r2 = n3 = (_a = e2.name) != null ? _a : "" : (n3 = l2.column, r2 = n3.toLowerCase()), e2 && e2.name && (e2.type === "date" || e2.type === "esriFieldTypeDate") && (this._datefields[e2.name] = 1), s.has(r2) || (s.add(r2), a2.push(n3)), l2.column = n3;
          break;
        }
        case "function": {
          const { name: t3, args: a3 } = l2, s2 = a3.value.length;
          n2 && (n2 = t$1(t3, s2)), i2 && (i2 = n$2(t3, s2));
          break;
        }
      }
    }), { referencedFieldNames: Array.from(a2), isStandardized: n2, isAggregate: i2 };
  }
  _visitAll(e2, t2) {
    if (e2 != null)
      switch (t2(e2), e2.type) {
        case "when-clause":
          this._visitAll(e2.operand, t2), this._visitAll(e2.value, t2);
          break;
        case "case-expression":
          for (const a2 of e2.clauses)
            this._visitAll(a2, t2);
          e2.format === "simple" && this._visitAll(e2.operand, t2), e2.else !== null && this._visitAll(e2.else, t2);
          break;
        case "expression-list":
          for (const a2 of e2.value)
            this._visitAll(a2, t2);
          break;
        case "unary-expression":
          this._visitAll(e2.expr, t2);
          break;
        case "binary-expression":
          this._visitAll(e2.left, t2), this._visitAll(e2.right, t2);
          break;
        case "function":
          this._visitAll(e2.args, t2);
      }
  }
  evaluateNodeToJavaScript(e2) {
    switch (e2.type) {
      case "interval":
        return "this.makeSqlInterval(" + this.evaluateNodeToJavaScript(e2.value) + ", " + JSON.stringify(e2.qualifier) + "," + JSON.stringify(e2.op) + ")";
      case "case-expression": {
        let t2 = "";
        if (e2.format === "simple") {
          const a2 = "this.makeComparable(" + this.evaluateNodeToJavaScript(e2.operand) + ")";
          t2 = "( ";
          for (let r2 = 0; r2 < e2.clauses.length; r2++)
            t2 += " (" + a2 + " === this.makeComparable(" + this.evaluateNodeToJavaScript(e2.clauses[r2].operand) + ")) ? (" + this.evaluateNodeToJavaScript(e2.clauses[r2].value) + ") : ";
          e2.else !== null ? t2 += this.evaluateNodeToJavaScript(e2.else) : t2 += "null", t2 += " )";
        } else {
          t2 = "( ";
          for (let a2 = 0; a2 < e2.clauses.length; a2++)
            t2 += " this.makeBool(" + this.evaluateNodeToJavaScript(e2.clauses[a2].operand) + ")===true ? (" + this.evaluateNodeToJavaScript(e2.clauses[a2].value) + ") : ";
          e2.else !== null ? t2 += this.evaluateNodeToJavaScript(e2.else) : t2 += "null", t2 += " )";
        }
        return t2;
      }
      case "parameter":
        return "this.lookup(" + JSON.stringify(e2.value.toLowerCase()) + ",lookups)";
      case "expression-list": {
        let t2 = "[";
        for (const a2 of e2.value)
          t2 !== "[" && (t2 += ","), t2 += this.evaluateNodeToJavaScript(a2);
        return t2 += "]", t2;
      }
      case "unary-expression":
        return "this.ternaryNot(" + this.evaluateNodeToJavaScript(e2.expr) + ")";
      case "binary-expression":
        switch (e2.operator) {
          case "AND":
            return "this.ternaryAnd(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + " )";
          case "OR":
            return "this.ternaryOr(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + " )";
          case "IS":
            if (e2.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return "this.equalsNull(" + this.evaluateNodeToJavaScript(e2.left) + ")";
          case "ISNOT":
            if (e2.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return "(!(this.equalsNull(" + this.evaluateNodeToJavaScript(e2.left) + ")))";
          case "IN":
            return "this.applyIn(" + this.evaluateNodeToJavaScript(e2.left) + ",this.ensureArray(" + this.evaluateNodeToJavaScript(e2.right) + "))";
          case "NOT IN":
            return "this.ternaryNot(this.applyIn(" + this.evaluateNodeToJavaScript(e2.left) + ",this.ensureArray(" + this.evaluateNodeToJavaScript(e2.right) + ")))";
          case "BETWEEN":
            return "this.between(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ")";
          case "NOTBETWEEN":
            return "this.notbetween(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ")";
          case "LIKE":
            return "this.applyLike(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + "," + JSON.stringify(e2.escape) + ")";
          case "NOT LIKE":
            return "this.ternaryNot(this.applyLike(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + "," + JSON.stringify(e2.escape) + "))";
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return "this.compare(" + JSON.stringify(e2.operator) + "," + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ")";
          case "*":
          case "-":
          case "+":
          case "/":
            return "this.calculate(" + JSON.stringify(e2.operator) + "," + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ")";
        }
        throw new Error("Not Supported Operator " + e2.operator);
      case "null":
      case "boolean":
      case "string":
      case "number":
        return JSON.stringify(e2.value);
      case "date":
        return "(new Date(" + N(e2.value).getTime().toString() + "))";
      case "timestamp":
        return "(new Date(" + m(e2.value).getTime().toString() + "))";
      case "current-time":
        return e2.mode === "date" ? "this.currentDate()" : "this.currentTimestamp()";
      case "column-reference":
        return "this.featureValue(feature," + JSON.stringify(e2.column) + ",datefields,attributeAdapter)";
      case "function":
        return "this.evaluateFunction(" + JSON.stringify(e2.name) + "," + this.evaluateNodeToJavaScript(e2.args) + ")";
    }
    throw new Error("Unsupported sql syntax " + e2.type);
  }
  _evaluateNode(e2, r$12, n2) {
    switch (e2.type) {
      case "interval": {
        const t2 = this._evaluateNode(e2.value, r$12, n2);
        return e$1.createFromValueAndQualifer(t2, e2.qualifier, e2.op);
      }
      case "case-expression":
        if (e2.format === "simple") {
          const t2 = b(this._evaluateNode(e2.operand, r$12, n2));
          for (let a2 = 0; a2 < e2.clauses.length; a2++)
            if (t2 === b(this._evaluateNode(e2.clauses[a2].operand, r$12, n2)))
              return this._evaluateNode(e2.clauses[a2].value, r$12, n2);
          if (e2.else !== null)
            return this._evaluateNode(e2.else, r$12, n2);
        } else {
          for (let t2 = 0; t2 < e2.clauses.length; t2++)
            if (g(this._evaluateNode(e2.clauses[t2].operand, r$12, n2)))
              return this._evaluateNode(e2.clauses[t2].value, r$12, n2);
          if (e2.else !== null)
            return this._evaluateNode(e2.else, r$12, n2);
        }
        return null;
      case "parameter":
        return this.parameters[e2.value.toLowerCase()];
      case "expression-list": {
        const t2 = [];
        for (const a2 of e2.value)
          t2.push(this._evaluateNode(a2, r$12, n2));
        return t2;
      }
      case "unary-expression":
        return T(this._evaluateNode(e2.expr, r$12, n2));
      case "binary-expression":
        switch (e2.operator) {
          case "AND":
            return S(this._evaluateNode(e2.left, r$12, n2), this._evaluateNode(e2.right, r$12, n2));
          case "OR":
            return w(this._evaluateNode(e2.left, r$12, n2), this._evaluateNode(e2.right, r$12, n2));
          case "IS":
            if (e2.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return this._evaluateNode(e2.left, r$12, n2) === null;
          case "ISNOT":
            if (e2.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return this._evaluateNode(e2.left, r$12, n2) !== null;
          case "IN": {
            const t2 = _(this._evaluateNode(e2.right, r$12, n2));
            return y(this._evaluateNode(e2.left, r$12, n2), t2);
          }
          case "NOT IN": {
            const t2 = _(this._evaluateNode(e2.right, r$12, n2));
            return T(y(this._evaluateNode(e2.left, r$12, n2), t2));
          }
          case "BETWEEN": {
            const t2 = this._evaluateNode(e2.left, r$12, n2), a2 = this._evaluateNode(e2.right, r$12, n2);
            return t2 == null || a2[0] == null || a2[1] == null ? null : t2 >= b(a2[0]) && t2 <= b(a2[1]);
          }
          case "NOTBETWEEN": {
            const t2 = this._evaluateNode(e2.left, r$12, n2), a2 = this._evaluateNode(e2.right, r$12, n2);
            return t2 == null || a2[0] == null || a2[1] == null ? null : t2 < b(a2[0]) || t2 > b(a2[1]);
          }
          case "LIKE":
            return D(this._evaluateNode(e2.left, r$12, n2), this._evaluateNode(e2.right, r$12, n2), e2.escape);
          case "NOT LIKE":
            return T(D(this._evaluateNode(e2.left, r$12, n2), this._evaluateNode(e2.right, r$12, n2), e2.escape));
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return E(e2.operator, this._evaluateNode(e2.left, r$12, n2), this._evaluateNode(e2.right, r$12, n2));
          case "-":
          case "+":
          case "*":
          case "/":
            return x(e2.operator, this._evaluateNode(e2.left, r$12, n2), this._evaluateNode(e2.right, r$12, n2));
        }
      case "null":
      case "boolean":
      case "string":
      case "number":
        return e2.value;
      case "date":
        return N(e2.value);
      case "timestamp":
        return m(e2.value);
      case "current-time": {
        const t2 = new Date();
        return e2.mode === "date" && t2.setHours(0, 0, 0, 0), t2;
      }
      case "column-reference":
        return M(r$12, e2.column, this._datefields, n2);
      case "function": {
        const a$1 = this._evaluateNode(e2.args, r$12, n2);
        return this.isAggregate ? a(e2.name, a$1) : r(e2.name, a$1);
      }
    }
    throw new Error("Unsupported sql syntax " + e2.type);
  }
}
function m(e2) {
  let t2 = l.exec(e2);
  if (t2 !== null) {
    const [, e3, a2, r2, s, n2, i2] = t2;
    return p(e3, a2, r2, s, n2, i2);
  }
  if (t2 = u.exec(e2), t2 !== null) {
    const [, e3, a2, r2, s, n2, i2, l2, u2, o2] = t2;
    return p(e3, a2, r2, s, n2, i2, l2, u2, o2);
  }
  if (t2 = o.exec(e2), t2 !== null) {
    const [, e3, a2, r2, s, n2, i2, l2, u2] = t2;
    return p(e3, a2, r2, s, n2, "0", i2, l2, u2);
  }
  if (t2 = c.exec(e2), t2 !== null) {
    const [, e3, a2, r2, s, n2] = t2;
    return p(e3, a2, r2, s, n2);
  }
  if (t2 = i.exec(e2), t2 !== null) {
    const [, e3, a2, r2] = t2;
    return p(e3, a2, r2);
  }
  throw new Error("SQL Invalid Timestamp");
}
function N(e2) {
  const t2 = i.exec(e2);
  if (t2 === null)
    try {
      return m(e2);
    } catch {
      throw new Error("SQL Invalid Date");
    }
  const [, a2, r2, s] = t2;
  return new Date(parseInt(a2, 10), parseInt(r2, 10) - 1, parseInt(s, 10));
}
function g(e2) {
  return e2 === true;
}
function _(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function T(e2) {
  return e2 !== null ? e2 !== true : null;
}
function S(e2, t2) {
  return e2 != null && t2 != null ? e2 === true && t2 === true : e2 !== false && t2 !== false && null;
}
function w(e2, t2) {
  return e2 != null && t2 != null ? e2 === true || t2 === true : e2 === true || t2 === true || null;
}
function y(e2, t2) {
  if (e2 == null)
    return null;
  let a2 = false;
  for (const r2 of t2)
    if (r2 == null)
      a2 = null;
    else if (e2 === r2) {
      a2 = true;
      break;
    }
  return a2;
}
const I = "-[]/{}()*+?.\\^$|";
var J;
function A(e2, t2) {
  const a2 = t2;
  let r2 = "", s = J.Normal;
  for (let n2 = 0; n2 < e2.length; n2++) {
    const t3 = e2.charAt(n2);
    switch (s) {
      case J.Normal:
        t3 === a2 ? s = J.Escaped : I.includes(t3) ? r2 += "\\" + t3 : r2 += t3 === "%" ? ".*" : t3 === "_" ? "." : t3;
        break;
      case J.Escaped:
        I.includes(t3) ? r2 += "\\" + t3 : r2 += t3, s = J.Normal;
    }
  }
  return new RegExp("^" + r2 + "$", "m");
}
function D(e2, t2, a2) {
  if (e2 == null)
    return null;
  return A(t2, a2).test(e2);
}
function b(e2) {
  return e2 instanceof Date ? e2.valueOf() : e2;
}
function E(e2, t2, a2) {
  if (t2 == null || a2 == null)
    return null;
  const r2 = b(t2), s = b(a2);
  switch (e2) {
    case "<>":
      return r2 !== s;
    case "=":
      return r2 === s;
    case ">":
      return r2 > s;
    case "<":
      return r2 < s;
    case ">=":
      return r2 >= s;
    case "<=":
      return r2 <= s;
  }
}
function x(e2, t2, r2) {
  if (t2 instanceof e$1)
    if (r2 instanceof Date)
      switch (e2) {
        case "+":
          return new Date(t2.valueInMilliseconds() + r2.getTime());
        case "-":
          return t2.valueInMilliseconds() - r2.getTime();
        case "*":
          return t2.valueInMilliseconds() * r2.getTime();
        case "/":
          return t2.valueInMilliseconds() / r2.getTime();
      }
    else if (r2 instanceof e$1)
      switch (e2) {
        case "+":
          return e$1.createFromMilliseconds(t2.valueInMilliseconds() + r2.valueInMilliseconds());
        case "-":
          return e$1.createFromMilliseconds(t2.valueInMilliseconds() - r2.valueInMilliseconds());
        case "*":
          return t2.valueInMilliseconds() * r2.valueInMilliseconds();
        case "/":
          return t2.valueInMilliseconds() / r2.valueInMilliseconds();
      }
    else
      t2 = t2.valueInMilliseconds();
  else if (r2 instanceof e$1)
    if (t2 instanceof Date)
      switch (e2) {
        case "+":
          return new Date(r2.valueInMilliseconds() + t2.getTime());
        case "-":
          return new Date(t2.getTime() - r2.valueInMilliseconds());
        case "*":
          return t2.getTime() * r2.valueInMilliseconds();
        case "/":
          return t2.getTime() / r2.valueInMilliseconds();
      }
    else
      r2 = r2.valueInMilliseconds();
  else if (t2 instanceof Date && typeof r2 == "number")
    switch (r2 = 24 * r2 * 60 * 60 * 1e3, t2 = t2.getTime(), e2) {
      case "+":
        return new Date(t2 + r2);
      case "-":
        return new Date(t2 - r2);
      case "*":
        return new Date(t2 * r2);
      case "/":
        return new Date(t2 / r2);
    }
  else if (r2 instanceof Date && typeof t2 == "number")
    switch (t2 = 24 * t2 * 60 * 60 * 1e3, r2 = r2.getTime(), e2) {
      case "+":
        return new Date(t2 + r2);
      case "-":
        return new Date(t2 - r2);
      case "*":
        return new Date(t2 * r2);
      case "/":
        return new Date(t2 / r2);
    }
  switch (e2) {
    case "+":
      return t2 + r2;
    case "-":
      return t2 - r2;
    case "*":
      return t2 * r2;
    case "/":
      return t2 / r2;
  }
}
function F(e2) {
  return e2 && typeof e2.attributes == "object";
}
function M(e2, t2, a2, r2) {
  const s = r2.getAttribute(e2, t2);
  return s != null && a2[t2] === 1 ? new Date(s) : s;
}
!function(e2) {
  e2[e2.Normal = 0] = "Normal", e2[e2.Escaped = 1] = "Escaped";
}(J || (J = {}));
const O = { getAttribute: (e2, t2) => (F(e2) ? e2.attributes : e2)[t2] };
export { f as WhereClause, O as defaultAttributeAdapter };
