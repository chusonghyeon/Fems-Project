import React from "react";
import { GongjoInfoData } from "../../components";
import Header from "../../components/common/Header";

const GongjoInfo = () => {
  return (
    <>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
        <Header category="메인" title="공조기 정보" />
        <GongjoInfoData />
      </div>
    </>
  );
};

export default GongjoInfo;
