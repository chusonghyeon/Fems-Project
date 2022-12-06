import React from "react";
import { Hourheader, LineChart, TempGrid } from "../../components";
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
        {/* <LineChart /> */}
        <TempGrid />
      </div>
    </>
  );
};

export default HourlyHumidity;
