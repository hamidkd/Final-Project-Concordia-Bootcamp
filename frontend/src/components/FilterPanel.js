import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FilterContext } from "./FilterProvider";
import Styled from "styled-components";
import Loading from "./Loading";
import { themeVars } from "./GlobalStyles";

const FilterPanel = () => {
  const { filters, setFilters, updateFiltersHandler } =
    useContext(FilterContext);

  return (
    <>
      {filters && Object.keys(filters.category).length > 1 && (
        <Div>
          {Object.keys(filters.category).map((key) => {
            return (
              <div>
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
box-shadow: ${themeVars.boxShadow};

background: purple;
padding: 1rem;
border-radius: 1rem;
margin-bottom: 2rem;

display: flex;
justify-content: space-around;

.filterCheckBox {
    /* border: 2px solid orange; */
}

.filterLabel {
  color: white;
}

`;
