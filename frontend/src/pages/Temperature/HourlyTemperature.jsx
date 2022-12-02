import React from "react";
import { LineChart, TempGrid, Toggleheader } from "../../components";
import Header from "../../components/common/Header";
import { useStateContext } from "../../context/UserContext";
const HourlyTemperature = () => {
  return (
    <>
      <div className="m-4 md:m-2 mt-24 p-5 w-auto bg-white dark:bg-secondary-dark-bg rounded-3xl h-60">
        <Header category="온도" title="시간별 온도현황" />
        <Toggleheader />
      </div>
      <div className="m-4 md:m-2 mt-24 p-5 bg-white rounded-3xl dark:bg-secondary-dark-bg">
        <LineChart />
        <TempGrid />
      </div>
    </>
  );
};

export default HourlyTemperature;
