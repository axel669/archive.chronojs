const Chrono = require("../index.js")

const now = Chrono.local(2020, 1, 10)
const later = now.shift({minute: 5, month: 1, millisecond: 455, second: 31, minute: 4, hour: 15, day: 20})

const dif = Chrono.dif(now, later)

console.log(dif)

// const wat = new Date()
// wat.setTime(dif)

// const duration = convert({}, dif)
// duration.year = later.year - now.year
// duration.month = later.month - now.month
// duration.day = later.day - now.day

// if (duration.day < 0) {
//     const adjust = later.rawDate
//     adjust.setDate(0)
//     duration.month -= 1
//     duration.day += adjust.getDate()
// }

// console.log(later.daysInMonth)
// console.log(later.toString())

// console.log(duration)

// const now = new Date()
// const test = Chrono.fromDate(now)

// console.log(
//     test
//         .shift({
//             hour: 2,
//             minute: -5,
//         })
//         .toString()
// )

// const monthEnd = Chrono.local(2020, 1, 31)
// console.log(monthEnd.toString())
// console.log(
//     monthEnd
//         .shift({
//             month: 1,
//             second: -100,
//         })
//         .toString()
// )
// console.log(
//     monthEnd
//         .shift({
//             second: -100,
//             month: 1,
//         })
//         .toString()
// )

// const dates = [
//     [2019, 1, 1],
//     [2020, 1, 1],
//     [2019, 5, 1],
//     [2020, 6, 1],
// ]
// for (const date of dates) {
//     console.log(
//         date, Chrono.local(...date).isDST, Chrono.local(...date).isLeapYear
//     )
// }
