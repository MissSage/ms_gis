import { n as n$1, o as o$1 } from "./_commonjsHelpers.js";
function a(e, r) {
  for (var a2 = 0; a2 < r.length; a2++) {
    const o2 = r[a2];
    if (typeof o2 != "string" && !Array.isArray(o2)) {
      for (const r2 in o2)
        if (r2 !== "default" && !(r2 in e)) {
          const a3 = Object.getOwnPropertyDescriptor(o2, r2);
          a3 && Object.defineProperty(e, r2, a3.get ? a3 : { enumerable: true, get: () => o2[r2] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var o, t, _, i, s = { exports: {} };
o = s, t = s.exports, _ = function(e, r) {
  Object.defineProperty(r, "__esModule", { value: true }), r.default = { _decimalSeparator: ",", _thousandSeparator: ".", _percentPrefix: "%", _percentSuffix: null, _big_number_suffix_3: "k", _big_number_suffix_6: "M", _big_number_suffix_9: "G", _big_number_suffix_12: "T", _big_number_suffix_15: "P", _big_number_suffix_18: "E", _big_number_suffix_21: "Z", _big_number_suffix_24: "Y", _small_number_suffix_3: "m", _small_number_suffix_6: "\u03BC", _small_number_suffix_9: "n", _small_number_suffix_12: "p", _small_number_suffix_15: "f", _small_number_suffix_18: "a", _small_number_suffix_21: "z", _small_number_suffix_24: "y", _byte_suffix_B: "B", _byte_suffix_KB: "KB", _byte_suffix_MB: "MB", _byte_suffix_GB: "GB", _byte_suffix_TB: "TB", _byte_suffix_PB: "PB", _date_millisecond: "mm:ss SSS", _date_second: "HH:mm:ss", _date_minute: "HH:mm", _date_hour: "HH:mm", _date_day: "MMM dd", _date_week: "ww", _date_month: "MMM", _date_year: "yyyy", _duration_millisecond: "SSS", _duration_millisecond_second: "ss.SSS", _duration_millisecond_minute: "mm:ss SSS", _duration_millisecond_hour: "hh:mm:ss SSS", _duration_millisecond_day: "d'd' mm:ss SSS", _duration_millisecond_week: "d'd' mm:ss SSS", _duration_millisecond_month: "M'm' dd'd' mm:ss SSS", _duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS", _duration_second: "ss", _duration_second_minute: "mm:ss", _duration_second_hour: "hh:mm:ss", _duration_second_day: "d'd' hh:mm:ss", _duration_second_week: "d'd' hh:mm:ss", _duration_second_month: "M'm' dd'd' hh:mm:ss", _duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss", _duration_minute: "mm", _duration_minute_hour: "hh:mm", _duration_minute_day: "d'd' hh:mm", _duration_minute_week: "d'd' hh:mm", _duration_minute_month: "M'm' dd'd' hh:mm", _duration_minute_year: "y'y' MM'm' dd'd' hh:mm", _duration_hour: "hh'h'", _duration_hour_day: "d'd' hh'h'", _duration_hour_week: "d'd' hh'h'", _duration_hour_month: "M'm' dd'd' hh'h'", _duration_hour_year: "y'y' MM'm' dd'd' hh'h'", _duration_day: "d'd'", _duration_day_week: "d'd'", _duration_day_month: "M'm' dd'd'", _duration_day_year: "y'y' MM'm' dd'd'", _duration_week: "w'w'", _duration_week_month: "w'w'", _duration_week_year: "w'w'", _duration_month: "M'm'", _duration_month_year: "y'y' MM'm'", _duration_year: "y'y'", _era_ad: "MS", _era_bc: "M\xD6", A: "\xF6\xF6", P: "\xF6s", AM: "\xD6\xD6", PM: "\xD6S", "A.M.": "\xD6\xD6", "P.M.": "\xD6S", January: "Ocak", February: "\u015Eubat", March: "Mart", April: "Nisan", May: "May\u0131s", June: "Haziran", July: "Temmuz", August: "A\u011Fustos", September: "Eyl\xFCl", October: "Ekim", November: "Kas\u0131m", December: "Aral\u0131k", Jan: "Oca", Feb: "\u015Eub", Mar: "Mar", Apr: "Nis", "May(short)": "May", Jun: "Haz", Jul: "Tem", Aug: "A\u011Fu", Sep: "Eyl", Oct: "Eki", Nov: "Kas", Dec: "Ara", Sunday: "Pazar", Monday: "Pazartesi", Tuesday: "Sal\u0131", Wednesday: "\xC7ar\u015Famba", Thursday: "Per\u015Fembe", Friday: "Cuma", Saturday: "Cumartesi", Sun: "Paz", Mon: "Pzt", Tue: "Sal", Wed: "\xC7ar", Thu: "Per", Fri: "Cum", Sat: "Cmt", _dateOrd: function(e2) {
    var r2 = "th";
    if (e2 < 11 || e2 > 13)
      switch (e2 % 10) {
        case 1:
          r2 = "st";
          break;
        case 2:
          r2 = "nd";
          break;
        case 3:
          r2 = "rd";
      }
    return r2;
  }, "Zoom Out": "Yak\u0131nla\u015Ft\u0131r", Play: "Oynat", Stop: "Durdur", Legend: "G\xF6sterge", "Click, tap or press ENTER to toggle": "", Loading: "Y\xFCkleniyor", Home: "Giri\u015F Sayfas\u0131", Chart: "", "Serial chart": "", "X/Y chart": "", "Pie chart": "", "Gauge chart": "", "Radar chart": "", "Sankey diagram": "", "Flow diagram": "", "Chord diagram": "", "TreeMap chart": "", "Sliced chart": "", Series: "", "Candlestick Series": "", "OHLC Series": "", "Column Series": "", "Line Series": "", "Pie Slice Series": "", "Funnel Series": "", "Pyramid Series": "", "X/Y Series": "", Map: "", "Press ENTER to zoom in": "", "Press ENTER to zoom out": "", "Use arrow keys to zoom in and out": "", "Use plus and minus keys on your keyboard to zoom in and out": "", Export: "Yazd\u0131r", Image: "G\xF6r\xFCnt\xFC", Data: "Veri", Print: "Yazd\u0131r", "Click, tap or press ENTER to open": "", "Click, tap or press ENTER to print.": "", "Click, tap or press ENTER to export as %1.": "", 'To save the image, right-click this link and choose "Save picture as..."': "", 'To save the image, right-click thumbnail on the left and choose "Save picture as..."': "", "(Press ESC to close this message)": "", "Image Export Complete": "", "Export operation took longer than expected. Something might have gone wrong.": "", "Saved from": "", PNG: "", JPG: "", GIF: "", SVG: "", PDF: "", JSON: "", CSV: "", XLSX: "", "Use TAB to select grip buttons or left and right arrows to change selection": "", "Use left and right arrows to move selection": "", "Use left and right arrows to move left selection": "", "Use left and right arrows to move right selection": "", "Use TAB select grip buttons or up and down arrows to change selection": "", "Use up and down arrows to move selection": "", "Use up and down arrows to move lower selection": "", "Use up and down arrows to move upper selection": "", "From %1 to %2": "Kaynak %1 hedef %2", "From %1": "Kaynak %1", "To %1": "Hedef %1", "No parser available for file: %1": "", "Error parsing file: %1": "", "Unable to load file: %1": "", "Invalid date": "" };
}, (i = _(n$1, t)) !== void 0 && (o.exports = i);
const n = a({ __proto__: null, default: o$1(s.exports) }, [s.exports]);
export { n as t };
