import React from "react";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Input = ({
  title,
  name,
  type,
  required,
  changeHandler,
  min,
  max,
  steps,
}) => {
  return (
    <Div>
      <input
        className="input"
        type={type}
        name={name}
        placeholder={name}
        required={required}
        onChange={changeHandler}
        min={min}
        max={max}
        steps={steps}
      />
      <label className="label" htmlFor={name}>
        {title ? title : name}
      </label>
    </Div>
  );
};

export default Input;

const Div = Styled.div`


  position:relative; 
  display: flex;
  flex-direction: column;
  overflow: hidden;

input	{
  font-size: 1.2em;
  padding: 1rem;
  display:block;
  border:none;
  border-radius: 0.5rem;
  background: ghostwhite;
  overflow: hidden;
}

input:focus { outline: 2px solid ${themeVars.accent2Color}; }

input::placeholder {
  color: transparent;
}



label {
  text-align: left;
  pointer-events: none;
  color:#999; 
  font-size:1.2em;
  position:absolute;
  left: 1rem;
  top: 1.25rem;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
  overflow: hidden;
  
}

input:not(:placeholder-shown) + label {
  top:-20px;
  font-size:1em;
  color: ${themeVars.accent2Color};}
`;
