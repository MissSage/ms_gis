let t = null, n = true;
function e(t2, e2, r2) {
  if (!t2 || !e2)
    throw new Error("Cannot construct image data without dimensions");
  if (n)
    try {
      return new ImageData(t2, e2);
    } catch (a2) {
      n = false;
    }
  return o(t2, e2, r2);
}
function r(t2, e2, r2, a2) {
  if (!e2 || !r2)
    throw new Error("Cannot construct image data without dimensions");
  if (n)
    try {
      return new ImageData(t2, e2, r2);
    } catch (c) {
      n = false;
    }
  const i = o(e2, r2, a2);
  return i.data.set(t2, 0), i;
}
function a() {
  return t || (t = document.createElement("canvas"), t.width = 1, t.height = 1), t;
}
function o(t2, n2, e2) {
  return e2 || (e2 = a()), e2.getContext("2d").createImageData(t2, n2);
}
export { e, r };
