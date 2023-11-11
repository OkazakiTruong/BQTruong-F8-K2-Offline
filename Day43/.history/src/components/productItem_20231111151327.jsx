import React from "react";
import { useDispatch, useSelector } from "../core/hook";

export default function productItem({ product }) {
  const state = useSelector();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: "cart/set", payload: product });
  };
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={product.image} alt="product-img" />
      </div>
      <h2 className="product-name">{product.name}</h2>
      <div className="product-item-group">
        <div className="product-price">{product.price}</div>
        <button className="btn" onClick={handleAdd}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
