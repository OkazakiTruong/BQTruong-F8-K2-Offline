import React from "react";

export default function Task({ task }) {
  return (
    <div className="task-wrapper">
      <div className="task">{task.content}</div>
      <button>Delete</button>
    </div>
  );
}
