# JavaScript DOM --- Complete Notes

## 1. Accessing a Webpage Using `document`

In the DOM, we generally start accessing elements of the webpage through
the `document` object.

``` javascript
document.getElementById('title').id;
// return title id name
```

For example, if the HTML is:

``` html
<h1 id="title" class="heading">DOM Learning</h1>
```

Then:

``` javascript
document.getElementById('title').id;
// "title"
```

We can also access the class name:

``` javascript
document.getElementById('title').className;
// "heading"
```

The important point is:

``` javascript
document
```

represents the webpage/document, and methods such as `getElementById()`,
`querySelector()`, and `querySelectorAll()` are used to find elements
inside it.

------------------------------------------------------------------------

# 2. `getAttribute()`

`getAttribute()` is used to **read the value of an attribute** from an
HTML element.

Example:

``` javascript
document.getElementById('title').getAttribute('id');
```

Output:

``` text
"title"
```

If the element is:

``` html
<h1 id="title" class="heading">DOM Learning</h1>
```

Then:

``` javascript
document.getElementById('title').getAttribute('id');
// "title"

document.getElementById('title').getAttribute('class');
// "heading"
```

We can use it for other attributes too:

``` javascript
document.getElementById('title').getAttribute('class');
document.getElementById('title').getAttribute('id');
```

### Simple meaning

``` text
getAttribute() = get/read an attribute
```

------------------------------------------------------------------------

# 3. `setAttribute()`

`setAttribute()` is used to **set/change an attribute** of an HTML
element.

Example:

``` javascript
document.getElementById('title').setAttribute('class', 'heading');
```

This sets the `class` attribute to `heading`.

We can also change an existing attribute:

``` javascript
document.getElementById('title').setAttribute('id', 'newTitle');
```

Now the element's `id` becomes:

``` html
id="newTitle"
```

------------------------------------------------------------------------

# 4. Creating a New Attribute Using `setAttribute()`

`setAttribute()` can also create an attribute that did not exist before.

For example:

``` javascript
document.getElementById('title').setAttribute('toggle', 'vimbar');
```

If the element originally was:

``` html
<h1 id="title" class="heading">DOM Learning</h1>
```

After `setAttribute()` it becomes conceptually:

``` html
<h1 id="title" class="heading" toggle="vimbar">
    DOM Learning
</h1>
```

So `toggle` did not have to exist before.

### Important

HTML allows custom attributes syntactically, but for
application-specific custom data, the recommended HTML approach is
usually a `data-*` attribute:

``` javascript
document.getElementById('title').setAttribute('data-toggle', 'vimbar');
```

Then it appears as:

``` html
data-toggle="vimbar"
```

------------------------------------------------------------------------

# 5. Accessing Style Through DOM

We can access an element's CSS styles using the `.style` property.

Example:

``` javascript
const title = document.getElementById('title');
```

Now we can change its background:

``` javascript
title.style.background = 'green';
```

We can change the text color:

``` javascript
title.style.color = 'red';
```

We can change the border:

``` javascript
title.style.borderColor = 'blue';
title.style.borderWidth = '10px';
title.style.borderStyle = 'solid';
```

For a visible border, all three are useful:

``` javascript
title.style.borderColor = 'blue';
title.style.borderWidth = '10px';
title.style.borderStyle = 'solid';
```

Or in one line:

``` javascript
title.style.border = '10px solid blue';
```

### Important

CSS values that are strings should normally be written inside quotes:

``` javascript
title.style.borderWidth = '10px';
```

Not:

``` javascript
title.style.borderWidth = 10px;
```

because `10px` by itself is not valid JavaScript syntax.

------------------------------------------------------------------------

# 6. `innerHTML`

`innerHTML` gives us the HTML content inside an element.

Example:

``` javascript
title.innerHTML
```

Output:

``` text
"DOM (Document Object Model) learning with Chai with code"
```

If the HTML is:

``` html
<h1 id="title">
    DOM (Document Object Model) learning with Chai with code
</h1>
```

