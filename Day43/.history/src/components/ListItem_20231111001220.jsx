import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { client } from "../config/client";
import { useSelector, useDispatch } from "../core/hook";

export default function ListItem() {
  const getProducts = async () => {
    const { response, data } = await client.get("/products");
    if (response.ok) {
    } else {
      alert("Không ổn rồi ông cháu ơi!");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
