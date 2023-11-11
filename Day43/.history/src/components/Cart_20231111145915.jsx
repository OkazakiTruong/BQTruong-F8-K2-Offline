import React from "react";
import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cart-table">
        <div className="cart-item heading">
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
