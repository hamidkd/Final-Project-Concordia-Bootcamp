import React, { useContext } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "./AppProvider";

const ProfileInHeader = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const handleLogOut = () => {
    setCurrentUser(null);
  };
  return (
    <Div>
      {currentUser ? (
        <>
          <span>Hi, {currentUser.firstname + " " + currentUser.lastname}</span>
          <img src={"/images/tutors/" + currentUser.username + ".jpg"} alt="profile-picture" width='50px'></img>
          <button onClick={handleLogOut}>Log Out</button>
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
`;
