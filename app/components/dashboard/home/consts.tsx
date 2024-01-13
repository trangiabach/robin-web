"use client";

import { clientRoutes } from "@/app/lib/routes";
import { COLORS } from "@/colors";
import { IconType } from "react-icons";
import { modelIconMap } from "../navbar/consts";
import { Card } from "./types";

export const ModelIcon = ({ icon }: { icon: IconType }) => {
  const IconComponent = icon;
  return (
    <div className="grow flex items-center justify-center">
      <IconComponent color={COLORS.primary} size={150} />
    </div>
  );
};

export const robinModel: Card = {
  title: "Robin",
  description:
    "Robin is an interface for identifying fraudelence for healthcare claims. Provide any claims' metadata and Robin can output a correct classification. In the future, Robin will also support its classifications with cited sources and general reasonings.",
  button: {
    text: "Try Robin",
    href: clientRoutes.models("robin"),
  },
  graphic: <ModelIcon icon={modelIconMap["robin"]} />,
};

export const helmModel: Card = {
  title: "Hunt",
  description:
    "Hunt is an interface for identifying fraudelence for provider claims. Provide any providers' metadata and Helm can output a correct classification. In the future, Hunt will also support its classifications with cited sources and general reasonings.",
  button: {
    text: "Try Hunt",
    href: clientRoutes.models("helm"),
  },
  graphic: <ModelIcon icon={modelIconMap["hunt"]} />,
};

export const holmesModel: Card = {
  title: "Holmes",
  description:
    "Holmes is an interface for in-depth analysis for fraudulence for any healthcare metadata. Use it to gather detailed views of feature anomalies and fraud indicators, all backed by a massive database of healthcare fraudulent cases.",
  button: {
    text: "Try Holmes",
    href: clientRoutes.models("holmes"),
  },
  graphic: <ModelIcon icon={modelIconMap["holmes"]} />,
};
