import React, { useEffect } from "react";
import { client } from "./utils/clientUntil";

export default function App() {
  useEffect(() => {
    const getApi = async () => {
      const { response } = await client.get("/task");
      console.log(response);
    };
    getApi();
  }, []);
  return <div>App</div>;
}
