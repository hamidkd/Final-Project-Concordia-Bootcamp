import React, { useState, useRef } from "react";
import { CgTag } from "react-icons/cg";
import Styled from "styled-components";
import { themeVars } from "../GlobalStyles";

const Tag = ({ defaultChecked, value, onChangeHandler }) => {
  const inputRef = useRef(null);

  return (
    <Div>
      <label className={inputRef?.current?.checked && "selected"}>
        <input
          ref={inputRef}
          className="filterCheckBox"
          type="checkbox"
          defaultChecked={defaultChecked}
          value={value}
          name="category"
          onChange={onChangeHandler}
        />
        {value}
      </label>
    </Div>
  );
};

export default Tag;

const Div = Styled.a`
label {
    padding-inline: 1.2rem;
    padding-block: 0.7rem;
    border-radius: 9rem;
    background: ${themeVars.accent2Color};
    box-shadow: ${themeVars.boxShadow};
    color: white;
    font-weight: 700;
    line-height: 4;
    cursor: pointer;
  }
  input {
      /* border: 2px solid orange; */
      display: none;
  }

.selected {

    background: ${themeVars.accentColor};

  }

  `;
