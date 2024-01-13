import { Metadata } from "next";
import { DashboardHome } from "../components/dashboard/home/DashboardHome";
import { DashboardSideBar } from "../components/dashboard/sidebar";

export const metadata: Metadata = {
  title: "Dashboard - Robin AI",
};

export default function DashboardHomePage() {
  return (
    <>
      <div className="ml-3 hidden md:flex">
        <DashboardSideBar />
      </div>
      <DashboardHome />
    </>
  );
}
