import styled from "styled-components";
import { theme } from "../../themes/theme";

export const FormStyled = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  //margin-top: 30px;

  input {
    width: 320px;
    height: 40px;
    border-radius: 4px;
    border: none;
  }

  .formWrapper {
    display: flex;
    flex-direction: column;
  }

  .small-input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 133px;
    }
    label {
      padding-right: 3px;
    }

    .percentage,
    .price {
      display: flex;
      flex-direction: column;
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

  .grape-photo-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .grapeInput {
      width: 250px;
    }
  }

  svg.photo-icon {
    font-size: 50px;
    color: ${theme.buttonColor};
  }

  .clickedstar {
    stroke: ${theme.buttonColor};
    fill: ${theme.buttonColor};
  }

  .button-container {
    display: flex;
    justify-content: center;
    .photo-icon {
      font-size: 60px;
      padding-right: 40px;
    }
    button {
      height: 40px;
      margin-top: 14px;
    }
  }

  @media screen and (min-width: 768px) {
  }
`;
