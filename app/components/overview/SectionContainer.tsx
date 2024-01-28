import { FC, PropsWithChildren } from "react";

export const SectionContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full z-content py-12 lg:py-20 max-w-[1320px] mx-auto px-5 md:px-10 lg:px-12 flex flex-col md:flex-row md:overflow-hidden relative">
      {children}
    </div>
  );
};
