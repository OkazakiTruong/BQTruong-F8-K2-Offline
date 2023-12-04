import React from "react";

export default function Task({ task }) {
  console.log(task);
  return (
    <div className="task-wrapper">
      <div className="task">task</div>
      <button>Delete</button>
    </div>
  );
}
