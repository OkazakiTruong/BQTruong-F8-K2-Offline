import React from "react";
import "./assets/scss/app.scss";
export default function App() {
  return (
    <div class="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to todo app</h1>
        <form className="todo-app-form">
          <div className="todo-app-input-group">
            <input type="text" placeholder="Thêm mới một công việc" />
          </div>
        </form>
      </div>
    </div>
  );
}
