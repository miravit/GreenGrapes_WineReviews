import { IReview } from "../models/IReview";

export interface IAction {
  type: ActionType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export enum ActionType {
  GETALLREVIEWS,
  CREATENEWREVIEW,
  UPDATEREVIEW,
  //FILTERED,
}

export interface IAllReviewState {
  reviews: IReview[];
  // filteredReviews: IReview[];
}

export interface IReviewState {
  review: IReview;
  createNewReview: (reviewData: FormData) => Promise<IReview>;
  // filteredReviews: IReview[];
}

export const AllReviewReducer = (
  state: IAllReviewState,
  action: IAction
): IAllReviewState => {
  switch (action.type) {
    case ActionType.GETALLREVIEWS: {
      return {
        reviews: JSON.parse(action.payload),
        // filteredReviews: JSON.parse(action.payload),
      };
    }
    default:
      break;
  }

  return state;
};

export const NewReviewReducer = (
  state: IReviewState,
  action: IAction
): IReviewState => {
  switch (action.type) {
    case ActionType.CREATENEWREVIEW: {
      const newReview: IReview = {
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        wineName: action.payload.wineName,
        photo: action.payload.photo,
        producer: action.payload.producer,
        percentage: action.payload.percentage,
        price: action.payload.price,
        rating: action.payload.rating,
        foodPairing: action.payload.foodPairing,
        grape: action.payload.grape,
        comment: action.payload.comment,
      };

      return { ...state, review: newReview };
    }

    case ActionType.UPDATEREVIEW: {
      const updatedFields: Partial<IReview> = action.payload;

      return { ...state, review: { ...state.review, ...updatedFields } };
    }

    default:
      break;
  }

  return state;
};
