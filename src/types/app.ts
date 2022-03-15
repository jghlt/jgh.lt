import { Dispatch } from "react";

export interface IGlobalState {
  store?: any;
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: IGlobalState;
  dispatch: Dispatch<ActionType>;
};
