import React from "react";
import "./ui/style.scss";
import useTrans from "./page/hooks/useTrans";

export default function page() {
  const trans = useTrans();
  return <div>{trans.hello}</div>;
}
