import React from "react";
import { ElectricPr, GongjoPr } from "../../components";
import { useStateContext } from "../../context/UserContext";
import { Header } from "../../components";

const MainPage = () => {
  return (
    <div className="m-4 md:m-10 p-2 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="MainPage" title="대시보드" />
      <div className=" h-full w-full m-auto">
        <div>
          <ElectricPr />
        </div>
        <div>
          <GongjoPr />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
