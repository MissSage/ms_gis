var k=Object.defineProperty,Y=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var x=(t,e,r)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,A=(t,e)=>{for(var r in e||(e={}))Z.call(e,r)&&x(t,r,e[r]);if(T)for(var r of T(e))H.call(e,r)&&x(t,r,e[r]);return t},O=(t,e)=>Y(t,X(e));import{J as f,x as j,bt as _}from"./vendor.f59460b9.js";import{O as U}from"./VertexAttribute.42396f25.js";function R(){const t=new Float32Array(4);return t[3]=1,t}function N(t){const e=new Float32Array(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function G(t,e,r,i){const o=new Float32Array(4);return o[0]=t,o[1]=e,o[2]=r,o[3]=i,o}function W(t,e){return new Float32Array(t,e,4)}Object.freeze(Object.defineProperty({__proto__:null,create:R,clone:N,fromValues:G,createView:W},Symbol.toStringTag,{value:"Module"}));const d=!0,h={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function F(t,e,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(t,r+h.identifierOffset,h.identifierLength)),version:e.getUint16(r+h.versionOffset,d),checksum:e.getUint32(r+h.checksumOffset,d)}}const y={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function q(t,e){return{sizeLo:t.getUint32(e+y.sizeLo,d),sizeHi:t.getUint32(e+y.sizeHi,d),minX:t.getFloat64(e+y.minX,d),minY:t.getFloat64(e+y.minY,d),minZ:t.getFloat64(e+y.minZ,d),maxX:t.getFloat64(e+y.maxX,d),maxY:t.getFloat64(e+y.maxY,d),maxZ:t.getFloat64(e+y.maxZ,d),errorX:t.getFloat64(e+y.errorX,d),errorY:t.getFloat64(e+y.errorY,d),errorZ:t.getFloat64(e+y.errorZ,d),count:t.getUint32(e+y.count,d),reserved:t.getUint32(e+y.reserved,d)}}function ue(t){const e=new DataView(t,0);let r=0;const{identifier:i,version:o}=F(t,e,r);if(r+=h.byteCount,i!=="LEPCC     ")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");const n=q(e,r);if(r+=y.byteCount,n.sizeHi*2**32+n.sizeLo!==t.byteLength)throw new f("lepcc-decode-error","Bad size");const s=new Float64Array(3*n.count),u=[],c=[],a=[],l=[];if(r=I(t,r,u),r=I(t,r,c),r=I(t,r,a),r=I(t,r,l),r!==t.byteLength)throw new f("lepcc-decode-error","Bad length");let w=0,g=0;for(let b=0;b<u.length;b++){g+=u[b];let v=0;for(let C=0;C<c[b];C++){v+=a[w];const $=l[w];s[3*w]=Math.min(n.maxX,n.minX+2*n.errorX*v),s[3*w+1]=Math.min(n.maxY,n.minY+2*n.errorY*g),s[3*w+2]=Math.min(n.maxZ,n.minZ+2*n.errorZ*$),w++}}return{errorX:n.errorX,errorY:n.errorY,errorZ:n.errorZ,result:s}}function I(t,e,r){const i=[];e=L(t,e,i);const o=[];for(let n=0;n<i.length;n++){o.length=0,e=L(t,e,o);for(let s=0;s<o.length;s++)r.push(o[s]+i[n])}return e}function L(t,e,r){const i=new DataView(t,e),o=i.getUint8(0),n=31&o,s=!!(32&o),u=(192&o)>>6;let c=0;if(u===0)c=i.getUint32(1,d),e+=5;else if(u===1)c=i.getUint16(1,d),e+=3;else{if(u!==2)throw new f("lepcc-decode-error","Bad count type");c=i.getUint8(1),e+=2}if(s)throw new f("lepcc-decode-error","LUT not implemented");const a=Math.ceil(c*n/8),l=new Uint8Array(t,e,a);let w=0,g=0,b=0;const v=-1>>>32-n;for(let C=0;C<c;C++){for(;g<n;)w|=l[b]<<g,g+=8,b+=1;r[C]=w&v,w>>>=n,g-=n,g+n>32&&(w|=l[b-1]>>8-g)}return e+b}const p={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function J(t,e){return{sizeLo:t.getUint32(e+p.sizeLo,d),sizeHi:t.getUint32(e+p.sizeHi,d),count:t.getUint32(e+p.count,d),colorMapCount:t.getUint16(e+p.colorMapCount,d),lookupMethod:t.getUint8(e+p.lookupMethod),compressionMethod:t.getUint8(e+p.compressionMethod)}}function K(t){const e=new DataView(t,0);let r=0;const{identifier:i,version:o}=F(t,e,r);if(r+=h.byteCount,i!=="ClusterRGB")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");const n=J(e,r);if(r+=p.byteCount,n.sizeHi*2**32+n.sizeLo!==t.byteLength)throw new f("lepcc-decode-error","Bad size");if((n.lookupMethod===2||n.lookupMethod===1)&&n.compressionMethod===0){if(3*n.colorMapCount+n.count+r!==t.byteLength||n.colorMapCount>256)throw new f("lepcc-decode-error","Bad count");const s=new Uint8Array(t,r,3*n.colorMapCount),u=new Uint8Array(t,r+3*n.colorMapCount,n.count),c=new Uint8Array(3*n.count);for(let a=0;a<n.count;a++){const l=u[a];c[3*a]=s[3*l],c[3*a+1]=s[3*l+1],c[3*a+2]=s[3*l+2]}return c}if(n.lookupMethod===0&&n.compressionMethod===0){if(3*n.count+r!==t.byteLength||n.colorMapCount!==0)throw new f("lepcc-decode-error","Bad count");return new Uint8Array(t,r).slice()}if(n.lookupMethod<=2&&n.compressionMethod===1){if(r+3!==t.byteLength||n.colorMapCount!==1)throw new f("lepcc-decode-error","Bad count");const s=e.getUint8(r),u=e.getUint8(r+1),c=e.getUint8(r+2),a=new Uint8Array(3*n.count);for(let l=0;l<n.count;l++)a[3*l]=s,a[3*l+1]=u,a[3*l+2]=c;return a}throw new f("lepcc-decode-error","Bad method "+n.lookupMethod+","+n.compressionMethod)}const m={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function Q(t,e){return{sizeLo:t.getUint32(e+m.sizeLo,d),sizeHi:t.getUint32(e+m.sizeHi,d),count:t.getUint32(e+m.count,d),scaleFactor:t.getUint16(e+m.scaleFactor,d),bitsPerPoint:t.getUint8(e+m.bitsPerPoint),reserved:t.getUint8(e+m.reserved)}}function ee(t){const e=new DataView(t,0);let r=0;const{identifier:i,version:o}=F(t,e,r);if(r+=h.byteCount,i!=="Intensity ")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");const n=Q(e,r);if(r+=m.byteCount,n.sizeHi*2**32+n.sizeLo!==t.byteLength)throw new f("lepcc-decode-error","Bad size");const s=new Uint16Array(n.count);if(n.bitsPerPoint===8){if(n.count+r!==t.byteLength)throw new f("lepcc-decode-error","Bad size");const u=new Uint8Array(t,r,n.count);for(let c=0;c<n.count;c++)s[c]=u[c]*n.scaleFactor}else if(n.bitsPerPoint===16){if(2*n.count+r!==t.byteLength)throw new f("lepcc-decode-error","Bad size");const u=new Uint16Array(t,r,n.count);for(let c=0;c<n.count;c++)s[c]=u[c]*n.scaleFactor}else{const u=[];if(L(t,r,u)!==t.byteLength)throw new f("lepcc-decode-error","Bad size");for(let c=0;c<n.count;c++)s[c]=u[c]*n.scaleFactor}return s}const B=j.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function te(t,e,r){let i="",o=0;for(;o<r;){const n=t[e+o];if(n<128)i+=String.fromCharCode(n),o++;else if(n>=192&&n<224){if(o+1>=r)throw new f("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const s=(31&n)<<6|63&t[e+o+1];i+=String.fromCharCode(s),o+=2}else if(n>=224&&n<240){if(o+2>=r)throw new f("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(15&n)<<12|(63&t[e+o+1])<<6|63&t[e+o+2];i+=String.fromCharCode(s),o+=3}else{if(!(n>=240&&n<248))throw new f("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=r)throw new f("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(7&n)<<18|(63&t[e+o+1])<<12|(63&t[e+o+2])<<6|63&t[e+o+3];if(s>=65536){const u=55296+(s-65536>>10),c=56320+(1023&s);i+=String.fromCharCode(u,c)}else i+=String.fromCharCode(s);o+=4}}}return i}function P(t,e){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let i=0;for(let o=0;o<e.length;o++){const n=e[o],s=n.valueType||n.type,u=ie[s];r.fields[n.property]=u(t,i),i+=z[s].BYTES_PER_ELEMENT}return r.byteCount=i,r}function ne(t,e,r){const i=[];let o,n,s=0;for(n=0;n<t;n+=1){if(o=e[n],o>0){if(i.push(te(r,s,o-1)),r[s+o-1]!==0)throw new f("string-array-error","Invalid string array: missing null termination.")}else i.push(null);s+=o}return i}function S(t,e){return new z[e.valueType](t,e.byteOffset,e.count*e.valuesPerElement)}function re(t,e){return new Uint8Array(t,e.byteOffset,e.byteCount)}function oe(t,e,r){const i=e.header!=null?P(t,e.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let n=i.byteCount;for(let s=0;s<e.ordering.length;s++){const u=e.ordering[s],c=_(e[u]);if(c.count=i.fields.count,c.valueType==="String"){if(c.byteOffset=n,c.byteCount=i.fields[u+"ByteCount"],c.encoding!=="UTF-8")throw new f("unsupported-encoding","Unsupported String encoding.",{encoding:c.encoding})}else{if(!D(c.valueType))throw new f("unsupported-value-type","Unsupported binary valueType",{valueType:c.valueType});{const a=M(c.valueType);n+=n%a!=0?a-n%a:0,c.byteOffset=n,c.byteCount=a*c.valuesPerElement*c.count}}n+=c.byteCount,o.entries[u]=c}return o.byteCount=n-o.byteOffset,o}function E(t,e,r){if(e!==t&&B.error(`Invalid ${r} buffer size
 expected: ${t}, actual: ${e})`),e<t)throw new f("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:e})}function fe(t,e){const r=P(t,e&&e.header);let i=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},n=r.fields,s=n.vertexCount!=null?n.vertexCount:n.count;for(const a of e.ordering){if(!e.vertexAttributes[a])continue;const l=O(A({},e.vertexAttributes[a]),{byteOffset:i,count:s}),w=V[a]?V[a]:"_"+a;o.vertexAttributes[w]=l,i+=M(l.valueType)*l.valuesPerElement*s}const u=n.faceCount;if(e.faces&&u){o.faces={};for(const a of e.ordering){if(!e.faces[a])continue;const l=O(A({},e.faces[a]),{byteOffset:i,count:u});o.faces[a]=l,i+=M(l.valueType)*l.valuesPerElement*u}}const c=n.featureCount;if(e.featureAttributes&&e.featureAttributeOrder&&c){o.featureAttributes={};for(const a of e.featureAttributeOrder){if(!e.featureAttributes[a])continue;const l=O(A({},e.featureAttributes[a]),{byteOffset:i,count:c});o.featureAttributes[a]=l,i+=(l.valueType==="UInt64"?8:M(l.valueType))*l.valuesPerElement*c}}return E(i,t.byteLength,"geometry"),o.byteCount=i-o.byteOffset,o}const V={position:U.POSITION,normal:U.NORMAL,color:U.COLOR,uv0:U.UV0,region:U.UVREGION};function le(t,e,r){if(t.encoding==="lepcc-rgb")return K(e);if(t.encoding==="lepcc-intensity")return ee(e);if(t.encoding!=null&&t.encoding!=="")throw new f("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(B.warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),t.ordering[0]==="ObjectIds"&&t.hasOwnProperty("objectIds")&&(B.warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const i=oe(e,t,r);E(i.byteOffset+i.byteCount,e.byteLength,"attribute");const o=i.entries.attributeValues||i.entries.objectIds;if(o){if(o.valueType==="String"){const n=i.entries.attributeByteCounts,s=S(e,n),u=re(e,o);return ne(n.count,s,u)}return S(e,o)}throw new f("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const z={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},ie={Float32:(t,e)=>new DataView(t,0).getFloat32(e,!0),Float64:(t,e)=>new DataView(t,0).getFloat64(e,!0),UInt8:(t,e)=>new DataView(t,0).getUint8(e),Int8:(t,e)=>new DataView(t,0).getInt8(e),UInt16:(t,e)=>new DataView(t,0).getUint16(e,!0),Int16:(t,e)=>new DataView(t,0).getInt16(e,!0),UInt32:(t,e)=>new DataView(t,0).getUint32(e,!0),Int32:(t,e)=>new DataView(t,0).getInt32(e,!0)};function D(t){return z.hasOwnProperty(t)}function M(t){return D(t)?z[t].BYTES_PER_ELEMENT:0}export{le as I,ue as c,R as e,S as f,fe as g,N as r};
