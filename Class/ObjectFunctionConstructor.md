# JavaScript — Objects, Constructor Functions, `this`, `return this`, and `new`

---

# 1. What Is an Object?

An object is a collection of **properties and methods**.

```js
const user = {
    userName: "Hitesh",
    email: "hitesh@example.com",
    loginCount: 2,
    signedIn: true
};
```

Here:

```text
user
 ↓
Object
 ↓
{
    userName: "Hitesh",
    email: "hitesh@example.com",
    loginCount: 2,
    signedIn: true
}
```

This is called an **Object Literal**.

---

# 2. Object Literal

When we directly use `{}` to create an object:

```js
const user = {
    userName: "Hitesh",
    age: 25
};
```

we call it an:

> **Object Literal**

We directly create the object.

```text
{}
 ↓
Object
```

For example:

```js
const userOne = {
    userName: "Hitesh",
    age: 25
};

const userTwo = {
    userName: "Raj",
    age: 30
};
```

These are two separate objects:

```text
userOne                 userTwo
   ↓                       ↓
{                         {
    userName: Hitesh          userName: Raj
    age: 25                   age: 30
}                         }
```

---

# 3. Why Do We Need Constructors?

Suppose we need many users.

We could manually create them:

```js
const userOne = {
    userName: "Himgange",
    loginCount: 5,
    signedIn: true
};

const userTwo = {
    userName: "Rajkumar",
    loginCount: 78,
    signedIn: false
};

const userThree = {
    userName: "Amit",
    loginCount: 20,
    signedIn: true
};
```

Notice that every object has the same structure:

```text
userName
loginCount
signedIn
```

Only the values are different.

Instead of writing the structure repeatedly, we can define a **constructor**.

---

# 4. Constructor Function

```js
function User(userName, loginCount, signedIn) {

    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}
```

Here:

```text
User
 ↓
Constructor Function
 ↓
Describes how objects should be created
```

IMPORTANT:

```js
function User() {}
```

does **not** create an object.

It only defines a function that can be used as a constructor.

---

# 5. `User` and `user` Are Different

JavaScript is **case-sensitive**.

Therefore:

```js
User
user
```

are completely different identifiers.

For example:

```js
const user = {
    userName: "Hitesh"
};

function User(userName) {
    this.userName = userName;
}
```

This is completely valid.

Think:

```text
user
 ↓
An actual object


User
 ↓
A constructor function
```

There is **no automatic connection** between them.

The uppercase `U` does not magically connect `User` to `user`.

---

# 6. Why Do We Usually Write `User` With a Capital U?

This is a **naming convention**.

Constructors are normally written using PascalCase:

```js
User
Student
Car
Employee
BankAccount
```

Normal variables/objects are normally written using camelCase:

```js
user
student
myCar
employee
bankAccount
```

So when we see:

```js
new User(...)
```

we immediately understand:

> `User` is intended to be used as a constructor.

JavaScript does NOT force this naming convention.

Technically, this works:

```js
function user(name) {
    this.name = name;
}

const userOne = new user("Hitesh");
```

But it is confusing and generally avoided.

---

# 7. Object Construction

Now we use:

```js
new User(...)
```

Example:

```js
function User(userName, loginCount, signedIn) {

    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}

const userOne = new User("Himgange", 5, true);
```

This means:

> Create a NEW object using the `User` constructor.

Think:

```text
User
 ↓
Constructor Function

new User(...)
 ↓
Create NEW Object
 ↓
Run Constructor
 ↓
userOne gets the object
```

---

# 8. WITHOUT `new` — First Understand the Problem

Let's intentionally do it incorrectly.

```js
function User(userName, loginCount, signedIn) {

    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    return this;
}

const userOne = User("Himgange", 5, true);

console.log(userOne);
```

Notice:

```js
User(...)
```

NOT:

```js
new User(...)
```

This is just a **normal function call**.

---

# 9. Who Is Calling `User()` Without `new`?

This is an important point.

When we write:

```js
const userOne = User("Himgange", 5, true);
```

`userOne` is **NOT calling** `User`.

The function call is simply:

```js
User("Himgange", 5, true)
```

The assignment:

```js
const userOne =
```

just stores whatever the function returns.

Think:

```text
const userOne = User(...)
                 ↑
                 |
             function call
```

The flow is:

```text
User(...)
   ↓
function executes
   ↓
return this
   ↓
returned value
   ↓
userOne stores that value
```

So:

