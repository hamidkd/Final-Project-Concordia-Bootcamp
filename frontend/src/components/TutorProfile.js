import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Styled from "styled-components";
import { Link } from "react-router-dom";

import Review from "./Review";
import { themeVars } from "./GlobalStyles";

const TutorProfile = () => {
  const { username } = useParams();
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    fetch("/api/tutors/" + username)
      .then((res) => res.json())
      .then((json) => {
        // if (json.status === 200) {
        console.log(json);
        setTutor(json.data);
        // }
      });
  }, [username]);

  console.log(tutor);
  return (
    <Div>
      {tutor && (
        <>
          <img
            className="avatar"
            src={"/images/tutors/" + tutor.username + ".jpg"}
            alt="profile-picture"
          />
          <div className='bio'>
          <h2>About {tutor.firstname + " " + tutor.lastname}</h2>
          <p>{tutor.bio}</p>
          </div>
          <p>price: {tutor.price}$</p>
          <div className="buttons">
            <Link className="primary-button" to={"/reserve-class?tutor=" + tutor.username}>
              Reserve a class
            </Link>
          </div>
          <div className="reviews">
            <h3>Reviews:</h3>
            {tutor.reviews.map((review) => {
              return <Review review={review} />;
            })}
          </div>
        </>
      )}
    </Div>
  );
};

export default TutorProfile;

const Div = Styled.div`

padding-block: 5rem;
padding-inline: 2rem;
border-radius: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;
max-width: 50rem;
margin: 0 auto;

.avatar {
  margin: 0 auto;
  background: yellow;
  max-width: 10rem;
  border-radius: 50%;
  box-shadow: ${themeVars.boxShadow};
}

.bio {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &> h2 {
    align-self: flex-start;
    margin: 0;
    padding: 0;
  }
}

.buttons {
  padding-block: 1rem;
  display: flex;
  justify-content: center;
}

.reviews {
  border-top: 1px solid lightgray;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}
`;
