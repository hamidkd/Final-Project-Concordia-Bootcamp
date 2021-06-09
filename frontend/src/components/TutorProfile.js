import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Styled from "styled-components";

import Review from "./Review";

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
          <h2></h2>
          <img
            className="avatar"
            src={"/images/tutors/" + tutor.username + ".jpg"}
            alt="profile-picture"
          />
          <p>{tutor.bio}</p>
          <p>price: {tutor.price}$</p>
          <button>Get a class</button>
          <h3>Reviews:</h3>
          {tutor.reviews.map((review) => {
            return <Review review={review} />;
          })}
        </>
      )}
    </Div>
  );
};

export default TutorProfile;

const Div = Styled.div`

padding: 1rem;
border-radius: 1rem;

.avatar {
  background: yellow;
  max-width: 10rem;
  border-radius: 50%
}
`;
