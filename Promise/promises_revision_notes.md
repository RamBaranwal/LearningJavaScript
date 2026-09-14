# JavaScript Promises — Complete Revision Notes

> A practical revision guide for JavaScript `Promise`, `.then()`, `.catch()`, `.finally()`, chaining, errors, timers, and `async/await`.

---

## 1. What is a Promise?

A Promise represents the eventual result of an asynchronous operation.

A Promise has 3 states:

```text
PENDING
  |
  +----> FULFILLED (resolved)
  |
  +----> REJECTED
```

A Promise can settle only once.

```js
const p = new Promise((resolve, reject) => {
    resolve("A");
    resolve("B");
    reject("Error");
});

p.then(value => console.log(value));
// A
```

The first settlement wins.

---

# 2. Basic Promise Syntax

```js
const promise = new Promise(function(resolve, reject) {

    // asynchronous work

    if (success) {
        resolve("Success");
    } else {
        reject("Error");
    }
});
```

Arrow-function version:

```js
const promise = new Promise((resolve, reject) => {

    if (success) {
        resolve("Success");
    } else {
        reject("Error");
    }
});
```

### Important

The Promise executor runs immediately.

```js
console.log("Before");

const p = new Promise((resolve, reject) => {
    console.log("Inside Promise");
});

console.log("After");
```

Output:

```text
Before
Inside Promise
After
```

---

# 3. `resolve()`

`resolve()` changes the Promise from pending to fulfilled.

```js
const promise = new Promise((resolve, reject) => {
    resolve("Hello");
});
```

The value passed to `resolve()` becomes available to `.then()`.

```js
promise.then((value) => {
    console.log(value);
});
```

Output:

```text
Hello
```

---

# 4. `reject()`

`reject()` changes the Promise from pending to rejected.

```js
const promise = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

promise.catch((error) => {
    console.log(error);
});
```

Output:

```text
Something went wrong
```

---

# 5. Promise Settles Only Once

This is one of the most important Promise rules.

```js
const promise = new Promise((resolve, reject) => {
    resolve("First");

    reject("Second");
    resolve("Third");
});

promise
    .then(value => console.log(value))
    .catch(error => console.log(error));
```

Output:

```text
First
```

Why?

```text
PENDING
   |
   | resolve("First")
   v
FULFILLED
```

After that, later `resolve()` or `reject()` calls are ignored.

---

# 6. `.then()`

`.then()` is used after successful Promise fulfillment.

```js
promise.then(() => {
    console.log("Promise completed");
});
```

It can receive the resolved value:

```js
const promise = Promise.resolve("Chai");

promise.then((value) => {
    console.log(value);
});
```

Output:

```text
Chai
```

---

# 7. Passing Data Through `.then()`

```js
Promise.resolve(10)
    .then((number) => {
        return number * 2;
    })
    .then((result) => {
        console.log(result);
    });
```

Output:

```text
20
```

Rule:

```text
return from .then()
        |
        v
input of next .then()
```

---

# 8. If You Don't Return Anything

```js
Promise.resolve("Chai")
    .then((value) => {
        console.log(value);
    })
    .then((value) => {
        console.log(value);
    });
```

Output:

```text
Chai
undefined
```

Why?

A function without an explicit return returns `undefined`.

```js
function test() {
    console.log("Hello");
}

console.log(test());
// undefined
```

Therefore:

```js
.then(() => {
    console.log("Hello");
})
```

passes `undefined` to the next `.then()`.

---

# 9. Returning a Value

```js
Promise.resolve({
    userName: "Chai",
    email: "Chai@example.com"
})
.then((user) => {
    return user.email;
})
.then((email) => {
    console.log(email);
});
```

Output:

```text
Chai@example.com
```

Flow:

```text
user object
    |
    v
return user.email
    |
    v
email string
    |
    v
next .then(email)
```

---

# 10. Returning the Whole Object

```js
promiseFour
    .then((user) => {
        console.log(user);
        return user;
    })
    .then((user) => {
        console.log(user.userName);
    });
```

If you want the next `.then()` to receive the object, return the object.

---

# 11. `.catch()`

`.catch()` handles rejection.

```js
Promise.reject("Something went wrong")
    .catch((error) => {
        console.log(error);
    });
```

Output:

```text
Something went wrong
```

Typical structure:

```js
promise
    .then(...)
    .catch(...)
```

---

# 12. `.then()` + `.catch()`

