import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const TutorCard = ({ tutor }) => {
  console.log(tutor);
  // const { avatarImg } = tutor;
  const {_id, username, firstname, lastname, role, bio, classname, category, price, sessionDuration} = tutor;
  return (
    <Div>
      <Link className='link' to={'/tutors/' + username}>

      <h3>{classname}</h3>
      <img className='avatar'
        src={"/images/" + username + ".jpg"}
        alt="profile-picture"
        />
      <p>taught by {firstname} {lastname}</p>
      
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

`;
