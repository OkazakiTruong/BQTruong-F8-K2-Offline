import React, { useEffect, useState } from "react";
import TodoItem from "./todoItem";
import { client } from "../../client";

export default function ListTodoItem({ isLogin }) {
  const [todos, setTodos] = useState([]);
  const [login, setLogin] = useState(false);

  const getTodos = async () => {
    if (isLogin) {
      const { response, data } = await client.get(`/todos`);
      if (response.ok) {
        setTodos(data.data.listTodo);
      } else {
        console.log("Không ổn rồi! Đã có lỗi xảy ra! Vui lòng load lại trang");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  };

  useEffect(() => {
    setLogin(isLogin);
  });
  useEffect(() => {
    getTodos();
  }, [login]);
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
