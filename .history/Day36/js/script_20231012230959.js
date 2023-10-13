import { client } from "./config.js";

const getData = async () => {
  const { data: posts } = await client.get("/posts");
  console.log(posts);
};
getData();
