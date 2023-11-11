import React from "react";
import ListItem from "./components/ListItem";
import Cart from "./components/Cart";
import { useSelector } from "./core/hook";
import Login from "./components/Login";
import Loading from "./components/Loading";

export default function App() {
  const state = useSelector();
  const email = localStorage.getItem("email");
  return !email ? (
    <Login />
  ) : (
    <div className="container">
      <h1>Welcome to shop</h1>
      <ListItem />
      <Cart />
    </div>
  );
}
