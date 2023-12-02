import React from "react";
import { useState } from "react";

export default function Task({ data }) {
  const [content, setContent] = useState("");
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
