import React, { useState } from "react";
import { ElectricGrid, Hourdate } from "../../components";
import Header from "../../components/common/Header";
import Linearea from "../../components/Charts/Linearea";
const Electricamount = () => {
  // // 시간별 전력량 공조기 ID와 날짜 (삭제 예정)
  // const [startDate, setStartDate] = useState({});
  // // const { setTempDt } = useStateContext();
  // const [tempDt, setTempDt] = useState([]);

  // // 클릭시 공조기 ID와 시간정보 출력
  // const electricHandleSubmit = async (e) => {
  //   e.preventDefault();
  //   const {
  //     ahu_id: { value: SelectBox },
  //     runDate: { value: Daydate },
  //   } = e.target;

  //   console.log(e.target);

  //   const ParseDayDate = Daydate.replaceAll("/", "");

  //   await setStartDate({
  //     ahu_id: SelectBox,
  //     runDate: ParseDayDate,
  //   });
  //   // 첫번째 {} -> {ahu_id: 'A00', runDate: '20220901'}
  //   console.log(startDate);
  // };

  // // set 부분을 useEffect로
  // useEffect(() => {
  //   const fetchData = async (idDate) => {
  //     // 2번째 {} -> {ahu_id: 'A00', runDate: '20220901'}
  //     console.log(idDate);

  //     // 3번째 undefined -> A00
  //     console.log(idDate.ahu_id);
  //     const response = await axios.get(SERVER_URL, {
  //       params: {
  //         ahu_id: `${idDate.ahu_id}`,
  //         runDate: `${idDate.runDate}`,
  //       },
  //     });
  //     setTempDt(response.data);
  //     // [] -> 받아와짐
  //     console.log(response.data);
  //   };

  //   fetchData(startDate);
  // }, [startDate, setTempDt]);

  return (
    <div className="m-4 md:m-2 mt-24 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="전력량" title="시간별 전력량" />
      <form>
        {/* <form onSubmit={electricHandleSubmit}> */}
        <div className="flex mb-10">
          <Hourdate />
          <button
            type="submit"
            className="pointer w-32 h-auto text-white bg-blue-500 rounded-md"
          >
            검색
          </button>
        </div>
      </form>
      <Linearea />
      <ElectricGrid />
    </div>
  );
};

export default Electricamount;
