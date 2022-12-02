import { React, useState } from "react";
import styled from "styled-components"; //install => npm i styled-components
import { useStateContext } from "../../context/UserContext";
import Monthdate from "./Monthdate";
// basic template https://github.com/toy-crane/make-select-box/blob/master/src/App.js

const OPTIONS = [
  {
    value: "A00",
    name: "공조기00",
  },
  {
    value: "A01",
    name: "공조기01",
  },
  {
    value: "A02",
    name: "공조기02",
  },
  {
    value: "A03",
    name: "공조기03",
  },
  {
    value: "A04",
    name: "공조기04",
  },
  {
    value: "A05",
    name: "공조기05",
  },
  {
    value: "A06",
    name: "공조기06",
  },
  {
    value: "A07",
    name: "공조기07",
  },
  {
    value: "A08",
    name: "공조기08",
  },
  {
    value: "A09",
    name: "공조기09",
  },
  {
    value: "A10",
    name: "공조기10",
  },
];
const SelectBoxWrapper = styled.div`
  display: flex;
`;

export const Select = styled.select`
  margin: 0;
  width: 180px;
  font-size: 24px;
  max-width: 100%;
  display: block;
  font-weight: bold;
  padding: 2px 8px;
  outline: none;
  line-height: inherit;
  border-bottom: 1px solid gray;
  color: rgb(30, 108, 235);
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border-color: gray;
  }
`;

const IconSVG = styled.svg`
  align-self: center;
  width: 24px;
  height: 24px;
`;

const SelectBox = (props) => {
  const handleChange = (e) => {
    // event handler
    console.log(e.target.value);
  };

  return (
    <SelectBoxWrapper>
      <Select onChange={handleChange} name="ahu_id">
        {props.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={props.defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </Select>
      <IconSVG
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 14L16 6H4L10 14Z"
          fill="#1A1A1A"
        />
      </IconSVG>
    </SelectBoxWrapper>
  );
};
// const handleSubmit = (e) => {
//   e.preventDefault();
//   let Datesub = e.target.value;
// };

const Monthheader = () => {
  const { StartDate, setStartDate } = useStateContext();

  const electricHandleSubmit = (e) => {
    e.preventDefault();
    const {
      ahu_id: { value: SelectBox },
      runDate: { value: Hourdate },
    } = e.target;
    const ParseHourDate = Hourdate.replaceAll("/", "");

    setStartDate(
      JSON.stringify({
        ahu_id: SelectBox,
        runDate: ParseHourDate,
      })
    );
    console.log(StartDate, ParseHourDate);
  };

  return (
    <>
      <div className=" flex  md:m-5  custom:m-5 mt-24 p-1 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <form
          onSubmit={electricHandleSubmit}
          className="flex items-center justify-between rounded-lg w-full ml-2 font-bold"
        >
          <SelectBox options={OPTIONS} defaultValue="공조기01"></SelectBox>
          <span className="">클린룸: 1F A존</span>
          <span className="">설치장소: B2F 기계실</span>
          {/* <label className="pl-10">조회일자</label> */}
          <div className="flex">
            <Monthdate name="runDate" />
            <button
              type="submit"
              className="pointer w-32 h-auto text-white bg-blue-500 rounded-md"
            >
              검색
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Monthheader;
