import React, { ChangeEvent, useState } from "react";

const WelcomePage = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(username);
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
        <label>
          lastname:
          <input
            type="text"
            name="lastname"
            value={username.lastname}
            onChange={handleChange}
          />
        </label>
      </label>
    </div>
  );
};

export default WelcomePage;
