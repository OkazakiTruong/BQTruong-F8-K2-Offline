import React, { useState } from "react";
import "./home.scss";
import Column from "./Column";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../stores/slices/TodoSlice";
import { columnSelector } from "../../stores/selector";

export default function Home() {
  const [listColumn, setListColumn] = useState([]);
  const dispatch = useDispatch();
  const columns = useSelector(columnSelector);

  useEffect(() => {
    setListColumn(columns);
  }, []);
  useEffect(() => {});
  useEffect(() => {
    console.log(listColumn);
    localStorage.setItem(
      "columns",
      JSON.stringify(
        listColumn.map((column) => {
          return {
            column: column.column,
            columnName: column.columnName,
          };
        })
      )
    );
  }, [listColumn]);

  const handleAddNewColumn = () => {
    const columnNumber = Math.floor(Math.random() * 10000);
    const columnName = "column" + listColumn.length;
    setListColumn([
      ...listColumn,
      { column: columnNumber, columnName: columnName },
    ]);
  };
  return (
    <div className="home-wrapper">
      {console.log("home")}
      {listColumn.map((column) => {
        return <Column key={column.column} data={column} />;
      })}
      <button className="btnAdd" onClick={handleAddNewColumn}>
        Add new column
      </button>
    </div>
  );
}
