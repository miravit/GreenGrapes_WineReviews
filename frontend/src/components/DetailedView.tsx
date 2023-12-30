import { IReview } from "../models/IReview";

interface AllPhotosProps {
  reviews: IReview[];
}

export const DetailedView = ({ reviews }: AllPhotosProps) => {
  console.log(reviews);
  return <div>Detailed View!!!</div>;
};

export default DetailedView;
