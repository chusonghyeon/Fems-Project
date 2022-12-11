import React from "react";
import { NavLink } from "react-router-dom";
import welcomebg from "../../img/bg-welcome.jpg";
import BIG from "../../img/BIGLOGO.png";

const Welcompage = () => {
  return (
    <div className="welcome relative w-full h-full z-0">
      <div className="w-full flex justify-center">
        <span className="m-8 mb-16 text-3xl">
          Factory Energy Monitoring System
        </span>
        <div className="absolute h-44 w-44 top-3/4">
          <div
            className="button bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-200 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
    transform
  "
          >
            <NavLink to={"/전력 예측"} key={"welcome"}>
              <img
                className="transition-all bg-wh rounded-xl invert brightness-0"
                src={BIG}
                priority="true"
                alt="로고"
              />
            </NavLink>
            {/* <span class="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
              Active
            </span> */}
          </div>
        </div>
        <img
          className="absolute w-full h-88vh -z-20 rounded-3xl"
          src={welcomebg}
          alt="배경화면"
        />
      </div>
    </div>
  );
};

export default Welcompage;
