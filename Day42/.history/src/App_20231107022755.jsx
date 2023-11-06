import React, { useEffect, useState } from "react";
import FormTodoApp from "./components/formTodoApp";
import { client } from "../client";
import TodoItem from "./components/todoItem";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [todos, setTodos] = useState([]);

  const getApiKey = async () => {
    const email = prompt("Nhập vào Email của bạn");
    if (email !== null) {
      let { response, data } = await client.get(`/api-key?email=${email}`);
      if (response.ok) {
        localStorage.setItem("email", email);
        localStorage.setItem("apiKey", data.data.apiKey);
        client.setApiKey(data.data.apiKey);
        alert(`Chào mừng trở lại ${email}`);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        alert("Không ổn rồi! đã có lỗi xảy ra vui lòng reload");
        localStorage.removeItem("email");
        localStorage.removeItem("apiKey");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } else {
      setIsLogin(false);
    }
  };
  const login = () => {
    let apiKey = localStorage.getItem("apiKey");
    if (apiKey) {
      let email = localStorage.getItem("email");
      if (email) {
        console.log("ok");
        client.setApiKey(apiKey);
        alert(` Chào mừng trở lại ${email}`);
        setIsLogin(true);
      } else {
        getApiKey();
      }
    } else {
      getApiKey();
    }
  };

  const getTodos = async () => {
    if (isLogin) {
      const { response, data } = await client.get(`/todos`);
      if (response.ok) {
        setTodos(data.data.listTodo);
      } else {
        alert("Không ổn rồi! Đã có lỗi xảy ra! Vui lòng load lại trang");
        localStorage.removeItem("email");
        localStorage.removeItem("apiKey");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  };

  useEffect(() => {
    login();
  }, []);

  useEffect(() => {
    getTodos();
  }, [login]);
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to Todo App!</h1>
        <FormTodoApp render={getTodos} />
        <div className="todo-app-list">
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <TodoItem
                  key={todo._id}
                  render={getTodos}
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
        {console.log("render")}
      </div>
    </div>
  );
}
