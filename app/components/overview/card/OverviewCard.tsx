import { FC, PropsWithChildren, ReactNode } from "react";

interface OverviewCardProps extends PropsWithChildren {
  title: string;
  description: string;
  id?: string;
  graphic?: ReactNode;
}

export const OverviewCard: FC<OverviewCardProps> = ({
  title,
  description,
  children,
  id,
  graphic,
}) => {
  return (
    <div
      className="border-primary px-6 w-full py-12 rounded-lg bg-secondary"
      id={id}
    >
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        <div className="mb-5 md:w-1/2 lg:mb-0">
          <div className="text-3xl lg:text-5xl robin-variable-cut">{title}</div>
          <div className="text-xs lg:text-base my-5 opacity-90">
            {description}
          </div>
          {children}
        </div>
        <div className="flex-grow">{graphic}</div>
      </div>
    </div>
  );
};
