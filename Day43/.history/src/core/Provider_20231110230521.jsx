import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./store";
export const storeContext = createContext();

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {console.log(state);}
      {children}
    </storeContext.Provider>
  );
}
