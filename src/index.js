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
import { logUser, user, myUnchangingUser } from "./models/User";
import DemoUser from "./models/User";

//const root = ReactDOM.createRoot(document.getElementById("root"));
// cant put document.getElementById("root") without createRoot
// it produce an error in the cart.js and say that objects aren't
// ready. Objects are not valid as a React child
//With react-dom version > 18.1.0 let ProductsContainer show
// The problem was in the Cart.js not properly copied

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

const user1 = { id: 14, name: 42 };
logUser(user1);

logUser(user);
//console.log(user);

let helloWorld = "This is a variable in Typescript Ma ciao";

//const point3 = { x: 12, y: 26, z: 89 };
//logPoint(point3); // logs "12, 26"

console.log(helloWorld);
//const user: User = new UserAccount("Murphy", 1);

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
