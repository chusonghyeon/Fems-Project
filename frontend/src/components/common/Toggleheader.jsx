import { React, useState } from "react";
import styled from "styled-components"; //install => npm i styled-components
import Hourdate from "./Hourdate";
// basic template https://github.com/toy-crane/make-select-box/blob/master/src/App.js

const OPTIONS = [
  {
    value: "AH01",
    name: "공조기01",
  },
  {
    value: "AH02",
    name: "공조기02",
  },
  {
    value: "AH03",
    name: "공조기03",
  },
  {
    value: "AH04",
    name: "공조기04",
  },
  {
    value: "AH05",
    name: "공조기05",
  },
  {
    value: "AH06",
    name: "공조기06",
  },
  {
    value: "AH07",
    name: "공조기07",
  },
  {
    value: "AH08",
    name: "공조기08",
  },
  {
    value: "AH09",
    name: "공조기09",
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
      <Select onChange={handleChange}>
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 14L16 6H4L10 14Z"
          fill="#1A1A1A"
        />
      </IconSVG>
    </SelectBoxWrapper>
  );
};
const handleSubmit = (e) => {
  e.preventDefault();
  let Datesub = e.target.value;
};

const Toggleheader = () => {
  const [StartDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="mb-2 md:m-10 mt-24 p-1 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <div
          className="flex h-9  justify-between items-center rounded-1g shadow-lg shadow-gray-300/50 ml-7 font-bold
        "
        >
          <SelectBox options={OPTIONS} defaultValue="공조기01"></SelectBox>
          <span className="">클린룸: 1F A존</span>
          <span className="">설치장소: B2F 기계실</span>
          <form onSubmit={handleSubmit} className="flex">
            <label className="mr-5 mt-1">조회일자</label>
            {/* <input
              className="border-2 border-slate-400 w-44 h-8 text-lg"
              type="date"
              min="2021-01-01"
              max="2022-10-20"
              onChange={(date) => setStartDate(date)}
            ></input> */}
            <Hourdate />
            <button
              type="submit"
              className="pointer ml-4 w-24 h-8 bg-blue-500 rounded-md"
            >
              검색
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Toggleheader;
