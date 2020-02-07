const getTimezone = (date, format) => {
    const localeString = date.toLocaleString({
        timeZoneName: format,
        hour: "numeric",
        hour12: false,
    })

    return localeString.slice(
        localeString.indexOf(" ") + 1
    )
}

const formatMethod = {
    d: (date) => date.dayOfWeek,
    dd: (date) => date.localeData.weekdayNarrow[date.weekday],
    ddd: (date) => date.localeData.weekdayShort[date.weekday],
    dddd: (date) => date.localeData.weekdayLong[date.weekday],
    D: (date) => date.day,
    DD: (date) => `0${date.day}`.slice(-2),
    DDD: (date) => "",
    DDDD: (date) => "",
    E: (date) => date.dayOfWeek + 1,
    h: (date) => ((date.hour % 12) != 0) ? (date.hour % 12) : 12,
    hh: (date) => `0${((date.hour % 12) != 0) ? (date.hour % 12) : 12 || 12}`.slice(-2),
    H: (date) => date.hour,
    HH: (date) => `0${date.hour}`.slice(-2),
    m: (date) => date.minute,
    mm: (date) => `0${date.minute}`.slice(-2),
    mmm: (date) => `00${date.millisecond}`.slice(-3),
    M: (date) => date.month + 1,
    MM: (date) => `0${date.month + 1}`.slice(-2),
    MMM: (date) => date.localeData.monthShort[date.month],
    MMMM: (date) => date.localeData.monthLong[date.month],
    MMMMM: (date) => date.localeData.monthNarrow[date.month],
    s: (date) => date.second,
    ss: (date) => `0${date.second}`.slice(-2),
    sss: (date) => Math.floor((date - date.startOf("day")) / 1000),
    t: (date) => (date.hour < 12) ? "A" : "P",
    tt: (date) => (date.hour < 12) ? "AM" : "PM",
    TT: (date) => (date.year < 0) ? "BC" : "AD",
    yy: (date) => `0${date.year}`.slice(-2),
    yyyy: (date) => date.year,
    YY: (date) => `0${date.year}`.slice(-2),
    YYYY: (date) => date.year,
    L: (date) => date.format(date.localeData.shortDateFormat),
    LL: (date) => date.format(date.localeData.longDateFormat),
    LLL: (date) => date.format("$dddd $MMMM $D $YYYY"),
    z: (date) => getTimezone(date, "short"),
    Z: (date) => getTimezone(date, "long"),
    IO: date => date.isoOrdinal,
    IW: date => date.isoWeek,
    IY: date => date.isoYear,
}

const formatMethods = Object
    .keys(formatMethod)
    .sort()
    .reverse()
const formatRegex = new RegExp(
    `\\$(\\$|${formatMethods.join("|")})`,
    "g"
)

const formatDate = (formatString, date) => formatString.replace(
    formatRegex,
    (_, format) => {
        if (format === "$") {
            return "$"
        }

        if (formatMethod[format] === undefined) {
            throw new Error(`No format method defined for '${format}'`)
        }

        return formatMethod[format](date)
    }
)

// module.exports = formatDate
export default formatDate
