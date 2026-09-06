# JavaScript DOM — Creating & Adding Elements Dynamically

> **Topic:** DOM Element Creation and Manipulation  
> **File:** `dom-create-elements-notes.md`  
> **Purpose:** Learn how to create HTML elements using JavaScript, add attributes, apply CSS, add text, and finally attach the element to the webpage.

---

# 1. What We Are Learning

In the previous DOM notes, we learned how to:

```text
HTML
 ↓
DOM
 ↓
Select existing elements
 ↓
Traverse parent / child / sibling
```

Now we will learn how to **create new DOM elements using JavaScript**.

The basic process is:

```text
Create
   ↓
Configure
   ↓
Add content
   ↓
Attach to DOM
```

For example:

```javascript
const div = document.createElement('div');
```

creates a new `<div>` in memory.

But it is **not visible on the webpage yet**.

We eventually need:

```javascript
document.body.appendChild(div);
```

to attach it to the page.

---

# 2. Complete Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>DOM (Document Object Model)</title>
</head>

<body style="background: black; color: white">

</body>

<script>

    const div = document.createElement('div');

    console.log(div);

    div.setAttribute('class', 'parent');

    div.className = "child";

    div.id = Math.floor(Math.random() * 10 + 1);

    div.setAttribute("title", 'newTitle');

    div.style.background = "orange";

    div.style.color = "purple";

    div.style.padding = "12px";

    div.innerHTML = "Chai aur Code";

    const addText = document.createTextNode("Chai aur Code");

    div.appendChild(addText);

    document.body.appendChild(div);

</script>

</html>
```

---

# 3. Creating an Element

## Code

```javascript
const div = document.createElement('div');
```

This is one of the most important DOM methods.

```javascript
document.createElement()
```

creates a new HTML element.

Here:

```javascript
document.createElement('div');
```

means:

> Create a new `<div>` element.

The browser creates it in memory.

---

## Important

At this point:

```javascript
const div = document.createElement('div');
```

the element exists in JavaScript, but it is **not yet attached to the webpage**.

Think:

```text
JavaScript memory

div
│
└── <div></div>
```

It is not inside:

```html
<body>
</body>
```

yet.

---

# 4. Console Output

```javascript
console.log(div);
```

Output:

```html
<div></div>
```

You may see:

```text
<div></div>
```

in Chrome DevTools.

---

# 5. `setAttribute()`

## Code

```javascript
div.setAttribute('class', 'parent');
```

`setAttribute()` is used to add or modify an HTML attribute.

Syntax:

```javascript
element.setAttribute(attributeName, value);
```

Example:

```javascript
div.setAttribute('class', 'parent');
```

means:

```html
<div class="parent"></div>
```

---

## Before

```html
<div></div>
```

## After

```html
<div class="parent"></div>
```

---

# 6. `setAttribute()` Can Add Any Normal Attribute

For example:

```javascript
div.setAttribute("title", "newTitle");
```

creates:

```html
<div title="newTitle"></div>
```

You can also use:

```javascript
div.setAttribute("id", "box");
```

Result:

```html
<div id="box"></div>
```

Or:

```javascript
div.setAttribute("data-user", "123");
```

Result:

```html
<div data-user="123"></div>
```

---

# 7. `className`

Your next line is:

```javascript
div.className = "child";
```

This changes the element's `class` attribute.

We previously had:

```javascript
div.setAttribute('class', 'parent');
```

which gave:

```html
<div class="parent"></div>
```

Then:

```javascript
div.className = "child";
```

changes it to:

```html
<div class="child"></div>
```

So yes, your comment is correct:

```text
setAttribute()
      ↓
class = parent

className
      ↓
class = child

Result
      ↓
class="child"
```

---

# 8. Important: It Doesn't Add Another Class

This:

```javascript
div.setAttribute('class', 'parent');

