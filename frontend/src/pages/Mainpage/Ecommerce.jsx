import React from "react";
import { ElectricPr, GongjoPr } from "../../components";
import { useStateContext } from "../../context/UserContext";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className=" h-80 max-w-full m-auto md:m-15">
      <ElectricPr />
      <GongjoPr />
    </div>
  );
};

export default Ecommerce;
