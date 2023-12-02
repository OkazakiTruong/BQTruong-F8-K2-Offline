import React, { useState } from "react";
import "./home.scss";
import Column from "./Column";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { columnSelector } from "../../stores/selector";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function Home() {
  const [listColumn, setListColumn] = useState([]);
  const columns = useSelector(columnSelector);

  useEffect(() => {
    setListColumn(columns);
  }, []);

  useEffect(() => {
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
    localStorage.setItem(
      "columns",
      JSON.stringify([
        ...listColumn,
        { column: columnNumber, columnName: columnName },
      ])
    );
    const columnsLocal = JSON.parse(localStorage.getItem("columns"));
    setListColumn(columnsLocal);
  };
  return (
    <div className="home-wrapper">
      <Droppable droppableId="column-wrapper" type="group">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {listColumn.map((column, index) => {
              return (
                <Draggable
                  draggableId={column.column}
                  index={index}
                  key={column.column}
                >
                  <Column data={column} />
                </Draggable>
              );
            })}
          </div>
        )}
      </Droppable>
      <button className="btnAdd" onClick={handleAddNewColumn}>
        Add new column
      </button>
    </div>
  );
}
