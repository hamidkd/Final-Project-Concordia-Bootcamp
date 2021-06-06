import React from "react";
import Styled from "styled-components";

import CategoryCard from './CategoryCard';
import Hero from './Hero';

const HomePage = () => {
  return (
    <Div>
        <Hero />
      
      <section>
          <h2>Categories</h2>
          <ul className='categories'>
              <CategoryCard category='music' />
              <CategoryCard category='dance' />
              <CategoryCard category='yoga' />
              <CategoryCard category='photography' />
              <CategoryCard category='math' />
              <CategoryCard category='fitness' />
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
