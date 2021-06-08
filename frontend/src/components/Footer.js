import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <h3>KidCademy</h3>
      <div>
        <h4>About Us</h4>

        <h4>Contact Us</h4>

        <h4>Terms of Service</h4>

        <h4>Social Media</h4>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = Styled.footer`
flex: 0;
padding: 1rem;
padding-top: 2rem;
background: ${themeVars.darkColor};

div {
color: white;
padding: 1rem;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

h4 {
  padding: 1rem;
  color: white;
}
`;
