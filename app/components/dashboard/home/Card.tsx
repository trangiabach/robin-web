"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Card } from "./types";
import { FaArrowRightLong } from "react-icons/fa6";
import classNames from "classnames";

interface HomeCardProps extends Card {
  className?: string;
}

export const HomeCard: FC<HomeCardProps> = ({
  title,
  description,
  button,
  graphic,
  className,
}) => {
  const router = useRouter();
  const onClickButton = () => {
    if (button?.href) {
      router.push(button.href);
    }
  };

  return (
    <div
      className={classNames(
        "flex flex-col rounded-lg p-4 md:flex-wrap md:p-8 xl:flex-row overflow-hidden border-secondary order-1 text-white bg-accent",
        className
      )}
    >
      <div className="flex flex-col gap-y-3 w-full xl:w-1/2">
        <div className="text-2xl lg:text-h5 robin-variable-cut font-[420]">
          {title}
        </div>
        <div className="text-overline font-body opacity-80">{description}</div>
        {button && (
          <div className="w-fit pt-7 pb-3 focus:outline-none disabled:cursor-not-allowed inline-block">
            <div
              onClick={onClickButton}
              className="relative flex gap-x-2 items-center justify-center bg-primary hover:cursor-pointer rounded-md px-3 py-2 hover:bg-orange-400 transition ease-in-out"
            >
              {button.text}
              <FaArrowRightLong size={15} />
            </div>
          </div>
        )}
      </div>
      {graphic}
    </div>
  );
};
