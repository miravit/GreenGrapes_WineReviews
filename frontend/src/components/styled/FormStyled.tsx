import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  //margin-top: 30px;

  input {
    width: 320px;
    height: 30px;
    border-radius: 9px;
    border: none;
  }

  .small-input-container {
    display: flex;
    flex-direction: row;
    margin-top: 20px;

    input {
      width: 130px;
    }
    .percentage-label {
    }
    .percentage {
      margin-right: 4px;
    }
    .price-label {
      margin-left: 5px;
    }
    .price {
      margin-left: 20px;
    }
  }

  .rating {
    display: flex;
    align-items: center;
  }

  svg polygon {
    stroke: #dbdbdb;
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: #dbdbdb;
    margin-right: 1rem;
  }

  svg polygon {
    transition: all 300ms ease;
  }

  .star {
    height: 50px;
    margin-left: 80px;
    margin-top: 29px;
  }
  svg:hover polygon {
    stroke: #d6bb0d;
    fill: #d6bb0d;
    cursor: pointer;
  }

  svg polygon:hover ~ polygon {
    stroke: #dbdbdb;
    fill: #dbdbdb;
  }

  .clickedstar {
    stroke: #d6bb0d;
    fill: #d6bb0d;
  }

  .button-container {
    display: flex;
    margin: 10px;
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
