const n = Number.POSITIVE_INFINITY, t = Math.PI, r = 2 * t, o = 128 / t, f = t / 180, N = 1 / Math.LN2;
function a(n2, t2) {
  return (n2 %= t2) >= 0 ? n2 : n2 + t2;
}
function h(n2) {
  return a(n2 * o, 256);
}
function P(n2) {
  return Math.log(n2) * N;
}
function b(n2, t2, r2) {
  return n2 * (1 - r2) + t2 * r2;
}
export { P, a, b, f, h, n, r, t };
