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
        <h2>Featured Classes</h2>
      </section>
    </Div>
  );
};

export default HomePage;

const Div = Styled.div`

/* background: lightgreen; */
border-radius: 1rem;


.categories {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
`;
