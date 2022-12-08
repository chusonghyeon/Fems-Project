import { React, useEffect, useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  ColumnSeries,
  Inject,
  Tooltip,
  Category,
} from "@syncfusion/ej2-react-charts";
import { Resize } from "@syncfusion/ej2-react-grids";
import axios from "axios";
import { GongjoPrimaryXAxis, GongjoPrimaryYAxis } from "../../data/dummy";
import { GiConsoleController } from "react-icons/gi";

//api 주소
const SERVER_URL = "/Get_LpData_monthly_Daily_Data";

const GongjoPr = () => {
  const [compareData, setCompareData] = useState([]);
  const CompareChartData = [];

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(SERVER_URL);
      setCompareData(res.data);
    };

    fetchData();
  }, [setCompareData]);

  //21
  let PowerArray = [];
  const runDate = compareData.slice(0, 11);
  console.log(runDate);
  console.log(typeof runDate);
  runDate.forEach((item) => {
    let year = item.runDate.slice(0, 4);
    console.log(year);
    let month = item.runDate.slice(4, 6);
    PowerArray.push({
      x: new Date(year, month),
      y: item.sumData * 1,
    });
  });
  CompareChartData.push([...PowerArray]);

  //22
  PowerArray = [];
  const runDate2 = compareData.slice(11, 23);
  console.log(runDate2);
  console.log(typeof runDate2);
  runDate2.forEach((item) => {
    let year = item.runDate.slice(0, 4);
    let month = item.runDate.slice(4, 6);
    PowerArray.push({
      x: new Date(year, month),
      y: item.sumData * 1,
    });
  });
  CompareChartData.push([...PowerArray]);
  console.log(CompareChartData);
  // 비교차트 2021전력량
  const CompareYearData1 = [
    {
      dataSource: CompareChartData[0],
      tooltipMappingName: "r",
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
      tooltipMappingName: "r",
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
          GongjoPrimaryXAxis,
        }}
        primaryYAxis={{ GongjoPrimaryYAxis }}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, Resize, Category]}
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
