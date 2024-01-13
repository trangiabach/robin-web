"use client";

import { COLORS } from "@/colors";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { ComingSoon } from "./ComingSoon";
import { NavOption } from "./types";
import { IoChevronDown } from "react-icons/io5";
import { NO_LINK_HREF } from "@/consts";

interface NavOptionsProps {
  options: NavOption[];
}

export const NavOptions: FC<NavOptionsProps> = ({ options }) => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-row items-center gap-y-0 gap-x-4 lg:gap-x-6 justify-between md:w-fit md:max-w-[680px] lg:max-w-[820px] text-white">
      {options.map((option) => {
        const isSelected = pathname.includes(option.name);

        return (
          <div className="flex items-center gap-x-1" key={option.name}>
            <Link
              href={option.href || NO_LINK_HREF}
              className={classNames("uppercase text-overline")}
            >
              {option.subOptions && option.subOptions.length > 0 ? (
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div
                    tabIndex={0}
                    className={classNames(
                      isSelected
                        ? "opacity-100"
                        : "opacity-60 hover:opacity-80",
                      "flex items-center gap-1"
                    )}
                    role="button"
                  >
                    {option.name}
                    <IoChevronDown size={16} />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[33] menu p-2 mt-2 shadow bg-black rounded-box w-52 border-secondary"
                  >
                    {option.subOptions.map((subOption) => (
                      <li key={subOption.name}>
                        <Link
                          className="robin-variable-cut text-white normal-case hover:bg-primary/35 flex items-center justify-between"
                          href={subOption.href || ""}
                        >
                          {subOption.name}
                          {subOption.icon && (
                            <subOption.icon color={COLORS.primary} size={15} />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <span
                  className={
                    isSelected ? "opacity-100" : "opacity-60 hover:opacity-80"
                  }
                >
                  {option.name}
                </span>
              )}
            </Link>
            {option.soon && <ComingSoon />}
          </div>
        );
      })}
    </div>
  );
};
