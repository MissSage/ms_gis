import{O as p,X as d}from"./vendor.1bde3be2.js";import{h as c}from"./PooledRBush.80db976d.js";import{k as h}from"./georeference.e9b8d2df.js";import"./axisAngleDegrees.735a5767.js";import"./BufferView.a124dc0f.js";import"./vec33.eeba1728.js";import"./projection.f5ba880b.js";class g{async createIndex(t,o){const r=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new c;const s=this._createMeshData(t),n=p(o)?await o.invoke("createIndexThread",s,{transferList:r}):this.createIndexThread(s).result;return this._createPooledRBush().fromJSON(n)}createIndexThread(t){const o=new Float64Array(t.position),r=this._createPooledRBush();return t.components?this._createIndexComponentsThread(r,o,t.components.map(s=>new Uint32Array(s))):this._createIndexAllThread(r,o)}_createIndexAllThread(t,o){const r=new Array(o.length/9);let s=0;for(let n=0;n<o.length;n+=9)r[s++]=m(o,n+0,n+3,n+6);return t.load(r),{result:t.toJSON()}}_createIndexComponentsThread(t,o,r){let s=0;for(const a of r)s+=a.length/3;const n=new Array(s);let l=0;for(const a of r)for(let i=0;i<a.length;i+=3)n[l++]=m(o,3*a[i+0],3*a[i+1],3*a[i+2]);return t.load(n),{result:t.toJSON()}}_createMeshData(t){const o=(t.transform?h({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(r=>!r.faces)?{position:o}:{position:o,components:t.components.map(r=>r.faces)}}_createPooledRBush(){return new c(9,d("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function m(e,t,o,r){return{minX:Math.min(e[t+0],e[o+0],e[r+0]),maxX:Math.max(e[t+0],e[o+0],e[r+0]),minY:Math.min(e[t+1],e[o+1],e[r+1]),maxY:Math.max(e[t+1],e[o+1],e[r+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[o+0],e[o+1],e[o+2]],p2:[e[r+0],e[r+1],e[r+2]]}}export{g as default};
