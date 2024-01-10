import styled from "styled-components";

export const ConfirmReviewStyled = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  padding-top: 8px;
  margin: 16px;
  margin-top: 20px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: #84ba5a;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: 600px;
  }

  .winecard {
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    padding-top: 2px;
    margin: 7px;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    background-color: #ffffff75;

    &:hover {
      transform: scale(1.01);
    }

    .wine-name-container {
      display: flex;
      justify-content: center;

      h2 {
        margin: 0px;
        padding-bottom: 3px;
        color: #333;
        font-size: 14pt;
        text-align: center;
      }
    }

    .img-container {
      display: flex;
      justify-content: center;

      img {
        max-width: 100%;
        border-radius: 4px;
        border: 2px;
      }
    }

    .wine-details-container {
      font-size: 14px;

      .small-info-container {
        display: flex;
        justify-content: space-between;
        margin: 0;
        max-width: 100vw;
        margin-bottom: 10px;

        p {
          border: 2px solid white;
          border-radius: 8px;
          width: 70px;
          text-align: center;
          color: #333;

          @media (min-width: 768px) {
            width: 100px;
          }
        }
      }
      .text-wrapper {
        color: #333;
        padding: 5px;

        .dynamic-text {
          font-style: oblique;
        }
      }
    }
    .name-container {
      display: flex;
      justify-content: end;

      span {
        color: #333;
        font-size: 10pt;
        font-style: oblique;
      }
    }
  }
  @media screen and (min-width: 768px) {
  }
`;
