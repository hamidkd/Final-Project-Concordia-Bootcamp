import React from "react";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Form = ({ children, submitHandler }) => {
  return <StyledFrom onSubmit={submitHandler}>{children}</StyledFrom>;
};

export default Form;

const StyledFrom = Styled.form`

padding: 2rem;
border-radius: 1rem;

max-width: 50ch;
margin: 0 auto;
box-shadow: ${themeVars.boxShadow};

display: flex;
flex-direction: column;
gap: 2rem;
}

`;
