import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Examples:</p>
      <ul>
        <li><Link to="/profile">Profile (protected)</Link></li>
        <li><Link to="/profile/details">Profile Details (protected)</Link></li>
        <li><Link to="/profile/settings">Profile Settings (protected)</Link></li>
        <li><Link to="/blog/101">Blog post 101 (dynamic)</Link></li>
      </ul>
    </div>
  );
}
