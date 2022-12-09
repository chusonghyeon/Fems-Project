import React from "react";
import welcomebg from "../../img/bg-welcome.jpg";
import BIG from "../../img/BIGLOGO.png";

const Welcompage = () => {
  return (
    <div className="welcome relative w-full h-full">
      <div className="absolute h-72 w-72 top-1/4 right-2/4">
        <img src={BIG} alt="로고" />
        <span>FEMS 서비스</span>
      </div>
      <div className="w-full">
        <img className="w-full h-88vh" src={welcomebg} alt="배경화면" />
      </div>
    </div>
  );
};

export default Welcompage;
