const endOf = {
    second: date => date.setMilliseconds(999),
    minute: date => date.setSeconds(59, 999),
    hour: date => date.setMinutes(59, 59, 999),
    day: date => date.setHours(23, 59, 59, 999),
    month: date => {
        date.setDate(1)
        date.setMonth(date.getMonth() + 1)
        date.setDate(0)
        endOf.day(date)
    },
    year: date => {
        endOf.day(date)
        date.setMonth(11, 31)
    },

    week: (date, localeData) => {
        const weekStart = localeData.week
        const weekday = date.getDay()

        const offset = (6 - weekday + weekStart) % 7

        date.setDate(date.getDate() + offset)
        endOf.day(date)
    },
}

export default (date, localeData, unit) => {
    if (endOf[unit] === undefined) {
        throw new Error(`Start of ${unit} is not supported`)
    }
    endOf[unit](date, localeData)
}
