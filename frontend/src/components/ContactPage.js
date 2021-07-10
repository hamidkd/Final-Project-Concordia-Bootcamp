import React from "react";
import Styled from "styled-components";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { themeVars } from "./GlobalStyles";

const ContactPage = () => {
  return (
    <Div>
      <h2>Contact Us</h2>
      <p>email: hmkeshmiri [at] gmail.com</p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/hamidkeshmiri/">
          <FaLinkedin size="48" />
        </a>
        <a href="https://github.com/hamidkd/Final-Project-Concordia-Bootcamp">
          <FaGithubSquare size="48" />
        </a>
      </div>
    </Div>
  );
};

export default ContactPage;

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
  max-width: 40ch;
}

.icons {
  display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
}

a {
  color:${themeVars.accentColor};
}
`;
