import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { IName } from "../../models/IReview";
import { ReviewDispatchContext } from "../../contexts/ReviewDispatchContext";
import { ActionType } from "../../reducers/ReviewsReducer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: none;
`;
export const WelcomeInput = () => {
  const dispatch = useContext(ReviewDispatchContext);
  const [username, setUsername] = useState<IName>({
    firstname: "",
    lastname: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsername((prevUsername) => ({
      ...prevUsername,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionType.UPDATEREVIEW,
      payload: {
        firstname: username.firstname,
        lastname: username.lastname,
        // Add other fields to update as needed...
      },
    });
  };
  return (
    <Container>
      <label>Firstname:</label>
      <Input
        type="text"
        name="firstname"
        value={username.firstname}
        onChange={handleChange}
      />

      <label>lastname:</label>
      <Input
        type="text"
        name="lastname"
        value={username.lastname}
        onChange={handleChange}
      />

      <ButtonContainer>
        <button onClick={handleSubmit}>Submit</button>
      </ButtonContainer>
    </Container>
  );
};

export default WelcomeInput;
