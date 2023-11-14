import React, { createContext, useReducer } from "react";
export const myContext = createContext();
export const { state, dispatch } = useReducer();

export default function Provider({ children }) {
  return <Provider.Provider>{children}</Provider.Provider>;
}
