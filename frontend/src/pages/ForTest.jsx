import axios from "axios";
import React, { useState } from "react";
import { Toggleheader } from "../components";
import { useStateContext } from "../context/UserContext";

const ForTest = () => {
  const SERVER_URL = "/Get_AHU_temp_Hourly_Data";
  // 받아온 값
  const [tempDt, setTempDt] = useState([]);
  // 검색 (공조기 ID, 날짜)
  const { StartDate } = useStateContext();

  // 클릭 시 데이터 불러오기
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // 데이터 불러오기
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
  return (
    <div>
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

export default ForTest;
