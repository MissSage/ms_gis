import "./index.js";
function l(o, e, l2, n) {
  const r = o.clone(), t = 1 << r.level, i = r.col + e, c = r.row + l2;
  return n && i < 0 ? (r.col = i + t, r.world -= 1) : i >= t ? (r.col = i - t, r.world += 1) : r.col = i, r.row = c, r;
}
export { l };
