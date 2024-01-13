import { FC } from "react";
import { PropsWithChildren } from "react";

interface DashboardContainerProps extends PropsWithChildren {}

export const DashboardContainer: FC<DashboardContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex w-full flex-grow justify-self-center pb-3 md:gap-x-3 md:h-[calc(100vh-74px)]">
      {children}
    </div>
  );
};
