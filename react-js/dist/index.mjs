var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/Address.tsx
var Address_exports2 = {};
__export(Address_exports2, {
  Document: () => Document,
  Summary: () => Summary
});
import React from "react";

// ../models/src/index.ts
import { Definitions as Definitions18 } from "@pitaman71/omniglot-live-data";

// ../models/src/Address.ts
var Address_exports = {};
__export(Address_exports, {
  Domain: () => Domain,
  directory: () => directory
});
import { Definitions, Values } from "@pitaman71/omniglot-live-data";
var directory = new Definitions.Directory();
var makePath = (path) => `omniglot-live-logistics.Address.${path}`;
var Domain = new Values.AggregateDomain(makePath("Domain"), {
  addressLine1: Values.TheStringDomain,
  addressLine2: Values.TheStringDomain,
  postalCode: Values.TheStringDomain
}, ["addressLine1", "addressLine2", "postalCode"]);
directory.add(Domain);

// ../models/node_modules/luxon/src/errors.js
var LuxonError = class extends Error {
};
var InvalidDateTimeError = class extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
};
var InvalidIntervalError = class extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
};
var InvalidDurationError = class extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
};
var ConflictingSpecificationError = class extends LuxonError {
};
var InvalidUnitError = class extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
};
var InvalidArgumentError = class extends LuxonError {
};
var ZoneIsAbstractError = class extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
};

// ../models/node_modules/luxon/src/impl/formats.js
var n = "numeric";
var s = "short";
var l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s
};
var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l
};
var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

// ../models/node_modules/luxon/src/impl/util.js
function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}
function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return void 0;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}
function floorMod(x, n2) {
  return x - n2 * Math.floor(x / n2);
}
function padStart(input, n2 = 2) {
  const minus = input < 0 ? "-" : "";
  const target = minus ? input * -1 : input;
  let result;
  if (target.toString().length < n2) {
    result = ("0".repeat(n2) + target).slice(-n2);
  } else {
    result = target.toString();
  }
  return `${minus}${result}`;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return void 0;
  } else {
    const f = parseFloat("0." + fraction) * 1e3;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits, rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}
function objToLocalTS(obj) {
  let d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond
  );
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  return +d;
}
function weeksInWeekYear(weekYear) {
  const p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2e3 + year;
}
function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts), intlOpts = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }
  const modified = { timeZoneName: offsetFormat, ...intlOpts };
  const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }
  const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}
function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === void 0 || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}
function formatOffset(offset2, format) {
  const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;

// ../models/node_modules/luxon/src/impl/english.js
var monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
var weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
      default:
    }
  }
  const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}

// ../models/node_modules/luxon/src/impl/formatter.js
function stringifyTokens(splits, tokenToString) {
  let s2 = "";
  for (const token of splits) {
    if (token.literal) {
      s2 += token.val;
    } else {
      s2 += tokenToString(token.val);
    }
  }
  return s2;
}
var macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
var Formatter = class _Formatter {
  static create(locale, opts = {}) {
    return new _Formatter(locale, opts);
  }
  static parseFormat(fmt) {
    let current = null, currentFull = "", bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }
    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }
    return splits;
  }
  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }
  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }
  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }
  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }
  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.formatToParts();
  }
  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.resolvedOptions();
  }
  num(n2, p = 0) {
    if (this.opts.forceSimple) {
      return padStart(n2, p);
    }
    const opts = { ...this.opts };
    if (p > 0) {
      opts.padTo = p;
    }
    return this.loc.numberFormatter(opts).format(n2);
  }
  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }
      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string(
      standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
      "weekday"
    ), maybeMacro = (token) => {
      const formatOpts = _Formatter.macroTokenToFormatOpts(token);
      if (formatOpts) {
        return this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"), tokenToString = (token) => {
      switch (token) {
        // ms
        case "S":
          return this.num(dt.millisecond);
        case "u":
        // falls through
        case "SSS":
          return this.num(dt.millisecond, 3);
        // seconds
        case "s":
          return this.num(dt.second);
        case "ss":
          return this.num(dt.second, 2);
        // fractional seconds
        case "uu":
          return this.num(Math.floor(dt.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(dt.millisecond / 100));
        // minutes
        case "m":
          return this.num(dt.minute);
        case "mm":
          return this.num(dt.minute, 2);
        // hours
        case "h":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
        case "hh":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
        case "H":
          return this.num(dt.hour);
        case "HH":
          return this.num(dt.hour, 2);
        // offset
        case "Z":
          return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
        // zone
        case "z":
          return dt.zoneName;
        // meridiems
        case "a":
          return meridiem();
        // dates
        case "d":
          return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
        case "dd":
          return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
        // weekdays - standalone
        case "c":
          return this.num(dt.weekday);
        case "ccc":
          return weekday("short", true);
        case "cccc":
          return weekday("long", true);
        case "ccccc":
          return weekday("narrow", true);
        // weekdays - format
        case "E":
          return this.num(dt.weekday);
        case "EEE":
          return weekday("short", false);
        case "EEEE":
          return weekday("long", false);
        case "EEEEE":
          return weekday("narrow", false);
        // months - standalone
        case "L":
          return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
        case "LL":
          return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
        case "LLL":
          return month("short", true);
        case "LLLL":
          return month("long", true);
        case "LLLLL":
          return month("narrow", true);
        // months - format
        case "M":
          return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt.month);
        case "MM":
          return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt.month, 2);
        case "MMM":
          return month("short", false);
        case "MMMM":
          return month("long", false);
        case "MMMMM":
          return month("narrow", false);
        // years
        case "y":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
        case "yy":
          return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
        case "yyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 4);
        case "yyyyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 6);
        // eras
        case "G":
          return era("short");
        case "GG":
          return era("long");
        case "GGGGG":
          return era("narrow");
        case "kk":
          return this.num(dt.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(dt.weekYear, 4);
        case "W":
          return this.num(dt.weekNumber);
        case "WW":
          return this.num(dt.weekNumber, 2);
        case "o":
          return this.num(dt.ordinal);
        case "ooo":
          return this.num(dt.ordinal, 3);
        case "q":
          return this.num(dt.quarter);
        case "qq":
          return this.num(dt.quarter, 2);
        case "X":
          return this.num(Math.floor(dt.ts / 1e3));
        case "x":
          return this.num(dt.ts);
        default:
          return maybeMacro(token);
      }
    };
    return stringifyTokens(_Formatter.parseFormat(fmt), tokenToString);
  }
  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
      switch (token[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, tokenToString = (lildur) => (token) => {
      const mapped = tokenToField(token);
      if (mapped) {
        return this.num(lildur.get(mapped), token.length);
      } else {
        return token;
      }
    }, tokens = _Formatter.parseFormat(fmt), realTokens = tokens.reduce(
      (found, { literal, val }) => literal ? found : found.concat(val),
      []
    ), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
};

// ../models/node_modules/luxon/src/impl/invalid.js
var Invalid = class {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }
  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
};

// ../models/node_modules/luxon/src/zone.js
var Zone = class {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new ZoneIsAbstractError();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new ZoneIsAbstractError();
  }
};

// ../models/node_modules/luxon/src/zones/systemZone.js
var singleton = null;
var SystemZone = class _SystemZone extends Zone {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    if (singleton === null) {
      singleton = new _SystemZone();
    }
    return singleton;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return false;
  }
  /** @override **/
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  equals(otherZone) {
    return otherZone.type === "system";
  }
  /** @override **/
  get isValid() {
    return true;
  }
};

// ../models/node_modules/luxon/src/zones/IANAZone.js
var matchingRegex = RegExp(`^${ianaRegex.source}$`);
var dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[zone];
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}
function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date), filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i], pos = typeToPos[type];
    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}
var ianaZoneCache = {};
var IANAZone = class _IANAZone extends Zone {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new _IANAZone(name);
    }
    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidSpecifier(s2) {
    return !!(s2 && s2.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }
  constructor(name) {
    super();
    this.zoneName = name;
    this.valid = _IANAZone.isValidZone(name);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return false;
  }
  /** @override **/
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  offset(ts) {
    const date = new Date(ts);
    if (isNaN(date)) return NaN;
    const dtf = makeDTF(this.name), [year, month, day, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
    const adjustedHour = hour === 24 ? 0 : hour;
    const asUTC = objToLocalTS({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0
    });
    let asTS = +date;
    const over = asTS % 1e3;
    asTS -= over >= 0 ? over : 1e3 + over;
    return (asUTC - asTS) / (60 * 1e3);
  }
  /** @override **/
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this.valid;
  }
};

// ../models/node_modules/luxon/src/zones/fixedOffsetZone.js
var singleton2 = null;
var FixedOffsetZone = class _FixedOffsetZone extends Zone {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    if (singleton2 === null) {
      singleton2 = new _FixedOffsetZone(0);
    }
    return singleton2;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(offset2) {
    return offset2 === 0 ? _FixedOffsetZone.utcInstance : new _FixedOffsetZone(offset2);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(s2) {
    if (s2) {
      const r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new _FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }
    return null;
  }
  constructor(offset2) {
    super();
    this.fixed = offset2;
  }
  /** @override **/
  get type() {
    return "fixed";
  }
  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  get isUniversal() {
    return true;
  }
  /** @override **/
  offset() {
    return this.fixed;
  }
  /** @override **/
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  get isValid() {
    return true;
  }
};

// ../models/node_modules/luxon/src/zones/invalidZone.js
var InvalidZone = class extends Zone {
  constructor(zoneName) {
    super();
    this.zoneName = zoneName;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return false;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return false;
  }
  /** @override **/
  get isValid() {
    return false;
  }
};

// ../models/node_modules/luxon/src/impl/zoneUtil.js
function normalizeZone(input, defaultZone2) {
  let offset2;
  if (isUndefined(input) || input === null) {
    return defaultZone2;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "local" || lowered === "system") return defaultZone2;
    else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;
    else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);
    else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    return input;
  } else {
    return new InvalidZone(input);
  }
}

// ../models/node_modules/luxon/src/settings.js
var now = () => Date.now();
var defaultZone = "system";
var defaultLocale = null;
var defaultNumberingSystem = null;
var defaultOutputCalendar = null;
var throwOnInvalid;
var Settings = class {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return now;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(n2) {
    now = n2;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(zone) {
    defaultZone = zone;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return normalizeZone(defaultZone, SystemZone.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return defaultLocale;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  }
};

// ../models/node_modules/luxon/src/impl/locale.js
var intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}
var intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}
var intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts;
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}
var sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}
function parseLocaleString(localeStr) {
  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    const smaller = localeStr.substring(0, uIndex);
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }
    const { numberingSystem, calendar } = options;
    return [smaller, numberingSystem, calendar];
  }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";
    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }
    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}
function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}
function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);
  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}
function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
var PolyNumberFormatter = class {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;
    if (!forceSimple) {
      const intlOpts = { useGrouping: false };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }
  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
      return padStart(fixed, this.padTo);
    }
  }
};
var PolyDateFormatter = class {
  constructor(dt, intl, opts) {
    this.opts = opts;
    let z;
    if (dt.zone.isUniversal) {
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        z = "UTC";
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1e3);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }
    const intlOpts = { ...this.opts };
    if (z) {
      intlOpts.timeZone = z;
    }
    this.dtf = getCachedDTF(intl, intlOpts);
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
};
var PolyRelFormatter = class {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: "long", ...opts };
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }
  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }
  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
};
var Locale = class _Locale {
  static fromOpts(opts) {
    return _Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }
  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || Settings.defaultLocale;
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new _Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }
  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }
  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return _Locale.create(locale, numberingSystem, outputCalendar);
  }
  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }
  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }
    return this.fastNumbersCached;
  }
  listingMode(defaultOK = true) {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }
  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return _Locale.create(
        alts.locale || this.specifiedLocale,
        alts.numberingSystem || this.numberingSystem,
        alts.outputCalendar || this.outputCalendar,
        alts.defaultToEN || false
      );
    }
  }
  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }
  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }
  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }
  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, weekdays, () => {
      const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays(
          (dt) => this.extract(dt, intl, "weekday")
        );
      }
      return this.weekdaysCache[formatStr][length];
    });
  }
  meridiems(defaultOK = true) {
    return listStuff(
      this,
      void 0,
      defaultOK,
      () => meridiems,
      () => {
        if (!this.meridiemCache) {
          const intl = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(
            (dt) => this.extract(dt, intl, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, eras, () => {
      const intl = { era: length };
      if (!this.eraCache[length]) {
        this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(
          (dt) => this.extract(dt, intl, "era")
        );
      }
      return this.eraCache[length];
    });
  }
  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }
  numberFormatter(opts = {}) {
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }
  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }
  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  }
};

