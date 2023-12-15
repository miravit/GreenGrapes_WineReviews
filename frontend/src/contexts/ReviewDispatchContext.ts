import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/ReviewsReducer";

export const ReviewDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
