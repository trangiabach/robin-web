"use client";

import { clientRoutes } from "@/app/lib/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const getRouteName = (pathname: string) => {
  const routeName = pathname.replace("/", "");

  if (!routeName.includes("/")) {
    return [routeName];
  } else if (routeName.includes("models")) {
    const subRoutes = routeName.split("/");

    return subRoutes;
  }

  return [pathname];
};

export const Logo = () => {
  const pathname = usePathname();

  const routes = getRouteName(pathname);

  const primaryRouteName = routes[0];

  const areSecondaryRoutes = routes.length > 1;

  return (
    <Link
      href={clientRoutes.dashboard}
      className="flex items-center mr-3 text-logo gap-1"
    >
      <Image
        src="/images/robin-logo.png"
        width={27}
        height={27}
        alt="Robin Dashboard Logo"
        className="mr-1"
      />
      <span className="robin-variable-cut text-primary">robin</span>
      <span className="robin-variable font-light">{primaryRouteName}</span>
      {areSecondaryRoutes && (
        <>
          <div className="w-[8px] h-[8px] rounded-full bg-orange-400 mx-1"></div>
          <div>{routes[1]}</div>
        </>
      )}
    </Link>
  );
};
