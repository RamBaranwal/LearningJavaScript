# JavaScript DOM Events — Complete Notes

> **Topic:** JavaScript Events, Event Propagation, Bubbling, Capturing, Event Delegation
> **Level:** Beginner → Interview
> **Purpose:** Learn + revise + understand + recall

---

# 1. What is an Event in JavaScript?

An **event** is an action or occurrence that happens in the browser.

Examples:

* User clicks a button
* User moves the mouse
* User presses a keyboard key
* A form is submitted
* A page finishes loading
* An input value changes
* The mouse enters/leaves an element
* A link is clicked

JavaScript can **listen for these events** and execute some code when they occur.

### Simple example

```javascript
button.addEventListener('click', function() {
    console.log('Button clicked');
});
```

Meaning:

> "Browser, whenever this button is clicked, execute this function."

---

# 2. Common JavaScript Events

## Mouse Events

```text
click
dblclick
mousedown
mouseup
mousemove
mouseenter
mouseleave
mouseover
mouseout
contextmenu
```

Example:

```javascript
element.addEventListener('click', function() {
    console.log('Clicked');
});
```

---

## Keyboard Events

```text
keydown
keyup
keypress   // old/deprecated; prefer keydown/keyup
```

Example:

```javascript
document.addEventListener('keydown', function(e) {
    console.log(e.key);
});
```

---

## Form Events

```text
submit
change
input
focus
blur
```

Example:

```javascript
input.addEventListener('input', function(e) {
    console.log(e.target.value);
});
```

---

## Window/Document Events

```text
load
DOMContentLoaded
resize
scroll
beforeunload
```

Example:

```javascript
window.addEventListener('resize', function() {
    console.log('Window resized');
});
```

---

# 3. Three Common Ways to Handle Events

There are three commonly discussed approaches.

---

## 3.1 Inline HTML Event Handler

```html
<button onclick="alert('Clicked')">
    Click Me
</button>
```

This works, but it is generally **not recommended** for modern JavaScript.

### Problems

* HTML and JavaScript become mixed
* Harder to maintain
* Poor separation of concerns
* Less flexible

---

# 4. DOM Property Event Handler

Example:

```javascript
document.getElementById('owl').onclick = function() {
    alert('Owl clicked');
};
```

This is better than inline HTML, but there is an important limitation.

### Problem

Only one handler can effectively be assigned through the property.

```javascript
element.onclick = function() {
    console.log('First');
};

element.onclick = function() {
    console.log('Second');
};
```

Only:

```text
Second
```

will execute.

The second assignment replaces the first.

---

# 5. `addEventListener()` — Recommended

Modern JavaScript generally uses:

```javascript
element.addEventListener('event', function);
```

Example:

```javascript
document.getElementById('owl')
    .addEventListener('click', function() {
        alert('Owl clicked');
    });
```

---

# 6. Why `addEventListener()` is Better

You can attach multiple handlers.

```javascript
element.addEventListener('click', function() {
    console.log('First');
});

element.addEventListener('click', function() {
    console.log('Second');
});
```

Output:

```text
First
Second
```

The handlers are not replacing each other.

---

# 7. `attachEvent()`

Old Internet Explorer used:

```javascript
attachEvent()
```

Example from older JavaScript:

```javascript
element.attachEvent('onclick', function() {
    console.log('Clicked');
});
```

It is obsolete.

### Interview point

If asked:

> What was `attachEvent()`?

Answer:

> `attachEvent()` was an older Internet Explorer-specific event registration method. Modern JavaScript uses `addEventListener()`.

---

# 8. jQuery `on()`

jQuery commonly uses:

```javascript
$(element).on('click', function() {
    console.log('Clicked');
});
```

Example:

```javascript
$('#owl').on('click', function() {
    console.log('Owl clicked');
});
```

Modern vanilla JavaScript equivalent:

```javascript
document.getElementById('owl')
    .addEventListener('click', function() {
        console.log('Owl clicked');
    });
```

---

# 9. `addEventListener()` Syntax

```javascript
element.addEventListener(type, listener, options);
```

Example:

```javascript
element.addEventListener(
    'click',
    function(e) {
        console.log('Clicked');
    },
    false
);
```

There are **three parameters**:

```text
1. type
2. listener
3. options
```

---

## Parameter 1 — Event Type

```javascript
'click'
```

Examples:

```javascript
'click'
'keydown'
'mouseover'
'submit'
'input'
```

---

## Parameter 2 — Event Listener

The function that executes when the event happens.

```javascript
function(e) {
    console.log('Clicked');
}
```

---

## Parameter 3 — Capture/Options

You commonly see:

```javascript
false
```

or

```javascript
true
```

Historically:

```javascript
false → bubbling phase
true  → capturing phase
```

Modern JavaScript can also use an options object:

```javascript
element.addEventListener('click', handler, {
    capture: true
});
```

Other options include:

```javascript
{
    capture: true,
    once: true,
    passive: true
}
```

---

# 10. What is the Event Object?

When an event occurs, the browser creates an **event object** containing information about that event.

Example:

```javascript
element.addEventListener('click', function(e) {
    console.log(e);
});
```

Here:

```javascript
e
```

is the event object.

You can name it anything:

```javascript
function(e)
```

```javascript
function(event)
```

```javascript
function(evt)
```

All are valid.

---

# 11. PointerEvent

For mouse/pointer events, the browser may provide a:

```text
PointerEvent
```

object.

For example:

```javascript
document.getElementById('owl')
    .addEventListener('click', function(e) {
        console.log(e);
    });
```

The console may show many properties such as:

```text
type
target
currentTarget
clientX
clientY
screenX
screenY
altKey
ctrlKey
shiftKey
button
buttons
pointerId
pressure
etc.
```

---

# 12. Important Event Properties

Your notes mention several important properties.

Let's understand them.

---

# 13. `event.type`

Tells you what type of event occurred.

