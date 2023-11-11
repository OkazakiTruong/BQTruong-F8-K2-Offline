import { useContext } from "react";
import Provider from "./Provider";
import { storeContext } from "./Provider";

export const useSelector = () => {
  const { state } = useContext(storeContext);
  return state;
};
