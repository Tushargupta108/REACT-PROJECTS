# ⏰ React Live Clock

A simple and interactive **Live Clock application built with React** to practice and demonstrate fundamental React concepts such as **functional components, `useState`, `useEffect`, dependency arrays, conditional rendering, event handling, timers, and cleanup functions**.

The project displays the current local time and updates it every second. Users can also hide or show the clock using an interactive button.

---

## 🚀 Live Features

* ⏱️ Displays the current local time
* 🔄 Automatically updates every second
* 👁️ Show/Hide clock functionality
* 🧠 Demonstrates React Hooks
* 🧹 Proper `setInterval` cleanup
* 📱 Responsive UI
* 🎨 Modern dark-themed interface
* ⚡ Built with Vite for fast development

---

## 🛠️ Technologies Used

* **React**
* **JavaScript (ES6+)**
* **CSS3**
* **Vite**
* **HTML5**

---

# 🧠 React Concepts Demonstrated

This project is intentionally simple so that the fundamental React concepts can be understood clearly.

---

## 1. Functional Component

The entire application is created using a React functional component:

```jsx
function App() {
  // component logic

  return (
    <>
      {/* UI */}
    </>
  );
}
```

### What is a Functional Component?

A functional component is a JavaScript function that returns JSX.

React calls this function to determine what should be displayed on the screen.

In this project:

```jsx
function App() {
```

is the main component.

### Concept:

```text
React
  ↓
Calls App()
  ↓
App returns JSX
  ↓
React displays JSX
```

---

# 2. `useState` Hook

The project uses `useState` to store data that can change during the lifetime of the application.

```jsx
const [time, setTime] = useState(
  new Date().toLocaleTimeString()
);
```

There are two parts:

```text
time
 ↓
Current state value

setTime
 ↓
Function used to update the state
```

Initially:

```text
time = current time
```

When the time changes:

```jsx
setTime(new Date().toLocaleTimeString());
```

React is notified that the state has changed.

---

## Why is State Required?

If `time` were just a normal variable:

```jsx
let time = new Date().toLocaleTimeString();
```

changing the variable would not automatically tell React to update the UI.

With state:

```jsx
setTime(newTime);
```

React performs a re-render.

### Flow:

```text
setTime()
   ↓
State changes
   ↓
React schedules re-render
   ↓
App() runs again
   ↓
New JSX is calculated
   ↓
UI updates
```

---

# 3. Multiple State Variables

The application also uses another state variable:

```jsx
const [show, setShow] = useState(true);
```

This controls whether the clock is visible.

Initially:

```text
show = true
```

When the button is clicked:

```jsx
setShow(!show);
```

The value changes:

```text
true → false
false → true
```

Therefore, the UI changes accordingly.

---

# 4. `useEffect` Hook

The clock needs to perform an operation outside the normal rendering process: creating a timer.

For this, the project uses `useEffect`:

```jsx
useEffect(() => {
  if (!show) return;

  const intervalId = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
}, [show]);
```

### What is `useEffect`?

`useEffect` is used to perform **side effects** in a React component.

Examples of side effects include:

* API requests
* Timers
* Event listeners
* Subscriptions
* Browser APIs
* Synchronizing with external systems

In this project, the side effect is:

```text
setInterval()
```

---

# 5. Dependency Array

The effect contains:

```jsx
[show]
```

This is called the **dependency array**.

It tells React:

> Run the effect again when `show` changes.

### Initial render

```text
show = true
     ↓
useEffect runs
     ↓
setInterval starts
```

### When `show` changes

```text
show: true → false
       ↓
React re-renders
       ↓
Previous effect is cleaned up
       ↓
New effect runs
       ↓
if (!show) return
       ↓
No new interval
```

When `show` changes again:

```text
false → true
       ↓
useEffect runs
       ↓
New interval starts
```

---

# 6. Cleanup Function

One of the most important concepts demonstrated by this project is the **cleanup function**.

The effect returns:

```jsx
return () => {
  clearInterval(intervalId);
};
```

React automatically calls this cleanup function when the effect needs to be cleaned up.

For example, when `show` changes:

```text
Previous effect
      ↓
clearInterval()
      ↓
Previous interval stops
      ↓
New effect runs
```

### Why is cleanup necessary?

Without cleanup:

```jsx
useEffect(() => {
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
}, [show]);
```

every change to `show` could create another interval without stopping the previous one.

This could result in multiple timers running simultaneously.

With cleanup:

```jsx
return () => {
  clearInterval(intervalId);
};
```

the previous timer is removed before a new effect is created.

---

# 7. Conditional Execution Inside `useEffect`

The project contains:

```jsx
if (!show) return;
```

This does **not hide the HTML element**.

It only stops the effect from creating a new interval when `show` is false.

