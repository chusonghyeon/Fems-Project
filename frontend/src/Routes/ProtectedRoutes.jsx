import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
  Dashboard,
  Electricamount,
  Employees,
  Financial,
  Humidity,
  Line,
  Orders,
  Stacked,
  Temperature,
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
    // 실행 시 cu
    <div className={currentMode === "Dark" ? "dark" : ""}>
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
        <div
          className={`dark:bg-main-dark-bg  bg-sky-100 min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="md:static bg-gray-100/70 dark:bg-main-dark-bg navbar w-full bg-fixed">
            <Navbar />
          </div>
          <div className="column is-two_thirds m-5">
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* 전력량 예측 , 메인페이지 */}
              <Route path="/전력 예측" element={<Ecommerce />} />
              {/* 대시보드 활용방안 찾아보고 없으면 삭제 */}
              <Route path="/공조기 정보" element={<Customers />} />
              {/* 공조기 정보 및 사용자정보(후순위) , 1~2개남겨둘 예정*/}
              <Route path="/시간별 전력량" element={<Electricamount />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/orders" element={<Orders />} />
              {/* 공조기별 데이터 */}
              <Route path="/electricamount" element={<Electricamount />} />
              <Route path="/temperature" element={<Temperature />} />
              <Route path="/humidity" element={<Humidity />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/area" element={<Area />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/line" element={<Line />} />
              <Route path="/stacked" element={<Stacked />} />
              <Route path="*" element={<Navigate replace to="/전력 예측" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoutes;
