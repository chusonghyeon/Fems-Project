import React from "react";
import { TempGrid, Dayheader } from "../../components";
import DayLineChart from "../../components/Charts/DayLineChart";
import Header from "../../components/common/Header";
import { useStateContext } from "../../context/UserContext";
const HourlyTemperature = () => {
  return (
    <>
      <div className="m-4 md:m-2 mt-24 p-5 w-auto bg-white dark:bg-secondary-dark-bg rounded-3xl h-40">
        <Header category="온도" title="일별 온도현황" />
        <Dayheader />
      </div>
      <div className="m-4 md:m-2 mt-24 p-5 bg-white rounded-3xl dark:bg-secondary-dark-bg">
        <DayLineChart />
        <TempGrid />
      </div>
    </>
  );
};

export default HourlyTemperature;
