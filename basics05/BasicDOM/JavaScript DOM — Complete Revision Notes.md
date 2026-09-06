# JavaScript DOM — Complete Revision Notes

> **DOM = Document Object Model**
>
> The DOM allows JavaScript to access, read, modify, create, and delete elements of an HTML webpage.

---

# 1. Accessing the Webpage Through `document`

When we work with the webpage using JavaScript, we generally start with the **`document` object**.

```javascript
document
```

The `document` represents the current HTML webpage.

For example:

```javascript
document.getElementById('title')
```

This searches the webpage for an element whose `id` is `title`.

---

# 2. `getElementById()`

Used to select an element using its `id`.

Suppose HTML is:

```html
<h1 id="title" class="heading">
    DOM (Document Object Model) learning with Chai with Code
</h1>
```

We can access it using:

```javascript
document.getElementById('title')
```

It returns the element:

```html
<h1 id="title" class="heading">...</h1>
```

---

## Accessing `id`

```javascript
document.getElementById('title').id
```

Output:

```text
"title"
```

It returns the `id` of the element.

---

## Accessing `class`

```javascript
document.getElementById('title').className
```

Output:

```text
"heading"
```

`className` returns the class assigned to the element.

---

# 3. `getAttribute()`

`getAttribute()` is used to **read the value of an HTML attribute**.

Syntax:

```javascript
element.getAttribute("attributeName")
```

Example:

```javascript
const title = document.getElementById('title');

title.getAttribute('id');
```

Output:

```text
"title"
```

Another example:

```javascript
title.getAttribute('class');
```

Output:

```text
"heading"
```

You can use it for attributes such as:

```javascript
title.getAttribute('id');
title.getAttribute('class');
title.getAttribute('style');
title.getAttribute('title');
```

---

# 4. `setAttribute()`

`setAttribute()` is used to **add or change an HTML attribute**.

Syntax:

```javascript
element.setAttribute("attributeName", "value")
```

Example:

```javascript
const title = document.getElementById('title');

title.setAttribute('class', 'newHeading');
```

Now the HTML becomes approximately:

```html
<h1 id="title" class="newHeading">
```

---

# 5. Adding a New Attribute

An important point:

**HTML does not require an attribute to already exist before `setAttribute()` is used.**

For example:

```javascript
document.getElementById('title').setAttribute('toggle', 'vimbar');
```

If `toggle` did not exist before, JavaScript adds it.

Before:

```html
<h1 id="title" class="heading">
```

After:

```html
<h1 id="title" class="heading" toggle="vimbar">
```

We can then read it:

```javascript
document.getElementById('title').getAttribute('toggle');
```

Output:

```text
"vimbar"
```

### Important

`setAttribute()` can:

1. Create an attribute if it doesn't exist.
2. Modify an attribute if it already exists.

Example:

```javascript
title.setAttribute('class', 'heading2');
```

If `class` already exists → it changes it.

```javascript
title.setAttribute('toggle', 'vimbar');
```

If `toggle` doesn't exist → it creates it.

---

# 6. `style` Property

We can directly modify the CSS of an element using:

```javascript
element.style
```

Example:

```javascript
const title = document.getElementById('title');

title.style.color = "red";
```

This changes the text color.

---

## Changing Background

```javascript
title.style.background = "green";
```

or:

```javascript
title.style.backgroundColor = "green";
```

---

## Changing Font Size

```javascript
title.style.fontSize = "30px";
```

---

## Changing Margin

```javascript
title.style.margin = "100px";
```

---

## Multiple Styles

```javascript
title.style.color = "red";
title.style.background = "green";
title.style.fontSize = "30px";
title.style.margin = "100px";
```

---

# 7. CSS Property Names in JavaScript

CSS normally uses:

```css
font-size
background-color
margin-top
```

But JavaScript uses **camelCase**:

```javascript
fontSize
backgroundColor
marginTop
```

Examples:

