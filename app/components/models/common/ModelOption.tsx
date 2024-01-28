import { COLORS } from "@/colors";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { iconSize } from "./consts";

interface ModelOptionProps {
  name: string;
  icon?: IconType;
  className?: string;
}

export const ModelOption: FC<ModelOptionProps> = ({
  name,
  icon,
  className,
}) => {
  const IconComponent = icon;

  return (
    <Link href="">
      <div
        className={classNames(
          "flex items-center gap-x-2 border-primary min-h-[40px] rounded-lg px-2 min-w-[120px] justify-center hover:cursor-pointer transition-colors text-white hover:bg-secondary",
          className
        )}
      >
        {IconComponent && (
          <IconComponent size={iconSize} color={COLORS.primary} />
        )}
        <span className="text-sm">{name}</span>
      </div>
    </Link>
  );
};
