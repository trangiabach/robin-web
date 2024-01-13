"use client";
import { HomeCard } from "./Card";
import { helmModel, holmesModel, robinModel } from "./consts";

export const Models = () => {
  return (
    <div className="flex-grow px-4 pb-10 md:px-9 lg:px-10">
      <div className="flex h-full w-full flex-col gap-y-6">
        <HomeCard {...robinModel} />
        <HomeCard {...helmModel} />
        <HomeCard {...holmesModel} />
      </div>
    </div>
  );
};
