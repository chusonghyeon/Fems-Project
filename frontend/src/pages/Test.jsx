import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useStateContext } from "../context/UserContext";
import { Toggleheader } from "../components";

const Test = () => {
  const { StartDate } = useStateContext();

  const [tempDt, setTempDt] = useState([]);

  const SERVER_URL = "/Get_AHU_temp_Hourly_Data";

  // 첫 실행 시 보여주는 데이터
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(SERVER_URL, {
        params: {
          ahu_id: `${StartDate.ahu_id}`,
          runDate: `${StartDate.runDate}`,
        },
      });
      setTempDt(response.data);
      console.log(StartDate.ahu_id);
    };

    fetchData();
  }, [StartDate]);

  // 데이터 불러오기

  // 클릭 시 데이터 불러오기
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // const ahu_id = e.target.ahu_id.value;
    // const runDate = e.target.runDate.value;
    const response = await axios({
      url: SERVER_URL,
      method: "GET",
      params: {
        ahu_id: `${StartDate.ahu_id}`,
        runDate: `${StartDate.runDate}`,
      },
    });
    setTempDt(response.data);
  };

  //   fetchData();
  return (
    <div className="Test">
      <Toggleheader />

      <h1>ToDo LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="inv_id" />
        <br />
        <input name="runDate" />
        <br />
        <input type="submit" value="추가" />
      </form>

      {tempDt.map((todo) => (
        <div key={todo.rundate} style={{ display: "flex" }}>
          <div>
            <p>
              공조기 ID : {todo.ahu_id}
              <br />
              실행시간 : {todo.rundate}
              <br />
              설정온도 : {todo.ahu_set_temp}
              <br />
              리턴온도 : {todo.ahu_ret_temp}
              <br />
              공급온도 : {todo.ahu_sup_temp}
              <br />
              설비 외부온도 : {todo.ahu_out_temp}
            </p>
            <p>{todo.inv_kWh}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Test;
