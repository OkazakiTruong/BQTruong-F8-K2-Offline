import React, { useEffect } from "react";
import { client } from "./utils/clientUntil";

export default function App() {
  useEffect(() => {
    const { response } = client.get("/task");
    console.log(response);
  }, []);
  return <div>App</div>;
}
