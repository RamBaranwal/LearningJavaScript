// it starts from 1 jan 1970

const date = new Date();

console.log(date);
// 2026-08-08T17:12:51.817Z
console.log(date.toString());
// Sat Aug 08 2026 22:42:51 GMT+0530 (India Standard Time)
console.log(date.getTime());
// 1786209171817 -> time till now from 1 jan 1970
console.log(date.getFullYear());
// 2026
console.log(date.getDay());
// 6 -> on saturday
console.log(date.toDateString());
// Sat Aug 08 2026
console.log(date.toUTCString());
// Sat, 08 Aug 2026 17:12:51 GMT
console.log(date.toTimeString());
// 22:42:51 GMT+0530 (India Standard Time)
console.log(date.toJSON());
// 2026-08-08T17:12:51.817Z
console.log(date.toLocaleString());
// 8/8/2026, 10:42:51 PM
console.log(date.toLocaleDateString());
// 8/8/2026
console.log(date.toLocaleTimeString());
// 10:42:51 PM

console.log(typeof date);
// object

// ====== formats of date ============

var customizedDate = new Date();
console.log(customizedDate.toLocaleString());
// 8/8/2026, 10:42:51 PM

var customizedDate = new Date(2023, 1, 24);       // year , month, date // month start from 0 into digit representation
console.log(customizedDate.toLocaleString());
// 2/24/2023, 12:00:00 AM

var customizedDate = new Date(2023, 1, 24, 3, 1, 45);     // year , month, date, hour, min, sec
console.log(customizedDate.toLocaleString());
// 2/24/2023, 3:01:45 AM

var customizedDate = new Date("2025-4-23");      // year, month, date
console.log(customizedDate.toLocaleString());
// 4/23/2025, 12:00:00 AM

var customizedDate = new Date("1-14-2004");      // year, month, date
console.log(customizedDate.toLocaleString());
// 1/14/2004, 12:00:00 AM


// =========== time stamp ====================

let timeStamp = Date.now();
console.log(timeStamp);        // milisec
// 1786209171871

console.log(customizedDate.getTime());
// 1074018600000 -> till this constomizeddate time

console.log(Math.floor(Date.now() / 1000));     //sec
// 1786209171


// =========== customized date and day ================

let newDate = new Date()
let formatedDate = newDate.toLocaleString('default', {
    weekday: "long",
    hourCycle: "h24",
    year: "numeric"
});
console.log(formatedDate.toLocaleString());
// 2026 Saturday

console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
        hourCycle: "h24",
        year: "numeric"
    })
);
// 2026 Saturday

let newdate = new Date();

console.log(
    newdate.toLocaleString("default", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h24"
    })
);
// Saturday, August 8, 2026 at 22:42:51



// some important notes for last