```javascript
element.addEventListener('click', function(e) {
    console.log(e.type);
});
```

Output:

```text
click
```

Another example:

```javascript
document.addEventListener('keydown', function(e) {
    console.log(e.type);
});
```

Output:

```text
keydown
```

### Recall

```text
type = "What event happened?"
```

---

# 14. `event.target`

`target` tells you the **actual element on which the event originally occurred**.

Example:

```html
<ul id="images">
    <li>
        <img id="owl">
    </li>
</ul>
```

JavaScript:

```javascript
document.getElementById('images')
    .addEventListener('click', function(e) {
        console.log(e.target);
    });
```

If you click the image:

```text
e.target = img
```

If you click the `li`:

```text
e.target = li
```

If you click directly on the `ul`:

```text
e.target = ul
```

### Recall

```text
target = Where did the event actually happen?
```

---

# 15. `event.currentTarget`

`currentTarget` tells you:

> Which element's event listener is currently executing?

Example:

```javascript
document.getElementById('images')
    .addEventListener('click', function(e) {

        console.log('target:', e.target);
        console.log('currentTarget:', e.currentTarget);

    });
```

If you click the image:

```text
target        → img
currentTarget → ul#images
```

### VERY IMPORTANT INTERVIEW QUESTION

### `target` vs `currentTarget`

```text
target
    ↓
Actual element clicked

currentTarget
    ↓
Element whose listener is currently running
```

Example:

```text
UL
 └── LI
      └── IMG
```

Listener is attached to:

```text
UL
```

Click:

```text
IMG
```

Then:

```javascript
e.target        // IMG
e.currentTarget // UL
```

---

# 16. `event.srcElement`

Older browser property.

```javascript
e.srcElement
```

Historically it was mainly used for Internet Explorer.

Modern JavaScript:

```javascript
e.target
```

is preferred.

---

# 17. `event.toElement`

An older/non-standard property associated with mouse events.

Modern JavaScript normally uses:

```javascript
relatedTarget
```

depending on the event.

For example, with mouse transition events:

```javascript
e.relatedTarget
```

is more appropriate.

### Interview recall

```text
srcElement → old browser property
toElement  → old/non-standard mouse-related property
target     → modern standard property
```

---

# 18. `event.timeStamp`

Tells you approximately when the event was created relative to the relevant event timing origin.

Example:

```javascript
element.addEventListener('click', function(e) {
    console.log(e.timeStamp);
});
```

You may see a number such as:

```text
12345.67
```

It is useful for timing/debugging.

---

# 19. `event.defaultPrevented`

Tells you whether the event's default action has been prevented.

Example:

```javascript
link.addEventListener('click', function(e) {

    e.preventDefault();

    console.log(e.defaultPrevented);

});
```

Output:

```text
true
```

### Recall

```text
defaultPrevented
        ↓
Was the browser's default action prevented?
```

---

# 20. `preventDefault()`

`preventDefault()` prevents the browser's **default action** for an event.

Example:

```html
<a href="https://google.com" id="google">
    Google
</a>
```

Normally:

```text
Click link
    ↓
Browser navigates to Google
```

But:

```javascript
document.getElementById('google')
    .addEventListener('click', function(e) {

        e.preventDefault();

        console.log('Google clicked');

    });
```

Now:

```text
Click link
    ↓
JavaScript runs
    ↓
Default navigation is prevented
```

---

# 21. `preventDefault()` Does NOT Stop Propagation

This is extremely important.

```javascript
e.preventDefault();
```

means:

> Stop the browser's default behavior.

It does **NOT** mean:

> Stop the event from traveling through the DOM.

Example:

```javascript
e.preventDefault();
```

The event can still bubble.

---

# 22. `stopPropagation()`

`stopPropagation()` stops the event from propagating further through the DOM.

Example:

```javascript
element.addEventListener('click', function(e) {

    e.stopPropagation();

    console.log('Clicked');

});
```

It prevents the event from continuing to other ancestors during propagation.

---

# 23. `preventDefault()` vs `stopPropagation()`

This is a very common interview question.

| Method                       | Purpose                                                                       |
| ---------------------------- | ----------------------------------------------------------------------------- |
| `preventDefault()`           | Stops browser's default action                                                |
| `stopPropagation()`          | Stops event propagation                                                       |
| `stopImmediatePropagation()` | Stops propagation + prevents other listeners on the same element from running |

### Easy memory trick

```text
preventDefault()
    ↓
Prevent DEFAULT browser behavior

stopPropagation()
    ↓
Stop event PROPAGATION
```

---

# 24. Event Propagation

When an event occurs on an element, it doesn't simply exist on that element.

It travels through the DOM's event propagation process.

There are three phases:

```text
1. Capturing phase
2. Target phase
3. Bubbling phase
```

Visual:

```text
Window
   ↓
Document
   ↓
HTML
   ↓
BODY
   ↓
UL
   ↓
LI
   ↓
IMG
   ↑
   ↑
   ↑
Bubbling
```

---

# 25. Event Capturing

Capturing means:

> Event travels from the top of the DOM toward the target.

Direction:

```text
Parent
  ↓
Child
  ↓
Target
```

Example:

```javascript
document.getElementById('images')
    .addEventListener('click', function() {
        console.log('UL clicked');
    }, true);

document.getElementById('owl')
    .addEventListener('click', function() {
        console.log('OWL clicked');
    }, true);
```

HTML:

```text
UL
 └── LI
      └── IMG
```

Click the image.

Output:

```text
UL clicked
OWL clicked
```

Because capture travels:

```text
UL → IMG
```

---

# 26. Event Bubbling

Bubbling is the opposite direction.

The event starts at the target and moves toward ancestors.

Direction:

```text
Target
  ↑
Parent
  ↑
Grandparent
```

Example:

```javascript
document.getElementById('owl')
    .addEventListener('click', function() {
        console.log('OWL clicked');
    }, false);

document.getElementById('images')
    .addEventListener('click', function() {
        console.log('UL clicked');
    }, false);
```

