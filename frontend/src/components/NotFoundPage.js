import React from "react";
import Styled from "styled-components";

const NotFoundPage = () => {
  return (
    <Div>
      <h2>404 :(</h2>
      Page Not Found.
    </Div>
  );
};

export default NotFoundPage;

const Div = Styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1rem;
height: 100%;

h2 {
    margin: 0;
    padding: 0;
}
`;
