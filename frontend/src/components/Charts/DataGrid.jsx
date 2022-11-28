import React from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  Inject,
  Page,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { data } from "../../data/dummy";
const DataGrid = () => {
  const pageSettings = { pageSize: 10 };
  return (
    <GridComponent dataSource={data} pageSettings={pageSettings} allowPaging>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" width="100" textAlign="center" />
        <ColumnDirective
          field="Freight"
          width="100"
          format="C2"
          textAlign="center"
        />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Group]} />
    </GridComponent>
  );
};

export default DataGrid;
