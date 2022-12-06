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
import { electricdata, electricdata1 } from "../../data/dummy";
const Linearea = () => {
  return (
    <div className="w-full test">
      <ChartComponent
        id="charts"
        style={{ textAlign: "center" }}
        primaryXAxis={{
          valueType: "Double",
          interval: 1,
          majorGridLines: { width: 0 },
          edgeLabelPlacement: "Shift",
        }}
        // load={this.load.bind(this)}
        primaryYAxis={{
          title: "Production (Billion as kWh)",
          valueType: "Double",
          labelFormat: "{value}B",
          lineStyle: { width: 0 },
          majorTickLines: { width: 0 },
          minorTickLines: { width: 0 },
        }}
        // width={Browser.isDevice ? "100%" : "75%"}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{ enableHighlight: true }}
        tooltip={{ enable: true }}
        // loaded={this.onChartLoad.bind(this)}
        title="Electricity- Production"
        width="auto"
      >
        <Inject
          services={[StepAreaSeries, Tooltip, Legend, Highlight, Resize]}
        />
        <SeriesCollectionDirective>
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
          <SeriesDirective
            dataSource={electricdata1}
            xName="x"
            yName="y"
            name="Non-Renewable"
            width={2}
            opacity={0.6}
            type="StepArea"
            border={{ width: 2 }}
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Linearea;
