# JavaScript Promises — Complete Code Revision Notes

> Keep this file in GitHub and use it as a quick revision/reference sheet.
> It includes the major ways you can CREATE, RESOLVE, REJECT, CONSUME, CHAIN, and COMBINE Promises.

---

# 1. Promise Basics

A Promise has 3 states:

```text
PENDING
   |
   +----> FULFILLED
   |
   +----> REJECTED
```

A Promise can settle only once.

---

# 2. Creating a Promise — Normal Function

```js
const promise = new Promise(function(resolve, reject) {

    resolve("Success");

});
```

Consume it:

```js
promise.then(function(value) {
    console.log(value);
});
```

Output:

```text
Success
```

---

# 3. Creating a Promise — Arrow Function

```js
const promise = new Promise((resolve, reject) => {

    resolve("Success");

});

promise.then((value) => {
    console.log(value);
});
```

This is the same concept as the previous example, just shorter syntax.

---

# 4. Creating a Promise with `if/else`

```js
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
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

---

# 5. Creating a Promise with `setTimeout()`

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Completed after 1 second");
    }, 1000);

});

promise.then((value) => {
    console.log(value);
});
```

Flow:

```text
create Promise
     ↓
PENDING
     ↓
wait 1 second
     ↓
resolve()
     ↓
FULFILLED
     ↓
then()
```

---

# 6. Resolving Without a Value

```js
const promise = new Promise((resolve, reject) => {

    resolve();

});

promise.then(() => {
    console.log("Promise completed");
});
```

Here:

```js
resolve();
```

passes `undefined`.

---

# 7. Resolving With a String

```js
const promise = new Promise((resolve, reject) => {

    resolve("Hello");

});

promise.then((value) => {
    console.log(value);
});
```

Output:

```text
Hello
```

---

# 8. Resolving With a Number

```js
const promise = new Promise((resolve, reject) => {

    resolve(100);

});

promise.then((value) => {
    console.log(value);
});
```

---

# 9. Resolving With an Object

```js
const promise = new Promise((resolve, reject) => {

    resolve({
        userName: "Chai",
        email: "Chai@example.com"
    });

});

promise.then((user) => {
    console.log(user);
});
```

Output:

```text
{
    userName: "Chai",
    email: "Chai@example.com"
}
```

---

# 10. Resolving With an Array

```js
const promise = new Promise((resolve, reject) => {

    resolve(["JavaScript", "Java", "Python"]);

});

promise.then((languages) => {
    console.log(languages);
});
```

---

# 11. Rejecting With a String

```js
const promise = new Promise((resolve, reject) => {

    reject("Something went wrong");

});

promise.catch((error) => {
    console.log(error);
});
```

---

# 12. Rejecting With an Error Object

Preferred for many real applications:

```js
const promise = new Promise((resolve, reject) => {

    reject(new Error("Something went wrong"));

});

promise.catch((error) => {
    console.log(error.message);
});
```

Output:

```text
Something went wrong
```

---

# 13. Resolve or Reject After a Timer

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        const error = false;

        if (!error) {
            resolve("Success");
        } else {
            reject(new Error("Failure"));
        }

    }, 1000);

});

promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error.message);
    });
```

---

# 14. Promise Executor Runs Immediately

```js
console.log("Before");

const promise = new Promise((resolve, reject) => {
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

The executor function is not delayed.

---

# 15. Promise Can Be Pending

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Done");
    }, 2000);

});

console.log(promise);
```

Immediately:

```text
Promise { <pending> }
```

After 2 seconds it becomes fulfilled.

---

# 16. Promise Settles Only Once

```js
const promise = new Promise((resolve, reject) => {

    resolve("First");

    resolve("Second");
    reject("Error");

});

promise
    .then(value => console.log(value))
    .catch(error => console.log(error));
```

Output:

```text
First
```

The first settlement wins.

---

# 17. First Timer Wins

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("First timer");
    }, 1000);

    setTimeout(() => {
        reject("Second timer");
    }, 2000);

});

promise
    .then(value => console.log(value))
    .catch(error => console.log(error));
```

