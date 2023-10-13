import { client } from "./client.js";
const listNews = document.querySelector(".container .list-news");

const getPosts = async () => {
  const { data: posts } = await client.get("/posts");
  posts.forEach((post) => {});
};
