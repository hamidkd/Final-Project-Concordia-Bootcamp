import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props}> </Component>
        ) : (
          <Redirect to="/login"></Redirect>
        );
      }}
    ></Route>
  );
};

PrivateRoute.propTypes = {};

export default PrivateRoute;
