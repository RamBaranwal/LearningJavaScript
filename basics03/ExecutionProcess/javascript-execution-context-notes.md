# JavaScript Execution Context

> **Core idea:** JavaScript executes code inside an **Execution
> Context**.\
> An execution context is the environment in which JavaScript code is
> evaluated and executed.

------------------------------------------------------------------------

## 1. What is an Execution Context?

An **Execution Context (EC)** is a container created by JavaScript to
keep track of everything needed to execute a piece of code.

It contains information such as:

-   Variables
-   Function declarations
-   Function parameters
-   Scope / lexical environment
-   The value of `this`
-   Other information required while executing the code

You can think of it as a **workspace created by JavaScript for executing
code**.

### Main types of Execution Context

JavaScript has three commonly discussed types:

1.  **Global Execution Context (GEC)**
2.  **Function Execution Context (FEC)**
3.  **Eval Execution Context**

``` text
Execution Context
│
├── Global Execution Context
├── Function Execution Context
└── Eval Execution Context
```

> **Important:** In normal JavaScript development, you will mainly work
> with the **Global** and **Function** Execution Contexts. `eval()` is
> rarely recommended.

------------------------------------------------------------------------

# 2. Global Execution Context

When JavaScript starts executing a script, it creates a **Global
Execution Context**.

It is the first execution context created for the script.

For example:

``` javascript
const num1 = 10;
const num2 = 20;

function addTwo(value1, value2) {
    const total = value1 + value2;
    return total;
}
```

Before JavaScript starts executing the statements, a Global Execution
Context is created.

Conceptually:

``` text
Global Execution Context
        │
        ├── Global variables
        ├── Function declarations
        ├── Scope information
        └── this
```

### Important

The exact global environment differs between environments such as:

-   Browser
-   Node.js

For example, in a browser, the global `this` is associated with the
global object in the traditional script context.

Do not think of `this` as meaning "the browser" in every situation. Its
value depends on how the code is executed.

------------------------------------------------------------------------

# 3. Two Phases of an Execution Context

Every execution context is commonly explained using two major phases:

``` text
Execution Context
       │
       ├── 1. Creation Phase
       │
       └── 2. Execution Phase
```

These phases are extremely important for understanding JavaScript.

------------------------------------------------------------------------

# 4. Creation Phase

During the **Creation Phase**, JavaScript prepares the execution
environment.

It sets up things such as:

-   Variables
-   Function declarations
-   Parameters
-   Scope / lexical environment
-   `this`

A simple way to remember it:

> **Creation Phase = JavaScript prepares the workspace.**

------------------------------------------------------------------------

## 5. `var`, `let`, and `const` During Creation

A common beginner explanation is:

``` text
Variable → memory allocated
```

But there is an important difference between `var` and `let` / `const`.

### `var`

``` javascript
var num = 10;
```

The binding is created during the creation phase and is initialized
with:

``` javascript
undefined
```

So conceptually:

``` text
num → undefined
```

Later, during execution:

``` text
num → 10
```

### `let` and `const`

``` javascript
let num = 10;
const value = 20;
```

Their bindings are created during the creation phase, but they are **not
initialized with `undefined` in the same way as `var`**.

They remain in the **Temporal Dead Zone (TDZ)** until execution reaches
their declaration.

So this is better than saying simply:

``` text
let → undefined
const → undefined
```

Instead remember:

``` text
var   → created + initialized to undefined
let   → created, but uninitialized (TDZ)
const → created, but uninitialized (TDZ)
```

Example:

``` javascript
console.log(a); // undefined
var a = 10;
```

But:

``` javascript
console.log(b); // ReferenceError
let b = 10;
```

And:

``` javascript
console.log(c); // ReferenceError
const c = 10;
```

------------------------------------------------------------------------

# 6. Function Declarations During Creation

Function declarations are handled during the creation phase.

Example:

``` javascript
function addTwo(value1, value2) {
    return value1 + value2;
}
```

JavaScript knows about the function declaration before reaching the
function call during normal execution.

That is why this works:

``` javascript
addTwo(10, 20);

function addTwo(value1, value2) {
    return value1 + value2;
}
```

