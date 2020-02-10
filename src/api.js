import {localeSupported} from "./locale-to-country.js"
import loadLocale from "./load-locale.js"
import Chrono from "./chrono.js"

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
}

export default API
