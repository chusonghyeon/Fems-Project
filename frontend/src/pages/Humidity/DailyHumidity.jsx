import React from "react";
import {
  DayHumidityChart,
  HumidityDayheader,
  HumidityGrid,
} from "../../components";
import Header from "../../components/common/Header";
import { useStateContext } from "../../context/UserContext";
const DailiyHumidity = () => {
  return (
    <>
      <div className="m-4 md:m-2 mt-24 p-5 w-auto bg-white dark:bg-secondary-dark-bg rounded-3xl h-40">
        <Header category="습도" title="일별 습도현황" />
        <HumidityDayheader />
      </div>
      <div className="m-4 md:m-2 mt-24 p-5 bg-white rounded-3xl dark:bg-secondary-dark-bg">
        <DayHumidityChart />
        <HumidityGrid />
      </div>
    </>
  );
};

export default DailiyHumidity;
