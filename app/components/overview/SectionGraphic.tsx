import { FC, PropsWithChildren } from "react";

export const SectionGraphic: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full md:w-1/2 xl:w-3/5 text-white">{children}</div>;
};
