/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */
function noopClick() {
}
function updateHostInteraction(component, hostIsTabbable = false) {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    component.el.click = noopClick;
    return;
  }
  component.el.click = HTMLElement.prototype.click;
  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  } else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  } else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  } else
    ;
  component.el.removeAttribute("aria-disabled");
}
export { updateHostInteraction as u };
