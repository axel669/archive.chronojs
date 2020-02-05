const localToCountry = require("./locale-to-country.js")

const localeCache = {}

const piSunday = new Date(1971, 2, 14)

const weekdayDates = Array.from(
    {length: 7},
    (_, day) => {
        const date = new Date(piSunday)
        date.setDate(14 + day)
        return date
    }
)
const monthDates = Array.from(
    {length: 12},
    (_, month) => {
        const date = new Date(piSunday)
        date.setMonth(month)
        return date
    }
)

const dayMonthForLocale = locale => ({
    weekdayLong: weekdayDates.map(
        date => date.toLocaleDateString(locale, {weekday: "long"})
    ),
    weekdayShort: weekdayDates.map(
        date => date.toLocaleDateString(locale, {weekday: "short"})
    ),
    weekdayNarrow: weekdayDates.map(
        date => date.toLocaleDateString(locale, {weekday: "narrow"})
    ),
    monthLong: monthDates.map(
        date => date.toLocaleDateString(locale, {month: "long"})
    ),
    monthShort: monthDates.map(
        date => date.toLocaleDateString(locale, {month: "short"})
    ),
    monthNarrow: monthDates.map(
        date => date.toLocaleDateString(locale, {month: "narrow"})
    ),
})

const loadLocale = given => {
    const locale = given.toLowerCase()

    if (localeCache[locale] === undefined) {
        const baseInfo = localToCountry[locale] || {
            longDateFormat: "DD/MM/YYYY",
            shortDateFormat: "DD/MM",
            locale: loc,
            week: 0,
        }
        baseInfo.longDateFormat = baseInfo.longDateFormat.replace(
            /\b\w/g,
            s => `$${s}`
        )
        baseInfo.shortDateFormat = baseInfo.shortDateFormat.replace(
            /\b\w/g,
            s => `$${s}`
        )

        localeCache[locale] = {
            ...baseInfo,
            ...dayMonthForLocale(locale),
        }
    }

    return localeCache[locale]
}

// export default loadLocale
module.exports = loadLocale
