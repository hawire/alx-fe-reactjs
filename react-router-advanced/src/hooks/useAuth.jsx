import { useState } from "react";

export default function useAuth() {
  // Simulate user authentication state
  const [isAuthenticated] = useState(true); // change to false to test unauthenticated

  return { isAuthenticated };
}
