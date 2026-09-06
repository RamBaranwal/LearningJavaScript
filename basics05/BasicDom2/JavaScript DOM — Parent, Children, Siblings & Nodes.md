# JavaScript DOM — Parent, Children, Siblings & Nodes

> **Topic:** DOM (Document Object Model)  
> **File:** `dom-parent-child-notes.md`  
> **Purpose:** Revision notes for understanding DOM relationships, `children`, `childNodes`, siblings, and parent elements.

---

# 1. What is DOM?

**DOM = Document Object Model**

When a browser loads an HTML page, it converts the HTML document into a **tree-like structure** of objects called the DOM.

For example:

```html
<body>
    <div class="parent">
        <p>This is just for experiment line</p>
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
    </div>
</body>
```

The browser represents it approximately like this:

```text
Document
└── html
    └── body
        └── div.parent
            ├── p
            │   └── "This is just for experiment line"
            │
            ├── div.day
            │   └── "Monday"
            │
            └── div.day
                └── "Tuesday"
```

JavaScript allows us to access and modify these DOM objects.

---

# 2. Complete HTML Used for Practice

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM (Document Object Model)</title>
</head>

<body style="background: black; color: white">

    <div class="parent">

        <p>this is just for experiment line</p>

        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
        <div class="day">Friday</div>
        <div class="day">Saturday</div>
        <div class="day">Sunday</div>

    </div>

</body>
</html>
```

The important part for this lesson is:

```html
<div class="parent">

    <p>this is just for experiment line</p>

    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
    <div class="day">Friday</div>
    <div class="day">Saturday</div>
    <div class="day">Sunday</div>

</div>
```

---

# 3. Selecting an Element with `querySelector()`

## Code

```javascript
const parentEle = document.querySelector('.parent');
```

## What does it do?

```javascript
document
```

represents the entire HTML document.

```javascript
.querySelector()
```

finds the **first element** matching the CSS selector provided.

```javascript
'.parent'
```

means:

> Find the first element having `class="parent"`.

Therefore:

```javascript
const parentEle = document.querySelector('.parent');
```

stores this element:

```html
<div class="parent">
    ...
</div>
```

inside the variable:

```javascript
parentEle
```

---

## Output

```javascript
console.log(parentEle);
```

Output:

```text
<div class="parent">
    ...
</div>
```

In Chrome DevTools it may appear as:

```text
<div class="parent">...</div>
```

---

# 4. `children`

## Code

```javascript
console.log(parentEle.children);
```

`children` gives us the **element children** of an element.

Our HTML is:

```html
<div class="parent">

    <p>this is just for experiment line</p>

    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
    <div class="day">Friday</div>
    <div class="day">Saturday</div>
    <div class="day">Sunday</div>

</div>
```

The direct element children are:

```text
p
div.day
div.day
div.day
div.day
div.day
div.day
div.day
```

Therefore:

```javascript
parentEle.children
```

returns an:

```text
HTMLCollection
```

---

## Output

```text
HTMLCollection(8)
[
    p,
    div.day,
    div.day,
    div.day,
    div.day,
    div.day,
    div.day,
    div.day
]
```

There are **8 element children**:

```text
0 → <p>
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
7 → Sunday
```

---

# 5. Accessing a Child Using Index

## Code

```javascript
console.log(parentEle.children[1]);
```

Remember:

> Array indexes start from `0`.

So:

```text
Index    Element
-------------------------
0        <p>
1        Monday
2        Tuesday
3        Wednesday
4        Thursday
5        Friday
6        Saturday
7        Sunday
```

Therefore:

```javascript
parentEle.children[1]
```

means:

> Give me the second element child of `.parent`.

---

## Output

```html
<div class="day">Monday</div>
```

---

# 6. Important: `children[0]` is `<p>`

Because we added:

```html
<p>this is just for experiment line</p>
```

before Monday:

```javascript
parentEle.children[0]
```

returns:

```html
<p>this is just for experiment line</p>
```

And:

```javascript
parentEle.children[1]
```

returns:

```html
<div class="day">Monday</div>
```

This is important when counting indexes.

---

# 7. Loop Through All Children

## Code

```javascript
for(let i = 0; i < parentEle.children.length; i++){
    console.log(parentEle.children[i]);
}
```

Let's break it down.

---

## Step 1 — Create counter

```javascript
let i = 0;
```

Start from index `0`.

---

## Step 2 — Condition

```javascript
i < parentEle.children.length
```

`parentEle.children.length` is:

```text
8
```

So the loop runs while:

```text
i < 8
```

Therefore:

```text
0
1
2
3
4
5
6
7
```

---

## Step 3 — Increment

```javascript
i++
```

After every iteration:

```text
i = i + 1
```

---

## Step 4 — Access child

```javascript
parentEle.children[i]
```

gets the child at the current index.

---

## Output

```text
<p>this is just for experiment line</p>

