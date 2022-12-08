import { React, useEffect, useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  ColumnSeries,
  Inject,
  Tooltip,
  DateTime,
} from "@syncfusion/ej2-react-charts";
import { Resize } from "@syncfusion/ej2-react-grids";
import { MultiChartData, MultiChartData2 } from "../../data/dummy";
import axios from "axios";
import { GiConsoleController } from "react-icons/gi";

//api 주소
const SERVER_URL = "/Get_LpData_monthly_Daily_Data";
const GongjoPr = () => {
  const [compareData, setCompareData] = useState([]);
  const CompareChartData = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(SERVER_URL);
    setCompareData(res.data);
    //21
    let PowerArray = [];
    const runDate = res.data.slice(0, 11);
    console.log(runDate);
    console.log(typeof runDate);
    runDate.forEach((item) => {
      let year = item.runDate.slice(0, 4);
      console.log(year);
      let month = item.runDate.slice(4, 6);
      PowerArray.push({
        x: new Date(year, month),
        y: item.sumData,
      });
    });
    CompareChartData.push([...PowerArray]);

    //22
    PowerArray = [];
    const runDate2 = res.data.slice(11, 23);
    console.log(runDate2);
    console.log(typeof runDate2);
    runDate2.forEach((item) => {
      let year = item.runDate.slice(0, 4);
      let month = item.runDate.slice(4, 6);
      PowerArray.push({
        x: new Date(year, month),
        y: item.sumData,
      });
    });
    CompareChartData.push([...PowerArray]);
    console.log(CompareChartData);
  };

  console.log(CompareChartData);

  // 비교차트 2021전력량
  const CompareYearData1 = [
    {
      dataSource: CompareChartData[0],
      type: "Column",
      name: "2021",
      xName: "x",
      yName: "y",
    },
  ];
  // 비교차트 2022전력량
  const CompareYearData2 = [
    {
      dataSource: CompareChartData[1],
      type: "Column",
      name: "2022",
      xName: "x",
      yName: "y",
    },
  ];

  return (
    <div className="w-full text-center m-5">
      <ChartComponent
        width="auto"
        legendSettings={{ visible: true }}
        title="월별 전력소모량"
        useGroupingSeparator={true}
        primaryXAxis={{
          valueType: "DateTime",
          title: "공조기 데이터",
          // interval: 1,
          // labelFormat: "{value}월",
          labelFormat: "MM월",
          intervalType: "Months",
          rangePadding: "None",
          edgeLabelPlacement: "Shift",
        }}
        primaryYAxis={{ labelFormat: "{value} kWh" }}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, Resize, DateTime]}
        ></Inject>
        <SeriesCollectionDirective>
          {CompareYearData1.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
          {CompareYearData2.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default GongjoPr;
