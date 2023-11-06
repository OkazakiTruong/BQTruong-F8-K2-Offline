import React from "react";
import FormTodoApp from "./components/formTodoApp";

export default function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to Todo App!</h1>
        {formTodoApp()}
      </div>
    </div>
  );
}