Output:

```text
First timer
```

At 1 second the Promise is fulfilled.
At 2 seconds the rejection is ignored.

---

# 18. Second Timer Wins

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("First timer");
    }, 2000);

    setTimeout(() => {
        reject("Second timer");
    }, 1000);

});

promise
    .then(value => console.log(value))
    .catch(error => console.log(error));
```

Output:

```text
Second timer
```

At 1 second the Promise becomes rejected.
At 2 seconds the resolve is ignored.

---

# 19. `.then()` — Basic

```js
promise.then(() => {
    console.log("Success");
});
```

---

# 20. `.then()` With a Value

```js
Promise.resolve("Hello")
    .then((value) => {
        console.log(value);
    });
```

---

# 21. `.catch()` — Basic

```js
Promise.reject("Error")
    .catch((error) => {
        console.log(error);
    });
```

---

# 22. `.finally()` — Basic

```js
Promise.resolve("Success")
    .finally(() => {
        console.log("Finished");
    });
```

Output:

```text
Finished
```

---

# 23. `finally()` Runs After Success

```js
Promise.resolve("Success")
    .then((value) => {
        console.log(value);
    })
    .finally(() => {
        console.log("Done");
    });
```

Output:

```text
Success
Done
```

---

# 24. `finally()` Runs After Failure

```js
Promise.reject("Error")
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Done");
    });
```

Output:

```text
Error
Done
```

---

# 25. Important — `return` vs `console.log`

This:

```js
.finally(() => "Promise done");
```

returns a string.

It does NOT print it.

To print:

```js
.finally(() => {
    console.log("Promise done");
});
```

Same rule applies to `.then()`:

```js
.then(() => "Hello");
```

passes `"Hello"` forward.

It does not print `"Hello"`.

---

# 26. Promise Chaining — Basic

```js
Promise.resolve(10)
    .then((value) => {
        return value + 5;
    })
    .then((value) => {
        return value * 2;
    })
    .then((value) => {
        console.log(value);
    });
```

Output:

```text
30
```

Flow:

```text
10
 ↓
15
 ↓
30
```

---

# 27. Returning an Object Property

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

---

# 28. Returning the Whole Object

```js
Promise.resolve({
    userName: "Chai",
    email: "Chai@example.com"
})
.then((user) => {
    return user;
})
.then((user) => {
    console.log(user.userName);
});
```

---

# 29. Forgetting `return`

Wrong:

```js
Promise.resolve({
    userName: "Chai",
    email: "Chai@example.com"
})
.then((user) => {
    console.log(user);
})
.then((user) => {
    console.log(user.email);
});
```

The second `user` is `undefined`.

Correct:

```js
Promise.resolve({
    userName: "Chai",
    email: "Chai@example.com"
})
.then((user) => {
    console.log(user);
    return user;
})
.then((user) => {
    console.log(user.email);
});
```

---

# 30. Returning a Different Value

```js
Promise.resolve(10)
    .then((value) => {
        return 100;
    })
    .then((value) => {
        console.log(value);
    });
```

Output:

```text
100
```

The next `.then()` receives what was returned.

---

# 31. Returning Another Promise

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

The second `.then()` waits for the returned Promise.

---

# 32. Throwing an Error Inside `.then()`

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

---

# 33. `catch()` Can Recover

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

Returning from `catch()` makes the chain fulfilled.

---

# 34. `catch()` Can Re-Throw

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

---

# 35. `.then(success, failure)`

You can handle success and failure as two arguments:

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

For longer chains, `.catch()` is usually easier to read:

```js
promise
    .then(value => console.log(value))
    .catch(error => console.log(error));
```

---

# 36. `Promise.resolve()`

Creates an already fulfilled Promise.

```js
const promise = Promise.resolve("Hello");

promise.then(value => {
    console.log(value);
});
```

---

# 37. `Promise.reject()`

Creates an already rejected Promise.

```js
const promise = Promise.reject("Error");

