import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "../core/hook";

export default function Cart() {
  const state = useSelector();
  const dispatch = useDispatch();
  const localState = localStorage.getItem("cart");

  useEffect(() => {
    state.cart;
  });
  return (
    <div className="cart">
      <div className="cart-table">
        <div className="cart-item cart-item--bold">
          <p>Tên sản phẩm</p>
          <p>Số lượng</p>
          <p>Còn lại</p>
          <p>Tổng tiền</p>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}
