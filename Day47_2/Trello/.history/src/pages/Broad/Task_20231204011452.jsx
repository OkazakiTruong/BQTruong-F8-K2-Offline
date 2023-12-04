import React from "react";

export default function Task({ data }) {
  return (
    <div className="task-wrapper">
      <div className="task">{data.content}</div>
      <button>Delete</button>
    </div>
  );
}
