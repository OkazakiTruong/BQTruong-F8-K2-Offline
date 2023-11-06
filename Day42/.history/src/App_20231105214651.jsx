import React from "react";

export default function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to Todo App!</h1>
        <form action="" className="todo-app-form">
          <input type="text" placeholder="Thêm một việc làm mới" />
          <div className="btn-group">
            <button className="btn btn-add-new">Thêm mới</button>
            <button className="btn btn-search">Tìm kiếm</button>
          </div>
        </form>
        <div className="todo-app-list">
          {/* <div className="todo-app-item">Không có todo</div> */}
          <div className="todo-app-item">
            <p className="todo">Task 1</p>
            <div className="btn-groups">
              <button className="btn btn-edit">Sửa</button>
              <button className="btn btn-delete">Xóa</button>
            </div>
            <div className="btn-edit-groups">
              <label htmlFor="">
                Đã xong
                <input type="checkbox" name="" id="" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
