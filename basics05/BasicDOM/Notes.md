# DOM (Document Object Model)

## What is DOM?

**DOM** stands for **Document Object Model**.

The DOM is a representation of an HTML webpage that allows **JavaScript to access and dynamically change the webpage**.

JavaScript can use the DOM to:

* Change HTML content
* Change CSS styles
* Add or remove elements
* Change attributes
* Handle events like clicks
* Create new HTML elements

---

## DOM Structure

The basic structure looks like a **tree**:

```text
Window
  |
  ↓
Document (DOM)
  |
  ↓
HTML
  |
  ├───────────────┐
  ↓               ↓
Head             Body
  |               |
  ├───────┐       ├───────────────┐
  ↓       ↓       ↓               ↓
Meta    Title    Div             H1
          |       |               |
          ↓       ↓               ↓
       Text Node Attribute     Text Node
```

---

## 1. Window

`window` represents the **browser window**.

It is the top-level object in the browser.

Example:

```javascript
window.alert("Hello");
```

We can also write:

```javascript
alert("Hello");
```

because many browser APIs are available through `window`.

---

## 2. Document

Inside the `window`, we have the **document**.

```text
Window
  |
  ↓
Document
```

The `document` represents the current HTML webpage.

JavaScript mainly uses `document` to interact with the webpage.

Example:

```javascript
document.title = "My Website";
```

---

## 3. HTML

The `document` contains the main `<html>` element.

```html
<html>
    ...
</html>
```

The `<html>` element generally contains:

```text
HTML
 |
 ├── Head
 |
 └── Body
```

---

## 4. Head

The `<head>` contains information about the webpage.

Example:

```html
<head>
    <meta charset="UTF-8">
    <title>My Website</title>
</head>
```

Common elements inside `<head>`:

* `<meta>`
* `<title>`
* `<link>`
* `<style>`
* `<script>`

---

## 5. Body

The `<body>` contains the **visible content** of the webpage.

Example:

```html
<body>
    <div>
        <h1>Hello World</h1>
        <p>Welcome to my website</p>
    </div>
</body>
```

The body can contain elements such as:

* `<div>`
* `<h1>`
* `<p>`
* `<button>`
* `<img>`
* `<input>`

---

# Nodes in the DOM

Everything in the DOM is represented as a **node**.

Important types of nodes are:

### 1. Element Node

HTML elements are element nodes.

```html
<h1>Hello</h1>
```

Here:

```text
<h1>
```

is an **element node**.

---

### 2. Text Node

The text inside an HTML element is represented as a text node.

```html
<h1>Hello World</h1>
```

DOM:

```text
H1
 |
 ↓
Text Node
"Hello World"
```

---

### 3. Attribute

Attributes provide additional information about an HTML element.

Example:

```html
<div id="box" class="container">
    Hello
</div>
```

Here:

```text
div
 |
 ├── id = "box"
 └── class = "container"
```

`id` and `class` are **attributes**.

---

# Example DOM Tree

HTML:

```html
<html>
    <head>
        <meta charset="UTF-8">
        <title>My Website</title>
    </head>

    <body>
        <div id="box">
            <h1>Hello</h1>
            <h2>Welcome</h2>
            <p>This is my website</p>
        </div>
    </body>
</html>
```

DOM representation:

```text
Window
   |
   ↓
Document
   |
   ↓
HTML
   |
   ├────────────────────────┐
   ↓                        ↓
 Head                      Body
   |                        |
   ├───────┐                ↓
   ↓       ↓               Div
 Meta    Title              |
           |            ┌───┼────┬────┐
           ↓            ↓   ↓    ↓    ↓
       Text Node        H1  H2    P   Attribute
       "My Website"     |   |    |   id="box"
                        ↓   ↓    ↓
                       Text Text Text
                       "Hello" "Welcome"
                                    "This is my website"
```

---

# Why Do We Need DOM?

Without the DOM, JavaScript would not have an easy way to interact with HTML elements.

For example, HTML:

```html
<h1 id="heading">Hello</h1>
```

JavaScript can access it:

```javascript
let heading = document.getElementById("heading");
```

And change its content:

```javascript
heading.textContent = "Hello JavaScript";
```

The webpage will dynamically change from:

```text
Hello
```

to:

```text
Hello JavaScript
```

---

# Simple Way to Remember

```text
Window
   ↓
Document (DOM)
   ↓
HTML
   ↓
Head + Body
   ↓
HTML Elements
   ↓
Attributes + Text Nodes
```

### In one sentence:

> **DOM is a tree-like representation of an HTML webpage that JavaScript uses to access and dynamically modify the webpage.**
