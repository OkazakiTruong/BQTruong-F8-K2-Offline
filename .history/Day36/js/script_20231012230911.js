import { client } from "./config.js";

const getData = async () => {
  const { data } = await client.get("/posts");
};