```javascript
element.style.fontSize = "30px";

element.style.backgroundColor = "pink";

element.style.marginTop = "20px";
```

### Remember

```text
CSS                  JavaScript
---------------------------------------
font-size       →    fontSize
background-color →   backgroundColor
margin-top      →    marginTop
padding-left    →    paddingLeft
```

---

# 8. `innerHTML`, `innerText`, and `textContent`

These three properties are very important when working with the content of an element.

Suppose:

```html
<h1 id="title">
    DOM (Document Object Model) learning with Chai with Code
</h1>
```

---

# 9. `innerHTML`

`innerHTML` gives the **HTML inside the element**.

```javascript
title.innerHTML
```

Output:

```text
"DOM (Document Object Model) learning with Chai with Code"
```

If the element contains another HTML tag:

```html
<h1 id="title">
    DOM (Document Object Model) learning with Chai with Code
    <span>this is not good</span>
</h1>
```

Then:

```javascript
title.innerHTML
```

Output:

```text
"DOM (Document Object Model) learning with Chai with Code <span>this is not good</span>"
```

Notice that `<span>` is included.

Therefore:

> `innerHTML` understands and returns HTML markup.

---

# 10. `innerText`

`innerText` returns the **visible text** of an element.

Example:

```javascript
title.innerText
```

Output:

```text
"DOM (Document Object Model) learning with Chai with Code"
```

Suppose:

```html
<h1 id="title">
    DOM (Document Object Model) learning with Chai with Code
    <span>this is not good</span>
</h1>
```

Then:

```javascript
title.innerText
```

Output:

```text
"DOM (Document Object Model) learning with Chai with Code this is not good"
```

---

# 11. `textContent`

`textContent` returns the **text content inside an element**, including text that may not currently be visible.

Example:

```javascript
title.textContent
```

Output:

```text
"DOM (Document Object Model) learning with Chai with Code"
```

---

# 12. Difference Between `innerHTML`, `innerText`, and `textContent`

Remember this table:

| Property | What it returns |
|---|---|
| `innerHTML` | HTML + text |
| `innerText` | Visible text |
| `textContent` | Text content, including hidden text |

---

## Example

HTML:

```html
<h1 id="title">
    DOM (Document Object Model) learning with Chai with Code
    <span style="display: none;">this is not good</span>
</h1>
```

### `innerHTML`

```javascript
title.innerHTML
```

Returns:

```text
"DOM (Document Object Model) learning with Chai with Code <span style="display: none;">this is not good</span>"
```

### `innerText`

```javascript
title.innerText
```

Returns approximately:

```text
"DOM (Document Object Model) learning with Chai with Code"
```

Because the `<span>` is hidden.

### `textContent`

```javascript
title.textContent
```

Returns:

```text
"DOM (Document Object Model) learning with Chai with Code this is not good"
```

Because `textContent` includes the hidden text.

---

# 13. Changing `innerText`

Example:

```javascript
title.innerText =
    "DOM (Document Object Model) learning with Chai with Code this is not good";
```

This changes the visible text.

---

# 14. Changing `textContent`

```javascript
title.textContent =
    "DOM (Document Object Model) learning with Chai with Code this is not good";
```

This changes the text content.

---

# 15. Changing `innerHTML`

We can insert HTML using `innerHTML`.

```javascript
title.innerHTML =
    "DOM (Document Object Model) learning with Chai with Code <span>this is not good</span>";
```

Now `<span>` becomes an actual HTML element.

Important:

```javascript
innerHTML
```

can interpret HTML tags.

For example:

```javascript
title.innerHTML = "<span>Hello</span>";
```

creates a `span` element.

Whereas:

```javascript
title.innerText = "<span>Hello</span>";
```

displays:

```text
<span>Hello</span>
```

as text rather than creating a span.

---

# 16. `querySelector()`

`querySelector()` selects the **first element** that matches a CSS selector.

Syntax:

```javascript
document.querySelector("selector")
```

---

## Selecting by ID

```javascript
document.querySelector('#title')
```

