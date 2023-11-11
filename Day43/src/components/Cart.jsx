import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "../core/hook";

export default function Cart() {
  const state = useSelector();
  const dispatch = useDispatch();
  const carts = localStorage.getItem("carts");

  useEffect(() => {
    if (carts) {
      dispatch({ type: "cart/set", payload: carts });
    }
  }, []);
  useEffect(() => {
    console.log(state.carts);
  });
  return (
    <div className="cart">
      {state.carts.length > 0 ? (
        <div className="cart-table">
          <div className="cart-item cart-item--bold">
            <p>Tên sản phẩm</p>
            <p>Số lượng</p>
            <p>Còn lại</p>
            <p>Tổng tiền</p>
          </div>
          {state.carts.map((cart) => {
            return <CartItem />;
          })}
        </div>
      ) : (
        "Không có sản phẩm nào trong giỏ"
      )}
    </div>
  );
}
