import type { Metadata } from "next";
import "./globals.css";
import { FontConfig } from "@/fonts";
import { DashboardNavbar } from "./components/dashboard/navbar";
import { DashboardContainer } from "./components/dashboard/container";

export const metadata: Metadata = {
  title: "Robin - AI Healthcare Fraud Detection",
  description:
    "Robin is an end-to-end healthcare fraud detection tool that streamlines the process of labeling and analyzing claims as well as boosts fraud classification accuracy by over 25%. Provide any claims or privder metadata and Robin will perform detection of fraudulence and offer in-depth analysis of anomalies and indicators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <FontConfig />
      <body className="robin-text bg-black text-white">
        <div className="w-screen max-w-page h-screen mx-auto overflow-y-auto md:overflow-y-visible flex flex-col flex-1 overflow-x-hidden">
          <div
            className="m-3 sticky top-0 z-30 bg-white/5"
            style={{
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
            }}
          >
            <DashboardNavbar />
          </div>
          <DashboardContainer>{children}</DashboardContainer>
        </div>
      </body>
    </html>
  );
}
