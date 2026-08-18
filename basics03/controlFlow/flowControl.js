// ============================================================
// On webDev
// ============================================================
false == 0      // return true
false == ""     // return true
0 == ""         // return true

// ============================================================
// JAVASCRIPT CONDITIONAL STATEMENTS
// ============================================================

// Conditional statements are used to make decisions.
//
// if condition is true  -> execute if block
// if condition is false -> execute else block


// ============================================================
// 1. IF - ELSE
// ============================================================

const temperature = 41;

if (temperature === 40) {
    console.log("Temperature is 40");
} else {
    console.log("Temperature is not 40");
}

console.log("Execute");


// ============================================================
// 2. COMPARISON OPERATORS
// ============================================================

// <   -> Less than
// >   -> Greater than
// <=  -> Less than or equal to
// >=  -> Greater than or equal to
// ==  -> Equal value (performs type conversion)
// !=  -> Not equal value
// === -> Equal value AND equal type
// !== -> Not equal value OR not equal type

console.log(5 == "5");     // true
console.log(5 === "5");    // false

// Best practice:
// Use === and !== instead of == and !=


// ============================================================
// 3. SCOPE OF let AND const
// ============================================================

const score = 200;

if (score > 100) {
    let power = "fly";

    console.log(`User power: ${power}`);
}

// power cannot be accessed here
// console.log(`User power: ${power}`); // Error


// If we want to use power outside the block:

let power;

if (score > 100) {
    power = "fly";
}

console.log(`User power: ${power}`);


// ============================================================
// 4. SINGLE-LINE IF
// ============================================================

const balance = 1000;

if (balance > 500) {
    console.log("Balance is greater than 500");
}


// Without braces, only ONE statement belongs to the if:

if (balance > 500)
    console.log("Test");


// Better practice: use braces

if (balance > 500) {
    console.log("Test");
    console.log("Test2");
}


// ============================================================
// 5. IF - ELSE IF - ELSE
// ============================================================

if (balance < 500) {
    console.log("Less than 500");

} else if (balance < 750) {
    console.log("Less than 750");

} else if (balance < 900) {
    console.log("Less than 900");

} else {
    console.log("900 or greater");
}


// Conditions are checked from TOP to BOTTOM.
// As soon as one condition becomes true,
// the remaining conditions are skipped.


// ============================================================
// 6. LOGICAL AND (&&)
// ============================================================

// && means AND
// ALL conditions must be true.

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}


// Example:

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

// This does NOT execute because:
// true && true && false
//                 ↓
//               false


// Truth table:
//
// true  && true  -> true
// true  && false -> false
// false && true  -> false
// false && false -> false


// ============================================================
// 7. LOGICAL OR (||)
// ============================================================

// || means OR
// At least ONE condition must be true.

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// false || true
//      ↓
//     true


// Truth table:
//
// true  || true  -> true
// true  || false -> true
// false || true  -> true
// false || false -> false


// ============================================================
// 8. SWITCH CASE
// ============================================================

// switch is useful when we want to compare
// one value with multiple possible values.

const key = "value";

switch (key) {

    case "value":
        console.log("Value matched");
        break;

    case "value2":
        console.log("Value2 matched");
        break;

    default:
        console.log("No value matched");
        break;
}


// ============================================================
// WHY DO WE USE break?
// ============================================================

// break stops the execution of the switch.
//
// Without break, JavaScript continues executing
// the following cases. This is called FALL-THROUGH.

const day = 1;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
        break;
}


// ============================================================
// 9. FALSY VALUES
// ============================================================

// These values are considered FALSE when converted to Boolean:

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
// BigInt 0n


if (0) {
    console.log("True");
} else {
    console.log("False");
}


// ============================================================
// 10. TRUTHY VALUES
// ============================================================

// Almost everything else is truthy.
//
// Examples:

// true
// "false"
// "0"
// " "
// []
// {}
// function () {}
// 42
// -10


if ("false") {
    console.log("This is truthy");
}

if ("0") {
    console.log("This is also truthy");
}

if (" ") {
    console.log("A space string is truthy");
}

if ([]) {
    console.log("Empty array is truthy");
}

if ({}) {
    console.log("Empty object is truthy");
}


// ============================================================
// 11. CHECKING AN EMPTY ARRAY
// ============================================================

// [] is truthy.
//
// So this checks whether the array exists,
// NOT whether it is empty.

const array = [];

if (array) {
    console.log("Array exists");
}


// Correct way to check an empty array:

if (array.length === 0) {
    console.log("Array is empty");
}


// ============================================================
// 12. CHECKING AN EMPTY OBJECT
// ============================================================

// {} is also truthy.

const object = {};

if (object) {
    console.log("Object exists");
}


// Correct way to check an empty object:

if (Object.keys(object).length === 0) {
    console.log("Object is empty");
}


// IMPORTANT:
//
// Object.key(object)   ❌ WRONG
//
// Object.keys(object)  ✅ CORRECT
//
// Object.keys(object) returns an array containing
// all the object's property names.

const user = {
    username: "Ram",
    age: 20
};

console.log(Object.keys(user));
// ["username", "age"]

console.log(Object.keys(user).length);
// 2


// ============================================================
// 13. PRACTICAL LOGIN EXAMPLE
// ============================================================

const isUserLoggedIn = true;
const hasDebitCard = true;
const loggedInWithGoogle = false;
const loggedInWithEmail = true;

if (isUserLoggedIn && hasDebitCard) {
    console.log("User can buy the course");
}

if (loggedInWithGoogle || loggedInWithEmail) {
    console.log("User is logged in");
}


// ============================================================
// QUICK SUMMARY
// ============================================================

// IF - ELSE

// if (condition) {
//     // true
// } else {
//     // false
// }


// ELSE IF

// if (condition1) {

// } else if (condition2) {

// } else {

// }


// SWITCH

// switch (value) {

//     case value1:
//         break;

//     case value2:
//         break;

//     default:
//         break;
// }


// AND

// condition1 && condition2
// Both conditions must be true.


// OR

// condition1 || condition2
// At least one condition must be true.


// FALSY VALUES

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN


// TRUTHY VALUES

// Almost everything else
// "false"
// "0"
// " "
// []
// {}
// function () {}


// EMPTY ARRAY

// array.length === 0


// EMPTY OBJECT

// Object.keys(object).length === 0


// BEST PRACTICE

// Use:
// ===
// !==
//
// Instead of:
// ==
// !=