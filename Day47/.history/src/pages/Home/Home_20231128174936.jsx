import React from "react";
import "./home.scss";
import Column from "./Column";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../stores/slices/TodoSlice";
import { columnSelector } from "../../stores/selector";

export default function Home() {
  const dispatch = useDispatch();
  const columns = useSelector(columnSelector);
  useEffect(() => {
    dispatch(fetchTodos());
    localStorage.setItem("columns", JSON.stringify(columns));
  }, []);
  useEffect(() => {});
  return (
    <div className="home-wrapper">
      {columns.map((column) => {
        return <Column key={column._id} data={column} />;
      })}
    </div>
  );
}