Output:

```html
<h1 id="title" class="heading">...</h1>
```

`#` means ID.

```css
#title
```

means:

> Select the element whose ID is `title`.

---

## Selecting by Class

```javascript
document.querySelector('.heading')
```

Output:

```html
<h1 id="title" class="heading">...</h1>
```

`.` means class.

```css
.heading
```

means:

> Select the element whose class is `heading`.

---

# 17. `querySelector()` with Tags

We can select an HTML tag directly.

```javascript
document.querySelector('input')
```

This returns the **first `<input>` element**.

Example output:

```html
<input type="password" name="pass" id="pass">
```

---

# 18. `querySelector()` with Attribute Selector

CSS attribute selectors can also be used.

```javascript
document.querySelector('input[type="password"]')
```

This selects the first input whose:

```text
type = password
```

Example:

```html
<input type="password" name="pass" id="pass">
```

---

# 19. `querySelector()` Summary

```javascript
document.querySelector('#title')
```

Select by ID.

```javascript
document.querySelector('.heading')
```

Select by class.

```javascript
document.querySelector('h1')
```

Select by tag.

```javascript
document.querySelector('input[type="password"]')
```

Select by attribute.

### Very Important

`querySelector()` returns only the **first matching element**.

---

# 20. `querySelectorAll()`

`querySelectorAll()` selects **all elements** matching a CSS selector.

Example:

```javascript
document.querySelectorAll('h2')
```

Output:

```text
NodeList(15) [
    h2,
    h2,
    h2,
    ...
]
```

Unlike:

```javascript
querySelector()
```

which returns one element, `querySelectorAll()` returns a collection of all matching elements.

---

# 21. Accessing an Element from `querySelectorAll()`

Suppose:

```javascript
document.querySelectorAll('h2')
```

returns:

```text
NodeList(3)
```

We can access individual elements using indexes.

```javascript
document.querySelectorAll('h2')[0]
```

Gets the first `<h2>`.

```javascript
document.querySelectorAll('h2')[2]
```

Gets the third `<h2>`.

Remember:

```text
Index starts from 0
```

Therefore:

```text
[0] → first
[1] → second
[2] → third
```

---

# 22. Example of `querySelectorAll()`

```javascript
document.querySelectorAll('h2')[0]
```

Output:

```html
<h2>This is not a good sign</h2>
```

And:

```javascript
document.querySelectorAll('h2')[2]
```

Output:

```html
<h2>This is not a good villain</h2>
```

---

# 23. `querySelectorAll()` Returns a `NodeList`

Example:

```javascript
const tempLiList = document.querySelectorAll('li');
```

Output:

```text
NodeList(3) [li, li, li]
```

It has:

```text
0: li
1: li
2: li
length: 3
```

It is **not a normal Array**.

---

# 24. NodeList vs Array

A `NodeList` may look similar to an array:

```text
NodeList(3) [li, li, li]
```

But it is not an Array.

For example:

```javascript
tempLiList.map(...)
```

is not available on a typical `NodeList`.

However, `NodeList` supports useful methods such as:

```javascript
forEach()
```

Example:

```javascript
tempLiList.forEach(function (li) {
    li.style.background = "green";
});
```

---

# 25. Accessing NodeList Elements

Because it supports indexes, we can do:

```javascript
tempLiList[0]
```

Then:

```javascript
tempLiList[0].style.color = "pink";
```

Output of assignment:

```text
"pink"
```

Another:

```javascript
tempLiList[0].style.color = "yellow";
```

---

# 26. Changing Font Size

```javascript
tempLiList[0].style.fontSize = "20px";
```

Then:

```javascript
tempLiList[0].style.fontSize = "50px";
```

Then:

```javascript
tempLiList[0].style.fontSize = "30px";
```

The final font size will be:

```text
30px
```

because the latest assignment replaces the previous value.

---

# 27. Applying Style to Every Element Using `forEach()`

Suppose:

