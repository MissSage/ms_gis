import { C as r, a2 as t, s as s$1, fh as X, gR as nt } from "./index.js";
function i(e) {
  const n = c(e);
  return r(n) ? n.toDataURL() : "";
}
async function o(t$1) {
  const r2 = c(t$1);
  if (t(r2))
    throw new s$1("imageToArrayBuffer", "Unsupported image type");
  const a = await m(t$1), i2 = await new Promise((e) => r2.toBlob(e, a));
  if (!i2)
    throw new s$1("imageToArrayBuffer", "Failed to encode image");
  return { data: await i2.arrayBuffer(), type: a };
}
async function m(e) {
  if (!(e instanceof HTMLImageElement))
    return "image/png";
  const t2 = e.src;
  if (X(t2)) {
    const e2 = nt(t2);
    return (e2 == null ? void 0 : e2.mediaType) === "image/jpeg" ? e2.mediaType : "image/png";
  }
  return /\.png$/i.test(t2) ? "image/png" : /\.(jpg|jpeg)$/i.test(t2) ? "image/jpeg" : "image/png";
}
function c(e) {
  if (e instanceof HTMLCanvasElement)
    return e;
  if (e instanceof HTMLVideoElement)
    return null;
  const t2 = document.createElement("canvas");
  t2.width = e.width, t2.height = e.height;
  const n = t2.getContext("2d");
  return e instanceof HTMLImageElement ? n.drawImage(e, 0, 0, e.width, e.height) : e instanceof ImageData && n.putImageData(e, 0, 0), t2;
}
function s(e) {
  const t2 = [], n = new Uint8Array(e);
  for (let r2 = 0; r2 < n.length; r2++)
    t2.push(String.fromCharCode(n[r2]));
  return "data:application/octet-stream;base64," + btoa(t2.join(""));
}
function g(e) {
  if (e.byteLength < 8)
    return false;
  const t2 = new Uint8Array(e);
  return t2[0] === 137 && t2[1] === 80 && t2[2] === 78 && t2[3] === 71 && t2[4] === 13 && t2[5] === 10 && t2[6] === 26 && t2[7] === 10;
}
export { c, g, i, o, s };
