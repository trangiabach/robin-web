import { COLORS } from "@/colors";
import Link from "next/link";
import { GoQuestion } from "react-icons/go";
import { iconSize } from "./consts";

export const GetHelp = () => {
  return (
    <Link href="mailto:trangiabach22@gmail.com">
      <div className="flex items-center gap-x-2 justify-center text-white rounded-lg hover:bg-secondary hover:cursor-pointer px-2 min-h-[40px]">
        <GoQuestion color={COLORS.primary} size={iconSize + 5} />
        <span className="text-sm">Get help</span>
      </div>
    </Link>
  );
};
