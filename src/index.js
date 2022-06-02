import { createRoot } from "react-dom";
import { App } from "./_app";
import { createStore } from "redux";
import Counter from "./components/Counter";
import counter from "./reducers";
//import HomePage from "components/Home/HomePage";

const store = createStore(counter);
const root = createRoot(document.getElementById("root")).render(<App />);

// Initial render: Render an element to the root.
//root.render(<HomePage />);
//root.render(<App tab="home" />);
