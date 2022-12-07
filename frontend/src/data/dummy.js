import React from "react";
import {} from "react-icons/ai";

import { WiHumidity } from "react-icons/wi";
import { BsLightning } from "react-icons/bs";
import { FaTemperatureLow } from "react-icons/fa";

import { BsDot } from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import { AiOutlineLineChart } from "react-icons/ai";

// 나중에 공조기 가동상태때 사용가능있음
const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p
      style={{ background: props.StatusBg }}
      className="rounded-full h-3 w-3"
    />
    <p>{props.Status}</p>
  </div>
);

// 예측 데이터(임시)
export const MultiChartData = [
  {
    month: 1,
    electricPower: 15555,
  },
  {
    month: 2,
    electricPower: 468378,
  },
  {
    month: 3,
    electricPower: 510252,
  },
  {
    month: 4,
    electricPower: 495540,
  },
  {
    month: 5,
    electricPower: 523391,
  },
  {
    month: 6,
    electricPower: 614258,
  },
  {
    month: 7,
    electricPower: 345110,
  },
  {
    month: 8,
    electricPower: 171626,
  },
  {
    month: 9,
    electricPower: 20861,
  },
  {
    month: 10,
    electricPower: 0,
  },
  {
    month: 11,
    electricPower: 545154,
  },
  {
    month: 12,
    electricPower: 91249,
  },
];
// 예측 데이터2(임시)
export const MultiChartData2 = [
  {
    month: 1,
    electricPower: 555967,
  },
  {
    month: 2,
    electricPower: 531552,
  },
  {
    month: 3,
    electricPower: 554705,
  },
  {
    month: 4,
    electricPower: 538705,
  },
  {
    month: 5,
    electricPower: 562809,
  },
  {
    month: 6,
    electricPower: 643697,
  },
  {
    month: 7,
    electricPower: 37114,
  },
  {
    month: 8,
    electricPower: 702184,
  },
  {
    month: 9,
    electricPower: 596134,
  },
  {
    month: 10,
    electricPower: 442745,
  },
  {
    month: 11,
    electricPower: 100,
  },
  {
    month: 12,
    electricPower: 250,
  },
];

// Temp Y 값(공용)
export const LinePrimaryYAxis = {
  labelFormat: "{value}°C",
  rangePadding: "None",
  minimum: 5,
  maximum: 35,
  interval: 5,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

// Hour hUMIDITY X 값
export const HumidityHourLinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "HH시",
  intervalType: "Hours",
  interval: 1,
  majorGridLines: { width: 0 },
  background: "white",
};

// Hour Humidity Y 값(공용)
export const HumidityHourLinePrimaryYAxis = {
  labelFormat: "{value}%",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 10,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

// DAY hUMIDITY X 값
export const HumidityDayLinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "dd일",
  intervalType: "Days",
  interval: 1,
  majorGridLines: { width: 0 },
  background: "white",
};

//DAY HUMIDITY Y 값
export const HumidityDayLinePrimaryYAxis = {
  labelFormat: "{value}%",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 10,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

// Month hUMIDITY X 값
export const HumidityMonthLinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "MM월",
  intervalType: "Months",
  interval: 1,
  majorGridLines: { width: 0 },
  background: "white",
};

//Month HUMIDITY Y 값
export const HumidityMonthLinePrimaryYAxis = {
  labelFormat: "{value}%",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 10,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

// HourTemp X 값
export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "HH시",
  intervalType: "Hours",
  interval: 1,
  majorGridLines: { width: 0 },
  background: "white",
};

// DayTemp X 값
export const DayLinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "dd일",
  intervalType: "Days",
  interval: 1,
  majorGridLines: { width: 0 },
  background: "white",
};

// DayTemp X 값
export const MonthLinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "MM월",
  intervalType: "Months",
  interval: 1,
  majorGridLines: { width: 0 },
  background: "white",
};

// Elec Hour Y값
export const ElecLinePrimaryYAxis = {
  labelFormat: "{value}KWh",
  minimum: 0,
  maximum: 500,
  interval: 100,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

// Elec Day Y값
export const DayElecPrimaryYAxis = {
  labelFormat: "{value}KWh",
  minimum: 0,
  maximum: 30000,
  interval: 5000,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

// Elec Month Y값
export const MonthElecPrimaryYAxis = {
  labelFormat: "{value}KWh",
  minimum: 0,
  maximum: 750000,
  interval: 150000,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

// HourElec X 값
export const HElecPrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "HH시",
  majorGridLines: { width: 0 },
  intervalType: "Hours",
  interval: 1,
  edgeLabelPlacement: "Shift",
};

// DayElec X 값
export const DElecPrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "dd일",
  majorGridLines: { width: 0 },
  intervalType: "Days",
  interval: 1,
  edgeLabelPlacement: "Shift",
};

// DayElec X 값
export const MElecLinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "MM월",
  majorGridLines: { width: 0 },
  intervalType: "Months",
  interval: 1,
  edgeLabelPlacement: "Shift",
};

