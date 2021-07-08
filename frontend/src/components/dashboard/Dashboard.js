import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "../auth/AuthProvider";
import TutorDashboard from "./TutorDashboard";
import AdminDashboard from "./AdminDashboard";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser && (
        <>
          {currentUser.role === "tutor" && <TutorDashboard />}
          {currentUser.role === "admin" && <AdminDashboard />}
          {currentUser.role === "user" && <Redirect to="/404" />}
        </>
      )}
    </>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
