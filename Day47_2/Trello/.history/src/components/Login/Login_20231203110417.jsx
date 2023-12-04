import React, { useEffect, useState } from "react";
import "./login.scss";
import { useDispatch } from "react-redux";
import { getApiKey } from "../../stores/slices/LoginSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // Đoạn mã này sẽ được gọi mỗi khi email thay đổi
    console.log("Updated email:", email);

    // Bạn có thể gọi các hàm khác ở đây nếu cần
    // dispatch(getApiKey(email));
  }, [email]);
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("sss");
    console.log("abc");
    // dispatch(getApiKey(email));
  };
  return (
    <div className="login-wrapper">
      <div className="login-main">
        <div className="header">Enter Email To Use Trello Ver 2</div>
        <form className="main" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleChangeEmail}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
