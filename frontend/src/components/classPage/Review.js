import React from "react";
import Styled from "styled-components";
import ReactStars from 'react-rating-stars-component';

const Review = ({ review }) => {
  const { text, stars } = review;
  return (
    <Div>
      <p>{text}</p>
      <ReactStars
    count={5}
    value={stars}
    edit={false}
    size={24}
    isHalf={true}
    activeColor="#ffd700"
  />
    </Div>
  );
};

export default Review;

const Div = Styled.div`

background: aliceblue;
padding: 1rem;
border-radius: 1rem;

`;
