import { createRoot } from "react-dom";
//import HomePage from "components/Home/HomePage";

import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { getAllProducts } from "./actions";
import App from "./containers/App";

//const root = ReactDOM.createRoot(document.getElementById("root"));
// cant put document.getElementById("root") without createRoot
// it produce an error in the cart.js and say that objects aren't
// ready. Objects are not valid as a React child
//With react-dom version > 18.1.0 let ProductsContainer show
// The problem was in the Cart.js not properly copied
const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(getAllProducts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);