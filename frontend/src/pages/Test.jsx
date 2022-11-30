import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  function onChangeDateHandler(date) {
    console.log(date);
    setStartDate(date);
  }

  return (
    <div className="text-center">
      <DatePicker
        selected={startDate}
        onChange={onChangeDateHandler}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
    </div>
  );
};
export default DatePickerComponent;

// const Test = () => {
//   const [tempDt, setTempDt] = useState([]);
//   const SERVER_URL = "/Get_AHU_KWh_Hourly_Data";
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const response = await axios.get(SERVER_URL, {
//       params: {
//         inv_id: "I00",
//         runDate: "20210510",
//       },
//     });
//     setTempDt(response.data);
//   };
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     const inv_id = e.target.inv_id.value;
//     const runDate = e.target.runDate.value;
//     const response = await axios({
//       url: SERVER_URL,
//       method: "GET",
//       params: {
//         inv_id,
//         runDate,
//       },
//     });
//     setTempDt(response.data);
//   };
//   //   fetchData();
//   return (
//     <div className="Test">
//       <h1>ToDo LIST</h1>
//       <form onSubmit={onSubmitHandler}>
//         <input name="inv_id" />
//         <br />
//         <input name="runDate" />
//         <br />
//         <input type="submit" value="추가" />
//       </form>

//       {tempDt.map((todo) => (
//         <div key={todo.inv_id} style={{ display: "flex" }}>
//           <div>
//             <p>
//               {todo.inv_id} :{todo.rundate}
//             </p>
//             <p>{todo.inv_kWh}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Test;
