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
        <div className="flex-column">
          <h4>About Us</h4>
          <p>Who we are</p>
          <p>Our values</p>
        </div>
        <div className="flex-column">
          <h4>Contact Us</h4>
          <p>Customer Care</p>
          <p>Be an instructor</p>
        </div>
        <div className="flex-column">
          <h4>Terms of Service</h4>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>

        <div className="flex-column">
          <h4>Social Media</h4>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className="footnote">
        <p>Created with ❤️ by Hamid Keshmiri</p>
        <p>
          See the source in{" "}
          <a href="https://github.com/hamidkd/kidcademy-frontend">GitHub</a>
        </p>
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

.flex-column {
  h4 {
    padding: 0;
    text-align: left;
    margin-bottom: 0.5rem;
  }
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

}

.footnote {
  margin-top: 1rem;
  flex-direction: column;
  text-align: center;
  color: white;
}

`;
