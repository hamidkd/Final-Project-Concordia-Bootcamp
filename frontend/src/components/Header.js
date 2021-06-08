import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import ProfileInHeader from "./ProfileInHeader";

const Header = () => {
  return (
    <Div>
      <h1>KidCademy</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tutors">Tutors</Link>
        <Link to="/tutors/fakeusername">Totur Profile</Link>
      </nav>
      <ProfileInHeader />
    </Div>
  );
};

export default Header;

const Div = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: teal;
padding: 1rem;
border-radius: 1rem;
nav {
    background: cyan;
    padding: 1rem;
    border-radius: 1rem;

    display: flex;
    gap: 2rem;
}
`;
