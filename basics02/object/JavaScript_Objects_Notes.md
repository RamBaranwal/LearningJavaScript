# JavaScript Objects — Notes

## 1. Creating an Object

### Constructor Syntax

```js
const user = new Object();
```

This creates an empty object using the `Object` constructor.

### Object Literal Syntax

```js
const user2 = {};
```

This is the simpler and more commonly used way.

You can add properties:

```js
user2.id = "123abc";
user2.name = "Rohit";
user2.phone = 1234556772;
user2.isLoggedin = false;
```

Result:

```js
{
    id: "123abc",
    name: "Rohit",
    phone: 1234556772,
    isLoggedin: false
}
```

---

## 2. Nested Objects

An object can contain another object.

```js
const regularUser = {
    id: "123abc",

    fullname: {
        userfullname: {
            firstname: "Rohit",
            lastname: "Singh"
        },

        clientname: {
            firstname: "Raman",
            lastname: "Kohli"
        }
    },

    email: "admin@.com",
    password: "asn123"
};
```

### Accessing Nested Properties

```js
console.log(regularUser.fullname.clientname.lastname);
```

Output:

```text
Kohli
```

The path is:

```text
regularUser
    ↓
fullname
    ↓
clientname
    ↓
lastname
```

---

## 3. Combining Objects

Suppose we have:

```js
const obj1 = {
    1: "a",
    2: "b"
};

const obj21 = {
    1: "a",
    2: "b"
};
```

We can create another object:

```js
const obj3 = {
    obj1,
    obj21
};
```

This does **not merge** the objects.

It creates an object containing two properties:

```js
{
    obj1: {
        1: "a",
        2: "b"
    },

    obj21: {
        1: "a",
        2: "b"
    }
}
```

---

## 4. `Object.assign()`

### Syntax

```js
Object.assign(target, source);
```

It copies properties from the **source** object into the **target** object.

Example:

```js
const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "b"
};

Object.assign(obj1, obj2);
```

Result:

```js
{
    1: "a",
    2: "b",
    3: "c",
    4: "b"
}
```

---

## 5. Important: `Object.assign()` Modifies the Target

This is very important.

```js
Object.assign(obj1, obj2);
```

Here:

```text
obj1 → target
obj2 → source
```

So `obj1` itself gets modified.

Before:

```js
obj1 = {
    1: "a",
    2: "b"
};
```

After:

```js
Object.assign(obj1, obj2);
```

`obj1` becomes:

```js
{
    1: "a",
    2: "b",
    3: "c",
    4: "b"
}
```

---

## 6. Using `{}` as Target

A safer/common approach is:

```js
Object.assign({}, obj1, obj2);
```

Here:

```text
{}   → target (new empty object)
obj1 → source
obj2 → source
```

The `{}` is a **new empty object**.

Therefore, `obj1` and `obj2` are not modified.

Example:

```js
const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "b"
};

const result = Object.assign({}, obj1, obj2);
```

Result:

```js
{
    1: "a",
    2: "b",
    3: "c",
    4: "b"
}
```

But `obj1` remains:

```js
{
    1: "a",
    2: "b"
}
```

---

## 7. Multiple Sources

You can provide multiple source objects:

```js
Object.assign({}, obj1, obj2, obj3);
```

JavaScript processes them **from left to right**.

```text
{}
 ↓
obj1
 ↓
obj2
 ↓
obj3
 ↓
final object
```

---

## 8. If Same Key Exists

If multiple objects have the same key, the **later object wins**.

Example:

```js
const obj1 = {
    1: "a",
    2: "b"
};

const obj22 = {
    1: "c",
    2: "b"
};

Object.assign({}, obj1, obj22);
```

Result:

```js
{
    1: "c",
    2: "b"
}
```

Why?

First:

```js
{
    1: "a",
    2: "b"
}
```

Then `obj22` is copied:

```js
{
    1: "c",
    2: "b"
}
```

So:

