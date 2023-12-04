import React, { useEffect } from "react";
import { client } from "./utils/clientUntil";

export default function App() {
  useEffect(async () => {
    const { response } = await client.get("/task");
    console.log(response);
  }, []);
  return <div>App</div>;
}
