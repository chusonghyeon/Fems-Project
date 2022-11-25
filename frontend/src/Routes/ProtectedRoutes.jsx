import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/Login";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default ProtectedRoutes;