Click image.

Output:

```text
OWL clicked
UL clicked
```

Because:

```text
IMG
 ↑
LI
 ↑
UL
```

---

# 27. `true` vs `false`

For the third argument:

```javascript
addEventListener('click', handler, true);
```

means:

```text
Capture phase
```

While:

```javascript
addEventListener('click', handler, false);
```

means:

```text
Bubble phase
```

Modern equivalent:

```javascript
{
    capture: true
}
```

or:

```javascript
{
    capture: false
}
```

---

# 28. Complete Event Flow

Suppose:

```html
<ul>
    <li>
        <img>
    </li>
</ul>
```

You click:

```text
IMG
```

The event's propagation conceptually looks like:

```text
CAPTURING

window
  ↓
document
  ↓
html
  ↓
body
  ↓
ul
  ↓
li
  ↓
img

TARGET

img

BUBBLING

img
  ↑
li
  ↑
ul
  ↑
body
  ↑
html
  ↑
document
  ↑
window
```

### Remember

```text
Capture = Top → Bottom

Bubble = Bottom → Top
```

---

# 29. Event Target Phase

The target phase is when the event reaches the actual target.

Example:

```text
UL
 ↓
LI
 ↓
IMG ← TARGET
```

The `IMG` is the target.

---

# 30. `stopPropagation()` Example

HTML:

```html
<ul id="images">
    <li>
        <img id="owl">
    </li>
</ul>
```

JavaScript:

```javascript
document.getElementById('images')
    .addEventListener('click', function() {
        console.log('UL clicked');
    });

document.getElementById('owl')
    .addEventListener('click', function(e) {

        console.log('OWL clicked');

        e.stopPropagation();

    });
```

Click image.

Output:

```text
OWL clicked
```

The event doesn't continue to the `UL` listener.

---

# 31. Important Difference

This:

```javascript
e.stopPropagation();
```

doesn't mean:

```text
Don't perform the default browser action.
```

It means:

```text
Don't continue propagation.
```

And this:

```javascript
e.preventDefault();
```

doesn't mean:

```text
Don't propagate.
```

It means:

```text
Don't perform the default browser action.
```

---

# 32. `stopImmediatePropagation()`

Suppose:

```javascript
button.addEventListener('click', function(e) {
    console.log('First');
});

button.addEventListener('click', function(e) {
    console.log('Second');
});
```

Both listeners can execute.

But:

```javascript
button.addEventListener('click', function(e) {

    e.stopImmediatePropagation();

    console.log('First');

});
```

can prevent other listeners on that same element from running.

### Difference

```text
stopPropagation()
    ↓
Stops movement to other elements

stopImmediatePropagation()
    ↓
Stops movement
+
Stops other listeners on the same element
```

---

# 33. Keyboard Event Properties

Your notes mention:

```text
altKey
ctrlKey
shiftKey
keyCode
```

Let's understand them.

---

## `e.key`

Modern and recommended.

```javascript
document.addEventListener('keydown', function(e) {
    console.log(e.key);
});
```

Press:

```text
A
```

Output:

```text
a
```

Depending on modifier/case:

```text
A
```

Press Enter:

```text
Enter
```

Press Space:

```text
 
```

---

# 34. `e.code`

`code` represents the physical key position.

Example:

```javascript
document.addEventListener('keydown', function(e) {
    console.log(e.code);
});
```

Press A:

```text
KeyA
```

Press Enter:

```text
Enter
```

### `key` vs `code`

```text
key
 ↓
What character/action does this key represent?

code
 ↓
Which physical keyboard key was pressed?
```

---

# 35. `altKey`

Checks whether the Alt key was pressed.

```javascript
document.addEventListener('keydown', function(e) {

    if (e.altKey) {
        console.log('Alt is pressed');
    }

});
```

---

# 36. `ctrlKey`

Your comment says:

```text
cltKey
```

The correct property is:

```javascript
ctrlKey
```

Example:

```javascript
document.addEventListener('keydown', function(e) {

    if (e.ctrlKey) {
        console.log('Ctrl is pressed');
    }

});
```

Example:

```text
Ctrl + C
```

Both:

```javascript
e.ctrlKey
```

and:

```javascript
e.key
```

can be useful.

---

# 37. `shiftKey`

Checks whether Shift was pressed.

```javascript
document.addEventListener('keydown', function(e) {

    if (e.shiftKey) {
        console.log('Shift pressed');
    }

});
```

---

# 38. `keyCode`

You may encounter:

```javascript
e.keyCode
```

Example:

```javascript
if (e.keyCode === 13) {
    console.log('Enter');
}
```

But `keyCode` is **deprecated**.

Modern code should prefer:

```javascript
e.key === 'Enter'
```

Example:

```javascript
if (e.key === 'Enter') {
    console.log('Enter pressed');
}
```

### Interview point

If interviewer asks:

> What should you use instead of `keyCode`?

Answer:

```javascript
event.key
```

or sometimes:

```javascript
event.code
```

depending on the requirement.

---

# 39. Mouse Coordinates

Your notes contain:

```text
clientX
clientY
screenX
screenY
```

These are important.

---

# 40. `clientX` and `clientY`

Coordinates relative to the **viewport/browser window**.

```javascript
document.addEventListener('click', function(e) {
    console.log(e.clientX);
    console.log(e.clientY);
});
```

Think:

```text
Browser viewport
┌───────────────────────┐
│        ↓ Y            │
│    X →                │
│                       │
└───────────────────────┘
```

---

# 41. `screenX` and `screenY`

Coordinates relative to the **physical screen**.

```javascript
document.addEventListener('click', function(e) {
    console.log(e.screenX);
    console.log(e.screenY);
});
```

### Recall

```text
clientX/Y
    ↓
Browser viewport

screenX/Y
    ↓
Physical screen
```

---