// 공조기 정보 Grid용 데이터(임시)
export const customersGrid = [
  {
    field: "공조기ID",
    headerText: " 공조기 번호",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "설치장소",
    headerText: " 공조기 설치 장소",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "클린룸",
    headerText: " 클린룸",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "볼트",
    headerText: " V",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "전력",
    headerText: " KW",
    width: "100",
    textAlign: "Center",
  },

  {
    field: "인버터",
    headerText: "인버터 갯수",
    width: "100",
    textAlign: "Center",
  },
];

// 사이드바 목록
export const links = [
  {
    title: "메인",
    links: [
      {
        name: "전력 예측",
        icon: <AiOutlineLineChart />,
      },
      {
        name: "공조기 정보",
        icon: <GiComputerFan />,
      },
    ],
  },

  {
    title: "전력량",
    titleIcon: <BsLightning />,
    links: [
      {
        name: "시간별 전력량",
        icon: <BsDot />,
      },
      {
        name: "일별 전력량",
        icon: <BsDot />,
      },
      {
        name: "월별 전력량",
        icon: <BsDot />,
      },
    ],
  },
  {
    title: "온도",
    titleIcon: <FaTemperatureLow />,
    links: [
      {
        name: "시간별 온도",
        icon: <BsDot />,
      },
      {
        name: "일별 온도",
        icon: <BsDot />,
      },
      {
        name: "월별 온도",
        icon: <BsDot />,
      },
    ],
  },
  {
    title: "습도",
    titleIcon: <WiHumidity />,

    links: [
      {
        name: "시간별 습도",
        icon: <BsDot />,
      },
      {
        name: "일별 습도",
        icon: <BsDot />,
      },

      {
        name: "월별 습도",
        icon: <BsDot />,
      },
    ],
  },
];

// 테마 색상
export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

//공조기 정보 데이터 (임시)
export const customersData = [
  {
    공조기ID: "AHU-01",
    설치장소: "B2F 기계실",
    클린룸: "1F A존(1000)",
    볼트: "380V",
    전력: "15,000KW",
    인버터: "1",
  },
  {
    공조기ID: "AHU-02",
    설치장소: "B1F 기계실",
    클린룸: "1F B존(100)",
    볼트: "380V",
    전력: "3,700KW",
    인버터: "1",
  },
  {
    공조기ID: "AHU-03",
    설치장소: "B1F 기계실",
    클린룸: "B1도금",
    볼트: "380V",
    전력: "5,500KW",
    인버터: "1",
  },
  {
    공조기ID: "AHU-04A",
    설치장소: "1F C/R D-1",
    클린룸: "1F D존",
    볼트: "380V",
    전력: "5,500KW",
    인버터: "1",
  },
  {
    공조기ID: "AHU-04B",
    설치장소: "1F C/R D-1",
    클린룸: "1F C존",
    볼트: "380V",
    전력: "5,500KW",
    인버터: "1",
  },
  {
    공조기ID: "AHU-05",
    설치장소: "1F B존",
    클린룸: "1F B존",
    볼트: "380V",
    전력: "7,500KW",
    인버터: "1",
  },
  {
    공조기ID: "AHU-06",
    설치장소: "2F",
    클린룸: "2F(1000)",
    볼트: "380V",
    전력: "11,000KW",
    인버터: "1",
  },
  {
    공조기ID: "AHU-07",
    설치장소: "B1F",
    클린룸: "B1도금(1000)",
    볼트: "380V",
    전력: "1,120KW",
    인버터: "1",
  },
  {
    공조기ID: "AHU-08",
    설치장소: "2F 공조실",
    클린룸: "1F A존(100)",
    볼트: "380V",
    전력: "3,750KW",
    인버터: "2",
  },
  {
    공조기ID: "AHU-09",
    설치장소: "1F 공조실",
    클린룸: "1F E존",
    볼트: "380V",
    전력: "18,500KW",
    인버터: "1",
  },
  {
    공조기ID: "AHU-10",
    설치장소: "2F 공조실",
    클린룸: "2F E존",
    볼트: "380V",
    전력: "3,000KW",
    인버터: "2",
  },
];

