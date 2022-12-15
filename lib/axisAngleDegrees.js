import { bg as r, fL as v$1, bC as m, fM as y, dF as b$1, fN as x$1, fr as e } from "./index.js";
function a(n = b) {
  return [n[0], n[1], n[2], n[3]];
}
function k(n, r$1, t = a()) {
  return r(g(t), n), t[3] = r$1, t;
}
function v(r2, c, f = a()) {
  return v$1(d, g(r2), x(r2)), v$1(w, g(c), x(c)), y(d, w, d), U(f, b$1(x$1(g(f), d)));
}
function g(n) {
  return n;
}
function l(n) {
  return n[3];
}
function x(n) {
  return m(n[3]);
}
function U(n, r2) {
  return n[3] = r2, n;
}
const b = [0, 0, 1, 0], d = e(), w = e();
a();
export { a, g, k, l, v, x };
