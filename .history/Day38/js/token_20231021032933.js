import { client } from "./client.js";

export const requestRefresh = async (refreshToken) => {
  const { data: dataReturn } = await client.post("/auth/refresh-token", {
    refreshToken: refreshToken,
  });
  console.log(dataReturn);
  const tokens = dataReturn.data.tokens;

  return tokens;
};
