import Styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import ResetStyles from "./ResetStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Header from "./Header";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import CheckOut from "./CheckOut";
import Confirmation from "./Confirmation";
import FilterProvider from "./FilterProvider";
import Collection from "./Collection";
import TutorProfile from "./TutorProfile";
import AdminDashboard from "./AdminDashboard";
import TutorDashboard from "./TutorDashboard";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Div>
        <Header />
        <Main>
          <ResetStyles />
          <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/reserve-class">
              <CheckOut />
            </Route>
            <Route exact path="/reserve-class/confirmation">
              <Confirmation />
            </Route>
            <Route path="/tutors/:username">
              <TutorProfile />
            </Route>
            <Route path="/tutors">
              <FilterProvider>
                <Collection />
              </FilterProvider>
            </Route>
            <PrivateRoute path="/admin-dashboard">
              <AdminDashboard />
            </PrivateRoute>
            <PrivateRoute path="/tutor-dashboard">
              <TutorDashboard />
            </PrivateRoute>
            <Route path="*">
              <p>404 PAGE NOT FOUND</p>
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

`;

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
