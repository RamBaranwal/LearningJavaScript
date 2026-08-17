# JavaScript `toLocaleString()` — Date & Time Formatting

## What is `toLocaleString()`?

`toLocaleString()` is a JavaScript method used to convert a `Date` object into a **formatted date and time string** according to a specific locale.

### Basic Syntax

```js
date.toLocaleString(locale, options);
```

- `locale` → Defines the language/region format.
- `options` → Defines which date/time parts to display and how they should look.

---

# Basic Example

```js
let newDate = new Date();

console.log(newDate.toLocaleString());
```

Possible output:

```text
8/8/2026, 10:53:20 PM
```

When no options are provided, `toLocaleString()` normally displays **both date and time**.

---

# Using Options

```js
let newDate = new Date();

console.log(
    newDate.toLocaleString("default", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h24"
    })
);
```

Possible output:

```text
Saturday, August 8, 2026, 22:53:20
```

> The exact order and punctuation can change depending on the locale.

---

# 1. `weekday`

Controls the **day of the week**.

```js
weekday: "long"
```

### Available Values

| Value | Example |
|---|---|
| `"long"` | `Saturday` |
| `"short"` | `Sat` |
| `"narrow"` | `S` |

### Example

```js
weekday: "long"    // Saturday
weekday: "short"   // Sat
weekday: "narrow"  // S
```

---

# 2. `year`

Controls the **year**.

```js
year: "numeric"
```

### Available Values

| Value | Example |
|---|---|
| `"numeric"` | `2026` |
| `"2-digit"` | `26` |

### Example

```js
year: "numeric"    // 2026
year: "2-digit"    // 26
```

---

# 3. `month`

Controls the **month**.

```js
month: "long"
```

### Available Values

| Value | Example |
|---|---|
| `"long"` | `August` |
| `"short"` | `Aug` |
| `"narrow"` | `A` |
| `"numeric"` | `8` |
| `"2-digit"` | `08` |

### Example

```js
month: "long"      // August
month: "short"     // Aug
month: "narrow"    // A
month: "numeric"   // 8
month: "2-digit"   // 08
```

---

# 4. `day`

Controls the **day of the month**.

```js
day: "numeric"
```

### Available Values

| Value | Example |
|---|---|
| `"numeric"` | `8` |
| `"2-digit"` | `08` |

### Example

```js
day: "numeric"     // 8
day: "2-digit"     // 08
```

> `day` means the date number, not the weekday.

```text
weekday → Saturday
day     → 8
```

---

# 5. `hour`

Controls the **hour** portion of the time.

```js
hour: "2-digit"
```

### Available Values

| Value | Example |
|---|---|
| `"numeric"` | `22` |
| `"2-digit"` | `22` |

### Example

```js
hour: "numeric"
hour: "2-digit"
```

The actual output depends on the selected `hourCycle` and locale.

---

# 6. `minute`

Controls the **minutes**.

```js
minute: "2-digit"
```

### Available Values

| Value | Example |
|---|---|
| `"numeric"` | `53` |
| `"2-digit"` | `53` |

### Example

```js
minute: "numeric"
minute: "2-digit"
```

---

# 7. `second`

Controls the **seconds**.

```js
second: "2-digit"
```

### Available Values

| Value | Example |
|---|---|
| `"numeric"` | `20` |
| `"2-digit"` | `20` |

### Example

```js
second: "numeric"
second: "2-digit"
```

---

# 8. `hourCycle`

Controls **how the hour is represented**.

```js
hourCycle: "h24"
```

### Available Values

| Value | Meaning |
|---|---|
| `"h11"` | `0–11` |
| `"h12"` | `1–12` |
| `"h23"` | `0–23` |
| `"h24"` | `1–24` |

---

## `h12` — 12-Hour Format

```js
hourCycle: "h12"
```

Example:

```text
10:53 PM
```

The hour goes from:

```text
1–12
```

and normally uses `AM` / `PM`.

---

## `h23` — 24-Hour Format

```js
hourCycle: "h23"
```

Example:

```text
22:53
```

The hour goes from:

```text
0–23
```

Midnight is:

```text
00:00
```

---

## `h24` — 24-Hour Format

```js
hourCycle: "h24"
```

