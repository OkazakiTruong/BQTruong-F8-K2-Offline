import React from "react";
import "./ui/style.scss";

export default function page() {
  const trans = useTrans();
  return <div>{trans.hello}</div>;
}