div.className = 'child';
```

does **not** produce:

```html
<div class="parent child"></div>
```

Instead it produces:

```html
<div class="child"></div>
```

because `className` replaces the current class attribute value.

---

# 9. How to Have Both Classes

If you want:

```html
<div class="parent child"></div>
```

you could use:

```javascript
div.className = "parent child";
```

or:

```javascript
div.classList.add("parent");
div.classList.add("child");
```

Better approach when manipulating classes:

```javascript
div.classList.add("parent");
div.classList.add("child");
```

Now:

```html
<div class="parent child"></div>
```

---

# 10. `id`

## Code

```javascript
div.id = Math.floor(Math.random() * 10 + 1);
```

This generates a random number and assigns it as the element's ID.

---

# 11. Understanding `Math.random()`

```javascript
Math.random()
```

generates a random decimal number:

```text
0 <= number < 1
```

Examples:

```text
0.1234
0.5821
0.9012
0.0034
```

It can never be exactly `1`.

---

# 12. Understanding `Math.random() * 10`

```javascript
Math.random() * 10
```

produces:

```text
0 <= number < 10
```

Examples:

```text
3.42
7.82
9.12
0.34
```

---

# 13. Understanding `+ 1`

```javascript
Math.random() * 10 + 1
```

produces:

```text
1 <= number < 11
```

Examples:

```text
1.32
4.81
7.22
10.93
```

---

# 14. Understanding `Math.floor()`

`Math.floor()` removes the decimal part by rounding down.

Examples:

```javascript
Math.floor(4.9);
```

Output:

```text
4
```

```javascript
Math.floor(7.2);
```

Output:

```text
7
```

```javascript
Math.floor(10.99);
```

Output:

```text
10
```

Therefore:

```javascript
Math.floor(Math.random() * 10 + 1);
```

generates an integer from:

```text
1 → 10
```

---

# 15. Result of the `id` Code

```javascript
div.id = Math.floor(Math.random() * 10 + 1);
```

might produce:

```html
<div id="7"></div>
```

or:

```html
<div id="3"></div>
```

or:

```html
<div id="10"></div>
```

depending on the random number.

---

# 16. `title` Attribute

## Code

```javascript
div.setAttribute("title", "newTitle");
```

This adds:

```html
title="newTitle"
```

So the element becomes something like:

```html
<div
    class="child"
    id="7"
    title="newTitle">
</div>
```

When you hover over the element in the browser, the title may appear as a tooltip.

---

# 17. Adding CSS with `.style`

Now we start styling the dynamically created element.

```javascript
div.style.background = "orange";
```

This sets the background color.

Equivalent HTML:

```html
<div style="background: orange;">
```

---

# 18. Changing Text Color

```javascript
div.style.color = "purple";
```

This changes the text color to purple.

Equivalent CSS:

```css
color: purple;
```

---

# 19. Adding Padding

```javascript
div.style.padding = "12px";
```

Equivalent CSS:

```css
padding: 12px;
```

So now the div has:

```css
background: orange;
color: purple;
padding: 12px;
```

---

# 20. Multiple Styles

Your code:

```javascript
div.style.background = "orange";
div.style.color = "purple";
div.style.padding = "12px";
```

can be visualized as:

```text
div
│
├── background → orange
├── color      → purple
└── padding    → 12px
```

---

# 21. Adding Content Using `innerHTML`

## Code

```javascript
div.innerHTML = "Chai aur Code";
```

This places content inside the div.

Before:

```html
<div></div>
```

After:

```html
<div>Chai aur Code</div>
```

---

# 22. Why Is It Called `innerHTML`?

Because it represents the HTML/content **inside** the element.

Example:

```html
<div>
    Hello
</div>
```

The content inside the div is:

```text
Hello
```

Therefore:

```javascript
div.innerHTML
```

can access that content.

---

# 23. `innerHTML` Can Also Add HTML

For example:

```javascript
div.innerHTML = "<h1>Hello</h1>";
```

Result:

```html
<div>
    <h1>Hello</h1>
</div>
```

This is different from:

```javascript
div.innerText = "<h1>Hello</h1>";
```

which displays the text:

```text
<h1>Hello</h1>
```

instead of creating an actual `<h1>`.

---

# 24. Creating a Text Node

Your next code is:

```javascript
const addText = document.createTextNode("Chai aur Code");
```

This creates a **text node**.

It does not create:

```html
<div>
```

It creates text:

```text
Chai aur Code
```

as a DOM node.

Think:

```text
Text Node
   ↓
"Chai aur Code"
```

---

# 25. `createTextNode()`

Syntax:

```javascript
document.createTextNode("text");
```

Example:

```javascript
const text = document.createTextNode("Hello");
```

Now:

```text
text
 ↓
"Hello"
```

The text node exists in memory but has not been attached to the page.

---

# 26. `appendChild()`

## Code

```javascript
div.appendChild(addText);
```

This attaches the text node to the div.

Before:

```text
div
```

Text node:

```text
"Chai aur Code"
```

After:

```text
div
└── "Chai aur Code"
```

HTML becomes:

```html
<div>Chai aur Code</div>
```

---

# 27. Important: Your Code Adds the Text Twice

This is an important observation about your current code.

You have:

```javascript
div.innerHTML = "Chai aur Code";
```

and then:

```javascript
const addText = document.createTextNode("Chai aur Code");

