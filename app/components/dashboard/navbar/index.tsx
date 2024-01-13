import { navOptions } from "./consts.ts";
import { Logo } from "./Logo";
import { NavOptions } from "./NavOptions";

export const DashboardNavbar = () => {
  return (
    <div className="z-navigation flex w-full items-center justify-between rounded-lg border py-3 px-4 border-primary text-white">
      <Logo />
      <NavOptions options={navOptions} />
    </div>
  );
};
