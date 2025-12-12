
import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  const location = useLocation();

  // If not authenticated, redirect to /login and keep original path in state
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Authenticated — render nested routes
  return <Outlet />;
}
