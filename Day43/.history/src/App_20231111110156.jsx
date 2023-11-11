import React from "react";
import ListItem from "./components/ListItem";
import Cart from "./components/Cart";
import { useSelector, useDispatch } from "./core/hook";

export default function App() {
  const state = useSelector();
  return (
    state.?
    <div className="container">
      <h1>Welcome to shop</h1>
      <ListItem />
      <Cart />
    </div>
  );
}
