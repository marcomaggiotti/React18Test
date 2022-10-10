import React from "react";
import PropTypes from "prop-types";
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
import "./Product.css";

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

const Product = ({ price, quantity, title }) => (
  <div>
    {title} - &#36;{price}
    {quantity ? ` x ${quantity}` : null}
    <Container class="btn-group" role="group" aria-label="Basic example">
      {Array.from(Array(quantity), (e, i) => {
        return (
          <ul style={{ display: "inline-block" }}>
            <li key={i}>
              {i + 1}{" "}
              <div class="circle_free">
                <p class="text">Free Table</p>
              </div>{" "}
            </li>{" "}
          </ul>
        );
      })}
    </Container>
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
};

export default Product;
