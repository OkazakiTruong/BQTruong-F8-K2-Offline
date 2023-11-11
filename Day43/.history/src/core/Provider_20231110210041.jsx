import React, { createContext, useReducer } from "react";
export const storeContext = createContext();

export default function Provider({ children }) {
  const [state, dispatch] = useReducer();
  return (
    <storeContext.Provider value={(state, dispatch)}>
      {children}
    </storeContext.Provider>
  );
}
