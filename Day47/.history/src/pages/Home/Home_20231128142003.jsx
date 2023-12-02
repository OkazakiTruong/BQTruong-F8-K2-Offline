import React from "react";
import "./home.scss";
import Column from "./Column";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <div className="home-wrapper">
      <Column />
    </div>
  );
}
