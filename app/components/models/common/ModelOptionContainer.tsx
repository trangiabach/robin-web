import { FC, PropsWithChildren } from "react";

export const ModelOptionsContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center space-x-3 overflow-x-auto">
      {children}
    </div>
  );
};