```js
const promise = new Promise((resolve, reject) => {

    const error = true;

    if (!error) {
        resolve("Success");
    } else {
        reject("Error");
    }
});

promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output:

```text
Error
```

Because the Promise was rejected, `.then()` is skipped and `.catch()` runs.

---

# 13. `.finally()`

`.finally()` runs whether the Promise fulfills or rejects.

Success:

```js
Promise.resolve("Success")
    .then(value => console.log(value))
    .finally(() => {
        console.log("Done");
    });
```

Output:

```text
Success
Done
```

Failure:

```js
Promise.reject("Error")
    .catch(error => console.log(error))
    .finally(() => {
        console.log("Done");
    });
```

Output:

```text
Error
Done
```

### Important

This does NOT print:

```js
.finally(() => "Promise is done");
```

It only returns a value.

To print:

```js
.finally(() => {
    console.log("Promise is done");
});
```

---

# 14. `finally()` Does Not Normally Change the Result

```js
Promise.resolve("Hello")
    .finally(() => {
        console.log("Cleanup");
    })
    .then(value => {
        console.log(value);
    });
```

Output:

```text
Cleanup
Hello
```

The original value continues.

---

# 15. Timer + Promise

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Done");
    }, 1000);

});

promise.then((value) => {
    console.log(value);
});
```

Timeline:

```text
Promise created
     |
     v
PENDING
     |
     | wait 1 second
     v
resolve("Done")
     |
     v
FULFILLED
     |
     v
.then()
```

---

# 16. `console.log(promise)` Can Show `<pending>`

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Done");
    }, 1000);

});

console.log(promise);
```

Immediately:

```text
Promise { <pending> }
```

Because 1 second has not passed.

Later the Promise becomes fulfilled.

Do not use `console.log(promise)` as a way to wait for a Promise.

Use:

```js
promise.then(...)
```

or:

```js
await promise
```

---

# 17. Your Promise 1 Example

```js
const promiseOne = new Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve();
        console.log("Promise is called");
    }, 1000);

});

promiseOne.then(function() {
    console.log("Promise one is consumed");
});
```

After 1 second:

```text
resolve()
Promise is called
Promise one is consumed
```

`resolve()` settles the Promise.

Then the `.then()` callback is scheduled.

---

# 18. Promise 2 Example

```js
new Promise(function(resolve, reject) {

    setTimeout(function() {
        console.log("This is example 2");
        resolve();
    }, 1000);

})
.then(function() {
    console.log("Promise 2 is consumed");
});
```

Output:

```text
This is example 2
Promise 2 is consumed
```

---

# 19. Promise 3 — Resolving an Object

```js
const promiseThree = new Promise(function(resolve, reject) {

    setTimeout(function() {
        console.log("This is 3 promise");

        resolve({
            userName: "Chai",
            email: "Chai@example.com"
        });

    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user);
    console.log(user.userName);
});
```

Output:

```text
This is 3 promise
{ userName: 'Chai', email: 'Chai@example.com' }
Chai
```

The object passed to `resolve()` becomes the `user` parameter.

---

# 20. Promise 3 — Why Object Comes Before/After the Timer

This version:

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Timer");
    }, 1000);

    resolve({
        userName: "Chai"
    });

});
```

Here `resolve()` is outside the timer.

So:

```text
setTimeout registered
     |
resolve() immediately
     |
.then() runs as microtask
     |
1 second later
     |
Timer callback
```

Therefore the object can appear before `"Timer"`.

Compare with:

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Timer");
        resolve({
            userName: "Chai"
        });
    }, 1000);

});
```

Now the Promise cannot resolve until the timer executes.

---

# 21. Multiple Timers Inside One Promise

Example:

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("First");
    }, 2000);

    setTimeout(() => {
        reject("Second");
    }, 1000);

});
```

The second timer finishes first.

Therefore:

```text
1000ms → reject()
2000ms → resolve() ignored
```

Final state:

```text
REJECTED
```

If reversed:

```js
setTimeout(() => {
    resolve("First");
}, 1000);

setTimeout(() => {
    reject("Second");
}, 2000);
```

Then:

```text
1000ms → resolve()
2000ms → reject() ignored
```

Final state:

```text
FULFILLED
```

---

# 22. The First Settlement Wins

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Error");
    }, 1000);

    setTimeout(() => {
        resolve("Success");
    }, 2000);

});
```

Result:

```text
1 second → reject
2 seconds → resolve ignored
```

The Promise stays rejected.

---

# 23. Your `error` / `error2` Example

```js
const promiseFour = new Promise(function(resolve, reject) {

    let error = false;
    let error2 = true;

    setTimeout(function() {

        if (!error) {
            resolve({
                userName: "Chai",
                email: "Chai@example.com"
            });
        } else {
            reject("Some error is coming");
        }

    }, 2000);

    setTimeout(function() {

        if (!error2) {
            resolve({
                userName: "Chai",
                email: "Chai@example.com"
            });
        } else {
            reject("Some error is coming");
        }

    }, 1000);

});
```

Timeline:

```text
0ms
 |
