const now = Chrono("Mon Jan 01 2018 20:17:09 GMT-0800");
const now2 = Chrono("Mon Jan 01 2018 20:17:09 GMT-0700");
const other = now.shift(12345, 'hour');

console.log(now.format("[testing] hh:mm:ss:mmmtt yyyyTT"));
console.log(now.toUTCString());
console.log(other.toUTCString());
console.log(now.dif(other));
console.log(now.time, now2.time, now.time - now2.time);

console.log(now.endOf('yr'));
console.log(now.endOf('day'));
console.log(now.shift(2, 'mon').endOf('month').shift(-1, 'mon').format("hh:mm:ss:mmmtt"));
