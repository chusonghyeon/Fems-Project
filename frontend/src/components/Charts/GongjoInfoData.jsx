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

import { customersData, customersGrid } from "../../data/dummy";

const Customers = () => {
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
