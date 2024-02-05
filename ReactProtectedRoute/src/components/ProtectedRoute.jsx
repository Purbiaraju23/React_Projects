import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children, redirect = "/" }) => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to={redirect} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
