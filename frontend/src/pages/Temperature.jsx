import React from "react";
import DashHeader from "../components/DashHeader";
const Temperature = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <DashHeader category="온도" title="일별 온도현황" />
      <h1>temperature</h1>
    </div>
  );
};

export default Temperature;
