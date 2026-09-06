# JavaScript DOM Notes

## 1. What is DOM?

**DOM = Document Object Model**

When the browser loads an HTML page, it converts the HTML document into a **tree of objects**.

For example:

```html
<h1 id="title" class="heading">DOM Learning</h1>
```

The browser represents this `<h1>` as an object that JavaScript can access and modify.

Using DOM, JavaScript can:

- Find HTML elements
- Change text
- Change attributes
- Change CSS
- Add elements
- Remove elements
- Handle events

The main object used to access the webpage is:

```javascript
document
```

---

## 2. `document`

`document` represents the **entire HTML webpage**.

```javascript
document
```

You can use `document` to find elements inside the webpage.

Think of it like:

```text
document
   ↓
HTML page
   ↓
HTML elements
   ↓
<h1>, <p>, <div>, <button>...
```

---

# 3. `getElementById()`

One of the most common ways to access an HTML element is:

```javascript
document.getElementById('title')
```

Suppose the HTML is:

```html
<h1 id="title" class="heading">
    DOM Learning
</h1>
```

Then:

```javascript
document.getElementById('title')
```

returns the `<h1>` element.

We can store it in a variable:

```javascript
const title = document.getElementById('title')
```

Now we can simply use:

```javascript
title
```

instead of repeatedly writing:

```javascript
document.getElementById('title')
```

---

# 4. Accessing `id`

We can access the ID using:

```javascript
title.id
```

For:

```html
<h1 id="title">DOM Learning</h1>
```

the result is:

```text
"title"
```

We can also write:

```javascript
document.getElementById('title').id
```

Output:

```text
"title"
```

---

# 5. Accessing `class`

For:

```html
<h1 id="title" class="heading">
    DOM Learning
</h1>
```

we can access the class using:

```javascript
title.className
```

Output:

```text
"heading"
```

### Important

In JavaScript, use:

```javascript
element.className
```

not:

```javascript
element.class
```

---

# 6. `getAttribute()`

`getAttribute()` is used to **get the value of an HTML attribute**.

### Syntax

```javascript
element.getAttribute('attributeName')
```

Example:

```html
<h1 id="title" class="heading">
    DOM Learning
</h1>
```

Get the `id`:

```javascript
title.getAttribute('id')
```

Output:

```text
"title"
```

Get the `class`:

```javascript
title.getAttribute('class')
```

Output:

```text
"heading"
```

So these are similar:

```javascript
title.id
```

and:

```javascript
title.getAttribute('id')
```

Both return:

```text
"title"
```

---

# 7. Why Use `getAttribute()`?

`getAttribute()` can access **any attribute**, including custom/data attributes.

Example:

```html
<h1 id="title" class="heading" data-name="hello">
    DOM Learning
</h1>
```

We can access:

```javascript
title.getAttribute('data-name')
```

Output:

```text
"hello"
```

---

# 8. `setAttribute()`

`setAttribute()` is used to **add or change an attribute**.

### Syntax

```javascript
element.setAttribute('attributeName', 'value')
```

Example:

```javascript
title.setAttribute('class', 'newHeading')
```

Before:

```html
<h1 id="title" class="heading">
```

After:

```html
<h1 id="title" class="newHeading">
```

The old class has been replaced.

---

# 9. Creating a New Attribute

We can use `setAttribute()` to create an attribute that did not previously exist.

Example:

```javascript
title.setAttribute('toggle', 'vimbar')
```

The HTML can become:

```html
<h1 id="title" class="heading" toggle="vimbar">
```

### Important

`setAttribute()` does **not create a new HTML element**.

It creates or changes an **attribute**.

Before:

```html
<h1 id="title">
```

After:

```html
<h1 id="title" toggle="vimbar">
```

The `<h1>` is still the same element.

---

# 10. Custom Data Attributes

Although custom attributes can be created, the standard approach for storing custom data is to use `data-*`.

Instead of:

```javascript
title.setAttribute('toggle', 'vimbar')
```

prefer:

```javascript
title.setAttribute('data-toggle', 'vimbar')
```

Result:

```html
<h1 id="title" data-toggle="vimbar">
```

Access it using:

```javascript
title.getAttribute('data-toggle')
```

Output:

```text
"vimbar"
```

---

# 11. `removeAttribute()`

We can remove an attribute using:

```javascript
element.removeAttribute('attributeName')
```

Example:

```javascript
title.removeAttribute('class')
```

Before:

```html
<h1 id="title" class="heading">
```

After:

```html
<h1 id="title">
```

The `class` attribute has been removed.

