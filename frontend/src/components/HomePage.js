import React, { useContext } from "react";
import Styled from "styled-components";
import { AppContext } from "./AppProvider";

import CategoryCard from "./CategoryCard";
import Hero from "./Hero";

const HomePage = () => {
  const { categories } = useContext(AppContext);
  return (
    <Div>
      <Hero />
      <section>
        <h2>Categories</h2>
        <ul className="categories">
          {categories && categories.map(category => {
            return (
              <CategoryCard category={category} />
            );
          })}
        </ul>
      </section>
      <section>
        <h2>Some Features</h2>
      </section>
    </Div>
  );
};

export default HomePage;

const Div = Styled.div`

background: lightgreen;
padding: 1rem;
border-radius: 1rem;


.categories {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
`;
