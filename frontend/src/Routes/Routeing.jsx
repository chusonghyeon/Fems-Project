import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="*" element={<Navigate replace to="/mainpage" />} />
    </Routes>
  );
};

export default ProtectedRoutes;
