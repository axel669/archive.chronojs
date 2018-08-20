// // debugger;
// const now = Chrono("Mon Jan 01 2018 20:17:09 GMT-0800");
// const now2 = Chrono("Mon Jan 01 2018 20:17:09 GMT-0700");
// const now3 = Chrono("Mon Jan 01 2018 20:17:09 GMT-0000");
// const other = now.shift(12345, 'hr');
//
// console.log(now.format("[testing] hh:mm:ss:mmmtt yyyyTT"));
// console.log(now.toUTCString());
// console.log(other.toUTCString());
// console.log(now.dif(other));
// console.log(now.time, now2.time, now.time - now2.time);
//
// console.log(now.endOf('yr'));
// console.log(now.endOf('day'));
// console.log(now.shift(2, 'mon').endOf('month').shift(-1, 'mon').format("hh:mm:ss:mmmtt"));
// console.log(now.format("L"));
// console.log(now.format("LL"));
//
// console.log(now.startOf('week'));
// console.log(other.startOf('qtr'));
// console.log(now.endOf('week'));
// console.log(now.endOf('qtr'));
// console.log(now3.endOf('qtr'));
// console.log(other.endOf('qtr'));
// console.log(Chrono(null, 'deu').format());

// debugger;
// moment("08/20/2018", "L");

const format = Chrono(null, 'deu').format("LL hh:mm:ss");

const target = 2000;
let res = [];

// moment(format, "L hh:mm:ss");

// console.log(Chrono.parse("9am", "htt"));
// console.log(Chrono.parse("09pm", "hhtt"));

// console.log(Chrono.parse(format, "LL hh:mm:ss"));

// const s = "07/05/2018 17:42:05";
const s = format;
const f = "LL hh:mm:ss";
const f2 = f.slice(1);

console.log(s);

console.log(Chrono.parse(s, f, 'deu'));

// console.time('moment');
// for (let i = 0; i < target; i += 1) {
//     res.push(moment(s, f2, 'de-de'));
//     // res.push(moment(format, "L hh:mm:ss"));
// }
// console.timeEnd('moment');
// console.log(res[0].toString());
// //
// res = [];
// console.time('chrono');
// for (let i = 0; i < target; i += 1) {
//     // res = Chrono({});
//     // res.push(Chrono({}));
//     // res.push(Chrono.parse(format, "LL hh:mm:ss"));
//     // res.push(Chrono.parse("7", "M"));
//     res.push(Chrono.parse(s, f, 'deu'));
// }
// console.timeEnd('chrono');
// console.log(res[0]);
