import React from "react";
import { DataGrid } from "../../components";
import Header from "../../components/common/Header";
import Linearea from "../../components/Charts/Linearea";
const Electricamount = () => {
  return (
    <div className="m-4 md:m-2 mt-24 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="전력량" title="시간별 전력량" />
      <Linearea />
      <DataGrid />
    </div>
  );
};

export default Electricamount;
