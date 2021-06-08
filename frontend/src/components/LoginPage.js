import React, { useContext, useState } from "react";
import Styled from "styled-components";
import { AppContext } from "./AppProvider";
import { themeVars } from "./GlobalStyles";

import Input from "./Input";

const Comp = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSumbit = () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <Div>
      <form className="form" onSubmit={handleSumbit}>
        <Input
          name="username"
          type="text"
          required={true}
          handleChange={handleChange}
        />
        <Input name="password" type="password" required={true} />

        <button className="button" type="submit">
          Sign In
        </button>
      </form>
    </Div>
  );
};

export default Comp;

const Div = Styled.div`

padding: 1rem;
border-radius: 1rem;
margin: auto 0;

.form {
padding: 1rem;
border-radius: 10px;
max-width: 40ch;
margin: 0 auto;
box-shadow: ${themeVars.boxShadow}
}

.button {
    background: ${themeVars.accentColor};
    border: none;
    border-radius: 500px;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    width: 100%;
}

`;