import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Daydate = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex items-center">
      <span className="ml-10 w-28">조회일자</span>
      <DatePicker
        dateFormat="yyyy/MM"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        closeOnScroll={true}
        placeholderText="날짜를 선택 해주세요"
        className="text-xl w-44 border-2 rounded-md border-solid px-5 border-slate-300"
        showMonthYearPicker
      />
    </div>
  );
};

export default Daydate;
