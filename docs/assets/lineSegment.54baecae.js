import{fY as z,fZ as Z,ag as B,aJ as q,ax as l,g0 as A,g1 as m,g2 as j,f_ as x,g3 as s,fS as C,g4 as J}from"./vendor.1bde3be2.js";function k(t){return t?{origin:Z(t.origin),vector:Z(t.vector)}:{origin:B(),vector:B()}}function D(t,r){const n=G.get();return n.origin=t,n.vector=r,n}function I(t,r=k()){return E(t.origin,t.vector,r)}function E(t,r,n=k()){return j(n.origin,t),j(n.vector,r),n}function K(t,r,n=k()){return j(n.origin,t),x(n.vector,r,t),n}function L(t,r){const n=x(s.get(),r,t.origin),g=m(t.vector,n),c=m(t.vector,t.vector),e=l(g/c,0,1),f=x(s.get(),q(s.get(),t.vector,e),n);return m(f,f)}function N(t,r,n){return F(t,r,0,1,n)}function O(t,r,n){return A(n,t.origin,q(n,t.vector,r))}function F(t,r,n,g,c){const{vector:e,origin:f}=t,a=x(s.get(),r,f),b=m(e,a)/C(e);return q(c,e,l(b,n,g)),A(c,c,t.origin)}function Q(t,r){if(_(t,D(r.origin,r.direction),!1,w)){const{tA:n,pB:g,distance2:c}=w;if(n>=0&&n<=1)return c;if(n<0)return J(t.origin,g);if(n>1)return J(A(s.get(),t.origin,t.vector),g)}return null}function R(t,r,n){return!!_(t,r,!0,w)&&(j(n,w.pA),!0)}function _(t,r,n,g){const c=1e-6,e=t.origin,f=A(s.get(),e,t.vector),a=r.origin,b=A(s.get(),a,r.vector),u=s.get(),i=s.get();if(u[0]=e[0]-a[0],u[1]=e[1]-a[1],u[2]=e[2]-a[2],i[0]=b[0]-a[0],i[1]=b[1]-a[1],i[2]=b[2]-a[2],Math.abs(i[0])<c&&Math.abs(i[1])<c&&Math.abs(i[2])<c)return!1;const o=s.get();if(o[0]=f[0]-e[0],o[1]=f[1]-e[1],o[2]=f[2]-e[2],Math.abs(o[0])<c&&Math.abs(o[1])<c&&Math.abs(o[2])<c)return!1;const P=u[0]*i[0]+u[1]*i[1]+u[2]*i[2],d=i[0]*o[0]+i[1]*o[1]+i[2]*o[2],y=u[0]*o[0]+u[1]*o[1]+u[2]*o[2],S=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],Y=(o[0]*o[0]+o[1]*o[1]+o[2]*o[2])*S-d*d;if(Math.abs(Y)<c)return!1;let v=(P*d-y*S)/Y,p=(P+d*v)/S;n&&(v=l(v,0,1),p=l(p,0,1));const h=s.get(),M=s.get();return h[0]=e[0]+v*o[0],h[1]=e[1]+v*o[1],h[2]=e[2]+v*o[2],M[0]=a[0]+p*i[0],M[1]=a[1]+p*i[1],M[2]=a[2]+p*i[2],g.tA=v,g.tB=p,g.pA=h,g.pB=M,g.distance2=J(h,M),!0}const w={tA:0,tB:0,pA:B(),pB:B(),distance2:0},G=new z(()=>k());export{F as A,Q as B,L as M,K as b,I as h,N as j,R as k,O as l,E as m,k as v};
