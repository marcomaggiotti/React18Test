import React, { useState } from "react";
import Notes from "./components/Notes";

export function App() {
  const [color, setColor] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  //Declaring state values.
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  // Change state on button click.
  function handleClickCount() {
    setCount((c) => c + 1); // Does not re-render yet
    setFlag((f) => !f); // Does not re-render yet
    // React will only re-render once at the end (that’s batching!)
  }

  function handleClick() {
    setColor((color) => !color); // react re-renders
  }

  return (
    <div>
      <button onClick={handleClickCount}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>

      <button onClick={handleClick}>Change color</button>
      <h1 style={{ color: color ? "red" : "black" }}>
        Hello, your click count is {clickCount}
      </h1>

      <h1>My Notes</h1>
      <input type="text" />
      <button>Save</button>
    </div>
  );
}
