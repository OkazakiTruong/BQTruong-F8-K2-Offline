import { client } from "./client.js";

const getUser = async () => {
  let { data: users, response } = await client.get("/users/profile");
};
