
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Simple authentication simulation
const isAuthenticated = () => {
  // Replace this with real auth logic
  return localStorage.getItem("auth") === "true";
};

const ProtectedRoute = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />; // renders nested routes
};

export default ProtectedRoute;
