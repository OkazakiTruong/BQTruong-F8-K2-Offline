import React from "react";
import TodoItem from "./todoItem";

export default function ListTodoItem() {
  return (
    <div className="todo-app-list">
      <div className="todo-app-item">
        <TodoItem />
      </div>
    </div>
  );
}
