import { gT as forceUpdate } from "./index.js";
import { c as createObserver } from "./observers.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */
const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = createObserver("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
function disconnectConditionalSlotComponent(component) {
  observed.delete(component.el);
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element] of observed.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    forceUpdate(target);
  });
}
export { connectConditionalSlotComponent as c, disconnectConditionalSlotComponent as d };
