import React, { useEffect } from "react";
import { client } from "./utils/clientUntil";

const getApi = async () => {
  const { response } = await client.get("/task");
  console.log("helo");
};
getApi();
export default function App() {
  return <div>App</div>;
}
