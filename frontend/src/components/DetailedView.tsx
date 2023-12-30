import styled from "styled-components";
import { IReview } from "../models/IReview";
import { theme } from "../themes/theme";
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
`;
const OnePost = styled.div`
  display: flex;
  background-color: #f8f6f6;
  border: 2px solid ${theme.secondaryColor};

  p {
    color: black;
    margin-top: 0;
    margin-bottom: 0;
  }
  h3 {
    margin: 0;
    margin-left: 5px;
    text-align: center;
    color: black;
    font-weight: 200;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;
const InfoContainer = styled.div`
  background-color: #f8f6f6;
  //border: 1px solid black;
  width: 80%;
  height: 305px;
`;
const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    border: 2px solid ${theme.secondaryColor};
    border-radius: 20px;
    width: 50px;
    margin-left: 4px;
    text-align: center;
    margin-right: 4px;
    background-color: ${theme.secondaryColor};
    margin-top: 0;
    margin-bottom: 0;
  }
`;
const Photos = styled.img`
  width: 168px;
  height: 200px;
  padding-top: 0px;
  margin-top: 50px;
`;
interface AllPhotosProps {
  reviews: IReview[];
}

export const DetailedView = ({ reviews }: AllPhotosProps) => {
  console.log(reviews);
  return (
    <>
      <Container>
        {reviews.map((review, i) => (
          <>
            <OnePost key={i} className="photo-div">
              <Photos
                src={review.photo}
                alt={`Photo of the wine: ${review.wineName}`}
              />
              <InfoContainer>
                <h3>{review.wineName}</h3>
                <InfoDiv>
                  <p>{review.price} kr</p>
                  <p>{review.rating} / 5</p>
                  <p>{review.percentage} %</p>
                </InfoDiv>
                <p>{review.producer}</p>
                <p>{review.grape}</p>
                <p>{review.foodPairing}</p>
                <p>{review.comment}</p>
                <p>
                  {review.firstname}
                  {review.lastname}
                </p>
              </InfoContainer>
            </OnePost>
          </>
        ))}
      </Container>
    </>
  );
};

export default DetailedView;
