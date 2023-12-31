import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import { taskSelector } from "../../stores/selector";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function Column({ data }) {
  const [columnName, setColumnName] = useState("");
  const [listTask, setListTask] = useState([]);
  const tasks = useSelector(taskSelector);

  useEffect(() => {
    setColumnName(data.columnName);
    setListTask(tasks);
    console.log(tasks);
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify());
  }, [listTask]);

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
      <div>
        <Droppable droppableId="TASK" type="group">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="column-main"
            >
              {listTask.map((task) => {
                if (task.column === data.column) {
                  return (
                    <Draggable draggableId={task._id} key={task._id}>
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <Task data={task} />
                        </div>
                      )}
                    </Draggable>
                  );
                }
              })}
            </div>
          )}
        </Droppable>
      </div>
      <div className="column-footer">+ Add new task</div>
    </div>
  );
}
