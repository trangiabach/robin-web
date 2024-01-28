import { FC } from "react";
import { WhyOption } from "./types";

interface WhySectionProps {
  title: string;
  options: WhyOption[];
}

export const WhySection: FC<WhySectionProps> = ({ title, options }) => {
  return (
    <div className="flex flex-col">
      <div className="relative z-content mb-12 max-w-full sm:max-w-container-md">
        <div className="text-4xl lg:text-6xl text-primary robin-variable-cut mb-4">
          {title}
        </div>
      </div>
      <div className="grid w-full grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <div
            className="border-primary flex bg-gradient-to-r from-black to-green-950 px-4 py-5 gap-x-8 rounded-lg min-h-[150px] md:min-h-[200px]"
            key={index}
          >
            <div className="text-6xl md:text-8xl robin-variable-cut block">
              {index + 1}
            </div>
            <div className="flex flex-col">
              <div className="text-2xl lg:text-3xl mb-4 w-3/4">
                {option.title}
              </div>
              <div className="mb-2 md:mb-4" />
              <div className="text-xs lg:text-base opacity-90">
                {option.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
