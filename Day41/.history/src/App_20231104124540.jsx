import React, { Component } from "react";
import TodoList from "./components/TodoList";
import FormAddNew from "./components/FormAddNew";
import { client } from "./client";
import "./assets/scss/app.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTodo: [],
    };
    console.log("constructor");
  }
  isLogin = false;
  isDidMount = true;
  getCookieName(lists) {
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
  }
  async getKey(email) {
    const { response, data } = await client.get(`/api-key?email=${email}`);
    return { response, data };
  }
  alertToGetApiKey() {
    let cookieObj = this.getCookieName(document.cookie);
    if (!cookieObj.apiKey || cookieObj.apiKey === null) {
      let email = prompt("Vui lòng nhập email của bạn:");
      if (email) {
        this.getKey(email).then((res) => {
          const { response, data } = res;
          console.log(response);
          if (response.status === 200) {
            let apiKey = data.data.apiKey;
            document.cookie = `Email=${email}`;
            document.cookie = `apiKey=${apiKey}`;
            client.setApiKey(apiKey);
            alert(`Chào mừng quay trở lại! ${email}`);
            this.isLogin = true;
          } else {
            alert("Lỗi vui lòng tải lại trang");
            document.cookie = `apiKey=;expires=${new Date().toUTCString()}`;
            document.cookie = `Email=;expires=${new Date().toUTCString()}`;
            this.isLogin = false;
            setTimeout(() => {
              window.location.reload();
            }, 4000);
          }
        });
      }
    } else {
      let email = cookieObj.Email;
      if (!email) {
        document.cookie = `apiKey=;expires=${new Date().toUTCString()}`;
        document.cookie = `Email=;expires=${new Date().toUTCString()}`;
        Window.location.reload();
        this.isLogin = false;
      } else {
        alert(`Chào mừng quay trở lại ${email}`);
        let cookieObj = this.getCookieName(document.cookie);
        client.setApiKey(cookieObj.apiKey);
        this.isLogin = true;
      }
    }
  }
  getTodoList = async () => {
    if (this.isLogin) {
      let { data, response } = await client.get("/todos");
      if (response.status === 200) {
        this.setState({ arrTodo: data.data.listTodo });
      }
    }
  };
  componentWillUnmount() {
    this.isDidMount = false;
  }
  componentDidMount() {
    this.isDidMount = true;
    this.alertToGetApiKey();
    this.getTodoList();
  }

  render() {
    return (
      <div className="container">
        <div className="todo-app">
          <h1 className="todo-app-heading">Welcome to todo app</h1>
          <FormAddNew></FormAddNew>
          <div className="todo-app-list">
            {this.state.arrTodo.length > 0 ? (
              this.state.arrTodo.map((todoItem) => (
                <TodoList key={todoItem._id} {...todoItem} />
              ))
            ) : (
              <div className="todo-app-item">Không có todo</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
