import React from "react";
import Styled from "styled-components";

const Review = ({ review }) => {
  const { text, stars } = review;
  return (
    <Div>
      <p>{text}</p>
      <p>stars" {stars}</p>
    </Div>
  );
};

export default Review;

const Div = Styled.div`

background: aliceblue;
padding: 1rem;
border-radius: 1rem;

`;
