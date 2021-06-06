import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const Footer = () => {
  return (
    <footer>
      <Div>This is footer comp.</Div>
    </footer>
  );
};

export default Footer;

const Div = Styled.div`

background: lightgray;
padding: 1rem;
border-radius: 1rem;
`;
