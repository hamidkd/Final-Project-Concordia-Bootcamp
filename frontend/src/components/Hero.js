import React from "react";
import Styled from "styled-components";

const Hero = () => {
  return (
    <Section>
      This is Hero.
      <h2>Hero Imag</h2>
    </Section>
  );
};

export default Hero;

const Section = Styled.section`

background: purple;
padding: 1rem;
border-radius: 1rem;

min-height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`;
