import React, { useEffect, useState } from "react";
import TodoItem from "./todoItem";
import { client } from "../../client";

export default function ListTodoItem({ isLogin }) {
  const [login, setLogin] = useState(false);
  const [todos, setTodo] = useState([]);

  const getTodos = async () => {
    if (login) {
      const { response, data } = await client.get(`/todos`);
      if (response.ok) {
        console.log(data);
      }
    }
  };

  useEffect(() => {
    setLogin(isLogin);
    getTodos();
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
