
### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

- `getElementById` Select element by its id and returns a **single element**.
- `getElementsByClassName` Select all elements with a given class name and returns a **HTMLCollection**.
- `querySelector` Select the first element that matches a CSS selector and returns a **First match**.
- `querySelectorAll` Select all elements with a given class name and returns a **NodeList**.

---

### 2. How do you **create and insert a new element into the DOM**?

- **Creating the Element:** `document.createElement("tagName")` method is used to create a new HTML element node. After creating element we can set properties like id, class, textContent, innerHTML and other properties.
- **Inserting the Element:** once dom element is created, we can insert it into the page using method like `appendChild()`, `prepend()`, `before()`, and `after()`.
- **Example to create and insert a new element into the DOM**

```bash
  // 1. Create the element
  const btn = document.createElement('button');
  btn.textContent = 'Learn More';
  btn.id = 'moreBtn';

  // 2. Get a reference to parent element
  const bodyElement = document.body;

  // 3. Insert the new element
  bodyElement.appendChild(btn);
```

### 3. What is **Event Bubbling** and how does it work?
  **Event Bubbling:** It means events start from the target element and bubble up through its ancestors in the DOM tree. When we click on a button inside a box, the click doesn’t just stay on the button. It first happens on the button, then it moves up to the box that holds the button, then to whatever is holding that box, and so on until it reaches top of the document. This step-by-step movement upwards is what’s called event bubbling.

---

### 4. What is **Event Delegation** in JavaScript? Why is it useful?
  **Event Delegation:** Event delegation means we don’t have to put an event listener on every single child element. Instead, we put one listener on the parent, and because of event bubbling, that parent can catch events from its children. Then we just check which child was clicked and run the right code. It’s useful because it makes our code faster, cleaner, and it works even if new child elements are added later - we don’t need to keep adding listeners again and again.

---

### 5. What is the difference between **preventDefault()** and **stopPropagation()** methods?
  - **preventDefault()** It stops the default action of an element from happening.
  - **stopPropagation()** It stops the event from bubbling up to parent elements.