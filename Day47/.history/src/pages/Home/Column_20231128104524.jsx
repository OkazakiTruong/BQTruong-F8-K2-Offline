import React from "react";
import { useState } from "react";

export default function Column() {
  const [isDisabled, setIsDisabled] = useState(true);
  const handleToggleDisable = () => {
    setIsDisabled(!isDisabled);
    console.log("click");
  };
  return (
    <div className="todo-column">
      <div className="column-header" onClick={handleToggleDisable}>
        <input
          type="text"
          value="Column 1"
          className="column-name"
          disabled={isDisabled}
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
