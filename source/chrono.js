import country from './countries-min.js';

const functionMap = [
    ['ms', 'milliseconds', 'millisecond'],
    ['s', 'seconds', 'second'],
    ['min', 'minutes', 'minute'],
    ['hr', 'hours', 'hour'],
    ['day', 'days'],
    ['wk', 'week', 'weeks'],
    ['mon', 'month', 'months'],
    ['qtr', 'quarter', 'quarters'],
    ['yr', 'year', 'years'],
    ['decade', 'decades']
].reduce(
    (mapped, names) => {
        const target = names[0];
        for (const name of names) {
            mapped[name] = target;
        }
        return mapped;
    },
    {}
);

const localeArgMap = country.reduce(
    (map, country) => {
        map[country.iso2.toLowerCase()] = country;
        map[country.iso3.toLowerCase()] = country;
        map[country.locale.toLowerCase()] = country;
        return map;
    },
    {}
);
const loadedLocales = {};
const genLocaleData = do {
    const count = n => new Array(n).fill(0).map((a, b) => b);
    const baseDate = new Date(1971, 2, 14)
    const days = count(7).map(
        day => new Date(new Date(baseDate).setDate(14 + day))
    );
    const months = count(12).map(
        month => new Date(new Date(baseDate).setMonth(month))
    );

    (locale) => ({
        dayLong: days.map(d => d.toLocaleString(locale, {weekday: 'long'})),
        dayShort: days.map(d => d.toLocaleString(locale, {weekday: 'short'})),
        dayNarrow: days.map(d => d.toLocaleString(locale, {weekday: 'narrow'})),
        monthLong: months.map(m => m.toLocaleString(locale, {month: 'long'})),
        monthShort: months.map(m => m.toLocaleString(locale, {month: 'short'})),
        monthNarrow: months.map(m => m.toLocaleString(locale, {month: 'narrow'}))
    });
};
const loadLoc = loc => {
    if (loadedLocales[loc] === undefined) {
        const base = do {
            if (localeArgMap[loc] !== undefined) {
                localeArgMap[loc];
            }
            else {
                ({
                    longDateFormat: "DD/MM/YYYY",
                    shortDateFormat: "DD/MM",
                    locale: loc,
                    week: 0
                });
            }
        }

        loadedLocales[loc] = {...base, ...genLocaleData(base.locale)};
    }

    return loadedLocales[loc];
};

const add_ms = (date, ms) => new Date(date.getTime() + ms);
const ms_in = {
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    week: 1000 * 60 * 60 * 24 * 7
};
const shift = (() => {
    const ms = (date, amount) =>
        date.setTime(date.time + amount);
    const s = (date, amount) => ms(date, amount * ms_in.second);
    const min = (date, amount) => ms(date, amount * ms_in.minute);
    const hr = (date, amount) => ms(date, amount * ms_in.hour);
    const day = (date, amount) =>
        date.setDate(date.date + amount);
    const wk = (date, amonut) => day(date, amount * 7);
    const mon = (date, amount) => {
        const expected = (date.month + amount) % 12;
        date.setMonth(date.getMonth() + amount);
        if (date.month !== expected) {
            date.setDate(0);
        }
    }
    const qtr = (date, amount) => mon(date, amount * 3);
    const yr = (date, amount) => mon(date, amount * 12);
    const decade = (date, amount) => mon(date, amount * 120);

    return {ms, s, min, hr, day, wk, mon, qtr, yr, decade};
})();

const start = (() => {
    const s = date => date.setMilliseconds(0);
    const min = date => date.setSeconds(0, 0);
    const hr = date => date.setMinutes(0, 0, 0);
    const day = date => date.setHours(0, 0, 0, 0);
    const wk = date => {
        const _w = date.localeData.week;
        const _n = date.dayOfWeek;
        let offset = _w - _n;
        if (offset > 0) {
            offset -= 7;
        }

        date.setDate(date.date + offset);
        day(date);
    };
    const mon = date => {
        day(date);
        date.setDate(1);
    };
    const qtr = date => {
        const m = date.month;
        mon(date);
        date.setMonth(m - (m % 3));
    };
    const yr = date => {
        day(date);
        date.setMonth(0, 1);
    };

    return {s, min, hr, day, wk, mon, qtr, yr};
})();

const end = (() => {
    const s = date => date.setMilliseconds(999);
    const min = date => date.setSecond(59, 999);
    const hr = date => date.setMinutes(59, 59, 999);
    const day = date => date.setHours(23, 59, 59, 999);
    const wk = date => {
        const _w = date.localeData.week;
        const _n = date.dayOfWeek;
        let offset = 6 + (-_n) + _w;
        if (offset >= 7) {
            offset -= 7;
        }

        date.setDate(date.date + offset);
        day(date);
    };
    const mon = date => {
        day(date);
        date.setDate(1);
        date.setMonth(date.month + 1);
        date.setDate(0);
    };
    const qtr = date => {
        const m = date.month;
        date.setDate(1);
        date.setMonth(m + (2 - (m % 3)));
        mon(date);
    };
    const yr = date => {
        day(date);
        date.setMonth(11, 31);
    };

    return {s, min, hr, day, wk, mon, qtr, yr};
})();

