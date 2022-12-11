import React from "react";
import { NavLink } from "react-router-dom";
import welcomebg from "../../img/bg-welcome.jpg";
import BIG from "../../img/BIGLOGO.png";

const Welcompage = () => {
  return (
    <div className="welcome relative w-full h-full z-0">
      <div className="w-full flex justify-center">
        <div className="absolute h-64 w-full top-3/4 flex items-center justify-around mt-10 ">
          <div
            className="button bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-200 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
    transform
    flex text-center text-lg w-44 h-44
  "
          >
            <NavLink to={"/전력 예측"} key={"welcome"}>
              <img
                className="transition-all bg-wh rounded-xl invert brightness-0"
                src={BIG}
                priority="true"
                alt="로고"
              />
              <span className="text-white m-0 p-0 absolute bottom-2 left-12 text-2xl">
                START
              </span>
            </NavLink>
          </div>
          <div className="border-2 border-solid border-slate-800 w-2/3 h-full flex flex-col">
            <div className="text-center">공지사항</div>
            <div>
              <table className="w-full h-full">
                <thead>
                  <tr>
                    <th>메인</th>
                    <th>서브</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute w-full h-88vh -z-20 rounded-3xl"
        src={welcomebg}
        alt="배경화면"
      />
    </div>
  );
};

export default Welcompage;
