import React from "react";
import Styled from "styled-components";
import { themeVars } from "./GlobalStyles";

const Hero = () => {
  return (
    <Section>
      <h2 className='hero-title'>Private Online Classes for kids</h2>
    </Section>
  );
};

export default Hero;

const Section = Styled.section`

/* background: url("/images/hero.webp") no-repeat center  purple; */
position: relative;
min-height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
/* background-color: rgba(68, 49, 141, 0.7); */
background:linear-gradient(0deg, rgba(255, 0, 150, 0.5), rgba(255, 0, 150, 0.3)) , no-repeat center  url("/images/hero.webp");
background-size: cover;

.heroImg {
  position: absolute;
  width: 100%;
  z-index: -1;
  filter: saturate(90%);
  /* filter: blur(3px); */
  /* filter: invert(75%); */
  /* filter: hue-rotate(60deg); */
}

.hero-title {
  font-weight: 900;
  color: white !important;
  font-size: 5em;
  color: ${themeVars.primaryColor};
  max-width: 800px;
}

`;
