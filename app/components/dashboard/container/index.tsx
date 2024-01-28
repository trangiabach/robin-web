"use client";
import { clientRoutes } from "@/app/lib/routes";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { PropsWithChildren } from "react";
import { ModelNavbar } from "../../models/common/Navbar";

interface DashboardContainerProps extends PropsWithChildren {}

export const DashboardContainer: FC<DashboardContainerProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const isOverviewPage = pathname.includes("overview");
  const isRobinHuntPage =
    pathname.includes(clientRoutes.models("robin-hunt")) && !isOverviewPage;

  return (
    <>
      {isRobinHuntPage && <ModelNavbar />}
      <div
        className={classNames(
          "flex w-full flex-grow justify-self-center pb-3 md:gap-x-3 md:h-[calc(100vh-74px)] bg-black",
          isOverviewPage ? "md:h-auto" : "md:h-[calc(100vh-74px)]"
        )}
      >
        {children}
      </div>
    </>
  );
};
