import React from "react";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const AboutPage = () => {
  return (
    <Div>
      <h2>About Us</h2>
      <p>
        KidCademy is a masterclass clone but for kids. It is done by Hamid
        Keshmiri as the final project in Cncordia Bootcamps. for more
        information go to{" "}
        <a href="https://github.com/hamidkd/Final-Project-Concordia-Bootcamp">
          the github repo.
        </a>
      </p>
    </Div>
  );
};

export default AboutPage;

const Div = Styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1rem;
height: 100%;
min-height: 60vh;

h2 {
    margin: 0;
    padding: 0;
}

p {
  max-width: 50ch;
}

a {
  color:${themeVars.accentColor};
}
`;
