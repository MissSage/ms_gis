import { dK as f, ch as $ } from "./index.js";
const e = 96;
function i(i2, r2) {
  const o = r2 || i2.extent, c = i2.width, d = $(o && o.spatialReference);
  return o && c ? o.width / c * d * f * e : 0;
}
function r(i2, r2) {
  return i2 / ($(r2) * f * e);
}
export { i, r };
