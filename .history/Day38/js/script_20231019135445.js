import { client } from "./client.js";

console.log("OK");
const getUser = async () => {
  const { data: blog, response } = await client.get("/blogs");
  console.log(response);
};

getUser();
