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
    dispatch(fetchTodos());
  }, []);
  useEffect(() => {
    setListColumn(columns);
  });
  useEffect(() => {
    localStorage.setItem(
      "columns",
      JSON.stringify(
        listColumn.map((column) => {
          return {
            _id: column._id,
            column: column.column,
            columnName: column.columnName,
          };
        })
      )
    );
  }, [listColumn]);

  const handleAddNewColumn = () => {
    console.log("click");
  };
  return (
    <div className="home-wrapper">
      {listColumn.map((column) => {
        return <Column key={column._id} data={column} />;
      })}
      <button className="btnAdd" onClick={handleAddNewColumn}>
        Add new column
      </button>
    </div>
  );
}
