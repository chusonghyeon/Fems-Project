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
    x: 1,
    y: 15555,
  },
  {
    x: 2,
    y: 468378,
  },
  {
    x: 3,
    y: 510252,
  },
  {
    x: 4,
    y: 495540,
  },
  {
    x: 5,
    y: 523391,
  },
  {
    x: 6,
    y: 614258,
  },
  {
    x: 7,
    y: 345110,
  },
  {
    x: 8,
    y: 171626,
  },
  {
    x: 9,
    y: 20861,
  },
  {
    x: 10,
    y: 0,
  },
  {
    x: 11,
    y: 545154,
  },
  {
    x: 12,
    y: 91249,
  },
];
// 예측 데이터2(임시)
export const MultiChartData2 = [
  {
    x: 1,
    y: 555967,
  },
  {
    x: 2,
    y: 531552,
  },
  {
    x: 3,
    y: 554705,
  },
  {
    x: 4,
    y: 538705,
  },
  {
    x: 5,
    y: 562809,
  },
  {
    x: 6,
    y: 643697,
  },
  {
    x: 7,
    y: 37114,
  },
  {
    x: 8,
    y: 702184,
  },
  {
    x: 9,
    y: 596134,
  },
  {
    x: 10,
    y: 442745,
  },
  {
    x: 11,
    y: 100,
  },
  {
    x: 12,
    y: 250,
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
  valueType: "DateTimeCategory",
  labelFormat: "MM월",
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
  valueType: "DateTimeCategory",
  labelFormat: "MM월",
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

// MonthElec X 값
export const MElecLinePrimaryXAxis = {
  valueType: "DateTimeCategory",
  labelFormat: "MM월",
  majorGridLines: { width: 0 },
  interval: 1,
  edgeLabelPlacement: "Shift",
};

// 예측 X값
export const MlPrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "MM월",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
};

// 예측 Y값
export const MlPrimaryYAxis = {
  labelFormat: "{value}kwh",
  rangePadding: "None",
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 30000,
  interval: 5000,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

//전년도 전력대비 데이터 확인  X 값
export const GongjoPrimaryXAxis = {
  valueType: "Column",
  title: "공조기 데이터",
  // labelFormat: "MM월",
  interval: 1,
  // rangePadding: "None",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
};

// 전년도 전력대비 데이터 확인  X 값
export const GongjoPrimaryYAxis = {
  labelFormat: "{value}KWh",
  // rangePadding: "None",
  // lineStyle: { width: 0 },
  // minimum: 10000,
  // maximum: 700000,
  // interval: 100000,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

// 공조기 정보 Grid용 데이터
export const customersGrid = [
  {
    field: "FAC_NAME",
    headerText: " 공조기 번호",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "FAC_LOC",
    headerText: " 공조기 설치 장소",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "FAC_USE",
    headerText: " 클린룸",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "FAC_VOLTAGE",
    headerText: "전압(V)",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "FAC_KW",
    headerText: "전력(kW)",
    width: "100",
    textAlign: "Center",
  },

  {
    field: "FAC_INV_CNT",
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
        name: "설비 정보",
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
