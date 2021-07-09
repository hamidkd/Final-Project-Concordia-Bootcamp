import React, { useContext } from "react";
import Styled from "styled-components";
import { AppContext } from "../AppProvider";
import FeaturedClass from "./FeaturedClass";

import CategoryCard from "./CategoryCard";
import Hero from "./Hero";
import Loading from "../utils/Loading";

const HomePage = () => {
  const { categories } = useContext(AppContext);
  return (
    <Div>
      <Hero />
      <section>
        <h2>Categories</h2>
        <ul className="categories">
          {!categories ? (
            <Loading />
          ) : (
            categories.map((category) => {
              return <CategoryCard category={category} />;
            })
          )}
        </ul>
      </section>
      <section>
        <h2>Featured Classes</h2>
        <div className="featured-classes">
          <FeaturedClass tutorUsername="alberte" />
          <FeaturedClass tutorUsername="vangogh" />
          <FeaturedClass tutorUsername="billgates" />
        </div>
      </section>
    </Div>
  );
};

export default HomePage;

const Div = Styled.div`

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.categories {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding-right: 2rem ;
    padding-left: 2rem ;
}

.featured-classes {
  padding-bottom: 5rem;
  max-width: 90ch;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

`;
