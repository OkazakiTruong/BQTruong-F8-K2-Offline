import React from "react";

export default function TodoList() {
  return (
    <div className="todo-app-item">
      <input className="todo" type="text" value={"new task"} readOnly />
      <div className="btn-group">
        <button className="btn-edit">Sửa</button>
        <button className="btn-delete">Xóa</button>
      </div>
    </div>
  );
}
