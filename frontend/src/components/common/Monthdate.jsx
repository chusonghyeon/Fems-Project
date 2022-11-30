import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Monthdate = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        dateFormat="yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        closeOnScroll={true}
        placeholderText="날짜를 선택 해주세요"
        className="text-xl"
        showYearPicker
      />
    </div>
  );
};

export default Monthdate;
