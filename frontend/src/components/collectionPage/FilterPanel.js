import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FilterContext } from "./FilterProvider";
import Styled from "styled-components";
import Loading from "../utils/Loading";
import { themeVars } from "../GlobalStyles";

const FilterPanel = () => {
  const { filters, setFilters, updateFiltersHandler } =
    useContext(FilterContext);

  return (
    <>
      {filters && Object.keys(filters.category).length > 1 && (
        <Div>
          {Object.keys(filters.category).map((key) => {
            return (
              <div className="tag">
                <input
                  className="filterCheckBox"
                  type="checkbox"
                  defaultChecked={filters.category[key]}
                  value={key}
                  name="category"
                  onChange={updateFiltersHandler}
                />
                <label className="filterLabel">{key}</label>
              </div>
            );
          })}{" "}
        </Div>
      )}
    </>
  );
};

FilterPanel.propTypes = {};

export default FilterPanel;

const Div = Styled.div`

margin: 0 auto;
max-width: 800px;

padding-block: 1rem;
border-radius: 1rem;
margin-bottom: 1rem;

display: flex;
flex-wrap: wrap;
gap: 1rem;
justify-content: space-between;

div {
padding-inline: 1rem;
padding-block: 0.8rem;
border-radius: 9rem;
background: ${themeVars.accent2Color};
box-shadow: ${themeVars.boxShadow};
}

.filterCheckBox {
    /* border: 2px solid orange; */
    
}

label {
    color: white;
}



`;
