import React from "react";
import "./home.scss";
import Column from "./Column";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {}, []);
  return (
    <div className="home-wrapper">
      <Column />
    </div>
  );
}