// ../models/node_modules/luxon/src/impl/regexParser.js
function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}
function combineExtractors(...extractors) {
  return (m) => extractors.reduce(
    ([mergedVals, mergedZone, cursor], ex) => {
      const [val, zone, next] = ex(m, cursor);
      return [{ ...mergedVals, ...val }, mergedZone || zone, next];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function parse(s2, ...patterns) {
  if (s2 == null) {
    return [null, null];
  }
  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s2);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}
function simpleParse(...keys) {
  return (match2, cursor) => {
    const ret = {};
    let i;
    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match2[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}
var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
var isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${offsetRegex.source}?`);
var isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
var extractISOOrdinalData = simpleParse("year", "ordinal");
var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
var sqlTimeRegex = RegExp(
  `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`
);
var sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
function int(match2, pos, fallback) {
  const m = match2[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match2, cursor) {
  const item = {
    year: int(match2, cursor),
    month: int(match2, cursor + 1, 1),
    day: int(match2, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}
function extractISOTime(match2, cursor) {
  const item = {
    hours: int(match2, cursor, 0),
    minutes: int(match2, cursor + 1, 0),
    seconds: int(match2, cursor + 2, 0),
    milliseconds: parseMillis(match2[cursor + 3])
  };
  return [item, null, cursor + 4];
}
function extractISOOffset(match2, cursor) {
  const local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}
function extractIANAZone(match2, cursor) {
  const zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
  return [{}, zone, cursor + 1];
}
var isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
var isoDuration = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function extractISODuration(match2) {
  const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
  const hasNegativePrefix = s2[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";
  const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
    }
  ];
}
var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }
  return result;
}
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match2) {
  const [
    ,
    weekdayStr,
    dayStr,
    monthStr,
    yearStr,
    hourStr,
    minuteStr,
    secondStr,
    obsOffset,
    milOffset,
    offHourStr,
    offMinuteStr
  ] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  let offset2;
  if (obsOffset) {
    offset2 = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset2 = 0;
  } else {
    offset2 = signedOffset(offHourStr, offMinuteStr);
  }
  return [result, new FixedOffsetZone(offset2)];
}
function preprocessRFC2822(s2) {
  return s2.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
var rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match2) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
function extractASCII(match2) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset
);
var extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset
);
var extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset
);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
function parseISODate(s2) {
  return parse(
    s2,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset]
  );
}
function parseRFC2822Date(s2) {
  return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s2) {
  return parse(
    s2,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII]
  );
}
function parseISODuration(s2) {
  return parse(s2, [isoDuration, extractISODuration]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s2) {
  return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
var extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
function parseSQL(s2) {
  return parse(
    s2,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
  );
}

// ../models/node_modules/luxon/src/duration.js
var INVALID = "Invalid Duration";
var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
};
var casualMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...lowOrderMatrix
};
var daysInYearAccurate = 146097 / 400;
var daysInMonthAccurate = 146097 / 4800;
var accurateMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
  },
  ...lowOrderMatrix
};
var orderedUnits = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
];
var reverseUnits = orderedUnits.slice(0).reverse();
function clone(dur, alts, clear = false) {
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...alts.values || {} },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}
function antiTrunc(n2) {
  return n2 < 0 ? Math.floor(n2) : Math.ceil(n2);
}
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}
var Duration = class _Duration {
  /**
   * @private
   */
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    this.values = config.values;
    this.loc = config.loc || Locale.create();
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    this.invalid = config.invalid || null;
    this.matrix = accurate ? accurateMatrix : casualMatrix;
    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(count, opts) {
    return _Duration.fromObject({ milliseconds: count }, opts);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError(
        `Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`
      );
    }
    return new _Duration({
      values: normalizeObject(obj, _Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return _Duration.fromMillis(durationLike);
    } else if (_Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return _Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError(
        `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
      );
    }
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(text, opts) {
    const [parsed] = parseISODuration(text);
    if (parsed) {
      return _Duration.fromObject(parsed, opts);
    } else {
      return _Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(text, opts) {
    const [parsed] = parseISOTimeOnly(text);
    if (parsed) {
      return _Duration.fromObject(parsed, opts);
    } else {
      return _Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new _Duration({ invalid });
    }
  }
  /**
   * @private
   */
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false
    };
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    if (!this.isValid) return {};
    return { ...this.values };
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid) return null;
    let s2 = "P";
    if (this.years !== 0) s2 += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s2 += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s2 += this.weeks + "W";
    if (this.days !== 0) s2 += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s2 += "T";
    if (this.hours !== 0) s2 += this.hours + "H";
    if (this.minutes !== 0) s2 += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
    if (s2 === "P") s2 += "T0S";
    return s2;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(opts = {}) {
    if (!this.isValid) return null;
    const millis = this.toMillis();
    if (millis < 0 || millis >= 864e5) return null;
    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended",
      ...opts
    };
    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }
    let str = value.toFormat(fmt);
    if (opts.includePrefix) {
      str = "T" + str;
    }
    return str;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = _Duration.fromDurationLike(duration), result = {};
    for (const k of orderedUnits) {
      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }
    return clone(this, { values: result }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = _Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(fn) {
    if (!this.isValid) return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = asNumber(fn(this.values[k], k));
    }
    return clone(this, { values: result }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(unit) {
    return this[_Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(values) {
    if (!this.isValid) return this;
    const mixed = { ...this.values, ...normalizeObject(values, _Duration.normalizeUnit) };
    return clone(this, { values: mixed });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale, numberingSystem, conversionAccuracy } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem }), opts = { loc };
    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }
    return clone(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, { values: vals }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...units) {
    if (!this.isValid) return this;
    if (units.length === 0) {
      return this;
    }
    units = units.map((u) => _Duration.normalizeUnit(u));
    const built = {}, accumulated = {}, vals = this.toObject();
    let lastUnit;
    for (const k of orderedUnits) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        let own = 0;
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }
        if (isNumber(vals[k])) {
          own += vals[k];
        }
        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i;
        for (const down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    }
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }
    return clone(this, { values: built }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = -this.values[k];
    }
    return clone(this, { values: negated }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    if (!this.loc.equals(other.loc)) {
      return false;
    }
    function eq(v1, v2) {
      if (v1 === void 0 || v1 === 0) return v2 === void 0 || v2 === 0;
      return v1 === v2;
    }
    for (const u of orderedUnits) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
};

// ../models/node_modules/luxon/src/interval.js
var INVALID2 = "Invalid Interval";
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid(
      "end before start",
      `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
    );
  } else {
    return null;
  }
}
var Interval = class _Interval {
  /**
   * @private
   */
  constructor(config) {
    this.s = config.start;
    this.e = config.end;
    this.invalid = config.invalid || null;
    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new _Interval({ invalid });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(start, end) {
    const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
    const validateError = validateStartEnd(builtStart, builtEnd);
    if (validateError == null) {
      return new _Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(start, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
    return _Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(end, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
    return _Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(text, opts) {
    const [s2, e] = (text || "").split("/", 2);
    if (s2 && e) {
      let start, startIsValid;
      try {
        start = DateTime.fromISO(s2, opts);
        startIsValid = start.isValid;
      } catch (e2) {
        startIsValid = false;
      }
      let end, endIsValid;
      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e2) {
        endIsValid = false;
      }
      if (startIsValid && endIsValid) {
        return _Interval.fromDateTimes(start, end);
      }
      if (startIsValid) {
        const dur = Duration.fromISO(e, opts);
        if (dur.isValid) {
          return _Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = Duration.fromISO(s2, opts);
        if (dur.isValid) {
          return _Interval.before(end, dur);
        }
      }
    }
    return _Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(unit = "milliseconds") {
    if (!this.isValid) return NaN;
    const start = this.start.startOf(unit), end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start, end } = {}) {
    if (!this.isValid) return this;
    return _Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...dateTimes) {
    if (!this.isValid) return [];
    const sorted = dateTimes.map(friendlyDateTime).filter((d) => this.contains(d)).sort(), results = [];
    let { s: s2 } = this, i = 0;
    while (s2 < this.e) {
      const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
      results.push(_Interval.fromDateTimes(s2, next));
      s2 = next;
      i += 1;
    }
    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(duration) {
    const dur = Duration.fromDurationLike(duration);
    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }
    let { s: s2 } = this, idx = 1, next;
    const results = [];
    while (s2 < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(_Interval.fromDateTimes(s2, next));
      s2 = next;
      idx += 1;
    }
    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(other) {
    if (!this.isValid) return this;
    const s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
    if (s2 >= e) {
      return null;
    } else {
      return _Interval.fromDateTimes(s2, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(other) {
    if (!this.isValid) return this;
    const s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
    return _Interval.fromDateTimes(s2, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(intervals) {
    const [found, final] = intervals.sort((a, b) => a.s - b.s).reduce(
      ([sofar, current], item) => {
        if (!current) {
          return [sofar, item];
        } else if (current.overlaps(item) || current.abutsStart(item)) {
          return [sofar, current.union(item)];
        } else {
          return [sofar.concat([current]), item];
        }
      },
      [[], null]
    );
    if (final) {
      found.push(final);
    }
    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(intervals) {
    let start = null, currentCount = 0;
    const results = [], ends = intervals.map((i) => [
      { time: i.s, type: "s" },
      { time: i.e, type: "e" }
    ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b) => a.time - b.time);
    for (const i of arr) {
      currentCount += i.type === "s" ? 1 : -1;
      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(_Interval.fromDateTimes(start, i.time));
        }
        start = null;
      }
    }
    return _Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...intervals) {
    return _Interval.xor([this].concat(intervals)).map((i) => this.intersection(i)).filter((i) => i && !i.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    if (!this.isValid) return INVALID2;
    return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(opts) {
    if (!this.isValid) return INVALID2;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    if (!this.isValid) return INVALID2;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(opts) {
    if (!this.isValid) return INVALID2;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  toFormat(dateFormat, { separator = " \u2013 " } = {}) {
    if (!this.isValid) return INVALID2;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(mapFn) {
    return _Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
};

// ../models/node_modules/luxon/src/info.js
var Info = class {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(zone = Settings.defaultZone) {
    const proto = DateTime.now().setZone(zone).set({ month: 12 });
    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale = null } = {}) {
    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(length = "short", { locale = null } = {}) {
    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return { relative: hasRelative() };
  }
};

// ../models/node_modules/luxon/src/impl/diff.js
function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a, b) => b.year - a.year],
    ["quarters", (a, b) => b.quarter - a.quarter],
    ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      "weeks",
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - days % 7) / 7;
      }
    ],
    ["days", dayDiff]
  ];
  const results = {};
  let lowestOrder, highWater;
  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;
      let delta = differ(cursor, later);
      highWater = cursor.plus({ [unit]: delta });
      if (highWater > later) {
        cursor = cursor.plus({ [unit]: delta - 1 });
        delta -= 1;
      } else {
        cursor = highWater;
      }
      results[unit] = delta;
    }
  }
  return [cursor, results, highWater, lowestOrder];
}
function diff_default(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
  const remainingMillis = later - cursor;
  const lowerOrderUnits = units.filter(
    (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
  );
  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }
    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }
  const duration = Duration.fromObject(results, opts);
  if (lowerOrderUnits.length > 0) {
    return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

// ../models/node_modules/luxon/src/impl/digits.js
var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}

// ../models/node_modules/luxon/src/impl/tokenParser.js
var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s2]) => post(parseDigits(s2)) };
}
var NBSP = String.fromCharCode(160);
var spaceOrNBSP = `( |${NBSP})`;
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s2) {
  return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s2) {
  return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
}
function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s2]) => strings.findIndex((i) => stripInsensitivities(s2) === stripInsensitivities(i)) + startIndex
    };
  }
}
function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => signedOffset(h, m), groups };
}
function simple(regex) {
  return { regex, deser: ([s2]) => s2 };
}
function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
  const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s2]) => s2, literal: true }), unitate = (t) => {
    if (token.literal) {
      return literal(t);
    }
    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);
      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years
      case "y":
        return intUnit(oneToSix);
      case "yy":
        return intUnit(twoToFour, untruncateYear);
      case "yyyy":
        return intUnit(four);
      case "yyyyy":
        return intUnit(fourToSix);
      case "yyyyyy":
        return intUnit(six);
      // months
      case "M":
        return intUnit(oneOrTwo);
      case "MM":
        return intUnit(two);
      case "MMM":
        return oneOf(loc.months("short", true, false), 1);
      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);
      case "L":
        return intUnit(oneOrTwo);
      case "LL":
        return intUnit(two);
      case "LLL":
        return oneOf(loc.months("short", false, false), 1);
      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates
      case "d":
        return intUnit(oneOrTwo);
      case "dd":
        return intUnit(two);
      // ordinals
      case "o":
        return intUnit(oneToThree);
      case "ooo":
        return intUnit(three);
      // time
      case "HH":
        return intUnit(two);
      case "H":
        return intUnit(oneOrTwo);
      case "hh":
        return intUnit(two);
      case "h":
        return intUnit(oneOrTwo);
      case "mm":
        return intUnit(two);
      case "m":
        return intUnit(oneOrTwo);
      case "q":
        return intUnit(oneOrTwo);
      case "qq":
        return intUnit(two);
      case "s":
        return intUnit(oneOrTwo);
      case "ss":
        return intUnit(two);
      case "S":
        return intUnit(oneToThree);
      case "SSS":
        return intUnit(three);
      case "u":
        return simple(oneToNine);
      case "uu":
        return simple(oneOrTwo);
      case "uuu":
        return intUnit(one);
      // meridiem
      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return intUnit(four);
      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)
      case "W":
        return intUnit(oneOrTwo);
      case "WW":
        return intUnit(two);
      // weekdays
      case "E":
      case "c":
        return intUnit(one);
      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);
      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);
      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);
      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
      case "ZZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);
      default:
        return literal(t);
    }
  };
  const unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}
var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
function tokenForPart(part, locale, formatOpts) {
  const { type, value } = part;
  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }
  const style = formatOpts[type];
  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }
  if (val) {
    return {
      literal: false,
      val
    };
  }
  return void 0;
}
function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}
function match(input, regex, handlers) {
  const matches = input.match(regex);
  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}
function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let zone;
  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }
  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }
  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }
  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }
  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }
  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }
    return r;
  }, {});
  return [vals, zone];
}
var dummyDateTimeCache = null;
function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }
  return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }
  const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
  if (!formatOpts) {
    return token;
  }
  const formatter = Formatter.create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  const tokens = parts.map((p) => tokenForPart(p, locale, formatOpts));
  if (tokens.includes(void 0)) {
    return token;
  }
  return tokens;
}
function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}
function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map((t) => unitForToken(t, locale)), disqualifyingUnit = units.find((t) => t.invalidReason);
  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units), regex = RegExp(regexString, "i"), [rawMatches, matches] = match(input, regex, handlers), [result, zone] = matches ? dateTimeFromMatches(matches) : [null, null];
    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError(
        "Can't include meridiem when specifying 24-hour format"
      );
    }
    return { input, tokens, regex, rawMatches, matches, result, zone };
  }
}
function parseFromTokens(locale, input, format) {
  const { result, zone, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, invalidReason];
}

// ../models/node_modules/luxon/src/impl/conversions.js
var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function unitOutOfRange(unit, value) {
  return new Invalid(
    "unit out of range",
    `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
  );
}
function dayOfWeek(year, month, day) {
  const js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i) => i < ordinal), day = ordinal - table[month0];
  return { month: month0 + 1, day };
}
function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
  let weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }
  return { weekYear, weekNumber, weekday, ...timeObject(gregObj) };
}
function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...timeObject(weekData) };
}
function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...timeObject(gregData) };
}
function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...timeObject(ordinalData) };
}
function hasInvalidWeekData(obj) {
  const validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

// ../models/node_modules/luxon/src/datetime.js
var INVALID3 = "Invalid DateTime";
var MAX_DATE = 864e13;
function unsupportedZone(zone) {
  return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
}
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}
function clone2(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime({ ...current, ...alts, old: current });
}
function fixOffset(localTS, o, tz) {
  let utcGuess = localTS - o * 60 * 1e3;
  const o2 = tz.offset(utcGuess);
  if (o === o2) {
    return [utcGuess, o];
  }
  utcGuess -= (o2 - o) * 60 * 1e3;
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }
  return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
}
function tsToObj(ts, offset2) {
  ts += offset2 * 60 * 1e3;
  const d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
}
function objToTS(obj, offset2, zone) {
  return fixOffset(objToLocalTS(obj), offset2, zone);
}
function adjustTime(inst, dur) {
  const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = {
    ...inst.c,
    year,
    month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }, millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"), localTS = objToLocalTS(c);
  let [ts, o] = fixOffset(localTS, oPre, inst.zone);
  if (millisToAdd !== 0) {
    ts += millisToAdd;
    o = inst.zone.offset(ts);
  }
  return { ts, o };
}
function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, {
      ...opts,
      zone: interpretationZone
    });
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(
      new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`)
    );
  }
}
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
}
function toTechTimeFormat(dt, {
  suppressSeconds = false,
  suppressMilliseconds = false,
  includeOffset,
  includePrefix = false,
  includeZone = false,
  spaceZone = false,
  format = "extended"
}) {
  let fmt = format === "basic" ? "HHmm" : "HH:mm";
  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";
    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }
  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }
  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }
  let str = toTechFormat(dt, fmt);
  if (includePrefix) {
    str = "T" + str;
  }
  return str;
}
var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var orderedUnits2 = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
var orderedWeekUnits = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
];
var orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
}
function quickDT(obj, opts) {
  const zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
  let ts, o;
  if (!isUndefined(obj.year)) {
    for (const u of orderedUnits2) {
      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }
    const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }
  return new DateTime({ ts, zone, loc, o });
}
function diffRelative(start, end, opts) {
  const round = isUndefined(opts.round) ? true : opts.round, format = (c, unit) => {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    const formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  }, differ = (unit) => {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };
  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }
  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
  let opts = {}, args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}
var DateTime = class _DateTime {
  /**
   * @access private
   */
  constructor(config) {
    const zone = config.zone || Settings.defaultZone;
    let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    let c = null, o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    this._zone = zone;
    this.loc = config.loc || Locale.create();
    this.invalid = invalid;
    this.weekData = null;
    this.c = c;
    this.o = o;
    this.isLuxonDateTime = true;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new _DateTime({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(date, options = {}) {
    const ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return _DateTime.invalid("invalid input");
    }
    const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return _DateTime.invalid(unsupportedZone(zoneToUse));
    }
    return new _DateTime({
      ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(milliseconds, options = {}) {
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(
        `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      return _DateTime.invalid("Timestamp out of range");
    } else {
      return new _DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(seconds, options = {}) {
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new _DateTime({
        ts: seconds * 1e3,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return _DateTime.invalid(unsupportedZone(zoneToUse));
    }
    const tsNow = Settings.now(), offsetProvis = zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
    let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits2;
      defaultValues = defaultUnitValues;
    }
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }
    const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
    if (invalid) {
      return _DateTime.invalid(invalid);
    }
    const gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new _DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc
    });
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return _DateTime.invalid(
        "mismatched weekday",
        `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
      );
    }
    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = parseISODate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = parseRFC2822Date(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = parseHTTPDate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(text, fmt, opts = {}) {
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }
    const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    }), [vals, parsedZone, invalid] = parseFromTokens(localeToUse, text, fmt);
    if (invalid) {
      return _DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(text, fmt, opts = {}) {
    return _DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = parseSQL(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new _DateTime({ invalid });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
    }
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return isLeapYear(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return daysInMonth(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? daysInYear(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = Formatter.create(
      this.loc.clone(opts),
      opts
    ).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(offset2 = 0, opts = {}) {
    return this.setZone(FixedOffsetZone.instance(offset2), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return _DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone2(this, { ts: newTS, zone });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone2(this, { loc });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(locale) {
    return this.reconfigure({ locale });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(values) {
    if (!this.isValid) return this;
    const normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    let mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian({ ...gregorianToWeek(this.c), ...normalized });
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian({ ...gregorianToOrdinal(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }
    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone2(this, { ts, o });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = Duration.fromDurationLike(duration);
    return clone2(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = Duration.fromDurationLike(duration).negate();
    return clone2(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(unit) {
    if (!this.isValid) return this;
    const o = {}, normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through
      case "quarters":
      case "months":
        o.day = 1;
      // falls through
      case "weeks":
      case "days":
        o.hour = 0;
      // falls through
      case "hours":
        o.minute = 0;
      // falls through
      case "minutes":
        o.second = 0;
      // falls through
      case "seconds":
        o.millisecond = 0;
        break;
      case "milliseconds":
        break;
    }
    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }
    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }
    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(unit) {
    return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID3;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID3;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO(opts = {}) {
    if (!this.isValid) {
      return null;
    }
    return `${this.toISODate(opts)}T${this.toISOTime(opts)}`;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format = "extended" } = {}) {
    let fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
    if (this.year > 9999) {
      fmt = "+" + fmt;
    }
    return toTechFormat(this, fmt);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    format = "extended"
  } = {}) {
    return toTechTimeFormat(this, {
      suppressSeconds,
      suppressMilliseconds,
      includeOffset,
      includePrefix,
      format
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset = true, includeZone = false } = {}) {
    return toTechTimeFormat(this, {
      includeOffset,
      includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }
    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : INVALID3;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(opts = {}) {
    if (!this.isValid) return {};
    const base = { ...this.c };
    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }
    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };
    const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff_default(earlier, later, units, durOpts);
    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(_DateTime.now(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;
    const inputMs = otherDateTime.valueOf();
    const otherZoneDateTime = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return otherZoneDateTime.startOf(unit) <= inputMs && inputMs <= otherZoneDateTime.endOf(unit);
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(options = {}) {
    if (!this.isValid) return null;
    const base = options.base || _DateTime.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = void 0;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: "always",
      units,
      unit
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(options = {}) {
    if (!this.isValid) return null;
    return diffRelative(options.base || _DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    });
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...dateTimes) {
    if (!dateTimes.every(_DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...dateTimes) {
    if (!dateTimes.every(_DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(text, fmt, options = {}) {
    return _DateTime.fromFormatExplain(text, fmt, options);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return DATE_SHORT;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return DATE_MED;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return DATE_MED_WITH_WEEKDAY;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return DATE_FULL;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return DATE_HUGE;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return TIME_SIMPLE;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return TIME_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return TIME_WITH_SHORT_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return TIME_WITH_LONG_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return TIME_24_SIMPLE;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return TIME_24_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return TIME_24_WITH_SHORT_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return TIME_24_WITH_LONG_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return DATETIME_SHORT;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return DATETIME_SHORT_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return DATETIME_MED;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return DATETIME_MED_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return DATETIME_MED_WITH_WEEKDAY;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return DATETIME_FULL;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return DATETIME_FULL_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return DATETIME_HUGE;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return DATETIME_HUGE_WITH_SECONDS;
  }
};
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError(
      `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
    );
  }
}

// ../models/src/Date.ts
import { Definitions as Definitions2, Values as Values2 } from "@pitaman71/omniglot-live-data";
var directory2 = new Definitions2.Directory();
var makePath2 = (path) => `omniglot-live-logistics.Date.${path}`;
var _Domain = class extends Values2.AggregateDomain {
  constructor(path) {
    super(path, {
      year: new Values2.RangeDomain(makePath2("Domain.year"), 0, void 0, 1),
      month: new Values2.RangeDomain(makePath2("Domain.month"), 1, 12, 1),
      day: new Values2.RangeDomain(makePath2("Domain.day"), 1, 31, 0)
    }, ["year", "month", "day"]);
  }
  asString(format) {
    const domain = this;
    return {
      from(text, options) {
        const luxon = DateTime.fromISO(text);
        if (!luxon.isValid) {
          if (options?.onError) options.onError(luxon.invalidReason);
          return null;
        } else {
          return {
            year: luxon.year,
            month: luxon.month,
            day: luxon.day
          };
        }
      },
      to(value) {
        return domain.asLuxon().to(value)?.toISODate() || "";
      }
    };
  }
  asLuxon() {
    return {
      from(luxon) {
        return {
          year: luxon.year,
          month: luxon.month,
          day: luxon.day
        };
      },
      to(value) {
        return DateTime.fromObject({ year: value.year, month: value.month, day: value.day });
      }
    };
  }
  asJSDate() {
    const domain = this;
    return {
      from(date) {
        return domain.asLuxon().from(DateTime.fromJSDate(date));
      },
      to(value) {
        return domain.asLuxon().to(value)?.toJSDate();
      }
    };
  }
  fromBlank() {
    return {};
  }
};
var Domain2 = new _Domain(makePath2("Domain"));
directory2.add(Domain2);

// ../models/src/DateRange.ts
import { Definitions as Definitions3, Values as Values3 } from "@pitaman71/omniglot-live-data";
var directory3 = new Definitions3.Directory();
var makePath3 = (path) => `omniglot-live-logistics.DateRange.${path}`;
var Domain3 = new Values3.AggregateDomain(makePath3("Domain"), {
  from: Domain2,
  to: Domain2
});
directory3.add(Domain3);

// ../models/src/DateTime.ts
var DateTime_exports = {};
__export(DateTime_exports, {
  Domain: () => Domain7,
  directory: () => directory7
});
import { Definitions as Definitions7, Values as Values7 } from "@pitaman71/omniglot-live-data";

// ../models/src/Time.ts
import { Definitions as Definitions6, Values as Values6 } from "@pitaman71/omniglot-live-data";

// ../models/src/Meridian.ts
import { Definitions as Definitions4, Values as Values4 } from "@pitaman71/omniglot-live-data";
var directory4 = new Definitions4.Directory();
var makePath4 = (path) => `omniglot-live-logistics.Meridian.${path}`;
var Domain4 = new Values4.EnumerationDomain(makePath4("Domain"), "am", "pm");
directory4.add(Domain4);

