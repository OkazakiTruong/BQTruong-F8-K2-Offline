import React from "react";
import TodoList from "./components/TodoList";
import { client } from "./client";
import "./assets/scss/app.scss";

function getData() {}
getData();
export default function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to todo app</h1>
        <form className="todo-app-form">
          <div className="todo-app-input-group">
            <input
              className="input-todo"
              type="text"
              placeholder="Thêm mới một công việc"
            />
            <button className="btn-add">Thêm mới</button>
          </div>
        </form>
        <div className="todo-app-list">
          <TodoList />
        </div>
      </div>
    </div>
  );
}
