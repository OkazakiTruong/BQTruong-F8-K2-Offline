import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { taskSelector } from "../../stores/selector";

export default function Column({ data }) {
  const [columnName, setColumnName] = useState("");
  useEffect(() => {
    setColumnName(data.columnName);
  }, []);

  const tasks = useSelector(taskSelector);

  const handleChange = (e) => {
    setColumnName.value = e.target.value;
  };
  return (
    <div className="todo-column">
      <div className="column-header">
        <input
          type="text"
          value={columnName}
          className="column-name"
          onChange={handleChange}
        />
        <button className="column-delete-btn">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
      <div className="column-main">
        {tasks.map((task) => {
          if (task.column === data.column) {
            return <Task key={task._id} data={task} />;
          }
        })}
      </div>
      <div className="column-footer">+ Add new task</div>
    </div>
  );
}
