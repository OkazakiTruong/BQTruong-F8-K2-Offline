import React, { Component } from "react";
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
getCookieName = (lists) => {
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
alertToGetApiKey = async () => {
  let cookieObj = getCookieName(document.cookie);
  if (!cookieObj.apiKey) {
    alert("chưa có api");
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("did mount");
  }

  render() {
    alertToGetApiKey();
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
}
