const offsets = [
    1,
    0,
    -1,
    -2,
    -3,
    3,
    2,
]
const week = date => {
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
const ordinal = date => {
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
const year = date => {
    const monday = new Date(date)
    monday.setDate(
        monday.getDate()
        - monday.getDay()
        + 1
    )
    return monday.getFullYear()
}

// module.exports = {
//     week,
//     ordinal,
//     year,
// }
export default {
    week,
    ordinal,
    year,
}
