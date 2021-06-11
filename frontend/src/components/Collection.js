import React, { useState, useEffect, useContext } from "react";
import Styled from "styled-components";
import { FilterContext } from "./FilterProvider";
import FilterPanel from "./FilterPanel";
import Loading from "./Loading";

import TutorCard from "./TutorCard";

const Collection = () => {
  const { filteredItems } = useContext(FilterContext);

  return (
    <Div>
      <h2>Tutors</h2>
      <FilterPanel />
      {filteredItems ? (
        <ul className="tutors">
          {filteredItems.map((tutor, index) => {
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
    padding-block: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  justify-items: center;

  @media screen and ( max-width: 1080px) {

  grid-template-columns: 1fr 1fr;

  }

  @media screen and (max-width: 820px) {

  grid-template-columns: 1fr;

  }


 
}
`;
