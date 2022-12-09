import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../";

const UnProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<Navigate replace to="/Login" />} />
    </Routes>
  );
};

export default UnProtectedRoutes;