then:

``` javascript
title.innerHTML
```

returns the HTML inside the element.

It can also contain HTML tags.

Example:

``` html
<h1 id="title">
    DOM (Document Object Model) learning with Chai with code
    <span>this is not good</span>
</h1>
```

Then:

``` javascript
title.innerHTML
```

returns something like:

``` text
DOM (Document Object Model) learning with Chai with code <span>this is not good</span>
```

------------------------------------------------------------------------

# 7. `innerText`

`innerText` gives the **visible text** inside an element.

Example:

``` javascript
title.innerText
```

Output:

``` text
DOM (Document Object Model) learning with Chai with code
```

If we add:

``` html
<span>this is not good</span>
```

then:

``` javascript
title.innerText
```

will include the visible text:

``` text
DOM (Document Object Model) learning with Chai with code this is not good
```

If an element is hidden with CSS:

``` html
<span style="display: none;">this is not good</span>
```

then `innerText` normally does not include that hidden text.

------------------------------------------------------------------------

# 8. `textContent`

`textContent` gives the text content inside the element, including text
that may be hidden by CSS.

Example:

``` javascript
title.textContent
```

If the HTML is:

``` html
<h1 id="title">
    DOM (Document Object Model) learning with Chai with code
    <span style="display: none;">this is not good</span>
</h1>
```

then:

``` javascript
title.textContent
```

can return:

``` text
DOM (Document Object Model) learning with Chai with code this is not good
```

even though the `<span>` is hidden.

------------------------------------------------------------------------

# 9. Difference Between `innerHTML`, `innerText`, and `textContent`

Suppose the HTML is:

``` html
<h1 id="title">
    DOM (Document Object Model) learning with Chai with code
    <span style="display: none;">this is not good</span>
</h1>
```

### `innerHTML`

Returns the HTML structure:

``` javascript
title.innerHTML
```

Example result:

``` text
DOM (Document Object Model) learning with Chai with code <span style="display: none;">this is not good</span>
```

### `innerText`

Returns the text that is visually rendered:

``` javascript
title.innerText
```

Example result:

``` text
DOM (Document Object Model) learning with Chai with code
```

### `textContent`

Returns the text content, including hidden text:

``` javascript
title.textContent
```

Example result:

``` text
DOM (Document Object Model) learning with Chai with code this is not good
```

### Easy way to remember

``` text
innerHTML   → HTML + text
innerText   → visible text
textContent → all text content
```

------------------------------------------------------------------------

# 10. Changing Content With `innerText`

We can change the visible text:

``` javascript
title.innerText =
    'DOM (Document Object Model) learning with Chai with code this is not good';
```

Now the heading displays the new text.

------------------------------------------------------------------------

# 11. Changing Content With `innerHTML`

We can also insert HTML:

``` javascript
title.innerHTML =
    'DOM (Document Object Model) learning with Chai with code <span>this is not good</span>';
```

Now the `<span>` becomes an actual HTML element inside the heading.

This is an important difference:

``` javascript
innerText
```

treats the value as text.

``` javascript
innerHTML
```

can interpret HTML tags.

------------------------------------------------------------------------

# 12. `querySelector()`

`querySelector()` selects the **first element** that matches a CSS
selector.

Example:

``` javascript
document.querySelector('#title')
```

This selects the element with:

``` html
id="title"
```

Example output:

``` html
<h1 id="title" class="heading">...</h1>
```

------------------------------------------------------------------------

# 13. Selecting an Element by Class

``` javascript
document.querySelector('.heading')
```

The `.` means class.

So:

``` javascript
document.querySelector('.heading')
```

selects the first element with:

``` html
class="heading"
```

------------------------------------------------------------------------

# 14. Selecting an Element by ID

``` javascript
document.querySelector('#title')
```

The `#` means ID.

So:

``` javascript
document.querySelector('#title')
```

selects:

``` html
id="title"
```

### Remember

``` text
#title     → ID
.heading   → class
h1         → tag
```

------------------------------------------------------------------------

