import React from "react";
import { Dayheader, DayLineChart, DayTempGrid } from "../../components";
import Header from "../../components/common/Header";
/**
 * 
//FIXME: DayLineCthart > DaytempChart
 */
const HourlyTemperature = () => {
  return (
    <>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl h-60">
        <Header category="온도" title="일별 온도현황" />
        <Dayheader />
      </div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
        <DayLineChart />
        <DayTempGrid />
      </div>
    </>
  );
};

export default HourlyTemperature;
