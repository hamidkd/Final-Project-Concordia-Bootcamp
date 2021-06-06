import Styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Collection from "./Collection";

function App() {
  return (
    <BrowserRouter>
      <Div className="App">
        <GlobalStyles />
        This is App comp.
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/tutors">
            <Collection />
          </Route>
        </Switch>
      </Div>
    </BrowserRouter>
  );
}

export default App;

const Div = Styled.div`

background: pink;
padding: 1rem;
border-radius: 1rem;
`;
