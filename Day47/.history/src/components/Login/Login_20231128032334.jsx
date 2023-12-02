import React, { useState } from "react";
import "./login.scss";
import { useDispatch } from "react-redux";
import { getApiKey } from "../../stores/slices/LoginSlice";
const login = useSelector(loginSelector);

export default function Login() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getApiKey(email));
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="login-wrapper">
        <h1>Sử dụng email để có thể đăng nhập Chello nhé!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Nhập vào email của bạn!!"
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
}
