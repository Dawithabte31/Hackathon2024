import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  seller: null,
  isFetching: false,
  error: false,
};


export const Contextseller = createContext(INITIAL_STATE);
export const ContextsellerProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("seller", JSON.stringify(state.seller));
  }, [state.seller]);

  return (
    <Contextseller.Provider
      value={{
        seller: state.seller,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Contextseller.Provider>
  );
};
