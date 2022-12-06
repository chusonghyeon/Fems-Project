import React from "react";
<<<<<<< HEAD
import { Hourheader, LineChart, TempGrid } from "../../components";
=======
import { LineChart, HumidityGrid, Toggleheader } from "../../components";
>>>>>>> 0fa275e6f942ef68236c5adfcc8f1707b4e626a9
import Header from "../../components/common/Header";
import { useStateContext } from "../../context/UserContext";
const HourlyHumidity = () => {
  return (
    <>
      <div className="m-4 md:m-2 mt-24 p-5 w-auto bg-white dark:bg-secondary-dark-bg rounded-3xl h-40">
        <Header category="습도" title="시간별 습도현황" />
        <Hourheader />
      </div>
      <div className="m-4 md:m-2 mt-24 p-5 bg-white rounded-3xl dark:bg-secondary-dark-bg">
<<<<<<< HEAD
        {/* <LineChart /> */}
        <TempGrid />
=======
        <LineChart />
        <HumidityGrid />
>>>>>>> 0fa275e6f942ef68236c5adfcc8f1707b4e626a9
      </div>
    </>
  );
};

export default HourlyHumidity;
