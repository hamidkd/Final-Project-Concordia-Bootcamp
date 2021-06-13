import React, { useContext } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "./AppProvider";
import { themeVars } from "./GlobalStyles";
import { useAuth } from "./AuthProvider";

const ProfileInHeader = () => {
  const { currentUser, setCurrentUser } = useAuth();

  const handleLogOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <Div>
      {currentUser ? (
        <>
          <span>Hi, {currentUser.firstname}</span>
          <img
            className="profile-picture"
            src={"/images/tutors/" + currentUser.username + ".jpg"}
            alt="profile-picture"
            width="40px"
          ></img>
          <button className="button" onClick={handleLogOut}>
            Log Out
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </Div>
  );
};

export default ProfileInHeader;

const Div = Styled.div`

padding: 1rem;
color: white;
display: flex;
align-items: center;
gap: 1rem;

.profile-picture {
  border-radius: 100px;
  border: 3px solid white;
  box-shadow: ${themeVars.boxShadow};
}

.button {
  background: none;
  color: white;
  font-size: 1em;
  padding: 0;
  cursor: pointer;

}
`;
