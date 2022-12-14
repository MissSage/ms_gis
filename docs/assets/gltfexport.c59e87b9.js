import{et as D,E as v,a5 as I,fN as Y,fO as Q,g6 as q,A as g,ay as G,a3 as S,x as ee,gh as k,gp as te,fM as U,rL as se,rM as ie,rN as re,iA as j,lJ as ne,kW as ae,jk as oe,rO as he,rP as ce}from"./vendor.f59460b9.js";import{c as fe}from"./MeshComponent.29e47db5.js";import{M as ue}from"./georeference.07ae0ea2.js";import{C as d,D as b}from"./enums.2d9e6f64.js";import{o as H,i as le,g as de,s as _e}from"./imageutils.34da32fd.js";import"./axisAngleDegrees.8a388e40.js";import"./BufferView.5c51c693.js";import"./vec33.eeb71c8e.js";import"./projection.811b4f07.js";var C;(function(i){i[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN"})(C||(C={}));class T{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=T.HEADER_SIZE,this._length+=T.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this._length+=this._alignTo(s.byteLength,4),t&&(this._length+=T.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,C.JSON,32);t&&this._writeChunk(t,r,C.BIN)}_writeHeader(){this._outView.setUint32(0,T.MAGIC,!0),this._outView.setUint32(4,T.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,r=0){const n=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,n,!0),this._outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)r&&this._outView.setUint8(t,r),t++;return t}_writeArrayBuffer(e,t,s,r,n){new Uint8Array(e,s,n).set(new Uint8Array(t,r,n),0)}_textToArrayBuffer(e){return new TextEncoder().encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}T.HEADER_SIZE=12,T.CHUNK_HEADER_SIZE=8,T.MAGIC=1179937895,T.VERSION=2;var E,y,R,p,Z,L,J;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(E||(E={})),function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"}(y||(y={})),function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(R||(R={})),function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"}(p||(p={})),function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(Z||(Z={})),function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"}(L||(L={})),function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"}(J||(J={}));class pe{constructor(e,t,s,r,n){this._buffer=e,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:n};const a=this._getElementSize();a>=4&&n!==R.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=a),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?e:Math.min(r,e);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?e:Math.max(n,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function e(t,s){return s*Math.ceil(t/s)}return e(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case d.BYTE:return new Int8Array(e,t);case d.FLOAT:return new Float32Array(e,t);case d.SHORT:return new Int16Array(e,t);case d.UNSIGNED_BYTE:return new Uint8Array(e,t);case d.UNSIGNED_INT:return new Uint32Array(e,t);case d.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then(t=>{const s=new Uint8Array(t);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const r={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case d.UNSIGNED_BYTE:case d.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(e=>this._finalizedPromiseResolve=e)}finalize(){const e=this._bufferView;return new Promise(t=>{const s=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&s.push(this._asyncWritePromise),t(D(s))}).then(()=>{this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()})}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case d.BYTE:case d.UNSIGNED_BYTE:return 1;case d.SHORT:case d.UNSIGNED_SHORT:return 2;case d.UNSIGNED_INT:case d.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case p.SCALAR:return 1;case p.VEC2:return 2;case p.VEC3:return 3;case p.VEC4:case p.MAT2:return 4;case p.MAT3:return 9;case p.MAT4:return 16}}}class W{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new pe(this,this._gltf,e,t,s);return this._bufferViews.push(r),r}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(t,s),s+=r.byteSize;return t}finalize(){var e;if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=new Promise(t=>{t(D(this.getViewFinalizePromises()))}).then(()=>{this._isFinalized=!0;const t=this.getArrayBuffer();this._buffer.byteLength=t.byteLength,this._buffer.uri=t}),(e=this._gltf.extras)==null||e.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}}function me(i,e){if(i.components)for(const t of i.components)t.faces&&t.shading==="smooth"&&ge(t,e)}function ge(i,e){v(e.normal)&&(e.normal=new Float32Array(e.position.length));const t=i.faces,{position:s,normal:r}=e,n=t.length/3;for(let a=0;a<n;++a){const h=3*t[3*a+0],o=3*t[3*a+1],c=3*t[3*a+2],l=I(Ae,s[h+0],s[h+1],s[h+2]),u=I(Te,s[o+0],s[o+1],s[o+2]),w=I(be,s[c+0],s[c+1],s[c+2]),m=Y(u,u,l),x=Y(w,w,l),_=Q(m,m,x);r[h+0]+=_[0],r[h+1]+=_[1],r[h+2]+=_[2],r[o+0]+=_[0],r[o+1]+=_[1],r[o+2]+=_[2],r[c+0]+=_[0],r[c+1]+=_[1],r[c+2]+=_[2]}for(let a=0;a<r.length;a+=3)I(M,r[a],r[a+1],r[a+2]),q(M,M),r[a+0]=M[0],r[a+1]=M[1],r[a+2]=M[2]}function we(i){if(g(i.transform))return i.transform.getOriginPoint(i.spatialReference);const e=i.extent.xmax-i.extent.width/2,t=i.extent.ymax-i.extent.height/2,s=i.extent.zmin;return new G({x:e,y:t,z:s,spatialReference:i.extent.spatialReference})}const Ae=S(),Te=S(),be=S(),M=S(),ye=ee.getLogger("gltf");class Ee{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===E.GLB||t.options.imageOutputType===y.GLB;s&&(t.binChunkBuffer=new W(this.gltf)),e.forEachScene(r=>{this._addScene(r)}),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode(s=>{t.nodes||(t.nodes=[]);const r=this._addNode(s);t.nodes.push(r)}),this.gltf.scenes.push(t)}_addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;k(s,te)||(t.translation=U(s));const r=e.rotation;se(r,ie)||(t.rotation=re(r));const n=e.scale;k(n,j)||(t.scale=U(n)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this._addMesh(e.mesh):e.forEachNode(h=>{t.children||(t.children=[]);const o=this._addNode(h);t.children.push(o)});const a=this.gltf.nodes.length;return this.gltf.nodes.push(t),a}_addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras,r=s.options.bufferOutputType===E.GLB;let n;n=r?s.binChunkBuffer:new W(this.gltf),this.params.origin||(this.params.origin=we(e));const a=ue(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});me(e,a),this._flipYZAxis(a);const h=n.addBufferView(d.FLOAT,p.VEC3,R.ARRAY_BUFFER);let o,c,l,u;a.normal&&(o=n.addBufferView(d.FLOAT,p.VEC3,R.ARRAY_BUFFER)),e.vertexAttributes.uv&&(c=n.addBufferView(d.FLOAT,p.VEC2,R.ARRAY_BUFFER)),a.tangent&&(l=n.addBufferView(d.FLOAT,p.VEC4,R.ARRAY_BUFFER)),e.vertexAttributes.color&&(u=n.addBufferView(d.UNSIGNED_BYTE,p.VEC4,R.ARRAY_BUFFER)),h.startAccessor("POSITION"),o&&o.startAccessor("NORMAL"),c&&c.startAccessor("TEXCOORD_0"),l&&l.startAccessor("TANGENT"),u&&u.startAccessor("COLOR_0");const w=a.position.length/3,{position:m,normal:x,tangent:_}=a,{color:N,uv:A}=e.vertexAttributes;for(let f=0;f<w;++f)h.push(m[3*f+0]),h.push(m[3*f+1]),h.push(m[3*f+2]),o&&g(x)&&(o.push(x[3*f+0]),o.push(x[3*f+1]),o.push(x[3*f+2])),c&&g(A)&&(c.push(A[2*f+0]),c.push(A[2*f+1])),l&&g(_)&&(l.push(_[4*f+0]),l.push(_[4*f+1]),l.push(_[4*f+2]),l.push(_[4*f+3])),u&&g(N)&&(u.push(N[4*f+0]),u.push(N[4*f+1]),u.push(N[4*f+2]),u.push(N[4*f+3]));const O=h.endAccessor(),$=this._addAccessor(h.index,O);let z,V,F,P,B;if(o){const f=o.endAccessor();z=this._addAccessor(o.index,f)}if(c){const f=c.endAccessor();V=this._addAccessor(c.index,f)}if(l){const f=l.endAccessor();F=this._addAccessor(l.index,f)}if(u){const f=u.endAccessor();P=this._addAccessor(u.index,f)}e.components&&e.components.length>0&&e.components[0].faces?(B=n.addBufferView(d.UNSIGNED_INT,p.SCALAR,R.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(B,e.components,t,$,z,V,F,P)):this._addMeshVertexNonIndexed(e.components,t,$,z,V,F,P),h.finalize(),o&&o.finalize(),c&&c.finalize(),l&&l.finalize(),B&&B.finalize(),u&&u.finalize(),r||n.finalize();const X=this.gltf.meshes.length;return this.gltf.meshes.push(t),X}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,t){if(!v(e))for(let s=1,r=2;s<e.length;s+=t,r+=t){const n=e[s],a=e[r];e[s]=a,e[r]=-n}}_addMaterial(e){if(e===null)return;const t=this._materialMap.indexOf(e);if(t!==-1)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=L.MASK;break;case"auto":case"blend":s.alphaMode=L.BLEND}e.alphaCutoff!==.5&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=h=>h**2.1,n=h=>{const o=h.toRgba();return o[0]=r(o[0]/255),o[1]=r(o[1]/255),o[2]=r(o[2]/255),o};if(g(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=n(e.color)),g(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),g(e.normalTexture)&&(s.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof fe){if(g(e.emissiveTexture)&&(s.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),g(e.emissiveColor)){const h=n(e.emissiveColor);s.emissiveFactor=[h[0],h[1],h[2]]}g(e.occlusionTexture)&&(s.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),g(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,ye.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const a=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),a}_addTexture(e){var s;const t=(s=this.gltf.textures)!=null?s:[];return this.gltf.textures=t,ne(this._textureMap,e,()=>{const r={sampler:this._addSampler(e),source:this._addImage(e)},n=t.length;return t.push(r),n})}_addImage(e){const t=this._imageMap.get(e);if(t!=null)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const n=e.data;s.extras=n;for(let h=0;h<this.gltf.images.length;++h)if(n===this.gltf.images[h].extras)return h;const a=this.gltf.extras;switch(a.options.imageOutputType){case y.GLB:{const h=a.binChunkBuffer.addBufferView(d.UNSIGNED_BYTE,p.SCALAR),o=H(n).then(({data:c,type:l})=>(s.mimeType=l,c));h.writeAsync(o).then(()=>{h.finalize()}),s.bufferView=h.index;break}case y.DataURI:s.uri=le(n);break;default:a.promises.push(H(n).then(({data:h,type:o})=>{s.uri=h,s.mimeType=o}))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,r),r}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=b.REPEAT,s=b.REPEAT;if(typeof e.wrap=="string")switch(e.wrap){case"clamp":t=b.CLAMP_TO_EDGE,s=b.CLAMP_TO_EDGE;break;case"mirror":t=b.MIRRORED_REPEAT,s=b.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=b.CLAMP_TO_EDGE;break;case"mirror":s=b.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=b.CLAMP_TO_EDGE;break;case"mirror":t=b.MIRRORED_REPEAT}}const r={wrapS:t,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[a]))return a;const n=this.gltf.samplers.length;return this.gltf.samplers.push(r),n}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(e,t,s,r,n,a,h,o){for(const c of t){e.startAccessor("INDICES");for(let w=0;w<c.faces.length;++w)e.push(c.faces[w]);const l=e.endAccessor(),u={attributes:{POSITION:r},indices:this._addAccessor(e.index,l),material:this._addMaterial(c.material)};n&&c.shading!=="flat"&&(u.attributes.NORMAL=n),a&&(u.attributes.TEXCOORD_0=a),h&&c.shading!=="flat"&&(u.attributes.TANGENT=h),o&&(u.attributes.COLOR_0=o),s.primitives.push(u)}}_addMeshVertexNonIndexed(e,t,s,r,n,a,h){const o={attributes:{POSITION:s}};r&&(o.attributes.NORMAL=r),n&&(o.attributes.TEXCOORD_0=n),a&&(o.attributes.TANGENT=a),h&&(o.attributes.COLOR_0=h),e&&(o.material=this._addMaterial(e[0].material)),t.primitives.push(o)}}class Re{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){ae(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class xe{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class Ne{constructor(e){this.mesh=e,this.name="",this.translation=S(),this.rotation=oe(),this.scale=U(j),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){he(this.rotation,e[0],e[1],e[2])}}const Oe="model.gltf",K="model.glb";function Me(i,e,t){var u,w;const s=new Ee(i,e=e||{},t);let r=s.params;r?r.origin||(r.origin=new G({x:-1,y:-1,z:-1})):r={origin:new G({x:-1,y:-1,z:-1})};const n=r.origin,a=s.gltf,h=(w=(u=a.extras)==null?void 0:u.promises)!=null?w:[];let o=1,c=1,l=null;return D(h).then(()=>{const m={origin:n};delete a.extras;const x=typeof e.jsonSpacing=="number"?e.jsonSpacing:4,_=JSON.stringify(a,(N,A)=>{if(N!=="extras"){if(A instanceof ArrayBuffer){if(de(A))switch(e.imageOutputType){case y.DataURI:case y.GLB:break;case y.External:default:{const O=`img${c}.png`;return c++,m[O]=A,O}}switch(e.bufferOutputType){case E.DataURI:return _e(A);case E.GLB:if(l)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(l=A);case E.External:default:{const O=`data${o}.bin`;return o++,m[O]=A,O}}}return A}},x);return e.bufferOutputType===E.GLB||e.imageOutputType===y.GLB?m[K]=new T(_,l).buffer:m[Oe]=_,m})}function Se(i,e){return Me(i,{bufferOutputType:E.GLB,imageOutputType:y.GLB,jsonSpacing:0},e)}class Be{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(e){ce(new Blob([this._file.data],{type:this._file.type}),e)}}function Ue(i,e){const t=new Re,s=new xe;return t.addScene(s),s.addNode(new Ne(i)),Se(t,e).then(r=>new Be(r[K],r.origin))}export{Ue as toBinaryGLTF};
