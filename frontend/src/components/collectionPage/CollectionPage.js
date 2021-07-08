import React, { useState, useEffect, useContext } from "react";
import Styled from "styled-components";
import { FilterContext } from "./FilterProvider";
import FilterPanel from "./FilterPanel";
import SortDropDown from "./SortDropDown";
import OnlyShowAliveCheckBox from "./OnlyShowAliveCheckBox";
import Loading from "../utils/Loading";

import TutorCard from "./TutorCard";

const Collection = () => {
  const { filteredItems, isOnlyAliveChecked, setIsOnlyAliveChecked } =
    useContext(FilterContext);

  const [sortType, setSortType] = useState("");

  const handleChangeSortType = (event) => {
    setSortType(event.target.value);
  };

  const sortPlease = (arr, type) => {
    if (arr.length === 0) {
      return arr;
    }
    let sortedArr;
    switch (type) {
      case "priceLowToHight":
        sortedArr = arr.sort(function (a, b) {
          return (
            Number(a.price.replace("$", "")) * Number(a.numberOfSessions) -
            Number(b.price.replace("$", "") * Number(b.numberOfSessions))
          );
        });
        break;
      case "priceHightToLow":
        sortedArr = arr.sort(function (a, b) {
          return (
            Number(b.price.replace("$", "")) * Number(b.numberOfSessions) -
            Number(a.price.replace("$", "") * Number(a.numberOfSessions))
          );
        });
        break;
      case "AtoZ":
        sortedArr = arr.sort(function (a, b) {
          if (a.classname < b.classname) {
            return -1;
          }
          if (a.classname > b.classname) {
            return 1;
          }
          return 0;
        });
        break;
      case "ZtoA":
        sortedArr = arr.sort(function (a, b) {
          if (b.classname < a.classname) {
            return -1;
          }
          if (b.classname > a.classname) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        return arr;
        break;
    }

    return sortedArr;
  };

  const handleOnlyAlive = () => {
    setIsOnlyAliveChecked((isOnlyAliveChecked) => !isOnlyAliveChecked);
  };

  return (
    <Div>
      <h2>Classes</h2>
      <FilterPanel />
      <div className="controls">
        <OnlyShowAliveCheckBox
          onChangeHandler={handleOnlyAlive}
          isOnlyAliveChecked={isOnlyAliveChecked}
        />
        <SortDropDown onChangeHandler={handleChangeSortType} />
      </div>
      {filteredItems ? (
        <ul className="tutors">
          {sortPlease(filteredItems, sortType).map((tutor, index) => {
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

h2 {
  padding: 1rem;
}

.tutors {
    padding-right: 2rem ;
    padding-left: 2rem ;
    padding-block: 3rem;
    max-width: 1000px;
    margin: 0 auto;

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

.controls {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 800px;

}

`;
