import React from "react";

export default function Column() {
  return (
    <div className="todo-column">
      <div className="column-header">
        <input
          type="text"
          defaultValue="Column 1"
          className="column-name"
          readOnly
        />
        <button className="column-delete-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <div className="column-main">
        <div className="task">
          <input type="text" className="task-name" value="task 1" />
        </div>
      </div>
      <div className="column-footer">+ Add new task</div>
    </div>
  );
}
