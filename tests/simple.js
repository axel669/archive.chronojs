const Chrono = require("../index.js")

const now = Chrono.local(2020, 1, 10)
const later = now.shift({minute: 5, month: 1, millisecond: 455, second: 31, minute: 4, hour: 15, day: 10})

const dif = Chrono.dif(now, later)

const wat = new Date()
wat.setTime(dif)

const compose = (...funcs) =>
    (...arg) => funcs.reduce(
        (current, next) => next(...current),
        arg
    )

const convert = compose(
    (dif, value) => [
        {...dif, millisecond: value % 1000},
        Math.floor(value / 1000)
    ],
    (dif, value) => [
        {...dif, second: value % 60},
        Math.floor(value / 60)
    ],
    (dif, value) => [
        {...dif, minute: value % 60},
        Math.floor(value / 60)
    ],
    (dif, value) => [
        {...dif, hour: value % 24},
        Math.floor(value / 24)
    ],
)

console.log(
    convert({}, dif)
)

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
