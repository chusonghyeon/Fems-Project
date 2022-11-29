import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  AnnotationDirective,
  AnnotationsDirective,
  Inject,
  ChartAnnotation,
  LineSeries,
  Crosshair,
  Category,
  Tooltip,
  Highlight,
} from "@syncfusion/ej2-react-charts";
import { electricprdata1, electricprdata2 } from "../../data/dummy";
import { Browser } from "@syncfusion/ej2-base";
let ActContent = "<div>Actual</div>";
let FrcContent = "<div>Forecast</div>";

const SAMPLE_CSS = `
     .control-fluid {
         padding: 0px !important;
     }
     #charts_Series_1 {
      stroke-dasharray: 10px 10px;
       stroke-linejoin: round; stroke-linecap: round;
       -webkit-animation: dash 1s linear infinite;
       animation: dash 1s linear infinite;
   }
 
     #charts_Series_0_Point_3_Symbol {
         -webkit-animation: opac 1s ease-out infinite;
         animation: opac 1s ease-out infinite;
     }
 
     @-webkit-keyframes dash {
         100% {
             stroke-dashoffset: -20px;
         }
     }
 
     @keyframes dash {
         100% {
             stroke-dashoffset: -20px;
         }
     }
 
     @keyframes opac {
         0% {
             stroke-opacity: 1;
             stroke-width: 0px;
         }
         100% {
             stroke-opacity: 0;
             stroke-width: 10px;
         }
     }`;

const electricPr = () => {
  return (
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          primaryXAxis={{
            valueType: "Category",
            edgeLabelPlacement: "Shift",
            majorGridLines: { width: 0 },
          }}
          primaryYAxis={{
            labelFormat: "{value}kwh",
            rangePadding: "None",
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 300,
            interval: 50,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{
            enable: true,
            shared: true,
            format: "${point.x} : <b>${point.y}",
            header: "<b>Electric Prediction</b>",
          }}
          legendSettings={{ enableHighlight: true }}
          crosshair={{
            enable: false,
            line: {
              color: "rgba(204,214,235,0.25)",
              width: Browser.isDevice ? 50 : 20,
            },
            lineType: "Vertical",
          }}
          width={Browser.isDevice ? "100%" : "75%"}
          title="Fruits Production Statistics"
        >
          <Inject
            services={[
              LineSeries,
              Category,
              Tooltip,
              Crosshair,
              ChartAnnotation,
              Highlight,
            ]}
          />
          <AnnotationsDirective>
            <AnnotationDirective
              content={ActContent}
              region="Series"
              x="15%"
              y="55%"
            ></AnnotationDirective>
            <AnnotationDirective
              content={FrcContent}
              region="Series"
              x="65%"
              y="30%"
            ></AnnotationDirective>
          </AnnotationsDirective>
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={electricprdata1}
              xName="x"
              yName="y"
              width={2}
              marker={{ visible: false, width: 7, height: 7 }}
              type="Line"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={electricprdata2}
              xName="x"
              yName="y"
              width={2}
              marker={{
                visible: false,
                width: 7,
                height: 7,
                shape: "Diamond",
              }}
              dashArray="10"
              type="Line"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default electricPr;
