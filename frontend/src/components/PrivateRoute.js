import React, { createContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useAuth();

  console.log("cc", currentUser);

  return (
    <Route
      {...rest}
      children={(props) => {
        return currentUser ? children : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
