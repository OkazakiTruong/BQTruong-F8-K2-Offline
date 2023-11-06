import React from "react";

export default function formTodoApp() {
  return (
    <div>
      {" "}
      <form action="" className="todo-app-form">
        <input type="text" placeholder="Thêm một việc làm mới" />
        <div className="btn-group">
          <button className="btn btn-add-new">Thêm mới</button>
          <button className="btn btn-search">Tìm kiếm</button>
        </div>
      </form>
    </div>
  );
}
