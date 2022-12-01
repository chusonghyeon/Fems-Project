import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Hourdate = () => {
  const [startDate, setStartDate] = useState(new Date());

  const SelectDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const stringDate = `${year}${month >= 10 ? month : "0" + month}${
      day >= 10 ? day : "0" + day
    }`;
    setStartDate(date);
    console.log(startDate);
    console.log(stringDate);
  };

  // Thu Dec 01 2022 15:54:41 GMT+0900 (한국 표준시) 형태

  return (
    <div>
      <DatePicker
        name="runDate"
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={SelectDate}
        min="2021-01-01"
        max="2022-10-31"
        closeOnScroll={true}
        placeholderText="날짜를 선택 해주세요"
        className="text-2xl w-44"
      />
    </div>
  );
};

export default Hourdate;
