import React from "react";
import TodoItem from "./todoItem";

export default function ListTodoItem(isLogin) {
  return (
    <div className="todo-app-list">
      <div className="todo-app-item">
        {isLogin ? (
          <TodoItem />
        ) : (
          <div className="todo-app-item">Không có todo</div>
        )}
      </div>
    </div>
  );
}
