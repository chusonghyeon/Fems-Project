import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
  AiOutlineDashboard,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiEdit,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import {
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { BsLightning } from "react-icons/bs";
import { FaTemperatureLow } from "react-icons/fa";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { GiLouvrePyramid } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { BsDot } from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import { AiOutlineLineChart } from "react-icons/ai";

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p
      style={{ background: props.StatusBg }}
      className="rounded-full h-3 w-3"
    />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  majorGridLines: { width: 0 },
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  labelStyle: { color: "gray" },
};

export const areaPrimaryYAxis = {
  labelFormat: "{value}%",
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: "gray" },
};
export const barPrimaryXAxis = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: "x",
    yName: "y",
    name: "USA",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
  {
    dataSource: areaChartData[1],
    xName: "x",
    yName: "y",
    name: "France",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
  {
    dataSource: areaChartData[2],
    xName: "x",
    yName: "y",
    name: "Germany",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
];

export const barChartData = [
  [
    { x: "USA", y: 46 },
    { x: "GBR", y: 27 },
    { x: "CHN", y: 26 },
  ],
  [
    { x: "USA", y: 37 },
    { x: "GBR", y: 23 },
    { x: "CHN", y: 18 },
  ],
  [
    { x: "USA", y: 38 },
    { x: "GBR", y: 17 },
    { x: "CHN", y: 26 },
  ],
];
// chart Data

export const chartData = [
  { day: "Sun", value: 35, value1: 30 },
  { day: "Mon", value: 40, value1: 28 },
  { day: "Tue", value: 80, value1: 29 },
  { day: "Wed", value: 70, value1: 30 },
  { day: "Thu", value: 65, value1: 33 },
  { day: "Fri", value: 55, value1: 32 },
  { day: "Sat", value: 50, value1: 34 },
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: "x",
    yName: "y",
    name: "Gold",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: "x",
    yName: "y",
    name: "Silver",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: "x",
    yName: "y",
    name: "Bronze",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];

export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};
// Grid Data
export let data = [
  {
    OrderID: 10248,
    CustomerID: "VINET",
    EmployeeID: 5,
    OrderDate: new Date(8364186e5),
    ShipName: "Vins et alcools Chevalier",
    ShipCity: "Reims",
    ShipAddress: "59 rue de l Abbaye",
    ShipRegion: "CJ",
    ShipPostalCode: "51100",
    ShipCountry: "France",
    Freight: 32.38,
    Verified: !0,
  },
  {
    OrderID: 10249,
    CustomerID: "TOMSP",
    EmployeeID: 6,
    OrderDate: new Date(836505e6),
    ShipName: "Toms Spezialitäten",
    ShipCity: "Münster",
    ShipAddress: "Luisenstr. 48",
    ShipRegion: "CJ",
    ShipPostalCode: "44087",
    ShipCountry: "Germany",
    Freight: 11.61,
    Verified: !1,
  },
  {
    OrderID: 10250,
    CustomerID: "HANAR",
    EmployeeID: 4,
    OrderDate: new Date(8367642e5),
    ShipName: "Hanari Carnes",
    ShipCity: "Rio de Janeiro",
    ShipAddress: "Rua do Paço, 67",
    ShipRegion: "RJ",
    ShipPostalCode: "05454-876",
    ShipCountry: "Brazil",
    Freight: 65.83,
    Verified: !0,
  },
  {
    OrderID: 10251,
    CustomerID: "VICTE",
    EmployeeID: 3,
    OrderDate: new Date(8367642e5),
    ShipName: "Victuailles en stock",
    ShipCity: "Lyon",
    ShipAddress: "2, rue du Commerce",
    ShipRegion: "CJ",
    ShipPostalCode: "69004",
    ShipCountry: "France",
    Freight: 41.34,
    Verified: !0,
  },
  {
    OrderID: 10252,
    CustomerID: "SUPRD",
    EmployeeID: 4,
    OrderDate: new Date(8368506e5),
    ShipName: "Suprêmes délices",
    ShipCity: "Charleroi",
    ShipAddress: "Boulevard Tirou, 255",
    ShipRegion: "CJ",
    ShipPostalCode: "B-6000",
    ShipCountry: "Belgium",
    Freight: 51.3,
    Verified: !0,
  },
  {
    OrderID: 10253,
    CustomerID: "HANAR",
    EmployeeID: 3,
    OrderDate: new Date(836937e6),
    ShipName: "Hanari Carnes",
    ShipCity: "Rio de Janeiro",
    ShipAddress: "Rua do Paço, 67",
    ShipRegion: "RJ",
    ShipPostalCode: "05454-876",
    ShipCountry: "Brazil",
    Freight: 58.17,
    Verified: !0,
  },
  {
    OrderID: 10254,
    CustomerID: "CHOPS",
    EmployeeID: 5,
    OrderDate: new Date(8370234e5),
    ShipName: "Chop-suey Chinese",
    ShipCity: "Bern",
    ShipAddress: "Hauptstr. 31",
    ShipRegion: "CJ",
    ShipPostalCode: "3012",
    ShipCountry: "Switzerland",
    Freight: 22.98,
    Verified: !1,
  },
  {
    OrderID: 10255,
    CustomerID: "RICSU",
    EmployeeID: 9,
    OrderDate: new Date(8371098e5),
    ShipName: "Richter Supermarkt",
    ShipCity: "Genève",
    ShipAddress: "Starenweg 5",
    ShipRegion: "CJ",
    ShipPostalCode: "1204",
    ShipCountry: "Switzerland",
    Freight: 148.33,
    Verified: !0,
  },
  {
    OrderID: 10256,
    CustomerID: "WELLI",
    EmployeeID: 3,
    OrderDate: new Date(837369e6),
    ShipName: "Wellington Importadora",
    ShipCity: "Resende",
    ShipAddress: "Rua do Mercado, 12",
    ShipRegion: "SP",
    ShipPostalCode: "08737-363",
    ShipCountry: "Brazil",
    Freight: 13.97,
    Verified: !1,
  },
  {
    OrderID: 10257,
    CustomerID: "HILAA",
    EmployeeID: 4,
    OrderDate: new Date(8374554e5),
    ShipName: "HILARION-Abastos",
    ShipCity: "San Cristóbal",
    ShipAddress: "Carrera 22 con Ave. Carlos Soublette #8-35",
    ShipRegion: "Táchira",
    ShipPostalCode: "5022",
    ShipCountry: "Venezuela",
    Freight: 81.91,
    Verified: !0,
  },
  {
    OrderID: 10258,
    CustomerID: "ERNSH",
    EmployeeID: 1,
    OrderDate: new Date(8375418e5),
    ShipName: "Ernst Handel",
    ShipCity: "Graz",
    ShipAddress: "Kirchgasse 6",
    ShipRegion: "CJ",
    ShipPostalCode: "8010",
    ShipCountry: "Austria",
    Freight: 140.51,
    Verified: !0,
  },
  {
    OrderID: 10259,
    CustomerID: "CENTC",
    EmployeeID: 4,
    OrderDate: new Date(8376282e5),
    ShipName: "Centro comercial Moctezuma",
    ShipCity: "México D.F.",
    ShipAddress: "Sierras de Granada 9993",
    ShipRegion: "CJ",
    ShipPostalCode: "05022",
    ShipCountry: "Mexico",
    Freight: 3.25,
    Verified: !1,
  },
  {
    OrderID: 10260,
    CustomerID: "OTTIK",
    EmployeeID: 4,
    OrderDate: new Date(8377146e5),
    ShipName: "Ottilies Käseladen",
    ShipCity: "Köln",
    ShipAddress: "Mehrheimerstr. 369",
    ShipRegion: "CJ",
    ShipPostalCode: "50739",
    ShipCountry: "Germany",
    Freight: 55.09,
    Verified: !0,
  },
  {
    OrderID: 10261,
    CustomerID: "QUEDE",
    EmployeeID: 4,
    OrderDate: new Date(8377146e5),
    ShipName: "Que Delícia",
    ShipCity: "Rio de Janeiro",
    ShipAddress: "Rua da Panificadora, 12",
    ShipRegion: "RJ",
    ShipPostalCode: "02389-673",
    ShipCountry: "Brazil",
    Freight: 3.05,
    Verified: !1,
  },
  {
    OrderID: 10262,
    CustomerID: "RATTC",
    EmployeeID: 8,
    OrderDate: new Date(8379738e5),
    ShipName: "Rattlesnake Canyon Grocery",
    ShipCity: "Albuquerque",
    ShipAddress: "2817 Milton Dr.",
    ShipRegion: "NM",
    ShipPostalCode: "87110",
    ShipCountry: "USA",
    Freight: 48.29,
    Verified: !0,
  },
];

