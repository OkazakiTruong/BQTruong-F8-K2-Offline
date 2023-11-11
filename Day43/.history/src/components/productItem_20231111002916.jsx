import React from "react";

export default function productItem({ product }) {
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={product.image} alt="product-img" />
      </div>
      <h2 className="product-name">{product.name}</h2>
      <div className="product-item-group">
        <div className="product-price">{product.price}</div>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}
