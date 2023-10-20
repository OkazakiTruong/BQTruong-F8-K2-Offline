import { client } from "./client.js";

const getUser = async () => {
  const { data: users, response } = await client.get("/users/profile");
  console.log("response", response);
  console.log(users);
};