export const MultiChartData = [
  {
    month: 1,
    electricPower: 50,
  },
  {
    month: 2,
    electricPower: 200,
  },
  {
    month: 3,
    electricPower: 300,
  },
  {
    month: 4,
    electricPower: 250,
  },
  {
    month: 5,
    electricPower: 150,
  },
  {
    month: 6,
    electricPower: 100,
  },
  {
    month: 7,
    electricPower: 300,
  },
  {
    month: 8,
    electricPower: 300,
  },
  {
    month: 9,
    electricPower: 100,
  },
  {
    month: 10,
    electricPower: 150,
  },
  {
    month: 11,
    electricPower: 100,
  },
  {
    month: 12,
    electricPower: 50,
  },
];

export const MultiChartData2 = [
  {
    month: 1,
    electricPower: 50,
  },
  {
    month: 2,
    electricPower: 150,
  },
  {
    month: 3,
    electricPower: 300,
  },
  {
    month: 4,
    electricPower: 200,
  },
  {
    month: 5,
    electricPower: 100,
  },
  {
    month: 6,
    electricPower: 100,
  },
  {
    month: 7,
    electricPower: 300,
  },
  {
    month: 8,
    electricPower: 120,
  },
  {
    month: 9,
    electricPower: 100,
  },
  {
    month: 10,
    electricPower: 50,
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

export const LinePrimaryYAxis = {
  labelFormat: "{value}%",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: "checkbox", width: "50" },
  {
    headerText: "Name",
    width: "150",
    template: customerGridImage,
    textAlign: "Center",
  },
  {
    field: "ProjectName",
    headerText: "Project Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Status",
    headerText: "Status",
    width: "130",
    format: "yMd",
    textAlign: "Center",
    template: customerGridStatus,
  },
  {
    field: "Weeks",
    headerText: "Weeks",
    width: "100",
    format: "C2",
    textAlign: "Center",
  },
  {
    field: "Budget",
    headerText: "Budget",
    width: "100",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "Location",
    headerText: "Location",
    width: "150",
    textAlign: "Center",
  },

  {
    field: "CustomerID",
    headerText: "Customer ID",
    width: "120",
    textAlign: "Center",
    isPrimaryKey: true,
  },
];

export const employeesGrid = [
  {
    headerText: "Employee",
    width: "150",
    template: gridEmployeeProfile,
    textAlign: "Center",
  },
  { field: "Name", headerText: "", width: "0", textAlign: "Center" },
  {
    field: "Title",
    headerText: "Designation",
    width: "170",
    textAlign: "Center",
  },
  {
    headerText: "Country",
    width: "120",
    textAlign: "Center",
    template: gridEmployeeCountry,
  },

  {
    field: "HireDate",
    headerText: "Hire Date",
    width: "135",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "ReportsTo",
    headerText: "Reports To",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "EmployeeID",
    headerText: "Employee ID",
    width: "125",
    textAlign: "Center",
  },
];

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

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: "+$350",
    title: "Paypal Transfer",
    desc: "Money Added",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "green-600",
  },
  {
    icon: <BsShield />,
    amount: "-$560",
    desc: "Bill Payment",
    title: "Wallet",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
  {
    icon: <FiCreditCard />,
    amount: "+$350",
    title: "Credit Card",
    desc: "Money reversed",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",

    pcColor: "green-600",
  },
  {
    icon: <TiTick />,
    amount: "+$350",
    title: "Bank Transfer",
    desc: "Money Added",

    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green-600",
  },
  {
    icon: <BsCurrencyDollar />,
    amount: "-$50",
    percentage: "+38%",
    title: "Refund",
    desc: "Payment Sent",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: "-$560",
    title: "Top Sales",
    desc: "Johnathan Doe",
    iconBg: "#FB9678",
    pcColor: "red-600",
  },
  {
    icon: <FiStar />,
    amount: "-$560",
    title: "Best Seller",
    desc: "MaterialPro Admin",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "red-600",
  },
  {
    icon: <BsChatLeft />,
    amount: "+$560",
    title: "Most Commented",
    desc: "Ample Admin",
    iconBg: "#00C292",
    pcColor: "green-600",
  },
];

