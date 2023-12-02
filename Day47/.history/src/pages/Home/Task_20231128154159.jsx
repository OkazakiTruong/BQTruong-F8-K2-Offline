import React from "react";

export default function Task({ data }) {
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
