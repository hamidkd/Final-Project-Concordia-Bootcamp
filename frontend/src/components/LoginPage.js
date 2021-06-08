import React from "react";
import Styled from "styled-components";

const Input = ({ name, type, required, handleChange }) => {
  return (
    <Div>
      <label className="label" htmlFor={name}>
        {name}
      </label>
      <input
        className="input"
        type={type}
        name={name}
        placeholder={name}
        required={required}
        onChange={handleChange}
      />
    </Div>
  );
};

export default Input;

const Div = Styled.div`

padding: 1rem;
border-radius: 1rem;

  position:relative; 
  margin-bottom:45px; 

  
input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */
label 				 {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#5264AE;
}

input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}


`;
