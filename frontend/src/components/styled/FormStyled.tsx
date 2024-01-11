import styled from "styled-components";
import { theme } from "../../themes/theme";

export const FormStyled = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 30px;

  input {
    width: 320px;
    height: 40px;
    border-radius: 4px;
    border: none;

    @media (min-width: 768px) {
      width: 420px;
    }
  }
  .formWrapper {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      margin-top: 80px;
    }
    @media (min-width: 1024px) {
      margin-top: 20px;
    }
  }
  .small-input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 140px;

      @media (min-width: 768px) {
        width: 200px;
      }
    }
    .percentage,
    .price {
      display: flex;
      flex-direction: column;
      margin-right: 5px;
    }
  }
  .rating {
    display: flex;
    align-items: center;
  }

  svg polygon {
    stroke: #ffffff;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: #ffffff;
  }

  svg polygon {
    transition: all 300ms ease;
  }
  .star {
    height: 50px;
    margin-left: 30px;
    margin-top: 29px;

    @media (min-width: 768px) {
      margin-left: 80px;
    }
  }
  .grape-photo-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -23px;

    input {
      width: 250px;
      margin-top: 21px;

      @media (min-width: 768px) {
        width: 340px;
      }
    }
    label {
      margin: 0px;
      padding: 0px;
    }
  }

  svg.photo-icon {
    padding-right: 3px;
    padding-top: 15px;
    font-size: 50px;
    color: ${theme.buttonColor};
    text-align: center;
  }
  svg:hover polygon {
    stroke: ${theme.buttonColor};
    fill: ${theme.buttonColor};
    cursor: pointer;
  }

  svg polygon:hover ~ polygon {
    stroke: #ffffff;
    fill: #ffffff;
  }

  .clickedstar {
    stroke: ${theme.buttonColor};
    fill: ${theme.buttonColor};
  }

  .button-container {
    display: flex;
    justify-content: center;

    button {
      height: 40px;
      margin-top: 14px;
      @media (min-width: 768px) {
        margin-top: 60px;
      }
      @media (min-width: 1024px) {
        margin-top: 30px;
      }
    }
  }
`;
