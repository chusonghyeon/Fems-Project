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
  Resize,
} from "@syncfusion/ej2-react-grids";
import { PowerData } from "../../data/dummy";

const DataGrid = () => {
  const pageSettings = { pageSize: 10 };
  return (
    <GridComponent
      dataSource={PowerData}
      pageSettings={pageSettings}
      allowPaging
    >
      <ColumnsDirective>
        <ColumnDirective field="OrderDate" width="100" textAlign="Right" />
        <ColumnDirective
          field="OrderID"
          width="100"
          textAlign="Center"
          format="C2"
        />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Group, Resize]} />
    </GridComponent>
  );
};

export default DataGrid;
