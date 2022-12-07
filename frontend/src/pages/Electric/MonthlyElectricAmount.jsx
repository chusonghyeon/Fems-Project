import React from "react";
import { ElectricGrid, Monthdate } from "../../components";
import Header from "../../components/common/Header";
import Linearea from "../../components/Charts/HourElecarea";
const Electricamount = () => {
  return (
    <div className="m-4 md:m-2 mt-24 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="전력량" title="월별 전력량" />
      <div
        className="flex mb-10
      "
      >
        <Monthdate />
        <button
          type="submit"
          className="pointer w-32 h-auto text-white bg-blue-500 rounded-md"
        >
          검색
        </button>
      </div>
      <Linearea />
      <ElectricGrid />
    </div>
  );
};

export default Electricamount;
