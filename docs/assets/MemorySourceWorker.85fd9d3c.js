var Z=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var w=(y,e,t)=>e in y?Z(y,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):y[e]=t,D=(y,e)=>{for(var t in e||(e={}))P.call(e,t)&&w(y,t,e[t]);if(q)for(var t of q(e))k.call(e,t)&&w(y,t,e[t]);return y},O=(y,e)=>A(y,C(e));import{a3 as b,ox as z,nV as G,dC as B,by as _,$ as U,b9 as F,bB as S,W as j,bz as E,du as Q,dw as W,oy as L,nY as v}from"./vendor.faf54504.js";import{t as V,n as Y}from"./objectIdUtils.83ac3f67.js";import{u as H}from"./FeatureStore.f1512574.js";import{Y as X}from"./QueryEngine.6e998ac4.js";import{i as J,o as K,a as N}from"./clientSideDefaults.ea7dff51.js";import{w as ee,a as I,m as x,f as T,g as M}from"./sourceUtils.7fde31ff.js";import"./PooledRBush.9c181640.js";import"./optimizedFeatureQueryEngineAdapter.49289286.js";import"./centroid.a98813ae.js";import"./QueryEngineCapabilities.78217f95.js";import"./timeSupport.5a83cf41.js";const te=v,ie={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:v},se={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function ne(y){return S(y)?y.z!=null:!!y.hasZ}function re(y){return S(y)?y.m!=null:!!y.hasM}class Ie{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:n}=e,i=this._inferLayerProperties(n,e.fields),l=e.fields||[],f=e.hasM!=null?e.hasM:i.hasM,m=e.hasZ!=null?e.hasZ:i.hasZ,c=!e.spatialReference&&!i.spatialReference,u=c?te:e.spatialReference||i.spatialReference,a=c?ie:null,p=e.geometryType||i.geometryType,o=!p;let d=e.objectIdField||i.objectIdField,r=e.timeInfo;if(!o&&(c&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!p))throw new b("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!d)throw new b("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(i.objectIdField&&d!==i.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${d}" doesn't match the field name "${i.objectIdField}", found in the provided fields`}),d=i.objectIdField),d&&!i.objectIdField){let s=null;l.some(g=>g.name===d&&(s=g,!0))?(s.type="esriFieldTypeOID",s.editable=!1,s.nullable=!1):l.unshift({alias:d,name:d,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of l){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),!s.name)throw new b("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===d&&(s.type="esriFieldTypeOID"),!z.jsonValues.includes(s.type))throw new b("feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s})}const h={};for(const s of l)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const g=G(s);g!==void 0&&(h[s.name]=g)}if(this._fieldsIndex=new B(l),this._createDefaultAttributes=J(h,d),r){if(r.startTimeField){const s=this._fieldsIndex.get(r.startTimeField);s?(r.startTimeField=s.name,s.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const s=this._fieldsIndex.get(r.endTimeField);s?(r.endTimeField=s.name,s.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const s=this._fieldsIndex.get(r.trackIdField);s?r.trackIdField=s.name:(r.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:r}}),r=null)}const R={warnings:t,featureErrors:[],layerDefinition:O(D({},se),{drawingInfo:K(p),templates:N(h),extent:a,geometryType:p,objectIdField:d,fields:l,hasZ:!!m,hasM:!!f,timeInfo:r}),assignedObjectIds:{}};if(this._queryEngine=new X({fields:l,geometryType:p,hasM:f,hasZ:m,objectIdField:d,spatialReference:u,featureStore:new H({geometryType:p,hasM:f,hasZ:m}),timeInfo:r,cacheSpatialQueries:!0}),!n||!n.length)return this._nextObjectId=V,R;const $=Y(d,n);return this._nextObjectId=$+1,await _(n,u),this._loadInitialFeatures(R,n)}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([ee(t,n),_(e.adds,t),_(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let n,i,l=null,f=null,m=null;for(const c of e){const u=c.geometry;if(!U(u)&&(l||(l=F(u)),f||(f=u.spatialReference),n==null&&(n=ne(u)),i==null&&(i=re(u)),l&&f&&n!=null&&i!=null))break}if(t&&t.length){let c=null;t.some(u=>{const a=u.type==="esriFieldTypeOID",p=!u.type&&u.name&&u.name.toLowerCase()==="objectid";return c=u,a||p})&&(m=c.name)}return{geometryType:l,spatialReference:f,objectIdField:m,hasM:i,hasZ:n}}_loadInitialFeatures(e,t){const{geometryType:n,hasM:i,hasZ:l,objectIdField:f,spatialReference:m,featureStore:c}=this._queryEngine,u=[];for(const a of t){if(a.uid!=null&&(e.assignedObjectIds[a.uid]=-1),a.geometry&&n!==F(a.geometry)){e.featureErrors.push(I("Incorrect geometry type."));continue}const p=this._createDefaultAttributes(),o=x(this._fieldsIndex,p,a.attributes,!0,e.warnings);o?e.featureErrors.push(o):(this._assignObjectId(p,a.attributes,!0),a.attributes=p,a.uid!=null&&(e.assignedObjectIds[a.uid]=a.attributes[f]),j(a.geometry)&&(a.geometry=E(a.geometry,a.geometry.spatialReference,m)),u.push(a))}if(c.addMany(Q([],u,n,l,i,f)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:a,end:p}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[a,p]}return e}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(l,t),n&&n.length&&this._applyUpdateEdits(l,n),i&&i.length){for(const f of i)l.deleteResults.push(T(f));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:l}}_applyAddEdits(e,t){var p;const{addResults:n}=e,{geometryType:i,hasM:l,hasZ:f,objectIdField:m,spatialReference:c,featureStore:u}=this._queryEngine,a=[];for(const o of t){if(o.geometry&&i!==F(o.geometry)){n.push(I("Incorrect geometry type."));continue}const d=this._createDefaultAttributes(),r=x(this._fieldsIndex,d,o.attributes);if(r)n.push(r);else{if(this._assignObjectId(d,o.attributes),o.attributes=d,o.uid!=null){const h=o.attributes[m];e.uidToObjectId[o.uid]=h}if(j(o.geometry)){const h=(p=o.geometry.spatialReference)!=null?p:c;o.geometry=E(M(o.geometry,h),h,c)}a.push(o),n.push(T(o.attributes[m]))}}u.addMany(Q([],a,i,f,l,m))}_applyUpdateEdits({updateResults:e},t){var u;const{geometryType:n,hasM:i,hasZ:l,objectIdField:f,spatialReference:m,featureStore:c}=this._queryEngine;for(const a of t){const{attributes:p,geometry:o}=a,d=p&&p[f];if(d==null){e.push(I(`Identifier field ${f} missing`));continue}if(!c.has(d)){e.push(I(`Feature with object id ${d} missing`));continue}const r=W(c.getFeature(d),n,l,i);if(j(o)){if(n!==F(o)){e.push(I("Incorrect geometry type."));continue}const h=(u=o.spatialReference)!=null?u:m;r.geometry=E(M(o,h),h,m)}if(p){const h=x(this._fieldsIndex,r.attributes,p);if(h){e.push(h);continue}}c.add(L(r,n,l,i,f)),e.push(T(d))}}_assignObjectId(e,t,n=!1){const i=this._queryEngine.objectIdField;n&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}export{Ie as default};
