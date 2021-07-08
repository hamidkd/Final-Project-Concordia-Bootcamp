import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { themeVars } from "../GlobalStyles";

const TutorCard = ({ tutor }) => {
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
    numberOfSessions,
    alive
  } = tutor;

  return (
    <Div>
      <Link className="link" to={"/tutors/" + username}>
        <div className="wrapper">
          <img
            className="avatar"
            src={"/images/tutors/" + username + ".jpg"}
            alt="profile-picture"
          />
          <h3>{classname}</h3>
          <p className="tutor">
            taught by{" "}
            <span className="tutor-name">
              {firstname} {lastname}
            </span>
          </p>
          <p className="tags">
            <span className="tag">
              <Link to={"/tutors?category=" + category}>{category}</Link>
            </span>
          </p>
          <p className="class-info">
            <span className="price">${price * numberOfSessions}</span>
            <span className="session">{numberOfSessions} {Number(numberOfSessions) > 1 ? "sessions" : "session"  }</span>
          </p>
        </div>
      </Link>
    </Div>
  );
};

export default TutorCard;

const Div = Styled.div`


width: 100%;
max-width: 20rem;
background: white;
border-radius: 1rem;

min-height: 200px;
box-shadow: ${themeVars.boxShadow};


.wrapper {

padding: 1.5rem;
display: flex;
flex-direction: column;
text-decoration: none;
justify-content: flex-start;
gap: 1rem;

height: 100%;
}


.link {
  text-decoration: none;
  color: dimgray;
}

h3 {
  text-align: left;
  line-height: 1.3em;
}
&:hover {
  box-shadow: rgba(100, 100, 111, 0.8) 0px 7px 29px 0px;
}

.avatar {
  background: yellow;
  max-width: 10rem;
  border-radius: 50%;
  align-self: center; 
  box-shadow: ${themeVars.boxShadow};
}
.tutor {
  /* margin-bottom: auto; */
}

.tutor-name {
  font-weight: 700;
  color: dimgray;
}
.tags {
  /* justify-self: flex-end; */
  margin-top: auto;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.tag {
  font-size: 0.8em;
  padding: 0.5em;
  padding-inline: 0.8em;
  border-radius: 100px;
  color: white;
  background: ${themeVars.accent2Color};
  opacity: 0.8;
  display: inline;
}

.class-info {
  justify-self: flex-end;
  display: flex;
  justify-content: space-between;
}

.price, .session {
  color: dimgray;
}
`;
