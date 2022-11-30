import React from "react";
import { ElectricPr, GongjoPr } from "../../components";
import { Header } from "../../components";
const MainPage = () => {
  return (
    <div>
      <div className="w-11/12 m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="MainPage" title="예상 전력 소비량" />
        <div className="w-full dark:bg-secondary-dark-bg">
          <ElectricPr />
        </div>
      </div>
      <div className="w-11/12 m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="MainPage" title="전년도 대비 전력량" />
        <div className="w-full dark:bg-secondary-dark-bg">
          <GongjoPr />
        </div>
      </div>
    </div>
  );
};
export default MainPage;

{
  /* <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
  <DashHeader category="온도" title="시간별 온도현황" />
  <div className="w-full dark:bg-secondary-dark-bg">
    <LineChart />
    <TempGrid />
  </div>
</div>; */
}
