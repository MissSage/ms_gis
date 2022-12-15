import{a8 as p,fD as m,nS as u,O as g,d0 as d,bt as f,dl as _,dw as w,$ as E,Y as h,a_ as F,a9 as q,K as j,bs as b}from"./vendor.1bde3be2.js";import{u as S}from"./FeatureStore.3048bb4f.js";import{Y as x}from"./QueryEngine.e161872a.js";import{T,I}from"./geojson.fd5f76e5.js";import{m as C}from"./sourceUtils.ca9b5ccf.js";import{K as P}from"./wfsUtils.e16915d0.js";import"./PooledRBush.80db976d.js";import"./optimizedFeatureQueryEngineAdapter.a3dff0e0.js";import"./centroid.27e27241.js";import"./QueryEngineCapabilities.78217f95.js";import"./timeSupport.f2cf5a12.js";import"./xmlUtils.56e603f6.js";class v{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{var i;const{objectIdField:t}=this._queryEngine,r=await P((i=this._getFeatureUrl)!=null?i:"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(s=>s.name),signal:e});await T(r),p(e);const a=I(r,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!m(this._queryEngine.spatialReference,u))for(const s of a)g(s.geometry)&&(s.geometry=d(f(_(s.geometry,this._queryEngine.geometryType,!1,!1),u,this._queryEngine.spatialReference)));let n=1;for(const s of a){const o={};C(this._fieldsIndex,o,s.attributes,!0),s.attributes=o,s.attributes[t]==null&&(s.objectId=s.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:a,spatialReference:n,fields:i,geometryType:s,featureType:o,objectIdField:y,customParameters:c}=e;this._featureType=o,this._customParameters=c,this._getFeatureUrl=r,this._getFeatureOutputFormat=a,this._fieldsIndex=new w(i),await this._checkProjection(n),p(t),this._queryEngine=new x({fields:i,geometryType:s,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new S({geometryType:s,hasM:!1,hasZ:!1})});const l=await this._snapshotFeatures(E(t.signal));return this._queryEngine.featureStore.addMany(l),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new h("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=F(this._snapshotFeatures),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),r&&this._queryEngine.featureStore.addMany(r)},r=>{this._queryEngine.featureStore.clear(),q(r)||j.getLogger("esri.layers.WFSLayer").error(new h("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await b(u,e)}catch{throw new h("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{v as default};