export const productsPerformance = [
  {
    title: "Is it good butterscotch ice-cream?",
    desc: "Ice-Cream, Milk, Powder",
    rating: "Good",
    itemSold: "65%",
    earningAmount: "$546,000",
  },
  {
    title: "Supreme fresh tomato available",
    desc: "Market, Mall",
    rating: "Excellent",
    itemSold: "98%",
    earningAmount: "$780,000",
  },
  {
    title: "Red color candy from Gucci",
    desc: "Chocolate, Yummy",
    rating: "Average",
    itemSold: "46%",
    earningAmount: "$457,000",
  },
];

export const medicalproBranding = {
  data: [
    {
      title: "Due Date",
      desc: "Oct 23, 2021",
    },
    {
      title: "Budget",
      desc: "$98,500",
    },
    {
      title: "Expense",
      desc: "$63,000",
    },
  ],
  teams: [
    {
      name: "Bootstrap",
      color: "orange",
    },
    {
      name: "Angular",
      color: "#FB9678",
    },
  ],
};

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

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const ordersGrid = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderItems",
    headerText: "Item",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "CustomerName",
    headerText: "Customer Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "TotalAmount",
    headerText: "Total Amount",
    format: "C2",
    textAlign: "Center",
    editType: "numericedit",
    width: "150",
  },
  {
    headerText: "Status",
    template: gridOrderStatus,
    field: "OrderItems",
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderID",
    headerText: "Order ID",
    width: "120",
    textAlign: "Center",
  },

  {
    field: "Location",
    headerText: "Location",
    width: "150",
    textAlign: "Center",
  },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1002,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1003,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
  },
  {
    EmployeeID: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
  },
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
  },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
  },
  {
    OrderID: 345653,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
  },
  {
    OrderID: 390457,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: "Explosion of Betelgeuse Star",
    Location: "Space Center USA",
    StartTime: "2021-01-10T04:00:00.000Z",
    EndTime: "2021-01-10T05:30:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 2,
    Subject: "Thule Air Crash Report",
    Location: "Newyork City",
    StartTime: "2021-01-11T06:30:00.000Z",
    EndTime: "2021-01-11T08:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 3,
    Subject: "Blue Moon Eclipse",
    Location: "Space Center USA",
    StartTime: "2021-01-12T04:00:00.000Z",
    EndTime: "2021-01-12T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 4,
    Subject: "Meteor Showers in 2021",
    Location: "Space Center USA",
    StartTime: "2021-01-13T07:30:00.000Z",
    EndTime: "2021-01-13T09:00:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 5,
    Subject: "Milky Way as Melting pot",
    Location: "Space Center USA",
    StartTime: "2021-01-14T06:30:00.000Z",
    EndTime: "2021-01-14T08:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 6,
    Subject: "Mysteries of Bermuda Triangle",
    Location: "Bermuda",
    StartTime: "2021-01-14T04:00:00.000Z",
    EndTime: "2021-01-14T05:30:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 7,
    Subject: "Glaciers and Snowflakes",
    Location: "Himalayas",
    StartTime: "2021-01-15T05:30:00.000Z",
    EndTime: "2021-01-15T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 8,
    Subject: "Life on Mars",
    Location: "Space Center USA",
    StartTime: "2021-01-16T03:30:00.000Z",
    EndTime: "2021-01-16T04:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 9,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-18T05:30:00.000Z",
    EndTime: "2021-01-18T07:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 10,
    Subject: "Wildlife Galleries",
    Location: "Africa",
    StartTime: "2021-01-20T05:30:00.000Z",
    EndTime: "2021-01-20T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 11,
    Subject: "Best Photography 2021",
    Location: "London",
    StartTime: "2021-01-21T04:00:00.000Z",
    EndTime: "2021-01-21T05:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 12,
    Subject: "Smarter Puppies",
    Location: "Sweden",
    StartTime: "2021-01-08T04:30:00.000Z",
    EndTime: "2021-01-08T06:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 13,
    Subject: "Myths of Andromeda Galaxy",
    Location: "Space Center USA",
    StartTime: "2021-01-06T05:00:00.000Z",
    EndTime: "2021-01-06T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 14,
    Subject: "Aliens vs Humans",
    Location: "Research Center of USA",
    StartTime: "2021-01-05T04:30:00.000Z",
    EndTime: "2021-01-05T06:00:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 15,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-19T04:00:00.000Z",
    EndTime: "2021-01-19T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 16,
    Subject: "Sky Gazers",
    Location: "Alaska",
    StartTime: "2021-01-22T05:30:00.000Z",
    EndTime: "2021-01-22T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 17,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-11T00:00:00.000Z",
    EndTime: "2021-01-11T02:00:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 18,
    Subject: "Space Galaxies and Planets",
    Location: "Space Center USA",
    StartTime: "2021-01-11T11:30:00.000Z",
    EndTime: "2021-01-11T13:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 19,
    Subject: "Lifecycle of Bumblebee",
    Location: "San Fransisco",
    StartTime: "2021-01-14T00:30:00.000Z",
    EndTime: "2021-01-14T02:00:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 20,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-14T10:30:00.000Z",
    EndTime: "2021-01-14T12:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 21,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-10T08:30:00.000Z",
    EndTime: "2021-01-10T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 22,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-12T09:00:00.000Z",
    EndTime: "2021-01-12T10:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 23,
    Subject: "Sky Gazers",
    Location: "Greenland",
    StartTime: "2021-01-15T09:00:00.000Z",
    EndTime: "2021-01-15T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 24,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-16T07:00:00.000Z",
    EndTime: "2021-01-16T09:00:00.000Z",
    CategoryColor: "#7fa900",
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: "1",
    Time: "March 2021",
  },
  {
    Id: "2",
    Time: "April 2021",
  },
  {
    Id: "3",
    Time: "May 2021",
  },
];
export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: "x",
    yName: "y",
    name: "Germany",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "England",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "India",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];

