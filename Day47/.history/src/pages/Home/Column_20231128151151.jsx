import React from "react";
import { useState } from "react";

export default function Column({ data }) {
  return (
    <div className="todo-column">
      <div className="column-header">
        <input type="text" defaultValue="Column 1" className="column-name" />
        <button className="column-delete-btn">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
      <div className="column-main">
        <div className="task" draggable>
          <input
            type="text"
            className="task-name"
            defaultValue="task 1"
            onDrag={() => {}}
          />
        </div>
      </div>
      <div className="column-footer">+ Add new task</div>
    </div>
  );
}
