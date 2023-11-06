import React, { useEffect, useState } from "react";
import TodoItem from "./todoItem";
import { client } from "../../client";

export default function ListTodoItem({ isLogin, listTodo }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(listTodo);
  });

  return (
    <div className="todo-app-list">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo._id}
              id={todo._id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
            />
          );
        })
      ) : (
        <div className="todo-app-item">Không có todo</div>
      )}
    </div>
  );
}
