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
          <section>
            <h2 className="class-title">{tutor.classname}</h2>
          </section>
            <section className="bio">
            <img
              className="avatar"
              src={"/images/tutors/" + tutor.username + ".jpg"}
              alt="profile-picture"
            />
              <h2>About {tutor.firstname + " " + tutor.lastname}</h2>
              <p>{tutor.bio}</p>
            </section>
            <section>
              <p>price: {tutor.price}$</p>
              <p>Session Duration: {tutor.sessionDuration} minutes</p>
              <p>Number Of Sessions: {tutor.numberOfSessions}</p>
              </section>
            <div className="buttons">
              <Link
                className="primary-button"
                to={"/reserve-class?tutor=" + tutor.username}
              >
                Buy Now
              </Link>
            </div>
            <section className="reviews">
              <h3 className="reviews-title">Reviews:</h3>
              {tutor.reviews.map((review) => {
                return <Review review={review} />;
              })}
            </section>
        </>
      )}
    </Div>
  );
};

export default TutorProfile;

const Div = Styled.div`

padding-bottom: 5rem;
padding-inline: 2rem;
border-radius: 1rem;
display: flex;
flex-direction: column;
/* gap: 1rem; */
max-width: 50rem;
margin: 0 auto;

section {
  border-top: 1px solid lightgray;
}

.bio {
  border: none;
}
.class-title {
  /* color: white; */
  font-size: 3.5em;
  text-align: left;
  line-height: 1.3;
  padding-bottom: 0;
 
  /* padding: 2rem; */
  border-radius: 1.5rem 1.5rem 0 0;
}

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
  margin-top: 2rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}
`;
