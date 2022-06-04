import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import "bootstrap/dist/css/bootstrap.min.css";
const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Electronics"></Tab>
      <Tab eventKey="profile" title="Crypto"></Tab>
      <Tab eventKey="contact" title="Contact" disabled></Tab>
    </Tabs>
    <hr />

    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
);

export default App;
