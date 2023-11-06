import React, { useEffect, useState } from "react";
import TodoItem from "./todoItem";

export default function ListTodoItem(isLogin) {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setIsLogin(isLogin);
  }, []);
  return (
    <div className="todo-app-list">
      <div className="todo-app-item">
        {login ? (
          <TodoItem />
        ) : (
          <div className="todo-app-item">Không có todo</div>
        )}
      </div>
    </div>
  );
}
