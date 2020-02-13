import {localeSupported} from "./locale-to-country.js"
import loadLocale from "./load-locale.js"
import Chrono from "./chrono.js"

const compose = (...funcs) =>
    (...arg) => funcs.reduce(
        (current, next) => next(...current),
        arg
    )

const defaults = {
    locale: "en-US",
    tzOffset: -(new Date()).getTimezoneOffset() * 60 * 1000,
}
const API = {
    local: (...args) => {
        for (const arg of args) {
            if (typeof arg !== "number") {
                throw new Error("Chrono.local only accepts numeric arguments")
            }
        }
        if (args.length > 1) {
            args = [...args]
            args[1] -= 1
        }
        const date = new Date(...args)
        return Chrono(
            date,
            loadLocale(defaults.locale),
            defaults.tzOffset
        )
    },
    fromObject: (source) => {
        const {
            year = 1970,
            month = 1,
            day = 1,
            hour = 1,
            minute = 1,
            second = 1,
            millisecond = 1
        } = source

        return Chrono(
            new Date(year, month, day, hour, minute, second, millisecond),
            loadLocale(defaults.locale),
            defaults.tzOffset
        )
    },
    fromDate: sourceDate => {
        const date = new Date(sourceDate)

        return Chrono(
            date,
            loadLocale(defaults.locale),
            defaults.tzOffset
        )
    },
    fromTimestamp: ts => {
        const date = new Date()
        date.setTime(ts)

        return Chrono(
            date,
            loadLocale(defaults.locale),
            defaults.tzOffset
        )
    },

    localeSupported,

    setDefaultLocale: locale => {
        if (localeSupported(locale) === false) {
            throw new Error(`Locale '${locale}' is not supported`)
        }
        defaults.locale = locale
    },
    setDefaultTZOffset: offset => {
        defaults.tzOffset = offset
    },

    max: (...dates) => {
        let max = dates[0]

        for (const date of dates) {
            if (date > max) {
                max = date
            }
        }

        return max
    },
    min: (...dates) => {
        let min = dates[0]

        for (const date of dates) {
            if (date < min) {
                min = date
            }
        }

        return min
    },

    dif: (a, b) => {
        const first = API.min(a, b)
        const second = API.max(a, b)

        const msDiff = second.timestamp - first.timestamp

        const convert = compose(
            (dif, value) => [
                {...dif, millisecond: value % 1000},
                Math.floor(value / 1000)
            ],
            (dif, value) => [
                {...dif, second: value % 60},
                Math.floor(value / 60)
            ],
            (dif, value) => [
                {...dif, minute: value % 60},
                Math.floor(value / 60)
            ],
            (dif, value) => [
                {...dif, hour: value % 24},
                Math.floor(value / 24)
            ],
            (dif, value) => ({
                ...dif,
                ordinal: value,
            })
        )

        const duration = convert({}, msDiff)
        duration.year = second.year - first.year
        duration.month = second.month - first.month
        duration.day = second.day - first.day

        if (duration.day < 0) {
            const adjust = second.rawDate
            adjust.setDate(0)
            duration.month -= 1
            duration.day += adjust.getDate()
        }

        return duration
    }
}

export default API
