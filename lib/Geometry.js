class t {
  constructor(t2, s2) {
    this.x = t2, this.y = s2;
  }
  clone() {
    return new t(this.x, this.y);
  }
  equals(t2, s2) {
    return t2 === this.x && s2 === this.y;
  }
  isEqual(t2) {
    return t2.x === this.x && t2.y === this.y;
  }
  setCoords(t2, s2) {
    this.x = t2, this.y = s2;
  }
  normalize() {
    const t2 = this.x, s2 = this.y, i = Math.sqrt(t2 * t2 + s2 * s2);
    this.x /= i, this.y /= i;
  }
  rightPerpendicular() {
    const t2 = this.x;
    this.x = this.y, this.y = -t2;
  }
  move(t2, s2) {
    this.x += t2, this.y += s2;
  }
  assign(t2) {
    this.x = t2.x, this.y = t2.y;
  }
  assignAdd(t2, s2) {
    this.x = t2.x + s2.x, this.y = t2.y + s2.y;
  }
  assignSub(t2, s2) {
    this.x = t2.x - s2.x, this.y = t2.y - s2.y;
  }
  rotate(t2, s2) {
    const i = this.x, n = this.y;
    this.x = i * t2 - n * s2, this.y = i * s2 + n * t2;
  }
  scale(t2) {
    this.x *= t2, this.y *= t2;
  }
  length() {
    const t2 = this.x, s2 = this.y;
    return Math.sqrt(t2 * t2 + s2 * s2);
  }
  static distance(t2, s2) {
    const i = s2.x - t2.x, n = s2.y - t2.y;
    return Math.sqrt(i * i + n * n);
  }
  static add(s2, i) {
    return new t(s2.x + i.x, s2.y + i.y);
  }
  static sub(s2, i) {
    return new t(s2.x - i.x, s2.y - i.y);
  }
}
var s;
!function(t2) {
  t2[t2.Unknown = 0] = "Unknown", t2[t2.Point = 1] = "Point", t2[t2.LineString = 2] = "LineString", t2[t2.Polygon = 3] = "Polygon";
}(s || (s = {}));
export { s, t };
