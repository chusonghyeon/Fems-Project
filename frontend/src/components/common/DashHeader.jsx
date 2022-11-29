import React from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

const DashHeader = ({ category, title }) => {
  return (
    <div className="mb-10 w-full">
      <div className="text-gray-200">{category}</div>
      <div className="flex justify-between text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
        <div className="flex">
          <div className="w-20 pt-2.5 pr-1 text-14 flex items-center justify-center">
            조회일자:{" "}
          </div>
          <DateTimePickerComponent
            id="datetimepicker"
            floatLabelType="Auto"
            placeholder="Select a date and time"
            className="border-solid border-2 border-slate-400 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
