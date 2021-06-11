import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Loading from "./Loading";

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
      {tutors ? (
        <ul className="tutors">
          {tutors.map((tutor, index) => {
            return <TutorCard tutor={tutor} key={"tutor-" + index} />;
          })}
        </ul>
      ) : (
        <Loading />
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
    padding-right: 2rem ;
    padding-left: 2rem ;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media screen and ( max-width: 1080px) {

  grid-template-columns: 1fr 1fr;

  }

  @media screen and (max-width: 820px) {

  grid-template-columns: 1fr;

  }


 
}
`;
