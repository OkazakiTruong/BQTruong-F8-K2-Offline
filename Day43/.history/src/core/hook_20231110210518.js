import { useContext } from "react";
import { storeContext } from "./Provider";

export const useSelector = () => {
  const { state } = useContext(storeContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(storeContext);
  return dispatch;
};
