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
    setLoading(true);
    const { response, data } = await client.get(`/products?${queryString}`);
    if (response.ok) {
      dispatch({ type: "products/get", payload: data.data });
    } else {
      alert("Không ổn rồi ông cháu ơi!");
      localStorage.removeItem("email");
      localStorage.removeItem("apiKey");
    }
    setLoading(false);
  };
  const getUserProfile = async () => {
    const { response, data } = await client.get(`/users/profile`);
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserProfile().then((res) => {
      if (res.code === 200) {
        console.log(res.data);
        dispatch({ type: "userProfile/update", payload: res.data.emailId });
      } else {
        console.log("Có lỗi rồi vui lòng reload");
        localStorage.removeItem("email");
        localStorage.removeItem("apiKey");
      }
    });
    getProducts();
  }, []);

  return (
    <div className="list-item">
      {state.products.map((product) => {
        return <ProductItem key={product._id} product={product} />;
      })}
    </div>
  );
}
