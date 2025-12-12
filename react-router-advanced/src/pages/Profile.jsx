import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1>Profile (Protected)</h1>

      <nav style={{ marginBottom: 12 }}>
        <Link to="details">Details</Link> {" | "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* nested routes render here */}
      <Outlet />
    </div>
  );
}
