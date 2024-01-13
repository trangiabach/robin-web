import type { Metadata } from "next";
import "./globals.css";
import { FontConfig } from "@/fonts";
import { DashboardNavbar } from "./components/dashboard/navbar";
import { DashboardContainer } from "./components/dashboard/container";

export const metadata: Metadata = {
  title: "Robin - AI Healthcare Fraud Detection",
  description:
    "Robin is the end-to-end platform for heatlhcare fraud detection. Provide any claims or privder metadata and Robin will perform detection of fraudulence and offer in-depth analysis of anomalies and indicators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <FontConfig />
      <body className="robin-text bg-black">
        <div className="w-screen max-w-page h-screen mx-auto overflow-y-auto md:overflow-y-visible flex flex-col flex-1">
          <div className="m-3">
            <DashboardNavbar />
          </div>
          <DashboardContainer>{children}</DashboardContainer>
        </div>
      </body>
    </html>
  );
}
