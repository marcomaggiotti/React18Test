import React from "react";
import PropTypes from "prop-types";

import "./Product.css";

const Product = ({ price, quantity, title }) => (
  <div>
    {title} - &#36;{price}
    {quantity ? ` x ${quantity}` : null}
    <div class="circle">
      <p class="text">Square text</p>
    </div>
    <div class="circle">
      <p class="text">Circle text</p>
    </div>
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
};

export default Product;
