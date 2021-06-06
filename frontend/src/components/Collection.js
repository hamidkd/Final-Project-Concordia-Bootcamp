import React from "react";
import Styled from "styled-components";

import TutorCard from "./TutorCard";

const Collection = () => {
  return (
    <Div>
      This is tutors Collection Comp.
      <ul className="tutors">
        <TutorCard name="babak" />
        <TutorCard name="farhad" />
        <TutorCard name="jafar" />
      </ul>
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
