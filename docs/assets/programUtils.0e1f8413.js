import{A as a}from"./vendor.f59460b9.js";import{t as h}from"./NestedMap.6f8cbc5c.js";import{h as p}from"./ProgramTemplate.58a17754.js";class m{constructor(e){this._rctx=e,this._store=new h}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,o,r){const n=this._store.get(e,t);if(a(n))return n.ref(),n;const s=new p(this._rctx,e,t,o,r);return s.ref(),this._store.set(e,t,s),s}get test(){let e=0;return this._store.forEach(t=>t.forEach(o=>e+=o.hasGLName?2:1)),{cachedWebGLObjects:e}}}function $(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function _(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if($(o)){const{value:r,options:n,namespace:s}=o,f=s?`${s}_`:"";for(const c in n)e+=`#define ${f}${c} ${n[c].toFixed()}
`;e+=`#define ${t} ${f}${r}
`}else{const r=o.options;let n=0;for(const s in r)e+=`#define ${r[s]} ${(n++).toFixed()}
`;e+=`#define ${t} ${r[o.value]}
`}}return e}export{_ as n,m as s};
