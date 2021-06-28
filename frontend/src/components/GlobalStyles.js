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
//Resrt Styles ***********************

*,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
  }

  html, body, div,
  input, button, select, option,
  h1, h2, h3, h4, h5, h6, p,
  text {
      /* font-family: sans-serif; */
  }

  html, body {
      max-width: 100vw;
      height: 100%;
  }

  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
      margin: 0;
  }
  p {line-height: 1.4;}
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }


body {
  margin: 0;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
// Global Styles ***********************
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
input,
textarea {
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
  &:hover {
  box-shadow: ${themeVars.boxShadowHover};
  }
}

.primary-button, .cta-button , .big-button {
  background-color: ${themeVars.primaryColor};
  color: white;
}
.big-button {
  font-size: 2rem;
}

`;
