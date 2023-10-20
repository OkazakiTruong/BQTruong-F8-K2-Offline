import { client } from "./client.js";

export const requestRefresh = async (refreshToken) => {
  const { data: tokens } = await client.post("/auth/refresh-token", {
    refreshToken: refreshToken,
  });
  console.log(tokens);

  return tokens;
};
