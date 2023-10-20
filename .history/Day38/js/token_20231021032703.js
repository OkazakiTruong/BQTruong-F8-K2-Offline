import { client } from "./client.js";

export const requestRefresh = async (refreshToken) => {
  const { data: dataReturn } = await client.post("/auth/refresh-token", {
    refreshToken: refreshToken,
  });
  const tokens = dataReturn.data.tokens;

  return tokens;
};
