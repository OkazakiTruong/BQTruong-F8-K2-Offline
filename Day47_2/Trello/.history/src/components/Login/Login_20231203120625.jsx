import React, { useEffect, useState } from "react";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { getApiKey } from "../../stores/slices/LoginSlice";
import { loginSelector } from "../../stores/selectors/selectors";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";

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
    if (loginState.status === "rejected") {
      toast.error("Loin fail", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.success("Loin fail", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  }, [loginState.status]);

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