# 42. `pageX` and `pageY`

Another important pair.

These are relative to the page/document, including scrolling.

```javascript
document.addEventListener('click', function(e) {
    console.log(e.pageX);
    console.log(e.pageY);
});
```

### Quick comparison

```text
clientX/Y → viewport
pageX/Y   → document/page
screenX/Y → physical screen
```

---

# 43. `tiltX` and `tiltY`

These are mainly relevant for pointer devices such as:

* stylus
* pen
* graphics tablet

Example:

```javascript
element.addEventListener('pointermove', function(e) {
    console.log(e.tiltX);
    console.log(e.tiltY);
});
```

They represent the tilt of the pointing device.

For ordinary mouse-click interview questions, they are less important.

---

# 44. `button` and `buttons`

Another useful pointer/mouse concept.

### `button`

Represents which mouse button caused an event.

Example:

```javascript
element.addEventListener('mousedown', function(e) {
    console.log(e.button);
});
```

Common values:

```text
0 → primary button
1 → middle button
2 → secondary/right button
```

### `buttons`

Represents the buttons currently held down.

---

# 45. Event Delegation

This is one of the **most important concepts in your code**.

Your HTML has:

```html
<ul id="images">

    <li>
        <img id="photoshop">
    </li>

    <li>
        <img id="japan">
    </li>

    <li>
        <img id="river">
    </li>

    <li>
        <img id="owl">
    </li>

</ul>
```

Instead of attaching listeners to every image:

```javascript
photoshop.addEventListener(...)
japan.addEventListener(...)
river.addEventListener(...)
owl.addEventListener(...)
```

you can attach **one listener to the parent**:

```javascript
document.getElementById('images')
    .addEventListener('click', function(e) {

        console.log(e.target);

    });
```

This is called:

# Event Delegation

---

# 46. Why Does Event Delegation Work?

Because of **event bubbling**.

Suppose:

```text
UL
 ↓
LI
 ↓
IMG
```

Click:

```text
IMG
```

Event bubbles:

```text
IMG
 ↑
LI
 ↑
UL
```

Therefore, the `UL` can detect that an image was clicked.

---

# 47. Your Final Code — Event Delegation

Your code:

```javascript
document.getElementById('images')
    .addEventListener('click', function (e) {

        console.log(e.target.tagName);

        if (e.target.tagName === 'IMG') {

            const removeIt = e.target.parentNode;

            console.log(e.target.id);

            removeIt.remove();
        }
    });
```

Let's understand every line.

---

# 48. Step 1 — Select Parent

```javascript
document.getElementById('images')
```

Find:

```html
<ul id="images">
```

So JavaScript gets the `UL`.

---

# 49. Step 2 — Attach Event Listener

```javascript
.addEventListener('click', function(e) {
```

Meaning:

> Whenever something inside this `UL` is clicked, run this function.

Because click events bubble.

---

# 50. Step 3 — `e.target`

```javascript
console.log(e.target);
```

Suppose we click:

```html
<img id="owl">
```

Then:

```javascript
e.target
```

is:

```html
<img id="owl">
```

---

# 51. Step 4 — `tagName`

```javascript
e.target.tagName
```

Returns the element's tag name.

For an image:

```text
IMG
```

For a list item:

```text
LI
```

For the unordered list:

```text
UL
```

Important:

```javascript
tagName
```

normally returns uppercase HTML tag names.

Therefore:

```javascript
e.target.tagName === 'IMG'
```

is correct.

---

# 52. Why Use the `if`?

You wrote:

```javascript
if(e.target.tagName === 'IMG') {
```

This is very important.

Suppose the user clicks directly on:

```text
UL
```

Then:

```javascript
e.target.tagName
```

is:

```text
UL
```

The condition:

```javascript
'UL' === 'IMG'
```

is false.

Nothing happens.

---

# 53. Why Did Your Earlier Code Have a Problem?

You had something like:

```javascript
document.getElementById('images')
    .addEventListener('click', function(e) {

        console.log(e.target.parentNode);

        const removeIt = e.target.parentNode;

        removeIt.remove();

    });
```

The problem is:

> You were assuming that the clicked target was always an image.

But it may not be.

Example:

```text
UL
 ├── LI
 │    └── IMG
 │
 └── LI
      └── IMG
```

If you click:

```text
UL
```

then:

```javascript
e.target
```

is:

```text
UL
```

and:

```javascript
e.target.parentNode
```

could be:

```text
BODY
```

Then you may accidentally remove something you didn't intend to remove.

---

# 54. Your `if` Fix

You correctly changed it to:

```javascript
if(e.target.tagName === 'IMG') {
```

Now:

```text
Click IMG
    ↓
Remove its LI

Click UL
    ↓
Do nothing

Click LI
    ↓
Do nothing
```

---

# 55. `parentNode`

Suppose:

```html
<li>
    <img id="owl">
</li>
```

Then:

```javascript
e.target
```

is:

```text
IMG
```

and:

```javascript
e.target.parentNode
```

is:

```text
LI
```

So:

```javascript
const removeIt = e.target.parentNode;
```

gets the `LI`.

---

# 56. `remove()`

```javascript
removeIt.remove();
```

removes that element from the DOM.

Example:

```javascript
const element = document.getElementById('owl');

element.remove();
```

The element is removed from the document.

---

# 57. Complete Flow of Your Project

When you click the owl:

```text
Click IMG#owl
       ↓
Browser creates event object
       ↓
Event reaches IMG
       ↓
Event bubbles
       ↓
Event reaches UL listener
       ↓
e.target = IMG
       ↓
e.target.tagName = "IMG"
       ↓
Condition is true
       ↓
e.target.parentNode = LI
       ↓
LI.remove()
       ↓
Owl disappears
```

---

# 58. Better Version Using `closest()`

Instead of:

```javascript
const removeIt = e.target.parentNode;
```

you can write:

```javascript
const removeIt = e.target.closest('li');
```

