# ECMAScript (ES) Notes

## What is ECMAScript?

**ECMAScript (ES)** is the official **standard (specification)** for the JavaScript language.

- It defines the syntax, rules, and behavior of JavaScript.
- JavaScript is an implementation of the ECMAScript standard.
- Browsers and Node.js use JavaScript engines that follow the ECMAScript specification.

> **Simple Definition:**
>
> ECMAScript is the rulebook, and JavaScript is the language built according to those rules.

---

# JavaScript vs ECMAScript

| JavaScript | ECMAScript |
|------------|------------|
| Programming language | Language specification |
| Runs in browsers and Node.js | Defines language rules |
| Implemented by JavaScript engines | Maintained by Ecma International |

---

# Why is it called ECMAScript?

JavaScript was originally created by **Brendan Eich** in 1995.

To standardize the language, **Ecma International** created a specification called **ECMAScript**.

Today, every modern JavaScript engine follows this specification.

---

# JavaScript Engines

A JavaScript engine executes JavaScript code according to the ECMAScript specification.

| Browser/Platform | Engine |
|------------------|--------|
| Google Chrome | V8 |
| Node.js | V8 |
| Microsoft Edge | V8 |
| Mozilla Firefox | SpiderMonkey |
| Safari | JavaScriptCore |

---

# ECMAScript Versions

## ES5 (2009)

Major Features:

- Strict Mode
- JSON Support
- Array Methods
- Object Methods

Example:

```javascript
"use strict";

var numbers = [1,2,3];

numbers.forEach(function(num){
    console.log(num);
});
```

---

## ES6 / ES2015 (Most Important)

Released: **2015**

Introduced many modern JavaScript features.

### New Features

- let
- const
- Arrow Functions
- Classes
- Modules
- Template Literals
- Default Parameters
- Destructuring
- Spread Operator
- Rest Parameters
- Promises

Example:

```javascript
const name = "Ram";

const greet = () => {
    console.log(`Hello ${name}`);
};

greet();
```

---

## ES2016

New Features

- Exponentiation Operator (**)
- Array.includes()

Example

```javascript
console.log(2 ** 3);

const arr = [1,2,3];

console.log(arr.includes(2));
```

Output

```
8
true
```

---

## ES2017

New Feature

- async/await

Example

```javascript
async function getData() {
    return "Hello";
}

getData().then(console.log);
```

---

## ES2018

Features

- Object Rest
- Object Spread
- Asynchronous Iteration

Example

```javascript
const student = {
    name: "Ram",
    age: 20
};

const copy = {
    ...student
};

console.log(copy);
```

---

## ES2019

Features

- Array.flat()
- Array.flatMap()

Example

```javascript
const arr = [1,[2,[3]]];

console.log(arr.flat(2));
```

Output

```
[1,2,3]
```

---

## ES2020

Features

- Optional Chaining (?.)
- Nullish Coalescing (??)
- BigInt
- Promise.allSettled()

Example

```javascript
const user = {};

console.log(user.address?.city);

console.log(null ?? "Default");
```

Output

```
undefined
Default
```

---

## ES2021

Features

- String.replaceAll()
- Logical Assignment Operators

Example

```javascript
const text = "Java Java";

console.log(text.replaceAll("Java","JS"));
```

Output

```
JS JS
```

---

## ES2022

Features

- Class Fields
- Top-Level await

Example

```javascript
class Student {

    name = "Ram";

}

const s = new Student();

console.log(s.name);
```

---

## ES2023

Features

- Array.toSorted()
- Array.toReversed()
- Array.toSpliced()

Example

```javascript
const nums = [3,1,2];

console.log(nums.toSorted());

console.log(nums);
```

Output

```
[1,2,3]

[3,1,2]
```

Notice that `toSorted()` does **not** modify the original array.

---

# var vs let vs const

| var | let | const |
|------|------|--------|
| Function Scoped | Block Scoped | Block Scoped |
| Can Redeclare | Cannot Redeclare | Cannot Redeclare |
| Can Reassign | Can Reassign | Cannot Reassign |
| Hoisted | Hoisted (TDZ) | Hoisted (TDZ) |

Example

```javascript
var a = 10;

let b = 20;

const c = 30;
```

---

# Template Literals

Old Way

```javascript
const name = "Ram";

console.log("Hello " + name);
```

Modern Way

```javascript
const name = "Ram";

console.log(`Hello ${name}`);
```

---

# Arrow Function

Normal Function

```javascript
function add(a,b){
    return a+b;
}
```

Arrow Function

```javascript
const add = (a,b) => a+b;
```

---

# Destructuring

Array

```javascript
const arr = [10,20];

const [a,b] = arr;
```

Object

```javascript
const student = {
    name: "Ram",
    age:20
};

const {name,age} = student;
```

---

# Spread Operator (...)

```javascript
const arr1 = [1,2];

const arr2 = [...arr1,3,4];
```

Output

```
[1,2,3,4]
```

---

# Rest Parameters

```javascript
function sum(...nums){

    return nums.reduce((a,b)=>a+b);

}

console.log(sum(1,2,3));
```

Output

```
6
```

---

# Modules

Export

```javascript
export function add(a,b){
    return a+b;
}
```

Import

```javascript
import { add } from "./math.js";
```

---

# Promise

```javascript
const promise = new Promise((resolve,reject)=>{

    resolve("Success");

});

promise.then(console.log);
```

Output

```
Success
```

---

# Browser APIs vs ECMAScript

These are **NOT** part of ECMAScript.

- document
- window
- fetch()
- alert()
- localStorage
- setTimeout()

Example

```javascript
document.getElementById("demo");

alert("Hello");
```

These are provided by the browser.

---

# ECMAScript Timeline

| Version | Year | Important Features |
|----------|------|-------------------|
| ES5 | 2009 | Strict Mode, JSON |
| ES6 | 2015 | let, const, classes, modules |
| ES2016 | 2016 | includes(), ** |
| ES2017 | 2017 | async/await |
| ES2018 | 2018 | Object Spread |
| ES2019 | 2019 | flat(), flatMap() |
| ES2020 | 2020 | Optional Chaining, BigInt |
| ES2021 | 2021 | replaceAll() |
| ES2022 | 2022 | Class Fields |
| ES2023 | 2023 | toSorted(), toReversed() |

---

# Interview Questions

### 1. What is ECMAScript?

ECMAScript is the official specification for JavaScript maintained by Ecma International.

---

### 2. Is JavaScript and ECMAScript the same?

No.

- ECMAScript is the specification.
- JavaScript is an implementation of that specification.

---

### 3. What is the most important ECMAScript version?

ES6 (ES2015), because it introduced most modern JavaScript features like:

- let
- const
- Arrow Functions
- Classes
- Modules
- Promises

---

### 4. What is the difference between var, let, and const?

- `var` is function-scoped and can be redeclared.
- `let` is block-scoped and can be reassigned.
- `const` is block-scoped and cannot be reassigned.

---

### 5. What is optional chaining?

Optional chaining (`?.`) safely accesses nested object properties without throwing an error if an intermediate property is `null` or `undefined`.

Example:

```javascript
const user = {};

console.log(user.address?.city);
```

Output:

```
undefined
```

---

# Key Takeaways

- ECMAScript is the official specification of JavaScript.
- JavaScript follows the ECMAScript standard.
- ES6 (2015) introduced modern JavaScript.
- New ECMAScript versions add language improvements every year.
- Browser APIs like `document`, `fetch`, and `alert` are **not** part of ECMAScript.

---

**Author:** Ram Baranwal  
**Repository:** JavaScript Notes / Web Development Notes