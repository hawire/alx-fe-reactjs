
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <NavBar />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* public login */}
          <Route path="/login" element={<Login />} />

          {/* protected routes group */}
          <Route element={<ProtectedRoute />}>
            {/* /profile is the parent; nested routes render into <Outlet /> in Profile */}
            <Route path="/profile" element={<Profile />}>
              <Route index element={<ProfileDetails />} />      {/* /profile -> details by default */}
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Route>

          {/* dynamic route example */}
          <Route path="/blog/:postId" element={<BlogPost />} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
