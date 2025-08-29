# 1. Differences between DOM Selection Methods: getElementById, getElementsByClassName, and querySelector / querySelectorAll

## GetElementByID("id")
- It selects a **single element** by its unique id.
- Returns the **elements itself** or **null** if not found.
- No live collection.
### Example:
```js
let clearButtons = document.getElementById("clearBtn");
```

## GetElementsByClassName("className")
- It selects **all elements** with the specified class names
- Returns an **HTMLCollection**.
-  Live collections- updates automatically if DOM changes.
### Example:
```js
const copyBtn = document.getElementsByClassName("copy-button");
```

## querySelector("selector")
- It selects **first element** that matches a CSS selector (id, class, tag, etc).
- Returns the **first element** matching a CSS selector or null.
-  No live collections.
### Example:
```js
let serviceName = card.querySelector("h3");
```

## querySelectorAll("selector")
- It selects **all elements** that matches a CSS selector (id, class, tag, etc).
- Returns a **Nodelist** (does not update if the DOM changes).
-  No live collections.
### Example:
```js
let copyButtons = document.querySelectorAll(".copy-button");
```

# 2. Creating and inserting a new element into the DOM.
In JavaScript, we xan create new elements and insert them anywhere in our page. The following steps are:
1. **Creating the Element** using `document.createElement()`.
2. **Adding content or attributes** (like text, classes ir IDs).
3. **Inserting it into the DOM** using methods like `appendChild()` or `insertBefore()`.

### Example: Adding new div
```js
//  creating a new div
const newDiv = document.createElement("div")

// Adding text
newdiv.innertext = "Hello,  Welcome to our page"

// Inserting it to body
document.body.appendChild(newDiv)
```

# 3. Description about Event Bubbling and how it works.
**Event Bubbling** is a way that events travel through the DOM.
### This is how it works:
- When we trigger an event (like a click) on an element, the event starts at the element itself (the target).
- Then it **bubbles up** through its parent elements, all the way to the `document` object.
- Any parent elements that have listeners for that event type will also respond, unless we stop it.
- It allows event delegation, which is useful for handling many elements efficiently.
- We can stop bubbling with `event.stopPropagation()` if we want the event to stay on the target only.

# 4. Event Delegation in JavaScript.
**Event delegation** is a technique that leverages event bubbling to handle events on multiple child elements by attaching a single event listener to their common parent.

Instead of adding an event listener to each individual element, we can delegate the handling to a shared ancestor.

We should always check `event.target` to make sure we’re responding to the correct element.

### This is why it is useful:
- **Efficiency:** Fewer event listeners, less memory and faster performance.
- **Dynamic content:** It works even for elements added to the DOM after the page loads.
- **Cleaner code:** Avoid repeating the same listener on multiple children.

# 5. Difference between preventDefault() and stopPropagation() methods.
In JavaScript, both `event.preventDefault()` and `event.stopPropagation()` are used in event handling, but they serve very different purposes.

## `preventDefault()`
- Stops the **browser’s default action** associated with the event
- It doesn't stop the event from bubbling up, but usual action won’t happen.
### Use case:
- Prevent a page reload.
- Prevent form submission.
- Stop a link from opening.
- Block a default action while handling it in JavaScript.

## `stopPropagation()`
- Stops the event from bubbling up to parent elements.
- Only affects event propagation, not the default browser behavior.

### Use case:
- Prevent a click inside a modal from closing the modal.
- Stop nested elements from triggering parent handlers.