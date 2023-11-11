import React, { createContext } from "react";

export const storeContext = createContext();
export default function Provider({ children }) {
  return <storeContext.Provider>{children}</storeContext.Provider>;
}
