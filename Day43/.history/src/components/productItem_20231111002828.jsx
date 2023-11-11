import React from "react";

export default function productItem({ product }) {
  return (
    <div className="product-item">
      <div className="product-img">
        <img
          src="https://fastly.picsum.photos/id/1037/196/256.jpg?hmac=C4nva7CPLEa4Qx0M3PqgHcV1M9K4S9EtiEIMsbH41Gk"
          alt="product-img"
        />
      </div>
      <h2 className="product-name">{product.name}</h2>
      <div className="product-item-group">
        <div className="product-price">$100</div>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}
