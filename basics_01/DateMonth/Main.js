// it starts from 1 jan 1970

const date = new Date();

console.log(date);
console.log(date.toString());
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.toDateString());
console.log(date.toUTCString());
console.log(date.toTimeString());
console.log(date.toJSON());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

console.log(typeof date);

// ====== formats of date ============

var customizedDate = new Date();
console.log(customizedDate.toLocaleString());

var customizedDate = new Date(2023, 1, 24);       // year , month, date // month start from 0 into digit representation
console.log(customizedDate.toLocaleString());

var customizedDate = new Date(2023, 1, 24, 3, 1, 45);
console.log(customizedDate.toLocaleString());

var customizedDate = new Date("2025-4-23");
console.log(customizedDate.toLocaleString());

var customizedDate = new Date("1-14-2004");
console.log(customizedDate.toLocaleString());


// =========== time stamp ====================

let timeStamp = Date.now();
console.log(timeStamp);        // milisec
console.log(customizedDate.getTime());
console.log(Math.floor(Date.now() / 1000));     //sec


// =========== customized date and day ================

let newDate = new Date()
let formatedDate = newDate.toLocaleString('default', {
    weekday: "long",
    hourCycle: "h24",
    year: "numeric"
});
console.log(formatedDate.toLocaleString());

console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
        hourCycle: "h24",
        year: "numeric"
    })
);

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