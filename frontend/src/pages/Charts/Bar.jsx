import React from "react";
import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  AxesDirective,
  AxisDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { Resize } from "@syncfusion/ej2-react-grids";
import { chartData } from "../../data/dummy";
//https://www.youtube.com/watch?v=EirmVDtpvcE&t=97s
const Bar = () => {
  return (
    <div className="w-full text-center m-5">
      {/* use isInversed:true to render axis in inversed manner*/}
      <ChartComponent
        title="Weather Forecast Data"
        primaryXAxis={{
          valueType: "Category",
          title: "Days of the week",
          crossesInAxis: "yAxis1",
        }}
        primaryYAxis={{
          title: "Temperature",
        }}
        tooltip={{ enable: true }}
        width="auto"
      >
        <Inject
          services={[ColumnSeries, Category, LineSeries, Tooltip, Resize]}
        ></Inject>
        <AxesDirective>
          <AxisDirective
            name="yAxis1"
            opposedPosition={true}
            labelFormat="{value}°C"
            majorTickLines={{ color: "blue" }}
          ></AxisDirective>
        </AxesDirective>
        <SeriesCollectionDirective>
          <SeriesDirective
            type="Column"
            dataSource={chartData}
            name="Germany"
            xName="day"
            yName="value"
          ></SeriesDirective>
          <SeriesDirective
            type="Line"
            dataSource={chartData}
            name="Japan"
            xName="day"
            yName="value1"
            marker={{ visible: true }}
          ></SeriesDirective>
          <SeriesDirective></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
