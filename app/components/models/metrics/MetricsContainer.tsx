"use client";
import { FC, PropsWithChildren } from "react";
import { MetricContextProvider } from "./MetricsProvider";

export const MetricContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MetricContextProvider>
      <div className="flex flex-grow flex-col-reverse overflow-y-auto md:flex-row md:gap-3 mx-3 pb-3 md:p-0">
        {children}
      </div>
    </MetricContextProvider>
  );
};
