import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers";

export const GlobalContext = createContext({
  state: initialState,
  dispatch: () => {},
});

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