This is an important distinction.

```text
if (!show) return
        ↓
Controls effect execution
```

Whereas:

```jsx
{show && <h1>Current Time: {time}</h1>}
```

controls what appears in the UI.

---

# 8. Conditional Rendering

The project uses:

```jsx
{show && <h1>Current Time: {time}</h1>}
```

This is called **conditional rendering**.

The `&&` operator means:

```text
show = true
   ↓
true && <h1>
   ↓
<h1> is rendered
```

When:

```text
show = false
   ↓
false && <h1>
   ↓
<h1> is not rendered
```

Therefore, the clock disappears from the screen.

---

# 9. Event Handling

The button uses React's event handling system:

```jsx
<button onClick={() => setShow(!show)}>
```

`onClick` tells React to execute the function when the user clicks the button.

The function:

```jsx
() => setShow(!show)
```

toggles the state.

### Flow:

```text
User clicks button
       ↓
onClick executes
       ↓
setShow(!show)
       ↓
show changes
       ↓
React re-renders
       ↓
UI changes
```

---

# 10. JavaScript `setInterval`

The application uses the browser's `setInterval` API:

```jsx
const intervalId = setInterval(() => {
  setTime(new Date().toLocaleTimeString());
}, 1000);
```

`1000` milliseconds equals:

```text
1 second
```

Therefore, the callback executes approximately every second.

```text
setInterval
    ↓
1 second
    ↓
setTime()
    ↓
React re-render
    ↓
1 second
    ↓
setTime()
    ↓
React re-render
    ↓
...
```

---

# 11. Why `setInterval` is Inside `useEffect`

Putting a timer directly inside the component body can create problems.

For example:

```jsx
function App() {

  setInterval(() => {
    setTime(...);
  }, 1000);

}
```

Every time state changes, React re-renders the component.

That means:

```text
Render #1 → Interval #1
Render #2 → Interval #2
Render #3 → Interval #3
Render #4 → Interval #4
```

Multiple intervals could eventually run at the same time.

Instead, the project places the interval inside `useEffect`:

```jsx
useEffect(() => {
  const intervalId = setInterval(...);

  return () => clearInterval(intervalId);
}, [show]);
```

This gives React a controlled lifecycle for the timer.

---

# 12. State vs Re-render

An important React concept demonstrated here is the relationship between state and rendering.

Calling:

```jsx
setTime(...)
```

doesn't directly modify the HTML.

Instead:

```text
setTime()
   ↓
State update
   ↓
React re-render
   ↓
App() executes again
   ↓
JSX uses new time
   ↓
React updates required DOM
```

React determines what needs to change instead of manually manipulating the DOM.

---

# 13. Component Lifecycle Concept

The project also demonstrates a simplified React effect lifecycle.

```text
Component renders
       ↓
useEffect runs
       ↓
Interval starts
       ↓
State changes
       ↓
Component re-renders
       ↓
Dependency changes?
       ↓
YES
       ↓
Cleanup runs
       ↓
Old interval stops
       ↓
Effect runs again
```

This is an important foundation for understanding larger React applications.

---

# 📂 Project Structure

```text
clock/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd clock
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL such as:

```text
http://localhost:5173
```

---

# 🎯 Learning Objectives

This project was created to strengthen understanding of:

* React functional components
* JSX
* `useState`
* `useEffect`
* Dependency arrays
* Conditional rendering
* Event handling
* State-driven UI
* `setInterval`
* Effect cleanup
* Component re-rendering
* React component lifecycle
* Responsive CSS

---

# 💡 Key React Mental Model

The most important concept learned from this project is:

```text
USER ACTION
     ↓
State Setter
     ↓
State Changes
     ↓
React Re-renders Component
     ↓
JSX Recalculated
     ↓
React Updates UI
```

While side effects follow:

```text
Render
   ↓
useEffect
   ↓
Side Effect
   ↓
Cleanup
   ↓
Effect Again (if dependency changes)
```

---

# 🔮 Possible Future Improvements

The project can be extended with:

* 🌍 Multiple time zones
* 🌙 Light/Dark mode
* 📅 Current date display
* ⏰ 12-hour / 24-hour format
* 🌎 World clock
* ⏱️ Stopwatch
* ⏲️ Countdown timer
* 🔔 Alarm functionality
* 🎨 Multiple clock themes
* ⚙️ User-configurable update intervals

---

# 📌 Project Purpose

This project is part of my **React learning and development portfolio**.

The goal is not just to build a clock, but to understand how React manages:

**state → rendering → effects → cleanup → UI updates.**

---

## 👨‍💻 Author

**Tushar Gupta**

Built as part of a collection of React projects focused on learning modern React development, component-based architecture, state management, side effects, API integration, and responsive UI development.
