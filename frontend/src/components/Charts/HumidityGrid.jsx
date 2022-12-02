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
import { HourPowerData } from "../../data/dummy";

const HumidityGrid = () => {
  const pageSettings = { pageSize: 10 };
  return (
    <GridComponent
      dataSource={HourPowerData}
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
      <Inject services={[Page, Sort, Filter, Group]} />
    </GridComponent>
  );
};

export default HumidityGrid;
