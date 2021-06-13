import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "./AuthProvider";
import TutorDashboard from "./TutorDashboard";
import AdminDashboard from "./AdminDashboard";
import {Redirect} from 'react-router-dom';


const Dashboard = () => {
    const currentUser = useAuth();
    console.log('Role', currentUser?.role);
  return (
    <>
    You are in Dashboard.
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
