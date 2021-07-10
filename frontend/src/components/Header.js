import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

import ProfileInHeader from "./auth/ProfileInHeader";
import { AppContext } from "./AppProvider";
import { useAuth } from "./auth/AuthProvider";

const Header = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <StyledHeader>
        <nav>
          <Link to="/">
            <h1 className="site-title">
              <span>Kid</span>Cademy
            </h1>
          </Link>
          <Link to="/classes">Classes</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <ProfileInHeader />
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = Styled.header`
flex: 0;

display: flex;
justify-content: space-between;
align-items: center;
background: ${themeVars.primaryColor};
/* padding: 1rem; */
min-height: 6rem;
padding-inline: 1rem ;
font-weight: 900;

.site-title {
  font-weight: 900;
  font-size: 1.5em;
  span {
    color: white;
  }
}

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
