import React from "react";

export default function FormTodoApp() {
  return (
    <div>
      <form action="" className="todo-app-form">
        <input
          type="text"
          placeholder="Thêm một việc làm mới"
          name="todo"
          onChange={handleChange}
        />
        <div className="btn-group">
          <button className="btn btn-add-new">Thêm mới</button>
          <button className="btn btn-search">Tìm kiếm</button>
        </div>
      </form>
    </div>
  );
}
