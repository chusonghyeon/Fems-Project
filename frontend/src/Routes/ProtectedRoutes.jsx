import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage";
import Ecommerce from "../pages/Ecommerce";

import { Navbar, ThemeSettings } from "../components";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/UserContext";
import {
  Area,
  Bar,
  Customers,
  Employees,
  Financial,
  Line,
  Orders,
  Stacked,
} from "../pages";

const ProtectedRoutes = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {/* =========================================================================== */}
      {/* 세팅 버튼 */}

      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: "50%" }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {/*====================== */}
      {activeMenu ? (
        <div className="w-72 fixed dark:bg-secondary-dark-bg bg-gray-300 sidebar">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div>
        <div
          className={`dark:bg-main-dark-bg  bg-sky-100 min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="md:static bg-gray-100/70 dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div className="column is-two_thirds m-5">
            {themeSettings && <ThemeSettings />}

            <Routes>
              <Route path="/mainpage" element={<MainPage />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/line" element={<Line />} />
              <Route path="/stacked" element={<Stacked />} />
              <Route path="*" element={<Navigate replace to="/mainpage" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoutes;
