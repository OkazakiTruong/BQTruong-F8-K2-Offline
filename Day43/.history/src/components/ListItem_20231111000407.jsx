import React from "react";
import ProductItem from "./ProductItem";

export default function ListItem() {
  const getProducts = async () => {
    const { response, data } = await client.get("/products");
    if (response.ok) {
    } else {
      return "Đã có lỗi xảy ra";
    }
  };

  return (
    <div className="list-item">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}
