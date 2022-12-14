import { O } from "./geometryEngineJSON.js";
import "./index.js";
import "vue";
function e(e2) {
  return (0, O[e2.operation])(...e2.parameters);
}
export { e as executeGEOperation };
