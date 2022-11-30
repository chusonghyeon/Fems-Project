import React from "react";
import { LineChart, TempGrid } from "../../components";
import Header from "../../components/common/Header";
const DailyTemperature = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="온도" title="일별 온도현황" />
      <div className="w-full dark:bg-secondary-dark-bg">
        <LineChart />
        <TempGrid />
      </div>
    </div>
  );
};

export default DailyTemperature;
