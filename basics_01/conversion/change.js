console.log("here unusual string change to number")
let score = 11;
console.log(typeof score);

score = "11";
console.log(typeof score);

score = "122sbc";
let valueInNumber = Number(score);
// as we see we change the score string to number by conversion
// BUT STILL IT GIVES ME NUMBER IS TYPE OF
console.log(typeof valueInNumber);
// see this it denote the object is NaN
console.log(valueInNumber);        // NaN

console.log("here string change to number")

// not able to change it
let name = "Hitshesj";
let changeToNumber = Number(name);
console.log(typeof changeToNumber);   // number
console.log(changeToNumber);          // NaN

console.log("here number change to boolean")
// changes of boolean

// rather than 0 all values are true when we change number to boolean
let isLoggedInNum1 = 1;
let isLoggedInNum2 = 100;
let isLoggedInNum3 = -100;
let isLoggedInNum4 = 0;
console.log(typeof isLoggedInNum1);          //number
console.log(typeof isLoggedInNum2);          //number
console.log(typeof isLoggedInNum3);          //number
console.log(typeof isLoggedInNum4);          //number
console.log(isLoggedInNum1);                  // 1
console.log(isLoggedInNum2);                  // 100
console.log(isLoggedInNum3);                  // -100
console.log(isLoggedInNum4);                  // 0

let isChangetoNum1 = Boolean(isLoggedInNum1);
let isChangetoNum2 = Boolean(isLoggedInNum2);
let isChangetoNum3 = Boolean(isLoggedInNum3);
let isChangetoNum4 = Boolean(isLoggedInNum4);
console.log(typeof isChangetoNum1);           // boolean
console.log(typeof isChangetoNum2);           // boolean
console.log(typeof isChangetoNum3);           // boolean
console.log(typeof isChangetoNum4);           // boolean
console.log(isChangetoNum1);               // true
console.log(isChangetoNum2);               // true
console.log(isChangetoNum3);               // true
console.log(isChangetoNum4);               // false

console.log("here string change to boolean")
// changes to boolean
let isLoggedIn = "";                    // empty returns           -> false
let isLoggedOut = "asfajfb";            // any thing filled return -> true
console.log(typeof isLoggedIn);
console.log(typeof isLoggedOut);
console.log(isLoggedIn);
console.log(isLoggedOut);

let isChangetoNumber = Boolean(isLoggedIn);
let isChangetoNumber2 = Boolean(isLoggedOut);
console.log(typeof isChangetoNumber);
console.log(typeof isChangetoNumber2);
console.log(isChangetoNumber);
console.log(isChangetoNumber2);

// change number to string
console.log("here number change to string")
let num = 22;
console.log("Type of " + num + " -> " + typeof num);
let numberToString = String(num);
console.log(typeof numberToString);
console.log(numberToString);

// change boolean to string
console.log("here boolean change to string")
let bool1 = true;
let bool2 = false;
console.log("Type of " + bool1 + " -> " + typeof bool1);
console.log("Type of " + bool2 + " -> " + typeof bool2);
let boolToString1 = String(bool1);
let boolToString2 = String(bool2);
console.log(typeof boolToString1);
console.log(typeof boolToString2);
console.log(bool1);
console.log(bool2);
