const Chrono = require("../index.js")

// const
suite(
    "start/end",
    setup(
        env => {
            env.source = Chrono.local(2020, 3, 14, 15, 9, 26, 653)
            env.expected = {
                start: {
                    second: new Date(2020, 2, 14, 15, 9, 26),
                    minute: new Date(2020, 2, 14, 15, 9),
                    hour: new Date(2020, 2, 14, 15),
                    day: new Date(2020, 2, 14),
                    week: new Date(2020, 2, 8),
                    month: new Date(2020, 2, 1),
                    year: new Date(2020, 0, 1),
                },
                end: {
                    second: new Date(2020, 2, 14, 15, 9, 26),
                    minute: new Date(2020, 2, 14, 15, 9),
                    hour: new Date(2020, 2, 14, 15),
                    day: new Date(2020, 2, 14),
                    week: new Date(2020, 2, 8),
                    month: new Date(2020, 2, 1),
                    year: new Date(2020, 0, 1),
                },
            }
        }
    ),
    suite(
        "startOf",
        test(
            "second",
            ({env}) => {
                const timestamp = env.source.startOf("second").timestamp
                expect(timestamp)
                    .toBe(env.expected.second.getTime())
            }
        ),
        test(
            "minute",
            ({env}) => {
                const timestamp = env.source.startOf("minute").timestamp
                expect(timestamp)
                    .toBe(env.expected.minute.getTime())
            }
        ),
        test(
            "hour",
            ({env}) => {
                const timestamp = env.source.startOf("hour").timestamp
                expect(timestamp)
                    .toBe(env.expected.hour.getTime())
            }
        ),
        test(
            "day",
            ({env}) => {
                const timestamp = env.source.startOf("day").timestamp
                expect(timestamp)
                    .toBe(env.expected.day.getTime())
            }
        ),
        test(
            "week",
            ({env}) => {
                const timestamp = env.source.startOf("week").timestamp
                expect(timestamp)
                    .toBe(env.expected.week.getTime())
            }
        ),
        test(
            "month",
            ({env}) => {
                const timestamp = env.source.startOf("month").timestamp
                expect(timestamp)
                    .toBe(env.expected.month.getTime())
            }
        ),
        test(
            "year",
            ({env}) => {
                const timestamp = env.source.startOf("year").timestamp
                expect(timestamp)
                    .toBe(env.expected.year.getTime())
            }
        ),
    )
)