<div class="day">Monday</div>

<div class="day">Tuesday</div>

<div class="day">Wednesday</div>

<div class="day">Thursday</div>

<div class="day">Friday</div>

<div class="day">Saturday</div>

<div class="day">Sunday</div>
```

---

# 8. `Array.from()`

`children` returns an:

```text
HTMLCollection
```

It is **not a normal JavaScript Array**.

Sometimes you may want to convert it into an array.

Use:

```javascript
Array.from(parentEle.children)
```

Now you can use normal array methods such as:

```javascript
forEach()
map()
filter()
```

---

## Example

```javascript
Array.from(parentEle.children).forEach(function(day){
    console.log(day);
});
```

Output:

```text
<p>this is just for experiment line</p>
<div class="day">Monday</div>
<div class="day">Tuesday</div>
<div class="day">Wednesday</div>
<div class="day">Thursday</div>
<div class="day">Friday</div>
<div class="day">Saturday</div>
<div class="day">Sunday</div>
```

### Arrow function version

You can also write:

```javascript
Array.from(parentEle.children).forEach((day) => {
    console.log(day);
});
```

---

# 9. `firstElementChild`

## Code

```javascript
console.log(parentEle.firstElementChild);
```

This returns the **first element child**.

Our first element child is:

```html
<p>this is just for experiment line</p>
```

---

## Output

```html
<p>this is just for experiment line</p>
```

---

# 10. `lastElementChild`

## Code

```javascript
console.log(parentEle.lastElementChild);
```

This returns the **last element child**.

Our last child is:

```html
<div class="day">Sunday</div>
```

---

## Output

```html
<div class="day">Sunday</div>
```

---

# 11. Changing CSS Using DOM

## Code

```javascript
parentEle.children[2].style.color = "orange";
```

Let's break this down:

```javascript
parentEle
```

gets:

```html
<div class="parent">
```

Then:

```javascript
.children
```

gets its element children.

Then:

```javascript
[2]
```

gets:

```html
<div class="day">Tuesday</div>
```

Then:

```javascript
.style.color
```

accesses the CSS `color` property.

Finally:

```javascript
= "orange";
```

changes the text color.

---

## Result

Before:

```text
Tuesday
```

After:

```text
Tuesday
```

but the text appears **orange** in the browser.

---

# 12. `querySelector('.day')`

## Code

```javascript
const firstIndexChild = document.querySelector('.day');
```

Important:

`querySelector()` returns only the **first matching element**.

There are seven elements with:

```html
class="day"
```

But:

```javascript
document.querySelector('.day')
```

returns only:

```html
<div class="day">Monday</div>
```

---

## Output

```html
<div class="day">Monday</div>
```

---

# 13. `parentElement`

## Code

```javascript
console.log(firstIndexChild.parentElement);
```

`firstIndexChild` is:

```html
<div class="day">Monday</div>
```

Its parent is:

```html
<div class="parent">
```

Therefore:

```javascript
firstIndexChild.parentElement
```

returns:

```html
<div class="parent">
    ...
</div>
```

---

## Output

```html
<div class="parent">
    ...
