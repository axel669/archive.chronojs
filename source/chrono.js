const aliasMethods = [
    ['ms', ['milliseconds', 'millisecond']],
    ['s', ['seconds', 'second']],
    ['min', ['minutes', 'minute']],
    ['hr', ['hours', 'hour']],
    ['day', ['days']],
    ['wk', ['weeks', 'week']],
    ['mon', ['months', 'month']],
    ['yr', ['years', 'year']],
    ['decade', ['decades']]
];

const alias = (source, aliases) => aliases.forEach(
    (aliasInfo) => {
        const base = aliasInfo[0];
        const aliasList = aliasInfo[1];
        aliasList.forEach(alias => source[alias] = source[base]);
    }
);

const add_ms = (date, ms) => new Date(date.getTime() + ms);
const ms_in = {
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    week: 1000 * 60 * 60 * 24 * 7
};
const shiftDate = {
    ms(date, amount) {
        date.setTime(date.time + amount);
    },
    s(date, amount) {
        date.setTime(date.time + amount * ms_in.second);
    },
    min(date, amount) {
        date.setTime(date.time + amount * ms_in.minute);
    },
    hr(date, amount) {
        date.setTime(date.time + amount * ms_in.hour);
    },
    day(date, amount) {
        date.setDate(date.date + amount);
    },
    wk(date, amount) {
        date.setDate(date.date + amount * 7);
    },
    mon(date, amount) {
        const start = date.month;
        date.setMonth(date.month + amount);
        if ((date.month - start) > amount) {
            date.setDate(0);
        }
    }
};
alias(
    shiftDate,
    aliasMethods
);


const startMethods = {
    s(date) {
        date.setMilliseconds(0);
    },
    min(date) {
        date.setSeconds(0, 0);
    },
    hr(date) {
        date.setMinutes(0, 0, 0);
    },
    day(date) {
        date.setHours(0, 0, 0, 0);
    },
    mon(date) {
        startMethods.day(date);
        date.setDate(1);
    },
    quarters(date) {
        startMethods.days(date);
        const month = date.month;
        date.setMonth(month - month % 4);
    },
    yr(date) {
        startMethods.day(date);
        date.setMonth(0, 1);
    }
};
alias(
    startMethods,
    aliasMethods
);

const formatList = {
    monthShort: ['Jan', ],
    month: [],
    day: [],
    dayShort: []
};

const formatPattern = /\[.*?\]|(\w)\1{0,3}/g;
const formatMethods = {
    M: date => date.month,
    MM: date => `0${date.month}`.slice(-2),
    MMM: date => formatList.monthShort[date.month],
    MMMM: date => formatList.month[date.month]
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
    shift(amount, unit) {
        const newChrono = new Chrono(this);
        shiftDate[unit](newChrono, amount);

        return newChrono;
    },
    startOf(unit) {
        const newChrono = new Chrono(this);
        startMethods[unit](newChrono);

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
            month: dif.utcMonth,
            years: dif.utcYear - 1970,
            time: dif.time
        };
    },
    format(formatString) {
        return formatString.replace(
            formatPattern,
            match => {
                if (match.charAt(0) === "[") {
                    return match.slice(1, -1);
                }
                return formatMethods[match](this);
            }
        );
    }
};
Object.setPrototypeOf(ChronoProto, Date.prototype);
const Chrono = (...args) => {
    const thing = new Date(...args);
    Object.setPrototypeOf(thing, ChronoProto);

    return thing;
};
Chrono.min = new Chrono(-8640000000000000);
Chrono.max = new Chrono(8640000000000000);
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

if (typeof window !== 'undefined') {
    window.Chrono = Chrono;
}
if (typeof module !== 'undefined') {
    module.exports = Chrono;
}