# 15. Selecting an Input

We can select the first `<input>` element:

``` javascript
document.querySelector('input')
```

Example output:

``` html
<input type="password" name="pass" id="pass">
```

We can also select an input using an attribute selector:

``` javascript
document.querySelector('input[type="password"]')
```

This means:

``` text
Find an input whose type is password.
```

------------------------------------------------------------------------

# 16. `querySelectorAll()`

`querySelectorAll()` selects **all elements** that match a CSS selector.

Example:

``` javascript
document.querySelectorAll('h2')
```

If there are many `<h2>` elements, it returns:

``` text
NodeList(...)
```

For example:

``` javascript
document.querySelectorAll('h2')[0]
```

gets the first `<h2>`.

``` javascript
document.querySelectorAll('h2')[2]
```

gets the third `<h2>`.

### Important

Index starts from `0`.

``` text
[0] → first
[1] → second
[2] → third
```

------------------------------------------------------------------------

# 17. `querySelectorAll()` Returns a NodeList

Example:

``` javascript
const tempLiList = document.querySelectorAll('li');
```

The result is:

``` text
NodeList(3) [li, li, li]
```

This is **not an Array**.

It is a:

``` text
NodeList
```

A NodeList has useful properties/methods, including:

``` javascript
length
forEach()
entries()
keys()
values()
```

For example:

``` javascript
tempLiList.forEach(function (l) {
    l.style.background = 'Green';
});
```

This works because `NodeList` supports `forEach()`.

------------------------------------------------------------------------

# 18. Accessing Individual Elements From a NodeList

We can use indexes:

``` javascript
tempLiList[0]
```

gets the first `<li>`.

``` javascript
tempLiList[1]
```

gets the second `<li>`.

Example:

``` javascript
tempLiList[0].style.color = 'Yellow';
```

This changes the first `<li>` text color.

We can change font size:

``` javascript
tempLiList[0].style.fontSize = '30px';
```

------------------------------------------------------------------------

# 19. Applying the Same Style to All Elements

Because `querySelectorAll()` returns a NodeList, we can use `forEach()`:

``` javascript
const tempLiList = document.querySelectorAll('li');

tempLiList.forEach(function (l) {
    l.style.background = 'Green';
});
```

This applies the green background to every `<li>`.

We can also do:

``` javascript
tempLiList.forEach(function (l) {
    l.style.background = 'Green';
    l.style.color = 'White';
});
```

------------------------------------------------------------------------

# 20. Selecting an Element Inside Another Element

First select the `<ul>`:

``` javascript
const myul = document.querySelector('ul');
```

Then search inside that `<ul>`:

``` javascript
const first = myul.querySelector('li');
```

This selects the first `<li>` inside that particular `<ul>`.

Now we can change its style:

``` javascript
first.style.background = 'Green';
```

------------------------------------------------------------------------

# 21. Selecting the Second `<li>` Inside the `<ul>`

We can use:

``` javascript
const second = myul.querySelectorAll('li')[1];
```

Then:

``` javascript
second.style.background = 'Blue';
```

Remember:

``` text
[0] → first li
[1] → second li
[2] → third li
```

------------------------------------------------------------------------

# 22. `getElementsByClassName()`

Another way to select elements is:

``` javascript
document.getElementsByClassName('list-item')
```

Example result:

``` text
HTMLCollection(4) [
    li.list-item,
    li.list-item,
    li.list-item,
    li.list-item
]
```

This is an:

``` text
HTMLCollection
```

It is **not an Array**.

------------------------------------------------------------------------

# 23. NodeList vs HTMLCollection

### `querySelectorAll()`

``` javascript
document.querySelectorAll('li')
```

returns:

``` text
NodeList
```

### `getElementsByClassName()`

``` javascript
document.getElementsByClassName('list-item')
```

returns:

``` text
HTMLCollection
```

Neither one is a normal JavaScript Array.

That is why you may not see all normal Array methods such as:

``` javascript
map()
filter()
reduce()
```

directly available.

------------------------------------------------------------------------

