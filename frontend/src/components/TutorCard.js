import React from "react";
import Styled from "styled-components";

const TutorCard = ({ tutor }) => {
  console.log(tutor);
  const { avatarImg } = tutor;
  return (
    <Div>
      <p>This is a tutor card.</p>
      <p>{tutor.username}</p>
      <img className='avatar'
        src={"/images/" + tutor.username + ".jpg"}
        alt="profile-picture"
      />
    </Div>
  );
};

export default TutorCard;

const Div = Styled.div`

background: white;
padding: 1rem;
border-radius: 1rem;

min-height: 200px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

&:hover {
  box-shadow: rgba(100, 100, 111, 0.8) 0px 7px 29px 0px;
}

.avatar {
  background: yellow;
  max-width: 10rem;
  border-radius: 50%
}

`;