</div>
```

---

# 14. `nextElementSibling`

## Code

```javascript
console.log(firstIndexChild.nextElementSibling);
```

Current element:

```html
<div class="day">Monday</div>
```

The next element is:

```html
<div class="day">Tuesday</div>
```

Therefore:

```javascript
firstIndexChild.nextElementSibling
```

returns Tuesday.

---

## Output

```html
<div class="day">Tuesday</div>
```

---

# 15. `previousElementSibling`

## Code

```javascript
console.log(firstIndexChild.previousElementSibling);
```

Current element:

```html
<div class="day">Monday</div>
```

Before Monday there is:

```html
<p>this is just for experiment line</p>
```

Therefore:

```javascript
firstIndexChild.previousElementSibling
```

returns the `<p>` element.

---

## Output

```html
<p>this is just for experiment line</p>
```

---

# 16. Important Difference: Element vs Node

This is one of the **most important concepts** in DOM.

There are different types of DOM nodes.

For example:

```html
<div class="parent">

    <p>Hello</p>

    <div>Monday</div>

</div>
```

The spaces and line breaks between elements are also represented by the DOM as **text nodes**.

For example:

```text
<div>
    
    <p>Hello</p>
    
</div>
```

The whitespace/newline between tags can become a text node.

---

# 17. `childNodes`

## Code

```javascript
console.log("Nodes: ", parentEle.childNodes);
```

Unlike:

```javascript
parentEle.children
```

which gives only **elements**,

```javascript
parentEle.childNodes
```

gives **all child nodes**.

That includes:

- Element nodes
- Text nodes
- Comment nodes
- Other node types

---

# 18. Why Do We Get `text` in `childNodes`?

Consider:

```html
<div class="parent">

    <p>Hello</p>

    <div>Monday</div>

</div>
```

There is whitespace between the elements.

The browser can represent that whitespace as a **text node**.

So the DOM can look like:

```text
parent
│
├── text
├── p
├── text
├── div
├── text
└── div
```

Therefore:

```javascript
parentEle.childNodes
```

contains both:

```text
text
```

and:

```text
elements
```

---

# 19. `children` vs `childNodes`

This is extremely important for revision.

| Property | Returns | Includes Text Nodes? |
|---|---|---|
| `children` | HTMLCollection | ❌ No |
| `childNodes` | NodeList | ✅ Yes |
| `firstElementChild` | First element | ❌ No |
| `lastElementChild` | Last element | ❌ No |
| `nextElementSibling` | Next element | ❌ No |
| `previousElementSibling` | Previous element | ❌ No |

### Simple rule

Remember:

```text
children → only elements
childNodes → all nodes
```

---

# 20. Understanding the `15` Nodes

For the original HTML:

```html
<div class="parent">

    <p>this is just for experiment line</p>

    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
    <div class="day">Friday</div>
    <div class="day">Saturday</div>
    <div class="day">Sunday</div>

</div>
```

There are:

```text
8 element nodes
```

and approximately:

```text
7 whitespace text nodes
```

Therefore:

```text
8 + 7 = 15
```

So Chrome can show:

```text
NodeList(15)
```

---

# 21. Visualizing `childNodes`

You can think of it like this:

```text
Index    Node
-------------------------------
0        text
1        <p>
2        text
3        Monday
4        text
5        Tuesday
6        text
7        Wednesday
8        text
9        Thursday
10       text
11       Friday
12       text
13       Saturday
14       text
15       Sunday
16       text
```

> The exact count depends on the whitespace/newlines in your HTML source.

The important point is:

```text
childNodes includes whitespace text nodes.
```

---

# 22. Adding Another `<p>`

Suppose we change the HTML to:

```html
<div class="parent">

    <p>First paragraph</p>

    <p>Second paragraph</p>

    <div class="day">Monday</div>

    ...
</div>
```

Now the DOM contains another element and additional whitespace.

Therefore `childNodes.length` can increase.

For example:

```text
NodeList(17)
```

may appear.

The important concept is **not memorizing 15 or 17**.

Instead remember:

```text
More elements
+
More whitespace/text nodes
=
More childNodes
```

---

# 23. Why `children.length` and `childNodes.length` Differ

Example:

```javascript
console.log(parentEle.children.length);
```

might return:

```text
8
```

while:

```javascript
console.log(parentEle.childNodes.length);
```

might return:

```text
15
```

Why?

Because:

```text
children
    ↓
