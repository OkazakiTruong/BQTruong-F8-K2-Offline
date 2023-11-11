import React from "react";

export default function productItem() {
  return (
    <div className="product-item">
      <div className="product-img">
        <img
          src="https://fastly.picsum.photos/id/1037/196/256.jpg?hmac=C4nva7CPLEa4Qx0M3PqgHcV1M9K4S9EtiEIMsbH41Gk"
          alt="product-img"
        />
      </div>
      <div className="product-name">Điện thoại Nokia</div>
      <div className="product-price">$100</div>
      <div className="btn">Add to cart</div>
    </div>
  );
}