This behavior is commonly called **hoisting**.

> Function declarations are initialized during the creation phase, which
> is why they can be called before their declaration appears textually
> in the code.

------------------------------------------------------------------------

# 7. Execution Phase

After the environment has been prepared, JavaScript starts executing the
code.

This is where actual operations happen:

-   Assignments
-   Function calls
-   Calculations
-   `return`
-   `console.log()`
-   Conditions
-   Loops
-   Other statements

A simple way to remember:

> **Creation Phase = Prepare**
>
> **Execution Phase = Perform**

------------------------------------------------------------------------

# 8. Complete Example

Consider:

``` javascript
const num1 = 10;
const num2 = 20;

function addTwo(value1, value2) {
    const total = value1 + value2;
    return total;
}

const totalResult = addTwo(num1, num2);
const totalResult2 = addTwo(8, 4);
```

There is initially a:

``` text
Global Execution Context
```

------------------------------------------------------------------------

# 9. Global Execution Context --- Creation Phase

Before executing the statements, JavaScript creates the global
environment.

Conceptually:

``` text
Global Execution Context
│
├── num1          → created, not initialized yet
├── num2          → created, not initialized yet
├── addTwo        → function available
├── totalResult   → created, not initialized yet
└── totalResult2  → created, not initialized yet
```

Because `num1`, `num2`, `totalResult`, and `totalResult2` use `const`,
they are subject to the TDZ until execution reaches their declarations.

------------------------------------------------------------------------

# 10. Global Execution Context --- Execution Phase

JavaScript now executes the code from top to bottom.

### Step 1

``` javascript
const num1 = 10;
```

Now:

``` text
num1 → 10
```

### Step 2

``` javascript
const num2 = 20;
```

Now:

``` text
num2 → 20
```

### Step 3

The function declaration already exists from the creation phase.

``` javascript
function addTwo(value1, value2) {
    const total = value1 + value2;
    return total;
}
```

No function body is executed yet.

> **Defining a function is not the same as calling it.**

------------------------------------------------------------------------

# 11. Function Call Creates a New Execution Context

Now JavaScript reaches:

``` javascript
const totalResult = addTwo(num1, num2);
```

At this point, JavaScript **calls** `addTwo()`.

A new **Function Execution Context** is created.

``` text
Global Execution Context
        │
        └── Function Execution Context: addTwo()
```

This function execution context is separate from the global execution
context.

------------------------------------------------------------------------

# 12. Function Execution Context --- Creation Phase

The function receives:

``` javascript
addTwo(num1, num2);
```

The actual values are:

``` text
10
20
```

The function parameters are:

``` javascript
value1
value2
```

So conceptually:

``` text
Function Execution Context: addTwo
│
├── value1 → 10
├── value2 → 20
└── total  → created, not initialized yet
```

The parameters receive their argument values when the function is
called.

------------------------------------------------------------------------

# 13. Function Execution Context --- Execution Phase

Now the function body executes:

``` javascript
const total = value1 + value2;
```

The values are:

``` text
value1 = 10
value2 = 20
```

Therefore:

``` text
total = 10 + 20
      = 30
```

So:

``` text
total → 30
```

Then:

``` javascript
return total;
```

The function returns:

``` text
30
```

------------------------------------------------------------------------

# 14. What Happens After `return`?

The function execution is finished.

The function execution context is removed from the active call stack.

The returned value goes back to the place where the function was called.

``` javascript
const totalResult = addTwo(num1, num2);
```

So:

``` text
totalResult → 30
```

Conceptually:

``` text
Before function call:

┌──────────────────────────────┐
│ Global Execution Context     │
└──────────────────────────────┘


During function call:

┌──────────────────────────────┐
│ Function: addTwo()           │
│ value1 = 10                  │
│ value2 = 20                  │
│ total = 30                   │
└──────────────────────────────┘
┌──────────────────────────────┐
│ Global Execution Context     │
└──────────────────────────────┘


After return:

┌──────────────────────────────┐
│ Global Execution Context     │
│ totalResult = 30             │
└──────────────────────────────┘
```

The function's execution context is no longer active.

------------------------------------------------------------------------

# 15. Second Function Call

