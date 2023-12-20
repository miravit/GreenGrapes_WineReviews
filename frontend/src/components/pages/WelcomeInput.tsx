import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { IName } from "../../models/IReview";
import { ReviewDispatchContext } from "../../contexts/ReviewDispatchContext";
import { ActionType } from "../../reducers/ReviewsReducer";

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
    <div>
      <label>
        Firstname:
        <input
          type="text"
          name="firstname"
          value={username.firstname}
          onChange={handleChange}
        />
      </label>
      <label>
        lastname:
        <input
          type="text"
          name="lastname"
          value={username.lastname}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default WelcomeInput;
