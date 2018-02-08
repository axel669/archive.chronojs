const now = Chrono("Mon Jan 01 2018 20:17:09 GMT-0800");
const now2 = Chrono("Mon Jan 01 2018 20:17:09 GMT-0700");
const other = now.shift(12345, 'hour');

console.log(now.format("[testing] hh:mm:sstt yyyyTT"));
console.log(now.toUTCString());
console.log(other.toUTCString());
console.log(now.dif(other));
console.log(now.time, now2.time, now.time - now2.time);
