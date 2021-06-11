import React from "react";
import Styled from "styled-components";

const Confirmation = () => {
  return <Div>Your reservation is confirmed. We will contact you shortly.</Div>;
};

export default Confirmation;

const Div = Styled.div`

padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;
