import { ChangeEvent, useContext, useState } from "react";
import { IReviewContext, ReviewContext } from "../../contexts/ReviewContext";

const WelcomePage = () => {
  const { currentReview } = useContext<IReviewContext>(ReviewContext);
  const [username, setUsername] = useState(currentReview);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsername((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const updateContext = () => {
    // lägg in i mitt currentReview? eller är det det jag ska använda min reducer till?
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
      <button onClick={updateContext}>Update Context</button>
    </div>
  );
};

export default WelcomePage;
