import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserListContext } from "../../providers/clients/userContext";


function ProtectedRoutes() {
  const { user } = useContext(UserListContext);

  window.location.pathname;

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
}

export default ProtectedRoutes;
