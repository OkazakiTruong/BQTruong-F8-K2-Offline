import React, { useEffect, useState } from "react";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { getApiKey } from "../../stores/slices/LoginSlice";
import { loginSelector } from "../../stores/selectors/selectors";

export default function Login() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const loginState = useSelector(loginSelector);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getApiKey(email));
    setEmail("");
  };
  useEffect(() => {
    console.log(loginState);
  });
  return (
    <>
      {loginState.status === "loading" ? <Loading /> : ""}
      {
        <div className="login-wrapper">
          <div className="login-main">
            <div className="header">Enter Email To Use Trello Ver 2</div>
            <form className="main" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={handleChangeEmail}
                value={email}
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      }
    </>
  );
}
