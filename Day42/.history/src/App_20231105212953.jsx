import React from "react";

export default function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to Todo App!</h1>
        <form action="" className="todo-app-form">
          <input type="text" placeholder="Thêm một việc làm mới" />
          <div className="btn-group">
            <button className="btn-add-new">Thêm mới</button>
            <button className="btn-search">Tìm kiếm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