Example:

```javascript
document.getElementById('images')
    .addEventListener('click', function(e) {

        if (e.target.tagName === 'IMG') {

            const removeIt = e.target.closest('li');

            removeIt.remove();
        }

    });
```

This is often more robust if the HTML structure becomes more complicated.

For example:

```html
<li>
    <div>
        <span>
            <img>
        </span>
    </div>
</li>
```

Then:

```javascript
e.target.parentNode
```

only gives:

```text
SPAN
```

But:

```javascript
e.target.closest('li')
```

finds the nearest `LI`.

---

# 59. `parentNode` vs `parentElement`

### `parentNode`

Returns the parent node.

```javascript
element.parentNode
```

### `parentElement`

Returns the parent element.

```javascript
element.parentElement
```

Example:

```html
<li>
    <img>
</li>
```

```javascript
img.parentNode
```

→ `LI`

```javascript
img.parentElement
```

→ `LI`

For ordinary HTML DOM work, both commonly appear similar, but they are not conceptually identical.

---

# 60. `children` vs `childNodes`

Another important DOM interview topic.

Suppose:

```html
<ul>
    <li>One</li>
    <li>Two</li>
</ul>
```

### `children`

Returns element children.

```javascript
ul.children
```

### `childNodes`

Returns all child nodes, including things such as text nodes.

```javascript
ul.childNodes
```

### Recall

```text
children
    ↓
HTML elements

childNodes
    ↓
All node types
```

---

# 61. `firstChild` vs `firstElementChild`

```javascript
element.firstChild
```

can return a text node.

While:

```javascript
element.firstElementChild
```

returns the first HTML element.

Example:

```javascript
ul.firstElementChild
```

→ first `LI`

---

# 62. `getElementById()` vs `querySelector()`

You used:

```javascript
document.getElementById('images')
```

This finds an element by ID.

```javascript
document.getElementById('images')
```

You can also write:

```javascript
document.querySelector('#images')
```

Both can select the same element.

---

# 63. `querySelector()`

Uses CSS selector syntax.

```javascript
document.querySelector('#images')
```

ID:

```javascript
'#images'
```

Class:

```javascript
'.box'
```

Tag:

```javascript
'img'
```

Attribute:

```javascript
'input[type="text"]'
```

---

# 64. `querySelectorAll()`

Returns all matching elements.

```javascript
const images = document.querySelectorAll('img');
```

You get a:

```text
NodeList
```

Example:

```javascript
images.forEach(function(image) {
    console.log(image);
});
```

---

# 65. Event Listener Removal

You can remove an event listener using:

```javascript
removeEventListener()
```

But you need the **same function reference**.

Correct:

```javascript
function handleClick() {
    console.log('Clicked');
}

button.addEventListener('click', handleClick);

button.removeEventListener('click', handleClick);
```

This works.

---

## Incorrect

```javascript
button.addEventListener('click', function() {
    console.log('Clicked');
});

button.removeEventListener('click', function() {
    console.log('Clicked');
});
```

These are two different function objects.

Therefore the second one does not remove the first listener.

---

# 66. `once`

You can make an event listener execute only once.

```javascript
button.addEventListener('click', function() {
    console.log('Clicked once');
}, {
    once: true
});
```

Click 1:

```text
Clicked once
```

Click 2:

```text
nothing
```

---

# 67. `capture`

Instead of:

```javascript
true
```

modern code can use:

```javascript
{
    capture: true
}
```

Example:

```javascript
ul.addEventListener('click', handler, {
    capture: true
});
```

---

# 68. `passive`

Used mainly for events such as scrolling/touch events.

```javascript
element.addEventListener('touchmove', handler, {
    passive: true
});
```

A passive listener tells the browser that the listener will not call:

```javascript
preventDefault()
```

This can help browser performance for certain input/scrolling events.

---

# 69. Event Listener Options

Modern syntax:

```javascript
element.addEventListener('click', handler, {
    capture: false,
    once: true,
    passive: true
});
```

The most important options to remember:

```text
capture
once
passive
signal
```

---

# 70. `signal`

An `AbortController` can be used to remove an event listener.

Example:

```javascript
const controller = new AbortController();

button.addEventListener('click', function() {
    console.log('Clicked');
}, {
    signal: controller.signal
});
```

Later:

```javascript
controller.abort();
```

The listener is removed.

This is useful when managing the lifetime of event listeners.

---

# 71. `mouseenter` vs `mouseover`

Important interview topic.

### `mouseenter`

Fires when pointer enters the element.

It does not bubble in the same way as `mouseover`.

### `mouseover`

Fires when pointer moves onto an element and can bubble.

If there are nested elements, `mouseover` may fire as the pointer moves between them.

---

# 72. `mouseleave` vs `mouseout`

Similar concept:

```text
mouseleave
    ↓
Pointer leaves element

mouseout
    ↓
Pointer leaves element or moves between nested elements
```

`mouseout` bubbles, while `mouseleave` does not.

---

# 73. `click` Event

A click normally represents a user activation such as:

```text
Mouse click
Keyboard activation
```

Example:

```javascript
button.addEventListener('click', function(e) {
    console.log('Clicked');
});
```

---

# 74. `dblclick`

Double click:

```javascript
element.addEventListener('dblclick', function() {
    console.log('Double clicked');
});
```

---

# 75. `mousedown`

Fires when mouse button is pressed.

```javascript
element.addEventListener('mousedown', function() {
    console.log('Mouse button pressed');
});
```

---

# 76. `mouseup`

Fires when mouse button is released.

```javascript
element.addEventListener('mouseup', function() {
    console.log('Mouse button released');
});
```

---

# 77. `mousemove`

Fires when pointer moves.

```javascript
element.addEventListener('mousemove', function(e) {
    console.log(e.clientX, e.clientY);
});
```

Be careful: this can fire **many times**, so expensive work inside it can hurt performance.

---

