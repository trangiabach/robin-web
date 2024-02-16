"use client";
import { COLORS } from "@/colors";
import { robinText } from "@/fonts";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { datasetDropdownOptions } from "../consts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

ChartJS.defaults.color = "white";
ChartJS.defaults.font.family = robinText.style.fontFamily;
ChartJS.defaults.borderColor = "rgb(63 63 70)";

const labels = [
  ...datasetDropdownOptions.map((option) => option.value),
  "claims_02_14_2024.csv (Current)",
];

const fakeData = datasetDropdownOptions.map(() =>
  faker.number.int({ min: 10, max: 100 })
);

const avgFakeData = (
  [...fakeData, 14].reduce((a, b) => a + b) / fakeData.length
).toFixed(1);

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "Quantity",
      },
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      data: [...fakeData, 14],
      backgroundColor: "rgba(126, 174, 120, 0.2)",
      fill: true,
      borderColor: COLORS.primary,
    },
  ],
};

export const ProviderQuantityGraph = () => {
  return (
    <div className="w-full h-full border-primary px-6 py-4 rounded-lg">
      <div className="flex justify-between">
        <div className="uppercase text-primary">
          Flagged Provider Quantity over Datasets
        </div>
        <div className="stats text-white bg-black">
          <div className="stat">
            <div className="stat-title">Total datasets</div>
            <div className="stat-value text-[25px] text-primary">
              {labels.length}
            </div>
            <div className="stat-desc opacity-80">Processed by Robin-HUNT</div>
          </div>
          <div className="stat border-l-primary">
            <div className="stat-title">Average flagged providers quantity</div>
            <div className="stat-value text-[25px] text-primary">
              {avgFakeData}
            </div>
            <div className="stat-desc opacity-80">over 6 datasets</div>
          </div>
        </div>
      </div>
      <div className="mb-8" />
      <div className="flex items-center justify-center max-h-[400px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
