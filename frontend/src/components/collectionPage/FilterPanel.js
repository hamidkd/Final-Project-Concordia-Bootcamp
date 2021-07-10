import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FilterContext } from "./FilterProvider";
import Styled from "styled-components";
import Loading from "../utils/Loading";
import Tag from "./Tag";
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
              <Tag
                defaultChecked={filters.category[key]}
                value={key}
                onChangeHandler={updateFiltersHandler}
              />
            );
          })}{" "}
        </Div>
      )}
    </>
  );
};

export default FilterPanel;

const Div = Styled.div`

margin: 0 auto;
max-width: 800px;

padding-block: 1rem;
border-radius: 1rem;
margin-bottom: 1rem;

display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 0.5rem;
justify-content: center;





`;
