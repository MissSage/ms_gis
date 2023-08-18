import { C } from "./enums.js";
import { t } from "./VertexElementDescriptor.js";
function o(t$1, o2 = 0) {
  const n2 = t$1.stride;
  return t$1.fieldNames.filter((e) => {
    const o3 = t$1.fields.get(e).optional;
    return !(o3 && o3.glPadding);
  }).map((i) => {
    const s = t$1.fields.get(i), l = s.constructor.ElementCount, u = r(s.constructor.ElementType), f = s.offset, c = !(!s.optional || !s.optional.glNormalized);
    return new t(i, l, u, f, n2, c, o2);
  });
}
function r(t2) {
  const e = n[t2];
  if (e)
    return e;
  throw new Error("BufferType not supported in WebGL");
}
const n = { u8: C.UNSIGNED_BYTE, u16: C.UNSIGNED_SHORT, u32: C.UNSIGNED_INT, i8: C.BYTE, i16: C.SHORT, i32: C.INT, f32: C.FLOAT };
export { o };
