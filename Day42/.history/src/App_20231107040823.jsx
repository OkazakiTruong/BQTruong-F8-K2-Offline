import React, { useEffect, useState } from "react";
import FormTodoApp from "./components/formTodoApp";
import { client } from "../client";
import TodoItem from "./components/todoItem";
import Loading from "./components/Loading";

let isLogin = false;
export default function App() {
  // const [isLogin, setIsLogin] = useState(false);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTodo, SetSearchTodo] = useState("");

  const isLoading = (flag) => {
    setLoading(flag);
  };
  const Search = (searchTodo) => {
    SetSearchTodo(searchTodo);
    console.log(this.searchTodo);
    if (searchTodo === "") {
      getTodos();
    } else {
      getTodos(searchTodo);
    }
  };

  const getApiKey = async () => {
    const email = prompt("Nhập vào Email của bạn");
    if (email !== null) {
      isLoading(true);
      let { response, data } = await client.get(`/api-key?email=${email}`);
      isLoading(false);
      if (response.ok) {
        localStorage.setItem("email", email);
        localStorage.setItem("apiKey", data.data.apiKey);
        client.setApiKey(data.data.apiKey);
        alert(`Chào mừng trở lại ${email}`);
        isLogin = true;
        getTodos();
      } else {
        isLogin = false;
        alert("Không ổn rồi! đã có lỗi xảy ra vui lòng reload");
        localStorage.removeItem("email");
        localStorage.removeItem("apiKey");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } else {
      isLogin = false;
    }
  };
  const login = () => {
    let apiKey = localStorage.getItem("apiKey");
    if (apiKey) {
      let email = localStorage.getItem("email");
      if (email) {
        client.setApiKey(apiKey);
        alert(` Chào mừng trở lại ${email}`);
        isLogin = true;
        getTodos();
      } else {
        getApiKey();
      }
    } else {
      getApiKey();
    }
  };

  const getTodos = async (query = null) => {
    if (isLogin) {
      isLoading(true);
      console.log(query !== null ? `/todos?q=${query}` : `/todos`);
      const { response, data } = await client.get(
        query !== null ? `/todos?q=${query}` : `/todos`
      );

      isLoading(false);
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
    getTodos();
  }, []);

  return (
    <>
      {loading ? <Loading /> : <></>}
      <div className="container">
        <div className="todo-app">
          <h1 className="todo-app-heading">Welcome to Todo App!</h1>
          <FormTodoApp render={getTodos} loading={isLoading} Search={Search} />
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
                    loading={isLoading}
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
    </>
  );
}