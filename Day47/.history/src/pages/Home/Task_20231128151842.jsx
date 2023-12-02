import React from "react";

export default function Task() {
  return (
    <div className="task" draggable>
      <input
        type="text"
        className="task-name"
        defaultValue="task 1"
        onDrag={() => {}}
      />
    </div>
  );
}
