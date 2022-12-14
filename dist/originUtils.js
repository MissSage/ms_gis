import { i as i$1 } from "./multiOriginJSONSupportUtils.js";
function i(i2) {
  i2 && i2.writtenProperties && i2.writtenProperties.forEach(({ target: i3, propName: t, newOrigin: e }) => {
    i$1(i3) && e && i3.originOf(t) !== e && i3.updateOrigin(t, e);
  });
}
export { i };
