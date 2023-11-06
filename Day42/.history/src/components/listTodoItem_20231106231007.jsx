import React, { useEffect, useState } from "react";
import TodoItem from "./todoItem";
import { client } from "../../client";

export default function ListTodoItem({ isLogin }) {
  const [login, setLogin] = useState(false);
  const [todos, setTodo] = useState([]);

  const getTodos = () => {};

  useEffect(() => {
    setLogin(isLogin);
  });

  return (
    <div className="todo-app-list">
      {login ? (
        <div>Có todo</div>
      ) : (
        <div className="todo-app-item">Không có todo</div>
      )}
    </div>
  );
}
