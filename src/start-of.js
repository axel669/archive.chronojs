const startOf = {
    second: date => date.setMilliseconds(0),
    minute: date => date.setSeconds(0, 0),
    hour: date => date.setMinutes(0, 0, 0),
    day: date => date.setHours(0, 0, 0, 0),
    month: date => {
        date.setDate(1)
        startOf.day(date)
    },
    year: date => {
        date.setMonth(0, 1)
        startOf.day(date)
    },

    week: (date, localeData) => {
        const weekStart = localeData.week
        const weekday = date.getDay()

        const offset = (weekStart - weekday - 7) % 7

        date.setDate(date.getDate() + offset)
        startOf.day(date)
    },
}

export default (date, localeData, unit) => {
    if (startOf[unit] === undefined) {
        throw new Error(`Start of ${unit} is not supported`)
    }
    startOf[unit](date, localeData)
}
