import Styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import HomePage from "./HomePage";
import Collection from "./Collection";
import TutorProfile from "./TutorProfile";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main className="App">
        <GlobalStyles />
        This is App comp.
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/tutors/:username">
            <TutorProfile />
          </Route>
          <Route path="/tutors">
            <Collection />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

const Main = Styled.main`

background: pink;
padding: 1rem;
border-radius: 1rem;

h2 {
  margin-bottom: 1rem;
}

section {
  padding: 1rem;
}
`;
