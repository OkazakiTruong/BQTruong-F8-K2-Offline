import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "../core/hook";

export default function Cart() {
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
