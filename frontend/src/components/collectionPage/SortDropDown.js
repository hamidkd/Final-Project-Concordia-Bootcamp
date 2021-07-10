import React from "react";
import Styled from "styled-components";
import { themeVars } from "../GlobalStyles";

export const SortDropdown = ({ onChangeHandler }) => {
  return (
    <Div>
      <Select className="sort-dropdown" onChange={onChangeHandler}>
        <option value="" disabled selected>
          Sort By:
        </option>
        <option value="priceLowToHight">Price - Lowest to Highest</option>
        <option value="priceHightToLow">Price - Highest to Lowest</option>
        <option value="AtoZ">Class Name - A to Z</option>
        <option value="ZtoA">Class Name - Z to A</option>
      </Select>
    </Div>
  );
};

export default SortDropdown;

const Div = Styled.div`
display: flex;
align-items :center;
gap: 0.5rem;



.label {
    font-size:1.2em;
    font-weight: 700;
    color: gray;
}

`;

const Select = Styled.select`

    padding: 0.7rem;
    border-radius: 0.7rem;
    /* border: 3px solid gray; */
    border: none;
    background: ${themeVars.accent2Color};
    appearance: none;
    /* background: ; */
    color: white;
    font-size:1.2em;
    font-weight: 700;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;

 
  
    option {
      /* padding: 1rem; */
      color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 1rem;

    

    &:disabled {
      display: none;
      background: none;
      color: lightgray;
    }
    }

    `;
