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
import { getValue } from "@syncfusion/ej2-base";
import { useStateContext } from "../../context/UserContext";

const TempGrid = () => {
  const { tempDt } = useStateContext();

  function StringToDateFormatter(field, data) {
    let date = getValue(field, data);

    let year = date.slice(0, 4);
    let month = date.slice(4, 6);
    let day = date.slice(6, 8);
    let hour = date.slice(8, 10);
    let minute = date.slice(10, 12);

    // return typeof hour;
    if (hour !== "") {
      return `${year}-${month}-${day} ${hour}:${minute}`;
    }
    if (day !== "") {
      return `${year}-${month}-${day}`;
    }
    return `${year}-${month}`;
  }

  const pageSettings = { pageSize: 10 };
  return (
    <GridComponent dataSource={tempDt} pageSettings={pageSettings} allowPaging>
      <ColumnsDirective>
        <ColumnDirective
          headerText="실행시간"
          field="rundate"
          width="100"
          textAlign="Right"
          valueAccessor={StringToDateFormatter}
        />
        <ColumnDirective
          headerText="설정온도"
          field="ahu_set_temp"
          width="100"
          textAlign="Center"
          format="C2"
        />
        <ColumnDirective
          headerText="리턴온도"
          field="ahu_ret_temp"
          width="100"
          textAlign="Center"
          format="C2"
        />
        <ColumnDirective
          headerText="공급온도"
          field="ahu_sup_temp"
          width="100"
          textAlign="Center"
          format="C2"
        />
        <ColumnDirective
          headerText="설비 외부온도"
          field="ahu_out_temp"
          width="100"
          textAlign="Center"
          format="C2"
        />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Group]} />
    </GridComponent>
  );
};

export default TempGrid;
