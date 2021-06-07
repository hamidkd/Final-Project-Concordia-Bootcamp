import React from "react";
import Styled from "styled-components";

const TutorProfile = () => {
  return (
    <Div>
      <h2>Tutor name</h2>
      <p>description here</p>
    </Div>
  );
};

export default TutorProfile;

const Div = Styled.div`

background: purple;
padding: 1rem;
border-radius: 1rem;

`;
