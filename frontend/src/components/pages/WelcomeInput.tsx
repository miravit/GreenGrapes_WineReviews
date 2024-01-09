import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { IName } from "../../models/IReview";
import { ReviewDispatchContext } from "../../contexts/ReviewDispatchContext";
import { ActionType } from "../../reducers/ReviewsReducer";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #84ba5a;
  padding: 20px;
  border-radius: 8px;
  max-width: 70%;
  //max-height: 80%;
  color: black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin-top: 80px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #84ba5a;
    padding: 8px;
  }

  .back-button {
    border: none;
    background-color: inherit;
    text-decoration: underline;
    margin-left: 170px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  //margin-top: 20px;
  margin-bottom: 10px;
  width: 70%;
  height: 40px;
  border-radius: 5px;
`;
interface NameModalProps {
  onClick: () => void;
}
export const WelcomeInput = ({ onClick }: NameModalProps) => {
  const dispatch = useContext(ReviewDispatchContext);
  const [username, setUsername] = useState<IName>({
    firstname: "",
    lastname: "",
  });
  const [showErrorMsg, setShowErrorMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsername((prevUsername) => ({
      ...prevUsername,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (username.firstname === "") {
      setShowErrorMsg("Please provide a name :)");
    }

    dispatch({
      type: ActionType.UPDATEREVIEW,
      payload: {
        firstname: username.firstname,
        lastname: username.lastname,
      },
    });
  };
  return (
    <>
      <ModalOverlay>
        <ModalContent>
          {showErrorMsg}
          <Container>
            <form onSubmit={handleSubmit}>
              <label>Firstname:</label>
              <Input
                type="text"
                name="firstname"
                value={username.firstname}
                onChange={handleChange}
              />

              <label>Lastname:</label>
              <Input
                type="text"
                name="lastname"
                value={username.lastname}
                onChange={handleChange}
              />

              <ButtonContainer>
                <button onSubmit={handleSubmit}>Submit</button>
              </ButtonContainer>
            </form>
            <button className="back-button" onClick={onClick}>
              Go back
            </button>
          </Container>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default WelcomeInput;
