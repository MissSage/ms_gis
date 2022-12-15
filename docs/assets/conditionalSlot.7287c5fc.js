import{pb as c}from"./vendor.1bde3be2.js";import{c as i}from"./observers.18aaa5d3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const n=new Set;let e;const s={childList:!0};function b(o){e||(e=i("mutation",r)),e.observe(o.el,s)}function f(o){n.delete(o.el),r(e.takeRecords()),e.disconnect();for(const[t]of n.entries())e.observe(t,s)}function r(o){o.forEach(({target:t})=>{c(t)})}export{b as c,f as d};
