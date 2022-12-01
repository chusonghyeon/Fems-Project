import React from "react";
import { ElectricGrid } from "../../components";
import Header from "../../components/common/Header";
import Linearea from "../../components/Charts/Linearea";
const Electricamount = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="전력량" title="월별 전력량" />
      <Linearea />
      <ElectricGrid />
    </div>
  );
};

export default Electricamount;
