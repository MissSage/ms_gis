import{O as a}from"./vendor.1bde3be2.js";import{t as d}from"./NestedMap.6f8cbc5c.js";import{h}from"./ProgramTemplate.1787c8d6.js";class m{constructor(e){this._rctx=e,this._store=new d}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,o,r){const n=this._store.get(e,t);if(a(n))return n.ref(),n;const s=new h(this._rctx,e,t,o,r);return s.ref(),this._store.set(e,t,s),s}get test(){let e=0;return this._store.forEach(t=>t.forEach(o=>e+=o.hasGLName?2:1)),{cachedWebGLObjects:e}}}function p(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function b(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(p(o)){const{value:r,options:n,namespace:s}=o,c=s?`${s}_`:"";for(const f in n)e+=`#define ${c}${f} ${n[f].toFixed()}
`;e+=`#define ${t} ${c}${r}
`}else{const r=o.options;let n=0;for(const s in r)e+=`#define ${r[s]} ${(n++).toFixed()}
`;e+=`#define ${t} ${r[o.value]}
`}}return e}export{b as n,m as s};
