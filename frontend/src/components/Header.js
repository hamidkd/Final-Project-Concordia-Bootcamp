import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";


import GoogleLogin from 'react-google-login';
import ProfileInHeader from "./ProfileInHeader";

const Header = () => {

const responseSuccessGoogle = (res) => {
console.log('RES from Google Login', res);

  fetch("/api/googleLogin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(res.tokenId),
  }).then(res => console.log(res));
  

}

const responseErrorGoogle = (res) => {
  console.log('Error RES from Google Login', res);
  
}

  return (
    <StyledHeader>
      <nav>

      
        <Link to="/"><h1 className='site-title'><span>Kid</span>Cademy</h1></Link>
        <Link to="/tutors">Tutors</Link>
      </nav>
      <GoogleLogin
    clientId="970981967092-8kp9jcceesje46te9fnr24hq2mff22ad.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseSuccessGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  />
      {/* <ProfileInHeader /> */}
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