export const pieChartData = [
  { x: "Labour", y: 18, text: "18%" },
  { x: "Legal", y: 8, text: "8%" },
  { x: "Production", y: 15, text: "15%" },
  { x: "License", y: 11, text: "11%" },
  { x: "Facilities", y: 18, text: "18%" },
  { x: "Taxes", y: 14, text: "14%" },
  { x: "Insurance", y: 16, text: "16%" },
];

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];

export const stackedChartData = [
  [
    { x: "Jan", y: 111.1 },
    { x: "Feb", y: 127.3 },
    { x: "Mar", y: 143.4 },
    { x: "Apr", y: 159.9 },
    { x: "May", y: 159.9 },
    { x: "Jun", y: 159.9 },
    { x: "July", y: 159.9 },
  ],
  [
    { x: "Jan", y: 111.1 },
    { x: "Feb", y: 127.3 },
    { x: "Mar", y: 143.4 },
    { x: "Apr", y: 159.9 },
    { x: "May", y: 159.9 },
    { x: "Jun", y: 159.9 },
    { x: "July", y: 159.9 },
  ],
];
// 라인영역차트 (전력량)
export let electricdata = [
  { x: 2001, y: 490 },
  { x: 2002, y: 470 },
  { x: 2003, y: 500 },
  { x: 2004, y: 449 },
  { x: 2005, y: 470 },
  { x: 2006, y: 437 },
  { x: 2007, y: 458 },
  { x: 2008, y: 500 },
  { x: 2009, y: 473 },
  { x: 2010, y: 520 },
  { x: 2011, y: 520 },
  { x: 2012, y: 416 },
];
export let electricdata1 = [
  { x: 2001, y: 240 },
  { x: 2002, y: 370 },
  { x: 2003, y: 200 },
  { x: 2004, y: 229 },
  { x: 2005, y: 210 },
  { x: 2006, y: 337 },
  { x: 2007, y: 258 },
  { x: 2008, y: 300 },
  { x: 2009, y: 173 },
  { x: 2010, y: 220 },
  { x: 2011, y: 220 },
  { x: 2012, y: 180 },
];

