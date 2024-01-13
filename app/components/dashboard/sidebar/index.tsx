import { exploreSidebarOptions, settingsSidebarOptions } from "./consts";
import { DashboardSidebarOptions } from "./SidebarOptions";
import { COLORS } from "@/colors";
import { FaRegQuestionCircle } from "react-icons/fa";
import Link from "next/link";

export const DashboardSideBar = () => {
  return (
    <div className="flex flex-col justify-between overflow-auto border-primary md:rounded-lg md:border md:w-42 w-full h-full lg:w-56 px-4 md:py-6 text-white">
      <div className="flex flex-col gap-y-9">
        <DashboardSidebarOptions options={exploreSidebarOptions} />
        <DashboardSidebarOptions options={settingsSidebarOptions} />
      </div>
      <Link href="mailto:trangiabach22@gmail.com">
        <div className="text-overline flex items-center gap-x-2">
          <FaRegQuestionCircle size={13} color={COLORS.primary} />
          <span className="text-white opacity-80 hover:opacity-100">
            Questions? Ask away!
          </span>
        </div>
      </Link>
    </div>
  );
};