```javascript
const tempLiList = document.querySelectorAll('li');
```

We can loop through every `<li>`:

```javascript
tempLiList.forEach(function (l) {
    l.style.background = "green";
});
```

This applies:

```css
background: green;
```

to every selected `<li>`.

---

## More Examples

```javascript
tempLiList.forEach(function (list) {
    list.style.background = "pink";
});
```

Then:

```javascript
tempLiList.forEach(function (list) {
    list.style.color = "blue";
});
```

---

# 28. Selecting an Element Inside Another Element

We can first select a parent element.

```javascript
const myul = document.querySelector('ul');
```

Now `myul` contains the `<ul>` element.

Then we can search inside that `<ul>`:

```javascript
const first = myul.querySelector('li');
```

This finds the **first `<li>` inside that `<ul>`**.

---

# 29. Changing the First `<li>`

```javascript
first.style.background = "blue";
```

Then:

```javascript
first.style.background = "green";
```

The latest value becomes:

```css
background: green;
```

---

# 30. Selecting the Second `<li>`

We can use:

```javascript
const second = myul.querySelectorAll('li')[1];
```

Then:

```javascript
second.style.background = "blue";
```

This changes the background of the second `<li>`.

---

# 31. `getElementsByClassName()`

Another way to select elements is:

```javascript
document.getElementsByClassName('list-item')
```

Suppose the page contains four elements:

```html
<li class="list-item">One</li>
<li class="list-item">Two</li>
<li class="list-item">Three</li>
<li class="list-item">Four</li>
```

Then:

```javascript
document.getElementsByClassName('list-item')
```

returns:

```text
HTMLCollection(4)
[
    li.list-item,
    li.list-item,
    li.list-item,
    li.list-item
]
```

---

# 32. HTMLCollection

`getElementsByClassName()` returns an:

```text
HTMLCollection
```

It is **not a normal Array**.

It is also different from a `NodeList`.

---

## HTMLCollection Example

```javascript
const listItems =
    document.getElementsByClassName('list-item');
```

Then:

```javascript
listItems[0]
```

gets the first element.

And:

```javascript
listItems[1]
```

gets the second element.

---

# 33. NodeList vs HTMLCollection vs Array

This is very important for DOM revision.

| Collection | Example | Array? | `forEach()` |
|---|---|---:|---:|
| `NodeList` | `querySelectorAll()` | ❌ | ✅ |
| `HTMLCollection` | `getElementsByClassName()` | ❌ | ❌ in many environments |
| `Array` | `Array.from(...)` | ✅ | ✅ |

So:

```javascript
document.querySelectorAll('li')
```

→ `NodeList`

While:

```javascript
document.getElementsByClassName('list-item')
```

→ `HTMLCollection`

Neither is a normal Array.

---

# 34. Converting HTMLCollection into an Array

If we want to use Array methods such as:

```javascript
map()
filter()
reduce()
```

we can convert the HTMLCollection into an Array.

Use:

```javascript
Array.from()
```

Example:

```javascript
const convertedIntoArray =
    Array.from(document.getElementsByClassName('list-item'));
```

Now:

```javascript
convertedIntoArray
```

returns:

```text
(4) [
    li.list-item,
    li.list-item,
    li.list-item,
    li.list-item
]
```

But this time it is a real:

```text
Array
```

---

# 35. Why Convert HTMLCollection to Array?

Before conversion:

```javascript
const list =
    document.getElementsByClassName('list-item');
```

This gives:

```text
HTMLCollection
```

After conversion:

```javascript
const convertedIntoArray =
    Array.from(list);
```

This gives:

```text
Array
```

Now Array methods are available:

```javascript
convertedIntoArray.map(...)
convertedIntoArray.filter(...)
convertedIntoArray.reduce(...)
convertedIntoArray.forEach(...)
```

---

# 36. Using `forEach()` After Conversion

```javascript
const convertedIntoArray =
    Array.from(document.getElementsByClassName('list-item'));
```

Then:

