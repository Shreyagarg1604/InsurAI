import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Get logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "null");

  // If no user, redirect to login
  return user ? children : <Navigate to="/login" replace />;
}
