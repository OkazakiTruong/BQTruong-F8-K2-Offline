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
        setTodo(data.data.listTodo);
      } else {
        console.log("Không ổn rồi! Đã có lỗi xảy ra! Vui lòng load lại trang");
        setInterval(() => {
          window.location.reload();
        }, 2000);
      }
    }
  };

  useEffect(() => {
    setLogin(isLogin);
    getTodos();
  });

  return (
    <div className="todo-app-list">
      {todos.length > 0 ? (
        todos.map(() => {
          return (
            <TodoItem
              key={todos._id}
              todo={todos.todo}
              isCompleted={todos.isCompleted}
            />
          );
        })
      ) : (
        <div className="todo-app-item">Không có todo</div>
      )}
    </div>
  );
}