```javascript
convertedIntoArray.forEach(function (list) {
    list.style.background = "pink";
});
```

And:

```javascript
convertedIntoArray.forEach(function (list) {
    list.style.color = "blue";
});
```

This applies the style to every element.

---

# 37. `getElementById()` When ID Does Not Exist

Suppose we write:

```javascript
document.getElementById('h2')
```

but there is no element with:

```html
id="h2"
```

The result is:

```text
null
```

### Important

`h2` is an HTML **tag**, not automatically an ID.

So this:

```javascript
document.getElementById('h2')
```

means:

> Find an element whose `id` is exactly `"h2"`.

It does **not** mean:

> Find all `<h2>` elements.

---

# 38. Selecting All `<h2>` Elements

To select all `<h2>` tags:

```javascript
document.querySelectorAll('h2')
```

Output might be:

```text
NodeList(15) [
    h2,
    h2,
    h2,
    ...
]
```

---

# 39. Styling One `<h2>`

We can access a particular `<h2>`:

```javascript
document.querySelectorAll('h2')[2]
```

Then change its padding:

```javascript
document.querySelectorAll('h2')[2].style.padding = "300px";
```

Then:

```javascript
document.querySelectorAll('h2')[2].style.padding = "0px";
```

The final padding becomes:

```css
padding: 0px;
```

### Note

This:

```javascript
style.padding = "none"
```

is not a valid normal CSS value for `padding`.

Use:

```javascript
style.padding = "0px";
```

to remove/reset padding.

---

# 40. Storing `querySelectorAll()` Result in a Variable

Instead of repeatedly writing:

```javascript
document.querySelectorAll('h2')
```

we can store it:

```javascript
const h2List = document.querySelectorAll('h2');
```

Now:

```javascript
h2List
```

contains all selected `<h2>` elements.

---

# 41. Applying Style to All `<h2>` Elements

Because `h2List` is a `NodeList`, we can use `forEach()`:

```javascript
h2List.forEach(function (allItems) {
    allItems.style.color = "red";
});
```

Every `<h2>` becomes red.

---

# 42. Applying Multiple Styles

```javascript
h2List.forEach(function (allItems) {
    allItems.style.color = "red";
    allItems.style.background = "pink";
    allItems.style.margin = "100px";
});
```

This applies:

```css
color: red;
background: pink;
margin: 100px;
```

to every `<h2>`.

### Important correction

JavaScript CSS property names are case-sensitive.

Correct:

```javascript
allItems.style.background = "pink";
```

Not:

```javascript
allItems.style.backGround = "pink";
```

---

# 43. Changing the Content of Every `<h2>`

We can also modify the text:

```javascript
h2List.forEach(function (allItems) {
    allItems.style.color = "red";
    allItems.style.background = "pink";
    allItems.style.margin = "100px";

    allItems.innerText = "Hello Dosto";
});
```

Now every selected `<h2>` contains:

```text
Hello Dosto
```

---

# 44. Complete DOM Selection Cheat Sheet

## Select by ID

```javascript
document.getElementById('title');
```

Returns:

```text
Element / null
```

---

## Select first matching element

```javascript
document.querySelector('h1');
```

Returns:

```text
First matching Element / null
```

---

## Select all matching elements

```javascript
document.querySelectorAll('h2');
```

Returns:

```text
NodeList
```

---

## Select by class

```javascript
document.getElementsByClassName('list-item');
```

Returns:

```text
HTMLCollection
```

---

## Select by tag

```javascript
document.querySelectorAll('li');
```

Returns:

```text
NodeList
```

---

# 45. Selector Symbols

When using `querySelector()` and `querySelectorAll()`:

### ID

```javascript
document.querySelector('#title');
```

`#` means:

```text
ID
```

---

### Class

```javascript
document.querySelector('.heading');
```

`.` means:

```text
class
```

---

### Tag

```javascript
document.querySelector('h1');
```

No symbol is needed.

---

### Attribute

