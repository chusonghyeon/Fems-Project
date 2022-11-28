import React from "react";
import DashHeader from "../components/DashHeader";

const Humidity = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <DashHeader category="습도" title="일별 습도현황" />
    </div>
  );
};

export default Humidity;
