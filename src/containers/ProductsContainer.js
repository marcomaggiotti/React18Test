import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import { getVisibleProducts } from "../reducers/products";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";
import { Subject } from "rxjs";
import { of } from "rxjs";

const source = ["Adam", "Brian", "Christine"];
const names$ = of(source);
const notificationSubject = new Subject();

// Subject is also an Observable
const notificationObservable = notificationSubject.asObservable();

const publishNotification = (value) => {
  // multicasts a value onto the stream
  notificationSubject.next(value);
};

const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList title="Products">
    {products.map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
      />
    ))}
  </ProductsList>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products)
});

export default connect(mapStateToProps, {
  addToCart,
  notificationObservable,
  publishNotification
})(ProductsContainer);
