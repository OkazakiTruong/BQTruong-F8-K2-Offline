import React, { useEffect, useState } from "react";
import FormTodoApp from "./components/formTodoApp";
import ListTodoItem from "./components/listTodoItem";
import { client } from "../client";

export default function App() {
  const getApiKey = async () => {
    const [isLogin, setIsLogin] = useState(false);

    const email = prompt("Nhập vào Email của bạn");
    if (email) {
      let { response, data: apiKey } = await client.get(`/api-key?${email}`);
      if (response.ok) {
        localStorage.setItem("email", email);
        localStorage.setItem("apiKey", apiKey);
        client.setApiKey(apiKey);
        alert(`Chào mừng trở lại ${email}`);
        // setIsLogin(true);
      } else {
        // setIsLogin(true);
        alert("Không ổn rồi! đã có lỗi xảy ra vui lòng reload");
        setInterval(() => {
          window.location.reload();
        }, 2000);
      }
    } else {
      // setIsLogin(false);
    }
  };
  const login = async () => {
    let apiKey = localStorage.getItem("apiKey");
    if (apiKey) {
      let email = localStorage.getEmail("email");
      if (email) {
        client.setApiKey(apiKey);
        alert(` Chào mừng trở lại ${email}`);
        // setIsLogin(true);
      } else {
        getApiKey();
      }
    } else {
      getApiKey();
    }
  };

  useEffect(() => {
    console.log("start");
    login();
  }, []);
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to Todo App!</h1>
        <FormTodoApp />
        <ListTodoItem />
        {console.log("render")}
      </div>
    </div>
  );
}
