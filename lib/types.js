function e(e2) {
  switch (e2) {
    case "u8":
    case "i8":
      return 1;
    case "u16":
    case "i16":
      return 2;
    case "u32":
    case "i32":
    case "f32":
      return 4;
    case "f64":
      return 8;
  }
}
function c(e2) {
  switch (e2) {
    case "u8":
    case "u16":
    case "u32":
      return false;
    case "i8":
    case "i16":
    case "i32":
    case "f32":
    case "f64":
      return true;
  }
}
function s(e2) {
  switch (e2) {
    case "u8":
    case "u16":
    case "u32":
    case "i8":
    case "i16":
    case "i32":
      return true;
    case "f32":
    case "f64":
      return false;
  }
}
function r(e2) {
  switch (e2) {
    case "u8":
      return 255;
    case "u16":
      return 65535;
    case "u32":
      return 4294967295;
    case "i8":
      return 127;
    case "i16":
      return 32767;
    case "i32":
      return 2147483647;
    case "f32":
      return 3402823e32;
    case "f64":
      return 179769e303;
  }
}
export { c, e, r, s };
