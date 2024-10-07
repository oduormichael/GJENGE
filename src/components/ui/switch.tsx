import { useState } from "react";
import * as React from "react";
import { ListIcon, GridIcon } from "@/assets/icons";

export const Switch = ({ onclick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
        <input
          type="checkbox"
          className="sr-only w-max"
          checked={isChecked}
          onChange={handleCheckboxChange}
          onClick={onclick}
        />
        <span
          className={`flex items-center rounded py-2 px-[18px] text-sm font-medium ${
            !isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
          }`}
        >
          <img src={GridIcon} alt="" className="w-6" />
          Grid
        </span>
        <span
          className={`flex items-center rounded py-2 px-[18px] text-sm font-medium w-max  ${
            isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
          }`}
        >
          <img src={ListIcon} alt="" className="w-6" />
          List
        </span>
      </label>
    </>
  );
};
