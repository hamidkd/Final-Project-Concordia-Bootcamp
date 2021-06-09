import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <h3 className="site-title">
        <span>Kid</span>Cademy
      </h3>
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
padding: 2rem;
/* padding-top: 2rem; */
background: ${themeVars.darkColor};

.site-title {
  font-weight: 900;
  font-size: 1.5em;
  span {
    color: white;
  }
}

h3 {
  padding:2rem;
  }

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
