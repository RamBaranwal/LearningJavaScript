# JavaScript `forEach()` Method

## 1. What is `forEach()`?

`forEach()` is a **built-in method of JavaScript Arrays**.

It is used to execute a function once for every element of an array.

```javascript
const coding = ["Java", "Python", "C++", "Ruby"];

coding.forEach((item) => {
    console.log(item);
});
```

Output:

```text
Java
Python
C++
Ruby
```

---

## 2. Normal `for` Loop vs `forEach()`

### Normal `for` Loop

```javascript
const coding = ["Java", "Python", "C++", "Ruby"];

for (let index = 0; index < coding.length; index++) {
    console.log(coding[index]);
}
```

In a normal `for` loop, we manually control:

- Starting index
- Condition
- Increment
- Accessing the array element

### `forEach()`

```javascript
coding.forEach((item) => {
    console.log(item);
});
```

`forEach()` automatically goes through every element of the array.

---

# 3. Basic Syntax

```javascript
array.forEach(function(value, index, array) {
    // code
});
```

Using an arrow function:

```javascript
array.forEach((value, index, array) => {
    // code
});
```

The callback function can receive **3 arguments**:

```text
1st argument → value
2nd argument → index
3rd argument → array
```

So the basic pattern is:

```javascript
array.forEach((value, index, array) => {

});
```

---

# 4. Important: `value`, `index`, and `array` Are Just Names

The names are **not special**.

You can use any variable name.

For example:

```javascript
coding.forEach((item, index, arr) => {
    console.log(item);
});
```

You can also write:

```javascript
coding.forEach((x, y, z) => {
    console.log(x);
});
```

Or:

```javascript
coding.forEach((value, position, completeArray) => {
    console.log(value);
});
```

All are valid.

What matters is the **position**.

```text
1st parameter → current value
2nd parameter → current index
3rd parameter → complete array
```

---

# 5. How Does `forEach()` Give These Values?

Consider:

```javascript
const coding = ["Java", "Python", "C++"];
```

When we write:

```javascript
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
```

Conceptually, `forEach()` calls the callback like this:

```javascript
callback("Java", 0, coding);
callback("Python", 1, coding);
callback("C++", 2, coding);
```

Therefore:

```text
item  → current value
index → current index
arr   → complete array
```

### First iteration

```text
item  = "Java"
index = 0
arr   = ["Java", "Python", "C++"]
```

### Second iteration

```text
item  = "Python"
index = 1
arr   = ["Java", "Python", "C++"]
```

### Third iteration

```text
item  = "C++"
index = 2
arr   = ["Java", "Python", "C++"]
```

---

# 6. `forEach()` With Only Value

```javascript
const coding = ["Java", "Python", "C++", "Ruby"];

coding.forEach((item) => {
    console.log(item);
});
```

Output:

```text
Java
Python
C++
Ruby
```

Here:

```text
item → current element
```

---

# 7. `forEach()` With Value and Index

```javascript
coding.forEach((item, index) => {
    console.log(index, item);
});
```

Output:

```text
0 Java
1 Python
2 C++
3 Ruby
```

Here:

```text
item  → current element
index → position of current element
```

---

# 8. `forEach()` With Value, Index and Array

```javascript
coding.forEach((item, index, arr) => {
    console.log("Value:", item);
    console.log("Index:", index);
    console.log("Array:", arr);
});
```

Here:

```text
item  → current element
index → current position
arr   → complete array
```

---

# 9. Different Ways to Write `forEach()`

## Named Function

```javascript
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);
```

---

## Anonymous Function

```javascript
coding.forEach(function(item) {
    console.log(item);
});
```

---

## Arrow Function

```javascript
coding.forEach((item) => {
    console.log(item);
});
```

---

## Short Arrow Function

```javascript
coding.forEach(item => console.log(item));
```

All of these can perform the same operation.

---

# 10. Array of Objects

An array can contain objects.

```javascript
const users = [
    {
        name: "Rohit",
        age: 38
    },
    {
        name: "Virat",
        age: 37
    },
    {
        name: "Dhoni",
        age: 45
    }
];
```

The structure is:

