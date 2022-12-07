import React from "react";
import { ElectricGrid, Daydate } from "../../components";
import Header from "../../components/common/Header";
import Linearea from "../../components/Charts/HourElecarea";
const Electricamount = () => {
  // 클릭시 공조기 ID와 시간정보 출력
  // const electricHandleSubmit = async (e) => {
  //   e.preventDefault();
  //   const {
  //     ahu_id: { value: SelectBox },
  //     runDate: { value: Hourdate },
  //   } = e.target;

  //   const ParseHourDate = Hourdate.replaceAll("/", "");

  //   await setStartDate({
  //     ahu_id: SelectBox,
  //     runDate: ParseHourDate,
  //   });
  //   // 첫번째 {} -> {ahu_id: 'A00', runDate: '20220901'}
  //   console.log(startDate);
  // };

  return (
    <div className="m-4 md:m-2 mt-24 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="전력량" title="일별 전력량" />
      <form>
        <div
          className="flex mb-10
        "
        >
          <Daydate />
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
