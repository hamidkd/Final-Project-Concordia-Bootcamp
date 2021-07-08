import Styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";

import Header from "./Header";
import HomePage from "./homePage/HomePage";
import LoginPage from "./auth/LoginPage";
import CheckOut from "./checkOutPage/CheckOutPage";
import Confirmation from "./checkOutPage/ConfirmationPage";
import FilterProvider from "./collectionPage/FilterProvider";
import Collection from "./collectionPage/CollectionPage";
import ClassPage from "./classPage/ClassPage";
import Dashboard from "./dashboard/Dashboard";
import EditClassInfo from "./dashboard/EditClassInfo";
import Footer from "./Footer";
import NotFoundPage from "./404/NotFoundPage";
import MyClasses from "./dashboard/MyClasses";

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
            <Route path="/reserve-class">
              <CheckOut title="hello" />
            </Route>
            <Route exact path="/confirmation">
              <Confirmation />
            </Route>
            <Route path="/classes/:username">
              <ClassPage />
            </Route>
            <Route path="/classes">
              <FilterProvider>
                <Collection />
              </FilterProvider>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/my-classes">
              <MyClasses />
            </PrivateRoute>
            <PrivateRoute path="/edit-class-info">
              <EditClassInfo />
            </PrivateRoute>

            <Route path="/404">
              <NotFoundPage />
            </Route>
            <Route path="*">
              <Redirect to="/404" />
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
