import { kf as u$2, L as r, eU as r$1, go as E$1, e_ as z, E as n, dU as i$3, co as l$4, iv as s$2, iw as a$4, $ as e$2, a0 as y$3, cn as s$3, a1 as n$1, ir as p$c, gp as T, b0 as l$5, cx as j$1, cy as n$2, V as a$5, kg as h$1, aX as y$4, s as s$4, aK as k$1, bB as E$2, ab as r$2, eZ as e$3, kh as i$4, a7 as w, ki as e$4, kj as c$4, f0 as u$3, h1 as p$d, h2 as c$5, h3 as v$1, i3 as t$4, h4 as O$1, ie as i$5, e0 as b, jb as S$1, a as r$3, aL as w$1, g as s$5, cr as w$2, i9 as p$e, iE as c$6, h7 as f$3, cD as o } from "./index.js";
import { N } from "./SceneService.js";
import { g as g$1 } from "./persistable.js";
import { v, y as y$2 } from "./quat.js";
import { e as e$1 } from "./quatf64.js";
import "vue";
import "./originUtils.js";
import "./multiOriginJSONSupportUtils.js";
import "./resourceUtils.js";
import "./mat3f64.js";
const f$2 = n(), e = e$1(), h = e$1(), i$2 = e$1(), p$b = new Float64Array([0, 0, 1]), j = new Float64Array([0, 1, 0]), k = new Float64Array([1, 0, 0]);
function l$3(s2) {
  r$1(f$2, s2), z(f$2, f$2);
  const n2 = Math.atan2(f$2[1], f$2[0]), r2 = v(e$1(), p$b, -n2);
  E$1(f$2, f$2, r2);
  const e2 = -1 * Math.atan2(f$2[2], f$2[0]);
  return [u$2(n2) + 270, u$2(e2) + 90];
}
function q(t2, n2) {
  return v(h, p$b, r(t2 - 270)), v(i$2, j, r(n2 - 90)), y$2(e, h, i$2), r$1(f$2, k), E$1(f$2, f$2, e), z(f$2, f$2), [f$2[0], f$2[1], f$2[2]];
}
let m$2 = class extends i$3(l$4) {
  constructor(t2) {
    super(t2), this.enabled = true, this.label = "", this.normal = null, this.point = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3)
      return 0;
    const [t2, o2] = l$3(this.normal);
    return s$2.normalize(a$4(t2), 0, true);
  }
  set orientation(t2) {
    const o2 = q(t2, this.tilt);
    this._set("normal", o2), this._set("orientation", t2);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3)
      return 0;
    const [t2, o2] = l$3(this.normal);
    return s$2.normalize(a$4(o2), 0, true);
  }
  set tilt(t2) {
    const o2 = q(this.orientation, t2);
    this._set("normal", o2), this._set("tilt", t2);
  }
};
e$2([y$3({ type: Boolean, json: { write: true } })], m$2.prototype, "enabled", void 0), e$2([y$3({ type: String, json: { write: true } })], m$2.prototype, "label", void 0), e$2([y$3({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$3((t2) => s$2.normalize(a$4(t2), 0, true))], m$2.prototype, "orientation", null), e$2([y$3({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$3((t2) => s$2.normalize(a$4(t2), 0, true))], m$2.prototype, "tilt", null), e$2([y$3({ type: [Number], json: { write: true } })], m$2.prototype, "normal", void 0), e$2([y$3({ type: [Number], json: { write: true } })], m$2.prototype, "point", void 0), m$2 = e$2([n$1("esri.layers.voxel.VoxelSlice")], m$2);
const c$3 = m$2;
let d$2 = class extends i$3(l$4) {
  constructor() {
    super(...arguments), this.enabled = true, this.href = null, this.id = null, this.label = "", this.normal = null, this.point = null, this.sizeInPixel = null, this.slices = null, this.timeId = 0, this.variableId = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3)
      return 0;
    const [e2, r2] = l$3(this.normal);
    return s$2.normalize(a$4(e2), 0, true);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3)
      return 0;
    const [e2, r2] = l$3(this.normal);
    return s$2.normalize(a$4(r2), 0, true);
  }
};
e$2([y$3({ type: Boolean, json: { default: true, write: true } })], d$2.prototype, "enabled", void 0), e$2([y$3({ type: String, json: { origins: { service: { read: p$c } }, write: { enabled: true, isRequired: true } } }), g$1({ origins: ["web-scene"], type: "resource", prefix: "sections", compress: true })], d$2.prototype, "href", void 0), e$2([y$3({ type: T, json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "id", void 0), e$2([y$3({ type: String, json: { write: true } })], d$2.prototype, "label", void 0), e$2([y$3({ type: Number, clonable: false, readOnly: true, range: { min: 0, max: 360 } })], d$2.prototype, "orientation", null), e$2([y$3({ type: Number, clonable: false, readOnly: true, range: { min: 0, max: 360 } })], d$2.prototype, "tilt", null), e$2([y$3({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "normal", void 0), e$2([y$3({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "point", void 0), e$2([y$3({ type: [T], json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "sizeInPixel", void 0), e$2([y$3({ type: [c$3], json: { write: true } })], d$2.prototype, "slices", void 0), e$2([y$3({ type: T, json: { default: 0, write: true } })], d$2.prototype, "timeId", void 0), e$2([y$3({ type: T, json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "variableId", void 0), d$2 = e$2([n$1("esri.layers.voxel.VoxelSection")], d$2);
const u$1 = d$2;
let t$3 = class extends l$4 {
  constructor() {
    super(...arguments), this.diffuseFactor = 0.5, this.specularFactor = 0.5;
  }
};
e$2([y$3({ type: Number, range: { min: 0, max: 1 }, json: { default: 0.5, write: true } })], t$3.prototype, "diffuseFactor", void 0), e$2([y$3({ type: Number, range: { min: 0, max: 1 }, json: { default: 0.5, write: true } })], t$3.prototype, "specularFactor", void 0), t$3 = e$2([n$1("esri.layers.voxel.VoxelSimpleShading")], t$3);
const p$a = t$3;
let s$1 = class extends l$4 {
  constructor() {
    super(...arguments), this.continuity = null, this.hasNoData = false, this.noData = 0, this.offset = 0, this.scale = 1, this.type = null;
  }
};
e$2([y$3({ type: ["discrete", "continuous"], json: { write: true } })], s$1.prototype, "continuity", void 0), e$2([y$3({ type: Boolean, json: { write: true } })], s$1.prototype, "hasNoData", void 0), e$2([y$3({ type: Number, json: { write: true } })], s$1.prototype, "noData", void 0), e$2([y$3({ type: Number, json: { write: true } })], s$1.prototype, "offset", void 0), e$2([y$3({ type: Number, json: { write: true } })], s$1.prototype, "scale", void 0), e$2([y$3({ type: String, json: { write: { enabled: true, isRequired: true } } })], s$1.prototype, "type", void 0), s$1 = e$2([n$1("esri.layers.voxel.VoxelFormat")], s$1);
const p$9 = s$1;
let i$1 = class extends l$4 {
  constructor() {
    super(...arguments), this.id = null, this.description = "", this.name = null, this.originalFormat = null, this.renderingFormat = null, this.unit = "", this.volumeId = 0, this.type = null;
  }
};
e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], i$1.prototype, "id", void 0), e$2([y$3({ type: String, json: { write: true } })], i$1.prototype, "description", void 0), e$2([y$3({ type: String, json: { write: { enabled: true, isRequired: true } } })], i$1.prototype, "name", void 0), e$2([y$3({ type: p$9, json: { write: true } })], i$1.prototype, "originalFormat", void 0), e$2([y$3({ type: p$9, json: { write: { enabled: true, isRequired: true } } })], i$1.prototype, "renderingFormat", void 0), e$2([y$3({ type: String, json: { write: true } })], i$1.prototype, "unit", void 0), e$2([y$3({ type: Number, json: { write: true } })], i$1.prototype, "volumeId", void 0), e$2([y$3({ type: ["stc-hot-spot-results", "stc-cluster-outlier-results", "stc-estimated-bin", "generic-nearest-interpolated"], json: { write: true } })], i$1.prototype, "type", void 0), i$1 = e$2([n$1("esri.layers.voxel.VoxelVariable")], i$1);
const p$8 = i$1;
let l$2 = class extends i$3(l$4) {
  constructor() {
    super(...arguments), this.color = l$5.fromArray([0, 0, 0, 0]), this.value = 0, this.enabled = true, this.label = "", this.colorLocked = true;
  }
};
e$2([y$3({ type: l$5, json: { type: [T], write: { enabled: true, isRequired: true } } })], l$2.prototype, "color", void 0), e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], l$2.prototype, "value", void 0), e$2([y$3({ type: Boolean, json: { default: true, write: true } })], l$2.prototype, "enabled", void 0), e$2([y$3({ type: String, json: { write: true } })], l$2.prototype, "label", void 0), e$2([y$3({ type: Boolean, json: { default: false } })], l$2.prototype, "colorLocked", void 0), l$2 = e$2([n$1("esri.layers.voxel.VoxelIsosurface")], l$2);
const a$3 = l$2;
let c$2 = class extends i$3(l$4) {
  constructor() {
    super(...arguments), this.color = null, this.position = 0;
  }
};
e$2([y$3({ type: l$5, json: { type: [T], write: { enabled: true, isRequired: true } } })], c$2.prototype, "color", void 0), e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], c$2.prototype, "position", void 0), c$2 = e$2([n$1("esri.layers.voxel.VoxelColorStop")], c$2);
const l$1 = c$2;
let p$7 = class extends i$3(l$4) {
  constructor() {
    super(...arguments), this.opacity = 1, this.position = 0;
  }
};
e$2([y$3({ type: Number, json: { name: "alpha", write: { enabled: true, isRequired: true } } })], p$7.prototype, "opacity", void 0), e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], p$7.prototype, "position", void 0), p$7 = e$2([n$1("esri.layers.voxel.VoxelOpacityStop")], p$7);
const i = p$7;
let p$6 = class extends i$3(l$4) {
  constructor() {
    super(...arguments), this.enabled = false, this.range = null;
  }
};
e$2([y$3({ type: Boolean, json: { default: false, write: true } })], p$6.prototype, "enabled", void 0), e$2([y$3({ type: [Number], json: { write: true } })], p$6.prototype, "range", void 0), p$6 = e$2([n$1("esri.layers.voxel.VoxelRangeFilter")], p$6);
const a$2 = p$6;
var u;
!function(o2) {
  o2[o2.Color = 1] = "Color", o2[o2.Alpha = 2] = "Alpha", o2[o2.Both = 3] = "Both";
}(u || (u = {}));
let y$1 = class extends i$3(l$4) {
  constructor(o2) {
    super(o2), this.interpolation = null, this.stretchRange = null, this.rangeFilter = null, this._colorMapSize = 256, this.colorStops = new (j$1.ofType(l$1))(), this.opacityStops = new (j$1.ofType(i))();
  }
  set colorStops(o2) {
    this._set("colorStops", n$2(o2, this._get("colorStops"), j$1.ofType(l$1)));
  }
  set opacityStops(o2) {
    this._set("opacityStops", n$2(o2, this._get("opacityStops"), j$1.ofType(i)));
  }
  getPreviousNext(o2, t2, r2) {
    let e2 = o2;
    for (; --e2 > 0 && t2[e2].type !== r2 && t2[e2].type !== u.Both; )
      ;
    let s2 = o2;
    const i2 = t2.length;
    for (; ++s2 < i2 && t2[s2].type !== r2 && t2[s2].type !== u.Both; )
      ;
    return [e2, s2];
  }
  get rasterizedTransferFunction() {
    const o2 = [];
    if (this.colorStops.length < 2)
      return o2;
    const r2 = [], e2 = [], s2 = 1e-5;
    for (const t2 of this.colorStops) {
      if (!t2.color)
        return o2;
      e2.push({ color: { r: t2.color.r, g: t2.color.g, b: t2.color.b, a: Math.round(255 * (1 - t2.color.a)) }, position: t2.position, type: u.Color });
    }
    if (this.opacityStops.length === 0)
      for (const t2 of e2)
        r2.push({ color: t2.color, position: t2.position });
    else {
      for (const t2 of this.opacityStops) {
        const o4 = a$5(t2.position, 0, 1), r3 = Math.round(255 * a$5(1 - t2.opacity, 0, 1));
        let i3 = false;
        for (const t3 of e2)
          if (t3.type === u.Color && Math.abs(t3.position - o4) < s2) {
            t3.color.a = r3, t3.type = u.Both, i3 = true;
            break;
          }
        i3 || e2.push({ color: { r: 0, g: 0, b: 0, a: r3 }, position: t2.position, type: u.Alpha });
      }
      e2.sort((o4, t2) => o4.position < t2.position ? -1 : 1);
      const o3 = e2.length;
      for (let t2 = 0; t2 < o3; ++t2) {
        const r3 = e2[t2];
        if (r3.type !== u.Both)
          if (r3.type === u.Color) {
            const [s3, i3] = this.getPreviousNext(t2, e2, u.Alpha);
            if (s3 !== -1 && i3 !== o3) {
              const o4 = (r3.position - e2[s3].position) / (e2[i3].position - e2[s3].position);
              r3.color.a = Math.round(h$1(e2[s3].color.a, e2[i3].color.a, o4));
            } else
              r3.color.a = s3 !== -1 ? e2[s3].color.a : e2[i3].color.a;
          } else {
            const [s3, i3] = this.getPreviousNext(t2, e2, u.Color);
            if (s3 !== -1 && i3 !== o3) {
              const o4 = (r3.position - e2[s3].position) / (e2[i3].position - e2[s3].position), t3 = e2[s3].color, p2 = e2[i3].color;
              ["r", "g", "b"].forEach((e3) => {
                r3.color[e3] = Math.round(h$1(t3[e3], p2[e3], o4));
              });
            } else
              ["r", "g", "b"].forEach(s3 !== -1 ? (o4) => {
                r3.color[o4] = e2[s3][o4];
              } : (o4) => {
                r3.color[o4] = e2[i3][o4];
              });
          }
      }
      for (const t2 of e2)
        r2.push({ color: t2.color, position: t2.position });
    }
    r2[0].position = 0, r2[r2.length - 1].position = 1;
    let i2 = 0, l2 = 1;
    for (let c2 = 0; c2 < this._colorMapSize; ++c2) {
      const e3 = c2 / this._colorMapSize;
      for (; e3 > r2[l2].position; )
        i2 = l2++;
      const s3 = (e3 - r2[i2].position) / (r2[l2].position - r2[i2].position), a2 = r2[i2].color, h2 = r2[l2].color, f2 = new l$5();
      ["r", "g", "b"].forEach((o3) => {
        f2[o3] = Math.round(h$1(a2[o3], h2[o3], s3));
      }), f2.a = a$5(1 - h$1(a2.a, h2.a, s3) / 255, 0, 1), o2.push(f2);
    }
    return o2;
  }
  getColorForContinuousDataValue(o2, t2) {
    const r2 = this.rasterizedTransferFunction;
    if (this.colorStops.length < 2 || !Array.isArray(this.stretchRange) || this.stretchRange.length < 2 || r2.length < 256)
      return null;
    let e2 = this.stretchRange[0], s2 = this.stretchRange[1];
    if (e2 > s2) {
      const o3 = e2;
      e2 = s2, s2 = o3;
    }
    o2 = a$5(o2, e2, s2);
    const i2 = r2[Math.round((o2 - e2) / (s2 - e2) * (this._colorMapSize - 1))].clone();
    return t2 || (i2.a = 1), i2;
  }
};
e$2([y$3({ type: ["linear", "nearest"], json: { write: true } })], y$1.prototype, "interpolation", void 0), e$2([y$3({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], y$1.prototype, "stretchRange", void 0), e$2([y$3({ type: j$1.ofType(l$1), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.colorStops && this.colorStops.length > 0 };
} } } })], y$1.prototype, "colorStops", null), e$2([y$3({ type: j$1.ofType(i), json: { read: { source: "alphaStops" }, write: { enabled: true, target: "alphaStops", overridePolicy() {
  return { enabled: !!this.opacityStops && this.opacityStops.length > 0 };
} } } })], y$1.prototype, "opacityStops", null), e$2([y$3({ type: a$2, json: { write: true } })], y$1.prototype, "rangeFilter", void 0), e$2([y$3({ type: [l$5], clonable: false, json: { read: false } })], y$1.prototype, "rasterizedTransferFunction", null), y$1 = e$2([n$1("esri.layers.voxel.VoxelTransferFunctionStyle")], y$1);
const g = y$1;
let l = class extends i$3(l$4) {
  constructor() {
    super(...arguments), this.color = l$5.fromArray([0, 0, 0, 0]), this.value = 0, this.enabled = true, this.label = "";
  }
};
e$2([y$3({ type: l$5, json: { type: [T], write: { enabled: true, isRequired: true } } })], l.prototype, "color", void 0), e$2([y$3({ type: T, json: { write: { enabled: true, isRequired: true } } })], l.prototype, "value", void 0), e$2([y$3({ type: Boolean, json: { default: true, write: true } })], l.prototype, "enabled", void 0), e$2([y$3({ type: String, json: { write: true } })], l.prototype, "label", void 0), l = e$2([n$1("esri.layers.voxel.VoxelUniqueValue")], l);
const a$1 = l;
var p$5;
let c$1 = p$5 = class extends l$4 {
  constructor(e2) {
    super(e2), this.variableId = 0, this.label = "", this.transferFunction = null, this.uniqueValues = null, this.isosurfaces = null, this.uniqueValues = new (j$1.ofType(a$1))(), this.isosurfaces = new (j$1.ofType(a$3))();
  }
  clone() {
    return new p$5({ variableId: this.variableId, label: this.label, transferFunction: y$4(this.transferFunction), uniqueValues: y$4(this.uniqueValues), isosurfaces: y$4(this.isosurfaces) });
  }
};
e$2([y$3({ type: T, json: { write: { enabled: true, isRequired: true } } })], c$1.prototype, "variableId", void 0), e$2([y$3({ type: String, json: { write: true } })], c$1.prototype, "label", void 0), e$2([y$3({ type: g, json: { write: { enabled: true, overridePolicy() {
  return { enabled: !this.uniqueValues || this.uniqueValues.length < 1 };
} } } })], c$1.prototype, "transferFunction", void 0), e$2([y$3({ type: j$1.ofType(a$1), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.uniqueValues && this.uniqueValues.length > 0 };
} } } })], c$1.prototype, "uniqueValues", void 0), e$2([y$3({ type: j$1.ofType(a$3), json: { write: { enabled: true, overridePolicy() {
  const e2 = !this.uniqueValues || this.uniqueValues.length < 1, s2 = !!this.isosurfaces && this.isosurfaces.length > 0;
  return { enabled: e2 && s2 };
} } } })], c$1.prototype, "isosurfaces", void 0), c$1 = p$5 = e$2([n$1("esri.layers.voxel.VoxelVariableStyle")], c$1);
const f$1 = c$1;
let t$2 = class extends l$4 {
  constructor() {
    super(...arguments), this.values = null;
  }
};
e$2([y$3({ type: [Number], json: { write: true } })], t$2.prototype, "values", void 0), t$2 = e$2([n$1("esri.layers.voxel.VoxelIrregularSpacing")], t$2);
const p$4 = t$2;
let t$1 = class extends l$4 {
  constructor() {
    super(...arguments), this.scale = 1, this.offset = 0;
  }
};
e$2([y$3({ type: Number, json: { write: true } })], t$1.prototype, "scale", void 0), e$2([y$3({ type: Number, json: { write: true } })], t$1.prototype, "offset", void 0), t$1 = e$2([n$1("esri.layers.voxel.VoxelRegularSpacing")], t$1);
const p$3 = t$1;
let p$2 = class extends l$4 {
  constructor() {
    super(...arguments), this.irregularSpacing = null, this.isPositiveUp = true, this.isWrappedDateLine = false, this.label = null, this.name = null, this.quantity = null, this.regularSpacing = null, this.size = 0, this.unit = null;
  }
  get isRegular() {
    return (this.irregularSpacing == null || this.irregularSpacing === void 0) && this.regularSpacing !== null;
  }
  getRange() {
    var _a;
    return this.isRegular ? [this.regularSpacing.offset, this.regularSpacing.offset + this.regularSpacing.scale * (this.size - 1)] : Array.isArray((_a = this.irregularSpacing) == null ? void 0 : _a.values) && this.irregularSpacing.values.length > 1 ? [this.irregularSpacing.values[0], this.irregularSpacing.values[this.irregularSpacing.values.length - 1]] : [0, 0];
  }
};
e$2([y$3({ type: p$4, json: { write: true } })], p$2.prototype, "irregularSpacing", void 0), e$2([y$3({ type: Boolean, json: { write: true } })], p$2.prototype, "isPositiveUp", void 0), e$2([y$3({ type: Boolean, json: { write: true } })], p$2.prototype, "isWrappedDateLine", void 0), e$2([y$3({ type: String, json: { write: true } })], p$2.prototype, "label", void 0), e$2([y$3({ type: String, json: { write: true } })], p$2.prototype, "name", void 0), e$2([y$3({ type: String, json: { write: true } })], p$2.prototype, "quantity", void 0), e$2([y$3({ type: p$3, json: { write: true } })], p$2.prototype, "regularSpacing", void 0), e$2([y$3({ type: Number, json: { write: true } })], p$2.prototype, "size", void 0), e$2([y$3({ type: String, json: { write: true } })], p$2.prototype, "unit", void 0), e$2([y$3({ type: Boolean, json: { read: false } })], p$2.prototype, "isRegular", null), p$2 = e$2([n$1("esri.layers.voxel.VoxelDimension")], p$2);
const a = p$2;
const d$1 = "esri.layers.voxel.VoxelVolume", y = s$4.getLogger(d$1);
let f = class extends l$4 {
  constructor(e2) {
    super(e2), this.id = 0, this.dimensions = null, this.spatialReference = k$1.WGS84;
  }
  get zDimension() {
    if (!this.dimensions)
      return -1;
    if (!Array.isArray(this.dimensions))
      return -1;
    if (this.dimensions.length !== 4)
      return -1;
    for (let e2 = 2; e2 < 4; ++e2)
      if (this.dimensions[e2].size > 0)
        return e2;
    return -1;
  }
  get isValid() {
    return !!this.dimensions && (!!Array.isArray(this.dimensions) && (this.dimensions.length === 4 && (!(this.dimensions[0].size < 1 || this.dimensions[1].size < 1) && !(this.zDimension === -1 || this.dimensions[this.zDimension].size < 1))));
  }
  get originInLayerSpace3D() {
    if (!this.isValid || this.volumeType === "xyt")
      return [0, 0, 0];
    const e2 = this.dimensions[0].getRange(), i2 = this.dimensions[1].getRange(), s2 = this.dimensions[2], r2 = s2.isRegular ? s2.getRange() : [0, s2.size];
    return [e2[0], i2[0], r2[0]];
  }
  get voxelSizeInLayerSpaceSigned() {
    if (!this.isValid || this.volumeType === "xyt")
      return [0, 0, 0];
    const e2 = this.dimensions[0].getRange(), i2 = this.dimensions[1].getRange(), s2 = this.dimensions[2], r2 = s2.isRegular ? s2.getRange() : [0, s2.size], t2 = [this.sizeInVoxels[0], this.sizeInVoxels[1], this.sizeInVoxels[2]];
    for (let n2 = 0; n2 < 3; ++n2)
      t2[n2] < 2 ? t2[n2] = 1 : t2[n2] -= 1;
    return s2.isRegular && !s2.isPositiveUp && (t2[2] *= -1), [(e2[1] - e2[0]) / t2[0], (i2[1] - i2[0]) / t2[1], (r2[1] - r2[0]) / t2[2]];
  }
  get volumeType() {
    if (this.isValid) {
      const e2 = this.dimensions[2].size > 0, i2 = this.dimensions[3].size > 0;
      if (!e2 && i2)
        return "xyt";
      if (e2 && i2)
        return "xyzt";
    }
    return "xyz";
  }
  get sizeInVoxels() {
    if (!this.isValid)
      return [0, 0, 0];
    const e2 = this.zDimension;
    return [this.dimensions[0].size, this.dimensions[1].size, this.dimensions[e2].size];
  }
  computeVoxelSpaceLocation(e2) {
    var _a, _b, _c;
    if (!this.isValid)
      return [0, 0, 0];
    if (this.volumeType === "xyt")
      return y.error("computeVoxelSpacePosition cannot be used with XYT volumes."), [0, 0, 0];
    if (!E$2(this.spatialReference, e2.spatialReference))
      return y.error("pos argument should have the same spatial reference as the VoxelLayer."), [0, 0, 0];
    const i2 = r$2(e2.x, e2.y, (_a = e2.z) != null ? _a : 0);
    e$3(i2, i2, this.originInLayerSpace3D), i$4(i2, i2, this.voxelSizeInLayerSpaceSigned);
    const s2 = this.dimensions[this.zDimension];
    if (!s2.isRegular && Array.isArray((_b = s2.irregularSpacing) == null ? void 0 : _b.values) && s2.irregularSpacing.values.length > 1) {
      const r2 = (_c = e2.z) != null ? _c : 0, t2 = s2.irregularSpacing.values, n2 = s2.isPositiveUp ? 1 : -1, o2 = t2.reduce((e3, i3) => Math.abs(n2 * i3 - r2) < Math.abs(n2 * e3 - r2) ? i3 : e3);
      for (let e3 = 0; e3 < t2.length; ++e3)
        if (t2[e3] === o2) {
          i2[2] = e3;
          break;
        }
    }
    return [i2[0], i2[1], i2[2]];
  }
  computeLayerSpaceLocation(e2) {
    var _a;
    if (!this.isValid)
      return new w({ x: 0, y: 0, spatialReference: this.spatialReference });
    const i2 = e$4(e2);
    if (c$4(i2, i2, this.voxelSizeInLayerSpaceSigned), u$3(i2, i2, this.originInLayerSpace3D), this.volumeType === "xyt")
      return new w({ x: i2[0], y: i2[1], spatialReference: this.spatialReference });
    const s2 = this.dimensions[this.zDimension];
    return s2.isRegular || Array.isArray((_a = s2.irregularSpacing) == null ? void 0 : _a.values) && (e2[2] < 0 ? i2[2] = s2.irregularSpacing.values[0] : e2[2] < s2.irregularSpacing.values.length ? i2[2] = s2.irregularSpacing.values[e2[2]] : i2[2] = s2.irregularSpacing.values[s2.irregularSpacing.values.length - 1], s2.isPositiveUp || (i2[2] *= -1)), new w({ x: i2[0], y: i2[1], z: i2[2], spatialReference: this.spatialReference });
  }
};
e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], f.prototype, "id", void 0), e$2([y$3({ type: [a], json: { write: { enabled: true, isRequired: true } } })], f.prototype, "dimensions", void 0), e$2([y$3({ type: k$1, json: { read: { enabled: false } } })], f.prototype, "spatialReference", void 0), e$2([y$3({ type: Number, json: { read: false } })], f.prototype, "zDimension", null), e$2([y$3({ type: [Boolean], json: { read: false } })], f.prototype, "isValid", null), e$2([y$3({ type: [Number], json: { read: false } })], f.prototype, "originInLayerSpace3D", null), e$2([y$3({ type: [Number], json: { read: false } })], f.prototype, "voxelSizeInLayerSpaceSigned", null), e$2([y$3({ type: ["xyz", "xyzt", "xyt"], json: { read: { enabled: false } } })], f.prototype, "volumeType", null), e$2([y$3({ type: [Number], json: { read: false } })], f.prototype, "sizeInVoxels", null), f = e$2([n$1(d$1)], f);
const S = f;
var t;
let s = t = class extends l$4 {
  constructor() {
    super(...arguments), this.apronWidth = 1, this.brickSize = [32, 32, 32], this.maxLodLevel = 0, this.nodeSize = [4, 4, 4];
  }
  isValid() {
    const e2 = new t();
    return e2.apronWidth === this.apronWidth && e2.maxLodLevel === this.maxLodLevel && (!!this.brickSize && (!!this.nodeSize && (!(!Array.isArray(this.brickSize) || !Array.isArray(this.nodeSize)) && (this.brickSize.length === 3 && this.nodeSize.length === 3 && (this.brickSize[0] === 32 && this.brickSize[1] === 32 && this.brickSize[2] === 32 && (this.nodeSize[0] === 4 && this.nodeSize[1] === 4 && this.nodeSize[2] === 4))))));
  }
};
e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], s.prototype, "apronWidth", void 0), e$2([y$3({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], s.prototype, "brickSize", void 0), e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], s.prototype, "maxLodLevel", void 0), e$2([y$3({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], s.prototype, "nodeSize", void 0), s = t = e$2([n$1("esri.layers.voxel.VoxelVolumeIndex")], s);
const p$1 = s;
let m$1 = class extends i$3(l$4) {
  constructor(t2) {
    super(t2), this.enabled = true, this.label = "", this.normal = null, this.point = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3)
      return 0;
    const [t2, o2] = l$3(this.normal);
    return s$2.normalize(a$4(t2), 0, true);
  }
  set orientation(t2) {
    const o2 = q(t2, this.tilt);
    this._set("normal", o2), this._set("orientation", t2);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3)
      return 0;
    const [t2, o2] = l$3(this.normal);
    return s$2.normalize(a$4(o2), 0, true);
  }
  set tilt(t2) {
    const o2 = q(this.orientation, t2);
    this._set("normal", o2), this._set("tilt", t2);
  }
};
e$2([y$3({ type: Boolean, json: { default: true, write: true } })], m$1.prototype, "enabled", void 0), e$2([y$3({ type: String, json: { write: true } })], m$1.prototype, "label", void 0), e$2([y$3({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$3((t2) => s$2.normalize(a$4(t2), 0, true))], m$1.prototype, "orientation", null), e$2([y$3({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$3((t2) => s$2.normalize(a$4(t2), 0, true))], m$1.prototype, "tilt", null), e$2([y$3({ type: [Number], json: { write: true } })], m$1.prototype, "normal", void 0), e$2([y$3({ type: [Number], json: { write: true } })], m$1.prototype, "point", void 0), m$1 = e$2([n$1("esri.layers.voxel.VoxelDynamicSection")], m$1);
const c = m$1;
var p;
let m = p = class extends l$4 {
  constructor(e2) {
    super(e2), this.volumeId = 0, this.verticalExaggeration = 1, this.exaggerationMode = "scale-height", this.verticalOffset = 0, this.slices = new (j$1.ofType(c$3))(), this.dynamicSections = new (j$1.ofType(c))();
  }
  set slices(e2) {
    this._set("slices", n$2(e2, this._get("slices"), j$1.ofType(c$3)));
  }
  set dynamicSections(e2) {
    this._set("dynamicSections", n$2(e2, this._get("dynamicSections"), j$1.ofType(c)));
  }
  clone() {
    return new p({ volumeId: this.volumeId, verticalExaggeration: this.verticalExaggeration, exaggerationMode: this.exaggerationMode, verticalOffset: this.verticalOffset, slices: y$4(this.slices), dynamicSections: y$4(this.dynamicSections) });
  }
};
e$2([y$3({ type: T, json: { write: { enabled: true, isRequired: true } } })], m.prototype, "volumeId", void 0), e$2([y$3({ type: Number, json: { default: 1, write: true } })], m.prototype, "verticalExaggeration", void 0), e$2([y$3({ type: ["scale-position", "scale-height"], json: { default: "scale-height", write: true } })], m.prototype, "exaggerationMode", void 0), e$2([y$3({ type: Number, json: { default: 0, write: true } })], m.prototype, "verticalOffset", void 0), e$2([y$3({ type: j$1.ofType(c$3), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.slices && this.slices.length > 0 };
} } } })], m.prototype, "slices", null), e$2([y$3({ type: j$1.ofType(c), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.dynamicSections && this.dynamicSections.length > 0 };
} } } })], m.prototype, "dynamicSections", null), m = p = e$2([n$1("esri.layers.voxel.VoxelVolumeStyle")], m);
const d = m;
const E = "esri.layers.VoxelLayer", R = s$4.getLogger(E);
let M = class extends N(p$d(c$5(v$1(t$4(O$1(i$5(b))))))) {
  constructor(e2) {
    super(e2), this.serviceRoot = "", this.popupEnabled = true, this.operationalLayerType = "Voxel", this.legendEnabled = true, this.title = null, this.sections = null, this.currentVariableId = 0, this.volumeStyles = null, this.renderMode = "volume", this.variableStyles = null, this.enableSlices = true, this.enableSections = true, this.enableDynamicSections = true, this.enableIsosurfaces = true, this.shading = new p$a(), this.opacity = 1, this.variables = new j$1(), this.volumes = new j$1(), this.index = null, this.minScale = 0, this.maxScale = 0, this.type = "voxel", this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.fullExtent = null, this.volumeStyles = new (j$1.ofType(d))(), this.variableStyles = new (j$1.ofType(f$1))(), this.sections = new (j$1.ofType(u$1))();
  }
  set url(e2) {
    this._set("url", S$1(e2, R));
  }
  load(e2) {
    const r2 = r$3(e2) ? e2.signal : null, i2 = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2).catch(w$1).then(() => this._fetchService(r2)).then(() => this.serviceRoot = this.url);
    return this.addResolvingPromise(i2), Promise.resolve(this);
  }
  read(e2, r2) {
    super.read(e2, r2);
    for (const i2 of this.volumes)
      i2.spatialReference = this.spatialReference;
  }
  readVersion(e2, r2) {
    return super.parseVersionString(e2);
  }
  validateLayer(e2) {
    if (e2.layerType && e2.layerType !== this.operationalLayerType)
      throw new s$5("voxel-layer:layer-type-not-supported", "VoxelLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor) || this.version.major < 3)
      throw new s$5("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "3.x" });
    if (this.version.major > 3)
      throw new s$5("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "3.x" });
  }
  readFullExtent(e2, r2, i2) {
    if (e2 != null && typeof e2 == "object") {
      const o2 = w$2.fromJSON(e2, i2);
      if (o2.zmin === 0 && o2.zmax === 0 && Array.isArray(r2.volumes)) {
        const e3 = S.fromJSON(r2.volumes[0]);
        if (e3.isValid && e3.volumeType !== "xyt") {
          const r3 = e3.dimensions[2];
          if (r3.isRegular) {
            let e4 = r3.regularSpacing.offset, i3 = r3.regularSpacing.offset + r3.regularSpacing.scale * (r3.size - 1);
            if (e4 > i3) {
              const r4 = e4;
              e4 = i3, i3 = r4;
            }
            o2.zmin = e4, o2.zmax = i3;
          }
        }
      }
      return o2;
    }
    return null;
  }
  getConfiguration() {
    const e2 = { layerType: this.operationalLayerType, version: this.version.versionString, name: this.title, spatialReference: this.spatialReference, fullExtent: this.fullExtent, volumes: this.volumes.toJSON(), variables: this.variables.toJSON(), index: this.index.toJSON(), sections: this.getSections(), style: { volumeStyles: this.getVolumeStyles(), currentVariableId: this.currentVariableId, renderMode: this.renderMode, variableStyles: this.getVariableStyles(), enableSections: this.enableSections, enableDynamicSections: this.enableDynamicSections, enableIsosurfaces: this.enableIsosurfaces, enableSlices: this.enableSlices, shading: this.shading } };
    return e2.index && this.index.isValid() ? JSON.stringify(e2) : "";
  }
  getVariableStyle(e2) {
    let r2 = -1;
    r2 = r$3(e2) ? e2 : this.currentVariableId;
    if (!this.variableStyles || r2 === -1)
      return null;
    const i2 = this.variableStyles.findIndex((e3) => e3.variableId === r2);
    return i2 < 0 ? null : this.variableStyles.getItemAt(i2);
  }
  getVariable(e2) {
    let r2 = -1;
    if (r2 = r$3(e2) ? e2 : this.currentVariableId, !this.variables || r2 === -1)
      return null;
    const i2 = this.variables.findIndex((e3) => e3.id === r2);
    return i2 < 0 ? null : this.variables.getItemAt(i2);
  }
  getVolume(e2) {
    const r2 = this.getVariable(e2);
    return r$3(r2) ? this.volumes.find(({ id: e3 }) => e3 === r2.volumeId) : null;
  }
  getVolumeStyle(e2) {
    const r2 = this.getVariable(e2);
    return r$3(r2) ? this.volumeStyles.find(({ volumeId: e3 }) => e3 === r2.volumeId) : null;
  }
  getColorForContinuousDataValue(e2, r2, i2) {
    const o2 = this.getVariable(e2);
    if (!r$3(o2) || o2.renderingFormat.continuity !== "continuous")
      return null;
    if (!this.variableStyles)
      return null;
    const s2 = this.variableStyles.findIndex((r3) => r3.variableId === e2);
    if (s2 < 0)
      return null;
    const n2 = this.variableStyles.getItemAt(s2);
    return n2.transferFunction ? n2.transferFunction.getColorForContinuousDataValue(r2, i2) : null;
  }
  getSections() {
    const e2 = [];
    for (const r2 of this.sections)
      e2.push(new u$1({ enabled: r2.enabled, href: r2.href, id: r2.id, label: r2.label, normal: r2.normal, point: r2.point, sizeInPixel: r2.sizeInPixel, slices: r2.slices, timeId: r2.timeId, variableId: r2.variableId }));
    return e2;
  }
  getVariableStyles() {
    const e2 = [];
    for (const r2 of this.variableStyles) {
      const i2 = this._getVariable(r2);
      if (r$3(i2)) {
        const o2 = r2.clone();
        o2.isosurfaces.length > 4 && (o2.isosurfaces = o2.isosurfaces.slice(0, 3), R.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));
        for (const e3 of o2.isosurfaces)
          if (e3.colorLocked) {
            const r3 = this.getColorForContinuousDataValue(o2.variableId, e3.value, false);
            r3 === null || r3.equals(e3.color) || (e3.color = r3);
          }
        if (i2.renderingFormat.continuity === "continuous")
          (o2.transferFunction === null || o2.transferFunction.colorStops.length < 2) && R.error(`VoxelVariableStyle for variable ${i2.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`), o2.transferFunction !== null && (Array.isArray(o2.transferFunction.stretchRange) && o2.transferFunction.stretchRange.length === 2 || (R.error(`VoxelVariableStyle for variable ${i2.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`), o2.transferFunction.stretchRange = [0, 1], o2.transferFunction.colorStops.removeAll()));
        else if (i2.renderingFormat.continuity === "discrete")
          if (r2.uniqueValues.length === 0)
            R.error(`VoxelVariableStyle for variable ${i2.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);
          else
            for (const e3 of r2.uniqueValues)
              e3.label !== null && e3.label !== void 0 || e3.value === null || e3.value === void 0 || (e3.label = e3.value.toString());
        e2.push(o2);
      } else
        R.error(`VoxelVariable ID=${r2.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`);
    }
    return e2;
  }
  getVolumeStyles() {
    const e2 = [];
    for (const r2 of this.volumeStyles) {
      const i2 = this._getVolumeFromVolumeId(r2.volumeId);
      if (r$3(i2)) {
        const o2 = r2.clone();
        for (const e3 of o2.slices)
          this._isPlaneValid(e3, [0, 1, i2.zDimension], i2.dimensions) || (e3.enabled = false, e3.label = "invalid");
        for (const e3 of o2.dynamicSections)
          this._isPlaneValid(e3, [0, 1, i2.zDimension], i2.dimensions) || (e3.enabled = false, e3.label = "invalid");
        e2.push(o2);
      } else
        R.error(`VoxelVolume ID=${r2.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`);
    }
    return e2;
  }
  _getVariable(e2) {
    const r2 = e2.variableId;
    for (const i2 of this.variables)
      if (i2.id === r2)
        return i2;
    return null;
  }
  _getVolumeFromVolumeId(e2) {
    for (const r2 of this.volumes)
      if (r2.id === e2)
        return r2;
    return null;
  }
  _isPlaneValid(e2, r2, i2) {
    if (!e2.point)
      return false;
    if (!Array.isArray(e2.point) || e2.point.length !== 3)
      return false;
    if (!e2.normal)
      return false;
    if (!Array.isArray(e2.normal) || e2.normal.length !== 3)
      return false;
    for (let s2 = 0; s2 < 3; ++s2) {
      const o3 = e2.point[s2];
      if (o3 < 0 || o3 >= i2[r2[s2]].size)
        return false;
    }
    const o2 = r$2(e2.normal[0], e2.normal[1], e2.normal[2]);
    z(o2, o2);
    const t2 = 1e-6;
    return !(Math.abs(o2[0]) + Math.abs(o2[1]) + Math.abs(o2[2]) < t2) && (e2.normal[0] = o2[0], e2.normal[1] = o2[1], e2.normal[2] = o2[2], true);
  }
};
e$2([y$3(p$e)], M.prototype, "popupEnabled", void 0), e$2([y$3({ type: ["Voxel"] })], M.prototype, "operationalLayerType", void 0), e$2([y$3(c$6)], M.prototype, "legendEnabled", void 0), e$2([y$3({ json: { write: true } })], M.prototype, "title", void 0), e$2([y$3(f$3)], M.prototype, "url", null), e$2([y$3({ type: j$1.ofType(u$1), json: { origins: { "web-scene": { name: "layerDefinition.sections", write: true } } } })], M.prototype, "sections", void 0), e$2([y$3({ type: T, json: { origins: { "web-scene": { name: "layerDefinition.style.currentVariableId", write: { enabled: true, isRequired: true, ignoreOrigin: true } }, service: { name: "style.currentVariableId" } } } })], M.prototype, "currentVariableId", void 0), e$2([y$3({ type: j$1.ofType(d), json: { origins: { "web-scene": { name: "layerDefinition.style.volumeStyles", write: true }, service: { name: "style.volumeStyles" } } } })], M.prototype, "volumeStyles", void 0), e$2([y$3({ type: ["volume", "surfaces"], json: { origins: { "web-scene": { name: "layerDefinition.style.renderMode", write: true }, service: { name: "style.renderMode" } } } })], M.prototype, "renderMode", void 0), e$2([y$3({ type: j$1.ofType(f$1), json: { origins: { "web-scene": { name: "layerDefinition.style.variableStyles", write: true }, service: { name: "style.variableStyles" } } } })], M.prototype, "variableStyles", void 0), e$2([y$3({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableSlices", write: true }, service: { name: "style.enableSlices" } } } })], M.prototype, "enableSlices", void 0), e$2([y$3({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableSections", write: true }, service: { name: "style.enableSections" } } } })], M.prototype, "enableSections", void 0), e$2([y$3({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableDynamicSections", write: true }, service: { name: "style.enableDynamicSections" } } } })], M.prototype, "enableDynamicSections", void 0), e$2([y$3({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableIsosurfaces", write: true }, service: { name: "style.enableIsosurfaces" } } } })], M.prototype, "enableIsosurfaces", void 0), e$2([y$3({ type: p$a, json: { origins: { "web-scene": { name: "layerDefinition.style.shading", write: true }, service: { name: "style.shading" } } } })], M.prototype, "shading", void 0), e$2([y$3({ type: ["show", "hide"] })], M.prototype, "listMode", void 0), e$2([y$3({ type: Number, range: { min: 0, max: 1 }, nonNullable: true, json: { read: false, write: false, origins: { "web-scene": { read: false, write: false }, "portal-item": { read: false, write: false } } } })], M.prototype, "opacity", void 0), e$2([y$3({ type: j$1.ofType(p$8) })], M.prototype, "variables", void 0), e$2([y$3({ type: j$1.ofType(S) })], M.prototype, "volumes", void 0), e$2([y$3({ type: p$1 })], M.prototype, "index", void 0), e$2([y$3({ type: Number, json: { name: "layerDefinition.minScale", read: false, write: false, origins: { service: { read: false, write: false } } } })], M.prototype, "minScale", void 0), e$2([y$3({ type: Number, json: { name: "layerDefinition.maxScale", read: false, write: false, origins: { service: { read: false, write: false } } } })], M.prototype, "maxScale", void 0), e$2([y$3({ json: { read: false }, readOnly: true })], M.prototype, "type", void 0), e$2([y$3({ readOnly: true, json: { name: "serviceVersion" } })], M.prototype, "version", void 0), e$2([o("service", "version")], M.prototype, "readVersion", null), e$2([y$3({ type: w$2 })], M.prototype, "fullExtent", void 0), e$2([o("service", "fullExtent", ["fullExtent"])], M.prototype, "readFullExtent", null), M = e$2([n$1(E)], M);
const O = M;
export { O as default };