div.appendChild(addText);
```

The first line adds:

```text
Chai aur Code
```

Then `appendChild()` adds another:

```text
Chai aur Code
```

So the final result will be:

```text
Chai aur CodeChai aur Code
```

or visually:

```text
Chai aur CodeChai aur Code
```

There is no automatic replacement when using `appendChild()`.

It **adds another child**.

---

# 28. Visualizing What Happens

First:

```javascript
div.innerHTML = "Chai aur Code";
```

DOM:

```text
div
└── "Chai aur Code"
```

Then:

```javascript
const addText =
    document.createTextNode("Chai aur Code");
```

creates:

```text
"Chai aur Code"
```

Then:

```javascript
div.appendChild(addText);
```

DOM becomes:

```text
div
├── "Chai aur Code"
└── "Chai aur Code"
```

Therefore:

```text
Chai aur CodeChai aur Code
```

---

# 29. If You Want the Text Only Once

You have two choices.

## Option 1 — Use `innerHTML`

```javascript
div.innerHTML = "Chai aur Code";
```

That's enough.

---

## Option 2 — Use `createTextNode()`

```javascript
const addText =
    document.createTextNode("Chai aur Code");

div.appendChild(addText);
```

That's enough.

Do **not** need both.

---

# 30. Better Way for Plain Text

If you only want to insert text, another option is:

```javascript
div.textContent = "Chai aur Code";
```

This is often preferable when you are inserting plain text.

---

# 31. `innerHTML` vs `textContent` vs `createTextNode`

| Method | Purpose |
|---|---|
| `innerHTML` | Add/read HTML content |
| `textContent` | Add/read plain text |
| `createTextNode()` | Explicitly create a text node |

Example:

```javascript
div.innerHTML = "<b>Hello</b>";
```

Result:

```html
<div><b>Hello</b></div>
```

---

```javascript
div.textContent = "<b>Hello</b>";
```

Result:

```html
<div>&lt;b&gt;Hello&lt;/b&gt;</div>
```

Displayed as:

```text
<b>Hello</b>
```

---

```javascript
const text = document.createTextNode("Hello");

div.appendChild(text);
```

Result:

```html
<div>Hello</div>
```

---

# 32. The Most Important Step: Attach to the Page

## Code

```javascript
document.body.appendChild(div);
```

This is what finally puts the dynamically created div inside the webpage.

Before this:

```text
JavaScript memory

div
└── configured element
```

After this:

```text
HTML document
│
└── body
    │
    └── div
```

---

# 33. Why Is `appendChild()` Necessary?

Creating:

```javascript
const div = document.createElement('div');
```

doesn't automatically put it into the webpage.

You need:

```javascript
document.body.appendChild(div);
```

Think:

```text
createElement()
      ↓
Create object in memory
      ↓
Configure it
      ↓
appendChild()
      ↓
Put it into DOM
      ↓
Browser displays it
```

---

# 34. Complete Flow

Your code follows this pattern:

```text
1. Create
       ↓
document.createElement('div')

2. Set attributes
       ↓
setAttribute()
className
id

3. Set styles
       ↓
style.background
style.color
style.padding

4. Add content
       ↓
innerHTML
createTextNode()

5. Attach content
       ↓
appendChild()

6. Attach element to document
       ↓
document.body.appendChild()
```

---

# 35. Final DOM Structure

Ignoring the duplicate text issue for a moment, the generated HTML is approximately:

```html
<div
    class="child"
    id="7"
    title="newTitle"
    style="background: orange; color: purple; padding: 12px;">
    
    Chai aur Code

</div>
```

The ID will be random from `1` to `10`.

With your current code, the content is added twice:

```html
<div
    class="child"
    id="7"
    title="newTitle"
    style="background: orange; color: purple; padding: 12px;">

    Chai aur CodeChai aur Code

</div>
```

---

# 36. Clean Version — Recommended

If your goal is to understand each concept separately:

```javascript
const div = document.createElement('div');

console.log(div);

// Add attributes
div.setAttribute('class', 'parent');
div.className = 'child';

div.id = Math.floor(Math.random() * 10 + 1);

div.setAttribute('title', 'newTitle');

// Add styles
div.style.background = 'orange';
div.style.color = 'purple';
div.style.padding = '12px';

// Add text
const addText = document.createTextNode('Chai aur Code');

div.appendChild(addText);

// Add div to webpage
document.body.appendChild(div);
```

---

# 37. Even Cleaner Modern Version

For a simple text element:

```javascript
const div = document.createElement('div');

div.className = 'child';
div.id = Math.floor(Math.random() * 10 + 1);
div.title = 'newTitle';

