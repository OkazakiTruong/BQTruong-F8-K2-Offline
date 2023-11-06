import React, { useState } from "react";
import FormTodoApp from "./components/formTodoApp";
import ListTodoItem from "./components/listTodoItem";

export default function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to Todo App!</h1>
        <FormTodoApp />
        <ListTodoItem />
      </div>
    </div>
  );
}
