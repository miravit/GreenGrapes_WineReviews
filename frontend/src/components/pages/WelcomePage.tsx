import { ChangeEvent, FormEvent, useState } from "react";
import { IName } from "../../models/IReview";

interface WelcomePageProps {
  setName: (name: IName) => void;
}
export const WelcomePage = ({ setName }: WelcomePageProps) => {
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
    setName(username);
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

export default WelcomePage;
