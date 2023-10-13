import { client } from "./client.js";

const getPosts = async () => {
  const { data: posts } = await client.get("/posts");
  console.log(posts);
};
