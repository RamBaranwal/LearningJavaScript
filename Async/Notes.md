# Synchronous and Asynchronous Programming

Both **synchronous** and **asynchronous** programming are used according to the requirements of the application.

## 1. Synchronous

**Synchronous code** executes tasks one after another. The program **waits for the current operation to finish before moving to the next operation**.

In simple words:

> **"Do this task first. Wait until it is completed. Then move to the next task."**

### Example

```javascript
console.log("Start");

let result = someOperation(); // Program waits here

console.log(result);

console.log("End");
```

If `someOperation()` takes time, the code after it waits until the operation is completed.

### When to use it?

Synchronous execution is useful when the **result of one operation is required before continuing**.

For example:

```text
Read data
    ↓
Process data
    ↓
Store data in database
    ↓
Continue
```

---

# 2. Asynchronous

**Asynchronous code** allows the program to start a time-consuming operation and **continue executing other code without blocking while waiting for that operation to finish**.

In simple words:

> **"Start this task. Don't block here. Continue doing other work, and handle the result when the task finishes."**

Asynchronous programming is commonly useful for:

* Reading/writing files
* API requests
* Database operations
* Network requests
* Timers
* Other I/O operations

### Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Async operation completed");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Async operation completed
```

The program does not wait at `setTimeout()`. It continues executing and handles the result later.

---

# 3. `async` and `await`

`async` and `await` are commonly used to work with **Promises** and make asynchronous code easier to read.

## `async`

The `async` keyword is placed before a function.

```javascript
async function getData() {
    // asynchronous code
}
```

An `async` function **always returns a Promise**.

```javascript
async function getData() {
    return "Hello";
}
```

Conceptually:

```text
getData()
   ↓
Promise
   ↓
"Hello"
```

---

## `await`

The `await` keyword is used inside an `async` function to wait for a Promise to settle.

```javascript
async function getData() {
    const result = await fetchData();

    console.log(result);
}
```

Here:

```text
fetchData()
     ↓
  Promise
     ↓
   await
     ↓
result available
     ↓
continue execution
```

### Important clarification

`await` **does not mean that the entire application is synchronously blocked**.

It means:

> **Pause this particular async function until the Promise settles, while the runtime can continue doing other work.**

This is an important difference between `await` and traditional synchronous blocking.

---

# 4. Example of `async` + `await`

```javascript
async function getUser() {

    console.log("Getting user...");

    const user = await fetchUser();

    console.log("User received:", user);
}

getUser();

console.log("Other work...");
```

Conceptually:

```text
getUser()
   ↓
fetchUser() starts
   ↓
await
   ↓
getUser() pauses
   ↓
Other work can continue
   ↓
fetchUser() finishes
   ↓
getUser() resumes
   ↓
User received
```

So `await` gives us code that **looks synchronous**, while still using asynchronous operations.

---

# 5. Handling Errors with `try...catch`

When using `async`/`await`, errors can be handled using `try...catch`.

```javascript
async function getUser() {

    try {

        const user = await fetchUser();

        console.log("User:", user);

    } catch (error) {

        console.log("Failed to get user:", error);

    }
}
```

The flow is:

```text
fetchUser()
     ↓
   await
     ↓
 ┌───┴────┐
 ↓        ↓
Success   Error
 ↓        ↓
Continue  catch
```

This is useful because we don't simply assume that an asynchronous operation succeeded.

---

# 6. Reading Data and Storing It in a Database

Consider this requirement:

```text
Read data
    ↓
Process data
    ↓
Store data in database
```

The database operation is important because we need to know whether the data was actually stored successfully.

We can use `async`/`await`:

```javascript
async function processData() {

    try {

        const data = await readFile();

        const processedData = process(data);

        await saveToDatabase(processedData);

        console.log("Data stored successfully");

    } catch (error) {

        console.log("Operation failed:", error);

    }
}
```

The important part is:

```javascript
await saveToDatabase(processedData);
```

We **do not say "Data stored successfully" immediately after starting the operation**.

Instead:

```text
saveToDatabase()
       ↓
     await
       ↓
 ┌─────┴─────┐
 ↓           ↓
Success      Error
 ↓           ↓
Continue     catch
 ↓
"Data stored successfully"
```

This prevents us from incorrectly reporting success before the database operation has actually completed.

---

# 7. Why Not Just Start Everything Asynchronously?

Suppose we do this:

```javascript
saveToDatabase(data);

console.log("Data stored successfully");
```

This is potentially wrong.

The database operation may still be running when we print:

```text
Data stored successfully
```

The actual result could later be:

```text
Database connection failed
```

So we incorrectly told the user that the operation succeeded.

Instead:

```javascript
await saveToDatabase(data);

console.log("Data stored successfully");
```

Now the success message happens **only after the Promise resolves successfully**.

---

# 8. When Should We Use `await`?

Use `await` when the **result or completion of the operation matters before this particular function can continue**.

For example:

```javascript
const data = await readData();

process(data);

await saveToDatabase(data);

console.log("Completed");
```

Here we need:

1. The data before processing it.
2. The processing before saving it.
3. Confirmation that saving succeeded before reporting completion.

---

# 9. When We Don't Need to Wait

Sometimes an operation is not important to the immediate flow.

For example:

```text
User performs an action
       ↓
Main operation completed
       ↓
Send analytics/logging
       ↓
User doesn't need to wait
```

In such cases, it may make sense to perform the secondary operation asynchronously without making the user wait for it.

For example:

```javascript
async function handleRequest() {

    const result = await importantOperation();

    // Secondary/background operation
    saveLog(result);

    return result;
}
```

However, this should only be done when it is acceptable if the secondary operation completes later or fails independently.

---

# 10. Synchronous vs Asynchronous vs `async/await`

| Concept           | Meaning                                                        |
| ----------------- | -------------------------------------------------------------- |
| **Synchronous**   | Wait for the current operation before continuing               |
| **Asynchronous**  | Start an operation without blocking the overall flow           |
| **`async`**       | Marks a function as asynchronous and makes it return a Promise |
| **`await`**       | Waits for a Promise to settle inside an async function         |
| **`try...catch`** | Handles errors from awaited asynchronous operations            |

---

# 11. Simple Way to Remember

### Synchronous

```text
TASK 1
  ↓
WAIT
  ↓
TASK 2
  ↓
WAIT
  ↓
TASK 3
```

### Asynchronous

```text
TASK 1 → Start
          ↓
       Continue
          ↓
       TASK 2
          ↓
TASK 1 finishes
          ↓
   Handle the result
```

### `async` + `await`

```text
async function
      ↓
Start asynchronous operation
      ↓
    await
      ↓
This async function pauses
      ↓
Other work can continue
      ↓
Promise settles
      ↓
Async function resumes
      ↓
Continue
```

## Final Concept

**Synchronous:**

> "I need this operation to finish before I continue."

**Asynchronous:**

> "Start this operation. Don't block the overall flow while it runs."

**`async`/`await`:**

> "This function is asynchronous. I want to wait for this Promise's result before continuing this function, without blocking the whole runtime."

The key point is:

> **Asynchronous does not mean "don't wait for the result." It means "don't unnecessarily block while waiting."**

And `async`/`await` gives us a clean way to control **exactly where the result is required**.
