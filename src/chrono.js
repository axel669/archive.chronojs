const loadLocale = require("./load-locale.js")
const format = require("./format.js")

const shiftAliasGroups = [
    ["ms", "milliseconds", "millisecond"],
    ["s", "seconds", "second"],
    ["min", "minutes", "minute"],
    ["hr", "hours", "hour"],
    ["day", "days"],
    ["wk", "week", "weeks"],
    ["mon", "month", "months"],
    ["qtr", "quarter", "quarters"],
    ["yr", "year", "years"],
    ["decade", "decades"],
]
const shiftAliases = shiftAliasGroups.reduce(
    (mapping, nameList) => {
        const target = nameList[0]

        for (const alias of nameList) {
            mapping[alias] = target
        }
        return mapping
    },
    {}
)

const offsets = [
    1,
    0,
    -1,
    -2,
    -3,
    3,
    2,
]
const calcISOWeek = date => {
    const isoWeekStart = new Date(date)
    isoWeekStart.setHours(0, 0, 0, 0)
    isoWeekStart.setDate(
        isoWeekStart.getDate()
        - isoWeekStart.getDay()
        + 1
    )
    const isoYearStart = new Date(
        isoWeekStart.getFullYear(),
        0,
        1
    )
    isoYearStart.setDate(
        isoYearStart.getDate()
        + offsets[isoYearStart.getDay()]
    )

    const weekDif = Math.floor(
        (isoWeekStart - isoYearStart)
        / (7 * 24 * 60 * 60 * 1000)
    )

    return weekDif + 1
}
const calcISOOrdinal = date => {
    const startOfDay = new Date(date)
    startOfDay.setHours(0, 0, 0, 0)
    const startOfYear = new Date(
        date.getFullYear(),
        0,
        1
    )

    return (
        (startOfDay - startOfYear)
        / (24 * 60 * 60 * 1000)
        + 1
    )
}
const calcISOYear = date => {
    const monday = new Date(date)
    monday.setDate(
        monday.getDate()
        - monday.getDay()
        + 1
    )
    return monday.getFullYear()
}

const Chrono = (date, localeData, tzOffset) => {
    const localDate = new Date(date.getTime() - tzOffset)
    const tzMinutes = tzOffset / 1000 / 60
    return {
        get localeData() {
            return localeData
        },
        get locale() {
            return localeData.locale
        },

        get millisecond() {
            return date.getUTCMilliseconds()
        },
        get second() {
            return date.getUTCSeconds()
        },
        get minute() {
            return date.getUTCMinutes()
        },
        get hour() {
            return date.getUTCHours()
        },
        get day() {
            return date.getUTCDate()
        },
        get weekday() {
            return date.getUTCDay()
        },
        get month() {
            return date.getUTCMonth() + 1
        },
        get year() {
            return date.getUTCFullYear()
        },
        get isoWeekday() {
            return date.getUTCDay() || 7
        },
        get isoWeek() {
            return calcISOWeek(localDate)
        },
        get isoOrdinal() {
            return calcISOOrdinal(localDate)
        },
        get isoYear() {
            return calcISOYear(localDate)
        },

        get timestamp() {
            return localDate.getTime()
        },
        get tzOffset() {
            return tzMinutes
        },

        toArray: () => [
            date.getFullYear(),
            date.getMonth() + 1
        ],

        toString: () => localDate.toString(),
        toLocaleString: () => localDate.toLocaleString(localeData.locale),
        toUTCString: () => localDate.toUTCString(),
        valueOf: () => localDate.getTime(),

        inLocale: locale => Chrono(
            date,
            loadLocale(locale),
            tzOffset
        ),
        withTimezoneOffset: (newOffset) => {
            const offset = newOffset * 60 * 1000
            const date = new Date(localDate)
            date.setTime(date.getTime() + offset)

            return Chrono(date, localeData, offset)
        }
    }
}
const defaultLocale = "en-US"
const defaultTZOffset = -(new Date()).getTimezoneOffset() * 60 * 1000

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
        date.setTime(date.getTime() + defaultTZOffset)
        return Chrono(
            date,
            loadLocale(defaultLocale),
            defaultTZOffset
        )
    },
    fromObject: (source) => {
    },
    fromDate: sourceDate => {
        const date = new Date(sourceDate)
        date.setTime(date.getTime() + defaultTZOffset)

        console.log(date)

        return Chrono(
            date,
            loadLocale(defaultLocale),
            defaultTZOffset
        )
    },
    fromTimestamp: ts => {
    },
}

// const test = API.local(2020, 2, 1).inLocale("es-ES")
const now = new Date()
now.setHours(20)
// const test = API.local()
// const test = API.local(2016, 1, 1)
const test = API.fromDate(now)
console.log(now.toString())
console.log(test.toString())
// console.log(test.millisecond)
console.log(test.isoWeek)
console.log(test.isoOrdinal)
console.log(test.isoYear)
console.log(test.hour)
console.log(now.getUTCHours())
console.log(test.tzOffset)

const offset = test.withTimezoneOffset(0)
console.log(offset.hour)

const early = API.local(2020, 1, 1)
console.log(
    Math.min(now, early),
    Math.min(test, early)
)
// console.log(test.localeData)
// console.log(test.toLocaleString())

// console.log(countryData.length)
// console.log(shiftAliases)

// console.log(
//     loadLocale("en-US")
// )
// console.log(
//     loadLocale("es-ES")
// )
