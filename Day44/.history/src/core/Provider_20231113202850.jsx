import React, { createContext } from "react";
export const myContext = createContext();

export default function Provider({ children }) {
  return <Provider.Provider>{children}</Provider.Provider>;
}
