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
import { useStateContext } from "../../context/UserContext";
// import { TempData } from "../../data/dummy";

// const TempData = [
//   {
//     ahu_id: {},
//     rundate: {},
//     ahu_set_temp: {},
//     ahu_ret_temp: {},
//     ahu_sup_temp: {},
//     ahu_out_temp: {},
//   },
// ];

const TempGrid = () => {
  const { tempDt } = useStateContext();
  console.log(tempDt);

  // 값 받아오기 map

  const pageSettings = { pageSize: 10 };
  return (
    <GridComponent dataSource={tempDt} pageSettings={pageSettings} allowPaging>
      <ColumnsDirective>
        <ColumnDirective
          headerText="실행시간"
          field="rundate"
          width="100"
          textAlign="Right"
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