only HTML elements
```

while:

```text
childNodes
    ↓
elements + text nodes + comments + ...
```

---

# 24. Sibling Relationship

Consider:

```html
<div class="day">Monday</div>
<div class="day">Tuesday</div>
<div class="day">Wednesday</div>
```

The relationship is:

```text
Monday
   ↓ nextElementSibling
Tuesday
   ↓ nextElementSibling
Wednesday
```

And in reverse:

```text
Wednesday
   ↓ previousElementSibling
Tuesday
   ↓ previousElementSibling
Monday
```

---

# 25. Parent-Child Relationship

For:

```html
<div class="parent">
    <div class="day">Monday</div>
</div>
```

The relationship is:

```text
        parent
          │
          │
       Monday
```

JavaScript:

```javascript
monday.parentElement
```

returns:

```html
<div class="parent">
```

---

# 26. Complete Practice Code

Here is a clean version of the JavaScript used in this lesson:

```javascript
const parentEle = document.querySelector('.parent');

console.log("Parent:", parentEle);

console.log("Children:", parentEle.children);

console.log("Second child:", parentEle.children[1]);

// Loop through children
for(let i = 0; i < parentEle.children.length; i++){
    console.log(parentEle.children[i]);
}

// First and last element
console.log("First child:", parentEle.firstElementChild);
console.log("Last child:", parentEle.lastElementChild);

// Change Tuesday color
parentEle.children[2].style.color = "orange";

// Select first .day
const firstIndexChild = document.querySelector('.day');

console.log("First day:", firstIndexChild);

// Parent
console.log("Parent:", firstIndexChild.parentElement);

// Next sibling
console.log("Next:", firstIndexChild.nextElementSibling);

// Previous sibling
console.log("Previous:", firstIndexChild.previousElementSibling);

// All child nodes
console.log("Nodes:", parentEle.childNodes);
```

---

# 27. Quick DOM Relationship Diagram

```text
                    document
                       │
                       ▼
                 .parent element
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
       <p>          Monday         Tuesday
                      │              │
                      │              │
                      ▼              ▼
              nextElementSibling
                      │
                      ▼
                   Tuesday
```

---

# 28. Most Important DOM Properties

## Selecting

```javascript
document.querySelector('.parent');
```

Selects the first matching element.

---

## Children

```javascript
element.children
```

Returns only element children.

---

## Child Nodes

```javascript
element.childNodes
```

Returns all child nodes, including text nodes.

---

## First Element

```javascript
element.firstElementChild
```

Returns the first element child.

---

## Last Element

```javascript
element.lastElementChild
```

Returns the last element child.

---

## Parent

```javascript
element.parentElement
```

Returns the parent element.

---

## Next Sibling

```javascript
element.nextElementSibling
```

Returns the next sibling element.

---

## Previous Sibling

```javascript
element.previousElementSibling
```

Returns the previous sibling element.

---

# 29. Revision Cheat Sheet

```text
document
    ↓
querySelector()
    ↓
select element
```

```text
element
    │
    ├── children
    │      └── only element children
    │
    ├── childNodes
    │      └── all child nodes
    │
    ├── firstElementChild
    │      └── first element
    │
    ├── lastElementChild
    │      └── last element
    │
    ├── parentElement
    │      └── parent
    │
    ├── nextElementSibling
    │      └── next element
    │
    └── previousElementSibling
           └── previous element
