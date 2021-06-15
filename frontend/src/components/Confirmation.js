import React from "react";
import Styled from "styled-components";

const Confirmation = () => {
  return <Div>
    <h2>Thank You for trusting us!</h2>
    Your reservation is confirmed. We will contact you shortly.
    </Div>;
};

export default Confirmation;

const Div = Styled.div`

padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;

h2 {
  padding: 1rem;
}

`;
