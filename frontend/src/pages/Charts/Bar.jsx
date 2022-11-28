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
} from "@syncfusion/ej2-react-charts";
import { chartData } from "../../data/dummy";
//https://www.youtube.com/watch?v=EirmVDtpvcE&t=97s
const Bar = () => {
  return (
    <div style={{ textAlign: "center", margin: "5% 25%" }}>
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
      >
        <Inject services={[ColumnSeries, Category, LineSeries]}></Inject>
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
