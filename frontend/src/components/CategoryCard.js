import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

let name = "";

const Collection = ({ category }) => {
  name = category.name;
  return (
    <Div>
      <Link className="link" to={"/tutors?category=" + category.name}>
        <h3 className="category-title">{category.name}</h3>
      </Link>
    </Div>
  );
};

export default Collection;

const Div = Styled.div`

/* background: lightblue; */
background: linear-gradient(0deg, rgba(255, 0, 150, 0.7), rgba(255, 0, 150, 0.3)) ,
url(${() => "/images/categories/" + name + ".jpg"}) no-repeat center;
background-size: cover;
filter: saturate(30%);
padding: 1rem;
border-radius: 1rem;
box-shadow: ${themeVars.boxShadow};

&:hover {
box-shadow: ${themeVars.boxShadowHover};
}

min-height: 300px;

display: flex;
justify-content: center;
align-items: center;

flex: 300px 1 0;

.category-title {
  color: white;
  font-size: 3em;
}

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
