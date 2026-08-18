// nullish collation operator
let val1;
val1 = null ?? 5;
console.log(val1);

val1 = undefined ?? 10;
console.log(val1);

val1 = null ?? 10 ?? 15;
console.log(val1);

console.log(null ?? 100);       // 100
console.log(undefined ?? 100);  // 100

console.log(50 ?? 100);         // 50
console.log(0 ?? 100);           // 0
console.log(false ?? true);      // false
console.log("" ?? "Hello");      // ""

// ===========================================================
// ternary operator
// ===========================================================
// condition ? true : false;
// ===========================================================
