import React, { useState, useEffect } from "react";
import Styled from "styled-components";

import TutorCard from "./TutorCard";

const Collection = () => {
  const [tutors, setTutors] = useState(null);
  useEffect(() => {
    //fetch all tutors
    console.log("here");
    fetch("/api/tutors")
      .then((res) => res.json())
      .then((json) => setTutors(json.data));
  }, []);

  return (
    <Div>
      <h2>Tutors</h2>
      {tutors && (
        <ul className="tutors">
          {tutors.map((tutor, index) => {
            return <TutorCard tutor={tutor} key={"tutor-" + index} />;
          })}
        </ul>
      )}
    </Div>
  );
};

export default Collection;

const Div = Styled.div`

padding-inline: 2rem;
padding-block: 2rem;
border-radius: 1rem;
.tutors {

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}
`;
