import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Daydate = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        dateFormat="yyyy/MM"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        closeOnScroll={true}
        placeholderText="날짜를 선택 해주세요"
        className="text-2xl w-44"
        showMonthYearPicker
      />
    </div>
  );
};

export default Daydate;
