const Chrono = require("../index.js")

const now = new Date()
const test = Chrono.fromDate(now)

console.log(
    test
        .shift({
            hour: 2,
            minute: -5,
        })
        .toString()
)

const monthEnd = Chrono.local(2020, 1, 31)
console.log(monthEnd.toString())
console.log(
    monthEnd
        .shift({
            month: 1,
            second: -100,
        })
        .toString()
)
console.log(
    monthEnd
        .shift({
            second: -100,
            month: 1,
        })
        .toString()
)

const dates = [
    [2019, 1, 1],
    [2020, 1, 1],
    [2019, 5, 1],
    [2020, 6, 1],
]
for (const date of dates) {
    console.log(
        date, Chrono.local(...date).isDST, Chrono.local(...date).isLeapYear
    )
}