# 78. `DOMContentLoaded`

Fires when the HTML document has been parsed.

```javascript
document.addEventListener('DOMContentLoaded', function() {
    console.log('HTML loaded');
});
```

It does not wait for every image/resource to finish loading.

---

# 79. `load`

`load` generally waits for the relevant resource and its dependent resources to finish loading.

Example:

```javascript
window.addEventListener('load', function() {
    console.log('Page fully loaded');
});
```

### Difference

```text
DOMContentLoaded
    ↓
HTML parsed

load
    ↓
Page/resources loaded
```

---

# 80. `input` vs `change`

Very important for forms.

### `input`

Runs as the value changes.

```javascript
input.addEventListener('input', function(e) {
    console.log(e.target.value);
});
```

If user types:

```text
H
He
Hel
Hell
Hello
```

the event can fire repeatedly.

### `change`

Usually fires when the value has been changed and the control commits that change, often after leaving the field for text inputs.

---

# 81. `submit`

Form submission event:

```javascript
form.addEventListener('submit', function(e) {

    e.preventDefault();

    console.log('Form submitted');

});
```

This is a common use of:

```javascript
preventDefault()
```

because you may want JavaScript to validate/process the form before allowing the browser's default submission.

---

# 82. Event Delegation — Interview Definition

### Interview answer

> Event delegation is a technique where an event listener is attached to a common ancestor instead of multiple child elements. It relies primarily on event bubbling and uses `event.target` or related DOM APIs to determine which child triggered the event.

Example:

```javascript
ul.addEventListener('click', function(e) {

    if (e.target.matches('img')) {
        console.log('Image clicked');
    }

});
```

---

# 83. Advantages of Event Delegation

## 1. Fewer event listeners

Instead of:

```text
100 images
100 listeners
```

you can have:

```text
1 parent listener
```

---

## 2. Better memory usage

Fewer listener registrations can reduce overhead.

---

## 3. Dynamic elements work

Suppose later JavaScript adds:

```javascript
const img = document.createElement('img');

ul.appendChild(img);
```

You don't necessarily need to attach another listener to that new image if the parent already has delegated handling.

---

# 84. Event Delegation Example

```javascript
const list = document.getElementById('images');

list.addEventListener('click', function(e) {

    if (e.target.matches('img')) {

        const li = e.target.closest('li');

        if (li) {
            li.remove();
        }

    }

});
```

This is a clean implementation of your project.

---

# 85. `matches()`

You can use:

```javascript
e.target.matches('img')
```

instead of:

```javascript
e.target.tagName === 'IMG'
```

Example:

```javascript
if (e.target.matches('img')) {
    console.log('Image clicked');
}
```

It uses CSS selector syntax.

You can write:

```javascript
e.target.matches('#owl')
```

or:

```javascript
e.target.matches('.image')
```

or:

```javascript
e.target.matches('img')
```

---

# 86. `closest()`

Finds the nearest ancestor that matches a selector.

```javascript
const li = e.target.closest('li');
```

If:

```text
IMG
 ↓
SPAN
 ↓
DIV
 ↓
LI
```

then:

```javascript
img.closest('li')
```

returns the `LI`.

---

# 87. Your Project — Clean Final Version

```javascript
const images = document.getElementById('images');

images.addEventListener('click', function(e) {

    if (e.target.matches('img')) {

        const li = e.target.closest('li');

        if (li) {
            li.remove();
        }

    }

});
```

This uses:

```text
getElementById()
addEventListener()
event object
event.target
matches()
closest()
remove()
event bubbling
event delegation
```

So this small project teaches many important DOM concepts.

---

# 88. Event Bubbling + Delegation Connection

This relationship is extremely important:

```text
Event Bubbling
      ↓
Parent can receive child events
      ↓
Event Delegation becomes possible
```

Remember:

> **Bubbling makes event delegation possible.**

---

# 89. Common Mistakes in Your Original Notes

## Mistake 1

You wrote:

```text
javascript is sequential
```

Better understanding:

JavaScript executes synchronous code in order, but browser JavaScript also works with asynchronous behavior through mechanisms such as:

```text
Web APIs
Event Loop
Task Queue
Microtask Queue
Promises
Timers
Events
```

So don't memorize:

> "JavaScript is only sequential."

Better:

> JavaScript executes synchronous code according to its execution model, while asynchronous operations are coordinated through the runtime and event loop.

---

# 90. Mistake 2 — `addEventListener` Has "3 Attributes"

Better terminology:

```text
addEventListener() has parameters.
```

Syntax:

```javascript
addEventListener(type, listener, options)
```

The third parameter can be:

```javascript
true
false
```

or an options object:

```javascript
{
    capture: true
}
```

---

# 91. Mistake 3 — `false` Means Only Bubbling

More precisely:

```javascript
false
```

means the listener is **not registered for the capture phase**, so for ordinary propagation it runs during the bubbling phase.

Don't think:

```text
false = bubbling event
```

The event itself still has its complete propagation lifecycle.

---

# 92. Mistake 4 — `stopPropagation()` Prevents "Above Nodes"

Your idea is close, but better wording is:

> `stopPropagation()` prevents the event from continuing to propagate to other nodes in the propagation path.

Not simply "above nodes."

---

# 93. Mistake 5 — `preventDefault()` and `stopPropagation()`

Never confuse:

```javascript
e.preventDefault();
```

with:

```javascript
e.stopPropagation();
```

Remember:

```text
preventDefault
    ↓
Browser action

stopPropagation
    ↓
DOM event movement
```

---

# 94. Important Event Object Cheat Sheet

