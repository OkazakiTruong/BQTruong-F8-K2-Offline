import React from "react";
import "./home.scss";
import Column from "./Column";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../stores/slices/TodoSlice";
import { columnSelector } from "../../stores/selector";

export default function Home() {
  const dispatch = useDispatch();
  const selector = useSelector(columnSelector);
  useEffect(() => {
    dispatch(fetchTodos());
    console.log(selector);
  }, []);
  return (
    <div className="home-wrapper">
      <Column />
    </div>
  );
}
