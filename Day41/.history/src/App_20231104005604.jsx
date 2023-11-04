import React from "react";
import TodoList from "./components/TodoList";
import { client } from "./client";
import "./assets/scss/app.scss";

async function getData() {
  let { data: apikey } = await client.get(
    "/api-key?email=buiquangtruong1105@gmail.com"
  );
  await client.setApiKey(apikey.data.apiKey);
  let { data } = await client.get("/todos");
  console.log(data.data.listTodo);
}
const getCookieName = (lists) => {
  let arr = lists.split(";");
  let obj = {};
  arr.forEach((item) => {
    item = item.trim();
    let matchResult = item.match(/(.+)=(.+)/);
    if (matchResult) {
      obj[matchResult[1]] = matchResult[2];
    }
  });
  return obj;
};
const alertToGetApiKey = async () => {
  let cookieObj = getCookieName(document.cookie);
  console.log(cookieObj);

  // if (!document.cookie.apiKey) {
  //   let email = prompt("Please enter your email ?");
  //   document.cookie = `Email=${email}`;
  //   let { data: apiKey } = await client.get(
  //     `/api-key?${document.cookie.Email}`
  //   );
  // }
};
alertToGetApiKey();

export default function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-app-heading">Welcome to todo app</h1>
        <form className="todo-app-form">
          <div className="todo-app-input-group">
            <input
              className="input-todo"
              type="text"
              placeholder="Thêm mới một công việc"
            />
            <button className="btn-add">Thêm mới</button>
          </div>
        </form>
        <div className="todo-app-list">
          <TodoList />
        </div>
      </div>
    </div>
  );
}
