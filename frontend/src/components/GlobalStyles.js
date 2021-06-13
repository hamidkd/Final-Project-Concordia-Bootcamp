import { createGlobalStyle } from "styled-components";

export const themeVars = {
  primaryColor: "#44318d",
  accentColor: "#d93f87",
  accent2Color: "#8265a7",
  accent3Color: "#a4b3b6",
  darkColor: "#291b3d",
  borderRadius: "10px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  boxShadowHover: "rgba(100, 100, 111, 0.8) 0px 7px 29px 0px",

  headingFont: "Poppins,'Permanent Marker', Arial, Helvetica, sans-serif",
  contentFont: "Poppins,'Kosugi', Arial, Helvetica, sans-serif",
};

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;900&display=swap');

h1,
h2,
h3,
label,
button {
  color: ${themeVars.accentColor};
  font-family: ${themeVars.headingFont};
  text-align: center;
}
p,
a,
li,
blockquote,
input {
  font-family: ${themeVars.contentFont};
}

a {
  color: white;
  text-decoration: none;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

h2 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

button, .button, .primary-button, .cta-button , .big-button {
  border: none;
  border-radius: 600px;
  padding-inline: 1em;
  padding-block: 0.5em;
  font-weight: 700;
  text-decoration: none;
  box-shadow: ${themeVars.boxShadow};

  background-color: white;
  color: ${themeVars.primaryColor};
  font-size: 1.5rem;
  cursor: pointer;
}

.primary-button, .cta-button , .big-button {
  background-color: ${themeVars.primaryColor};
  color: white;
}
.big-button {
  font-size: 2rem;
}

`;
