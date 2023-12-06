export interface IReview {
  _id: string;
  firstname: string;
  lastname?: string;
  wineName: string;
  photo: string;
  producer: string;
  percentage: string;
  price: number;
  rating: number;
  foodPairing?: string;
  grape: string;
  comment?: string;
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
