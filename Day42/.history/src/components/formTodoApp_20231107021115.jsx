import React, { useState } from "react";
import { client } from "../../client";

export default function FormTodoApp({ render }) {
  const [todo, setTodo] = useState("");

  const addANewTodo = async () => {
    if (todo.trim().length >= 2) {
      const { response } = await client.post("/todos", { todo: todo });
      if (response.ok) {
        alert("Thêm thành công!");
        render();
      } else {
        alert("Không ổn rồi! Phải reload trang thôi!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } else {
      alert("Không được bỏ trống và todo phải có 2 ký tự trở lên");
    }
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addANewTodo();
  };

  return (
    <div>
      <form action="" className="todo-app-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Thêm một việc làm mới"
          name="todo"
          onChange={handleChange}
        />
        <div className="btn-group">
          <button type="submit" className="btn btn-add-new">
            Thêm mới
          </button>
          <button type="button" className="btn btn-search">
            Tìm kiếm
          </button>
        </div>
      </form>
    </div>
  );
}
