// React show/hide example on click
import React, { useState } from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import CryptosContainer from "./CryptosContainer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabsPage from "./TabsPage";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Products"></Tab>
        <Tab eventKey="profile" title="Crypto"></Tab>
        <Tab eventKey="contact" title="Contact"></Tab>
      </Tabs>
      {/* ... */}
    </>
  );
}

const App = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <h2>Shopping Cart Example</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Link 1</Nav.Link>
            <Nav.Link href="#pricing">Link 2</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated Item
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Another Link</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Another Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Products">
        <ProductsContainer />
        <hr />
      </Tab>
      <Tab eventKey="profile" title="Crypto">
        <CartContainer />
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <CryptosContainer />
      </Tab>
    </Tabs>
    <hr />

    <TabsPage />
    <TabsPage />
    <TabsPage />

    <hr />
  </div>
);

export default App;
