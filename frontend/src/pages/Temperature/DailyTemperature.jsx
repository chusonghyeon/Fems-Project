import React from "react";
import { Dayheader, HourTempChart, TempGrid } from "../../components";
import Header from "../../components/common/Header";

const HourlyTemperature = () => {
  return (
    <>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl h-60">
        <Header category="온도" title="일별 온도현황" />
        <Dayheader />
      </div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
        <HourTempChart />
        <TempGrid />
      </div>
    </>
  );
};

export default HourlyTemperature;
