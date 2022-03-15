import Logger from "components/Logger";
import { ActionType, IGlobalState } from "types/app";

const Reducer = (state: IGlobalState, action: ActionType): any => {
  Logger("Reducer: state:", state);
  Logger("Reducer: action:", action);
  switch (action.type) {
    case "SET_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
