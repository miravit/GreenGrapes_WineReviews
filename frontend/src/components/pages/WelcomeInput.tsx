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
  color: black;
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

  p {
    font-style: oblique;
  }
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
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 29px;
    padding-top: 30px;
    margin: 7px;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    background-color: #ffffff75;
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
  margin-top: 10px;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  height: 40px;
  border-radius: 5px;
  border: none;
  /* box-shadow: inset 0 0px 10px 2px #d8d3d3;
  background: #fff; */
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
      setShowErrorMsg("Please provide a name");
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
          <p>{showErrorMsg}</p>
          <Container>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="firstname"
                placeholder="firstname"
                value={username.firstname}
                onChange={handleChange}
              />

              <Input
                type="text"
                name="lastname"
                placeholder="lastname"
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
