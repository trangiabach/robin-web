import { COLORS } from "@/colors";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { IconType } from "react-icons";
import { iconSize } from "./consts";

interface ModelOptionProps {
  name: string;
  icon?: IconType;
  className?: string;
  href?: string;
}

export const ModelOption: FC<ModelOptionProps> = ({
  name,
  icon,
  className,
  href,
}) => {
  const IconComponent = icon;
  const pathname = usePathname();

  const isSelected = pathname.includes(name.toLowerCase());

  return (
    <Link href={href || ""}>
      <div
        className={classNames(
          "flex items-center gap-x-2 border-primary min-h-[40px] rounded-lg px-2 min-w-[120px] justify-center hover:cursor-pointer transition-colors text-white",
          isSelected
            ? "bg-gradient-to-r from-green-900 to-green-950"
            : "hover:bg-secondary",
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
