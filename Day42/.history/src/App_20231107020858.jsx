import React, { useEffect, useState } from "react";
import FormTodoApp from "./components/formTodoApp";
import { client } from "../client";
import TodoItem from "./components/todoItem";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [render, setRender] = useState(true);
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
        console.log("Không ổn rồi! Đã có lỗi xảy ra! Vui lòng load lại trang");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  };

  useEffect(() => {
    login();
    console.log(isLogin);
    getTodos();
    console.log("state");
  }, []);

  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to Todo App!</h1>
        <FormTodoApp />
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
        {console.log("render")}
      </div>
    </div>
  );
}
