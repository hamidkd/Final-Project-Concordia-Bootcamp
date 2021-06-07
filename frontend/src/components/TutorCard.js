import React from "react";
import Styled from "styled-components";

const TutorCard = ({ tutor }) => {
  console.log(tutor);
  return (
    <Div>
      <p>This is a tutor card.</p>
      <p>{tutor.username}</p>
      <img width="100px" src={tutor.avatarImg} alt="profile-picture" />
    </Div>
  );
};

export default TutorCard;

const Div = Styled.div`

background: white;
padding: 1rem;
border-radius: 1rem;

min-height: 200px;

`;
