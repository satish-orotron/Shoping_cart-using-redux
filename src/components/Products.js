

import React, { useState, useEffect } from "react";
import JsonData from "../Data/JsonData.json";
import { useDispatch, useSelector } from "react-redux";
import { incrementcart, decrementcart } from "../redux/Reducer/CartReducer";

const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer.cartValues);

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    dispatch(incrementcart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(decrementcart(productId));
  };

  return (
    <>
      <center>
        <h1>Products</h1>
        {JsonData.products.map((product) => (
          <div key={product.id}>
            <img src={product.src} alt={product.name} />
            <p>{product.name}</p>
            <div>
              {isInCart(product.id) ? (
                <button onClick={() => handleRemoveFromCart(product.id)}>
                  Remove from cart
                </button>
              ) : (
                <button onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
              )}
            </div>
          </div>
        ))}
      </center>
    </>
  );
};

export default Products;
