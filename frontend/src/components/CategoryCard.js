import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const Collection = ({ category }) => {
  return (
    <Div>
      <Link className="link" to={"/tutors?category=" + category.name}>
        {category.name}
      </Link>
    </Div>
  );
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

.link {
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
`;
