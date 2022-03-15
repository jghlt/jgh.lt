import React, {
  createContext,
  ReactElement,
  ReactNode,
  useReducer,
} from "react";
import { ContextType, IGlobalState } from "types/app";
import Reducer from "./reducer";

const initialState: IGlobalState = {
  state: {},
  error: false,
};

const Store = ({ children }: { children: ReactNode }): ReactElement => {
  const [globalState, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{ globalState, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext({} as ContextType);
export default Store;
