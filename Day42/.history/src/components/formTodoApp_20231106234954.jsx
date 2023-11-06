import React, { useState } from "react";

export default function FormTodoApp() {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <button className="btn btn-add-new">Thêm mới</button>
          <button className="btn btn-search">Tìm kiếm</button>
        </div>
      </form>
    </div>
  );
}