Promise pending
 |
1000ms
 |
error2 = true
 |
reject()
 |
Promise = REJECTED
 |
2000ms
 |
error = false
 |
resolve()
 |
ignored
```

The 1000ms timer wins because it settles the Promise first.

---

# 24. Promise Chaining

```js
Promise.resolve(10)
    .then((value) => {
        console.log(value);
        return value + 5;
    })
    .then((value) => {
        console.log(value);
        return value * 2;
    })
    .then((value) => {
        console.log(value);
    });
```

Output:

```text
10
15
30
```

Think:

```text
10
 ↓
+5
 ↓
15
 ↓
×2
 ↓
30
```

---

# 25. Chaining with an Object

```js
Promise.resolve({
    userName: "Chai",
    email: "Chai@example.com"
})
.then((user) => {
    return user.userName;
})
.then((userName) => {
    console.log(userName);
});
```

Output:

```text
Chai
```

---

# 26. Chaining and Error Handling

```js
Promise.resolve("Start")
    .then((value) => {
        console.log(value);
        throw new Error("Something failed");
    })
    .then(() => {
        console.log("This will not run");
    })
    .catch((error) => {
        console.log(error.message);
    });
```

Output:

```text
Start
Something failed
```

An error thrown inside `.then()` causes the chain to become rejected.

---

# 27. `catch()` Can Recover From an Error

```js
Promise.reject("Error")
    .catch((error) => {
        console.log(error);
        return "Recovered";
    })
    .then((value) => {
        console.log(value);
    });
```

Output:

```text
Error
Recovered
```

Why?

```text
REJECTED
   ↓
catch()
   ↓
return "Recovered"
   ↓
FULFILLED
   ↓
next then()
```

Returning from `catch()` can recover the chain.

---

# 28. `catch()` Can Continue the Rejection

```js
Promise.reject("Error")
    .catch((error) => {
        console.log(error);
        throw error;
    })
    .then(() => {
        console.log("Success");
    })
    .catch((error) => {
        console.log("Second catch:", error);
    });
```

Output:

```text
Error
Second catch: Error
```

---

# 29. `.then(success, failure)`

You can technically handle both success and failure directly:

```js
promise.then(
    (value) => {
        console.log("Success:", value);
    },
    (error) => {
        console.log("Error:", error);
    }
);
```

But for chains, this is usually clearer:

```js
promise
    .then(value => console.log(value))
    .catch(error => console.log(error));
```

---

# 30. `Promise.resolve()`

Creates an already-fulfilled Promise.

```js
const promise = Promise.resolve("Hello");

promise.then(value => {
    console.log(value);
});
```

Output:

```text
Hello
```

---

# 31. `Promise.reject()`

Creates an already-rejected Promise.

```js
const promise = Promise.reject("Error");

promise.catch(error => {
    console.log(error);
});
```

Output:

```text
Error
```

---

# 32. Promise Returning Another Promise

A `.then()` can return another Promise.

```js
Promise.resolve("Start")
    .then((value) => {

        console.log(value);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Finished");
            }, 1000);
        });

    })
    .then((value) => {
        console.log(value);
    });
```

Output:

```text
Start
Finished
```

The next `.then()` waits for the returned Promise.

---

# 33. Promise Combinators

JavaScript provides several useful Promise combinators:

```text
Promise.all()
Promise.allSettled()
Promise.race()
Promise.any()
```

---

# 34. `Promise.all()`

Waits for all Promises to fulfill.

```js
const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");
const p3 = Promise.resolve("Three");

Promise.all([p1, p2, p3])
    .then((values) => {
        console.log(values);
    });
```

Output:

```text
["One", "Two", "Three"]
```

If one rejects, `Promise.all()` rejects.

```js
Promise.all([
    Promise.resolve("One"),
    Promise.reject("Error"),
    Promise.resolve("Three")
])
.catch(error => {
    console.log(error);
});
```

Output:

```text
Error
```

---

# 35. `Promise.allSettled()`

Waits for every Promise, regardless of success or failure.

```js
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Error"),
    Promise.resolve("Another success")
])
.then(results => {
    console.log(results);
});
```

It gives objects describing each result:

```text
fulfilled
rejected
fulfilled
```

Use this when you want the result of every operation even if some fail.

---

# 36. `Promise.race()`

Returns the result of the first Promise to settle.

"Settle" means either fulfilled OR rejected.

```js
const p1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 1000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Second"), 2000);
});

