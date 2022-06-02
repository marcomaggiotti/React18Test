import { createRoot } from "react-dom";
import { App } from "./_app";
import { createStore } from "redux";
//import HomePage from "components/Home/HomePage";

const root = createRoot(document.getElementById("root")).render(<App />);

// Initial render: Render an element to the root.
//root.render(<HomePage />);
//root.render(<App tab="home" />);
