var re=Object.defineProperty,ae=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var M=(y,e,t)=>e in y?re(y,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):y[e]=t,j=(y,e)=>{for(var t in e||(e={}))ue.call(e,t)&&M(y,t,e[t]);if(P)for(var t of P(e))oe.call(e,t)&&M(y,t,e[t]);return y},Z=(y,e)=>ae(y,ne(e));import{nU as ce,gP as N,nV as he,dw as le,h$ as U,eU as D,U as x,nW as q,nX as b,nY as d,ku as fe,m$ as de,kB as ye,bt as k,dI as B,nZ as me,fD as E,bs as z,nk as V,dm as H,Y as Q,O as S,jk as L,bG as W,n_ as J,eZ as Y,lD as pe,lB as ge,n$ as xe,o0 as _e,o1 as we,d0 as Se,br as Fe,ci as X,b6 as Qe,bj as Re,b1 as Ie,iS as be,o2 as $,o3 as Ee,o4 as Ae,o5 as ke}from"./vendor.1bde3be2.js";import{t as $e}from"./QueryEngineCapabilities.78217f95.js";import{t as je,v as T,n as Te,I as K,P as ee}from"./timeSupport.f2cf5a12.js";function ve(y){return y.every(e=>e.statisticType!=="exceedslimit")}const R="feature-store:unsupported-query",Ce=new ce(2e6);let qe=0;class Me{constructor(e){this.capabilities={query:$e},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new he(qe+++"$$",Ce)),this.fieldsIndex=new le(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=U(this._frameTask),this.clearCache(),D(this._geometryQueryCache),this._changeHandle=U(this._changeHandle),D(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return x(e)?null:{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:q(this.spatialReference)}}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=je(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){var e;(e=this._geometryQueryCache)==null||e.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e,t){try{return(await this._executeQuery(e,{},t)).createQueryResponse()}catch(s){if(s!==b)throw s;return new d([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},t)).createQueryResponseForCount()}catch(s){if(s!==b)throw s;return 0}}async executeQueryForExtent(e,t){const s=e.outSR;try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),r=i.size;if(!r)return{count:0,extent:null};fe(_,de),this.featureStore.forEachBounds(i.items,u=>ye(_,u),Be);const n={xmin:_[0],ymin:_[1],xmax:_[3],ymax:_[4],spatialReference:q(this.spatialReference)};this.hasZ&&isFinite(_[2])&&isFinite(_[5])&&(n.zmin=_[2],n.zmax=_[5]);const a=k(n,i.spatialReference,s);if(a.spatialReference=q(s||this.spatialReference),a.xmax-a.xmin==0){const u=B(a.spatialReference);a.xmin-=u,a.xmax+=u}if(a.ymax-a.ymin==0){const u=B(a.spatialReference);a.ymin-=u,a.ymax+=u}if(this.hasZ&&a.zmin!=null&&a.zmax!=null&&a.zmax-a.zmin==0){const u=B(a.spatialReference);a.zmin-=u,a.zmax+=u}return{count:r,extent:a}}catch(i){if(i===b)return{count:0,extent:null};throw i}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e,t){try{const s=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),i=s.items,r=new Set;return await this._reschedule(()=>{for(const n of i)r.add(s.featureAdapter.getObjectId(n))},t),r}catch(s){if(s===b)return new Set;throw s}}async executeQueryForSnapping(e,t){const{point:s,distance:i,types:r}=e;if(r===me.NONE)return{candidates:[]};const n=await this._reschedule(()=>this._checkQuerySupport(e.query),t),a=!E(s.spatialReference,this.spatialReference);a&&await z(s.spatialReference,this.spatialReference);const u=typeof i=="number"?i:i.x,h=typeof i=="number"?i:i.y,c={xmin:s.x-u,xmax:s.x+u,ymin:s.y-h,ymax:s.y+h,spatialReference:s.spatialReference},o=a?k(c,this.spatialReference):c;if(!o)return{candidates:[]};const m=(await V(H(s),null,{signal:t}))[0],p=(await V(H(o),null,{signal:t}))[0];if(x(m)||x(p))return{candidates:[]};const w=new d(this._searchFeatures(this._getQueryBBoxes(p.toJSON())),n,this);await this._reschedule(()=>this._executeObjectIdsQuery(w),t),await this._reschedule(()=>this._executeTimeQuery(w),t),await this._reschedule(()=>this._executeAttributesQuery(w),t);const l=m.toJSON(),F=a?k(l,this.spatialReference):l,g=a?Math.max(o.xmax-o.xmin,o.ymax-o.ymin)/2:i;return w.createSnappingResponse(Z(j({},e),{point:F,distance:g}),s.spatialReference)}async executeQueryForLatestObservations(e,t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new Q(R,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const s=await this._executeQuery(e,{},t);return await this._reschedule(()=>this._filterLatest(s),t),s.createQueryResponse()}catch(s){if(s!==b)throw s;return new d([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,s){const{field:i,normalizationField:r,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:n},s)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const{field:i,field2:r,field3:n,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,field2:r,field3:n,valueExpression:a},s)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const{field:i,normalizationField:r,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:n},s)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const{field:i,normalizationField:r,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:n},s)).createHistogramResponse(t)}async _schedule(e,t){return S(this._frameTask)?this._frameTask.schedule(e,t):e(L)}async _reschedule(e,t){return S(this._frameTask)?this._frameTask.reschedule(e,t):e(L)}_getAll(e){return x(this._allItems)&&(this._allItems=this.featureStore.toArray()),new d(this._allItems,e,this)}async _executeQuery(e,t,s){e=W(e),e=await this._schedule(()=>J(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkQuerySupport(e),s),e=j(j({},e),t);const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),r=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(r),s),await this._reschedule(()=>this._executeObjectIdsQuery(r),s),await this._reschedule(()=>this._executeTimeQuery(r),s),await this._reschedule(()=>this._executeAttributesQuery(r),s),r}async _executeSceneFilterQuery(e,t){if(x(e.sceneFilter))return null;const{outSR:s,returnGeometry:i,returnCentroid:r}=e,n=this.featureStore.featureSpatialReference,a=e.sceneFilter.geometry,u=x(n)||E(n,a.spatialReference)?a:k(a,n);if(!u)return null;const h=i||r,c=Y(s)&&!E(this.spatialReference,s)&&h?async l=>this._project(l,s):l=>l,o=this.featureAdapter,m=this._searchFeatures(this._getQueryBBoxes(u));if(e.sceneFilter.spatialRelationship==="disjoint"){if(!m.length)return null;const l=new Set;for(const A of m)l.add(o.getObjectId(A));const F=await this._reschedule(()=>this.featureStore.toArray(),t),g=await this._reschedule(async()=>{const A=await T("esriSpatialRelDisjoint",u,this.geometryType,this.hasZ,this.hasM),v=I=>!l.has(o.getObjectId(I))||A(o.getGeometry(I)),f=await this._runSpatialFilter(F,v,t);return new d(f,e,this)},t);return c(g)}if(!m.length)return new d([],e,this);if(this._canExecuteSinglePass(u,e))return c(new d(m,e,this));const p=await T("esriSpatialRelContains",u,this.geometryType,this.hasZ,this.hasM),w=await this._runSpatialFilter(m,l=>p(o.getGeometry(l)),t);return c(new d(w,e,this))}async _executeGeometryQuery(e,t,s){if(S(t)&&t.items.length===0)return t;e=S(t)?t.query:e;const{geometry:i,outSR:r,spatialRel:n,returnGeometry:a,returnCentroid:u}=e,h=this.featureStore.featureSpatialReference,c=!i||x(h)||E(h,i.spatialReference)?i:k(i,h),o=a||u,m=Y(r)&&!E(this.spatialReference,r),p=this._geometryQueryCache&&x(t)?m&&o?JSON.stringify({originalFilterGeometry:i,spatialRelationship:n,outSpatialReference:r}):JSON.stringify({originalFilterGeometry:i,spatialRelationship:n}):null,w=p?this._geometryQueryCache.get(p):null;if(S(w))return new d(w,e,this);const l=async f=>(m&&o&&await this._project(f,r),p&&this._geometryQueryCache.put(p,f.items,f.items.length+1),f);if(!c)return l(S(t)?t:this._getAll(e));const F=this.featureAdapter;let g=this._searchFeatures(this._getQueryBBoxes(i));if(n==="esriSpatialRelDisjoint"){if(!g.length)return l(S(t)?t:this._getAll(e));const f=new Set;for(const C of g)f.add(F.getObjectId(C));const I=S(t)?t.items:await this._reschedule(()=>this.featureStore.toArray(),s),te=await this._reschedule(async()=>{const C=await T(n,c,this.geometryType,this.hasZ,this.hasM),se=G=>!f.has(F.getObjectId(G))||C(F.getGeometry(G)),ie=await this._runSpatialFilter(I,se,s);return new d(ie,e,this)},s);return l(te)}if(S(t)){const f=new pe;g=g.filter(I=>ge(t.items,I,t.items.length,f)>=0)}if(!g.length){const f=new d([],e,this);return p&&this._geometryQueryCache.put(p,f.items,1),f}if(this._canExecuteSinglePass(c,e))return l(new d(g,e,this));const A=await T(n,c,this.geometryType,this.hasZ,this.hasM),v=await this._runSpatialFilter(g,f=>A(F.getGeometry(f)),s);return l(new d(v,e,this))}_executeAggregateIdsQuery(e){if(e.items.length===0||!e.query.aggregateIds||!e.query.aggregateIds.length||x(this.aggregateAdapter))return;const t=new Set;for(const i of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach(r=>t.add(r));const s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeObjectIdsQuery(e){if(e.items.length===0||!e.query.objectIds||!e.query.objectIds.length)return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=Te(this.timeInfo,e.query.timeExtent,this.featureAdapter);x(t)||(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=xe(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(s=>t.testFeature(s,this.featureAdapter))}}async _runSpatialFilter(e,t,s){if(!t)return e;if(x(this._frameTask))return e.filter(a=>t(a));let i=0;const r=new Array,n=async a=>{for(;i<e.length;){const u=e[i++];t(u)&&(r.push(u),a.madeProgress()),a.done&&await this._reschedule(h=>n(h),s)}};return this._reschedule(a=>n(a),s).then(()=>r)}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,r=i||s,n=new Map,a=this.featureAdapter.getAttribute;for(const u of e.items){const h=a(u,t),c=a(u,r),o=n.get(h);(!o||c>a(o,r))&&n.set(h,u)}e.items=Array.from(n.values())}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return K(e)&&(s==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(s==="esriSpatialRelIntersects"||s==="esriSpatialRelContains"||s==="esriSpatialRelWithin"))}async _project(e,t){if(!t||E(this.spatialReference,t))return e;const s=this.featureAdapter,i=await _e(e.items.map(r=>we(this.geometryType,this.hasZ,this.hasM,s.getGeometry(r))),this.spatialReference,t);return e.items=i.map((r,n)=>s.cloneWithGeometry(e.items[n],Se(r,this.hasZ,this.hasM))),e}_getQueryBBoxes(e){if(K(e)){if(Fe(e))return[X(e.xmin,e.ymin,e.xmax,e.ymax)];if(Qe(e))return e.rings.map(t=>X(Math.min(t[0][0],t[2][0]),Math.min(t[0][1],t[2][1]),Math.max(t[0][0],t[2][0]),Math.max(t[0][1],t[2][1])))}return[Re(Ie(),e)]}_searchFeatures(e){for(const s of e)this.featureStore.forEachInBounds(s,i=>O.add(i));const t=Array.from(O.values());return O.clear(),t}async _checkStatisticsSupport(e,t){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new Q(R,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),Promise.all([this._checkStatisticsParamsSupport(t),ee(e,this.geometryType,this.spatialReference),z(this.spatialReference,e.outSR)]).then(()=>e)}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:s}=await be();t=s.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.field2&&t.push(e.field2),e.field3&&t.push(e.field3),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new Q(R,"params should have at least a field or valueExpression",{params:e});$(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new Q(R,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Promise.all([ee(e,this.geometryType,this.spatialReference),z(this.spatialReference,e.outSR)]).then(()=>e)}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:s,returnDistinctValues:i,outStatistics:r}=e,n=r?r.map(a=>a.outStatisticFieldName&&a.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(s&&s.length>0){const a=" asc",u=" desc",h=s.map(c=>{const o=c.toLowerCase();return o.includes(a)?o.split(a)[0]:o.includes(u)?o.split(u)[0]:c}).filter(c=>!n.includes(c));$(this.fieldsIndex,h,"orderByFields contains missing fields")}if(t&&t.length>0)$(this.fieldsIndex,t,"outFields contains missing fields");else if(i)throw new Q(R,"outFields should be specified for returnDistinctValues",{query:e});Ee(this.fieldsIndex,e.where)}_checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:s,having:i}=e,r=s&&s.length,n=t&&t.length;if(i){if(!r||!n)throw new Q(R,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});Ae(this.fieldsIndex,i,t)}if(n){if(!ve(t))return;const a=t.map(u=>u.onStatisticField).filter(Boolean);$(this.fieldsIndex,a,"onStatisticFields contains missing fields"),r&&$(this.fieldsIndex,s,"groupByFieldsForStatistics contains missing fields");for(const u of t){const{onStatisticField:h,statisticType:c}=u;if((c==="percentile_disc"||c==="percentile_cont")&&"statisticParameters"in u){const{statisticParameters:o}=u;if(!o)throw new Q(R,"statisticParamters should be set for percentile type",{definition:u,query:e})}else if(c!=="count"&&h&&ke(h,this.fieldsIndex))throw new Q(R,"outStatistics contains non-numeric fields",{definition:u,query:e})}}}async _getQueryEngineResultForStats(e,t,s){e=W(e);try{e=await this._schedule(()=>J(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkStatisticsSupport(e,t),s);const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),r=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(r),s),await this._reschedule(()=>this._executeObjectIdsQuery(r),s),await this._reschedule(()=>this._executeTimeQuery(r),s),await this._reschedule(()=>this._executeAttributesQuery(r),s),r}catch(i){if(i!==b)throw i;return new d([],e,this)}}}const Be=N(),_=N(),O=new Set;export{Me as Y};
