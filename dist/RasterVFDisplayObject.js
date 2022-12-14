import { A as u$4, a as r$1, l as f$5, s as s$2, t as t$3, db as m$2, H as l$3, I as f$6, M, J as h$4, F as e$1, $ as e$2, a0 as y$3, a1 as n$1, Z as m$3, m as j, a7 as w$2, cr as w$3, d9 as d$4, R as l$4, cC as g$2, aU as r$3, aW as t$4, cb as b, aV as i$2 } from "./index.js";
import { E as E$1, a as a$1 } from "./VertexArrayObject.js";
import { C, R, E, F, P, L, G, D } from "./enums.js";
import { E as E$2 } from "./Texture.js";
import { t as t$2 } from "./VertexElementDescriptor.js";
import { a as x$1, F as F$1, D as D$1 } from "./dataUtils.js";
import { o as o$1, i as i$1 } from "./WGLContainer.js";
import { I, g as ge } from "./Utils2.js";
import { r as r$2 } from "./utils.js";
function n(e2) {
  const n2 = i(a(e2)), o2 = n2, s2 = true, r2 = Math.max(n2 / 2, 5), l2 = Math.round(u$4(e2.maxPathLength) / r2) + 1, u2 = 10, { density: c2 } = e2;
  return { smoothing: u$4(e2.smoothing), interpolate: true, velocityScale: e2.flowRepresentation === "flow-from" ? 1 : -1, verticesPerLine: l2, minSpeedThreshold: 1e-3, segmentLength: r2, maxTurnAngle: 1, collisions: s2, lineCollisionWidth: o2, lineSpacing: u2, density: c2 };
}
function i(e2) {
  return e2.kind === "constant" ? e2.value[0] : e2.values[e2.values.length - 1];
}
function o(e2) {
  const t2 = e2.toRgba();
  return [t2[0] / 255, t2[1] / 255, t2[2] / 255, t2[3]];
}
function s$1(e2) {
  return { kind: "constant", value: [0.1, 0.1, 0.1, 1] };
}
function a(e2) {
  if (!e2.hasVisualVariables("size"))
    return { kind: "constant", value: [u$4(e2.trailWidth)] };
  const n2 = e2.getVisualVariablesForType("size")[0], i2 = [], o2 = [];
  let s2;
  if (n2.stops) {
    for (const e3 of n2.stops)
      i2.push(e3.value), o2.push(u$4(e3.size));
    s2 = n2.stops.length;
  } else
    i2.push(n2.minDataValue, n2.maxDataValue), o2.push(u$4(n2.minSize), u$4(n2.maxSize)), s2 = 2;
  return { kind: "ramp", stops: i2, values: o2, count: s2 };
}
function r(e2) {
  if (!e2.hasVisualVariables("color"))
    return { kind: "constant", value: o(e2.color) };
  const t2 = e2.getVisualVariablesForType("color")[0], n2 = [], i2 = [];
  for (const s2 of t2.stops)
    n2.push(s2.value), Array.prototype.push.apply(i2, o(s2.color));
  return { kind: "ramp", stops: n2, values: i2, count: t2.stops.length };
}
function l$2(e2) {
  if (!e2.hasVisualVariables("opacity"))
    return { kind: "constant", value: [1] };
  const t2 = e2.getVisualVariablesForType("opacity")[0], n2 = [], i2 = [];
  for (const o2 of t2.stops)
    n2.push(o2.value), i2.push(o2.opacity);
  return { kind: "ramp", stops: n2, values: i2, count: t2.stops.length };
}
function u$3(e2, t2, n2, i2) {
  switch (t2) {
    case "int":
      e2.setUniform1iv(n2, i2);
      break;
    case "float":
      e2.setUniform1fv(n2, i2);
      break;
    case "vec2":
      e2.setUniform2fv(n2, i2);
      break;
    case "vec3":
      e2.setUniform3fv(n2, i2);
      break;
    case "vec4":
      e2.setUniform4fv(n2, i2);
  }
}
function c$1(e2, t2, n2, i2) {
  i2.kind === "constant" ? u$3(e2, n2, `u_${t2}`, i2.value) : (u$3(e2, "float", `u_${t2}_stops`, i2.stops), u$3(e2, n2, `u_${t2}_values`, i2.values), e2.setUniform1i(`u_${t2}_count`, i2.count));
}
function p$1(e2, t2) {
  let n2 = true;
  return n2 = n2 && e2.collisions === t2.collisions, n2 = n2 && e2.density === t2.density, n2 = n2 && e2.interpolate === t2.interpolate, n2 = n2 && e2.lineCollisionWidth === t2.lineCollisionWidth, n2 = n2 && e2.lineSpacing === t2.lineSpacing, n2 = n2 && e2.maxTurnAngle === t2.maxTurnAngle, n2 = n2 && e2.minSpeedThreshold === t2.minSpeedThreshold, n2 = n2 && e2.segmentLength === t2.segmentLength, n2 = n2 && e2.smoothing === t2.smoothing, n2 = n2 && e2.velocityScale === t2.velocityScale, n2 = n2 && e2.verticesPerLine === t2.verticesPerLine, n2;
}
function f$4(t2, n2) {
  return t2 === n2 || !(!r$1(t2) || !r$1(n2)) && t2.equals(n2);
}
function m$1(e2, t2) {
  if (!p$1(e2.simulationSettings, t2.simulationSettings))
    return false;
  if (!f$4(e2.timeExtent, t2.timeExtent))
    return false;
  let n2 = true;
  return n2 = n2 && e2.loadImagery === t2.loadImagery, n2 = n2 && e2.createFlowMesh === t2.createFlowMesh, n2 = n2 && e2.color.kind === t2.color.kind, n2 = n2 && e2.opacity.kind === t2.opacity.kind, n2 = n2 && e2.size.kind === t2.size.kind, n2;
}
class d$3 {
  constructor(t2) {
    this._params = t2, this.animated = false;
  }
  isCompatible(t2) {
    if (!(t2 instanceof d$3))
      return false;
    if (!f$4(this._params.timeExtent, t2._params.timeExtent))
      return false;
    let r2 = true;
    return r2 = r2 && this._params.loadImagery === t2._params.loadImagery, r2 = r2 && this._params.color.kind === t2._params.color.kind, r2 = r2 && this._params.opacity.kind === t2._params.opacity.kind, r2;
  }
  async load(a2, r2) {
    const { extent: e2, size: s2 } = a2;
    f$5(r2);
    const i2 = await this._params.loadImagery(e2, s2[0], s2[1], this._params.timeExtent, r2);
    return new g$1(i2, { color: this._params.color, opacity: this._params.opacity });
  }
  render(t2, a2, e2) {
    const { context: s2 } = t2, { program: n2 } = e2;
    s2.setFaceCullingEnabled(false), s2.setBlendingEnabled(true), s2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), s2.useProgram(n2), n2.setUniformMatrix3fv("u_dvsMat3", a2.dvsMat3), s2.bindTexture(e2.texture, 0), n2.setUniform1i("u_texture", 0), n2.setUniform1f("u_Min", e2.min), n2.setUniform1f("u_Max", e2.max), c$1(n2, "color", "vec4", this._params.color), c$1(n2, "opacity", "float", this._params.opacity), s2.bindVAO(e2.vertexArray), s2.drawArrays(E.TRIANGLE_STRIP, 0, 4);
  }
}
const u$2 = new Map();
u$2.set("a_position", 0), u$2.set("a_texcoord", 1);
const w$1 = { geometry: [new t$2("a_position", 2, C.UNSIGNED_SHORT, 0, 8), new t$2("a_texcoord", 2, C.UNSIGNED_SHORT, 4, 8)] }, x = { vsPath: "raster/flow/imagery", fsPath: "raster/flow/imagery", attributes: u$2 };
class g$1 {
  constructor(t2, a2) {
    this._flowData = t2, this._values = a2;
  }
  attach(t2) {
    const { context: a2 } = t2, { width: r2, height: s2 } = this._flowData, i2 = E$1.createVertex(a2, F.STATIC_DRAW, new Uint16Array([0, 0, 0, 1, r2, 0, 1, 1, 0, s2, 0, 0, r2, s2, 1, 0])), o2 = new a$1(a2, u$2, w$1, { geometry: i2 }), f2 = [];
    this._values.color.kind === "ramp" && f2.push("vvColor"), this._values.opacity.kind === "ramp" && f2.push("vvOpacity");
    const d2 = t2.painter.materialManager.getProgram(x, f2);
    let g2 = 1e6, y2 = -1e6;
    for (let e2 = 0; e2 < s2; e2++)
      for (let t3 = 0; t3 < r2; t3++)
        if (this._flowData.mask[e2 * r2 + t3] !== 0) {
          const a3 = this._flowData.data[2 * (e2 * r2 + t3) + 0], s3 = this._flowData.data[2 * (e2 * r2 + t3) + 1], i3 = Math.sqrt(a3 * a3 + s3 * s3);
          g2 = Math.min(g2, i3), y2 = Math.max(y2, i3);
        }
    const A = new Uint8Array(4 * r2 * s2);
    for (let e2 = 0; e2 < s2; e2++)
      for (let t3 = 0; t3 < r2; t3++)
        if (this._flowData.mask[e2 * r2 + t3] !== 0) {
          const a3 = this._flowData.data[2 * (e2 * r2 + t3) + 0], s3 = this._flowData.data[2 * (e2 * r2 + t3) + 1], i3 = (Math.sqrt(a3 * a3 + s3 * s3) - g2) / (y2 - g2);
          A[4 * (e2 * r2 + t3) + 0] = 255 * i3, A[4 * (e2 * r2 + t3) + 1] = 0, A[4 * (e2 * r2 + t3) + 2] = 0, A[4 * (e2 * r2 + t3) + 3] = 255;
        } else
          A[4 * (e2 * r2 + t3) + 0] = 0, A[4 * (e2 * r2 + t3) + 1] = 0, A[4 * (e2 * r2 + t3) + 2] = 0, A[4 * (e2 * r2 + t3) + 3] = 0;
    const E2 = new E$2(a2, { pixelFormat: P.RGBA, internalFormat: P.RGBA, samplingMode: L.LINEAR, dataType: G.UNSIGNED_BYTE, wrapMode: D.CLAMP_TO_EDGE, flipped: true, width: r2, height: s2 }, A);
    this.vertexArray = o2, this.program = d2, this.texture = E2, this.min = g2, this.max = y2, this._flowData = null;
  }
  detach() {
    this.vertexArray.dispose(), this.texture.dispose();
  }
  get ready() {
    return this.program.isCompiled;
  }
}
class _$1 {
  constructor(t2) {
    this._params = t2;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(t2) {
    return t2 instanceof _$1 && m$1(this._params, t2._params);
  }
  async load(e2, a2) {
    const { extent: s2, size: r2 } = e2;
    f$5(a2);
    const i2 = await this._params.loadImagery(s2, r2[0], r2[1], this._params.timeExtent, a2), { vertexData: o2, indexData: n2 } = await this._params.createFlowMesh("Particles", this._params.simulationSettings, i2, a2);
    return new c(o2, n2, { color: this._params.color, opacity: this._params.opacity, size: this._params.size });
  }
  render(t2, e2, s2) {
    const { context: n2 } = t2, { program: m2 } = s2;
    n2.setFaceCullingEnabled(false), n2.setBlendingEnabled(true), n2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), n2.useProgram(m2), m2.setUniform1f("u_time", e2.time), m2.setUniform1f("u_trailLength", this._params.trailLength), m2.setUniform1f("u_flowSpeed", this._params.flowSpeed), m2.setUniform1f("u_featheringSize", this._params.featheringSize), m2.setUniform1f("u_featheringOffset", this._params.featheringOffset), m2.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), m2.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), m2.setUniform1f("u_decayRate", this._params.decayRate), m2.setUniformMatrix3fv("u_dvsMat3", e2.dvsMat3), m2.setUniformMatrix3fv("u_displayViewMat3", e2.displayViewMat3), c$1(m2, "color", "vec4", this._params.color), c$1(m2, "opacity", "float", this._params.opacity), c$1(m2, "size", "float", this._params.size), n2.bindVAO(s2.vertexArray), n2.drawElements(E.TRIANGLES, s2.indexCount, C.UNSIGNED_INT, 0);
  }
}
const l$1 = new Map();
l$1.set("a_xyts0", 0), l$1.set("a_xyts1", 1), l$1.set("a_typeIdDurationSeed", 2), l$1.set("a_extrudeInfo", 3);
const h$3 = { geometry: [new t$2("a_xyts0", 4, C.FLOAT, 0, 64), new t$2("a_xyts1", 4, C.FLOAT, 16, 64), new t$2("a_typeIdDurationSeed", 4, C.FLOAT, 32, 64), new t$2("a_extrudeInfo", 4, C.FLOAT, 48, 64)] }, f$3 = { vsPath: "raster/flow/particles", fsPath: "raster/flow/particles", attributes: l$1 };
class c {
  constructor(t2, e2, a2) {
    this._vertexData = t2, this._indexData = e2, this._values = a2;
  }
  attach(t2) {
    const { context: e2 } = t2, a2 = E$1.createVertex(e2, F.STATIC_DRAW, this._vertexData), r2 = E$1.createIndex(e2, F.STATIC_DRAW, this._indexData), i2 = new a$1(e2, l$1, h$3, { geometry: a2 }, r2), o2 = [];
    this._values.color.kind === "ramp" && o2.push("vvColor"), this._values.opacity.kind === "ramp" && o2.push("vvOpacity"), this._values.size.kind === "ramp" && o2.push("vvSize");
    const p2 = t2.painter.materialManager.getProgram(f$3, o2);
    this.vertexArray = i2, this.program = p2, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.isCompiled;
  }
}
class t$1 {
  constructor(t2) {
    this._styles = t2;
  }
  get animated() {
    return this._styles.reduce((t2, s2) => t2 || s2.animated, false);
  }
  isCompatible(s2) {
    if (!(s2 instanceof t$1))
      return false;
    if (this._styles.length !== s2._styles.length)
      return false;
    const e2 = this._styles.length;
    for (let t2 = 0; t2 < e2; t2++)
      if (!this._styles[t2].isCompatible(s2._styles[t2]))
        return false;
    return true;
  }
  async load(t2, e2) {
    const r2 = await Promise.all(this._styles.map((s2) => s2.load(t2, e2)));
    return new s(r2);
  }
  render(t2, s2, e2) {
    for (let r2 = 0; r2 < this._styles.length; r2++)
      this._styles[r2].render(t2, s2, e2.resources[r2]);
  }
}
class s {
  constructor(t2) {
    this.resources = t2;
  }
  attach(t2) {
    for (const s2 of this.resources)
      s2.attach(t2);
  }
  detach() {
    for (const t2 of this.resources)
      t2.detach();
  }
  get ready() {
    return this.resources.reduce((t2, s2) => t2 && s2.ready, true);
  }
}
class _ {
  constructor(t2) {
    this._params = t2;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(t2) {
    return t2 instanceof _ && m$1(this._params, t2._params);
  }
  async load(e2, a2) {
    const { extent: s2, size: r2 } = e2;
    f$5(a2);
    const i2 = await this._params.loadImagery(s2, r2[0], r2[1], this._params.timeExtent, a2), { vertexData: o2, indexData: n2 } = await this._params.createFlowMesh("Streamlines", this._params.simulationSettings, i2, a2);
    return new d$2(o2, n2, { color: this._params.color, opacity: this._params.opacity, size: this._params.size });
  }
  render(t2, e2, s2) {
    const { context: n2 } = t2, { program: m2 } = s2;
    n2.setFaceCullingEnabled(false), n2.setBlendingEnabled(true), n2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), n2.useProgram(m2), m2.setUniform1f("u_time", e2.time), m2.setUniform1f("u_trailLength", this._params.trailLength), m2.setUniform1f("u_flowSpeed", this._params.flowSpeed), m2.setUniform1f("u_featheringSize", this._params.featheringSize), m2.setUniform1f("u_featheringOffset", this._params.featheringOffset), m2.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), m2.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), m2.setUniform1f("u_decayRate", this._params.decayRate), m2.setUniformMatrix3fv("u_dvsMat3", e2.dvsMat3), m2.setUniformMatrix3fv("u_displayViewMat3", e2.displayViewMat3), c$1(m2, "color", "vec4", this._params.color), c$1(m2, "opacity", "float", this._params.opacity), c$1(m2, "size", "float", this._params.size), n2.bindVAO(s2.vertexArray), n2.drawElements(E.TRIANGLES, s2.indexCount, C.UNSIGNED_INT, 0);
  }
}
const l = new Map();
l.set("a_positionAndSide", 0), l.set("a_timeInfo", 1), l.set("a_extrude", 2), l.set("a_speed", 3);
const h$2 = { geometry: [new t$2("a_positionAndSide", 3, C.FLOAT, 0, 36), new t$2("a_timeInfo", 3, C.FLOAT, 12, 36), new t$2("a_extrude", 2, C.FLOAT, 24, 36), new t$2("a_speed", 1, C.FLOAT, 32, 36)] }, f$2 = { vsPath: "raster/flow/streamlines", fsPath: "raster/flow/streamlines", attributes: l };
class d$2 {
  constructor(t2, e2, a2) {
    this._vertexData = t2, this._indexData = e2, this._values = a2;
  }
  attach(t2) {
    const { context: e2 } = t2, a2 = E$1.createVertex(e2, F.STATIC_DRAW, this._vertexData), r2 = E$1.createIndex(e2, F.STATIC_DRAW, this._indexData), i2 = new a$1(e2, l, h$2, { geometry: a2 }, r2), o2 = [];
    this._values.color.kind === "ramp" && o2.push("vvColor"), this._values.opacity.kind === "ramp" && o2.push("vvOpacity"), this._values.size.kind === "ramp" && o2.push("vvSize");
    const p2 = t2.painter.materialManager.getProgram(f$2, o2);
    this.vertexArray = i2, this.program = p2, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.isCompiled;
  }
}
const f$1 = 4, p = 1, u$1 = 0.5, y$2 = true, d$1 = true, g = 2.3;
function w(w2, h2) {
  const { flowSpeed: j2, trailLength: v } = w2, S = n(w2);
  let k = null;
  const x2 = { opacity: l$2(w2), size: a(w2) };
  let I2 = r(w2);
  if (w2.background === "none")
    x2.color = I2;
  else {
    I2.kind === "constant" && (I2 = { kind: "ramp", stops: [0, 1], values: [0, 0, 0, 1, I2.value[0], I2.value[1], I2.value[2], I2.value[3]], count: 2 });
    const e2 = { loadImagery: h2.loadImagery, timeExtent: h2.timeExtent, color: I2, opacity: { kind: "constant", value: [1] } };
    k = new d$3(e2), x2.color = s$1();
  }
  const z = { loadImagery: h2.loadImagery, createFlowMesh: h2.createFlowMesh, simulationSettings: S, timeExtent: h2.timeExtent, trailLength: v, flowSpeed: j2, featheringSize: p, featheringOffset: u$1, introFade: y$2, fadeToZero: d$1, decayRate: g, color: x2.color, opacity: x2.opacity, size: x2.size }, E2 = w2.trailCap === "butt" || i(a(w2)) <= f$1 ? new _(z) : new _$1(z);
  return r$1(k) ? new t$1([k, E2]) : E2;
}
class t extends o$1 {
  constructor() {
    super(...arguments), this.flowStyle = null;
  }
  get requiresDedicatedFBO() {
    return false;
  }
  doRender(e2) {
    super.doRender(e2);
  }
  prepareRenderPasses(s2) {
    const t2 = s2.registerRenderPass({ name: "flow", brushes: [i$1], target: () => this.children, drawPhase: I.MAP });
    return [...super.prepareRenderPasses(s2), t2];
  }
}
class e {
  constructor(t2, e2, s2, a2) {
    this.state = { name: "created" }, this.flowStyle = t2, this.extent = e2, this.size = s2, this.pixelRatio = a2;
  }
  async load() {
    const t2 = new AbortController();
    this.state = { name: "loading", abortController: t2 };
    const e2 = { extent: this.extent, size: this.size, pixelRatio: this.pixelRatio }, s2 = await this.flowStyle.load(e2, t2.signal);
    this.state = { name: "loaded", resources: s2 };
  }
  attach(e2) {
    if (this.state.name !== "loaded")
      return void s$2.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");
    const s2 = this.state.resources;
    s2.attach(e2), this.state = { name: "attached", resources: s2 };
  }
  detach() {
    if (this.state.name === "loading")
      return this.state.abortController.abort(), void (this.state = { name: "detached" });
    this.state.name === "attached" && (this.state.resources.detach(), this.state = { name: "detached" });
  }
  update(t2) {
    if (!this.flowStyle.isCompatible(t2.flowStyle))
      return false;
    return !(!this.extent.equals(t2.extent) || this.size[0] !== t2.size[0] || this.size[1] !== t2.size[1] || this.pixelRatio !== t2.pixelRatio) && (this.flowStyle = t2.flowStyle, true);
  }
}
class m extends r$2 {
  constructor() {
    super(...arguments), this._displayData = null;
  }
  get displayData() {
    return this._displayData;
  }
  set displayData(t2) {
    this._displayData = t2, this.requestRender();
  }
  clear() {
    r$1(this._displayData) && (this._displayData.detach(), this._displayData = null, this.requestRender());
  }
  setTransform(s2) {
    const { displayData: n2 } = this;
    if (t$3(n2))
      return;
    const l2 = n2.extent.xmin, m2 = n2.extent.ymax, p2 = [0, 0];
    s2.toScreen(p2, [l2, m2]);
    const c2 = (n2.extent.xmax - n2.extent.xmin) / n2.size[0] / s2.resolution, d2 = m$2(s2.rotation), { dvs: h2 } = this.transforms;
    l$3(h2, [-1, 1, 0]), f$6(h2, h2, [2 / (s2.size[0] * s2.pixelRatio), -2 / (s2.size[1] * s2.pixelRatio), 1]), M(h2, h2, [p2[0], p2[1], 0]), h$4(h2, h2, d2), f$6(h2, h2, [c2 * s2.pixelRatio, c2 * s2.pixelRatio, 1]);
  }
  _createTransforms() {
    return { dvs: e$1() };
  }
}
const h$1 = 1.15;
let y$1 = class extends m$3 {
  constructor(t2) {
    super(t2), this._flowDisplayObject = new m(), this._loading = null;
  }
  initialize() {
    this.flowContainer.addChild(this._flowDisplayObject);
  }
  destroy() {
    this._clear(), this.flowContainer.removeAllChildren();
  }
  get updating() {
    return this._loading != null;
  }
  update(t2) {
    const { flowStyle: o2 } = this.flowContainer;
    if (t$3(o2))
      return void this._clear();
    const { extent: i2, rotation: l2, resolution: n2, pixelRatio: p2 } = t2.state, m2 = u(i2, l2);
    m2.expand(h$1);
    const d2 = [Math.round((m2.xmax - m2.xmin) / n2), Math.round((m2.ymax - m2.ymin) / n2)], y2 = new e(o2, m2, d2, p2);
    if (r$1(this._loading)) {
      if (this._loading.update(y2))
        return;
      this._loading.detach(), this._loading = null;
    }
    !t$3(this._flowDisplayObject.displayData) && this._flowDisplayObject.displayData.update(y2) || (y2.load().then(() => {
      this._flowDisplayObject.clear(), this._flowDisplayObject.displayData = this._loading, this._loading = null;
    }, (t3) => {
      j(t3) || (s$2.getLogger(this.declaredClass).error("A resource failed to load.", t3), this._loading = null);
    }), this._loading = y2);
  }
  _clear() {
    this._flowDisplayObject.clear(), r$1(this._loading) && (this._loading.detach(), this._loading = null);
  }
};
e$2([y$3()], y$1.prototype, "_loading", void 0), e$2([y$3()], y$1.prototype, "flowContainer", void 0), e$2([y$3()], y$1.prototype, "updating", null), y$1 = e$2([n$1("esri.views.2d.engine.flow.FlowStrategy")], y$1);
const f = y$1;
function u(t2, o2) {
  const e2 = new w$2({ x: (t2.xmax + t2.xmin) / 2, y: (t2.ymax + t2.ymin) / 2, spatialReference: t2.spatialReference }), s2 = t2.xmax - t2.xmin, r2 = t2.ymax - t2.ymin, a2 = Math.abs(Math.cos(m$2(o2))), l2 = Math.abs(Math.sin(m$2(o2))), n2 = a2 * s2 + l2 * r2, c2 = l2 * s2 + a2 * r2, m2 = new w$3({ xmin: e2.x - n2 / 2, ymin: e2.y - c2 / 2, xmax: e2.x + n2 / 2, ymax: e2.y + c2 / 2, spatialReference: t2.spatialReference });
  return m2.centerAt(e2), m2;
}
let h = class extends d$4 {
  constructor() {
    super(...arguments), this._loadImagery = (t2, e2, i2, r2, o2) => x$1(this.layer, t2, e2, i2, r2, o2), this._createFlowMesh = (t2, e2, i2, r2) => this.layer.createFlowMesh({ meshType: t2, flowData: i2, simulationSettings: e2 }, { signal: r2 }), this.attached = false, this.container = null, this.layer = null, this.type = "flow", this.timeExtent = null, this.redrawOrRefetch = async () => {
      this._updateVisualization();
    };
  }
  get updating() {
    return !this._strategy || this._strategy.updating;
  }
  attach() {
    const { layer: t$12 } = this, e2 = () => {
      this._loadImagery = (e3, i2, r2, o2, s2) => x$1(t$12, e3, i2, r2, o2, s2), this._updateVisualization();
    };
    "multidimensionalDefinition" in t$12 ? this.handles.add(l$4(() => t$12.multidimensionalDefinition, e2)) : this.handles.add([l$4(() => t$12.mosaicRule, e2), l$4(() => t$12.renderingRule, e2), l$4(() => t$12.definitionExpression, e2)]), this.container = new t(), this._strategy = new f({ flowContainer: this.container }), this._updateVisualization();
  }
  detach() {
    this._strategy.destroy(), this.container.removeAllChildren(), this.container = null, this.handles.removeAll();
  }
  update(t2) {
    t2.stationary ? this._strategy.update(t2) : this.layerView.requestUpdate();
  }
  hitTest(t2) {
    return new g$2({ attributes: {}, geometry: t2.clone(), layer: this.layer });
  }
  moveEnd() {
  }
  async doRefresh() {
  }
  _updateVisualization() {
    const { renderer: t2 } = this.layer;
    if (t2.type !== "flow")
      return;
    const e2 = w(t2, { loadImagery: this._loadImagery, createFlowMesh: this._createFlowMesh, timeExtent: this.timeExtent });
    this.container.flowStyle = e2, this.layerView.requestUpdate();
  }
};
e$2([y$3()], h.prototype, "_strategy", void 0), e$2([y$3()], h.prototype, "attached", void 0), e$2([y$3()], h.prototype, "container", void 0), e$2([y$3()], h.prototype, "layer", void 0), e$2([y$3()], h.prototype, "layerView", void 0), e$2([y$3()], h.prototype, "type", void 0), e$2([y$3()], h.prototype, "updating", null), e$2([y$3()], h.prototype, "timeExtent", void 0), h = e$2([n$1("esri.views.2d.engine.flow.FlowView2D")], h);
const d = h;
class y extends r$2 {
  constructor(t2 = null) {
    super(), this._source = null, this._symbolizerParameters = null, this._vaoInvalidated = true, this.coordScale = [1, 1], this.height = null, this.stencilRef = 0, this.resolution = null, this.pixelRatio = 1, this.x = 0, this.y = 0, this.rotation = 0, this.rawPixelData = null, this.width = null, this.source = t2;
  }
  destroy() {
    var _a, _b;
    r$1(this.vaoData) && ((_a = this.vaoData.magdir) == null ? void 0 : _a.vao.dispose(), (_b = this.vaoData.scalar) == null ? void 0 : _b.vao.dispose(), this.vaoData = null);
  }
  get symbolizerParameters() {
    return this._symbolizerParameters;
  }
  set symbolizerParameters(t2) {
    JSON.stringify(this._symbolizerParameters) !== JSON.stringify(t2) && (this._symbolizerParameters = t2, this.invalidateVAO());
  }
  get source() {
    return this._source;
  }
  set source(t2) {
    this._source = t2, this.invalidateVAO();
  }
  invalidateVAO() {
    var _a, _b;
    !this._vaoInvalidated && r$1(this.vaoData) && ((_a = this.vaoData.magdir) == null ? void 0 : _a.vao.dispose(), (_b = this.vaoData.scalar) == null ? void 0 : _b.vao.dispose(), this.vaoData = null, this._vaoInvalidated = true, this.requestRender());
  }
  updateVectorFieldVAO(s2) {
    if (this._vaoInvalidated) {
      if (this._vaoInvalidated = false, r$1(this.source) && t$3(this.vaoData)) {
        const { style: t2 } = this.symbolizerParameters;
        switch (t2) {
          case "beaufort_ft":
          case "beaufort_km":
          case "beaufort_kn":
          case "beaufort_m":
          case "beaufort_mi":
          case "classified_arrow":
          case "ocean_current_kn":
          case "ocean_current_m":
          case "single_arrow":
            {
              const t3 = F$1(this.source, this.symbolizerParameters), e2 = this._createVectorFieldVAO(s2.context, t3);
              this.vaoData = { magdir: e2 };
            }
            break;
          case "simple_scalar":
            {
              const t3 = D$1(this.source, this.symbolizerParameters), e2 = this._createVectorFieldVAO(s2.context, t3);
              this.vaoData = { scalar: e2 };
            }
            break;
          case "wind_speed": {
            const t3 = F$1(this.source, this.symbolizerParameters), e2 = this._createVectorFieldVAO(s2.context, t3), a2 = D$1(this.source, this.symbolizerParameters), r2 = this._createVectorFieldVAO(s2.context, a2);
            this.vaoData = { magdir: e2, scalar: r2 };
          }
        }
      }
      this.ready(), this.requestRender();
    }
  }
  _createTransforms() {
    return { dvs: e$1() };
  }
  setTransform(t2) {
    const e2 = r$3(this.transforms.dvs), [n2, l2] = t2.toScreenNoRotation([0, 0], [this.x, this.y]), h2 = this.resolution / this.pixelRatio / t2.resolution, m2 = h2 * this.width, u2 = h2 * this.height, d2 = Math.PI * this.rotation / 180;
    M(e2, e2, t$4(n2, l2)), M(e2, e2, t$4(m2 / 2, u2 / 2)), h$4(e2, e2, -d2), M(e2, e2, t$4(-m2 / 2, -u2 / 2)), b(e2, e2, t$4(m2, u2)), i$2(this.transforms.dvs, t2.displayViewMat3, e2);
  }
  onAttach() {
    this.invalidateVAO();
  }
  onDetach() {
    this.invalidateVAO();
  }
  _createVectorFieldVAO(t2, e2) {
    const { vertexData: s2, indexData: a2 } = e2, r2 = E$1.createVertex(t2, F.STATIC_DRAW, new Float32Array(s2)), i2 = E$1.createIndex(t2, F.STATIC_DRAW, new Uint32Array(a2)), o2 = ge("vector-field", { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.FLOAT, normalized: false }, { location: 1, name: "a_offset", count: 2, type: C.FLOAT, normalized: false }, { location: 2, name: "a_vv", count: 2, type: C.FLOAT, normalized: false }] });
    return { vao: new a$1(t2, o2.attributes, o2.bufferLayouts, { geometry: r2 }, i2), elementCount: a2.length };
  }
}
export { d, y };
