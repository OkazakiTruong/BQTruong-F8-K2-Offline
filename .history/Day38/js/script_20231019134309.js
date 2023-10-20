import { client } from "./client.js";

const getUser = async () => {
  const { data: users, response } = await client.get("/users/profile");
};
