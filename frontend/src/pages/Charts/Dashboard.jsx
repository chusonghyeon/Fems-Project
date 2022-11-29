import React from "react";
import Header from "../../components/common/Header";
import ReactDOM from "react-dom/client";
import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  PointersDirective,
  PointerDirective,
  RangesDirective,
  RangeDirective,
} from "@syncfusion/ej2-react-circulargauge";
import { GongjoPr } from "../../components";
//https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-appearance/
const Dashboard = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Dashboard" title="대쉬보드" className="flex" />
      <div className="flex w-full ">
        <GongjoPr />
      </div>
    </div>
  );
};

export default Dashboard;
