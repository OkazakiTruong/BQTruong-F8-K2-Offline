import React, { useState } from "react";
import { client } from "../../client";

export default function TodoItem({ render, id, todo, isCompleted }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleDelete = async () => {
    const { response } = await client.delete(`/todos/${id}`);
    if (response.ok) {
      alert("Xóa thành công");
      render();
    } else {
      alert("Không ổn rồi! Reload lại trạng đi");
      localStorage.removeItem("email");
      localStorage.removeItem("apiKey");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  return (
    <>
      <div className="todo-app-item">
        <input className="todo" type="text" value={todo} readOnly />
        {showEdit ? (
          <div className="btn-edit-groups">
            <label>
              <span>Đã xong</span>
              <input type="checkbox" name="" id="" class="isCompleted" />
            </label>
            <div className="btn-group">
              <button className="btn btn-exit" onClick={handleShowEdit}>
                Thoát
              </button>
              <button className="btn btn-update">Update</button>
              <button className="btn btn-delete" onClick={handleDelete}>
                Xóa
              </button>
            </div>
          </div>
        ) : (
          <div className="btn-group">
            <button className="btn btn-edit" onClick={handleShowEdit}>
              Sửa
            </button>
            <button className="btn btn-delete" onClick={handleDelete}>
              Xóa
            </button>
          </div>
        )}
      </div>
    </>
  );
}
