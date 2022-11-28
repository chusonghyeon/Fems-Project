import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  ColumnSeries,
  Inject,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { MultiChartData, MultiChartData2 } from "../../data/dummy";
const GongjoPr = () => {
  return (
    <div className="w-full text-center m-5">
      {/* Add minimum:15, maximum:21, in primary x-axis property to set a custum range */}
      <ChartComponent
        width="100%"
        legendSettings={{ visible: true }}
        title="공조기 월별 전력소모량"
        useGroupingSeparator={true}
        primaryXAxis={{
          valueType: "Double",
          title: "공조기 데이터",
          interval: 1,
          labelFormat: "{value}월",
          rangePadding: "None",
          edgeLabelPlacement: "Shift",
        }}
        primaryYAxis={{ labelFormat: "{value} kWh" }}
        tooltip={{ enable: true }}
        className=""
      >
        <Inject services={[ColumnSeries, Legend, Tooltip]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective
            type="Column"
            name="2015"
            dataSource={MultiChartData}
            xName="month"
            yName="electricPower"
          ></SeriesDirective>
          <SeriesDirective
            type="Column"
            name="2016 "
            dataSource={MultiChartData2}
            xName="month"
            yName="electricPower"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default GongjoPr;