promise.catch(error => {
    console.log(error);
});
```

---

# 38. `Promise.resolve()` With an Object

```js
Promise.resolve({
    name: "Chai",
    age: 20
})
.then(user => {
    console.log(user.name);
});
```

---

# 39. `Promise.resolve()` With an Existing Promise

```js
const original = Promise.resolve("Hello");

const another = Promise.resolve(original);

another.then(value => {
    console.log(value);
});
```

`Promise.resolve()` adopts the existing Promise's state/value.

---

# 40. Promise From a Function

A common real-world pattern:

```js
function getUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve({
                userName: "Chai",
                email: "Chai@example.com"
            });

        }, 1000);

    });

}

getUser()
    .then(user => {
        console.log(user);
    });
```

This is very common when writing asynchronous functions.

---

# 41. Promise Function With Success/Failure

```js
function login() {

    return new Promise((resolve, reject) => {

        const success = true;

        setTimeout(() => {

            if (success) {
                resolve("Login successful");
            } else {
                reject("Login failed");
            }

        }, 1000);

    });

}

login()
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

---

# 42. Sequential Promise Calls

```js
getUser()
    .then(user => {
        return getPosts(user.userName);
    })
    .then(posts => {
        return getComments(posts[0]);
    })
    .then(comments => {
        console.log(comments);
    })
    .catch(error => {
        console.log(error);
    });
```

Each operation waits for the previous one.

---

# 43. Multiple Independent Promises

```js
const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");
const p3 = Promise.resolve("Three");
```

---

# 44. `Promise.all()`

All must fulfill.

```js
const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");
const p3 = Promise.resolve("Three");

Promise.all([p1, p2, p3])
    .then(values => {
        console.log(values);
    });
```

Output:

```text
["One", "Two", "Three"]
```

If one rejects:

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

It rejects.

---

# 45. `Promise.all()` With Real Async Operations

```js
const userPromise = getUser();
const postsPromise = getPosts();
const productsPromise = getProducts();

Promise.all([
    userPromise,
    postsPromise,
    productsPromise
])
.then(([user, posts, products]) => {

    console.log(user);
    console.log(posts);
    console.log(products);

})
.catch(error => {
    console.log(error);
});
```

Useful when operations are independent.

---

# 46. `Promise.allSettled()`

Waits for every Promise.

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

You get each Promise's status:

```text
fulfilled
rejected
fulfilled
```

---

# 47. `Promise.race()`

First Promise to settle wins.

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

A rejection can also win the race.

---

# 48. `Promise.any()`

First Promise to fulfill wins.

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

Rejections are ignored until every Promise rejects.

---

# 49. Promise Combinator Comparison

```text
Promise.all()
→ wait for all
→ one rejection makes it reject

Promise.allSettled()
→ wait for all
→ gives every result

Promise.race()
→ first settlement wins
→ success OR rejection

Promise.any()
→ first fulfillment wins
→ ignores rejection until all reject
```

---

# 50. `async` Function

An `async` function always returns a Promise.

```js
async function test() {
    return "Hello";
}

test().then(value => {
    console.log(value);
});
```

---

# 51. `async` With Object

```js
async function getUser() {

    return {
        userName: "Chai",
        email: "Chai@example.com"
    };

}

getUser().then(user => {
    console.log(user);
});
```

---

# 52. `await`

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

---

# 53. `async/await` With `try/catch`

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

---

# 54. Promise Chain vs `async/await`

Promise chain:

```js
getUser()
    .then(user => {
        return getPosts(user);
    })
    .then(posts => {
        console.log(posts);
    })
    .catch(error => {
        console.log(error);
    });
```

Async/await:

```js
async function main() {

    try {

        const user = await getUser();
        const posts = await getPosts(user);

        console.log(posts);

    } catch (error) {

        console.log(error);

    }

}

main();
```

---

# 55. Sequential `await`

```js
const user = await getUser();
const posts = await getPosts(user);
const comments = await getComments(posts);
```

The next line waits for the previous operation.

Use this when the next operation depends on the previous result.

---

# 56. Parallel `await`

If operations are independent:

```js
const userPromise = getUser();
const postsPromise = getPosts();
const productsPromise = getProducts();

const [user, posts, products] = await Promise.all([
    userPromise,
    postsPromise,
    productsPromise
]);
```

