import React from "react";
<<<<<<< HEAD
import { TempGrid, Dayheader, DayLineChart } from "../../components";
=======
import { TempGrid, Dayheader } from "../../components";
import DayLineChart from "../../components/Charts/DayLineChart";
>>>>>>> 0fa275e6f942ef68236c5adfcc8f1707b4e626a9
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
<<<<<<< HEAD
        {/* <DayLineChart /> */}
=======
        <DayLineChart />
>>>>>>> 0fa275e6f942ef68236c5adfcc8f1707b4e626a9
        <TempGrid />
      </div>
    </>
  );
};

export default HourlyTemperature;
