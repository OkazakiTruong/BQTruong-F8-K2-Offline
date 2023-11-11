import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { client } from "../config/client";
import Loading from "./Loading.jsx";
import { useSelector, useDispatch } from "../core/hook";
import { config } from "../config/config.js";
const { LIMIT_PAGE: limit } = config;
const query = {
  limit: limit,
};
export default function ListItem() {
  const [loading, setLoading] = useState(false);
  const state = useSelector();
  const dispatch = useDispatch();

  const getProducts = async () => {
    const queryString = new URLSearchParams(query).toString();
    const { response, data } = await client.get(`/products?${queryString}`);
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
      <Loading />
      {state.products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}
