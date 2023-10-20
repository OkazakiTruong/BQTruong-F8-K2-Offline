import { client } from "./client.js";

export const requestRefresh = async (refreshToken) => {
  const tokens = await client.post("/auth/refresh-token", {
    refreshToken,
  });
  console.log(tokens);

  return tokens;
};
