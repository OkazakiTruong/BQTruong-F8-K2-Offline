import { client } from "./client.js";

console.log("OK");
const getUser = async () => {
  const { data: users, response } = await client.get("/blog");
};

getUser();
