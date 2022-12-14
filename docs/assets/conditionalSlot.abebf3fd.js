import{ph as c}from"./vendor.faf54504.js";import{c as i}from"./observers.e897d21d.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const n=new Set;let e;const s={childList:!0};function f(o){e||(e=i("mutation",r)),e.observe(o.el,s)}function l(o){n.delete(o.el),r(e.takeRecords()),e.disconnect();for(const[t]of n.entries())e.observe(t,s)}function r(o){o.forEach(({target:t})=>{c(t)})}export{f as c,l as d};
