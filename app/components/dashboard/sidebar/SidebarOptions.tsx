"use client";
import { NO_LINK_HREF } from "@/consts";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { ComingSoon } from "../navbar/ComingSoon";
import { SidebarOptions } from "./types";

interface SidebarOptionsProps {
  options: SidebarOptions;
}
export const DashboardSidebarOptions: FC<SidebarOptionsProps> = ({
  options,
}) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-y-1">
      <span className="text-overline uppercase robin-variable-cut text-overline">
        {options.title}
      </span>
      {options.subOptions.map((subOption) => {
        const isSelected = subOption.href === pathname;
        return (
          <Link
            className="text-overline py-0.5"
            key={subOption.name}
            href={subOption.href || NO_LINK_HREF}
          >
            <div className="flex gap-x-2 items-center">
              {isSelected && (
                <div className="w-[6px] h-[6px] bg-primary rounded-full" />
              )}
              <span
                className={classNames(
                  isSelected ? "robin-variable" : "opacity-70 hover:opacity-90"
                )}
              >
                {subOption.name}
              </span>
              {subOption.soon && <ComingSoon />}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