Next:

``` javascript
const totalResult2 = addTwo(8, 4);
```

Again, JavaScript creates a **new Function Execution Context**.

This is a new invocation.

``` text
Function Execution Context: addTwo()
│
├── value1 → 8
├── value2 → 4
└── total  → 12
```

Then:

``` javascript
return total;
```

returns:

``` text
12
```

Therefore:

``` javascript
totalResult2 = 12;
```

------------------------------------------------------------------------

# 16. Complete Result

After the complete program finishes:

``` javascript
console.log(totalResult);  // 30
console.log(totalResult2); // 12
```

Final values:

``` text
num1        → 10
num2        → 20
totalResult → 30
totalResult2 → 12
```

------------------------------------------------------------------------

# 17. Very Important: Function Definition vs Function Call

These two things are different.

### Function definition

``` javascript
function addTwo(a, b) {
    return a + b;
}
```

This defines the function.

The function body does **not** execute just because the function is
defined.

### Function call

``` javascript
addTwo(10, 20);
```

This actually executes the function.

Remember:

``` text
Function definition
        ↓
Function exists

Function call
        ↓
Function executes
        ↓
New Function Execution Context
```

------------------------------------------------------------------------

# 18. Arguments vs Parameters

This is also important when understanding Function Execution Contexts.

``` javascript
function addTwo(value1, value2) {
    return value1 + value2;
}

addTwo(num1, num2);
```

### Parameters

The variables written in the function definition:

``` javascript
value1
value2
```

are called **parameters**.

### Arguments

The actual values passed during the call:

``` javascript
num1
num2
```

are called **arguments**.

For:

``` javascript
addTwo(10, 20);
```

we can think:

``` text
value1 ← 10
value2 ← 20
```

------------------------------------------------------------------------

# 19. Call Stack

The **Call Stack** keeps track of execution contexts that are currently
active.

JavaScript uses a **stack**, so it follows:

``` text
LIFO
```

### LIFO = Last In, First Out

Think of a stack of plates.

The last plate placed on top is the first plate removed.

------------------------------------------------------------------------

# 20. Call Stack Example

Consider:

``` javascript
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();
```

Execution starts with the global context.

``` text
┌───────────────┐
│ Global EC     │
└───────────────┘
```

Then:

``` javascript
one();
```

`one()` is called:

``` text
┌───────────────┐
│ one()         │
├───────────────┤
│ Global EC     │
└───────────────┘
```

Inside `one()`:

``` javascript
two();
```

So `two()` is pushed:

``` text
┌───────────────┐
│ two()         │
├───────────────┤
│ one()         │
├───────────────┤
│ Global EC     │
└───────────────┘
```

Inside `two()`:

``` javascript
three();
```

So `three()` is pushed:

``` text
┌───────────────┐
│ three()       │
├───────────────┤
│ two()         │
├───────────────┤
│ one()         │
├───────────────┤
│ Global EC     │
└───────────────┘
```

`three()` finishes first.

``` text
three() → removed
```

Then:

``` text
┌───────────────┐
│ two()         │
├───────────────┤
│ one()         │
├───────────────┤
│ Global EC     │
└───────────────┘
```

Then `two()` finishes:

``` text
┌───────────────┐
│ one()         │
├───────────────┤
│ Global EC     │
└───────────────┘
```

Then `one()` finishes:

``` text
┌───────────────┐
│ Global EC     │
└───────────────┘
```

Finally, the global execution finishes.

------------------------------------------------------------------------

# 21. Independent Function Calls

Consider:

``` javascript
function one() {
    console.log("one");
}

function two() {
    console.log("two");
}

function three() {
    console.log("three");
}

one();
two();
three();
```

The calls are independent.

The order is:

``` text
Global
  ↓
one()
  ↓
Global
  ↓
two()
  ↓
Global
  ↓
three()
  ↓
Global
```

JavaScript does **not** keep all three function execution contexts
active at the same time.

Each function call creates its own execution context, executes it, and
returns.

------------------------------------------------------------------------

# 22. Dependent / Nested Function Calls

Now consider:

``` javascript
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("three");
}

one();
```

Here the calls are dependent/nested.