```text
users
 |
 ├── object 0
 │    ├── name
 │    └── age
 │
 ├── object 1
 │    ├── name
 │    └── age
 │
 └── object 2
      ├── name
      └── age
```

---

# 11. `forEach()` With Array of Objects

```javascript
users.forEach((user) => {
    console.log(user.name);
});
```

Output:

```text
Rohit
Virat
Dhoni
```

Why does `user.name` work?

Because `user` represents the **current object**.

For the first iteration:

```javascript
user = {
    name: "Rohit",
    age: 38
};
```

Therefore:

```javascript
user.name
```

gives:

```text
Rohit
```

For the second iteration:

```javascript
user = {
    name: "Virat",
    age: 37
};
```

Therefore:

```javascript
user.name
```

gives:

```text
Virat
```

---

# 12. Access Multiple Object Properties

```javascript
users.forEach((user) => {
    console.log(user.name, user.age);
});
```

Output:

```text
Rohit 38
Virat 37
Dhoni 45
```

---

# 13. Object + Index

```javascript
users.forEach((user, index) => {
    console.log(index, user.name);
});
```

Output:

```text
0 Rohit
1 Virat
2 Dhoni
```

Here:

```text
user  → current object
index → current position
```

---

# 14. Object + Index + Complete Array

```javascript
users.forEach((user, index, arr) => {
    console.log(user);
    console.log(index);
    console.log(arr);
});
```

Here:

```text
user  → current object
index → current index
arr   → complete users array
```

---

# 15. Cricket Example

```javascript
const userName = [
    {
        firstName: "Rohit",
        lastName: "Sharma",
        USP: "opener"
    },
    {
        firstName: "Virat",
        lastName: "Kohli",
        USP: "High scoring batsman"
    }
];
```

## Only First Name

```javascript
userName.forEach((item) => {
    console.log(item.firstName);
});
```

Output:

```text
Rohit
Virat
```

## First Name + Last Name

```javascript
userName.forEach((item) => {
    console.log(item.firstName, item.lastName);
});
```

Output:

```text
Rohit Sharma
Virat Kohli
```

## First Name + Last Name + USP

```javascript
userName.forEach((item) => {
    console.log(item.firstName);
    console.log(item.lastName);
    console.log(item.USP);
});
```

## With Index

```javascript
userName.forEach((item, index) => {
    console.log(index, item.firstName, item.lastName);
});
```

Output:

```text
0 Rohit Sharma
1 Virat Kohli
```

---

# 16. Why `val.lastName` Was Wrong

Suppose we write:

```javascript
userName.forEach((item, val) => {
    console.log(item.firstName, val.lastName);
});
```

This is wrong.

Why?

Because:

```text
item → current object
val  → index
```

During the first iteration:

```text
item = Rohit object
val  = 0
```

During the second iteration:

```text
item = Virat object
val  = 1
```

Therefore:

```javascript
val.lastName
```

is wrong because `val` is a number.

The correct code is:

```javascript
userName.forEach((item, index) => {
    console.log(item.firstName, item.lastName);
});
```

---

# 17. `forEach()` With a Separate Function

We can create a function separately:

```javascript
function printUser(user) {
    console.log(user.name);
}

users.forEach(printUser);
```

Here:

```text
users
  ↓
forEach()
  ↓
printUser()
  ↓
current user
```

`forEach()` automatically passes the current element to `printUser()`.

Conceptually:

```javascript
printUser(users[0]);
printUser(users[1]);
printUser(users[2]);
```

---

# 18. Arrow Function Stored in a Variable

```javascript
const printUser = (user) => {
    console.log(user.name);
};

users.forEach(printUser);
```

Here:

```text
printUser → function
users     → array
forEach   → calls printUser for every element
```

---

# 19. `forEach()` With `if`

You can use conditions inside `forEach()`.

```javascript
users.forEach((user) => {

    if (user.age > 40) {
        console.log(user.name);
    }

});
```

Output:

```text
Dhoni
```

---

# 20. `return` Inside `forEach()`

You can use `return` to skip the current iteration.

```javascript
users.forEach((user) => {

    if (user.age < 40) {
        return;
    }

    console.log(user.name);
});
```

