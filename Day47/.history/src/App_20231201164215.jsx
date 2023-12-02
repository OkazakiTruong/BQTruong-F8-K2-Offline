import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { loginSelector } from "./stores/selector";
import { useDispatch } from "react-redux";
import Home from "./pages/Home/Home";

export default function App() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const login = useSelector(loginSelector);
  useEffect(() => {
    if (isLogin) {
      dispatch(fetchTodos());
    }
  }, [isLogin]);
  useEffect(() => {
    setIsLogin(login);
  }, []);
  return <div>{!login.isLogin ? <Login /> : <Home />}</div>;
}
