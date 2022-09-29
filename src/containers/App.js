// React show/hide example on click
import React, { useState } from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabsPage from "./TabsPage";

import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Electronics"></Tab>
        <Tab eventKey="profile" title="Crypto"></Tab>
        <Tab eventKey="contact" title="Contact" disabled></Tab>
      </Tabs>
      {/* ... */}
    </>
  );
}

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Tables">
        <ProductsContainer />
        <hr />
      </Tab>
      <Tab eventKey="profile" title="Crypto"></Tab>
      <Tab eventKey="contact" title="Contact" disabled></Tab>
    </Tabs>
    <hr />

    <TabsPage />
    <TabsPage />
    <TabsPage />
    <CartContainer />
    <hr />
    <TabsPage />
  </div>
);

export default App;
