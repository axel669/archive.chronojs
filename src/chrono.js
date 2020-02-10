import loadLocale from "./load-locale.js"
import formatDate from "./format.js"
import isoCalc from "./iso-calc.js"
import shiftDate from "./shift.js"
import startOf from "./start-of.js"
import endOf from "./end-of.js"

const daysInMonth = date => {
    const track = new Date(date)
    track.setMonth(track.getMonth() + 1, 0)
    return track.getDate()
}
const daysInYear = date => {
    const start = new Date(date.getFullYear(), 0, 1)
    const end = new Date(date.getFullYear() + 1, 0, 1)
    const dif = end - start

    return Math.floor(
        dif / 24 / 60 / 60 / 1000
    )
}

const Chrono = (localDate, localeData, tzOffset) => {
    const date = new Date(localDate.getTime() + tzOffset)
    const tzMinutes = tzOffset / 1000 / 60

    const dIM = daysInMonth(localDate)
    const dIY = daysInYear(localDate)

    const self = Object.freeze({
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
            return isoCalc.week(localDate)
        },
        get isoOrdinal() {
            return isoCalc.ordinal(localDate)
        },
        get isoYear() {
            return isoCalc.year(localDate)
        },

        get timestamp() {
            return localDate.getTime()
        },
        get tzOffset() {
            return tzMinutes
        },

        get daysInMonth() {
            return dIM
        },
        get daysInYear() {
            return dIY
        },
        get isDST() {
            const nonDST = new Date(self.year, 0, 1)
            const current = localDate
            return nonDST.getTimezoneOffset() !== current.getTimezoneOffset()
        },
        get isLeapYear() {
            return (
                self.year % 4 === 0
                && (
                    self.year % 100 !== 0
                    || self.year % 400 === 0
                )
            )
        },

        get rawDate() {
            return newDate(localDate)
        },

        toArray: () => [
            self.year,
            self.month,
            self.day,
            self.hour,
            self.minute,
            self.second,
            self.millisecond,
        ],
        toObject: () => ({
            year: self.year,
            month: self.month,
            day: self.day,
            hour: self.hour,
            minute: self.minute,
            second: self.second,
            millisecond: self.millisecond,
        }),

        toString: () => localDate.toString(),
        toLocaleString: (options) => localDate.toLocaleString(
            localeData.locale,
            options
        ),
        toUTCString: () => localDate.toUTCString(),
        valueOf: () => localDate.getTime(),

        inLocale: locale => Chrono(
            localDate,
            loadLocale(locale),
            tzOffset
        ),
        with: object => {
            const source = {
                ...self.toObject(),
                ...object
            }

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
                localeData,
                tzOffset
            )
        },
        withTimezoneOffset: (newOffset) => {
            const offset = newOffset * 60 * 1000
            const date = new Date(localDate)
            date.setTime(date.getTime() + offset)

            return Chrono(date, localeData, offset)
        },
        shift: (shifts) => {
            const shiftedDate = new Date(localDate)

            shiftDate(shiftedDate, shifts)

            return Chrono(
                shiftedDate,
                localeData,
                tzOffset
            )
        },
        startOf: unit => {
            const shiftedDate = new Date(localDate)

            startOf(shiftedDate, localeData, unit)

            return Chrono(
                shiftedDate,
                localeData,
                tzOffset
            )
        },
        endOf: unit => {
            const shiftedDate = new Date(localDate)

            endOf(shiftedDate, localeData, unit)

            return Chrono(
                shiftedDate,
                localeData,
                tzOffset
            )
        },

        format: formatString => formatDate(formatString, self)
    })

    return self
}

export default Chrono