This allows independent operations to run together.

---

# 57. Important: `await` Does Not Block Everything

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

`await` pauses the async function, not the whole JavaScript program.

---

# 58. Microtask Example

```js
console.log("1");

Promise.resolve().then(() => {
    console.log("2");
});

console.log("3");
```

Output:

```text
1
3
2
```

`.then()` runs asynchronously.

---

# 59. Timer vs Promise

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

General idea:

```text
synchronous code
      ↓
microtasks
      ↓
timer/task callbacks
```

---

# 60. Timer Inside Promise

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        console.log("Timer finished");

        resolve("Done");

    }, 1000);

});

promise.then(value => {
    console.log(value);
});
```

Output:

```text
Timer finished
Done
```

---

# 61. Important Ordering Example

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Timer");
    }, 1000);

    resolve("Object");

});

promise.then(value => {
    console.log(value);
});
```

Output:

```text
Object
Timer
```

Why?

```text
setTimeout registered
       ↓
resolve() immediately
       ↓
.then() microtask
       ↓
Object
       ↓
1 second later
       ↓
Timer
```

---

# 62. Same Example With `resolve()` Inside Timer

```js
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        console.log("Timer");

        resolve("Object");

    }, 1000);

});

promise.then(value => {
    console.log(value);
});
```

Output:

```text
Timer
Object
```

Because the Promise cannot fulfill until the timer calls `resolve()`.

---

# 63. Multiple `.then()` Calls on the Same Promise

```js
const promise = new Promise(resolve => {

    setTimeout(() => {
        resolve("Hello");
    }, 1000);

});

promise.then(value => {
    console.log("A:", value);
});

promise.then(value => {
    console.log("B:", value);
});

promise.then(value => {
    console.log("C:", value);
});
```

All three handlers receive the same resolved value.

A Promise can have multiple consumers.

---

# 64. Separate Chains From the Same Promise

```js
const promise = Promise.resolve({
    userName: "Chai",
    email: "Chai@example.com"
});

promise
    .then(user => {
        console.log(user.userName);
    });

promise
    .then(user => {
        console.log(user.email);
    });
```

Output:

```text
Chai
Chai@example.com
```

Each chain has its own continuation.

---

# 65. Promise With `fetch()`

A common real-world example:

```js
fetch("https://example.com/data")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```

`fetch()` returns a Promise.

---

# 66. `fetch()` With `async/await`

```js
async function getData() {

    try {

        const response = await fetch("https://example.com/data");

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

getData();
```

---

# 67. Common Mistake — Not Returning `response.json()`

Wrong:

```js
fetch(url)
    .then(response => {
        response.json();
    })
    .then(data => {
        console.log(data);
    });
```

Correct:

```js
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });
```

Or concise:

```js
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
```

---

# 68. Common Mistake — Returning `console.log()`

```js
.then(user => {
    return console.log(user);
})
.then(user => {
    console.log(user);
});
```

The second `user` is `undefined`.

Why?

`console.log()` returns `undefined`.

Correct:

```js
.then(user => {
    console.log(user);
    return user;
})
.then(user => {
    console.log(user);
});
```

---

# 69. Common Mistake — Catching and Returning Error

This:

```js
.catch(error => {
    return error;
});
```

recovers the chain by returning a normal value.

If you want to print the error:

```js
.catch(error => {
    console.log(error);
});
```

If you want the error to remain rejected:

```js
.catch(error => {
    console.log(error);
    throw error;
});
```

---

# 70. Complete Realistic Promise Example

```js
function getUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = true;

            if (success) {

                resolve({
                    userName: "Chai",
                    email: "Chai@example.com"
                });

            } else {

                reject(new Error("Unable to get user"));

            }

        }, 1000);

    });

}

getUser()
    .then(user => {

        console.log(user);

        return user.email;

    })
    .then(email => {

        console.log(email);

    })
    .catch(error => {

        console.log(error.message);

    })
    .finally(() => {

        console.log("Operation completed");

    });
```

