import { React, useEffect, useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  ColumnSeries,
  Inject,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { Resize } from "@syncfusion/ej2-react-grids";
import { MultiChartData, MultiChartData2 } from "../../data/dummy";
import axios from "axios";

//api 주소
const SERVER_URL = "/Get_LpData_monthly_Daily_Data";
const GongjoPr = () => {
  const [compareData, setCompareData] = useState([]);
  const elecDataSource = [];
  useEffect(() => {
    fetchData();
    console.log(compareData);
    compareData.forEach((item) => {
      console.log(item);
    });
  }, []);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setCompareData(response.data);
  };

  //2021년도 연도 가져오기

  return (
    <div className="w-full text-center m-5">
      <ChartComponent
        width="auto"
        legendSettings={{ visible: true }}
        title="월별 전력소모량"
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
      >
        <Inject services={[ColumnSeries, Legend, Tooltip, Resize]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective
            type="Column"
            name="2021"
            dataSource={MultiChartData}
            xName="month"
            yName="electricPower"
          ></SeriesDirective>
          <SeriesDirective
            type="Column"
            name="2022"
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