div.style.background = 'orange';
div.style.color = 'purple';
div.style.padding = '12px';

div.textContent = 'Chai aur Code';

document.body.appendChild(div);
```

This is shorter and easier to read.

---

# 38. `setAttribute()` vs Direct Property

There are multiple ways to set attributes.

## Using `setAttribute()`

```javascript
div.setAttribute("id", "box");
div.setAttribute("title", "hello");
div.setAttribute("class", "child");
```

## Using properties

```javascript
div.id = "box";
div.title = "hello";
div.className = "child";
```

Both can work.

---

# 39. `className` vs `classList`

This distinction is important.

### `className`

```javascript
div.className = "parent";
```

Sets/replaces the entire class string.

---

### `classList`

```javascript
div.classList.add("parent");
```

Adds a class.

You can add another:

```javascript
div.classList.add("child");
```

Result:

```html
<div class="parent child"></div>
```

Other useful methods:

```javascript
div.classList.remove("parent");

div.classList.toggle("active");

div.classList.contains("child");
```

Remember:

```text
className
    ↓
replace/set classes

classList
    ↓
manage individual classes
```

---

# 40. `appendChild()` Mental Model

Remember:

```javascript
parent.appendChild(child);
```

means:

> Put this child inside this parent.

Example:

```javascript
div.appendChild(addText);
```

means:

```text
div
└── addText
```

And:

```javascript
document.body.appendChild(div);
```

means:

```text
body
└── div
```

---

# 41. `appendChild()` Can Move Existing Nodes

This is an interesting DOM behavior.

Suppose:

```javascript
const p = document.createElement("p");

const div = document.createElement("div");

div.appendChild(p);
```

Now:

```text
div
└── p
```

If later:

```javascript
body.appendChild(p);
```

the `<p>` is moved from the div to the body.

It is **not copied**.

A DOM node can have only one parent.

---

# 42. Parent-Child Relationship

After:

```javascript
document.body.appendChild(div);
```

the relationship becomes:

```text
document
   │
   └── body
        │
        └── div
             │
             └── "Chai aur Code"
```

Therefore:

```javascript
div.parentElement
```

returns:

```html
<body>
```

And:

```javascript
div.firstChild
```

can return the text node containing:

```text
Chai aur Code
```

---

# 43. Important DOM Methods From This Lesson

## Create element

```javascript
document.createElement('div');
```

Creates a new element.

---

## Create text node

```javascript
document.createTextNode('Hello');
```

Creates a text node.

---

## Set attribute

```javascript
element.setAttribute('class', 'box');
```

Adds/modifies an attribute.

---

## Access class

```javascript
element.className;
```

Gets/sets the class string.

---

## Access ID

```javascript
element.id;
```

Gets/sets the ID.

---

## Set CSS

```javascript
element.style.color = 'red';
```

Changes inline CSS.

---

## Add HTML

```javascript
element.innerHTML = '<h1>Hello</h1>';
```

Adds/parses HTML.

---

## Add plain text

```javascript
element.textContent = 'Hello';
```

Adds plain text.

---

## Add child

```javascript
parent.appendChild(child);
```

Adds a node as the last child.

---

# 44. Interview Questions

## Q1. Does `createElement()` immediately display the element?

No.

```javascript
const div = document.createElement('div');
```

only creates the element in memory.

You must attach it:

```javascript
document.body.appendChild(div);
```

---

## Q2. What does `appendChild()` do?

It adds a node as the last child of another node.

```javascript
parent.appendChild(child);
```

---

## Q3. Difference between `innerHTML` and `createTextNode()`?

`innerHTML` sets/parses HTML content.

```javascript
div.innerHTML = "<b>Hello</b>";
```

`createTextNode()` creates a text node.

```javascript
const text = document.createTextNode("Hello");
```

---

## Q4. What does `setAttribute()` do?

It creates or updates an HTML attribute.

```javascript
div.setAttribute("title", "Hello");
```

---

## Q5. What happens when `className` is assigned?

It replaces the current class attribute value.

```javascript
div.className = "child";
```

---

## Q6. How do you add multiple classes safely?

```javascript
div.classList.add("parent");
div.classList.add("child");
```

---

## Q7. What is the range of this?

```javascript
Math.floor(Math.random() * 10 + 1);
```

Answer:

```text
1 to 10
```

---

# 45. Common Mistake

### Mistake:

```javascript
const div = document.createElement("div");

div.textContent = "Hello";
```

and expecting it to appear immediately.

It won't appear until you attach it:

```javascript
document.body.appendChild(div);
```

---

# 46. Common Mistake — Duplicate Content

Don't do this if you want only one copy:

```javascript
div.innerHTML = "Hello";