# 24. Converting HTMLCollection Into an Array

We can convert the HTMLCollection into a real Array using:

``` javascript
const convertedIntoArray =
    Array.from(document.getElementsByClassName('list-item'));
```

Now:

``` javascript
convertedIntoArray
```

is a real Array.

It has Array methods such as:

``` javascript
map()
filter()
reduce()
forEach()
push()
pop()
```

------------------------------------------------------------------------

# 25. Using `forEach()` After Converting to an Array

``` javascript
const convertedIntoArray =
    Array.from(document.getElementsByClassName('list-item'));

convertedIntoArray.forEach(function (list) {
    list.style.background = 'Pink';
});
```

We can also change the text color:

``` javascript
convertedIntoArray.forEach(function (list) {
    list.style.color = 'Blue';
});
```

------------------------------------------------------------------------

# 26. `getElementById()` Returns `null` When the ID Does Not Exist

Example:

``` javascript
document.getElementById('h2')
```

If there is no element with:

``` html
id="h2"
```

the result is:

``` text
null
```

This is different from selecting all `<h2>` tags.

``` javascript
document.querySelectorAll('h2')
```

selects all `<h2>` elements.

### Important difference

``` javascript
document.getElementById('h2')
```

means:

``` text
Find the element whose ID is h2.
```

It does NOT mean:

``` text
Find all h2 tags.
```

For all `<h2>` tags:

``` javascript
document.querySelectorAll('h2')
```

------------------------------------------------------------------------

# 27. Styling One Specific `<h2>`

Suppose:

``` javascript
document.querySelectorAll('h2')
```

returns many `<h2>` elements.

We can access the third one:

``` javascript
document.querySelectorAll('h2')[2]
```

Then change its padding:

``` javascript
document.querySelectorAll('h2')[2].style.padding = '300px';
```

To remove that padding:

``` javascript
document.querySelectorAll('h2')[2].style.padding = '0px';
```

------------------------------------------------------------------------

# 28. Styling All `<h2>` Elements

First select all `<h2>` elements:

``` javascript
const h2List = document.querySelectorAll('h2');
```

Then use `forEach()`:

``` javascript
h2List.forEach(function (allItems) {
    allItems.style.color = 'Red';
});
```

Now every `<h2>` becomes red.

------------------------------------------------------------------------

# 29. Applying Multiple Styles to Every `<h2>`

We can apply multiple CSS properties:

``` javascript
h2List.forEach(function (allItems) {
    allItems.style.color = 'Red';
    allItems.style.backgroundColor = 'Pink';
    allItems.style.margin = '100px';
});
```

### Important correction

JavaScript style property names use camelCase.

Correct:

``` javascript
backgroundColor
```

Not:

``` javascript
backGround
```

Correct:

``` javascript
margin
```

But:

``` javascript
margin = 'Center'
```

is not a valid way to center an element.

For centering text, use:

``` javascript
allItems.style.textAlign = 'center';
```

For centering a block element, CSS techniques such as:

``` javascript
allItems.style.margin = '100px auto';
```

may be appropriate depending on its width and layout.

------------------------------------------------------------------------

# 30. Changing the Text of All `<h2>` Elements

We can change the text of every `<h2>`:

``` javascript
h2List.forEach(function (allItems) {
    allItems.style.color = 'Red';
    allItems.style.backgroundColor = 'Pink';
    allItems.style.margin = '100px';
    allItems.innerText = 'Hello Dosto';
});
```

Now every selected `<h2>` will display:

``` text
Hello Dosto
```

------------------------------------------------------------------------

# 31. Complete DOM Selection Methods

## `getElementById()`

Selects one element by ID:

``` javascript
document.getElementById('title');
```

Example:

``` javascript
document.getElementById('title').style.color = 'red';
```

------------------------------------------------------------------------

## `getElementsByClassName()`

Selects elements by class:

``` javascript
document.getElementsByClassName('list-item');
```

Returns:

``` text
HTMLCollection
```

------------------------------------------------------------------------

