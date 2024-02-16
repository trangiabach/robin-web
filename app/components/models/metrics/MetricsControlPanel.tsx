"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Dropdown } from "../common/dropdown/Dropdown";
import { Dropzone } from "../common/dropzone/Dropzone";
import { datasetDropdownOptions, modelDropdownOptions } from "./consts";
import { ApiStatus as ApiStatusType } from "./types";
import { FaDatabase } from "react-icons/fa";
import { COLORS } from "@/colors";
import dayjs from "dayjs";
import { AiFillThunderbolt } from "react-icons/ai";
import { Range } from "../common/range/Range";
import { useMetrics } from "./MetricsProvider";

export const ApiStatus: FC<ApiStatusType> = ({ title }) => {
  return (
    <div className="border-secondary flex items-center gap-x-2 bg-white/5 px-2 py-1 rounded-md text-[10px] uppercase">
      <div className="w-[8px] h-[8px] bg-primary rounded-full" />
      {title}
    </div>
  );
};

const now = dayjs().format("HH:mm MM/DD/YYYY");

const delay = (timeout: number) => {
  return new Promise((res) => setTimeout(res, timeout));
};

export const MetricsControlPanel: FC<PropsWithChildren> = ({ children }) => {
  const [files, setFiles] = useState<File[]>([]);
  const { setIsEmptyData, setIsDataLoading, isEmptyData } = useMetrics();

  const onClickAnalyze = () => {
    if (files.length > 0) {
      setIsEmptyData(false);
      delay(3000).then(() => {
        setIsDataLoading(false);
        console.log("Hello");
      });
    }
  };

  return (
    <div className="flex flex-col justify-between gap-y-2 md:px-0 rounded-lg border-primary">
      <div className="hidden flex-grow overflow-x-hidden overflow-y-scroll rounded-lg p-6 md:block">
        <div className="relative flex h-full flex-col justify-between md:w-64 xl:w-80">
          <div className="hidden md:block">
            <div className="flex flex-1 flex-col gap-y-8 pb-4">
              <div className="uppercase robin-variable text-overline">
                Control Panel
              </div>
              <Dropdown
                label="Models"
                altLabel={<ApiStatus title="Models API active" />}
                placeholder="Select a model..."
                options={modelDropdownOptions}
              />
              <Dropdown
                label="Datasets"
                altLabel={<ApiStatus title="Datasets API active" />}
                placeholder="Select a dataset..."
                options={[
                  ...datasetDropdownOptions,
                  ...(files.length > 0
                    ? [{ value: "claims_02_14_2024 (new)" }]
                    : []),
                ]}
              >
                <div className="text-[12px] mt-2 opacity-85">
                  Last updated on {files.length > 0 ? now : "12:10 02/10/2024"}
                </div>
              </Dropdown>
              <Dropzone
                label={
                  <div className="flex gap-x-1 items-center">
                    <FaDatabase size={10} color={COLORS.primary} />
                    Upload new datasets
                  </div>
                }
                uploadContent="Upload a new dataset here"
                setFiles={setFiles}
              >
                {files.length > 0 && (
                  <div className="flex mt-4 items-center gap-x-3">
                    <div className="opacity-90 text-[12px]">
                      Uploaded files:
                    </div>
                    {files.map((file) => (
                      <div className="border-primary text-[12px] py-1 px-2 rounded-lg">
                        {file.name}
                      </div>
                    ))}
                  </div>
                )}
              </Dropzone>
              <Range
                label="Sensitivity"
                min={0}
                max={1}
                value={0.5}
                step={0.1}
              />
              <Range
                label="Chunk length"
                min={0}
                max={1000}
                value={200}
                step={10}
              />
              <div
                className="flex flex-grow border-primary rounded-lg items-center gap-x-2 justify-center text-white py-2 hover:cursor-pointer hover:bg-secondary"
                onClick={onClickAnalyze}
              >
                <AiFillThunderbolt />
                Analyze
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