const formatPattern = /\[.*?\]|(\w)\1{0,3}/g;
const formatMethods = {
    d: date => date.dayOfWeek,
    dd: date => date.localeData.dayNarrow[date.dayOfWeek],
    dd: date => date.localeData.dayShort[date.dayOfWeek],
    dd: date => date.localeData.dayLong[date.dayOfWeek],
    D: date => date.date,
    DD: date => `0${date.date}`.slice(-2),
    DDD: date => '',
    DDDD: date => '',
    E: date => date.dayOfWeek + 1,
    h: date => (date.hours % 12) || 12,
    hh: date => `0${(date.hours % 12) || 12}`.slice(-2),
    H: date => date.hours,
    HH: date => `0${date.hours}`.slice(-2),
    m: date => date.minutes,
    mm: date => `0${date.minutes}`.slice(-2),
    mmm: date => `00${date.milliseconds}`.slice(-3),
    M: date => date.month + 1,
    MM: date => `0${date.month + 1}`.slice(-2),
    MMM: date => date.localeData.monthShort[date.month],
    MMMM: date => date.localeData.monthLong[date.month],
    MMMMM: date => date.localeData.monthNarrow[date.month],
    s: date => date.seconds,
    ss: date => `0${date.seconds}`.slice(-2),
    t: date => (date.hours < 12) ? "A" : "P",
    tt: date => (date.hours < 12) ? "AM" : "PM",
    TT: date => (date.year < 0) ? "BC" : "AD",
    yy: date => `0${date.year}`.slice(-2),
    yyyy: date => date.year,
    YY: date => `0${date.year}`.slice(-2),
    YYYY: date => date.year,
    L: date => date.format(date.localeData.shortDateFormat),
    LL: date => date.format(date.localeData.longDateFormat)
};

const ChronoProto = {
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
    shift(amount, unit) {
        const newChrono = new Chrono(this);
        const func = functionMap[unit];
        shift[func](newChrono, amount);

        return newChrono;
    },
    startOf(unit) {
        const newChrono = new Chrono(this);
        const func = functionMap[unit];
        start[func](newChrono);

        return newChrono;
    },
    endOf(unit) {
        const newChrono = new Chrono(this);
        const func = functionMap[unit];
        end[func](newChrono);

        return newChrono;
    },
    dif(other) {
        const difMS = Math.abs(
            this.time - other.time
        );
        const dif = Chrono(difMS);
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
    format(formatString = null) {
        if (formatString === null) {
            return this.toLocaleString(this.locale);
        }
        return formatString.replace(
            formatPattern,
            match => {
                if (match.charAt(0) === "[") {
                    return match.slice(1, -1);
                }
                if (formatMethods.hasOwnProperty(match) === false) {
                    throw new Error(`"${match}" is not a valid date formatter`);
                }
                return formatMethods[match](this);
            }
        );
    },
    changeLoc(loc) {
        return new Chrono(this, loc);
    }
};
Object.setPrototypeOf(ChronoProto, Date.prototype);
const Chrono = (...args) => {
    const thing = (() => {
        if (args.length === 0) {
            return new Date();
        }
        if (args[0] instanceof Date) {
            return new Date(args[0]);
        }
        if (typeof args[0] === 'object') {
            const src = new Date();
            const {
                year = src.getFullYear(),
                month = src.getMonth(),
                day = src.getDate() - 1,
                hour = src.getHours(),
                minute = src.getMinutes(),
                second = src.getSeconds(),
                millisecond = src.getMilliseconds()
            } = args[0] ?? {};
            return new Date(year, month, day + 1, hour, minute, second, millisecond);
        }
        return new Date(...args);
    })();
    Object.setPrototypeOf(thing, ChronoProto);
    thing.__isChrono = true;

    const localeData = do {
        if (typeof args[0] === 'object' && args.length > 1) {
            loadLoc(args[1].toLowerCase());
        }
        else {
            if (args[0]?.__isChrono === true) {
                args[0].localeData
            }
            else {
                loadLoc(lowercaseDefaultLocale);
            }
        }
    }
    thing.localeData = localeData;
    thing.locale = localeData.locale;

    return thing;
};
let defaultLocale = "en-US";
let lowercaseDefaultLocale = "en-us";
Object.defineProperty(
    Chrono,
    'defaultLocale',
    {
        enumerable: true,
        configurable: false,
        get() {
            return defaultLocale;
        },
        set(locale) {
            locale = locale ?? "en-US";
            defaultLocale = locale;
            lowercaseDefaultLocale = locale.toLowerCase();
        }
    }
);
Chrono.defaultLocale = navigator.language;
Chrono.min = new Chrono(-8640000000000000);
Chrono.max = new Chrono(8640000000000000);
Chrono.locData = (loc) => loadLoc(loc);
Chrono.trigger = (time, func, ...args) =>
    setTimeout(() => func(...args), time);
Chrono.interval = (time, func, ...args) => {
    let intervalID = null;
    const cancel = () => {
        if (intervalID !== null) {
            clearInterval(intervalID);
            intervalID = null;
        }
    };

    intervalID = setInterval(() => func(...args), time);

    return {cancel};
};
Chrono.sortAsc = (first, second) => {
    if (first < second) {
        return -1;
    }
    if (first > second) {
        return 1;
    }
    return 0;
};
Chrono.sortDesc = (first, second) => -Chrono.sortAsc(first, second);
Chrono.parse = (dateString, locale = null, format = null) => {
    if (format === null) {
        return Chrono(Date.parse(dateString));
    }
    if (format === "L") {
        format = loadLoc(locale).shortDateFormat;
    }
    if (format === "LL") {
        format = loadLoc(locale).longDateFormat;
    }
};

export default Chrono;
