import React from "react";

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
        <hr />
        <div className="cart-item"></div>
      </div>
    </div>
  );
}
