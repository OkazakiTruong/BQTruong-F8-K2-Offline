import React, { useState } from "react";

export default function TodoItem({ id, todo, isCompleted }) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <>
      <div className="todo-app-item">
        <input className="todo" type="text" value={todo} readOnly />
        <div className="btn-group">
          <button className="btn btn-edit">Sửa</button>
          <button className="btn btn-delete">Xóa</button>
        </div>
        <div className="btn-edit-groups">
          <label htmlFor="">
            Đã xong
            <input type="checkbox" name="" id="" />
          </label>
          <div className="btn-group">
            <button className="btn btn-exit">Thoát</button>
            <button className="btn btn-update">Update</button>
            <button className="btn btn-delete">Xóa</button>
          </div>
        </div>
      </div>
    </>
  );
}
