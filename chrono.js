'use strict';

var aliasMethods = [['ms', ['milliseconds', 'millisecond']], ['s', ['seconds', 'second']], ['min', ['minutes', 'minute']], ['hr', ['hours', 'hour']], ['day', ['days']], ['wk', ['weeks', 'week']], ['mon', ['months', 'month']], ['yr', ['years', 'year']], ['decade', ['decades']]];

var alias = function alias(source, aliases) {
    return aliases.forEach(function (aliasInfo) {
        var base = aliasInfo[0];
        var aliasList = aliasInfo[1];
        aliasList.forEach(function (alias) {
            return source[alias] = source[base];
        });
    });
};

var add_ms = function add_ms(date, ms) {
    return new Date(date.getTime() + ms);
};
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
        date.setMonth(date.month + amount);
        if (date.month - start > amount) {
            date.setDate(0);
        }
    }
};
alias(shiftDate, aliasMethods);

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
    mon: function mon(date) {
        startMethods.day(date);
        date.setDate(1);
    },
    quarters: function quarters(date) {
        startMethods.days(date);
        var month = date.month;
        date.setMonth(month - month % 4);
    },
    yr: function yr(date) {
        startMethods.day(date);
        date.setMonth(0, 1);
    }
};
alias(startMethods, aliasMethods);

var formatList = {
    monthShort: ['Jan'],
    month: [],
    day: [],
    dayShort: []
};

var formatPattern = /\[.*?\]|(\w)\1{0,3}/g;
var formatMethods = {
    M: function M(date) {
        return date.month;
    },
    MM: function MM(date) {
        return ('0' + date.month).slice(-2);
    },
    MMM: function MMM(date) {
        return formatList.monthShort[date.month];
    },
    MMMM: function MMMM(date) {
        return formatList.month[date.month];
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
    dif: function dif(other) {
        var difMS = Math.abs(this.time - other.time);
        var dif = Chrono(difMS);
        return {
            milliseconds: dif.utcMilliseconds,
            seconds: dif.utcSeconds,
            minutes: dif.utcMinutes,
            hours: dif.utcHours,
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
            return formatMethods[match](_this);
        });
    }
};
Object.setPrototypeOf(ChronoProto, Date.prototype);
var Chrono = function Chrono() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var thing = new (Function.prototype.bind.apply(Date, [null].concat(args)))();
    Object.setPrototypeOf(thing, ChronoProto);

    return thing;
};
Chrono.min = new Chrono(-8640000000000000);
Chrono.max = new Chrono(8640000000000000);
Chrono.trigger = function (time, func) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
    }

    return setTimeout(function () {
        return func.apply(undefined, args);
    }, time);
};
Chrono.interval = function (time, func) {
    for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
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
        return func.apply(undefined, args);
    }, time);

    return { cancel: cancel };
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

if (typeof window !== 'undefined') {
    window.Chrono = Chrono;
}
if (typeof module !== 'undefined') {
    module.exports = Chrono;
}