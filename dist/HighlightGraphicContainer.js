import { $ as e, a1 as n$1 } from "./index.js";
import { I } from "./Utils2.js";
import { t } from "./BaseGraphicContainer.js";
import { _ } from "./enums.js";
let i = class extends t {
  doRender(e2) {
    e2.drawPhase === I.HIGHLIGHT && super.doRender(e2);
  }
  renderChildren(e2) {
    if (this.attributeView.update(), !this.children.some((e3) => e3.hasData))
      return;
    this.attributeView.bindTextures(e2.context), super.renderChildren(e2);
    const { painter: r } = e2, s = r.effects.highlight;
    s.bind(e2), e2.context.setColorMask(true, true, true, true), e2.context.clear(_.COLOR_BUFFER_BIT), this._renderChildren(e2, s.defines.concat(["highlightAll"])), s.draw(e2), s.unbind();
  }
};
i = e([n$1("esri.views.2d.layers.support.HighlightGraphicContainer")], i);
const n = i;
export { n };
