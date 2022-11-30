import React from "react";
import { LineChart, TempGrid, Toggleheader } from "../../components";
import Header from "../../components/common/Header";

const HourlyTemperature = () => {
  return (
    <>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl h-60">
        <Header category="온도" title="시간별 습도현황" />
        <Toggleheader />
      </div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
        <LineChart />
        <TempGrid />
      </div>
    </>
  );
};

export default HourlyTemperature;
