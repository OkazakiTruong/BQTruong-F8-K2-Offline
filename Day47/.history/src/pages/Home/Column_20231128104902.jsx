import React from "react";
import { useState } from "react";

export default function Column() {
  const [isDisabled, setIsDisabled] = useState(true);
  const handleToggleDisable = () => {
    setIsDisabled(!isDisabled);
    console.log("click");
  };
  const handleChange = () => {};
  return (
    <div className="todo-column">
      <div className="column-header" onClick={handleToggleDisable}>
        <input
          type="text"
          value="Column 1"
          className="column-name"
          disabled={isDisabled}
          onChange={handleChange}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <button className="column-delete-btn">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
      <div className="column-main">
        <div className="task">
          <input type="text" className="task-name" defaultValue="task 1" />
        </div>
      </div>
      <div className="column-footer">+ Add new task</div>
    </div>
  );
}