Promise.race([p1, p2])
    .then(value => {
        console.log(value);
    });
```

Output:

```text
First
```

If the first Promise rejects, the race rejects.

---

# 37. `Promise.any()`

Returns the first Promise that fulfills.

```js
Promise.any([
    Promise.reject("Error 1"),
    Promise.resolve("Success"),
    Promise.resolve("Another success")
])
.then(value => {
    console.log(value);
});
```

Output:

```text
Success
```

Unlike `race()`, rejected Promises do not win `any()`.

If every Promise rejects, `Promise.any()` rejects with an `AggregateError`.

---

# 38. Difference Between Promise Combinators

| Method | Finishes when | If one rejects |
|---|---|---|
| `Promise.all()` | all fulfill | rejects |
| `Promise.allSettled()` | all settle | does not reject because of an individual result |
| `Promise.race()` | first settles | first rejection can win |
| `Promise.any()` | first fulfills | ignores rejections until all reject |

Easy memory:

```text
all         → everyone must succeed
allSettled  → tell me everyone's result
race        → whoever finishes first
any         → whoever succeeds first
```

---

# 39. Microtasks and Timers

Promise `.then()`, `.catch()`, and `.finally()` callbacks are handled through the microtask queue.

Timers such as `setTimeout()` are handled through the timer/task mechanism.

Example:

```js
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
```

Output:

```text
1
4
3
2
```

Why?

```text
Synchronous code
   ↓
1
4
   ↓
Microtasks
   ↓
3
   ↓
Timer/task
   ↓
2
```

---

# 40. Promise Executor vs `.then()`

Important distinction:

```js
const promise = new Promise((resolve, reject) => {
    console.log("Executor");
    resolve();
});

promise.then(() => {
    console.log("Then");
});
```

Output:

```text
Executor
Then
```

The executor runs immediately.

The `.then()` callback runs asynchronously as a microtask.

---

# 41. `async` Function

An `async` function always returns a Promise.

```js
async function test() {
    return "Hello";
}

test().then(value => {
    console.log(value);
});
```

Output:

```text
Hello
```

Even though you return a normal string, the async function wraps it in a fulfilled Promise.

---

# 42. `await`

`await` waits for a Promise inside an `async` function.

```js
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

async function main() {

    const data = await getData();

    console.log(data);
}

main();
```

Output after 1 second:

```text
Data received
```

---

# 43. `await` Does Not Block the Entire JavaScript Program

```js
async function main() {

    console.log("A");

    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });

    console.log("B");
}

console.log("Start");

main();

console.log("End");
```

Output:

```text
Start
A
End
B
```

`await` pauses the async function, not the entire JavaScript runtime.

---

# 44. Error Handling with `async/await`

Use `try/catch`.

```js
async function main() {

    try {

        const result = await Promise.reject("Something went wrong");

        console.log(result);

    } catch (error) {

        console.log(error);

    }
}

main();
```

Output:

```text
Something went wrong
```

---

# 45. `async/await` Equivalent to `.then()/.catch()`

Promise chaining:

```js
getData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```

Async/await:

```js
async function main() {

    try {

        const data = await getData();
        console.log(data);

    } catch (error) {

        console.log(error);

    }
}
```

Both use Promises.

`async/await` is mostly a cleaner syntax for working with Promise-based code.

---

# 46. Sequential vs Parallel `await`

Sequential:

```js
const a = await getA();
const b = await getB();
```

`getB()` starts only after `getA()` finishes if the calls themselves are made there.

Parallel:

```js
const promiseA = getA();
const promiseB = getB();

const [a, b] = await Promise.all([
    promiseA,
    promiseB
]);
```

Use `Promise.all()` when operations are independent and can run together.

---

# 47. Common Mistake — Forgetting `return`

Wrong:

```js
getUser()
    .then(user => {
        console.log(user);
    })
    .then(user => {
        console.log(user.email);
    });
```

The second `user` is `undefined`.

Correct:

```js
getUser()
    .then(user => {
        console.log(user);
        return user;
    })
    .then(user => {
        console.log(user.email);
    });
```

Or directly return the property:

```js
getUser()
    .then(user => {
        return user.email;
    })
    .then(email => {
        console.log(email);
    });
```

---

# 48. Common Mistake — Returning Instead of Printing

This:

```js
.finally(() => "Promise 4 is done");
```

returns a string.

It does not print.

Use:

```js
.finally(() => {
    console.log("Promise 4 is done");
});
```

Same concept:

```js
.then(() => "Hello");
```

passes `"Hello"` forward.

It does not display `"Hello"`.

---

# 49. Common Mistake — Calling Resolve/Reject Multiple Times

Avoid code like:

```js
if (condition1) {
    resolve("A");
}

