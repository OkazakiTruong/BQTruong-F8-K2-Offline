import React, { useEffect } from "react";
import Header from "../../layout/HeaderLayout/Header";
import { toast } from "react-toastify";
import "./broad.scss";
import { useDispatch } from "react-redux";
import { fetchBroad } from "../../stores/slices/BroadSlice";

export default function Broad() {
  const dispatch = useDispatch();
  useEffect(() => {
    toast.success("Welcome to Trello version 2", {
      autoClose: 2000,
    });
    dispatch(fetchBroad());
  }, []);
  return (
    <div>
      <Header />
      <div className="broad-wrapper">Broad</div>
    </div>
  );
}