```text
obj1:  1 → "a"
obj22: 1 → "c"
             ↑
        later value wins
```

---

## 9. Understanding the Complete Example

### First

```js
const obj1 = {
    1: "a",
    2: "b"
};

const obj21 = {
    1: "a",
    2: "b"
};

Object.assign({}, obj1, obj21);
```

Result:

```js
{
    1: "a",
    2: "b"
}
```

---

### Second

```js
const obj22 = {
    1: "c",
    2: "b"
};

Object.assign({}, obj1, obj22);
```

Result:

```js
{
    1: "c",
    2: "b"
}
```

Because `obj22` comes after `obj1`.

---

### Third

```js
const obj23 = {
    3: "c",
    4: "b"
};

Object.assign({}, obj1, obj23);
```

Result:

```js
{
    1: "a",
    2: "b",
    3: "c",
    4: "b"
}
```

---

### Fourth

```js
const obj24 = {
    3: "a",
    4: "b"
};

Object.assign({}, obj1, obj24);
```

Result:

```js
{
    1: "a",
    2: "b",
    3: "a",
    4: "b"
}
```

---

### Fifth

```js
const obj25 = {
    1: "a",
    3: "b"
};

Object.assign({}, obj1, obj25);
```

Result:

```js
{
    1: "a",
    2: "b",
    3: "b"
}
```

Notice there is **no `4`**.

Why?

Because:

```js
obj1 = {
    1: "a",
    2: "b"
};
```

and:

```js
obj25 = {
    1: "a",
    3: "b"
};
```

Neither object contains property `4`.

---

## 10. Why Did `4: "b"` Appear in the Previous Code?

Previously:

```js
Object.assign(obj1, obj23);
```

This modified `obj1`.

So `obj1` became:

```js
{
    1: "a",
    2: "b",
    3: "c",
    4: "b"
}
```

Later:

```js
Object.assign(obj1, obj25);
```

`obj25` only changes properties `1` and `3`.

It does **not delete** property `4`.

Therefore:

```js
{
    1: "a",
    2: "b",
    3: "b",
    4: "b"
}
```

---

# 11. Key Rule to Remember ⭐

```js
Object.assign({}, obj1, obj2, obj3);
```

means:

> Create a new object → copy `obj1` → copy `obj2` → copy `obj3`.

### Same key?

**The last object's value wins.**

Example:

```js
const a = {
    x: 10
};

const b = {
    x: 20
};

const result = Object.assign({}, a, b);

console.log(result);
```

Result:

```js
{
    x: 20
}
```

Because `b` comes after `a`.

---

# 12. Mental Model

Remember:

```text
Object.assign({}, A, B, C)

        ↓

      {}
      ↓
   copy A
      ↓
   copy B
      ↓
   copy C
      ↓
 final object
```

And:

```text
Same property?
       ↓
Later object wins
```

---

# 13. Most Important Difference

### Modifies `obj1`

```js
Object.assign(obj1, obj2);
```

```text
obj1 = target
obj2 = source

→ obj1 changes
```

### Does NOT modify `obj1`

```js
Object.assign({}, obj1, obj2);
```

```text
{}   = new target
obj1 = source
obj2 = source

→ new object is created
→ obj1 stays unchanged
```

---

# Quick Revision

| Concept | Meaning |
|---|---|
| `new Object()` | Creates an object using constructor |
| `{}` | Object literal |
| Nested object | Object inside another object |
| `Object.assign(target, source)` | Copies source into target |
| `{}` in `Object.assign()` | Creates a new target object |
| Multiple sources | Copied left to right |
| Same key | Later value overwrites earlier value |
| Missing key in source | Existing target property is not deleted |
| `Object.assign(obj1, obj2)` | Modifies `obj1` |
| `Object.assign({}, obj1, obj2)` | Creates a new object |

## ⭐ One-line rule

**`Object.assign()` copies properties; it does not delete existing properties, and when the same key exists, the later source wins.**