```text
e.type
    → Event type

e.target
    → Actual event target

e.currentTarget
    → Element whose listener is running

e.preventDefault()
    → Prevent browser default action

e.stopPropagation()
    → Stop event propagation

e.stopImmediatePropagation()
    → Stop propagation + other listeners on same element

e.defaultPrevented
    → Whether default action was prevented

e.timeStamp
    → Event timing information

e.key
    → Key value

e.code
    → Physical keyboard key

e.altKey
    → Alt pressed?

e.ctrlKey
    → Ctrl pressed?

e.shiftKey
    → Shift pressed?

e.clientX
e.clientY
    → Viewport coordinates

e.pageX
e.pageY
    → Page/document coordinates

e.screenX
e.screenY
    → Screen coordinates

e.button
    → Mouse button involved
```

---

# 95. Event Propagation Cheat Sheet

```text
CAPTURING
    ↓
Window
Document
HTML
BODY
Parent
Child
Target

TARGET
    ↓
Actual target

BUBBLING
    ↑
Target
Child
Parent
BODY
HTML
Document
Window
```

### One-line memory trick

```text
CAPTURE = DOWN
BUBBLE  = UP
```

---

# 96. `target` vs `currentTarget` Cheat Sheet

Suppose:

```html
<ul id="images">
    <li>
        <img id="owl">
    </li>
</ul>
```

Listener:

```javascript
images.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
});
```

Click:

```text
IMG
```

Result:

```text
e.target
    ↓
IMG

e.currentTarget
    ↓
UL
```

### Memory trick

```text
target = clicked child

currentTarget = listener owner
```

---

# 97. `preventDefault` vs `stopPropagation` Cheat Sheet

```text
preventDefault()
       ↓
Stops browser's default action

Example:
<a href="...">
```

while:

```text
stopPropagation()
       ↓
Stops event propagation

Example:
IMG → LI → UL
```

---

# 98. Event Delegation Cheat Sheet

Instead of:

```javascript
img1.addEventListener(...)
img2.addEventListener(...)
img3.addEventListener(...)
img4.addEventListener(...)
```

use:

```javascript
ul.addEventListener('click', function(e) {

    if (e.target.matches('img')) {
        // handle image
    }

});
```

Because:

```text
IMG
 ↓
LI
 ↓
UL
```

Event bubbles.

---

# 99. Interview Questions

## Q1. What is an event?

An event is an occurrence/action detected by the browser, such as a click, keyboard input, form submission, or mouse movement.

---

## Q2. What is `addEventListener()`?

It registers a function to be executed when a specified event occurs on an element.

```javascript
element.addEventListener('click', handler);
```

---

## Q3. What are the parameters of `addEventListener()`?

```javascript
addEventListener(type, listener, options)
```

Example:

```javascript
element.addEventListener('click', handler, false);
```

---

## Q4. What is event bubbling?

Event bubbling is the propagation of an event from the target toward its ancestors.

```text
IMG → LI → UL → BODY → HTML → DOCUMENT
```

---

## Q5. What is event capturing?

Capturing is propagation from ancestors toward the target.

```text
DOCUMENT → HTML → BODY → UL → LI → IMG
```

---

## Q6. What is event delegation?

Attaching one event listener to a parent/common ancestor to handle events from its child elements.

It commonly relies on event bubbling.

---

## Q7. What is `event.target`?

The actual element where the event originated.

---

## Q8. What is `event.currentTarget`?

The element whose event listener is currently executing.

---

## Q9. Difference between target and currentTarget?

```text
target
    → Actual event origin

currentTarget
    → Element handling the event
```

---

## Q10. What does `preventDefault()` do?

Prevents the browser's default action.

Example:

```javascript
e.preventDefault();
```

---

## Q11. What does `stopPropagation()` do?

Stops the event from continuing through the propagation path.

---

## Q12. Difference between `preventDefault()` and `stopPropagation()`?

```text
preventDefault()
    → Browser behavior

stopPropagation()
    → DOM propagation
```

---

## Q13. What is `stopImmediatePropagation()`?

It prevents further propagation and prevents other listeners on the same element from executing.

---

## Q14. Why is event delegation useful?

Because it:

* reduces the number of listeners
* can improve maintainability
* works well with dynamically added children
* uses bubbling

---

## Q15. Why does event delegation work?

Because events such as `click` bubble from the target to ancestors.

---

## Q16. What does `tagName` return?

It returns the tag name of an element.

Example:

```javascript
element.tagName
```

returns:

```text
DIV
IMG
UL
LI
```

---

## Q17. Why is `tagName === 'IMG'` uppercase?

HTML tag names are generally returned in uppercase for HTML documents.

---

## Q18. What is `closest()`?

It finds the nearest ancestor, including the element itself, that matches a CSS selector.

```javascript
element.closest('li');
```

---

## Q19. What is `matches()`?

It checks whether an element matches a CSS selector.

```javascript
element.matches('img');
```

Returns:

```text
true / false
```

---

## Q20. What is `keyCode`?

An old/deprecated keyboard event property. Modern code should generally use:

```javascript
event.key
```

or:

```javascript
event.code
```

---

# 100. Tricky Interview Question

### Question:

If I click an image and both `IMG` and `UL` have click listeners, which executes first?

If both use:

```javascript
false
```

then:

```text
IMG listener
    ↓
UL listener
```

because bubbling occurs.

If both use:

```javascript
true
```

then:

```text
UL listener
    ↓
IMG listener
```

because capturing occurs.

---

# 101. Another Tricky Question

### What happens if `preventDefault()` is called?

It does **not automatically stop bubbling**.

Example:

```javascript
link.addEventListener('click', function(e) {
    e.preventDefault();
});

ul.addEventListener('click', function() {
    console.log('UL');
});
```

The `UL` listener can still execute.

Why?

Because:

```text
preventDefault()
    ≠
stopPropagation()
```

---

# 102. Another Tricky Question

### What happens if `stopPropagation()` is called?

The browser's default action may still happen.

Example:

```javascript
link.addEventListener('click', function(e) {

    e.stopPropagation();

});
```

The event may still perform its default navigation.

To prevent navigation:

```javascript
e.preventDefault();
```

---

# 103. Practical Mental Model

Whenever you see:

