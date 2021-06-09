import Styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import HomePage from "./HomePage";
import LoginPage from './LoginPage';
import Collection from "./Collection";
import TutorProfile from "./TutorProfile";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
    <Div>

      <Header />
      <Main>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
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
    </Div>
    </BrowserRouter>
  );
}

export default App;
const Div = Styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: stretch;

`

const Main = Styled.main`
flex: 1;
border-radius: 1rem;
display: flex;
flex-direction: column;

h2 {
  margin-bottom: 1rem;
}

section {
  padding: 1rem;
}
`;
