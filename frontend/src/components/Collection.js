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
      This is tutors Collection Comp.
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

background: lightgreen;
padding: 1rem;
border-radius: 1rem;
.tutors {

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
`;
