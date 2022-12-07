import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  Inject,
  Legend,
  StepAreaSeries,
  Highlight,
} from "@syncfusion/ej2-react-charts";
import { Resize } from "@syncfusion/ej2-react-grids";
import { useStateContext } from "../../context/UserContext";
import { electricdata } from "../../data/dummy";
const Linearea = () => {
  const { elecDt } = useStateContext();
  const ElecDataSource = [];

  // 전력량 차트에
  let elecArray = [];
  elecDt.forEach((item) => {
    let year = item.rundate.slice(0, 4);
    let month = item.rundate.slice(4, 6);
    let day = item.rundate.slice(6, 8);
    let hour = item.rundate.slice(8, 10);
    let minute = item.rundate.slice(10, 12);
    elecArray.push({
      x: new Date(year, month, day, hour, minute),
      y: item.LpData * 1,
    });
  });
  ElecDataSource.push([...elecArray]);

  console.log(ElecDataSource);

  // 전력량
  const AreaElecData = [
    {
      dataSource: ElecDataSource,
      xName: "x",
      yName: "y",
      name: "전력량",
      width: "2",
      marker: { visible: false, width: 10, height: 10 },
      type: "StepArea",
      opacity: 0.6,
      border: { width: 2 },
    },
  ];
  console.log(AreaElecData);

  return (
    <div className="w-full test">
      <ChartComponent
        id="charts"
        style={{ textAlign: "center" }}
        primaryXAxis={{
          valueType: "Double",
          // labelFormat: "HH시",
          // intervalType: "Hours",
          interval: 1,
          majorGridLines: { width: 0 },
          edgeLabelPlacement: "Shift",
        }}
        // load={this.load.bind(this)}
        primaryYAxis={{
          valueType: "Double",
          labelFormat: "{value}KWh",
          lineStyle: { width: 0 },
          majorTickLines: { width: 0 },
          minorTickLines: { width: 0 },
        }}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{ enableHighlight: true }}
        tooltip={{ enable: true }}
        title="시간별 전력량"
        width="auto"
      >
        <Inject
          services={[StepAreaSeries, Tooltip, Legend, Highlight, Resize]}
        />
        <SeriesCollectionDirective>
          {/* {AreaElecData.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))} */}
          <SeriesDirective
            dataSource={electricdata}
            xName="x"
            yName="y"
            name="Renewable"
            width={2}
            type="StepArea"
            opacity={0.6}
            border={{ width: 2 }}
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Linearea;