// ../models/node_modules/tzdata/timezone-data.json
var zones = { "Africa/Algiers": [["-12.2", "-", "LMT", "-2486592000000"], ["-9.35", "-", "PMT", "-1855958400000"], ["0", "Algeria", "WE%sT", "-942012000000"], ["-60", "Algeria", "CE%sT", "-733276800000"], ["0", "-", "WET", "-439430400000"], ["-60", "-", "CET", "-212025600000"], ["0", "Algeria", "WE%sT", "246240000000"], ["-60", "Algeria", "CE%sT", "309744000000"], ["0", "Algeria", "WE%sT", "357523200000"], ["-60", "-", "CET", null]], "Atlantic/Cape_Verde": [["94.06666666666668", "-", "LMT", "-1830376800000"], ["120", "-", "%z", "-862617600000"], ["120", "1:00", "%z", "-764121600000"], ["120", "-", "%z", "186112800000"], ["60", "-", "%z", null]], "Africa/Ndjamena": [["-60.2", "-", "LMT", "-1830384000000"], ["-60", "-", "WAT", "308707200000"], ["-60", "1:00", "WAST", "321321600000"], ["-60", "-", "WAT", null]], "Africa/Abidjan": [["16.133333333333333", "-", "LMT", "-1830384000000"], ["0", "-", "GMT", null]], "Africa/Cairo": [["-125.15", "-", "LMT", "-2185401600000"], ["-120", "Egypt", "EE%sT", null]], "Africa/Bissau": [["62.333333333333336", "-", "LMT", "-1830380400000"], ["60", "-", "%z", "189216000000"], ["0", "-", "GMT", null]], "Africa/Nairobi": [["-147.26666666666665", "-", "LMT", "-1946160000000"], ["-150", "-", "%z", "-1309737600000"], ["-180", "-", "EAT", "-1261958400000"], ["-150", "-", "%z", "-1041379200000"], ["-165", "-", "%z", "-865296000000"], ["-180", "-", "EAT", null]], "Africa/Monrovia": [["43.13333333333333", "-", "LMT", "-2745532800000"], ["43.13333333333333", "-", "MMT", "-1604361600000"], ["44.5", "-", "MMT", "63590400000"], ["0", "-", "GMT", null]], "Africa/Tripoli": [["-52.733333333333334", "-", "LMT", "-1546387200000"], ["-60", "Libya", "CE%sT", "-315705600000"], ["-120", "-", "EET", "410140800000"], ["-60", "Libya", "CE%sT", "641779200000"], ["-120", "-", "EET", "844041600000"], ["-60", "Libya", "CE%sT", "875923200000"], ["-120", "-", "EET", "1352512800000"], ["-60", "Libya", "CE%sT", "1382666400000"], ["-120", "-", "EET", null]], "Indian/Mauritius": [["-230", "-", "LMT", "-1956700800000"], ["-240", "Mauritius", "%z", null]], "Africa/Casablanca": [["30.333333333333332", "-", "LMT", "-1773014400000"], ["0", "Morocco", "%z", "448243200000"], ["-60", "-", "%z", "536371200000"], ["0", "Morocco", "%z", "1540695600000"], ["-60", "Morocco", "%z", null]], "Africa/El_Aaiun": [["52.8", "-", "LMT", "-1136073600000"], ["60", "-", "%z", "198288000000"], ["0", "Morocco", "%z", "1540695600000"], ["-60", "Morocco", "%z", null]], "Africa/Maputo": [["-130.3", "-", "LMT", "-1893542400000"], ["-120", "-", "CAT", null]], "Africa/Windhoek": [["-68.4", "-", "LMT", "-2458166400000"], ["-90", "-", "%z", "-2109283200000"], ["-120", "-", "SAST", "-860968800000"], ["-120", "1:00", "SAST", "-845244000000"], ["-120", "-", "SAST", "637977600000"], ["-120", "Namibia", "%s", null]], "Africa/Lagos": [["-13.583333333333334", "-", "LMT", "-2035584000000"], ["0", "-", "GMT", "-1940889600000"], ["-13.583333333333334", "-", "LMT", "-1767225600000"], ["-30", "-", "%z", "-1588464000000"], ["-60", "-", "WAT", null]], "Africa/Sao_Tome": [["-26.933333333333334", "-", "LMT", "-2682374400000"], ["36.75", "-", "LMT", "-1830384000000"], ["0", "-", "GMT", "1514768400000"], ["-60", "-", "WAT", "1546308000000"], ["0", "-", "GMT", null]], "Africa/Johannesburg": [["-112", "-", "LMT", "-2458166400000"], ["-90", "-", "SAST", "-2109283200000"], ["-120", "SA", "SAST", null]], "Africa/Khartoum": [["-130.13333333333333", "-", "LMT", "-1199318400000"], ["-120", "Sudan", "CA%sT", "947937600000"], ["-180", "-", "EAT", "1509494400000"], ["-120", "-", "CAT", null]], "Africa/Juba": [["-126.46666666666667", "-", "LMT", "-1199318400000"], ["-120", "Sudan", "CA%sT", "947937600000"], ["-180", "-", "EAT", "1612137600000"], ["-120", "-", "CAT", null]], "Africa/Tunis": [["-40.733333333333334", "-", "LMT", "-2797200000000"], ["-9.35", "-", "PMT", "-1855958400000"], ["-60", "Tunisia", "CE%sT", null]], "Antarctica/Casey": [["0", "-", "-00", "-86400000"], ["-480", "-", "%z", "1255831200000"], ["-660", "-", "%z", "1267754400000"], ["-480", "-", "%z", "1319767200000"], ["-660", "-", "%z", "1329843600000"], ["-480", "-", "%z", "1477094400000"], ["-660", "-", "%z", "1520740800000"], ["-480", "-", "%z", "1538884800000"], ["-660", "-", "%z", "1552791600000"], ["-480", "-", "%z", "1570158000000"], ["-660", "-", "%z", "1583636400000"], ["-480", "-", "%z", "1601769660000"], ["-660", "-", "%z", "1615680000000"], ["-480", "-", "%z", "1633219260000"], ["-660", "-", "%z", "1647129600000"], ["-480", "-", "%z", "1664668860000"], ["-660", "-", "%z", "1678330800000"], ["-480", "-", "%z", null]], "Antarctica/Davis": [["0", "-", "-00", "-409190400000"], ["-420", "-", "%z", "-163036800000"], ["0", "-", "-00", "-28857600000"], ["-420", "-", "%z", "1255831200000"], ["-300", "-", "%z", "1268251200000"], ["-420", "-", "%z", "1319767200000"], ["-300", "-", "%z", "1329854400000"], ["-420", "-", "%z", null]], "Antarctica/Mawson": [["0", "-", "-00", "-501206400000"], ["-360", "-", "%z", "1255831200000"], ["-300", "-", "%z", null]], "Antarctica/Troll": [["0", "-", "-00", "1108166400000"], ["0", "Troll", "%s", null]], "Antarctica/Vostok": [["0", "-", "-00", "-380073600000"], ["-420", "-", "%z", "760060800000"], ["0", "-", "-00", "783648000000"], ["-420", "-", "%z", "1702864800000"], ["-300", "-", "%z", null]], "Antarctica/Rothera": [["0", "-", "-00", "218246400000"], ["180", "-", "%z", null]], "Asia/Kabul": [["-276.8", "-", "LMT", "-2493072000000"], ["-240", "-", "%z", "-757468800000"], ["-270", "-", "%z", null]], "Asia/Yerevan": [["-178", "-", "LMT", "-1441152000000"], ["-180", "-", "%z", "-405129600000"], ["-240", "RussiaAsia", "%z", "670384800000"], ["-180", "RussiaAsia", "%z", "811908000000"], ["-240", "-", "%z", "883526400000"], ["-240", "RussiaAsia", "%z", "1325289600000"], ["-240", "Armenia", "%z", null]], "Asia/Baku": [["-199.4", "-", "LMT", "-1441152000000"], ["-180", "-", "%z", "-405129600000"], ["-240", "RussiaAsia", "%z", "670384800000"], ["-180", "RussiaAsia", "%z", "715312800000"], ["-240", "-", "%z", "851990400000"], ["-240", "EUAsia", "%z", "883526400000"], ["-240", "Azer", "%z", null]], "Asia/Dhaka": [["-361.6666666666667", "-", "LMT", "-2493072000000"], ["-353.3333333333333", "-", "HMT", "-891561600000"], ["-390", "-", "%z", "-872035200000"], ["-330", "-", "%z", "-862617600000"], ["-390", "-", "%z", "-576115200000"], ["-360", "-", "%z", "1262217600000"], ["-360", "Dhaka", "%z", null]], "Asia/Thimphu": [["-358.6", "-", "LMT", "-706320000000"], ["-330", "-", "%z", "560044800000"], ["-360", "-", "%z", null]], "Indian/Chagos": [["-289.6666666666667", "-", "LMT", "-1956700800000"], ["-300", "-", "%z", "851990400000"], ["-360", "-", "%z", null]], "Asia/Yangon": [["-384.7833333333333", "-", "LMT", "-2808604800000"], ["-384.7833333333333", "-", "RMT", "-1546387200000"], ["-390", "-", "%z", "-873244800000"], ["-540", "-", "%z", "-778377600000"], ["-390", "-", "%z", null]], "Asia/Shanghai": [["-485.7166666666667", "-", "LMT", "-2146003200000"], ["-480", "Shang", "C%sT", "-649987200000"], ["-480", "PRC", "C%sT", null]], "Asia/Urumqi": [["-350.3333333333333", "-", "LMT", "-1293926400000"], ["-360", "-", "%z", null]], "Asia/Hong_Kong": [["-456.7", "-", "LMT", "-2056690800000"], ["-480", "-", "HKT", "-900882000000"], ["-480", "1:00", "HKST", "-891547200000"], ["-480", "0:30", "HKWT", "-884217600000"], ["-540", "-", "JST", "-761176800000"], ["-480", "HK", "HK%sT", null]], "Asia/Taipei": [["-486", "-", "LMT", "-2335219200000"], ["-480", "-", "CST", "-1017792000000"], ["-540", "-", "JST", "-766191600000"], ["-480", "Taiwan", "C%sT", null]], "Asia/Macau": [["-454.1666666666667", "-", "LMT", "-2056665600000"], ["-480", "-", "CST", "-884480400000"], ["-540", "Macau", "%z", "-765331200000"], ["-480", "Macau", "C%sT", null]], "Asia/Nicosia": [["-133.46666666666667", "-", "LMT", "-1518912000000"], ["-120", "Cyprus", "EE%sT", "904608000000"], ["-120", "EUAsia", "EE%sT", null]], "Asia/Famagusta": [["-135.8", "-", "LMT", "-1518912000000"], ["-120", "Cyprus", "EE%sT", "904608000000"], ["-120", "EUAsia", "EE%sT", "1473292800000"], ["-180", "-", "%z", "1509238800000"], ["-120", "EUAsia", "EE%sT", null]], "Asia/Tbilisi": [["-179.18333333333334", "-", "LMT", "-2808604800000"], ["-179.18333333333334", "-", "TBMT", "-1441152000000"], ["-180", "-", "%z", "-405129600000"], ["-240", "RussiaAsia", "%z", "670384800000"], ["-180", "RussiaAsia", "%z", "725760000000"], ["-180", "E-EurAsia", "%z", "778377600000"], ["-240", "E-EurAsia", "%z", "844128000000"], ["-240", "1:00", "%z", "857174400000"], ["-240", "E-EurAsia", "%z", "1088294400000"], ["-180", "RussiaAsia", "%z", "1109642400000"], ["-240", "-", "%z", null]], "Asia/Dili": [["-502.3333333333333", "-", "LMT", "-1830412800000"], ["-480", "-", "%z", "-879123600000"], ["-540", "-", "%z", "199929600000"], ["-480", "-", "%z", "969148800000"], ["-540", "-", "%z", null]], "Asia/Kolkata": [["-353.4666666666667", "-", "LMT", "-3645216000000"], ["-353.3333333333333", "-", "HMT", "-3124224000000"], ["-321.1666666666667", "-", "MMT", "-2019686400000"], ["-330", "-", "IST", "-891561600000"], ["-330", "1:00", "%z", "-872035200000"], ["-330", "-", "IST", "-862617600000"], ["-330", "1:00", "%z", "-764121600000"], ["-330", "-", "IST", null]], "Asia/Jakarta": [["-427.2", "-", "LMT", "-3231273600000"], ["-427.2", "-", "BMT", "-1451719200000"], ["-440", "-", "%z", "-1172880000000"], ["-450", "-", "%z", "-876614400000"], ["-540", "-", "%z", "-766022400000"], ["-450", "-", "%z", "-683856000000"], ["-480", "-", "%z", "-620784000000"], ["-450", "-", "%z", "-157852800000"], ["-420", "-", "WIB", null]], "Asia/Pontianak": [["-437.3333333333333", "-", "LMT", "-1946160000000"], ["-437.3333333333333", "-", "PMT", "-1172880000000"], ["-450", "-", "%z", "-881193600000"], ["-540", "-", "%z", "-766022400000"], ["-450", "-", "%z", "-683856000000"], ["-480", "-", "%z", "-620784000000"], ["-450", "-", "%z", "-157852800000"], ["-480", "-", "WITA", "567993600000"], ["-420", "-", "WIB", null]], "Asia/Makassar": [["-477.6", "-", "LMT", "-1546387200000"], ["-477.6", "-", "MMT", "-1172880000000"], ["-480", "-", "%z", "-880243200000"], ["-540", "-", "%z", "-766022400000"], ["-480", "-", "WITA", null]], "Asia/Jayapura": [["-562.8", "-", "LMT", "-1172880000000"], ["-540", "-", "%z", "-799459200000"], ["-570", "-", "%z", "-157852800000"], ["-540", "-", "WIT", null]], "Asia/Tehran": [["-205.73333333333335", "-", "LMT", "-1672617600000"], ["-205.73333333333335", "-", "TMT", "-1090454400000"], ["-210", "Iran", "%z", "246240000000"], ["-240", "Iran", "%z", "315446400000"], ["-210", "Iran", "%z", null]], "Asia/Baghdad": [["-177.66666666666666", "-", "LMT", "-2493072000000"], ["-177.6", "-", "BMT", "-1609545600000"], ["-180", "-", "%z", "389059200000"], ["-180", "Iraq", "%z", null]], "Asia/Jerusalem": [["-140.9", "-", "LMT", "-2808604800000"], ["-140.66666666666666", "-", "JMT", "-1609545600000"], ["-120", "Zion", "I%sT", null]], "Asia/Tokyo": [["-558.9833333333333", "-", "LMT", "-2587712400000"], ["-540", "Japan", "J%sT", null]], "Asia/Amman": [["-143.73333333333335", "-", "LMT", "-1199318400000"], ["-120", "Jordan", "EE%sT", "1666915200000"], ["-180", "-", "%z", null]], "Asia/Almaty": [["-307.8", "-", "LMT", "-1441152000000"], ["-300", "-", "%z", "-1247529600000"], ["-360", "RussiaAsia", "%z", "670384800000"], ["-300", "RussiaAsia", "%z", "695786400000"], ["-360", "RussiaAsia", "%z", "1099188000000"], ["-360", "-", "%z", "1709251200000"], ["-300", "-", "%z", null]], "Asia/Qyzylorda": [["-261.8666666666667", "-", "LMT", "-1441152000000"], ["-240", "-", "%z", "-1247529600000"], ["-300", "-", "%z", "354931200000"], ["-300", "1:00", "%z", "370742400000"], ["-360", "-", "%z", "386467200000"], ["-300", "RussiaAsia", "%z", "670384800000"], ["-240", "RussiaAsia", "%z", "686109600000"], ["-300", "RussiaAsia", "%z", "695786400000"], ["-360", "RussiaAsia", "%z", "701834400000"], ["-300", "RussiaAsia", "%z", "1099188000000"], ["-360", "-", "%z", "1545350400000"], ["-300", "-", "%z", null]], "Asia/Qostanay": [["-254.46666666666667", "-", "LMT", "-1441152000000"], ["-240", "-", "%z", "-1247529600000"], ["-300", "-", "%z", "354931200000"], ["-300", "1:00", "%z", "370742400000"], ["-360", "-", "%z", "386467200000"], ["-300", "RussiaAsia", "%z", "670384800000"], ["-240", "RussiaAsia", "%z", "695786400000"], ["-300", "RussiaAsia", "%z", "1099188000000"], ["-360", "-", "%z", "1709251200000"], ["-300", "-", "%z", null]], "Asia/Aqtobe": [["-228.66666666666666", "-", "LMT", "-1441152000000"], ["-240", "-", "%z", "-1247529600000"], ["-300", "-", "%z", "354931200000"], ["-300", "1:00", "%z", "370742400000"], ["-360", "-", "%z", "386467200000"], ["-300", "RussiaAsia", "%z", "670384800000"], ["-240", "RussiaAsia", "%z", "695786400000"], ["-300", "RussiaAsia", "%z", "1099188000000"], ["-300", "-", "%z", null]], "Asia/Aqtau": [["-201.06666666666666", "-", "LMT", "-1441152000000"], ["-240", "-", "%z", "-1247529600000"], ["-300", "-", "%z", "370742400000"], ["-360", "-", "%z", "386467200000"], ["-300", "RussiaAsia", "%z", "670384800000"], ["-240", "RussiaAsia", "%z", "695786400000"], ["-300", "RussiaAsia", "%z", "780458400000"], ["-240", "RussiaAsia", "%z", "1099188000000"], ["-300", "-", "%z", null]], "Asia/Atyrau": [["-207.73333333333335", "-", "LMT", "-1441152000000"], ["-180", "-", "%z", "-1247529600000"], ["-300", "-", "%z", "370742400000"], ["-360", "-", "%z", "386467200000"], ["-300", "RussiaAsia", "%z", "670384800000"], ["-240", "RussiaAsia", "%z", "695786400000"], ["-300", "RussiaAsia", "%z", "922586400000"], ["-240", "RussiaAsia", "%z", "1099188000000"], ["-300", "-", "%z", null]], "Asia/Oral": [["-205.4", "-", "LMT", "-1441152000000"], ["-180", "-", "%z", "-1247529600000"], ["-300", "-", "%z", "354931200000"], ["-300", "1:00", "%z", "370742400000"], ["-360", "-", "%z", "386467200000"], ["-300", "RussiaAsia", "%z", "606880800000"], ["-240", "RussiaAsia", "%z", "695786400000"], ["-300", "RussiaAsia", "%z", "701834400000"], ["-240", "RussiaAsia", "%z", "1099188000000"], ["-300", "-", "%z", null]], "Asia/Bishkek": [["-298.4", "-", "LMT", "-1441152000000"], ["-300", "-", "%z", "-1247529600000"], ["-360", "RussiaAsia", "%z", "670384800000"], ["-300", "RussiaAsia", "%z", "683604000000"], ["-300", "Kyrgyz", "%z", "1123804800000"], ["-360", "-", "%z", null]], "Asia/Seoul": [["-507.8666666666667", "-", "LMT", "-1948752000000"], ["-510", "-", "KST", "-1830384000000"], ["-540", "-", "JST", "-767318400000"], ["-540", "ROK", "K%sT", "-498096000000"], ["-510", "ROK", "K%sT", "-264902400000"], ["-540", "ROK", "K%sT", null]], "Asia/Pyongyang": [["-503", "-", "LMT", "-1948752000000"], ["-510", "-", "KST", "-1830384000000"], ["-540", "-", "JST", "-768614400000"], ["-540", "-", "KST", "1439596800000"], ["-510", "-", "KST", "1525476600000"], ["-540", "-", "KST", null]], "Asia/Beirut": [["-142", "-", "LMT", "-2808604800000"], ["-120", "Lebanon", "EE%sT", null]], "Asia/Kuching": [["-441.3333333333333", "-", "LMT", "-1383436800000"], ["-450", "-", "%z", "-1136160000000"], ["-480", "NBorneo", "%z", "-879638400000"], ["-540", "-", "%z", "-766972800000"], ["-480", "-", "%z", null]], "Indian/Maldives": [["-294", "-", "LMT", "-2808604800000"], ["-294", "-", "MMT", "-284083200000"], ["-300", "-", "%z", null]], "Asia/Hovd": [["-366.6", "-", "LMT", "-2032905600000"], ["-360", "-", "%z", "283910400000"], ["-420", "Mongol", "%z", null]], "Asia/Ulaanbaatar": [["-427.5333333333333", "-", "LMT", "-2032905600000"], ["-420", "-", "%z", "283910400000"], ["-480", "Mongol", "%z", null]], "Asia/Kathmandu": [["-341.2666666666667", "-", "LMT", "-1546387200000"], ["-330", "-", "%z", "536371200000"], ["-345", "-", "%z", null]], "Asia/Karachi": [["-268.2", "-", "LMT", "-1956700800000"], ["-330", "-", "%z", "-862617600000"], ["-330", "1:00", "%z", "-764121600000"], ["-330", "-", "%z", "-576115200000"], ["-300", "-", "%z", "38793600000"], ["-300", "Pakistan", "PK%sT", null]], "Asia/Gaza": [["-137.86666666666665", "-", "LMT", "-2185401600000"], ["-120", "Zion", "EET/EEST", "-682646400000"], ["-120", "EgyptAsia", "EE%sT", "-81302400000"], ["-120", "Zion", "I%sT", "851990400000"], ["-120", "Jordan", "EE%sT", "946598400000"], ["-120", "Palestine", "EE%sT", "1219968000000"], ["-120", "-", "EET", "1220227200000"], ["-120", "Palestine", "EE%sT", "1293753600000"], ["-120", "-", "EET", "1269648060000"], ["-120", "Palestine", "EE%sT", "1312156800000"], ["-120", "-", "EET", "1356912000000"], ["-120", "Palestine", "EE%sT", null]], "Asia/Hebron": [["-140.38333333333335", "-", "LMT", "-2185401600000"], ["-120", "Zion", "EET/EEST", "-682646400000"], ["-120", "EgyptAsia", "EE%sT", "-81302400000"], ["-120", "Zion", "I%sT", "851990400000"], ["-120", "Jordan", "EE%sT", "946598400000"], ["-120", "Palestine", "EE%sT", null]], "Asia/Manila": [["956.1333333333333", "-", "LMT", "-3944678400000"], ["-483.8666666666667", "-", "LMT", "-2219083200000"], ["-480", "Phil", "P%sT", "-879984000000"], ["-540", "-", "JST", "-783561600000"], ["-480", "Phil", "P%sT", null]], "Asia/Qatar": [["-206.13333333333335", "-", "LMT", "-1546387200000"], ["-240", "-", "%z", "76204800000"], ["-180", "-", "%z", null]], "Asia/Riyadh": [["-186.86666666666665", "-", "LMT", "-719625600000"], ["-180", "-", "%z", null]], "Asia/Singapore": [["-415.4166666666667", "-", "LMT", "-2177452800000"], ["-415.4166666666667", "-", "SMT", "-2038176000000"], ["-420", "-", "%z", "-1167609600000"], ["-420", "0:20", "%z", "-1073001600000"], ["-440", "-", "%z", "-894153600000"], ["-450", "-", "%z", "-879638400000"], ["-540", "-", "%z", "-766972800000"], ["-450", "-", "%z", "378662400000"], ["-480", "-", "%z", null]], "Asia/Colombo": [["-319.4", "-", "LMT", "-2808604800000"], ["-319.5333333333333", "-", "MMT", "-1988236800000"], ["-330", "-", "%z", "-883267200000"], ["-330", "0:30", "%z", "-862617600000"], ["-330", "1:00", "%z", "-764028000000"], ["-330", "-", "%z", "832982400000"], ["-390", "-", "%z", "846289800000"], ["-360", "-", "%z", "1145061000000"], ["-330", "-", "%z", null]], "Asia/Damascus": [["-145.2", "-", "LMT", "-1546387200000"], ["-120", "Syria", "EE%sT", "1666915200000"], ["-180", "-", "%z", null]], "Asia/Dushanbe": [["-275.2", "-", "LMT", "-1441152000000"], ["-300", "-", "%z", "-1247529600000"], ["-360", "RussiaAsia", "%z", "670384800000"], ["-300", "1:00", "%z", "684381600000"], ["-300", "-", "%z", null]], "Asia/Bangkok": [["-402.06666666666666", "-", "LMT", "-2808604800000"], ["-402.06666666666666", "-", "BMT", "-1570060800000"], ["-420", "-", "%z", null]], "Asia/Ashgabat": [["-233.53333333333333", "-", "LMT", "-1441152000000"], ["-240", "-", "%z", "-1247529600000"], ["-300", "RussiaAsia", "%z", "670384800000"], ["-240", "RussiaAsia", "%z", "695786400000"], ["-300", "-", "%z", null]], "Asia/Dubai": [["-221.2", "-", "LMT", "-1546387200000"], ["-240", "-", "%z", null]], "Asia/Samarkand": [["-267.8833333333333", "-", "LMT", "-1441152000000"], ["-240", "-", "%z", "-1247529600000"], ["-300", "-", "%z", "354931200000"], ["-300", "1:00", "%z", "370742400000"], ["-360", "-", "%z", "386467200000"], ["-300", "RussiaAsia", "%z", "725760000000"], ["-300", "-", "%z", null]], "Asia/Tashkent": [["-277.18333333333334", "-", "LMT", "-1441152000000"], ["-300", "-", "%z", "-1247529600000"], ["-360", "RussiaAsia", "%z", "670384800000"], ["-300", "RussiaAsia", "%z", "725760000000"], ["-300", "-", "%z", null]], "Asia/Ho_Chi_Minh": [["-426.5", "-", "LMT", "-2004048000000"], ["-426.5", "-", "PLMT", "-1851552000000"], ["-420", "-", "%z", "-852080400000"], ["-480", "-", "%z", "-782614800000"], ["-540", "-", "%z", "-767836800000"], ["-420", "-", "%z", "-718070400000"], ["-480", "-", "%z", "-457743600000"], ["-420", "-", "%z", "-315622800000"], ["-480", "-", "%z", "171849600000"], ["-420", "-", "%z", null]], "Australia/Darwin": [["-523.3333333333333", "-", "LMT", "-2364076800000"], ["-540", "-", "ACST", "-2230156800000"], ["-570", "Aus", "AC%sT", null]], "Australia/Perth": [["-463.4", "-", "LMT", "-2337897600000"], ["-480", "Aus", "AW%sT", "-836438400000"], ["-480", "AW", "AW%sT", null]], "Australia/Eucla": [["-515.4666666666667", "-", "LMT", "-2337897600000"], ["-525", "Aus", "%z", "-836438400000"], ["-525", "AW", "%z", null]], "Australia/Brisbane": [["-612.1333333333333", "-", "LMT", "-2335305600000"], ["-600", "Aus", "AE%sT", "62985600000"], ["-600", "AQ", "AE%sT", null]], "Australia/Lindeman": [["-595.9333333333334", "-", "LMT", "-2335305600000"], ["-600", "Aus", "AE%sT", "62985600000"], ["-600", "AQ", "AE%sT", "709948800000"], ["-600", "Holiday", "AE%sT", null]], "Australia/Adelaide": [["-554.3333333333334", "-", "LMT", "-2364076800000"], ["-540", "-", "ACST", "-2230156800000"], ["-570", "Aus", "AC%sT", "62985600000"], ["-570", "AS", "AC%sT", null]], "Australia/Hobart": [["-589.2666666666667", "-", "LMT", "-2345760000000"], ["-600", "AT", "AE%sT", "-1583884800000"], ["-600", "Aus", "AE%sT", "-63244800000"], ["-600", "AT", "AE%sT", null]], "Australia/Melbourne": [["-579.8666666666667", "-", "LMT", "-2364076800000"], ["-600", "Aus", "AE%sT", "62985600000"], ["-600", "AV", "AE%sT", null]], "Australia/Sydney": [["-604.8666666666667", "-", "LMT", "-2364076800000"], ["-600", "Aus", "AE%sT", "62985600000"], ["-600", "AN", "AE%sT", null]], "Australia/Broken_Hill": [["-565.8", "-", "LMT", "-2364076800000"], ["-600", "-", "AEST", "-2314915200000"], ["-540", "-", "ACST", "-2230156800000"], ["-570", "Aus", "AC%sT", "62985600000"], ["-570", "AN", "AC%sT", "978220800000"], ["-570", "AS", "AC%sT", null]], "Australia/Lord_Howe": [["-636.3333333333334", "-", "LMT", "-2364076800000"], ["-600", "-", "AEST", "352252800000"], ["-630", "LH", "%z", "489024000000"], ["-630", "LH", "%z", null]], "Antarctica/Macquarie": [["0", "-", "-00", "-2214259200000"], ["-600", "-", "AEST", "-1680472800000"], ["-600", "1:00", "AEDT", "-1669852800000"], ["-600", "Aus", "AE%sT", "-1601683200000"], ["0", "-", "-00", "-687052800000"], ["-600", "Aus", "AE%sT", "-63244800000"], ["-600", "AT", "AE%sT", "1293753600000"], ["-600", "1:00", "AEDT", "1325289600000"], ["-600", "AT", "AE%sT", null]], "Pacific/Fiji": [["-715.7333333333333", "-", "LMT", "-1709942400000"], ["-720", "Fiji", "%z", null]], "Pacific/Gambier": [["539.8", "-", "LMT", "-1806710400000"], ["540", "-", "%z", null]], "Pacific/Marquesas": [["558", "-", "LMT", "-1806710400000"], ["570", "-", "%z", null]], "Pacific/Tahiti": [["598.2666666666667", "-", "LMT", "-1806710400000"], ["600", "-", "%z", null]], "Pacific/Guam": [["861", "-", "LMT", "-3944678400000"], ["-579", "-", "LMT", "-2146003200000"], ["-600", "-", "GST", "-885513600000"], ["-540", "-", "%z", "-802224000000"], ["-600", "Guam", "G%sT", "977529600000"], ["-600", "-", "ChST", null]], "Pacific/Tarawa": [["-692.0666666666666", "-", "LMT", "-2146003200000"], ["-720", "-", "%z", null]], "Pacific/Kanton": [["0", "-", "-00", "-1020470400000"], ["720", "-", "%z", "307584000000"], ["660", "-", "%z", "788832000000"], ["-780", "-", "%z", null]], "Pacific/Kiritimati": [["629.3333333333334", "-", "LMT", "-2146003200000"], ["640", "-", "%z", "307584000000"], ["600", "-", "%z", "788832000000"], ["-840", "-", "%z", null]], "Pacific/Kwajalein": [["-669.3333333333334", "-", "LMT", "-2146003200000"], ["-660", "-", "%z", "-1009929600000"], ["-600", "-", "%z", "-907372800000"], ["-540", "-", "%z", "-817430400000"], ["-660", "-", "%z", "-7948800000"], ["720", "-", "%z", "745891200000"], ["-720", "-", "%z", null]], "Pacific/Kosrae": [["788.0666666666666", "-", "LMT", "-3944678400000"], ["-651.9333333333334", "-", "LMT", "-2146003200000"], ["-660", "-", "%z", "-1743638400000"], ["-540", "-", "%z", "-1606780800000"], ["-660", "-", "%z", "-1009929600000"], ["-600", "-", "%z", "-907372800000"], ["-540", "-", "%z", "-770601600000"], ["-660", "-", "%z", "-7948800000"], ["-720", "-", "%z", "946598400000"], ["-660", "-", "%z", null]], "Pacific/Nauru": [["-667.6666666666666", "-", "LMT", "-1545091200000"], ["-690", "-", "%z", "-862876800000"], ["-540", "-", "%z", "-767318400000"], ["-690", "-", "%z", "287460000000"], ["-720", "-", "%z", null]], "Pacific/Noumea": [["-665.8", "-", "LMT", "-1829347200000"], ["-660", "NC", "%z", null]], "Pacific/Auckland": [["-699.0666666666666", "-", "LMT", "-3192393600000"], ["-690", "NZ", "NZ%sT", "-757382400000"], ["-720", "NZ", "NZ%sT", null]], "Pacific/Chatham": [["-733.8", "-", "LMT", "-3192393600000"], ["-735", "-", "%z", "-757382400000"], ["-765", "Chatham", "%z", null]], "Pacific/Rarotonga": [["-800.9333333333334", "-", "LMT", "-2209507200000"], ["639.0666666666666", "-", "LMT", "-543110400000"], ["630", "-", "%z", "279676800000"], ["600", "Cook", "%z", null]], "Pacific/Niue": [["679.6666666666666", "-", "LMT", "-543110400000"], ["680", "-", "%z", "-173664000000"], ["660", "-", "%z", null]], "Pacific/Norfolk": [["-671.8666666666667", "-", "LMT", "-2146003200000"], ["-672", "-", "%z", "-568166400000"], ["-690", "-", "%z", "152071200000"], ["-690", "1:00", "%z", "162957600000"], ["-690", "-", "%z", "1443924000000"], ["-660", "-", "%z", "1561939200000"], ["-660", "AN", "%z", null]], "Pacific/Palau": [["902.0666666666666", "-", "LMT", "-3944678400000"], ["-537.9333333333334", "-", "LMT", "-2146003200000"], ["-540", "-", "%z", null]], "Pacific/Port_Moresby": [["-588.6666666666666", "-", "LMT", "-2808604800000"], ["-588.5333333333334", "-", "PMMT", "-2335305600000"], ["-600", "-", "%z", null]], "Pacific/Bougainville": [["-622.2666666666667", "-", "LMT", "-2808604800000"], ["-588.5333333333334", "-", "PMMT", "-2335305600000"], ["-600", "-", "%z", "-867974400000"], ["-540", "-", "%z", "-768873600000"], ["-600", "-", "%z", "1419732000000"], ["-660", "-", "%z", null]], "Pacific/Pitcairn": [["520.3333333333333", "-", "LMT", "-2146003200000"], ["510", "-", "%z", "893635200000"], ["480", "-", "%z", null]], "Pacific/Pago_Pago": [["-757.2", "-", "LMT", "-2445379200000"], ["682.8", "-", "LMT", "-1830470400000"], ["660", "-", "SST", null]], "Pacific/Apia": [["-753.0666666666666", "-", "LMT", "-2445379200000"], ["686.9333333333334", "-", "LMT", "-1830470400000"], ["690", "-", "%z", "-599702400000"], ["660", "WS", "%z", "1325203200000"], ["-780", "WS", "%z", null]], "Pacific/Guadalcanal": [["-639.8", "-", "LMT", "-1806710400000"], ["-660", "-", "%z", null]], "Pacific/Fakaofo": [["684.9333333333334", "-", "LMT", "-2146003200000"], ["660", "-", "%z", "1325203200000"], ["-780", "-", "%z", null]], "Pacific/Tongatapu": [["-739.2", "-", "LMT", "-767145600000"], ["-740", "-", "%z", "-252547200000"], ["-780", "-", "%z", "946598400000"], ["-780", "Tonga", "%z", null]], "Pacific/Efate": [["-673.2666666666667", "-", "LMT", "-1829347200000"], ["-660", "Vanuatu", "%z", null]], "Australia/ACT": "Australia/Sydney", "Australia/LHI": "Australia/Lord_Howe", "Australia/NSW": "Australia/Sydney", "Australia/North": "Australia/Darwin", "Australia/Queensland": "Australia/Brisbane", "Australia/South": "Australia/Adelaide", "Australia/Tasmania": "Australia/Hobart", "Australia/Victoria": "Australia/Melbourne", "Australia/West": "Australia/Perth", "Australia/Yancowinna": "Australia/Broken_Hill", "Brazil/Acre": "America/Rio_Branco", "Brazil/DeNoronha": "America/Noronha", "Brazil/East": "America/Sao_Paulo", "Brazil/West": "America/Manaus", CET: "Europe/Brussels", CST6CDT: "America/Chicago", "Canada/Atlantic": "America/Halifax", "Canada/Central": "America/Winnipeg", "Canada/Eastern": "America/Toronto", "Canada/Mountain": "America/Edmonton", "Canada/Newfoundland": "America/St_Johns", "Canada/Pacific": "America/Vancouver", "Canada/Saskatchewan": "America/Regina", "Canada/Yukon": "America/Whitehorse", "Chile/Continental": "America/Santiago", "Chile/EasterIsland": "Pacific/Easter", Cuba: "America/Havana", EET: "Europe/Athens", EST: "America/Panama", EST5EDT: "America/New_York", Egypt: "Africa/Cairo", Eire: "Europe/Dublin", "Etc/GMT+0": "Etc/GMT", "Etc/GMT-0": "Etc/GMT", "Etc/GMT0": "Etc/GMT", "Etc/Greenwich": "Etc/GMT", "Etc/UCT": "Etc/UTC", "Etc/Universal": "Etc/UTC", "Etc/Zulu": "Etc/UTC", GB: "Europe/London", "GB-Eire": "Europe/London", "GMT+0": "Etc/GMT", "GMT-0": "Etc/GMT", GMT0: "Etc/GMT", Greenwich: "Etc/GMT", Hongkong: "Asia/Hong_Kong", Iceland: "Africa/Abidjan", Iran: "Asia/Tehran", Israel: "Asia/Jerusalem", Jamaica: "America/Jamaica", Japan: "Asia/Tokyo", Kwajalein: "Pacific/Kwajalein", Libya: "Africa/Tripoli", MET: "Europe/Brussels", MST: "America/Phoenix", MST7MDT: "America/Denver", "Mexico/BajaNorte": "America/Tijuana", "Mexico/BajaSur": "America/Mazatlan", "Mexico/General": "America/Mexico_City", NZ: "Pacific/Auckland", "NZ-CHAT": "Pacific/Chatham", Navajo: "America/Denver", PRC: "Asia/Shanghai", Poland: "Europe/Warsaw", Portugal: "Europe/Lisbon", ROC: "Asia/Taipei", ROK: "Asia/Seoul", Singapore: "Asia/Singapore", Turkey: "Europe/Istanbul", UCT: "Etc/UTC", "US/Alaska": "America/Anchorage", "US/Aleutian": "America/Adak", "US/Arizona": "America/Phoenix", "US/Central": "America/Chicago", "US/East-Indiana": "America/Indiana/Indianapolis", "US/Eastern": "America/New_York", "US/Hawaii": "Pacific/Honolulu", "US/Indiana-Starke": "America/Indiana/Knox", "US/Michigan": "America/Detroit", "US/Mountain": "America/Denver", "US/Pacific": "America/Los_Angeles", "US/Samoa": "Pacific/Pago_Pago", UTC: "Etc/UTC", Universal: "Etc/UTC", "W-SU": "Europe/Moscow", Zulu: "Etc/UTC", "America/Buenos_Aires": "America/Argentina/Buenos_Aires", "America/Catamarca": "America/Argentina/Catamarca", "America/Cordoba": "America/Argentina/Cordoba", "America/Indianapolis": "America/Indiana/Indianapolis", "America/Jujuy": "America/Argentina/Jujuy", "America/Knox_IN": "America/Indiana/Knox", "America/Louisville": "America/Kentucky/Louisville", "America/Mendoza": "America/Argentina/Mendoza", "America/Virgin": "America/Puerto_Rico", "Pacific/Samoa": "Pacific/Pago_Pago", "Africa/Accra": "Africa/Abidjan", "Africa/Addis_Ababa": "Africa/Nairobi", "Africa/Asmara": "Africa/Nairobi", "Africa/Bamako": "Africa/Abidjan", "Africa/Bangui": "Africa/Lagos", "Africa/Banjul": "Africa/Abidjan", "Africa/Blantyre": "Africa/Maputo", "Africa/Brazzaville": "Africa/Lagos", "Africa/Bujumbura": "Africa/Maputo", "Africa/Conakry": "Africa/Abidjan", "Africa/Dakar": "Africa/Abidjan", "Africa/Dar_es_Salaam": "Africa/Nairobi", "Africa/Djibouti": "Africa/Nairobi", "Africa/Douala": "Africa/Lagos", "Africa/Freetown": "Africa/Abidjan", "Africa/Gaborone": "Africa/Maputo", "Africa/Harare": "Africa/Maputo", "Africa/Kampala": "Africa/Nairobi", "Africa/Kigali": "Africa/Maputo", "Africa/Kinshasa": "Africa/Lagos", "Africa/Libreville": "Africa/Lagos", "Africa/Lome": "Africa/Abidjan", "Africa/Luanda": "Africa/Lagos", "Africa/Lubumbashi": "Africa/Maputo", "Africa/Lusaka": "Africa/Maputo", "Africa/Malabo": "Africa/Lagos", "Africa/Maseru": "Africa/Johannesburg", "Africa/Mbabane": "Africa/Johannesburg", "Africa/Mogadishu": "Africa/Nairobi", "Africa/Niamey": "Africa/Lagos", "Africa/Nouakchott": "Africa/Abidjan", "Africa/Ouagadougou": "Africa/Abidjan", "Africa/Porto-Novo": "Africa/Lagos", "America/Anguilla": "America/Puerto_Rico", "America/Antigua": "America/Puerto_Rico", "America/Aruba": "America/Puerto_Rico", "America/Atikokan": "America/Panama", "America/Blanc-Sablon": "America/Puerto_Rico", "America/Cayman": "America/Panama", "America/Creston": "America/Phoenix", "America/Curacao": "America/Puerto_Rico", "America/Dominica": "America/Puerto_Rico", "America/Grenada": "America/Puerto_Rico", "America/Guadeloupe": "America/Puerto_Rico", "America/Kralendijk": "America/Puerto_Rico", "America/Lower_Princes": "America/Puerto_Rico", "America/Marigot": "America/Puerto_Rico", "America/Montserrat": "America/Puerto_Rico", "America/Nassau": "America/Toronto", "America/Port_of_Spain": "America/Puerto_Rico", "America/St_Barthelemy": "America/Puerto_Rico", "America/St_Kitts": "America/Puerto_Rico", "America/St_Lucia": "America/Puerto_Rico", "America/St_Thomas": "America/Puerto_Rico", "America/St_Vincent": "America/Puerto_Rico", "America/Tortola": "America/Puerto_Rico", "Antarctica/DumontDUrville": "Pacific/Port_Moresby", "Antarctica/McMurdo": "Pacific/Auckland", "Antarctica/Syowa": "Asia/Riyadh", "Arctic/Longyearbyen": "Europe/Berlin", "Asia/Aden": "Asia/Riyadh", "Asia/Bahrain": "Asia/Qatar", "Asia/Brunei": "Asia/Kuching", "Asia/Kuala_Lumpur": "Asia/Singapore", "Asia/Kuwait": "Asia/Riyadh", "Asia/Muscat": "Asia/Dubai", "Asia/Phnom_Penh": "Asia/Bangkok", "Asia/Vientiane": "Asia/Bangkok", "Atlantic/Reykjavik": "Africa/Abidjan", "Atlantic/St_Helena": "Africa/Abidjan", "Europe/Amsterdam": "Europe/Brussels", "Europe/Bratislava": "Europe/Prague", "Europe/Busingen": "Europe/Zurich", "Europe/Copenhagen": "Europe/Berlin", "Europe/Guernsey": "Europe/London", "Europe/Isle_of_Man": "Europe/London", "Europe/Jersey": "Europe/London", "Europe/Ljubljana": "Europe/Belgrade", "Europe/Luxembourg": "Europe/Brussels", "Europe/Mariehamn": "Europe/Helsinki", "Europe/Monaco": "Europe/Paris", "Europe/Oslo": "Europe/Berlin", "Europe/Podgorica": "Europe/Belgrade", "Europe/San_Marino": "Europe/Rome", "Europe/Sarajevo": "Europe/Belgrade", "Europe/Skopje": "Europe/Belgrade", "Europe/Stockholm": "Europe/Berlin", "Europe/Vaduz": "Europe/Zurich", "Europe/Vatican": "Europe/Rome", "Europe/Zagreb": "Europe/Belgrade", "Indian/Antananarivo": "Africa/Nairobi", "Indian/Christmas": "Asia/Bangkok", "Indian/Cocos": "Asia/Yangon", "Indian/Comoro": "Africa/Nairobi", "Indian/Kerguelen": "Indian/Maldives", "Indian/Mahe": "Asia/Dubai", "Indian/Mayotte": "Africa/Nairobi", "Indian/Reunion": "Asia/Dubai", "Pacific/Chuuk": "Pacific/Port_Moresby", "Pacific/Funafuti": "Pacific/Tarawa", "Pacific/Majuro": "Pacific/Tarawa", "Pacific/Midway": "Pacific/Pago_Pago", "Pacific/Pohnpei": "Pacific/Guadalcanal", "Pacific/Saipan": "Pacific/Guam", "Pacific/Wake": "Pacific/Tarawa", "Pacific/Wallis": "Pacific/Tarawa", "Africa/Timbuktu": "Africa/Abidjan", "America/Argentina/ComodRivadavia": "America/Argentina/Catamarca", "America/Atka": "America/Adak", "America/Coral_Harbour": "America/Panama", "America/Ensenada": "America/Tijuana", "America/Fort_Wayne": "America/Indiana/Indianapolis", "America/Montreal": "America/Toronto", "America/Nipigon": "America/Toronto", "America/Pangnirtung": "America/Iqaluit", "America/Porto_Acre": "America/Rio_Branco", "America/Rainy_River": "America/Winnipeg", "America/Rosario": "America/Argentina/Cordoba", "America/Santa_Isabel": "America/Tijuana", "America/Shiprock": "America/Denver", "America/Thunder_Bay": "America/Toronto", "America/Yellowknife": "America/Edmonton", "Antarctica/South_Pole": "Pacific/Auckland", "Asia/Choibalsan": "Asia/Ulaanbaatar", "Asia/Chongqing": "Asia/Shanghai", "Asia/Harbin": "Asia/Shanghai", "Asia/Kashgar": "Asia/Urumqi", "Asia/Tel_Aviv": "Asia/Jerusalem", "Atlantic/Jan_Mayen": "Europe/Berlin", "Australia/Canberra": "Australia/Sydney", "Australia/Currie": "Australia/Hobart", "Europe/Belfast": "Europe/London", "Europe/Tiraspol": "Europe/Chisinau", "Europe/Uzhgorod": "Europe/Kyiv", "Europe/Zaporozhye": "Europe/Kyiv", "Pacific/Enderbury": "Pacific/Kanton", "Pacific/Johnston": "Pacific/Honolulu", "Pacific/Yap": "Pacific/Port_Moresby", WET: "Europe/Lisbon", "Africa/Asmera": "Africa/Nairobi", "America/Godthab": "America/Nuuk", "Asia/Ashkhabad": "Asia/Ashgabat", "Asia/Calcutta": "Asia/Kolkata", "Asia/Chungking": "Asia/Shanghai", "Asia/Dacca": "Asia/Dhaka", "Asia/Istanbul": "Europe/Istanbul", "Asia/Katmandu": "Asia/Kathmandu", "Asia/Macao": "Asia/Macau", "Asia/Rangoon": "Asia/Yangon", "Asia/Saigon": "Asia/Ho_Chi_Minh", "Asia/Thimbu": "Asia/Thimphu", "Asia/Ujung_Pandang": "Asia/Makassar", "Asia/Ulan_Bator": "Asia/Ulaanbaatar", "Atlantic/Faeroe": "Atlantic/Faroe", "Europe/Kiev": "Europe/Kyiv", "Europe/Nicosia": "Asia/Nicosia", HST: "Pacific/Honolulu", PST8PDT: "America/Los_Angeles", "Pacific/Ponape": "Pacific/Guadalcanal", "Pacific/Truk": "Pacific/Port_Moresby", "Etc/UTC": [["0", "-", "UTC", null]], "Etc/GMT": [["0", "-", "GMT", null]], GMT: "Etc/GMT", "Etc/GMT-14": [["-840", "-", "%z", null]], "Etc/GMT-13": [["-780", "-", "%z", null]], "Etc/GMT-12": [["-720", "-", "%z", null]], "Etc/GMT-11": [["-660", "-", "%z", null]], "Etc/GMT-10": [["-600", "-", "%z", null]], "Etc/GMT-9": [["-540", "-", "%z", null]], "Etc/GMT-8": [["-480", "-", "%z", null]], "Etc/GMT-7": [["-420", "-", "%z", null]], "Etc/GMT-6": [["-360", "-", "%z", null]], "Etc/GMT-5": [["-300", "-", "%z", null]], "Etc/GMT-4": [["-240", "-", "%z", null]], "Etc/GMT-3": [["-180", "-", "%z", null]], "Etc/GMT-2": [["-120", "-", "%z", null]], "Etc/GMT-1": [["-60", "-", "%z", null]], "Etc/GMT+1": [["60", "-", "%z", null]], "Etc/GMT+2": [["120", "-", "%z", null]], "Etc/GMT+3": [["180", "-", "%z", null]], "Etc/GMT+4": [["240", "-", "%z", null]], "Etc/GMT+5": [["300", "-", "%z", null]], "Etc/GMT+6": [["360", "-", "%z", null]], "Etc/GMT+7": [["420", "-", "%z", null]], "Etc/GMT+8": [["480", "-", "%z", null]], "Etc/GMT+9": [["540", "-", "%z", null]], "Etc/GMT+10": [["600", "-", "%z", null]], "Etc/GMT+11": [["660", "-", "%z", null]], "Etc/GMT+12": [["720", "-", "%z", null]], "Europe/London": [["1.25", "-", "LMT", "-3852662400000"], ["0", "GB-Eire", "%s", "-37238400000"], ["-60", "-", "BST", "57722400000"], ["0", "GB-Eire", "%s", "851990400000"], ["0", "EU", "GMT/BST", null]], "Europe/Dublin": [["25.35", "-", "LMT", "-2821651200000"], ["25.35", "-", "DMT", "-1691964000000"], ["25.35", "1:00", "IST", "-1680472800000"], ["0", "GB-Eire", "%s", "-1517011200000"], ["0", "GB-Eire", "GMT/IST", "-942012000000"], ["0", "1:00", "IST", "-733356000000"], ["0", "-", "GMT", "-719445600000"], ["0", "1:00", "IST", "-699487200000"], ["0", "-", "GMT", "-684972000000"], ["0", "GB-Eire", "GMT/IST", "-37238400000"], ["-60", "Eire", "IST/GMT", null]], "Europe/Tirane": [["-79.33333333333333", "-", "LMT", "-1735776000000"], ["-60", "-", "CET", "-932342400000"], ["-60", "Albania", "CE%sT", "457488000000"], ["-60", "EU", "CE%sT", null]], "Europe/Andorra": [["-6.066666666666667", "-", "LMT", "-2146003200000"], ["0", "-", "WET", "-733881600000"], ["-60", "-", "CET", "481082400000"], ["-60", "EU", "CE%sT", null]], "Europe/Vienna": [["-65.35", "-", "LMT", "-2422051200000"], ["-60", "C-Eur", "CE%sT", "-1546387200000"], ["-60", "Austria", "CE%sT", "-938901600000"], ["-60", "C-Eur", "CE%sT", "-781048800000"], ["-60", "1:00", "CEST", "-780184800000"], ["-60", "-", "CET", "-725932800000"], ["-60", "Austria", "CE%sT", "378604800000"], ["-60", "EU", "CE%sT", null]], "Europe/Minsk": [["-110.26666666666667", "-", "LMT", "-2808604800000"], ["-110", "-", "MMT", "-1441152000000"], ["-120", "-", "EET", "-1247529600000"], ["-180", "-", "MSK", "-899769600000"], ["-60", "C-Eur", "CE%sT", "-804643200000"], ["-180", "Russia", "MSK/MSD", "662601600000"], ["-180", "-", "MSK", "670384800000"], ["-120", "Russia", "EE%sT", "1301191200000"], ["-180", "-", "%z", null]], "Europe/Brussels": [["-17.5", "-", "LMT", "-2808604800000"], ["-17.5", "-", "BMT", "-2450994150000"], ["0", "-", "WET", "-1740355200000"], ["-60", "-", "CET", "-1693699200000"], ["-60", "C-Eur", "CE%sT", "-1613826000000"], ["0", "Belgium", "WE%sT", "-934668000000"], ["-60", "C-Eur", "CE%sT", "-799286400000"], ["-60", "Belgium", "CE%sT", "252374400000"], ["-60", "EU", "CE%sT", null]], "Europe/Sofia": [["-93.26666666666667", "-", "LMT", "-2808604800000"], ["-116.93333333333332", "-", "IMT", "-2369520000000"], ["-120", "-", "EET", "-857250000000"], ["-60", "C-Eur", "CE%sT", "-757468800000"], ["-60", "-", "CET", "-781045200000"], ["-120", "-", "EET", "291769200000"], ["-120", "Bulg", "EE%sT", "401857200000"], ["-120", "C-Eur", "EE%sT", "694137600000"], ["-120", "E-Eur", "EE%sT", "883526400000"], ["-120", "EU", "EE%sT", null]], "Europe/Prague": [["-57.733333333333334", "-", "LMT", "-3755376000000"], ["-57.733333333333334", "-", "PMT", "-2469398400000"], ["-60", "C-Eur", "CE%sT", "-777859200000"], ["-60", "Czech", "CE%sT", "-728514000000"], ["-60", "-1:00", "GMT", "-721260000000"], ["-60", "Czech", "CE%sT", "315446400000"], ["-60", "EU", "CE%sT", null]], "Atlantic/Faroe": [["27.066666666666666", "-", "LMT", "-1955750400000"], ["0", "-", "WET", "378604800000"], ["0", "EU", "WE%sT", null]], "America/Danmarkshavn": [["74.66666666666667", "-", "LMT", "-1686096000000"], ["180", "-", "%z", "323834400000"], ["180", "EU", "%z", "851990400000"], ["0", "-", "GMT", null]], "America/Scoresbysund": [["87.86666666666667", "-", "LMT", "-1686096000000"], ["120", "-", "%z", "323834400000"], ["120", "C-Eur", "%z", "354672000000"], ["60", "EU", "%z", "1711843200000"], ["120", "EU", "%z", null]], "America/Nuuk": [["206.93333333333334", "-", "LMT", "-1686096000000"], ["180", "-", "%z", "323834400000"], ["180", "EU", "%z", "1679792400000"], ["120", "-", "%z", "1698541200000"], ["120", "EU", "%z", null]], "America/Thule": [["275.1333333333333", "-", "LMT", "-1686096000000"], ["240", "Thule", "A%sT", null]], "Europe/Tallinn": [["-99", "-", "LMT", "-2808604800000"], ["-99", "-", "TMT", "-1638316800000"], ["-60", "C-Eur", "CE%sT", "-1593820800000"], ["-99", "-", "TMT", "-1535932800000"], ["-120", "-", "EET", "-927936000000"], ["-180", "-", "MSK", "-892944000000"], ["-60", "C-Eur", "CE%sT", "-797644800000"], ["-180", "Russia", "MSK/MSD", "606880800000"], ["-120", "1:00", "EEST", "622605600000"], ["-120", "C-Eur", "EE%sT", "906422400000"], ["-120", "EU", "EE%sT", "941342400000"], ["-120", "-", "EET", "1014249600000"], ["-120", "EU", "EE%sT", null]], "Europe/Helsinki": [["-99.81666666666668", "-", "LMT", "-2890252800000"], ["-99.81666666666668", "-", "HMT", "-1535932800000"], ["-120", "Finland", "EE%sT", "441676800000"], ["-120", "EU", "EE%sT", null]], "Europe/Paris": [["-9.35", "-", "LMT", "-2486592000000"], ["-9.35", "-", "PMT", "-1855958400000"], ["0", "France", "WE%sT", "-932432400000"], ["-60", "C-Eur", "CE%sT", "-800064000000"], ["0", "France", "WE%sT", "-766616400000"], ["-60", "France", "CE%sT", "252374400000"], ["-60", "EU", "CE%sT", null]], "Europe/Berlin": [["-53.46666666666666", "-", "LMT", "-2422051200000"], ["-60", "C-Eur", "CE%sT", "-776556000000"], ["-60", "SovietZone", "CE%sT", "-725932800000"], ["-60", "Germany", "CE%sT", "347068800000"], ["-60", "EU", "CE%sT", null]], "Europe/Gibraltar": [["21.4", "-", "LMT", "-2821651200000"], ["0", "GB-Eire", "%s", "-401320800000"], ["-60", "-", "CET", "410140800000"], ["-60", "EU", "CE%sT", null]], "Europe/Athens": [["-94.86666666666667", "-", "LMT", "-2344636800000"], ["-94.86666666666667", "-", "AMT", "-1686095940000"], ["-120", "Greece", "EE%sT", "-904867200000"], ["-60", "Greece", "CE%sT", "-812419200000"], ["-120", "Greece", "EE%sT", "378604800000"], ["-120", "EU", "EE%sT", null]], "Europe/Budapest": [["-76.33333333333333", "-", "LMT", "-2498256000000"], ["-60", "C-Eur", "CE%sT", "-1609545600000"], ["-60", "Hungary", "CE%sT", "-906771600000"], ["-60", "C-Eur", "CE%sT", "-757468800000"], ["-60", "Hungary", "CE%sT", "473299200000"], ["-60", "EU", "CE%sT", null]], "Europe/Rome": [["-49.93333333333334", "-", "LMT", "-3252096000000"], ["-49.93333333333334", "-", "RMT", "-2403565200000"], ["-60", "Italy", "CE%sT", "-830304000000"], ["-60", "C-Eur", "CE%sT", "-807148800000"], ["-60", "Italy", "CE%sT", "347068800000"], ["-60", "EU", "CE%sT", null]], "Europe/Riga": [["-96.56666666666668", "-", "LMT", "-2808604800000"], ["-96.56666666666668", "-", "RMT", "-1632002400000"], ["-96.56666666666668", "1:00", "LST", "-1618693200000"], ["-96.56666666666668", "-", "RMT", "-1601676000000"], ["-96.56666666666668", "1:00", "LST", "-1597266000000"], ["-96.56666666666668", "-", "RMT", "-1377302400000"], ["-120", "-", "EET", "-928022400000"], ["-180", "-", "MSK", "-899510400000"], ["-60", "C-Eur", "CE%sT", "-795830400000"], ["-180", "Russia", "MSK/MSD", "604720800000"], ["-120", "1:00", "EEST", "620618400000"], ["-120", "Latvia", "EE%sT", "853804800000"], ["-120", "EU", "EE%sT", "951782400000"], ["-120", "-", "EET", "978393600000"], ["-120", "EU", "EE%sT", null]], "Europe/Vilnius": [["-101.26666666666667", "-", "LMT", "-2808604800000"], ["-84", "-", "WMT", "-1641081600000"], ["-95.6", "-", "KMT", "-1585094400000"], ["-60", "-", "CET", "-1561248000000"], ["-120", "-", "EET", "-1553558400000"], ["-60", "-", "CET", "-928195200000"], ["-180", "-", "MSK", "-900115200000"], ["-60", "C-Eur", "CE%sT", "-802137600000"], ["-180", "Russia", "MSK/MSD", "606880800000"], ["-120", "Russia", "EE%sT", "686109600000"], ["-120", "C-Eur", "EE%sT", "915062400000"], ["-120", "-", "EET", "891133200000"], ["-60", "EU", "CE%sT", "941331600000"], ["-120", "-", "EET", "1041379200000"], ["-120", "EU", "EE%sT", null]], "Europe/Malta": [["-58.06666666666666", "-", "LMT", "-2403475200000"], ["-60", "Italy", "CE%sT", "102384000000"], ["-60", "Malta", "CE%sT", "378604800000"], ["-60", "EU", "CE%sT", null]], "Europe/Chisinau": [["-115.33333333333333", "-", "LMT", "-2808604800000"], ["-115", "-", "CMT", "-1637107200000"], ["-104.4", "-", "BMT", "-1213142400000"], ["-120", "Romania", "EE%sT", "-927158400000"], ["-120", "1:00", "EEST", "-898128000000"], ["-60", "C-Eur", "CE%sT", "-800150400000"], ["-180", "Russia", "MSK/MSD", "641959200000"], ["-120", "Russia", "EE%sT", "725760000000"], ["-120", "E-Eur", "EE%sT", "883526400000"], ["-120", "Moldova", "EE%sT", null]], "Europe/Warsaw": [["-84", "-", "LMT", "-2808604800000"], ["-84", "-", "WMT", "-1717027200000"], ["-60", "C-Eur", "CE%sT", "-1618693200000"], ["-120", "Poland", "EE%sT", "-1501718400000"], ["-60", "Poland", "CE%sT", "-931730400000"], ["-60", "C-Eur", "CE%sT", "-796867200000"], ["-60", "Poland", "CE%sT", "252374400000"], ["-60", "W-Eur", "CE%sT", "599529600000"], ["-60", "EU", "CE%sT", null]], "Europe/Lisbon": [["36.75", "-", "LMT", "-2682374400000"], ["36.75", "-", "LMT", "-1830384000000"], ["0", "Port", "WE%sT", "-102549600000"], ["-60", "-", "CET", "212547600000"], ["0", "Port", "WE%sT", "536371200000"], ["0", "EU", "WE%sT", "717555600000"], ["-60", "EU", "CE%sT", "828234000000"], ["0", "EU", "WE%sT", null]], "Atlantic/Azores": [["102.66666666666667", "-", "LMT", "-2682374400000"], ["114.53333333333333", "-", "HMT", "-1830376800000"], ["120", "Port", "%z", "-102549600000"], ["60", "-", "%z", "386121600000"], ["60", "Port", "%z", "536371200000"], ["60", "EU", "%z", "725418000000"], ["0", "EU", "WE%sT", "740278800000"], ["60", "EU", "%z", null]], "Atlantic/Madeira": [["67.6", "-", "LMT", "-2682374400000"], ["67.6", "-", "FMT", "-1830380400000"], ["60", "Port", "%z", "-102549600000"], ["0", "-", "WET", "386726400000"], ["0", "Port", "WE%sT", "523152000000"], ["0", "EU", "WE%sT", null]], "Europe/Bucharest": [["-104.4", "-", "LMT", "-2469398400000"], ["-104.4", "-", "BMT", "-1213142400000"], ["-120", "Romania", "EE%sT", "354679200000"], ["-120", "C-Eur", "EE%sT", "694137600000"], ["-120", "Romania", "EE%sT", "788832000000"], ["-120", "E-Eur", "EE%sT", "883526400000"], ["-120", "EU", "EE%sT", null]], "Europe/Kaliningrad": [["-82", "-", "LMT", "-2422051200000"], ["-60", "C-Eur", "CE%sT", "-780364800000"], ["-120", "Poland", "EE%sT", "-749088000000"], ["-180", "Russia", "MSK/MSD", "606880800000"], ["-120", "Russia", "EE%sT", "1301191200000"], ["-180", "-", "%z", "1414288800000"], ["-120", "-", "EET", null]], "Europe/Moscow": [["-150.28333333333333", "-", "LMT", "-2808604800000"], ["-150.28333333333333", "-", "MMT", "-1688256000000"], ["-151.31666666666666", "Russia", "%s", "-1593820800000"], ["-180", "Russia", "%s", "-1522713600000"], ["-180", "Russia", "MSK/MSD", "-1491177600000"], ["-120", "-", "EET", "-1247529600000"], ["-180", "Russia", "MSK/MSD", "670384800000"], ["-120", "Russia", "EE%sT", "695786400000"], ["-180", "Russia", "MSK/MSD", "1301191200000"], ["-240", "-", "MSK", "1414288800000"], ["-180", "-", "MSK", null]], "Europe/Simferopol": [["-136.4", "-", "LMT", "-2808604800000"], ["-136", "-", "SMT", "-1441152000000"], ["-120", "-", "EET", "-1247529600000"], ["-180", "-", "MSK", "-888883200000"], ["-60", "C-Eur", "CE%sT", "-811641600000"], ["-180", "Russia", "MSK/MSD", "662601600000"], ["-180", "-", "MSK", "646797600000"], ["-120", "-", "EET", "701049600000"], ["-120", "C-Eur", "EE%sT", "767750400000"], ["-180", "C-Eur", "MSK/MSD", "828230400000"], ["-180", "1:00", "MSD", "846385200000"], ["-180", "-", "MSK", "857178000000"], ["-120", "EU", "EE%sT", "1396144800000"], ["-240", "-", "MSK", "1414288800000"], ["-180", "-", "MSK", null]], "Europe/Astrakhan": [["-192.2", "-", "LMT", "-1441238400000"], ["-180", "-", "%z", "-1247529600000"], ["-240", "Russia", "%z", "606880800000"], ["-180", "Russia", "%z", "670384800000"], ["-240", "-", "%z", "701834400000"], ["-180", "Russia", "%z", "1301191200000"], ["-240", "-", "%z", "1414288800000"], ["-180", "-", "%z", "1459044000000"], ["-240", "-", "%z", null]], "Europe/Volgograd": [["-177.66666666666666", "-", "LMT", "-1577750400000"], ["-180", "-", "%z", "-1247529600000"], ["-240", "-", "%z", "-256867200000"], ["-240", "Russia", "%z", "575431200000"], ["-180", "Russia", "MSK/MSD", "670384800000"], ["-240", "-", "%z", "701834400000"], ["-180", "Russia", "MSK/MSD", "1301191200000"], ["-240", "-", "MSK", "1414288800000"], ["-180", "-", "MSK", "1540692000000"], ["-240", "-", "%z", "1609034400000"], ["-180", "-", "MSK", null]], "Europe/Saratov": [["-184.3", "-", "LMT", "-1593820800000"], ["-180", "-", "%z", "-1247529600000"], ["-240", "Russia", "%z", "575431200000"], ["-180", "Russia", "%z", "670384800000"], ["-240", "-", "%z", "701834400000"], ["-180", "Russia", "%z", "1301191200000"], ["-240", "-", "%z", "1414288800000"], ["-180", "-", "%z", "1480816800000"], ["-240", "-", "%z", null]], "Europe/Kirov": [["-198.8", "-", "LMT", "-1593820800000"], ["-180", "-", "%z", "-1247529600000"], ["-240", "Russia", "%z", "606880800000"], ["-180", "Russia", "MSK/MSD", "670384800000"], ["-240", "-", "%z", "701834400000"], ["-180", "Russia", "MSK/MSD", "1301191200000"], ["-240", "-", "MSK", "1414288800000"], ["-180", "-", "MSK", null]], "Europe/Samara": [["-200.33333333333334", "-", "LMT", "-1593820800000"], ["-180", "-", "%z", "-1247529600000"], ["-240", "-", "%z", "-1102291200000"], ["-240", "Russia", "%z", "606880800000"], ["-180", "Russia", "%z", "670384800000"], ["-120", "Russia", "%z", "686109600000"], ["-180", "-", "%z", "687927600000"], ["-240", "Russia", "%z", "1269741600000"], ["-180", "Russia", "%z", "1301191200000"], ["-240", "-", "%z", null]], "Europe/Ulyanovsk": [["-193.6", "-", "LMT", "-1593820800000"], ["-180", "-", "%z", "-1247529600000"], ["-240", "Russia", "%z", "606880800000"], ["-180", "Russia", "%z", "670384800000"], ["-120", "Russia", "%z", "695786400000"], ["-180", "Russia", "%z", "1301191200000"], ["-240", "-", "%z", "1414288800000"], ["-180", "-", "%z", "1459044000000"], ["-240", "-", "%z", null]], "Asia/Yekaterinburg": [["-242.55", "-", "LMT", "-1688256000000"], ["-225.08333333333334", "-", "PMT", "-1592596800000"], ["-240", "-", "%z", "-1247529600000"], ["-300", "Russia", "%z", "670384800000"], ["-240", "Russia", "%z", "695786400000"], ["-300", "Russia", "%z", "1301191200000"], ["-360", "-", "%z", "1414288800000"], ["-300", "-", "%z", null]], "Asia/Omsk": [["-293.5", "-", "LMT", "-1582070400000"], ["-300", "-", "%z", "-1247529600000"], ["-360", "Russia", "%z", "670384800000"], ["-300", "Russia", "%z", "695786400000"], ["-360", "Russia", "%z", "1301191200000"], ["-420", "-", "%z", "1414288800000"], ["-360", "-", "%z", null]], "Asia/Barnaul": [["-335", "-", "LMT", "-1579824000000"], ["-360", "-", "%z", "-1247529600000"], ["-420", "Russia", "%z", "670384800000"], ["-360", "Russia", "%z", "695786400000"], ["-420", "Russia", "%z", "801619200000"], ["-360", "Russia", "%z", "1301191200000"], ["-420", "-", "%z", "1414288800000"], ["-360", "-", "%z", "1459044000000"], ["-420", "-", "%z", null]], "Asia/Novosibirsk": [["-331.6666666666667", "-", "LMT", "-1579456800000"], ["-360", "-", "%z", "-1247529600000"], ["-420", "Russia", "%z", "670384800000"], ["-360", "Russia", "%z", "695786400000"], ["-420", "Russia", "%z", "738115200000"], ["-360", "Russia", "%z", "1301191200000"], ["-420", "-", "%z", "1414288800000"], ["-360", "-", "%z", "1469325600000"], ["-420", "-", "%z", null]], "Asia/Tomsk": [["-339.85", "-", "LMT", "-1578787200000"], ["-360", "-", "%z", "-1247529600000"], ["-420", "Russia", "%z", "670384800000"], ["-360", "Russia", "%z", "695786400000"], ["-420", "Russia", "%z", "1020222000000"], ["-360", "Russia", "%z", "1301191200000"], ["-420", "-", "%z", "1414288800000"], ["-360", "-", "%z", "1464487200000"], ["-420", "-", "%z", null]], "Asia/Novokuznetsk": [["-348.8", "-", "LMT", "-1441238400000"], ["-360", "-", "%z", "-1247529600000"], ["-420", "Russia", "%z", "670384800000"], ["-360", "Russia", "%z", "695786400000"], ["-420", "Russia", "%z", "1269741600000"], ["-360", "Russia", "%z", "1301191200000"], ["-420", "-", "%z", null]], "Asia/Krasnoyarsk": [["-371.43333333333334", "-", "LMT", "-1577491200000"], ["-360", "-", "%z", "-1247529600000"], ["-420", "Russia", "%z", "670384800000"], ["-360", "Russia", "%z", "695786400000"], ["-420", "Russia", "%z", "1301191200000"], ["-480", "-", "%z", "1414288800000"], ["-420", "-", "%z", null]], "Asia/Irkutsk": [["-417.0833333333333", "-", "LMT", "-2808604800000"], ["-417.0833333333333", "-", "IMT", "-1575849600000"], ["-420", "-", "%z", "-1247529600000"], ["-480", "Russia", "%z", "670384800000"], ["-420", "Russia", "%z", "695786400000"], ["-480", "Russia", "%z", "1301191200000"], ["-540", "-", "%z", "1414288800000"], ["-480", "-", "%z", null]], "Asia/Chita": [["-453.8666666666667", "-", "LMT", "-1579392000000"], ["-480", "-", "%z", "-1247529600000"], ["-540", "Russia", "%z", "670384800000"], ["-480", "Russia", "%z", "695786400000"], ["-540", "Russia", "%z", "1301191200000"], ["-600", "-", "%z", "1414288800000"], ["-480", "-", "%z", "1459044000000"], ["-540", "-", "%z", null]], "Asia/Yakutsk": [["-518.9666666666667", "-", "LMT", "-1579392000000"], ["-480", "-", "%z", "-1247529600000"], ["-540", "Russia", "%z", "670384800000"], ["-480", "Russia", "%z", "695786400000"], ["-540", "Russia", "%z", "1301191200000"], ["-600", "-", "%z", "1414288800000"], ["-540", "-", "%z", null]], "Asia/Vladivostok": [["-527.5166666666667", "-", "LMT", "-1487289600000"], ["-540", "-", "%z", "-1247529600000"], ["-600", "Russia", "%z", "670384800000"], ["-540", "Russia", "%z", "695786400000"], ["-600", "Russia", "%z", "1301191200000"], ["-660", "-", "%z", "1414288800000"], ["-600", "-", "%z", null]], "Asia/Khandyga": [["-542.2166666666666", "-", "LMT", "-1579392000000"], ["-480", "-", "%z", "-1247529600000"], ["-540", "Russia", "%z", "670384800000"], ["-480", "Russia", "%z", "695786400000"], ["-540", "Russia", "%z", "1104451200000"], ["-600", "Russia", "%z", "1301191200000"], ["-660", "-", "%z", "1315872000000"], ["-600", "-", "%z", "1414288800000"], ["-540", "-", "%z", null]], "Asia/Sakhalin": [["-570.8", "-", "LMT", "-2031004800000"], ["-540", "-", "%z", "-768528000000"], ["-660", "Russia", "%z", "670384800000"], ["-600", "Russia", "%z", "695786400000"], ["-660", "Russia", "%z", "857181600000"], ["-600", "Russia", "%z", "1301191200000"], ["-660", "-", "%z", "1414288800000"], ["-600", "-", "%z", "1459044000000"], ["-660", "-", "%z", null]], "Asia/Magadan": [["-603.2", "-", "LMT", "-1441152000000"], ["-600", "-", "%z", "-1247529600000"], ["-660", "Russia", "%z", "670384800000"], ["-600", "Russia", "%z", "695786400000"], ["-660", "Russia", "%z", "1301191200000"], ["-720", "-", "%z", "1414288800000"], ["-600", "-", "%z", "1461463200000"], ["-660", "-", "%z", null]], "Asia/Srednekolymsk": [["-614.8666666666667", "-", "LMT", "-1441152000000"], ["-600", "-", "%z", "-1247529600000"], ["-660", "Russia", "%z", "670384800000"], ["-600", "Russia", "%z", "695786400000"], ["-660", "Russia", "%z", "1301191200000"], ["-720", "-", "%z", "1414288800000"], ["-660", "-", "%z", null]], "Asia/Ust-Nera": [["-572.9", "-", "LMT", "-1579392000000"], ["-480", "-", "%z", "-1247529600000"], ["-540", "Russia", "%z", "354931200000"], ["-660", "Russia", "%z", "670384800000"], ["-600", "Russia", "%z", "695786400000"], ["-660", "Russia", "%z", "1301191200000"], ["-720", "-", "%z", "1315872000000"], ["-660", "-", "%z", "1414288800000"], ["-600", "-", "%z", null]], "Asia/Kamchatka": [["-634.6", "-", "LMT", "-1487721600000"], ["-660", "-", "%z", "-1247529600000"], ["-720", "Russia", "%z", "670384800000"], ["-660", "Russia", "%z", "695786400000"], ["-720", "Russia", "%z", "1269741600000"], ["-660", "Russia", "%z", "1301191200000"], ["-720", "-", "%z", null]], "Asia/Anadyr": [["-709.9333333333334", "-", "LMT", "-1441152000000"], ["-720", "-", "%z", "-1247529600000"], ["-780", "Russia", "%z", "386467200000"], ["-720", "Russia", "%z", "670384800000"], ["-660", "Russia", "%z", "695786400000"], ["-720", "Russia", "%z", "1269741600000"], ["-660", "Russia", "%z", "1301191200000"], ["-720", "-", "%z", null]], "Europe/Belgrade": [["-82", "-", "LMT", "-2682374400000"], ["-60", "-", "CET", "-905821200000"], ["-60", "C-Eur", "CE%sT", "-757468800000"], ["-60", "-", "CET", "-777938400000"], ["-60", "1:00", "CEST", "-766620000000"], ["-60", "-", "CET", "407203200000"], ["-60", "EU", "CE%sT", null]], "Europe/Madrid": [["14.733333333333334", "-", "LMT", "-2177452800000"], ["0", "Spain", "WE%sT", "-940208400000"], ["-60", "Spain", "CE%sT", "315446400000"], ["-60", "EU", "CE%sT", null]], "Africa/Ceuta": [["21.26666666666667", "-", "LMT", "-2177452800000"], ["0", "-", "WET", "-1630112400000"], ["0", "1:00", "WEST", "-1616806800000"], ["0", "-", "WET", "-1420156800000"], ["0", "Spain", "WE%sT", "-1262390400000"], ["0", "-", "WET", "-63244800000"], ["0", "SpainAfrica", "WE%sT", "448243200000"], ["-60", "-", "CET", "536371200000"], ["-60", "EU", "CE%sT", null]], "Atlantic/Canary": [["61.6", "-", "LMT", "-1509667200000"], ["60", "-", "%z", "-733878000000"], ["0", "-", "WET", "323827200000"], ["0", "1:00", "WEST", "338950800000"], ["0", "EU", "WE%sT", null]], "Europe/Zurich": [["-34.13333333333333", "-", "LMT", "-3675196800000"], ["-29.76666666666667", "-", "BMT", "-2385244800000"], ["-60", "Swiss", "CE%sT", "378604800000"], ["-60", "EU", "CE%sT", null]], "Europe/Istanbul": [["-115.86666666666667", "-", "LMT", "-2808604800000"], ["-116.93333333333332", "-", "IMT", "-1869868800000"], ["-120", "Turkey", "EE%sT", "267926400000"], ["-180", "Turkey", "%z", "468122400000"], ["-120", "Turkey", "EE%sT", "1199059200000"], ["-120", "EU", "EE%sT", "1301187600000"], ["-120", "-", "EET", "1301274000000"], ["-120", "EU", "EE%sT", "1396141200000"], ["-120", "-", "EET", "1396227600000"], ["-120", "EU", "EE%sT", "1445734800000"], ["-120", "1:00", "EEST", "1446944400000"], ["-120", "EU", "EE%sT", "1473206400000"], ["-180", "-", "%z", null]], "Europe/Kyiv": [["-122.06666666666668", "-", "LMT", "-2808604800000"], ["-122.06666666666668", "-", "KMT", "-1441152000000"], ["-120", "-", "EET", "-1247529600000"], ["-180", "-", "MSK", "-892512000000"], ["-60", "C-Eur", "CE%sT", "-825379200000"], ["-180", "Russia", "MSK/MSD", "646797600000"], ["-120", "1:00", "EEST", "686113200000"], ["-120", "C-Eur", "EE%sT", "831945600000"], ["-120", "EU", "EE%sT", null]], Factory: [["0", "-", "-00", null]], null: [], "America/New_York": [["296.0333333333333", "-", "LMT", "-2717650800000"], ["300", "US", "E%sT", "-1546387200000"], ["300", "NYC", "E%sT", "-852163200000"], ["300", "US", "E%sT", "-725932800000"], ["300", "NYC", "E%sT", "-63244800000"], ["300", "US", "E%sT", null]], "America/Chicago": [["350.6", "-", "LMT", "-2717647200000"], ["360", "US", "C%sT", "-1546387200000"], ["360", "Chicago", "C%sT", "-1067810400000"], ["300", "-", "EST", "-1045432800000"], ["360", "Chicago", "C%sT", "-852163200000"], ["360", "US", "C%sT", "-725932800000"], ["360", "Chicago", "C%sT", "-63244800000"], ["360", "US", "C%sT", null]], "America/North_Dakota/Center": [["405.2", "-", "LMT", "-2717643600000"], ["420", "US", "M%sT", "719978400000"], ["360", "US", "C%sT", null]], "America/North_Dakota/New_Salem": [["405.65", "-", "LMT", "-2717643600000"], ["420", "US", "M%sT", "1067133600000"], ["360", "US", "C%sT", null]], "America/North_Dakota/Beulah": [["407.1166666666667", "-", "LMT", "-2717643600000"], ["420", "US", "M%sT", "1289095200000"], ["360", "US", "C%sT", null]], "America/Denver": [["419.93333333333334", "-", "LMT", "-2717643600000"], ["420", "US", "M%sT", "-1546387200000"], ["420", "Denver", "M%sT", "-852163200000"], ["420", "US", "M%sT", "-725932800000"], ["420", "Denver", "M%sT", "-63244800000"], ["420", "US", "M%sT", null]], "America/Los_Angeles": [["472.9666666666667", "-", "LMT", "-2717640000000"], ["480", "US", "P%sT", "-725932800000"], ["480", "CA", "P%sT", "-63244800000"], ["480", "US", "P%sT", null]], "America/Juneau": [["-902.3166666666666", "-", "LMT", "-3225169588000"], ["537.6833333333334", "-", "LMT", "-2188987200000"], ["480", "-", "PST", "-852163200000"], ["480", "US", "P%sT", "-725932800000"], ["480", "-", "PST", "-86400000"], ["480", "US", "P%sT", "325648800000"], ["540", "US", "Y%sT", "341373600000"], ["480", "US", "P%sT", "436327200000"], ["540", "US", "Y%sT", "438998400000"], ["540", "US", "AK%sT", null]], "America/Sitka": [["-898.7833333333334", "-", "LMT", "-3225169800000"], ["541.2166666666666", "-", "LMT", "-2188987200000"], ["480", "-", "PST", "-852163200000"], ["480", "US", "P%sT", "-725932800000"], ["480", "-", "PST", "-86400000"], ["480", "US", "P%sT", "436327200000"], ["540", "US", "Y%sT", "438998400000"], ["540", "US", "AK%sT", null]], "America/Metlakatla": [["-913.7", "-", "LMT", "-3225168905000"], ["526.3", "-", "LMT", "-2188987200000"], ["480", "-", "PST", "-852163200000"], ["480", "US", "P%sT", "-725932800000"], ["480", "-", "PST", "-86400000"], ["480", "US", "P%sT", "436327200000"], ["480", "-", "PST", "1446343200000"], ["540", "US", "AK%sT", "1541296800000"], ["480", "-", "PST", "1547949600000"], ["540", "US", "AK%sT", null]], "America/Yakutat": [["-881.0833333333334", "-", "LMT", "-3225170862000"], ["558.9166666666666", "-", "LMT", "-2188987200000"], ["540", "-", "YST", "-852163200000"], ["540", "US", "Y%sT", "-725932800000"], ["540", "-", "YST", "-86400000"], ["540", "US", "Y%sT", "438998400000"], ["540", "US", "AK%sT", null]], "America/Anchorage": [["-840.4", "-", "LMT", "-3225173303000"], ["599.6", "-", "LMT", "-2188987200000"], ["600", "-", "AST", "-852163200000"], ["600", "US", "A%sT", "-86918400000"], ["600", "-", "AHST", "-86400000"], ["600", "US", "AH%sT", "436327200000"], ["540", "US", "Y%sT", "438998400000"], ["540", "US", "AK%sT", null]], "America/Nome": [["-778.3666666666667", "-", "LMT", "-3225177025000"], ["661.6333333333333", "-", "LMT", "-2188987200000"], ["660", "-", "NST", "-852163200000"], ["660", "US", "N%sT", "-725932800000"], ["660", "-", "NST", "-86918400000"], ["660", "-", "BST", "-86400000"], ["660", "US", "B%sT", "436327200000"], ["540", "US", "Y%sT", "438998400000"], ["540", "US", "AK%sT", null]], "America/Adak": [["-733.3666666666667", "-", "LMT", "-3225179725000"], ["706.6333333333333", "-", "LMT", "-2188987200000"], ["660", "-", "NST", "-852163200000"], ["660", "US", "N%sT", "-725932800000"], ["660", "-", "NST", "-86918400000"], ["660", "-", "BST", "-86400000"], ["660", "US", "B%sT", "436327200000"], ["600", "US", "AH%sT", "438998400000"], ["600", "US", "H%sT", null]], "Pacific/Honolulu": [["631.4333333333334", "-", "LMT", "-2334139200000"], ["630", "-", "HST", "-1157320800000"], ["630", "1:00", "HDT", "-1155470400000"], ["630", "US", "H%sT", "-712188000000"], ["600", "-", "HST", null]], "America/Phoenix": [["448.3", "-", "LMT", "-2717643600000"], ["420", "US", "M%sT", "-820540740000"], ["420", "-", "MST", "-812678340000"], ["420", "US", "M%sT", "-796867140000"], ["420", "-", "MST", "-63244800000"], ["420", "US", "M%sT", "-56246400000"], ["420", "-", "MST", null]], "America/Boise": [["464.81666666666666", "-", "LMT", "-2717640000000"], ["480", "US", "P%sT", "-1471816800000"], ["420", "US", "M%sT", "157680000000"], ["420", "-", "MST", "129088800000"], ["420", "US", "M%sT", null]], "America/Indiana/Indianapolis": [["344.6333333333333", "-", "LMT", "-2717647200000"], ["360", "US", "C%sT", "-1546387200000"], ["360", "Indianapolis", "C%sT", "-852163200000"], ["360", "US", "C%sT", "-725932800000"], ["360", "Indianapolis", "C%sT", "-463615200000"], ["300", "-", "EST", "-386805600000"], ["360", "-", "CST", "-368661600000"], ["300", "-", "EST", "-86400000"], ["300", "US", "E%sT", "62985600000"], ["300", "-", "EST", "1167523200000"], ["300", "US", "E%sT", null]], "America/Indiana/Marengo": [["345.3833333333333", "-", "LMT", "-2717647200000"], ["360", "US", "C%sT", "-568166400000"], ["360", "Marengo", "C%sT", "-273708000000"], ["300", "-", "EST", "-86400000"], ["300", "US", "E%sT", "126669600000"], ["360", "1:00", "CDT", "152071200000"], ["300", "US", "E%sT", "220838400000"], ["300", "-", "EST", "1167523200000"], ["300", "US", "E%sT", null]], "America/Indiana/Vincennes": [["350.1166666666667", "-", "LMT", "-2717647200000"], ["360", "US", "C%sT", "-725932800000"], ["360", "Vincennes", "C%sT", "-179359200000"], ["300", "-", "EST", "-86400000"], ["300", "US", "E%sT", "62985600000"], ["300", "-", "EST", "1143943200000"], ["360", "US", "C%sT", "1194141600000"], ["300", "US", "E%sT", null]], "America/Indiana/Tell_City": [["347.05", "-", "LMT", "-2717647200000"], ["360", "US", "C%sT", "-725932800000"], ["360", "Perry", "C%sT", "-179359200000"], ["300", "-", "EST", "-68680800000"], ["360", "US", "C%sT", "-21506400000"], ["300", "US", "E%sT", "62985600000"], ["300", "-", "EST", "1143943200000"], ["360", "US", "C%sT", null]], "America/Indiana/Petersburg": [["349.1166666666667", "-", "LMT", "-2717647200000"], ["360", "US", "C%sT", "-441936000000"], ["360", "Pike", "C%sT", "-147909600000"], ["300", "-", "EST", "-100130400000"], ["360", "US", "C%sT", "247024800000"], ["300", "-", "EST", "1143943200000"], ["360", "US", "C%sT", "1194141600000"], ["300", "US", "E%sT", null]], "America/Indiana/Knox": [["346.5", "-", "LMT", "-2717647200000"], ["360", "US", "C%sT", "-694396800000"], ["360", "Starke", "C%sT", "-242258400000"], ["300", "-", "EST", "-195084000000"], ["360", "US", "C%sT", "688528800000"], ["300", "-", "EST", "1143943200000"], ["360", "US", "C%sT", null]], "America/Indiana/Winamac": [["346.4166666666667", "-", "LMT", "-2717647200000"], ["360", "US", "C%sT", "-725932800000"], ["360", "Pulaski", "C%sT", "-273708000000"], ["300", "-", "EST", "-86400000"], ["300", "US", "E%sT", "62985600000"], ["300", "-", "EST", "1143943200000"], ["360", "US", "C%sT", "1173578400000"], ["300", "US", "E%sT", null]], "America/Indiana/Vevay": [["340.2666666666667", "-", "LMT", "-2717647200000"], ["360", "US", "C%sT", "-495064800000"], ["300", "-", "EST", "-86400000"], ["300", "US", "E%sT", "126144000000"], ["300", "-", "EST", "1167523200000"], ["300", "US", "E%sT", null]], "America/Kentucky/Louisville": [["343.0333333333333", "-", "LMT", "-2717647200000"], ["360", "US", "C%sT", "-1514851200000"], ["360", "Louisville", "C%sT", "-852163200000"], ["360", "US", "C%sT", "-725932800000"], ["360", "Louisville", "C%sT", "-266450400000"], ["300", "-", "EST", "-31622400000"], ["300", "US", "E%sT", "126669600000"], ["360", "1:00", "CDT", "152071200000"], ["300", "US", "E%sT", null]], "America/Kentucky/Monticello": [["339.4", "-", "LMT", "-2717647200000"], ["360", "US", "C%sT", "-725932800000"], ["360", "-", "CST", "-31622400000"], ["360", "US", "C%sT", "972784800000"], ["300", "US", "E%sT", null]], "America/Detroit": [["332.18333333333334", "-", "LMT", "-2019772800000"], ["360", "-", "CST", "-1724104800000"], ["300", "-", "EST", "-852163200000"], ["300", "US", "E%sT", "-725932800000"], ["300", "Detroit", "E%sT", "-80524740000"], ["300", "US", "E%sT", "-86400000"], ["300", "-", "EST", "126144000000"], ["300", "US", "E%sT", "189216000000"], ["300", "-", "EST", "167796000000"], ["300", "US", "E%sT", null]], "America/Menominee": [["350.45", "-", "LMT", "-2659780800000"], ["360", "US", "C%sT", "-725932800000"], ["360", "Menominee", "C%sT", "-21506400000"], ["300", "-", "EST", "104896800000"], ["360", "US", "C%sT", null]], "America/St_Johns": [["210.86666666666665", "-", "LMT", "-2682374400000"], ["210.86666666666665", "StJohns", "N%sT", "-1609545600000"], ["210.86666666666665", "Canada", "N%sT", "-1578009600000"], ["210.86666666666665", "StJohns", "N%sT", "-1096934400000"], ["210", "StJohns", "N%sT", "-872380800000"], ["210", "Canada", "N%sT", "-725932800000"], ["210", "StJohns", "N%sT", "1320105600000"], ["210", "Canada", "N%sT", null]], "America/Goose_Bay": [["241.66666666666666", "-", "LMT", "-2682374400000"], ["210.86666666666665", "-", "NST", "-1609545600000"], ["210.86666666666665", "Canada", "N%sT", "-1578009600000"], ["210.86666666666665", "-", "NST", "-1096934400000"], ["210", "-", "NST", "-1041465600000"], ["210", "StJohns", "N%sT", "-872380800000"], ["210", "Canada", "N%sT", "-725932800000"], ["210", "StJohns", "N%sT", "-119916000000"], ["240", "StJohns", "A%sT", "1320105600000"], ["240", "Canada", "A%sT", null]], "America/Halifax": [["254.4", "-", "LMT", "-2131660800000"], ["240", "Halifax", "A%sT", "-1609545600000"], ["240", "Canada", "A%sT", "-1578009600000"], ["240", "Halifax", "A%sT", "-880236000000"], ["240", "Canada", "A%sT", "-725932800000"], ["240", "Halifax", "A%sT", "157680000000"], ["240", "Canada", "A%sT", null]], "America/Glace_Bay": [["239.8", "-", "LMT", "-2131660800000"], ["240", "Canada", "A%sT", "-505008000000"], ["240", "Halifax", "A%sT", "-473472000000"], ["240", "-", "AST", "94608000000"], ["240", "Halifax", "A%sT", "157680000000"], ["240", "Canada", "A%sT", null]], "America/Moncton": [["259.1333333333333", "-", "LMT", "-2715897600000"], ["300", "-", "EST", "-2131660800000"], ["240", "Canada", "A%sT", "-1136160000000"], ["240", "Moncton", "A%sT", "-852163200000"], ["240", "Canada", "A%sT", "-725932800000"], ["240", "Moncton", "A%sT", "126144000000"], ["240", "Canada", "A%sT", "757296000000"], ["240", "Moncton", "A%sT", "1199059200000"], ["240", "Canada", "A%sT", null]], "America/Toronto": [["317.5333333333333", "-", "LMT", "-2335305600000"], ["300", "Canada", "E%sT", "-1578009600000"], ["300", "Toronto", "E%sT", "-880236000000"], ["300", "Canada", "E%sT", "-725932800000"], ["300", "Toronto", "E%sT", "157680000000"], ["300", "Canada", "E%sT", null]], "America/Winnipeg": [["388.6", "-", "LMT", "-2602281600000"], ["360", "Winn", "C%sT", "1167523200000"], ["360", "Canada", "C%sT", null]], "America/Regina": [["418.6", "-", "LMT", "-2030227200000"], ["420", "Regina", "M%sT", "-307749600000"], ["360", "-", "CST", null]], "America/Swift_Current": [["431.3333333333333", "-", "LMT", "-2030227200000"], ["420", "Canada", "M%sT", "-749599200000"], ["420", "Regina", "M%sT", "-599702400000"], ["420", "Swift", "M%sT", "70941600000"], ["360", "-", "CST", null]], "America/Edmonton": [["453.8666666666667", "-", "LMT", "-1998691200000"], ["420", "Edm", "M%sT", "567907200000"], ["420", "Canada", "M%sT", null]], "America/Vancouver": [["492.4666666666667", "-", "LMT", "-2682374400000"], ["480", "Vanc", "P%sT", "567907200000"], ["480", "Canada", "P%sT", null]], "America/Dawson_Creek": [["480.93333333333334", "-", "LMT", "-2682374400000"], ["480", "Canada", "P%sT", "-694396800000"], ["480", "Vanc", "P%sT", "83988000000"], ["420", "-", "MST", null]], "America/Fort_Nelson": [["490.7833333333333", "-", "LMT", "-2682374400000"], ["480", "Vanc", "P%sT", "-725932800000"], ["480", "-", "PST", "-694396800000"], ["480", "Vanc", "P%sT", "567907200000"], ["480", "Canada", "P%sT", "1425780000000"], ["420", "-", "MST", null]], "America/Iqaluit": [["0", "-", "-00", "-865296000000"], ["300", "NT_YK", "E%sT", "941335200000"], ["360", "Canada", "C%sT", "972784800000"], ["300", "Canada", "E%sT", null]], "America/Resolute": [["0", "-", "-00", "-704937600000"], ["360", "NT_YK", "C%sT", "972784800000"], ["300", "-", "EST", "986094000000"], ["360", "Canada", "C%sT", "1162087200000"], ["300", "-", "EST", "1173582000000"], ["360", "Canada", "C%sT", null]], "America/Rankin_Inlet": [["0", "-", "-00", "-378777600000"], ["360", "NT_YK", "C%sT", "972784800000"], ["300", "-", "EST", "986094000000"], ["360", "Canada", "C%sT", null]], "America/Cambridge_Bay": [["0", "-", "-00", "-1546387200000"], ["420", "NT_YK", "M%sT", "941335200000"], ["360", "Canada", "C%sT", "972784800000"], ["300", "-", "EST", "973382400000"], ["360", "-", "CST", "986094000000"], ["420", "Canada", "M%sT", null]], "America/Inuvik": [["0", "-", "-00", "-505008000000"], ["480", "NT_YK", "P%sT", "291780000000"], ["420", "NT_YK", "M%sT", "347068800000"], ["420", "Canada", "M%sT", null]], "America/Whitehorse": [["540.2", "-", "LMT", "-2189030400000"], ["540", "NT_YK", "Y%sT", "-126316800000"], ["540", "Yukon", "Y%sT", "-121305600000"], ["480", "-", "PST", "347068800000"], ["480", "Canada", "P%sT", "1604188800000"], ["420", "-", "MST", null]], "America/Dawson": [["557.6666666666666", "-", "LMT", "-2189030400000"], ["540", "NT_YK", "Y%sT", "-126316800000"], ["540", "Yukon", "Y%sT", "120614400000"], ["480", "-", "PST", "347068800000"], ["480", "Canada", "P%sT", "1604188800000"], ["420", "-", "MST", null]], "America/Cancun": [["347.06666666666666", "-", "LMT", "-1514743200000"], ["360", "-", "CST", "378180000000"], ["300", "-", "EST", "410486400000"], ["360", "Mexico", "C%sT", "877831200000"], ["300", "Mexico", "E%sT", "902023200000"], ["360", "Mexico", "C%sT", "1422756000000"], ["300", "-", "EST", null]], "America/Merida": [["358.4666666666667", "-", "LMT", "-1514743200000"], ["360", "-", "CST", "378180000000"], ["300", "-", "EST", "405050400000"], ["360", "Mexico", "C%sT", null]], "America/Matamoros": [["390", "-", "LMT", "-1514743200000"], ["360", "-", "CST", "599529600000"], ["360", "US", "C%sT", "631065600000"], ["360", "Mexico", "C%sT", "1293753600000"], ["360", "US", "C%sT", null]], "America/Monterrey": [["401.2666666666667", "-", "LMT", "-1514743200000"], ["420", "-", "MST", "-1343174400000"], ["360", "-", "CST", "-1234828800000"], ["420", "Mexico", "M%sT", "-1191369600000"], ["360", "-", "CST", "599529600000"], ["360", "US", "C%sT", "631065600000"], ["360", "Mexico", "C%sT", null]], "America/Mexico_City": [["396.6", "-", "LMT", "-1514739600000"], ["420", "-", "MST", "-1343174400000"], ["360", "-", "CST", "-1234828800000"], ["420", "Mexico", "M%sT", "-1191369600000"], ["360", "Mexico", "C%sT", "1001815200000"], ["360", "-", "CST", "1014163200000"], ["360", "Mexico", "C%sT", null]], "America/Ciudad_Juarez": [["425.93333333333334", "-", "LMT", "-1514739600000"], ["420", "-", "MST", "-1343174400000"], ["360", "-", "CST", "-1234828800000"], ["420", "Mexico", "M%sT", "-1191369600000"], ["360", "-", "CST", "851990400000"], ["360", "Mexico", "C%sT", "915062400000"], ["360", "-", "CST", "891399600000"], ["420", "Mexico", "M%sT", "1293753600000"], ["420", "US", "M%sT", "1667095200000"], ["360", "-", "CST", "1669766400000"], ["420", "US", "M%sT", null]], "America/Ojinaga": [["417.6666666666667", "-", "LMT", "-1514739600000"], ["420", "-", "MST", "-1343174400000"], ["360", "-", "CST", "-1234828800000"], ["420", "Mexico", "M%sT", "-1191369600000"], ["360", "-", "CST", "851990400000"], ["360", "Mexico", "C%sT", "915062400000"], ["360", "-", "CST", "891399600000"], ["420", "Mexico", "M%sT", "1293753600000"], ["420", "US", "M%sT", "1667095200000"], ["360", "-", "CST", "1669766400000"], ["360", "US", "C%sT", null]], "America/Chihuahua": [["424.3333333333333", "-", "LMT", "-1514739600000"], ["420", "-", "MST", "-1343174400000"], ["360", "-", "CST", "-1234828800000"], ["420", "Mexico", "M%sT", "-1191369600000"], ["360", "-", "CST", "851990400000"], ["360", "Mexico", "C%sT", "915062400000"], ["360", "-", "CST", "891399600000"], ["420", "Mexico", "M%sT", "1667095200000"], ["360", "-", "CST", null]], "America/Hermosillo": [["443.8666666666667", "-", "LMT", "-1514739600000"], ["420", "-", "MST", "-1343174400000"], ["360", "-", "CST", "-1234828800000"], ["420", "Mexico", "M%sT", "-1191369600000"], ["360", "-", "CST", "-873849600000"], ["420", "-", "MST", "851990400000"], ["420", "Mexico", "M%sT", "946598400000"], ["420", "-", "MST", null]], "America/Mazatlan": [["425.6666666666667", "-", "LMT", "-1514739600000"], ["420", "-", "MST", "-1343174400000"], ["360", "-", "CST", "-1234828800000"], ["420", "Mexico", "M%sT", "-1191369600000"], ["360", "-", "CST", "-873849600000"], ["420", "-", "MST", "31449600000"], ["420", "Mexico", "M%sT", null]], "America/Bahia_Banderas": [["421", "-", "LMT", "-1514739600000"], ["420", "-", "MST", "-1343174400000"], ["360", "-", "CST", "-1234828800000"], ["420", "Mexico", "M%sT", "-1191369600000"], ["360", "-", "CST", "-873849600000"], ["420", "-", "MST", "31449600000"], ["420", "Mexico", "M%sT", "1270346400000"], ["360", "Mexico", "C%sT", null]], "America/Tijuana": [["468.06666666666666", "-", "LMT", "-1514739600000"], ["420", "-", "MST", "-1420156800000"], ["480", "-", "PST", "-1343174400000"], ["420", "-", "MST", "-1234828800000"], ["480", "-", "PST", "-1222992000000"], ["480", "1:00", "PDT", "-1207267200000"], ["480", "-", "PST", "-873849600000"], ["480", "1:00", "PWT", "-769395600000"], ["480", "1:00", "PPT", "-761443200000"], ["480", "-", "PST", "-686102400000"], ["480", "1:00", "PDT", "-661564800000"], ["480", "-", "PST", "-620784000000"], ["480", "1:00", "PDT", "-608169600000"], ["480", "-", "PST", "-589413600000"], ["480", "1:00", "PDT", "-576108000000"], ["480", "-", "PST", "-557964000000"], ["480", "1:00", "PDT", "-544658400000"], ["480", "-", "PST", "-473472000000"], ["480", "CA", "P%sT", "-252547200000"], ["480", "-", "PST", "220838400000"], ["480", "US", "P%sT", "851990400000"], ["480", "Mexico", "P%sT", "1009756800000"], ["480", "US", "P%sT", "1014163200000"], ["480", "Mexico", "P%sT", "1293753600000"], ["480", "US", "P%sT", null]], "America/Barbados": [["238.48333333333335", "-", "LMT", "-1841270400000"], ["240", "Barb", "A%sT", "-789004800000"], ["240", "Barb", "AST/-0330", "-757468800000"], ["240", "Barb", "A%sT", null]], "America/Belize": [["352.8", "-", "LMT", "-1822521600000"], ["360", "Belize", "%s", null]], "Atlantic/Bermuda": [["259.3", "-", "LMT", "-2493072000000"], ["259.3", "Bermuda", "BMT/BST", "-1262296800000"], ["240", "Bermuda", "A%sT", "136346400000"], ["240", "Canada", "A%sT", "220838400000"], ["240", "US", "A%sT", null]], "America/Costa_Rica": [["336.2166666666667", "-", "LMT", "-2493072000000"], ["336.2166666666667", "-", "SJMT", "-1545091200000"], ["360", "CR", "C%sT", null]], "America/Havana": [["329.4666666666667", "-", "LMT", "-2493072000000"], ["329.6", "-", "HMT", "-1402833600000"], ["300", "Cuba", "C%sT", null]], "America/Santo_Domingo": [["279.6", "-", "LMT", "-2493072000000"], ["280", "-", "SDMT", "-1159790400000"], ["300", "DR", "%s", "152064000000"], ["240", "-", "AST", "972784800000"], ["300", "US", "E%sT", "975805200000"], ["240", "-", "AST", null]], "America/El_Salvador": [["356.8", "-", "LMT", "-1514851200000"], ["360", "Salv", "C%sT", null]], "America/Guatemala": [["362.06666666666666", "-", "LMT", "-1617062400000"], ["360", "Guat", "C%sT", null]], "America/Port-au-Prince": [["289.3333333333333", "-", "LMT", "-2493072000000"], ["289", "-", "PPMT", "-1670500800000"], ["300", "Haiti", "E%sT", null]], "America/Tegucigalpa": [["348.8666666666667", "-", "LMT", "-1538524800000"], ["360", "Hond", "C%sT", null]], "America/Jamaica": [["307.1666666666667", "-", "LMT", "-2493072000000"], ["307.1666666666667", "-", "KMT", "-1827705600000"], ["300", "-", "EST", "157680000000"], ["300", "US", "E%sT", "473299200000"], ["300", "-", "EST", null]], "America/Martinique": [["244.33333333333334", "-", "LMT", "-2493072000000"], ["244.33333333333334", "-", "FFMT", "-1851552000000"], ["240", "-", "AST", "323827200000"], ["240", "1:00", "ADT", "338947200000"], ["240", "-", "AST", null]], "America/Managua": [["345.1333333333333", "-", "LMT", "-2493072000000"], ["345.2", "-", "MMT", "-1121126400000"], ["360", "-", "CST", "105062400000"], ["300", "-", "EST", "161740800000"], ["360", "Nic", "C%sT", "694238400000"], ["300", "-", "EST", "717292800000"], ["360", "-", "CST", "757296000000"], ["300", "-", "EST", "883526400000"], ["360", "Nic", "C%sT", null]], "America/Panama": [["318.1333333333333", "-", "LMT", "-2493072000000"], ["319.6", "-", "CMT", "-1946937600000"], ["300", "-", "EST", null]], "America/Puerto_Rico": [["264.4166666666667", "-", "LMT", "-2233051200000"], ["240", "-", "AST", "-873072000000"], ["240", "US", "A%sT", "-725932800000"], ["240", "-", "AST", null]], "America/Miquelon": [["224.66666666666666", "-", "LMT", "-1847664000000"], ["240", "-", "AST", "325987200000"], ["180", "-", "%z", "567907200000"], ["180", "Canada", "%z", null]], "America/Grand_Turk": [["284.5333333333333", "-", "LMT", "-2493072000000"], ["307.1666666666667", "-", "KMT", "-1827705600000"], ["300", "-", "EST", "315446400000"], ["300", "US", "E%sT", "1425780000000"], ["240", "-", "AST", "1520737200000"], ["300", "US", "E%sT", null]], "America/Argentina/Buenos_Aires": [["233.8", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "938908800000"], ["240", "Arg", "%z", "952041600000"], ["180", "Arg", "%z", null]], "America/Argentina/Cordoba": [["256.8", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "667958400000"], ["240", "-", "%z", "687916800000"], ["180", "Arg", "%z", "938908800000"], ["240", "Arg", "%z", "952041600000"], ["180", "Arg", "%z", null]], "America/Argentina/Salta": [["261.66666666666663", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "667958400000"], ["240", "-", "%z", "687916800000"], ["180", "Arg", "%z", "938908800000"], ["240", "Arg", "%z", "952041600000"], ["180", "Arg", "%z", "1224288000000"], ["180", "-", "%z", null]], "America/Argentina/Tucuman": [["260.8666666666667", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "667958400000"], ["240", "-", "%z", "687916800000"], ["180", "Arg", "%z", "938908800000"], ["240", "Arg", "%z", "952041600000"], ["180", "-", "%z", "1086048000000"], ["240", "-", "%z", "1087084800000"], ["180", "Arg", "%z", null]], "America/Argentina/La_Rioja": [["267.4", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "667785600000"], ["240", "-", "%z", "673574400000"], ["180", "Arg", "%z", "938908800000"], ["240", "Arg", "%z", "952041600000"], ["180", "-", "%z", "1086048000000"], ["240", "-", "%z", "1087689600000"], ["180", "Arg", "%z", "1224288000000"], ["180", "-", "%z", null]], "America/Argentina/San_Juan": [["274.06666666666666", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "667785600000"], ["240", "-", "%z", "673574400000"], ["180", "Arg", "%z", "938908800000"], ["240", "Arg", "%z", "952041600000"], ["180", "-", "%z", "1085961600000"], ["240", "-", "%z", "1090713600000"], ["180", "Arg", "%z", "1224288000000"], ["180", "-", "%z", null]], "America/Argentina/Jujuy": [["261.2", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "636508800000"], ["240", "-", "%z", "657072000000"], ["240", "1:00", "%z", "669168000000"], ["240", "-", "%z", "686707200000"], ["180", "1:00", "%z", "725760000000"], ["180", "Arg", "%z", "938908800000"], ["240", "Arg", "%z", "952041600000"], ["180", "Arg", "%z", "1224288000000"], ["180", "-", "%z", null]], "America/Argentina/Catamarca": [["263.1333333333333", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "667958400000"], ["240", "-", "%z", "687916800000"], ["180", "Arg", "%z", "938908800000"], ["240", "Arg", "%z", "952041600000"], ["180", "-", "%z", "1086048000000"], ["240", "-", "%z", "1087689600000"], ["180", "Arg", "%z", "1224288000000"], ["180", "-", "%z", null]], "America/Argentina/Mendoza": [["275.2666666666667", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "636508800000"], ["240", "-", "%z", "655948800000"], ["240", "1:00", "%z", "667785600000"], ["240", "-", "%z", "687484800000"], ["240", "1:00", "%z", "699408000000"], ["240", "-", "%z", "719366400000"], ["180", "Arg", "%z", "938908800000"], ["240", "Arg", "%z", "952041600000"], ["180", "-", "%z", "1085270400000"], ["240", "-", "%z", "1096156800000"], ["180", "Arg", "%z", "1224288000000"], ["180", "-", "%z", null]], "America/Argentina/San_Luis": [["265.4", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "662601600000"], ["180", "1:00", "%z", "637372800000"], ["240", "-", "%z", "655948800000"], ["240", "1:00", "%z", "667785600000"], ["240", "-", "%z", "675734400000"], ["180", "-", "%z", "938908800000"], ["240", "1:00", "%z", "952041600000"], ["180", "-", "%z", "1085961600000"], ["240", "-", "%z", "1090713600000"], ["180", "Arg", "%z", "1200873600000"], ["240", "SanLuis", "%z", "1255219200000"], ["180", "-", "%z", null]], "America/Argentina/Rio_Gallegos": [["276.8666666666667", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "938908800000"], ["240", "Arg", "%z", "952041600000"], ["180", "-", "%z", "1086048000000"], ["240", "-", "%z", "1087689600000"], ["180", "Arg", "%z", "1224288000000"], ["180", "-", "%z", null]], "America/Argentina/Ushuaia": [["273.2", "-", "LMT", "-2372112000000"], ["256.8", "-", "CMT", "-1567468800000"], ["240", "-", "%z", "-1233446400000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "938908800000"], ["240", "Arg", "%z", "952041600000"], ["180", "-", "%z", "1085875200000"], ["240", "-", "%z", "1087689600000"], ["180", "Arg", "%z", "1224288000000"], ["180", "-", "%z", null]], "America/La_Paz": [["272.6", "-", "LMT", "-2493072000000"], ["272.6", "-", "CMT", "-1205971200000"], ["272.6", "1:00", "BST", "-1192320000000"], ["240", "-", "%z", null]], "America/Noronha": [["129.66666666666669", "-", "LMT", "-1735776000000"], ["120", "Brazil", "%z", "653529600000"], ["120", "-", "%z", "938649600000"], ["120", "Brazil", "%z", "971568000000"], ["120", "-", "%z", "1000339200000"], ["120", "Brazil", "%z", "1033430400000"], ["120", "-", "%z", null]], "America/Belem": [["193.93333333333334", "-", "LMT", "-1735776000000"], ["180", "Brazil", "%z", "590025600000"], ["180", "-", "%z", null]], "America/Santarem": [["218.8", "-", "LMT", "-1735776000000"], ["240", "Brazil", "%z", "590025600000"], ["240", "-", "%z", "1214265600000"], ["180", "-", "%z", null]], "America/Fortaleza": [["154", "-", "LMT", "-1735776000000"], ["180", "Brazil", "%z", "653529600000"], ["180", "-", "%z", "938649600000"], ["180", "Brazil", "%z", "972172800000"], ["180", "-", "%z", "1000339200000"], ["180", "Brazil", "%z", "1033430400000"], ["180", "-", "%z", null]], "America/Recife": [["139.6", "-", "LMT", "-1735776000000"], ["180", "Brazil", "%z", "653529600000"], ["180", "-", "%z", "938649600000"], ["180", "Brazil", "%z", "971568000000"], ["180", "-", "%z", "1000339200000"], ["180", "Brazil", "%z", "1033430400000"], ["180", "-", "%z", null]], "America/Araguaina": [["192.8", "-", "LMT", "-1735776000000"], ["180", "Brazil", "%z", "653529600000"], ["180", "-", "%z", "811036800000"], ["180", "Brazil", "%z", "1064361600000"], ["180", "-", "%z", "1350777600000"], ["180", "Brazil", "%z", "1377993600000"], ["180", "-", "%z", null]], "America/Maceio": [["142.86666666666665", "-", "LMT", "-1735776000000"], ["180", "Brazil", "%z", "653529600000"], ["180", "-", "%z", "813542400000"], ["180", "Brazil", "%z", "841795200000"], ["180", "-", "%z", "938649600000"], ["180", "Brazil", "%z", "972172800000"], ["180", "-", "%z", "1000339200000"], ["180", "Brazil", "%z", "1033430400000"], ["180", "-", "%z", null]], "America/Bahia": [["154.06666666666666", "-", "LMT", "-1735776000000"], ["180", "Brazil", "%z", "1064361600000"], ["180", "-", "%z", "1318723200000"], ["180", "Brazil", "%z", "1350777600000"], ["180", "-", "%z", null]], "America/Sao_Paulo": [["186.46666666666667", "-", "LMT", "-1735776000000"], ["180", "Brazil", "%z", "-195436800000"], ["180", "1:00", "%z", "-157852800000"], ["180", "Brazil", "%z", null]], "America/Campo_Grande": [["218.46666666666667", "-", "LMT", "-1735776000000"], ["240", "Brazil", "%z", null]], "America/Cuiaba": [["224.33333333333334", "-", "LMT", "-1735776000000"], ["240", "Brazil", "%z", "1064361600000"], ["240", "-", "%z", "1096588800000"], ["240", "Brazil", "%z", null]], "America/Porto_Velho": [["255.6", "-", "LMT", "-1735776000000"], ["240", "Brazil", "%z", "590025600000"], ["240", "-", "%z", null]], "America/Boa_Vista": [["242.66666666666666", "-", "LMT", "-1735776000000"], ["240", "Brazil", "%z", "590025600000"], ["240", "-", "%z", "938649600000"], ["240", "Brazil", "%z", "971568000000"], ["240", "-", "%z", null]], "America/Manaus": [["240.06666666666666", "-", "LMT", "-1735776000000"], ["240", "Brazil", "%z", "590025600000"], ["240", "-", "%z", "749174400000"], ["240", "Brazil", "%z", "780192000000"], ["240", "-", "%z", null]], "America/Eirunepe": [["279.4666666666667", "-", "LMT", "-1735776000000"], ["300", "Brazil", "%z", "590025600000"], ["300", "-", "%z", "749174400000"], ["300", "Brazil", "%z", "780192000000"], ["300", "-", "%z", "1214265600000"], ["240", "-", "%z", "1384041600000"], ["300", "-", "%z", null]], "America/Rio_Branco": [["271.2", "-", "LMT", "-1735776000000"], ["300", "Brazil", "%z", "590025600000"], ["300", "-", "%z", "1214265600000"], ["240", "-", "%z", "1384041600000"], ["300", "-", "%z", null]], "America/Santiago": [["282.75", "-", "LMT", "-2493072000000"], ["282.75", "-", "SMT", "-1892678400000"], ["300", "-", "%z", "-1688428800000"], ["282.75", "-", "SMT", "-1619222400000"], ["240", "-", "%z", "-1593820800000"], ["282.75", "-", "SMT", "-1336003200000"], ["300", "Chile", "%z", "-1178150400000"], ["240", "-", "%z", "-870566400000"], ["300", "-", "%z", "-865296000000"], ["240", "-", "%z", "-740534400000"], ["240", "1:00", "%z", "-736646400000"], ["300", "1:00", "%z", "-718070400000"], ["300", "-", "%z", "-713667600000"], ["240", "Chile", "%z", null]], "America/Punta_Arenas": [["283.6666666666667", "-", "LMT", "-2493072000000"], ["282.75", "-", "SMT", "-1892678400000"], ["300", "-", "%z", "-1688428800000"], ["282.75", "-", "SMT", "-1619222400000"], ["240", "-", "%z", "-1593820800000"], ["282.75", "-", "SMT", "-1336003200000"], ["300", "Chile", "%z", "-1178150400000"], ["240", "-", "%z", "-870566400000"], ["300", "-", "%z", "-865296000000"], ["240", "-", "%z", "-736646400000"], ["300", "1:00", "%z", "-718070400000"], ["300", "-", "%z", "-713667600000"], ["240", "Chile", "%z", "1480809600000"], ["180", "-", "%z", null]], "Pacific/Easter": [["437.4666666666667", "-", "LMT", "-2493072000000"], ["437.4666666666667", "-", "EMT", "-1178150400000"], ["420", "Chile", "%z", "384922800000"], ["360", "Chile", "%z", null]], "Antarctica/Palmer": [["0", "-", "-00", "-126316800000"], ["240", "Arg", "%z", "-7603200000"], ["180", "Arg", "%z", "389059200000"], ["240", "Chile", "%z", "1480809600000"], ["180", "-", "%z", null]], "America/Bogota": [["296.2666666666667", "-", "LMT", "-2707689600000"], ["296.2666666666667", "-", "BMT", "-1739059200000"], ["300", "CO", "%z", null]], "America/Guayaquil": [["319.3333333333333", "-", "LMT", "-2493072000000"], ["314", "-", "QMT", "-1199318400000"], ["300", "Ecuador", "%z", null]], "Pacific/Galapagos": [["358.4", "-", "LMT", "-1199318400000"], ["300", "-", "%z", "536371200000"], ["360", "Ecuador", "%z", null]], "Atlantic/Stanley": [["231.4", "-", "LMT", "-2493072000000"], ["231.4", "-", "SMT", "-1824249600000"], ["240", "Falk", "%z", "420595200000"], ["180", "Falk", "%z", "495590400000"], ["240", "Falk", "%z", "1283652000000"], ["180", "-", "%z", null]], "America/Cayenne": [["209.33333333333334", "-", "LMT", "-1846281600000"], ["240", "-", "%z", "-71107200000"], ["180", "-", "%z", null]], "America/Guyana": [["232.65", "-", "LMT", "-1843603200000"], ["240", "-", "%z", "-1730592000000"], ["225", "-", "%z", "176083200000"], ["180", "-", "%z", "701830800000"], ["240", "-", "%z", null]], "America/Asuncion": [["230.66666666666666", "-", "LMT", "-2493072000000"], ["230.66666666666666", "-", "AMT", "-1206403200000"], ["240", "-", "%z", "86745600000"], ["180", "-", "%z", "134006400000"], ["240", "Para", "%z", "1728950400000"], ["180", "-", "%z", null]], "America/Lima": [["308.2", "-", "LMT", "-2493072000000"], ["308.6", "-", "LMT", "-1938556800000"], ["300", "Peru", "%z", null]], "Atlantic/South_Georgia": [["146.13333333333335", "-", "LMT", "-2493072000000"], ["120", "-", "%z", null]], "America/Paramaribo": [["220.66666666666666", "-", "LMT", "-1830470400000"], ["220.86666666666665", "-", "PMT", "-1073088000000"], ["220.6", "-", "PMT", "-765331200000"], ["210", "-", "%z", "465436800000"], ["180", "-", "%z", null]], "America/Montevideo": [["224.85", "-", "LMT", "-1942704000000"], ["224.85", "-", "MMT", "-1567468800000"], ["240", "-", "%z", "-1459641600000"], ["210", "Uruguay", "%z", "-853632000000"], ["180", "Uruguay", "%z", "-284083200000"], ["180", "Uruguay", "%z", "-31622400000"], ["180", "Uruguay", "%z", "31449600000"], ["180", "Uruguay", "%z", "157680000000"], ["180", "Uruguay", "%z", "132105600000"], ["180", "Uruguay", "%z", "156902400000"], ["180", "Uruguay", "%z", null]], "America/Caracas": [["267.7333333333333", "-", "LMT", "-2493072000000"], ["267.6666666666667", "-", "CMT", "-1826755200000"], ["270", "-", "%z", "-157766400000"], ["240", "-", "%z", "1197169200000"], ["270", "-", "%z", "1462069800000"], ["240", "-", "%z", null]] };

// ../models/src/Zone.ts
import { Definitions as Definitions5, Values as Values5 } from "@pitaman71/omniglot-live-data";

// ../models/src/cmp.ts
function cmp(a, b, comparator) {
  if (a === void 0 || b === void 0) {
    if (a === void 0 && b !== void 0) return -1;
    if (a !== void 0 && b === void 0) return 1;
    return 0;
  }
  if (a === null || b === null) {
    if (a === null && b !== null) return -1;
    if (a !== null && b === null) return 1;
    return 0;
  }
  if (comparator) return comparator(a, b);
  return a < b ? -1 : a > b ? 1 : 0;
}

// ../models/src/Zone.ts
var directory5 = new Definitions5.Directory();
var makePath5 = (path) => `omniglot-live-logistics.Zone.${path}`;
var _Domain2 = class extends Values5.AggregateDomain {
  constructor(path) {
    super(path, {
      name: Values5.TheStringDomain,
      short: Values5.TheStringDomain,
      long: Values5.TheStringDomain,
      minutes: Values5.TheNumberDomain
    });
  }
  asString(format) {
    const domain = this;
    return {
      from(text) {
        return domain.getByName(text);
      },
      to(value) {
        return value.name || "";
      }
    };
  }
  asEnumeration(maxCount) {
    const tzNames = Object.getOwnPropertyNames(zones);
    const luxons = tzNames.map((tzName) => DateTime.local({ zone: tzName }));
    const domain = this;
    return new class {
      *forward() {
        luxons.sort((a, b) => a.offset < b.offset ? -1 : a.offset > b.offset ? 1 : 0);
        for (let luxon of luxons) {
          yield domain.fromLuxon(luxon);
        }
      }
      *backward() {
        luxons.sort((a, b) => a.offset > b.offset ? -1 : a.offset < b.offset ? 1 : 0);
        for (let luxon of luxons) {
          yield domain.fromLuxon(luxon);
        }
      }
    }();
  }
  cmp(a, b) {
    let code = cmp(a.minutes, b.minutes);
    if (code !== 0) return code;
    code = cmp(a.name, b.name);
    return code;
  }
  getLocal() {
    return this.fromLuxon(DateTime.local());
  }
  getByName(name) {
    const luxon = DateTime.local({ zone: name });
    return {
      name: luxon.zoneName,
      minutes: luxon.offset,
      short: luxon.offsetNameShort,
      long: luxon.offsetNameLong
    };
  }
  fromLuxon(luxon) {
    return {
      name: luxon.zoneName || void 0,
      minutes: luxon.offset,
      short: luxon.offsetNameShort || void 0,
      long: luxon.offsetNameLong || void 0
    };
  }
};
var Domain5 = new _Domain2(makePath5("Domain"));
directory5.add(Domain5);

// ../models/src/Time.ts
var directory6 = new Definitions6.Directory();
var makePath6 = (path) => `omniglot-live-logistics.Time.${path}`;
var _Domain3 = class extends Values6.AggregateDomain {
  constructor(path) {
    super(path, {
      hour: new Values6.RangeDomain(`${path}.hour`, 0, 23, 1),
      minute: new Values6.RangeDomain(`${path}.minute`, 0, 59, 1),
      second: new Values6.RangeDomain(`${path}.second`, 0, 59, 1),
      meridian: Domain4,
      zone: Domain5
    });
  }
  asString() {
    return new class {
      from(text, options) {
        let hour = 0;
        let minute = 0;
        let second;
        let meridian;
        let zone;
        const parsed = text.match(/^(\d+):(\d+)(:(\d+))?\s*(am|pm)?\s+(.+)?/i);
        if (parsed) {
          if (parsed[3] !== void 0) second = Number.parseInt(parsed[3]);
          if (parsed[2] !== void 0) minute = Number.parseInt(parsed[2]);
          if (parsed[1] !== void 0) hour = Number.parseInt(parsed[1]);
          if (parsed[5] !== void 0) meridian = Domain4.asString()?.from(parsed[5]) || void 0;
          if (parsed[6] !== void 0 && parsed[6] !== void 0) {
            zone = Domain5.getByName(parsed[6]);
          }
        } else {
          if (options?.onError)
            options.onError(`Parsing failed, expectd format HH:MM[:SS] [+|-]HH:MM [AM|PM]`);
          return null;
        }
        return { hour, minute, second, meridian, zone };
      }
      to(value) {
        const hour = value.hour;
        const minute = value.minute;
        if (hour === void 0 || minute === void 0) return "";
        let result = `${hour.toString() || "00"}:${minute.toString() || "00"}${!value.meridian ? "" : value.meridian.toString().toUpperCase()}`;
        if (value.zone !== void 0) {
          result += " ";
          result += value.zone.name;
        }
        return result;
      }
    }();
  }
  toSeconds(value) {
    if (value.hour === void 0 || value.minute === void 0)
      return void 0;
    let seconds = 0;
    seconds += 3600 * (value.meridian === "am" ? value.hour % 12 : value.meridian === "pm" ? value.hour - 12 : value.hour);
    seconds += 60 * value.minute;
    if (value.zone?.minutes !== void 0) {
      seconds += 60 * value.zone.minutes;
    }
    return seconds;
  }
  fromSeconds(seconds, pm, utcOffset) {
    return {
      hour: Math.floor(seconds / 3600),
      minute: Math.floor(seconds % 3600 / 60),
      second: seconds % 60,
      pm,
      utcOffset
    };
  }
};
var Domain6 = new _Domain3(makePath6("Domain"));
directory6.add(Domain6);

// ../models/src/DateTime.ts
var directory7 = new Definitions7.Directory();
var makePath7 = (path) => `omniglot-live-logistics.DateTime.${path}`;
var _Domain4 = class extends Values7.AggregateDomain {
  constructor(path) {
    super(path, {
      date: Domain2,
      time: Domain6
    });
  }
  asString(format) {
    const domain = this;
    return new class {
      from(text, options) {
        return domain.fromISOString(text, options);
      }
      to(value) {
        return domain.asLuxon().to(value).toISO() || "";
      }
    }();
  }
  asLuxon() {
    const domain = this;
    return {
      from(luxon) {
        return { date: {
          year: luxon.year,
          month: luxon.month,
          day: luxon.day
        }, time: {
          hour: luxon.hour,
          minute: luxon.minute,
          second: luxon.second
        } };
      },
      to(value, options) {
        const result = DateTime.fromObject({
          year: value.date?.year,
          month: value.date?.month,
          day: value.date?.day,
          hour: value.time?.hour,
          minute: value.time?.minute,
          second: value.time?.second
        });
        if (!result.isValid && options?.onError)
          options.onError(result.invalidExplanation);
        return result;
      }
    };
  }
  fromISOString(text, options) {
    const luxon = DateTime.fromISO(text);
    if (!luxon.isValid && options?.onError)
      options.onError(luxon.invalidExplanation);
    return this.asLuxon().from(luxon);
  }
  fromJSDate(date) {
    return this.asLuxon().from(DateTime.fromJSDate(date));
  }
};
var Domain7 = new _Domain4(makePath7("Domain"));
directory7.add(Domain7);

// ../models/src/Duration.ts
import { Definitions as Definitions8, Values as Values8 } from "@pitaman71/omniglot-live-data";
var directory8 = new Definitions8.Directory();
var makePath8 = (path) => `omniglot-live-logistics.Duration.${path}`;
var _Domain5 = class extends Values8.AggregateDomain {
  constructor(path) {
    super(path, {
      days: Values8.TheNumberDomain,
      hours: Values8.TheNumberDomain,
      minutes: Values8.TheNumberDomain,
      seconds: Values8.TheNumberDomain
    });
  }
  asString(format) {
    return new class {
      from(text, options) {
        const parsed = text.match(/^((\d+)d)?((\d+)h)?((\d+)m)?((\d+)s)?/i);
        let days;
        let hours;
        let minutes;
        let seconds;
        if (parsed) {
          days = Number.parseInt(parsed[2]);
          hours = Number.parseInt(parsed[4]);
          minutes = Number.parseInt(parsed[6]);
          seconds = Number.parseInt(parsed[8]);
        } else {
          if (options?.onError)
            options.onError(`Expected format #d#h#m#s`);
          return null;
        }
        return { days, hours, minutes, seconds };
      }
      to(value) {
        return [
          value.days === void 0 ? "" : `${value.days.toString()}d`,
          value.hours === void 0 ? "" : `${value.hours.toString()}h`,
          value.minutes === void 0 ? "" : `${value.minutes.toString()}m`,
          value.seconds === void 0 ? "" : `${value.seconds.toString()}s`
        ].join("");
      }
    }();
  }
  cmp(a, b) {
    return cmp(this.toSeconds(a), this.toSeconds(b));
  }
  toLuxon(duration) {
    return Duration.fromObject(duration);
  }
  toSeconds(duration) {
    return (duration.seconds || 0) + (duration.minutes ? 60 * duration.minutes : 0) + (duration.hours ? 3600 * duration.hours : 0) + (duration.days ? 24 * 3600 * duration.days : 0);
  }
  fromSeconds(seconds) {
    return {
      days: Math.floor(seconds / (24 * 3600)),
      hours: Math.floor(seconds / 3600) % 24,
      minutes: Math.floor(seconds / 60) % 60,
      seconds: Math.floor(seconds % 60)
    };
  }
};
var Domain8 = new _Domain5(makePath8("Domain"));
directory8.add(Domain8);

// ../models/src/Event.ts
import { Definitions as Definitions17, Values as Values17 } from "@pitaman71/omniglot-live-data";

// ../models/src/When.ts
import { Definitions as Definitions10, Values as Values10 } from "@pitaman71/omniglot-live-data";

// ../models/src/TimeRange.ts
import { Definitions as Definitions9, Values as Values9 } from "@pitaman71/omniglot-live-data";
var directory9 = new Definitions9.Directory();
var makePath9 = (path) => `omniglot-live-logistics.TimeRange.${path}`;
var Domain9 = new Values9.AggregateDomain(makePath9("Domain"), {
  from: Domain6,
  to: Domain6
});
directory9.add(Domain9);

// ../models/src/When.ts
var directory10 = new Definitions10.Directory();
var makePath10 = (path) => `omniglot-live-logistics.TimeRange.${path}`;
var _Domain6 = class extends Values10.AggregateDomain {
  constructor(path) {
    super(path, {
      at: Domain2,
      dates: Domain3,
      times: Domain9
    }, ["at", "dates", "times"]);
  }
  expand(a, b) {
    if (!a.dates?.from || !a.dates?.to) return b;
    if (!b.dates?.from || !b.dates?.to) return a;
    let from = Domain2.cmp(b.dates.from, a.dates.from);
    let to = Domain2.cmp(b.dates.to, a.dates.to);
    if (from === void 0 || to === void 0) return void 0;
    if (from >= 0 && to <= 0) return a;
    if (from <= 0 && to >= 0) return b;
    return this.asJSON().from({
      from: from >= 0 ? Domain2.asJSON().to(a.dates.from) : Domain2.asJSON().to(b.dates.from),
      to: to <= 0 ? Domain2.asJSON().to(a.dates.to) : Domain2.asJSON().to(b.dates.to)
    });
  }
};
var Domain10 = new _Domain6(makePath10("Domain"));
directory10.add(Domain10);

// ../models/src/Where.ts
var Where_exports = {};
__export(Where_exports, {
  Domain: () => Domain15,
  directory: () => directory15
});
import { Definitions as Definitions15, Values as Values15 } from "@pitaman71/omniglot-live-data";

// ../models/src/Municipality.ts
var Municipality_exports = {};
__export(Municipality_exports, {
  Domain: () => Domain12,
  directory: () => directory12
});
import { Definitions as Definitions12, Values as Values12 } from "@pitaman71/omniglot-live-data";

// ../models/src/Place.ts
import { Definitions as Definitions11, Values as Values11 } from "@pitaman71/omniglot-live-data";
var directory11 = new Definitions11.Directory();
var makePath11 = (path) => `omniglot-live-logistics.Place.${path}`;
var Domain11 = new Values11.AggregateDomain(makePath11("Domain"), {
  shortName: Values11.TheStringDomain,
  longName: Values11.TheStringDomain,
  iso: new Values11.AggregateDomain(makePath11("Domain.iso"), {
    standard: Values11.TheStringDomain,
    code: Values11.TheStringDomain
  })
}, ["shortName", "longName", "iso"]);
directory11.add(Domain11);

// ../models/src/Municipality.ts
var directory12 = new Definitions12.Directory();
var makePath12 = (path) => `omniglot-live-logistics.Municipality.${path}`;
var Domain12 = new Values12.AggregateDomain(makePath12("Domain"), {
  city: Domain11,
  county: Domain11,
  state: Domain11,
  country: Domain11
}, ["city", "county", "state", "country"]);
directory12.add(Domain12);

// ../models/src/GeoShape.ts
import { Definitions as Definitions14, Values as Values14 } from "@pitaman71/omniglot-live-data";

// ../models/src/GeoPoint.ts
import { Definitions as Definitions13, Values as Values13 } from "@pitaman71/omniglot-live-data";
var directory13 = new Definitions13.Directory();
var makePath13 = (path) => `omniglot-live-logistics.GeoPoint.${path}`;
var Domain13 = new Values13.AggregateDomain(makePath13("Domain"), {
  lat: Values13.TheNumberDomain,
  lng: Values13.TheNumberDomain
});
directory13.add(Domain13);

// ../models/src/GeoShape.ts
var directory14 = new Definitions14.Directory();
var makePath14 = (path) => `omniglot-live-logistics.GeoShape.${path}`;
var Domain14 = new Values14.AggregateDomain(makePath14("Domain"), {
  point: Domain13,
  cloud: new Values14.ArrayDomain(makePath14("Domain.cloud"), Domain13)
});
directory14.add(Domain14);

// ../models/src/Where.ts
var directory15 = new Definitions15.Directory();
var makePath15 = (path) => `omniglot-live-logistics.Where.${path}`;
var _Domain7 = class extends Values15.AggregateDomain {
  constructor(canonicalName) {
    super(canonicalName, {
      name: Values15.TheStringDomain,
      googlePlaceId: Values15.TheStringDomain,
      address: Domain,
      municipality: Domain12,
      geo: Domain14
    }, ["googlePlaceId", "address", "geo"]);
  }
  asJSON() {
    const superAsJSON = () => super.asJSON();
    return {
      from(json, options) {
        if (typeof json === "string") {
          return {
            name: json
          };
        }
        return superAsJSON().from(json, options);
      },
      to(value) {
        if (value === null) return null;
        return superAsJSON().to(value);
      }
    };
  }
};
var Domain15 = new _Domain7(makePath15("Domain"));
directory15.add(Domain15);

// ../models/src/Vicinity.ts
import * as Introspection from "typescript-introspection";
import { Definitions as Definitions16 } from "@pitaman71/omniglot-live-data";
var directory16 = new Definitions16.Directory();
var makePath16 = (path) => `omniglot-live-logistics.Vicinity.${path}`;
var _Domain8 = class extends Introspection.Domain {
  asString(format) {
    return {
      from(text, options) {
        let sense = "outside";
        let radius;
        const match2 = text.match(/([+-]?)(\d+)\s*(\w+)/);
        if (match2) {
          if (match2[1] == "-") sense = "inside";
          if (match2[3] == "mi" || match2[3] == "miles") radius = { miles: parseInt(match2[2]) };
          if (match2[3] == "km" || match2[3] == "kilometers") radius = { kilometers: parseInt(match2[2]) };
        } else {
          if (options?.onError)
            options.onError(`Expected format: [+-]##[mi|km]`);
          return null;
        }
        return { sense, radius };
      },
      to(value) {
        if (value.radius === void 0) return "";
        const { distance, abbrev } = "miles" in value.radius ? { distance: value.radius.miles, abbrev: "mi" } : { distance: value.radius.kilometers, abbrev: "km" };
        return `${value.sense == "inside" ? "-" : "+"}${distance}${abbrev}`;
      }
    };
  }
  asEnumeration(maxCount) {
    return void 0;
  }
  cmp(a, b) {
    return void 0;
  }
};
var Domain17 = new _Domain8(makePath16("Domain"));
directory16.add(Domain17);

// ../models/src/Event.ts
var directory17 = new Definitions17.Directory();
var makePath17 = (path) => `omniglot-live-logistics.Event.${path}`;
var _Domain9 = class extends Values17.AggregateDomain {
  constructor(canonicalName) {
    super(canonicalName, {
      where: Domain15,
      vicinity: Domain17,
      when: Domain10
    });
  }
};
var Domain18 = new _Domain9(makePath17("Domain"));
directory17.add(Domain18);

// ../models/src/Parseable.ts
var Parseable_exports = {};
__export(Parseable_exports, {
  Domain: () => Domain20
});
import * as Introspection2 from "typescript-introspection";
var Domain20 = class extends Introspection2.Domain {
  constructor(domain) {
    super(`Parseable<${domain.canonicalName}>`);
    this.domain = domain;
  }
  asString() {
    const tAsString = this.domain.asString();
    if (!tAsString) return void 0;
    return {
      to(val) {
        if (val.text !== void 0) return val.text;
        return tAsString.to(val);
      },
      from(text) {
        const errors = [];
        const parsed = tAsString.from(text, { onError: (err) => errors.push(err) });
        return {
          text,
          errors: errors.length === 0 ? void 0 : errors,
          ...parsed
        };
      }
    };
  }
  cmp(a, b) {
    const tCmp = this.domain.cmp;
    if (!tCmp) return void 0;
    const code = tCmp(a, b);
    if (code !== 0) return code;
    return cmp(a.text, b.text);
  }
};

// ../models/src/index.ts
var directory18 = Definitions18.Directory.from(
  directory,
  directory2,
  directory3,
  directory7,
  directory8,
  directory17,
  directory13,
  directory14,
  directory4,
  directory12,
  directory11,
  directory6,
  directory9,
  directory16,
  directory10,
  directory15,
  directory5
);

// src/Address.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ParseableDomain = new Parseable_exports.Domain(Address_exports.Domain);
var asString = ParseableDomain.asString();
var Summary = ({
  value,
  client,
  children
}) => {
  if (!value?.addressLine1) {
    return /* @__PURE__ */ jsx(React.Fragment, { children });
  }
  if (!asString) throw new Error("Expected Parseable.Domain to implement asString");
  return /* @__PURE__ */ jsxs("div", { className: "address-summary", children: [
    /* @__PURE__ */ jsx("span", { className: "icon", children: "\u{1F3E0}" }),
    /* @__PURE__ */ jsx("span", { className: "content", children: asString.to(value) })
  ] });
};
var Document = ({
  value,
  client
}) => {
  if (!value && !client) {
    return /* @__PURE__ */ jsx("div", { className: "address-detail empty", children: "No address specified" });
  }
  return /* @__PURE__ */ jsxs("div", { className: "address-detail", children: [
    /* @__PURE__ */ jsxs("div", { className: "fields", children: [
      /* @__PURE__ */ jsxs("div", { className: "field-row", children: [
        /* @__PURE__ */ jsx("span", { className: "label", children: "Line 1:" }),
        client ? /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.addressLine1 || "",
            onChange: (e) => client.assign({ ...value, addressLine1: e.target.value }),
            placeholder: "Street address"
          }
        ) : /* @__PURE__ */ jsx("span", { className: "value", children: value?.addressLine1 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "field-row", children: [
        /* @__PURE__ */ jsx("span", { className: "label", children: "Line 2:" }),
        client ? /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.addressLine2 || "",
            onChange: (e) => client.assign({ ...value, addressLine2: e.target.value }),
            placeholder: "Additional address info"
          }
        ) : /* @__PURE__ */ jsx("span", { className: "value", children: value?.addressLine2 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "field-row", children: [
        /* @__PURE__ */ jsx("span", { className: "label", children: "Postal Code:" }),
        client ? /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.postalCode || "",
            onChange: (e) => client.assign({ ...value, postalCode: e.target.value }),
            placeholder: "Postal code"
          }
        ) : /* @__PURE__ */ jsx("span", { className: "value", children: value?.postalCode })
      ] })
    ] }),
    client && /* @__PURE__ */ jsx("div", { className: "actions", children: /* @__PURE__ */ jsx("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};

// src/DateTime.tsx
var DateTime_exports2 = {};
__export(DateTime_exports2, {
  Document: () => Document2,
  Summary: () => Summary2
});
import React2 from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ParseableDomain2 = new Parseable_exports.Domain(DateTime_exports.Domain);
var asString2 = ParseableDomain2.asString();
var Summary2 = ({
  value,
  client,
  children
}) => {
  if (!value?.date && !value?.time) {
    return /* @__PURE__ */ jsx2(React2.Fragment, { children });
  }
  if (!asString2) throw new Error("Expected Parseable.Domain to implement asString");
  return /* @__PURE__ */ jsx2("div", { className: "datetime-preview", children: asString2.to(value) });
};
var Document2 = ({
  value,
  client
}) => {
  if (!value?.date && !value?.time) {
    return /* @__PURE__ */ jsx2("div", { className: "datetime-detail empty", children: "No date/time specified" });
  }
  return /* @__PURE__ */ jsxs2("div", { className: "datetime-detail", children: [
    value.date && /* @__PURE__ */ jsxs2("div", { className: "date-section", children: [
      /* @__PURE__ */ jsxs2("h3", { children: [
        /* @__PURE__ */ jsx2("span", { className: "icon", children: "\u{1F4C5}" }),
        " Date"
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "date-content", children: [
        /* @__PURE__ */ jsxs2("div", { className: "date-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Year:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: value.date.year })
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "date-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Month:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: String(value.date.month).padStart(2, "0") })
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "date-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Day:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: String(value.date.day).padStart(2, "0") })
        ] })
      ] })
    ] }),
    value.time && /* @__PURE__ */ jsxs2("div", { className: "time-section", children: [
      /* @__PURE__ */ jsxs2("h3", { children: [
        /* @__PURE__ */ jsx2("span", { className: "icon", children: "\u23F0" }),
        " Time"
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "time-content", children: [
        /* @__PURE__ */ jsxs2("div", { className: "time-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Hour:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: String(value.time.hour).padStart(2, "0") })
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "time-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Minute:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: String(value.time.minute).padStart(2, "0") })
        ] }),
        value.time.second !== void 0 && /* @__PURE__ */ jsxs2("div", { className: "time-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Second:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: String(value.time.second).padStart(2, "0") })
        ] }),
        value.time.meridian && /* @__PURE__ */ jsxs2("div", { className: "time-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Period:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: value.time.meridian.toUpperCase() })
        ] }),
        value.time.zone && /* @__PURE__ */ jsxs2("div", { className: "time-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Timezone:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: value.time.zone.name })
        ] })
      ] })
    ] }),
    client && /* @__PURE__ */ jsx2("div", { className: "actions", children: /* @__PURE__ */ jsx2("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};

// src/Municipality.tsx
var Municipality_exports2 = {};
__export(Municipality_exports2, {
  Document: () => Document3,
  Summary: () => Summary3
});
import React3 from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var ParseableDomain3 = new Parseable_exports.Domain(Municipality_exports.Domain);
var asString3 = ParseableDomain3.asString();
var Summary3 = ({
  value,
  client,
  children
}) => {
  if (!value?.city && !value?.state && !value?.country) {
    return /* @__PURE__ */ jsx3(React3.Fragment, { children });
  }
  if (!asString3) throw new Error("Expected Parseable.Domain to implement asString");
  return /* @__PURE__ */ jsxs3("div", { className: "municipality-summary", onClick: () => client?.assign(value), children: [
    /* @__PURE__ */ jsx3("span", { className: "icon", children: "\u{1F306}" }),
    /* @__PURE__ */ jsx3("span", { className: "content", children: asString3.to(value) })
  ] });
};
var Document3 = ({
  value,
  client
}) => {
  if (!value && !client) {
    return /* @__PURE__ */ jsx3("div", { className: "municipality-detail empty", children: "No location specified" });
  }
  const updateLevel = (level, updates) => {
    client?.assign({
      ...value,
      [level]: {
        ...value?.[level],
        ...updates
      }
    });
  };
  const levels = ["city", "county", "state", "country"];
  return /* @__PURE__ */ jsxs3("div", { className: "municipality-detail", children: [
    levels.map((level) => /* @__PURE__ */ jsxs3("div", { className: "level-section", children: [
      /* @__PURE__ */ jsx3("h4", { children: level.charAt(0).toUpperCase() + level.slice(1) }),
      /* @__PURE__ */ jsx3("div", { className: "fields", children: client ? /* @__PURE__ */ jsxs3("div", { className: "field-inputs", children: [
        /* @__PURE__ */ jsx3(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.[level]?.shortName || "",
            onChange: (e) => updateLevel(level, { shortName: e.target.value }),
            placeholder: `${level} short name`
          }
        ),
        /* @__PURE__ */ jsx3(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.[level]?.longName || "",
            onChange: (e) => updateLevel(level, { longName: e.target.value }),
            placeholder: `${level} full name`
          }
        ),
        (level === "state" || level === "country") && /* @__PURE__ */ jsx3(
          "input",
          {
            type: "text",
            className: "value-input iso",
            value: value?.[level]?.iso?.code || "",
            onChange: (e) => updateLevel(level, {
              iso: { ...value?.[level]?.iso, code: e.target.value }
            }),
            placeholder: "ISO code"
          }
        )
      ] }) : /* @__PURE__ */ jsx3("div", { className: "field-display", children: /* @__PURE__ */ jsxs3("span", { className: "value", children: [
        value?.[level]?.longName,
        value?.[level]?.iso?.code && /* @__PURE__ */ jsxs3("span", { className: "iso-code", children: [
          "(",
          value[level].iso.code,
          ")"
        ] })
      ] }) }) })
    ] }, level)),
    client && /* @__PURE__ */ jsx3("div", { className: "actions", children: /* @__PURE__ */ jsx3("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};

// src/Where.tsx
var Where_exports2 = {};
__export(Where_exports2, {
  Document: () => Document4,
  Summary: () => Summary4
});
import React4 from "react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var ParseableDomain4 = new Parseable_exports.Domain(Where_exports.Domain);
var asString4 = ParseableDomain4.asString();
var Summary4 = ({
  value,
  client,
  children
}) => {
  if (!value?.name) {
    return /* @__PURE__ */ jsx4(React4.Fragment, { children });
  }
  if (!asString4) throw new Error("Expected Parseable.Domain to implement asString");
  return /* @__PURE__ */ jsxs4("div", { className: "where-summary", onClick: () => client?.assign(value), children: [
    /* @__PURE__ */ jsx4("span", { className: "icon", children: "\u{1F4CD}" }),
    asString4.to(value)
  ] });
};
var Document4 = ({
  value,
  client
}) => {
  if (!value && !client) {
    return /* @__PURE__ */ jsx4("div", { className: "where-detail empty", children: "Location not specified" });
  }
  return /* @__PURE__ */ jsxs4("div", { className: "where-detail", children: [
    /* @__PURE__ */ jsxs4("div", { className: "name-section", children: [
      /* @__PURE__ */ jsxs4("h3", { children: [
        /* @__PURE__ */ jsx4("span", { className: "icon", children: "\u{1F4CD}" }),
        " Location"
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "name-content", children: [
        /* @__PURE__ */ jsxs4("div", { className: "name-row", children: [
          /* @__PURE__ */ jsx4("span", { className: "label", children: "Name:" }),
          client ? /* @__PURE__ */ jsx4(
            "input",
            {
              type: "text",
              className: "value-input",
              value: value?.name || "",
              onChange: (e) => client.assign({ ...value, name: e.target.value }),
              placeholder: "Location name"
            }
          ) : /* @__PURE__ */ jsx4("span", { className: "value", children: value?.name })
        ] }),
        /* @__PURE__ */ jsxs4("div", { className: "name-row", children: [
          /* @__PURE__ */ jsx4("span", { className: "label", children: "Place ID:" }),
          client ? /* @__PURE__ */ jsx4(
            "input",
            {
              type: "text",
              className: "value-input",
              value: value?.googlePlaceId || "",
              onChange: (e) => client.assign({ name: "", ...value, googlePlaceId: e.target.value }),
              placeholder: "Google Place ID"
            }
          ) : /* @__PURE__ */ jsx4("span", { className: "value", children: value?.googlePlaceId })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "address-section", children: [
      /* @__PURE__ */ jsxs4("h3", { children: [
        /* @__PURE__ */ jsx4("span", { className: "icon", children: "\u{1F3E0}" }),
        " Address"
      ] }),
      /* @__PURE__ */ jsx4(
        Document,
        {
          value: value?.address,
          client: client && {
            assign: (address) => client.assign({ name: "", ...value, address }),
            clear: () => client.assign({ name: "", ...value, address: void 0 })
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "municipality-section", children: [
      /* @__PURE__ */ jsxs4("h3", { children: [
        /* @__PURE__ */ jsx4("span", { className: "icon", children: "\u{1F306}" }),
        " Municipality"
      ] }),
      /* @__PURE__ */ jsx4(
        Document3,
        {
          value: value?.municipality,
          client: client && {
            assign: (municipality) => client.assign({ name: "", ...value, municipality }),
            clear: () => client.assign({ name: "", ...value, municipality: void 0 })
          }
        }
      )
    ] }),
    (value?.geo || client) && /* @__PURE__ */ jsxs4("div", { className: "geo-section", children: [
      /* @__PURE__ */ jsxs4("h3", { children: [
        /* @__PURE__ */ jsx4("span", { className: "icon", children: "\u{1F30D}" }),
        " Geographic Coordinates"
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "geo-content", children: /* @__PURE__ */ jsxs4("div", { className: "geo-row", children: [
        /* @__PURE__ */ jsx4("span", { className: "label", children: "Coordinates:" }),
        client ? /* @__PURE__ */ jsxs4("div", { className: "geo-inputs", children: [
          /* @__PURE__ */ jsx4(
            "input",
            {
              type: "number",
              className: "value-input coordinate",
              value: value?.geo?.point?.lat || "",
              onChange: (e) => client.assign({
                name: "",
                ...value,
                geo: {
                  ...value?.geo,
                  point: {
                    ...value?.geo?.point,
                    lat: parseFloat(e.target.value)
                  }
                }
              }),
              placeholder: "Latitude",
              step: "0.000001"
            }
          ),
          /* @__PURE__ */ jsx4(
            "input",
            {
              type: "number",
              className: "value-input coordinate",
              value: value?.geo?.point?.lng || "",
              onChange: (e) => client.assign({
                name: "",
                ...value,
                geo: {
                  ...value?.geo,
                  point: {
                    ...value?.geo?.point,
                    lng: parseFloat(e.target.value)
                  }
                }
              }),
              placeholder: "Longitude",
              step: "0.000001"
            }
          )
        ] }) : /* @__PURE__ */ jsx4("span", { className: "value", children: value?.geo?.point && `${value?.geo.point.lat?.toFixed(6)}, ${value?.geo.point.lng?.toFixed(6)}` })
      ] }) })
    ] }),
    client && /* @__PURE__ */ jsx4("div", { className: "actions", children: /* @__PURE__ */ jsx4("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};
export {
  Address_exports2 as Address,
  DateTime_exports2 as DateTime,
  Municipality_exports2 as Municipality,
  Where_exports2 as Where
};
//# sourceMappingURL=index.mjs.map