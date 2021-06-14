import React from "react";
import Styled from "styled-components";

import GoogleLoginButton from "./GoogleLoginButton";

const LoginPage = () => {
  return (
    <Div>
      <p>Plaese Login to continue.</p>
      <GoogleLoginButton />
    </Div>
  );
};

export default LoginPage;

const Div = Styled.div`

height: 100%;
padding: 1rem;
border-radius: 1rem;
display: flex;
gap: 1rem;
flex-direction: column;
justify-content: center;
align-items: center;

`;
