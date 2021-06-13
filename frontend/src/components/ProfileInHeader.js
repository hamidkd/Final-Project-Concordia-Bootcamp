import React, { useContext, useEffect, useState } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "./AppProvider";
import { themeVars } from "./GlobalStyles";
import { useAuth } from "./AuthProvider";
import GoogleLoginButton from "./GoogleLoginButton";

const ProfileInHeader = () => {
  const { currentUser, setCurrentUser } = useAuth();

  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

  useEffect(() => {
    setIsProfileMenuVisible(false);
  }, []);

  const handleLogOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const showProfileMenu = () => {
    setIsProfileMenuVisible(true);
  };

  const handleClick = () => {
    if (isProfileMenuVisible) {
      setIsProfileMenuVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isProfileMenuVisible]);

  return (
    <Div>
      {currentUser ? (
        <>
          <span>Hi, {currentUser.firstname}</span>
          <button className="profile-button" onClick={showProfileMenu}>
            <img
              className="profile-picture"
              src={"/images/tutors/" + currentUser.username + ".jpg"}
              alt="profile-picture"
              width="40px"
            ></img>
          </button>
          {isProfileMenuVisible && (
            <div className="profile-menu">
              <Link to="/dashboard">Dashboard</Link>
              <button className="log-out-button" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          )}
        </>
      ) : (
        // <Link to="/login">Login</Link>
        <GoogleLoginButton />
      )}
    </Div>
  );
};

export default ProfileInHeader;

const Div = Styled.div`

position: relative;
padding: 1rem;
color: white;
display: flex;
align-items: center;
gap: 1rem;

.profile-button {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items:center;
}

.profile-picture {
  border-radius: 100px;
  border: 3px solid white;
  box-shadow: ${themeVars.boxShadow};
}

.profile-menu {
  position: absolute;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
  padding: 1rem;
  background: ${themeVars.darkColor};
  top: 4rem;
  right: 1rem;
  z-index: 1;
  box-shadow: ${themeVars.boxShadow};

  
  a {
    font-weight: 700;
  }

}
  .log-out-button {
  background: none;
  box-shadow: none;
  color: white;
  font-size: 1em;
  padding: 0;
  cursor: pointer;
  font-weight: 700;
}
`;
