const c = 256 / 360, N = 1 / Math.LN2;
function a(n, t) {
  return (n %= t) >= 0 ? n : n + t;
}
function M(n) {
  return a(n * c, 256);
}
function P(n) {
  return Math.log(n) * N;
}
function g(n, t, r) {
  return n >= t && n <= r || n >= r && n <= t;
}
export { M, P, g };
