"use client";

import { FC, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface RangeProps {
  min: number;
  max: number;
  step: number;
  label: string;
  value: number;
}

export const Range: FC<RangeProps> = ({ label, min, max, value, step }) => {
  const [displayValue, setDisplayValue] = useState<number | number[]>(value);

  const onChange = (value: number | number[]) => {
    setDisplayValue(value);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="text-white text-sm">{label}</div>
        <div className="text-[10px] text-white border-secondary bg-white/5 py-1 px-2 rounded-lg">
          {displayValue}
        </div>
      </div>
      <div className="mb-2" />
      <Slider
        min={min}
        max={max}
        step={step}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
};
