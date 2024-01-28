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
      {IconComponent && <IconComponent color={COLORS.primary} size={150} />}
    </div>
  );
};

export const robinModel: Card = {
  title: "Robin-hunt",
  description:
    "Robin-hunt is an interface for identifying fraudelence for healthcare claims. Provide any claims' metadata and Robin-hunt can output a correct classification of fraudulence. In the future, Robin-hunt will also support its classifications with cited sources and general reasonings.",
  button: {
    text: "Try Robin-hunt",
    href: clientRoutes.overviewModels("robin-hunt"),
  },
  graphic: <ModelIcon icon={modelIconMap["robin-hunt"]} />,
};

export const holmesModel: Card = {
  title: "Robin-holmes",
  description:
    "Robin-holmes is an interface for in-depth analysis for fraudulence for any healthcare metadata. Use it to gather detailed views of feature anomalies and fraud indicators, all backed by a massive database of healthcare fraudulent cases.",
  button: {
    text: "Try Robin-holmes",
    href: clientRoutes.overviewModels("robin-holmes"),
  },
  graphic: <ModelIcon icon={modelIconMap["robin-holmes"]} />,
};
