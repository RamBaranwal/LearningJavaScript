// console.log(3 + 3);      // 6
// console.log(3 - 3);      // 0
// console.log(3 * 3);      // 9
// console.log(3 / 3);      // 1
// console.log(3 ** 3);     // 27
// console.log(3 % 3);      // 0

console.log(3 + "3" + "3");   // 333
console.log("3" + 3 + "3");   // 333
console.log("3" + "3" + 3);   // 333

console.log(3 + 3 + "3");    // 63
console.log(3 + "3" + 3);    // 333
console.log("3" + 3 + 3);    // 333

// it means firstly it perform the arithetic oprations then use the string
// if string comes first then whole thing goes like string not arithmetic

console.log(+true);     // 1
console.log(+false);    // 0
console.log(+"");       // 0
console.log(+"ofdins"); // NaN  -> not a number

console.log("Prefix and postfix");
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"