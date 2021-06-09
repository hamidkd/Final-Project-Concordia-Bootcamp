import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const TutorCard = ({ tutor }) => {
  console.log(tutor);
  // const { avatarImg } = tutor;
  const {
    _id,
    username,
    firstname,
    lastname,
    role,
    bio,
    classname,
    category,
    price,
    sessionDuration,
  } = tutor;
  return (
    <Div>
      <Link className="link" to={"/tutors/" + username}>
        <img
          className="avatar"
          src={"/images/tutors/" + username + ".jpg"}
          alt="profile-picture"
        />
        <h3>{classname}</h3>
        <p>
          taught by {firstname} {lastname}
        </p>
        <p className="tag">{category}</p>
      </Link>
    </Div>
  );
};

export default TutorCard;

const Div = Styled.div`
width: 100%;
background: white;
padding: 1rem;
border-radius: 1rem;

min-height: 200px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

.link {
  text-decoration: none;
}

h3 {
  text-align: left;
}
&:hover {
  box-shadow: rgba(100, 100, 111, 0.8) 0px 7px 29px 0px;
}

.avatar {
  background: yellow;
  max-width: 10rem;
  border-radius: 50%
}


.tag {
  font-size: 0.8em;
  padding: 0.3em;
  padding-inline: 0.8em;
  border-radius: 100px;
  color: rgba(0, 0, 0, 0.5);
  background: ${themeVars.accent2Color};
  opacity: 0.8;
  display: inline;
}
`;
