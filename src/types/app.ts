import { Dispatch } from "react";

export interface IGlobalState {
  state?: any;
  error?: boolean
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: IGlobalState;
  dispatch: Dispatch<ActionType>;
};
