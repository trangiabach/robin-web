"use client";
import { useMetrics } from "./MetricsProvider";
import { FeatureImportanceChart } from "./mocks/FeatureImportanceChart";
import { FlaggedProvidersTable } from "./mocks/FlaggedProvidersTable";
import { MetricCount } from "./mocks/MetricCount";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { COLORS } from "@/colors";
import { MdOutlineDownloading } from "react-icons/md";
import { ProviderQuantityGraph } from "./mocks/ProviderQuantityGraph";

export const MetricsDashboard = () => {
  const { isEmptyData, isDataLoading } = useMetrics();

  if (isEmptyData) {
    return (
      <div className="flex flex-grow flex-col rounded-lg border border-primary md:overflow-y-auto bg-gradient-to-b from-black to-green-950">
        <div className="flex w-full h-full items-center justify-center">
          <div className="flex flex-col text-center items-center">
            <BsDatabaseFillAdd size={90} color={COLORS.primary} />
            <div className="py-5" />
            <div className="text-sm opacity-80">Wow, so empty!</div>
            <div className="text-5xl robin-variable-cut text-primary">
              Upload a dataset to get started!
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isDataLoading) {
    return (
      <div className="flex flex-grow flex-col rounded-lg border border-primary md:overflow-y-auto bg-gradient-to-b from-black to-green-950">
        <div className="flex w-full h-full items-center justify-center">
          <div className="flex flex-col text-center items-center">
            <MdOutlineDownloading
              className="animate-spin"
              size={90}
              color={COLORS.primary}
            />
            <div className="py-5" />
            <div className="text-5xl robin-variable-cut">Analyzing data...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-grow flex-col rounded-lg border border-primary md:overflow-y-auto">
      <div className="flex border-b-primary items-center md:px-4 md:py-3 uppercase gap-x-2">
        Analysis for claims dataset:{" "}
        <div className="border-primary text-sm rounded-lg py-1 px-2">
          claims_02_14_2024.csv
        </div>
      </div>
      <div className="my-2" />
      <div className="flex flex-grow flex-col gap-4 overflow-y-auto px-4 py-3">
        <div className="flex">
          <MetricCount />
          <div className="mx-10" />
          <FlaggedProvidersTable />
        </div>
        <div className="my-8" />
        <FeatureImportanceChart />
        <div className="my-3" />
        <ProviderQuantityGraph />
      </div>
      <div className="py-2" />
    </div>
  );
};
