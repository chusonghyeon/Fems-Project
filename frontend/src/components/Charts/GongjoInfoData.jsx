import React, { useEffect, useState } from "react";
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

import { customersData, customersGrid } from "../../data/dummy";
import axios from "axios";

const Customers = () => {
  const [info, setInfo] = useState("");
  const SERVER_URL = "Get_AHU_Info";

  useEffect(() => {
    const fetchData = async (idDate) => {
      console.log(idDate);

      const response = await axios.get(SERVER_URL, {
        params: {
          FAC_NAME: `${idDate.ahu_id}`,
        },
      });
      setInfo(response.data);
      fetchData("여기에AHU-01 부터 10인가 까지 돌려넣기");
    };
  }, [setInfo]);

  const pageSettings = { pageSize: 10 };
  return (
    <GridComponent
      id="gridcomp"
      dataSource={customersData}
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
