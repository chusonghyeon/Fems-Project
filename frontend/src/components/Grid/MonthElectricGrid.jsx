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
import { getValue } from "@syncfusion/ej2-base";

import { useStateContext } from "../../context/UserContext";
const MonthElectricGrid = () => {
  const { mElecDt } = useStateContext();

  function currencyFormatter(field, data) {
    return getValue(field, data) + " kWh";
  }
  function StringToDateFormatter(field, data) {
    let date = getValue(field, data);

    let year = date.slice(0, 4);
    let month = date.slice(4, 6);

    return `${year}-${month}`;
  }

  const pageSettings = { pageSize: 10 };
  return (
    <GridComponent dataSource={mElecDt} pageSettings={pageSettings} allowPaging>
      <ColumnsDirective>
        <ColumnDirective
          headerText="일자"
          field="rundate" //시간별전력량 backend Api name
          width="100"
          textAlign="Center"
          valueAccessor={StringToDateFormatter}
        />
        <ColumnDirective
          headerText="전력소비량"
          field="LpData"
          width="100"
          textAlign="Center"
          valueAccessor={currencyFormatter}
        />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Group, Resize]} />
    </GridComponent>
  );
};

export default MonthElectricGrid;
