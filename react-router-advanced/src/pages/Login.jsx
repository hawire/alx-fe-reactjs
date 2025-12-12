import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";

  function handleLogin() {
    localStorage.setItem("auth", "true");
    // send the user back where they were trying to go
    navigate(from, { replace: true });
  }

  function handleLogout() {
    localStorage.removeItem("auth");
    navigate("/", { replace: true });
  }

  const isAuthenticated = localStorage.getItem("auth") === "true";

  return (
    <div>
      <h1>Login</h1>
      {isAuthenticated ? (
        <>
          <p>You are already logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>Click below to simulate login.</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}