The flow becomes:

``` text
Global
   ↓
one()
   ↓
two()
   ↓
three()
```

The Call Stack becomes:

``` text
three()
two()
one()
Global
```

Then they finish in reverse order:

``` text
three() finishes
      ↓
two() finishes
      ↓
one() finishes
      ↓
Global continues
```

This is the **LIFO** behavior of the Call Stack.

------------------------------------------------------------------------

# 23. Execution Context vs Call Stack

These are related, but they are not the same thing.

### Execution Context

An execution context is the **environment/workspace used to execute
code**.

Examples:

``` text
Global Execution Context
Function Execution Context
Eval Execution Context
```

### Call Stack

The call stack is the **stack structure used to keep track of active
execution contexts**.

Think:

``` text
Execution Context = What is executing?

Call Stack = Which execution contexts are currently active, and in what order?
```

------------------------------------------------------------------------

# 24. Complete Mental Model

When JavaScript runs a program, think about the process like this:

``` text
JavaScript starts
       ↓
Global Execution Context created
       ↓
Creation Phase
       ↓
Execution Phase
       ↓
Function call occurs
       ↓
New Function Execution Context created
       ↓
Function Creation Phase
       ↓
Function Execution Phase
       ↓
return
       ↓
Function Execution Context removed
       ↓
Returned value goes back to caller
       ↓
Global Execution continues
```

------------------------------------------------------------------------

# 25. Example to Remember Everything

``` javascript
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```

### Global Execution Context

Creation:

``` text
val1    → created
val2    → created
addNum  → function
result1 → created
result2 → created
```

Execution:

``` text
val1 = 10
val2 = 5
```

Then:

``` javascript
result1 = addNum(val1, val2);
```

creates:

``` text
Function EC: addNum
num1  → 10
num2  → 5
total → 15
return → 15
```

Then:

``` text
result1 → 15
```

Next:

``` javascript
result2 = addNum(10, 2);
```

creates another Function EC:

``` text
Function EC: addNum
num1  → 10
num2  → 2
total → 12
return → 12
```

Then:

``` text
result2 → 12
```

Final:

``` text
val1    → 10
val2    → 5
result1 → 15
result2 → 12
```

------------------------------------------------------------------------

# 26. Important Correction: "Memory Phase"

You may hear tutorials call the first phase:

``` text
Memory Creation Phase
```

or:

``` text
Creation Phase
```

Both are commonly used while learning JavaScript execution.

A more complete mental model is:

``` text
Creation Phase
    ↓
Create bindings / environments
Set up function declarations
Prepare `this`
Establish scope information
    ↓
Execution Phase
    ↓
Execute statements
Assign values
Call functions
Calculate results
Return values
```

So don't think that JavaScript simply "allocates memory for every
variable and immediately puts `undefined` in it." `var`, `let`, `const`,
and function declarations have different initialization behavior.

------------------------------------------------------------------------

# 27. `return` Is Very Important

When JavaScript reaches:

``` javascript
return total;
```

the function:

1.  Produces a value.
2.  Sends the value back to the caller.
3.  Finishes that function execution.
4.  Its execution context is removed from the active call stack.

Example:

``` javascript
function add(a, b) {
    const total = a + b;
    return total;
}

const result = add(10, 20);
```

Flow:

``` text
add(10, 20)
     ↓
a = 10
b = 20
     ↓
total = 30
     ↓
return 30
     ↓
Function EC finishes
     ↓
result = 30
```

------------------------------------------------------------------------

# 28. What Happens to Local Variables?

Consider:

``` javascript
function add(a, b) {
    const total = a + b;
    return total;
}
```

`a`, `b`, and `total` belong to that function's execution environment.

After the function returns:

``` text
add() Execution Context
        ↓
      finishes
        ↓
removed from active Call Stack
```

The values are no longer accessible through that function call.

However, JavaScript's memory management is more accurately described
using **garbage collection**. An object or value becomes eligible for
garbage collection when it is no longer reachable.

------------------------------------------------------------------------

# 29. Execution Context and Scope

Each function gets its own local environment.

Example:

``` javascript
const x = 10;

function test() {
    const y = 20;
    console.log(x);
    console.log(y);
}

test();
```