```javascript
document.querySelector('input[type="password"]');
```

Selects an element based on its attribute.

---

# 46. DOM Style Manipulation

Basic pattern:

```javascript
element.style.property = "value";
```

Examples:

```javascript
title.style.color = "red";

title.style.background = "green";

title.style.fontSize = "30px";

title.style.margin = "100px";

title.style.padding = "20px";
```

---

# 47. Important Difference: `getAttribute()` vs Property

Suppose:

```html
<h1 id="title" class="heading">
```

We can use:

```javascript
title.id
```

or:

```javascript
title.className
```

We can also use:

```javascript
title.getAttribute('id')
```

and:

```javascript
title.getAttribute('class')
```

Both can retrieve attribute information, but `getAttribute()` specifically works with HTML attributes.

Example:

```javascript
title.getAttribute('class');
```

Output:

```text
"heading"
```

---

# 48. `setAttribute()` vs Direct Property

We can change an attribute using:

```javascript
title.setAttribute('id', 'newTitle');
```

Or, for some DOM properties, directly:

```javascript
title.id = "newTitle";
```

Similarly:

```javascript
title.className = "newHeading";
```

Both approaches can be useful.

---

# 49. Important DOM Concepts to Remember

## `document`

Represents the webpage.

```javascript
document
```

---

## `getElementById()`

Finds one element by ID.

```javascript
document.getElementById('title');
```

---

## `getAttribute()`

Reads an attribute.

```javascript
element.getAttribute('class');
```

---

## `setAttribute()`

Creates or changes an attribute.

```javascript
element.setAttribute('class', 'heading');
```

---

## `querySelector()`

Returns the first matching element.

```javascript
document.querySelector('.heading');
```

---

## `querySelectorAll()`

Returns all matching elements as a `NodeList`.

```javascript
document.querySelectorAll('li');
```

---

## `getElementsByClassName()`

Returns matching elements as an `HTMLCollection`.

```javascript
document.getElementsByClassName('list-item');
```

---

## `Array.from()`

Converts an iterable/array-like collection into a real Array.

```javascript
Array.from(collection);
```

---

## `style`

Used to modify inline CSS.

```javascript
element.style.color = "red";
```

---

## `innerHTML`

Reads or writes HTML.

```javascript
element.innerHTML
```

---

## `innerText`

Reads or writes visible text.

```javascript
element.innerText
```

---

## `textContent`

Reads or writes text content, including hidden text.

```javascript
element.textContent
```

---

# 50. Most Important Revision Table

| Method / Property | Purpose | Example | Result |
|---|---|---|---|
| `getElementById()` | Select by ID | `document.getElementById('title')` | Element |
| `getAttribute()` | Read attribute | `title.getAttribute('class')` | Attribute value |
| `setAttribute()` | Add/change attribute | `title.setAttribute('x','y')` | Attribute changed |
| `querySelector()` | First matching element | `document.querySelector('.box')` | Element |
| `querySelectorAll()` | All matching elements | `document.querySelectorAll('.box')` | NodeList |
| `getElementsByClassName()` | Elements by class | `document.getElementsByClassName('box')` | HTMLCollection |
| `Array.from()` | Convert collection to Array | `Array.from(collection)` | Array |
| `style` | Change CSS | `title.style.color = 'red'` | CSS changed |
| `innerHTML` | HTML content | `title.innerHTML` | HTML + text |
| `innerText` | Visible text | `title.innerText` | Visible text |
| `textContent` | Text content | `title.textContent` | Text including hidden text |

---

# 51. NodeList vs HTMLCollection vs Array — Final Concept

This is one of the most important concepts from this topic.

### `querySelectorAll()`

```javascript
const list = document.querySelectorAll('li');
```

Returns:

```text
NodeList
```

You can do:

```javascript
list[0];
list.forEach(...);
```

But it is **not an Array**.

---

### `getElementsByClassName()`

```javascript
const list =
    document.getElementsByClassName('list-item');
```

Returns:

```text
HTMLCollection
```

