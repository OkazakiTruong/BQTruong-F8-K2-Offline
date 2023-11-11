import React, { createContext, useReducer } from "react";
export const storeContext = createContext();
export const [state, dispatch] = useReducer();

export default function Provider({ children }) {
  return <storeContext.Provider>{children}</storeContext.Provider>;
}
