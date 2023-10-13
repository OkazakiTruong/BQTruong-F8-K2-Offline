import { client } from "./client.js";

const getData = async () => {
  const { data: posts } = await client.get("/posts");
  console.log(posts);
};
getData();