> **`userOne` is the receiver/storage variable, not the caller.**

---

# 10. What Happens to `this` Without `new`?

Consider:

```js
function User(userName, loginCount, signedIn) {

    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    return this;
}
```

Now:

```js
const userOne = User("Himgange", 5, true);
```

Because there is no `new`, JavaScript does NOT create a fresh object for this call.

In a typical non-strict Node.js function call, `this` can refer to the global object.

Therefore:

```js
this.userName = userName;
```

can modify the global object.

Conceptually:

```text
this
 ↓
Global Object

{
    userName: "Himgange",
    loginCount: 5,
    signedIn: true
}
```

---

# 11. What Does `return this` Do?

Your constructor has:

```js
return this;
```

Suppose:

```js
this
 ↓
Object A
```

Then:

```js
return this;
```

means:

```text
return Object A
```

So:

```js
const userOne = User(...);
```

receives that returned object:

```text
User(...)
   ↓
return this
   ↓
Object A
   ↓
userOne
```

Therefore:

```text
userOne
   ↓
Object A
```

---

# 12. Now Call `User()` a Second Time WITHOUT `new`

First:

```js
const userOne = User("Himgange", 5, true);
```

Conceptually:

```text
User(...)
   ↓
this
   ↓
same existing object
   ↓
{
    userName: "Himgange",
    loginCount: 5,
    signedIn: true
}
   ↓
return this
   ↓
userOne
```

Now:

```js
const userTwo = User("Rajkumar", 78, false);
```

Again, there is no `new`.

So another fresh object is NOT created.

The same `this` object is modified:

```text
User(...)
   ↓
same this
   ↓
{
    userName: "Rajkumar",
    loginCount: 78,
    signedIn: false
}
   ↓
return this
   ↓
userTwo
```

---

# 13. Why Does `userOne` Change?

This is the key part.

Initially:

```text
userOne
   ↓
Object A

{
    userName: "Himgange",
    loginCount: 5,
    signedIn: true
}
```

Then you execute:

```js
const userTwo = User("Rajkumar", 78, false);
```

The same Object A is changed:

```text
Object A

BEFORE:
{
    userName: "Himgange",
    loginCount: 5,
    signedIn: true
}


AFTER:
{
    userName: "Rajkumar",
    loginCount: 78,
    signedIn: false
}
```

Since `userOne` was already pointing to Object A:

```text
userOne
   ↓
Object A
```

it now sees the changed values.

---

# 14. Visual Explanation WITHOUT `new`

```text
                    User()
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
       Call 1                   Call 2
          ↓                       ↓
    Himgange                   Rajkumar
          │                       │
          └───────────┬───────────┘
                      ↓
                 SAME `this`
                      ↓
                  SAME OBJECT
```

So:

```text
userOne ──────────┐
                  ↓
              SAME OBJECT
                  ↑
userTwo ──────────┘
```

Both can point to the same object.

---

# 15. Prove It Using `===`

Use:

```js
function User(userName, loginCount, signedIn) {

    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    return this;
}

const userOne = User("Himgange", 5, true);

const userTwo = User("Rajkumar", 78, false);

console.log(userOne === userTwo);
```

In the non-strict Node.js behavior you're observing, this can output:

```text
true
```

Meaning:

```text
userOne
   ↓
SAME OBJECT
   ↑
userTwo
```

---

# 16. Now Use `new`

Let's fix the problem:

```js
function User(userName, loginCount, signedIn) {

    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}

const userOne = new User("Himgange", 5, true);

const userTwo = new User("Rajkumar", 78, false);

console.log(userOne);
console.log(userTwo);
```

Output:

```js
{
    userName: "Himgange",
    loginCount: 5,
    signedIn: true
}
```

and:

```js
{
    userName: "Rajkumar",
    loginCount: 78,
    signedIn: false
}
```

---

# 17. What Does `new` Actually Do?

When JavaScript sees:

```js
const userOne = new User("Himgange", 5, true);
```

think of it approximately as:

```js
// Step 1
const newObject = {};

// Step 2
// Run User with `this` referring to newObject

User.call(newObject, "Himgange", 5, true);

// Step 3
// userOne receives the new object

const userOne = newObject;
```

This is a **simplified mental model**, not the literal internal implementation.

The important idea is:

```text
new User(...)
      ↓
Create NEW object
      ↓
this → NEW object
      ↓
Run User constructor
      ↓
Add properties to object
      ↓
Return object
      ↓
userOne stores object
```