```

---

# 30. One-Line Memory Trick

### `children`

> **Only HTML elements**

### `childNodes`

> **Everything that is a node, including whitespace text**

### `parentElement`

> **Go UP**

### `children`

> **Go DOWN**

### `nextElementSibling`

> **Go RIGHT / NEXT**

### `previousElementSibling`

> **Go LEFT / PREVIOUS**

---

# 31. Expected Console Output Summary

```text
parentEle
↓
<div class="parent">...</div>
```

```text
parentEle.children
↓
HTMLCollection(8)
```

```text
parentEle.children[1]
↓
<div class="day">Monday</div>
```

```text
parentEle.firstElementChild
↓
<p>this is just for experiment line</p>
```

```text
parentEle.lastElementChild
↓
<div class="day">Sunday</div>
```

```text
document.querySelector('.day')
↓
<div class="day">Monday</div>
```

```text
firstIndexChild.parentElement
↓
<div class="parent">...</div>
```

```text
firstIndexChild.nextElementSibling
↓
<div class="day">Tuesday</div>
```

```text
firstIndexChild.previousElementSibling
↓
<p>this is just for experiment line</p>
```

```text
parentEle.childNodes
↓
NodeList(...)
```

---

# 32. Important Interview Questions

### Q1. What is the difference between `children` and `childNodes`?

**Answer:**

`children` returns only element nodes, while `childNodes` returns all child nodes, including text nodes and comments.

---

### Q2. Why does `childNodes` contain `text`?

**Answer:**

Whitespace and line breaks between HTML elements can be represented as text nodes in the DOM.

---

### Q3. What does `querySelector()` return?

It returns the **first element** matching the CSS selector.

```javascript
document.querySelector('.day');
```

returns the first `.day` element.

---

### Q4. How do you get the next element?

```javascript
element.nextElementSibling;
```

---

### Q5. How do you get the parent element?

```javascript
element.parentElement;
```

---

### Q6. How do you get the first child element?

```javascript
element.firstElementChild;
```

---

### Q7. How do you get the last child element?

```javascript
element.lastElementChild;
```

---

# 33. Practice Yourself

Try these without looking at the answers.

### Practice 1

Print Wednesday.

```javascript
// Your code
```

Expected:

```html
<div class="day">Wednesday</div>
```

---

### Practice 2

Print Sunday using `lastElementChild`.

```javascript
// Your code
```

---

### Practice 3

Print Monday's parent.

```javascript
// Your code
```

---

### Practice 4

Print Tuesday using Monday's `nextElementSibling`.

```javascript
// Your code
```

---

### Practice 5

Print Monday using Tuesday's `previousElementSibling`.

```javascript
// Your code
```

---

### Practice 6

Change Friday's text color to blue.

```javascript
// Your code
```

---

### Practice 7

Print every `.day` element using a loop.

```javascript
// Your code
```

---

# 34. Final Mental Model

When working with DOM, always ask:

```text
Where am I?
    ↓
What is my parent?
    ↓
What are my children?
    ↓
What is before me?
    ↓
What is after me?
```

For example:

```text
                 parent
                    ↑
                    │
                  Monday
                 ↙      ↘
          previous       next
             ↓             ↓
             p           Tuesday
```

Once you understand this **DOM tree relationship**, most DOM traversal methods become much easier.

---

# 35. GitHub Revision Checklist

Before moving to the next DOM topic, make sure you can explain these without notes:

- [ ] What is DOM?
- [ ] What does `document` represent?
- [ ] What does `querySelector()` do?
- [ ] What does `.children` return?
- [ ] Why does `.children[0]` start from zero?
- [ ] What is `HTMLCollection`?
- [ ] How to loop through `children`?
- [ ] Why use `Array.from()`?
- [ ] What does `firstElementChild` do?
- [ ] What does `lastElementChild` do?
- [ ] How to change CSS using `.style`?
- [ ] What does `parentElement` do?
- [ ] What does `nextElementSibling` do?
- [ ] What does `previousElementSibling` do?
- [ ] What is a DOM node?
- [ ] What does `childNodes` return?
- [ ] Why does `childNodes` contain `text`?
- [ ] Difference between `children` and `childNodes`

---

# Quick Revision

```javascript
const parent = document.querySelector('.parent');

// Children
parent.children;

// Child by index
parent.children[1];

// Number of children
parent.children.length;

// First child
parent.firstElementChild;

// Last child
parent.lastElementChild;

// Parent
element.parentElement;

// Next sibling
element.nextElementSibling;

// Previous sibling
element.previousElementSibling;

// All nodes
parent.childNodes;

// Convert HTMLCollection to Array
Array.from(parent.children);
```

### Remember this:

```text
children       → elements only
childNodes     → all nodes

parentElement  → UP
children       → DOWN
nextSibling    → NEXT
previousSibling → PREVIOUS
```