`return` does **not stop the complete `forEach()` loop**.

It only stops the current callback execution and moves to the next element.

---

# 21. Nested Objects

An object can contain another object.

```javascript
const users = [
    {
        name: "Rohit",
        address: {
            city: "Mumbai",
            country: "India"
        }
    },
    {
        name: "Virat",
        address: {
            city: "Delhi",
            country: "India"
        }
    }
];
```

Access nested properties:

```javascript
users.forEach((user) => {
    console.log(user.name);
    console.log(user.address.city);
});
```

Output:

```text
Rohit
Mumbai
Virat
Delhi
```

---

# 22. Different Types of Arrays

`forEach()` can work with different types of arrays.

## Array of Strings

```javascript
const languages = ["Java", "Python", "C++"];

languages.forEach((item) => {
    console.log(item);
});
```

`item` is a string.

---

## Array of Numbers

```javascript
const numbers = [10, 20, 30, 40];

numbers.forEach((item) => {
    console.log(item);
});
```

`item` is a number.

---

## Array of Objects

```javascript
const users = [
    { name: "Rohit", age: 38 },
    { name: "Virat", age: 37 }
];

users.forEach((item) => {
    console.log(item.name);
});
```

`item` is an object.

---

# 23. Important Concept

The type of `item` depends on what is stored in the array.

```text
Array
  ↓
forEach()
  ↓
current element
```

If the array contains strings:

```javascript
["Java", "Python"]
```

then:

```text
item → string
```

If the array contains numbers:

```javascript
[10, 20, 30]
```

then:

```text
item → number
```

If the array contains objects:

```javascript
[
    { name: "Rohit" },
    { name: "Virat" }
]
```

then:

```text
item → object
```

Therefore:

```javascript
item.name
```

works when `item` is an object containing a `name` property.

---

# 24. `forEach()` Cheat Sheet

```javascript
// Only value
array.forEach((item) => {
    console.log(item);
});


// Value + index
array.forEach((item, index) => {
    console.log(item, index);
});


// Value + index + array
array.forEach((item, index, arr) => {
    console.log(item, index, arr);
});


// Named function
function printMe(item) {
    console.log(item);
}

array.forEach(printMe);


// Array of objects
users.forEach((user) => {
    console.log(user.name);
});


// Object + index
users.forEach((user, index) => {
    console.log(index, user.name);
});


// Object + condition
users.forEach((user) => {
    if (user.age > 40) {
        console.log(user.name);
    }
});
```

---

# 25. Most Important Pattern

Memorize this:

```javascript
array.forEach((value, index, array) => {

});
```

Remember:

```text
value → current element
index → current position
array → complete array
```

For an array of objects:

```javascript
users.forEach((user, index) => {
    console.log(user.name);
});
```

Remember:

```text
user  → current object
index → current object's position
```

---

# 26. Final Mental Model

```text
                    ARRAY
                      |
                      ↓
                  forEach()
                      |
          ┌───────────┼───────────┐
          ↓           ↓           ↓
        value       index       array
          |
          ↓
   current element
          |
     ┌────┴─────┐
     ↓          ↓
 primitive     object
     ↓          ↓
   item     item.property
```

## Key Rule

> `forEach()` gives the callback the **current value**, **current index**, and **complete array**.

```javascript
array.forEach((value, index, array) => {
    // value
    // index
    // array
});
```

The parameter names can be anything:

```javascript
array.forEach((item, index, arr) => {});
```

or:

```javascript
array.forEach((x, y, z) => {});
```

The **position** determines what each parameter receives.

---

## `forEach()` vs Other Array Methods

| Method | Main Purpose |
|---|---|
| `forEach()` | Perform an action for every element |
| `map()` | Create a new array by transforming elements |
| `filter()` | Create a new array containing selected elements |
| `find()` | Find the first matching element |
| `findIndex()` | Find the index of the first matching element |
| `some()` | Check if at least one element matches |
| `every()` | Check if all elements match |
| `reduce()` | Reduce array to a single value |

For now, focus on understanding:

```javascript
forEach((value, index, array) => {})
```

before moving to `map()`, `filter()`, and `reduce()`.