Success output:

```text
{ userName: 'Chai', email: 'Chai@example.com' }
Chai@example.com
Operation completed
```

---

# 71. Complete Failure Example

```js
function getUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            reject(new Error("Unable to get user"));

        }, 1000);

    });

}

getUser()
    .then(user => {

        console.log(user);

    })
    .catch(error => {

        console.log(error.message);

    })
    .finally(() => {

        console.log("Operation completed");

    });
```

Output:

```text
Unable to get user
Operation completed
```

---

# 72. Complete Mental Model

For:

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
             ┌──────┴──────┐
             ↓             ↓
          SUCCESS        FAILURE
             ↓             ↓
           then          catch
             ↓             ↓
             └──────┬──────┘
                    ↓
                 finally
```

For a chain:

```text
.then()
   |
   | return value
   ↓
next .then()
   |
   | return value
   ↓
next .then()
```

---

# 73. Promise Creation Checklist

When creating a Promise, these are the common patterns to remember:

```js
// 1. Basic
new Promise((resolve, reject) => {
    resolve(value);
});

// 2. Conditional
new Promise((resolve, reject) => {
    if (condition) {
        resolve(value);
    } else {
        reject(error);
    }
});

// 3. Timer
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(value);
    }, 1000);
});

// 4. Async operation
new Promise((resolve, reject) => {
    someAsyncOperation((result, error) => {
        if (error) {
            reject(error);
        } else {
            resolve(result);
        }
    });
});
```

---

# 74. Promise Consumption Checklist

```js
// Success
promise.then(value => {
    console.log(value);
});

// Failure
promise.catch(error => {
    console.log(error);
});

// Both
promise
    .then(value => console.log(value))
    .catch(error => console.log(error));

// Always run cleanup
promise
    .then(value => console.log(value))
    .catch(error => console.log(error))
    .finally(() => console.log("Done"));
```

---

# 75. Promise Chaining Checklist

```js
promise
    .then(value => {
        return nextValue;
    })
    .then(nextValue => {
        return anotherValue;
    })
    .then(anotherValue => {
        console.log(anotherValue);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Done");
    });
```

Remember:

```text
return → next .then()
throw  → catch()
finally → always runs
```

---

# 76. Final Cheat Sheet

```text
new Promise()
→ create a Promise

resolve(value)
→ fulfill Promise

reject(error)
→ reject Promise

.then()
→ handle fulfillment

.catch()
→ handle rejection

.finally()
→ run after settlement

return value
→ send value to next .then()

no return
→ sends undefined

throw error
→ reject the chain

Promise.resolve()
→ create/adopt fulfilled Promise

Promise.reject()
→ create rejected Promise

Promise.all()
→ all must fulfill

Promise.allSettled()
→ wait for every result

Promise.race()
→ first settlement wins

Promise.any()
→ first fulfillment wins

async
→ function always returns Promise

await
→ wait for Promise inside async function

setTimeout()
→ schedules callback; does not pause current code

Promise callbacks
→ microtasks

First resolve/reject
→ wins permanently
```

---

# 77. Practice Order

Learn and practice in this order:

```text
1. new Promise()
2. resolve()
3. reject()
4. .then()
5. .catch()
6. .finally()
7. resolve(value)
8. objects/arrays as values
9. return from .then()
10. chaining
11. forgetting return
12. throw
13. catch recovery
14. setTimeout + Promise
15. pending state
16. first settlement wins
17. multiple consumers
18. Promise.resolve()
19. Promise.reject()
20. Promise.all()
21. Promise.allSettled()
22. Promise.race()
23. Promise.any()
24. async
25. await
26. try/catch
27. sequential await
28. parallel Promise.all()
29. fetch()
30. real API workflows
```

# 78. Most Important 10 Rules

```text
1. Promise starts pending.

2. resolve() → fulfilled.

3. reject() → rejected.

4. A Promise settles only once.

5. First resolve/reject wins.

6. return from .then() goes to next .then().

7. No return means undefined.

8. throw causes rejection.

9. finally() runs after success or failure.

10. async functions always return Promises.
```
