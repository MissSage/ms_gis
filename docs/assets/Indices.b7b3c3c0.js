const f=1024;function o(r){if(Array.isArray(r)){if(r.length<f)return r;for(const t of r)if(t>=65536)return new Uint32Array(r);return new Uint16Array(r)}if(r.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return r;for(const t of r)if(t>=65536)return r;return new Uint16Array(r)}function a(r){const t=3*r;return t<=f?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let e=(()=>{const r=new Uint32Array(131072);for(let t=0;t<r.length;++t)r[t]=t;return r})();const u=[0],i=(()=>{const r=new Uint16Array(65536);for(let t=0;t<r.length;++t)r[t]=t;return r})();function y(r){if(r===1)return u;if(r<f)return Array.from(new Uint16Array(i.buffer,0,r));if(r<i.length)return new Uint16Array(i.buffer,0,r);if(r>e.length){const t=Math.max(2*e.length,r);e=new Uint32Array(t);for(let n=0;n<e.length;n++)e[n]=n}return new Uint32Array(e.buffer,0,r)}function A(r){if(r===1)return u;if(r<f)return Array.from(new Uint16Array(i.buffer,0,r));if(r<i.length)return new Uint16Array(i.slice(0,r));if(r>e.length){const t=new Uint32Array(r);for(let n=0;n<t.length;n++)t[n]=n;return t}return new Uint32Array(e.slice(0,r))}export{o as n,A as o,a as t,y as u};
