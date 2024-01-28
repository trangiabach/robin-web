import { FC, PropsWithChildren } from "react";

export interface SectionTextProps extends PropsWithChildren {
  title: string;
  subtitle: string;
  description: string;
}

export const SectionText: FC<SectionTextProps> = ({
  title,
  subtitle,
  description,
  children,
}) => {
  return (
    <div className="w-full md:w-1/2 xl:w-2/5 text-white z-10">
      <div className="text-3xs uppercase robin-text relative z-content mb-4 lg:mb-5">
        {subtitle}
      </div>
      <div className="text-4xl  md:text-5xl lg:text-6xl robin-variable-cut relative z-content w-[90%] text-primary">
        {title}
      </div>
      <div className="relative mt-4 md:mt-12" />
      <div className="relative z-content w-full">
        <div className="text-xs lg:text-base font-body mb-5 max-w-[430px] lg:mb-8">
          {description}
        </div>
      </div>
      {children}
    </div>
  );
};
