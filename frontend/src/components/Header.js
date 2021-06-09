import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

import ProfileInHeader from "./ProfileInHeader";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
      <h1>KidCademy</h1>
        <Link to="/">Home</Link>
        <Link to="/tutors">Tutors</Link>
      </nav>
      <ProfileInHeader />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = Styled.header`
flex: 0;

display: flex;
justify-content: space-between;
align-items: center;
background: ${themeVars.primaryColor};
padding: 1rem;

nav {
    padding: 1rem;
    color: white;
    display: flex;
align-items: center;
    gap: 2rem;
     
     a {
       color: white;
       text-decoration: none;
     }
}
`;