You can do:

```javascript
list[0];
list[1];
```

But it is **not an Array**.

---

### Convert to Array

```javascript
const arr = Array.from(list);
```

Now:

```text
Array
```

Therefore:

```javascript
arr.map(...)
arr.filter(...)
arr.reduce(...)
arr.forEach(...)
```

are available.

---

# 52. One Complete Example

HTML:

```html
<h1 id="title" class="heading">
    DOM Learning
</h1>

<ul>
    <li class="list-item">JavaScript</li>
    <li class="list-item">HTML</li>
    <li class="list-item">CSS</li>
</ul>
```

JavaScript:

```javascript
// Select element by ID
const title = document.getElementById('title');

// Read ID
console.log(title.id);

// Read class
console.log(title.className);

// Read attribute
console.log(title.getAttribute('class'));

// Add new attribute
title.setAttribute('toggle', 'vimbar');

// Change CSS
title.style.color = "red";
title.style.background = "pink";
title.style.fontSize = "30px";

// Change text
title.innerText = "DOM Learning with JavaScript";

// Select all li elements
const tempLiList = document.querySelectorAll('li');

// Change first li
tempLiList[0].style.color = "yellow";

// Change all li elements
tempLiList.forEach(function (li) {
    li.style.background = "green";
});

// Select by class
const htmlCollection =
    document.getElementsByClassName('list-item');

// Convert HTMLCollection to Array
const convertedIntoArray =
    Array.from(htmlCollection);

// Use Array methods
convertedIntoArray.forEach(function (list) {
    list.style.color = "blue";
});
```

---

# 53. Mental Model for DOM

When revising DOM, think about it in this order:

```text
HTML Webpage
     ↓
  document
     ↓
  Select Element
     ↓
 ┌──────────────────────────────┐
 │ getElementById()             │
 │ querySelector()              │
 │ querySelectorAll()           │
 │ getElementsByClassName()     │
 └──────────────────────────────┘
     ↓
Get / Change Element
     ↓
 ┌──────────────────────────────┐
 │ getAttribute()               │
 │ setAttribute()               │
 │ style                        │
 │ innerHTML                    │
 │ innerText                    │
 │ textContent                  │
 └──────────────────────────────┘
     ↓
   Webpage changes
```

---

# 54. Quick Revision

Remember these five categories:

### 1. Select

```javascript
document.getElementById('title');

document.querySelector('.heading');

document.querySelectorAll('li');

document.getElementsByClassName('list-item');
```

### 2. Read Attributes

```javascript
element.getAttribute('class');

element.id;

element.className;
```

### 3. Change Attributes

```javascript
element.setAttribute('class', 'newClass');
```

### 4. Change CSS

```javascript
element.style.color = "red";

element.style.background = "pink";

element.style.fontSize = "30px";
```

### 5. Change Content

```javascript
element.innerHTML;

element.innerText;

element.textContent;
```

---

# 55. Final Things to Remember

```text
document
   ↓
Used to access the webpage.

getElementById()
   ↓
One element by ID.

querySelector()
   ↓
First matching element.

querySelectorAll()
   ↓
All matching elements → NodeList.

getElementsByClassName()
   ↓
Matching elements → HTMLCollection.

Array.from()
   ↓
Convert collection → real Array.

getAttribute()
   ↓
Read an attribute.

setAttribute()
   ↓
Create or change an attribute.

style
   ↓
Change CSS.

innerHTML
   ↓
HTML + text.

innerText
   ↓
Visible text.

textContent
   ↓
Text content, including hidden text.
```

## The most important distinction

```javascript
document.querySelectorAll('li')
```

→ `NodeList`

```javascript
document.getElementsByClassName('list-item')
```

→ `HTMLCollection`

```javascript
Array.from(
    document.getElementsByClassName('list-item')
)
```

→ `Array`

That distinction is important because **NodeList, HTMLCollection, and Array are different types of objects**, even though they can all contain multiple DOM elements.