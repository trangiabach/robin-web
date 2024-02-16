import { ModelOption } from "./ModelOption";
import { ModelOptionsContainer } from "./ModelOptionContainer";
import { SiGoogleanalytics } from "react-icons/si";
import { SiAffine } from "react-icons/si";
import { GetHelp } from "./GetHelp";
import { clientRoutes } from "@/app/lib/routes";

export const ModelNavbar = () => {
  return (
    <div className="mx-3 mb-3">
      <div className="flex justify-between rounded-lg border-primary p-3">
        <div className="flex w-full items-center justify-between">
          <ModelOptionsContainer>
            <ModelOption
              name="Analysis"
              icon={SiGoogleanalytics}
              href={clientRoutes.robinAnalysisPage}
            />
            <ModelOption
              name="Fine-tuning"
              icon={SiAffine}
              href={clientRoutes.robinFinetuningPage}
            />
          </ModelOptionsContainer>
          <div className="hidden md:block">
            <div className="flex w-full items-center justify-between space-x-2">
              <GetHelp />
              <ModelOption
                name="Robin-hunt Overview"
                className="min-w-[95px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
