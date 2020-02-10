const msFrom = {
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    week: 1000 * 60 * 60 * 24 * 7,
}

const shift = {
    millisecond: (date, ms) => date.setTime(
        date.getTime() + ms
    ),
    second: (date, seconds) => shift.millisecond(date, seconds * msFrom.second),
    minute: (date, minutes) => shift.millisecond(date, minutes * msFrom.minute),
    hour: (date, hours) => shift.millisecond(date, hours * msFrom.hour),
    day: (date, days) => date.setDate(
        date.getDate() + days
    ),
    week: (date, weeks) => shift.day(date, weeks * 7),
    month: (date, months) => {
        const expectedDay = date.getDate()
        date.setMonth(
            date.getMonth() + months
        )

        if (date.getDate() !== expectedDay) {
            date.setDate(0)
        }
    },
    year: (date, years) => date.setYear(
        date.getFullYear() + years
    )
}

const shiftOrder = [
    "millisecond",
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "year",
]

const shiftDate = (date, shifts) => {
    for (const unit of shiftOrder) {
        if (shifts[unit] !== undefined) {
            shift[unit](date, shifts[unit])
        }
    }
}

export default shiftDate
