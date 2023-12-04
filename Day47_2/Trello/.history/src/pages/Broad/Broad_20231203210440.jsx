import React, { useEffect } from "react";
import Header from "../../layout/HeaderLayout/Header";
import { toast } from "react-toastify";
import "./broad.scss";

export default function Broad() {
  useEffect(() => {
    toast.success("Welcome to Trello version 2");
  }, []);
  return (
    <div>
      <Header />
      <div className="broad-wrapper">Broad</div>
    </div>
  );
}
