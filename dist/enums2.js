const c$1 = 1e-30, i$1 = 4294967295, o$1 = 512, r$1 = 8, s$1 = 10, f$1 = 29, j$1 = 24, k$1 = 8, q$1 = { metrics: { width: 15, height: 17, left: 0, top: -7, advance: 14 } }, y$1 = 0, z$1 = 0, A$1 = 0, B$1 = 1, C$1 = 2, D$1 = 3, E$1 = 4, F$1 = 5, G$1 = 6, H$1 = 12, I$1 = 5, J$1 = 6, K$1 = 5, L$1 = 6, M$1 = 0, N$1 = 1, O$1 = 2, P$1 = 3, R$1 = 4, S$1 = 2, T$1 = 1, U$1 = 2, V$1 = 4, X$1 = 1.05, Y$1 = 3, Z$1 = 5, $$1 = 6, _$1 = 1.15, et = 2, ct = 8, ht = 500, at = 10, dt = 1024, nt = 2, pt = 0, rt = 1, st = 4, ft = 8, gt = 16, lt = 4, mt = 1, vt = 4, wt = 128, xt = 4, bt = 2;
var e, n, i, t, o, r, l, a, u, c, d, f, s, p, g, C, m, T, S, P, R, B, N, h, O, L, M, A, y, E, D, F, v, x, W, U, k, H, b, w, I, G, q, J, X, Y, Z, K, Q, V, j, z, $, _, ee, ne, ie, te, oe, re, le;
!function(e2) {
  e2[e2.BUTT = 0] = "BUTT", e2[e2.ROUND = 1] = "ROUND", e2[e2.SQUARE = 2] = "SQUARE", e2[e2.UNKNOWN = 4] = "UNKNOWN";
}(e || (e = {})), function(e2) {
  e2[e2.BEVEL = 0] = "BEVEL", e2[e2.ROUND = 1] = "ROUND", e2[e2.MITER = 2] = "MITER", e2[e2.UNKNOWN = 4] = "UNKNOWN";
}(n || (n = {})), function(e2) {
  e2[e2.SCREEN = 0] = "SCREEN", e2[e2.MAP = 1] = "MAP";
}(i || (i = {})), function(e2) {
  e2[e2.Tint = 0] = "Tint", e2[e2.Ignore = 1] = "Ignore", e2[e2.Multiply = 99] = "Multiply";
}(t || (t = {})), function(e2) {
  e2.Both = "Both", e2.JustBegin = "JustBegin", e2.JustEnd = "JustEnd", e2.None = "None";
}(o || (o = {})), function(e2) {
  e2[e2.Mosaic = 0] = "Mosaic", e2[e2.Centered = 1] = "Centered";
}(r || (r = {})), function(e2) {
  e2[e2.Normal = 0] = "Normal", e2[e2.Superscript = 1] = "Superscript", e2[e2.Subscript = 2] = "Subscript";
}(l || (l = {})), function(e2) {
  e2[e2.MSSymbol = 0] = "MSSymbol", e2[e2.Unicode = 1] = "Unicode";
}(a || (a = {})), function(e2) {
  e2[e2.Unspecified = 0] = "Unspecified", e2[e2.TrueType = 1] = "TrueType", e2[e2.PSOpenType = 2] = "PSOpenType", e2[e2.TTOpenType = 3] = "TTOpenType", e2[e2.Type1 = 4] = "Type1";
}(u || (u = {})), function(e2) {
  e2[e2.Display = 0] = "Display", e2[e2.Map = 1] = "Map";
}(c || (c = {})), function(e2) {
  e2.None = "None", e2.Loop = "Loop", e2.Oscillate = "Oscillate";
}(d || (d = {})), function(e2) {
  e2[e2.Z = 0] = "Z", e2[e2.X = 1] = "X", e2[e2.Y = 2] = "Y";
}(f || (f = {})), function(e2) {
  e2[e2.XYZ = 0] = "XYZ", e2[e2.ZXY = 1] = "ZXY", e2[e2.YXZ = 2] = "YXZ";
}(s || (s = {})), function(e2) {
  e2[e2.Rectangle = 0] = "Rectangle", e2[e2.RoundedRectangle = 1] = "RoundedRectangle", e2[e2.Oval = 2] = "Oval";
}(p || (p = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Alpha = 1] = "Alpha", e2[e2.Screen = 2] = "Screen", e2[e2.Multiply = 3] = "Multiply", e2[e2.Add = 4] = "Add";
}(g || (g = {})), function(e2) {
  e2[e2.TTB = 0] = "TTB", e2[e2.RTL = 1] = "RTL", e2[e2.BTT = 2] = "BTT";
}(C || (C = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.SignPost = 1] = "SignPost", e2[e2.FaceNearPlane = 2] = "FaceNearPlane";
}(m || (m = {})), function(e2) {
  e2[e2.Float = 0] = "Float", e2[e2.String = 1] = "String", e2[e2.Boolean = 2] = "Boolean";
}(T || (T = {})), function(e2) {
  e2[e2.Intersect = 0] = "Intersect", e2[e2.Subtract = 1] = "Subtract";
}(S || (S = {})), function(e2) {
  e2.OpenEnded = "OpenEnded", e2.Block = "Block", e2.Crossed = "Crossed";
}(P || (P = {})), function(e2) {
  e2.FullGeometry = "FullGeometry", e2.PerpendicularFromFirstSegment = "PerpendicularFromFirstSegment", e2.ReversedFirstSegment = "ReversedFirstSegment", e2.PerpendicularToSecondSegment = "PerpendicularToSecondSegment", e2.SecondSegmentWithTicks = "SecondSegmentWithTicks", e2.DoublePerpendicular = "DoublePerpendicular", e2.OppositeToFirstSegment = "OppositeToFirstSegment", e2.TriplePerpendicular = "TriplePerpendicular", e2.HalfCircleFirstSegment = "HalfCircleFirstSegment", e2.HalfCircleSecondSegment = "HalfCircleSecondSegment", e2.HalfCircleExtended = "HalfCircleExtended", e2.OpenCircle = "OpenCircle", e2.CoverageEdgesWithTicks = "CoverageEdgesWithTicks", e2.GapExtentWithDoubleTicks = "GapExtentWithDoubleTicks", e2.GapExtentMidline = "GapExtentMidline", e2.Chevron = "Chevron", e2.PerpendicularWithArc = "PerpendicularWithArc", e2.ClosedHalfCircle = "ClosedHalfCircle", e2.TripleParallelExtended = "TripleParallelExtended", e2.ParallelWithTicks = "ParallelWithTicks", e2.Parallel = "Parallel", e2.PerpendicularToFirstSegment = "PerpendicularToFirstSegment", e2.ParallelOffset = "ParallelOffset", e2.OffsetOpposite = "OffsetOpposite", e2.OffsetSame = "OffsetSame", e2.CircleWithArc = "CircleWithArc", e2.DoubleJog = "DoubleJog", e2.PerpendicularOffset = "PerpendicularOffset", e2.LineExcludingLastSegment = "LineExcludingLastSegment", e2.MultivertexArrow = "MultivertexArrow", e2.CrossedArrow = "CrossedArrow", e2.ChevronArrow = "ChevronArrow", e2.ChevronArrowOffset = "ChevronArrowOffset", e2.PartialFirstSegment = "PartialFirstSegment", e2.Arch = "Arch", e2.CurvedParallelTicks = "CurvedParallelTicks", e2.Arc90Degrees = "Arc90Degrees";
}(R || (R = {})), function(e2) {
  e2.Mitered = "Mitered", e2.Bevelled = "Bevelled", e2.Rounded = "Rounded", e2.Square = "Square", e2.TrueBuffer = "TrueBuffer";
}(B || (B = {})), function(e2) {
  e2.ClosePath = "ClosePath", e2.ConvexHull = "ConvexHull", e2.RectangularBox = "RectangularBox";
}(N || (N = {})), function(e2) {
  e2.BeginningOfLine = "BeginningOfLine", e2.EndOfLine = "EndOfLine";
}(h || (h = {})), function(e2) {
  e2.Mitered = "Mitered", e2.Bevelled = "Bevelled", e2.Rounded = "Rounded", e2.Square = "Square";
}(O || (O = {})), function(e2) {
  e2.Fast = "Fast", e2.Accurate = "Accurate";
}(L || (L = {})), function(e2) {
  e2.BeginningOfLine = "BeginningOfLine", e2.EndOfLine = "EndOfLine";
}(M || (M = {})), function(e2) {
  e2.Sinus = "Sinus", e2.Square = "Square", e2.Triangle = "Triangle", e2.Random = "Random";
}(A || (A = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Default = 1] = "Default", e2[e2.Force = 2] = "Force";
}(y || (y = {})), function(e2) {
  e2[e2.Buffered = 0] = "Buffered", e2[e2.Left = 1] = "Left", e2[e2.Right = 2] = "Right", e2[e2.AlongLine = 3] = "AlongLine";
}(E || (E = {})), function(e2) {
  e2[e2.Linear = 0] = "Linear", e2[e2.Rectangular = 1] = "Rectangular", e2[e2.Circular = 2] = "Circular", e2[e2.Buffered = 3] = "Buffered";
}(D || (D = {})), function(e2) {
  e2[e2.Discrete = 0] = "Discrete", e2[e2.Continuous = 1] = "Continuous";
}(F || (F = {})), function(e2) {
  e2[e2.AcrossLine = 0] = "AcrossLine", e2[e2.AloneLine = 1] = "AloneLine";
}(v || (v = {})), function(e2) {
  e2[e2.Left = 0] = "Left", e2[e2.Right = 1] = "Right", e2[e2.Center = 2] = "Center", e2[e2.Justify = 3] = "Justify";
}(x || (x = {})), function(e2) {
  e2[e2.Base = 0] = "Base", e2[e2.MidPoint = 1] = "MidPoint", e2[e2.ThreePoint = 2] = "ThreePoint", e2[e2.FourPoint = 3] = "FourPoint", e2[e2.Underline = 4] = "Underline", e2[e2.CircularCW = 5] = "CircularCW", e2[e2.CircularCCW = 6] = "CircularCCW";
}(W || (W = {})), function(e2) {
  e2.Butt = "Butt", e2.Round = "Round", e2.Square = "Square";
}(U || (U = {})), function(e2) {
  e2.NoConstraint = "NoConstraint", e2.HalfPattern = "HalfPattern", e2.HalfGap = "HalfGap", e2.FullPattern = "FullPattern", e2.FullGap = "FullGap", e2.Custom = "Custom";
}(k || (k = {})), function(e2) {
  e2[e2.None = -1] = "None", e2[e2.Custom = 0] = "Custom", e2[e2.Circle = 1] = "Circle", e2[e2.OpenArrow = 2] = "OpenArrow", e2[e2.ClosedArrow = 3] = "ClosedArrow", e2[e2.Diamond = 4] = "Diamond";
}(H || (H = {})), function(e2) {
  e2[e2.ExtraLeading = 0] = "ExtraLeading", e2[e2.Multiple = 1] = "Multiple", e2[e2.Exact = 2] = "Exact";
}(b || (b = {})), function(e2) {
  e2.Bevel = "Bevel", e2.Round = "Round", e2.Miter = "Miter";
}(w || (w = {})), function(e2) {
  e2[e2.Default = 0] = "Default", e2[e2.String = 1] = "String", e2[e2.Numeric = 2] = "Numeric";
}(I || (I = {})), function(e2) {
  e2[e2.InsidePolygon = 0] = "InsidePolygon", e2[e2.PolygonCenter = 1] = "PolygonCenter", e2[e2.RandomlyInsidePolygon = 2] = "RandomlyInsidePolygon";
}(G || (G = {})), function(e2) {
  e2[e2.Tint = 0] = "Tint", e2[e2.Replace = 1] = "Replace", e2[e2.Multiply = 2] = "Multiply";
}(q || (q = {})), function(e2) {
  e2[e2.ClipAtBoundary = 0] = "ClipAtBoundary", e2[e2.RemoveIfCenterOutsideBoundary = 1] = "RemoveIfCenterOutsideBoundary", e2[e2.DoNotTouchBoundary = 2] = "DoNotTouchBoundary", e2[e2.DoNotClip = 3] = "DoNotClip";
}(J || (J = {})), function(e2) {
  e2.NoConstraint = "NoConstraint", e2.WithMarkers = "WithMarkers", e2.WithFullGap = "WithFullGap", e2.WithHalfGap = "WithHalfGap", e2.Custom = "Custom";
}(X || (X = {})), function(e2) {
  e2.Fixed = "Fixed", e2.Random = "Random", e2.RandomFixedQuantity = "RandomFixedQuantity";
}(Y || (Y = {})), function(e2) {
  e2.LineMiddle = "LineMiddle", e2.LineBeginning = "LineBeginning", e2.LineEnd = "LineEnd", e2.SegmentMidpoint = "SegmentMidpoint";
}(Z || (Z = {})), function(e2) {
  e2.OnPolygon = "OnPolygon", e2.CenterOfMass = "CenterOfMass", e2.BoundingBoxCenter = "BoundingBoxCenter";
}(K || (K = {})), function(e2) {
  e2[e2.Low = 0] = "Low", e2[e2.Medium = 1] = "Medium", e2[e2.High = 2] = "High";
}(Q || (Q = {})), function(e2) {
  e2[e2.MarkerCenter = 0] = "MarkerCenter", e2[e2.MarkerBounds = 1] = "MarkerBounds";
}(V || (V = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.PropUniform = 1] = "PropUniform", e2[e2.PropNonuniform = 2] = "PropNonuniform", e2[e2.DifUniform = 3] = "DifUniform", e2[e2.DifNonuniform = 4] = "DifNonuniform";
}(j || (j = {})), function(e2) {
  e2.Tube = "Tube", e2.Strip = "Strip", e2.Wall = "Wall";
}(z || (z = {})), function(e2) {
  e2[e2.Random = 0] = "Random", e2[e2.Increasing = 1] = "Increasing", e2[e2.Decreasing = 2] = "Decreasing", e2[e2.IncreasingThenDecreasing = 3] = "IncreasingThenDecreasing";
}($ || ($ = {})), function(e2) {
  e2[e2.Relative = 0] = "Relative", e2[e2.Absolute = 1] = "Absolute";
}(_ || (_ = {})), function(e2) {
  e2[e2.Normal = 0] = "Normal", e2[e2.LowerCase = 1] = "LowerCase", e2[e2.Allcaps = 2] = "Allcaps";
}(ee || (ee = {})), function(e2) {
  e2[e2.LTR = 0] = "LTR", e2[e2.RTL = 1] = "RTL";
}(ne || (ne = {})), function(e2) {
  e2.Draft = "Draft", e2.Picture = "Picture", e2.Text = "Text";
}(ie || (ie = {})), function(e2) {
  e2[e2.Top = 0] = "Top", e2[e2.Center = 1] = "Center", e2[e2.Baseline = 2] = "Baseline", e2[e2.Bottom = 3] = "Bottom";
}(te || (te = {})), function(e2) {
  e2[e2.Right = 0] = "Right", e2[e2.Upright = 1] = "Upright";
}(oe || (oe = {})), function(e2) {
  e2[e2.Small = 0] = "Small", e2[e2.Medium = 1] = "Medium", e2[e2.Large = 2] = "Large";
}(re || (re = {})), function(e2) {
  e2[e2.Calm = 0] = "Calm", e2[e2.Rippled = 1] = "Rippled", e2[e2.Slight = 2] = "Slight", e2[e2.Moderate = 3] = "Moderate";
}(le || (le = {}));
export { nt as $, A, B$1 as B, C$1 as C, oe as D, m as E, ie as F, dt as G, i as H, I$1 as I, J$1 as J, K, ct as L, ht as M, N$1 as N, O$1 as O, P, o$1 as Q, R, at as S, k$1 as T, U$1 as U, V$1 as V, rt as W, X, Y$1 as Y, Z, pt as _, e as a, st as a0, ft as a1, i$1 as a2, X$1 as a3, mt as a4, lt as a5, gt as a6, vt as a7, q$1 as a8, S$1 as a9, T$1 as aa, P$1 as ab, c$1 as ac, A$1 as ad, D$1 as ae, E$1 as af, F$1 as ag, G$1 as ah, K$1 as ai, L$1 as aj, Z$1 as ak, _$1 as al, $$1 as am, H$1 as an, M$1 as ao, R$1 as ap, bt as b, O as c, d, et as e, B as f, Y as g, f$1 as h, U as i, j$1 as j, k, w as l, C as m, n, o, l as p, a as q, r$1 as r, s$1 as s, y as t, u, ne as v, wt as w, xt as x, y$1 as y, z$1 as z };
