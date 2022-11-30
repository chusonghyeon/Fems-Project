import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [tempDt, setTempDt] = useState([]);
  const SERVER_URL = "/Get_AHU_KWh_Hourly_Data";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL, {
      params: {
        inv_id: "I00",
        runDate: "20210210",
        endDate: "20210210",
      },
    });
    setTempDt(response.data);
    // console.log(tempDt);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const inv_id = e.target.inv_id.value;
    const runDate = e.target.runDate.value;
    const endDate = e.target.endDate.value;
    await axios({
      url: SERVER_URL,
      method: "GET",
      data: {
        inv_id,
        runDate,
        endDate,
      },
    });
  };
  fetchData();

  return (
    <div className="Test">
      <h1>ToDo LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="inv_id" />
        <br />
        <input name="runDate" />
        <br />
        <input name="endDate" />
        <br />
        <input type="submit" value="추가" />
      </form>
      {tempDt.map((todo) => (
        <div key={todo.inv_id} style={{ display: "flex" }}>
          <div>{todo.inv_id}</div>
          <div>{todo.runDate}</div>
        </div>
      ))}
    </div>
  );
};

export default Test;
