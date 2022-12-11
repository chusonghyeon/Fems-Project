import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import "./Gongjoinfo.css";
import { customersGrid } from "../../data/dummy";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Customers = () => {
  const pageSettings = { pageSize: 10 };
  const SERVER_URL = "Get_AHU_Info";

  const [gongjoInfo, setGongjoInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(SERVER_URL);
      setGongjoInfo(response.data);
    };

    fetchData();
  }, []);

  return (
    <GridComponent
      id="grid"
      dataSource={gongjoInfo}
      // {/* allowPaging = 페이지 매김 */}
      allowPaging
      pageSettings={pageSettings}
      allowSorting
      toolbar={["Search"]}
      editSettings={{ allowEditing: false }}
      width="auto"
    >
      <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Sort, Toolbar, Edit, Filter]} />
    </GridComponent>
  );
};

export default Customers;