```javascript
element.addEventListener('click', function(e) {

});
```

ask yourself these questions:

```text
1. What event?
       ↓
     click

2. Which element has the listener?
       ↓
     element

3. What is the actual clicked element?
       ↓
     e.target

4. Is the event bubbling?
       ↓
     Usually yes for click

5. What is currentTarget?
       ↓
     element

6. Is default behavior needed?
       ↓
     preventDefault()

7. Should propagation stop?
       ↓
     stopPropagation()

8. Am I handling many children?
       ↓
     Consider event delegation
```

---

# 104. Your Entire Example in Concept Form

Your HTML:

```text
UL#images
│
├── LI
│    └── IMG#photoshop
│
├── LI
│    └── IMG#japan
│
├── LI
│    └── IMG#river
│
├── LI
│    └── IMG#owl
│
├── LI
│    └── IMG#prayer
│
└── LI
     └── A#google
```

Your listener:

```javascript
images.addEventListener('click', function(e) {
```

means:

```text
Listen for clicks on UL.
```

Because click bubbles:

```text
IMG
 ↓
LI
 ↓
UL
```

The `UL` receives the event.

Then:

```javascript
e.target
```

tells us what was actually clicked.

Then:

```javascript
e.target.tagName === 'IMG'
```

checks:

```text
Was an image clicked?
```

Then:

```javascript
e.target.parentNode
```

gets:

```text
LI
```

Then:

```javascript
remove()
```

removes the `LI`.

---

# 105. Best Version of Your Current Code

```javascript
const images = document.getElementById('images');

images.addEventListener('click', function(e) {

    if (e.target.matches('img')) {

        const removeIt = e.target.closest('li');

        if (removeIt) {
            removeIt.remove();
        }

    }

});
```

This is a good version to remember for your current project.

---

# 106. Super Short Revision

If you have only 2 minutes before an interview, remember this:

```text
EVENT
 ↓
Something happens in browser.

addEventListener()
 ↓
Listen for event.

event.target
 ↓
Actual element where event originated.

event.currentTarget
 ↓
Element whose listener is running.

CAPTURE
 ↓
Parent → Child

BUBBLE
 ↓
Child → Parent

preventDefault()
 ↓
Stop browser's default action.

stopPropagation()
 ↓
Stop event propagation.

stopImmediatePropagation()
 ↓
Stop propagation + other listeners on same element.

EVENT DELEGATION
 ↓
Put one listener on parent
and handle child events using event.target.

closest()
 ↓
Find nearest matching ancestor.

matches()
 ↓
Check whether element matches selector.

tagName
 ↓
Get tag name.

key
 ↓
Keyboard key/value.

code
 ↓
Physical keyboard key.

ctrlKey
altKey
shiftKey
 ↓
Modifier keys.

clientX/Y
 ↓
Viewport coordinates.

pageX/Y
 ↓
Page/document coordinates.

screenX/Y
 ↓
Physical screen coordinates.
```

---

# 107. Final Interview Memory Diagram

```text
                         EVENT
                           │
                           ▼
                    ┌──────────────┐
                    │   Browser    │
                    │ creates      │
                    │ event object │
                    └──────┬───────┘
                           │
                           ▼
                     CAPTURING
                           │
                    Parent → Child
                           │
                           ▼
                         TARGET
                           │
                           ▼
                      BUBBLING
                           │
                    Child → Parent
                           │
                           ▼
                   Event Delegation
                           │
                           ▼
                      event.target
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
           matches()    closest()    tagName
              │            │            │
              └────────────┼────────────┘
                           ▼
                      DOM Action
                           │
                           ▼
                        remove()
```

---

# 108. The Most Important 10 Things to Memorize

If you're learning DOM events for interviews, prioritize these:

```text
1. addEventListener()

2. Event object

3. event.target

4. event.currentTarget

5. Event bubbling

6. Event capturing

7. preventDefault()

8. stopPropagation()

9. Event delegation

10. closest() / matches()
```

Then learn:

```text
11. key / code
12. ctrlKey / altKey / shiftKey
13. clientX / clientY
14. pageX / pageY
15. screenX / screenY
16. removeEventListener()
17. once / capture / passive
18. DOMContentLoaded / load
19. input / change / submit
20. mouse events
```

---

# 109. One-Line Interview Answers

```text
Event:
An action or occurrence detected by the browser.

addEventListener:
Registers an event handler.

Event bubbling:
Event propagates from target toward ancestors.

Event capturing:
Event propagates from ancestors toward target.

event.target:
Actual element where event originated.

event.currentTarget:
Element whose listener is currently executing.

preventDefault:
Prevents the browser's default action.

stopPropagation:
Stops event propagation.

stopImmediatePropagation:
Stops propagation and other listeners on the same element.

Event delegation:
Handling child events through a common ancestor listener.

closest:
Finds the nearest matching ancestor.

matches:
Checks whether an element matches a CSS selector.

key:
Represents the pressed keyboard key/value.

code:
Represents the physical keyboard key.

clientX/Y:
Coordinates relative to viewport.

pageX/Y:
Coordinates relative to page/document.

screenX/Y:
Coordinates relative to physical screen.
```

---

# 110. Final Recall Formula

When solving DOM event problems, think:

```text
WHERE DID IT HAPPEN?
        ↓
    event.target

WHO IS HANDLING IT?
        ↓
 event.currentTarget

WHICH WAY IS IT GOING?
        ↓
capture / bubble

SHOULD BROWSER DEFAULT STOP?
        ↓
 preventDefault()

SHOULD EVENT TRAVEL STOP?
        ↓
 stopPropagation()

MANY CHILDREN?
        ↓
event delegation

FIND PARENT?
        ↓
closest()

CHECK ELEMENT?
        ↓
matches()

REMOVE ELEMENT?
        ↓
remove()
```

> **Core concept to remember:**
> **Event → Propagation → Target → Handler → DOM action**
