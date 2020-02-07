// const {localeSupported} = require("./locale-to-country.js")
// const loadLocale = require("./load-locale.js")
// const Chrono = require("./chrono.js")
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

const now = new Date()
// now.setHours(2)
const test = API.fromDate(now)

console.log(
    test
        .shift({
            hour: 2,
            minute: -5,
        })
        .toString()
)

const monthEnd = API.local(2020, 1, 31)
console.log(monthEnd.toString())
console.log(
    monthEnd
        .shift({
            month: 1,
        })
        .toString()
)

// console.log(now.toString())
// console.log(test.toString())
// console.log(test.isoWeek)
// console.log(test.isoOrdinal)
// console.log(test.isoYear)
// console.log(test.hour)
// console.log(now.getUTCHours())
// console.log(test.tzOffset)

// const offset = test.withTimezoneOffset(0)
// console.log("tz0", offset.hour)

// const early = API.local(2020, 1, 1)
// console.log(
//     Math.min(now, early),
//     Math.min(test, early)
// )
// console.log(
//     test.format("$MM/$DD/$yyyy $$hi"),
// )
// console.log(test.format("$L"))
// console.log(test.format("$LL"))
// console.log(test.inLocale("es-ES").format("$LLL $HH:$mm:$ss ($z)"))
// console.log(test.format("$LLL $HH:$mm:$ss ($Z)"))
// console.log(
//     test
//         // .inLocale("de-DE")
//         .toLocaleString({
//             weekday: "long",
//             month: "long",
//             year: "numeric",
//             day: "numeric",
//             timeZone: "America/New_York",
//             timeZoneName: "long",
//             hour: "2-digit",
//             minute: "2-digit",
//         })
// )
// console.log(
//     test
//         // .inLocale("es-ES")
//         .toLocaleString({
//             timeZone: "America/New_York",
//             timeZoneName: "long",
//             hour: "2-digit",
//             hour12: false,
//             // hour: "2-digit",
//             // minute: "2-digit",
//         })
// )

// console.log(test.format("day $IO, week $IW, $IY ($Z)"))
// console.log(test.with({hour: 10}).toString())

// console.log(
//     API.min(test, early).toString()
// )
// console.log(
//     API.max(test, early).toString()
// )

export default API
