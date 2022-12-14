import { n as n$1, o } from "./_commonjsHelpers.js";
function r(e, o2) {
  for (var r2 = 0; r2 < o2.length; r2++) {
    const a2 = o2[r2];
    if (typeof a2 != "string" && !Array.isArray(a2)) {
      for (const o3 in a2)
        if (o3 !== "default" && !(o3 in e)) {
          const r3 = Object.getOwnPropertyDescriptor(a2, o3);
          r3 && Object.defineProperty(e, o3, r3.get ? r3 : { enumerable: true, get: () => a2[o3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var a, t, _, i, s = { exports: {} };
a = s, t = s.exports, _ = function(e, o2) {
  Object.defineProperty(o2, "__esModule", { value: true }), o2.default = { _decimalSeparator: ",", _thousandSeparator: ".", _percentPrefix: null, _percentSuffix: "%", _big_number_suffix_3: "k", _big_number_suffix_6: "M", _big_number_suffix_9: "G", _big_number_suffix_12: "T", _big_number_suffix_15: "P", _big_number_suffix_18: "E", _big_number_suffix_21: "Z", _big_number_suffix_24: "Y", _small_number_suffix_3: "m", _small_number_suffix_6: "\u03BC", _small_number_suffix_9: "n", _small_number_suffix_12: "p", _small_number_suffix_15: "f", _small_number_suffix_18: "a", _small_number_suffix_21: "z", _small_number_suffix_24: "y", _byte_suffix_B: "B", _byte_suffix_KB: "KB", _byte_suffix_MB: "MB", _byte_suffix_GB: "GB", _byte_suffix_TB: "TB", _byte_suffix_PB: "PB", _date_millisecond: "mm:ss SSS", _date_second: "HH:mm:ss", _date_minute: "HH:mm", _date_hour: "HH:mm", _date_day: "MMM dd", _date_week: "ww", _date_month: "MMM", _date_year: "yyyy", _duration_millisecond: "SSS", _duration_millisecond_second: "ss.SSS", _duration_millisecond_minute: "mm:ss SSS", _duration_millisecond_hour: "hh:mm:ss SSS", _duration_millisecond_day: "d'd' mm:ss SSS", _duration_millisecond_week: "d'd' mm:ss SSS", _duration_millisecond_month: "M'm' dd'd' mm:ss SSS", _duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS", _duration_second: "ss", _duration_second_minute: "mm:ss", _duration_second_hour: "hh:mm:ss", _duration_second_day: "d'd' hh:mm:ss", _duration_second_week: "d'd' hh:mm:ss", _duration_second_month: "M'm' dd'd' hh:mm:ss", _duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss", _duration_minute: "mm", _duration_minute_hour: "hh:mm", _duration_minute_day: "d'd' hh:mm", _duration_minute_week: "d'd' hh:mm", _duration_minute_month: "M'm' dd'd' hh:mm", _duration_minute_year: "y'y' MM'm' dd'd' hh:mm", _duration_hour: "hh'h'", _duration_hour_day: "d'd' hh'h'", _duration_hour_week: "d'd' hh'h'", _duration_hour_month: "M'm' dd'd' hh'h'", _duration_hour_year: "y'y' MM'm' dd'd' hh'h'", _duration_day: "d'd'", _duration_day_week: "d'd'", _duration_day_month: "M'm' dd'd'", _duration_day_year: "y'y' MM'm' dd'd'", _duration_week: "w'w'", _duration_week_month: "w'w'", _duration_week_year: "w'w'", _duration_month: "M'm'", _duration_month_year: "y'y' MM'm'", _duration_year: "y'y'", _era_ad: "po. Kr.", _era_bc: "pr. Kr.", A: "AM", P: "PM", AM: "AM", PM: "PM", "A.M.": "AM", "P.M.": "PM", January: "sije\u010Dnja", February: "velja\u010De", March: "o\u017Eujka", April: "travnja", May: "svibnja", June: "lipnja", July: "srpnja", August: "kolovoza", September: "rujna", October: "listopada", November: "studenoga", December: "prosinca", Jan: "sij", Feb: "velj", Mar: "o\u017Eu", Apr: "tra", "May(short)": "svi", Jun: "lip", Jul: "srp", Aug: "kol", Sep: "ruj", Oct: "lis", Nov: "stu", Dec: "pro", Sunday: "nedjelja", Monday: "ponedjeljak", Tuesday: "utorak", Wednesday: "srijeda", Thursday: "\u010Detvrtak", Friday: "petak", Saturday: "subota", Sun: "ned", Mon: "pon", Tue: "uto", Wed: "sri", Thu: "\u010Det", Fri: "pet", Sat: "sub", _dateOrd: function(e2) {
    var o3 = "th";
    if (e2 < 11 || e2 > 13)
      switch (e2 % 10) {
        case 1:
          o3 = "st";
          break;
        case 2:
          o3 = "nd";
          break;
        case 3:
          o3 = "rd";
      }
    return o3;
  }, "Zoom Out": "Pove\u0107aj", Play: "Reproduciraj", Stop: "Zaustavi", Legend: "Legenda", "Click, tap or press ENTER to toggle": "", Loading: "U\u010Ditavanje", Home: "Po\u010Detna", Chart: "", "Serial chart": "", "X/Y chart": "", "Pie chart": "", "Gauge chart": "", "Radar chart": "", "Sankey diagram": "", "Flow diagram": "", "Chord diagram": "", "TreeMap chart": "", "Sliced chart": "", Series: "", "Candlestick Series": "", "OHLC Series": "", "Column Series": "", "Line Series": "", "Pie Slice Series": "", "Funnel Series": "", "Pyramid Series": "", "X/Y Series": "", Map: "", "Press ENTER to zoom in": "", "Press ENTER to zoom out": "", "Use arrow keys to zoom in and out": "", "Use plus and minus keys on your keyboard to zoom in and out": "", Export: "Ispis", Image: "Slika", Data: "Podaci", Print: "Ispis", "Click, tap or press ENTER to open": "", "Click, tap or press ENTER to print.": "", "Click, tap or press ENTER to export as %1.": "", 'To save the image, right-click this link and choose "Save picture as..."': "", 'To save the image, right-click thumbnail on the left and choose "Save picture as..."': "", "(Press ESC to close this message)": "", "Image Export Complete": "", "Export operation took longer than expected. Something might have gone wrong.": "", "Saved from": "", PNG: "", JPG: "", GIF: "", SVG: "", PDF: "", JSON: "", CSV: "", XLSX: "", "Use TAB to select grip buttons or left and right arrows to change selection": "", "Use left and right arrows to move selection": "", "Use left and right arrows to move left selection": "", "Use left and right arrows to move right selection": "", "Use TAB select grip buttons or up and down arrows to change selection": "", "Use up and down arrows to move selection": "", "Use up and down arrows to move lower selection": "", "Use up and down arrows to move upper selection": "", "From %1 to %2": "Od %1 do %2", "From %1": "Od %1", "To %1": "Do %1", "No parser available for file: %1": "", "Error parsing file: %1": "", "Unable to load file: %1": "", "Invalid date": "" };
}, (i = _(n$1, t)) !== void 0 && (a.exports = i);
const n = r({ __proto__: null, default: o(s.exports) }, [s.exports]);
export { n as h };
