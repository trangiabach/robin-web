"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartArea,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { COLORS } from "@/colors";
import { robinText } from "@/fonts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.color = "white";
ChartJS.defaults.font.family = robinText.style.fontFamily;
ChartJS.defaults.borderColor = "rgb(63 63 70)";

export const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Feature Importance Chart",
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "Importance",
      },
    },
  },
};

const labels = [
  "Tot_Bene_Day_Srvcs",
  "Tot_Srvc",
  "Avg_Mdcr_Pym",
  "Tot_Srvcs_max",
  "Tot_Sbmtd_Chrg",
  "Bene_Avg_Age",
];

const fakeData = labels.map(() => faker.number.float({ min: 0, max: 10 }));

const fakeDataAverage = (
  fakeData.reduce((a, b) => a + b) / fakeData.length
).toFixed(1);

export const data: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      data: fakeData,
      borderWidth: 1,
      borderColor: COLORS.primary,
    },
  ],
};

export const createGradient = (
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  start: string,
  end: string
) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, start);
  gradient.addColorStop(1, end);

  return gradient;
};

export const FeatureImportanceChart = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>(data);
  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(
          chart.ctx,
          chart.chartArea,
          "#052e16",
          "green"
        ),
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <div className="w-full border-primary px-6 py-4 rounded-lg">
      <div className="flex justify-between">
        <div className="uppercase robin-variable text-lg text-primary">
          Feature Importance
        </div>
        <div className="stats text-white bg-black">
          <div className="stat">
            <div className="stat-title">Total notable features</div>
            <div className="stat-value text-[25px] text-primary">
              {labels.length}
            </div>
            <div className="stat-desc opacity-80">
              In line with expectations
            </div>
          </div>
          <div className="stat border-l-primary">
            <div className="stat-title">Average Feature Importance</div>
            <div className="stat-value text-[25px] text-primary">
              {fakeDataAverage}
            </div>
            <div className="stat-desc opacity-80">8% lower than average</div>
          </div>
        </div>
      </div>
      <div className="mb-5" />
      <div className="flex items-center justify-center max-h-[400px]">
        <Bar ref={chartRef} options={options} data={chartData} />
      </div>
    </div>
  );
};
