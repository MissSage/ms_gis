function o(n2, c) {
  if (n2 && c) {
    for (const f of n2.children)
      if (f.localName in c) {
        const n3 = c[f.localName];
        if (typeof n3 == "function") {
          const c2 = n3(f);
          c2 && o(f, c2);
        } else
          o(f, n3);
      }
  }
}
function* n(o2, c) {
  for (const f of o2.children)
    if (f.localName in c) {
      const o3 = c[f.localName];
      typeof o3 == "function" ? yield o3(f) : yield* n(f, o3);
    }
}
export { n, o };
