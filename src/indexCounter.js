import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import Counter from "./components/Counter";
import counter from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { App } from "./_app";
import reducer from "./reducers";

//import HomePage from "components/Home/HomePage";
const middleware = [thunk];
//const root = createRoot(document.getElementById("root")).render(<App />);
//const store = createStore(counter);

const store = createStore(reducer, applyMiddleware(...middleware));

const root = document.getElementById("root");

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    root
  );
store.subscribe(render);

render();

// Initial render: Render an element to the root.
//root.render(<HomePage />);
//root.render(<App tab="home" />);
