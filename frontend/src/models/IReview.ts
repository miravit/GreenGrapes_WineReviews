export interface IReview {
  firstname: string;
  lastname: string;
  wineName: string;
  photo: string;
  producer: string;
  percentage: string;
  price: number;
  rating: number;
  foodPairing: string;
  grape: string;
  comment: string;
}

export interface IName {
  firstname: string;
  lastname: string;
}

// export const defaultReview = {
//   _id: "",
//   people: 0,
//   date: "",
//   sitting: "",
//   tables: 0,
//   guest: {
//     name: "",
//     lastname: "",
//     email: "",
//     phone: 0,
//   },
// };