---

# 12. Accessing CSS with `.style`

We can access and modify CSS using:

```javascript
element.style
```

Example:

```javascript
title.style.background = 'green'
```

We can change many CSS properties:

```javascript
title.style.color = 'white'
title.style.backgroundColor = 'green'
title.style.fontSize = '30px'
title.style.padding = '20px'
title.style.margin = '10px'
```

---

# 13. CSS Property Names in JavaScript

CSS normally uses kebab-case:

```css
background-color
font-size
border-color
```

JavaScript uses **camelCase**:

```javascript
backgroundColor
fontSize
borderColor
```

Example:

### CSS

```css
background-color: green;
```

### JavaScript

```javascript
title.style.backgroundColor = 'green'
```

---

# 14. CSS Values Usually Need Strings

This is incorrect:

```javascript
title.style.borderWidth = 10px
```

`10px` is not valid JavaScript syntax.

Use:

```javascript
title.style.borderWidth = '10px'
```

Similarly:

```javascript
title.style.fontSize = '30px'
title.style.padding = '20px'
title.style.margin = '10px'
```

---

# 15. Making a Border Visible

If we only write:

```javascript
title.style.borderColor = 'blue'
```

we may not see a border.

A border generally needs:

- Width
- Style
- Color

The easiest way:

```javascript
title.style.border = '2px solid blue'
```

Or separately:

```javascript
title.style.borderWidth = '2px'
title.style.borderStyle = 'solid'
title.style.borderColor = 'blue'
```

---

# 16. `innerHTML`

`innerHTML` gives us the **HTML inside an element**.

Suppose:

```html
<h1 id="title">
    DOM Learning
</h1>
```

Then:

```javascript
title.innerHTML
```

returns:

```text
"DOM Learning"
```

But if we have:

```html
<h1 id="title">
    DOM Learning <span>Hello</span>
</h1>
```

then:

```javascript
title.innerHTML
```

returns:

```html
DOM Learning <span>Hello</span>
```

Notice that the HTML tag is included:

```html
<span>Hello</span>
```

### Important

`innerHTML` can **read and write HTML**.

Example:

```javascript
title.innerHTML = 'Hello World'
```

Or:

```javascript
title.innerHTML = 'DOM Learning <span>Hello</span>'
```

The browser interprets `<span>` as an HTML element.

---

# 17. `innerText`

`innerText` deals with the **visible text** of an element.

Example:

```html
<h1 id="title">
    DOM Learning
</h1>
```

Then:

```javascript
title.innerText
```

returns:

```text
"DOM Learning"
```

We can also change it:

```javascript
title.innerText = 'Hello World'
```

The displayed text becomes:

```text
Hello World
```

---

# 18. `textContent`

`textContent` gets the **text content inside an element**, including text that may not currently be visible.

Example:

```html
<h1 id="title">
    DOM Learning
    <span style="display: none;">
        This is hidden
    </span>
</h1>
```

Now:

```javascript
title.innerText
```

may return:

```text
DOM Learning
```

because the `<span>` is hidden.

But:

```javascript
title.textContent
```

returns:

```text
DOM Learning This is hidden
```

because `textContent` does not care whether the text is visible.

---

# 19. `innerHTML` vs `innerText` vs `textContent`

This is one of the **most important DOM concepts**.

Suppose:

```html
<h1 id="title">
    DOM Learning
    <span style="display: none;">
        This is hidden
    </span>
</h1>
```

## `innerHTML`

```javascript
title.innerHTML
```

Returns the HTML:

```html
DOM Learning <span style="display: none;">This is hidden</span>
```

It sees the **HTML tags**.

---

## `innerText`

```javascript
title.innerText
```

Returns the **visible text**:

```text
DOM Learning
```

It cares about what the user can see.

---

## `textContent`

```javascript
title.textContent
```

Returns **all text**:

```text
DOM Learning This is hidden
```

It does not care whether the text is visible.

---

# 20. Easy Way to Remember

```text
innerHTML
    ↓
HTML + text

innerText
    ↓
Visible text

textContent
    ↓
All text
```

### Memory Trick

> **innerHTML → HTML**
>
> **innerText → what the user sees**
>
> **textContent → all text inside**

---

# 21. Example from DOM Practice

Initially:

```html
<h1 id="title">
    DOM (Document Object Model) learning with Chai with code
</h1>
```

All three return approximately the same text:

```javascript
title.innerHTML
```

```javascript
title.innerText
```

```javascript
title.textContent
```

Result:

