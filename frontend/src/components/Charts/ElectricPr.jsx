import React, { useEffect } from "react";
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
  Tooltip,
  Highlight,
  DateTime,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { Resize } from "@syncfusion/ej2-react-grids";
import { Browser } from "@syncfusion/ej2-base";
import axios from "axios";
import { useState } from "react";
import { MlPrimaryXAxis, MlPrimaryYAxis } from "../../data/dummy";

const Predict_CSS = `
     .control-fluid {
         padding: 0px !important;
     }
     #charts_Series_1 {
      stroke-dasharray: 10px 10px;
       stroke-linejoin: round; stroke-linecap: round;
       -webkit-animation: dash 2s linear infinite;
       animation: dash 2s linear infinite;
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

const SERVER_URL = "/ML";

const ElectricMl = () => {
  const [ml, setMl] = useState([]);
  const MlDataSource = [];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(SERVER_URL);
      setMl(response.data);
      console.log(response.data);
    };

    fetchData();
  }, [setMl]);

  // 예측값
  let mlArray = [];
  ml.forEach((item) => {
    let year = item.rundate.slice(0, 4);
    let month = item.rundate.slice(4, 6) - 1;
    let day = item.rundate.slice(6, 8);
    mlArray.push({
      x: new Date(year, month, day),
      y: item.Y_real_Data * 1,
    });
  });
  MlDataSource.push([...mlArray]);

  // 실제값
  mlArray = [];
  ml.forEach((item) => {
    let year = item.rundate.slice(0, 4);
    let month = item.rundate.slice(4, 6) - 1;
    let day = item.rundate.slice(6, 8);
    mlArray.push({
      x: new Date(year, month, day),
      y: item.Y_pred_Data * 1,
    });
  });
  MlDataSource.push([...mlArray]);

  const MlPrData = [
    {
      dataSource: MlDataSource[0],
      xName: "x",
      yName: "y",
      name: "예측값",
      width: "2",
      marker: { visible: false, width: 7, height: 7 },
      type: "Line",
    },
  ];

  const MlRealData = [
    {
      dataSource: MlDataSource[1],
      xName: "x",
      yName: "y",
      name: "실제값",
      width: "2",
      marker: { visible: false, width: 7, height: 7 },
      type: "Line",
    },
  ];

  return (
    <div className="control-pane">
      <style>{Predict_CSS}</style>
      <div className="control-section">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
<<<<<<< HEAD
          primaryXAxis={MlPrimaryXAxis}
          primaryYAxis={MlPrimaryYAxis}
=======
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
            maximum: 350,
            interval: 50,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
>>>>>>> 7307dae4ef57b2f7d6bb1e1ec94925dd16e8d577
          chartArea={{ border: { width: 0 } }}
          tooltip={{
            enable: true,
            shared: true,
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
          width="auto"
          title="2022년 전력 소비량 예측"
        >
          <Inject
            services={[
              LineSeries,
              Tooltip,
              Crosshair,
              ChartAnnotation,
              Highlight,
              Resize,
              DateTime,
              Legend,
            ]}
          />
          <AnnotationsDirective>
            <AnnotationDirective
              region="Series"
              x="15%"
              y="55%"
            ></AnnotationDirective>
            <AnnotationDirective
              region="Series"
              x="65%"
              y="30%"
            ></AnnotationDirective>
          </AnnotationsDirective>
          <SeriesCollectionDirective>
            {MlPrData.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
            {MlRealData.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ElectricMl;