---

# 18. First Object With `new`

```js
const userOne = new User("Himgange", 5, true);
```

JavaScript creates:

```text
Object #1
```

Then:

```text
this → Object #1
```

Constructor executes:

```js
this.userName = "Himgange";
this.loginCount = 5;
this.signedIn = true;
```

Now:

```text
Object #1
{
    userName: "Himgange",
    loginCount: 5,
    signedIn: true
}
```

And:

```text
userOne
   ↓
Object #1
```

---

# 19. Second Object With `new`

Now:

```js
const userTwo = new User("Rajkumar", 78, false);
```

`new` creates another object:

```text
Object #2
```

Then:

```text
this → Object #2
```

Constructor executes:

```js
this.userName = "Rajkumar";
this.loginCount = 78;
this.signedIn = false;
```

Now:

```text
Object #2
{
    userName: "Rajkumar",
    loginCount: 78,
    signedIn: false
}
```

And:

```text
userTwo
   ↓
Object #2
```

---

# 20. Two Objects With `new`

```text
              User Constructor
                    │
             ┌──────┴──────┐
             ↓             ↓
            new           new
             ↓             ↓
        Object #1      Object #2
             ↓             ↓
          userOne       userTwo
             ↓             ↓
        Himgange       Rajkumar
```

They are different objects.

Therefore:

```js
console.log(userOne === userTwo);
```

outputs:

```text
false
```

---

# 21. `return this` Is Not Required Here

You wrote:

```js
function User(userName, loginCount, signedIn) {

    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    return this;
}
```

When using `new`, you normally don't need:

```js
return this;
```

You can simply write:

```js
function User(userName, loginCount, signedIn) {

    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}
```

Then:

```js
const userOne = new User("Himgange", 5, true);
```

still gives you the object.

Why?

Because `new` handles the object creation/return behavior for you.

---

# 22. WITHOUT `new` vs WITH `new`

## WITHOUT `new`

```js
const userOne = User("Himgange", 5, true);

const userTwo = User("Rajkumar", 78, false);
```

Conceptually:

```text
User()
 ↓
No fresh object created
 ↓
this → existing context
 ↓
return this
 ↓
userOne
```

Then:

```text
User()
 ↓
No fresh object created
 ↓
this → SAME existing context
 ↓
return this
 ↓
userTwo
```

Result:

```text
userOne ───────┐
               ↓
          SAME OBJECT
               ↑
userTwo ───────┘
```

---

## WITH `new`

```js
const userOne = new User("Himgange", 5, true);

const userTwo = new User("Rajkumar", 78, false);
```

Conceptually:

```text
new User()
     ↓
Create Object #1
     ↓
this → Object #1
     ↓
userOne
```

Then:

```text
new User()
     ↓
Create Object #2
     ↓
this → Object #2
     ↓
userTwo
```

Result:

```text
userOne → Object #1

userTwo → Object #2
```

---

# 23. Why We Use `new`

The whole reason can be remembered like this:

```text
WITHOUT new
     ↓
No fresh object for the constructor call
     ↓
`this` does not automatically refer
to a new object
     ↓
Multiple calls can operate on the same object/context
     ↓
Values can be overwritten


WITH new
     ↓
Fresh object is created
     ↓
`this` refers to that fresh object
     ↓
Constructor initializes that object
     ↓
Every call gets a separate object
```

---

# 24. Object Literal vs Object Construction

## Object Literal

```js
const user = {
    userName: "Hitesh",
    loginCount: 2,
    signedIn: true
};
```

Here:

```text
{} → directly creates an object
```

---

## Constructor Function

```js
function User(userName, loginCount, signedIn) {

    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}
```

Here:

```text
User()
 ↓
Defines a constructor function
```

It does NOT create an object just by being defined.

---

## Object Construction

```js
const userOne = new User("Himgange", 5, true);
```

Here:

```text
new User()
 ↓
Creates a new object
 ↓
Runs constructor
 ↓
Returns object
```

---

# 25. Same Result, Different Creation Method

### Object Literal

```js
const userOne = {
    userName: "Himgange",
    loginCount: 5,
    signedIn: true
};
```

### Constructor Function

```js
function User(userName, loginCount, signedIn) {

    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}

const userOne = new User("Himgange", 5, true);
```

Both create an object containing:

```js
{
    userName: "Himgange",
    loginCount: 5,
    signedIn: true
}
```

But the constructor approach is useful when you need many objects with the same structure.

