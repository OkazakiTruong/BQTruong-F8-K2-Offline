import { client } from "./client.js";

console.log("OK");
const getUser = async () => {
  const { data: blogs, response } = await client.get("/blogs");
  console.log(blogs);
};

getUser();