## `querySelector()`

Selects the first matching element:

``` javascript
document.querySelector('#title');
document.querySelector('.heading');
document.querySelector('h1');
```

------------------------------------------------------------------------

## `querySelectorAll()`

Selects all matching elements:

``` javascript
document.querySelectorAll('h2');
document.querySelectorAll('.list-item');
document.querySelectorAll('li');
```

Returns:

``` text
NodeList
```

------------------------------------------------------------------------

# 32. Quick Comparison

  Method                       Selects                    Result
  ---------------------------- -------------------------- ------------------
  `getElementById()`           One element by ID          Element / `null`
  `getElementsByClassName()`   Elements by class          HTMLCollection
  `querySelector()`            First CSS selector match   Element / `null`
  `querySelectorAll()`         All CSS selector matches   NodeList

------------------------------------------------------------------------

# 33. Attribute Methods

### Read an attribute

``` javascript
element.getAttribute('class');
```

### Set/change an attribute

``` javascript
element.setAttribute('class', 'heading');
```

### Create a new custom/data attribute

``` javascript
element.setAttribute('data-toggle', 'vimbar');
```

------------------------------------------------------------------------

# 34. Content Methods

``` javascript
element.innerHTML
```

Gets/sets HTML content.

``` javascript
element.innerText
```

Gets/sets visible text.

``` javascript
element.textContent
```

Gets/sets text content, including text that may be hidden with CSS.

------------------------------------------------------------------------

# 35. Style Methods

Access CSS through:

``` javascript
element.style
```

Examples:

``` javascript
element.style.color = 'red';

element.style.backgroundColor = 'green';

element.style.fontSize = '30px';

element.style.border = '2px solid blue';

element.style.padding = '20px';

element.style.margin = '10px';
```

------------------------------------------------------------------------

# 36. Important Things Learned

The basic flow is:

``` text
document
   ↓
find/select an element
   ↓
read or change it
```

For example:

``` javascript
document.getElementById('title').style.color = 'red';
```

Here:

``` text
document
   ↓
getElementById('title')
   ↓
style
   ↓
color
   ↓
red
```

Another example:

``` javascript
document.querySelectorAll('li').forEach(function (li) {
    li.style.backgroundColor = 'green';
});
```

Here:

``` text
document
   ↓
querySelectorAll('li')
   ↓
NodeList
   ↓
forEach()
   ↓
each li
   ↓
change style
```

------------------------------------------------------------------------

# 37. Final Easy Revision

``` javascript
// Select by ID
document.getElementById('title');

// Select first matching element
document.querySelector('#title');
document.querySelector('.heading');
document.querySelector('h1');

// Select all matching elements
document.querySelectorAll('h2');
document.querySelectorAll('li');

// Select by class
document.getElementsByClassName('list-item');

// Read attributes
document.getElementById('title').getAttribute('id');
document.getElementById('title').getAttribute('class');

// Set attributes
document.getElementById('title').setAttribute('class', 'heading');

// Create a data attribute
document.getElementById('title').setAttribute('data-toggle', 'vimbar');

// Read/change HTML
title.innerHTML;

// Read/change visible text
title.innerText;

// Read/change text content
title.textContent;

// Change CSS
title.style.color = 'red';
title.style.backgroundColor = 'green';
title.style.fontSize = '30px';
title.style.border = '2px solid blue';

// Convert HTMLCollection into Array
const arr = Array.from(
    document.getElementsByClassName('list-item')
);

// Loop through selected elements
document.querySelectorAll('li').forEach(function (li) {
    li.style.backgroundColor = 'green';
});
```

# One-Line Memory Trick

``` text
getElementById      → one ID
getElementsByClassName → HTMLCollection
querySelector       → first match
querySelectorAll    → all matches / NodeList
getAttribute        → read attribute
setAttribute        → set/change attribute
innerHTML            → HTML
innerText            → visible text
textContent          → text content
style                → CSS
Array.from()         → convert collection to Array
forEach()            → work on every selected element
```
