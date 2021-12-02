import { createContext, useContext, useReducer } from "react";
import Cookies from "js-cookie";
import { types } from "../types/types";

export const HeaderContext = createContext(null);

const initialState = {
  
}
const reducer = (state,action)=> {

  switch (action.type) {
    case "assad": {
      
    }
  }
}
export const HeaderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <HeaderContext.Provider value={{ value }}>{children}</HeaderContext.Provider>;
};


export function useHeaderContext() {
  const context = useContext(HeaderContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useHeaderContext;