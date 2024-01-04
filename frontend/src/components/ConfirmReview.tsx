import { useContext, useEffect, useState } from "react";
import { ReviewReducerContext } from "../contexts/ReviewContext";
import { IReview } from "../models/IReview";
import styled from "styled-components";
import { theme } from "../themes/theme";

const Container = styled.div`
  // display: flex;
  flex-direction: column;
  // margin-top: 20px;
  //padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  width: 100vw;
  //background-color: #ffffffdf;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset; */
  color: black;

  .comment-container {
    padding-right: 200px;
    margin: 0;
    padding: 0%;
    //padding-left: 10px;
    padding-top: 10px;

    p {
      margin: 0;
    }
  }

  .comment-label {
    font-weight: bold;
    color: ${theme.secondaryColor};
  }
`;

const HeadingContainer = styled.div`
  // margin-left: 45px;
  display: flex;
  justify-content: center;
  max-width: 100vw;
  color: ${theme.secondaryColor};
  margin-bottom: 8px;
  margin-top: 0px;
`;

const Heading = styled.h2`
  //color: #f545a6;
  color: ${theme.secondaryColor};
  margin: 0;
  max-width: 100vw;
`;

const Photo = styled.img`
  //border: solid 10px ${theme.secondaryColor};
  border: solid 2px;
  border-bottom-color: #ffe;
  border-left-color: #eed;
  border-right-color: #eed;
  border-top-color: #ccb;
  /* max-height: 100%;
  max-width: 100%; */
`;

const ImgHeader = styled.div`
  background-color: #ddc;
  border: solid 5vmin #eee;
  border-bottom-color: #fff;
  border-left-color: #eee;
  border-radius: 2px;
  border-right-color: #eee;
  border-top-color: #ddd;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: inline-block;
  //margin-left: 60px;
  height: 290px;
  padding: 8vmin;
  position: relative;
  text-align: center;
  padding: 0%;
  margin-left: 75px;

  &:before {
    border-radius: 2px;
    bottom: -2vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
    content: "";
    left: -2vmin;
    position: absolute;
    right: -2vmin;
    top: -2vmin;
  }
  &:after {
    border-radius: 2px;
    bottom: -2.5vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
    content: "";
    left: -2.5vmin;
    position: absolute;
    right: -2.5vmin;
    top: -2.5vmin;
  }
`;
const SmallContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  max-width: 100vw;
  color: white;
  margin-bottom: 10px;

  p {
    border: 2px solid ${theme.secondaryColor};
    border-radius: 20px;
    width: 70px;
    text-align: center;
    //margin-right: 20px;
    background-color: ${theme.secondaryColor};
  }
`;

const BigContainer = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  p {
    margin: 0;
  }

  .text-container {
    display: flex;
    //margin-right: 50px;
  }

  .label {
    color: ${theme.secondaryColor};
    min-width: 150px;
    font-weight: bold;
    //margin-left: 10px;
  }
`;

const ConfirmReview = () => {
  const createReview = useContext(ReviewReducerContext);
  const review: IReview = createReview.review;

  const [imageBlob, setImageBlob] = useState<Blob | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (typeof review.photo === "string") {
        const response = await fetch(review.photo);
        const blob = await response.blob();
        setImageBlob(blob);
      } else {
        setImageBlob(review.photo);
      }
    };

    fetchImage();
  }, [review.photo]);

  return (
    <>
      {review && (
        <>
          <Container>
            <HeadingContainer>
              <Heading className="custom-font">{review.wineName}</Heading>
            </HeadingContainer>
            {imageBlob && (
              <ImgHeader>
                <Photo
                  src={URL.createObjectURL(imageBlob)}
                  alt={`Photo of the wine: ${review.wineName}`}
                  style={{ width: "200px", height: "250px" }}
                />
              </ImgHeader>
            )}
            <BigContainer>
              <SmallContainer>
                <p>{review.price} kr </p>
                <p>{review.percentage} %</p>
                <p>{review.rating} / 5</p>
              </SmallContainer>
              <div className="text-container">
                <p className="label">Grape: </p>
                <p>{review.grape}</p>
              </div>
              <div className="text-container">
                <p className="label">Producer: </p>
                <p>{review.producer}</p>
              </div>
              <div className="text-container">
                <p className="label">Food suggestion: </p>
                <p>{review.foodPairing}</p>
              </div>
              {/* <div className="text-container">
                <p className="label">Your Name: </p>
                <p>{review.firstname + " " + review.lastname}</p>
              </div> */}
              <div className="comment-container">
                <p className="comment-label">Comment: </p>
                <p>{review.comment}</p>
              </div>
            </BigContainer>
          </Container>
        </>
      )}
    </>
  );
};

export default ConfirmReview;
