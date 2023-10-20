import { client } from "./client.js";

console.log("OK");
const getUser = async () => {
  const { data: users, response } = await client.get("/blog");
  console.log("response", response);
  console.log(users);
};

getUser();
