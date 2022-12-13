import { $ as e, a0 as y, cD as o, aK as k, a1 as n } from "./index.js";
import { r, z } from "./TilemapCache.js";
const s = (s2) => {
  let l = class extends s2 {
    constructor() {
      super(...arguments), this.copyright = null, this.minScale = 0, this.maxScale = 0, this.spatialReference = null, this.tileInfo = null, this.tilemapCache = null;
    }
    readMinScale(e2, r2) {
      return r2.minLOD != null && r2.maxLOD != null ? e2 : 0;
    }
    readMaxScale(e2, r2) {
      return r2.minLOD != null && r2.maxLOD != null ? e2 : 0;
    }
    get supportsBlankTile() {
      return this.version >= 10.2;
    }
    readTilemapCache(e2, r2) {
      return r2.capabilities && r2.capabilities.includes("Tilemap") ? new z({ layer: this }) : null;
    }
  };
  return e([y({ json: { read: { source: "copyrightText" } } })], l.prototype, "copyright", void 0), e([y()], l.prototype, "minScale", void 0), e([o("service", "minScale")], l.prototype, "readMinScale", null), e([y()], l.prototype, "maxScale", void 0), e([o("service", "maxScale")], l.prototype, "readMaxScale", null), e([y({ type: k })], l.prototype, "spatialReference", void 0), e([y({ readOnly: true })], l.prototype, "supportsBlankTile", null), e([y(r)], l.prototype, "tileInfo", void 0), e([y()], l.prototype, "tilemapCache", void 0), e([o("service", "tilemapCache", ["capabilities"])], l.prototype, "readTilemapCache", null), e([y()], l.prototype, "version", void 0), l = e([n("esri.layers.mixins.ArcGISCachedService")], l), l;
};
export { s };
