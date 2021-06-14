import React from "react";
import Styled from "styled-components";

export const SortDropdown = ({ onChangeHandler }) => {
  return (
    <Div>
      <label className="label">Sort by:</label>

      <Select className="sort-dropdown" onChange={onChangeHandler}>
        <option value="" disabled selected>
          Select Sort Option
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
gap: 0.5rem;

.label {
    font-size:1.2em;
    font-weight: 700;
    color: dimgray;
}

`;

const Select = Styled.select`

    padding-right: 10px;
    padding-left: 10px;
    border-radius: 5px;
    /* border: 3px solid gray; */
    border: none;
    background: dimgray;
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
      background: #454e51;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    `;
