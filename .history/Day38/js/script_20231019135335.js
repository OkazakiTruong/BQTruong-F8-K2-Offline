import { client } from "./client.js";

console.log("OK");
const getUser = async () => {
  const { data: blog, response } = await client.get("/blog");
  console.log(response);
};

getUser();