---

# 26. Java Comparison

In Java, you normally define a class:

```java
class User {

    String userName;
    int loginCount;
    boolean signedIn;

    User(String userName, int loginCount, boolean signedIn) {
        this.userName = userName;
        this.loginCount = loginCount;
        this.signedIn = signedIn;
    }
}
```

Then:

```java
User userOne = new User("Himgange", 5, true);

User userTwo = new User("Rajkumar", 78, false);
```

Think:

```text
Java

User
 ↓
Class / Type
 ↓
new User(...)
 ↓
Object
```

---

# 27. JavaScript Constructor Function vs Java Class

JavaScript can do something similar:

```js
function User(userName, loginCount, signedIn) {

    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}

const userOne = new User("Himgange", 5, true);

const userTwo = new User("Rajkumar", 78, false);
```

Think:

```text
JavaScript

User
 ↓
Constructor Function
 ↓
new User(...)
 ↓
Object
```

Important difference:

### Java

```java
class User
```

is a **class definition**.

### JavaScript

```js
function User(...)
```

is a **function** that can also be used as a constructor when called with `new`.

---

# 28. JavaScript Also Has `class`

Modern JavaScript also provides `class` syntax:

```js
class User {

    constructor(userName, loginCount, signedIn) {

        this.userName = userName;
        this.loginCount = loginCount;
        this.signedIn = signedIn;
    }
}

const userOne = new User("Himgange", 5, true);

const userTwo = new User("Rajkumar", 78, false);
```

This looks much more like Java:

```text
Java                       JavaScript

class User {               class User {
    User(...) {                constructor(...) {
        ...                       ...
    }                           }
}                           }

new User(...)              new User(...)
```

---

# 29. Three Common Ways to Think About Object Creation

```text
                OBJECT CREATION
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
   Object Literal   Constructor    Class
          ↓          Function        ↓
          ↓            ↓          constructor
          ↓            ↓              ↓
         {}         new User()      new User()
          ↓            ↓              ↓
       Object       Object          Object
```

### 1. Object Literal

```js
const user = {};
```

Directly creates an object.

### 2. Constructor Function

```js
function User() {}

const user = new User();
```

Uses a constructor function to create an object.

### 3. Class

```js
class User {}

const user = new User();
```

Uses a class to create an object.

---

# 30. Final Mental Model

Remember these points:

```text
1. {} 
   ↓
   Directly creates an object.


2. function User(...)
   ↓
   Defines a constructor function.
   It does NOT create an object by itself.


3. new User(...)
   ↓
   Creates a NEW object and runs User
   with `this` referring to that new object.


4. const user = {...}
   and
   function User(...)
   ↓
   These are completely separate.
   `user` and `User` are different identifiers.


5. User(...)
   ↓
   Normal function call.
   Without `new`, no fresh constructor object is created.


6. return this
   ↓
   Returns whatever object/value `this` currently refers to.


7. const userOne = User(...)
   ↓
   User() executes first.
   Its returned value is then stored in userOne.


8. const userTwo = User(...)
   ↓
   User() executes again.
   Its returned value is then stored in userTwo.


9. With `new`
   ↓
   Every call gets a fresh object.


10. userOne and userTwo
    ↓
    Are NOT calling the constructor.
    They are variables storing the returned/constructed objects.
```

# ⭐ Most Important Flow

## Without `new`

```text
const userOne = User(...)
                 ↓
            Call User()
                 ↓
             this = existing context
                 ↓
             return this
                 ↓
              userOne
```

Then:

```text
const userTwo = User(...)
                 ↓
            Call User()
                 ↓
             SAME this
                 ↓
             return this
                 ↓
              userTwo
```

Potentially:

```text
userOne ──────┐
              ↓
         SAME OBJECT
              ↑
userTwo ──────┘
```

---

## With `new`

```text
const userOne = new User(...)
                 ↓
          Create Object #1
                 ↓
          this → Object #1
                 ↓
          Run constructor
                 ↓
              userOne
```

Then:

```text
const userTwo = new User(...)
                 ↓
          Create Object #2
                 ↓
          this → Object #2
                 ↓
          Run constructor
                 ↓
              userTwo
```

Result:

```text
userOne → Object #1

userTwo → Object #2
```

### ⭐ One sentence to remember

> **Object literal directly creates an object; a constructor function defines how an object can be initialized; and `new` creates a fresh object, makes `this` refer to it, runs the constructor, and gives that object to the variable.**
