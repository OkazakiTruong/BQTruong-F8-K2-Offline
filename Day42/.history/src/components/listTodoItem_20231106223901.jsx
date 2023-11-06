import React, { useEffect, useState } from "react";
import TodoItem from "./todoItem";

export default function ListTodoItem(isLogin) {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    // setIsLogin(isLogin);
  }, []);
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
