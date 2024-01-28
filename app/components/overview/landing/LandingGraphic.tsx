import Spline from "@splinetool/react-spline";
import { FC } from "react";

interface LandingGraphicProps {
  url: string;
}

export const LandingGraphic: FC<LandingGraphicProps> = ({ url }) => {
  return (
    <div className="h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] md:px-0 md:absolute left-[50%] top-[50%] md:-translate-y-1/2">
      <Spline
        className="pointer-events-none top-0"
        // scene="https://prod.spline.design/XHP0D9R1UByCFL-d/scene.splinecode"
        scene={url}
      />
    </div>
  );
};