```text
DOM (Document Object Model) learning with Chai with code
```

This happens because there is no nested HTML or hidden text.

---

# 22. After Adding `<span>`

Suppose:

```javascript
title.innerHTML =
    'DOM (Document Object Model) learning with Chai with code <span>this is not good</span>'
```

Now:

```javascript
title.innerHTML
```

returns:

```html
DOM (Document Object Model) learning with Chai with code <span>this is not good</span>
```

While:

```javascript
title.innerText
```

returns:

```text
DOM (Document Object Model) learning with Chai with code this is not good
```

And:

```javascript
title.textContent
```

also returns:

```text
DOM (Document Object Model) learning with Chai with code this is not good
```

Because the `<span>` is visible.

---

# 23. After Hiding the `<span>`

Suppose:

```html
<span style="display: none;">
    this is not good
</span>
```

Now:

```javascript
title.innerHTML
```

returns:

```html
DOM (Document Object Model) learning with Chai with code
<span style="display: none;">this is not good</span>
```

`innerText` returns:

```text
DOM (Document Object Model) learning with Chai with code
```

because the span is hidden.

But `textContent` returns:

```text
DOM (Document Object Model) learning with Chai with code this is not good
```

because the text still exists in the DOM.

---

# 24. DOM Cheat Sheet

| Property / Method | Purpose |
|---|---|
| `document` | Represents the webpage |
| `getElementById()` | Find element by ID |
| `.id` | Get/set ID |
| `.className` | Get/set class |
| `getAttribute()` | Get an attribute |
| `setAttribute()` | Add/change an attribute |
| `removeAttribute()` | Remove an attribute |
| `.style` | Access/modify inline CSS |
| `.innerHTML` | Get/set HTML inside an element |
| `.innerText` | Get/set visible text |
| `.textContent` | Get/set all text |

---

# 25. Complete Example

### HTML

```html
<h1 id="title" class="heading">
    DOM Learning
</h1>
```

### JavaScript

```javascript
const title = document.getElementById('title')

// Access ID
console.log(title.id)

// Access class
console.log(title.className)

// Get attributes
console.log(title.getAttribute('id'))
console.log(title.getAttribute('class'))

// Set attribute
title.setAttribute('data-name', 'heading')

// Get new attribute
console.log(title.getAttribute('data-name'))

// Change CSS
title.style.color = 'blue'
title.style.backgroundColor = 'yellow'
title.style.border = '2px solid black'

// Read content
console.log(title.innerHTML)
console.log(title.innerText)
console.log(title.textContent)
```

---

# 26. Overall DOM Concept

Don't think of DOM as a collection of random commands.

Think of it like this:

```text
                    document
                       │
                       ▼
              Find an element
                       │
                       ▼
          getElementById("title")
                       │
                       ▼
                    title
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
   Attributes         Style           Content
       │               │                │
       ▼               ▼                ▼
getAttribute()       style          innerHTML
setAttribute()                      innerText
removeAttribute()                   textContent
```

So the basic DOM workflow is:

### 1. Find the element

```javascript
const title = document.getElementById('title')
```

### 2. Access or modify the element

```javascript
title.id
title.className

title.getAttribute()
title.setAttribute()
title.removeAttribute()

title.style

title.innerHTML
title.innerText
title.textContent
```

---

# 27. Most Important Things to Remember

```text
document
    ↓
Access the webpage

getElementById()
    ↓
Find an element

getAttribute()
    ↓
Get an attribute

setAttribute()
    ↓
Add/change an attribute

removeAttribute()
    ↓
Remove an attribute

style
    ↓
Change CSS

innerHTML
    ↓
HTML inside element

innerText
    ↓
Visible text

textContent
    ↓
All text
```

---

# 28. Quick Revision

```javascript
// Find element
const title = document.getElementById('title')

// ID
title.id

// Class
title.className

// Get attribute
title.getAttribute('class')

// Set/change attribute
title.setAttribute('class', 'heading')

// Remove attribute
title.removeAttribute('class')

// CSS
title.style.color = 'blue'
title.style.border = '2px solid black'

// HTML
title.innerHTML

// Visible text
title.innerText

// All text
title.textContent
```

## Key Difference

| Method | Remember As |
|---|---|
| `getElementById()` | **Find element** |
| `getAttribute()` | **Get attribute** |
| `setAttribute()` | **Set attribute** |
| `removeAttribute()` | **Remove attribute** |
| `.style` | **Change CSS** |
| `innerHTML` | **HTML + text** |
| `innerText` | **Visible text** |
| `textContent` | **All text** |