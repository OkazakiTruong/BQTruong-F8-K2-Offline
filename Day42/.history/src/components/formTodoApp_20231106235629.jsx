import React, { useState } from "react";
import { client } from "../../client";

export default function FormTodoApp() {
  const [todo, setTodo] = useState("");
  const addANewTodo = async() =>{
    if(todo.trim().length >=2){
        const {response} = client.post("/todos",{"todo":todo});
        if(response.ok){
            alert("Thêm thành công!")
        }else{
            alert("Không ổn rồi! Phải reload trang thôi!")
            setTimeout(()=>{
                window.location.reload();
            },2000)
        }
    }
  }
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  
  return (
    <div>
      <form action="" className="todo-app-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Thêm một việc làm mới"
          name="todo"
          onChange={handleChange}
        />
        <div className="btn-group">
          <button className="btn btn-add-new">Thêm mới</button>
          <button className="btn btn-search">Tìm kiếm</button>
        </div>
      </form>
    </div>
  );
}
