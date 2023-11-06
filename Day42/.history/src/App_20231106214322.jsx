import React, { useEffect, useState } from "react";
import FormTodoApp from "./components/formTodoApp";
import ListTodoItem from "./components/listTodoItem";
import { client } from "../client";

export default function App() {
  const [login, setLogin] = useState(false);

  const Login = () => {
    let apiKey = localStorage.getItem("apiKey");
    if (apiKey) {
      let email = localStorage.getEmail("email");
      if (email) {
      }
    }
  };

  useEffect(() => {}, [login]);
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
