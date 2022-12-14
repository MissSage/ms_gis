var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { $ as e, a0 as y, a1 as n, R as l$1, g as s, cE as x, t, a as r } from "./index.js";
import B from "./FeatureLayerView2D.js";
import { e as e$1 } from "./util.js";
import "vue";
import "./utils.js";
import "./Utils2.js";
import "./enums2.js";
import "./enums.js";
import "./Texture.js";
import "./VertexElementDescriptor.js";
import "./MaterialKey.js";
import "./LayerView.js";
import "./schemaUtils.js";
import "./visualVariablesUtils2.js";
import "./createSymbolSchema.js";
import "./ExpandedCIM.js";
import "./BidiEngine.js";
import "./Rect.js";
import "./quantizationUtils.js";
import "./GeometryUtils.js";
import "./floatRGBA.js";
import "./floorFilterUtils.js";
import "./popupUtils.js";
import "./RefreshableLayerView.js";
function l(e2, t$1) {
  if (t(e2) && t(t$1))
    return null;
  const i = {};
  return r(t$1) && (i.geometry = t$1.toJSON()), r(e2) && (i.where = e2), i;
}
let d = class extends B {
  constructor() {
    super(...arguments), this._enabledDataReceived = false, this.errorString = null, this.connectionStatus = "disconnected";
  }
  initialize() {
    this.handles.add([l$1(() => {
      var _a;
      return (_a = this.layer) == null ? void 0 : _a.purgeOptions;
    }, () => this._update()), l$1(() => this.suspended, (e2) => {
      e2 ? this._proxy.pauseStream() : this._proxy.resumeStream();
    })]);
  }
  get connectionError() {
    if (this.errorString)
      return new s("stream-controller", this.errorString);
  }
  on(e2, t2) {
    e2 === "data-received" && (this._enabledDataReceived = true, this._proxy.enableEvent("data-received", true));
    const r2 = super.on(e2, t2), s2 = this;
    return { remove() {
      r2.remove(), e2 === "data-received" && (s2._proxy.closed || s2.hasEventListener("data-received") || s2._proxy.enableEvent("data-received", false));
    } };
  }
  queryLatestObservations(e2, r2) {
    if (!(this.layer.timeInfo.endField || this.layer.timeInfo.startField))
      throw new s("streamlayer-no-timeField", "queryLatestObservation can only be used with services that define a TrackIdField");
    return this._proxy.queryLatestObservations(this._cleanUpQuery(e2), r2).then((e3) => {
      const t2 = x.fromJSON(e3);
      return t2.features.forEach((e4) => {
        e4.layer = this.layer, e4.sourceLayer = this.layer;
      }), t2;
    });
  }
  detach() {
    super.detach(), this.connectionStatus = "disconnected";
  }
  _createClientOptions() {
    return __spreadProps(__spreadValues({}, super._createClientOptions()), { setProperty: (e2) => {
      this.set(e2.propertyName, e2.value);
    } });
  }
  _createTileRendererHash(e2) {
    const t2 = `${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression, this.layer.geometryDefinition))})`;
    return super._createTileRendererHash(e2) + t2;
  }
  async _createServiceOptions() {
    const e2 = this.layer, { objectIdField: t2 } = e2, r2 = e2.fields.map((e3) => e3.toJSON()), s2 = e$1(e2.geometryType), i = e2.timeInfo && e2.timeInfo.toJSON() || null, o = e2.spatialReference ? e2.spatialReference.toJSON() : null;
    return { type: "stream", fields: r2, geometryType: s2, objectIdField: t2, timeInfo: i, source: this.layer.parsedUrl, serviceFilter: l(this.layer.definitionExpression, this.layer.geometryDefinition), purgeOptions: this.layer.purgeOptions.toJSON(), enableDataReceived: this._enabledDataReceived, spatialReference: o, maxReconnectionAttempts: this.layer.maxReconnectionAttempts, maxReconnectionInterval: this.layer.maxReconnectionInterval, updateInterval: this.layer.updateInterval, customParameters: e2.customParameters };
  }
};
e([y()], d.prototype, "errorString", void 0), e([y({ readOnly: true })], d.prototype, "connectionError", null), e([y()], d.prototype, "connectionStatus", void 0), d = e([n("esri.views.2d.layers.StreamLayerView2D")], d);
const u = d;
export { u as default };
