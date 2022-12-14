import { O } from "./geometryEngineJSON.js";
import "./geometryEngineBase.js";
import "./json.js";
function e(e2) {
  return (0, O[e2.operation])(...e2.parameters);
}
export { e as executeGEOperation };