The hour goes from:

```text
1–24
```

Midnight can be represented as:

```text
24:00
```

---

## `h11` — 12-Hour Cycle

```js
hourCycle: "h11"
```

The hour goes from:

```text
0–11
```

---

# `hourCycle` Quick Comparison

| Hour Cycle | Range | Example |
|---|---:|---|
| `h11` | `0–11` | `10 AM` |
| `h12` | `1–12` | `10 PM` |
| `h23` | `0–23` | `22:00` |
| `h24` | `1–24` | `22:00` |

### Easy Rule

```text
h12 → 1–12
h23 → 0–23
h24 → 1–24
```

For a typical 24-hour clock, `h23` is usually the most intuitive because midnight is:

```text
00:00
```

---

# Quick Revision Table

| Option | Controls | Common Values |
|---|---|---|
| `weekday` | Day of week | `long`, `short`, `narrow` |
| `year` | Year | `numeric`, `2-digit` |
| `month` | Month | `long`, `short`, `narrow`, `numeric`, `2-digit` |
| `day` | Day number | `numeric`, `2-digit` |
| `hour` | Hour | `numeric`, `2-digit` |
| `minute` | Minute | `numeric`, `2-digit` |
| `second` | Second | `numeric`, `2-digit` |
| `hourCycle` | Hour format | `h11`, `h12`, `h23`, `h24` |

---

# Easy Way to Remember

Think of the date and time as separate parts.

```text
DATE
│
├── weekday → Saturday
├── year    → 2026
├── month   → August
└── day     → 8
```

```text
TIME
│
├── hour    → 22
├── minute  → 53
└── second  → 20
```

```text
HOUR FORMAT
│
└── hourCycle → h11 / h12 / h23 / h24
```

---

# Important Concept

Each option controls a **specific part** of the date or time.

```js
weekday: "long"
```

Controls:

```text
Saturday
```

---

```js
year: "numeric"
```

Controls:

```text
2026
```

---

```js
month: "long"
```

Controls:

```text
August
```

---

```js
day: "numeric"
```

Controls:

```text
8
```

---

```js
hour: "2-digit"
```

Controls:

```text
22
```

---

```js
minute: "2-digit"
```

Controls:

```text
53
```

---

```js
second: "2-digit"
```

Controls:

```text
20
```

---

```js
hourCycle: "h23"
```

Controls the **hour numbering system**:

```text
00–23
```

---

# `toLocaleString()` Without Options

```js
let date = new Date();

console.log(date.toLocaleString());
```

Possible output:

```text
8/8/2026, 10:53:20 PM
```

Here JavaScript automatically chooses a standard date + time format based on the locale.

---

# `toLocaleString()` With Options

```js
let date = new Date();

console.log(
    date.toLocaleString("default", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);
```

Possible output:

```text
August 8, 2026
```

Only the requested date parts are included.

---

# Date Only Example

```js
let date = new Date();

console.log(
    date.toLocaleString("default", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);
```

Possible output:

```text
Saturday, August 8, 2026
```

---

# Time Only Example

```js
let date = new Date();

console.log(
    date.toLocaleString("default", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23"
    })
);
```

Possible output:

```text
22:53:20
```

---

# Complete Example

```js
let newDate = new Date();

let formattedDate = newDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
});

console.log(formattedDate);
```

Possible output:

```text
Saturday, August 8, 2026, 22:53:20
```

---

# Key Rule

```text
toLocaleString()
        ↓
   Date Object
        ↓
 Locale + Options
        ↓
Formatted String
```

Each option controls a specific part:

```text
weekday   → weekday
year      → year
month     → month
day       → day
hour      → hour
minute    → minute
second    → second
hourCycle → hour format
```

---

# Final Summary

```text
weekday  → Which day?        → Saturday
year     → Which year?       → 2026
month    → Which month?      → August
day      → Which date?       → 8

hour     → Which hour?       → 22
minute   → Which minute?     → 53
second   → Which second?     → 20

hourCycle → How is hour shown?
           → h12 / h23 / h24 / h11
```

**Main idea:**

> `toLocaleString()` takes a `Date` object and converts it into a human-readable string. The options object lets you control exactly which date/time parts appear and how they are displayed.