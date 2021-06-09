import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Styled from "styled-components";

const TutorProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/tutors/" + username)
      .then((res) => res.json())
      .then((json) => {
        // if (json.status === 200) {
          console.log(json);
          setUser(json.data);
        // }
      });
  }, [username]);

  console.log(user);
  return (
    <Div>
      {user && (
        <>
          <h2></h2>
          <p>description here</p>
          <img alt="profile-picture" src="tutor-photo-1.jpg" />
        </>
      )}
    </Div>
  );
};

export default TutorProfile;

const Div = Styled.div`

background: purple;
padding: 1rem;
border-radius: 1rem;

`;