if (condition2) {
    reject("B");
}
```

unless you deliberately understand that only the first settlement matters.

A cleaner Promise executor usually has one clear settlement path:

```js
if (success) {
    resolve(data);
} else {
    reject(error);
}
```

---

# 50. Common Mistake — Expecting `setTimeout()` to Pause Code

This:

```js
setTimeout(() => {
    console.log("After 1 second");
}, 1000);

console.log("Immediately");
```

outputs:

```text
Immediately
After 1 second
```

`setTimeout()` schedules a callback. It does not pause the current JavaScript execution.

---

# 51. Complete Promise Chain Example

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        const error = false;

        if (!error) {

            resolve({
                userName: "Chai",
                email: "Chai@example.com"
            });

        } else {

            reject("Something went wrong");

        }

    }, 1000);
});

promise
    .then((user) => {

        console.log(user);

        return user.userName;

    })
    .then((userName) => {

        console.log(userName);

    })
    .catch((error) => {

        console.log(error);

    })
    .finally(() => {

        console.log("Promise completed");

    });
```

Success output:

```text
{ userName: 'Chai', email: 'Chai@example.com' }
Chai
Promise completed
```

---

# 52. The Complete Mental Model

When you see:

```js
promise
    .then(...)
    .then(...)
    .catch(...)
    .finally(...);
```

Think:

```text
                 Promise
                    |
            ┌───────┴───────┐
            |               |
         success          failure
            |               |
          then()          catch()
            |               |
            └───────┬───────┘
                    |
                 finally()
```

For chaining:

```text
.then()
   |
   | return value
   v
next .then()
   |
   | return value
   v
next .then()
```

For errors:

```text
throw/reject
     |
     v
skip remaining then()
     |
     v
catch()
     |
     +---- return → recovery
     |
     +---- throw → rejection continues
     |
     v
finally()
```

---

# 53. Quick Revision Cheat Sheet

```text
Promise
├── pending
├── fulfilled
└── rejected

resolve(value)
└── fulfilled

reject(error)
└── rejected

.then()
└── handles fulfilled result

.catch()
└── handles rejection

.finally()
└── runs after settlement

return value
└── passes value to next .then()

no return
└── passes undefined

throw error
└── rejects current chain

Promise.resolve(value)
└── already fulfilled Promise

Promise.reject(error)
└── already rejected Promise

Promise.all()
└── all must fulfill

Promise.allSettled()
└── wait for everyone

Promise.race()
└── first to settle wins

Promise.any()
└── first fulfillment wins

async
└── function returns Promise

await
└── waits for Promise inside async function
```

---

# 54. Final Rules to Memorize

1. **A Promise starts as pending.**
2. **`resolve()` makes it fulfilled.**
3. **`reject()` makes it rejected.**
4. **A Promise can settle only once.**
5. **The first `resolve()` or `reject()` wins.**
6. **`.then()` handles successful fulfillment.**
7. **`.catch()` handles rejection.**
8. **`.finally()` runs for both success and failure.**
9. **`return` passes a value to the next `.then()`.**
10. **No `return` means `undefined` is passed forward.**
11. **`throw` inside a `.then()` rejects the chain.**
12. **`catch()` can recover by returning a value.**
13. **`finally()` returning a string does not print the string.**
14. **The Promise executor runs immediately.**
15. **`setTimeout()` schedules a callback; it does not pause JavaScript.**
16. **Promise callbacks use the microtask queue.**
17. **Microtasks are processed before timer callbacks after the current synchronous work.**
18. **`async` functions always return Promises.**
19. **`await` waits for a Promise inside an async function.**
20. **Use `Promise.all()` for independent asynchronous operations that should run together.**

---

# 55. Practice Progression

Practice these in order:

```text
Level 1
→ Create a Promise
→ resolve()
→ reject()

Level 2
→ .then()
→ .catch()
→ .finally()

Level 3
→ Pass values through .then()
→ return values
→ return objects
→ return properties

Level 4
→ Multiple .then()
→ error propagation
→ throw
→ catch recovery

Level 5
→ setTimeout + Promise
→ pending state
→ first settlement wins
→ timer vs microtask

Level 6
→ Promise.all()
→ Promise.allSettled()
→ Promise.race()
→ Promise.any()

Level 7
→ async
→ await
→ try/catch
→ Promise.all() with await

Level 8
→ Real API calls
→ fetch()
→ loading/success/error states
→ parallel requests
```

This progression gives you a strong practical understanding of JavaScript Promises.
