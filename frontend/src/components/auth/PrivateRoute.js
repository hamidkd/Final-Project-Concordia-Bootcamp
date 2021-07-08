import React, { createContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useAuth();

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
