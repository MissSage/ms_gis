import { I } from "./Utils2.js";
import { t } from "./BaseGraphicContainer.js";
class i extends t {
  renderChildren(r) {
    this.attributeView.update(), this.children.some((e) => e.hasData) && (this.attributeView.bindTextures(r.context, false), super.renderChildren(r), r.drawPhase === I.MAP && this._renderChildren(r), this.hasHighlight() && r.drawPhase === I.HIGHLIGHT && this._renderHighlight(r), this._boundsRenderer && this._boundsRenderer.doRender(r));
  }
  _renderHighlight(e) {
    const { painter: r } = e, i2 = r.effects.highlight;
    i2.bind(e), this._renderChildren(e, i2.defines), i2.draw(e), i2.unbind();
  }
}
export { i };
