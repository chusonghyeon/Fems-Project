import React from "react";
import { DataGrid } from "../../components";
import DashHeader from "../../components/common/DashHeader";
import Linearea from "../../components/Charts/Linearea";
const Electricamount = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <DashHeader category="전력량" title="시간별 전력량" />
      <Linearea />
      <DataGrid />
    </div>
  );
};

export default Electricamount;
