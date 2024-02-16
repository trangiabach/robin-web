"use client";
import { OverviewCard } from "@/app/components/overview/card/OverviewCard";
import {
  LandingSectionTextRobinHolmes,
  WhyOptionsRobinHolmes,
} from "@/app/components/overview/consts";
import { EmailInput } from "@/app/components/overview/EmailInput";
import { ExplorePlatform } from "@/app/components/overview/landing/ExplorePlatform";
import { LandingGraphic } from "@/app/components/overview/landing/LandingGraphic";
import { SectionContainer } from "@/app/components/overview/SectionContainer";
import { SectionText } from "@/app/components/overview/SectionText";
import { WhySection } from "@/app/components/overview/why";
import Image from "next/image";

export default function RobinHuntOverview() {
  return (
    <div className="w-full">
      <SectionContainer>
        <SectionText {...LandingSectionTextRobinHolmes}>
          <ExplorePlatform />
        </SectionText>
        <div className="my-5" />
        <LandingGraphic url="https://prod.spline.design/AMA8mv-IHVDcW5Wz/scene.splinecode" />
      </SectionContainer>
      <SectionContainer>
        <WhySection title="Why Robin-HOLMES" options={WhyOptionsRobinHolmes} />
      </SectionContainer>
      <SectionContainer>
        <OverviewCard
          title="We are still building, but we can keep you updated!"
          description="Access the latest updates on building the next AI platform for healthcare fraudulence via email"
          id="still-building"
          graphic={
            <Image
              src="/images/robin-landing.png"
              alt="Robin Dashboard Landing"
              width={500}
              height={500}
              className="w-full h-auto border-primary rounded-lg p-4"
            />
          }
        >
          <div className="py-3" />
          <EmailInput />
        </OverviewCard>
      </SectionContainer>
    </div>
  );
}
