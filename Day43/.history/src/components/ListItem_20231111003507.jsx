import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { client } from "../config/client";
import { useSelector, useDispatch } from "../core/hook";
import { config } from "../config/config.js";
const { LIMIT_PAGE: limit } = config;

export default function ListItem() {
  const state = useSelector();
  const dispatch = useDispatch();
  const getProducts = async () => {
    const { response, data } = await client.get("/products");
    if (response.ok) {
      dispatch({ type: "products/get", payload: data.data });
    } else {
      alert("Không ổn rồi ông cháu ơi!");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="list-item">
      {state.products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}