export const stackedCustomSeries = [
  {
    dataSource: stackedChartData[0],
    xName: "x",
    yName: "y",
    name: "Budget",
    type: "StackingColumn",
    background: "blue",
  },

  {
    dataSource: stackedChartData[1],
    xName: "x",
    yName: "y",
    name: "Expense",
    type: "StackingColumn",
    background: "red",
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: "Rotate45",
  valueType: "Category",
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}",
};

export const financialChartData = [
  {
    x: new Date("2012-04-02"),
    open: 85.9757,
    high: 90.6657,
    low: 85.7685,
    close: 90.5257,
    volume: 660187068,
  },
  {
    x: new Date("2012-04-09"),
    open: 89.4471,
    high: 92,
    low: 86.2157,
    close: 86.4614,
    volume: 912634864,
  },
  {
    x: new Date("2012-04-16"),
    open: 87.1514,
    high: 88.6071,
    low: 81.4885,
    close: 81.8543,
    volume: 1221746066,
  },
];

// 전력량 데이터용
export let data = [
  {
    OrderID: 10248,
    CustomerID: "VINET",
    EmployeeID: 5,
    OrderDate: new Date(8364186e5),
    ShipName: "Vins et alcools Chevalier",
    ShipCity: "Reims",
    ShipAddress: "59 rue de l Abbaye",
    ShipRegion: "CJ",
    ShipPostalCode: "51100",
    ShipCountry: "France",
    Freight: 32.38,
    Verified: !0,
  },
  {
    OrderID: 10249,
    CustomerID: "TOMSP",
    EmployeeID: 6,
    OrderDate: new Date(836505e6),
    ShipName: "Toms Spezialitäten",
    ShipCity: "Münster",
    ShipAddress: "Luisenstr. 48",
    ShipRegion: "CJ",
    ShipPostalCode: "44087",
    ShipCountry: "Germany",
    Freight: 11.61,
    Verified: !1,
  },
  {
    OrderID: 10250,
    CustomerID: "HANAR",
    EmployeeID: 4,
    OrderDate: new Date(8367642e5),
    ShipName: "Hanari Carnes",
    ShipCity: "Rio de Janeiro",
    ShipAddress: "Rua do Paço, 67",
    ShipRegion: "RJ",
    ShipPostalCode: "05454-876",
    ShipCountry: "Brazil",
    Freight: 65.83,
    Verified: !0,
  },
  {
    OrderID: 10251,
    CustomerID: "VICTE",
    EmployeeID: 3,
    OrderDate: new Date(8367642e5),
    ShipName: "Victuailles en stock",
    ShipCity: "Lyon",
    ShipAddress: "2, rue du Commerce",
    ShipRegion: "CJ",
    ShipPostalCode: "69004",
    ShipCountry: "France",
    Freight: 41.34,
    Verified: !0,
  },
  {
    OrderID: 10252,
    CustomerID: "SUPRD",
    EmployeeID: 4,
    OrderDate: new Date(8368506e5),
    ShipName: "Suprêmes délices",
    ShipCity: "Charleroi",
    ShipAddress: "Boulevard Tirou, 255",
    ShipRegion: "CJ",
    ShipPostalCode: "B-6000",
    ShipCountry: "Belgium",
    Freight: 51.3,
    Verified: !0,
  },
  {
    OrderID: 10253,
    CustomerID: "HANAR",
    EmployeeID: 3,
    OrderDate: new Date(836937e6),
    ShipName: "Hanari Carnes",
    ShipCity: "Rio de Janeiro",
    ShipAddress: "Rua do Paço, 67",
    ShipRegion: "RJ",
    ShipPostalCode: "05454-876",
    ShipCountry: "Brazil",
    Freight: 58.17,
    Verified: !0,
  },
  {
    OrderID: 10254,
    CustomerID: "CHOPS",
    EmployeeID: 5,
    OrderDate: new Date(8370234e5),
    ShipName: "Chop-suey Chinese",
    ShipCity: "Bern",
    ShipAddress: "Hauptstr. 31",
    ShipRegion: "CJ",
    ShipPostalCode: "3012",
    ShipCountry: "Switzerland",
    Freight: 22.98,
    Verified: !1,
  },
  {
    OrderID: 10255,
    CustomerID: "RICSU",
    EmployeeID: 9,
    OrderDate: new Date(8371098e5),
    ShipName: "Richter Supermarkt",
    ShipCity: "Genève",
    ShipAddress: "Starenweg 5",
    ShipRegion: "CJ",
    ShipPostalCode: "1204",
    ShipCountry: "Switzerland",
    Freight: 148.33,
    Verified: !0,
  },
  {
    OrderID: 10256,
    CustomerID: "WELLI",
    EmployeeID: 3,
    OrderDate: new Date(837369e6),
    ShipName: "Wellington Importadora",
    ShipCity: "Resende",
    ShipAddress: "Rua do Mercado, 12",
    ShipRegion: "SP",
    ShipPostalCode: "08737-363",
    ShipCountry: "Brazil",
    Freight: 13.97,
    Verified: !1,
  },
  {
    OrderID: 10257,
    CustomerID: "HILAA",
    EmployeeID: 4,
    OrderDate: new Date(8374554e5),
    ShipName: "HILARION-Abastos",
    ShipCity: "San Cristóbal",
    ShipAddress: "Carrera 22 con Ave. Carlos Soublette #8-35",
    ShipRegion: "Táchira",
    ShipPostalCode: "5022",
    ShipCountry: "Venezuela",
    Freight: 81.91,
    Verified: !0,
  },
  {
    OrderID: 10258,
    CustomerID: "ERNSH",
    EmployeeID: 1,
    OrderDate: new Date(8375418e5),
    ShipName: "Ernst Handel",
    ShipCity: "Graz",
    ShipAddress: "Kirchgasse 6",
    ShipRegion: "CJ",
    ShipPostalCode: "8010",
    ShipCountry: "Austria",
    Freight: 140.51,
    Verified: !0,
  },
  {
    OrderID: 10259,
    CustomerID: "CENTC",
    EmployeeID: 4,
    OrderDate: new Date(8376282e5),
    ShipName: "Centro comercial Moctezuma",
    ShipCity: "México D.F.",
    ShipAddress: "Sierras de Granada 9993",
    ShipRegion: "CJ",
    ShipPostalCode: "05022",
    ShipCountry: "Mexico",
    Freight: 3.25,
    Verified: !1,
  },
  {
    OrderID: 10260,
    CustomerID: "OTTIK",
    EmployeeID: 4,
    OrderDate: new Date(8377146e5),
    ShipName: "Ottilies Käseladen",
    ShipCity: "Köln",
    ShipAddress: "Mehrheimerstr. 369",
    ShipRegion: "CJ",
    ShipPostalCode: "50739",
    ShipCountry: "Germany",
    Freight: 55.09,
    Verified: !0,
  },
  {
    OrderID: 10261,
    CustomerID: "QUEDE",
    EmployeeID: 4,
    OrderDate: new Date(8377146e5),
    ShipName: "Que Delícia",
    ShipCity: "Rio de Janeiro",
    ShipAddress: "Rua da Panificadora, 12",
    ShipRegion: "RJ",
    ShipPostalCode: "02389-673",
    ShipCountry: "Brazil",
    Freight: 3.05,
    Verified: !1,
  },
  {
    OrderID: 10262,
    CustomerID: "RATTC",
    EmployeeID: 8,
    OrderDate: new Date(8379738e5),
    ShipName: "Rattlesnake Canyon Grocery",
    ShipCity: "Albuquerque",
    ShipAddress: "2817 Milton Dr.",
    ShipRegion: "NM",
    ShipPostalCode: "87110",
    ShipCountry: "USA",
    Freight: 48.29,
    Verified: !0,
  },
];
