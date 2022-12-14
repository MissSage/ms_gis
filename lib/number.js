const n = new Float32Array(1);
new Uint32Array(n.buffer);
function M(n2) {
  return [255 & n2, (65280 & n2) >>> 8, (16711680 & n2) >>> 16, (4278190080 & n2) >>> 24];
}
function w(n2, r) {
  return 65535 & n2 | r << 16;
}
function x(n2, r, t, u) {
  return 255 & n2 | (255 & r) << 8 | (255 & t) << 16 | u << 24;
}
export { M, w, x };
