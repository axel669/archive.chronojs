var Chrono = (function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  //     ['ms', ['milliseconds', 'millisecond']],
  //     ['s', ['seconds', 'second']],
  //     ['min', ['minutes', 'minute']],
  //     ['hr', ['hours', 'hour']],
  //     ['day', ['days']],
  //     ['wk', ['weeks', 'week']],
  //     ['mon', ['months', 'month']],
  //     ['qtr', ['quarter', 'quaters']],
  //     ['yr', ['years', 'year']],
  //     ['decade', ['decades']]
  // ];

  var functionMap = [['ms', 'milliseconds', 'millisecond'], ['s', 'seconds', 'second'], ['min', 'minutes', 'minute'], ['hr', 'hours', 'hour'], ['day', 'days'], ['wk', 'week', 'weeks'], ['mon', 'month', 'months'], ['qtr', 'quarter', 'quarters'], ['yr', 'year', 'years'], ['decade', 'decades']].reduce(function (mapped, names) {
    var target = names[0];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var name = _step.value;
        mapped[name] = target;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return mapped;
  }, {}); // export {_alias, countries};

  var ms_in = {
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    week: 1000 * 60 * 60 * 24 * 7
  };
  var shiftDate = {
    ms: function ms(date, amount) {
      date.setTime(date.time + amount);
    },
    s: function s(date, amount) {
      date.setTime(date.time + amount * ms_in.second);
    },
    min: function min(date, amount) {
      date.setTime(date.time + amount * ms_in.minute);
    },
    hr: function hr(date, amount) {
      date.setTime(date.time + amount * ms_in.hour);
    },
    day: function day(date, amount) {
      date.setDate(date.date + amount);
    },
    wk: function wk(date, amount) {
      date.setDate(date.date + amount * 7);
    },
    mon: function mon(date, amount) {
      var start = date.month;
      var target = (start + amount) % 12;
      date.setMonth(date.month + amount);

      if (date.month !== target) {
        date.setDate(0);
      }
    },
    yr: function yr(date, amount) {
      shiftDate.mon(date, amount * 12);
    }
  }; // alias(
  //     shiftDate,
  //     aliasMethods
  // );

  var startMethods = {
    s: function s(date) {
      date.setMilliseconds(0);
    },
    min: function min(date) {
      date.setSeconds(0, 0);
    },
    hr: function hr(date) {
      date.setMinutes(0, 0, 0);
    },
    day: function day(date) {
      date.setHours(0, 0, 0, 0);
    },
    week: function week(date) {// n, s -> -(n - s + n < s ? 7 : 0)
    },
    mon: function mon(date) {
      startMethods.day(date);
      date.setDate(1);
    },
    qtr: function qtr(date) {
      startMethods.days(date);
      var month = date.month;
      date.setMonth(month - month % 4);
    },
    yr: function yr(date) {
      startMethods.day(date);
      date.setMonth(0, 1);
    }
  }; // alias(
  //     startMethods,
  //     aliasMethods
  // );

  var endMethods = {
    s: function s(date) {
      date.setMilliseconds(999);
    },
    min: function min(date) {
      date.setSeconds(59, 999);
    },
    hr: function hr(date) {
      date.setMinutes(59, 59, 999);
    },
    day: function day(date) {
      date.setHours(23, 59, 59, 999);
    },
    mon: function mon(date) {
      endMethods.day(date);
      date.setDate(1);
      date.setMonth(date.month + 1);
      date.setDate(0);
    },
    yr: function yr(date) {
      endMethods.day(date);
      date.setMonth(11, 31);
    }
  }; // alias(
  //     endMethods,
  //     aliasMethods
  // );

  var formatList = {
    monthShort: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  };
  var formatPattern = /\[.*?\]|(\w)\1{0,3}/g;
  var formatMethods = {
    d: function d(date) {
      return date.dayOfWeek;
    },
    dd: function dd(date) {
      return formatList.dayShort[date.dayOfWeek].slice(0, 2);
    },
    ddd: function ddd(date) {
      return formatList.dayShort[date.dayOfWeek];
    },
    dddd: function dddd(date) {
      return formarList.day[date.dayOfWeek];
    },
    D: function D(date) {
      return date.date;
    },
    DD: function DD(date) {
      return "0".concat(date.date).slice(-2);
    },
    DDD: function DDD(date) {
      return '';
    },
    DDDD: function DDDD(date) {
      return '';
    },
    E: function E(date) {
      return date.dayOfWeek + 1;
    },
    h: function h(date) {
      return date.hours % 12 || 12;
    },
    hh: function hh(date) {
      return "0".concat(date.hours % 12 || 12).slice(-2);
    },
    H: function H(date) {
      return date.hours;
    },
    HH: function HH(date) {
      return "0".concat(date.hours).slice(-2);
    },
    m: function m(date) {
      return date.minutes;
    },
    mm: function mm(date) {
      return "0".concat(date.minutes).slice(-2);
    },
    mmm: function mmm(date) {
      return "00".concat(date.milliseconds).slice(-3);
    },
    M: function M(date) {
      return date.month + 1;
    },
    MM: function MM(date) {
      return "0".concat(date.month + 1).slice(-2);
    },
    MMM: function MMM(date) {
      return formatList.monthShort[date.month];
    },
    MMMM: function MMMM(date) {
      return formatList.month[date.month];
    },
    s: function s(date) {
      return date.seconds;
    },
    ss: function ss(date) {
      return "0".concat(date.seconds).slice(-2);
    },
    t: function t(date) {
      return date.hours < 12 ? "A" : "P";
    },
    tt: function tt(date) {
      return date.hours < 12 ? "AM" : "PM";
    },
    TT: function TT(date) {
      return date.year < 0 ? "BC" : "AD";
    },
    yy: function yy(date) {
      return "0".concat(date.year).slice(-2);
    },
    yyyy: function yyyy(date) {
      return date.year;
    }
  };
  var ChronoProto = {
    get milliseconds() {
      return this.getMilliseconds();
    },

    get seconds() {
      return this.getSeconds();
    },

    get minutes() {
      return this.getMinutes();
    },

    get hours() {
      return this.getHours();
    },

    get date() {
      return this.getDate();
    },

    get date0() {
      return this.getDate() - 1;
    },

    get dayOfWeek() {
      return this.getDay();
    },

    get month() {
      return this.getMonth();
    },

    get year() {
      return this.getFullYear();
    },

    get utcMilliseconds() {
      return this.getUTCMilliseconds();
    },

    get utcSeconds() {
      return this.getUTCSeconds();
    },

    get utcMinutes() {
      return this.getUTCMinutes();
    },

    get utcHours() {
      return this.getUTCHours();
    },

    get utcDate() {
      return this.getUTCDate();
    },

    get utcDate0() {
      return this.getUTCDate() - 1;
    },

    get utcDayOfWeek() {
      return this.getUTCDay();
    },

    get utcMonth() {
      return this.getUTCMonth();
    },

    get utcYear() {
      return this.getUTCFullYear();
    },

    get time() {
      return this.getTime();
    },

    shift: function shift(amount, unit) {
      var newChrono = new Chrono(this);
      shiftDate[unit](newChrono, amount);
      return newChrono;
    },
    startOf: function startOf(unit) {
      var newChrono = new Chrono(this);
      startMethods[unit](newChrono);
      return newChrono;
    },
    endOf: function endOf(unit) {
      var newChrono = new Chrono(this);
      endMethods[unit](newChrono);
      return newChrono;
    },
    dif: function dif(other) {
      var difMS = Math.abs(this.time - other.time);
      var dif = Chrono(difMS);
      return {
        milliseconds: dif.utcMilliseconds,
        seconds: dif.utcSeconds,
        minutes: dif.utcMinutes,
        hours: dif.utcHours,
        days: dif.utcDate - 1,
        month: dif.utcMonth,
        years: dif.utcYear - 1970,
        time: dif.time
      };
    },
    format: function format(formatString) {
      var _this = this;

      return formatString.replace(formatPattern, function (match) {
        if (match.charAt(0) === "[") {
          return match.slice(1, -1);
        }

        if (formatMethods.hasOwnProperty(match) === false) {
          throw new Error("\"".concat(match, "\" is not a valid date formatter"));
        }

        return formatMethods[match](_this);
      });
    }
  };
  Object.setPrototypeOf(ChronoProto, Date.prototype);

  var Chrono = function Chrono() {
    var _arguments = arguments;

    var thing = function () {
      for (var _len = _arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = _arguments[_key];
      }

      if (_typeof(args[0]) === 'object') ;

      return _construct(Date, args);
    }(); // const thing = new Date(...args);


    Object.setPrototypeOf(thing, ChronoProto);
    return thing;
  };

  Chrono.min = new Chrono(-8640000000000000);
  Chrono.max = new Chrono(8640000000000000);

  Chrono.trigger = function (time, func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return setTimeout(function () {
      return func.apply(void 0, args);
    }, time);
  };

  Chrono.interval = function (time, func) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    var intervalID = null;

    var cancel = function cancel() {
      if (intervalID !== null) {
        clearInterval(intervalID);
        intervalID = null;
      }
    };

    intervalID = setInterval(function () {
      return func.apply(void 0, args);
    }, time);
    return {
      cancel: cancel
    };
  };

  Chrono.sortAsc = function (first, second) {
    if (first < second) {
      return -1;
    }

    if (first > second) {
      return 1;
    }

    return 0;
  };

  Chrono.sortDesc = function (first, second) {
    return -Chrono.sortAsc(first, second);
  };
  //     module.exports = Chrono;
  // }
  // else {
  //     window.Chrono = Chrono;
  // }

  return Chrono;

}());
