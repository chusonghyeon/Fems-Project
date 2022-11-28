import React from "react";
import Header from "../components/Header";
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
//https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-appearance/
const Dashboard = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Dashboard" title="대쉬보드" className="flex" />
      <div className="flex-wrap flex flex-row">
        <h6>AHU-01</h6>
        <div>
          <CircularGaugeComponent className="m-2 bg-sky-400 border-inherit w-40 h-40">
            <AxesDirective>
              <AxisDirective
                radius="90%"
                maximum={120}
                startAngle={230}
                endAngle={130}
                majorTicks={{
                  width: 1,
                  color: "#8c8c8c",
                }}
                lineStyle={{ width: 2 }}
                minorTicks={{
                  width: 1,
                  color: "#8c8c8c",
                }}
              >
                <PointersDirective>
                  <PointerDirective value={60} radius="60%"></PointerDirective>
                </PointersDirective>
                <RangesDirective>
                  <RangeDirective
                    start={0}
                    end={70}
                    radius="110%"
                  ></RangeDirective>
                  <RangeDirective
                    start={70}
                    end={110}
                    radius="110%"
                  ></RangeDirective>
                  <RangeDirective
                    start={110}
                    end={120}
                    radius="110%"
                  ></RangeDirective>
                </RangesDirective>
              </AxisDirective>
            </AxesDirective>
          </CircularGaugeComponent>
        </div>
        <div>
          <CircularGaugeComponent className="m-2 bg-sky-400 border-inherit w-40 h-40">
            <AxesDirective>
              <AxisDirective
                radius="90%"
                maximum={120}
                startAngle={230}
                endAngle={130}
                majorTicks={{
                  width: 1,
                  color: "#8c8c8c",
                }}
                lineStyle={{ width: 2 }}
                minorTicks={{
                  width: 1,
                  color: "#8c8c8c",
                }}
              >
                <PointersDirective>
                  <PointerDirective value={60} radius="60%"></PointerDirective>
                </PointersDirective>
                <RangesDirective>
                  <RangeDirective
                    start={0}
                    end={70}
                    radius="110%"
                  ></RangeDirective>
                  <RangeDirective
                    start={70}
                    end={110}
                    radius="110%"
                  ></RangeDirective>
                  <RangeDirective
                    start={110}
                    end={120}
                    radius="110%"
                  ></RangeDirective>
                </RangesDirective>
              </AxisDirective>
            </AxesDirective>
          </CircularGaugeComponent>
        </div>
      </div>
      <div className="flex-wrap flex flex-row">
        <h6>AHU-02</h6>
        <div>
          <CircularGaugeComponent className="m-2 bg-sky-400 border-inherit w-40 h-40">
            <AxesDirective>
              <AxisDirective
                radius="90%"
                maximum={120}
                startAngle={230}
                endAngle={130}
                majorTicks={{
                  width: 1,
                  color: "#8c8c8c",
                }}
                lineStyle={{ width: 2 }}
                minorTicks={{
                  width: 1,
                  color: "#8c8c8c",
                }}
              >
                <PointersDirective>
                  <PointerDirective value={60} radius="60%"></PointerDirective>
                </PointersDirective>
                <RangesDirective>
                  <RangeDirective
                    start={0}
                    end={70}
                    radius="110%"
                  ></RangeDirective>
                  <RangeDirective
                    start={70}
                    end={110}
                    radius="110%"
                  ></RangeDirective>
                  <RangeDirective
                    start={110}
                    end={120}
                    radius="110%"
                  ></RangeDirective>
                </RangesDirective>
              </AxisDirective>
            </AxesDirective>
          </CircularGaugeComponent>
        </div>
        <div>
          <CircularGaugeComponent className="m-2 bg-sky-400 border-inherit w-40 h-40">
            <AxesDirective>
              <AxisDirective
                radius="90%"
                maximum={120}
                startAngle={230}
                endAngle={130}
                majorTicks={{
                  width: 1,
                  color: "#8c8c8c",
                }}
                lineStyle={{ width: 2 }}
                minorTicks={{
                  width: 1,
                  color: "#8c8c8c",
                }}
              >
                <PointersDirective>
                  <PointerDirective value={60} radius="60%"></PointerDirective>
                </PointersDirective>
                <RangesDirective>
                  <RangeDirective
                    start={0}
                    end={70}
                    radius="110%"
                  ></RangeDirective>
                  <RangeDirective
                    start={70}
                    end={110}
                    radius="110%"
                  ></RangeDirective>
                  <RangeDirective
                    start={110}
                    end={120}
                    radius="110%"
                  ></RangeDirective>
                </RangesDirective>
              </AxisDirective>
            </AxesDirective>
          </CircularGaugeComponent>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