const text = document.createTextNode("Hello");

div.appendChild(text);
```

Because you get:

```text
HelloHello
```

Instead use either:

```javascript
div.innerHTML = "Hello";
```

OR:

```javascript
const text = document.createTextNode("Hello");
div.appendChild(text);
```

OR:

```javascript
div.textContent = "Hello";
```

---

# 47. Revision Table

| Method / Property | Purpose |
|---|---|
| `createElement()` | Create HTML element |
| `createTextNode()` | Create text node |
| `setAttribute()` | Add/change attribute |
| `className` | Set entire class string |
| `classList.add()` | Add class |
| `classList.remove()` | Remove class |
| `classList.toggle()` | Toggle class |
| `id` | Set/get element ID |
| `style` | Modify inline CSS |
| `innerHTML` | Read/write HTML |
| `textContent` | Read/write plain text |
| `appendChild()` | Add node as child |

---

# 48. The Complete DOM Creation Formula

Memorize this pattern:

```javascript
const element = document.createElement("tag");
```

↓

```javascript
element.setAttribute("attribute", "value");
```

↓

```javascript
element.style.property = "value";
```

↓

```javascript
element.textContent = "content";
```

↓

```javascript
parent.appendChild(element);
```

Example:

```javascript
const h1 = document.createElement("h1");

h1.setAttribute("class", "heading");

h1.style.color = "orange";

h1.textContent = "Hello World";

document.body.appendChild(h1);
```

Result:

```html
<h1 class="heading" style="color: orange;">
    Hello World
</h1>
```

---

# 49. Final Mental Model

Whenever you dynamically create something in the DOM, think:

```text
                 CREATE
                    ↓
        document.createElement()
                    ↓
               CONFIGURE
          ↙         ↓         ↘
     attributes    styles    classes
          ↓         ↓         ↓
     setAttribute  style    classList
                    ↓
                 CONTENT
                    ↓
        textContent / innerHTML
                    ↓
                  ATTACH
                    ↓
             appendChild()
                    ↓
                WEBPAGE
```

---

# 50. Quick Revision

```javascript
// 1. Create
const div = document.createElement("div");

// 2. Attribute
div.setAttribute("title", "newTitle");

// 3. Class
div.className = "child";

// 4. ID
div.id = "box";

// 5. Style
div.style.color = "purple";

// 6. Content
div.textContent = "Chai aur Code";

// 7. Attach
document.body.appendChild(div);
```

### Remember:

```text
createElement()
    → creates

setAttribute()
    → attributes

className / classList
    → classes

style
    → CSS

textContent
    → text

innerHTML
    → HTML

createTextNode()
    → creates text node

appendChild()
    → attaches node
```

---

# 51. Practice Questions

Try these without looking at the solution.

### Practice 1

Create a `<p>` element.

```javascript
// Your code
```

---

### Practice 2

Give it the class:

```text
description
```

---

### Practice 3

Give it the text:

```text
Learning JavaScript DOM
```

---

### Practice 4

Change its color to green.

---

### Practice 5

Add it to the body.

---

### Practice 6

Create a button dynamically with:

```text
Click Me
```

and add it to the body.

---

### Practice 7

Create:

```html
<div class="box">
    <h1>Hello</h1>
</div>
```

**entirely using JavaScript**.

Try using:

```javascript
createElement()
appendChild()
textContent
className
```

---

# 52. GitHub Revision Checklist

Before moving ahead, make sure you can explain:

- [ ] `document.createElement()`
- [ ] Why created elements don't immediately appear
- [ ] `setAttribute()`
- [ ] `className`
- [ ] `classList`
- [ ] `id`
- [ ] `Math.random()`
- [ ] `Math.floor()`
- [ ] `style`
- [ ] `innerHTML`
- [ ] `textContent`
- [ ] `createTextNode()`
- [ ] `appendChild()`
- [ ] Parent-child relationship
- [ ] Why `innerHTML + appendChild()` can duplicate content
- [ ] Difference between an element and a text node

---

# One-Minute Revision

```text
Create element:
document.createElement()

Create text:
document.createTextNode()

Set attribute:
setAttribute()

Set class:
className / classList

Set ID:
id

Set CSS:
style

Set plain text:
textContent

Set HTML:
innerHTML

Add child:
appendChild()
```

### The golden pattern:

```javascript
const element = document.createElement("div");

element.className = "box";
element.textContent = "Hello";
element.style.color = "red";

document.body.appendChild(element);
```

**Create → Configure → Content → Append**