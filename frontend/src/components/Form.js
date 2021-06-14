import React from "react";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Form = ({ children, submitHandler }) => {
  return <StyledFrom onSubmit={submitHandler}>{children}</StyledFrom>;
};

export default Form;

const StyledFrom = Styled.form`

background: white;
padding: 2rem;
border-radius: 1rem;

max-width: 50ch;
margin: 0 auto;

display: flex;
flex-direction: column;
gap: 2rem;
}

`;
