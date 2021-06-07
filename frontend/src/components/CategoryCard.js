import React from "react";
import Styled from "styled-components";

const Collection = ({ category }) => {
  return <Div> {category.name}</Div>;
};

export default Collection;

const Div = Styled.div`

border: 1px solid gray;
background: lightblue;
padding: 1rem;
border-radius: 1rem;

min-height: 300px;

display: flex;
justify-content: center;
align-items: center;

flex: 30%;
`;
