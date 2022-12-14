const r = 1024;
function n(n2) {
  if (Array.isArray(n2)) {
    if (n2.length < r)
      return n2;
    for (const r2 of n2)
      if (r2 >= 65536)
        return new Uint32Array(n2);
    return new Uint16Array(n2);
  }
  if (n2.BYTES_PER_ELEMENT === Uint16Array.BYTES_PER_ELEMENT)
    return n2;
  for (const r2 of n2)
    if (r2 >= 65536)
      return n2;
  return new Uint16Array(n2);
}
function t(n2) {
  const t2 = 3 * n2;
  return t2 <= r ? new Array(t2) : t2 <= 65536 ? new Uint16Array(t2) : new Uint32Array(t2);
}
let e = (() => {
  const r2 = new Uint32Array(131072);
  for (let n2 = 0; n2 < r2.length; ++n2)
    r2[n2] = n2;
  return r2;
})();
const i = [0], f = (() => {
  const r2 = new Uint16Array(65536);
  for (let n2 = 0; n2 < r2.length; ++n2)
    r2[n2] = n2;
  return r2;
})();
function u(n2) {
  if (n2 === 1)
    return i;
  if (n2 < r)
    return Array.from(new Uint16Array(f.buffer, 0, n2));
  if (n2 < f.length)
    return new Uint16Array(f.buffer, 0, n2);
  if (n2 > e.length) {
    const r2 = Math.max(2 * e.length, n2);
    e = new Uint32Array(r2);
    for (let n3 = 0; n3 < e.length; n3++)
      e[n3] = n3;
  }
  return new Uint32Array(e.buffer, 0, n2);
}
function o(n2) {
  if (n2 === 1)
    return i;
  if (n2 < r)
    return Array.from(new Uint16Array(f.buffer, 0, n2));
  if (n2 < f.length)
    return new Uint16Array(f.slice(0, n2));
  if (n2 > e.length) {
    const r2 = new Uint32Array(n2);
    for (let n3 = 0; n3 < r2.length; n3++)
      r2[n3] = n3;
    return r2;
  }
  return new Uint32Array(e.slice(0, n2));
}
export { n, o, t, u };
