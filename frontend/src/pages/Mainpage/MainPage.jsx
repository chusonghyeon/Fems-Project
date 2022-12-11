import React from "react";
import { ElectricPr, GongjoCompare } from "../../components";
import { Header } from "../../components";
import "./Mainpage.css";

const MainPage = () => {
  return (
    <div>
      <div className="w-full m-4 md:m-2 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="MainPage" title="예상 전력 소비량" />
        <div className="w-full dark:bg-secondary-dark-bg">
          <ElectricPr />
        </div>
      </div>
      <div className="w-full m-4 md:m-2 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="MainPage" title="전년도 대비 전력량" />
        <div className="flex justify-center w-full dark:bg-secondary-dark-bg">
          <GongjoCompare />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
