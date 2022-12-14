var __defProp = Object.defineProperty;
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
import { N as n$1, g as s, $ as e, a0 as y, a1 as n$2, g1 as o, a as r, t as t$1, dv as Bt, s as s$1, b5 as U, D, U as U$1, c0 as v, cO as x, b4 as i, gk as q, aK as k, fL as c$1 } from "./index.js";
import "vue";
let c = class extends n$1.EventedAccessor {
  get connectionError() {
    return this.errorString ? new s("stream-connection", this.errorString) : null;
  }
  onFeature(r2) {
    this.emit("data-received", r2);
  }
};
e([y({ readOnly: true })], c.prototype, "connectionError", null), c = e([n$2("esri.layers.support.StreamConnection")], c);
const n = c;
var p$1;
!function(e2) {
  e2[e2.CONNECTING = 0] = "CONNECTING", e2[e2.OPEN = 1] = "OPEN", e2[e2.CLOSING = 2] = "CLOSING", e2[e2.CLOSED = 3] = "CLOSED";
}(p$1 || (p$1 = {}));
let u = class extends n {
  constructor(e2) {
    super(), this.errorString = null;
    const { geometryType: t2, spatialReference: o$1, sourceSpatialReference: s2 } = e2;
    this._config = e2, this._featureZScaler = o(t2, s2, o$1), this._open();
  }
  async _open() {
    await this._tryCreateWebSocket(), this.destroyed || await this._handshake();
  }
  destroy() {
    r(this._websocket) && (this._websocket.onopen = null, this._websocket.onclose = null, this._websocket.onerror = null, this._websocket.onmessage = null, this._websocket.close()), this._websocket = null;
  }
  get connectionStatus() {
    if (t$1(this._websocket))
      return "disconnected";
    switch (this._websocket.readyState) {
      case p$1.CONNECTING:
      case p$1.OPEN:
        return "connected";
      case p$1.CLOSING:
      case p$1.CLOSED:
        return "disconnected";
    }
  }
  async _tryCreateWebSocket(e2 = this._config.source.path, s$2 = 1e3, r2 = 0) {
    try {
      if (this.destroyed)
        return;
      const t2 = Bt(e2, this._config.customParameters);
      this._websocket = await this._createWebSocket(t2), this.notifyChange("connectionStatus");
    } catch (c2) {
      const i2 = s$2 / 1e3;
      return this._config.maxReconnectionAttempts && r2 >= this._config.maxReconnectionAttempts ? (s$1.getLogger(this.declaredClass).error(new s("websocket-connection", "Exceeded maxReconnectionAttempts attempts. No further attempts will be made")), void this.destroy()) : (s$1.getLogger(this.declaredClass).error(new s("websocket-connection", `Failed to connect. Attempting to reconnect in ${i2}s`, c2)), await U(s$2), this._tryCreateWebSocket(e2, Math.min(1.5 * s$2, 1e3 * this._config.maxReconnectionInterval), r2 + 1));
    }
  }
  _createWebSocket(e2) {
    return new Promise((t2, o2) => {
      const s2 = new WebSocket(e2);
      s2.onopen = () => {
        if (s2.onopen = null, this.destroyed)
          return s2.onclose = null, void s2.close();
        s2.onclose = (e3) => this._onClose(e3), s2.onerror = (e3) => this._onError(e3), s2.onmessage = (e3) => this._onMessage(e3), t2(s2);
      }, s2.onclose = (e3) => {
        s2.onopen = s2.onclose = null, o2(e3);
      };
    });
  }
  async _handshake(e2 = 1e4) {
    const s$2 = this._websocket;
    if (t$1(s$2))
      return;
    const n2 = D(), i2 = s$2.onmessage, { filter: a, outFields: l, spatialReference: d } = this._config;
    return n2.timeout(e2), s$2.onmessage = (e3) => {
      var _a;
      let r2 = null;
      try {
        r2 = JSON.parse(e3.data);
      } catch (c2) {
      }
      r2 && typeof r2 == "object" || (s$1.getLogger(this.declaredClass).error(new s("websocket-connection", "Protocol violation. Handshake failed - malformed message", e3.data)), n2.reject(), this.destroy()), ((_a = r2.spatialReference) == null ? void 0 : _a.wkid) !== (d == null ? void 0 : d.wkid) && (s$1.getLogger(this.declaredClass).error(new s("websocket-connection", `Protocol violation. Handshake failed - expected wkid of ${d.wkid}`, e3.data)), n2.reject(), this.destroy()), r2.format !== "json" && (s$1.getLogger(this.declaredClass).error(new s("websocket-connection", "Protocol violation. Handshake failed - format is not set", e3.data)), n2.reject(), this.destroy()), a && r2.filter !== a && s$1.getLogger(this.declaredClass).error(new s("websocket-connection", "Tried to set filter, but server doesn't support it")), l && r2.outFields !== l && s$1.getLogger(this.declaredClass).error(new s("websocket-connection", "Tried to set outFields, but server doesn't support it")), s$2.onmessage = i2, n2.resolve();
    }, s$2.send(JSON.stringify({ filter: a, outFields: l, format: "json", spatialReference: { wkid: d.wkid } })), n2.promise;
  }
  _onMessage(e2) {
    try {
      const o2 = JSON.parse(e2.data);
      if (o2.type !== "featureResult")
        throw new s("websocket-connection", "Protocol violation - Expected to find message of type 'featureResult'", o2);
      for (const e3 of o2.features)
        r(this._featureZScaler) && this._featureZScaler(e3.geometry), this.onFeature(e3);
    } catch (r2) {
      return s$1.getLogger(this.declaredClass).error(new s("websocket-connection", "Failed to parse message", r2)), void this.destroy();
    }
  }
  _onError(e2) {
    const t2 = "Encountered an error over WebSocket connection";
    this._set("errorString", t2), s$1.getLogger(this.declaredClass).error("websocket-connection", t2);
  }
  _onClose(e2) {
    this._websocket = null, this.notifyChange("connectionStatus"), e2.code !== 1e3 && s$1.getLogger(this.declaredClass).error("websocket-connection", `WebSocket closed unexpectedly with error code ${e2.code}`), this.destroyed || this._open();
  }
};
e([y()], u.prototype, "connectionStatus", null), e([y()], u.prototype, "errorString", void 0), u = e([n$2("esri.layers.graphics.sources.connections.WebSocketConnection")], u);
const m = 1e4, p = { maxQueryDepth: 5, maxRecordCountFactor: 3 };
let _ = class extends u {
  constructor(e2) {
    super(__spreadValues(__spreadValues({}, p), e2));
  }
  async _open() {
    const e2 = await this._fetchServiceDefinition(this._config.source);
    e2.timeInfo.trackIdField || s$1.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");
    const t2 = this._fetchWebSocketUrl(e2.streamUrls, this._config.spatialReference);
    this._buddyServicesQuery || (this._buddyServicesQuery = this._queryBuddyServices()), await this._buddyServicesQuery, await this._tryCreateWebSocket(t2);
    const { filter: r2, outFields: o2 } = this._config;
    this.destroyed || this._setFilter(r2, o2);
  }
  _onMessage(e2) {
    let t2;
    try {
      t2 = this._enrich(JSON.parse(e2.data)), r(this._featureZScaler) && this._featureZScaler(t2.geometry);
    } catch (i2) {
      return void s$1.getLogger(this.declaredClass).error(new s("geoevent-connection", "Failed to parse message", i2));
    }
    this.onFeature(t2);
  }
  async _fetchServiceDefinition(e2) {
    const r2 = __spreadValues({ f: "json" }, this._config.customParameters), s2 = U$1(e2.path, { query: r2, responseType: "json" }), o2 = (await s2).data;
    return this._serviceDefinition = o2, o2;
  }
  _fetchWebSocketUrl(e2, t2) {
    const r2 = e2[0], { urls: s2, token: o2 } = r2, i2 = this._inferWebSocketBaseUrl(s2);
    return Bt(`${i2}/subscribe`, { outSR: "" + t2.wkid, token: o2 });
  }
  _inferWebSocketBaseUrl(e2) {
    if (e2.length === 1)
      return e2[0];
    for (const t2 of e2)
      if (t2.includes("wss"))
        return t2;
    return s$1.getLogger(this.declaredClass).error(new s("geoevent-connection", "Unable to infer WebSocket url", e2)), null;
  }
  async _setFilter(e2, t2) {
    const o2 = this._websocket;
    if (t$1(o2) || t$1(e2) && t$1(t2))
      return;
    const n2 = JSON.stringify({ filter: this._serializeFilter(e2, t2) });
    let a = false;
    const u2 = D(), d = () => {
      a || (this.destroyed || this._websocket !== o2 || s$1.getLogger(this.declaredClass).error(new s("geoevent-connection", "Server timed out when setting filter")), u2.reject());
    }, l = (e3) => {
      const t3 = JSON.parse(e3.data);
      t3.filter && (t3.error && (s$1.getLogger(this.declaredClass).error(new s("geoevent-connection", "Failed to set service filter", t3.error)), this._set("errorString", `Could not set service filter - ${t3.error}`), u2.reject(t3.error)), o2.onmessage = this._onMessage.bind(this), a = true, u2.resolve());
    };
    return o2.onmessage = l, o2.send(n2), setTimeout(d, m), u2.promise;
  }
  _serializeFilter(e2, t2) {
    const n2 = {};
    if (t$1(e2) && t$1(t2))
      return n2;
    if (r(e2) && e2.geometry)
      try {
        const t3 = v(e2.geometry);
        if (t3.type !== "extent")
          throw new s(`Expected extent but found type ${t3.type}`);
        n2.geometry = JSON.stringify(t3.shiftCentralMeridian());
      } catch (a) {
        s$1.getLogger(this.declaredClass).error(new s("geoevent-connection", "Encountered an error when setting connection geometryDefinition", a));
      }
    return r(e2) && e2.where && e2.where !== "1 = 1" && (n2.where = e2.where), r(t2) && (n2.outFields = t2.join(",")), n2;
  }
  _enrich(e2) {
    if (!this._relatedFeatures)
      return e2;
    const t2 = this._serviceDefinition.relatedFeatures.joinField, o2 = e2.attributes[t2];
    if (!this._relatedFeatures.has(o2))
      return s$1.getLogger(this.declaredClass).warn("geoevent-connection", "Feature join failed. Is the join field configured correctly?", e2), e2;
    const { attributes: i2, geometry: n2 } = this._relatedFeatures.get(o2);
    for (const r2 in i2)
      e2.attributes[r2] = i2[r2];
    return n2 && (e2.geometry = n2), e2.geometry || e2.centroid || s$1.getLogger(this.declaredClass).error(new s("geoevent-connection", "Found malformed feature - no geometry found", e2)), e2;
  }
  async _queryBuddyServices() {
    try {
      const { relatedFeatures: e2, keepLatestArchive: t2 } = this._serviceDefinition, r2 = this._queryRelatedFeatures(e2), s2 = this._queryArchive(t2);
      await r2;
      const o2 = await s2;
      if (!o2)
        return;
      for (const i2 of o2.features)
        this.onFeature(this._enrich(i2));
    } catch (e2) {
      s$1.getLogger(this.declaredClass).error(new s("geoevent-connection", "Encountered an error when querying buddy services", { error: e2 }));
    }
  }
  async _queryRelatedFeatures(e2) {
    if (!e2)
      return;
    const t2 = await this._queryBuddy(e2.featuresUrl);
    this._addRelatedFeatures(t2);
  }
  async _queryArchive(e2) {
    if (e2)
      return this._queryBuddy(e2.featuresUrl);
  }
  async _queryBuddy(e2) {
    const t2 = new (await import("./index.js").then(function(n2) {
      return n2.l4;
    })).default({ url: e2 }), { capabilities: r2 } = await t2.load(), s2 = r2.query.supportsMaxRecordCountFactor, o2 = r2.query.supportsPagination, i$1 = r2.query.supportsCentroid, c2 = this._config.maxRecordCountFactor, u2 = t2.capabilities.query.maxRecordCount, d = s2 ? u2 * c2 : u2, l = new x();
    if (l.outFields = i(this._config.outFields, ["*"]), l.where = i(q(this._config.filter, "where"), "1=1"), l.returnGeometry = true, l.returnExceededLimitFeatures = true, l.outSpatialReference = k.fromJSON(this._config.spatialReference), i$1 && (l.returnCentroid = true), s2 && (l.maxRecordCountFactor = c2), o2)
      return l.num = d, t2.destroy(), this._queryPages(e2, l);
    const g = await c$1(e2, l, this._config.sourceSpatialReference);
    return t2.destroy(), g.data;
  }
  async _queryPages(e2, t2, r$1 = [], s2 = 0) {
    t2.start = r(t2.num) ? s2 * t2.num : null;
    const { data: i2 } = await c$1(e2, t2, this._config.sourceSpatialReference);
    return i2.exceededTransferLimit && s2 < this._config.maxQueryDepth ? (i2.features.forEach((e3) => r$1.push(e3)), this._queryPages(e2, t2, r$1, s2 + 1)) : (r$1.forEach((e3) => i2.features.push(e3)), i2);
  }
  _addRelatedFeatures(e2) {
    const t2 = new Map(), r2 = e2.features, s2 = this._serviceDefinition.relatedFeatures.joinField;
    for (const o2 of r2) {
      const e3 = o2.attributes[s2];
      t2.set(e3, o2);
    }
    this._relatedFeatures = t2;
  }
};
_ = e([n$2("esri.layers.graphics.sources.connections.GeoEventConnection")], _);
const w = _;
function t(t2, o2, r2, c2, i2, s2, a, m2) {
  const p2 = t2.path.indexOf("wss://") === 0 || t2.path.indexOf("ws://") === 0, f = { source: t2, sourceSpatialReference: o2, spatialReference: r2, geometryType: c2, filter: i2, maxReconnectionAttempts: s2, maxReconnectionInterval: a, customParameters: m2 };
  return p2 ? new u(f) : new w(f);
}
export { t as createConnection };
