var e, t;
function r(t2) {
  switch (t2) {
    case "left":
      return e.Left;
    case "right":
      return e.Right;
    case "center":
      return e.Center;
  }
}
function n(e2) {
  switch (e2) {
    case "top":
      return t.Top;
    case "middle":
      return t.Center;
    case "baseline":
      return t.Baseline;
    case "bottom":
      return t.Bottom;
  }
}
function a(r2) {
  switch (r2) {
    case "above-left":
    case "esriServerPointLabelPlacementAboveLeft":
      return [e.Right, t.Bottom];
    case "above-center":
    case "above-along":
    case "esriServerPointLabelPlacementAboveCenter":
    case "esriServerLinePlacementAboveAlong":
      return [e.Center, t.Bottom];
    case "above-right":
    case "esriServerPointLabelPlacementAboveRight":
      return [e.Left, t.Bottom];
    case "center-left":
    case "esriServerPointLabelPlacementCenterLeft":
      return [e.Right, t.Center];
    case "center-center":
    case "center-along":
    case "esriServerPointLabelPlacementCenterCenter":
    case "esriServerLinePlacementCenterAlong":
    case "always-horizontal":
    case "esriServerPolygonPlacementAlwaysHorizontal":
      return [e.Center, t.Center];
    case "center-right":
    case "esriServerPointLabelPlacementCenterRight":
      return [e.Left, t.Center];
    case "below-left":
    case "esriServerPointLabelPlacementBelowLeft":
      return [e.Right, t.Top];
    case "below-center":
    case "below-along":
    case "esriServerPointLabelPlacementBelowCenter":
    case "esriServerLinePlacementBelowAlong":
      return [e.Center, t.Top];
    case "below-right":
    case "esriServerPointLabelPlacementBelowRight":
      return [e.Left, t.Top];
    default:
      return console.debug(`Found invalid placement type ${r2}`), [e.Center, t.Center];
  }
}
function c(t2) {
  switch (t2) {
    case e.Right:
      return -1;
    case e.Center:
      return 0;
    case e.Left:
      return 1;
    default:
      return console.debug(`Found invalid horizontal alignment ${t2}`), 0;
  }
}
function o(e2) {
  switch (e2) {
    case t.Top:
      return 1;
    case t.Center:
      return 0;
    case t.Bottom:
    case t.Baseline:
      return -1;
    default:
      return console.debug(`Found invalid vertical alignment ${e2}`), 0;
  }
}
function s(t2) {
  switch (t2) {
    case "left":
      return e.Left;
    case "right":
      return e.Right;
    case "center":
      return e.Center;
  }
}
function i(e2) {
  switch (e2) {
    case "above-along":
    case "below-along":
    case "center-along":
    case "esriServerLinePlacementAboveAlong":
    case "esriServerLinePlacementBelowAlong":
    case "esriServerLinePlacementCenterAlong":
      return true;
    default:
      return false;
  }
}
!function(e2) {
  e2[e2.Left = -1] = "Left", e2[e2.Center = 0] = "Center", e2[e2.Right = 1] = "Right";
}(e || (e = {})), function(e2) {
  e2[e2.Top = 1] = "Top", e2[e2.Center = 0] = "Center", e2[e2.Bottom = -1] = "Bottom", e2[e2.Baseline = 2] = "Baseline";
}(t || (t = {}));
export { a, c, e, i, n, o, r, s, t };
