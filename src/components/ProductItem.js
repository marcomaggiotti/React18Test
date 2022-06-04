import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import Button from "react-bootstrap/Button";

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory}
    />

    <div className="component">
      <Button
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? "" : "disabled"}
        variant="primary"
      >
        {" "}
        {product.inventory > 0 ? "Add to cart" : "Sold Out"}
      </Button>
    </div>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default ProductItem;
