import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Daydate = () => {
  const [startDate, setStartDate] = useState(new Date(2022, 8));

  const SelectDate = (date) => {
<<<<<<< HEAD
=======
    // const year = date.getFullYear();
    // const month = date.getMonth();
    // // const stringDate = `${year}${month >= 10 ? month : "0" + month}${
    // //   day >= 10 ? day : "0" + day
    // // }`;
    // console.log(year, month);
>>>>>>> 0fa275e6f942ef68236c5adfcc8f1707b4e626a9
    setStartDate(date);
    console.log(date);
  };

  // Thu Dec 01 2022 15:54:41 GMT+0900 (한국 표준시) 형태

  return (
    <div className="flex items-center">
      <span className="ml-10 w-28">조회일자</span>
      <DatePicker
        name="runDate"
        dateFormat="yyyy/MM"
        selected={startDate}
        onChange={SelectDate}
        minDate={new Date(2021, 1)}
        maxDate={new Date(2022, 9)}
        closeOnScroll={true}
        // placeholderText="날짜를 선택 해주세요"
        className="text-xl w-44 border-2 rounded-md border-solid px-5 border-slate-300"
        showMonthYearPicker
      />
    </div>
  );
};

export default Daydate;