Inside `test()`:

``` text
Local environment
    y → 20

Outer environment
    x → 10
```

The function can access variables from its outer scope through
JavaScript's **lexical scoping**.

This concept becomes especially important when learning:

-   Scope
-   Lexical Environment
-   Closures
-   Scope Chain

------------------------------------------------------------------------

# 30. Common Mistakes to Avoid

## Mistake 1: Thinking a function executes when it is defined

``` javascript
function add(a, b) {
    return a + b;
}
```

This does not execute `a + b`.

The function executes when called:

``` javascript
add(10, 20);
```

------------------------------------------------------------------------

## Mistake 2: Thinking every variable starts as `undefined`

This is not correct for `let` and `const`.

``` javascript
var a = 10;    // var is initialized with undefined during setup
let b = 20;    // b remains uninitialized until its declaration executes
const c = 30;  // c remains uninitialized until its declaration executes
```

------------------------------------------------------------------------

## Mistake 3: Confusing arguments and parameters

``` javascript
function add(a, b) { }
```

`a` and `b` are **parameters**.

``` javascript
add(10, 20);
```

`10` and `20` are **arguments**.

------------------------------------------------------------------------

## Mistake 4: Thinking all function calls stay in the stack

They don't.

A function is pushed onto the call stack when called and removed when it
finishes.

``` text
Call
 ↓
Push
 ↓
Execute
 ↓
Return
 ↓
Pop
```

------------------------------------------------------------------------

## Mistake 5: Forgetting LIFO

The Call Stack follows:

``` text
LIFO = Last In, First Out
```

If:

``` text
Global
  ↓
one()
  ↓
two()
  ↓
three()
```

then:

``` text
three() finishes first
two() finishes second
one() finishes third
Global continues last
```

------------------------------------------------------------------------

# 31. Quick Revision

### Execution Context

``` text
Environment in which JavaScript executes code.
```

### Main Types

``` text
1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context
```

### Two Main Phases

``` text
1. Creation Phase
2. Execution Phase
```

### Creation Phase

``` text
Prepare the execution environment
↓
Create bindings
↓
Initialize according to declaration type
↓
Set up functions/scope/this
```

### Execution Phase

``` text
Execute code
↓
Assign values
↓
Perform operations
↓
Call functions
↓
Return values
```

### Function Call

``` text
Function call
    ↓
New Function Execution Context
    ↓
Creation Phase
    ↓
Execution Phase
    ↓
return
    ↓
Function EC finishes
```

### Call Stack

``` text
Keeps track of active execution contexts.
```

### Call Stack Rule

``` text
LIFO
Last In → First Out
```

------------------------------------------------------------------------

# 32. One-Line Memory Trick

Remember these four lines:

``` text
Execution Context = Environment to execute code

Creation Phase = Prepare

Execution Phase = Perform

Call Stack = Track active function calls using LIFO
```

And the most important flow:

``` text
Global EC
   ↓
Creation Phase
   ↓
Execution Phase
   ↓
Function Call
   ↓
Function EC
   ↓
Creation Phase
   ↓
Execution Phase
   ↓
return
   ↓
Function EC removed
   ↓
Global execution continues
```

------------------------------------------------------------------------

# 33. Final Mental Picture

``` text
                 JAVASCRIPT PROGRAM
                         │
                         ▼
              ┌─────────────────────┐
              │ Global Execution    │
              │ Context             │
              └─────────────────────┘
                         │
                 Creation Phase
                         │
                         ▼
                 Execution Phase
                         │
                  Function Call
                         │
                         ▼
              ┌─────────────────────┐
              │ Function Execution  │
              │ Context             │
              └─────────────────────┘
                         │
                 Creation Phase
                         │
                         ▼
                 Execution Phase
                         │
                       return
                         │
                         ▼
              Function EC finishes
                         │
                         ▼
                 Global continues
```

> **Best way to understand JavaScript:** don't memorize only the
> definitions. Whenever you see a function call, ask yourself:
>
> **"Was a new Function Execution Context created? What is inside it?
> What gets pushed onto the Call Stack? What value is returned? When is
> it removed?"**