// Sat Dec 03 2022 08:10:00 GMT+0900
// Temp 테스트, 시간단위 (삭제예정)
export const lineChartData = [
  [
    { x: new Date(2022, 11, 3, 7, 10), y: 24.13 },
    { x: new Date(2022, 11, 3, 8, 10), y: 21.23 },
    { x: new Date(2022, 11, 3, 9, 10), y: 26.4 },
    { x: new Date(2022, 11, 3, 10, 10), y: 26.15 },
  ],
  [
    { x: new Date(2022, 11, 3, 7, 10), y: 24.44 },
    { x: new Date(2022, 11, 3, 8, 10), y: 18.21 },
    { x: new Date(2022, 11, 3, 9, 10), y: 20.21 },
    { x: new Date(2022, 11, 3, 10, 10), y: 20.2 },
  ],

  [
    { x: new Date(2022, 11, 3, 7, 10), y: 20.2 },
    { x: new Date(2022, 11, 3, 8, 10), y: 20.2 },
    { x: new Date(2022, 11, 3, 9, 10), y: 30.1 },
    { x: new Date(2022, 11, 3, 10, 10), y: 30.21 },
  ],
  [
    { x: new Date(2022, 11, 3, 7, 10), y: 14.11 },
    { x: new Date(2022, 11, 3, 8, 10), y: 13.31 },
    { x: new Date(2022, 11, 3, 9, 10), y: 20.312 },
    { x: new Date(2022, 11, 3, 10, 10), y: 20.32 },
  ],
];

// Temp 차트에 보여줄 데이터 형식
export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: "x",
    yName: "y",
    name: "설정온도",
    width: "2",
    marker: { visible: false, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "공급온도",
    width: "2",
    marker: { visible: false, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "리턴온도",
    width: "2",
    marker: { visible: false, width: 10, height: 10 },
    type: "Line",
  },
  {
    dataSource: lineChartData[3],
    xName: "x",
    yName: "y",
    name: "외부온도",
    width: "2",
    marker: { visible: false, width: 10, height: 10 },
    type: "Line",
  },
];

// 전력량 예측 데이터 (삭제 예정)
export let electricprdata1 = [
  { x: "1월", y: 100 },
  { x: "2월", y: 110 },
  { x: "3월", y: 125 },
  { x: "4월", y: 150 },
  { x: "5월", y: 140 },
  { x: "6월", y: 160 },
  { x: "7월", y: 190 },
  { x: "8월", y: 210 },
  { x: "9월", y: 300 },
  { x: "10월", y: 240 },
  { x: "11월", y: 230 },
  { x: "12월", y: 270 },
];
// 전력량 예측 데이터 (삭제 예정)
export let electricprdata2 = [
  { x: "1월", y: 110 },
  { x: "2월", y: 120 },
  { x: "3월", y: 130 },
  { x: "4월", y: 150 },
  { x: "5월", y: 120 },
  { x: "6월", y: 160 },
  { x: "7월", y: 200 },
  { x: "8월", y: 200 },
  { x: "9월", y: 310 },
  { x: "10월", y: 240 },
  { x: "11월", y: 220 },
  { x: "12월", y: 270 },
];

// 시간별 전력량 데이터용 (삭제 예정)
export let HourPowerData = [
  {
    inv_kWh: 10248,
    rundate: "202101050101",
  },
  {
    inv_kWh: 10249,
    rundate: "20210106",
  },
  {
    inv_kWh: 10250,
    rundate: "202101",
  },
  {
    inv_kWh: 10251,
    rundate: "20210107",
    // OrderDate: new Date(8367642e5),
  },
];

// 일별 전력량 데이터용 (삭제 예정)
export let DailyPowerData = [
  {
    inv_kWh: 10252,
    rundate: "202101050101",
  },
  {
    inv_kWh: 10253,
    rundate: "20210106",
  },
  {
    inv_kWh: 10254,
    rundate: "202101",
  },
  {
    inv_kWh: 10255,
    rundate: "20210107",
    // OrderDate: new Date(8367642e5),
  },
];

// 월별 전력량 데이터용 (삭제 예정)
export let MonthPowerData = [
  {
    inv_kWh: 10256,
    rundate: "202101050101",
  },
  {
    inv_kWh: 10257,
    rundate: "20210106",
  },
  {
    inv_kWh: 10258,
    rundate: "202101",
  },
  {
    inv_kWh: 10259,
    rundate: "20210107",
    // OrderDate: new Date(8367642e5),
  },
];

// 셀렉트 박스 데이터 (공조기 번호)
export const OPTIONS = [
  {
    value: "A00",
    name: "공조기00",
  },
  {
    value: "A01",
    name: "공조기01",
  },
  {
    value: "A02",
    name: "공조기02",
  },
  {
    value: "A03",
    name: "공조기03",
  },
  {
    value: "A04",
    name: "공조기04",
  },
  {
    value: "A05",
    name: "공조기05",
  },
  {
    value: "A06",
    name: "공조기06",
  },
  {
    value: "A07",
    name: "공조기07",
  },
  {
    value: "A08",
    name: "공조기08",
  },
  {
    value: "A09",
    name: "공조기09",
  },
  {
    value: "A10",
    name: "공조기10",
  },
];
