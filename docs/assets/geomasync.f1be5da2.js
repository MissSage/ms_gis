import{ml as s,et as b,e$ as F,aL as S,b2 as R,mZ as Y,eV as O,dm as k,dI as Q}from"./vendor.1bde3be2.js";import{q as o,V as h,z as W,K as J,t as a,e as u,Y as P,E as I,g as Z,v as g,P as j,x as N,y as w,G as K,H as m,S as z,I as E,r as A,L as X,O as _,R as $,T as nn,U as C}from"./arcadeUtils.a5768f78.js";import{A as tn,h as en,S as rn,m as an,x as un,p as ln,O as cn,g as fn,R as on,D as sn,b as dn,E as wn,k as hn,y as mn,w as yn,W as T,K as U,F as M,M as L,d as pn,C as V,U as q,B as gn,L as vn,P as Pn,v as In,H,N as B,J as An,j as Fn}from"./geometryEngineAsync.58a38383.js";import"./number.7111ccae.js";function D(r){return Y.indexOf("4.")===0?R.fromExtent(r):new R({spatialReference:r.spatialReference,rings:[[[r.xmin,r.ymin],[r.xmin,r.ymax],[r.xmax,r.ymax],[r.xmax,r.ymin],[r.xmin,r.ymin]]]})}function v(r,t,e){if(h(r,2,2,t,e),!(r[0]instanceof s&&r[1]instanceof s)){if(!(r[0]instanceof s&&r[1]===null)){if(!(r[1]instanceof s&&r[0]===null)){if(r[0]!==null||r[1]!==null)throw new a(t,u.InvalidParameter,e)}}}}async function G(r,t){if(r.type!=="polygon"&&r.type!=="polyline"&&r.type!=="extent")return 0;let e=1;(r.spatialReference.vcsWkid||r.spatialReference.latestVcsWkid)&&(e=nn(r.spatialReference)/Q(r.spatialReference));let c=0;if(r.type==="polyline")for(const n of r.paths)for(let i=1;i<n.length;i++)c+=C(n[i],n[i-1],e);else if(r.type==="polygon")for(const n of r.rings){for(let i=1;i<n.length;i++)c+=C(n[i],n[i-1],e);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=C(n[0],n[n.length-1],e))}else r.type==="extent"&&(c+=2*C([r.xmin,r.ymin,0],[r.xmax,r.ymin,0],e),c+=2*C([r.xmin,r.ymin,0],[r.xmin,r.ymax,0],e),c*=2,c+=4*Math.abs(w(r.zmax,0)*e-w(r.zmin,0)*e));const f=new F({hasZ:!1,hasM:!1,spatialReference:r.spatialReference,paths:[[0,0],[0,c]]});return M(f,t)}function Sn(r){r.mode==="async"&&(r.functions.disjoint=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>(v(n=o(n),t,e),n[0]===null||n[1]===null||tn(n[0],n[1])))},r.functions.intersects=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>(v(n=o(n),t,e),n[0]!==null&&n[1]!==null&&en(n[0],n[1])))},r.functions.touches=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>(v(n=o(n),t,e),n[0]!==null&&n[1]!==null&&rn(n[0],n[1])))},r.functions.crosses=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>(v(n=o(n),t,e),n[0]!==null&&n[1]!==null&&an(n[0],n[1])))},r.functions.within=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>(v(n=o(n),t,e),n[0]!==null&&n[1]!==null&&un(n[0],n[1])))},r.functions.contains=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>(v(n=o(n),t,e),n[0]!==null&&n[1]!==null&&ln(n[0],n[1])))},r.functions.overlaps=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>(v(n=o(n),t,e),n[0]!==null&&n[1]!==null&&cn(n[0],n[1])))},r.functions.equals=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>(h(n,2,2,t,e),n[0]===n[1]||(n[0]instanceof s&&n[1]instanceof s?fn(n[0],n[1]):!(!W(n[0])||!W(n[1]))&&n[0].getTime()===n[1].getTime())))},r.functions.relate=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,3,3,t,e),n[0]instanceof s&&n[1]instanceof s)return on(n[0],n[1],J(n[2]));if(n[0]instanceof s&&n[1]===null||n[1]instanceof s&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new a(t,u.InvalidParameter,e)})},r.functions.intersection=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>(v(n=o(n),t,e),n[0]===null||n[1]===null?null:sn(n[0],n[1])))},r.functions.union=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{const i=[];if((n=o(n)).length===0)throw new a(t,u.WrongNumberOfParameters,e);if(n.length===1)if(P(n[0])){const l=o(n[0]);for(let d=0;d<l.length;d++)if(l[d]!==null){if(!(l[d]instanceof s))throw new a(t,u.InvalidParameter,e);i.push(l[d])}}else{if(!I(n[0])){if(n[0]instanceof s)return Z(g(n[0]),t.spatialReference);if(n[0]===null)return null;throw new a(t,u.InvalidParameter,e)}{const l=o(n[0].toArray());for(let d=0;d<l.length;d++)if(l[d]!==null){if(!(l[d]instanceof s))throw new a(t,u.InvalidParameter,e);i.push(l[d])}}}else for(let l=0;l<n.length;l++)if(n[l]!==null){if(!(n[l]instanceof s))throw new a(t,u.InvalidParameter,e);i.push(n[l])}return i.length===0?null:dn(i)})},r.functions.difference=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>(v(n=o(n),t,e),n[0]!==null&&n[1]===null?g(n[0]):n[0]===null?null:wn(n[0],n[1])))},r.functions.symmetricdifference=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>(v(n=o(n),t,e),n[0]===null&&n[1]===null?null:n[0]===null?g(n[1]):n[1]===null?g(n[0]):hn(n[0],n[1])))},r.functions.clip=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,2,2,t,e),!(n[1]instanceof b)&&n[1]!==null)throw new a(t,u.InvalidParameter,e);if(n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);return n[1]===null?null:mn(n[0],n[1])})},r.functions.cut=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,2,2,t,e),!(n[1]instanceof F)&&n[1]!==null)throw new a(t,u.InvalidParameter,e);if(n[0]===null)return[];if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);return n[1]===null?[g(n[0])]:yn(n[0],n[1])})},r.functions.area=function(t,e){return r.standardFunctionAsync(t,e,async(c,f,n)=>{if(h(n,1,2,t,e),(n=o(n))[0]===null)return 0;if(j(n[0])){const i=await n[0].sumArea(N(w(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,u.Cancelled,e);return i}if(P(n[0])||I(n[0])){const i=K(n[0],t.spatialReference);return i===null?0:T(i,N(w(n[1],-1)))}if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);return T(n[0],N(w(n[1],-1)))})},r.functions.areageodetic=function(t,e){return r.standardFunctionAsync(t,e,async(c,f,n)=>{if(h(n,1,2,t,e),(n=o(n))[0]===null)return 0;if(j(n[0])){const i=await n[0].sumArea(N(w(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,u.Cancelled,e);return i}if(P(n[0])||I(n[0])){const i=K(n[0],t.spatialReference);return i===null?0:U(i,N(w(n[1],-1)))}if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);return U(n[0],N(w(n[1],-1)))})},r.functions.length=function(t,e){return r.standardFunctionAsync(t,e,async(c,f,n)=>{if(h(n,1,2,t,e),(n=o(n))[0]===null)return 0;if(j(n[0])){const i=await n[0].sumLength(m(w(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,u.Cancelled,e);return i}if(P(n[0])||I(n[0])){const i=z(n[0],t.spatialReference);return i===null?0:M(i,m(w(n[1],-1)))}if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);return M(n[0],m(w(n[1],-1)))})},r.functions.length3d=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(h(n,1,2,t,e),(n=o(n))[0]===null)return 0;if(P(n[0])||I(n[0])){const i=z(n[0],t.spatialReference);return i===null?0:i.hasZ===!0?G(i,m(w(n[1],-1))):M(i,m(w(n[1],-1)))}if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);return n[0].hasZ===!0?G(n[0],m(w(n[1],-1))):M(n[0],m(w(n[1],-1)))})},r.functions.lengthgeodetic=function(t,e){return r.standardFunctionAsync(t,e,async(c,f,n)=>{if(h(n,1,2,t,e),(n=o(n))[0]===null)return 0;if(j(n[0])){const i=await n[0].sumLength(m(w(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new a(t,u.Cancelled,e);return i}if(P(n[0])||I(n[0])){const i=z(n[0],t.spatialReference);return i===null?0:L(i,m(w(n[1],-1)))}if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);return L(n[0],m(w(n[1],-1)))})},r.functions.distance=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{n=o(n),h(n,2,3,t,e);let i=n[0];(P(n[0])||I(n[0]))&&(i=E(n[0],t.spatialReference));let l=n[1];if((P(n[1])||I(n[1]))&&(l=E(n[1],t.spatialReference)),!(i instanceof s))throw new a(t,u.InvalidParameter,e);if(!(l instanceof s))throw new a(t,u.InvalidParameter,e);return pn(i,l,m(w(n[2],-1)))})},r.functions.distancegeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{n=o(n),h(n,2,3,t,e);const i=n[0],l=n[1];if(!(i instanceof S))throw new a(t,u.InvalidParameter,e);if(!(l instanceof S))throw new a(t,u.InvalidParameter,e);const d=new F({paths:[],spatialReference:i.spatialReference});return d.addPath([i,l]),L(d,m(w(n[2],-1)))})},r.functions.densify=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,e);if(i<=0)throw new a(t,u.InvalidParameter,e);return n[0]instanceof R||n[0]instanceof F?V(n[0],i,m(w(n[2],-1))):n[0]instanceof b?V(D(n[0]),i,m(w(n[2],-1))):n[0]})},r.functions.densifygeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,e);if(i<=0)throw new a(t,u.InvalidParameter,e);return n[0]instanceof R||n[0]instanceof F?q(n[0],i,m(w(n[2],-1))):n[0]instanceof b?q(D(n[0]),i,m(w(n[2],-1))):n[0]})},r.functions.generalize=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,2,4,t,e),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,e);return gn(n[0],i,X(w(n[2],!0)),m(w(n[3],-1)))})},r.functions.buffer=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,e);return i===0?g(n[0]):vn(n[0],i,m(w(n[2],-1)))})},r.functions.buffergeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,e);return i===0?g(n[0]):Pn(n[0],i,m(w(n[2],-1)))})},r.functions.offset=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,2,6,t,e),n[0]===null)return null;if(!(n[0]instanceof R||n[0]instanceof F))throw new a(t,u.InvalidParameter,e);const i=A(n[1]);if(isNaN(i))throw new a(t,u.InvalidParameter,e);const l=A(w(n[4],10));if(isNaN(l))throw new a(t,u.InvalidParameter,e);const d=A(w(n[5],0));if(isNaN(d))throw new a(t,u.InvalidParameter,e);return In(n[0],i,m(w(n[2],-1)),J(w(n[3],"round")).toLowerCase(),l,d)})},r.functions.rotate=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{n=o(n),h(n,2,3,t,e);let i=n[0];if(i===null)return null;if(!(i instanceof s))throw new a(t,u.InvalidParameter,e);i instanceof b&&(i=R.fromExtent(i));const l=A(n[1]);if(isNaN(l))throw new a(t,u.InvalidParameter,e);const d=w(n[2],null);if(d===null)return H(i,l);if(d instanceof S)return H(i,l,d);throw new a(t,u.InvalidParameter,e)})},r.functions.centroid=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,1,1,t,e),n[0]===null)return null;let i=n[0];if((P(n[0])||I(n[0]))&&(i=E(n[0],t.spatialReference)),i===null)return null;if(!(i instanceof s))throw new a(t,u.InvalidParameter,e);return i instanceof S?Z(g(n[0]),t.spatialReference):i instanceof R?i.centroid:i instanceof F?_(i):i instanceof O?$(i):i instanceof b?i.center:null})},r.functions.multiparttosinglepart=function(t,e){return r.standardFunctionAsync(t,e,async(c,f,n)=>{n=o(n),h(n,1,1,t,e);const i=[];if(n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);if(n[0]instanceof S)return[Z(g(n[0]),t.spatialReference)];if(n[0]instanceof b)return[Z(g(n[0]),t.spatialReference)];const l=await B(n[0]);if(l instanceof R){const d=[],p=[];for(let y=0;y<l.rings.length;y++)if(l.isClockwise(l.rings[y])){const x=k({rings:[l.rings[y]],hasZ:l.hasZ===!0,hazM:l.hasM===!0,spatialReference:l.spatialReference.toJSON()});d.push(x)}else p.push({ring:l.rings[y],pt:l.getPoint(y,0)});for(let y=0;y<p.length;y++)for(let x=0;x<d.length;x++)if(d[x].contains(p[y].pt)){d[x].addRing(p[y].ring);break}return d}if(l instanceof F){const d=[];for(let p=0;p<l.paths.length;p++){const y=k({paths:[l.paths[p]],hasZ:l.hasZ===!0,hazM:l.hasM===!0,spatialReference:l.spatialReference.toJSON()});d.push(y)}return d}if(n[0]instanceof O){const d=Z(g(n[0]),t.spatialReference);for(let p=0;p<d.points.length;p++)i.push(d.getPoint(p));return i}return null})},r.functions.issimple=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,1,1,t,e),n[0]===null)return!0;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);return An(n[0])})},r.functions.simplify=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);return B(n[0])})},r.functions.convexhull=function(t,e){return r.standardFunctionAsync(t,e,(c,f,n)=>{if(n=o(n),h(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(t,u.InvalidParameter,e);return Fn(n[0])})})}export{Sn as registerFunctions};
