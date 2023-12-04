import React, { useEffect } from "react";
import Header from "../../layout/HeaderLayout/Header";
import { toast } from "react-toastify";
import "./broad.scss";
import { useDispatch } from "react-redux";

export default function Broad() {
  const dispath = useDispatch();
  useEffect(() => {
    toast.success("Welcome to Trello version 2", {
      autoClose: 2000,
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="broad-wrapper">Broad</div>
    </div>
  );
}
